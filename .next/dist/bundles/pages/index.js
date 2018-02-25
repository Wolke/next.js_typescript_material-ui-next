module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_withRoot__ = __webpack_require__("./src/withRoot.js");
var _jsxFileName = '/Users/chienhunglin/demo/serverless_next.js_typescript_material-ui-next/pages/index.tsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react'

// export default () => (
//   <ul>
//     <li><Link href='/b' as='/a'><a>a</a></Link></li>
//     <li><Link href='/a' as='/b'><a>b</a></Link></li>
//   </ul>
// )







var styles = function styles(theme) {
    return {
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20
        }
    };
};

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

        _this.state = {
            open: false
        };
        _this.handleClose = function () {
            _this.setState({
                open: false
            });
        };
        _this.handleClick = function () {
            _this.setState({
                open: true
            });
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var classes = this.props.classes;
            var open = this.state.open;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: classes.root, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog___default.a,
                    { open: open, onClose: this.handleClose, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__["DialogTitle"],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        'Super Secret Password'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__["DialogContent"],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__["DialogContentText"],
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                }
                            },
                            '1-2-3-4-5'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_material_ui_Dialog__["DialogActions"],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                            { color: 'primary', onClick: this.handleClose, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 49
                                }
                            },
                            'OK'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a,
                    { variant: 'display1', gutterBottom: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        }
                    },
                    'Material-UI'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a,
                    { variant: 'subheading', gutterBottom: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    'example project'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                    { variant: 'raised', color: 'secondary', onClick: this.handleClick, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    'Super Secret Password'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'ul',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                            { href: '/b', as: '/a', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 65
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'a',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 65
                                    }
                                },
                                'a'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'li',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                            { href: '/a', as: '/b', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'a',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 66
                                    }
                                },
                                'b'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Index.propTypes = {
    classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7__src_withRoot__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__["withStyles"])(styles)(Index)));

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple__ = __webpack_require__("material-ui/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green__ = __webpack_require__("material-ui/colors/green");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green__);
/* eslint-disable no-underscore-dangle */






// A theme with custom primary and secondary color.
// It's optional.
var theme = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["createMuiTheme"])({
    palette: {
        primary: {
            light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[300],
            main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[500],
            dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[700]
        },
        secondary: {
            light: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[300],
            main: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[500],
            dark: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[700]
        }
    }
});

function createPageContext() {
    return {
        theme: theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
        // The standard class name generator.
        generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["createGenerateClassName"])()
    };
}

function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }

    return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ "./src/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot__ = __webpack_require__("material-ui/Reboot");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chienhunglin/demo/serverless_next.js_typescript_material-ui-next/src/withRoot.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function withRoot(Component) {
    var WithRoot = function (_React$Component) {
        _inherits(WithRoot, _React$Component);

        function WithRoot() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, WithRoot);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call.apply(_ref, [this].concat(args))), _this), _this.pageContext = null, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(WithRoot, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.pageContext = this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                // Remove the server-side injected CSS.
                var jssStyles = document.querySelector('#jss-server-side');
                if (jssStyles && jssStyles.parentNode) {
                    jssStyles.parentNode.removeChild(jssStyles);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                // MuiThemeProvider makes the theme available down the React tree thanks to React context.
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["MuiThemeProvider"],
                    {
                        theme: this.pageContext.theme,
                        sheetsManager: this.pageContext.sheetsManager,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot___default.a, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    }))
                );
            }
        }]);

        return WithRoot;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

    WithRoot.propTypes = {
        pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
    };

    WithRoot.getInitialProps = function (ctx) {
        if (Component.getInitialProps) {
            return Component.getInitialProps(ctx);
        }

        return {};
    };

    return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "material-ui/Button":
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),

/***/ "material-ui/Dialog":
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),

/***/ "material-ui/Reboot":
/***/ (function(module, exports) {

module.exports = require("material-ui/Reboot");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/colors/green":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/green");

/***/ }),

/***/ "material-ui/colors/purple":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/purple");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map