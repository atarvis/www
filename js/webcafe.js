//서브메뉴를 위한 스크립트//
$(function(){
  $(".main-menu>li").hover(
    function(){/*함수를 실행*/
      $(this).children("ul").css("display","block");/*선택할 대상*/
    },
    function(){
      $(this).children("ul").css("display","none");
    }
  );

  $(".main-menu>li>span").focusin(
    function(){
      $(this).siblings("ul").css("display","block");
    }
  );
  
    // 탭메뉴 제어를 위한 자바스크립트
    $(".board h2").focus(function() {
        $(this).parent().addClass("act")
            .siblings().removeClass("act");
    });
});