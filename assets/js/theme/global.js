import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import adminBar from './global/adminBar';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import popupLoginWindow from './custom/popup-login-window';

export default class Global extends PageManager {
    onReady() {
        const {
            channelId, cartId, productId, categoryId, secureBaseUrl, maintenanceModeSettings, adminBarLanguage,
        } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        adminBar(secureBaseUrl, channelId, maintenanceModeSettings, JSON.parse(adminBarLanguage), productId, categoryId);
        loadingProgressBar();
        svgInjector();
		if ($('#popupLoginWindow').length) {
            popupLoginWindow.init(); // fire our popupLoginWindow scripts
        }
		/* Sticky Header */
		
		$(window).scroll(function(){
		  var sticky = $('.header'),
			  scroll = $(window).scrollTop();

		  if (scroll >= 250) sticky.addClass('fixed');
		  else sticky.removeClass('fixed');
		});
		
		$('.featured-artists').slick({
		  dots: true,
		  infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 2,
		  mobileFirst:true,
		  nextArrow:'<button type="button" class="slick-next pull-rigth"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="21.531" viewBox="0 0 14 21.531"><path id="Path_1551" data-name="Path 1551" d="M353.628,206.925l-3.234-3.234,7.531-7.531-7.531-7.531,3.234-3.234,10.766,10.766Z" transform="translate(-350.394 -185.394)"/></svg></button>',
		  prevArrow:'<button type="button" class="slick-prev pull-left"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="21.531" viewBox="0 0 14 21.531"><path id="Path_1551" data-name="Path 1551" d="M361.16,206.925l3.234-3.234-7.531-7.531,7.531-7.531-3.234-3.234L350.394,196.16Z" transform="translate(-350.394 -185.394)"/></svg></button>',
		  responsive: [
			{
				"breakpoint": 900,
				"settings": {
				"slidesToScroll": 2,
				"slidesToShow": 4
				}
			},
			{
				"breakpoint": 767,
				"settings": {
				"slidesToScroll": 3,
				"slidesToShow": 3
				}
			},
				{
				"breakpoint": 479,
				"settings": {
				"slidesToScroll": 2,
				"slidesToShow": 2
				}
			},
			{
				"breakpoint": 319,
				"settings": {
				"slidesToScroll": 1,
				"slidesToShow": 1
				}
			}
		  ]
		});
		$('.collections-slider').slick({
		  dots: false,
		  infinite: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  mobileFirst:true,
		  nextArrow:'<button type="button" class="slick-next pull-rigth"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="21.531" viewBox="0 0 14 21.531"><path id="Path_1551" data-name="Path 1551" d="M353.628,206.925l-3.234-3.234,7.531-7.531-7.531-7.531,3.234-3.234,10.766,10.766Z" transform="translate(-350.394 -185.394)"/></svg></button>',
		  prevArrow:'<button type="button" class="slick-prev pull-left"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="21.531" viewBox="0 0 14 21.531"><path id="Path_1551" data-name="Path 1551" d="M361.16,206.925l3.234-3.234-7.531-7.531,7.531-7.531-3.234-3.234L350.394,196.16Z" transform="translate(-350.394 -185.394)"/></svg></button>',
		  responsive: [
			{
				"breakpoint": 900,
				"settings": {
				"slidesToScroll": 2,
				"slidesToShow": 2
				}
			},
			{
				"breakpoint": 767,
				"settings": {
				"slidesToScroll": 2,
				"slidesToShow": 2
				}
			},
				{
				"breakpoint": 479,
				"settings": {
				"slidesToScroll": 2,
				"slidesToShow": 2
				}
			},
			{
				"breakpoint": 319,
				"settings": {
				"slidesToScroll": 1,
				"slidesToShow": 1
				}
			}
		  ]
		});
		
		$(document).on('click', '.product-view-li a', function(){
			console.log("Hi");
			$(".type-view").removeClass("active");
			if ($(this).hasClass("grid-view")) {
			  $(this).addClass("active");
			  $(".productGrid").removeClass("listView");
			  $(".productGrid").removeClass("tableView");
			  $(".productGrid").addClass("gridView");
			}
			if ($(this).hasClass("list-view")) {
			  $(this).addClass("active");
			  $(".productGrid").removeClass("gridView");
			  $(".productGrid").removeClass("tableView");
			  $(".productGrid").addClass("listView");
			}
			if ($(this).hasClass("table-view")) {
			  $(this).addClass("active");
			  $(".productGrid").removeClass("gridView");
			  $(".productGrid").removeClass("listView");
			  $(".productGrid").addClass("tableView");
			}
		});
		
		var incrementPlus;
		var incrementMinus;

		var buttonPlus  = $(".cart-qty-plus");
		var buttonMinus = $(".cart-qty-minus");

		var incrementPlus = buttonPlus.click(function() {
			var $n = $(this)
				.parent(".form-increment")
				.find(".form-input--incrementTotal");
			$n.val(Number($n.val())+1 );
			var amoumtqty = $n.val();
			$(".addtocart").attr('href', function(i, h) {
				return h + (h.indexOf('?') != -1 ? "&qty="+amoumtqty : "&qty=1");
			});
		});

		var incrementMinus = buttonMinus.click(function() {
				var $n = $(this)
				.parent(".form-increment")
				.find(".form-input--incrementTotal");
			var amount = Number($n.val());
			if (amount > 0) {
				$n.val(amount-1);
			}
			$(".addtocart").attr('href', function(i, h) {
				return h + (h.indexOf('?') != -1 ? "&qty="+amount : "&qty=1");
			});
		});
		
		
		window.setInterval(function(){
			$(".quickSearchResults .modal-close").click(function() {
			  $('.quickSearchResults .productGrid').remove();
			  $('#search_query').val('');
			  $(this).hide();
			});
		}, 1000);
		
		
    }
}
