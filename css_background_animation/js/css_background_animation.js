(function ($, Drupal) {
  Drupal.behaviors.cssBackgroundAnimation = {
    attach: function (context, settings) {
	    var css_selector=drupalSettings.css_background_animation.css_selector;
			var shape=drupalSettings.css_background_animation.shape;
			var color=drupalSettings.css_background_animation.color;
			var small_count=drupalSettings.css_background_animation.small_count;
			var medium_count=drupalSettings.css_background_animation.medium_count;
			var large_count=drupalSettings.css_background_animation.large_count;
			var transition=drupalSettings.css_background_animation.transition;
			var css_selector= '#sirialwaysyes';

			if(css_selector != undefined && $(css_selector).length == 1) {
    		$(css_selector).css({"position": "relative", "z-index":"0", "background":"green"});
    		if(small_count != undefined && small_count != 0) {

        	elementBuilder (css_selector,shape,transition, size = 's', small_count, circleSize = 100);
    		}
    		if(medium_count != undefined && medium_count != 0) {
    			console.log('medimu section'+ medium_count.length);
        	elementBuilder (css_selector,shape,transition, size = 'm', medium_count, circleSize = 150);
    		}
    		if(large_count != undefined && large_count != 0) {
    			console.log('large section'+ large_count.length);
        	elementBuilder (css_selector,shape,transition, size = 'l', large_count, circleSize = 200);
    		}    		
			}

			function elementBuilder(css_selector,shape,transition, size, count, elementSize) {
				console.log('ssashfirst'+elementSize);
				if(shape != undefined) {
					switch (shape) {
						case 'circle':							
							$('.animation-circle-'+size).remove();										
							if(count != undefined) {
								var divWidth = $(css_selector).width();
								var divHeight = $(css_selector).height();
								var colWidth = divWidth / elementSize;
								var horizCord = [];
								var vertCord = [];
								var elementposdata = [];
							//	var heightInterval = ($(css_selector).height() - elementSize)/10;								
								//var widthInterval = ($(css_selector).width() - elementSize)/count;		
								for (var i = 0; i < divWidth; i += elementSize) {
									horizCord.push(i);  
								}
								for (var i = 0; i < divHeight; i += elementSize) {
									vertCord.push(i);  
								}

								for (var i = elementSize; i < divWidth; i += elementSize) {
									for (var j = elementSize; j < divHeight; j += elementSize) {
										elementposdata.push(i,j);
									}
								}

							


								for (var i = 1; i <= count; i++) {

									
										var rhandomvalue = Math.floor( Math.random() * elementposdata.length / 2 ) * 2;
										
								var widthIntervalpos = elementposdata[rhandomvalue];
								var widthInterval = divWidth - widthIntervalpos;
								var heightInterval = elementposdata[rhandomvalue+1];
								console.log('divwidth:'+divWidth);
										console.log('widthIntervalpos:'+widthIntervalpos);
										console.log('widthInterval:'+widthInterval);

								elementposdata.splice(rhandomvalue,2);

									//$(css_selector).prepend('<div class="animation-circle-'+size+'" style="left:'+widthInterval*i+'px; bottom: '+heightInterval*random+'px"></div>');
									$(css_selector).prepend('<div class="animation-circle-'+size+'" style="left:'+widthInterval+'px; bottom: '+heightInterval+'px"></div>');
									$(':root').css("--leftright", widthIntervalpos+'px');
									if(color != undefined) {
										$(':root').css("--color", color);
									}
									if(transition != undefined) {
										$('.animation-circle-'+size).addClass('animation-'+transition);
									}
								}
							}							
							break;
						case 'square':
							$('.animation-square-'+size).remove();										
							if(count != undefined) {										
								var heightInterval = ($(css_selector).height() - elementSize)/10;								
								var widthInterval = ($(css_selector).width() - elementSize)/count;											
								for (var i = 1; i <= count; i++) {
									var random= Math.floor(Math.random() * (10 - 1 + 0)) + 1;
									$(css_selector).prepend('<div class="animation-square-'+size+'" style="left:'+widthInterval*i+'px; bottom: '+heightInterval*random+'px"></div>');
									if(color != undefined) {
										$(':root').css("--color", color);
									}
									if(transition != undefined) {
										$('.animation-square-'+size).addClass('animation-'+transition);
									}
								}
							}
							break;
						case 'bubble':
							$('.animation-bubble-'+size).remove();										
							if(count != undefined) {		
								var divWidth = $(css_selector).width();
								var divHeight = $(css_selector).height();
								var horizCord = [];
								var vertCord = [];
								var positionCoordinates = [[]];
								var tdarray = [[]];
								tdarray[0].push(22);
								tdarray[0].push(23);
								var heightInterval = ($(css_selector).height() - elementSize)/10;								
								var widthInterval = ($(css_selector).width() - elementSize)/count;	
								for (var i = 0; i < (divWidth-elementSize); i += elementSize) {
									horizCord.push(i);  
								}
								for (var i = 0; i < divHeight; i += elementSize) {
									vertCord.push(i);  
								}

								vertCord.forEach(vertFunction);

								function vertFunction(item, index) {
									horizCord.forEach(horizFunction, item);
								}

								function horizFunction(item, index, horizontal) {
									console.log(item, horizontal);
									$('.sashi').append('<span style="left:'+horizontal+'px; bottom: '+item+'px; position: absolute;">God Of God</span>');
								}

								for (var i = 1; i <= count; i++) {
									var horizCordValue = horizCord[Math.floor(Math.random() * horizCord.length)];
								//	if(horizCord >= count) {
										horizCord = jQuery.grep(horizCord, function(value) {
									  	return value != horizCordValue;
										});
									//} 	
									
									var vertCordValue = vertCord[Math.floor(Math.random() * vertCord.length)];
								//	if(vertCord >= count) {
										vertCord = jQuery.grep(vertCord, function(value) {
											return value != vertCordValue;
										});
									//}
									
									//console.log('horizon: '+horizCordValue);
									//console.log('width: '+divWidth);
									var random = Math.floor(Math.random() * (10 - 1 + 0)) + 1;
									//$(css_selector).prepend('<div class="animation-bubble-'+size+'" style="left:'+widthInterval*i+'px; bottom: '+heightInterval*random+'px"></div>');
									$(css_selector).prepend('<div class="animation-bubble-'+size+'" style="left:'+horizCordValue+'px; bottom: '+vertCordValue+'px"></div>');
									if(color != undefined) {
										$(':root').css("--color", color);
									}
									if(transition != undefined) {
										$('.animation-bubble-'+size).addClass('animation-'+transition);
									}
								}
							}
					}
				}
			}

    }
  };
})(jQuery, Drupal);