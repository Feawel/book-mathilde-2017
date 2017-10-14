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

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/homeProjects/call.js';
// src/componentqs/about/index.js


var Call = function Call(_ref) {
  var draw = _ref.draw,
      top = _ref.top;
  return _react2.default.createElement('div', {
    className: 'jsx-3273578251' + ' ' + 'Call_wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '3273578251',
    css: '.Call_wrapper.jsx-3273578251{width:100%;text-align:center;position:absolute;bottom:140px;z-index:10;height:40px;color:white}.Call.jsx-3273578251{display:inline-block;position:relative;width:218px;height:40px}.Call_text.jsx-3273578251{text-transform:uppercase;font-size:12px;font-family:Futura;font-weight:bold;text-align:center;position:absolute;top:14px;left:0;height:45px;width:218px}svg.jsx-3273578251{height:45px;width:218px;position:absolute;top:0;left:0}.path.jsx-3273578251{stroke-dasharray:2000;-webkit-animation:dash-jsx-3273578251 3s linear forwards;animation:dash-jsx-3273578251 3s linear forwards}.path2.jsx-3273578251{stroke-dasharray:2000;-webkit-animation:dash2-jsx-3273578251 3s linear forwards;animation:dash2-jsx-3273578251 3s linear forwards}@-webkit-keyframes dash-jsx-3273578251{from{stroke-dashoffset:2000}to{stroke-dashoffset:0}}@keyframes dash-jsx-3273578251{from{stroke-dashoffset:2000}to{stroke-dashoffset:0}}@-webkit-keyframes dash2-jsx-3273578251{from{stroke-dashoffset:0}to{stroke-dashoffset:-2000}}@keyframes dash2-jsx-3273578251{from{stroke-dashoffset:0}to{stroke-dashoffset:-2000}}@media screen and (max-width:1023px){svg.jsx-3273578251 path.jsx-3273578251{-webkit-fill:white;fill:white}.Call_text.jsx-3273578251{color:#008db9}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9jYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtjLEFBR2tCLEFBU1UsQUFNSSxBQVliLEFBT1UsQUFJQSxBQUtHLEFBR0gsQUFLQSxBQUdJLEFBS2IsQUFHRyxXQTdERSxDQTJCTixFQW1DWixNQWhCQSxBQUtBLENBMUNrQixDQXlCZ0IsQUFJQyxDQUtuQyxDQWZrQixBQTBCbEIsQ0F2Q2UsSUFkRyxDQTBEbEIsU0FqRFksQ0FNTyxFQWFiLEtBM0JPLENBNEJOLEdBbkJLLElBb0JkLElBZG1CLENBZE4sR0FTYixRQVJjLEtBY00sT0FiTixXQWNNLENBYnBCLGlCQWNXLFNBQ0YsT0FDSyxBQWFkLEVBSUEsVUFoQmMsWUFDZCIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9ob21lUHJvamVjdHMvY2FsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cXMvYWJvdXQvaW5kZXguanNcbmltcG9ydCBEb3duVXAgZnJvbSAnLi4vYW5pbWF0aW9ucy9kb3duVXAuanMnXG5cbmNvbnN0IENhbGwgPSAoeyBkcmF3LCB0b3AgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nQ2FsbF93cmFwcGVyJz5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5DYWxsX3dyYXBwZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE0MHB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5DYWxsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAyMThweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLkNhbGxfdGV4dCB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIHdpZHRoOiAyMThweDtcbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIHdpZHRoOiAyMThweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIC5wYXRoIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIwMDA7XG4gICAgICBhbmltYXRpb246IGRhc2ggM3MgbGluZWFyIGZvcndhcmRzO1xuICAgIH1cbiAgICAucGF0aDIge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMjAwMDtcbiAgICAgIGFuaW1hdGlvbjogZGFzaDIgM3MgbGluZWFyIGZvcndhcmRzO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDAwO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBkYXNoMiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjAwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICBzdmcgcGF0aCB7XG4gICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLkNhbGxfdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjMDA4ZGI5O1xuICAgICAgfVxuICAgIH1cbiAgYH08L3N0eWxlPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdDYWxsIGNsaWNrYWJsZSc+XG4gICAgICA8c3ZnPlxuXG4gICAgICAgIDxwYXRoIGQ9eydNMjUgMiBMIDE5NSAyIEEgNSA1IDAgMCAxIDE5NSA0MiBMIDI1IDQyIEEgNSA1IDAgMCAxIDI1IDInfVxuICAgICAgICAgIHN0cm9rZT0nd2hpdGUnXG4gICAgICAgICAgY2xhc3NOYW1lPXtkcmF3ID09PSBudWxsID8gJycgOiAoZHJhdyA9PT0gZmFsc2UgPyAncGF0aDInIDogJ3BhdGgnKX1cbiAgICAgICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8RG93blVwIHRvcD17dG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0NhbGxfdGV4dCc+VmlldyB0aGUgY2FzZTwvZGl2PlxuICAgICAgPC9Eb3duVXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDYWxsXG4iXX0= */\n/*@ sourceURL=src/components/homeProjects/call.js */'
  }), _react2.default.createElement('div', {
    className: 'jsx-3273578251' + ' ' + 'Call clickable',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement('svg', {
    className: 'jsx-3273578251',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement('path', { d: 'M25 2 L 195 2 A 5 5 0 0 1 195 42 L 25 42 A 5 5 0 0 1 25 2',
    stroke: 'white',

    strokeWidth: 1,
    fill: 'none',
    className: 'jsx-3273578251' + ' ' + ((draw === null ? '' : draw === false ? 'path2' : 'path') || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  })), _react2.default.createElement(_downUp2.default, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-3273578251' + ' ' + 'Call_text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, 'View the case'))));
};

exports.default = Call;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9jYWxsLmpzIl0sIm5hbWVzIjpbIkRvd25VcCIsIkNhbGwiLCJkcmF3IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7Ozs7OztBQURuQjs7O0FBR0EsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7TUFBSCxBQUFTLFdBQVQsQUFBUzt5QkFDcEIsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQTtBQUFBO0FBQUEsR0FBQTthQUFBO1NBQUEsQUFxRUU7QUFyRUYsc0JBcUVFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUVFO0FBRkY7QUFBQSw2Q0FFUSxHQUFOLEFBQVMsQUFDUDtZQURGLEFBQ1MsQUFFUDs7aUJBSEYsQUFHZSxBQUNiO1VBSkYsQUFJTzswQ0FGTSxTQUFBLEFBQVMsT0FBVCxBQUFnQixLQUFNLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBRnBELEFBRThELFdBRjlEOztnQkFBQTtrQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO3VCQU9GLEFBQUMsa0NBQU8sS0FBUixBQUFhO2dCQUFiO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBO0FBQUE7QUFBQSxLQWpGSyxBQUNYLEFBcUVFLEFBVUUsQUFDRTtBQWpGUixBQXVGQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJjYWxsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyJ9