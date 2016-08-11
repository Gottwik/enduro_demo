{
	$kispander_link_color_type: 'colorpicker',
	kispander_link_color: '#000',
	$modules_hidetitle: true,
	$modules_size: 12,
	$modules_templatitator: '@@global.modules',
	modules: [
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688747_big_banner.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 5,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: 'Vision Future Sailing – How a design thesis is making waves in boat design',
				gradient_top: true,
				gradient_bottom: true
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Big Idea',
				social: true,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: false,
				$columns_hidetitle: true,
				$columns_templatitator: '@@global.simpleton_modules',
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'A student designer with a passion…and a big idea',
							$text_type: 'textarea',
							text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688762_big_picture1.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 5,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: '',
				gradient_top: true,
				gradient_bottom: true
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Dream to reality',
				social: false,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: false,
				$columns_hidetitle: true,
				$columns_templatitator: '@@global.simpleton_modules',
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'To make a dream reality, you need the right partner',
							$text_type: 'textarea',
							text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$squares_hidetitle: true,
				reversed: false,
				$squares_templatitator: '@@global.squares',
				squares: [
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688783_1small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688790_2small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688795_3small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688801_4small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688807_5big.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Schoolwork',
				social: false,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: false,
				$columns_hidetitle: true,
				$columns_templatitator: '@@global.simpleton_modules',
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'When your schoolwork takes you to the top',
							$text_type: 'textarea',
							text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$squares_hidetitle: true,
				reversed: false,
				$squares_templatitator: '@@global.squares',
				squares: [
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688890_1small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688896_2small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688901_3small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688906_4small.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688913_5big.jpg',
							hashtags: '',
							title: '',
							text: '',
							link: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'smooth sailing',
				social: false,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: false,
				$columns_hidetitle: true,
				$columns_templatitator: '@@global.simpleton_modules',
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'Will it be smooth sailing from here on?',
							$text_type: 'textarea',
							text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1469688932_slide_1.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 5,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: '',
				gradient_top: true,
				gradient_bottom: true
			}
		}
	]
}