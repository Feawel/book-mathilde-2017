'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/componentqs/about/index.js
var Background = function Background(_ref) {
  var alt = _ref.alt,
      src = _ref.src,
      hide = _ref.hide,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === undefined ? 1 : _ref$zIndex,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left;
  return _react2.default.createElement('div', { style: { zIndex: zIndex, left: left, display: hide ? 'none' : '', backgroundImage: 'url("' + src + '")' }, className: 'jsx-3057897697' + ' ' + 'Background_picture'
  }, _react2.default.createElement(_style2.default, {
    styleId: '3057897697',
    css: ['div.jsx-3057897697{width:100%;height:100%;position:absolute;top:0;margin:0;padding:0;background-size:cover;overflow:hidden;}', 'img.jsx-3057897697{width:100%;}']
  }));
};

exports.default = Background;