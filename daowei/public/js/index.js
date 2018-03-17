$(function () {
	//头部导航字体移入变红
  $('.header-nav>ul>li>a').hover(function () {
		this.style.transition = 0.3 + 's'
		$(this).addClass('on')
	},function () {
		$(this).removeClass('on')
	})

	//头部导航点击变红
	var index = $('.header-nav>ul>li>a').index($('.on1'))
	$('.header-nav>ul>li').on('click',function () {

		var clickIndex = $(this).index()
		if(clickIndex != index){
			$('.header-nav>ul>li>a')[index].classList.remove('on1')
			$('.header-nav>ul>li>a')[clickIndex].classList.add('on1')
			index = clickIndex
		}
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

	//头部动
	$(document).scroll(function () {
		//console.log($(window).scrollTop())
		if($(window).scrollTop()>80){
			$('.header').prop('class','header showhead')
		}else{
			$('.header').prop('class','header')
		}

	});


})