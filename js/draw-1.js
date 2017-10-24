
	var TotalNuma = localStorage.getItem("TotalArrStr");
	var TotalArrStra = parseInt(TotalNuma);
	
	var killstr = localStorage.getItem("KillerArrStra");
	var ClicksNum = 1;
	var TotalNum = 0;

	function check() {

		if(ClicksNum >= (2 * TotalNuma)) {
			return location.href = "diary.html"; //身份查看完后进入下一个界面
		} else {

			if(ClicksNum % 2 == 0) {
				CheckiDentity(); //偶数显示查看身份页
			} else {
				DeliverDentity(); //奇数显示传递身份
			}
		}
		ClicksNum++;
		console.log("点击数" + ClicksNum);
	}

	//偶数显示查看身份页
	function CheckiDentity() {
		$("#check").text("查看" + (TotalNum + 2) + "号身份");
		$(".role").text(""); //这个页面不显示身份
		$(".content img").attr("src", "images/darw.png"); //显示图片1
		$(".circle").text(TotalNum + 2);
		TotalNum++;
		console.log("编号" + TotalNum);
	}

	//基数显示传递身份页
	function DeliverDentity() {
		if(TotalNum == TotalNuma - 1) {
			$("#check").text("查看法官台本"); //身份显示完后，进入下一个页面
		} else {
			$("#check").text("隐藏并传递到" + (TotalNum + 2) + "号");
		}
		$(".role").text("角色：平民");
		$(".content img").attr("src", "images/role.png"); //显示图片2
		
		for(var i = 0; i < killstr.length; i++) {
		var killsArr = killstr[i];
		if(TotalNum == killsArr){
			$(".role").text("角色：杀手");
		}
	}
	}
