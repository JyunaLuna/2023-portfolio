$("document").ready(function () {

  // 로딩창
  $(window).load(function(){
    $('.loaderW').delay('500').fadeOut();
  });

  // 마우스포인터
  var $mousePointer = $("#mouse-pointer");
  $clickElements = $("a, button, input, .cloneW2 li, .popup_close");

  function moveCursor(e) {
    $mousePointer.css({
      left: e.pageX,
      top: e.pageY,
    });
  }

  $clickElements.mouseenter(function () {
    // console.log("마우스 호버.");
    $mousePointer.addClass("hover");
  });
  $clickElements.mouseleave(function () {
    // console.log("마우스 나감.");
    $mousePointer.removeClass("hover");
  });

  $(window).on("mousemove", moveCursor);
});

// lg 클론디자인
function popOpen2_1() {
  var design1_popup = $(".design1_popup");
  $(design1_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_1() {
  var design1_popup = $(".design1_popup");
  $(design1_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 아쉬탕타 요가어플 클론디자인
function popOpen2_2() {
  var design2_popup = $(".design2_popup");
  $(design2_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_2() {
  var design2_popup = $(".design2_popup");
  $(design2_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 카페 포스터 트레이싱
function popOpen2_3() {
  var design3_popup = $(".design3_popup");
  $(design3_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_3() {
  var design3_popup = $(".design3_popup");
  $(design3_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// Super Gradient 프로젝트 트레이싱
function popOpen2_4() {
  var design4_popup = $(".design4_popup");
  $(design4_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_4() {
  var design4_popup = $(".design4_popup");
  $(design4_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 공차 포스터 디자인
function popOpen2_5() {
  var design5_popup = $(".design5_popup");
  $(design5_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_5() {
  var design5_popup = $(".design5_popup");
  $(design5_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 펫박스 상세페이지 디자인
function popOpen2_6() {
  var design6_popup = $(".design6_popup");
  $(design6_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_6() {
  var design6_popup = $(".design6_popup");
  $(design6_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 올리브영 그린몬스터 상세페이지 트레이싱
function popOpen2_7() {
  var design7_popup = $(".design7_popup");
  $(design7_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_7() {
  var design7_popup = $(".design7_popup");
  $(design7_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}

// 오호라 상세페이지 트레이싱
function popOpen2_8() {
  var design8_popup = $(".design8_popup");
  $(design8_popup).stop().fadeIn(600);
  $("body").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
}
function popClose2_8() {
  var design8_popup = $(".design8_popup");
  $(design8_popup).stop().fadeOut(100);
  $("body").off("scroll touchmove mousewheel");
}
