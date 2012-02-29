/**
 * Copyright (C) 2011 innoQ Deutschland GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
	This module adds methods and a key binding to toggle slide visibility.
*/
(function($, deck, undefined) {
  var $d = $(document);
    
  /*
	Extend options.
	
	options.classes.blackout
		The class added to the deck container when the slides should be hidden.
	
	options.keys.blackout
		The numeric keycode used to toggle between showing and hiding the slides.
	*/
  $.extend(true, $[deck].defaults, {
    classes: {
      blackout: 'deck-black'
    },
		
    keys: {
      blackout: 66 // b
    }
  });

  /*
	Shows the blackscreen by adding the deck-black class to the deck container.
   */
  $[deck]('extend', 'showBlackscreen', function() {
    var $c = $[deck]('getContainer'),
    opts = $[deck]('getOptions');
		
    if ($c.hasClass(opts.classes.blackout)) return;
		
    $c.addClass(opts.classes.blackout);
  });

  /*
	Hides the blackscreen by removing the deck-black class from the deck container.
   */
  $[deck]('extend', 'hideBlackscreen', function() {
    var $c = $[deck]('getContainer'),
    opts = $[deck]('getOptions');
		
    if (!$c.hasClass(opts.classes.blackout)) return;
		
    $c.removeClass(opts.classes.blackout);
  });

  /*
	Toggles slide visibility by showing and hiding the blackscreen.
	*/
  $[deck]('extend', 'toggleBlackscreen', function() {
    $[deck]('getContainer').hasClass($[deck]('getOptions').classes.blackout) ?
    	$[deck]('hideBlackscreen') : $[deck]('showBlackscreen');
  });

  $d.bind('deck.init', function() {
    var opts = $[deck]('getOptions');
		
    // Bind key event
    $d.bind('keydown.deckblack', function(e) {
      if (e.which === opts.keys.blackout 
          || $.inArray(e.which, opts.keys.blackout) > -1) {
        $[deck]('toggleBlackscreen');
        e.preventDefault();
      }
    });
  });
})(jQuery, 'deck');

