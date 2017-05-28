(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Anix"] = factory(require("react"), require("react-dom"));
	else
		root["Anix"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(5));
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CssXClass = (function () {
    function CssXClass() {
        this.pfObj = {};
        this.div = document.createElement("div");
    }
    //is support css transition
    CssXClass.prototype.hasTransition = function () {
        var b = document.body || document.documentElement;
        var s = b.style;
        var p = 'transition';
        if (typeof s[p] == 'string') {
            return true;
        }
        var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p] == 'string') {
                return true;
            }
        }
        return false;
    };
    //is support css 3d
    CssXClass.prototype.has3d = function () {
        var has3d;
        var transforms = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform'
        };
        var ele = document.createElement('p');
        document.body.insertBefore(ele, null);
        for (var t in transforms) {
            if (ele.style[t] !== undefined) {
                ele.style[t] = "translate3d(1px, 1px, 1px)";
                has3d = window.getComputedStyle(ele).getPropertyValue(transforms[t]);
            }
        }
        document.body.removeChild(ele);
        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    };
    //get transtion end
    CssXClass.prototype.getTranstionEndEvent = function () {
        var transitionend = '';
        var prefix = this.getPrefix(1);
        switch (prefix) {
            case 'Webkit':
                transitionend = 'webkitTransitionEnd';
                break;
            case 'ms':
                transitionend = 'MSTransitionEnd';
                break;
            case 'O':
                transitionend = 'oTransitionEnd';
                break;
            case 'Moz':
                transitionend = 'transitionend';
                break;
            default:
                transitionend = 'transitionend';
        }
        return transitionend;
    };
    //get prefix
    CssXClass.prototype.getPrefix = function (mode) {
        if (mode === void 0) { mode = 1; }
        if (this.pfObj[mode])
            return this.pfObj[mode];
        var PFS1 = ["Moz", 'Webkit', 'ms', 'O', 'o', ''];
        var PFS2 = ["-moz-", '-webkit-', '-ms-', '-o-', '-o-', ''];
        var prefixs = mode == 1 ? PFS1 : PFS2;
        for (var i = 0, length_1 = prefixs.length; i < length_1; i++) {
            if ((PFS1[i] + "Transition") in this.div.style) {
                this.pfObj[mode] = prefixs[i];
                break;
            }
        }
        return this.pfObj[mode];
    };
    CssXClass.prototype.css = function (ele, props, type) {
        for (var key in props) {
            if (type == 3)
                this.css3(ele, key, props[key]);
            else
                this.css2(ele, key, props[key]);
        }
    };
    CssXClass.prototype.css2 = function (ele, style, value) {
        if (style.indexOf('-') > -1)
            style = this.convertStyleMode(style, "js");
        ele.style[style] = value;
    };
    CssXClass.prototype.css3 = function (ele, style, value) {
        style = style.charAt(0).toUpperCase() + style.substr(1);
        ele.style['Webkit' + style] = value;
        ele.style['Moz' + style] = value;
        ele.style['ms' + style] = value;
        ele.style['O' + style] = value;
        ele.style['o' + style] = value;
        ele.style['' + style] = value;
    };
    CssXClass.prototype.setOriginCenter = function (ele) {
        this.css3(ele, 'transformOrigin', "center center");
    };
    /**
    * backgroundColor <-> background-color
    */
    CssXClass.prototype.convertStyleMode = function (style, mode) {
        if (mode == "js") {
            return style.replace(/\-[a-zA-Z0-9]/g, function (c) {
                if (c == '-m')
                    return c.substr(1, 1).toLowerCase();
                else
                    return c.substr(1, 1).toUpperCase();
            });
        }
        else {
            return style.replace(/[A-Z]/g, function (c, i) {
                if (i == 0)
                    return c.toLowerCase();
                else
                    return '-' + c.toLowerCase();
            });
        }
    };
    CssXClass.prototype.addClass = function (ele, newClass) {
        var oldClass = ele.className;
        var blank = (oldClass != '') ? ' ' : '';
        if (!this.hasClass(ele, newClass))
            ele.className = oldClass + blank + newClass;
    };
    CssXClass.prototype.removeClass = function (ele, className) {
        if (this.hasClass(ele, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            ele.className = ele.className.replace(reg, '');
        }
    };
    CssXClass.prototype.hasClass = function (ele, className) {
        return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };
    CssXClass.prototype.addEventListener = function (ele, event, handler) {
        if (ele['addEventListener'])
            ele['addEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['attachEvent']("on" + event.toLowerCase(), handler);
        else
            ele["on" + event] = handler;
    };
    CssXClass.prototype.removeEventListener = function (ele, event, handler) {
        if (ele['removeEventListener'])
            ele['removeEventListener'](event, handler, false);
        else if (ele['attachEvent'])
            ele['detachEvent']("on" + event.toLowerCase(), handler);
        else
            delete ele["on" + event];
    };
    return CssXClass;
}());
exports.CssXClass = CssXClass;
//export instance
var CssX = new CssXClass();
exports.CssX = CssX;
//# sourceMappingURL=cssx.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getHTMLElement = function (ele) {
    if (!ele)
        throw "AniX Error :: element is null!";
    if (ele.nodeName)
        return ele;
    else if (ele.jquery)
        return ele[0];
    else
        return ele.nativeElement;
};
exports.getHTMLElement = getHTMLElement;
//# sourceMappingURL=gethtmlelement.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Anix = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _anix = __webpack_require__(4);

