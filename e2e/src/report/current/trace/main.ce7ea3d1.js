var rf = Object.defineProperty,
  lf = Object.defineProperties;
var of = Object.getOwnPropertyDescriptors;
var us = Object.getOwnPropertySymbols;
var sf = Object.prototype.hasOwnProperty,
  af = Object.prototype.propertyIsEnumerable;
var $i = (e, t, n) => (t in e ? rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
  _r = (e, t) => {
    for (var n in t || (t = {})) sf.call(t, n) && $i(e, n, t[n]);
    if (us) for (var n of us(t)) af.call(t, n) && $i(e, n, t[n]);
    return e;
  },
  bi = (e, t) => lf(e, of(t));
var Me = (e, t, n) => ($i(e, typeof t != 'symbol' ? t + '' : t, n), n);
const uf = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === 'childList')
        for (const o of l.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerpolicy && (l.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (l.credentials = 'omit')
        : (l.credentials = 'same-origin'),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
};
uf();
var A = { exports: {} },
  V = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var cs = Object.getOwnPropertySymbols,
  cf = Object.prototype.hasOwnProperty,
  ff = Object.prototype.propertyIsEnumerable;
function df(e) {
  if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}
function pf() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (l) {
      return t[l];
    });
    if (r.join('') !== '0123456789') return !1;
    var i = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (l) {
        i[l] = l;
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch {
    return !1;
  }
}
var Va = pf()
  ? Object.assign
  : function (e, t) {
      for (var n, r = df(e), i, l = 1; l < arguments.length; l++) {
        n = Object(arguments[l]);
        for (var o in n) cf.call(n, o) && (r[o] = n[o]);
        if (cs) {
          i = cs(n);
          for (var s = 0; s < i.length; s++) ff.call(n, i[s]) && (r[i[s]] = n[i[s]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lo = Va,
  fn = 60103,
  Wa = 60106;
V.Fragment = 60107;
V.StrictMode = 60108;
V.Profiler = 60114;
var Ka = 60109,
  Ga = 60110,
  Qa = 60112;
V.Suspense = 60113;
var Ya = 60115,
  Xa = 60116;
if (typeof Symbol == 'function' && Symbol.for) {
  var Be = Symbol.for;
  (fn = Be('react.element')),
    (Wa = Be('react.portal')),
    (V.Fragment = Be('react.fragment')),
    (V.StrictMode = Be('react.strict_mode')),
    (V.Profiler = Be('react.profiler')),
    (Ka = Be('react.provider')),
    (Ga = Be('react.context')),
    (Qa = Be('react.forward_ref')),
    (V.Suspense = Be('react.suspense')),
    (Ya = Be('react.memo')),
    (Xa = Be('react.lazy'));
}
var fs = typeof Symbol == 'function' && Symbol.iterator;
function mf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (fs && e[fs]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
function fr(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var qa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Za = {};
function dn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Za), (this.updater = n || qa);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(fr(85));
  this.updater.enqueueSetState(this, e, t, 'setState');
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ja() {}
Ja.prototype = dn.prototype;
function oo(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Za), (this.updater = n || qa);
}
var so = (oo.prototype = new Ja());
so.constructor = oo;
lo(so, dn.prototype);
so.isPureReactComponent = !0;
var ao = { current: null },
  eu = Object.prototype.hasOwnProperty,
  tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function nu(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = '' + t.key), t))
      eu.call(t, r) && !tu.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: fn, type: e, key: l, ref: o, props: i, _owner: ao.current };
}
function hf(e, t) {
  return { $$typeof: fn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function uo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fn;
}
function gf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ds = /\/+/g;
function Hi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? gf('' + e.key) : t.toString(36);
}
function Fr(e, t, n, r, i) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case fn:
          case Wa:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Hi(o, 0) : r),
      Array.isArray(i)
        ? ((n = ''),
          e != null && (n = e.replace(ds, '$&/') + '/'),
          Fr(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (uo(i) &&
            (i = hf(i, n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(ds, '$&/') + '/') + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Array.isArray(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Hi(l, s);
      o += Fr(l, t, n, a, i);
    }
  else if (((a = mf(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(l = e.next()).done; ) (l = l.value), (a = r + Hi(l, s++)), (o += Fr(l, t, n, a, i));
  else if (l === 'object')
    throw (
      ((t = '' + e),
      Error(fr(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
    );
  return o;
}
function kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fr(e, r, '', '', function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function vf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 && ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        },
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var ru = { current: null };
function Ze() {
  var e = ru.current;
  if (e === null) throw Error(fr(321));
  return e;
}
var yf = {
  ReactCurrentDispatcher: ru,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: ao,
  IsSomeRendererActing: { current: !1 },
  assign: lo,
};
V.Children = {
  map: kr,
  forEach: function (e, t, n) {
    kr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uo(e)) throw Error(fr(143));
    return e;
  },
};
V.Component = dn;
V.PureComponent = oo;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yf;
V.cloneElement = function (e, t, n) {
  if (e == null) throw Error(fr(267, e));
  var r = lo({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = ao.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t) eu.call(t, a) && !tu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: fn, type: e.type, key: i, ref: l, props: r, _owner: o };
};
V.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Ga,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: Ka, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = nu;
V.createFactory = function (e) {
  var t = nu.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Qa, render: e };
};
V.isValidElement = uo;
V.lazy = function (e) {
  return { $$typeof: Xa, _payload: { _status: -1, _result: e }, _init: vf };
};
V.memo = function (e, t) {
  return { $$typeof: Ya, type: e, compare: t === void 0 ? null : t };
};
V.useCallback = function (e, t) {
  return Ze().useCallback(e, t);
};
V.useContext = function (e, t) {
  return Ze().useContext(e, t);
};
V.useDebugValue = function () {};
V.useEffect = function (e, t) {
  return Ze().useEffect(e, t);
};
V.useImperativeHandle = function (e, t, n) {
  return Ze().useImperativeHandle(e, t, n);
};
V.useLayoutEffect = function (e, t) {
  return Ze().useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ze().useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ze().useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ze().useRef(e);
};
V.useState = function (e) {
  return Ze().useState(e);
};
V.version = '17.0.2';
A.exports = V;
var Si = { exports: {} },
  dr = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = A.exports,
  iu = 60103;
dr.Fragment = 60107;
if (typeof Symbol == 'function' && Symbol.for) {
  var ps = Symbol.for;
  (iu = ps('react.element')), (dr.Fragment = ps('react.fragment'));
}
var Ef = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sf = Object.prototype.hasOwnProperty,
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = '' + n), t.key !== void 0 && (l = '' + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Sf.call(t, r) && !Nf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: iu, type: e, key: l, ref: o, props: i, _owner: Ef.current };
}
dr.jsx = lu;
dr.jsxs = lu;
Si.exports = dr;
const v = Si.exports.jsx,
  I = Si.exports.jsxs,
  _f = Si.exports.Fragment,
  ji = 50,
  gl = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = 'vertical',
    children: i,
  }) => {
    const [l, o] = A.exports.useState(Math.max(ji, e)),
      [s, a] = A.exports.useState(null),
      u = A.exports.Children.toArray(i);
    document.body.style.userSelect = s ? 'none' : 'inherit';
    let p = {};
    return (
      r === 'vertical'
        ? n
          ? (p = { top: s ? 0 : l - 4, bottom: s ? 0 : void 0, height: s ? 'initial' : 8 })
          : (p = { bottom: s ? 0 : l - 4, top: s ? 0 : void 0, height: s ? 'initial' : 8 })
        : n
        ? (p = { left: s ? 0 : l - 4, right: s ? 0 : void 0, width: s ? 'initial' : 8 })
        : (p = { right: s ? 0 : l - 4, left: s ? 0 : void 0, width: s ? 'initial' : 8 }),
      I('div', {
        className: 'split-view ' + r + (n ? ' sidebar-first' : ''),
        children: [
          v('div', { className: 'split-view-main', children: u[0] }),
          !t && v('div', { style: { flexBasis: l }, className: 'split-view-sidebar', children: u[1] }),
          !t &&
            v('div', {
              style: p,
              className: 'split-view-resizer',
              onMouseDown: (w) => a({ offset: r === 'vertical' ? w.clientY : w.clientX, size: l }),
              onMouseUp: () => a(null),
              onMouseMove: (w) => {
                if (!w.buttons) a(null);
                else if (s) {
                  const N = (r === 'vertical' ? w.clientY : w.clientX) - s.offset,
                    k = n ? s.size + N : s.size - N,
                    d = w.target.parentElement.getBoundingClientRect(),
                    c = Math.min(Math.max(ji, k), (r === 'vertical' ? d.height : d.width) - ji);
                  o(c);
                }
              },
            }),
        ],
      })
    );
  };
function Qn(e) {
  if (!isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0) + 'ms';
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + 's';
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + 'm';
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + 'h' : (r / 24).toFixed(1) + 'd';
}
function ou(e, t, n, r, i) {
  let l = r || 0,
    o = i !== void 0 ? i : e.length;
  for (; l < o; ) {
    const s = (l + o) >> 1;
    n(t, e[s]) >= 0 ? (l = s + 1) : (o = s);
  }
  return o;
}
const $r = Symbol('context'),
  su = Symbol('next'),
  ms = Symbol('events'),
  hs = Symbol('resources');
class au {
  constructor(t) {
    Me(this, 'startTime');
    Me(this, 'endTime');
    Me(this, 'browserName');
    Me(this, 'platform');
    Me(this, 'wallTime');
    Me(this, 'title');
    Me(this, 'options');
    Me(this, 'pages');
    Me(this, 'actions');
    Me(this, 'events');
    Me(this, 'hasSource');
    var n, r, i, l;
    t.forEach((o) => kf(o)),
      (this.browserName = ((n = t[0]) == null ? void 0 : n.browserName) || ''),
      (this.platform = ((r = t[0]) == null ? void 0 : r.platform) || ''),
      (this.title = ((i = t[0]) == null ? void 0 : i.title) || ''),
      (this.options = ((l = t[0]) == null ? void 0 : l.options) || {}),
      (this.wallTime = t.map((o) => o.wallTime).reduce((o, s) => Math.min(o || Number.MAX_VALUE, s), Number.MAX_VALUE)),
      (this.startTime = t.map((o) => o.startTime).reduce((o, s) => Math.min(o, s), Number.MAX_VALUE)),
      (this.endTime = t.map((o) => o.endTime).reduce((o, s) => Math.max(o, s), Number.MIN_VALUE)),
      (this.pages = [].concat(...t.map((o) => o.pages))),
      (this.actions = [].concat(...t.map((o) => o.actions))),
      (this.events = [].concat(...t.map((o) => o.events))),
      (this.hasSource = t.some((o) => o.hasSource)),
      this.actions.sort((o, s) => o.metadata.startTime - s.metadata.startTime),
      this.events.sort((o, s) => o.metadata.startTime - s.metadata.startTime);
  }
}
function kf(e) {
  for (const t of e.pages) t[$r] = e;
  for (let t = 0; t < e.actions.length; ++t) {
    const n = e.actions[t];
    (n[$r] = e), (n[su] = e.actions[t + 1]);
  }
  for (const t of e.events) t[$r] = e;
}
function pr(e) {
  return e[$r];
}
function uu(e) {
  return e[su];
}
function cu(e) {
  var i;
  let t = 0,
    n = 0;
  const r = pr(e);
  for (const l of fu(e)) {
    if (l.metadata.method === 'console') {
      const { guid: o } = l.metadata.params.message,
        s = (i = r.objects[o]) == null ? void 0 : i.type;
      s === 'warning' ? ++n : s === 'error' && ++t;
    }
    l.metadata.method === 'pageError' && ++t;
  }
  return { errors: t, warnings: n };
}
function fu(e) {
  let t = e[ms];
  if (t) return t;
  const n = uu(e);
  return (
    (t = pr(e).events.filter(
      (r) => r.metadata.startTime >= e.metadata.startTime && (!n || r.metadata.startTime < n.metadata.startTime),
    )),
    (e[ms] = t),
    t
  );
}
function du(e) {
  let t = e[hs];
  if (t) return t;
  const n = uu(e);
  return (
    (t = pr(e).resources.filter(
      (r) => r._monotonicTime > e.metadata.startTime && (!n || r._monotonicTime < n.metadata.startTime),
    )),
    (e[hs] = t),
    t
  );
}
const xf = ({
  actions: e = [],
  selectedAction: t = void 0,
  highlightedAction: n = void 0,
  onSelected: r = () => {},
  onHighlighted: i = () => {},
  setSelectedTab: l = () => {},
}) => {
  const o = A.exports.createRef();
  return (
    A.exports.useEffect(() => {
      var s;
      (s = o.current) == null || s.focus();
    }, [t, o]),
    v('div', {
      className: 'action-list vbox',
      children: I('div', {
        className: 'action-list-content',
        tabIndex: 0,
        onKeyDown: (s) => {
          var w;
          if (s.key !== 'ArrowDown' && s.key !== 'ArrowUp') return;
          s.stopPropagation(), s.preventDefault();
          const a = t ? e.indexOf(t) : -1;
          let u = a;
          s.key === 'ArrowDown' && (a === -1 ? (u = 0) : (u = Math.min(a + 1, e.length - 1))),
            s.key === 'ArrowUp' && (a === -1 ? (u = e.length - 1) : (u = Math.max(a - 1, 0)));
          const p = (w = o.current) == null ? void 0 : w.children.item(u);
          p != null && p.scrollIntoViewIfNeeded ? p.scrollIntoViewIfNeeded(!1) : p == null || p.scrollIntoView(),
            r(e[u]);
        },
        ref: o,
        children: [
          e.length === 0 && v('div', { className: 'no-actions-entry', children: 'No actions recorded' }),
          e.map((s) => {
            var k, _;
            const { metadata: a } = s,
              u = s === t ? ' selected' : '',
              p = s === n ? ' highlighted' : '',
              w = (_ = (k = a.error) == null ? void 0 : k.error) == null ? void 0 : _.message,
              { errors: h, warnings: N } = cu(s);
            return I(
              'div',
              {
                className: 'action-entry' + u + p,
                onClick: () => r(s),
                onMouseEnter: () => i(s),
                onMouseLeave: () => n === s && i(void 0),
                children: [
                  I('div', {
                    className: 'action-title',
                    children: [
                      v('span', { children: a.apiName }),
                      a.params.selector &&
                        v('div', {
                          className: 'action-selector',
                          title: a.params.selector,
                          children: a.params.selector,
                        }),
                      a.method === 'goto' &&
                        a.params.url &&
                        v('div', { className: 'action-url', title: a.params.url, children: a.params.url }),
                    ],
                  }),
                  v('div', {
                    className: 'action-duration',
                    style: { flex: 'none' },
                    children: a.endTime ? Qn(a.endTime - a.startTime) : 'Timed Out',
                  }),
                  I('div', {
                    className: 'action-icons',
                    onClick: () => l('console'),
                    children: [
                      !!h &&
                        I('div', {
                          className: 'action-icon',
                          children: [
                            v('span', { className: 'codicon codicon-error' }),
                            v('span', { className: 'action-icon-value', children: h }),
                          ],
                        }),
                      !!N &&
                        I('div', {
                          className: 'action-icon',
                          children: [
                            v('span', { className: 'codicon codicon-warning' }),
                            v('span', { className: 'action-icon-value', children: N }),
                          ],
                        }),
                    ],
                  }),
                  w && v('div', { className: 'codicon codicon-issues', title: w }),
                ],
              },
              a.id,
            );
          }),
        ],
      }),
    })
  );
};
const Tf = ({ action: e }) => {
  var s, a;
  if (!e) return null;
  const t = e.metadata.log,
    n = (a = (s = e.metadata.error) == null ? void 0 : s.error) == null ? void 0 : a.message,
    r = _r({}, e.metadata.params);
  delete r.info;
  const i = Object.keys(r),
    l = new Date(e.metadata.wallTime).toLocaleString(),
    o = e.metadata.endTime ? Qn(e.metadata.endTime - e.metadata.startTime) : 'Timed Out';
  return I('div', {
    className: 'call-tab',
    children: [
      I(
        'div',
        { className: 'call-error', hidden: !n, children: [v('div', { className: 'codicon codicon-issues' }), n] },
        'error',
      ),
      v('div', { className: 'call-line', children: e.metadata.apiName }),
      I(_f, {
        children: [
          v('div', { className: 'call-section', children: 'Time' }),
          e.metadata.wallTime &&
            I('div', {
              className: 'call-line',
              children: ['wall time: ', v('span', { className: 'datetime', title: l, children: l })],
            }),
          I('div', {
            className: 'call-line',
            children: ['duration: ', v('span', { className: 'datetime', title: o, children: o })],
          }),
        ],
      }),
      !!i.length && v('div', { className: 'call-section', children: 'Parameters' }),
      !!i.length && i.map((u, p) => gs(e.metadata, u, r[u], 'param-' + p)),
      !!e.metadata.result && v('div', { className: 'call-section', children: 'Return value' }),
      !!e.metadata.result &&
        Object.keys(e.metadata.result).map((u, p) => gs(e.metadata, u, e.metadata.result[u], 'result-' + p)),
      v('div', { className: 'call-section', children: 'Log' }),
      t.map((u, p) => v('div', { className: 'call-line', children: u }, p)),
    ],
  });
};
function gs(e, t, n, r) {
  const { title: i, type: l } = Cf(e, t, n);
  let o = i.replace(/\n/g, '\u21B5');
  return (
    l === 'string' && (o = `"${o}"`),
    I('div', { className: 'call-line', children: [t, ': ', v('span', { className: l, title: i, children: o })] }, r)
  );
}
function Cf(e, t, n) {
  e.method.includes('eval') &&
    (t === 'arg' && (n = qr(n.value, new Array(10).fill({ handle: '<handle>' }))),
    t === 'value' && (n = qr(n, new Array(10).fill({ handle: '<handle>' }))));
  const r = typeof n;
  return r !== 'object' || n === null
    ? { title: String(n), type: r }
    : n.guid
    ? { title: '<handle>', type: 'handle' }
    : { title: JSON.stringify(n), type: 'object' };
}
function qr(e, t) {
  if (e.n !== void 0) return e.n;
  if (e.s !== void 0) return e.s;
  if (e.b !== void 0) return e.b;
  if (e.v !== void 0) {
    if (e.v === 'undefined') return;
    if (e.v === 'null') return null;
    if (e.v === 'NaN') return NaN;
    if (e.v === 'Infinity') return 1 / 0;
    if (e.v === '-Infinity') return -1 / 0;
    if (e.v === '-0') return -0;
  }
  if (e.d !== void 0) return new Date(e.d);
  if (e.r !== void 0) return new RegExp(e.r.p, e.r.f);
  if (e.a !== void 0) return e.a.map((n) => qr(n, t));
  if (e.o !== void 0) {
    const n = {};
    for (const { k: r, v: i } of e.o) n[r] = qr(i, t);
    return n;
  }
  return e.h !== void 0 ? (t === void 0 ? '<object>' : t[e.h]) : '<object>';
}
const Rf = ({ action: e }) => {
  const t = A.exports.useMemo(() => {
    if (!e) return [];
    const n = [],
      r = pr(e);
    for (const i of fu(e))
      if (!(i.metadata.method !== 'console' && i.metadata.method !== 'pageError')) {
        if (i.metadata.method === 'console') {
          const { guid: l } = i.metadata.params.message;
          n.push({ message: r.objects[l] });
        }
        i.metadata.method === 'pageError' && n.push({ error: i.metadata.params.error });
      }
    return n;
  }, [e]);
  return v('div', {
    className: 'console-tab',
    children: t.map((n, r) => {
      const { message: i, error: l } = n;
      if (i) {
        const o = i.location.url,
          s = o ? o.substring(o.lastIndexOf('/') + 1) : '<anonymous>';
        return I(
          'div',
          {
            className: 'console-line ' + i.type,
            children: [
              I('span', { className: 'console-location', children: [s, ':', i.location.lineNumber] }),
              v('span', { className: 'codicon codicon-' + Mf(i) }),
              v('span', { className: 'console-line-message', children: i.text }),
            ],
          },
          r,
        );
      }
      if (l) {
        const { error: o, value: s } = l;
        return o
          ? I(
              'div',
              {
                className: 'console-line error',
                children: [
                  v('span', { className: 'codicon codicon-error' }),
                  v('span', { className: 'console-line-message', children: o.message }),
                  v('div', { className: 'console-stack', children: o.stack }),
                ],
              },
              r,
            )
          : I(
              'div',
              {
                className: 'console-line error',
                children: [
                  v('span', { className: 'codicon codicon-error' }),
                  v('span', { className: 'console-line-message', children: s }),
                ],
              },
              r,
            );
      }
      return null;
    }),
  });
};
function Mf(e) {
  switch (e.type) {
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
  }
  return 'blank';
}
const Of = ({ title: e, children: t, setExpanded: n, expanded: r, style: i }) =>
  I('div', {
    style: bi(_r({}, i), { display: 'flex', flexDirection: 'column' }),
    children: [
      I('div', {
        style: { display: 'flex', flexDirection: 'row', alignItems: 'center', whiteSpace: 'nowrap' },
        children: [
          v('div', {
            className: 'codicon codicon-' + (r ? 'chevron-down' : 'chevron-right'),
            style: { cursor: 'pointer', color: 'var(--color)', marginRight: '4px' },
            onClick: () => n(!r),
          }),
          e,
        ],
      }),
      r && v('div', { style: { display: 'flex', flex: 'auto', margin: '5px 0 5px 20px' }, children: t }),
    ],
  });
const Lf = ({ resource: e, index: t, selected: n, setSelected: r }) => {
  const [i, l] = A.exports.useState(!1),
    [o, s] = A.exports.useState(null),
    [a, u] = A.exports.useState(null);
  A.exports.useEffect(() => {
    l(!1), r(-1);
  }, [e, r]),
    A.exports.useEffect(() => {
      (async () => {
        if (e.request.postData)
          if (e.request.postData._sha1) {
            const m = await (await fetch(`sha1/${e.request.postData._sha1}`)).text();
            s(m);
          } else s(e.request.postData.text);
        if (e.response.content._sha1) {
          const g = e.response.content.mimeType.includes('image'),
            m = await fetch(`sha1/${e.response.content._sha1}`);
          if (g) {
            const S = await m.blob(),
              y = new FileReader(),
              C = new Promise((O) => (y.onload = O));
            y.readAsDataURL(S), u({ dataUrl: (await C).target.result });
          } else u({ text: await m.text() });
        }
      })();
    }, [i, e]);
  function p(f, g) {
    if (f === null) return 'Loading...';
    const m = f;
    if (m === '') return '<Empty>';
    if (g.includes('application/json'))
      try {
        return JSON.stringify(JSON.parse(m), null, 2);
      } catch {
        return m;
      }
    return g.includes('application/x-www-form-urlencoded') ? decodeURIComponent(m) : m;
  }
  function w(f) {
    return f >= 200 && f < 400 ? 'status-success' : f >= 400 ? 'status-failure' : 'status-neutral';
  }
  const h = e.request.headers.find((f) => f.name === 'Content-Type'),
    N = h ? h.value : '',
    k = e.request.url.substring(e.request.url.lastIndexOf('/') + 1);
  let _ = e.response.content.mimeType;
  const d = _.match(/^(.*);\s*charset=.*$/);
  d && (_ = d[1]);
  const c = () =>
    e.response._failureText
      ? I('div', {
          className: 'network-request-title',
          children: [
            v('div', { className: 'network-request-title-status status-failure', children: e.response._failureText }),
            v('div', { className: 'network-request-title-method', children: e.request.method }),
            v('div', { className: 'network-request-title-url', children: e.request.url }),
          ],
        })
      : I('div', {
          className: 'network-request-title',
          children: [
            v('div', {
              className: 'network-request-title-status ' + w(e.response.status),
              children: e.response.status,
            }),
            v('div', { className: 'network-request-title-method', children: e.request.method }),
            v('div', { className: 'network-request-title-url', children: k }),
            v('div', { className: 'network-request-title-content-type', children: _ }),
          ],
        });
  return v('div', {
    className: 'network-request ' + (n ? 'selected' : ''),
    onClick: () => r(t),
    children: v(Of, {
      expanded: i,
      setExpanded: l,
      style: { width: '100%' },
      title: c(),
      children: I('div', {
        className: 'network-request-details',
        children: [
          v('div', { className: 'network-request-details-header', children: 'URL' }),
          v('div', { className: 'network-request-details-url', children: e.request.url }),
          v('div', { className: 'network-request-details-header', children: 'Request Headers' }),
          v('div', {
            className: 'network-request-headers',
            children: e.request.headers.map((f) => `${f.name}: ${f.value}`).join(`
`),
          }),
          v('div', { className: 'network-request-details-header', children: 'Response Headers' }),
          v('div', {
            className: 'network-request-headers',
            children: e.response.headers.map((f) => `${f.name}: ${f.value}`).join(`
`),
          }),
          e.request.postData ? v('div', { className: 'network-request-details-header', children: 'Request Body' }) : '',
          e.request.postData ? v('div', { className: 'network-request-body', children: p(o, N) }) : '',
          v('div', { className: 'network-request-details-header', children: 'Response Body' }),
          e.response.content._sha1
            ? ''
            : v('div', {
                className: 'network-request-response-body',
                children: 'Response body is not available for this request.',
              }),
          a !== null && a.dataUrl ? v('img', { src: a.dataUrl }) : '',
          a !== null && a.text
            ? v('div', { className: 'network-request-response-body', children: p(a.text, e.response.content.mimeType) })
            : '',
        ],
      }),
    }),
  });
};
const Pf = ({ action: e }) => {
  const [t, n] = A.exports.useState(0),
    r = e ? du(e) : [];
  return v('div', {
    className: 'network-tab',
    children: r.map((i, l) => v(Lf, { resource: i, index: l, selected: t === l, setSelected: n }, l)),
  });
};
function Df(e, t, n, r) {
  const [i, l] = A.exports.useState(n);
  return (
    A.exports.useEffect(() => {
      let o = !1;
      return (
        r !== void 0 && l(r),
        e().then((s) => {
          o || l(s);
        }),
        () => {
          o = !0;
        }
      );
    }, t),
    i
  );
}
function co() {
  const e = A.exports.useRef(null),
    [t, n] = A.exports.useState(new DOMRect(0, 0, 10, 10));
  return (
    A.exports.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const i = new ResizeObserver((l) => {
        const o = l[l.length - 1];
        o && o.contentRect && n(o.contentRect);
      });
      return i.observe(r), () => i.unobserve(r);
    }, [e]),
    [t, e]
  );
}
const If = ({ action: e }) => {
  var f, g;
  const [t, n] = co(),
    [r, i] = A.exports.useState(0),
    l = new Map();
  for (const m of (e == null ? void 0 : e.metadata.snapshots) || []) l.set(m.title, m);
  const o = l.get('action') || l.get('after'),
    s = [o ? bi(_r({}, o), { title: 'action' }) : void 0, l.get('before'), l.get('after')].filter(Boolean);
  let a = 'data:text/html,<body style="background: #ddd"></body>',
    u,
    p,
    w;
  if (e) {
    const m = s[r];
    if (m && m.snapshotName) {
      const S = new URLSearchParams();
      S.set('trace', pr(e).traceUrl),
        S.set('name', m.snapshotName),
        (a = new URL(`snapshot/${e.metadata.pageId}?${S.toString()}`, window.location.href).toString()),
        (u = new URL(`snapshotInfo/${e.metadata.pageId}?${S.toString()}`, window.location.href).toString()),
        m.snapshotName.includes('action') &&
          ((p = (f = e.metadata.point) == null ? void 0 : f.x), (w = (g = e.metadata.point) == null ? void 0 : g.y));
    }
  }
  A.exports.useEffect(() => {
    s.length >= 1 && r >= s.length && i(s.length - 1);
  }, [r, s]);
  const h = A.exports.useRef(null),
    [N, k] = A.exports.useState({ viewport: vs, url: '' });
  A.exports.useEffect(() => {
    (async () => {
      if (u) {
        const S = await (await fetch(u)).json();
        S.error || k(S);
      } else k({ viewport: vs, url: '' });
      if (!!h.current)
        try {
          h.current.src = a + (p === void 0 ? '' : `&pointX=${p}&pointY=${w}`);
        } catch {}
    })();
  }, [h, a, u, p, w]);
  const _ = N.viewport,
    d = Math.min(t.width / _.width, t.height / _.height, 1),
    c = { width: _.width * d, height: _.height * d };
  return I('div', {
    className: 'snapshot-tab',
    tabIndex: 0,
    onKeyDown: (m) => {
      m.key === 'ArrowRight' && i(Math.min(r + 1, s.length - 1)), m.key === 'ArrowLeft' && i(Math.max(r - 1, 0));
    },
    children: [
      v('div', {
        className: 'tab-strip',
        children: s.map((m, S) =>
          v(
            'div',
            {
              className: 'tab-element ' + (r === S ? ' selected' : ''),
              onClick: () => i(S),
              children: v('div', { className: 'tab-label', children: Af(m.title) }),
            },
            m.title,
          ),
        ),
      }),
      v('div', { className: 'snapshot-url', title: N.url, children: N.url }),
      v('div', {
        ref: n,
        className: 'snapshot-wrapper',
        children: s.length
          ? v('div', {
              className: 'snapshot-container',
              style: {
                width: _.width + 'px',
                height: _.height + 'px',
                transform: `translate(${(-_.width * (1 - d)) / 2 + (t.width - c.width) / 2}px, ${
                  (-_.height * (1 - d)) / 2 + (t.height - c.height) / 2
                }px) scale(${d})`,
              },
              children: v('iframe', { ref: h, id: 'snapshot', name: 'snapshot' }),
            })
          : v('div', { className: 'no-snapshot', children: 'Action does not have snapshots' }),
      }),
    ],
  });
};
function Af(e) {
  return e === 'before' ? 'Before' : e === 'after' ? 'After' : e === 'action' ? 'Action' : e;
}
const vs = { width: 1280, height: 720 };
function fo(e) {
  return (
    e instanceof Map
      ? (e.clear =
          e.delete =
          e.set =
            function () {
              throw new Error('map is read-only');
            })
      : e instanceof Set &&
        (e.add =
          e.clear =
          e.delete =
            function () {
              throw new Error('set is read-only');
            }),
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach(function (t) {
      var n = e[t];
      typeof n == 'object' && !Object.isFrozen(n) && fo(n);
    }),
    e
  );
}
var pu = fo,
  Bf = fo;
pu.default = Bf;
class ys {
  constructor(t) {
    t.data === void 0 && (t.data = {}), (this.data = t.data);
  }
  ignoreMatch() {
    this.ignore = !0;
  }
}
function Yt(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
function nt(e, ...t) {
  const n = Object.create(null);
  for (const r in e) n[r] = e[r];
  return (
    t.forEach(function (r) {
      for (const i in r) n[i] = r[i];
    }),
    n
  );
}
const Uf = '</span>',
  ws = (e) => !!e.kind;
class zf {
  constructor(t, n) {
    (this.buffer = ''), (this.classPrefix = n.classPrefix), t.walk(this);
  }
  addText(t) {
    this.buffer += Yt(t);
  }
  openNode(t) {
    if (!ws(t)) return;
    let n = t.kind;
    t.sublanguage || (n = `${this.classPrefix}${n}`), this.span(n);
  }
  closeNode(t) {
    !ws(t) || (this.buffer += Uf);
  }
  value() {
    return this.buffer;
  }
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
class po {
  constructor() {
    (this.rootNode = { children: [] }), (this.stack = [this.rootNode]);
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(t) {
    this.top.children.push(t);
  }
  openNode(t) {
    const n = { kind: t, children: [] };
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  static _walk(t, n) {
    return (
      typeof n == 'string'
        ? t.addText(n)
        : n.children && (t.openNode(n), n.children.forEach((r) => this._walk(t, r)), t.closeNode(n)),
      t
    );
  }
  static _collapse(t) {
    typeof t != 'string' &&
      (!t.children ||
        (t.children.every((n) => typeof n == 'string')
          ? (t.children = [t.children.join('')])
          : t.children.forEach((n) => {
              po._collapse(n);
            })));
  }
}
class Ff extends po {
  constructor(t) {
    super();
    this.options = t;
  }
  addKeyword(t, n) {
    t !== '' && (this.openNode(n), this.addText(t), this.closeNode());
  }
  addText(t) {
    t !== '' && this.add(t);
  }
  addSublanguage(t, n) {
    const r = t.root;
    (r.kind = n), (r.sublanguage = !0), this.add(r);
  }
  toHTML() {
    return new zf(this, this.options).value();
  }
  finalize() {
    return !0;
  }
}
function $f(e) {
  return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}
function Yn(e) {
  return e ? (typeof e == 'string' ? e : e.source) : null;
}
function bf(...e) {
  return e.map((n) => Yn(n)).join('');
}
function Hf(...e) {
  return '(' + e.map((n) => Yn(n)).join('|') + ')';
}
function jf(e) {
  return new RegExp(e.toString() + '|').exec('').length - 1;
}
function Vf(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
function Wf(e, t = '|') {
  const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  let r = 0,
    i = '';
  for (let l = 0; l < e.length; l++) {
    r += 1;
    const o = r;
    let s = Yn(e[l]);
    for (l > 0 && (i += t), i += '('; s.length > 0; ) {
      const a = n.exec(s);
      if (a == null) {
        i += s;
        break;
      }
      (i += s.substring(0, a.index)),
        (s = s.substring(a.index + a[0].length)),
        a[0][0] === '\\' && a[1] ? (i += '\\' + String(Number(a[1]) + o)) : ((i += a[0]), a[0] === '(' && r++);
    }
    i += ')';
  }
  return i;
}
const mu = '[a-zA-Z]\\w*',
  mo = '[a-zA-Z_]\\w*',
  ho = '\\b\\d+(\\.\\d+)?',
  hu = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
  gu = '\\b(0b[01]+)',
  Kf =
    '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
  Gf = (e = {}) => {
    const t = /^#![ ]*\//;
    return (
      e.binary && (e.begin = bf(t, /.*\b/, e.binary, /\b.*/)),
      nt(
        {
          className: 'meta',
          begin: t,
          end: /$/,
          relevance: 0,
          'on:begin': (n, r) => {
            n.index !== 0 && r.ignoreMatch();
          },
        },
        e,
      )
    );
  },
  Xn = { begin: '\\\\[\\s\\S]', relevance: 0 },
  Qf = { className: 'string', begin: "'", end: "'", illegal: '\\n', contains: [Xn] },
  Yf = { className: 'string', begin: '"', end: '"', illegal: '\\n', contains: [Xn] },
  vu = {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  Ni = function (e, t, n = {}) {
    const r = nt({ className: 'comment', begin: e, end: t, contains: [] }, n);
    return (
      r.contains.push(vu),
      r.contains.push({ className: 'doctag', begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):', relevance: 0 }),
      r
    );
  },
  Xf = Ni('//', '$'),
  qf = Ni('/\\*', '\\*/'),
  Zf = Ni('#', '$'),
  Jf = { className: 'number', begin: ho, relevance: 0 },
  ed = { className: 'number', begin: hu, relevance: 0 },
  td = { className: 'number', begin: gu, relevance: 0 },
  nd = {
    className: 'number',
    begin: ho + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
    relevance: 0,
  },
  rd = {
    begin: /(?=\/[^/\n]*\/)/,
    contains: [
      {
        className: 'regexp',
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [Xn, { begin: /\[/, end: /\]/, relevance: 0, contains: [Xn] }],
      },
    ],
  },
  id = { className: 'title', begin: mu, relevance: 0 },
  ld = { className: 'title', begin: mo, relevance: 0 },
  od = { begin: '\\.\\s*' + mo, relevance: 0 },
  sd = function (e) {
    return Object.assign(e, {
      'on:begin': (t, n) => {
        n.data._beginMatch = t[1];
      },
      'on:end': (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      },
    });
  };
var xr = Object.freeze({
  __proto__: null,
  IDENT_RE: mu,
  UNDERSCORE_IDENT_RE: mo,
  NUMBER_RE: ho,
  C_NUMBER_RE: hu,
  BINARY_NUMBER_RE: gu,
  RE_STARTERS_RE: Kf,
  SHEBANG: Gf,
  BACKSLASH_ESCAPE: Xn,
  APOS_STRING_MODE: Qf,
  QUOTE_STRING_MODE: Yf,
  PHRASAL_WORDS_MODE: vu,
  COMMENT: Ni,
  C_LINE_COMMENT_MODE: Xf,
  C_BLOCK_COMMENT_MODE: qf,
  HASH_COMMENT_MODE: Zf,
  NUMBER_MODE: Jf,
  C_NUMBER_MODE: ed,
  BINARY_NUMBER_MODE: td,
  CSS_NUMBER_MODE: nd,
  REGEXP_MODE: rd,
  TITLE_MODE: id,
  UNDERSCORE_TITLE_MODE: ld,
  METHOD_GUARD: od,
  END_SAME_AS_BEGIN: sd,
});
function ad(e, t) {
  e.input[e.index - 1] === '.' && t.ignoreMatch();
}
function ud(e, t) {
  !t ||
    !e.beginKeywords ||
    ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
    (e.__beforeBegin = ad),
    (e.keywords = e.keywords || e.beginKeywords),
    delete e.beginKeywords);
}
function cd(e, t) {
  !Array.isArray(e.illegal) || (e.illegal = Hf(...e.illegal));
}
function fd(e, t) {
  if (!!e.match) {
    if (e.begin || e.end) throw new Error('begin & end are not supported with match');
    (e.begin = e.match), delete e.match;
  }
}
function dd(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const pd = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'];
function md(e, t) {
  const n = {};
  return (
    typeof e == 'string'
      ? r('keyword', e)
      : Object.keys(e).forEach(function (i) {
          r(i, e[i]);
        }),
    n
  );
  function r(i, l) {
    t && (l = l.toLowerCase()),
      l.split(' ').forEach(function (o) {
        const s = o.split('|');
        n[s[0]] = [i, hd(s[0], s[1])];
      });
  }
}
function hd(e, t) {
  return t ? Number(t) : gd(e) ? 0 : 1;
}
function gd(e) {
  return pd.includes(e.toLowerCase());
}
function vd(e, { plugins: t }) {
  function n(s, a) {
    return new RegExp(Yn(s), 'm' + (e.case_insensitive ? 'i' : '') + (a ? 'g' : ''));
  }
  class r {
    constructor() {
      (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
    }
    addRule(a, u) {
      (u.position = this.position++),
        (this.matchIndexes[this.matchAt] = u),
        this.regexes.push([u, a]),
        (this.matchAt += jf(a) + 1);
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const a = this.regexes.map((u) => u[1]);
      (this.matcherRe = n(Wf(a), !0)), (this.lastIndex = 0);
    }
    exec(a) {
      this.matcherRe.lastIndex = this.lastIndex;
      const u = this.matcherRe.exec(a);
      if (!u) return null;
      const p = u.findIndex((h, N) => N > 0 && h !== void 0),
        w = this.matchIndexes[p];
      return u.splice(0, p), Object.assign(u, w);
    }
  }
  class i {
    constructor() {
      (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
    }
    getMatcher(a) {
      if (this.multiRegexes[a]) return this.multiRegexes[a];
      const u = new r();
      return this.rules.slice(a).forEach(([p, w]) => u.addRule(p, w)), u.compile(), (this.multiRegexes[a] = u), u;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(a, u) {
      this.rules.push([a, u]), u.type === 'begin' && this.count++;
    }
    exec(a) {
      const u = this.getMatcher(this.regexIndex);
      u.lastIndex = this.lastIndex;
      let p = u.exec(a);
      if (this.resumingScanAtSamePosition() && !(p && p.index === this.lastIndex)) {
        const w = this.getMatcher(0);
        (w.lastIndex = this.lastIndex + 1), (p = w.exec(a));
      }
      return p && ((this.regexIndex += p.position + 1), this.regexIndex === this.count && this.considerAll()), p;
    }
  }
  function l(s) {
    const a = new i();
    return (
      s.contains.forEach((u) => a.addRule(u.begin, { rule: u, type: 'begin' })),
      s.terminatorEnd && a.addRule(s.terminatorEnd, { type: 'end' }),
      s.illegal && a.addRule(s.illegal, { type: 'illegal' }),
      a
    );
  }
  function o(s, a) {
    const u = s;
    if (s.compiled) return u;
    [fd].forEach((w) => w(s, a)),
      e.compilerExtensions.forEach((w) => w(s, a)),
      (s.__beforeBegin = null),
      [ud, cd, dd].forEach((w) => w(s, a)),
      (s.compiled = !0);
    let p = null;
    if (
      (typeof s.keywords == 'object' && ((p = s.keywords.$pattern), delete s.keywords.$pattern),
      s.keywords && (s.keywords = md(s.keywords, e.case_insensitive)),
      s.lexemes && p)
    )
      throw new Error('ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ');
    return (
      (p = p || s.lexemes || /\w+/),
      (u.keywordPatternRe = n(p, !0)),
      a &&
        (s.begin || (s.begin = /\B|\b/),
        (u.beginRe = n(s.begin)),
        s.endSameAsBegin && (s.end = s.begin),
        !s.end && !s.endsWithParent && (s.end = /\B|\b/),
        s.end && (u.endRe = n(s.end)),
        (u.terminatorEnd = Yn(s.end) || ''),
        s.endsWithParent && a.terminatorEnd && (u.terminatorEnd += (s.end ? '|' : '') + a.terminatorEnd)),
      s.illegal && (u.illegalRe = n(s.illegal)),
      s.contains || (s.contains = []),
      (s.contains = [].concat(
        ...s.contains.map(function (w) {
          return yd(w === 'self' ? s : w);
        }),
      )),
      s.contains.forEach(function (w) {
        o(w, u);
      }),
      s.starts && o(s.starts, a),
      (u.matcher = l(u)),
      u
    );
  }
  if ((e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self')))
    throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
  return (e.classNameAliases = nt(e.classNameAliases || {})), o(e);
}
function yu(e) {
  return e ? e.endsWithParent || yu(e.starts) : !1;
}
function yd(e) {
  return (
    e.variants &&
      !e.cachedVariants &&
      (e.cachedVariants = e.variants.map(function (t) {
        return nt(e, { variants: null }, t);
      })),
    e.cachedVariants
      ? e.cachedVariants
      : yu(e)
      ? nt(e, { starts: e.starts ? nt(e.starts) : null })
      : Object.isFrozen(e)
      ? nt(e)
      : e
  );
}
var wd = '10.5.0';
function Ed(e) {
  return Boolean(e || e === '');
}
function Sd(e) {
  const t = {
    props: ['language', 'code', 'autodetect'],
    data: function () {
      return { detectedLanguage: '', unknownLanguage: !1 };
    },
    computed: {
      className() {
        return this.unknownLanguage ? '' : 'hljs ' + this.detectedLanguage;
      },
      highlighted() {
        if (!this.autoDetect && !e.getLanguage(this.language))
          return (
            console.warn(`The language "${this.language}" you specified could not be found.`),
            (this.unknownLanguage = !0),
            Yt(this.code)
          );
        let r = {};
        return (
          this.autoDetect
            ? ((r = e.highlightAuto(this.code)), (this.detectedLanguage = r.language))
            : ((r = e.highlight(this.language, this.code, this.ignoreIllegals)),
              (this.detectedLanguage = this.language)),
          r.value
        );
      },
      autoDetect() {
        return !this.language || Ed(this.autodetect);
      },
      ignoreIllegals() {
        return !0;
      },
    },
    render(r) {
      return r('pre', {}, [r('code', { class: this.className, domProps: { innerHTML: this.highlighted } })]);
    },
  };
  return {
    Component: t,
    VuePlugin: {
      install(r) {
        r.component('highlightjs', t);
      },
    },
  };
}
const Nd = {
  'after:highlightBlock': ({ block: e, result: t, text: n }) => {
    const r = Es(e);
    if (!r.length) return;
    const i = document.createElement('div');
    (i.innerHTML = t.value), (t.value = _d(r, Es(i), n));
  },
};
function vl(e) {
  return e.nodeName.toLowerCase();
}
function Es(e) {
  const t = [];
  return (
    (function n(r, i) {
      for (let l = r.firstChild; l; l = l.nextSibling)
        l.nodeType === 3
          ? (i += l.nodeValue.length)
          : l.nodeType === 1 &&
            (t.push({ event: 'start', offset: i, node: l }),
            (i = n(l, i)),
            vl(l).match(/br|hr|img|input/) || t.push({ event: 'stop', offset: i, node: l }));
      return i;
    })(e, 0),
    t
  );
}
function _d(e, t, n) {
  let r = 0,
    i = '';
  const l = [];
  function o() {
    return !e.length || !t.length
      ? e.length
        ? e
        : t
      : e[0].offset !== t[0].offset
      ? e[0].offset < t[0].offset
        ? e
        : t
      : t[0].event === 'start'
      ? e
      : t;
  }
  function s(p) {
    function w(h) {
      return ' ' + h.nodeName + '="' + Yt(h.value) + '"';
    }
    i += '<' + vl(p) + [].map.call(p.attributes, w).join('') + '>';
  }
  function a(p) {
    i += '</' + vl(p) + '>';
  }
  function u(p) {
    (p.event === 'start' ? s : a)(p.node);
  }
  for (; e.length || t.length; ) {
    let p = o();
    if (((i += Yt(n.substring(r, p[0].offset))), (r = p[0].offset), p === e)) {
      l.reverse().forEach(a);
      do u(p.splice(0, 1)[0]), (p = o());
      while (p === e && p.length && p[0].offset === r);
      l.reverse().forEach(s);
    } else p[0].event === 'start' ? l.push(p[0].node) : l.pop(), u(p.splice(0, 1)[0]);
  }
  return i + Yt(n.substr(r));
}
const Vi = (e) => {
    console.error(e);
  },
  Ss = (e, ...t) => {
    console.log(`WARN: ${e}`, ...t);
  },
  zt = (e, t) => {
    console.log(`Deprecated as of ${e}. ${t}`);
  },
  Wi = Yt,
  Ns = nt,
  _s = Symbol('nomatch'),
  kd = function (e) {
    const t = Object.create(null),
      n = Object.create(null),
      r = [];
    let i = !0;
    const l = /(^(<[^>]+>|\t|)+|\n)/gm,
      o = "Could not find the language '{}', did you forget to load/include a language module?",
      s = { disableAutodetect: !0, name: 'Plain text', contains: [] };
    let a = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: Ff,
    };
    function u(x) {
      return a.noHighlightRe.test(x);
    }
    function p(x) {
      let L = x.className + ' ';
      L += x.parentNode ? x.parentNode.className : '';
      const F = a.languageDetectRe.exec(L);
      if (F) {
        const b = oe(F[1]);
        return (
          b || (Ss(o.replace('{}', F[1])), Ss('Falling back to no-highlight mode for this block.', x)),
          b ? F[1] : 'no-highlight'
        );
      }
      return L.split(/\s+/).find((b) => u(b) || oe(b));
    }
    function w(x, L, F, b) {
      const E = { code: L, language: x };
      B('before:highlight', E);
      const P = E.result ? E.result : h(E.language, E.code, F, b);
      return (P.code = E.code), B('after:highlight', P), P;
    }
    function h(x, L, F, b) {
      const E = L;
      function P(D, U) {
        const j = Bt.case_insensitive ? U[0].toLowerCase() : U[0];
        return Object.prototype.hasOwnProperty.call(D.keywords, j) && D.keywords[j];
      }
      function $() {
        if (!H.keywords) {
          we.addText(le);
          return;
        }
        let D = 0;
        H.keywordPatternRe.lastIndex = 0;
        let U = H.keywordPatternRe.exec(le),
          j = '';
        for (; U; ) {
          j += le.substring(D, U.index);
          const K = P(H, U);
          if (K) {
            const [Te, Nr] = K;
            we.addText(j), (j = ''), (Sr += Nr);
            const nf = Bt.classNameAliases[Te] || Te;
            we.addKeyword(U[0], nf);
          } else j += U[0];
          (D = H.keywordPatternRe.lastIndex), (U = H.keywordPatternRe.exec(le));
        }
        (j += le.substr(D)), we.addText(j);
      }
      function Q() {
        if (le === '') return;
        let D = null;
        if (typeof H.subLanguage == 'string') {
          if (!t[H.subLanguage]) {
            we.addText(le);
            return;
          }
          (D = h(H.subLanguage, le, !0, as[H.subLanguage])), (as[H.subLanguage] = D.top);
        } else D = k(le, H.subLanguage.length ? H.subLanguage : null);
        H.relevance > 0 && (Sr += D.relevance), we.addSublanguage(D.emitter, D.language);
      }
      function W() {
        H.subLanguage != null ? Q() : $(), (le = '');
      }
      function pe(D) {
        return (
          D.className && we.openNode(Bt.classNameAliases[D.className] || D.className),
          (H = Object.create(D, { parent: { value: H } })),
          H
        );
      }
      function Fe(D, U, j) {
        let K = Vf(D.endRe, j);
        if (K) {
          if (D['on:end']) {
            const Te = new ys(D);
            D['on:end'](U, Te), Te.ignore && (K = !1);
          }
          if (K) {
            for (; D.endsParent && D.parent; ) D = D.parent;
            return D;
          }
        }
        if (D.endsWithParent) return Fe(D.parent, U, j);
      }
      function St(D) {
        return H.matcher.regexIndex === 0 ? ((le += D[0]), 1) : ((Fi = !0), 0);
      }
      function Je(D) {
        const U = D[0],
          j = D.rule,
          K = new ys(j),
          Te = [j.__beforeBegin, j['on:begin']];
        for (const Nr of Te) if (!!Nr && (Nr(D, K), K.ignore)) return St(U);
        return (
          j && j.endSameAsBegin && (j.endRe = $f(U)),
          j.skip ? (le += U) : (j.excludeBegin && (le += U), W(), !j.returnBegin && !j.excludeBegin && (le = U)),
          pe(j),
          j.returnBegin ? 0 : U.length
        );
      }
      function Jc(D) {
        const U = D[0],
          j = E.substr(D.index),
          K = Fe(H, D, j);
        if (!K) return _s;
        const Te = H;
        Te.skip ? (le += U) : (Te.returnEnd || Te.excludeEnd || (le += U), W(), Te.excludeEnd && (le = U));
        do H.className && we.closeNode(), !H.skip && !H.subLanguage && (Sr += H.relevance), (H = H.parent);
        while (H !== K.parent);
        return K.starts && (K.endSameAsBegin && (K.starts.endRe = K.endRe), pe(K.starts)), Te.returnEnd ? 0 : U.length;
      }
      function ef() {
        const D = [];
        for (let U = H; U !== Bt; U = U.parent) U.className && D.unshift(U.className);
        D.forEach((U) => we.openNode(U));
      }
      let Er = {};
      function ss(D, U) {
        const j = U && U[0];
        if (((le += D), j == null)) return W(), 0;
        if (Er.type === 'begin' && U.type === 'end' && Er.index === U.index && j === '') {
          if (((le += E.slice(U.index, U.index + 1)), !i)) {
            const K = new Error('0 width match regex');
            throw ((K.languageName = x), (K.badRule = Er.rule), K);
          }
          return 1;
        }
        if (((Er = U), U.type === 'begin')) return Je(U);
        if (U.type === 'illegal' && !F) {
          const K = new Error('Illegal lexeme "' + j + '" for mode "' + (H.className || '<unnamed>') + '"');
          throw ((K.mode = H), K);
        } else if (U.type === 'end') {
          const K = Jc(U);
          if (K !== _s) return K;
        }
        if (U.type === 'illegal' && j === '') return 1;
        if (zi > 1e5 && zi > U.index * 3) throw new Error('potential infinite loop, way more iterations than matches');
        return (le += j), j.length;
      }
      const Bt = oe(x);
      if (!Bt) throw (Vi(o.replace('{}', x)), new Error('Unknown language: "' + x + '"'));
      const tf = vd(Bt, { plugins: r });
      let Ui = '',
        H = b || tf;
      const as = {},
        we = new a.__emitter(a);
      ef();
      let le = '',
        Sr = 0,
        Ut = 0,
        zi = 0,
        Fi = !1;
      try {
        for (H.matcher.considerAll(); ; ) {
          zi++, Fi ? (Fi = !1) : H.matcher.considerAll(), (H.matcher.lastIndex = Ut);
          const D = H.matcher.exec(E);
          if (!D) break;
          const U = E.substring(Ut, D.index),
            j = ss(U, D);
          Ut = D.index + j;
        }
        return (
          ss(E.substr(Ut)),
          we.closeAllNodes(),
          we.finalize(),
          (Ui = we.toHTML()),
          { relevance: Sr, value: Ui, language: x, illegal: !1, emitter: we, top: H }
        );
      } catch (D) {
        if (D.message && D.message.includes('Illegal'))
          return {
            illegal: !0,
            illegalBy: { msg: D.message, context: E.slice(Ut - 100, Ut + 100), mode: D.mode },
            sofar: Ui,
            relevance: 0,
            value: Wi(E),
            emitter: we,
          };
        if (i) return { illegal: !1, relevance: 0, value: Wi(E), emitter: we, language: x, top: H, errorRaised: D };
        throw D;
      }
    }
    function N(x) {
      const L = { relevance: 0, emitter: new a.__emitter(a), value: Wi(x), illegal: !1, top: s };
      return L.emitter.addText(x), L;
    }
    function k(x, L) {
      L = L || a.languages || Object.keys(t);
      const F = N(x),
        b = L.filter(oe)
          .filter(G)
          .map((W) => h(W, x, !1));
      b.unshift(F);
      const E = b.sort((W, pe) => {
          if (W.relevance !== pe.relevance) return pe.relevance - W.relevance;
          if (W.language && pe.language) {
            if (oe(W.language).supersetOf === pe.language) return 1;
            if (oe(pe.language).supersetOf === W.language) return -1;
          }
          return 0;
        }),
        [P, $] = E,
        Q = P;
      return (Q.second_best = $), Q;
    }
    function _(x) {
      return a.tabReplace || a.useBR
        ? x.replace(l, (L) =>
            L ===
            `
`
              ? a.useBR
                ? '<br>'
                : L
              : a.tabReplace
              ? L.replace(/\t/g, a.tabReplace)
              : L,
          )
        : x;
    }
    function d(x, L, F) {
      const b = L ? n[L] : F;
      x.classList.add('hljs'), b && x.classList.add(b);
    }
    const c = {
        'before:highlightBlock': ({ block: x }) => {
          a.useBR &&
            (x.innerHTML = x.innerHTML.replace(/\n/g, '').replace(
              /<br[ /]*>/g,
              `
`,
            ));
        },
        'after:highlightBlock': ({ result: x }) => {
          a.useBR && (x.value = x.value.replace(/\n/g, '<br>'));
        },
      },
      f = /^(<[^>]+>|\t)+/gm,
      g = {
        'after:highlightBlock': ({ result: x }) => {
          a.tabReplace && (x.value = x.value.replace(f, (L) => L.replace(/\t/g, a.tabReplace)));
        },
      };
    function m(x) {
      let L = null;
      const F = p(x);
      if (u(F)) return;
      B('before:highlightBlock', { block: x, language: F }), (L = x);
      const b = L.textContent,
        E = F ? w(F, b, !0) : k(b);
      B('after:highlightBlock', { block: x, result: E, text: b }),
        (x.innerHTML = E.value),
        d(x, F, E.language),
        (x.result = { language: E.language, re: E.relevance, relavance: E.relevance }),
        E.second_best &&
          (x.second_best = {
            language: E.second_best.language,
            re: E.second_best.relevance,
            relavance: E.second_best.relevance,
          });
    }
    function S(x) {
      x.useBR &&
        (zt('10.3.0', "'useBR' will be removed entirely in v11.0"),
        zt('10.3.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2559')),
        (a = Ns(a, x));
    }
    const y = () => {
      if (y.called) return;
      (y.called = !0), document.querySelectorAll('pre code').forEach(m);
    };
    function C() {
      window.addEventListener('DOMContentLoaded', y, !1);
    }
    function O(x, L) {
      let F = null;
      try {
        F = L(e);
      } catch (b) {
        if ((Vi("Language definition for '{}' could not be registered.".replace('{}', x)), i)) Vi(b);
        else throw b;
        F = s;
      }
      F.name || (F.name = x),
        (t[x] = F),
        (F.rawDefinition = L.bind(null, e)),
        F.aliases && ie(F.aliases, { languageName: x });
    }
    function R() {
      return Object.keys(t);
    }
    function X(x) {
      zt('10.4.0', 'requireLanguage will be removed entirely in v11.'),
        zt('10.4.0', 'Please see https://github.com/highlightjs/highlight.js/pull/2844');
      const L = oe(x);
      if (L) return L;
      throw new Error("The '{}' language is required, but not loaded.".replace('{}', x));
    }
    function oe(x) {
      return (x = (x || '').toLowerCase()), t[x] || t[n[x]];
    }
    function ie(x, { languageName: L }) {
      typeof x == 'string' && (x = [x]),
        x.forEach((F) => {
          n[F] = L;
        });
    }
    function G(x) {
      const L = oe(x);
      return L && !L.disableAutodetect;
    }
    function ye(x) {
      r.push(x);
    }
    function B(x, L) {
      const F = x;
      r.forEach(function (b) {
        b[F] && b[F](L);
      });
    }
    function q(x) {
      return (
        zt('10.2.0', 'fixMarkup will be removed entirely in v11.0'),
        zt('10.2.0', 'Please see https://github.com/highlightjs/highlight.js/issues/2534'),
        _(x)
      );
    }
    Object.assign(e, {
      highlight: w,
      highlightAuto: k,
      fixMarkup: q,
      highlightBlock: m,
      configure: S,
      initHighlighting: y,
      initHighlightingOnLoad: C,
      registerLanguage: O,
      listLanguages: R,
      getLanguage: oe,
      registerAliases: ie,
      requireLanguage: X,
      autoDetection: G,
      inherit: Ns,
      addPlugin: ye,
      vuePlugin: Sd(e).VuePlugin,
    }),
      (e.debugMode = function () {
        i = !1;
      }),
      (e.safeMode = function () {
        i = !0;
      }),
      (e.versionString = wd);
    for (const x in xr) typeof xr[x] == 'object' && pu(xr[x]);
    return Object.assign(e, xr), e.addPlugin(c), e.addPlugin(Nd), e.addPlugin(g), e;
  };
var mr = kd({});
const ks = '[A-Za-z$_][0-9A-Za-z$_]*',
  xd = [
    'as',
    'in',
    'of',
    'if',
    'for',
    'while',
    'finally',
    'var',
    'new',
    'function',
    'do',
    'return',
    'void',
    'else',
    'break',
    'catch',
    'instanceof',
    'with',
    'throw',
    'case',
    'default',
    'try',
    'switch',
    'continue',
    'typeof',
    'delete',
    'let',
    'yield',
    'const',
    'class',
    'debugger',
    'async',
    'await',
    'static',
    'import',
    'from',
    'export',
    'extends',
  ],
  Td = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
  Cd = [
    'Intl',
    'DataView',
    'Number',
    'Math',
    'Date',
    'String',
    'RegExp',
    'Object',
    'Function',
    'Boolean',
    'Error',
    'Symbol',
    'Set',
    'Map',
    'WeakSet',
    'WeakMap',
    'Proxy',
    'Reflect',
    'JSON',
    'Promise',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Float32Array',
    'Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'ArrayBuffer',
  ],
  Rd = ['EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
  Md = [
    'setInterval',
    'setTimeout',
    'clearInterval',
    'clearTimeout',
    'require',
    'exports',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
  ],
  Od = ['arguments', 'this', 'super', 'console', 'window', 'document', 'localStorage', 'module', 'global'],
  Ld = [].concat(Md, Od, Cd, Rd);
function Pd(e) {
  return e ? (typeof e == 'string' ? e : e.source) : null;
}
function xs(e) {
  return yl('(?=', e, ')');
}
function yl(...e) {
  return e.map((n) => Pd(n)).join('');
}
function Dd(e) {
  const t = (m, { after: S }) => {
      const y = '</' + m[0].slice(1);
      return m.input.indexOf(y, S) !== -1;
    },
    n = ks,
    r = { begin: '<>', end: '</>' },
    i = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (m, S) => {
        const y = m[0].length + m.index,
          C = m.input[y];
        if (C === '<') {
          S.ignoreMatch();
          return;
        }
        C === '>' && (t(m, { after: y }) || S.ignoreMatch());
      },
    },
    l = { $pattern: ks, keyword: xd.join(' '), literal: Td.join(' '), built_in: Ld.join(' ') },
    o = '[0-9](_?[0-9])*',
    s = `\\.(${o})`,
    a = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    u = {
      className: 'number',
      variants: [
        { begin: `(\\b(${a})((${s})|\\.)?|(${s}))[eE][+-]?(${o})\\b` },
        { begin: `\\b(${a})\\b((${s})\\b|\\.)?|(${s})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    p = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: l, contains: [] },
    w = {
      begin: 'html`',
      end: '',
      starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, p], subLanguage: 'xml' },
    },
    h = {
      begin: 'css`',
      end: '',
      starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, p], subLanguage: 'css' },
    },
    N = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, p] },
    k = e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
      relevance: 0,
      contains: [
        {
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [
            { className: 'type', begin: '\\{', end: '\\}', relevance: 0 },
            { className: 'variable', begin: n + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
            { begin: /(?=[^\n])\s/, relevance: 0 },
          ],
        },
      ],
    }),
    _ = { className: 'comment', variants: [k, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE] },
    d = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, w, h, N, u, e.REGEXP_MODE];
  p.contains = d.concat({ begin: /\{/, end: /\}/, keywords: l, contains: ['self'].concat(d) });
  const c = [].concat(_, p.contains),
    f = c.concat([{ begin: /\(/, end: /\)/, keywords: l, contains: ['self'].concat(c) }]),
    g = { className: 'params', begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: f };
  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: l,
    exports: { PARAMS_CONTAINS: f },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
      { label: 'use_strict', className: 'meta', relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      w,
      h,
      N,
      _,
      u,
      {
        begin: yl(/[{,\n]\s*/, xs(yl(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, n + '\\s*:'))),
        relevance: 0,
        contains: [{ className: 'attr', begin: n + xs('\\s*:'), relevance: 0 }],
      },
      {
        begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + e.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: !0,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: f },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { className: '', begin: /\s/, end: /\s*/, skip: !0 },
          {
            variants: [
              { begin: r.begin, end: r.end },
              { begin: i.begin, 'on:begin': i.isTrulyOpeningTag, end: i.end },
            ],
            subLanguage: 'xml',
            contains: [{ begin: i.begin, end: i.end, skip: !0, contains: ['self'] }],
          },
        ],
        relevance: 0,
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: !0,
        keywords: l,
        contains: ['self', e.inherit(e.TITLE_MODE, { begin: n }), g],
        illegal: /%/,
      },
      { beginKeywords: 'while if switch catch for' },
      {
        className: 'function',
        begin: e.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        contains: [g, e.inherit(e.TITLE_MODE, { begin: n })],
      },
      { variants: [{ begin: '\\.' + n }, { begin: '\\$' + n }], relevance: 0 },
      {
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{ beginKeywords: 'extends' }, e.UNDERSCORE_TITLE_MODE],
      },
      {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: n }), 'self', g],
      },
      {
        begin: '(get|set)\\s+(?=' + n + '\\()',
        end: /\{/,
        keywords: 'get set',
        contains: [e.inherit(e.TITLE_MODE, { begin: n }), { begin: /\(\)/ }, g],
      },
      { begin: /\$[(.]/ },
    ],
  };
}
function Id(e) {
  const t = [
      'and',
      'as',
      'assert',
      'async',
      'await',
      'break',
      'class',
      'continue',
      'def',
      'del',
      'elif',
      'else',
      'except',
      'finally',
      'for',
      '',
      'from',
      'global',
      'if',
      'import',
      'in',
      'is',
      'lambda',
      'nonlocal|10',
      'not',
      'or',
      'pass',
      'raise',
      'return',
      'try',
      'while',
      'with',
      'yield',
    ],
    n = [
      '__import__',
      'abs',
      'all',
      'any',
      'ascii',
      'bin',
      'bool',
      'breakpoint',
      'bytearray',
      'bytes',
      'callable',
      'chr',
      'classmethod',
      'compile',
      'complex',
      'delattr',
      'dict',
      'dir',
      'divmod',
      'enumerate',
      'eval',
      'exec',
      'filter',
      'float',
      'format',
      'frozenset',
      'getattr',
      'globals',
      'hasattr',
      'hash',
      'help',
      'hex',
      'id',
      'input',
      'int',
      'isinstance',
      'issubclass',
      'iter',
      'len',
      'list',
      'locals',
      'map',
      'max',
      'memoryview',
      'min',
      'next',
      'object',
      'oct',
      'open',
      'ord',
      'pow',
      'print',
      'property',
      'range',
      'repr',
      'reversed',
      'round',
      'set',
      'setattr',
      'slice',
      'sorted',
      'staticmethod',
      'str',
      'sum',
      'super',
      'tuple',
      'type',
      'vars',
      'zip',
    ],
    r = ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
    i = { keyword: t.join(' '), built_in: n.join(' '), literal: r.join(' ') },
    l = { className: 'meta', begin: /^(>>>|\.\.\.) / },
    o = { className: 'subst', begin: /\{/, end: /\}/, keywords: i, illegal: /#/ },
    s = { begin: /\{\{/, relevance: 0 },
    a = {
      className: 'string',
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, l],
          relevance: 10,
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, l],
          relevance: 10,
        },
        { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE, l, s, o] },
        { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, l, s, o] },
        { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
        { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
        { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
        { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
        { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [e.BACKSLASH_ESCAPE, s, o] },
        { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, s, o] },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
      ],
    },
    u = '[0-9](_?[0-9])*',
    p = `(\\b(${u}))?\\.(${u})|\\b(${u})\\.`,
    w = {
      className: 'number',
      relevance: 0,
      variants: [
        { begin: `(\\b(${u})|(${p}))[eE][+-]?(${u})[jJ]?\\b` },
        { begin: `(${p})[jJ]?` },
        { begin: '\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b' },
        { begin: '\\b0[bB](_?[01])+[lL]?\\b' },
        { begin: '\\b0[oO](_?[0-7])+[lL]?\\b' },
        { begin: '\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b' },
        { begin: `\\b(${u})[jJ]\\b` },
      ],
    },
    h = {
      className: 'params',
      variants: [
        { begin: /\(\s*\)/, skip: !0, className: null },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: i,
          contains: ['self', l, w, a, e.HASH_COMMENT_MODE],
        },
      ],
    };
  return (
    (o.contains = [a, w, l]),
    {
      name: 'Python',
      aliases: ['py', 'gyp', 'ipython'],
      keywords: i,
      illegal: /(<\/|->|\?)|=>/,
      contains: [
        l,
        w,
        { begin: /\bself\b/ },
        { beginKeywords: 'if', relevance: 0 },
        a,
        e.HASH_COMMENT_MODE,
        {
          variants: [
            { className: 'function', beginKeywords: 'def' },
            { className: 'class', beginKeywords: 'class' },
          ],
          end: /:/,
          illegal: /[${=;\n,]/,
          contains: [e.UNDERSCORE_TITLE_MODE, h, { begin: /->/, endsWithParent: !0, keywords: 'None' }],
        },
        { className: 'meta', begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [w, h, a] },
        { begin: /\b(print|exec)\(/ },
      ],
    }
  );
}
function Ad(e) {
  var t = [
      'bool',
      'byte',
      'char',
      'decimal',
      'delegate',
      'double',
      'dynamic',
      'enum',
      'float',
      'int',
      'long',
      'nint',
      'nuint',
      'object',
      'sbyte',
      'short',
      'string',
      'ulong',
      'unit',
      'ushort',
    ],
    n = [
      'public',
      'private',
      'protected',
      'static',
      'internal',
      'protected',
      'abstract',
      'async',
      'extern',
      'override',
      'unsafe',
      'virtual',
      'new',
      'sealed',
      'partial',
    ],
    r = ['default', 'false', 'null', 'true'],
    i = [
      'abstract',
      'as',
      'base',
      'break',
      'case',
      'class',
      'const',
      'continue',
      'do',
      'else',
      'event',
      'explicit',
      'extern',
      'finally',
      'fixed',
      'for',
      'foreach',
      'goto',
      'if',
      'implicit',
      'in',
      'interface',
      'internal',
      'is',
      'lock',
      'namespace',
      'new',
      'operator',
      'out',
      'override',
      'params',
      'private',
      'protected',
      'public',
      'readonly',
      'record',
      'ref',
      'return',
      'sealed',
      'sizeof',
      'stackalloc',
      'static',
      'struct',
      'switch',
      'this',
      'throw',
      'try',
      'typeof',
      'unchecked',
      'unsafe',
      'using',
      'virtual',
      'void',
      'volatile',
      'while',
    ],
    l = [
      'add',
      'alias',
      'and',
      'ascending',
      'async',
      'await',
      'by',
      'descending',
      'equals',
      'from',
      'get',
      'global',
      'group',
      'init',
      'into',
      'join',
      'let',
      'nameof',
      'not',
      'notnull',
      'on',
      'or',
      'orderby',
      'partial',
      'remove',
      'select',
      'set',
      'unmanaged',
      'value|0',
      'var',
      'when',
      'where',
      'with',
      'yield',
    ],
    o = { keyword: i.concat(l).join(' '), built_in: t.join(' '), literal: r.join(' ') },
    s = e.inherit(e.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
    a = {
      className: 'number',
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" },
      ],
      relevance: 0,
    },
    u = { className: 'string', begin: '@"', end: '"', contains: [{ begin: '""' }] },
    p = e.inherit(u, { illegal: /\n/ }),
    w = { className: 'subst', begin: /\{/, end: /\}/, keywords: o },
    h = e.inherit(w, { illegal: /\n/ }),
    N = {
      className: 'string',
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, h],
    },
    k = {
      className: 'string',
      begin: /\$@"/,
      end: '"',
      contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, w],
    },
    _ = e.inherit(k, { illegal: /\n/, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, h] });
  (w.contains = [k, N, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE]),
    (h.contains = [
      _,
      N,
      p,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      a,
      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
    ]);
  var d = { variants: [k, N, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
    c = { begin: '<', end: '>', contains: [{ beginKeywords: 'in out' }, s] },
    f = e.IDENT_RE + '(<' + e.IDENT_RE + '(\\s*,\\s*' + e.IDENT_RE + ')*>)?(\\[\\])?',
    g = { begin: '@' + e.IDENT_RE, relevance: 0 };
  return {
    name: 'C#',
    aliases: ['cs', 'c#'],
    keywords: o,
    illegal: /::/,
    contains: [
      e.COMMENT('///', '$', {
        returnBegin: !0,
        contains: [
          {
            className: 'doctag',
            variants: [{ begin: '///', relevance: 0 }, { begin: '<!--|-->' }, { begin: '</?', end: '>' }],
          },
        ],
      }),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: 'meta',
        begin: '#',
        end: '$',
        keywords: {
          'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum',
        },
      },
      d,
      a,
      {
        beginKeywords: 'class interface',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [{ beginKeywords: 'where class' }, s, c, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      {
        beginKeywords: 'namespace',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      {
        beginKeywords: 'record',
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [s, c, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      },
      {
        className: 'meta',
        begin: '^\\s*\\[',
        excludeBegin: !0,
        end: '\\]',
        excludeEnd: !0,
        contains: [{ className: 'meta-string', begin: /"/, end: /"/ }],
      },
      { beginKeywords: 'new return throw await else', relevance: 0 },
      {
        className: 'function',
        begin: '(' + f + '\\s+)+' + e.IDENT_RE + '\\s*(<.+>\\s*)?\\(',
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: o,
        contains: [
          { beginKeywords: n.join(' '), relevance: 0 },
          { begin: e.IDENT_RE + '\\s*(<.+>\\s*)?\\(', returnBegin: !0, contains: [e.TITLE_MODE, c], relevance: 0 },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: o,
            relevance: 0,
            contains: [d, a, e.C_BLOCK_COMMENT_MODE],
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      g,
    ],
  };
}
var $t = '[0-9](_*[0-9])*',
  Tr = `\\.(${$t})`,
  Cr = '[0-9a-fA-F](_*[0-9a-fA-F])*',
  Bd = {
    className: 'number',
    variants: [
      { begin: `(\\b(${$t})((${Tr})|\\.)?|(${Tr}))[eE][+-]?(${$t})[fFdD]?\\b` },
      { begin: `\\b(${$t})((${Tr})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${Tr})[fFdD]?\\b` },
      { begin: `\\b(${$t})[fFdD]\\b` },
      { begin: `\\b0[xX]((${Cr})\\.?|(${Cr})?\\.(${Cr}))[pP][+-]?(${$t})[fFdD]?\\b` },
      { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },
      { begin: `\\b0[xX](${Cr})[lL]?\\b` },
      { begin: '\\b0(_*[0-7])*[lL]?\\b' },
      { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' },
    ],
    relevance: 0,
  };
function Ud(e) {
  var t = '[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*',
    n = t + '(<' + t + '(\\s*,\\s*' + t + ')*>)?',
    r =
      'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do',
    i = { className: 'meta', begin: '@' + t, contains: [{ begin: /\(/, end: /\)/, contains: ['self'] }] };
  const l = Bd;
  return {
    name: 'Java',
    aliases: ['jsp'],
    keywords: r,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT('/\\*\\*', '\\*/', {
        relevance: 0,
        contains: [
          { begin: /\w+@/, relevance: 0 },
          { className: 'doctag', begin: '@[A-Za-z]+' },
        ],
      }),
      { begin: /import java\.[a-z]+\./, keywords: 'import', relevance: 2 },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface enum',
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: 'class interface enum',
        illegal: /[:"\[\]]/,
        contains: [{ beginKeywords: 'extends implements' }, e.UNDERSCORE_TITLE_MODE],
      },
      { beginKeywords: 'new throw return else', relevance: 0 },
      {
        className: 'class',
        begin: 'record\\s+' + e.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: !0,
        excludeEnd: !0,
        end: /[{;=]/,
        keywords: r,
        contains: [
          { beginKeywords: 'record' },
          {
            begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: r,
            relevance: 0,
            contains: [e.C_BLOCK_COMMENT_MODE],
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      {
        className: 'function',
        begin: '(' + n + '\\s+)+' + e.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: r,
        contains: [
          {
            begin: e.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: r,
            relevance: 0,
            contains: [i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, e.C_BLOCK_COMMENT_MODE],
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      l,
      i,
    ],
  };
}
mr.registerLanguage('javascript', Dd);
mr.registerLanguage('python', Id);
mr.registerLanguage('csharp', Ad);
mr.registerLanguage('java', Ud);
const zd = ({ text: e, language: t, highlight: n = [], revealLine: r }) => {
  const i = A.exports.useMemo(() => {
      const o = [];
      let s;
      for (const a of e.split(`
`)) {
        const u = mr.highlight(t, a, !0, s);
        (s = u.top), o.push(u.value);
      }
      return o;
    }, [e, t]),
    l = A.exports.createRef();
  return (
    A.exports.useLayoutEffect(() => {
      typeof r == 'number' && l.current && l.current.scrollIntoView({ block: 'center', inline: 'nearest' });
    }, [l, r]),
    v('div', {
      className: 'source',
      children: i.map((o, s) => {
        const a = s + 1,
          u = n.find((w) => w.line === a),
          p = u ? `source-line source-line-${u.type}` : 'source-line';
        return I(
          'div',
          {
            className: p,
            ref: r === a ? l : null,
            children: [
              v('div', { className: 'source-line-number', children: a }),
              v('div', { className: 'source-code', dangerouslySetInnerHTML: { __html: o } }),
            ],
          },
          a,
        );
      }),
    })
  );
};
const Fd = ({ action: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = (e == null ? void 0 : e.metadata.stack) || [];
    return v('div', {
      className: 'stack-trace',
      children: r.map((i, l) => {
        const o = i.file[1] === ':' ? '\\' : '/';
        return I(
          'div',
          {
            className: 'stack-trace-frame' + (n === l ? ' selected' : ''),
            onClick: () => {
              t(l);
            },
            children: [
              v('span', { className: 'stack-trace-frame-function', children: i.function || '(anonymous)' }),
              v('span', { className: 'stack-trace-frame-location', children: i.file.split(o).pop() }),
              v('span', { className: 'stack-trace-frame-line', children: ':' + i.line }),
            ],
          },
          l,
        );
      }),
    });
  },
  $d = ({ action: e }) => {
    var w;
    const [t, n] = A.exports.useState(),
      [r, i] = A.exports.useState(0),
      [l, o] = A.exports.useState(!1);
    t !== e && (n(e), i(0), o(!0));
    const s = A.exports.useMemo(() => {
        if (!e) return '';
        const { metadata: h } = e;
        return h.stack ? { frames: h.stack, fileContent: new Map() } : '';
      }, [e]),
      a = Df(
        async () => {
          let h;
          if (typeof s == 'string') h = s;
          else {
            const N = s.frames[r].file;
            if (!s.fileContent.has(N)) {
              const k = await bd(N);
              s.fileContent.set(
                N,
                await fetch(`sha1/src@${k}.txt`)
                  .then((_) => _.text())
                  .catch((_) => `<Unable to read "${N}">`),
              );
            }
            h = s.fileContent.get(N);
          }
          return h;
        },
        [s, r],
        '',
      ),
      u = typeof s == 'string' ? 0 : ((w = s.frames[r]) == null ? void 0 : w.line) || 0,
      p = A.exports.createRef();
    return (
      A.exports.useLayoutEffect(() => {
        l && p.current && (p.current.scrollIntoView({ block: 'center', inline: 'nearest' }), o(!1));
      }, [l, p]),
      I(gl, {
        sidebarSize: 100,
        orientation: 'vertical',
        children: [
          v(zd, { text: a, language: 'javascript', highlight: [{ line: u, type: 'running' }], revealLine: u }),
          v(Fd, { action: e, selectedFrame: r, setSelectedFrame: i }),
        ],
      })
    );
  };
async function bd(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest('SHA-1', t),
    r = [],
    i = new DataView(n);
  for (let l = 0; l < i.byteLength; l += 1) {
    const o = i.getUint8(l).toString(16).padStart(2, '0');
    r.push(o);
  }
  return r.join('');
}
const Ts = ({ tabs: e, selectedTab: t, setSelectedTab: n }) =>
  v('div', {
    className: 'tabbed-pane',
    children: I('div', {
      className: 'vbox',
      children: [
        v('div', {
          className: 'hbox',
          style: { flex: 'none' },
          children: v('div', {
            className: 'tab-strip',
            children: e.map((r) =>
              I(
                'div',
                {
                  className: 'tab-element ' + (t === r.id ? 'selected' : ''),
                  onClick: () => n(r.id),
                  children: [
                    v('div', { className: 'tab-label', children: r.title }),
                    v('div', { className: 'tab-count', children: r.count || '' }),
                  ],
                },
                r.id,
              ),
            ),
          }),
        }),
        e.map((r) => {
          if (t === r.id) return v('div', { className: 'tab-content', children: r.render() }, r.id);
        }),
      ],
    }),
  });
const wu = { width: 200, height: 45 },
  Hd = ({ context: e, boundaries: t, previewPoint: n }) => {
    var u;
    const [r, i] = co();
    let l = 0;
    if (i.current && n) {
      const p = i.current.getBoundingClientRect();
      l = ((n.clientY - p.top) / wu.height) | 0;
    }
    const o = (u = e.pages[l]) == null ? void 0 : u.screencastFrames;
    let s, a;
    if (n !== void 0 && o) {
      const p = t.minimum + ((t.maximum - t.minimum) * n.x) / r.width;
      (s = o[ou(o, p, Eu) - 1]),
        (a = s
          ? Su(
              { width: s.width, height: s.height },
              { width: ((window.innerWidth * 3) / 4) | 0, height: ((window.innerHeight * 3) / 4) | 0 },
            )
          : void 0);
    }
    return I('div', {
      className: 'film-strip',
      ref: i,
      children: [
        e.pages
          .filter((p) => p.screencastFrames.length)
          .map((p, w) => v(jd, { boundaries: t, page: p, width: r.width }, w)),
        s &&
          a &&
          (n == null ? void 0 : n.x) !== void 0 &&
          v('div', {
            className: 'film-strip-hover',
            style: { width: a.width, height: a.height, top: r.bottom + 5, left: Math.min(n.x, r.width - a.width - 10) },
            children: v('img', { src: `sha1/${s.sha1}`, width: a.width, height: a.height }),
          }),
      ],
    });
  },
  jd = ({ boundaries: e, page: t, width: n }) => {
    const r = { width: 0, height: 0 },
      i = t.screencastFrames;
    for (const d of i) (r.width = Math.max(r.width, d.width)), (r.height = Math.max(r.height, d.height));
    const l = Su(r, wu),
      o = 2.5,
      s = i[0].timestamp,
      a = i[i.length - 1].timestamp,
      u = e.maximum - e.minimum,
      p = ((s - e.minimum) / u) * n,
      w = ((e.maximum - a) / u) * n,
      N = ((((a - s) / u) * n) / (l.width + 2 * o)) | 0,
      k = (a - s) / N,
      _ = [];
    for (let d = 0; s && k && d < N; ++d) {
      const c = s + k * d,
        f = ou(i, c, Eu) - 1;
      _.push(
        v(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${i[f].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: o,
              marginRight: o,
            },
          },
          d,
        ),
      );
    }
    return (
      _.push(
        v(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: l.width,
              height: l.height,
              backgroundImage: `url(sha1/${i[i.length - 1].sha1})`,
              backgroundSize: `${l.width}px ${l.height}px`,
              margin: o,
              marginRight: o,
            },
          },
          _.length,
        ),
      ),
      v('div', { className: 'film-strip-lane', style: { marginLeft: p + 'px', marginRight: w + 'px' }, children: _ })
    );
  };
function Eu(e, t) {
  return e - t.timestamp;
}
function Su(e, t) {
  const n = Math.max(e.width / t.width, e.height / t.height);
  return { width: (e.width / n) | 0, height: (e.height / n) | 0 };
}
const Vd = ({
  context: e,
  boundaries: t,
  selectedAction: n,
  highlightedAction: r,
  onSelected: i,
  onHighlighted: l,
}) => {
  const [o, s] = co(),
    a = A.exports.useRef(null),
    [u, p] = A.exports.useState(),
    [w, h] = A.exports.useState(),
    N = A.exports.useMemo(() => Wd(o.width, t), [o.width, t]),
    k = A.exports.useMemo(() => {
      const S = [];
      for (const y of e.actions) {
        let C = Cs(y.metadata.params.selector || '', 50);
        y.metadata.method === 'goto' && (C = Cs(y.metadata.params.url || '', 50)),
          S.push({
            action: y,
            leftTime: y.metadata.startTime,
            rightTime: y.metadata.endTime,
            leftPosition: On(o.width, t, y.metadata.startTime),
            rightPosition: On(o.width, t, y.metadata.endTime),
            label: y.metadata.apiName + ' ' + C,
            type: y.metadata.type + '.' + y.metadata.method,
            className: `${y.metadata.type}_${y.metadata.method}`.toLowerCase(),
          });
      }
      for (const y of e.events) {
        const C = y.metadata.startTime;
        S.push({
          event: y,
          leftTime: C,
          rightTime: C,
          leftPosition: On(o.width, t, C),
          rightPosition: On(o.width, t, C),
          label: y.metadata.method,
          type: y.metadata.type + '.' + y.metadata.method,
          className: `${y.metadata.type}_${y.metadata.method}`.toLowerCase(),
        });
      }
      return S;
    }, [e, t, o.width]),
    _ = w !== void 0 ? k[w] : void 0;
  let d = k.find((S) => S.action === (r || n));
  d = _ || d;
  const c = (S, y) => {
      const C = Ki(o.width, t, S),
        O = Ki(o.width, t, S - 5),
        R = Ki(o.width, t, S + 5);
      let X, oe, ie;
      for (let G = 0; G < k.length; G++) {
        const ye = k[G],
          B = Kd / 2 + Rs(ye),
          q = Math.max(ye.leftTime, O),
          x = Math.min(ye.rightTime, R),
          L = (ye.leftTime + ye.rightTime) / 2,
          F = Math.abs(C - L),
          b = Math.abs(y - B);
        q > x || ((X === void 0 || b < oe || (Math.abs(b - oe) < 0.01 && F < ie)) && ((X = G), (ie = F), (oe = b)));
      }
      return X;
    },
    f = (S) => {
      if (!s.current || !a.current) return;
      const y = S.clientX - s.current.getBoundingClientRect().left,
        C = S.clientY - a.current.getBoundingClientRect().top,
        O = c(y, C);
      p({ x: y, clientY: S.clientY }), h(O), typeof O == 'number' && l(k[O].action);
    };
  return I('div', {
    ref: s,
    className: 'timeline-view',
    onMouseMove: f,
    onMouseOver: f,
    onMouseLeave: () => {
      p(void 0), h(void 0), l(void 0);
    },
    onClick: (S) => {
      if ((p(void 0), !s.current || !a.current)) return;
      const y = S.clientX - s.current.getBoundingClientRect().left,
        C = S.clientY - a.current.getBoundingClientRect().top,
        O = c(y, C);
      if (O === void 0) return;
      const R = k[O].action;
      R && i(R);
    },
    children: [
      v('div', {
        className: 'timeline-grid',
        children: N.map((S, y) =>
          v(
            'div',
            {
              className: 'timeline-divider',
              style: { left: S.position + 'px' },
              children: v('div', { className: 'timeline-time', children: Qn(S.time - t.minimum) }),
            },
            y,
          ),
        ),
      }),
      v('div', {
        className: 'timeline-lane timeline-labels',
        children: k.map((S, y) =>
          v(
            'div',
            {
              className: 'timeline-label ' + S.className + (d === S ? ' selected' : ''),
              style: { left: S.leftPosition, maxWidth: 100 },
              children: S.label,
            },
            y,
          ),
        ),
      }),
      v('div', {
        className: 'timeline-lane timeline-bars',
        ref: a,
        children: k.map((S, y) =>
          v(
            'div',
            {
              className:
                'timeline-bar ' +
                (S.action ? 'action ' : '') +
                (S.event ? 'event ' : '') +
                S.className +
                (d === S ? ' selected' : ''),
              style: {
                left: S.leftPosition + 'px',
                width: Math.max(1, S.rightPosition - S.leftPosition) + 'px',
                top: Rs(S) + 'px',
              },
            },
            y,
          ),
        ),
      }),
      v(Hd, { context: e, boundaries: t, previewPoint: u }),
      v('div', {
        className: 'timeline-marker timeline-marker-hover',
        style: { display: u !== void 0 ? 'block' : 'none', left: ((u == null ? void 0 : u.x) || 0) + 'px' },
      }),
    ],
  });
};
function Wd(e, t) {
  let r = e / 64;
  const i = t.maximum - t.minimum,
    l = e / i;
  let o = i / r;
  const s = Math.ceil(Math.log(o) / Math.LN10);
  (o = Math.pow(10, s)), o * l >= 5 * 64 && (o = o / 5), o * l >= 2 * 64 && (o = o / 2);
  const a = t.minimum;
  let u = t.maximum;
  (u += 64 / l), (r = Math.ceil((u - a) / o)), o || (r = 0);
  const p = [];
  for (let w = 0; w < r; ++w) {
    const h = a + o * w;
    p.push({ position: On(e, t, h), time: h });
  }
  return p;
}
function On(e, t, n) {
  return ((n - t.minimum) / (t.maximum - t.minimum)) * e;
}
function Ki(e, t, n) {
  return (n / e) * (t.maximum - t.minimum) + t.minimum;
}
function Cs(e, t) {
  return e.length <= t ? e : e.substring(0, t - 1) + '\u2026';
}
const Kd = 11;
function Rs(e) {
  var t;
  return e.event ? 22 : ((t = e.action) == null ? void 0 : t.metadata.method) === 'waitForEventInfo' ? 0 : 11;
}
const Gd = () => {
    const [e, t] = A.exports.useState([]),
      [n, r] = A.exports.useState([]),
      [i, l] = A.exports.useState(Ms),
      [o, s] = A.exports.useState(),
      [a, u] = A.exports.useState(),
      [p, w] = A.exports.useState('actions'),
      [h, N] = A.exports.useState('logs'),
      [k, _] = A.exports.useState({ done: 0, total: 0 }),
      [d, c] = A.exports.useState(!1),
      [f, g] = A.exports.useState(null),
      [m, S] = A.exports.useState(null),
      y = (B) => {
        const q = [],
          x = [],
          L = new URL(window.location.href);
        for (let b = 0; b < B.length; b++) {
          const E = B.item(b);
          if (!E) continue;
          const P = URL.createObjectURL(E);
          q.push(P), x.push(E.name), L.searchParams.append('trace', P), L.searchParams.append('traceFileName', E.name);
        }
        const F = L.toString();
        window.history.pushState({}, '', F), t(q), r(x), s(void 0), c(!1), g(null);
      },
      C = (B) => {
        B.preventDefault(), y(B.dataTransfer.files);
      },
      O = (B) => {
        B.preventDefault(), B.target.files && y(B.target.files);
      };
    A.exports.useEffect(() => {
      const B = new URL(window.location.href).searchParams.getAll('trace');
      for (const q of B)
        if (q.startsWith('file:')) {
          S(q || null);
          return;
        }
      B.some((q) => q.startsWith('blob:')) || t(B);
    }, [t]),
      A.exports.useEffect(() => {
        (async () => {
          if (e.length) {
            const B = (L) => {
              L.data.method === 'progress' && _(L.data.params);
            };
            navigator.serviceWorker.addEventListener('message', B), _({ done: 0, total: 1 });
            const q = [];
            for (let L = 0; L < e.length; L++) {
              const F = e[L],
                b = new URLSearchParams();
              b.set('trace', F), n.length && b.set('traceFileName', n[L]);
              const E = await fetch(`context?${b.toString()}`);
              if (!E.ok) {
                t([]), g((await E.json()).error);
                return;
              }
              const P = await E.json();
              q.push(P);
            }
            navigator.serviceWorker.removeEventListener('message', B);
            const x = new au(q);
            _({ done: 0, total: 0 }), l(x);
          } else l(Ms);
        })();
      }, [e, n]);
    const R = { minimum: i.startTime, maximum: i.endTime };
    R.maximum += (R.maximum - R.minimum) / 20;
    const { errors: X, warnings: oe } = o ? cu(o) : { errors: 0, warnings: 0 },
      ie = X + oe,
      G = o ? du(o).length : 0,
      ye = [
        { id: 'logs', title: 'Call', count: 0, render: () => v(Tf, { action: o }) },
        { id: 'console', title: 'Console', count: ie, render: () => v(Rf, { action: o }) },
        { id: 'network', title: 'Network', count: G, render: () => v(Pf, { action: o }) },
      ];
    return (
      i.hasSource && ye.push({ id: 'source', title: 'Source', count: 0, render: () => v($d, { action: o }) }),
      I('div', {
        className: 'vbox workbench',
        onDragOver: (B) => {
          B.preventDefault(), c(!0);
        },
        children: [
          I('div', {
            className: 'hbox header',
            children: [
              v('div', { className: 'logo', children: '\u{1F3AD}' }),
              v('div', { className: 'product', children: 'Playwright' }),
              i.title && v('div', { className: 'title', children: i.title }),
              v('div', { className: 'spacer' }),
            ],
          }),
          v('div', {
            style: { background: 'white', paddingLeft: '20px', flex: 'none', borderBottom: '1px solid #ddd' },
            children: v(Vd, {
              context: i,
              boundaries: R,
              selectedAction: o,
              highlightedAction: a,
              onSelected: (B) => s(B),
              onHighlighted: (B) => u(B),
            }),
          }),
          I(gl, {
            sidebarSize: 300,
            orientation: 'horizontal',
            sidebarIsFirst: !0,
            children: [
              I(gl, {
                sidebarSize: 300,
                orientation: 'horizontal',
                children: [v(If, { action: o }), v(Ts, { tabs: ye, selectedTab: h, setSelectedTab: N })],
              }),
              v(Ts, {
                tabs: [
                  {
                    id: 'actions',
                    title: 'Actions',
                    count: 0,
                    render: () =>
                      v(xf, {
                        actions: i.actions,
                        selectedAction: o,
                        highlightedAction: a,
                        onSelected: (B) => {
                          s(B);
                        },
                        onHighlighted: (B) => u(B),
                        setSelectedTab: N,
                      }),
                  },
                  {
                    id: 'metadata',
                    title: 'Metadata',
                    count: 0,
                    render: () => {
                      var B, q;
                      return I('div', {
                        className: 'vbox',
                        children: [
                          v('div', { className: 'call-section', style: { paddingTop: 2 }, children: 'Time' }),
                          i.wallTime &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'start time: ',
                                v('span', {
                                  className: 'datetime',
                                  title: new Date(i.wallTime).toLocaleString(),
                                  children: new Date(i.wallTime).toLocaleString(),
                                }),
                              ],
                            }),
                          I('div', {
                            className: 'call-line',
                            children: [
                              'duration: ',
                              v('span', {
                                className: 'number',
                                title: Qn(i.endTime - i.startTime),
                                children: Qn(i.endTime - i.startTime),
                              }),
                            ],
                          }),
                          v('div', { className: 'call-section', children: 'Browser' }),
                          I('div', {
                            className: 'call-line',
                            children: [
                              'engine: ',
                              v('span', { className: 'string', title: i.browserName, children: i.browserName }),
                            ],
                          }),
                          i.platform &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'platform: ',
                                v('span', { className: 'string', title: i.platform, children: i.platform }),
                              ],
                            }),
                          i.options.userAgent &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'user agent: ',
                                v('span', {
                                  className: 'datetime',
                                  title: i.options.userAgent,
                                  children: i.options.userAgent,
                                }),
                              ],
                            }),
                          v('div', { className: 'call-section', children: 'Viewport' }),
                          i.options.viewport &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'width: ',
                                v('span', {
                                  className: 'number',
                                  title: String(!!((B = i.options.viewport) != null && B.width)),
                                  children: i.options.viewport.width,
                                }),
                              ],
                            }),
                          i.options.viewport &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'height: ',
                                v('span', {
                                  className: 'number',
                                  title: String(!!((q = i.options.viewport) != null && q.height)),
                                  children: i.options.viewport.height,
                                }),
                              ],
                            }),
                          I('div', {
                            className: 'call-line',
                            children: [
                              'is mobile: ',
                              v('span', {
                                className: 'boolean',
                                title: String(!!i.options.isMobile),
                                children: String(!!i.options.isMobile),
                              }),
                            ],
                          }),
                          i.options.deviceScaleFactor &&
                            I('div', {
                              className: 'call-line',
                              children: [
                                'device scale: ',
                                v('span', {
                                  className: 'number',
                                  title: String(i.options.deviceScaleFactor),
                                  children: String(i.options.deviceScaleFactor),
                                }),
                              ],
                            }),
                          v('div', { className: 'call-section', children: 'Counts' }),
                          I('div', {
                            className: 'call-line',
                            children: ['pages: ', v('span', { className: 'number', children: i.pages.length })],
                          }),
                          I('div', {
                            className: 'call-line',
                            children: ['actions: ', v('span', { className: 'number', children: i.actions.length })],
                          }),
                          I('div', {
                            className: 'call-line',
                            children: ['events: ', v('span', { className: 'number', children: i.events.length })],
                          }),
                        ],
                      });
                    },
                  },
                ],
                selectedTab: p,
                setSelectedTab: w,
              }),
            ],
          }),
          !!k.total &&
            v('div', {
              className: 'progress',
              children: v('div', { className: 'inner-progress', style: { width: (100 * k.done) / k.total + '%' } }),
            }),
          m &&
            I('div', {
              className: 'drop-target',
              children: [
                v('div', { children: 'Trace Viewer uses Service Workers to show traces. To view trace:' }),
                I('div', {
                  style: { paddingTop: 20 },
                  children: [
                    I('div', {
                      children: [
                        '1. Click ',
                        v('a', { href: m, children: 'here' }),
                        ' to put your trace into the download shelf',
                      ],
                    }),
                    I('div', {
                      children: [
                        '2. Go to ',
                        v('a', { href: 'https://trace.playwright.dev', children: 'trace.playwright.dev' }),
                      ],
                    }),
                    v('div', { children: '3. Drop the trace from the download shelf into the page' }),
                  ],
                }),
              ],
            }),
          !d &&
            !m &&
            (!e.length || f) &&
            I('div', {
              className: 'drop-target',
              children: [
                v('div', { className: 'processing-error', children: f }),
                v('div', { className: 'title', children: 'Drop Playwright Trace to load' }),
                v('div', { children: 'or' }),
                v('button', {
                  onClick: () => {
                    const B = document.createElement('input');
                    (B.type = 'file'), B.click(), B.addEventListener('change', (q) => O(q));
                  },
                  children: 'Select file',
                }),
                v('div', {
                  style: { maxWidth: 400 },
                  children:
                    'Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally.',
                }),
              ],
            }),
          d &&
            v('div', {
              className: 'drop-target',
              onDragLeave: () => {
                c(!1);
              },
              onDrop: (B) => C(B),
              children: v('div', { className: 'title', children: 'Release to analyse the Playwright Trace' }),
            }),
        ],
      })
    );
  },
  Ms = new au([]);
