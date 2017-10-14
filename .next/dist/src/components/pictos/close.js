"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SVGCloseIcon = function SVGCloseIcon() {
  return _react2.default.createElement("svg", {
    className: "jsx-462399482" + " " + "clickable"
  }, _react2.default.createElement(_style2.default, {
    styleId: "462399482",
    css: ["svg.jsx-462399482{position:absolute;top:4px;left:4px;-webkit-fill:white;fill:white;width:40px;height:40px;}"]
  }), _react2.default.createElement("polygon", { points: "26.1,8.8 23.2,5.9 16,13.2 8.9,6.1 6.1,9 13.2,16 5.9,23.3 8.7,26.1 16,18.8 23,25.9 25.9,23.1 18.8,16 ", className: "jsx-462399482"
  }));
};

exports.default = SVGCloseIcon;