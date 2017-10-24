
	var TotalNuma = localStorage.getItem("TotalArrStr");
	var TotalArrStra = parseInt(TotalNuma);

	var killstr = localStorage.getItem("KillerArrStra");
    
    
    
	for(var i = 0; i < TotalArrStra; i++) {
		var box = "<div class='shop l '><div class='content '><div class='hptopone '>平民</div><div class='snb '>" + (i + 1) + "号" + "</div></div></div>";
		$(".vote").append(box);
	}
	
	for(var i = 0; i < killstr.length; i++){
		var killstra = killstr[i];
		$(".hptopone").eq(killstra).text("杀手");
	}
	
	var snb = localStorage.getItem("snba");
	$(".hptopone").eq(snb[0]-1).css("background-color", "#83b09a");
	
	var snbh = localStorage.getItem("snbb");
	$(".hptopone").eq(snbh[0]-1).css("background-color", "#83b09a");
	
