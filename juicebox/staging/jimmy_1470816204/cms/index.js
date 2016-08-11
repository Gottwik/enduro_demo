{
	$modules_hidetitle: true,
	$modules_size: 12,
	$modules_templatitator: '@@global.modules',
	modules: [
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_noframe: true,
			$context_expander: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467272818_5_ZEISS_full_pic.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '58',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000000',
				$jumbotext_type: 'textarea',
				jumbotext: 'Zoom out and see the bigger picture. This is a story about what’s special in moments.'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_noframe: true,
			$context_expander: true,
			context: {
				$squares_hidetitle: true,
				reversed: false,
				$squares_templatitator: '@@global.squares',
				squares: [
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467279674_3_grid_5_Craig.jpg',
							dark: false,
							tagline: '',
							title: '',
							$text_type: 'textarea',
							text: '',
							button: '',
							button_link: '',
							square_link: '#ksp/craig'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2-replace-for-video.jpg',
							dark: true,
							tagline: '#ontheroad',
							title: 'Roads everywhere',
							$text_type: 'textarea',
							text: 'Roads everywhere',
							button: 'read more',
							button_link: '#ksp/designprocess',
							square_link: '#ksp/designprocess'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467270857_3.jpg',
							dark: false,
							tagline: '#ontheroad',
							title: 'Roads everywhere',
							$text_type: 'textarea',
							text: 'Roads everywhere',
							button: 'read more',
							button_link: '#ksp/designprocess',
							square_link: '#ksp/designprocess'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467279049_job1.jpg',
							dark: false,
							tagline: '',
							title: '',
							$text_type: 'textarea',
							text: '',
							button: '',
							button_link: '',
							square_link: '#ksp/lead'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467270874_5.jpg',
							dark: false,
							tagline: '',
							title: '',
							$text_type: 'textarea',
							text: '',
							button: '',
							button_link: '',
							square_link: '/culture'
						}
					}
				]
			}
		}
	]
}