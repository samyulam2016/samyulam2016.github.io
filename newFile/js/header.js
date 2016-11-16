$(function() {
	var $classify = $(".classify > p"),
		$firList = $(".first-list"),
		$aLi = $(".first-list li"),
		$secList = $(".second-list"),
		$aList = $(".second-list .item");

	$classify.hover(function() {
		$aLi.removeClass("active");
		$firList.show();
	}, function() {
		$firList.hide();
	});

	$firList.hover(function() {
	}, function() {
		$firList.hide();
		$secList.hide();
	});

	$aLi.hover(function() {
		$firList.show();
		$(this).addClass("active").siblings().removeClass("active");
		$secList.show();
		$aList.hide().eq($(this).index()).show();
	}, function() {
		$secList.hide();
	});

	$secList.hover(function() {
		$firList.show();
		$secList.show();
	}, function() {
		$aLi.removeClass("active");
		$secList.hide();
		$aList.hide();
		$firList.hide();
	});

	var $searchSel = $(".head .select a"),
		$shopItem = $(".head .hot .shop-item"),
		$goodsItem = $(".head .hot .goods-item");
	var item = [$shopItem, $goodsItem];

	$searchSel.on("click", function() {
		var $this = $(this);
		var index = $searchSel.index($this);
		$searchSel.removeClass("active");
		$this.addClass("active");
		$shopItem.hide();
		$goodsItem.hide();
		item[index].show();
	});
});