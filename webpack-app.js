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

	var _faq = __webpack_require__(9);

	var _faq2 = _interopRequireDefault(_faq);

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

		$.extend(_faq2.default, _global2.default);
		riot.mount('faq', {
			styles: _faq2.default
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"faqContainerCenter":"faq__faqContainerCenter___3n5Bp","faqContainer":"faq__faqContainer___3vMMU","faqTitle":"faq__faqTitle___1s7mb","question":"faq__question___2gX9j","answer":"faq__answer___2fCBo"};

/***/ }
/******/ ])
});
;