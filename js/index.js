$(function () {
	//头部导航字体移入变红
  $('.header-nav>ul>li>a').hover(function () {
  	this.style.transition = 0.3 + 's'
    this.className = 'on'
  },function () {

	  this.className = ''
	  //transition 0.3s
	  //color red
  })

	//轮播左侧导航ul移入改变
	$('.item-ul-wrap>.item-ul>li').hover(function () {
	  this.className = 'on'
		$('.item-ul-wrap>.item-ul>li>.item-ul2').css({
			'display':'block'
		})
	},function () {
		this.className = ''
		$('.item-ul-wrap>.item-ul>li>.item-ul2').css({'display':'none'})
	})
	//2级菜单的 移入
	$('.item-ul-wrap>.item-ul>li>.item-ul2>li>a').hover(function () {
	  this.className = 'on1'
	},function () {
		this.className = ''
	})



})