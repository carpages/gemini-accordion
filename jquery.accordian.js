/**
 * @fileoverview

  A jQuery plugin to build accordian's. The plugin works mostly with CSS,
  meaning the markup is quite manipulatable.

  ### Notes
  - Requires an include to ``accordian.scss`` in your Gemini build

  ### Features
  - You can activate an accordian on load by adding the CSS class ``is-active``
  - You can make something an accordian *only on small devices* using the class
  ``accordian--small``

 *
 * @namespace - jquery.accordian
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires jquery
 * @requires jquery.boiler
 *
 * @prop {string} anchor {@link jquery.accordian#anchor}
 *
 * @example
  <html>
		<!-- Normal Accordian -->
    <div class="accordian">
			<h6 class="accordian__title">Click Here<h6/>
			<div class="accordian__content">
				The content inside of the accordian.
			</div>
    </div>

    <!-- Active Accordian -->
    <div class="accordian is-active">
      <h6 class="accordian__title">Click Here<h6/>
      <div class="accordian__content">
        The content inside of the accordian.
      </div>
    </div>

    <!-- Only accordian on small devices -->
    <div class="accordian accordian--small">
      <h6 class="accordian__title">Click Here<h6/>
      <div class="accordian__content">
        The content inside of the accordian.
      </div>
    </div>
  </html>
 *
 * @example
  $('.accordian').accordian();
 */
define(['jquery-loader', 'jquery.boiler'], function($){
	$.boiler('accordian', {
		defaults: {
      /**
       * The selector that works as an anchor to open and close the accordian
       *
       * @name jquery.accordian#anchor
       * @type string
       * @default '.accordian__title'
       */
			anchor: '.accordian__title'
		},

		init: function(){
			var plugin = this;

			//event
			var $anchor = plugin.$el.find(plugin.settings.anchor);

			$anchor.on('click', function(e){
				e.preventDefault();
				plugin.toggle.call(plugin);
			});
		},

    /**
     * Toggle the opened or closed state of the accordian
     *
     * @method
     * @name jquery.accordian#toggle
    **/
		toggle: function(e){
			var plugin = this;

			if(!plugin.$el.hasClass('is-inactive')){
				plugin.$el.toggleClass('is-active');
			}
		}
	});

	// Return the jquery object
	// This way you don't need to require both jquery and the plugin
	return $;

});
