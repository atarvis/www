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
  $(".main-menu ul li:last-child a").focusout(/*a중에서도 마지막꺼를 벗어날 때 out되도록 */
    function(){
      $(this).parent().parent().css("display","none");
    }
  );
});