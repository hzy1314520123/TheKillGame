	function backa() {
		var r = confirm("是否结束本轮游戏？");
		if(r === true) {
			window.location ="index_kill.html";
			return true;
		} else {
			return false;
		}
	}

	function rizhi() {
		window.location.href = "diary.html";
	}

	function wanshan() {
		var r = confirm("功能完善中...");
		if(r === true) {
			window.location ="index_kill.html";
			return true;
		} else {
			return false;
		}
	}

	function killing() {
		window.location.href = "killer.html";
	}

	var hptopone = localStorage.getItem("hptoponeb");
	var snb = localStorage.getItem("snba");
	if(hptopone != null || snb != null) {
		$(".kill_dayone").css("display", "block");
		$(".kill_dayone").text(snb + "被杀手杀死，真实身份是" + hptopone);
		$(".killer_dayone p").css("background-color", "#83b09a");
		$(".killer_dayone span").css("color", "#83b09a");
	}

	var flag = true;
	var last_word = function() {
		flag = !flag;
		if(flag) {
			alert("请进行游戏下一项活动");
			return;
		} else {
			$(".bg-model").fadeTo(300, 1);
			$(".b_l").click(function() {
				$(".bg-model").hide(300);
			});
			$(".b_r").click(function() {
				$(".bg-model").hide(300);
				$("#last_word p").css("background-color", "#83b09a");
				$("#last_word span").css("color", "#83b09a");
			});
		}

	}
	var flaga = true;
	var state = function() {
		flaga = !flaga;
		if(flaga) {
			alert("请进行游戏下一项活动");
			return;
		} else {
			$(".bg-model").fadeTo(300, 1);
			$(".b_l").click(function() {
				$(".bg-model").hide(300);
			});
			$(".b_r").click(function() {
				$(".bg-model").hide(300);
				$("#state p").css("background-color", "#83b09a");
				$("#state span").css("color", "#83b09a");
			});
		}
	}

	function vote() {
		window.location.href = "vote.html";
	}
	var hptoponed = localStorage.getItem("hptoponec");
	var snbd = localStorage.getItem("snbb");
	if(hptoponed != null || snbd != null) {
		$(".vote_dayone").css("display", "block");
		$(".vote_dayone").text(snbd + "被投票死了，真实身份是" + hptoponed);
		$(".voter_dayone p").css("background-color", "#83b09a");
		$(".voter_dayone span").css("color", "#83b09a");
	}
	

	

	$(".date_nb1").click(function() {
		var dayup = $(".date_nb1").index(this);
		$(".gameflow").eq(dayup).slideToggle("slow");
		$(".icon-xiangshang").eq(dayup).slideToggle("slow");
	});
	