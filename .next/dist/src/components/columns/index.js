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

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/columns/index.js';


var Columns = function Columns(_ref) {
  var width = _ref.width,
      opacity = _ref.opacity;
  return _react2.default.createElement('div', { style: { height: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(DesktopLines, { width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(TabletLines, { width: typeof width === 'string' ? width.split('%')[0] * 1.25 + '%' : width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(SmartphoneLines, { width: typeof width === 'string' ? width.split('%')[0] * 1.67 + '%' : width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var DesktopLines = function DesktopLines(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 1 : _ref2$width,
      _ref2$opacity = _ref2.opacity,
      opacity = _ref2$opacity === undefined ? 0.5 : _ref2$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-3425997833' + ' ' + 'Desktop_lines',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '3425997833',
    css: '.Desktop_lines.jsx-3425997833{display:none}@media screen and (min-width:1024px){.Desktop_lines.jsx-3425997833{display:inline-block}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR3FCLEFBSVcsYUFIekIsUUFJRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb2x1bW5zL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5lIGZyb20gJy4vbGluZSdcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL2RhdGEnXG5cbmNvbnN0IENvbHVtbnMgPSAoeyB3aWR0aCwgb3BhY2l0eSB9KSA9PlxuICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjB9fT5cbiAgICA8RGVza3RvcExpbmVzIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8VGFibGV0TGluZXMgd2lkdGg9e3R5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgPyB3aWR0aC5zcGxpdCgnJScpWzBdKjEuMjUrJyUnIDogd2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPFNtYXJ0cGhvbmVMaW5lcyB3aWR0aD17dHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyA/IHdpZHRoLnNwbGl0KCclJylbMF0qMS42NysnJScgOiB3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgPC9kaXY+XG5cbmNvbnN0IERlc2t0b3BMaW5lcyA9ICh7IHdpZHRoID0gMSwgb3BhY2l0eSA9IDAuNSB9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT0nRGVza3RvcF9saW5lcyc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkRlc2t0b3BfbGluZXMge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgLkRlc2t0b3BfbGluZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8TGluZSBsZWZ0PScwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzIwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzQwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzYwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzgwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICA8L2Rpdj5cblxuY29uc3QgVGFibGV0TGluZXMgPSAoeyB3aWR0aCA9IDEsIG9wYWNpdHkgPSAwLjUgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J1RhYmxldF9saW5lcyc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLlRhYmxldF9saW5lcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAuVGFibGV0X2xpbmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPExpbmUgbGVmdD0nMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PScyNSUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc1MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc3NSUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgPC9kaXY+XG5cbmNvbnN0IFNtYXJ0cGhvbmVMaW5lcyA9ICh7IHdpZHRoID0gMSwgb3BhY2l0eSA9IDAuNSB9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT0nU21hcnRwaG9uZV9saW5lcyc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLlNtYXJ0cGhvbmVfbGluZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgLlNtYXJ0cGhvbmVfbGluZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8TGluZSBsZWZ0PScwJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzMzLjMlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nNjYuNiUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbnNcbiJdfQ== */\n/*@ sourceURL=src/components/columns/index.js */'
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_line2.default, { left: '20%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_line2.default, { left: '40%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_line2.default, { left: '60%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(_line2.default, { left: '80%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }));
};

var TabletLines = function TabletLines(_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === undefined ? 1 : _ref3$width,
      _ref3$opacity = _ref3.opacity,
      opacity = _ref3$opacity === undefined ? 0.5 : _ref3$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-3728364873' + ' ' + 'Tablet_lines',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '3728364873',
    css: '.Tablet_lines.jsx-3728364873{display:none}@media screen and (min-width:640px) and (max-width:1024px){.Tablet_lines.jsx-3728364873{display:inline-block}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUdzQixBQUlVLGFBSHpCLFFBSUUiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY29sdW1ucy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluZSBmcm9tICcuL2xpbmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhJ1xuXG5jb25zdCBDb2x1bW5zID0gKHsgd2lkdGgsIG9wYWNpdHkgfSkgPT5cbiAgPGRpdiBzdHlsZT17e2hlaWdodDowfX0+XG4gICAgPERlc2t0b3BMaW5lcyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPFRhYmxldExpbmVzIHdpZHRoPXt0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnID8gd2lkdGguc3BsaXQoJyUnKVswXSoxLjI1KyclJyA6IHdpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxTbWFydHBob25lTGluZXMgd2lkdGg9e3R5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgPyB3aWR0aC5zcGxpdCgnJScpWzBdKjEuNjcrJyUnIDogd2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5jb25zdCBEZXNrdG9wTGluZXMgPSAoeyB3aWR0aCA9IDEsIG9wYWNpdHkgPSAwLjUgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J0Rlc2t0b3BfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5EZXNrdG9wX2xpbmVzIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIC5EZXNrdG9wX2xpbmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPExpbmUgbGVmdD0nMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PScyMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc0MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc2MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc4MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgPC9kaXY+XG5cbmNvbnN0IFRhYmxldExpbmVzID0gKHsgd2lkdGggPSAxLCBvcGFjaXR5ID0gMC41IH0pID0+XG4gIDxkaXYgY2xhc3NOYW1lPSdUYWJsZXRfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5UYWJsZXRfbGluZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgLlRhYmxldF9saW5lcyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxMaW5lIGxlZnQ9JzAlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nMjUlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nNTAlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nNzUlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5jb25zdCBTbWFydHBob25lTGluZXMgPSAoeyB3aWR0aCA9IDEsIG9wYWNpdHkgPSAwLjUgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J1NtYXJ0cGhvbmVfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5TbWFydHBob25lX2xpbmVzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIC5TbWFydHBob25lX2xpbmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPExpbmUgbGVmdD0nMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSczMy4zJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzY2LjYlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5zXG4iXX0= */\n/*@ sourceURL=src/components/columns/index.js */'
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement(_line2.default, { left: '25%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement(_line2.default, { left: '50%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement(_line2.default, { left: '75%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }));
};

var SmartphoneLines = function SmartphoneLines(_ref4) {
  var _ref4$width = _ref4.width,
      width = _ref4$width === undefined ? 1 : _ref4$width,
      _ref4$opacity = _ref4.opacity,
      opacity = _ref4$opacity === undefined ? 0.5 : _ref4$opacity;
  return _react2.default.createElement('div', {
    className: 'jsx-703553077' + ' ' + 'Smartphone_lines',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '703553077',
    css: '.Smartphone_lines.jsx-703553077{display:none}@media screen and (max-width:640px){.Smartphone_lines.jsx-703553077{display:inline-block}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQixBQUdzQixBQUlVLGFBSHpCLFFBSUUiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY29sdW1ucy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluZSBmcm9tICcuL2xpbmUnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9kYXRhJ1xuXG5jb25zdCBDb2x1bW5zID0gKHsgd2lkdGgsIG9wYWNpdHkgfSkgPT5cbiAgPGRpdiBzdHlsZT17e2hlaWdodDowfX0+XG4gICAgPERlc2t0b3BMaW5lcyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPFRhYmxldExpbmVzIHdpZHRoPXt0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnID8gd2lkdGguc3BsaXQoJyUnKVswXSoxLjI1KyclJyA6IHdpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxTbWFydHBob25lTGluZXMgd2lkdGg9e3R5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgPyB3aWR0aC5zcGxpdCgnJScpWzBdKjEuNjcrJyUnIDogd2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5jb25zdCBEZXNrdG9wTGluZXMgPSAoeyB3aWR0aCA9IDEsIG9wYWNpdHkgPSAwLjUgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J0Rlc2t0b3BfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5EZXNrdG9wX2xpbmVzIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIC5EZXNrdG9wX2xpbmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPExpbmUgbGVmdD0nMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PScyMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc0MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc2MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSc4MCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgPC9kaXY+XG5cbmNvbnN0IFRhYmxldExpbmVzID0gKHsgd2lkdGggPSAxLCBvcGFjaXR5ID0gMC41IH0pID0+XG4gIDxkaXYgY2xhc3NOYW1lPSdUYWJsZXRfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5UYWJsZXRfbGluZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgLlRhYmxldF9saW5lcyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxMaW5lIGxlZnQ9JzAlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nMjUlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nNTAlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gICAgPExpbmUgbGVmdD0nNzUlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5jb25zdCBTbWFydHBob25lTGluZXMgPSAoeyB3aWR0aCA9IDEsIG9wYWNpdHkgPSAwLjUgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J1NtYXJ0cGhvbmVfbGluZXMnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5TbWFydHBob25lX2xpbmVzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIC5TbWFydHBob25lX2xpbmVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPExpbmUgbGVmdD0nMCUnIHdpZHRoPXt3aWR0aH0gb3BhY2l0eT17b3BhY2l0eX0gLz5cbiAgICA8TGluZSBsZWZ0PSczMy4zJScgd2lkdGg9e3dpZHRofSBvcGFjaXR5PXtvcGFjaXR5fSAvPlxuICAgIDxMaW5lIGxlZnQ9JzY2LjYlJyB3aWR0aD17d2lkdGh9IG9wYWNpdHk9e29wYWNpdHl9IC8+XG4gIDwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5zXG4iXX0= */\n/*@ sourceURL=src/components/columns/index.js */'
  }), _react2.default.createElement(_line2.default, { left: '0%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), _react2.default.createElement(_line2.default, { left: '33.3%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement(_line2.default, { left: '66.6%', width: width, opacity: opacity, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }));
};

exports.default = Columns;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbHVtbnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5lIiwiZGF0YSIsIkNvbHVtbnMiLCJ3aWR0aCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJzcGxpdCIsIkRlc2t0b3BMaW5lcyIsIlRhYmxldExpbmVzIiwiU21hcnRwaG9uZUxpbmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFVBQVUsU0FBVixBQUFVLGNBQUE7TUFBQSxBQUFHLGFBQUgsQUFBRztNQUFILEFBQVUsZUFBVixBQUFVO3lCQUN4QixjQUFBLFNBQUssT0FBTyxFQUFDLFFBQWIsQUFBWSxBQUFRO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxnQ0FDRSxBQUFDLGdCQUFhLE9BQWQsQUFBcUIsT0FBTyxTQUE1QixBQUFxQztnQkFBckM7a0JBREYsQUFDRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxlQUFZLE9BQU8sT0FBQSxBQUFPLFVBQVAsQUFBaUIsV0FBVyxNQUFBLEFBQU0sTUFBTixBQUFZLEtBQVosQUFBaUIsS0FBakIsQUFBb0IsT0FBaEQsQUFBcUQsTUFBekUsQUFBK0UsT0FBTyxTQUF0RixBQUErRjtnQkFBL0Y7a0JBRkYsQUFFRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxtQkFBZ0IsT0FBTyxPQUFBLEFBQU8sVUFBUCxBQUFpQixXQUFXLE1BQUEsQUFBTSxNQUFOLEFBQVksS0FBWixBQUFpQixLQUFqQixBQUFvQixPQUFoRCxBQUFxRCxNQUE3RSxBQUFtRixPQUFPLFNBQTFGLEFBQW1HO2dCQUFuRztrQkFKWSxBQUNkLEFBR0U7QUFBQTs7QUFKSjs7QUFPQSxJQUFNLGVBQWUsU0FBZixBQUFlLG9CQUFBOzBCQUFBLEFBQUc7TUFBSCxBQUFHLG9DQUFILEFBQVcsSUFBWDs0QkFBQSxBQUFjO01BQWQsQUFBYyx3Q0FBZCxBQUF3QixNQUF4Qjt5QkFDbkIsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQTtBQUFBO0FBQUEsR0FBQTthQUFBO1NBQUEsQUFXRTtBQVhGLHNCQVdFLEFBQUMsZ0NBQUssTUFBTixBQUFXLE1BQUssT0FBaEIsQUFBdUIsT0FBTyxTQUE5QixBQUF1QztnQkFBdkM7a0JBWEYsQUFXRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsT0FBTSxPQUFqQixBQUF3QixPQUFPLFNBQS9CLEFBQXdDO2dCQUF4QztrQkFaRixBQVlFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxPQUFNLE9BQWpCLEFBQXdCLE9BQU8sU0FBL0IsQUFBd0M7Z0JBQXhDO2tCQWJGLEFBYUUsQUFDQTtBQURBO3NCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXLE9BQU0sT0FBakIsQUFBd0IsT0FBTyxTQUEvQixBQUF3QztnQkFBeEM7a0JBZEYsQUFjRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsT0FBTSxPQUFqQixBQUF3QixPQUFPLFNBQS9CLEFBQXdDO2dCQUF4QztrQkFoQmlCLEFBQ25CLEFBZUU7QUFBQTs7QUFoQko7O0FBbUJBLElBQU0sY0FBYyxTQUFkLEFBQWMsbUJBQUE7MEJBQUEsQUFBRztNQUFILEFBQUcsb0NBQUgsQUFBVyxJQUFYOzRCQUFBLEFBQWM7TUFBZCxBQUFjLHdDQUFkLEFBQXdCLE1BQXhCO3lCQUNsQixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBO0FBQUE7QUFBQSxHQUFBO2FBQUE7U0FBQSxBQVdFO0FBWEYsc0JBV0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsTUFBSyxPQUFoQixBQUF1QixPQUFPLFNBQTlCLEFBQXVDO2dCQUF2QztrQkFYRixBQVdFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxPQUFNLE9BQWpCLEFBQXdCLE9BQU8sU0FBL0IsQUFBd0M7Z0JBQXhDO2tCQVpGLEFBWUUsQUFDQTtBQURBO3NCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXLE9BQU0sT0FBakIsQUFBd0IsT0FBTyxTQUEvQixBQUF3QztnQkFBeEM7a0JBYkYsQUFhRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsT0FBTSxPQUFqQixBQUF3QixPQUFPLFNBQS9CLEFBQXdDO2dCQUF4QztrQkFmZ0IsQUFDbEIsQUFjRTtBQUFBOztBQWZKOztBQWtCQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTswQkFBQSxBQUFHO01BQUgsQUFBRyxvQ0FBSCxBQUFXLElBQVg7NEJBQUEsQUFBYztNQUFkLEFBQWMsd0NBQWQsQUFBd0IsTUFBeEI7eUJBQ3RCLGNBQUE7dUNBQUEsQUFBZTs7Z0JBQWY7a0JBQUE7QUFBQTtBQUFBLEdBQUE7YUFBQTtTQUFBLEFBV0U7QUFYRixzQkFXRSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxNQUFLLE9BQWhCLEFBQXVCLE9BQU8sU0FBOUIsQUFBdUM7Z0JBQXZDO2tCQVhGLEFBV0UsQUFDQTtBQURBO3NCQUNBLEFBQUMsZ0NBQUssTUFBTixBQUFXLFNBQVEsT0FBbkIsQUFBMEIsT0FBTyxTQUFqQyxBQUEwQztnQkFBMUM7a0JBWkYsQUFZRSxBQUNBO0FBREE7c0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsU0FBUSxPQUFuQixBQUEwQixPQUFPLFNBQWpDLEFBQTBDO2dCQUExQztrQkFkb0IsQUFDdEIsQUFhRTtBQUFBOztBQWRKLEFBaUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyJ9