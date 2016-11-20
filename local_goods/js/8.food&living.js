;
(function() {
	var wh = document.documentElement.clientHeight;
	var menusH = document.querySelector(".menus").offsetHeight;
	var headerH = document.querySelector("header").offsetHeight;
	var distance = wh - headerH - menusH;
	
	var gallery = mui('.mui-slider');
	var oLi = document.querySelectorAll(".spot li");
	gallery.slider({
		interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
	document.querySelector('.menus').addEventListener('slide', function(event) {

		for(var i = 0; i < oLi.length; i++) {
			oLi[i].style.background = "white";
		}
		oLi[event.detail.slideNumber].style.background = "red";
	});
	
	//返回的是boolean
	function hasClass(elements, cName) {
		return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
	};

	function addClass(elements, cName) {
		if(!hasClass(elements, cName)) {
			elements.className += " " + cName;
		};
	};

	function removeClass(elements, cName) {
		if(hasClass(elements, cName)) {
			elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
		};
	};
	var goods_classname = document.querySelectorAll(".section_content_left li");
	function change_bg(){
		var before = 0;
         for(var i = 0; i<goods_classname.length; i++){          	
         	goods_classname[i].index = i;
         	goods_classname[i].onclick = function(){
         		goods_classname[before].className = "";   
         		this.className = "active";
         		before = this.index;
         	}
         }
	}
	change_bg();
	var section = document.querySelector(".section_content_right");
	
	section.style.height = distance + "px";
	
}())