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
		gamer=player[turn];
		console.log("f:",firstDice,"s:",secondDice);
		gamer.afterPoint = gamer.beforePoint + firstDice + secondDice;
		//한바퀴 돌았을때
		if(gamer.afterPoint>40){
			gamer.afterPoint =gamer.afterPoint - 40;
			gamer.round+=1;
			gamer.money = gamer.money + 200000;	//---------------월급			
		}
		console.log(turn,"번째");
		console.log("현재 위치:",gamer.beforePoint);
		console.log("이동 할 위치:",gamer.afterPoint);
		
		//더블 이벤트
		if(firstDice==secondDice){
			console.log("double");
			gamer.beforePoint = gamer.afterPoint
			console.log("이동 후 위치:",gamer.beforePoint);
			console.log(turn,"번째");
		}else{
			gamer.beforePoint = gamer.afterPoint
			console.log("이동 후 위치:",gamer.beforePoint);
			
			if(gamer.afterPoint == 3){
				goldenKey();
			}
			
			//차례를 넘긴다.
			console.log("차례: ",turn);
			turn+=1;
			if(turn>=player.length){
				turn=0;
			}
		}
		console.log("다음 플레이어의 현재위치:",gamer.beforePoint);
		return gamer.beforePoint
	}
	//console.log(gamer);
	$("#dice").click(function(){movedice()});

	
});
	