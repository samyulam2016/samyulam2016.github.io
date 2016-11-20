;
(function() {
	var select_sort = document.querySelectorAll(".section_nav_content div");
	var select_nav_name = document.querySelector(".section_nav_left");
	var class_name = document.querySelector(".class_name");
	var section_nav_content = document.querySelector(".section_nav_content");
	//大图滚动
	var gallery = mui('.mui-slider');
	var oLi = document.querySelectorAll(".spot li");
	gallery.slider({
		interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
	document.querySelector('.menus').addEventListener('slide', function(event) {

		for(var i = 0; i < oLi.length; i++) {
			oLi[i].style.background = "#fff";
		}
		oLi[event.detail.slideNumber].style.background = "#ccc";
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
	//选择分类
	function press_btn() {
		for(var i = 0, len = select_sort.length; i < len; i++) {
			select_sort.index = i;
			select_sort[i].addEventListener("touchstart", function() {
				for(var j = 0; j < len; j++) {
					select_sort[j].className = "";
				}
				if(!hasClass(this, 'active_sb')) {
					addClass(this, 'active_sb');
				}
			})
		}
	}
	press_btn();
	var select_icon = document.querySelector(".select_icon");
	function click_navName() {
		
		var start_bol = false;
		select_nav_name.addEventListener("touchstart", function() {
			if(start_bol)return;
			if(!hasClass(select_icon,'active')) {
				start_bol = true;
				TweenLite.fromTo(section_nav_content, 0.5, {
					y: -20,
					opacity: 0,
					onComplete: function(){											section_nav_content.style.display = "block";
					}
				}, {
					y: 0,
					opacity: 1,
					onComplete: function() {						
						addClass(select_icon, 'active');
						class_name.style.color = "#f29004";
						start_bol = false;
					}
				})
			}else{	
				start_bol = true;
				TweenLite.fromTo(section_nav_content, 0.5, {
					y: 0,
					opacity: 1,
				}, {
					y: -20,
					opacity: 0,
					onComplete: function() {
						removeClass(select_icon, 'active');
						class_name.style.color = "#666666";
						section_nav_content.style.display = "none";
						start_bol = false;
					}
				})

			}
		})
	}
	
	click_navName();
	
	function changeName(){
		for(var i = 0,len = select_sort.length; i < len; i++){
			select_sort[i].onclick = function(){
				removeClass(select_icon,'active');
				var txt = this.innerHTML;
				class_name.innerHTML = txt;									section_nav_content.style.display = "none";
				
			}
		}
	}
	changeName();
	var sorts = document.querySelectorAll("footer a");
		function change_sort(){
			var before = 0;
			for(var i = 0; i < sorts.length; i++){
	sorts[i].index = i;			sorts[i].addEventListener("touchstart",function(){
				sorts[before].className = "";
				this.className = "active";
				before = this.index;
				})
			}
		}
		change_sort();
}())