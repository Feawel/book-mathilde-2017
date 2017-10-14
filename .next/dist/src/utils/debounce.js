"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _this = undefined,
    _arguments = arguments;

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = exports.debounce = function debounce(func, wait, immediate) {
	var timeout = void 0;
	return function () {
		var context = _this,
		    args = _arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9kZWJvdW5jZS5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEFBQ0E7QUFBTyxJQUFNLDhCQUFXLFNBQVgsQUFBVyxTQUFDLEFBQUQsTUFBTyxBQUFQLE1BQWEsQUFBYixXQUEyQixBQUNsRDtLQUFJLGVBQUosQUFDQTtRQUFPLFlBQU0sQUFDWjtNQUFNLFVBQU47TUFBc0IsT0FBdEIsQUFDQTtNQUFNLFFBQVEsU0FBUixBQUFRLFFBQU0sQUFDbkI7YUFBVSxBQUFWLEFBQ0E7T0FBSSxDQUFDLEFBQUwsV0FBZ0IsS0FBSyxBQUFMLE1BQVcsQUFBWCxTQUFvQixBQUFwQixBQUNoQjtBQUhELEFBSUE7TUFBTSxVQUFVLGFBQWEsQ0FBQyxBQUE5QixBQUNBO2VBQWEsQUFBYixBQUNBO1lBQVUsV0FBVyxBQUFYLE9BQWtCLEFBQWxCLEFBQVYsQUFDQTtNQUFJLEFBQUosU0FBYSxLQUFLLEFBQUwsTUFBVyxBQUFYLFNBQW9CLEFBQXBCLEFBQ2I7QUFWRCxBQVdBO0FBYk0iLCJmaWxlIjoiZGVib3VuY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZlYXdlbC9EZXYvYm9vay1tYXRoaWxkZS0yMDE3In0=