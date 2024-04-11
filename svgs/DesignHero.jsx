/* eslint-disable */
import React, { useEffect, useState } from 'react';

const DesignHero = () => {
  const [flag, setFlag] = useState(0);


  useEffect(() => {
    !(function (t, n) {
      typeof exports == 'object' && typeof module != 'undefined'
        ? (module.exports = n())
        : typeof __SVGATOR_DEFINE__ == 'function' && __SVGATOR_DEFINE__.amd
        ? __SVGATOR_DEFINE__(n)
        : (((t = typeof globalThis != 'undefined' ? globalThis : t || self).__SVGATOR_PLAYER__ =
            t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__['5c7f360c'] = n()));
    })(this, function () {
      function t(t, n) {
        const e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function n(n) {
        for (let e = 1; e < arguments.length; e++) {
          var r = arguments[e] != null ? arguments[e] : {};
          e % 2
            ? t(Object(r), !0).forEach(function (t) {
                o(n, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return n;
      }
      function e(t) {
        return (e =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function r(t, n) {
        if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
      }
      function i(t, n) {
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, n, e) {
        return n && i(t.prototype, n), e && i(t, e), t;
      }
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function s() {
        if (typeof Reflect == 'undefined' || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function f(t, n, e) {
        return (f = s()
          ? Reflect.construct
          : function (t, n, e) {
              const r = [null];
              r.push.apply(r, n);
              const i = new (Function.bind.apply(t, r))();
              return e && l(i, e.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, n) {
        if (n && (typeof n == 'object' || typeof n == 'function')) return n;
        if (void 0 !== n)
          throw new TypeError('Derived constructors may only return object or undefined');
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        })(t);
      }
      function h(t, n, e) {
        return (h =
          typeof Reflect != 'undefined' && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                const r = (function (t, n) {
                  for (; !Object.prototype.hasOwnProperty.call(t, n) && (t = a(t)) !== null; );
                  return t;
                })(t, n);
                if (r) {
                  const i = Object.getOwnPropertyDescriptor(r, n);
                  return i.get ? i.get.call(e) : i.value;
                }
              })(t, n, e || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t);
          })(t) ||
          (function (t) {
            if (
              (typeof Symbol != 'undefined' && t[Symbol.iterator] != null) ||
              t['@@iterator'] != null
            )
              return Array.from(t);
          })(t) ||
          (function (t, n) {
            if (!t) return;
            if (typeof t == 'string') return y(t, n);
            let e = Object.prototype.toString.call(t).slice(8, -1);
            e === 'Object' && t.constructor && (e = t.constructor.name);
            if (e === 'Map' || e === 'Set') return Array.from(t);
            if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
              return y(t, n);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function y(t, n) {
        (n == null || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return typeof t == 'number' && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      const g = p(10 ** -6);
      function p(t) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        const e = 10 ** n;
        return Math.round((+t + Number.EPSILON) * e) / e;
      }
      function d(t, n) {
        const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t - n) < e;
      }
      const m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function w(t, n, e) {
        const r = 1 - e;
        return 3 * e * r * (t * r + n * e) + e * e * e;
      }
      const A = () => {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || e < 0 || e > 1
          ? null
          : d(t, n) && d(e, r)
          ? b
          : function (i) {
              if (i <= 0) return t > 0 ? (i * n) / t : n === 0 && e > 0 ? (i * r) / e : 0;
              if (i >= 1)
                return e < 1
                  ? 1 + ((i - 1) * (r - 1)) / (e - 1)
                  : e === 1 && t < 1
                  ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                  : 1;
              for (var u, o = 0, a = 1; o < a; ) {
                const l = w(t, e, (u = (o + a) / 2));
                if (d(i, l)) break;
                l < i ? (o = u) : (a = u);
              }
              return w(n, r, u);
            };
      };
      function _() {
        return 1;
      }
      function x(t) {
        return t === 1 ? 1 : 0;
      }
      function k() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (t === 1) {
          if (n === 0) return x;
          if (n === 1) return _;
        }
        const e = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += n * e) - (t % e);
        };
      }
      const S = Math.sin;
      const O = Math.cos;
      const j = Math.acos;
      const E = Math.asin;
      const M = Math.tan;
      const P = Math.atan2;
      const I = Math.PI / 180;
      const R = 180 / Math.PI;
      const F = Math.sqrt;
      const N = (function () {
        function t() {
          const n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          const o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          r(this, t),
            (this.m = [n, e, i, u, o, a]),
            (this.i = null),
            (this.w = null),
            (this.s = null);
        }
        return (
          u(
            t,
            [
              {
                key: 'determinant',
                get() {
                  const t = this.m;
                  return t[0] * t[3] - t[1] * t[2];
                },
              },
              {
                key: 'isIdentity',
                get() {
                  if (this.i === null) {
                    const t = this.m;
                    this.i =
                      t[0] === 1 &&
                      t[1] === 0 &&
                      t[2] === 0 &&
                      t[3] === 1 &&
                      t[4] === 0 &&
                      t[5] === 0;
                  }
                  return this.i;
                },
              },
              {
                key: 'point',
                value(t, n) {
                  const e = this.m;
                  return { x: e[0] * t + e[2] * n + e[4], y: e[1] * t + e[3] * n + e[5] };
                },
              },
              {
                key: 'translateSelf',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  if (!t && !n) return this;
                  const e = this.m;
                  return (
                    (e[4] += e[0] * t + e[2] * n),
                    (e[5] += e[1] * t + e[3] * n),
                    (this.w = this.s = this.i = null),
                    this
                  );
                },
              },
              {
                key: 'rotateSelf',
                value() {
                  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  if ((t %= 360)) {
                    const n = S((t *= I));
                    const e = O(t);
                    const r = this.m;
                    const i = r[0];
                    const u = r[1];
                    (r[0] = i * e + r[2] * n),
                      (r[1] = u * e + r[3] * n),
                      (r[2] = r[2] * e - i * n),
                      (r[3] = r[3] * e - u * n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: 'scaleSelf',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                  const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                  if (t !== 1 || n !== 1) {
                    const e = this.m;
                    (e[0] *= t),
                      (e[1] *= t),
                      (e[2] *= n),
                      (e[3] *= n),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: 'skewSelf',
                value(t, n) {
                  if (((n %= 360), (t %= 360) || n)) {
                    const e = this.m;
                    const r = e[0];
                    const i = e[1];
                    const u = e[2];
                    const o = e[3];
                    t && ((t = M(t * I)), (e[2] += r * t), (e[3] += i * t)),
                      n && ((n = M(n * I)), (e[0] += u * n), (e[1] += o * n)),
                      (this.w = this.s = this.i = null);
                  }
                  return this;
                },
              },
              {
                key: 'resetSelf',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                  const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                  const i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                  const u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                  const o = this.m;
                  return (
                    (o[0] = t),
                    (o[1] = n),
                    (o[2] = e),
                    (o[3] = r),
                    (o[4] = i),
                    (o[5] = u),
                    (this.w = this.s = this.i = null),
                    this
                  );
                },
              },
              {
                key: 'recomposeSelf',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                  const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                  const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                  const i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                  return (
                    this.isIdentity || this.resetSelf(),
                    t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                    n && this.rotateSelf(n),
                    e && (e.x && this.skewSelf(e.x, 0), e.y && this.skewSelf(0, e.y)),
                    !r || (r.x === 1 && r.y === 1) || this.scaleSelf(r.x, r.y),
                    i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                    this
                  );
                },
              },
              {
                key: 'decompose',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  const e = this.m;
                  const r = e[0] * e[0] + e[1] * e[1];
                  const i = [
                    [e[0], e[1]],
                    [e[2], e[3]],
                  ];
                  let u = F(r);
                  if (u === 0)
                    return {
                      origin: { x: p(e[4]), y: p(e[5]) },
                      translate: { x: p(t), y: p(n) },
                      scale: { x: 0, y: 0 },
                      skew: { x: 0, y: 0 },
                      rotate: 0,
                    };
                  (i[0][0] /= u), (i[0][1] /= u);
                  const o = e[0] * e[3] - e[1] * e[2] < 0;
                  o && (u = -u);
                  let a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                  (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                  const l = F(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                  if (l === 0)
                    return {
                      origin: { x: p(e[4]), y: p(e[5]) },
                      translate: { x: p(t), y: p(n) },
                      scale: { x: p(u), y: 0 },
                      skew: { x: 0, y: 0 },
                      rotate: 0,
                    };
                  (i[1][0] /= l), (i[1][1] /= l), (a /= l);
                  let s = 0;
                  return (
                    i[1][1] < 0
                      ? ((s = j(i[1][1]) * R), i[0][1] < 0 && (s = 360 - s))
                      : (s = E(i[0][1]) * R),
                    o && (s = -s),
                    (a = P(a, F(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * R),
                    o && (a = -a),
                    {
                      origin: { x: p(e[4]), y: p(e[5]) },
                      translate: { x: p(t), y: p(n) },
                      scale: { x: p(u), y: p(l) },
                      skew: { x: p(a), y: 0 },
                      rotate: p(s),
                    }
                  );
                },
              },
              {
                key: 'clone',
                value() {
                  const t = this.m;
                  return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
                },
              },
              {
                key: 'toString',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ' ';
                  if (this.s === null) {
                    const n = this.m.map(function (t) {
                      return p(t);
                    });
                    n[0] === 1 && n[1] === 0 && n[2] === 0 && n[3] === 1
                      ? (this.s = `translate(${n[4]}${t}${n[5]})`)
                      : (this.s = `matrix(${n.join(t)})`);
                  }
                  return this.s;
                },
              },
            ],
            [
              {
                key: 'create',
                value(t) {
                  return t
                    ? Array.isArray(t)
                      ? f(this, v(t))
                      : t instanceof this
                      ? t.clone()
                      : new this().recomposeSelf(t.origin, t.rotate, t.skew, t.scale, t.translate)
                    : new this();
                },
              },
            ]
          ),
          t
        );
      })();
      function T(t, n, e) {
        return t >= 0.5 ? e : n;
      }
      function q(t, n, e) {
        return t === 0 || n === e ? n : t * (e - n) + n;
      }
      function B(t, n, e) {
        const r = q(t, n, e);
        return r <= 0 ? 0 : r;
      }
      function D(t, n, e) {
        const r = q(t, n, e);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function L(t, n, e) {
        return t === 0 ? n : t === 1 ? e : { x: q(t, n.x, e.x), y: q(t, n.y, e.y) };
      }
      function C(t, n, e) {
        const r = (function (t, n, e) {
          return Math.round(q(t, n, e));
        })(t, n, e);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function V(t, n, e) {
        return t === 0
          ? n
          : t === 1
          ? e
          : {
              r: C(t, n.r, e.r),
              g: C(t, n.g, e.g),
              b: C(t, n.b, e.b),
              a: q(t, n.a == null ? 1 : n.a, e.a == null ? 1 : e.a),
            };
      }
      function G(t, n) {
        for (var e = [], r = 0; r < t; r++) e.push(n);
        return e;
      }
      function z(t, n) {
        if (--n <= 0) return t;
        const e = (t = Object.assign([], t)).length;
        do {
          for (let r = 0; r < e; r++) t.push(t[r]);
        } while (--n > 0);
        return t;
      }
      let Y;
      const $ = (function () {
        function t(n) {
          r(this, t), (this.list = n), (this.length = n.length);
        }
        return (
          u(t, [
            {
              key: 'setAttribute',
              value(t, n) {
                for (let e = this.list, r = 0; r < this.length; r++) e[r].setAttribute(t, n);
              },
            },
            {
              key: 'removeAttribute',
              value(t) {
                for (let n = this.list, e = 0; e < this.length; e++) n[e].removeAttribute(t);
              },
            },
            {
              key: 'style',
              value(t, n) {
                for (let e = this.list, r = 0; r < this.length; r++) e[r].style[t] = n;
              },
            },
          ]),
          t
        );
      })();
      const U = /-./g;
      const Q = function (t, n) {
        return n.toUpperCase();
      };
      function H(t) {
        return typeof t == 'function' ? t : T;
      }
      const J = (t) => {
        return t
          ? typeof t == 'function'
            ? t
            : Array.isArray(t)
            ? (function (t) {
                const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                if (!Array.isArray(t)) return n;
                switch (t.length) {
                  case 1:
                    return k(t[0]) || n;
                  case 2:
                    return k(t[0], t[1]) || n;
                  case 4:
                    return A(t[0], t[1], t[2], t[3]) || n;
                }
                return n;
              })(t, null)
            : (function (t, n) {
                const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                switch (t) {
                  case 'linear':
                    return b;
                  case 'steps':
                    return k(n.steps || 1, n.jump || 0) || e;
                  case 'bezier':
                  case 'cubic-bezier':
                    return A(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e;
                }
                return e;
              })(t.type, t.value, null)
          : null;
      };
      function Z(t, n, e) {
        const r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const i = n.length - 1;
        if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v;
        if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v;
        let u;
        let o = n[0];
        let a = null;
        for (u = 1; u <= i; u++) {
          if (!(t > n[u].t)) {
            a = n[u];
            break;
          }
          o = n[u];
        }
        return a == null
          ? r
            ? [i, 1, n[i].v]
            : n[i].v
          : o.t === a.t
          ? r
            ? [u, 1, a.v]
            : a.v
          : ((t = (t - o.t) / (a.t - o.t)),
            o.e && (t = o.e(t)),
            r ? [u, t, e(t, o.v, a.v)] : e(t, o.v, a.v));
      }
      const K = (t, n) => {
        let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? typeof n != 'function'
            ? null
            : (typeof e != 'function' && (e = null),
              function (r) {
                let i = Z(r, t, n);
                return i != null && e && (i = e(i)), i;
              })
          : null;
      };
      function W(t, n) {
        return t.t - n.t;
      }
      const X = (t, n, r, i, u) => {
        let o;
        const a = r[0] === '@';
        const l = r[0] === '#';
        const s = Y[r];
        let f = T;
        switch ((a ? ((o = r.substr(1)), (r = o.replace(U, Q))) : l && (r = r.substr(1)), e(s))) {
          case 'function':
            if (((f = s(i, u, Z, J, r, a, n, t)), l)) return f;
            break;
          case 'string':
            f = K(i, H(s));
            break;
          case 'object':
            if ((f = K(i, H(s.i), s.f)) && typeof s.u == 'function') return s.u(n, f, r, a, t);
        }
        return f
          ? (function (t, n, e) {
              if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
                return t instanceof $
                  ? function (r) {
                      return t.style(n, e(r));
                    }
                  : function (r) {
                      return (t.style[n] = e(r));
                    };
              if (Array.isArray(n)) {
                const r = n.length;
                return function (i) {
                  const u = e(i);
                  if (u == null) for (let o = 0; o < r; o++) t[o].removeAttribute(n);
                  else for (let a = 0; a < r; a++) t[a].setAttribute(n, u);
                };
              }
              return function (r) {
                const i = e(r);
                i == null ? t.removeAttribute(n) : t.setAttribute(n, i);
              };
            })(n, r, f, a)
          : null;
      };
      function tt(t, n, r, i) {
        if (!i || e(i) !== 'object') return null;
        let u = null;
        let o = null;
        return (
          Array.isArray(i)
            ? (o = (function (t) {
                if (!t || !t.length) return null;
                for (let n = 0; n < t.length; n++) t[n].e && (t[n].e = J(t[n].e));
                return t.sort(W);
              })(i))
            : ((o = i.keys), (u = i.data || null)),
          o ? X(t, n, r, o, u) : null
        );
      }
      function nt(t, n, e) {
        if (!e) return null;
        const r = [];
        for (const i in e)
          if (e.hasOwnProperty(i)) {
            const u = tt(t, n, i, e[i]);
            u && r.push(u);
          }
        return r.length ? r : null;
      }
      function et(t, n) {
        if (!n.settings.duration || n.settings.duration < 0) return null;
        let e;
        let r;
        let i;
        let u;
        let o;
        const a = (function (t, n) {
          if (!n) return null;
          let e = [];
          if (Array.isArray(n))
            for (let r = n.length, i = 0; i < r; i++) {
              const u = n[i];
              if (u.length === 2) {
                let o = null;
                if (typeof u[0] == 'string') o = t.getElementById(u[0]);
                else if (Array.isArray(u[0])) {
                  o = [];
                  for (let a = 0; a < u[0].length; a++)
                    if (typeof u[0][a] == 'string') {
                      const l = t.getElementById(u[0][a]);
                      l && o.push(l);
                    }
                  o = o.length ? (o.length === 1 ? o[0] : new $(o)) : null;
                }
                if (o) {
                  const s = nt(t, o, u[1]);
                  s && (e = e.concat(s));
                }
              }
            }
          else
            for (const f in n)
              if (n.hasOwnProperty(f)) {
                const c = t.getElementById(f);
                if (c) {
                  const h = nt(t, c, n[f]);
                  h && (e = e.concat(h));
                }
              }
          return e.length ? e : null;
        })(t, n.elements);
        return a
          ? ((e = a),
            (r = n.settings),
            (i = r.duration),
            (u = e.length),
            (o = null),
            function (t, n) {
              const a = r.iterations || 1 / 0;
              const l = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0;
              let s = t % i;
              const f = 1 + (t - s) / i;
              (n *= r.direction), r.alternate && f % 2 == 0 && (n = -n);
              let c = !1;
              if (f > a) (s = l), (c = !0), r.fill === -1 && (s = r.direction > 0 ? 0 : i);
              else if ((n < 0 && (s = i - s), s === o)) return !1;
              o = s;
              for (let h = 0; h < u; h++) e[h](s);
              return c;
            })
          : null;
      }
      function rt(t, n) {
        if (((Y = n), !t || !t.root || !Array.isArray(t.animations))) return null;
        const e = (function (t) {
          for (let n = document.getElementsByTagName('svg'), e = 0; e < n.length; e++)
            if (n[e].id === t.root && !n[e].svgatorAnimation)
              return (n[e].svgatorAnimation = !0), n[e];
          return null;
        })(t);
        if (!e) return null;
        const r = t.animations
          .map(function (t) {
            return et(e, t);
          })
          .filter(function (t) {
            return !!t;
          });
        return r.length
          ? {
              svg: e,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0,
            }
          : null;
      }
      function it(t) {
        return +`0x${t.replace(/[^0-9a-fA-F]+/g, '') || 27}`;
      }
      function ut(t, n, e) {
        return !t || !e || n > t.length ? t : t.substring(0, n) + ut(t.substring(n + 1), e, e);
      }
      function ot(t) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % n ? t % n : ot(t / n, n);
      }
      function at(t, n, e) {
        if (t && t.length) {
          const r = it(e);
          const i = it(n);
          const u = ot(r) + 5;
          let o = ut(t, ot(r, 5), u);
          return (
            (o = o.replace(/\x7c$/g, '==').replace(/\x2f$/g, '=')),
            (o = (function (t, n, e) {
              const r = +`0x${t.substring(0, 4)}`;
              t = t.substring(4);
              for (var i = (n % r) + (e % 27), u = [], o = 0; o < t.length; o += 2)
                if (t[o] !== '|') {
                  const a = +`0x${t[o]}${t[o + 1]}` - i;
                  u.push(a);
                } else {
                  const l = +`0x${t.substring(o + 1, o + 1 + 4)}` - i;
                  (o += 3), u.push(l);
                }
              return String.fromCharCode.apply(String, u);
            })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, '')), i, r)),
            (o = JSON.parse(o))
          );
        }
      }
      const lt = [
        { key: 'alternate', def: !1 },
        { key: 'fill', def: 1 },
        { key: 'iterations', def: 0 },
        { key: 'direction', def: 1 },
        { key: 'speed', def: 1 },
        { key: 'fps', def: 100 },
      ];
      const st = (function () {
        function t(n, e) {
          const i = this;
          const u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          r(this, t),
            (this._id = 0),
            (this._running = !1),
            (this._rollingBack = !1),
            (this._animations = n),
            (this._settings = e),
            (!u || u < '2022-05-02') && delete this._settings.speed,
            lt.forEach(function (t) {
              i._settings[t.key] = i._settings[t.key] || t.def;
            }),
            (this.duration = e.duration),
            (this.offset = e.offset || 0),
            (this.rollbackStartOffset = 0);
        }
        return (
          u(
            t,
            [
              {
                key: 'alternate',
                get() {
                  return this._settings.alternate;
                },
              },
              {
                key: 'fill',
                get() {
                  return this._settings.fill;
                },
              },
              {
                key: 'iterations',
                get() {
                  return this._settings.iterations;
                },
              },
              {
                key: 'direction',
                get() {
                  return this._settings.direction;
                },
              },
              {
                key: 'speed',
                get() {
                  return this._settings.speed;
                },
              },
              {
                key: 'fps',
                get() {
                  return this._settings.fps;
                },
              },
              {
                key: 'maxFiniteDuration',
                get() {
                  return this.iterations > 0 ? this.iterations * this.duration : this.duration;
                },
              },
              {
                key: '_apply',
                value(t) {
                  for (
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      e = this._animations,
                      r = e.length,
                      i = 0,
                      u = 0;
                    u < r;
                    u++
                  )
                    n[u] ? i++ : ((n[u] = e[u](t, 1)), n[u] && i++);
                  return i;
                },
              },
              {
                key: '_rollback',
                value(t) {
                  const n = this;
                  let e = 1 / 0;
                  let r = null;
                  (this.rollbackStartOffset = t), (this._rollingBack = !0), (this._running = !0);
                  this._id = window.requestAnimationFrame(function i(u) {
                    if (n._rollingBack) {
                      r == null && (r = u);
                      let o = Math.round(t - (u - r) * n.speed);
                      if (o > n.duration && e !== 1 / 0) {
                        const a = !!n.alternate && (o / n.duration) % 2 > 1;
                        let l = o % n.duration;
                        o = (l += a ? n.duration : 0) || n.duration;
                      }
                      const s = (n.fps ? 1e3 / n.fps : 0) * n.speed;
                      const f = Math.max(0, o);
                      f <= e - s && ((n.offset = f), (e = f), n._apply(f));
                      const c = n.iterations > 0 && n.fill === -1 && o >= n.maxFiniteDuration;
                      (o <= 0 || n.offset < o || c) && n.stop(),
                        (n._id = window.requestAnimationFrame(i));
                    }
                  });
                },
              },
              {
                key: '_start',
                value() {
                  const t = this;
                  const n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  let e = -1 / 0;
                  let r = null;
                  const i = {};
                  this._running = !0;
                  const u = function u(o) {
                    r == null && (r = o);
                    const a = Math.round((o - r) * t.speed + n);
                    const l = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                    if (
                      a >= e + l &&
                      !t._rollingBack &&
                      ((t.offset = a), (e = a), t._apply(a, i) === t._animations.length)
                    )
                      return void t.pause(!0);
                    t._id = window.requestAnimationFrame(u);
                  };
                  this._id = window.requestAnimationFrame(u);
                },
              },
              {
                key: '_pause',
                value() {
                  this._id && window.cancelAnimationFrame(this._id), (this._running = !1);
                },
              },
              {
                key: 'play',
                value() {
                  if (!this._running)
                    return this._rollingBack
                      ? this._rollback(this.offset)
                      : this._start(this.offset);
                },
              },
              {
                key: 'stop',
                value() {
                  this._pause(),
                    (this.offset = 0),
                    (this.rollbackStartOffset = 0),
                    (this._rollingBack = !1),
                    this._apply(0);
                },
              },
              {
                key: 'reachedToEnd',
                value() {
                  return this.iterations > 0 && this.offset >= this.iterations * this.duration;
                },
              },
              {
                key: 'restart',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  this.stop(t), this.play(t);
                },
              },
              {
                key: 'pause',
                value() {
                  this._pause();
                },
              },
              {
                key: 'reverse',
                value() {
                  this.direction = -this.direction;
                },
              },
            ],
            [
              {
                key: 'build',
                value(t, n) {
                  delete t.animationSettings,
                    (t.options = at(t.options, t.root, '5c7f360c')),
                    t.animations.map(function (n) {
                      (n.settings = at(n.s, t.root, '5c7f360c')),
                        delete n.s,
                        t.animationSettings || (t.animationSettings = n.settings);
                    });
                  const e = t.version;
                  if (!(t = rt(t, n))) return null;
                  const r = t.options || {};
                  const i = new this(t.animations, t.animationSettings, e);
                  return { el: t.svg, options: r, player: i };
                },
              },
              {
                key: 'push',
                value(t) {
                  return this.build(t);
                },
              },
              {
                key: 'init',
                value() {
                  const t = this;
                  const n = window.__SVGATOR_PLAYER__ && window.__SVGATOR_PLAYER__['5c7f360c'];
                  Array.isArray(n) &&
                    n.splice(0).forEach(function (n) {
                      return t.build(n);
                    });
                },
              },
            ]
          ),
          t
        );
      })();
      function ft(t) {
        return `${p(t)}`;
      }
      function ct(t) {
        const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' ';
        return t && t.length ? t.map(ft).join(n) : '';
      }
      function ht(t) {
        if (!t) return 'transparent';
        if (t.a == null || t.a >= 1) {
          const n = function (t) {
            return (t = parseInt(t).toString(16)).length === 1 ? `0${t}` : t;
          };
          const e = function (t) {
            return t.charAt(0) === t.charAt(1);
          };
          let r = n(t.r);
          let i = n(t.g);
          let u = n(t.b);
          return (
            e(r) && e(i) && e(u) && ((r = r.charAt(0)), (i = i.charAt(0)), (u = u.charAt(0))),
            `#${r}${i}${u}`
          );
        }
        return `rgba(${t.r},${t.g},${t.b},${t.a})`;
      }
      function vt(t) {
        return t ? `url(#${t})` : 'none';
      }
      !(function () {
        for (
          var t = 0, n = ['ms', 'moz', 'webkit', 'o'], e = 0;
          e < n.length && !window.requestAnimationFrame;
          ++e
        )
          (window.requestAnimationFrame = window[`${n[e]}RequestAnimationFrame`]),
            (window.cancelAnimationFrame =
              window[`${n[e]}CancelAnimationFrame`] ||
              window[`${n[e]}CancelRequestAnimationFrame`]);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (n) {
            const e = Date.now();
            const r = Math.max(0, 16 - (e - t));
            const i = window.setTimeout(function () {
              n(e + r);
            }, r);
            return (t = e + r), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      const yt = {
        f: null,
        i(t, n, e) {
          return t === 0 ? n : t === 1 ? e : { x: B(t, n.x, e.x), y: B(t, n.y, e.y) };
        },
        u(t, n) {
          return function (e) {
            const r = n(e);
            t.setAttribute('rx', ft(r.x)), t.setAttribute('ry', ft(r.y));
          };
        },
      };
      const gt = {
        f: null,
        i(t, n, e) {
          return t === 0
            ? n
            : t === 1
            ? e
            : { width: B(t, n.width, e.width), height: B(t, n.height, e.height) };
        },
        u(t, n) {
          return function (e) {
            const r = n(e);
            t.setAttribute('width', ft(r.width)), t.setAttribute('height', ft(r.height));
          };
        },
      };
      Object.freeze({ M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6, Q: 4, T: 2, S: 4, A: 7 });
      const pt = {};
      let dt = null;
      function mt(t) {
        const n = (function () {
          if (dt) return dt;
          if (
            (typeof document == 'undefined' ? 'undefined' : e(document)) !== 'object' ||
            !document.createElementNS
          )
            return {};
          const t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          return t && t.style
            ? ((t.style.position = 'absolute'),
              (t.style.opacity = '0.01'),
              (t.style.zIndex = '-9999'),
              (t.style.left = '-9999px'),
              (t.style.width = '1px'),
              (t.style.height = '1px'),
              (dt = { svg: t }))
            : {};
        })().svg;
        if (!n)
          return function (t) {
            return null;
          };
        const r = document.createElementNS(n.namespaceURI, 'path');
        r.setAttributeNS(null, 'd', t),
          r.setAttributeNS(null, 'fill', 'none'),
          r.setAttributeNS(null, 'stroke', 'none'),
          n.appendChild(r);
        const i = r.getTotalLength();
        return function (t) {
          const n = r.getPointAtLength(i * t);
          return { x: n.x, y: n.y };
        };
      }
      function bt(t) {
        return pt[t] ? pt[t] : (pt[t] = mt(t));
      }
      function wt(t, n, e, r) {
        if (!t || !r) return !1;
        const i = ['M', t.x, t.y];
        if (
          (n && e && (i.push('C'), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)), n ? !e : e)
        ) {
          const u = n || e;
          i.push('Q'), i.push(u.x), i.push(u.y);
        }
        return n || e || i.push('L'), i.push(r.x), i.push(r.y), i.join(' ');
      }
      function At(t, n, e, r) {
        const i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        const u = wt(t, n, e, r);
        const o = bt(u);
        try {
          return o(i);
        } catch (t) {
          return null;
        }
      }
      function _t(t, n, e) {
        return t + (n - t) * e;
      }
      function xt(t, n, e) {
        const r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const i = { x: _t(t.x, n.x, e), y: _t(t.y, n.y, e) };
        return r && (i.a = kt(t, n)), i;
      }
      function kt(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x);
      }
      function St(t, n, e, r) {
        const i = 1 - r;
        return i * i * t + 2 * i * r * n + r * r * e;
      }
      function Ot(t, n, e, r) {
        return 2 * (1 - r) * (n - t) + 2 * r * (e - n);
      }
      function jt(t, n, e, r) {
        const i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        let u = At(t, n, null, e, r);
        return (
          u || (u = { x: St(t.x, n.x, e.x, r), y: St(t.y, n.y, e.y, r) }),
          i && (u.a = Et(t, n, e, r)),
          u
        );
      }
      function Et(t, n, e, r) {
        return Math.atan2(Ot(t.y, n.y, e.y, r), Ot(t.x, n.x, e.x, r));
      }
      function Mt(t, n, e, r, i) {
        const u = i * i;
        return i * u * (r - t + 3 * (n - e)) + 3 * u * (t + e - 2 * n) + 3 * i * (n - t) + t;
      }
      function Pt(t, n, e, r, i) {
        const u = 1 - i;
        return 3 * (u * u * (n - t) + 2 * u * i * (e - n) + i * i * (r - e));
      }
      function It(t, n, e, r, i) {
        const u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        let o = At(t, n, e, r, i);
        return (
          o || (o = { x: Mt(t.x, n.x, e.x, r.x, i), y: Mt(t.y, n.y, e.y, r.y, i) }),
          u && (o.a = Rt(t, n, e, r, i)),
          o
        );
      }
      function Rt(t, n, e, r, i) {
        return Math.atan2(Pt(t.y, n.y, e.y, r.y, i), Pt(t.x, n.x, e.x, r.x, i));
      }
      function Ft(t, n, e) {
        const r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Tt(n)) {
          if (qt(e)) return jt(n, e.start, e, t, r);
        } else if (Tt(e)) {
          if (Bt(n)) return jt(n, n.end, e, t, r);
        } else {
          if (Bt(n)) return qt(e) ? It(n, n.end, e.start, e, t, r) : jt(n, n.end, e, t, r);
          if (qt(e)) return jt(n, e.start, e, t, r);
        }
        return xt(n, e, t, r);
      }
      function Nt(t, n, e) {
        const r = Ft(t, n, e, !0);
        return (
          (r.a =
            (function (t) {
              return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ? t + Math.PI
                : t;
            })(r.a) / m),
          r
        );
      }
      function Tt(t) {
        return !t.type || t.type === 'corner';
      }
      function qt(t) {
        return t.start != null && !Tt(t);
      }
      function Bt(t) {
        return t.end != null && !Tt(t);
      }
      const Dt = new N();
      const Lt = { f: ft, i: q };
      const Ct = { f: ft, i: D };
      function Vt(t, n, e) {
        return t.map(function (t) {
          return (function (t, n, e) {
            const r = t.v;
            if (!r || r.t !== 'g' || r.s || !r.v || !r.r) return t;
            const i = e.getElementById(r.r);
            const u = (i && i.querySelectorAll('stop')) || [];
            return (
              (r.s = r.v.map(function (t, n) {
                let e = u[n] && u[n].getAttribute('offset');
                return { c: t, o: (e = p(parseInt(e) / 100)) };
              })),
              delete r.v,
              t
            );
          })(t, 0, e);
        });
      }
      const Gt = {
        gt: 'gradientTransform',
        c: { x: 'cx', y: 'cy' },
        rd: 'r',
        f: { x: 'x1', y: 'y1' },
        to: { x: 'x2', y: 'y2' },
      };
      function zt(t, n, r, i, u, o, a, l) {
        return (
          Vt(t, 0, l),
          (n = (function (t, n, e) {
            for (var r, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
              (r = t[l]).e && (r.e = n(r.e)),
                r.v &&
                  (i = r.v).t === 'g' &&
                  i.r &&
                  (u = e.getElementById(i.r)) &&
                  (a[i.r] = { e: u, s: u.querySelectorAll('stop') });
            return a;
          })(t, i, l)),
          function (i) {
            const u = r(i, t, Yt);
            if (!u) return 'none';
            if (u.t === 'c') return ht(u.v);
            if (u.t === 'g') {
              if (!n[u.r]) return vt(u.r);
              const o = n[u.r];
              return (
                (function (t, n) {
                  for (var e = t.s, r = e.length; r < n.length; r++) {
                    const i = e[e.length - 1].cloneNode();
                    (i.id = Qt(i.id)), t.e.appendChild(i), (e = t.s = t.e.querySelectorAll('stop'));
                  }
                  for (let u = 0, o = e.length, a = n.length - 1; u < o; u++)
                    e[u].setAttribute('stop-color', ht(n[Math.min(u, a)].c)),
                      e[u].setAttribute('offset', n[Math.min(u, a)].o);
                })(o, u.s),
                Object.keys(Gt).forEach(function (t) {
                  if (void 0 !== u[t])
                    if (e(Gt[t]) !== 'object') {
                      let n;
                      const r =
                        t === 'gt'
                          ? ((n = u[t]), Array.isArray(n) ? `matrix(${n.join(' ')})` : '')
                          : u[t];
                      const i = Gt[t];
                      o.e.setAttribute(i, r);
                    } else
                      Object.keys(Gt[t]).forEach(function (n) {
                        if (void 0 !== u[t][n]) {
                          const e = u[t][n];
                          const r = Gt[t][n];
                          o.e.setAttribute(r, e);
                        }
                      });
                }),
                vt(u.r)
              );
            }
            return 'none';
          }
        );
      }
      function Yt(t, e, r) {
        if (t === 0) return e;
        if (t === 1) return r;
        if (e && r) {
          const i = e.t;
          if (i === r.t)
            switch (e.t) {
              case 'c':
                return { t: i, v: V(t, e.v, r.v) };
              case 'g':
                if (e.r === r.r) {
                  const u = { t: i, s: $t(t, e.s, r.s), r: e.r };
                  return (
                    e.gt &&
                      r.gt &&
                      (u.gt = (function (t, n, e) {
                        const r = n.length;
                        if (r !== e.length) return T(t, n, e);
                        for (var i = new Array(r), u = 0; u < r; u++) i[u] = q(t, n[u], e[u]);
                        return i;
                      })(t, e.gt, r.gt)),
                    e.c
                      ? ((u.c = L(t, e.c, r.c)), (u.rd = B(t, e.rd, r.rd)))
                      : e.f && ((u.f = L(t, e.f, r.f)), (u.to = L(t, e.to, r.to))),
                    u
                  );
                }
            }
          if ((e.t === 'c' && r.t === 'g') || (r.t === 'c' && e.t === 'g')) {
            const o = e.t === 'c' ? e : r;
            const a = e.t === 'g' ? n({}, e) : n({}, r);
            const l = a.s.map(function (t) {
              return { c: o.v, o: t.o };
            });
            return (a.s = e.t === 'c' ? $t(t, l, a.s) : $t(t, a.s, l)), a;
          }
        }
        return T(t, e, r);
      }
      function $t(t, n, e) {
        if (n.length === e.length)
          return n.map(function (n, r) {
            return Ut(t, n, e[r]);
          });
        for (var r = Math.max(n.length, e.length), i = [], u = 0; u < r; u++) {
          const o = Ut(t, n[Math.min(u, n.length - 1)], e[Math.min(u, e.length - 1)]);
          i.push(o);
        }
        return i;
      }
      function Ut(t, n, e) {
        return { o: D(t, n.o, e.o || 0), c: V(t, n.c, e.c || {}) };
      }
      function Qt(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, n) {
          return `-fill-${+n + 1}`;
        });
      }
      const Ht = {
        fill: zt,
        'fill-opacity': Ct,
        stroke: zt,
        'stroke-opacity': Ct,
        'stroke-width': Lt,
        'stroke-dashoffset': { f: ft, i: q },
        'stroke-dasharray': {
          f(t) {
            const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' ';
            return (
              t &&
                t.length > 0 &&
                (t = t.map(function (t) {
                  return p(t, 4);
                })),
              ct(t, n)
            );
          },
          i(t, n, e) {
            let r;
            let i;
            let u;
            let o = n.length;
            let a = e.length;
            if (o !== a)
              if (o === 0) n = G((o = a), 0);
              else if (a === 0) (a = o), (e = G(o, 0));
              else {
                const l =
                  (u =
                    ((r = o) * (i = a)) /
                    (function (t, n) {
                      for (var e; n; ) (e = n), (n = t % n), (t = e);
                      return t || 1;
                    })(r, i)) < 0
                    ? -u
                    : u;
                (n = z(n, Math.floor(l / o))), (e = z(e, Math.floor(l / a))), (o = a = l);
              }
            for (var s = [], f = 0; f < o; f++) s.push(p(B(t, n[f], e[f])));
            return s;
          },
        },
        opacity: Ct,
        transform(t, n, r, i) {
          if (
            !(t = (function (t, n) {
              if (!t || e(t) !== 'object') return null;
              let r = !1;
              for (const i in t)
                t.hasOwnProperty(i) &&
                  (t[i] && t[i].length
                    ? (t[i].forEach(function (t) {
                        t.e && (t.e = n(t.e));
                      }),
                      (r = !0))
                    : delete t[i]);
              return r ? t : null;
            })(t, i))
          )
            return null;
          const u = function (e, i, u) {
            const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return t[e] ? r(i, t[e], u) : n && n[e] ? n[e] : o;
          };
          return n && n.a && t.o
            ? function (n) {
                const e = r(n, t.o, Nt);
                return Dt.recomposeSelf(
                  e,
                  u('r', n, q, 0) + e.a,
                  u('k', n, L),
                  u('s', n, L),
                  u('t', n, L)
                ).toString();
              }
            : function (t) {
                return Dt.recomposeSelf(
                  u('o', t, Ft, null),
                  u('r', t, q, 0),
                  u('k', t, L),
                  u('s', t, L),
                  u('t', t, L)
                ).toString();
              };
        },
        r: Lt,
        '#size': gt,
        '#radius': yt,
        _(t, n) {
          if (Array.isArray(t)) for (let e = 0; e < t.length; e++) this[t[e]] = n;
          else this[t] = n;
        },
      };
      const Jt = (function (t) {
        !(function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && l(t, n);
        })(o, t);
        let n;
        let e;
        const i =
          ((n = o),
          (e = s()),
          function () {
            let t;
            const r = a(n);
            if (e) {
              const i = a(this).constructor;
              t = Reflect.construct(r, arguments, i);
            } else t = r.apply(this, arguments);
            return c(this, t);
          });
        function o() {
          return r(this, o), i.apply(this, arguments);
        }
        return (
          u(o, null, [
            {
              key: 'build',
              value(t) {
                const n = h(a(o), 'build', this).call(this, t, Ht);
                if (!n) return null;
                n.el,
                  n.options,
                  (function (t, n, e) {
                    t.play();
                  })(n.player);
              },
            },
          ]),
          o
        );
      })(st);
      return Jt.init(), Jt;
    });
    (function (s, i, o, w, d, a, b) {
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      '5c7f360c',
      {
        root: 'eyVlpNXOI461',
        version: '2022-05-04',
        animations: [
          {
            elements: {
              eyVlpNXOI4686: {
                transform: {
                  data: {
                    o: { x: 473.932495, y: 350.656998, type: 'corner' },
                    t: { x: -473.932495, y: -350.656998 },
                  },
                  keys: {
                    s: [
                      { t: 1900, v: { x: 0, y: 0 } },
                      { t: 2100, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI4692: {
                transform: {
                  data: {
                    o: { x: 358.619499, y: 240.464859, type: 'corner' },
                    t: { x: -358.619499, y: -240.464859 },
                  },
                  keys: {
                    s: [
                      { t: 100, v: { x: 0, y: 0 } },
                      { t: 600, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46144: {
                transform: {
                  data: {
                    o: { x: 363.063547, y: 228.911831, type: 'corner' },
                    t: { x: -340.196999, y: -224.011856 },
                  },
                  keys: {
                    s: [
                      { t: 100, v: { x: 0, y: 0 } },
                      { t: 600, v: { x: 0.5, y: 0.5 } },
                      { t: 900, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46145: {
                transform: {
                  data: {
                    o: { x: 340.205002, y: 179.635506, type: 'corner' },
                    t: { x: -340.205002, y: -179.635506 },
                  },
                  keys: {
                    s: [
                      { t: 100, v: { x: 0, y: 0 } },
                      { t: 600, v: { x: 0, y: 0 } },
                      { t: 900, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46202: {
                transform: {
                  data: {
                    o: { x: 184.353352, y: 113.498653, type: 'corner' },
                    t: { x: -184.353352, y: -113.498653 },
                  },
                  keys: {
                    r: [
                      { t: 340, v: 0 },
                      { t: 1000, v: 360 },
                    ],
                  },
                },
              },
              eyVlpNXOI46203: {
                transform: {
                  data: {
                    o: { x: 184.332626, y: 113.516552, type: 'corner' },
                    t: { x: -184.332626, y: -113.516552 },
                  },
                  keys: {
                    r: [
                      { t: 300, v: 0 },
                      { t: 1300, v: 360 },
                    ],
                  },
                },
              },
              eyVlpNXOI46209: {
                transform: {
                  data: { t: { x: -460.149322, y: -142.864708 } },
                  keys: {
                    o: [
                      { t: 100, v: { x: 461.321303, y: 320.687296, type: 'corner' } },
                      { t: 600, v: { x: 461.321303, y: 113.17, type: 'corner' } },
                    ],
                  },
                },
              },
              eyVlpNXOI46212: {
                transform: {
                  data: {
                    o: { x: 89.95765, y: 213.848007, type: 'corner' },
                    t: { x: -89.957649, y: -213.848007 },
                  },
                  keys: {
                    r: [
                      { t: 100, v: 360 },
                      { t: 900, v: 720 },
                    ],
                    s: [
                      { t: 100, v: { x: 0, y: 0 } },
                      { t: 900, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46220: {
                transform: {
                  data: {
                    o: { x: 158.651924, y: 283.778381, type: 'corner' },
                    t: { x: -158.651924, y: -283.778381 },
                  },
                  keys: {
                    r: [
                      { t: 100, v: 0 },
                      { t: 600, v: 360 },
                    ],
                  },
                },
              },
              eyVlpNXOI46282: {
                transform: {
                  data: {
                    o: { x: 347.050995, y: 287.727997, type: 'corner' },
                    t: { x: -347.050995, y: -287.727997 },
                  },
                  keys: {
                    s: [
                      { t: 100, v: { x: 0, y: 0 } },
                      { t: 900, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46286: {
                transform: {
                  data: { t: { x: -343.166, y: -376.309998 } },
                  keys: {
                    o: [
                      { t: 100, v: { x: 222.717, y: 376.309998, type: 'corner' } },
                      { t: 600, v: { x: 350.481, y: 376.309998, type: 'corner' } },
                    ],
                  },
                },
              },
              eyVlpNXOI46287: {
                transform: {
                  data: {
                    o: { x: 25.6298, y: 46.5205, type: 'corner' },
                    t: { x: -25.6298, y: -46.5205 },
                  },
                  keys: {
                    s: [
                      { t: 1400, v: { x: 0, y: 0 } },
                      { t: 2200, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46288: {
                transform: {
                  data: {
                    o: { x: 417.861465, y: 377.236542, type: 'corner' },
                    t: { x: -417.861465, y: -377.236542 },
                  },
                  keys: {
                    s: [
                      { t: 1700, v: { x: 0, y: 0 } },
                      { t: 1900, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
              eyVlpNXOI46289: {
                transform: {
                  data: {
                    o: { x: 452.161418, y: 383.651733, type: 'corner' },
                    t: { x: -451.186127, y: -383.651733 },
                  },
                  keys: {
                    s: [
                      { t: 1300, v: { x: 0, y: 0 } },
                      { t: 1700, v: { x: 1, y: 1 } },
                    ],
                  },
                },
              },
            },
            s: 'MCDA1ZFFjNDZiYWRiZWGJiYWFiZGIyYjhiNzZGiODM3Yzc5Nzk3OTc1SNmJhZGIyYmJHYWVCYXWNiZGIyYjhiNzZiTzYgzN2E3NU42YmIyV2JDkYWViYmFhYmRiMmI4VYjdiYzZiODM3YTc1NGmJOYWZiMmI1YjU2YjLgzN2E3NTZiYWFiNWJCkYWViYmI3YWFiZGFlDNmI4M0ZhZmFhYjViYU0lhZTc1NmJDYmNiOWJFlYWVhZDZiODM3YTcT1NmJhZmI5YmM2YjgzPN2E3OTc5V2M2',
          },
        ],
        options: 'MVDAxMDg4MmY4MDgxNmAU3ZjgxMmY0NzJmNzkX3YzZlNzEyZjhh',
      },
      '__SVGATOR_PLAYER__',
      window,
      document
    );
    setFlag(1);
  }, [flag]);
  /* eslint-enable */
  return (
    <svg
      id="eyVlpNXOI461"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 507 440"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <defs>
        <linearGradient
          id="eyVlpNXOI46144-fill"
          x1="340.197"
          y1="73.2272"
          x2="340.197"
          y2="509.36"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46144-fill-0" offset="0%" stopColor="#233447" />
          <stop id="eyVlpNXOI46144-fill-1" offset="100%" stopColor="#121a24" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46145-fill"
          x1="260.367"
          y1="82.9063"
          x2="437.933"
          y2="298.067"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46145-fill-0" offset="0%" stopColor="#1ce5ff" />
          <stop id="eyVlpNXOI46145-fill-1" offset="100%" stopColor="#0070e0" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46199-fill"
          x1="185.049"
          y1="12.7386"
          x2="185.049"
          y2="307.251"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46199-fill-0" offset="0%" stopColor="#233447" />
          <stop id="eyVlpNXOI46199-fill-1" offset="100%" stopColor="#121a24" />
        </linearGradient>
        <radialGradient
          id="eyVlpNXOI46200-fill"
          cx="0"
          cy="0"
          r="1"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(76.0157 0 0 76.0157 184.371 113.501)"
        >
          <stop id="eyVlpNXOI46200-fill-0" offset="0%" stopColor="#282a57" />
          <stop id="eyVlpNXOI46200-fill-1" offset="26%" stopColor="rgba(48,50,93,0.96)" />
          <stop id="eyVlpNXOI46200-fill-2" offset="46%" stopColor="rgba(72,74,112,0.85)" />
          <stop id="eyVlpNXOI46200-fill-3" offset="65%" stopColor="rgba(113,114,144,0.66)" />
          <stop id="eyVlpNXOI46200-fill-4" offset="82%" stopColor="rgba(171,171,189,0.39)" />
          <stop id="eyVlpNXOI46200-fill-5" offset="98%" stopColor="rgba(245,245,247,0.05)" />
          <stop id="eyVlpNXOI46200-fill-6" offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient
          id="eyVlpNXOI46201-fill"
          x1="178.848"
          y1="64.7966"
          x2="192.375"
          y2="184.567"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46201-fill-0" offset="0%" stopColor="#233447" />
          <stop id="eyVlpNXOI46201-fill-1" offset="100%" stopColor="#121a24" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46203-stroke"
          x1="125.786"
          y1="113.517"
          x2="242.916"
          y2="113.517"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46203-stroke-0" offset="0%" stopColor="#ff40ff" />
          <stop id="eyVlpNXOI46203-stroke-1" offset="84%" stopColor="#28bcff" />
          <stop id="eyVlpNXOI46203-stroke-2" offset="100%" stopColor="#00d3ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46208-fill"
          x1="381.147"
          y1="109.486"
          x2="558.034"
          y2="323.84"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46208-fill-0" offset="0%" stopColor="#ffc21a" />
          <stop id="eyVlpNXOI46208-fill-1" offset="32%" stopColor="#ff4237" />
          <stop id="eyVlpNXOI46208-fill-2" offset="43%" stopColor="#f12261" />
          <stop id="eyVlpNXOI46208-fill-3" offset="45%" stopColor="#ef1d68" />
          <stop id="eyVlpNXOI46208-fill-4" offset="49%" stopColor="#c44687" />
          <stop id="eyVlpNXOI46208-fill-5" offset="57%" stopColor="#59abd3" />
          <stop id="eyVlpNXOI46208-fill-6" offset="61%" stopColor="#1ce5ff" />
          <stop id="eyVlpNXOI46208-fill-7" offset="67%" stopColor="#37bae7" />
          <stop id="eyVlpNXOI46208-fill-8" offset="80%" stopColor="#794fab" />
          <stop id="eyVlpNXOI46208-fill-9" offset="82%" stopColor="#843ea1" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46213-fill"
          x1="110.544"
          y1="272.856"
          x2="78.9889"
          y2="166.343"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46213-fill-0" offset="41%" stopColor="#4f8efe" />
          <stop id="eyVlpNXOI46213-fill-1" offset="100%" stopColor="#74c5ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46215-fill"
          x1="171.474"
          y1="318.922"
          x2="152.593"
          y2="255.189"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46215-fill-0" offset="41%" stopColor="#4f8efe" />
          <stop id="eyVlpNXOI46215-fill-1" offset="100%" stopColor="#74c5ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46216-fill"
          x1="280.859"
          y1="322.851"
          x2="280.859"
          y2="462.821"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46216-fill-0" offset="0%" stopColor="#233447" />
          <stop id="eyVlpNXOI46216-fill-1" offset="100%" stopColor="#121a24" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46228-stroke"
          x1="49.3106"
          y1="46.52"
          x2="133.318"
          y2="46.52"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46228-stroke-0" offset="0%" stopColor="#ff40ff" />
          <stop id="eyVlpNXOI46228-stroke-1" offset="84%" stopColor="#28bcff" />
          <stop id="eyVlpNXOI46228-stroke-2" offset="100%" stopColor="#00d3ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46229-stroke"
          x1="215.257"
          y1="277.719"
          x2="299.246"
          y2="277.719"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46229-stroke-0" offset="0%" stopColor="#ff40ff" />
          <stop id="eyVlpNXOI46229-stroke-1" offset="84%" stopColor="#28bcff" />
          <stop id="eyVlpNXOI46229-stroke-2" offset="100%" stopColor="#00d3ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46283-fill"
          x1="366.518"
          y1="329.466"
          x2="330.297"
          y2="251.837"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46283-fill-0" offset="0%" stopColor="#ff4174" />
          <stop id="eyVlpNXOI46283-fill-1" offset="100%" stopColor="#ff63aa" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46286-fill"
          x1="358.76"
          y1="397.111"
          x2="352.871"
          y2="357.135"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46286-fill-0" offset="41%" stopColor="#4f8efe" />
          <stop id="eyVlpNXOI46286-fill-1" offset="100%" stopColor="#74c5ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46287-fill"
          x1="22.2571"
          y1="36.0905"
          x2="29.2042"
          y2="57.6103"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46287-fill-0" offset="0%" stopColor="#ff4174" />
          <stop id="eyVlpNXOI46287-fill-1" offset="100%" stopColor="#ff63aa" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46288-fill"
          x1="416.102"
          y1="371.756"
          x2="419.731"
          y2="383.047"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46288-fill-0" offset="0%" stopColor="#ff63aa" />
          <stop id="eyVlpNXOI46288-fill-1" offset="100%" stopColor="#9f74ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46289-fill"
          x1="447.648"
          y1="372.745"
          x2="454.943"
          y2="395.347"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46289-fill-0" offset="0%" stopColor="#ff63aa" />
          <stop id="eyVlpNXOI46289-fill-1" offset="100%" stopColor="#9f74ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46290-fill"
          x1="132.64"
          y1="431.089"
          x2="91.2504"
          y2="291.357"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46290-fill-0" offset="41%" stopColor="#4f8efe" />
          <stop id="eyVlpNXOI46290-fill-1" offset="100%" stopColor="#74c5ff" />
        </linearGradient>
        <linearGradient
          id="eyVlpNXOI46291-fill"
          x1="350.971"
          y1="46.1718"
          x2="407.905"
          y2="46.1718"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 0)"
        >
          <stop id="eyVlpNXOI46291-fill-0" offset="0%" stopColor="#ff4174" />
          <stop id="eyVlpNXOI46291-fill-1" offset="100%" stopColor="#ff63aa" />
        </linearGradient>
      </defs>
      <g transform="translate(.272003 0)" clipPath="url(#eyVlpNXOI46292)">
        <g transform="translate(-.4319 0.175507)">
          <path
            d="M4.62446,82.3203h-4.032663v4.0327h4.032663v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,82.3203h-4.0326v4.0327h4.0326v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,82.3203h-4.0326v4.0327h4.0326v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M96.9702,82.3203h-4.0327v4.0327h4.0327v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M127.749,82.3203h-4.032v4.0327h4.032v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,82.3203h-4.033v4.0327h4.033v-4.0327Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,104.757h-4.032663v4.032h4.032663v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,104.757h-4.0326v4.032h4.0326v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,104.757h-4.0326v4.032h4.0326v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M96.9702,104.757h-4.0327v4.032h4.0327v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M127.749,104.757h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,104.757h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,127.191h-4.032663v4.033h4.032663v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,127.191h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,127.191h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M96.9702,127.191h-4.0327v4.033h4.0327v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M127.749,127.191h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,127.191h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,149.628h-4.032663v4.033h4.032663v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,149.628h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,149.628h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M96.9702,149.628h-4.0327v4.033h4.0327v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M127.749,149.628h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,149.628h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,172.064h-4.032663v4.033h4.032663v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path d="M35.4174,172.064h-4.0326v4.033h4.0326v-4.033Z" fill="#ff4237" />
          <path d="M66.1967,172.064h-4.0326v4.033h4.0326v-4.033Z" fill="#ff4237" />
          <path
            d="M96.9702,172.064h-4.0327v4.033h4.0327v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M127.749,172.064h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,172.064h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,194.52h-4.032663v4.032h4.032663v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,194.52h-4.0326v4.032h4.0326v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,194.52h-4.0326v4.032h4.0326v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path d="M96.9702,194.52h-4.0327v4.032h4.0327v-4.032Z" fill="#ff4237" />
          <path
            d="M127.749,194.52h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M158.523,194.52h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M4.62446,216.956h-4.032663v4.033h4.032663v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M35.4174,216.956h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M66.1967,216.956h-4.0326v4.033h4.0326v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M96.9702,216.956h-4.0327v4.033h4.0327v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path d="M127.749,216.956h-4.032v4.033h4.032v-4.033Z" fill="#ff4237" />
          <path
            d="M158.523,216.956h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,214.021h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,214.021h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,214.021h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M445.175,214.021h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M475.949,214.021h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,214.021h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,236.458h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,236.458h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,236.458h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M445.175,236.458h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M475.949,236.458h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,236.458h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,258.896h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,258.896h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,258.896h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M445.175,258.896h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M475.949,258.896h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,258.896h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,281.332h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,281.332h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,281.332h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M445.175,281.332h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M475.949,281.332h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,281.332h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,303.768h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path d="M383.621,303.768h-4.033v4.032h4.033v-4.032Z" fill="#ff4237" />
          <path d="M414.394,303.768h-4.033v4.032h4.033v-4.032Z" fill="#ff4237" />
          <path
            d="M445.175,303.768h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M475.949,303.768h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,303.768h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,326.204h-4.032v4.033h4.032v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,326.204h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,326.204h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path d="M445.175,326.204h-4.032v4.033h4.032v-4.033Z" fill="#ff4237" />
          <path
            d="M475.949,326.204h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M506.728,326.204h-4.033v4.033h4.033v-4.033Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M352.843,348.641h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M383.621,348.641h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M414.394,348.641h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M445.175,348.641h-4.032v4.032h4.032v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            id="eyVlpNXOI4686"
            d="M475.949,348.641h-4.033v4.032h4.033v-4.032Z"
            transform="matrix(0 0 0 0 473.932495 350.656998)"
            fill="#ff4237"
          />
          <path
            d="M506.728,348.641h-4.033v4.032h4.033v-4.032Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="0.531578"
            strokeMiterlimit="10"
          />
          <path
            d="M321.408,438.899h64.303"
            fill="none"
            stroke="#8b68ff"
            strokeWidth="2.1813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M292.883,46.062v22.2163h22.216v-22.2163h-22.216Z" fill="#323f47" />
          <path d="M292.883,18.0532v22.2163h22.216v-22.2163h-22.216Z" fill="#3f4f5a" />
          <path d="M320.656,18.0728v22.2163h22.217v-22.2163h-22.217Z" fill="#252f36" />
          <g
            id="eyVlpNXOI4692"
            style={{ mixBlendMode: 'multiply' }}
            transform="matrix(0 0 0 0 358.619499 240.464859)"
            opacity="0.33"
          >
            <path
              d="M432.783,64.1367h-148.328c-23.051,0-41.738,18.6868-41.738,41.7383v269.18c0,23.051,18.687,41.738,41.738,41.738h148.328c23.052,0,41.739-18.687,41.739-41.738v-269.18c0-23.0515-18.687-41.7383-41.739-41.7383Z"
              opacity="0.02"
              fill="#5f3b92"
            />
            <path
              d="M432.345,64.8887h-147.467c-22.697,0-41.097,18.3995-41.097,41.0963v268.979c0,22.697,18.4,41.096,41.097,41.096h147.467c22.697,0,41.096-18.399,41.096-41.096v-268.979c0-22.6968-18.399-41.0963-41.096-41.0963Z"
              opacity="0.04"
              fill="#5f3b92"
            />
            <path
              d="M431.905,65.6406h-146.568c-22.353,0-40.474,18.1205-40.474,40.4734v268.722c0,22.353,18.121,40.473,40.474,40.473h146.568c22.353,0,40.474-18.12,40.474-40.473v-268.722c0-22.3529-18.121-40.4734-40.474-40.4734Z"
              opacity="0.06"
              fill="#5f3b92"
            />
            <path
              d="M431.447,66.3896h-145.671c-22.009,0-39.85,17.8415-39.85,39.8504v268.465c0,22.009,17.841,39.85,39.85,39.85h145.671c22.008,0,39.85-17.841,39.85-39.85v-268.465c0-22.0089-17.842-39.8504-39.85-39.8504Z"
              opacity="0.08"
              fill="#5f3b92"
            />
            <path
              d="M431.024,67.124h-144.791c-21.665,0-39.227,17.5625-39.227,39.227v268.227c0,21.664,17.562,39.227,39.227,39.227h144.791c21.664,0,39.226-17.563,39.226-39.227v-268.227c0-21.6645-17.562-39.227-39.226-39.227Z"
              opacity="0.1"
              fill="#5f3b92"
            />
            <path
              d="M430.567,67.875h-143.893c-21.32,0-38.604,17.2834-38.604,38.604v267.97c0,21.32,17.284,38.603,38.604,38.603h143.893c21.32,0,38.603-17.283,38.603-38.603v-267.97c0-21.3206-17.283-38.604-38.603-38.604Z"
              opacity="0.12"
              fill="#5f3b92"
            />
            <path
              d="M430.127,68.627h-142.994c-20.976,0-37.981,17.0043-37.981,37.98v267.732c0,20.976,17.005,37.981,37.981,37.981h142.994c20.976,0,37.981-17.005,37.981-37.981v-267.732c0-20.9757-17.005-37.98-37.981-37.98Z"
              opacity="0.14"
              fill="#5f3b92"
            />
            <path
              d="M429.687,69.3779h-142.133c-20.622,0-37.339,16.7172-37.339,37.3391v267.512c0,20.621,16.717,37.339,37.339,37.339h142.133c20.621,0,37.338-16.718,37.338-37.339v-267.512c0-20.6219-16.717-37.3391-37.338-37.3391Z"
              opacity="0.16"
              fill="#5f3b92"
            />
            <path
              d="M429.247,70.1299h-141.235c-20.277,0-36.715,16.4381-36.715,36.7151v267.256c0,20.277,16.438,36.715,36.715,36.715h141.235c20.278,0,36.716-16.438,36.716-36.715v-267.256c0-20.277-16.438-36.7151-36.716-36.7151Z"
              opacity="0.18"
              fill="#5f3b92"
            />
            <path
              d="M428.788,70.8633h-140.336c-19.934,0-36.093,16.1591-36.093,36.0927v267.017c0,19.933,16.159,36.092,36.093,36.092h140.336c19.934,0,36.093-16.159,36.093-36.092v-267.017c0-19.9336-16.159-36.0927-36.093-36.0927Z"
              opacity="0.2"
              fill="#5f3b92"
            />
            <path
              d="M428.331,71.6152h-139.438c-19.589,0-35.469,15.8801-35.469,35.4688v266.761c0,19.589,15.88,35.469,35.469,35.469h139.438c19.589,0,35.469-15.88,35.469-35.469v-266.761c0-19.5887-15.88-35.4688-35.469-35.4688Z"
              opacity="0.22"
              fill="#5f3b92"
            />
            <path
              d="M427.89,72.3672h-138.54c-19.245,0-34.846,15.601-34.846,34.8458v266.504c0,19.245,15.601,34.846,34.846,34.846h138.54c19.245,0,34.846-15.601,34.846-34.846v-266.504c0-19.2448-15.601-34.8458-34.846-34.8458Z"
              opacity="0.24"
              fill="#5f3b92"
            />
            <path
              d="M289.789,73.1172h137.642c9.076,0,17.781,3.6056,24.199,10.0236s10.024,15.1226,10.024,24.1992v266.265c.002,4.495-.881,8.947-2.6,13.1s-4.24,7.927-7.418,11.105c-3.179,3.178-6.952,5.699-11.106,7.418-4.153,1.719-8.604,2.603-13.099,2.6h-137.66c-9.072,0-17.772-3.604-24.186-10.018-6.415-6.415-10.019-15.115-10.019-24.186v-266.303c.005-9.0727,3.613-17.7727,10.03-24.1867c6.418-6.414,15.12-10.0171,24.193-10.0171Z"
              opacity="0.25"
              fill="#5f3b92"
            />
            <path
              d="M427.01,73.8691h-136.781c-18.546,0-33.581,15.0348-33.581,33.5809v266.046c0,18.546,15.035,33.581,33.581,33.581h136.781c18.546,0,33.581-15.035,33.581-33.581v-266.046c0-18.5461-15.035-33.5809-33.581-33.5809Z"
              opacity="0.27"
              fill="#5f3b92"
            />
            <path
              d="M426.551,74.6211h-135.882c-18.202,0-32.958,14.7557-32.958,32.9579v265.789c0,18.202,14.756,32.958,32.958,32.958h135.882c18.202,0,32.958-14.756,32.958-32.958v-265.789c0-18.2022-14.756-32.9579-32.958-32.9579Z"
              opacity="0.29"
              fill="#5f3b92"
            />
            <path
              d="M426.112,75.3545h-134.984c-17.858,0-32.335,14.4767-32.335,32.3345v265.551c0,17.858,14.477,32.334,32.335,32.334h134.984c17.858,0,32.334-14.476,32.334-32.334v-265.551c0-17.8578-14.476-32.3345-32.334-32.3345Z"
              opacity="0.31"
              fill="#5f3b92"
            />
            <path
              d="M425.653,76.1064h-134.086c-17.514,0-31.712,14.1977-31.712,31.7116v265.294c0,17.514,14.198,31.711,31.712,31.711h134.086c17.514,0,31.711-14.197,31.711-31.711v-265.294c0-17.5139-14.197-31.7116-31.711-31.7116Z"
              opacity="0.33"
              fill="#5f3b92"
            />
            <path
              d="M425.213,76.8574h-133.187c-17.17,0-31.088,13.9187-31.088,31.0886v265.037c0,17.17,13.918,31.088,31.088,31.088h133.187c17.17,0,31.089-13.918,31.089-31.088v-265.037c0-17.1699-13.919-31.0886-31.089-31.0886Z"
              opacity="0.35"
              fill="#5f3b92"
            />
            <path
              d="M424.773,77.6094h-132.326C275.631,77.6094,262,91.2408,262,108.056v264.836c0,16.815,13.631,30.446,30.447,30.446h132.326c16.815,0,30.446-13.631,30.446-30.446v-264.836c0-16.8152-13.631-30.4466-30.446-30.4466Z"
              opacity="0.37"
              fill="#5f3b92"
            />
            <path
              d="M424.35,78.3604h-131.447c-16.471,0-29.823,13.3523-29.823,29.8236v264.579c0,16.471,13.352,29.823,29.823,29.823h131.447c16.471,0,29.823-13.352,29.823-29.823v-264.579c0-16.4713-13.352-29.8236-29.823-29.8236Z"
              opacity="0.39"
              fill="#5f3b92"
            />
            <path
              d="M423.895,79.1113h-130.548c-16.127,0-29.201,13.0734-29.201,29.1997v264.341c0,16.127,13.074,29.201,29.201,29.201h130.548c16.127,0,29.2-13.074,29.2-29.201v-264.341c0-16.1263-13.073-29.1997-29.2-29.1997Z"
              opacity="0.41"
              fill="#5f3b92"
            />
            <path
              d="M423.454,79.8457h-129.651c-15.782,0-28.576,12.7943-28.576,28.5773v264.084c0,15.783,12.794,28.577,28.576,28.577h129.651c15.782,0,28.576-12.794,28.576-28.577v-264.084c0-15.783-12.794-28.5773-28.576-28.5773Z"
              opacity="0.43"
              fill="#5f3b92"
            />
            <path
              d="M422.995,80.5957h-128.752c-15.439,0-27.954,12.5153-27.954,27.9533v263.828c0,15.438,12.515,27.954,27.954,27.954h128.752c15.438,0,27.953-12.516,27.953-27.954v-263.828c0-15.438-12.515-27.9533-27.953-27.9533Z"
              opacity="0.45"
              fill="#5f3b92"
            />
            <path
              d="M422.553,81.3477h-127.853c-15.095,0-27.331,12.2362-27.331,27.3303v263.589c0,15.095,12.236,27.331,27.331,27.331h127.853c15.094,0,27.331-12.236,27.331-27.331v-263.589c0-15.0941-12.237-27.3303-27.331-27.3303Z"
              opacity="0.47"
              fill="#5f3b92"
            />
            <path
              d="M422.117,82.0996h-126.993c-14.739,0-26.688,11.949-26.688,26.6884v263.37c0,14.74,11.949,26.689,26.688,26.689h126.993c14.739,0,26.689-11.949,26.689-26.689v-263.37c0-14.7394-11.95-26.6884-26.689-26.6884Z"
              opacity="0.49"
              fill="#5f3b92"
            />
            <path
              d="M421.658,82.8516h-126.094c-14.396,0-26.066,11.67-26.066,26.0654v263.113c0,14.396,11.67,26.066,26.066,26.066h126.094c14.395,0,26.065-11.67,26.065-26.066v-263.113c0-14.3954-11.67-26.0654-26.065-26.0654Z"
              opacity="0.51"
              fill="#5f3b92"
            />
            <path
              d="M421.216,83.584h-125.195c-14.052,0-25.443,11.3909-25.443,25.442v262.875c0,14.051,11.391,25.442,25.443,25.442h125.195c14.052,0,25.443-11.391,25.443-25.442v-262.875c0-14.0511-11.391-25.442-25.443-25.442Z"
              opacity="0.53"
              fill="#5f3b92"
            />
            <path
              d="M420.757,84.3359h-124.297c-13.707,0-24.819,11.112-24.819,24.8191v262.618c0,13.707,11.112,24.819,24.819,24.819h124.297c13.708,0,24.82-11.112,24.82-24.819v-262.618c0-13.7071-11.112-24.8191-24.82-24.8191Z"
              opacity="0.55"
              fill="#5f3b92"
            />
            <path
              d="M420.322,85.0879h-123.399c-13.364,0-24.196,10.8329-24.196,24.1961v262.361c0,13.363,10.832,24.196,24.196,24.196h123.399c13.363,0,24.196-10.833,24.196-24.196v-262.361c0-13.3632-10.833-24.1961-24.196-24.1961Z"
              opacity="0.57"
              fill="#5f3b92"
            />
            <path
              d="M419.879,85.8398h-122.537c-13.009,0-23.555,10.5457-23.555,23.5542v262.16c0,13.009,10.546,23.554,23.555,23.554h122.537c13.009,0,23.555-10.545,23.555-23.554v-262.16c0-13.0085-10.546-23.5542-23.555-23.5542Z"
              opacity="0.59"
              fill="#5f3b92"
            />
            <path
              d="M419.442,86.5908h-121.64c-12.664,0-22.931,10.2667-22.931,22.9312v261.903c0,12.665,10.267,22.931,22.931,22.931h121.64c12.665,0,22.931-10.266,22.931-22.931v-261.903c0-12.6645-10.266-22.9312-22.931-22.9312Z"
              opacity="0.61"
              fill="#5f3b92"
            />
            <path
              d="M418.983,87.3428h-120.741c-12.321,0-22.308,9.9876-22.308,22.3082v261.646c0,12.32,9.987,22.308,22.308,22.308h120.741c12.32,0,22.308-9.988,22.308-22.308v-261.646c0-12.3206-9.988-22.3082-22.308-22.3082Z"
              opacity="0.63"
              fill="#5f3b92"
            />
            <path
              d="M418.544,88.0752h-119.844c-11.976,0-21.684,9.7086-21.684,21.6848v261.408c0,11.976,9.708,21.685,21.684,21.685h119.844c11.976,0,21.684-9.709,21.684-21.685v-261.408c0-11.9762-9.708-21.6848-21.684-21.6848Z"
              opacity="0.65"
              fill="#5f3b92"
            />
            <path
              d="M418.087,88.8271h-118.945c-11.632,0-21.062,9.4296-21.062,21.0619v261.151c0,11.632,9.43,21.062,21.062,21.062h118.945c11.632,0,21.061-9.43,21.061-21.062v-261.151c0-11.6323-9.429-21.0619-21.061-21.0619Z"
              opacity="0.67"
              fill="#5f3b92"
            />
            <path
              d="M417.664,89.5791h-118.066c-11.287,0-20.438,9.1505-20.438,20.4379v260.895c0,11.288,9.151,20.438,20.438,20.438h118.066c11.287,0,20.438-9.15,20.438-20.438v-260.895c0-11.2874-9.151-20.4379-20.438-20.4379Z"
              opacity="0.69"
              fill="#5f3b92"
            />
            <path
              d="M417.223,90.3301h-117.204c-10.933,0-19.796,8.8633-19.796,19.7969v260.693c0,10.933,8.863,19.797,19.796,19.797h117.204c10.934,0,19.797-8.864,19.797-19.797v-260.693c0-10.9336-8.863-19.7969-19.797-19.7969Z"
              opacity="0.71"
              fill="#5f3b92"
            />
            <path
              d="M416.784,91.082h-116.306c-10.589,0-19.173,8.5843-19.173,19.174v260.436c0,10.589,8.584,19.174,19.173,19.174h116.306c10.589,0,19.173-8.585,19.173-19.174v-260.436c0-10.5897-8.584-19.174-19.173-19.174Z"
              opacity="0.73"
              fill="#5f3b92"
            />
            <path
              d="M416.327,91.832h-115.408c-10.245,0-18.55,8.305-18.55,18.55v260.199c0,10.245,8.305,18.55,18.55,18.55h115.408c10.245,0,18.55-8.305,18.55-18.55v-260.199c0-10.245-8.305-18.55-18.55-18.55Z"
              opacity="0.75"
              fill="#5f3b92"
            />
            <path
              d="M415.885,92.5664h-114.509c-9.901,0-17.927,8.0266-17.927,17.9266v259.942c0,9.901,8.026,17.927,17.927,17.927h114.509c9.901,0,17.927-8.026,17.927-17.927v-259.942c0-9.9-8.026-17.9266-17.927-17.9266Z"
              opacity="0.76"
              fill="#5f3b92"
            />
            <path
              d="M415.427,93.3184h-113.611c-9.557,0-17.304,7.7476-17.304,17.3036v259.685c0,9.557,7.747,17.304,17.304,17.304h113.611c9.556,0,17.303-7.747,17.303-17.304v-259.685c0-9.556-7.747-17.3036-17.303-17.3036Z"
              opacity="0.78"
              fill="#5f3b92"
            />
            <path
              d="M302.256,94.0693h112.731c2.191,0,4.36.4315,6.384,1.2698c2.023.8382,3.862,2.0669,5.411,3.6159s2.778,3.388,3.616,5.412c.838,2.023,1.27,4.192,1.27,6.383v259.52c0,4.424-1.758,8.667-4.886,11.795s-7.371,4.886-11.795,4.886h-112.731c-4.419,0-8.657-1.756-11.782-4.881-3.125-3.124-4.88-7.363-4.88-11.782v-259.556c.005-4.418,1.762-8.653,4.885-11.7771c3.124-3.1237,7.359-4.8807,11.777-4.8856Z"
              opacity="0.8"
              fill="#5f3b92"
            />
            <path
              d="M414.547,94.8213h-111.852c-8.858,0-16.039,7.1807-16.039,16.0387v259.227c0,8.858,7.181,16.039,16.039,16.039h111.852c8.858,0,16.039-7.181,16.039-16.039v-259.227c0-8.858-7.181-16.0387-16.039-16.0387Z"
              opacity="0.82"
              fill="#5f3b92"
            />
            <path
              d="M414.09,95.5723h-110.954c-8.513,0-15.415,6.9017-15.415,15.4157v258.97c0,8.514,6.902,15.416,15.415,15.416h110.954c8.514,0,15.415-6.902,15.415-15.416v-258.97c0-8.514-6.901-15.4157-15.415-15.4157Z"
              opacity="0.84"
              fill="#5f3b92"
            />
            <path
              d="M413.648,96.3057h-110.055c-8.169,0-14.792,6.6233-14.792,14.7923v258.732c0,8.17,6.623,14.793,14.792,14.793h110.055c8.17,0,14.793-6.623,14.793-14.793v-258.732c0-8.169-6.623-14.7923-14.793-14.7923Z"
              opacity="0.86"
              fill="#5f3b92"
            />
            <path
              d="M413.191,97.0576h-109.156c-7.826,0-14.17,6.3434-14.17,14.1694v258.475c0,7.826,6.344,14.169,14.17,14.169h109.156c7.826,0,14.17-6.343,14.17-14.169v-258.475c0-7.826-6.344-14.1694-14.17-14.1694Z"
              opacity="0.88"
              fill="#5f3b92"
            />
            <path
              d="M412.75,97.8096h-108.259c-7.481,0-13.546,6.0644-13.546,13.5464v258.218c0,7.482,6.065,13.546,13.546,13.546h108.259c7.481,0,13.546-6.064,13.546-13.546v-258.218c0-7.482-6.065-13.5464-13.546-13.5464Z"
              opacity="0.9"
              fill="#5f3b92"
            />
            <path
              d="M412.311,98.5615h-107.397c-7.127,0-12.904,5.7775-12.904,12.9045v258.017c0,7.127,5.777,12.905,12.904,12.905h107.397c7.127,0,12.905-5.778,12.905-12.905v-258.017c0-7.127-5.778-12.9045-12.905-12.9045Z"
              opacity="0.92"
              fill="#5f3b92"
            />
            <path
              d="M411.872,99.3115h-106.499c-6.783,0-12.281,5.4985-12.281,12.2815v257.76c0,6.783,5.498,12.281,12.281,12.281h106.499c6.783,0,12.281-5.498,12.281-12.281v-257.76c0-6.783-5.498-12.2815-12.281-12.2815Z"
              opacity="0.94"
              fill="#5f3b92"
            />
            <path
              d="M411.413,100.063h-105.601c-6.438,0-11.658,5.22-11.658,11.659v257.503c0,6.439,5.22,11.658,11.658,11.658h105.601c6.439,0,11.658-5.219,11.658-11.658v-257.503c0-6.439-5.219-11.659-11.658-11.659Z"
              opacity="0.96"
              fill="#5f3b92"
            />
            <path
              d="M410.99,100.798h-104.721c-6.094,0-11.035,4.94-11.035,11.035v257.265c0,6.095,4.941,11.035,11.035,11.035h104.721c6.094,0,11.035-4.94,11.035-11.035v-257.265c0-6.095-4.941-11.035-11.035-11.035Z"
              opacity="0.98"
              fill="#5f3b92"
            />
            <path
              d="M410.531,101.549h-103.823c-5.75,0-10.411,4.661-10.411,10.411v257.009c0,5.75,4.661,10.412,10.411,10.412h103.823c5.75,0,10.412-4.662,10.412-10.412v-257.009c0-5.75-4.662-10.411-10.412-10.411Z"
              fill="#5f3b92"
            />
          </g>
          <path
            id="eyVlpNXOI46144"
            d="M409.632,82.1357h-138.87c-14.568,0-26.377,11.8095-26.377,26.3773v230.998c0,14.568,11.809,26.377,26.377,26.377h138.87c14.568,0,26.377-11.809,26.377-26.377v-230.998c0-14.5678-11.809-26.3773-26.377-26.3773Z"
            transform="matrix(0 0 0 0 363.063547 228.911831)"
            fill="url(#eyVlpNXOI46144-fill)"
          />
          <path
            id="eyVlpNXOI46145"
            d="M394.307,110.512h-108.204c-11.349,0-20.548,9.199-20.548,20.548v97.15c0,11.349,9.199,20.549,20.548,20.549h108.204c11.348,0,20.548-9.2,20.548-20.549v-97.15c0-11.349-9.2-20.548-20.548-20.548Z"
            transform="matrix(0 0 0 0 340.205002 179.635506)"
            fill="url(#eyVlpNXOI46145-fill)"
          />
          <path
            d="M273.914,113.17L399.935,239.191"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="1.06316"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2.11,6.34"
          />
          <g style={{ mixBlendMode: 'multiply' }} opacity="0.33">
            <path
              d="M277.615,0.75h-148.328c-23.051,0-41.7382,18.6868-41.7382,41.738v177.052c0,23.051,18.6872,41.738,41.7382,41.738h148.328c23.052,0,41.739-18.687,41.739-41.738v-177.052c0-23.0512-18.687-41.738-41.739-41.738Z"
              opacity="0.02"
              fill="#5f3b92"
            />
            <path
              d="M277.196,1.50195h-147.467c-22.697,0-41.0962,18.39955-41.0962,41.09645v176.8506c0,22.697,18.3992,41.096,41.0962,41.096h147.467c22.697,0,41.097-18.399,41.097-41.096v-176.8506c0-22.6969-18.4-41.09645-41.097-41.09645Z"
              opacity="0.04"
              fill="#5f3b92"
            />
            <path
              d="M276.737,2.23438h-146.568c-22.353,0-40.4737,18.12052-40.4737,40.47322v176.5944c0,22.352,18.1207,40.473,40.4737,40.473h146.568c22.353,0,40.474-18.121,40.474-40.473v-176.5944c0-22.3527-18.121-40.47322-40.474-40.47322Z"
              opacity="0.06"
              fill="#5f3b92"
            />
            <path
              d="M276.296,2.98633h-145.671c-22.008,0-39.8496,17.84147-39.8496,39.85007v176.3376c0,22.008,17.8416,39.85,39.8496,39.85h145.671c22.009,0,39.85-17.842,39.85-39.85v-176.3376c0-22.0086-17.841-39.85007-39.85-39.85007Z"
              opacity="0.08"
              fill="#5f3b92"
            />
            <path
              d="M275.856,3.7373h-144.791c-21.665,0-39.2271,17.5624-39.2271,39.2268v176.0989c0,21.664,17.5621,39.227,39.2271,39.227h144.791c21.664,0,39.226-17.563,39.226-39.227v-176.0989c0-21.6644-17.562-39.2268-39.226-39.2268Z"
              opacity="0.1"
              fill="#5f3b92"
            />
            <path
              d="M275.416,4.48926h-143.893c-21.32,0-38.6031,17.28344-38.6031,38.60354v175.8422c0,21.32,17.2831,38.604,38.6031,38.604h143.893c21.32,0,38.604-17.284,38.604-38.604v-175.8422c0-21.3201-17.284-38.60354-38.604-38.60354Z"
              opacity="0.12"
              fill="#5f3b92"
            />
            <path
              d="M274.959,5.24121h-142.994c-20.976,0-37.9806,17.00439-37.9806,37.98029v175.5855c0,20.976,17.0046,37.981,37.9806,37.981h142.994c20.976,0,37.981-17.005,37.981-37.981v-175.5855c0-20.9759-17.005-37.98029-37.981-37.98029Z"
              opacity="0.14"
              fill="#5f3b92"
            />
            <path
              d="M274.536,5.99121h-142.133c-20.621,0-37.3385,16.71709-37.3385,37.33879v175.384c0,20.622,16.7175,37.339,37.3385,37.339h142.133c20.622,0,37.339-16.717,37.339-37.339v-175.384c0-20.6217-16.717-37.33879-37.339-37.33879Z"
              opacity="0.16"
              fill="#5f3b92"
            />
            <path
              d="M274.077,6.72559h-141.234c-20.278,0-36.716,16.43811-36.716,36.71551v175.1279c0,20.277,16.438,36.715,36.716,36.715h141.234c20.278,0,36.716-16.438,36.716-36.715v-175.1279c0-20.2774-16.438-36.71551-36.716-36.71551Z"
              opacity="0.18"
              fill="#5f3b92"
            />
            <path
              d="M273.638,7.47656h-140.337c-19.933,0-36.092,16.15904-36.092,36.09234v174.8891c0,19.933,16.159,36.092,36.092,36.092h140.337c19.933,0,36.092-16.159,36.092-36.092v-174.8891c0-19.9333-16.159-36.09234-36.092-36.09234Z"
              opacity="0.2"
              fill="#5f3b92"
            />
            <path
              d="M273.181,8.22852h-139.438c-19.59,0-35.4696,15.88008-35.4696,35.46908v174.6324c0,19.589,15.8796,35.469,35.4696,35.469h139.438c19.589,0,35.469-15.88,35.469-35.469v-174.6324c0-19.589-15.88-35.46908-35.469-35.46908Z"
              opacity="0.22"
              fill="#5f3b92"
            />
            <path
              d="M272.722,8.98047h-138.54c-19.245,0-34.8461,15.60103-34.8461,34.84583v174.3757c0,19.245,15.6011,34.846,34.8461,34.846h138.54c19.245,0,34.846-15.601,34.846-34.846v-174.3757c0-19.2448-15.601-34.84583-34.846-34.84583Z"
              opacity="0.24"
              fill="#5f3b92"
            />
            <path
              d="M134.62,9.73047h137.661c4.493.00481,8.941.89493,13.091,2.61943c4.149,1.7245,7.918,4.2497,11.091,7.4312s5.688,6.957,7.401,11.1108s2.592,8.6045,2.584,13.0979v174.1372c0,9.077-3.605,17.782-10.023,24.199-6.418,6.418-15.123,10.024-24.199,10.024h-137.606c-9.073-.005-17.773-3.613-24.187-10.03s-10.017-15.119-10.017-24.193v-174.1372c-.007-4.4964.872-8.9501,2.588-13.1063s4.234-7.9334,7.411-11.1154s6.95-5.7064,11.103-7.4287c4.154-1.7224,8.606-2.60894,13.102-2.60893Z"
              opacity="0.25"
              fill="#5f3b92"
            />
            <path
              d="M271.842,10.4824h-136.78c-18.547,0-33.582,15.0348-33.582,33.5811v173.9175c0,18.546,15.035,33.581,33.582,33.581h136.78c18.546,0,33.581-15.035,33.581-33.581v-173.9175c0-18.5463-15.035-33.5811-33.581-33.5811Z"
              opacity="0.27"
              fill="#5f3b92"
            />
            <path
              d="M271.401,11.2158h-135.883c-18.202,0-32.957,14.7557-32.957,32.9579v173.6613c0,18.202,14.755,32.958,32.957,32.958h135.883c18.202,0,32.958-14.756,32.958-32.958v-173.6613c0-18.2022-14.756-32.9579-32.958-32.9579Z"
              opacity="0.29"
              fill="#5f3b92"
            />
            <path
              d="M270.944,11.9678h-134.984c-17.858,0-32.335,14.4767-32.335,32.3346v173.4226c0,17.858,14.477,32.335,32.335,32.335h134.984c17.858,0,32.334-14.477,32.334-32.335v-173.4226c0-17.8579-14.476-32.3346-32.334-32.3346Z"
              opacity="0.31"
              fill="#5f3b92"
            />
            <path
              d="M270.502,12.7197h-134.086c-17.513,0-31.711,14.1977-31.711,31.7114v173.1659c0,17.514,14.198,31.712,31.711,31.712h134.086c17.514,0,31.712-14.198,31.712-31.712v-173.1659c0-17.5137-14.198-31.7114-31.712-31.7114Z"
              opacity="0.33"
              fill="#5f3b92"
            />
            <path
              d="M270.045,13.4707h-133.187c-17.17,0-31.088,13.9186-31.088,31.0882v172.9091c0,17.17,13.918,31.089,31.088,31.089h133.187c17.17,0,31.089-13.919,31.089-31.089v-172.9091c0-17.1696-13.919-31.0882-31.089-31.0882Z"
              opacity="0.35"
              fill="#5f3b92"
            />
            <path
              d="M269.622,14.2227h-132.326c-16.815,0-30.446,13.6314-30.446,30.4466v172.7077c0,16.815,13.631,30.447,30.446,30.447h132.326c16.816,0,30.447-13.632,30.447-30.447v-172.7077c0-16.8152-13.631-30.4466-30.447-30.4466Z"
              opacity="0.37"
              fill="#5f3b92"
            />
            <path
              d="M269.184,14.9561h-131.447c-16.471,0-29.823,13.3523-29.823,29.8233v172.4516c0,16.471,13.352,29.823,29.823,29.823h131.447c16.471,0,29.823-13.352,29.823-29.823v-172.4516c0-16.471-13.352-29.8233-29.823-29.8233Z"
              opacity="0.39"
              fill="#5f3b92"
            />
            <path
              d="M268.744,15.708h-130.548c-16.127,0-29.2,13.0734-29.2,29.2001v172.1949c0,16.127,13.073,29.2,29.2,29.2h130.548c16.127,0,29.201-13.073,29.201-29.2v-172.1949c0-16.1267-13.074-29.2001-29.201-29.2001Z"
              opacity="0.41"
              fill="#5f3b92"
            />
            <path
              d="M268.286,16.46h-129.651c-15.782,0-28.576,12.7943-28.576,28.5769v171.9561c0,15.783,12.794,28.577,28.576,28.577h129.651c15.782,0,28.576-12.794,28.576-28.577v-171.9561c0-15.7826-12.794-28.5769-28.576-28.5769Z"
              opacity="0.43"
              fill="#5f3b92"
            />
            <path
              d="M267.844,17.21h-128.752c-15.438,0-27.953,12.5152-27.953,27.9536v171.6994c0,15.439,12.515,27.954,27.953,27.954h128.752c15.439,0,27.954-12.515,27.954-27.954v-171.6994c0-15.4384-12.515-27.9536-27.954-27.9536Z"
              opacity="0.45"
              fill="#5f3b92"
            />
            <path
              d="M267.387,17.9609h-127.853c-15.095,0-27.331,12.2363-27.331,27.3305v171.4426c0,15.095,12.236,27.331,27.331,27.331h127.853c15.094,0,27.331-12.236,27.331-27.331v-171.4426c0-15.0942-12.237-27.3305-27.331-27.3305Z"
              opacity="0.47"
              fill="#5f3b92"
            />
            <path
              d="M266.966,18.7129h-126.992c-14.74,0-26.689,11.949-26.689,26.6889v171.2412c0,14.74,11.949,26.689,26.689,26.689h126.992c14.74,0,26.689-11.949,26.689-26.689v-171.2412c0-14.7399-11.949-26.6889-26.689-26.6889Z"
              opacity="0.49"
              fill="#5f3b92"
            />
            <path
              d="M266.507,19.4463h-126.094c-14.395,0-26.065,11.67-26.065,26.0656v170.9851c0,14.395,11.67,26.065,26.065,26.065h126.094c14.396,0,26.066-11.67,26.066-26.065v-170.9851c0-14.3956-11.67-26.0656-26.066-26.0656Z"
              opacity="0.51"
              fill="#5f3b92"
            />
            <path
              d="M266.048,20.1973h-125.195c-14.052,0-25.443,11.3909-25.443,25.4424v170.7463c0,14.052,11.391,25.443,25.443,25.443h125.195c14.052,0,25.443-11.391,25.443-25.443v-170.7463c0-14.0515-11.391-25.4424-25.443-25.4424Z"
              opacity="0.53"
              fill="#5f3b92"
            />
            <path
              d="M265.607,20.9492h-124.298c-13.707,0-24.819,11.1119-24.819,24.8192v170.4896c0,13.708,11.112,24.82,24.819,24.82h124.298c13.707,0,24.819-11.112,24.819-24.82v-170.4896c0-13.7073-11.112-24.8192-24.819-24.8192Z"
              opacity="0.55"
              fill="#5f3b92"
            />
            <path
              d="M265.15,21.7012h-123.399c-13.363,0-24.196,10.8329-24.196,24.1959v170.2329c0,13.364,10.833,24.196,24.196,24.196h123.399c13.363,0,24.196-10.832,24.196-24.196v-170.2329c0-13.363-10.833-24.1959-24.196-24.1959Z"
              opacity="0.57"
              fill="#5f3b92"
            />
            <path
              d="M264.729,22.4531h-122.538c-13.009,0-23.554,10.5457-23.554,23.5544v170.0315c0,13.009,10.545,23.555,23.554,23.555h122.538c13.009,0,23.554-10.546,23.554-23.555v-170.0315c0-13.0087-10.545-23.5544-23.554-23.5544Z"
              opacity="0.59"
              fill="#5f3b92"
            />
            <path
              d="M264.27,23.1865h-121.64c-12.664,0-22.931,10.2667-22.931,22.9312v169.7753c0,12.664,10.267,22.931,22.931,22.931h121.64c12.665,0,22.931-10.267,22.931-22.931v-169.7753c0-12.6645-10.266-22.9312-22.931-22.9312Z"
              opacity="0.61"
              fill="#5f3b92"
            />
            <path
              d="M263.833,23.9365h-120.742c-12.32,0-22.308,9.9876-22.308,22.308v169.5185c0,12.32,9.988,22.308,22.308,22.308h120.742c12.32,0,22.308-9.988,22.308-22.308v-169.5185c0-12.3204-9.988-22.308-22.308-22.308Z"
              opacity="0.63"
              fill="#5f3b92"
            />
            <path
              d="M263.374,24.6885h-119.844c-11.976,0-21.684,9.7086-21.684,21.6847v169.2798c0,11.976,9.708,21.685,21.684,21.685h119.844c11.976,0,21.685-9.709,21.685-21.685v-169.2798c0-11.9761-9.709-21.6847-21.685-21.6847Z"
              opacity="0.65"
              fill="#5f3b92"
            />
            <path
              d="M262.936,25.4404h-118.945c-11.632,0-21.061,9.4296-21.061,21.0615v169.0231c0,11.632,9.429,21.062,21.061,21.062h118.945c11.632,0,21.062-9.43,21.062-21.062v-169.0231c0-11.6319-9.43-21.0615-21.062-21.0615Z"
              opacity="0.67"
              fill="#5f3b92"
            />
            <path
              d="M262.496,26.1924h-118.066c-11.287,0-20.438,9.1505-20.438,20.4382v168.7674c0,11.287,9.151,20.438,20.438,20.438h118.066c11.288,0,20.438-9.151,20.438-20.438v-168.7674c0-11.2877-9.15-20.4382-20.438-20.4382Z"
              opacity="0.69"
              fill="#5f3b92"
            />
            <path
              d="M262.073,26.9443h-117.204c-10.933,0-19.797,8.8633-19.797,19.7967v168.565c0,10.934,8.864,19.797,19.797,19.797h117.204c10.933,0,19.796-8.863,19.796-19.797v-168.565c0-10.9334-8.863-19.7967-19.796-19.7967Z"
              opacity="0.71"
              fill="#5f3b92"
            />
            <path
              d="M261.614,27.6768h-116.306c-10.589,0-19.173,8.5842-19.173,19.1734v168.3088c0,10.589,8.584,19.173,19.173,19.173h116.306c10.589,0,19.173-8.584,19.173-19.173v-168.3088c0-10.5892-8.584-19.1734-19.173-19.1734Z"
              opacity="0.73"
              fill="#5f3b92"
            />
            <path
              d="M261.176,28.4287h-115.407c-10.245,0-18.55,8.3052-18.55,18.5503v168.052c0,10.245,8.305,18.55,18.55,18.55h115.407c10.245,0,18.551-8.305,18.551-18.55v-168.052c0-10.2451-8.306-18.5503-18.551-18.5503Z"
              opacity="0.75"
              fill="#5f3b92"
            />
            <path
              d="M260.718,29.1807h-114.51c-9.901,0-17.927,8.0262-17.927,17.927v167.8133c0,9.901,8.026,17.927,17.927,17.927h114.51c9.9,0,17.927-8.026,17.927-17.927v-167.8133c0-9.9008-8.027-17.927-17.927-17.927Z"
              opacity="0.76"
              fill="#5f3b92"
            />
            <path
              d="M260.276,29.9316h-113.611c-9.557,0-17.304,7.7472-17.304,17.3038v167.5566c0,9.557,7.747,17.304,17.304,17.304h113.611c9.557,0,17.304-7.747,17.304-17.304v-167.5566c0-9.5566-7.747-17.3038-17.304-17.3038Z"
              opacity="0.78"
              fill="#5f3b92"
            />
            <path
              d="M147.104,30.6826h112.731c4.424,0,8.667,1.7574,11.795,4.8856c3.128,3.1283,4.886,7.371,4.886,11.795v167.3368c0,4.424-1.758,8.667-4.886,11.795s-7.371,4.886-11.795,4.886h-112.731c-2.188-.005-4.354-.441-6.373-1.283-2.02-.841-3.854-2.073-5.398-3.623-1.544-1.551-2.767-3.39-3.6-5.414-.833-2.023-1.259-4.191-1.254-6.379v-167.3372c.004-4.4112,1.756-8.641,4.872-11.7637c3.116-3.1226,7.342-4.8839,11.753-4.8985Z"
              opacity="0.8"
              fill="#5f3b92"
            />
            <path
              d="M259.381,31.4346h-111.852c-8.858,0-16.039,7.1809-16.039,16.039v167.0984c0,8.858,7.181,16.039,16.039,16.039h111.852c8.858,0,16.039-7.181,16.039-16.039v-167.0984c0-8.8581-7.181-16.039-16.039-16.039Z"
              opacity="0.82"
              fill="#5f3b92"
            />
            <path
              d="M258.939,32.167h-110.953c-8.514,0-15.416,6.9019-15.416,15.4158v166.8422c0,8.514,6.902,15.416,15.416,15.416h110.953c8.514,0,15.416-6.902,15.416-15.416v-166.8422c0-8.5139-6.902-15.4158-15.416-15.4158Z"
              opacity="0.84"
              fill="#5f3b92"
            />
            <path
              d="M258.48,32.9189h-110.055c-8.169,0-14.792,6.6229-14.792,14.7926v166.6035c0,8.17,6.623,14.793,14.792,14.793h110.055c8.17,0,14.793-6.623,14.793-14.793v-166.6035c0-8.1697-6.623-14.7926-14.793-14.7926Z"
              opacity="0.86"
              fill="#5f3b92"
            />
            <path
              d="M258.041,33.6709h-109.157c-7.825,0-14.169,6.3438-14.169,14.1693v166.3468c0,7.826,6.344,14.17,14.169,14.17h109.157c7.825,0,14.169-6.344,14.169-14.17v-166.3468c0-7.8255-6.344-14.1693-14.169-14.1693Z"
              opacity="0.88"
              fill="#5f3b92"
            />
            <path
              d="M257.582,34.4229h-108.259c-7.481,0-13.546,6.0647-13.546,13.546v166.0911c0,7.481,6.065,13.546,13.546,13.546h108.259c7.481,0,13.546-6.065,13.546-13.546v-166.0911c0-7.4813-6.065-13.546-13.546-13.546Z"
              opacity="0.9"
              fill="#5f3b92"
            />
            <path
              d="M257.161,35.1748h-107.397c-7.127,0-12.905,5.7776-12.905,12.9045v165.8887c0,7.127,5.778,12.905,12.905,12.905h107.397c7.127,0,12.904-5.778,12.904-12.905v-165.8887c0-7.1269-5.777-12.9045-12.904-12.9045Z"
              opacity="0.92"
              fill="#5f3b92"
            />
            <path
              d="M256.702,35.9072h-106.499c-6.783,0-12.281,5.4985-12.281,12.2813v165.6325c0,6.783,5.498,12.281,12.281,12.281h106.499c6.783,0,12.281-5.498,12.281-12.281v-165.6325c0-6.7828-5.498-12.2813-12.281-12.2813Z"
              opacity="0.94"
              fill="#5f3b92"
            />
            <path
              d="M256.263,36.6592h-105.601c-6.439,0-11.658,5.2195-11.658,11.658v165.3758c0,6.439,5.219,11.658,11.658,11.658h105.601c6.438,0,11.658-5.219,11.658-11.658v-165.3758c0-6.4385-5.22-11.658-11.658-11.658Z"
              opacity="0.96"
              fill="#5f3b92"
            />
            <path
              d="M255.822,37.4111h-104.721c-6.094,0-11.035,4.9405-11.035,11.0349v165.137c0,6.095,4.941,11.035,11.035,11.035h104.721c6.094,0,11.035-4.94,11.035-11.035v-165.137c0-6.0944-4.941-11.0349-11.035-11.0349Z"
              opacity="0.98"
              fill="#5f3b92"
            />
            <path
              d="M255.383,38.1621h-103.823c-5.75,0-10.412,4.6614-10.412,10.4116v164.8813c0,5.75,4.662,10.411,10.412,10.411h103.823c5.75,0,10.411-4.661,10.411-10.411v-164.8813c0-5.7502-4.661-10.4116-10.411-10.4116Z"
              fill="#5f3b92"
            />
          </g>
          <path
            d="M254.484,18.751h-138.87c-14.568,0-26.3777,11.8095-26.3777,26.3773v138.8697c0,14.568,11.8097,26.378,26.3777,26.378h138.87c14.568,0,26.377-11.81,26.377-26.378v-138.8697c0-14.5678-11.809-26.3773-26.377-26.3773Z"
            fill="url(#eyVlpNXOI46199-fill)"
          />
          <path
            style={{ mixBlendMode: 'multiply' }}
            d="M254.384,143.091c16.33-38.676-1.786-83.2672-40.462-99.5967-38.676-16.3296-83.267,1.786-99.597,40.4623-16.3295,38.6764,1.786,83.2674,40.462,99.5974c38.677,16.329,83.268-1.786,99.597-40.463Z"
            fill="url(#eyVlpNXOI46200-fill)"
          />
          <path
            d="M229.186,132.521c10.497-24.766-1.07-53.3515-25.835-63.8485-24.766-10.497-53.351,1.0698-63.848,25.8353-10.497,24.7652,1.069,53.3512,25.835,63.8482c24.765,10.497,53.351-1.07,63.848-25.835Z"
            fill="url(#eyVlpNXOI46201-fill)"
          />
          <path
            id="eyVlpNXOI46202"
            d="M184.353,174.135c-11.992,0-23.716-3.556-33.687-10.219-9.972-6.662-17.744-16.133-22.333-27.212-4.59-11.08-5.791-23.272-3.451-35.035c2.34-11.7621,8.115-22.5665,16.595-31.0466s19.284-14.2553,31.047-16.595c11.762-2.3396,23.954-1.1388,35.034,3.4506s20.55,12.3614,27.213,22.333s10.219,21.695,10.219,33.688c-.019,16.076-6.414,31.488-17.782,42.855-11.367,11.367-26.779,17.762-42.855,17.781Zm0-115.0404c-10.765-.0036-21.29,3.1856-30.242,9.1643-8.953,5.9786-15.931,14.478-20.052,24.4232-4.122,9.9449-5.201,20.8889-3.102,31.4479c2.1,10.559,7.283,20.258,14.895,27.87c7.613,7.612,17.312,12.796,27.87,14.895c10.559,2.099,21.503,1.02,31.448-3.101c9.945-4.122,18.445-11.1,24.423-20.053c5.979-8.952,9.168-19.477,9.165-30.242-.02-14.4214-5.758-28.2461-15.958-38.4418-10.199-10.1957-24.025-15.9297-38.447-15.9442v-.0184Z"
            fill="#121a24"
          />
          <path
            id="eyVlpNXOI46203"
            d="M184.351,55.9961c11.376.0036,22.495,3.3802,31.952,9.7028c9.457,6.3227,16.826,15.3074,21.177,25.8182c4.351,10.5109,5.487,22.0759,3.266,33.2319-2.222,11.157-7.701,21.405-15.746,29.447-8.046,8.043-18.295,13.519-29.452,15.737-11.158,2.218-22.722,1.078-33.231-3.276-10.51-4.354-19.492-11.727-25.812-21.186-6.319-9.459-9.692-20.579-9.693-31.954"
            fill="none"
            stroke="url(#eyVlpNXOI46203-stroke)"
            strokeWidth="2.07132"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M241.104,43.2209c1.052,0,1.906-.8535,1.906-1.9063s-.854-1.9064-1.906-1.9064c-1.053,0-1.907.8535-1.907,1.9064s.854,1.9063,1.907,1.9063Z"
            fill="#60798a"
          />
          <path
            d="M249.957,43.2209c1.053,0,1.906-.8535,1.906-1.9063s-.853-1.9064-1.906-1.9064-1.906.8535-1.906,1.9064.853,1.9063,1.906,1.9063Z"
            fill="#60798a"
          />
          <path
            d="M258.811,43.2209c1.052,0,1.906-.8535,1.906-1.9063s-.854-1.9064-1.906-1.9064c-1.053,0-1.907.8535-1.907,1.9064s.854,1.9063,1.907,1.9063Z"
            fill="#60798a"
          />
          <path
            d="M163.739,120.156l7.334-14.507v-.129h-8.455v-1.761h10.505v1.857l-7.302,14.54h-2.082Zm17.272.224c-.939,0-1.785-.186-2.538-.56s-1.356-.886-1.809-1.537c-.454-.651-.702-1.393-.745-2.226h1.921c.075.742.411,1.356,1.009,1.841.603.481,1.324.721,2.162.721.673,0,1.27-.157,1.794-.472.528-.315.942-.748,1.241-1.297.304-.556.456-1.183.456-1.882c0-.715-.158-1.353-.472-1.913-.31-.566-.737-1.012-1.282-1.338-.544-.325-1.166-.491-1.865-.496-.502-.005-1.017.072-1.545.232-.529.155-.964.355-1.305.601l-1.858-.224.993-8.071h8.519v1.761h-6.854l-.576,4.836h.096c.336-.267.758-.488,1.265-.664s1.035-.264,1.585-.264c1.004,0,1.898.24,2.682.72.79.475,1.41,1.126,1.858,1.954.454.827.68,1.772.68,2.834c0,1.046-.234,1.98-.704,2.802-.465.817-1.105,1.463-1.922,1.938-.816.47-1.745.704-2.786.704Zm16.952-3.298v-.865c0-.598.123-1.145.368-1.641.251-.502.614-.902,1.089-1.201.48-.304,1.062-.457,1.745-.457.694,0,1.276.153,1.746.457.469.299.824.699,1.065,1.201.24.496.36,1.043.36,1.641v.865c0,.598-.123,1.147-.368,1.649-.241.496-.598.897-1.073,1.201-.47.299-1.046.448-1.73.448-.694,0-1.278-.149-1.753-.448-.475-.304-.835-.705-1.081-1.201-.245-.502-.368-1.051-.368-1.649Zm1.633-.865v.865c0,.496.118.942.352,1.337.235.389.641.584,1.217.584.561,0,.956-.195,1.185-.584.235-.395.353-.841.353-1.337v-.865c0-.496-.112-.939-.337-1.329-.224-.395-.624-.592-1.201-.592-.56,0-.963.197-1.209.592-.24.39-.36.833-.36,1.329Zm-9.8-8.519v-.865c0-.597.123-1.144.368-1.641.251-.502.614-.902,1.089-1.201.481-.304,1.063-.456,1.746-.456.694,0,1.275.152,1.745.456.47.299.825.699,1.065,1.201.24.497.36,1.044.36,1.641v.865c0,.598-.122,1.148-.368,1.65-.24.496-.598.896-1.073,1.2-.47.299-1.046.449-1.729.449-.694,0-1.279-.15-1.754-.449-.475-.304-.835-.704-1.081-1.2-.245-.502-.368-1.052-.368-1.65Zm1.633-.865v.865c0,.497.118.942.353,1.337.235.39.64.585,1.217.585.56,0,.955-.195,1.185-.585.235-.395.352-.84.352-1.337v-.865c0-.496-.112-.939-.336-1.329-.224-.395-.625-.592-1.201-.592-.561,0-.964.197-1.209.592-.24.39-.361.833-.361,1.329Zm-1.024,13.323l11.273-16.397h1.825L192.23,120.156h-1.825Z"
            fill="#eaeeee"
          />
          <path
            d="M460.682,324.243c-.457,0-.91-.09-1.333-.265-.422-.175-.806-.432-1.13-.755-.323-.323-.58-.707-.755-1.13-.175-.422-.265-.875-.265-1.333v-229.8063c.005-.9205.374-1.8017,1.027-2.4509.652-.6491,1.535-1.0136,2.456-1.0135.909.0144,1.776.3858,2.414,1.0339.638.6482.996,1.5211.995,2.4305v229.8253c-.004.908-.363,1.778-1,2.425s-1.501,1.02-2.409,1.039Z"
            fill="url(#eyVlpNXOI46208-fill)"
          />
          <g id="eyVlpNXOI46209" transform="translate(1.171981 177.822588)">
            <path
              d="M470.744,142.846c.004,2.096-.614,4.147-1.776,5.891-1.162,1.745-2.816,3.106-4.751,3.911-1.936.804-4.067,1.017-6.123.61-2.057-.407-3.946-1.414-5.43-2.895-1.483-1.481-2.494-3.369-2.904-5.425-.411-2.056-.202-4.187.599-6.124.802-1.937,2.16-3.593,3.902-4.758c1.743-1.165,3.792-1.786,5.889-1.786c2.806,0,5.498,1.113,7.485,3.096c1.986,1.983,3.105,4.673,3.109,7.48Z"
              opacity="0.38"
              fill="#eff4ff"
            />
            <path
              d="M465.355,142.846c0,1.03-.305,2.037-.877,2.893s-1.385,1.523-2.337,1.917c-.951.394-1.998.497-3.007.296-1.01-.201-1.938-.696-2.666-1.425-.728-.728-1.224-1.655-1.425-2.665-.2-1.01-.097-2.057.297-3.008s1.061-1.764,1.917-2.336s1.863-.877,2.892-.877c1.381,0,2.705.548,3.681,1.524.976.977,1.525,2.301,1.525,3.681Z"
              fill="#eff4ff"
            />
          </g>
          <g id="eyVlpNXOI46212" transform="matrix(0 0 0 0 89.95765 213.848007)">
            <path
              d="M120.488,171.496h-63.8811c-5.7502,0-10.4116,4.662-10.4116,10.412v63.881c0,5.75,4.6614,10.411,10.4116,10.411h63.8811c5.75,0,10.412-4.661,10.412-10.411v-63.881c0-5.75-4.662-10.412-10.412-10.412Z"
              transform="translate(1.41 0)"
              fill="url(#eyVlpNXOI46213-fill)"
            />
            <path
              d="M100.693,223.903c-1.1951.002-2.3767.251-3.4711.73s-2.0782,1.179-2.8898,2.056l-15.6724-8.927c.4889-1.651.4889-3.408,0-5.059l15.6724-8.927c1.3841,1.476,3.2406,2.421,5.248,2.671c2.0069.251,4.0389-.208,5.7439-1.297s2.975-2.741,3.59-4.668c.616-1.927.538-4.008-.219-5.884-.758-1.876-2.147-3.428-3.928-4.387-1.781-.96-3.842-1.266-5.8249-.866-1.9831.399-3.764,1.48-5.0344,3.054-1.2704,1.575-1.9503,3.544-1.9219,5.567-.0054.691.0746,1.381.2383,2.053l-15.8924,9.165c-1.6103-1.578-3.7761-2.46-6.0306-2.457-2.2995,0-4.5048.914-6.1308,2.54s-2.5394,3.831-2.5394,6.131c0,2.299.9134,4.504,2.5394,6.13s3.8313,2.54,6.1308,2.54c2.2545.004,4.4203-.879,6.0306-2.456l15.8924,9.165c-.1637.672-.2437,1.361-.2383,2.053c0,1.715.509,3.392,1.4625,4.819.9535,1.426,2.3087,2.537,3.894,3.193c1.5854.655,3.3297.826,5.0117.49c1.683-.336,3.227-1.164,4.439-2.378s2.036-2.761,2.369-4.444c.332-1.683.158-3.427-.501-5.011s-1.773-2.937-3.201-3.887c-1.429-.951-3.107-1.456-4.822-1.452l.055-.257Z"
              fill="#eaeeee"
            />
          </g>
          <path
            d="M177.422,258.272h-38.219c-3.442,0-6.232,2.791-6.232,6.233v38.218c0,3.442,2.79,6.233,6.232,6.233h38.219c3.442,0,6.232-2.791,6.232-6.233v-38.218c0-3.442-2.79-6.233-6.232-6.233Z"
            fill="url(#eyVlpNXOI46215-fill)"
          />
          <path
            d="M371.099,333.959h-180.498c-10.741,0-19.449,8.707-19.449,19.448v38.861c0,10.741,8.708,19.448,19.449,19.448h180.498c10.741,0,19.448-8.707,19.448-19.448v-38.861c0-10.741-8.707-19.448-19.448-19.448Z"
            fill="url(#eyVlpNXOI46216-fill)"
          />
          <path
            d="M157.683,229.477h-4.509c-1.185,0-2.145.96-2.145,2.144v4.509c0,1.185.96,2.145,2.145,2.145h4.509c1.185,0,2.145-.96,2.145-2.145v-4.509c0-1.184-.96-2.144-2.145-2.144Z"
            fill="#eff4ff"
          />
          <path
            d="M180.595,229.477h-4.509c-1.184,0-2.145.96-2.145,2.144v4.509c0,1.185.961,2.145,2.145,2.145h4.509c1.185,0,2.145-.96,2.145-2.145v-4.509c0-1.184-.96-2.144-2.145-2.144Z"
            fill="#eff4ff"
          />
          <path
            d="M203.509,229.477h-4.509c-1.184,0-2.145.96-2.145,2.144v4.509c0,1.185.961,2.145,2.145,2.145h4.509c1.185,0,2.145-.96,2.145-2.145v-4.509c0-1.184-.96-2.144-2.145-2.144Z"
            fill="#3bc9ff"
          />
          <path
            id="eyVlpNXOI46220"
            d="M171.756,281.057h-1.43c-.29-1.296-.791-2.534-1.484-3.666l1.008-1.027c.108-.103.194-.226.253-.363.059-.138.089-.285.089-.434c0-.15-.03-.297-.089-.434s-.145-.261-.253-.364l-2.255-2.273c-.212-.209-.499-.326-.797-.326s-.585.117-.797.326l-1.027,1.027c-1.105-.681-2.312-1.182-3.574-1.485v-1.448c0-.148-.03-.295-.087-.432-.058-.137-.142-.261-.247-.365-.106-.104-.232-.186-.369-.241-.138-.055-.285-.083-.434-.08h-3.208c-.148-.003-.295.025-.433.08s-.263.137-.369.241-.19.228-.247.365c-.058.137-.087.284-.087.432v1.448c-1.263.303-2.469.804-3.575,1.485l-1.026-1.027c-.213-.209-.499-.326-.797-.326-.299,0-.585.117-.798.326l-2.254,2.457c-.21.212-.327.499-.327.797s.117.585.327.797l1.008,1.027c-.693,1.132-1.195,2.371-1.485,3.666h-1.43c-.301,0-.59.12-.803.333s-.333.502-.333.803v3.208c0,.149.029.295.087.432.057.137.141.261.247.365s.231.186.369.242c.138.055.285.082.433.079h1.412c.292,1.295.793,2.533,1.484,3.666l-1.008,1.009c-.209.212-.326.499-.326.797s.117.585.326.797l2.255,2.273c.212.21.499.327.797.327.299,0,.585-.117.798-.327l1.026-1.008c1.106.675,2.313,1.17,3.575,1.466v1.247c0,.301.119.59.332.804.214.213.503.332.804.332h3.208c.301,0,.59-.119.803-.332.214-.214.333-.503.333-.804v-1.448c1.262-.297,2.468-.792,3.575-1.467l1.026,1.009c.213.209.499.326.798.326.298,0,.584-.117.797-.326l2.255-2.273c.108-.103.194-.227.253-.364s.089-.285.089-.434-.03-.297-.089-.434-.145-.26-.253-.363l-1.009-1.008c.692-1.133,1.193-2.372,1.485-3.666h1.43c.148.002.296-.025.433-.08.138-.055.264-.137.369-.241.106-.104.19-.228.248-.365.057-.137.086-.284.086-.432v-3.098c.013-.156-.007-.312-.057-.459s-.13-.283-.235-.398-.232-.208-.374-.272c-.142-.063-.296-.097-.452-.099Zm-13.088,8.56c-1.135.003-2.246-.33-3.192-.958s-1.684-1.523-2.121-2.571-.554-2.202-.334-3.317c.219-1.114.764-2.138,1.566-2.942.801-.804,1.824-1.352,2.937-1.575s2.268-.111,3.317.323c1.05.434,1.947,1.169,2.578,2.113s.968,2.054.968,3.189c0,1.519-.601,2.975-1.673,4.051-1.073,1.075-2.527,1.682-4.046,1.687Z"
            fill="#eaeeee"
          />
          <path
            d="M414.398,37.7217v262.9113"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="1.06316"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2.11,6.34"
          />
          <path
            d="M271.129,109.705h171.498"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="1.06316"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2.11,6.34"
          />
          <path
            d="M380.833,340.906h-180.498c-10.741,0-19.448,8.708-19.448,19.449v38.86c0,10.741,8.707,19.448,19.448,19.448h180.498c10.741,0,19.449-8.707,19.449-19.448v-38.86c0-10.741-8.708-19.449-19.449-19.449Z"
            fill="none"
            stroke="#f9fbfc"
            strokeWidth="1.06316"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M192.692,341.602h-8.34v8.34h8.34v-8.34Z" fill="#f9fbfc" />
          <path d="M192.692,409.277h-8.34v8.341h8.34v-8.341Z" fill="#f9fbfc" />
          <path d="M396.817,341.602h-8.34v8.34h8.34v-8.34Z" fill="#f9fbfc" />
          <path d="M396.817,409.277h-8.34v8.341h8.34v-8.341Z" fill="#f9fbfc" />
          <path
            d="M126.023,52.7706h-69.4169c-1.6578,0-3.2476-.6586-4.4199-1.8308-1.1722-1.1722-1.8307-2.7621-1.8307-4.4198v0c.0145-1.6483.6794-3.224,1.8501-4.3844c1.1706-1.1603,2.7522-1.8113,4.4005-1.8113h69.4169c1.654-.0097,3.245.637,4.424,1.7984c1.179,1.1613,1.849,2.7427,1.863,4.3973v0c0,.8239-.163,1.6397-.479,2.4005-.317.7607-.78,1.4514-1.365,2.0323-.584.5809-1.277,1.0406-2.04,1.3526-.762.3119-1.579.47-2.403.4652Z"
            fill="none"
            stroke="url(#eyVlpNXOI46228-stroke)"
            strokeWidth="2.07132"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M291.969,283.97h-69.435c-1.658,0-3.248-.659-4.42-1.831s-1.831-2.762-1.831-4.42v0c0-1.657.659-3.247,1.831-4.419c1.172-1.173,2.762-1.831,4.42-1.831h69.435c1.658,0,3.248.658,4.42,1.831c1.172,1.172,1.831,2.762,1.831,4.419c0,1.658-.659,3.248-1.831,4.42s-2.762,1.831-4.42,1.831Z"
            fill="none"
            stroke="url(#eyVlpNXOI46229-stroke)"
            strokeWidth="2.07132"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g style={{ mixBlendMode: 'multiply' }} opacity="0.43">
            <path
              d="M352.277,334.802c16.319,0,29.548-13.229,29.548-29.549c0-16.319-13.229-29.548-29.548-29.548s-29.548,13.229-29.548,29.548c0,16.32,13.229,29.549,29.548,29.549Z"
              opacity="0.02"
              fill="#212972"
            />
            <path
              d="M352.276,334.362c16.077,0,29.109-13.032,29.109-29.108s-13.032-29.108-29.109-29.108c-16.076,0-29.108,13.032-29.108,29.108s13.032,29.108,29.108,29.108Z"
              opacity="0.04"
              fill="#212972"
            />
            <path
              d="M352.278,333.921c15.833,0,28.668-12.835,28.668-28.668c0-15.834-12.835-28.669-28.668-28.669s-28.669,12.835-28.669,28.669c0,15.833,12.836,28.668,28.669,28.668Z"
              opacity="0.06"
              fill="#212972"
            />
            <path
              d="M352.277,333.482c15.591,0,28.229-12.639,28.229-28.229s-12.638-28.229-28.229-28.229c-15.59,0-28.228,12.639-28.228,28.229s12.638,28.229,28.228,28.229Z"
              opacity="0.08"
              fill="#212972"
            />
            <path
              d="M352.273,333.042c15.347,0,27.789-12.441,27.789-27.788c0-15.348-12.442-27.789-27.789-27.789s-27.789,12.441-27.789,27.789c0,15.347,12.442,27.788,27.789,27.788Z"
              opacity="0.1"
              fill="#212972"
            />
            <path
              d="M352.275,332.603c15.104,0,27.348-12.245,27.348-27.349s-12.244-27.349-27.348-27.349c-15.105,0-27.349,12.245-27.349,27.349s12.244,27.349,27.349,27.349Z"
              opacity="0.12"
              fill="#212972"
            />
            <path
              d="M352.274,332.161c14.861,0,26.909-12.047,26.909-26.908c0-14.862-12.048-26.909-26.909-26.909s-26.909,12.047-26.909,26.909c0,14.861,12.048,26.908,26.909,26.908Z"
              opacity="0.14"
              fill="#212972"
            />
            <path
              d="M352.276,331.722c14.618,0,26.468-11.851,26.468-26.469s-11.85-26.469-26.468-26.469c-14.619,0-26.469,11.851-26.469,26.469s11.85,26.469,26.469,26.469Z"
              opacity="0.16"
              fill="#212972"
            />
            <path
              d="M352.277,331.282c14.375,0,26.029-11.654,26.029-26.029c0-14.376-11.654-26.029-26.029-26.029s-26.029,11.653-26.029,26.029c0,14.375,11.654,26.029,26.029,26.029Z"
              opacity="0.18"
              fill="#212972"
            />
            <path
              d="M352.277,330.843c14.132,0,25.589-11.456,25.589-25.589c0-14.132-11.457-25.589-25.589-25.589-14.133,0-25.589,11.457-25.589,25.589c0,14.133,11.456,25.589,25.589,25.589Z"
              opacity="0.2"
              fill="#212972"
            />
            <path
              d="M352.276,330.402c13.89,0,25.149-11.26,25.149-25.149c0-13.89-11.259-25.149-25.149-25.149-13.889,0-25.149,11.259-25.149,25.149c0,13.889,11.26,25.149,25.149,25.149Z"
              opacity="0.22"
              fill="#212972"
            />
            <path
              d="M352.275,329.943c13.636,0,24.691-11.054,24.691-24.691c0-13.636-11.055-24.69-24.691-24.69-13.637,0-24.691,11.054-24.691,24.69c0,13.637,11.054,24.691,24.691,24.691Z"
              opacity="0.24"
              fill="#212972"
            />
            <path
              d="M352.276,329.504c13.394,0,24.251-10.858,24.251-24.251c0-13.394-10.857-24.251-24.251-24.251-13.393,0-24.251,10.857-24.251,24.251c0,13.393,10.858,24.251,24.251,24.251Z"
              opacity="0.25"
              fill="#212972"
            />
            <path
              d="M352.274,329.063c13.15,0,23.811-10.66,23.811-23.811c0-13.15-10.661-23.811-23.811-23.811-13.151,0-23.811,10.661-23.811,23.811c0,13.151,10.66,23.811,23.811,23.811Z"
              opacity="0.27"
              fill="#212972"
            />
            <path
              d="M352.273,328.625c12.908,0,23.372-10.464,23.372-23.371c0-12.908-10.464-23.371-23.372-23.371-12.907,0-23.371,10.463-23.371,23.371c0,12.907,10.464,23.371,23.371,23.371Z"
              opacity="0.29"
              fill="#212972"
            />
            <path
              d="M352.275,328.184c12.664,0,22.931-10.267,22.931-22.932c0-12.664-10.267-22.931-22.931-22.931-12.665,0-22.931,10.267-22.931,22.931c0,12.665,10.266,22.932,22.931,22.932Z"
              opacity="0.31"
              fill="#212972"
            />
            <path
              d="M352.276,327.744c12.422,0,22.492-10.069,22.492-22.491s-10.07-22.491-22.492-22.491c-12.421,0-22.491,10.069-22.491,22.491s10.07,22.491,22.491,22.491Z"
              opacity="0.33"
              fill="#212972"
            />
            <path
              d="M352.276,327.304c12.179,0,22.051-9.873,22.051-22.052c0-12.178-9.872-22.051-22.051-22.051s-22.051,9.873-22.051,22.051c0,12.179,9.872,22.052,22.051,22.052Z"
              opacity="0.35"
              fill="#212972"
            />
            <path
              d="M352.275,326.865c11.936,0,21.612-9.675,21.612-21.611s-9.676-21.611-21.612-21.611c-11.935,0-21.611,9.675-21.611,21.611s9.676,21.611,21.611,21.611Z"
              opacity="0.37"
              fill="#212972"
            />
            <path
              d="M352.275,326.424c11.693,0,21.171-9.479,21.171-21.171c0-11.693-9.478-21.172-21.171-21.172s-21.171,9.479-21.171,21.172c0,11.692,9.478,21.171,21.171,21.171Z"
              opacity="0.39"
              fill="#212972"
            />
            <path
              d="M352.276,325.984c11.45,0,20.732-9.282,20.732-20.732s-9.282-20.731-20.732-20.731c-11.449,0-20.731,9.281-20.731,20.731s9.282,20.732,20.731,20.732Z"
              opacity="0.41"
              fill="#212972"
            />
            <path
              d="M352.274,325.544c11.207,0,20.292-9.085,20.292-20.291c0-11.207-9.085-20.292-20.292-20.292s-20.292,9.085-20.292,20.292c0,11.206,9.085,20.291,20.292,20.291Z"
              opacity="0.43"
              fill="#212972"
            />
            <path
              d="M352.274,325.106c10.963,0,19.851-8.888,19.851-19.852s-8.888-19.852-19.851-19.852c-10.964,0-19.852,8.888-19.852,19.852s8.888,19.852,19.852,19.852Z"
              opacity="0.45"
              fill="#212972"
            />
            <path
              d="M352.275,324.664c10.721,0,19.412-8.691,19.412-19.411c0-10.721-8.691-19.412-19.412-19.412s-19.412,8.691-19.412,19.412c0,10.72,8.691,19.411,19.412,19.411Z"
              opacity="0.47"
              fill="#212972"
            />
            <path
              d="M352.277,324.224c10.477,0,18.971-8.494,18.971-18.972s-8.494-18.972-18.971-18.972c-10.478,0-18.972,8.494-18.972,18.972s8.494,18.972,18.972,18.972Z"
              opacity="0.49"
              fill="#212972"
            />
            <path
              d="M352.274,323.786c10.235,0,18.532-8.298,18.532-18.532c0-10.235-8.297-18.532-18.532-18.532s-18.532,8.297-18.532,18.532c0,10.234,8.297,18.532,18.532,18.532Z"
              opacity="0.51"
              fill="#212972"
            />
            <path
              d="M352.276,323.346c9.991,0,18.092-8.1,18.092-18.092s-8.101-18.092-18.092-18.092c-9.992,0-18.092,8.1-18.092,18.092s8.1,18.092,18.092,18.092Z"
              opacity="0.53"
              fill="#212972"
            />
            <path
              d="M352.274,322.888c9.739,0,17.634-7.895,17.634-17.634s-7.895-17.634-17.634-17.634c-9.738,0-17.633,7.895-17.633,17.634s7.895,17.634,17.633,17.634Z"
              opacity="0.55"
              fill="#212972"
            />
            <path
              d="M352.276,322.447c9.496,0,17.194-7.698,17.194-17.194c0-9.495-7.698-17.193-17.194-17.193s-17.194,7.698-17.194,17.193c0,9.496,7.698,17.194,17.194,17.194Z"
              opacity="0.57"
              fill="#212972"
            />
            <path
              d="M352.277,322.006c9.253,0,16.754-7.501,16.754-16.754s-7.501-16.754-16.754-16.754-16.754,7.501-16.754,16.754s7.501,16.754,16.754,16.754Z"
              opacity="0.59"
              fill="#212972"
            />
            <path
              d="M352.277,321.567c9.01,0,16.314-7.304,16.314-16.314s-7.304-16.314-16.314-16.314-16.314,7.304-16.314,16.314s7.304,16.314,16.314,16.314Z"
              opacity="0.61"
              fill="#212972"
            />
            <path
              d="M352.274,321.128c8.767,0,15.874-7.107,15.874-15.874s-7.107-15.874-15.874-15.874-15.874,7.107-15.874,15.874s7.107,15.874,15.874,15.874Z"
              opacity="0.63"
              fill="#212972"
            />
            <path
              d="M352.276,320.688c8.524,0,15.434-6.911,15.434-15.435s-6.91-15.434-15.434-15.434-15.434,6.91-15.434,15.434s6.91,15.435,15.434,15.435Z"
              opacity="0.65"
              fill="#212972"
            />
            <path
              d="M352.275,320.246c8.281,0,14.995-6.713,14.995-14.994s-6.714-14.994-14.995-14.994-14.994,6.713-14.994,14.994s6.713,14.994,14.994,14.994Z"
              opacity="0.67"
              fill="#212972"
            />
            <path
              d="M352.275,319.808c8.038,0,14.554-6.516,14.554-14.555c0-8.038-6.516-14.554-14.554-14.554s-14.554,6.516-14.554,14.554c0,8.039,6.516,14.555,14.554,14.555Z"
              opacity="0.69"
              fill="#212972"
            />
            <path
              d="M352.274,319.367c7.796,0,14.115-6.319,14.115-14.114s-6.319-14.114-14.115-14.114c-7.795,0-14.114,6.319-14.114,14.114s6.319,14.114,14.114,14.114Z"
              opacity="0.71"
              fill="#212972"
            />
            <path
              d="M352.276,318.928c7.552,0,13.674-6.122,13.674-13.675c0-7.552-6.122-13.674-13.674-13.674s-13.674,6.122-13.674,13.674c0,7.553,6.122,13.675,13.674,13.675Z"
              opacity="0.73"
              fill="#212972"
            />
            <path
              d="M352.277,318.487c7.31,0,13.235-5.926,13.235-13.235s-5.925-13.234-13.235-13.234c-7.309,0-13.234,5.925-13.234,13.234s5.925,13.235,13.234,13.235Z"
              opacity="0.75"
              fill="#212972"
            />
            <path
              d="M352.277,318.048c7.066,0,12.794-5.728,12.794-12.794c0-7.067-5.728-12.795-12.794-12.795s-12.795,5.728-12.795,12.795c0,7.066,5.729,12.794,12.795,12.794Z"
              opacity="0.76"
              fill="#212972"
            />
            <path
              d="M352.275,317.608c6.823,0,12.354-5.532,12.354-12.355s-5.531-12.355-12.354-12.355c-6.824,0-12.355,5.532-12.355,12.355s5.531,12.355,12.355,12.355Z"
              opacity="0.78"
              fill="#212972"
            />
            <path
              d="M364.191,305.253c-.011,2.354-.719,4.652-2.035,6.604s-3.18,3.471-5.359,4.364c-2.178.894-4.571,1.122-6.879.656s-4.426-1.605-6.086-3.274c-1.661-1.668-2.79-3.791-3.246-6.101-.455-2.31-.216-4.702.688-6.876.903-2.174,2.43-4.032,4.388-5.339c1.958-1.306,4.26-2.004,6.614-2.004c1.569,0,3.123.31,4.572.912c1.449.603,2.765,1.485,3.872,2.597c1.107,1.113,1.984,2.433,2.579,3.884.596,1.452.899,3.008.892,4.577Z"
              opacity="0.8"
              fill="#212972"
            />
            <path
              d="M363.731,305.253c.003,2.271-.667,4.492-1.926,6.382-1.26,1.89-3.052,3.364-5.149,4.234-2.098.871-4.407,1.1-6.634.658-2.228-.442-4.274-1.536-5.88-3.141-1.606-1.606-2.699-3.653-3.141-5.88-.442-2.228-.214-4.537.657-6.634s2.345-3.889,4.234-5.149c1.89-1.259,4.111-1.93,6.382-1.926c3.039,0,5.953,1.207,8.101,3.355c2.149,2.149,3.356,5.063,3.356,8.101Z"
              opacity="0.82"
              fill="#212972"
            />
            <path
              d="M363.274,305.253c0,2.175-.645,4.302-1.854,6.11-1.208,1.809-2.926,3.219-4.936,4.051-2.009.832-4.221,1.05-6.354.626-2.134-.424-4.093-1.472-5.631-3.01-1.539-1.538-2.586-3.498-3.01-5.631-.425-2.134-.207-4.345.626-6.355.832-2.009,2.242-3.727,4.05-4.936c1.809-1.208,3.935-1.853,6.111-1.853c2.916,0,5.714,1.159,7.776,3.221c2.063,2.063,3.222,4.86,3.222,7.777Z"
              opacity="0.84"
              fill="#212972"
            />
            <path
              d="M362.854,305.253c.003,2.097-.615,4.148-1.778,5.893-1.163,1.746-2.817,3.106-4.754,3.911-1.937.804-4.069,1.015-6.126.607-2.056-.408-3.946-1.418-5.429-2.901-1.483-1.482-2.492-3.372-2.9-5.429s-.197-4.189.607-6.125c.804-1.937,2.165-3.592,3.91-4.754c1.745-1.163,3.796-1.782,5.893-1.778c2.805,0,5.496,1.114,7.479,3.098c1.984,1.983,3.098,4.673,3.098,7.478Z"
              opacity="0.86"
              fill="#212972"
            />
            <path
              d="M362.412,305.253c0,2.005-.595,3.965-1.708,5.631-1.114,1.667-2.697,2.967-4.55,3.734-1.852.767-3.89.968-5.856.577-1.967-.391-3.773-1.357-5.19-2.774-1.418-1.418-2.383-3.224-2.775-5.191-.391-1.966-.19-4.004.577-5.856.767-1.853,2.067-3.436,3.734-4.549c1.667-1.114,3.626-1.709,5.631-1.709c2.689,0,5.267,1.068,7.168,2.969s2.969,4.479,2.969,7.168Z"
              opacity="0.88"
              fill="#212972"
            />
            <path
              d="M361.974,305.253c0,1.918-.569,3.793-1.635,5.388-1.065,1.594-2.58,2.837-4.351,3.571-1.772.734-3.722.926-5.603.552s-3.609-1.298-4.965-2.654-2.279-3.084-2.654-4.965c-.374-1.881-.182-3.831.552-5.602.734-1.772,1.977-3.287,3.572-4.352c1.594-1.066,3.469-1.634,5.387-1.634c2.572,0,5.038,1.021,6.856,2.84c1.819,1.818,2.841,4.285,2.841,6.856Z"
              opacity="0.9"
              fill="#212972"
            />
            <path
              d="M361.533,305.253c0,1.831-.543,3.621-1.56,5.143s-2.463,2.709-4.154,3.41c-1.692.7-3.553.883-5.349.526-1.795-.357-3.445-1.239-4.739-2.533-1.295-1.295-2.176-2.944-2.534-4.74-.357-1.795-.173-3.657.527-5.348.701-1.692,1.887-3.137,3.41-4.154c1.522-1.018,3.312-1.56,5.142-1.56c1.219-.013,2.429.218,3.557.679c1.129.461,2.154,1.142,3.016,2.005.862.862,1.544,1.887,2.004,3.015.461,1.129.692,2.338.68,3.557Z"
              opacity="0.92"
              fill="#212972"
            />
            <path
              d="M361.095,305.252c0,1.744-.517,3.449-1.486,4.899s-2.346,2.58-3.957,3.247-3.384.842-5.094.502c-1.711-.34-3.282-1.18-4.515-2.413s-2.072-2.804-2.413-4.515c-.34-1.71-.165-3.483.502-5.094s1.798-2.988,3.247-3.957c1.45-.968,3.155-1.485,4.899-1.485c2.338,0,4.581.928,6.234,2.582c1.654,1.653,2.583,3.896,2.583,6.234Z"
              opacity="0.94"
              fill="#212972"
            />
            <path
              d="M360.654,305.253c.014,1.66-.464,3.286-1.376,4.674-.912,1.387-2.215,2.472-3.744,3.117s-3.216.822-4.846.507-3.129-1.107-4.308-2.275c-1.179-1.169-1.984-2.661-2.313-4.288s-.168-3.315.464-4.85s1.705-2.848,3.084-3.772c1.38-.924,3.002-1.417,4.662-1.417c2.209,0,4.329.873,5.898,2.428s2.46,3.667,2.479,5.876Z"
              opacity="0.96"
              fill="#212972"
            />
            <path
              d="M360.21,305.253c0,1.57-.466,3.105-1.338,4.41s-2.111,2.323-3.562,2.923c-1.45.601-3.046.758-4.585.452-1.54-.306-2.954-1.062-4.064-2.172s-1.866-2.525-2.173-4.064c-.306-1.54-.149-3.136.452-4.586s1.618-2.69,2.923-3.562c1.306-.872,2.84-1.338,4.41-1.338c1.042,0,2.074.206,3.037.605.963.398,1.838.983,2.575,1.72s1.322,1.612,1.721,2.575.604,1.995.604,3.037Z"
              opacity="0.98"
              fill="#212972"
            />
            <path
              d="M359.772,305.253c0,1.483-.44,2.932-1.264,4.165s-1.995,2.194-3.365,2.761c-1.369.568-2.877.716-4.331.427s-2.79-1.003-3.839-2.052c-1.048-1.048-1.762-2.384-2.052-3.838-.289-1.455-.14-2.962.427-4.332s1.528-2.541,2.761-3.365c1.233-.823,2.683-1.263,4.165-1.263c1.989,0,3.896.79,5.302,2.196s2.196,3.313,2.196,5.301Z"
              fill="#212972"
            />
          </g>
          <g id="eyVlpNXOI46282" transform="matrix(0 0 0 0 347.050995 287.727997)">
            <path
              d="M347.051,312.254c13.546,0,24.526-10.981,24.526-24.526s-10.98-24.526-24.526-24.526c-13.545,0-24.526,10.981-24.526,24.526s10.981,24.526,24.526,24.526Z"
              fill="url(#eyVlpNXOI46283-fill)"
            />
            <path
              d="M341.15,287.784v-6.416c-.007-.365.084-.726.263-1.045.178-.319.438-.585.753-.772.314-.186.673-.285,1.038-.288.366-.003.726.091,1.043.272l5.499,3.226l5.5,3.208c.311.183.57.444.75.757.179.314.274.669.274,1.03c0,.362-.095.717-.274,1.03-.18.314-.439.575-.75.757l-5.5,3.208-5.499,3.208c-.316.187-.677.286-1.045.286s-.729-.098-1.046-.286c-.317-.187-.577-.456-.754-.779-.177-.322-.264-.686-.252-1.054v-6.342Z"
              fill="#eaeeee"
            />
          </g>
          <path
            d="M364.169,361.38h-159.693c-4.981,0-9.019,4.038-9.019,9.018v11.823c0,4.981,4.038,9.019,9.019,9.019h159.693c4.981,0,9.018-4.038,9.018-9.019v-11.823c0-4.98-4.037-9.018-9.018-9.018Z"
            fill="#454c68"
          />
          <path
            id="eyVlpNXOI46286"
            d="M364.172,361.38h-42.013c-4.981,0-9.018,4.038-9.018,9.018v11.823c0,4.981,4.037,9.019,9.018,9.019h42.013c4.981,0,9.019-4.038,9.019-9.019v-11.823c0-4.98-4.038-9.018-9.019-9.018Z"
            transform="translate(-120.449 0)"
            fill="url(#eyVlpNXOI46286-fill)"
          />
          <path
            id="eyVlpNXOI46287"
            d="M25.6298,55.7773c5.1124,0,9.2568-4.1445,9.2568-9.2568s-4.1444-9.2568-9.2568-9.2568-9.2568,4.1444-9.2568,9.2568s4.1445,9.2568,9.2568,9.2568Z"
            transform="matrix(0 0 0 0 25.6298 46.5205)"
            fill="url(#eyVlpNXOI46287-fill)"
          />
          <path
            id="eyVlpNXOI46288"
            d="M422.719,377.236c0,.961-.285,1.9-.819,2.699-.533.799-1.292,1.422-2.18,1.789-.887.368-1.864.464-2.806.277-.942-.188-1.808-.65-2.487-1.33-.68-.679-1.142-1.545-1.33-2.487-.187-.942-.091-1.919.277-2.806.367-.888.99-1.647,1.789-2.18.799-.534,1.738-.819,2.698-.819c1.289,0,2.524.512,3.435,1.423s1.423,2.146,1.423,3.434Z"
            transform="matrix(0 0 0 0 417.861465 377.236542)"
            fill="url(#eyVlpNXOI46288-fill)"
          />
          <path
            id="eyVlpNXOI46289"
            d="M460.901,383.707c-.011,1.922-.592,3.798-1.67,5.39-1.077,1.592-2.602,2.828-4.383,3.553-1.78.724-3.735.905-5.618.518s-3.609-1.324-4.959-2.692c-1.35-1.369-2.264-3.107-2.626-4.994-.362-1.888-.156-3.841.592-5.612.748-1.77,2.004-3.279,3.61-4.335c1.607-1.057,3.49-1.613,5.412-1.598c2.573.019,5.034,1.059,6.842,2.891c1.807,1.831,2.814,4.305,2.8,6.879Z"
            transform="matrix(0 0 0 0 452.161418 383.651733)"
            fill="url(#eyVlpNXOI46289-fill)"
          />
          <path
            d="M159.347,405.665v-55.083c0-.972-.386-1.904-1.073-2.592-.688-.687-1.62-1.074-2.593-1.074-11.97,0-23.451-4.754-31.917-13.217-8.467-8.462-13.225-19.941-13.23-31.912c0-.972-.386-1.905-1.074-2.592-.687-.688-1.62-1.074-2.592-1.074h-54.991c-.9723,0-1.9048.386-2.5923,1.074-.6875.687-1.0738,1.62-1.0738,2.592c0,14.113,2.78,28.087,8.1811,41.125c5.4011,13.037,13.3176,24.884,23.2974,34.862s21.8276,17.892,34.8666,23.291c13.038,5.399,27.013,8.177,41.125,8.174.957.001,1.876-.373,2.561-1.041s1.081-1.577,1.105-2.533Z"
            fill="url(#eyVlpNXOI46290-fill)"
          />
          <path
            d="M350.971,19.5562v28.247c0,.4861.193.9524.537,1.2961.343.3438.81.5369,1.296.5369c6.137,0,12.022,2.4366,16.364,6.7743c4.341,4.3378,6.782,10.2216,6.787,16.3585c0,.4862.193.9524.537,1.2962.344.3437.81.5369,1.296.5369h28.229c.486,0,.952-.1932,1.296-.5369.343-.3438.537-.81.537-1.2962c0-14.5844-5.794-28.5716-16.107-38.8844-10.313-10.3127-24.3-16.1064-38.884-16.1064-.241-.0073-.481.0328-.706.1183s-.431.2143-.607.3794c-.175.1652-.316.3632-.415.5829s-.153.4567-.16.6974Z"
            fill="url(#eyVlpNXOI46291-fill)"
          />
        </g>
        <clipPath id="eyVlpNXOI46292">
          <rect
            width="506.667"
            height="440"
            rx="0"
            ry="0"
            transform="translate(.332031 0)"
            fill="#fff"
          />
        </clipPath>
      </g>
    </svg>
  );
};

export default DesignHero;
