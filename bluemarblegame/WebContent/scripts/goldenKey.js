
//황금열쇠 데이터 삽입
let goldenCard = [["황금열쇠이름", "내용", "상세정보"]];
let card;
$.ajax({
		 url:"/bluemarblegame/scripts/황금열쇠.json",
		 method:"POST",
		 async:false,
		 success:function(json){
			$.each(json, function(index, item){
			  goldenCard.push([item.황금열쇠이름, item.내용, item.상세정보]);
			});
		 }
	  });
let cardno=0;
// 황금열쇠 이벤트 활성화
let goldenKey = function(gamer){
 	   console.log("황금카드",gamer);
 	  
 	   
 	// 카드 내용 실행 함수
 	  let cardAfterPoint = 0;
 	  let cardMoney = 0;
 	  let cardAfterId = 0;

 	  // 황금열쇠 돈 지불
 	  function minusMoney(gamer,cardMoney){
 	  	console.log("money pay>",gamer);
 	  	gamer.money = gamer.money - cardMoney;
 	   	console.log(gamer.money);
 	      $("#player"+gamer.player+"money").val(gamer.money);
 	  }

 	  // 황금열쇠 돈 획득
 	  function plusMoney(gamer,cardMoney){
 	  	console.log("money get>",gamer);
 	  	gamer.money = gamer.money + cardMoney;
 	   	console.log(gamer.money);
 	  	$("#player"+gamer.player+"money").val(gamer.money);
 	  }

 	  // 황긍열쇠 카드 이동
 	  function cardMove(gamer,cardAfterPoint, cardAfterId){
 		  console.log("move>",gamer);
 	  	gamer.afterPoint = cardAfterPoint;
 	      $("#point").val(gamer.afterPoint);
 	   	//html = "<img class='btn-danger"+gamer+"' src='/BlueMarvel/images/p"+gamer+".png'>";
 	      gamer.beforeId = "#p"+gamer.beforePoint;
 	      gamer.afterId = "#p"+cardAfterId;
 	    //  $(player.afterId).append(html);
 	     // $(player.beforeId).find(".btn-danger"+player).remove();
 	      gamer.beforePoint = gamer.afterPoint;
 	      console.log("이동후 위치: "+gamer.afterId);
 	  }
 	   
 	  //카드 섞기
 	  cardno = Math.floor(Math.random()*25)+1;
 	  card = goldenCard[cardno];
 	  console.log("황금열쇠 "+cardno);
 	  console.log(card);
 	   
 	  // 카드 내용 보여주기
 	  setTimeout(function() {
 	  alert(goldenCard[cardno]);
 	  }, 0)
 	  
 	  // 카드 내용 이행
 	  switch(cardno){
 	  	case 1:	//병원비 지불
 	  		minusMoney(gamer,50000);
 	   		break;
 	   	case 2:	//복권당첨
 	   		plusMoney(gamer,200000);
 	   		break;
 	   	case 3:	//꽝
 	   		break;
 	   	
		case 4: //꽝
 	   		break;
 	   	case 5: //무인도
 	   		cardMove(gamer,11,11);
 	   		break;
 	   	case 6: //관광여행(제주)
 	   		cardMove(gamer,6,6);
 	   		break;
 	   	case 7: //과속운전벌금
 	   		minusMoney(gamer,50000);
 	   		break;
 	   	case 8: //해외유학
 	   		minusMoney(gamer,100000);
 	   		break;
 	   	case 9: //연금 혜택
 	   		plusMoney(gamer,50000);
 	   		break;
 	   	case 10: //이사(3칸 뒤로)
 	   		cardMove(gamer,gamer.beforePoint - 3,gamer.beforePoint - 3);
 	   		break;
 	   	case 11: // 고속도로
 	   		cardMove(gamer,1,1);
 	   		break;
 	         /*
 	        	 만약에 한바퀴 도는거면 + 20만원
 	         */
 	   	case 12: //우승
 	   		plusMoney(gamer,100000);
 	   		break;
 	   	case 13: //꽝
 	   		
 	   		break;
 	   	case 14: //항공여행(콩코드 -> 타이페이)
 	   		cardMove(gamer,2,2);
 	   		break;
 	   		/*
 	   		만약에 콩코드 여객기를 누군가 가지고 있으면 결제, 타이페이도 마찬가지로 결제
 	   		*/
 	   	case 15: //유람선여행(퀸엘리자베스-> 베이징)
 	   		cardMove(gamer,4,4)
 	   		break;
 	   		/*
 	   		퀸엘리자베스호 결제, 베이징 결제
 	   		*/
 	   	case 16: //관광여행(부산)
 	   		cardMove(gamer,26,26)
 	   		break;
 	   		/*
 	   		부산 결제
 	   		*/
 	   	case 17: // 생일 축하
 	   		let birth =  10000 * (allPlayer-1);
 	   		minusMoney(gamer,birth);
 	   		break;
 	   	case 18: //장학금 혜택
 	   		plusMoney(gamer,100000);
 	   		break;
 	   	case 19: //노벨평화상
 	   		plusMoney(gamer,300000);
 	   		break;
 	   	case 20: //관광여행(서울)
 	   		cardMove(gamer,40,40);
 	   		break;
 	   		/*
 	   		서울에서 결제
 	   		*/
 	   	case 21: //우주여행 초청장
 	   		cardMove(gamer,31,31);
 	   		break;
 	   	case 22: //꽝
 	   		break;
 	   	case 23: //세계일주 초대권
 	   		plusMoney(gamer,200000);
 	   		break;
 	   	case 24: //이사(뒤로 두칸)
 	   		cardMove(gamer,gamer.beforePoint - 2,gamer.beforePoint - 2)
 	   		break;
 	   	case 25: //사회복지기금배당
 	   		cardMove(gamer,39,39)
 	   		minusMoney(gamer,150000);
 	   		break;
 	   		/*
 	   		15만원을 사회복지기금에 배당
 	   		*/
 	   }
}

