(function(){var c=function(){var a=0;$(".animate-box").waypoint(function(c){"down"!==c||$(this.element).hasClass("animated-fast")||(a++,$(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(a){var b=$(this);setTimeout(function(){var a=b.data("animate-effect");"fadeIn"===a?b.addClass("fadeIn animated-fast"):"fadeInLeft"===a?b.addClass("fadeInLeft animated-fast"):"fadeInRight"===a?b.addClass("fadeInRight animated-fast"):b.addClass("fadeInUp animated-fast");
b.removeClass("item-animate")},200*a,"easeInOutExpo")})},100))},{offset:"85%"})},d=function(){$(".js-gotop").on("click",function(a){a.preventDefault();$("html, body").animate({scrollTop:$("html").offset().top},500,"easeInOutExpo");return!1});$(window).scroll(function(){200<$(window).scrollTop()?$(".js-top").addClass("active"):$(".js-top").removeClass("active")})};$(function(){c();d();$(".qbootstrap-loader").fadeOut("slow")})})();