webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var consoleName = __webpack_require__(4);
	window.document.body.innerHTML = consoleName.consolePageName('资讯');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	console.info('来自工具库');
	module.exports = {
	    consolePageName: function (name) {
	        return "这是" + name + "页面";
	    }
	};

/***/ }
]);