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
    c = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          }
        }).a
      );
    }),
    u = {}.propertyIsEnumerable,
    a = Object.getOwnPropertyDescriptor,
    f = {
      f:
        a && !u.call({ 1: 2 }, 1)
          ? function (t) {
              var e = a(this, t);
              return !!e && e.enumerable;
            }
          : u
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
    d = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    b = function (t) {
      return h(d(t));
    },
    v = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    g = function (t, e) {
      if (!v(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !v((r = n.call(t)))) return r;
      if ("function" == typeof (n = t.valueOf) && !v((r = n.call(t)))) return r;
      if (!e && "function" == typeof (n = t.toString) && !v((r = n.call(t)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    m = {}.hasOwnProperty,
    w = function (t, e) {
      return m.call(t, e);
    },
    O = o.document,
    j = v(O) && v(O.createElement),
    S = function (t) {
      return j ? O.createElement(t) : {};
    },
    T =
      !c &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(S("div"), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    C = Object.getOwnPropertyDescriptor,
    P = {
      f: c
        ? C
        : function (t, e) {
            if (((t = b(t)), (e = g(e, !0)), T))
              try {
                return C(t, e);
              } catch (t) {}
            if (w(t, e)) return l(!f.f.call(t, e), t[e]);
          }
    },
    E = function (t) {
      if (!v(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    x = Object.defineProperty,
    R = {
      f: c
        ? x
        : function (t, e, n) {
            if ((E(t), (e = g(e, !0)), E(n), T))
              try {
                return x(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          }
    },
    _ = c
      ? function (t, e, n) {
          return R.f(t, e, l(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    A = function (t, e) {
      try {
        _(o, t, e);
      } catch (n) {
        o[t] = e;
      }
      return e;
    },
    k = "__core-js_shared__",
    F = o[k] || A(k, {}),
    M = Function.toString;
  "function" != typeof F.inspectSource &&
    (F.inspectSource = function (t) {
      return M.call(t);
    });
  var B,
    I,
    N,
    W = F.inspectSource,
    D = o.WeakMap,
    q = "function" == typeof D && /native code/.test(W(D)),
    L = n(function (t) {
      (t.exports = function (t, e) {
        return F[t] || (F[t] = void 0 !== e ? e : {});
      })("versions", []).push({ version: "3.6.0", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    z = 0,
    $ = Math.random(),
    H = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++z + $).toString(36);
    },
    G = L("keys"),
    V = function (t) {
      return G[t] || (G[t] = H(t));
    },
    K = {},
    Q = o.WeakMap;
  if (q) {
    var X = new Q(),
      Y = X.get,
      J = X.has,
      U = X.set;
    (B = function (t, e) {
      return U.call(X, t, e), e;
    }),
      (I = function (t) {
        return Y.call(X, t) || {};
      }),
      (N = function (t) {
        return J.call(X, t);
      });
  } else {
    var Z = V("state");
    (K[Z] = !0),
      (B = function (t, e) {
        return _(t, Z, e), e;
      }),
      (I = function (t) {
        return w(t, Z) ? t[Z] : {};
      }),
      (N = function (t) {
        return w(t, Z);
      });
  }
  var tt,
    et,
    nt = {
      set: B,
      get: I,
      has: N,
      enforce: function (t) {
        return N(t) ? I(t) : B(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!v(e) || (n = I(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
    rt = n(function (t) {
      var e = nt.get,
        n = nt.enforce,
        r = String(String).split("String");
      (t.exports = function (t, e, i, c) {
        var u = !!c && !!c.unsafe,
          a = !!c && !!c.enumerable,
          f = !!c && !!c.noTargetGet;
        "function" == typeof i && ("string" != typeof e || w(i, "name") || _(i, "name", e), (n(i).source = r.join("string" == typeof e ? e : ""))), t !== o ? (u ? !f && t[e] && (a = !0) : delete t[e], a ? (t[e] = i) : _(t, e, i)) : a ? (t[e] = i) : A(e, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || W(this);
      });
    }),
    ot = o,
    it = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    ct = function (t, e) {
      return arguments.length < 2 ? it(ot[t]) || it(o[t]) : (ot[t] && ot[t][e]) || (o[t] && o[t][e]);
    },
    ut = Math.ceil,
    at = Math.floor,
    ft = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? at : ut)(t);
    },
    lt = Math.min,
    st = function (t) {
      return t > 0 ? lt(ft(t), 9007199254740991) : 0;
    },
    pt = Math.max,
    yt = Math.min,
    ht = function (t) {
      return function (e, n, r) {
        var o,
          i = b(e),
          c = st(i.length),
          u = (function (t, e) {
            var n = ft(t);
            return n < 0 ? pt(n + e, 0) : yt(n, e);
          })(r, c);
        if (t && n != n) {
          for (; c > u; ) if ((o = i[u++]) != o) return !0;
        } else for (; c > u; u++) if ((t || u in i) && i[u] === n) return t || u || 0;
        return !t && -1;
      };
    },
    dt = { includes: ht(!0), indexOf: ht(!1) }.indexOf,
    bt = function (t, e) {
      var n,
        r = b(t),
        o = 0,
        i = [];
      for (n in r) !w(K, n) && w(r, n) && i.push(n);
      for (; e.length > o; ) w(r, (n = e[o++])) && (~dt(i, n) || i.push(n));
      return i;
    },
    vt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    gt = vt.concat("length", "prototype"),
    mt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return bt(t, gt);
        }
    },
    wt = { f: Object.getOwnPropertySymbols },
    Ot =
      ct("Reflect", "ownKeys") ||
      function (t) {
        var e = mt.f(E(t)),
          n = wt.f;
        return n ? e.concat(n(t)) : e;
      },
    jt = function (t, e) {
      for (var n = Ot(e), r = R.f, o = P.f, i = 0; i < n.length; i++) {
        var c = n[i];
        w(t, c) || r(t, c, o(e, c));
      }
    },
    St = /#|\.prototype\./,
    Tt = function (t, e) {
      var n = Pt[Ct(t)];
      return n == xt || (n != Et && ("function" == typeof e ? i(e) : !!e));
    },
    Ct = (Tt.normalize = function (t) {
      return String(t).replace(St, ".").toLowerCase();
    }),
    Pt = (Tt.data = {}),
    Et = (Tt.NATIVE = "N"),
    xt = (Tt.POLYFILL = "P"),
    Rt = Tt,
    _t = P.f,
    At = function (t, e) {
      var n,
        r,
        i,
        c,
        u,
        a = t.target,
        f = t.global,
        l = t.stat;
      if ((n = f ? o : l ? o[a] || A(a, {}) : (o[a] || {}).prototype))
        for (r in e) {
          if (((c = e[r]), (i = t.noTargetGet ? (u = _t(n, r)) && u.value : n[r]), !Rt(f ? r : a + (l ? "." : "#") + r, t.forced) && void 0 !== i)) {
            if (typeof c == typeof i) continue;
            jt(c, i);
          }
          (t.sham || (i && i.sham)) && _(c, "sham", !0), rt(n, r, c, t);
        }
    },
    kt =
      Array.isArray ||
      function (t) {
        return "Array" == p(t);
      },
    Ft = function (t) {
      return Object(d(t));
    },
    Mt = function (t, e, n) {
      var r = g(e);
      r in t ? R.f(t, r, l(0, n)) : (t[r] = n);
    },
    Bt =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      }),
    It = Bt && !Symbol.sham && "symbol" == typeof Symbol(),
    Nt = L("wks"),
    Wt = o.Symbol,
    Dt = It ? Wt : H,
    qt = function (t) {
      return w(Nt, t) || (Bt && w(Wt, t) ? (Nt[t] = Wt[t]) : (Nt[t] = Dt("Symbol." + t))), Nt[t];
    },
    Lt = qt("species"),
    zt = function (t, e) {
      var n;
      return kt(t) && ("function" != typeof (n = t.constructor) || (n !== Array && !kt(n.prototype)) ? v(n) && null === (n = n[Lt]) && (n = void 0) : (n = void 0)), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
    },
    $t = ct("navigator", "userAgent") || "",
    Ht = o.process,
    Gt = Ht && Ht.versions,
    Vt = Gt && Gt.v8;
  Vt ? (et = (tt = Vt.split("."))[0] + tt[1]) : $t && (!(tt = $t.match(/Edge\/(\d+)/)) || tt[1] >= 74) && (tt = $t.match(/Chrome\/(\d+)/)) && (et = tt[1]);
  var Kt,
    Qt = et && +et,
    Xt = qt("species"),
    Yt = qt("isConcatSpreadable"),
    Jt = 9007199254740991,
    Ut = "Maximum allowed index exceeded",
    Zt =
      Qt >= 51 ||
      !i(function () {
        var t = [];
        return (t[Yt] = !1), t.concat()[0] !== t;
      }),
    te =
      ((Kt = "concat"),
      Qt >= 51 ||
        !i(function () {
          var t = [];
          return (
            ((t.constructor = {})[Xt] = function () {
              return { foo: 1 };
            }),
            1 !== t[Kt](Boolean).foo
          );
        })),
    ee = function (t) {
      if (!v(t)) return !1;
      var e = t[Yt];
      return void 0 !== e ? !!e : kt(t);
    };
  At(
    { target: "Array", proto: !0, forced: !Zt || !te },
    {
      concat: function (t) {
        var e,
          n,
          r,
          o,
          i,
          c = Ft(this),
          u = zt(c, 0),
          a = 0;
        for (e = -1, r = arguments.length; e < r; e++)
          if (ee((i = -1 === e ? c : arguments[e]))) {
            if (a + (o = st(i.length)) > Jt) throw TypeError(Ut);
            for (n = 0; n < o; n++, a++) n in i && Mt(u, a, i[n]);
          } else {
            if (a >= Jt) throw TypeError(Ut);
            Mt(u, a++, i);
          }
        return (u.length = a), u;
      }
    }
  );
  var ne,
    re = function (t, e, n) {
      if (
        ((function (t) {
          if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        })(t),
        void 0 === e)
      )
        return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    oe = [].push,
    ie = function (t) {
      var e = 1 == t,
        n = 2 == t,
        r = 3 == t,
        o = 4 == t,
        i = 6 == t,
        c = 5 == t || i;
      return function (u, a, f, l) {
        for (var s, p, y = Ft(u), d = h(y), b = re(a, f, 3), v = st(d.length), g = 0, m = l || zt, w = e ? m(u, v) : n ? m(u, 0) : void 0; v > g; g++)
          if ((c || g in d) && ((p = b((s = d[g]), g, y)), t))
            if (e) w[g] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return s;
                case 6:
                  return g;
                case 2:
                  oe.call(w, s);
              }
            else if (o) return !1;
        return i ? -1 : r || o ? o : w;
      };
    },
    ce = { forEach: ie(0), map: ie(1), filter: ie(2), some: ie(3), every: ie(4), find: ie(5), findIndex: ie(6) },
    ue =
      Object.keys ||
      function (t) {
        return bt(t, vt);
      },
    ae = c
      ? Object.defineProperties
      : function (t, e) {
          E(t);
          for (var n, r = ue(e), o = r.length, i = 0; o > i; ) R.f(t, (n = r[i++]), e[n]);
          return t;
        },
    fe = ct("document", "documentElement"),
    le = V("IE_PROTO"),
    se = function () {},
    pe = function (t) {
      return "<script>" + t + "</" + "script>";
    },
    ye = function () {
      try {
        ne = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      ye = ne
        ? (function (t) {
            t.write(pe("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(ne)
        : (((e = S("iframe")).style.display = "none"), fe.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(pe("document.F=Object")), t.close(), t.F);
      for (var n = vt.length; n--; ) delete ye.prototype[vt[n]];
      return ye();
    };
  K[le] = !0;
  var he =
      Object.create ||
      function (t, e) {
        var n;
        return null !== t ? ((se.prototype = E(t)), (n = new se()), (se.prototype = null), (n[le] = t)) : (n = ye()), void 0 === e ? n : ae(n, e);
      },
    de = qt("unscopables"),
    be = Array.prototype;
  null == be[de] && R.f(be, de, { configurable: !0, value: he(null) });
  var ve,
    ge = ce.find,
    me = "find",
    we = !0;
  me in [] &&
    Array(1).find(function () {
      we = !1;
    }),
    At(
      { target: "Array", proto: !0, forced: we },
      {
        find: function (t) {
          return ge(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
    (ve = me),
    (be[de][ve] = !0);
  var Oe = [].join,
    je = h != Object,
    Se = (function (t, e) {
      var n = [][t];
      return (
        !n ||
        !i(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    })("join", ",");
  At(
    { target: "Array", proto: !0, forced: je || Se },
    {
      join: function (t) {
        return Oe.call(b(this), void 0 === t ? "," : t);
      }
    }
  );
  var Te = Object.assign,
    Ce = Object.defineProperty,
    Pe =
      !Te ||
      i(function () {
        if (
          c &&
          1 !==
            Te(
              { b: 1 },
              Te(
                Ce({}, "a", {
                  enumerable: !0,
                  get: function () {
                    Ce(this, "b", { value: 3, enumerable: !1 });
                  }
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (t[n] = 7),
          r.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != Te({}, t)[n] || ue(Te({}, e)).join("") != r
        );
      })
        ? function (t, e) {
            for (var n = Ft(t), r = arguments.length, o = 1, i = wt.f, u = f.f; r > o; ) for (var a, l = h(arguments[o++]), s = i ? ue(l).concat(i(l)) : ue(l), p = s.length, y = 0; p > y; ) (a = s[y++]), (c && !u.call(l, a)) || (n[a] = l[a]);
            return n;
          }
        : Te;
  function Ee(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function xe(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }
  function Re(t) {
    return (Re = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function _e(t, e) {
    return (_e =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function Ae(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        })(t)
      : e;
  }
  function ke(t, e, n) {
    return (ke =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var r = (function (t, e) {
              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Re(t)); );
              return t;
            })(t, e);
            if (r) {
              var o = Object.getOwnPropertyDescriptor(r, e);
              return o.get ? o.get.call(n) : o.value;
            }
          })(t, e, n || t);
  }
  At({ target: "Object", stat: !0, forced: Object.assign !== Pe }, { assign: Pe });
  var Fe = t.fn.bootstrapTable.utils;
  t.extend(t.fn.bootstrapTable.locales, {
    formatCopyRows: function () {
      return "Copy Rows";
    }
  }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales),
    t.extend(t.fn.bootstrapTable.defaults.icons, { copy: { bootstrap3: "glyphicon-copy icon-pencil", materialize: "content_copy", "bootstrap-table": "icon-copy" }[t.fn.bootstrapTable.theme] || "fa-copy" });
  t.extend(t.fn.bootstrapTable.defaults, { showCopyRows: !1, copyWithHidden: !1, copyDelimiter: ", ", copyNewline: "\n" }),
    t.fn.bootstrapTable.methods.push("copyColumnsToClipboard"),
    (t.BootstrapTable = (function (e) {
      function n() {
        return Ee(this, n), Ae(this, Re(n).apply(this, arguments));
      }
      var r, o, i;
      return (
        (function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _e(t, e);
        })(n, e),
        (r = n),
        (o = [
          {
            key: "initToolbar",
            value: function () {
              var t;
              this.options.showCopyRows && this.header.stateField && (this.buttons = Object.assign(this.buttons, { copyRows: { text: this.options.formatCopyRows(), icon: this.options.icons.copy, event: this.copyColumnsToClipboard, attributes: { "aria-label": this.options.formatCopyRows(), title: this.options.formatCopyRows() } } }));
              for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
              (t = ke(Re(n.prototype), "initToolbar", this)).call.apply(t, [this].concat(r)), (this.$copyButton = this.$toolbar.find('>.columns [name="copyRows"]')), this.options.showCopyRows && this.header.stateField && this.updateCopyButton();
            }
          },
          {
            key: "copyColumnsToClipboard",
            value: function () {
              var e = this,
                n = [];
              t.each(this.getSelections(), function (r, o) {
                var i = [];
                t.each(e.options.columns[0], function (t, n) {
                  n.field !== e.header.stateField && (!e.options.copyWithHidden || (e.options.copyWithHidden && n.visible)) && null !== o[n.field] && i.push(Fe.calculateObjectValue(n, e.header.formatters[t], [o[n.field], o, r], o[n.field]));
                }),
                  n.push(i.join(e.options.copyDelimiter));
              }),
                (function (e) {
                  var n = document.createElement("textarea");
                  t(n).html(e), document.body.appendChild(n), n.select();
                  try {
                    document.execCommand("copy");
                  } catch (t) {
                    console.warn("Oops, unable to copy");
                  }
                  t(n).remove();
                })(n.join(this.options.copyNewline));
            }
          },
          {
            key: "updateSelected",
            value: function () {
              ke(Re(n.prototype), "updateSelected", this).call(this), this.updateCopyButton();
            }
          },
          {
            key: "updateCopyButton",
            value: function () {
              this.options.showCopyRows && this.header.stateField && this.$copyButton && this.$copyButton.prop("disabled", !this.getSelections().length);
            }
          }
        ]) && xe(r.prototype, o),
        i && xe(r, i),
        n
      );
    })(t.BootstrapTable));
});
