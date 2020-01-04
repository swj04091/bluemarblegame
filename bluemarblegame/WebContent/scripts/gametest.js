/**
 * 
 */
	let donate = 0;
	let turn = 0;

	let condition;
	let who;
	let person;//플레이어에 재산을 출력할수 있는 태그
	let city = "";
	let cityName;
	//주사위 돌리기 
	let gamer;
	let firstDice = 0; 
	let secondDice = 0;
	
	function movedice(){
				gamer = player[turn];
				//------------------------------각 플레이어에 변수 설정
				console.log("before",gamer);

				//땅 사는 프로그램
				
				
				gamer.beforePoint = gamer.afterPoint;
				
				firstDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
				 //--------------------------------------두번째 주사위 
				secondDice = Math.floor(Math.random()*6+1);//랜덤 출력 1~6
				
				console.log("주사위 1:",firstDice,"--주사위 2:",secondDice);
					//------------처음 받는 돈
		//-------------------------------------------------------------------주사위 돌리기 전,후		
				//주사위 출력
			/*	$("#one").append("<input class='pic' type= 'image' src='/board_Game/images/"+firstDice+".jpg'>");
				$("#two").append("<input class='plc' type= 'image' src='/board_Game/images/"+secondDice+".jpg'>")*/;
				
				
				let move = firstDice + secondDice;//--------------------------------이동한 칸  
				if(/*gamer.beforePoint==31 || */gamer.beforePoint==11){//무인도랑 우주여행일때 이동 X
					move=0;
				}
				console.log("player:",gamer.player,"-move:",move);
				
				console.log("after Point+:",gamer.afterPoint);
				//주사위 돌린 후 위치 
				gamer.afterPoint = parseInt(gamer.beforePoint) + parseInt(move);
				console.log("after Point+++:",gamer.afterPoint); 
				
				//-----------------------------------------------한바퀴 이상 돌았을때 
				if(gamer.afterPoint>40){//-----한 바퀴에 마지막이 40번째칸
					gamer.afterPoint = gamer.afterPoint % 40;//다시 1초 돌려준다
					gamer.money = gamer.money + 200000;	//---------------월급			
					console.log("월급 추가money : ",gamer.money);
					//gamer.round = gamer.round + 1;//각 한바퀴를 돌은 횟수
					console.log("round:",gamer.round);
					
					//person = "#player"+gamer.player+"_money";
					//$(person).empty();//비우고,
					//$(person).text(gamer.money);//---------재산 
					//console.log("player tag:",person);
					//console.log("money",gamer.money);
					
				}//-----------------------------------------------------------------------------------주사
				
				//주사위 둘리기 전 위치 태그
				gamer.beforeId = "#p"+gamer.beforePoint; 
				
				//주사위 돌린 후 위치 태그
				gamer.afterId = "#p"+gamer.afterPoint;
		
				//주사위 돌리기 전 이미지 삭제
				$(gamer.beforeId).find(".player"+gamer.player).remove();
				//캐릭터 출력
				$(gamer.afterId).append("<input id='pl' class='player"+gamer.player+"' type= 'image' src='/bluemarblegame/img/pin"+gamer.player+".png'>");
				
				switch(gamer.afterPoint){
			/*	
				case 3:
				case 8:
				case 13:
				case 18:
				case 23:
				case 36:
						alert("gold card");
						goldenKey(gamer);*/
						
			case 39:  //사회 복지 기금 15만원 지출 
						alert("donate");
						gamer.money -= 150000;
						console.log(gamer.money);
						$(person).empty();
						$(person).text(gamer.money);
						
						donate += 150000; //----기부금 추가
						/*$("#donate").empty();
						$("#donate").text("기부금액:"+donate);*/
						console.log("donate :",donate);
						//alert("기부 땡큐");
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						if(firstDice != secondDice){
							turn += 1;	//-- 매 턴마다 돌아가게 한다
							if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								turn=0;
							}
						 }
						
						break;
					 
				case 21: //사회 복지 단체 기부금 다 받음 
						alert("give");
						gamer.money += donate;//-------기부금 추가
						console.log("give player:",gamer.money);
						$(person).empty();
						$(person).text(gamer.money);
				
						donate=0; //---------기부금 초기화
						/*$("#donate").empty();
						$("#donate").text("기부금액:"+donate);*/
						
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						 if(firstDice != secondDice){
							turn += 1;	//-- 매 턴마다 돌아가게 한다
							if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								turn=0;
							}
						 }
						break;
					
				case 11:	//무인도 도착
						alert("무인도 도착");
						console.log("무인도 도착");
						
						if(gamer.round>2 || firstDice == secondDice){//3번 차례가 지나거나 ,주사위가 더블일때
							gamer.round=0;
						console.log("탈출이다!!!");
						console.log("탈출 전 지점",gamer);
						//afterPoint 지점 지정
						gamer.afterPoint = parseInt(gamer.afterPoint) + parseInt(firstDice) + parseInt(secondDice);
						console.log("탈출 후 지점",gamer);
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforeId = "#p11";
						gamer.afterId = "#p"+gamer.afterPoint;
						
						//주사위 돌리기 전 이미지 삭제
						$(gamer.beforeId).find(".player"+gamer.player).remove();
						//캐릭터 출력
						$(gamer.afterId).append("<input id='pl' class='player"+gamer.player+"' type= 'image' src='/bluemarblegame/img/pin"+gamer.player+".png'>");
						gamer.beforePoint = gamer.afterPoint;
						
						console.log("after+-",gamer);
						
						turn += 1;	//-- 매 턴마다 돌아가게 한다
						if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
							turn=0;
						}
							break;
						}else{
							gamer.round+=1;// 3될때까지
							console.log("무인도 도착",gamer.round,"일")
							
							turn += 1;	//-- 매 턴마다 돌아가게 한다
							if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								turn=0;
							}
							break;
						}	
						
						break;	
				
				/*case 31:	//우주 정거장 도착,원하는 위치로 이동
					alert("space Trip");	
					console.log("우주 여행");
						//값이 1이상일때는 주사위버튼 숨기기,select 보여주기
						if(gamer.round>0){
							gamer.round=0;
							//나라 메뉴 클릭
							$("#spaceTrip").show();
							$("#move").hide();
						}
						//아니면 탈출
						else{
							//도착 했을때 값 추가
								gamer.round += 1;
								gamer.beforePoint = gamer.afterPoint;//before Point 31로
								
								play += 1;	//-- 매 턴마다 돌아가게 한다
								if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
									turn=0;
								}
							}
						console.log("else after",gamer);
							break;*/
								
					default:	
										
						//현재 위치를 주사위 돌리기 전으로 초기화해준다
						gamer.beforePoint = gamer.afterPoint;
						console.log("after",gamer);
						
						if(firstDice != secondDice){
							turn += 1;	//-- 매 턴마다 돌아가게 한다
							if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
								turn=0;
							}
						 }
						break;
				}//----------switch End
				
			}
	
