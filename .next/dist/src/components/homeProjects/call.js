'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _downUp = require('../animations/downUp.js');

var _downUp2 = _interopRequireDefault(_downUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Call = function Call(_ref) {
  var draw = _ref.draw,
      top = _ref.top;
  return _react2.default.createElement('div', {
    className: 'jsx-4263261415' + ' ' + 'Call_wrapper'
  }, _react2.default.createElement(_style2.default, {
    styleId: '4263261415',
    css: ['.Call_wrapper.jsx-4263261415{width:100%;text-align:center;position:absolute;bottom:140px;z-index:10;height:40px;color:white;}', '.Call.jsx-4263261415{display:inline-block;position:relative;width:218px;height:40px;}', '.Call_text.jsx-4263261415{text-transform:uppercase;font-size:12px;font-family:Futura;font-weight:bold;text-align:center;position:absolute;top:14px;left:0;height:45px;width:218px;}', 'svg.jsx-4263261415{height:45px;width:218px;position:absolute;top:0;left:0;}', '.path.jsx-4263261415{stroke-dasharray:2000;-webkit-animation:dash-jsx-4263261415 5s linear forwards;animation:dash-jsx-4263261415 5s linear forwards;}', '.path2.jsx-4263261415{stroke-dasharray:2000;-webkit-animation:dash2-jsx-4263261415 5s linear forwards;animation:dash2-jsx-4263261415 5s linear forwards;}', '@-webkit-keyframes dash-jsx-4263261415{from{stroke-dashoffset:2000;}to{stroke-dashoffset:0;}}', '@keyframes dash-jsx-4263261415{from{stroke-dashoffset:2000;}to{stroke-dashoffset:0;}}', '@-webkit-keyframes dash2-jsx-4263261415{from{stroke-dashoffset:0;}to{stroke-dashoffset:-2000;}}', '@keyframes dash2-jsx-4263261415{from{stroke-dashoffset:0;}to{stroke-dashoffset:-2000;}}', '@media screen and (max-width:1023px){svg.jsx-4263261415 path.jsx-4263261415{-webkit-fill:white;fill:white;}.Call_text.jsx-4263261415{color:#008db9;}}']
  }), _react2.default.createElement('div', {
    className: 'jsx-4263261415' + ' ' + 'Call clickable'
  }, _react2.default.createElement('svg', {
    className: 'jsx-4263261415'
  }, _react2.default.createElement('path', { d: 'M25 2 L 195 2 A 5 5 0 0 1 195 42 L 25 42 A 5 5 0 0 1 25 2',
    stroke: 'white',

    strokeWidth: 1,
    fill: 'none',
    className: 'jsx-4263261415' + ' ' + ((draw === null ? '' : draw === false ? 'path2' : 'path') || '')
  })), _react2.default.createElement(_downUp2.default, { top: top }, _react2.default.createElement('div', {
    className: 'jsx-4263261415' + ' ' + 'Call_text'
  }, 'View the case'))));
};
// src/componentqs/about/index.js
exports.default = Call;