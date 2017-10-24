
/*当前点击对象 并储存*/	
	var votearry = [];
    $(function ping() {
		$(".content").click(function(e) {
			$(".snb").css("background-color","#83b09a");
			$(this).children(".snb").css("background-color","#2BBDE0");
			var hptopone = $(this).children(".hptopone").text();
			var snb = $(this).children(".snb").text();
			localStorage.setItem("hptoponec",hptopone);
			localStorage.setItem("snbb",snb);
		});
	});
	var hptopone = localStorage.getItem("hptoponec");
	var snb = localStorage.getItem("snbb");
	votearry.push([hptopone,snb]);
	
/*判断杀手与平民数量*/	
 	function voteb(){
 		var hptoponef = localStorage.getItem("hptoponec");
 		var snbf = localStorage.getItem("snbb");
 		if(hptoponef == "杀手"){
 			/*从数组中删除当前位置的数字*/
 			/*当数组长度为0时，平民获胜 否则进入下一天*/
 		}
 		if(hptoponef == "平民"){
 			/*玩家总数量/4*3 整数 减去 1*/
 			/*当杀手数组长度大于 以上 长度时 杀手获胜 否则进入下一天*/
 		}
 		
 		
 		if(hptoponef == "杀手"){
 		location.href = "js_task2.2.html";
 	}else{
 		location.href = "gameflow.html";
 	};
 	}
 	

/*存储玩家数据*/ 	
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

/*存储死亡玩家*/
	var snb = localStorage.getItem("snba");
	$(".hptopone").eq(snb[0]-1).css("background-color", "#83b09a");