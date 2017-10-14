'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/componentqs/homeProjects/wrapper.js
var WhiteBorderWrapper = function WhiteBorderWrapper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-3750190245' + ' ' + 'Container_white_borders'
  }, _react2.default.createElement(_style2.default, {
    styleId: '3750190245',
    css: ['div.jsx-3750190245{width:calc(100% - 20px);height:calc(100% - 20px);border:10px solid white;position:absolute;top:0;left:0;margin:0;padding:0;}']
  }), children);
};

exports.default = WhiteBorderWrapper;