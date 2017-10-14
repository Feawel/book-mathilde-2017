'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function Line(_ref) {
  var left = _ref.left,
      width = _ref.width,
      opacity = _ref.opacity;
  return _react2.default.createElement('div', { style: { left: left, width: width, opacity: opacity }, className: 'jsx-1135861734' + ' ' + 'Line transitions'
  }, _react2.default.createElement(_style2.default, {
    styleId: '1135861734',
    css: ['.Line.jsx-1135861734{background-color:white;height:100%;position:absolute;top:0;z-index:9;}']
  }));
};

exports.default = Line;