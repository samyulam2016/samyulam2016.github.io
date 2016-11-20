;(function(){
$(function(){
	var $return_goods_message = $(".return_goods_message");
	var $return_reason = $(".return_goods_reason_mid");
	var $reason_list = $(".return_reason_content");
	var $askFor_returnMoney = $(".return_g_btn");
	var $return_reason_li = $(".return_reason_content li");
	var mask = mui.createMask();//callback为用户点击蒙版时自动执行的回调；

	$askFor_returnMoney.on("touchstart",function(){
				mask.show();
				$return_goods_message.show();
	});
	$return_reason.on("touchstart",function(){
		$reason_list.toggle();
	})
	
	$return_reason_li.each(function(index,key){
		$return_reason_li.eq(index).on("touchstart",function(){
			$(".reason_txt").html($return_reason_li.eq(index).html());
		})
	})
	$(".mui-icon-closeempty").on("touchstart",function(){
		$return_goods_message.hide();
		mask.close();
	})
	$(".upload_evidence").on("touchstart",function(){
		$(".upload_pic").trigger("click");
	})
	
})
	
	
	
}());

