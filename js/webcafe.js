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
  $(".main-menu ul li:last-child a").focusout(
    function(){
      $(this).parent().parent().css("display","none");
    }
  );
});