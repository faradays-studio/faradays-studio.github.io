var Giteement = function(e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n),
		o.l = !0,
		o.exports
	}
	return n.m = e,
	n.c = t,
	n.d = function(e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	},
	n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o,
		function(t) {
			return e[t]
		}.bind(null, o));
		return r
	},
	n.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		}:
		function() {
			return e
		};
		return n.d(t, "a", t),
		t
	},
	n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = "",
	n(n.s = 126)
} ([function(e, t, n) {
	"use strict"; (function(e) {
		var r, o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		}; !
		function(i, s) {
			"object" === a(t) && void 0 !== e ? e.exports = s() : void 0 === (o = "function" == typeof(r = s) ? r.call(t, n, t, e) : r) || (e.exports = o)
		} (0,
		function() {
			var t, r;
			function o() {
				return t.apply(null, arguments)
			}
			function i(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}
			function s(e) {
				return null != e && "[object Object]" === Object.prototype.toString.call(e)
			}
			function u(e) {
				return void 0 === e
			}
			function d(e) {
				return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
			}
			function l(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}
			function c(e, t) {
				var n, r = [];
				for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
				return r
			}
			function m(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
			function _(e, t) {
				for (var n in t) m(t, n) && (e[n] = t[n]);
				return m(t, "toString") && (e.toString = t.toString),
				m(t, "valueOf") && (e.valueOf = t.valueOf),
				e
			}
			function f(e, t, n, r) {
				return Ht(e, t, n, r, !0).utc()
			}
			function p(e) {
				return null == e._pf && (e._pf = {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					meridiem: null,
					rfc2822: !1,
					weekdayMismatch: !1
				}),
				e._pf
			}
			function y(e) {
				if (null == e._isValid) {
					var t = p(e),
					n = r.call(t.parsedDateParts,
					function(e) {
						return null != e
					}),
					o = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
					if (e._strict && (o = o && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return o;
					e._isValid = o
				}
				return e._isValid
			}
			function h(e) {
				var t = f(NaN);
				return null != e ? _(p(t), e) : p(t).userInvalidated = !0,
				t
			}
			r = Array.prototype.some ? Array.prototype.some: function(e) {
				for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++) if (r in t && e.call(this, t[r], r, t)) return ! 0;
				return ! 1
			};
			var M = o.momentProperties = [];
			function v(e, t) {
				var n, r, o;
				if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = p(t)), u(t._locale) || (e._locale = t._locale), M.length > 0) for (n = 0; n < M.length; n++) u(o = t[r = M[n]]) || (e[r] = o);
				return e
			}
			var L = !1;
			function b(e) {
				v(this, e),
				this._d = new Date(null != e._d ? e._d.getTime() : NaN),
				this.isValid() || (this._d = new Date(NaN)),
				!1 === L && (L = !0, o.updateOffset(this), L = !1)
			}
			function g(e) {
				return e instanceof b || null != e && null != e._isAMomentObject
			}
			function Y(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
			}
			function k(e) {
				var t = +e,
				n = 0;
				return 0 !== t && isFinite(t) && (n = Y(t)),
				n
			}
			function S(e, t, n) {
				var r, o = Math.min(e.length, t.length),
				a = Math.abs(e.length - t.length),
				i = 0;
				for (r = 0; r < o; r++)(n && e[r] !== t[r] || !n && k(e[r]) !== k(t[r])) && i++;
				return i + a
			}
			function D(e) { ! 1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}
			function w(e, t) {
				var n = !0;
				return _(function() {
					if (null != o.deprecationHandler && o.deprecationHandler(null, e), n) {
						for (var r, i = [], s = 0; s < arguments.length; s++) {
							if (r = "", "object" === a(arguments[s])) {
								for (var u in r += "\n[" + s + "] ",
								arguments[0]) r += u + ": " + arguments[0][u] + ", ";
								r = r.slice(0, -2)
							} else r = arguments[s];
							i.push(r)
						}
						D(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack),
						n = !1
					}
					return t.apply(this, arguments)
				},
				t)
			}
			var T, x = {};
			function j(e, t) {
				null != o.deprecationHandler && o.deprecationHandler(e, t),
				x[e] || (D(t), x[e] = !0)
			}
			function H(e) {
				return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}
			function O(e, t) {
				var n, r = _({},
				e);
				for (n in t) m(t, n) && (s(e[n]) && s(t[n]) ? (r[n] = {},
				_(r[n], e[n]), _(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
				for (n in e) m(e, n) && !m(t, n) && s(e[n]) && (r[n] = _({},
				r[n]));
				return r
			}
			function E(e) {
				null != e && this.set(e)
			}
			o.suppressDeprecationWarnings = !1,
			o.deprecationHandler = null,
			T = Object.keys ? Object.keys: function(e) {
				var t, n = [];
				for (t in e) m(e, t) && n.push(t);
				return n
			};
			var A = {};
			function P(e, t) {
				var n = e.toLowerCase();
				A[n] = A[n + "s"] = A[t] = e
			}
			function C(e) {
				return "string" == typeof e ? A[e] || A[e.toLowerCase()] : void 0
			}
			function W(e) {
				var t, n, r = {};
				for (n in e) m(e, n) && (t = C(n)) && (r[t] = e[n]);
				return r
			}
			var N = {};
			function F(e, t) {
				N[e] = t
			}
			function z(e, t, n) {
				var r = "" + Math.abs(e),
				o = t - r.length;
				return (e >= 0 ? n ? "+": "": "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
			}
			var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
			R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
			J = {},
			q = {};
			function U(e, t, n, r) {
				var o = r;
				"string" == typeof r && (o = function() {
					return this[r]()
				}),
				e && (q[e] = o),
				t && (q[t[0]] = function() {
					return z(o.apply(this, arguments), t[1], t[2])
				}),
				n && (q[n] = function() {
					return this.localeData().ordinal(o.apply(this, arguments), e)
				})
			}
			function V(e) {
				return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
			}
			function B(e, t) {
				return e.isValid() ? (t = G(t, e.localeData()), J[t] = J[t] ||
				function(e) {
					var t, n, r = e.match(I);
					for (t = 0, n = r.length; t < n; t++) q[r[t]] ? r[t] = q[r[t]] : r[t] = V(r[t]);
					return function(t) {
						var o, a = "";
						for (o = 0; o < n; o++) a += H(r[o]) ? r[o].call(t, e) : r[o];
						return a
					}
				} (t), J[t](e)) : e.localeData().invalidDate()
			}
			function G(e, t) {
				var n = 5;
				function r(e) {
					return t.longDateFormat(e) || e
				}
				for (R.lastIndex = 0; n >= 0 && R.test(e);) e = e.replace(R, r),
				R.lastIndex = 0,
				n -= 1;
				return e
			}
			var $ = /\d/,
			K = /\d\d/,
			Z = /\d{3}/,
			X = /\d{4}/,
			Q = /[+-]?\d{6}/,
			ee = /\d\d?/,
			te = /\d\d\d\d?/,
			ne = /\d\d\d\d\d\d?/,
			re = /\d{1,3}/,
			oe = /\d{1,4}/,
			ae = /[+-]?\d{1,6}/,
			ie = /\d+/,
			se = /[+-]?\d+/,
			ue = /Z|[+-]\d\d:?\d\d/gi,
			de = /Z|[+-]\d\d(?::?\d\d)?/gi,
			le = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
			ce = {};
			function me(e, t, n) {
				ce[e] = H(t) ? t: function(e, r) {
					return e && n ? n: t
				}
			}
			function _e(e, t) {
				return m(ce, e) ? ce[e](t._strict, t._locale) : new RegExp(function(e) {
					return fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
					function(e, t, n, r, o) {
						return t || n || r || o
					}))
				} (e))
			}
			function fe(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}
			var pe = {};
			function ye(e, t) {
				var n, r = t;
				for ("string" == typeof e && (e = [e]), d(t) && (r = function(e, n) {
					n[t] = k(e)
				}), n = 0; n < e.length; n++) pe[e[n]] = r
			}
			function he(e, t) {
				ye(e,
				function(e, n, r, o) {
					r._w = r._w || {},
					t(e, r._w, r, o)
				})
			}
			function Me(e, t, n) {
				null != t && m(pe, e) && pe[e](t, n._a, n, e)
			}
			var ve = 0,
			Le = 1,
			be = 2,
			ge = 3,
			Ye = 4,
			ke = 5,
			Se = 6,
			De = 7,
			we = 8;
			function Te(e) {
				return xe(e) ? 366 : 365
			}
			function xe(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			}
			U("Y", 0, 0,
			function() {
				var e = this.year();
				return e <= 9999 ? "" + e: "+" + e
			}),
			U(0, ["YY", 2], 0,
			function() {
				return this.year() % 100
			}),
			U(0, ["YYYY", 4], 0, "year"),
			U(0, ["YYYYY", 5], 0, "year"),
			U(0, ["YYYYYY", 6, !0], 0, "year"),
			P("year", "y"),
			F("year", 1),
			me("Y", se),
			me("YY", ee, K),
			me("YYYY", oe, X),
			me("YYYYY", ae, Q),
			me("YYYYYY", ae, Q),
			ye(["YYYYY", "YYYYYY"], ve),
			ye("YYYY",
			function(e, t) {
				t[ve] = 2 === e.length ? o.parseTwoDigitYear(e) : k(e)
			}),
			ye("YY",
			function(e, t) {
				t[ve] = o.parseTwoDigitYear(e)
			}),
			ye("Y",
			function(e, t) {
				t[ve] = parseInt(e, 10)
			}),
			o.parseTwoDigitYear = function(e) {
				return k(e) + (k(e) > 68 ? 1900 : 2e3)
			};
			var je, He = Oe("FullYear", !0);
			function Oe(e, t) {
				return function(n) {
					return null != n ? (Ae(this, e, n), o.updateOffset(this, t), this) : Ee(this, e)
				}
			}
			function Ee(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC": "") + t]() : NaN
			}
			function Ae(e, t, n) {
				e.isValid() && !isNaN(n) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC": "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC": "") + t](n))
			}
			function Pe(e, t) {
				if (isNaN(e) || isNaN(t)) return NaN;
				var n = function(e, t) {
					return (e % t + t) % t
				} (t, 12);
				return e += (t - n) / 12,
				1 === n ? xe(e) ? 29 : 28 : 31 - n % 7 % 2
			}
			je = Array.prototype.indexOf ? Array.prototype.indexOf: function(e) {
				var t;
				for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
				return - 1
			},
			U("M", ["MM", 2], "Mo",
			function() {
				return this.month() + 1
			}),
			U("MMM", 0, 0,
			function(e) {
				return this.localeData().monthsShort(this, e)
			}),
			U("MMMM", 0, 0,
			function(e) {
				return this.localeData().months(this, e)
			}),
			P("month", "M"),
			F("month", 8),
			me("M", ee),
			me("MM", ee, K),
			me("MMM",
			function(e, t) {
				return t.monthsShortRegex(e)
			}),
			me("MMMM",
			function(e, t) {
				return t.monthsRegex(e)
			}),
			ye(["M", "MM"],
			function(e, t) {
				t[Le] = k(e) - 1
			}),
			ye(["MMM", "MMMM"],
			function(e, t, n, r) {
				var o = n._locale.monthsParse(e, r, n._strict);
				null != o ? t[Le] = o: p(n).invalidMonth = e
			});
			var Ce = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
			We = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
			var Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
			function Fe(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t) if (/^\d+$/.test(t)) t = k(t);
				else if (!d(t = e.localeData().monthsParse(t))) return e;
				return n = Math.min(e.date(), Pe(e.year(), t)),
				e._d["set" + (e._isUTC ? "UTC": "") + "Month"](t, n),
				e
			}
			function ze(e) {
				return null != e ? (Fe(this, e), o.updateOffset(this, !0), this) : Ee(this, "Month")
			}
			var Ie = le;
			var Re = le;
			function Je() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r = [],
				o = [],
				a = [];
				for (t = 0; t < 12; t++) n = f([2e3, t]),
				r.push(this.monthsShort(n, "")),
				o.push(this.months(n, "")),
				a.push(this.months(n, "")),
				a.push(this.monthsShort(n, ""));
				for (r.sort(e), o.sort(e), a.sort(e), t = 0; t < 12; t++) r[t] = fe(r[t]),
				o[t] = fe(o[t]);
				for (t = 0; t < 24; t++) a[t] = fe(a[t]);
				this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"),
				this._monthsShortRegex = this._monthsRegex,
				this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"),
				this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
			}
			function qe(e) {
				var t = new Date(Date.UTC.apply(null, arguments));
				return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
				t
			}
			function Ue(e, t, n) {
				var r = 7 + t - n;
				return - ((7 + qe(e, 0, r).getUTCDay() - t) % 7) + r - 1
			}
			function Ve(e, t, n, r, o) {
				var a, i, s = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ue(e, r, o);
				return s <= 0 ? i = Te(a = e - 1) + s: s > Te(e) ? (a = e + 1, i = s - Te(e)) : (a = e, i = s),
				{
					year: a,
					dayOfYear: i
				}
			}
			function Be(e, t, n) {
				var r, o, a = Ue(e.year(), t, n),
				i = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
				return i < 1 ? r = i + Ge(o = e.year() - 1, t, n) : i > Ge(e.year(), t, n) ? (r = i - Ge(e.year(), t, n), o = e.year() + 1) : (o = e.year(), r = i),
				{
					week: r,
					year: o
				}
			}
			function Ge(e, t, n) {
				var r = Ue(e, t, n),
				o = Ue(e + 1, t, n);
				return (Te(e) - r + o) / 7
			}
			U("w", ["ww", 2], "wo", "week"),
			U("W", ["WW", 2], "Wo", "isoWeek"),
			P("week", "w"),
			P("isoWeek", "W"),
			F("week", 5),
			F("isoWeek", 5),
			me("w", ee),
			me("ww", ee, K),
			me("W", ee),
			me("WW", ee, K),
			he(["w", "ww", "W", "WW"],
			function(e, t, n, r) {
				t[r.substr(0, 1)] = k(e)
			});
			U("d", 0, "do", "day"),
			U("dd", 0, 0,
			function(e) {
				return this.localeData().weekdaysMin(this, e)
			}),
			U("ddd", 0, 0,
			function(e) {
				return this.localeData().weekdaysShort(this, e)
			}),
			U("dddd", 0, 0,
			function(e) {
				return this.localeData().weekdays(this, e)
			}),
			U("e", 0, 0, "weekday"),
			U("E", 0, 0, "isoWeekday"),
			P("day", "d"),
			P("weekday", "e"),
			P("isoWeekday", "E"),
			F("day", 11),
			F("weekday", 11),
			F("isoWeekday", 11),
			me("d", ee),
			me("e", ee),
			me("E", ee),
			me("dd",
			function(e, t) {
				return t.weekdaysMinRegex(e)
			}),
			me("ddd",
			function(e, t) {
				return t.weekdaysShortRegex(e)
			}),
			me("dddd",
			function(e, t) {
				return t.weekdaysRegex(e)
			}),
			he(["dd", "ddd", "dddd"],
			function(e, t, n, r) {
				var o = n._locale.weekdaysParse(e, r, n._strict);
				null != o ? t.d = o: p(n).invalidWeekday = e
			}),
			he(["d", "e", "E"],
			function(e, t, n, r) {
				t[r] = k(e)
			});
			var $e = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
			var Ke = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
			var Ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
			var Xe = le;
			var Qe = le;
			var et = le;
			function tt() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r, o, a, i = [],
				s = [],
				u = [],
				d = [];
				for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t),
				r = this.weekdaysMin(n, ""),
				o = this.weekdaysShort(n, ""),
				a = this.weekdays(n, ""),
				i.push(r),
				s.push(o),
				u.push(a),
				d.push(r),
				d.push(o),
				d.push(a);
				for (i.sort(e), s.sort(e), u.sort(e), d.sort(e), t = 0; t < 7; t++) s[t] = fe(s[t]),
				u[t] = fe(u[t]),
				d[t] = fe(d[t]);
				this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"),
				this._weekdaysShortRegex = this._weekdaysRegex,
				this._weekdaysMinRegex = this._weekdaysRegex,
				this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"),
				this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"),
				this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
			}
			function nt() {
				return this.hours() % 12 || 12
			}
			function rt(e, t) {
				U(e, 0, 0,
				function() {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}
			function ot(e, t) {
				return t._meridiemParse
			}
			U("H", ["HH", 2], 0, "hour"),
			U("h", ["hh", 2], 0, nt),
			U("k", ["kk", 2], 0,
			function() {
				return this.hours() || 24
			}),
			U("hmm", 0, 0,
			function() {
				return "" + nt.apply(this) + z(this.minutes(), 2)
			}),
			U("hmmss", 0, 0,
			function() {
				return "" + nt.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
			}),
			U("Hmm", 0, 0,
			function() {
				return "" + this.hours() + z(this.minutes(), 2)
			}),
			U("Hmmss", 0, 0,
			function() {
				return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
			}),
			rt("a", !0),
			rt("A", !1),
			P("hour", "h"),
			F("hour", 13),
			me("a", ot),
			me("A", ot),
			me("H", ee),
			me("h", ee),
			me("k", ee),
			me("HH", ee, K),
			me("hh", ee, K),
			me("kk", ee, K),
			me("hmm", te),
			me("hmmss", ne),
			me("Hmm", te),
			me("Hmmss", ne),
			ye(["H", "HH"], ge),
			ye(["k", "kk"],
			function(e, t, n) {
				var r = k(e);
				t[ge] = 24 === r ? 0 : r
			}),
			ye(["a", "A"],
			function(e, t, n) {
				n._isPm = n._locale.isPM(e),
				n._meridiem = e
			}),
			ye(["h", "hh"],
			function(e, t, n) {
				t[ge] = k(e),
				p(n).bigHour = !0
			}),
			ye("hmm",
			function(e, t, n) {
				var r = e.length - 2;
				t[ge] = k(e.substr(0, r)),
				t[Ye] = k(e.substr(r)),
				p(n).bigHour = !0
			}),
			ye("hmmss",
			function(e, t, n) {
				var r = e.length - 4,
				o = e.length - 2;
				t[ge] = k(e.substr(0, r)),
				t[Ye] = k(e.substr(r, 2)),
				t[ke] = k(e.substr(o)),
				p(n).bigHour = !0
			}),
			ye("Hmm",
			function(e, t, n) {
				var r = e.length - 2;
				t[ge] = k(e.substr(0, r)),
				t[Ye] = k(e.substr(r))
			}),
			ye("Hmmss",
			function(e, t, n) {
				var r = e.length - 4,
				o = e.length - 2;
				t[ge] = k(e.substr(0, r)),
				t[Ye] = k(e.substr(r, 2)),
				t[ke] = k(e.substr(o))
			});
			var at, it = Oe("Hours", !0),
			st = {
				calendar: {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				},
				longDateFormat: {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				},
				invalidDate: "Invalid date",
				ordinal: "%d",
				dayOfMonthOrdinalParse: /\d{1,2}/,
				relativeTime: {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				},
				months: We,
				monthsShort: Ne,
				week: {
					dow: 0,
					doy: 6
				},
				weekdays: $e,
				weekdaysMin: Ze,
				weekdaysShort: Ke,
				meridiemParse: /[ap]\.?m?\.?/i
			},
			ut = {},
			dt = {};
			function lt(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}
			function ct(t) {
				var r = null;
				if (!ut[t] && void 0 !== e && e && e.exports) try {
					r = at._abbr;
					n(131)("./" + t),
					mt(r)
				} catch(e) {}
				return ut[t]
			}
			function mt(e, t) {
				var n;
				return e && ((n = u(t) ? ft(e) : _t(e, t)) ? at = n: "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
				at._abbr
			}
			function _t(e, t) {
				if (null !== t) {
					var n, r = st;
					if (t.abbr = e, null != ut[e]) j("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
					r = ut[e]._config;
					else if (null != t.parentLocale) if (null != ut[t.parentLocale]) r = ut[t.parentLocale]._config;
					else {
						if (null == (n = ct(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []),
						dt[t.parentLocale].push({
							name: e,
							config: t
						}),
						null;
						r = n._config
					}
					return ut[e] = new E(O(r, t)),
					dt[e] && dt[e].forEach(function(e) {
						_t(e.name, e.config)
					}),
					mt(e),
					ut[e]
				}
				return delete ut[e],
				null
			}
			function ft(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return at;
				if (!i(e)) {
					if (t = ct(e)) return t;
					e = [e]
				}
				return function(e) {
					for (var t, n, r, o, a = 0; a < e.length;) {
						for (t = (o = lt(e[a]).split("-")).length, n = (n = lt(e[a + 1])) ? n.split("-") : null; t > 0;) {
							if (r = ct(o.slice(0, t).join("-"))) return r;
							if (n && n.length >= t && S(o, n, !0) >= t - 1) break;
							t--
						}
						a++
					}
					return at
				} (e)
			}
			function pt(e) {
				var t, n = e._a;
				return n && -2 === p(e).overflow && (t = n[Le] < 0 || n[Le] > 11 ? Le: n[be] < 1 || n[be] > Pe(n[ve], n[Le]) ? be: n[ge] < 0 || n[ge] > 24 || 24 === n[ge] && (0 !== n[Ye] || 0 !== n[ke] || 0 !== n[Se]) ? ge: n[Ye] < 0 || n[Ye] > 59 ? Ye: n[ke] < 0 || n[ke] > 59 ? ke: n[Se] < 0 || n[Se] > 999 ? Se: -1, p(e)._overflowDayOfYear && (t < ve || t > be) && (t = be), p(e)._overflowWeeks && -1 === t && (t = De), p(e)._overflowWeekday && -1 === t && (t = we), p(e).overflow = t),
				e
			}
			function yt(e, t, n) {
				return null != e ? e: null != t ? t: n
			}
			function ht(e) {
				var t, n, r, a, i, s = [];
				if (!e._d) {
					for (r = function(e) {
						var t = new Date(o.now());
						return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
					} (e), e._w && null == e._a[be] && null == e._a[Le] &&
					function(e) {
						var t, n, r, o, a, i, s, u;
						if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1,
						i = 4,
						n = yt(t.GG, e._a[ve], Be(Ot(), 1, 4).year),
						r = yt(t.W, 1),
						((o = yt(t.E, 1)) < 1 || o > 7) && (u = !0);
						else {
							a = e._locale._week.dow,
							i = e._locale._week.doy;
							var d = Be(Ot(), a, i);
							n = yt(t.gg, e._a[ve], d.year),
							r = yt(t.w, d.week),
							null != t.d ? ((o = t.d) < 0 || o > 6) && (u = !0) : null != t.e ? (o = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : o = a
						}
						r < 1 || r > Ge(n, a, i) ? p(e)._overflowWeeks = !0 : null != u ? p(e)._overflowWeekday = !0 : (s = Ve(n, r, o, a, i), e._a[ve] = s.year, e._dayOfYear = s.dayOfYear)
					} (e), null != e._dayOfYear && (i = yt(e._a[ve], r[ve]), (e._dayOfYear > Te(i) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0), n = qe(i, 0, e._dayOfYear), e._a[Le] = n.getUTCMonth(), e._a[be] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
					for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[ge] && 0 === e._a[Ye] && 0 === e._a[ke] && 0 === e._a[Se] && (e._nextDay = !0, e._a[ge] = 0),
					e._d = (e._useUTC ? qe: function(e, t, n, r, o, a, i) {
						var s = new Date(e, t, n, r, o, a, i);
						return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e),
						s
					}).apply(null, s),
					a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
					null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
					e._nextDay && (e._a[ge] = 24),
					e._w && void 0 !== e._w.d && e._w.d !== a && (p(e).weekdayMismatch = !0)
				}
			}
			var Mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			Lt = /Z|[+-]\d\d(?::?\d\d)?/,
			bt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
			gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
			Yt = /^\/?Date\((\-?\d+)/i;
			function kt(e) {
				var t, n, r, o, a, i, s = e._i,
				u = Mt.exec(s) || vt.exec(s);
				if (u) {
					for (p(e).iso = !0, t = 0, n = bt.length; t < n; t++) if (bt[t][1].exec(u[1])) {
						o = bt[t][0],
						r = !1 !== bt[t][2];
						break
					}
					if (null == o) return void(e._isValid = !1);
					if (u[3]) {
						for (t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(u[3])) {
							a = (u[2] || " ") + gt[t][0];
							break
						}
						if (null == a) return void(e._isValid = !1)
					}
					if (!r && null != a) return void(e._isValid = !1);
					if (u[4]) {
						if (!Lt.exec(u[4])) return void(e._isValid = !1);
						i = "Z"
					}
					e._f = o + (a || "") + (i || ""),
					xt(e)
				} else e._isValid = !1
			}
			var St = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
			function Dt(e, t, n, r, o, a) {
				var i = [function(e) {
					var t = parseInt(e, 10);
					if (t <= 49) return 2e3 + t;
					if (t <= 999) return 1900 + t;
					return t
				} (e), Ne.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10)];
				return a && i.push(parseInt(a, 10)),
				i
			}
			var wt = {
				UT: 0,
				GMT: 0,
				EDT: -240,
				EST: -300,
				CDT: -300,
				CST: -360,
				MDT: -360,
				MST: -420,
				PDT: -420,
				PST: -480
			};
			function Tt(e) {
				var t = St.exec(function(e) {
					return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
				} (e._i));
				if (t) {
					var n = Dt(t[4], t[3], t[2], t[5], t[6], t[7]);
					if (!
					function(e, t, n) {
						return ! e || Ke.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (p(n).weekdayMismatch = !0, n._isValid = !1, !1)
					} (t[1], n, e)) return;
					e._a = n,
					e._tzm = function(e, t, n) {
						if (e) return wt[e];
						if (t) return 0;
						var r = parseInt(n, 10),
						o = r % 100;
						return (r - o) / 100 * 60 + o
					} (t[8], t[9], t[10]),
					e._d = qe.apply(null, e._a),
					e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
					p(e).rfc2822 = !0
				} else e._isValid = !1
			}
			function xt(e) {
				if (e._f !== o.ISO_8601) if (e._f !== o.RFC_2822) {
					e._a = [],
					p(e).empty = !0;
					var t, n, r, a, i, s = "" + e._i,
					u = s.length,
					d = 0;
					for (r = G(e._f, e._locale).match(I) || [], t = 0; t < r.length; t++) a = r[t],
					(n = (s.match(_e(a, e)) || [])[0]) && ((i = s.substr(0, s.indexOf(n))).length > 0 && p(e).unusedInput.push(i), s = s.slice(s.indexOf(n) + n.length), d += n.length),
					q[a] ? (n ? p(e).empty = !1 : p(e).unusedTokens.push(a), Me(a, n, e)) : e._strict && !n && p(e).unusedTokens.push(a);
					p(e).charsLeftOver = u - d,
					s.length > 0 && p(e).unusedInput.push(s),
					e._a[ge] <= 12 && !0 === p(e).bigHour && e._a[ge] > 0 && (p(e).bigHour = void 0),
					p(e).parsedDateParts = e._a.slice(0),
					p(e).meridiem = e._meridiem,
					e._a[ge] = function(e, t, n) {
						var r;
						if (null == n) return t;
						return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
					} (e._locale, e._a[ge], e._meridiem),
					ht(e),
					pt(e)
				} else Tt(e);
				else kt(e)
			}
			function jt(e) {
				var t = e._i,
				n = e._f;
				return e._locale = e._locale || ft(e._l),
				null === t || void 0 === n && "" === t ? h({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new b(pt(t)) : (l(t) ? e._d = t: i(n) ?
				function(e) {
					var t, n, r, o, a;
					if (0 === e._f.length) return p(e).invalidFormat = !0,
					void(e._d = new Date(NaN));
					for (o = 0; o < e._f.length; o++) a = 0,
					t = v({},
					e),
					null != e._useUTC && (t._useUTC = e._useUTC),
					t._f = e._f[o],
					xt(t),
					y(t) && (a += p(t).charsLeftOver, a += 10 * p(t).unusedTokens.length, p(t).score = a, (null == r || a < r) && (r = a, n = t));
					_(e, n || t)
				} (e) : n ? xt(e) : function(e) {
					var t = e._i;
					u(t) ? e._d = new Date(o.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ?
					function(e) {
						var t = Yt.exec(e._i);
						null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Tt(e), !1 === e._isValid && (delete e._isValid, o.createFromInputFallback(e)))) : e._d = new Date( + t[1])
					} (e) : i(t) ? (e._a = c(t.slice(0),
					function(e) {
						return parseInt(e, 10)
					}), ht(e)) : s(t) ?
					function(e) {
						if (!e._d) {
							var t = W(e._i);
							e._a = c([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
							function(e) {
								return e && parseInt(e, 10)
							}),
							ht(e)
						}
					} (e) : d(t) ? e._d = new Date(t) : o.createFromInputFallback(e)
				} (e), y(e) || (e._d = null), e))
			}
			function Ht(e, t, n, r, o) {
				var a = {};
				return ! 0 !== n && !1 !== n || (r = n, n = void 0),
				(s(e) &&
				function(e) {
					if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
					var t;
					for (t in e) if (e.hasOwnProperty(t)) return ! 1;
					return ! 0
				} (e) || i(e) && 0 === e.length) && (e = void 0),
				a._isAMomentObject = !0,
				a._useUTC = a._isUTC = o,
				a._l = n,
				a._i = e,
				a._f = t,
				a._strict = r,
				function(e) {
					var t = new b(pt(jt(e)));
					return t._nextDay && (t.add(1, "d"), t._nextDay = void 0),
					t
				} (a)
			}
			function Ot(e, t, n, r) {
				return Ht(e, t, n, r, !1)
			}
			o.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
			function(e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC": ""))
			}),
			o.ISO_8601 = function() {},
			o.RFC_2822 = function() {};
			var Et = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
			function() {
				var e = Ot.apply(null, arguments);
				return this.isValid() && e.isValid() ? e < this ? this: e: h()
			}),
			At = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
			function() {
				var e = Ot.apply(null, arguments);
				return this.isValid() && e.isValid() ? e > this ? this: e: h()
			});
			function Pt(e, t) {
				var n, r;
				if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return Ot();
				for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
				return n
			}
			var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
			function Wt(e) {
				var t = W(e),
				n = t.year || 0,
				r = t.quarter || 0,
				o = t.month || 0,
				a = t.week || 0,
				i = t.day || 0,
				s = t.hour || 0,
				u = t.minute || 0,
				d = t.second || 0,
				l = t.millisecond || 0;
				this._isValid = function(e) {
					for (var t in e) if ( - 1 === je.call(Ct, t) || null != e[t] && isNaN(e[t])) return ! 1;
					for (var n = !1,
					r = 0; r < Ct.length; ++r) if (e[Ct[r]]) {
						if (n) return ! 1;
						parseFloat(e[Ct[r]]) !== k(e[Ct[r]]) && (n = !0)
					}
					return ! 0
				} (t),
				this._milliseconds = +l + 1e3 * d + 6e4 * u + 1e3 * s * 60 * 60,
				this._days = +i + 7 * a,
				this._months = +o + 3 * r + 12 * n,
				this._data = {},
				this._locale = ft(),
				this._bubble()
			}
			function Nt(e) {
				return e instanceof Wt
			}
			function Ft(e) {
				return e < 0 ? -1 * Math.round( - 1 * e) : Math.round(e)
			}
			function zt(e, t) {
				U(e, 0, 0,
				function() {
					var e = this.utcOffset(),
					n = "+";
					return e < 0 && (e = -e, n = "-"),
					n + z(~~ (e / 60), 2) + t + z(~~e % 60, 2)
				})
			}
			zt("Z", ":"),
			zt("ZZ", ""),
			me("Z", de),
			me("ZZ", de),
			ye(["Z", "ZZ"],
			function(e, t, n) {
				n._useUTC = !0,
				n._tzm = Rt(de, e)
			});
			var It = /([\+\-]|\d\d)/gi;
			function Rt(e, t) {
				var n = (t || "").match(e);
				if (null === n) return null;
				var r = ((n[n.length - 1] || []) + "").match(It) || ["-", 0, 0],
				o = 60 * r[1] + k(r[2]);
				return 0 === o ? 0 : "+" === r[0] ? o: -o
			}
			function Jt(e, t) {
				var n, r;
				return t._isUTC ? (n = t.clone(), r = (g(e) || l(e) ? e.valueOf() : Ot(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), o.updateOffset(n, !1), n) : Ot(e).local()
			}
			function qt(e) {
				return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
			}
			function Ut() {
				return !! this.isValid() && (this._isUTC && 0 === this._offset)
			}
			o.updateOffset = function() {};
			var Vt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
			Bt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
			function Gt(e, t) {
				var n, r, o, i = e,
				s = null;
				return Nt(e) ? i = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				}: d(e) ? (i = {},
				t ? i[t] = e: i.milliseconds = e) : (s = Vt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
					y: 0,
					d: k(s[be]) * n,
					h: k(s[ge]) * n,
					m: k(s[Ye]) * n,
					s: k(s[ke]) * n,
					ms: k(Ft(1e3 * s[Se])) * n
				}) : (s = Bt.exec(e)) ? (n = "-" === s[1] ? -1 : (s[1], 1), i = {
					y: $t(s[2], n),
					M: $t(s[3], n),
					w: $t(s[4], n),
					d: $t(s[5], n),
					h: $t(s[6], n),
					m: $t(s[7], n),
					s: $t(s[8], n)
				}) : null == i ? i = {}: "object" === (void 0 === i ? "undefined": a(i)) && ("from" in i || "to" in i) && (o = function(e, t) {
					var n;
					if (!e.isValid() || !t.isValid()) return {
						milliseconds: 0,
						months: 0
					};
					t = Jt(t, e),
					e.isBefore(t) ? n = Kt(e, t) : ((n = Kt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
					return n
				} (Ot(i.from), Ot(i.to)), (i = {}).ms = o.milliseconds, i.M = o.months),
				r = new Wt(i),
				Nt(e) && m(e, "_locale") && (r._locale = e._locale),
				r
			}
			function $t(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}
			function Kt(e, t) {
				var n = {
					milliseconds: 0,
					months: 0
				};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
				e.clone().add(n.months, "M").isAfter(t) && --n.months,
				n.milliseconds = +t - +e.clone().add(n.months, "M"),
				n
			}
			function Zt(e, t) {
				return function(n, r) {
					var o;
					return null === r || isNaN( + r) || (j(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o),
					Xt(this, Gt(n = "string" == typeof n ? +n: n, r), e),
					this
				}
			}
			function Xt(e, t, n, r) {
				var a = t._milliseconds,
				i = Ft(t._days),
				s = Ft(t._months);
				e.isValid() && (r = null == r || r, s && Fe(e, Ee(e, "Month") + s * n), i && Ae(e, "Date", Ee(e, "Date") + i * n), a && e._d.setTime(e._d.valueOf() + a * n), r && o.updateOffset(e, i || s))
			}
			Gt.fn = Wt.prototype,
			Gt.invalid = function() {
				return Gt(NaN)
			};
			var Qt = Zt(1, "add"),
			en = Zt( - 1, "subtract");
			function tn(e, t) {
				var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
				r = e.clone().add(n, "months");
				return - (n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
			}
			function nn(e) {
				var t;
				return void 0 === e ? this._locale._abbr: (null != (t = ft(e)) && (this._locale = t), this)
			}
			o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
			o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var rn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
			function(e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});
			function on() {
				return this._locale
			}
			function an(e, t) {
				U(0, [e, e.length], 0, t)
			}
			function sn(e, t, n, r, o) {
				var a;
				return null == e ? Be(this, r, o).year: (t > (a = Ge(e, r, o)) && (t = a),
				function(e, t, n, r, o) {
					var a = Ve(e, t, n, r, o),
					i = qe(a.year, 0, a.dayOfYear);
					return this.year(i.getUTCFullYear()),
					this.month(i.getUTCMonth()),
					this.date(i.getUTCDate()),
					this
				}.call(this, e, t, n, r, o))
			}
			U(0, ["gg", 2], 0,
			function() {
				return this.weekYear() % 100
			}),
			U(0, ["GG", 2], 0,
			function() {
				return this.isoWeekYear() % 100
			}),
			an("gggg", "weekYear"),
			an("ggggg", "weekYear"),
			an("GGGG", "isoWeekYear"),
			an("GGGGG", "isoWeekYear"),
			P("weekYear", "gg"),
			P("isoWeekYear", "GG"),
			F("weekYear", 1),
			F("isoWeekYear", 1),
			me("G", se),
			me("g", se),
			me("GG", ee, K),
			me("gg", ee, K),
			me("GGGG", oe, X),
			me("gggg", oe, X),
			me("GGGGG", ae, Q),
			me("ggggg", ae, Q),
			he(["gggg", "ggggg", "GGGG", "GGGGG"],
			function(e, t, n, r) {
				t[r.substr(0, 2)] = k(e)
			}),
			he(["gg", "GG"],
			function(e, t, n, r) {
				t[r] = o.parseTwoDigitYear(e)
			}),
			U("Q", 0, "Qo", "quarter"),
			P("quarter", "Q"),
			F("quarter", 7),
			me("Q", $),
			ye("Q",
			function(e, t) {
				t[Le] = 3 * (k(e) - 1)
			}),
			U("D", ["DD", 2], "Do", "date"),
			P("date", "D"),
			F("date", 9),
			me("D", ee),
			me("DD", ee, K),
			me("Do",
			function(e, t) {
				return e ? t._dayOfMonthOrdinalParse || t._ordinalParse: t._dayOfMonthOrdinalParseLenient
			}),
			ye(["D", "DD"], be),
			ye("Do",
			function(e, t) {
				t[be] = k(e.match(ee)[0])
			});
			var un = Oe("Date", !0);
			U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
			P("dayOfYear", "DDD"),
			F("dayOfYear", 4),
			me("DDD", re),
			me("DDDD", Z),
			ye(["DDD", "DDDD"],
			function(e, t, n) {
				n._dayOfYear = k(e)
			}),
			U("m", ["mm", 2], 0, "minute"),
			P("minute", "m"),
			F("minute", 14),
			me("m", ee),
			me("mm", ee, K),
			ye(["m", "mm"], Ye);
			var dn = Oe("Minutes", !1);
			U("s", ["ss", 2], 0, "second"),
			P("second", "s"),
			F("second", 15),
			me("s", ee),
			me("ss", ee, K),
			ye(["s", "ss"], ke);
			var ln, cn = Oe("Seconds", !1);
			for (U("S", 0, 0,
			function() {
				return~~ (this.millisecond() / 100)
			}), U(0, ["SS", 2], 0,
			function() {
				return~~ (this.millisecond() / 10)
			}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0,
			function() {
				return 10 * this.millisecond()
			}), U(0, ["SSSSS", 5], 0,
			function() {
				return 100 * this.millisecond()
			}), U(0, ["SSSSSS", 6], 0,
			function() {
				return 1e3 * this.millisecond()
			}), U(0, ["SSSSSSS", 7], 0,
			function() {
				return 1e4 * this.millisecond()
			}), U(0, ["SSSSSSSS", 8], 0,
			function() {
				return 1e5 * this.millisecond()
			}), U(0, ["SSSSSSSSS", 9], 0,
			function() {
				return 1e6 * this.millisecond()
			}), P("millisecond", "ms"), F("millisecond", 16), me("S", re, $), me("SS", re, K), me("SSS", re, Z), ln = "SSSS"; ln.length <= 9; ln += "S") me(ln, ie);
			function mn(e, t) {
				t[Se] = k(1e3 * ("0." + e))
			}
			for (ln = "S"; ln.length <= 9; ln += "S") ye(ln, mn);
			var _n = Oe("Milliseconds", !1);
			U("z", 0, 0, "zoneAbbr"),
			U("zz", 0, 0, "zoneName");
			var fn = b.prototype;
			function pn(e) {
				return e
			}
			fn.add = Qt,
			fn.calendar = function(e, t) {
				var n = e || Ot(),
				r = Jt(n, this).startOf("day"),
				a = o.calendarFormat(this, r) || "sameElse",
				i = t && (H(t[a]) ? t[a].call(this, n) : t[a]);
				return this.format(i || this.localeData().calendar(a, this, Ot(n)))
			},
			fn.clone = function() {
				return new b(this)
			},
			fn.diff = function(e, t, n) {
				var r, o, a;
				if (!this.isValid()) return NaN;
				if (! (r = Jt(e, this)).isValid()) return NaN;
				switch (o = 6e4 * (r.utcOffset() - this.utcOffset()), t = C(t)) {
				case "year":
					a = tn(this, r) / 12;
					break;
				case "month":
					a = tn(this, r);
					break;
				case "quarter":
					a = tn(this, r) / 3;
					break;
				case "second":
					a = (this - r) / 1e3;
					break;
				case "minute":
					a = (this - r) / 6e4;
					break;
				case "hour":
					a = (this - r) / 36e5;
					break;
				case "day":
					a = (this - r - o) / 864e5;
					break;
				case "week":
					a = (this - r - o) / 6048e5;
					break;
				default:
					a = this - r
				}
				return n ? a: Y(a)
			},
			fn.endOf = function(e) {
				return void 0 === (e = C(e)) || "millisecond" === e ? this: ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week": e).subtract(1, "ms"))
			},
			fn.format = function(e) {
				e || (e = this.isUtc() ? o.defaultFormatUtc: o.defaultFormat);
				var t = B(this, e);
				return this.localeData().postformat(t)
			},
			fn.from = function(e, t) {
				return this.isValid() && (g(e) && e.isValid() || Ot(e).isValid()) ? Gt({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			},
			fn.fromNow = function(e) {
				return this.from(Ot(), e)
			},
			fn.to = function(e, t) {
				return this.isValid() && (g(e) && e.isValid() || Ot(e).isValid()) ? Gt({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			},
			fn.toNow = function(e) {
				return this.to(Ot(), e)
			},
			fn.get = function(e) {
				return H(this[e = C(e)]) ? this[e]() : this
			},
			fn.invalidAt = function() {
				return p(this).overflow
			},
			fn.isAfter = function(e, t) {
				var n = g(e) ? e: Ot(e);
				return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = C(u(t) ? "millisecond": t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
			},
			fn.isBefore = function(e, t) {
				var n = g(e) ? e: Ot(e);
				return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = C(u(t) ? "millisecond": t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
			},
			fn.isBetween = function(e, t, n, r) {
				return ("(" === (r = r || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
			},
			fn.isSame = function(e, t) {
				var n, r = g(e) ? e: Ot(e);
				return ! (!this.isValid() || !r.isValid()) && ("millisecond" === (t = C(t || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
			},
			fn.isSameOrAfter = function(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			},
			fn.isSameOrBefore = function(e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			},
			fn.isValid = function() {
				return y(this)
			},
			fn.lang = rn,
			fn.locale = nn,
			fn.localeData = on,
			fn.max = At,
			fn.min = Et,
			fn.parsingFlags = function() {
				return _({},
				p(this))
			},
			fn.set = function(e, t) {
				if ("object" === (void 0 === e ? "undefined": a(e))) for (var n = function(e) {
					var t = [];
					for (var n in e) t.push({
						unit: n,
						priority: N[n]
					});
					return t.sort(function(e, t) {
						return e.priority - t.priority
					}),
					t
				} (e = W(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
				else if (H(this[e = C(e)])) return this[e](t);
				return this
			},
			fn.startOf = function(e) {
				switch (e = C(e)) {
				case "year":
					this.month(0);
				case "quarter":
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
				case "date":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0)
				}
				return "week" === e && this.weekday(0),
				"isoWeek" === e && this.isoWeekday(1),
				"quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
				this
			},
			fn.subtract = en,
			fn.toArray = function() {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			},
			fn.toObject = function() {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			},
			fn.toDate = function() {
				return new Date(this.valueOf())
			},
			fn.toISOString = function(e) {
				if (!this.isValid()) return null;
				var t = !0 !== e,
				n = t ? this.clone().utc() : this;
				return n.year() < 0 || n.year() > 9999 ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
			},
			fn.inspect = function() {
				if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
				var e = "moment",
				t = "";
				this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", t = "Z");
				var n = "[" + e + '("]',
				r = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
				o = t + '[")]';
				return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + o)
			},
			fn.toJSON = function() {
				return this.isValid() ? this.toISOString() : null
			},
			fn.toString = function() {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			},
			fn.unix = function() {
				return Math.floor(this.valueOf() / 1e3)
			},
			fn.valueOf = function() {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			},
			fn.creationData = function() {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			},
			fn.year = He,
			fn.isLeapYear = function() {
				return xe(this.year())
			},
			fn.weekYear = function(e) {
				return sn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			},
			fn.isoWeekYear = function(e) {
				return sn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			},
			fn.quarter = fn.quarters = function(e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			},
			fn.month = ze,
			fn.daysInMonth = function() {
				return Pe(this.year(), this.month())
			},
			fn.week = fn.weeks = function(e) {
				var t = this.localeData().week(this);
				return null == e ? t: this.add(7 * (e - t), "d")
			},
			fn.isoWeek = fn.isoWeeks = function(e) {
				var t = Be(this, 1, 4).week;
				return null == e ? t: this.add(7 * (e - t), "d")
			},
			fn.weeksInYear = function() {
				var e = this.localeData()._week;
				return Ge(this.year(), e.dow, e.doy)
			},
			fn.isoWeeksInYear = function() {
				return Ge(this.year(), 1, 4)
			},
			fn.date = un,
			fn.day = fn.days = function(e) {
				if (!this.isValid()) return null != e ? this: NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = function(e, t) {
					return "string" != typeof e ? e: isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e: null: parseInt(e, 10)
				} (e, this.localeData()), this.add(e - t, "d")) : t
			},
			fn.weekday = function(e) {
				if (!this.isValid()) return null != e ? this: NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t: this.add(e - t, "d")
			},
			fn.isoWeekday = function(e) {
				if (!this.isValid()) return null != e ? this: NaN;
				if (null != e) {
					var t = function(e, t) {
						return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null: e
					} (e, this.localeData());
					return this.day(this.day() % 7 ? t: t - 7)
				}
				return this.day() || 7
			},
			fn.dayOfYear = function(e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t: this.add(e - t, "d")
			},
			fn.hour = fn.hours = it,
			fn.minute = fn.minutes = dn,
			fn.second = fn.seconds = cn,
			fn.millisecond = fn.milliseconds = _n,
			fn.utcOffset = function(e, t, n) {
				var r, a = this._offset || 0;
				if (!this.isValid()) return null != e ? this: NaN;
				if (null != e) {
					if ("string" == typeof e) {
						if (null === (e = Rt(de, e))) return this
					} else Math.abs(e) < 16 && !n && (e *= 60);
					return ! this._isUTC && t && (r = qt(this)),
					this._offset = e,
					this._isUTC = !0,
					null != r && this.add(r, "m"),
					a !== e && (!t || this._changeInProgress ? Xt(this, Gt(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)),
					this
				}
				return this._isUTC ? a: qt(this)
			},
			fn.utc = function(e) {
				return this.utcOffset(0, e)
			},
			fn.local = function(e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(qt(this), "m")),
				this
			},
			fn.parseZone = function() {
				if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
				else if ("string" == typeof this._i) {
					var e = Rt(ue, this._i);
					null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
				}
				return this
			},
			fn.hasAlignedHourOffset = function(e) {
				return !! this.isValid() && (e = e ? Ot(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
			},
			fn.isDST = function() {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			},
			fn.isLocal = function() {
				return !! this.isValid() && !this._isUTC
			},
			fn.isUtcOffset = function() {
				return !! this.isValid() && this._isUTC
			},
			fn.isUtc = Ut,
			fn.isUTC = Ut,
			fn.zoneAbbr = function() {
				return this._isUTC ? "UTC": ""
			},
			fn.zoneName = function() {
				return this._isUTC ? "Coordinated Universal Time": ""
			},
			fn.dates = w("dates accessor is deprecated. Use date instead.", un),
			fn.months = w("months accessor is deprecated. Use month instead", ze),
			fn.years = w("years accessor is deprecated. Use year instead", He),
			fn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
			function(e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}),
			fn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
			function() {
				if (!u(this._isDSTShifted)) return this._isDSTShifted;
				var e = {};
				if (v(e, this), (e = jt(e))._a) {
					var t = e._isUTC ? f(e._a) : Ot(e._a);
					this._isDSTShifted = this.isValid() && S(e._a, t.toArray()) > 0
				} else this._isDSTShifted = !1;
				return this._isDSTShifted
			});
			var yn = E.prototype;
			function hn(e, t, n, r) {
				var o = ft(),
				a = f().set(r, t);
				return o[n](a, e)
			}
			function Mn(e, t, n) {
				if (d(e) && (t = e, e = void 0), e = e || "", null != t) return hn(e, t, n, "month");
				var r, o = [];
				for (r = 0; r < 12; r++) o[r] = hn(e, r, n, "month");
				return o
			}
			function vn(e, t, n, r) {
				"boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || "");
				var o, a = ft(),
				i = e ? a._week.dow: 0;
				if (null != n) return hn(t, (n + i) % 7, r, "day");
				var s = [];
				for (o = 0; o < 7; o++) s[o] = hn(t, (o + i) % 7, r, "day");
				return s
			}
			yn.calendar = function(e, t, n) {
				var r = this._calendar[e] || this._calendar.sameElse;
				return H(r) ? r.call(t, n) : r
			},
			yn.longDateFormat = function(e) {
				var t = this._longDateFormat[e],
				n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t: (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g,
				function(e) {
					return e.slice(1)
				}), this._longDateFormat[e])
			},
			yn.invalidDate = function() {
				return this._invalidDate
			},
			yn.ordinal = function(e) {
				return this._ordinal.replace("%d", e)
			},
			yn.preparse = pn,
			yn.postformat = pn,
			yn.relativeTime = function(e, t, n, r) {
				var o = this._relativeTime[n];
				return H(o) ? o(e, t, n, r) : o.replace(/%d/i, e)
			},
			yn.pastFuture = function(e, t) {
				var n = this._relativeTime[e > 0 ? "future": "past"];
				return H(n) ? n(t) : n.replace(/%s/i, t)
			},
			yn.set = function(e) {
				var t, n;
				for (n in e) H(t = e[n]) ? this[n] = t: this["_" + n] = t;
				this._config = e,
				this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
			},
			yn.months = function(e, t) {
				return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ce).test(t) ? "format": "standalone"][e.month()] : i(this._months) ? this._months: this._months.standalone
			},
			yn.monthsShort = function(e, t) {
				return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ce.test(t) ? "format": "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
			},
			yn.monthsParse = function(e, t, n) {
				var r, o, a;
				if (this._monthsParseExact) return function(e, t, n) {
					var r, o, a, i = e.toLocaleLowerCase();
					if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = f([2e3, r]),
					this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(),
					this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
					return n ? "MMM" === t ? -1 !== (o = je.call(this._shortMonthsParse, i)) ? o: null: -1 !== (o = je.call(this._longMonthsParse, i)) ? o: null: "MMM" === t ? -1 !== (o = je.call(this._shortMonthsParse, i)) ? o: -1 !== (o = je.call(this._longMonthsParse, i)) ? o: null: -1 !== (o = je.call(this._longMonthsParse, i)) ? o: -1 !== (o = je.call(this._shortMonthsParse, i)) ? o: null
				}.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
					if (o = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (a = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
					if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
					if (!n && this._monthsParse[r].test(e)) return r
				}
			},
			yn.monthsRegex = function(e) {
				return this._monthsParseExact ? (m(this, "_monthsRegex") || Je.call(this), e ? this._monthsStrictRegex: this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && e ? this._monthsStrictRegex: this._monthsRegex)
			},
			yn.monthsShortRegex = function(e) {
				return this._monthsParseExact ? (m(this, "_monthsRegex") || Je.call(this), e ? this._monthsShortStrictRegex: this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex: this._monthsShortRegex)
			},
			yn.week = function(e) {
				return Be(e, this._week.dow, this._week.doy).week
			},
			yn.firstDayOfYear = function() {
				return this._week.doy
			},
			yn.firstDayOfWeek = function() {
				return this._week.dow
			},
			yn.weekdays = function(e, t) {
				return e ? i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format": "standalone"][e.day()] : i(this._weekdays) ? this._weekdays: this._weekdays.standalone
			},
			yn.weekdaysMin = function(e) {
				return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
			},
			yn.weekdaysShort = function(e) {
				return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
			},
			yn.weekdaysParse = function(e, t, n) {
				var r, o, a;
				if (this._weekdaysParseExact) return function(e, t, n) {
					var r, o, a, i = e.toLocaleLowerCase();
					if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = f([2e3, 1]).day(r),
					this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(),
					this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(),
					this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
					return n ? "dddd" === t ? -1 !== (o = je.call(this._weekdaysParse, i)) ? o: null: "ddd" === t ? -1 !== (o = je.call(this._shortWeekdaysParse, i)) ? o: null: -1 !== (o = je.call(this._minWeekdaysParse, i)) ? o: null: "dddd" === t ? -1 !== (o = je.call(this._weekdaysParse, i)) ? o: -1 !== (o = je.call(this._shortWeekdaysParse, i)) ? o: -1 !== (o = je.call(this._minWeekdaysParse, i)) ? o: null: "ddd" === t ? -1 !== (o = je.call(this._shortWeekdaysParse, i)) ? o: -1 !== (o = je.call(this._weekdaysParse, i)) ? o: -1 !== (o = je.call(this._minWeekdaysParse, i)) ? o: null: -1 !== (o = je.call(this._minWeekdaysParse, i)) ? o: -1 !== (o = je.call(this._weekdaysParse, i)) ? o: -1 !== (o = je.call(this._shortWeekdaysParse, i)) ? o: null
				}.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
					if (o = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
					if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
					if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
					if (!n && this._weekdaysParse[r].test(e)) return r
				}
			},
			yn.weekdaysRegex = function(e) {
				return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysStrictRegex: this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = Xe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex: this._weekdaysRegex)
			},
			yn.weekdaysShortRegex = function(e) {
				return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
			},
			yn.weekdaysMinRegex = function(e) {
				return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = et), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
			},
			yn.isPM = function(e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			},
			yn.meridiem = function(e, t, n) {
				return e > 11 ? n ? "pm": "PM": n ? "am": "AM"
			},
			mt("en", {
				dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function(e) {
					var t = e % 10;
					return e + (1 === k(e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
				}
			}),
			o.lang = w("moment.lang is deprecated. Use moment.locale instead.", mt),
			o.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ft);
			var Ln = Math.abs;
			function bn(e, t, n, r) {
				var o = Gt(t, n);
				return e._milliseconds += r * o._milliseconds,
				e._days += r * o._days,
				e._months += r * o._months,
				e._bubble()
			}
			function gn(e) {
				return e < 0 ? Math.floor(e) : Math.ceil(e)
			}
			function Yn(e) {
				return 4800 * e / 146097
			}
			function kn(e) {
				return 146097 * e / 4800
			}
			function Sn(e) {
				return function() {
					return this.as(e)
				}
			}
			var Dn = Sn("ms"),
			wn = Sn("s"),
			Tn = Sn("m"),
			xn = Sn("h"),
			jn = Sn("d"),
			Hn = Sn("w"),
			On = Sn("M"),
			En = Sn("y");
			function An(e) {
				return function() {
					return this.isValid() ? this._data[e] : NaN
				}
			}
			var Pn = An("milliseconds"),
			Cn = An("seconds"),
			Wn = An("minutes"),
			Nn = An("hours"),
			Fn = An("days"),
			zn = An("months"),
			In = An("years");
			var Rn = Math.round,
			Jn = {
				ss: 44,
				s: 45,
				m: 45,
				h: 22,
				d: 26,
				M: 11
			};
			var qn = Math.abs;
			function Un(e) {
				return (e > 0) - (e < 0) || +e
			}
			function Vn() {
				if (!this.isValid()) return this.localeData().invalidDate();
				var e, t, n = qn(this._milliseconds) / 1e3,
				r = qn(this._days),
				o = qn(this._months);
				t = Y((e = Y(n / 60)) / 60),
				n %= 60,
				e %= 60;
				var a = Y(o / 12),
				i = o %= 12,
				s = r,
				u = t,
				d = e,
				l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
				c = this.asSeconds();
				if (!c) return "P0D";
				var m = c < 0 ? "-": "",
				_ = Un(this._months) !== Un(c) ? "-": "",
				f = Un(this._days) !== Un(c) ? "-": "",
				p = Un(this._milliseconds) !== Un(c) ? "-": "";
				return m + "P" + (a ? _ + a + "Y": "") + (i ? _ + i + "M": "") + (s ? f + s + "D": "") + (u || d || l ? "T": "") + (u ? p + u + "H": "") + (d ? p + d + "M": "") + (l ? p + l + "S": "")
			}
			var Bn = Wt.prototype;
			return Bn.isValid = function() {
				return this._isValid
			},
			Bn.abs = function() {
				var e = this._data;
				return this._milliseconds = Ln(this._milliseconds),
				this._days = Ln(this._days),
				this._months = Ln(this._months),
				e.milliseconds = Ln(e.milliseconds),
				e.seconds = Ln(e.seconds),
				e.minutes = Ln(e.minutes),
				e.hours = Ln(e.hours),
				e.months = Ln(e.months),
				e.years = Ln(e.years),
				this
			},
			Bn.add = function(e, t) {
				return bn(this, e, t, 1)
			},
			Bn.subtract = function(e, t) {
				return bn(this, e, t, -1)
			},
			Bn.as = function(e) {
				if (!this.isValid()) return NaN;
				var t, n, r = this._milliseconds;
				if ("month" === (e = C(e)) || "year" === e) return t = this._days + r / 864e5,
				n = this._months + Yn(t),
				"month" === e ? n: n / 12;
				switch (t = this._days + Math.round(kn(this._months)), e) {
				case "week":
					return t / 7 + r / 6048e5;
				case "day":
					return t + r / 864e5;
				case "hour":
					return 24 * t + r / 36e5;
				case "minute":
					return 1440 * t + r / 6e4;
				case "second":
					return 86400 * t + r / 1e3;
				case "millisecond":
					return Math.floor(864e5 * t) + r;
				default:
					throw new Error("Unknown unit " + e)
				}
			},
			Bn.asMilliseconds = Dn,
			Bn.asSeconds = wn,
			Bn.asMinutes = Tn,
			Bn.asHours = xn,
			Bn.asDays = jn,
			Bn.asWeeks = Hn,
			Bn.asMonths = On,
			Bn.asYears = En,
			Bn.valueOf = function() {
				return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
			},
			Bn._bubble = function() {
				var e, t, n, r, o, a = this._milliseconds,
				i = this._days,
				s = this._months,
				u = this._data;
				return a >= 0 && i >= 0 && s >= 0 || a <= 0 && i <= 0 && s <= 0 || (a += 864e5 * gn(kn(s) + i), i = 0, s = 0),
				u.milliseconds = a % 1e3,
				e = Y(a / 1e3),
				u.seconds = e % 60,
				t = Y(e / 60),
				u.minutes = t % 60,
				n = Y(t / 60),
				u.hours = n % 24,
				s += o = Y(Yn(i += Y(n / 24))),
				i -= gn(kn(o)),
				r = Y(s / 12),
				s %= 12,
				u.days = i,
				u.months = s,
				u.years = r,
				this
			},
			Bn.clone = function() {
				return Gt(this)
			},
			Bn.get = function(e) {
				return e = C(e),
				this.isValid() ? this[e + "s"]() : NaN
			},
			Bn.milliseconds = Pn,
			Bn.seconds = Cn,
			Bn.minutes = Wn,
			Bn.hours = Nn,
			Bn.days = Fn,
			Bn.weeks = function() {
				return Y(this.days() / 7)
			},
			Bn.months = zn,
			Bn.years = In,
			Bn.humanize = function(e) {
				if (!this.isValid()) return this.localeData().invalidDate();
				var t = this.localeData(),
				n = function(e, t, n) {
					var r = Gt(e).abs(),
					o = Rn(r.as("s")),
					a = Rn(r.as("m")),
					i = Rn(r.as("h")),
					s = Rn(r.as("d")),
					u = Rn(r.as("M")),
					d = Rn(r.as("y")),
					l = o <= Jn.ss && ["s", o] || o < Jn.s && ["ss", o] || a <= 1 && ["m"] || a < Jn.m && ["mm", a] || i <= 1 && ["h"] || i < Jn.h && ["hh", i] || s <= 1 && ["d"] || s < Jn.d && ["dd", s] || u <= 1 && ["M"] || u < Jn.M && ["MM", u] || d <= 1 && ["y"] || ["yy", d];
					return l[2] = t,
					l[3] = +e > 0,
					l[4] = n,
					function(e, t, n, r, o) {
						return o.relativeTime(t || 1, !!n, e, r)
					}.apply(null, l)
				} (this, !e, t);
				return e && (n = t.pastFuture( + this, n)),
				t.postformat(n)
			},
			Bn.toISOString = Vn,
			Bn.toString = Vn,
			Bn.toJSON = Vn,
			Bn.locale = nn,
			Bn.localeData = on,
			Bn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn),
			Bn.lang = rn,
			U("X", 0, 0, "unix"),
			U("x", 0, 0, "valueOf"),
			me("x", se),
			me("X", /[+-]?\d+(\.\d{1,3})?/),
			ye("X",
			function(e, t, n) {
				n._d = new Date(1e3 * parseFloat(e, 10))
			}),
			ye("x",
			function(e, t, n) {
				n._d = new Date(k(e))
			}),
			o.version = "2.22.2",
			function(e) {
				t = e
			} (Ot),
			o.fn = fn,
			o.min = function() {
				return Pt("isBefore", [].slice.call(arguments, 0))
			},
			o.max = function() {
				return Pt("isAfter", [].slice.call(arguments, 0))
			},
			o.now = function() {
				return Date.now ? Date.now() : +new Date
			},
			o.utc = f,
			o.unix = function(e) {
				return Ot(1e3 * e)
			},
			o.months = function(e, t) {
				return Mn(e, t, "months")
			},
			o.isDate = l,
			o.locale = mt,
			o.invalid = h,
			o.duration = Gt,
			o.isMoment = g,
			o.weekdays = function(e, t, n) {
				return vn(e, t, n, "weekdays")
			},
			o.parseZone = function() {
				return Ot.apply(null, arguments).parseZone()
			},
			o.localeData = ft,
			o.isDuration = Nt,
			o.monthsShort = function(e, t) {
				return Mn(e, t, "monthsShort")
			},
			o.weekdaysMin = function(e, t, n) {
				return vn(e, t, n, "weekdaysMin")
			},
			o.defineLocale = _t,
			o.updateLocale = function(e, t) {
				if (null != t) {
					var n, r, o = st;
					null != (r = ct(e)) && (o = r._config),
					(n = new E(t = O(o, t))).parentLocale = ut[e],
					ut[e] = n,
					mt(e)
				} else null != ut[e] && (null != ut[e].parentLocale ? ut[e] = ut[e].parentLocale: null != ut[e] && delete ut[e]);
				return ut[e]
			},
			o.locales = function() {
				return T(ut)
			},
			o.weekdaysShort = function(e, t, n) {
				return vn(e, t, n, "weekdaysShort")
			},
			o.normalizeUnits = C,
			o.relativeTimeRounding = function(e) {
				return void 0 === e ? Rn: "function" == typeof e && (Rn = e, !0)
			},
			o.relativeTimeThreshold = function(e, t) {
				return void 0 !== Jn[e] && (void 0 === t ? Jn[e] : (Jn[e] = t, "s" === e && (Jn.ss = t - 1), !0))
			},
			o.calendarFormat = function(e, t) {
				var n = e.diff(t, "days", !0);
				return n < -6 ? "sameElse": n < -1 ? "lastWeek": n < 0 ? "lastDay": n < 1 ? "sameDay": n < 2 ? "nextDay": n < 7 ? "nextWeek": "sameElse"
			},
			o.prototype = fn,
			o.HTML5_FMT = {
				DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
				DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
				DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
				DATE: "YYYY-MM-DD",
				TIME: "HH:mm",
				TIME_SECONDS: "HH:mm:ss",
				TIME_MS: "HH:mm:ss.SSS",
				WEEK: "YYYY-[W]WW",
				MONTH: "YYYY-MM"
			},
			o
		})
	}).call(this, n(2)(e))
},
function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.LS_ACCESS_TOKEN_KEY = "giteement-comments-token",
	t.LS_USER_KEY = "giteement-user-info",
	t.NOT_INITIALIZED_ERROR = new Error("Comments Not Initialized")
},
function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {},
		e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1),
		e
	}
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function(e) {
				return /^nm$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? n ? "vm": "VM": n ? "nm": "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				ss: "%d sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste": "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "١",
			2 : "٢",
			3 : "٣",
			4 : "٤",
			5 : "٥",
			6 : "٦",
			7 : "٧",
			8 : "٨",
			9 : "٩",
			0 : "٠"
		},
		n = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		},
		r = function(e) {
			return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
		},
		o = {
			s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
			m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
			h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
			d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
			M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
			y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
		},
		a = function(e) {
			return function(t, n, a, i) {
				var s = r(t),
				u = o[e][r(t)];
				return 2 === s && (u = u[n ? 0 : 1]),
				u.replace(/%d/i, t)
			}
		},
		i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		return e.defineLocale("ar", {
			months: i,
			monthsShort: i,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function(e) {
				return "م" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ص": "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: a("s"),
				ss: a("s"),
				m: a("m"),
				mm: a("m"),
				h: a("h"),
				hh: a("h"),
				d: a("d"),
				dd: a("d"),
				M: a("M"),
				MM: a("M"),
				y: a("y"),
				yy: a("y")
			},
			preparse: function(e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,
				function(e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ar-dz", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ar-kw", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "1",
			2 : "2",
			3 : "3",
			4 : "4",
			5 : "5",
			6 : "6",
			7 : "7",
			8 : "8",
			9 : "9",
			0 : "0"
		},
		n = function(e) {
			return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
		},
		r = {
			s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
			m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
			h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
			d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
			M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
			y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
		},
		o = function(e) {
			return function(t, o, a, i) {
				var s = n(t),
				u = r[e][n(t)];
				return 2 === s && (u = u[o ? 0 : 1]),
				u.replace(/%d/i, t)
			}
		},
		a = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		return e.defineLocale("ar-ly", {
			months: a,
			monthsShort: a,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function(e) {
				return "م" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ص": "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: o("s"),
				ss: o("s"),
				m: o("m"),
				mm: o("m"),
				h: o("h"),
				hh: o("h"),
				d: o("d"),
				dd: o("d"),
				M: o("M"),
				MM: o("M"),
				y: o("y"),
				yy: o("y")
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "١",
			2 : "٢",
			3 : "٣",
			4 : "٤",
			5 : "٥",
			6 : "٦",
			7 : "٧",
			8 : "٨",
			9 : "٩",
			0 : "٠"
		},
		n = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		};
		return e.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function(e) {
				return "م" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ص": "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function(e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,
				function(e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "-inci",
			5 : "-inci",
			8 : "-inci",
			70 : "-inci",
			80 : "-inci",
			2 : "-nci",
			7 : "-nci",
			20 : "-nci",
			50 : "-nci",
			3 : "-üncü",
			4 : "-üncü",
			100 : "-üncü",
			6 : "-ncı",
			9 : "-uncu",
			10 : "-uncu",
			30 : "-uncu",
			60 : "-ıncı",
			90 : "-ıncı"
		};
		return e.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "birneçə saniyə",
				ss: "%d saniyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function(e) {
				return /^(gündüz|axşam)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "gecə": e < 12 ? "səhər": e < 17 ? "gündüz": "axşam"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function(e) {
				if (0 === e) return e + "-ıncı";
				var n = e % 10;
				return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			return "m" === n ? t ? "хвіліна": "хвіліну": "h" === n ? t ? "гадзіна": "гадзіну": e + " " +
			function(e, t) {
				var n = e.split("_");
				return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
			} ({
				ss: t ? "секунда_секунды_секунд": "секунду_секунды_секунд",
				mm: t ? "хвіліна_хвіліны_хвілін": "хвіліну_хвіліны_хвілін",
				hh: t ? "гадзіна_гадзіны_гадзін": "гадзіну_гадзіны_гадзін",
				dd: "дзень_дні_дзён",
				MM: "месяц_месяцы_месяцаў",
				yy: "год_гады_гадоў"
			} [n], +e)
		}
		return e.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function() {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return "[У мінулую] dddd [ў] LT";
					case 1:
					case 2:
					case 4:
						return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "дзень",
				dd: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function(e) {
				return /^(дня|вечара)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ночы": e < 12 ? "раніцы": e < 17 ? "дня": "вечара"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function(e, t) {
				switch (t) {
				case "M":
				case "d":
				case "DDD":
				case "w":
				case "W":
					return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы": e + "-і";
				case "D":
					return e + "-га";
				default:
					return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return "[В изминалата] dddd [в] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(e) {
				var t = e % 10,
				n = e % 100;
				return 0 === e ? e + "-ев": 0 === n ? e + "-ен": n > 10 && n < 20 ? e + "-ти": 1 === t ? e + "-ви": 2 === t ? e + "-ри": 7 === t || 8 === t ? e + "-ми": e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("bm", {
			months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
			monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
			weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
			weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
			weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "MMMM [tile] D [san] YYYY",
				LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
				LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
			},
			calendar: {
				sameDay: "[Bi lɛrɛ] LT",
				nextDay: "[Sini lɛrɛ] LT",
				nextWeek: "dddd [don lɛrɛ] LT",
				lastDay: "[Kunu lɛrɛ] LT",
				lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s kɔnɔ",
				past: "a bɛ %s bɔ",
				s: "sanga dama dama",
				ss: "sekondi %d",
				m: "miniti kelen",
				mm: "miniti %d",
				h: "lɛrɛ kelen",
				hh: "lɛrɛ %d",
				d: "tile kelen",
				dd: "tile %d",
				M: "kalo kelen",
				MM: "kalo %d",
				y: "san kelen",
				yy: "san %d"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "১",
			2 : "২",
			3 : "৩",
			4 : "৪",
			5 : "৫",
			6 : "৬",
			7 : "৭",
			8 : "৮",
			9 : "৯",
			0 : "০"
		},
		n = {
			"১": "1",
			"২": "2",
			"৩": "3",
			"৪": "4",
			"৫": "5",
			"৬": "6",
			"৭": "7",
			"৮": "8",
			"৯": "9",
			"০": "0"
		};
		return e.defineLocale("bn", {
			months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
			weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				ss: "%d সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function(e) {
				return e.replace(/[১২৩৪৫৬৭৮৯০]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "রাত": e < 10 ? "সকাল": e < 17 ? "দুপুর": e < 20 ? "বিকাল": "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "༡",
			2 : "༢",
			3 : "༣",
			4 : "༤",
			5 : "༥",
			6 : "༦",
			7 : "༧",
			8 : "༨",
			9 : "༩",
			0 : "༠"
		},
		n = {
			"༡": "1",
			"༢": "2",
			"༣": "3",
			"༤": "4",
			"༥": "5",
			"༦": "6",
			"༧": "7",
			"༨": "8",
			"༩": "9",
			"༠": "0"
		};
		return e.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				ss: "%d སྐར་ཆ།",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function(e) {
				return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "མཚན་མོ": e < 10 ? "ཞོགས་ཀས": e < 17 ? "ཉིན་གུང": e < 20 ? "དགོང་དག": "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			return e + " " +
			function(e, t) {
				if (2 === t) return function(e) {
					var t = {
						m: "v",
						b: "v",
						d: "z"
					};
					if (void 0 === t[e.charAt(0)]) return e;
					return t[e.charAt(0)] + e.substring(1)
				} (e);
				return e
			} ({
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			} [n], e)
		}
		return e.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				ss: "%d eilenn",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: function(e) {
					switch (function e(t) {
						return t > 9 ? e(t % 10) : t
					} (e)) {
					case 1:
					case 3:
					case 4:
					case 5:
					case 9:
						return e + " bloaz";
					default:
						return e + " vloaz"
					}
				}
			},
			dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function(e) {
				return e + (1 === e ? "añ": "vet")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
			case "ss":
				return r += 1 === e ? "sekunda": 2 === e || 3 === e || 4 === e ? "sekunde": "sekundi";
			case "m":
				return t ? "jedna minuta": "jedne minute";
			case "mm":
				return r += 1 === e ? "minuta": 2 === e || 3 === e || 4 === e ? "minute": "minuta";
			case "h":
				return t ? "jedan sat": "jednog sata";
			case "hh":
				return r += 1 === e ? "sat": 2 === e || 3 === e || 4 === e ? "sata": "sati";
			case "dd":
				return r += 1 === e ? "dan": "dana";
			case "MM":
				return r += 1 === e ? "mjesec": 2 === e || 3 === e || 4 === e ? "mjeseca": "mjeseci";
			case "yy":
				return r += 1 === e ? "godina": 2 === e || 3 === e || 4 === e ? "godine": "godina"
			}
		}
		return e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u] [nedjelju] [u] LT";
					case 3:
						return "[u] [srijedu] [u] LT";
					case 6:
						return "[u] [subotu] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
						return "[prošlu] dddd [u] LT";
					case 6:
						return "[prošle] [subote] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ca", {
			months: {
				standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
				format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
				isFormat: /D[oD]?(\s)+MMMM/
			},
			monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [de] YYYY",
				ll: "D MMM YYYY",
				LLL: "D MMMM [de] YYYY [a les] H:mm",
				lll: "D MMM YYYY, H:mm",
				LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
				llll: "ddd D MMM YYYY, H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[avui a " + (1 !== this.hours() ? "les": "la") + "] LT"
				},
				nextDay: function() {
					return "[demà a " + (1 !== this.hours() ? "les": "la") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a " + (1 !== this.hours() ? "les": "la") + "] LT"
				},
				lastDay: function() {
					return "[ahir a " + (1 !== this.hours() ? "les": "la") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les": "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "uns segons",
				ss: "%d segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function(e, t) {
				var n = 1 === e ? "r": 2 === e ? "n": 3 === e ? "r": 4 === e ? "t": "è";
				return "w" !== t && "W" !== t || (n = "a"),
				e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
		n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
		function r(e) {
			return e > 1 && e < 5 && 1 != ~~ (e / 10)
		}
		function o(e, t, n, o) {
			var a = e + " ";
			switch (n) {
			case "s":
				return t || o ? "pár sekund": "pár sekundami";
			case "ss":
				return t || o ? a + (r(e) ? "sekundy": "sekund") : a + "sekundami";
			case "m":
				return t ? "minuta": o ? "minutu": "minutou";
			case "mm":
				return t || o ? a + (r(e) ? "minuty": "minut") : a + "minutami";
			case "h":
				return t ? "hodina": o ? "hodinu": "hodinou";
			case "hh":
				return t || o ? a + (r(e) ? "hodiny": "hodin") : a + "hodinami";
			case "d":
				return t || o ? "den": "dnem";
			case "dd":
				return t || o ? a + (r(e) ? "dny": "dní") : a + "dny";
			case "M":
				return t || o ? "měsíc": "měsícem";
			case "MM":
				return t || o ? a + (r(e) ? "měsíce": "měsíců") : a + "měsíci";
			case "y":
				return t || o ? "rok": "rokem";
			case "yy":
				return t || o ? a + (r(e) ? "roky": "let") : a + "lety"
			}
		}
		return e.defineLocale("cs", {
			months: t,
			monthsShort: n,
			monthsParse: function(e, t) {
				var n, r = [];
				for (n = 0; n < 12; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
				return r
			} (t, n),
			shortMonthsParse: function(e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			} (n),
			longMonthsParse: function(e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			} (t),
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v neděli v] LT";
					case 1:
					case 2:
						return "[v] dddd [v] LT";
					case 3:
						return "[ve středu v] LT";
					case 4:
						return "[ve čtvrtek v] LT";
					case 5:
						return "[v pátek v] LT";
					case 6:
						return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[minulou neděli v] LT";
					case 1:
					case 2:
						return "[minulé] dddd [v] LT";
					case 3:
						return "[minulou středu v] LT";
					case 4:
					case 5:
						return "[minulý] dddd [v] LT";
					case 6:
						return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: o,
				ss: o,
				m: o,
				mm: o,
				h: o,
				hh: o,
				d: o,
				dd: o,
				M: o,
				MM: o,
				y: o,
				yy: o
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return e + (/сехет$/i.exec(e) ? "рен": /ҫул$/i.exec(e) ? "тан": "ран")
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				ss: "%d ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				ss: "%d eiliad",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function(e) {
				var t = "";
				return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed": "ain": e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
				e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "på dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[i] dddd[s kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				ss: "%d sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? o[n][0] : o[n][1]
		}
		return e.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? o[n][0] : o[n][1]
		}
		return e.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? o[n][0] : o[n][1]
		}
		return e.defineLocale("de-ch", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
		n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
		return e.defineLocale("dv", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /މކ|މފ/,
			isPM: function(e) {
				return "މފ" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "މކ": "މފ"
			},
			calendar: {
				sameDay: "[މިއަދު] LT",
				nextDay: "[މާދަމާ] LT",
				nextWeek: "dddd LT",
				lastDay: "[އިއްޔެ] LT",
				lastWeek: "[ފާއިތުވި] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތެރޭގައި %s",
				past: "ކުރިން %s",
				s: "ސިކުންތުކޮޅެއް",
				ss: "d% ސިކުންތު",
				m: "މިނިޓެއް",
				mm: "މިނިޓު %d",
				h: "ގަޑިއިރެއް",
				hh: "ގަޑިއިރު %d",
				d: "ދުވަހެއް",
				dd: "ދުވަސް %d",
				M: "މަހެއް",
				MM: "މަސް %d",
				y: "އަހަރެއް",
				yy: "އަހަރު %d"
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function(e, t) {
				return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "μμ": "ΜΜ": n ? "πμ": "ΠΜ"
			},
			isPM: function(e) {
				return "μ" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 6:
						return "[το προηγούμενο] dddd [{}] LT";
					default:
						return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function(e, t) {
				var n = this._calendarEl[e],
				r = t && t.hours();
				return function(e) {
					return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
				} (n) && (n = n.apply(t)),
				n.replace("{}", r % 12 == 1 ? "στη": "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				ss: "%d δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			dayOfMonthOrdinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-il", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
			weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
			weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-a de] MMMM, YYYY",
				LLL: "D[-a de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function(e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "p.t.m.": "P.T.M.": n ? "a.t.m.": "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "post %s",
				past: "antaŭ %s",
				s: "sekundoj",
				ss: "%d sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			dayOfMonthOrdinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
		n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
		r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
		o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		return e.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: o,
			monthsShortRegex: o,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoy a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextDay: function() {
					return "[mañana a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastDay: function() {
					return "[ayer a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
		n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
		r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
		o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		return e.defineLocale("es-do", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: o,
			monthsShortRegex: o,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function() {
					return "[hoy a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextDay: function() {
					return "[mañana a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastDay: function() {
					return "[ayer a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
		n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
		return e.defineLocale("es-us", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "MM/DD/YYYY",
				LL: "MMMM [de] D [de] YYYY",
				LLL: "MMMM [de] D [de] YYYY h:mm A",
				LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function() {
					return "[hoy a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextDay: function() {
					return "[mañana a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastDay: function() {
					return "[ayer a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s": "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
				ss: [e + "sekundi", e + "sekundit"],
				m: ["ühe minuti", "üks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["ühe tunni", "tund aega", "üks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["ühe päeva", "üks päev"],
				M: ["kuu aja", "kuu aega", "üks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["ühe aasta", "aasta", "üks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? o[n][2] ? o[n][2] : o[n][1] : r ? o[n][0] : o[n][1]
		}
		return e.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d päeva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				ss: "%d segundo",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "۱",
			2 : "۲",
			3 : "۳",
			4 : "۴",
			5 : "۵",
			6 : "۶",
			7 : "۷",
			8 : "۸",
			9 : "۹",
			0 : "۰"
		},
		n = {
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			"۰": "0"
		};
		return e.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function(e) {
				return /بعد از ظهر/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "قبل از ظهر": "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چند ثانیه",
				ss: "ثانیه d%",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function(e) {
				return e.replace(/[۰-۹]/g,
				function(e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			dayOfMonthOrdinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
		n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
		function r(e, r, o, a) {
			var i = "";
			switch (o) {
			case "s":
				return a ? "muutaman sekunnin": "muutama sekunti";
			case "ss":
				return a ? "sekunnin": "sekuntia";
			case "m":
				return a ? "minuutin": "minuutti";
			case "mm":
				i = a ? "minuutin": "minuuttia";
				break;
			case "h":
				return a ? "tunnin": "tunti";
			case "hh":
				i = a ? "tunnin": "tuntia";
				break;
			case "d":
				return a ? "päivän": "päivä";
			case "dd":
				i = a ? "päivän": "päivää";
				break;
			case "M":
				return a ? "kuukauden": "kuukausi";
			case "MM":
				i = a ? "kuukauden": "kuukautta";
				break;
			case "y":
				return a ? "vuoden": "vuosi";
			case "yy":
				i = a ? "vuoden": "vuotta"
			}
			return i = function(e, r) {
				return e < 10 ? r ? n[e] : t[e] : e
			} (e, a) + " " + i
		}
		return e.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] HH.mm",
				llll: "ddd, Do MMM YYYY, [klo] HH.mm"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				ss: "%d sekundir",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
			ordinal: function(e, t) {
				switch (t) {
				case "D":
					return e + (1 === e ? "er": "");
				default:
				case "M":
				case "Q":
				case "DDD":
				case "d":
					return e + (1 === e ? "er": "e");
				case "w":
				case "W":
					return e + (1 === e ? "re": "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e, t) {
				switch (t) {
				default:
				case "M":
				case "Q":
				case "D":
				case "DDD":
				case "d":
					return e + (1 === e ? "er": "e");
				case "w":
				case "W":
					return e + (1 === e ? "re": "e")
				}
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e, t) {
				switch (t) {
				default:
				case "M":
				case "Q":
				case "D":
				case "DDD":
				case "d":
					return e + (1 === e ? "er": "e");
				case "w":
				case "W":
					return e + (1 === e ? "re": "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
		n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
		return e.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsParseExact: !0,
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				ss: "%d sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste": "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("gd", {
			months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
			monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			monthsParseExact: !0,
			weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-màireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				ss: "%d diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "mìos",
				MM: "%d mìosan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function(e) {
				return e + (1 === e ? "d": e % 10 == 2 ? "na": "mh")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("gl", {
			months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
			monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoxe " + (1 !== this.hours() ? "ás": "á") + "] LT"
				},
				nextDay: function() {
					return "[mañá " + (1 !== this.hours() ? "ás": "á") + "] LT"
				},
				nextWeek: function() {
					return "dddd [" + (1 !== this.hours() ? "ás": "a") + "] LT"
				},
				lastDay: function() {
					return "[onte " + (1 !== this.hours() ? "á": "a") + "] LT"
				},
				lastWeek: function() {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás": "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return 0 === e.indexOf("un") ? "n" + e: "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				s: ["thodde secondanim", "thodde second"],
				ss: [e + " secondanim", e + " second"],
				m: ["eka mintan", "ek minute"],
				mm: [e + " mintanim", e + " mintam"],
				h: ["eka horan", "ek hor"],
				hh: [e + " horanim", e + " horam"],
				d: ["eka disan", "ek dis"],
				dd: [e + " disanim", e + " dis"],
				M: ["eka mhoinean", "ek mhoino"],
				MM: [e + " mhoineanim", e + " mhoine"],
				y: ["eka vorsan", "ek voros"],
				yy: [e + " vorsanim", e + " vorsam"]
			};
			return t ? o[n][0] : o[n][1]
		}
		return e.defineLocale("gom-latn", {
			months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
			monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
			weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
			weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "A h:mm [vazta]",
				LTS: "A h:mm:ss [vazta]",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY A h:mm [vazta]",
				LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
				llll: "ddd, D MMM YYYY, A h:mm [vazta]"
			},
			calendar: {
				sameDay: "[Aiz] LT",
				nextDay: "[Faleam] LT",
				nextWeek: "[Ieta to] dddd[,] LT",
				lastDay: "[Kal] LT",
				lastWeek: "[Fatlo] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s",
				past: "%s adim",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er)/,
			ordinal: function(e, t) {
				switch (t) {
				case "D":
					return e + "er";
				default:
				case "M":
				case "Q":
				case "DDD":
				case "d":
				case "w":
				case "W":
					return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			},
			meridiemParse: /rati|sokalli|donparam|sanje/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"rati" === t ? e < 4 ? e: e + 12 : "sokalli" === t ? e: "donparam" === t ? e > 12 ? e: e + 12 : "sanje" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "rati": e < 12 ? "sokalli": e < 16 ? "donparam": e < 20 ? "sanje": "rati"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "૧",
			2 : "૨",
			3 : "૩",
			4 : "૪",
			5 : "૫",
			6 : "૬",
			7 : "૭",
			8 : "૮",
			9 : "૯",
			0 : "૦"
		},
		n = {
			"૧": "1",
			"૨": "2",
			"૩": "3",
			"૪": "4",
			"૫": "5",
			"૬": "6",
			"૭": "7",
			"૮": "8",
			"૯": "9",
			"૦": "0"
		};
		return e.defineLocale("gu", {
			months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
			monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
			monthsParseExact: !0,
			weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
			weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
			weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
			longDateFormat: {
				LT: "A h:mm વાગ્યે",
				LTS: "A h:mm:ss વાગ્યે",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm વાગ્યે",
				LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
			},
			calendar: {
				sameDay: "[આજ] LT",
				nextDay: "[કાલે] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ગઇકાલે] LT",
				lastWeek: "[પાછલા] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s મા",
				past: "%s પેહલા",
				s: "અમુક પળો",
				ss: "%d સેકંડ",
				m: "એક મિનિટ",
				mm: "%d મિનિટ",
				h: "એક કલાક",
				hh: "%d કલાક",
				d: "એક દિવસ",
				dd: "%d દિવસ",
				M: "એક મહિનો",
				MM: "%d મહિનો",
				y: "એક વર્ષ",
				yy: "%d વર્ષ"
			},
			preparse: function(e) {
				return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"રાત" === t ? e < 4 ? e: e + 12 : "સવાર" === t ? e: "બપોર" === t ? e >= 10 ? e: e + 12 : "સાંજ" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "રાત": e < 10 ? "સવાર": e < 17 ? "બપોર": e < 20 ? "સાંજ": "રાત"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				ss: "%d שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function(e) {
					return 2 === e ? "שעתיים": e + " שעות"
				},
				d: "יום",
				dd: function(e) {
					return 2 === e ? "יומיים": e + " ימים"
				},
				M: "חודש",
				MM: function(e) {
					return 2 === e ? "חודשיים": e + " חודשים"
				},
				y: "שנה",
				yy: function(e) {
					return 2 === e ? "שנתיים": e % 10 == 0 && 10 !== e ? e + " שנה": e + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function(e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 5 ? "לפנות בוקר": e < 10 ? "בבוקר": e < 12 ? n ? 'לפנה"צ': "לפני הצהריים": e < 18 ? n ? 'אחה"צ': "אחרי הצהריים": "בערב"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "१",
			2 : "२",
			3 : "३",
			4 : "४",
			5 : "५",
			6 : "६",
			7 : "७",
			8 : "८",
			9 : "९",
			0 : "०"
		},
		n = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		};
		return e.defineLocale("hi", {
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				ss: "%d सेकंड",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function(e) {
				return e.replace(/[१२३४५६७८९०]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"रात" === t ? e < 4 ? e: e + 12 : "सुबह" === t ? e: "दोपहर" === t ? e >= 10 ? e: e + 12 : "शाम" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "रात": e < 10 ? "सुबह": e < 17 ? "दोपहर": e < 20 ? "शाम": "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
			case "ss":
				return r += 1 === e ? "sekunda": 2 === e || 3 === e || 4 === e ? "sekunde": "sekundi";
			case "m":
				return t ? "jedna minuta": "jedne minute";
			case "mm":
				return r += 1 === e ? "minuta": 2 === e || 3 === e || 4 === e ? "minute": "minuta";
			case "h":
				return t ? "jedan sat": "jednog sata";
			case "hh":
				return r += 1 === e ? "sat": 2 === e || 3 === e || 4 === e ? "sata": "sati";
			case "dd":
				return r += 1 === e ? "dan": "dana";
			case "MM":
				return r += 1 === e ? "mjesec": 2 === e || 3 === e || 4 === e ? "mjeseca": "mjeseci";
			case "yy":
				return r += 1 === e ? "godina": 2 === e || 3 === e || 4 === e ? "godine": "godina"
			}
		}
		return e.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u] [nedjelju] [u] LT";
					case 3:
						return "[u] [srijedu] [u] LT";
					case 6:
						return "[u] [subotu] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
						return "[prošlu] dddd [u] LT";
					case 6:
						return "[prošle] [subote] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
		function n(e, t, n, r) {
			var o = e;
			switch (n) {
			case "s":
				return r || t ? "néhány másodperc": "néhány másodperce";
			case "ss":
				return o + (r || t) ? " másodperc": " másodperce";
			case "m":
				return "egy" + (r || t ? " perc": " perce");
			case "mm":
				return o + (r || t ? " perc": " perce");
			case "h":
				return "egy" + (r || t ? " óra": " órája");
			case "hh":
				return o + (r || t ? " óra": " órája");
			case "d":
				return "egy" + (r || t ? " nap": " napja");
			case "dd":
				return o + (r || t ? " nap": " napja");
			case "M":
				return "egy" + (r || t ? " hónap": " hónapja");
			case "MM":
				return o + (r || t ? " hónap": " hónapja");
			case "y":
				return "egy" + (r || t ? " év": " éve");
			case "yy":
				return o + (r || t ? " év": " éve")
			}
			return ""
		}
		function r(e) {
			return (e ? "": "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
		}
		return e.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D. H:mm",
				LLLL: "YYYY. MMMM D., dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function(e) {
				return "u" === e.charAt(1).toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e < 12 ? !0 === n ? "de": "DE": !0 === n ? "du": "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function() {
					return r.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function() {
					return r.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function() {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function() {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				ss: "%d վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function(e) {
				return /^(ցերեկվա|երեկոյան)$/.test(e)
			},
			meridiem: function(e) {
				return e < 4 ? "գիշերվա": e < 12 ? "առավոտվա": e < 17 ? "ցերեկվա": "երեկոյան"
			},
			dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function(e, t) {
				switch (t) {
				case "DDD":
				case "w":
				case "W":
				case "DDDo":
					return 1 === e ? e + "-ին": e + "-րդ";
				default:
					return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"pagi" === t ? e: "siang" === t ? e >= 11 ? e: e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi": e < 15 ? "siang": e < 19 ? "sore": "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				ss: "%d detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e) {
			return e % 100 == 11 || e % 10 != 1
		}
		function n(e, n, r, o) {
			var a = e + " ";
			switch (r) {
			case "s":
				return n || o ? "nokkrar sekúndur": "nokkrum sekúndum";
			case "ss":
				return t(e) ? a + (n || o ? "sekúndur": "sekúndum") : a + "sekúnda";
			case "m":
				return n ? "mínúta": "mínútu";
			case "mm":
				return t(e) ? a + (n || o ? "mínútur": "mínútum") : n ? a + "mínúta": a + "mínútu";
			case "hh":
				return t(e) ? a + (n || o ? "klukkustundir": "klukkustundum") : a + "klukkustund";
			case "d":
				return n ? "dagur": o ? "dag": "degi";
			case "dd":
				return t(e) ? n ? a + "dagar": a + (o ? "daga": "dögum") : n ? a + "dagur": a + (o ? "dag": "degi");
			case "M":
				return n ? "mánuður": o ? "mánuð": "mánuði";
			case "MM":
				return t(e) ? n ? a + "mánuðir": a + (o ? "mánuði": "mánuðum") : n ? a + "mánuður": a + (o ? "mánuð": "mánuði");
			case "y":
				return n || o ? "ár": "ári";
			case "yy":
				return t(e) ? a + (n || o ? "ár": "árum") : a + (n || o ? "ár": "ári")
			}
		}
		return e.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[la scorsa] dddd [alle] LT";
					default:
						return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return (/^[0-9].+$/.test(e) ? "tra": "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				ss: "%d secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日 dddd HH:mm",
				l: "YYYY/MM/DD",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日(ddd) HH:mm"
			},
			meridiemParse: /午前|午後/i,
			isPM: function(e) {
				return "午後" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "午前": "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: function(e) {
					return e.week() < this.week() ? "[来週]dddd LT": "dddd LT"
				},
				lastDay: "[昨日] LT",
				lastWeek: function(e) {
					return this.week() < e.week() ? "[先週]dddd LT": "dddd LT"
				},
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}日/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				default:
					return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				ss: "%d秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"enjing" === t ? e: "siyang" === t ? e >= 11 ? e: e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "enjing": e < 15 ? "siyang": e < 19 ? "sonten": "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				ss: "%d detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ka", {
			months: {
				standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
				},
				past: function(e) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				ss: "%d წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function(e) {
				return 0 === e ? e: 1 === e ? e + "-ლი": e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e: e + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			0 : "-ші",
			1 : "-ші",
			2 : "-ші",
			3 : "-ші",
			4 : "-ші",
			5 : "-ші",
			6 : "-шы",
			7 : "-ші",
			8 : "-ші",
			9 : "-шы",
			10 : "-шы",
			20 : "-шы",
			30 : "-шы",
			40 : "-шы",
			50 : "-ші",
			60 : "-шы",
			70 : "-ші",
			80 : "-ші",
			90 : "-шы",
			100 : "-ші"
		};
		return e.defineLocale("kk", {
			months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
			monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
			weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
			weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
			weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгін сағат] LT",
				nextDay: "[Ертең сағат] LT",
				nextWeek: "dddd [сағат] LT",
				lastDay: "[Кеше сағат] LT",
				lastWeek: "[Өткен аптаның] dddd [сағат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ішінде",
				past: "%s бұрын",
				s: "бірнеше секунд",
				ss: "%d секунд",
				m: "бір минут",
				mm: "%d минут",
				h: "бір сағат",
				hh: "%d сағат",
				d: "бір күн",
				dd: "%d күн",
				M: "бір ай",
				MM: "%d ай",
				y: "бір жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
			ordinal: function(e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "១",
			2 : "២",
			3 : "៣",
			4 : "៤",
			5 : "៥",
			6 : "៦",
			7 : "៧",
			8 : "៨",
			9 : "៩",
			0 : "០"
		},
		n = {
			"១": "1",
			"២": "2",
			"៣": "3",
			"៤": "4",
			"៥": "5",
			"៦": "6",
			"៧": "7",
			"៨": "8",
			"៩": "9",
			"០": "0"
		};
		return e.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /ព្រឹក|ល្ងាច/,
			isPM: function(e) {
				return "ល្ងាច" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ព្រឹក": "ល្ងាច"
			},
			calendar: {
				sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				ss: "%d វិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			dayOfMonthOrdinalParse: /ទី\d{1,2}/,
			ordinal: "ទី%d",
			preparse: function(e) {
				return e.replace(/[១២៣៤៥៦៧៨៩០]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "೧",
			2 : "೨",
			3 : "೩",
			4 : "೪",
			5 : "೫",
			6 : "೬",
			7 : "೭",
			8 : "೮",
			9 : "೯",
			0 : "೦"
		},
		n = {
			"೧": "1",
			"೨": "2",
			"೩": "3",
			"೪": "4",
			"೫": "5",
			"೬": "6",
			"೭": "7",
			"೮": "8",
			"೯": "9",
			"೦": "0"
		};
		return e.defineLocale("kn", {
			months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
			monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
			monthsParseExact: !0,
			weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
			weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
			weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[ಇಂದು] LT",
				nextDay: "[ನಾಳೆ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ನಿನ್ನೆ] LT",
				lastWeek: "[ಕೊನೆಯ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ನಂತರ",
				past: "%s ಹಿಂದೆ",
				s: "ಕೆಲವು ಕ್ಷಣಗಳು",
				ss: "%d ಸೆಕೆಂಡುಗಳು",
				m: "ಒಂದು ನಿಮಿಷ",
				mm: "%d ನಿಮಿಷ",
				h: "ಒಂದು ಗಂಟೆ",
				hh: "%d ಗಂಟೆ",
				d: "ಒಂದು ದಿನ",
				dd: "%d ದಿನ",
				M: "ಒಂದು ತಿಂಗಳು",
				MM: "%d ತಿಂಗಳು",
				y: "ಒಂದು ವರ್ಷ",
				yy: "%d ವರ್ಷ"
			},
			preparse: function(e) {
				return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"ರಾತ್ರಿ" === t ? e < 4 ? e: e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e: "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e: e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ರಾತ್ರಿ": e < 10 ? "ಬೆಳಿಗ್ಗೆ": e < 17 ? "ಮಧ್ಯಾಹ್ನ": e < 20 ? "ಸಂಜೆ": "ರಾತ್ರಿ"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
			ordinal: function(e) {
				return e + "ನೇ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h:mm",
				LLLL: "YYYY년 MMMM D일 dddd A h:mm",
				l: "YYYY.MM.DD.",
				ll: "YYYY년 MMMM D일",
				lll: "YYYY년 MMMM D일 A h:mm",
				llll: "YYYY년 MMMM D일 dddd A h:mm"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "1분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "일";
				case "M":
					return e + "월";
				case "w":
				case "W":
					return e + "주";
				default:
					return e
				}
			},
			meridiemParse: /오전|오후/,
			isPM: function(e) {
				return "오후" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "오전": "오후"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			0 : "-чү",
			1 : "-чи",
			2 : "-чи",
			3 : "-чү",
			4 : "-чү",
			5 : "-чи",
			6 : "-чы",
			7 : "-чи",
			8 : "-чи",
			9 : "-чу",
			10 : "-чу",
			20 : "-чы",
			30 : "-чу",
			40 : "-чы",
			50 : "-чү",
			60 : "-чы",
			70 : "-чи",
			80 : "-чи",
			90 : "-чу",
			100 : "-чү"
		};
		return e.defineLocale("ky", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
			weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
			weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгүн саат] LT",
				nextDay: "[Эртең саат] LT",
				nextWeek: "dddd [саат] LT",
				lastDay: "[Кече саат] LT",
				lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ичинде",
				past: "%s мурун",
				s: "бирнече секунд",
				ss: "%d секунд",
				m: "бир мүнөт",
				mm: "%d мүнөт",
				h: "бир саат",
				hh: "%d саат",
				d: "бир күн",
				dd: "%d күн",
				M: "бир ай",
				MM: "%d ай",
				y: "бир жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
			ordinal: function(e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? o[n][0] : o[n][1]
		}
		function n(e) {
			if (e = parseInt(e, 10), isNaN(e)) return ! 1;
			if (e < 0) return ! 0;
			if (e < 10) return 4 <= e && e <= 7;
			if (e < 100) {
				var t = e % 10;
				return n(0 === t ? e / 10 : t)
			}
			if (e < 1e4) {
				for (; e >= 10;) e /= 10;
				return n(e)
			}
			return n(e /= 1e3)
		}
		return e.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 2:
					case 4:
						return "[Leschten] dddd [um] LT";
					default:
						return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: function(e) {
					return n(e.substr(0, e.indexOf(" "))) ? "a " + e: "an " + e
				},
				past: function(e) {
					return n(e.substr(0, e.indexOf(" "))) ? "viru " + e: "virun " + e
				},
				s: "e puer Sekonnen",
				ss: "%d Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d Méint",
				y: t,
				yy: "%d Joer"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function(e) {
				return "ຕອນແລງ" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ຕອນເຊົ້າ": "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				ss: "%d ວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function(e) {
				return "ທີ່" + e
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			ss: "sekundė_sekundžių_sekundes",
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		};
		function n(e, t, n, r) {
			return t ? o(n)[0] : r ? o(n)[1] : o(n)[2]
		}
		function r(e) {
			return e % 10 == 0 || e > 10 && e < 20
		}
		function o(e) {
			return t[e].split("_")
		}
		function a(e, t, a, i) {
			var s = e + " ";
			return 1 === e ? s + n(0, t, a[0], i) : t ? s + (r(e) ? o(a)[1] : o(a)[0]) : i ? s + o(a)[1] : s + (r(e) ? o(a)[1] : o(a)[2])
		}
		return e.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
				isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: function(e, t, n, r) {
					return t ? "kelios sekundės": r ? "kelių sekundžių": "kelias sekundes"
				},
				ss: a,
				m: n,
				mm: a,
				h: n,
				hh: a,
				d: n,
				dd: a,
				M: n,
				MM: a,
				y: n,
				yy: a
			},
			dayOfMonthOrdinalParse: /\d{1,2}-oji/,
			ordinal: function(e) {
				return e + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		};
		function n(e, t, n) {
			return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
		}
		function r(e, r, o) {
			return e + " " + n(t[o], e, r)
		}
		function o(e, r, o) {
			return n(t[o], e, r)
		}
		return e.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, HH:mm",
				LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: function(e, t) {
					return t ? "dažas sekundes": "dažām sekundēm"
				},
				ss: r,
				m: o,
				mm: r,
				h: o,
				hh: r,
				d: o,
				dd: r,
				M: o,
				MM: r,
				y: o,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			words: {
				ss: ["sekund", "sekunda", "sekundi"],
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function(e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function(e, n, r) {
				var o = t.words[r];
				return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
			}
		};
		return e.defineLocale("me", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u] [nedjelju] [u] LT";
					case 3:
						return "[u] [srijedu] [u] LT";
					case 6:
						return "[u] [subotu] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function() {
					return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mjesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("mi", {
			months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
			monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
			monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
			weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
			weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [i] HH:mm",
				LLLL: "dddd, D MMMM YYYY [i] HH:mm"
			},
			calendar: {
				sameDay: "[i teie mahana, i] LT",
				nextDay: "[apopo i] LT",
				nextWeek: "dddd [i] LT",
				lastDay: "[inanahi i] LT",
				lastWeek: "dddd [whakamutunga i] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i roto i %s",
				past: "%s i mua",
				s: "te hēkona ruarua",
				ss: "%d hēkona",
				m: "he meneti",
				mm: "%d meneti",
				h: "te haora",
				hh: "%d haora",
				d: "he ra",
				dd: "%d ra",
				M: "he marama",
				MM: "%d marama",
				y: "he tau",
				yy: "%d tau"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return "[Изминатата] dddd [во] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(e) {
				var t = e % 10,
				n = e % 100;
				return 0 === e ? e + "-ев": 0 === n ? e + "-ен": n > 10 && n < 20 ? e + "-ти": 1 === t ? e + "-ви": 2 === t ? e + "-ри": 7 === t || 8 === t ? e + "-ми": e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				ss: "%d സെക്കൻഡ്",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "രാത്രി": e < 12 ? "രാവിലെ": e < 17 ? "ഉച്ച കഴിഞ്ഞ്": e < 20 ? "വൈകുന്നേരം": "രാത്രി"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			switch (n) {
			case "s":
				return t ? "хэдхэн секунд": "хэдхэн секундын";
			case "ss":
				return e + (t ? " секунд": " секундын");
			case "m":
			case "mm":
				return e + (t ? " минут": " минутын");
			case "h":
			case "hh":
				return e + (t ? " цаг": " цагийн");
			case "d":
			case "dd":
				return e + (t ? " өдөр": " өдрийн");
			case "M":
			case "MM":
				return e + (t ? " сар": " сарын");
			case "y":
			case "yy":
				return e + (t ? " жил": " жилийн");
			default:
				return e
			}
		}
		return e.defineLocale("mn", {
			months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
			monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
			monthsParseExact: !0,
			weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
			weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
			weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY оны MMMMын D",
				LLL: "YYYY оны MMMMын D HH:mm",
				LLLL: "dddd, YYYY оны MMMMын D HH:mm"
			},
			meridiemParse: /ҮӨ|ҮХ/i,
			isPM: function(e) {
				return "ҮХ" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ҮӨ": "ҮХ"
			},
			calendar: {
				sameDay: "[Өнөөдөр] LT",
				nextDay: "[Маргааш] LT",
				nextWeek: "[Ирэх] dddd LT",
				lastDay: "[Өчигдөр] LT",
				lastWeek: "[Өнгөрсөн] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s дараа",
				past: "%s өмнө",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + " өдөр";
				default:
					return e
				}
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "१",
			2 : "२",
			3 : "३",
			4 : "४",
			5 : "५",
			6 : "६",
			7 : "७",
			8 : "८",
			9 : "९",
			0 : "०"
		},
		n = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		};
		function r(e, t, n, r) {
			var o = "";
			if (t) switch (n) {
			case "s":
				o = "काही सेकंद";
				break;
			case "ss":
				o = "%d सेकंद";
				break;
			case "m":
				o = "एक मिनिट";
				break;
			case "mm":
				o = "%d मिनिटे";
				break;
			case "h":
				o = "एक तास";
				break;
			case "hh":
				o = "%d तास";
				break;
			case "d":
				o = "एक दिवस";
				break;
			case "dd":
				o = "%d दिवस";
				break;
			case "M":
				o = "एक महिना";
				break;
			case "MM":
				o = "%d महिने";
				break;
			case "y":
				o = "एक वर्ष";
				break;
			case "yy":
				o = "%d वर्षे"
			} else switch (n) {
			case "s":
				o = "काही सेकंदां";
				break;
			case "ss":
				o = "%d सेकंदां";
				break;
			case "m":
				o = "एका मिनिटा";
				break;
			case "mm":
				o = "%d मिनिटां";
				break;
			case "h":
				o = "एका तासा";
				break;
			case "hh":
				o = "%d तासां";
				break;
			case "d":
				o = "एका दिवसा";
				break;
			case "dd":
				o = "%d दिवसां";
				break;
			case "M":
				o = "एका महिन्या";
				break;
			case "MM":
				o = "%d महिन्यां";
				break;
			case "y":
				o = "एका वर्षा";
				break;
			case "yy":
				o = "%d वर्षां"
			}
			return o.replace(/%d/i, e)
		}
		return e.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm वाजता",
				LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमध्ये",
				past: "%sपूर्वी",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			preparse: function(e) {
				return e.replace(/[१२३४५६७८९०]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"रात्री" === t ? e < 4 ? e: e + 12 : "सकाळी" === t ? e: "दुपारी" === t ? e >= 10 ? e: e + 12 : "सायंकाळी" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "रात्री": e < 10 ? "सकाळी": e < 17 ? "दुपारी": e < 20 ? "सायंकाळी": "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"pagi" === t ? e: "tengahari" === t ? e >= 11 ? e: e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi": e < 15 ? "tengahari": e < 19 ? "petang": "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"pagi" === t ? e: "tengahari" === t ? e >= 11 ? e: e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi": e < 15 ? "tengahari": e < 19 ? "petang": "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("mt", {
			months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
			monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
			weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
			weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
			weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Illum fil-]LT",
				nextDay: "[Għada fil-]LT",
				nextWeek: "dddd [fil-]LT",
				lastDay: "[Il-bieraħ fil-]LT",
				lastWeek: "dddd [li għadda] [fil-]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "f’ %s",
				past: "%s ilu",
				s: "ftit sekondi",
				ss: "%d sekondi",
				m: "minuta",
				mm: "%d minuti",
				h: "siegħa",
				hh: "%d siegħat",
				d: "ġurnata",
				dd: "%d ġranet",
				M: "xahar",
				MM: "%d xhur",
				y: "sena",
				yy: "%d sni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "၁",
			2 : "၂",
			3 : "၃",
			4 : "၄",
			5 : "၅",
			6 : "၆",
			7 : "၇",
			8 : "၈",
			9 : "၉",
			0 : "၀"
		},
		n = {
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"၀": "0"
		};
		return e.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				ss: "%d စက္ကန့်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function(e) {
				return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				ss: "%d sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "१",
			2 : "२",
			3 : "३",
			4 : "४",
			5 : "५",
			6 : "६",
			7 : "७",
			8 : "८",
			9 : "९",
			0 : "०"
		},
		n = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		};
		return e.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			monthsParseExact: !0,
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, Aको h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
			},
			preparse: function(e) {
				return e.replace(/[१२३४५६७८९०]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"राति" === t ? e < 4 ? e: e + 12 : "बिहान" === t ? e: "दिउँसो" === t ? e >= 10 ? e: e + 12 : "साँझ" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 3 ? "राति": e < 12 ? "बिहान": e < 16 ? "दिउँसो": e < 20 ? "साँझ": "राति"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोलि] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडि",
				s: "केही क्षण",
				ss: "%d सेकेण्ड",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
		n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
		r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
		o = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		return e.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: o,
			monthsShortRegex: o,
			monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste": "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
		n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
		r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
		o = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		return e.defineLocale("nl-be", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function(e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: o,
			monthsShortRegex: o,
			monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste": "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				ss: "%d sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "੧",
			2 : "੨",
			3 : "੩",
			4 : "੪",
			5 : "੫",
			6 : "੬",
			7 : "੭",
			8 : "੮",
			9 : "੯",
			0 : "੦"
		},
		n = {
			"੧": "1",
			"੨": "2",
			"੩": "3",
			"੪": "4",
			"੫": "5",
			"੬": "6",
			"੭": "7",
			"੮": "8",
			"੯": "9",
			"੦": "0"
		};
		return e.defineLocale("pa-in", {
			months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
			weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜੇ",
				LTS: "A h:mm:ss ਵਜੇ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
				LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
			},
			calendar: {
				sameDay: "[ਅਜ] LT",
				nextDay: "[ਕਲ] LT",
				nextWeek: "[ਅਗਲਾ] dddd, LT",
				lastDay: "[ਕਲ] LT",
				lastWeek: "[ਪਿਛਲੇ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿੱਚ",
				past: "%s ਪਿਛਲੇ",
				s: "ਕੁਝ ਸਕਿੰਟ",
				ss: "%d ਸਕਿੰਟ",
				m: "ਇਕ ਮਿੰਟ",
				mm: "%d ਮਿੰਟ",
				h: "ਇੱਕ ਘੰਟਾ",
				hh: "%d ਘੰਟੇ",
				d: "ਇੱਕ ਦਿਨ",
				dd: "%d ਦਿਨ",
				M: "ਇੱਕ ਮਹੀਨਾ",
				MM: "%d ਮਹੀਨੇ",
				y: "ਇੱਕ ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function(e) {
				return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"ਰਾਤ" === t ? e < 4 ? e: e + 12 : "ਸਵੇਰ" === t ? e: "ਦੁਪਹਿਰ" === t ? e >= 10 ? e: e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ਰਾਤ": e < 10 ? "ਸਵੇਰ": e < 17 ? "ਦੁਪਹਿਰ": e < 20 ? "ਸ਼ਾਮ": "ਰਾਤ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
		n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
		function r(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~ (e / 10) % 10 != 1
		}
		function o(e, t, n) {
			var o = e + " ";
			switch (n) {
			case "ss":
				return o + (r(e) ? "sekundy": "sekund");
			case "m":
				return t ? "minuta": "minutę";
			case "mm":
				return o + (r(e) ? "minuty": "minut");
			case "h":
				return t ? "godzina": "godzinę";
			case "hh":
				return o + (r(e) ? "godziny": "godzin");
			case "MM":
				return o + (r(e) ? "miesiące": "miesięcy");
			case "yy":
				return o + (r(e) ? "lata": "lat")
			}
		}
		return e.defineLocale("pl", {
			months: function(e, r) {
				return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")": /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[W niedzielę o] LT";
					case 2:
						return "[We wtorek o] LT";
					case 3:
						return "[W środę o] LT";
					case 6:
						return "[W sobotę o] LT";
					default:
						return "[W] dddd [o] LT"
					}
				},
				lastDay: "[Wczoraj o] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[W zeszłą niedzielę o] LT";
					case 3:
						return "[W zeszłą środę o] LT";
					case 6:
						return "[W zeszłą sobotę o] LT";
					default:
						return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				ss: o,
				m: o,
				mm: o,
				h: o,
				hh: o,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: o,
				y: "rok",
				yy: o
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("pt", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT": "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("pt-br", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT": "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "poucos segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			var r = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "),
			e + r + {
				ss: "secunde",
				mm: "minute",
				hh: "ore",
				dd: "zile",
				MM: "luni",
				yy: "ani"
			} [n]
		}
		return e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				ss: t,
				m: "un minut",
				mm: t,
				h: "o oră",
				hh: t,
				d: "o zi",
				dd: t,
				M: "o lună",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			return "m" === n ? t ? "минута": "минуту": e + " " +
			function(e, t) {
				var n = e.split("_");
				return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
			} ({
				ss: t ? "секунда_секунды_секунд": "секунду_секунды_секунд",
				mm: t ? "минута_минуты_минут": "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			} [n], +e)
		}
		var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
		return e.defineLocale("ru", {
			months: {
				format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
				standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
			},
			monthsShort: {
				format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
				standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
				isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
			},
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: n,
			longMonthsParse: n,
			shortMonthsParse: n,
			monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
			monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., H:mm",
				LLLL: "dddd, D MMMM YYYY г., H:mm"
			},
			calendar: {
				sameDay: "[Сегодня, в] LT",
				nextDay: "[Завтра, в] LT",
				lastDay: "[Вчера, в] LT",
				nextWeek: function(e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT": "[В] dddd, [в] LT";
					switch (this.day()) {
					case 0:
						return "[В следующее] dddd, [в] LT";
					case 1:
					case 2:
					case 4:
						return "[В следующий] dddd, [в] LT";
					case 3:
					case 5:
					case 6:
						return "[В следующую] dddd, [в] LT"
					}
				},
				lastWeek: function(e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT": "[В] dddd, [в] LT";
					switch (this.day()) {
					case 0:
						return "[В прошлое] dddd, [в] LT";
					case 1:
					case 2:
					case 4:
						return "[В прошлый] dddd, [в] LT";
					case 3:
					case 5:
					case 6:
						return "[В прошлую] dddd, [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				ss: t,
				m: t,
				mm: t,
				h: "час",
				hh: t,
				d: "день",
				dd: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function(e) {
				return /^(дня|вечера)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ночи": e < 12 ? "утра": e < 17 ? "дня": "вечера"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function(e, t) {
				switch (t) {
				case "M":
				case "d":
				case "DDD":
					return e + "-й";
				case "D":
					return e + "-го";
				case "w":
				case "W":
					return e + "-я";
				default:
					return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
		n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
		return e.defineLocale("sd", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function(e) {
				return "شام" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "صبح": "شام"
			},
			calendar: {
				sameDay: "[اڄ] LT",
				nextDay: "[سڀاڻي] LT",
				nextWeek: "dddd [اڳين هفتي تي] LT",
				lastDay: "[ڪالهه] LT",
				lastWeek: "[گزريل هفتي] dddd [تي] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s پوء",
				past: "%s اڳ",
				s: "چند سيڪنڊ",
				ss: "%d سيڪنڊ",
				m: "هڪ منٽ",
				mm: "%d منٽ",
				h: "هڪ ڪلاڪ",
				hh: "%d ڪلاڪ",
				d: "هڪ ڏينهن",
				dd: "%d ڏينهن",
				M: "هڪ مهينو",
				MM: "%d مهينا",
				y: "هڪ سال",
				yy: "%d سال"
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				ss: "%d sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				ss: "තත්පර %d",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
			ordinal: function(e) {
				return e + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function(e) {
				return "ප.ව." === e || "පස් වරු" === e
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "ප.ව.": "පස් වරු": n ? "පෙ.ව.": "පෙර වරු"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
		n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
		function r(e) {
			return e > 1 && e < 5
		}
		function o(e, t, n, o) {
			var a = e + " ";
			switch (n) {
			case "s":
				return t || o ? "pár sekúnd": "pár sekundami";
			case "ss":
				return t || o ? a + (r(e) ? "sekundy": "sekúnd") : a + "sekundami";
			case "m":
				return t ? "minúta": o ? "minútu": "minútou";
			case "mm":
				return t || o ? a + (r(e) ? "minúty": "minút") : a + "minútami";
			case "h":
				return t ? "hodina": o ? "hodinu": "hodinou";
			case "hh":
				return t || o ? a + (r(e) ? "hodiny": "hodín") : a + "hodinami";
			case "d":
				return t || o ? "deň": "dňom";
			case "dd":
				return t || o ? a + (r(e) ? "dni": "dní") : a + "dňami";
			case "M":
				return t || o ? "mesiac": "mesiacom";
			case "MM":
				return t || o ? a + (r(e) ? "mesiace": "mesiacov") : a + "mesiacmi";
			case "y":
				return t || o ? "rok": "rokom";
			case "yy":
				return t || o ? a + (r(e) ? "roky": "rokov") : a + "rokmi"
			}
		}
		return e.defineLocale("sk", {
			months: t,
			monthsShort: n,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v nedeľu o] LT";
					case 1:
					case 2:
						return "[v] dddd [o] LT";
					case 3:
						return "[v stredu o] LT";
					case 4:
						return "[vo štvrtok o] LT";
					case 5:
						return "[v piatok o] LT";
					case 6:
						return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[minulú nedeľu o] LT";
					case 1:
					case 2:
						return "[minulý] dddd [o] LT";
					case 3:
						return "[minulú stredu o] LT";
					case 4:
					case 5:
						return "[minulý] dddd [o] LT";
					case 6:
						return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: o,
				ss: o,
				m: o,
				mm: o,
				h: o,
				hh: o,
				d: o,
				dd: o,
				M: o,
				MM: o,
				y: o,
				yy: o
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = e + " ";
			switch (n) {
			case "s":
				return t || r ? "nekaj sekund": "nekaj sekundami";
			case "ss":
				return o += 1 === e ? t ? "sekundo": "sekundi": 2 === e ? t || r ? "sekundi": "sekundah": e < 5 ? t || r ? "sekunde": "sekundah": "sekund";
			case "m":
				return t ? "ena minuta": "eno minuto";
			case "mm":
				return o += 1 === e ? t ? "minuta": "minuto": 2 === e ? t || r ? "minuti": "minutama": e < 5 ? t || r ? "minute": "minutami": t || r ? "minut": "minutami";
			case "h":
				return t ? "ena ura": "eno uro";
			case "hh":
				return o += 1 === e ? t ? "ura": "uro": 2 === e ? t || r ? "uri": "urama": e < 5 ? t || r ? "ure": "urami": t || r ? "ur": "urami";
			case "d":
				return t || r ? "en dan": "enim dnem";
			case "dd":
				return o += 1 === e ? t || r ? "dan": "dnem": 2 === e ? t || r ? "dni": "dnevoma": t || r ? "dni": "dnevi";
			case "M":
				return t || r ? "en mesec": "enim mesecem";
			case "MM":
				return o += 1 === e ? t || r ? "mesec": "mesecem": 2 === e ? t || r ? "meseca": "mesecema": e < 5 ? t || r ? "mesece": "meseci": t || r ? "mesecev": "meseci";
			case "y":
				return t || r ? "eno leto": "enim letom";
			case "yy":
				return o += 1 === e ? t || r ? "leto": "letom": 2 === e ? t || r ? "leti": "letoma": e < 5 ? t || r ? "leta": "leti": t || r ? "let": "leti"
			}
		}
		return e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v] [nedeljo] [ob] LT";
					case 3:
						return "[v] [sredo] [ob] LT";
					case 6:
						return "[v] [soboto] [ob] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[prejšnjo] [nedeljo] [ob] LT";
					case 3:
						return "[prejšnjo] [sredo] [ob] LT";
					case 6:
						return "[prejšnjo] [soboto] [ob] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function(e) {
				return "M" === e.charAt(0)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "PD": "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				ss: "%d sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			words: {
				ss: ["sekunda", "sekunde", "sekundi"],
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function(e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function(e, n, r) {
				var o = t.words[r];
				return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
			}
		};
		return e.defineLocale("sr", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u] [nedelju] [u] LT";
					case 3:
						return "[u] [sredu] [u] LT";
					case 6:
						return "[u] [subotu] [u] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function() {
					return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			words: {
				ss: ["секунда", "секунде", "секунди"],
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function(e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function(e, n, r) {
				var o = t.words[r];
				return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
			}
		};
		return e.defineLocale("sr-cyrl", {
			months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
			monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
			monthsParseExact: !0,
			weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
			weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
			weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[у] [недељу] [у] LT";
					case 3:
						return "[у] [среду] [у] LT";
					case 6:
						return "[у] [суботу] [у] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function() {
					return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "дан",
				dd: t.translate,
				M: "месец",
				MM: t.translate,
				y: "годину",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				ss: "%d mzuzwana",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function(e, t, n) {
				return e < 11 ? "ekuseni": e < 15 ? "emini": e < 19 ? "entsambama": "ebusuku"
			},
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"ekuseni" === t ? e: "emini" === t ? e >= 11 ? e: e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				ss: "%d sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "e": 1 === t ? "a": 2 === t ? "a": "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				ss: "sekunde %d",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "௧",
			2 : "௨",
			3 : "௩",
			4 : "௪",
			5 : "௫",
			6 : "௬",
			7 : "௭",
			8 : "௮",
			9 : "௯",
			0 : "௦"
		},
		n = {
			"௧": "1",
			"௨": "2",
			"௩": "3",
			"௪": "4",
			"௫": "5",
			"௬": "6",
			"௭": "7",
			"௮": "8",
			"௯": "9",
			"௦": "0"
		};
		return e.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, HH:mm",
				LLLL: "dddd, D MMMM YYYY, HH:mm"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				ss: "%d விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			dayOfMonthOrdinalParse: /\d{1,2}வது/,
			ordinal: function(e) {
				return e + "வது"
			},
			preparse: function(e) {
				return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,
				function(e) {
					return n[e]
				})
			},
			postformat: function(e) {
				return e.replace(/\d/g,
				function(e) {
					return t[e]
				})
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function(e, t, n) {
				return e < 2 ? " யாமம்": e < 6 ? " வைகறை": e < 10 ? " காலை": e < 14 ? " நண்பகல்": e < 18 ? " எற்பாடு": e < 22 ? " மாலை": " யாமம்"
			},
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"யாமம்" === t ? e < 2 ? e: e + 12 : "வைகறை" === t || "காலை" === t ? e: "நண்பகல்" === t && e >= 10 ? e: e + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",
				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				ss: "%d సెకన్లు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			dayOfMonthOrdinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"రాత్రి" === t ? e < 4 ? e: e + 12 : "ఉదయం" === t ? e: "మధ్యాహ్నం" === t ? e >= 10 ? e: e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "రాత్రి": e < 10 ? "ఉదయం": e < 17 ? "మధ్యాహ్నం": e < 20 ? "సాయంత్రం": "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("tet", {
			months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
			weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
			weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ohin iha] LT",
				nextDay: "[Aban iha] LT",
				nextWeek: "dddd [iha] LT",
				lastDay: "[Horiseik iha] LT",
				lastWeek: "dddd [semana kotuk] [iha] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "iha %s",
				past: "%s liuba",
				s: "minutu balun",
				ss: "minutu %d",
				m: "minutu ida",
				mm: "minutu %d",
				h: "oras ida",
				hh: "oras %d",
				d: "loron ida",
				dd: "loron %d",
				M: "fulan ida",
				MM: "fulan %d",
				y: "tinan ida",
				yy: "tinan %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			0 : "-ум",
			1 : "-ум",
			2 : "-юм",
			3 : "-юм",
			4 : "-ум",
			5 : "-ум",
			6 : "-ум",
			7 : "-ум",
			8 : "-ум",
			9 : "-ум",
			10 : "-ум",
			12 : "-ум",
			13 : "-ум",
			20 : "-ум",
			30 : "-юм",
			40 : "-ум",
			50 : "-ум",
			60 : "-ум",
			70 : "-ум",
			80 : "-ум",
			90 : "-ум",
			100 : "-ум"
		};
		return e.defineLocale("tg", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
			weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
			weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Имрӯз соати] LT",
				nextDay: "[Пагоҳ соати] LT",
				lastDay: "[Дирӯз соати] LT",
				nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
				lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "баъди %s",
				past: "%s пеш",
				s: "якчанд сония",
				m: "як дақиқа",
				mm: "%d дақиқа",
				h: "як соат",
				hh: "%d соат",
				d: "як рӯз",
				dd: "%d рӯз",
				M: "як моҳ",
				MM: "%d моҳ",
				y: "як сол",
				yy: "%d сол"
			},
			meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"шаб" === t ? e < 4 ? e: e + 12 : "субҳ" === t ? e: "рӯз" === t ? e >= 11 ? e: e + 12 : "бегоҳ" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "шаб": e < 11 ? "субҳ": e < 16 ? "рӯз": e < 19 ? "бегоҳ": "шаб"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
			ordinal: function(e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function(e) {
				return "หลังเที่ยง" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ก่อนเที่ยง": "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				ss: "%d วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				ss: "%d segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
		function n(e, n, r, o) {
			var a = function(e) {
				var n = Math.floor(e % 1e3 / 100),
				r = Math.floor(e % 100 / 10),
				o = e % 10,
				a = "";
				n > 0 && (a += t[n] + "vatlh");
				r > 0 && (a += ("" !== a ? " ": "") + t[r] + "maH");
				o > 0 && (a += ("" !== a ? " ": "") + t[o]);
				return "" === a ? "pagh": a
			} (e);
			switch (r) {
			case "ss":
				return a + " lup";
			case "mm":
				return a + " tup";
			case "hh":
				return a + " rep";
			case "dd":
				return a + " jaj";
			case "MM":
				return a + " jar";
			case "yy":
				return a + " DIS"
			}
		}
		return e.defineLocale("tlh", {
			months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
			monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
			monthsParseExact: !0,
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj] LT",
				nextDay: "[wa’leS] LT",
				nextWeek: "LLL",
				lastDay: "[wa’Hu’] LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS": -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ": -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem": t + " pIq"
				},
				past: function(e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’": -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen": -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben": t + " ret"
				},
				s: "puS lup",
				ss: n,
				m: "wa’ tup",
				mm: n,
				h: "wa’ rep",
				hh: n,
				d: "wa’ jaj",
				dd: n,
				M: "wa’ jar",
				MM: n,
				y: "wa’ DIS",
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = {
			1 : "'inci",
			5 : "'inci",
			8 : "'inci",
			70 : "'inci",
			80 : "'inci",
			2 : "'nci",
			7 : "'nci",
			20 : "'nci",
			50 : "'nci",
			3 : "'üncü",
			4 : "'üncü",
			100 : "'üncü",
			6 : "'ncı",
			9 : "'uncu",
			10 : "'uncu",
			30 : "'uncu",
			60 : "'ıncı",
			90 : "'ıncı"
		};
		return e.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[gelecek] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				ss: "%d saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinal: function(e, n) {
				switch (n) {
				case "d":
				case "D":
				case "Do":
				case "DD":
					return e;
				default:
					if (0 === e) return e + "'ıncı";
					var r = e % 10;
					return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n, r) {
			var o = {
				s: ["viensas secunds", "'iensas secunds"],
				ss: [e + " secunds", e + " secunds"],
				m: ["'n míut", "'iens míut"],
				mm: [e + " míuts", e + " míuts"],
				h: ["'n þora", "'iensa þora"],
				hh: [e + " þoras", e + " þoras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", e + " ars"]
			};
			return r ? o[n][0] : t ? o[n][0] : o[n][1]
		}
		return e.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function(e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "d'o": "D'O": n ? "d'a": "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				ss: "%d ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				ss: "%d imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("ug-cn", {
			months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
			weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
				LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
				LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
			},
			meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e: "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e: e + 12
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "يېرىم كېچە": r < 900 ? "سەھەر": r < 1130 ? "چۈشتىن بۇرۇن": r < 1230 ? "چۈش": r < 1800 ? "چۈشتىن كېيىن": "كەچ"
			},
			calendar: {
				sameDay: "[بۈگۈن سائەت] LT",
				nextDay: "[ئەتە سائەت] LT",
				nextWeek: "[كېلەركى] dddd [سائەت] LT",
				lastDay: "[تۆنۈگۈن] LT",
				lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s كېيىن",
				past: "%s بۇرۇن",
				s: "نەچچە سېكونت",
				ss: "%d سېكونت",
				m: "بىر مىنۇت",
				mm: "%d مىنۇت",
				h: "بىر سائەت",
				hh: "%d سائەت",
				d: "بىر كۈن",
				dd: "%d كۈن",
				M: "بىر ئاي",
				MM: "%d ئاي",
				y: "بىر يىل",
				yy: "%d يىل"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "-كۈنى";
				case "w":
				case "W":
					return e + "-ھەپتە";
				default:
					return e
				}
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		function t(e, t, n) {
			return "m" === n ? t ? "хвилина": "хвилину": "h" === n ? t ? "година": "годину": e + " " +
			function(e, t) {
				var n = e.split("_");
				return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
			} ({
				ss: t ? "секунда_секунди_секунд": "секунду_секунди_секунд",
				mm: t ? "хвилина_хвилини_хвилин": "хвилину_хвилини_хвилин",
				hh: t ? "година_години_годин": "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			} [n], +e)
		}
		function n(e) {
			return function() {
				return e + "о" + (11 === this.hours() ? "б": "") + "] LT"
			}
		}
		return e.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: function(e, t) {
				var n = {
					nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
					accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
					genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
				};
				return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative": /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive": "nominative"][e.day()] : n.nominative
			},
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: n("[Сьогодні "),
				nextDay: n("[Завтра "),
				lastDay: n("[Вчора "),
				nextWeek: n("[У] dddd ["),
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return n("[Минулої] dddd [").call(this);
					case 1:
					case 2:
					case 4:
						return n("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				ss: t,
				m: t,
				mm: t,
				h: "годину",
				hh: t,
				d: "день",
				dd: t,
				M: "місяць",
				MM: t,
				y: "рік",
				yy: t
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function(e) {
				return /^(дня|вечора)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ночі": e < 12 ? "ранку": e < 17 ? "дня": "вечора"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
			ordinal: function(e, t) {
				switch (t) {
				case "M":
				case "d":
				case "DDD":
				case "w":
				case "W":
					return e + "-й";
				case "D":
					return e + "-го";
				default:
					return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
		n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
		return e.defineLocale("ur", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function(e) {
				return "شام" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "صبح": "شام"
			},
			calendar: {
				sameDay: "[آج بوقت] LT",
				nextDay: "[کل بوقت] LT",
				nextWeek: "dddd [بوقت] LT",
				lastDay: "[گذشتہ روز بوقت] LT",
				lastWeek: "[گذشتہ] dddd [بوقت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s بعد",
				past: "%s قبل",
				s: "چند سیکنڈ",
				ss: "%d سیکنڈ",
				m: "ایک منٹ",
				mm: "%d منٹ",
				h: "ایک گھنٹہ",
				hh: "%d گھنٹے",
				d: "ایک دن",
				dd: "%d دن",
				M: "ایک ماہ",
				MM: "%d ماہ",
				y: "ایک سال",
				yy: "%d سال"
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				ss: "%d фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("uz-latn", {
			months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
			monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
			weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
			weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
			weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Bugun soat] LT [da]",
				nextDay: "[Ertaga] LT [da]",
				nextWeek: "dddd [kuni soat] LT [da]",
				lastDay: "[Kecha soat] LT [da]",
				lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Yaqin %s ichida",
				past: "Bir necha %s oldin",
				s: "soniya",
				ss: "%d soniya",
				m: "bir daqiqa",
				mm: "%d daqiqa",
				h: "bir soat",
				hh: "%d soat",
				d: "bir kun",
				dd: "%d kun",
				M: "bir oy",
				MM: "%d oy",
				y: "bir yil",
				yy: "%d yil"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function(e) {
				return /^ch$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? n ? "sa": "SA": n ? "ch": "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				ss: "%d giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				ss: "%d s~écóñ~ds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function(e) {
				var t = e % 10;
				return e + (1 == ~~ (e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("yo", {
			months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
			monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
			weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
			weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
			weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Ònì ni] LT",
				nextDay: "[Ọ̀la ni] LT",
				nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
				lastDay: "[Àna ni] LT",
				lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ní %s",
				past: "%s kọjá",
				s: "ìsẹjú aayá die",
				ss: "aayá %d",
				m: "ìsẹjú kan",
				mm: "ìsẹjú %d",
				h: "wákati kan",
				hh: "wákati %d",
				d: "ọjọ́ kan",
				dd: "ọjọ́ %d",
				M: "osù kan",
				MM: "osù %d",
				y: "ọdún kan",
				yy: "ọdún %d"
			},
			dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
			ordinal: "ọjọ́ %d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah点mm分",
				LLLL: "YYYY年M月D日ddddAh点mm分",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"凌晨" === t || "早上" === t || "上午" === t ? e: "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e: e + 12
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨": r < 900 ? "早上": r < 1130 ? "上午": r < 1230 ? "中午": r < 1800 ? "下午": "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				case "M":
					return e + "月";
				case "w":
				case "W":
					return e + "周";
				default:
					return e
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				ss: "%d 秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("zh-hk", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"凌晨" === t || "早上" === t || "上午" === t ? e: "中午" === t ? e >= 11 ? e: e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨": r < 900 ? "早上": r < 1130 ? "上午": r < 1230 ? "中午": r < 1800 ? "下午": "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				case "M":
					return e + "月";
				case "w":
				case "W":
					return e + "週";
				default:
					return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r, o, a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	}; !
	function(s, u) {
		"object" === i(t) && void 0 !== e ? u(n(0)) : (o = [n(0)], void 0 === (a = "function" == typeof(r = u) ? r.apply(t, o) : r) || (e.exports = a))
	} (0,
	function(e) {
		return e.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0),
				"凌晨" === t || "早上" === t || "上午" === t ? e: "中午" === t ? e >= 11 ? e: e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨": r < 900 ? "早上": r < 1130 ? "上午": r < 1230 ? "中午": r < 1800 ? "下午": "晚上"
			},
			calendar: {
				sameDay: "[今天] LT",
				nextDay: "[明天] LT",
				nextWeek: "[下]dddd LT",
				lastDay: "[昨天] LT",
				lastWeek: "[上]dddd LT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function(e, t) {
				switch (t) {
				case "d":
				case "D":
				case "DDD":
					return e + "日";
				case "M":
					return e + "月";
				case "w":
				case "W":
					return e + "週";
				default:
					return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})
},
function(e, t, n) {
	"use strict";
	var r = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r)
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n),
			r && e(t, r),
			t
		}
	} (),
	o = n(127),
	a = n(1),
	i = n(130),
	s = d(n(132)),
	u = d(n(0));
	function d(e) {
		return e && e.__esModule ? e: {
		default:
			e
		}
	}
	var l = "authorization_code",
	c = a.LS_ACCESS_TOKEN_KEY + (0, u.
default)().format("YYYYMMDD");
	var m = function() {
		function e() {
			var t = this,
			n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; !
			function(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			} (this, e),
			this.defaultTheme = s.
		default,
			this.useTheme(s.
		default),
			Object.assign(this, {
				id: window.location.href,
				title: window.document.title,
				link: window.location.href,
				desc: "",
				labels: "",
				theme: s.
			default,
				oauth: {},
				perPage: 20,
				maxCommentHeight: 250
			},
			n),
			this.useTheme(this.theme);
			var r = {};
			try {
				var u = localStorage.getItem(a.LS_USER_KEY);
				this.accessToken && u && Object.assign(r, JSON.parse(u), {
					fromCache: !0
				})
			} catch(e) {
				localStorage.removeItem(a.LS_USER_KEY),
				localStorage.removeItem(a.LS_ACCESS_TOKEN_KEY)
			}
			this.state = (0, o.observable)({
				user: r,
				error: null,
				meta: {},
				comments: void 0,
				currentPage: 1
			});
			var d = i.Query.parse();
			if (d.code) {
				var c = this.oauth,
				m = c.client_id,
				_ = c.client_secret,
				f = this.backcall_uri + "?bkurl=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.hash.split("?")[0]),
				p = d.code;
				delete d.code;
				var y = i.Query.stringify(d),
				h = "" + window.location.origin + window.location.pathname + y + window.location.hash.split("?")[0];
				history.replaceState({},
				"", h),
				Object.assign(this, {
					id: h,
					link: h
				},
				n),
				this.state.user.isLoggingIn = !0,
				i.http.post(this.oauth_uri, {
					code: p,
					client_id: m,
					client_secret: _,
					redirect_uri: f,
					grant_type: l
				},
				"").then(function(e) {
					t.accessToken = e.access_token,
					t.update()
				}).
				catch(function(e) {
					t.state.user.isLoggingIn = !1,
					alert(e)
				})
			} else this.update()
		}
		return r(e, [{
			key: "accessToken",
			get: function() {
				var e = localStorage.getItem(c);
				return e || localStorage.clear(),
				e
			},
			set: function(e) {
				localStorage.setItem(c, e)
			}
		},
		{
			key: "loginLink",
			get: function() {
				var e = this.backcall_uri + "?bkurl=" + encodeURIComponent(window.location.href),
				t = Object.assign({
					response_type: "code",
					redirect_uri: e
				},
				this.oauth);
				return "https://gitee.com/oauth/authorize" + i.Query.stringify(t)
			}
		}]),
		r(e, [{
			key: "init",
			value: function() {
				var e = this;
				return this.createIssue().then(function() {
					return e.loadComments()
				}).then(function(t) {
					return e.state.error = null,
					t
				})
			}
		},
		{
			key: "useTheme",
			value: function() {
				var e = this,
				t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				this.theme = t,
				Object.keys(this.theme).forEach(function(t) {
					return function(e, t) {
						e[t] = function(n) {
							var r = (0, i.getTargetContainer)(n),
							a = e.theme[t] || e.defaultTheme[t];
							return (0, o.autorun)(function() {
								var t = a(e.state, e);
								r.firstChild ? r.replaceChild(t, r.firstChild) : r.appendChild(t)
							}),
							r
						}
					} (e, t)
				})
			}
		},
		{
			key: "update",
			value: function() {
				var e = this;
				return Promise.all([this.loadMeta(), this.loadUserInfo()]).then(function() {
					return Promise.all([e.loadComments()])
				}).
				catch(function(t) {
					return e.state.error = t
				})
			}
		},
		{
			key: "markdown",
			value: function(e) {
				return i.http.post("/markdown", {
					text: e
				})
			}
		},
		{
			key: "users",
			value: function(e) {
				return i.http.get("/users/" + e)
			}
		},
		{
			key: "createIssue",
			value: function() {
				var e = this,
				t = this.id,
				n = this.owner,
				r = this.repo,
				o = this.title,
				a = this.link,
				s = this.desc,
				u = this.labels,
				d = this.accessToken;
				return i.http.post("/repos/" + n + "/issues", {
					access_token: d,
					title: o,
					repo: r,
					labels: u.concat(["giteement", t]),
					body: a + "\n\n" + s
				}).then(function(t) {
					return e.state.meta = t,
					t
				})
			}
		},
		{
			key: "getIssue",
			value: function() {
				return this.state.meta.id ? Promise.resolve(this.state.meta) : this.loadMeta()
			}
		},
		{
			key: "post",
			value: function(e) {
				var t = this,
				n = this.accessToken;
				return this.getIssue().then(function(t) {
					return i.http.post(t.url + "/comments", {
						access_token: n,
						body: e
					},
					"")
				}).then(function(e) {
					t.state.meta.comments++;
					var n = Math.ceil(t.state.meta.comments / t.perPage);
					return t.state.currentPage === n && t.state.comments.push(e),
					e
				})
			}
		},
		{
			key: "loadMeta",
			value: function() {
				var e = this,
				t = this.id,
				n = this.owner,
				r = this.repo;
				return i.http.get("/repos/" + n + "/" + r + "/issues", {
					creator: n,
					labels: t
				}).then(function(t) {
					return t.length ? (e.state.meta = t[0], t[0]) : Promise.reject(a.NOT_INITIALIZED_ERROR)
				})
			}
		},
		{
			key: "loadComments",
			value: function() {
				var e = this,
				t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentPage;
				return this.getIssue().then(function(n) {
					return i.http.get(n.url + "/comments", {
						page: t,
						per_page: e.perPage
					},
					"")
				}).then(function(t) {
					return e.state.comments = t,
					t
				})
			}
		},
		{
			key: "loadUserInfo",
			value: function() {
				var e = this;
				return this.accessToken && "undefined" != this.accessToken ? i.http.get("/user", {
					token: this.accessToken
				}).then(function(t) {
					return e.state.user = t,
					localStorage.setItem(a.LS_USER_KEY, JSON.stringify(t)),
					t
				}) : (this.logout(), Promise.resolve({}))
			}
		},
		{
			key: "login",
			value: function() {
				window.location.href = this.loginLink
			}
		},
		{
			key: "logout",
			value: function() {
				localStorage.clear(),
				this.state.user = {}
			}
		},
		{
			key: "goto",
			value: function(e) {
				return this.state.currentPage = e,
				this.state.comments = void 0,
				this.loadComments(e)
			}
		}]),
		e
	} ();
	e.exports = m
},
function(e, t, n) {
	"use strict"; (function(e, n) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		},
		o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(e, t) {
			e.__proto__ = t
		} ||
		function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
		};
		/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
		var a = Object.assign ||
		function(e) {
			for (var t, n = 1,
			r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e
		};
		function i(e) {
			var t = "function" == typeof Symbol && e[Symbol.iterator],
			n = 0;
			return t ? t.call(e) : {
				next: function() {
					return e && n >= e.length && (e = void 0),
					{
						value: e && e[n++],
						done: !e
					}
				}
			}
		}
		function s(e, t) {
			var n = "function" == typeof Symbol && e[Symbol.iterator];
			if (!n) return e;
			var r, o, a = n.call(e),
			i = [];
			try {
				for (; (void 0 === t || t-->0) && !(r = a.next()).done;) i.push(r.value)
			} catch(e) {
				o = {
					error: e
				}
			} finally {
				try {
					r && !r.done && (n = a.
					return) && n.call(a)
				} finally {
					if (o) throw o.error
				}
			}
			return i
		}
		var u = "An invariant failed, however the error is obfuscated because this is an production build.",
		d = [];
		Object.freeze(d);
		var l = {};
		function c() {
			return++Me.mobxGuid
		}
		function m(e) {
			throw _(!1, e),
			"X"
		}
		function _(e, t) {
			if (!e) throw new Error("[mobx] " + (t || u))
		}
		function f(e) {
			var t = !1;
			return function() {
				if (!t) return t = !0,
				e.apply(this, arguments)
			}
		}
		Object.freeze(l);
		var p = function() {};
		function y(e) {
			return null !== e && "object" === (void 0 === e ? "undefined": r(e))
		}
		function h(e) {
			if (null === e || "object" !== (void 0 === e ? "undefined": r(e))) return ! 1;
			var t = Object.getPrototypeOf(e);
			return t === Object.prototype || null === t
		}
		function M(e, t, n) {
			Object.defineProperty(e, t, {
				enumerable: !1,
				writable: !0,
				configurable: !0,
				value: n
			})
		}
		function v(e, t) {
			var n = "isMobX" + e;
			return t.prototype[n] = !0,
			function(e) {
				return y(e) && !0 === e[n]
			}
		}
		function L(e) {
			return e instanceof Map
		}
		function b(e) {
			return null === e ? null: "object" === (void 0 === e ? "undefined": r(e)) ? "" + e: e
		}
		var g = Symbol("mobx administration"),
		Y = function() {
			function e(e) {
				void 0 === e && (e = "Atom@" + c()),
				this.name = e,
				this.isPendingUnobservation = !1,
				this.isBeingObserved = !1,
				this.observers = new Set,
				this.diffValue = 0,
				this.lastAccessedBy = 0,
				this.lowestObserverState = Q.NOT_TRACKING
			}
			return e.prototype.onBecomeUnobserved = function() {},
			e.prototype.onBecomeObserved = function() {},
			e.prototype.reportObserved = function() {
				return we(this)
			},
			e.prototype.reportChanged = function() {
				Se(),
				function(e) {
					if (e.lowestObserverState === Q.STALE) return;
					e.lowestObserverState = Q.STALE,
					e.observers.forEach(function(t) {
						t.dependenciesState === Q.UP_TO_DATE && (t.isTracing !== ee.NONE && Te(t, e), t.onBecomeStale()),
						t.dependenciesState = Q.STALE
					})
				} (this),
				De()
			},
			e.prototype.toString = function() {
				return this.name
			},
			e
		} (),
		k = v("Atom", Y);
		function S(e, t, n) {
			void 0 === t && (t = p),
			void 0 === n && (n = p);
			var r = new Y(e);
			return Ve(r, t),
			Be(r, n),
			r
		}
		var D = {
			identity: function(e, t) {
				return e === t
			},
			structural: function(e, t) {
				return Rt(e, t)
			},
		default:
			function(e, t) {
				return Object.is(e, t)
			}
		},
		w = Symbol("mobx did run lazy initializers"),
		T = Symbol("mobx pending decorators"),
		x = {},
		j = {};
		function H(e) {
			if (!0 !== e[w]) {
				var t = e[T];
				if (t) for (var n in M(e, w, !0), t) {
					var r = t[n];
					r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget, r.decoratorArguments)
				}
			}
		}
		function O(e, t) {
			return function() {
				var n, r = function(r, o, i, s) {
					if (!0 === s) return t(r, o, i, r, n),
					null;
					if (!Object.prototype.hasOwnProperty.call(r, T)) {
						var u = r[T];
						M(r, T, a({},
						u))
					}
					return r[T][o] = {
						prop: o,
						propertyCreator: t,
						descriptor: i,
						decoratorTarget: r,
						decoratorArguments: n
					},
					function(e, t) {
						var n = t ? x: j;
						return n[e] || (n[e] = {
							configurable: !0,
							enumerable: t,
							get: function() {
								return H(this),
								this[e]
							},
							set: function(t) {
								H(this),
								this[e] = t
							}
						})
					} (o, e)
				};
				return function(e) {
					return (2 === e.length || 3 === e.length) && "string" == typeof e[1] || 4 === e.length && !0 === e[3]
				} (arguments) ? (n = d, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
			}
		}
		function E(e, t, n) {
			return at(e) ? e: Array.isArray(e) ? q.array(e, {
				name: n
			}) : h(e) ? q.object(e, void 0, {
				name: n
			}) : L(e) ? q.map(e, {
				name: n
			}) : e
		}
		function A(e) {
			return e
		}
		function P(t) {
			_(t);
			var n = O(!0,
			function(e, n, r, o, a) {
				var i = r ? r.initializer ? r.initializer.call(e) : r.value: void 0;
				Ot(e).addObservableProp(n, i, t)
			}),
			r = (void 0 !== e && e.env, n);
			return r.enhancer = t,
			r
		}
		var C = {
			deep: !0,
			name: void 0,
			defaultDecorator: void 0,
			proxy: !0
		};
		function W(e) {
			return null === e || void 0 === e ? C: "string" == typeof e ? {
				name: e,
				deep: !0,
				proxy: !0
			}: e
		}
		Object.freeze(C);
		var N = P(E),
		F = P(function(e, t, n) {
			return void 0 === e || null === e ? e: Wt(e) || wt(e) || jt(e) ? e: Array.isArray(e) ? q.array(e, {
				name: n,
				deep: !1
			}) : h(e) ? q.object(e, void 0, {
				name: n,
				deep: !1
			}) : L(e) ? q.map(e, {
				name: n,
				deep: !1
			}) : m(!1)
		}),
		z = P(A),
		I = P(function(e, t, n) {
			return Rt(e, t) ? t: e
		});
		function R(e) {
			return e.defaultDecorator ? e.defaultDecorator.enhancer: !1 === e.deep ? A: E
		}
		var J = {
			box: function(e, t) {
				arguments.length > 2 && U("box");
				var n = W(t);
				return new ne(e, R(n), n.name)
			},
			array: function(e, t) {
				arguments.length > 2 && U("array");
				var n = W(t);
				return function(e, t, n, r) {
					void 0 === n && (n = "ObservableArray@" + c());
					void 0 === r && (r = !1);
					var o = new Yt(n, t, r); !
					function(e, t, n) {
						Object.defineProperty(e, t, {
							enumerable: !1,
							writable: !1,
							configurable: !0,
							value: n
						})
					} (o.values, g, o);
					var a = new Proxy(o.values, gt);
					if (o.proxy = a, e && e.length) {
						var i = Z(!0);
						o.spliceWithArray(0, 0, e),
						X(i)
					}
					return a
				} (e, R(n), n.name)
			},
			map: function(e, t) {
				arguments.length > 2 && U("map");
				var n = W(t);
				return new xt(e, R(n), n.name)
			},
			object: function(e, t, n) {
				"string" == typeof arguments[1] && U("object");
				var r = W(n);
				if (!1 === r.proxy) return $e({},
				e, t, r);
				var o = Ke(r),
				a = function(e) {
					var t = new Proxy(e, pt);
					return e[g].proxy = t,
					t
				} ($e({},
				void 0, void 0, r));
				return Ze(a, e, t, o),
				a
			},
			ref: z,
			shallow: F,
			deep: N,
			struct: I
		},
		q = function(e, t, n) {
			if ("string" == typeof arguments[1]) return N.apply(null, arguments);
			if (at(e)) return e;
			var r = h(e) ? q.object(e, t, n) : Array.isArray(e) ? q.array(e, t) : L(e) ? q.map(e, t) : e;
			if (r !== e) return r;
			m(!1)
		};
		function U(e) {
			m("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
		}
		Object.keys(J).forEach(function(e) {
			return q[e] = J[e]
		});
		var V = O(!1,
		function(e, t, n, r, o) {
			var i = n.get,
			s = n.set,
			u = o[0] || {};
			Ot(e).addComputedProp(r, t, a({
				get: i,
				set: s,
				context: e
			},
			u))
		}),
		B = V({
			equals: D.structural
		}),
		G = function(e, t, n) {
			if ("string" == typeof t) return V.apply(null, arguments);
			if (null !== e && "object" === (void 0 === e ? "undefined": r(e)) && 1 === arguments.length) return V.apply(null, arguments);
			var o = "object" === (void 0 === t ? "undefined": r(t)) ? t: {};
			return o.get = e,
			o.set = "function" == typeof t ? t: o.set,
			o.name = o.name || e.name || "",
			new oe(o)
		};
		function $(e, t) {
			var n = function() {
				return K(e, t, this, arguments)
			};
			return n.isMobxAction = !0,
			n
		}
		function K(e, t, n, r) {
			var o = function(e, t, n, r) {
				var o = Ce() && !!e,
				a = 0;
				var i = _e();
				Se();
				var s = Z(!0);
				return {
					prevDerivation: i,
					prevAllowStateChanges: s,
					notifySpy: o,
					startTime: a
				}
			} (e);
			try {
				return t.apply(n, r)
			} finally { !
				function(e) {
					X(e.prevAllowStateChanges),
					De(),
					fe(e.prevDerivation),
					e.notifySpy,
					0
				} (o)
			}
		}
		function Z(e) {
			var t = Me.allowStateChanges;
			return Me.allowStateChanges = e,
			t
		}
		function X(e) {
			Me.allowStateChanges = e
		}
		G.struct = B;
		var Q, ee, te = {},
		ne = function(e) {
			function t(t, n, r, o) {
				void 0 === r && (r = "ObservableValue@" + c()),
				void 0 === o && (o = !0);
				var a = e.call(this, r) || this;
				return a.enhancer = n,
				a.hasUnreportedChange = !1,
				a.value = n(t, void 0, r),
				o && Ce(),
				a
			}
			return function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t),
				e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			} (t, e),
			t.prototype.dehanceValue = function(e) {
				return void 0 !== this.dehancer ? this.dehancer(e) : e
			},
			t.prototype.set = function(e) {
				this.value;
				if ((e = this.prepareNewValue(e)) !== te) {
					Ce();
					0,
					this.setNewValue(e)
				}
			},
			t.prototype.prepareNewValue = function(e) {
				if (de(this), yt(this)) {
					var t = Mt(this, {
						object: this,
						type: "update",
						newValue: e
					});
					if (!t) return te;
					e = t.newValue
				}
				return e = this.enhancer(e, this.value, this.name),
				this.value !== e ? e: te
			},
			t.prototype.setNewValue = function(e) {
				var t = this.value;
				this.value = e,
				this.reportChanged(),
				vt(this) && bt(this, {
					type: "update",
					object: this,
					newValue: e,
					oldValue: t
				})
			},
			t.prototype.get = function() {
				return this.reportObserved(),
				this.dehanceValue(this.value)
			},
			t.prototype.intercept = function(e) {
				return ht(this, e)
			},
			t.prototype.observe = function(e, t) {
				return t && e({
					object: this,
					type: "update",
					newValue: this.value,
					oldValue: void 0
				}),
				Lt(this, e)
			},
			t.prototype.toJSON = function() {
				return this.get()
			},
			t.prototype.toString = function() {
				return this.name + "[" + this.value + "]"
			},
			t.prototype.valueOf = function() {
				return b(this.get())
			},
			t.prototype[Symbol.toPrimitive] = function() {
				return this.valueOf()
			},
			t
		} (Y),
		re = v("ObservableValue", ne),
		oe = function() {
			function e(e) {
				this.dependenciesState = Q.NOT_TRACKING,
				this.observing = [],
				this.newObserving = null,
				this.isBeingObserved = !1,
				this.isPendingUnobservation = !1,
				this.observers = new Set,
				this.diffValue = 0,
				this.runId = 0,
				this.lastAccessedBy = 0,
				this.lowestObserverState = Q.UP_TO_DATE,
				this.unboundDepsCount = 0,
				this.__mapid = "#" + c(),
				this.value = new ie(null),
				this.isComputing = !1,
				this.isRunningSetter = !1,
				this.isTracing = ee.NONE,
				this.firstGet = !0,
				this.derivation = e.get,
				this.name = e.name || "ComputedValue@" + c(),
				e.set && (this.setter = $(this.name + "-setter", e.set)),
				this.equals = e.equals || (e.compareStructural || e.struct ? D.structural: D.
			default),
				this.scope = e.context,
				this.requiresReaction = !!e.requiresReaction,
				this.keepAlive = !!e.keepAlive
			}
			return e.prototype.onBecomeStale = function() { !
				function(e) {
					if (e.lowestObserverState !== Q.UP_TO_DATE) return;
					e.lowestObserverState = Q.POSSIBLY_STALE,
					e.observers.forEach(function(t) {
						t.dependenciesState === Q.UP_TO_DATE && (t.dependenciesState = Q.POSSIBLY_STALE, t.isTracing !== ee.NONE && Te(t, e), t.onBecomeStale())
					})
				} (this)
			},
			e.prototype.onBecomeUnobserved = function() {},
			e.prototype.onBecomeObserved = function() {},
			e.prototype.get = function() {
				var e = this;
				this.keepAlive && this.firstGet && (this.firstGet = !1, Je(function() {
					return e.get()
				})),
				this.isComputing && m("Cycle detected in computation " + this.name + ": " + this.derivation),
				0 === Me.inBatch && 0 === this.observers.size ? ue(this) && (this.warnAboutUntrackedRead(), Se(), this.value = this.computeValue(!1), De()) : (we(this), ue(this) && this.trackAndCompute() &&
				function(e) {
					if (e.lowestObserverState === Q.STALE) return;
					e.lowestObserverState = Q.STALE,
					e.observers.forEach(function(t) {
						t.dependenciesState === Q.POSSIBLY_STALE ? t.dependenciesState = Q.STALE: t.dependenciesState === Q.UP_TO_DATE && (e.lowestObserverState = Q.UP_TO_DATE)
					})
				} (this));
				var t = this.value;
				if (se(t)) throw t.cause;
				return t
			},
			e.prototype.peek = function() {
				var e = this.computeValue(!1);
				if (se(e)) throw e.cause;
				return e
			},
			e.prototype.set = function(e) {
				if (this.setter) {
					_(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),
					this.isRunningSetter = !0;
					try {
						this.setter.call(this.scope, e)
					} finally {
						this.isRunningSetter = !1
					}
				} else _(!1, !1)
			},
			e.prototype.trackAndCompute = function() {
				Ce();
				var e = this.value,
				t = this.dependenciesState === Q.NOT_TRACKING,
				n = this.computeValue(!0),
				r = t || se(e) || se(n) || !this.equals(e, n);
				return r && (this.value = n),
				r
			},
			e.prototype.computeValue = function(e) {
				var t;
				if (this.isComputing = !0, Me.computationDepth++, e) t = le(this, this.derivation, this.scope);
				else if (!0 === Me.disableErrorBoundaries) t = this.derivation.call(this.scope);
				else try {
					t = this.derivation.call(this.scope)
				} catch(e) {
					t = new ie(e)
				}
				return Me.computationDepth--,
				this.isComputing = !1,
				t
			},
			e.prototype.suspend = function() {
				ce(this),
				this.value = void 0
			},
			e.prototype.observe = function(e, t) {
				var n = this,
				r = !0,
				o = void 0;
				return Je(function() {
					var a = n.get();
					if (!r || t) {
						var i = _e();
						e({
							type: "update",
							object: n,
							newValue: a,
							oldValue: o
						}),
						fe(i)
					}
					r = !1,
					o = a
				})
			},
			e.prototype.warnAboutUntrackedRead = function() {},
			e.prototype.toJSON = function() {
				return this.get()
			},
			e.prototype.toString = function() {
				return this.name + "[" + this.derivation.toString() + "]"
			},
			e.prototype.valueOf = function() {
				return b(this.get())
			},
			e.prototype[Symbol.toPrimitive] = function() {
				return this.valueOf()
			},
			e
		} (),
		ae = v("ComputedValue", oe); !
		function(e) {
			e[e.NOT_TRACKING = -1] = "NOT_TRACKING",
			e[e.UP_TO_DATE = 0] = "UP_TO_DATE",
			e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE",
			e[e.STALE = 2] = "STALE"
		} (Q || (t.IDerivationState = Q = {})),
		function(e) {
			e[e.NONE = 0] = "NONE",
			e[e.LOG = 1] = "LOG",
			e[e.BREAK = 2] = "BREAK"
		} (ee || (ee = {}));
		var ie = function() {
			return function(e) {
				this.cause = e
			}
		} ();
		function se(e) {
			return e instanceof ie
		}
		function ue(e) {
			switch (e.dependenciesState) {
			case Q.UP_TO_DATE:
				return ! 1;
			case Q.NOT_TRACKING:
			case Q.STALE:
				return ! 0;
			case Q.POSSIBLY_STALE:
				for (var t = _e(), n = e.observing, r = n.length, o = 0; o < r; o++) {
					var a = n[o];
					if (ae(a)) {
						if (Me.disableErrorBoundaries) a.get();
						else try {
							a.get()
						} catch(e) {
							return fe(t),
							!0
						}
						if (e.dependenciesState === Q.STALE) return fe(t),
						!0
					}
				}
				return pe(e),
				fe(t),
				!1
			}
		}
		function de(e) {
			var t = e.observers.size > 0;
			Me.computationDepth > 0 && t && m(!1),
			Me.allowStateChanges || !t && "strict" !== Me.enforceActions || m(!1)
		}
		function le(e, t, n) {
			pe(e),
			e.newObserving = new Array(e.observing.length + 100),
			e.unboundDepsCount = 0,
			e.runId = ++Me.runId;
			var r, o = Me.trackingDerivation;
			if (Me.trackingDerivation = e, !0 === Me.disableErrorBoundaries) r = t.call(n);
			else try {
				r = t.call(n)
			} catch(e) {
				r = new ie(e)
			}
			return Me.trackingDerivation = o,
			function(e) {
				for (var t = e.observing,
				n = e.observing = e.newObserving,
				r = Q.UP_TO_DATE,
				o = 0,
				a = e.unboundDepsCount,
				i = 0; i < a; i++) {
					var s = n[i];
					0 === s.diffValue && (s.diffValue = 1, o !== i && (n[o] = s), o++),
					s.dependenciesState > r && (r = s.dependenciesState)
				}
				n.length = o,
				e.newObserving = null,
				a = t.length;
				for (; a--;) {
					var s = t[a];
					0 === s.diffValue && Ye(s, e),
					s.diffValue = 0
				}
				for (; o--;) {
					var s = n[o];
					1 === s.diffValue && (s.diffValue = 0, ge(s, e))
				}
				r !== Q.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
			} (e),
			r
		}
		function ce(e) {
			var t = e.observing;
			e.observing = [];
			for (var n = t.length; n--;) Ye(t[n], e);
			e.dependenciesState = Q.NOT_TRACKING
		}
		function me(e) {
			var t = _e();
			try {
				return e()
			} finally {
				fe(t)
			}
		}
		function _e() {
			var e = Me.trackingDerivation;
			return Me.trackingDerivation = null,
			e
		}
		function fe(e) {
			Me.trackingDerivation = e
		}
		function pe(e) {
			if (e.dependenciesState !== Q.UP_TO_DATE) {
				e.dependenciesState = Q.UP_TO_DATE;
				for (var t = e.observing,
				n = t.length; n--;) t[n].lowestObserverState = Q.UP_TO_DATE
			}
		}
		var ye = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId"],
		he = function() {
			return function() {
				this.version = 5,
				this.trackingDerivation = null,
				this.computationDepth = 0,
				this.runId = 0,
				this.mobxGuid = 0,
				this.inBatch = 0,
				this.pendingUnobservations = [],
				this.pendingReactions = [],
				this.isRunningReactions = !1,
				this.allowStateChanges = !0,
				this.enforceActions = !1,
				this.spyListeners = [],
				this.globalReactionErrorHandlers = [],
				this.computedRequiresReaction = !1,
				this.disableErrorBoundaries = !1
			}
		} (),
		Me = new he,
		ve = !1,
		Le = be();
		function be() {
			return "undefined" != typeof window ? window: n
		}
		function ge(e, t) {
			e.observers.add(t),
			e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
		}
		function Ye(e, t) {
			e.observers.delete(t),
			0 === e.observers.size && ke(e)
		}
		function ke(e) { ! 1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, Me.pendingUnobservations.push(e))
		}
		function Se() {
			Me.inBatch++
		}
		function De() {
			if (0 == --Me.inBatch) {
				Oe();
				for (var e = Me.pendingUnobservations,
				t = 0; t < e.length; t++) {
					var n = e[t];
					n.isPendingUnobservation = !1,
					0 === n.observers.size && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof oe && n.suspend())
				}
				Me.pendingUnobservations = []
			}
		}
		function we(e) {
			var t = Me.trackingDerivation;
			return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.size && Me.inBatch > 0 && ke(e), !1)
		}
		function Te(e, t) {
			if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === ee.BREAK) {
				var n = []; !
				function e(t, n, r) {
					if (n.length >= 1e3) return void n.push("(and many more)");
					n.push("" + new Array(r).join("\t") + t.name);
					t.dependencies && t.dependencies.forEach(function(t) {
						return e(t, n, r + 1)
					})
				} (Xe(e), n, 1),
				new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof oe ? e.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
			}
		}
		Le.__mobxInstanceCount ? (Le.__mobxInstanceCount++, setTimeout(function() {
			ve || m(!1)
		},
		1)) : Le.__mobxInstanceCount = 1;
		var xe = function() {
			function e(e, t, n) {
				void 0 === e && (e = "Reaction@" + c()),
				this.name = e,
				this.onInvalidate = t,
				this.errorHandler = n,
				this.observing = [],
				this.newObserving = [],
				this.dependenciesState = Q.NOT_TRACKING,
				this.diffValue = 0,
				this.runId = 0,
				this.unboundDepsCount = 0,
				this.__mapid = "#" + c(),
				this.isDisposed = !1,
				this._isScheduled = !1,
				this._isTrackPending = !1,
				this._isRunning = !1,
				this.isTracing = ee.NONE
			}
			return e.prototype.onBecomeStale = function() {
				this.schedule()
			},
			e.prototype.schedule = function() {
				this._isScheduled || (this._isScheduled = !0, Me.pendingReactions.push(this), Oe())
			},
			e.prototype.isScheduled = function() {
				return this._isScheduled
			},
			e.prototype.runReaction = function() {
				if (!this.isDisposed) {
					if (Se(), this._isScheduled = !1, ue(this)) {
						this._isTrackPending = !0;
						try {
							this.onInvalidate(),
							this._isTrackPending && Ce()
						} catch(e) {
							this.reportExceptionInDerivation(e)
						}
					}
					De()
				}
			},
			e.prototype.track = function(e) {
				Se();
				Ce();
				this._isRunning = !0;
				var t = le(this, e, void 0);
				this._isRunning = !1,
				this._isTrackPending = !1,
				this.isDisposed && ce(this),
				se(t) && this.reportExceptionInDerivation(t.cause),
				De()
			},
			e.prototype.reportExceptionInDerivation = function(e) {
				var t = this;
				if (this.errorHandler) this.errorHandler(e, this);
				else {
					if (Me.disableErrorBoundaries) throw e;
					var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
					console.error(n, e),
					Ce() && We({
						type: "error",
						name: this.name,
						message: n,
						error: "" + e
					}),
					Me.globalReactionErrorHandlers.forEach(function(n) {
						return n(e, t)
					})
				}
			},
			e.prototype.dispose = function() {
				this.isDisposed || (this.isDisposed = !0, this._isRunning || (Se(), ce(this), De()))
			},
			e.prototype.getDisposer = function() {
				var e = this.dispose.bind(this);
				return e[g] = this,
				e
			},
			e.prototype.toString = function() {
				return "Reaction[" + this.name + "]"
			},
			e.prototype.trace = function(e) {
				void 0 === e && (e = !1),
				ct(this, e)
			},
			e
		} ();
		var je = 100,
		He = function(e) {
			return e()
		};
		function Oe() {
			Me.inBatch > 0 || Me.isRunningReactions || He(Ee)
		}
		function Ee() {
			Me.isRunningReactions = !0;
			for (var e = Me.pendingReactions,
			t = 0; e.length > 0;) {++t === je && (console.error("Reaction doesn't converge to a stable state after " + je + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
				for (var n = e.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction()
			}
			Me.isRunningReactions = !1
		}
		var Ae = v("Reaction", xe);
		function Pe(e) {
			var t = He;
			He = function(n) {
				return e(function() {
					return t(n)
				})
			}
		}
		function Ce() {
			return ! 1
		}
		function We(e) {}
		function Ne(e) {
			return console.warn("[mobx.spy] Is a no-op in production builds"),
			function() {}
		}
		function Fe() {
			m(!1)
		}
		function ze(e) {
			return function(t, n, r) {
				if (r) {
					if (r.value) return {
						value: $(e, r.value),
						enumerable: !1,
						configurable: !0,
						writable: !0
					};
					var o = r.initializer;
					return {
						enumerable: !1,
						configurable: !0,
						writable: !0,
						initializer: function() {
							return $(e, o.call(this))
						}
					}
				}
				return function(e) {
					return function(t, n, r) {
						Object.defineProperty(t, n, {
							configurable: !0,
							enumerable: !1,
							get: function() {},
							set: function(t) {
								M(this, n, Ie(e, t))
							}
						})
					}
				} (e).apply(this, arguments)
			}
		}
		var Ie = function(e, t, n, r) {
			return 1 === arguments.length && "function" == typeof e ? $(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? $(e, t) : 1 === arguments.length && "string" == typeof e ? ze(e) : !0 !== r ? ze(t).apply(null, arguments) : void M(e, t, $(e.name || t, n.value))
		};
		function Re(e, t, n) {
			M(e, t, $(t, n.bind(e)))
		}
		function Je(e, t) {
			void 0 === t && (t = l);
			var n, r = t && t.name || e.name || "Autorun@" + c();
			if (!t.scheduler && !t.delay) n = new xe(r,
			function() {
				this.track(i)
			},
			t.onError);
			else {
				var o = Ue(t),
				a = !1;
				n = new xe(r,
				function() {
					a || (a = !0, o(function() {
						a = !1,
						n.isDisposed || n.track(i)
					}))
				},
				t.onError)
			}
			function i() {
				e(n)
			}
			return n.schedule(),
			n.getDisposer()
		}
		Ie.bound = function(e, t, n, r) {
			return ! 0 === r ? (Re(e, t, n.value), null) : n ? {
				configurable: !0,
				enumerable: !1,
				get: function() {
					return Re(this, t, n.value || n.initializer.call(this)),
					this[t]
				},
				set: Fe
			}: {
				enumerable: !1,
				configurable: !0,
				set: function(e) {
					Re(this, t, e)
				},
				get: function() {}
			}
		};
		var qe = function(e) {
			return e()
		};
		function Ue(e) {
			return e.scheduler ? e.scheduler: e.delay ?
			function(t) {
				return setTimeout(t, e.delay)
			}: qe
		}
		function Ve(e, t, n) {
			return Ge("onBecomeObserved", e, t, n)
		}
		function Be(e, t, n) {
			return Ge("onBecomeUnobserved", e, t, n)
		}
		function Ge(e, t, n, r) {
			var o = "string" == typeof n ? Nt(t, n) : Nt(t),
			a = "string" == typeof n ? r: n,
			i = o[e];
			return "function" != typeof i ? m(!1) : (o[e] = function() {
				i.call(this),
				a.call(this)
			},
			function() {
				o[e] = i
			})
		}
		function $e(e, t, n, r) {
			var o = Ke(r = W(r));
			return Ot(e, r.name, o.enhancer),
			t && Ze(e, t, n, o),
			e
		}
		function Ke(e) {
			return e.defaultDecorator || (!1 === e.deep ? z: N)
		}
		function Ze(e, t, n, r) {
			Se();
			try {
				for (var o in t) {
					var a = Object.getOwnPropertyDescriptor(t, o);
					0;
					var i = (n && o in n ? n[o] : a.get ? V: r)(e, o, a, !0);
					i && Object.defineProperty(e, o, i)
				}
			} finally {
				De()
			}
		}
		function Xe(e, t) {
			return Qe(Nt(e, t))
		}
		function Qe(e) {
			var t = {
				name: e.name
			};
			return e.observing && e.observing.length > 0 && (t.dependencies = function(e) {
				var t = [];
				return e.forEach(function(e) { - 1 === t.indexOf(e) && t.push(e)
				}),
				t
			} (e.observing).map(Qe)),
			t
		}
		function et(e) {
			var t = {
				name: e.name
			};
			return function(e) {
				return e.observers && e.observers.size > 0
			} (e) && (t.observers = Array.from(function(e) {
				return e.observers
			} (e)).map(et)),
			t
		}
		var tt = 0;
		function nt(e) {
			"function" == typeof e.cancel && e.cancel()
		}
		function rt(e, t) {
			if (null === e || void 0 === e) return ! 1;
			if (void 0 !== t) {
				if (!1 === Wt(e)) return ! 1;
				if (!e[g].values.has(t)) return ! 1;
				var n = Nt(e, t);
				return ae(n)
			}
			return ae(e)
		}
		function ot(e, t) {
			return null !== e && void 0 !== e && (void 0 !== t ? !!Wt(e) && e[g].values.has(t) : Wt(e) || !!e[g] || k(e) || Ae(e) || ae(e))
		}
		function at(e) {
			return 1 !== arguments.length && m(!1),
			ot(e)
		}
		function it(e) {
			return Wt(e) ? e[g].getKeys() : jt(e) ? Array.from(e.keys()) : m(!1)
		}
		function st(e, t, n) {
			if (2 !== arguments.length) if (Wt(e)) {
				var r = e[g];
				r.values.get(t) ? r.write(t, n) : r.addObservableProp(t, n, r.defaultEnhancer)
			} else if (jt(e)) e.set(t, n);
			else {
				if (!wt(e)) return m(!1);
				"number" != typeof t && (t = parseInt(t, 10)),
				_(t >= 0, "Not a valid index: '" + t + "'"),
				Se(),
				t >= e.length && (e.length = t + 1),
				e[t] = n,
				De()
			} else {
				Se();
				var o = t;
				try {
					for (var a in o) st(e, a, o[a])
				} finally {
					De()
				}
			}
		}
		function ut(e, t) {
			return Wt(e) ? Ft(e).has(t) : jt(e) ? e.has(t) : wt(e) ? t >= 0 && t < e.length: m(!1)
		}
		var dt = {
			detectCycles: !0,
			exportMapsAsObjects: !0
		};
		function lt(e, t, n, r) {
			return r.detectCycles && e.set(t, n),
			n
		}
		function ct() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = !1;
			"boolean" == typeof e[e.length - 1] && (n = e.pop());
			var r = function(e) {
				switch (e.length) {
				case 0:
					return Me.trackingDerivation;
				case 1:
					return Nt(e[0]);
				case 2:
					return Nt(e[0], e[1])
				}
			} (e);
			if (!r) return m(!1);
			r.isTracing === ee.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"),
			r.isTracing = n ? ee.BREAK: ee.LOG
		}
		function mt(e, t) {
			void 0 === t && (t = void 0),
			Se();
			try {
				return e.apply(t)
			} finally {
				De()
			}
		}
		function _t(e, t, n) {
			var r;
			"number" == typeof n.timeout && (r = setTimeout(function() {
				if (!a[g].isDisposed) {
					a();
					var e = new Error("WHEN_TIMEOUT");
					if (!n.onError) throw e;
					n.onError(e)
				}
			},
			n.timeout)),
			n.name = n.name || "When@" + c();
			var o = $(n.name + "-effect", t),
			a = Je(function(t) {
				e() && (t.dispose(), r && clearTimeout(r), o())
			},
			n);
			return a
		}
		function ft(e) {
			return e[g]
		}
		var pt = {
			has: function(e, t) {
				if (t === g || "constructor" === t || t === w) return ! 0;
				var n = ft(e);
				return !! n.values.get(t) || ("string" == typeof t ? n.has(t) : t in e)
			},
			get: function(e, t) {
				if (t === g || "constructor" === t || t === w) return e[t];
				var n = ft(e),
				r = n.values.get(t);
				return r instanceof Y ? r.get() : ("string" == typeof t && n.has(t), e[t])
			},
			set: function(e, t, n) {
				return "string" == typeof t && (st(e, t, n), !0)
			},
			deleteProperty: function(e, t) {
				return "string" == typeof t && (ft(e).remove(t), !0)
			},
			ownKeys: function(e) {
				return ft(e).keysAtom.reportObserved(),
				Reflect.ownKeys(e)
			},
			preventExtensions: function(e) {
				return m("Dynamic observable objects cannot be frozen"),
				!1
			}
		};
		function yt(e) {
			return void 0 !== e.interceptors && e.interceptors.length > 0
		}
		function ht(e, t) {
			var n = e.interceptors || (e.interceptors = []);
			return n.push(t),
			f(function() {
				var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
			})
		}
		function Mt(e, t) {
			var n = _e();
			try {
				var r = e.interceptors;
				if (r) for (var o = 0,
				a = r.length; o < a && (_(!(t = r[o](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); o++);
				return t
			} finally {
				fe(n)
			}
		}
		function vt(e) {
			return void 0 !== e.changeListeners && e.changeListeners.length > 0
		}
		function Lt(e, t) {
			var n = e.changeListeners || (e.changeListeners = []);
			return n.push(t),
			f(function() {
				var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
			})
		}
		function bt(e, t) {
			var n = _e(),
			r = e.changeListeners;
			if (r) {
				for (var o = 0,
				a = (r = r.slice()).length; o < a; o++) r[o](t);
				fe(n)
			}
		}
		var gt = {
			get: function(e, t) {
				return t === g ? e[g] : "length" === t ? e[g].getArrayLength() : "number" == typeof t ? kt.get.call(e, t) : "string" != typeof t || isNaN(t) ? kt.hasOwnProperty(t) ? kt[t] : e[t] : kt.get.call(e, parseInt(t))
			},
			set: function(e, t, n) {
				return "length" === t ? (e[g].setArrayLength(n), !0) : "number" == typeof t ? (kt.set.call(e, t, n), !0) : !isNaN(t) && (kt.set.call(e, parseInt(t), n), !0)
			},
			preventExtensions: function(e) {
				return m("Observable arrays cannot be frozen"),
				!1
			}
		};
		var Yt = function() {
			function e(e, t, n) {
				this.owned = n,
				this.values = [],
				this.proxy = void 0,
				this.lastKnownLength = 0,
				this.atom = new Y(e || "ObservableArray@" + c()),
				this.enhancer = function(n, r) {
					return t(n, r, e + "[..]")
				}
			}
			return e.prototype.dehanceValue = function(e) {
				return void 0 !== this.dehancer ? this.dehancer(e) : e
			},
			e.prototype.dehanceValues = function(e) {
				return void 0 !== this.dehancer && this.values.length > 0 ? e.map(this.dehancer) : e
			},
			e.prototype.intercept = function(e) {
				return ht(this, e)
			},
			e.prototype.observe = function(e, t) {
				return void 0 === t && (t = !1),
				t && e({
					object: this.proxy,
					type: "splice",
					index: 0,
					added: this.values.slice(),
					addedCount: this.values.length,
					removed: [],
					removedCount: 0
				}),
				Lt(this, e)
			},
			e.prototype.getArrayLength = function() {
				return this.atom.reportObserved(),
				this.values.length
			},
			e.prototype.setArrayLength = function(e) {
				if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
				var t = this.values.length;
				if (e !== t) if (e > t) {
					for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
					this.spliceWithArray(t, 0, n)
				} else this.spliceWithArray(e, t - e)
			},
			e.prototype.updateArrayLength = function(e, t) {
				if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
				this.lastKnownLength += t
			},
			e.prototype.spliceWithArray = function(e, t, n) {
				var r = this;
				de(this.atom);
				var o = this.values.length;
				if (void 0 === e ? e = 0 : e > o ? e = o: e < 0 && (e = Math.max(0, o + e)), t = 1 === arguments.length ? o - e: void 0 === t || null === t ? 0 : Math.max(0, Math.min(t, o - e)), void 0 === n && (n = d), yt(this)) {
					var a = Mt(this, {
						object: this.proxy,
						type: "splice",
						index: e,
						removedCount: t,
						added: n
					});
					if (!a) return d;
					t = a.removedCount,
					n = a.added
				}
				n = 0 === n.length ? n: n.map(function(e) {
					return r.enhancer(e, void 0)
				});
				var i = this.spliceItemsIntoValues(e, t, n);
				return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, i),
				this.dehanceValues(i)
			},
			e.prototype.spliceItemsIntoValues = function(e, t, n) {
				var r;
				if (n.length < 1e4) return (r = this.values).splice.apply(r,
				function() {
					for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
					return e
				} ([e, t], n));
				var o = this.values.slice(e, e + t);
				return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)),
				o
			},
			e.prototype.notifyArrayChildUpdate = function(e, t, n) {
				var r = !this.owned && !1,
				o = vt(this),
				a = o || r ? {
					object: this.proxy,
					type: "update",
					index: e,
					newValue: t,
					oldValue: n
				}: null;
				this.atom.reportChanged(),
				o && bt(this, a)
			},
			e.prototype.notifyArraySplice = function(e, t, n) {
				var r = !this.owned && !1,
				o = vt(this),
				a = o || r ? {
					object: this.proxy,
					type: "splice",
					index: e,
					removed: n,
					added: t,
					removedCount: n.length,
					addedCount: t.length
				}: null;
				this.atom.reportChanged(),
				o && bt(this, a)
			},
			e
		} (),
		kt = {
			intercept: function(e) {
				return this[g].intercept(e)
			},
			observe: function(e, t) {
				return void 0 === t && (t = !1),
				this[g].observe(e, t)
			},
			clear: function() {
				return this.splice(0)
			},
			replace: function(e) {
				var t = this[g];
				return t.spliceWithArray(0, t.values.length, e)
			},
			toJS: function() {
				return this.slice()
			},
			toJSON: function() {
				return this.toJS()
			},
			splice: function(e, t) {
				for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
				var o = this[g];
				switch (arguments.length) {
				case 0:
					return [];
				case 1:
					return o.spliceWithArray(e);
				case 2:
					return o.spliceWithArray(e, t)
				}
				return o.spliceWithArray(e, t, n)
			},
			spliceWithArray: function(e, t, n) {
				return this[g].spliceWithArray(e, t, n)
			},
			push: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = this[g];
				return n.spliceWithArray(n.values.length, 0, e),
				n.values.length
			},
			pop: function() {
				return this.splice(Math.max(this[g].values.length - 1, 0), 1)[0]
			},
			shift: function() {
				return this.splice(0, 1)[0]
			},
			unshift: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = this[g];
				return n.spliceWithArray(0, 0, e),
				n.values.length
			},
			reverse: function() {
				var e = this.slice();
				return e.reverse.apply(e, arguments)
			},
			sort: function(e) {
				var t = this.slice();
				return t.sort.apply(t, arguments)
			},
			remove: function(e) {
				var t = this[g],
				n = t.dehanceValues(t.values).indexOf(e);
				return n > -1 && (this.splice(n, 1), !0)
			},
			get: function(e) {
				var t = this[g];
				if (t) {
					if (e < t.values.length) return t.atom.reportObserved(),
					t.dehanceValue(t.values[e]);
					console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
				}
			},
			set: function(e, t) {
				var n = this[g],
				r = n.values;
				if (e < r.length) {
					de(n.atom);
					var o = r[e];
					if (yt(n)) {
						var a = Mt(n, {
							type: "update",
							object: this,
							index: e,
							newValue: t
						});
						if (!a) return;
						t = a.newValue
					} (t = n.enhancer(t, o)) !== o && (r[e] = t, n.notifyArrayChildUpdate(e, t, o))
				} else {
					if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
					n.spliceWithArray(e, 0, [t])
				}
			}
		}; ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function(e) {
			kt[e] = function() {
				var t = this[g];
				t.atom.reportObserved();
				var n = t.dehanceValues(t.values);
				return n[e].apply(n, arguments)
			}
		});
		var St, Dt = v("ObservableArrayAdministration", Yt);
		function wt(e) {
			return y(e) && Dt(e[g])
		}
		var Tt = {},
		xt = function() {
			function e(e, t, n) {
				if (void 0 === t && (t = E), void 0 === n && (n = "ObservableMap@" + c()), this.enhancer = t, this.name = n, this[St] = Tt, this._keysAtom = S(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
				this._data = new Map,
				this._hasMap = new Map,
				this.merge(e)
			}
			return e.prototype._has = function(e) {
				return this._data.has(e)
			},
			e.prototype.has = function(e) {
				return this._hasMap.has(e) ? this._hasMap.get(e).get() : this._updateHasMapEntry(e, !1).get()
			},
			e.prototype.set = function(e, t) {
				var n = this._has(e);
				if (yt(this)) {
					var r = Mt(this, {
						type: n ? "update": "add",
						object: this,
						newValue: t,
						name: e
					});
					if (!r) return this;
					t = r.newValue
				}
				return n ? this._updateValue(e, t) : this._addValue(e, t),
				this
			},
			e.prototype.delete = function(e) {
				var t = this;
				if (yt(this) && !(r = Mt(this, {
					type: "delete",
					object: this,
					name: e
				}))) return ! 1;
				if (this._has(e)) {
					var n = vt(this),
					r = n ? {
						type: "delete",
						object: this,
						oldValue: this._data.get(e).value,
						name: e
					}: null;
					return mt(function() {
						t._keysAtom.reportChanged(),
						t._updateHasMapEntry(e, !1),
						t._data.get(e).setNewValue(void 0),
						t._data.delete(e)
					}),
					n && bt(this, r),
					!0
				}
				return ! 1
			},
			e.prototype._updateHasMapEntry = function(e, t) {
				var n = this._hasMap.get(e);
				return n ? n.setNewValue(t) : (n = new ne(t, A, this.name + "." + e + "?", !1), this._hasMap.set(e, n)),
				n
			},
			e.prototype._updateValue = function(e, t) {
				var n = this._data.get(e);
				if ((t = n.prepareNewValue(t)) !== te) {
					var r = vt(this),
					o = r ? {
						type: "update",
						object: this,
						oldValue: n.value,
						name: e,
						newValue: t
					}: null;
					0,
					n.setNewValue(t),
					r && bt(this, o)
				}
			},
			e.prototype._addValue = function(e, t) {
				var n = this;
				de(this._keysAtom),
				mt(function() {
					var r = new ne(t, n.enhancer, n.name + "." + e, !1);
					n._data.set(e, r),
					t = r.value,
					n._updateHasMapEntry(e, !0),
					n._keysAtom.reportChanged()
				});
				var r = vt(this),
				o = r ? {
					type: "add",
					object: this,
					name: e,
					newValue: t
				}: null;
				r && bt(this, o)
			},
			e.prototype.get = function(e) {
				return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
			},
			e.prototype.dehanceValue = function(e) {
				return void 0 !== this.dehancer ? this.dehancer(e) : e
			},
			e.prototype.keys = function() {
				return this._keysAtom.reportObserved(),
				this._data.keys()
			},
			e.prototype.values = function() {
				var e = this,
				t = 0,
				n = Array.from(this.keys());
				return Vt({
					next: function() {
						return t < n.length ? {
							value: e.get(n[t++]),
							done: !1
						}: {
							done: !0
						}
					}
				})
			},
			e.prototype.entries = function() {
				var e = this,
				t = 0,
				n = Array.from(this.keys());
				return Vt({
					next: function() {
						if (t < n.length) {
							var r = n[t++];
							return {
								value: [r, e.get(r)],
								done: !1
							}
						}
						return {
							done: !0
						}
					}
				})
			},
			e.prototype[(St = g, Symbol.iterator)] = function() {
				return this.entries()
			},
			e.prototype.forEach = function(e, t) {
				var n, r;
				try {
					for (var o = i(this), a = o.next(); ! a.done; a = o.next()) {
						var u = s(a.value, 2),
						d = u[0],
						l = u[1];
						e.call(t, l, d, this)
					}
				} catch(e) {
					n = {
						error: e
					}
				} finally {
					try {
						a && !a.done && (r = o.
						return) && r.call(o)
					} finally {
						if (n) throw n.error
					}
				}
			},
			e.prototype.merge = function(e) {
				var t = this;
				return jt(e) && (e = e.toJS()),
				mt(function() {
					h(e) ? Object.keys(e).forEach(function(n) {
						return t.set(n, e[n])
					}) : Array.isArray(e) ? e.forEach(function(e) {
						var n = s(e, 2),
						r = n[0],
						o = n[1];
						return t.set(r, o)
					}) : L(e) ? e.forEach(function(e, n) {
						return t.set(n, e)
					}) : null !== e && void 0 !== e && m("Cannot initialize map from " + e)
				}),
				this
			},
			e.prototype.clear = function() {
				var e = this;
				mt(function() {
					me(function() {
						var t, n;
						try {
							for (var r = i(e.keys()), o = r.next(); ! o.done; o = r.next()) {
								var a = o.value;
								e.delete(a)
							}
						} catch(e) {
							t = {
								error: e
							}
						} finally {
							try {
								o && !o.done && (n = r.
								return) && n.call(r)
							} finally {
								if (t) throw t.error
							}
						}
					})
				})
			},
			e.prototype.replace = function(e) {
				var t = this;
				return mt(function() {
					var n = function(e) {
						return h(e) ? Object.keys(e) : Array.isArray(e) ? e.map(function(e) {
							return s(e, 1)[0]
						}) : L(e) || jt(e) ? Array.from(e.keys()) : m("Cannot get keys from '" + e + "'")
					} (e);
					Array.from(t.keys()).filter(function(e) {
						return - 1 === n.indexOf(e)
					}).forEach(function(e) {
						return t.delete(e)
					}),
					t.merge(e)
				}),
				this
			},
			Object.defineProperty(e.prototype, "size", {
				get: function() {
					return this._keysAtom.reportObserved(),
					this._data.size
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.toPOJO = function() {
				var e, t, n = {};
				try {
					for (var r = i(this), o = r.next(); ! o.done; o = r.next()) {
						var a = s(o.value, 2),
						u = a[0],
						d = a[1];
						n["" + u] = d
					}
				} catch(t) {
					e = {
						error: t
					}
				} finally {
					try {
						o && !o.done && (t = r.
						return) && t.call(r)
					} finally {
						if (e) throw e.error
					}
				}
				return n
			},
			e.prototype.toJS = function() {
				return new Map(this)
			},
			e.prototype.toJSON = function() {
				return this.toPOJO()
			},
			e.prototype.toString = function() {
				var e = this;
				return this.name + "[{ " + Array.from(this.keys()).map(function(t) {
					return t + ": " + e.get(t)
				}).join(", ") + " }]"
			},
			e.prototype.observe = function(e, t) {
				return Lt(this, e)
			},
			e.prototype.intercept = function(e) {
				return ht(this, e)
			},
			e
		} (),
		jt = v("ObservableMap", xt),
		Ht = function() {
			function e(e, t, n, r) {
				void 0 === t && (t = new Map),
				this.target = e,
				this.values = t,
				this.name = n,
				this.defaultEnhancer = r,
				this.keysAtom = new Y(n + ".keys")
			}
			return e.prototype.read = function(e) {
				return this.values.get(e).get()
			},
			e.prototype.write = function(e, t) {
				var n = this.target,
				r = this.values.get(e);
				if (r instanceof oe) r.set(t);
				else {
					if (yt(this)) {
						if (! (a = Mt(this, {
							type: "update",
							object: this.proxy || n,
							name: e,
							newValue: t
						}))) return;
						t = a.newValue
					}
					if ((t = r.prepareNewValue(t)) !== te) {
						var o = vt(this),
						a = o ? {
							type: "update",
							object: this.proxy || n,
							oldValue: r.value,
							name: e,
							newValue: t
						}: null;
						0,
						r.setNewValue(t),
						o && bt(this, a)
					}
				}
			},
			e.prototype.has = function(e) {
				return this.values.get(e) instanceof ne || (this.waitForKey(e), !1)
			},
			e.prototype.waitForKey = function(e) {
				var t = this.pendingKeys || (this.pendingKeys = new Map),
				n = t.get(e);
				n || (n = new ne(!1, A, this.name + "." + e.toString() + "?", !1), t.set(e, n)),
				n.get()
			},
			e.prototype.addObservableProp = function(e, t, n) {
				void 0 === n && (n = this.defaultEnhancer);
				var r = this.target;
				if (yt(this)) {
					var o = Mt(this, {
						object: this.proxy || r,
						name: e,
						type: "add",
						newValue: t
					});
					if (!o) return;
					t = o.newValue
				}
				var a = new ne(t, n, this.name + "." + e, !1);
				this.values.set(e, a),
				t = a.value,
				Object.defineProperty(r, e,
				function(e) {
					return Et[e] || (Et[e] = {
						configurable: !0,
						enumerable: !0,
						get: function() {
							return this[g].read(e)
						},
						set: function(t) {
							this[g].write(e, t)
						}
					})
				} (e)),
				this.notifyPropertyAddition(e, t)
			},
			e.prototype.addComputedProp = function(e, t, n) {
				var r = this.target;
				n.name = n.name || this.name + "." + t,
				this.values.set(t, new oe(n)),
				(e === r ||
				function(e, t) {
					var n = Object.getOwnPropertyDescriptor(e, t);
					return ! n || !1 !== n.configurable && !1 !== n.writable
				} (e, t)) && Object.defineProperty(e, t,
				function(e) {
					return At[e] || (At[e] = {
						configurable: !0,
						enumerable: !1,
						get: function() {
							return Pt(this).read(e)
						},
						set: function(t) {
							Pt(this).write(e, t)
						}
					})
				} (t))
			},
			e.prototype.remove = function(e) {
				if (this.values.has(e)) {
					var t = this.target;
					if (yt(this)) if (! (a = Mt(this, {
						object: this.proxy || t,
						name: e,
						type: "remove"
					}))) return;
					try {
						Se();
						var n = vt(this),
						r = this.values.get(e),
						o = r && r.get();
						r && r.set(void 0),
						this.keysAtom.reportChanged(),
						this.values.delete(e),
						delete this.target[e];
						var a = n ? {
							type: "remove",
							object: this.proxy || t,
							oldValue: o,
							name: e
						}: null;
						0,
						n && bt(this, a)
					} finally {
						De()
					}
				}
			},
			e.prototype.illegalAccess = function(e, t) {
				console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
			},
			e.prototype.observe = function(e, t) {
				return Lt(this, e)
			},
			e.prototype.intercept = function(e) {
				return ht(this, e)
			},
			e.prototype.notifyPropertyAddition = function(e, t) {
				var n = vt(this),
				r = n ? {
					type: "add",
					object: this.proxy || this.target,
					name: e,
					newValue: t
				}: null;
				if (n && bt(this, r), this.pendingKeys) {
					var o = this.pendingKeys.get(e);
					o && o.set(!0)
				}
				this.keysAtom.reportChanged()
			},
			e.prototype.getKeys = function() {
				var e, t;
				this.keysAtom.reportObserved();
				var n = [];
				try {
					for (var r = i(this.values), o = r.next(); ! o.done; o = r.next()) {
						var a = s(o.value, 2),
						u = a[0];
						a[1] instanceof ne && n.push(u)
					}
				} catch(t) {
					e = {
						error: t
					}
				} finally {
					try {
						o && !o.done && (t = r.
						return) && t.call(r)
					} finally {
						if (e) throw e.error
					}
				}
				return n
			},
			e
		} ();
		function Ot(e, t, n) {
			if (void 0 === t && (t = ""), void 0 === n && (n = E), Object.prototype.hasOwnProperty.call(e, g)) return e[g];
			h(e) || (t = (e.constructor.name || "ObservableObject") + "@" + c()),
			t || (t = "ObservableObject@" + c());
			var r = new Ht(e, new Map, t, n);
			return M(e, g, r),
			r
		}
		var Et = {},
		At = {};
		function Pt(e) {
			var t = e[g];
			return t || (H(e), e[g])
		}
		var Ct = v("ObservableObjectAdministration", Ht);
		function Wt(e) {
			return !! y(e) && (H(e), Ct(e[g]))
		}
		function Nt(e, t) {
			if ("object" === (void 0 === e ? "undefined": r(e)) && null !== e) {
				if (wt(e)) return void 0 !== t && m(!1),
				e[g].atom;
				if (jt(e)) {
					var n = e;
					return void 0 === t ? n._keysAtom: ((o = n._data.get(t) || n._hasMap.get(t)) || m(!1), o)
				}
				var o;
				if (H(e), t && !e[g] && e[t], Wt(e)) return t ? ((o = e[g].values.get(t)) || m(!1), o) : m(!1);
				if (k(e) || ae(e) || Ae(e)) return e
			} else if ("function" == typeof e && Ae(e[g])) return e[g];
			return m(!1)
		}
		function Ft(e, t) {
			return e || m("Expecting some object"),
			void 0 !== t ? Ft(Nt(e, t)) : k(e) || ae(e) || Ae(e) ? e: jt(e) ? e: (H(e), e[g] ? e[g] : void m(!1))
		}
		function zt(e, t) {
			return (void 0 !== t ? Nt(e, t) : Wt(e) || jt(e) ? Ft(e) : Nt(e)).name
		}
		var It = Object.prototype.toString;
		function Rt(e, t) {
			return Jt(e, t)
		}
		function Jt(e, t, n, o) {
			if (e === t) return 0 !== e || 1 / e == 1 / t;
			if (null == e || null == t) return ! 1;
			if (e != e) return t != t;
			var a = void 0 === e ? "undefined": r(e);
			return ("function" === a || "object" === a || "object" == (void 0 === t ? "undefined": r(t))) &&
			function(e, t, n, o) {
				e = qt(e),
				t = qt(t);
				var a = It.call(e);
				if (a !== It.call(t)) return ! 1;
				switch (a) {
				case "[object RegExp]":
				case "[object String]":
					return "" + e == "" + t;
				case "[object Number]":
					return + e != +e ? +t != +t: 0 == +e ? 1 / +e == 1 / t: +e == +t;
				case "[object Date]":
				case "[object Boolean]":
					return + e == +t;
				case "[object Symbol]":
					return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
				}
				var i = "[object Array]" === a;
				if (!i) {
					if ("object" != (void 0 === e ? "undefined": r(e)) || "object" != (void 0 === t ? "undefined": r(t))) return ! 1;
					var s = e.constructor,
					u = t.constructor;
					if (s !== u && !("function" == typeof s && s instanceof s && "function" == typeof u && u instanceof u) && "constructor" in e && "constructor" in t) return ! 1
				}
				n = n || [],
				o = o || [];
				var d = n.length;
				for (; d--;) if (n[d] === e) return o[d] === t;
				if (n.push(e), o.push(t), i) {
					if ((d = e.length) !== t.length) return ! 1;
					for (; d--;) if (!Jt(e[d], t[d], n, o)) return ! 1
				} else {
					var l, c = Object.keys(e);
					if (d = c.length, Object.keys(t).length !== d) return ! 1;
					for (; d--;) if (l = c[d], !Ut(t, l) || !Jt(e[l], t[l], n, o)) return ! 1
				}
				return n.pop(),
				o.pop(),
				!0
			} (e, t, n, o)
		}
		function qt(e) {
			return wt(e) ? e.slice() : L(e) || jt(e) ? Array.from(e.entries()) : e
		}
		function Ut(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		function Vt(e) {
			return e[Symbol.iterator] = Bt,
			e
		}
		function Bt() {
			return this
		}
		if ("undefined" == typeof Proxy) throw new Error("[mobx] MobX 5+ requires Proxy objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4.");
		"object" === ("undefined" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ ? "undefined": r(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
			spy: Ne,
			extras: {
				getDebugName: zt
			},
			$mobx: g
		}),
		t.Reaction = xe,
		t.untracked = me,
		t.IDerivationState = Q,
		t.createAtom = S,
		t.spy = Ne,
		t.comparer = D,
		t.isObservableObject = Wt,
		t.isBoxedObservable = re,
		t.isObservableArray = wt,
		t.ObservableMap = xt,
		t.isObservableMap = jt,
		t.transaction = mt,
		t.observable = q,
		t.computed = G,
		t.isObservable = at,
		t.isObservableProp = function(e, t) {
			return "string" != typeof t ? m(!1) : ot(e, t)
		},
		t.isComputed = function(e) {
			return arguments.length > 1 ? m(!1) : rt(e)
		},
		t.isComputedProp = function(e, t) {
			return "string" != typeof t ? m(!1) : rt(e, t)
		},
		t.extendObservable = $e,
		t.observe = function(e, t, n, r) {
			return "function" == typeof n ?
			function(e, t, n, r) {
				return Ft(e, t).observe(n, r)
			} (e, t, n, r) : function(e, t, n) {
				return Ft(e).observe(t, n)
			} (e, t, n)
		},
		t.intercept = function(e, t, n) {
			return "function" == typeof n ?
			function(e, t, n) {
				return Ft(e, t).intercept(n)
			} (e, t, n) : function(e, t) {
				return Ft(e).intercept(t)
			} (e, t)
		},
		t.autorun = Je,
		t.reaction = function(e, t, n) {
			void 0 === n && (n = l);
			var r, o = n.name || "Reaction@" + c(),
			a = Ie(o, n.onError ?
			function(e, t) {
				return function() {
					try {
						return t.apply(this, arguments)
					} catch(t) {
						e.call(this, t)
					}
				}
			} (n.onError, t) : t),
			i = !n.scheduler && !n.delay,
			s = Ue(n),
			u = !0,
			d = !1,
			m = n.compareStructural ? D.structural: n.equals || D.
		default,
			_ = new xe(o,
			function() {
				u || i ? f() : d || (d = !0, s(f))
			},
			n.onError);
			function f() {
				if (d = !1, !_.isDisposed) {
					var t = !1;
					_.track(function() {
						var n = e(_);
						t = u || !m(r, n),
						r = n
					}),
					u && n.fireImmediately && a(r, _),
					u || !0 !== t || a(r, _),
					u && (u = !1)
				}
			}
			return _.schedule(),
			_.getDisposer()
		},
		t.when = function(e, t, n) {
			return 1 === arguments.length || t && "object" === (void 0 === t ? "undefined": r(t)) ?
			function(e, t) {
				var n, r = new Promise(function(r, o) {
					var i = _t(e, r, a({},
					t, {
						onError: o
					}));
					n = function() {
						i(),
						o("WHEN_CANCELLED")
					}
				});
				return r.cancel = n,
				r
			} (e, t) : _t(e, t, n || {})
		},
		t.action = Ie,
		t.isAction = function(e) {
			return "function" == typeof e && !0 === e.isMobxAction
		},
		t.runInAction = function(e, t) {
			return K("string" == typeof e ? e: e.name || "<unnamed action>", "function" == typeof e ? e: t, this, void 0)
		},
		t.keys = it,
		t.values = function(e) {
			return Wt(e) ? it(e).map(function(t) {
				return e[t]
			}) : jt(e) ? it(e).map(function(t) {
				return e.get(t)
			}) : wt(e) ? e.slice() : m(!1)
		},
		t.entries = function(e) {
			return Wt(e) ? it(e).map(function(t) {
				return [t, e[t]]
			}) : jt(e) ? it(e).map(function(t) {
				return [t, e.get(t)]
			}) : wt(e) ? e.map(function(e, t) {
				return [t, e]
			}) : m(!1)
		},
		t.set = st,
		t.remove = function(e, t) {
			if (Wt(e)) e[g].remove(t);
			else if (jt(e)) e.delete(t);
			else {
				if (!wt(e)) return m(!1);
				"number" != typeof t && (t = parseInt(t, 10)),
				_(t >= 0, "Not a valid index: '" + t + "'"),
				e.splice(t, 1)
			}
		},
		t.has = ut,
		t.get = function(e, t) {
			if (ut(e, t)) return Wt(e) ? e[t] : jt(e) ? e.get(t) : wt(e) ? e[t] : m(!1)
		},
		t.decorate = function(e, t) {
			var n = "function" == typeof e ? e.prototype: e;
			for (var r in t) {
				var o = t[r],
				a = o(n, r, Object.getOwnPropertyDescriptor(n, r));
				a && Object.defineProperty(n, r, a)
			}
			return e
		},
		t.configure = function(e) {
			var t = e.enforceActions,
			n = e.computedRequiresReaction,
			r = e.disableErrorBoundaries,
			o = e.reactionScheduler;
			if (void 0 !== t) {
				if ("boolean" != typeof t && "strict" !== t) return fail("Invalid configuration for 'enforceActions': " + t);
				Me.enforceActions = t,
				Me.allowStateChanges = !0 !== t && "strict" !== t
			}
			void 0 !== n && (Me.computedRequiresReaction = !!n),
			!0 === e.isolateGlobalState && (ve = !0, be().__mobxInstanceCount--),
			void 0 !== r && (!0 === r && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), Me.disableErrorBoundaries = !!r),
			o && Pe(o)
		},
		t.onBecomeObserved = Ve,
		t.onBecomeUnobserved = Be,
		t.flow = function(e) {
			1 !== arguments.length && m("Flow expects one 1 argument and cannot be used as decorator");
			var t = e.name || "<unnamed flow>";
			return function() {
				var n, r = arguments,
				o = ++tt,
				a = Ie(t + " - runid: " + o + " - init", e).apply(this, r),
				i = void 0,
				s = new Promise(function(e, r) {
					var s = 0;
					function u(e) {
						var n;
						i = void 0;
						try {
							n = Ie(t + " - runid: " + o + " - yield " + s++, a.next).call(a, e)
						} catch(e) {
							return r(e)
						}
						l(n)
					}
					function d(e) {
						var n;
						i = void 0;
						try {
							n = Ie(t + " - runid: " + o + " - yield " + s++, a.
							throw).call(a, e)
						} catch(e) {
							return r(e)
						}
						l(n)
					}
					function l(t) {
						if (!t || "function" != typeof t.then) return t.done ? e(t.value) : (i = Promise.resolve(t.value)).then(u, d);
						t.then(l, r)
					}
					n = r,
					u(void 0)
				});
				return s.cancel = Ie(t + " - runid: " + o + " - cancel",
				function() {
					try {
						i && nt(i);
						var e = a.
						return (),
						t = Promise.resolve(e.value);
						t.then(p, p),
						nt(t),
						n(new Error("FLOW_CANCELLED"))
					} catch(e) {
						n(e)
					}
				}),
				s
			}
		},
		t.toJS = function(e, t) {
			return at(e) ? ("boolean" == typeof t && (t = {
				detectCycles: t
			}), t || (t = dt), !0 === t.detectCycles && (n = new Map),
			function e(t, n, o) {
				if (!at(t)) return t;
				if (!0 === n.detectCycles && null !== t && "object" === (void 0 === t ? "undefined": r(t)) && o.has(t)) return o.get(t);
				if (wt(t)) {
					var a = lt(o, t, [], n),
					i = t.map(function(t) {
						return e(t, n, o)
					});
					a.length = i.length;
					for (var s = 0,
					u = i.length; s < u; s++) a[s] = i[s];
					return a
				}
				if (Wt(t)) {
					for (var d in a = lt(o, t, {},
					n), it(t), t) a[d] = e(t[d], n, o);
					return a
				}
				if (jt(t)) {
					if (!1 === n.exportMapsAsObjects) {
						var l = lt(o, t, new Map, n);
						return t.forEach(function(t, r) {
							l.set(r, e(t, n, o))
						}),
						l
					}
					var c = lt(o, t, {},
					n);
					return t.forEach(function(t, r) {
						c[r] = e(t, n, o)
					}),
					c
				}
				return re(t) ? e(t.get(), n, o) : t
			} (e, t, n)) : e;
			var n
		}, t.trace = ct,
		t.getDependencyTree = Xe,
		t.getObserverTree = function(e, t) {
			return et(Nt(e, t))
		},
		t._resetGlobalState = function() {
			var e = new he;
			for (var t in e) - 1 === ye.indexOf(t) && (Me[t] = e[t]);
			Me.allowStateChanges = !Me.enforceActions
		},
		t._getGlobalState = function() {
			return Me
		},
		t.getDebugName = zt,
		t.getAtom = Nt,
		t._getAdministration = Ft,
		t._allowStateChanges = function(e, t) {
			var n, r = Z(e);
			try {
				n = t()
			} finally {
				X(r)
			}
			return n
		},
		t.isArrayLike = function(e) {
			return Array.isArray(e) || wt(e)
		},
		t.$mobx = g,
		t._isComputingDerivation = function() {
			return null !== Me.trackingDerivation
		},
		t.onReactionError = function(e) {
			return Me.globalReactionErrorHandlers.push(e),
			function() {
				var t = Me.globalReactionErrorHandlers.indexOf(e);
				t >= 0 && Me.globalReactionErrorHandlers.splice(t, 1)
			}
		},
		t._interceptReads = function(e, t, n) {
			var r;
			if (jt(e) || wt(e) || re(e)) r = Ft(e);
			else {
				if (!Wt(e)) return m(!1);
				if ("string" != typeof t) return m(!1);
				r = Ft(e, t)
			}
			return void 0 !== r.dehancer ? m(!1) : (r.dehancer = "function" == typeof t ? t: n,
			function() {
				r.dehancer = void 0
			})
		}
	}).call(this, n(128), n(129))
},
function(e, t, n) {
	"use strict";
	var r, o, a = e.exports = {};
	function i() {
		throw new Error("setTimeout has not been defined")
	}
	function s() {
		throw new Error("clearTimeout has not been defined")
	}
	function u(e) {
		if (r === setTimeout) return setTimeout(e, 0);
		if ((r === i || !r) && setTimeout) return r = setTimeout,
		setTimeout(e, 0);
		try {
			return r(e, 0)
		} catch(t) {
			try {
				return r.call(null, e, 0)
			} catch(t) {
				return r.call(this, e, 0)
			}
		}
	} !
	function() {
		try {
			r = "function" == typeof setTimeout ? setTimeout: i
		} catch(e) {
			r = i
		}
		try {
			o = "function" == typeof clearTimeout ? clearTimeout: s
		} catch(e) {
			o = s
		}
	} ();
	var d, l = [],
	c = !1,
	m = -1;
	function _() {
		c && d && (c = !1, d.length ? l = d.concat(l) : m = -1, l.length && f())
	}
	function f() {
		if (!c) {
			var e = u(_);
			c = !0;
			for (var t = l.length; t;) {
				for (d = l, l = []; ++m < t;) d && d[m].run();
				m = -1,
				t = l.length
			}
			d = null,
			c = !1,
			function(e) {
				if (o === clearTimeout) return clearTimeout(e);
				if ((o === s || !o) && clearTimeout) return o = clearTimeout,
				clearTimeout(e);
				try {
					o(e)
				} catch(t) {
					try {
						return o.call(null, e)
					} catch(t) {
						return o.call(this, e)
					}
				}
			} (e)
		}
	}
	function p(e, t) {
		this.fun = e,
		this.array = t
	}
	function y() {}
	a.nextTick = function(e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		l.push(new p(e, t)),
		1 !== l.length || c || u(f)
	},
	p.prototype.run = function() {
		this.fun.apply(null, this.array)
	},
	a.title = "browser",
	a.browser = !0,
	a.env = {},
	a.argv = [],
	a.version = "",
	a.versions = {},
	a.on = y,
	a.addListener = y,
	a.once = y,
	a.off = y,
	a.removeListener = y,
	a.removeAllListeners = y,
	a.emit = y,
	a.prependListener = y,
	a.prependOnceListener = y,
	a.listeners = function(e) {
		return []
	},
	a.binding = function(e) {
		throw new Error("process.binding is not supported")
	},
	a.cwd = function() {
		return "/"
	},
	a.chdir = function(e) {
		throw new Error("process.chdir is not supported")
	},
	a.umask = function() {
		return 0
	}
},
function(e, t, n) {
	"use strict";
	var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	}: function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
	};
	r = function() {
		return this
	} ();
	try {
		r = r || Function("return this")() || (0, eval)("this")
	} catch(e) {
		"object" === ("undefined" == typeof window ? "undefined": o(window)) && (r = window)
	}
	e.exports = r
},
function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}),
	t.http = t.Query = t.isString = void 0;
	var r = function() {
		return function(e, t) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return function(e, t) {
				var n = [],
				r = !0,
				o = !1,
				a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); ! (r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch(e) {
					o = !0,
					a = e
				} finally {
					try { ! r && s.
						return && s.
						return ()
					} finally {
						if (o) throw a
					}
				}
				return n
			} (e, t);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	} ();
	t.getTargetContainer = function(e) {
		var t = void 0;
		t = e instanceof Element ? e: o(e) ? document.getElementById(e) : document.createElement("div");
		return t
	};
	n(1),
	function(e) {
		e && e.__esModule
	} (n(0));
	var o = t.isString = function(e) {
		return "[object String]" === toString.call(e)
	};
	var a = t.Query = {
		parse: function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search || window.location.hash.split("?")[1];
			if (!e) return {};
			var t = {};
			return ("?" === e[0] ? e.substring(1) : e).split("&").forEach(function(e) {
				var n = e.split("="),
				o = r(n, 2),
				a = o[0],
				i = o[1];
				a && (t[a] = i)
			}),
			t
		},
		stringify: function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?",
			n = Object.keys(e).map(function(t) {
				return t + "=" + encodeURIComponent(e[t] || "")
			}).join("&");
			return n ? t + n: ""
		}
	};
	function i(e) {
		return function(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://gitee.com/api/v5",
			o = new XMLHttpRequest,
			i = "" + r + t,
			s = null;
			"GET" !== e && "DELETE" !== e || (i += a.stringify(n));
			var u = new Promise(function(e, t) {
				o.addEventListener("load",
				function() {
					var n = o.getResponseHeader("content-type"),
					r = o.responseText;
					if (/json/.test(n)) {
						var a = o.responseText ? JSON.parse(r) : {};
						a.message ? t(new Error(a.message)) : e(a)
					} else e(r)
				}),
				o.addEventListener("error",
				function(e) {
					return t(e)
				})
			});
			o.open(e, i, !0),
			o.setRequestHeader("Accept", "application/json, text/plain");
			var d = n.token;
			return d && o.setRequestHeader("Authorization", "token " + d),
			"GET" !== e && "DELETE" !== e && (s = JSON.stringify(n), o.setRequestHeader("Content-Type", "application/json")),
			o.send(s),
			u
		}
	}
	t.http = {
		get: i("GET"),
		post: i("POST"),
		delete: i("DELETE"),
		put: i("PUT")
	}
},
function(e, t, n) {
	var r = {
		"./af": 3,
		"./af.js": 3,
		"./ar": 4,
		"./ar-dz": 5,
		"./ar-dz.js": 5,
		"./ar-kw": 6,
		"./ar-kw.js": 6,
		"./ar-ly": 7,
		"./ar-ly.js": 7,
		"./ar-ma": 8,
		"./ar-ma.js": 8,
		"./ar-sa": 9,
		"./ar-sa.js": 9,
		"./ar-tn": 10,
		"./ar-tn.js": 10,
		"./ar.js": 4,
		"./az": 11,
		"./az.js": 11,
		"./be": 12,
		"./be.js": 12,
		"./bg": 13,
		"./bg.js": 13,
		"./bm": 14,
		"./bm.js": 14,
		"./bn": 15,
		"./bn.js": 15,
		"./bo": 16,
		"./bo.js": 16,
		"./br": 17,
		"./br.js": 17,
		"./bs": 18,
		"./bs.js": 18,
		"./ca": 19,
		"./ca.js": 19,
		"./cs": 20,
		"./cs.js": 20,
		"./cv": 21,
		"./cv.js": 21,
		"./cy": 22,
		"./cy.js": 22,
		"./da": 23,
		"./da.js": 23,
		"./de": 24,
		"./de-at": 25,
		"./de-at.js": 25,
		"./de-ch": 26,
		"./de-ch.js": 26,
		"./de.js": 24,
		"./dv": 27,
		"./dv.js": 27,
		"./el": 28,
		"./el.js": 28,
		"./en-au": 29,
		"./en-au.js": 29,
		"./en-ca": 30,
		"./en-ca.js": 30,
		"./en-gb": 31,
		"./en-gb.js": 31,
		"./en-ie": 32,
		"./en-ie.js": 32,
		"./en-il": 33,
		"./en-il.js": 33,
		"./en-nz": 34,
		"./en-nz.js": 34,
		"./eo": 35,
		"./eo.js": 35,
		"./es": 36,
		"./es-do": 37,
		"./es-do.js": 37,
		"./es-us": 38,
		"./es-us.js": 38,
		"./es.js": 36,
		"./et": 39,
		"./et.js": 39,
		"./eu": 40,
		"./eu.js": 40,
		"./fa": 41,
		"./fa.js": 41,
		"./fi": 42,
		"./fi.js": 42,
		"./fo": 43,
		"./fo.js": 43,
		"./fr": 44,
		"./fr-ca": 45,
		"./fr-ca.js": 45,
		"./fr-ch": 46,
		"./fr-ch.js": 46,
		"./fr.js": 44,
		"./fy": 47,
		"./fy.js": 47,
		"./gd": 48,
		"./gd.js": 48,
		"./gl": 49,
		"./gl.js": 49,
		"./gom-latn": 50,
		"./gom-latn.js": 50,
		"./gu": 51,
		"./gu.js": 51,
		"./he": 52,
		"./he.js": 52,
		"./hi": 53,
		"./hi.js": 53,
		"./hr": 54,
		"./hr.js": 54,
		"./hu": 55,
		"./hu.js": 55,
		"./hy-am": 56,
		"./hy-am.js": 56,
		"./id": 57,
		"./id.js": 57,
		"./is": 58,
		"./is.js": 58,
		"./it": 59,
		"./it.js": 59,
		"./ja": 60,
		"./ja.js": 60,
		"./jv": 61,
		"./jv.js": 61,
		"./ka": 62,
		"./ka.js": 62,
		"./kk": 63,
		"./kk.js": 63,
		"./km": 64,
		"./km.js": 64,
		"./kn": 65,
		"./kn.js": 65,
		"./ko": 66,
		"./ko.js": 66,
		"./ky": 67,
		"./ky.js": 67,
		"./lb": 68,
		"./lb.js": 68,
		"./lo": 69,
		"./lo.js": 69,
		"./lt": 70,
		"./lt.js": 70,
		"./lv": 71,
		"./lv.js": 71,
		"./me": 72,
		"./me.js": 72,
		"./mi": 73,
		"./mi.js": 73,
		"./mk": 74,
		"./mk.js": 74,
		"./ml": 75,
		"./ml.js": 75,
		"./mn": 76,
		"./mn.js": 76,
		"./mr": 77,
		"./mr.js": 77,
		"./ms": 78,
		"./ms-my": 79,
		"./ms-my.js": 79,
		"./ms.js": 78,
		"./mt": 80,
		"./mt.js": 80,
		"./my": 81,
		"./my.js": 81,
		"./nb": 82,
		"./nb.js": 82,
		"./ne": 83,
		"./ne.js": 83,
		"./nl": 84,
		"./nl-be": 85,
		"./nl-be.js": 85,
		"./nl.js": 84,
		"./nn": 86,
		"./nn.js": 86,
		"./pa-in": 87,
		"./pa-in.js": 87,
		"./pl": 88,
		"./pl.js": 88,
		"./pt": 89,
		"./pt-br": 90,
		"./pt-br.js": 90,
		"./pt.js": 89,
		"./ro": 91,
		"./ro.js": 91,
		"./ru": 92,
		"./ru.js": 92,
		"./sd": 93,
		"./sd.js": 93,
		"./se": 94,
		"./se.js": 94,
		"./si": 95,
		"./si.js": 95,
		"./sk": 96,
		"./sk.js": 96,
		"./sl": 97,
		"./sl.js": 97,
		"./sq": 98,
		"./sq.js": 98,
		"./sr": 99,
		"./sr-cyrl": 100,
		"./sr-cyrl.js": 100,
		"./sr.js": 99,
		"./ss": 101,
		"./ss.js": 101,
		"./sv": 102,
		"./sv.js": 102,
		"./sw": 103,
		"./sw.js": 103,
		"./ta": 104,
		"./ta.js": 104,
		"./te": 105,
		"./te.js": 105,
		"./tet": 106,
		"./tet.js": 106,
		"./tg": 107,
		"./tg.js": 107,
		"./th": 108,
		"./th.js": 108,
		"./tl-ph": 109,
		"./tl-ph.js": 109,
		"./tlh": 110,
		"./tlh.js": 110,
		"./tr": 111,
		"./tr.js": 111,
		"./tzl": 112,
		"./tzl.js": 112,
		"./tzm": 113,
		"./tzm-latn": 114,
		"./tzm-latn.js": 114,
		"./tzm.js": 113,
		"./ug-cn": 115,
		"./ug-cn.js": 115,
		"./uk": 116,
		"./uk.js": 116,
		"./ur": 117,
		"./ur.js": 117,
		"./uz": 118,
		"./uz-latn": 119,
		"./uz-latn.js": 119,
		"./uz.js": 118,
		"./vi": 120,
		"./vi.js": 120,
		"./x-pseudo": 121,
		"./x-pseudo.js": 121,
		"./yo": 122,
		"./yo.js": 122,
		"./zh-cn": 123,
		"./zh-cn.js": 123,
		"./zh-hk": 124,
		"./zh-hk.js": 124,
		"./zh-tw": 125,
		"./zh-tw.js": 125
	};
	function o(e) {
		var t = a(e);
		return n(t)
	}
	function a(e) {
		var t = r[e];
		if (! (t + 1)) {
			var n = new Error("Cannot find module '" + e + "'");
			throw n.code = "MODULE_NOT_FOUND",
			n
		}
		return t
	}
	o.keys = function() {
		return Object.keys(r)
	},
	o.resolve = a,
	e.exports = o,
	o.id = 131
},
function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
		return function(e, t) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return function(e, t) {
				var n = [],
				r = !0,
				o = !1,
				a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); ! (r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch(e) {
					o = !0,
					a = e
				} finally {
					try { ! r && s.
						return && s.
						return ()
					} finally {
						if (o) throw a
					}
				}
				return n
			} (e, t);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	} (),
	o = n(133),
	a = n(1),
	i = u(n(0)),
	s = u(n(134));
	function u(e) {
		return e && e.__esModule ? e: {
		default:
			e
		}
	}
	function d(e, t) {
		var n = e.meta,
		r = (e.user, document.createElement("div"));
		r.lang = "en-US",
		r.className = "gitment-container gitment-header-container";
		var o = document.createElement("span");
		o.innerHTML = "\n    " + (n.comments ? "总评论数 • <strong>" + n.comments + "</strong> ": "") + "\n  ",
		r.appendChild(o);
		var a = document.createElement("a");
		return a.className = "gitment-header-issue-link",
		a.href = n.html_url,
		a.target = "_blank",
		a.innerText = "Issue Page",
		r.appendChild(a),
		r
	}
	function l(e, t) {
		var n = e.meta,
		r = e.comments,
		o = e.currentPage,
		s = e.user,
		u = e.error,
		d = document.createElement("div");
		if (d.lang = "en-US", d.className = "gitment-container gitment-comments-container", u) {
			var l = document.createElement("div");
			if (l.className = "gitment-comments-error", u === a.NOT_INITIALIZED_ERROR && s.login && s.login.toLowerCase() === t.owner.toLowerCase()) {
				var c = document.createElement("div"),
				m = document.createElement("button");
				m.className = "gitment-comments-init-btn",
				m.onclick = function() {
					m.setAttribute("disabled", !0),
					t.init().
					catch(function(e) {
						m.removeAttribute("disabled"),
						alert(e)
					})
				},
				m.innerText = "初始化评论",
				c.appendChild(m),
				l.appendChild(c)
			} else l.innerText = u;
			return d.appendChild(l),
			d
		}
		if (void 0 === r) {
			var _ = document.createElement("div");
			return _.innerText = "Loading comments...",
			_.className = "gitment-comments-loading",
			d.appendChild(_),
			d
		}
		if (!r.length) {
			var f = document.createElement("div");
			return f.className = "gitment-comments-empty",
			f.innerText = "暂时没有评论！",
			d.appendChild(f),
			d
		}
		var p = document.createElement("ul");
		if (p.className = "gitment-comments-list", r.forEach(function(e) {
			var r = new Date(e.created_at),
			o = document.createElement("li");
			o.className = "gitment-comment",
			o.innerHTML = '\n      <a class="gitment-comment-avatar" href="' + e.user.html_url + '" target="_blank">\n        <img class="gitment-comment-avatar-img" src="' + e.user.avatar_url + '"/>\n      </a>\n      <div class="gitment-comment-main">\n        <div class="gitment-comment-header">\n          <a class="gitment-comment-name" href="' + e.user.html_url + '" target="_blank">\n            ' + e.user.name + "\n          </a>\n          " + (n.user.login == e.user.login ? ' <span class="giteement-role-label" title="该用户是博客的拥有者">博主</span>': "") + '\n          评论创建于\n          <span title="' + r + '">' + (0, i.
		default)(r).format("YYYY年MM月DD日") + '</span>\n        </div>\n        <div id="' + e.id + '" class="gitment-comment-body gitment-markdown"></div>\n      </div>\n    ',
			function(e, t) {
				var n = t.body,
				r = n.match(/^@[^ ]*/g);
				r && r.length > 0 && r.forEach(function(t) {
					return e.users(t.substr(1)).then(function(e) {
						var t = "[@" + e.name + "](" + e.html_url + ")";
						n = n.replace("@" + e.login, t)
					}).
					catch(function() {})
				});
				e.markdown(n).then(function(e) {
					return document.getElementById(t.id).innerHTML = e.replace(/src="\/assets\//g, 'src="https://gitee.com/assets/')
				})
			} (t, e);
			var a = document.createElement("img"),
			s = o.querySelector(".gitment-comment-body");
			a.className = "gitment-hidden",
			a.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
			a.onload = function() {
				s.clientHeight > t.maxCommentHeight && (s.classList.add("gitment-comment-body-folded"), s.style.maxHeight = t.maxCommentHeight + "px", s.title = "Click to Expand", s.onclick = function() {
					s.classList.remove("gitment-comment-body-folded"),
					s.style.maxHeight = "",
					s.title = "",
					s.onclick = null
				})
			},
			o.appendChild(a),
			p.appendChild(o)
		}), d.appendChild(p), n) {
			var y = Math.ceil(n.comments / t.perPage);
			if (y > 1) {
				var h = document.createElement("ul");
				if (h.className = "gitment-comments-pagination", o > 1) {
					var M = document.createElement("li");
					M.className = "gitment-comments-page-item",
					M.innerText = "Previous",
					M.onclick = function() {
						return t.goto(o - 1)
					},
					h.appendChild(M)
				}
				for (var v = function(e) {
					var n = document.createElement("li");
					n.className = "gitment-comments-page-item",
					n.innerText = e,
					n.onclick = function() {
						return t.goto(e)
					},
					o === e && n.classList.add("gitment-selected"),
					h.appendChild(n)
				},
				L = 1; L <= y; L++) v(L);
				if (o < y) {
					var b = document.createElement("li");
					b.className = "gitment-comments-page-item",
					b.innerText = "Next",
					b.onclick = function() {
						return t.goto(o + 1)
					},
					h.appendChild(b)
				}
				d.appendChild(h)
			}
		}
		return d
	}
	function c(e, t) {
		var n = e.user,
		a = e.error,
		i = e.comments,
		u = document.createElement("div");
		u.lang = "en-US",
		u.className = "gitment-container gitment-editor-container";
		var d = n.login && !a ? "": "disabled",
		l = n.login ? "": "请登录，再评论！";
		u.innerHTML = "\n      " + (n.login ? '<a class="gitment-editor-avatar" href="' + n.html_url + '" target="_blank">\n            <img class="gitment-editor-avatar-img" src="' + n.avatar_url + '"/>\n          </a>': n.isLoggingIn ? '<div class="gitment-editor-avatar">' + o.spinner + "</div>": '<a class="gitment-editor-avatar" href="' + t.loginLink + '" title="login with Gitee">\n              ' + o.giteehub + "\n            </a>") + '\n    </a>\n    <div class="gitment-editor-main">\n      <div class="gitment-editor-header">\n        <nav class="gitment-editor-tabs">\n          <button class="gitment-editor-tab gitment-selected">编辑</button>\n          <button class="gitment-editor-tab">预览</button>\n        </nav>\n        <div class="gitment-editor-login">\n          ' + (n.login ? '<a class="gitment-editor-logout-link">退出</a>': n.isLoggingIn ? "Logging in...": '<a class="gitment-editor-login-link" href="' + t.loginLink + '">登录</a> 码云') + '\n        </div>\n      </div>\n      <div class="gitment-editor-body">\n        <div class="gitment-editor-write-field">\n          <textarea id="commentEditorTextArea" placeholder="登录Gitee账户并发表评论..." title="' + l + '" ' + d + '></textarea>\n        </div>\n        <div class="gitment-editor-preview-field gitment-hidden">\n          <div class="gitment-editor-preview gitment-markdown"></div>\n        </div>\n      </div>\n    </div>\n    <div class="gitment-editor-footer">\n      <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank">\n        支持Markdown的样式\n      </a>\n      <button class="gitment-editor-submit" title="' + l + '" ' + d + ">评论</button>\n    </div>\n  ",
		n.login && (u.querySelector(".gitment-editor-logout-link").onclick = function() {
			return t.logout()
		});
		var c = u.querySelector(".gitment-editor-write-field"),
		m = u.querySelector(".gitment-editor-preview-field"),
		_ = c.querySelector("textarea");
		_.oninput = function() {
			_.style.height = "auto";
			var e = window.getComputedStyle(_, null),
			t = parseInt(e.height, 10),
			n = _.clientHeight,
			r = _.scrollHeight;
			n < r && (_.style.height = t + r - n + "px")
		};
		var f = new s.
	default({
			element:
			_,
			container: u,
			comments: i
		}),
		p = u.querySelectorAll(".gitment-editor-tab"),
		y = r(p, 2),
		h = y[0],
		M = y[1];
		h.onclick = function() {
			h.classList.add("gitment-selected"),
			M.classList.remove("gitment-selected"),
			c.classList.remove("gitment-hidden"),
			m.classList.add("gitment-hidden"),
			_.focus()
		},
		M.onclick = function() {
			M.classList.add("gitment-selected"),
			h.classList.remove("gitment-selected"),
			m.classList.remove("gitment-hidden"),
			c.classList.add("gitment-hidden");
			var e = m.querySelector(".gitment-editor-preview"),
			n = _.value.trim();
			n ? (e.innerText = "加载预览中...", t.markdown(n).then(function(t) {
				return e.innerHTML = t
			})) : e.innerText = "没有内容可以预览！"
		};
		var v = u.querySelector(".gitment-editor-submit");
		return v.onclick = function() {
			v.innerText = "提交中...",
			v.setAttribute("disabled", !0),
			t.post(function(e, t) {
				if (e.startsWith("@")) {
					var n = e.match(/^@[^ ]*/g);
					n && n.length > 0 && n.forEach(function(n) {
						var r = n.substr(1);
						t[r] && (e = e.replace(r, t[r]))
					})
				}
				return e
			} (_.value.trim(), f.nameMap)).then(function(e) {
				_.value = "",
				_.style.height = "auto",
				v.removeAttribute("disabled"),
				v.innerText = "评论"
			}).
			catch(function(e) {
				alert(e),
				v.removeAttribute("disabled"),
				v.innerText = "评论"
			})
		},
		u
	}
	function m(e, t) { !
		function(e) {
			if (null == e) throw new TypeError("Cannot destructure undefined")
		} (e);
		var n = document.createElement("div");
		return n.lang = "en-US",
    /*
		n.className = "gitment-container gitment-footer-container",
		n.innerHTML = '\n    Powered by\n    <a class="gitment-footer-project-link" href="https://gitee.com/eillott/giteement" target="_blank">\n      Giteement\n    </a>\n  ',
    */
		n
	}
	t.
default = {
		render: function(e, t) {
			var n = document.createElement("div");
			return n.lang = "en-US",
			n.className = "gitment-container gitment-root-container",
			n.appendChild(d(e)),
			n.appendChild(l(e, t)),
			n.appendChild(c(e, t)),
			n.appendChild(m(e)),
			n
		},
		renderHeader: d,
		renderComments: l,
		renderEditor: c,
		renderFooter: m
	}
},
function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.close = '<svg class="gitment-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></svg>',
	t.heart = '<svg class="gitment-heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>',
	t.spinner = '<svg class="gitment-spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>',
	t.giteehub = '<svg width="50px" height="50px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" ><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo_darkbg" transform="translate(-163.000000, -92.000000)" fill="#C71D23"><g id="logo" transform="translate(163.000000, 91.000000)"><path d="M86,37 L40,37 L40,37.0010476 C37.7912701,37.0010476 36.0005785,38.7912703 36.0000001,41.0000001 L35.9963338,51.0000001 L35.9952531,50.9999999 C35.9946746,53.2091388 37.7850666,55.0004687 39.9942055,55.0010472 C39.9945658,55.0010473 39.994926,55.0010473 39.9952863,55.0010473 L68,54.9997333 L68,54.9997 C70.209139,54.9996816 72.0000149,56.7905277 72.0000333,58.9996667 C72.0000333,58.9996778 72.0000333,58.9996889 72.0000333,58.9997 L72,59.9997 L72,61 L72,61 C72,67.627417 66.627417,73 60,73 L21.9970229,73 L21.9970229,72.9998897 C19.788201,72.9998897 17.99758,71.2093181 17.9975191,69.0004962 L17.9963613,31 L17.9960306,31 C17.9958479,24.372583 23.3682828,18.9998519 29.9956998,18.9996692 C29.99581,18.9996692 29.9959203,18.9996692 29.9960306,18.9996692 L85.988836,19 L85.988836,18.9975183 C88.1970062,18.9975183 89.9874656,17.208169 89.9888352,14.9999992 L89.9975191,4.99999923 L89.9999992,5.00000077 C90.0013694,2.79086219 88.2116195,0.998890802 86.0024809,0.997520639 C86.0016539,0.997520127 86.000827,0.99751987 86,0.99751987 L30,1 L30,1.00016539 C13.4315221,1.00016539 9.13442924e-05,14.4315221 4.58559413e-10,31 L-0.000474127419,87 L-0.000496179797,87 C-0.000508359022,89.209139 1.79034277,91.0000099 3.99948177,91.0000221 C3.99948912,91.0000221 3.99949647,91.0000221 3.99950382,91.0000221 L63,91 L63,91 C77.9116882,91 90,78.9116882 90,64 L90,41 L90,41 C90,38.790861 88.209139,37 86,37 Z" id="G"></path></g></g></g></svg>'
},
function(e, t, n) {
	"use strict";
	var r = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r)
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n),
			r && e(t, r),
			t
		}
	} (),
	o = function(e) {
		return e && e.__esModule ? e: {
		default:
			e
		}
	} (n(135));
	var a = 13,
	i = 38,
	s = 40,
	u = function() {
		function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; !
			function(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			} (this, e),
			Object.assign(this, {
				altflg: !1,
				nameMap: {}
			},
			t),
			this.jqElement = (0, o.
		default)(this.element),
			this.creatSelUserTab(this.comments),
			this.init()
		}
		return r(e, [{
			key: "creatSelUserTab",
			value: function(e) {
				if ("undefined" != e && e) {
					for (var t = (0, o.
				default)("<div class='giteement-at-outdiv'></div>"), n = (0, o.
				default)("<div class='giteement-at-div'></div>"), r = (0, o.
				default)("<ol class='giteement-at-ol'></ol>"), a = {},
					u = 0; u < e.length; u++) {
						var d = e[u].user;
						if (this.nameMap[d.name] = d.login, !a[d.login]) {
							a[d.login] = d.name;
							var l = void 0; (l = u === e.length - 1 ? (0, o.
						default)("<li class='giteement-at-li giteement-at-li-tail'></li>"):
							(0, o.
						default)("<li class='giteement-at-li'></li>")).text(d.login + "  " + d.name),
							r.append(l)
						}
					}
					n.append(r),
					t.append(n),
					(0, o.
				default)(this.container).append(t),
					(0, o.
				default)(document).off("keydown.atwhouser").on("keydown.atwhouser",
					function(e) {
						if (s === e.keyCode) {
							var t = (0, o.
						default)(".giteement-at-li-select").next(); (0, o.
						default)(".giteement-at-li-select").removeClass("giteement-at-li-select"),
							0 == t.length ? (0, o.
						default)(".giteement-at-li:first").addClass("giteement-at-li-select"):
							t.addClass("giteement-at-li-select")
						} else if (i === e.keyCode) {
							var n = (0, o.
						default)(".giteement-at-li-select").prev(); (0, o.
						default)(".giteement-at-li-select").removeClass("giteement-at-li-select"),
							0 == n.length ? (0, o.
						default)(".giteement-at-li:last").addClass("giteement-at-li-select"):
							n.addClass("giteement-at-li-select")
						}
					})
				}
			}
		},
		{
			key: "init",
			value: function() {
				this.addListener()
			}
		},
		{
			key: "addListener",
			value: function() {
				var e = this;
				e.jqElement.on("compositionstart",
				function() {
					console.log("---compositionstart")
				}).on("compositionend",
				function() {
					console.log("---compositionend")
				}).on("keyup.atwhoInner",
				function(t) {
					e.onKeyup(t)
				}).on("keydown.atwhoInner",
				function(t) {
					e.altflg && (i !== t.keyCode && s !== t.keyCode && a !== t.keyCode || t.preventDefault()),
					e.onKeydown(t)
				}).on("blur.atwhoInner",
				function() { (0, o.
				default)(".giteement-at-div").hide(),
					this.altflg = !1
				}).on("click.atwhoInner",
				function() {
					console.log("---click.atwhoInner")
				}).on("scroll.atwhoInner",
				function() {
					console.log("---scroll.atwhoInner")
				})
			}
		},
		{
			key: "onKeyup",
			value: function(e) {
				if ("@" === this.jqElement.val().substring(0, this.jqElement[0].selectionEnd)) {
					if (this.altflg) {
						if (a === e.keyCode) {
							var t = (0, o.
						default)(".giteement-at-li-select").text().split("  ")[1] + " ";
							this.jqElement[0].setRangeText(t),
							this.jqElement[0].selectionStart = this.jqElement[0].selectionEnd = this.jqElement.val().length,
							(0, o.
						default)(".giteement-at-div").hide(),
							this.altflg = !1
						}
						return
					}
					var n = function(e) {
						var t = e.selectionEnd,
						n = e.value.slice(0, t),
						r = e.value.slice(t),
						a = function(e) {
							return e.replace(/<|>|`|"|&/g, "?").replace(/\r\n|\r|\n/g, "<br>")
						},
						i = '<div class="textarea-mirror">' + a(n) + '<span id="cursor">|</span>' + a(r) + "</div>",
						s = (0, o.
					default)(i),
						u = (0, o.
					default)(e);
						u.after(s);
						var d = document.getElementById("cursor").getBoundingClientRect(),
						l = d.left,
						c = d.top - u.outerHeight(!0) + 7;
						return s.remove(),
						{
							x: l,
							y: c
						}
					} (this.jqElement[0]),
					r = (0, o.
				default)(".giteement-at-outdiv")[0].getBoundingClientRect(); (0, o.
				default)(".giteement-at-div").css("left", n.x - r.left + "px"),
					(0, o.
				default)(".giteement-at-div").css("top", n.y - r.top + "px"),
					(0, o.
				default)(".giteement-at-li-select").removeClass("giteement-at-li-select"),
					(0, o.
				default)((0, o.
				default)(".giteement-at-li")[0]).addClass("giteement-at-li-select"),
					(0, o.
				default)(".giteement-at-div").show(),
					this.altflg = !0
				} else(0, o.
			default)(".giteement-at-div").hide(),
				this.altflg = !1
			}
		},
		{
			key: "onKeydown",
			value: function(e) {
				this.altflg && (i !== e.keyCode && s !== e.keyCode && a !== e.keyCode || e.preventDefault())
			}
		}]),
		e
	} ();
	e.exports = u
},
function(e, t, n) {
	"use strict"; (function(e) {
		var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		};
		/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
		!
		function(t, n) {
			"object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
				if (!e.document) throw new Error("jQuery requires a window with a document");
				return n(e)
			}: n(t)
		} ("undefined" != typeof window ? window: void 0,
		function(o, a) {
			var i = [],
			s = o.document,
			u = Object.getPrototypeOf,
			d = i.slice,
			l = i.concat,
			c = i.push,
			m = i.indexOf,
			_ = {},
			f = _.toString,
			p = _.hasOwnProperty,
			y = p.toString,
			h = y.call(Object),
			M = {},
			v = function(e) {
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			L = function(e) {
				return null != e && e === e.window
			},
			b = {
				type: !0,
				src: !0,
				noModule: !0
			};
			function g(e, t, n) {
				var r, o = (t = t || s).createElement("script");
				if (o.text = e, n) for (r in b) n[r] && (o[r] = n[r]);
				t.head.appendChild(o).parentNode.removeChild(o)
			}
			function Y(e) {
				return null == e ? e + "": "object" === (void 0 === e ? "undefined": r(e)) || "function" == typeof e ? _[f.call(e)] || "object": void 0 === e ? "undefined": r(e)
			}
			var k = function e(t, n) {
				return new e.fn.init(t, n)
			},
			S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			function D(e) {
				var t = !!e && "length" in e && e.length,
				n = Y(e);
				return ! v(e) && !L(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
			}
			k.fn = k.prototype = {
				jquery: "3.3.1",
				constructor: k,
				length: 0,
				toArray: function() {
					return d.call(this)
				},
				get: function(e) {
					return null == e ? d.call(this) : e < 0 ? this[e + this.length] : this[e]
				},
				pushStack: function(e) {
					var t = k.merge(this.constructor(), e);
					return t.prevObject = this,
					t
				},
				each: function(e) {
					return k.each(this, e)
				},
				map: function(e) {
					return this.pushStack(k.map(this,
					function(t, n) {
						return e.call(t, n, t)
					}))
				},
				slice: function() {
					return this.pushStack(d.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq( - 1)
				},
				eq: function(e) {
					var t = this.length,
					n = +e + (e < 0 ? t: 0);
					return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: c,
				sort: i.sort,
				splice: i.splice
			},
			k.extend = k.fn.extend = function() {
				var e, t, n, o, a, i, s = arguments[0] || {},
				u = 1,
				d = arguments.length,
				l = !1;
				for ("boolean" == typeof s && (l = s, s = arguments[u] || {},
				u++), "object" === (void 0 === s ? "undefined": r(s)) || v(s) || (s = {}), u === d && (s = this, u--); u < d; u++) if (null != (e = arguments[u])) for (t in e) n = s[t],
				s !== (o = e[t]) && (l && o && (k.isPlainObject(o) || (a = Array.isArray(o))) ? (a ? (a = !1, i = n && Array.isArray(n) ? n: []) : i = n && k.isPlainObject(n) ? n: {},
				s[t] = k.extend(l, i, o)) : void 0 !== o && (s[t] = o));
				return s
			},
			k.extend({
				expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isPlainObject: function(e) {
					var t, n;
					return ! (!e || "[object Object]" !== f.call(e)) && (!(t = u(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && y.call(n) === h)
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) return ! 1;
					return ! 0
				},
				globalEval: function(e) {
					g(e)
				},
				each: function(e, t) {
					var n, r = 0;
					if (D(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
					else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
					return e
				},
				trim: function(e) {
					return null == e ? "": (e + "").replace(S, "")
				},
				makeArray: function(e, t) {
					var n = t || [];
					return null != e && (D(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
					n
				},
				inArray: function(e, t, n) {
					return null == t ? -1 : m.call(t, e, n)
				},
				merge: function(e, t) {
					for (var n = +t.length,
					r = 0,
					o = e.length; r < n; r++) e[o++] = t[r];
					return e.length = o,
					e
				},
				grep: function(e, t, n) {
					for (var r = [], o = 0, a = e.length, i = !n; o < a; o++) ! t(e[o], o) !== i && r.push(e[o]);
					return r
				},
				map: function(e, t, n) {
					var r, o, a = 0,
					i = [];
					if (D(e)) for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && i.push(o);
					else for (a in e) null != (o = t(e[a], a, n)) && i.push(o);
					return l.apply([], i)
				},
				guid: 1,
				support: M
			}),
			"function" == typeof Symbol && (k.fn[Symbol.iterator] = i[Symbol.iterator]),
			k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
			function(e, t) {
				_["[object " + t + "]"] = t.toLowerCase()
			});
			var w =
			/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
			function(e) {
				var t, n, r, o, a, i, s, u, d, l, c, m, _, f, p, y, h, M, v, L = "sizzle" + 1 * new Date,
				b = e.document,
				g = 0,
				Y = 0,
				k = ie(),
				S = ie(),
				D = ie(),
				w = function(e, t) {
					return e === t && (c = !0),
					0
				},
				T = {}.hasOwnProperty,
				x = [],
				j = x.pop,
				H = x.push,
				O = x.push,
				E = x.slice,
				A = function(e, t) {
					for (var n = 0,
					r = e.length; n < r; n++) if (e[n] === t) return n;
					return - 1
				},
				P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				C = "[\\x20\\t\\r\\n\\f]",
				W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				N = "\\[" + C + "*(" + W + ")(?:" + C + "*([*^$|!~]?=)" + C + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + C + "*\\]",
				F = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
				z = new RegExp(C + "+", "g"),
				I = new RegExp("^" + C + "+|((?:^|[^\\\\])(?:\\\\.)*)" + C + "+$", "g"),
				R = new RegExp("^" + C + "*," + C + "*"),
				J = new RegExp("^" + C + "*([>+~]|" + C + ")" + C + "*"),
				q = new RegExp("=" + C + "*([^\\]'\"]*?)" + C + "*\\]", "g"),
				U = new RegExp(F),
				V = new RegExp("^" + W + "$"),
				B = {
					ID: new RegExp("^#(" + W + ")"),
					CLASS: new RegExp("^\\.(" + W + ")"),
					TAG: new RegExp("^(" + W + "|[*])"),
					ATTR: new RegExp("^" + N),
					PSEUDO: new RegExp("^" + F),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + C + "*(even|odd|(([+-]|)(\\d*)n|)" + C + "*(?:([+-]|)" + C + "*(\\d+)|))" + C + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + P + ")$", "i"),
					needsContext: new RegExp("^" + C + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + C + "*((?:-\\d)?\\d*)" + C + "*\\)|)(?=[^-]|$)", "i")
				},
				G = /^(?:input|select|textarea|button)$/i,
				$ = /^h\d$/i,
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				X = /[+~]/,
				Q = new RegExp("\\\\([\\da-f]{1,6}" + C + "?|(" + C + ")|.)", "ig"),
				ee = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r != r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ne = function(e, t) {
					return t ? "\0" === e ? "�": e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ": "\\" + e
				},
				re = function() {
					m()
				},
				oe = Me(function(e) {
					return ! 0 === e.disabled && ("form" in e || "label" in e)
				},
				{
					dir: "parentNode",
					next: "legend"
				});
				try {
					O.apply(x = E.call(b.childNodes), b.childNodes),
					x[b.childNodes.length].nodeType
				} catch(e) {
					O = {
						apply: x.length ?
						function(e, t) {
							H.apply(e, E.call(t))
						}: function(e, t) {
							for (var n = e.length,
							r = 0; e[n++] = t[r++];);
							e.length = n - 1
						}
					}
				}
				function ae(e, t, r, o) {
					var a, s, d, l, c, f, h, M = t && t.ownerDocument,
					g = t ? t.nodeType: 9;
					if (r = r || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return r;
					if (!o && ((t ? t.ownerDocument || t: b) !== _ && m(t), t = t || _, p)) {
						if (11 !== g && (c = Z.exec(e))) if (a = c[1]) {
							if (9 === g) {
								if (! (d = t.getElementById(a))) return r;
								if (d.id === a) return r.push(d),
								r
							} else if (M && (d = M.getElementById(a)) && v(t, d) && d.id === a) return r.push(d),
							r
						} else {
							if (c[2]) return O.apply(r, t.getElementsByTagName(e)),
							r;
							if ((a = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)),
							r
						}
						if (n.qsa && !D[e + " "] && (!y || !y.test(e))) {
							if (1 !== g) M = t,
							h = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = L), s = (f = i(e)).length; s--;) f[s] = "#" + l + " " + he(f[s]);
								h = f.join(","),
								M = X.test(e) && pe(t.parentNode) || t
							}
							if (h) try {
								return O.apply(r, M.querySelectorAll(h)),
								r
							} catch(e) {} finally {
								l === L && t.removeAttribute("id")
							}
						}
					}
					return u(e.replace(I, "$1"), t, r, o)
				}
				function ie() {
					var e = [];
					return function t(n, o) {
						return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
						t[n + " "] = o
					}
				}
				function se(e) {
					return e[L] = !0,
					e
				}
				function ue(e) {
					var t = _.createElement("fieldset");
					try {
						return !! e(t)
					} catch(e) {
						return ! 1
					} finally {
						t.parentNode && t.parentNode.removeChild(t),
						t = null
					}
				}
				function de(e, t) {
					for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
				}
				function le(e, t) {
					var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (r) return r;
					if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
					return e ? 1 : -1
				}
				function ce(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}
				function me(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}
				function _e(e) {
					return function(t) {
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e: t.disabled === e: t.isDisabled === e || t.isDisabled !== !e && oe(t) === e: t.disabled === e: "label" in t && t.disabled === e
					}
				}
				function fe(e) {
					return se(function(t) {
						return t = +t,
						se(function(n, r) {
							for (var o, a = e([], n.length, t), i = a.length; i--;) n[o = a[i]] && (n[o] = !(r[o] = n[o]))
						})
					})
				}
				function pe(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				for (t in n = ae.support = {},
				a = ae.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !! t && "HTML" !== t.nodeName
				},
				m = ae.setDocument = function(e) {
					var t, o, i = e ? e.ownerDocument || e: b;
					return i !== _ && 9 === i.nodeType && i.documentElement ? (f = (_ = i).documentElement, p = !a(_), b !== _ && (o = _.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function(e) {
						return e.className = "i",
						!e.getAttribute("className")
					}), n.getElementsByTagName = ue(function(e) {
						return e.appendChild(_.createComment("")),
						!e.getElementsByTagName("*").length
					}), n.getElementsByClassName = K.test(_.getElementsByClassName), n.getById = ue(function(e) {
						return f.appendChild(e).id = L,
						!_.getElementsByName || !_.getElementsByName(L).length
					}), n.getById ? (r.filter.ID = function(e) {
						var t = e.replace(Q, ee);
						return function(e) {
							return e.getAttribute("id") === t
						}
					},
					r.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && p) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (r.filter.ID = function(e) {
						var t = e.replace(Q, ee);
						return function(e) {
							var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					},
					r.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && p) {
							var n, r, o, a = t.getElementById(e);
							if (a) {
								if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
								for (o = t.getElementsByName(e), r = 0; a = o[r++];) if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
							}
							return []
						}
					}), r.find.TAG = n.getElementsByTagName ?
					function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
					}: function(e, t) {
						var n, r = [],
						o = 0,
						a = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = a[o++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return a
					},
					r.find.CLASS = n.getElementsByClassName &&
					function(e, t) {
						if (void 0 !== t.getElementsByClassName && p) return t.getElementsByClassName(e)
					},
					h = [], y = [], (n.qsa = K.test(_.querySelectorAll)) && (ue(function(e) {
						f.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>",
						e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + C + "*(?:''|\"\")"),
						e.querySelectorAll("[selected]").length || y.push("\\[" + C + "*(?:value|" + P + ")"),
						e.querySelectorAll("[id~=" + L + "-]").length || y.push("~="),
						e.querySelectorAll(":checked").length || y.push(":checked"),
						e.querySelectorAll("a#" + L + "+*").length || y.push(".#.+[+~]")
					}), ue(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = _.createElement("input");
						t.setAttribute("type", "hidden"),
						e.appendChild(t).setAttribute("name", "D"),
						e.querySelectorAll("[name=d]").length && y.push("name" + C + "*[*^$|!~]?="),
						2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
						f.appendChild(e).disabled = !0,
						2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
						e.querySelectorAll("*,:x"),
						y.push(",.*:")
					})), (n.matchesSelector = K.test(M = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue(function(e) {
						n.disconnectedMatch = M.call(e, "*"),
						M.call(e, "[s!='']:x"),
						h.push("!=", F)
					}), y = y.length && new RegExp(y.join("|")), h = h.length && new RegExp(h.join("|")), t = K.test(f.compareDocumentPosition), v = t || K.test(f.contains) ?
					function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement: e,
						r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					}: function(e, t) {
						if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
						return ! 1
					},
					w = t ?
					function(e, t) {
						if (e === t) return c = !0,
						0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === _ || e.ownerDocument === b && v(b, e) ? -1 : t === _ || t.ownerDocument === b && v(b, t) ? 1 : l ? A(l, e) - A(l, t) : 0 : 4 & r ? -1 : 1)
					}: function(e, t) {
						if (e === t) return c = !0,
						0;
						var n, r = 0,
						o = e.parentNode,
						a = t.parentNode,
						i = [e],
						s = [t];
						if (!o || !a) return e === _ ? -1 : t === _ ? 1 : o ? -1 : a ? 1 : l ? A(l, e) - A(l, t) : 0;
						if (o === a) return le(e, t);
						for (n = e; n = n.parentNode;) i.unshift(n);
						for (n = t; n = n.parentNode;) s.unshift(n);
						for (; i[r] === s[r];) r++;
						return r ? le(i[r], s[r]) : i[r] === b ? -1 : s[r] === b ? 1 : 0
					},
					_) : _
				},
				ae.matches = function(e, t) {
					return ae(e, null, null, t)
				},
				ae.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== _ && m(e), t = t.replace(q, "='$1']"), n.matchesSelector && p && !D[t + " "] && (!h || !h.test(t)) && (!y || !y.test(t))) try {
						var r = M.call(e, t);
						if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch(e) {}
					return ae(t, _, null, [e]).length > 0
				},
				ae.contains = function(e, t) {
					return (e.ownerDocument || e) !== _ && m(e),
					v(e, t)
				},
				ae.attr = function(e, t) { (e.ownerDocument || e) !== _ && m(e);
					var o = r.attrHandle[t.toLowerCase()],
					a = o && T.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !p) : void 0;
					return void 0 !== a ? a: n.attributes || !p ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value: null
				},
				ae.escape = function(e) {
					return (e + "").replace(te, ne)
				},
				ae.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				},
				ae.uniqueSort = function(e) {
					var t, r = [],
					o = 0,
					a = 0;
					if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(w), c) {
						for (; t = e[a++];) t === e[a] && (o = r.push(a));
						for (; o--;) e.splice(r[o], 1)
					}
					return l = null,
					e
				},
				o = ae.getText = function(e) {
					var t, n = "",
					r = 0,
					a = e.nodeType;
					if (a) {
						if (1 === a || 9 === a || 11 === a) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
						} else if (3 === a || 4 === a) return e.nodeValue
					} else for (; t = e[r++];) n += o(t);
					return n
				},
				(r = ae.selectors = {
					cacheLength: 50,
					createPseudo: se,
					match: B,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(Q, ee),
							e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee),
							"~=" === e[2] && (e[3] = " " + e[3] + " "),
							e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(),
							"nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
							e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return B.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && U.test(n) && (t = i(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(Q, ee).toLowerCase();
							return "*" === e ?
							function() {
								return ! 0
							}: function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = k[e + " "];
							return t || (t = new RegExp("(^|" + C + ")" + e + "(" + C + "|$)")) && k(e,
							function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, n) {
							return function(r) {
								var o = ae.attr(r, e);
								return null == o ? "!=" === t: !t || (o += "", "=" === t ? o === n: "!=" === t ? o !== n: "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice( - n.length) === n: "~=" === t ? (" " + o.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(e, t, n, r, o) {
							var a = "nth" !== e.slice(0, 3),
							i = "last" !== e.slice( - 4),
							s = "of-type" === t;
							return 1 === r && 0 === o ?
							function(e) {
								return !! e.parentNode
							}: function(t, n, u) {
								var d, l, c, m, _, f, p = a !== i ? "nextSibling": "previousSibling",
								y = t.parentNode,
								h = s && t.nodeName.toLowerCase(),
								M = !u && !s,
								v = !1;
								if (y) {
									if (a) {
										for (; p;) {
											for (m = t; m = m[p];) if (s ? m.nodeName.toLowerCase() === h: 1 === m.nodeType) return ! 1;
											f = p = "only" === e && !f && "nextSibling"
										}
										return ! 0
									}
									if (f = [i ? y.firstChild: y.lastChild], i && M) {
										for (v = (_ = (d = (l = (c = (m = y)[L] || (m[L] = {}))[m.uniqueID] || (c[m.uniqueID] = {}))[e] || [])[0] === g && d[1]) && d[2], m = _ && y.childNodes[_]; m = ++_ && m && m[p] || (v = _ = 0) || f.pop();) if (1 === m.nodeType && ++v && m === t) {
											l[e] = [g, _, v];
											break
										}
									} else if (M && (v = _ = (d = (l = (c = (m = t)[L] || (m[L] = {}))[m.uniqueID] || (c[m.uniqueID] = {}))[e] || [])[0] === g && d[1]), !1 === v) for (; (m = ++_ && m && m[p] || (v = _ = 0) || f.pop()) && ((s ? m.nodeName.toLowerCase() !== h: 1 !== m.nodeType) || !++v || (M && ((l = (c = m[L] || (m[L] = {}))[m.uniqueID] || (c[m.uniqueID] = {}))[e] = [g, v]), m !== t)););
									return (v -= o) === r || v % r == 0 && v / r >= 0
								}
							}
						},
						PSEUDO: function(e, t) {
							var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
							return o[L] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
								for (var r, a = o(e, t), i = a.length; i--;) e[r = A(e, a[i])] = !(n[r] = a[i])
							}) : function(e) {
								return o(e, 0, n)
							}) : o
						}
					},
					pseudos: {
						not: se(function(e) {
							var t = [],
							n = [],
							r = s(e.replace(I, "$1"));
							return r[L] ? se(function(e, t, n, o) {
								for (var a, i = r(e, null, o, []), s = e.length; s--;)(a = i[s]) && (e[s] = !(t[s] = a))
							}) : function(e, o, a) {
								return t[0] = e,
								r(t, null, a, n),
								t[0] = null,
								!n.pop()
							}
						}),
						has: se(function(e) {
							return function(t) {
								return ae(e, t).length > 0
							}
						}),
						contains: se(function(e) {
							return e = e.replace(Q, ee),
							function(t) {
								return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
							}
						}),
						lang: se(function(e) {
							return V.test(e || "") || ae.error("unsupported lang: " + e),
							e = e.replace(Q, ee).toLowerCase(),
							function(t) {
								var n;
								do {
									if (n = p ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
								} while (( t = t . parentNode ) && 1 === t.nodeType);
								return ! 1
							}
						}),
						target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function(e) {
							return e === f
						},
						focus: function(e) {
							return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: _e(!1),
						disabled: _e(!0),
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex,
							!0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
							return ! 0
						},
						parent: function(e) {
							return ! r.pseudos.empty(e)
						},
						header: function(e) {
							return $.test(e.nodeName)
						},
						input: function(e) {
							return G.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: fe(function() {
							return [0]
						}),
						last: fe(function(e, t) {
							return [t - 1]
						}),
						eq: fe(function(e, t, n) {
							return [n < 0 ? n + t: n]
						}),
						even: fe(function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: fe(function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: fe(function(e, t, n) {
							for (var r = n < 0 ? n + t: n; --r >= 0;) e.push(r);
							return e
						}),
						gt: fe(function(e, t, n) {
							for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = r.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) r.pseudos[t] = ce(t);
				for (t in {
					submit: !0,
					reset: !0
				}) r.pseudos[t] = me(t);
				function ye() {}
				function he(e) {
					for (var t = 0,
					n = e.length,
					r = ""; t < n; t++) r += e[t].value;
					return r
				}
				function Me(e, t, n) {
					var r = t.dir,
					o = t.next,
					a = o || r,
					i = n && "parentNode" === a,
					s = Y++;
					return t.first ?
					function(t, n, o) {
						for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o);
						return ! 1
					}: function(t, n, u) {
						var d, l, c, m = [g, s];
						if (u) {
							for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, u)) return ! 0
						} else for (; t = t[r];) if (1 === t.nodeType || i) if (l = (c = t[L] || (t[L] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
						else {
							if ((d = l[a]) && d[0] === g && d[1] === s) return m[2] = d[2];
							if (l[a] = m, m[2] = e(t, n, u)) return ! 0
						}
						return ! 1
					}
				}
				function ve(e) {
					return e.length > 1 ?
					function(t, n, r) {
						for (var o = e.length; o--;) if (!e[o](t, n, r)) return ! 1;
						return ! 0
					}: e[0]
				}
				function Le(e, t, n, r, o) {
					for (var a, i = [], s = 0, u = e.length, d = null != t; s < u; s++)(a = e[s]) && (n && !n(a, r, o) || (i.push(a), d && t.push(s)));
					return i
				}
				function be(e, t, n, r, o, a) {
					return r && !r[L] && (r = be(r)),
					o && !o[L] && (o = be(o, a)),
					se(function(a, i, s, u) {
						var d, l, c, m = [],
						_ = [],
						f = i.length,
						p = a ||
						function(e, t, n) {
							for (var r = 0,
							o = t.length; r < o; r++) ae(e, t[r], n);
							return n
						} (t || "*", s.nodeType ? [s] : s, []),
						y = !e || !a && t ? p: Le(p, m, e, s, u),
						h = n ? o || (a ? e: f || r) ? [] : i: y;
						if (n && n(y, h, s, u), r) for (d = Le(h, _), r(d, [], s, u), l = d.length; l--;)(c = d[l]) && (h[_[l]] = !(y[_[l]] = c));
						if (a) {
							if (o || e) {
								if (o) {
									for (d = [], l = h.length; l--;)(c = h[l]) && d.push(y[l] = c);
									o(null, h = [], d, u)
								}
								for (l = h.length; l--;)(c = h[l]) && (d = o ? A(a, c) : m[l]) > -1 && (a[d] = !(i[d] = c))
							}
						} else h = Le(h === i ? h.splice(f, h.length) : h),
						o ? o(null, i, h, u) : O.apply(i, h)
					})
				}
				function ge(e) {
					for (var t, n, o, a = e.length,
					i = r.relative[e[0].type], s = i || r.relative[" "], u = i ? 1 : 0, l = Me(function(e) {
						return e === t
					},
					s, !0), c = Me(function(e) {
						return A(t, e) > -1
					},
					s, !0), m = [function(e, n, r) {
						var o = !i && (r || n !== d) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
						return t = null,
						o
					}]; u < a; u++) if (n = r.relative[e[u].type]) m = [Me(ve(m), n)];
					else {
						if ((n = r.filter[e[u].type].apply(null, e[u].matches))[L]) {
							for (o = ++u; o < a && !r.relative[e[o].type]; o++);
							return be(u > 1 && ve(m), u > 1 && he(e.slice(0, u - 1).concat({
								value: " " === e[u - 2].type ? "*": ""
							})).replace(I, "$1"), n, u < o && ge(e.slice(u, o)), o < a && ge(e = e.slice(o)), o < a && he(e))
						}
						m.push(n)
					}
					return ve(m)
				}
				return ye.prototype = r.filters = r.pseudos,
				r.setFilters = new ye,
				i = ae.tokenize = function(e, t) {
					var n, o, a, i, s, u, d, l = S[e + " "];
					if (l) return t ? 0 : l.slice(0);
					for (s = e, u = [], d = r.preFilter; s;) {
						for (i in n && !(o = R.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(a = [])), n = !1, (o = J.exec(s)) && (n = o.shift(), a.push({
							value: n,
							type: o[0].replace(I, " ")
						}), s = s.slice(n.length)), r.filter) ! (o = B[i].exec(s)) || d[i] && !(o = d[i](o)) || (n = o.shift(), a.push({
							value: n,
							type: i,
							matches: o
						}), s = s.slice(n.length));
						if (!n) break
					}
					return t ? s.length: s ? ae.error(e) : S(e, u).slice(0)
				},
				s = ae.compile = function(e, t) {
					var n, o = [],
					a = [],
					s = D[e + " "];
					if (!s) {
						for (t || (t = i(e)), n = t.length; n--;)(s = ge(t[n]))[L] ? o.push(s) : a.push(s); (s = D(e,
						function(e, t) {
							var n = t.length > 0,
							o = e.length > 0,
							a = function(a, i, s, u, l) {
								var c, f, y, h = 0,
								M = "0",
								v = a && [],
								L = [],
								b = d,
								Y = a || o && r.find.TAG("*", l),
								k = g += null == b ? 1 : Math.random() || .1,
								S = Y.length;
								for (l && (d = i === _ || i || l); M !== S && null != (c = Y[M]); M++) {
									if (o && c) {
										for (f = 0, i || c.ownerDocument === _ || (m(c), s = !p); y = e[f++];) if (y(c, i || _, s)) {
											u.push(c);
											break
										}
										l && (g = k)
									}
									n && ((c = !y && c) && h--, a && v.push(c))
								}
								if (h += M, n && M !== h) {
									for (f = 0; y = t[f++];) y(v, L, i, s);
									if (a) {
										if (h > 0) for (; M--;) v[M] || L[M] || (L[M] = j.call(u));
										L = Le(L)
									}
									O.apply(u, L),
									l && !a && L.length > 0 && h + t.length > 1 && ae.uniqueSort(u)
								}
								return l && (g = k, d = b),
								v
							};
							return n ? se(a) : a
						} (a, o))).selector = e
					}
					return s
				},
				u = ae.select = function(e, t, n, o) {
					var a, u, d, l, c, m = "function" == typeof e && e,
					_ = !o && i(e = m.selector || e);
					if (n = n || [], 1 === _.length) {
						if ((u = _[0] = _[0].slice(0)).length > 2 && "ID" === (d = u[0]).type && 9 === t.nodeType && p && r.relative[u[1].type]) {
							if (! (t = (r.find.ID(d.matches[0].replace(Q, ee), t) || [])[0])) return n;
							m && (t = t.parentNode),
							e = e.slice(u.shift().value.length)
						}
						for (a = B.needsContext.test(e) ? 0 : u.length; a--&&(d = u[a], !r.relative[l = d.type]);) if ((c = r.find[l]) && (o = c(d.matches[0].replace(Q, ee), X.test(u[0].type) && pe(t.parentNode) || t))) {
							if (u.splice(a, 1), !(e = o.length && he(u))) return O.apply(n, o),
							n;
							break
						}
					}
					return (m || s(e, _))(o, t, !p, n, !t || X.test(e) && pe(t.parentNode) || t),
					n
				},
				n.sortStable = L.split("").sort(w).join("") === L,
				n.detectDuplicates = !!c,
				m(),
				n.sortDetached = ue(function(e) {
					return 1 & e.compareDocumentPosition(_.createElement("fieldset"))
				}),
				ue(function(e) {
					return e.innerHTML = "<a href='#'></a>",
					"#" === e.firstChild.getAttribute("href")
				}) || de("type|href|height|width",
				function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}),
				n.attributes && ue(function(e) {
					return e.innerHTML = "<input/>",
					e.firstChild.setAttribute("value", ""),
					"" === e.firstChild.getAttribute("value")
				}) || de("value",
				function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}),
				ue(function(e) {
					return null == e.getAttribute("disabled")
				}) || de(P,
				function(e, t, n) {
					var r;
					if (!n) return ! 0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
				}),
				ae
			} (o);
			k.find = w,
			k.expr = w.selectors,
			k.expr[":"] = k.expr.pseudos,
			k.uniqueSort = k.unique = w.uniqueSort,
			k.text = w.getText,
			k.isXMLDoc = w.isXML,
			k.contains = w.contains,
			k.escapeSelector = w.escape;
			var T = function(e, t, n) {
				for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
					if (o && k(e).is(n)) break;
					r.push(e)
				}
				return r
			},
			x = function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			j = k.expr.match.needsContext;
			function H(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			}
			var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
			function E(e, t, n) {
				return v(t) ? k.grep(e,
				function(e, r) {
					return !! t.call(e, r, e) !== n
				}) : t.nodeType ? k.grep(e,
				function(e) {
					return e === t !== n
				}) : "string" != typeof t ? k.grep(e,
				function(e) {
					return m.call(t, e) > -1 !== n
				}) : k.filter(t, e, n)
			}
			k.filter = function(e, t, n) {
				var r = t[0];
				return n && (e = ":not(" + e + ")"),
				1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t,
				function(e) {
					return 1 === e.nodeType
				}))
			},
			k.fn.extend({
				find: function(e) {
					var t, n, r = this.length,
					o = this;
					if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
						for (t = 0; t < r; t++) if (k.contains(o[t], this)) return ! 0
					}));
					for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, o[t], n);
					return r > 1 ? k.uniqueSort(n) : n
				},
				filter: function(e) {
					return this.pushStack(E(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(E(this, e || [], !0))
				},
				is: function(e) {
					return !! E(this, "string" == typeof e && j.test(e) ? k(e) : e || [], !1).length
				}
			});
			var A, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (k.fn.init = function(e, t, n) {
				var r, o;
				if (!e) return this;
				if (n = n || A, "string" == typeof e) {
					if (! (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
					if (r[1]) {
						if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: s, !0)), O.test(r[1]) && k.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
						return this
					}
					return (o = s.getElementById(r[2])) && (this[0] = o, this.length = 1),
					this
				}
				return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
			}).prototype = k.fn,
			A = k(s);
			var C = /^(?:parents|prev(?:Until|All))/,
			W = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
			function N(e, t) {
				for (; (e = e[t]) && 1 !== e.nodeType;);
				return e
			}
			k.fn.extend({
				has: function(e) {
					var t = k(e, this),
					n = t.length;
					return this.filter(function() {
						for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return ! 0
					})
				},
				closest: function(e, t) {
					var n, r = 0,
					o = this.length,
					a = [],
					i = "string" != typeof e && k(e);
					if (!j.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
						a.push(n);
						break
					}
					return this.pushStack(a.length > 1 ? k.uniqueSort(a) : a)
				},
				index: function(e) {
					return e ? "string" == typeof e ? m.call(k(e), this[0]) : m.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
				},
				add: function(e, t) {
					return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
				}
			}),
			k.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t: null
				},
				parents: function(e) {
					return T(e, "parentNode")
				},
				parentsUntil: function(e, t, n) {
					return T(e, "parentNode", n)
				},
				next: function(e) {
					return N(e, "nextSibling")
				},
				prev: function(e) {
					return N(e, "previousSibling")
				},
				nextAll: function(e) {
					return T(e, "nextSibling")
				},
				prevAll: function(e) {
					return T(e, "previousSibling")
				},
				nextUntil: function(e, t, n) {
					return T(e, "nextSibling", n)
				},
				prevUntil: function(e, t, n) {
					return T(e, "previousSibling", n)
				},
				siblings: function(e) {
					return x((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return x(e.firstChild)
				},
				contents: function(e) {
					return H(e, "iframe") ? e.contentDocument: (H(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
				}
			},
			function(e, t) {
				k.fn[e] = function(n, r) {
					var o = k.map(this, t, n);
					return "Until" !== e.slice( - 5) && (r = n),
					r && "string" == typeof r && (o = k.filter(r, o)),
					this.length > 1 && (W[e] || k.uniqueSort(o), C.test(e) && o.reverse()),
					this.pushStack(o)
				}
			});
			var F = /[^\x20\t\r\n\f]+/g;
			function z(e) {
				return e
			}
			function I(e) {
				throw e
			}
			function R(e, t, n, r) {
				var o;
				try {
					e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
				} catch(e) {
					n.apply(void 0, [e])
				}
			}
			k.Callbacks = function(e) {
				e = "string" == typeof e ?
				function(e) {
					var t = {};
					return k.each(e.match(F) || [],
					function(e, n) {
						t[n] = !0
					}),
					t
				} (e) : k.extend({},
				e);
				var t, n, r, o, a = [],
				i = [],
				s = -1,
				u = function() {
					for (o = o || e.once, r = t = !0; i.length; s = -1) for (n = i.shift(); ++s < a.length;) ! 1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length, n = !1);
					e.memory || (n = !1),
					t = !1,
					o && (a = n ? [] : "")
				},
				d = {
					add: function() {
						return a && (n && !t && (s = a.length - 1, i.push(n)),
						function t(n) {
							k.each(n,
							function(n, r) {
								v(r) ? e.unique && d.has(r) || a.push(r) : r && r.length && "string" !== Y(r) && t(r)
							})
						} (arguments), n && !t && u()),
						this
					},
					remove: function() {
						return k.each(arguments,
						function(e, t) {
							for (var n; (n = k.inArray(t, a, n)) > -1;) a.splice(n, 1),
							n <= s && s--
						}),
						this
					},
					has: function(e) {
						return e ? k.inArray(e, a) > -1 : a.length > 0
					},
					empty: function() {
						return a && (a = []),
						this
					},
					disable: function() {
						return o = i = [],
						a = n = "",
						this
					},
					disabled: function() {
						return ! a
					},
					lock: function() {
						return o = i = [],
						n || t || (a = n = ""),
						this
					},
					locked: function() {
						return !! o
					},
					fireWith: function(e, n) {
						return o || (n = [e, (n = n || []).slice ? n.slice() : n], i.push(n), t || u()),
						this
					},
					fire: function() {
						return d.fireWith(this, arguments),
						this
					},
					fired: function() {
						return !! r
					}
				};
				return d
			},
			k.extend({
				Deferred: function(e) {
					var t = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
					n = "pending",
					a = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments),
							this
						},
						catch: function(e) {
							return a.then(null, e)
						},
						pipe: function() {
							var e = arguments;
							return k.Deferred(function(n) {
								k.each(t,
								function(t, r) {
									var o = v(e[r[4]]) && e[r[4]];
									i[r[1]](function() {
										var e = o && o.apply(this, arguments);
										e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
									})
								}),
								e = null
							}).promise()
						},
						then: function(e, n, a) {
							var i = 0;
							function s(e, t, n, a) {
								return function() {
									var u = this,
									d = arguments,
									l = function() {
										var o, l;
										if (! (e < i)) {
											if ((o = n.apply(u, d)) === t.promise()) throw new TypeError("Thenable self-resolution");
											l = o && ("object" === (void 0 === o ? "undefined": r(o)) || "function" == typeof o) && o.then,
											v(l) ? a ? l.call(o, s(i, t, z, a), s(i, t, I, a)) : (i++, l.call(o, s(i, t, z, a), s(i, t, I, a), s(i, t, z, t.notifyWith))) : (n !== z && (u = void 0, d = [o]), (a || t.resolveWith)(u, d))
										}
									},
									c = a ? l: function() {
										try {
											l()
										} catch(r) {
											k.Deferred.exceptionHook && k.Deferred.exceptionHook(r, c.stackTrace),
											e + 1 >= i && (n !== I && (u = void 0, d = [r]), t.rejectWith(u, d))
										}
									};
									e ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), o.setTimeout(c))
								}
							}
							return k.Deferred(function(r) {
								t[0][3].add(s(0, r, v(a) ? a: z, r.notifyWith)),
								t[1][3].add(s(0, r, v(e) ? e: z)),
								t[2][3].add(s(0, r, v(n) ? n: I))
							}).promise()
						},
						promise: function(e) {
							return null != e ? k.extend(e, a) : a
						}
					},
					i = {};
					return k.each(t,
					function(e, r) {
						var o = r[2],
						s = r[5];
						a[r[1]] = o.add,
						s && o.add(function() {
							n = s
						},
						t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
						o.add(r[3].fire),
						i[r[0]] = function() {
							return i[r[0] + "With"](this === i ? void 0 : this, arguments),
							this
						},
						i[r[0] + "With"] = o.fireWith
					}),
					a.promise(i),
					e && e.call(i, i),
					i
				},
				when: function(e) {
					var t = arguments.length,
					n = t,
					r = Array(n),
					o = d.call(arguments),
					a = k.Deferred(),
					i = function(e) {
						return function(n) {
							r[e] = this,
							o[e] = arguments.length > 1 ? d.call(arguments) : n,
							--t || a.resolveWith(r, o)
						}
					};
					if (t <= 1 && (R(e, a.done(i(n)).resolve, a.reject, !t), "pending" === a.state() || v(o[n] && o[n].then))) return a.then();
					for (; n--;) R(o[n], i(n), a.reject);
					return a.promise()
				}
			});
			var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
			k.Deferred.exceptionHook = function(e, t) {
				o.console && o.console.warn && e && J.test(e.name) && o.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
			},
			k.readyException = function(e) {
				o.setTimeout(function() {
					throw e
				})
			};
			var q = k.Deferred();
			function U() {
				s.removeEventListener("DOMContentLoaded", U),
				o.removeEventListener("load", U),
				k.ready()
			}
			k.fn.ready = function(e) {
				return q.then(e).
				catch(function(e) {
					k.readyException(e)
				}),
				this
			},
			k.extend({
				isReady: !1,
				readyWait: 1,
				ready: function(e) { (!0 === e ? --k.readyWait: k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || q.resolveWith(s, [k]))
				}
			}),
			k.ready.then = q.then,
			"complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? o.setTimeout(k.ready) : (s.addEventListener("DOMContentLoaded", U), o.addEventListener("load", U));
			var V = function e(t, n, r, o, a, i, s) {
				var u = 0,
				d = t.length,
				l = null == r;
				if ("object" === Y(r)) for (u in a = !0, r) e(t, n, u, r[u], !0, i, s);
				else if (void 0 !== o && (a = !0, v(o) || (s = !0), l && (s ? (n.call(t, o), n = null) : (l = n, n = function(e, t, n) {
					return l.call(k(e), n)
				})), n)) for (; u < d; u++) n(t[u], r, s ? o: o.call(t[u], u, n(t[u], r)));
				return a ? t: l ? n.call(t) : d ? n(t[0], r) : i
			},
			B = /^-ms-/,
			G = /-([a-z])/g;
			function $(e, t) {
				return t.toUpperCase()
			}
			function K(e) {
				return e.replace(B, "ms-").replace(G, $)
			}
			var Z = function(e) {
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};
			function X() {
				this.expando = k.expando + X.uid++
			}
			X.uid = 1,
			X.prototype = {
				cache: function(e) {
					var t = e[this.expando];
					return t || (t = {},
					Z(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))),
					t
				},
				set: function(e, t, n) {
					var r, o = this.cache(e);
					if ("string" == typeof t) o[K(t)] = n;
					else for (r in t) o[K(r)] = t[r];
					return o
				},
				get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
				},
				access: function(e, t, n) {
					return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n: t)
				},
				remove: function(e, t) {
					var n, r = e[this.expando];
					if (void 0 !== r) {
						if (void 0 !== t) {
							n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [t] : t.match(F) || []).length;
							for (; n--;) delete r[t[n]]
						} (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
					}
				},
				hasData: function(e) {
					var t = e[this.expando];
					return void 0 !== t && !k.isEmptyObject(t)
				}
			};
			var Q = new X,
			ee = new X,
			te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			ne = /[A-Z]/g;
			function re(e, t, n) {
				var r;
				if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
					try {
						n = function(e) {
							return "true" === e || "false" !== e && ("null" === e ? null: e === +e + "" ? +e: te.test(e) ? JSON.parse(e) : e)
						} (n)
					} catch(e) {}
					ee.set(e, t, n)
				} else n = void 0;
				return n
			}
			k.extend({
				hasData: function(e) {
					return ee.hasData(e) || Q.hasData(e)
				},
				data: function(e, t, n) {
					return ee.access(e, t, n)
				},
				removeData: function(e, t) {
					ee.remove(e, t)
				},
				_data: function(e, t, n) {
					return Q.access(e, t, n)
				},
				_removeData: function(e, t) {
					Q.remove(e, t)
				}
			}),
			k.fn.extend({
				data: function(e, t) {
					var n, o, a, i = this[0],
					s = i && i.attributes;
					if (void 0 === e) {
						if (this.length && (a = ee.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
							for (n = s.length; n--;) s[n] && 0 === (o = s[n].name).indexOf("data-") && (o = K(o.slice(5)), re(i, o, a[o]));
							Q.set(i, "hasDataAttrs", !0)
						}
						return a
					}
					return "object" === (void 0 === e ? "undefined": r(e)) ? this.each(function() {
						ee.set(this, e)
					}) : V(this,
					function(t) {
						var n;
						if (i && void 0 === t) return void 0 !== (n = ee.get(i, e)) ? n: void 0 !== (n = re(i, e)) ? n: void 0;
						this.each(function() {
							ee.set(this, e, t)
						})
					},
					null, t, arguments.length > 1, null, !0)
				},
				removeData: function(e) {
					return this.each(function() {
						ee.remove(this, e)
					})
				}
			}),
			k.extend({
				queue: function(e, t, n) {
					var r;
					if (e) return t = (t || "fx") + "queue",
					r = Q.get(e, t),
					n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
					r || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var n = k.queue(e, t),
					r = n.length,
					o = n.shift(),
					a = k._queueHooks(e, t);
					"inprogress" === o && (o = n.shift(), r--),
					o && ("fx" === t && n.unshift("inprogress"), delete a.stop, o.call(e,
					function() {
						k.dequeue(e, t)
					},
					a)),
					!r && a && a.empty.fire()
				},
				_queueHooks: function(e, t) {
					var n = t + "queueHooks";
					return Q.get(e, n) || Q.access(e, n, {
						empty: k.Callbacks("once memory").add(function() {
							Q.remove(e, [t + "queue", n])
						})
					})
				}
			}),
			k.fn.extend({
				queue: function(e, t) {
					var n = 2;
					return "string" != typeof e && (t = e, e = "fx", n--),
					arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this: this.each(function() {
						var n = k.queue(this, e, t);
						k._queueHooks(this, e),
						"fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						k.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var n, r = 1,
					o = k.Deferred(),
					a = this,
					i = this.length,
					s = function() {--r || o.resolveWith(a, [a])
					};
					for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;)(n = Q.get(a[i], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
					return s(),
					o.promise(t)
				}
			});
			var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ae = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
			ie = ["Top", "Right", "Bottom", "Left"],
			se = function(e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
			},
			ue = function(e, t, n, r) {
				var o, a, i = {};
				for (a in t) i[a] = e.style[a],
				e.style[a] = t[a];
				for (a in o = n.apply(e, r || []), t) e.style[a] = i[a];
				return o
			};
			function de(e, t, n, r) {
				var o, a, i = 20,
				s = r ?
				function() {
					return r.cur()
				}: function() {
					return k.css(e, t, "")
				},
				u = s(),
				d = n && n[3] || (k.cssNumber[t] ? "": "px"),
				l = (k.cssNumber[t] || "px" !== d && +u) && ae.exec(k.css(e, t));
				if (l && l[3] !== d) {
					for (u /= 2, d = d || l[3], l = +u || 1; i--;) k.style(e, t, l + d),
					(1 - a) * (1 - (a = s() / u || .5)) <= 0 && (i = 0),
					l /= a;
					l *= 2,
					k.style(e, t, l + d),
					n = n || []
				}
				return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = l, r.end = o)),
				o
			}
			var le = {};
			function ce(e) {
				var t, n = e.ownerDocument,
				r = e.nodeName,
				o = le[r];
				return o || (t = n.body.appendChild(n.createElement(r)), o = k.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[r] = o, o)
			}
			function me(e, t) {
				for (var n, r, o = [], a = 0, i = e.length; a < i; a++)(r = e[a]).style && (n = r.style.display, t ? ("none" === n && (o[a] = Q.get(r, "display") || null, o[a] || (r.style.display = "")), "" === r.style.display && se(r) && (o[a] = ce(r))) : "none" !== n && (o[a] = "none", Q.set(r, "display", n)));
				for (a = 0; a < i; a++) null != o[a] && (e[a].style.display = o[a]);
				return e
			}
			k.fn.extend({
				show: function() {
					return me(this, !0)
				},
				hide: function() {
					return me(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
						se(this) ? k(this).show() : k(this).hide()
					})
				}
			});
			var _e = /^(?:checkbox|radio)$/i,
			fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			pe = /^$|^module$|\/(?:java|ecma)script/i,
			ye = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
			function he(e, t) {
				var n;
				return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
				void 0 === t || t && H(e, t) ? k.merge([e], n) : n
			}
			function Me(e, t) {
				for (var n = 0,
				r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
			}
			ye.optgroup = ye.option,
			ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
			ye.th = ye.td;
			var ve = /<|&#?\w+;/;
			function Le(e, t, n, r, o) {
				for (var a, i, s, u, d, l, c = t.createDocumentFragment(), m = [], _ = 0, f = e.length; _ < f; _++) if ((a = e[_]) || 0 === a) if ("object" === Y(a)) k.merge(m, a.nodeType ? [a] : a);
				else if (ve.test(a)) {
					for (i = i || c.appendChild(t.createElement("div")), s = (fe.exec(a) || ["", ""])[1].toLowerCase(), u = ye[s] || ye._default, i.innerHTML = u[1] + k.htmlPrefilter(a) + u[2], l = u[0]; l--;) i = i.lastChild;
					k.merge(m, i.childNodes),
					(i = c.firstChild).textContent = ""
				} else m.push(t.createTextNode(a));
				for (c.textContent = "", _ = 0; a = m[_++];) if (r && k.inArray(a, r) > -1) o && o.push(a);
				else if (d = k.contains(a.ownerDocument, a), i = he(c.appendChild(a), "script"), d && Me(i), n) for (l = 0; a = i[l++];) pe.test(a.type || "") && n.push(a);
				return c
			} !
			function() {
				var e = s.createDocumentFragment().appendChild(s.createElement("div")),
				t = s.createElement("input");
				t.setAttribute("type", "radio"),
				t.setAttribute("checked", "checked"),
				t.setAttribute("name", "t"),
				e.appendChild(t),
				M.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
				e.innerHTML = "<textarea>x</textarea>",
				M.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
			} ();
			var be = s.documentElement,
			ge = /^key/,
			Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			ke = /^([^.]*)(?:\.(.+)|)/;
			function Se() {
				return ! 0
			}
			function De() {
				return ! 1
			}
			function we() {
				try {
					return s.activeElement
				} catch(e) {}
			}
			function Te(e, t, n, o, a, i) {
				var s, u;
				if ("object" === (void 0 === t ? "undefined": r(t))) {
					for (u in "string" != typeof n && (o = o || n, n = void 0), t) Te(e, u, n, o, t[u], i);
					return e
				}
				if (null == o && null == a ? (a = n, o = n = void 0) : null == a && ("string" == typeof n ? (a = o, o = void 0) : (a = o, o = n, n = void 0)), !1 === a) a = De;
				else if (!a) return e;
				return 1 === i && (s = a, (a = function(e) {
					return k().off(e),
					s.apply(this, arguments)
				}).guid = s.guid || (s.guid = k.guid++)),
				e.each(function() {
					k.event.add(this, t, a, o, n)
				})
			}
			k.event = {
				global: {},
				add: function(e, t, n, r, o) {
					var a, i, s, u, d, l, c, m, _, f, p, y = Q.get(e);
					if (y) for (n.handler && (n = (a = n).handler, o = a.selector), o && k.find.matchesSelector(be, o), n.guid || (n.guid = k.guid++), (u = y.events) || (u = y.events = {}), (i = y.handle) || (i = y.handle = function(t) {
						return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
					}), d = (t = (t || "").match(F) || [""]).length; d--;) _ = p = (s = ke.exec(t[d]) || [])[1],
					f = (s[2] || "").split(".").sort(),
					_ && (c = k.event.special[_] || {},
					_ = (o ? c.delegateType: c.bindType) || _, c = k.event.special[_] || {},
					l = k.extend({
						type: _,
						origType: p,
						data: r,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && k.expr.match.needsContext.test(o),
						namespace: f.join(".")
					},
					a), (m = u[_]) || ((m = u[_] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, f, i) || e.addEventListener && e.addEventListener(_, i)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? m.splice(m.delegateCount++, 0, l) : m.push(l), k.event.global[_] = !0)
				},
				remove: function(e, t, n, r, o) {
					var a, i, s, u, d, l, c, m, _, f, p, y = Q.hasData(e) && Q.get(e);
					if (y && (u = y.events)) {
						for (d = (t = (t || "").match(F) || [""]).length; d--;) if (_ = p = (s = ke.exec(t[d]) || [])[1], f = (s[2] || "").split(".").sort(), _) {
							for (c = k.event.special[_] || {},
							m = u[_ = (r ? c.delegateType: c.bindType) || _] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = a = m.length; a--;) l = m[a],
							!o && p !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (m.splice(a, 1), l.selector && m.delegateCount--, c.remove && c.remove.call(e, l));
							i && !m.length && (c.teardown && !1 !== c.teardown.call(e, f, y.handle) || k.removeEvent(e, _, y.handle), delete u[_])
						} else for (_ in u) k.event.remove(e, _ + t[d], n, r, !0);
						k.isEmptyObject(u) && Q.remove(e, "handle events")
					}
				},
				dispatch: function(e) {
					var t, n, r, o, a, i, s = k.event.fix(e),
					u = new Array(arguments.length),
					d = (Q.get(this, "events") || {})[s.type] || [],
					l = k.event.special[s.type] || {};
					for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
					if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
						for (i = k.event.handlers.call(this, s, d), t = 0; (o = i[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (a = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (r = ((k.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
						return l.postDispatch && l.postDispatch.call(this, s),
						s.result
					}
				},
				handlers: function(e, t) {
					var n, r, o, a, i, s = [],
					u = t.delegateCount,
					d = e.target;
					if (u && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
						for (a = [], i = {},
						n = 0; n < u; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? k(o, this).index(d) > -1 : k.find(o, this, null, [d]).length),
						i[o] && a.push(r);
						a.length && s.push({
							elem: d,
							handlers: a
						})
					}
					return d = this,
					u < t.length && s.push({
						elem: d,
						handlers: t.slice(u)
					}),
					s
				},
				addProp: function(e, t) {
					Object.defineProperty(k.Event.prototype, e, {
						enumerable: !0,
						configurable: !0,
						get: v(t) ?
						function() {
							if (this.originalEvent) return t(this.originalEvent)
						}: function() {
							if (this.originalEvent) return this.originalEvent[e]
						},
						set: function(t) {
							Object.defineProperty(this, e, {
								enumerable: !0,
								configurable: !0,
								writable: !0,
								value: t
							})
						}
					})
				},
				fix: function(e) {
					return e[k.expando] ? e: new k.Event(e)
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						trigger: function() {
							if (this !== we() && this.focus) return this.focus(),
							!1
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function() {
							if (this === we() && this.blur) return this.blur(),
							!1
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function() {
							if ("checkbox" === this.type && this.click && H(this, "input")) return this.click(),
							!1
						},
						_default: function(e) {
							return H(e.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				}
			},
			k.removeEvent = function(e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n)
			},
			k.Event = function(e, t) {
				if (! (this instanceof k.Event)) return new k.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se: De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
				t && k.extend(this, t),
				this.timeStamp = e && e.timeStamp || Date.now(),
				this[k.expando] = !0
			},
			k.Event.prototype = {
				constructor: k.Event,
				isDefaultPrevented: De,
				isPropagationStopped: De,
				isImmediatePropagationStopped: De,
				isSimulated: !1,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = Se,
					e && !this.isSimulated && e.preventDefault()
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = Se,
					e && !this.isSimulated && e.stopPropagation()
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = Se,
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation()
				}
			},
			k.each({
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function(e) {
					var t = e.button;
					return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode: e.keyCode: !e.which && void 0 !== t && Ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
				}
			},
			k.event.addProp),
			k.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			},
			function(e, t) {
				k.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var n, r = e.relatedTarget,
						o = e.handleObj;
						return r && (r === this || k.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
						n
					}
				}
			}),
			k.fn.extend({
				on: function(e, t, n, r) {
					return Te(this, e, t, n, r)
				},
				one: function(e, t, n, r) {
					return Te(this, e, t, n, r, 1)
				},
				off: function(e, t, n) {
					var o, a;
					if (e && e.preventDefault && e.handleObj) return o = e.handleObj,
					k(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace: o.origType, o.selector, o.handler),
					this;
					if ("object" === (void 0 === e ? "undefined": r(e))) {
						for (a in e) this.off(a, t, e[a]);
						return this
					}
					return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
					!1 === n && (n = De),
					this.each(function() {
						k.event.remove(this, e, n, t)
					})
				}
			});
			var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			je = /<script|<style|<link/i,
			He = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
			function Ee(e, t) {
				return H(e, "table") && H(11 !== t.nodeType ? t: t.firstChild, "tr") && k(e).children("tbody")[0] || e
			}
			function Ae(e) {
				return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
				e
			}
			function Pe(e) {
				return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
				e
			}
			function Ce(e, t) {
				var n, r, o, a, i, s, u, d;
				if (1 === t.nodeType) {
					if (Q.hasData(e) && (a = Q.access(e), i = Q.set(t, a), d = a.events)) for (o in delete i.handle, i.events = {},
					d) for (n = 0, r = d[o].length; n < r; n++) k.event.add(t, o, d[o][n]);
					ee.hasData(e) && (s = ee.access(e), u = k.extend({},
					s), ee.set(t, u))
				}
			}
			function We(e, t) {
				var n = t.nodeName.toLowerCase();
				"input" === n && _e.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
			}
			function Ne(e, t, n, r) {
				t = l.apply([], t);
				var o, a, i, s, u, d, c = 0,
				m = e.length,
				_ = m - 1,
				f = t[0],
				p = v(f);
				if (p || m > 1 && "string" == typeof f && !M.checkClone && He.test(f)) return e.each(function(o) {
					var a = e.eq(o);
					p && (t[0] = f.call(this, o, a.html())),
					Ne(a, t, n, r)
				});
				if (m && (a = (o = Le(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
					for (s = (i = k.map(he(o, "script"), Ae)).length; c < m; c++) u = o,
					c !== _ && (u = k.clone(u, !0, !0), s && k.merge(i, he(u, "script"))),
					n.call(e[c], u, c);
					if (s) for (d = i[i.length - 1].ownerDocument, k.map(i, Pe), c = 0; c < s; c++) u = i[c],
					pe.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(d, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : g(u.textContent.replace(Oe, ""), d, u))
				}
				return e
			}
			function Fe(e, t, n) {
				for (var r, o = t ? k.filter(t, e) : e, a = 0; null != (r = o[a]); a++) n || 1 !== r.nodeType || k.cleanData(he(r)),
				r.parentNode && (n && k.contains(r.ownerDocument, r) && Me(he(r, "script")), r.parentNode.removeChild(r));
				return e
			}
			k.extend({
				htmlPrefilter: function(e) {
					return e.replace(xe, "<$1></$2>")
				},
				clone: function(e, t, n) {
					var r, o, a, i, s = e.cloneNode(!0),
					u = k.contains(e.ownerDocument, e);
					if (! (M.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (i = he(s), r = 0, o = (a = he(e)).length; r < o; r++) We(a[r], i[r]);
					if (t) if (n) for (a = a || he(e), i = i || he(s), r = 0, o = a.length; r < o; r++) Ce(a[r], i[r]);
					else Ce(e, s);
					return (i = he(s, "script")).length > 0 && Me(i, !u && he(e, "script")),
					s
				},
				cleanData: function(e) {
					for (var t, n, r, o = k.event.special,
					a = 0; void 0 !== (n = e[a]); a++) if (Z(n)) {
						if (t = n[Q.expando]) {
							if (t.events) for (r in t.events) o[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
							n[Q.expando] = void 0
						}
						n[ee.expando] && (n[ee.expando] = void 0)
					}
				}
			}),
			k.fn.extend({
				detach: function(e) {
					return Fe(this, e, !0)
				},
				remove: function(e) {
					return Fe(this, e)
				},
				text: function(e) {
					return V(this,
					function(e) {
						return void 0 === e ? k.text(this) : this.empty().each(function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
						})
					},
					null, e, arguments.length)
				},
				append: function() {
					return Ne(this, arguments,
					function(e) {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
					})
				},
				prepend: function() {
					return Ne(this, arguments,
					function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = Ee(this, e);
							t.insertBefore(e, t.firstChild)
						}
					})
				},
				before: function() {
					return Ne(this, arguments,
					function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					})
				},
				after: function() {
					return Ne(this, arguments,
					function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					})
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(he(e, !1)), e.textContent = "");
					return this
				},
				clone: function(e, t) {
					return e = null != e && e,
					t = null == t ? e: t,
					this.map(function() {
						return k.clone(this, e, t)
					})
				},
				html: function(e) {
					return V(this,
					function(e) {
						var t = this[0] || {},
						n = 0,
						r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !je.test(e) && !ye[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = k.htmlPrefilter(e);
							try {
								for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(he(t, !1)), t.innerHTML = e);
								t = 0
							} catch(e) {}
						}
						t && this.empty().append(e)
					},
					null, e, arguments.length)
				},
				replaceWith: function() {
					var e = [];
					return Ne(this, arguments,
					function(t) {
						var n = this.parentNode;
						k.inArray(this, e) < 0 && (k.cleanData(he(this)), n && n.replaceChild(t, this))
					},
					e)
				}
			}),
			k.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			},
			function(e, t) {
				k.fn[e] = function(e) {
					for (var n, r = [], o = k(e), a = o.length - 1, i = 0; i <= a; i++) n = i === a ? this: this.clone(!0),
					k(o[i])[t](n),
					c.apply(r, n.get());
					return this.pushStack(r)
				}
			});
			var ze = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
			Ie = function(e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = o),
				t.getComputedStyle(e)
			},
			Re = new RegExp(ie.join("|"), "i");
			function Je(e, t, n) {
				var r, o, a, i, s = e.style;
				return (n = n || Ie(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (i = k.style(e, t)), !M.pixelBoxStyles() && ze.test(i) && Re.test(t) && (r = s.width, o = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = r, s.minWidth = o, s.maxWidth = a)),
				void 0 !== i ? i + "": i
			}
			function qe(e, t) {
				return {
					get: function() {
						if (!e()) return (this.get = t).apply(this, arguments);
						delete this.get
					}
				}
			} !
			function() {
				function e() {
					if (l) {
						d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
						l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
						be.appendChild(d).appendChild(l);
						var e = o.getComputedStyle(l);
						n = "1%" !== e.top,
						u = 12 === t(e.marginLeft),
						l.style.right = "60%",
						i = 36 === t(e.right),
						r = 36 === t(e.width),
						l.style.position = "absolute",
						a = 36 === l.offsetWidth || "absolute",
						be.removeChild(d),
						l = null
					}
				}
				function t(e) {
					return Math.round(parseFloat(e))
				}
				var n, r, a, i, u, d = s.createElement("div"),
				l = s.createElement("div");
				l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", M.clearCloneStyle = "content-box" === l.style.backgroundClip, k.extend(M, {
					boxSizingReliable: function() {
						return e(),
						r
					},
					pixelBoxStyles: function() {
						return e(),
						i
					},
					pixelPosition: function() {
						return e(),
						n
					},
					reliableMarginLeft: function() {
						return e(),
						u
					},
					scrollboxSize: function() {
						return e(),
						a
					}
				}))
			} ();
			var Ue = /^(none|table(?!-c[ea]).+)/,
			Ve = /^--/,
			Be = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ge = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			$e = ["Webkit", "Moz", "ms"],
			Ke = s.createElement("div").style;
			function Ze(e) {
				var t = k.cssProps[e];
				return t || (t = k.cssProps[e] = function(e) {
					if (e in Ke) return e;
					for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in Ke) return e
				} (e) || e),
				t
			}
			function Xe(e, t, n) {
				var r = ae.exec(t);
				return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
			}
			function Qe(e, t, n, r, o, a) {
				var i = "width" === t ? 1 : 0,
				s = 0,
				u = 0;
				if (n === (r ? "border": "content")) return 0;
				for (; i < 4; i += 2)"margin" === n && (u += k.css(e, n + ie[i], !0, o)),
				r ? ("content" === n && (u -= k.css(e, "padding" + ie[i], !0, o)), "margin" !== n && (u -= k.css(e, "border" + ie[i] + "Width", !0, o))) : (u += k.css(e, "padding" + ie[i], !0, o), "padding" !== n ? u += k.css(e, "border" + ie[i] + "Width", !0, o) : s += k.css(e, "border" + ie[i] + "Width", !0, o));
				return ! r && a >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - u - s - .5))),
				u
			}
			function et(e, t, n) {
				var r = Ie(e),
				o = Je(e, t, r),
				a = "border-box" === k.css(e, "boxSizing", !1, r),
				i = a;
				if (ze.test(o)) {
					if (!n) return o;
					o = "auto"
				}
				return i = i && (M.boxSizingReliable() || o === e.style[t]),
				("auto" === o || !parseFloat(o) && "inline" === k.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], i = !0),
				(o = parseFloat(o) || 0) + Qe(e, t, n || (a ? "border": "content"), i, r, o) + "px"
			}
			function tt(e, t, n, r, o) {
				return new tt.prototype.init(e, t, n, r, o)
			}
			k.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var n = Je(e, "opacity");
								return "" === n ? "1": n
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {},
				style: function(e, t, n, o) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var a, i, s, u = K(t),
						d = Ve.test(t),
						l = e.style;
						if (d || (t = Ze(u)), s = k.cssHooks[t] || k.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(e, !1, o)) ? a: l[t];
						"string" === (i = void 0 === n ? "undefined": r(n)) && (a = ae.exec(n)) && a[1] && (n = de(e, t, a), i = "number"),
						null != n && n == n && ("number" === i && (n += a && a[3] || (k.cssNumber[u] ? "": "px")), M.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, o)) || (d ? l.setProperty(t, n) : l[t] = n))
					}
				},
				css: function(e, t, n, r) {
					var o, a, i, s = K(t);
					return Ve.test(t) || (t = Ze(s)),
					(i = k.cssHooks[t] || k.cssHooks[s]) && "get" in i && (o = i.get(e, !0, n)),
					void 0 === o && (o = Je(e, t, r)),
					"normal" === o && t in Ge && (o = Ge[t]),
					"" === n || n ? (a = parseFloat(o), !0 === n || isFinite(a) ? a || 0 : o) : o
				}
			}),
			k.each(["height", "width"],
			function(e, t) {
				k.cssHooks[t] = {
					get: function(e, n, r) {
						if (n) return ! Ue.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ue(e, Be,
						function() {
							return et(e, t, r)
						})
					},
					set: function(e, n, r) {
						var o, a = Ie(e),
						i = "border-box" === k.css(e, "boxSizing", !1, a),
						s = r && Qe(e, t, r, i, a);
						return i && M.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)),
						s && (o = ae.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = k.css(e, t)),
						Xe(0, n, s)
					}
				}
			}),
			k.cssHooks.marginLeft = qe(M.reliableMarginLeft,
			function(e, t) {
				if (t) return (parseFloat(Je(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
					marginLeft: 0
				},
				function() {
					return e.getBoundingClientRect().left
				})) + "px"
			}),
			k.each({
				margin: "",
				padding: "",
				border: "Width"
			},
			function(e, t) {
				k.cssHooks[e + t] = {
					expand: function(n) {
						for (var r = 0,
						o = {},
						a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ie[r] + t] = a[r] || a[r - 2] || a[0];
						return o
					}
				},
				"margin" !== e && (k.cssHooks[e + t].set = Xe)
			}),
			k.fn.extend({
				css: function(e, t) {
					return V(this,
					function(e, t, n) {
						var r, o, a = {},
						i = 0;
						if (Array.isArray(t)) {
							for (r = Ie(e), o = t.length; i < o; i++) a[t[i]] = k.css(e, t[i], !1, r);
							return a
						}
						return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
					},
					e, t, arguments.length > 1)
				}
			}),
			k.Tween = tt,
			tt.prototype = {
				constructor: tt,
				init: function(e, t, n, r, o, a) {
					this.elem = e,
					this.prop = n,
					this.easing = o || k.easing._default,
					this.options = t,
					this.start = this.now = this.cur(),
					this.end = r,
					this.unit = a || (k.cssNumber[n] ? "": "px")
				},
				cur: function() {
					var e = tt.propHooks[this.prop];
					return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
				},
				run: function(e) {
					var t, n = tt.propHooks[this.prop];
					return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
					this.now = (this.end - this.start) * t + this.start,
					this.options.step && this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : tt.propHooks._default.set(this),
					this
				}
			},
			tt.prototype.init.prototype = tt.prototype,
			tt.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t: 0
					},
					set: function(e) {
						k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now: k.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			},
			tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			},
			k.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return.5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			},
			k.fx = tt.prototype.init,
			k.fx.step = {};
			var nt, rt, ot = /^(?:toggle|show|hide)$/,
			at = /queueHooks$/;
			function it() {
				rt && (!1 === s.hidden && o.requestAnimationFrame ? o.requestAnimationFrame(it) : o.setTimeout(it, k.fx.interval), k.fx.tick())
			}
			function st() {
				return o.setTimeout(function() {
					nt = void 0
				}),
				nt = Date.now()
			}
			function ut(e, t) {
				var n, r = 0,
				o = {
					height: e
				};
				for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ie[r])] = o["padding" + n] = e;
				return t && (o.opacity = o.width = e),
				o
			}
			function dt(e, t, n) {
				for (var r, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), a = 0, i = o.length; a < i; a++) if (r = o[a].call(n, t, e)) return r
			}
			function lt(e, t, n) {
				var r, o, a = 0,
				i = lt.prefilters.length,
				s = k.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if (o) return ! 1;
					for (var t = nt || st(), n = Math.max(0, d.startTime + d.duration - t), r = 1 - (n / d.duration || 0), a = 0, i = d.tweens.length; a < i; a++) d.tweens[a].run(r);
					return s.notifyWith(e, [d, r, n]),
					r < 1 && i ? n: (i || s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d]), !1)
				},
				d = s.promise({
					elem: e,
					props: k.extend({},
					t),
					opts: k.extend(!0, {
						specialEasing: {},
						easing: k.easing._default
					},
					n),
					originalProperties: t,
					originalOptions: n,
					startTime: nt || st(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = k.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
						return d.tweens.push(r),
						r
					},
					stop: function(t) {
						var n = 0,
						r = t ? d.tweens.length: 0;
						if (o) return this;
						for (o = !0; n < r; n++) d.tweens[n].run(1);
						return t ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t])) : s.rejectWith(e, [d, t]),
						this
					}
				}),
				l = d.props;
				for (!
				function(e, t) {
					var n, r, o, a, i;
					for (n in e) if (o = t[r = K(n)], a = e[n], Array.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (i = k.cssHooks[r]) && "expand" in i) for (n in a = i.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = o);
					else t[r] = o
				} (l, d.opts.specialEasing); a < i; a++) if (r = lt.prefilters[a].call(d, e, l, d.opts)) return v(r.stop) && (k._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
				r;
				return k.map(l, dt, d),
				v(d.opts.start) && d.opts.start.call(e, d),
				d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always),
				k.fx.timer(k.extend(u, {
					elem: e,
					anim: d,
					queue: d.opts.queue
				})),
				d
			}
			k.Animation = k.extend(lt, {
				tweeners: {
					"*": [function(e, t) {
						var n = this.createTween(e, t);
						return de(n.elem, e, ae.exec(t), n),
						n
					}]
				},
				tweener: function(e, t) {
					v(e) ? (t = e, e = ["*"]) : e = e.match(F);
					for (var n, r = 0,
					o = e.length; r < o; r++) n = e[r],
					lt.tweeners[n] = lt.tweeners[n] || [],
					lt.tweeners[n].unshift(t)
				},
				prefilters: [function(e, t, n) {
					var r, o, a, i, s, u, d, l, c = "width" in t || "height" in t,
					m = this,
					_ = {},
					f = e.style,
					p = e.nodeType && se(e),
					y = Q.get(e, "fxshow");
					for (r in n.queue || (null == (i = k._queueHooks(e, "fx")).unqueued && (i.unqueued = 0, s = i.empty.fire, i.empty.fire = function() {
						i.unqueued || s()
					}), i.unqueued++, m.always(function() {
						m.always(function() {
							i.unqueued--,
							k.queue(e, "fx").length || i.empty.fire()
						})
					})), t) if (o = t[r], ot.test(o)) {
						if (delete t[r], a = a || "toggle" === o, o === (p ? "hide": "show")) {
							if ("show" !== o || !y || void 0 === y[r]) continue;
							p = !0
						}
						_[r] = y && y[r] || k.style(e, r)
					}
					if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(_)) for (r in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = y && y.display) && (d = Q.get(e, "display")), "none" === (l = k.css(e, "display")) && (d ? l = d: (me([e], !0), d = e.style.display || d, l = k.css(e, "display"), me([e]))), ("inline" === l || "inline-block" === l && null != d) && "none" === k.css(e, "float") && (u || (m.done(function() {
						f.display = d
					}), null == d && (l = f.display, d = "none" === l ? "": l)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", m.always(function() {
						f.overflow = n.overflow[0],
						f.overflowX = n.overflow[1],
						f.overflowY = n.overflow[2]
					})), u = !1, _) u || (y ? "hidden" in y && (p = y.hidden) : y = Q.access(e, "fxshow", {
						display: d
					}), a && (y.hidden = !p), p && me([e], !0), m.done(function() {
						for (r in p || me([e]), Q.remove(e, "fxshow"), _) k.style(e, r, _[r])
					})),
					u = dt(p ? y[r] : 0, r, m),
					r in y || (y[r] = u.start, p && (u.end = u.start, u.start = 0))
				}],
				prefilter: function(e, t) {
					t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
				}
			}),
			k.speed = function(e, t, n) {
				var o = e && "object" === (void 0 === e ? "undefined": r(e)) ? k.extend({},
				e) : {
					complete: n || !n && t || v(e) && e,
					duration: e,
					easing: n && t || t && !v(t) && t
				};
				return k.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in k.fx.speeds ? o.duration = k.fx.speeds[o.duration] : o.duration = k.fx.speeds._default),
				null != o.queue && !0 !== o.queue || (o.queue = "fx"),
				o.old = o.complete,
				o.complete = function() {
					v(o.old) && o.old.call(this),
					o.queue && k.dequeue(this, o.queue)
				},
				o
			},
			k.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(se).css("opacity", 0).show().end().animate({
						opacity: t
					},
					e, n, r)
				},
				animate: function(e, t, n, r) {
					var o = k.isEmptyObject(e),
					a = k.speed(t, n, r),
					i = function() {
						var t = lt(this, k.extend({},
						e), a); (o || Q.get(this, "finish")) && t.stop(!0)
					};
					return i.finish = i,
					o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
				},
				stop: function(e, t, n) {
					var r = function(e) {
						var t = e.stop;
						delete e.stop,
						t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0),
					t && !1 !== e && this.queue(e || "fx", []),
					this.each(function() {
						var t = !0,
						o = null != e && e + "queueHooks",
						a = k.timers,
						i = Q.get(this);
						if (o) i[o] && i[o].stop && r(i[o]);
						else for (o in i) i[o] && i[o].stop && at.test(o) && r(i[o]);
						for (o = a.length; o--;) a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n), t = !1, a.splice(o, 1)); ! t && n || k.dequeue(this, e)
					})
				},
				finish: function(e) {
					return ! 1 !== e && (e = e || "fx"),
					this.each(function() {
						var t, n = Q.get(this),
						r = n[e + "queue"],
						o = n[e + "queueHooks"],
						a = k.timers,
						i = r ? r.length: 0;
						for (n.finish = !0, k.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
						for (t = 0; t < i; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}),
			k.each(["toggle", "show", "hide"],
			function(e, t) {
				var n = k.fn[t];
				k.fn[t] = function(e, r, o) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, o)
				}
			}),
			k.each({
				slideDown: ut("show"),
				slideUp: ut("hide"),
				slideToggle: ut("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			},
			function(e, t) {
				k.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			}),
			k.timers = [],
			k.fx.tick = function() {
				var e, t = 0,
				n = k.timers;
				for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || k.fx.stop(),
				nt = void 0
			},
			k.fx.timer = function(e) {
				k.timers.push(e),
				k.fx.start()
			},
			k.fx.interval = 13,
			k.fx.start = function() {
				rt || (rt = !0, it())
			},
			k.fx.stop = function() {
				rt = null
			},
			k.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			},
			k.fn.delay = function(e, t) {
				return e = k.fx && k.fx.speeds[e] || e,
				t = t || "fx",
				this.queue(t,
				function(t, n) {
					var r = o.setTimeout(t, e);
					n.stop = function() {
						o.clearTimeout(r)
					}
				})
			},
			function() {
				var e = s.createElement("input"),
				t = s.createElement("select").appendChild(s.createElement("option"));
				e.type = "checkbox",
				M.checkOn = "" !== e.value,
				M.optSelected = t.selected,
				(e = s.createElement("input")).value = "t",
				e.type = "radio",
				M.radioValue = "t" === e.value
			} ();
			var ct, mt = k.expr.attrHandle;
			k.fn.extend({
				attr: function(e, t) {
					return V(this, k.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						k.removeAttr(this, e)
					})
				}
			}),
			k.extend({
				attr: function(e, t, n) {
					var r, o, a = e.nodeType;
					if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === a && k.isXMLDoc(e) || (o = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ct: void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r: null == (r = k.find.attr(e, t)) ? void 0 : r)
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (!M.radioValue && "radio" === t && H(e, "input")) {
								var n = e.value;
								return e.setAttribute("type", t),
								n && (e.value = n),
								t
							}
						}
					}
				},
				removeAttr: function(e, t) {
					var n, r = 0,
					o = t && t.match(F);
					if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n)
				}
			}),
			ct = {
				set: function(e, t, n) {
					return ! 1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
					n
				}
			},
			k.each(k.expr.match.bool.source.match(/\w+/g),
			function(e, t) {
				var n = mt[t] || k.find.attr;
				mt[t] = function(e, t, r) {
					var o, a, i = t.toLowerCase();
					return r || (a = mt[i], mt[i] = o, o = null != n(e, t, r) ? i: null, mt[i] = a),
					o
				}
			});
			var _t = /^(?:input|select|textarea|button)$/i,
			ft = /^(?:a|area)$/i;
			function pt(e) {
				return (e.match(F) || []).join(" ")
			}
			function yt(e) {
				return e.getAttribute && e.getAttribute("class") || ""
			}
			function ht(e) {
				return Array.isArray(e) ? e: "string" == typeof e && e.match(F) || []
			}
			k.fn.extend({
				prop: function(e, t) {
					return V(this, k.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return this.each(function() {
						delete this[k.propFix[e] || e]
					})
				}
			}),
			k.extend({
				prop: function(e, t, n) {
					var r, o, a = e.nodeType;
					if (3 !== a && 8 !== a && 2 !== a) return 1 === a && k.isXMLDoc(e) || (t = k.propFix[t] || t, o = k.propHooks[t]),
					void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r: e[t] = n: o && "get" in o && null !== (r = o.get(e, t)) ? r: e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = k.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : _t.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}),
			M.optSelected || (k.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex,
					null
				},
				set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				}
			}),
			k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
			function() {
				k.propFix[this.toLowerCase()] = this
			}),
			k.fn.extend({
				addClass: function(e) {
					var t, n, r, o, a, i, s, u = 0;
					if (v(e)) return this.each(function(t) {
						k(this).addClass(e.call(this, t, yt(this)))
					});
					if ((t = ht(e)).length) for (; n = this[u++];) if (o = yt(n), r = 1 === n.nodeType && " " + pt(o) + " ") {
						for (i = 0; a = t[i++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
						o !== (s = pt(r)) && n.setAttribute("class", s)
					}
					return this
				},
				removeClass: function(e) {
					var t, n, r, o, a, i, s, u = 0;
					if (v(e)) return this.each(function(t) {
						k(this).removeClass(e.call(this, t, yt(this)))
					});
					if (!arguments.length) return this.attr("class", "");
					if ((t = ht(e)).length) for (; n = this[u++];) if (o = yt(n), r = 1 === n.nodeType && " " + pt(o) + " ") {
						for (i = 0; a = t[i++];) for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
						o !== (s = pt(r)) && n.setAttribute("class", s)
					}
					return this
				},
				toggleClass: function(e, t) {
					var n = void 0 === e ? "undefined": r(e),
					o = "string" === n || Array.isArray(e);
					return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
						k(this).toggleClass(e.call(this, n, yt(this), t), t)
					}) : this.each(function() {
						var t, r, a, i;
						if (o) for (r = 0, a = k(this), i = ht(e); t = i[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
						else void 0 !== e && "boolean" !== n || ((t = yt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "": Q.get(this, "__className__") || ""))
					})
				},
				hasClass: function(e) {
					var t, n, r = 0;
					for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + pt(yt(n)) + " ").indexOf(t) > -1) return ! 0;
					return ! 1
				}
			});
			var Mt = /\r/g;
			k.fn.extend({
				val: function(e) {
					var t, n, r, o = this[0];
					return arguments.length ? (r = v(e), this.each(function(n) {
						var o;
						1 === this.nodeType && (null == (o = r ? e.call(this, n, k(this).val()) : e) ? o = "": "number" == typeof o ? o += "": Array.isArray(o) && (o = k.map(o,
						function(e) {
							return null == e ? "": e + ""
						})), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
					})) : o ? (t = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n: "string" == typeof(n = o.value) ? n.replace(Mt, "") : null == n ? "": n: void 0
				}
			}),
			k.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = k.find.attr(e, "value");
							return null != t ? t: pt(k.text(e))
						}
					},
					select: {
						get: function(e) {
							var t, n, r, o = e.options,
							a = e.selectedIndex,
							i = "select-one" === e.type,
							s = i ? null: [],
							u = i ? a + 1 : o.length;
							for (r = a < 0 ? u: i ? a: 0; r < u; r++) if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !H(n.parentNode, "optgroup"))) {
								if (t = k(n).val(), i) return t;
								s.push(t)
							}
							return s
						},
						set: function(e, t) {
							for (var n, r, o = e.options,
							a = k.makeArray(t), i = o.length; i--;)((r = o[i]).selected = k.inArray(k.valHooks.option.get(r), a) > -1) && (n = !0);
							return n || (e.selectedIndex = -1),
							a
						}
					}
				}
			}),
			k.each(["radio", "checkbox"],
			function() {
				k.valHooks[this] = {
					set: function(e, t) {
						if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
					}
				},
				M.checkOn || (k.valHooks[this].get = function(e) {
					return null === e.getAttribute("value") ? "on": e.value
				})
			}),
			M.focusin = "onfocusin" in o;
			var vt = /^(?:focusinfocus|focusoutblur)$/,
			Lt = function(e) {
				e.stopPropagation()
			};
			k.extend(k.event, {
				trigger: function(e, t, n, a) {
					var i, u, d, l, c, m, _, f, y = [n || s],
					h = p.call(e, "type") ? e.type: e,
					M = p.call(e, "namespace") ? e.namespace.split(".") : [];
					if (u = f = d = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + k.event.triggered) && (h.indexOf(".") > -1 && (h = (M = h.split(".")).shift(), M.sort()), c = h.indexOf(":") < 0 && "on" + h, (e = e[k.expando] ? e: new k.Event(h, "object" === (void 0 === e ? "undefined": r(e)) && e)).isTrigger = a ? 2 : 3, e.namespace = M.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), _ = k.event.special[h] || {},
					a || !_.trigger || !1 !== _.trigger.apply(n, t))) {
						if (!a && !_.noBubble && !L(n)) {
							for (l = _.delegateType || h, vt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) y.push(u),
							d = u;
							d === (n.ownerDocument || s) && y.push(d.defaultView || d.parentWindow || o)
						}
						for (i = 0; (u = y[i++]) && !e.isPropagationStopped();) f = u,
						e.type = i > 1 ? l: _.bindType || h,
						(m = (Q.get(u, "events") || {})[e.type] && Q.get(u, "handle")) && m.apply(u, t),
						(m = c && u[c]) && m.apply && Z(u) && (e.result = m.apply(u, t), !1 === e.result && e.preventDefault());
						return e.type = h,
						a || e.isDefaultPrevented() || _._default && !1 !== _._default.apply(y.pop(), t) || !Z(n) || c && v(n[h]) && !L(n) && ((d = n[c]) && (n[c] = null), k.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, Lt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, Lt), k.event.triggered = void 0, d && (n[c] = d)),
						e.result
					}
				},
				simulate: function(e, t, n) {
					var r = k.extend(new k.Event, n, {
						type: e,
						isSimulated: !0
					});
					k.event.trigger(r, null, t)
				}
			}),
			k.fn.extend({
				trigger: function(e, t) {
					return this.each(function() {
						k.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var n = this[0];
					if (n) return k.event.trigger(e, t, n, !0)
				}
			}),
			M.focusin || k.each({
				focus: "focusin",
				blur: "focusout"
			},
			function(e, t) {
				var n = function(e) {
					k.event.simulate(t, e.target, k.event.fix(e))
				};
				k.event.special[t] = {
					setup: function() {
						var r = this.ownerDocument || this,
						o = Q.access(r, t);
						o || r.addEventListener(e, n, !0),
						Q.access(r, t, (o || 0) + 1)
					},
					teardown: function() {
						var r = this.ownerDocument || this,
						o = Q.access(r, t) - 1;
						o ? Q.access(r, t, o) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
					}
				}
			});
			var bt = o.location,
			gt = Date.now(),
			Yt = /\?/;
			k.parseXML = function(e) {
				var t;
				if (!e || "string" != typeof e) return null;
				try {
					t = (new o.DOMParser).parseFromString(e, "text/xml")
				} catch(e) {
					t = void 0
				}
				return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
				t
			};
			var kt = /\[\]$/,
			St = /\r?\n/g,
			Dt = /^(?:submit|button|image|reset|file)$/i,
			wt = /^(?:input|select|textarea|keygen)/i;
			function Tt(e, t, n, o) {
				var a;
				if (Array.isArray(t)) k.each(t,
				function(t, a) {
					n || kt.test(e) ? o(e, a) : Tt(e + "[" + ("object" === (void 0 === a ? "undefined": r(a)) && null != a ? t: "") + "]", a, n, o)
				});
				else if (n || "object" !== Y(t)) o(e, t);
				else for (a in t) Tt(e + "[" + a + "]", t[a], n, o)
			}
			k.param = function(e, t) {
				var n, r = [],
				o = function(e, t) {
					var n = v(t) ? t() : t;
					r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "": n)
				};
				if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e,
				function() {
					o(this.name, this.value)
				});
				else for (n in e) Tt(n, e[n], t, o);
				return r.join("&")
			},
			k.fn.extend({
				serialize: function() {
					return k.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = k.prop(this, "elements");
						return e ? k.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !k(this).is(":disabled") && wt.test(this.nodeName) && !Dt.test(e) && (this.checked || !_e.test(e))
					}).map(function(e, t) {
						var n = k(this).val();
						return null == n ? null: Array.isArray(n) ? k.map(n,
						function(e) {
							return {
								name: t.name,
								value: e.replace(St, "\r\n")
							}
						}) : {
							name: t.name,
							value: n.replace(St, "\r\n")
						}
					}).get()
				}
			});
			var xt = /%20/g,
			jt = /#.*$/,
			Ht = /([?&])_=[^&]*/,
			Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Et = /^(?:GET|HEAD)$/,
			At = /^\/\//,
			Pt = {},
			Ct = {},
			Wt = "*/".concat("*"),
			Nt = s.createElement("a");
			function Ft(e) {
				return function(t, n) {
					"string" != typeof t && (n = t, t = "*");
					var r, o = 0,
					a = t.toLowerCase().match(F) || [];
					if (v(n)) for (; r = a[o++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
				}
			}
			function zt(e, t, n, r) {
				var o = {},
				a = e === Ct;
				function i(s) {
					var u;
					return o[s] = !0,
					k.each(e[s] || [],
					function(e, s) {
						var d = s(t, n, r);
						return "string" != typeof d || a || o[d] ? a ? !(u = d) : void 0 : (t.dataTypes.unshift(d), i(d), !1)
					}),
					u
				}
				return i(t.dataTypes[0]) || !o["*"] && i("*")
			}
			function It(e, t) {
				var n, r, o = k.ajaxSettings.flatOptions || {};
				for (n in t) void 0 !== t[n] && ((o[n] ? e: r || (r = {}))[n] = t[n]);
				return r && k.extend(!0, e, r),
				e
			}
			Nt.href = bt.href,
			k.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: bt.href,
					type: "GET",
					isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Wt,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": JSON.parse,
						"text xml": k.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? It(It(e, k.ajaxSettings), t) : It(k.ajaxSettings, e)
				},
				ajaxPrefilter: Ft(Pt),
				ajaxTransport: Ft(Ct),
				ajax: function(e, t) {
					"object" === (void 0 === e ? "undefined": r(e)) && (t = e, e = void 0),
					t = t || {};
					var n, a, i, u, d, l, c, m, _, f, p = k.ajaxSetup({},
					t),
					y = p.context || p,
					h = p.context && (y.nodeType || y.jquery) ? k(y) : k.event,
					M = k.Deferred(),
					v = k.Callbacks("once memory"),
					L = p.statusCode || {},
					b = {},
					g = {},
					Y = "canceled",
					S = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (c) {
								if (!u) for (u = {}; t = Ot.exec(i);) u[t[1].toLowerCase()] = t[2];
								t = u[e.toLowerCase()]
							}
							return null == t ? null: t
						},
						getAllResponseHeaders: function() {
							return c ? i: null
						},
						setRequestHeader: function(e, t) {
							return null == c && (e = g[e.toLowerCase()] = g[e.toLowerCase()] || e, b[e] = t),
							this
						},
						overrideMimeType: function(e) {
							return null == c && (p.mimeType = e),
							this
						},
						statusCode: function(e) {
							var t;
							if (e) if (c) S.always(e[S.status]);
							else for (t in e) L[t] = [L[t], e[t]];
							return this
						},
						abort: function(e) {
							var t = e || Y;
							return n && n.abort(t),
							D(0, t),
							this
						}
					};
					if (M.promise(S), p.url = ((e || p.url || bt.href) + "").replace(At, bt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
						l = s.createElement("a");
						try {
							l.href = p.url,
							l.href = l.href,
							p.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host
						} catch(e) {
							p.crossDomain = !0
						}
					}
					if (p.data && p.processData && "string" != typeof p.data && (p.data = k.param(p.data, p.traditional)), zt(Pt, p, t, S), c) return S;
					for (_ in (m = k.event && p.global) && 0 == k.active++&&k.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Et.test(p.type), a = p.url.replace(jt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(xt, "+")) : (f = p.url.slice(a.length), p.data && (p.processData || "string" == typeof p.data) && (a += (Yt.test(a) ? "&": "?") + p.data, delete p.data), !1 === p.cache && (a = a.replace(Ht, "$1"), f = (Yt.test(a) ? "&": "?") + "_=" + gt+++f), p.url = a + f), p.ifModified && (k.lastModified[a] && S.setRequestHeader("If-Modified-Since", k.lastModified[a]), k.etag[a] && S.setRequestHeader("If-None-Match", k.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01": "") : p.accepts["*"]), p.headers) S.setRequestHeader(_, p.headers[_]);
					if (p.beforeSend && (!1 === p.beforeSend.call(y, S, p) || c)) return S.abort();
					if (Y = "abort", v.add(p.complete), S.done(p.success), S.fail(p.error), n = zt(Ct, p, t, S)) {
						if (S.readyState = 1, m && h.trigger("ajaxSend", [S, p]), c) return S;
						p.async && p.timeout > 0 && (d = o.setTimeout(function() {
							S.abort("timeout")
						},
						p.timeout));
						try {
							c = !1,
							n.send(b, D)
						} catch(e) {
							if (c) throw e;
							D( - 1, e)
						}
					} else D( - 1, "No Transport");
					function D(e, t, r, s) {
						var u, l, _, f, b, g = t;
						c || (c = !0, d && o.clearTimeout(d), n = void 0, i = s || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (f = function(e, t, n) {
							for (var r, o, a, i, s = e.contents,
							u = e.dataTypes;
							"*" === u[0];) u.shift(),
							void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
							if (r) for (o in s) if (s[o] && s[o].test(r)) {
								u.unshift(o);
								break
							}
							if (u[0] in n) a = u[0];
							else {
								for (o in n) {
									if (!u[0] || e.converters[o + " " + u[0]]) {
										a = o;
										break
									}
									i || (i = o)
								}
								a = a || i
							}
							if (a) return a !== u[0] && u.unshift(a),
							n[a]
						} (p, S, r)), f = function(e, t, n, r) {
							var o, a, i, s, u, d = {},
							l = e.dataTypes.slice();
							if (l[1]) for (i in e.converters) d[i.toLowerCase()] = e.converters[i];
							for (a = l.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = a, a = l.shift()) if ("*" === a) a = u;
							else if ("*" !== u && u !== a) {
								if (! (i = d[u + " " + a] || d["* " + a])) for (o in d) if ((s = o.split(" "))[1] === a && (i = d[u + " " + s[0]] || d["* " + s[0]])) { ! 0 === i ? i = d[o] : !0 !== d[o] && (a = s[0], l.unshift(s[1]));
									break
								}
								if (!0 !== i) if (i && e.throws) t = i(t);
								else try {
									t = i(t)
								} catch(e) {
									return {
										state: "parsererror",
										error: i ? e: "No conversion from " + u + " to " + a
									}
								}
							}
							return {
								state: "success",
								data: t
							}
						} (p, f, S, u), u ? (p.ifModified && ((b = S.getResponseHeader("Last-Modified")) && (k.lastModified[a] = b), (b = S.getResponseHeader("etag")) && (k.etag[a] = b)), 204 === e || "HEAD" === p.type ? g = "nocontent": 304 === e ? g = "notmodified": (g = f.state, l = f.data, u = !(_ = f.error))) : (_ = g, !e && g || (g = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || g) + "", u ? M.resolveWith(y, [l, g, S]) : M.rejectWith(y, [S, g, _]), S.statusCode(L), L = void 0, m && h.trigger(u ? "ajaxSuccess": "ajaxError", [S, p, u ? l: _]), v.fireWith(y, [S, g]), m && (h.trigger("ajaxComplete", [S, p]), --k.active || k.event.trigger("ajaxStop")))
					}
					return S
				},
				getJSON: function(e, t, n) {
					return k.get(e, t, n, "json")
				},
				getScript: function(e, t) {
					return k.get(e, void 0, t, "script")
				}
			}),
			k.each(["get", "post"],
			function(e, t) {
				k[t] = function(e, n, r, o) {
					return v(n) && (o = o || r, r = n, n = void 0),
					k.ajax(k.extend({
						url: e,
						type: t,
						dataType: o,
						data: n,
						success: r
					},
					k.isPlainObject(e) && e))
				}
			}),
			k._evalUrl = function(e) {
				return k.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					throws: !0
				})
			},
			k.fn.extend({
				wrapAll: function(e) {
					var t;
					return this[0] && (v(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e
					}).append(this)),
					this
				},
				wrapInner: function(e) {
					return v(e) ? this.each(function(t) {
						k(this).wrapInner(e.call(this, t))
					}) : this.each(function() {
						var t = k(this),
						n = t.contents();
						n.length ? n.wrapAll(e) : t.append(e)
					})
				},
				wrap: function(e) {
					var t = v(e);
					return this.each(function(n) {
						k(this).wrapAll(t ? e.call(this, n) : e)
					})
				},
				unwrap: function(e) {
					return this.parent(e).not("body").each(function() {
						k(this).replaceWith(this.childNodes)
					}),
					this
				}
			}),
			k.expr.pseudos.hidden = function(e) {
				return ! k.expr.pseudos.visible(e)
			},
			k.expr.pseudos.visible = function(e) {
				return !! (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
			},
			k.ajaxSettings.xhr = function() {
				try {
					return new o.XMLHttpRequest
				} catch(e) {}
			};
			var Rt = {
				0 : 200,
				1223 : 204
			},
			Jt = k.ajaxSettings.xhr();
			M.cors = !!Jt && "withCredentials" in Jt,
			M.ajax = Jt = !!Jt,
			k.ajaxTransport(function(e) {
				var t, n;
				if (M.cors || Jt && !e.crossDomain) return {
					send: function(r, a) {
						var i, s = e.xhr();
						if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
						for (i in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(i, r[i]);
						t = function(e) {
							return function() {
								t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
									binary: s.response
								}: {
									text: s.responseText
								},
								s.getAllResponseHeaders()))
							}
						},
						s.onload = t(),
						n = s.onerror = s.ontimeout = t("error"),
						void 0 !== s.onabort ? s.onabort = n: s.onreadystatechange = function() {
							4 === s.readyState && o.setTimeout(function() {
								t && n()
							})
						},
						t = t("abort");
						try {
							s.send(e.hasContent && e.data || null)
						} catch(e) {
							if (t) throw e
						}
					},
					abort: function() {
						t && t()
					}
				}
			}),
			k.ajaxPrefilter(function(e) {
				e.crossDomain && (e.contents.script = !1)
			}),
			k.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function(e) {
						return k.globalEval(e),
						e
					}
				}
			}),
			k.ajaxPrefilter("script",
			function(e) {
				void 0 === e.cache && (e.cache = !1),
				e.crossDomain && (e.type = "GET")
			}),
			k.ajaxTransport("script",
			function(e) {
				var t, n;
				if (e.crossDomain) return {
					send: function(r, o) {
						t = k("<script>").prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(),
							n = null,
							e && o("error" === e.type ? 404 : 200, e.type)
						}),
						s.head.appendChild(t[0])
					},
					abort: function() {
						n && n()
					}
				}
			});
			var qt = [],
			Ut = /(=)\?(?=&|$)|\?\?/;
			k.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = qt.pop() || k.expando + "_" + gt++;
					return this[e] = !0,
					e
				}
			}),
			k.ajaxPrefilter("json jsonp",
			function(e, t, n) {
				var r, a, i, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
				if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
				s ? e[s] = e[s].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Yt.test(e.url) ? "&": "?") + e.jsonp + "=" + r),
				e.converters["script json"] = function() {
					return i || k.error(r + " was not called"),
					i[0]
				},
				e.dataTypes[0] = "json",
				a = o[r],
				o[r] = function() {
					i = arguments
				},
				n.always(function() {
					void 0 === a ? k(o).removeProp(r) : o[r] = a,
					e[r] && (e.jsonpCallback = t.jsonpCallback, qt.push(r)),
					i && v(a) && a(i[0]),
					i = a = void 0
				}),
				"script"
			}),
			M.createHTMLDocument = function() {
				var e = s.implementation.createHTMLDocument("").body;
				return e.innerHTML = "<form></form><form></form>",
				2 === e.childNodes.length
			} (),
			k.parseHTML = function(e, t, n) {
				return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (M.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), o = O.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = Le([e], t, a), a && a.length && k(a).remove(), k.merge([], o.childNodes)));
				var r, o, a
			}, k.fn.load = function(e, t, n) {
				var o, a, i, s = this,
				u = e.indexOf(" ");
				return u > -1 && (o = pt(e.slice(u)), e = e.slice(0, u)),
				v(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined": r(t)) && (a = "POST"),
				s.length > 0 && k.ajax({
					url: e,
					type: a || "GET",
					dataType: "html",
					data: t
				}).done(function(e) {
					i = arguments,
					s.html(o ? k("<div>").append(k.parseHTML(e)).find(o) : e)
				}).always(n &&
				function(e, t) {
					s.each(function() {
						n.apply(this, i || [e.responseText, t, e])
					})
				}),
				this
			},
			k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
			function(e, t) {
				k.fn[t] = function(e) {
					return this.on(t, e)
				}
			}),
			k.expr.pseudos.animated = function(e) {
				return k.grep(k.timers,
				function(t) {
					return e === t.elem
				}).length
			},
			k.offset = {
				setOffset: function(e, t, n) {
					var r, o, a, i, s, u, d = k.css(e, "position"),
					l = k(e),
					c = {};
					"static" === d && (e.style.position = "relative"),
					s = l.offset(),
					a = k.css(e, "top"),
					u = k.css(e, "left"),
					("absolute" === d || "fixed" === d) && (a + u).indexOf("auto") > -1 ? (i = (r = l.position()).top, o = r.left) : (i = parseFloat(a) || 0, o = parseFloat(u) || 0),
					v(t) && (t = t.call(e, n, k.extend({},
					s))),
					null != t.top && (c.top = t.top - s.top + i),
					null != t.left && (c.left = t.left - s.left + o),
					"using" in t ? t.using.call(e, c) : l.css(c)
				}
			},
			k.fn.extend({
				offset: function(e) {
					if (arguments.length) return void 0 === e ? this: this.each(function(t) {
						k.offset.setOffset(this, e, t)
					});
					var t, n, r = this[0];
					return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
						top: t.top + n.pageYOffset,
						left: t.left + n.pageXOffset
					}) : {
						top: 0,
						left: 0
					}: void 0
				},
				position: function() {
					if (this[0]) {
						var e, t, n, r = this[0],
						o = {
							top: 0,
							left: 0
						};
						if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
						else {
							for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
							e && e !== r && 1 === e.nodeType && ((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0), o.left += k.css(e, "borderLeftWidth", !0))
						}
						return {
							top: t.top - o.top - k.css(r, "marginTop", !0),
							left: t.left - o.left - k.css(r, "marginLeft", !0)
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
						return e || be
					})
				}
			}),
			k.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			},
			function(e, t) {
				var n = "pageYOffset" === t;
				k.fn[e] = function(r) {
					return V(this,
					function(e, r, o) {
						var a;
						if (L(e) ? a = e: 9 === e.nodeType && (a = e.defaultView), void 0 === o) return a ? a[t] : e[r];
						a ? a.scrollTo(n ? a.pageXOffset: o, n ? o: a.pageYOffset) : e[r] = o
					},
					e, r, arguments.length)
				}
			}),
			k.each(["top", "left"],
			function(e, t) {
				k.cssHooks[t] = qe(M.pixelPosition,
				function(e, n) {
					if (n) return n = Je(e, t),
					ze.test(n) ? k(e).position()[t] + "px": n
				})
			}),
			k.each({
				Height: "height",
				Width: "width"
			},
			function(e, t) {
				k.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				},
				function(n, r) {
					k.fn[r] = function(o, a) {
						var i = arguments.length && (n || "boolean" != typeof o),
						s = n || (!0 === o || !0 === a ? "margin": "border");
						return V(this,
						function(t, n, o) {
							var a;
							return L(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === o ? k.css(t, n, s) : k.style(t, n, o, s)
						},
						t, i ? o: void 0, i)
					}
				})
			}),
			k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
			function(e, t) {
				k.fn[t] = function(e, n) {
					return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
				}
			}),
			k.fn.extend({
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			}),
			k.fn.extend({
				bind: function(e, t, n) {
					return this.on(e, null, t, n)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, n, r) {
					return this.on(t, e, n, r)
				},
				undelegate: function(e, t, n) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
				}
			}),
			k.proxy = function(e, t) {
				var n, r, o;
				if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = d.call(arguments, 2),
				(o = function() {
					return e.apply(t || this, r.concat(d.call(arguments)))
				}).guid = e.guid = e.guid || k.guid++,
				o
			},
			k.holdReady = function(e) {
				e ? k.readyWait++:k.ready(!0)
			},
			k.isArray = Array.isArray,
			k.parseJSON = JSON.parse,
			k.nodeName = H,
			k.isFunction = v,
			k.isWindow = L,
			k.camelCase = K,
			k.type = Y,
			k.now = Date.now,
			k.isNumeric = function(e) {
				var t = k.type(e);
				return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
			},
			void 0 === (n = function() {
				return k
			}.apply(t, [])) || (e.exports = n);
			var Vt = o.jQuery,
			Bt = o.$;
			return k.noConflict = function(e) {
				return o.$ === k && (o.$ = Bt),
				e && o.jQuery === k && (o.jQuery = Vt),
				k
			},
			a || (o.jQuery = o.$ = k),
			k
		})
	}).call(this, n(2)(e))
}]);
//# sourceMappingURL=giteement.browser.js.map
