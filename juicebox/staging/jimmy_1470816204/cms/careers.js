{
	$kispander_link_color_type: 'colorpicker',
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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467280276_Career_header.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '33',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#363636',
				$jumbotext_type: 'textarea',
				jumbotext: 'Now’s a better time than ever to do great things with cool people. Reach out today.'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Work with us',
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
							title: 'If you stand out or defy categorization, want to make an impact or dream of working with people who push you to do better, KISKA is the place where you’re free to drive your professional destiny.',
							$text_type: 'textarea',
							text: 'So come here and do what do you best (better than you’ve ever done before). Search our listings or [quick connect]{apply}.',
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
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275072_Bildschirmfoto 2016-06-30 um 10.03.54.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/junior'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275121_Bildschirmfoto 2016-06-30 um 10.03.46.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/lead'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275130_Bildschirmfoto 2016-06-30 um 10.03.54.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/junior'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275138_Bildschirmfoto 2016-06-30 um 10.03.46.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/lead'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275147_Bildschirmfoto 2016-06-30 um 10.04.08.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/apply'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275157_Bildschirmfoto 2016-06-30 um 10.03.54.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/junior'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275168_Bildschirmfoto 2016-06-30 um 10.03.46.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/lead'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275179_Bildschirmfoto 2016-06-30 um 10.03.54.png',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: '',
							square_link: '#ksp/junior'
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
				module_name: 'Be part of Kiska',
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
							title: 'The big picture’s important, but oftentimes it’s the little perks that make a big difference. At home, sweet studio locations and our laid back culture make the grade. But, you’re also welcome to get lost. It’s a good blend for the daily grind.',
							$text_type: 'textarea',
							text: '',
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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1467275489_perks.jpg',
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
				module_name: 'Meet us',
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
							title: 'We get around. A lot.  Meet up with us here:',
							$text_type: 'textarea',
							text: 'July 1-2, 2016\nFH Joanneum Graz Industrial Design Show\n\nJuly 15-16, 2016\nHS Pforzheim Werkschau\n\nOctober 20, 2016\nFH Hagenberg Karrieremesse\n\nDecember 1, 2016\nFH Salzburg Contacta Job & Karrieremesse',
							purelink: ''
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
							header: 'Our culture',
							title: 'What you see is what you get.',
							$text_type: 'textarea',
							text: '',
							link: 'Take a peek',
							link_href: '/culture'
						}
					}
				]
			}
		}
	]
}