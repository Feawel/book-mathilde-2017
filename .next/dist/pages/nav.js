'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// example header component, prefetch is use to prefetch pages
exports.default = function () {
  return _react2.default.createElement('nav', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', null, 'Home'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about' }, _react2.default.createElement('a', null, 'About'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact' }, _react2.default.createElement('a', null, 'Contact')))));
};