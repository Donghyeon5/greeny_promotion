$(function(){
  $('#all').click(function () {
    $('.filter_content div').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
  });
  $('#filter1').click(function () {
    $('.filter1, filter4').show();
    $('.filter2, .filter3').hide();//서서히 사라지게 만들고 싶다면 .fadeOut()을 사용한다.
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter1, filter4').hide();
  });

  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});