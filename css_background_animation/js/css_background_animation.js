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

			if(css_selector != undefined && $(css_selector).length == 1) {
    		$(css_selector).css({"position": "relative", "z-index":"0", "overflow": "hidden"});
    		if(small_count != undefined && small_count != 0) {
        	elementBuilder (css_selector,shape,transition, size = 's', small_count, shapeSize = 50);
    		}
    		if(medium_count != undefined && medium_count != 0) {
        	elementBuilder (css_selector,shape,transition, size = 'm', medium_count, shapeSize = 75);
    		}
    		if(large_count != undefined && large_count != 0) {
        	elementBuilder (css_selector,shape,transition, size = 'l', large_count, shapeSize = 100);
    		}    		
			}

			function elementBuilder(css_selector,shape,transition, size, count, elementSize) {
				if(shape != undefined) {
					// Remove all existing shapes of current size
					$('.'+shape+'-'+size).remove();										
					if(count != undefined) {		
						var divWidth = $(css_selector).width();
						var divHeight = $(css_selector).height();
						var horizCord = [];
						var vertCord = [];
						var heightInterval = ($(css_selector).height() - elementSize)/10;								
						var widthInterval = ($(css_selector).width() - elementSize)/count;	
						for (var i = elementSize; i < (divWidth-elementSize); i += (elementSize+5)) {
							horizCord.push(i);  
						}
						for (var i = 0; i < (divHeight-elementSize); i += 5) {
							vertCord.push(i);  
						}

						for (var i = 1; i <= count; i++) {
							var horizCordValue = horizCord[Math.floor(Math.random() * horizCord.length)];
							horizCord = jQuery.grep(horizCord, function(value) {
						  	return value != horizCordValue;
							});	
							
							var vertCordValue = vertCord[Math.floor(Math.random() * vertCord.length)];
							vertCord = jQuery.grep(vertCord, function(value) {
								return value != vertCordValue;
							});

							// Append shapes
							$(css_selector).prepend('<div class="animation-'+shape+' '+shape+'-'+size+' '+i+'" style="width:'+elementSize+'px; height:'+elementSize+'px; left:'+horizCordValue+'px; bottom: '+vertCordValue+'px"></div>');
							// Applying color
							if(color != undefined) {
								$(':root').css("--color", color);
							}

							// Adding transition class with an extension
							if(transition != undefined) {
								var dividend = 4;
								var reminder = i % dividend;
								$('.'+shape+'-'+size+'.'+i).addClass('animation-'+transition+'-'+reminder);
							}
						}
					}

				}
			} // elementBuilder ends here

    }
  };
})(jQuery, Drupal);
