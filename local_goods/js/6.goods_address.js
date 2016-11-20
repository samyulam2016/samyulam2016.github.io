var default_roll_btn = document.querySelector(".default_roll_btn");

var default_address_btn = document.querySelector(".default_address_btn");

function change_status() {
	var timer_roll_left = null;
	var timer_roll_right = null;
	var default_bol = false;
	var dw = default_address_btn.offsetWidth;
	var dw_roll = default_roll_btn.offsetWidth;
	default_roll_btn.addEventListener("touchstart",function(){
		if(default_bol) {
			var t = 0;
			var b = dw - dw_roll;
			var c = dw - dw_roll;
			var d = 10;
			clearInterval(timer_roll_left);
			timer_roll_left = setInterval(function() {
				t++;
				if(t >= d) {
					clearInterval(timer_roll_left);
					default_address_btn.style.background = "#C6C6C6";
					default_bol = false;
				}
				default_roll_btn.style.left = -t / d * c + b +1 + "px";
			}, 16);
		} else {
			var t = 0;
			var b = 0;
			var c = dw - dw_roll;
			var d = 10;
			clearInterval(timer_roll_right);
			timer_roll_right = setInterval(function() {
				t++;
				if(t >= d) {
					clearInterval(timer_roll_right);
					default_address_btn.style.background = "#f29004";
					default_bol = true;
				}
				default_roll_btn.style.left = t / d * c + b -1 + "px";
			}, 16);
		}
	})
}
change_status();