//--------------------------------------------------------------	
 function space(){//--------------------select 클릭
		console.log(gamer);
			//선택한 값을 받아온다
			gamer.afterPoint = $("#trip option:selected").val();//select에서 선택한 option에 값을 afterPoint에 저장
			console.log("이동할 장소",gamer.afterPoint);//확인
			//위치 조건
			if(gamer.afterPoint<31 || gamer.afterPoint>0){
				//gamer.round += 1;
				gamer.money = gamer.money + 200000;	//---------------월급			
				console.log("우주money : ",gamer.money,"round Space:",gamer.round);
				
			/*	$(person).empty();//비우고,
				$(person).text(gamer.money);//---------재산 출력
*/			}
			gamer.beforeId = "#pic31";
			gamer.afterId = "#pic"+gamer.afterPoint;
			console.log("이동할 위치 태그",gamer.afterId,"이동전 위치>:",gamer.beforeId);
		
			//////////////////////////////
			//주사위 돌리기 전 이미지 삭제
			$(gamer.beforeId).find(".player"+gamer.player).remove();
			//캐릭터 출력
			$(gamer.afterId).append("<input id='pl' class='player"+gamer.player+"' type= 'image' src='/bluemarblegame/img/pin"+gamer.player+".png'>");
			
			//현재 위치를 주사위 돌리기 전으로 초기화해준다
			gamer.beforePoint = gamer.afterPoint;
			gamer.beforeId = "#pic"+gamer.beforePoint;
			console.log("after",gamer);
			 
			turn += 1;	//-- 매 턴마다 돌아가게 한다
			if(turn>=player.length){//플레이어 4명 기준 4명이 다 한번씩 했을 경우 첫번째 플레이어로 돌린다
				turn=0;
			}
		//버튼이랑 select hide
			$("#spaceTrip").hide();
			$("#dice").show();
			return;
		}
	
	
	
	$("#dice").click(function(){
		movedice();
	})
	
	$("#gogo").click(function(){
		space();
	})
