'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _background = require('../homeProjects/background');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/feawel/Dev/book-mathilde-2017/src/components/animations/backgroundMask.js';


var BackgroundMask = function BackgroundMask(_ref) {
  var hide = _ref.hide,
      picture1 = _ref.picture1,
      picture2 = _ref.picture2,
      _ref$maskWidth = _ref.maskWidth,
      maskWidth = _ref$maskWidth === undefined ? '20%' : _ref$maskWidth,
      current = _ref.current,
      animating = _ref.animating;

  var zIndex1 = current === 0 ? animating ? 0 : 1 : animating ? 1 : 0;
  var zIndex2 = current === 1 ? animating ? 0 : 1 : animating ? 1 : 0;
  return _react2.default.createElement('div', {
    className: 'jsx-3308637222' + ' ' + 'Background_mask_wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '3308637222',
    css: '.Background_mask_wrapper.jsx-3308637222{width:100%;height:100%;position:relative;display:inline-block}.Background_mask_picture_wrapper.jsx-3308637222{position:absolute;top:0;width:100%;height:100%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FuaW1hdGlvbnMvYmFja2dyb3VuZE1hc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3NCLEFBTU8sV0FMTixPQU1OLEtBTFksQ0FNUCxXQUNDLE1BTlEsTUFPdEIsZUFOQSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbmltYXRpb25zL2JhY2tncm91bmRNYXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mZWF3ZWwvRGV2L2Jvb2stbWF0aGlsZGUtMjAxNyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4uL2hvbWVQcm9qZWN0cy9iYWNrZ3JvdW5kJ1xuXG5jb25zdCBCYWNrZ3JvdW5kTWFzayA9ICh7IGhpZGUsIHBpY3R1cmUxLCBwaWN0dXJlMiwgbWFza1dpZHRoID0gJzIwJScsIGN1cnJlbnQsIGFuaW1hdGluZyB9KSA9PiB7XG4gIGNvbnN0IHpJbmRleDEgPSBjdXJyZW50ID09PSAwID8gKGFuaW1hdGluZyA/IDAgOiAxKSA6IChhbmltYXRpbmcgPyAxIDogMClcbiAgY29uc3QgekluZGV4MiA9IGN1cnJlbnQgPT09IDEgPyAoYW5pbWF0aW5nID8gMCA6IDEpIDogKGFuaW1hdGluZyA/IDEgOiAwKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdCYWNrZ3JvdW5kX21hc2tfd3JhcHBlcic+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5CYWNrZ3JvdW5kX21hc2tfd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuQmFja2dyb3VuZF9tYXNrX3BpY3R1cmVfd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdCYWNrZ3JvdW5kX21hc2tfcGljdHVyZV93cmFwcGVyJz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDF9IHBpY3R1cmU9e3BpY3R1cmUxfSB3aWR0aD17Y3VycmVudCA9PT0gMCA/ICcxMDAlJyA6ICghYW5pbWF0aW5nID8gJzAlJyA6ICcxMDAlJyl9Lz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDF9IHJpZ2h0PScxMDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMCA/ICcyMDAlJyA6ICghYW5pbWF0aW5nID8gJzEwMCUnIDogJzIwMCUnKX0gcGljdHVyZT17cGljdHVyZTF9IC8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgxfSByaWdodD0nMjAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDAgPyAnMzAwJScgOiAoIWFuaW1hdGluZyA/ICcyMDAlJyA6ICczMDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUxfSAvPlxuICAgICAgICA8QmFja2dyb3VuZE1hc2tJdGVtIHpJbmRleD17ekluZGV4MX0gcmlnaHQ9JzMwMCUnIHdpZHRoPXtjdXJyZW50ID09PSAwID8gJzQwMCUnIDogKCFhbmltYXRpbmcgPyAnMzAwJScgOiAnNDAwJScpfSBwaWN0dXJlPXtwaWN0dXJlMX0gLz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDF9IHJpZ2h0PSc0MDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMCA/ICc1MDAlJyA6ICghYW5pbWF0aW5nID8gJzQwMCUnIDogJzUwMCUnKX0gcGljdHVyZT17cGljdHVyZTF9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J0JhY2tncm91bmRfbWFza19waWN0dXJlX3dyYXBwZXInPlxuICAgICAgICA8QmFja2dyb3VuZE1hc2tJdGVtIHpJbmRleD17ekluZGV4Mn0gcGljdHVyZT17cGljdHVyZTJ9IHdpZHRoPXtjdXJyZW50ID09PSAxID8gJzEwMCUnIDogKCFhbmltYXRpbmcgPyAnMCUnIDogJzEwMCUnKX0gLz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDJ9IHJpZ2h0PScxMDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMSA/ICcyMDAlJyA6ICghYW5pbWF0aW5nID8gJzEwMCUnIDogJzIwMCUnKX0gcGljdHVyZT17cGljdHVyZTJ9IC8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgyfSByaWdodD0nMjAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDEgPyAnMzAwJScgOiAoIWFuaW1hdGluZyA/ICcyMDAlJyA6ICczMDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUyfSAvPlxuICAgICAgICA8QmFja2dyb3VuZE1hc2tJdGVtIHpJbmRleD17ekluZGV4Mn0gcmlnaHQ9JzMwMCUnIHdpZHRoPXtjdXJyZW50ID09PSAxID8gJzQwMCUnIDogKCFhbmltYXRpbmcgPyAnMzAwJScgOiAnNDAwJScpfSBwaWN0dXJlPXtwaWN0dXJlMn0gLz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDJ9IHJpZ2h0PSc0MDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMSA/ICc1MDAlJyA6ICghYW5pbWF0aW5nID8gJzQwMCUnIDogJzUwMCUnKX0gcGljdHVyZT17cGljdHVyZTJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IEJhY2tncm91bmRNYXNrSXRlbSA9ICh7cmlnaHQsIHdpZHRoLCBwaWN0dXJlLCB6SW5kZXh9KSA9PlxuICA8ZGl2IHN0eWxlPXt7ekluZGV4fX0gY2xhc3NOYW1lPVwiQmFja2dyb3VuZF9tYXNrX2l0ZW1cIj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQmFja2dyb3VuZF9tYXNrX2l0ZW0ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8QmFja2dyb3VuZCB3aWR0aD17d2lkdGh9IHJpZ2h0PXtyaWdodH0gc3JjPXtwaWN0dXJlLnNyY30gIC8+XG4gIDwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kTWFza1xuIl19 */\n/*@ sourceURL=src/components/animations/backgroundMask.js */'
  }), _react2.default.createElement('div', {
    className: 'jsx-3308637222' + ' ' + 'Background_mask_picture_wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex1, picture: picture1, width: current === 0 ? '100%' : !animating ? '0%' : '100%', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex1, right: '100%', width: current === 0 ? '200%' : !animating ? '100%' : '200%', picture: picture1, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex1, right: '200%', width: current === 0 ? '300%' : !animating ? '200%' : '300%', picture: picture1, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex1, right: '300%', width: current === 0 ? '400%' : !animating ? '300%' : '400%', picture: picture1, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex1, right: '400%', width: current === 0 ? '500%' : !animating ? '400%' : '500%', picture: picture1, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement('div', {
    className: 'jsx-3308637222' + ' ' + 'Background_mask_picture_wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex2, picture: picture2, width: current === 1 ? '100%' : !animating ? '0%' : '100%', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex2, right: '100%', width: current === 1 ? '200%' : !animating ? '100%' : '200%', picture: picture2, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex2, right: '200%', width: current === 1 ? '300%' : !animating ? '200%' : '300%', picture: picture2, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex2, right: '300%', width: current === 1 ? '400%' : !animating ? '300%' : '400%', picture: picture2, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(BackgroundMaskItem, { zIndex: zIndex2, right: '400%', width: current === 1 ? '500%' : !animating ? '400%' : '500%', picture: picture2, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })));
};

var BackgroundMaskItem = function BackgroundMaskItem(_ref2) {
  var right = _ref2.right,
      width = _ref2.width,
      picture = _ref2.picture,
      zIndex = _ref2.zIndex;
  return _react2.default.createElement('div', { style: { zIndex: zIndex }, className: 'jsx-2054875534' + ' ' + 'Background_mask_item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '2054875534',
    css: '.Background_mask_item.jsx-2054875534{width:20%;max-width:20%;overflow:hidden;display:inline-block;height:100%;position:relative}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FuaW1hdGlvbnMvYmFja2dyb3VuZE1hc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUdtQixVQUNJLGNBQ0UsZ0JBQ0kscUJBQ1IsWUFDTSxrQkFDcEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvYW5pbWF0aW9ucy9iYWNrZ3JvdW5kTWFzay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZmVhd2VsL0Rldi9ib29rLW1hdGhpbGRlLTIwMTciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9ob21lUHJvamVjdHMvYmFja2dyb3VuZCdcblxuY29uc3QgQmFja2dyb3VuZE1hc2sgPSAoeyBoaWRlLCBwaWN0dXJlMSwgcGljdHVyZTIsIG1hc2tXaWR0aCA9ICcyMCUnLCBjdXJyZW50LCBhbmltYXRpbmcgfSkgPT4ge1xuICBjb25zdCB6SW5kZXgxID0gY3VycmVudCA9PT0gMCA/IChhbmltYXRpbmcgPyAwIDogMSkgOiAoYW5pbWF0aW5nID8gMSA6IDApXG4gIGNvbnN0IHpJbmRleDIgPSBjdXJyZW50ID09PSAxID8gKGFuaW1hdGluZyA/IDAgOiAxKSA6IChhbmltYXRpbmcgPyAxIDogMClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nQmFja2dyb3VuZF9tYXNrX3dyYXBwZXInPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuQmFja2dyb3VuZF9tYXNrX3dyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLkJhY2tncm91bmRfbWFza19waWN0dXJlX3dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nQmFja2dyb3VuZF9tYXNrX3BpY3R1cmVfd3JhcHBlcic+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgxfSBwaWN0dXJlPXtwaWN0dXJlMX0gd2lkdGg9e2N1cnJlbnQgPT09IDAgPyAnMTAwJScgOiAoIWFuaW1hdGluZyA/ICcwJScgOiAnMTAwJScpfS8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgxfSByaWdodD0nMTAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDAgPyAnMjAwJScgOiAoIWFuaW1hdGluZyA/ICcxMDAlJyA6ICcyMDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUxfSAvPlxuICAgICAgICA8QmFja2dyb3VuZE1hc2tJdGVtIHpJbmRleD17ekluZGV4MX0gcmlnaHQ9JzIwMCUnIHdpZHRoPXtjdXJyZW50ID09PSAwID8gJzMwMCUnIDogKCFhbmltYXRpbmcgPyAnMjAwJScgOiAnMzAwJScpfSBwaWN0dXJlPXtwaWN0dXJlMX0gLz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDF9IHJpZ2h0PSczMDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMCA/ICc0MDAlJyA6ICghYW5pbWF0aW5nID8gJzMwMCUnIDogJzQwMCUnKX0gcGljdHVyZT17cGljdHVyZTF9IC8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgxfSByaWdodD0nNDAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDAgPyAnNTAwJScgOiAoIWFuaW1hdGluZyA/ICc0MDAlJyA6ICc1MDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUxfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdCYWNrZ3JvdW5kX21hc2tfcGljdHVyZV93cmFwcGVyJz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDJ9IHBpY3R1cmU9e3BpY3R1cmUyfSB3aWR0aD17Y3VycmVudCA9PT0gMSA/ICcxMDAlJyA6ICghYW5pbWF0aW5nID8gJzAlJyA6ICcxMDAlJyl9IC8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgyfSByaWdodD0nMTAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDEgPyAnMjAwJScgOiAoIWFuaW1hdGluZyA/ICcxMDAlJyA6ICcyMDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUyfSAvPlxuICAgICAgICA8QmFja2dyb3VuZE1hc2tJdGVtIHpJbmRleD17ekluZGV4Mn0gcmlnaHQ9JzIwMCUnIHdpZHRoPXtjdXJyZW50ID09PSAxID8gJzMwMCUnIDogKCFhbmltYXRpbmcgPyAnMjAwJScgOiAnMzAwJScpfSBwaWN0dXJlPXtwaWN0dXJlMn0gLz5cbiAgICAgICAgPEJhY2tncm91bmRNYXNrSXRlbSB6SW5kZXg9e3pJbmRleDJ9IHJpZ2h0PSczMDAlJyB3aWR0aD17Y3VycmVudCA9PT0gMSA/ICc0MDAlJyA6ICghYW5pbWF0aW5nID8gJzMwMCUnIDogJzQwMCUnKX0gcGljdHVyZT17cGljdHVyZTJ9IC8+XG4gICAgICAgIDxCYWNrZ3JvdW5kTWFza0l0ZW0gekluZGV4PXt6SW5kZXgyfSByaWdodD0nNDAwJScgd2lkdGg9e2N1cnJlbnQgPT09IDEgPyAnNTAwJScgOiAoIWFuaW1hdGluZyA/ICc0MDAlJyA6ICc1MDAlJyl9IHBpY3R1cmU9e3BpY3R1cmUyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBCYWNrZ3JvdW5kTWFza0l0ZW0gPSAoe3JpZ2h0LCB3aWR0aCwgcGljdHVyZSwgekluZGV4fSkgPT5cbiAgPGRpdiBzdHlsZT17e3pJbmRleH19IGNsYXNzTmFtZT1cIkJhY2tncm91bmRfbWFza19pdGVtXCI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkJhY2tncm91bmRfbWFza19pdGVtIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPEJhY2tncm91bmQgd2lkdGg9e3dpZHRofSByaWdodD17cmlnaHR9IHNyYz17cGljdHVyZS5zcmN9ICAvPlxuICA8L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZE1hc2tcbiJdfQ== */\n/*@ sourceURL=src/components/animations/backgroundMask.js */'
  }), _react2.default.createElement(_background2.default, { width: width, right: right, src: picture.src, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
};

exports.default = BackgroundMask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2FuaW1hdGlvbnMvYmFja2dyb3VuZE1hc2suanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsIkJhY2tncm91bmRNYXNrIiwiaGlkZSIsInBpY3R1cmUxIiwicGljdHVyZTIiLCJtYXNrV2lkdGgiLCJjdXJyZW50IiwiYW5pbWF0aW5nIiwiekluZGV4MSIsInpJbmRleDIiLCJCYWNrZ3JvdW5kTWFza0l0ZW0iLCJyaWdodCIsIndpZHRoIiwicGljdHVyZSIsInpJbmRleCIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWdCOzs7Ozs7Ozs7QUFFdkIsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIscUJBQXlFO01BQXRFLEFBQXNFLFlBQXRFLEFBQXNFO01BQWhFLEFBQWdFLGdCQUFoRSxBQUFnRTtNQUF0RCxBQUFzRCxnQkFBdEQsQUFBc0Q7NEJBQTVDLEFBQTRDO01BQTVDLEFBQTRDLDJDQUFoQyxBQUFnQyxRQUFBO01BQXpCLEFBQXlCLGVBQXpCLEFBQXlCO01BQWhCLEFBQWdCLGlCQUFoQixBQUFnQixBQUM5Rjs7TUFBTSxVQUFVLFlBQUEsQUFBWSxJQUFLLFlBQUEsQUFBWSxJQUE3QixBQUFpQyxJQUFNLFlBQUEsQUFBWSxJQUFuRSxBQUF1RSxBQUN2RTtNQUFNLFVBQVUsWUFBQSxBQUFZLElBQUssWUFBQSxBQUFZLElBQTdCLEFBQWlDLElBQU0sWUFBQSxBQUFZLElBQW5FLEFBQXVFLEFBQ3ZFO3lCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUE7QUFBQTtBQUFBLEdBQUE7YUFBQTtTQUFBLEFBZUU7QUFmRixzQkFlRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLG1DQUNFLEFBQUMsc0JBQW1CLFFBQXBCLEFBQTRCLFNBQVMsU0FBckMsQUFBOEMsVUFBVSxPQUFPLFlBQUEsQUFBWSxJQUFaLEFBQWdCLFNBQVUsQ0FBQSxBQUFDLFlBQUQsQUFBYSxP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