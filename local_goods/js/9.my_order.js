;(function(){
	var goods_status = document.querySelectorAll(".section_header li");
	var status_slider = document.querySelector(".section_header .slider");
	var order_status = document.querySelectorAll(".mui-table-view");
	var before = 0;	
	function change_status(){
		var indexs = 0;
		for(var i = 0; i < goods_status.length; i++){
			goods_status[i].index = i;
			goods_status[i].addEventListener("touchstart",function(){
				indexs = this.index;
				var t = 0;
				var b = status_slider.offsetLeft;
				var c = this.offsetLeft - b;
				var d = 15;
				clearInterval(timer_slider);	
				var timer_slider = setInterval(function(){					
					t ++;
					if(t >= d){
						clearInterval(timer_slider);		
						order_status[before].style.display = "none";
						order_status[indexs].style.display = "block";									before = indexs;
					}
					status_slider.style.left = t / d * c + b + "px";
				},16);				
			})			
		}		
	}
	change_status();
	
}())
