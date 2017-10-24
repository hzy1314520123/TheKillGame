/*match*/
var TotalArrStr;
var TotalArrStra;

function match() {
	var TotalNum = document.getElementById("txt_checkingPhone").value;
	var killnum = Math.floor(TotalNum / 4);
	var killstr = sudub(killnum, TotalNum);

	if(isNaN(TotalNum) || TotalNum < 4 || TotalNum > 18) {
		alert("请输入正确的玩家数量");
	}
	else{
		distribute();
	}
	
	function distribute(){
		var mar = true;
		$(".match_p2t").html("");
		for(var i = 0; i < TotalNum; i++) {
			var box = "<div><span class='icon_f'></span><p>平民1人</p></div>";
			$(".match_p2t").append(box);
		}

	$("span").css("background-color", "orange");
	$(".match_p2t p").html("平民1人");
	for(var i = 0; i < killstr.length; i++) {
		var killsArr = killstr[i];
		$("p").eq(killsArr).html("杀手1人");
		$("span").eq(killsArr).css("background-color", "#2BBDE0");
	}
	}
/*存储玩家角色数组*/	
	var min = "平民";
	var palyers = new Array ();
	for(var i = 0; i < TotalNum.length; i++) {
		palyers.push(i);
	}
	console.log(palyers);
	
/*存储玩家数量和杀手位置*/
	localStorage.setItem("TotalArrStr", TotalNum);
	console.log("数组变成字符串存储" + TotalNum);

	TotalArrStr = JSON.stringify(killstr);
	localStorage.setItem("KillerArrStra", TotalArrStr);
	console.log("数组变成字符串存储" + TotalArrStr);

}

function sudub(a, b) {
	var sudu = new Array();
	for(var i = 0; i < a;) {
		var sudua = Math.floor(Math.random() * b);
		var chongfu = false;
		for(var j = 0; j < sudu.length; j++) {
			if(sudu[j] == sudua) {
				chongfu = true;
				break;
			}
		}
		if(!chongfu) {
			sudu[sudu.length] = sudua;
			i++;
		}
	}
	return sudu;
}

//数组变成字符串存储

function start() {
	if ($(".match_p2t").find('div').length == 0) {
		alert("请先配置角色，再开始游戏！");
	} else{
		location.href = "draw_1.html";
	}
		
}

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