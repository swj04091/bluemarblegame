/**
 * 
 */
$(document).ready(function(){
	
	//주사위 2개 변수 
	let firstDice = 0;
	let secondDice = 0;
	
	//위치 변수
	let position = 1;
	let move=0;
	let turn=0;
	
	
	function movedice(){
		firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		console.log("f:",firstDice,"s:",secondDice);
		player[turn].afterPoint = player[turn].beforePoint + firstDice + secondDice;
		//한바퀴 돌았을때
		if(player[turn].afterPoint>40){
			player[turn].afterPoint = player[turn].afterPoint - 40;
			player[turn].round+=1;
		}
		console.log(turn,"번째");
		console.log("위치:",player[turn].afterPoint);
		//더블 이벤트
		if(firstDice==secondDice){
			console.log("double");
			player[turn].beforePoint = player[turn].afterPoint
			console.log("위치wA:",player[turn].beforePoint);
			console.log(turn,"번째");
		}else{
			console.log("위치A:",player[turn].afterPoint);
			player[turn].beforePoint = player[turn].afterPoint
			console.log("위치wA:",player[turn].beforePoint);
			//차례를 넘긴다.
			turn+=1;
			if(turn>3){
				turn=0;
			}
		}
		return player[turn].beforePoint
	}
	//console.log(player[turn]);
	$("#dice").click(function(){movedice()});

	
});
	