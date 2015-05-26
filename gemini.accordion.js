/**
 * @fileoverview

A jQuery plugin to build accordion's. The plugin works mostly with CSS,
meaning the markup is quite manipulatable.

### Notes
- Requires an include to ``accordion.scss`` in your Gemini build

### Features
- You can activate an accordion on load by adding the CSS class ``is-active``
- You can make something an accordion *only on small devices* using the class
``accordion--small``

 *
 * @namespace gemini.accordion
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires gemini
 *
 * @prop {string} anchor {@link gemini.accordion#anchor}
 *
 * @example
  <html>
    <!-- Normal Accordion -->
    <div class="js-accordion accordion">
      <h6 class="accordion__title">Click Here</h6>
      <div class="accordion__content">
        The content inside of the accordion.
      </div>
    </div>

    <!-- Active Accordion -->
    <div class="js-accordion accordion is-active">
      <h6 class="accordion__title">Click Here</h6>
      <div class="accordion__content">
        The content inside of the accordion.
      </div>
    </div>

    <!-- Only accordion on small devices -->
    <div class="js-accordion accordion accordion--small">
      <h6 class="accordion__title">Click Here</h6>
      <div class="accordion__content">
        The content inside of the accordion.
      </div>
    </div>
  </html>
 *
 * @example
  $('.js-accordion').accordion();
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['gemini'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('gemini'));
  } else {
    // Browser globals
    factory(G);
  }
}(function($) {

  $.boiler('accordion', {
    defaults: {
      /**
       * The selector that works as an anchor to open and close the accordion
       *
       * @name gemini.accordion#anchor
       * @type string
       * @default '.accordion__title'
       */
      anchor: '.accordion__title'
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
     * Toggle the opened or closed state of the accordion
     *
     * @method
     * @name gemini.accordion#toggle
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

}));
