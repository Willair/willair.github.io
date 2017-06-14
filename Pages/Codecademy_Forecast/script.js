var main = function() {
  $('.day').click(function(){
    $(this).next('.hourly').toggle('slow');
    $(this).find('span').toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);