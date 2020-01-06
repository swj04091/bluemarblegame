let cityList = [["도시이름", "대지료구매", "대지료통행시"]];
$.ajax({
	 url:"/bluemarblegame/scripts/도시가격.json",
	 method:"POST",
	 async:false,
	 success:function(json){
		$.each(json, function(index, item){
		  cityList.push([item.도시이름, item.대지료구매, item.대지료통행시]);
		});
	 }
 });
console.log(cityList);

let city;

function selectCity(gamer){
	switch(gamer.afterPoint){
		case 2:
			city = city[1];
		case 4:
			city = city[2];
		case 5:
			city = city[3];
		case 6:
			city = city[4];
		case 7:
			city = city[5];
		case 9:
			city = city[6];
		case 10:
			city = city[7];
		case 12:
			city = city[8];
		case 14:
			city = "코펜하겐";
		case 15:
			city = "스톡홀름";
		case 16:
			city = "콩코드여객기";
		case 17:
			city = "베른";
		case 19:
			city = "베를린";
		case 20:
			city = "오타와";
		case 22:
			city = "부에노스아이레스";
		case 24:
			city = "시드니";
		case 25:
			city = "상파울로";
		case 26:
			city = "부산";
		case 27:
			city = "리스본";
		case 28:
			city = "하와이";
		case 29:
			city = "퀸엘리자베스호";
		case 30:
			city = "마드리드";
		case 32:
			city = "도쿄";
		case 33:
			city = "콜럼비아호";
		case 34:
			city = "파리";
		case 35:
			city = "로마";
		case 37:
			city = "런던";
		case 38:
			city = "뉴욕";
		case 40:
			city = "서울";
	}
}

let buyCity = function(){
	if ($(gamer.afterId).find(".owner").text() == 0) {
		let buyGround = confirm("땅을 구매하시겠습니까?")
		if (buyGround) {
			console.log("땅구입");
			gamer.money = gamer.money;
			$(gamer.afterId).find(".owner").text(gamer.player);
		} else {
			console.log("취소");
		}
	} else {
		if ($(gamer.afterId).find(".owner").text() == gamer.player) {
			console.log("내땅");
		} else {
			console.log("땅값 지불");
			//돈 없으면 플레이어 파산
		}
	}
}
