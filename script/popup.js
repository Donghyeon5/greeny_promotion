$(function(){
    $(".pop1").click(function(){
        $(".pop1_1").show();//.fadeIn(); 서서히 나타남.
    });
    $(".popup a").click(function(){
        $(".popup").hide();//.fadeOut(); 서서히 사라짐.
        $('body').removeClass('body');
    });
    $(".pop2").click(function(){
        $(".pop1_2").show();//.fadeIn(); 서서히 나타남.
    });
   $('.pop1, .pop2').click(function(){
       $('body').addClass('body');
   });
});