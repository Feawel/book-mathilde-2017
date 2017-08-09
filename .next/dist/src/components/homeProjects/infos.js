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

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/homeProjects/infos.js';

// src/componentqs/homeProjects/infos.js
var Infos = function Infos(_ref) {
  var title = _ref.title,
      problematic = _ref.problematic,
      number = _ref.number,
      tags = _ref.tags,
      top = _ref.top,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === undefined ? 40 : _ref$lineWidth;
  return _react2.default.createElement('div', { className: 'Project_infos', 'data-jsx': 116884006,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 116884006,
    css: 'div[data-jsx="116884006"]{color:white}h2[data-jsx="116884006"]{color:white;font-size:66px;font-family:\'Playfair Display\';font-weight:900;margin:0}.Project_infos[data-jsx="116884006"]{width:100%;margin:auto;display:inline-block;text-align:center;position:absolute;top:calc(50% - 256px)}.Project_infos_problematic[data-jsx="116884006"]{font-size:16px;font-family:Futura;font-weight:bold;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;margin-bottom:30px;color:#94eced;line-height:30px}.Line[data-jsx="116884006"]{height:4px;background-color:#94eced;margin:37px auto 20px auto}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmZvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHcUIsQUFHQSxBQU9ELEFBUUksQUFVSixXQWpCQyxBQWtCYSxDQTVCM0IsQUFHaUIsR0FlSSxRQVBFLElBUFUsT0FlZCxFQVVVLFFBakJULE9BUU8sT0FmVCxJQVFFLENBaUJwQixXQXhCVyxFQWVZLElBUEMsR0FQeEIsbUJBUUEsMkVBT3FCLG1CQUNMLGNBQ0csaUJBQ25CIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmZvcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG93blVwIGZyb20gJy4uL2FuaW1hdGlvbnMvZG93blVwLmpzJ1xuLy8gc3JjL2NvbXBvbmVudHFzL2hvbWVQcm9qZWN0cy9pbmZvcy5qc1xuY29uc3QgSW5mb3MgPSAoeyB0aXRsZSwgcHJvYmxlbWF0aWMsIG51bWJlciwgdGFncywgdG9wLCBsaW5lV2lkdGggPSA0MCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zJz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA2NnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuUHJvamVjdF9pbmZvcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyNTZweCk7XG4gICAgICB9XG4gICAgICAuUHJvamVjdF9pbmZvc19wcm9ibGVtYXRpYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgY29sb3I6ICM5NGVjZWQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgLkxpbmUge1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZWNlZDtcbiAgICAgICAgbWFyZ2luOiAzN3B4IGF1dG8gMjBweCBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8TnVtYmVyIHRvcD17dG9wfSBudW1iZXI9e251bWJlcn0gLz5cbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBsaW5lV2lkdGh9fSBjbGFzc05hbWU9J0xpbmUgdHJhbnNpdGlvbnMnIC8+XG4gICAgPERvd25VcCB0b3A9e3RvcH0+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zX3RpdGxlJz57dGl0bGV9PC9oMj5cbiAgICA8L0Rvd25VcD5cbiAgICA8RG93blVwIHRvcD17dG9wfT5cbiAgICAgIDxwIGNsYXNzTmFtZT0nUHJvamVjdF9pbmZvc19wcm9ibGVtYXRpYycgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9ibGVtYXRpYyB9fS8+XG4gICAgPC9Eb3duVXA+XG4gICAgPFRhZ3MgdG9wPXt0b3B9IC8+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBOdW1iZXIgPSAoeyB0b3AsIG51bWJlciB9KSA9PlxuICA8RG93blVwIHRvcD17dG9wfT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBvYmplY3Qgc3ZnIHtcbiAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxvYmplY3RcbiAgICAgIGRhdGE9e2Avc3RhdGljL2hvbWUtcHJvamVjdHMvbnVtYmVyLyR7bnVtYmVyfS5zdmdgfVxuICAgICAgdHlwZT0naW1hZ2Uvc3ZnK3htbCdcbiAgICAgIGNsYXNzTmFtZT0nUHJvamVjdF9pbmZvc19udW1iZXInXG4gICAgICBoZWlnaHQ9JzcwJz5cbiAgICA8L29iamVjdD5cbiAgPC9Eb3duVXA+XG5cbmNvbnN0IFRhZ3MgPSAoeyB0b3AgfSkgPT5cbiAgPERvd25VcCB0b3A9e3RvcH0+XG4gICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RfaW5mb3NfdGFncyc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5Qcm9qZWN0X2luZm9zX3RhZ3Mge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLlRhZyB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIC5Eb3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdUYWcnPlVzZXIgSW50ZXJmYWNlPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdEb3QnPuKAojwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVGFnJz5Vc2VyIEV4cGVyaWVuY2U8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J0RvdCcgPuKAojwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVGFnJz5JbGx1c3RyYXRpb248L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvRG93blVwPlxuXG5leHBvcnQgZGVmYXVsdCBJbmZvc1xuIl19 */\n/*@ sourceURL=src/components/homeProjects/infos.js */'
  }), _react2.default.createElement(Number, { top: top, number: number, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('div', { style: { width: lineWidth }, className: 'Line transitions', 'data-jsx': 116884006,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement(_downUp2.default, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('h2', { className: 'Project_infos_title', 'data-jsx': 116884006,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, title)), _react2.default.createElement(_downUp2.default, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('p', { className: 'Project_infos_problematic', dangerouslySetInnerHTML: { __html: problematic }, 'data-jsx': 116884006,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })), _react2.default.createElement(Tags, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }));
};

var Number = function Number(_ref2) {
  var top = _ref2.top,
      number = _ref2.number;
  return _react2.default.createElement(_downUp2.default, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2256221629,
    css: 'object[data-jsx="2256221629"] svg[data-jsx="2256221629"]{fill:white}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmZvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGdCLEFBR29CLFdBQ2IiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaG9tZVByb2plY3RzL2luZm9zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb3duVXAgZnJvbSAnLi4vYW5pbWF0aW9ucy9kb3duVXAuanMnXG4vLyBzcmMvY29tcG9uZW50cXMvaG9tZVByb2plY3RzL2luZm9zLmpzXG5jb25zdCBJbmZvcyA9ICh7IHRpdGxlLCBwcm9ibGVtYXRpYywgbnVtYmVyLCB0YWdzLCB0b3AsIGxpbmVXaWR0aCA9IDQwIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RfaW5mb3MnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDY2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5Qcm9qZWN0X2luZm9zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI1NnB4KTtcbiAgICAgIH1cbiAgICAgIC5Qcm9qZWN0X2luZm9zX3Byb2JsZW1hdGljIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogRnV0dXJhO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzk0ZWNlZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAuTGluZSB7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRlY2VkO1xuICAgICAgICBtYXJnaW46IDM3cHggYXV0byAyMHB4IGF1dG87XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxOdW1iZXIgdG9wPXt0b3B9IG51bWJlcj17bnVtYmVyfSAvPlxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGxpbmVXaWR0aH19IGNsYXNzTmFtZT0nTGluZSB0cmFuc2l0aW9ucycgLz5cbiAgICA8RG93blVwIHRvcD17dG9wfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9J1Byb2plY3RfaW5mb3NfdGl0bGUnPnt0aXRsZX08L2gyPlxuICAgIDwvRG93blVwPlxuICAgIDxEb3duVXAgdG9wPXt0b3B9PlxuICAgICAgPHAgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zX3Byb2JsZW1hdGljJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb2JsZW1hdGljIH19Lz5cbiAgICA8L0Rvd25VcD5cbiAgICA8VGFncyB0b3A9e3RvcH0gLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IE51bWJlciA9ICh7IHRvcCwgbnVtYmVyIH0pID0+XG4gIDxEb3duVXAgdG9wPXt0b3B9PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG9iamVjdCBzdmcge1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPG9iamVjdFxuICAgICAgZGF0YT17YC9zdGF0aWMvaG9tZS1wcm9qZWN0cy9udW1iZXIvJHtudW1iZXJ9LnN2Z2B9XG4gICAgICB0eXBlPSdpbWFnZS9zdmcreG1sJ1xuICAgICAgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zX251bWJlcidcbiAgICAgIGhlaWdodD0nNzAnPlxuICAgIDwvb2JqZWN0PlxuICA8L0Rvd25VcD5cblxuY29uc3QgVGFncyA9ICh7IHRvcCB9KSA9PlxuICA8RG93blVwIHRvcD17dG9wfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nUHJvamVjdF9pbmZvc190YWdzJz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlByb2plY3RfaW5mb3NfdGFncyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuVGFnIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgLkRvdCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J1RhZyc+VXNlciBJbnRlcmZhY2U8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J0RvdCc+4oCiPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdUYWcnPlVzZXIgRXhwZXJpZW5jZTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nRG90JyA+4oCiPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdUYWcnPklsbHVzdHJhdGlvbjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9Eb3duVXA+XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9zXG4iXX0= */\n/*@ sourceURL=src/components/homeProjects/infos.js */'
  }), _react2.default.createElement('object', {
    data: '/static/home-projects/number/' + number + '.svg',
    type: 'image/svg+xml',
    className: 'Project_infos_number',
    height: '70', 'data-jsx': 2256221629,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }));
};

var Tags = function Tags(_ref3) {
  var top = _ref3.top;
  return _react2.default.createElement(_downUp2.default, { top: top, __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('div', { className: 'Project_infos_tags', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 427720035,
    css: '.Project_infos_tags[data-jsx="427720035"]{font-family:\'Playfair Display\';font-weight:700;font-size:12px}.Tag[data-jsx="427720035"]{font-style:italic}.Dot[data-jsx="427720035"]{padding:0 20px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmZvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBRzBDLEFBS2IsQUFHSCxlQUNqQixHQUhBLGFBTGtCLGdCQUNELGVBQ2pCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2hvbWVQcm9qZWN0cy9pbmZvcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG93blVwIGZyb20gJy4uL2FuaW1hdGlvbnMvZG93blVwLmpzJ1xuLy8gc3JjL2NvbXBvbmVudHFzL2hvbWVQcm9qZWN0cy9pbmZvcy5qc1xuY29uc3QgSW5mb3MgPSAoeyB0aXRsZSwgcHJvYmxlbWF0aWMsIG51bWJlciwgdGFncywgdG9wLCBsaW5lV2lkdGggPSA0MCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zJz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA2NnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuUHJvamVjdF9pbmZvcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyNTZweCk7XG4gICAgICB9XG4gICAgICAuUHJvamVjdF9pbmZvc19wcm9ibGVtYXRpYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgY29sb3I6ICM5NGVjZWQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgLkxpbmUge1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZWNlZDtcbiAgICAgICAgbWFyZ2luOiAzN3B4IGF1dG8gMjBweCBhdXRvO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8TnVtYmVyIHRvcD17dG9wfSBudW1iZXI9e251bWJlcn0gLz5cbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBsaW5lV2lkdGh9fSBjbGFzc05hbWU9J0xpbmUgdHJhbnNpdGlvbnMnIC8+XG4gICAgPERvd25VcCB0b3A9e3RvcH0+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdQcm9qZWN0X2luZm9zX3RpdGxlJz57dGl0bGV9PC9oMj5cbiAgICA8L0Rvd25VcD5cbiAgICA8RG93blVwIHRvcD17dG9wfT5cbiAgICAgIDxwIGNsYXNzTmFtZT0nUHJvamVjdF9pbmZvc19wcm9ibGVtYXRpYycgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9ibGVtYXRpYyB9fS8+XG4gICAgPC9Eb3duVXA+XG4gICAgPFRhZ3MgdG9wPXt0b3B9IC8+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBOdW1iZXIgPSAoeyB0b3AsIG51bWJlciB9KSA9PlxuICA8RG93blVwIHRvcD17dG9wfT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBvYmplY3Qgc3ZnIHtcbiAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxvYmplY3RcbiAgICAgIGRhdGE9e2Avc3RhdGljL2hvbWUtcHJvamVjdHMvbnVtYmVyLyR7bnVtYmVyfS5zdmdgfVxuICAgICAgdHlwZT0naW1hZ2Uvc3ZnK3htbCdcbiAgICAgIGNsYXNzTmFtZT0nUHJvamVjdF9pbmZvc19udW1iZXInXG4gICAgICBoZWlnaHQ9JzcwJz5cbiAgICA8L29iamVjdD5cbiAgPC9Eb3duVXA+XG5cbmNvbnN0IFRhZ3MgPSAoeyB0b3AgfSkgPT5cbiAgPERvd25VcCB0b3A9e3RvcH0+XG4gICAgPGRpdiBjbGFzc05hbWU9J1Byb2plY3RfaW5mb3NfdGFncyc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5Qcm9qZWN0X2luZm9zX3RhZ3Mge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLlRhZyB7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIC5Eb3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdUYWcnPlVzZXIgSW50ZXJmYWNlPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdEb3QnPuKAojwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVGFnJz5Vc2VyIEV4cGVyaWVuY2U8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J0RvdCcgPuKAojwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVGFnJz5JbGx1c3RyYXRpb248L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvRG93blVwPlxuXG5leHBvcnQgZGVmYXVsdCBJbmZvc1xuIl19 */\n/*@ sourceURL=src/components/homeProjects/infos.js */'
  }), _react2.default.createElement('span', { className: 'Tag', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, 'User Interface'), _react2.default.createElement('span', { className: 'Dot', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, '\u2022'), _react2.default.createElement('span', { className: 'Tag', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, 'User Experience'), _react2.default.createElement('span', { className: 'Dot', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, '\u2022'), _react2.default.createElement('span', { className: 'Tag', 'data-jsx': 427720035,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, 'Illustration')));
};

exports.default = Infos;