var _config = __webpack_require__(13);

var _utils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * React - AniX
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <Anix 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 anis={[
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 { left:'20px', time:.5, delay:3, play:this.state.play },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 { color:'#ffcccc', time:.5, onComplete:this.aniComplete.bind(this), appear:true },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 { color:'#ffcccc', time:.5, ease:'easeInOutBack', disAppear:true },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 { color:'#ffcccc', time:.5, play:'disAppear' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 { time:.5, appear:true ,from:{ width:'20px' }, to: { width:'220px', delay:.1 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ani={{ left:'20px', time:.5, play:this.state.play }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 appear={{ left:'20px', time:.5 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ...
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </Anix>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @tiptext
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Anix = exports.Anix = function (_Component) {
  _inherits(Anix, _Component);

  function Anix(props) {
    _classCallCheck(this, Anix);

    var _this = _possibleConstructorReturn(this, (Anix.__proto__ || Object.getPrototypeOf(Anix)).call(this, props));

    _this.state = {
      children: _this.getChildren(_this.props.children)
    };

    _this.oldCache = {};

    _this.appearChildren = [];
    _this.disAppearChildren = [];
    _this.nextProps = null;
    return _this;
  }

  _createClass(Anix, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.appear = this.getAppear();
      this.disAppear = this.getDisAppear();
      this.normal = this.getNormal();
      this.normal.map(function (ani) {
        return (0, _utils.prefixAniObj)(ani);
      });

      this.oldCache.play = this.props.play;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.init) {
        var children = [];
        this.state.children.map(function (child, index) {
          children.push(index);
        });

        this.appear && this.anixChildren(this.appear, children, 'appear');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.children !== this.props.children) {
        this.aniPlayAppearAndDisAppear();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var allChildren = this.mergeChildren(this.props.children, nextProps.children);
      this.setState({ children: allChildren });
      this.compareChildren(nextProps, allChildren);
      this.aniPlayNormal(nextProps, allChildren);

      this.nextProps = nextProps;
    }
  }, {
    key: 'mergeChildren',
    value: function mergeChildren(prevChildren, nextChildren) {
      if (this.disAppear) {
        var children = [];
        prevChildren = this.getChildren(prevChildren);
        nextChildren = this.getChildren(nextChildren);
        (0, _utils.cloneArray)(children, prevChildren);

        nextChildren.map(function (child) {
          if (!prevChildren.find(function (nChild) {
            return nChild.key === child.key;
          })) {
            children.push(child);
          }
        });

        return children;
      } else {
        return this.getChildren(nextChildren);
      }
    }
  }, {
    key: 'compareChildren',
    value: function compareChildren(nextProps, allChildren) {
      var _this2 = this;

      var nextChildren = void 0;
      var prevChildren = void 0;

      this.appearChildren.length = 0;
      this.disAppearChildren.length = 0;

      if (this.appear) {
        nextChildren = allChildren;
        prevChildren = this.getChildren(this.props.children);

        nextChildren.map(function (cItem, index) {
          if (!prevChildren.find(function (pItem) {
            return pItem.key === cItem.key;
          })) {
            _this2.appearChildren.push(index);
          }
        });
      }

      if (this.disAppear) {
        nextChildren = this.getChildren(nextProps.children);
        prevChildren = allChildren;

        prevChildren.map(function (pItem, index) {
          if (!nextChildren.find(function (cItem) {
            return cItem.key === pItem.key;
          })) {
            _this2.disAppearChildren.push(index);
          }
        });
      }
    }
  }, {
    key: 'aniPlayAppearAndDisAppear',
    value: function aniPlayAppearAndDisAppear() {
      this.appear && this.anixChildren(this.appear, this.appearChildren, 'appear');
      this.disAppear && this.anixChildren(this.disAppear, this.disAppearChildren, 'disAppear');
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    //
    //  animation
    //
    ////////////////////////////////////////////////////////////////////////////////////////

  }, {
    key: 'aniPlayNormal',
    value: function aniPlayNormal(nextProps, allChildren) {
      var _this3 = this;

      if (nextProps.play) {
        var allChildrenRefs = [];
        allChildren.map(function (child, index) {
          return allChildrenRefs.push(index);
        });

        this.normal.map(function (ani, i) {
          if (ani.name === 'play') {
            _this3.anixChildren(ani, allChildrenRefs);
          }
        });
      }

      this.oldCache.play = nextProps.play;
    }
  }, {
    key: 'anixChildren',
    value: function anixChildren(ani, refs, type) {
      var _this4 = this;

      refs.length && refs.map(function (ref, index) {
        if (type === 'disAppear' && index >= refs.length - 1) _this4.anix(_this4.refs[ref], ani, 'complete');else _this4.anix(_this4.refs[ref], ani);
      });
    }

    /** anix */

  }, {
    key: 'anix',
    value: function anix(element, props, complete) {
      var _this5 = this;

      var node = _reactDom2.default.findDOMNode(element);
      var time = props.time || 0.5;

      if (props.from && props.to) {
        node && _anix.AniX.fromTo(node, time, props.from, this.getPureProps(props.to, complete));
      } else {
        node && setTimeout(function () {
          return _anix.AniX.to(node, time, _this5.getPureProps(props, complete));
        }, 1);
      }
    }
  }, {
    key: 'getPureProps',
    value: function getPureProps(props, complete) {
      var _this6 = this;

      var newProps = {};

      for (var key in props) {
        if (_config.KEY_WORDS.indexOf(key) < 0) {
          if (key === 'ease') {
            newProps['ease'] = _anix.AniX.ease[props[key]];
          } else {
            newProps[key] = props[key];
          }
        }
      }

      if (complete) {
        var onComplete = newProps['onComplete'];
        newProps['onComplete'] = function () {
          onComplete && onComplete.call(null);
          setTimeout(function () {
            _this6.setState({ children: _this6.getChildren(_this6.nextProps.children) });
          }, 10);
        };
      }

      return newProps;
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    //
    //  get ani props
    //
    ////////////////////////////////////////////////////////////////////////////////////////
    /** get appear conf */

  }, {
    key: 'getAppear',
    value: function getAppear() {
      var appear = void 0;

      if (this.props.anis) {
        for (var i = 0; i < this.props.anis.length; i++) {
          var ani = this.props.anis[i];
          if (ani.appear || ani.play === 'appear') {
            appear = ani;
          }
        }
      }

      if (this.props.ani && (this.props.ani.appear || this.props.ani.play === 'appear')) {
        appear = this.props.ani;
      }

      if (this.props.appear) {
        appear = this.props.appear;
      }

      return appear;
    }

    /** get normal conf */

  }, {
    key: 'getNormal',
    value: function getNormal() {
      var normal = [];

      if (this.props.anis) {
        for (var i = 0; i < this.props.anis.length; i++) {
          var ani = this.props.anis[i];

          if (!(ani.appear || ani.play === 'appear') && !ani.disAppear || ani.play === 'disAppear') {
            normal.push(ani);
          }
        }
      }

      if (this.props.ani && !(this.props.ani.appear || this.props.ani.play === 'appear') && !(this.props.ani.disAppear || this.props.ani.play === 'disAppear')) {
        normal.push(this.props.ani);
      }

      return normal;
    }

    /** get disAppear conf */

  }, {
    key: 'getDisAppear',
    value: function getDisAppear() {
      var disAppear = void 0;

      if (this.props.anis) {
        for (var i = 0; i < this.props.anis.length; i++) {
          var ani = this.props.anis[i];
          if (ani.disAppear || ani.play === 'disAppear') {
            disAppear = ani;
          }
        }
      }

      if (this.props.ani && (this.props.ani.disAppear || this.props.ani.play === 'disAppear')) {
        disAppear = this.props.ani;
      }

      if (this.props.disAppear) {
        disAppear = this.props.disAppear;
      }

      return disAppear;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.state.children;
      var childrenToRender = [];
      children.map(function (child, index) {
        child && childrenToRender.push(_react2.default.cloneElement(child, { ref: index }));
      });

      var props = Object.assign({}, this.props);
      delete props.children;
      delete props.anis;
      delete props.ani;
      delete props.appear;
      delete props.disAppear;
      delete props.play;
      delete props.init;
      delete props.component;

      return _react2.default.createElement(this.props.component, props, childrenToRender);
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      children = children || this.props.children;
      return Array.isArray(children) ? children : [children];
    }
  }]);

  return Anix;
}(_react.Component);

Anix.propTypes = {
  component: _propTypes2.default.any,
  children: _propTypes2.default.any,
  anis: _propTypes2.default.array,
  ani: _propTypes2.default.object,
  appear: _propTypes2.default.object,
  disAppear: _propTypes2.default.object,
  play: _propTypes2.default.any,
  init: _propTypes2.default.any
};

Anix.defaultProps = {
  component: 'span'
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dic_1 = __webpack_require__(10);
var ease_1 = __webpack_require__(11);
var cssx_1 = __webpack_require__(5);
var gethtmlelement_1 = __webpack_require__(6);
var gettransform_1 = __webpack_require__(12);
/**
* AniX
*
* use
* --CODE: AniX.to(a,.3,{height:"100px",ease: AniX['easeOutBack']});
* --CODE: AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
*
* property
* --CODE: AniX.useTranstionEvent=false;  Whether to use the native transtionend event - there are compatibility issues with the default settimeout
* --CODE: AniX.compatible=true;  Compatible with old browsers, old browsers do not have animation
* --CODE: AniX.debug=true;  debug mode
*
* @langversion TypeScript 2.0
* @tiptext
*
*/
var AniXClass = (function () {
    function AniXClass() {
        this.keyword = ['nokill', 'ease', 'delay', 'all', 'class', 'onStart', 'onUpdate', 'onComplete'];
        this.anis = {};
        this.useTranstionEvent = false;
        this.debug = false;
        this.compatible = true;
        this.ease = ease_1.EASE;
    }
    Object.defineProperty(AniXClass.prototype, "support", {
        get: function () {
            return cssx_1.CssX.hasTransition();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * to
    * AniX.to(a,.3,{height:"100px"});
    */
    AniXClass.prototype.to = function (ele, time, args) {
        var transition = '';
        var styles = this.getPureStyleKeys(args);
        for (var i = 0; i < styles.length; i++) {
            if (i > 0)
                transition += ', ';
            var style = styles[i];
            if (/transform/ig.test(style)) {
                if (!/transform/ig.test(transition)) {
                    var prefix = cssx_1.CssX.getPrefix(2);
                    transition += prefix + 'transform';
                }
            }
            else {
                transition += cssx_1.CssX.convertStyleMode(styles[i], "css");
            }
            //transition += CssX.convertStyleMode(styles[i], "css");
            transition += " " + time + "s";
            if (args.ease)
                transition += " " + args.ease;
            if (args.delay)
                transition += " " + args.delay + "s";
        }
        if (this.compatible && !this.support)
            return this.noAniStart(ele, transition, time, args);
        else
            return this.start(ele, transition, time, args);
    };
    /**
    * fromTo
    * AniX.fromTo(a,.3,{height:"200px"},{height:"100px"});
    */
    AniXClass.prototype.fromTo = function (ele, time, fromArgs, toArgs) {
        var _this = this;
        this.kill(ele);
        this.setStyle(ele, fromArgs);
        setTimeout(function () { _this.to(ele, time, toArgs); }, 22.2);
    };
    /**
    * kill
    * AniX.kill(a);
    */
    AniXClass.prototype.kill = function (ele, complete) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        cssx_1.CssX.css3(ele, 'transition', 'none !important');
        cssx_1.CssX.css3(ele, 'transition', 'none');
        dic_1.Dic.get(ele).id && clearTimeout(dic_1.Dic.get(ele).id);
        dic_1.Dic.get(ele).event && cssx_1.CssX.removeEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
    };
    AniXClass.prototype.getTransform = function (param) {
        return gettransform_1.getTransform(param);
    };
    AniXClass.prototype.get = function (param) {
        return gettransform_1.getTransform(param);
    };
    AniXClass.prototype.start = function (ele, transition, time, args) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = dic_1.Dic.setId(ele);
        (!args.nokill) && this.kill(ele);
        //set ani
        cssx_1.CssX.css3(ele, 'transition', transition);
        this.setStyle(ele, args);
        this.addCallback(ele, time, args);
        this.debug && console.trace(ele, ele.__nxid, transition);
        return id;
    };
    /**
    * no animation
    */
    AniXClass.prototype.noAniStart = function (ele, transition, time, args) {
        var _this = this;
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = dic_1.Dic.setId(ele);
        (!args.nokill) && this.kill(ele);
        this.useTranstionEvent = false;
        setTimeout(function () {
            args.delay = 0;
            _this.setStyle(ele, args);
            _this.addCallback(ele, 0, args);
        }, 50);
        this.debug && console.trace(ele, ele.__nxid, transition);
        return id;
    };
    /**
    * Set the style set style or add class
    */
    AniXClass.prototype.setStyle = function (ele, args) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        //add style
        cssx_1.CssX.css(ele, this.getPureStyle(args));
        //add class
        args.className && cssx_1.CssX.addClass(ele, args.className);
    };
    /**
    * add callbacks
    */
    AniXClass.prototype.addCallback = function (ele, time, args) {
        var delay = args.delay || 0;
        var allTime = (time + delay) * 1000;
        if (args.onStart)
            setTimeout(args.onStart, delay * 1000);
        if (args.onComplete) {
            if (this.useTranstionEvent) {
                dic_1.Dic.get(ele).event = cssx_1.CssX.getTranstionEndEvent();
                dic_1.Dic.get(ele).fun = args.onComplete;
                dic_1.Dic.get(ele).handler = (function (ele) {
                    dic_1.Dic.get(ele).fun();
                    cssx_1.CssX.removeEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
                }).bind(null, ele);
                cssx_1.CssX.addEventListener(ele, dic_1.Dic.get(ele).event, dic_1.Dic.get(ele).handler);
            }
            else {
                dic_1.Dic.get(ele).id = setTimeout(args.onComplete, allTime);
            }
        }
    };
    /**
    * get style key name
    */
    AniXClass.prototype.getPureStyleKeys = function (args) {
        if (args.all || args.css || args.className)
            return ['all'];
        var keys = [];
        for (var key in args) {
            if (this.keyword.indexOf(key) < 0)
                keys.push(key);
        }
        return keys;
    };
    /**
    * get pure style
    */
    AniXClass.prototype.getPureStyle = function (args) {
        var obj = {};
        for (var key in args) {
            if (this.keyword.indexOf(key) < 0)
                obj[key] = args[key];
        }
        return obj;
    };
    return AniXClass;
}());
exports.AniXClass = AniXClass;
//export instance
var AniX = new AniXClass();
exports.AniX = AniX;
//# sourceMappingURL=anix.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gethtmlelement_1 = __webpack_require__(6);
var Dic = (function () {
    function Dic() {
    }
    Dic.setId = function (ele) {
        var id = this.id();
        ele = gethtmlelement_1.getHTMLElement(ele);
        ele.__nxid = ele.__nxid || id;
        this.map[id] = this.map[id] || {};
        return id;
    };
    Dic.get = function (ele) {
        ele = gethtmlelement_1.getHTMLElement(ele);
        var id = ele.__nxid;
        if ((!id || !this.map[id]))
            this.setId(ele);
        return this.map[ele.__nxid];
    };
    Dic.delete = function (ele) {
        if (typeof ele == "string") {
            delete this.map[ele];
        }
        else {
            var nele = gethtmlelement_1.getHTMLElement(ele);
            delete this.map[nele.__nxid];
            delete nele.__nxid;
        }
    };
    Dic.id = function () {
        return 'xxxx-xxx-xxxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Dic;
}());
Dic.map = {};
exports.Dic = Dic;
;
//# sourceMappingURL=dic.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EASE = {
    'linear': 'linear',
    'easeBasic': 'ease',
    'easeIn': 'ease-in',
    'easeOut': 'ease-out',
    'easeInOut': 'ease-in-out',
    'easeOutCubic': 'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc': 'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc': 'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc': 'cubic-bezier(.785,.135,.15,.86)',
    'easeInQuad': 'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad': 'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad': 'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart': 'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart': 'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint': 'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint': 'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine': 'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine': 'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine': 'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack': 'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack': 'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack': 'cubic-bezier(.68,-.55,.265,1.55)'
};
exports.EASE = EASE;
//# sourceMappingURL=ease.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getTransform(param) {
    var transform = "";
    /** translate */
    if (param.z === undefined) {
        if (param.x !== undefined || param.y !== undefined) {
            var x = getPX(param, 'x');
            var y = getPX(param, 'y');
            transform += " translate(" + x + ", " + y + ")";
        }
    }
    else {
        if (param.x !== undefined)
            transform += " translateX(" + getPX(param, 'x') + ")";
        if (param.y !== undefined)
            transform += " translateY(" + getPX(param, 'y') + ")";
        if (param.z !== undefined)
            transform += " translateZ(" + getPX(param, 'z') + ")";
    }
    /** scale */
    if (param.scale !== undefined) {
        transform += " scale(" + param.scale + ", " + param.scale + ")";
    }
    else {
        if (param.scaleX !== undefined)
            transform += " scaleX(" + param.scaleX + ")";
        if (param.scaleY !== undefined)
            transform += " scaleY(" + param.scaleY + ")";
        if (param.scaleZ !== undefined)
            transform += " scaleZ(" + param.scaleZ + ")";
    }
    /** rotate */
    if (param.rotate !== undefined) {
        transform += " rotate(" + param.rotate + "deg)";
    }
    else {
        if (param.rotateX !== undefined)
            transform += " rotateX(" + param.rotateX + "deg)";
        if (param.rotateY !== undefined)
            transform += " rotateY(" + param.rotateY + "deg)";
        if (param.rotateZ !== undefined)
            transform += " rotateZ(" + param.rotateZ + "deg)";
    }
    /** skew */
    if (param.skewX !== undefined)
        transform += " skewX(" + param.skewX + "deg)";
    if (param.skewY !== undefined)
        transform += " skewY(" + param.skewY + "deg)";
    /** perspective */
    if (param.perspective !== undefined) {
        transform += " perspective(" + param.perspective + ")";
    }
    /** pre */
    if (param.pre)
        transform = param.pre + " " + transform;
    var css = {
        "transform": transform,
        "-webkit-transform": transform,
        "-ms-transform": transform,
        "-o-transform": transform,
        "-moz-transform": transform
    };
    if (param.normal) {
        for (var key in param.normal) {
            css[key] = param.normal[key];
        }
    }
    return css;
}
exports.getTransform = getTransform;
function getPX(param, key) {
    var px = typeof param[key] === "string" ? param[key] : (param[key] || 0) + 'px';
    return px;
}
//# sourceMappingURL=gettransform.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEY_WORDS = exports.KEY_WORDS = ['time', 'play', 'appear', 'disAppear'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anix = __webpack_require__(4);

Object.keys(_anix).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _anix[key];
    }
  });
});

var _react = __webpack_require__(8);

Object.keys(_react).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _react[key];
    }
  });
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prefixAniObj = prefixAniObj;
exports.cloneArray = cloneArray;
////////////////////////////////////////////////////////////////////////////////////////
//
//  Utils
//
////////////////////////////////////////////////////////////////////////////////////////

/** prefix function */
function prefixAniObj(ani) {
    if (!ani.name) ani.name = 'play';
}

function cloneArray(arr1, arr2) {
    arr1.length = 0;

    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    return arr1;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(7);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(16);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(18)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(17)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map