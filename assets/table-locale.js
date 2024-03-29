/**
 * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
 *
 * @version v1.18.1
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], n) : n((t = t || self).jQuery);
})(this, function (t) {
  "use strict";
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function o(t, n) {
    return t((n = { exports: {} }), n.exports), n.exports;
  }
  var r = function (t) {
      return t && t.Math == Math && t;
    },
    e = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")(),
    a = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    i = !a(function () {
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
              var n = u(this, t);
              return !!n && n.enumerable;
            }
          : c
    },
    l = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    },
    s = {}.toString,
    m = function (t) {
      return s.call(t).slice(8, -1);
    },
    g = "".split,
    h = a(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == m(t) ? g.call(t, "") : Object(t);
        }
      : Object,
    d = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    w = function (t) {
      return h(d(t));
    },
    p = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    S = function (t, n) {
      if (!p(t)) return t;
      var o, r;
      if (n && "function" == typeof (o = t.toString) && !p((r = o.call(t)))) return r;
      if ("function" == typeof (o = t.valueOf) && !p((r = o.call(t)))) return r;
      if (!n && "function" == typeof (o = t.toString) && !p((r = o.call(t)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    P = {}.hasOwnProperty,
    T = function (t, n) {
      return P.call(t, n);
    },
    R = e.document,
    C = p(R) && p(R.createElement),
    b =
      !i &&
      !a(function () {
        return (
          7 !=
          Object.defineProperty(((t = "div"), C ? R.createElement(t) : {}), "a", {
            get: function () {
              return 7;
            }
          }).a
        );
        var t;
      }),
    v = Object.getOwnPropertyDescriptor,
    A = {
      f: i
        ? v
        : function (t, n) {
            if (((t = w(t)), (n = S(n, !0)), b))
              try {
                return v(t, n);
              } catch (t) {}
            if (T(t, n)) return l(!f.f.call(t, n), t[n]);
          }
    },
    x = function (t) {
      if (!p(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    F = Object.defineProperty,
    y = {
      f: i
        ? F
        : function (t, n, o) {
            if ((x(t), (n = S(n, !0)), x(o), b))
              try {
                return F(t, n, o);
              } catch (t) {}
            if ("get" in o || "set" in o) throw TypeError("Accessors not supported");
            return "value" in o && (t[n] = o.value), t;
          }
    },
    k = i
      ? function (t, n, o) {
          return y.f(t, n, l(1, o));
        }
      : function (t, n, o) {
          return (t[n] = o), t;
        },
    H = function (t, n) {
      try {
        k(e, t, n);
      } catch (o) {
        e[t] = n;
      }
      return n;
    },
    O = "__core-js_shared__",
    M = e[O] || H(O, {}),
    E = Function.toString;
  "function" != typeof M.inspectSource &&
    (M.inspectSource = function (t) {
      return E.call(t);
    });
  var N,
    D,
    z,
    L,
    j = M.inspectSource,
    B = e.WeakMap,
    U = "function" == typeof B && /native code/.test(j(B)),
    J = o(function (t) {
      (t.exports = function (t, n) {
        return M[t] || (M[t] = void 0 !== n ? n : {});
      })("versions", []).push({ version: "3.6.0", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }),
    G = 0,
    V = Math.random(),
    Z = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++G + V).toString(36);
    },
    I = J("keys"),
    q = {},
    K = e.WeakMap;
  if (U) {
    var W = new K(),
      Y = W.get,
      _ = W.has,
      Q = W.set;
    (N = function (t, n) {
      return Q.call(W, t, n), n;
    }),
      (D = function (t) {
        return Y.call(W, t) || {};
      }),
      (z = function (t) {
        return _.call(W, t);
      });
  } else {
    var X = I[(L = "state")] || (I[L] = Z(L));
    (q[X] = !0),
      (N = function (t, n) {
        return k(t, X, n), n;
      }),
      (D = function (t) {
        return T(t, X) ? t[X] : {};
      }),
      (z = function (t) {
        return T(t, X);
      });
  }
  var $,
    tt,
    nt = {
      set: N,
      get: D,
      has: z,
      enforce: function (t) {
        return z(t) ? D(t) : N(t, {});
      },
      getterFor: function (t) {
        return function (n) {
          var o;
          if (!p(n) || (o = D(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return o;
        };
      }
    },
    ot = o(function (t) {
      var n = nt.get,
        o = nt.enforce,
        r = String(String).split("String");
      (t.exports = function (t, n, a, i) {
        var c = !!i && !!i.unsafe,
          u = !!i && !!i.enumerable,
          f = !!i && !!i.noTargetGet;
        "function" == typeof a && ("string" != typeof n || T(a, "name") || k(a, "name", n), (o(a).source = r.join("string" == typeof n ? n : ""))), t !== e ? (c ? !f && t[n] && (u = !0) : delete t[n], u ? (t[n] = a) : k(t, n, a)) : u ? (t[n] = a) : H(n, a);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && n(this).source) || j(this);
      });
    }),
    rt = e,
    et = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    at = function (t, n) {
      return arguments.length < 2 ? et(rt[t]) || et(e[t]) : (rt[t] && rt[t][n]) || (e[t] && e[t][n]);
    },
    it = Math.ceil,
    ct = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ct : it)(t);
    },
    ft = Math.min,
    lt = function (t) {
      return t > 0 ? ft(ut(t), 9007199254740991) : 0;
    },
    st = Math.max,
    mt = Math.min,
    gt = function (t) {
      return function (n, o, r) {
        var e,
          a = w(n),
          i = lt(a.length),
          c = (function (t, n) {
            var o = ut(t);
            return o < 0 ? st(o + n, 0) : mt(o, n);
          })(r, i);
        if (t && o != o) {
          for (; i > c; ) if ((e = a[c++]) != e) return !0;
        } else for (; i > c; c++) if ((t || c in a) && a[c] === o) return t || c || 0;
        return !t && -1;
      };
    },
    ht = { includes: gt(!0), indexOf: gt(!1) }.indexOf,
    dt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype"),
    wt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return (function (t, n) {
            var o,
              r = w(t),
              e = 0,
              a = [];
            for (o in r) !T(q, o) && T(r, o) && a.push(o);
            for (; n.length > e; ) T(r, (o = n[e++])) && (~ht(a, o) || a.push(o));
            return a;
          })(t, dt);
        }
    },
    pt = { f: Object.getOwnPropertySymbols },
    St =
      at("Reflect", "ownKeys") ||
      function (t) {
        var n = wt.f(x(t)),
          o = pt.f;
        return o ? n.concat(o(t)) : n;
      },
    Pt = function (t, n) {
      for (var o = St(n), r = y.f, e = A.f, a = 0; a < o.length; a++) {
        var i = o[a];
        T(t, i) || r(t, i, e(n, i));
      }
    },
    Tt = /#|\.prototype\./,
    Rt = function (t, n) {
      var o = bt[Ct(t)];
      return o == At || (o != vt && ("function" == typeof n ? a(n) : !!n));
    },
    Ct = (Rt.normalize = function (t) {
      return String(t).replace(Tt, ".").toLowerCase();
    }),
    bt = (Rt.data = {}),
    vt = (Rt.NATIVE = "N"),
    At = (Rt.POLYFILL = "P"),
    xt = Rt,
    Ft = A.f,
    yt =
      Array.isArray ||
      function (t) {
        return "Array" == m(t);
      },
    kt = function (t) {
      return Object(d(t));
    },
    Ht = function (t, n, o) {
      var r = S(n);
      r in t ? y.f(t, r, l(0, o)) : (t[r] = o);
    },
    Ot =
      !!Object.getOwnPropertySymbols &&
      !a(function () {
        return !String(Symbol());
      }),
    Mt = Ot && !Symbol.sham && "symbol" == typeof Symbol(),
    Et = J("wks"),
    Nt = e.Symbol,
    Dt = Mt ? Nt : Z,
    zt = function (t) {
      return T(Et, t) || (Ot && T(Nt, t) ? (Et[t] = Nt[t]) : (Et[t] = Dt("Symbol." + t))), Et[t];
    },
    Lt = zt("species"),
    jt = function (t, n) {
      var o;
      return yt(t) && ("function" != typeof (o = t.constructor) || (o !== Array && !yt(o.prototype)) ? p(o) && null === (o = o[Lt]) && (o = void 0) : (o = void 0)), new (void 0 === o ? Array : o)(0 === n ? 0 : n);
    },
    Bt = at("navigator", "userAgent") || "",
    Ut = e.process,
    Jt = Ut && Ut.versions,
    Gt = Jt && Jt.v8;
  Gt ? (tt = ($ = Gt.split("."))[0] + $[1]) : Bt && (!($ = Bt.match(/Edge\/(\d+)/)) || $[1] >= 74) && ($ = Bt.match(/Chrome\/(\d+)/)) && (tt = $[1]);
  var Vt,
    Zt = tt && +tt,
    It = zt("species"),
    qt = zt("isConcatSpreadable"),
    Kt = 9007199254740991,
    Wt = "Maximum allowed index exceeded",
    Yt =
      Zt >= 51 ||
      !a(function () {
        var t = [];
        return (t[qt] = !1), t.concat()[0] !== t;
      }),
    _t =
      ((Vt = "concat"),
      Zt >= 51 ||
        !a(function () {
          var t = [];
          return (
            ((t.constructor = {})[It] = function () {
              return { foo: 1 };
            }),
            1 !== t[Vt](Boolean).foo
          );
        })),
    Qt = function (t) {
      if (!p(t)) return !1;
      var n = t[qt];
      return void 0 !== n ? !!n : yt(t);
    };
  !(function (t, n) {
    var o,
      r,
      a,
      i,
      c,
      u = t.target,
      f = t.global,
      l = t.stat;
    if ((o = f ? e : l ? e[u] || H(u, {}) : (e[u] || {}).prototype))
      for (r in n) {
        if (((i = n[r]), (a = t.noTargetGet ? (c = Ft(o, r)) && c.value : o[r]), !xt(f ? r : u + (l ? "." : "#") + r, t.forced) && void 0 !== a)) {
          if (typeof i == typeof a) continue;
          Pt(i, a);
        }
        (t.sham || (a && a.sham)) && k(i, "sham", !0), ot(o, r, i, t);
      }
  })(
    { target: "Array", proto: !0, forced: !Yt || !_t },
    {
      concat: function (t) {
        var n,
          o,
          r,
          e,
          a,
          i = kt(this),
          c = jt(i, 0),
          u = 0;
        for (n = -1, r = arguments.length; n < r; n++)
          if (Qt((a = -1 === n ? i : arguments[n]))) {
            if (u + (e = lt(a.length)) > Kt) throw TypeError(Wt);
            for (o = 0; o < e; o++, u++) o in a && Ht(c, u, a[o]);
          } else {
            if (u >= Kt) throw TypeError(Wt);
            Ht(c, u++, a);
          }
        return (c.length = u), c;
      }
    }
  ),
    (t.fn.bootstrapTable.locales["af-ZA"] = t.fn.bootstrapTable.locales.af = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Besig om te laai, wag asseblief";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rekords per bladsy");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Resultate ".concat(t, " tot ").concat(n, " van ").concat(o, " rye (filtered from ").concat(r, " total rows)") : "Resultate ".concat(t, " tot ").concat(n, " van ").concat(o, " rye");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Soek";
      },
      formatNoMatches: function () {
        return "Geen rekords gevind nie";
      },
      formatPaginationSwitch: function () {
        return "Wys/verberg bladsy nummering";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Herlaai";
      },
      formatToggle: function () {
        return "Wissel";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Kolomme";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["af-ZA"]),
    (t.fn.bootstrapTable.locales["ar-SA"] = t.fn.bootstrapTable.locales.ar = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "جاري التحميل, يرجى الإنتظار";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " سجل لكل صفحة");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "الظاهر ".concat(t, " إلى ").concat(n, " من ").concat(o, " سجل ").concat(r, " total rows)") : "الظاهر ".concat(t, " إلى ").concat(n, " من ").concat(o, " سجل");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "بحث";
      },
      formatNoMatches: function () {
        return "لا توجد نتائج مطابقة للبحث";
      },
      formatPaginationSwitch: function () {
        return "إخفاءإظهار ترقيم الصفحات";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "تحديث";
      },
      formatToggle: function () {
        return "تغيير";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "أعمدة";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ar-SA"]),
    (t.fn.bootstrapTable.locales["bg-BG"] = t.fn.bootstrapTable.locales.bg = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Зареждане, моля изчакайте";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " реда на страница");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Показани редове от ".concat(t, " до ").concat(n, " от ").concat(o, " реда (филтрирани от общо ").concat(r, " реда)") : "Показани редове от ".concat(t, " до ").concat(n, " от общо ").concat(o, " реда");
      },
      formatSRPaginationPreText: function () {
        return "предишна страница";
      },
      formatSRPaginationPageText: function (t) {
        return "до страница ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "следваща страница";
      },
      formatDetailPagination: function (t) {
        return "Показани ".concat(t, " реда");
      },
      formatClearSearch: function () {
        return "Изчистване на търсенето";
      },
      formatSearch: function () {
        return "Търсене";
      },
      formatNoMatches: function () {
        return "Не са намерени съвпадащи записи";
      },
      formatPaginationSwitch: function () {
        return "Скриване/Показване на странициране";
      },
      formatPaginationSwitchDown: function () {
        return "Показване на странициране";
      },
      formatPaginationSwitchUp: function () {
        return "Скриване на странициране";
      },
      formatRefresh: function () {
        return "Обновяване";
      },
      formatToggle: function () {
        return "Превключване";
      },
      formatToggleOn: function () {
        return "Показване на изглед карта";
      },
      formatToggleOff: function () {
        return "Скриване на изглед карта";
      },
      formatColumns: function () {
        return "Колони";
      },
      formatColumnsToggleAll: function () {
        return "Превключване на всички";
      },
      formatFullscreen: function () {
        return "Цял екран";
      },
      formatAllRows: function () {
        return "Всички";
      },
      formatAutoRefresh: function () {
        return "Автоматично обновяване";
      },
      formatExport: function () {
        return "Експорт на данни";
      },
      formatJumpTo: function () {
        return "ОТИДИ";
      },
      formatAdvancedSearch: function () {
        return "Разширено търсене";
      },
      formatAdvancedCloseButton: function () {
        return "Затваряне";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["bg-BG"]),
    (t.fn.bootstrapTable.locales["ca-ES"] = t.fn.bootstrapTable.locales.ca = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Espereu, si us plau";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " resultats per pàgina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrant de ".concat(t, " fins ").concat(n, " - total ").concat(o, " resultats (filtered from ").concat(r, " total rows)") : "Mostrant de ".concat(t, " fins ").concat(n, " - total ").concat(o, " resultats");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Cerca";
      },
      formatNoMatches: function () {
        return "No s'han trobat resultats";
      },
      formatPaginationSwitch: function () {
        return "Amaga/Mostra paginació";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Refresca";
      },
      formatToggle: function () {
        return "Alterna formatació";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columnes";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Tots";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ca-ES"]),
    (t.fn.bootstrapTable.locales["cs-CZ"] = t.fn.bootstrapTable.locales.cs = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Čekejte, prosím";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " položek na stránku");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Zobrazena ".concat(t, ". - ").concat(n, " . položka z celkových ").concat(o, " (filtered from ").concat(r, " total rows)") : "Zobrazena ".concat(t, ". - ").concat(n, " . položka z celkových ").concat(o);
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Vyhledávání";
      },
      formatNoMatches: function () {
        return "Nenalezena žádná vyhovující položka";
      },
      formatPaginationSwitch: function () {
        return "Skrýt/Zobrazit stránkování";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Aktualizovat";
      },
      formatToggle: function () {
        return "Přepni";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Sloupce";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Vše";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["cs-CZ"]),
    (t.fn.bootstrapTable.locales["da-DK"] = t.fn.bootstrapTable.locales.da = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Indlæser, vent venligst";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " poster pr side");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o
          ? "Viser "
              .concat(t, " til ")
              .concat(n, " af ")
              .concat(o, " række")
              .concat(o > 1 ? "r" : "", " (filtered from ")
              .concat(r, " total rows)")
          : "Viser "
              .concat(t, " til ")
              .concat(n, " af ")
              .concat(o, " række")
              .concat(o > 1 ? "r" : "");
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
        return "Viser ".concat(t, " række").concat(t > 1 ? "r" : "");
      },
      formatClearSearch: function () {
        return "Ryd filtre";
      },
      formatSearch: function () {
        return "Søg";
      },
      formatNoMatches: function () {
        return "Ingen poster fundet";
      },
      formatPaginationSwitch: function () {
        return "Skjul/vis nummerering";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Opdater";
      },
      formatToggle: function () {
        return "Skift";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Kolonner";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Alle";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Eksporter";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["da-DK"]),
    (t.fn.bootstrapTable.locales["de-DE"] = t.fn.bootstrapTable.locales.de = {
      formatCopyRows: function () {
        return "Zeilen kopieren";
      },
      formatPrint: function () {
        return "Drucken";
      },
      formatLoadingMessage: function () {
        return "Lade, bitte warten";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " Zeilen pro Seite.");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o
          ? "Zeige Zeile "
              .concat(t, " bis ")
              .concat(n, " von ")
              .concat(o, " Zeile")
              .concat(o > 1 ? "n" : "", " (Gefiltert von ")
              .concat(r, " Zeile")
              .concat(r > 1 ? "n" : "", ")")
          : "Zeige Zeile "
              .concat(t, " bis ")
              .concat(n, " von ")
              .concat(o, " Zeile")
              .concat(o > 1 ? "n" : "", ".");
      },
      formatSRPaginationPreText: function () {
        return "Vorherige Seite";
      },
      formatSRPaginationPageText: function (t) {
        return "Zu Seite ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "Nächste Seite";
      },
      formatDetailPagination: function (t) {
        return "Zeige ".concat(t, " Zeile").concat(t > 1 ? "n" : "", ".");
      },
      formatClearSearch: function () {
        return "Lösche Filter";
      },
      formatSearch: function () {
        return "Suchen";
      },
      formatNoMatches: function () {
        return "Keine passenden Ergebnisse gefunden";
      },
      formatPaginationSwitch: function () {
        return "Verstecke/Zeige Nummerierung";
      },
      formatPaginationSwitchDown: function () {
        return "Zeige Nummerierung";
      },
      formatPaginationSwitchUp: function () {
        return "Verstecke Nummerierung";
      },
      formatRefresh: function () {
        return "Neu laden";
      },
      formatToggle: function () {
        return "Umschalten";
      },
      formatToggleOn: function () {
        return "Normale Ansicht";
      },
      formatToggleOff: function () {
        return "Kartenansicht";
      },
      formatColumns: function () {
        return "Spalten";
      },
      formatColumnsToggleAll: function () {
        return "Alle umschalten";
      },
      formatFullscreen: function () {
        return "Vollbild";
      },
      formatAllRows: function () {
        return "Alle";
      },
      formatAutoRefresh: function () {
        return "Automatisches Neuladen";
      },
      formatExport: function () {
        return "Datenexport";
      },
      formatJumpTo: function () {
        return "Springen";
      },
      formatAdvancedSearch: function () {
        return "Erweiterte Suche";
      },
      formatAdvancedCloseButton: function () {
        return "Schließen";
      },
      formatFilterControlSwitch: function () {
        return "Verstecke/Zeige Filter";
      },
      formatFilterControlSwitchHide: function () {
        return "Verstecke Filter";
      },
      formatFilterControlSwitchShow: function () {
        return "Zeige Filter";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["de-DE"]),
    (t.fn.bootstrapTable.locales["el-GR"] = t.fn.bootstrapTable.locales.el = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Φορτώνει, παρακαλώ περιμένετε";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " αποτελέσματα ανά σελίδα");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Εμφανίζονται από την ".concat(t, " ως την ").concat(n, " από σύνολο ").concat(o, " σειρών (filtered from ").concat(r, " total rows)") : "Εμφανίζονται από την ".concat(t, " ως την ").concat(n, " από σύνολο ").concat(o, " σειρών");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Αναζητήστε";
      },
      formatNoMatches: function () {
        return "Δεν βρέθηκαν αποτελέσματα";
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
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["el-GR"]),
    (t.fn.bootstrapTable.locales["en-US"] = t.fn.bootstrapTable.locales.en = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Loading, please wait";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rows per page");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Showing ".concat(t, " to ").concat(n, " of ").concat(o, " rows (filtered from ").concat(r, " total rows)") : "Showing ".concat(t, " to ").concat(n, " of ").concat(o, " rows");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Search";
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
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["en-US"]),
    (t.fn.bootstrapTable.locales["es-AR"] = {
      formatCopyRows: function () {
        return "Copiar Filas";
      },
      formatPrint: function () {
        return "Imprimir";
      },
      formatLoadingMessage: function () {
        return "Cargando, espere por favor";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando desde ".concat(t, " a ").concat(n, " de ").concat(o, " filas (filtrado de ").concat(r, " columnas totales)") : "Mostrando desde ".concat(t, " a ").concat(n, " de ").concat(o, " filas");
      },
      formatSRPaginationPreText: function () {
        return "página anterior";
      },
      formatSRPaginationPageText: function (t) {
        return "a la página ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "siguiente página";
      },
      formatDetailPagination: function (t) {
        return "Mostrando ".concat(t, " columnas");
      },
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron registros";
      },
      formatPaginationSwitch: function () {
        return "Ocultar/Mostrar paginación";
      },
      formatPaginationSwitchDown: function () {
        return "Mostrar paginación";
      },
      formatPaginationSwitchUp: function () {
        return "Ocultar paginación";
      },
      formatRefresh: function () {
        return "Recargar";
      },
      formatToggle: function () {
        return "Cambiar";
      },
      formatToggleOn: function () {
        return "Mostrar vista de carta";
      },
      formatToggleOff: function () {
        return "Ocultar vista de carta";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Cambiar todo";
      },
      formatFullscreen: function () {
        return "Pantalla completa";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Recargar";
      },
      formatExport: function () {
        return "Exportar datos";
      },
      formatJumpTo: function () {
        return "Ir";
      },
      formatAdvancedSearch: function () {
        return "Búsqueda avanzada";
      },
      formatAdvancedCloseButton: function () {
        return "Cerrar";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-AR"]),
    (t.fn.bootstrapTable.locales["es-CL"] = {
      formatCopyRows: function () {
        return "Copiar Filas";
      },
      formatPrint: function () {
        return "Imprimir";
      },
      formatLoadingMessage: function () {
        return "Cargando, espere por favor";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " filas por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando ".concat(t, " a ").concat(n, " de ").concat(o, " filas (filtrado de ").concat(r, " filas totales)") : "Mostrando ".concat(t, " a ").concat(n, " de ").concat(o, " filas");
      },
      formatSRPaginationPreText: function () {
        return "página anterior";
      },
      formatSRPaginationPageText: function (t) {
        return "a la página ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "siguiente página";
      },
      formatDetailPagination: function (t) {
        return "Mostrando ".concat(t, " filas");
      },
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron registros";
      },
      formatPaginationSwitch: function () {
        return "Ocultar/Mostrar paginación";
      },
      formatPaginationSwitchDown: function () {
        return "Mostrar paginación";
      },
      formatPaginationSwitchUp: function () {
        return "Ocultar paginación";
      },
      formatRefresh: function () {
        return "Refrescar";
      },
      formatToggle: function () {
        return "Cambiar";
      },
      formatToggleOn: function () {
        return "Mostrar vista de carta";
      },
      formatToggleOff: function () {
        return "Ocultar vista de carta";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Cambiar todo";
      },
      formatFullscreen: function () {
        return "Pantalla completa";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Recargar";
      },
      formatExport: function () {
        return "Exportar datos";
      },
      formatJumpTo: function () {
        return "IR";
      },
      formatAdvancedSearch: function () {
        return "Búsqueda avanzada";
      },
      formatAdvancedCloseButton: function () {
        return "Cerrar";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-CL"]),
    (t.fn.bootstrapTable.locales["es-CR"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Cargando, por favor espere";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando de ".concat(t, " a ").concat(n, " registros de ").concat(o, " registros en total (filtered from ").concat(r, " total rows)") : "Mostrando de ".concat(t, " a ").concat(n, " registros de ").concat(o, " registros en total");
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
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron registros";
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
        return "Refrescar";
      },
      formatToggle: function () {
        return "Alternar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-CR"]),
    (t.fn.bootstrapTable.locales["es-ES"] = t.fn.bootstrapTable.locales.es = {
      formatCopyRows: function () {
        return "Copiar filas";
      },
      formatPrint: function () {
        return "Imprimir";
      },
      formatLoadingMessage: function () {
        return "Por favor espere";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " resultados por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando desde ".concat(t, " hasta ").concat(n, " - En total ").concat(o, " resultados (filtrado de ").concat(r, " filas totales)") : "Mostrando desde ".concat(t, " hasta ").concat(n, " - En total ").concat(o, " resultados");
      },
      formatSRPaginationPreText: function () {
        return "página anterior";
      },
      formatSRPaginationPageText: function (t) {
        return "a la página ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "siguiente página";
      },
      formatDetailPagination: function (t) {
        return "Mostrando ".concat(t, " filas");
      },
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron resultados";
      },
      formatPaginationSwitch: function () {
        return "Ocultar/Mostrar paginación";
      },
      formatPaginationSwitchDown: function () {
        return "Mostrar paginación";
      },
      formatPaginationSwitchUp: function () {
        return "Ocultar paginación";
      },
      formatRefresh: function () {
        return "Recargar";
      },
      formatToggle: function () {
        return "Ocultar/Mostrar";
      },
      formatToggleOn: function () {
        return "Mostrar vista de carta";
      },
      formatToggleOff: function () {
        return "Ocultar vista de carta";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Cambiar todo";
      },
      formatFullscreen: function () {
        return "Pantalla completa";
      },
      formatAllRows: function () {
        return "Todos";
      },
      formatAutoRefresh: function () {
        return "Auto Recargar";
      },
      formatExport: function () {
        return "Exportar los datos";
      },
      formatJumpTo: function () {
        return "IR";
      },
      formatAdvancedSearch: function () {
        return "Búsqueda avanzada";
      },
      formatAdvancedCloseButton: function () {
        return "Cerrar";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-ES"]),
    (t.fn.bootstrapTable.locales["es-MX"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Cargando, espere por favor";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando ".concat(t, " a ").concat(n, " de ").concat(o, " filas (filtered from ").concat(r, " total rows)") : "Mostrando ".concat(t, " a ").concat(n, " de ").concat(o, " filas");
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
        return "Mostrando ".concat(t, " filas");
      },
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron registros que coincidan";
      },
      formatPaginationSwitch: function () {
        return "Mostrar/ocultar paginación";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Actualizar";
      },
      formatToggle: function () {
        return "Cambiar vista";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Pantalla completa";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-MX"]),
    (t.fn.bootstrapTable.locales["es-NI"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Cargando, por favor espere";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Mostrando de ".concat(t, " a ").concat(n, " registros de ").concat(o, " registros en total (filtered from ").concat(r, " total rows)") : "Mostrando de ".concat(t, " a ").concat(n, " registros de ").concat(o, " registros en total");
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
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se encontraron registros";
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
        return "Refrescar";
      },
      formatToggle: function () {
        return "Alternar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-NI"]),
    (t.fn.bootstrapTable.locales["es-SP"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Cargando, por favor espera";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por p&#225;gina.");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "".concat(t, " - ").concat(n, " de ").concat(o, " registros (filtered from ").concat(r, " total rows)") : "".concat(t, " - ").concat(n, " de ").concat(o, " registros.");
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
      formatClearSearch: function () {
        return "Limpiar búsqueda";
      },
      formatSearch: function () {
        return "Buscar";
      },
      formatNoMatches: function () {
        return "No se han encontrado registros.";
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
        return "Actualizar";
      },
      formatToggle: function () {
        return "Alternar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Columnas";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Todo";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Mostrar controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Mostrar controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["es-SP"]),
    (t.fn.bootstrapTable.locales["et-EE"] = t.fn.bootstrapTable.locales.et = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Päring käib, palun oota";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rida lehe kohta");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Näitan tulemusi ".concat(t, " kuni ").concat(n, " - kokku ").concat(o, " tulemust (filtered from ").concat(r, " total rows)") : "Näitan tulemusi ".concat(t, " kuni ").concat(n, " - kokku ").concat(o, " tulemust");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Otsi";
      },
      formatNoMatches: function () {
        return "Päringu tingimustele ei vastanud ühtegi tulemust";
      },
      formatPaginationSwitch: function () {
        return "Näita/Peida lehtedeks jagamine";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Värskenda";
      },
      formatToggle: function () {
        return "Lülita";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Veerud";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Kõik";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["et-EE"]),
    (t.fn.bootstrapTable.locales["eu-EU"] = t.fn.bootstrapTable.locales.eu = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Itxaron mesedez";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " emaitza orriko.");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "".concat(o, " erregistroetatik ").concat(t, "etik ").concat(n, "erakoak erakusten (filtered from ").concat(r, " total rows)") : "".concat(o, " erregistroetatik ").concat(t, "etik ").concat(n, "erakoak erakusten.");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Bilatu";
      },
      formatNoMatches: function () {
        return "Ez da emaitzarik aurkitu";
      },
      formatPaginationSwitch: function () {
        return "Ezkutatu/Erakutsi orrikatzea";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Eguneratu";
      },
      formatToggle: function () {
        return "Ezkutatu/Erakutsi";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Zutabeak";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Guztiak";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["eu-EU"]),
    (t.fn.bootstrapTable.locales["fa-IR"] = t.fn.bootstrapTable.locales.fa = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "در حال بارگذاری, لطفا صبر کنید";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " رکورد در صفحه");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "نمایش ".concat(t, " تا ").concat(n, " از ").concat(o, " ردیف (filtered from ").concat(r, " total rows)") : "نمایش ".concat(t, " تا ").concat(n, " از ").concat(o, " ردیف");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "جستجو";
      },
      formatNoMatches: function () {
        return "رکوردی یافت نشد.";
      },
      formatPaginationSwitch: function () {
        return "نمایش/مخفی صفحه بندی";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "به روز رسانی";
      },
      formatToggle: function () {
        return "تغییر نمایش";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "سطر ها";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "همه";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fa-IR"]),
    (t.fn.bootstrapTable.locales["fi-FI"] = t.fn.bootstrapTable.locales.fi = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Ladataan, ole hyvä ja odota";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " riviä sivulla");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Näytetään rivit ".concat(t, " - ").concat(n, " / ").concat(o, " (filtered from ").concat(r, " total rows)") : "Näytetään rivit ".concat(t, " - ").concat(n, " / ").concat(o);
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
      formatClearSearch: function () {
        return "Poista suodattimet";
      },
      formatSearch: function () {
        return "Hae";
      },
      formatNoMatches: function () {
        return "Hakuehtoja vastaavia tuloksia ei löytynyt";
      },
      formatPaginationSwitch: function () {
        return "Näytä/Piilota sivutus";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Päivitä";
      },
      formatToggle: function () {
        return "Valitse";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Sarakkeet";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Kaikki";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Vie tiedot";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fi-FI"]),
    (t.fn.bootstrapTable.locales["fr-BE"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Chargement en cours";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " lignes par page");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes (filtrés à partir de ").concat(r, " lignes)") : "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes");
      },
      formatSRPaginationPreText: function () {
        return "page précédente";
      },
      formatSRPaginationPageText: function (t) {
        return "vers la page ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "page suivante";
      },
      formatDetailPagination: function (t) {
        return "Affiche ".concat(t, " lignes");
      },
      formatClearSearch: function () {
        return "Effacer la recherche";
      },
      formatSearch: function () {
        return "Recherche";
      },
      formatNoMatches: function () {
        return "Pas de lignes trouvés";
      },
      formatPaginationSwitch: function () {
        return "Cacher/Afficher pagination";
      },
      formatPaginationSwitchDown: function () {
        return "Afficher pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Cacher pagination";
      },
      formatRefresh: function () {
        return "Rafraichir";
      },
      formatToggle: function () {
        return "Basculer";
      },
      formatToggleOn: function () {
        return "Afficher vue carte";
      },
      formatToggleOff: function () {
        return "Cacher vue carte";
      },
      formatColumns: function () {
        return "Colonnes";
      },
      formatColumnsToggleAll: function () {
        return "Tout basculer";
      },
      formatFullscreen: function () {
        return "Plein écran";
      },
      formatAllRows: function () {
        return "Tout";
      },
      formatAutoRefresh: function () {
        return "Rafraîchissement automatique";
      },
      formatExport: function () {
        return "Exporter les données";
      },
      formatJumpTo: function () {
        return "Aller à";
      },
      formatAdvancedSearch: function () {
        return "Recherche avancée";
      },
      formatAdvancedCloseButton: function () {
        return "Fermer";
      },
      formatFilterControlSwitch: function () {
        return "Cacher/Afficher controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Cacher controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Afficher controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fr-BE"]),
    (t.fn.bootstrapTable.locales["fr-CH"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Chargement en cours";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " lignes par page");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes (filtrés à partir de ").concat(r, " lignes)") : "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes");
      },
      formatSRPaginationPreText: function () {
        return "page précédente";
      },
      formatSRPaginationPageText: function (t) {
        return "vers la page ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "page suivante";
      },
      formatDetailPagination: function (t) {
        return "Affiche ".concat(t, " lignes");
      },
      formatClearSearch: function () {
        return "Effacer la recherche";
      },
      formatSearch: function () {
        return "Recherche";
      },
      formatNoMatches: function () {
        return "Pas de lignes trouvés";
      },
      formatPaginationSwitch: function () {
        return "Cacher/Afficher pagination";
      },
      formatPaginationSwitchDown: function () {
        return "Afficher pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Cacher pagination";
      },
      formatRefresh: function () {
        return "Rafraichir";
      },
      formatToggle: function () {
        return "Basculer";
      },
      formatToggleOn: function () {
        return "Afficher vue carte";
      },
      formatToggleOff: function () {
        return "Cacher vue carte";
      },
      formatColumns: function () {
        return "Colonnes";
      },
      formatColumnsToggleAll: function () {
        return "Tout basculer";
      },
      formatFullscreen: function () {
        return "Plein écran";
      },
      formatAllRows: function () {
        return "Tout";
      },
      formatAutoRefresh: function () {
        return "Rafraîchissement automatique";
      },
      formatExport: function () {
        return "Exporter les données";
      },
      formatJumpTo: function () {
        return "Aller à";
      },
      formatAdvancedSearch: function () {
        return "Recherche avancée";
      },
      formatAdvancedCloseButton: function () {
        return "Fermer";
      },
      formatFilterControlSwitch: function () {
        return "Cacher/Afficher controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Cacher controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Afficher controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fr-CH"]),
    (t.fn.bootstrapTable.locales["fr-FR"] = t.fn.bootstrapTable.locales.fr = {
      formatCopyRows: function () {
        return "Copier les lignes";
      },
      formatPrint: function () {
        return "Imprimer";
      },
      formatLoadingMessage: function () {
        return "Chargement en cours";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " lignes par page");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes (filtrés à partir de ").concat(r, " lignes)") : "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes");
      },
      formatSRPaginationPreText: function () {
        return "page précédente";
      },
      formatSRPaginationPageText: function (t) {
        return "vers la page ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "page suivante";
      },
      formatDetailPagination: function (t) {
        return "Affiche ".concat(t, " lignes");
      },
      formatClearSearch: function () {
        return "Effacer la recherche";
      },
      formatSearch: function () {
        return "Recherche";
      },
      formatNoMatches: function () {
        return "Aucun résultat";
      },
      formatPaginationSwitch: function () {
        return "Masquer/Afficher la pagination";
      },
      formatPaginationSwitchDown: function () {
        return "Afficher la pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Masquer la pagination";
      },
      formatRefresh: function () {
        return "Actualiser";
      },
      formatToggle: function () {
        return "Basculer";
      },
      formatToggleOn: function () {
        return "Afficher la vue carte";
      },
      formatToggleOff: function () {
        return "Masquer la vue carte";
      },
      formatColumns: function () {
        return "Colonnes";
      },
      formatColumnsToggleAll: function () {
        return "Tout basculer";
      },
      formatFullscreen: function () {
        return "Plein écran";
      },
      formatAllRows: function () {
        return "Tout";
      },
      formatAutoRefresh: function () {
        return "Actualisation automatique";
      },
      formatExport: function () {
        return "Exporter les données";
      },
      formatJumpTo: function () {
        return "ALLER";
      },
      formatAdvancedSearch: function () {
        return "Recherche avancée";
      },
      formatAdvancedCloseButton: function () {
        return "Fermer";
      },
      formatFilterControlSwitch: function () {
        return "Masquer/Afficher les contrôles";
      },
      formatFilterControlSwitchHide: function () {
        return "Masquer les contrôles";
      },
      formatFilterControlSwitchShow: function () {
        return "Afficher les contrôles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fr-FR"]),
    (t.fn.bootstrapTable.locales["fr-LU"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Chargement en cours";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " lignes par page");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes (filtrés à partir de ").concat(r, " lignes)") : "Affiche de ".concat(t, " à ").concat(n, " sur ").concat(o, " lignes");
      },
      formatSRPaginationPreText: function () {
        return "page précédente";
      },
      formatSRPaginationPageText: function (t) {
        return "vers la page ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "page suivante";
      },
      formatDetailPagination: function (t) {
        return "Affiche ".concat(t, " lignes");
      },
      formatClearSearch: function () {
        return "Effacer la recherche";
      },
      formatSearch: function () {
        return "Recherche";
      },
      formatNoMatches: function () {
        return "Pas de lignes trouvés";
      },
      formatPaginationSwitch: function () {
        return "Cacher/Afficher pagination";
      },
      formatPaginationSwitchDown: function () {
        return "Afficher pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Cacher pagination";
      },
      formatRefresh: function () {
        return "Rafraichir";
      },
      formatToggle: function () {
        return "Basculer";
      },
      formatToggleOn: function () {
        return "Afficher vue carte";
      },
      formatToggleOff: function () {
        return "Cacher vue carte";
      },
      formatColumns: function () {
        return "Colonnes";
      },
      formatColumnsToggleAll: function () {
        return "Tout basculer";
      },
      formatFullscreen: function () {
        return "Plein écran";
      },
      formatAllRows: function () {
        return "Tout";
      },
      formatAutoRefresh: function () {
        return "Rafraîchissement automatique";
      },
      formatExport: function () {
        return "Exporter les données";
      },
      formatJumpTo: function () {
        return "Aller à";
      },
      formatAdvancedSearch: function () {
        return "Recherche avancée";
      },
      formatAdvancedCloseButton: function () {
        return "Fermer";
      },
      formatFilterControlSwitch: function () {
        return "Cacher/Afficher controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Cacher controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Afficher controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["fr-LU"]),
    (t.fn.bootstrapTable.locales["he-IL"] = t.fn.bootstrapTable.locales.he = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "טוען, נא להמתין";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " שורות בעמוד");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "מציג ".concat(t, " עד ").concat(n, " מ-").concat(o, "שורות").concat(r, " total rows)") : "מציג ".concat(t, " עד ").concat(n, " מ-").concat(o, " שורות");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "חיפוש";
      },
      formatNoMatches: function () {
        return "לא נמצאו רשומות תואמות";
      },
      formatPaginationSwitch: function () {
        return "הסתר/הצג מספור דפים";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "רענן";
      },
      formatToggle: function () {
        return "החלף תצוגה";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "עמודות";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "הכל";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["he-IL"]),
    (t.fn.bootstrapTable.locales["hr-HR"] = t.fn.bootstrapTable.locales.hr = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Molimo pričekajte";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " broj zapisa po stranici");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Prikazujem ".concat(t, ". - ").concat(n, ". od ukupnog broja zapisa ").concat(o, " (filtered from ").concat(r, " total rows)") : "Prikazujem ".concat(t, ". - ").concat(n, ". od ukupnog broja zapisa ").concat(o);
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Pretraži";
      },
      formatNoMatches: function () {
        return "Nije pronađen niti jedan zapis";
      },
      formatPaginationSwitch: function () {
        return "Prikaži/sakrij stranice";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Osvježi";
      },
      formatToggle: function () {
        return "Promijeni prikaz";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Kolone";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Sve";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["hr-HR"]),
    (t.fn.bootstrapTable.locales["hu-HU"] = t.fn.bootstrapTable.locales.hu = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Betöltés, kérem várjon";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rekord per oldal");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Megjelenítve ".concat(t, " - ").concat(n, " / ").concat(o, " összesen (filtered from ").concat(r, " total rows)") : "Megjelenítve ".concat(t, " - ").concat(n, " / ").concat(o, " összesen");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Keresés";
      },
      formatNoMatches: function () {
        return "Nincs találat";
      },
      formatPaginationSwitch: function () {
        return "Lapozó elrejtése/megjelenítése";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Frissítés";
      },
      formatToggle: function () {
        return "Összecsuk/Kinyit";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Oszlopok";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Összes";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["hu-HU"]),
    (t.fn.bootstrapTable.locales["id-ID"] = t.fn.bootstrapTable.locales.id = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Memuat, mohon tunggu";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " baris per halaman");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Menampilkan ".concat(t, " sampai ").concat(n, " dari ").concat(o, " baris (filtered from ").concat(r, " total rows)") : "Menampilkan ".concat(t, " sampai ").concat(n, " dari ").concat(o, " baris");
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
      formatClearSearch: function () {
        return "Bersihkan filter";
      },
      formatSearch: function () {
        return "Pencarian";
      },
      formatNoMatches: function () {
        return "Tidak ditemukan data yang cocok";
      },
      formatPaginationSwitch: function () {
        return "Sembunyikan/Tampilkan halaman";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Muat ulang";
      },
      formatToggle: function () {
        return "Beralih";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "kolom";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Semua";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Ekspor data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["id-ID"]),
    (t.fn.bootstrapTable.locales["it-IT"] = t.fn.bootstrapTable.locales.it = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Caricamento in corso";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " elementi per pagina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Visualizzazione da ".concat(t, " a ").concat(n, " di ").concat(o, " elementi (filtrati da ").concat(r, " elementi totali)") : "Visualizzazione da ".concat(t, " a ").concat(n, " di ").concat(o, " elementi");
      },
      formatSRPaginationPreText: function () {
        return "pagina precedente";
      },
      formatSRPaginationPageText: function (t) {
        return "alla pagina ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "pagina successiva";
      },
      formatDetailPagination: function (t) {
        return "Mostrando ".concat(t, " elementi");
      },
      formatClearSearch: function () {
        return "Pulisci filtri";
      },
      formatSearch: function () {
        return "Cerca";
      },
      formatNoMatches: function () {
        return "Nessun elemento trovato";
      },
      formatPaginationSwitch: function () {
        return "Nascondi/Mostra paginazione";
      },
      formatPaginationSwitchDown: function () {
        return "Mostra paginazione";
      },
      formatPaginationSwitchUp: function () {
        return "Nascondi paginazione";
      },
      formatRefresh: function () {
        return "Aggiorna";
      },
      formatToggle: function () {
        return "Attiva/Disattiva";
      },
      formatToggleOn: function () {
        return "Mostra visuale a scheda";
      },
      formatToggleOff: function () {
        return "Nascondi visuale a scheda";
      },
      formatColumns: function () {
        return "Colonne";
      },
      formatColumnsToggleAll: function () {
        return "Mostra tutte";
      },
      formatFullscreen: function () {
        return "Schermo intero";
      },
      formatAllRows: function () {
        return "Tutto";
      },
      formatAutoRefresh: function () {
        return "Auto Aggiornamento";
      },
      formatExport: function () {
        return "Esporta dati";
      },
      formatJumpTo: function () {
        return "VAI";
      },
      formatAdvancedSearch: function () {
        return "Filtri avanzati";
      },
      formatAdvancedCloseButton: function () {
        return "Chiudi";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["it-IT"]),
    (t.fn.bootstrapTable.locales["ja-JP"] = t.fn.bootstrapTable.locales.ja = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "読み込み中です。少々お待ちください。";
      },
      formatRecordsPerPage: function (t) {
        return "ページ当たり最大".concat(t, "件");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "全".concat(o, "件から、").concat(t, "から").concat(n, "件目まで表示しています (filtered from ").concat(r, " total rows)") : "全".concat(o, "件から、").concat(t, "から").concat(n, "件目まで表示しています");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "検索";
      },
      formatNoMatches: function () {
        return "該当するレコードが見つかりません";
      },
      formatPaginationSwitch: function () {
        return "ページ数を表示・非表示";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "更新";
      },
      formatToggle: function () {
        return "トグル";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "列";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "すべて";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ja-JP"]),
    (t.fn.bootstrapTable.locales["ka-GE"] = t.fn.bootstrapTable.locales.ka = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "იტვირთება, გთხოვთ მოიცადოთ";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " ჩანაწერი თითო გვერდზე");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "ნაჩვენებია ".concat(t, "-დან ").concat(n, "-მდე ჩანაწერი ჯამური ").concat(o, "-დან (filtered from ").concat(r, " total rows)") : "ნაჩვენებია ".concat(t, "-დან ").concat(n, "-მდე ჩანაწერი ჯამური ").concat(o, "-დან");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "ძებნა";
      },
      formatNoMatches: function () {
        return "მონაცემები არ არის";
      },
      formatPaginationSwitch: function () {
        return "გვერდების გადამრთველის დამალვა/გამოჩენა";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "განახლება";
      },
      formatToggle: function () {
        return "ჩართვა/გამორთვა";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "სვეტები";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ka-GE"]),
    (t.fn.bootstrapTable.locales["ko-KR"] = t.fn.bootstrapTable.locales.ko = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "데이터를 불러오는 중입니다";
      },
      formatRecordsPerPage: function (t) {
        return "페이지 당 ".concat(t, "개 데이터 출력");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "전체 ".concat(o, "개 중 ").concat(t, "~").concat(n, "번째 데이터 출력, (filtered from ").concat(r, " total rows)") : "전체 ".concat(o, "개 중 ").concat(t, "~").concat(n, "번째 데이터 출력,");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "검색";
      },
      formatNoMatches: function () {
        return "조회된 데이터가 없습니다.";
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
        return "새로 고침";
      },
      formatToggle: function () {
        return "전환";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "컬럼 필터링";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ko-KR"]),
    (t.fn.bootstrapTable.locales["ms-MY"] = t.fn.bootstrapTable.locales.ms = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Permintaan sedang dimuatkan. Sila tunggu sebentar";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rekod setiap muka surat");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Sedang memaparkan rekod ".concat(t, " hingga ").concat(n, " daripada jumlah ").concat(o, " rekod (filtered from ").concat(r, " total rows)") : "Sedang memaparkan rekod ".concat(t, " hingga ").concat(n, " daripada jumlah ").concat(o, " rekod");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Cari";
      },
      formatNoMatches: function () {
        return "Tiada rekod yang menyamai permintaan";
      },
      formatPaginationSwitch: function () {
        return "Tunjuk/sembunyi muka surat";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Muatsemula";
      },
      formatToggle: function () {
        return "Tukar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Lajur";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Semua";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ms-MY"]),
    (t.fn.bootstrapTable.locales["nb-NO"] = t.fn.bootstrapTable.locales.nb = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Oppdaterer, vennligst vent";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " poster pr side");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Viser ".concat(t, " til ").concat(n, " av ").concat(o, " rekker (filtered from ").concat(r, " total rows)") : "Viser ".concat(t, " til ").concat(n, " av ").concat(o, " rekker");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Søk";
      },
      formatNoMatches: function () {
        return "Ingen poster funnet";
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
        return "Oppdater";
      },
      formatToggle: function () {
        return "Endre";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Kolonner";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["nb-NO"]),
    (t.fn.bootstrapTable.locales["nl-BE"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Laden, even geduld";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " records per pagina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o
          ? "Toon "
              .concat(t, " tot ")
              .concat(n, " van ")
              .concat(o, " record")
              .concat(o > 1 ? "s" : "", " (gefilterd van ")
              .concat(r, " records in totaal)")
          : "Toon "
              .concat(t, " tot ")
              .concat(n, " van ")
              .concat(o, " record")
              .concat(o > 1 ? "s" : "");
      },
      formatSRPaginationPreText: function () {
        return "vorige pagina";
      },
      formatSRPaginationPageText: function (t) {
        return "tot pagina ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "volgende pagina";
      },
      formatDetailPagination: function (t) {
        return "Toon ".concat(t, " record").concat(t > 1 ? "s" : "");
      },
      formatClearSearch: function () {
        return "Verwijder filters";
      },
      formatSearch: function () {
        return "Zoeken";
      },
      formatNoMatches: function () {
        return "Geen resultaten gevonden";
      },
      formatPaginationSwitch: function () {
        return "Verberg/Toon paginering";
      },
      formatPaginationSwitchDown: function () {
        return "Toon paginering";
      },
      formatPaginationSwitchUp: function () {
        return "Verberg paginering";
      },
      formatRefresh: function () {
        return "Vernieuwen";
      },
      formatToggle: function () {
        return "Omschakelen";
      },
      formatToggleOn: function () {
        return "Toon kaartweergave";
      },
      formatToggleOff: function () {
        return "Verberg kaartweergave";
      },
      formatColumns: function () {
        return "Kolommen";
      },
      formatColumnsToggleAll: function () {
        return "Allen omschakelen";
      },
      formatFullscreen: function () {
        return "Volledig scherm";
      },
      formatAllRows: function () {
        return "Alle";
      },
      formatAutoRefresh: function () {
        return "Automatisch vernieuwen";
      },
      formatExport: function () {
        return "Exporteer gegevens";
      },
      formatJumpTo: function () {
        return "GA";
      },
      formatAdvancedSearch: function () {
        return "Geavanceerd zoeken";
      },
      formatAdvancedCloseButton: function () {
        return "Sluiten";
      },
      formatFilterControlSwitch: function () {
        return "Verberg/Toon controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Verberg controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Toon controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["nl-BE"]),
    (t.fn.bootstrapTable.locales["nl-NL"] = t.fn.bootstrapTable.locales.nl = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Laden, even geduld";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " records per pagina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o
          ? "Toon "
              .concat(t, " tot ")
              .concat(n, " van ")
              .concat(o, " record")
              .concat(o > 1 ? "s" : "", " (gefilterd van ")
              .concat(r, " records in totaal)")
          : "Toon "
              .concat(t, " tot ")
              .concat(n, " van ")
              .concat(o, " record")
              .concat(o > 1 ? "s" : "");
      },
      formatSRPaginationPreText: function () {
        return "vorige pagina";
      },
      formatSRPaginationPageText: function (t) {
        return "tot pagina ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "volgende pagina";
      },
      formatDetailPagination: function (t) {
        return "Toon ".concat(t, " record").concat(t > 1 ? "s" : "");
      },
      formatClearSearch: function () {
        return "Verwijder filters";
      },
      formatSearch: function () {
        return "Zoeken";
      },
      formatNoMatches: function () {
        return "Geen resultaten gevonden";
      },
      formatPaginationSwitch: function () {
        return "Verberg/Toon paginering";
      },
      formatPaginationSwitchDown: function () {
        return "Toon paginering";
      },
      formatPaginationSwitchUp: function () {
        return "Verberg paginering";
      },
      formatRefresh: function () {
        return "Vernieuwen";
      },
      formatToggle: function () {
        return "Omschakelen";
      },
      formatToggleOn: function () {
        return "Toon kaartweergave";
      },
      formatToggleOff: function () {
        return "Verberg kaartweergave";
      },
      formatColumns: function () {
        return "Kolommen";
      },
      formatColumnsToggleAll: function () {
        return "Allen omschakelen";
      },
      formatFullscreen: function () {
        return "Volledig scherm";
      },
      formatAllRows: function () {
        return "Alle";
      },
      formatAutoRefresh: function () {
        return "Automatisch vernieuwen";
      },
      formatExport: function () {
        return "Exporteer gegevens";
      },
      formatJumpTo: function () {
        return "GA";
      },
      formatAdvancedSearch: function () {
        return "Geavanceerd zoeken";
      },
      formatAdvancedCloseButton: function () {
        return "Sluiten";
      },
      formatFilterControlSwitch: function () {
        return "Verberg/Toon controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Verberg controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Toon controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["nl-NL"]),
    (t.fn.bootstrapTable.locales["pl-PL"] = t.fn.bootstrapTable.locales.pl = {
      formatCopyRows: function () {
        return "Kopiuj wiersze";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Ładowanie, proszę czekać";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rekordów na stronę");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Wyświetlanie rekordów od ".concat(t, " do ").concat(n, " z ").concat(o, " (filtered from ").concat(r, " total rows)") : "Wyświetlanie rekordów od ".concat(t, " do ").concat(n, " z ").concat(o);
      },
      formatSRPaginationPreText: function () {
        return "poprzednia strona";
      },
      formatSRPaginationPageText: function (t) {
        return "z ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "następna strona";
      },
      formatDetailPagination: function (t) {
        return "Wyświetla ".concat(t, " wierszy");
      },
      formatClearSearch: function () {
        return "Wyczyść wyszukiwanie";
      },
      formatSearch: function () {
        return "Szukaj";
      },
      formatNoMatches: function () {
        return "Niestety, nic nie znaleziono";
      },
      formatPaginationSwitch: function () {
        return "Pokaż/ukryj stronicowanie";
      },
      formatPaginationSwitchDown: function () {
        return "Pokaż stronicowanie";
      },
      formatPaginationSwitchUp: function () {
        return "Ukryj stronicowanie";
      },
      formatRefresh: function () {
        return "Odśwież";
      },
      formatToggle: function () {
        return "Przełącz";
      },
      formatToggleOn: function () {
        return "Pokaż układ karty";
      },
      formatToggleOff: function () {
        return "Ukryj układ karty";
      },
      formatColumns: function () {
        return "Kolumny";
      },
      formatColumnsToggleAll: function () {
        return "Zaznacz wszystko";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Wszystkie";
      },
      formatAutoRefresh: function () {
        return "Auto odświeżanie";
      },
      formatExport: function () {
        return "Eksport danych";
      },
      formatJumpTo: function () {
        return "Przejdź";
      },
      formatAdvancedSearch: function () {
        return "Wyszukiwanie zaawansowane";
      },
      formatAdvancedCloseButton: function () {
        return "Zamknij";
      },
      formatFilterControlSwitch: function () {
        return "Pokaż/Ukryj";
      },
      formatFilterControlSwitchHide: function () {
        return "Pokaż";
      },
      formatFilterControlSwitchShow: function () {
        return "Ukryj";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["pl-PL"]),
    (t.fn.bootstrapTable.locales["pt-BR"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Carregando, aguarde";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registros por página");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Exibindo ".concat(t, " até ").concat(n, " de ").concat(o, " linhas (filtradas de um total de ").concat(r, " linhas)") : "Exibindo ".concat(t, " até ").concat(n, " de ").concat(o, " linhas");
      },
      formatSRPaginationPreText: function () {
        return "página anterior";
      },
      formatSRPaginationPageText: function (t) {
        return "Para a página ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "próxima página";
      },
      formatDetailPagination: function (t) {
        return "Mostrando ".concat(t, " linhas");
      },
      formatClearSearch: function () {
        return "Limpar Pesquisa";
      },
      formatSearch: function () {
        return "Pesquisar";
      },
      formatNoMatches: function () {
        return "Nenhum registro encontrado";
      },
      formatPaginationSwitch: function () {
        return "Ocultar/Exibir paginação";
      },
      formatPaginationSwitchDown: function () {
        return "Mostrar Paginação";
      },
      formatPaginationSwitchUp: function () {
        return "Esconder Paginação";
      },
      formatRefresh: function () {
        return "Recarregar";
      },
      formatToggle: function () {
        return "Alternar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Colunas";
      },
      formatColumnsToggleAll: function () {
        return "Alternar tudo";
      },
      formatFullscreen: function () {
        return "Tela cheia";
      },
      formatAllRows: function () {
        return "Tudo";
      },
      formatAutoRefresh: function () {
        return "Atualização Automática";
      },
      formatExport: function () {
        return "Exportar dados";
      },
      formatJumpTo: function () {
        return "IR";
      },
      formatAdvancedSearch: function () {
        return "Pesquisa Avançada";
      },
      formatAdvancedCloseButton: function () {
        return "Fechar";
      },
      formatFilterControlSwitch: function () {
        return "Ocultar/Exibir controles";
      },
      formatFilterControlSwitchHide: function () {
        return "Ocultar controles";
      },
      formatFilterControlSwitchShow: function () {
        return "Exibir controles";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["pt-BR"]),
    (t.fn.bootstrapTable.locales["pt-PT"] = t.fn.bootstrapTable.locales.pt = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "A carregar, por favor aguarde";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " registos por p&aacute;gina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "A mostrar ".concat(t, " at&eacute; ").concat(n, " de ").concat(o, " linhas (filtered from ").concat(r, " total rows)") : "A mostrar ".concat(t, " at&eacute; ").concat(n, " de ").concat(o, " linhas");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Pesquisa";
      },
      formatNoMatches: function () {
        return "Nenhum registo encontrado";
      },
      formatPaginationSwitch: function () {
        return "Esconder/Mostrar pagina&ccedil&atilde;o";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Atualizar";
      },
      formatToggle: function () {
        return "Alternar";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Colunas";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Tudo";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["pt-PT"]),
    (t.fn.bootstrapTable.locales["ro-RO"] = t.fn.bootstrapTable.locales.ro = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Se incarca, va rugam asteptati";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " inregistrari pe pagina");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Arata de la ".concat(t, " pana la ").concat(n, " din ").concat(o, " randuri (filtered from ").concat(r, " total rows)") : "Arata de la ".concat(t, " pana la ").concat(n, " din ").concat(o, " randuri");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Cauta";
      },
      formatNoMatches: function () {
        return "Nu au fost gasite inregistrari";
      },
      formatPaginationSwitch: function () {
        return "Ascunde/Arata paginatia";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Reincarca";
      },
      formatToggle: function () {
        return "Comuta";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Coloane";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Toate";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ro-RO"]),
    (t.fn.bootstrapTable.locales["ru-RU"] = t.fn.bootstrapTable.locales.ru = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Пожалуйста, подождите, идёт загрузка";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " записей на страницу");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Записи с ".concat(t, " по ").concat(n, " из ").concat(o, " (filtered from ").concat(r, " total rows)") : "Записи с ".concat(t, " по ").concat(n, " из ").concat(o);
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
      formatClearSearch: function () {
        return "Очистить фильтры";
      },
      formatSearch: function () {
        return "Поиск";
      },
      formatNoMatches: function () {
        return "Ничего не найдено";
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
        return "Обновить";
      },
      formatToggle: function () {
        return "Переключить";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Колонки";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ru-RU"]),
    (t.fn.bootstrapTable.locales["sk-SK"] = t.fn.bootstrapTable.locales.sk = {
      formatCopyRows: function () {
        return "Skopírovať riadky";
      },
      formatPrint: function () {
        return "Vytlačiť";
      },
      formatLoadingMessage: function () {
        return "Prosím čakajte";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " záznamov na stranu");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Zobrazená ".concat(t, ". - ").concat(n, ". položka z celkových ").concat(o, " (filtered from ").concat(r, " total rows)") : "Zobrazená ".concat(t, ". - ").concat(n, ". položka z celkových ").concat(o);
      },
      formatSRPaginationPreText: function () {
        return "Predchádzajúca strana";
      },
      formatSRPaginationPageText: function (t) {
        return "na stranu ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "Nasledujúca strana";
      },
      formatDetailPagination: function (t) {
        return "Zobrazuje sa ".concat(t, " riadkov");
      },
      formatClearSearch: function () {
        return "Odstráň filtre";
      },
      formatSearch: function () {
        return "Vyhľadávanie";
      },
      formatNoMatches: function () {
        return "Nenájdená žiadna vyhovujúca položka";
      },
      formatPaginationSwitch: function () {
        return "Skry/Zobraz stránkovanie";
      },
      formatPaginationSwitchDown: function () {
        return "Zobraziť stránkovanie";
      },
      formatPaginationSwitchUp: function () {
        return "Skryť stránkovanie";
      },
      formatRefresh: function () {
        return "Obnoviť";
      },
      formatToggle: function () {
        return "Prepni";
      },
      formatToggleOn: function () {
        return "Zobraziť kartové zobrazenie";
      },
      formatToggleOff: function () {
        return "skryť kartové zobrazenie";
      },
      formatColumns: function () {
        return "Stĺpce";
      },
      formatColumnsToggleAll: function () {
        return "Prepnúť všetky";
      },
      formatFullscreen: function () {
        return "Celá obrazovka";
      },
      formatAllRows: function () {
        return "Všetky";
      },
      formatAutoRefresh: function () {
        return "Automatické obnovenie";
      },
      formatExport: function () {
        return "Exportuj dáta";
      },
      formatJumpTo: function () {
        return "Ísť";
      },
      formatAdvancedSearch: function () {
        return "Pokročilé vyhľadávanie";
      },
      formatAdvancedCloseButton: function () {
        return "Zatvoriť";
      },
      formatFilterControlSwitch: function () {
        return "Zobraziť/Skryť tlačidlá";
      },
      formatFilterControlSwitchHide: function () {
        return "Skryť tlačidlá";
      },
      formatFilterControlSwitchShow: function () {
        return "Zobraziť tlačidlá";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["sk-SK"]),
    (t.fn.bootstrapTable.locales["sr-Cyrl-RS"] = t.fn.bootstrapTable.locales.sr = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Молим сачекај";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " редова по страни");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Приказано ".concat(t, ". - ").concat(n, ". од укупног броја редова ").concat(o, " (филтрирано од ").concat(r, ")") : "Приказано ".concat(t, ". - ").concat(n, ". од укупног броја редова ").concat(o);
      },
      formatSRPaginationPreText: function () {
        return "претходна страна";
      },
      formatSRPaginationPageText: function (t) {
        return "на страну ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "следећа страна";
      },
      formatDetailPagination: function (t) {
        return "Приказано ".concat(t, " редова");
      },
      formatClearSearch: function () {
        return "Обриши претрагу";
      },
      formatSearch: function () {
        return "Пронађи";
      },
      formatNoMatches: function () {
        return "Није пронађен ни један податак";
      },
      formatPaginationSwitch: function () {
        return "Прикажи/сакриј пагинацију";
      },
      formatPaginationSwitchDown: function () {
        return "Прикажи пагинацију";
      },
      formatPaginationSwitchUp: function () {
        return "Сакриј пагинацију";
      },
      formatRefresh: function () {
        return "Освежи";
      },
      formatToggle: function () {
        return "Промени приказ";
      },
      formatToggleOn: function () {
        return "Прикажи картице";
      },
      formatToggleOff: function () {
        return "Сакриј картице";
      },
      formatColumns: function () {
        return "Колоне";
      },
      formatColumnsToggleAll: function () {
        return "Прикажи/сакриј све";
      },
      formatFullscreen: function () {
        return "Цео екран";
      },
      formatAllRows: function () {
        return "Све";
      },
      formatAutoRefresh: function () {
        return "Аутоматско освежавање";
      },
      formatExport: function () {
        return "Извези податке";
      },
      formatJumpTo: function () {
        return "Иди";
      },
      formatAdvancedSearch: function () {
        return "Напредна претрага";
      },
      formatAdvancedCloseButton: function () {
        return "Затвори";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["sr-Cyrl-RS"]),
    (t.fn.bootstrapTable.locales["sr-Latn-RS"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Molim sačekaj";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " redova po strani");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Prikazano ".concat(t, ". - ").concat(n, ". od ukupnog broja redova ").concat(o, " (filtrirano od ").concat(r, ")") : "Prikazano ".concat(t, ". - ").concat(n, ". od ukupnog broja redova ").concat(o);
      },
      formatSRPaginationPreText: function () {
        return "prethodna strana";
      },
      formatSRPaginationPageText: function (t) {
        return "na stranu ".concat(t);
      },
      formatSRPaginationNextText: function () {
        return "sledeća strana";
      },
      formatDetailPagination: function (t) {
        return "Prikazano ".concat(t, " redova");
      },
      formatClearSearch: function () {
        return "Obriši pretragu";
      },
      formatSearch: function () {
        return "Pronađi";
      },
      formatNoMatches: function () {
        return "Nije pronađen ni jedan podatak";
      },
      formatPaginationSwitch: function () {
        return "Prikaži/sakrij paginaciju";
      },
      formatPaginationSwitchDown: function () {
        return "Prikaži paginaciju";
      },
      formatPaginationSwitchUp: function () {
        return "Sakrij paginaciju";
      },
      formatRefresh: function () {
        return "Osveži";
      },
      formatToggle: function () {
        return "Promeni prikaz";
      },
      formatToggleOn: function () {
        return "Prikaži kartice";
      },
      formatToggleOff: function () {
        return "Sakrij kartice";
      },
      formatColumns: function () {
        return "Kolone";
      },
      formatColumnsToggleAll: function () {
        return "Prikaži/sakrij sve";
      },
      formatFullscreen: function () {
        return "Ceo ekran";
      },
      formatAllRows: function () {
        return "Sve";
      },
      formatAutoRefresh: function () {
        return "Automatsko osvežavanje";
      },
      formatExport: function () {
        return "Izvezi podatke";
      },
      formatJumpTo: function () {
        return "Idi";
      },
      formatAdvancedSearch: function () {
        return "Napredna pretraga";
      },
      formatAdvancedCloseButton: function () {
        return "Zatvori";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["sr-Latn-RS"]),
    (t.fn.bootstrapTable.locales["sv-SE"] = t.fn.bootstrapTable.locales.sv = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Laddar, vänligen vänta";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " rader per sida");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Visa ".concat(t, " till ").concat(n, " av ").concat(o, " rader (filtered from ").concat(r, " total rows)") : "Visa ".concat(t, " till ").concat(n, " av ").concat(o, " rader");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Sök";
      },
      formatNoMatches: function () {
        return "Inga matchande resultat funna.";
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
        return "Uppdatera";
      },
      formatToggle: function () {
        return "Skifta";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "kolumn";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["sv-SE"]),
    (t.fn.bootstrapTable.locales["th-TH"] = t.fn.bootstrapTable.locales.th = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "กำลังโหลดข้อมูล, กรุณารอสักครู่";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " รายการต่อหน้า");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "รายการที่ ".concat(t, " ถึง ").concat(n, " จากทั้งหมด ").concat(o, " รายการ (filtered from ").concat(r, " total rows)") : "รายการที่ ".concat(t, " ถึง ").concat(n, " จากทั้งหมด ").concat(o, " รายการ");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "ค้นหา";
      },
      formatNoMatches: function () {
        return "ไม่พบรายการที่ค้นหา !";
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
        return "รีเฟรส";
      },
      formatToggle: function () {
        return "สลับมุมมอง";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "คอลัมน์";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["th-TH"]),
    (t.fn.bootstrapTable.locales["tr-TR"] = t.fn.bootstrapTable.locales.tr = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Yükleniyor, lütfen bekleyin";
      },
      formatRecordsPerPage: function (t) {
        return "Sayfa başına ".concat(t, " kayıt.");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "".concat(o, " kayıttan ").concat(t, "-").concat(n, " arası gösteriliyor (filtered from ").concat(r, " total rows).") : "".concat(o, " kayıttan ").concat(t, "-").concat(n, " arası gösteriliyor.");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Ara";
      },
      formatNoMatches: function () {
        return "Eşleşen kayıt bulunamadı.";
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
        return "Yenile";
      },
      formatToggle: function () {
        return "Değiştir";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Sütunlar";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Tüm Satırlar";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["tr-TR"]),
    (t.fn.bootstrapTable.locales["uk-UA"] = t.fn.bootstrapTable.locales.uk = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Завантаження, будь ласка, зачекайте";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " записів на сторінку");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Показано з ".concat(t, " по ").concat(n, ". Всього: ").concat(o, " (filtered from ").concat(r, " total rows)") : "Показано з ".concat(t, " по ").concat(n, ". Всього: ").concat(o);
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
      formatClearSearch: function () {
        return "Очистити фільтри";
      },
      formatSearch: function () {
        return "Пошук";
      },
      formatNoMatches: function () {
        return "Не знайдено жодного запису";
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
        return "Оновити";
      },
      formatToggle: function () {
        return "Змінити";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Стовпці";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["uk-UA"]),
    (t.fn.bootstrapTable.locales["ur-PK"] = t.fn.bootstrapTable.locales.ur = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "براۓ مہربانی انتظار کیجئے";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " ریکارڈز فی صفہ ");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "دیکھیں ".concat(t, " سے ").concat(n, " کے ").concat(o, "ریکارڈز (filtered from ").concat(r, " total rows)") : "دیکھیں ".concat(t, " سے ").concat(n, " کے ").concat(o, "ریکارڈز");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "تلاش";
      },
      formatNoMatches: function () {
        return "کوئی ریکارڈ نہیں ملا";
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
        return "تازہ کریں";
      },
      formatToggle: function () {
        return "تبدیل کریں";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "کالم";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "All";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["ur-PK"]),
    (t.fn.bootstrapTable.locales["uz-Latn-UZ"] = t.fn.bootstrapTable.locales.uz = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Yuklanyapti, iltimos kuting";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " qator har sahifada");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Ko'rsatypati ".concat(t, " dan ").concat(n, " gacha ").concat(o, " qatorlarni (filtered from ").concat(r, " total rows)") : "Ko'rsatypati ".concat(t, " dan ").concat(n, " gacha ").concat(o, " qatorlarni");
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
      formatClearSearch: function () {
        return "Filtrlarni tozalash";
      },
      formatSearch: function () {
        return "Qidirish";
      },
      formatNoMatches: function () {
        return "Hech narsa topilmadi";
      },
      formatPaginationSwitch: function () {
        return "Sahifalashni yashirish/ko'rsatish";
      },
      formatPaginationSwitchDown: function () {
        return "Show pagination";
      },
      formatPaginationSwitchUp: function () {
        return "Hide pagination";
      },
      formatRefresh: function () {
        return "Yangilash";
      },
      formatToggle: function () {
        return "Ko'rinish";
      },
      formatToggleOn: function () {
        return "Show card view";
      },
      formatToggleOff: function () {
        return "Hide card view";
      },
      formatColumns: function () {
        return "Ustunlar";
      },
      formatColumnsToggleAll: function () {
        return "Toggle all";
      },
      formatFullscreen: function () {
        return "Fullscreen";
      },
      formatAllRows: function () {
        return "Hammasi";
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Eksport";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["uz-Latn-UZ"]),
    (t.fn.bootstrapTable.locales["vi-VN"] = t.fn.bootstrapTable.locales.vi = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "Đang tải";
      },
      formatRecordsPerPage: function (t) {
        return "".concat(t, " bản ghi mỗi trang");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "Hiển thị từ trang ".concat(t, " đến ").concat(n, " của ").concat(o, " bảng ghi (filtered from ").concat(r, " total rows)") : "Hiển thị từ trang ".concat(t, " đến ").concat(n, " của ").concat(o, " bảng ghi");
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
      formatClearSearch: function () {
        return "Clear Search";
      },
      formatSearch: function () {
        return "Tìm kiếm";
      },
      formatNoMatches: function () {
        return "Không có dữ liệu";
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
      },
      formatAutoRefresh: function () {
        return "Auto Refresh";
      },
      formatExport: function () {
        return "Export data";
      },
      formatJumpTo: function () {
        return "GO";
      },
      formatAdvancedSearch: function () {
        return "Advanced search";
      },
      formatAdvancedCloseButton: function () {
        return "Close";
      },
      formatFilterControlSwitch: function () {
        return "Hide/Show controls";
      },
      formatFilterControlSwitchHide: function () {
        return "Hide controls";
      },
      formatFilterControlSwitchShow: function () {
        return "Show controls";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["vi-VN"]),
    (t.fn.bootstrapTable.locales["zh-CN"] = t.fn.bootstrapTable.locales.zh = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "正在努力地加载数据中，请稍候";
      },
      formatRecordsPerPage: function (t) {
        return "每页显示 ".concat(t, " 条记录");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "显示第 ".concat(t, " 到第 ").concat(n, " 条记录，总共 ").concat(o, " 条记录（从 ").concat(r, " 总记录中过滤）") : "显示第 ".concat(t, " 到第 ").concat(n, " 条记录，总共 ").concat(o, " 条记录");
      },
      formatSRPaginationPreText: function () {
        return "上一页";
      },
      formatSRPaginationPageText: function (t) {
        return "第".concat(t, "页");
      },
      formatSRPaginationNextText: function () {
        return "下一页";
      },
      formatDetailPagination: function (t) {
        return "总共 ".concat(t, " 条记录");
      },
      formatClearSearch: function () {
        return "清空过滤";
      },
      formatSearch: function () {
        return "搜索";
      },
      formatNoMatches: function () {
        return "没有找到匹配的记录";
      },
      formatPaginationSwitch: function () {
        return "隐藏/显示分页";
      },
      formatPaginationSwitchDown: function () {
        return "显示分页";
      },
      formatPaginationSwitchUp: function () {
        return "隐藏分页";
      },
      formatRefresh: function () {
        return "刷新";
      },
      formatToggle: function () {
        return "切换";
      },
      formatToggleOn: function () {
        return "显示卡片视图";
      },
      formatToggleOff: function () {
        return "隐藏卡片视图";
      },
      formatColumns: function () {
        return "列";
      },
      formatColumnsToggleAll: function () {
        return "切换所有";
      },
      formatFullscreen: function () {
        return "全屏";
      },
      formatAllRows: function () {
        return "所有";
      },
      formatAutoRefresh: function () {
        return "自动刷新";
      },
      formatExport: function () {
        return "导出数据";
      },
      formatJumpTo: function () {
        return "跳转";
      },
      formatAdvancedSearch: function () {
        return "高级搜索";
      },
      formatAdvancedCloseButton: function () {
        return "关闭";
      },
      formatFilterControlSwitch: function () {
        return "隐藏/显示过滤控制";
      },
      formatFilterControlSwitchHide: function () {
        return "隐藏过滤控制";
      },
      formatFilterControlSwitchShow: function () {
        return "显示过滤控制";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["zh-CN"]),
    (t.fn.bootstrapTable.locales["zh-TW"] = {
      formatCopyRows: function () {
        return "Copy Rows";
      },
      formatPrint: function () {
        return "Print";
      },
      formatLoadingMessage: function () {
        return "正在努力地載入資料，請稍候";
      },
      formatRecordsPerPage: function (t) {
        return "每頁顯示 ".concat(t, " 項記錄");
      },
      formatShowingRows: function (t, n, o, r) {
        return void 0 !== r && r > 0 && r > o ? "顯示第 ".concat(t, " 到第 ").concat(n, " 項記錄，總共 ").concat(o, " 項記錄（從 ").concat(r, " 總記錄中過濾）") : "顯示第 ".concat(t, " 到第 ").concat(n, " 項記錄，總共 ").concat(o, " 項記錄");
      },
      formatSRPaginationPreText: function () {
        return "上一頁";
      },
      formatSRPaginationPageText: function (t) {
        return "第".concat(t, "頁");
      },
      formatSRPaginationNextText: function () {
        return "下一頁";
      },
      formatDetailPagination: function (t) {
        return "總共 ".concat(t, " 項記錄");
      },
      formatClearSearch: function () {
        return "清空過濾";
      },
      formatSearch: function () {
        return "搜尋";
      },
      formatNoMatches: function () {
        return "沒有找到符合的結果";
      },
      formatPaginationSwitch: function () {
        return "隱藏/顯示分頁";
      },
      formatPaginationSwitchDown: function () {
        return "顯示分頁";
      },
      formatPaginationSwitchUp: function () {
        return "隱藏分頁";
      },
      formatRefresh: function () {
        return "重新整理";
      },
      formatToggle: function () {
        return "切換";
      },
      formatToggleOn: function () {
        return "顯示卡片視圖";
      },
      formatToggleOff: function () {
        return "隱藏卡片視圖";
      },
      formatColumns: function () {
        return "列";
      },
      formatColumnsToggleAll: function () {
        return "切換所有";
      },
      formatFullscreen: function () {
        return "全屏";
      },
      formatAllRows: function () {
        return "所有";
      },
      formatAutoRefresh: function () {
        return "自動刷新";
      },
      formatExport: function () {
        return "導出數據";
      },
      formatJumpTo: function () {
        return "跳轉";
      },
      formatAdvancedSearch: function () {
        return "高級搜尋";
      },
      formatAdvancedCloseButton: function () {
        return "關閉";
      },
      formatFilterControlSwitch: function () {
        return "隱藏/顯示過濾控制";
      },
      formatFilterControlSwitchHide: function () {
        return "隱藏過濾控制";
      },
      formatFilterControlSwitchShow: function () {
        return "顯示過濾控制";
      }
    }),
    t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["zh-TW"]);
});
