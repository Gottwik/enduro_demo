require.config({
	baseUrl: '/assets/',

	paths: {
		'jquery': 'vendor/jquery/dist/jquery.min',
		'owl': 'vendor/owl.carousel/dist/owl.carousel',
		'masonry': 'vendor/masonry/masonry',
		'outlayer': 'vendor/outlayer',
		'get-size': 'vendor/get-size',
		'ev-emitter': 'vendor/ev-emitter',
		'fizzy-ui-utils': 'vendor/fizzy-ui-utils',
		'desandro-matches-selector/matches-selector': 'vendor/desandro-matches-selector/matches-selector',

	},
	shim: {
		'owl': {
			deps: ['jquery']
		},
		'masonry': {
			deps: ['jquery']
		}
	}
})

require(['jquery'], function($) {
	$(document).ready(function() {
		require(['owl'], function() {
			$('.jumboslider').owlCarousel({
				items: 1,
				nav: true,
				loop: true,
				navText: ['', ''],
				autoplay: true,
				autoplayTimeout: 2500,
				animateOut: 'fadeOut'
			})
		})
	})

	require(['masonry'], function(masonry) {
		$('.masonry').each(function(index, element){
			new masonry(element, {})
		})
	})
})