var main = function() {
  $('#top-text').keyup(function(){
    var topCap = $('#top-text:text').val();
    $('.top-caption').text(topCap);
  });
  
  $('#bottom-text').keyup(function(){
    var botCap = $('#bottom-text:text').val();
  $('.bottom-caption').text(botCap);
  });
  
  $('#image-url').keyup(function(){
    var imgUrl = $('#image-url:text').val();
  $('img').attr('src',imgUrl);
  });
};
 
$(document).ready(main);