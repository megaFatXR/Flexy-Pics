Flexy Pics
==========

A fully responsive photo grid that always adapts to fullscreen, no matter the resolution. Each image inside each block slice resizes keeping proportions.
Can be used for showing pictures, a graphic menu, a portfolio, or just an original UI combining images, text and links.
The main structure is mostly css, it uses just some lines of JS for the smart resizing of the images inside each block.  

Play with it. Try resizing the browser and see how it adapts and resizes, <strong>from a 1080 screen to smart phone resolution!</strong>

- Template 1 Grid <a href="http://jotav.com.ar/projects/flexy-pics/template-1-grid.html">DEMO</a> (plain, without images, to see the layout more clearly).
- Template 1 <a href="http://jotav.com.ar/projects/flexy-pics/template-1.html">FULL DEMO</a> with images.
- Template 2 Grid <a href="http://jotav.com.ar/projects/flexy-pics/template-2-grid.html">DEMO</a>

## Usage

###Link Files
- `<link rel="stylesheet" href="css/flexypics.css"/>`
- `<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>`
- `<script type="text/javascript" src="js/jquery.queryloader2.js"></script>`
- `<script type="text/javascript" src="js/jquery.flexypics.js"></script>`

###The Markup
- Copy the markup within the #flexyPics div of the template of your choice.
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
- For its correct use respect the container id and de classes of the internal modules, but you can add whatever content inside the modules with your own particular classes.

####Work in progress! new templates and examples comming soon.

by <a href="http://mpadesign.me" target="_blank">MPA</a> & <a href="https://twitter.com/juan_v_" target="_blank">JOTAV</a><br>
Photos by <a href="http://cargocollective.com/onemorefoticoplease" target="_blank">Minileidy</a>

