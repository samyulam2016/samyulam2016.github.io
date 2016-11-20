;
(function() {
	var prices = document.querySelectorAll(".prices");
	var goods_num = document.querySelectorAll(".goods_num");
	var add_up = document.querySelector(".add_up");
	var select_goods = document.querySelectorAll(".select_icon_shopping");
	var reduce = document.querySelectorAll(".reduce");	
	var add = document.querySelectorAll(".add");
	var edit = document.querySelector(".edit");
	var account_btn = document.querySelector(".close_account_btn");
	var total = document.querySelector(".total");
	var x = document.querySelectorAll(".x");
	var goods_num = document.querySelectorAll(".goods_num");
	var select_all = document.querySelector(".select_goods");
	

	function sum(price, num) {
		var result = 0;
		for(var i = 0; i < price.length; i++) {
			var sum = price[i].innerHTML * num[i].innerHTML;
			result += sum;
		}
		return result;
	}
	//	console.log(sum(prices,goods_num));
	add_up.innerHTML = sum(prices, goods_num);
	
	
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
		
	function selectGoods() {
		for(var i = 0; i < select_goods.length; i++){
			select_goods[i].index = i;
			select_goods[i].onclick = function(){
				if(hasClass(select_goods[this.index],'active')){
					removeClass(select_goods[this.index],'active');
				}else{
					addClass(select_goods[this.index],'active');
				}
			}
		}
	}
	selectGoods();
	edit.onclick = function(){
		if(this.innerHTML == "编辑"){
		edit.innerHTML = "完成";
		for(var i = 0; i < select_goods.length; i++){
			select_goods[i].style.display = "block";		
			reduce[i].style.display = "inline-block";
			add[i].style.display = "inline-block";
			x[i].style.display = "none";
		}	
		account_btn.innerHTML = "删除";
		total.style.visibility = "hidden";
		select_all.style.display = "block";	
		}else{
			add_up.innerHTML = sum(prices, goods_num);
			this.innerHTML = "编辑";
			account_btn.innerHTML = "结算";
			total.style.visibility = "visible";
			select_all.style.display = "none";
			for(var i = 0; i < select_goods.length; i++){
				select_goods[i].style.display = "none";		
				reduce[i].style.display = "none";
				add[i].style.display = "none";
				x[i].style.display = "inline-block";
		}	
		}
	}
	function add_num(){
		for(var i = 0; i < add.length; i++){		
			add[i].index = i;
			add[i].onclick = function(){
				//因为放在外面会一次过循环遍，最后的把前头的覆盖掉，放在这里每次click都会创建一个新的出来，并马上利用;
				var goods_index = goods_num[this.index].innerHTML;
				for(var j = 0; j < add.length; j++){
					if( j == this.index){
						goods_index ++;
						goods_num[j].innerHTML = goods_index;
					}
				}
			}
		}
	}
	function reduce_num(){
		for(var i = 0; i < reduce.length; i++){		
			reduce[i].index = i;
			reduce[i].onclick = function(){
				var goods_index = goods_num[this.index].innerHTML;
				for(var j = 0; j < reduce.length; j++){
					if( j == this.index){
						goods_index --;
						if(goods_index < 0){
							goods_index = 0;
						}
						goods_num[j].innerHTML = goods_index;
					}
				}
			}
		}
	}
	add_num();
	reduce_num();
	//全选
	select_all.onclick = function(){
		var select_all_btn = document.querySelector(".select_all");
		if(hasClass(this,'active')){
			removeClass(this,'active');
			removeClass(select_all_btn,'active');
			for(var i = 0; i < select_goods.length; i++){
				removeClass(select_goods[i],'active');
			}
		}else{
			addClass(this,'active');
			addClass(select_all_btn,'active');
			for(var i = 0; i < select_goods.length; i++){
				addClass(select_goods[i],'active');
			}
		}
	}
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