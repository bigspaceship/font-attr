var Main = new(function()
{
	var _self = this;
	var _gui;
	var _fonts;

	// this.init = function init( $gui, $o.dataObject, $fonts, $prefix )
	this.init = function init( $o )
	{
		_setBrowser();

		_gui = $o.gui;
		_fonts = $o.fonts;

		if( jQuery.browser.mobile )
			_gui.close();

		var stylesController = _gui.add( $o.dataObject, 'face', _fonts );
		stylesController.onFinishChange(function(value)
		{
			// removes all the classes that begin with whatever prefix we pass in
			var $a = $( '.container' ).attr( 'class' ).split( ' ' );
			var classes = $a.map(function(item)
			{
			    return item.indexOf( $o.prefix ) === -1 ? item : '';
			});
			$( '.container' ).attr( 'class', classes.join( ' ' ) );

			$( '.container' ).addClass( value );
		});

		var bgController = _gui.addColor( $o.dataObject, 'bgColor' );
		bgController.onChange(function(value)
		{
			$( '.container' ).css( 'backgroundColor', value );
		});

		var colorController = _gui.addColor( $o.dataObject, 'fontColor' );
		colorController.onChange(function(value)
		{
			$( '.container' ).css( 'color', value );
		});

		var sizeController = _gui.add( $o.dataObject, 'size', 12, 96 ).step( 1 );
		sizeController.onChange(function(value)
		{
			$( '.container' ).css( 'fontSize', value );
		});

		var lineHeightController = _gui.add( $o.dataObject, 'lineHeight', 5, 100 ).step( 1 );
		lineHeightController.onChange(function(value)
		{
			$( '.container' ).css( 'lineHeight', value + 'px' );
		});

		var spacingController = _gui.add( $o.dataObject, 'spacing', 5, 50 ).step( 1 );
		spacingController.onChange(function(value)
		{
			$( '.container p' ).css( 'paddingBottom', value + 'px' );
		});

		var letterSpacingController = _gui.add( $o.dataObject, 'letterSpacing', -10, 20 ).step( 1 );
		letterSpacingController.onChange(function(value)
		{
			$( '.container' ).css( 'letterSpacing', value + 'px' );
		});

		var widthController = _gui.add( $o.dataObject, 'width', 200, 1200 ).step( 1 );
		widthController.onChange(function(value)
		{
			$( '.container' ).css( 'width', value );
		});

		var rotationController = _gui.add( $o.dataObject, 'rotation', -180, 180 ).step( 1 );
		rotationController.onChange(function(value)
		{
			if( jQuery.browser.chrome || jQuery.browser.safari )
				$( '.container' ).css( 'webkitTransform', "rotate("+value+"deg)" );
			else if( jQuery.browser.mozilla )
				$( '.container' ).css( 'MozTransform', "rotate("+value+"deg)" );
		});

		// var weightController = _gui.add( text, 'weight', 100, 1000 ).step( 100 );
		// weightController.onChange(function(value)
		// {
		// 	$( '.container' ).css( 'fontWeight', value );
		// });

		var alignController = _gui.add( $o.dataObject, 'align', ['left', 'center', 'right'] );
		alignController.onFinishChange(function(value)
		{
			$( '.container' ).css( 'textAlign', value );
		});

		var transformController = _gui.add( $o.dataObject, 'transform', ['inherit', 'uppercase', 'capitalize', 'lowercase'] );
		transformController.onFinishChange(function(value)
		{
			$( '.container' ).css( 'textTransform', value );
		});

		var smoothingController = _gui.add( $o.dataObject, 'smoothing', ['antialiased', 'subpixel-antialiased', 'none'] );
		smoothingController.onFinishChange(function(value)
		{
			if( jQuery.browser.chrome || jQuery.browser.safari )
				$( '.container' ).css( 'webkitFontSmoothing', value );
			else
				alert( 'sorry, charlie, not supported' );

		});

	};

	function _setBrowser()
	{
		var userAgent = navigator.userAgent.toLowerCase();

		// Figure out what browser is being used
		jQuery.browser = {

			version: (userAgent.match( /.+(?:rv|it|ra|ie|me|ve)[\/: ]([\d.]+)/ ) || [])[1],

			chrome: /chrome/.test( userAgent ),
			safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
			opera: /opera/.test( userAgent ),
			firefox: /firefox/.test( userAgent ),
			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),

			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),

			webkit: $.browser.webkit,
			gecko: /[^like]{4} gecko/.test( userAgent ),
			presto: /presto/.test( userAgent ),

			xoom: /xoom/.test( userAgent ),

			android: /android/.test( userAgent ),
			androidVersion: (userAgent.match( /.+(?:android)[\/: ]([\d.]+)/ ) || [0,0])[1],

			iphone: /iphone|ipod/.test( userAgent ),
			iphoneVersion: (userAgent.match( /.+(?:iphone\ os)[\/: ]([\d_]+)/ ) || [0,0])[1].toString().split('_').join('.'),

			ipad: /ipad/.test( userAgent ),
			ipadVersion: (userAgent.match( /.+(?:cpu\ os)[\/: ]([\d_]+)/ ) || [0,0])[1].toString().split('_').join('.'),

			blackberry: /blackberry/.test( userAgent ),

			winMobile: /Windows\ Phone/.test( userAgent ),
			winMobileVersion: (userAgent.match( /.+(?:windows\ phone\ os)[\/: ]([\d_]+)/ ) || [0,0])[1]
		};

		jQuery.browser.mobile   =   ($.browser.iphone || $.browser.ipad || $.browser.android || $.browser.blackberry );
	};

	// construct
	$(function()
	{

	});
})();