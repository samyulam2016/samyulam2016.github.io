;(function(){
var days = document.getElementById("details_d");
var mins = document.getElementById("details_m");
var sec = document.getElementById("details_s");
var zero1 = document.querySelector(".zero1");
var zero2 = document.querySelector(".zero2");
var zero3 = document.querySelector(".zero3");
var slider = document.getElementById("slider");
var goods = document.getElementById("goods_details");
var evaluate = document.getElementById("customs_evaluate");
var collect = document.querySelector(".collect");
var share = document.querySelector(".share");
var custom_evaluate_page = document.querySelector(".custom_evaluate_page");
var goods_detalis_phone = document.querySelector(".goods_detalis_phone");
var share_details = document.querySelector(".share_details");
var mask = document.querySelector(".mask");
var cancel_share = document.querySelector(".cancel_share");
collect.onclick = function(){
	if(this.className == "active"){
		this.className = "";
	}else{
		this.className = "active";
	}
}
share.onclick = function(){
	if(this.className == "active"){
		this.className = "";
	}else{
		this.className = "active";
	}
	mask.style.display = "block";
	share_details.style.display = "block";
	 TweenLite.fromTo(share_details,1,{
				y: 236,				
				opacity: 0,
		},{
				y: 0,
				opacity: 1
		})
}
cancel_share.addEventListener("touchstart",function(e){
	TweenLite.fromTo(share_details,1,{
				y: 0,				
				opacity: 1,
		},{
				y: 236,
				opacity: 0,
				onComplete: function(){
															share_details.style.display = "none";
				}
		})
	mask.style.display = "none";
	share.className = "";
})

function timedown(){
	//循环定时器
	    var timer_details = setInterval(function(){
	    	  var oDate = new Date();//1972-当前时间，转换出来的毫秒数
	    	  var d = new Date("2016-11-1");//1972 - 10月1日，转换出来的毫秒数
	    	  var time = parseInt((d-oDate)/1000);
	    	  
	    	  var day = parseInt(time/86400);//转换成天数
	    	  var m = parseInt(time%3600/60);
	    	  var s = parseInt(time%60);
	    	  days.innerHTML = day;
	    	  mins.innerHTML = m;
	    	  sec.innerHTML = s;
	    	  if(day < 10){
	    	  	zero1.style.display = "inline-block";
	    	  }
	    	  if(m < 10){
	    	  	zero2.style.display = "inline-block";
	    	  }
	    	  if(s < 10){
	    	  	zero3.style.display = "inline-block";
	    	  }else{
	    	  	zero3.style.display = "none";
	    	  }
	    	  if( day == 0 && m == 0 && s ==0){
	    	  	clearInterval(timer_details);
	    	  	days.innerHTML = 0;
	    	 	 mins.innerHTML = 0;
	    	  	sec.innerHTML = 0;
	    	  }
	    });
}
timedown();

function slide(){
	var evaluate_left = evaluate.offsetLeft;
	var goods_left = goods.offsetLeft;
//	var distance = evaluate_left - goods_left;
	evaluate.addEventListener("touchstart",function(){
		var tween = TweenLite.to(slider,0.3,{
			x: evaluate_left - goods_left,
			ease: Circ.easeInOut,
			onComplete: function(){						custom_evaluate_page.style.display = "block";
				goods_detalis_phone.style.display = "none";
			}
		})
	})
	goods.addEventListener("touchstart",function(){
		var tween = TweenLite.to(slider,0.3,{
			x: goods_left - goods_left,
			ease: Circ.easeInOut,
			onComplete: function(){
				custom_evaluate_page.style.display = "none";
				goods_detalis_phone.style.display = "block";
			}
		})
	})
	
//	var evaluate_left = evaluate.offsetLeft;
//	var goods_left = goods.offsetLeft;
////	var distance = evaluate_left - goods_left;
//	var sliderW = slider.offsetWidth;
//	evaluate.onmouseenter = function(){
//		var t = 0;	
//		var b = goods_left;
//		var c = evaluate_left - b;
//		var d = 10;
//		clearInterval(timer_evaluate);
//		var timer_evaluate = setInterval(function(){
//			t++;
//			if( t >= d){
//				clearInterval(timer_evaluate);					custom_evaluate_page.style.display = "block";
//				goods_detalis_phone.style.display = "none";
//			}
//			slider.style.left = t / d * c + b + "px";
//		},16);
//	}
//	goods.onmouseenter = function(){
//		var t = 0;
//		var b = evaluate_left;
//		var c = goods_left - b;
//		var d = 10;
//clearInterval(timer_goods)
//		var timer_goods = setInterval(function(){
//			t++;
//			if( t >= d){
//				clearInterval(timer_goods);
//				custom_evaluate_page.style.display = "none";
//				goods_detalis_phone.style.display = "block";
//			}
//			slider.style.left = t / d * c + b + "px";
//		},16);
//	}
}
slide();
window.onresize = function(){
	slide();
}


})();

