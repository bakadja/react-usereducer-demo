function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { c as _c } from "react/compiler-runtime";
import { useState, useReducer } from "react";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
var ACTION = {
  ADD: "add",
  SET_NAME: "setName"
};
function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD:
      console.log("add");
      return _objectSpread(_objectSpread({}, state), {}, {
        age: state.age + 1
      });
    case ACTION.SET_NAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        name: action.payload
      });
    default:
      throw new Error("Unknown action type: ".concat(action.type));
  }
}

/*
function init() {
  return {
    name: "john",
    age: 45
  }
}
  ui -> john, 40
*/

/*
function init(initialArg) {
  return initialArg // jane, 40
}

*/

function Counter(props) {
  var $ = _c(11);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = {
      name: "jane",
      age: 40
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var _useReducer = useReducer(reducer, t0),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = function t1() {
      return dispatch({
        type: "add"
      });
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var handleClick = t1;
  var t2;
  if ($[2] !== state.name) {
    t2 = /*#__PURE__*/_jsxs("h1", {
      children: ["Hello, my name is ", state.name, " \uD83D\uDC4B"]
    });
    $[2] = state.name;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var t3;
  if ($[4] !== state.age) {
    t3 = /*#__PURE__*/_jsxs("p", {
      children: ["I am  ", state.age, " years old"]
    });
    $[4] = state.age;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var t4;
  var t5;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("input", {
      placeholder: "Change your name...",
      onChange: function onChange(e) {
        return dispatch({
          type: ACTION.SET_NAME,
          payload: e.target.value
        });
      }
    });
    t5 = /*#__PURE__*/_jsx("button", {
      onClick: handleClick,
      children: "Increase my age"
    });
    $[6] = t4;
    $[7] = t5;
  } else {
    t4 = $[6];
    t5 = $[7];
  }
  var t6;
  if ($[8] !== t2 || $[9] !== t3) {
    t6 = /*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "card",
        children: [t2, t3, t4, t5]
      })
    });
    $[8] = t2;
    $[9] = t3;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  return t6;
}
export default function App() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx(Counter, {
      name: "React"
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}