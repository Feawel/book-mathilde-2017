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

// src/componentqs/homeProjects/infos.js
var Infos = function Infos(_ref) {
  var title = _ref.title,
      problematic = _ref.problematic,
      number = _ref.number,
      tags = _ref.tags,
      top = _ref.top,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === undefined ? 40 : _ref$lineWidth;
  return _react2.default.createElement('div', {
    className: 'jsx-4073231235' + ' ' + 'Project_infos'
  }, _react2.default.createElement(_style2.default, {
    styleId: '4073231235',
    css: ['div.jsx-4073231235{color:white;}', 'h2.jsx-4073231235{color:white;font-size:66px;font-family:\'Playfair Display\';font-weight:900;margin:0;}', '.Project_infos.jsx-4073231235{width:100%;margin:auto;display:inline-block;text-align:center;position:absolute;top:calc(50% - 256px);z-index:10;}', '.Project_infos_problematic.jsx-4073231235{font-size:16px;font-family:Futura;font-weight:bold;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;margin-bottom:30px;color:#94eced;line-height:30px;}', '.Line.jsx-4073231235{height:4px;background-color:#94eced;margin:37px auto 20px auto;}', '@media screen and (max-width:1023px){.Project_infos.jsx-4073231235{top:calc(50% - 170px);}h2.jsx-4073231235{font-size:44px;}.Line.jsx-4073231235{margin:17px auto 0 auto;}.Project_infos_problematic.jsx-4073231235{font-size:12px;}}', '@media screen and (max-width:640px){h2.jsx-4073231235{padding:10px;}}']
  }), _react2.default.createElement(Number, { top: top, number: number }), _react2.default.createElement('div', { style: { width: lineWidth }, className: 'jsx-4073231235' + ' ' + 'Line transitions'
  }), _react2.default.createElement(_downUp2.default, { top: top }, _react2.default.createElement('h2', {
    className: 'jsx-4073231235' + ' ' + 'Project_infos_title'
  }, title)), _react2.default.createElement(_downUp2.default, { top: top }, _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: problematic }, className: 'jsx-4073231235' + ' ' + 'Project_infos_problematic'
  })), _react2.default.createElement(Tags, { top: top }));
};

var Number = function Number(_ref2) {
  var top = _ref2.top,
      number = _ref2.number;
  return _react2.default.createElement(_downUp2.default, { top: top }, _react2.default.createElement(_style2.default, {
    styleId: '2635221705',
    css: ['object.jsx-2635221705 svg.jsx-2635221705{-webkit-fill:white;fill:white;}', '@media screen and (max-width:1023px){object.jsx-2635221705{height:48px;}}']
  }), _react2.default.createElement('object', {
    data: '/static/home-projects/number/' + number + '.svg',
    type: 'image/svg+xml',

    height: '70', className: 'jsx-2635221705' + ' ' + 'Project_infos_number'
  }));
};

var Tags = function Tags(_ref3) {
  var top = _ref3.top;
  return _react2.default.createElement(_downUp2.default, { top: top }, _react2.default.createElement('div', {
    className: 'jsx-415786206' + ' ' + 'Project_infos_tags'
  }, _react2.default.createElement(_style2.default, {
    styleId: '415786206',
    css: ['.Project_infos_tags.jsx-415786206{font-family:\'Playfair Display\';font-weight:700;font-size:12px;}', '@media screen and (max-width:1023px){.Project_infos_tags.jsx-415786206{display:none;}}', '.Tag.jsx-415786206{font-style:italic;}', '.Dot.jsx-415786206{padding:0 20px;}']
  }), _react2.default.createElement('span', {
    className: 'jsx-415786206' + ' ' + 'Tag'
  }, 'User Interface'), _react2.default.createElement('span', {
    className: 'jsx-415786206' + ' ' + 'Dot'
  }, '\u2022'), _react2.default.createElement('span', {
    className: 'jsx-415786206' + ' ' + 'Tag'
  }, 'User Experience'), _react2.default.createElement('span', {
    className: 'jsx-415786206' + ' ' + 'Dot'
  }, '\u2022'), _react2.default.createElement('span', {
    className: 'jsx-415786206' + ' ' + 'Tag'
  }, 'Illustration')));
};

exports.default = Infos;