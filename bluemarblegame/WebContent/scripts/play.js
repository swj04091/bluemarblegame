/**
 * 
 */
$(document).ready(function(){
	
	//주사위 2개 변수 
	let firstDice = 0;
	let secondDice = 0;
	
	//위치 변수
	let position;
	let move=0;
	let turn=0;
	let play=1;
	let gamer;
	
	function movedice(){
		console.log(turn);
		gamer=player[turn];
		console.log(gamer);
		firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		console.log("f:",firstDice,"s:",secondDice);
		
		if(gamer.beforePoint==31 || gamer.beforePoint==11){//무인도랑 우주여행일때 이동 X
			move=0;
		}
		
		//이전 위치
		gamer.beforeId = "#p"+gamer.beforePoint; 
		//주사위 돌리기 전 이미지 삭제
		//$(gamer.beforeId).find(".player"+gamer.player).remove();

		move=firstDice+secondDice;
		gamer.afterPoint = gamer.beforePoint + move;		
		console.log("확인>",gamer);
		//주사위 돌린 후 위치 태그
		afterId = "#p"+gamer.afterPoint;
		
		//캐릭터 출력
		//$(gamer.afterId).append("<input id='pl' class='player"+gamer.player+"' type= 'image' src='/bluemarblegame/img/pin"+gamer.player+".png'>");
		
		//한바퀴 돌았을때
		if(gamer.afterPoint>40){
			gamer.afterPoint =gamer.afterPoint - 40;
			gamer.round+=1;
			gamer.money = gamer.money + 200000;	//---------------월급			
			console.log("월급 추가money : ",gamer.money);
		}
		console.log(turn,"번째");
		console.log("위치:",gamer.afterPoint);
		//더블 이벤트
		if(firstDice==secondDice){
			console.log("double");
		
			gamer.beforePoint = gamer.afterPoint
			console.log("위치wA:",gamer.beforePoint);
			position="#p"+gamer.beforePoint;
			
			console.log(turn,"번째");
		}else{
			console.log("위치A:",gamer.afterPoint);
			gamer.beforePoint = gamer.afterPoint
			console.log("위치wA:",gamer.beforePoint);
			//차례를 넘긴다.
			turn+=1;
			if(turn>3){
				turn=0;
			}
		}
	
		return gamer.beforePoint
	}
	
	$("#dice").click(function(){
		movedice()
		});

	
});
	