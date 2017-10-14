'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _down_arrow = require('../pictos/down_arrow');

var _down_arrow2 = _interopRequireDefault(_down_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollDown = function ScrollDown(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement('div', { onClick: onClick, className: 'jsx-1475611962' + ' ' + 'Scroll_down clickable'
  }, _react2.default.createElement(_style2.default, {
    styleId: '1475611962',
    css: ['.Scroll_down.jsx-1475611962{position:absolute;bottom:45px;left:34px;font-size:10px;font-family:Futura;font-weight:bold;z-index:10;}', '.Scroll_down_text.jsx-1475611962{text-orientation:upright;}', '.Scroll_down_letter.jsx-1475611962{display:block;color:white;position:relative;}', '@media screen and (max-width:1023px){.Scroll_down.jsx-1475611962{width:100%;bottom:35px;left:6px;text-align:center;}.Scroll_down_text.jsx-1475611962{display:none;}}']
  }), _react2.default.createElement('div', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_text'
  }, _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'S'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'C'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'R'), _react2.default.createElement('span', {
    className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'O'), _react2.default.createElement('span', { style: { left: 2 }, className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'L'), _react2.default.createElement('span', { style: { left: 2 }, className: 'jsx-1475611962' + ' ' + 'Scroll_down_letter'
  }, 'L')), _react2.default.createElement(_down_arrow2.default, null));
};
// src/componentqs/homeProjects/scrollDown.js
exports.default = ScrollDown;