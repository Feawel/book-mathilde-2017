'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _homeProjects = require('../src/components/homeProjects');

var _homeProjects2 = _interopRequireDefault(_homeProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-1382119984'
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    className: 'jsx-1382119984'
  }, 'Book \uD83E\uDD14'), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1382119984'
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1382119984'
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Playfair+Display:700i,900', rel: 'stylesheet', className: 'jsx-1382119984'
  })), _react2.default.createElement(_style2.default, {
    styleId: '1382119984',
    css: ['html,body{width:100%;height:100%;margin:0;padding:0;}', '.clickable:hover{cursor:pointer;}', '.transitions{-webkit-transition :all .5s;-moz-transition :all .5s;-ms-transition :all .5s;-o-transition :all .5s;-webkit-transition :all .5s;transition :all .5s;}']
  }), _react2.default.createElement(_homeProjects2.default, null));
};