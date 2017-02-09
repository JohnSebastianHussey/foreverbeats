riot.tag2('about', '<div class="{opts.styles.textContainer}"> <p> <span class="colorA">S</span><span class="colorB">t</span><span class="colorC">e</span><span class="colorD">p</span><span class="colorE">p</span><span class="colorA">i</span><span class="colorB">n</span><span class="colorC">g</span> is a 5 track circular step sequencer inspired by <a href="http://www.olympianoiseco.com/apps/patterning/" class="linkColorA">patterning</a>. The number of steps for each track can be set with the top dial and the placement of beats can be automated with the second dial, which uses the <a href="http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf" class="linkColorB">euclidean beats</a> algorithm. Beats can also be placed manually with variable velocity by clicking on the steps of the sequencer. The sequencer plays samples from <a href="https://vimeo.com/110633932" class="linkColorC">Görkem Şen\'s</a> Yaybahar. </p> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');

riot.tag2('banner', '<div class="{opts.styles.bannerContainer}"> <div class="{opts.styles.centerContainer}"> <div class="{opts.styles.leftPanel}"> <div class="{opts.styles.titleContainer}"> <h1>FOREVER BEATS</h1> <p>Melodic step sequencer</p> </div> </div> <div class="{opts.styles.rightPanel}"> <div class="{opts.styles.logoAlignmentContainer}"> <div class="{opts.styles.appImageContainer}"> <img src="img/app.png"> </div> <object type="image/svg+xml" data="svg/Audiobus-Badge-Input.svg"></object> </div> </div> </div> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
riot.tag2('buybuybuy', '<div class="{opts.styles.buybuybuyContainer}"> <div class="{opts.styles.buybuybuyCenterContainer}"> <h2>Download for iPad and iPad pro</h2> <img src="img/app2up.png"> <div class="{opts.styles.buybuybuyCenterSVG}"> </div> </div> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
riot.tag2('credits', '<div class="{opts.styles.creditsContainer}"> <div class="{opts.styles.creditsCenterContainer}"> <h2 class="{opts.styles.creditsTitle}">Credits</h2> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Product, Code, Process</h3> <h2 class="{opts.styles.name}">John Sebastian Hussey</h2> <h4 class="{opts.styles.link}"><a href=""></a></h4> </div> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Sound Design</h3> <h2 class="{opts.styles.name}">Mei-Fang Liau</h2> <h4 class="{opts.styles.link}"><a href="http://www.mellisonic.com/">http://www.mellisonic.com/</a></h4> </div> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Design</h3> <h2 class="{opts.styles.name}">Petr Mazoch</h2> <h4 class="{opts.styles.link}"><a href="http://dresing.org/">http://dresing.org/</a></h4> </div> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Video</h3> <h2 class="{opts.styles.name}">Sofia Crespo</h2> <h4 class="{opts.styles.link}"><a href=""></a></h4> </div> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Typeface</h3> <h2 class="{opts.styles.name}">Motif (Jan Novák)</h2> <h4 class="{opts.styles.link}"><a href="http://www.jannovak.net/">http://www.jannovak.net/</a></h4> </div> <div class="{opts.styles.credit}"> <h3 class="{opts.styles.title}">Das Ausliehen</h3> <h2 class="{opts.styles.name}">Lars Erberle</h2> <h4 class="{opts.styles.link}"></h4> </div> </div> </div> <div class="{opts.styles.copyrightContainer}"> <h4>© John Sebastian Hussey 2017. All Rights Reserved.</h4> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
riot.tag2('info', '<div class="{opts.styles.infoContainerCenter}"> <div class="{opts.styles.infoContainer}"> <div class="{opts.styles.leftLogoPanel}"> <img src="img/bigLogo.png"> </div> <div class="{opts.styles.rightInfoLogo}"> <p> Forever Beats is a melodic step sequencer with synthesised instruments exclusively for iPad. Features include: synthesised bass, ambient and percussive elements, midi control out for external instruments, algorithmic features to jam with beats, audiobus support and polymetric measures. </p> </div> <div class="{opts.styles.featureSetContainer}"> <div class="{opts.styles.featureSet}"> <div class="{opts.styles.feature}"> <div class="{opts.styles.circle}"> <div class="{opts.styles.sound}"></div> </div> <p>SYNTHS</p> </div> <div class="{opts.styles.feature}"> <div class="{opts.styles.circle}"> <div class="{opts.styles.midi}"></div> </div> <p>MIDI</p> </div> <div class="{opts.styles.feature}"> <div class="{opts.styles.circle}"> <div class="{opts.styles.algorithm}"></div> </div> <p>ALGORITHMS</p> </div> </div> </div> </div> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
riot.tag2('appmenu', '<div class="{opts.styles.menuContainer}"> <div class="{opts.styles.menuIcon} js-menu"></div> <div class="{opts.styles.closeMenu} js-close-menu">❌</div> <div class="{opts.styles.menuItemsContainer}"> <ul class="{opts.styles.menuItems}"> <li><a href="/">HOME</a></li> <li><a href="#about">ABOUT</a></li> <li><a href="#video">VIDEO</a></li> <li><a href="#soundcloud">SOUNDCLOUD</a></li> <li><a href="#credits">CREDITS</a></li> </ul> </div> </div> <div class="{opts.styles.mobileMenuContainer} js-mobile-menu"> <div class="{opts.styles.mobileMenuItemsContainer}"> <ul class="{opts.styles.mobileMenuItems}"> <li><a href="/">HOME</a></li> <li><a href="#about">ABOUT</a></li> <li><a href="#video">VIDEO</a></li> <li><a href="#soundcloud">SOUNDCLOUD</a></li> <li><a href="#credits">CREDITS</a></li> </ul> </div> </div>', '', '', function(opts) {

	this.on('mount', function() {

		if (!window.IS_BIG_SCREEN) {

			function toggleMenu() {
				$('.js-mobile-menu').toggle()
				$('.js-menu').toggle()
				$('.js-close-menu').toggle()
			}

			$('.js-close-menu').click(function(e) {
				toggleMenu();
			});

			$('.js-menu').click(function(e) {
				toggleMenu();
			});

			$('.js-mobile-menu').click(function(e) {
				toggleMenu();
			});

		}
		else {
			$('appMenu li').hover(function(e) {
				$(e.currentTarget).toggleClass(opts.styles.hoverClass)
			});
		}
	});
}, '{ }');
riot.tag2('soundcloud', '<div class="{opts.styles.soundcloudContainer}"> <div class="{opts.styles.soundcloudCenterContainer}"> <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/282863108&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
riot.tag2('videos', '<div class="{opts.styles.videosContainer}"> <div class="{opts.styles.videosCenterContainer}"> <h2>VIDEO</h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/FtAh6d5w2mA" frameborder="0" allowfullscreen></iframe> <h2>TUTORIAL</h2> <iframe width="560" height="315" src="https://www.youtube.com/embed/nmfjJYFC0T8" frameborder="0" allowfullscreen></iframe> </div> </div>', '', '', function(opts) {

	this.on('mount', function() {

	});
}, '{ }');
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _global = __webpack_require__(1);

	var _global2 = _interopRequireDefault(_global);

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	var _banner = __webpack_require__(3);

	var _banner2 = _interopRequireDefault(_banner);

	var _info = __webpack_require__(4);

	var _info2 = _interopRequireDefault(_info);

	var _videos = __webpack_require__(5);

	var _videos2 = _interopRequireDefault(_videos);

	var _soundcloud = __webpack_require__(6);

	var _soundcloud2 = _interopRequireDefault(_soundcloud);

	var _credits = __webpack_require__(7);

	var _credits2 = _interopRequireDefault(_credits);

	var _buybuybuy = __webpack_require__(8);

	var _buybuybuy2 = _interopRequireDefault(_buybuybuy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window["IS_BIG_SCREEN"] = window.innerWidth >= 900;

	$(window).on('load', function () {

		$.extend(_menu2.default, _global2.default);
		riot.mount('appMenu', {
			styles: _menu2.default
		});

		$.extend(_banner2.default, _global2.default);
		riot.mount('banner', {
			styles: _banner2.default
		});

		$.extend(_info2.default, _global2.default);
		riot.mount('info', {
			styles: _info2.default
		});

		$.extend(_videos2.default, _global2.default);
		riot.mount('videos', {
			styles: _videos2.default
		});

		$.extend(_soundcloud2.default, _global2.default);
		riot.mount('soundcloud', {
			styles: _soundcloud2.default
		});

		$.extend(_buybuybuy2.default, _global2.default);
		riot.mount('buybuybuy', {
			styles: _buybuybuy2.default
		});

		$.extend(_credits2.default, _global2.default);
		riot.mount('credits', {
			styles: _credits2.default
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"menuContainer":"menu__menuContainer___gXJEP","menuIcon":"menu__menuIcon___3q1yW","closeMenu":"menu__closeMenu___1CsCI","menuItemsContainer":"menu__menuItemsContainer___2nzDH","hoverClass":"menu__hoverClass___1dwon","menuItems":"menu__menuItems___2nvqN","mobileMenuContainer":"menu__mobileMenuContainer___2W5WW","mobileMenuItemsContainer":"menu__mobileMenuItemsContainer___1jskf","mobileMenuItems":"menu__mobileMenuItems___3ktES"};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"bannerContainer":"banner__bannerContainer___2WPtJ","centerContainer":"banner__centerContainer___eO6vQ","leftPanel":"banner__leftPanel___C15wC","rightPanel":"banner__rightPanel___IWHet","titleContainer":"banner__titleContainer___nYo03","logoAlignmentContainer":"banner__logoAlignmentContainer___2GTbI","appImageContainer":"banner__appImageContainer___2UNqb"};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"infoContainerCenter":"info__infoContainerCenter___yVzt3","infoContainer":"info__infoContainer___1WF5N","leftLogoPanel":"info__leftLogoPanel___1uLQ0","rightInfoLogo":"info__rightInfoLogo___242I5","featureSetContainer":"info__featureSetContainer___FIQWJ","featureSet":"info__featureSet___3dvM0","feature":"info__feature___3S-I8","circle":"info__circle___3rB4O","sound":"info__sound___3au0v","midi":"info__midi___1Xpdh","algorithm":"info__algorithm___Fu55l"};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"videosContainer":"videos__videosContainer___FM_B5","videosCenterContainer":"videos__videosCenterContainer___11GSX"};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"soundcloudContainer":"soundcloud__soundcloudContainer___2V2tw","soundcloudCenterContainer":"soundcloud__soundcloudCenterContainer___3y01K"};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"creditsContainer":"credits__creditsContainer___2J1oA","creditsCenterContainer":"credits__creditsCenterContainer___1Rbic","creditsTitle":"credits__creditsTitle___2oVDd","credit":"credits__credit___2gLmV","title":"credits__title___1wdua","name":"credits__name___F4_FM","link":"credits__link___1cayw","copyrightContainer":"credits__copyrightContainer___-amCg"};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buybuybuyContainer":"buybuybuy__buybuybuyContainer___21V5k","buybuybuyCenterContainer":"buybuybuy__buybuybuyCenterContainer___yDJjC","buybuybuyCenterSVG":"buybuybuy__buybuybuyCenterSVG___gYzbn"};

/***/ }
/******/ ])
});
;