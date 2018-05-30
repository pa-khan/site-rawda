$(document).ready(function($) {

	$('.input_phone').mask('+7 (000) 000-00-00');

	$('.input_date .input__wrap').mask('00.00.2010');


	$('.banner__input .input__wrap').change(function(event) {
		var inputValue = $(this).val(),
				input = $(this).parents('.input');
		if (inputValue != "" || inputValue != null) {
			input.addClass('input_completed');
		} else{
			input.removeClass('input_completed')
		}
	});
	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
				element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input');


	$('.youtube').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-gray"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-gray"></i></button>	'
	})

	$('.tour__img').slick({
		asNavFor: $('.tour__imgs')
	})

	$('.tour__imgs').slick({
		asNavFor: $('.tour__img'),
		focusOnSelect: true,
		variableWidth: true
	})
	
	var upBtn = $('.up-btn');
	upBtn.click(function(event) {
		$('html, body').animate({scrollTop: 0},500);
	});

	$(window).on('load scroll', function(event) {
		var windowHight = $(window).height();
		if (windowHight > $(window).scrollTop()) {
			upBtn.fadeOut(300);
		} else{
			upBtn.fadeIn(300);
		}
		console.log(windowHight);
	});

	var mobileBtn = $('.mobile-btn'),
			mobileNav = $('.mobile-nav');

	mobileBtn.click(function(event) {
		$(this).toggleClass('mobile-btn_toggle');
		mobileNav.toggleClass('mobile-nav_toggle');
	});

});
