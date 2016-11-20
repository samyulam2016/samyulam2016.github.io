;(function(){
	var stars = document.querySelectorAll(".stars div>span");
console.log(stars);
	var message = document.querySelector(".evaluate_message");

function change_star(){
	for(var i = 0; i < stars.length; i++){
stars[i].index = i;		stars[i].addEventListener("touchstart",function(){
			for(var q = 0; q < stars.length; q++){
				stars[q].className = "";
			}
			for(var j = 0; j <= this.index; j++){
				stars[j].className = "active";
			}
		})
	}
}
change_star();
	
}())

