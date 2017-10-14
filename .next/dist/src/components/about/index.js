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
var About = function About() {
  return _react2.default.createElement('div', {
    className: 'jsx-1200452539' + ' ' + 'Logo_wrapper'
  }, _react2.default.createElement(_style2.default, {
    styleId: '1200452539',
    css: ['.Logo_wrapper.jsx-1200452539{position :absolute;top:40px;left:30px;color:white;z-index:10;}', 'img.jsx-1200452539{width:180px;}', 'img.jsx-1200452539:hover{cursor:pointer;}']
  }), _react2.default.createElement('img', { src: '/static/logo-01.svg', alt: 'Logo Mathilde Serra - 2017\xA9', className: 'jsx-1200452539' + ' ' + 'Logo'
  }));
};

exports.default = About;