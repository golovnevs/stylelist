/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sample-app/browser/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sample-app/browser/index.js":
/*!*************************************!*\
  !*** ./sample-app/browser/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isEmpty = __webpack_require__(/*! ../shared/is-empty */ \"./sample-app/shared/is-empty.js\")\nconst outfits = __webpack_require__(/*! ../shared/outfits */ \"./sample-app/shared/outfits.json\")\n\nconst resultsBlock = document.getElementById('results')\n\nconst getResults = () => {\n  const response = fetch('http://localhost:3000/get-results')\n  response.then(res => {\n    const responseBodyAsJson = res.json()\n    responseBodyAsJson.then(data => {\n      console.log(data)\n      resultsBlock.innerHTML = JSON.stringify(data, null, 2)\n    })\n  })\n  response.catch(error => {\n    resultsBlock.innerHTML = error\n  })\n}\ngetResults()\n\nconst myForm = document.getElementById('myForm')\nmyForm.addEventListener('submit', (e) => {\n  document.getElementById('errorMessage').innerText = ''\n  e.preventDefault()\n\n  const text = e.target.myText.value\n\n  if (isEmpty(text)) {\n    document.getElementById('errorMessage').innerText = 'Произошла ошибка, отловили на клиенте'\n    return\n  }\n\n  const response = fetch('http://localhost:3000/save-results', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({text: text})\n  })\n  response.then((response) => {\n    if (response.status !== 201) {\n      document.getElementById('errorMessage').innerText = 'Произошла ошибка, отловили на сервере'\n      return\n    }\n    getResults()\n  })\n  e.target.myText.value = ''\n})\n\n\n//# sourceURL=webpack:///./sample-app/browser/index.js?");

/***/ }),

/***/ "./sample-app/shared/is-empty.js":
/*!***************************************!*\
  !*** ./sample-app/shared/is-empty.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (value) => {\n  return value === ''\n}\n\n\n//# sourceURL=webpack:///./sample-app/shared/is-empty.js?");

/***/ }),

/***/ "./sample-app/shared/outfits.json":
/*!****************************************!*\
  !*** ./sample-app/shared/outfits.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"outfitId\\\":1,\\\"imgSrc\\\":\\\"images/1.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[0,1,2,3,4,5],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":2,\\\"imgSrc\\\":\\\"images/2.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[1,2,3],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":3,\\\"imgSrc\\\":\\\"images/3.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[1,2,4,5],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":4,\\\"imgSrc\\\":\\\"images/4.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[2],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":5,\\\"imgSrc\\\":\\\"images/5.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[1,2,3],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":6,\\\"imgSrc\\\":\\\"images/6.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[2],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]},{\\\"outfitId\\\":7,\\\"imgSrc\\\":\\\"images/5.jpg\\\",\\\"rank\\\":0,\\\"rejectedCounter\\\":0,\\\"items\\\":[1,2,3],\\\"tags\\\":[\\\"sport\\\",\\\" classic\\\"]}]\");\n\n//# sourceURL=webpack:///./sample-app/shared/outfits.json?");

/***/ })

/******/ });