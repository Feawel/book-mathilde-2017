'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/componentqs/homeProjects/social.js
var Social = function Social() {
  return _react2.default.createElement('div', {
    className: 'jsx-1110472869' + ' ' + 'Social'
  }, _react2.default.createElement(_style2.default, {
    styleId: '1110472869',
    css: ['.Social.jsx-1110472869{z-index:10;width:20px;position:absolute;bottom:8px;right:30px;}', 'img.jsx-1110472869{width:16px;}', 'a.jsx-1110472869{margin-bottom:20px;display:inline-block;}', '@media screen and (max-width:1023px){.Social.jsx-1110472869{display:none;}}']
  }), _react2.default.createElement('a', { target: '_blank', href: '/', className: 'jsx-1110472869'
  }, _react2.default.createElement('img', { src: '/static/pictos/picto-twitter.svg', alt: 'Mathilde Serra\'s twitter', className: 'jsx-1110472869'
  })), _react2.default.createElement('a', { target: '_blank', href: '/', className: 'jsx-1110472869'
  }, _react2.default.createElement('img', { src: '/static/pictos/picto-behance.svg', alt: 'Mathilde Serra\'s behance', className: 'jsx-1110472869'
  })), _react2.default.createElement('a', { target: '_blank', href: '/', className: 'jsx-1110472869'
  }, _react2.default.createElement('img', { src: '/static/pictos/picto-linkedin.svg', alt: 'Mathilde Serra\'s linkeding', className: 'jsx-1110472869'
  })));
};

exports.default = Social;