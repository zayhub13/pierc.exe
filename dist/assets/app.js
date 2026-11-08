var jo = { exports: {} }, gr = {}, Po = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Df() {
  if (Pa) return D;
  Pa = 1;
  var k = Symbol.for("react.element"), T = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ce = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), we = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), U = Symbol.iterator;
  function W(f) {
    return f === null || typeof f != "object" ? null : (f = U && f[U] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var pe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, G = {};
  function Z(f, y, M) {
    this.props = f, this.context = y, this.refs = G, this.updater = M || pe;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(f, y) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, y, "setState");
  }, Z.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function yt() {
  }
  yt.prototype = Z.prototype;
  function at(f, y, M) {
    this.props = f, this.context = y, this.refs = G, this.updater = M || pe;
  }
  var qe = at.prototype = new yt();
  qe.constructor = at, ve(qe, Z.prototype), qe.isPureReactComponent = !0;
  var Ee = Array.isArray, be = Object.prototype.hasOwnProperty, Pe = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(f, y, M) {
    var F, B = {}, H = null, J = null;
    if (y != null) for (F in y.ref !== void 0 && (J = y.ref), y.key !== void 0 && (H = "" + y.key), y) be.call(y, F) && !Re.hasOwnProperty(F) && (B[F] = y[F]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = M;
    else if (1 < Y) {
      for (var ne = Array(Y), We = 0; We < Y; We++) ne[We] = arguments[We + 2];
      B.children = ne;
    }
    if (f && f.defaultProps) for (F in Y = f.defaultProps, Y) B[F] === void 0 && (B[F] = Y[F]);
    return { $$typeof: k, type: f, key: H, ref: J, props: B, _owner: Pe.current };
  }
  function jt(f, y) {
    return { $$typeof: k, type: f.type, key: y, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function gt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === k;
  }
  function Yt(f) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(M) {
      return y[M];
    });
  }
  var ct = /\/+/g;
  function Ae(f, y) {
    return typeof f == "object" && f !== null && f.key != null ? Yt("" + f.key) : y.toString(36);
  }
  function et(f, y, M, F, B) {
    var H = typeof f;
    (H === "undefined" || H === "boolean") && (f = null);
    var J = !1;
    if (f === null) J = !0;
    else switch (H) {
      case "string":
      case "number":
        J = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case k:
          case T:
            J = !0;
        }
    }
    if (J) return J = f, B = B(J), f = F === "" ? "." + Ae(J, 0) : F, Ee(B) ? (M = "", f != null && (M = f.replace(ct, "$&/") + "/"), et(B, y, M, "", function(We) {
      return We;
    })) : B != null && (gt(B) && (B = jt(B, M + (!B.key || J && J.key === B.key ? "" : ("" + B.key).replace(ct, "$&/") + "/") + f)), y.push(B)), 1;
    if (J = 0, F = F === "" ? "." : F + ":", Ee(f)) for (var Y = 0; Y < f.length; Y++) {
      H = f[Y];
      var ne = F + Ae(H, Y);
      J += et(H, y, M, ne, B);
    }
    else if (ne = W(f), typeof ne == "function") for (f = ne.call(f), Y = 0; !(H = f.next()).done; ) H = H.value, ne = F + Ae(H, Y++), J += et(H, y, M, ne, B);
    else if (H === "object") throw y = String(f), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return J;
  }
  function ft(f, y, M) {
    if (f == null) return f;
    var F = [], B = 0;
    return et(f, F, "", "", function(H) {
      return y.call(M, H, B++);
    }), F;
  }
  function Le(f) {
    if (f._status === -1) {
      var y = f._result;
      y = y(), y.then(function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = M);
      }, function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = M);
      }), f._status === -1 && (f._status = 0, f._result = y);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var oe = { current: null }, S = { transition: null }, L = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: S, ReactCurrentOwner: Pe };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return D.Children = { map: ft, forEach: function(f, y, M) {
    ft(f, function() {
      y.apply(this, arguments);
    }, M);
  }, count: function(f) {
    var y = 0;
    return ft(f, function() {
      y++;
    }), y;
  }, toArray: function(f) {
    return ft(f, function(y) {
      return y;
    }) || [];
  }, only: function(f) {
    if (!gt(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, D.Component = Z, D.Fragment = h, D.Profiler = A, D.PureComponent = at, D.StrictMode = b, D.Suspense = O, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, D.act = _, D.cloneElement = function(f, y, M) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var F = ve({}, f.props), B = f.key, H = f.ref, J = f._owner;
    if (y != null) {
      if (y.ref !== void 0 && (H = y.ref, J = Pe.current), y.key !== void 0 && (B = "" + y.key), f.type && f.type.defaultProps) var Y = f.type.defaultProps;
      for (ne in y) be.call(y, ne) && !Re.hasOwnProperty(ne) && (F[ne] = y[ne] === void 0 && Y !== void 0 ? Y[ne] : y[ne]);
    }
    var ne = arguments.length - 2;
    if (ne === 1) F.children = M;
    else if (1 < ne) {
      Y = Array(ne);
      for (var We = 0; We < ne; We++) Y[We] = arguments[We + 2];
      F.children = Y;
    }
    return { $$typeof: k, type: f.type, key: B, ref: H, props: F, _owner: J };
  }, D.createContext = function(f) {
    return f = { $$typeof: ce, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: Q, _context: f }, f.Consumer = f;
  }, D.createElement = Qe, D.createFactory = function(f) {
    var y = Qe.bind(null, f);
    return y.type = f, y;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(f) {
    return { $$typeof: fe, render: f };
  }, D.isValidElement = gt, D.lazy = function(f) {
    return { $$typeof: K, _payload: { _status: -1, _result: f }, _init: Le };
  }, D.memo = function(f, y) {
    return { $$typeof: we, type: f, compare: y === void 0 ? null : y };
  }, D.startTransition = function(f) {
    var y = S.transition;
    S.transition = {};
    try {
      f();
    } finally {
      S.transition = y;
    }
  }, D.unstable_act = _, D.useCallback = function(f, y) {
    return oe.current.useCallback(f, y);
  }, D.useContext = function(f) {
    return oe.current.useContext(f);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(f) {
    return oe.current.useDeferredValue(f);
  }, D.useEffect = function(f, y) {
    return oe.current.useEffect(f, y);
  }, D.useId = function() {
    return oe.current.useId();
  }, D.useImperativeHandle = function(f, y, M) {
    return oe.current.useImperativeHandle(f, y, M);
  }, D.useInsertionEffect = function(f, y) {
    return oe.current.useInsertionEffect(f, y);
  }, D.useLayoutEffect = function(f, y) {
    return oe.current.useLayoutEffect(f, y);
  }, D.useMemo = function(f, y) {
    return oe.current.useMemo(f, y);
  }, D.useReducer = function(f, y, M) {
    return oe.current.useReducer(f, y, M);
  }, D.useRef = function(f) {
    return oe.current.useRef(f);
  }, D.useState = function(f) {
    return oe.current.useState(f);
  }, D.useSyncExternalStore = function(f, y, M) {
    return oe.current.useSyncExternalStore(f, y, M);
  }, D.useTransition = function() {
    return oe.current.useTransition();
  }, D.version = "18.3.1", D;
}
var Ta;
function Lo() {
  return Ta || (Ta = 1, Po.exports = Df()), Po.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Ff() {
  if (za) return gr;
  za = 1;
  var k = Lo(), T = Symbol.for("react.element"), h = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, A = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(fe, O, we) {
    var K, U = {}, W = null, pe = null;
    we !== void 0 && (W = "" + we), O.key !== void 0 && (W = "" + O.key), O.ref !== void 0 && (pe = O.ref);
    for (K in O) b.call(O, K) && !Q.hasOwnProperty(K) && (U[K] = O[K]);
    if (fe && fe.defaultProps) for (K in O = fe.defaultProps, O) U[K] === void 0 && (U[K] = O[K]);
    return { $$typeof: T, type: fe, key: W, ref: pe, props: U, _owner: A.current };
  }
  return gr.Fragment = h, gr.jsx = ce, gr.jsxs = ce, gr;
}
var Ra;
function Uf() {
  return Ra || (Ra = 1, jo.exports = Ff()), jo.exports;
}
var c = Uf(), st = Lo(), Tl = {}, To = { exports: {} }, Ue = {}, zo = { exports: {} }, Ro = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function Af() {
  return La || (La = 1, (function(k) {
    function T(S, L) {
      var _ = S.length;
      S.push(L);
      e: for (; 0 < _; ) {
        var f = _ - 1 >>> 1, y = S[f];
        if (0 < A(y, L)) S[f] = L, S[_] = y, _ = f;
        else break e;
      }
    }
    function h(S) {
      return S.length === 0 ? null : S[0];
    }
    function b(S) {
      if (S.length === 0) return null;
      var L = S[0], _ = S.pop();
      if (_ !== L) {
        S[0] = _;
        e: for (var f = 0, y = S.length, M = y >>> 1; f < M; ) {
          var F = 2 * (f + 1) - 1, B = S[F], H = F + 1, J = S[H];
          if (0 > A(B, _)) H < y && 0 > A(J, B) ? (S[f] = J, S[H] = _, f = H) : (S[f] = B, S[F] = _, f = F);
          else if (H < y && 0 > A(J, _)) S[f] = J, S[H] = _, f = H;
          else break e;
        }
      }
      return L;
    }
    function A(S, L) {
      var _ = S.sortIndex - L.sortIndex;
      return _ !== 0 ? _ : S.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Q = performance;
      k.unstable_now = function() {
        return Q.now();
      };
    } else {
      var ce = Date, fe = ce.now();
      k.unstable_now = function() {
        return ce.now() - fe;
      };
    }
    var O = [], we = [], K = 1, U = null, W = 3, pe = !1, ve = !1, G = !1, Z = typeof setTimeout == "function" ? setTimeout : null, yt = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(S) {
      for (var L = h(we); L !== null; ) {
        if (L.callback === null) b(we);
        else if (L.startTime <= S) b(we), L.sortIndex = L.expirationTime, T(O, L);
        else break;
        L = h(we);
      }
    }
    function Ee(S) {
      if (G = !1, qe(S), !ve) if (h(O) !== null) ve = !0, Le(be);
      else {
        var L = h(we);
        L !== null && oe(Ee, L.startTime - S);
      }
    }
    function be(S, L) {
      ve = !1, G && (G = !1, yt(Qe), Qe = -1), pe = !0;
      var _ = W;
      try {
        for (qe(L), U = h(O); U !== null && (!(U.expirationTime > L) || S && !Yt()); ) {
          var f = U.callback;
          if (typeof f == "function") {
            U.callback = null, W = U.priorityLevel;
            var y = f(U.expirationTime <= L);
            L = k.unstable_now(), typeof y == "function" ? U.callback = y : U === h(O) && b(O), qe(L);
          } else b(O);
          U = h(O);
        }
        if (U !== null) var M = !0;
        else {
          var F = h(we);
          F !== null && oe(Ee, F.startTime - L), M = !1;
        }
        return M;
      } finally {
        U = null, W = _, pe = !1;
      }
    }
    var Pe = !1, Re = null, Qe = -1, jt = 5, gt = -1;
    function Yt() {
      return !(k.unstable_now() - gt < jt);
    }
    function ct() {
      if (Re !== null) {
        var S = k.unstable_now();
        gt = S;
        var L = !0;
        try {
          L = Re(!0, S);
        } finally {
          L ? Ae() : (Pe = !1, Re = null);
        }
      } else Pe = !1;
    }
    var Ae;
    if (typeof at == "function") Ae = function() {
      at(ct);
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), ft = et.port2;
      et.port1.onmessage = ct, Ae = function() {
        ft.postMessage(null);
      };
    } else Ae = function() {
      Z(ct, 0);
    };
    function Le(S) {
      Re = S, Pe || (Pe = !0, Ae());
    }
    function oe(S, L) {
      Qe = Z(function() {
        S(k.unstable_now());
      }, L);
    }
    k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, k.unstable_continueExecution = function() {
      ve || pe || (ve = !0, Le(be));
    }, k.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < S ? Math.floor(1e3 / S) : 5;
    }, k.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, k.unstable_getFirstCallbackNode = function() {
      return h(O);
    }, k.unstable_next = function(S) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = W;
      }
      var _ = W;
      W = L;
      try {
        return S();
      } finally {
        W = _;
      }
    }, k.unstable_pauseExecution = function() {
    }, k.unstable_requestPaint = function() {
    }, k.unstable_runWithPriority = function(S, L) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var _ = W;
      W = S;
      try {
        return L();
      } finally {
        W = _;
      }
    }, k.unstable_scheduleCallback = function(S, L, _) {
      var f = k.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? f + _ : f) : _ = f, S) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = _ + y, S = { id: K++, callback: L, priorityLevel: S, startTime: _, expirationTime: y, sortIndex: -1 }, _ > f ? (S.sortIndex = _, T(we, S), h(O) === null && S === h(we) && (G ? (yt(Qe), Qe = -1) : G = !0, oe(Ee, _ - f))) : (S.sortIndex = y, T(O, S), ve || pe || (ve = !0, Le(be))), S;
    }, k.unstable_shouldYield = Yt, k.unstable_wrapCallback = function(S) {
      var L = W;
      return function() {
        var _ = W;
        W = L;
        try {
          return S.apply(this, arguments);
        } finally {
          W = _;
        }
      };
    };
  })(Ro)), Ro;
}
var Ia;
function Wf() {
  return Ia || (Ia = 1, zo.exports = Af()), zo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function Vf() {
  if (Oa) return Ue;
  Oa = 1;
  var k = Lo(), T = Wf();
  function h(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var b = /* @__PURE__ */ new Set(), A = {};
  function Q(e, t) {
    ce(e, t), ce(e + "Capture", t);
  }
  function ce(e, t) {
    for (A[e] = t, e = 0; e < t.length; e++) b.add(t[e]);
  }
  var fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, U = {};
  function W(e) {
    return O.call(U, e) ? !0 : O.call(K, e) ? !1 : we.test(e) ? U[e] = !0 : (K[e] = !0, !1);
  }
  function pe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ve(e, t, n, r) {
    if (t === null || typeof t > "u" || pe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function G(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Z[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Z[t] = new G(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Z[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Z[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Z[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Z[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Z[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Z[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Z[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      yt,
      at
    );
    Z[t] = new G(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yt, at);
    Z[t] = new G(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yt, at);
    Z[t] = new G(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Z[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Z[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, t, n, r) {
    var l = Z.hasOwnProperty(t) ? Z[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ve(t, n, l, r) && (n = null), r || l === null ? W(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), jt = Symbol.for("react.profiler"), gt = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, f;
  function y(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var M = !1;
  function F(e, t) {
    if (!e || M) return "";
    M = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (var l = m.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
      }
    } finally {
      M = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = F(e.type, !1), e;
      case 11:
        return e = F(e.type.render, !1), e;
      case 1:
        return e = F(e.type, !0), e;
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case Pe:
        return "Portal";
      case jt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yt:
        return (e.displayName || "Context") + ".Consumer";
      case gt:
        return (e._context.displayName || "Context") + ".Provider";
      case ct:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ft:
        return t = e.displayName || null, t !== null ? t : H(e.type) || "Memo";
      case Le:
        t = e._payload, e = e._init;
        try {
          return H(e(t));
        } catch {
        }
    }
    return null;
  }
  function J(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return H(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Y(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function We(e) {
    var t = ne(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function xr(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Oo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Il(e, t) {
    var n = t.checked;
    return _({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Y(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Do(e, t) {
    t = t.checked, t != null && qe(e, "checked", t, !1);
  }
  function Ol(e, t) {
    Do(e, t);
    var n = Y(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Y(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Fo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || wr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var In = Array.isArray;
  function sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91));
    return _({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Uo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(h(92));
        if (In(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Ao(e, t) {
    var n = Y(t.value), r = Y(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Wo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Bo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function(e) {
    Aa.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Mn[t] = Mn[e];
    });
  });
  function Ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mn.hasOwnProperty(e) && Mn[e] ? ("" + t).trim() : t + "px";
  }
  function $o(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ho(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Wa = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ul(e, t) {
    if (t) {
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(h(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(h(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(h(62));
    }
  }
  function Al(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wl = null;
  function Vl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bl = null, an = null, cn = null;
  function Qo(e) {
    if (e = rr(e)) {
      if (typeof Bl != "function") throw Error(h(280));
      var t = e.stateNode;
      t && (t = $r(t), Bl(e.stateNode, e.type, t));
    }
  }
  function Ko(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e;
  }
  function Yo() {
    if (an) {
      var e = an, t = cn;
      if (cn = an = null, Qo(e), t) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
  }
  function Xo(e, t) {
    return e(t);
  }
  function Go() {
  }
  var Hl = !1;
  function Zo(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Xo(e, t, n);
    } finally {
      Hl = !1, (an !== null || cn !== null) && (Go(), Yo());
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $r(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(h(231, t, typeof n));
    return n;
  }
  var $l = !1;
  if (fe) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      $l = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    $l = !1;
  }
  function Va(e, t, n, r, l, i, o, u, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var Un = !1, Sr = null, Er = !1, Ql = null, Ba = { onError: function(e) {
    Un = !0, Sr = e;
  } };
  function Ha(e, t, n, r, l, i, o, u, s) {
    Un = !1, Sr = null, Va.apply(Ba, arguments);
  }
  function $a(e, t, n, r, l, i, o, u, s) {
    if (Ha.apply(this, arguments), Un) {
      if (Un) {
        var m = Sr;
        Un = !1, Sr = null;
      } else throw Error(h(198));
      Er || (Er = !0, Ql = m);
    }
  }
  function Xt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function qo(e) {
    if (Xt(e) !== e) throw Error(h(188));
  }
  function Qa(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(h(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return qo(l), e;
          if (i === r) return qo(l), t;
          i = i.sibling;
        }
        throw Error(h(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (u === r) {
            o = !0, r = l, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (u === r) {
              o = !0, r = i, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(h(189));
        }
      }
      if (n.alternate !== r) throw Error(h(190));
    }
    if (n.tag !== 3) throw Error(h(188));
    return n.stateNode.current === n ? e : t;
  }
  function bo(e) {
    return e = Qa(e), e !== null ? eu(e) : null;
  }
  function eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = eu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var tu = T.unstable_scheduleCallback, nu = T.unstable_cancelCallback, Ka = T.unstable_shouldYield, Ya = T.unstable_requestPaint, se = T.unstable_now, Xa = T.unstable_getCurrentPriorityLevel, Kl = T.unstable_ImmediatePriority, ru = T.unstable_UserBlockingPriority, Nr = T.unstable_NormalPriority, Ga = T.unstable_LowPriority, lu = T.unstable_IdlePriority, _r = null, dt = null;
  function Za(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function") try {
      dt.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : ba, Ja = Math.log, qa = Math.LN2;
  function ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ja(e) / qa | 0) | 0;
  }
  var Cr = 64, jr = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? r = An(u) : (i &= o, i !== 0 && (r = An(i)));
    } else o = n & ~l, o !== 0 ? r = An(o) : i !== 0 && (r = An(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - tt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ec(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function tc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - tt(i), u = 1 << o, s = l[o];
      s === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = ec(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var e = Cr;
    return Cr <<= 1, (Cr & 4194240) === 0 && (Cr = 64), e;
  }
  function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
  }
  function nc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Gl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var X = 0;
  function ou(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var uu, Zl, su, au, cu, Jl = !1, Tr = [], Pt = null, Tt = null, zt = null, Vn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Rt = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Pt = Hn(Pt, e, t, n, r, l), !0;
      case "dragenter":
        return Tt = Hn(Tt, e, t, n, r, l), !0;
      case "mouseover":
        return zt = Hn(zt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Vn.set(i, Hn(Vn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Bn.set(i, Hn(Bn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function du(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Jo(n), t !== null) {
            e.blockedOn = t, cu(e.priority, function() {
              su(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Wl = r, n.target.dispatchEvent(r), Wl = null;
      } else return t = rr(n), t !== null && Zl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function pu(e, t, n) {
    zr(e) && n.delete(t);
  }
  function ic() {
    Jl = !1, Pt !== null && zr(Pt) && (Pt = null), Tt !== null && zr(Tt) && (Tt = null), zt !== null && zr(zt) && (zt = null), Vn.forEach(pu), Bn.forEach(pu);
  }
  function $n(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, T.unstable_scheduleCallback(T.unstable_NormalPriority, ic)));
  }
  function Qn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Tr.length) {
      $n(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Pt !== null && $n(Pt, e), Tt !== null && $n(Tt, e), zt !== null && $n(zt, e), Vn.forEach(t), Bn.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) du(n), n.blockedOn === null && Rt.shift();
  }
  var fn = Ee.ReactCurrentBatchConfig, Rr = !0;
  function oc(e, t, n, r) {
    var l = X, i = fn.transition;
    fn.transition = null;
    try {
      X = 1, ql(e, t, n, r);
    } finally {
      X = l, fn.transition = i;
    }
  }
  function uc(e, t, n, r) {
    var l = X, i = fn.transition;
    fn.transition = null;
    try {
      X = 4, ql(e, t, n, r);
    } finally {
      X = l, fn.transition = i;
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = bl(e, t, n, r);
      if (l === null) vi(e, t, r, Lr, n), fu(e, r);
      else if (lc(l, e, t, n, r)) r.stopPropagation();
      else if (fu(e, r), t & 4 && -1 < rc.indexOf(e)) {
        for (; l !== null; ) {
          var i = rr(l);
          if (i !== null && uu(i), i = bl(e, t, n, r), i === null && vi(e, t, r, Lr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Lr = null;
  function bl(e, t, n, r) {
    if (Lr = null, e = Vl(r), e = Gt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Jo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Lr = e, null;
  }
  function mu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xa()) {
          case Kl:
            return 1;
          case ru:
            return 4;
          case Nr:
          case Ga:
            return 16;
          case lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Lt = null, ei = null, Ir = null;
  function hu() {
    if (Ir) return Ir;
    var e, t = ei, n = t.length, r, l = "value" in Lt ? Lt.value : Lt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Or(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function vu() {
    return !1;
  }
  function Ve(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Mr : vu, this.isPropagationStopped = vu, this;
    }
    return _(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mr);
    }, persist: function() {
    }, isPersistent: Mr }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ti = Ve(dn), Kn = _({}, dn, { view: 0, detail: 0 }), sc = Ve(Kn), ni, ri, Yn, Dr = _({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ii, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (ni = e.screenX - Yn.screenX, ri = e.screenY - Yn.screenY) : ri = ni = 0, Yn = e), ni);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ri;
  } }), yu = Ve(Dr), ac = _({}, Dr, { dataTransfer: 0 }), cc = Ve(ac), fc = _({}, Kn, { relatedTarget: 0 }), li = Ve(fc), dc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Ve(dc), mc = _({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hc = Ve(mc), vc = _({}, dn, { data: 0 }), gu = Ve(vc), yc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, gc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, xc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function wc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xc[e]) ? !!t[e] : !1;
  }
  function ii() {
    return wc;
  }
  var kc = _({}, Kn, { key: function(e) {
    if (e.key) {
      var t = yc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ii, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Sc = Ve(kc), Ec = _({}, Dr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xu = Ve(Ec), Nc = _({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ii }), _c = Ve(Nc), Cc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jc = Ve(Cc), Pc = _({}, Dr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tc = Ve(Pc), zc = [9, 13, 27, 32], oi = fe && "CompositionEvent" in window, Xn = null;
  fe && "documentMode" in document && (Xn = document.documentMode);
  var Rc = fe && "TextEvent" in window && !Xn, wu = fe && (!oi || Xn && 8 < Xn && 11 >= Xn), ku = " ", Su = !1;
  function Eu(e, t) {
    switch (e) {
      case "keyup":
        return zc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pn = !1;
  function Lc(e, t) {
    switch (e) {
      case "compositionend":
        return Nu(t);
      case "keypress":
        return t.which !== 32 ? null : (Su = !0, ku);
      case "textInput":
        return e = t.data, e === ku && Su ? null : e;
      default:
        return null;
    }
  }
  function Ic(e, t) {
    if (pn) return e === "compositionend" || !oi && Eu(e, t) ? (e = hu(), Ir = ei = Lt = null, pn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Oc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Oc[e.type] : t === "textarea";
  }
  function Cu(e, t, n, r) {
    Ko(r), t = Vr(t, "onChange"), 0 < t.length && (n = new ti("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Mc(e) {
    $u(e, 0);
  }
  function Fr(e) {
    var t = gn(e);
    if (Oo(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var ju = !1;
  if (fe) {
    var ui;
    if (fe) {
      var si = "oninput" in document;
      if (!si) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"), si = typeof Pu.oninput == "function";
      }
      ui = si;
    } else ui = !1;
    ju = ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    Gn && (Gn.detachEvent("onpropertychange", zu), Zn = Gn = null);
  }
  function zu(e) {
    if (e.propertyName === "value" && Fr(Zn)) {
      var t = [];
      Cu(t, Zn, e, Vl(e)), Zo(Mc, t);
    }
  }
  function Fc(e, t, n) {
    e === "focusin" ? (Tu(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", zu)) : e === "focusout" && Tu();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Zn);
  }
  function Ac(e, t) {
    if (e === "click") return Fr(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function Vc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var nt = typeof Object.is == "function" ? Object.is : Vc;
  function Jn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!O.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lu(e, t) {
    var n = Ru(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ru(n);
    }
  }
  function Iu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Iu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ou() {
    for (var e = window, t = wr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = wr(e.document);
    }
    return t;
  }
  function ai(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Bc(e) {
    var t = Ou(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Iu(n.ownerDocument.documentElement, n)) {
      if (r !== null && ai(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Lu(n, i);
          var o = Lu(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Hc = fe && "documentMode" in document && 11 >= document.documentMode, mn = null, ci = null, qn = null, fi = !1;
  function Mu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi || mn == null || mn !== wr(r) || (r = mn, "selectionStart" in r && ai(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Vr(ci, "onSelect"), 0 < r.length && (t = new ti("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ur(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, di = {}, Du = {};
  fe && (Du = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (di[e]) return di[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Du) return di[e] = t[n];
    return e;
  }
  var Fu = Ar("animationend"), Uu = Ar("animationiteration"), Au = Ar("animationstart"), Wu = Ar("transitionend"), Vu = /* @__PURE__ */ new Map(), Bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function It(e, t) {
    Vu.set(e, t), Q(t, [e]);
  }
  for (var pi = 0; pi < Bu.length; pi++) {
    var mi = Bu[pi], $c = mi.toLowerCase(), Qc = mi[0].toUpperCase() + mi.slice(1);
    It($c, "on" + Qc);
  }
  It(Fu, "onAnimationEnd"), It(Uu, "onAnimationIteration"), It(Au, "onAnimationStart"), It("dblclick", "onDoubleClick"), It("focusin", "onFocus"), It("focusout", "onBlur"), It(Wu, "onTransitionEnd"), ce("onMouseEnter", ["mouseout", "mouseover"]), ce("onMouseLeave", ["mouseout", "mouseover"]), ce("onPointerEnter", ["pointerout", "pointerover"]), ce("onPointerLeave", ["pointerout", "pointerover"]), Q("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Q("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Q("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Hu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $a(r, t, void 0, e), e.currentTarget = null;
  }
  function $u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], s = u.instance, m = u.currentTarget;
          if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
          Hu(l, u, m), i = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (u = r[o], s = u.instance, m = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
          Hu(l, u, m), i = s;
        }
      }
    }
    if (Er) throw e = Ql, Er = !1, Ql = null, e;
  }
  function ee(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Qu(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    t && (r |= 4), Qu(n, e, r, t);
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Wr]) {
      e[Wr] = !0, b.forEach(function(n) {
        n !== "selectionchange" && (Kc.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || (t[Wr] = !0, hi("selectionchange", !1, t));
    }
  }
  function Qu(e, t, n, r) {
    switch (mu(t)) {
      case 1:
        var l = oc;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = ql;
    }
    n = l.bind(null, t, n, e), l = void 0, !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function vi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; u !== null; ) {
          if (o = Gt(u), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Zo(function() {
      var m = i, g = Vl(n), x = [];
      e: {
        var v = Vu.get(e);
        if (v !== void 0) {
          var E = ti, C = e;
          switch (e) {
            case "keypress":
              if (Or(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Sc;
              break;
            case "focusin":
              C = "focus", E = li;
              break;
            case "focusout":
              C = "blur", E = li;
              break;
            case "beforeblur":
            case "afterblur":
              E = li;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = yu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = _c;
              break;
            case Fu:
            case Uu:
            case Au:
              E = pc;
              break;
            case Wu:
              E = jc;
              break;
            case "scroll":
              E = sc;
              break;
            case "wheel":
              E = Tc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = xu;
          }
          var j = (t & 4) !== 0, ae = !j && e === "scroll", d = j ? v !== null ? v + "Capture" : null : v;
          j = [];
          for (var a = m, p; a !== null; ) {
            p = a;
            var w = p.stateNode;
            if (p.tag === 5 && w !== null && (p = w, d !== null && (w = Dn(a, d), w != null && j.push(tr(a, w, p)))), ae) break;
            a = a.return;
          }
          0 < j.length && (v = new E(v, C, null, n, g), x.push({ event: v, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", v && n !== Wl && (C = n.relatedTarget || n.fromElement) && (Gt(C) || C[xt])) break e;
          if ((E || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, E ? (C = n.relatedTarget || n.toElement, E = m, C = C ? Gt(C) : null, C !== null && (ae = Xt(C), C !== ae || C.tag !== 5 && C.tag !== 6) && (C = null)) : (E = null, C = m), E !== C)) {
            if (j = yu, w = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (j = xu, w = "onPointerLeave", d = "onPointerEnter", a = "pointer"), ae = E == null ? v : gn(E), p = C == null ? v : gn(C), v = new j(w, a + "leave", E, n, g), v.target = ae, v.relatedTarget = p, w = null, Gt(g) === m && (j = new j(d, a + "enter", C, n, g), j.target = p, j.relatedTarget = ae, w = j), ae = w, E && C) t: {
              for (j = E, d = C, a = 0, p = j; p; p = vn(p)) a++;
              for (p = 0, w = d; w; w = vn(w)) p++;
              for (; 0 < a - p; ) j = vn(j), a--;
              for (; 0 < p - a; ) d = vn(d), p--;
              for (; a--; ) {
                if (j === d || d !== null && j === d.alternate) break t;
                j = vn(j), d = vn(d);
              }
              j = null;
            }
            else j = null;
            E !== null && Ku(x, v, E, j, !1), C !== null && ae !== null && Ku(x, ae, C, j, !0);
          }
        }
        e: {
          if (v = m ? gn(m) : window, E = v.nodeName && v.nodeName.toLowerCase(), E === "select" || E === "input" && v.type === "file") var P = Dc;
          else if (_u(v)) if (ju) P = Wc;
          else {
            P = Uc;
            var z = Fc;
          }
          else (E = v.nodeName) && E.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = Ac);
          if (P && (P = P(e, m))) {
            Cu(x, P, n, g);
            break e;
          }
          z && z(e, v, m), e === "focusout" && (z = v._wrapperState) && z.controlled && v.type === "number" && Ml(v, "number", v.value);
        }
        switch (z = m ? gn(m) : window, e) {
          case "focusin":
            (_u(z) || z.contentEditable === "true") && (mn = z, ci = m, qn = null);
            break;
          case "focusout":
            qn = ci = mn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fi = !1, Mu(x, n, g);
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Mu(x, n, g);
        }
        var R;
        if (oi) e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
        else pn ? Eu(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
        I && (wu && n.locale !== "ko" && (pn || I !== "onCompositionStart" ? I === "onCompositionEnd" && pn && (R = hu()) : (Lt = g, ei = "value" in Lt ? Lt.value : Lt.textContent, pn = !0)), z = Vr(m, I), 0 < z.length && (I = new gu(I, e, null, n, g), x.push({ event: I, listeners: z }), R ? I.data = R : (R = Nu(n), R !== null && (I.data = R)))), (R = Rc ? Lc(e, n) : Ic(e, n)) && (m = Vr(m, "onBeforeInput"), 0 < m.length && (g = new gu("onBeforeInput", "beforeinput", null, n, g), x.push({ event: g, listeners: m }), g.data = R));
      }
      $u(x, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(tr(e, i, l)), i = Dn(e, t), i != null && r.push(tr(e, i, l))), e = e.return;
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ku(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n, s = u.alternate, m = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && m !== null && (u = m, l ? (s = Dn(n, i), s != null && o.unshift(tr(n, s, u))) : l || (s = Dn(n, i), s != null && o.push(tr(n, s, u)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Yc = /\r\n?/g, Xc = /\u0000|\uFFFD/g;
  function Yu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yc, `
`).replace(Xc, "");
  }
  function Br(e, t, n) {
    if (t = Yu(t), Yu(e) !== t && n) throw Error(h(425));
  }
  function Hr() {
  }
  var yi = null, gi = null;
  function xi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var wi = typeof setTimeout == "function" ? setTimeout : void 0, Gc = typeof clearTimeout == "function" ? clearTimeout : void 0, Xu = typeof Promise == "function" ? Promise : void 0, Zc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xu < "u" ? function(e) {
    return Xu.resolve(null).then(e).catch(Jc);
  } : wi;
  function Jc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ki(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Gu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2), pt = "__reactFiber$" + yn, nr = "__reactProps$" + yn, xt = "__reactContainer$" + yn, Si = "__reactEvents$" + yn, qc = "__reactListeners$" + yn, bc = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[pt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gu(e); e !== null; ) {
          if (n = e[pt]) return n;
          e = Gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[pt] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(h(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var Ei = [], xn = -1;
  function Mt(e) {
    return { current: e };
  }
  function te(e) {
    0 > xn || (e.current = Ei[xn], Ei[xn] = null, xn--);
  }
  function q(e, t) {
    xn++, Ei[xn] = e.current, e.current = t;
  }
  var Dt = {}, Ne = Mt(Dt), Ie = Mt(!1), Zt = Dt;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Oe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    te(Ie), te(Ne);
  }
  function Zu(e, t, n) {
    if (Ne.current !== Dt) throw Error(h(168));
    q(Ne, t), q(Ie, n);
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(h(108, J(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, Zt = Ne.current, q(Ne, e), q(Ie, Ie.current), !0;
  }
  function qu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(h(169));
    n ? (e = Ju(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, te(Ie), te(Ne), q(Ne, e)) : te(Ie), q(Ie, n);
  }
  var wt = null, Yr = !1, Ni = !1;
  function bu(e) {
    wt === null ? wt = [e] : wt.push(e);
  }
  function ef(e) {
    Yr = !0, bu(e);
  }
  function Ft() {
    if (!Ni && wt !== null) {
      Ni = !0;
      var e = 0, t = X;
      try {
        var n = wt;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wt = null, Yr = !1;
      } catch (l) {
        throw wt !== null && (wt = wt.slice(e + 1)), tu(Kl, Ft), l;
      } finally {
        X = t, Ni = !1;
      }
    }
    return null;
  }
  var kn = [], Sn = 0, Xr = null, Gr = 0, Ke = [], Ye = 0, Jt = null, kt = 1, St = "";
  function qt(e, t) {
    kn[Sn++] = Gr, kn[Sn++] = Xr, Xr = e, Gr = t;
  }
  function es(e, t, n) {
    Ke[Ye++] = kt, Ke[Ye++] = St, Ke[Ye++] = Jt, Jt = e;
    var r = kt;
    e = St;
    var l = 32 - tt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, kt = 1 << 32 - tt(t) + l | n << l | r, St = i + e;
    } else kt = 1 << i | n << l | r, St = e;
  }
  function _i(e) {
    e.return !== null && (qt(e, 1), es(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Xr; ) Xr = kn[--Sn], kn[Sn] = null, Gr = kn[--Sn], kn[Sn] = null;
    for (; e === Jt; ) Jt = Ke[--Ye], Ke[Ye] = null, St = Ke[--Ye], Ke[Ye] = null, kt = Ke[--Ye], Ke[Ye] = null;
  }
  var Be = null, He = null, re = !1, rt = null;
  function ts(e, t) {
    var n = Je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ns(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, He = Ot(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, He = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: kt, overflow: St } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, He = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ji(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (re) {
      var t = He;
      if (t) {
        var n = t;
        if (!ns(e, t)) {
          if (ji(e)) throw Error(h(418));
          t = Ot(n.nextSibling);
          var r = Be;
          t && ns(e, t) ? ts(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Be = e);
        }
      } else {
        if (ji(e)) throw Error(h(418));
        e.flags = e.flags & -4097 | 2, re = !1, Be = e;
      }
    }
  }
  function rs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Be = e;
  }
  function Zr(e) {
    if (e !== Be) return !1;
    if (!re) return rs(e), re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)), t && (t = He)) {
      if (ji(e)) throw ls(), Error(h(418));
      for (; t; ) ts(e, t), t = Ot(t.nextSibling);
    }
    if (rs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Be ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ls() {
    for (var e = He; e; ) e = Ot(e.nextSibling);
  }
  function En() {
    He = Be = null, re = !1;
  }
  function Ti(e) {
    rt === null ? rt = [e] : rt.push(e);
  }
  var tf = Ee.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(h(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(h(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var u = l.refs;
          o === null ? delete u[i] : u[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(h(284));
      if (!n._owner) throw Error(h(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function is(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
    function t(d, a) {
      if (e) {
        var p = d.deletions;
        p === null ? (d.deletions = [a], d.flags |= 16) : p.push(a);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), a = a.sibling;
      return null;
    }
    function r(d, a) {
      for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
      return d;
    }
    function l(d, a) {
      return d = Qt(d, a), d.index = 0, d.sibling = null, d;
    }
    function i(d, a, p) {
      return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < a ? (d.flags |= 2, a) : p) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
    }
    function o(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, a, p, w) {
      return a === null || a.tag !== 6 ? (a = ko(p, d.mode, w), a.return = d, a) : (a = l(a, p), a.return = d, a);
    }
    function s(d, a, p, w) {
      var P = p.type;
      return P === Re ? g(d, a, p.props.children, w, p.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Le && is(P) === a.type) ? (w = l(a, p.props), w.ref = lr(d, a, p), w.return = d, w) : (w = kl(p.type, p.key, p.props, null, d.mode, w), w.ref = lr(d, a, p), w.return = d, w);
    }
    function m(d, a, p, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = So(p, d.mode, w), a.return = d, a) : (a = l(a, p.children || []), a.return = d, a);
    }
    function g(d, a, p, w, P) {
      return a === null || a.tag !== 7 ? (a = un(p, d.mode, w, P), a.return = d, a) : (a = l(a, p), a.return = d, a);
    }
    function x(d, a, p) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = ko("" + a, d.mode, p), a.return = d, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return p = kl(a.type, a.key, a.props, null, d.mode, p), p.ref = lr(d, null, a), p.return = d, p;
          case Pe:
            return a = So(a, d.mode, p), a.return = d, a;
          case Le:
            var w = a._init;
            return x(d, w(a._payload), p);
        }
        if (In(a) || L(a)) return a = un(a, d.mode, p, null), a.return = d, a;
        Jr(d, a);
      }
      return null;
    }
    function v(d, a, p, w) {
      var P = a !== null ? a.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number") return P !== null ? null : u(d, a, "" + p, w);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case be:
            return p.key === P ? s(d, a, p, w) : null;
          case Pe:
            return p.key === P ? m(d, a, p, w) : null;
          case Le:
            return P = p._init, v(
              d,
              a,
              P(p._payload),
              w
            );
        }
        if (In(p) || L(p)) return P !== null ? null : g(d, a, p, w, null);
        Jr(d, p);
      }
      return null;
    }
    function E(d, a, p, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(p) || null, u(a, d, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return d = d.get(w.key === null ? p : w.key) || null, s(a, d, w, P);
          case Pe:
            return d = d.get(w.key === null ? p : w.key) || null, m(a, d, w, P);
          case Le:
            var z = w._init;
            return E(d, a, p, z(w._payload), P);
        }
        if (In(w) || L(w)) return d = d.get(p) || null, g(a, d, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function C(d, a, p, w) {
      for (var P = null, z = null, R = a, I = a = 0, xe = null; R !== null && I < p.length; I++) {
        R.index > I ? (xe = R, R = null) : xe = R.sibling;
        var $ = v(d, R, p[I], w);
        if ($ === null) {
          R === null && (R = xe);
          break;
        }
        e && R && $.alternate === null && t(d, R), a = i($, a, I), z === null ? P = $ : z.sibling = $, z = $, R = xe;
      }
      if (I === p.length) return n(d, R), re && qt(d, I), P;
      if (R === null) {
        for (; I < p.length; I++) R = x(d, p[I], w), R !== null && (a = i(R, a, I), z === null ? P = R : z.sibling = R, z = R);
        return re && qt(d, I), P;
      }
      for (R = r(d, R); I < p.length; I++) xe = E(R, d, I, p[I], w), xe !== null && (e && xe.alternate !== null && R.delete(xe.key === null ? I : xe.key), a = i(xe, a, I), z === null ? P = xe : z.sibling = xe, z = xe);
      return e && R.forEach(function(Kt) {
        return t(d, Kt);
      }), re && qt(d, I), P;
    }
    function j(d, a, p, w) {
      var P = L(p);
      if (typeof P != "function") throw Error(h(150));
      if (p = P.call(p), p == null) throw Error(h(151));
      for (var z = P = null, R = a, I = a = 0, xe = null, $ = p.next(); R !== null && !$.done; I++, $ = p.next()) {
        R.index > I ? (xe = R, R = null) : xe = R.sibling;
        var Kt = v(d, R, $.value, w);
        if (Kt === null) {
          R === null && (R = xe);
          break;
        }
        e && R && Kt.alternate === null && t(d, R), a = i(Kt, a, I), z === null ? P = Kt : z.sibling = Kt, z = Kt, R = xe;
      }
      if ($.done) return n(
        d,
        R
      ), re && qt(d, I), P;
      if (R === null) {
        for (; !$.done; I++, $ = p.next()) $ = x(d, $.value, w), $ !== null && (a = i($, a, I), z === null ? P = $ : z.sibling = $, z = $);
        return re && qt(d, I), P;
      }
      for (R = r(d, R); !$.done; I++, $ = p.next()) $ = E(R, d, I, $.value, w), $ !== null && (e && $.alternate !== null && R.delete($.key === null ? I : $.key), a = i($, a, I), z === null ? P = $ : z.sibling = $, z = $);
      return e && R.forEach(function(Mf) {
        return t(d, Mf);
      }), re && qt(d, I), P;
    }
    function ae(d, a, p, w) {
      if (typeof p == "object" && p !== null && p.type === Re && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case be:
            e: {
              for (var P = p.key, z = a; z !== null; ) {
                if (z.key === P) {
                  if (P = p.type, P === Re) {
                    if (z.tag === 7) {
                      n(d, z.sibling), a = l(z, p.props.children), a.return = d, d = a;
                      break e;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Le && is(P) === z.type) {
                    n(d, z.sibling), a = l(z, p.props), a.ref = lr(d, z, p), a.return = d, d = a;
                    break e;
                  }
                  n(d, z);
                  break;
                } else t(d, z);
                z = z.sibling;
              }
              p.type === Re ? (a = un(p.props.children, d.mode, w, p.key), a.return = d, d = a) : (w = kl(p.type, p.key, p.props, null, d.mode, w), w.ref = lr(d, a, p), w.return = d, d = w);
            }
            return o(d);
          case Pe:
            e: {
              for (z = p.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                  n(d, a.sibling), a = l(a, p.children || []), a.return = d, d = a;
                  break e;
                } else {
                  n(d, a);
                  break;
                }
                else t(d, a);
                a = a.sibling;
              }
              a = So(p, d.mode, w), a.return = d, d = a;
            }
            return o(d);
          case Le:
            return z = p._init, ae(d, a, z(p._payload), w);
        }
        if (In(p)) return C(d, a, p, w);
        if (L(p)) return j(d, a, p, w);
        Jr(d, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, p), a.return = d, d = a) : (n(d, a), a = ko(p, d.mode, w), a.return = d, d = a), o(d)) : n(d, a);
    }
    return ae;
  }
  var Nn = os(!0), us = os(!1), qr = Mt(null), br = null, _n = null, zi = null;
  function Ri() {
    zi = _n = br = null;
  }
  function Li(e) {
    var t = qr.current;
    te(qr), e._currentValue = t;
  }
  function Ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Cn(e, t) {
    br = e, zi = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Me = !0), e.firstContext = null);
  }
  function Xe(e) {
    var t = e._currentValue;
    if (zi !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
      if (br === null) throw Error(h(308));
      _n = e, br.dependencies = { lanes: 0, firstContext: e };
    } else _n = _n.next = e;
    return t;
  }
  var bt = null;
  function Oi(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Oi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Et(e, r);
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Mi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function as(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (V & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Et(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Oi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Et(e, n);
  }
  function el(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
    }
  }
  function cs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, m = s.next;
      s.next = null, o === null ? i = m : o.next = m, o = s;
      var g = e.alternate;
      g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== o && (u === null ? g.firstBaseUpdate = m : u.next = m, g.lastBaseUpdate = s));
    }
    if (i !== null) {
      var x = l.baseState;
      o = 0, g = m = s = null, u = i;
      do {
        var v = u.lane, E = u.eventTime;
        if ((r & v) === v) {
          g !== null && (g = g.next = {
            eventTime: E,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var C = e, j = u;
            switch (v = t, E = n, j.tag) {
              case 1:
                if (C = j.payload, typeof C == "function") {
                  x = C.call(E, x, v);
                  break e;
                }
                x = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = j.payload, v = typeof C == "function" ? C.call(E, x, v) : C, v == null) break e;
                x = _({}, x, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
        } else E = { eventTime: E, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (m = g = E, s = x) : g = g.next = E, o |= v;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (g === null && (s = x), l.baseState = s, l.firstBaseUpdate = m, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      nn |= o, e.lanes = o, e.memoizedState = x;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(h(191, l));
        l.call(r);
      }
    }
  }
  var ir = {}, mt = Mt(ir), or = Mt(ir), ur = Mt(ir);
  function en(e) {
    if (e === ir) throw Error(h(174));
    return e;
  }
  function Di(e, t) {
    switch (q(ur, t), q(or, e), q(mt, ir), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fl(t, e);
    }
    te(mt), q(mt, t);
  }
  function jn() {
    te(mt), te(or), te(ur);
  }
  function ds(e) {
    en(ur.current);
    var t = en(mt.current), n = Fl(t, e.type);
    t !== n && (q(or, e), q(mt, n));
  }
  function Fi(e) {
    or.current === e && (te(mt), te(or));
  }
  var le = Mt(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ui = [];
  function Ai() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var rl = Ee.ReactCurrentDispatcher, Wi = Ee.ReactCurrentBatchConfig, tn = 0, ie = null, me = null, ye = null, ll = !1, sr = !1, ar = 0, nf = 0;
  function _e() {
    throw Error(h(321));
  }
  function Vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (tn = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? uf : sf, e = n(r, l), sr) {
      i = 0;
      do {
        if (sr = !1, ar = 0, 25 <= i) throw Error(h(301));
        i += 1, ye = me = null, t.updateQueue = null, rl.current = af, e = n(r, l);
      } while (sr);
    }
    if (rl.current = ul, t = me !== null && me.next !== null, tn = 0, ye = me = ie = null, ll = !1, t) throw Error(h(300));
    return e;
  }
  function Hi() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ye === null ? ie.memoizedState = ye = e : ye = ye.next = e, ye;
  }
  function Ge() {
    if (me === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ye === null ? ie.memoizedState : ye.next;
    if (t !== null) ye = t, me = e;
    else {
      if (e === null) throw Error(h(310));
      me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ye === null ? ie.memoizedState = ye = e : ye = ye.next = e;
    }
    return ye;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $i(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = me, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var u = o = null, s = null, m = i;
      do {
        var g = m.lane;
        if ((tn & g) === g) s !== null && (s = s.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
        else {
          var x = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          };
          s === null ? (u = s = x, o = r) : s = s.next = x, ie.lanes |= g, nn |= g;
        }
        m = m.next;
      } while (m !== null && m !== i);
      s === null ? o = r : s.next = u, nt(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, ie.lanes |= i, nn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qi(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      nt(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function ps() {
  }
  function ms(e, t) {
    var n = ie, r = Ge(), l = t(), i = !nt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Me = !0), r = r.queue, Ki(ys.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
      if (n.flags |= 2048, fr(9, vs.bind(null, n, r, l, t), void 0, null), ge === null) throw Error(h(349));
      (tn & 30) !== 0 || hs(n, t, l);
    }
    return l;
  }
  function hs(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, gs(t) && xs(e);
  }
  function ys(e, t, n) {
    return n(function() {
      gs(t) && xs(e);
    });
  }
  function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function xs(e) {
    var t = Et(e, 1);
    t !== null && ut(t, e, 1, -1);
  }
  function ws(e) {
    var t = ht();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = of.bind(null, ie, e), [t.memoizedState, e];
  }
  function fr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ks() {
    return Ge().memoizedState;
  }
  function il(e, t, n, r) {
    var l = ht();
    ie.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ol(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (i = o.destroy, r !== null && Vi(r, o.deps)) {
        l.memoizedState = fr(t, n, i, r);
        return;
      }
    }
    ie.flags |= e, l.memoizedState = fr(1 | t, n, i, r);
  }
  function Ss(e, t) {
    return il(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return ol(2048, 8, e, t);
  }
  function Es(e, t) {
    return ol(4, 2, e, t);
  }
  function Ns(e, t) {
    return ol(4, 4, e, t);
  }
  function _s(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Cs(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(4, 4, _s.bind(null, t, e), n);
  }
  function Yi() {
  }
  function js(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ps(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ts(e, t, n) {
    return (tn & 21) === 0 ? (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n) : (nt(n, t) || (n = iu(), ie.lanes |= n, nn |= n, e.baseState = !0), t);
  }
  function rf(e, t) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wi.transition;
    Wi.transition = {};
    try {
      e(!1), t();
    } finally {
      X = n, Wi.transition = r;
    }
  }
  function zs() {
    return Ge().memoizedState;
  }
  function lf(e, t, n) {
    var r = Ht(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ls(t, n);
    else if (n = ss(e, t, n, r), n !== null) {
      var l = ze();
      ut(n, e, r, l), Is(n, t, r);
    }
  }
  function of(e, t, n) {
    var r = Ht(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ls(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, nt(u, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Oi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = ss(e, t, l, r), n !== null && (l = ze(), ut(n, e, r, l), Is(n, t, r));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Ls(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Is(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n);
    }
  }
  var ul = { readContext: Xe, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, uf = { readContext: Xe, useCallback: function(e, t) {
    return ht().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Xe, useEffect: Ss, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(
      4194308,
      4,
      _s.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return il(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return il(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = ht();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = ht();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lf.bind(null, ie, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = ht();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ws, useDebugValue: Yi, useDeferredValue: function(e) {
    return ht().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), t = e[0];
    return e = rf.bind(null, e[1]), ht().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ie, l = ht();
    if (re) {
      if (n === void 0) throw Error(h(407));
      n = n();
    } else {
      if (n = t(), ge === null) throw Error(h(349));
      (tn & 30) !== 0 || hs(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Ss(ys.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, fr(9, vs.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = ht(), t = ge.identifierPrefix;
    if (re) {
      var n = St, r = kt;
      n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = nf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: Xe,
    useCallback: js,
    useContext: Xe,
    useEffect: Ki,
    useImperativeHandle: Cs,
    useInsertionEffect: Es,
    useLayoutEffect: Ns,
    useMemo: Ps,
    useReducer: $i,
    useRef: ks,
    useState: function() {
      return $i(cr);
    },
    useDebugValue: Yi,
    useDeferredValue: function(e) {
      var t = Ge();
      return Ts(t, me.memoizedState, e);
    },
    useTransition: function() {
      var e = $i(cr)[0], t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: ms,
    useId: zs,
    unstable_isNewReconciler: !1
  }, af = { readContext: Xe, useCallback: js, useContext: Xe, useEffect: Ki, useImperativeHandle: Cs, useInsertionEffect: Es, useLayoutEffect: Ns, useMemo: Ps, useReducer: Qi, useRef: ks, useState: function() {
    return Qi(cr);
  }, useDebugValue: Yi, useDeferredValue: function(e) {
    var t = Ge();
    return me === null ? t.memoizedState = e : Ts(t, me.memoizedState, e);
  }, useTransition: function() {
    var e = Qi(cr)[0], t = Ge().memoizedState;
    return [e, t];
  }, useMutableSource: ps, useSyncExternalStore: ms, useId: zs, unstable_isNewReconciler: !1 };
  function lt(e, t) {
    if (e && e.defaultProps) {
      t = _({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : _({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(), l = Ht(e), i = Nt(r, l);
    i.payload = t, n != null && (i.callback = n), t = At(e, i, l), t !== null && (ut(t, e, l, r), el(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(), l = Ht(e), i = Nt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = At(e, i, l), t !== null && (ut(t, e, l, r), el(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ze(), r = Ht(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (ut(t, e, r, n), el(t, e, r));
  } };
  function Os(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, i) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Dt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = Xe(i) : (l = Oe(t) ? Zt : Ne.current, r = t.contextTypes, i = (r = r != null) ? wn(e, l) : Dt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Ds(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Gi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Xe(i) : (i = Oe(t) ? Zt : Ne.current, l.context = wn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Xi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && sl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pn(e, t) {
    try {
      var n = "", r = t;
      do
        n += B(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ji(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fs(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, po = r), Ji(e, t);
    }, n;
  }
  function Us(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ji(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Ji(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function As(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Nf.bind(null, e, t, n), t.then(e, e));
  }
  function Ws(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vs(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var ff = Ee.ReactCurrentOwner, Me = !1;
  function Te(e, t, n, r) {
    t.child = e === null ? us(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Cn(t, l), r = Bi(e, t, n, r, i, l), n = Hi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (re && n && _i(t), t.flags |= 1, Te(e, t, r, l), t.child);
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !wo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, $s(e, t, i, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(o, r) && e.ref === t.ref) return _t(e, t, l);
    }
    return t.flags |= 1, e = Qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $s(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Jn(i, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Me = !0);
      else return t.lanes = e.lanes, _t(e, t, l);
    }
    return qi(e, t, n, r, l);
  }
  function Qs(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, q(zn, $e), $e |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, q(zn, $e), $e |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, q(zn, $e), $e |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, q(zn, $e), $e |= r;
    return Te(e, t, l, n), t.child;
  }
  function Ks(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function qi(e, t, n, r, l) {
    var i = Oe(n) ? Zt : Ne.current;
    return i = wn(t, i), Cn(t, l), n = Bi(e, t, n, r, i, l), r = Hi(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (re && r && _i(t), t.flags |= 1, Te(e, t, n, l), t.child);
  }
  function Ys(e, t, n, r, l) {
    if (Oe(n)) {
      var i = !0;
      Kr(t);
    } else i = !1;
    if (Cn(t, l), t.stateNode === null) cl(e, t), Ms(t, n, r), Gi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var s = o.context, m = n.contextType;
      typeof m == "object" && m !== null ? m = Xe(m) : (m = Oe(n) ? Zt : Ne.current, m = wn(t, m));
      var g = n.getDerivedStateFromProps, x = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      x || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== m) && Ds(t, o, r, m), Ut = !1;
      var v = t.memoizedState;
      o.state = v, tl(t, r, o, l), s = t.memoizedState, u !== r || v !== s || Ie.current || Ut ? (typeof g == "function" && (Xi(t, n, g, r), s = t.memoizedState), (u = Ut || Os(t, n, u, r, v, s, m)) ? (x || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = m, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, as(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : lt(t.type, u), o.props = m, x = t.pendingProps, v = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Oe(n) ? Zt : Ne.current, s = wn(t, s));
      var E = n.getDerivedStateFromProps;
      (g = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== x || v !== s) && Ds(t, o, r, s), Ut = !1, v = t.memoizedState, o.state = v, tl(t, r, o, l);
      var C = t.memoizedState;
      u !== x || v !== C || Ie.current || Ut ? (typeof E == "function" && (Xi(t, n, E, r), C = t.memoizedState), (m = Ut || Os(t, n, m, r, v, C, s) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), o.props = r, o.state = C, o.context = s, r = m) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Ks(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && qu(t, n, !1), _t(e, t, i);
    r = t.stateNode, ff.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Nn(t, e.child, null, i), t.child = Nn(t, null, u, i)) : Te(e, t, u, i), t.memoizedState = r.state, l && qu(t, n, !0), t.child;
  }
  function Xs(e) {
    var t = e.stateNode;
    t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), Di(e, t.containerInfo);
  }
  function Gs(e, t, n, r, l) {
    return En(), Ti(l), t.flags |= 256, Te(e, t, n, r), t.child;
  }
  var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function to(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps, l = le.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), q(le, l & 1), e === null)
      return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Sl(o, r, 0, null), e = un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = to(n), t.memoizedState = eo, e) : no(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return df(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Qt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Qt(u, i) : (i = un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
    }
    return i = e.child, e = i.sibling, r = Qt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function no(e, t) {
    return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function al(e, t, n, r) {
    return r !== null && Ti(r), Nn(t, e.child, null, n), e = no(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function df(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zi(Error(h(422))), al(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), i = un(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Nn(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, i);
    if ((t.mode & 1) === 0) return al(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, i = Error(h(419)), r = Zi(i, r, void 0), al(e, t, o, r);
    }
    if (u = (o & e.childLanes) !== 0, Me || u) {
      if (r = ge, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Et(e, l), ut(r, e, l, -1));
      }
      return xo(), r = Zi(Error(h(421))), al(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _f.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, He = Ot(l.nextSibling), Be = t, re = !0, rt = null, e !== null && (Ke[Ye++] = kt, Ke[Ye++] = St, Ke[Ye++] = Jt, kt = e.id, St = e.overflow, Jt = t), t = no(t, r.children), t.flags |= 4096, t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ii(e.return, t, n);
  }
  function ro(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Te(e, t, r.children, n), r = le.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
        else if (e.tag === 19) Js(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (q(le, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ro(t, !0, n, null, i);
        break;
      case "together":
        ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function cl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        Xs(t), En();
        break;
      case 5:
        ds(t);
        break;
      case 1:
        Oe(t.type) && Kr(t);
        break;
      case 4:
        Di(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        q(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (q(le, le.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (q(le, le.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
        q(le, le.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return qs(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), q(le, le.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Qs(e, t, n);
    }
    return _t(e, t, n);
  }
  var bs, lo, ea, ta;
  bs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, lo = function() {
  }, ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, en(mt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Il(e, l), r = Il(e, r), i = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Dl(e, l), r = Dl(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ul(n, r);
      var o;
      n = null;
      for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
        var u = l[m];
        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (A.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
      for (m in r) {
        var s = r[m];
        if (u = l != null ? l[m] : void 0, r.hasOwnProperty(m) && s !== u && (s != null || u != null)) if (m === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
        } else n || (i || (i = []), i.push(
          m,
          n
        )), n = s;
        else m === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(m, s)) : m === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(m, "" + s) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (A.hasOwnProperty(m) ? (s != null && m === "onScroll" && ee("scroll", e), i || u === s || (i = [])) : (i = i || []).push(m, s));
      }
      n && (i = i || []).push("style", n);
      var m = i;
      (t.updateQueue = m) && (t.flags |= 4);
    }
  }, ta = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
    if (!re) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch (Ci(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ce(t), null;
      case 1:
        return Oe(t.type) && Qr(), Ce(t), null;
      case 3:
        return r = t.stateNode, jn(), te(Ie), te(Ne), Ai(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rt !== null && (vo(rt), rt = null))), lo(e, t), Ce(t), null;
      case 5:
        Fi(t);
        var l = en(ur.current);
        if (n = t.type, e !== null && t.stateNode != null) ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166));
            return Ce(t), null;
          }
          if (e = en(mt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[pt] = t, r[nr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ee("cancel", r), ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) ee(bn[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  r
                ), ee("load", r);
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                Mo(r, i), ee("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ee("invalid", r);
                break;
              case "textarea":
                Uo(r, i), ee("invalid", r);
            }
            Ul(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : A.hasOwnProperty(o) && u != null && o === "onScroll" && ee("scroll", r);
            }
            switch (n) {
              case "input":
                xr(r), Fo(r, i, !0);
                break;
              case "textarea":
                xr(r), Wo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Hr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[pt] = t, e[nr] = r, bs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Al(n, r), n) {
                case "dialog":
                  ee("cancel", e), ee("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ee("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) ee(bn[l], e);
                  l = r;
                  break;
                case "source":
                  ee("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ee(
                    "error",
                    e
                  ), ee("load", e), l = r;
                  break;
                case "details":
                  ee("toggle", e), l = r;
                  break;
                case "input":
                  Mo(e, r), l = Il(e, r), ee("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), ee("invalid", e);
                  break;
                case "textarea":
                  Uo(e, r), l = Dl(e, r), ee("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ul(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? $o(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bo(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (A.hasOwnProperty(i) ? s != null && i === "onScroll" && ee("scroll", e) : s != null && qe(e, i, s, o));
              }
              switch (n) {
                case "input":
                  xr(e), Fo(e, r, !1);
                  break;
                case "textarea":
                  xr(e), Wo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? sn(e, !!r.multiple, i, !1) : r.defaultValue != null && sn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ce(t), null;
      case 6:
        if (e && t.stateNode != null) ta(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(h(166));
          if (n = en(ur.current), en(mt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (i = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r;
        }
        return Ce(t), null;
      case 13:
        if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (re && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ls(), En(), t.flags |= 98560, i = !1;
          else if (i = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(h(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(h(317));
              i[pt] = t;
            } else En(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ce(t), i = !1;
          } else rt !== null && (vo(rt), rt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (le.current & 1) !== 0 ? he === 0 && (he = 3) : xo())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
      case 4:
        return jn(), lo(e, t), e === null && er(t.stateNode.containerInfo), Ce(t), null;
      case 10:
        return Li(t.type._context), Ce(t), null;
      case 17:
        return Oe(t.type) && Qr(), Ce(t), null;
      case 19:
        if (te(le), i = t.memoizedState, i === null) return Ce(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) dr(i, !1);
        else {
          if (he !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (t.flags |= 128, dr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return q(le, le.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && se() > Rn && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !re) return Ce(t), null;
          } else 2 * se() - i.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = se(), t.sibling = null, n = le.current, q(le, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
      case 22:
      case 23:
        return go(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? ($e & 1073741824) !== 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function hf(e, t) {
    switch (Ci(t), t.tag) {
      case 1:
        return Oe(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(), te(Ie), te(Ne), Ai(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Fi(t), null;
      case 13:
        if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(h(340));
          En();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return te(le), null;
      case 4:
        return jn(), null;
      case 10:
        return Li(t.type._context), null;
      case 22:
      case 23:
        return go(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, je = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, N = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ue(e, t, r);
    }
    else n.current = null;
  }
  function io(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var na = !1;
  function yf(e, t) {
    if (yi = Rr, e = Ou(), ai(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, s = -1, m = 0, g = 0, x = e, v = null;
          t: for (; ; ) {
            for (var E; x !== n || l !== 0 && x.nodeType !== 3 || (u = o + l), x !== i || r !== 0 && x.nodeType !== 3 || (s = o + r), x.nodeType === 3 && (o += x.nodeValue.length), (E = x.firstChild) !== null; )
              v = x, x = E;
            for (; ; ) {
              if (x === e) break t;
              if (v === n && ++m === l && (u = o), v === i && ++g === r && (s = o), (E = x.nextSibling) !== null) break;
              x = v, v = x.parentNode;
            }
            x = E;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gi = { focusedElem: e, selectionRange: n }, Rr = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
    else for (; N !== null; ) {
      t = N;
      try {
        var C = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var j = C.memoizedProps, ae = C.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? j : lt(t.type, j), ae);
              d.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var p = t.stateNode.containerInfo;
            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(h(163));
        }
      } catch (w) {
        ue(t, t.return, w);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, N = e;
        break;
      }
      N = t.return;
    }
    return C = na, na = !1, C;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && io(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function oo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ra(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ra(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[nr], delete t[Si], delete t[qc], delete t[bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function la(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ia(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || la(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), e = e.sibling;
  }
  function so(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
  }
  var ke = null, it = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) oa(e, t, n), n = n.sibling;
  }
  function oa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function") try {
      dt.onCommitFiberUnmount(_r, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        je || Tn(n, t);
      case 6:
        var r = ke, l = it;
        ke = null, Wt(e, t, n), ke = r, it = l, ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
      case 18:
        ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n), Qn(e)) : ki(ke, n.stateNode));
        break;
      case 4:
        r = ke, l = it, ke = n.stateNode.containerInfo, it = !0, Wt(e, t, n), ke = r, it = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o), l = l.next;
          } while (l !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (!je && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ue(n, t, u);
        }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Wt(e, t, n), je = r) : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vf()), t.forEach(function(r) {
        var l = Cf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ke = u.stateNode, it = !1;
              break e;
            case 3:
              ke = u.stateNode.containerInfo, it = !0;
              break e;
            case 4:
              ke = u.stateNode.containerInfo, it = !0;
              break e;
          }
          u = u.return;
        }
        if (ke === null) throw Error(h(160));
        oa(i, o, l), ke = null, it = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (m) {
        ue(l, t, m);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sa(t, e), t = t.sibling;
  }
  function sa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ot(t, e), vt(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (j) {
            ue(e, e.return, j);
          }
          try {
            pr(5, e, e.return);
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 1:
        ot(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (ot(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            On(l, "");
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Do(l, i), Al(u, o);
            var m = Al(u, i);
            for (o = 0; o < s.length; o += 2) {
              var g = s[o], x = s[o + 1];
              g === "style" ? $o(l, x) : g === "dangerouslySetInnerHTML" ? Bo(l, x) : g === "children" ? On(l, x) : qe(l, g, x, m);
            }
            switch (u) {
              case "input":
                Ol(l, i);
                break;
              case "textarea":
                Ao(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null ? sn(l, !!i.multiple, E, !1) : v !== !!i.multiple && (i.defaultValue != null ? sn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nr] = i;
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 6:
        if (ot(t, e), vt(e), r & 4) {
          if (e.stateNode === null) throw Error(h(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 3:
        if (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (j) {
          ue(e, e.return, j);
        }
        break;
      case 4:
        ot(t, e), vt(e);
        break;
      case 13:
        ot(t, e), vt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (fo = se())), r & 4 && ua(e);
        break;
      case 22:
        if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (m = je) || g, ot(t, e), je = m) : ot(t, e), vt(e), r & 8192) {
          if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0) for (N = e, g = e.child; g !== null; ) {
            for (x = N = g; N !== null; ) {
              switch (v = N, E = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, v, v.return);
                  break;
                case 1:
                  Tn(v, v.return);
                  var C = v.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                    } catch (j) {
                      ue(r, n, j);
                    }
                  }
                  break;
                case 5:
                  Tn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    fa(x);
                    continue;
                  }
              }
              E !== null ? (E.return = v, N = E) : fa(x);
            }
            g = g.sibling;
          }
          e: for (g = null, x = e; ; ) {
            if (x.tag === 5) {
              if (g === null) {
                g = x;
                try {
                  l = x.stateNode, m ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = x.stateNode, s = x.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ho("display", o));
                } catch (j) {
                  ue(e, e.return, j);
                }
              }
            } else if (x.tag === 6) {
              if (g === null) try {
                x.stateNode.nodeValue = m ? "" : x.memoizedProps;
              } catch (j) {
                ue(e, e.return, j);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              g === x && (g = null), x = x.return;
            }
            g === x && (g = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ot(t, e), vt(e), r & 4 && ua(e);
        break;
      case 21:
        break;
      default:
        ot(
          t,
          e
        ), vt(e);
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (la(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(h(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ""), r.flags &= -33);
            var i = ia(e);
            so(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, u = ia(e);
            uo(e, u, o);
            break;
          default:
            throw Error(h(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gf(e, t, n) {
    N = e, aa(e);
  }
  function aa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var l = N, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || je;
          u = fl;
          var m = je;
          if (fl = o, (je = s) && !m) for (N = l; N !== null; ) o = N, s = o.child, o.tag === 22 && o.memoizedState !== null ? da(l) : s !== null ? (s.return = o, N = s) : da(l);
          for (; i !== null; ) N = i, aa(i), i = i.sibling;
          N = l, fl = u, je = m;
        }
        ca(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, N = i) : ca(e);
    }
  }
  function ca(e) {
    for (; N !== null; ) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && fs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                fs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var x = g.dehydrated;
                    x !== null && Qn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(h(163));
          }
          je || t.flags & 512 && oo(t);
        } catch (v) {
          ue(t, t.return, v);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function fa(e) {
    for (; N !== null; ) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, N = n;
        break;
      }
      N = t.return;
    }
  }
  function da(e) {
    for (; N !== null; ) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              ue(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ue(t, l, s);
              }
            }
            var i = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              oo(t);
            } catch (s) {
              ue(t, o, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        N = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, N = u;
        break;
      }
      N = t.return;
    }
  }
  var xf = Math.ceil, pl = Ee.ReactCurrentDispatcher, ao = Ee.ReactCurrentOwner, Ze = Ee.ReactCurrentBatchConfig, V = 0, ge = null, de = null, Se = 0, $e = 0, zn = Mt(0), he = 0, mr = null, nn = 0, ml = 0, co = 0, hr = null, De = null, fo = 0, Rn = 1 / 0, Ct = null, hl = !1, po = null, Vt = null, vl = !1, Bt = null, yl = 0, vr = 0, mo = null, gl = -1, xl = 0;
  function ze() {
    return (V & 6) !== 0 ? se() : gl !== -1 ? gl : gl = se();
  }
  function Ht(e) {
    return (e.mode & 1) === 0 ? 1 : (V & 2) !== 0 && Se !== 0 ? Se & -Se : tf.transition !== null ? (xl === 0 && (xl = iu()), xl) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mu(e.type)), e);
  }
  function ut(e, t, n, r) {
    if (50 < vr) throw vr = 0, mo = null, Error(h(185));
    Wn(e, n, r), ((V & 2) === 0 || e !== ge) && (e === ge && ((V & 2) === 0 && (ml |= n), he === 4 && $t(e, Se)), Fe(e, r), n === 1 && V === 0 && (t.mode & 1) === 0 && (Rn = se() + 500, Yr && Ft()));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    tc(e, t);
    var r = Pr(e, e === ge ? Se : 0);
    if (r === 0) n !== null && nu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && nu(n), t === 1) e.tag === 0 ? ef(ma.bind(null, e)) : bu(ma.bind(null, e)), Zc(function() {
        (V & 6) === 0 && Ft();
      }), n = null;
      else {
        switch (ou(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = ru;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = lu;
            break;
          default:
            n = Nr;
        }
        n = Sa(n, pa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function pa(e, t) {
    if (gl = -1, xl = 0, (V & 6) !== 0) throw Error(h(327));
    var n = e.callbackNode;
    if (Ln() && e.callbackNode !== n) return null;
    var r = Pr(e, e === ge ? Se : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = wl(e, r);
    else {
      t = r;
      var l = V;
      V |= 2;
      var i = va();
      (ge !== e || Se !== t) && (Ct = null, Rn = se() + 500, ln(e, t));
      do
        try {
          Sf();
          break;
        } catch (u) {
          ha(e, u);
        }
      while (!0);
      Ri(), pl.current = i, V = l, de !== null ? t = 0 : (ge = null, Se = 0, t = he);
    }
    if (t !== 0) {
      if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = ho(e, l))), t === 1) throw n = mr, ln(e, 0), $t(e, r), Fe(e, se()), n;
      if (t === 6) $t(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !wf(l) && (t = wl(e, r), t === 2 && (i = Yl(e), i !== 0 && (r = i, t = ho(e, i))), t === 1)) throw n = mr, ln(e, 0), $t(e, r), Fe(e, se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            on(e, De, Ct);
            break;
          case 3:
            if ($t(e, r), (r & 130023424) === r && (t = fo + 500 - se(), 10 < t)) {
              if (Pr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ze(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = wi(on.bind(null, e, De, Ct), t);
              break;
            }
            on(e, De, Ct);
            break;
          case 4:
            if ($t(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - tt(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = wi(on.bind(null, e, De, Ct), r);
              break;
            }
            on(e, De, Ct);
            break;
          case 5:
            on(e, De, Ct);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return Fe(e, se()), e.callbackNode === n ? pa.bind(null, e) : null;
  }
  function ho(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256), e = wl(e, t), e !== 2 && (t = De, De = n, t !== null && vo(t)), e;
  }
  function vo(e) {
    De === null ? De = e : De.push.apply(De, e);
  }
  function wf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function $t(e, t) {
    for (t &= ~co, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - tt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function ma(e) {
    if ((V & 6) !== 0) throw Error(h(327));
    Ln();
    var t = Pr(e, 0);
    if ((t & 1) === 0) return Fe(e, se()), null;
    var n = wl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && (t = r, n = ho(e, r));
    }
    if (n === 1) throw n = mr, ln(e, 0), $t(e, t), Fe(e, se()), n;
    if (n === 6) throw Error(h(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, De, Ct), Fe(e, se()), null;
  }
  function yo(e, t) {
    var n = V;
    V |= 1;
    try {
      return e(t);
    } finally {
      V = n, V === 0 && (Rn = se() + 500, Yr && Ft());
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (V & 6) === 0 && Ln();
    var t = V;
    V |= 1;
    var n = Ze.transition, r = X;
    try {
      if (Ze.transition = null, X = 1, e) return e();
    } finally {
      X = r, Ze.transition = n, V = t, (V & 6) === 0 && Ft();
    }
  }
  function go() {
    $e = zn.current, te(zn);
  }
  function ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Gc(n)), de !== null) for (n = de.return; n !== null; ) {
      var r = n;
      switch (Ci(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          jn(), te(Ie), te(Ne), Ai();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          te(le);
          break;
        case 19:
          te(le);
          break;
        case 10:
          Li(r.type._context);
          break;
        case 22:
        case 23:
          go();
      }
      n = n.return;
    }
    if (ge = e, de = e = Qt(e.current, null), Se = $e = t, he = 0, mr = null, co = ml = nn = 0, De = hr = null, bt !== null) {
      for (t = 0; t < bt.length; t++) if (n = bt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      bt = null;
    }
    return e;
  }
  function ha(e, t) {
    do {
      var n = de;
      try {
        if (Ri(), rl.current = ul, ll) {
          for (var r = ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (tn = 0, ye = me = ie = null, sr = !1, ar = 0, ao.current = null, n === null || n.return === null) {
          he = 1, mr = t, de = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, s = t;
          if (t = Se, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var m = s, g = u, x = g.tag;
            if ((g.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var v = g.alternate;
              v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
            }
            var E = Ws(o);
            if (E !== null) {
              E.flags &= -257, Vs(E, o, u, i, t), E.mode & 1 && As(i, m, t), t = E, s = m;
              var C = t.updateQueue;
              if (C === null) {
                var j = /* @__PURE__ */ new Set();
                j.add(s), t.updateQueue = j;
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                As(i, m, t), xo();
                break e;
              }
              s = Error(h(426));
            }
          } else if (re && u.mode & 1) {
            var ae = Ws(o);
            if (ae !== null) {
              (ae.flags & 65536) === 0 && (ae.flags |= 256), Vs(ae, o, u, i, t), Ti(Pn(s, u));
              break e;
            }
          }
          i = s = Pn(s, u), he !== 4 && (he = 2), hr === null ? hr = [i] : hr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var d = Fs(i, s, t);
                cs(i, d);
                break e;
              case 1:
                u = s;
                var a = i.type, p = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Vt === null || !Vt.has(p)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var w = Us(i, u, t);
                  cs(i, w);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ga(n);
      } catch (P) {
        t = P, de === n && n !== null && (de = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function va() {
    var e = pl.current;
    return pl.current = ul, e === null ? ul : e;
  }
  function xo() {
    (he === 0 || he === 3 || he === 2) && (he = 4), ge === null || (nn & 268435455) === 0 && (ml & 268435455) === 0 || $t(ge, Se);
  }
  function wl(e, t) {
    var n = V;
    V |= 2;
    var r = va();
    (ge !== e || Se !== t) && (Ct = null, ln(e, t));
    do
      try {
        kf();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if (Ri(), V = n, pl.current = r, de !== null) throw Error(h(261));
    return ge = null, Se = 0, he;
  }
  function kf() {
    for (; de !== null; ) ya(de);
  }
  function Sf() {
    for (; de !== null && !Ka(); ) ya(de);
  }
  function ya(e) {
    var t = ka(e.alternate, e, $e);
    e.memoizedProps = e.pendingProps, t === null ? ga(e) : de = t, ao.current = null;
  }
  function ga(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = mf(n, t, $e), n !== null) {
          de = n;
          return;
        }
      } else {
        if (n = hf(n, t), n !== null) {
          n.flags &= 32767, de = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          he = 6, de = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function on(e, t, n) {
    var r = X, l = Ze.transition;
    try {
      Ze.transition = null, X = 1, Ef(e, t, n, r);
    } finally {
      Ze.transition = l, X = r;
    }
    return null;
  }
  function Ef(e, t, n, r) {
    do
      Ln();
    while (Bt !== null);
    if ((V & 6) !== 0) throw Error(h(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(h(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (nc(e, i), e === ge && (de = ge = null, Se = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || vl || (vl = !0, Sa(Nr, function() {
      return Ln(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = Ze.transition, Ze.transition = null;
      var o = X;
      X = 1;
      var u = V;
      V |= 4, ao.current = null, yf(e, n), sa(n, e), Bc(gi), Rr = !!yi, gi = yi = null, e.current = n, gf(n), Ya(), V = u, X = o, Ze.transition = i;
    } else e.current = n;
    if (vl && (vl = !1, Bt = e, yl = l), i = e.pendingLanes, i === 0 && (Vt = null), Za(n.stateNode), Fe(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = po, po = null, e;
    return (yl & 1) !== 0 && e.tag !== 0 && Ln(), i = e.pendingLanes, (i & 1) !== 0 ? e === mo ? vr++ : (vr = 0, mo = e) : vr = 0, Ft(), null;
  }
  function Ln() {
    if (Bt !== null) {
      var e = ou(yl), t = Ze.transition, n = X;
      try {
        if (Ze.transition = null, X = 16 > e ? 16 : e, Bt === null) var r = !1;
        else {
          if (e = Bt, Bt = null, yl = 0, (V & 6) !== 0) throw Error(h(331));
          var l = V;
          for (V |= 4, N = e.current; N !== null; ) {
            var i = N, o = i.child;
            if ((N.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var m = u[s];
                  for (N = m; N !== null; ) {
                    var g = N;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, g, i);
                    }
                    var x = g.child;
                    if (x !== null) x.return = g, N = x;
                    else for (; N !== null; ) {
                      g = N;
                      var v = g.sibling, E = g.return;
                      if (ra(g), g === m) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = E, N = v;
                        break;
                      }
                      N = E;
                    }
                  }
                }
                var C = i.alternate;
                if (C !== null) {
                  var j = C.child;
                  if (j !== null) {
                    C.child = null;
                    do {
                      var ae = j.sibling;
                      j.sibling = null, j = ae;
                    } while (j !== null);
                  }
                }
                N = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, N = o;
            else e: for (; N !== null; ) {
              if (i = N, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, i, i.return);
              }
              var d = i.sibling;
              if (d !== null) {
                d.return = i.return, N = d;
                break e;
              }
              N = i.return;
            }
          }
          var a = e.current;
          for (N = a; N !== null; ) {
            o = N;
            var p = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && p !== null) p.return = o, N = p;
            else e: for (o = a; N !== null; ) {
              if (u = N, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, u);
                }
              } catch (P) {
                ue(u, u.return, P);
              }
              if (u === o) {
                N = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                w.return = u.return, N = w;
                break e;
              }
              N = u.return;
            }
          }
          if (V = l, Ft(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
            dt.onPostCommitFiberRoot(_r, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        X = n, Ze.transition = t;
      }
    }
    return !1;
  }
  function xa(e, t, n) {
    t = Pn(n, t), t = Fs(e, t, 1), e = At(e, t, 1), t = ze(), e !== null && (Wn(e, 1, t), Fe(e, t));
  }
  function ue(e, t, n) {
    if (e.tag === 3) xa(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
          e = Pn(n, e), e = Us(t, e, 1), t = At(t, e, 1), e = ze(), t !== null && (Wn(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Nf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (Se & n) === n && (he === 4 || he === 3 && (Se & 130023424) === Se && 500 > se() - fo ? ln(e, 0) : co |= n), Fe(e, t);
  }
  function wa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = jr, jr <<= 1, (jr & 130023424) === 0 && (jr = 4194304)));
    var n = ze();
    e = Et(e, t), e !== null && (Wn(e, t, n), Fe(e, n));
  }
  function _f(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wa(e, n);
  }
  function Cf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    r !== null && r.delete(t), wa(e, n);
  }
  var ka;
  ka = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Me = !1, pf(e, t, n);
      Me = (e.flags & 131072) !== 0;
    }
    else Me = !1, re && (t.flags & 1048576) !== 0 && es(t, Gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        cl(e, t), e = t.pendingProps;
        var l = wn(t, Ne.current);
        Cn(t, n), l = Bi(null, t, r, e, l, n);
        var i = Hi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (i = !0, Kr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mi(t), l.updater = sl, t.stateNode = l, l._reactInternals = t, Gi(t, r, e, n), t = bi(null, t, r, !0, i, n)) : (t.tag = 0, re && i && _i(t), Te(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Pf(r), e = lt(r, e), l) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Ys(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(h(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), qi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Ys(e, t, r, l, n);
      case 3:
        e: {
          if (Xs(t), e === null) throw Error(h(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, as(e, t), tl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Pn(Error(h(423)), t), t = Gs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Pn(Error(h(424)), t), t = Gs(e, t, r, n, l);
            break e;
          } else for (He = Ot(t.stateNode.containerInfo.firstChild), Be = t, re = !0, rt = null, n = us(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (En(), r === l) {
              t = _t(e, t, n);
              break e;
            }
            Te(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ds(t), e === null && Pi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, xi(r, l) ? o = null : i !== null && xi(r, i) && (t.flags |= 32), Ks(e, t), Te(e, t, o, n), t.child;
      case 6:
        return e === null && Pi(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return Di(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : Te(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Bs(e, t, r, l, n);
      case 7:
        return Te(e, t, t.pendingProps, n), t.child;
      case 8:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Te(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, q(qr, r._currentValue), r._currentValue = o, i !== null) if (nt(i.value, o)) {
            if (i.children === l.children && !Ie.current) {
              t = _t(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var u = i.dependencies;
            if (u !== null) {
              o = i.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (i.tag === 1) {
                    s = Nt(-1, n & -n), s.tag = 2;
                    var m = i.updateQueue;
                    if (m !== null) {
                      m = m.shared;
                      var g = m.pending;
                      g === null ? s.next = s : (s.next = g.next, g.next = s), m.pending = s;
                    }
                  }
                  i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ii(
                    i.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(h(341));
              o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ii(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          Te(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Cn(t, n), l = Xe(l), r = r(l), t.flags |= 1, Te(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = lt(r, t.pendingProps), l = lt(r.type, l), Hs(e, t, r, l, n);
      case 15:
        return $s(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), cl(e, t), t.tag = 1, Oe(r) ? (e = !0, Kr(t)) : e = !1, Cn(t, n), Ms(t, r, l), Gi(t, r, l, n), bi(null, t, r, !0, e, n);
      case 19:
        return qs(e, t, n);
      case 22:
        return Qs(e, t, n);
    }
    throw Error(h(156, t.tag));
  };
  function Sa(e, t) {
    return tu(e, t);
  }
  function jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, t, n, r) {
    return new jf(e, t, n, r);
  }
  function wo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pf(e) {
    if (typeof e == "function") return wo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ct) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") wo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Re:
        return un(n.children, l, i, t);
      case Qe:
        o = 8, l |= 8;
        break;
      case jt:
        return e = Je(12, n, t, l | 2), e.elementType = jt, e.lanes = i, e;
      case Ae:
        return e = Je(13, n, t, l), e.elementType = Ae, e.lanes = i, e;
      case et:
        return e = Je(19, n, t, l), e.elementType = et, e.lanes = i, e;
      case oe:
        return Sl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gt:
            o = 10;
            break e;
          case Yt:
            o = 9;
            break e;
          case ct:
            o = 11;
            break e;
          case ft:
            o = 14;
            break e;
          case Le:
            o = 16, r = null;
            break e;
        }
        throw Error(h(130, e == null ? e : typeof e, ""));
    }
    return t = Je(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function un(e, t, n, r) {
    return e = Je(7, e, r, t), e.lanes = n, e;
  }
  function Sl(e, t, n, r) {
    return e = Je(22, e, r, t), e.elementType = oe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ko(e, t, n) {
    return e = Je(6, e, null, t), e.lanes = n, e;
  }
  function So(e, t, n) {
    return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Tf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Eo(e, t, n, r, l, i, o, u, s) {
    return e = new Tf(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mi(i), e;
  }
  function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ea(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(h(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Oe(n)) return Ju(e, n, t);
    }
    return t;
  }
  function Na(e, t, n, r, l, i, o, u, s) {
    return e = Eo(n, r, !0, e, l, i, o, u, s), e.context = Ea(null), n = e.current, r = ze(), l = Ht(n), i = Nt(r, l), i.callback = t ?? null, At(n, i, l), e.current.lanes = l, Wn(e, l, r), Fe(e, r), e;
  }
  function El(e, t, n, r) {
    var l = t.current, i = ze(), o = Ht(l);
    return n = Ea(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, o), e !== null && (ut(e, l, o, i), el(e, l, o)), o;
  }
  function Nl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function _a(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function No(e, t) {
    _a(e, t), (e = e.alternate) && _a(e, t);
  }
  function Rf() {
    return null;
  }
  var Ca = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function _o(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = _o.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    El(e, t, null, null);
  }, _l.prototype.unmount = _o.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rn(function() {
        El(null, e, null, null);
      }), t[xt] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = au();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
      Rt.splice(n, 0, e), n === 0 && du(e);
    }
  };
  function Co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ja() {
  }
  function Lf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var m = Nl(o);
          i.call(m);
        };
      }
      var o = Na(t, r, e, 0, null, !1, !1, "", ja);
      return e._reactRootContainer = o, e[xt] = o.current, er(e.nodeType === 8 ? e.parentNode : e), rn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var m = Nl(s);
        u.call(m);
      };
    }
    var s = Eo(e, 0, !1, null, null, !1, !1, "", ja);
    return e._reactRootContainer = s, e[xt] = s.current, er(e.nodeType === 8 ? e.parentNode : e), rn(function() {
      El(t, s, n, r);
    }), s;
  }
  function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Nl(o);
          u.call(s);
        };
      }
      El(t, o, e, l);
    } else o = Lf(n, t, e, l, r);
    return Nl(o);
  }
  uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), Fe(t, se()), (V & 6) === 0 && (Rn = se() + 500, Ft()));
        }
        break;
      case 13:
        rn(function() {
          var r = Et(e, 1);
          if (r !== null) {
            var l = ze();
            ut(r, e, 1, l);
          }
        }), No(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var t = Et(e, 134217728);
      if (t !== null) {
        var n = ze();
        ut(t, e, 134217728, n);
      }
      No(e, 134217728);
    }
  }, su = function(e) {
    if (e.tag === 13) {
      var t = Ht(e), n = Et(e, t);
      if (n !== null) {
        var r = ze();
        ut(n, e, t, r);
      }
      No(e, t);
    }
  }, au = function() {
    return X;
  }, cu = function(e, t) {
    var n = X;
    try {
      return X = e, t();
    } finally {
      X = n;
    }
  }, Bl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ol(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = $r(r);
              if (!l) throw Error(h(90));
              Oo(r), Ol(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ao(e, n);
        break;
      case "select":
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Xo = yo, Go = rn;
  var If = { usingClientEntryPoint: !1, Events: [rr, gn, $r, Ko, Yo, yo] }, yr = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Of = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Rf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      _r = Pl.inject(Of), dt = Pl;
    } catch {
    }
  }
  return Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If, Ue.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Co(t)) throw Error(h(200));
    return zf(e, t, null, n);
  }, Ue.createRoot = function(e, t) {
    if (!Co(e)) throw Error(h(299));
    var n = !1, r = "", l = Ca;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Eo(e, 1, !1, null, null, n, !1, r, l), e[xt] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new _o(t);
  }, Ue.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(h(188)) : (e = Object.keys(e).join(","), Error(h(268, e)));
    return e = bo(t), e = e === null ? null : e.stateNode, e;
  }, Ue.flushSync = function(e) {
    return rn(e);
  }, Ue.hydrate = function(e, t, n) {
    if (!Cl(t)) throw Error(h(200));
    return jl(null, e, t, !0, n);
  }, Ue.hydrateRoot = function(e, t, n) {
    if (!Co(e)) throw Error(h(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ca;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Na(t, null, e, 1, n ?? null, l, !1, i, o), e[xt] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new _l(t);
  }, Ue.render = function(e, t, n) {
    if (!Cl(t)) throw Error(h(200));
    return jl(null, e, t, !1, n);
  }, Ue.unmountComponentAtNode = function(e) {
    if (!Cl(e)) throw Error(h(40));
    return e._reactRootContainer ? (rn(function() {
      jl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[xt] = null;
      });
    }), !0) : !1;
  }, Ue.unstable_batchedUpdates = yo, Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Cl(n)) throw Error(h(200));
    if (e == null || e._reactInternals === void 0) throw Error(h(38));
    return jl(e, t, n, !1, r);
  }, Ue.version = "18.3.1-next-f1338f8080-20240426", Ue;
}
var Ma;
function Bf() {
  if (Ma) return To.exports;
  Ma = 1;
  function k() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (T) {
        console.error(T);
      }
  }
  return k(), To.exports = Vf(), To.exports;
}
var Da;
function Hf() {
  if (Da) return Tl;
  Da = 1;
  var k = Bf();
  return Tl.createRoot = k.createRoot, Tl.hydrateRoot = k.hydrateRoot, Tl;
}
var $f = Hf();
const Qf = [
  ["EAR", "Lobe, helix, tragus, conch, daith, industrial."],
  ["NOSE", "Nostril, high nostril, septum."],
  ["LIP & ORAL", "Labret, vertical labret, medusa, monroe, snake bites, tongue."],
  ["BROW & FACE", "Eyebrow and cheek."],
  ["NAVEL", "Navel piercings, after a quick check that your anatomy suits it."],
  ["JEWELRY", "Implant grade titanium, steel, swaps and downsizing."]
], Kf = ["Ear", "Nose", "Lip / Oral", "Brow / Face", "Navel", "Jewelry change", "Not sure yet"], zl = ({ children: k }) => /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 100 100", className: "w-20 h-20 mx-auto", children: k }), Yf = [
  ["CAPTIVE RING", /* @__PURE__ */ c.jsxs(zl, { children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "50", cy: "52", r: "30", fill: "none", stroke: "#d9d9d9", strokeWidth: "8" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "50", cy: "22", r: "10", fill: "#d10000" })
  ] })],
  ["BARBELL", /* @__PURE__ */ c.jsxs(zl, { children: [
    /* @__PURE__ */ c.jsx("line", { x1: "14", y1: "50", x2: "86", y2: "50", stroke: "#d9d9d9", strokeWidth: "6" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "50", r: "11", fill: "#d10000" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "88", cy: "50", r: "11", fill: "#fff" })
  ] })],
  ["LABRET", /* @__PURE__ */ c.jsxs(zl, { children: [
    /* @__PURE__ */ c.jsx("ellipse", { cx: "50", cy: "26", rx: "16", ry: "8", fill: "#fff" }),
    /* @__PURE__ */ c.jsx("line", { x1: "50", y1: "30", x2: "50", y2: "68", stroke: "#d9d9d9", strokeWidth: "6" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "50", cy: "78", r: "11", fill: "#d10000" })
  ] })],
  ["NAVEL CURVE", /* @__PURE__ */ c.jsxs(zl, { children: [
    /* @__PURE__ */ c.jsx("path", { d: "M18 30 Q50 96 82 30", fill: "none", stroke: "#d9d9d9", strokeWidth: "6" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "18", cy: "28", r: "10", fill: "#d10000" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "82", cy: "28", r: "10", fill: "#fff" })
  ] })]
], Fa = {
  before: ["What to do", [
    "Eat a proper meal and drink water first. Fainting on an empty stomach is the most common problem.",
    "Skip alcohol for 24 hours before and go easy on caffeine. Both make bleeding and nerves worse.",
    "Tell us about allergies (especially nickel), medications, skin conditions, and any history of fainting or bleeding easily.",
    "Shower first and keep lotion or oil off the area.",
    "Wear loose, comfy clothes. For a navel piercing, wear a loose top and stretchy or high bottoms with nothing pressing on the area.",
    "Under 18? Bring the signed parent or guardian consent letter. A parent being there is best.",
    "Home service: prep a clean, well lit table or flat surface and keep pets and kids out of the room. Meetup: choose a clean spot with enough privacy."
  ]],
  expect: ["What to expect", [
    "We talk through placement and jewelry first. For navels we check the shape of your skin fold to see if it suits the piercing.",
    "We mark the exact spot and you approve it. You can say stop at any point.",
    "Gloves on, skin cleaned, and a brand new needle and jewelry opened in front of you. Everything is single use or sterilized.",
    "The needle goes through in a second or two. Expect a sharp pinch, pressure, maybe watery eyes or a rush of heat. Breathe out as it goes in.",
    "Starter jewelry is implant grade titanium and a little longer to leave room for swelling.",
    "Afterwards it will be tender and a bit swollen, with light bleeding for the first days. Clear or pale crust is normal.",
    "Healing is slow. Navels often take 6 to 12 months or more. Looking healed does not mean it is healed."
  ]],
  care: ["Aftercare", [
    "Wash your hands with soap before touching the piercing, every time.",
    "Clean once or twice a day with sterile saline wound wash (0.9% sodium chloride, nothing added). Spray, then pat dry with a clean paper towel.",
    "A quick rinse in the shower is fine. Keep harsh soaps off it.",
    "Leave it alone. No twisting, spinning or picking. Soften crust with saline before it comes off.",
    "No alcohol, hydrogen peroxide, antibiotic ointment or tea tree oil. They irritate and slow healing.",
    "No pools, hot tubs, lakes or sea while it heals.",
    "Navel: wear loose clothes, keep belts and tight waistbands off it, sleep on your back or side, and protect it during workouts.",
    "Do not change the jewelry until it is fully healed, unless we have checked it.",
    "Warning signs: spreading redness, heat, throbbing pain that gets worse, thick yellow or green smelly discharge, or fever. See a doctor, and keep the jewelry in unless the doctor says otherwise."
  ]]
}, Io = ({ cls: k = "text-3xl" }) => /* @__PURE__ */ c.jsxs("span", { className: `font-term tracking-wider ${k}`, children: [
  "PIERCE",
  /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: ".EXE" })
] });
function Rl({ children: k, className: T = "" }) {
  const h = st.useRef(null);
  return st.useEffect(() => {
    const b = new IntersectionObserver(([A]) => A.isIntersecting && h.current.classList.add("show"), { threshold: 0.12 });
    return b.observe(h.current), () => b.disconnect();
  }, []), /* @__PURE__ */ c.jsx("div", { ref: h, className: `reveal ${T}`, children: k });
}
const Ll = ({ children: k }) => /* @__PURE__ */ c.jsx(Rl, { children: /* @__PURE__ */ c.jsx("h2", { className: "font-metal text-4xl sm:text-6xl mb-8 leading-tight", children: k }) }), Ua = () => /* @__PURE__ */ c.jsxs("div", { className: "barbell", children: [
  /* @__PURE__ */ c.jsx("i", { className: "ball" }),
  /* @__PURE__ */ c.jsx("i", { className: "rod", children: /* @__PURE__ */ c.jsx("b", {}) }),
  /* @__PURE__ */ c.jsx("i", { className: "ball" })
] });
function Xf() {
  const [k, T] = st.useState(!1), [h, b] = st.useState(!1);
  return st.useEffect(() => {
    const A = setTimeout(() => T(!0), 1300), Q = setTimeout(() => b(!0), 1800);
    return () => {
      clearTimeout(A), clearTimeout(Q);
    };
  }, []), h ? null : /* @__PURE__ */ c.jsxs("div", { className: `boot ${k ? "out" : ""}`, children: [
    /* @__PURE__ */ c.jsx("p", { className: "text-blood", children: "> PIERCE.EXE" }),
    /* @__PURE__ */ c.jsx("p", { children: "> sterilizing gear..." }),
    /* @__PURE__ */ c.jsx("p", { children: "> loading..." }),
    /* @__PURE__ */ c.jsx("div", { className: "bar", children: /* @__PURE__ */ c.jsx("i", {}) })
  ] });
}
function Gf() {
  const [k, T] = st.useState(!1), h = [["Services", "/#services"], ["Process", "/#process"], ["Notes", "/notes"], ["Inquire", "/#inquire"]], b = "block w-6 h-0.5 bg-white transition-all";
  return /* @__PURE__ */ c.jsxs("header", { className: "fixed top-0 inset-x-0 z-40 bg-black/90 backdrop-blur border-b-2 border-blood", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between px-4 h-14", children: [
      /* @__PURE__ */ c.jsx("a", { href: "/", "aria-label": "Home", children: /* @__PURE__ */ c.jsx(Io, {}) }),
      /* @__PURE__ */ c.jsx("nav", { className: "hidden md:flex gap-8 text-sm uppercase tracking-widest", children: h.map(([A, Q]) => /* @__PURE__ */ c.jsx("a", { href: Q, className: "hover:text-blood transition", children: A }, A)) }),
      /* @__PURE__ */ c.jsxs("button", { "aria-label": "Menu", "aria-expanded": k, onClick: () => T(!k), className: "md:hidden w-11 h-11 grid place-content-center gap-1.5", children: [
        /* @__PURE__ */ c.jsx("span", { className: `${b} ${k ? "rotate-45 translate-y-2" : ""}` }),
        /* @__PURE__ */ c.jsx("span", { className: `${b} ${k ? "opacity-0" : ""}` }),
        /* @__PURE__ */ c.jsx("span", { className: `${b} ${k ? "-rotate-45 -translate-y-2" : ""}` })
      ] })
    ] }),
    k && /* @__PURE__ */ c.jsx("nav", { className: "md:hidden drop border-t border-white/10 bg-black px-4 py-2 grid", children: h.map(([A, Q]) => /* @__PURE__ */ c.jsx("a", { href: Q, onClick: () => T(!1), className: "font-metal text-2xl py-3 border-b border-white/10 active:text-blood", children: A }, A)) })
  ] });
}
function Zf() {
  return /* @__PURE__ */ c.jsxs("section", { id: "top", className: "relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-14 overflow-hidden", children: [
    /* @__PURE__ */ c.jsx("div", { className: "beam", style: { left: "5%" } }),
    /* @__PURE__ */ c.jsx("div", { className: "beam", style: { right: "5%", animationDelay: "-4.5s" } }),
    /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 200 200", className: "orbit w-[120vmin] max-w-none opacity-20", children: [
      /* @__PURE__ */ c.jsx("circle", { cx: "100", cy: "100", r: "80", fill: "none", stroke: "#fff", strokeWidth: "9" }),
      /* @__PURE__ */ c.jsx("circle", { cx: "100", cy: "20", r: "16", fill: "#d10000" })
    ] }) }),
    /* @__PURE__ */ c.jsx("h1", { className: "relative font-term glitch glow slam text-6xl sm:text-8xl md:text-9xl leading-none", "data-text": "PIERCE.EXE", children: /* @__PURE__ */ c.jsx(Io, { cls: "" }) }),
    /* @__PURE__ */ c.jsx("p", { className: "relative mt-6 max-w-md text-white/85", children: "No studio. We come to you or meet you somewhere safe. Heavy style, clean work." }),
    /* @__PURE__ */ c.jsxs("div", { className: "relative mt-8 w-full max-w-sm flex flex-col sm:flex-row gap-4", children: [
      /* @__PURE__ */ c.jsx("a", { href: "#inquire", className: "btn flex-1", children: "Send inquiry" }),
      /* @__PURE__ */ c.jsx("a", { href: "/notes", className: "btn-ghost flex-1", children: "View piercing notes" })
    ] }),
    /* @__PURE__ */ c.jsx("span", { className: "absolute bottom-5 font-term text-3xl text-blood animate-bounce", children: "▼" })
  ] });
}
function Jf() {
  const k = "NO ONLINE PAYMENT  ◆  SINGLE USE NEEDLES  ◆  IMPLANT GRADE TITANIUM  ◆  STERILE EVERY TIME  ◆  MINORS WITH PARENT CONSENT  ◆  ";
  return /* @__PURE__ */ c.jsx("div", { className: "bg-blood text-black font-metal text-xl sm:text-2xl py-2 overflow-hidden border-y-4 border-white/80", children: /* @__PURE__ */ c.jsxs("div", { className: "marquee whitespace-nowrap", children: [
    /* @__PURE__ */ c.jsx("span", { children: k.repeat(3) }),
    /* @__PURE__ */ c.jsx("span", { children: k.repeat(3) })
  ] }) });
}
function qf() {
  return /* @__PURE__ */ c.jsxs("section", { id: "services", className: "max-w-6xl mx-auto px-4 py-16 sm:py-24", children: [
    /* @__PURE__ */ c.jsxs(Ll, { children: [
      "WHAT WE ",
      /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: "PIERCE" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: Qf.map(([k, T], h) => /* @__PURE__ */ c.jsx(Rl, { className: "h-full", children: /* @__PURE__ */ c.jsxs("div", { className: "plate h-full p-7", children: [
      /* @__PURE__ */ c.jsxs("span", { className: "font-term text-xl text-blood", children: [
        "0",
        h + 1
      ] }),
      /* @__PURE__ */ c.jsx("h3", { className: "font-metal text-3xl mt-1", children: k }),
      /* @__PURE__ */ c.jsx("p", { className: "mt-3 text-white/70", children: T })
    ] }) }, k)) })
  ] });
}
function bf() {
  return /* @__PURE__ */ c.jsxs("section", { className: "max-w-5xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ c.jsxs(Ll, { children: [
      "THE ",
      /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: "METAL" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Yf.map(([k, T], h) => /* @__PURE__ */ c.jsx(Rl, { children: /* @__PURE__ */ c.jsxs("div", { className: "plate py-6 text-center", children: [
      /* @__PURE__ */ c.jsx("div", { className: "swing", style: { animationDelay: -h * 0.9 + "s" }, children: T }),
      /* @__PURE__ */ c.jsx("p", { className: "font-term text-xl mt-3 tracking-widest", children: k })
    ] }) }, k)) })
  ] });
}
function ed() {
  const k = ["Send an inquiry", "We confirm a home visit or a meetup spot", "Under 18? A signed parent or guardian consent letter is required", "We bring sterile gear, pierce, and go over aftercare"];
  return /* @__PURE__ */ c.jsx("section", { id: "process", className: "bg-gradient-to-b from-black via-ember/30 to-black py-16 sm:py-24 px-4", children: /* @__PURE__ */ c.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ c.jsxs(Ll, { children: [
      "HOW IT GOES ",
      /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: "DOWN" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: k.map((T, h) => /* @__PURE__ */ c.jsx(Rl, { className: "h-full", children: /* @__PURE__ */ c.jsxs("div", { className: "plate h-full p-7 flex gap-5 items-start", children: [
      /* @__PURE__ */ c.jsx("span", { className: "font-metal text-5xl text-blood leading-none", children: h + 1 }),
      /* @__PURE__ */ c.jsx("p", { children: T })
    ] }) }, T)) }),
    /* @__PURE__ */ c.jsx("p", { className: "mt-8 text-sm text-white/70", children: "No deposits or payments on this website. Payment is settled in person." }),
    /* @__PURE__ */ c.jsx("a", { href: "/notes", className: "btn mt-6 sm:inline-block", children: "View piercing notes" })
  ] }) });
}
function td() {
  const k = { name: "", email: "", phone: "", age: "", piercing_type: "", placement: "", service_type: "", location: "", preferred_date: "", message: "", guardian_name: "", guardian_phone: "", consent_letter: null }, [T, h] = st.useState(k), [b, A] = st.useState({}), [Q, ce] = st.useState("idle"), fe = T.age !== "" && Number(T.age) < 18, O = (W) => (pe) => h({ ...T, [W]: pe.target.type === "file" ? pe.target.files[0] || null : pe.target.value });
  async function we(W) {
    W.preventDefault(), ce("sending"), A({});
    const pe = new FormData();
    Object.entries(T).forEach(([ve, G]) => {
      G !== "" && G !== null && pe.append(ve, G);
    });
    try {
      const ve = await fetch("/inquiries", {
        method: "POST",
        headers: { Accept: "application/json", "X-CSRF-TOKEN": document.querySelector("meta[name=csrf-token]").content },
        body: pe
      });
      if (ve.status === 422) {
        A((await ve.json()).errors || {}), ce("idle");
        return;
      }
      if (!ve.ok) throw new Error();
      ce("done"), h(k);
    } catch {
      ce("error");
    }
  }
  const K = "w-full min-h-12 bg-ink border-2 border-white/25 focus:border-blood focus:shadow-[0_0_14px_rgba(209,0,0,.6)] outline-none px-4 py-3 transition", U = ({ k: W }) => b[W] ? /* @__PURE__ */ c.jsx("p", { className: "text-blood text-sm mt-1", children: b[W][0] }) : null;
  return /* @__PURE__ */ c.jsxs("section", { id: "inquire", className: "max-w-3xl mx-auto px-4 py-16 sm:py-24", children: [
    /* @__PURE__ */ c.jsx(Ll, { children: /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: "INQUIRE" }) }),
    /* @__PURE__ */ c.jsx("p", { className: "text-white/70 mb-8 -mt-4", children: "Tell us what you want and where. We reply by email or phone. No payment is taken here." }),
    Q === "done" ? /* @__PURE__ */ c.jsxs("div", { className: "plate p-8 text-center border-blood", children: [
      /* @__PURE__ */ c.jsx("p", { className: "font-metal text-4xl text-blood", children: "INQUIRY SENT" }),
      /* @__PURE__ */ c.jsx("p", { className: "mt-3", children: "We will get back to you soon." }),
      /* @__PURE__ */ c.jsx("button", { onClick: () => ce("idle"), className: "mt-6 underline hover:text-blood", children: "Send another" })
    ] }) : /* @__PURE__ */ c.jsxs("form", { onSubmit: we, className: "grid gap-4", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("input", { className: K, placeholder: "Name *", value: T.name, onChange: O("name") }),
        /* @__PURE__ */ c.jsx(U, { k: "name" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, type: "email", placeholder: "Email *", value: T.email, onChange: O("email") }),
          /* @__PURE__ */ c.jsx(U, { k: "email" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, type: "tel", placeholder: "Phone (optional)", value: T.phone, onChange: O("phone") }),
          /* @__PURE__ */ c.jsx(U, { k: "phone" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, type: "number", inputMode: "numeric", min: "1", max: "99", placeholder: "Your age *", value: T.age, onChange: O("age") }),
          /* @__PURE__ */ c.jsx(U, { k: "age" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsxs("select", { className: K, value: T.piercing_type, onChange: O("piercing_type"), children: [
            /* @__PURE__ */ c.jsx("option", { value: "", children: "Piercing type *" }),
            Kf.map((W) => /* @__PURE__ */ c.jsx("option", { children: W }, W))
          ] }),
          /* @__PURE__ */ c.jsx(U, { k: "piercing_type" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("input", { className: K, placeholder: "Placement (e.g. navel, left helix)", value: T.placement, onChange: O("placement") }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsxs("select", { className: K, value: T.service_type, onChange: O("service_type"), children: [
            /* @__PURE__ */ c.jsx("option", { value: "", children: "Home service or meetup? *" }),
            /* @__PURE__ */ c.jsx("option", { children: "Home service" }),
            /* @__PURE__ */ c.jsx("option", { children: "Meetup" })
          ] }),
          /* @__PURE__ */ c.jsx(U, { k: "service_type" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, type: "date", value: T.preferred_date, onChange: O("preferred_date") }),
          /* @__PURE__ */ c.jsx(U, { k: "preferred_date" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("input", { className: K, placeholder: T.service_type === "Meetup" ? "Preferred meetup spot *" : "Your area / address for home service *", value: T.location, onChange: O("location") }),
        /* @__PURE__ */ c.jsx(U, { k: "location" })
      ] }),
      /* @__PURE__ */ c.jsx("textarea", { className: K, rows: "4", placeholder: "Details, jewelry ideas, questions", value: T.message, onChange: O("message") }),
      fe && /* @__PURE__ */ c.jsxs("div", { className: "plate border-blood p-6 grid gap-4", children: [
        /* @__PURE__ */ c.jsx("p", { className: "font-metal text-2xl text-blood", children: "UNDER 18? PARENT CONSENT NEEDED" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm text-white/80", children: "Upload a letter signed by your parent or guardian. Include their full name, signature, date, contact number, your name, and the piercing they allow. We may contact them to confirm, and having them present is best." }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, placeholder: "Parent / guardian full name *", value: T.guardian_name, onChange: O("guardian_name") }),
          /* @__PURE__ */ c.jsx(U, { k: "guardian_name" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("input", { className: K, type: "tel", placeholder: "Parent / guardian phone *", value: T.guardian_phone, onChange: O("guardian_phone") }),
          /* @__PURE__ */ c.jsx(U, { k: "guardian_phone" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsx("label", { className: "block text-sm mb-2", children: "Consent letter (PDF, JPG or PNG, max 5MB) *" }),
          /* @__PURE__ */ c.jsx("input", { type: "file", accept: ".pdf,.jpg,.jpeg,.png", onChange: O("consent_letter"), className: "block w-full text-sm file:mr-4 file:border-0 file:bg-blood file:text-white file:px-4 file:py-2 file:cursor-pointer" }),
          /* @__PURE__ */ c.jsx(U, { k: "consent_letter" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("button", { disabled: Q === "sending", className: "btn w-full", children: Q === "sending" ? "Sending..." : "Send inquiry" }),
      Q === "error" && /* @__PURE__ */ c.jsx("p", { className: "text-blood", children: "Something broke. Try again." })
    ] })
  ] });
}
function nd() {
  const [k, T] = st.useState("before"), [h, b] = Fa[k];
  return /* @__PURE__ */ c.jsxs("main", { className: "max-w-3xl mx-auto px-4 pt-24 pb-16 min-h-screen", children: [
    /* @__PURE__ */ c.jsxs("h1", { className: "font-metal text-5xl sm:text-7xl leading-tight", children: [
      "PIERCING ",
      /* @__PURE__ */ c.jsx("span", { className: "text-blood", children: "NOTES" })
    ] }),
    /* @__PURE__ */ c.jsx("p", { className: "text-white/70 mt-3 mb-8", children: "Read this before, during and after your appointment." }),
    /* @__PURE__ */ c.jsx("div", { className: "flex gap-2 mb-6", children: Object.entries(Fa).map(([A, [Q]]) => /* @__PURE__ */ c.jsx("button", { onClick: () => T(A), "aria-pressed": k === A, className: `tab ${k === A ? "on" : ""}`, children: Q }, A)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "plate p-7 drop", children: [
      /* @__PURE__ */ c.jsx("h2", { className: "font-metal text-3xl text-blood mb-5", children: h }),
      /* @__PURE__ */ c.jsx("ol", { className: "grid gap-4", children: b.map((A, Q) => /* @__PURE__ */ c.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ c.jsx("span", { className: "font-term text-2xl text-blood leading-none", children: String(Q + 1).padStart(2, "0") }),
        /* @__PURE__ */ c.jsx("span", { children: A })
      ] }, Q)) })
    ] }, k),
    /* @__PURE__ */ c.jsx("p", { className: "text-xs text-white/50 mt-4", children: "General guidance only, not medical advice." }),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-4", children: [
      /* @__PURE__ */ c.jsx("a", { href: "/#inquire", className: "btn flex-1", children: "Send inquiry" }),
      /* @__PURE__ */ c.jsx("a", { href: "/", className: "btn-ghost flex-1", children: "Back to home" })
    ] })
  ] });
}
function rd() {
  const k = window.location.pathname.replace(/\/+$/, "") === "/notes";
  return st.useEffect(() => {
    document.title = k ? "Piercing Notes | PIERCE.EXE" : "PIERCE.EXE";
  }, [k]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    !k && /* @__PURE__ */ c.jsx(Xf, {}),
    /* @__PURE__ */ c.jsx("div", { className: "grain" }),
    /* @__PURE__ */ c.jsx("div", { className: "vignette" }),
    /* @__PURE__ */ c.jsx(Gf, {}),
    k ? /* @__PURE__ */ c.jsx(nd, {}) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Zf, {}),
      /* @__PURE__ */ c.jsx(Jf, {}),
      /* @__PURE__ */ c.jsx(qf, {}),
      /* @__PURE__ */ c.jsx(Ua, {}),
      /* @__PURE__ */ c.jsx(bf, {}),
      /* @__PURE__ */ c.jsx(ed, {}),
      /* @__PURE__ */ c.jsx(Ua, {}),
      /* @__PURE__ */ c.jsx(td, {})
    ] }),
    /* @__PURE__ */ c.jsxs("footer", { className: "border-t-2 border-blood py-10 text-center text-white/60 text-sm px-5", children: [
      /* @__PURE__ */ c.jsx(Io, { cls: "text-4xl text-white" }),
      /* @__PURE__ */ c.jsx("p", { className: "mt-2", children: "Home service and meetups only. Minors need a signed parent or guardian consent letter." })
    ] })
  ] });
}
$f.createRoot(document.getElementById("app")).render(/* @__PURE__ */ c.jsx(rd, {}));
