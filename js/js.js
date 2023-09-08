$("document").ready(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    fadeEffect: {
      delay: 2500,
      crossFade: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#auto-start").on("click", function () {
    // 기본 설정으로 autoplay 시작
    console.log("autoplay start");
    swiper.autoplay.start();
    document.getElementById("auto-start").style.display = "none";
    document.getElementById("auto-stop").style.display = "block";
  });

  $("#auto-stop").on("click", function () {
    console.log("autoplay stop");
    swiper.autoplay.stop();
    document.getElementById("auto-stop").style.display = "none";
    document.getElementById("auto-start").style.display = "block";
  });

  $(".conArtTitleW li").on("click", function () {
    var i = $(this).index();

    // $(".conArtTitleW li").removeClass("on");
    // $(this).addClass("on");

    $(".conArtTitleW li").toggleClass("on");

    $(".boardlist").removeClass("on");
    $(".boardlist").eq(i).addClass("on");
  });

  $(".language").on("click", function () {
    $(".language").toggleClass("active");
  });

  $(".selectMenu").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".tellist").on("click", function () {
    $(this).toggleClass("active");
  });
});
