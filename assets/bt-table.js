/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.18.1
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = e(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], e) : ((t = t || self).BootstrapTable = e(t.jQuery));
})(this, function (t) {
  "use strict";
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function i(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var n = function (t) {
      return t && t.Math == Math && t;
    },
    o = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
    r = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    a = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          }
        }).a
      );
    }),
    s = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    c = {
      f:
        l && !s.call({ 1: 2 }, 1)
          ? function (t) {
              var e = l(this, t);
              return !!e && e.enumerable;
            }
          : s
    },
    h = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    },
    u = {}.toString,
    d = function (t) {
      return u.call(t).slice(8, -1);
    },
    p = "".split,
    f = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == d(t) ? p.call(t, "") : Object(t);
        }
      : Object,
    g = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    v = function (t) {
      return f(g(t));
    },
    b = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    y = function (t, e) {
      if (!b(t)) return t;
      var i, n;
      if (e && "function" == typeof (i = t.toString) && !b((n = i.call(t)))) return n;
      if ("function" == typeof (i = t.valueOf) && !b((n = i.call(t)))) return n;
      if (!e && "function" == typeof (i = t.toString) && !b((n = i.call(t)))) return n;
      throw TypeError("Can't convert object to primitive value");
    },
    m = {}.hasOwnProperty,
    w = function (t, e) {
      return m.call(t, e);
    },
    S = o.document,
    x = b(S) && b(S.createElement),
    k = function (t) {
      return x ? S.createElement(t) : {};
    },
    O =
      !a &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(k("div"), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    C = Object.getOwnPropertyDescriptor,
    T = {
      f: a
        ? C
        : function (t, e) {
            if (((t = v(t)), (e = y(e, !0)), O))
              try {
                return C(t, e);
              } catch (t) {}
            if (w(t, e)) return h(!c.f.call(t, e), t[e]);
          }
    },
    P = function (t) {
      if (!b(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    I = Object.defineProperty,
    A = {
      f: a
        ? I
        : function (t, e, i) {
            if ((P(t), (e = y(e, !0)), P(i), O))
              try {
                return I(t, e, i);
              } catch (t) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
            return "value" in i && (t[e] = i.value), t;
          }
    },
    $ = a
      ? function (t, e, i) {
          return A.f(t, e, h(1, i));
        }
      : function (t, e, i) {
          return (t[e] = i), t;
        },
    R = function (t, e) {
      try {
        $(o, t, e);
      } catch (i) {
        o[t] = e;
      }
      return e;
    },
    E = "__core-js_shared__",
    j = o[E] || R(E, {}),
    N = Function.toString;
  "function" != typeof j.inspectSource &&
    (j.inspectSource = function (t) {
      return N.call(t);
    });
  var _,
    F,
    D,
    V = j.inspectSource,
    B = o.WeakMap,
    L = "function" == typeof B && /native code/.test(V(B)),
    H = i(function (t) {
      (t.exports = function (t, e) {
        return j[t] || (j[t] = void 0 !== e ? e : {});
      })("versions", []).push({ version: "3.6.0", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    M = 0,
    U = Math.random(),
    z = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++M + U).toString(36);
    },
    q = H("keys"),
    W = function (t) {
      return q[t] || (q[t] = z(t));
    },
    G = {},
    K = o.WeakMap;
  if (L) {
    var Y = new K(),
      J = Y.get,
      X = Y.has,
      Q = Y.set;
    (_ = function (t, e) {
      return Q.call(Y, t, e), e;
    }),
      (F = function (t) {
        return J.call(Y, t) || {};
      }),
      (D = function (t) {
        return X.call(Y, t);
      });
  } else {
    var Z = W("state");
    (G[Z] = !0),
      (_ = function (t, e) {
        return $(t, Z, e), e;
      }),
      (F = function (t) {
        return w(t, Z) ? t[Z] : {};
      }),
      (D = function (t) {
        return w(t, Z);
      });
  }
  var tt,
    et = {
      set: _,
      get: F,
      has: D,
      enforce: function (t) {
        return D(t) ? F(t) : _(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var i;
          if (!b(e) || (i = F(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return i;
        };
      }
    },
    it = i(function (t) {
      var e = et.get,
        i = et.enforce,
        n = String(String).split("String");
      (t.exports = function (t, e, r, a) {
        var s = !!a && !!a.unsafe,
          l = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet;
        "function" == typeof r && ("string" != typeof e || w(r, "name") || $(r, "name", e), (i(r).source = n.join("string" == typeof e ? e : ""))), t !== o ? (s ? !c && t[e] && (l = !0) : delete t[e], l ? (t[e] = r) : $(t, e, r)) : l ? (t[e] = r) : R(e, r);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || V(this);
      });
    }),
    nt = o,
    ot = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    rt = function (t, e) {
      return arguments.length < 2 ? ot(nt[t]) || ot(o[t]) : (nt[t] && nt[t][e]) || (o[t] && o[t][e]);
    },
    at = Math.ceil,
    st = Math.floor,
    lt = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? st : at)(t);
    },
    ct = Math.min,
    ht = function (t) {
      return t > 0 ? ct(lt(t), 9007199254740991) : 0;
    },
    ut = Math.max,
    dt = Math.min,
    pt = function (t, e) {
      var i = lt(t);
      return i < 0 ? ut(i + e, 0) : dt(i, e);
    },
    ft = function (t) {
      return function (e, i, n) {
        var o,
          r = v(e),
          a = ht(r.length),
          s = pt(n, a);
        if (t && i != i) {
          for (; a > s; ) if ((o = r[s++]) != o) return !0;
        } else for (; a > s; s++) if ((t || s in r) && r[s] === i) return t || s || 0;
        return !t && -1;
      };
    },
    gt = { includes: ft(!0), indexOf: ft(!1) },
    vt = gt.indexOf,
    bt = function (t, e) {
      var i,
        n = v(t),
        o = 0,
        r = [];
      for (i in n) !w(G, i) && w(n, i) && r.push(i);
      for (; e.length > o; ) w(n, (i = e[o++])) && (~vt(r, i) || r.push(i));
      return r;
    },
    yt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    mt = yt.concat("length", "prototype"),
    wt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return bt(t, mt);
        }
    },
    St = { f: Object.getOwnPropertySymbols },
    xt =
      rt("Reflect", "ownKeys") ||
      function (t) {
        var e = wt.f(P(t)),
          i = St.f;
        return i ? e.concat(i(t)) : e;
      },
    kt = function (t, e) {
      for (var i = xt(e), n = A.f, o = T.f, r = 0; r < i.length; r++) {
        var a = i[r];
        w(t, a) || n(t, a, o(e, a));
      }
    },
    Ot = /#|\.prototype\./,
    Ct = function (t, e) {
      var i = Pt[Tt(t)];
      return i == At || (i != It && ("function" == typeof e ? r(e) : !!e));
    },
    Tt = (Ct.normalize = function (t) {
      return String(t).replace(Ot, ".").toLowerCase();
    }),
    Pt = (Ct.data = {}),
    It = (Ct.NATIVE = "N"),
    At = (Ct.POLYFILL = "P"),
    $t = Ct,
    Rt = T.f,
    Et = function (t, e) {
      var i,
        n,
        r,
        a,
        s,
        l = t.target,
        c = t.global,
        h = t.stat;
      if ((i = c ? o : h ? o[l] || R(l, {}) : (o[l] || {}).prototype))
        for (n in e) {
          if (((a = e[n]), (r = t.noTargetGet ? (s = Rt(i, n)) && s.value : i[n]), !$t(c ? n : l + (h ? "." : "#") + n, t.forced) && void 0 !== r)) {
            if (typeof a == typeof r) continue;
            kt(a, r);
          }
          (t.sham || (r && r.sham)) && $(a, "sham", !0), it(i, n, a, t);
        }
    },
    jt =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      }),
    Nt = jt && !Symbol.sham && "symbol" == typeof Symbol(),
    _t =
      Array.isArray ||
      function (t) {
        return "Array" == d(t);
      },
    Ft = function (t) {
      return Object(g(t));
    },
    Dt =
      Object.keys ||
      function (t) {
        return bt(t, yt);
      },
    Vt = a
      ? Object.defineProperties
      : function (t, e) {
          P(t);
          for (var i, n = Dt(e), o = n.length, r = 0; o > r; ) A.f(t, (i = n[r++]), e[i]);
          return t;
        },
    Bt = rt("document", "documentElement"),
    Lt = W("IE_PROTO"),
    Ht = function () {},
    Mt = function (t) {
      return "<script>" + t + "</" + "script>";
    },
    Ut = function () {
      try {
        tt = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      Ut = tt
        ? (function (t) {
            t.write(Mt("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(tt)
        : (((e = k("iframe")).style.display = "none"), Bt.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(Mt("document.F=Object")), t.close(), t.F);
      for (var i = yt.length; i--; ) delete Ut.prototype[yt[i]];
      return Ut();
    };
  G[Lt] = !0;
  var zt =
      Object.create ||
      function (t, e) {
        var i;
        return null !== t ? ((Ht.prototype = P(t)), (i = new Ht()), (Ht.prototype = null), (i[Lt] = t)) : (i = Ut()), void 0 === e ? i : Vt(i, e);
      },
    qt = wt.f,
    Wt = {}.toString,
    Gt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Kt = {
      f: function (t) {
        return Gt && "[object Window]" == Wt.call(t)
          ? (function (t) {
              try {
                return qt(t);
              } catch (t) {
                return Gt.slice();
              }
            })(t)
          : qt(v(t));
      }
    },
    Yt = H("wks"),
    Jt = o.Symbol,
    Xt = Nt ? Jt : z,
    Qt = function (t) {
      return w(Yt, t) || (jt && w(Jt, t) ? (Yt[t] = Jt[t]) : (Yt[t] = Xt("Symbol." + t))), Yt[t];
    },
    Zt = { f: Qt },
    te = A.f,
    ee = function (t) {
      var e = nt.Symbol || (nt.Symbol = {});
      w(e, t) || te(e, t, { value: Zt.f(t) });
    },
    ie = A.f,
    ne = Qt("toStringTag"),
    oe = function (t, e, i) {
      t && !w((t = i ? t : t.prototype), ne) && ie(t, ne, { configurable: !0, value: e });
    },
    re = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    },
    ae = Qt("species"),
    se = function (t, e) {
      var i;
      return _t(t) && ("function" != typeof (i = t.constructor) || (i !== Array && !_t(i.prototype)) ? b(i) && null === (i = i[ae]) && (i = void 0) : (i = void 0)), new (void 0 === i ? Array : i)(0 === e ? 0 : e);
    },
    le = [].push,
    ce = function (t) {
      var e = 1 == t,
        i = 2 == t,
        n = 3 == t,
        o = 4 == t,
        r = 6 == t,
        a = 5 == t || r;
      return function (s, l, c, h) {
        for (
          var u,
            d,
            p = Ft(s),
            g = f(p),
            v = (function (t, e, i) {
              if ((re(t), void 0 === e)) return t;
              switch (i) {
                case 0:
                  return function () {
                    return t.call(e);
                  };
                case 1:
                  return function (i) {
                    return t.call(e, i);
                  };
                case 2:
                  return function (i, n) {
                    return t.call(e, i, n);
                  };
                case 3:
                  return function (i, n, o) {
                    return t.call(e, i, n, o);
                  };
              }
              return function () {
                return t.apply(e, arguments);
              };
            })(l, c, 3),
            b = ht(g.length),
            y = 0,
            m = h || se,
            w = e ? m(s, b) : i ? m(s, 0) : void 0;
          b > y;
          y++
        )
          if ((a || y in g) && ((d = v((u = g[y]), y, p)), t))
            if (e) w[y] = d;
            else if (d)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return u;
                case 6:
                  return y;
                case 2:
                  le.call(w, u);
              }
            else if (o) return !1;
        return r ? -1 : n || o ? o : w;
      };
    },
    he = { forEach: ce(0), map: ce(1), filter: ce(2), some: ce(3), every: ce(4), find: ce(5), findIndex: ce(6) },
    ue = he.forEach,
    de = W("hidden"),
    pe = "Symbol",
    fe = Qt("toPrimitive"),
    ge = et.set,
    ve = et.getterFor(pe),
    be = Object.prototype,
    ye = o.Symbol,
    me = rt("JSON", "stringify"),
    we = T.f,
    Se = A.f,
    xe = Kt.f,
    ke = c.f,
    Oe = H("symbols"),
    Ce = H("op-symbols"),
    Te = H("string-to-symbol-registry"),
    Pe = H("symbol-to-string-registry"),
    Ie = H("wks"),
    Ae = o.QObject,
    $e = !Ae || !Ae.prototype || !Ae.prototype.findChild,
    Re =
      a &&
      r(function () {
        return (
          7 !=
          zt(
            Se({}, "a", {
              get: function () {
                return Se(this, "a", { value: 7 }).a;
              }
            })
          ).a
        );
      })
        ? function (t, e, i) {
            var n = we(be, e);
            n && delete be[e], Se(t, e, i), n && t !== be && Se(be, e, n);
          }
        : Se,
    Ee = function (t, e) {
      var i = (Oe[t] = zt(ye.prototype));
      return ge(i, { type: pe, tag: t, description: e }), a || (i.description = e), i;
    },
    je =
      jt && "symbol" == typeof ye.iterator
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof ye;
          },
    Ne = function (t, e, i) {
      t === be && Ne(Ce, e, i), P(t);
      var n = y(e, !0);
      return P(i), w(Oe, n) ? (i.enumerable ? (w(t, de) && t[de][n] && (t[de][n] = !1), (i = zt(i, { enumerable: h(0, !1) }))) : (w(t, de) || Se(t, de, h(1, {})), (t[de][n] = !0)), Re(t, n, i)) : Se(t, n, i);
    },
    _e = function (t, e) {
      P(t);
      var i = v(e),
        n = Dt(i).concat(Be(i));
      return (
        ue(n, function (e) {
          (a && !Fe.call(i, e)) || Ne(t, e, i[e]);
        }),
        t
      );
    },
    Fe = function (t) {
      var e = y(t, !0),
        i = ke.call(this, e);
      return !(this === be && w(Oe, e) && !w(Ce, e)) && (!(i || !w(this, e) || !w(Oe, e) || (w(this, de) && this[de][e])) || i);
    },
    De = function (t, e) {
      var i = v(t),
        n = y(e, !0);
      if (i !== be || !w(Oe, n) || w(Ce, n)) {
        var o = we(i, n);
        return !o || !w(Oe, n) || (w(i, de) && i[de][n]) || (o.enumerable = !0), o;
      }
    },
    Ve = function (t) {
      var e = xe(v(t)),
        i = [];
      return (
        ue(e, function (t) {
          w(Oe, t) || w(G, t) || i.push(t);
        }),
        i
      );
    },
    Be = function (t) {
      var e = t === be,
        i = xe(e ? Ce : v(t)),
        n = [];
      return (
        ue(i, function (t) {
          !w(Oe, t) || (e && !w(be, t)) || n.push(Oe[t]);
        }),
        n
      );
    };
  if (
    (jt ||
      (it(
        (ye = function () {
          if (this instanceof ye) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = z(t),
            i = function (t) {
              this === be && i.call(Ce, t), w(this, de) && w(this[de], e) && (this[de][e] = !1), Re(this, e, h(1, t));
            };
          return a && $e && Re(be, e, { configurable: !0, set: i }), Ee(e, t);
        }).prototype,
        "toString",
        function () {
          return ve(this).tag;
        }
      ),
      (c.f = Fe),
      (A.f = Ne),
      (T.f = De),
      (wt.f = Kt.f = Ve),
      (St.f = Be),
      a &&
        (Se(ye.prototype, "description", {
          configurable: !0,
          get: function () {
            return ve(this).description;
          }
        }),
        it(be, "propertyIsEnumerable", Fe, { unsafe: !0 }))),
    Nt ||
      (Zt.f = function (t) {
        return Ee(Qt(t), t);
      }),
    Et({ global: !0, wrap: !0, forced: !jt, sham: !jt }, { Symbol: ye }),
    ue(Dt(Ie), function (t) {
      ee(t);
    }),
    Et(
      { target: pe, stat: !0, forced: !jt },
      {
        for: function (t) {
          var e = String(t);
          if (w(Te, e)) return Te[e];
          var i = ye(e);
          return (Te[e] = i), (Pe[i] = e), i;
        },
        keyFor: function (t) {
          if (!je(t)) throw TypeError(t + " is not a symbol");
          if (w(Pe, t)) return Pe[t];
        },
        useSetter: function () {
          $e = !0;
        },
        useSimple: function () {
          $e = !1;
        }
      }
    ),
    Et(
      { target: "Object", stat: !0, forced: !jt, sham: !a },
      {
        create: function (t, e) {
          return void 0 === e ? zt(t) : _e(zt(t), e);
        },
        defineProperty: Ne,
        defineProperties: _e,
        getOwnPropertyDescriptor: De
      }
    ),
    Et({ target: "Object", stat: !0, forced: !jt }, { getOwnPropertyNames: Ve, getOwnPropertySymbols: Be }),
    Et(
      {
        target: "Object",
        stat: !0,
        forced: r(function () {
          St.f(1);
        })
      },
      {
        getOwnPropertySymbols: function (t) {
          return St.f(Ft(t));
        }
      }
    ),
    me)
  ) {
    var Le =
      !jt ||
      r(function () {
        var t = ye();
        return "[null]" != me([t]) || "{}" != me({ a: t }) || "{}" != me(Object(t));
      });
    Et(
      { target: "JSON", stat: !0, forced: Le },
      {
        stringify: function (t, e, i) {
          for (var n, o = [t], r = 1; arguments.length > r; ) o.push(arguments[r++]);
          if (((n = e), (b(e) || void 0 !== t) && !je(t)))
            return (
              _t(e) ||
                (e = function (t, e) {
                  if (("function" == typeof n && (e = n.call(this, t, e)), !je(e))) return e;
                }),
              (o[1] = e),
              me.apply(null, o)
            );
        }
      }
    );
  }
  ye.prototype[fe] || $(ye.prototype, fe, ye.prototype.valueOf), oe(ye, pe), (G[de] = !0);
  var He = A.f,
    Me = o.Symbol;
  if (a && "function" == typeof Me && (!("description" in Me.prototype) || void 0 !== Me().description)) {
    var Ue = {},
      ze = function () {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          e = this instanceof ze ? new Me(t) : void 0 === t ? Me() : Me(t);
        return "" === t && (Ue[e] = !0), e;
      };
    kt(ze, Me);
    var qe = (ze.prototype = Me.prototype);
    qe.constructor = ze;
    var We = qe.toString,
      Ge = "Symbol(test)" == String(Me("test")),
      Ke = /^Symbol\((.*)\)[^)]+$/;
    He(qe, "description", {
      configurable: !0,
      get: function () {
        var t = b(this) ? this.valueOf() : this,
          e = We.call(t);
        if (w(Ue, t)) return "";
        var i = Ge ? e.slice(7, -1) : e.replace(Ke, "$1");
        return "" === i ? void 0 : i;
      }
    }),
      Et({ global: !0, forced: !0 }, { Symbol: ze });
  }
  ee("iterator");
  var Ye,
    Je,
    Xe = function (t, e, i) {
      var n = y(e);
      n in t ? A.f(t, n, h(0, i)) : (t[n] = i);
    },
    Qe = rt("navigator", "userAgent") || "",
    Ze = o.process,
    ti = Ze && Ze.versions,
    ei = ti && ti.v8;
  ei ? (Je = (Ye = ei.split("."))[0] + Ye[1]) : Qe && (!(Ye = Qe.match(/Edge\/(\d+)/)) || Ye[1] >= 74) && (Ye = Qe.match(/Chrome\/(\d+)/)) && (Je = Ye[1]);
  var ii = Je && +Je,
    ni = Qt("species"),
    oi = function (t) {
      return (
        ii >= 51 ||
        !r(function () {
          var e = [];
          return (
            ((e.constructor = {})[ni] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    },
    ri = Qt("isConcatSpreadable"),
    ai = 9007199254740991,
    si = "Maximum allowed index exceeded",
    li =
      ii >= 51 ||
      !r(function () {
        var t = [];
        return (t[ri] = !1), t.concat()[0] !== t;
      }),
    ci = oi("concat"),
    hi = function (t) {
      if (!b(t)) return !1;
      var e = t[ri];
      return void 0 !== e ? !!e : _t(t);
    };
  Et(
    { target: "Array", proto: !0, forced: !li || !ci },
    {
      concat: function (t) {
        var e,
          i,
          n,
          o,
          r,
          a = Ft(this),
          s = se(a, 0),
          l = 0;
        for (e = -1, n = arguments.length; e < n; e++)
          if (hi((r = -1 === e ? a : arguments[e]))) {
            if (l + (o = ht(r.length)) > ai) throw TypeError(si);
            for (i = 0; i < o; i++, l++) i in r && Xe(s, l, r[i]);
          } else {
            if (l >= ai) throw TypeError(si);
            Xe(s, l++, r);
          }
        return (s.length = l), s;
      }
    }
  );
  var ui = he.filter,
    di = oi("filter"),
    pi =
      di &&
      !r(function () {
        [].filter.call({ length: -1, 0: 1 }, function (t) {
          throw t;
        });
      });
  Et(
    { target: "Array", proto: !0, forced: !di || !pi },
    {
      filter: function (t) {
        return ui(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var fi = Qt("unscopables"),
    gi = Array.prototype;
  null == gi[fi] && A.f(gi, fi, { configurable: !0, value: zt(null) });
  var vi = function (t) {
      gi[fi][t] = !0;
    },
    bi = he.find,
    yi = "find",
    mi = !0;
  yi in [] &&
    Array(1).find(function () {
      mi = !1;
    }),
    Et(
      { target: "Array", proto: !0, forced: mi },
      {
        find: function (t) {
          return bi(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
    vi(yi);
  var wi = he.findIndex,
    Si = "findIndex",
    xi = !0;
  Si in [] &&
    Array(1).findIndex(function () {
      xi = !1;
    }),
    Et(
      { target: "Array", proto: !0, forced: xi },
      {
        findIndex: function (t) {
          return wi(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
    vi(Si);
  var ki = gt.includes;
  Et(
    { target: "Array", proto: !0 },
    {
      includes: function (t) {
        return ki(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    vi("includes");
  var Oi = function (t, e) {
      var i = [][t];
      return (
        !i ||
        !r(function () {
          i.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Ci = gt.indexOf,
    Ti = [].indexOf,
    Pi = !!Ti && 1 / [1].indexOf(1, -0) < 0,
    Ii = Oi("indexOf");
  Et(
    { target: "Array", proto: !0, forced: Pi || Ii },
    {
      indexOf: function (t) {
        return Pi ? Ti.apply(this, arguments) || 0 : Ci(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var Ai,
    $i,
    Ri,
    Ei = !r(function () {
      function t() {}
      return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
    }),
    ji = W("IE_PROTO"),
    Ni = Object.prototype,
    _i = Ei
      ? Object.getPrototypeOf
      : function (t) {
          return (t = Ft(t)), w(t, ji) ? t[ji] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Ni : null;
        },
    Fi = Qt("iterator"),
    Di = !1;
  [].keys && ("next" in (Ri = [].keys()) ? ($i = _i(_i(Ri))) !== Object.prototype && (Ai = $i) : (Di = !0)),
    null == Ai && (Ai = {}),
    w(Ai, Fi) ||
      $(Ai, Fi, function () {
        return this;
      });
  var Vi = { IteratorPrototype: Ai, BUGGY_SAFARI_ITERATORS: Di },
    Bi = Vi.IteratorPrototype,
    Li =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              i = {};
            try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), (e = i instanceof Array);
            } catch (t) {}
            return function (i, n) {
              return (
                P(i),
                (function (t) {
                  if (!b(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                })(n),
                e ? t.call(i, n) : (i.__proto__ = n),
                i
              );
            };
          })()
        : void 0),
    Hi = Vi.IteratorPrototype,
    Mi = Vi.BUGGY_SAFARI_ITERATORS,
    Ui = Qt("iterator"),
    zi = "keys",
    qi = "values",
    Wi = "entries",
    Gi = function () {
      return this;
    },
    Ki = function (t, e, i, n, o, r, a) {
      !(function (t, e, i) {
        var n = e + " Iterator";
        (t.prototype = zt(Bi, { next: h(1, i) })), oe(t, n, !1);
      })(i, e, n);
      var s,
        l,
        c,
        u = function (t) {
          if (t === o && v) return v;
          if (!Mi && t in f) return f[t];
          switch (t) {
            case zi:
            case qi:
            case Wi:
              return function () {
                return new i(this, t);
              };
          }
          return function () {
            return new i(this);
          };
        },
        d = e + " Iterator",
        p = !1,
        f = t.prototype,
        g = f[Ui] || f["@@iterator"] || (o && f[o]),
        v = (!Mi && g) || u(o),
        b = ("Array" == e && f.entries) || g;
      if (
        (b && ((s = _i(b.call(new t()))), Hi !== Object.prototype && s.next && (_i(s) !== Hi && (Li ? Li(s, Hi) : "function" != typeof s[Ui] && $(s, Ui, Gi)), oe(s, d, !0))),
        o == qi &&
          g &&
          g.name !== qi &&
          ((p = !0),
          (v = function () {
            return g.call(this);
          })),
        f[Ui] !== v && $(f, Ui, v),
        o)
      )
        if (((l = { values: u(qi), keys: r ? v : u(zi), entries: u(Wi) }), a)) for (c in l) (Mi || p || !(c in f)) && it(f, c, l[c]);
        else Et({ target: e, proto: !0, forced: Mi || p }, l);
      return l;
    },
    Yi = "Array Iterator",
    Ji = et.set,
    Xi = et.getterFor(Yi),
    Qi = Ki(
      Array,
      "Array",
      function (t, e) {
        Ji(this, { type: Yi, target: v(t), index: 0, kind: e });
      },
      function () {
        var t = Xi(this),
          e = t.target,
          i = t.kind,
          n = t.index++;
        return !e || n >= e.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == i ? { value: n, done: !1 } : "values" == i ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 };
      },
      "values"
    );
  vi("keys"), vi("values"), vi("entries");
  var Zi = [].join,
    tn = f != Object,
    en = Oi("join", ",");
  Et(
    { target: "Array", proto: !0, forced: tn || en },
    {
      join: function (t) {
        return Zi.call(v(this), void 0 === t ? "," : t);
      }
    }
  );
  var nn = he.map,
    on = oi("map"),
    rn =
      on &&
      !r(function () {
        [].map.call({ length: -1, 0: 1 }, function (t) {
          throw t;
        });
      });
  Et(
    { target: "Array", proto: !0, forced: !on || !rn },
    {
      map: function (t) {
        return nn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var an = [].reverse,
    sn = [1, 2];
  Et(
    { target: "Array", proto: !0, forced: String(sn) === String(sn.reverse()) },
    {
      reverse: function () {
        return _t(this) && (this.length = this.length), an.call(this);
      }
    }
  );
  var ln = Qt("species"),
    cn = [].slice,
    hn = Math.max;
  Et(
    { target: "Array", proto: !0, forced: !oi("slice") },
    {
      slice: function (t, e) {
        var i,
          n,
          o,
          r = v(this),
          a = ht(r.length),
          s = pt(t, a),
          l = pt(void 0 === e ? a : e, a);
        if (_t(r) && ("function" != typeof (i = r.constructor) || (i !== Array && !_t(i.prototype)) ? b(i) && null === (i = i[ln]) && (i = void 0) : (i = void 0), i === Array || void 0 === i)) return cn.call(r, s, l);
        for (n = new (void 0 === i ? Array : i)(hn(l - s, 0)), o = 0; s < l; s++, o++) s in r && Xe(n, o, r[s]);
        return (n.length = o), n;
      }
    }
  );
  var un = [],
    dn = un.sort,
    pn = r(function () {
      un.sort(void 0);
    }),
    fn = r(function () {
      un.sort(null);
    }),
    gn = Oi("sort");
  Et(
    { target: "Array", proto: !0, forced: pn || !fn || gn },
    {
      sort: function (t) {
        return void 0 === t ? dn.call(Ft(this)) : dn.call(Ft(this), re(t));
      }
    }
  );
  var vn = Math.max,
    bn = Math.min,
    yn = 9007199254740991,
    mn = "Maximum allowed length exceeded";
  Et(
    { target: "Array", proto: !0, forced: !oi("splice") },
    {
      splice: function (t, e) {
        var i,
          n,
          o,
          r,
          a,
          s,
          l = Ft(this),
          c = ht(l.length),
          h = pt(t, c),
          u = arguments.length;
        if ((0 === u ? (i = n = 0) : 1 === u ? ((i = 0), (n = c - h)) : ((i = u - 2), (n = bn(vn(lt(e), 0), c - h))), c + i - n > yn)) throw TypeError(mn);
        for (o = se(l, n), r = 0; r < n; r++) (a = h + r) in l && Xe(o, r, l[a]);
        if (((o.length = n), i < n)) {
          for (r = h; r < c - n; r++) (s = r + i), (a = r + n) in l ? (l[s] = l[a]) : delete l[s];
          for (r = c; r > c - n + i; r--) delete l[r - 1];
        } else if (i > n) for (r = c - n; r > h; r--) (s = r + i - 1), (a = r + n - 1) in l ? (l[s] = l[a]) : delete l[s];
        for (r = 0; r < i; r++) l[r + h] = arguments[r + 2];
        return (l.length = c - n + i), o;
      }
    }
  );
  var wn = function (t, e, i) {
      var n, o;
      return Li && "function" == typeof (n = e.constructor) && n !== i && b((o = n.prototype)) && o !== i.prototype && Li(t, o), t;
    },
    Sn = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    xn = "[" + Sn + "]",
    kn = RegExp("^" + xn + xn + "*"),
    On = RegExp(xn + xn + "*$"),
    Cn = function (t) {
      return function (e) {
        var i = String(g(e));
        return 1 & t && (i = i.replace(kn, "")), 2 & t && (i = i.replace(On, "")), i;
      };
    },
    Tn = { start: Cn(1), end: Cn(2), trim: Cn(3) },
    Pn = wt.f,
    In = T.f,
    An = A.f,
    $n = Tn.trim,
    Rn = "Number",
    En = o.Number,
    jn = En.prototype,
    Nn = d(zt(jn)) == Rn,
    _n = function (t) {
      var e,
        i,
        n,
        o,
        r,
        a,
        s,
        l,
        c = y(t, !1);
      if ("string" == typeof c && c.length > 2)
        if (43 === (e = (c = $n(c)).charCodeAt(0)) || 45 === e) {
          if (88 === (i = c.charCodeAt(2)) || 120 === i) return NaN;
        } else if (48 === e) {
          switch (c.charCodeAt(1)) {
            case 66:
            case 98:
              (n = 2), (o = 49);
              break;
            case 79:
            case 111:
              (n = 8), (o = 55);
              break;
            default:
              return +c;
          }
          for (a = (r = c.slice(2)).length, s = 0; s < a; s++) if ((l = r.charCodeAt(s)) < 48 || l > o) return NaN;
          return parseInt(r, n);
        }
      return +c;
    };
  if ($t(Rn, !En(" 0o1") || !En("0b1") || En("+0x1"))) {
    for (
      var Fn,
        Dn = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            i = this;
          return i instanceof Dn &&
            (Nn
              ? r(function () {
                  jn.valueOf.call(i);
                })
              : d(i) != Rn)
            ? wn(new En(_n(e)), i, Dn)
            : _n(e);
        },
        Vn = a ? Pn(En) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),
        Bn = 0;
      Vn.length > Bn;
      Bn++
    )
      w(En, (Fn = Vn[Bn])) && !w(Dn, Fn) && An(Dn, Fn, In(En, Fn));
    (Dn.prototype = jn), (jn.constructor = Dn), it(o, Rn, Dn);
  }
  var Ln = Object.assign,
    Hn = Object.defineProperty,
    Mn =
      !Ln ||
      r(function () {
        if (
          a &&
          1 !==
            Ln(
              { b: 1 },
              Ln(
                Hn({}, "a", {
                  enumerable: !0,
                  get: function () {
                    Hn(this, "b", { value: 3, enumerable: !1 });
                  }
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          i = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (t[i] = 7),
          n.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != Ln({}, t)[i] || Dt(Ln({}, e)).join("") != n
        );
      })
        ? function (t, e) {
            for (var i = Ft(t), n = arguments.length, o = 1, r = St.f, s = c.f; n > o; ) for (var l, h = f(arguments[o++]), u = r ? Dt(h).concat(r(h)) : Dt(h), d = u.length, p = 0; d > p; ) (l = u[p++]), (a && !s.call(h, l)) || (i[l] = h[l]);
            return i;
          }
        : Ln;
  Et({ target: "Object", stat: !0, forced: Object.assign !== Mn }, { assign: Mn });
  var Un = c.f,
    zn = function (t) {
      return function (e) {
        for (var i, n = v(e), o = Dt(n), r = o.length, s = 0, l = []; r > s; ) (i = o[s++]), (a && !Un.call(n, i)) || l.push(t ? [i, n[i]] : n[i]);
        return l;
      };
    },
    qn = { entries: zn(!0), values: zn(!1) }.entries;
  Et(
    { target: "Object", stat: !0 },
    {
      entries: function (t) {
        return qn(t);
      }
    }
  );
  var Wn = {};
  Wn[Qt("toStringTag")] = "z";
  var Gn = "[object z]" === String(Wn),
    Kn = Qt("toStringTag"),
    Yn =
      "Arguments" ==
      d(
        (function () {
          return arguments;
        })()
      ),
    Jn = Gn
      ? d
      : function (t) {
          var e, i, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (i = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), Kn))
            ? i
            : Yn
            ? d(e)
            : "Object" == (n = d(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        },
    Xn = Gn
      ? {}.toString
      : function () {
          return "[object " + Jn(this) + "]";
        };
  Gn || it(Object.prototype, "toString", Xn, { unsafe: !0 });
  var Qn = Tn.trim,
    Zn = o.parseFloat,
    to =
      1 / Zn(Sn + "-0") != -1 / 0
        ? function (t) {
            var e = Qn(String(t)),
              i = Zn(e);
            return 0 === i && "-" == e.charAt(0) ? -0 : i;
          }
        : Zn;
  Et({ global: !0, forced: parseFloat != to }, { parseFloat: to });
  var eo = Tn.trim,
    io = o.parseInt,
    no = /^[+-]?0[Xx]/,
    oo =
      8 !== io(Sn + "08") || 22 !== io(Sn + "0x16")
        ? function (t, e) {
            var i = eo(String(t));
            return io(i, e >>> 0 || (no.test(i) ? 16 : 10));
          }
        : io;
  Et({ global: !0, forced: parseInt != oo }, { parseInt: oo });
  var ro = Qt("match"),
    ao = function (t) {
      var e;
      return b(t) && (void 0 !== (e = t[ro]) ? !!e : "RegExp" == d(t));
    },
    so = function () {
      var t = P(this),
        e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  function lo(t, e) {
    return RegExp(t, e);
  }
  var co = {
      UNSUPPORTED_Y: r(function () {
        var t = lo("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      }),
      BROKEN_CARET: r(function () {
        var t = lo("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      })
    },
    ho = Qt("species"),
    uo = A.f,
    po = wt.f,
    fo = et.set,
    go = Qt("match"),
    vo = o.RegExp,
    bo = vo.prototype,
    yo = /a/g,
    mo = /a/g,
    wo = new vo(yo) !== yo,
    So = co.UNSUPPORTED_Y;
  if (
    a &&
    $t(
      "RegExp",
      !wo ||
        So ||
        r(function () {
          return (mo[go] = !1), vo(yo) != yo || vo(mo) == mo || "/a/i" != vo(yo, "i");
        })
    )
  ) {
    for (
      var xo = function (t, e) {
          var i,
            n = this instanceof xo,
            o = ao(t),
            r = void 0 === e;
          if (!n && o && t.constructor === xo && r) return t;
          wo ? o && !r && (t = t.source) : t instanceof xo && (r && (e = so.call(t)), (t = t.source)), So && (i = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
          var a = wn(wo ? new vo(t, e) : vo(t, e), n ? this : bo, xo);
          return So && i && fo(a, { sticky: i }), a;
        },
        ko = function (t) {
          (t in xo) ||
            uo(xo, t, {
              configurable: !0,
              get: function () {
                return vo[t];
              },
              set: function (e) {
                vo[t] = e;
              }
            });
        },
        Oo = po(vo),
        Co = 0;
      Oo.length > Co;

    )
      ko(Oo[Co++]);
    (bo.constructor = xo), (xo.prototype = bo), it(o, "RegExp", xo);
  }
  !(function (t) {
    var e = rt(t),
      i = A.f;
    a &&
      e &&
      !e[ho] &&
      i(e, ho, {
        configurable: !0,
        get: function () {
          return this;
        }
      });
  })("RegExp");
  var To = RegExp.prototype.exec,
    Po = String.prototype.replace,
    Io = To,
    Ao = (function () {
      var t = /a/,
        e = /b*/g;
      return To.call(t, "a"), To.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex;
    })(),
    $o = co.UNSUPPORTED_Y || co.BROKEN_CARET,
    Ro = void 0 !== /()??/.exec("")[1];
  (Ao || Ro || $o) &&
    (Io = function (t) {
      var e,
        i,
        n,
        o,
        r = this,
        a = $o && r.sticky,
        s = so.call(r),
        l = r.source,
        c = 0,
        h = t;
      return (
        a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), (h = String(t).slice(r.lastIndex)), r.lastIndex > 0 && (!r.multiline || (r.multiline && "\n" !== t[r.lastIndex - 1])) && ((l = "(?: " + l + ")"), (h = " " + h), c++), (i = new RegExp("^(?:" + l + ")", s))),
        Ro && (i = new RegExp("^" + l + "$(?!\\s)", s)),
        Ao && (e = r.lastIndex),
        (n = To.call(a ? i : r, h)),
        a ? (n ? ((n.input = n.input.slice(c)), (n[0] = n[0].slice(c)), (n.index = r.lastIndex), (r.lastIndex += n[0].length)) : (r.lastIndex = 0)) : Ao && n && (r.lastIndex = r.global ? n.index + n[0].length : e),
        Ro &&
          n &&
          n.length > 1 &&
          Po.call(n[0], i, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0);
          }),
        n
      );
    });
  var Eo = Io;
  Et({ target: "RegExp", proto: !0, forced: /./.exec !== Eo }, { exec: Eo });
  var jo = "toString",
    No = RegExp.prototype,
    _o = No.toString,
    Fo = r(function () {
      return "/a/b" != _o.call({ source: "a", flags: "b" });
    }),
    Do = _o.name != jo;
  (Fo || Do) &&
    it(
      RegExp.prototype,
      jo,
      function () {
        var t = P(this),
          e = String(t.source),
          i = t.flags;
        return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in No) ? so.call(t) : i);
      },
      { unsafe: !0 }
    );
  var Vo = function (t) {
      if (ao(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    Bo = Qt("match"),
    Lo = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (i) {
        try {
          return (e[Bo] = !1), "/./"[t](e);
        } catch (t) {}
      }
      return !1;
    };
  Et(
    { target: "String", proto: !0, forced: !Lo("includes") },
    {
      includes: function (t) {
        return !!~String(g(this)).indexOf(Vo(t), arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var Ho = function (t) {
      return function (e, i) {
        var n,
          o,
          r = String(g(e)),
          a = lt(i),
          s = r.length;
        return a < 0 || a >= s ? (t ? "" : void 0) : (n = r.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === s || (o = r.charCodeAt(a + 1)) < 56320 || o > 57343 ? (t ? r.charAt(a) : n) : t ? r.slice(a, a + 2) : o - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    Mo = { codeAt: Ho(!1), charAt: Ho(!0) },
    Uo = Mo.charAt,
    zo = "String Iterator",
    qo = et.set,
    Wo = et.getterFor(zo);
  Ki(
    String,
    "String",
    function (t) {
      qo(this, { type: zo, string: String(t), index: 0 });
    },
    function () {
      var t,
        e = Wo(this),
        i = e.string,
        n = e.index;
      return n >= i.length ? { value: void 0, done: !0 } : ((t = Uo(i, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var Go = Qt("species"),
    Ko = !r(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    Yo = "$0" === "a".replace(/./, "$0"),
    Jo = !r(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var i = "ab".split(t);
      return 2 !== i.length || "a" !== i[0] || "b" !== i[1];
    }),
    Xo = function (t, e, i, n) {
      var o = Qt(t),
        a = !r(function () {
          var e = {};
          return (
            (e[o] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        s =
          a &&
          !r(function () {
            var e = !1,
              i = /a/;
            return (
              "split" === t &&
                (((i = {}).constructor = {}),
                (i.constructor[Go] = function () {
                  return i;
                }),
                (i.flags = ""),
                (i[o] = /./[o])),
              (i.exec = function () {
                return (e = !0), null;
              }),
              i[o](""),
              !e
            );
          });
      if (!a || !s || ("replace" === t && (!Ko || !Yo)) || ("split" === t && !Jo)) {
        var l = /./[o],
          c = i(
            o,
            ""[t],
            function (t, e, i, n, o) {
              return e.exec === Eo ? (a && !o ? { done: !0, value: l.call(e, i, n) } : { done: !0, value: t.call(i, e, n) }) : { done: !1 };
            },
            { REPLACE_KEEPS_$0: Yo }
          ),
          h = c[0],
          u = c[1];
        it(String.prototype, t, h),
          it(
            RegExp.prototype,
            o,
            2 == e
              ? function (t, e) {
                  return u.call(t, this, e);
                }
              : function (t) {
                  return u.call(t, this);
                }
          );
      }
      n && $(RegExp.prototype[o], "sham", !0);
    },
    Qo = Mo.charAt,
    Zo = function (t, e, i) {
      return e + (i ? Qo(t, e).length : 1);
    },
    tr = function (t, e) {
      var i = t.exec;
      if ("function" == typeof i) {
        var n = i.call(t, e);
        if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
        return n;
      }
      if ("RegExp" !== d(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return Eo.call(t, e);
    },
    er = Math.max,
    ir = Math.min,
    nr = Math.floor,
    or = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    rr = /\$([$&'`]|\d\d?)/g;
  Xo("replace", 2, function (t, e, i, n) {
    return [
      function (i, n) {
        var o = g(this),
          r = null == i ? void 0 : i[t];
        return void 0 !== r ? r.call(i, o, n) : e.call(String(o), i, n);
      },
      function (t, r) {
        if (n.REPLACE_KEEPS_$0 || ("string" == typeof r && -1 === r.indexOf("$0"))) {
          var a = i(e, t, this, r);
          if (a.done) return a.value;
        }
        var s = P(t),
          l = String(this),
          c = "function" == typeof r;
        c || (r = String(r));
        var h = s.global;
        if (h) {
          var u = s.unicode;
          s.lastIndex = 0;
        }
        for (var d = []; ; ) {
          var p = tr(s, l);
          if (null === p) break;
          if ((d.push(p), !h)) break;
          "" === String(p[0]) && (s.lastIndex = Zo(l, ht(s.lastIndex), u));
        }
        for (var f, g = "", v = 0, b = 0; b < d.length; b++) {
          p = d[b];
          for (var y = String(p[0]), m = er(ir(lt(p.index), l.length), 0), w = [], S = 1; S < p.length; S++) w.push(void 0 === (f = p[S]) ? f : String(f));
          var x = p.groups;
          if (c) {
            var k = [y].concat(w, m, l);
            void 0 !== x && k.push(x);
            var O = String(r.apply(void 0, k));
          } else O = o(y, l, m, w, x, r);
          m >= v && ((g += l.slice(v, m) + O), (v = m + y.length));
        }
        return g + l.slice(v);
      }
    ];
    function o(t, i, n, o, r, a) {
      var s = n + t.length,
        l = o.length,
        c = rr;
      return (
        void 0 !== r && ((r = Ft(r)), (c = or)),
        e.call(a, c, function (e, a) {
          var c;
          switch (a.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return i.slice(0, n);
            case "'":
              return i.slice(s);
            case "<":
              c = r[a.slice(1, -1)];
              break;
            default:
              var h = +a;
              if (0 === h) return e;
              if (h > l) {
                var u = nr(h / 10);
                return 0 === u ? e : u <= l ? (void 0 === o[u - 1] ? a.charAt(1) : o[u - 1] + a.charAt(1)) : e;
              }
              c = o[h - 1];
          }
          return void 0 === c ? "" : c;
        })
      );
    }
  });
  var ar =
    Object.is ||
    function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    };
  Xo("search", 1, function (t, e, i) {
    return [
      function (e) {
        var i = g(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i));
      },
      function (t) {
        var n = i(e, t, this);
        if (n.done) return n.value;
        var o = P(t),
          r = String(this),
          a = o.lastIndex;
        ar(a, 0) || (o.lastIndex = 0);
        var s = tr(o, r);
        return ar(o.lastIndex, a) || (o.lastIndex = a), null === s ? -1 : s.index;
      }
    ];
  });
  var sr = Qt("species"),
    lr = [].push,
    cr = Math.min,
    hr = 4294967295,
    ur = !r(function () {
      return !RegExp(hr, "y");
    });
  Xo(
    "split",
    2,
    function (t, e, i) {
      var n;
      return (
        (n =
          "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
            ? function (t, i) {
                var n = String(g(this)),
                  o = void 0 === i ? hr : i >>> 0;
                if (0 === o) return [];
                if (void 0 === t) return [n];
                if (!ao(t)) return e.call(n, t, o);
                for (var r, a, s, l = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, u = new RegExp(t.source, c + "g"); (r = Eo.call(u, n)) && !((a = u.lastIndex) > h && (l.push(n.slice(h, r.index)), r.length > 1 && r.index < n.length && lr.apply(l, r.slice(1)), (s = r[0].length), (h = a), l.length >= o)); ) u.lastIndex === r.index && u.lastIndex++;
                return h === n.length ? (!s && u.test("")) || l.push("") : l.push(n.slice(h)), l.length > o ? l.slice(0, o) : l;
              }
            : "0".split(void 0, 0).length
            ? function (t, i) {
                return void 0 === t && 0 === i ? [] : e.call(this, t, i);
              }
            : e),
        [
          function (e, i) {
            var o = g(this),
              r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, o, i) : n.call(String(o), e, i);
          },
          function (t, o) {
            var r = i(n, t, this, o, n !== e);
            if (r.done) return r.value;
            var a = P(t),
              s = String(this),
              l = (function (t, e) {
                var i,
                  n = P(t).constructor;
                return void 0 === n || null == (i = P(n)[sr]) ? e : re(i);
              })(a, RegExp),
              c = a.unicode,
              h = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (ur ? "y" : "g"),
              u = new l(ur ? a : "^(?:" + a.source + ")", h),
              d = void 0 === o ? hr : o >>> 0;
            if (0 === d) return [];
            if (0 === s.length) return null === tr(u, s) ? [s] : [];
            for (var p = 0, f = 0, g = []; f < s.length; ) {
              u.lastIndex = ur ? f : 0;
              var v,
                b = tr(u, ur ? s : s.slice(f));
              if (null === b || (v = cr(ht(u.lastIndex + (ur ? 0 : f)), s.length)) === p) f = Zo(s, f, c);
              else {
                if ((g.push(s.slice(p, f)), g.length === d)) return g;
                for (var y = 1; y <= b.length - 1; y++) if ((g.push(b[y]), g.length === d)) return g;
                f = p = v;
              }
            }
            return g.push(s.slice(p)), g;
          }
        ]
      );
    },
    !ur
  );
  var dr = Tn.trim;
  Et(
    {
      target: "String",
      proto: !0,
      forced: (function (t) {
        return r(function () {
          return !!Sn[t]() || "​᠎" != "​᠎"[t]() || Sn[t].name !== t;
        });
      })("trim")
    },
    {
      trim: function () {
        return dr(this);
      }
    }
  );
  var pr = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 },
    fr = he.forEach,
    gr = Oi("forEach")
      ? function (t) {
          return fr(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  for (var vr in pr) {
    var br = o[vr],
      yr = br && br.prototype;
    if (yr && yr.forEach !== gr)
      try {
        $(yr, "forEach", gr);
      } catch (t) {
        yr.forEach = gr;
      }
  }
  var mr = Qt("iterator"),
    wr = Qt("toStringTag"),
    Sr = Qi.values;
  for (var xr in pr) {
    var kr = o[xr],
      Or = kr && kr.prototype;
    if (Or) {
      if (Or[mr] !== Sr)
        try {
          $(Or, mr, Sr);
        } catch (t) {
          Or[mr] = Sr;
        }
      if ((Or[wr] || $(Or, wr, xr), pr[xr]))
        for (var Cr in Qi)
          if (Or[Cr] !== Qi[Cr])
            try {
              $(Or, Cr, Qi[Cr]);
            } catch (t) {
              Or[Cr] = Qi[Cr];
            }
    }
  }
  function Tr(t) {
    return (Tr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
  }
  function Pr(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Ir(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  function Ar(t, e, i) {
    return e && Ir(t.prototype, e), i && Ir(t, i), t;
  }
  function $r(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
        var i = [],
          n = !0,
          o = !1,
          r = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
        } catch (t) {
          (o = !0), (r = t);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (o) throw r;
          }
        }
        return i;
      })(t, e) ||
      (function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      })()
    );
  }
  function Rr(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
      })(t) ||
      (function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var Er = 4;
  try {
    var jr = t.fn.dropdown.Constructor.VERSION;
    void 0 !== jr && (Er = parseInt(jr, 10));
  } catch (t) {}
  try {
    var Nr = bootstrap.Tooltip.VERSION;
    void 0 !== Nr && (Er = parseInt(Nr, 10));
  } catch (t) {}
  var _r = { 3: { iconsPrefix: "glyphicon", icons: { paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down", paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up", refresh: "glyphicon-refresh icon-refresh", toggleOff: "glyphicon-list-alt icon-list-alt", toggleOn: "glyphicon-list-alt icon-list-alt", columns: "glyphicon-th icon-th", detailOpen: "glyphicon-plus icon-plus", detailClose: "glyphicon-minus icon-minus", fullscreen: "glyphicon-fullscreen", search: "glyphicon-search", clearSearch: "glyphicon-trash" }, classes: { buttonsPrefix: "btn", buttons: "default", buttonsGroup: "btn-group", buttonsDropdown: "btn-group", pull: "pull", inputGroup: "input-group", inputPrefix: "input-", input: "form-control", paginationDropdown: "btn-group dropdown", dropup: "dropup", dropdownActive: "active", paginationActive: "active", buttonActive: "active" }, html: { toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"], toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>', toolbarDropdownSeparator: '<li class="divider"></li>', pageDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"], pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>', dropdownCaret: '<span class="caret"></span>', pagination: ['<ul class="pagination%s">', "</ul>"], paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>', icon: '<i class="%s %s"></i>', inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>', searchInput: '<input class="%s%s" type="text" placeholder="%s">', searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>', searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>' } }, 4: { iconsPrefix: "fa", icons: { paginationSwitchDown: "fa-caret-square-down", paginationSwitchUp: "fa-caret-square-up", refresh: "fa-sync", toggleOff: "fa-toggle-off", toggleOn: "fa-toggle-on", columns: "fa-th-list", detailOpen: "fa-plus", detailClose: "fa-minus", fullscreen: "fa-arrows-alt", search: "fa-search", clearSearch: "fa-trash" }, classes: { buttonsPrefix: "btn", buttons: "secondary", buttonsGroup: "btn-group", buttonsDropdown: "btn-group", pull: "float", inputGroup: "btn-group", inputPrefix: "form-control-", input: "form-control", paginationDropdown: "btn-group dropdown", dropup: "dropup", dropdownActive: "active", paginationActive: "active", buttonActive: "active" }, html: { toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', "</div>"], toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>', pageDropdown: ['<div class="dropdown-menu">', "</div>"], pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>', toolbarDropdownSeparator: '<div class="dropdown-divider"></div>', dropdownCaret: '<span class="caret"></span>', pagination: ['<ul class="pagination%s">', "</ul>"], paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>', icon: '<i class="%s %s"></i>', inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>', searchInput: '<input class="%s%s" type="text" placeholder="%s">', searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>', searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>' } }, 5: { iconsPrefix: "fa", icons: { paginationSwitchDown: "fa-caret-square-down", paginationSwitchUp: "fa-caret-square-up", refresh: "fa-sync", toggleOff: "fa-toggle-off", toggleOn: "fa-toggle-on", columns: "fa-th-list", detailOpen: "fa-plus", detailClose: "fa-minus", fullscreen: "fa-arrows-alt", search: "fa-search", clearSearch: "fa-trash" }, classes: { buttonsPrefix: "btn", buttons: "secondary", buttonsGroup: "btn-group", buttonsDropdown: "btn-group", pull: "float", inputGroup: "btn-group", inputPrefix: "form-control-", input: "form-control", paginationDropdown: "btn-group dropdown", dropup: "dropup", dropdownActive: "active", paginationActive: "active", buttonActive: "active" }, html: { toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', "</div>"], toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>', pageDropdown: ['<div class="dropdown-menu">', "</div>"], pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>', toolbarDropdownSeparator: '<div class="dropdown-divider"></div>', dropdownCaret: '<span class="caret"></span>', pagination: ['<ul class="pagination%s">', "</ul>"], paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>', icon: '<i class="%s %s"></i>', inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>', searchInput: '<input class="%s%s" type="text" placeholder="%s">', searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>', searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>' } } }[Er],
    Fr = {
      height: void 0,
      classes: "table table-bordered table-hover",
      buttons: {},
      theadClasses: "",
      headerStyle: function (t) {
        return {};
      },
      rowStyle: function (t, e) {
        return {};
      },
      rowAttributes: function (t, e) {
        return {};
      },
      undefinedText: "-",
      locale: void 0,
      virtualScroll: !1,
      virtualScrollItemHeight: void 0,
      sortable: !0,
      sortClass: void 0,
      silentSort: !0,
      sortName: void 0,
      sortOrder: void 0,
      sortReset: !1,
      sortStable: !1,
      rememberOrder: !1,
      serverSort: !0,
      customSort: void 0,
      columns: [[]],
      data: [],
      url: void 0,
      method: "get",
      cache: !0,
      contentType: "application/json",
      dataType: "json",
      ajax: void 0,
      ajaxOptions: {},
      queryParams: function (t) {
        return t;
      },
      queryParamsType: "limit",
      responseHandler: function (t) {
        return t;
      },
      totalField: "total",
      totalNotFilteredField: "totalNotFiltered",
      dataField: "rows",
      footerField: "footer",
      pagination: !1,
      paginationParts: ["pageInfo", "pageSize", "pageList"],
      showExtendedPagination: !1,
      paginationLoop: !0,
      sidePagination: "client",
      totalRows: 0,
      totalNotFiltered: 0,
      pageNumber: 1,
      pageSize: 10,
      pageList: [10, 25, 50, 100],
      paginationHAlign: "right",
      paginationVAlign: "bottom",
      paginationDetailHAlign: "left",
      paginationPreText: "&lsaquo;",
      paginationNextText: "&rsaquo;",
      paginationSuccessivelySize: 5,
      paginationPagesBySide: 1,
      paginationUseIntermediate: !1,
      search: !1,
      searchHighlight: !1,
      searchOnEnterKey: !1,
      strictSearch: !1,
      searchSelector: !1,
      visibleSearch: !1,
      showButtonIcons: !0,
      showButtonText: !1,
      showSearchButton: !1,
      showSearchClearButton: !1,
      trimOnSearch: !0,
      searchAlign: "right",
      searchTimeOut: 500,
      searchText: "",
      customSearch: void 0,
      showHeader: !0,
      showFooter: !1,
      footerStyle: function (t) {
        return {};
      },
      searchAccentNeutralise: !1,
      showColumns: !1,
      showColumnsToggleAll: !1,
      showColumnsSearch: !1,
      minimumCountColumns: 1,
      showPaginationSwitch: !1,
      showRefresh: !1,
      showToggle: !1,
      showFullscreen: !1,
      smartDisplay: !0,
      escape: !1,
      filterOptions: { filterAlgorithm: "and" },
      idField: void 0,
      selectItemName: "btSelectItem",
      clickToSelect: !1,
      ignoreClickToSelectOn: function (t) {
        var e = t.tagName;
        return ["A", "BUTTON"].includes(e);
      },
      singleSelect: !1,
      checkboxHeader: !0,
      maintainMetaData: !1,
      multipleSelectRow: !1,
      uniqueId: void 0,
      cardView: !1,
      detailView: !1,
      detailViewIcon: !0,
      detailViewByClick: !1,
      detailViewAlign: "left",
      detailFormatter: function (t, e) {
        return "";
      },
      detailFilter: function (t, e) {
        return !0;
      },
      toolbar: void 0,
      toolbarAlign: "left",
      buttonsToolbar: void 0,
      buttonsAlign: "right",
      buttonsOrder: ["paginationSwitch", "refresh", "toggle", "fullscreen", "columns"],
      buttonsPrefix: _r.classes.buttonsPrefix,
      buttonsClass: _r.classes.buttons,
      icons: _r.icons,
      iconSize: void 0,
      iconsPrefix: _r.iconsPrefix,
      loadingFontSize: "auto",
      loadingTemplate: function (t) {
        return '<span class="loading-wrap">\n      <span class="loading-text">'.concat(t, '</span>\n      <span class="animation-wrap"><span class="animation-dot"></span></span>\n      </span>\n    ');
      },
      onAll: function (t, e) {
        return !1;
      },
      onClickCell: function (t, e, i, n) {
        return !1;
      },
      onDblClickCell: function (t, e, i, n) {
        return !1;
      },
      onClickRow: function (t, e) {
        return !1;
      },
      onDblClickRow: function (t, e) {
        return !1;
      },
      onSort: function (t, e) {
        return !1;
      },
      onCheck: function (t) {
        return !1;
      },
      onUncheck: function (t) {
        return !1;
      },
      onCheckAll: function (t) {
        return !1;
      },
      onUncheckAll: function (t) {
        return !1;
      },
      onCheckSome: function (t) {
        return !1;
      },
      onUncheckSome: function (t) {
        return !1;
      },
      onLoadSuccess: function (t) {
        return !1;
      },
      onLoadError: function (t) {
        return !1;
      },
      onColumnSwitch: function (t, e) {
        return !1;
      },
      onPageChange: function (t, e) {
        return !1;
      },
      onSearch: function (t) {
        return !1;
      },
      onToggle: function (t) {
        return !1;
      },
      onPreBody: function (t) {
        return !1;
      },
      onPostBody: function () {
        return !1;
      },
      onPostHeader: function () {
        return !1;
      },
      onPostFooter: function () {
        return !1;
      },
      onExpandRow: function (t, e, i) {
        return !1;
      },
      onCollapseRow: function (t, e) {
        return !1;
      },
      onRefreshOptions: function (t) {
        return !1;
      },
      onRefresh: function (t) {
        return !1;
      },
      onResetView: function () {
        return !1;
      },
      onScrollBody: function () {
        return !1;
      }
    },
    Dr = {
      formatLoadingMessage: function () {
        return "Loading, please wait";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rows per page");
      },
      formatShowingRows: function (t, e, i, n) {
        return void 0 !== n && n > 0 && n > i ? "Showing ".concat(t, " to ").concat(e, " of ").concat(i, " rows (filtered from ").concat(n, " total rows)") : "Showing ".concat(t, " to ").concat(e, " of ").concat(i, " rows");
      },
      formatSRPaginationPreText: function () {
        return "previous page";
      },
      formatSRPaginationPageText: function (t) {
        return "to page ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "next page";
      },
      formatDetailPagination: function (t) {
        return "Showing ".concat(t, " rows");
      },
      formatSearch: function () {
        return "Search";
      },
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatNoMatches: function () {
        return "No matching records found";
      },
      formatPaginationSwitch: function () {
        return "Hide/Show pagination";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Refresh";
      },
      formatToggle: function () {
        return "Toggle";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columns";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      }
    },
    Vr = { field: void 0, title: void 0, titleTooltip: void 0, class: void 0, width: void 0, widthUnit: "px", rowspan: void 0, colspan: void 0, align: void 0, halign: void 0, falign: void 0, valign: void 0, cellStyle: void 0, radio: !1, checkbox: !1, checkboxEnabled: !0, clickToSelect: !0, showSelectTitle: !1, sortable: !1, sortName: void 0, order: "asc", sorter: void 0, visible: !0, switchable: !0, cardVisible: !0, searchable: !0, formatter: void 0, footerFormatter: void 0, detailFormatter: void 0, searchFormatter: !0, searchHighlightFormatter: !1, escape: !1, events: void 0 };
  Object.assign(Fr, Dr);
  var Br = { VERSION: "1.18.1", THEME: "bootstrap".concat(Er), CONSTANTS: _r, DEFAULTS: Fr, COLUMN_DEFAULTS: Vr, METHODS: ["getOptions", "refreshOptions", "getData", "getSelections", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "getRowByUniqueId", "updateByUniqueId", "removeByUniqueId", "updateCell", "updateCellByUniqueId", "showRow", "hideRow", "getHiddenRows", "showColumn", "hideColumn", "getVisibleColumns", "getHiddenColumns", "showAllColumns", "hideAllColumns", "mergeCells", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "destroy", "resetView", "showLoading", "hideLoading", "togglePagination", "toggleFullscreen", "toggleView", "resetSearch", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "toggleDetailView", "expandRow", "collapseRow", "expandRowByUniqueId", "collapseRowByUniqueId", "expandAllRows", "collapseAllRows", "updateColumnTitle", "updateFormatText"], EVENTS: { "all.bs.table": "onAll", "click-row.bs.table": "onClickRow", "dbl-click-row.bs.table": "onDblClickRow", "click-cell.bs.table": "onClickCell", "dbl-click-cell.bs.table": "onDblClickCell", "sort.bs.table": "onSort", "check.bs.table": "onCheck", "uncheck.bs.table": "onUncheck", "check-all.bs.table": "onCheckAll", "uncheck-all.bs.table": "onUncheckAll", "check-some.bs.table": "onCheckSome", "uncheck-some.bs.table": "onUncheckSome", "load-success.bs.table": "onLoadSuccess", "load-error.bs.table": "onLoadError", "column-switch.bs.table": "onColumnSwitch", "page-change.bs.table": "onPageChange", "search.bs.table": "onSearch", "toggle.bs.table": "onToggle", "pre-body.bs.table": "onPreBody", "post-body.bs.table": "onPostBody", "post-header.bs.table": "onPostHeader", "post-footer.bs.table": "onPostFooter", "expand-row.bs.table": "onExpandRow", "collapse-row.bs.table": "onCollapseRow", "refresh-options.bs.table": "onRefreshOptions", "reset-view.bs.table": "onResetView", "refresh.bs.table": "onRefresh", "scroll-body.bs.table": "onScrollBody" }, LOCALES: { en: Dr, "en-US": Dr } },
    Lr = r(function () {
      Dt(1);
    });
  Et(
    { target: "Object", stat: !0, forced: Lr },
    {
      keys: function (t) {
        return Dt(Ft(t));
      }
    }
  );
  var Hr,
    Mr = T.f,
    Ur = "".endsWith,
    zr = Math.min,
    qr = Lo("endsWith"),
    Wr = !(qr || ((Hr = Mr(String.prototype, "endsWith")), !Hr || Hr.writable));
  Et(
    { target: "String", proto: !0, forced: !Wr && !qr },
    {
      endsWith: function (t) {
        var e = String(g(this));
        Vo(t);
        var i = arguments.length > 1 ? arguments[1] : void 0,
          n = ht(e.length),
          o = void 0 === i ? n : zr(ht(i), n),
          r = String(t);
        return Ur ? Ur.call(e, r, o) : e.slice(o - r.length, o) === r;
      }
    }
  );
  var Gr = T.f,
    Kr = "".startsWith,
    Yr = Math.min,
    Jr = Lo("startsWith"),
    Xr =
      !Jr &&
      !!(function () {
        var t = Gr(String.prototype, "startsWith");
        return t && !t.writable;
      })();
  Et(
    { target: "String", proto: !0, forced: !Xr && !Jr },
    {
      startsWith: function (t) {
        var e = String(g(this));
        Vo(t);
        var i = ht(Yr(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          n = String(t);
        return Kr ? Kr.call(e, n, i) : e.slice(i, i + n.length) === n;
      }
    }
  );
  var Qr = {
      getSearchInput: function (e) {
        return "string" == typeof e.options.searchSelector ? t(e.options.searchSelector) : e.$toolbar.find(".search input");
      },
      sprintf: function (t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
        var o = !0,
          r = 0,
          a = t.replace(/%s/g, function () {
            var t = i[r++];
            return void 0 === t ? ((o = !1), "") : t;
          });
        return o ? a : "";
      },
      isObject: function (t) {
        return t instanceof Object && !Array.isArray(t);
      },
      isEmptyObject: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return 0 === Object.entries(t).length && t.constructor === Object;
      },
      isNumeric: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
      getFieldTitle: function (t, e) {
        var i = !0,
          n = !1,
          o = void 0;
        try {
          for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
            var s = r.value;
            if (s.field === e) return s.title;
          }
        } catch (t) {
          (n = !0), (o = t);
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (n) throw o;
          }
        }
        return "";
      },
      setFieldIndex: function (t) {
        var e = 0,
          i = [],
          n = !0,
          o = !1,
          r = void 0;
        try {
          for (var a, s = t[0][Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
            e += a.value.colspan || 1;
          }
        } catch (t) {
          (o = !0), (r = t);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (o) throw r;
          }
        }
        for (var l = 0; l < t.length; l++) {
          i[l] = [];
          for (var c = 0; c < e; c++) i[l][c] = !1;
        }
        for (var h = 0; h < t.length; h++) {
          var u = !0,
            d = !1,
            p = void 0;
          try {
            for (var f, g = t[h][Symbol.iterator](); !(u = (f = g.next()).done); u = !0) {
              var v = f.value,
                b = v.rowspan || 1,
                y = v.colspan || 1,
                m = i[h].indexOf(!1);
              (v.colspanIndex = m), 1 === y ? ((v.fieldIndex = m), void 0 === v.field && (v.field = m)) : (v.colspanGroup = v.colspan);
              for (var w = 0; w < b; w++) for (var S = 0; S < y; S++) i[h + w][m + S] = !0;
            }
          } catch (t) {
            (d = !0), (p = t);
          } finally {
            try {
              u || null == g.return || g.return();
            } finally {
              if (d) throw p;
            }
          }
        }
      },
      normalizeAccent: function (t) {
        return "string" != typeof t ? t : t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      },
      updateFieldGroup: function (t) {
        var e,
          i = (e = []).concat.apply(e, Rr(t)),
          n = !0,
          o = !1,
          r = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
            var l = a.value,
              c = !0,
              h = !1,
              u = void 0;
            try {
              for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                var f = d.value;
                if (f.colspanGroup > 1) {
                  for (
                    var g = 0,
                      v = function (t) {
                        i.find(function (e) {
                          return e.fieldIndex === t;
                        }).visible && g++;
                      },
                      b = f.colspanIndex;
                    b < f.colspanIndex + f.colspanGroup;
                    b++
                  )
                    v(b);
                  (f.colspan = g), (f.visible = g > 0);
                }
              }
            } catch (t) {
              (h = !0), (u = t);
            } finally {
              try {
                c || null == p.return || p.return();
              } finally {
                if (h) throw u;
              }
            }
          }
        } catch (t) {
          (o = !0), (r = t);
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (o) throw r;
          }
        }
      },
      getScrollBarWidth: function () {
        if (void 0 === this.cachedWidth) {
          var e = t("<div/>").addClass("fixed-table-scroll-inner"),
            i = t("<div/>").addClass("fixed-table-scroll-outer");
          i.append(e), t("body").append(i);
          var n = e[0].offsetWidth;
          i.css("overflow", "scroll");
          var o = e[0].offsetWidth;
          n === o && (o = i[0].clientWidth), i.remove(), (this.cachedWidth = n - o);
        }
        return this.cachedWidth;
      },
      calculateObjectValue: function (t, e, i, n) {
        var o = e;
        if ("string" == typeof e) {
          var r = e.split(".");
          if (r.length > 1) {
            o = window;
            var a = !0,
              s = !1,
              l = void 0;
            try {
              for (var c, h = r[Symbol.iterator](); !(a = (c = h.next()).done); a = !0) {
                o = o[c.value];
              }
            } catch (t) {
              (s = !0), (l = t);
            } finally {
              try {
                a || null == h.return || h.return();
              } finally {
                if (s) throw l;
              }
            }
          } else o = window[e];
        }
        return null !== o && "object" === Tr(o) ? o : "function" == typeof o ? o.apply(t, i || []) : !o && "string" == typeof e && this.sprintf.apply(this, [e].concat(Rr(i))) ? this.sprintf.apply(this, [e].concat(Rr(i))) : n;
      },
      compareObjects: function (t, e, i) {
        var n = Object.keys(t),
          o = Object.keys(e);
        if (i && n.length !== o.length) return !1;
        for (var r = 0, a = n; r < a.length; r++) {
          var s = a[r];
          if (o.includes(s) && t[s] !== e[s]) return !1;
        }
        return !0;
      },
      escapeHTML: function (t) {
        return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : t;
      },
      unescapeHTML: function (t) {
        return "string" == typeof t
          ? t
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&#x60;/g, "`")
          : t;
      },
      getRealDataAttr: function (t) {
        for (var e = 0, i = Object.entries(t); e < i.length; e++) {
          var n = $r(i[e], 2),
            o = n[0],
            r = n[1],
            a = o
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();
          a !== o && ((t[a] = r), delete t[o]);
        }
        return t;
      },
      getItemField: function (t, e, i) {
        var n = t;
        if ("string" != typeof e || t.hasOwnProperty(e)) return i ? this.escapeHTML(t[e]) : t[e];
        var o = e.split("."),
          r = !0,
          a = !1,
          s = void 0;
        try {
          for (var l, c = o[Symbol.iterator](); !(r = (l = c.next()).done); r = !0) {
            var h = l.value;
            n = n && n[h];
          }
        } catch (t) {
          (a = !0), (s = t);
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (a) throw s;
          }
        }
        return i ? this.escapeHTML(n) : n;
      },
      isIEBrowser: function () {
        return navigator.userAgent.includes("MSIE ") || /Trident.*rv:11\./.test(navigator.userAgent);
      },
      findIndex: function (t, e) {
        var i = !0,
          n = !1,
          o = void 0;
        try {
          for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done); i = !0) {
            var s = r.value;
            if (JSON.stringify(s) === JSON.stringify(e)) return t.indexOf(s);
          }
        } catch (t) {
          (n = !0), (o = t);
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (n) throw o;
          }
        }
        return -1;
      },
      trToData: function (e, i) {
        var n = this,
          o = [],
          r = [];
        return (
          i.each(function (i, a) {
            var s = t(a),
              l = {};
            (l._id = s.attr("id")),
              (l._class = s.attr("class")),
              (l._data = n.getRealDataAttr(s.data())),
              (l._style = s.attr("style")),
              s.find(">td,>th").each(function (o, a) {
                for (var s = t(a), c = +s.attr("colspan") || 1, h = +s.attr("rowspan") || 1, u = o; r[i] && r[i][u]; u++);
                for (var d = u; d < u + c; d++) for (var p = i; p < i + h; p++) r[p] || (r[p] = []), (r[p][d] = !0);
                var f = e[u].field;
                (l[f] = s.html().trim()), (l["_".concat(f, "_id")] = s.attr("id")), (l["_".concat(f, "_class")] = s.attr("class")), (l["_".concat(f, "_rowspan")] = s.attr("rowspan")), (l["_".concat(f, "_colspan")] = s.attr("colspan")), (l["_".concat(f, "_title")] = s.attr("title")), (l["_".concat(f, "_data")] = n.getRealDataAttr(s.data())), (l["_".concat(f, "_style")] = s.attr("style"));
              }),
              o.push(l);
          }),
          o
        );
      },
      sort: function (t, e, i, n, o, r) {
        return null == t && (t = ""), null == e && (e = ""), n && t === e && ((t = o), (e = r)), this.isNumeric(t) && this.isNumeric(e) ? ((t = parseFloat(t)) < (e = parseFloat(e)) ? -1 * i : t > e ? i : 0) : t === e ? 0 : ("string" != typeof t && (t = t.toString()), -1 === t.localeCompare(e) ? -1 * i : i);
      },
      getEventName: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return (e = e || "".concat(+new Date()).concat(~~(1e6 * Math.random()))), "".concat(t, "-").concat(e);
      },
      hasDetailViewIcon: function (t) {
        return t.detailView && t.detailViewIcon && !t.cardView;
      },
      getDetailViewIndexOffset: function (t) {
        return this.hasDetailViewIcon(t) && "right" !== t.detailViewAlign ? 1 : 0;
      },
      checkAutoMergeCells: function (t) {
        var e = !0,
          i = !1,
          n = void 0;
        try {
          for (var o, r = t[Symbol.iterator](); !(e = (o = r.next()).done); e = !0)
            for (var a = o.value, s = 0, l = Object.keys(a); s < l.length; s++) {
              var c = l[s];
              if (c.startsWith("_") && (c.endsWith("_rowspan") || c.endsWith("_colspan"))) return !0;
            }
        } catch (t) {
          (i = !0), (n = t);
        } finally {
          try {
            e || null == r.return || r.return();
          } finally {
            if (i) throw n;
          }
        }
        return !1;
      },
      deepCopy: function (e) {
        return void 0 === e ? e : t.extend(!0, Array.isArray(e) ? [] : {}, e);
      }
    },
    Zr = (function () {
      function t(e) {
        var i = this;
        Pr(this, t), (this.rows = e.rows), (this.scrollEl = e.scrollEl), (this.contentEl = e.contentEl), (this.callback = e.callback), (this.itemHeight = e.itemHeight), (this.cache = {}), (this.scrollTop = this.scrollEl.scrollTop), this.initDOM(this.rows, e.fixedScroll), (this.scrollEl.scrollTop = this.scrollTop), (this.lastCluster = 0);
        var n = function () {
          i.lastCluster !== (i.lastCluster = i.getNum()) && (i.initDOM(i.rows), i.callback());
        };
        this.scrollEl.addEventListener("scroll", n, !1),
          (this.destroy = function () {
            (i.contentEl.innerHtml = ""), i.scrollEl.removeEventListener("scroll", n, !1);
          });
      }
      return (
        Ar(t, [
          {
            key: "initDOM",
            value: function (t, e) {
              void 0 === this.clusterHeight && ((this.cache.scrollTop = this.scrollEl.scrollTop), (this.cache.data = this.contentEl.innerHTML = t[0] + t[0] + t[0]), this.getRowsHeight(t));
              var i = this.initData(t, this.getNum(e)),
                n = i.rows.join(""),
                o = this.checkChanges("data", n),
                r = this.checkChanges("top", i.topOffset),
                a = this.checkChanges("bottom", i.bottomOffset),
                s = [];
              o && r ? (i.topOffset && s.push(this.getExtra("top", i.topOffset)), s.push(n), i.bottomOffset && s.push(this.getExtra("bottom", i.bottomOffset)), (this.contentEl.innerHTML = s.join("")), e && (this.contentEl.scrollTop = this.cache.scrollTop)) : a && (this.contentEl.lastChild.style.height = "".concat(i.bottomOffset, "px"));
            }
          },
          {
            key: "getRowsHeight",
            value: function () {
              if (void 0 === this.itemHeight) {
                var t = this.contentEl.children,
                  e = t[Math.floor(t.length / 2)];
                this.itemHeight = e.offsetHeight;
              }
              (this.blockHeight = 50 * this.itemHeight), (this.clusterRows = 200), (this.clusterHeight = 4 * this.blockHeight);
            }
          },
          {
            key: "getNum",
            value: function (t) {
              return (this.scrollTop = t ? this.cache.scrollTop : this.scrollEl.scrollTop), Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0;
            }
          },
          {
            key: "initData",
            value: function (t, e) {
              if (t.length < 50) return { topOffset: 0, bottomOffset: 0, rowsAbove: 0, rows: t };
              var i = Math.max((this.clusterRows - 50) * e, 0),
                n = i + this.clusterRows,
                o = Math.max(i * this.itemHeight, 0),
                r = Math.max((t.length - n) * this.itemHeight, 0),
                a = [],
                s = i;
              o < 1 && s++;
              for (var l = i; l < n; l++) t[l] && a.push(t[l]);
              return { topOffset: o, bottomOffset: r, rowsAbove: s, rows: a };
            }
          },
          {
            key: "checkChanges",
            value: function (t, e) {
              var i = e !== this.cache[t];
              return (this.cache[t] = e), i;
            }
          },
          {
            key: "getExtra",
            value: function (t, e) {
              var i = document.createElement("tr");
              return (i.className = "virtual-scroll-".concat(t)), e && (i.style.height = "".concat(e, "px")), i.outerHTML;
            }
          }
        ]),
        t
      );
    })(),
    ta = (function () {
      function e(i, n) {
        Pr(this, e), (this.options = n), (this.$el = t(i)), (this.$el_ = this.$el.clone()), (this.timeoutId_ = 0), (this.timeoutFooter_ = 0);
      }
      return (
        Ar(e, [
          {
            key: "init",
            value: function () {
              this.initConstants(), this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer();
            }
          },
          {
            key: "initConstants",
            value: function () {
              var e = this.options;
              (this.constants = Br.CONSTANTS), (this.constants.theme = t.fn.bootstrapTable.theme);
              var i = e.buttonsPrefix ? "".concat(e.buttonsPrefix, "-") : "";
              (this.constants.buttonsClass = [e.buttonsPrefix, i + e.buttonsClass, Qr.sprintf("".concat(i, "%s"), e.iconSize)].join(" ").trim()), (this.buttons = Qr.calculateObjectValue(this, e.buttons, [], {})), "object" !== Tr(this.buttons) && (this.buttons = {}), "string" == typeof e.icons && (e.icons = Qr.calculateObjectValue(null, e.icons));
            }
          },
          {
            key: "initLocale",
            value: function () {
              if (this.options.locale) {
                var e = t.fn.bootstrapTable.locales,
                  i = this.options.locale.split(/-|_/);
                (i[0] = i[0].toLowerCase()), i[1] && (i[1] = i[1].toUpperCase()), e[this.options.locale] ? t.extend(this.options, e[this.options.locale]) : e[i.join("-")] ? t.extend(this.options, e[i.join("-")]) : e[i[0]] && t.extend(this.options, e[i[0]]);
              }
            }
          },
          {
            key: "initContainer",
            value: function () {
              var e = ["top", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : "",
                i = ["bottom", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : "",
                n = Qr.calculateObjectValue(this.options, this.options.loadingTemplate, [this.options.formatLoadingMessage()]);
              (this.$container = t('\n      <div class="bootstrap-table '.concat(this.constants.theme, '">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(e, '\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      ').concat(n, '\n      </div>\n      </div>\n      <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ').concat(i, "\n      </div>\n    "))), this.$container.insertAfter(this.$el), (this.$tableContainer = this.$container.find(".fixed-table-container")), (this.$tableHeader = this.$container.find(".fixed-table-header")), (this.$tableBody = this.$container.find(".fixed-table-body")), (this.$tableLoading = this.$container.find(".fixed-table-loading")), (this.$tableFooter = this.$el.find("tfoot")), this.options.buttonsToolbar ? (this.$toolbar = t("body").find(this.options.buttonsToolbar)) : (this.$toolbar = this.$container.find(".fixed-table-toolbar")), (this.$pagination = this.$container.find(".fixed-table-pagination")), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.$tableLoading.addClass(this.options.classes), this.options.height && (this.$tableContainer.addClass("fixed-height"), this.options.showFooter && this.$tableContainer.addClass("has-footer"), this.options.classes.split(" ").includes("table-bordered") && (this.$tableBody.append('<div class="fixed-table-border"></div>'), (this.$tableBorder = this.$tableBody.find(".fixed-table-border")), this.$tableLoading.addClass("fixed-table-border")), (this.$tableFooter = this.$container.find(".fixed-table-footer")));
            }
          },
          {
            key: "initTable",
            value: function () {
              var i = this,
                n = [];
              if (
                ((this.$header = this.$el.find(">thead")),
                this.$header.length ? this.options.theadClasses && this.$header.addClass(this.options.theadClasses) : (this.$header = t('<thead class="'.concat(this.options.theadClasses, '"></thead>')).appendTo(this.$el)),
                (this._headerTrClasses = []),
                (this._headerTrStyles = []),
                this.$header.find("tr").each(function (e, o) {
                  var r = t(o),
                    a = [];
                  r.find("th").each(function (e, i) {
                    var n = t(i);
                    void 0 !== n.data("field") && n.data("field", "".concat(n.data("field"))), a.push(t.extend({}, { title: n.html(), class: n.attr("class"), titleTooltip: n.attr("title"), rowspan: n.attr("rowspan") ? +n.attr("rowspan") : void 0, colspan: n.attr("colspan") ? +n.attr("colspan") : void 0 }, n.data()));
                  }),
                    n.push(a),
                    r.attr("class") && i._headerTrClasses.push(r.attr("class")),
                    r.attr("style") && i._headerTrStyles.push(r.attr("style"));
                }),
                Array.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]),
                (this.options.columns = t.extend(!0, [], n, this.options.columns)),
                (this.columns = []),
                (this.fieldsColumnsIndex = []),
                Qr.setFieldIndex(this.options.columns),
                this.options.columns.forEach(function (n, o) {
                  n.forEach(function (n, r) {
                    var a = t.extend({}, e.COLUMN_DEFAULTS, n);
                    void 0 !== a.fieldIndex && ((i.columns[a.fieldIndex] = a), (i.fieldsColumnsIndex[a.field] = a.fieldIndex)), (i.options.columns[o][r] = a);
                  });
                }),
                !this.options.data.length)
              ) {
                var o = Qr.trToData(this.columns, this.$el.find(">tbody>tr"));
                o.length && ((this.options.data = o), (this.fromHtml = !0));
              }
              (this.options.pagination && "server" !== this.options.sidePagination) || (this.footerData = Qr.trToData(this.columns, this.$el.find(">tfoot>tr"))), this.footerData && this.$el.find("tfoot").html("<tr></tr>"), !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show();
            }
          },
          {
            key: "initHeader",
            value: function () {
              var e = this,
                i = {},
                n = [];
              (this.header = { fields: [], styles: [], classes: [], formatters: [], detailFormatters: [], events: [], sorters: [], sortNames: [], cellStyles: [], searchables: [] }),
                Qr.updateFieldGroup(this.options.columns),
                this.options.columns.forEach(function (t, o) {
                  n.push("<tr".concat(Qr.sprintf(' class="%s"', e._headerTrClasses[o]), " ").concat(Qr.sprintf(' style="%s"', e._headerTrStyles[o]), ">"));
                  var r = "";
                  0 === o && Qr.hasDetailViewIcon(e.options) && (r = '<th class="detail" rowspan="'.concat(e.options.columns.length, '">\n          <div class="fht-cell"></div>\n          </th>')),
                    r && "right" !== e.options.detailViewAlign && n.push(r),
                    t.forEach(function (t, r) {
                      var a = Qr.sprintf(' class="%s"', t.class),
                        s = t.widthUnit,
                        l = parseFloat(t.width),
                        c = Qr.sprintf("text-align: %s; ", t.halign ? t.halign : t.align),
                        h = Qr.sprintf("text-align: %s; ", t.align),
                        u = Qr.sprintf("vertical-align: %s; ", t.valign);
                      if (((u += Qr.sprintf("width: %s; ", (!t.checkbox && !t.radio) || l ? (l ? l + s : void 0) : t.showSelectTitle ? void 0 : "36px")), void 0 !== t.fieldIndex || t.visible)) {
                        var d = Qr.calculateObjectValue(null, e.options.headerStyle, [t]),
                          p = [],
                          f = "";
                        if (d && d.css)
                          for (var g = 0, v = Object.entries(d.css); g < v.length; g++) {
                            var b = $r(v[g], 2),
                              y = b[0],
                              m = b[1];
                            p.push("".concat(y, ": ").concat(m));
                          }
                        if ((d && d.classes && (f = Qr.sprintf(' class="%s"', t.class ? [t.class, d.classes].join(" ") : d.classes)), void 0 !== t.fieldIndex)) {
                          if (((e.header.fields[t.fieldIndex] = t.field), (e.header.styles[t.fieldIndex] = h + u), (e.header.classes[t.fieldIndex] = a), (e.header.formatters[t.fieldIndex] = t.formatter), (e.header.detailFormatters[t.fieldIndex] = t.detailFormatter), (e.header.events[t.fieldIndex] = t.events), (e.header.sorters[t.fieldIndex] = t.sorter), (e.header.sortNames[t.fieldIndex] = t.sortName), (e.header.cellStyles[t.fieldIndex] = t.cellStyle), (e.header.searchables[t.fieldIndex] = t.searchable), !t.visible)) return;
                          if (e.options.cardView && !t.cardVisible) return;
                          i[t.field] = t;
                        }
                        n.push("<th".concat(Qr.sprintf(' title="%s"', t.titleTooltip)), t.checkbox || t.radio ? Qr.sprintf(' class="bs-checkbox %s"', t.class || "") : f || a, Qr.sprintf(' style="%s"', c + u + p.join("; ")), Qr.sprintf(' rowspan="%s"', t.rowspan), Qr.sprintf(' colspan="%s"', t.colspan), Qr.sprintf(' data-field="%s"', t.field), 0 === r && o > 0 ? " data-not-first-th" : "", ">"), n.push(Qr.sprintf('<div class="th-inner %s">', e.options.sortable && t.sortable ? "sortable both" : ""));
                        var w = e.options.escape ? Qr.escapeHTML(t.title) : t.title,
                          S = w;
                        t.checkbox && ((w = ""), !e.options.singleSelect && e.options.checkboxHeader && (w = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'), (e.header.stateField = t.field)), t.radio && ((w = ""), (e.header.stateField = t.field)), !w && t.showSelectTitle && (w += S), n.push(w), n.push("</div>"), n.push('<div class="fht-cell"></div>'), n.push("</div>"), n.push("</th>");
                      }
                    }),
                    r && "right" === e.options.detailViewAlign && n.push(r),
                    n.push("</tr>");
                }),
                this.$header.html(n.join("")),
                this.$header.find("th[data-field]").each(function (e, n) {
                  t(n).data(i[t(n).data("field")]);
                }),
                this.$container.off("click", ".th-inner").on("click", ".th-inner", function (i) {
                  var n = t(i.currentTarget);
                  if (e.options.detailView && !n.parent().hasClass("bs-checkbox") && n.closest(".bootstrap-table")[0] !== e.$container[0]) return !1;
                  e.options.sortable && n.parent().data().sortable && e.onSort(i);
                }),
                this.$header
                  .children()
                  .children()
                  .off("keypress")
                  .on("keypress", function (i) {
                    e.options.sortable && t(i.currentTarget).data().sortable && 13 === (i.keyCode || i.which) && e.onSort(i);
                  });
              var o = Qr.getEventName("resize.bootstrap-table", this.$el.attr("id"));
              t(window).off(o),
                !this.options.showHeader || this.options.cardView
                  ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0))
                  : (this.$header.show(),
                    this.$tableHeader.show(),
                    this.$tableLoading.css("top", this.$header.outerHeight() + 1),
                    this.getCaret(),
                    t(window).on(o, function () {
                      return e.resetView();
                    })),
                (this.$selectAll = this.$header.find('[name="btSelectAll"]')),
                this.$selectAll.off("click").on("click", function (i) {
                  i.stopPropagation();
                  var n = t(i.currentTarget).prop("checked");
                  e[n ? "checkAll" : "uncheckAll"](), e.updateSelected();
                });
            }
          },
          {
            key: "initData",
            value: function (t, e) {
              "append" === e ? (this.options.data = this.options.data.concat(t)) : "prepend" === e ? (this.options.data = [].concat(t).concat(this.options.data)) : ((t = t || Qr.deepCopy(this.options.data)), (this.options.data = Array.isArray(t) ? t : t[this.options.dataField])), (this.data = Rr(this.options.data)), this.options.sortReset && (this.unsortedData = Rr(this.data)), "server" !== this.options.sidePagination && this.initSort();
            }
          },
          {
            key: "initSort",
            value: function () {
              var t = this,
                e = this.options.sortName,
                i = "desc" === this.options.sortOrder ? -1 : 1,
                n = this.header.fields.indexOf(this.options.sortName),
                o = 0;
              -1 !== n
                ? (this.options.sortStable &&
                    this.data.forEach(function (t, e) {
                      t.hasOwnProperty("_position") || (t._position = e);
                    }),
                  this.options.customSort
                    ? Qr.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data])
                    : this.data.sort(function (o, r) {
                        t.header.sortNames[n] && (e = t.header.sortNames[n]);
                        var a = Qr.getItemField(o, e, t.options.escape),
                          s = Qr.getItemField(r, e, t.options.escape),
                          l = Qr.calculateObjectValue(t.header, t.header.sorters[n], [a, s, o, r]);
                        return void 0 !== l ? (t.options.sortStable && 0 === l ? i * (o._position - r._position) : i * l) : Qr.sort(a, s, i, t.options.sortStable, o._position, r._position);
                      }),
                  void 0 !== this.options.sortClass &&
                    (clearTimeout(o),
                    (o = setTimeout(function () {
                      t.$el.removeClass(t.options.sortClass);
                      var e = t.$header.find('[data-field="'.concat(t.options.sortName, '"]')).index();
                      t.$el.find("tr td:nth-child(".concat(e + 1, ")")).addClass(t.options.sortClass);
                    }, 250))))
                : this.options.sortReset && (this.data = Rr(this.unsortedData));
            }
          },
          {
            key: "onSort",
            value: function (e) {
              var i = e.type,
                n = e.currentTarget,
                o = "keypress" === i ? t(n) : t(n).parent(),
                r = this.$header.find("th").eq(o.index());
              if ((this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === o.data("field"))) {
                var a = this.options.sortOrder;
                void 0 === a ? (this.options.sortOrder = "asc") : "asc" === a ? (this.options.sortOrder = "desc") : "desc" === this.options.sortOrder && (this.options.sortOrder = this.options.sortReset ? void 0 : "asc"), void 0 === this.options.sortOrder && (this.options.sortName = void 0);
              } else (this.options.sortName = o.data("field")), this.options.rememberOrder ? (this.options.sortOrder = "asc" === o.data("order") ? "desc" : "asc") : (this.options.sortOrder = this.columns[this.fieldsColumnsIndex[o.data("field")]].sortOrder || this.columns[this.fieldsColumnsIndex[o.data("field")]].order);
              if ((this.trigger("sort", this.options.sortName, this.options.sortOrder), o.add(r).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination && this.options.serverSort)) return (this.options.pageNumber = 1), void this.initServer(this.options.silentSort);
              this.initSort(), this.initBody();
            }
          },
          {
            key: "initToolbar",
            value: function () {
              var e,
                i = this,
                n = this.options,
                o = [],
                r = 0,
                a = 0;
              this.$toolbar.find(".bs-bars").children().length && t("body").append(t(n.toolbar)),
                this.$toolbar.html(""),
                ("string" != typeof n.toolbar && "object" !== Tr(n.toolbar)) || t(Qr.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, n.toolbarAlign)).appendTo(this.$toolbar).append(t(n.toolbar)),
                (o = ['<div class="'.concat(["columns", "columns-".concat(n.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(n.buttonsAlign)].join(" "), '">')]),
                "string" == typeof n.buttonsOrder && (n.buttonsOrder = n.buttonsOrder.replace(/\[|\]| |'/g, "").split(",")),
                (this.buttons = Object.assign(this.buttons, {
                  paginationSwitch: { text: n.pagination ? n.formatPaginationSwitchUp() : n.formatPaginationSwitchDown(), icon: n.pagination ? n.icons.paginationSwitchDown : n.icons.paginationSwitchUp, render: !1, event: this.togglePagination, attributes: { "aria-label": n.formatPaginationSwitch(), title: n.formatPaginationSwitch() } },
                  refresh: { text: n.formatRefresh(), icon: n.icons.refresh, render: !1, event: this.refresh, attributes: { "aria-label": n.formatRefresh(), title: n.formatRefresh() } },
                  toggle: { text: n.formatToggle(), icon: n.icons.toggleOff, render: !1, event: this.toggleView, attributes: { "aria-label": n.formatToggleOn(), title: n.formatToggleOn() } },
                  fullscreen: { text: n.formatFullscreen(), icon: n.icons.fullscreen, render: !1, event: this.toggleFullscreen, attributes: { "aria-label": n.formatFullscreen(), title: n.formatFullscreen() } },
                  columns: {
                    render: !1,
                    html: function () {
                      var t = [];
                      if (
                        (t.push(
                          '<div class="keep-open '
                            .concat(i.constants.classes.buttonsDropdown, '" title="')
                            .concat(n.formatColumns(), '">\n            <button class="')
                            .concat(i.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown"\n            aria-label="Columns" title="')
                            .concat(n.formatColumns(), '">\n            ')
                            .concat(n.showButtonIcons ? Qr.sprintf(i.constants.html.icon, n.iconsPrefix, n.icons.columns) : "", "\n            ")
                            .concat(n.showButtonText ? n.formatColumns() : "", "\n            ")
                            .concat(i.constants.html.dropdownCaret, "\n            </button>\n            ")
                            .concat(i.constants.html.toolbarDropdown[0])
                        ),
                        n.showColumnsSearch && (t.push(Qr.sprintf(i.constants.html.toolbarDropdownItem, Qr.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', i.constants.classes.input, n.formatSearch()))), t.push(i.constants.html.toolbarDropdownSeparator)),
                        n.showColumnsToggleAll)
                      ) {
                        var e =
                          i.getVisibleColumns().length ===
                          i.columns.filter(function (t) {
                            return !i.isSelectionColumn(t);
                          }).length;
                        t.push(Qr.sprintf(i.constants.html.toolbarDropdownItem, Qr.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', e ? 'checked="checked"' : "", n.formatColumnsToggleAll()))), t.push(i.constants.html.toolbarDropdownSeparator);
                      }
                      var o = 0;
                      return (
                        i.columns.forEach(function (t) {
                          t.visible && o++;
                        }),
                        i.columns.forEach(function (e, r) {
                          if (!i.isSelectionColumn(e) && (!n.cardView || e.cardVisible)) {
                            var s = e.visible ? ' checked="checked"' : "",
                              l = o <= n.minimumCountColumns && s ? ' disabled="disabled"' : "";
                            e.switchable && (t.push(Qr.sprintf(i.constants.html.toolbarDropdownItem, Qr.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>', e.field, r, s, l, e.title))), a++);
                          }
                        }),
                        t.push(i.constants.html.toolbarDropdown[1], "</div>"),
                        t.join("")
                      );
                    }
                  }
                }));
              for (var s = {}, l = 0, c = Object.entries(this.buttons); l < c.length; l++) {
                var h = $r(c[l], 2),
                  u = h[0],
                  d = h[1],
                  p = void 0;
                if (d.hasOwnProperty("html")) "function" == typeof d.html ? (p = d.html()) : "string" == typeof d.html && (p = d.html);
                else {
                  if (((p = '<button class="'.concat(this.constants.buttonsClass, '" type="button" name="').concat(u, '"')), d.hasOwnProperty("attributes")))
                    for (var f = 0, g = Object.entries(d.attributes); f < g.length; f++) {
                      var v = $r(g[f], 2),
                        b = v[0],
                        y = v[1];
                      p += " ".concat(b, '="').concat(y, '"');
                    }
                  (p += ">"), n.showButtonIcons && d.hasOwnProperty("icon") && (p += "".concat(Qr.sprintf(this.constants.html.icon, n.iconsPrefix, d.icon), " ")), n.showButtonText && d.hasOwnProperty("text") && (p += d.text), (p += "</button>");
                }
                s[u] = p;
                var m = "show".concat(u.charAt(0).toUpperCase()).concat(u.substring(1)),
                  w = n[m];
                !(!d.hasOwnProperty("render") || (d.hasOwnProperty("render") && d.render)) || (void 0 !== w && !0 !== w) || (n[m] = !0), n.buttonsOrder.includes(u) || n.buttonsOrder.push(u);
              }
              var S = !0,
                x = !1,
                k = void 0;
              try {
                for (var O, C = n.buttonsOrder[Symbol.iterator](); !(S = (O = C.next()).done); S = !0) {
                  var T = O.value;
                  n["show".concat(T.charAt(0).toUpperCase()).concat(T.substring(1))] && o.push(s[T]);
                }
              } catch (t) {
                (x = !0), (k = t);
              } finally {
                try {
                  S || null == C.return || C.return();
                } finally {
                  if (x) throw k;
                }
              }
              o.push("</div>"), (this.showToolbar || o.length > 2) && this.$toolbar.append(o.join(""));
              for (var P = 0, I = Object.entries(this.buttons); P < I.length; P++) {
                var A = $r(I[P], 2),
                  $ = A[0],
                  R = A[1];
                if (R.hasOwnProperty("event")) {
                  if ("function" == typeof R.event || "string" == typeof R.event)
                    if (
                      "continue" ===
                      (function () {
                        var t = "string" == typeof R.event ? window[R.event] : R.event;
                        return (
                          i.$toolbar
                            .find('button[name="'.concat($, '"]'))
                            .off("click")
                            .on("click", function () {
                              return t.call(i);
                            }),
                          "continue"
                        );
                      })()
                    )
                      continue;
                  for (
                    var E = function () {
                        var t = $r(N[j], 2),
                          e = t[0],
                          n = t[1],
                          o = "string" == typeof n ? window[n] : n;
                        i.$toolbar
                          .find('button[name="'.concat($, '"]'))
                          .off(e)
                          .on(e, function () {
                            return o.call(i);
                          });
                      },
                      j = 0,
                      N = Object.entries(R.event);
                    j < N.length;
                    j++
                  )
                    E();
                }
              }
              if (n.showColumns) {
                var _ = (e = this.$toolbar.find(".keep-open")).find('input[type="checkbox"]:not(".toggle-all")'),
                  F = e.find('input[type="checkbox"].toggle-all');
                if (
                  (a <= n.minimumCountColumns && e.find("input").prop("disabled", !0),
                  e
                    .find("li, label")
                    .off("click")
                    .on("click", function (t) {
                      t.stopImmediatePropagation();
                    }),
                  _.off("click").on("click", function (e) {
                    var n = e.currentTarget,
                      o = t(n);
                    i._toggleColumn(o.val(), o.prop("checked"), !1),
                      i.trigger("column-switch", o.data("field"), o.prop("checked")),
                      F.prop(
                        "checked",
                        _.filter(":checked").length ===
                          i.columns.filter(function (t) {
                            return !i.isSelectionColumn(t);
                          }).length
                      );
                  }),
                  F.off("click").on("click", function (e) {
                    var n = e.currentTarget;
                    i._toggleAllColumns(t(n).prop("checked"));
                  }),
                  n.showColumnsSearch)
                ) {
                  var D = e.find('[name="columnsSearch"]'),
                    V = e.find(".dropdown-item-marker");
                  D.on("keyup paste change", function (e) {
                    var i = e.currentTarget,
                      n = t(i).val().toLowerCase();
                    V.show(),
                      _.each(function (e, i) {
                        var o = t(i).parents(".dropdown-item-marker");
                        o.text().toLowerCase().includes(n) || o.hide();
                      });
                  });
                }
              }
              var B = function (t) {
                var e = "keyup drop blur mouseup";
                t.off(e).on(e, function (t) {
                  (n.searchOnEnterKey && 13 !== t.keyCode) ||
                    [37, 38, 39, 40].includes(t.keyCode) ||
                    (clearTimeout(r),
                    (r = setTimeout(function () {
                      i.onSearch({ currentTarget: t.currentTarget });
                    }, n.searchTimeOut)));
                });
              };
              if ((n.search || this.showSearchClearButton) && "string" != typeof n.searchSelector) {
                o = [];
                var L = Qr.sprintf(this.constants.html.searchButton, this.constants.buttonsClass, n.formatSearch(), n.showButtonIcons ? Qr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.search) : "", n.showButtonText ? n.formatSearch() : ""),
                  H = Qr.sprintf(this.constants.html.searchClearButton, this.constants.buttonsClass, n.formatClearSearch(), n.showButtonIcons ? Qr.sprintf(this.constants.html.icon, n.iconsPrefix, n.icons.clearSearch) : "", n.showButtonText ? n.formatClearSearch() : ""),
                  M = '<input class="'.concat(this.constants.classes.input, "\n        ").concat(Qr.sprintf(" %s%s", this.constants.classes.inputPrefix, n.iconSize), '\n        search-input" type="search" placeholder="').concat(n.formatSearch(), '" autocomplete="off">'),
                  U = M;
                if (n.showSearchButton || n.showSearchClearButton) {
                  var z = (n.showSearchButton ? L : "") + (n.showSearchClearButton ? H : "");
                  U = n.search ? Qr.sprintf(this.constants.html.inputGroup, M, z) : z;
                }
                o.push(Qr.sprintf('\n        <div class="'.concat(this.constants.classes.pull, "-").concat(n.searchAlign, " search ").concat(this.constants.classes.inputGroup, '">\n          %s\n        </div>\n      '), U)), this.$toolbar.append(o.join(""));
                var q = Qr.getSearchInput(this);
                n.showSearchButton
                  ? (this.$toolbar
                      .find(".search button[name=search]")
                      .off("click")
                      .on("click", function () {
                        clearTimeout(r),
                          (r = setTimeout(function () {
                            i.onSearch({ currentTarget: q });
                          }, n.searchTimeOut));
                      }),
                    n.searchOnEnterKey && B(q))
                  : B(q),
                  n.showSearchClearButton &&
                    this.$toolbar.find(".search button[name=clearSearch]").click(function () {
                      i.resetSearch();
                    });
              } else if ("string" == typeof n.searchSelector) {
                B(Qr.getSearchInput(this));
              }
            }
          },
          {
            key: "onSearch",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = e.currentTarget,
                n = e.firedByInitSearchText,
                o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (void 0 !== i && t(i).length && o) {
                var r = t(i).val().trim();
                if ((this.options.trimOnSearch && t(i).val() !== r && t(i).val(r), this.searchText === r)) return;
                (i === Qr.getSearchInput(this)[0] || t(i).hasClass("search-input")) && ((this.searchText = r), (this.options.searchText = r));
              }
              n || (this.options.pageNumber = 1), this.initSearch(), n ? "client" === this.options.sidePagination && this.updatePagination() : this.updatePagination(), this.trigger("search", this.searchText);
            }
          },
          {
            key: "initSearch",
            value: function () {
              var t = this;
              if (((this.filterOptions = this.filterOptions || this.options.filterOptions), "server" !== this.options.sidePagination)) {
                if (this.options.customSearch) return (this.data = Qr.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText, this.filterColumns])), void (this.options.sortReset && (this.unsortedData = Rr(this.data)));
                var e = this.searchText && (this.fromHtml ? Qr.escapeHTML(this.searchText) : this.searchText).toLowerCase(),
                  i = Qr.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
                "function" == typeof this.filterOptions.filterAlgorithm
                  ? (this.data = this.options.data.filter(function (e) {
                      return t.filterOptions.filterAlgorithm.apply(null, [e, i]);
                    }))
                  : "string" == typeof this.filterOptions.filterAlgorithm &&
                    (this.data = i
                      ? this.options.data.filter(function (e) {
                          var n = t.filterOptions.filterAlgorithm;
                          if ("and" === n) {
                            for (var o in i) if ((Array.isArray(i[o]) && !i[o].includes(e[o])) || (!Array.isArray(i[o]) && e[o] !== i[o])) return !1;
                          } else if ("or" === n) {
                            var r = !1;
                            for (var a in i) ((Array.isArray(i[a]) && i[a].includes(e[a])) || (!Array.isArray(i[a]) && e[a] === i[a])) && (r = !0);
                            return r;
                          }
                          return !0;
                        })
                      : Rr(this.options.data));
                var n = this.getVisibleFields();
                (this.data = e
                  ? this.data.filter(function (i, o) {
                      for (var r = 0; r < t.header.fields.length; r++)
                        if (t.header.searchables[r] && (!t.options.visibleSearch || -1 !== n.indexOf(t.header.fields[r]))) {
                          var a = Qr.isNumeric(t.header.fields[r]) ? parseInt(t.header.fields[r], 10) : t.header.fields[r],
                            s = t.columns[t.fieldsColumnsIndex[a]],
                            l = void 0;
                          if ("string" == typeof a) {
                            l = i;
                            for (var c = a.split("."), h = 0; h < c.length; h++) null !== l[c[h]] && (l = l[c[h]]);
                          } else l = i[a];
                          if ((t.options.searchAccentNeutralise && (l = Qr.normalizeAccent(l)), s && s.searchFormatter && (l = Qr.calculateObjectValue(s, t.header.formatters[r], [l, i, o, s.field], l)), "string" == typeof l || "number" == typeof l))
                            if (t.options.strictSearch) {
                              if ("".concat(l).toLowerCase() === e) return !0;
                            } else {
                              var u = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(e),
                                d = !1;
                              if (u) {
                                var p = u[1] || "".concat(u[5], "l"),
                                  f = u[2] || u[3],
                                  g = parseInt(l, 10),
                                  v = parseInt(f, 10);
                                switch (p) {
                                  case ">":
                                  case "<l":
                                    d = g > v;
                                    break;
                                  case "<":
                                  case ">l":
                                    d = g < v;
                                    break;
                                  case "<=":
                                  case "=<":
                                  case ">=l":
                                  case "=>l":
                                    d = g <= v;
                                    break;
                                  case ">=":
                                  case "=>":
                                  case "<=l":
                                  case "=<l":
                                    d = g >= v;
                                }
                              }
                              if (d || "".concat(l).toLowerCase().includes(e)) return !0;
                            }
                        }
                      return !1;
                    })
                  : this.data),
                  this.options.sortReset && (this.unsortedData = Rr(this.data)),
                  this.initSort();
              }
            }
          },
          {
            key: "initPagination",
            value: function () {
              var t = this,
                e = this.options;
              if (e.pagination) {
                this.$pagination.show();
                var i,
                  n,
                  o,
                  r,
                  a,
                  s,
                  l,
                  c = [],
                  h = !1,
                  u = this.getData({ includeHiddenRows: !1 }),
                  d = e.pageList;
                if (
                  ("string" == typeof d &&
                    (d = d
                      .replace(/\[|\]| /g, "")
                      .toLowerCase()
                      .split(",")),
                  (d = d.map(function (t) {
                    return "string" == typeof t ? (t.toLowerCase() === e.formatAllRows().toLowerCase() || ["all", "unlimited"].includes(t.toLowerCase()) ? e.formatAllRows() : +t) : t;
                  })),
                  (this.paginationParts = e.paginationParts),
                  "string" == typeof this.paginationParts && (this.paginationParts = this.paginationParts.replace(/\[|\]| |'/g, "").split(",")),
                  "server" !== e.sidePagination && (e.totalRows = u.length),
                  (this.totalPages = 0),
                  e.totalRows && (e.pageSize === e.formatAllRows() && ((e.pageSize = e.totalRows), (h = !0)), (this.totalPages = 1 + ~~((e.totalRows - 1) / e.pageSize)), (e.totalPages = this.totalPages)),
                  this.totalPages > 0 && e.pageNumber > this.totalPages && (e.pageNumber = this.totalPages),
                  (this.pageFrom = (e.pageNumber - 1) * e.pageSize + 1),
                  (this.pageTo = e.pageNumber * e.pageSize),
                  this.pageTo > e.totalRows && (this.pageTo = e.totalRows),
                  this.options.pagination && "server" !== this.options.sidePagination && (this.options.totalNotFiltered = this.options.data.length),
                  this.options.showExtendedPagination || (this.options.totalNotFiltered = void 0),
                  (this.paginationParts.includes("pageInfo") || this.paginationParts.includes("pageInfoShort") || this.paginationParts.includes("pageSize")) && c.push('<div class="'.concat(this.constants.classes.pull, "-").concat(e.paginationDetailHAlign, ' pagination-detail">')),
                  this.paginationParts.includes("pageInfo") || this.paginationParts.includes("pageInfoShort"))
                ) {
                  var p = this.paginationParts.includes("pageInfoShort") ? e.formatDetailPagination(e.totalRows) : e.formatShowingRows(this.pageFrom, this.pageTo, e.totalRows, e.totalNotFiltered);
                  c.push('<span class="pagination-info">\n      '.concat(p, "\n      </span>"));
                }
                if (this.paginationParts.includes("pageSize")) {
                  c.push('<span class="page-list">');
                  var f = [
                    '<span class="'
                      .concat(this.constants.classes.paginationDropdown, '">\n        <button class="')
                      .concat(this.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown">\n        <span class="page-size">\n        ')
                      .concat(h ? e.formatAllRows() : e.pageSize, "\n        </span>\n        ")
                      .concat(this.constants.html.dropdownCaret, "\n        </button>\n        ")
                      .concat(this.constants.html.pageDropdown[0])
                  ];
                  d.forEach(function (i, n) {
                    var o;
                    (!e.smartDisplay || 0 === n || d[n - 1] < e.totalRows || i === e.formatAllRows()) && ((o = h ? (i === e.formatAllRows() ? t.constants.classes.dropdownActive : "") : i === e.pageSize ? t.constants.classes.dropdownActive : ""), f.push(Qr.sprintf(t.constants.html.pageDropdownItem, o, i)));
                  }),
                    f.push("".concat(this.constants.html.pageDropdown[1], "</span>")),
                    c.push(e.formatRecordsPerPage(f.join("")));
                }
                if (((this.paginationParts.includes("pageInfo") || this.paginationParts.includes("pageInfoShort") || this.paginationParts.includes("pageSize")) && c.push("</span></div>"), this.paginationParts.includes("pageList"))) {
                  c.push('<div class="'.concat(this.constants.classes.pull, "-").concat(e.paginationHAlign, ' pagination">'), Qr.sprintf(this.constants.html.pagination[0], Qr.sprintf(" pagination-%s", e.iconSize)), Qr.sprintf(this.constants.html.paginationItem, " page-pre", e.formatSRPaginationPreText(), e.paginationPreText)), this.totalPages < e.paginationSuccessivelySize ? ((n = 1), (o = this.totalPages)) : (o = (n = e.pageNumber - e.paginationPagesBySide) + 2 * e.paginationPagesBySide), e.pageNumber < e.paginationSuccessivelySize - 1 && (o = e.paginationSuccessivelySize), e.paginationSuccessivelySize > this.totalPages - n && (n = n - (e.paginationSuccessivelySize - (this.totalPages - n)) + 1), n < 1 && (n = 1), o > this.totalPages && (o = this.totalPages);
                  var g = Math.round(e.paginationPagesBySide / 2),
                    v = function (i) {
                      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                      return Qr.sprintf(t.constants.html.paginationItem, n + (i === e.pageNumber ? " ".concat(t.constants.classes.paginationActive) : ""), e.formatSRPaginationPageText(i), i);
                    };
                  if (n > 1) {
                    var b = e.paginationPagesBySide;
                    for (b >= n && (b = n - 1), i = 1; i <= b; i++) c.push(v(i));
                    n - 1 === b + 1 ? ((i = n - 1), c.push(v(i))) : n - 1 > b && (n - 2 * e.paginationPagesBySide > e.paginationPagesBySide && e.paginationUseIntermediate ? ((i = Math.round((n - g) / 2 + g)), c.push(v(i, " page-intermediate"))) : c.push(Qr.sprintf(this.constants.html.paginationItem, " page-first-separator disabled", "", "...")));
                  }
                  for (i = n; i <= o; i++) c.push(v(i));
                  if (this.totalPages > o) {
                    var y = this.totalPages - (e.paginationPagesBySide - 1);
                    for (o >= y && (y = o + 1), o + 1 === y - 1 ? ((i = o + 1), c.push(v(i))) : y > o + 1 && (this.totalPages - o > 2 * e.paginationPagesBySide && e.paginationUseIntermediate ? ((i = Math.round((this.totalPages - g - o) / 2 + o)), c.push(v(i, " page-intermediate"))) : c.push(Qr.sprintf(this.constants.html.paginationItem, " page-last-separator disabled", "", "..."))), i = y; i <= this.totalPages; i++) c.push(v(i));
                  }
                  c.push(Qr.sprintf(this.constants.html.paginationItem, " page-next", e.formatSRPaginationNextText(), e.paginationNextText)), c.push(this.constants.html.pagination[1], "</div>");
                }
                this.$pagination.html(c.join(""));
                var m = ["bottom", "both"].includes(e.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : "";
                this.$pagination.last().find(".page-list > span").addClass(m),
                  e.onlyInfoPagination ||
                    ((r = this.$pagination.find(".page-list a")),
                    (a = this.$pagination.find(".page-pre")),
                    (s = this.$pagination.find(".page-next")),
                    (l = this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator")),
                    this.totalPages <= 1 && this.$pagination.find("div.pagination").hide(),
                    e.smartDisplay && (d.length < 2 || e.totalRows <= d[0]) && this.$pagination.find("span.page-list").hide(),
                    this.$pagination[this.getData().length ? "show" : "hide"](),
                    e.paginationLoop || (1 === e.pageNumber && a.addClass("disabled"), e.pageNumber === this.totalPages && s.addClass("disabled")),
                    h && (e.pageSize = e.formatAllRows()),
                    r.off("click").on("click", function (e) {
                      return t.onPageListChange(e);
                    }),
                    a.off("click").on("click", function (e) {
                      return t.onPagePre(e);
                    }),
                    s.off("click").on("click", function (e) {
                      return t.onPageNext(e);
                    }),
                    l.off("click").on("click", function (e) {
                      return t.onPageNumber(e);
                    }));
              } else this.$pagination.hide();
            }
          },
          {
            key: "updatePagination",
            value: function (e) {
              (e && t(e.currentTarget).hasClass("disabled")) || (this.options.maintainMetaData || this.resetRows(), this.initPagination(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize), "server" === this.options.sidePagination ? this.initServer() : this.initBody());
            }
          },
          {
            key: "onPageListChange",
            value: function (e) {
              e.preventDefault();
              var i = t(e.currentTarget);
              return i.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive), (this.options.pageSize = i.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +i.text()), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(e), !1;
            }
          },
          {
            key: "onPagePre",
            value: function (t) {
              return t.preventDefault(), this.options.pageNumber - 1 == 0 ? (this.options.pageNumber = this.options.totalPages) : this.options.pageNumber--, this.updatePagination(t), !1;
            }
          },
          {
            key: "onPageNext",
            value: function (t) {
              return t.preventDefault(), this.options.pageNumber + 1 > this.options.totalPages ? (this.options.pageNumber = 1) : this.options.pageNumber++, this.updatePagination(t), !1;
            }
          },
          {
            key: "onPageNumber",
            value: function (e) {
              if ((e.preventDefault(), this.options.pageNumber !== +t(e.currentTarget).text())) return (this.options.pageNumber = +t(e.currentTarget).text()), this.updatePagination(e), !1;
            }
          },
          {
            key: "initRow",
            value: function (t, e, i, n) {
              var o = this,
                r = [],
                a = {},
                s = [],
                l = "",
                c = {},
                h = [];
              if (!(Qr.findIndex(this.hiddenRows, t) > -1)) {
                if ((a = Qr.calculateObjectValue(this.options, this.options.rowStyle, [t, e], a)) && a.css)
                  for (var u = 0, d = Object.entries(a.css); u < d.length; u++) {
                    var p = $r(d[u], 2),
                      f = p[0],
                      g = p[1];
                    s.push("".concat(f, ": ").concat(g));
                  }
                if ((c = Qr.calculateObjectValue(this.options, this.options.rowAttributes, [t, e], c)))
                  for (var v = 0, b = Object.entries(c); v < b.length; v++) {
                    var y = $r(b[v], 2),
                      m = y[0],
                      w = y[1];
                    h.push("".concat(m, '="').concat(Qr.escapeHTML(w), '"'));
                  }
                if (t._data && !Qr.isEmptyObject(t._data))
                  for (var S = 0, x = Object.entries(t._data); S < x.length; S++) {
                    var k = $r(x[S], 2),
                      O = k[0],
                      C = k[1];
                    if ("index" === O) return;
                    l += " data-".concat(O, "='").concat("object" === Tr(C) ? JSON.stringify(C) : C, "'");
                  }
                r.push("<tr", Qr.sprintf(" %s", h.length ? h.join(" ") : void 0), Qr.sprintf(' id="%s"', Array.isArray(t) ? void 0 : t._id), Qr.sprintf(' class="%s"', a.classes || (Array.isArray(t) ? void 0 : t._class)), Qr.sprintf(' style="%s"', Array.isArray(t) ? void 0 : t._style), ' data-index="'.concat(e, '"'), Qr.sprintf(' data-uniqueid="%s"', Qr.getItemField(t, this.options.uniqueId, !1)), Qr.sprintf(' data-has-detail-view="%s"', this.options.detailView && Qr.calculateObjectValue(null, this.options.detailFilter, [e, t]) ? "true" : void 0), Qr.sprintf("%s", l), ">"), this.options.cardView && r.push('<td colspan="'.concat(this.header.fields.length, '"><div class="card-views">'));
                var T = "";
                return (
                  Qr.hasDetailViewIcon(this.options) && ((T = "<td>"), Qr.calculateObjectValue(null, this.options.detailFilter, [e, t]) && (T += '\n          <a class="detail-icon" href="#">\n          '.concat(Qr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen), "\n          </a>\n        ")), (T += "</td>")),
                  T && "right" !== this.options.detailViewAlign && r.push(T),
                  this.header.fields.forEach(function (i, n) {
                    var a = "",
                      l = Qr.getItemField(t, i, o.options.escape),
                      c = "",
                      h = "",
                      u = {},
                      d = "",
                      p = o.header.classes[n],
                      f = "",
                      g = "",
                      v = "",
                      b = "",
                      y = "",
                      m = "",
                      w = o.columns[n];
                    if (((!o.fromHtml && !o.autoMergeCells) || void 0 !== l || w.checkbox || w.radio) && w.visible && (!o.options.cardView || w.cardVisible)) {
                      if ((w.escape && (l = Qr.escapeHTML(l)), s.concat([o.header.styles[n]]).length && (g += "".concat(s.concat([o.header.styles[n]]).join("; "))), t["_".concat(i, "_style")] && (g += "".concat(t["_".concat(i, "_style")])), g && (f = ' style="'.concat(g, '"')), t["_".concat(i, "_id")] && (d = Qr.sprintf(' id="%s"', t["_".concat(i, "_id")])), t["_".concat(i, "_class")] && (p = Qr.sprintf(' class="%s"', t["_".concat(i, "_class")])), t["_".concat(i, "_rowspan")] && (b = Qr.sprintf(' rowspan="%s"', t["_".concat(i, "_rowspan")])), t["_".concat(i, "_colspan")] && (y = Qr.sprintf(' colspan="%s"', t["_".concat(i, "_colspan")])), t["_".concat(i, "_title")] && (m = Qr.sprintf(' title="%s"', t["_".concat(i, "_title")])), (u = Qr.calculateObjectValue(o.header, o.header.cellStyles[n], [l, t, e, i], u)).classes && (p = ' class="'.concat(u.classes, '"')), u.css)) {
                        for (var S = [], x = 0, k = Object.entries(u.css); x < k.length; x++) {
                          var O = $r(k[x], 2),
                            C = O[0],
                            T = O[1];
                          S.push("".concat(C, ": ").concat(T));
                        }
                        f = ' style="'.concat(S.concat(o.header.styles[n]).join("; "), '"');
                      }
                      if (((c = null == (c = Qr.calculateObjectValue(w, o.header.formatters[n], [l, t, e, i], l)) ? o.options.undefinedText : c), "" !== o.searchText && o.options.searchHighlight && (c = Qr.calculateObjectValue(w, w.searchHighlightFormatter, [c, o.searchText], c.toString().replace(new RegExp("(".concat(o.searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ")"), "gim"), "<mark>$1</mark>"))), t["_".concat(i, "_data")] && !Qr.isEmptyObject(t["_".concat(i, "_data")])))
                        for (var P = 0, I = Object.entries(t["_".concat(i, "_data")]); P < I.length; P++) {
                          var A = $r(I[P], 2),
                            $ = A[0],
                            R = A[1];
                          if ("index" === $) return;
                          v += " data-".concat($, '="').concat(R, '"');
                        }
                      if (w.checkbox || w.radio) {
                        (h = w.checkbox ? "checkbox" : h), (h = w.radio ? "radio" : h);
                        var E = w.class || "",
                          j = Qr.isObject(c) && c.hasOwnProperty("checked") ? c.checked : (!0 === c || l) && !1 !== c,
                          N = !w.checkboxEnabled || (c && c.disabled);
                        (a = [
                          o.options.cardView ? '<div class="card-view '.concat(E, '">') : '<td class="bs-checkbox '.concat(E, '"').concat(p).concat(f, ">"),
                          '<label>\n            <input\n            data-index="'
                            .concat(e, '"\n            name="')
                            .concat(o.options.selectItemName, '"\n            type="')
                            .concat(h, '"\n            ')
                            .concat(Qr.sprintf('value="%s"', t[o.options.idField]), "\n            ")
                            .concat(Qr.sprintf('checked="%s"', j ? "checked" : void 0), "\n            ")
                            .concat(Qr.sprintf('disabled="%s"', N ? "disabled" : void 0), " />\n            <span></span>\n            </label>"),
                          o.header.formatters[n] && "string" == typeof c ? c : "",
                          o.options.cardView ? "</div>" : "</td>"
                        ].join("")),
                          (t[o.header.stateField] = !0 === c || !!l || (c && c.checked));
                      } else if (o.options.cardView) {
                        var _ = o.options.showHeader ? '<span class="card-view-title '.concat(u.classes, '"').concat(f, ">").concat(Qr.getFieldTitle(o.columns, i), "</span>") : "";
                        (a = '<div class="card-view">'.concat(_, '<span class="card-view-value ').concat(u.classes, '"').concat(f, ">").concat(c, "</span></div>")), o.options.smartDisplay && "" === c && (a = '<div class="card-view"></div>');
                      } else a = "<td".concat(d).concat(p).concat(f).concat(v).concat(b).concat(y).concat(m, ">").concat(c, "</td>");
                      r.push(a);
                    }
                  }),
                  T && "right" === this.options.detailViewAlign && r.push(T),
                  this.options.cardView && r.push("</div></td>"),
                  r.push("</tr>"),
                  r.join("")
                );
              }
            }
          },
          {
            key: "initBody",
            value: function (e) {
              var i = this,
                n = this.getData();
              this.trigger("pre-body", n), (this.$body = this.$el.find(">tbody")), this.$body.length || (this.$body = t("<tbody></tbody>").appendTo(this.$el)), (this.options.pagination && "server" !== this.options.sidePagination) || ((this.pageFrom = 1), (this.pageTo = n.length));
              var o = [],
                r = t(document.createDocumentFragment()),
                a = !1;
              this.autoMergeCells = Qr.checkAutoMergeCells(n.slice(this.pageFrom - 1, this.pageTo));
              for (var s = this.pageFrom - 1; s < this.pageTo; s++) {
                var l = n[s],
                  c = this.initRow(l, s, n, r);
                (a = a || !!c), c && "string" == typeof c && (this.options.virtualScroll ? o.push(c) : r.append(c));
              }
              a
                ? this.options.virtualScroll
                  ? (this.virtualScroll && this.virtualScroll.destroy(),
                    (this.virtualScroll = new Zr({
                      rows: o,
                      fixedScroll: e,
                      scrollEl: this.$tableBody[0],
                      contentEl: this.$body[0],
                      itemHeight: this.options.virtualScrollItemHeight,
                      callback: function () {
                        i.fitHeader(), i.initBodyEvent();
                      }
                    })))
                  : this.$body.html(r)
                : this.$body.html('<tr class="no-records-found">'.concat(Qr.sprintf('<td colspan="%s">%s</td>', this.getVisibleFields().length + Qr.getDetailViewIndexOffset(this.options), this.options.formatNoMatches()), "</tr>")),
                e || this.scrollTo(0),
                this.initBodyEvent(),
                this.updateSelected(),
                this.initFooter(),
                this.resetView(),
                "server" !== this.options.sidePagination && (this.options.totalRows = n.length),
                this.trigger("post-body", n);
            }
          },
          {
            key: "initBodyEvent",
            value: function () {
              var e = this;
              this.$body
                .find("> tr[data-index] > td")
                .off("click dblclick")
                .on("click dblclick", function (i) {
                  var n = t(i.currentTarget),
                    o = n.parent(),
                    r = t(i.target).parents(".card-views").children(),
                    a = t(i.target).parents(".card-view"),
                    s = o.data("index"),
                    l = e.data[s],
                    c = e.options.cardView ? r.index(a) : n[0].cellIndex,
                    h = e.getVisibleFields()[c - Qr.getDetailViewIndexOffset(e.options)],
                    u = e.columns[e.fieldsColumnsIndex[h]],
                    d = Qr.getItemField(l, h, e.options.escape);
                  if (!n.find(".detail-icon").length) {
                    if ((e.trigger("click" === i.type ? "click-cell" : "dbl-click-cell", h, d, l, n), e.trigger("click" === i.type ? "click-row" : "dbl-click-row", l, o, h), "click" === i.type && e.options.clickToSelect && u.clickToSelect && !Qr.calculateObjectValue(e.options, e.options.ignoreClickToSelectOn, [i.target]))) {
                      var p = o.find(Qr.sprintf('[name="%s"]', e.options.selectItemName));
                      p.length && p[0].click();
                    }
                    "click" === i.type && e.options.detailViewByClick && e.toggleDetailView(s, e.header.detailFormatters[e.fieldsColumnsIndex[h]]);
                  }
                })
                .off("mousedown")
                .on("mousedown", function (t) {
                  (e.multipleSelectRowCtrlKey = t.ctrlKey || t.metaKey), (e.multipleSelectRowShiftKey = t.shiftKey);
                }),
                this.$body
                  .find("> tr[data-index] > td > .detail-icon")
                  .off("click")
                  .on("click", function (i) {
                    return i.preventDefault(), e.toggleDetailView(t(i.currentTarget).parent().parent().data("index")), !1;
                  }),
                (this.$selectItem = this.$body.find(Qr.sprintf('[name="%s"]', this.options.selectItemName))),
                this.$selectItem.off("click").on("click", function (i) {
                  i.stopImmediatePropagation();
                  var n = t(i.currentTarget);
                  e._toggleCheck(n.prop("checked"), n.data("index"));
                }),
                this.header.events.forEach(function (i, n) {
                  var o = i;
                  if (o) {
                    "string" == typeof o && (o = Qr.calculateObjectValue(null, o));
                    var r = e.header.fields[n],
                      a = e.getVisibleFields().indexOf(r);
                    if (-1 !== a) {
                      a += Qr.getDetailViewIndexOffset(e.options);
                      var s = function (i) {
                        if (!o.hasOwnProperty(i)) return "continue";
                        var n = o[i];
                        e.$body.find(">tr:not(.no-records-found)").each(function (o, s) {
                          var l = t(s),
                            c = l.find(e.options.cardView ? ".card-views>.card-view" : ">td").eq(a),
                            h = i.indexOf(" "),
                            u = i.substring(0, h),
                            d = i.substring(h + 1);
                          c.find(d)
                            .off(u)
                            .on(u, function (t) {
                              var i = l.data("index"),
                                o = e.data[i],
                                a = o[r];
                              n.apply(e, [t, a, o, i]);
                            });
                        });
                      };
                      for (var l in o) s(l);
                    }
                  }
                });
            }
          },
          {
            key: "initServer",
            value: function (e, i, n) {
              var o = this,
                r = {},
                a = this.header.fields.indexOf(this.options.sortName),
                s = { searchText: this.searchText, sortName: this.options.sortName, sortOrder: this.options.sortOrder };
              if ((this.header.sortNames[a] && (s.sortName = this.header.sortNames[a]), this.options.pagination && "server" === this.options.sidePagination && ((s.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize), (s.pageNumber = this.options.pageNumber)), n || this.options.url || this.options.ajax)) {
                if (
                  ("limit" === this.options.queryParamsType && ((s = { search: s.searchText, sort: s.sortName, order: s.sortOrder }), this.options.pagination && "server" === this.options.sidePagination && ((s.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1)), (s.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize), 0 === s.limit && delete s.limit)),
                  this.options.search &&
                    "server" === this.options.sidePagination &&
                    this.columns.filter(function (t) {
                      return !t.searchable;
                    }).length)
                ) {
                  s.searchable = [];
                  var l = !0,
                    c = !1,
                    h = void 0;
                  try {
                    for (var u, d = this.columns[Symbol.iterator](); !(l = (u = d.next()).done); l = !0) {
                      var p = u.value;
                      !p.checkbox && p.searchable && ((this.options.visibleSearch && p.visible) || !this.options.visibleSearch) && s.searchable.push(p.field);
                    }
                  } catch (t) {
                    (c = !0), (h = t);
                  } finally {
                    try {
                      l || null == d.return || d.return();
                    } finally {
                      if (c) throw h;
                    }
                  }
                }
                if ((Qr.isEmptyObject(this.filterColumnsPartial) || (s.filter = JSON.stringify(this.filterColumnsPartial, null)), t.extend(s, i || {}), !1 !== (r = Qr.calculateObjectValue(this.options, this.options.queryParams, [s], r)))) {
                  e || this.showLoading();
                  var f = t.extend({}, Qr.calculateObjectValue(null, this.options.ajaxOptions), {
                    type: this.options.method,
                    url: n || this.options.url,
                    data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(r) : r,
                    cache: this.options.cache,
                    contentType: this.options.contentType,
                    dataType: this.options.dataType,
                    success: function (t, i, n) {
                      var r = Qr.calculateObjectValue(o.options, o.options.responseHandler, [t, n], t);
                      o.load(r), o.trigger("load-success", r, n && n.status, n), e || o.hideLoading(), "server" === o.options.sidePagination && r[o.options.totalField] > 0 && !r[o.options.dataField].length && o.updatePagination();
                    },
                    error: function (t) {
                      var i = [];
                      "server" === o.options.sidePagination && (((i = {})[o.options.totalField] = 0), (i[o.options.dataField] = [])), o.load(i), o.trigger("load-error", t && t.status, t), e || o.$tableLoading.hide();
                    }
                  });
                  return this.options.ajax ? Qr.calculateObjectValue(this, this.options.ajax, [f], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), (this._xhr = t.ajax(f))), r;
                }
              }
            }
          },
          {
            key: "initSearchText",
            value: function () {
              if (this.options.search && ((this.searchText = ""), "" !== this.options.searchText)) {
                var t = Qr.getSearchInput(this);
                t.val(this.options.searchText), this.onSearch({ currentTarget: t, firedByInitSearchText: !0 });
              }
            }
          },
          {
            key: "getCaret",
            value: function () {
              var e = this;
              this.$header.find("th").each(function (i, n) {
                t(n)
                  .find(".sortable")
                  .removeClass("desc asc")
                  .addClass(t(n).data("field") === e.options.sortName ? e.options.sortOrder : "both");
              });
            }
          },
          {
            key: "updateSelected",
            value: function () {
              var e = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
              this.$selectAll.add(this.$selectAll_).prop("checked", e),
                this.$selectItem.each(function (e, i) {
                  t(i).closest("tr")[t(i).prop("checked") ? "addClass" : "removeClass"]("selected");
                });
            }
          },
          {
            key: "updateRows",
            value: function () {
              var e = this;
              this.$selectItem.each(function (i, n) {
                e.data[t(n).data("index")][e.header.stateField] = t(n).prop("checked");
              });
            }
          },
          {
            key: "resetRows",
            value: function () {
              var t = !0,
                e = !1,
                i = void 0;
              try {
                for (var n, o = this.data[Symbol.iterator](); !(t = (n = o.next()).done); t = !0) {
                  var r = n.value;
                  this.$selectAll.prop("checked", !1), this.$selectItem.prop("checked", !1), this.header.stateField && (r[this.header.stateField] = !1);
                }
              } catch (t) {
                (e = !0), (i = t);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (e) throw i;
                }
              }
              this.initHiddenRows();
            }
          },
          {
            key: "trigger",
            value: function (i) {
              for (var n, o, r = "".concat(i, ".bs.table"), a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) s[l - 1] = arguments[l];
              (n = this.options)[e.EVENTS[r]].apply(n, [].concat(s, [this])), this.$el.trigger(t.Event(r, { sender: this }), s), (o = this.options).onAll.apply(o, [r].concat([].concat(s, [this]))), this.$el.trigger(t.Event("all.bs.table", { sender: this }), [r, s]);
            }
          },
          {
            key: "resetHeader",
            value: function () {
              var t = this;
              clearTimeout(this.timeoutId_),
                (this.timeoutId_ = setTimeout(
                  function () {
                    return t.fitHeader();
                  },
                  this.$el.is(":hidden") ? 100 : 0
                ));
            }
          },
          {
            key: "fitHeader",
            value: function () {
              var e = this;
              if (this.$el.is(":hidden"))
                this.timeoutId_ = setTimeout(function () {
                  return e.fitHeader();
                }, 100);
              else {
                var i = this.$tableBody.get(0),
                  n = i.scrollWidth > i.clientWidth && i.scrollHeight > i.clientHeight + this.$header.outerHeight() ? Qr.getScrollBarWidth() : 0;
                this.$el.css("margin-top", -this.$header.outerHeight());
                var o = t(":focus");
                if (o.length > 0) {
                  var r = o.parents("th");
                  if (r.length > 0) {
                    var a = r.attr("data-field");
                    if (void 0 !== a) {
                      var s = this.$header.find("[data-field='".concat(a, "']"));
                      s.length > 0 && s.find(":input").addClass("focus-temp");
                    }
                  }
                }
                (this.$header_ = this.$header.clone(!0, !0)), (this.$selectAll_ = this.$header_.find('[name="btSelectAll"]')), this.$tableHeader.css("margin-right", n).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), this.$tableLoading.css("width", this.$el.outerWidth());
                var l = t(".focus-temp:visible:eq(0)");
                l.length > 0 && (l.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")),
                  this.$header.find("th[data-field]").each(function (i, n) {
                    e.$header_.find(Qr.sprintf('th[data-field="%s"]', t(n).data("field"))).data(t(n).data());
                  });
                for (var c = this.getVisibleFields(), h = this.$header_.find("th"), u = this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0); u.length && u.find('>td[colspan]:not([colspan="1"])').length; ) u = u.next();
                var d = u.find("> *").length;
                u.find("> *").each(function (i, n) {
                  var o = t(n);
                  if (Qr.hasDetailViewIcon(e.options) && ((0 === i && "right" !== e.options.detailViewAlign) || (i === d - 1 && "right" === e.options.detailViewAlign))) {
                    var r = h.filter(".detail"),
                      a = r.innerWidth() - r.find(".fht-cell").width();
                    r.find(".fht-cell").width(o.innerWidth() - a);
                  } else {
                    var s = i - Qr.getDetailViewIndexOffset(e.options),
                      l = e.$header_.find(Qr.sprintf('th[data-field="%s"]', c[s]));
                    l.length > 1 && (l = t(h[o[0].cellIndex]));
                    var u = l.innerWidth() - l.find(".fht-cell").width();
                    l.find(".fht-cell").width(o.innerWidth() - u);
                  }
                }),
                  this.horizontalScroll(),
                  this.trigger("post-header");
              }
            }
          },
          {
            key: "initFooter",
            value: function () {
              if (this.options.showFooter && !this.options.cardView) {
                var t = this.getData(),
                  e = [],
                  i = "";
                Qr.hasDetailViewIcon(this.options) && (i = '<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>'), i && "right" !== this.options.detailViewAlign && e.push(i);
                var n = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (var a, s = this.columns[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                    var l,
                      c,
                      h = a.value,
                      u = [],
                      d = {},
                      p = Qr.sprintf(' class="%s"', h.class);
                    if (!(!h.visible || (this.footerData && this.footerData.length > 0 && !(h.field in this.footerData[0])))) {
                      if (this.options.cardView && !h.cardVisible) return;
                      if (((l = Qr.sprintf("text-align: %s; ", h.falign ? h.falign : h.align)), (c = Qr.sprintf("vertical-align: %s; ", h.valign)), (d = Qr.calculateObjectValue(null, this.options.footerStyle, [h])) && d.css))
                        for (var f = 0, g = Object.entries(d.css); f < g.length; f++) {
                          var v = $r(g[f], 2),
                            b = v[0],
                            y = v[1];
                          u.push("".concat(b, ": ").concat(y));
                        }
                      d && d.classes && (p = Qr.sprintf(' class="%s"', h.class ? [h.class, d.classes].join(" ") : d.classes)), e.push("<th", p, Qr.sprintf(' style="%s"', l + c + u.concat().join("; ")));
                      var m = 0;
                      this.footerData && this.footerData.length > 0 && (m = this.footerData[0]["_".concat(h.field, "_colspan")] || 0), m && e.push(' colspan="'.concat(m, '" ')), e.push(">"), e.push('<div class="th-inner">');
                      var w = "";
                      this.footerData && this.footerData.length > 0 && (w = this.footerData[0][h.field] || ""), e.push(Qr.calculateObjectValue(h, h.footerFormatter, [t, w], w)), e.push("</div>"), e.push('<div class="fht-cell"></div>'), e.push("</div>"), e.push("</th>");
                    }
                  }
                } catch (t) {
                  (o = !0), (r = t);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (o) throw r;
                  }
                }
                i && "right" === this.options.detailViewAlign && e.push(i), this.options.height || this.$tableFooter.length || (this.$el.append("<tfoot><tr></tr></tfoot>"), (this.$tableFooter = this.$el.find("tfoot"))), this.$tableFooter.find("tr").html(e.join("")), this.trigger("post-footer", this.$tableFooter);
              }
            }
          },
          {
            key: "fitFooter",
            value: function () {
              var e = this;
              if (this.$el.is(":hidden"))
                setTimeout(function () {
                  return e.fitFooter();
                }, 100);
              else {
                var i = this.$tableBody.get(0),
                  n = i.scrollWidth > i.clientWidth && i.scrollHeight > i.clientHeight + this.$header.outerHeight() ? Qr.getScrollBarWidth() : 0;
                this.$tableFooter.css("margin-right", n).find("table").css("width", this.$el.outerWidth()).attr("class", this.$el.attr("class"));
                var o = this.$tableFooter.find("th"),
                  r = this.$body.find(">tr:first-child:not(.no-records-found)");
                for (o.find(".fht-cell").width("auto"); r.length && r.find('>td[colspan]:not([colspan="1"])').length; ) r = r.next();
                var a = r.find("> *").length;
                r.find("> *").each(function (i, n) {
                  var r = t(n);
                  if (Qr.hasDetailViewIcon(e.options) && ((0 === i && "left" === e.options.detailViewAlign) || (i === a - 1 && "right" === e.options.detailViewAlign))) {
                    var s = o.filter(".detail"),
                      l = s.innerWidth() - s.find(".fht-cell").width();
                    s.find(".fht-cell").width(r.innerWidth() - l);
                  } else {
                    var c = o.eq(i),
                      h = c.innerWidth() - c.find(".fht-cell").width();
                    c.find(".fht-cell").width(r.innerWidth() - h);
                  }
                }),
                  this.horizontalScroll();
              }
            }
          },
          {
            key: "horizontalScroll",
            value: function () {
              var t = this;
              this.$tableBody.off("scroll").on("scroll", function () {
                var e = t.$tableBody.scrollLeft();
                t.options.showHeader && t.options.height && t.$tableHeader.scrollLeft(e), t.options.showFooter && !t.options.cardView && t.$tableFooter.scrollLeft(e), t.trigger("scroll-body", t.$tableBody);
              });
            }
          },
          {
            key: "getVisibleFields",
            value: function () {
              var t = [],
                e = !0,
                i = !1,
                n = void 0;
              try {
                for (var o, r = this.header.fields[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                  var a = o.value,
                    s = this.columns[this.fieldsColumnsIndex[a]];
                  s && s.visible && t.push(a);
                }
              } catch (t) {
                (i = !0), (n = t);
              } finally {
                try {
                  e || null == r.return || r.return();
                } finally {
                  if (i) throw n;
                }
              }
              return t;
            }
          },
          {
            key: "initHiddenRows",
            value: function () {
              this.hiddenRows = [];
            }
          },
          {
            key: "getOptions",
            value: function () {
              var e = t.extend({}, this.options);
              return delete e.data, t.extend(!0, {}, e);
            }
          },
          {
            key: "refreshOptions",
            value: function (e) {
              Qr.compareObjects(this.options, e, !0) || ((this.options = t.extend(this.options, e)), this.trigger("refresh-options", this.options), this.destroy(), this.init());
            }
          },
          {
            key: "getData",
            value: function (t) {
              var e = this,
                i = this.options.data;
              if (((!this.searchText && !this.options.customSearch && void 0 === this.options.sortName && Qr.isEmptyObject(this.filterColumns) && Qr.isEmptyObject(this.filterColumnsPartial)) || (t && t.unfiltered) || (i = this.data), t && t.useCurrentPage && (i = i.slice(this.pageFrom - 1, this.pageTo)), t && !t.includeHiddenRows)) {
                var n = this.getHiddenRows();
                i = i.filter(function (t) {
                  return -1 === Qr.findIndex(n, t);
                });
              }
              return (
                t &&
                  t.formatted &&
                  i.forEach(function (t) {
                    for (var i = 0, n = Object.entries(t); i < n.length; i++) {
                      var o = $r(n[i], 2),
                        r = o[0],
                        a = o[1],
                        s = e.columns[e.fieldsColumnsIndex[r]];
                      if (!s) return;
                      t[r] = Qr.calculateObjectValue(s, e.header.formatters[s.fieldIndex], [a, t, t.index, s.field], a);
                    }
                  }),
                i
              );
            }
          },
          {
            key: "getSelections",
            value: function () {
              var t = this;
              return (this.options.maintainMetaData ? this.options.data : this.data).filter(function (e) {
                return !0 === e[t.header.stateField];
              });
            }
          },
          {
            key: "load",
            value: function (t) {
              var e,
                i = t;
              this.options.pagination && "server" === this.options.sidePagination && ((this.options.totalRows = i[this.options.totalField]), (this.options.totalNotFiltered = i[this.options.totalNotFilteredField]), (this.footerData = i[this.options.footerField] ? [i[this.options.footerField]] : void 0)), (e = i.fixedScroll), (i = Array.isArray(i) ? i : i[this.options.dataField]), this.initData(i), this.initSearch(), this.initPagination(), this.initBody(e);
            }
          },
          {
            key: "append",
            value: function (t) {
              this.initData(t, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0);
            }
          },
          {
            key: "prepend",
            value: function (t) {
              this.initData(t, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0);
            }
          },
          {
            key: "remove",
            value: function (t) {
              for (var e = 0, i = this.options.data.length - 1; i >= 0; i--) {
                var n = this.options.data[i];
                (n.hasOwnProperty(t.field) || "$index" === t.field) && ((!n.hasOwnProperty(t.field) && "$index" === t.field && t.values.includes(i)) || t.values.includes(n[t.field])) && (e++, this.options.data.splice(i, 1));
              }
              e && ("server" === this.options.sidePagination && ((this.options.totalRows -= e), (this.data = Rr(this.options.data))), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0));
            }
          },
          {
            key: "removeAll",
            value: function () {
              this.options.data.length > 0 && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0));
            }
          },
          {
            key: "insertRow",
            value: function (t) {
              t.hasOwnProperty("index") && t.hasOwnProperty("row") && (this.options.data.splice(t.index, 0, t.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0));
            }
          },
          {
            key: "updateRow",
            value: function (e) {
              var i = Array.isArray(e) ? e : [e],
                n = !0,
                o = !1,
                r = void 0;
              try {
                for (var a, s = i[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                  var l = a.value;
                  l.hasOwnProperty("index") && l.hasOwnProperty("row") && (l.hasOwnProperty("replace") && l.replace ? (this.options.data[l.index] = l.row) : t.extend(this.options.data[l.index], l.row));
                }
              } catch (t) {
                (o = !0), (r = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw r;
                }
              }
              this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0);
            }
          },
          {
            key: "getRowByUniqueId",
            value: function (t) {
              var e,
                i,
                n,
                o = this.options.uniqueId,
                r = t,
                a = null;
              for (e = this.options.data.length - 1; e >= 0; e--) {
                if ((i = this.options.data[e]).hasOwnProperty(o)) n = i[o];
                else {
                  if (!i._data || !i._data.hasOwnProperty(o)) continue;
                  n = i._data[o];
                }
                if (("string" == typeof n ? (r = r.toString()) : "number" == typeof n && (Number(n) === n && n % 1 == 0 ? (r = parseInt(r)) : n === Number(n) && 0 !== n && (r = parseFloat(r))), n === r)) {
                  a = i;
                  break;
                }
              }
              return a;
            }
          },
          {
            key: "updateByUniqueId",
            value: function (e) {
              var i = Array.isArray(e) ? e : [e],
                n = !0,
                o = !1,
                r = void 0;
              try {
                for (var a, s = i[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                  var l = a.value;
                  if (l.hasOwnProperty("id") && l.hasOwnProperty("row")) {
                    var c = this.options.data.indexOf(this.getRowByUniqueId(l.id));
                    -1 !== c && (l.hasOwnProperty("replace") && l.replace ? (this.options.data[c] = l.row) : t.extend(this.options.data[c], l.row));
                  }
                }
              } catch (t) {
                (o = !0), (r = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw r;
                }
              }
              this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0);
            }
          },
          {
            key: "removeByUniqueId",
            value: function (t) {
              var e = this.options.data.length,
                i = this.getRowByUniqueId(t);
              i && this.options.data.splice(this.options.data.indexOf(i), 1), e !== this.options.data.length && ("server" === this.options.sidePagination && ((this.options.totalRows -= 1), (this.data = Rr(this.options.data))), this.initSearch(), this.initPagination(), this.initBody(!0));
            }
          },
          {
            key: "updateCell",
            value: function (t) {
              t.hasOwnProperty("index") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && ((this.data[t.index][t.field] = t.value), !1 !== t.reinit && (this.initSort(), this.initBody(!0)));
            }
          },
          {
            key: "updateCellByUniqueId",
            value: function (t) {
              var e = this;
              (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var i = t.id,
                  n = t.field,
                  o = t.value,
                  r = e.options.data.indexOf(e.getRowByUniqueId(i));
                -1 !== r && (e.options.data[r][n] = o);
              }),
                !1 !== t.reinit && (this.initSort(), this.initBody(!0));
            }
          },
          {
            key: "showRow",
            value: function (t) {
              this._toggleRow(t, !0);
            }
          },
          {
            key: "hideRow",
            value: function (t) {
              this._toggleRow(t, !1);
            }
          },
          {
            key: "_toggleRow",
            value: function (t, e) {
              var i;
              if ((t.hasOwnProperty("index") ? (i = this.getData()[t.index]) : t.hasOwnProperty("uniqueId") && (i = this.getRowByUniqueId(t.uniqueId)), i)) {
                var n = Qr.findIndex(this.hiddenRows, i);
                e || -1 !== n ? e && n > -1 && this.hiddenRows.splice(n, 1) : this.hiddenRows.push(i), this.initBody(!0), this.initPagination();
              }
            }
          },
          {
            key: "getHiddenRows",
            value: function (t) {
              if (t) return this.initHiddenRows(), this.initBody(!0), void this.initPagination();
              var e = this.getData(),
                i = [],
                n = !0,
                o = !1,
                r = void 0;
              try {
                for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                  var l = a.value;
                  this.hiddenRows.includes(l) && i.push(l);
                }
              } catch (t) {
                (o = !0), (r = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw r;
                }
              }
              return (this.hiddenRows = i), i;
            }
          },
          {
            key: "showColumn",
            value: function (t) {
              var e = this;
              (Array.isArray(t) ? t : [t]).forEach(function (t) {
                e._toggleColumn(e.fieldsColumnsIndex[t], !0, !0);
              });
            }
          },
          {
            key: "hideColumn",
            value: function (t) {
              var e = this;
              (Array.isArray(t) ? t : [t]).forEach(function (t) {
                e._toggleColumn(e.fieldsColumnsIndex[t], !1, !0);
              });
            }
          },
          {
            key: "_toggleColumn",
            value: function (t, e, i) {
              if (-1 !== t && this.columns[t].visible !== e && ((this.columns[t].visible = e), this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
                var n = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled", !1);
                i && n.filter(Qr.sprintf('[value="%s"]', t)).prop("checked", e), n.filter(":checked").length <= this.options.minimumCountColumns && n.filter(":checked").prop("disabled", !0);
              }
            }
          },
          {
            key: "getVisibleColumns",
            value: function () {
              var t = this;
              return this.columns.filter(function (e) {
                return e.visible && !t.isSelectionColumn(e);
              });
            }
          },
          {
            key: "getHiddenColumns",
            value: function () {
              return this.columns.filter(function (t) {
                return !t.visible;
              });
            }
          },
          {
            key: "isSelectionColumn",
            value: function (t) {
              return t.radio || t.checkbox;
            }
          },
          {
            key: "showAllColumns",
            value: function () {
              this._toggleAllColumns(!0);
            }
          },
          {
            key: "hideAllColumns",
            value: function () {
              this._toggleAllColumns(!1);
            }
          },
          {
            key: "_toggleAllColumns",
            value: function (e) {
              var i = this,
                n = !0,
                o = !1,
                r = void 0;
              try {
                for (var a, s = this.columns.slice().reverse()[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                  var l = a.value;
                  if (l.switchable) {
                    if (!e && this.options.showColumns && this.getVisibleColumns().length === this.options.minimumCountColumns) continue;
                    l.visible = e;
                  }
                }
              } catch (t) {
                (o = !0), (r = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw r;
                }
              }
              if ((this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
                var c = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop("disabled", !1);
                e
                  ? c.prop("checked", e)
                  : c
                      .get()
                      .reverse()
                      .forEach(function (n) {
                        c.filter(":checked").length > i.options.minimumCountColumns && t(n).prop("checked", e);
                      }),
                  c.filter(":checked").length <= this.options.minimumCountColumns && c.filter(":checked").prop("disabled", !0);
              }
            }
          },
          {
            key: "mergeCells",
            value: function (t) {
              var e,
                i,
                n = t.index,
                o = this.getVisibleFields().indexOf(t.field),
                r = t.rowspan || 1,
                a = t.colspan || 1,
                s = this.$body.find(">tr");
              o += Qr.getDetailViewIndexOffset(this.options);
              var l = s.eq(n).find(">td").eq(o);
              if (!(n < 0 || o < 0 || n >= this.data.length)) {
                for (e = n; e < n + r; e++) for (i = o; i < o + a; i++) s.eq(e).find(">td").eq(i).hide();
                l.attr("rowspan", r).attr("colspan", a).show();
              }
            }
          },
          {
            key: "checkAll",
            value: function () {
              this._toggleCheckAll(!0);
            }
          },
          {
            key: "uncheckAll",
            value: function () {
              this._toggleCheckAll(!1);
            }
          },
          {
            key: "_toggleCheckAll",
            value: function (t) {
              var e = this.getSelections();
              this.$selectAll.add(this.$selectAll_).prop("checked", t), this.$selectItem.filter(":enabled").prop("checked", t), this.updateRows(), this.updateSelected();
              var i = this.getSelections();
              t ? this.trigger("check-all", i, e) : this.trigger("uncheck-all", i, e);
            }
          },
          {
            key: "checkInvert",
            value: function () {
              var e = this.$selectItem.filter(":enabled"),
                i = e.filter(":checked");
              e.each(function (e, i) {
                t(i).prop("checked", !t(i).prop("checked"));
              }),
                this.updateRows(),
                this.updateSelected(),
                this.trigger("uncheck-some", i),
                (i = this.getSelections()),
                this.trigger("check-some", i);
            }
          },
          {
            key: "check",
            value: function (t) {
              this._toggleCheck(!0, t);
            }
          },
          {
            key: "uncheck",
            value: function (t) {
              this._toggleCheck(!1, t);
            }
          },
          {
            key: "_toggleCheck",
            value: function (t, e) {
              var i = this.$selectItem.filter('[data-index="'.concat(e, '"]')),
                n = this.data[e];
              if (i.is(":radio") || this.options.singleSelect || (this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey)) {
                var o = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (var s, l = this.options.data[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                    s.value[this.header.stateField] = !1;
                  }
                } catch (t) {
                  (r = !0), (a = t);
                } finally {
                  try {
                    o || null == l.return || l.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                this.$selectItem.filter(":checked").not(i).prop("checked", !1);
              }
              if (((n[this.header.stateField] = t), this.options.multipleSelectRow)) {
                if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) for (var c = $r(this.multipleSelectRowLastSelectedIndex < e ? [this.multipleSelectRowLastSelectedIndex, e] : [e, this.multipleSelectRowLastSelectedIndex], 2), h = c[0], u = c[1], d = h + 1; d < u; d++) (this.data[d][this.header.stateField] = !0), this.$selectItem.filter('[data-index="'.concat(d, '"]')).prop("checked", !0);
                (this.multipleSelectRowCtrlKey = !1), (this.multipleSelectRowShiftKey = !1), (this.multipleSelectRowLastSelectedIndex = t ? e : -1);
              }
              i.prop("checked", t), this.updateSelected(), this.trigger(t ? "check" : "uncheck", this.data[e], i);
            }
          },
          {
            key: "checkBy",
            value: function (t) {
              this._toggleCheckBy(!0, t);
            }
          },
          {
            key: "uncheckBy",
            value: function (t) {
              this._toggleCheckBy(!1, t);
            }
          },
          {
            key: "_toggleCheckBy",
            value: function (t, e) {
              var i = this;
              if (e.hasOwnProperty("field") && e.hasOwnProperty("values")) {
                var n = [];
                this.data.forEach(function (o, r) {
                  if (!o.hasOwnProperty(e.field)) return !1;
                  if (e.values.includes(o[e.field])) {
                    var a = i.$selectItem.filter(":enabled").filter(Qr.sprintf('[data-index="%s"]', r));
                    if (!(a = t ? a.not(":checked") : a.filter(":checked")).length) return;
                    a.prop("checked", t), (o[i.header.stateField] = t), n.push(o), i.trigger(t ? "check" : "uncheck", o, a);
                  }
                }),
                  this.updateSelected(),
                  this.trigger(t ? "check-some" : "uncheck-some", n);
              }
            }
          },
          {
            key: "refresh",
            value: function (t) {
              t && t.url && (this.options.url = t.url), t && t.pageNumber && (this.options.pageNumber = t.pageNumber), t && t.pageSize && (this.options.pageSize = t.pageSize), this.trigger("refresh", this.initServer(t && t.silent, t && t.query, t && t.url));
            }
          },
          {
            key: "destroy",
            value: function () {
              this.$el.insertBefore(this.$container),
                t(this.options.toolbar).insertBefore(this.$el),
                this.$container.next().remove(),
                this.$container.remove(),
                this.$el
                  .html(this.$el_.html())
                  .css("margin-top", "0")
                  .attr("class", this.$el_.attr("class") || "");
            }
          },
          {
            key: "resetView",
            value: function (t) {
              var e = 0;
              if ((t && t.height && (this.options.height = t.height), this.$selectAll.prop("checked", this.$selectItem.length > 0 && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.$tableContainer.toggleClass("has-card-view", this.options.cardView), !this.options.cardView && this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), (e += this.$header.outerHeight(!0) + 1)) : (this.$tableHeader.hide(), this.trigger("post-header")), !this.options.cardView && this.options.showFooter && (this.$tableFooter.show(), this.fitFooter(), this.options.height && (e += this.$tableFooter.outerHeight(!0))), this.$container.hasClass("fullscreen"))) this.$tableContainer.css("height", ""), this.$tableContainer.css("width", "");
              else if (this.options.height) {
                this.$tableBorder && (this.$tableBorder.css("width", ""), this.$tableBorder.css("height", ""));
                var i = this.$toolbar.outerHeight(!0),
                  n = this.$pagination.outerHeight(!0),
                  o = this.options.height - i - n,
                  r = this.$tableBody.find(">table"),
                  a = r.outerHeight();
                if ((this.$tableContainer.css("height", "".concat(o, "px")), this.$tableBorder && r.is(":visible"))) {
                  var s = o - a - 2;
                  this.$tableBody[0].scrollWidth - this.$tableBody.innerWidth() && (s -= Qr.getScrollBarWidth()), this.$tableBorder.css("width", "".concat(r.outerWidth(), "px")), this.$tableBorder.css("height", "".concat(s, "px"));
                }
              }
              this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), this.$tableFooter.hide()) : (this.getCaret(), this.$tableContainer.css("padding-bottom", "".concat(e, "px"))), this.trigger("reset-view");
            }
          },
          {
            key: "showLoading",
            value: function () {
              this.$tableLoading.toggleClass("open", !0);
              var t = this.options.loadingFontSize;
              "auto" === this.options.loadingFontSize && ((t = 0.04 * this.$tableLoading.width()), (t = Math.max(12, t)), (t = Math.min(32, t)), (t = "".concat(t, "px"))), this.$tableLoading.find(".loading-text").css("font-size", t);
            }
          },
          {
            key: "hideLoading",
            value: function () {
              this.$tableLoading.toggleClass("open", !1);
            }
          },
          {
            key: "togglePagination",
            value: function () {
              this.options.pagination = !this.options.pagination;
              var t = this.options.showButtonIcons ? (this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp) : "",
                e = this.options.showButtonText ? (this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown()) : "";
              this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(Qr.sprintf(this.constants.html.icon, this.options.iconsPrefix, t), " ").concat(e)), this.updatePagination();
            }
          },
          {
            key: "toggleFullscreen",
            value: function () {
              this.$el.closest(".bootstrap-table").toggleClass("fullscreen"), this.resetView();
            }
          },
          {
            key: "toggleView",
            value: function () {
              (this.options.cardView = !this.options.cardView), this.initHeader();
              var t = this.options.showButtonIcons ? (this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff) : "",
                e = this.options.showButtonText ? (this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn()) : "";
              this.$toolbar.find('button[name="toggle"]').html("".concat(Qr.sprintf(this.constants.html.icon, this.options.iconsPrefix, t), " ").concat(e)), this.initBody(), this.trigger("toggle", this.options.cardView);
            }
          },
          {
            key: "resetSearch",
            value: function (t) {
              var e = Qr.getSearchInput(this);
              e.val(t || ""), this.onSearch({ currentTarget: e });
            }
          },
          {
            key: "filterBy",
            value: function (e, i) {
              (this.filterOptions = Qr.isEmptyObject(i) ? this.options.filterOptions : t.extend(this.options.filterOptions, i)), (this.filterColumns = Qr.isEmptyObject(e) ? {} : e), (this.options.pageNumber = 1), this.initSearch(), this.updatePagination();
            }
          },
          {
            key: "scrollTo",
            value: function (e) {
              var i = { unit: "px", value: 0 };
              "object" === Tr(e) ? (i = Object.assign(i, e)) : "string" == typeof e && "bottom" === e ? (i.value = this.$tableBody[0].scrollHeight) : ("string" != typeof e && "number" != typeof e) || (i.value = e);
              var n = i.value;
              "rows" === i.unit &&
                ((n = 0),
                this.$body.find("> tr:lt(".concat(i.value, ")")).each(function (e, i) {
                  n += t(i).outerHeight(!0);
                })),
                this.$tableBody.scrollTop(n);
            }
          },
          {
            key: "getScrollPosition",
            value: function () {
              return this.$tableBody.scrollTop();
            }
          },
          {
            key: "selectPage",
            value: function (t) {
              t > 0 && t <= this.options.totalPages && ((this.options.pageNumber = t), this.updatePagination());
            }
          },
          {
            key: "prevPage",
            value: function () {
              this.options.pageNumber > 1 && (this.options.pageNumber--, this.updatePagination());
            }
          },
          {
            key: "nextPage",
            value: function () {
              this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination());
            }
          },
          {
            key: "toggleDetailView",
            value: function (t, e) {
              this.$body.find(Qr.sprintf('> tr[data-index="%s"]', t)).next().is("tr.detail-view") ? this.collapseRow(t) : this.expandRow(t, e), this.resetView();
            }
          },
          {
            key: "expandRow",
            value: function (t, e) {
              var i = this.data[t],
                n = this.$body.find(Qr.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
              if (!n.next().is("tr.detail-view")) {
                this.options.detailViewIcon && n.find("a.detail-icon").html(Qr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose)), n.after(Qr.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', n.children("td").length));
                var o = n.next().find("td"),
                  r = e || this.options.detailFormatter,
                  a = Qr.calculateObjectValue(this.options, r, [t, i, o], "");
                1 === o.length && o.append(a), this.trigger("expand-row", t, i, o);
              }
            }
          },
          {
            key: "expandRowByUniqueId",
            value: function (t) {
              var e = this.getRowByUniqueId(t);
              e && this.expandRow(this.data.indexOf(e));
            }
          },
          {
            key: "collapseRow",
            value: function (t) {
              var e = this.data[t],
                i = this.$body.find(Qr.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
              i.next().is("tr.detail-view") && (this.options.detailViewIcon && i.find("a.detail-icon").html(Qr.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)), this.trigger("collapse-row", t, e, i.next()), i.next().remove());
            }
          },
          {
            key: "collapseRowByUniqueId",
            value: function (t) {
              var e = this.getRowByUniqueId(t);
              e && this.collapseRow(this.data.indexOf(e));
            }
          },
          {
            key: "expandAllRows",
            value: function () {
              for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), i = 0; i < e.length; i++) this.expandRow(t(e[i]).data("index"));
            }
          },
          {
            key: "collapseAllRows",
            value: function () {
              for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), i = 0; i < e.length; i++) this.collapseRow(t(e[i]).data("index"));
            }
          },
          {
            key: "updateColumnTitle",
            value: function (e) {
              e.hasOwnProperty("field") &&
                e.hasOwnProperty("title") &&
                ((this.columns[this.fieldsColumnsIndex[e.field]].title = this.options.escape ? Qr.escapeHTML(e.title) : e.title),
                this.columns[this.fieldsColumnsIndex[e.field]].visible &&
                  (this.$header.find("th[data-field]").each(function (i, n) {
                    if (t(n).data("field") === e.field) return t(t(n).find(".th-inner")[0]).text(e.title), !1;
                  }),
                  this.resetView()));
            }
          },
          {
            key: "updateFormatText",
            value: function (t, e) {
              /^format/.test(t) &&
                this.options[t] &&
                ("string" == typeof e
                  ? (this.options[t] = function () {
                      return e;
                    })
                  : "function" == typeof e && (this.options[t] = e),
                this.initToolbar(),
                this.initPagination(),
                this.initBody());
            }
          }
        ]),
        e
      );
    })();
  return (
    (ta.VERSION = Br.VERSION),
    (ta.DEFAULTS = Br.DEFAULTS),
    (ta.LOCALES = Br.LOCALES),
    (ta.COLUMN_DEFAULTS = Br.COLUMN_DEFAULTS),
    (ta.METHODS = Br.METHODS),
    (ta.EVENTS = Br.EVENTS),
    (t.BootstrapTable = ta),
    (t.fn.bootstrapTable = function (e) {
      for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
      var r;
      return (
        this.each(function (i, o) {
          var a = t(o).data("bootstrap.table"),
            s = t.extend({}, ta.DEFAULTS, t(o).data(), "object" === Tr(e) && e);
          if ("string" == typeof e) {
            var l;
            if (!Br.METHODS.includes(e)) throw new Error("Unknown method: ".concat(e));
            if (!a) return;
            (r = (l = a)[e].apply(l, n)), "destroy" === e && t(o).removeData("bootstrap.table");
          }
          a || ((a = new t.BootstrapTable(o, s)), t(o).data("bootstrap.table", a), a.init());
        }),
        void 0 === r ? this : r
      );
    }),
    (t.fn.bootstrapTable.Constructor = ta),
    (t.fn.bootstrapTable.theme = Br.THEME),
    (t.fn.bootstrapTable.VERSION = Br.VERSION),
    (t.fn.bootstrapTable.defaults = ta.DEFAULTS),
    (t.fn.bootstrapTable.columnDefaults = ta.COLUMN_DEFAULTS),
    (t.fn.bootstrapTable.events = ta.EVENTS),
    (t.fn.bootstrapTable.locales = ta.LOCALES),
    (t.fn.bootstrapTable.methods = ta.METHODS),
    (t.fn.bootstrapTable.utils = Qr),
    t(function () {
      t('[data-toggle="table"]').bootstrapTable();
    }),
    ta
  );
});
