define(['jquery.boiler'], function($){

	$.boiler('accordian', {
		defaults: {
			anchor: '.accordian__title'
		},

		init: function(){
			var plugin = this;

			//event
			var $anchor = plugin.$el.find(plugin.settings.anchor);

			$anchor.on('click', function(e){
				e.preventDefault();
				plugin.open.call(plugin);
			});
		},

		open: function(e){
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