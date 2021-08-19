/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  document.querySelector('.s-header-user a').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.closest('.s-header-user').classList.contains('active')) {
      e.target.closest('.s-header-user').classList.remove('active');
      document.querySelector('.s-header-user-nav').classList.remove('active');
    } else {
      e.target.closest('.s-header-user').classList.add('active');
      document.querySelector('.s-header-user-nav').classList.add('active');
      document.querySelector('.s-header-toggle').classList.remove('active');
      document.querySelector('.s-header-list').classList.remove('active');
    }
  });
  var specifiedElement = document.getElementById('usernav'); //I'm using "click" but it works with any event

  document.addEventListener('click', function (event) {
    var isClickInside = specifiedElement.contains(event.target);

    if (!isClickInside) {
      document.querySelector('.s-header-user').classList.remove('active');
      document.querySelector('.s-header-user-nav').classList.remove('active');
    } else {}
  });
  var edits = document.querySelectorAll('.js-edit');

  if (typeof edits != 'undefined' && edits != null) {
    for (var i = 0; i < edits.length; i++) {
      edits[i].addEventListener('click', function (e) {
        e.preventDefault();
        e.target.closest('.text').classList.add('active');
        e.target.closest('.text').nextElementSibling.classList.remove('active');
      });
    }
  }

  var checked = document.querySelectorAll('.js-check');

  if (typeof checked != 'undefined' && checked != null) {
    for (var _i = 0; _i < checked.length; _i++) {
      checked[_i].addEventListener('click', function (e) {
        e.preventDefault();
        e.target.closest('.input').classList.add('active');
        e.target.closest('.input').previousElementSibling.classList.remove('active');
      });
    }
  }

  var closed = document.querySelectorAll('.js-close');

  if (typeof closed != 'undefined' && closed != null) {
    for (var _i2 = 0; _i2 < closed.length; _i2++) {
      closed[_i2].addEventListener('click', function (e) {
        e.preventDefault();
        e.target.closest('.input').classList.add('active');
        e.target.closest('.input').previousElementSibling.classList.remove('active');
      });
    }
  }

  document.querySelector('.s-header-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.s-header-toggle').classList.toggle('active');
    document.querySelector('.s-header-list').classList.toggle('active');
    document.querySelector('.s-header-user').classList.remove('active');
    document.querySelector('.s-header-user-nav').classList.remove('active');
  });
  var fileInput = document.querySelector(".input-file"),
      button = document.querySelector(".input-file-trigger"),
      the_return = document.querySelector(".file-return");

  if (typeof fileInput != 'undefined' && fileInput != null) {
    button.addEventListener("keydown", function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
      }
    });
    button.addEventListener("click", function (event) {
      fileInput.focus();
      return false;
    });
    fileInput.addEventListener("change", function (event) {
      preview_2(event.target);
    });
  }
});

function preview_2(obj) {
  if (FileReader) {
    var reader = new FileReader();
    reader.readAsDataURL(obj.files[0]);

    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;

      image.onload = function () {
        document.getElementById('js-img').src = image.src;
      };
    };
  } else {// Not supported
  }
}

$(document).ready(function () {
  $(".open-popup").magnificPopup({
    type: 'inline',
    midClick: true,
    removalDelay: 500,
    //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    }
  });
  $('.js-btn-more').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.s-about-info li.hidden').hide();
      $(this).text("Показать все поля");
    } else {
      $(this).addClass('active');
      $(this).text("Скрыть все поля");

      if ($(window).width() < 768) {
        $('.s-about-info li.hidden').attr('style', 'display: block !important');
      } else {
        $('.s-about-info li.hidden').attr('style', 'display: flex !important');
      }
    }

    return false;
  });
  $(".js-select").select2({
    placeholder: "Выберите опцию",
    minimumResultsForSearch: Infinity
  });
});
$(document).on('click', '.mfp-close', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmix"] = self["webpackChunkmix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/app"], () => (__webpack_require__("./src/assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/app"], () => (__webpack_require__("./src/assets/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;