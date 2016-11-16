;(function(){
	
	$(function(){
			var index = 0;
			var index_spot = 0;
			// var $qq_server = $(".qq_server");
			// var $server_online = $(".server_online");
      // var perWidth = $(".pic_inner a").eq(0).width();
      var $inner = $(".pic_inner");
      var $aPic = $(".pic_inner > a");

      $.each($aPic, function(i, t) {
        $aPic.eq(i).css('left', i * 100 + "%");
      })


      //tab 切换函数
      function tab(){     
              	
      	if(index > $(".paganation span").length - 1){     	         	 		
    	 		index = 1;
    	 		$inner.css({
    	 			left: 0
    	 		});
    	 	}  
          	 	
      	$inner.stop().animate({
      		// left: -index*perWidth
          left: -index * 100 + "%"
      	}) 
      	if(index_spot > $(".paganation span").length - 1){
      		index_spot = 0;
      	}
        $(".paganation span").eq(index_spot).addClass("active").siblings().removeClass("active");              	
      }
             
              	
          	 //小圆点事件
          	 $(".paganation span").on("mouseenter",function(){         	 	
          	 	index_spot = index = $(this).index();
          	 	tab();
          	 })	
          	 function next(){  
          	 	index++;
          	 	index_spot++;
          	 	tab();
          	 }
          	var timer_pic = null;
          	$(".pic_slider").hover(function(){
          		clearInterval(timer_pic);
          	},function(){
          		 timer_pic = setInterval(next,2000); 
          	});
      timer_pic = setInterval(next, 2000);
      
      var $car_nav = $(".car_decorate_header > span");
      var $car_silder = $(".car_decorate_header .slider_index");
      var sliderW = 17;
      var $hotel_nav = $(".hotel_header > span");
       var $hotel_silder = $(".hotel_header .slider_index");
       var $men_clothes_nav = $(".men_clothes_header > span");
       var $men_clothes_silder = $(".men_clothes_header .slider_index");
      var $build_goods_nav = $(".build_goods_header > span");
       var $build_goods_silder = $(".build_goods_header .slider_index");
      
      function nav_move(obj1,obj2){
      	var nav_left = 0;
      	obj1.on("click",function(){
      		console.log($(this))
      		 nav_left = $(this).position().left;
      		 console.log(nav_left);
      		obj2.stop().animate({
      			left: nav_left - sliderW
      		},100)
      	})     	
      }
      nav_move($car_nav,$car_silder);
      nav_move($hotel_nav,$hotel_silder);
       nav_move($men_clothes_nav,$men_clothes_silder);
       nav_move($build_goods_nav,$build_goods_silder);
      
      
})
	
	
}())
