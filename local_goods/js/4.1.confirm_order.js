;(function(){
	var select_icon = document.querySelectorAll(".select_icon");
var pay_now = document.querySelector(".pay_now");
var import_password = document.querySelector(".import_password");
var cancel_pay = document.querySelector(".cancel_pay");
var import_border = document.querySelector(".import_password");
var pay_now = document.querySelector(".pay_now");

function hasClass( elements,cName ){ 
  return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
}; 
function addClass( elements,cName ){ 
  if( !hasClass( elements,cName ) ){ 
    elements.className += " " + cName; 
  }; 
}; 
function removeClass( elements,cName ){ 
  if( hasClass( elements,cName ) ){ 
    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ), " " );
  }; 
};
function changeState(){
	for(var i = 0; i < select_icon.length; i++){
		select_icon[i].index = i;
		select_icon[i].onclick = function(){	
			for(var j = 0; j < select_icon.length; j++){
				removeClass(select_icon[j],'active');
				if( j == this.index){
					addClass(select_icon[j],'active');
				}
			}			
		}
	}
}
changeState();
var mask = mui.createMask();//callback为用户点击蒙版时自动执行的回调；
//mask.show();//显示遮罩
//mask.close();//关闭遮罩
pay_now.onclick = function(){
	mask.show();
	import_password.style.display = "block";
}
cancel_pay.onclick = function(){
	mask.close();
	import_password.style.display = "none";
}

function maxtxt(max){
	var address = document.querySelector(".address");
	var address_txt = address.innerHTML;
	if(address_txt.length > max){
		address.innerHTML = address_txt.substring(0,max) + "...";
	}	
}
maxtxt(15);


}())

