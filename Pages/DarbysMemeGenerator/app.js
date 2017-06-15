$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};

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
