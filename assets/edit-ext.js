/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.15.4
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module ? b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : ((a = a || self), b(a.jQuery));
})(this, function (a) {
  "use strict";
  var n = Math.max,
    o = Math.min,
    p = Math.floor;
  function b(a, b) {
    return (b = { exports: {} }), a(b, b.exports), b.exports;
  }
  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    for (var c, d = 0; d < b.length; d++) (c = b[d]), (c.enumerable = c.enumerable || !1), (c.configurable = !0), "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
  }
  function e(a, b, c) {
    return b && d(a.prototype, b), c && d(a, c), a;
  }
  function g(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(b && b.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })), b && i(a, b);
  }
  function h(a) {
    return (
      (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (a) {
            return a.__proto__ || Object.getPrototypeOf(a);
          }),
      h(a)
    );
  }
  function i(a, b) {
    return (
      (i =
        Object.setPrototypeOf ||
        function (a, b) {
          return (a.__proto__ = b), a;
        }),
      i(a, b)
    );
  }
  function j(a) {
    if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function k(a, b) {
    return b && ("object" == typeof b || "function" == typeof b) ? b : j(a);
  }
  function l(a, b) {
    for (; !Object.prototype.hasOwnProperty.call(a, b) && ((a = h(a)), null !== a); );
    return a;
  }
  function m(a, b, c) {
    return (
      (m =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (a, b, c) {
              var d = l(a, b);
              if (d) {
                var e = Object.getOwnPropertyDescriptor(d, b);
                return e.get ? e.get.call(c) : e.value;
              }
            }),
      m(a, b, c || a)
    );
  }
  a = a && a.hasOwnProperty("default") ? a["default"] : a;
  var q,
    r,
    s,
    t = "undefined" == typeof globalThis ? ("undefined" == typeof window ? ("undefined" == typeof global ? ("undefined" == typeof self ? {} : self) : global) : window) : globalThis,
    u = "object",
    v = function (a) {
      return a && a.Math == Math && a;
    },
    w = v(typeof globalThis == u && globalThis) || v(typeof window == u && window) || v(typeof self == u && self) || v(typeof t == u && t) || Function("return this")(),
    x = function (a) {
      try {
        return !!a();
      } catch (a) {
        return !0;
      }
    },
    y = !x(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          }
        }).a
      );
    }),
    z = {}.propertyIsEnumerable,
    A = Object.getOwnPropertyDescriptor,
    B = A && !z.call({ 1: 2 }, 1),
    C = B
      ? function (a) {
          var b = A(this, a);
          return !!b && b.enumerable;
        }
      : z,
    f = { f: C },
    D = function (a, b) {
      return { enumerable: !(1 & a), configurable: !(2 & a), writable: !(4 & a), value: b };
    },
    E = {}.toString,
    F = function (a) {
      return E.call(a).slice(8, -1);
    },
    G = "".split,
    H = x(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (a) {
          return "String" == F(a) ? G.call(a, "") : Object(a);
        }
      : Object,
    I = function (a) {
      if (a == null) throw TypeError("Can't call method on " + a);
      return a;
    },
    J = function (a) {
      return H(I(a));
    },
    K = function (a) {
      return "object" == typeof a ? null !== a : "function" == typeof a;
    },
    L = function (a, b) {
      if (!K(a)) return a;
      var c, d;
      if (b && "function" == typeof (c = a.toString) && !K((d = c.call(a)))) return d;
      if ("function" == typeof (c = a.valueOf) && !K((d = c.call(a)))) return d;
      if (!b && "function" == typeof (c = a.toString) && !K((d = c.call(a)))) return d;
      throw TypeError("Can't convert object to primitive value");
    },
    M = {}.hasOwnProperty,
    N = function (a, b) {
      return M.call(a, b);
    },
    O = w.document,
    P = K(O) && K(O.createElement),
    Q = function (a) {
      return P ? O.createElement(a) : {};
    },
    R =
      !y &&
      !x(function () {
        return (
          7 !=
          Object.defineProperty(Q("div"), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    S = Object.getOwnPropertyDescriptor,
    T = y
      ? S
      : function (a, b) {
          if (((a = J(a)), (b = L(b, !0)), R))
            try {
              return S(a, b);
            } catch (a) {}
          return N(a, b) ? D(!f.f.call(a, b), a[b]) : void 0;
        },
    U = { f: T },
    V = function (a) {
      if (!K(a)) throw TypeError(a + " is not an object");
      return a;
    },
    W = Object.defineProperty,
    X = y
      ? W
      : function (a, b, c) {
          if ((V(a), (b = L(b, !0)), V(c), R))
            try {
              return W(a, b, c);
            } catch (a) {}
          if ("get" in c || "set" in c) throw TypeError("Accessors not supported");
          return "value" in c && (a[b] = c.value), a;
        },
    Y = { f: X },
    Z = y
      ? function (a, b, c) {
          return Y.f(a, b, D(1, c));
        }
      : function (a, b, c) {
          return (a[b] = c), a;
        },
    _ = function (a, b) {
      try {
        Z(w, a, b);
      } catch (c) {
        w[a] = b;
      }
      return b;
    },
    aa = b(function (a) {
      var b = w["__core-js_shared__"] || _("__core-js_shared__", {});
      (a.exports = function (a, c) {
        return b[a] || (b[a] = c === void 0 ? {} : c);
      })("versions", []).push({ version: "3.1.3", mode: "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    ba = aa("native-function-to-string", Function.toString),
    ca = w.WeakMap,
    da = "function" == typeof ca && /native code/.test(ba.call(ca)),
    ea = 0,
    fa = Math.random(),
    ga = function (a) {
      return "Symbol(" + ((a === void 0 ? "" : a) + "") + ")_" + (++ea + fa).toString(36);
    },
    ha = aa("keys"),
    ia = function (a) {
      return ha[a] || (ha[a] = ga(a));
    },
    ja = {},
    ka = w.WeakMap,
    la = function (a) {
      return s(a) ? r(a) : q(a, {});
    };
  if (da) {
    var ma = new ka(),
      na = ma.get,
      oa = ma.has,
      pa = ma.set;
    (q = function (a, b) {
      return pa.call(ma, a, b), b;
    }),
      (r = function (a) {
        return na.call(ma, a) || {};
      }),
      (s = function (a) {
        return oa.call(ma, a);
      });
  } else {
    var qa = ia("state");
    (ja[qa] = !0),
      (q = function (a, b) {
        return Z(a, qa, b), b;
      }),
      (r = function (a) {
        return N(a, qa) ? a[qa] : {};
      }),
      (s = function (a) {
        return N(a, qa);
      });
  }
  var ra = {
      set: q,
      get: r,
      has: s,
      enforce: la,
      getterFor: function (a) {
        return function (b) {
          var c;
          if (!K(b) || (c = r(b)).type !== a) throw TypeError("Incompatible receiver, " + a + " required");
          return c;
        };
      }
    },
    sa = b(function (a) {
      var b = ra.get,
        c = ra.enforce,
        d = (ba + "").split("toString");
      aa("inspectSource", function (a) {
        return ba.call(a);
      }),
        (a.exports = function (a, b, e, f) {
          var g = !!f && !!f.unsafe,
            h = !!f && !!f.enumerable,
            i = !!f && !!f.noTargetGet;
          return ("function" == typeof e && ("string" == typeof b && !N(e, "name") && Z(e, "name", b), (c(e).source = d.join("string" == typeof b ? b : ""))), a === w) ? void (h ? (a[b] = e) : _(b, e)) : void (g ? !i && a[b] && (h = !0) : delete a[b], h ? (a[b] = e) : Z(a, b, e));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && b(this).source) || ba.call(this);
        });
    }),
    ta = w,
    ua = function (a) {
      return "function" == typeof a ? a : void 0;
    },
    va = function (a, b) {
      return 2 > arguments.length ? ua(ta[a]) || ua(w[a]) : (ta[a] && ta[a][b]) || (w[a] && w[a][b]);
    },
    wa = Math.ceil,
    xa = function (a) {
      return isNaN((a = +a)) ? 0 : (0 < a ? p : wa)(a);
    },
    ya = function (a) {
      return 0 < a ? o(xa(a), 9007199254740991) : 0;
    },
    za = function (a, b) {
      var c = xa(a);
      return 0 > c ? n(c + b, 0) : o(c, b);
    },
    Aa = function (a) {
      return function (b, c, d) {
        var e,
          f = J(b),
          g = ya(f.length),
          h = za(d, g);
        if (a && c != c) {
          for (; g > h; ) if (((e = f[h++]), e != e)) return !0;
        } else for (; g > h; h++) if ((a || h in f) && f[h] === c) return a || h || 0;
        return !a && -1;
      };
    },
    Ba = { includes: Aa(!0), indexOf: Aa(!1) },
    Ca = Ba.indexOf,
    Da = function (a, b) {
      var c,
        d = J(a),
        e = 0,
        f = [];
      for (c in d) !N(ja, c) && N(d, c) && f.push(c);
      for (; b.length > e; ) N(d, (c = b[e++])) && (~Ca(f, c) || f.push(c));
      return f;
    },
    Ea = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Fa = Ea.concat("length", "prototype"),
    Ga =
      Object.getOwnPropertyNames ||
      function (a) {
        return Da(a, Fa);
      },
    Ha = { f: Ga },
    Ia = Object.getOwnPropertySymbols,
    Ja = { f: Ia },
    Ka =
      va("Reflect", "ownKeys") ||
      function (a) {
        var b = Ha.f(V(a)),
          c = Ja.f;
        return c ? b.concat(c(a)) : b;
      },
    La = function (a, b) {
      for (var c, d = Ka(b), e = Y.f, f = U.f, g = 0; g < d.length; g++) (c = d[g]), N(a, c) || e(a, c, f(b, c));
    },
    Ma = /#|\.prototype\./,
    Na = function (a, b) {
      var c = Pa[Oa(a)];
      return !(c != Ra) || (c != Qa && ("function" == typeof b ? x(b) : !!b));
    },
    Oa = (Na.normalize = function (a) {
      return (a + "").replace(Ma, ".").toLowerCase();
    }),
    Pa = (Na.data = {}),
    Qa = (Na.NATIVE = "N"),
    Ra = (Na.POLYFILL = "P"),
    Sa = U.f,
    Ta = function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h,
        i = a.target,
        j = a.global,
        k = a.stat;
      if (((d = j ? w : k ? w[i] || _(i, {}) : (w[i] || {}).prototype), d))
        for (e in b) {
          if (((g = b[e]), a.noTargetGet ? ((h = Sa(d, e)), (f = h && h.value)) : (f = d[e]), (c = Na(j ? e : i + (k ? "." : "#") + e, a.forced)), !c && void 0 !== f)) {
            if (typeof g == typeof f) continue;
            La(g, f);
          }
          (a.sham || (f && f.sham)) && Z(g, "sham", !0), sa(d, e, g, a);
        }
    },
    Ua =
      Array.isArray ||
      function (a) {
        return "Array" == F(a);
      },
    Va = function (a) {
      return Object(I(a));
    },
    Wa = function (a, b, c) {
      var d = L(b);
      d in a ? Y.f(a, d, D(0, c)) : (a[d] = c);
    },
    Xa =
      !!Object.getOwnPropertySymbols &&
      !x(function () {
        return !(Symbol() + "");
      }),
    Ya = w.Symbol,
    Za = aa("wks"),
    $a = function (a) {
      return Za[a] || (Za[a] = (Xa && Ya[a]) || (Xa ? Ya : ga)("Symbol." + a));
    },
    _a = $a("species"),
    ab = function (a, b) {
      var c;
      return Ua(a) && ((c = a.constructor), "function" == typeof c && (c === Array || Ua(c.prototype)) ? (c = void 0) : K(c) && ((c = c[_a]), null === c && (c = void 0))), new (void 0 === c ? Array : c)(0 === b ? 0 : b);
    },
    bb = $a("species"),
    cb = $a("isConcatSpreadable"),
    db = 9007199254740991,
    eb = "Maximum allowed index exceeded",
    fb = !x(function () {
      var a = [];
      return (a[cb] = !1), a.concat()[0] !== a;
    }),
    gb = (function (a) {
      return !x(function () {
        var b = [],
          c = (b.constructor = {});
        return (
          (c[bb] = function () {
            return { foo: 1 };
          }),
          1 !== b[a](Boolean).foo
        );
      });
    })("concat"),
    hb = function (a) {
      if (!K(a)) return !1;
      var b = a[cb];
      return b === void 0 ? Ua(a) : !!b;
    };
  Ta(
    { target: "Array", proto: !0, forced: !fb || !gb },
    {
      concat: function () {
        var a,
          b,
          c,
          d,
          e,
          f = Va(this),
          g = ab(f, 0),
          h = 0;
        for (a = -1, c = arguments.length; a < c; a++)
          if (((e = -1 === a ? f : arguments[a]), hb(e))) {
            if (((d = ya(e.length)), h + d > db)) throw TypeError(eb);
            for (b = 0; b < d; b++, h++) b in e && Wa(g, h, e[b]);
          } else {
            if (h >= db) throw TypeError(eb);
            Wa(g, h++, e);
          }
        return (g.length = h), g;
      }
    }
  );
  var ib = function (a) {
      if ("function" != typeof a) throw TypeError(a + " is not a function");
      return a;
    },
    jb = function (d, e, f) {
      return (ib(d), void 0 === e)
        ? d
        : 0 === f
        ? function () {
            return d.call(e);
          }
        : 1 === f
        ? function (b) {
            return d.call(e, b);
          }
        : 2 === f
        ? function (c, a) {
            return d.call(e, c, a);
          }
        : 3 === f
        ? function (f, a, b) {
            return d.call(e, f, a, b);
          }
        : function () {
            return d.apply(e, arguments);
          };
    },
    kb = [].push,
    lb = function (a) {
      var b = 1 == a,
        c = 4 == a,
        d = 6 == a;
      return function (e, f, g, h) {
        for (var i, j, k = Va(e), l = H(k), m = jb(f, g, 3), n = ya(l.length), o = 0, p = h || ab, q = b ? p(e, n) : 2 == a ? p(e, 0) : void 0; n > o; o++)
          if ((5 == a || d || o in l) && ((i = l[o]), (j = m(i, o, k)), a))
            if (b) q[o] = j;
            else if (j)
              switch (a) {
                case 3:
                  return !0;
                case 5:
                  return i;
                case 6:
                  return o;
                case 2:
                  kb.call(q, i);
              }
            else if (c) return !1;
        return d ? -1 : 3 == a || c ? c : q;
      };
    },
    mb = { forEach: lb(0), map: lb(1), filter: lb(2), some: lb(3), every: lb(4), find: lb(5), findIndex: lb(6) },
    nb =
      Object.keys ||
      function (a) {
        return Da(a, Ea);
      },
    ob = y
      ? Object.defineProperties
      : function (a, b) {
          V(a);
          for (var c, d = nb(b), e = d.length, f = 0; e > f; ) Y.f(a, (c = d[f++]), b[c]);
          return a;
        },
    pb = va("document", "documentElement"),
    qb = ia("IE_PROTO"),
    rb = "prototype",
    sb = function () {},
    tb = function () {
      var a,
        b = Q("iframe"),
        c = Ea.length,
        d = "<",
        e = "script",
        f = ">";
      for (b.style.display = "none", pb.appendChild(b), b.src = "java" + e + ":" + "", a = b.contentWindow.document, a.open(), a.write(d + e + f + "document.F=Object" + d + "/" + e + f), a.close(), tb = a.F; c--; ) delete tb[rb][Ea[c]];
      return tb();
    },
    ub =
      Object.create ||
      function (a, b) {
        var c;
        return null === a ? (c = tb()) : ((sb[rb] = V(a)), (c = new sb()), (sb[rb] = null), (c[qb] = a)), void 0 === b ? c : ob(c, b);
      };
  ja[qb] = !0;
  var vb = $a("unscopables"),
    wb = Array.prototype;
  wb[vb] == null && Z(wb, vb, ub(null));
  var xb = mb.find,
    yb = "find",
    zb = !0;
  yb in [] &&
    [,][yb](function () {
      zb = !1;
    }),
    Ta(
      { target: "Array", proto: !0, forced: zb },
      {
        find: function (a) {
          return xb(this, a, 1 < arguments.length ? arguments[1] : void 0);
        }
      }
    ),
    (function (a) {
      wb[vb][a] = !0;
    })(yb);
  var Ab = function (a, b) {
      var c = [][a];
      return (
        !c ||
        !x(function () {
          c.call(
            null,
            b ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Bb = Ba.indexOf,
    Cb = [].indexOf,
    Db = !!Cb && 0 > 1 / [1].indexOf(1, -0),
    Eb = Ab("indexOf");
  Ta(
    { target: "Array", proto: !0, forced: Db || Eb },
    {
      indexOf: function (a) {
        return Db ? Cb.apply(this, arguments) || 0 : Bb(this, a, 1 < arguments.length ? arguments[1] : void 0);
      }
    }
  );
  var Fb = [].join,
    Gb = H != Object,
    Hb = Ab("join", ",");
  Ta(
    { target: "Array", proto: !0, forced: Gb || Hb },
    {
      join: function (a) {
        return Fb.call(J(this), a === void 0 ? "," : a);
      }
    }
  );
  var Ib = function () {
      var a = V(this),
        b = "";
      return a.global && (b += "g"), a.ignoreCase && (b += "i"), a.multiline && (b += "m"), a.dotAll && (b += "s"), a.unicode && (b += "u"), a.sticky && (b += "y"), b;
    },
    Jb = RegExp.prototype.exec,
    Kb = String.prototype.replace,
    Lb = Jb,
    Mb = (function () {
      var a = /a/,
        b = /b*/g;
      return Jb.call(a, "a"), Jb.call(b, "a"), 0 !== a.lastIndex || 0 !== b.lastIndex;
    })(),
    Nb = /()??/.exec("")[1] !== void 0;
  (Mb || Nb) &&
    (Lb = function (a) {
      var b,
        c,
        d,
        e,
        f = this;
      return (
        Nb && (c = new RegExp("^" + f.source + "$(?!\\s)", Ib.call(f))),
        Mb && (b = f.lastIndex),
        (d = Jb.call(f, a)),
        Mb && d && (f.lastIndex = f.global ? d.index + d[0].length : b),
        Nb &&
          d &&
          1 < d.length &&
          Kb.call(d[0], c, function () {
            for (e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (d[e] = void 0);
          }),
        d
      );
    });
  var Ob = Lb,
    Pb = $a("species"),
    Qb = !x(function () {
      var a = /./;
      return (
        (a.exec = function () {
          var a = [];
          return (a.groups = { a: "7" }), a;
        }),
        "7" !== "".replace(a, "$<a>")
      );
    }),
    Rb = !x(function () {
      var a = /(?:)/,
        b = a.exec;
      a.exec = function () {
        return b.apply(this, arguments);
      };
      var c = "ab".split(a);
      return 2 !== c.length || "a" !== c[0] || "b" !== c[1];
    }),
    Sb = function (a) {
      return function (b, c) {
        var d,
          e,
          f = I(b) + "",
          g = xa(c),
          h = f.length;
        return 0 > g || g >= h ? (a ? "" : void 0) : ((d = f.charCodeAt(g)), 55296 > d || 56319 < d || g + 1 === h || 56320 > (e = f.charCodeAt(g + 1)) || 57343 < e ? (a ? f.charAt(g) : d) : a ? f.slice(g, g + 2) : ((d - 55296) << 10) + (e - 56320) + 65536);
      };
    },
    Tb = { codeAt: Sb(!1), charAt: Sb(!0) },
    Ub = Tb.charAt,
    Vb = function (a, b, c) {
      return b + (c ? Ub(a, b).length : 1);
    },
    Wb = function (a, b) {
      var c = a.exec;
      if ("function" == typeof c) {
        var d = c.call(a, b);
        if ("object" != typeof d) throw TypeError("RegExp exec method returned something other than an Object or null");
        return d;
      }
      if ("RegExp" !== F(a)) throw TypeError("RegExp#exec called on incompatible receiver");
      return Ob.call(a, b);
    },
    Xb = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Yb = /\$([$&'`]|\d\d?)/g,
    Zb = function (a) {
      return a === void 0 ? a : a + "";
    };
  (function (a, b, c, d) {
    var e = $a(a),
      f = !x(function () {
        var b = {};
        return (
          (b[e] = function () {
            return 7;
          }),
          7 != ""[a](b)
        );
      }),
      g =
        f &&
        !x(function () {
          var b = !1,
            c = /a/;
          return (
            (c.exec = function () {
              return (b = !0), null;
            }),
            "split" === a &&
              ((c.constructor = {}),
              (c.constructor[Pb] = function () {
                return c;
              })),
            c[e](""),
            !b
          );
        });
    if (!f || !g || ("replace" === a && !Qb) || ("split" === a && !Rb)) {
      var h = /./[e],
        i = c(e, ""[a], function (a, b, c, d, e) {
          return b.exec === Ob ? (f && !e ? { done: !0, value: h.call(b, c, d) } : { done: !0, value: a.call(c, b, d) }) : { done: !1 };
        }),
        j = i[0],
        k = i[1];
      sa(String.prototype, a, j),
        sa(
          RegExp.prototype,
          e,
          2 == b
            ? function (a, b) {
                return k.call(a, this, b);
              }
            : function (a) {
                return k.call(a, this);
              }
        ),
        d && Z(RegExp.prototype[e], "sham", !0);
    }
  })("replace", 2, function (a, b, c) {
    function d(a, c, d, e, g, h) {
      var i = d + a.length,
        j = e.length,
        f = Yb;
      return (
        void 0 !== g && ((g = Va(g)), (f = Xb)),
        b.call(h, f, function (b, h) {
          var k;
          switch (h.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return a;
            case "`":
              return c.slice(0, d);
            case "'":
              return c.slice(i);
            case "<":
              k = g[h.slice(1, -1)];
              break;
            default:
              var l = +h;
              if (0 == l) return b;
              if (l > j) {
                var m = p(l / 10);
                return 0 === m ? b : m <= j ? (void 0 === e[m - 1] ? h.charAt(1) : e[m - 1] + h.charAt(1)) : b;
              }
              k = e[l - 1];
          }
          return void 0 === k ? "" : k;
        })
      );
    }
    return [
      function (c, d) {
        var e = I(this),
          f = c == null ? void 0 : c[a];
        return f === void 0 ? b.call(e + "", c, d) : f.call(c, e, d);
      },
      function (a, e) {
        var f = c(b, a, this, e);
        if (f.done) return f.value;
        var g = V(a),
          h = this + "",
          k = "function" == typeof e;
        k || (e = e + "");
        var l = g.global;
        if (l) {
          var m = g.unicode;
          g.lastIndex = 0;
        }
        for (var p, q = []; ((p = Wb(g, h)), null !== p) && !(q.push(p), !l); ) {
          var r = p[0] + "";
          "" == r && (g.lastIndex = Vb(h, ya(g.lastIndex), m));
        }
        for (var s = "", t = 0, u = 0; u < q.length; u++) {
          p = q[u];
          for (var v = p[0] + "", w = n(o(xa(p.index), h.length), 0), x = [], y = 1; y < p.length; y++) x.push(Zb(p[y]));
          var z = p.groups;
          if (k) {
            var A = [v].concat(x, w, h);
            z !== void 0 && A.push(z);
            var B = e.apply(void 0, A) + "";
          } else B = d(v, h, w, x, z, e);
          w >= t && ((s += h.slice(t, w) + B), (t = w + v.length));
        }
        return s + h.slice(t);
      }
    ];
  });
  var $b = a.fn.bootstrapTable.utils;
  a.extend(a.fn.bootstrapTable.defaults, {
    editable: !0,
    onEditableInit: function () {
      return !1;
    },
    onEditableSave: function () {
      return !1;
    },
    onEditableShown: function () {
      return !1;
    },
    onEditableHidden: function () {
      return !1;
    }
  }),
    a.extend(a.fn.bootstrapTable.Constructor.EVENTS, { "editable-init.bs.table": "onEditableInit", "editable-save.bs.table": "onEditableSave", "editable-shown.bs.table": "onEditableShown", "editable-hidden.bs.table": "onEditableHidden" }),
    (a.BootstrapTable = (function (b) {
      function d() {
        return c(this, d), k(this, h(d).apply(this, arguments));
      }
      return (
        g(d, b),
        e(d, [
          {
            key: "initTable",
            value: function () {
              var b = this;
              m(h(d.prototype), "initTable", this).call(this),
                this.options.editable &&
                  a.each(this.columns, function (c, d) {
                    if (d.editable) {
                      var e = {},
                        f = [],
                        g = "editable-",
                        h = function (a, b) {
                          var c = a.replace(/([A-Z])/g, function (a) {
                            return "-".concat(a.toLowerCase());
                          });
                          0 === c.indexOf(g) && (e[c.replace(g, "data-")] = b);
                        };
                      a.each(b.options, h),
                        (d.formatter =
                          d.formatter ||
                          function (a) {
                            return a;
                          }),
                        (d._formatter = d._formatter ? d._formatter : d.formatter),
                        (d.formatter = function (c, g, i) {
                          var j = $b.calculateObjectValue(d, d._formatter, [c, g, i], c);
                          (j = "undefined" == typeof j || null === j ? b.options.undefinedText : j),
                            a.each(d, h),
                            a.each(e, function (a, b) {
                              f.push(" ".concat(a, '="').concat(b, '"'));
                            });
                          var k = !1;
                          return d.editable.hasOwnProperty("noeditFormatter") && (k = d.editable.noeditFormatter(c, g, i)), !1 === k ? '<a href="javascript:void(0)"\n            data-name="'.concat(d.field, '"\n            data-pk="').concat(g[b.options.idField], '"\n            data-value="').concat(j, '"\n            ').concat(f.join(""), "></a>") : k;
                        });
                    }
                  });
            }
          },
          {
            key: "initBody",
            value: function (b) {
              var c = this;
              m(h(d.prototype), "initBody", this).call(this, b),
                this.options.editable &&
                  (a.each(this.columns, function (b, d) {
                    if (d.editable) {
                      var e = c.getData(),
                        f = c.$body.find('a[data-name="'.concat(d.field, '"]'));
                      f.each(function (b, c) {
                        var f = a(c),
                          g = f.closest("tr"),
                          h = g.data("index"),
                          i = e[h],
                          j = $b.calculateObjectValue(d, d.editable, [h, i, f], {});
                        f.editable(j);
                      }),
                        f.off("save").on("save", function (b, e) {
                          var f = b.currentTarget,
                            g = e.submitValue,
                            h = a(f),
                            i = c.getData(),
                            j = h.parents("tr[data-index]").data("index"),
                            k = i[j],
                            l = k[d.field];
                          h.data("value", g), (k[d.field] = g), c.trigger("editable-save", d.field, k, j, l, h), c.initBody();
                        }),
                        f.off("shown").on("shown", function (b, e) {
                          var f = b.currentTarget,
                            g = a(f),
                            h = c.getData(),
                            i = g.parents("tr[data-index]").data("index"),
                            j = h[i];
                          c.trigger("editable-shown", d.field, j, g, e);
                        }),
                        f.off("hidden").on("hidden", function (b, e) {
                          var f = b.currentTarget,
                            g = a(f),
                            h = c.getData(),
                            i = g.parents("tr[data-index]").data("index"),
                            j = h[i];
                          c.trigger("editable-hidden", d.field, j, g, e);
                        });
                    }
                  }),
                  this.trigger("editable-init"));
            }
          }
        ]),
        d
      );
    })(a.BootstrapTable));
});
