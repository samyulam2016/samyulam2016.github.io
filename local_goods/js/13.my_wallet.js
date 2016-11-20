var select_pay = document.querySelectorAll(".section_content_top");
		var select_icon = document.querySelectorAll(".select_icon");

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

		function change_pay() {
			var before = 0;
			for(var i = 0; i < select_icon.length; i++) {
				select_pay[i].index = i;
				select_pay[i].addEventListener("touchstart", function() {
					removeClass(select_icon[before], 'active');
					addClass(select_icon[this.index], 'active');
					before = this.index;
				})
			}
		}
		change_pay();