var Nu = { exports: {} },
  Ae = {},
  _u = { exports: {} },
  ku = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, i;
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
    var a = null,
      u = null,
      p = function () {
        if (a !== null)
          try {
            var E = e.unstable_now();
            a(!0, E), (a = null);
          } catch (P) {
            throw (setTimeout(p, 0), P);
          }
      };
    (t = function (E) {
      a !== null ? setTimeout(t, 0, E) : ((a = E), setTimeout(p, 0));
    }),
      (n = function (E, P) {
        u = setTimeout(E, P);
      }),
      (r = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (i = e.unstable_forceFrameRate = function () {});
  } else {
    var w = window.setTimeout,
      h = window.clearTimeout;
    if (typeof console != 'undefined') {
      var N = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != 'function' &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof N != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var k = !1,
      _ = null,
      d = -1,
      c = 5,
      f = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= f;
    }),
      (i = function () {}),
      (e.unstable_forceFrameRate = function (E) {
        0 > E || 125 < E
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (c = 0 < E ? Math.floor(1e3 / E) : 5);
      });
    var g = new MessageChannel(),
      m = g.port2;
    (g.port1.onmessage = function () {
      if (_ !== null) {
        var E = e.unstable_now();
        f = E + c;
        try {
          _(!0, E) ? m.postMessage(null) : ((k = !1), (_ = null));
        } catch (P) {
          throw (m.postMessage(null), P);
        }
      } else k = !1;
    }),
      (t = function (E) {
        (_ = E), k || ((k = !0), m.postMessage(null));
      }),
      (n = function (E, P) {
        d = w(function () {
          E(e.unstable_now());
        }, P);
      }),
      (r = function () {
        h(d), (d = -1);
      });
  }
  function S(E, P) {
    var $ = E.length;
    E.push(P);
    e: for (;;) {
      var Q = ($ - 1) >>> 1,
        W = E[Q];
      if (W !== void 0 && 0 < O(W, P)) (E[Q] = P), (E[$] = W), ($ = Q);
      else break e;
    }
  }
  function y(E) {
    return (E = E[0]), E === void 0 ? null : E;
  }
  function C(E) {
    var P = E[0];
    if (P !== void 0) {
      var $ = E.pop();
      if ($ !== P) {
        E[0] = $;
        e: for (var Q = 0, W = E.length; Q < W; ) {
          var pe = 2 * (Q + 1) - 1,
            Fe = E[pe],
            St = pe + 1,
            Je = E[St];
          if (Fe !== void 0 && 0 > O(Fe, $))
            Je !== void 0 && 0 > O(Je, Fe)
              ? ((E[Q] = Je), (E[St] = $), (Q = St))
              : ((E[Q] = Fe), (E[pe] = $), (Q = pe));
          else if (Je !== void 0 && 0 > O(Je, $)) (E[Q] = Je), (E[St] = $), (Q = St);
          else break e;
        }
      }
      return P;
    }
    return null;
  }
  function O(E, P) {
    var $ = E.sortIndex - P.sortIndex;
    return $ !== 0 ? $ : E.id - P.id;
  }
  var R = [],
    X = [],
    oe = 1,
    ie = null,
    G = 3,
    ye = !1,
    B = !1,
    q = !1;
  function x(E) {
    for (var P = y(X); P !== null; ) {
      if (P.callback === null) C(X);
      else if (P.startTime <= E) C(X), (P.sortIndex = P.expirationTime), S(R, P);
      else break;
      P = y(X);
    }
  }
  function L(E) {
    if (((q = !1), x(E), !B))
      if (y(R) !== null) (B = !0), t(F);
      else {
        var P = y(X);
        P !== null && n(L, P.startTime - E);
      }
  }
  function F(E, P) {
    (B = !1), q && ((q = !1), r()), (ye = !0);
    var $ = G;
    try {
      for (x(P), ie = y(R); ie !== null && (!(ie.expirationTime > P) || (E && !e.unstable_shouldYield())); ) {
        var Q = ie.callback;
        if (typeof Q == 'function') {
          (ie.callback = null), (G = ie.priorityLevel);
          var W = Q(ie.expirationTime <= P);
          (P = e.unstable_now()), typeof W == 'function' ? (ie.callback = W) : ie === y(R) && C(R), x(P);
        } else C(R);
        ie = y(R);
      }
      if (ie !== null) var pe = !0;
      else {
        var Fe = y(X);
        Fe !== null && n(L, Fe.startTime - P), (pe = !1);
      }
      return pe;
    } finally {
      (ie = null), (G = $), (ye = !1);
    }
  }
  var b = i;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      B || ye || ((B = !0), t(F));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return G;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return y(R);
    }),
    (e.unstable_next = function (E) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = G;
      }
      var $ = G;
      G = P;
      try {
        return E();
      } finally {
        G = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = b),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var $ = G;
      G = E;
      try {
        return P();
      } finally {
        G = $;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, $) {
      var Q = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? Q + $ : Q))
          : ($ = Q),
        E)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = $ + W),
        (E = { id: oe++, callback: P, priorityLevel: E, startTime: $, expirationTime: W, sortIndex: -1 }),
        $ > Q
          ? ((E.sortIndex = $), S(X, E), y(R) === null && E === y(X) && (q ? r() : (q = !0), n(L, $ - Q)))
          : ((E.sortIndex = W), S(R, E), B || ye || ((B = !0), t(F))),
        E
      );
    }),
    (e.unstable_wrapCallback = function (E) {
      var P = G;
      return function () {
        var $ = G;
        G = P;
        try {
          return E.apply(this, arguments);
        } finally {
          G = $;
        }
      };
    });
})(ku);
_u.exports = ku;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _i = A.exports,
  ee = Va,
  ue = _u.exports;
