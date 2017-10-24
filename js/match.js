	localStorage.clear();
	function yanse(){
		var adda = parseInt($("#range").val()) - 4;
		console.log(adda);
   		$(".sliding_1").css('background', 'linear-gradient(to right, #FFA500, #ffe88d ' + adda*7.5 + '%, #ffe88d)');
   	}
	
	function abf() {
		var player = $(".player_nb1").val();
		$("#range").val(parseInt(player));
		yanse();
	}
	
	
	function adda() {
		var adda = parseInt($("#range").val());
		$("#range").val(adda - 1);
		$(".player_nb1").val(adda);
		$(".sliding_1").css('background', 'linear-gradient(to right, #FFA500, #ffe88d ' + adda*4.5 + '%, #ffe88d)');
		if(adda === 4 ) {
		alert("已达到玩家数量下限");

	}
	}

	function puls() {
		var adda = parseInt($("#range").val());
		$("#range").val(adda +1);
		$(".player_nb1").val(adda);
		$(".sliding_1").css('background', 'linear-gradient(to right, #FFA500, #ffe88d ' + adda*5.5 + '%, #ffe88d)');
		if(adda === 18 ) {
		alert("已达到玩家数量上限");
	}
	}
	
	(function() {
		var range = document.getElementById("range");
		volume = document.forms[0]["volume"]; //第一次使用这种方式获取document.forms[index][formName];

		//设置初值

		if(range.addEventListener) {
			range.addEventListener("change", function() {
				volume.value = range.value;
			});
		} else {
			range.attachEvent("change", function() {
				volume.value = range.value;
			})
		}
	})();
