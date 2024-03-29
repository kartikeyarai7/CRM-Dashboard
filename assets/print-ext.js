/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.18.1
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

!(function (t, r) {
  "object" == typeof exports && "undefined" != typeof module ? r(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], r) : r((t = t || self).jQuery);
})(this, function (t) {
  "use strict";
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function n(t, r) {
    return t((r = { exports: {} }), r.exports), r.exports;
  }
  var e = function (t) {
      return t && t.Math == Math && t;
    },
    o = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof r && r) || Function("return this")(),
    i = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    a = !i(function () {
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
    u = Object.getOwnPropertyDescriptor,
    f = {
      f:
        u && !c.call({ 1: 2 }, 1)
          ? function (t) {
              var r = u(this, t);
              return !!r && r.enumerable;
            }
          : c
    },
    l = function (t, r) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
    },
    s = {}.toString,
    p = function (t) {
      return s.call(t).slice(8, -1);
    },
    y = "".split,
    d = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == p(t) ? y.call(t, "") : Object(t);
        }
      : Object,
    h = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    v = function (t) {
      return d(h(t));
    },
    g = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    b = function (t, r) {
      if (!g(t)) return t;
      var n, e;
      if (r && "function" == typeof (n = t.toString) && !g((e = n.call(t)))) return e;
      if ("function" == typeof (n = t.valueOf) && !g((e = n.call(t)))) return e;
      if (!r && "function" == typeof (n = t.toString) && !g((e = n.call(t)))) return e;
      throw TypeError("Can't convert object to primitive value");
    },
    m = {}.hasOwnProperty,
    O = function (t, r) {
      return m.call(t, r);
    },
    w = o.document,
    S = g(w) && g(w.createElement),
    j = function (t) {
      return S ? w.createElement(t) : {};
    },
    P =
      !a &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(j("div"), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    T = Object.getOwnPropertyDescriptor,
    x = {
      f: a
        ? T
        : function (t, r) {
            if (((t = v(t)), (r = b(r, !0)), P))
              try {
                return T(t, r);
              } catch (t) {}
            if (O(t, r)) return l(!f.f.call(t, r), t[r]);
          }
    },
    A = function (t) {
      if (!g(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    E = Object.defineProperty,
    L = {
      f: a
        ? E
        : function (t, r, n) {
            if ((A(t), (r = b(r, !0)), A(n), P))
              try {
                return E(t, r, n);
              } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[r] = n.value), t;
          }
    },
    _ = a
      ? function (t, r, n) {
          return L.f(t, r, l(1, n));
        }
      : function (t, r, n) {
          return (t[r] = n), t;
        },
    C = function (t, r) {
      try {
        _(o, t, r);
      } catch (n) {
        o[t] = r;
      }
      return r;
    },
    I = "__core-js_shared__",
    k = o[I] || C(I, {}),
    F = Function.toString;
  "function" != typeof k.inspectSource &&
    (k.inspectSource = function (t) {
      return F.call(t);
    });
  var M,
    N,
    R,
    D = k.inspectSource,
    G = o.WeakMap,
    V = "function" == typeof G && /native code/.test(D(G)),
    B = n(function (t) {
      (t.exports = function (t, r) {
        return k[t] || (k[t] = void 0 !== r ? r : {});
      })("versions", []).push({ version: "3.6.0", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    z = 0,
    U = Math.random(),
    q = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++z + U).toString(36);
    },
    W = B("keys"),
    H = function (t) {
      return W[t] || (W[t] = q(t));
    },
    $ = {},
    Y = o.WeakMap;
  if (V) {
    var J = new Y(),
      Q = J.get,
      K = J.has,
      X = J.set;
    (M = function (t, r) {
      return X.call(J, t, r), r;
    }),
      (N = function (t) {
        return Q.call(J, t) || {};
      }),
      (R = function (t) {
        return K.call(J, t);
      });
  } else {
    var Z = H("state");
    ($[Z] = !0),
      (M = function (t, r) {
        return _(t, Z, r), r;
      }),
      (N = function (t) {
        return O(t, Z) ? t[Z] : {};
      }),
      (R = function (t) {
        return O(t, Z);
      });
  }
  var tt,
    rt = {
      set: M,
      get: N,
      has: R,
      enforce: function (t) {
        return R(t) ? N(t) : M(t, {});
      },
      getterFor: function (t) {
        return function (r) {
          var n;
          if (!g(r) || (n = N(r)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
    nt = n(function (t) {
      var r = rt.get,
        n = rt.enforce,
        e = String(String).split("String");
      (t.exports = function (t, r, i, a) {
        var c = !!a && !!a.unsafe,
          u = !!a && !!a.enumerable,
          f = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof r || O(i, "name") || _(i, "name", r), (n(i).source = e.join("string" == typeof r ? r : ""))), t !== o ? (c ? !f && t[r] && (u = !0) : delete t[r], u ? (t[r] = i) : _(t, r, i)) : u ? (t[r] = i) : C(r, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && r(this).source) || D(this);
      });
    }),
    et = o,
    ot = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    it = function (t, r) {
      return arguments.length < 2 ? ot(et[t]) || ot(o[t]) : (et[t] && et[t][r]) || (o[t] && o[t][r]);
    },
    at = Math.ceil,
    ct = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ct : at)(t);
    },
    ft = Math.min,
    lt = function (t) {
      return t > 0 ? ft(ut(t), 9007199254740991) : 0;
    },
    st = Math.max,
    pt = Math.min,
    yt = function (t, r) {
      var n = ut(t);
      return n < 0 ? st(n + r, 0) : pt(n, r);
    },
    dt = function (t) {
      return function (r, n, e) {
        var o,
          i = v(r),
          a = lt(i.length),
          c = yt(e, a);
        if (t && n != n) {
          for (; a > c; ) if ((o = i[c++]) != o) return !0;
        } else for (; a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
        return !t && -1;
      };
    },
    ht = { includes: dt(!0), indexOf: dt(!1) },
    vt = ht.indexOf,
    gt = function (t, r) {
      var n,
        e = v(t),
        o = 0,
        i = [];
      for (n in e) !O($, n) && O(e, n) && i.push(n);
      for (; r.length > o; ) O(e, (n = r[o++])) && (~vt(i, n) || i.push(n));
      return i;
    },
    bt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    mt = bt.concat("length", "prototype"),
    Ot = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return gt(t, mt);
        }
    },
    wt = { f: Object.getOwnPropertySymbols },
    St =
      it("Reflect", "ownKeys") ||
      function (t) {
        var r = Ot.f(A(t)),
          n = wt.f;
        return n ? r.concat(n(t)) : r;
      },
    jt = function (t, r) {
      for (var n = St(r), e = L.f, o = x.f, i = 0; i < n.length; i++) {
        var a = n[i];
        O(t, a) || e(t, a, o(r, a));
      }
    },
    Pt = /#|\.prototype\./,
    Tt = function (t, r) {
      var n = At[xt(t)];
      return n == Lt || (n != Et && ("function" == typeof r ? i(r) : !!r));
    },
    xt = (Tt.normalize = function (t) {
      return String(t).replace(Pt, ".").toLowerCase();
    }),
    At = (Tt.data = {}),
    Et = (Tt.NATIVE = "N"),
    Lt = (Tt.POLYFILL = "P"),
    _t = Tt,
    Ct = x.f,
    It = function (t, r) {
      var n,
        e,
        i,
        a,
        c,
        u = t.target,
        f = t.global,
        l = t.stat;
      if ((n = f ? o : l ? o[u] || C(u, {}) : (o[u] || {}).prototype))
        for (e in r) {
          if (((a = r[e]), (i = t.noTargetGet ? (c = Ct(n, e)) && c.value : n[e]), !_t(f ? e : u + (l ? "." : "#") + e, t.forced) && void 0 !== i)) {
            if (typeof a == typeof i) continue;
            jt(a, i);
          }
          (t.sham || (i && i.sham)) && _(a, "sham", !0), nt(n, e, a, t);
        }
    },
    kt =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      }),
    Ft = kt && !Symbol.sham && "symbol" == typeof Symbol(),
    Mt =
      Array.isArray ||
      function (t) {
        return "Array" == p(t);
      },
    Nt = function (t) {
      return Object(h(t));
    },
    Rt =
      Object.keys ||
      function (t) {
        return gt(t, bt);
      },
    Dt = a
      ? Object.defineProperties
      : function (t, r) {
          A(t);
          for (var n, e = Rt(r), o = e.length, i = 0; o > i; ) L.f(t, (n = e[i++]), r[n]);
          return t;
        },
    Gt = it("document", "documentElement"),
    Vt = H("IE_PROTO"),
    Bt = function () {},
    zt = function (t) {
      return "<script>" + t + "</" + "script>";
    },
    Ut = function () {
      try {
        tt = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, r;
      Ut = tt
        ? (function (t) {
            t.write(zt("")), t.close();
            var r = t.parentWindow.Object;
            return (t = null), r;
          })(tt)
        : (((r = j("iframe")).style.display = "none"), Gt.appendChild(r), (r.src = String("javascript:")), (t = r.contentWindow.document).open(), t.write(zt("document.F=Object")), t.close(), t.F);
      for (var n = bt.length; n--; ) delete Ut.prototype[bt[n]];
      return Ut();
    };
  $[Vt] = !0;
  var qt =
      Object.create ||
      function (t, r) {
        var n;
        return null !== t ? ((Bt.prototype = A(t)), (n = new Bt()), (Bt.prototype = null), (n[Vt] = t)) : (n = Ut()), void 0 === r ? n : Dt(n, r);
      },
    Wt = Ot.f,
    Ht = {}.toString,
    $t = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Yt = {
      f: function (t) {
        return $t && "[object Window]" == Ht.call(t)
          ? (function (t) {
              try {
                return Wt(t);
              } catch (t) {
                return $t.slice();
              }
            })(t)
          : Wt(v(t));
      }
    },
    Jt = B("wks"),
    Qt = o.Symbol,
    Kt = Ft ? Qt : q,
    Xt = function (t) {
      return O(Jt, t) || (kt && O(Qt, t) ? (Jt[t] = Qt[t]) : (Jt[t] = Kt("Symbol." + t))), Jt[t];
    },
    Zt = { f: Xt },
    tr = L.f,
    rr = function (t) {
      var r = et.Symbol || (et.Symbol = {});
      O(r, t) || tr(r, t, { value: Zt.f(t) });
    },
    nr = L.f,
    er = Xt("toStringTag"),
    or = function (t, r, n) {
      t && !O((t = n ? t : t.prototype), er) && nr(t, er, { configurable: !0, value: r });
    },
    ir = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    },
    ar = function (t, r, n) {
      if ((ir(t), void 0 === r)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(r);
          };
        case 1:
          return function (n) {
            return t.call(r, n);
          };
        case 2:
          return function (n, e) {
            return t.call(r, n, e);
          };
        case 3:
          return function (n, e, o) {
            return t.call(r, n, e, o);
          };
      }
      return function () {
        return t.apply(r, arguments);
      };
    },
    cr = Xt("species"),
    ur = function (t, r) {
      var n;
      return Mt(t) && ("function" != typeof (n = t.constructor) || (n !== Array && !Mt(n.prototype)) ? g(n) && null === (n = n[cr]) && (n = void 0) : (n = void 0)), new (void 0 === n ? Array : n)(0 === r ? 0 : r);
    },
    fr = [].push,
    lr = function (t) {
      var r = 1 == t,
        n = 2 == t,
        e = 3 == t,
        o = 4 == t,
        i = 6 == t,
        a = 5 == t || i;
      return function (c, u, f, l) {
        for (var s, p, y = Nt(c), h = d(y), v = ar(u, f, 3), g = lt(h.length), b = 0, m = l || ur, O = r ? m(c, g) : n ? m(c, 0) : void 0; g > b; b++)
          if ((a || b in h) && ((p = v((s = h[b]), b, y)), t))
            if (r) O[b] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return s;
                case 6:
                  return b;
                case 2:
                  fr.call(O, s);
              }
            else if (o) return !1;
        return i ? -1 : e || o ? o : O;
      };
    },
    sr = { forEach: lr(0), map: lr(1), filter: lr(2), some: lr(3), every: lr(4), find: lr(5), findIndex: lr(6) },
    pr = sr.forEach,
    yr = H("hidden"),
    dr = "Symbol",
    hr = Xt("toPrimitive"),
    vr = rt.set,
    gr = rt.getterFor(dr),
    br = Object.prototype,
    mr = o.Symbol,
    Or = it("JSON", "stringify"),
    wr = x.f,
    Sr = L.f,
    jr = Yt.f,
    Pr = f.f,
    Tr = B("symbols"),
    xr = B("op-symbols"),
    Ar = B("string-to-symbol-registry"),
    Er = B("symbol-to-string-registry"),
    Lr = B("wks"),
    _r = o.QObject,
    Cr = !_r || !_r.prototype || !_r.prototype.findChild,
    Ir =
      a &&
      i(function () {
        return (
          7 !=
          qt(
            Sr({}, "a", {
              get: function () {
                return Sr(this, "a", { value: 7 }).a;
              }
            })
          ).a
        );
      })
        ? function (t, r, n) {
            var e = wr(br, r);
            e && delete br[r], Sr(t, r, n), e && t !== br && Sr(br, r, e);
          }
        : Sr,
    kr = function (t, r) {
      var n = (Tr[t] = qt(mr.prototype));
      return vr(n, { type: dr, tag: t, description: r }), a || (n.description = r), n;
    },
    Fr =
      kt && "symbol" == typeof mr.iterator
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof mr;
          },
    Mr = function (t, r, n) {
      t === br && Mr(xr, r, n), A(t);
      var e = b(r, !0);
      return A(n), O(Tr, e) ? (n.enumerable ? (O(t, yr) && t[yr][e] && (t[yr][e] = !1), (n = qt(n, { enumerable: l(0, !1) }))) : (O(t, yr) || Sr(t, yr, l(1, {})), (t[yr][e] = !0)), Ir(t, e, n)) : Sr(t, e, n);
    },
    Nr = function (t, r) {
      A(t);
      var n = v(r),
        e = Rt(n).concat(Vr(n));
      return (
        pr(e, function (r) {
          (a && !Rr.call(n, r)) || Mr(t, r, n[r]);
        }),
        t
      );
    },
    Rr = function (t) {
      var r = b(t, !0),
        n = Pr.call(this, r);
      return !(this === br && O(Tr, r) && !O(xr, r)) && (!(n || !O(this, r) || !O(Tr, r) || (O(this, yr) && this[yr][r])) || n);
    },
    Dr = function (t, r) {
      var n = v(t),
        e = b(r, !0);
      if (n !== br || !O(Tr, e) || O(xr, e)) {
        var o = wr(n, e);
        return !o || !O(Tr, e) || (O(n, yr) && n[yr][e]) || (o.enumerable = !0), o;
      }
    },
    Gr = function (t) {
      var r = jr(v(t)),
        n = [];
      return (
        pr(r, function (t) {
          O(Tr, t) || O($, t) || n.push(t);
        }),
        n
      );
    },
    Vr = function (t) {
      var r = t === br,
        n = jr(r ? xr : v(t)),
        e = [];
      return (
        pr(n, function (t) {
          !O(Tr, t) || (r && !O(br, t)) || e.push(Tr[t]);
        }),
        e
      );
    };
  if (
    (kt ||
      (nt(
        (mr = function () {
          if (this instanceof mr) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            r = q(t),
            n = function (t) {
              this === br && n.call(xr, t), O(this, yr) && O(this[yr], r) && (this[yr][r] = !1), Ir(this, r, l(1, t));
            };
          return a && Cr && Ir(br, r, { configurable: !0, set: n }), kr(r, t);
        }).prototype,
        "toString",
        function () {
          return gr(this).tag;
        }
      ),
      (f.f = Rr),
      (L.f = Mr),
      (x.f = Dr),
      (Ot.f = Yt.f = Gr),
      (wt.f = Vr),
      a &&
        (Sr(mr.prototype, "description", {
          configurable: !0,
          get: function () {
            return gr(this).description;
          }
        }),
        nt(br, "propertyIsEnumerable", Rr, { unsafe: !0 }))),
    Ft ||
      (Zt.f = function (t) {
        return kr(Xt(t), t);
      }),
    It({ global: !0, wrap: !0, forced: !kt, sham: !kt }, { Symbol: mr }),
    pr(Rt(Lr), function (t) {
      rr(t);
    }),
    It(
      { target: dr, stat: !0, forced: !kt },
      {
        for: function (t) {
          var r = String(t);
          if (O(Ar, r)) return Ar[r];
          var n = mr(r);
          return (Ar[r] = n), (Er[n] = r), n;
        },
        keyFor: function (t) {
          if (!Fr(t)) throw TypeError(t + " is not a symbol");
          if (O(Er, t)) return Er[t];
        },
        useSetter: function () {
          Cr = !0;
        },
        useSimple: function () {
          Cr = !1;
        }
      }
    ),
    It(
      { target: "Object", stat: !0, forced: !kt, sham: !a },
      {
        create: function (t, r) {
          return void 0 === r ? qt(t) : Nr(qt(t), r);
        },
        defineProperty: Mr,
        defineProperties: Nr,
        getOwnPropertyDescriptor: Dr
      }
    ),
    It({ target: "Object", stat: !0, forced: !kt }, { getOwnPropertyNames: Gr, getOwnPropertySymbols: Vr }),
    It(
      {
        target: "Object",
        stat: !0,
        forced: i(function () {
          wt.f(1);
        })
      },
      {
        getOwnPropertySymbols: function (t) {
          return wt.f(Nt(t));
        }
      }
    ),
    Or)
  ) {
    var Br =
      !kt ||
      i(function () {
        var t = mr();
        return "[null]" != Or([t]) || "{}" != Or({ a: t }) || "{}" != Or(Object(t));
      });
    It(
      { target: "JSON", stat: !0, forced: Br },
      {
        stringify: function (t, r, n) {
          for (var e, o = [t], i = 1; arguments.length > i; ) o.push(arguments[i++]);
          if (((e = r), (g(r) || void 0 !== t) && !Fr(t)))
            return (
              Mt(r) ||
                (r = function (t, r) {
                  if (("function" == typeof e && (r = e.call(this, t, r)), !Fr(r))) return r;
                }),
              (o[1] = r),
              Or.apply(null, o)
            );
        }
      }
    );
  }
  mr.prototype[hr] || _(mr.prototype, hr, mr.prototype.valueOf), or(mr, dr), ($[yr] = !0);
  var zr = L.f,
    Ur = o.Symbol;
  if (a && "function" == typeof Ur && (!("description" in Ur.prototype) || void 0 !== Ur().description)) {
    var qr = {},
      Wr = function () {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          r = this instanceof Wr ? new Ur(t) : void 0 === t ? Ur() : Ur(t);
        return "" === t && (qr[r] = !0), r;
      };
    jt(Wr, Ur);
    var Hr = (Wr.prototype = Ur.prototype);
    Hr.constructor = Wr;
    var $r = Hr.toString,
      Yr = "Symbol(test)" == String(Ur("test")),
      Jr = /^Symbol\((.*)\)[^)]+$/;
    zr(Hr, "description", {
      configurable: !0,
      get: function () {
        var t = g(this) ? this.valueOf() : this,
          r = $r.call(t);
        if (O(qr, t)) return "";
        var n = Yr ? r.slice(7, -1) : r.replace(Jr, "$1");
        return "" === n ? void 0 : n;
      }
    }),
      It({ global: !0, forced: !0 }, { Symbol: Wr });
  }
  rr("iterator");
  var Qr,
    Kr,
    Xr = function (t, r, n) {
      var e = b(r);
      e in t ? L.f(t, e, l(0, n)) : (t[e] = n);
    },
    Zr = it("navigator", "userAgent") || "",
    tn = o.process,
    rn = tn && tn.versions,
    nn = rn && rn.v8;
  nn ? (Kr = (Qr = nn.split("."))[0] + Qr[1]) : Zr && (!(Qr = Zr.match(/Edge\/(\d+)/)) || Qr[1] >= 74) && (Qr = Zr.match(/Chrome\/(\d+)/)) && (Kr = Qr[1]);
  var en = Kr && +Kr,
    on = Xt("species"),
    an = function (t) {
      return (
        en >= 51 ||
        !i(function () {
          var r = [];
          return (
            ((r.constructor = {})[on] = function () {
              return { foo: 1 };
            }),
            1 !== r[t](Boolean).foo
          );
        })
      );
    },
    cn = Xt("isConcatSpreadable"),
    un = 9007199254740991,
    fn = "Maximum allowed index exceeded",
    ln =
      en >= 51 ||
      !i(function () {
        var t = [];
        return (t[cn] = !1), t.concat()[0] !== t;
      }),
    sn = an("concat"),
    pn = function (t) {
      if (!g(t)) return !1;
      var r = t[cn];
      return void 0 !== r ? !!r : Mt(t);
    };
  It(
    { target: "Array", proto: !0, forced: !ln || !sn },
    {
      concat: function (t) {
        var r,
          n,
          e,
          o,
          i,
          a = Nt(this),
          c = ur(a, 0),
          u = 0;
        for (r = -1, e = arguments.length; r < e; r++)
          if (pn((i = -1 === r ? a : arguments[r]))) {
            if (u + (o = lt(i.length)) > un) throw TypeError(fn);
            for (n = 0; n < o; n++, u++) n in i && Xr(c, u, i[n]);
          } else {
            if (u >= un) throw TypeError(fn);
            Xr(c, u++, i);
          }
        return (c.length = u), c;
      }
    }
  );
  var yn = sr.filter,
    dn = an("filter"),
    hn =
      dn &&
      !i(function () {
        [].filter.call({ length: -1, 0: 1 }, function (t) {
          throw t;
        });
      });
  It(
    { target: "Array", proto: !0, forced: !dn || !hn },
    {
      filter: function (t) {
        return yn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var vn = Xt("unscopables"),
    gn = Array.prototype;
  null == gn[vn] && L.f(gn, vn, { configurable: !0, value: qt(null) });
  var bn = function (t) {
      gn[vn][t] = !0;
    },
    mn = sr.find,
    On = "find",
    wn = !0;
  On in [] &&
    Array(1).find(function () {
      wn = !1;
    }),
    It(
      { target: "Array", proto: !0, forced: wn },
      {
        find: function (t) {
          return mn(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
    bn(On);
  var Sn = function (t, r, n, e, o, i, a, c) {
      for (var u, f = o, l = 0, s = !!a && ar(a, c, 3); l < e; ) {
        if (l in n) {
          if (((u = s ? s(n[l], l, r) : n[l]), i > 0 && Mt(u))) f = Sn(t, r, u, lt(u.length), f, i - 1) - 1;
          else {
            if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
            t[f] = u;
          }
          f++;
        }
        l++;
      }
      return f;
    },
    jn = Sn;
  It(
    { target: "Array", proto: !0 },
    {
      flat: function () {
        var t = arguments.length ? arguments[0] : void 0,
          r = Nt(this),
          n = lt(r.length),
          e = ur(r, 0);
        return (e.length = jn(e, r, r, n, 0, void 0 === t ? 1 : ut(t))), e;
      }
    }
  );
  var Pn = ht.includes;
  It(
    { target: "Array", proto: !0 },
    {
      includes: function (t) {
        return Pn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    bn("includes");
  var Tn = function (t, r) {
      var n = [][t];
      return (
        !n ||
        !i(function () {
          n.call(
            null,
            r ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    xn = ht.indexOf,
    An = [].indexOf,
    En = !!An && 1 / [1].indexOf(1, -0) < 0,
    Ln = Tn("indexOf");
  It(
    { target: "Array", proto: !0, forced: En || Ln },
    {
      indexOf: function (t) {
        return En ? An.apply(this, arguments) || 0 : xn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var _n,
    Cn,
    In,
    kn = !i(function () {
      function t() {}
      return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
    }),
    Fn = H("IE_PROTO"),
    Mn = Object.prototype,
    Nn = kn
      ? Object.getPrototypeOf
      : function (t) {
          return (t = Nt(t)), O(t, Fn) ? t[Fn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Mn : null;
        },
    Rn = Xt("iterator"),
    Dn = !1;
  [].keys && ("next" in (In = [].keys()) ? (Cn = Nn(Nn(In))) !== Object.prototype && (_n = Cn) : (Dn = !0)),
    null == _n && (_n = {}),
    O(_n, Rn) ||
      _(_n, Rn, function () {
        return this;
      });
  var Gn = { IteratorPrototype: _n, BUGGY_SAFARI_ITERATORS: Dn },
    Vn = Gn.IteratorPrototype,
    Bn =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              r = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (r = n instanceof Array);
            } catch (t) {}
            return function (n, e) {
              return (
                A(n),
                (function (t) {
                  if (!g(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                })(e),
                r ? t.call(n, e) : (n.__proto__ = e),
                n
              );
            };
          })()
        : void 0),
    zn = Gn.IteratorPrototype,
    Un = Gn.BUGGY_SAFARI_ITERATORS,
    qn = Xt("iterator"),
    Wn = "keys",
    Hn = "values",
    $n = "entries",
    Yn = function () {
      return this;
    },
    Jn = function (t, r, n, e, o, i, a) {
      !(function (t, r, n) {
        var e = r + " Iterator";
        (t.prototype = qt(Vn, { next: l(1, n) })), or(t, e, !1);
      })(n, r, e);
      var c,
        u,
        f,
        s = function (t) {
          if (t === o && v) return v;
          if (!Un && t in d) return d[t];
          switch (t) {
            case Wn:
            case Hn:
            case $n:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        p = r + " Iterator",
        y = !1,
        d = t.prototype,
        h = d[qn] || d["@@iterator"] || (o && d[o]),
        v = (!Un && h) || s(o),
        g = ("Array" == r && d.entries) || h;
      if (
        (g && ((c = Nn(g.call(new t()))), zn !== Object.prototype && c.next && (Nn(c) !== zn && (Bn ? Bn(c, zn) : "function" != typeof c[qn] && _(c, qn, Yn)), or(c, p, !0))),
        o == Hn &&
          h &&
          h.name !== Hn &&
          ((y = !0),
          (v = function () {
            return h.call(this);
          })),
        d[qn] !== v && _(d, qn, v),
        o)
      )
        if (((u = { values: s(Hn), keys: i ? v : s(Wn), entries: s($n) }), a)) for (f in u) (Un || y || !(f in d)) && nt(d, f, u[f]);
        else It({ target: r, proto: !0, forced: Un || y }, u);
      return u;
    },
    Qn = "Array Iterator",
    Kn = rt.set,
    Xn = rt.getterFor(Qn),
    Zn = Jn(
      Array,
      "Array",
      function (t, r) {
        Kn(this, { type: Qn, target: v(t), index: 0, kind: r });
      },
      function () {
        var t = Xn(this),
          r = t.target,
          n = t.kind,
          e = t.index++;
        return !r || e >= r.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == n ? { value: e, done: !1 } : "values" == n ? { value: r[e], done: !1 } : { value: [e, r[e]], done: !1 };
      },
      "values"
    );
  bn("keys"), bn("values"), bn("entries");
  var te = [].join,
    re = d != Object,
    ne = Tn("join", ",");
  It(
    { target: "Array", proto: !0, forced: re || ne },
    {
      join: function (t) {
        return te.call(v(this), void 0 === t ? "," : t);
      }
    }
  );
  var ee = sr.map,
    oe = an("map"),
    ie =
      oe &&
      !i(function () {
        [].map.call({ length: -1, 0: 1 }, function (t) {
          throw t;
        });
      });
  It(
    { target: "Array", proto: !0, forced: !oe || !ie },
    {
      map: function (t) {
        return ee(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var ae = Xt("species"),
    ce = [].slice,
    ue = Math.max;
  It(
    { target: "Array", proto: !0, forced: !an("slice") },
    {
      slice: function (t, r) {
        var n,
          e,
          o,
          i = v(this),
          a = lt(i.length),
          c = yt(t, a),
          u = yt(void 0 === r ? a : r, a);
        if (Mt(i) && ("function" != typeof (n = i.constructor) || (n !== Array && !Mt(n.prototype)) ? g(n) && null === (n = n[ae]) && (n = void 0) : (n = void 0), n === Array || void 0 === n)) return ce.call(i, c, u);
        for (e = new (void 0 === n ? Array : n)(ue(u - c, 0)), o = 0; c < u; c++, o++) c in i && Xr(e, o, i[c]);
        return (e.length = o), e;
      }
    }
  );
  var fe = [],
    le = fe.sort,
    se = i(function () {
      fe.sort(void 0);
    }),
    pe = i(function () {
      fe.sort(null);
    }),
    ye = Tn("sort");
  It(
    { target: "Array", proto: !0, forced: se || !pe || ye },
    {
      sort: function (t) {
        return void 0 === t ? le.call(Nt(this)) : le.call(Nt(this), ir(t));
      }
    }
  ),
    bn("flat");
  var de = Object.assign,
    he = Object.defineProperty,
    ve =
      !de ||
      i(function () {
        if (
          a &&
          1 !==
            de(
              { b: 1 },
              de(
                he({}, "a", {
                  enumerable: !0,
                  get: function () {
                    he(this, "b", { value: 3, enumerable: !1 });
                  }
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          r = {},
          n = Symbol(),
          e = "abcdefghijklmnopqrst";
        return (
          (t[n] = 7),
          e.split("").forEach(function (t) {
            r[t] = t;
          }),
          7 != de({}, t)[n] || Rt(de({}, r)).join("") != e
        );
      })
        ? function (t, r) {
            for (var n = Nt(t), e = arguments.length, o = 1, i = wt.f, c = f.f; e > o; ) for (var u, l = d(arguments[o++]), s = i ? Rt(l).concat(i(l)) : Rt(l), p = s.length, y = 0; p > y; ) (u = s[y++]), (a && !c.call(l, u)) || (n[u] = l[u]);
            return n;
          }
        : de;
  It({ target: "Object", stat: !0, forced: Object.assign !== ve }, { assign: ve });
  var ge = {};
  ge[Xt("toStringTag")] = "z";
  var be = "[object z]" === String(ge),
    me = Xt("toStringTag"),
    Oe =
      "Arguments" ==
      p(
        (function () {
          return arguments;
        })()
      ),
    we = be
      ? p
      : function (t) {
          var r, n, e;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, r) {
                try {
                  return t[r];
                } catch (t) {}
              })((r = Object(t)), me))
            ? n
            : Oe
            ? p(r)
            : "Object" == (e = p(r)) && "function" == typeof r.callee
            ? "Arguments"
            : e;
        },
    Se = be
      ? {}.toString
      : function () {
          return "[object " + we(this) + "]";
        };
  be || nt(Object.prototype, "toString", Se, { unsafe: !0 });
  var je = function (t) {
      return function (r, n) {
        var e,
          o,
          i = String(h(r)),
          a = ut(n),
          c = i.length;
        return a < 0 || a >= c ? (t ? "" : void 0) : (e = i.charCodeAt(a)) < 55296 || e > 56319 || a + 1 === c || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? (t ? i.charAt(a) : e) : t ? i.slice(a, a + 2) : o - 56320 + ((e - 55296) << 10) + 65536;
      };
    },
    Pe = { codeAt: je(!1), charAt: je(!0) }.charAt,
    Te = "String Iterator",
    xe = rt.set,
    Ae = rt.getterFor(Te);
  Jn(
    String,
    "String",
    function (t) {
      xe(this, { type: Te, string: String(t), index: 0 });
    },
    function () {
      var t,
        r = Ae(this),
        n = r.string,
        e = r.index;
      return e >= n.length ? { value: void 0, done: !0 } : ((t = Pe(n, e)), (r.index += t.length), { value: t, done: !1 });
    }
  );
  var Ee = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 },
    Le = Xt("iterator"),
    _e = Xt("toStringTag"),
    Ce = Zn.values;
  for (var Ie in Ee) {
    var ke = o[Ie],
      Fe = ke && ke.prototype;
    if (Fe) {
      if (Fe[Le] !== Ce)
        try {
          _(Fe, Le, Ce);
        } catch (t) {
          Fe[Le] = Ce;
        }
      if ((Fe[_e] || _(Fe, _e, Ie), Ee[Ie]))
        for (var Me in Zn)
          if (Fe[Me] !== Zn[Me])
            try {
              _(Fe, Me, Zn[Me]);
            } catch (t) {
              Fe[Me] = Zn[Me];
            }
    }
  }
  function Ne(t, r) {
    if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function Re(t, r) {
    for (var n = 0; n < r.length; n++) {
      var e = r[n];
      (e.enumerable = e.enumerable || !1), (e.configurable = !0), "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }
  function De(t) {
    return (De = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function Ge(t, r) {
    return (Ge =
      Object.setPrototypeOf ||
      function (t, r) {
        return (t.__proto__ = r), t;
      })(t, r);
  }
  function Ve(t, r) {
    return !r || ("object" != typeof r && "function" != typeof r)
      ? (function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        })(t)
      : r;
  }
  function Be(t, r, n) {
    return (Be =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, r, n) {
            var e = (function (t, r) {
              for (; !Object.prototype.hasOwnProperty.call(t, r) && null !== (t = De(t)); );
              return t;
            })(t, r);
            if (e) {
              var o = Object.getOwnPropertyDescriptor(e, r);
              return o.get ? o.get.call(n) : o.value;
            }
          })(t, r, n || t);
  }
  var ze = t.fn.bootstrapTable.utils;
  t.extend(t.fn.bootstrapTable.locales, {
    formatPrint: function () {
      return "Print";
    }
  }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales),
    t.extend(t.fn.bootstrapTable.defaults, {
      showPrint: !1,
      printAsFilteredAndSortedOnUI: !0,
      printSortColumn: void 0,
      printSortOrder: "asc",
      printPageBuilder: function (t) {
        return (function (t) {
          return '\n  <html>\n  <head>\n  <style type="text/css" media="print">\n  @page {\n    size: auto;\n    margin: 25px 0 25px 0;\n  }\n  </style>\n  <style type="text/css" media="all">\n  table {\n    border-collapse: collapse;\n    font-size: 12px;\n  }\n  table, th, td {\n    border: 1px solid grey;\n  }\n  th, td {\n    text-align: center;\n    vertical-align: middle;\n  }\n  p {\n    font-weight: bold;\n    margin-left:20px;\n  }\n  table {\n    width:94%;\n    margin-left:3%;\n    margin-right:3%;\n  }\n  div.bs-table-print {\n    text-align:center;\n  }\n  </style>\n  </head>\n  <title>Print Table</title>\n  <body>\n  <p>Printed on: '.concat(new Date(), ' </p>\n  <div class="bs-table-print">').concat(t, "</div>\n  </body>\n  </html>");
        })(t);
      }
    }),
    t.extend(t.fn.bootstrapTable.COLUMN_DEFAULTS, { printFilter: void 0, printIgnore: !1, printFormatter: void 0 }),
    t.extend(t.fn.bootstrapTable.defaults.icons, { print: { bootstrap3: "glyphicon-print icon-share", "bootstrap-table": "icon-printer" }[t.fn.bootstrapTable.theme] || "fa-print" }),
    (t.BootstrapTable = (function (t) {
      function r() {
        return Ne(this, r), Ve(this, De(r).apply(this, arguments));
      }
      var n, e, o;
      return (
        (function (t, r) {
          if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
          (t.prototype = Object.create(r && r.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), r && Ge(t, r);
        })(r, t),
        (n = r),
        (e = [
          {
            key: "init",
            value: function () {
              for (var t, n = arguments.length, e = new Array(n), o = 0; o < n; o++) e[o] = arguments[o];
              (t = Be(De(r.prototype), "init", this)).call.apply(t, [this].concat(e)), this.options.showPrint && (this.mergedCells = []);
            }
          },
          {
            key: "initToolbar",
            value: function () {
              var t,
                n = this;
              (this.showToolbar = this.showToolbar || this.options.showPrint),
                this.options.showPrint &&
                  (this.buttons = Object.assign(this.buttons, {
                    print: {
                      text: this.options.formatPrint(),
                      icon: this.options.icons.print,
                      event: function () {
                        n.doPrint(n.options.printAsFilteredAndSortedOnUI ? n.getData() : n.options.data.slice(0));
                      },
                      attributes: { "aria-label": this.options.formatPrint(), title: this.options.formatPrint() }
                    }
                  }));
              for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
              (t = Be(De(r.prototype), "initToolbar", this)).call.apply(t, [this].concat(o));
            }
          },
          {
            key: "mergeCells",
            value: function (t) {
              if ((Be(De(r.prototype), "mergeCells", this).call(this, t), this.options.showPrint)) {
                var n = this.getVisibleFields().indexOf(t.field);
                ze.hasDetailViewIcon(this.options) && (n += 1), this.mergedCells.push({ row: t.index, col: n, rowspan: t.rowspan || 1, colspan: t.colspan || 1 });
              }
            }
          },
          {
            key: "doPrint",
            value: function (t) {
              var r,
                n = this,
                e = function (t, r, e) {
                  var o = ze.calculateObjectValue(e, e.printFormatter, [t[e.field], t, r], t[e.field]);
                  return null == o ? n.options.undefinedText : o;
                },
                o = (function (t, r) {
                  var o = n.$el.attr("dir") || "ltr",
                    i = ['<table dir="'.concat(o, '"><thead>')],
                    a = !0,
                    c = !1,
                    u = void 0;
                  try {
                    for (var f, l = r[Symbol.iterator](); !(a = (f = l.next()).done); a = !0) {
                      var s = f.value;
                      i.push("<tr>");
                      for (var p = 0; p < s.length; p++) s[p].printIgnore || i.push("<th\n              ".concat(ze.sprintf(' rowspan="%s"', s[p].rowspan), "\n              ").concat(ze.sprintf(' colspan="%s"', s[p].colspan), "\n              >").concat(s[p].title, "</th>"));
                      i.push("</tr>");
                    }
                  } catch (t) {
                    (c = !0), (u = t);
                  } finally {
                    try {
                      a || null == l.return || l.return();
                    } finally {
                      if (c) throw u;
                    }
                  }
                  i.push("</thead><tbody>");
                  var y = [];
                  if (n.mergedCells)
                    for (var d = 0; d < n.mergedCells.length; d++)
                      for (var h = n.mergedCells[d], v = 0; v < h.rowspan; v++)
                        for (var g = h.row + v, b = 0; b < h.colspan; b++) {
                          var m = h.col + b;
                          y.push("".concat(g, ",").concat(m));
                        }
                  for (var O = 0; O < t.length; O++) {
                    i.push("<tr>");
                    var w = r.flat(1);
                    w.sort(function (t, r) {
                      return t.colspanIndex - r.colspanIndex;
                    });
                    for (var S = 0; S < w.length; S++)
                      if (!(w[S].colspanGroup > 0)) {
                        var j = 0,
                          P = 0;
                        if (n.mergedCells)
                          for (var T = 0; T < n.mergedCells.length; T++) {
                            var x = n.mergedCells[T];
                            x.col === S && x.row === O && ((j = x.rowspan), (P = x.colspan));
                          }
                        !w[S].printIgnore && w[S].field && (!y.includes("".concat(O, ",").concat(S)) || (j > 0 && P > 0)) && (j > 0 && P > 0 ? i.push("<td ".concat(ze.sprintf(' rowspan="%s"', j), " ").concat(ze.sprintf(' colspan="%s"', P), ">"), e(t[O], O, w[S]), "</td>") : i.push("<td>", e(t[O], O, w[S]), "</td>"));
                      }
                    i.push("</tr>");
                  }
                  if ((i.push("</tbody>"), n.options.showFooter)) {
                    i.push("<footer><tr>");
                    var A = !0,
                      E = !1,
                      L = void 0;
                    try {
                      for (var _, C = r[Symbol.iterator](); !(A = (_ = C.next()).done); A = !0)
                        for (var I = _.value, k = 0; k < I.length; k++)
                          if (!I[k].printIgnore) {
                            var F = ze.trToData(I, n.$el.find(">tfoot>tr")),
                              M = ze.calculateObjectValue(I[k], I[k].footerFormatter, [t], (F[0] && F[0][I[k].field]) || "");
                            i.push("<th>".concat(M, "</th>"));
                          }
                    } catch (t) {
                      (E = !0), (L = t);
                    } finally {
                      try {
                        A || null == C.return || C.return();
                      } finally {
                        if (E) throw L;
                      }
                    }
                    i.push("</tr></footer>");
                  }
                  return i.push("</table>"), i.join("");
                })(
                  (t = (function (t, r, n) {
                    if (!r) return t;
                    var e = "asc" !== n;
                    return (
                      (e = -(+e || -1)),
                      t.sort(function (t, n) {
                        return e * t[r].localeCompare(n[r]);
                      })
                    );
                  })(
                    (t = (function (t, r) {
                      return t.filter(function (t) {
                        return (function (t, r) {
                          for (var n = 0; n < r.length; ++n) if (t[r[n].colName] !== r[n].value) return !1;
                          return !0;
                        })(t, r);
                      });
                    })(
                      t,
                      (r = this.options.columns) && r[0]
                        ? r[0]
                            .filter(function (t) {
                              return t.printFilter;
                            })
                            .map(function (t) {
                              return { colName: t.field, value: t.printFilter };
                            })
                        : []
                    )),
                    this.options.printSortColumn,
                    this.options.printSortOrder
                  )),
                  this.options.columns
                ),
                i = window.open("");
              i.document.write(this.options.printPageBuilder.call(this, o)), i.document.close(), i.focus(), i.print(), i.close();
            }
          }
        ]) && Re(n.prototype, e),
        o && Re(n, o),
        r
      );
    })(t.BootstrapTable));
});