function T(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!_i) throw Error(T(227));
var xu = new Set(),
  qn = {};
function Pt(e, t) {
  sn(e, t), sn(e + 'Capture', t);
}
function sn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) xu.add(t[e]);
}
var qe = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  Qd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Os = Object.prototype.hasOwnProperty,
  Ls = {},
  Ps = {};
function Yd(e) {
  return Os.call(Ps, e) ? !0 : Os.call(Ls, e) ? !1 : Qd.test(e) ? (Ps[e] = !0) : ((Ls[e] = !0), !1);
}
function Xd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function qd(e, t, n, r) {
  if (t === null || typeof t == 'undefined' || Xd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function Se(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var go = /[\-:]([a-z])/g;
function vo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(go, vo);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(go, vo);
  de[t] = new Se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(go, vo);
  de[t] = new Se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yo(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null,
    l =
      i !== null
        ? i.type === 0
        : r
        ? !1
        : !(!(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N'));
  l ||
    (qd(t, n, i, r) && (n = null),
    r || i === null
      ? Yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = _i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ln = 60103,
  _t = 60106,
  tt = 60107,
  wo = 60108,
  Bn = 60114,
  Eo = 60109,
  So = 60110,
  ki = 60112,
  Un = 60113,
  Zr = 60120,
  xi = 60115,
  No = 60116,
  _o = 60121,
  ko = 60128,
  Tu = 60129,
  xo = 60130,
  wl = 60131;
if (typeof Symbol == 'function' && Symbol.for) {
  var ae = Symbol.for;
  (Ln = ae('react.element')),
    (_t = ae('react.portal')),
    (tt = ae('react.fragment')),
    (wo = ae('react.strict_mode')),
    (Bn = ae('react.profiler')),
    (Eo = ae('react.provider')),
    (So = ae('react.context')),
    (ki = ae('react.forward_ref')),
    (Un = ae('react.suspense')),
    (Zr = ae('react.suspense_list')),
    (xi = ae('react.memo')),
    (No = ae('react.lazy')),
    (_o = ae('react.block')),
    ae('react.scope'),
    (ko = ae('react.opaque.id')),
    (Tu = ae('react.debug_trace_mode')),
    (xo = ae('react.offscreen')),
    (wl = ae('react.legacy_hidden'));
}
var Ds = typeof Symbol == 'function' && Symbol.iterator;
function yn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ds && e[Ds]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Gi;
function Pn(e) {
  if (Gi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gi = (t && t[1]) || '';
    }
  return (
    `
` +
    Gi +
    e
  );
}
var Qi = !1;
function Rr(e, t) {
  if (!e || Qi) return '';
  Qi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var i = a.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && i[o] !== l[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== l[s]))
                return (
                  `
` + i[o].replace(' at new ', ' at ')
                );
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Qi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Pn(e) : '';
}
function Zd(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn('Lazy');
    case 13:
      return Pn('Suspense');
    case 19:
      return Pn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Rr(e.type, !1)), e;
    case 11:
      return (e = Rr(e.type.render, !1)), e;
    case 22:
      return (e = Rr(e.type._render, !1)), e;
    case 1:
      return (e = Rr(e.type, !0)), e;
    default:
      return '';
  }
}
function Xt(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case tt:
      return 'Fragment';
    case _t:
      return 'Portal';
    case Bn:
      return 'Profiler';
    case wo:
      return 'StrictMode';
    case Un:
      return 'Suspense';
    case Zr:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case So:
        return (e.displayName || 'Context') + '.Consumer';
      case Eo:
        return (e._context.displayName || 'Context') + '.Provider';
      case ki:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''), e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case xi:
        return Xt(e.type);
      case _o:
        return Xt(e._render);
      case No:
        (t = e._payload), (e = e._init);
        try {
          return Xt(e(t));
        } catch {}
    }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function Cu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Jd(e) {
  var t = Cu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n != 'undefined' && typeof n.get == 'function' && typeof n.set == 'function') {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Mr(e) {
  e._valueTracker || (e._valueTracker = Jd(e));
}
function Ru(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Cu(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Jr(e) {
  if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function El(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Is(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Mu(e, t) {
  (t = t.checked), t != null && yo(e, 'checked', t, !1);
}
function Sl(e, t) {
  Mu(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? Nl(e, t.type, n) : t.hasOwnProperty('defaultValue') && Nl(e, t.type, mt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function As(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Nl(e, t, n) {
  (t !== 'number' || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function ep(e) {
  var t = '';
  return (
    _i.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function _l(e, t) {
  return (e = ee({ children: void 0 }, t)), (t = ep(t.children)) && (e.children = t), e;
}
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ee({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Bs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function Ou(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Us(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
var xl = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg',
};
function Lu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Tl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Lu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Or,
  Pu = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== xl.svg || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Or = Or || document.createElement('div'),
          Or.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  tp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zn).forEach(function (e) {
  tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function Du(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Iu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Du(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var np = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Cl(e, t) {
  if (t) {
    if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (!(typeof t.dangerouslySetInnerHTML == 'object' && '__html' in t.dangerouslySetInnerHTML)) throw Error(T(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62));
  }
}
function Rl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function To(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ml = null,
  Zt = null,
  Jt = null;
function zs(e) {
  if ((e = gr(e))) {
    if (typeof Ml != 'function') throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Li(t)), Ml(e.stateNode, e.type, t));
  }
}
function Au(e) {
  Zt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Zt = e);
}
function Bu() {
  if (Zt) {
    var e = Zt,
      t = Jt;
    if (((Jt = Zt = null), zs(e), t)) for (e = 0; e < t.length; e++) zs(t[e]);
  }
}
function Co(e, t) {
  return e(t);
}
function Uu(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Ro() {}
var zu = Co,
  kt = !1,
  Yi = !1;
function Mo() {
  (Zt !== null || Jt !== null) && (Ro(), Bu());
}
function rp(e, t, n) {
  if (Yi) return e(t, n);
  Yi = !0;
  try {
    return zu(e, t, n);
  } finally {
    (Yi = !1), Mo();
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Li(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n));
  return n;
}
var Ol = !1;
if (qe)
  try {
    var wn = {};
    Object.defineProperty(wn, 'passive', {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener('test', wn, wn),
      window.removeEventListener('test', wn, wn);
  } catch {
    Ol = !1;
  }
function ip(e, t, n, r, i, l, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Fn = !1,
  ei = null,
  ti = !1,
  Ll = null,
  lp = {
    onError: function (e) {
      (Fn = !0), (ei = e);
    },
  };
function op(e, t, n, r, i, l, o, s, a) {
  (Fn = !1), (ei = null), ip.apply(lp, arguments);
}
function sp(e, t, n, r, i, l, o, s, a) {
  if ((op.apply(this, arguments), Fn)) {
    if (Fn) {
      var u = ei;
      (Fn = !1), (ei = null);
    } else throw Error(T(198));
    ti || ((ti = !0), (Ll = u));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Fs(e) {
  if (It(e) !== e) throw Error(T(188));
}
function ap(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Fs(i), e;
        if (l === r) return Fs(i), t;
        l = l.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function $u(e) {
  if (((e = ap(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function $s(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var bu,
  Oo,
  Hu,
  ju,
  Pl = !1,
  $e = [],
  ot = null,
  st = null,
  at = null,
  er = new Map(),
  tr = new Map(),
  En = [],
  bs =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Dl(e, t, n, r, i) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: i, targetContainers: [r] };
}
function Hs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ot = null;
      break;
    case 'dragenter':
    case 'dragleave':
      st = null;
      break;
    case 'mouseover':
    case 'mouseout':
      at = null;
      break;
    case 'pointerover':
    case 'pointerout':
      er.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      tr.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = Dl(t, n, r, i, l)), t !== null && ((t = gr(t)), t !== null && Oo(t)), e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function up(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ot = Sn(ot, e, t, n, r, i)), !0;
    case 'dragenter':
      return (st = Sn(st, e, t, n, r, i)), !0;
    case 'mouseover':
      return (at = Sn(at, e, t, n, r, i)), !0;
    case 'pointerover':
      var l = i.pointerId;
      return er.set(l, Sn(er.get(l) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (l = i.pointerId), tr.set(l, Sn(tr.get(l) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function cp(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fu(n)), t !== null)) {
          (e.blockedOn = t),
            ju(e.lanePriority, function () {
              ue.unstable_runWithPriority(e.priority, function () {
                Hu(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return (t = gr(n)), t !== null && Oo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function js(e, t, n) {
  br(e) && n.delete(t);
}
function fp() {
  for (Pl = !1; 0 < $e.length; ) {
    var e = $e[0];
    if (e.blockedOn !== null) {
      (e = gr(e.blockedOn)), e !== null && bu(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && $e.shift();
  }
  ot !== null && br(ot) && (ot = null),
    st !== null && br(st) && (st = null),
    at !== null && br(at) && (at = null),
    er.forEach(js),
    tr.forEach(js);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Pl || ((Pl = !0), ue.unstable_scheduleCallback(ue.unstable_NormalPriority, fp)));
}
function Vu(e) {
  function t(i) {
    return Nn(i, e);
  }
  if (0 < $e.length) {
    Nn($e[0], e);
    for (var n = 1; n < $e.length; n++) {
      var r = $e[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && Nn(ot, e), st !== null && Nn(st, e), at !== null && Nn(at, e), er.forEach(t), tr.forEach(t), n = 0;
    n < En.length;
    n++
  )
    (r = En[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); ) cp(n), n.blockedOn === null && En.shift();
}
function Lr(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var jt = {
    animationend: Lr('Animation', 'AnimationEnd'),
    animationiteration: Lr('Animation', 'AnimationIteration'),
    animationstart: Lr('Animation', 'AnimationStart'),
    transitionend: Lr('Transition', 'TransitionEnd'),
  },
  Xi = {},
  Wu = {};
qe &&
  ((Wu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete jt.animationend.animation, delete jt.animationiteration.animation, delete jt.animationstart.animation),
  'TransitionEvent' in window || delete jt.transitionend.transition);
function Ti(e) {
  if (Xi[e]) return Xi[e];
  if (!jt[e]) return e;
  var t = jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wu) return (Xi[e] = t[n]);
  return e;
}
var Ku = Ti('animationend'),
  Gu = Ti('animationiteration'),
  Qu = Ti('animationstart'),
  Yu = Ti('transitionend'),
  Xu = new Map(),
  Lo = new Map(),
  dp = [
    'abort',
    'abort',
    Ku,
    'animationEnd',
    Gu,
    'animationIteration',
    Qu,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    Yu,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function Po(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      i = e[n + 1];
    (i = 'on' + (i[0].toUpperCase() + i.slice(1))), Lo.set(r, t), Xu.set(r, i), Pt(i, [r]);
  }
}
var pp = ue.unstable_now;
pp();
var Y = 8;
function bt(e) {
  if ((1 & e) !== 0) return (Y = 15), 1;
  if ((2 & e) !== 0) return (Y = 14), 2;
  if ((4 & e) !== 0) return (Y = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((Y = 12), t)
    : (e & 32) !== 0
    ? ((Y = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((Y = 10), t)
        : (e & 256) !== 0
        ? ((Y = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((Y = 8), t)
            : (e & 4096) !== 0
            ? ((Y = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((Y = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((Y = 5), t)
                    : e & 67108864
                    ? ((Y = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((Y = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0 ? ((Y = 2), t) : (1073741824 & e) !== 0 ? ((Y = 1), 1073741824) : ((Y = 8), e))))));
}
function mp(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function hp(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(T(358, e));
  }
}
function nr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (Y = 0);
  var r = 0,
    i = 0,
    l = e.expiredLanes,
    o = e.suspendedLanes,
    s = e.pingedLanes;
  if (l !== 0) (r = l), (i = Y = 15);
  else if (((l = n & 134217727), l !== 0)) {
    var a = l & ~o;
    a !== 0 ? ((r = bt(a)), (i = Y)) : ((s &= l), s !== 0 && ((r = bt(s)), (i = Y)));
  } else (l = n & ~o), l !== 0 ? ((r = bt(l)), (i = Y)) : s !== 0 && ((r = bt(s)), (i = Y));
  if (r === 0) return 0;
  if (((r = 31 - ht(r)), (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)), t !== 0 && t !== r && (t & o) === 0)) {
    if ((bt(t), i <= Y)) return t;
    Y = i;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - ht(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function qu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ni(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Ht(24 & ~t)), e === 0 ? ni(10, t) : e;
    case 10:
      return (e = Ht(192 & ~t)), e === 0 ? ni(8, t) : e;
    case 8:
      return (e = Ht(3584 & ~t)), e === 0 && ((e = Ht(4186112 & ~t)), e === 0 && (e = 512)), e;
    case 2:
      return (t = Ht(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(T(358, e));
}
function Ht(e) {
  return e & -e;
}
function qi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ci(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r), (e.pingedLanes &= r), (e = e.eventTimes), (t = 31 - ht(t)), (e[t] = n);
}
var ht = Math.clz32 ? Math.clz32 : yp,
  gp = Math.log,
  vp = Math.LN2;
function yp(e) {
  return e === 0 ? 32 : (31 - ((gp(e) / vp) | 0)) | 0;
}
var wp = ue.unstable_UserBlockingPriority,
  Ep = ue.unstable_runWithPriority,
  Hr = !0;
function Sp(e, t, n, r) {
  kt || Ro();
  var i = Do,
    l = kt;
  kt = !0;
  try {
    Uu(i, e, t, n, r);
  } finally {
    (kt = l) || Mo();
  }
}
function Np(e, t, n, r) {
  Ep(wp, Do.bind(null, e, t, n, r));
}
function Do(e, t, n, r) {
  if (Hr) {
    var i;
    if ((i = (t & 4) === 0) && 0 < $e.length && -1 < bs.indexOf(e)) (e = Dl(null, e, t, n, r)), $e.push(e);
    else {
      var l = Io(e, t, n, r);
      if (l === null) i && Hs(e, r);
      else {
        if (i) {
          if (-1 < bs.indexOf(e)) {
            (e = Dl(l, e, t, n, r)), $e.push(e);
            return;
          }
          if (up(l, e, t, n, r)) return;
          Hs(e, r);
        }
        cc(e, t, r, null, n);
      }
    }
  }
}
function Io(e, t, n, r) {
  var i = To(r);
  if (((i = xt(i)), i !== null)) {
    var l = It(i);
    if (l === null) i = null;
    else {
      var o = l.tag;
      if (o === 13) {
        if (((i = Fu(l)), i !== null)) return i;
        i = null;
      } else if (o === 3) {
        if (l.stateNode.hydrate) return l.tag === 3 ? l.stateNode.containerInfo : null;
        i = null;
      } else l !== i && (i = null);
    }
  }
  return cc(e, t, r, i, n), null;
}
var rt = null,
  Ao = null,
  jr = null;
function Zu() {
  if (jr) return jr;
  var e,
    t = Ao,
    n = t.length,
    r,
    i = 'value' in rt ? rt.value : rt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (jr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function Vs() {
  return !1;
}
function Re(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Pr : Vs),
      (this.isPropagationStopped = Vs),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bo = Re(pn),
  hr = ee({}, pn, { view: 0, detail: 0 }),
  _p = Re(hr),
  Zi,
  Ji,
  _n,
  Ri = ee({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === 'mousemove'
              ? ((Zi = e.screenX - _n.screenX), (Ji = e.screenY - _n.screenY))
              : (Ji = Zi = 0),
            (_n = e)),
          Zi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ji;
    },
  }),
  Ws = Re(Ri),
  kp = ee({}, Ri, { dataTransfer: 0 }),
  xp = Re(kp),
  Tp = ee({}, hr, { relatedTarget: 0 }),
  el = Re(Tp),
  Cp = ee({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rp = Re(Cp),
  Mp = ee({}, pn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Op = Re(Mp),
  Lp = ee({}, pn, { data: 0 }),
  Ks = Re(Lp),
  Pp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Dp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ip = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
}
function Uo() {
  return Ap;
}
var Bp = ee({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = Pp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Vr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Dp[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uo,
    charCode: function (e) {
      return e.type === 'keypress' ? Vr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? Vr(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Up = Re(Bp),
  zp = ee({}, Ri, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gs = Re(zp),
  Fp = ee({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uo,
  }),
  $p = Re(Fp),
  bp = ee({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hp = Re(bp),
  jp = ee({}, Ri, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vp = Re(jp),
  Wp = [9, 13, 27, 32],
  zo = qe && 'CompositionEvent' in window,
  $n = null;
qe && 'documentMode' in document && ($n = document.documentMode);
var Kp = qe && 'TextEvent' in window && !$n,
  Ju = qe && (!zo || ($n && 8 < $n && 11 >= $n)),
  Qs = String.fromCharCode(32),
  Ys = !1;
function ec(e, t) {
  switch (e) {
    case 'keyup':
      return Wp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function tc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vt = !1;
function Gp(e, t) {
  switch (e) {
    case 'compositionend':
      return tc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ys = !0), Qs);
    case 'textInput':
      return (e = t.data), e === Qs && Ys ? null : e;
    default:
      return null;
  }
}
function Qp(e, t) {
  if (Vt) return e === 'compositionend' || (!zo && ec(e, t)) ? ((e = Zu()), (jr = Ao = rt = null), (Vt = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ju && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Yp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Yp[e.type] : t === 'textarea';
}
function nc(e, t, n, r) {
  Au(r),
    (t = ri(t, 'onChange')),
    0 < t.length && ((n = new Bo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var bn = null,
  rr = null;
function Xp(e) {
  sc(e, 0);
}
function Mi(e) {
  var t = Kt(e);
  if (Ru(t)) return e;
}
function qp(e, t) {
  if (e === 'change') return t;
}
var rc = !1;
if (qe) {
  var tl;
  if (qe) {
    var nl = 'oninput' in document;
    if (!nl) {
      var qs = document.createElement('div');
      qs.setAttribute('oninput', 'return;'), (nl = typeof qs.oninput == 'function');
    }
    tl = nl;
  } else tl = !1;
  rc = tl && (!document.documentMode || 9 < document.documentMode);
}
function Zs() {
  bn && (bn.detachEvent('onpropertychange', ic), (rr = bn = null));
}
function ic(e) {
  if (e.propertyName === 'value' && Mi(rr)) {
    var t = [];
    if ((nc(t, rr, e, To(e)), (e = Xp), kt)) e(t);
    else {
      kt = !0;
      try {
        Co(e, t);
      } finally {
        (kt = !1), Mo();
      }
    }
  }
}
function Zp(e, t, n) {
  e === 'focusin' ? (Zs(), (bn = t), (rr = n), bn.attachEvent('onpropertychange', ic)) : e === 'focusout' && Zs();
}
function Jp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Mi(rr);
}
function em(e, t) {
  if (e === 'click') return Mi(t);
}
function tm(e, t) {
  if (e === 'input' || e === 'change') return Mi(t);
}
function nm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == 'function' ? Object.is : nm,
  rm = Object.prototype.hasOwnProperty;
function ir(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!rm.call(t, n[r]) || !Oe(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Js(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ea(e, t) {
  var n = Js(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = Js(n);
  }
}
function lc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? lc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ta() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
var im = qe && 'documentMode' in document && 11 >= document.documentMode,
  Wt = null,
  Al = null,
  Hn = null,
  Bl = !1;
function na(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    Wt == null ||
    Wt !== Jr(r) ||
    ((r = Wt),
    'selectionStart' in r && Il(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Hn && ir(Hn, r)) ||
      ((Hn = r),
      (r = ri(Al, 'onSelect')),
      0 < r.length &&
        ((t = new Bo('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Wt))));
}
Po(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
);
Po(
  'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
    ' ',
  ),
  1,
);
Po(dp, 2);
for (
  var ra = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '), rl = 0;
  rl < ra.length;
  rl++
)
  Lo.set(ra[rl], 0);
sn('onMouseEnter', ['mouseout', 'mouseover']);
sn('onMouseLeave', ['mouseout', 'mouseover']);
sn('onPointerEnter', ['pointerout', 'pointerover']);
sn('onPointerLeave', ['pointerout', 'pointerover']);
Pt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Pt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Pt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Pt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Pt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Pt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Dn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  oc = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dn));
function ia(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), sp(r, t, void 0, e), (e.currentTarget = null);
}
function sc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && i.isPropagationStopped())) break e;
          ia(i, s, u), (l = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== l && i.isPropagationStopped())
          )
            break e;
          ia(i, s, u), (l = a);
        }
    }
  }
  if (ti) throw ((e = Ll), (ti = !1), (Ll = null), e);
}
function Z(e, t) {
  var n = dc(t),
    r = e + '__bubble';
  n.has(r) || (uc(t, e, 2, !1), n.add(r));
}
var la = '_reactListening' + Math.random().toString(36).slice(2);
function ac(e) {
  e[la] ||
    ((e[la] = !0),
    xu.forEach(function (t) {
      oc.has(t) || oa(t, !1, e, null), oa(t, !0, e, null);
    }));
}
function oa(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    l = n;
  if ((e === 'selectionchange' && n.nodeType !== 9 && (l = n.ownerDocument), r !== null && !t && oc.has(e))) {
    if (e !== 'scroll') return;
    (i |= 2), (l = r);
  }
  var o = dc(l),
    s = e + '__' + (t ? 'capture' : 'bubble');
  o.has(s) || (t && (i |= 4), uc(l, e, i, t), o.add(s));
}
function uc(e, t, n, r) {
  var i = Lo.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = Sp;
      break;
    case 1:
      i = Np;
      break;
    default:
      i = Do;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function cc(e, t, n, r, i) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo), a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = xt(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = l = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  rp(function () {
    var u = l,
      p = To(n),
      w = [];
    e: {
      var h = Xu.get(e);
      if (h !== void 0) {
        var N = Bo,
          k = e;
        switch (e) {
          case 'keypress':
            if (Vr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            N = Up;
            break;
          case 'focusin':
            (k = 'focus'), (N = el);
            break;
          case 'focusout':
            (k = 'blur'), (N = el);
            break;
          case 'beforeblur':
          case 'afterblur':
            N = el;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            N = Ws;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            N = xp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            N = $p;
            break;
          case Ku:
          case Gu:
          case Qu:
            N = Rp;
            break;
          case Yu:
            N = Hp;
            break;
          case 'scroll':
            N = _p;
            break;
          case 'wheel':
            N = Vp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            N = Op;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            N = Gs;
        }
        var _ = (t & 4) !== 0,
          d = !_ && e === 'scroll',
          c = _ ? (h !== null ? h + 'Capture' : null) : h;
        _ = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var m = g.stateNode;
          if (
            (g.tag === 5 && m !== null && ((g = m), c !== null && ((m = Jn(f, c)), m != null && _.push(lr(f, m, g)))),
            d)
          )
            break;
          f = f.return;
        }
        0 < _.length && ((h = new N(h, k, null, n, p)), w.push({ event: h, listeners: _ }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (N = e === 'mouseout' || e === 'pointerout'),
          h && (t & 16) === 0 && (k = n.relatedTarget || n.fromElement) && (xt(k) || k[mn]))
        )
          break e;
        if (
          (N || h) &&
          ((h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window),
          N
            ? ((k = n.relatedTarget || n.toElement),
              (N = u),
              (k = k ? xt(k) : null),
              k !== null && ((d = It(k)), k !== d || (k.tag !== 5 && k.tag !== 6)) && (k = null))
            : ((N = null), (k = u)),
          N !== k)
        ) {
          if (
            ((_ = Ws),
            (m = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = Gs), (m = 'onPointerLeave'), (c = 'onPointerEnter'), (f = 'pointer')),
            (d = N == null ? h : Kt(N)),
            (g = k == null ? h : Kt(k)),
            (h = new _(m, f + 'leave', N, n, p)),
            (h.target = d),
            (h.relatedTarget = g),
            (m = null),
            xt(p) === u && ((_ = new _(c, f + 'enter', k, n, p)), (_.target = g), (_.relatedTarget = d), (m = _)),
            (d = m),
            N && k)
          )
            t: {
              for (_ = N, c = k, f = 0, g = _; g; g = Ft(g)) f++;
              for (g = 0, m = c; m; m = Ft(m)) g++;
              for (; 0 < f - g; ) (_ = Ft(_)), f--;
              for (; 0 < g - f; ) (c = Ft(c)), g--;
              for (; f--; ) {
                if (_ === c || (c !== null && _ === c.alternate)) break t;
                (_ = Ft(_)), (c = Ft(c));
              }
              _ = null;
            }
          else _ = null;
          N !== null && sa(w, h, N, _, !1), k !== null && d !== null && sa(w, d, k, _, !0);
        }
      }
      e: {
        if (
          ((h = u ? Kt(u) : window),
          (N = h.nodeName && h.nodeName.toLowerCase()),
          N === 'select' || (N === 'input' && h.type === 'file'))
        )
          var S = qp;
        else if (Xs(h))
          if (rc) S = tm;
          else {
            S = Jp;
            var y = Zp;
          }
        else
          (N = h.nodeName) && N.toLowerCase() === 'input' && (h.type === 'checkbox' || h.type === 'radio') && (S = em);
        if (S && (S = S(e, u))) {
          nc(w, S, n, p);
          break e;
        }
        y && y(e, h, u),
          e === 'focusout' && (y = h._wrapperState) && y.controlled && h.type === 'number' && Nl(h, 'number', h.value);
      }
      switch (((y = u ? Kt(u) : window), e)) {
        case 'focusin':
          (Xs(y) || y.contentEditable === 'true') && ((Wt = y), (Al = u), (Hn = null));
          break;
        case 'focusout':
          Hn = Al = Wt = null;
          break;
        case 'mousedown':
          Bl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Bl = !1), na(w, n, p);
          break;
        case 'selectionchange':
          if (im) break;
        case 'keydown':
        case 'keyup':
          na(w, n, p);
      }
      var C;
      if (zo)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        Vt ? ec(e, n) && (O = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (Ju &&
          n.locale !== 'ko' &&
          (Vt || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && Vt && (C = Zu())
            : ((rt = p), (Ao = 'value' in rt ? rt.value : rt.textContent), (Vt = !0))),
        (y = ri(u, O)),
        0 < y.length &&
          ((O = new Ks(O, e, null, n, p)),
          w.push({ event: O, listeners: y }),
          C ? (O.data = C) : ((C = tc(n)), C !== null && (O.data = C)))),
        (C = Kp ? Gp(e, n) : Qp(e, n)) &&
          ((u = ri(u, 'onBeforeInput')),
          0 < u.length &&
            ((p = new Ks('onBeforeInput', 'beforeinput', null, n, p)),
            w.push({ event: p, listeners: u }),
            (p.data = C)));
    }
    sc(w, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l), (l = Jn(e, n)), l != null && r.unshift(lr(e, l, i)), (l = Jn(e, t)), l != null && r.push(lr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sa(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = Jn(n, l)), a != null && o.unshift(lr(n, a, s)))
        : i || ((a = Jn(n, l)), a != null && o.push(lr(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function ii() {}
var il = null,
  ll = null;
function fc(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function Ul(e, t) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var aa = typeof setTimeout == 'function' ? setTimeout : void 0,
  lm = typeof clearTimeout == 'function' ? clearTimeout : void 0;
function Fo(e) {
  e.nodeType === 1 ? (e.textContent = '') : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''));
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function ua(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ol = 0;
function om(e) {
  return { $$typeof: ko, toString: e, valueOf: e };
}
var Oi = Math.random().toString(36).slice(2),
  it = '__reactFiber$' + Oi,
  li = '__reactProps$' + Oi,
  mn = '__reactContainer$' + Oi,
  ca = '__reactEvents$' + Oi;
function xt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mn] || n[it])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ua(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = ua(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function gr(e) {
  return (e = e[it] || e[mn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Li(e) {
  return e[li] || null;
}
function dc(e) {
  var t = e[ca];
  return t === void 0 && (t = e[ca] = new Set()), t;
}
var zl = [],
  Gt = -1;
function wt(e) {
  return { current: e };
}
function J(e) {
  0 > Gt || ((e.current = zl[Gt]), (zl[Gt] = null), Gt--);
}
function ne(e, t) {
  Gt++, (zl[Gt] = e.current), (e.current = t);
}
var gt = {},
  ve = wt(gt),
  ke = wt(!1),
  Mt = gt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function oi() {
  J(ke), J(ve);
}
function fa(e, t, n) {
  if (ve.current !== gt) throw Error(T(168));
  ne(ve, t), ne(ke, n);
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(T(108, Xt(t) || 'Unknown', i));
  return ee({}, n, r);
}
function Wr(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Mt = ve.current),
    ne(ve, e),
    ne(ke, ke.current),
    !0
  );
}
function da(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n ? ((e = pc(e, t, Mt)), (r.__reactInternalMemoizedMergedChildContext = e), J(ke), J(ve), ne(ve, e)) : J(ke),
    ne(ke, n);
}
var $o = null,
  Rt = null,
  sm = ue.unstable_runWithPriority,
  bo = ue.unstable_scheduleCallback,
  Fl = ue.unstable_cancelCallback,
  am = ue.unstable_shouldYield,
  pa = ue.unstable_requestPaint,
  $l = ue.unstable_now,
  um = ue.unstable_getCurrentPriorityLevel,
  Pi = ue.unstable_ImmediatePriority,
  mc = ue.unstable_UserBlockingPriority,
  hc = ue.unstable_NormalPriority,
  gc = ue.unstable_LowPriority,
  vc = ue.unstable_IdlePriority,
  sl = {},
  cm = pa !== void 0 ? pa : function () {},
  Ke = null,
  Kr = null,
  al = !1,
  ma = $l(),
  he =
    1e4 > ma
      ? $l
      : function () {
          return $l() - ma;
        };
function un() {
  switch (um()) {
    case Pi:
      return 99;
    case mc:
      return 98;
    case hc:
      return 97;
    case gc:
      return 96;
    case vc:
      return 95;
    default:
      throw Error(T(332));
  }
}
function yc(e) {
  switch (e) {
    case 99:
      return Pi;
    case 98:
      return mc;
    case 97:
      return hc;
    case 96:
      return gc;
    case 95:
      return vc;
    default:
      throw Error(T(332));
  }
}
function Ot(e, t) {
  return (e = yc(e)), sm(e, t);
}
function or(e, t, n) {
  return (e = yc(e)), bo(e, t, n);
}
function We() {
  if (Kr !== null) {
    var e = Kr;
    (Kr = null), Fl(e);
  }
  wc();
}
function wc() {
  if (!al && Ke !== null) {
    al = !0;
    var e = 0;
    try {
      var t = Ke;
      Ot(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Ke = null);
    } catch (n) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), bo(Pi, We), n);
    } finally {
      al = !1;
    }
  }
}
var fm = Dt.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var si = wt(null),
  ai = null,
  Qt = null,
  ui = null;
function Ho() {
  ui = Qt = ai = null;
}
function jo(e) {
  var t = si.current;
  J(si), (e.type._context._currentValue = t);
}
function Ec(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function tn(e, t) {
  (ai = e),
    (ui = Qt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ze = !0), (e.firstContext = null));
}
function De(e, t) {
  if (ui !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != 'number' || t === 1073741823) && ((ui = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Qt === null)
    ) {
      if (ai === null) throw Error(T(308));
      (Qt = t), (ai.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Qt = Qt.next = t;
  return e._currentValue;
}
var et = !1;
function Vo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Sc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ct(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
}
function ha(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function sr(e, t, n, r) {
  var i = e.updateQueue;
  et = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), o === null ? (l = u) : (o.next = u), (o = a);
    var p = e.alternate;
    if (p !== null) {
      p = p.updateQueue;
      var w = p.lastBaseUpdate;
      w !== o && (w === null ? (p.firstBaseUpdate = u) : (w.next = u), (p.lastBaseUpdate = a));
    }
  }
  if (l !== null) {
    (w = i.baseState), (o = 0), (p = u = a = null);
    do {
      s = l.lane;
      var h = l.eventTime;
      if ((r & s) === s) {
        p !== null &&
          (p = p.next = { eventTime: h, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var N = e,
            k = l;
          switch (((s = t), (h = n), k.tag)) {
            case 1:
              if (((N = k.payload), typeof N == 'function')) {
                w = N.call(h, w, s);
                break e;
              }
              w = N;
              break e;
            case 3:
              N.flags = (N.flags & -4097) | 64;
            case 0:
              if (((N = k.payload), (s = typeof N == 'function' ? N.call(h, w, s) : N), s == null)) break e;
              w = ee({}, w, s);
              break e;
            case 2:
              et = !0;
          }
        }
        l.callback !== null && ((e.flags |= 32), (s = i.effects), s === null ? (i.effects = [l]) : s.push(l));
      } else
        (h = { eventTime: h, lane: s, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          p === null ? ((u = p = h), (a = w)) : (p = p.next = h),
          (o |= s);
      if (((l = l.next), l === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (l = s.next), (s.next = null), (i.lastBaseUpdate = s), (i.shared.pending = null);
      }
    } while (1);
    p === null && (a = w),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = p),
      (yr |= o),
      (e.lanes = o),
      (e.memoizedState = w);
  }
}
function ga(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(T(191, i));
        i.call(r);
      }
    }
}
var Nc = new _i.Component().refs;
function ci(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Di = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = ft(e),
      l = ut(r, i);
    (l.payload = t), n != null && (l.callback = n), ct(e, l), dt(e, i, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = ft(e),
      l = ut(r, i);
    (l.tag = 1), (l.payload = t), n != null && (l.callback = n), ct(e, l), dt(e, i, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = ft(e),
      i = ut(n, r);
    (i.tag = 2), t != null && (i.callback = t), ct(e, i), dt(e, r, n);
  },
};
function va(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ir(n, r) || !ir(i, l)
      : !0
  );
}
function _c(e, t, n) {
  var r = !1,
    i = gt,
    l = t.contextType;
  return (
    typeof l == 'object' && l !== null
      ? (l = De(l))
      : ((i = xe(t) ? Mt : ve.current), (r = t.contextTypes), (l = (r = r != null) ? an(e, i) : gt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Di),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ya(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Di.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Nc), Vo(e);
  var l = t.contextType;
  typeof l == 'object' && l !== null ? (i.context = De(l)) : ((l = xe(t) ? Mt : ve.current), (i.context = an(e, l))),
    sr(e, n, i, r),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (ci(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Di.enqueueReplaceState(i, i.state, null),
      sr(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4);
}
var Dr = Array.isArray;
function kn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var o = r.refs;
            o === Nc && (o = r.refs = {}), l === null ? delete o[i] : (o[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ir(e, t) {
  if (e.type !== 'textarea')
    throw Error(
      T(
        31,
        Object.prototype.toString.call(t) === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function kc(e) {
  function t(d, c) {
    if (e) {
      var f = d.lastEffect;
      f !== null ? ((f.nextEffect = c), (d.lastEffect = c)) : (d.firstEffect = d.lastEffect = c),
        (c.nextEffect = null),
        (c.flags = 8);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = yt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, c, f) {
    return (
      (d.index = f),
      e ? ((f = d.alternate), f !== null ? ((f = f.index), f < c ? ((d.flags = 2), c) : f) : ((d.flags = 2), c)) : c
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags = 2), d;
  }
  function s(d, c, f, g) {
    return c === null || c.tag !== 6 ? ((c = pl(f, d.mode, g)), (c.return = d), c) : ((c = i(c, f)), (c.return = d), c);
  }
  function a(d, c, f, g) {
    return c !== null && c.elementType === f.type
      ? ((g = i(c, f.props)), (g.ref = kn(d, c, f)), (g.return = d), g)
      : ((g = Xr(f.type, f.key, f.props, null, d.mode, g)), (g.ref = kn(d, c, f)), (g.return = d), g);
  }
  function u(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = ml(f, d.mode, g)), (c.return = d), c)
      : ((c = i(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, g, m) {
    return c === null || c.tag !== 7
      ? ((c = on(f, d.mode, g, m)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function w(d, c, f) {
    if (typeof c == 'string' || typeof c == 'number') return (c = pl('' + c, d.mode, f)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Ln:
          return (f = Xr(c.type, c.key, c.props, null, d.mode, f)), (f.ref = kn(d, null, c)), (f.return = d), f;
        case _t:
          return (c = ml(c, d.mode, f)), (c.return = d), c;
      }
      if (Dr(c) || yn(c)) return (c = on(c, d.mode, f, null)), (c.return = d), c;
      Ir(d, c);
    }
    return null;
  }
  function h(d, c, f, g) {
    var m = c !== null ? c.key : null;
    if (typeof f == 'string' || typeof f == 'number') return m !== null ? null : s(d, c, '' + f, g);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Ln:
          return f.key === m ? (f.type === tt ? p(d, c, f.props.children, g, m) : a(d, c, f, g)) : null;
        case _t:
          return f.key === m ? u(d, c, f, g) : null;
      }
      if (Dr(f) || yn(f)) return m !== null ? null : p(d, c, f, g, null);
      Ir(d, f);
    }
    return null;
  }
  function N(d, c, f, g, m) {
    if (typeof g == 'string' || typeof g == 'number') return (d = d.get(f) || null), s(c, d, '' + g, m);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Ln:
          return (
            (d = d.get(g.key === null ? f : g.key) || null),
            g.type === tt ? p(c, d, g.props.children, m, g.key) : a(c, d, g, m)
          );
        case _t:
          return (d = d.get(g.key === null ? f : g.key) || null), u(c, d, g, m);
      }
      if (Dr(g) || yn(g)) return (d = d.get(f) || null), p(c, d, g, m, null);
      Ir(c, g);
    }
    return null;
  }
  function k(d, c, f, g) {
    for (var m = null, S = null, y = c, C = (c = 0), O = null; y !== null && C < f.length; C++) {
      y.index > C ? ((O = y), (y = null)) : (O = y.sibling);
      var R = h(d, y, f[C], g);
      if (R === null) {
        y === null && (y = O);
        break;
      }
      e && y && R.alternate === null && t(d, y),
        (c = l(R, c, C)),
        S === null ? (m = R) : (S.sibling = R),
        (S = R),
        (y = O);
    }
    if (C === f.length) return n(d, y), m;
    if (y === null) {
      for (; C < f.length; C++)
        (y = w(d, f[C], g)), y !== null && ((c = l(y, c, C)), S === null ? (m = y) : (S.sibling = y), (S = y));
      return m;
    }
    for (y = r(d, y); C < f.length; C++)
      (O = N(y, d, C, f[C], g)),
        O !== null &&
          (e && O.alternate !== null && y.delete(O.key === null ? C : O.key),
          (c = l(O, c, C)),
          S === null ? (m = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        y.forEach(function (X) {
          return t(d, X);
        }),
      m
    );
  }
  function _(d, c, f, g) {
    var m = yn(f);
    if (typeof m != 'function') throw Error(T(150));
    if (((f = m.call(f)), f == null)) throw Error(T(151));
    for (var S = (m = null), y = c, C = (c = 0), O = null, R = f.next(); y !== null && !R.done; C++, R = f.next()) {
      y.index > C ? ((O = y), (y = null)) : (O = y.sibling);
      var X = h(d, y, R.value, g);
      if (X === null) {
        y === null && (y = O);
        break;
      }
      e && y && X.alternate === null && t(d, y),
        (c = l(X, c, C)),
        S === null ? (m = X) : (S.sibling = X),
        (S = X),
        (y = O);
    }
    if (R.done) return n(d, y), m;
    if (y === null) {
      for (; !R.done; C++, R = f.next())
        (R = w(d, R.value, g)), R !== null && ((c = l(R, c, C)), S === null ? (m = R) : (S.sibling = R), (S = R));
      return m;
    }
    for (y = r(d, y); !R.done; C++, R = f.next())
      (R = N(y, d, C, R.value, g)),
        R !== null &&
          (e && R.alternate !== null && y.delete(R.key === null ? C : R.key),
          (c = l(R, c, C)),
          S === null ? (m = R) : (S.sibling = R),
          (S = R));
    return (
      e &&
        y.forEach(function (oe) {
          return t(d, oe);
        }),
      m
    );
  }
  return function (d, c, f, g) {
    var m = typeof f == 'object' && f !== null && f.type === tt && f.key === null;
    m && (f = f.props.children);
    var S = typeof f == 'object' && f !== null;
    if (S)
      switch (f.$$typeof) {
        case Ln:
          e: {
            for (S = f.key, m = c; m !== null; ) {
              if (m.key === S) {
                switch (m.tag) {
                  case 7:
                    if (f.type === tt) {
                      n(d, m.sibling), (c = i(m, f.props.children)), (c.return = d), (d = c);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === f.type) {
                      n(d, m.sibling), (c = i(m, f.props)), (c.ref = kn(d, m, f)), (c.return = d), (d = c);
                      break e;
                    }
                }
                n(d, m);
                break;
              } else t(d, m);
              m = m.sibling;
            }
            f.type === tt
              ? ((c = on(f.props.children, d.mode, g, f.key)), (c.return = d), (d = c))
              : ((g = Xr(f.type, f.key, f.props, null, d.mode, g)), (g.ref = kn(d, c, f)), (g.return = d), (d = g));
          }
          return o(d);
        case _t:
          e: {
            for (m = f.key; c !== null; ) {
              if (c.key === m)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling), (c = i(c, f.children || [])), (c.return = d), (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ml(f, d.mode, g)), (c.return = d), (d = c);
          }
          return o(d);
      }
    if (typeof f == 'string' || typeof f == 'number')
      return (
        (f = '' + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = pl(f, d.mode, g)), (c.return = d), (d = c)),
        o(d)
      );
    if (Dr(f)) return k(d, c, f, g);
    if (yn(f)) return _(d, c, f, g);
    if ((S && Ir(d, f), typeof f == 'undefined' && !m))
      switch (d.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(T(152, Xt(d.type) || 'Component'));
      }
    return n(d, c);
  };
}
var fi = kc(!0),
  xc = kc(!1),
  vr = {},
  je = wt(vr),
  ar = wt(vr),
  ur = wt(vr);
function Tt(e) {
  if (e === vr) throw Error(T(174));
  return e;
}
function Hl(e, t) {
  switch ((ne(ur, t), ne(ar, e), ne(je, vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Tl(t, e));
  }
  J(je), ne(je, t);
}
function cn() {
  J(je), J(ar), J(ur);
}
function wa(e) {
  Tt(ur.current);
  var t = Tt(je.current),
    n = Tl(t, e.type);
  t !== n && (ne(ar, e), ne(je, n));
}
function Wo(e) {
  ar.current === e && (J(je), J(ar));
}
var te = wt(0);
function di(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Qe = null,
  lt = null,
  Ve = !1;
function Tc(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
}
function Ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function jl(e) {
  if (Ve) {
    var t = lt;
    if (t) {
      var n = t;
      if (!Ea(e, t)) {
        if (((t = en(n.nextSibling)), !t || !Ea(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (Ve = !1), (Qe = e);
          return;
        }
        Tc(Qe, n);
      }
      (Qe = e), (lt = en(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Ve = !1), (Qe = e);
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Ar(e) {
  if (e !== Qe) return !1;
  if (!Ve) return Sa(e), (Ve = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !Ul(t, e.memoizedProps)))
    for (t = lt; t; ) Tc(e, t), (t = en(t.nextSibling));
  if ((Sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              lt = en(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      lt = null;
    }
  } else lt = Qe ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function ul() {
  (lt = Qe = null), (Ve = !1);
}
var nn = [];
function Ko() {
  for (var e = 0; e < nn.length; e++) nn[e]._workInProgressVersionPrimary = null;
  nn.length = 0;
}
var jn = Dt.ReactCurrentDispatcher,
  Pe = Dt.ReactCurrentBatchConfig,
  cr = 0,
  re = null,
  me = null,
  ce = null,
  pi = !1,
  Vn = !1;
function Ne() {
  throw Error(T(321));
}
function Go(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, i, l) {
  if (
    ((cr = l),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jn.current = e === null || e.memoizedState === null ? pm : mm),
    (e = n(r, i)),
    Vn)
  ) {
    l = 0;
    do {
      if (((Vn = !1), !(25 > l))) throw Error(T(301));
      (l += 1), (ce = me = null), (t.updateQueue = null), (jn.current = hm), (e = n(r, i));
    } while (Vn);
  }
  if (((jn.current = vi), (t = me !== null && me.next !== null), (cr = 0), (ce = me = re = null), (pi = !1), t))
    throw Error(T(300));
  return e;
}
function Ct() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ce === null ? (re.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function At() {
  if (me === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ce === null ? re.memoizedState : ce.next;
  if (t !== null) (ce = t), (me = e);
  else {
    if (e === null) throw Error(T(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ce === null ? (re.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function be(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function xn(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = me,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (i = i.next), (r = r.baseState);
    var s = (o = l = null),
      a = i;
    do {
      var u = a.lane;
      if ((cr & u) === u)
        s !== null &&
          (s = s.next =
            { lane: 0, action: a.action, eagerReducer: a.eagerReducer, eagerState: a.eagerState, next: null }),
          (r = a.eagerReducer === e ? a.eagerState : e(r, a.action));
      else {
        var p = { lane: u, action: a.action, eagerReducer: a.eagerReducer, eagerState: a.eagerState, next: null };
        s === null ? ((o = s = p), (l = r)) : (s = s.next = p), (re.lanes |= u), (yr |= u);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = o),
      Oe(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function Tn(e) {
  var t = At(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    Oe(l, t.memoizedState) || (ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Na(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (
    (i !== null
      ? (e = i === r)
      : ((e = e.mutableReadLanes), (e = (cr & e) === e) && ((t._workInProgressVersionPrimary = r), nn.push(t))),
    e)
  )
    return n(t._source);
  throw (nn.push(t), Error(T(350)));
}
function Cc(e, t, n, r) {
  var i = Ee;
  if (i === null) throw Error(T(349));
  var l = t._getVersion,
    o = l(t._source),
    s = jn.current,
    a = s.useState(function () {
      return Na(i, t, n);
    }),
    u = a[1],
    p = a[0];
  a = ce;
  var w = e.memoizedState,
    h = w.refs,
    N = h.getSnapshot,
    k = w.source;
  w = w.subscribe;
  var _ = re;
  return (
    (e.memoizedState = { refs: h, source: t, subscribe: r }),
    s.useEffect(
      function () {
        (h.getSnapshot = n), (h.setSnapshot = u);
        var d = l(t._source);
        if (!Oe(o, d)) {
          (d = n(t._source)),
            Oe(p, d) || (u(d), (d = ft(_)), (i.mutableReadLanes |= d & i.pendingLanes)),
            (d = i.mutableReadLanes),
            (i.entangledLanes |= d);
          for (var c = i.entanglements, f = d; 0 < f; ) {
            var g = 31 - ht(f),
              m = 1 << g;
            (c[g] |= d), (f &= ~m);
          }
        }
      },
      [n, t, r],
    ),
    s.useEffect(
      function () {
        return r(t._source, function () {
          var d = h.getSnapshot,
            c = h.setSnapshot;
          try {
            c(d(t._source));
            var f = ft(_);
            i.mutableReadLanes |= f & i.pendingLanes;
          } catch (g) {
            c(function () {
              throw g;
            });
          }
        });
      },
      [t, r],
    ),
    (Oe(N, n) && Oe(k, t) && Oe(w, r)) ||
      ((e = { pending: null, dispatch: null, lastRenderedReducer: be, lastRenderedState: p }),
      (e.dispatch = u = qo.bind(null, re, e)),
      (a.queue = e),
      (a.baseQueue = null),
      (p = Na(i, t, n)),
      (a.memoizedState = a.baseState = p)),
    p
  );
}
function Rc(e, t, n) {
  var r = At();
  return Cc(r, e, t, n);
}
function Cn(e) {
  var t = Ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: be, lastRenderedState: e }),
    (e = e.dispatch = qo.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null }), (re.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _a(e) {
  var t = Ct();
  return (e = { current: e }), (t.memoizedState = e);
}
function hi() {
  return At().memoizedState;
}
function Vl(e, t, n, r) {
  var i = Ct();
  (re.flags |= e), (i.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yo(e, t, n, r) {
  var i = At();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((l = o.destroy), r !== null && Go(r, o.deps))) {
      mi(t, n, l, r);
      return;
    }
  }
  (re.flags |= e), (i.memoizedState = mi(1 | t, n, l, r));
}
function ka(e, t) {
  return Vl(516, 4, e, t);
}
function gi(e, t) {
  return Yo(516, 4, e, t);
}
function Mc(e, t) {
  return Yo(4, 2, e, t);
}
function Oc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Lc(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Yo(4, 2, Oc.bind(null, t, e), n);
}
function Xo() {}
function Pc(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Dc(e, t) {
  var n = At();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Go(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dm(e, t) {
  var n = un();
  Ot(98 > n ? 98 : n, function () {
    e(!0);
  }),
    Ot(97 < n ? 97 : n, function () {
      var r = Pe.transition;
      Pe.transition = 1;
      try {
        e(!1), t();
      } finally {
        Pe.transition = r;
      }
    });
}
function qo(e, t, n) {
  var r = Ce(),
    i = ft(e),
    l = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
    o = t.pending;
  if (
    (o === null ? (l.next = l) : ((l.next = o.next), (o.next = l)),
    (t.pending = l),
    (o = e.alternate),
    e === re || (o !== null && o === re))
  )
    Vn = pi = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((l.eagerReducer = o), (l.eagerState = a), Oe(a, s))) return;
      } catch {
      } finally {
      }
    dt(e, i, r);
  }
}
var vi = {
    readContext: De,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useOpaqueIdentifier: Ne,
    unstable_isNewReconciler: !1,
  },
  pm = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: ka,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Vl(4, 2, Oc.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (e = e.dispatch = qo.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: _a,
    useState: Cn,
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      var t = Cn(e),
        n = t[0],
        r = t[1];
      return (
        ka(
          function () {
            var i = Pe.transition;
            Pe.transition = 1;
            try {
              r(e);
            } finally {
              Pe.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Cn(!1),
        t = e[0];
      return (e = dm.bind(null, e[1])), _a(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = Ct();
      return (
        (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }), Cc(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ve) {
        var e = !1,
          t = om(function () {
            throw (e || ((e = !0), n('r:' + (ol++).toString(36))), Error(T(355)));
          }),
          n = Cn(t)[1];
        return (
          (re.mode & 2) === 0 &&
            ((re.flags |= 516),
            mi(
              5,
              function () {
                n('r:' + (ol++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return (t = 'r:' + (ol++).toString(36)), Cn(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: De,
    useCallback: Pc,
    useContext: De,
    useEffect: gi,
    useImperativeHandle: Lc,
    useLayoutEffect: Mc,
    useMemo: Dc,
    useReducer: xn,
    useRef: hi,
    useState: function () {
      return xn(be);
    },
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      var t = xn(be),
        n = t[0],
        r = t[1];
      return (
        gi(
          function () {
            var i = Pe.transition;
            Pe.transition = 1;
            try {
              r(e);
            } finally {
              Pe.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = xn(be)[0];
      return [hi().current, e];
    },
    useMutableSource: Rc,
    useOpaqueIdentifier: function () {
      return xn(be)[0];
    },
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: De,
    useCallback: Pc,
    useContext: De,
    useEffect: gi,
    useImperativeHandle: Lc,
    useLayoutEffect: Mc,
    useMemo: Dc,
    useReducer: Tn,
    useRef: hi,
    useState: function () {
      return Tn(be);
    },
    useDebugValue: Xo,
    useDeferredValue: function (e) {
      var t = Tn(be),
        n = t[0],
        r = t[1];
      return (
        gi(
          function () {
            var i = Pe.transition;
            Pe.transition = 1;
            try {
              r(e);
            } finally {
              Pe.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Tn(be)[0];
      return [hi().current, e];
    },
    useMutableSource: Rc,
    useOpaqueIdentifier: function () {
      return Tn(be)[0];
    },
    unstable_isNewReconciler: !1,
  },
  gm = Dt.ReactCurrentOwner,
  ze = !1;
function _e(e, t, n, r) {
  t.child = e === null ? xc(t, null, n, r) : fi(t, e.child, n, r);
}
function xa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    tn(t, i),
    (r = Qo(e, t, n, r, l, i)),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), Ye(e, t, i))
      : ((t.flags |= 1), _e(e, t, r, i), t.child)
  );
}
function Ta(e, t, n, r, i, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !rs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ic(e, t, o, r, i, l))
      : ((e = Xr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  return (
    (o = e.child),
    (i & l) === 0 && ((i = o.memoizedProps), (n = n.compare), (n = n !== null ? n : ir), n(i, r) && e.ref === t.ref)
      ? Ye(e, t, l)
      : ((t.flags |= 1), (e = yt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  );
}
function Ic(e, t, n, r, i, l) {
  if (e !== null && ir(e.memoizedProps, r) && e.ref === t.ref)
    if (((ze = !1), (l & i) !== 0)) (e.flags & 16384) !== 0 && (ze = !0);
    else return (t.lanes = e.lanes), Ye(e, t, l);
  return Wl(e, t, n, r, l);
}
function cl(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), Ur(t, n);
    else if ((n & 1073741824) !== 0) (t.memoizedState = { baseLanes: 0 }), Ur(t, l !== null ? l.baseLanes : n);
    else
      return (
        (e = l !== null ? l.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        Ur(t, e),
        null
      );
  else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Ur(t, r);
  return _e(e, t, i, n), t.child;
}
function Ac(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && (t.flags |= 128);
}
function Wl(e, t, n, r, i) {
  var l = xe(n) ? Mt : ve.current;
  return (
    (l = an(t, l)),
    tn(t, i),
    (n = Qo(e, t, n, r, l, i)),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), Ye(e, t, i))
      : ((t.flags |= 1), _e(e, t, n, i), t.child)
  );
}
function Ca(e, t, n, r, i) {
  if (xe(n)) {
    var l = !0;
    Wr(t);
  } else l = !1;
  if ((tn(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)), _c(t, n, r), bl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null ? (u = De(u)) : ((u = xe(n) ? Mt : ve.current), (u = an(t, u)));
    var p = n.getDerivedStateFromProps,
      w = typeof p == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    w ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && ya(t, o, r, u)),
      (et = !1);
    var h = t.memoizedState;
    (o.state = h),
      sr(t, r, o, i),
      (a = t.memoizedState),
      s !== r || h !== a || ke.current || et
        ? (typeof p == 'function' && (ci(t, n, p, r), (a = t.memoizedState)),
          (s = et || va(t, n, s, r, h, a, u))
            ? (w ||
                (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4), (r = !1));
  } else {
    (o = t.stateNode),
      Sc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ue(t.type, s)),
      (o.props = u),
      (w = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = De(a)) : ((a = xe(n) ? Mt : ve.current), (a = an(t, a)));
    var N = n.getDerivedStateFromProps;
    (p = typeof N == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
      ((s !== w || h !== a) && ya(t, o, r, a)),
      (et = !1),
      (h = t.memoizedState),
      (o.state = h),
      sr(t, r, o, i);
    var k = t.memoizedState;
    s !== w || h !== k || ke.current || et
      ? (typeof N == 'function' && (ci(t, n, N, r), (k = t.memoizedState)),
        (u = et || va(t, n, u, r, h, k, a))
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, k, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, k, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
          : (typeof o.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return Kl(e, t, n, r, l, i);
}
function Kl(e, t, n, r, i, l) {
  Ac(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return i && da(t, n, !1), Ye(e, t, l);
  (r = t.stateNode), (gm.current = t);
  var s = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = fi(t, e.child, null, l)), (t.child = fi(t, null, s, l))) : _e(e, t, s, l),
    (t.memoizedState = r.state),
    i && da(t, n, !0),
    t.child
  );
}
function Ra(e) {
  var t = e.stateNode;
  t.pendingContext ? fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fa(e, t.context, !1),
    Hl(e, t.containerInfo);
}
var Br = { dehydrated: null, retryLane: 0 };
function Ma(e, t, n) {
  var r = t.pendingProps,
    i = te.current,
    l = !1,
    o;
  return (
    (o = (t.flags & 64) !== 0) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (i |= 1),
    ne(te, i & 1),
    e === null
      ? (r.fallback !== void 0 && jl(t),
        (e = r.children),
        (i = r.fallback),
        l
          ? ((e = Oa(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Br), e)
          : typeof r.unstable_expectedLoadTime == 'number'
          ? ((e = Oa(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Br),
            (t.lanes = 33554432),
            e)
          : ((n = is({ mode: 'visible', children: e }, t.mode, n, null)), (n.return = t), (t.child = n)))
      : e.memoizedState !== null
      ? l
        ? ((r = Pa(e, t, r.children, r.fallback, n)),
          (l = t.child),
          (i = e.child.memoizedState),
          (l.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = Br),
          r)
        : ((n = La(e, t, r.children, n)), (t.memoizedState = null), n)
      : l
      ? ((r = Pa(e, t, r.children, r.fallback, n)),
        (l = t.child),
        (i = e.child.memoizedState),
        (l.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Br),
        r)
      : ((n = La(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function Oa(e, t, n, r) {
  var i = e.mode,
    l = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    (i & 2) === 0 && l !== null ? ((l.childLanes = 0), (l.pendingProps = t)) : (l = is(t, i, 0, null)),
    (n = on(n, i, r, null)),
    (l.return = e),
    (n.return = e),
    (l.sibling = n),
    (e.child = l),
    n
  );
}
function La(e, t, n, r) {
  var i = e.child;
  return (
    (e = i.sibling),
    (n = yt(i, { mode: 'visible', children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Pa(e, t, n, r, i) {
  var l = t.mode,
    o = e.child;
  e = o.sibling;
  var s = { mode: 'hidden', children: n };
  return (
    (l & 2) === 0 && t.child !== o
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = s),
        (o = n.lastEffect),
        o !== null
          ? ((t.firstEffect = n.firstEffect), (t.lastEffect = o), (o.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = yt(o, s)),
    e !== null ? (r = yt(e, r)) : ((r = on(r, l, i, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Da(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ec(e.return, t);
}
function fl(e, t, n, r, i, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        lastEffect: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i),
      (o.lastEffect = l));
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((_e(e, t, r.children, n), (r = te.current), (r & 2) !== 0)) (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Da(e, n);
        else if (e.tag === 19) Da(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(te, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && di(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          fl(t, !1, i, n, l, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && di(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fl(t, !0, n, null, l, t.lastEffect);
        break;
      case 'together':
        fl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ye(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (yr |= t.lanes), (n & t.childLanes) !== 0)) {
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
      for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = yt(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Bc, Gl, Uc, zc;
Bc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Gl = function () {};
Uc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Tt(je.current);
    var l = null;
    switch (n) {
      case 'input':
        (i = El(e, i)), (r = El(e, r)), (l = []);
        break;
      case 'option':
        (i = _l(e, i)), (r = _l(e, r)), (l = []);
        break;
      case 'select':
        (i = ee({}, i, { value: void 0 })), (r = ee({}, r, { value: void 0 })), (l = []);
        break;
      case 'textarea':
        (i = kl(e, i)), (r = kl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ii);
    }
    Cl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (qn.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((s = i != null ? i[u] : void 0), r.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === 'style')
          if (s) {
            for (o in s) !s.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') || (l = l || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (qn.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && Z('scroll', e), l || s === a || (l = []))
                : typeof a == 'object' && a !== null && a.$$typeof === ko
                ? a.toString()
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push('style', n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!Ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function vm(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
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
      return null;
    case 1:
      return xe(t.type) && oi(), null;
    case 3:
      return (
        cn(),
        J(ke),
        J(ve),
        Ko(),
        (r = t.stateNode),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) && (Ar(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        Gl(t),
        null
      );
    case 5:
      Wo(t);
      var i = Tt(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Uc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return null;
        }
        if (((e = Tt(je.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[it] = t), (r[li] = l), n)) {
            case 'dialog':
              Z('cancel', r), Z('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Z('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < Dn.length; e++) Z(Dn[e], r);
              break;
            case 'source':
              Z('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Z('error', r), Z('load', r);
              break;
            case 'details':
              Z('toggle', r);
              break;
            case 'input':
              Is(r, l), Z('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!l.multiple }), Z('invalid', r);
              break;
            case 'textarea':
              Bs(r, l), Z('invalid', r);
          }
          Cl(n, l), (e = null);
          for (var o in l)
            l.hasOwnProperty(o) &&
              ((i = l[o]),
              o === 'children'
                ? typeof i == 'string'
                  ? r.textContent !== i && (e = ['children', i])
                  : typeof i == 'number' && r.textContent !== '' + i && (e = ['children', '' + i])
                : qn.hasOwnProperty(o) && i != null && o === 'onScroll' && Z('scroll', r));
          switch (n) {
            case 'input':
              Mr(r), As(r, l, !0);
              break;
            case 'textarea':
              Mr(r), Us(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof l.onClick == 'function' && (r.onclick = ii);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === xl.html && (e = Lu(n)),
            e === xl.html
              ? n === 'script'
                ? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[it] = t),
            (e[li] = r),
            Bc(e, t, !1, !1),
            (t.stateNode = e),
            (o = Rl(n, r)),
            n)
          ) {
            case 'dialog':
              Z('cancel', e), Z('close', e), (i = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Z('load', e), (i = r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Dn.length; i++) Z(Dn[i], e);
              i = r;
              break;
            case 'source':
              Z('error', e), (i = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Z('error', e), Z('load', e), (i = r);
              break;
            case 'details':
              Z('toggle', e), (i = r);
              break;
            case 'input':
              Is(e, r), (i = El(e, r)), Z('invalid', e);
              break;
            case 'option':
              i = _l(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }), (i = ee({}, r, { value: void 0 })), Z('invalid', e);
              break;
            case 'textarea':
              Bs(e, r), (i = kl(e, r)), Z('invalid', e);
              break;
            default:
              i = r;
          }
          Cl(n, i);
          var s = i;
          for (l in s)
            if (s.hasOwnProperty(l)) {
              var a = s[l];
              l === 'style'
                ? Iu(e, a)
                : l === 'dangerouslySetInnerHTML'
                ? ((a = a ? a.__html : void 0), a != null && Pu(e, a))
                : l === 'children'
                ? typeof a == 'string'
                  ? (n !== 'textarea' || a !== '') && Zn(e, a)
                  : typeof a == 'number' && Zn(e, '' + a)
                : l !== 'suppressContentEditableWarning' &&
                  l !== 'suppressHydrationWarning' &&
                  l !== 'autoFocus' &&
                  (qn.hasOwnProperty(l)
                    ? a != null && l === 'onScroll' && Z('scroll', e)
                    : a != null && yo(e, l, a, o));
            }
          switch (n) {
            case 'input':
              Mr(e), As(e, r, !1);
              break;
            case 'textarea':
              Mr(e), Us(e);
              break;
            case 'option':
              r.value != null && e.setAttribute('value', '' + mt(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? qt(e, !!r.multiple, l, !1)
                  : r.defaultValue != null && qt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == 'function' && (e.onclick = ii);
          }
          fc(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) zc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
        (n = Tt(ur.current)),
          Tt(je.current),
          Ar(t)
            ? ((r = t.stateNode), (n = t.memoizedProps), (r[it] = t), r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[it] = t), (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        J(te),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? t.memoizedProps.fallback !== void 0 && Ar(t) : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) || (te.current & 1) !== 0
                ? fe === 0 && (fe = 3)
                : ((fe === 0 || fe === 3) && (fe = 4),
                  Ee === null || ((yr & 134217727) === 0 && (gn & 134217727) === 0) || rn(Ee, ge))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return cn(), Gl(t), e === null && ac(t.stateNode.containerInfo), null;
    case 10:
      return jo(t), null;
    case 17:
      return xe(t.type) && oi(), null;
    case 19:
      if ((J(te), (r = t.memoizedState), r === null)) return null;
      if (((l = (t.flags & 64) !== 0), (o = r.rendering), o === null))
        if (l) Rn(r, !1);
        else {
          if (fe !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = di(e)), o !== null)) {
                for (
                  t.flags |= 64,
                    Rn(r, !1),
                    l = o.updateQueue,
                    l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 2),
                    (l.nextEffect = null),
                    (l.firstEffect = null),
                    (l.lastEffect = null),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ne(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null && he() > Jl && ((t.flags |= 64), (l = !0), Rn(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!l)
          if (((e = di(o)), e !== null)) {
            if (
              ((t.flags |= 64),
              (l = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(r, !0),
              r.tail === null && r.tailMode === 'hidden' && !o.alternate && !Ve)
            )
              return (t = t.lastEffect = r.lastEffect), t !== null && (t.nextEffect = null), null;
          } else
            2 * he() - r.renderingStartTime > Jl &&
              n !== 1073741824 &&
              ((t.flags |= 64), (l = !0), Rn(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = r.last), n !== null ? (n.sibling = o) : (t.child = o), (r.last = o));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = he()),
          (n.sibling = null),
          (t = te.current),
          ne(te, l ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        ns(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== 'unstable-defer-without-hiding' &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(T(156, t.tag));
}
function ym(e) {
  switch (e.tag) {
    case 1:
      xe(e.type) && oi();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((cn(), J(ke), J(ve), Ko(), (t = e.flags), (t & 64) !== 0)) throw Error(T(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return Wo(e), null;
    case 13:
      return J(te), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 19:
      return J(te), null;
    case 4:
      return cn(), null;
    case 10:
      return jo(e), null;
    case 23:
    case 24:
      return ns(), null;
    default:
      return null;
  }
}
function Zo(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Zd(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wm = typeof WeakMap == 'function' ? WeakMap : Map;
function Fc(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (eo = r)), Ql(e, t);
    }),
    n
  );
}
function $c(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    n.payload = function () {
      return Ql(e, t), r(i);
    };
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        typeof r != 'function' && (He === null ? (He = new Set([this])) : He.add(this), Ql(e, t));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
var Em = typeof WeakSet == 'function' ? WeakSet : Set;
function Aa(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (n) {
        pt(e, n);
      }
    else t.current = null;
}
function Sm(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ue(t.type, n), r)),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && Fo(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(T(163));
}
function Nm(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          var i = e;
          (r = i.next), (i = i.tag), (i & 4) !== 0 && (i & 1) !== 0 && (Yc(n, e), Om(n, e)), (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r = n.elementType === n.type ? t.memoizedProps : Ue(n.type, t.memoizedProps)),
              e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
        (t = n.updateQueue),
        t !== null && ga(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        ga(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode), t === null && n.flags & 4 && fc(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null && ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null && Vu(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(T(163));
}
function Ba(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == 'function' ? r.setProperty('display', 'none', 'important') : (r.display = 'none');
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        (i = i != null && i.hasOwnProperty('display') ? i.display : null), (r.style.display = Du('display', i));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ua(e, t) {
  if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
    try {
      Rt.onCommitFiberUnmount($o, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var n = (e = e.next);
        do {
          var r = n,
            i = r.destroy;
          if (((r = r.tag), i !== void 0))
            if ((r & 4) !== 0) Yc(t, n);
            else {
              r = t;
              try {
                i();
              } catch (l) {
                pt(r, l);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ((Aa(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
        } catch (l) {
          pt(t, l);
        }
      break;
    case 5:
      Aa(t);
      break;
    case 4:
      bc(e, t);
  }
}
function za(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Fa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $a(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Fa(t)) break e;
      t = t.return;
    }
    throw Error(T(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(T(161));
  }
  n.flags & 16 && (Zn(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Fa(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Yl(e, n, t) : Xl(e, n, t);
}
function Yl(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ii));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), (e = e.sibling);
}
function Xl(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), (e = e.sibling);
}
function bc(e, t) {
  for (var n = t, r = !1, i, l; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(T(160));
        switch (((i = r.stateNode), r.tag)) {
          case 5:
            l = !1;
            break e;
          case 3:
            (i = i.containerInfo), (l = !0);
            break e;
          case 4:
            (i = i.containerInfo), (l = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var o = e, s = n, a = s; ; )
        if ((Ua(o, a), a.child !== null && a.tag !== 4)) (a.child.return = a), (a = a.child);
        else {
          if (a === s) break e;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === s) break e;
            a = a.return;
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      l
        ? ((o = i), (s = n.stateNode), o.nodeType === 8 ? o.parentNode.removeChild(s) : o.removeChild(s))
        : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (i = n.stateNode.containerInfo), (l = !0), (n.child.return = n), (n = n.child);
        continue;
      }
    } else if ((Ua(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function dl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do (r.tag & 3) === 3 && ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()), (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var l = t.updateQueue;
        if (((t.updateQueue = null), l !== null)) {
          for (
            n[li] = r, e === 'input' && r.type === 'radio' && r.name != null && Mu(n, r), Rl(e, i), t = Rl(e, r), i = 0;
            i < l.length;
            i += 2
          ) {
            var o = l[i],
              s = l[i + 1];
            o === 'style'
              ? Iu(n, s)
              : o === 'dangerouslySetInnerHTML'
              ? Pu(n, s)
              : o === 'children'
              ? Zn(n, s)
              : yo(n, o, s, t);
          }
          switch (e) {
            case 'input':
              Sl(n, r);
              break;
            case 'textarea':
              Ou(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (l = r.value),
                l != null
                  ? qt(n, !!r.multiple, l, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? qt(n, !!r.multiple, r.defaultValue, !0)
                      : qt(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(T(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Vu(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((ts = he()), Ba(t.child, !0)), ba(t);
      return;
    case 19:
      ba(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Ba(t, t.memoizedState !== null);
      return;
  }
  throw Error(T(163));
}
function ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Em()),
      t.forEach(function (r) {
        var i = Dm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function _m(e, t) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var km = Math.ceil,
  yi = Dt.ReactCurrentDispatcher,
  Jo = Dt.ReactCurrentOwner,
  z = 0,
  Ee = null,
  se = null,
  ge = 0,
  Lt = 0,
  ql = wt(0),
  fe = 0,
  Ii = null,
  hn = 0,
  yr = 0,
  gn = 0,
  es = 0,
  Zl = null,
  ts = 0,
  Jl = 1 / 0;
function vn() {
  Jl = he() + 500;
}
var M = null,
  wi = !1,
  eo = null,
  He = null,
  vt = !1,
  Wn = null,
  In = 90,
  to = [],
  no = [],
  Xe = null,
  Kn = 0,
  ro = null,
  Gr = -1,
  Ge = 0,
  Qr = 0,
  Gn = null,
  Yr = !1;
function Ce() {
  return (z & 48) !== 0 ? he() : Gr !== -1 ? Gr : (Gr = he());
}
function ft(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return un() === 99 ? 1 : 2;
  if ((Ge === 0 && (Ge = hn), fm.transition !== 0)) {
    Qr !== 0 && (Qr = Zl !== null ? Zl.pendingLanes : 0), (e = Ge);
    var t = 4186112 & ~Qr;
    return (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t;
  }
  return (e = un()), (z & 4) !== 0 && e === 98 ? (e = ni(12, Ge)) : ((e = mp(e)), (e = ni(e, Ge))), e;
}
function dt(e, t, n) {
  if (50 < Kn) throw ((Kn = 0), (ro = null), Error(T(185)));
  if (((e = Ai(e, t)), e === null)) return null;
  Ci(e, t, n), e === Ee && ((gn |= t), fe === 4 && rn(e, ge));
  var r = un();
  t === 1
    ? (z & 8) !== 0 && (z & 48) === 0
      ? io(e)
      : (Ie(e, n), z === 0 && (vn(), We()))
    : ((z & 4) === 0 || (r !== 98 && r !== 99) || (Xe === null ? (Xe = new Set([e])) : Xe.add(e)), Ie(e, n)),
    (Zl = e);
}
function Ai(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Ie(e, t) {
  for (
    var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - ht(o),
      a = 1 << s,
      u = l[s];
    if (u === -1) {
      if ((a & r) === 0 || (a & i) !== 0) {
        (u = t), bt(a);
        var p = Y;
        l[s] = 10 <= p ? u + 250 : 6 <= p ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= a);
    o &= ~a;
  }
  if (((r = nr(e, e === Ee ? ge : 0)), (t = Y), r === 0))
    n !== null && (n !== sl && Fl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== sl && Fl(n);
    }
    t === 15
      ? ((n = io.bind(null, e)), Ke === null ? ((Ke = [n]), (Kr = bo(Pi, wc))) : Ke.push(n), (n = sl))
      : t === 14
      ? (n = or(99, io.bind(null, e)))
      : ((n = hp(t)), (n = or(n, Hc.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Hc(e) {
  if (((Gr = -1), (Qr = Ge = 0), (z & 48) !== 0)) throw Error(T(327));
  var t = e.callbackNode;
  if (Et() && e.callbackNode !== t) return null;
  var n = nr(e, e === Ee ? ge : 0);
  if (n === 0) return null;
  var r = n,
    i = z;
  z |= 16;
  var l = Kc();
  (Ee !== e || ge !== r) && (vn(), ln(e, r));
  do
    try {
      Cm();
      break;
    } catch (s) {
      Wc(e, s);
    }
  while (1);
  if ((Ho(), (yi.current = l), (z = i), se !== null ? (r = 0) : ((Ee = null), (ge = 0), (r = fe)), (hn & gn) !== 0))
    ln(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((z |= 64), e.hydrate && ((e.hydrate = !1), Fo(e.containerInfo)), (n = qu(e)), n !== 0 && (r = An(e, n))),
      r === 1)
    )
      throw ((t = Ii), ln(e, 0), rn(e, n), Ie(e, he()), t);
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
      case 0:
      case 1:
        throw Error(T(345));
      case 2:
        Nt(e);
        break;
      case 3:
        if ((rn(e, n), (n & 62914560) === n && ((r = ts + 500 - he()), 10 < r))) {
          if (nr(e, 0) !== 0) break;
          if (((i = e.suspendedLanes), (i & n) !== n)) {
            Ce(), (e.pingedLanes |= e.suspendedLanes & i);
            break;
          }
          e.timeoutHandle = aa(Nt.bind(null, e), r);
          break;
        }
        Nt(e);
        break;
      case 4:
        if ((rn(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var o = 31 - ht(n);
          (l = 1 << o), (o = r[o]), o > i && (i = o), (n &= ~l);
        }
        if (
          ((n = i),
          (n = he() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * km(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = aa(Nt.bind(null, e), n);
          break;
        }
        Nt(e);
        break;
      case 5:
        Nt(e);
        break;
      default:
        throw Error(T(329));
    }
  }
  return Ie(e, he()), e.callbackNode === t ? Hc.bind(null, e) : null;
}
function rn(e, t) {
  for (t &= ~es, t &= ~gn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function io(e) {
  if ((z & 48) !== 0) throw Error(T(327));
  if ((Et(), e === Ee && (e.expiredLanes & ge) !== 0)) {
    var t = ge,
      n = An(e, t);
    (hn & gn) !== 0 && ((t = nr(e, t)), (n = An(e, t)));
  } else (t = nr(e, 0)), (n = An(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((z |= 64), e.hydrate && ((e.hydrate = !1), Fo(e.containerInfo)), (t = qu(e)), t !== 0 && (n = An(e, t))),
    n === 1)
  )
    throw ((n = Ii), ln(e, 0), rn(e, t), Ie(e, he()), n);
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Nt(e), Ie(e, he()), null;
}
function xm() {
  if (Xe !== null) {
    var e = Xe;
    (Xe = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Ie(t, he());
      });
  }
  We();
}
function jc(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && (vn(), We());
  }
}
function Vc(e, t) {
  var n = z;
  (z &= -2), (z |= 8);
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && (vn(), We());
  }
}
function Ur(e, t) {
  ne(ql, Lt), (Lt |= t), (hn |= t);
}
function ns() {
  (Lt = ql.current), J(ql);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lm(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && oi();
          break;
        case 3:
          cn(), J(ke), J(ve), Ko();
          break;
        case 5:
          Wo(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          J(te);
          break;
        case 19:
          J(te);
          break;
        case 10:
          jo(r);
          break;
        case 23:
        case 24:
          ns();
      }
      n = n.return;
    }
  (Ee = e), (se = yt(e.current, null)), (ge = Lt = hn = t), (fe = 0), (Ii = null), (es = gn = yr = 0);
}
function Wc(e, t) {
  do {
    var n = se;
    try {
      if ((Ho(), (jn.current = vi), pi)) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        pi = !1;
      }
      if (((cr = 0), (ce = me = re = null), (Vn = !1), (Jo.current = null), n === null || n.return === null)) {
        (fe = 1), (Ii = t), (se = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = ge),
          (s.flags |= 2048),
          (s.firstEffect = s.lastEffect = null),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a;
          if ((s.mode & 2) === 0) {
            var p = s.alternate;
            p
              ? ((s.updateQueue = p.updateQueue), (s.memoizedState = p.memoizedState), (s.lanes = p.lanes))
              : ((s.updateQueue = null), (s.memoizedState = null));
          }
          var w = (te.current & 1) !== 0,
            h = o;
          do {
            var N;
            if ((N = h.tag === 13)) {
              var k = h.memoizedState;
              if (k !== null) N = k.dehydrated !== null;
              else {
                var _ = h.memoizedProps;
                N = _.fallback === void 0 ? !1 : _.unstable_avoidThisFallback !== !0 ? !0 : !w;
              }
            }
            if (N) {
              var d = h.updateQueue;
              if (d === null) {
                var c = new Set();
                c.add(u), (h.updateQueue = c);
              } else d.add(u);
              if ((h.mode & 2) === 0) {
                if (((h.flags |= 64), (s.flags |= 16384), (s.flags &= -2981), s.tag === 1))
                  if (s.alternate === null) s.tag = 17;
                  else {
                    var f = ut(-1, 1);
                    (f.tag = 2), ct(s, f);
                  }
                s.lanes |= 1;
                break e;
              }
              (a = void 0), (s = t);
              var g = l.pingCache;
              if (
                (g === null
                  ? ((g = l.pingCache = new wm()), (a = new Set()), g.set(u, a))
                  : ((a = g.get(u)), a === void 0 && ((a = new Set()), g.set(u, a))),
                !a.has(s))
              ) {
                a.add(s);
                var m = Pm.bind(null, l, u, s);
                u.then(m, m);
              }
              (h.flags |= 4096), (h.lanes = t);
              break e;
            }
            h = h.return;
          } while (h !== null);
          a = Error(
            (Xt(s.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          );
        }
        fe !== 5 && (fe = 2), (a = Zo(a, s)), (h = o);
        do {
          switch (h.tag) {
            case 3:
              (l = a), (h.flags |= 4096), (t &= -t), (h.lanes |= t);
              var S = Fc(h, l, t);
              ha(h, S);
              break e;
            case 1:
              l = a;
              var y = h.type,
                C = h.stateNode;
              if (
                (h.flags & 64) === 0 &&
                (typeof y.getDerivedStateFromError == 'function' ||
                  (C !== null && typeof C.componentDidCatch == 'function' && (He === null || !He.has(C))))
              ) {
                (h.flags |= 4096), (t &= -t), (h.lanes |= t);
                var O = $c(h, l, t);
                ha(h, O);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      Qc(n);
    } catch (R) {
      (t = R), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kc() {
  var e = yi.current;
  return (yi.current = vi), e === null ? vi : e;
}
function An(e, t) {
  var n = z;
  z |= 16;
  var r = Kc();
  (Ee === e && ge === t) || ln(e, t);
  do
    try {
      Tm();
      break;
    } catch (i) {
      Wc(e, i);
    }
  while (1);
  if ((Ho(), (z = n), (yi.current = r), se !== null)) throw Error(T(261));
  return (Ee = null), (ge = 0), fe;
}
function Tm() {
  for (; se !== null; ) Gc(se);
}
function Cm() {
  for (; se !== null && !am(); ) Gc(se);
}
function Gc(e) {
  var t = Xc(e.alternate, e, Lt);
  (e.memoizedProps = e.pendingProps), t === null ? Qc(e) : (se = t), (Jo.current = null);
}
function Qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = vm(n, t, Lt)), n !== null)) {
        se = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) || n.memoizedState === null || (Lt & 1073741824) !== 0 || (n.mode & 4) === 0)
      ) {
        for (var r = 0, i = n.child; i !== null; ) (r |= i.lanes | i.childLanes), (i = i.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
    } else {
      if (((n = ym(t)), n !== null)) {
        (n.flags &= 2047), (se = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Nt(e) {
  var t = un();
  return Ot(99, Rm.bind(null, e, t)), null;
}
function Rm(e, t) {
  do Et();
  while (Wn !== null);
  if ((z & 48) !== 0) throw Error(T(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    i = r,
    l = e.pendingLanes & ~i;
  (e.pendingLanes = i),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= i),
    (e.mutableReadLanes &= i),
    (e.entangledLanes &= i),
    (i = e.entanglements);
  for (var o = e.eventTimes, s = e.expirationTimes; 0 < l; ) {
    var a = 31 - ht(l),
      u = 1 << a;
    (i[a] = 0), (o[a] = -1), (s[a] = -1), (l &= ~u);
  }
  if (
    (Xe !== null && (r & 24) === 0 && Xe.has(e) && Xe.delete(e),
    e === Ee && ((se = Ee = null), (ge = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (((i = z), (z |= 32), (Jo.current = null), (il = Hr), (o = ta()), Il(o))) {
      if ('selectionStart' in o) s = { start: o.selectionStart, end: o.selectionEnd };
      else
        e: if (
          ((s = ((s = o.ownerDocument) && s.defaultView) || window),
          (u = s.getSelection && s.getSelection()) && u.rangeCount !== 0)
        ) {
          (s = u.anchorNode), (l = u.anchorOffset), (a = u.focusNode), (u = u.focusOffset);
          try {
            s.nodeType, a.nodeType;
          } catch {
            s = null;
            break e;
          }
          var p = 0,
            w = -1,
            h = -1,
            N = 0,
            k = 0,
            _ = o,
            d = null;
          t: for (;;) {
            for (
              var c;
              _ !== s || (l !== 0 && _.nodeType !== 3) || (w = p + l),
                _ !== a || (u !== 0 && _.nodeType !== 3) || (h = p + u),
                _.nodeType === 3 && (p += _.nodeValue.length),
                (c = _.firstChild) !== null;

            )
              (d = _), (_ = c);
            for (;;) {
              if (_ === o) break t;
              if ((d === s && ++N === l && (w = p), d === a && ++k === u && (h = p), (c = _.nextSibling) !== null))
                break;
              (_ = d), (d = _.parentNode);
            }
            _ = c;
          }
          s = w === -1 || h === -1 ? null : { start: w, end: h };
        } else s = null;
      s = s || { start: 0, end: 0 };
    } else s = null;
    (ll = { focusedElem: o, selectionRange: s }), (Hr = !1), (Gn = null), (Yr = !1), (M = r);
    do
      try {
        Mm();
      } catch (R) {
        if (M === null) throw Error(T(330));
        pt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    (Gn = null), (M = r);
    do
      try {
        for (o = e; M !== null; ) {
          var f = M.flags;
          if ((f & 16 && Zn(M.stateNode, ''), f & 128)) {
            var g = M.alternate;
            if (g !== null) {
              var m = g.ref;
              m !== null && (typeof m == 'function' ? m(null) : (m.current = null));
            }
          }
          switch (f & 1038) {
            case 2:
              $a(M), (M.flags &= -3);
              break;
            case 6:
              $a(M), (M.flags &= -3), dl(M.alternate, M);
              break;
            case 1024:
              M.flags &= -1025;
              break;
            case 1028:
              (M.flags &= -1025), dl(M.alternate, M);
              break;
            case 4:
              dl(M.alternate, M);
              break;
            case 8:
              (s = M), bc(o, s);
              var S = s.alternate;
              za(s), S !== null && za(S);
          }
          M = M.nextEffect;
        }
      } catch (R) {
        if (M === null) throw Error(T(330));
        pt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    if (
      ((m = ll),
      (g = ta()),
      (f = m.focusedElem),
      (o = m.selectionRange),
      g !== f && f && f.ownerDocument && lc(f.ownerDocument.documentElement, f))
    ) {
      for (
        o !== null &&
          Il(f) &&
          ((g = o.start),
          (m = o.end),
          m === void 0 && (m = g),
          ('selectionStart' in f)
            ? ((f.selectionStart = g), (f.selectionEnd = Math.min(m, f.value.length)))
            : ((m = ((g = f.ownerDocument || document) && g.defaultView) || window),
              m.getSelection &&
                ((m = m.getSelection()),
                (s = f.textContent.length),
                (S = Math.min(o.start, s)),
                (o = o.end === void 0 ? S : Math.min(o.end, s)),
                !m.extend && S > o && ((s = o), (o = S), (S = s)),
                (s = ea(f, S)),
                (l = ea(f, o)),
                s &&
                  l &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== s.node ||
                    m.anchorOffset !== s.offset ||
                    m.focusNode !== l.node ||
                    m.focusOffset !== l.offset) &&
                  ((g = g.createRange()),
                  g.setStart(s.node, s.offset),
                  m.removeAllRanges(),
                  S > o ? (m.addRange(g), m.extend(l.node, l.offset)) : (g.setEnd(l.node, l.offset), m.addRange(g)))))),
          g = [],
          m = f;
        (m = m.parentNode);

      )
        m.nodeType === 1 && g.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
      for (typeof f.focus == 'function' && f.focus(), f = 0; f < g.length; f++)
        (m = g[f]), (m.element.scrollLeft = m.left), (m.element.scrollTop = m.top);
    }
    (Hr = !!il), (ll = il = null), (e.current = n), (M = r);
    do
      try {
        for (f = e; M !== null; ) {
          var y = M.flags;
          if ((y & 36 && Nm(f, M.alternate, M), y & 128)) {
            g = void 0;
            var C = M.ref;
            if (C !== null) {
              var O = M.stateNode;
              switch (M.tag) {
                case 5:
                  g = O;
                  break;
                default:
                  g = O;
              }
              typeof C == 'function' ? C(g) : (C.current = g);
            }
          }
          M = M.nextEffect;
        }
      } catch (R) {
        if (M === null) throw Error(T(330));
        pt(M, R), (M = M.nextEffect);
      }
    while (M !== null);
    (M = null), cm(), (z = i);
  } else e.current = n;
  if (vt) (vt = !1), (Wn = e), (In = t);
  else
    for (M = r; M !== null; )
      (t = M.nextEffect),
        (M.nextEffect = null),
        M.flags & 8 && ((y = M), (y.sibling = null), (y.stateNode = null)),
        (M = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (He = null),
    r === 1 ? (e === ro ? Kn++ : ((Kn = 0), (ro = e))) : (Kn = 0),
    (n = n.stateNode),
    Rt && typeof Rt.onCommitFiberRoot == 'function')
  )
    try {
      Rt.onCommitFiberRoot($o, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((Ie(e, he()), wi)) throw ((wi = !1), (e = eo), (eo = null), e);
  return (z & 8) !== 0 || We(), null;
}
function Mm() {
  for (; M !== null; ) {
    var e = M.alternate;
    Yr ||
      Gn === null ||
      ((M.flags & 8) !== 0 ? $s(M, Gn) && (Yr = !0) : M.tag === 13 && _m(e, M) && $s(M, Gn) && (Yr = !0));
    var t = M.flags;
    (t & 256) !== 0 && Sm(e, M),
      (t & 512) === 0 ||
        vt ||
        ((vt = !0),
        or(97, function () {
          return Et(), null;
        })),
      (M = M.nextEffect);
  }
}
function Et() {
  if (In !== 90) {
    var e = 97 < In ? 97 : In;
    return (In = 90), Ot(e, Lm);
  }
  return !1;
}
function Om(e, t) {
  to.push(t, e),
    vt ||
      ((vt = !0),
      or(97, function () {
        return Et(), null;
      }));
}
function Yc(e, t) {
  no.push(t, e),
    vt ||
      ((vt = !0),
      or(97, function () {
        return Et(), null;
      }));
}
function Lm() {
  if (Wn === null) return !1;
  var e = Wn;
  if (((Wn = null), (z & 48) !== 0)) throw Error(T(331));
  var t = z;
  z |= 32;
  var n = no;
  no = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r],
      l = n[r + 1],
      o = i.destroy;
    if (((i.destroy = void 0), typeof o == 'function'))
      try {
        o();
      } catch (a) {
        if (l === null) throw Error(T(330));
        pt(l, a);
      }
  }
  for (n = to, to = [], r = 0; r < n.length; r += 2) {
    (i = n[r]), (l = n[r + 1]);
    try {
      var s = i.create;
      i.destroy = s();
    } catch (a) {
      if (l === null) throw Error(T(330));
      pt(l, a);
    }
  }
  for (s = e.current.firstEffect; s !== null; )
    (e = s.nextEffect), (s.nextEffect = null), s.flags & 8 && ((s.sibling = null), (s.stateNode = null)), (s = e);
  return (z = t), We(), !0;
}
function Ha(e, t, n) {
  (t = Zo(n, t)), (t = Fc(e, t, 1)), ct(e, t), (t = Ce()), (e = Ai(e, 1)), e !== null && (Ci(e, 1, t), Ie(e, t));
}
function pt(e, t) {
  if (e.tag === 3) Ha(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Ha(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (He === null || !He.has(r)))
        ) {
          e = Zo(t, e);
          var i = $c(n, e, 1);
          if ((ct(n, i), (i = Ce()), (n = Ai(n, 1)), n !== null)) Ci(n, 1, i), Ie(n, i);
          else if (typeof r.componentDidCatch == 'function' && (He === null || !He.has(r)))
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function Pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (ge & n) === n &&
      (fe === 4 || (fe === 3 && (ge & 62914560) === ge && 500 > he() - ts) ? ln(e, 0) : (es |= n)),
    Ie(e, t);
}
function Dm(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = un() === 99 ? 1 : 2)
        : (Ge === 0 && (Ge = hn), (t = Ht(62914560 & ~Ge)), t === 0 && (t = 4194304))),
    (n = Ce()),
    (e = Ai(e, t)),
    e !== null && (Ci(e, t, n), Ie(e, n));
}
var Xc;
Xc = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) ze = !0;
    else if ((n & r) !== 0) ze = (e.flags & 16384) !== 0;
    else {
      switch (((ze = !1), t.tag)) {
        case 3:
          Ra(t), ul();
          break;
        case 5:
          wa(t);
          break;
        case 1:
          xe(t.type) && Wr(t);
          break;
        case 4:
          Hl(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var i = t.type._context;
          ne(si, i._currentValue), (i._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? Ma(e, t, n)
              : (ne(te, te.current & 1), (t = Ye(e, t, n)), t !== null ? t.sibling : null);
          ne(te, te.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return Ia(e, t, n);
            t.flags |= 64;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            ne(te, te.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), cl(e, t, n);
      }
      return Ye(e, t, n);
    }
  else ze = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (i = an(t, ve.current)),
        tn(t, n),
        (i = Qo(null, t, r, e, i, n)),
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0)
      ) {
        if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), xe(r))) {
          var l = !0;
          Wr(t);
        } else l = !1;
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null), Vo(t);
        var o = r.getDerivedStateFromProps;
        typeof o == 'function' && ci(t, r, o, e),
          (i.updater = Di),
          (t.stateNode = i),
          (i._reactInternals = t),
          bl(t, r, e, n),
          (t = Kl(null, t, r, !0, l, n));
      } else (t.tag = 0), _e(null, t, i, n), (t = t.child);
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (
          (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (l = i._init),
          (i = l(i._payload)),
          (t.type = i),
          (l = t.tag = Am(i)),
          (e = Ue(i, e)),
          l)
        ) {
          case 0:
            t = Wl(null, t, i, e, n);
            break e;
          case 1:
            t = Ca(null, t, i, e, n);
            break e;
          case 11:
            t = xa(null, t, i, e, n);
            break e;
          case 14:
            t = Ta(null, t, i, Ue(i.type, e), r, n);
            break e;
        }
        throw Error(T(306, i, ''));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ue(r, i)), Wl(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ue(r, i)), Ca(e, t, r, i, n);
    case 3:
      if ((Ra(t), (r = t.updateQueue), e === null || r === null)) throw Error(T(282));
      if (
        ((r = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        Sc(e, t),
        sr(t, r, null, n),
        (r = t.memoizedState.element),
        r === i)
      )
        ul(), (t = Ye(e, t, n));
      else {
        if (
          ((i = t.stateNode),
          (l = i.hydrate) && ((lt = en(t.stateNode.containerInfo.firstChild)), (Qe = t), (l = Ve = !0)),
          l)
        ) {
          if (((e = i.mutableSourceEagerHydrationData), e != null))
            for (i = 0; i < e.length; i += 2) (l = e[i]), (l._workInProgressVersionPrimary = e[i + 1]), nn.push(l);
          for (n = xc(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else _e(e, t, r, n), ul();
        t = t.child;
      }
      return t;
    case 5:
      return (
        wa(t),
        e === null && jl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ul(r, i) ? (o = null) : l !== null && Ul(r, l) && (t.flags |= 16),
        Ac(e, t),
        _e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && jl(t), null;
    case 13:
      return Ma(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fi(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ue(r, i)), xa(e, t, r, i, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (l = i.value);
        var s = t.type._context;
        if ((ne(si, s._currentValue), (s._currentValue = l), o !== null))
          if (
            ((s = o.value),
            (l = Oe(s, l)
              ? 0
              : (typeof r._calculateChangedBits == 'function' ? r._calculateChangedBits(s, l) : 1073741823) | 0),
            l === 0)
          ) {
            if (o.children === i.children && !ke.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r && (u.observedBits & l) !== 0) {
                    s.tag === 1 && ((u = ut(-1, n & -n)), (u.tag = 2), ct(s, u)),
                      (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Ec(s.return, n),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else o = s.tag === 10 && s.type === t.type ? null : s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        _e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (l = t.pendingProps),
        (r = l.children),
        tn(t, n),
        (i = De(i, l.unstable_observedBits)),
        (r = r(i)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (i = t.type), (l = Ue(i, t.pendingProps)), (l = Ue(i.type, l)), Ta(e, t, i, l, r, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ue(r, i)),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        xe(r) ? ((e = !0), Wr(t)) : (e = !1),
        tn(t, n),
        _c(t, r, i),
        bl(t, r, i, n),
        Kl(null, t, r, !0, e, n)
      );
    case 19:
      return Ia(e, t, n);
    case 23:
      return cl(e, t, n);
    case 24:
      return cl(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Im(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, t, n, r) {
  return new Im(e, t, n, r);
}
function rs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Am(e) {
  if (typeof e == 'function') return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ki)) return 11;
    if (e === xi) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xr(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == 'function')) rs(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case tt:
        return on(n.children, i, l, t);
      case Tu:
        (o = 8), (i |= 16);
        break;
      case wo:
        (o = 8), (i |= 1);
        break;
      case Bn:
        return (e = Le(12, n, t, i | 8)), (e.elementType = Bn), (e.type = Bn), (e.lanes = l), e;
      case Un:
        return (e = Le(13, n, t, i)), (e.type = Un), (e.elementType = Un), (e.lanes = l), e;
      case Zr:
        return (e = Le(19, n, t, i)), (e.elementType = Zr), (e.lanes = l), e;
      case xo:
        return is(n, i, l, t);
      case wl:
        return (e = Le(24, n, t, i)), (e.elementType = wl), (e.lanes = l), e;
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Eo:
              o = 10;
              break e;
            case So:
              o = 9;
              break e;
            case ki:
              o = 11;
              break e;
            case xi:
              o = 14;
              break e;
            case No:
              (o = 16), (r = null);
              break e;
            case _o:
              o = 22;
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ''));
    }
  return (t = Le(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function on(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function is(e, t, n, r) {
  return (e = Le(23, e, r, t)), (e.elementType = xo), (e.lanes = n), e;
}
function pl(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function ml(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Bm(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = qi(0)),
    (this.expirationTimes = qi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qi(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _t, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Ei(e, t, n, r) {
  var i = t.current,
    l = Ce(),
    o = ft(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (It(n) !== n || n.tag !== 1) throw Error(T(170));
      var s = n;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break t;
          case 1:
            if (xe(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(T(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (xe(a)) {
        n = pc(n, a, s);
        break e;
      }
    }
    n = s;
  } else n = gt;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    ct(i, t),
    dt(i, o, l),
    o
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ja(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ls(e, t) {
  ja(e, t), (e = e.alternate) && ja(e, t);
}
function zm() {
  return null;
}
function os(e, t, n) {
  var r = (n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources) || null;
  if (
    ((n = new Bm(e, t, n != null && n.hydrate === !0)),
    (t = Le(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    Vo(t),
    (e[mn] = n.current),
    ac(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var i = t._getVersion;
      (i = i(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, i])
          : n.mutableSourceEagerHydrationData.push(t, i);
    }
  this._internalRoot = n;
}
os.prototype.render = function (e) {
  Ei(e, this._internalRoot, null, null);
};
os.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Ei(null, e, null, function () {
    t[mn] = null;
  });
};
function wr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Fm(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new os(e, 0, t ? { hydrate: !0 } : void 0);
}
function Bi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l._internalRoot;
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var u = hl(o);
        s.call(u);
      };
    }
    Ei(t, o, e, i);
  } else {
    if (((l = n._reactRootContainer = Fm(n, r)), (o = l._internalRoot), typeof i == 'function')) {
      var a = i;
      i = function () {
        var u = hl(o);
        a.call(u);
      };
    }
    Vc(function () {
      Ei(t, o, e, i);
    });
  }
  return hl(o);
}
bu = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    dt(e, 4, t), ls(e, 4);
  }
};
Oo = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    dt(e, 67108864, t), ls(e, 67108864);
  }
};
Hu = function (e) {
  if (e.tag === 13) {
    var t = Ce(),
      n = ft(e);
    dt(e, n, t), ls(e, n);
  }
};
ju = function (e, t) {
  return t();
};
Ml = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Sl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Li(r);
            if (!i) throw Error(T(90));
            Ru(r), Sl(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Ou(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Co = jc;
Uu = function (e, t, n, r, i) {
  var l = z;
  z |= 4;
  try {
    return Ot(98, e.bind(null, t, n, r, i));
  } finally {
    (z = l), z === 0 && (vn(), We());
  }
};
Ro = function () {
  (z & 49) === 0 && (xm(), Et());
};
zu = function (e, t) {
  var n = z;
  z |= 2;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && (vn(), We());
  }
};
function qc(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wr(t)) throw Error(T(200));
  return Um(e, t, null, n);
}
var $m = { Events: [gr, Kt, Li, Au, Bu, Et, { current: !1 }] },
  Mn = { findFiberByHostInstance: xt, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
  bm = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $u(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || zm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      ($o = zr.inject(bm)), (Rt = zr);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
Ae.createPortal = qc;
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == 'function' ? Error(T(188)) : Error(T(268, Object.keys(e)));
  return (e = $u(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e, t) {
  var n = z;
  if ((n & 48) !== 0) return e(t);
  z |= 1;
  try {
    if (e) return Ot(99, e.bind(null, t));
  } finally {
    (z = n), We();
  }
};
Ae.hydrate = function (e, t, n) {
  if (!wr(t)) throw Error(T(200));
  return Bi(null, e, t, !0, n);
};
Ae.render = function (e, t, n) {
  if (!wr(t)) throw Error(T(200));
  return Bi(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!wr(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Vc(function () {
        Bi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mn] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = jc;
Ae.unstable_createPortal = function (e, t) {
  return qc(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wr(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Bi(e, t, n, !1, r);
};
Ae.version = '17.0.2';
function Zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc);
    } catch (e) {
      console.error(e);
    }
}
Zc(), (Nu.exports = Ae);
function Hm() {
  document.playwrightThemeInitialized ||
    ((document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      'focus',
      (e) => {
        e.target.document.nodeType === Node.DOCUMENT_NODE && document.body.classList.remove('inactive');
      },
      !1,
    ),
    document.defaultView.addEventListener(
      'blur',
      (e) => {
        document.body.classList.add('inactive');
      },
      !1,
    ));
}
(async () => (
  Hm(),
  window.location.protocol !== 'file:' &&
    (navigator.serviceWorker.register('sw.bundle.js'),
    navigator.serviceWorker.controller ||
      (await new Promise((e) => {
        navigator.serviceWorker.oncontrollerchange = () => e();
      })),
    setInterval(function () {
      fetch('ping');
    }, 1e4)),
  Nu.exports.render(v(Gd, {}), document.querySelector('#root'))
))();
