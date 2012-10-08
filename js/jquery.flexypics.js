/*
 * scales images from grid and attaches a spinner while the images load
 */
function flexy (theItem) {
  var maskWidth = $(theItem).parent('.mask').width();
  var maskHeight = $(theItem).parent('.mask').height();
  
  var imageWidth = parseInt($(theItem).attr('width'));
  var imageHeight = parseInt($(theItem).attr('height'));
  
  var picHeight = imageHeight / imageWidth;
  var picWidth = imageWidth / imageHeight;
  
  if ((maskHeight / maskWidth) < picHeight){
  	$(theItem).css("width",maskWidth);
    $(theItem).css("height",picHeight*maskWidth);
  } else {
    $(theItem).css("height",maskHeight);
    $(theItem).css("width",picWidth*maskHeight);
  }
  
  $(theItem).css("margin-left",maskWidth / 2 - $(theItem).width() / 2);
  $(theItem).css("margin-top",maskHeight / 2 - $(theItem).height() / 2);
};

divLoading = document.createElement('div');
divLoading.setAttribute('id', 'loading-mask');
document.body.appendChild(divLoading);