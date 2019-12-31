let goldenCard = [["황금열쇠이름", "내용", "상세정보"]];

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

console.log(goldenCard);

let goldenKey = function(){
	
	//황금열쇠일때!
    if(player[turn].afterId == "#p3" || player[turn].afterId == "#p8" || player[turn].afterId == "#p13" || 
    		player[turn].afterId == "#p18" || player[turn].afterId == "#p23" || player[turn].afterId == "#p36" ){
 	   console.log("황금카드");
 	   
 	   let cardno = Math.floor(Math.random()*30)+1;
 	   goldenCard = goldenCard[cardno];
 	   console.log("황금열쇠 "+cardno);
 	   console.log(card)
 	   setTimeout(function() {
 	   alert(card);
 	   }, 0)
 	   switch(cardno){
 	   	case 1:	//병원비 지불
 	   		minusMoney(player,50000);
 	   		break;
 	   	case 2:	//복권당첨
 	   		plusMoney(player,200000);
 	   		break;
 	   	case 3:	//꽝
 	   		break;
 	   	
			case 4: //꽝
 	   		break;
 	   	case 5: //무인도
 	   		cardMove(player,11,11);
 	   		break;
 	   	case 6: //관광여행(제주)
 	   		cardMove(player,6,6);
 	   		break;
 	   	case 7: //과속운전벌금
 	   		minusMoney(player,50000);
 	   		break;
 	   	case 8: //해외유학
 	   		minusMoney(player,100000);
 	   		break;
 	   	case 9: //연금 혜택
 	   		plusMoney(player,50000);
 	   		break;
 	   	case 10: //이사(3칸 뒤로)
 	   		cardMove(player,player[turn].beforePoint - 3,player[turn].beforePoint - 3);
 	   		break;
 	   	case 11: // 고속도로
 	   		cardMove(player,1,1);
 	   		break;
 	         /*
 	        	 만약에 한바퀴 도는거면 + 20만원
 	         */
 	   	case 12: //우승
 	   		plusMoney(player,100000);
 	   		break;
 	   	case 13: //꽝
 	   		
 	   		break;
 	   	case 14: //항공여행(콩코드 -> 타이페이)
 	   		cardMove(player,2,2);
 	   		break;
 	   		/*
 	   		만약에 콩코드 여객기를 누군가 가지고 있으면 결제, 타이페이도 마찬가지로 결제
 	   		*/
 	   	case 15: //유람선여행(퀸엘리자베스-> 베이징)
 	   		cardMove(player,4,4)
 	   		break;
 	   		/*
 	   		퀸엘리자베스호 결제, 베이징 결제
 	   		*/
 	   	case 16: //관광여행(부산)
 	   		cardMove(player,26,26)
 	   		break;
 	   		/*
 	   		부산 결제
 	   		*/
 	   	case 17: // 생일 축하
 	   		let birth =  10000 * (allPlayer-1);
 	   		minusMoney(player,birth);
 	   		break;
 	   	case 18: //장학금 혜택
 	   		plusMoney(player,100000);
 	   		break;
 	   	case 19: //노벨평화상
 	   		plusMoney(player,300000);
 	   		break;
 	   	case 20: //관광여행(서울)
 	   		cardMove(player,40,40);
 	   		break;
 	   		/*
 	   		서울에서 결제
 	   		*/
 	   	case 21: //우주여행 초청장
 	   		cardMove(player,31,31);
 	   		break;
 	   	case 22: //꽝
 	   		break;
 	   	case 23: //세계일주 초대권
 	   		plusMoney(player,200000);
 	   		break;
 	   	case 24: //이사(뒤로 두칸)
 	   		cardMove(player,player[turn].beforePoint - 2,player[turn].beforePoint - 2)
 	   		break;
 	   	case 25: //사회복지기금배당
 	   		cardMove(player,39,39)
 	   		minusMoney(player,150000);
 	   		break;
 	   		/*
 	   		15만원을 사회복지기금에 배당
 	   		*/
 	   }
    }
}

let cardAfterPoint = 0;
let cardMoney = 0;
let cardAfterId = 0;

function minusMoney(player,cardMoney){
	player[turn].money = player[turn].money - cardMoney;
 	console.log(player[turn].money);
    $("#player"+player[turn]+"money").val(player[turn].money);
}

function plusMoney(player,cardMoney){
	player[turn].money = player[turn].money + cardMoney;
 	console.log(player[turn].money);
	$("#player"+player[turn]+"money").val(player[turn].money);
}

function cardMove(player,cardAfterPoint, cardAfterId){
	player[turn].afterPoint = cardAfterPoint;
    $("#point").val(gamer.afterPoint);
 	html = "<img class='btn-danger"+player[turn]+"' src='/BlueMarvel/images/p"+player[turn]+".png'>";
 	player[turn].beforeId = "#p"+player[turn].beforePoint;
 	player[turn].afterId = "#p"+cardAfterId;
    $(player[turn].afterId).append(html);
    $(player[turn].beforeId).find(".btn-danger"+player).remove();
    player[turn].beforePoint = player[turn].afterPoint;
    console.log("이동후 위치: "+player[turn].afterId);
}