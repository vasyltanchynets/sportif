$(".header-menu__icon").click(function (event) {
  $(this).toggleClass("active");
  $(".header-menu").toggleClass("active");
  if ($(this).hasClass("active")) {
    $("body").data("scroll", $(window).scrollTop());
  }
  $("body").toggleClass("lock");
  if (!$(this).hasClass("active")) {
    $("body,html").scrollTop(parseInt($("body").data("scroll")));
  }
});

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}
ibg();

$(document).ready(function () {
  $(".shop__spoiller-title").click(function (event) {
    if ($(".shop__spoillers").hasClass("one")) {
      $(".shop__spoiller-title").not($(this)).removeClass("active");
      $(".shop__spoiller-items").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

// Change image on click or hover
$(document).ready(function () {
  var $bigItem = $(".original__image-big-list-item");
  var $smallItem = $(".original__image-small-list-item");

  $smallItem.on("click mouseenter", function () {
    $bigItem.removeClass("active");
    $smallItem.removeClass("active");

    $bigItem.eq($(this).index()).addClass("active");
    $smallItem.eq($(this).index()).addClass("active");
  });
});

$(".goto").click(function () {
  var el = $(this).attr("href").replace("#", "");
  var offset = 0;
  $("body,html").animate(
    { scrollTop: $("." + el).offset().top + offset },
    500,
    function () {}
  );

  if ($(".header-menu").hasClass("active")) {
    $(".header-menu,.header-menu__icon").removeClass("active");
    $("body").removeClass("lock");
  }
  return false;
});
