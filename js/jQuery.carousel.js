(function ($){
  $.fn.carousel = function (){
  var left = $('.left');
  var right = $('.right');
  var elementList = $('.carousel-list');

  var pixelsOffset = 425;
  var  currentLeftValue = 0;
  var elementsCount = elementList.find('li').length;
  var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
  var maximumOffset = 0;

  left.click(function(){
    if (currentLeftValue != maximumOffset) {
          currentLeftValue += 425;
          elementList.animate({ left : currentLeftValue + "px"}, 500);
      };
  });
  right.click(function(){
    if (currentLeftValue != minimumOffset) {
              currentLeftValue -= 425;
              elementList.animate({ left : currentLeftValue + "px"}, 500);
          };
  });
  return this;
};
})(jQuery);
