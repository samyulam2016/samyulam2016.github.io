$(function(){
	// bg_6
	var Num1 = 0;
	var timer1 = null;
	$('.zu1_s li').stop().mouseover(function(){
		clearInterval(timer1);
		var _this = $(this).index();
		$('.zu1_b img').fadeOut();
		$('.zu1_b img').eq(_this).fadeIn();
		$('.zu1_s li').css('opacity',0.5);
		$('.zu1_s li').eq(_this).css('opacity',1);
		$('.wen1 p').fadeOut();
		$('.wen1 p').eq(_this).fadeIn();
		Num1 = _this;
	})
	$('.zu1_s li').stop().mouseout(function(){
		Fntimer1();
	})
	$('.next1').click(function(){
		Num1++;
		if (Num1 >=3) {
			Num1 = 0;
		}
		Fnbian();
	})
	$('.prav1').click(function(){
		Num1--;
		if (Num1 <=-1) {
			Num1 = 2;
		}
		Fnbian();
	})
// 	鍚姩鑷姩杞挱
	function Fntimer1(){
		timer1 = setInterval(function(){
			Num1++;
			if (Num1 >=3) {
				Num1 = 0;
			}
			Fnbian();
		},3000);
	}
	Fntimer1();
//  鍏叡閮ㄥ垎
	function Fnbian(){
		$('.zu1_b img').fadeOut();
		$('.zu1_b img').eq(Num1).fadeIn();
		$('.zu1_s li').css('opacity',0.5);
		$('.zu1_s li').eq(Num1).css('opacity',1);
		$('.wen1 p').fadeOut();
		$('.wen1 p').eq(Num1).fadeIn();
	}

//  绗簩閮ㄥ垎杞挱
	var ImgWidth = 0;
	$('.zu2_s li').stop().mouseover(function(){
		var _this = $(this).index();
		$('.zu2_s img').hide();
		$('.zu2_s img').eq(_this).show();
		$('.zu2_b').fadeIn();
		$('.zu2_b_c img').hide();
		$('.zu2_b_c img').eq(_this).show();
		ImgWidth = $('.zu2_b_c img').eq(_this).width()-$('.zu2_b_c').width();
		$('.zu2_l').css('left','0');
	})

	
	$('.next2').click(function(){
		$('.zu2_l').stop().animate({left:-ImgWidth+'px'});
	})
	$('.prav2').click(function(){
		$('.zu2_l').stop().animate({left:0});
	})
	$('.colse1').click(function(){
		$('.zu2_b').fadeOut();
		$('.zu2_s img').hide();
	})

//  bg_7
	var timer2 = null;
	var Num2 = 0;
	$('.zu3_s img').stop().mouseover(function(){
		clearInterval(timer2);
		var _this = $(this).index();
		$('.zu3_b img').fadeOut();
		$('.zu3_b img').eq(_this).fadeIn();
		$('.zu3_s img').css('opacity',0.4);
		$('.zu3_s img').eq(_this).css('opacity',1);
		$('.zu3_w img').fadeOut();
		$('.zu3_w img').eq(_this).fadeIn();
		Num2 = _this;
	})
	$('.zu3_s img').mouseout(function(){
		Fntimer2();
	});
	Fntimer2();
	function Fntimer2(){
		timer2 = setInterval(function(){
			Num2++;
			if (Num2>=4) {
				Num2 = 0;
			}
			$('.zu3_b img').fadeOut();
			$('.zu3_b img').eq(Num2).fadeIn();
			$('.zu3_s img').css('opacity',0.4);
			$('.zu3_s img').eq(Num2).css('opacity',1);
			$('.zu3_w img').fadeOut();
			$('.zu3_w img').eq(Num2).fadeIn();
		},3000);
	}
//  bg_8
	var timer3 = null;
	var ImgWidth2 = 0;
	var Num3 = 0;
	$('.series_nav li').mouseover(function(){
		clearInterval(timer3);
		Num3 = 0;
		var _this = $(this).index();
		$('.series_nav li').removeClass('open');
		$('.series_nav li').eq(_this).addClass('open');
		$('.hao .pp2').hide();
		$('.hao .pp2').eq(_this).show();
		$('.kang span').hide();
		$('.kang span').eq(_this).show();
		$('.zu4 .zu4_main').hide();
		$('.zu4 .zu4_main').eq(_this).show();
		$('.zu4_main').css('left',0);
		ImgWidth2 = $('.zu4 .zu4_main').eq(_this).find('img').width();
		timer3 = setInterval(function(){
			Num3+=2;
			if (Num3 >= ImgWidth2) {
				$('.zu4_main').css('left',0);
				Num3 = 0;
			}
			$('.zu4_main').css('left',-Num3+'px');
		},15);
	})
	setTimeout(function(){
		ImgWidth2 = $('.zu4_l').width();
	},1000);
	timer3 = setInterval(function(){
		Num3+=2;
		if (Num3 >= ImgWidth2) {
			$('.zu4_main').css('left','0');
			Num3 = 0;
		}
		$('.zu4_main').css('left',-Num3+'px');
	},15);
	$('.zu4_main').mouseover(function(){
		clearInterval(timer3);
	})
	$('.zu4_main').mouseout(function(){
		timer3 = setInterval(function(){
			Num3+=2;
			if (Num3 >= ImgWidth2) {
				$('.zu4_main').css('left',0);
				Num3 = 0;
			}
			$('.zu4_main').css('left',-Num3+'px');
		},15);
	})

	$('.zu4_1').click(function(){
		window.open('http://home.163.com/15/1016/16/B62H2LS800104JK2.html');
	})
	$('.zu4_2').click(function(){
		window.open('http://home.163.com/15/1016/16/B62HM42P00104JK2.html');
	})
	$('.zu4_3').click(function(){
		window.open('http://home.163.com/15/1016/16/B62GNB4500104JK2.html');
	})
//  bg_10
	var arr=[];
		$.each($("#out div"),function(index,val){
			arr.push($(val).position().left);
		});
		$("#out div").mouseenter(function(){
			var thisIndex=$("#out div").index($(this));
			$.each($("#out div"),function(index,val){
				if (index<=thisIndex) {
					$(val).stop().animate({left:arr[index]},500);
				}
				else{
					$(val).stop().animate({left:arr[index]+$("#out div").eq(0).width()-146},500);
				}
			});
		});
		$('.out .zu4_p').stop().mouseover(function(){
			var _this = $(this).index();
			// $('.out .zu4_p').css('background','url(../img/zu6_s2.jpg) top center no-repeat;');
			var shu = _this+1;
			$('.out .zu4_p').removeClass('bian1');
			$('.out .zu4_p').removeClass('bian2');
			$('.out .zu4_p').removeClass('bian3');
			$('.out .zu4_p').eq(_this).addClass('bian'+shu);
		})
// 	娴姩鏉�
	$('.fu_c li').click(function(){
		var _this = $(this).index();
		// $('.fu_c li').removeClass('open2');
		// $('.fu_c li').eq(_this).addClass('open2');
		if (_this == 0) {
			$('body,html').animate({ scrollTop: 741+'px' }, 500);
		}else if (_this == 1) {
			$('body,html').animate({ scrollTop: 2100+'px' }, 500);
		}else if (_this == 2) {
			$('body,html').animate({ scrollTop: 3200+'px' }, 500);
		}else if (_this == 3) {
			$('body,html').animate({ scrollTop: 4000+'px' }, 500);
		}else if (_this == 4) {
			$('body,html').animate({ scrollTop: 4800+'px' }, 500);
		}else if (_this == 5) {
			$('body,html').animate({ scrollTop: 5684+'px'}, 500);
		}

	})

	$(".Top").click(function () {
        var speed=200;//婊戝姩鐨勯€熷害
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
 	window.onscroll=function() { 
	/* ...do something... */ 
		aa=$(window).scrollTop();
		console.log(aa);
		if (aa>=741&&aa<2100) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(0).addClass('open2');
		}else if (aa>=2100&&aa<3200) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(1).addClass('open2');
		}else if (aa>=3200&&aa<4000) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(2).addClass('open2');
		}else if (aa>=4000&&aa<4800) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(3).addClass('open2');
		}else if (aa>=4800&&aa<5684) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(4).addClass('open2');
		}else if (aa>=5684) {
			$('.fu_c li').removeClass('open2');
			$('.fu_c li').eq(5).addClass('open2');
		}

	} ;

})