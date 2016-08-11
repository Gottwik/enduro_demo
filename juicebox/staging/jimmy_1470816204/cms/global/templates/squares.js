{
	squares: {

		// * ———————————————————————————————————————————————————————— * //
		// * 	img 2 text - DEPRECATED
		// * ———————————————————————————————————————————————————————— * //
		// square_img2text: {
		// 	$square_type_hidden: true,
		// 	square_type: 'square_img2text',
		// 	$context_noframe: true,
		// 	context: {
		// 		$img_type: 'image',
		// 		img: '',
		// 		dark: false,
		// 		tagline: '',
		// 		title: '',
		// 		text: '',
		// 		button: '',
		// 		button_link: ''
		// 	}
		// },

		// * ———————————————————————————————————————————————————————— * //
		// * 	text
		// * ———————————————————————————————————————————————————————— * //
		square_text: {
			$square_type_hidden: true,
			square_type: 'square_text',
			$context_noframe: true,
			context: {
				$img_type: 'image',
				img: '',
				hashtags: '',
				title: '',
				text: '',
				link: '',
				new_tab: false,
			}
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	img detail
		// * ———————————————————————————————————————————————————————— * //
		square_imgdetail: {
			$square_type_hidden: true,
			square_type: 'square_imgdetail',
			$context_noframe: true,
			context: {
				$img_type: 'image',
				img: '',
				hashtags: '',
				gradient_bottom: true,
				$images_min: 1,
				images: [
					{
						$image_type: 'image',
						image: ''
					}
				]
			}
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	video detail
		// * ———————————————————————————————————————————————————————— * //
		square_videodetail: {
			$square_type_hidden: true,
			square_type: 'square_videodetail',
			$context_noframe: true,
			context: {
				$video_type: 'image',
				video: '',
				hashtags: '',
				gradient_bottom: true,
			}
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	twitter
		// * ———————————————————————————————————————————————————————— * //
		square_twitter: {
			$square_type_hidden: true,
			square_type: 'square_twitter',
			$context_noframe: true,
			context: {
				tweet: '',
				gradient_bottom: true
			}
		},

		// // * ———————————————————————————————————————————————————————— * //
		// // * 	linkedin
		// // * ———————————————————————————————————————————————————————— * //
		// square_linkedin: {
		// 	$square_type_hidden: true,
		// 	square_type: 'square_twitter',
		// 	$context_noframe: true,
		// 	context: {
		// 		linkedin: '',
		// 		gradient_bottom: true
		// 	}
		// },

	}
}