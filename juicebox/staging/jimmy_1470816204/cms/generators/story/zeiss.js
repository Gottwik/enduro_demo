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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1_ZEISS_Header_pic.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '6',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: 'A story about seeking out what\'s special in moments.'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Intuition',
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
							title: 'Have you ever thought about the pleasure encountered when reading a great book? The [moments]{transparency} when you can fully concentrate on the story, imagining the characters as if they were real?',
							$text_type: 'textarea',
							text: 'Wonderful! That means you have had the pleasure of experiencing a well-designed product. But, how is this book particularly well designed? Because you haven’t noticed that it had been “designed” at all. It simply is.',
							link: ''
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
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/Zeiss_Grid1.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2_ZEISS_grid_2.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2_ZEISS_grid_pic_3.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2_ZEISS_grid_pic_3.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2_ZEISS_grid_pic_4.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
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
				module_name: 'Modern Marvel',
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
							title: 'Binoculars are a marvel!',
							$text_type: 'textarea',
							text: 'It doesn’t matter how far we’ve come, one of our greatest achievements still exists in binoculars. And, as far as we’re concerned, the beauty of binoculars lies in their intuitive ability to make life happening faraway seem like moments happening here. So, KISKA set out to create a truly well designed product – one that took the innate qualities of what binoculars can do and accentuated them through form, line and material.',
							link: ''
						}
					},
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_images',
						$context_noframe: true,
						context: {
							$imgs_size: 12,
							imgs: [
								{
									$img_type: 'image',
									img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2_ZEISS_grid_zoom.jpg'
								}
							]
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
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/3_ZEISS_grid_pic_1.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/3_ZEISS_grid_pic_2.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/3_ZEISS_grid_pic_3.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: ''
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
				module_name: 'Still Premium',
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
							title: 'When it rains, it pours. But, when your binoculars slip out of your hand you may have to kiss them goodbye. But not your memories.',
							$text_type: 'textarea',
							text: 'While maintaining the utmost precision and subtle stylistic detail, ZEISS binoculars are still a tool. Premium packaging and high-quality materials are what set them apart in the field.',
							link: ''
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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/4_ZEISS_full_pic.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '17',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: 'The purity of ZEISS binocular [design]{designprocess} means you focus fully on that special moment: a moment of surprise, a moment of beauty, a moment of magic.'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Always Pure',
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
							title: 'And, it doesn’t end with binoculars. In fact, the entire product range was [crafted]{specialist} with clarity and precision in mind: binoculars, range finders and scopes.',
							$text_type: 'textarea',
							text: '',
							link: ''
						}
					},
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: '',
							$text_type: 'textarea',
							text: 'Our designers underlined these characteristically “German” engineering characteristics by giving them unobtrusive design characteristics that allow you to adjust and fine-tune the device for the time of your life.',
							link: ''
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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/5_ZEISS_full_pic.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 5,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: ''
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: '',
				social: false,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '100',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: true,
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
							header: 'What do you focus on?',
							title: 'Let\'s concentrate on your moments.',
							$text_type: 'textarea',
							text: '',
							link: 'Get in touch'
						}
					}
				]
			}
		}
	]
}