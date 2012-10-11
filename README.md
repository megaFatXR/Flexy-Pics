Flexy Pics
==========

A responsive photo grid that always adapts to fullscreen, no matter the resolution. Each image inside each block slice resizes keeping proportions.
Can be used for showing pictures, a graphic menu, a portfolio, or just an original UI combining images, text and links.
The main structure is mostly css, it uses just some lines of JS for the smart resizing of the images inside each block.  

Play with it. Try resizing the browser and see how it adapts and resizes, <strong>from a 1080 screen to smart phone resolution!</strong>

<a href="http://jotav.com.ar/proyects/flexy-pics/template-1-grid.html">DEMO</a> of template 1, plain, without images, to see the layout more clearly.<br>
And this is the FULL <a href="http://jotav.com.ar/proyects/flexy-pics/template-1.html">DEMO</a> of the template 1 with images.

## Usage

###Link Files
- `<link rel="stylesheet" href="css/flexycss"/>`
- `<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>`
- `<script type="text/javascript" src="js/jquery.queryloader2.js"></script>`
- `<script type="text/javascript" src="js/jquery-flexy.js"></script>`

###The Markup
- Copy the markup within the #flexGrid div of the template of your choice.
- <strong>Its IMPORTANT to give HEIGHT and WIDTH attributes to the images. Change this attributes in the template to the ones of the images your using!</strong> 

###Setup the Grid
```javascript
$(document).ready(function(){
	$("#flexyGrid").queryLoader2({
		onLoadComplete: function () {
			$('.mask img').each(function(){
				flexy(this);
			});
			delay = 0;
			var imagesArray = $.makeArray($('#flexyGrid img'));
			imagesArray.sort(function() { return (Math.round(Math.random())-0.5);});
			$('#loading-mask').fadeOut(900);
			for (i = 0 ; i < imagesArray.length ; i++) {
				$(imagesArray[i]).delay(delay).fadeIn(300);
				delay += 150;
			}
			return;
		}
	});
});
$(window).resize(function() {
	$('.mask img').each(function(){
		flexy(this);
	});
});
```


####Note:
- This plugin depends on JQuery library and <a href="http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/" target="_blank">QueryLoader2</a> plugin, by Gaya Kessler, and should be linked for its correct use.
- Be careful to change de ids and classes where corresponds if you change them form the original template markup. In the JS and CSS files.

####Work in progress! new templates and examples comming soon.

by <a href="http://mpadesign.me" target="_blank">MPA</a> & <a href="https://twitter.com/juan_v_" target="_blank">JOTAV</a><br>
Photos by <a href="http://cargocollective.com/onemorefoticoplease" target="_blank">Minileidy</a>

