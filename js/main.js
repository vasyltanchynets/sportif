"use strict";function _toArray(e){return Array.isArray(e)?e:Array.from(e)}$(document).ready(function(){$(window).outerWidth(),$(window).outerHeight();var i,e,t,n,a,o=window.navigator.userAgent,r=(o.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}});(-1<(o=navigator.userAgent).indexOf("MSIE ")||-1<o.indexOf("Trident/"))&&$("body").addClass("ie"),r.any()&&$("body").addClass("touch"),$(".header-menu__icon").click(function(e){$(this).toggleClass("active"),$(".header-menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),$.each($(".ibg"),function(e,t){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}),$(document).ready(function(){$(".shop__spoiller-title").click(function(e){$(".shop__spoillers").hasClass("one")&&($(".shop__spoiller-title").not($(this)).removeClass("active"),$(".shop__spoiller-items").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})}),$(document).ready(function(){var e=$(".original__image-big-list-item"),t=$(".original__image-small-list-item");t.on("click mouseenter",function(){e.removeClass("active"),t.removeClass("active"),e.eq($(this).index()).addClass("active"),t.eq($(this).index()).addClass("active")})}),$(".goto").click(function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),0<(i=document.querySelectorAll(".form__rating")).length&&function(){function e(e){a(e),o(),e.classList.contains("rating_set")&&function(i){for(var e=i.querySelectorAll(".form__rating-item"),t=function(t){var n=e[t];n.addEventListener("mouseenter",function(e){a(i),o(n.value)}),n.addEventListener("mouseleave",function(e){o()}),n.addEventListener("click",function(e){a(i),i.dataset.ajax?setRatingValue(n.value,i):(r.innerHTML=t+1,o())})},n=0;n<e.length;n++)t(n)}(e)}function a(e){t=e.querySelector(".form__rating-active"),r=e.querySelector(".form__rating-value")}function o(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:r.innerHTML)/.05;t.style.width=e+"%"}for(var t=void 0,r=void 0,n=0;n<i.length;n++)e(i[n])}(),e=document.getElementsByClassName("form__btn")[0],t=_toArray(document.getElementsByName("name")).slice(0),n=/^[A-z]+$/g,a=void 0,t[0].addEventListener("change",function(e){a=n.test(t[0].value),t[0].classList=a?"input":"input error"}),e.addEventListener("click",function(e){""==t[0].value&&(t[0].classList="input error",e.preventDefault()),a?t[0].classList="input":(t[0].classList="input error",e.preventDefault())});var s,c,l,u,d,m,g,v;s=document.getElementsByClassName("form__btn")[0],c=document.getElementsByName("name")[0],l=document.getElementsByName("summary")[0],u=document.getElementsByName("review")[0],d=document.getElementsByName("rating-overall"),m=document.getElementsByName("rating-comfort"),g=document.getElementsByName("rating-quality"),v=document.getElementsByName("rating-fit"),s.addEventListener("click",function(){sessionStorage.setItem("name",c.value),sessionStorage.setItem("summary",l.value),sessionStorage.setItem("review",u.value),d.forEach(function(e){e.checked&&sessionStorage.setItem("rating-overall",e.value)}),m.forEach(function(e){e.checked&&sessionStorage.setItem("rating-comfort",e.value)}),g.forEach(function(e){e.checked&&sessionStorage.setItem("rating-quality",e.value)}),v.forEach(function(e){e.checked&&sessionStorage.setItem("rating-fit",e.value)})})});