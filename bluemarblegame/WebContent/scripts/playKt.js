/**
 * 
 */

	//주사위 2개 변수 
	let firstDice = 0;
	let secondDice = 0;
	
	//위치 변수
	let position = 1;
	let move=0;
	let turn=0;
	
	// 게임에 필요한 변수
	let gamer;	//플레이어
	let donate; // 기부금
	
	function movedice(){
		firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
		gamer=player[turn];
		console.log("f:",firstDice,"s:",secondDice);
		gamer.afterPoint = gamer.beforePoint + firstDice + secondDice;
		
		//주사위 둘리기 전 위치 태그
		gamer.beforeId = "#p"+gamer.beforePoint; 
		
		//주사위 돌린 후 위치 태그
		gamer.afterId = "#p"+gamer.afterPoint;

		//주사위 돌리기 전 이미지 삭제
		$(gamer.beforeId).find(".player"+gamer.player).remove();
		//캐릭터 출력
		$(gamer.afterId).append("<input id='pl' class='player"+gamer.player+"' type= 'image' src='/bluemarblegame/img/pin"+gamer.player+".png'>");
		
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
			
			//플레이어가 위치한 땅의 이벤트 발생
			switch(gamer.afterPoint){
				
				// 황금열쇠
				case 3:
					goldenKey();
					break;
				
				// 황금열쇠
				case 8:
					goldenKey();
					break;	
					
				case 11:
					//무인도
					break;
				
				// 황금열쇠
				case 13:
					goldenKey();
					break;	
				
					// 황금열쇠
				case 18:
					goldenKey();
					break;	
				
				// 사회복지기금
				case 21:
					gamer.money = gamer.money + donate;
					donate = 0;
					break;
				
					// 황금열쇠
				case 23:
					goldenKey();
					break;	
					
				case 31:
					//우주여행
					break;
				
					// 황금열쇠
				case 36:
					goldenKey();
					break;	
					
				case 39:
					gamer.money = gamer.money-150000;
					donate += 150000;
					break;
				
				default:
					break;
				
			}
			
			//차례를 넘긴다.
			console.log("차례: ",turn);
			turn+=1;
			if(turn>=player.length){
				turn=0;
			}
		}
		console.log("플레이어의 현재위치:",gamer.beforePoint);
		return gamer.beforePoint
	}
	//console.log(gamer);
	$("#dice").click(function(){movedice()});


	