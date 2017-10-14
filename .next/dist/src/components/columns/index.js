'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _data = require('../../../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Columns = function Columns(_ref) {
  var width = _ref.width,
      opacity = _ref.opacity;
  return _react2.default.createElement('div', null, _react2.default.createElement(DesktopLines, { width: width, opacity: opacity }), _react2.default.createElement(TabletLines, { width: typeof width === 'string' ? width.split('%')[0] * 1.25 + '%' : width, opacity: opacity }), _react2.default.createElement(SmartphoneLines, { width: typeof width === 'string' ? width.split('%')[0] * 1.67 + '%' : width, opacity: opacity }));
};

var DesktopLines = function DesktopLines(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 1 : _ref2$width,
      _ref2$opacity = _ref2.opacity,
      opacity = _ref2$opacity === undefined ? 0.5 : _ref2$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-3425997833' + ' ' + 'Desktop_lines'
  }, _react2.default.createElement(_style2.default, {
    styleId: '3425997833',
    css: ['.Desktop_lines.jsx-3425997833{display:none;}', '@media screen and (min-width:1024px){.Desktop_lines.jsx-3425997833{display:inline-block;}}']
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '20%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '40%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '60%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '80%', width: width, opacity: opacity }));
};

var TabletLines = function TabletLines(_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === undefined ? 1 : _ref3$width,
      _ref3$opacity = _ref3.opacity,
      opacity = _ref3$opacity === undefined ? 0.5 : _ref3$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-3728364873' + ' ' + 'Tablet_lines'
  }, _react2.default.createElement(_style2.default, {
    styleId: '3728364873',
    css: ['.Tablet_lines.jsx-3728364873{display:none;}', '@media screen and (min-width:640px) and (max-width:1024px){.Tablet_lines.jsx-3728364873{display:inline-block;}}']
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '25%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '50%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '75%', width: width, opacity: opacity }));
};

var SmartphoneLines = function SmartphoneLines(_ref4) {
  var _ref4$width = _ref4.width,
      width = _ref4$width === undefined ? 1 : _ref4$width,
      _ref4$opacity = _ref4.opacity,
      opacity = _ref4$opacity === undefined ? 0.5 : _ref4$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-703553077' + ' ' + 'Smartphone_lines'
  }, _react2.default.createElement(_style2.default, {
    styleId: '703553077',
    css: ['.Smartphone_lines.jsx-703553077{display:none;}', '@media screen and (max-width:640px){.Smartphone_lines.jsx-703553077{display:inline-block;}}']
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '33.3%', width: width, opacity: opacity }), _react2.default.createElement(_line2.default, { left: '66.6%', width: width, opacity: opacity }));
};

exports.default = Columns;