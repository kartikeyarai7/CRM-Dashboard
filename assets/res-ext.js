/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.18.1
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e((t = t || self).jQuery);
})(this, function (t) {
  "use strict";
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function n(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r = function (t) {
      return t && t.Math == Math && t;
    },
    o = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || Function("return this")(),
    i = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    u = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          }
        }).a
      );
    }),
    c = {}.propertyIsEnumerable,
    f = Object.getOwnPropertyDescriptor,
    a = {
      f:
        f && !c.call({ 1: 2 }, 1)
          ? function (t) {
              var e = f(this, t);
              return !!e && e.enumerable;
            }
          : c
    },
    l = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    },
    s = {}.toString,
    p = function (t) {
      return s.call(t).slice(8, -1);
    },
    y = "".split,
    h = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == p(t) ? y.call(t, "") : Object(t);
        }
      : Object,
    b = function (t) {
      return h(
        (function (t) {
          if (null == t) throw TypeError("Can't call method on " + t);
          return t;
        })(t)
      );
    },
    g = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    d = function (t, e) {
      if (!g(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !g((r = n.call(t)))) return r;
      if ("function" == typeof (n = t.valueOf) && !g((r = n.call(t)))) return r;
      if (!e && "function" == typeof (n = t.toString) && !g((r = n.call(t)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    v = {}.hasOwnProperty,
    m = function (t, e) {
      return v.call(t, e);
    },
    w = o.document,
    S = g(w) && g(w.createElement),
    O =
      !u &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(((t = "div"), S ? w.createElement(t) : {}), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
        var t;
      }),
    j = Object.getOwnPropertyDescriptor,
    A = {
      f: u
        ? j
        : function (t, e) {
            if (((t = b(t)), (e = d(e, !0)), O))
              try {
                return j(t, e);
              } catch (t) {}
            if (m(t, e)) return l(!a.f.call(t, e), t[e]);
          }
    },
    P = function (t) {
      if (!g(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    T = Object.defineProperty,
    E = {
      f: u
        ? T
        : function (t, e, n) {
            if ((P(t), (e = d(e, !0)), P(n), O))
              try {
                return T(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          }
    },
    x = u
      ? function (t, e, n) {
          return E.f(t, e, l(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    M = function (t, e) {
      try {
        x(o, t, e);
      } catch (n) {
        o[t] = e;
      }
      return e;
    },
    z = "__core-js_shared__",
    C = o[z] || M(z, {}),
    V = Function.toString;
  "function" != typeof C.inspectSource &&
    (C.inspectSource = function (t) {
      return V.call(t);
    });
  var k,
    I,
    _,
    F,
    L = C.inspectSource,
    N = o.WeakMap,
    q = "function" == typeof N && /native code/.test(L(N)),
    $ = n(function (t) {
      (t.exports = function (t, e) {
        return C[t] || (C[t] = void 0 !== e ? e : {});
      })("versions", []).push({ version: "3.6.0", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    B = 0,
    D = Math.random(),
    G = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++B + D).toString(36);
    },
    W = $("keys"),
    K = {},
    Q = o.WeakMap;
  if (q) {
    var R = new Q(),
      Y = R.get,
      H = R.has,
      J = R.set;
    (k = function (t, e) {
      return J.call(R, t, e), e;
    }),
      (I = function (t) {
        return Y.call(R, t) || {};
      }),
      (_ = function (t) {
        return H.call(R, t);
      });
  } else {
    var U = W[(F = "state")] || (W[F] = G(F));
    (K[U] = !0),
      (k = function (t, e) {
        return x(t, U, e), e;
      }),
      (I = function (t) {
        return m(t, U) ? t[U] : {};
      }),
      (_ = function (t) {
        return m(t, U);
      });
  }
  var X,
    Z,
    tt = {
      set: k,
      get: I,
      has: _,
      enforce: function (t) {
        return _(t) ? I(t) : k(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!g(e) || (n = I(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
    et = n(function (t) {
      var e = tt.get,
        n = tt.enforce,
        r = String(String).split("String");
      (t.exports = function (t, e, i, u) {
        var c = !!u && !!u.unsafe,
          f = !!u && !!u.enumerable,
          a = !!u && !!u.noTargetGet;
        "function" == typeof i && ("string" != typeof e || m(i, "name") || x(i, "name", e), (n(i).source = r.join("string" == typeof e ? e : ""))), t !== o ? (c ? !a && t[e] && (f = !0) : delete t[e], f ? (t[e] = i) : x(t, e, i)) : f ? (t[e] = i) : M(e, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || L(this);
      });
    }),
    nt = o,
    rt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    ot = function (t, e) {
      return arguments.length < 2 ? rt(nt[t]) || rt(o[t]) : (nt[t] && nt[t][e]) || (o[t] && o[t][e]);
    },
    it = Math.ceil,
    ut = Math.floor,
    ct = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ut : it)(t);
    },
    ft = Math.min,
    at = function (t) {
      return t > 0 ? ft(ct(t), 9007199254740991) : 0;
    },
    lt = Math.max,
    st = Math.min,
    pt = function (t, e) {
      var n = ct(t);
      return n < 0 ? lt(n + e, 0) : st(n, e);
    },
    yt = function (t) {
      return function (e, n, r) {
        var o,
          i = b(e),
          u = at(i.length),
          c = pt(r, u);
        if (t && n != n) {
          for (; u > c; ) if ((o = i[c++]) != o) return !0;
        } else for (; u > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
        return !t && -1;
      };
    },
    ht = { includes: yt(!0), indexOf: yt(!1) }.indexOf,
    bt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype"),
    gt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return (function (t, e) {
            var n,
              r = b(t),
              o = 0,
              i = [];
            for (n in r) !m(K, n) && m(r, n) && i.push(n);
            for (; e.length > o; ) m(r, (n = e[o++])) && (~ht(i, n) || i.push(n));
            return i;
          })(t, bt);
        }
    },
    dt = { f: Object.getOwnPropertySymbols },
    vt =
      ot("Reflect", "ownKeys") ||
      function (t) {
        var e = gt.f(P(t)),
          n = dt.f;
        return n ? e.concat(n(t)) : e;
      },
    mt = function (t, e) {
      for (var n = vt(e), r = E.f, o = A.f, i = 0; i < n.length; i++) {
        var u = n[i];
        m(t, u) || r(t, u, o(e, u));
      }
    },
    wt = /#|\.prototype\./,
    St = function (t, e) {
      var n = jt[Ot(t)];
      return n == Pt || (n != At && ("function" == typeof e ? i(e) : !!e));
    },
    Ot = (St.normalize = function (t) {
      return String(t).replace(wt, ".").toLowerCase();
    }),
    jt = (St.data = {}),
    At = (St.NATIVE = "N"),
    Pt = (St.POLYFILL = "P"),
    Tt = St,
    Et = A.f,
    xt =
      Array.isArray ||
      function (t) {
        return "Array" == p(t);
      },
    Mt = function (t, e, n) {
      var r = d(e);
      r in t ? E.f(t, r, l(0, n)) : (t[r] = n);
    },
    zt =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      }),
    Ct = zt && !Symbol.sham && "symbol" == typeof Symbol(),
    Vt = $("wks"),
    kt = o.Symbol,
    It = Ct ? kt : G,
    _t = function (t) {
      return m(Vt, t) || (zt && m(kt, t) ? (Vt[t] = kt[t]) : (Vt[t] = It("Symbol." + t))), Vt[t];
    },
    Ft = ot("navigator", "userAgent") || "",
    Lt = o.process,
    Nt = Lt && Lt.versions,
    qt = Nt && Nt.v8;
  qt ? (Z = (X = qt.split("."))[0] + X[1]) : Ft && (!(X = Ft.match(/Edge\/(\d+)/)) || X[1] >= 74) && (X = Ft.match(/Chrome\/(\d+)/)) && (Z = X[1]);
  var $t,
    Bt = Z && +Z,
    Dt = _t("species"),
    Gt = _t("species"),
    Wt = [].slice,
    Kt = Math.max;
  !(function (t, e) {
    var n,
      r,
      i,
      u,
      c,
      f = t.target,
      a = t.global,
      l = t.stat;
    if ((n = a ? o : l ? o[f] || M(f, {}) : (o[f] || {}).prototype))
      for (r in e) {
        if (((u = e[r]), (i = t.noTargetGet ? (c = Et(n, r)) && c.value : n[r]), !Tt(a ? r : f + (l ? "." : "#") + r, t.forced) && void 0 !== i)) {
          if (typeof u == typeof i) continue;
          mt(u, i);
        }
        (t.sham || (i && i.sham)) && x(u, "sham", !0), et(n, r, u, t);
      }
  })(
    {
      target: "Array",
      proto: !0,
      forced:
        (($t = "slice"),
        !(
          Bt >= 51 ||
          !i(function () {
            var t = [];
            return (
              ((t.constructor = {})[Dt] = function () {
                return { foo: 1 };
              }),
              1 !== t[$t](Boolean).foo
            );
          })
        ))
    },
    {
      slice: function (t, e) {
        var n,
          r,
          o,
          i = b(this),
          u = at(i.length),
          c = pt(t, u),
          f = pt(void 0 === e ? u : e, u);
        if (xt(i) && ("function" != typeof (n = i.constructor) || (n !== Array && !xt(n.prototype)) ? g(n) && null === (n = n[Gt]) && (n = void 0) : (n = void 0), n === Array || void 0 === n)) return Wt.call(i, c, f);
        for (r = new (void 0 === n ? Array : n)(Kt(f - c, 0)), o = 0; c < f; c++, o++) c in i && Mt(r, o, i[c]);
        return (r.length = o), r;
      }
    }
  );
  var Qt = function (t) {
      return void 0 !== t.$el.data("resizableColumns");
    },
    Rt = function (t) {
      !t.options.resizable || t.options.cardView || Qt(t) || t.$el.resizableColumns({ store: window.store });
    },
    Yt = function (t) {
      Qt(t) && t.$el.data("resizableColumns").destroy();
    },
    Ht = function (t) {
      Yt(t), Rt(t);
    };
  t.extend(t.fn.bootstrapTable.defaults, { resizable: !1 });
  var Jt = t.fn.bootstrapTable.Constructor,
    Ut = Jt.prototype.initBody,
    Xt = Jt.prototype.toggleView,
    Zt = Jt.prototype.resetView;
  (Jt.prototype.initBody = function () {
    for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    Ut.apply(this, Array.prototype.slice.apply(n)),
      t.$el.off("column-switch.bs.table page-change.bs.table").on("column-switch.bs.table page-change.bs.table", function () {
        Ht(t);
      });
  }),
    (Jt.prototype.toggleView = function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      Xt.apply(this, Array.prototype.slice.apply(e)), this.options.resizable && this.options.cardView && Yt(this);
    }),
    (Jt.prototype.resetView = function () {
      for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      Zt.apply(this, Array.prototype.slice.apply(n)),
        this.options.resizable &&
          setTimeout(function () {
            Rt(t);
          }, 100);
    });
});
