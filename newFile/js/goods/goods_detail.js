$(function() {
	//	var $goods_detail_btn = $(".goods_detail_btn");
	//	var $goods_detail_page = $(".goods_details_page_content");
	//	var $goods_evaluate_btn = $(".goods_evaluate_btn");
	//	var $goods_evaluate_page = $(".goods_evaluate_page");
	//	var $goods_trade_btn = $(".goods_trade_btn");
	//	
	//	var $goods_trade_page = $(".goods_trade_page");
	//	console.log($goods_trade_page)
	//	
	//	$goods_detail_btn.on("click",function(){
	//		$goods_detail_page.css("display","block");
	//		$goods_evaluate_page.css("display","none");
	//		$goods_trade_page.css("display","none");
	//		$(this).addClass('active').siblings().removeClass('active');
	//	})
	//	$goods_evaluate_btn.on("click",function(){
	//		$goods_detail_page.css("display","none");
	//		$goods_evaluate_page.css("display","block");
	//		$goods_trade_page.css("display","none");
	//		$(this).addClass('active').siblings().removeClass('active');
	//	})
	//	
	//	$goods_trade_btn.on("click",function(){
	//		$goods_detail_page.css("display","none");
	//		$goods_evaluate_page.css("display","none");
	//		$goods_trade_page.css("display","block");
	//	})

	//图片淡入淡出
	var $introduce_pic = $(".introduce_big_pic");
	var $select_pic_btn = $(".goods_select_left_bottom>img");

	var index_introduce_pic = 0;

	$select_pic_btn.on("mouseenter", function() {
		index_introduce_pic = $(this).index(".goods_select_left_bottom>img");

		fade();
	})

	function fade() {
		$introduce_pic.eq(index_introduce_pic).fadeIn().siblings().fadeOut();
	}
//	fade();
	//图片左右选择按钮
	var $previous_pic = $(".previous_pic");
	var $next_pic = $(".next_pic");
	$next_pic.on("click", function() {
		index_introduce_pic++;
		if(index_introduce_pic > $select_pic_btn.length - 1){
			index_introduce_pic = 0;
		}
		fade();
	})
	$previous_pic.on("click",function(){
		index_introduce_pic --;
		if(index_introduce_pic < 0){
			index_introduce_pic = $select_pic_btn.length - 1;
		}
		fade();
	})
	
	//选择尺码框框点击事件
	var $goods_size = $(".goods_size");
	var $goods_color = $(".goods_color");
	var $select = $(".goods_select_mid > .spans");
	
	
	$goods_size.on("click","span",function(){
		if($(this).hasClass('spans')){
			$(this).addClass('active').siblings().removeClass('active');
		}		
	})
	$goods_color.on("click","span",function(){
		if($(this).hasClass('spans')){
			$(this).addClass('active').siblings().removeClass('active');
		}		
	})
	
	//选择商品数量
	var $num_border = $(".goods_select_mid .num_border");
	var $reduce_num = $(".goods_select_mid .reduce_num");
	var $add_num = $(".goods_select_mid .add_num");
	var num_index = $num_border.val();
	
	$add_num.on("click",function(){
		num_index ++;
		$num_border.val(num_index);
	})
	$reduce_num.on("click",function(){
		num_index --;
		if(num_index < 0){
			num_index = 0;
		}
		$num_border.val(num_index);
	})
	
	//点击收藏
	var $collect_star = $(".goods_action  .star_collect");
	console.log($collect_star)
	var $collect_goods = $(".goods_action  .collect_goods");
	
	$collect_goods.on("click",function(){
		console.log(1)
		$collect_star.toggleClass('active');
	})
	
})