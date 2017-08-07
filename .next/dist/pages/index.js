'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'This page has a title \uD83E\uDD14'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('h1', null, 'Welcome to next.js!'), _react2.default.createElement('div', null, 'Click ', _react2.default.createElement(_link2.default, { href: { pathname: '/about', query: { name: 'Zeit' } } }, _react2.default.createElement('a', null, 'here')), ' to read more'), _react2.default.createElement('div', null, 'Click ', _react2.default.createElement(_link2.default, { href: 'about', replace: true }, _react2.default.createElement('a', null, 'here')), ' to read more'));
};