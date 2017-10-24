	$(function dao() {
		$(".content").click(function(e) {
			$(".snb").css("background-color", "#83b09a");
			$(this).children(".snb").css("background-color", "#2BBDE0");
			hptopone = $(this).children(".hptopone").text();
			snb = $(this).children(".snb").text();
			console.log(hptopone+snb);
			localStorage.setItem("hptoponeb", hptopone);
			localStorage.setItem("snba", snb);
		});
	});

	function nokill() {
		if(hptopone == "杀手") {
			$(".bg-model").fadeTo(300, 1);
			$(".b_l").click(function() {
				$(".bg-model").hide(300);
			});
			$(".b_r").click(function() {
				$(".bg-model").hide(300);
			});
		} else {
			window.history.back(-1);
		}
		
	}
	var TotalNuma = localStorage.getItem("TotalArrStr");
	var TotalArrStra = parseInt(TotalNuma);

	var killstr = localStorage.getItem("KillerArrStra");

	for(var i = 0; i < TotalArrStra; i++) {
		var box = "<div class='shop l'><div class='content' ><div class='hptopone' >平民</div><div class='snb '>" + (i + 1) + "号" + "</div></div><div class='option' ><div class='iconfont icon-dao_cutter'></div></div></div>";
		$(".vote").append(box);
	}

	for(var i = 0; i < killstr.length; i++) {
		var killstra = killstr[i];
		$(".hptopone").eq(killstra).text("杀手");
	}
	
	var snb = localStorage.getItem("snbb");
	$(".hptopone").eq(snb[0]-1).css("background-color", "#83b09a");
	
	var snb = localStorage.getItem("snba");
	$(".hptopone").eq(snb[0]-1).css("background-color", "#83b09a");