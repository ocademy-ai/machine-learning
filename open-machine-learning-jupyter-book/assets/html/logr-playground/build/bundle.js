var app = function () {
    "use strict";
    function t() { }
    const e = t => t;
    function r(t, e) {
        for (const r in e)
            t[r] = e[r];
        return t
    }
    function n(t) {
        return t()
    }
    function i() {
        return Object.create(null)
    }
    function o(t) {
        t.forEach(n)
    }
    function a(t) {
        return "function" == typeof t
    }
    function s(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function l(e, r, n) {
        e.$$.on_destroy.push(function (e, ...r) {
            if (null == e)
                return t;
            const n = e.subscribe(...r);
            return n.unsubscribe ? () => n.unsubscribe() : n
        }(r, n))
    }
    function h(t) {
        return null == t ? "" : t
    }
    function c(t, e, r) {
        return t.set(r),
            e
    }
    const u = "undefined" != typeof window;
    let m = u ? () => window.performance.now() : () => Date.now()
        , p = u ? t => requestAnimationFrame(t) : t;
    const d = new Set;
    function f(t) {
        d.forEach((e => {
            e.c(t) || (d.delete(e),
                e.f())
        }
        )),
            0 !== d.size && p(f)
    }
    function g(t, e) {
        t.appendChild(e)
    }
    function b(t, e, r) {
        t.insertBefore(e, r || null)
    }
    function y(t) {
        t.parentNode.removeChild(t)
    }
    function v(t, e) {
        for (let r = 0; r < t.length; r += 1)
            t[r] && t[r].d(e)
    }
    function x(t) {
        return document.createElement(t)
    }
    function w(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function k(t) {
        return document.createTextNode(t)
    }
    function M() {
        return k(" ")
    }
    function S() {
        return k("")
    }
    function L(t, e, r, n) {
        return t.addEventListener(e, r, n),
            () => t.removeEventListener(e, r, n)
    }
    function T(t, e, r) {
        null == r ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r)
    }
    function z(t) {
        return "" === t ? null : +t
    }
    function A(t, e) {
        e = "" + e,
            t.wholeText !== e && (t.data = e)
    }
    function _(t, e) {
        t.value = null == e ? "" : e
    }
    function P(t, e, r, n) {
        null === r ? t.style.removeProperty(e) : t.style.setProperty(e, r, n ? "important" : "")
    }
    function C(t, e) {
        for (let r = 0; r < t.options.length; r += 1) {
            const n = t.options[r];
            if (n.__value === e)
                return void (n.selected = !0)
        }
        t.selectedIndex = -1
    }
    let N, $;
    function B() {
        if (void 0 === N) {
            N = !1;
            try {
                "undefined" != typeof window && window.parent && window.parent.document
            } catch (t) {
                N = !0
            }
        }
        return N
    }
    function q(t, e) {
        "static" === getComputedStyle(t).position && (t.style.position = "relative");
        const r = x("iframe");
        r.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),
            r.setAttribute("aria-hidden", "true"),
            r.tabIndex = -1;
        const n = B();
        let i;
        return n ? (r.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",
            i = L(window, "message", (t => {
                t.source === r.contentWindow && e()
            }
            ))) : (r.src = "about:blank",
                r.onload = () => {
                    i = L(r.contentWindow, "resize", e)
                }
        ),
            g(t, r),
            () => {
                (n || i && r.contentWindow) && i(),
                    y(r)
            }
    }
    class E {
        constructor(t = !1) {
            this.is_svg = !1,
                this.is_svg = t,
                this.e = this.n = null
        }
        c(t) {
            this.h(t)
        }
        m(t, e, r = null) {
            this.e || (this.is_svg ? this.e = w(e.nodeName) : this.e = x(e.nodeName),
                this.t = e,
                this.c(t)),
                this.i(r)
        }
        h(t) {
            this.e.innerHTML = t,
                this.n = Array.from(this.e.childNodes)
        }
        i(t) {
            for (let e = 0; e < this.n.length; e += 1)
                b(this.t, this.n[e], t)
        }
        p(t) {
            this.d(),
                this.h(t),
                this.i(this.a)
        }
        d() {
            this.n.forEach(y)
        }
    }
    function I(t) {
        $ = t
    }
    function R(t) {
        (function () {
            if (!$)
                throw new Error("Function called outside component initialization");
            return $
        }
        )().$$.on_mount.push(t)
    }
    const O = []
        , H = []
        , D = []
        , W = []
        , F = Promise.resolve();
    let V = !1;
    function U(t) {
        D.push(t)
    }
    const G = new Set;
    let X = 0;
    function Y() {
        const t = $;
        do {
            for (; X < O.length;) {
                const t = O[X];
                X++,
                    I(t),
                    j(t.$$)
            }
            for (I(null),
                O.length = 0,
                X = 0; H.length;)
                H.pop()();
            for (let t = 0; t < D.length; t += 1) {
                const e = D[t];
                G.has(e) || (G.add(e),
                    e())
            }
            D.length = 0
        } while (O.length);
        for (; W.length;)
            W.pop()();
        V = !1,
            G.clear(),
            I(t)
    }
    function j(t) {
        if (null !== t.fragment) {
            t.update(),
                o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1],
                t.fragment && t.fragment.p(t.ctx, e),
                t.after_update.forEach(U)
        }
    }
    const Z = new Set;
    let K;
    function J() {
        K = {
            r: 0,
            c: [],
            p: K
        }
    }
    function Q() {
        K.r || o(K.c),
            K = K.p
    }
    function tt(t, e) {
        t && t.i && (Z.delete(t),
            t.i(e))
    }
    function et(t, e, r, n) {
        if (t && t.o) {
            if (Z.has(t))
                return;
            Z.add(t),
                K.c.push((() => {
                    Z.delete(t),
                        n && (r && t.d(1),
                            n())
                }
                )),
                t.o(e)
        }
    }
    const rt = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
    function nt(t) {
        t && t.c()
    }
    function it(t, e, r, i) {
        const { fragment: s, on_mount: l, on_destroy: h, after_update: c } = t.$$;
        s && s.m(e, r),
            i || U((() => {
                const e = l.map(n).filter(a);
                h ? h.push(...e) : o(e),
                    t.$$.on_mount = []
            }
            )),
            c.forEach(U)
    }
    function ot(t, e) {
        const r = t.$$;
        null !== r.fragment && (o(r.on_destroy),
            r.fragment && r.fragment.d(e),
            r.on_destroy = r.fragment = null,
            r.ctx = [])
    }
    function at(t, e) {
        -1 === t.$$.dirty[0] && (O.push(t),
            V || (V = !0,
                F.then(Y)),
            t.$$.dirty.fill(0)),
            t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }
    function st(e, r, n, a, s, l, h, c = [-1]) {
        const u = $;
        I(e);
        const m = e.$$ = {
            fragment: null,
            ctx: null,
            props: l,
            update: t,
            not_equal: s,
            bound: i(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(r.context || (u ? u.$$.context : [])),
            callbacks: i(),
            dirty: c,
            skip_bound: !1,
            root: r.target || u.$$.root
        };
        h && h(m.root);
        let p = !1;
        if (m.ctx = n ? n(e, r.props || {}, ((t, r, ...n) => {
            const i = n.length ? n[0] : r;
            return m.ctx && s(m.ctx[t], m.ctx[t] = i) && (!m.skip_bound && m.bound[t] && m.bound[t](i),
                p && at(e, t)),
                r
        }
        )) : [],
            m.update(),
            p = !0,
            o(m.before_update),
            m.fragment = !!a && a(m.ctx),
            r.target) {
            if (r.hydrate) {
                const t = function (t) {
                    return Array.from(t.childNodes)
                }(r.target);
                m.fragment && m.fragment.l(t),
                    t.forEach(y)
            } else
                m.fragment && m.fragment.c();
            r.intro && tt(e.$$.fragment),
                it(e, r.target, r.anchor, r.customElement),
                Y()
        }
        I(u)
    }
    class lt {
        $destroy() {
            ot(this, 1),
                this.$destroy = t
        }
        $on(t, e) {
            const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return r.push(e),
                () => {
                    const t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1)
                }
        }
        $set(t) {
            var e;
            this.$$set && (e = t,
                0 !== Object.keys(e).length) && (this.$$.skip_bound = !0,
                    this.$$set(t),
                    this.$$.skip_bound = !1)
        }
    }
    const ht = [];
    function ct(e, r = t) {
        let n;
        const i = new Set;
        function o(t) {
            if (s(e, t) && (e = t,
                n)) {
                const t = !ht.length;
                for (const t of i)
                    t[1](),
                        ht.push(t, e);
                if (t) {
                    for (let t = 0; t < ht.length; t += 2)
                        ht[t][0](ht[t + 1]);
                    ht.length = 0
                }
            }
        }
        return {
            set: o,
            update: function (t) {
                o(t(e))
            },
            subscribe: function (a, s = t) {
                const l = [a, s];
                return i.add(l),
                    1 === i.size && (n = r(o) || t),
                    a(e),
                    () => {
                        i.delete(l),
                            0 === i.size && (n(),
                                n = null)
                    }
            }
        }
    }
    const ut = ct(20)
        , mt = ct(.5)
        , pt = ct("Rainy Day")
        , dt = ct(.2)
        , ft = ct(-10)
        , gt = ct(0)
        , bt = ct(0)
        , yt = ct([])
        , vt = ct(.5)
        , xt = ct(!0)
        , wt = ct(!0);
    function kt(e) {
        let r, n, i, o, a, s, l, h, c, u;
        return {
            c() {
                r = x("meta"),
                    n = x("meta"),
                    i = x("meta"),
                    o = x("meta"),
                    a = x("meta"),
                    s = x("meta"),
                    l = x("meta"),
                    h = x("meta"),
                    c = x("meta"),
                    u = x("meta"),

                    T(r, "charset", "utf-8"),
                    T(n, "http-equiv", "X-UA-Compatible"),
                    T(n, "content", "IE=edge"),
                    T(i, "name", "viewport"),
                    T(i, "content", "width=device-width,initial-scale=1"),
                    T(o, "name", "viewport"),
                    T(o, "content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"),
                    T(a, "name", "description"),
                    T(a, "content", "MLU-Explain: Logistic Regression."),
                    T(s, "property", "og:image"),
                    T(s, "content", ""),
                    T(l, "property", "og:title"),
                    T(l, "content", "Logistic Regression"),
                    T(h, "property", "og:description"),
                    T(h, "content", "A visual, interactive explanation of logistic regression for machine learning."),
                    T(c, "property", "og:image:width"),
                    T(c, "content", "1000"),
                    T(u, "property", "og:image:height"),
                    T(u, "content", "630")
            },
            m(t, e) {
                g(document.head, r),
                    g(document.head, n),
                    g(document.head, i),
                    g(document.head, o),
                    g(document.head, a),
                    g(document.head, s),
                    g(document.head, l),
                    g(document.head, h),
                    g(document.head, c),
                    g(document.head, u)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                y(r),
                    y(n),
                    y(i),
                    y(o),
                    y(a),
                    y(s),
                    y(l),
                    y(h),
                    y(c),
                    y(u)
            }
        }
    }
    class Mt extends lt {
        constructor(t) {
            super(),
                st(this, t, null, kt, s, {})
        }
    }
    function St(e) {
        let r;
        return {
            c() {
                r = x("div");
                T(r, "id", "intro-icon");
                P(r, "--ai-color", e[0]);
                T(r, "class", "svelte-htd26v");
            },
            m(t, e) {
                b(t, r, e);
            },
            p(t, [e]) {
                1 & e && P(r, "--ai-color", t[0]);
            },
            i: t,
            o: t,
            d(t) {
                t && y(r);
            }
        };
    }
    function Lt(t, e, r) {
        let { aiLogoColor: n = "black" } = e
            , { robotLogoColor: i = "black" } = e;
        return t.$$set = t => {
            "aiLogoColor" in t && r(0, n = t.aiLogoColor),
                "robotLogoColor" in t && r(1, i = t.robotLogoColor)
        }
            ,
            [n, i]
    }
    class Tt extends lt {
        constructor(t) {
            super(),
                st(this, t, Lt, St, s, {
                    aiLogoColor: 0,
                    robotLogoColor: 1
                })
        }
    }
    function zt(e) {
        let r;
        return {
            c() {
                r = x("section"),
                    T(r, "id", "intro"),
                    T(r, "class", "svelte-1e149uz")
            },
            m(t, e) {
                b(t, r, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r)
            }
        }
    }
    class At extends lt {
        constructor(t) {
            super(),
                st(this, t, null, zt, s, {})
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function _t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Pt, Ct, Nt = (Pt = function (t, e) {
        var r;
        "undefined" != typeof self && self,
            r = function () {
                return function (t) {
                    var e = {};
                    function r(n) {
                        if (e[n])
                            return e[n].exports;
                        var i = e[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return t[n].call(i.exports, i, i.exports, r),
                            i.l = !0,
                            i.exports
                    }
                    return r.m = t,
                        r.c = e,
                        r.d = function (t, e, n) {
                            r.o(t, e) || Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: n
                            })
                        }
                        ,
                        r.r = function (t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                                value: "Module"
                            }),
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                        }
                        ,
                        r.t = function (t, e) {
                            if (1 & e && (t = r(t)),
                                8 & e)
                                return t;
                            if (4 & e && "object" == typeof t && t && t.__esModule)
                                return t;
                            var n = Object.create(null);
                            if (r.r(n),
                                Object.defineProperty(n, "default", {
                                    enumerable: !0,
                                    value: t
                                }),
                                2 & e && "string" != typeof t)
                                for (var i in t)
                                    r.d(n, i, function (e) {
                                        return t[e]
                                    }
                                        .bind(null, i));
                            return n
                        }
                        ,
                        r.n = function (t) {
                            var e = t && t.__esModule ? function () {
                                return t.default
                            }
                                : function () {
                                    return t
                                }
                                ;
                            return r.d(e, "a", e),
                                e
                        }
                        ,
                        r.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        ,
                        r.p = "",
                        r(r.s = 1)
                }([function (t, e, r) { }
                    , function (t, e, r) {
                        r.r(e),
                            r(0);
                        var n = function () {
                            function t(t, e, r) {
                                this.lexer = void 0,
                                    this.start = void 0,
                                    this.end = void 0,
                                    this.lexer = t,
                                    this.start = e,
                                    this.end = r
                            }
                            return t.range = function (e, r) {
                                return r ? e && e.loc && r.loc && e.loc.lexer === r.loc.lexer ? new t(e.loc.lexer, e.loc.start, r.loc.end) : null : e && e.loc
                            }
                                ,
                                t
                        }()
                            , i = function () {
                                function t(t, e) {
                                    this.text = void 0,
                                        this.loc = void 0,
                                        this.noexpand = void 0,
                                        this.treatAsRelax = void 0,
                                        this.text = t,
                                        this.loc = e
                                }
                                return t.prototype.range = function (e, r) {
                                    return new t(r, n.range(this, e))
                                }
                                    ,
                                    t
                            }()
                            , o = function t(e, r) {
                                this.position = void 0;
                                var n, i = "KaTeX parse error: " + e, o = r && r.loc;
                                if (o && o.start <= o.end) {
                                    var a = o.lexer.input;
                                    n = o.start;
                                    var s = o.end;
                                    n === a.length ? i += " at end of input: " : i += " at position " + (n + 1) + ": ";
                                    var l = a.slice(n, s).replace(/[^]/g, "$&̲");
                                    i += (n > 15 ? "…" + a.slice(n - 15, n) : a.slice(0, n)) + l + (s + 15 < a.length ? a.slice(s, s + 15) + "…" : a.slice(s))
                                }
                                var h = new Error(i);
                                return h.name = "ParseError",
                                    h.__proto__ = t.prototype,
                                    h.position = n,
                                    h
                            };
                        o.prototype.__proto__ = Error.prototype;
                        var a = o
                            , s = /([A-Z])/g
                            , l = {
                                "&": "&amp;",
                                ">": "&gt;",
                                "<": "&lt;",
                                '"': "&quot;",
                                "'": "&#x27;"
                            }
                            , h = /[&><"']/g
                            , c = function t(e) {
                                return "ordgroup" === e.type || "color" === e.type ? 1 === e.body.length ? t(e.body[0]) : e : "font" === e.type ? t(e.body) : e
                            }
                            , u = {
                                contains: function (t, e) {
                                    return -1 !== t.indexOf(e)
                                },
                                deflt: function (t, e) {
                                    return void 0 === t ? e : t
                                },
                                escape: function (t) {
                                    return String(t).replace(h, (function (t) {
                                        return l[t]
                                    }
                                    ))
                                },
                                hyphenate: function (t) {
                                    return t.replace(s, "-$1").toLowerCase()
                                },
                                getBaseElem: c,
                                isCharacterBox: function (t) {
                                    var e = c(t);
                                    return "mathord" === e.type || "textord" === e.type || "atom" === e.type
                                },
                                protocolFromUrl: function (t) {
                                    var e = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(t);
                                    return null != e ? e[1] : "_relative"
                                }
                            }
                            , m = function () {
                                function t(t) {
                                    this.displayMode = void 0,
                                        this.output = void 0,
                                        this.leqno = void 0,
                                        this.fleqn = void 0,
                                        this.throwOnError = void 0,
                                        this.errorColor = void 0,
                                        this.macros = void 0,
                                        this.minRuleThickness = void 0,
                                        this.colorIsTextColor = void 0,
                                        this.strict = void 0,
                                        this.trust = void 0,
                                        this.maxSize = void 0,
                                        this.maxExpand = void 0,
                                        this.globalGroup = void 0,
                                        t = t || {},
                                        this.displayMode = u.deflt(t.displayMode, !1),
                                        this.output = u.deflt(t.output, "htmlAndMathml"),
                                        this.leqno = u.deflt(t.leqno, !1),
                                        this.fleqn = u.deflt(t.fleqn, !1),
                                        this.throwOnError = u.deflt(t.throwOnError, !0),
                                        this.errorColor = u.deflt(t.errorColor, "#cc0000"),
                                        this.macros = t.macros || {},
                                        this.minRuleThickness = Math.max(0, u.deflt(t.minRuleThickness, 0)),
                                        this.colorIsTextColor = u.deflt(t.colorIsTextColor, !1),
                                        this.strict = u.deflt(t.strict, "warn"),
                                        this.trust = u.deflt(t.trust, !1),
                                        this.maxSize = Math.max(0, u.deflt(t.maxSize, 1 / 0)),
                                        this.maxExpand = Math.max(0, u.deflt(t.maxExpand, 1e3)),
                                        this.globalGroup = u.deflt(t.globalGroup, !1)
                                }
                                var e = t.prototype;
                                return e.reportNonstrict = function (t, e, r) {
                                    var n = this.strict;
                                    if ("function" == typeof n && (n = n(t, e, r)),
                                        n && "ignore" !== n) {
                                        if (!0 === n || "error" === n)
                                            throw new a("LaTeX-incompatible input and strict mode is set to 'error': " + e + " [" + t + "]", r);
                                        "warn" === n ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]")
                                    }
                                }
                                    ,
                                    e.useStrictBehavior = function (t, e, r) {
                                        var n = this.strict;
                                        if ("function" == typeof n)
                                            try {
                                                n = n(t, e, r)
                                            } catch (t) {
                                                n = "error"
                                            }
                                        return !(!n || "ignore" === n || !0 !== n && "error" !== n && ("warn" === n ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]"),
                                            1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]"),
                                                1)))
                                    }
                                    ,
                                    e.isTrusted = function (t) {
                                        t.url && !t.protocol && (t.protocol = u.protocolFromUrl(t.url));
                                        var e = "function" == typeof this.trust ? this.trust(t) : this.trust;
                                        return Boolean(e)
                                    }
                                    ,
                                    t
                            }()
                            , p = function () {
                                function t(t, e, r) {
                                    this.id = void 0,
                                        this.size = void 0,
                                        this.cramped = void 0,
                                        this.id = t,
                                        this.size = e,
                                        this.cramped = r
                                }
                                var e = t.prototype;
                                return e.sup = function () {
                                    return d[f[this.id]]
                                }
                                    ,
                                    e.sub = function () {
                                        return d[g[this.id]]
                                    }
                                    ,
                                    e.fracNum = function () {
                                        return d[b[this.id]]
                                    }
                                    ,
                                    e.fracDen = function () {
                                        return d[y[this.id]]
                                    }
                                    ,
                                    e.cramp = function () {
                                        return d[v[this.id]]
                                    }
                                    ,
                                    e.text = function () {
                                        return d[x[this.id]]
                                    }
                                    ,
                                    e.isTight = function () {
                                        return this.size >= 2
                                    }
                                    ,
                                    t
                            }()
                            , d = [new p(0, 0, !1), new p(1, 0, !0), new p(2, 1, !1), new p(3, 1, !0), new p(4, 2, !1), new p(5, 2, !0), new p(6, 3, !1), new p(7, 3, !0)]
                            , f = [4, 5, 4, 5, 6, 7, 6, 7]
                            , g = [5, 5, 5, 5, 7, 7, 7, 7]
                            , b = [2, 3, 4, 5, 6, 7, 6, 7]
                            , y = [3, 3, 5, 5, 7, 7, 7, 7]
                            , v = [1, 1, 3, 3, 5, 5, 7, 7]
                            , x = [0, 1, 2, 3, 2, 3, 2, 3]
                            , w = {
                                DISPLAY: d[0],
                                TEXT: d[2],
                                SCRIPT: d[4],
                                SCRIPTSCRIPT: d[6]
                            }
                            , k = [{
                                name: "latin",
                                blocks: [[256, 591], [768, 879]]
                            }, {
                                name: "cyrillic",
                                blocks: [[1024, 1279]]
                            }, {
                                name: "brahmic",
                                blocks: [[2304, 4255]]
                            }, {
                                name: "georgian",
                                blocks: [[4256, 4351]]
                            }, {
                                name: "cjk",
                                blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
                            }, {
                                name: "hangul",
                                blocks: [[44032, 55215]]
                            }]
                            , M = [];
                        function S(t) {
                            for (var e = 0; e < M.length; e += 2)
                                if (t >= M[e] && t <= M[e + 1])
                                    return !0;
                            return !1
                        }
                        k.forEach((function (t) {
                            return t.blocks.forEach((function (t) {
                                return M.push.apply(M, t)
                            }
                            ))
                        }
                        ));
                        var L = 80
                            , T = {
                                leftParenInner: "M291 0 H417 V300 H291 z",
                                rightParenInner: "M457 0 H583 V300 H457 z",
                                doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                                doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                                leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                                leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                                leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                                leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                                leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                                leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                                leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                                leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                                leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                                lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                                leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                                leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                                leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                                longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                                midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                                midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                                oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                                oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                                oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                                oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                                rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                                rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                                rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                                rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                                rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                                rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                                rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                                rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                                rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                                righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                                rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                                rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                                twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                                twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                                tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                                tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                                tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                                tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                                vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                                widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                                widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                                widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                                widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                                widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                                widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                                widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                                widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                                baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                                rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                                baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                                rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                                shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                                shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
                            }
                            , z = function () {
                                function t(t) {
                                    this.children = void 0,
                                        this.classes = void 0,
                                        this.height = void 0,
                                        this.depth = void 0,
                                        this.maxFontSize = void 0,
                                        this.style = void 0,
                                        this.children = t,
                                        this.classes = [],
                                        this.height = 0,
                                        this.depth = 0,
                                        this.maxFontSize = 0,
                                        this.style = {}
                                }
                                var e = t.prototype;
                                return e.hasClass = function (t) {
                                    return u.contains(this.classes, t)
                                }
                                    ,
                                    e.toNode = function () {
                                        for (var t = document.createDocumentFragment(), e = 0; e < this.children.length; e++)
                                            t.appendChild(this.children[e].toNode());
                                        return t
                                    }
                                    ,
                                    e.toMarkup = function () {
                                        for (var t = "", e = 0; e < this.children.length; e++)
                                            t += this.children[e].toMarkup();
                                        return t
                                    }
                                    ,
                                    e.toText = function () {
                                        var t = function (t) {
                                            return t.toText()
                                        };
                                        return this.children.map(t).join("")
                                    }
                                    ,
                                    t
                            }()
                            , A = function (t) {
                                return t.filter((function (t) {
                                    return t
                                }
                                )).join(" ")
                            }
                            , _ = function (t, e, r) {
                                if (this.classes = t || [],
                                    this.attributes = {},
                                    this.height = 0,
                                    this.depth = 0,
                                    this.maxFontSize = 0,
                                    this.style = r || {},
                                    e) {
                                    e.style.isTight() && this.classes.push("mtight");
                                    var n = e.getColor();
                                    n && (this.style.color = n)
                                }
                            }
                            , P = function (t) {
                                var e = document.createElement(t);
                                for (var r in e.className = A(this.classes),
                                    this.style)
                                    this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
                                for (var n in this.attributes)
                                    this.attributes.hasOwnProperty(n) && e.setAttribute(n, this.attributes[n]);
                                for (var i = 0; i < this.children.length; i++)
                                    e.appendChild(this.children[i].toNode());
                                return e
                            }
                            , C = function (t) {
                                var e = "<" + t;
                                this.classes.length && (e += ' class="' + u.escape(A(this.classes)) + '"');
                                var r = "";
                                for (var n in this.style)
                                    this.style.hasOwnProperty(n) && (r += u.hyphenate(n) + ":" + this.style[n] + ";");
                                for (var i in r && (e += ' style="' + u.escape(r) + '"'),
                                    this.attributes)
                                    this.attributes.hasOwnProperty(i) && (e += " " + i + '="' + u.escape(this.attributes[i]) + '"');
                                e += ">";
                                for (var o = 0; o < this.children.length; o++)
                                    e += this.children[o].toMarkup();
                                return e += "</" + t + ">"
                            }
                            , N = function () {
                                function t(t, e, r, n) {
                                    this.children = void 0,
                                        this.attributes = void 0,
                                        this.classes = void 0,
                                        this.height = void 0,
                                        this.depth = void 0,
                                        this.width = void 0,
                                        this.maxFontSize = void 0,
                                        this.style = void 0,
                                        _.call(this, t, r, n),
                                        this.children = e || []
                                }
                                var e = t.prototype;
                                return e.setAttribute = function (t, e) {
                                    this.attributes[t] = e
                                }
                                    ,
                                    e.hasClass = function (t) {
                                        return u.contains(this.classes, t)
                                    }
                                    ,
                                    e.toNode = function () {
                                        return P.call(this, "span")
                                    }
                                    ,
                                    e.toMarkup = function () {
                                        return C.call(this, "span")
                                    }
                                    ,
                                    t
                            }()
                            , $ = function () {
                                function t(t, e, r, n) {
                                    this.children = void 0,
                                        this.attributes = void 0,
                                        this.classes = void 0,
                                        this.height = void 0,
                                        this.depth = void 0,
                                        this.maxFontSize = void 0,
                                        this.style = void 0,
                                        _.call(this, e, n),
                                        this.children = r || [],
                                        this.setAttribute("href", t)
                                }
                                var e = t.prototype;
                                return e.setAttribute = function (t, e) {
                                    this.attributes[t] = e
                                }
                                    ,
                                    e.hasClass = function (t) {
                                        return u.contains(this.classes, t)
                                    }
                                    ,
                                    e.toNode = function () {
                                        return P.call(this, "a")
                                    }
                                    ,
                                    e.toMarkup = function () {
                                        return C.call(this, "a")
                                    }
                                    ,
                                    t
                            }()
                            , B = function () {
                                function t(t, e, r) {
                                    this.src = void 0,
                                        this.alt = void 0,
                                        this.classes = void 0,
                                        this.height = void 0,
                                        this.depth = void 0,
                                        this.maxFontSize = void 0,
                                        this.style = void 0,
                                        this.alt = e,
                                        this.src = t,
                                        this.classes = ["mord"],
                                        this.style = r
                                }
                                var e = t.prototype;
                                return e.hasClass = function (t) {
                                    return u.contains(this.classes, t)
                                }
                                    ,
                                    e.toNode = function () {
                                        var t = document.createElement("img");
                                        for (var e in t.src = this.src,
                                            t.alt = this.alt,
                                            t.className = "mord",
                                            this.style)
                                            this.style.hasOwnProperty(e) && (t.style[e] = this.style[e]);
                                        return t
                                    }
                                    ,
                                    e.toMarkup = function () {
                                        var t = "<img  src='" + this.src + " 'alt='" + this.alt + "' "
                                            , e = "";
                                        for (var r in this.style)
                                            this.style.hasOwnProperty(r) && (e += u.hyphenate(r) + ":" + this.style[r] + ";");
                                        return e && (t += ' style="' + u.escape(e) + '"'),
                                            t += "'/>"
                                    }
                                    ,
                                    t
                            }()
                            , q = {
                                "î": "ı̂",
                                "ï": "ı̈",
                                "í": "ı́",
                                "ì": "ı̀"
                            }
                            , E = function () {
                                function t(t, e, r, n, i, o, a, s) {
                                    this.text = void 0,
                                        this.height = void 0,
                                        this.depth = void 0,
                                        this.italic = void 0,
                                        this.skew = void 0,
                                        this.width = void 0,
                                        this.maxFontSize = void 0,
                                        this.classes = void 0,
                                        this.style = void 0,
                                        this.text = t,
                                        this.height = e || 0,
                                        this.depth = r || 0,
                                        this.italic = n || 0,
                                        this.skew = i || 0,
                                        this.width = o || 0,
                                        this.classes = a || [],
                                        this.style = s || {},
                                        this.maxFontSize = 0;
                                    var l = function (t) {
                                        for (var e = 0; e < k.length; e++)
                                            for (var r = k[e], n = 0; n < r.blocks.length; n++) {
                                                var i = r.blocks[n];
                                                if (t >= i[0] && t <= i[1])
                                                    return r.name
                                            }
                                        return null
                                    }(this.text.charCodeAt(0));
                                    l && this.classes.push(l + "_fallback"),
                                        /[îïíì]/.test(this.text) && (this.text = q[this.text])
                                }
                                var e = t.prototype;
                                return e.hasClass = function (t) {
                                    return u.contains(this.classes, t)
                                }
                                    ,
                                    e.toNode = function () {
                                        var t = document.createTextNode(this.text)
                                            , e = null;
                                        for (var r in this.italic > 0 && ((e = document.createElement("span")).style.marginRight = this.italic + "em"),
                                            this.classes.length > 0 && ((e = e || document.createElement("span")).className = A(this.classes)),
                                            this.style)
                                            this.style.hasOwnProperty(r) && ((e = e || document.createElement("span")).style[r] = this.style[r]);
                                        return e ? (e.appendChild(t),
                                            e) : t
                                    }
                                    ,
                                    e.toMarkup = function () {
                                        var t = !1
                                            , e = "<span";
                                        this.classes.length && (t = !0,
                                            e += ' class="',
                                            e += u.escape(A(this.classes)),
                                            e += '"');
                                        var r = "";
                                        for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"),
                                            this.style)
                                            this.style.hasOwnProperty(n) && (r += u.hyphenate(n) + ":" + this.style[n] + ";");
                                        r && (t = !0,
                                            e += ' style="' + u.escape(r) + '"');
                                        var i = u.escape(this.text);
                                        return t ? (e += ">",
                                            e += i,
                                            e += "</span>") : i
                                    }
                                    ,
                                    t
                            }()
                            , I = function () {
                                function t(t, e) {
                                    this.children = void 0,
                                        this.attributes = void 0,
                                        this.children = t || [],
                                        this.attributes = e || {}
                                }
                                var e = t.prototype;
                                return e.toNode = function () {
                                    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                    for (var r = 0; r < this.children.length; r++)
                                        t.appendChild(this.children[r].toNode());
                                    return t
                                }
                                    ,
                                    e.toMarkup = function () {
                                        var t = "<svg";
                                        for (var e in this.attributes)
                                            Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
                                        t += ">";
                                        for (var r = 0; r < this.children.length; r++)
                                            t += this.children[r].toMarkup();
                                        return t += "</svg>"
                                    }
                                    ,
                                    t
                            }()
                            , R = function () {
                                function t(t, e) {
                                    this.pathName = void 0,
                                        this.alternate = void 0,
                                        this.pathName = t,
                                        this.alternate = e
                                }
                                var e = t.prototype;
                                return e.toNode = function () {
                                    var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", T[this.pathName]),
                                        t
                                }
                                    ,
                                    e.toMarkup = function () {
                                        return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + T[this.pathName] + "'/>"
                                    }
                                    ,
                                    t
                            }()
                            , O = function () {
                                function t(t) {
                                    this.attributes = void 0,
                                        this.attributes = t || {}
                                }
                                var e = t.prototype;
                                return e.toNode = function () {
                                    var t = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                    return t
                                }
                                    ,
                                    e.toMarkup = function () {
                                        var t = "<line";
                                        for (var e in this.attributes)
                                            Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
                                        return t += "/>"
                                    }
                                    ,
                                    t
                            }();
                        function H(t) {
                            if (t instanceof E)
                                return t;
                            throw new Error("Expected symbolNode but got " + String(t) + ".")
                        }
                        var D = {
                            "AMS-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68889, 0, 0, .72222],
                                66: [0, .68889, 0, 0, .66667],
                                67: [0, .68889, 0, 0, .72222],
                                68: [0, .68889, 0, 0, .72222],
                                69: [0, .68889, 0, 0, .66667],
                                70: [0, .68889, 0, 0, .61111],
                                71: [0, .68889, 0, 0, .77778],
                                72: [0, .68889, 0, 0, .77778],
                                73: [0, .68889, 0, 0, .38889],
                                74: [.16667, .68889, 0, 0, .5],
                                75: [0, .68889, 0, 0, .77778],
                                76: [0, .68889, 0, 0, .66667],
                                77: [0, .68889, 0, 0, .94445],
                                78: [0, .68889, 0, 0, .72222],
                                79: [.16667, .68889, 0, 0, .77778],
                                80: [0, .68889, 0, 0, .61111],
                                81: [.16667, .68889, 0, 0, .77778],
                                82: [0, .68889, 0, 0, .72222],
                                83: [0, .68889, 0, 0, .55556],
                                84: [0, .68889, 0, 0, .66667],
                                85: [0, .68889, 0, 0, .72222],
                                86: [0, .68889, 0, 0, .72222],
                                87: [0, .68889, 0, 0, 1],
                                88: [0, .68889, 0, 0, .72222],
                                89: [0, .68889, 0, 0, .72222],
                                90: [0, .68889, 0, 0, .66667],
                                107: [0, .68889, 0, 0, .55556],
                                160: [0, 0, 0, 0, .25],
                                165: [0, .675, .025, 0, .75],
                                174: [.15559, .69224, 0, 0, .94666],
                                240: [0, .68889, 0, 0, .55556],
                                295: [0, .68889, 0, 0, .54028],
                                710: [0, .825, 0, 0, 2.33334],
                                732: [0, .9, 0, 0, 2.33334],
                                770: [0, .825, 0, 0, 2.33334],
                                771: [0, .9, 0, 0, 2.33334],
                                989: [.08167, .58167, 0, 0, .77778],
                                1008: [0, .43056, .04028, 0, .66667],
                                8245: [0, .54986, 0, 0, .275],
                                8463: [0, .68889, 0, 0, .54028],
                                8487: [0, .68889, 0, 0, .72222],
                                8498: [0, .68889, 0, 0, .55556],
                                8502: [0, .68889, 0, 0, .66667],
                                8503: [0, .68889, 0, 0, .44445],
                                8504: [0, .68889, 0, 0, .66667],
                                8513: [0, .68889, 0, 0, .63889],
                                8592: [-.03598, .46402, 0, 0, .5],
                                8594: [-.03598, .46402, 0, 0, .5],
                                8602: [-.13313, .36687, 0, 0, 1],
                                8603: [-.13313, .36687, 0, 0, 1],
                                8606: [.01354, .52239, 0, 0, 1],
                                8608: [.01354, .52239, 0, 0, 1],
                                8610: [.01354, .52239, 0, 0, 1.11111],
                                8611: [.01354, .52239, 0, 0, 1.11111],
                                8619: [0, .54986, 0, 0, 1],
                                8620: [0, .54986, 0, 0, 1],
                                8621: [-.13313, .37788, 0, 0, 1.38889],
                                8622: [-.13313, .36687, 0, 0, 1],
                                8624: [0, .69224, 0, 0, .5],
                                8625: [0, .69224, 0, 0, .5],
                                8630: [0, .43056, 0, 0, 1],
                                8631: [0, .43056, 0, 0, 1],
                                8634: [.08198, .58198, 0, 0, .77778],
                                8635: [.08198, .58198, 0, 0, .77778],
                                8638: [.19444, .69224, 0, 0, .41667],
                                8639: [.19444, .69224, 0, 0, .41667],
                                8642: [.19444, .69224, 0, 0, .41667],
                                8643: [.19444, .69224, 0, 0, .41667],
                                8644: [.1808, .675, 0, 0, 1],
                                8646: [.1808, .675, 0, 0, 1],
                                8647: [.1808, .675, 0, 0, 1],
                                8648: [.19444, .69224, 0, 0, .83334],
                                8649: [.1808, .675, 0, 0, 1],
                                8650: [.19444, .69224, 0, 0, .83334],
                                8651: [.01354, .52239, 0, 0, 1],
                                8652: [.01354, .52239, 0, 0, 1],
                                8653: [-.13313, .36687, 0, 0, 1],
                                8654: [-.13313, .36687, 0, 0, 1],
                                8655: [-.13313, .36687, 0, 0, 1],
                                8666: [.13667, .63667, 0, 0, 1],
                                8667: [.13667, .63667, 0, 0, 1],
                                8669: [-.13313, .37788, 0, 0, 1],
                                8672: [-.064, .437, 0, 0, 1.334],
                                8674: [-.064, .437, 0, 0, 1.334],
                                8705: [0, .825, 0, 0, .5],
                                8708: [0, .68889, 0, 0, .55556],
                                8709: [.08167, .58167, 0, 0, .77778],
                                8717: [0, .43056, 0, 0, .42917],
                                8722: [-.03598, .46402, 0, 0, .5],
                                8724: [.08198, .69224, 0, 0, .77778],
                                8726: [.08167, .58167, 0, 0, .77778],
                                8733: [0, .69224, 0, 0, .77778],
                                8736: [0, .69224, 0, 0, .72222],
                                8737: [0, .69224, 0, 0, .72222],
                                8738: [.03517, .52239, 0, 0, .72222],
                                8739: [.08167, .58167, 0, 0, .22222],
                                8740: [.25142, .74111, 0, 0, .27778],
                                8741: [.08167, .58167, 0, 0, .38889],
                                8742: [.25142, .74111, 0, 0, .5],
                                8756: [0, .69224, 0, 0, .66667],
                                8757: [0, .69224, 0, 0, .66667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8765: [-.13313, .37788, 0, 0, .77778],
                                8769: [-.13313, .36687, 0, 0, .77778],
                                8770: [-.03625, .46375, 0, 0, .77778],
                                8774: [.30274, .79383, 0, 0, .77778],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8778: [.08167, .58167, 0, 0, .77778],
                                8782: [.06062, .54986, 0, 0, .77778],
                                8783: [.06062, .54986, 0, 0, .77778],
                                8785: [.08198, .58198, 0, 0, .77778],
                                8786: [.08198, .58198, 0, 0, .77778],
                                8787: [.08198, .58198, 0, 0, .77778],
                                8790: [0, .69224, 0, 0, .77778],
                                8791: [.22958, .72958, 0, 0, .77778],
                                8796: [.08198, .91667, 0, 0, .77778],
                                8806: [.25583, .75583, 0, 0, .77778],
                                8807: [.25583, .75583, 0, 0, .77778],
                                8808: [.25142, .75726, 0, 0, .77778],
                                8809: [.25142, .75726, 0, 0, .77778],
                                8812: [.25583, .75583, 0, 0, .5],
                                8814: [.20576, .70576, 0, 0, .77778],
                                8815: [.20576, .70576, 0, 0, .77778],
                                8816: [.30274, .79383, 0, 0, .77778],
                                8817: [.30274, .79383, 0, 0, .77778],
                                8818: [.22958, .72958, 0, 0, .77778],
                                8819: [.22958, .72958, 0, 0, .77778],
                                8822: [.1808, .675, 0, 0, .77778],
                                8823: [.1808, .675, 0, 0, .77778],
                                8828: [.13667, .63667, 0, 0, .77778],
                                8829: [.13667, .63667, 0, 0, .77778],
                                8830: [.22958, .72958, 0, 0, .77778],
                                8831: [.22958, .72958, 0, 0, .77778],
                                8832: [.20576, .70576, 0, 0, .77778],
                                8833: [.20576, .70576, 0, 0, .77778],
                                8840: [.30274, .79383, 0, 0, .77778],
                                8841: [.30274, .79383, 0, 0, .77778],
                                8842: [.13597, .63597, 0, 0, .77778],
                                8843: [.13597, .63597, 0, 0, .77778],
                                8847: [.03517, .54986, 0, 0, .77778],
                                8848: [.03517, .54986, 0, 0, .77778],
                                8858: [.08198, .58198, 0, 0, .77778],
                                8859: [.08198, .58198, 0, 0, .77778],
                                8861: [.08198, .58198, 0, 0, .77778],
                                8862: [0, .675, 0, 0, .77778],
                                8863: [0, .675, 0, 0, .77778],
                                8864: [0, .675, 0, 0, .77778],
                                8865: [0, .675, 0, 0, .77778],
                                8872: [0, .69224, 0, 0, .61111],
                                8873: [0, .69224, 0, 0, .72222],
                                8874: [0, .69224, 0, 0, .88889],
                                8876: [0, .68889, 0, 0, .61111],
                                8877: [0, .68889, 0, 0, .61111],
                                8878: [0, .68889, 0, 0, .72222],
                                8879: [0, .68889, 0, 0, .72222],
                                8882: [.03517, .54986, 0, 0, .77778],
                                8883: [.03517, .54986, 0, 0, .77778],
                                8884: [.13667, .63667, 0, 0, .77778],
                                8885: [.13667, .63667, 0, 0, .77778],
                                8888: [0, .54986, 0, 0, 1.11111],
                                8890: [.19444, .43056, 0, 0, .55556],
                                8891: [.19444, .69224, 0, 0, .61111],
                                8892: [.19444, .69224, 0, 0, .61111],
                                8901: [0, .54986, 0, 0, .27778],
                                8903: [.08167, .58167, 0, 0, .77778],
                                8905: [.08167, .58167, 0, 0, .77778],
                                8906: [.08167, .58167, 0, 0, .77778],
                                8907: [0, .69224, 0, 0, .77778],
                                8908: [0, .69224, 0, 0, .77778],
                                8909: [-.03598, .46402, 0, 0, .77778],
                                8910: [0, .54986, 0, 0, .76042],
                                8911: [0, .54986, 0, 0, .76042],
                                8912: [.03517, .54986, 0, 0, .77778],
                                8913: [.03517, .54986, 0, 0, .77778],
                                8914: [0, .54986, 0, 0, .66667],
                                8915: [0, .54986, 0, 0, .66667],
                                8916: [0, .69224, 0, 0, .66667],
                                8918: [.0391, .5391, 0, 0, .77778],
                                8919: [.0391, .5391, 0, 0, .77778],
                                8920: [.03517, .54986, 0, 0, 1.33334],
                                8921: [.03517, .54986, 0, 0, 1.33334],
                                8922: [.38569, .88569, 0, 0, .77778],
                                8923: [.38569, .88569, 0, 0, .77778],
                                8926: [.13667, .63667, 0, 0, .77778],
                                8927: [.13667, .63667, 0, 0, .77778],
                                8928: [.30274, .79383, 0, 0, .77778],
                                8929: [.30274, .79383, 0, 0, .77778],
                                8934: [.23222, .74111, 0, 0, .77778],
                                8935: [.23222, .74111, 0, 0, .77778],
                                8936: [.23222, .74111, 0, 0, .77778],
                                8937: [.23222, .74111, 0, 0, .77778],
                                8938: [.20576, .70576, 0, 0, .77778],
                                8939: [.20576, .70576, 0, 0, .77778],
                                8940: [.30274, .79383, 0, 0, .77778],
                                8941: [.30274, .79383, 0, 0, .77778],
                                8994: [.19444, .69224, 0, 0, .77778],
                                8995: [.19444, .69224, 0, 0, .77778],
                                9416: [.15559, .69224, 0, 0, .90222],
                                9484: [0, .69224, 0, 0, .5],
                                9488: [0, .69224, 0, 0, .5],
                                9492: [0, .37788, 0, 0, .5],
                                9496: [0, .37788, 0, 0, .5],
                                9585: [.19444, .68889, 0, 0, .88889],
                                9586: [.19444, .74111, 0, 0, .88889],
                                9632: [0, .675, 0, 0, .77778],
                                9633: [0, .675, 0, 0, .77778],
                                9650: [0, .54986, 0, 0, .72222],
                                9651: [0, .54986, 0, 0, .72222],
                                9654: [.03517, .54986, 0, 0, .77778],
                                9660: [0, .54986, 0, 0, .72222],
                                9661: [0, .54986, 0, 0, .72222],
                                9664: [.03517, .54986, 0, 0, .77778],
                                9674: [.11111, .69224, 0, 0, .66667],
                                9733: [.19444, .69224, 0, 0, .94445],
                                10003: [0, .69224, 0, 0, .83334],
                                10016: [0, .69224, 0, 0, .83334],
                                10731: [.11111, .69224, 0, 0, .66667],
                                10846: [.19444, .75583, 0, 0, .61111],
                                10877: [.13667, .63667, 0, 0, .77778],
                                10878: [.13667, .63667, 0, 0, .77778],
                                10885: [.25583, .75583, 0, 0, .77778],
                                10886: [.25583, .75583, 0, 0, .77778],
                                10887: [.13597, .63597, 0, 0, .77778],
                                10888: [.13597, .63597, 0, 0, .77778],
                                10889: [.26167, .75726, 0, 0, .77778],
                                10890: [.26167, .75726, 0, 0, .77778],
                                10891: [.48256, .98256, 0, 0, .77778],
                                10892: [.48256, .98256, 0, 0, .77778],
                                10901: [.13667, .63667, 0, 0, .77778],
                                10902: [.13667, .63667, 0, 0, .77778],
                                10933: [.25142, .75726, 0, 0, .77778],
                                10934: [.25142, .75726, 0, 0, .77778],
                                10935: [.26167, .75726, 0, 0, .77778],
                                10936: [.26167, .75726, 0, 0, .77778],
                                10937: [.26167, .75726, 0, 0, .77778],
                                10938: [.26167, .75726, 0, 0, .77778],
                                10949: [.25583, .75583, 0, 0, .77778],
                                10950: [.25583, .75583, 0, 0, .77778],
                                10955: [.28481, .79383, 0, 0, .77778],
                                10956: [.28481, .79383, 0, 0, .77778],
                                57350: [.08167, .58167, 0, 0, .22222],
                                57351: [.08167, .58167, 0, 0, .38889],
                                57352: [.08167, .58167, 0, 0, .77778],
                                57353: [0, .43056, .04028, 0, .66667],
                                57356: [.25142, .75726, 0, 0, .77778],
                                57357: [.25142, .75726, 0, 0, .77778],
                                57358: [.41951, .91951, 0, 0, .77778],
                                57359: [.30274, .79383, 0, 0, .77778],
                                57360: [.30274, .79383, 0, 0, .77778],
                                57361: [.41951, .91951, 0, 0, .77778],
                                57366: [.25142, .75726, 0, 0, .77778],
                                57367: [.25142, .75726, 0, 0, .77778],
                                57368: [.25142, .75726, 0, 0, .77778],
                                57369: [.25142, .75726, 0, 0, .77778],
                                57370: [.13597, .63597, 0, 0, .77778],
                                57371: [.13597, .63597, 0, 0, .77778]
                            },
                            "Caligraphic-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68333, 0, .19445, .79847],
                                66: [0, .68333, .03041, .13889, .65681],
                                67: [0, .68333, .05834, .13889, .52653],
                                68: [0, .68333, .02778, .08334, .77139],
                                69: [0, .68333, .08944, .11111, .52778],
                                70: [0, .68333, .09931, .11111, .71875],
                                71: [.09722, .68333, .0593, .11111, .59487],
                                72: [0, .68333, .00965, .11111, .84452],
                                73: [0, .68333, .07382, 0, .54452],
                                74: [.09722, .68333, .18472, .16667, .67778],
                                75: [0, .68333, .01445, .05556, .76195],
                                76: [0, .68333, 0, .13889, .68972],
                                77: [0, .68333, 0, .13889, 1.2009],
                                78: [0, .68333, .14736, .08334, .82049],
                                79: [0, .68333, .02778, .11111, .79611],
                                80: [0, .68333, .08222, .08334, .69556],
                                81: [.09722, .68333, 0, .11111, .81667],
                                82: [0, .68333, 0, .08334, .8475],
                                83: [0, .68333, .075, .13889, .60556],
                                84: [0, .68333, .25417, 0, .54464],
                                85: [0, .68333, .09931, .08334, .62583],
                                86: [0, .68333, .08222, 0, .61278],
                                87: [0, .68333, .08222, .08334, .98778],
                                88: [0, .68333, .14643, .13889, .7133],
                                89: [.09722, .68333, .08222, .08334, .66834],
                                90: [0, .68333, .07944, .13889, .72473],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Fraktur-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69141, 0, 0, .29574],
                                34: [0, .69141, 0, 0, .21471],
                                38: [0, .69141, 0, 0, .73786],
                                39: [0, .69141, 0, 0, .21201],
                                40: [.24982, .74947, 0, 0, .38865],
                                41: [.24982, .74947, 0, 0, .38865],
                                42: [0, .62119, 0, 0, .27764],
                                43: [.08319, .58283, 0, 0, .75623],
                                44: [0, .10803, 0, 0, .27764],
                                45: [.08319, .58283, 0, 0, .75623],
                                46: [0, .10803, 0, 0, .27764],
                                47: [.24982, .74947, 0, 0, .50181],
                                48: [0, .47534, 0, 0, .50181],
                                49: [0, .47534, 0, 0, .50181],
                                50: [0, .47534, 0, 0, .50181],
                                51: [.18906, .47534, 0, 0, .50181],
                                52: [.18906, .47534, 0, 0, .50181],
                                53: [.18906, .47534, 0, 0, .50181],
                                54: [0, .69141, 0, 0, .50181],
                                55: [.18906, .47534, 0, 0, .50181],
                                56: [0, .69141, 0, 0, .50181],
                                57: [.18906, .47534, 0, 0, .50181],
                                58: [0, .47534, 0, 0, .21606],
                                59: [.12604, .47534, 0, 0, .21606],
                                61: [-.13099, .36866, 0, 0, .75623],
                                63: [0, .69141, 0, 0, .36245],
                                65: [0, .69141, 0, 0, .7176],
                                66: [0, .69141, 0, 0, .88397],
                                67: [0, .69141, 0, 0, .61254],
                                68: [0, .69141, 0, 0, .83158],
                                69: [0, .69141, 0, 0, .66278],
                                70: [.12604, .69141, 0, 0, .61119],
                                71: [0, .69141, 0, 0, .78539],
                                72: [.06302, .69141, 0, 0, .7203],
                                73: [0, .69141, 0, 0, .55448],
                                74: [.12604, .69141, 0, 0, .55231],
                                75: [0, .69141, 0, 0, .66845],
                                76: [0, .69141, 0, 0, .66602],
                                77: [0, .69141, 0, 0, 1.04953],
                                78: [0, .69141, 0, 0, .83212],
                                79: [0, .69141, 0, 0, .82699],
                                80: [.18906, .69141, 0, 0, .82753],
                                81: [.03781, .69141, 0, 0, .82699],
                                82: [0, .69141, 0, 0, .82807],
                                83: [0, .69141, 0, 0, .82861],
                                84: [0, .69141, 0, 0, .66899],
                                85: [0, .69141, 0, 0, .64576],
                                86: [0, .69141, 0, 0, .83131],
                                87: [0, .69141, 0, 0, 1.04602],
                                88: [0, .69141, 0, 0, .71922],
                                89: [.18906, .69141, 0, 0, .83293],
                                90: [.12604, .69141, 0, 0, .60201],
                                91: [.24982, .74947, 0, 0, .27764],
                                93: [.24982, .74947, 0, 0, .27764],
                                94: [0, .69141, 0, 0, .49965],
                                97: [0, .47534, 0, 0, .50046],
                                98: [0, .69141, 0, 0, .51315],
                                99: [0, .47534, 0, 0, .38946],
                                100: [0, .62119, 0, 0, .49857],
                                101: [0, .47534, 0, 0, .40053],
                                102: [.18906, .69141, 0, 0, .32626],
                                103: [.18906, .47534, 0, 0, .5037],
                                104: [.18906, .69141, 0, 0, .52126],
                                105: [0, .69141, 0, 0, .27899],
                                106: [0, .69141, 0, 0, .28088],
                                107: [0, .69141, 0, 0, .38946],
                                108: [0, .69141, 0, 0, .27953],
                                109: [0, .47534, 0, 0, .76676],
                                110: [0, .47534, 0, 0, .52666],
                                111: [0, .47534, 0, 0, .48885],
                                112: [.18906, .52396, 0, 0, .50046],
                                113: [.18906, .47534, 0, 0, .48912],
                                114: [0, .47534, 0, 0, .38919],
                                115: [0, .47534, 0, 0, .44266],
                                116: [0, .62119, 0, 0, .33301],
                                117: [0, .47534, 0, 0, .5172],
                                118: [0, .52396, 0, 0, .5118],
                                119: [0, .52396, 0, 0, .77351],
                                120: [.18906, .47534, 0, 0, .38865],
                                121: [.18906, .47534, 0, 0, .49884],
                                122: [.18906, .47534, 0, 0, .39054],
                                160: [0, 0, 0, 0, .25],
                                8216: [0, .69141, 0, 0, .21471],
                                8217: [0, .69141, 0, 0, .21471],
                                58112: [0, .62119, 0, 0, .49749],
                                58113: [0, .62119, 0, 0, .4983],
                                58114: [.18906, .69141, 0, 0, .33328],
                                58115: [.18906, .69141, 0, 0, .32923],
                                58116: [.18906, .47534, 0, 0, .50343],
                                58117: [0, .69141, 0, 0, .33301],
                                58118: [0, .62119, 0, 0, .33409],
                                58119: [0, .47534, 0, 0, .50073]
                            },
                            "Main-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .35],
                                34: [0, .69444, 0, 0, .60278],
                                35: [.19444, .69444, 0, 0, .95833],
                                36: [.05556, .75, 0, 0, .575],
                                37: [.05556, .75, 0, 0, .95833],
                                38: [0, .69444, 0, 0, .89444],
                                39: [0, .69444, 0, 0, .31944],
                                40: [.25, .75, 0, 0, .44722],
                                41: [.25, .75, 0, 0, .44722],
                                42: [0, .75, 0, 0, .575],
                                43: [.13333, .63333, 0, 0, .89444],
                                44: [.19444, .15556, 0, 0, .31944],
                                45: [0, .44444, 0, 0, .38333],
                                46: [0, .15556, 0, 0, .31944],
                                47: [.25, .75, 0, 0, .575],
                                48: [0, .64444, 0, 0, .575],
                                49: [0, .64444, 0, 0, .575],
                                50: [0, .64444, 0, 0, .575],
                                51: [0, .64444, 0, 0, .575],
                                52: [0, .64444, 0, 0, .575],
                                53: [0, .64444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [0, .64444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [0, .64444, 0, 0, .575],
                                58: [0, .44444, 0, 0, .31944],
                                59: [.19444, .44444, 0, 0, .31944],
                                60: [.08556, .58556, 0, 0, .89444],
                                61: [-.10889, .39111, 0, 0, .89444],
                                62: [.08556, .58556, 0, 0, .89444],
                                63: [0, .69444, 0, 0, .54305],
                                64: [0, .69444, 0, 0, .89444],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, 0, 0, .81805],
                                67: [0, .68611, 0, 0, .83055],
                                68: [0, .68611, 0, 0, .88194],
                                69: [0, .68611, 0, 0, .75555],
                                70: [0, .68611, 0, 0, .72361],
                                71: [0, .68611, 0, 0, .90416],
                                72: [0, .68611, 0, 0, .9],
                                73: [0, .68611, 0, 0, .43611],
                                74: [0, .68611, 0, 0, .59444],
                                75: [0, .68611, 0, 0, .90138],
                                76: [0, .68611, 0, 0, .69166],
                                77: [0, .68611, 0, 0, 1.09166],
                                78: [0, .68611, 0, 0, .9],
                                79: [0, .68611, 0, 0, .86388],
                                80: [0, .68611, 0, 0, .78611],
                                81: [.19444, .68611, 0, 0, .86388],
                                82: [0, .68611, 0, 0, .8625],
                                83: [0, .68611, 0, 0, .63889],
                                84: [0, .68611, 0, 0, .8],
                                85: [0, .68611, 0, 0, .88472],
                                86: [0, .68611, .01597, 0, .86944],
                                87: [0, .68611, .01597, 0, 1.18888],
                                88: [0, .68611, 0, 0, .86944],
                                89: [0, .68611, .02875, 0, .86944],
                                90: [0, .68611, 0, 0, .70277],
                                91: [.25, .75, 0, 0, .31944],
                                92: [.25, .75, 0, 0, .575],
                                93: [.25, .75, 0, 0, .31944],
                                94: [0, .69444, 0, 0, .575],
                                95: [.31, .13444, .03194, 0, .575],
                                97: [0, .44444, 0, 0, .55902],
                                98: [0, .69444, 0, 0, .63889],
                                99: [0, .44444, 0, 0, .51111],
                                100: [0, .69444, 0, 0, .63889],
                                101: [0, .44444, 0, 0, .52708],
                                102: [0, .69444, .10903, 0, .35139],
                                103: [.19444, .44444, .01597, 0, .575],
                                104: [0, .69444, 0, 0, .63889],
                                105: [0, .69444, 0, 0, .31944],
                                106: [.19444, .69444, 0, 0, .35139],
                                107: [0, .69444, 0, 0, .60694],
                                108: [0, .69444, 0, 0, .31944],
                                109: [0, .44444, 0, 0, .95833],
                                110: [0, .44444, 0, 0, .63889],
                                111: [0, .44444, 0, 0, .575],
                                112: [.19444, .44444, 0, 0, .63889],
                                113: [.19444, .44444, 0, 0, .60694],
                                114: [0, .44444, 0, 0, .47361],
                                115: [0, .44444, 0, 0, .45361],
                                116: [0, .63492, 0, 0, .44722],
                                117: [0, .44444, 0, 0, .63889],
                                118: [0, .44444, .01597, 0, .60694],
                                119: [0, .44444, .01597, 0, .83055],
                                120: [0, .44444, 0, 0, .60694],
                                121: [.19444, .44444, .01597, 0, .60694],
                                122: [0, .44444, 0, 0, .51111],
                                123: [.25, .75, 0, 0, .575],
                                124: [.25, .75, 0, 0, .31944],
                                125: [.25, .75, 0, 0, .575],
                                126: [.35, .34444, 0, 0, .575],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .86853],
                                168: [0, .69444, 0, 0, .575],
                                172: [0, .44444, 0, 0, .76666],
                                176: [0, .69444, 0, 0, .86944],
                                177: [.13333, .63333, 0, 0, .89444],
                                184: [.17014, 0, 0, 0, .51111],
                                198: [0, .68611, 0, 0, 1.04166],
                                215: [.13333, .63333, 0, 0, .89444],
                                216: [.04861, .73472, 0, 0, .89444],
                                223: [0, .69444, 0, 0, .59722],
                                230: [0, .44444, 0, 0, .83055],
                                247: [.13333, .63333, 0, 0, .89444],
                                248: [.09722, .54167, 0, 0, .575],
                                305: [0, .44444, 0, 0, .31944],
                                338: [0, .68611, 0, 0, 1.16944],
                                339: [0, .44444, 0, 0, .89444],
                                567: [.19444, .44444, 0, 0, .35139],
                                710: [0, .69444, 0, 0, .575],
                                711: [0, .63194, 0, 0, .575],
                                713: [0, .59611, 0, 0, .575],
                                714: [0, .69444, 0, 0, .575],
                                715: [0, .69444, 0, 0, .575],
                                728: [0, .69444, 0, 0, .575],
                                729: [0, .69444, 0, 0, .31944],
                                730: [0, .69444, 0, 0, .86944],
                                732: [0, .69444, 0, 0, .575],
                                733: [0, .69444, 0, 0, .575],
                                915: [0, .68611, 0, 0, .69166],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, 0, 0, .89444],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, 0, 0, .76666],
                                928: [0, .68611, 0, 0, .9],
                                931: [0, .68611, 0, 0, .83055],
                                933: [0, .68611, 0, 0, .89444],
                                934: [0, .68611, 0, 0, .83055],
                                936: [0, .68611, 0, 0, .89444],
                                937: [0, .68611, 0, 0, .83055],
                                8211: [0, .44444, .03194, 0, .575],
                                8212: [0, .44444, .03194, 0, 1.14999],
                                8216: [0, .69444, 0, 0, .31944],
                                8217: [0, .69444, 0, 0, .31944],
                                8220: [0, .69444, 0, 0, .60278],
                                8221: [0, .69444, 0, 0, .60278],
                                8224: [.19444, .69444, 0, 0, .51111],
                                8225: [.19444, .69444, 0, 0, .51111],
                                8242: [0, .55556, 0, 0, .34444],
                                8407: [0, .72444, .15486, 0, .575],
                                8463: [0, .69444, 0, 0, .66759],
                                8465: [0, .69444, 0, 0, .83055],
                                8467: [0, .69444, 0, 0, .47361],
                                8472: [.19444, .44444, 0, 0, .74027],
                                8476: [0, .69444, 0, 0, .83055],
                                8501: [0, .69444, 0, 0, .70277],
                                8592: [-.10889, .39111, 0, 0, 1.14999],
                                8593: [.19444, .69444, 0, 0, .575],
                                8594: [-.10889, .39111, 0, 0, 1.14999],
                                8595: [.19444, .69444, 0, 0, .575],
                                8596: [-.10889, .39111, 0, 0, 1.14999],
                                8597: [.25, .75, 0, 0, .575],
                                8598: [.19444, .69444, 0, 0, 1.14999],
                                8599: [.19444, .69444, 0, 0, 1.14999],
                                8600: [.19444, .69444, 0, 0, 1.14999],
                                8601: [.19444, .69444, 0, 0, 1.14999],
                                8636: [-.10889, .39111, 0, 0, 1.14999],
                                8637: [-.10889, .39111, 0, 0, 1.14999],
                                8640: [-.10889, .39111, 0, 0, 1.14999],
                                8641: [-.10889, .39111, 0, 0, 1.14999],
                                8656: [-.10889, .39111, 0, 0, 1.14999],
                                8657: [.19444, .69444, 0, 0, .70277],
                                8658: [-.10889, .39111, 0, 0, 1.14999],
                                8659: [.19444, .69444, 0, 0, .70277],
                                8660: [-.10889, .39111, 0, 0, 1.14999],
                                8661: [.25, .75, 0, 0, .70277],
                                8704: [0, .69444, 0, 0, .63889],
                                8706: [0, .69444, .06389, 0, .62847],
                                8707: [0, .69444, 0, 0, .63889],
                                8709: [.05556, .75, 0, 0, .575],
                                8711: [0, .68611, 0, 0, .95833],
                                8712: [.08556, .58556, 0, 0, .76666],
                                8715: [.08556, .58556, 0, 0, .76666],
                                8722: [.13333, .63333, 0, 0, .89444],
                                8723: [.13333, .63333, 0, 0, .89444],
                                8725: [.25, .75, 0, 0, .575],
                                8726: [.25, .75, 0, 0, .575],
                                8727: [-.02778, .47222, 0, 0, .575],
                                8728: [-.02639, .47361, 0, 0, .575],
                                8729: [-.02639, .47361, 0, 0, .575],
                                8730: [.18, .82, 0, 0, .95833],
                                8733: [0, .44444, 0, 0, .89444],
                                8734: [0, .44444, 0, 0, 1.14999],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .31944],
                                8741: [.25, .75, 0, 0, .575],
                                8743: [0, .55556, 0, 0, .76666],
                                8744: [0, .55556, 0, 0, .76666],
                                8745: [0, .55556, 0, 0, .76666],
                                8746: [0, .55556, 0, 0, .76666],
                                8747: [.19444, .69444, .12778, 0, .56875],
                                8764: [-.10889, .39111, 0, 0, .89444],
                                8768: [.19444, .69444, 0, 0, .31944],
                                8771: [.00222, .50222, 0, 0, .89444],
                                8776: [.02444, .52444, 0, 0, .89444],
                                8781: [.00222, .50222, 0, 0, .89444],
                                8801: [.00222, .50222, 0, 0, .89444],
                                8804: [.19667, .69667, 0, 0, .89444],
                                8805: [.19667, .69667, 0, 0, .89444],
                                8810: [.08556, .58556, 0, 0, 1.14999],
                                8811: [.08556, .58556, 0, 0, 1.14999],
                                8826: [.08556, .58556, 0, 0, .89444],
                                8827: [.08556, .58556, 0, 0, .89444],
                                8834: [.08556, .58556, 0, 0, .89444],
                                8835: [.08556, .58556, 0, 0, .89444],
                                8838: [.19667, .69667, 0, 0, .89444],
                                8839: [.19667, .69667, 0, 0, .89444],
                                8846: [0, .55556, 0, 0, .76666],
                                8849: [.19667, .69667, 0, 0, .89444],
                                8850: [.19667, .69667, 0, 0, .89444],
                                8851: [0, .55556, 0, 0, .76666],
                                8852: [0, .55556, 0, 0, .76666],
                                8853: [.13333, .63333, 0, 0, .89444],
                                8854: [.13333, .63333, 0, 0, .89444],
                                8855: [.13333, .63333, 0, 0, .89444],
                                8856: [.13333, .63333, 0, 0, .89444],
                                8857: [.13333, .63333, 0, 0, .89444],
                                8866: [0, .69444, 0, 0, .70277],
                                8867: [0, .69444, 0, 0, .70277],
                                8868: [0, .69444, 0, 0, .89444],
                                8869: [0, .69444, 0, 0, .89444],
                                8900: [-.02639, .47361, 0, 0, .575],
                                8901: [-.02639, .47361, 0, 0, .31944],
                                8902: [-.02778, .47222, 0, 0, .575],
                                8968: [.25, .75, 0, 0, .51111],
                                8969: [.25, .75, 0, 0, .51111],
                                8970: [.25, .75, 0, 0, .51111],
                                8971: [.25, .75, 0, 0, .51111],
                                8994: [-.13889, .36111, 0, 0, 1.14999],
                                8995: [-.13889, .36111, 0, 0, 1.14999],
                                9651: [.19444, .69444, 0, 0, 1.02222],
                                9657: [-.02778, .47222, 0, 0, .575],
                                9661: [.19444, .69444, 0, 0, 1.02222],
                                9667: [-.02778, .47222, 0, 0, .575],
                                9711: [.19444, .69444, 0, 0, 1.14999],
                                9824: [.12963, .69444, 0, 0, .89444],
                                9825: [.12963, .69444, 0, 0, .89444],
                                9826: [.12963, .69444, 0, 0, .89444],
                                9827: [.12963, .69444, 0, 0, .89444],
                                9837: [0, .75, 0, 0, .44722],
                                9838: [.19444, .69444, 0, 0, .44722],
                                9839: [.19444, .69444, 0, 0, .44722],
                                10216: [.25, .75, 0, 0, .44722],
                                10217: [.25, .75, 0, 0, .44722],
                                10815: [0, .68611, 0, 0, .9],
                                10927: [.19667, .69667, 0, 0, .89444],
                                10928: [.19667, .69667, 0, 0, .89444],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Main-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .11417, 0, .38611],
                                34: [0, .69444, .07939, 0, .62055],
                                35: [.19444, .69444, .06833, 0, .94444],
                                37: [.05556, .75, .12861, 0, .94444],
                                38: [0, .69444, .08528, 0, .88555],
                                39: [0, .69444, .12945, 0, .35555],
                                40: [.25, .75, .15806, 0, .47333],
                                41: [.25, .75, .03306, 0, .47333],
                                42: [0, .75, .14333, 0, .59111],
                                43: [.10333, .60333, .03306, 0, .88555],
                                44: [.19444, .14722, 0, 0, .35555],
                                45: [0, .44444, .02611, 0, .41444],
                                46: [0, .14722, 0, 0, .35555],
                                47: [.25, .75, .15806, 0, .59111],
                                48: [0, .64444, .13167, 0, .59111],
                                49: [0, .64444, .13167, 0, .59111],
                                50: [0, .64444, .13167, 0, .59111],
                                51: [0, .64444, .13167, 0, .59111],
                                52: [.19444, .64444, .13167, 0, .59111],
                                53: [0, .64444, .13167, 0, .59111],
                                54: [0, .64444, .13167, 0, .59111],
                                55: [.19444, .64444, .13167, 0, .59111],
                                56: [0, .64444, .13167, 0, .59111],
                                57: [0, .64444, .13167, 0, .59111],
                                58: [0, .44444, .06695, 0, .35555],
                                59: [.19444, .44444, .06695, 0, .35555],
                                61: [-.10889, .39111, .06833, 0, .88555],
                                63: [0, .69444, .11472, 0, .59111],
                                64: [0, .69444, .09208, 0, .88555],
                                65: [0, .68611, 0, 0, .86555],
                                66: [0, .68611, .0992, 0, .81666],
                                67: [0, .68611, .14208, 0, .82666],
                                68: [0, .68611, .09062, 0, .87555],
                                69: [0, .68611, .11431, 0, .75666],
                                70: [0, .68611, .12903, 0, .72722],
                                71: [0, .68611, .07347, 0, .89527],
                                72: [0, .68611, .17208, 0, .8961],
                                73: [0, .68611, .15681, 0, .47166],
                                74: [0, .68611, .145, 0, .61055],
                                75: [0, .68611, .14208, 0, .89499],
                                76: [0, .68611, 0, 0, .69777],
                                77: [0, .68611, .17208, 0, 1.07277],
                                78: [0, .68611, .17208, 0, .8961],
                                79: [0, .68611, .09062, 0, .85499],
                                80: [0, .68611, .0992, 0, .78721],
                                81: [.19444, .68611, .09062, 0, .85499],
                                82: [0, .68611, .02559, 0, .85944],
                                83: [0, .68611, .11264, 0, .64999],
                                84: [0, .68611, .12903, 0, .7961],
                                85: [0, .68611, .17208, 0, .88083],
                                86: [0, .68611, .18625, 0, .86555],
                                87: [0, .68611, .18625, 0, 1.15999],
                                88: [0, .68611, .15681, 0, .86555],
                                89: [0, .68611, .19803, 0, .86555],
                                90: [0, .68611, .14208, 0, .70888],
                                91: [.25, .75, .1875, 0, .35611],
                                93: [.25, .75, .09972, 0, .35611],
                                94: [0, .69444, .06709, 0, .59111],
                                95: [.31, .13444, .09811, 0, .59111],
                                97: [0, .44444, .09426, 0, .59111],
                                98: [0, .69444, .07861, 0, .53222],
                                99: [0, .44444, .05222, 0, .53222],
                                100: [0, .69444, .10861, 0, .59111],
                                101: [0, .44444, .085, 0, .53222],
                                102: [.19444, .69444, .21778, 0, .4],
                                103: [.19444, .44444, .105, 0, .53222],
                                104: [0, .69444, .09426, 0, .59111],
                                105: [0, .69326, .11387, 0, .35555],
                                106: [.19444, .69326, .1672, 0, .35555],
                                107: [0, .69444, .11111, 0, .53222],
                                108: [0, .69444, .10861, 0, .29666],
                                109: [0, .44444, .09426, 0, .94444],
                                110: [0, .44444, .09426, 0, .64999],
                                111: [0, .44444, .07861, 0, .59111],
                                112: [.19444, .44444, .07861, 0, .59111],
                                113: [.19444, .44444, .105, 0, .53222],
                                114: [0, .44444, .11111, 0, .50167],
                                115: [0, .44444, .08167, 0, .48694],
                                116: [0, .63492, .09639, 0, .385],
                                117: [0, .44444, .09426, 0, .62055],
                                118: [0, .44444, .11111, 0, .53222],
                                119: [0, .44444, .11111, 0, .76777],
                                120: [0, .44444, .12583, 0, .56055],
                                121: [.19444, .44444, .105, 0, .56166],
                                122: [0, .44444, .13889, 0, .49055],
                                126: [.35, .34444, .11472, 0, .59111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, .11473, 0, .59111],
                                176: [0, .69444, 0, 0, .94888],
                                184: [.17014, 0, 0, 0, .53222],
                                198: [0, .68611, .11431, 0, 1.02277],
                                216: [.04861, .73472, .09062, 0, .88555],
                                223: [.19444, .69444, .09736, 0, .665],
                                230: [0, .44444, .085, 0, .82666],
                                248: [.09722, .54167, .09458, 0, .59111],
                                305: [0, .44444, .09426, 0, .35555],
                                338: [0, .68611, .11431, 0, 1.14054],
                                339: [0, .44444, .085, 0, .82666],
                                567: [.19444, .44444, .04611, 0, .385],
                                710: [0, .69444, .06709, 0, .59111],
                                711: [0, .63194, .08271, 0, .59111],
                                713: [0, .59444, .10444, 0, .59111],
                                714: [0, .69444, .08528, 0, .59111],
                                715: [0, .69444, 0, 0, .59111],
                                728: [0, .69444, .10333, 0, .59111],
                                729: [0, .69444, .12945, 0, .35555],
                                730: [0, .69444, 0, 0, .94888],
                                732: [0, .69444, .11472, 0, .59111],
                                733: [0, .69444, .11472, 0, .59111],
                                915: [0, .68611, .12903, 0, .69777],
                                916: [0, .68611, 0, 0, .94444],
                                920: [0, .68611, .09062, 0, .88555],
                                923: [0, .68611, 0, 0, .80666],
                                926: [0, .68611, .15092, 0, .76777],
                                928: [0, .68611, .17208, 0, .8961],
                                931: [0, .68611, .11431, 0, .82666],
                                933: [0, .68611, .10778, 0, .88555],
                                934: [0, .68611, .05632, 0, .82666],
                                936: [0, .68611, .10778, 0, .88555],
                                937: [0, .68611, .0992, 0, .82666],
                                8211: [0, .44444, .09811, 0, .59111],
                                8212: [0, .44444, .09811, 0, 1.18221],
                                8216: [0, .69444, .12945, 0, .35555],
                                8217: [0, .69444, .12945, 0, .35555],
                                8220: [0, .69444, .16772, 0, .62055],
                                8221: [0, .69444, .07939, 0, .62055]
                            },
                            "Main-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .12417, 0, .30667],
                                34: [0, .69444, .06961, 0, .51444],
                                35: [.19444, .69444, .06616, 0, .81777],
                                37: [.05556, .75, .13639, 0, .81777],
                                38: [0, .69444, .09694, 0, .76666],
                                39: [0, .69444, .12417, 0, .30667],
                                40: [.25, .75, .16194, 0, .40889],
                                41: [.25, .75, .03694, 0, .40889],
                                42: [0, .75, .14917, 0, .51111],
                                43: [.05667, .56167, .03694, 0, .76666],
                                44: [.19444, .10556, 0, 0, .30667],
                                45: [0, .43056, .02826, 0, .35778],
                                46: [0, .10556, 0, 0, .30667],
                                47: [.25, .75, .16194, 0, .51111],
                                48: [0, .64444, .13556, 0, .51111],
                                49: [0, .64444, .13556, 0, .51111],
                                50: [0, .64444, .13556, 0, .51111],
                                51: [0, .64444, .13556, 0, .51111],
                                52: [.19444, .64444, .13556, 0, .51111],
                                53: [0, .64444, .13556, 0, .51111],
                                54: [0, .64444, .13556, 0, .51111],
                                55: [.19444, .64444, .13556, 0, .51111],
                                56: [0, .64444, .13556, 0, .51111],
                                57: [0, .64444, .13556, 0, .51111],
                                58: [0, .43056, .0582, 0, .30667],
                                59: [.19444, .43056, .0582, 0, .30667],
                                61: [-.13313, .36687, .06616, 0, .76666],
                                63: [0, .69444, .1225, 0, .51111],
                                64: [0, .69444, .09597, 0, .76666],
                                65: [0, .68333, 0, 0, .74333],
                                66: [0, .68333, .10257, 0, .70389],
                                67: [0, .68333, .14528, 0, .71555],
                                68: [0, .68333, .09403, 0, .755],
                                69: [0, .68333, .12028, 0, .67833],
                                70: [0, .68333, .13305, 0, .65277],
                                71: [0, .68333, .08722, 0, .77361],
                                72: [0, .68333, .16389, 0, .74333],
                                73: [0, .68333, .15806, 0, .38555],
                                74: [0, .68333, .14028, 0, .525],
                                75: [0, .68333, .14528, 0, .76888],
                                76: [0, .68333, 0, 0, .62722],
                                77: [0, .68333, .16389, 0, .89666],
                                78: [0, .68333, .16389, 0, .74333],
                                79: [0, .68333, .09403, 0, .76666],
                                80: [0, .68333, .10257, 0, .67833],
                                81: [.19444, .68333, .09403, 0, .76666],
                                82: [0, .68333, .03868, 0, .72944],
                                83: [0, .68333, .11972, 0, .56222],
                                84: [0, .68333, .13305, 0, .71555],
                                85: [0, .68333, .16389, 0, .74333],
                                86: [0, .68333, .18361, 0, .74333],
                                87: [0, .68333, .18361, 0, .99888],
                                88: [0, .68333, .15806, 0, .74333],
                                89: [0, .68333, .19383, 0, .74333],
                                90: [0, .68333, .14528, 0, .61333],
                                91: [.25, .75, .1875, 0, .30667],
                                93: [.25, .75, .10528, 0, .30667],
                                94: [0, .69444, .06646, 0, .51111],
                                95: [.31, .12056, .09208, 0, .51111],
                                97: [0, .43056, .07671, 0, .51111],
                                98: [0, .69444, .06312, 0, .46],
                                99: [0, .43056, .05653, 0, .46],
                                100: [0, .69444, .10333, 0, .51111],
                                101: [0, .43056, .07514, 0, .46],
                                102: [.19444, .69444, .21194, 0, .30667],
                                103: [.19444, .43056, .08847, 0, .46],
                                104: [0, .69444, .07671, 0, .51111],
                                105: [0, .65536, .1019, 0, .30667],
                                106: [.19444, .65536, .14467, 0, .30667],
                                107: [0, .69444, .10764, 0, .46],
                                108: [0, .69444, .10333, 0, .25555],
                                109: [0, .43056, .07671, 0, .81777],
                                110: [0, .43056, .07671, 0, .56222],
                                111: [0, .43056, .06312, 0, .51111],
                                112: [.19444, .43056, .06312, 0, .51111],
                                113: [.19444, .43056, .08847, 0, .46],
                                114: [0, .43056, .10764, 0, .42166],
                                115: [0, .43056, .08208, 0, .40889],
                                116: [0, .61508, .09486, 0, .33222],
                                117: [0, .43056, .07671, 0, .53666],
                                118: [0, .43056, .10764, 0, .46],
                                119: [0, .43056, .10764, 0, .66444],
                                120: [0, .43056, .12042, 0, .46389],
                                121: [.19444, .43056, .08847, 0, .48555],
                                122: [0, .43056, .12292, 0, .40889],
                                126: [.35, .31786, .11585, 0, .51111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .66786, .10474, 0, .51111],
                                176: [0, .69444, 0, 0, .83129],
                                184: [.17014, 0, 0, 0, .46],
                                198: [0, .68333, .12028, 0, .88277],
                                216: [.04861, .73194, .09403, 0, .76666],
                                223: [.19444, .69444, .10514, 0, .53666],
                                230: [0, .43056, .07514, 0, .71555],
                                248: [.09722, .52778, .09194, 0, .51111],
                                338: [0, .68333, .12028, 0, .98499],
                                339: [0, .43056, .07514, 0, .71555],
                                710: [0, .69444, .06646, 0, .51111],
                                711: [0, .62847, .08295, 0, .51111],
                                713: [0, .56167, .10333, 0, .51111],
                                714: [0, .69444, .09694, 0, .51111],
                                715: [0, .69444, 0, 0, .51111],
                                728: [0, .69444, .10806, 0, .51111],
                                729: [0, .66786, .11752, 0, .30667],
                                730: [0, .69444, 0, 0, .83129],
                                732: [0, .66786, .11585, 0, .51111],
                                733: [0, .69444, .1225, 0, .51111],
                                915: [0, .68333, .13305, 0, .62722],
                                916: [0, .68333, 0, 0, .81777],
                                920: [0, .68333, .09403, 0, .76666],
                                923: [0, .68333, 0, 0, .69222],
                                926: [0, .68333, .15294, 0, .66444],
                                928: [0, .68333, .16389, 0, .74333],
                                931: [0, .68333, .12028, 0, .71555],
                                933: [0, .68333, .11111, 0, .76666],
                                934: [0, .68333, .05986, 0, .71555],
                                936: [0, .68333, .11111, 0, .76666],
                                937: [0, .68333, .10257, 0, .71555],
                                8211: [0, .43056, .09208, 0, .51111],
                                8212: [0, .43056, .09208, 0, 1.02222],
                                8216: [0, .69444, .12417, 0, .30667],
                                8217: [0, .69444, .12417, 0, .30667],
                                8220: [0, .69444, .1685, 0, .51444],
                                8221: [0, .69444, .06961, 0, .51444],
                                8463: [0, .68889, 0, 0, .54028]
                            },
                            "Main-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .27778],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .77778],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.19444, .10556, 0, 0, .27778],
                                45: [0, .43056, 0, 0, .33333],
                                46: [0, .10556, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .64444, 0, 0, .5],
                                49: [0, .64444, 0, 0, .5],
                                50: [0, .64444, 0, 0, .5],
                                51: [0, .64444, 0, 0, .5],
                                52: [0, .64444, 0, 0, .5],
                                53: [0, .64444, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [0, .64444, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [0, .64444, 0, 0, .5],
                                58: [0, .43056, 0, 0, .27778],
                                59: [.19444, .43056, 0, 0, .27778],
                                60: [.0391, .5391, 0, 0, .77778],
                                61: [-.13313, .36687, 0, 0, .77778],
                                62: [.0391, .5391, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .77778],
                                65: [0, .68333, 0, 0, .75],
                                66: [0, .68333, 0, 0, .70834],
                                67: [0, .68333, 0, 0, .72222],
                                68: [0, .68333, 0, 0, .76389],
                                69: [0, .68333, 0, 0, .68056],
                                70: [0, .68333, 0, 0, .65278],
                                71: [0, .68333, 0, 0, .78472],
                                72: [0, .68333, 0, 0, .75],
                                73: [0, .68333, 0, 0, .36111],
                                74: [0, .68333, 0, 0, .51389],
                                75: [0, .68333, 0, 0, .77778],
                                76: [0, .68333, 0, 0, .625],
                                77: [0, .68333, 0, 0, .91667],
                                78: [0, .68333, 0, 0, .75],
                                79: [0, .68333, 0, 0, .77778],
                                80: [0, .68333, 0, 0, .68056],
                                81: [.19444, .68333, 0, 0, .77778],
                                82: [0, .68333, 0, 0, .73611],
                                83: [0, .68333, 0, 0, .55556],
                                84: [0, .68333, 0, 0, .72222],
                                85: [0, .68333, 0, 0, .75],
                                86: [0, .68333, .01389, 0, .75],
                                87: [0, .68333, .01389, 0, 1.02778],
                                88: [0, .68333, 0, 0, .75],
                                89: [0, .68333, .025, 0, .75],
                                90: [0, .68333, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .27778],
                                92: [.25, .75, 0, 0, .5],
                                93: [.25, .75, 0, 0, .27778],
                                94: [0, .69444, 0, 0, .5],
                                95: [.31, .12056, .02778, 0, .5],
                                97: [0, .43056, 0, 0, .5],
                                98: [0, .69444, 0, 0, .55556],
                                99: [0, .43056, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .55556],
                                101: [0, .43056, 0, 0, .44445],
                                102: [0, .69444, .07778, 0, .30556],
                                103: [.19444, .43056, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .55556],
                                105: [0, .66786, 0, 0, .27778],
                                106: [.19444, .66786, 0, 0, .30556],
                                107: [0, .69444, 0, 0, .52778],
                                108: [0, .69444, 0, 0, .27778],
                                109: [0, .43056, 0, 0, .83334],
                                110: [0, .43056, 0, 0, .55556],
                                111: [0, .43056, 0, 0, .5],
                                112: [.19444, .43056, 0, 0, .55556],
                                113: [.19444, .43056, 0, 0, .52778],
                                114: [0, .43056, 0, 0, .39167],
                                115: [0, .43056, 0, 0, .39445],
                                116: [0, .61508, 0, 0, .38889],
                                117: [0, .43056, 0, 0, .55556],
                                118: [0, .43056, .01389, 0, .52778],
                                119: [0, .43056, .01389, 0, .72222],
                                120: [0, .43056, 0, 0, .52778],
                                121: [.19444, .43056, .01389, 0, .52778],
                                122: [0, .43056, 0, 0, .44445],
                                123: [.25, .75, 0, 0, .5],
                                124: [.25, .75, 0, 0, .27778],
                                125: [.25, .75, 0, 0, .5],
                                126: [.35, .31786, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .76909],
                                167: [.19444, .69444, 0, 0, .44445],
                                168: [0, .66786, 0, 0, .5],
                                172: [0, .43056, 0, 0, .66667],
                                176: [0, .69444, 0, 0, .75],
                                177: [.08333, .58333, 0, 0, .77778],
                                182: [.19444, .69444, 0, 0, .61111],
                                184: [.17014, 0, 0, 0, .44445],
                                198: [0, .68333, 0, 0, .90278],
                                215: [.08333, .58333, 0, 0, .77778],
                                216: [.04861, .73194, 0, 0, .77778],
                                223: [0, .69444, 0, 0, .5],
                                230: [0, .43056, 0, 0, .72222],
                                247: [.08333, .58333, 0, 0, .77778],
                                248: [.09722, .52778, 0, 0, .5],
                                305: [0, .43056, 0, 0, .27778],
                                338: [0, .68333, 0, 0, 1.01389],
                                339: [0, .43056, 0, 0, .77778],
                                567: [.19444, .43056, 0, 0, .30556],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .62847, 0, 0, .5],
                                713: [0, .56778, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .66786, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .75],
                                732: [0, .66786, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .68333, 0, 0, .625],
                                916: [0, .68333, 0, 0, .83334],
                                920: [0, .68333, 0, 0, .77778],
                                923: [0, .68333, 0, 0, .69445],
                                926: [0, .68333, 0, 0, .66667],
                                928: [0, .68333, 0, 0, .75],
                                931: [0, .68333, 0, 0, .72222],
                                933: [0, .68333, 0, 0, .77778],
                                934: [0, .68333, 0, 0, .72222],
                                936: [0, .68333, 0, 0, .77778],
                                937: [0, .68333, 0, 0, .72222],
                                8211: [0, .43056, .02778, 0, .5],
                                8212: [0, .43056, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5],
                                8224: [.19444, .69444, 0, 0, .44445],
                                8225: [.19444, .69444, 0, 0, .44445],
                                8230: [0, .12, 0, 0, 1.172],
                                8242: [0, .55556, 0, 0, .275],
                                8407: [0, .71444, .15382, 0, .5],
                                8463: [0, .68889, 0, 0, .54028],
                                8465: [0, .69444, 0, 0, .72222],
                                8467: [0, .69444, 0, .11111, .41667],
                                8472: [.19444, .43056, 0, .11111, .63646],
                                8476: [0, .69444, 0, 0, .72222],
                                8501: [0, .69444, 0, 0, .61111],
                                8592: [-.13313, .36687, 0, 0, 1],
                                8593: [.19444, .69444, 0, 0, .5],
                                8594: [-.13313, .36687, 0, 0, 1],
                                8595: [.19444, .69444, 0, 0, .5],
                                8596: [-.13313, .36687, 0, 0, 1],
                                8597: [.25, .75, 0, 0, .5],
                                8598: [.19444, .69444, 0, 0, 1],
                                8599: [.19444, .69444, 0, 0, 1],
                                8600: [.19444, .69444, 0, 0, 1],
                                8601: [.19444, .69444, 0, 0, 1],
                                8614: [.011, .511, 0, 0, 1],
                                8617: [.011, .511, 0, 0, 1.126],
                                8618: [.011, .511, 0, 0, 1.126],
                                8636: [-.13313, .36687, 0, 0, 1],
                                8637: [-.13313, .36687, 0, 0, 1],
                                8640: [-.13313, .36687, 0, 0, 1],
                                8641: [-.13313, .36687, 0, 0, 1],
                                8652: [.011, .671, 0, 0, 1],
                                8656: [-.13313, .36687, 0, 0, 1],
                                8657: [.19444, .69444, 0, 0, .61111],
                                8658: [-.13313, .36687, 0, 0, 1],
                                8659: [.19444, .69444, 0, 0, .61111],
                                8660: [-.13313, .36687, 0, 0, 1],
                                8661: [.25, .75, 0, 0, .61111],
                                8704: [0, .69444, 0, 0, .55556],
                                8706: [0, .69444, .05556, .08334, .5309],
                                8707: [0, .69444, 0, 0, .55556],
                                8709: [.05556, .75, 0, 0, .5],
                                8711: [0, .68333, 0, 0, .83334],
                                8712: [.0391, .5391, 0, 0, .66667],
                                8715: [.0391, .5391, 0, 0, .66667],
                                8722: [.08333, .58333, 0, 0, .77778],
                                8723: [.08333, .58333, 0, 0, .77778],
                                8725: [.25, .75, 0, 0, .5],
                                8726: [.25, .75, 0, 0, .5],
                                8727: [-.03472, .46528, 0, 0, .5],
                                8728: [-.05555, .44445, 0, 0, .5],
                                8729: [-.05555, .44445, 0, 0, .5],
                                8730: [.2, .8, 0, 0, .83334],
                                8733: [0, .43056, 0, 0, .77778],
                                8734: [0, .43056, 0, 0, 1],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .27778],
                                8741: [.25, .75, 0, 0, .5],
                                8743: [0, .55556, 0, 0, .66667],
                                8744: [0, .55556, 0, 0, .66667],
                                8745: [0, .55556, 0, 0, .66667],
                                8746: [0, .55556, 0, 0, .66667],
                                8747: [.19444, .69444, .11111, 0, .41667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8768: [.19444, .69444, 0, 0, .27778],
                                8771: [-.03625, .46375, 0, 0, .77778],
                                8773: [-.022, .589, 0, 0, 1],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8781: [-.03625, .46375, 0, 0, .77778],
                                8784: [-.133, .67, 0, 0, .778],
                                8801: [-.03625, .46375, 0, 0, .77778],
                                8804: [.13597, .63597, 0, 0, .77778],
                                8805: [.13597, .63597, 0, 0, .77778],
                                8810: [.0391, .5391, 0, 0, 1],
                                8811: [.0391, .5391, 0, 0, 1],
                                8826: [.0391, .5391, 0, 0, .77778],
                                8827: [.0391, .5391, 0, 0, .77778],
                                8834: [.0391, .5391, 0, 0, .77778],
                                8835: [.0391, .5391, 0, 0, .77778],
                                8838: [.13597, .63597, 0, 0, .77778],
                                8839: [.13597, .63597, 0, 0, .77778],
                                8846: [0, .55556, 0, 0, .66667],
                                8849: [.13597, .63597, 0, 0, .77778],
                                8850: [.13597, .63597, 0, 0, .77778],
                                8851: [0, .55556, 0, 0, .66667],
                                8852: [0, .55556, 0, 0, .66667],
                                8853: [.08333, .58333, 0, 0, .77778],
                                8854: [.08333, .58333, 0, 0, .77778],
                                8855: [.08333, .58333, 0, 0, .77778],
                                8856: [.08333, .58333, 0, 0, .77778],
                                8857: [.08333, .58333, 0, 0, .77778],
                                8866: [0, .69444, 0, 0, .61111],
                                8867: [0, .69444, 0, 0, .61111],
                                8868: [0, .69444, 0, 0, .77778],
                                8869: [0, .69444, 0, 0, .77778],
                                8872: [.249, .75, 0, 0, .867],
                                8900: [-.05555, .44445, 0, 0, .5],
                                8901: [-.05555, .44445, 0, 0, .27778],
                                8902: [-.03472, .46528, 0, 0, .5],
                                8904: [.005, .505, 0, 0, .9],
                                8942: [.03, .9, 0, 0, .278],
                                8943: [-.19, .31, 0, 0, 1.172],
                                8945: [-.1, .82, 0, 0, 1.282],
                                8968: [.25, .75, 0, 0, .44445],
                                8969: [.25, .75, 0, 0, .44445],
                                8970: [.25, .75, 0, 0, .44445],
                                8971: [.25, .75, 0, 0, .44445],
                                8994: [-.14236, .35764, 0, 0, 1],
                                8995: [-.14236, .35764, 0, 0, 1],
                                9136: [.244, .744, 0, 0, .412],
                                9137: [.244, .744, 0, 0, .412],
                                9651: [.19444, .69444, 0, 0, .88889],
                                9657: [-.03472, .46528, 0, 0, .5],
                                9661: [.19444, .69444, 0, 0, .88889],
                                9667: [-.03472, .46528, 0, 0, .5],
                                9711: [.19444, .69444, 0, 0, 1],
                                9824: [.12963, .69444, 0, 0, .77778],
                                9825: [.12963, .69444, 0, 0, .77778],
                                9826: [.12963, .69444, 0, 0, .77778],
                                9827: [.12963, .69444, 0, 0, .77778],
                                9837: [0, .75, 0, 0, .38889],
                                9838: [.19444, .69444, 0, 0, .38889],
                                9839: [.19444, .69444, 0, 0, .38889],
                                10216: [.25, .75, 0, 0, .38889],
                                10217: [.25, .75, 0, 0, .38889],
                                10222: [.244, .744, 0, 0, .412],
                                10223: [.244, .744, 0, 0, .412],
                                10229: [.011, .511, 0, 0, 1.609],
                                10230: [.011, .511, 0, 0, 1.638],
                                10231: [.011, .511, 0, 0, 1.859],
                                10232: [.024, .525, 0, 0, 1.609],
                                10233: [.024, .525, 0, 0, 1.638],
                                10234: [.024, .525, 0, 0, 1.858],
                                10236: [.011, .511, 0, 0, 1.638],
                                10815: [0, .68333, 0, 0, .75],
                                10927: [.13597, .63597, 0, 0, .77778],
                                10928: [.13597, .63597, 0, 0, .77778],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Math-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .44444, 0, 0, .575],
                                49: [0, .44444, 0, 0, .575],
                                50: [0, .44444, 0, 0, .575],
                                51: [.19444, .44444, 0, 0, .575],
                                52: [.19444, .44444, 0, 0, .575],
                                53: [.19444, .44444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [.19444, .44444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [.19444, .44444, 0, 0, .575],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, .04835, 0, .8664],
                                67: [0, .68611, .06979, 0, .81694],
                                68: [0, .68611, .03194, 0, .93812],
                                69: [0, .68611, .05451, 0, .81007],
                                70: [0, .68611, .15972, 0, .68889],
                                71: [0, .68611, 0, 0, .88673],
                                72: [0, .68611, .08229, 0, .98229],
                                73: [0, .68611, .07778, 0, .51111],
                                74: [0, .68611, .10069, 0, .63125],
                                75: [0, .68611, .06979, 0, .97118],
                                76: [0, .68611, 0, 0, .75555],
                                77: [0, .68611, .11424, 0, 1.14201],
                                78: [0, .68611, .11424, 0, .95034],
                                79: [0, .68611, .03194, 0, .83666],
                                80: [0, .68611, .15972, 0, .72309],
                                81: [.19444, .68611, 0, 0, .86861],
                                82: [0, .68611, .00421, 0, .87235],
                                83: [0, .68611, .05382, 0, .69271],
                                84: [0, .68611, .15972, 0, .63663],
                                85: [0, .68611, .11424, 0, .80027],
                                86: [0, .68611, .25555, 0, .67778],
                                87: [0, .68611, .15972, 0, 1.09305],
                                88: [0, .68611, .07778, 0, .94722],
                                89: [0, .68611, .25555, 0, .67458],
                                90: [0, .68611, .06979, 0, .77257],
                                97: [0, .44444, 0, 0, .63287],
                                98: [0, .69444, 0, 0, .52083],
                                99: [0, .44444, 0, 0, .51342],
                                100: [0, .69444, 0, 0, .60972],
                                101: [0, .44444, 0, 0, .55361],
                                102: [.19444, .69444, .11042, 0, .56806],
                                103: [.19444, .44444, .03704, 0, .5449],
                                104: [0, .69444, 0, 0, .66759],
                                105: [0, .69326, 0, 0, .4048],
                                106: [.19444, .69326, .0622, 0, .47083],
                                107: [0, .69444, .01852, 0, .6037],
                                108: [0, .69444, .0088, 0, .34815],
                                109: [0, .44444, 0, 0, 1.0324],
                                110: [0, .44444, 0, 0, .71296],
                                111: [0, .44444, 0, 0, .58472],
                                112: [.19444, .44444, 0, 0, .60092],
                                113: [.19444, .44444, .03704, 0, .54213],
                                114: [0, .44444, .03194, 0, .5287],
                                115: [0, .44444, 0, 0, .53125],
                                116: [0, .63492, 0, 0, .41528],
                                117: [0, .44444, 0, 0, .68102],
                                118: [0, .44444, .03704, 0, .56666],
                                119: [0, .44444, .02778, 0, .83148],
                                120: [0, .44444, 0, 0, .65903],
                                121: [.19444, .44444, .03704, 0, .59028],
                                122: [0, .44444, .04213, 0, .55509],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68611, .15972, 0, .65694],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, .03194, 0, .86722],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, .07458, 0, .84125],
                                928: [0, .68611, .08229, 0, .98229],
                                931: [0, .68611, .05451, 0, .88507],
                                933: [0, .68611, .15972, 0, .67083],
                                934: [0, .68611, 0, 0, .76666],
                                936: [0, .68611, .11653, 0, .71402],
                                937: [0, .68611, .04835, 0, .8789],
                                945: [0, .44444, 0, 0, .76064],
                                946: [.19444, .69444, .03403, 0, .65972],
                                947: [.19444, .44444, .06389, 0, .59003],
                                948: [0, .69444, .03819, 0, .52222],
                                949: [0, .44444, 0, 0, .52882],
                                950: [.19444, .69444, .06215, 0, .50833],
                                951: [.19444, .44444, .03704, 0, .6],
                                952: [0, .69444, .03194, 0, .5618],
                                953: [0, .44444, 0, 0, .41204],
                                954: [0, .44444, 0, 0, .66759],
                                955: [0, .69444, 0, 0, .67083],
                                956: [.19444, .44444, 0, 0, .70787],
                                957: [0, .44444, .06898, 0, .57685],
                                958: [.19444, .69444, .03021, 0, .50833],
                                959: [0, .44444, 0, 0, .58472],
                                960: [0, .44444, .03704, 0, .68241],
                                961: [.19444, .44444, 0, 0, .6118],
                                962: [.09722, .44444, .07917, 0, .42361],
                                963: [0, .44444, .03704, 0, .68588],
                                964: [0, .44444, .13472, 0, .52083],
                                965: [0, .44444, .03704, 0, .63055],
                                966: [.19444, .44444, 0, 0, .74722],
                                967: [.19444, .44444, 0, 0, .71805],
                                968: [.19444, .69444, .03704, 0, .75833],
                                969: [0, .44444, .03704, 0, .71782],
                                977: [0, .69444, 0, 0, .69155],
                                981: [.19444, .69444, 0, 0, .7125],
                                982: [0, .44444, .03194, 0, .975],
                                1009: [.19444, .44444, 0, 0, .6118],
                                1013: [0, .44444, 0, 0, .48333],
                                57649: [0, .44444, 0, 0, .39352],
                                57911: [.19444, .44444, 0, 0, .43889]
                            },
                            "Math-Italic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .43056, 0, 0, .5],
                                49: [0, .43056, 0, 0, .5],
                                50: [0, .43056, 0, 0, .5],
                                51: [.19444, .43056, 0, 0, .5],
                                52: [.19444, .43056, 0, 0, .5],
                                53: [.19444, .43056, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [.19444, .43056, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [.19444, .43056, 0, 0, .5],
                                65: [0, .68333, 0, .13889, .75],
                                66: [0, .68333, .05017, .08334, .75851],
                                67: [0, .68333, .07153, .08334, .71472],
                                68: [0, .68333, .02778, .05556, .82792],
                                69: [0, .68333, .05764, .08334, .7382],
                                70: [0, .68333, .13889, .08334, .64306],
                                71: [0, .68333, 0, .08334, .78625],
                                72: [0, .68333, .08125, .05556, .83125],
                                73: [0, .68333, .07847, .11111, .43958],
                                74: [0, .68333, .09618, .16667, .55451],
                                75: [0, .68333, .07153, .05556, .84931],
                                76: [0, .68333, 0, .02778, .68056],
                                77: [0, .68333, .10903, .08334, .97014],
                                78: [0, .68333, .10903, .08334, .80347],
                                79: [0, .68333, .02778, .08334, .76278],
                                80: [0, .68333, .13889, .08334, .64201],
                                81: [.19444, .68333, 0, .08334, .79056],
                                82: [0, .68333, .00773, .08334, .75929],
                                83: [0, .68333, .05764, .08334, .6132],
                                84: [0, .68333, .13889, .08334, .58438],
                                85: [0, .68333, .10903, .02778, .68278],
                                86: [0, .68333, .22222, 0, .58333],
                                87: [0, .68333, .13889, 0, .94445],
                                88: [0, .68333, .07847, .08334, .82847],
                                89: [0, .68333, .22222, 0, .58056],
                                90: [0, .68333, .07153, .08334, .68264],
                                97: [0, .43056, 0, 0, .52859],
                                98: [0, .69444, 0, 0, .42917],
                                99: [0, .43056, 0, .05556, .43276],
                                100: [0, .69444, 0, .16667, .52049],
                                101: [0, .43056, 0, .05556, .46563],
                                102: [.19444, .69444, .10764, .16667, .48959],
                                103: [.19444, .43056, .03588, .02778, .47697],
                                104: [0, .69444, 0, 0, .57616],
                                105: [0, .65952, 0, 0, .34451],
                                106: [.19444, .65952, .05724, 0, .41181],
                                107: [0, .69444, .03148, 0, .5206],
                                108: [0, .69444, .01968, .08334, .29838],
                                109: [0, .43056, 0, 0, .87801],
                                110: [0, .43056, 0, 0, .60023],
                                111: [0, .43056, 0, .05556, .48472],
                                112: [.19444, .43056, 0, .08334, .50313],
                                113: [.19444, .43056, .03588, .08334, .44641],
                                114: [0, .43056, .02778, .05556, .45116],
                                115: [0, .43056, 0, .05556, .46875],
                                116: [0, .61508, 0, .08334, .36111],
                                117: [0, .43056, 0, .02778, .57246],
                                118: [0, .43056, .03588, .02778, .48472],
                                119: [0, .43056, .02691, .08334, .71592],
                                120: [0, .43056, 0, .02778, .57153],
                                121: [.19444, .43056, .03588, .05556, .49028],
                                122: [0, .43056, .04398, .05556, .46505],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68333, .13889, .08334, .61528],
                                916: [0, .68333, 0, .16667, .83334],
                                920: [0, .68333, .02778, .08334, .76278],
                                923: [0, .68333, 0, .16667, .69445],
                                926: [0, .68333, .07569, .08334, .74236],
                                928: [0, .68333, .08125, .05556, .83125],
                                931: [0, .68333, .05764, .08334, .77986],
                                933: [0, .68333, .13889, .05556, .58333],
                                934: [0, .68333, 0, .08334, .66667],
                                936: [0, .68333, .11, .05556, .61222],
                                937: [0, .68333, .05017, .08334, .7724],
                                945: [0, .43056, .0037, .02778, .6397],
                                946: [.19444, .69444, .05278, .08334, .56563],
                                947: [.19444, .43056, .05556, 0, .51773],
                                948: [0, .69444, .03785, .05556, .44444],
                                949: [0, .43056, 0, .08334, .46632],
                                950: [.19444, .69444, .07378, .08334, .4375],
                                951: [.19444, .43056, .03588, .05556, .49653],
                                952: [0, .69444, .02778, .08334, .46944],
                                953: [0, .43056, 0, .05556, .35394],
                                954: [0, .43056, 0, 0, .57616],
                                955: [0, .69444, 0, 0, .58334],
                                956: [.19444, .43056, 0, .02778, .60255],
                                957: [0, .43056, .06366, .02778, .49398],
                                958: [.19444, .69444, .04601, .11111, .4375],
                                959: [0, .43056, 0, .05556, .48472],
                                960: [0, .43056, .03588, 0, .57003],
                                961: [.19444, .43056, 0, .08334, .51702],
                                962: [.09722, .43056, .07986, .08334, .36285],
                                963: [0, .43056, .03588, 0, .57141],
                                964: [0, .43056, .1132, .02778, .43715],
                                965: [0, .43056, .03588, .02778, .54028],
                                966: [.19444, .43056, 0, .08334, .65417],
                                967: [.19444, .43056, 0, .05556, .62569],
                                968: [.19444, .69444, .03588, .11111, .65139],
                                969: [0, .43056, .03588, 0, .62245],
                                977: [0, .69444, 0, .08334, .59144],
                                981: [.19444, .69444, 0, .08334, .59583],
                                982: [0, .43056, .02778, 0, .82813],
                                1009: [.19444, .43056, 0, .08334, .51702],
                                1013: [0, .43056, 0, .05556, .4059],
                                57649: [0, .43056, 0, .02778, .32246],
                                57911: [.19444, .43056, 0, .08334, .38403]
                            },
                            "SansSerif-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .36667],
                                34: [0, .69444, 0, 0, .55834],
                                35: [.19444, .69444, 0, 0, .91667],
                                36: [.05556, .75, 0, 0, .55],
                                37: [.05556, .75, 0, 0, 1.02912],
                                38: [0, .69444, 0, 0, .83056],
                                39: [0, .69444, 0, 0, .30556],
                                40: [.25, .75, 0, 0, .42778],
                                41: [.25, .75, 0, 0, .42778],
                                42: [0, .75, 0, 0, .55],
                                43: [.11667, .61667, 0, 0, .85556],
                                44: [.10556, .13056, 0, 0, .30556],
                                45: [0, .45833, 0, 0, .36667],
                                46: [0, .13056, 0, 0, .30556],
                                47: [.25, .75, 0, 0, .55],
                                48: [0, .69444, 0, 0, .55],
                                49: [0, .69444, 0, 0, .55],
                                50: [0, .69444, 0, 0, .55],
                                51: [0, .69444, 0, 0, .55],
                                52: [0, .69444, 0, 0, .55],
                                53: [0, .69444, 0, 0, .55],
                                54: [0, .69444, 0, 0, .55],
                                55: [0, .69444, 0, 0, .55],
                                56: [0, .69444, 0, 0, .55],
                                57: [0, .69444, 0, 0, .55],
                                58: [0, .45833, 0, 0, .30556],
                                59: [.10556, .45833, 0, 0, .30556],
                                61: [-.09375, .40625, 0, 0, .85556],
                                63: [0, .69444, 0, 0, .51945],
                                64: [0, .69444, 0, 0, .73334],
                                65: [0, .69444, 0, 0, .73334],
                                66: [0, .69444, 0, 0, .73334],
                                67: [0, .69444, 0, 0, .70278],
                                68: [0, .69444, 0, 0, .79445],
                                69: [0, .69444, 0, 0, .64167],
                                70: [0, .69444, 0, 0, .61111],
                                71: [0, .69444, 0, 0, .73334],
                                72: [0, .69444, 0, 0, .79445],
                                73: [0, .69444, 0, 0, .33056],
                                74: [0, .69444, 0, 0, .51945],
                                75: [0, .69444, 0, 0, .76389],
                                76: [0, .69444, 0, 0, .58056],
                                77: [0, .69444, 0, 0, .97778],
                                78: [0, .69444, 0, 0, .79445],
                                79: [0, .69444, 0, 0, .79445],
                                80: [0, .69444, 0, 0, .70278],
                                81: [.10556, .69444, 0, 0, .79445],
                                82: [0, .69444, 0, 0, .70278],
                                83: [0, .69444, 0, 0, .61111],
                                84: [0, .69444, 0, 0, .73334],
                                85: [0, .69444, 0, 0, .76389],
                                86: [0, .69444, .01528, 0, .73334],
                                87: [0, .69444, .01528, 0, 1.03889],
                                88: [0, .69444, 0, 0, .73334],
                                89: [0, .69444, .0275, 0, .73334],
                                90: [0, .69444, 0, 0, .67223],
                                91: [.25, .75, 0, 0, .34306],
                                93: [.25, .75, 0, 0, .34306],
                                94: [0, .69444, 0, 0, .55],
                                95: [.35, .10833, .03056, 0, .55],
                                97: [0, .45833, 0, 0, .525],
                                98: [0, .69444, 0, 0, .56111],
                                99: [0, .45833, 0, 0, .48889],
                                100: [0, .69444, 0, 0, .56111],
                                101: [0, .45833, 0, 0, .51111],
                                102: [0, .69444, .07639, 0, .33611],
                                103: [.19444, .45833, .01528, 0, .55],
                                104: [0, .69444, 0, 0, .56111],
                                105: [0, .69444, 0, 0, .25556],
                                106: [.19444, .69444, 0, 0, .28611],
                                107: [0, .69444, 0, 0, .53056],
                                108: [0, .69444, 0, 0, .25556],
                                109: [0, .45833, 0, 0, .86667],
                                110: [0, .45833, 0, 0, .56111],
                                111: [0, .45833, 0, 0, .55],
                                112: [.19444, .45833, 0, 0, .56111],
                                113: [.19444, .45833, 0, 0, .56111],
                                114: [0, .45833, .01528, 0, .37222],
                                115: [0, .45833, 0, 0, .42167],
                                116: [0, .58929, 0, 0, .40417],
                                117: [0, .45833, 0, 0, .56111],
                                118: [0, .45833, .01528, 0, .5],
                                119: [0, .45833, .01528, 0, .74445],
                                120: [0, .45833, 0, 0, .5],
                                121: [.19444, .45833, .01528, 0, .5],
                                122: [0, .45833, 0, 0, .47639],
                                126: [.35, .34444, 0, 0, .55],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, 0, 0, .55],
                                176: [0, .69444, 0, 0, .73334],
                                180: [0, .69444, 0, 0, .55],
                                184: [.17014, 0, 0, 0, .48889],
                                305: [0, .45833, 0, 0, .25556],
                                567: [.19444, .45833, 0, 0, .28611],
                                710: [0, .69444, 0, 0, .55],
                                711: [0, .63542, 0, 0, .55],
                                713: [0, .63778, 0, 0, .55],
                                728: [0, .69444, 0, 0, .55],
                                729: [0, .69444, 0, 0, .30556],
                                730: [0, .69444, 0, 0, .73334],
                                732: [0, .69444, 0, 0, .55],
                                733: [0, .69444, 0, 0, .55],
                                915: [0, .69444, 0, 0, .58056],
                                916: [0, .69444, 0, 0, .91667],
                                920: [0, .69444, 0, 0, .85556],
                                923: [0, .69444, 0, 0, .67223],
                                926: [0, .69444, 0, 0, .73334],
                                928: [0, .69444, 0, 0, .79445],
                                931: [0, .69444, 0, 0, .79445],
                                933: [0, .69444, 0, 0, .85556],
                                934: [0, .69444, 0, 0, .79445],
                                936: [0, .69444, 0, 0, .85556],
                                937: [0, .69444, 0, 0, .79445],
                                8211: [0, .45833, .03056, 0, .55],
                                8212: [0, .45833, .03056, 0, 1.10001],
                                8216: [0, .69444, 0, 0, .30556],
                                8217: [0, .69444, 0, 0, .30556],
                                8220: [0, .69444, 0, 0, .55834],
                                8221: [0, .69444, 0, 0, .55834]
                            },
                            "SansSerif-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .05733, 0, .31945],
                                34: [0, .69444, .00316, 0, .5],
                                35: [.19444, .69444, .05087, 0, .83334],
                                36: [.05556, .75, .11156, 0, .5],
                                37: [.05556, .75, .03126, 0, .83334],
                                38: [0, .69444, .03058, 0, .75834],
                                39: [0, .69444, .07816, 0, .27778],
                                40: [.25, .75, .13164, 0, .38889],
                                41: [.25, .75, .02536, 0, .38889],
                                42: [0, .75, .11775, 0, .5],
                                43: [.08333, .58333, .02536, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, .01946, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, .13164, 0, .5],
                                48: [0, .65556, .11156, 0, .5],
                                49: [0, .65556, .11156, 0, .5],
                                50: [0, .65556, .11156, 0, .5],
                                51: [0, .65556, .11156, 0, .5],
                                52: [0, .65556, .11156, 0, .5],
                                53: [0, .65556, .11156, 0, .5],
                                54: [0, .65556, .11156, 0, .5],
                                55: [0, .65556, .11156, 0, .5],
                                56: [0, .65556, .11156, 0, .5],
                                57: [0, .65556, .11156, 0, .5],
                                58: [0, .44444, .02502, 0, .27778],
                                59: [.125, .44444, .02502, 0, .27778],
                                61: [-.13, .37, .05087, 0, .77778],
                                63: [0, .69444, .11809, 0, .47222],
                                64: [0, .69444, .07555, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, .08293, 0, .66667],
                                67: [0, .69444, .11983, 0, .63889],
                                68: [0, .69444, .07555, 0, .72223],
                                69: [0, .69444, .11983, 0, .59722],
                                70: [0, .69444, .13372, 0, .56945],
                                71: [0, .69444, .11983, 0, .66667],
                                72: [0, .69444, .08094, 0, .70834],
                                73: [0, .69444, .13372, 0, .27778],
                                74: [0, .69444, .08094, 0, .47222],
                                75: [0, .69444, .11983, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, .08094, 0, .875],
                                78: [0, .69444, .08094, 0, .70834],
                                79: [0, .69444, .07555, 0, .73611],
                                80: [0, .69444, .08293, 0, .63889],
                                81: [.125, .69444, .07555, 0, .73611],
                                82: [0, .69444, .08293, 0, .64584],
                                83: [0, .69444, .09205, 0, .55556],
                                84: [0, .69444, .13372, 0, .68056],
                                85: [0, .69444, .08094, 0, .6875],
                                86: [0, .69444, .1615, 0, .66667],
                                87: [0, .69444, .1615, 0, .94445],
                                88: [0, .69444, .13372, 0, .66667],
                                89: [0, .69444, .17261, 0, .66667],
                                90: [0, .69444, .11983, 0, .61111],
                                91: [.25, .75, .15942, 0, .28889],
                                93: [.25, .75, .08719, 0, .28889],
                                94: [0, .69444, .0799, 0, .5],
                                95: [.35, .09444, .08616, 0, .5],
                                97: [0, .44444, .00981, 0, .48056],
                                98: [0, .69444, .03057, 0, .51667],
                                99: [0, .44444, .08336, 0, .44445],
                                100: [0, .69444, .09483, 0, .51667],
                                101: [0, .44444, .06778, 0, .44445],
                                102: [0, .69444, .21705, 0, .30556],
                                103: [.19444, .44444, .10836, 0, .5],
                                104: [0, .69444, .01778, 0, .51667],
                                105: [0, .67937, .09718, 0, .23889],
                                106: [.19444, .67937, .09162, 0, .26667],
                                107: [0, .69444, .08336, 0, .48889],
                                108: [0, .69444, .09483, 0, .23889],
                                109: [0, .44444, .01778, 0, .79445],
                                110: [0, .44444, .01778, 0, .51667],
                                111: [0, .44444, .06613, 0, .5],
                                112: [.19444, .44444, .0389, 0, .51667],
                                113: [.19444, .44444, .04169, 0, .51667],
                                114: [0, .44444, .10836, 0, .34167],
                                115: [0, .44444, .0778, 0, .38333],
                                116: [0, .57143, .07225, 0, .36111],
                                117: [0, .44444, .04169, 0, .51667],
                                118: [0, .44444, .10836, 0, .46111],
                                119: [0, .44444, .10836, 0, .68334],
                                120: [0, .44444, .09169, 0, .46111],
                                121: [.19444, .44444, .10836, 0, .46111],
                                122: [0, .44444, .08752, 0, .43472],
                                126: [.35, .32659, .08826, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, .06385, 0, .5],
                                176: [0, .69444, 0, 0, .73752],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, .04169, 0, .23889],
                                567: [.19444, .44444, .04169, 0, .26667],
                                710: [0, .69444, .0799, 0, .5],
                                711: [0, .63194, .08432, 0, .5],
                                713: [0, .60889, .08776, 0, .5],
                                714: [0, .69444, .09205, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, .09483, 0, .5],
                                729: [0, .67937, .07774, 0, .27778],
                                730: [0, .69444, 0, 0, .73752],
                                732: [0, .67659, .08826, 0, .5],
                                733: [0, .69444, .09205, 0, .5],
                                915: [0, .69444, .13372, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, .07555, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, .12816, 0, .66667],
                                928: [0, .69444, .08094, 0, .70834],
                                931: [0, .69444, .11983, 0, .72222],
                                933: [0, .69444, .09031, 0, .77778],
                                934: [0, .69444, .04603, 0, .72222],
                                936: [0, .69444, .09031, 0, .77778],
                                937: [0, .69444, .08293, 0, .72222],
                                8211: [0, .44444, .08616, 0, .5],
                                8212: [0, .44444, .08616, 0, 1],
                                8216: [0, .69444, .07816, 0, .27778],
                                8217: [0, .69444, .07816, 0, .27778],
                                8220: [0, .69444, .14205, 0, .5],
                                8221: [0, .69444, .00316, 0, .5]
                            },
                            "SansSerif-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .31945],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .75834],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, 0, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .65556, 0, 0, .5],
                                49: [0, .65556, 0, 0, .5],
                                50: [0, .65556, 0, 0, .5],
                                51: [0, .65556, 0, 0, .5],
                                52: [0, .65556, 0, 0, .5],
                                53: [0, .65556, 0, 0, .5],
                                54: [0, .65556, 0, 0, .5],
                                55: [0, .65556, 0, 0, .5],
                                56: [0, .65556, 0, 0, .5],
                                57: [0, .65556, 0, 0, .5],
                                58: [0, .44444, 0, 0, .27778],
                                59: [.125, .44444, 0, 0, .27778],
                                61: [-.13, .37, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, 0, 0, .66667],
                                67: [0, .69444, 0, 0, .63889],
                                68: [0, .69444, 0, 0, .72223],
                                69: [0, .69444, 0, 0, .59722],
                                70: [0, .69444, 0, 0, .56945],
                                71: [0, .69444, 0, 0, .66667],
                                72: [0, .69444, 0, 0, .70834],
                                73: [0, .69444, 0, 0, .27778],
                                74: [0, .69444, 0, 0, .47222],
                                75: [0, .69444, 0, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, 0, 0, .875],
                                78: [0, .69444, 0, 0, .70834],
                                79: [0, .69444, 0, 0, .73611],
                                80: [0, .69444, 0, 0, .63889],
                                81: [.125, .69444, 0, 0, .73611],
                                82: [0, .69444, 0, 0, .64584],
                                83: [0, .69444, 0, 0, .55556],
                                84: [0, .69444, 0, 0, .68056],
                                85: [0, .69444, 0, 0, .6875],
                                86: [0, .69444, .01389, 0, .66667],
                                87: [0, .69444, .01389, 0, .94445],
                                88: [0, .69444, 0, 0, .66667],
                                89: [0, .69444, .025, 0, .66667],
                                90: [0, .69444, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .28889],
                                93: [.25, .75, 0, 0, .28889],
                                94: [0, .69444, 0, 0, .5],
                                95: [.35, .09444, .02778, 0, .5],
                                97: [0, .44444, 0, 0, .48056],
                                98: [0, .69444, 0, 0, .51667],
                                99: [0, .44444, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .51667],
                                101: [0, .44444, 0, 0, .44445],
                                102: [0, .69444, .06944, 0, .30556],
                                103: [.19444, .44444, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .51667],
                                105: [0, .67937, 0, 0, .23889],
                                106: [.19444, .67937, 0, 0, .26667],
                                107: [0, .69444, 0, 0, .48889],
                                108: [0, .69444, 0, 0, .23889],
                                109: [0, .44444, 0, 0, .79445],
                                110: [0, .44444, 0, 0, .51667],
                                111: [0, .44444, 0, 0, .5],
                                112: [.19444, .44444, 0, 0, .51667],
                                113: [.19444, .44444, 0, 0, .51667],
                                114: [0, .44444, .01389, 0, .34167],
                                115: [0, .44444, 0, 0, .38333],
                                116: [0, .57143, 0, 0, .36111],
                                117: [0, .44444, 0, 0, .51667],
                                118: [0, .44444, .01389, 0, .46111],
                                119: [0, .44444, .01389, 0, .68334],
                                120: [0, .44444, 0, 0, .46111],
                                121: [.19444, .44444, .01389, 0, .46111],
                                122: [0, .44444, 0, 0, .43472],
                                126: [.35, .32659, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, 0, 0, .5],
                                176: [0, .69444, 0, 0, .66667],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, 0, 0, .23889],
                                567: [.19444, .44444, 0, 0, .26667],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .63194, 0, 0, .5],
                                713: [0, .60889, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .67937, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .66667],
                                732: [0, .67659, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .69444, 0, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, 0, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, 0, 0, .66667],
                                928: [0, .69444, 0, 0, .70834],
                                931: [0, .69444, 0, 0, .72222],
                                933: [0, .69444, 0, 0, .77778],
                                934: [0, .69444, 0, 0, .72222],
                                936: [0, .69444, 0, 0, .77778],
                                937: [0, .69444, 0, 0, .72222],
                                8211: [0, .44444, .02778, 0, .5],
                                8212: [0, .44444, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5]
                            },
                            "Script-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .7, .22925, 0, .80253],
                                66: [0, .7, .04087, 0, .90757],
                                67: [0, .7, .1689, 0, .66619],
                                68: [0, .7, .09371, 0, .77443],
                                69: [0, .7, .18583, 0, .56162],
                                70: [0, .7, .13634, 0, .89544],
                                71: [0, .7, .17322, 0, .60961],
                                72: [0, .7, .29694, 0, .96919],
                                73: [0, .7, .19189, 0, .80907],
                                74: [.27778, .7, .19189, 0, 1.05159],
                                75: [0, .7, .31259, 0, .91364],
                                76: [0, .7, .19189, 0, .87373],
                                77: [0, .7, .15981, 0, 1.08031],
                                78: [0, .7, .3525, 0, .9015],
                                79: [0, .7, .08078, 0, .73787],
                                80: [0, .7, .08078, 0, 1.01262],
                                81: [0, .7, .03305, 0, .88282],
                                82: [0, .7, .06259, 0, .85],
                                83: [0, .7, .19189, 0, .86767],
                                84: [0, .7, .29087, 0, .74697],
                                85: [0, .7, .25815, 0, .79996],
                                86: [0, .7, .27523, 0, .62204],
                                87: [0, .7, .27523, 0, .80532],
                                88: [0, .7, .26006, 0, .94445],
                                89: [0, .7, .2939, 0, .70961],
                                90: [0, .7, .24037, 0, .8212],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Size1-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.35001, .85, 0, 0, .45834],
                                41: [.35001, .85, 0, 0, .45834],
                                47: [.35001, .85, 0, 0, .57778],
                                91: [.35001, .85, 0, 0, .41667],
                                92: [.35001, .85, 0, 0, .57778],
                                93: [.35001, .85, 0, 0, .41667],
                                123: [.35001, .85, 0, 0, .58334],
                                125: [.35001, .85, 0, 0, .58334],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .72222, 0, 0, .55556],
                                732: [0, .72222, 0, 0, .55556],
                                770: [0, .72222, 0, 0, .55556],
                                771: [0, .72222, 0, 0, .55556],
                                8214: [-99e-5, .601, 0, 0, .77778],
                                8593: [1e-5, .6, 0, 0, .66667],
                                8595: [1e-5, .6, 0, 0, .66667],
                                8657: [1e-5, .6, 0, 0, .77778],
                                8659: [1e-5, .6, 0, 0, .77778],
                                8719: [.25001, .75, 0, 0, .94445],
                                8720: [.25001, .75, 0, 0, .94445],
                                8721: [.25001, .75, 0, 0, 1.05556],
                                8730: [.35001, .85, 0, 0, 1],
                                8739: [-.00599, .606, 0, 0, .33333],
                                8741: [-.00599, .606, 0, 0, .55556],
                                8747: [.30612, .805, .19445, 0, .47222],
                                8748: [.306, .805, .19445, 0, .47222],
                                8749: [.306, .805, .19445, 0, .47222],
                                8750: [.30612, .805, .19445, 0, .47222],
                                8896: [.25001, .75, 0, 0, .83334],
                                8897: [.25001, .75, 0, 0, .83334],
                                8898: [.25001, .75, 0, 0, .83334],
                                8899: [.25001, .75, 0, 0, .83334],
                                8968: [.35001, .85, 0, 0, .47222],
                                8969: [.35001, .85, 0, 0, .47222],
                                8970: [.35001, .85, 0, 0, .47222],
                                8971: [.35001, .85, 0, 0, .47222],
                                9168: [-99e-5, .601, 0, 0, .66667],
                                10216: [.35001, .85, 0, 0, .47222],
                                10217: [.35001, .85, 0, 0, .47222],
                                10752: [.25001, .75, 0, 0, 1.11111],
                                10753: [.25001, .75, 0, 0, 1.11111],
                                10754: [.25001, .75, 0, 0, 1.11111],
                                10756: [.25001, .75, 0, 0, .83334],
                                10758: [.25001, .75, 0, 0, .83334]
                            },
                            "Size2-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.65002, 1.15, 0, 0, .59722],
                                41: [.65002, 1.15, 0, 0, .59722],
                                47: [.65002, 1.15, 0, 0, .81111],
                                91: [.65002, 1.15, 0, 0, .47222],
                                92: [.65002, 1.15, 0, 0, .81111],
                                93: [.65002, 1.15, 0, 0, .47222],
                                123: [.65002, 1.15, 0, 0, .66667],
                                125: [.65002, 1.15, 0, 0, .66667],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1],
                                732: [0, .75, 0, 0, 1],
                                770: [0, .75, 0, 0, 1],
                                771: [0, .75, 0, 0, 1],
                                8719: [.55001, 1.05, 0, 0, 1.27778],
                                8720: [.55001, 1.05, 0, 0, 1.27778],
                                8721: [.55001, 1.05, 0, 0, 1.44445],
                                8730: [.65002, 1.15, 0, 0, 1],
                                8747: [.86225, 1.36, .44445, 0, .55556],
                                8748: [.862, 1.36, .44445, 0, .55556],
                                8749: [.862, 1.36, .44445, 0, .55556],
                                8750: [.86225, 1.36, .44445, 0, .55556],
                                8896: [.55001, 1.05, 0, 0, 1.11111],
                                8897: [.55001, 1.05, 0, 0, 1.11111],
                                8898: [.55001, 1.05, 0, 0, 1.11111],
                                8899: [.55001, 1.05, 0, 0, 1.11111],
                                8968: [.65002, 1.15, 0, 0, .52778],
                                8969: [.65002, 1.15, 0, 0, .52778],
                                8970: [.65002, 1.15, 0, 0, .52778],
                                8971: [.65002, 1.15, 0, 0, .52778],
                                10216: [.65002, 1.15, 0, 0, .61111],
                                10217: [.65002, 1.15, 0, 0, .61111],
                                10752: [.55001, 1.05, 0, 0, 1.51112],
                                10753: [.55001, 1.05, 0, 0, 1.51112],
                                10754: [.55001, 1.05, 0, 0, 1.51112],
                                10756: [.55001, 1.05, 0, 0, 1.11111],
                                10758: [.55001, 1.05, 0, 0, 1.11111]
                            },
                            "Size3-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.95003, 1.45, 0, 0, .73611],
                                41: [.95003, 1.45, 0, 0, .73611],
                                47: [.95003, 1.45, 0, 0, 1.04445],
                                91: [.95003, 1.45, 0, 0, .52778],
                                92: [.95003, 1.45, 0, 0, 1.04445],
                                93: [.95003, 1.45, 0, 0, .52778],
                                123: [.95003, 1.45, 0, 0, .75],
                                125: [.95003, 1.45, 0, 0, .75],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1.44445],
                                732: [0, .75, 0, 0, 1.44445],
                                770: [0, .75, 0, 0, 1.44445],
                                771: [0, .75, 0, 0, 1.44445],
                                8730: [.95003, 1.45, 0, 0, 1],
                                8968: [.95003, 1.45, 0, 0, .58334],
                                8969: [.95003, 1.45, 0, 0, .58334],
                                8970: [.95003, 1.45, 0, 0, .58334],
                                8971: [.95003, 1.45, 0, 0, .58334],
                                10216: [.95003, 1.45, 0, 0, .75],
                                10217: [.95003, 1.45, 0, 0, .75]
                            },
                            "Size4-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [1.25003, 1.75, 0, 0, .79167],
                                41: [1.25003, 1.75, 0, 0, .79167],
                                47: [1.25003, 1.75, 0, 0, 1.27778],
                                91: [1.25003, 1.75, 0, 0, .58334],
                                92: [1.25003, 1.75, 0, 0, 1.27778],
                                93: [1.25003, 1.75, 0, 0, .58334],
                                123: [1.25003, 1.75, 0, 0, .80556],
                                125: [1.25003, 1.75, 0, 0, .80556],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .825, 0, 0, 1.8889],
                                732: [0, .825, 0, 0, 1.8889],
                                770: [0, .825, 0, 0, 1.8889],
                                771: [0, .825, 0, 0, 1.8889],
                                8730: [1.25003, 1.75, 0, 0, 1],
                                8968: [1.25003, 1.75, 0, 0, .63889],
                                8969: [1.25003, 1.75, 0, 0, .63889],
                                8970: [1.25003, 1.75, 0, 0, .63889],
                                8971: [1.25003, 1.75, 0, 0, .63889],
                                9115: [.64502, 1.155, 0, 0, .875],
                                9116: [1e-5, .6, 0, 0, .875],
                                9117: [.64502, 1.155, 0, 0, .875],
                                9118: [.64502, 1.155, 0, 0, .875],
                                9119: [1e-5, .6, 0, 0, .875],
                                9120: [.64502, 1.155, 0, 0, .875],
                                9121: [.64502, 1.155, 0, 0, .66667],
                                9122: [-99e-5, .601, 0, 0, .66667],
                                9123: [.64502, 1.155, 0, 0, .66667],
                                9124: [.64502, 1.155, 0, 0, .66667],
                                9125: [-99e-5, .601, 0, 0, .66667],
                                9126: [.64502, 1.155, 0, 0, .66667],
                                9127: [1e-5, .9, 0, 0, .88889],
                                9128: [.65002, 1.15, 0, 0, .88889],
                                9129: [.90001, 0, 0, 0, .88889],
                                9130: [0, .3, 0, 0, .88889],
                                9131: [1e-5, .9, 0, 0, .88889],
                                9132: [.65002, 1.15, 0, 0, .88889],
                                9133: [.90001, 0, 0, 0, .88889],
                                9143: [.88502, .915, 0, 0, 1.05556],
                                10216: [1.25003, 1.75, 0, 0, .80556],
                                10217: [1.25003, 1.75, 0, 0, .80556],
                                57344: [-.00499, .605, 0, 0, 1.05556],
                                57345: [-.00499, .605, 0, 0, 1.05556],
                                57680: [0, .12, 0, 0, .45],
                                57681: [0, .12, 0, 0, .45],
                                57682: [0, .12, 0, 0, .45],
                                57683: [0, .12, 0, 0, .45]
                            },
                            "Typewriter-Regular": {
                                32: [0, 0, 0, 0, .525],
                                33: [0, .61111, 0, 0, .525],
                                34: [0, .61111, 0, 0, .525],
                                35: [0, .61111, 0, 0, .525],
                                36: [.08333, .69444, 0, 0, .525],
                                37: [.08333, .69444, 0, 0, .525],
                                38: [0, .61111, 0, 0, .525],
                                39: [0, .61111, 0, 0, .525],
                                40: [.08333, .69444, 0, 0, .525],
                                41: [.08333, .69444, 0, 0, .525],
                                42: [0, .52083, 0, 0, .525],
                                43: [-.08056, .53055, 0, 0, .525],
                                44: [.13889, .125, 0, 0, .525],
                                45: [-.08056, .53055, 0, 0, .525],
                                46: [0, .125, 0, 0, .525],
                                47: [.08333, .69444, 0, 0, .525],
                                48: [0, .61111, 0, 0, .525],
                                49: [0, .61111, 0, 0, .525],
                                50: [0, .61111, 0, 0, .525],
                                51: [0, .61111, 0, 0, .525],
                                52: [0, .61111, 0, 0, .525],
                                53: [0, .61111, 0, 0, .525],
                                54: [0, .61111, 0, 0, .525],
                                55: [0, .61111, 0, 0, .525],
                                56: [0, .61111, 0, 0, .525],
                                57: [0, .61111, 0, 0, .525],
                                58: [0, .43056, 0, 0, .525],
                                59: [.13889, .43056, 0, 0, .525],
                                60: [-.05556, .55556, 0, 0, .525],
                                61: [-.19549, .41562, 0, 0, .525],
                                62: [-.05556, .55556, 0, 0, .525],
                                63: [0, .61111, 0, 0, .525],
                                64: [0, .61111, 0, 0, .525],
                                65: [0, .61111, 0, 0, .525],
                                66: [0, .61111, 0, 0, .525],
                                67: [0, .61111, 0, 0, .525],
                                68: [0, .61111, 0, 0, .525],
                                69: [0, .61111, 0, 0, .525],
                                70: [0, .61111, 0, 0, .525],
                                71: [0, .61111, 0, 0, .525],
                                72: [0, .61111, 0, 0, .525],
                                73: [0, .61111, 0, 0, .525],
                                74: [0, .61111, 0, 0, .525],
                                75: [0, .61111, 0, 0, .525],
                                76: [0, .61111, 0, 0, .525],
                                77: [0, .61111, 0, 0, .525],
                                78: [0, .61111, 0, 0, .525],
                                79: [0, .61111, 0, 0, .525],
                                80: [0, .61111, 0, 0, .525],
                                81: [.13889, .61111, 0, 0, .525],
                                82: [0, .61111, 0, 0, .525],
                                83: [0, .61111, 0, 0, .525],
                                84: [0, .61111, 0, 0, .525],
                                85: [0, .61111, 0, 0, .525],
                                86: [0, .61111, 0, 0, .525],
                                87: [0, .61111, 0, 0, .525],
                                88: [0, .61111, 0, 0, .525],
                                89: [0, .61111, 0, 0, .525],
                                90: [0, .61111, 0, 0, .525],
                                91: [.08333, .69444, 0, 0, .525],
                                92: [.08333, .69444, 0, 0, .525],
                                93: [.08333, .69444, 0, 0, .525],
                                94: [0, .61111, 0, 0, .525],
                                95: [.09514, 0, 0, 0, .525],
                                96: [0, .61111, 0, 0, .525],
                                97: [0, .43056, 0, 0, .525],
                                98: [0, .61111, 0, 0, .525],
                                99: [0, .43056, 0, 0, .525],
                                100: [0, .61111, 0, 0, .525],
                                101: [0, .43056, 0, 0, .525],
                                102: [0, .61111, 0, 0, .525],
                                103: [.22222, .43056, 0, 0, .525],
                                104: [0, .61111, 0, 0, .525],
                                105: [0, .61111, 0, 0, .525],
                                106: [.22222, .61111, 0, 0, .525],
                                107: [0, .61111, 0, 0, .525],
                                108: [0, .61111, 0, 0, .525],
                                109: [0, .43056, 0, 0, .525],
                                110: [0, .43056, 0, 0, .525],
                                111: [0, .43056, 0, 0, .525],
                                112: [.22222, .43056, 0, 0, .525],
                                113: [.22222, .43056, 0, 0, .525],
                                114: [0, .43056, 0, 0, .525],
                                115: [0, .43056, 0, 0, .525],
                                116: [0, .55358, 0, 0, .525],
                                117: [0, .43056, 0, 0, .525],
                                118: [0, .43056, 0, 0, .525],
                                119: [0, .43056, 0, 0, .525],
                                120: [0, .43056, 0, 0, .525],
                                121: [.22222, .43056, 0, 0, .525],
                                122: [0, .43056, 0, 0, .525],
                                123: [.08333, .69444, 0, 0, .525],
                                124: [.08333, .69444, 0, 0, .525],
                                125: [.08333, .69444, 0, 0, .525],
                                126: [0, .61111, 0, 0, .525],
                                127: [0, .61111, 0, 0, .525],
                                160: [0, 0, 0, 0, .525],
                                176: [0, .61111, 0, 0, .525],
                                184: [.19445, 0, 0, 0, .525],
                                305: [0, .43056, 0, 0, .525],
                                567: [.22222, .43056, 0, 0, .525],
                                711: [0, .56597, 0, 0, .525],
                                713: [0, .56555, 0, 0, .525],
                                714: [0, .61111, 0, 0, .525],
                                715: [0, .61111, 0, 0, .525],
                                728: [0, .61111, 0, 0, .525],
                                730: [0, .61111, 0, 0, .525],
                                770: [0, .61111, 0, 0, .525],
                                771: [0, .61111, 0, 0, .525],
                                776: [0, .61111, 0, 0, .525],
                                915: [0, .61111, 0, 0, .525],
                                916: [0, .61111, 0, 0, .525],
                                920: [0, .61111, 0, 0, .525],
                                923: [0, .61111, 0, 0, .525],
                                926: [0, .61111, 0, 0, .525],
                                928: [0, .61111, 0, 0, .525],
                                931: [0, .61111, 0, 0, .525],
                                933: [0, .61111, 0, 0, .525],
                                934: [0, .61111, 0, 0, .525],
                                936: [0, .61111, 0, 0, .525],
                                937: [0, .61111, 0, 0, .525],
                                8216: [0, .61111, 0, 0, .525],
                                8217: [0, .61111, 0, 0, .525],
                                8242: [0, .61111, 0, 0, .525],
                                9251: [.11111, .21944, 0, 0, .525]
                            }
                        }
                            , W = {
                                slant: [.25, .25, .25],
                                space: [0, 0, 0],
                                stretch: [0, 0, 0],
                                shrink: [0, 0, 0],
                                xHeight: [.431, .431, .431],
                                quad: [1, 1.171, 1.472],
                                extraSpace: [0, 0, 0],
                                num1: [.677, .732, .925],
                                num2: [.394, .384, .387],
                                num3: [.444, .471, .504],
                                denom1: [.686, .752, 1.025],
                                denom2: [.345, .344, .532],
                                sup1: [.413, .503, .504],
                                sup2: [.363, .431, .404],
                                sup3: [.289, .286, .294],
                                sub1: [.15, .143, .2],
                                sub2: [.247, .286, .4],
                                supDrop: [.386, .353, .494],
                                subDrop: [.05, .071, .1],
                                delim1: [2.39, 1.7, 1.98],
                                delim2: [1.01, 1.157, 1.42],
                                axisHeight: [.25, .25, .25],
                                defaultRuleThickness: [.04, .049, .049],
                                bigOpSpacing1: [.111, .111, .111],
                                bigOpSpacing2: [.166, .166, .166],
                                bigOpSpacing3: [.2, .2, .2],
                                bigOpSpacing4: [.6, .611, .611],
                                bigOpSpacing5: [.1, .143, .143],
                                sqrtRuleThickness: [.04, .04, .04],
                                ptPerEm: [10, 10, 10],
                                doubleRuleSep: [.2, .2, .2],
                                arrayRuleWidth: [.04, .04, .04],
                                fboxsep: [.3, .3, .3],
                                fboxrule: [.04, .04, .04]
                            }
                            , F = {
                                "Å": "A",
                                "Ç": "C",
                                "Ð": "D",
                                "Þ": "o",
                                "å": "a",
                                "ç": "c",
                                "ð": "d",
                                "þ": "o",
                                "А": "A",
                                "Б": "B",
                                "В": "B",
                                "Г": "F",
                                "Д": "A",
                                "Е": "E",
                                "Ж": "K",
                                "З": "3",
                                "И": "N",
                                "Й": "N",
                                "К": "K",
                                "Л": "N",
                                "М": "M",
                                "Н": "H",
                                "О": "O",
                                "П": "N",
                                "Р": "P",
                                "С": "C",
                                "Т": "T",
                                "У": "y",
                                "Ф": "O",
                                "Х": "X",
                                "Ц": "U",
                                "Ч": "h",
                                "Ш": "W",
                                "Щ": "W",
                                "Ъ": "B",
                                "Ы": "X",
                                "Ь": "B",
                                "Э": "3",
                                "Ю": "X",
                                "Я": "R",
                                "а": "a",
                                "б": "b",
                                "в": "a",
                                "г": "r",
                                "д": "y",
                                "е": "e",
                                "ж": "m",
                                "з": "e",
                                "и": "n",
                                "й": "n",
                                "к": "n",
                                "л": "n",
                                "м": "m",
                                "н": "n",
                                "о": "o",
                                "п": "n",
                                "р": "p",
                                "с": "c",
                                "т": "o",
                                "у": "y",
                                "ф": "b",
                                "х": "x",
                                "ц": "n",
                                "ч": "n",
                                "ш": "w",
                                "щ": "w",
                                "ъ": "a",
                                "ы": "m",
                                "ь": "a",
                                "э": "e",
                                "ю": "m",
                                "я": "r"
                            };
                        function V(t, e, r) {
                            if (!D[e])
                                throw new Error("Font metrics not found for font: " + e + ".");
                            var n = t.charCodeAt(0)
                                , i = D[e][n];
                            if (!i && t[0] in F && (n = F[t[0]].charCodeAt(0),
                                i = D[e][n]),
                                i || "text" !== r || S(n) && (i = D[e][77]),
                                i)
                                return {
                                    depth: i[0],
                                    height: i[1],
                                    italic: i[2],
                                    skew: i[3],
                                    width: i[4]
                                }
                        }
                        var U = {}
                            , G = {
                                bin: 1,
                                close: 1,
                                inner: 1,
                                open: 1,
                                punct: 1,
                                rel: 1
                            }
                            , X = {
                                "accent-token": 1,
                                mathord: 1,
                                "op-token": 1,
                                spacing: 1,
                                textord: 1
                            }
                            , Y = {
                                math: {},
                                text: {}
                            }
                            , j = Y;
                        function Z(t, e, r, n, i, o) {
                            Y[t][i] = {
                                font: e,
                                group: r,
                                replace: n
                            },
                                o && n && (Y[t][n] = Y[t][i])
                        }
                        var K = "math"
                            , J = "text"
                            , Q = "main"
                            , tt = "ams"
                            , et = "accent-token"
                            , rt = "bin"
                            , nt = "close"
                            , it = "inner"
                            , ot = "mathord"
                            , at = "op-token"
                            , st = "open"
                            , lt = "punct"
                            , ht = "rel"
                            , ct = "spacing"
                            , ut = "textord";
                        Z(K, Q, ht, "≡", "\\equiv", !0),
                            Z(K, Q, ht, "≺", "\\prec", !0),
                            Z(K, Q, ht, "≻", "\\succ", !0),
                            Z(K, Q, ht, "∼", "\\sim", !0),
                            Z(K, Q, ht, "⊥", "\\perp"),
                            Z(K, Q, ht, "⪯", "\\preceq", !0),
                            Z(K, Q, ht, "⪰", "\\succeq", !0),
                            Z(K, Q, ht, "≃", "\\simeq", !0),
                            Z(K, Q, ht, "∣", "\\mid", !0),
                            Z(K, Q, ht, "≪", "\\ll", !0),
                            Z(K, Q, ht, "≫", "\\gg", !0),
                            Z(K, Q, ht, "≍", "\\asymp", !0),
                            Z(K, Q, ht, "∥", "\\parallel"),
                            Z(K, Q, ht, "⋈", "\\bowtie", !0),
                            Z(K, Q, ht, "⌣", "\\smile", !0),
                            Z(K, Q, ht, "⊑", "\\sqsubseteq", !0),
                            Z(K, Q, ht, "⊒", "\\sqsupseteq", !0),
                            Z(K, Q, ht, "≐", "\\doteq", !0),
                            Z(K, Q, ht, "⌢", "\\frown", !0),
                            Z(K, Q, ht, "∋", "\\ni", !0),
                            Z(K, Q, ht, "∝", "\\propto", !0),
                            Z(K, Q, ht, "⊢", "\\vdash", !0),
                            Z(K, Q, ht, "⊣", "\\dashv", !0),
                            Z(K, Q, ht, "∋", "\\owns"),
                            Z(K, Q, lt, ".", "\\ldotp"),
                            Z(K, Q, lt, "⋅", "\\cdotp"),
                            Z(K, Q, ut, "#", "\\#"),
                            Z(J, Q, ut, "#", "\\#"),
                            Z(K, Q, ut, "&", "\\&"),
                            Z(J, Q, ut, "&", "\\&"),
                            Z(K, Q, ut, "ℵ", "\\aleph", !0),
                            Z(K, Q, ut, "∀", "\\forall", !0),
                            Z(K, Q, ut, "ℏ", "\\hbar", !0),
                            Z(K, Q, ut, "∃", "\\exists", !0),
                            Z(K, Q, ut, "∇", "\\nabla", !0),
                            Z(K, Q, ut, "♭", "\\flat", !0),
                            Z(K, Q, ut, "ℓ", "\\ell", !0),
                            Z(K, Q, ut, "♮", "\\natural", !0),
                            Z(K, Q, ut, "♣", "\\clubsuit", !0),
                            Z(K, Q, ut, "℘", "\\wp", !0),
                            Z(K, Q, ut, "♯", "\\sharp", !0),
                            Z(K, Q, ut, "♢", "\\diamondsuit", !0),
                            Z(K, Q, ut, "ℜ", "\\Re", !0),
                            Z(K, Q, ut, "♡", "\\heartsuit", !0),
                            Z(K, Q, ut, "ℑ", "\\Im", !0),
                            Z(K, Q, ut, "♠", "\\spadesuit", !0),
                            Z(J, Q, ut, "§", "\\S", !0),
                            Z(J, Q, ut, "¶", "\\P", !0),
                            Z(K, Q, ut, "†", "\\dag"),
                            Z(J, Q, ut, "†", "\\dag"),
                            Z(J, Q, ut, "†", "\\textdagger"),
                            Z(K, Q, ut, "‡", "\\ddag"),
                            Z(J, Q, ut, "‡", "\\ddag"),
                            Z(J, Q, ut, "‡", "\\textdaggerdbl"),
                            Z(K, Q, nt, "⎱", "\\rmoustache", !0),
                            Z(K, Q, st, "⎰", "\\lmoustache", !0),
                            Z(K, Q, nt, "⟯", "\\rgroup", !0),
                            Z(K, Q, st, "⟮", "\\lgroup", !0),
                            Z(K, Q, rt, "∓", "\\mp", !0),
                            Z(K, Q, rt, "⊖", "\\ominus", !0),
                            Z(K, Q, rt, "⊎", "\\uplus", !0),
                            Z(K, Q, rt, "⊓", "\\sqcap", !0),
                            Z(K, Q, rt, "∗", "\\ast"),
                            Z(K, Q, rt, "⊔", "\\sqcup", !0),
                            Z(K, Q, rt, "◯", "\\bigcirc"),
                            Z(K, Q, rt, "∙", "\\bullet"),
                            Z(K, Q, rt, "‡", "\\ddagger"),
                            Z(K, Q, rt, "≀", "\\wr", !0),
                            Z(K, Q, rt, "⨿", "\\amalg"),
                            Z(K, Q, rt, "&", "\\And"),
                            Z(K, Q, ht, "⟵", "\\longleftarrow", !0),
                            Z(K, Q, ht, "⇐", "\\Leftarrow", !0),
                            Z(K, Q, ht, "⟸", "\\Longleftarrow", !0),
                            Z(K, Q, ht, "⟶", "\\longrightarrow", !0),
                            Z(K, Q, ht, "⇒", "\\Rightarrow", !0),
                            Z(K, Q, ht, "⟹", "\\Longrightarrow", !0),
                            Z(K, Q, ht, "↔", "\\leftrightarrow", !0),
                            Z(K, Q, ht, "⟷", "\\longleftrightarrow", !0),
                            Z(K, Q, ht, "⇔", "\\Leftrightarrow", !0),
                            Z(K, Q, ht, "⟺", "\\Longleftrightarrow", !0),
                            Z(K, Q, ht, "↦", "\\mapsto", !0),
                            Z(K, Q, ht, "⟼", "\\longmapsto", !0),
                            Z(K, Q, ht, "↗", "\\nearrow", !0),
                            Z(K, Q, ht, "↩", "\\hookleftarrow", !0),
                            Z(K, Q, ht, "↪", "\\hookrightarrow", !0),
                            Z(K, Q, ht, "↘", "\\searrow", !0),
                            Z(K, Q, ht, "↼", "\\leftharpoonup", !0),
                            Z(K, Q, ht, "⇀", "\\rightharpoonup", !0),
                            Z(K, Q, ht, "↙", "\\swarrow", !0),
                            Z(K, Q, ht, "↽", "\\leftharpoondown", !0),
                            Z(K, Q, ht, "⇁", "\\rightharpoondown", !0),
                            Z(K, Q, ht, "↖", "\\nwarrow", !0),
                            Z(K, Q, ht, "⇌", "\\rightleftharpoons", !0),
                            Z(K, tt, ht, "≮", "\\nless", !0),
                            Z(K, tt, ht, "", "\\@nleqslant"),
                            Z(K, tt, ht, "", "\\@nleqq"),
                            Z(K, tt, ht, "⪇", "\\lneq", !0),
                            Z(K, tt, ht, "≨", "\\lneqq", !0),
                            Z(K, tt, ht, "", "\\@lvertneqq"),
                            Z(K, tt, ht, "⋦", "\\lnsim", !0),
                            Z(K, tt, ht, "⪉", "\\lnapprox", !0),
                            Z(K, tt, ht, "⊀", "\\nprec", !0),
                            Z(K, tt, ht, "⋠", "\\npreceq", !0),
                            Z(K, tt, ht, "⋨", "\\precnsim", !0),
                            Z(K, tt, ht, "⪹", "\\precnapprox", !0),
                            Z(K, tt, ht, "≁", "\\nsim", !0),
                            Z(K, tt, ht, "", "\\@nshortmid"),
                            Z(K, tt, ht, "∤", "\\nmid", !0),
                            Z(K, tt, ht, "⊬", "\\nvdash", !0),
                            Z(K, tt, ht, "⊭", "\\nvDash", !0),
                            Z(K, tt, ht, "⋪", "\\ntriangleleft"),
                            Z(K, tt, ht, "⋬", "\\ntrianglelefteq", !0),
                            Z(K, tt, ht, "⊊", "\\subsetneq", !0),
                            Z(K, tt, ht, "", "\\@varsubsetneq"),
                            Z(K, tt, ht, "⫋", "\\subsetneqq", !0),
                            Z(K, tt, ht, "", "\\@varsubsetneqq"),
                            Z(K, tt, ht, "≯", "\\ngtr", !0),
                            Z(K, tt, ht, "", "\\@ngeqslant"),
                            Z(K, tt, ht, "", "\\@ngeqq"),
                            Z(K, tt, ht, "⪈", "\\gneq", !0),
                            Z(K, tt, ht, "≩", "\\gneqq", !0),
                            Z(K, tt, ht, "", "\\@gvertneqq"),
                            Z(K, tt, ht, "⋧", "\\gnsim", !0),
                            Z(K, tt, ht, "⪊", "\\gnapprox", !0),
                            Z(K, tt, ht, "⊁", "\\nsucc", !0),
                            Z(K, tt, ht, "⋡", "\\nsucceq", !0),
                            Z(K, tt, ht, "⋩", "\\succnsim", !0),
                            Z(K, tt, ht, "⪺", "\\succnapprox", !0),
                            Z(K, tt, ht, "≆", "\\ncong", !0),
                            Z(K, tt, ht, "", "\\@nshortparallel"),
                            Z(K, tt, ht, "∦", "\\nparallel", !0),
                            Z(K, tt, ht, "⊯", "\\nVDash", !0),
                            Z(K, tt, ht, "⋫", "\\ntriangleright"),
                            Z(K, tt, ht, "⋭", "\\ntrianglerighteq", !0),
                            Z(K, tt, ht, "", "\\@nsupseteqq"),
                            Z(K, tt, ht, "⊋", "\\supsetneq", !0),
                            Z(K, tt, ht, "", "\\@varsupsetneq"),
                            Z(K, tt, ht, "⫌", "\\supsetneqq", !0),
                            Z(K, tt, ht, "", "\\@varsupsetneqq"),
                            Z(K, tt, ht, "⊮", "\\nVdash", !0),
                            Z(K, tt, ht, "⪵", "\\precneqq", !0),
                            Z(K, tt, ht, "⪶", "\\succneqq", !0),
                            Z(K, tt, ht, "", "\\@nsubseteqq"),
                            Z(K, tt, rt, "⊴", "\\unlhd"),
                            Z(K, tt, rt, "⊵", "\\unrhd"),
                            Z(K, tt, ht, "↚", "\\nleftarrow", !0),
                            Z(K, tt, ht, "↛", "\\nrightarrow", !0),
                            Z(K, tt, ht, "⇍", "\\nLeftarrow", !0),
                            Z(K, tt, ht, "⇏", "\\nRightarrow", !0),
                            Z(K, tt, ht, "↮", "\\nleftrightarrow", !0),
                            Z(K, tt, ht, "⇎", "\\nLeftrightarrow", !0),
                            Z(K, tt, ht, "△", "\\vartriangle"),
                            Z(K, tt, ut, "ℏ", "\\hslash"),
                            Z(K, tt, ut, "▽", "\\triangledown"),
                            Z(K, tt, ut, "◊", "\\lozenge"),
                            Z(K, tt, ut, "Ⓢ", "\\circledS"),
                            Z(K, tt, ut, "®", "\\circledR"),
                            Z(J, tt, ut, "®", "\\circledR"),
                            Z(K, tt, ut, "∡", "\\measuredangle", !0),
                            Z(K, tt, ut, "∄", "\\nexists"),
                            Z(K, tt, ut, "℧", "\\mho"),
                            Z(K, tt, ut, "Ⅎ", "\\Finv", !0),
                            Z(K, tt, ut, "⅁", "\\Game", !0),
                            Z(K, tt, ut, "‵", "\\backprime"),
                            Z(K, tt, ut, "▲", "\\blacktriangle"),
                            Z(K, tt, ut, "▼", "\\blacktriangledown"),
                            Z(K, tt, ut, "■", "\\blacksquare"),
                            Z(K, tt, ut, "⧫", "\\blacklozenge"),
                            Z(K, tt, ut, "★", "\\bigstar"),
                            Z(K, tt, ut, "∢", "\\sphericalangle", !0),
                            Z(K, tt, ut, "∁", "\\complement", !0),
                            Z(K, tt, ut, "ð", "\\eth", !0),
                            Z(J, Q, ut, "ð", "ð"),
                            Z(K, tt, ut, "╱", "\\diagup"),
                            Z(K, tt, ut, "╲", "\\diagdown"),
                            Z(K, tt, ut, "□", "\\square"),
                            Z(K, tt, ut, "□", "\\Box"),
                            Z(K, tt, ut, "◊", "\\Diamond"),
                            Z(K, tt, ut, "¥", "\\yen", !0),
                            Z(J, tt, ut, "¥", "\\yen", !0),
                            Z(K, tt, ut, "✓", "\\checkmark", !0),
                            Z(J, tt, ut, "✓", "\\checkmark"),
                            Z(K, tt, ut, "ℶ", "\\beth", !0),
                            Z(K, tt, ut, "ℸ", "\\daleth", !0),
                            Z(K, tt, ut, "ℷ", "\\gimel", !0),
                            Z(K, tt, ut, "ϝ", "\\digamma", !0),
                            Z(K, tt, ut, "ϰ", "\\varkappa"),
                            Z(K, tt, st, "┌", "\\@ulcorner", !0),
                            Z(K, tt, nt, "┐", "\\@urcorner", !0),
                            Z(K, tt, st, "└", "\\@llcorner", !0),
                            Z(K, tt, nt, "┘", "\\@lrcorner", !0),
                            Z(K, tt, ht, "≦", "\\leqq", !0),
                            Z(K, tt, ht, "⩽", "\\leqslant", !0),
                            Z(K, tt, ht, "⪕", "\\eqslantless", !0),
                            Z(K, tt, ht, "≲", "\\lesssim", !0),
                            Z(K, tt, ht, "⪅", "\\lessapprox", !0),
                            Z(K, tt, ht, "≊", "\\approxeq", !0),
                            Z(K, tt, rt, "⋖", "\\lessdot"),
                            Z(K, tt, ht, "⋘", "\\lll", !0),
                            Z(K, tt, ht, "≶", "\\lessgtr", !0),
                            Z(K, tt, ht, "⋚", "\\lesseqgtr", !0),
                            Z(K, tt, ht, "⪋", "\\lesseqqgtr", !0),
                            Z(K, tt, ht, "≑", "\\doteqdot"),
                            Z(K, tt, ht, "≓", "\\risingdotseq", !0),
                            Z(K, tt, ht, "≒", "\\fallingdotseq", !0),
                            Z(K, tt, ht, "∽", "\\backsim", !0),
                            Z(K, tt, ht, "⋍", "\\backsimeq", !0),
                            Z(K, tt, ht, "⫅", "\\subseteqq", !0),
                            Z(K, tt, ht, "⋐", "\\Subset", !0),
                            Z(K, tt, ht, "⊏", "\\sqsubset", !0),
                            Z(K, tt, ht, "≼", "\\preccurlyeq", !0),
                            Z(K, tt, ht, "⋞", "\\curlyeqprec", !0),
                            Z(K, tt, ht, "≾", "\\precsim", !0),
                            Z(K, tt, ht, "⪷", "\\precapprox", !0),
                            Z(K, tt, ht, "⊲", "\\vartriangleleft"),
                            Z(K, tt, ht, "⊴", "\\trianglelefteq"),
                            Z(K, tt, ht, "⊨", "\\vDash", !0),
                            Z(K, tt, ht, "⊪", "\\Vvdash", !0),
                            Z(K, tt, ht, "⌣", "\\smallsmile"),
                            Z(K, tt, ht, "⌢", "\\smallfrown"),
                            Z(K, tt, ht, "≏", "\\bumpeq", !0),
                            Z(K, tt, ht, "≎", "\\Bumpeq", !0),
                            Z(K, tt, ht, "≧", "\\geqq", !0),
                            Z(K, tt, ht, "⩾", "\\geqslant", !0),
                            Z(K, tt, ht, "⪖", "\\eqslantgtr", !0),
                            Z(K, tt, ht, "≳", "\\gtrsim", !0),
                            Z(K, tt, ht, "⪆", "\\gtrapprox", !0),
                            Z(K, tt, rt, "⋗", "\\gtrdot"),
                            Z(K, tt, ht, "⋙", "\\ggg", !0),
                            Z(K, tt, ht, "≷", "\\gtrless", !0),
                            Z(K, tt, ht, "⋛", "\\gtreqless", !0),
                            Z(K, tt, ht, "⪌", "\\gtreqqless", !0),
                            Z(K, tt, ht, "≖", "\\eqcirc", !0),
                            Z(K, tt, ht, "≗", "\\circeq", !0),
                            Z(K, tt, ht, "≜", "\\triangleq", !0),
                            Z(K, tt, ht, "∼", "\\thicksim"),
                            Z(K, tt, ht, "≈", "\\thickapprox"),
                            Z(K, tt, ht, "⫆", "\\supseteqq", !0),
                            Z(K, tt, ht, "⋑", "\\Supset", !0),
                            Z(K, tt, ht, "⊐", "\\sqsupset", !0),
                            Z(K, tt, ht, "≽", "\\succcurlyeq", !0),
                            Z(K, tt, ht, "⋟", "\\curlyeqsucc", !0),
                            Z(K, tt, ht, "≿", "\\succsim", !0),
                            Z(K, tt, ht, "⪸", "\\succapprox", !0),
                            Z(K, tt, ht, "⊳", "\\vartriangleright"),
                            Z(K, tt, ht, "⊵", "\\trianglerighteq"),
                            Z(K, tt, ht, "⊩", "\\Vdash", !0),
                            Z(K, tt, ht, "∣", "\\shortmid"),
                            Z(K, tt, ht, "∥", "\\shortparallel"),
                            Z(K, tt, ht, "≬", "\\between", !0),
                            Z(K, tt, ht, "⋔", "\\pitchfork", !0),
                            Z(K, tt, ht, "∝", "\\varpropto"),
                            Z(K, tt, ht, "◀", "\\blacktriangleleft"),
                            Z(K, tt, ht, "∴", "\\therefore", !0),
                            Z(K, tt, ht, "∍", "\\backepsilon"),
                            Z(K, tt, ht, "▶", "\\blacktriangleright"),
                            Z(K, tt, ht, "∵", "\\because", !0),
                            Z(K, tt, ht, "⋘", "\\llless"),
                            Z(K, tt, ht, "⋙", "\\gggtr"),
                            Z(K, tt, rt, "⊲", "\\lhd"),
                            Z(K, tt, rt, "⊳", "\\rhd"),
                            Z(K, tt, ht, "≂", "\\eqsim", !0),
                            Z(K, Q, ht, "⋈", "\\Join"),
                            Z(K, tt, ht, "≑", "\\Doteq", !0),
                            Z(K, tt, rt, "∔", "\\dotplus", !0),
                            Z(K, tt, rt, "∖", "\\smallsetminus"),
                            Z(K, tt, rt, "⋒", "\\Cap", !0),
                            Z(K, tt, rt, "⋓", "\\Cup", !0),
                            Z(K, tt, rt, "⩞", "\\doublebarwedge", !0),
                            Z(K, tt, rt, "⊟", "\\boxminus", !0),
                            Z(K, tt, rt, "⊞", "\\boxplus", !0),
                            Z(K, tt, rt, "⋇", "\\divideontimes", !0),
                            Z(K, tt, rt, "⋉", "\\ltimes", !0),
                            Z(K, tt, rt, "⋊", "\\rtimes", !0),
                            Z(K, tt, rt, "⋋", "\\leftthreetimes", !0),
                            Z(K, tt, rt, "⋌", "\\rightthreetimes", !0),
                            Z(K, tt, rt, "⋏", "\\curlywedge", !0),
                            Z(K, tt, rt, "⋎", "\\curlyvee", !0),
                            Z(K, tt, rt, "⊝", "\\circleddash", !0),
                            Z(K, tt, rt, "⊛", "\\circledast", !0),
                            Z(K, tt, rt, "⋅", "\\centerdot"),
                            Z(K, tt, rt, "⊺", "\\intercal", !0),
                            Z(K, tt, rt, "⋒", "\\doublecap"),
                            Z(K, tt, rt, "⋓", "\\doublecup"),
                            Z(K, tt, rt, "⊠", "\\boxtimes", !0),
                            Z(K, tt, ht, "⇢", "\\dashrightarrow", !0),
                            Z(K, tt, ht, "⇠", "\\dashleftarrow", !0),
                            Z(K, tt, ht, "⇇", "\\leftleftarrows", !0),
                            Z(K, tt, ht, "⇆", "\\leftrightarrows", !0),
                            Z(K, tt, ht, "⇚", "\\Lleftarrow", !0),
                            Z(K, tt, ht, "↞", "\\twoheadleftarrow", !0),
                            Z(K, tt, ht, "↢", "\\leftarrowtail", !0),
                            Z(K, tt, ht, "↫", "\\looparrowleft", !0),
                            Z(K, tt, ht, "⇋", "\\leftrightharpoons", !0),
                            Z(K, tt, ht, "↶", "\\curvearrowleft", !0),
                            Z(K, tt, ht, "↺", "\\circlearrowleft", !0),
                            Z(K, tt, ht, "↰", "\\Lsh", !0),
                            Z(K, tt, ht, "⇈", "\\upuparrows", !0),
                            Z(K, tt, ht, "↿", "\\upharpoonleft", !0),
                            Z(K, tt, ht, "⇃", "\\downharpoonleft", !0),
                            Z(K, tt, ht, "⊸", "\\multimap", !0),
                            Z(K, tt, ht, "↭", "\\leftrightsquigarrow", !0),
                            Z(K, tt, ht, "⇉", "\\rightrightarrows", !0),
                            Z(K, tt, ht, "⇄", "\\rightleftarrows", !0),
                            Z(K, tt, ht, "↠", "\\twoheadrightarrow", !0),
                            Z(K, tt, ht, "↣", "\\rightarrowtail", !0),
                            Z(K, tt, ht, "↬", "\\looparrowright", !0),
                            Z(K, tt, ht, "↷", "\\curvearrowright", !0),
                            Z(K, tt, ht, "↻", "\\circlearrowright", !0),
                            Z(K, tt, ht, "↱", "\\Rsh", !0),
                            Z(K, tt, ht, "⇊", "\\downdownarrows", !0),
                            Z(K, tt, ht, "↾", "\\upharpoonright", !0),
                            Z(K, tt, ht, "⇂", "\\downharpoonright", !0),
                            Z(K, tt, ht, "⇝", "\\rightsquigarrow", !0),
                            Z(K, tt, ht, "⇝", "\\leadsto"),
                            Z(K, tt, ht, "⇛", "\\Rrightarrow", !0),
                            Z(K, tt, ht, "↾", "\\restriction"),
                            Z(K, Q, ut, "‘", "`"),
                            Z(K, Q, ut, "$", "\\$"),
                            Z(J, Q, ut, "$", "\\$"),
                            Z(J, Q, ut, "$", "\\textdollar"),
                            Z(K, Q, ut, "%", "\\%"),
                            Z(J, Q, ut, "%", "\\%"),
                            Z(K, Q, ut, "_", "\\_"),
                            Z(J, Q, ut, "_", "\\_"),
                            Z(J, Q, ut, "_", "\\textunderscore"),
                            Z(K, Q, ut, "∠", "\\angle", !0),
                            Z(K, Q, ut, "∞", "\\infty", !0),
                            Z(K, Q, ut, "′", "\\prime"),
                            Z(K, Q, ut, "△", "\\triangle"),
                            Z(K, Q, ut, "Γ", "\\Gamma", !0),
                            Z(K, Q, ut, "Δ", "\\Delta", !0),
                            Z(K, Q, ut, "Θ", "\\Theta", !0),
                            Z(K, Q, ut, "Λ", "\\Lambda", !0),
                            Z(K, Q, ut, "Ξ", "\\Xi", !0),
                            Z(K, Q, ut, "Π", "\\Pi", !0),
                            Z(K, Q, ut, "Σ", "\\Sigma", !0),
                            Z(K, Q, ut, "Υ", "\\Upsilon", !0),
                            Z(K, Q, ut, "Φ", "\\Phi", !0),
                            Z(K, Q, ut, "Ψ", "\\Psi", !0),
                            Z(K, Q, ut, "Ω", "\\Omega", !0),
                            Z(K, Q, ut, "A", "Α"),
                            Z(K, Q, ut, "B", "Β"),
                            Z(K, Q, ut, "E", "Ε"),
                            Z(K, Q, ut, "Z", "Ζ"),
                            Z(K, Q, ut, "H", "Η"),
                            Z(K, Q, ut, "I", "Ι"),
                            Z(K, Q, ut, "K", "Κ"),
                            Z(K, Q, ut, "M", "Μ"),
                            Z(K, Q, ut, "N", "Ν"),
                            Z(K, Q, ut, "O", "Ο"),
                            Z(K, Q, ut, "P", "Ρ"),
                            Z(K, Q, ut, "T", "Τ"),
                            Z(K, Q, ut, "X", "Χ"),
                            Z(K, Q, ut, "¬", "\\neg", !0),
                            Z(K, Q, ut, "¬", "\\lnot"),
                            Z(K, Q, ut, "⊤", "\\top"),
                            Z(K, Q, ut, "⊥", "\\bot"),
                            Z(K, Q, ut, "∅", "\\emptyset"),
                            Z(K, tt, ut, "∅", "\\varnothing"),
                            Z(K, Q, ot, "α", "\\alpha", !0),
                            Z(K, Q, ot, "β", "\\beta", !0),
                            Z(K, Q, ot, "γ", "\\gamma", !0),
                            Z(K, Q, ot, "δ", "\\delta", !0),
                            Z(K, Q, ot, "ϵ", "\\epsilon", !0),
                            Z(K, Q, ot, "ζ", "\\zeta", !0),
                            Z(K, Q, ot, "η", "\\eta", !0),
                            Z(K, Q, ot, "θ", "\\theta", !0),
                            Z(K, Q, ot, "ι", "\\iota", !0),
                            Z(K, Q, ot, "κ", "\\kappa", !0),
                            Z(K, Q, ot, "λ", "\\lambda", !0),
                            Z(K, Q, ot, "μ", "\\mu", !0),
                            Z(K, Q, ot, "ν", "\\nu", !0),
                            Z(K, Q, ot, "ξ", "\\xi", !0),
                            Z(K, Q, ot, "ο", "\\omicron", !0),
                            Z(K, Q, ot, "π", "\\pi", !0),
                            Z(K, Q, ot, "ρ", "\\rho", !0),
                            Z(K, Q, ot, "σ", "\\sigma", !0),
                            Z(K, Q, ot, "τ", "\\tau", !0),
                            Z(K, Q, ot, "υ", "\\upsilon", !0),
                            Z(K, Q, ot, "ϕ", "\\phi", !0),
                            Z(K, Q, ot, "χ", "\\chi", !0),
                            Z(K, Q, ot, "ψ", "\\psi", !0),
                            Z(K, Q, ot, "ω", "\\omega", !0),
                            Z(K, Q, ot, "ε", "\\varepsilon", !0),
                            Z(K, Q, ot, "ϑ", "\\vartheta", !0),
                            Z(K, Q, ot, "ϖ", "\\varpi", !0),
                            Z(K, Q, ot, "ϱ", "\\varrho", !0),
                            Z(K, Q, ot, "ς", "\\varsigma", !0),
                            Z(K, Q, ot, "φ", "\\varphi", !0),
                            Z(K, Q, rt, "∗", "*"),
                            Z(K, Q, rt, "+", "+"),
                            Z(K, Q, rt, "−", "-"),
                            Z(K, Q, rt, "⋅", "\\cdot", !0),
                            Z(K, Q, rt, "∘", "\\circ"),
                            Z(K, Q, rt, "÷", "\\div", !0),
                            Z(K, Q, rt, "±", "\\pm", !0),
                            Z(K, Q, rt, "×", "\\times", !0),
                            Z(K, Q, rt, "∩", "\\cap", !0),
                            Z(K, Q, rt, "∪", "\\cup", !0),
                            Z(K, Q, rt, "∖", "\\setminus"),
                            Z(K, Q, rt, "∧", "\\land"),
                            Z(K, Q, rt, "∨", "\\lor"),
                            Z(K, Q, rt, "∧", "\\wedge", !0),
                            Z(K, Q, rt, "∨", "\\vee", !0),
                            Z(K, Q, ut, "√", "\\surd"),
                            Z(K, Q, st, "⟨", "\\langle", !0),
                            Z(K, Q, st, "∣", "\\lvert"),
                            Z(K, Q, st, "∥", "\\lVert"),
                            Z(K, Q, nt, "?", "?"),
                            Z(K, Q, nt, "!", "!"),
                            Z(K, Q, nt, "⟩", "\\rangle", !0),
                            Z(K, Q, nt, "∣", "\\rvert"),
                            Z(K, Q, nt, "∥", "\\rVert"),
                            Z(K, Q, ht, "=", "="),
                            Z(K, Q, ht, ":", ":"),
                            Z(K, Q, ht, "≈", "\\approx", !0),
                            Z(K, Q, ht, "≅", "\\cong", !0),
                            Z(K, Q, ht, "≥", "\\ge"),
                            Z(K, Q, ht, "≥", "\\geq", !0),
                            Z(K, Q, ht, "←", "\\gets"),
                            Z(K, Q, ht, ">", "\\gt", !0),
                            Z(K, Q, ht, "∈", "\\in", !0),
                            Z(K, Q, ht, "", "\\@not"),
                            Z(K, Q, ht, "⊂", "\\subset", !0),
                            Z(K, Q, ht, "⊃", "\\supset", !0),
                            Z(K, Q, ht, "⊆", "\\subseteq", !0),
                            Z(K, Q, ht, "⊇", "\\supseteq", !0),
                            Z(K, tt, ht, "⊈", "\\nsubseteq", !0),
                            Z(K, tt, ht, "⊉", "\\nsupseteq", !0),
                            Z(K, Q, ht, "⊨", "\\models"),
                            Z(K, Q, ht, "←", "\\leftarrow", !0),
                            Z(K, Q, ht, "≤", "\\le"),
                            Z(K, Q, ht, "≤", "\\leq", !0),
                            Z(K, Q, ht, "<", "\\lt", !0),
                            Z(K, Q, ht, "→", "\\rightarrow", !0),
                            Z(K, Q, ht, "→", "\\to"),
                            Z(K, tt, ht, "≱", "\\ngeq", !0),
                            Z(K, tt, ht, "≰", "\\nleq", !0),
                            Z(K, Q, ct, " ", "\\ "),
                            Z(K, Q, ct, " ", "~"),
                            Z(K, Q, ct, " ", "\\space"),
                            Z(K, Q, ct, " ", "\\nobreakspace"),
                            Z(J, Q, ct, " ", "\\ "),
                            Z(J, Q, ct, " ", " "),
                            Z(J, Q, ct, " ", "~"),
                            Z(J, Q, ct, " ", "\\space"),
                            Z(J, Q, ct, " ", "\\nobreakspace"),
                            Z(K, Q, ct, null, "\\nobreak"),
                            Z(K, Q, ct, null, "\\allowbreak"),
                            Z(K, Q, lt, ",", ","),
                            Z(K, Q, lt, ";", ";"),
                            Z(K, tt, rt, "⊼", "\\barwedge", !0),
                            Z(K, tt, rt, "⊻", "\\veebar", !0),
                            Z(K, Q, rt, "⊙", "\\odot", !0),
                            Z(K, Q, rt, "⊕", "\\oplus", !0),
                            Z(K, Q, rt, "⊗", "\\otimes", !0),
                            Z(K, Q, ut, "∂", "\\partial", !0),
                            Z(K, Q, rt, "⊘", "\\oslash", !0),
                            Z(K, tt, rt, "⊚", "\\circledcirc", !0),
                            Z(K, tt, rt, "⊡", "\\boxdot", !0),
                            Z(K, Q, rt, "△", "\\bigtriangleup"),
                            Z(K, Q, rt, "▽", "\\bigtriangledown"),
                            Z(K, Q, rt, "†", "\\dagger"),
                            Z(K, Q, rt, "⋄", "\\diamond"),
                            Z(K, Q, rt, "⋆", "\\star"),
                            Z(K, Q, rt, "◃", "\\triangleleft"),
                            Z(K, Q, rt, "▹", "\\triangleright"),
                            Z(K, Q, st, "{", "\\{"),
                            Z(J, Q, ut, "{", "\\{"),
                            Z(J, Q, ut, "{", "\\textbraceleft"),
                            Z(K, Q, nt, "}", "\\}"),
                            Z(J, Q, ut, "}", "\\}"),
                            Z(J, Q, ut, "}", "\\textbraceright"),
                            Z(K, Q, st, "{", "\\lbrace"),
                            Z(K, Q, nt, "}", "\\rbrace"),
                            Z(K, Q, st, "[", "\\lbrack", !0),
                            Z(J, Q, ut, "[", "\\lbrack", !0),
                            Z(K, Q, nt, "]", "\\rbrack", !0),
                            Z(J, Q, ut, "]", "\\rbrack", !0),
                            Z(K, Q, st, "(", "\\lparen", !0),
                            Z(K, Q, nt, ")", "\\rparen", !0),
                            Z(J, Q, ut, "<", "\\textless", !0),
                            Z(J, Q, ut, ">", "\\textgreater", !0),
                            Z(K, Q, st, "⌊", "\\lfloor", !0),
                            Z(K, Q, nt, "⌋", "\\rfloor", !0),
                            Z(K, Q, st, "⌈", "\\lceil", !0),
                            Z(K, Q, nt, "⌉", "\\rceil", !0),
                            Z(K, Q, ut, "\\", "\\backslash"),
                            Z(K, Q, ut, "∣", "|"),
                            Z(K, Q, ut, "∣", "\\vert"),
                            Z(J, Q, ut, "|", "\\textbar", !0),
                            Z(K, Q, ut, "∥", "\\|"),
                            Z(K, Q, ut, "∥", "\\Vert"),
                            Z(J, Q, ut, "∥", "\\textbardbl"),
                            Z(J, Q, ut, "~", "\\textasciitilde"),
                            Z(J, Q, ut, "\\", "\\textbackslash"),
                            Z(J, Q, ut, "^", "\\textasciicircum"),
                            Z(K, Q, ht, "↑", "\\uparrow", !0),
                            Z(K, Q, ht, "⇑", "\\Uparrow", !0),
                            Z(K, Q, ht, "↓", "\\downarrow", !0),
                            Z(K, Q, ht, "⇓", "\\Downarrow", !0),
                            Z(K, Q, ht, "↕", "\\updownarrow", !0),
                            Z(K, Q, ht, "⇕", "\\Updownarrow", !0),
                            Z(K, Q, at, "∐", "\\coprod"),
                            Z(K, Q, at, "⋁", "\\bigvee"),
                            Z(K, Q, at, "⋀", "\\bigwedge"),
                            Z(K, Q, at, "⨄", "\\biguplus"),
                            Z(K, Q, at, "⋂", "\\bigcap"),
                            Z(K, Q, at, "⋃", "\\bigcup"),
                            Z(K, Q, at, "∫", "\\int"),
                            Z(K, Q, at, "∫", "\\intop"),
                            Z(K, Q, at, "∬", "\\iint"),
                            Z(K, Q, at, "∭", "\\iiint"),
                            Z(K, Q, at, "∏", "\\prod"),
                            Z(K, Q, at, "∑", "\\sum"),
                            Z(K, Q, at, "⨂", "\\bigotimes"),
                            Z(K, Q, at, "⨁", "\\bigoplus"),
                            Z(K, Q, at, "⨀", "\\bigodot"),
                            Z(K, Q, at, "∮", "\\oint"),
                            Z(K, Q, at, "⨆", "\\bigsqcup"),
                            Z(K, Q, at, "∫", "\\smallint"),
                            Z(J, Q, it, "…", "\\textellipsis"),
                            Z(K, Q, it, "…", "\\mathellipsis"),
                            Z(J, Q, it, "…", "\\ldots", !0),
                            Z(K, Q, it, "…", "\\ldots", !0),
                            Z(K, Q, it, "⋯", "\\@cdots", !0),
                            Z(K, Q, it, "⋱", "\\ddots", !0),
                            Z(K, Q, ut, "⋮", "\\varvdots"),
                            Z(K, Q, et, "ˊ", "\\acute"),
                            Z(K, Q, et, "ˋ", "\\grave"),
                            Z(K, Q, et, "¨", "\\ddot"),
                            Z(K, Q, et, "~", "\\tilde"),
                            Z(K, Q, et, "ˉ", "\\bar"),
                            Z(K, Q, et, "˘", "\\breve"),
                            Z(K, Q, et, "ˇ", "\\check"),
                            Z(K, Q, et, "^", "\\hat"),
                            Z(K, Q, et, "⃗", "\\vec"),
                            Z(K, Q, et, "˙", "\\dot"),
                            Z(K, Q, et, "˚", "\\mathring"),
                            Z(K, Q, ot, "", "\\@imath"),
                            Z(K, Q, ot, "", "\\@jmath"),
                            Z(K, Q, ut, "ı", "ı"),
                            Z(K, Q, ut, "ȷ", "ȷ"),
                            Z(J, Q, ut, "ı", "\\i", !0),
                            Z(J, Q, ut, "ȷ", "\\j", !0),
                            Z(J, Q, ut, "ß", "\\ss", !0),
                            Z(J, Q, ut, "æ", "\\ae", !0),
                            Z(J, Q, ut, "œ", "\\oe", !0),
                            Z(J, Q, ut, "ø", "\\o", !0),
                            Z(J, Q, ut, "Æ", "\\AE", !0),
                            Z(J, Q, ut, "Œ", "\\OE", !0),
                            Z(J, Q, ut, "Ø", "\\O", !0),
                            Z(J, Q, et, "ˊ", "\\'"),
                            Z(J, Q, et, "ˋ", "\\`"),
                            Z(J, Q, et, "ˆ", "\\^"),
                            Z(J, Q, et, "˜", "\\~"),
                            Z(J, Q, et, "ˉ", "\\="),
                            Z(J, Q, et, "˘", "\\u"),
                            Z(J, Q, et, "˙", "\\."),
                            Z(J, Q, et, "˚", "\\r"),
                            Z(J, Q, et, "ˇ", "\\v"),
                            Z(J, Q, et, "¨", '\\"'),
                            Z(J, Q, et, "˝", "\\H"),
                            Z(J, Q, et, "◯", "\\textcircled");
                        var mt = {
                            "--": !0,
                            "---": !0,
                            "``": !0,
                            "''": !0
                        };
                        Z(J, Q, ut, "–", "--", !0),
                            Z(J, Q, ut, "–", "\\textendash"),
                            Z(J, Q, ut, "—", "---", !0),
                            Z(J, Q, ut, "—", "\\textemdash"),
                            Z(J, Q, ut, "‘", "`", !0),
                            Z(J, Q, ut, "‘", "\\textquoteleft"),
                            Z(J, Q, ut, "’", "'", !0),
                            Z(J, Q, ut, "’", "\\textquoteright"),
                            Z(J, Q, ut, "“", "``", !0),
                            Z(J, Q, ut, "“", "\\textquotedblleft"),
                            Z(J, Q, ut, "”", "''", !0),
                            Z(J, Q, ut, "”", "\\textquotedblright"),
                            Z(K, Q, ut, "°", "\\degree", !0),
                            Z(J, Q, ut, "°", "\\degree"),
                            Z(J, Q, ut, "°", "\\textdegree", !0),
                            Z(K, Q, ut, "£", "\\pounds"),
                            Z(K, Q, ut, "£", "\\mathsterling", !0),
                            Z(J, Q, ut, "£", "\\pounds"),
                            Z(J, Q, ut, "£", "\\textsterling", !0),
                            Z(K, tt, ut, "✠", "\\maltese"),
                            Z(J, tt, ut, "✠", "\\maltese");
                        for (var pt = '0123456789/@."', dt = 0; dt < pt.length; dt++) {
                            var ft = pt.charAt(dt);
                            Z(K, Q, ut, ft, ft)
                        }
                        for (var gt = '0123456789!@*()-=+";:?/.,', bt = 0; bt < gt.length; bt++) {
                            var yt = gt.charAt(bt);
                            Z(J, Q, ut, yt, yt)
                        }
                        for (var vt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", xt = 0; xt < vt.length; xt++) {
                            var wt = vt.charAt(xt);
                            Z(K, Q, ot, wt, wt),
                                Z(J, Q, ut, wt, wt)
                        }
                        Z(K, tt, ut, "C", "ℂ"),
                            Z(J, tt, ut, "C", "ℂ"),
                            Z(K, tt, ut, "H", "ℍ"),
                            Z(J, tt, ut, "H", "ℍ"),
                            Z(K, tt, ut, "N", "ℕ"),
                            Z(J, tt, ut, "N", "ℕ"),
                            Z(K, tt, ut, "P", "ℙ"),
                            Z(J, tt, ut, "P", "ℙ"),
                            Z(K, tt, ut, "Q", "ℚ"),
                            Z(J, tt, ut, "Q", "ℚ"),
                            Z(K, tt, ut, "R", "ℝ"),
                            Z(J, tt, ut, "R", "ℝ"),
                            Z(K, tt, ut, "Z", "ℤ"),
                            Z(J, tt, ut, "Z", "ℤ"),
                            Z(K, Q, ot, "h", "ℎ"),
                            Z(J, Q, ot, "h", "ℎ");
                        for (var kt = "", Mt = 0; Mt < vt.length; Mt++) {
                            var St = vt.charAt(Mt);
                            Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56320 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56372 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56424 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56580 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56736 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56788 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56840 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56944 + Mt)),
                                Z(J, Q, ut, St, kt),
                                Mt < 26 && (Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56632 + Mt)),
                                    Z(J, Q, ut, St, kt),
                                    Z(K, Q, ot, St, kt = String.fromCharCode(55349, 56476 + Mt)),
                                    Z(J, Q, ut, St, kt))
                        }
                        Z(K, Q, ot, "k", kt = String.fromCharCode(55349, 56668)),
                            Z(J, Q, ut, "k", kt);
                        for (var Lt = 0; Lt < 10; Lt++) {
                            var Tt = Lt.toString();
                            Z(K, Q, ot, Tt, kt = String.fromCharCode(55349, 57294 + Lt)),
                                Z(J, Q, ut, Tt, kt),
                                Z(K, Q, ot, Tt, kt = String.fromCharCode(55349, 57314 + Lt)),
                                Z(J, Q, ut, Tt, kt),
                                Z(K, Q, ot, Tt, kt = String.fromCharCode(55349, 57324 + Lt)),
                                Z(J, Q, ut, Tt, kt),
                                Z(K, Q, ot, Tt, kt = String.fromCharCode(55349, 57334 + Lt)),
                                Z(J, Q, ut, Tt, kt)
                        }
                        for (var zt = "ÇÐÞçþ", At = 0; At < zt.length; At++) {
                            var _t = zt.charAt(At);
                            Z(K, Q, ot, _t, _t),
                                Z(J, Q, ut, _t, _t)
                        }
                        var Pt = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]]
                            , Ct = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]]
                            , Nt = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]]
                            , $t = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488]
                            , Bt = function (t, e) {
                                return e.size < 2 ? t : Nt[t - 1][e.size - 1]
                            }
                            , qt = function () {
                                function t(e) {
                                    this.style = void 0,
                                        this.color = void 0,
                                        this.size = void 0,
                                        this.textSize = void 0,
                                        this.phantom = void 0,
                                        this.font = void 0,
                                        this.fontFamily = void 0,
                                        this.fontWeight = void 0,
                                        this.fontShape = void 0,
                                        this.sizeMultiplier = void 0,
                                        this.maxSize = void 0,
                                        this.minRuleThickness = void 0,
                                        this._fontMetrics = void 0,
                                        this.style = e.style,
                                        this.color = e.color,
                                        this.size = e.size || t.BASESIZE,
                                        this.textSize = e.textSize || this.size,
                                        this.phantom = !!e.phantom,
                                        this.font = e.font || "",
                                        this.fontFamily = e.fontFamily || "",
                                        this.fontWeight = e.fontWeight || "",
                                        this.fontShape = e.fontShape || "",
                                        this.sizeMultiplier = $t[this.size - 1],
                                        this.maxSize = e.maxSize,
                                        this.minRuleThickness = e.minRuleThickness,
                                        this._fontMetrics = void 0
                                }
                                var e = t.prototype;
                                return e.extend = function (e) {
                                    var r = {
                                        style: this.style,
                                        size: this.size,
                                        textSize: this.textSize,
                                        color: this.color,
                                        phantom: this.phantom,
                                        font: this.font,
                                        fontFamily: this.fontFamily,
                                        fontWeight: this.fontWeight,
                                        fontShape: this.fontShape,
                                        maxSize: this.maxSize,
                                        minRuleThickness: this.minRuleThickness
                                    };
                                    for (var n in e)
                                        e.hasOwnProperty(n) && (r[n] = e[n]);
                                    return new t(r)
                                }
                                    ,
                                    e.havingStyle = function (t) {
                                        return this.style === t ? this : this.extend({
                                            style: t,
                                            size: Bt(this.textSize, t)
                                        })
                                    }
                                    ,
                                    e.havingCrampedStyle = function () {
                                        return this.havingStyle(this.style.cramp())
                                    }
                                    ,
                                    e.havingSize = function (t) {
                                        return this.size === t && this.textSize === t ? this : this.extend({
                                            style: this.style.text(),
                                            size: t,
                                            textSize: t,
                                            sizeMultiplier: $t[t - 1]
                                        })
                                    }
                                    ,
                                    e.havingBaseStyle = function (e) {
                                        e = e || this.style.text();
                                        var r = Bt(t.BASESIZE, e);
                                        return this.size === r && this.textSize === t.BASESIZE && this.style === e ? this : this.extend({
                                            style: e,
                                            size: r
                                        })
                                    }
                                    ,
                                    e.havingBaseSizing = function () {
                                        var t;
                                        switch (this.style.id) {
                                            case 4:
                                            case 5:
                                                t = 3;
                                                break;
                                            case 6:
                                            case 7:
                                                t = 1;
                                                break;
                                            default:
                                                t = 6
                                        }
                                        return this.extend({
                                            style: this.style.text(),
                                            size: t
                                        })
                                    }
                                    ,
                                    e.withColor = function (t) {
                                        return this.extend({
                                            color: t
                                        })
                                    }
                                    ,
                                    e.withPhantom = function () {
                                        return this.extend({
                                            phantom: !0
                                        })
                                    }
                                    ,
                                    e.withFont = function (t) {
                                        return this.extend({
                                            font: t
                                        })
                                    }
                                    ,
                                    e.withTextFontFamily = function (t) {
                                        return this.extend({
                                            fontFamily: t,
                                            font: ""
                                        })
                                    }
                                    ,
                                    e.withTextFontWeight = function (t) {
                                        return this.extend({
                                            fontWeight: t,
                                            font: ""
                                        })
                                    }
                                    ,
                                    e.withTextFontShape = function (t) {
                                        return this.extend({
                                            fontShape: t,
                                            font: ""
                                        })
                                    }
                                    ,
                                    e.sizingClasses = function (t) {
                                        return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : []
                                    }
                                    ,
                                    e.baseSizingClasses = function () {
                                        return this.size !== t.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + t.BASESIZE] : []
                                    }
                                    ,
                                    e.fontMetrics = function () {
                                        return this._fontMetrics || (this._fontMetrics = function (t) {
                                            var e;
                                            if (!U[e = t >= 5 ? 0 : t >= 3 ? 1 : 2]) {
                                                var r = U[e] = {
                                                    cssEmPerMu: W.quad[e] / 18
                                                };
                                                for (var n in W)
                                                    W.hasOwnProperty(n) && (r[n] = W[n][e])
                                            }
                                            return U[e]
                                        }(this.size)),
                                            this._fontMetrics
                                    }
                                    ,
                                    e.getColor = function () {
                                        return this.phantom ? "transparent" : this.color
                                    }
                                    ,
                                    t
                            }();
                        qt.BASESIZE = 6;
                        var Et = qt
                            , It = {
                                pt: 1,
                                mm: 7227 / 2540,
                                cm: 7227 / 254,
                                in: 72.27,
                                bp: 1.00375,
                                pc: 12,
                                dd: 1238 / 1157,
                                cc: 14856 / 1157,
                                nd: 685 / 642,
                                nc: 1370 / 107,
                                sp: 1 / 65536,
                                px: 1.00375
                            }
                            , Rt = {
                                ex: !0,
                                em: !0,
                                mu: !0
                            }
                            , Ot = function (t) {
                                return "string" != typeof t && (t = t.unit),
                                    t in It || t in Rt || "ex" === t
                            }
                            , Ht = function (t, e) {
                                var r;
                                if (t.unit in It)
                                    r = It[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
                                else if ("mu" === t.unit)
                                    r = e.fontMetrics().cssEmPerMu;
                                else {
                                    var n;
                                    if (n = e.style.isTight() ? e.havingStyle(e.style.text()) : e,
                                        "ex" === t.unit)
                                        r = n.fontMetrics().xHeight;
                                    else {
                                        if ("em" !== t.unit)
                                            throw new a("Invalid unit: '" + t.unit + "'");
                                        r = n.fontMetrics().quad
                                    }
                                    n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier)
                                }
                                return Math.min(t.number * r, e.maxSize)
                            }
                            , Dt = function (t, e, r) {
                                return j[r][t] && j[r][t].replace && (t = j[r][t].replace),
                                {
                                    value: t,
                                    metrics: V(t, e, r)
                                }
                            }
                            , Wt = function (t, e, r, n, i) {
                                var o, a = Dt(t, e, r), s = a.metrics;
                                if (t = a.value,
                                    s) {
                                    var l = s.italic;
                                    ("text" === r || n && "mathit" === n.font) && (l = 0),
                                        o = new E(t, s.height, s.depth, l, s.skew, s.width, i)
                                } else
                                    "undefined" != typeof console && console.warn("No character metrics for '" + t + "' in style '" + e + "' and mode '" + r + "'"),
                                        o = new E(t, 0, 0, 0, 0, 0, i);
                                if (n) {
                                    o.maxFontSize = n.sizeMultiplier,
                                        n.style.isTight() && o.classes.push("mtight");
                                    var h = n.getColor();
                                    h && (o.style.color = h)
                                }
                                return o
                            }
                            , Ft = function (t, e) {
                                if (A(t.classes) !== A(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize)
                                    return !1;
                                for (var r in t.style)
                                    if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
                                        return !1;
                                for (var n in e.style)
                                    if (e.style.hasOwnProperty(n) && t.style[n] !== e.style[n])
                                        return !1;
                                return !0
                            }
                            , Vt = function (t) {
                                for (var e = 0, r = 0, n = 0, i = 0; i < t.children.length; i++) {
                                    var o = t.children[i];
                                    o.height > e && (e = o.height),
                                        o.depth > r && (r = o.depth),
                                        o.maxFontSize > n && (n = o.maxFontSize)
                                }
                                t.height = e,
                                    t.depth = r,
                                    t.maxFontSize = n
                            }
                            , Ut = function (t, e, r, n) {
                                var i = new N(t, e, r, n);
                                return Vt(i),
                                    i
                            }
                            , Gt = function (t, e, r, n) {
                                return new N(t, e, r, n)
                            }
                            , Xt = function (t) {
                                var e = new z(t);
                                return Vt(e),
                                    e
                            }
                            , Yt = function (t, e, r) {
                                var n = "";
                                switch (t) {
                                    case "amsrm":
                                        n = "AMS";
                                        break;
                                    case "textrm":
                                        n = "Main";
                                        break;
                                    case "textsf":
                                        n = "SansSerif";
                                        break;
                                    case "texttt":
                                        n = "Typewriter";
                                        break;
                                    default:
                                        n = t
                                }
                                return n + "-" + ("textbf" === e && "textit" === r ? "BoldItalic" : "textbf" === e ? "Bold" : "textit" === e ? "Italic" : "Regular")
                            }
                            , jt = {
                                mathbf: {
                                    variant: "bold",
                                    fontName: "Main-Bold"
                                },
                                mathrm: {
                                    variant: "normal",
                                    fontName: "Main-Regular"
                                },
                                textit: {
                                    variant: "italic",
                                    fontName: "Main-Italic"
                                },
                                mathit: {
                                    variant: "italic",
                                    fontName: "Main-Italic"
                                },
                                mathnormal: {
                                    variant: "italic",
                                    fontName: "Math-Italic"
                                },
                                mathbb: {
                                    variant: "double-struck",
                                    fontName: "AMS-Regular"
                                },
                                mathcal: {
                                    variant: "script",
                                    fontName: "Caligraphic-Regular"
                                },
                                mathfrak: {
                                    variant: "fraktur",
                                    fontName: "Fraktur-Regular"
                                },
                                mathscr: {
                                    variant: "script",
                                    fontName: "Script-Regular"
                                },
                                mathsf: {
                                    variant: "sans-serif",
                                    fontName: "SansSerif-Regular"
                                },
                                mathtt: {
                                    variant: "monospace",
                                    fontName: "Typewriter-Regular"
                                }
                            }
                            , Zt = {
                                vec: ["vec", .471, .714],
                                oiintSize1: ["oiintSize1", .957, .499],
                                oiintSize2: ["oiintSize2", 1.472, .659],
                                oiiintSize1: ["oiiintSize1", 1.304, .499],
                                oiiintSize2: ["oiiintSize2", 1.98, .659],
                                leftParenInner: ["leftParenInner", .875, .3],
                                rightParenInner: ["rightParenInner", .875, .3]
                            }
                            , Kt = {
                                fontMap: jt,
                                makeSymbol: Wt,
                                mathsym: function (t, e, r, n) {
                                    return void 0 === n && (n = []),
                                        "boldsymbol" === r.font && Dt(t, "Main-Bold", e).metrics ? Wt(t, "Main-Bold", e, r, n.concat(["mathbf"])) : "\\" === t || "main" === j[e][t].font ? Wt(t, "Main-Regular", e, r, n) : Wt(t, "AMS-Regular", e, r, n.concat(["amsrm"]))
                                },
                                makeSpan: Ut,
                                makeSvgSpan: Gt,
                                makeLineSpan: function (t, e, r) {
                                    var n = Ut([t], [], e);
                                    return n.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness),
                                        n.style.borderBottomWidth = n.height + "em",
                                        n.maxFontSize = 1,
                                        n
                                },
                                makeAnchor: function (t, e, r, n) {
                                    var i = new $(t, e, r, n);
                                    return Vt(i),
                                        i
                                },
                                makeFragment: Xt,
                                wrapFragment: function (t, e) {
                                    return t instanceof z ? Ut([], [t], e) : t
                                },
                                makeVList: function (t, e) {
                                    for (var r = function (t) {
                                        if ("individualShift" === t.positionType) {
                                            for (var e = t.children, r = [e[0]], n = -e[0].shift - e[0].elem.depth, i = n, o = 1; o < e.length; o++) {
                                                var a = -e[o].shift - i - e[o].elem.depth
                                                    , s = a - (e[o - 1].elem.height + e[o - 1].elem.depth);
                                                i += a,
                                                    r.push({
                                                        type: "kern",
                                                        size: s
                                                    }),
                                                    r.push(e[o])
                                            }
                                            return {
                                                children: r,
                                                depth: n
                                            }
                                        }
                                        var l;
                                        if ("top" === t.positionType) {
                                            for (var h = t.positionData, c = 0; c < t.children.length; c++) {
                                                var u = t.children[c];
                                                h -= "kern" === u.type ? u.size : u.elem.height + u.elem.depth
                                            }
                                            l = h
                                        } else if ("bottom" === t.positionType)
                                            l = -t.positionData;
                                        else {
                                            var m = t.children[0];
                                            if ("elem" !== m.type)
                                                throw new Error('First child must have type "elem".');
                                            if ("shift" === t.positionType)
                                                l = -m.elem.depth - t.positionData;
                                            else {
                                                if ("firstBaseline" !== t.positionType)
                                                    throw new Error("Invalid positionType " + t.positionType + ".");
                                                l = -m.elem.depth
                                            }
                                        }
                                        return {
                                            children: t.children,
                                            depth: l
                                        }
                                    }(t), n = r.children, i = r.depth, o = 0, a = 0; a < n.length; a++) {
                                        var s = n[a];
                                        if ("elem" === s.type) {
                                            var l = s.elem;
                                            o = Math.max(o, l.maxFontSize, l.height)
                                        }
                                    }
                                    o += 2;
                                    var h = Ut(["pstrut"], []);
                                    h.style.height = o + "em";
                                    for (var c = [], u = i, m = i, p = i, d = 0; d < n.length; d++) {
                                        var f = n[d];
                                        if ("kern" === f.type)
                                            p += f.size;
                                        else {
                                            var g = f.elem
                                                , b = f.wrapperClasses || []
                                                , y = f.wrapperStyle || {}
                                                , v = Ut(b, [h, g], void 0, y);
                                            v.style.top = -o - p - g.depth + "em",
                                                f.marginLeft && (v.style.marginLeft = f.marginLeft),
                                                f.marginRight && (v.style.marginRight = f.marginRight),
                                                c.push(v),
                                                p += g.height + g.depth
                                        }
                                        u = Math.min(u, p),
                                            m = Math.max(m, p)
                                    }
                                    var x, w = Ut(["vlist"], c);
                                    if (w.style.height = m + "em",
                                        u < 0) {
                                        var k = Ut([], [])
                                            , M = Ut(["vlist"], [k]);
                                        M.style.height = -u + "em";
                                        var S = Ut(["vlist-s"], [new E("​")]);
                                        x = [Ut(["vlist-r"], [w, S]), Ut(["vlist-r"], [M])]
                                    } else
                                        x = [Ut(["vlist-r"], [w])];
                                    var L = Ut(["vlist-t"], x);
                                    return 2 === x.length && L.classes.push("vlist-t2"),
                                        L.height = m,
                                        L.depth = -u,
                                        L
                                },
                                makeOrd: function (t, e, r) {
                                    var n = t.mode
                                        , i = t.text
                                        , o = ["mord"]
                                        , s = "math" === n || "text" === n && e.font
                                        , l = s ? e.font : e.fontFamily;
                                    if (55349 === i.charCodeAt(0)) {
                                        var h = function (t, e) {
                                            var r = 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536
                                                , n = "math" === e ? 0 : 1;
                                            if (119808 <= r && r < 120484) {
                                                var i = Math.floor((r - 119808) / 26);
                                                return [Pt[i][2], Pt[i][n]]
                                            }
                                            if (120782 <= r && r <= 120831) {
                                                var o = Math.floor((r - 120782) / 10);
                                                return [Ct[o][2], Ct[o][n]]
                                            }
                                            if (120485 === r || 120486 === r)
                                                return [Pt[0][2], Pt[0][n]];
                                            if (120486 < r && r < 120782)
                                                return ["", ""];
                                            throw new a("Unsupported character: " + t)
                                        }(i, n)
                                            , c = h[0]
                                            , u = h[1];
                                        return Wt(i, c, n, e, o.concat(u))
                                    }
                                    if (l) {
                                        var m, p;
                                        if ("boldsymbol" === l) {
                                            var d = function (t, e, r, n, i) {
                                                return "textord" !== i && Dt(t, "Math-BoldItalic", e).metrics ? {
                                                    fontName: "Math-BoldItalic",
                                                    fontClass: "boldsymbol"
                                                } : {
                                                    fontName: "Main-Bold",
                                                    fontClass: "mathbf"
                                                }
                                            }(i, n, 0, 0, r);
                                            m = d.fontName,
                                                p = [d.fontClass]
                                        } else
                                            s ? (m = jt[l].fontName,
                                                p = [l]) : (m = Yt(l, e.fontWeight, e.fontShape),
                                                    p = [l, e.fontWeight, e.fontShape]);
                                        if (Dt(i, m, n).metrics)
                                            return Wt(i, m, n, e, o.concat(p));
                                        if (mt.hasOwnProperty(i) && "Typewriter" === m.substr(0, 10)) {
                                            for (var f = [], g = 0; g < i.length; g++)
                                                f.push(Wt(i[g], m, n, e, o.concat(p)));
                                            return Xt(f)
                                        }
                                    }
                                    if ("mathord" === r)
                                        return Wt(i, "Math-Italic", n, e, o.concat(["mathnormal"]));
                                    if ("textord" === r) {
                                        var b = j[n][i] && j[n][i].font;
                                        if ("ams" === b) {
                                            var y = Yt("amsrm", e.fontWeight, e.fontShape);
                                            return Wt(i, y, n, e, o.concat("amsrm", e.fontWeight, e.fontShape))
                                        }
                                        if ("main" !== b && b) {
                                            var v = Yt(b, e.fontWeight, e.fontShape);
                                            return Wt(i, v, n, e, o.concat(v, e.fontWeight, e.fontShape))
                                        }
                                        var x = Yt("textrm", e.fontWeight, e.fontShape);
                                        return Wt(i, x, n, e, o.concat(e.fontWeight, e.fontShape))
                                    }
                                    throw new Error("unexpected type: " + r + " in makeOrd")
                                },
                                makeGlue: function (t, e) {
                                    var r = Ut(["mspace"], [], e)
                                        , n = Ht(t, e);
                                    return r.style.marginRight = n + "em",
                                        r
                                },
                                staticSvg: function (t, e) {
                                    var r = Zt[t]
                                        , n = r[0]
                                        , i = r[1]
                                        , o = r[2]
                                        , a = new R(n)
                                        , s = new I([a], {
                                            width: i + "em",
                                            height: o + "em",
                                            style: "width:" + i + "em",
                                            viewBox: "0 0 " + 1e3 * i + " " + 1e3 * o,
                                            preserveAspectRatio: "xMinYMin"
                                        })
                                        , l = Gt(["overlay"], [s], e);
                                    return l.height = o,
                                        l.style.height = o + "em",
                                        l.style.width = i + "em",
                                        l
                                },
                                svgData: Zt,
                                tryCombineChars: function (t) {
                                    for (var e = 0; e < t.length - 1; e++) {
                                        var r = t[e]
                                            , n = t[e + 1];
                                        r instanceof E && n instanceof E && Ft(r, n) && (r.text += n.text,
                                            r.height = Math.max(r.height, n.height),
                                            r.depth = Math.max(r.depth, n.depth),
                                            r.italic = n.italic,
                                            t.splice(e + 1, 1),
                                            e--)
                                    }
                                    return t
                                }
                            }
                            , Jt = {
                                number: 3,
                                unit: "mu"
                            }
                            , Qt = {
                                number: 4,
                                unit: "mu"
                            }
                            , te = {
                                number: 5,
                                unit: "mu"
                            }
                            , ee = {
                                mord: {
                                    mop: Jt,
                                    mbin: Qt,
                                    mrel: te,
                                    minner: Jt
                                },
                                mop: {
                                    mord: Jt,
                                    mop: Jt,
                                    mrel: te,
                                    minner: Jt
                                },
                                mbin: {
                                    mord: Qt,
                                    mop: Qt,
                                    mopen: Qt,
                                    minner: Qt
                                },
                                mrel: {
                                    mord: te,
                                    mop: te,
                                    mopen: te,
                                    minner: te
                                },
                                mopen: {},
                                mclose: {
                                    mop: Jt,
                                    mbin: Qt,
                                    mrel: te,
                                    minner: Jt
                                },
                                mpunct: {
                                    mord: Jt,
                                    mop: Jt,
                                    mrel: te,
                                    mopen: Jt,
                                    mclose: Jt,
                                    mpunct: Jt,
                                    minner: Jt
                                },
                                minner: {
                                    mord: Jt,
                                    mop: Jt,
                                    mbin: Qt,
                                    mrel: te,
                                    mopen: Jt,
                                    mpunct: Jt,
                                    minner: Jt
                                }
                            }
                            , re = {
                                mord: {
                                    mop: Jt
                                },
                                mop: {
                                    mord: Jt,
                                    mop: Jt
                                },
                                mbin: {},
                                mrel: {},
                                mopen: {},
                                mclose: {
                                    mop: Jt
                                },
                                mpunct: {},
                                minner: {
                                    mop: Jt
                                }
                            }
                            , ne = {}
                            , ie = {}
                            , oe = {};
                        function ae(t) {
                            for (var e = t.type, r = t.names, n = t.props, i = t.handler, o = t.htmlBuilder, a = t.mathmlBuilder, s = {
                                type: e,
                                numArgs: n.numArgs,
                                argTypes: n.argTypes,
                                greediness: void 0 === n.greediness ? 1 : n.greediness,
                                allowedInText: !!n.allowedInText,
                                allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
                                numOptionalArgs: n.numOptionalArgs || 0,
                                infix: !!n.infix,
                                handler: i
                            }, l = 0; l < r.length; ++l)
                                ne[r[l]] = s;
                            e && (o && (ie[e] = o),
                                a && (oe[e] = a))
                        }
                        function se(t) {
                            ae({
                                type: t.type,
                                names: [],
                                props: {
                                    numArgs: 0
                                },
                                handler: function () {
                                    throw new Error("Should never be called.")
                                },
                                htmlBuilder: t.htmlBuilder,
                                mathmlBuilder: t.mathmlBuilder
                            })
                        }
                        var le = function (t) {
                            return "ordgroup" === t.type ? t.body : [t]
                        }
                            , he = Kt.makeSpan
                            , ce = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]
                            , ue = ["rightmost", "mrel", "mclose", "mpunct"]
                            , me = {
                                display: w.DISPLAY,
                                text: w.TEXT,
                                script: w.SCRIPT,
                                scriptscript: w.SCRIPTSCRIPT
                            }
                            , pe = {
                                mord: "mord",
                                mop: "mop",
                                mbin: "mbin",
                                mrel: "mrel",
                                mopen: "mopen",
                                mclose: "mclose",
                                mpunct: "mpunct",
                                minner: "minner"
                            }
                            , de = function (t, e, r, n) {
                                void 0 === n && (n = [null, null]);
                                for (var i = [], o = 0; o < t.length; o++) {
                                    var a = xe(t[o], e);
                                    if (a instanceof z) {
                                        var s = a.children;
                                        i.push.apply(i, s)
                                    } else
                                        i.push(a)
                                }
                                if (!r)
                                    return i;
                                var l = e;
                                if (1 === t.length) {
                                    var h = t[0];
                                    "sizing" === h.type ? l = e.havingSize(h.size) : "styling" === h.type && (l = e.havingStyle(me[h.style]))
                                }
                                var c = he([n[0] || "leftmost"], [], e)
                                    , m = he([n[1] || "rightmost"], [], e)
                                    , p = "root" === r;
                                return fe(i, (function (t, e) {
                                    var r = e.classes[0]
                                        , n = t.classes[0];
                                    "mbin" === r && u.contains(ue, n) ? e.classes[0] = "mord" : "mbin" === n && u.contains(ce, r) && (t.classes[0] = "mord")
                                }
                                ), {
                                    node: c
                                }, m, p),
                                    fe(i, (function (t, e) {
                                        var r = ye(e)
                                            , n = ye(t)
                                            , i = r && n ? t.hasClass("mtight") ? re[r][n] : ee[r][n] : null;
                                        if (i)
                                            return Kt.makeGlue(i, l)
                                    }
                                    ), {
                                        node: c
                                    }, m, p),
                                    i
                            }
                            , fe = function t(e, r, n, i, o) {
                                i && e.push(i);
                                for (var a = 0; a < e.length; a++) {
                                    var s = e[a]
                                        , l = ge(s);
                                    if (l)
                                        t(l.children, r, n, null, o);
                                    else {
                                        var h = !s.hasClass("mspace");
                                        if (h) {
                                            var c = r(s, n.node);
                                            c && (n.insertAfter ? n.insertAfter(c) : (e.unshift(c),
                                                a++))
                                        }
                                        h ? n.node = s : o && s.hasClass("newline") && (n.node = he(["leftmost"])),
                                            n.insertAfter = function (t) {
                                                return function (r) {
                                                    e.splice(t + 1, 0, r),
                                                        a++
                                                }
                                            }(a)
                                    }
                                }
                                i && e.pop()
                            }
                            , ge = function (t) {
                                return t instanceof z || t instanceof $ || t instanceof N && t.hasClass("enclosing") ? t : null
                            }
                            , be = function t(e, r) {
                                var n = ge(e);
                                if (n) {
                                    var i = n.children;
                                    if (i.length) {
                                        if ("right" === r)
                                            return t(i[i.length - 1], "right");
                                        if ("left" === r)
                                            return t(i[0], "left")
                                    }
                                }
                                return e
                            }
                            , ye = function (t, e) {
                                return t ? (e && (t = be(t, e)),
                                    pe[t.classes[0]] || null) : null
                            }
                            , ve = function (t, e) {
                                var r = ["nulldelimiter"].concat(t.baseSizingClasses());
                                return he(e.concat(r))
                            }
                            , xe = function (t, e, r) {
                                if (!t)
                                    return he();
                                if (ie[t.type]) {
                                    var n = ie[t.type](t, e);
                                    if (r && e.size !== r.size) {
                                        n = he(e.sizingClasses(r), [n], e);
                                        var i = e.sizeMultiplier / r.sizeMultiplier;
                                        n.height *= i,
                                            n.depth *= i
                                    }
                                    return n
                                }
                                throw new a("Got group of unknown type: '" + t.type + "'")
                            };
                        function we(t, e) {
                            var r = he(["base"], t, e)
                                , n = he(["strut"]);
                            return n.style.height = r.height + r.depth + "em",
                                n.style.verticalAlign = -r.depth + "em",
                                r.children.unshift(n),
                                r
                        }
                        function ke(t, e) {
                            var r = null;
                            1 === t.length && "tag" === t[0].type && (r = t[0].tag,
                                t = t[0].body);
                            for (var n, i = de(t, e, "root"), o = [], a = [], s = 0; s < i.length; s++)
                                if (a.push(i[s]),
                                    i[s].hasClass("mbin") || i[s].hasClass("mrel") || i[s].hasClass("allowbreak")) {
                                    for (var l = !1; s < i.length - 1 && i[s + 1].hasClass("mspace") && !i[s + 1].hasClass("newline");)
                                        s++,
                                            a.push(i[s]),
                                            i[s].hasClass("nobreak") && (l = !0);
                                    l || (o.push(we(a, e)),
                                        a = [])
                                } else
                                    i[s].hasClass("newline") && (a.pop(),
                                        a.length > 0 && (o.push(we(a, e)),
                                            a = []),
                                        o.push(i[s]));
                            a.length > 0 && o.push(we(a, e)),
                                r && ((n = we(de(r, e, !0))).classes = ["tag"],
                                    o.push(n));
                            var h = he(["katex-html"], o);
                            if (h.setAttribute("aria-hidden", "true"),
                                n) {
                                var c = n.children[0];
                                c.style.height = h.height + h.depth + "em",
                                    c.style.verticalAlign = -h.depth + "em"
                            }
                            return h
                        }
                        function Me(t) {
                            return new z(t)
                        }
                        var Se = function () {
                            function t(t, e) {
                                this.type = void 0,
                                    this.attributes = void 0,
                                    this.children = void 0,
                                    this.type = t,
                                    this.attributes = {},
                                    this.children = e || []
                            }
                            var e = t.prototype;
                            return e.setAttribute = function (t, e) {
                                this.attributes[t] = e
                            }
                                ,
                                e.getAttribute = function (t) {
                                    return this.attributes[t]
                                }
                                ,
                                e.toNode = function () {
                                    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                    for (var r = 0; r < this.children.length; r++)
                                        t.appendChild(this.children[r].toNode());
                                    return t
                                }
                                ,
                                e.toMarkup = function () {
                                    var t = "<" + this.type;
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="',
                                            t += u.escape(this.attributes[e]),
                                            t += '"');
                                    t += ">";
                                    for (var r = 0; r < this.children.length; r++)
                                        t += this.children[r].toMarkup();
                                    return t += "</" + this.type + ">"
                                }
                                ,
                                e.toText = function () {
                                    return this.children.map((function (t) {
                                        return t.toText()
                                    }
                                    )).join("")
                                }
                                ,
                                t
                        }()
                            , Le = function () {
                                function t(t) {
                                    this.text = void 0,
                                        this.text = t
                                }
                                var e = t.prototype;
                                return e.toNode = function () {
                                    return document.createTextNode(this.text)
                                }
                                    ,
                                    e.toMarkup = function () {
                                        return u.escape(this.toText())
                                    }
                                    ,
                                    e.toText = function () {
                                        return this.text
                                    }
                                    ,
                                    t
                            }()
                            , Te = {
                                MathNode: Se,
                                TextNode: Le,
                                SpaceNode: function () {
                                    function t(t) {
                                        this.width = void 0,
                                            this.character = void 0,
                                            this.width = t,
                                            this.character = t >= .05555 && t <= .05556 ? " " : t >= .1666 && t <= .1667 ? " " : t >= .2222 && t <= .2223 ? " " : t >= .2777 && t <= .2778 ? "  " : t >= -.05556 && t <= -.05555 ? " ⁣" : t >= -.1667 && t <= -.1666 ? " ⁣" : t >= -.2223 && t <= -.2222 ? " ⁣" : t >= -.2778 && t <= -.2777 ? " ⁣" : null
                                    }
                                    var e = t.prototype;
                                    return e.toNode = function () {
                                        if (this.character)
                                            return document.createTextNode(this.character);
                                        var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                                        return t.setAttribute("width", this.width + "em"),
                                            t
                                    }
                                        ,
                                        e.toMarkup = function () {
                                            return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>'
                                        }
                                        ,
                                        e.toText = function () {
                                            return this.character ? this.character : " "
                                        }
                                        ,
                                        t
                                }(),
                                newDocumentFragment: Me
                            }
                            , ze = function (t, e, r) {
                                return !j[e][t] || !j[e][t].replace || 55349 === t.charCodeAt(0) || mt.hasOwnProperty(t) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (t = j[e][t].replace),
                                    new Te.TextNode(t)
                            }
                            , Ae = function (t) {
                                return 1 === t.length ? t[0] : new Te.MathNode("mrow", t)
                            }
                            , _e = function (t, e) {
                                if ("texttt" === e.fontFamily)
                                    return "monospace";
                                if ("textsf" === e.fontFamily)
                                    return "textit" === e.fontShape && "textbf" === e.fontWeight ? "sans-serif-bold-italic" : "textit" === e.fontShape ? "sans-serif-italic" : "textbf" === e.fontWeight ? "bold-sans-serif" : "sans-serif";
                                if ("textit" === e.fontShape && "textbf" === e.fontWeight)
                                    return "bold-italic";
                                if ("textit" === e.fontShape)
                                    return "italic";
                                if ("textbf" === e.fontWeight)
                                    return "bold";
                                var r = e.font;
                                if (!r || "mathnormal" === r)
                                    return null;
                                var n = t.mode;
                                if ("mathit" === r)
                                    return "italic";
                                if ("boldsymbol" === r)
                                    return "textord" === t.type ? "bold" : "bold-italic";
                                if ("mathbf" === r)
                                    return "bold";
                                if ("mathbb" === r)
                                    return "double-struck";
                                if ("mathfrak" === r)
                                    return "fraktur";
                                if ("mathscr" === r || "mathcal" === r)
                                    return "script";
                                if ("mathsf" === r)
                                    return "sans-serif";
                                if ("mathtt" === r)
                                    return "monospace";
                                var i = t.text;
                                return u.contains(["\\imath", "\\jmath"], i) ? null : (j[n][i] && j[n][i].replace && (i = j[n][i].replace),
                                    V(i, Kt.fontMap[r].fontName, n) ? Kt.fontMap[r].variant : null)
                            }
                            , Pe = function (t, e, r) {
                                if (1 === t.length) {
                                    var n = Ne(t[0], e);
                                    return r && n instanceof Se && "mo" === n.type && (n.setAttribute("lspace", "0em"),
                                        n.setAttribute("rspace", "0em")),
                                        [n]
                                }
                                for (var i, o = [], a = 0; a < t.length; a++) {
                                    var s = Ne(t[a], e);
                                    if (s instanceof Se && i instanceof Se) {
                                        if ("mtext" === s.type && "mtext" === i.type && s.getAttribute("mathvariant") === i.getAttribute("mathvariant")) {
                                            var l;
                                            (l = i.children).push.apply(l, s.children);
                                            continue
                                        }
                                        if ("mn" === s.type && "mn" === i.type) {
                                            var h;
                                            (h = i.children).push.apply(h, s.children);
                                            continue
                                        }
                                        if ("mi" === s.type && 1 === s.children.length && "mn" === i.type) {
                                            var c = s.children[0];
                                            if (c instanceof Le && "." === c.text) {
                                                var u;
                                                (u = i.children).push.apply(u, s.children);
                                                continue
                                            }
                                        } else if ("mi" === i.type && 1 === i.children.length) {
                                            var m = i.children[0];
                                            if (m instanceof Le && "̸" === m.text && ("mo" === s.type || "mi" === s.type || "mn" === s.type)) {
                                                var p = s.children[0];
                                                p instanceof Le && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1),
                                                    o.pop())
                                            }
                                        }
                                    }
                                    o.push(s),
                                        i = s
                                }
                                return o
                            }
                            , Ce = function (t, e, r) {
                                return Ae(Pe(t, e, r))
                            }
                            , Ne = function (t, e) {
                                if (!t)
                                    return new Te.MathNode("mrow");
                                if (oe[t.type])
                                    return oe[t.type](t, e);
                                throw new a("Got group of unknown type: '" + t.type + "'")
                            };
                        function $e(t, e, r, n, i) {
                            var o, a = Pe(t, r);
                            o = 1 === a.length && a[0] instanceof Se && u.contains(["mrow", "mtable"], a[0].type) ? a[0] : new Te.MathNode("mrow", a);
                            var s = new Te.MathNode("annotation", [new Te.TextNode(e)]);
                            s.setAttribute("encoding", "application/x-tex");
                            var l = new Te.MathNode("semantics", [o, s])
                                , h = new Te.MathNode("math", [l]);
                            h.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
                                n && h.setAttribute("display", "block");
                            var c = i ? "katex" : "katex-mathml";
                            return Kt.makeSpan([c], [h])
                        }
                        var Be = function (t) {
                            return new Et({
                                style: t.displayMode ? w.DISPLAY : w.TEXT,
                                maxSize: t.maxSize,
                                minRuleThickness: t.minRuleThickness
                            })
                        }
                            , qe = function (t, e) {
                                if (e.displayMode) {
                                    var r = ["katex-display"];
                                    e.leqno && r.push("leqno"),
                                        e.fleqn && r.push("fleqn"),
                                        t = Kt.makeSpan(r, [t])
                                }
                                return t
                            }
                            , Ee = {
                                widehat: "^",
                                widecheck: "ˇ",
                                widetilde: "~",
                                utilde: "~",
                                overleftarrow: "←",
                                underleftarrow: "←",
                                xleftarrow: "←",
                                overrightarrow: "→",
                                underrightarrow: "→",
                                xrightarrow: "→",
                                underbrace: "⏟",
                                overbrace: "⏞",
                                overgroup: "⏠",
                                undergroup: "⏡",
                                overleftrightarrow: "↔",
                                underleftrightarrow: "↔",
                                xleftrightarrow: "↔",
                                Overrightarrow: "⇒",
                                xRightarrow: "⇒",
                                overleftharpoon: "↼",
                                xleftharpoonup: "↼",
                                overrightharpoon: "⇀",
                                xrightharpoonup: "⇀",
                                xLeftarrow: "⇐",
                                xLeftrightarrow: "⇔",
                                xhookleftarrow: "↩",
                                xhookrightarrow: "↪",
                                xmapsto: "↦",
                                xrightharpoondown: "⇁",
                                xleftharpoondown: "↽",
                                xrightleftharpoons: "⇌",
                                xleftrightharpoons: "⇋",
                                xtwoheadleftarrow: "↞",
                                xtwoheadrightarrow: "↠",
                                xlongequal: "=",
                                xtofrom: "⇄",
                                xrightleftarrows: "⇄",
                                xrightequilibrium: "⇌",
                                xleftequilibrium: "⇋"
                            }
                            , Ie = {
                                overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
                                overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
                                underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
                                underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
                                xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
                                xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
                                Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
                                xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
                                xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
                                overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
                                xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
                                xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
                                overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
                                xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
                                xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
                                xlongequal: [["longequal"], .888, 334, "xMinYMin"],
                                xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
                                xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
                                overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
                                overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
                                underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
                                underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
                                xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
                                xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
                                xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
                                xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
                                xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
                                xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
                                overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
                                underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
                                overgroup: [["leftgroup", "rightgroup"], .888, 342],
                                undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
                                xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
                                xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
                                xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
                                xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
                                xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
                            }
                            , Re = function (t, e, r, n) {
                                var i, o = t.height + t.depth + 2 * r;
                                if (/fbox|color/.test(e)) {
                                    if (i = Kt.makeSpan(["stretchy", e], [], n),
                                        "fbox" === e) {
                                        var a = n.color && n.getColor();
                                        a && (i.style.borderColor = a)
                                    }
                                } else {
                                    var s = [];
                                    /^[bx]cancel$/.test(e) && s.push(new O({
                                        x1: "0",
                                        y1: "0",
                                        x2: "100%",
                                        y2: "100%",
                                        "stroke-width": "0.046em"
                                    })),
                                        /^x?cancel$/.test(e) && s.push(new O({
                                            x1: "0",
                                            y1: "100%",
                                            x2: "100%",
                                            y2: "0",
                                            "stroke-width": "0.046em"
                                        }));
                                    var l = new I(s, {
                                        width: "100%",
                                        height: o + "em"
                                    });
                                    i = Kt.makeSvgSpan([], [l], n)
                                }
                                return i.height = o,
                                    i.style.height = o + "em",
                                    i
                            }
                            , Oe = function (t) {
                                var e = new Te.MathNode("mo", [new Te.TextNode(Ee[t.substr(1)])]);
                                return e.setAttribute("stretchy", "true"),
                                    e
                            }
                            , He = function (t, e) {
                                var r = function () {
                                    var r = 4e5
                                        , n = t.label.substr(1);
                                    if (u.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                                        var i, o, a, s = "ordgroup" === (d = t.base).type ? d.body.length : 1;
                                        if (s > 5)
                                            "widehat" === n || "widecheck" === n ? (i = 420,
                                                r = 2364,
                                                a = .42,
                                                o = n + "4") : (i = 312,
                                                    r = 2340,
                                                    a = .34,
                                                    o = "tilde4");
                                        else {
                                            var l = [1, 1, 2, 2, 3, 3][s];
                                            "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][l],
                                                i = [0, 239, 300, 360, 420][l],
                                                a = [0, .24, .3, .3, .36, .42][l],
                                                o = n + l) : (r = [0, 600, 1033, 2339, 2340][l],
                                                    i = [0, 260, 286, 306, 312][l],
                                                    a = [0, .26, .286, .3, .306, .34][l],
                                                    o = "tilde" + l)
                                        }
                                        var h = new R(o)
                                            , c = new I([h], {
                                                width: "100%",
                                                height: a + "em",
                                                viewBox: "0 0 " + r + " " + i,
                                                preserveAspectRatio: "none"
                                            });
                                        return {
                                            span: Kt.makeSvgSpan([], [c], e),
                                            minWidth: 0,
                                            height: a
                                        }
                                    }
                                    var m, p, d, f = [], g = Ie[n], b = g[0], y = g[1], v = g[2], x = v / 1e3, w = b.length;
                                    if (1 === w)
                                        m = ["hide-tail"],
                                            p = [g[3]];
                                    else if (2 === w)
                                        m = ["halfarrow-left", "halfarrow-right"],
                                            p = ["xMinYMin", "xMaxYMin"];
                                    else {
                                        if (3 !== w)
                                            throw new Error("Correct katexImagesData or update code here to support\n                    " + w + " children.");
                                        m = ["brace-left", "brace-center", "brace-right"],
                                            p = ["xMinYMin", "xMidYMin", "xMaxYMin"]
                                    }
                                    for (var k = 0; k < w; k++) {
                                        var M = new R(b[k])
                                            , S = new I([M], {
                                                width: "400em",
                                                height: x + "em",
                                                viewBox: "0 0 " + r + " " + v,
                                                preserveAspectRatio: p[k] + " slice"
                                            })
                                            , L = Kt.makeSvgSpan([m[k]], [S], e);
                                        if (1 === w)
                                            return {
                                                span: L,
                                                minWidth: y,
                                                height: x
                                            };
                                        L.style.height = x + "em",
                                            f.push(L)
                                    }
                                    return {
                                        span: Kt.makeSpan(["stretchy"], f, e),
                                        minWidth: y,
                                        height: x
                                    }
                                }()
                                    , n = r.span
                                    , i = r.minWidth
                                    , o = r.height;
                                return n.height = o,
                                    n.style.height = o + "em",
                                    i > 0 && (n.style.minWidth = i + "em"),
                                    n
                            };
                        function De(t, e) {
                            if (!t || t.type !== e)
                                throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
                            return t
                        }
                        function We(t) {
                            var e = Fe(t);
                            if (!e)
                                throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
                            return e
                        }
                        function Fe(t) {
                            return t && ("atom" === t.type || X.hasOwnProperty(t.type)) ? t : null
                        }
                        var Ve = function (t, e) {
                            var r, n, i;
                            t && "supsub" === t.type ? (r = (n = De(t.base, "accent")).base,
                                t.base = r,
                                i = function (t) {
                                    if (t instanceof N)
                                        return t;
                                    throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".")
                                }(xe(t, e)),
                                t.base = n) : r = (n = De(t, "accent")).base;
                            var o = xe(r, e.havingCrampedStyle())
                                , a = 0;
                            if (n.isShifty && u.isCharacterBox(r)) {
                                var s = u.getBaseElem(r);
                                a = H(xe(s, e.havingCrampedStyle())).skew
                            }
                            var l, h = Math.min(o.height, e.fontMetrics().xHeight);
                            if (n.isStretchy)
                                l = He(n, e),
                                    l = Kt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: o
                                        }, {
                                            type: "elem",
                                            elem: l,
                                            wrapperClasses: ["svg-align"],
                                            wrapperStyle: a > 0 ? {
                                                width: "calc(100% - " + 2 * a + "em)",
                                                marginLeft: 2 * a + "em"
                                            } : void 0
                                        }]
                                    }, e);
                            else {
                                var c, m;
                                "\\vec" === n.label ? (c = Kt.staticSvg("vec", e),
                                    m = Kt.svgData.vec[1]) : ((c = H(c = Kt.makeOrd({
                                        mode: n.mode,
                                        text: n.label
                                    }, e, "textord"))).italic = 0,
                                        m = c.width),
                                    l = Kt.makeSpan(["accent-body"], [c]);
                                var p = "\\textcircled" === n.label;
                                p && (l.classes.push("accent-full"),
                                    h = o.height);
                                var d = a;
                                p || (d -= m / 2),
                                    l.style.left = d + "em",
                                    "\\textcircled" === n.label && (l.style.top = ".2em"),
                                    l = Kt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: o
                                        }, {
                                            type: "kern",
                                            size: -h
                                        }, {
                                            type: "elem",
                                            elem: l
                                        }]
                                    }, e)
                            }
                            var f = Kt.makeSpan(["mord", "accent"], [l], e);
                            return i ? (i.children[0] = f,
                                i.height = Math.max(f.height, i.height),
                                i.classes[0] = "mord",
                                i) : f
                        }
                            , Ue = function (t, e) {
                                var r = t.isStretchy ? Oe(t.label) : new Te.MathNode("mo", [ze(t.label, t.mode)])
                                    , n = new Te.MathNode("mover", [Ne(t.base, e), r]);
                                return n.setAttribute("accent", "true"),
                                    n
                            }
                            , Ge = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((function (t) {
                                return "\\" + t
                            }
                            )).join("|"));
                        ae({
                            type: "accent",
                            names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = e[0]
                                    , n = !Ge.test(t.funcName)
                                    , i = !n || "\\widehat" === t.funcName || "\\widetilde" === t.funcName || "\\widecheck" === t.funcName;
                                return {
                                    type: "accent",
                                    mode: t.parser.mode,
                                    label: t.funcName,
                                    isStretchy: n,
                                    isShifty: i,
                                    base: r
                                }
                            },
                            htmlBuilder: Ve,
                            mathmlBuilder: Ue
                        }),
                            ae({
                                type: "accent",
                                names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function (t, e) {
                                    var r = e[0];
                                    return {
                                        type: "accent",
                                        mode: t.parser.mode,
                                        label: t.funcName,
                                        isStretchy: !1,
                                        isShifty: !0,
                                        base: r
                                    }
                                },
                                htmlBuilder: Ve,
                                mathmlBuilder: Ue
                            }),
                            ae({
                                type: "accentUnder",
                                names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , i = e[0];
                                    return {
                                        type: "accentUnder",
                                        mode: r.mode,
                                        label: n,
                                        base: i
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = xe(t.base, e)
                                        , n = He(t, e)
                                        , i = "\\utilde" === t.label ? .12 : 0
                                        , o = Kt.makeVList({
                                            positionType: "top",
                                            positionData: r.height,
                                            children: [{
                                                type: "elem",
                                                elem: n,
                                                wrapperClasses: ["svg-align"]
                                            }, {
                                                type: "kern",
                                                size: i
                                            }, {
                                                type: "elem",
                                                elem: r
                                            }]
                                        }, e);
                                    return Kt.makeSpan(["mord", "accentunder"], [o], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Oe(t.label)
                                        , n = new Te.MathNode("munder", [Ne(t.base, e), r]);
                                    return n.setAttribute("accentunder", "true"),
                                        n
                                }
                            });
                        var Xe = function (t) {
                            var e = new Te.MathNode("mpadded", t ? [t] : []);
                            return e.setAttribute("width", "+0.6em"),
                                e.setAttribute("lspace", "0.3em"),
                                e
                        };
                        ae({
                            type: "xArrow",
                            names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"],
                            props: {
                                numArgs: 1,
                                numOptionalArgs: 1
                            },
                            handler: function (t, e, r) {
                                var n = t.parser
                                    , i = t.funcName;
                                return {
                                    type: "xArrow",
                                    mode: n.mode,
                                    label: i,
                                    body: e[0],
                                    below: r[0]
                                }
                            },
                            htmlBuilder: function (t, e) {
                                var r, n = e.style, i = e.havingStyle(n.sup()), o = Kt.wrapFragment(xe(t.body, i, e), e);
                                o.classes.push("x-arrow-pad"),
                                    t.below && (i = e.havingStyle(n.sub()),
                                        (r = Kt.wrapFragment(xe(t.below, i, e), e)).classes.push("x-arrow-pad"));
                                var a, s = He(t, e), l = -e.fontMetrics().axisHeight + .5 * s.height, h = -e.fontMetrics().axisHeight - .5 * s.height - .111;
                                if ((o.depth > .25 || "\\xleftequilibrium" === t.label) && (h -= o.depth),
                                    r) {
                                    var c = -e.fontMetrics().axisHeight + r.height + .5 * s.height + .111;
                                    a = Kt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: o,
                                            shift: h
                                        }, {
                                            type: "elem",
                                            elem: s,
                                            shift: l
                                        }, {
                                            type: "elem",
                                            elem: r,
                                            shift: c
                                        }]
                                    }, e)
                                } else
                                    a = Kt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: o,
                                            shift: h
                                        }, {
                                            type: "elem",
                                            elem: s,
                                            shift: l
                                        }]
                                    }, e);
                                return a.children[0].children[0].children[1].classes.push("svg-align"),
                                    Kt.makeSpan(["mrel", "x-arrow"], [a], e)
                            },
                            mathmlBuilder: function (t, e) {
                                var r, n = Oe(t.label);
                                if (t.body) {
                                    var i = Xe(Ne(t.body, e));
                                    if (t.below) {
                                        var o = Xe(Ne(t.below, e));
                                        r = new Te.MathNode("munderover", [n, o, i])
                                    } else
                                        r = new Te.MathNode("mover", [n, i])
                                } else if (t.below) {
                                    var a = Xe(Ne(t.below, e));
                                    r = new Te.MathNode("munder", [n, a])
                                } else
                                    r = Xe(),
                                        r = new Te.MathNode("mover", [n, r]);
                                return r
                            }
                        }),
                            ae({
                                type: "textord",
                                names: ["\\@char"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    for (var r = t.parser, n = De(e[0], "ordgroup").body, i = "", o = 0; o < n.length; o++)
                                        i += De(n[o], "textord").text;
                                    var s = parseInt(i);
                                    if (isNaN(s))
                                        throw new a("\\@char has non-numeric argument " + i);
                                    return {
                                        type: "textord",
                                        mode: r.mode,
                                        text: String.fromCharCode(s)
                                    }
                                }
                            });
                        var Ye = function (t, e) {
                            var r = de(t.body, e.withColor(t.color), !1);
                            return Kt.makeFragment(r)
                        }
                            , je = function (t, e) {
                                var r = Pe(t.body, e.withColor(t.color))
                                    , n = new Te.MathNode("mstyle", r);
                                return n.setAttribute("mathcolor", t.color),
                                    n
                            };
                        ae({
                            type: "color",
                            names: ["\\textcolor"],
                            props: {
                                numArgs: 2,
                                allowedInText: !0,
                                greediness: 3,
                                argTypes: ["color", "original"]
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = De(e[0], "color-token").color
                                    , i = e[1];
                                return {
                                    type: "color",
                                    mode: r.mode,
                                    color: n,
                                    body: le(i)
                                }
                            },
                            htmlBuilder: Ye,
                            mathmlBuilder: je
                        }),
                            ae({
                                type: "color",
                                names: ["\\color"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0,
                                    greediness: 3,
                                    argTypes: ["color"]
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.breakOnTokenText
                                        , i = De(e[0], "color-token").color;
                                    r.gullet.macros.set("\\current@color", i);
                                    var o = r.parseExpression(!0, n);
                                    return {
                                        type: "color",
                                        mode: r.mode,
                                        color: i,
                                        body: o
                                    }
                                },
                                htmlBuilder: Ye,
                                mathmlBuilder: je
                            }),
                            ae({
                                type: "cr",
                                names: ["\\cr", "\\newline"],
                                props: {
                                    numArgs: 0,
                                    numOptionalArgs: 1,
                                    argTypes: ["size"],
                                    allowedInText: !0
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = t.funcName
                                        , o = r[0]
                                        , a = "\\cr" === i
                                        , s = !1;
                                    return a || (s = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode")),
                                    {
                                        type: "cr",
                                        mode: n.mode,
                                        newLine: s,
                                        newRow: a,
                                        size: o && De(o, "size").value
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    if (t.newRow)
                                        throw new a("\\cr valid only within a tabular/array environment");
                                    var r = Kt.makeSpan(["mspace"], [], e);
                                    return t.newLine && (r.classes.push("newline"),
                                        t.size && (r.style.marginTop = Ht(t.size, e) + "em")),
                                        r
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mspace");
                                    return t.newLine && (r.setAttribute("linebreak", "newline"),
                                        t.size && r.setAttribute("height", Ht(t.size, e) + "em")),
                                        r
                                }
                            });
                        var Ze = {
                            "\\global": "\\global",
                            "\\long": "\\\\globallong",
                            "\\\\globallong": "\\\\globallong",
                            "\\def": "\\gdef",
                            "\\gdef": "\\gdef",
                            "\\edef": "\\xdef",
                            "\\xdef": "\\xdef",
                            "\\let": "\\\\globallet",
                            "\\futurelet": "\\\\globalfuture"
                        }
                            , Ke = function (t) {
                                var e = t.text;
                                if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
                                    throw new a("Expected a control sequence", t);
                                return e
                            }
                            , Je = function (t, e, r, n) {
                                var i = t.gullet.macros.get(r.text);
                                null == i && (r.noexpand = !0,
                                    i = {
                                        tokens: [r],
                                        numArgs: 0,
                                        unexpandable: !t.gullet.isExpandable(r.text)
                                    }),
                                    t.gullet.macros.set(e, i, n)
                            };
                        ae({
                            type: "internal",
                            names: ["\\global", "\\long", "\\\\globallong"],
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function (t) {
                                var e = t.parser
                                    , r = t.funcName;
                                e.consumeSpaces();
                                var n = e.fetch();
                                if (Ze[n.text])
                                    return "\\global" !== r && "\\\\globallong" !== r || (n.text = Ze[n.text]),
                                        De(e.parseFunction(), "internal");
                                throw new a("Invalid token after macro prefix", n)
                            }
                        }),
                            ae({
                                type: "internal",
                                names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function (t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = e.gullet.consumeArgs(1)[0];
                                    if (1 !== n.length)
                                        throw new a("\\gdef's first argument must be a macro name");
                                    var i = n[0].text
                                        , o = 0;
                                    for (n = e.gullet.consumeArgs(1)[0]; 1 === n.length && "#" === n[0].text;) {
                                        if (1 !== (n = e.gullet.consumeArgs(1)[0]).length)
                                            throw new a('Invalid argument number length "' + n.length + '"');
                                        if (!/^[1-9]$/.test(n[0].text))
                                            throw new a('Invalid argument number "' + n[0].text + '"');
                                        if (o++,
                                            parseInt(n[0].text) !== o)
                                            throw new a('Argument number "' + n[0].text + '" out of order');
                                        n = e.gullet.consumeArgs(1)[0]
                                    }
                                    return "\\edef" !== r && "\\xdef" !== r || (n = e.gullet.expandTokens(n)).reverse(),
                                        e.gullet.macros.set(i, {
                                            tokens: n,
                                            numArgs: o
                                        }, r === Ze[r]),
                                    {
                                        type: "internal",
                                        mode: e.mode
                                    }
                                }
                            }),
                            ae({
                                type: "internal",
                                names: ["\\let", "\\\\globallet"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function (t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = Ke(e.gullet.popToken());
                                    e.gullet.consumeSpaces();
                                    var i = function (t) {
                                        var e = t.gullet.popToken();
                                        return "=" === e.text && " " === (e = t.gullet.popToken()).text && (e = t.gullet.popToken()),
                                            e
                                    }(e);
                                    return Je(e, n, i, "\\\\globallet" === r),
                                    {
                                        type: "internal",
                                        mode: e.mode
                                    }
                                }
                            }),
                            ae({
                                type: "internal",
                                names: ["\\futurelet", "\\\\globalfuture"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function (t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = Ke(e.gullet.popToken())
                                        , i = e.gullet.popToken()
                                        , o = e.gullet.popToken();
                                    return Je(e, n, o, "\\\\globalfuture" === r),
                                        e.gullet.pushToken(o),
                                        e.gullet.pushToken(i),
                                    {
                                        type: "internal",
                                        mode: e.mode
                                    }
                                }
                            });
                        var Qe = function (t, e, r) {
                            var n = V(j.math[t] && j.math[t].replace || t, e, r);
                            if (!n)
                                throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
                            return n
                        }
                            , tr = function (t, e, r, n) {
                                var i = r.havingBaseStyle(e)
                                    , o = Kt.makeSpan(n.concat(i.sizingClasses(r)), [t], r)
                                    , a = i.sizeMultiplier / r.sizeMultiplier;
                                return o.height *= a,
                                    o.depth *= a,
                                    o.maxFontSize = i.sizeMultiplier,
                                    o
                            }
                            , er = function (t, e, r) {
                                var n = e.havingBaseStyle(r)
                                    , i = (1 - e.sizeMultiplier / n.sizeMultiplier) * e.fontMetrics().axisHeight;
                                t.classes.push("delimcenter"),
                                    t.style.top = i + "em",
                                    t.height -= i,
                                    t.depth += i
                            }
                            , rr = function (t, e, r, n, i, o) {
                                var a = function (t, e, r, n) {
                                    return Kt.makeSymbol(t, "Size" + e + "-Regular", r, n)
                                }(t, e, i, n)
                                    , s = tr(Kt.makeSpan(["delimsizing", "size" + e], [a], n), w.TEXT, n, o);
                                return r && er(s, n, w.TEXT),
                                    s
                            }
                            , nr = function (t, e, r) {
                                var n;
                                return n = "Size1-Regular" === e ? "delim-size1" : "delim-size4",
                                {
                                    type: "elem",
                                    elem: Kt.makeSpan(["delimsizinginner", n], [Kt.makeSpan([], [Kt.makeSymbol(t, e, r)])])
                                }
                            }
                            , ir = {
                                type: "kern",
                                size: -.005
                            }
                            , or = function (t, e, r, n, i, o) {
                                var a, s, l, h;
                                a = l = h = t,
                                    s = null;
                                var c = "Size1-Regular";
                                "\\uparrow" === t ? l = h = "⏐" : "\\Uparrow" === t ? l = h = "‖" : "\\downarrow" === t ? a = l = "⏐" : "\\Downarrow" === t ? a = l = "‖" : "\\updownarrow" === t ? (a = "\\uparrow",
                                    l = "⏐",
                                    h = "\\downarrow") : "\\Updownarrow" === t ? (a = "\\Uparrow",
                                        l = "‖",
                                        h = "\\Downarrow") : "[" === t || "\\lbrack" === t ? (a = "⎡",
                                            l = "⎢",
                                            h = "⎣",
                                            c = "Size4-Regular") : "]" === t || "\\rbrack" === t ? (a = "⎤",
                                                l = "⎥",
                                                h = "⎦",
                                                c = "Size4-Regular") : "\\lfloor" === t || "⌊" === t ? (l = a = "⎢",
                                                    h = "⎣",
                                                    c = "Size4-Regular") : "\\lceil" === t || "⌈" === t ? (a = "⎡",
                                                        l = h = "⎢",
                                                        c = "Size4-Regular") : "\\rfloor" === t || "⌋" === t ? (l = a = "⎥",
                                                            h = "⎦",
                                                            c = "Size4-Regular") : "\\rceil" === t || "⌉" === t ? (a = "⎤",
                                                                l = h = "⎥",
                                                                c = "Size4-Regular") : "(" === t || "\\lparen" === t ? (a = "⎛",
                                                                    l = "⎜",
                                                                    h = "⎝",
                                                                    c = "Size4-Regular") : ")" === t || "\\rparen" === t ? (a = "⎞",
                                                                        l = "⎟",
                                                                        h = "⎠",
                                                                        c = "Size4-Regular") : "\\{" === t || "\\lbrace" === t ? (a = "⎧",
                                                                            s = "⎨",
                                                                            h = "⎩",
                                                                            l = "⎪",
                                                                            c = "Size4-Regular") : "\\}" === t || "\\rbrace" === t ? (a = "⎫",
                                                                                s = "⎬",
                                                                                h = "⎭",
                                                                                l = "⎪",
                                                                                c = "Size4-Regular") : "\\lgroup" === t || "⟮" === t ? (a = "⎧",
                                                                                    h = "⎩",
                                                                                    l = "⎪",
                                                                                    c = "Size4-Regular") : "\\rgroup" === t || "⟯" === t ? (a = "⎫",
                                                                                        h = "⎭",
                                                                                        l = "⎪",
                                                                                        c = "Size4-Regular") : "\\lmoustache" === t || "⎰" === t ? (a = "⎧",
                                                                                            h = "⎭",
                                                                                            l = "⎪",
                                                                                            c = "Size4-Regular") : "\\rmoustache" !== t && "⎱" !== t || (a = "⎫",
                                                                                                h = "⎩",
                                                                                                l = "⎪",
                                                                                                c = "Size4-Regular");
                                var u = Qe(a, c, i)
                                    , m = u.height + u.depth
                                    , p = Qe(l, c, i)
                                    , d = p.height + p.depth
                                    , f = Qe(h, c, i)
                                    , g = f.height + f.depth
                                    , b = 0
                                    , y = 1;
                                if (null !== s) {
                                    var v = Qe(s, c, i);
                                    b = v.height + v.depth,
                                        y = 2
                                }
                                var x = m + g + b
                                    , k = Math.max(0, Math.ceil((e - x) / (y * d)))
                                    , M = x + k * y * d
                                    , S = n.fontMetrics().axisHeight;
                                r && (S *= n.sizeMultiplier);
                                var L = M / 2 - S
                                    , T = .005 * (k + 1) - d
                                    , z = [];
                                if (z.push(nr(h, c, i)),
                                    null === s)
                                    for (var A = 0; A < k; A++)
                                        z.push(ir),
                                            z.push(nr(l, c, i));
                                else {
                                    for (var _ = 0; _ < k; _++)
                                        z.push(ir),
                                            z.push(nr(l, c, i));
                                    z.push({
                                        type: "kern",
                                        size: T
                                    }),
                                        z.push(nr(l, c, i)),
                                        z.push(ir),
                                        z.push(nr(s, c, i));
                                    for (var P = 0; P < k; P++)
                                        z.push(ir),
                                            z.push(nr(l, c, i))
                                }
                                if ("⎜" !== l && "⎟" !== l || 0 !== k)
                                    z.push({
                                        type: "kern",
                                        size: T
                                    }),
                                        z.push(nr(l, c, i)),
                                        z.push(ir);
                                else {
                                    var C = Kt.svgData.leftParenInner[2] / 2;
                                    z.push({
                                        type: "kern",
                                        size: -C
                                    });
                                    var N = "⎜" === l ? "leftParenInner" : "rightParenInner"
                                        , $ = Kt.staticSvg(N, n);
                                    z.push({
                                        type: "elem",
                                        elem: $
                                    }),
                                        z.push({
                                            type: "kern",
                                            size: -C
                                        })
                                }
                                z.push(nr(a, c, i));
                                var B = n.havingBaseStyle(w.TEXT)
                                    , q = Kt.makeVList({
                                        positionType: "bottom",
                                        positionData: L,
                                        children: z
                                    }, B);
                                return tr(Kt.makeSpan(["delimsizing", "mult"], [q], B), w.TEXT, n, o)
                            }
                            , ar = .08
                            , sr = function (t, e, r, n, i) {
                                var o = function (t, e, r) {
                                    e *= 1e3;
                                    var n = "";
                                    switch (t) {
                                        case "sqrtMain":
                                            n = function (t, e) {
                                                return "M95," + (622 + t + e) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + t / 2.075 + " -" + t + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + t) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                            }(e, L);
                                            break;
                                        case "sqrtSize1":
                                            n = function (t, e) {
                                                return "M263," + (601 + t + e) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + t / 2.084 + " -" + t + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + t) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                            }(e, L);
                                            break;
                                        case "sqrtSize2":
                                            n = function (t, e) {
                                                return "M983 " + (10 + t + e) + "\nl" + t / 3.13 + " -" + t + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + t) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                            }(e, L);
                                            break;
                                        case "sqrtSize3":
                                            n = function (t, e) {
                                                return "M424," + (2398 + t + e) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + t / 4.223 + " -" + t + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + t) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + t) + " " + e + "\nh400000v" + (40 + t) + "h-400000z"
                                            }(e, L);
                                            break;
                                        case "sqrtSize4":
                                            n = function (t, e) {
                                                return "M473," + (2713 + t + e) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + t / 5.298 + " -" + t + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + t) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z"
                                            }(e, L);
                                            break;
                                        case "sqrtTall":
                                            n = function (t, e, r) {
                                                return "M702 " + (t + e) + "H400000" + (40 + t) + "\nH742v" + (r - 54 - e - t) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + e + "H400000v" + (40 + t) + "H742z"
                                            }(e, L, r)
                                    }
                                    return n
                                }(t, n, r)
                                    , a = new R(t, o)
                                    , s = new I([a], {
                                        width: "400em",
                                        height: e + "em",
                                        viewBox: "0 0 400000 " + r,
                                        preserveAspectRatio: "xMinYMin slice"
                                    });
                                return Kt.makeSvgSpan(["hide-tail"], [s], i)
                            }
                            , lr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]
                            , hr = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]
                            , cr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]
                            , ur = [0, 1.2, 1.8, 2.4, 3]
                            , mr = [{
                                type: "small",
                                style: w.SCRIPTSCRIPT
                            }, {
                                type: "small",
                                style: w.SCRIPT
                            }, {
                                type: "small",
                                style: w.TEXT
                            }, {
                                type: "large",
                                size: 1
                            }, {
                                type: "large",
                                size: 2
                            }, {
                                type: "large",
                                size: 3
                            }, {
                                type: "large",
                                size: 4
                            }]
                            , pr = [{
                                type: "small",
                                style: w.SCRIPTSCRIPT
                            }, {
                                type: "small",
                                style: w.SCRIPT
                            }, {
                                type: "small",
                                style: w.TEXT
                            }, {
                                type: "stack"
                            }]
                            , dr = [{
                                type: "small",
                                style: w.SCRIPTSCRIPT
                            }, {
                                type: "small",
                                style: w.SCRIPT
                            }, {
                                type: "small",
                                style: w.TEXT
                            }, {
                                type: "large",
                                size: 1
                            }, {
                                type: "large",
                                size: 2
                            }, {
                                type: "large",
                                size: 3
                            }, {
                                type: "large",
                                size: 4
                            }, {
                                type: "stack"
                            }]
                            , fr = function (t) {
                                if ("small" === t.type)
                                    return "Main-Regular";
                                if ("large" === t.type)
                                    return "Size" + t.size + "-Regular";
                                if ("stack" === t.type)
                                    return "Size4-Regular";
                                throw new Error("Add support for delim type '" + t.type + "' here.")
                            }
                            , gr = function (t, e, r, n) {
                                for (var i = Math.min(2, 3 - n.style.size); i < r.length && "stack" !== r[i].type; i++) {
                                    var o = Qe(t, fr(r[i]), "math")
                                        , a = o.height + o.depth;
                                    if ("small" === r[i].type && (a *= n.havingBaseStyle(r[i].style).sizeMultiplier),
                                        a > e)
                                        return r[i]
                                }
                                return r[r.length - 1]
                            }
                            , br = function (t, e, r, n, i, o) {
                                var a;
                                "<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"),
                                    a = u.contains(cr, t) ? mr : u.contains(lr, t) ? dr : pr;
                                var s = gr(t, e, a, n);
                                return "small" === s.type ? function (t, e, r, n, i, o) {
                                    var a = Kt.makeSymbol(t, "Main-Regular", i, n)
                                        , s = tr(a, e, n, o);
                                    return r && er(s, n, e),
                                        s
                                }(t, s.style, r, n, i, o) : "large" === s.type ? rr(t, s.size, r, n, i, o) : or(t, e, r, n, i, o)
                            }
                            , yr = function (t, e) {
                                var r, n, i = e.havingBaseSizing(), o = gr("\\surd", t * i.sizeMultiplier, dr, i), a = i.sizeMultiplier, s = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness), l = 0, h = 0, c = 0;
                                return "small" === o.type ? (t < 1 ? a = 1 : t < 1.4 && (a = .7),
                                    h = (1 + s) / a,
                                    (r = sr("sqrtMain", l = (1 + s + ar) / a, c = 1e3 + 1e3 * s + 80, s, e)).style.minWidth = "0.853em",
                                    n = .833 / a) : "large" === o.type ? (c = 1080 * ur[o.size],
                                        h = (ur[o.size] + s) / a,
                                        l = (ur[o.size] + s + ar) / a,
                                        (r = sr("sqrtSize" + o.size, l, c, s, e)).style.minWidth = "1.02em",
                                        n = 1 / a) : (l = t + s + ar,
                                            h = t + s,
                                            c = Math.floor(1e3 * t + s) + 80,
                                            (r = sr("sqrtTall", l, c, s, e)).style.minWidth = "0.742em",
                                            n = 1.056),
                                    r.height = h,
                                    r.style.height = l + "em",
                                {
                                    span: r,
                                    advanceWidth: n,
                                    ruleWidth: (e.fontMetrics().sqrtRuleThickness + s) * a
                                }
                            }
                            , vr = function (t, e, r, n, i) {
                                if ("<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"),
                                    u.contains(lr, t) || u.contains(cr, t))
                                    return rr(t, e, !1, r, n, i);
                                if (u.contains(hr, t))
                                    return or(t, ur[e], !1, r, n, i);
                                throw new a("Illegal delimiter: '" + t + "'")
                            }
                            , xr = br
                            , wr = function (t, e, r, n, i, o) {
                                var a = n.fontMetrics().axisHeight * n.sizeMultiplier
                                    , s = 5 / n.fontMetrics().ptPerEm
                                    , l = Math.max(e - a, r + a)
                                    , h = Math.max(l / 500 * 901, 2 * l - s);
                                return br(t, h, !0, n, i, o)
                            }
                            , kr = {
                                "\\bigl": {
                                    mclass: "mopen",
                                    size: 1
                                },
                                "\\Bigl": {
                                    mclass: "mopen",
                                    size: 2
                                },
                                "\\biggl": {
                                    mclass: "mopen",
                                    size: 3
                                },
                                "\\Biggl": {
                                    mclass: "mopen",
                                    size: 4
                                },
                                "\\bigr": {
                                    mclass: "mclose",
                                    size: 1
                                },
                                "\\Bigr": {
                                    mclass: "mclose",
                                    size: 2
                                },
                                "\\biggr": {
                                    mclass: "mclose",
                                    size: 3
                                },
                                "\\Biggr": {
                                    mclass: "mclose",
                                    size: 4
                                },
                                "\\bigm": {
                                    mclass: "mrel",
                                    size: 1
                                },
                                "\\Bigm": {
                                    mclass: "mrel",
                                    size: 2
                                },
                                "\\biggm": {
                                    mclass: "mrel",
                                    size: 3
                                },
                                "\\Biggm": {
                                    mclass: "mrel",
                                    size: 4
                                },
                                "\\big": {
                                    mclass: "mord",
                                    size: 1
                                },
                                "\\Big": {
                                    mclass: "mord",
                                    size: 2
                                },
                                "\\bigg": {
                                    mclass: "mord",
                                    size: 3
                                },
                                "\\Bigg": {
                                    mclass: "mord",
                                    size: 4
                                }
                            }
                            , Mr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
                        function Sr(t, e) {
                            var r = Fe(t);
                            if (r && u.contains(Mr, r.text))
                                return r;
                            throw new a(r ? "Invalid delimiter '" + r.text + "' after '" + e.funcName + "'" : "Invalid delimiter type '" + t.type + "'", t)
                        }
                        function Lr(t) {
                            if (!t.body)
                                throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
                        }
                        ae({
                            type: "delimsizing",
                            names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = Sr(e[0], t);
                                return {
                                    type: "delimsizing",
                                    mode: t.parser.mode,
                                    size: kr[t.funcName].size,
                                    mclass: kr[t.funcName].mclass,
                                    delim: r.text
                                }
                            },
                            htmlBuilder: function (t, e) {
                                return "." === t.delim ? Kt.makeSpan([t.mclass]) : vr(t.delim, t.size, e, t.mode, [t.mclass])
                            },
                            mathmlBuilder: function (t) {
                                var e = [];
                                "." !== t.delim && e.push(ze(t.delim, t.mode));
                                var r = new Te.MathNode("mo", e);
                                return "mopen" === t.mclass || "mclose" === t.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"),
                                    r
                            }
                        }),
                            ae({
                                type: "leftright-right",
                                names: ["\\right"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = t.parser.gullet.macros.get("\\current@color");
                                    if (r && "string" != typeof r)
                                        throw new a("\\current@color set to non-string in \\right");
                                    return {
                                        type: "leftright-right",
                                        mode: t.parser.mode,
                                        delim: Sr(e[0], t).text,
                                        color: r
                                    }
                                }
                            }),
                            ae({
                                type: "leftright",
                                names: ["\\left"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = Sr(e[0], t)
                                        , n = t.parser;
                                    ++n.leftrightDepth;
                                    var i = n.parseExpression(!1);
                                    --n.leftrightDepth,
                                        n.expect("\\right", !1);
                                    var o = De(n.parseFunction(), "leftright-right");
                                    return {
                                        type: "leftright",
                                        mode: n.mode,
                                        body: i,
                                        left: r.text,
                                        right: o.delim,
                                        rightColor: o.color
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    Lr(t);
                                    for (var r, n, i = de(t.body, e, !0, ["mopen", "mclose"]), o = 0, a = 0, s = !1, l = 0; l < i.length; l++)
                                        i[l].isMiddle ? s = !0 : (o = Math.max(i[l].height, o),
                                            a = Math.max(i[l].depth, a));
                                    if (o *= e.sizeMultiplier,
                                        a *= e.sizeMultiplier,
                                        r = "." === t.left ? ve(e, ["mopen"]) : wr(t.left, o, a, e, t.mode, ["mopen"]),
                                        i.unshift(r),
                                        s)
                                        for (var h = 1; h < i.length; h++) {
                                            var c = i[h].isMiddle;
                                            c && (i[h] = wr(c.delim, o, a, c.options, t.mode, []))
                                        }
                                    if ("." === t.right)
                                        n = ve(e, ["mclose"]);
                                    else {
                                        var u = t.rightColor ? e.withColor(t.rightColor) : e;
                                        n = wr(t.right, o, a, u, t.mode, ["mclose"])
                                    }
                                    return i.push(n),
                                        Kt.makeSpan(["minner"], i, e)
                                },
                                mathmlBuilder: function (t, e) {
                                    Lr(t);
                                    var r = Pe(t.body, e);
                                    if ("." !== t.left) {
                                        var n = new Te.MathNode("mo", [ze(t.left, t.mode)]);
                                        n.setAttribute("fence", "true"),
                                            r.unshift(n)
                                    }
                                    if ("." !== t.right) {
                                        var i = new Te.MathNode("mo", [ze(t.right, t.mode)]);
                                        i.setAttribute("fence", "true"),
                                            t.rightColor && i.setAttribute("mathcolor", t.rightColor),
                                            r.push(i)
                                    }
                                    return Ae(r)
                                }
                            }),
                            ae({
                                type: "middle",
                                names: ["\\middle"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = Sr(e[0], t);
                                    if (!t.parser.leftrightDepth)
                                        throw new a("\\middle without preceding \\left", r);
                                    return {
                                        type: "middle",
                                        mode: t.parser.mode,
                                        delim: r.text
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r;
                                    if ("." === t.delim)
                                        r = ve(e, []);
                                    else {
                                        r = vr(t.delim, 1, e, t.mode, []);
                                        var n = {
                                            delim: t.delim,
                                            options: e
                                        };
                                        r.isMiddle = n
                                    }
                                    return r
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = "\\vert" === t.delim || "|" === t.delim ? ze("|", "text") : ze(t.delim, t.mode)
                                        , n = new Te.MathNode("mo", [r]);
                                    return n.setAttribute("fence", "true"),
                                        n.setAttribute("lspace", "0.05em"),
                                        n.setAttribute("rspace", "0.05em"),
                                        n
                                }
                            });
                        var Tr = function (t, e) {
                            var r, n, i = Kt.wrapFragment(xe(t.body, e), e), o = t.label.substr(1), a = e.sizeMultiplier, s = 0, l = u.isCharacterBox(t.body);
                            if ("sout" === o)
                                (r = Kt.makeSpan(["stretchy", "sout"])).height = e.fontMetrics().defaultRuleThickness / a,
                                    s = -.5 * e.fontMetrics().xHeight;
                            else {
                                /cancel/.test(o) ? l || i.classes.push("cancel-pad") : i.classes.push("boxpad");
                                var h = 0
                                    , c = 0;
                                /box/.test(o) ? (c = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness),
                                    h = e.fontMetrics().fboxsep + ("colorbox" === o ? 0 : c)) : h = l ? .2 : 0,
                                    r = Re(i, o, h, e),
                                    /fbox|boxed|fcolorbox/.test(o) && (r.style.borderStyle = "solid",
                                        r.style.borderWidth = c + "em"),
                                    s = i.depth + h,
                                    t.backgroundColor && (r.style.backgroundColor = t.backgroundColor,
                                        t.borderColor && (r.style.borderColor = t.borderColor))
                            }
                            return n = t.backgroundColor ? Kt.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    shift: s
                                }, {
                                    type: "elem",
                                    elem: i,
                                    shift: 0
                                }]
                            }, e) : Kt.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: i,
                                    shift: 0
                                }, {
                                    type: "elem",
                                    elem: r,
                                    shift: s,
                                    wrapperClasses: /cancel/.test(o) ? ["svg-align"] : []
                                }]
                            }, e),
                                /cancel/.test(o) && (n.height = i.height,
                                    n.depth = i.depth),
                                /cancel/.test(o) && !l ? Kt.makeSpan(["mord", "cancel-lap"], [n], e) : Kt.makeSpan(["mord"], [n], e)
                        }
                            , zr = function (t, e) {
                                var r = 0
                                    , n = new Te.MathNode(t.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ne(t.body, e)]);
                                switch (t.label) {
                                    case "\\cancel":
                                        n.setAttribute("notation", "updiagonalstrike");
                                        break;
                                    case "\\bcancel":
                                        n.setAttribute("notation", "downdiagonalstrike");
                                        break;
                                    case "\\sout":
                                        n.setAttribute("notation", "horizontalstrike");
                                        break;
                                    case "\\fbox":
                                        n.setAttribute("notation", "box");
                                        break;
                                    case "\\fcolorbox":
                                    case "\\colorbox":
                                        if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm,
                                            n.setAttribute("width", "+" + 2 * r + "pt"),
                                            n.setAttribute("height", "+" + 2 * r + "pt"),
                                            n.setAttribute("lspace", r + "pt"),
                                            n.setAttribute("voffset", r + "pt"),
                                            "\\fcolorbox" === t.label) {
                                            var i = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
                                            n.setAttribute("style", "border: " + i + "em solid " + String(t.borderColor))
                                        }
                                        break;
                                    case "\\xcancel":
                                        n.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
                                }
                                return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor),
                                    n
                            };
                        ae({
                            type: "enclose",
                            names: ["\\colorbox"],
                            props: {
                                numArgs: 2,
                                allowedInText: !0,
                                greediness: 3,
                                argTypes: ["color", "text"]
                            },
                            handler: function (t, e, r) {
                                var n = t.parser
                                    , i = t.funcName
                                    , o = De(e[0], "color-token").color
                                    , a = e[1];
                                return {
                                    type: "enclose",
                                    mode: n.mode,
                                    label: i,
                                    backgroundColor: o,
                                    body: a
                                }
                            },
                            htmlBuilder: Tr,
                            mathmlBuilder: zr
                        }),
                            ae({
                                type: "enclose",
                                names: ["\\fcolorbox"],
                                props: {
                                    numArgs: 3,
                                    allowedInText: !0,
                                    greediness: 3,
                                    argTypes: ["color", "color", "text"]
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = t.funcName
                                        , o = De(e[0], "color-token").color
                                        , a = De(e[1], "color-token").color
                                        , s = e[2];
                                    return {
                                        type: "enclose",
                                        mode: n.mode,
                                        label: i,
                                        backgroundColor: a,
                                        borderColor: o,
                                        body: s
                                    }
                                },
                                htmlBuilder: Tr,
                                mathmlBuilder: zr
                            }),
                            ae({
                                type: "enclose",
                                names: ["\\fbox"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["hbox"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    return {
                                        type: "enclose",
                                        mode: t.parser.mode,
                                        label: "\\fbox",
                                        body: e[0]
                                    }
                                }
                            }),
                            ae({
                                type: "enclose",
                                names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = t.funcName
                                        , o = e[0];
                                    return {
                                        type: "enclose",
                                        mode: n.mode,
                                        label: i,
                                        body: o
                                    }
                                },
                                htmlBuilder: Tr,
                                mathmlBuilder: zr
                            });
                        var Ar = {};
                        function _r(t) {
                            for (var e = t.type, r = t.names, n = t.props, i = t.handler, o = t.htmlBuilder, a = t.mathmlBuilder, s = {
                                type: e,
                                numArgs: n.numArgs || 0,
                                greediness: 1,
                                allowedInText: !1,
                                numOptionalArgs: 0,
                                handler: i
                            }, l = 0; l < r.length; ++l)
                                Ar[r[l]] = s;
                            o && (ie[e] = o),
                                a && (oe[e] = a)
                        }
                        function Pr(t) {
                            var e = [];
                            t.consumeSpaces();
                            for (var r = t.fetch().text; "\\hline" === r || "\\hdashline" === r;)
                                t.consume(),
                                    e.push("\\hdashline" === r),
                                    t.consumeSpaces(),
                                    r = t.fetch().text;
                            return e
                        }
                        function Cr(t, e, r) {
                            var n = e.hskipBeforeAndAfter
                                , i = e.addJot
                                , o = e.cols
                                , s = e.arraystretch
                                , l = e.colSeparationType;
                            if (t.gullet.beginGroup(),
                                t.gullet.macros.set("\\\\", "\\cr"),
                                !s) {
                                var h = t.gullet.expandMacroAsText("\\arraystretch");
                                if (null == h)
                                    s = 1;
                                else if (!(s = parseFloat(h)) || s < 0)
                                    throw new a("Invalid \\arraystretch: " + h)
                            }
                            t.gullet.beginGroup();
                            var c = []
                                , u = [c]
                                , m = []
                                , p = [];
                            for (p.push(Pr(t)); ;) {
                                var d = t.parseExpression(!1, "\\cr");
                                t.gullet.endGroup(),
                                    t.gullet.beginGroup(),
                                    d = {
                                        type: "ordgroup",
                                        mode: t.mode,
                                        body: d
                                    },
                                    r && (d = {
                                        type: "styling",
                                        mode: t.mode,
                                        style: r,
                                        body: [d]
                                    }),
                                    c.push(d);
                                var f = t.fetch().text;
                                if ("&" === f)
                                    t.consume();
                                else {
                                    if ("\\end" === f) {
                                        1 === c.length && "styling" === d.type && 0 === d.body[0].body.length && u.pop(),
                                            p.length < u.length + 1 && p.push([]);
                                        break
                                    }
                                    if ("\\cr" !== f)
                                        throw new a("Expected & or \\\\ or \\cr or \\end", t.nextToken);
                                    var g = De(t.parseFunction(), "cr");
                                    m.push(g.size),
                                        p.push(Pr(t)),
                                        c = [],
                                        u.push(c)
                                }
                            }
                            return t.gullet.endGroup(),
                                t.gullet.endGroup(),
                            {
                                type: "array",
                                mode: t.mode,
                                addJot: i,
                                arraystretch: s,
                                body: u,
                                cols: o,
                                rowGaps: m,
                                hskipBeforeAndAfter: n,
                                hLinesBeforeRow: p,
                                colSeparationType: l
                            }
                        }
                        function Nr(t) {
                            return "d" === t.substr(0, 1) ? "display" : "text"
                        }
                        var $r = function (t, e) {
                            var r, n, i = t.body.length, o = t.hLinesBeforeRow, s = 0, l = new Array(i), h = [], c = Math.max(e.fontMetrics().arrayRuleWidth, e.minRuleThickness), m = 1 / e.fontMetrics().ptPerEm, p = 5 * m;
                            t.colSeparationType && "small" === t.colSeparationType && (p = e.havingStyle(w.SCRIPT).sizeMultiplier / e.sizeMultiplier * .2778);
                            var d = 12 * m
                                , f = 3 * m
                                , g = t.arraystretch * d
                                , b = .7 * g
                                , y = .3 * g
                                , v = 0;
                            function x(t) {
                                for (var e = 0; e < t.length; ++e)
                                    e > 0 && (v += .25),
                                        h.push({
                                            pos: v,
                                            isDashed: t[e]
                                        })
                            }
                            for (x(o[0]),
                                r = 0; r < t.body.length; ++r) {
                                var k = t.body[r]
                                    , M = b
                                    , S = y;
                                s < k.length && (s = k.length);
                                var L = new Array(k.length);
                                for (n = 0; n < k.length; ++n) {
                                    var T = xe(k[n], e);
                                    S < T.depth && (S = T.depth),
                                        M < T.height && (M = T.height),
                                        L[n] = T
                                }
                                var z = t.rowGaps[r]
                                    , A = 0;
                                z && (A = Ht(z, e)) > 0 && (S < (A += y) && (S = A),
                                    A = 0),
                                    t.addJot && (S += f),
                                    L.height = M,
                                    L.depth = S,
                                    v += M,
                                    L.pos = v,
                                    v += S + A,
                                    l[r] = L,
                                    x(o[r + 1])
                            }
                            var _, P, C = v / 2 + e.fontMetrics().axisHeight, N = t.cols || [], $ = [];
                            for (n = 0,
                                P = 0; n < s || P < N.length; ++n,
                                ++P) {
                                for (var B = N[P] || {}, q = !0; "separator" === B.type;) {
                                    if (q || ((_ = Kt.makeSpan(["arraycolsep"], [])).style.width = e.fontMetrics().doubleRuleSep + "em",
                                        $.push(_)),
                                        "|" !== B.separator && ":" !== B.separator)
                                        throw new a("Invalid separator type: " + B.separator);
                                    var E = "|" === B.separator ? "solid" : "dashed"
                                        , I = Kt.makeSpan(["vertical-separator"], [], e);
                                    I.style.height = v + "em",
                                        I.style.borderRightWidth = c + "em",
                                        I.style.borderRightStyle = E,
                                        I.style.margin = "0 -" + c / 2 + "em",
                                        I.style.verticalAlign = -(v - C) + "em",
                                        $.push(I),
                                        B = N[++P] || {},
                                        q = !1
                                }
                                if (!(n >= s)) {
                                    var R = void 0;
                                    (n > 0 || t.hskipBeforeAndAfter) && 0 !== (R = u.deflt(B.pregap, p)) && ((_ = Kt.makeSpan(["arraycolsep"], [])).style.width = R + "em",
                                        $.push(_));
                                    var O = [];
                                    for (r = 0; r < i; ++r) {
                                        var H = l[r]
                                            , D = H[n];
                                        if (D) {
                                            var W = H.pos - C;
                                            D.depth = H.depth,
                                                D.height = H.height,
                                                O.push({
                                                    type: "elem",
                                                    elem: D,
                                                    shift: W
                                                })
                                        }
                                    }
                                    O = Kt.makeVList({
                                        positionType: "individualShift",
                                        children: O
                                    }, e),
                                        O = Kt.makeSpan(["col-align-" + (B.align || "c")], [O]),
                                        $.push(O),
                                        (n < s - 1 || t.hskipBeforeAndAfter) && 0 !== (R = u.deflt(B.postgap, p)) && ((_ = Kt.makeSpan(["arraycolsep"], [])).style.width = R + "em",
                                            $.push(_))
                                }
                            }
                            if (l = Kt.makeSpan(["mtable"], $),
                                h.length > 0) {
                                for (var F = Kt.makeLineSpan("hline", e, c), V = Kt.makeLineSpan("hdashline", e, c), U = [{
                                    type: "elem",
                                    elem: l,
                                    shift: 0
                                }]; h.length > 0;) {
                                    var G = h.pop()
                                        , X = G.pos - C;
                                    G.isDashed ? U.push({
                                        type: "elem",
                                        elem: V,
                                        shift: X
                                    }) : U.push({
                                        type: "elem",
                                        elem: F,
                                        shift: X
                                    })
                                }
                                l = Kt.makeVList({
                                    positionType: "individualShift",
                                    children: U
                                }, e)
                            }
                            return Kt.makeSpan(["mord"], [l], e)
                        }
                            , Br = {
                                c: "center ",
                                l: "left ",
                                r: "right "
                            }
                            , qr = function (t, e) {
                                var r = new Te.MathNode("mtable", t.body.map((function (t) {
                                    return new Te.MathNode("mtr", t.map((function (t) {
                                        return new Te.MathNode("mtd", [Ne(t, e)])
                                    }
                                    )))
                                }
                                )))
                                    , n = .5 === t.arraystretch ? .1 : .16 + t.arraystretch - 1 + (t.addJot ? .09 : 0);
                                r.setAttribute("rowspacing", n + "em");
                                var i = ""
                                    , o = "";
                                if (t.cols && t.cols.length > 0) {
                                    var a = t.cols
                                        , s = ""
                                        , l = !1
                                        , h = 0
                                        , c = a.length;
                                    "separator" === a[0].type && (i += "top ",
                                        h = 1),
                                        "separator" === a[a.length - 1].type && (i += "bottom ",
                                            c -= 1);
                                    for (var u = h; u < c; u++)
                                        "align" === a[u].type ? (o += Br[a[u].align],
                                            l && (s += "none "),
                                            l = !0) : "separator" === a[u].type && l && (s += "|" === a[u].separator ? "solid " : "dashed ",
                                                l = !1);
                                    r.setAttribute("columnalign", o.trim()),
                                        /[sd]/.test(s) && r.setAttribute("columnlines", s.trim())
                                }
                                if ("align" === t.colSeparationType) {
                                    for (var m = t.cols || [], p = "", d = 1; d < m.length; d++)
                                        p += d % 2 ? "0em " : "1em ";
                                    r.setAttribute("columnspacing", p.trim())
                                } else
                                    "alignat" === t.colSeparationType ? r.setAttribute("columnspacing", "0em") : "small" === t.colSeparationType ? r.setAttribute("columnspacing", "0.2778em") : r.setAttribute("columnspacing", "1em");
                                var f = ""
                                    , g = t.hLinesBeforeRow;
                                i += g[0].length > 0 ? "left " : "",
                                    i += g[g.length - 1].length > 0 ? "right " : "";
                                for (var b = 1; b < g.length - 1; b++)
                                    f += 0 === g[b].length ? "none " : g[b][0] ? "dashed " : "solid ";
                                return /[sd]/.test(f) && r.setAttribute("rowlines", f.trim()),
                                    "" !== i && (r = new Te.MathNode("menclose", [r])).setAttribute("notation", i.trim()),
                                    t.arraystretch && t.arraystretch < 1 && (r = new Te.MathNode("mstyle", [r])).setAttribute("scriptlevel", "1"),
                                    r
                            }
                            , Er = function (t, e) {
                                var r, n = [], i = Cr(t.parser, {
                                    cols: n,
                                    addJot: !0
                                }, "display"), o = 0, s = {
                                    type: "ordgroup",
                                    mode: t.mode,
                                    body: []
                                };
                                if (e[0] && "ordgroup" === e[0].type) {
                                    for (var l = "", h = 0; h < e[0].body.length; h++)
                                        l += De(e[0].body[h], "textord").text;
                                    r = Number(l),
                                        o = 2 * r
                                }
                                var c = !o;
                                i.body.forEach((function (t) {
                                    for (var e = 1; e < t.length; e += 2) {
                                        var n = De(t[e], "styling");
                                        De(n.body[0], "ordgroup").body.unshift(s)
                                    }
                                    if (c)
                                        o < t.length && (o = t.length);
                                    else {
                                        var i = t.length / 2;
                                        if (r < i)
                                            throw new a("Too many math in a row: expected " + r + ", but got " + i, t[0])
                                    }
                                }
                                ));
                                for (var u = 0; u < o; ++u) {
                                    var m = "r"
                                        , p = 0;
                                    u % 2 == 1 ? m = "l" : u > 0 && c && (p = 1),
                                        n[u] = {
                                            type: "align",
                                            align: m,
                                            pregap: p,
                                            postgap: 0
                                        }
                                }
                                return i.colSeparationType = c ? "align" : "alignat",
                                    i
                            };
                        _r({
                            type: "array",
                            names: ["array", "darray"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = {
                                    cols: (Fe(e[0]) ? [e[0]] : De(e[0], "ordgroup").body).map((function (t) {
                                        var e = We(t).text;
                                        if (-1 !== "lcr".indexOf(e))
                                            return {
                                                type: "align",
                                                align: e
                                            };
                                        if ("|" === e)
                                            return {
                                                type: "separator",
                                                separator: "|"
                                            };
                                        if (":" === e)
                                            return {
                                                type: "separator",
                                                separator: ":"
                                            };
                                        throw new a("Unknown column alignment: " + e, t)
                                    }
                                    )),
                                    hskipBeforeAndAfter: !0
                                };
                                return Cr(t.parser, r, Nr(t.envName))
                            },
                            htmlBuilder: $r,
                            mathmlBuilder: qr
                        }),
                            _r({
                                type: "array",
                                names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    var e = {
                                        matrix: null,
                                        pmatrix: ["(", ")"],
                                        bmatrix: ["[", "]"],
                                        Bmatrix: ["\\{", "\\}"],
                                        vmatrix: ["|", "|"],
                                        Vmatrix: ["\\Vert", "\\Vert"]
                                    }[t.envName]
                                        , r = Cr(t.parser, {
                                            hskipBeforeAndAfter: !1
                                        }, Nr(t.envName));
                                    return e ? {
                                        type: "leftright",
                                        mode: t.mode,
                                        body: [r],
                                        left: e[0],
                                        right: e[1],
                                        rightColor: void 0
                                    } : r
                                },
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["smallmatrix"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    var e = Cr(t.parser, {
                                        arraystretch: .5
                                    }, "script");
                                    return e.colSeparationType = "small",
                                        e
                                },
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["subarray"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = (Fe(e[0]) ? [e[0]] : De(e[0], "ordgroup").body).map((function (t) {
                                        var e = We(t).text;
                                        if (-1 !== "lc".indexOf(e))
                                            return {
                                                type: "align",
                                                align: e
                                            };
                                        throw new a("Unknown column alignment: " + e, t)
                                    }
                                    ));
                                    if (r.length > 1)
                                        throw new a("{subarray} can contain only one column");
                                    var n = {
                                        cols: r,
                                        hskipBeforeAndAfter: !1,
                                        arraystretch: .5
                                    };
                                    if ((n = Cr(t.parser, n, "script")).body.length > 0 && n.body[0].length > 1)
                                        throw new a("{subarray} can contain only one column");
                                    return n
                                },
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["cases", "dcases", "rcases", "drcases"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    var e = Cr(t.parser, {
                                        arraystretch: 1.2,
                                        cols: [{
                                            type: "align",
                                            align: "l",
                                            pregap: 0,
                                            postgap: 1
                                        }, {
                                            type: "align",
                                            align: "l",
                                            pregap: 0,
                                            postgap: 0
                                        }]
                                    }, Nr(t.envName));
                                    return {
                                        type: "leftright",
                                        mode: t.mode,
                                        body: [e],
                                        left: t.envName.indexOf("r") > -1 ? "." : "\\{",
                                        right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
                                        rightColor: void 0
                                    }
                                },
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["aligned"],
                                props: {
                                    numArgs: 0
                                },
                                handler: Er,
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["gathered"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    return Cr(t.parser, {
                                        cols: [{
                                            type: "align",
                                            align: "c"
                                        }],
                                        addJot: !0
                                    }, "display")
                                },
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            _r({
                                type: "array",
                                names: ["alignedat"],
                                props: {
                                    numArgs: 1
                                },
                                handler: Er,
                                htmlBuilder: $r,
                                mathmlBuilder: qr
                            }),
                            ae({
                                type: "text",
                                names: ["\\hline", "\\hdashline"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !0
                                },
                                handler: function (t, e) {
                                    throw new a(t.funcName + " valid only within array environment")
                                }
                            });
                        var Ir = Ar;
                        ae({
                            type: "environment",
                            names: ["\\begin", "\\end"],
                            props: {
                                numArgs: 1,
                                argTypes: ["text"]
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , i = e[0];
                                if ("ordgroup" !== i.type)
                                    throw new a("Invalid environment name", i);
                                for (var o = "", s = 0; s < i.body.length; ++s)
                                    o += De(i.body[s], "textord").text;
                                if ("\\begin" === n) {
                                    if (!Ir.hasOwnProperty(o))
                                        throw new a("No such environment: " + o, i);
                                    var l = Ir[o]
                                        , h = r.parseArguments("\\begin{" + o + "}", l)
                                        , c = h.args
                                        , u = h.optArgs
                                        , m = {
                                            mode: r.mode,
                                            envName: o,
                                            parser: r
                                        }
                                        , p = l.handler(m, c, u);
                                    r.expect("\\end", !1);
                                    var d = r.nextToken
                                        , f = De(r.parseFunction(), "environment");
                                    if (f.name !== o)
                                        throw new a("Mismatch: \\begin{" + o + "} matched by \\end{" + f.name + "}", d);
                                    return p
                                }
                                return {
                                    type: "environment",
                                    mode: r.mode,
                                    name: o,
                                    nameGroup: i
                                }
                            }
                        });
                        var Rr = Kt.makeSpan;
                        function Or(t, e) {
                            var r = de(t.body, e, !0);
                            return Rr([t.mclass], r, e)
                        }
                        function Hr(t, e) {
                            var r, n = Pe(t.body, e);
                            return "minner" === t.mclass ? Te.newDocumentFragment(n) : ("mord" === t.mclass ? t.isCharacterBox ? (r = n[0]).type = "mi" : r = new Te.MathNode("mi", n) : (t.isCharacterBox ? (r = n[0]).type = "mo" : r = new Te.MathNode("mo", n),
                                "mbin" === t.mclass ? (r.attributes.lspace = "0.22em",
                                    r.attributes.rspace = "0.22em") : "mpunct" === t.mclass ? (r.attributes.lspace = "0em",
                                        r.attributes.rspace = "0.17em") : "mopen" !== t.mclass && "mclose" !== t.mclass || (r.attributes.lspace = "0em",
                                            r.attributes.rspace = "0em")),
                                r)
                        }
                        ae({
                            type: "mclass",
                            names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , i = e[0];
                                return {
                                    type: "mclass",
                                    mode: r.mode,
                                    mclass: "m" + n.substr(5),
                                    body: le(i),
                                    isCharacterBox: u.isCharacterBox(i)
                                }
                            },
                            htmlBuilder: Or,
                            mathmlBuilder: Hr
                        });
                        var Dr = function (t) {
                            var e = "ordgroup" === t.type && t.body.length ? t.body[0] : t;
                            return "atom" !== e.type || "bin" !== e.family && "rel" !== e.family ? "mord" : "m" + e.family
                        };
                        ae({
                            type: "mclass",
                            names: ["\\@binrel"],
                            props: {
                                numArgs: 2
                            },
                            handler: function (t, e) {
                                return {
                                    type: "mclass",
                                    mode: t.parser.mode,
                                    mclass: Dr(e[0]),
                                    body: [e[1]],
                                    isCharacterBox: u.isCharacterBox(e[1])
                                }
                            }
                        }),
                            ae({
                                type: "mclass",
                                names: ["\\stackrel", "\\overset", "\\underset"],
                                props: {
                                    numArgs: 2
                                },
                                handler: function (t, e) {
                                    var r, n = t.parser, i = t.funcName, o = e[1], a = e[0];
                                    r = "\\stackrel" !== i ? Dr(o) : "mrel";
                                    var s = {
                                        type: "op",
                                        mode: o.mode,
                                        limits: !0,
                                        alwaysHandleSupSub: !0,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        suppressBaseShift: "\\stackrel" !== i,
                                        body: le(o)
                                    }
                                        , l = {
                                            type: "supsub",
                                            mode: a.mode,
                                            base: s,
                                            sup: "\\underset" === i ? null : a,
                                            sub: "\\underset" === i ? a : null
                                        };
                                    return {
                                        type: "mclass",
                                        mode: n.mode,
                                        mclass: r,
                                        body: [l],
                                        isCharacterBox: u.isCharacterBox(l)
                                    }
                                },
                                htmlBuilder: Or,
                                mathmlBuilder: Hr
                            });
                        var Wr = function (t, e) {
                            var r = t.font
                                , n = e.withFont(r);
                            return xe(t.body, n)
                        }
                            , Fr = function (t, e) {
                                var r = t.font
                                    , n = e.withFont(r);
                                return Ne(t.body, n)
                            }
                            , Vr = {
                                "\\Bbb": "\\mathbb",
                                "\\bold": "\\mathbf",
                                "\\frak": "\\mathfrak",
                                "\\bm": "\\boldsymbol"
                            };
                        ae({
                            type: "font",
                            names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
                            props: {
                                numArgs: 1,
                                greediness: 2
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , i = e[0]
                                    , o = n;
                                return o in Vr && (o = Vr[o]),
                                {
                                    type: "font",
                                    mode: r.mode,
                                    font: o.slice(1),
                                    body: i
                                }
                            },
                            htmlBuilder: Wr,
                            mathmlBuilder: Fr
                        }),
                            ae({
                                type: "mclass",
                                names: ["\\boldsymbol", "\\bm"],
                                props: {
                                    numArgs: 1,
                                    greediness: 2
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0]
                                        , i = u.isCharacterBox(n);
                                    return {
                                        type: "mclass",
                                        mode: r.mode,
                                        mclass: Dr(n),
                                        body: [{
                                            type: "font",
                                            mode: r.mode,
                                            font: "boldsymbol",
                                            body: n
                                        }],
                                        isCharacterBox: i
                                    }
                                }
                            }),
                            ae({
                                type: "font",
                                names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , i = t.breakOnTokenText
                                        , o = r.mode
                                        , a = r.parseExpression(!0, i);
                                    return {
                                        type: "font",
                                        mode: o,
                                        font: "math" + n.slice(1),
                                        body: {
                                            type: "ordgroup",
                                            mode: r.mode,
                                            body: a
                                        }
                                    }
                                },
                                htmlBuilder: Wr,
                                mathmlBuilder: Fr
                            });
                        var Ur = function (t, e) {
                            var r = e;
                            return "display" === t ? r = r.id >= w.SCRIPT.id ? r.text() : w.DISPLAY : "text" === t && r.size === w.DISPLAY.size ? r = w.TEXT : "script" === t ? r = w.SCRIPT : "scriptscript" === t && (r = w.SCRIPTSCRIPT),
                                r
                        }
                            , Gr = function (t, e) {
                                var r, n = Ur(t.size, e.style), i = n.fracNum(), o = n.fracDen();
                                r = e.havingStyle(i);
                                var a = xe(t.numer, r, e);
                                if (t.continued) {
                                    var s = 8.5 / e.fontMetrics().ptPerEm
                                        , l = 3.5 / e.fontMetrics().ptPerEm;
                                    a.height = a.height < s ? s : a.height,
                                        a.depth = a.depth < l ? l : a.depth
                                }
                                r = e.havingStyle(o);
                                var h, c, u, m, p, d, f, g, b, y, v = xe(t.denom, r, e);
                                if (t.hasBarLine ? (t.barSize ? (c = Ht(t.barSize, e),
                                    h = Kt.makeLineSpan("frac-line", e, c)) : h = Kt.makeLineSpan("frac-line", e),
                                    c = h.height,
                                    u = h.height) : (h = null,
                                        c = 0,
                                        u = e.fontMetrics().defaultRuleThickness),
                                    n.size === w.DISPLAY.size || "display" === t.size ? (m = e.fontMetrics().num1,
                                        p = c > 0 ? 3 * u : 7 * u,
                                        d = e.fontMetrics().denom1) : (c > 0 ? (m = e.fontMetrics().num2,
                                            p = u) : (m = e.fontMetrics().num3,
                                                p = 3 * u),
                                            d = e.fontMetrics().denom2),
                                    h) {
                                    var x = e.fontMetrics().axisHeight;
                                    m - a.depth - (x + .5 * c) < p && (m += p - (m - a.depth - (x + .5 * c))),
                                        x - .5 * c - (v.height - d) < p && (d += p - (x - .5 * c - (v.height - d)));
                                    var k = -(x - .5 * c);
                                    f = Kt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: v,
                                            shift: d
                                        }, {
                                            type: "elem",
                                            elem: h,
                                            shift: k
                                        }, {
                                            type: "elem",
                                            elem: a,
                                            shift: -m
                                        }]
                                    }, e)
                                } else {
                                    var M = m - a.depth - (v.height - d);
                                    M < p && (m += .5 * (p - M),
                                        d += .5 * (p - M)),
                                        f = Kt.makeVList({
                                            positionType: "individualShift",
                                            children: [{
                                                type: "elem",
                                                elem: v,
                                                shift: d
                                            }, {
                                                type: "elem",
                                                elem: a,
                                                shift: -m
                                            }]
                                        }, e)
                                }
                                return r = e.havingStyle(n),
                                    f.height *= r.sizeMultiplier / e.sizeMultiplier,
                                    f.depth *= r.sizeMultiplier / e.sizeMultiplier,
                                    g = n.size === w.DISPLAY.size ? e.fontMetrics().delim1 : e.fontMetrics().delim2,
                                    b = null == t.leftDelim ? ve(e, ["mopen"]) : xr(t.leftDelim, g, !0, e.havingStyle(n), t.mode, ["mopen"]),
                                    y = t.continued ? Kt.makeSpan([]) : null == t.rightDelim ? ve(e, ["mclose"]) : xr(t.rightDelim, g, !0, e.havingStyle(n), t.mode, ["mclose"]),
                                    Kt.makeSpan(["mord"].concat(r.sizingClasses(e)), [b, Kt.makeSpan(["mfrac"], [f]), y], e)
                            }
                            , Xr = function (t, e) {
                                var r = new Te.MathNode("mfrac", [Ne(t.numer, e), Ne(t.denom, e)]);
                                if (t.hasBarLine) {
                                    if (t.barSize) {
                                        var n = Ht(t.barSize, e);
                                        r.setAttribute("linethickness", n + "em")
                                    }
                                } else
                                    r.setAttribute("linethickness", "0px");
                                var i = Ur(t.size, e.style);
                                if (i.size !== e.style.size) {
                                    r = new Te.MathNode("mstyle", [r]);
                                    var o = i.size === w.DISPLAY.size ? "true" : "false";
                                    r.setAttribute("displaystyle", o),
                                        r.setAttribute("scriptlevel", "0")
                                }
                                if (null != t.leftDelim || null != t.rightDelim) {
                                    var a = [];
                                    if (null != t.leftDelim) {
                                        var s = new Te.MathNode("mo", [new Te.TextNode(t.leftDelim.replace("\\", ""))]);
                                        s.setAttribute("fence", "true"),
                                            a.push(s)
                                    }
                                    if (a.push(r),
                                        null != t.rightDelim) {
                                        var l = new Te.MathNode("mo", [new Te.TextNode(t.rightDelim.replace("\\", ""))]);
                                        l.setAttribute("fence", "true"),
                                            a.push(l)
                                    }
                                    return Ae(a)
                                }
                                return r
                            };
                        ae({
                            type: "genfrac",
                            names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
                            props: {
                                numArgs: 2,
                                greediness: 2
                            },
                            handler: function (t, e) {
                                var r, n = t.parser, i = t.funcName, o = e[0], a = e[1], s = null, l = null, h = "auto";
                                switch (i) {
                                    case "\\cfrac":
                                    case "\\dfrac":
                                    case "\\frac":
                                    case "\\tfrac":
                                        r = !0;
                                        break;
                                    case "\\\\atopfrac":
                                        r = !1;
                                        break;
                                    case "\\dbinom":
                                    case "\\binom":
                                    case "\\tbinom":
                                        r = !1,
                                            s = "(",
                                            l = ")";
                                        break;
                                    case "\\\\bracefrac":
                                        r = !1,
                                            s = "\\{",
                                            l = "\\}";
                                        break;
                                    case "\\\\brackfrac":
                                        r = !1,
                                            s = "[",
                                            l = "]";
                                        break;
                                    default:
                                        throw new Error("Unrecognized genfrac command")
                                }
                                switch (i) {
                                    case "\\cfrac":
                                    case "\\dfrac":
                                    case "\\dbinom":
                                        h = "display";
                                        break;
                                    case "\\tfrac":
                                    case "\\tbinom":
                                        h = "text"
                                }
                                return {
                                    type: "genfrac",
                                    mode: n.mode,
                                    continued: "\\cfrac" === i,
                                    numer: o,
                                    denom: a,
                                    hasBarLine: r,
                                    leftDelim: s,
                                    rightDelim: l,
                                    size: h,
                                    barSize: null
                                }
                            },
                            htmlBuilder: Gr,
                            mathmlBuilder: Xr
                        }),
                            ae({
                                type: "infix",
                                names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                                props: {
                                    numArgs: 0,
                                    infix: !0
                                },
                                handler: function (t) {
                                    var e, r = t.parser, n = t.funcName, i = t.token;
                                    switch (n) {
                                        case "\\over":
                                            e = "\\frac";
                                            break;
                                        case "\\choose":
                                            e = "\\binom";
                                            break;
                                        case "\\atop":
                                            e = "\\\\atopfrac";
                                            break;
                                        case "\\brace":
                                            e = "\\\\bracefrac";
                                            break;
                                        case "\\brack":
                                            e = "\\\\brackfrac";
                                            break;
                                        default:
                                            throw new Error("Unrecognized infix genfrac command")
                                    }
                                    return {
                                        type: "infix",
                                        mode: r.mode,
                                        replaceWith: e,
                                        token: i
                                    }
                                }
                            });
                        var Yr = ["display", "text", "script", "scriptscript"]
                            , jr = function (t) {
                                var e = null;
                                return t.length > 0 && (e = "." === (e = t) ? null : e),
                                    e
                            };
                        ae({
                            type: "genfrac",
                            names: ["\\genfrac"],
                            props: {
                                numArgs: 6,
                                greediness: 6,
                                argTypes: ["math", "math", "size", "text", "math", "math"]
                            },
                            handler: function (t, e) {
                                var r, n = t.parser, i = e[4], o = e[5], a = "atom" === e[0].type && "open" === e[0].family ? jr(e[0].text) : null, s = "atom" === e[1].type && "close" === e[1].family ? jr(e[1].text) : null, l = De(e[2], "size"), h = null;
                                r = !!l.isBlank || (h = l.value).number > 0;
                                var c = "auto"
                                    , u = e[3];
                                if ("ordgroup" === u.type) {
                                    if (u.body.length > 0) {
                                        var m = De(u.body[0], "textord");
                                        c = Yr[Number(m.text)]
                                    }
                                } else
                                    u = De(u, "textord"),
                                        c = Yr[Number(u.text)];
                                return {
                                    type: "genfrac",
                                    mode: n.mode,
                                    numer: i,
                                    denom: o,
                                    continued: !1,
                                    hasBarLine: r,
                                    barSize: h,
                                    leftDelim: a,
                                    rightDelim: s,
                                    size: c
                                }
                            },
                            htmlBuilder: Gr,
                            mathmlBuilder: Xr
                        }),
                            ae({
                                type: "infix",
                                names: ["\\above"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["size"],
                                    infix: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser;
                                    t.funcName;
                                    var n = t.token;
                                    return {
                                        type: "infix",
                                        mode: r.mode,
                                        replaceWith: "\\\\abovefrac",
                                        size: De(e[0], "size").value,
                                        token: n
                                    }
                                }
                            }),
                            ae({
                                type: "genfrac",
                                names: ["\\\\abovefrac"],
                                props: {
                                    numArgs: 3,
                                    argTypes: ["math", "size", "math"]
                                },
                                handler: function (t, e) {
                                    var r = t.parser;
                                    t.funcName;
                                    var n = e[0]
                                        , i = function (t) {
                                            if (!t)
                                                throw new Error("Expected non-null, but got " + String(t));
                                            return t
                                        }(De(e[1], "infix").size)
                                        , o = e[2]
                                        , a = i.number > 0;
                                    return {
                                        type: "genfrac",
                                        mode: r.mode,
                                        numer: n,
                                        denom: o,
                                        continued: !1,
                                        hasBarLine: a,
                                        barSize: i,
                                        leftDelim: null,
                                        rightDelim: null,
                                        size: "auto"
                                    }
                                },
                                htmlBuilder: Gr,
                                mathmlBuilder: Xr
                            });
                        var Zr = function (t, e) {
                            var r, n, i = e.style;
                            "supsub" === t.type ? (r = t.sup ? xe(t.sup, e.havingStyle(i.sup()), e) : xe(t.sub, e.havingStyle(i.sub()), e),
                                n = De(t.base, "horizBrace")) : n = De(t, "horizBrace");
                            var o, a = xe(n.base, e.havingBaseStyle(w.DISPLAY)), s = He(n, e);
                            if (n.isOver ? (o = Kt.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: a
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: s
                                }]
                            }, e)).children[0].children[0].children[1].classes.push("svg-align") : (o = Kt.makeVList({
                                positionType: "bottom",
                                positionData: a.depth + .1 + s.height,
                                children: [{
                                    type: "elem",
                                    elem: s
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: a
                                }]
                            }, e)).children[0].children[0].children[0].classes.push("svg-align"),
                                r) {
                                var l = Kt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [o], e);
                                o = n.isOver ? Kt.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: l
                                    }, {
                                        type: "kern",
                                        size: .2
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, e) : Kt.makeVList({
                                    positionType: "bottom",
                                    positionData: l.depth + .2 + r.height + r.depth,
                                    children: [{
                                        type: "elem",
                                        elem: r
                                    }, {
                                        type: "kern",
                                        size: .2
                                    }, {
                                        type: "elem",
                                        elem: l
                                    }]
                                }, e)
                            }
                            return Kt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [o], e)
                        };
                        ae({
                            type: "horizBrace",
                            names: ["\\overbrace", "\\underbrace"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName;
                                return {
                                    type: "horizBrace",
                                    mode: r.mode,
                                    label: n,
                                    isOver: /^\\over/.test(n),
                                    base: e[0]
                                }
                            },
                            htmlBuilder: Zr,
                            mathmlBuilder: function (t, e) {
                                var r = Oe(t.label);
                                return new Te.MathNode(t.isOver ? "mover" : "munder", [Ne(t.base, e), r])
                            }
                        }),
                            ae({
                                type: "href",
                                names: ["\\href"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["url", "original"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[1]
                                        , i = De(e[0], "url").url;
                                    return r.settings.isTrusted({
                                        command: "\\href",
                                        url: i
                                    }) ? {
                                        type: "href",
                                        mode: r.mode,
                                        href: i,
                                        body: le(n)
                                    } : r.formatUnsupportedCmd("\\href")
                                },
                                htmlBuilder: function (t, e) {
                                    var r = de(t.body, e, !1);
                                    return Kt.makeAnchor(t.href, [], r, e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Ce(t.body, e);
                                    return r instanceof Se || (r = new Se("mrow", [r])),
                                        r.setAttribute("href", t.href),
                                        r
                                }
                            }),
                            ae({
                                type: "href",
                                names: ["\\url"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["url"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = De(e[0], "url").url;
                                    if (!r.settings.isTrusted({
                                        command: "\\url",
                                        url: n
                                    }))
                                        return r.formatUnsupportedCmd("\\url");
                                    for (var i = [], o = 0; o < n.length; o++) {
                                        var a = n[o];
                                        "~" === a && (a = "\\textasciitilde"),
                                            i.push({
                                                type: "textord",
                                                mode: "text",
                                                text: a
                                            })
                                    }
                                    var s = {
                                        type: "text",
                                        mode: r.mode,
                                        font: "\\texttt",
                                        body: i
                                    };
                                    return {
                                        type: "href",
                                        mode: r.mode,
                                        href: n,
                                        body: le(s)
                                    }
                                }
                            }),
                            ae({
                                type: "html",
                                names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["raw", "original"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.funcName;
                                    t.token;
                                    var i, o = De(e[0], "raw").string, s = e[1];
                                    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                                    var l = {};
                                    switch (n) {
                                        case "\\htmlClass":
                                            l.class = o,
                                                i = {
                                                    command: "\\htmlClass",
                                                    class: o
                                                };
                                            break;
                                        case "\\htmlId":
                                            l.id = o,
                                                i = {
                                                    command: "\\htmlId",
                                                    id: o
                                                };
                                            break;
                                        case "\\htmlStyle":
                                            l.style = o,
                                                i = {
                                                    command: "\\htmlStyle",
                                                    style: o
                                                };
                                            break;
                                        case "\\htmlData":
                                            for (var h = o.split(","), c = 0; c < h.length; c++) {
                                                var u = h[c].split("=");
                                                if (2 !== u.length)
                                                    throw new a("Error parsing key-value for \\htmlData");
                                                l["data-" + u[0].trim()] = u[1].trim()
                                            }
                                            i = {
                                                command: "\\htmlData",
                                                attributes: l
                                            };
                                            break;
                                        default:
                                            throw new Error("Unrecognized html command")
                                    }
                                    return r.settings.isTrusted(i) ? {
                                        type: "html",
                                        mode: r.mode,
                                        attributes: l,
                                        body: le(s)
                                    } : r.formatUnsupportedCmd(n)
                                },
                                htmlBuilder: function (t, e) {
                                    var r = de(t.body, e, !1)
                                        , n = ["enclosing"];
                                    t.attributes.class && n.push.apply(n, t.attributes.class.trim().split(/\s+/));
                                    var i = Kt.makeSpan(n, r, e);
                                    for (var o in t.attributes)
                                        "class" !== o && t.attributes.hasOwnProperty(o) && i.setAttribute(o, t.attributes[o]);
                                    return i
                                },
                                mathmlBuilder: function (t, e) {
                                    return Ce(t.body, e)
                                }
                            }),
                            ae({
                                type: "htmlmathml",
                                names: ["\\html@mathml"],
                                props: {
                                    numArgs: 2,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    return {
                                        type: "htmlmathml",
                                        mode: t.parser.mode,
                                        html: le(e[0]),
                                        mathml: le(e[1])
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = de(t.html, e, !1);
                                    return Kt.makeFragment(r)
                                },
                                mathmlBuilder: function (t, e) {
                                    return Ce(t.mathml, e)
                                }
                            });
                        var Kr = function (t) {
                            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
                                return {
                                    number: +t,
                                    unit: "bp"
                                };
                            var e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
                            if (!e)
                                throw new a("Invalid size: '" + t + "' in \\includegraphics");
                            var r = {
                                number: +(e[1] + e[2]),
                                unit: e[3]
                            };
                            if (!Ot(r))
                                throw new a("Invalid unit: '" + r.unit + "' in \\includegraphics.");
                            return r
                        };
                        ae({
                            type: "includegraphics",
                            names: ["\\includegraphics"],
                            props: {
                                numArgs: 1,
                                numOptionalArgs: 1,
                                argTypes: ["raw", "url"],
                                allowedInText: !1
                            },
                            handler: function (t, e, r) {
                                var n = t.parser
                                    , i = {
                                        number: 0,
                                        unit: "em"
                                    }
                                    , o = {
                                        number: .9,
                                        unit: "em"
                                    }
                                    , s = {
                                        number: 0,
                                        unit: "em"
                                    }
                                    , l = "";
                                if (r[0])
                                    for (var h = De(r[0], "raw").string.split(","), c = 0; c < h.length; c++) {
                                        var u = h[c].split("=");
                                        if (2 === u.length) {
                                            var m = u[1].trim();
                                            switch (u[0].trim()) {
                                                case "alt":
                                                    l = m;
                                                    break;
                                                case "width":
                                                    i = Kr(m);
                                                    break;
                                                case "height":
                                                    o = Kr(m);
                                                    break;
                                                case "totalheight":
                                                    s = Kr(m);
                                                    break;
                                                default:
                                                    throw new a("Invalid key: '" + u[0] + "' in \\includegraphics.")
                                            }
                                        }
                                    }
                                var p = De(e[0], "url").url;
                                return "" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))),
                                    n.settings.isTrusted({
                                        command: "\\includegraphics",
                                        url: p
                                    }) ? {
                                        type: "includegraphics",
                                        mode: n.mode,
                                        alt: l,
                                        width: i,
                                        height: o,
                                        totalheight: s,
                                        src: p
                                    } : n.formatUnsupportedCmd("\\includegraphics")
                            },
                            htmlBuilder: function (t, e) {
                                var r = Ht(t.height, e)
                                    , n = 0;
                                t.totalheight.number > 0 && (n = Ht(t.totalheight, e) - r,
                                    n = Number(n.toFixed(2)));
                                var i = 0;
                                t.width.number > 0 && (i = Ht(t.width, e));
                                var o = {
                                    height: r + n + "em"
                                };
                                i > 0 && (o.width = i + "em"),
                                    n > 0 && (o.verticalAlign = -n + "em");
                                var a = new B(t.src, t.alt, o);
                                return a.height = r,
                                    a.depth = n,
                                    a
                            },
                            mathmlBuilder: function (t, e) {
                                var r = new Te.MathNode("mglyph", []);
                                r.setAttribute("alt", t.alt);
                                var n = Ht(t.height, e)
                                    , i = 0;
                                if (t.totalheight.number > 0 && (i = (i = Ht(t.totalheight, e) - n).toFixed(2),
                                    r.setAttribute("valign", "-" + i + "em")),
                                    r.setAttribute("height", n + i + "em"),
                                    t.width.number > 0) {
                                    var o = Ht(t.width, e);
                                    r.setAttribute("width", o + "em")
                                }
                                return r.setAttribute("src", t.src),
                                    r
                            }
                        }),
                            ae({
                                type: "kern",
                                names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["size"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , i = De(e[0], "size");
                                    if (r.settings.strict) {
                                        var o = "m" === n[1]
                                            , a = "mu" === i.value.unit;
                                        o ? (a || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + i.value.unit + " units"),
                                            "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : a && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
                                    }
                                    return {
                                        type: "kern",
                                        mode: r.mode,
                                        dimension: i.value
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    return Kt.makeGlue(t.dimension, e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Ht(t.dimension, e);
                                    return new Te.SpaceNode(r)
                                }
                            }),
                            ae({
                                type: "lap",
                                names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , i = e[0];
                                    return {
                                        type: "lap",
                                        mode: r.mode,
                                        alignment: n.slice(5),
                                        body: i
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r;
                                    "clap" === t.alignment ? (r = Kt.makeSpan([], [xe(t.body, e)]),
                                        r = Kt.makeSpan(["inner"], [r], e)) : r = Kt.makeSpan(["inner"], [xe(t.body, e)]);
                                    var n = Kt.makeSpan(["fix"], [])
                                        , i = Kt.makeSpan([t.alignment], [r, n], e)
                                        , o = Kt.makeSpan(["strut"]);
                                    return o.style.height = i.height + i.depth + "em",
                                        o.style.verticalAlign = -i.depth + "em",
                                        i.children.unshift(o),
                                        i = Kt.makeSpan(["thinbox"], [i], e),
                                        Kt.makeSpan(["mord", "vbox"], [i], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mpadded", [Ne(t.body, e)]);
                                    if ("rlap" !== t.alignment) {
                                        var n = "llap" === t.alignment ? "-1" : "-0.5";
                                        r.setAttribute("lspace", n + "width")
                                    }
                                    return r.setAttribute("width", "0px"),
                                        r
                                }
                            }),
                            ae({
                                type: "styling",
                                names: ["\\(", "$"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function (t, e) {
                                    var r = t.funcName
                                        , n = t.parser
                                        , i = n.mode;
                                    n.switchMode("math");
                                    var o = "\\(" === r ? "\\)" : "$"
                                        , a = n.parseExpression(!1, o);
                                    return n.expect(o),
                                        n.switchMode(i),
                                    {
                                        type: "styling",
                                        mode: n.mode,
                                        style: "text",
                                        body: a
                                    }
                                }
                            }),
                            ae({
                                type: "text",
                                names: ["\\)", "\\]"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function (t, e) {
                                    throw new a("Mismatched " + t.funcName)
                                }
                            });
                        var Jr = function (t, e) {
                            switch (e.style.size) {
                                case w.DISPLAY.size:
                                    return t.display;
                                case w.TEXT.size:
                                    return t.text;
                                case w.SCRIPT.size:
                                    return t.script;
                                case w.SCRIPTSCRIPT.size:
                                    return t.scriptscript;
                                default:
                                    return t.text
                            }
                        };
                        ae({
                            type: "mathchoice",
                            names: ["\\mathchoice"],
                            props: {
                                numArgs: 4
                            },
                            handler: function (t, e) {
                                return {
                                    type: "mathchoice",
                                    mode: t.parser.mode,
                                    display: le(e[0]),
                                    text: le(e[1]),
                                    script: le(e[2]),
                                    scriptscript: le(e[3])
                                }
                            },
                            htmlBuilder: function (t, e) {
                                var r = Jr(t, e)
                                    , n = de(r, e, !1);
                                return Kt.makeFragment(n)
                            },
                            mathmlBuilder: function (t, e) {
                                var r = Jr(t, e);
                                return Ce(r, e)
                            }
                        });
                        var Qr = function (t, e, r, n, i, o, a) {
                            var s, l, h;
                            if (t = Kt.makeSpan([], [t]),
                                e) {
                                var c = xe(e, n.havingStyle(i.sup()), n);
                                l = {
                                    elem: c,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - c.depth)
                                }
                            }
                            if (r) {
                                var u = xe(r, n.havingStyle(i.sub()), n);
                                s = {
                                    elem: u,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - u.height)
                                }
                            }
                            if (l && s) {
                                var m = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + t.depth + a;
                                h = Kt.makeVList({
                                    positionType: "bottom",
                                    positionData: m,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -o + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: t
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: o + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            } else if (s) {
                                var p = t.height - a;
                                h = Kt.makeVList({
                                    positionType: "top",
                                    positionData: p,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -o + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: t
                                    }]
                                }, n)
                            } else {
                                if (!l)
                                    return t;
                                var d = t.depth + a;
                                h = Kt.makeVList({
                                    positionType: "bottom",
                                    positionData: d,
                                    children: [{
                                        type: "elem",
                                        elem: t
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: o + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            }
                            return Kt.makeSpan(["mop", "op-limits"], [h], n)
                        }
                            , tn = ["\\smallint"]
                            , en = function (t, e) {
                                var r, n, i, o = !1;
                                "supsub" === t.type ? (r = t.sup,
                                    n = t.sub,
                                    i = De(t.base, "op"),
                                    o = !0) : i = De(t, "op");
                                var a, s = e.style, l = !1;
                                if (s.size === w.DISPLAY.size && i.symbol && !u.contains(tn, i.name) && (l = !0),
                                    i.symbol) {
                                    var h = l ? "Size2-Regular" : "Size1-Regular"
                                        , c = "";
                                    if ("\\oiint" !== i.name && "\\oiiint" !== i.name || (c = i.name.substr(1),
                                        i.name = "oiint" === c ? "\\iint" : "\\iiint"),
                                        a = Kt.makeSymbol(i.name, h, "math", e, ["mop", "op-symbol", l ? "large-op" : "small-op"]),
                                        c.length > 0) {
                                        var m = a.italic
                                            , p = Kt.staticSvg(c + "Size" + (l ? "2" : "1"), e);
                                        a = Kt.makeVList({
                                            positionType: "individualShift",
                                            children: [{
                                                type: "elem",
                                                elem: a,
                                                shift: 0
                                            }, {
                                                type: "elem",
                                                elem: p,
                                                shift: l ? .08 : 0
                                            }]
                                        }, e),
                                            i.name = "\\" + c,
                                            a.classes.unshift("mop"),
                                            a.italic = m
                                    }
                                } else if (i.body) {
                                    var d = de(i.body, e, !0);
                                    1 === d.length && d[0] instanceof E ? (a = d[0]).classes[0] = "mop" : a = Kt.makeSpan(["mop"], Kt.tryCombineChars(d), e)
                                } else {
                                    for (var f = [], g = 1; g < i.name.length; g++)
                                        f.push(Kt.mathsym(i.name[g], i.mode, e));
                                    a = Kt.makeSpan(["mop"], f, e)
                                }
                                var b = 0
                                    , y = 0;
                                return (a instanceof E || "\\oiint" === i.name || "\\oiiint" === i.name) && !i.suppressBaseShift && (b = (a.height - a.depth) / 2 - e.fontMetrics().axisHeight,
                                    y = a.italic),
                                    o ? Qr(a, r, n, e, s, y, b) : (b && (a.style.position = "relative",
                                        a.style.top = b + "em"),
                                        a)
                            }
                            , rn = function (t, e) {
                                var r;
                                if (t.symbol)
                                    r = new Se("mo", [ze(t.name, t.mode)]),
                                        u.contains(tn, t.name) && r.setAttribute("largeop", "false");
                                else if (t.body)
                                    r = new Se("mo", Pe(t.body, e));
                                else {
                                    r = new Se("mi", [new Le(t.name.slice(1))]);
                                    var n = new Se("mo", [ze("⁡", "text")]);
                                    r = t.parentIsSupSub ? new Se("mo", [r, n]) : Me([r, n])
                                }
                                return r
                            }
                            , nn = {
                                "∏": "\\prod",
                                "∐": "\\coprod",
                                "∑": "\\sum",
                                "⋀": "\\bigwedge",
                                "⋁": "\\bigvee",
                                "⋂": "\\bigcap",
                                "⋃": "\\bigcup",
                                "⨀": "\\bigodot",
                                "⨁": "\\bigoplus",
                                "⨂": "\\bigotimes",
                                "⨄": "\\biguplus",
                                "⨆": "\\bigsqcup"
                            };
                        ae({
                            type: "op",
                            names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
                            props: {
                                numArgs: 0
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName;
                                return 1 === n.length && (n = nn[n]),
                                {
                                    type: "op",
                                    mode: r.mode,
                                    limits: !0,
                                    parentIsSupSub: !1,
                                    symbol: !0,
                                    name: n
                                }
                            },
                            htmlBuilder: en,
                            mathmlBuilder: rn
                        }),
                            ae({
                                type: "op",
                                names: ["\\mathop"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "op",
                                        mode: r.mode,
                                        limits: !1,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        body: le(n)
                                    }
                                },
                                htmlBuilder: en,
                                mathmlBuilder: rn
                            });
                        var on = {
                            "∫": "\\int",
                            "∬": "\\iint",
                            "∭": "\\iiint",
                            "∮": "\\oint",
                            "∯": "\\oiint",
                            "∰": "\\oiiint"
                        };
                        ae({
                            type: "op",
                            names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
                            props: {
                                numArgs: 0
                            },
                            handler: function (t) {
                                var e = t.parser
                                    , r = t.funcName;
                                return {
                                    type: "op",
                                    mode: e.mode,
                                    limits: !1,
                                    parentIsSupSub: !1,
                                    symbol: !1,
                                    name: r
                                }
                            },
                            htmlBuilder: en,
                            mathmlBuilder: rn
                        }),
                            ae({
                                type: "op",
                                names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    var e = t.parser
                                        , r = t.funcName;
                                    return {
                                        type: "op",
                                        mode: e.mode,
                                        limits: !0,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        name: r
                                    }
                                },
                                htmlBuilder: en,
                                mathmlBuilder: rn
                            }),
                            ae({
                                type: "op",
                                names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function (t) {
                                    var e = t.parser
                                        , r = t.funcName;
                                    return 1 === r.length && (r = on[r]),
                                    {
                                        type: "op",
                                        mode: e.mode,
                                        limits: !1,
                                        parentIsSupSub: !1,
                                        symbol: !0,
                                        name: r
                                    }
                                },
                                htmlBuilder: en,
                                mathmlBuilder: rn
                            });
                        var an = function (t, e) {
                            var r, n, i, o, a = !1;
                            if ("supsub" === t.type ? (r = t.sup,
                                n = t.sub,
                                i = De(t.base, "operatorname"),
                                a = !0) : i = De(t, "operatorname"),
                                i.body.length > 0) {
                                for (var s = i.body.map((function (t) {
                                    var e = t.text;
                                    return "string" == typeof e ? {
                                        type: "textord",
                                        mode: t.mode,
                                        text: e
                                    } : t
                                }
                                )), l = de(s, e.withFont("mathrm"), !0), h = 0; h < l.length; h++) {
                                    var c = l[h];
                                    c instanceof E && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                                }
                                o = Kt.makeSpan(["mop"], l, e)
                            } else
                                o = Kt.makeSpan(["mop"], [], e);
                            return a ? Qr(o, r, n, e, e.style, 0, 0) : o
                        };
                        function sn(t, e, r) {
                            for (var n = de(t, e, !1), i = e.sizeMultiplier / r.sizeMultiplier, o = 0; o < n.length; o++) {
                                var a = n[o].classes.indexOf("sizing");
                                a < 0 ? Array.prototype.push.apply(n[o].classes, e.sizingClasses(r)) : n[o].classes[a + 1] === "reset-size" + e.size && (n[o].classes[a + 1] = "reset-size" + r.size),
                                    n[o].height *= i,
                                    n[o].depth *= i
                            }
                            return Kt.makeFragment(n)
                        }
                        ae({
                            type: "operatorname",
                            names: ["\\operatorname", "\\operatorname*"],
                            props: {
                                numArgs: 1
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , i = e[0];
                                return {
                                    type: "operatorname",
                                    mode: r.mode,
                                    body: le(i),
                                    alwaysHandleSupSub: "\\operatorname*" === n,
                                    limits: !1,
                                    parentIsSupSub: !1
                                }
                            },
                            htmlBuilder: an,
                            mathmlBuilder: function (t, e) {
                                for (var r = Pe(t.body, e.withFont("mathrm")), n = !0, i = 0; i < r.length; i++) {
                                    var o = r[i];
                                    if (o instanceof Te.SpaceNode)
                                        ;
                                    else if (o instanceof Te.MathNode)
                                        switch (o.type) {
                                            case "mi":
                                            case "mn":
                                            case "ms":
                                            case "mspace":
                                            case "mtext":
                                                break;
                                            case "mo":
                                                var a = o.children[0];
                                                1 === o.children.length && a instanceof Te.TextNode ? a.text = a.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                                                break;
                                            default:
                                                n = !1
                                        }
                                    else
                                        n = !1
                                }
                                if (n) {
                                    var s = r.map((function (t) {
                                        return t.toText()
                                    }
                                    )).join("");
                                    r = [new Te.TextNode(s)]
                                }
                                var l = new Te.MathNode("mi", r);
                                l.setAttribute("mathvariant", "normal");
                                var h = new Te.MathNode("mo", [ze("⁡", "text")]);
                                return t.parentIsSupSub ? new Te.MathNode("mo", [l, h]) : Te.newDocumentFragment([l, h])
                            }
                        }),
                            se({
                                type: "ordgroup",
                                htmlBuilder: function (t, e) {
                                    return t.semisimple ? Kt.makeFragment(de(t.body, e, !1)) : Kt.makeSpan(["mord"], de(t.body, e, !0), e)
                                },
                                mathmlBuilder: function (t, e) {
                                    return Ce(t.body, e, !0)
                                }
                            }),
                            ae({
                                type: "overline",
                                names: ["\\overline"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "overline",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = xe(t.body, e.havingCrampedStyle())
                                        , n = Kt.makeLineSpan("overline-line", e)
                                        , i = e.fontMetrics().defaultRuleThickness
                                        , o = Kt.makeVList({
                                            positionType: "firstBaseline",
                                            children: [{
                                                type: "elem",
                                                elem: r
                                            }, {
                                                type: "kern",
                                                size: 3 * i
                                            }, {
                                                type: "elem",
                                                elem: n
                                            }, {
                                                type: "kern",
                                                size: i
                                            }]
                                        }, e);
                                    return Kt.makeSpan(["mord", "overline"], [o], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mo", [new Te.TextNode("‾")]);
                                    r.setAttribute("stretchy", "true");
                                    var n = new Te.MathNode("mover", [Ne(t.body, e), r]);
                                    return n.setAttribute("accent", "true"),
                                        n
                                }
                            }),
                            ae({
                                type: "phantom",
                                names: ["\\phantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "phantom",
                                        mode: r.mode,
                                        body: le(n)
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = de(t.body, e.withPhantom(), !1);
                                    return Kt.makeFragment(r)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Pe(t.body, e);
                                    return new Te.MathNode("mphantom", r)
                                }
                            }),
                            ae({
                                type: "hphantom",
                                names: ["\\hphantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "hphantom",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = Kt.makeSpan([], [xe(t.body, e.withPhantom())]);
                                    if (r.height = 0,
                                        r.depth = 0,
                                        r.children)
                                        for (var n = 0; n < r.children.length; n++)
                                            r.children[n].height = 0,
                                                r.children[n].depth = 0;
                                    return r = Kt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e),
                                        Kt.makeSpan(["mord"], [r], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Pe(le(t.body), e)
                                        , n = new Te.MathNode("mphantom", r)
                                        , i = new Te.MathNode("mpadded", [n]);
                                    return i.setAttribute("height", "0px"),
                                        i.setAttribute("depth", "0px"),
                                        i
                                }
                            }),
                            ae({
                                type: "vphantom",
                                names: ["\\vphantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "vphantom",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = Kt.makeSpan(["inner"], [xe(t.body, e.withPhantom())])
                                        , n = Kt.makeSpan(["fix"], []);
                                    return Kt.makeSpan(["mord", "rlap"], [r, n], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Pe(le(t.body), e)
                                        , n = new Te.MathNode("mphantom", r)
                                        , i = new Te.MathNode("mpadded", [n]);
                                    return i.setAttribute("width", "0px"),
                                        i
                                }
                            }),
                            ae({
                                type: "raisebox",
                                names: ["\\raisebox"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["size", "hbox"],
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    var r = t.parser
                                        , n = De(e[0], "size").value
                                        , i = e[1];
                                    return {
                                        type: "raisebox",
                                        mode: r.mode,
                                        dy: n,
                                        body: i
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = xe(t.body, e)
                                        , n = Ht(t.dy, e);
                                    return Kt.makeVList({
                                        positionType: "shift",
                                        positionData: -n,
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mpadded", [Ne(t.body, e)])
                                        , n = t.dy.number + t.dy.unit;
                                    return r.setAttribute("voffset", n),
                                        r
                                }
                            }),
                            ae({
                                type: "rule",
                                names: ["\\rule"],
                                props: {
                                    numArgs: 2,
                                    numOptionalArgs: 1,
                                    argTypes: ["size", "size", "size"]
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = r[0]
                                        , o = De(e[0], "size")
                                        , a = De(e[1], "size");
                                    return {
                                        type: "rule",
                                        mode: n.mode,
                                        shift: i && De(i, "size").value,
                                        width: o.value,
                                        height: a.value
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = Kt.makeSpan(["mord", "rule"], [], e)
                                        , n = Ht(t.width, e)
                                        , i = Ht(t.height, e)
                                        , o = t.shift ? Ht(t.shift, e) : 0;
                                    return r.style.borderRightWidth = n + "em",
                                        r.style.borderTopWidth = i + "em",
                                        r.style.bottom = o + "em",
                                        r.width = n,
                                        r.height = i + o,
                                        r.depth = -o,
                                        r.maxFontSize = 1.125 * i * e.sizeMultiplier,
                                        r
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = Ht(t.width, e)
                                        , n = Ht(t.height, e)
                                        , i = t.shift ? Ht(t.shift, e) : 0
                                        , o = e.color && e.getColor() || "black"
                                        , a = new Te.MathNode("mspace");
                                    a.setAttribute("mathbackground", o),
                                        a.setAttribute("width", r + "em"),
                                        a.setAttribute("height", n + "em");
                                    var s = new Te.MathNode("mpadded", [a]);
                                    return i >= 0 ? s.setAttribute("height", "+" + i + "em") : (s.setAttribute("height", i + "em"),
                                        s.setAttribute("depth", "+" + -i + "em")),
                                        s.setAttribute("voffset", i + "em"),
                                        s
                                }
                            });
                        var ln = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
                        ae({
                            type: "sizing",
                            names: ln,
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function (t, e) {
                                var r = t.breakOnTokenText
                                    , n = t.funcName
                                    , i = t.parser
                                    , o = i.parseExpression(!1, r);
                                return {
                                    type: "sizing",
                                    mode: i.mode,
                                    size: ln.indexOf(n) + 1,
                                    body: o
                                }
                            },
                            htmlBuilder: function (t, e) {
                                var r = e.havingSize(t.size);
                                return sn(t.body, r, e)
                            },
                            mathmlBuilder: function (t, e) {
                                var r = e.havingSize(t.size)
                                    , n = Pe(t.body, r)
                                    , i = new Te.MathNode("mstyle", n);
                                return i.setAttribute("mathsize", r.sizeMultiplier + "em"),
                                    i
                            }
                        }),
                            ae({
                                type: "smash",
                                names: ["\\smash"],
                                props: {
                                    numArgs: 1,
                                    numOptionalArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = !1
                                        , o = !1
                                        , a = r[0] && De(r[0], "ordgroup");
                                    if (a)
                                        for (var s = "", l = 0; l < a.body.length; ++l)
                                            if ("t" === (s = a.body[l].text))
                                                i = !0;
                                            else {
                                                if ("b" !== s) {
                                                    i = !1,
                                                        o = !1;
                                                    break
                                                }
                                                o = !0
                                            }
                                    else
                                        i = !0,
                                            o = !0;
                                    var h = e[0];
                                    return {
                                        type: "smash",
                                        mode: n.mode,
                                        body: h,
                                        smashHeight: i,
                                        smashDepth: o
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = Kt.makeSpan([], [xe(t.body, e)]);
                                    if (!t.smashHeight && !t.smashDepth)
                                        return r;
                                    if (t.smashHeight && (r.height = 0,
                                        r.children))
                                        for (var n = 0; n < r.children.length; n++)
                                            r.children[n].height = 0;
                                    if (t.smashDepth && (r.depth = 0,
                                        r.children))
                                        for (var i = 0; i < r.children.length; i++)
                                            r.children[i].depth = 0;
                                    var o = Kt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e);
                                    return Kt.makeSpan(["mord"], [o], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mpadded", [Ne(t.body, e)]);
                                    return t.smashHeight && r.setAttribute("height", "0px"),
                                        t.smashDepth && r.setAttribute("depth", "0px"),
                                        r
                                }
                            }),
                            ae({
                                type: "sqrt",
                                names: ["\\sqrt"],
                                props: {
                                    numArgs: 1,
                                    numOptionalArgs: 1
                                },
                                handler: function (t, e, r) {
                                    var n = t.parser
                                        , i = r[0]
                                        , o = e[0];
                                    return {
                                        type: "sqrt",
                                        mode: n.mode,
                                        body: o,
                                        index: i
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = xe(t.body, e.havingCrampedStyle());
                                    0 === r.height && (r.height = e.fontMetrics().xHeight),
                                        r = Kt.wrapFragment(r, e);
                                    var n = e.fontMetrics().defaultRuleThickness
                                        , i = n;
                                    e.style.id < w.TEXT.id && (i = e.fontMetrics().xHeight);
                                    var o = n + i / 4
                                        , a = r.height + r.depth + o + n
                                        , s = yr(a, e)
                                        , l = s.span
                                        , h = s.ruleWidth
                                        , c = s.advanceWidth
                                        , u = l.height - h;
                                    u > r.height + r.depth + o && (o = (o + u - r.height - r.depth) / 2);
                                    var m = l.height - r.height - o - h;
                                    r.style.paddingLeft = c + "em";
                                    var p = Kt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r,
                                            wrapperClasses: ["svg-align"]
                                        }, {
                                            type: "kern",
                                            size: -(r.height + m)
                                        }, {
                                            type: "elem",
                                            elem: l
                                        }, {
                                            type: "kern",
                                            size: h
                                        }]
                                    }, e);
                                    if (t.index) {
                                        var d = e.havingStyle(w.SCRIPTSCRIPT)
                                            , f = xe(t.index, d, e)
                                            , g = .6 * (p.height - p.depth)
                                            , b = Kt.makeVList({
                                                positionType: "shift",
                                                positionData: -g,
                                                children: [{
                                                    type: "elem",
                                                    elem: f
                                                }]
                                            }, e)
                                            , y = Kt.makeSpan(["root"], [b]);
                                        return Kt.makeSpan(["mord", "sqrt"], [y, p], e)
                                    }
                                    return Kt.makeSpan(["mord", "sqrt"], [p], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = t.body
                                        , n = t.index;
                                    return n ? new Te.MathNode("mroot", [Ne(r, e), Ne(n, e)]) : new Te.MathNode("msqrt", [Ne(r, e)])
                                }
                            });
                        var hn = {
                            display: w.DISPLAY,
                            text: w.TEXT,
                            script: w.SCRIPT,
                            scriptscript: w.SCRIPTSCRIPT
                        };
                        ae({
                            type: "styling",
                            names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function (t, e) {
                                var r = t.breakOnTokenText
                                    , n = t.funcName
                                    , i = t.parser
                                    , o = i.parseExpression(!0, r)
                                    , a = n.slice(1, n.length - 5);
                                return {
                                    type: "styling",
                                    mode: i.mode,
                                    style: a,
                                    body: o
                                }
                            },
                            htmlBuilder: function (t, e) {
                                var r = hn[t.style]
                                    , n = e.havingStyle(r).withFont("");
                                return sn(t.body, n, e)
                            },
                            mathmlBuilder: function (t, e) {
                                var r = hn[t.style]
                                    , n = e.havingStyle(r)
                                    , i = Pe(t.body, n)
                                    , o = new Te.MathNode("mstyle", i)
                                    , a = {
                                        display: ["0", "true"],
                                        text: ["0", "false"],
                                        script: ["1", "false"],
                                        scriptscript: ["2", "false"]
                                    }[t.style];
                                return o.setAttribute("scriptlevel", a[0]),
                                    o.setAttribute("displaystyle", a[1]),
                                    o
                            }
                        }),
                            se({
                                type: "supsub",
                                htmlBuilder: function (t, e) {
                                    var r = function (t, e) {
                                        var r = t.base;
                                        return r ? "op" === r.type ? r.limits && (e.style.size === w.DISPLAY.size || r.alwaysHandleSupSub) ? en : null : "operatorname" === r.type ? r.alwaysHandleSupSub && (e.style.size === w.DISPLAY.size || r.limits) ? an : null : "accent" === r.type ? u.isCharacterBox(r.base) ? Ve : null : "horizBrace" === r.type && !t.sub === r.isOver ? Zr : null : null
                                    }(t, e);
                                    if (r)
                                        return r(t, e);
                                    var n, i, o, a = t.base, s = t.sup, l = t.sub, h = xe(a, e), c = e.fontMetrics(), m = 0, p = 0, d = a && u.isCharacterBox(a);
                                    if (s) {
                                        var f = e.havingStyle(e.style.sup());
                                        n = xe(s, f, e),
                                            d || (m = h.height - f.fontMetrics().supDrop * f.sizeMultiplier / e.sizeMultiplier)
                                    }
                                    if (l) {
                                        var g = e.havingStyle(e.style.sub());
                                        i = xe(l, g, e),
                                            d || (p = h.depth + g.fontMetrics().subDrop * g.sizeMultiplier / e.sizeMultiplier)
                                    }
                                    o = e.style === w.DISPLAY ? c.sup1 : e.style.cramped ? c.sup3 : c.sup2;
                                    var b, y = e.sizeMultiplier, v = .5 / c.ptPerEm / y + "em", x = null;
                                    if (i) {
                                        var k = t.base && "op" === t.base.type && t.base.name && ("\\oiint" === t.base.name || "\\oiiint" === t.base.name);
                                        (h instanceof E || k) && (x = -h.italic + "em")
                                    }
                                    if (n && i) {
                                        m = Math.max(m, o, n.depth + .25 * c.xHeight),
                                            p = Math.max(p, c.sub2);
                                        var M = 4 * c.defaultRuleThickness;
                                        if (m - n.depth - (i.height - p) < M) {
                                            p = M - (m - n.depth) + i.height;
                                            var S = .8 * c.xHeight - (m - n.depth);
                                            S > 0 && (m += S,
                                                p -= S)
                                        }
                                        var L = [{
                                            type: "elem",
                                            elem: i,
                                            shift: p,
                                            marginRight: v,
                                            marginLeft: x
                                        }, {
                                            type: "elem",
                                            elem: n,
                                            shift: -m,
                                            marginRight: v
                                        }];
                                        b = Kt.makeVList({
                                            positionType: "individualShift",
                                            children: L
                                        }, e)
                                    } else if (i) {
                                        p = Math.max(p, c.sub1, i.height - .8 * c.xHeight);
                                        var T = [{
                                            type: "elem",
                                            elem: i,
                                            marginLeft: x,
                                            marginRight: v
                                        }];
                                        b = Kt.makeVList({
                                            positionType: "shift",
                                            positionData: p,
                                            children: T
                                        }, e)
                                    } else {
                                        if (!n)
                                            throw new Error("supsub must have either sup or sub.");
                                        m = Math.max(m, o, n.depth + .25 * c.xHeight),
                                            b = Kt.makeVList({
                                                positionType: "shift",
                                                positionData: -m,
                                                children: [{
                                                    type: "elem",
                                                    elem: n,
                                                    marginRight: v
                                                }]
                                            }, e)
                                    }
                                    var z = ye(h, "right") || "mord";
                                    return Kt.makeSpan([z], [h, Kt.makeSpan(["msupsub"], [b])], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r, n = !1;
                                    t.base && "horizBrace" === t.base.type && !!t.sup === t.base.isOver && (n = !0,
                                        r = t.base.isOver),
                                        !t.base || "op" !== t.base.type && "operatorname" !== t.base.type || (t.base.parentIsSupSub = !0);
                                    var i, o = [Ne(t.base, e)];
                                    if (t.sub && o.push(Ne(t.sub, e)),
                                        t.sup && o.push(Ne(t.sup, e)),
                                        n)
                                        i = r ? "mover" : "munder";
                                    else if (t.sub)
                                        if (t.sup) {
                                            var a = t.base;
                                            i = a && "op" === a.type && a.limits && e.style === w.DISPLAY || a && "operatorname" === a.type && a.alwaysHandleSupSub && (e.style === w.DISPLAY || a.limits) ? "munderover" : "msubsup"
                                        } else {
                                            var s = t.base;
                                            i = s && "op" === s.type && s.limits && (e.style === w.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || e.style === w.DISPLAY) ? "munder" : "msub"
                                        }
                                    else {
                                        var l = t.base;
                                        i = l && "op" === l.type && l.limits && (e.style === w.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || e.style === w.DISPLAY) ? "mover" : "msup"
                                    }
                                    return new Te.MathNode(i, o)
                                }
                            }),
                            se({
                                type: "atom",
                                htmlBuilder: function (t, e) {
                                    return Kt.mathsym(t.text, t.mode, e, ["m" + t.family])
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mo", [ze(t.text, t.mode)]);
                                    if ("bin" === t.family) {
                                        var n = _e(t, e);
                                        "bold-italic" === n && r.setAttribute("mathvariant", n)
                                    } else
                                        "punct" === t.family ? r.setAttribute("separator", "true") : "open" !== t.family && "close" !== t.family || r.setAttribute("stretchy", "false");
                                    return r
                                }
                            });
                        var cn = {
                            mi: "italic",
                            mn: "normal",
                            mtext: "normal"
                        };
                        se({
                            type: "mathord",
                            htmlBuilder: function (t, e) {
                                return Kt.makeOrd(t, e, "mathord")
                            },
                            mathmlBuilder: function (t, e) {
                                var r = new Te.MathNode("mi", [ze(t.text, t.mode, e)])
                                    , n = _e(t, e) || "italic";
                                return n !== cn[r.type] && r.setAttribute("mathvariant", n),
                                    r
                            }
                        }),
                            se({
                                type: "textord",
                                htmlBuilder: function (t, e) {
                                    return Kt.makeOrd(t, e, "textord")
                                },
                                mathmlBuilder: function (t, e) {
                                    var r, n = ze(t.text, t.mode, e), i = _e(t, e) || "normal";
                                    return r = "text" === t.mode ? new Te.MathNode("mtext", [n]) : /[0-9]/.test(t.text) ? new Te.MathNode("mn", [n]) : "\\prime" === t.text ? new Te.MathNode("mo", [n]) : new Te.MathNode("mi", [n]),
                                        i !== cn[r.type] && r.setAttribute("mathvariant", i),
                                        r
                                }
                            });
                        var un = {
                            "\\nobreak": "nobreak",
                            "\\allowbreak": "allowbreak"
                        }
                            , mn = {
                                " ": {},
                                "\\ ": {},
                                "~": {
                                    className: "nobreak"
                                },
                                "\\space": {},
                                "\\nobreakspace": {
                                    className: "nobreak"
                                }
                            };
                        se({
                            type: "spacing",
                            htmlBuilder: function (t, e) {
                                if (mn.hasOwnProperty(t.text)) {
                                    var r = mn[t.text].className || "";
                                    if ("text" === t.mode) {
                                        var n = Kt.makeOrd(t, e, "textord");
                                        return n.classes.push(r),
                                            n
                                    }
                                    return Kt.makeSpan(["mspace", r], [Kt.mathsym(t.text, t.mode, e)], e)
                                }
                                if (un.hasOwnProperty(t.text))
                                    return Kt.makeSpan(["mspace", un[t.text]], [], e);
                                throw new a('Unknown type of space "' + t.text + '"')
                            },
                            mathmlBuilder: function (t, e) {
                                if (!mn.hasOwnProperty(t.text)) {
                                    if (un.hasOwnProperty(t.text))
                                        return new Te.MathNode("mspace");
                                    throw new a('Unknown type of space "' + t.text + '"')
                                }
                                return new Te.MathNode("mtext", [new Te.TextNode(" ")])
                            }
                        });
                        var pn = function () {
                            var t = new Te.MathNode("mtd", []);
                            return t.setAttribute("width", "50%"),
                                t
                        };
                        se({
                            type: "tag",
                            mathmlBuilder: function (t, e) {
                                var r = new Te.MathNode("mtable", [new Te.MathNode("mtr", [pn(), new Te.MathNode("mtd", [Ce(t.body, e)]), pn(), new Te.MathNode("mtd", [Ce(t.tag, e)])])]);
                                return r.setAttribute("width", "100%"),
                                    r
                            }
                        });
                        var dn = {
                            "\\text": void 0,
                            "\\textrm": "textrm",
                            "\\textsf": "textsf",
                            "\\texttt": "texttt",
                            "\\textnormal": "textrm"
                        }
                            , fn = {
                                "\\textbf": "textbf",
                                "\\textmd": "textmd"
                            }
                            , gn = {
                                "\\textit": "textit",
                                "\\textup": "textup"
                            }
                            , bn = function (t, e) {
                                var r = t.font;
                                return r ? dn[r] ? e.withTextFontFamily(dn[r]) : fn[r] ? e.withTextFontWeight(fn[r]) : e.withTextFontShape(gn[r]) : e
                            };
                        ae({
                            type: "text",
                            names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"],
                            props: {
                                numArgs: 1,
                                argTypes: ["text"],
                                greediness: 2,
                                allowedInText: !0
                            },
                            handler: function (t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , i = e[0];
                                return {
                                    type: "text",
                                    mode: r.mode,
                                    body: le(i),
                                    font: n
                                }
                            },
                            htmlBuilder: function (t, e) {
                                var r = bn(t, e)
                                    , n = de(t.body, r, !0);
                                return Kt.makeSpan(["mord", "text"], Kt.tryCombineChars(n), r)
                            },
                            mathmlBuilder: function (t, e) {
                                var r = bn(t, e);
                                return Ce(t.body, r)
                            }
                        }),
                            ae({
                                type: "underline",
                                names: ["\\underline"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function (t, e) {
                                    return {
                                        type: "underline",
                                        mode: t.parser.mode,
                                        body: e[0]
                                    }
                                },
                                htmlBuilder: function (t, e) {
                                    var r = xe(t.body, e)
                                        , n = Kt.makeLineSpan("underline-line", e)
                                        , i = e.fontMetrics().defaultRuleThickness
                                        , o = Kt.makeVList({
                                            positionType: "top",
                                            positionData: r.height,
                                            children: [{
                                                type: "kern",
                                                size: i
                                            }, {
                                                type: "elem",
                                                elem: n
                                            }, {
                                                type: "kern",
                                                size: 3 * i
                                            }, {
                                                type: "elem",
                                                elem: r
                                            }]
                                        }, e);
                                    return Kt.makeSpan(["mord", "underline"], [o], e)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.MathNode("mo", [new Te.TextNode("‾")]);
                                    r.setAttribute("stretchy", "true");
                                    var n = new Te.MathNode("munder", [Ne(t.body, e), r]);
                                    return n.setAttribute("accentunder", "true"),
                                        n
                                }
                            }),
                            ae({
                                type: "verb",
                                names: ["\\verb"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function (t, e, r) {
                                    throw new a("\\verb ended by end of line instead of matching delimiter")
                                },
                                htmlBuilder: function (t, e) {
                                    for (var r = yn(t), n = [], i = e.havingStyle(e.style.text()), o = 0; o < r.length; o++) {
                                        var a = r[o];
                                        "~" === a && (a = "\\textasciitilde"),
                                            n.push(Kt.makeSymbol(a, "Typewriter-Regular", t.mode, i, ["mord", "texttt"]))
                                    }
                                    return Kt.makeSpan(["mord", "text"].concat(i.sizingClasses(e)), Kt.tryCombineChars(n), i)
                                },
                                mathmlBuilder: function (t, e) {
                                    var r = new Te.TextNode(yn(t))
                                        , n = new Te.MathNode("mtext", [r]);
                                    return n.setAttribute("mathvariant", "monospace"),
                                        n
                                }
                            });
                        var yn = function (t) {
                            return t.body.replace(/ /g, t.star ? "␣" : " ")
                        }
                            , vn = ne
                            , xn = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$")
                            , wn = new RegExp("[̀-ͯ]+$")
                            , kn = function () {
                                function t(t, e) {
                                    this.input = void 0,
                                        this.settings = void 0,
                                        this.tokenRegex = void 0,
                                        this.catcodes = void 0,
                                        this.input = t,
                                        this.settings = e,
                                        this.tokenRegex = new RegExp("([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])", "g"),
                                        this.catcodes = {
                                            "%": 14
                                        }
                                }
                                var e = t.prototype;
                                return e.setCatcode = function (t, e) {
                                    this.catcodes[t] = e
                                }
                                    ,
                                    e.lex = function () {
                                        var t = this.input
                                            , e = this.tokenRegex.lastIndex;
                                        if (e === t.length)
                                            return new i("EOF", new n(this, e, e));
                                        var r = this.tokenRegex.exec(t);
                                        if (null === r || r.index !== e)
                                            throw new a("Unexpected character: '" + t[e] + "'", new i(t[e], new n(this, e, e + 1)));
                                        var o = r[2] || " ";
                                        if (14 === this.catcodes[o]) {
                                            var s = t.indexOf("\n", this.tokenRegex.lastIndex);
                                            return -1 === s ? (this.tokenRegex.lastIndex = t.length,
                                                this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1,
                                                this.lex()
                                        }
                                        var l = o.match(xn);
                                        return l && (o = l[1]),
                                            new i(o, new n(this, e, this.tokenRegex.lastIndex))
                                    }
                                    ,
                                    t
                            }()
                            , Mn = function () {
                                function t(t, e) {
                                    void 0 === t && (t = {}),
                                        void 0 === e && (e = {}),
                                        this.current = void 0,
                                        this.builtins = void 0,
                                        this.undefStack = void 0,
                                        this.current = e,
                                        this.builtins = t,
                                        this.undefStack = []
                                }
                                var e = t.prototype;
                                return e.beginGroup = function () {
                                    this.undefStack.push({})
                                }
                                    ,
                                    e.endGroup = function () {
                                        if (0 === this.undefStack.length)
                                            throw new a("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                                        var t = this.undefStack.pop();
                                        for (var e in t)
                                            t.hasOwnProperty(e) && (void 0 === t[e] ? delete this.current[e] : this.current[e] = t[e])
                                    }
                                    ,
                                    e.has = function (t) {
                                        return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t)
                                    }
                                    ,
                                    e.get = function (t) {
                                        return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t]
                                    }
                                    ,
                                    e.set = function (t, e, r) {
                                        if (void 0 === r && (r = !1),
                                            r) {
                                            for (var n = 0; n < this.undefStack.length; n++)
                                                delete this.undefStack[n][t];
                                            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = e)
                                        } else {
                                            var i = this.undefStack[this.undefStack.length - 1];
                                            i && !i.hasOwnProperty(t) && (i[t] = this.current[t])
                                        }
                                        this.current[t] = e
                                    }
                                    ,
                                    t
                            }()
                            , Sn = {}
                            , Ln = Sn;
                        function Tn(t, e) {
                            Sn[t] = e
                        }
                        Tn("\\noexpand", (function (t) {
                            var e = t.popToken();
                            return t.isExpandable(e.text) && (e.noexpand = !0,
                                e.treatAsRelax = !0),
                            {
                                tokens: [e],
                                numArgs: 0
                            }
                        }
                        )),
                            Tn("\\expandafter", (function (t) {
                                var e = t.popToken();
                                return t.expandOnce(!0),
                                {
                                    tokens: [e],
                                    numArgs: 0
                                }
                            }
                            )),
                            Tn("\\@firstoftwo", (function (t) {
                                return {
                                    tokens: t.consumeArgs(2)[0],
                                    numArgs: 0
                                }
                            }
                            )),
                            Tn("\\@secondoftwo", (function (t) {
                                return {
                                    tokens: t.consumeArgs(2)[1],
                                    numArgs: 0
                                }
                            }
                            )),
                            Tn("\\@ifnextchar", (function (t) {
                                var e = t.consumeArgs(3);
                                t.consumeSpaces();
                                var r = t.future();
                                return 1 === e[0].length && e[0][0].text === r.text ? {
                                    tokens: e[1],
                                    numArgs: 0
                                } : {
                                    tokens: e[2],
                                    numArgs: 0
                                }
                            }
                            )),
                            Tn("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
                            Tn("\\TextOrMath", (function (t) {
                                var e = t.consumeArgs(2);
                                return "text" === t.mode ? {
                                    tokens: e[0],
                                    numArgs: 0
                                } : {
                                    tokens: e[1],
                                    numArgs: 0
                                }
                            }
                            ));
                        var zn = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                            6: 6,
                            7: 7,
                            8: 8,
                            9: 9,
                            a: 10,
                            A: 10,
                            b: 11,
                            B: 11,
                            c: 12,
                            C: 12,
                            d: 13,
                            D: 13,
                            e: 14,
                            E: 14,
                            f: 15,
                            F: 15
                        };
                        Tn("\\char", (function (t) {
                            var e, r = t.popToken(), n = "";
                            if ("'" === r.text)
                                e = 8,
                                    r = t.popToken();
                            else if ('"' === r.text)
                                e = 16,
                                    r = t.popToken();
                            else if ("`" === r.text)
                                if ("\\" === (r = t.popToken()).text[0])
                                    n = r.text.charCodeAt(1);
                                else {
                                    if ("EOF" === r.text)
                                        throw new a("\\char` missing argument");
                                    n = r.text.charCodeAt(0)
                                }
                            else
                                e = 10;
                            if (e) {
                                if (null == (n = zn[r.text]) || n >= e)
                                    throw new a("Invalid base-" + e + " digit " + r.text);
                                for (var i; null != (i = zn[t.future().text]) && i < e;)
                                    n *= e,
                                        n += i,
                                        t.popToken()
                            }
                            return "\\@char{" + n + "}"
                        }
                        ));
                        var An = function (t, e, r) {
                            var n = t.consumeArgs(1)[0];
                            if (1 !== n.length)
                                throw new a("\\newcommand's first argument must be a macro name");
                            var i = n[0].text
                                , o = t.isDefined(i);
                            if (o && !e)
                                throw new a("\\newcommand{" + i + "} attempting to redefine " + i + "; use \\renewcommand");
                            if (!o && !r)
                                throw new a("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
                            var s = 0;
                            if (1 === (n = t.consumeArgs(1)[0]).length && "[" === n[0].text) {
                                for (var l = "", h = t.expandNextToken(); "]" !== h.text && "EOF" !== h.text;)
                                    l += h.text,
                                        h = t.expandNextToken();
                                if (!l.match(/^\s*[0-9]+\s*$/))
                                    throw new a("Invalid number of arguments: " + l);
                                s = parseInt(l),
                                    n = t.consumeArgs(1)[0]
                            }
                            return t.macros.set(i, {
                                tokens: n,
                                numArgs: s
                            }),
                                ""
                        };
                        Tn("\\newcommand", (function (t) {
                            return An(t, !1, !0)
                        }
                        )),
                            Tn("\\renewcommand", (function (t) {
                                return An(t, !0, !1)
                            }
                            )),
                            Tn("\\providecommand", (function (t) {
                                return An(t, !0, !0)
                            }
                            )),
                            Tn("\\message", (function (t) {
                                var e = t.consumeArgs(1)[0];
                                return console.log(e.reverse().map((function (t) {
                                    return t.text
                                }
                                )).join("")),
                                    ""
                            }
                            )),
                            Tn("\\errmessage", (function (t) {
                                var e = t.consumeArgs(1)[0];
                                return console.error(e.reverse().map((function (t) {
                                    return t.text
                                }
                                )).join("")),
                                    ""
                            }
                            )),
                            Tn("\\show", (function (t) {
                                var e = t.popToken()
                                    , r = e.text;
                                return console.log(e, t.macros.get(r), vn[r], j.math[r], j.text[r]),
                                    ""
                            }
                            )),
                            Tn("\\bgroup", "{"),
                            Tn("\\egroup", "}"),
                            Tn("\\lq", "`"),
                            Tn("\\rq", "'"),
                            Tn("\\aa", "\\r a"),
                            Tn("\\AA", "\\r A"),
                            Tn("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"),
                            Tn("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"),
                            Tn("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),
                            Tn("ℬ", "\\mathscr{B}"),
                            Tn("ℰ", "\\mathscr{E}"),
                            Tn("ℱ", "\\mathscr{F}"),
                            Tn("ℋ", "\\mathscr{H}"),
                            Tn("ℐ", "\\mathscr{I}"),
                            Tn("ℒ", "\\mathscr{L}"),
                            Tn("ℳ", "\\mathscr{M}"),
                            Tn("ℛ", "\\mathscr{R}"),
                            Tn("ℭ", "\\mathfrak{C}"),
                            Tn("ℌ", "\\mathfrak{H}"),
                            Tn("ℨ", "\\mathfrak{Z}"),
                            Tn("\\Bbbk", "\\Bbb{k}"),
                            Tn("·", "\\cdotp"),
                            Tn("\\llap", "\\mathllap{\\textrm{#1}}"),
                            Tn("\\rlap", "\\mathrlap{\\textrm{#1}}"),
                            Tn("\\clap", "\\mathclap{\\textrm{#1}}"),
                            Tn("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'),
                            Tn("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),
                            Tn("\\ne", "\\neq"),
                            Tn("≠", "\\neq"),
                            Tn("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),
                            Tn("∉", "\\notin"),
                            Tn("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),
                            Tn("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),
                            Tn("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),
                            Tn("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),
                            Tn("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),
                            Tn("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),
                            Tn("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),
                            Tn("⟂", "\\perp"),
                            Tn("‼", "\\mathclose{!\\mkern-0.8mu!}"),
                            Tn("∌", "\\notni"),
                            Tn("⌜", "\\ulcorner"),
                            Tn("⌝", "\\urcorner"),
                            Tn("⌞", "\\llcorner"),
                            Tn("⌟", "\\lrcorner"),
                            Tn("©", "\\copyright"),
                            Tn("®", "\\textregistered"),
                            Tn("️", "\\textregistered"),
                            Tn("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'),
                            Tn("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'),
                            Tn("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'),
                            Tn("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'),
                            Tn("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"),
                            Tn("⋮", "\\vdots"),
                            Tn("\\varGamma", "\\mathit{\\Gamma}"),
                            Tn("\\varDelta", "\\mathit{\\Delta}"),
                            Tn("\\varTheta", "\\mathit{\\Theta}"),
                            Tn("\\varLambda", "\\mathit{\\Lambda}"),
                            Tn("\\varXi", "\\mathit{\\Xi}"),
                            Tn("\\varPi", "\\mathit{\\Pi}"),
                            Tn("\\varSigma", "\\mathit{\\Sigma}"),
                            Tn("\\varUpsilon", "\\mathit{\\Upsilon}"),
                            Tn("\\varPhi", "\\mathit{\\Phi}"),
                            Tn("\\varPsi", "\\mathit{\\Psi}"),
                            Tn("\\varOmega", "\\mathit{\\Omega}"),
                            Tn("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"),
                            Tn("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"),
                            Tn("\\boxed", "\\fbox{$\\displaystyle{#1}$}"),
                            Tn("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
                            Tn("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
                            Tn("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
                        var _n = {
                            ",": "\\dotsc",
                            "\\not": "\\dotsb",
                            "+": "\\dotsb",
                            "=": "\\dotsb",
                            "<": "\\dotsb",
                            ">": "\\dotsb",
                            "-": "\\dotsb",
                            "*": "\\dotsb",
                            ":": "\\dotsb",
                            "\\DOTSB": "\\dotsb",
                            "\\coprod": "\\dotsb",
                            "\\bigvee": "\\dotsb",
                            "\\bigwedge": "\\dotsb",
                            "\\biguplus": "\\dotsb",
                            "\\bigcap": "\\dotsb",
                            "\\bigcup": "\\dotsb",
                            "\\prod": "\\dotsb",
                            "\\sum": "\\dotsb",
                            "\\bigotimes": "\\dotsb",
                            "\\bigoplus": "\\dotsb",
                            "\\bigodot": "\\dotsb",
                            "\\bigsqcup": "\\dotsb",
                            "\\And": "\\dotsb",
                            "\\longrightarrow": "\\dotsb",
                            "\\Longrightarrow": "\\dotsb",
                            "\\longleftarrow": "\\dotsb",
                            "\\Longleftarrow": "\\dotsb",
                            "\\longleftrightarrow": "\\dotsb",
                            "\\Longleftrightarrow": "\\dotsb",
                            "\\mapsto": "\\dotsb",
                            "\\longmapsto": "\\dotsb",
                            "\\hookrightarrow": "\\dotsb",
                            "\\doteq": "\\dotsb",
                            "\\mathbin": "\\dotsb",
                            "\\mathrel": "\\dotsb",
                            "\\relbar": "\\dotsb",
                            "\\Relbar": "\\dotsb",
                            "\\xrightarrow": "\\dotsb",
                            "\\xleftarrow": "\\dotsb",
                            "\\DOTSI": "\\dotsi",
                            "\\int": "\\dotsi",
                            "\\oint": "\\dotsi",
                            "\\iint": "\\dotsi",
                            "\\iiint": "\\dotsi",
                            "\\iiiint": "\\dotsi",
                            "\\idotsint": "\\dotsi",
                            "\\DOTSX": "\\dotsx"
                        };
                        Tn("\\dots", (function (t) {
                            var e = "\\dotso"
                                , r = t.expandAfterFuture().text;
                            return r in _n ? e = _n[r] : ("\\not" === r.substr(0, 4) || r in j.math && u.contains(["bin", "rel"], j.math[r].group)) && (e = "\\dotsb"),
                                e
                        }
                        ));
                        var Pn = {
                            ")": !0,
                            "]": !0,
                            "\\rbrack": !0,
                            "\\}": !0,
                            "\\rbrace": !0,
                            "\\rangle": !0,
                            "\\rceil": !0,
                            "\\rfloor": !0,
                            "\\rgroup": !0,
                            "\\rmoustache": !0,
                            "\\right": !0,
                            "\\bigr": !0,
                            "\\biggr": !0,
                            "\\Bigr": !0,
                            "\\Biggr": !0,
                            $: !0,
                            ";": !0,
                            ".": !0,
                            ",": !0
                        };
                        Tn("\\dotso", (function (t) {
                            return t.future().text in Pn ? "\\ldots\\," : "\\ldots"
                        }
                        )),
                            Tn("\\dotsc", (function (t) {
                                var e = t.future().text;
                                return e in Pn && "," !== e ? "\\ldots\\," : "\\ldots"
                            }
                            )),
                            Tn("\\cdots", (function (t) {
                                return t.future().text in Pn ? "\\@cdots\\," : "\\@cdots"
                            }
                            )),
                            Tn("\\dotsb", "\\cdots"),
                            Tn("\\dotsm", "\\cdots"),
                            Tn("\\dotsi", "\\!\\cdots"),
                            Tn("\\dotsx", "\\ldots\\,"),
                            Tn("\\DOTSI", "\\relax"),
                            Tn("\\DOTSB", "\\relax"),
                            Tn("\\DOTSX", "\\relax"),
                            Tn("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),
                            Tn("\\,", "\\tmspace+{3mu}{.1667em}"),
                            Tn("\\thinspace", "\\,"),
                            Tn("\\>", "\\mskip{4mu}"),
                            Tn("\\:", "\\tmspace+{4mu}{.2222em}"),
                            Tn("\\medspace", "\\:"),
                            Tn("\\;", "\\tmspace+{5mu}{.2777em}"),
                            Tn("\\thickspace", "\\;"),
                            Tn("\\!", "\\tmspace-{3mu}{.1667em}"),
                            Tn("\\negthinspace", "\\!"),
                            Tn("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
                            Tn("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
                            Tn("\\enspace", "\\kern.5em "),
                            Tn("\\enskip", "\\hskip.5em\\relax"),
                            Tn("\\quad", "\\hskip1em\\relax"),
                            Tn("\\qquad", "\\hskip2em\\relax"),
                            Tn("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
                            Tn("\\tag@paren", "\\tag@literal{({#1})}"),
                            Tn("\\tag@literal", (function (t) {
                                if (t.macros.get("\\df@tag"))
                                    throw new a("Multiple \\tag");
                                return "\\gdef\\df@tag{\\text{#1}}"
                            }
                            )),
                            Tn("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"),
                            Tn("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"),
                            Tn("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
                            Tn("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"),
                            Tn("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"),
                            Tn("\\\\", "\\newline"),
                            Tn("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
                        var Cn = D["Main-Regular"]["T".charCodeAt(0)][1] - .7 * D["Main-Regular"]["A".charCodeAt(0)][1] + "em";
                        Tn("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + Cn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"),
                            Tn("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + Cn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"),
                            Tn("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
                            Tn("\\@hspace", "\\hskip #1\\relax"),
                            Tn("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
                            Tn("\\ordinarycolon", ":"),
                            Tn("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
                            Tn("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'),
                            Tn("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'),
                            Tn("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'),
                            Tn("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'),
                            Tn("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'),
                            Tn("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'),
                            Tn("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'),
                            Tn("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'),
                            Tn("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'),
                            Tn("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'),
                            Tn("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'),
                            Tn("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'),
                            Tn("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'),
                            Tn("∷", "\\dblcolon"),
                            Tn("∹", "\\eqcolon"),
                            Tn("≔", "\\coloneqq"),
                            Tn("≕", "\\eqqcolon"),
                            Tn("⩴", "\\Coloneqq"),
                            Tn("\\ratio", "\\vcentcolon"),
                            Tn("\\coloncolon", "\\dblcolon"),
                            Tn("\\colonequals", "\\coloneqq"),
                            Tn("\\coloncolonequals", "\\Coloneqq"),
                            Tn("\\equalscolon", "\\eqqcolon"),
                            Tn("\\equalscoloncolon", "\\Eqqcolon"),
                            Tn("\\colonminus", "\\coloneq"),
                            Tn("\\coloncolonminus", "\\Coloneq"),
                            Tn("\\minuscolon", "\\eqcolon"),
                            Tn("\\minuscoloncolon", "\\Eqcolon"),
                            Tn("\\coloncolonapprox", "\\Colonapprox"),
                            Tn("\\coloncolonsim", "\\Colonsim"),
                            Tn("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
                            Tn("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"),
                            Tn("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
                            Tn("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"),
                            Tn("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),
                            Tn("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"),
                            Tn("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"),
                            Tn("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"),
                            Tn("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"),
                            Tn("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"),
                            Tn("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"),
                            Tn("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"),
                            Tn("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"),
                            Tn("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"),
                            Tn("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"),
                            Tn("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"),
                            Tn("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"),
                            Tn("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"),
                            Tn("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"),
                            Tn("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"),
                            Tn("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"),
                            Tn("\\imath", "\\html@mathml{\\@imath}{ı}"),
                            Tn("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"),
                            Tn("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),
                            Tn("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),
                            Tn("⟦", "\\llbracket"),
                            Tn("⟧", "\\rrbracket"),
                            Tn("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),
                            Tn("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),
                            Tn("⦃", "\\lBrace"),
                            Tn("⦄", "\\rBrace"),
                            Tn("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),
                            Tn("⦵", "\\minuso"),
                            Tn("\\darr", "\\downarrow"),
                            Tn("\\dArr", "\\Downarrow"),
                            Tn("\\Darr", "\\Downarrow"),
                            Tn("\\lang", "\\langle"),
                            Tn("\\rang", "\\rangle"),
                            Tn("\\uarr", "\\uparrow"),
                            Tn("\\uArr", "\\Uparrow"),
                            Tn("\\Uarr", "\\Uparrow"),
                            Tn("\\N", "\\mathbb{N}"),
                            Tn("\\R", "\\mathbb{R}"),
                            Tn("\\Z", "\\mathbb{Z}"),
                            Tn("\\alef", "\\aleph"),
                            Tn("\\alefsym", "\\aleph"),
                            Tn("\\Alpha", "\\mathrm{A}"),
                            Tn("\\Beta", "\\mathrm{B}"),
                            Tn("\\bull", "\\bullet"),
                            Tn("\\Chi", "\\mathrm{X}"),
                            Tn("\\clubs", "\\clubsuit"),
                            Tn("\\cnums", "\\mathbb{C}"),
                            Tn("\\Complex", "\\mathbb{C}"),
                            Tn("\\Dagger", "\\ddagger"),
                            Tn("\\diamonds", "\\diamondsuit"),
                            Tn("\\empty", "\\emptyset"),
                            Tn("\\Epsilon", "\\mathrm{E}"),
                            Tn("\\Eta", "\\mathrm{H}"),
                            Tn("\\exist", "\\exists"),
                            Tn("\\harr", "\\leftrightarrow"),
                            Tn("\\hArr", "\\Leftrightarrow"),
                            Tn("\\Harr", "\\Leftrightarrow"),
                            Tn("\\hearts", "\\heartsuit"),
                            Tn("\\image", "\\Im"),
                            Tn("\\infin", "\\infty"),
                            Tn("\\Iota", "\\mathrm{I}"),
                            Tn("\\isin", "\\in"),
                            Tn("\\Kappa", "\\mathrm{K}"),
                            Tn("\\larr", "\\leftarrow"),
                            Tn("\\lArr", "\\Leftarrow"),
                            Tn("\\Larr", "\\Leftarrow"),
                            Tn("\\lrarr", "\\leftrightarrow"),
                            Tn("\\lrArr", "\\Leftrightarrow"),
                            Tn("\\Lrarr", "\\Leftrightarrow"),
                            Tn("\\Mu", "\\mathrm{M}"),
                            Tn("\\natnums", "\\mathbb{N}"),
                            Tn("\\Nu", "\\mathrm{N}"),
                            Tn("\\Omicron", "\\mathrm{O}"),
                            Tn("\\plusmn", "\\pm"),
                            Tn("\\rarr", "\\rightarrow"),
                            Tn("\\rArr", "\\Rightarrow"),
                            Tn("\\Rarr", "\\Rightarrow"),
                            Tn("\\real", "\\Re"),
                            Tn("\\reals", "\\mathbb{R}"),
                            Tn("\\Reals", "\\mathbb{R}"),
                            Tn("\\Rho", "\\mathrm{P}"),
                            Tn("\\sdot", "\\cdot"),
                            Tn("\\sect", "\\S"),
                            Tn("\\spades", "\\spadesuit"),
                            Tn("\\sub", "\\subset"),
                            Tn("\\sube", "\\subseteq"),
                            Tn("\\supe", "\\supseteq"),
                            Tn("\\Tau", "\\mathrm{T}"),
                            Tn("\\thetasym", "\\vartheta"),
                            Tn("\\weierp", "\\wp"),
                            Tn("\\Zeta", "\\mathrm{Z}"),
                            Tn("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"),
                            Tn("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"),
                            Tn("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"),
                            Tn("\\bra", "\\mathinner{\\langle{#1}|}"),
                            Tn("\\ket", "\\mathinner{|{#1}\\rangle}"),
                            Tn("\\braket", "\\mathinner{\\langle{#1}\\rangle}"),
                            Tn("\\Bra", "\\left\\langle#1\\right|"),
                            Tn("\\Ket", "\\left|#1\\right\\rangle"),
                            Tn("\\blue", "\\textcolor{##6495ed}{#1}"),
                            Tn("\\orange", "\\textcolor{##ffa500}{#1}"),
                            Tn("\\pink", "\\textcolor{##ff00af}{#1}"),
                            Tn("\\red", "\\textcolor{##df0030}{#1}"),
                            Tn("\\green", "\\textcolor{##28ae7b}{#1}"),
                            Tn("\\gray", "\\textcolor{gray}{#1}"),
                            Tn("\\purple", "\\textcolor{##9d38bd}{#1}"),
                            Tn("\\blueA", "\\textcolor{##ccfaff}{#1}"),
                            Tn("\\blueB", "\\textcolor{##80f6ff}{#1}"),
                            Tn("\\blueC", "\\textcolor{##63d9ea}{#1}"),
                            Tn("\\blueD", "\\textcolor{##11accd}{#1}"),
                            Tn("\\blueE", "\\textcolor{##0c7f99}{#1}"),
                            Tn("\\tealA", "\\textcolor{##94fff5}{#1}"),
                            Tn("\\tealB", "\\textcolor{##26edd5}{#1}"),
                            Tn("\\tealC", "\\textcolor{##01d1c1}{#1}"),
                            Tn("\\tealD", "\\textcolor{##01a995}{#1}"),
                            Tn("\\tealE", "\\textcolor{##208170}{#1}"),
                            Tn("\\greenA", "\\textcolor{##b6ffb0}{#1}"),
                            Tn("\\greenB", "\\textcolor{##8af281}{#1}"),
                            Tn("\\greenC", "\\textcolor{##74cf70}{#1}"),
                            Tn("\\greenD", "\\textcolor{##1fab54}{#1}"),
                            Tn("\\greenE", "\\textcolor{##0d923f}{#1}"),
                            Tn("\\goldA", "\\textcolor{##ffd0a9}{#1}"),
                            Tn("\\goldB", "\\textcolor{##ffbb71}{#1}"),
                            Tn("\\goldC", "\\textcolor{##ff9c39}{#1}"),
                            Tn("\\goldD", "\\textcolor{##e07d10}{#1}"),
                            Tn("\\goldE", "\\textcolor{##a75a05}{#1}"),
                            Tn("\\redA", "\\textcolor{##fca9a9}{#1}"),
                            Tn("\\redB", "\\textcolor{##ff8482}{#1}"),
                            Tn("\\redC", "\\textcolor{##f9685d}{#1}"),
                            Tn("\\redD", "\\textcolor{##e84d39}{#1}"),
                            Tn("\\redE", "\\textcolor{##bc2612}{#1}"),
                            Tn("\\maroonA", "\\textcolor{##ffbde0}{#1}"),
                            Tn("\\maroonB", "\\textcolor{##ff92c6}{#1}"),
                            Tn("\\maroonC", "\\textcolor{##ed5fa6}{#1}"),
                            Tn("\\maroonD", "\\textcolor{##ca337c}{#1}"),
                            Tn("\\maroonE", "\\textcolor{##9e034e}{#1}"),
                            Tn("\\purpleA", "\\textcolor{##ddd7ff}{#1}"),
                            Tn("\\purpleB", "\\textcolor{##c6b9fc}{#1}"),
                            Tn("\\purpleC", "\\textcolor{##aa87ff}{#1}"),
                            Tn("\\purpleD", "\\textcolor{##7854ab}{#1}"),
                            Tn("\\purpleE", "\\textcolor{##543b78}{#1}"),
                            Tn("\\mintA", "\\textcolor{##f5f9e8}{#1}"),
                            Tn("\\mintB", "\\textcolor{##edf2df}{#1}"),
                            Tn("\\mintC", "\\textcolor{##e0e5cc}{#1}"),
                            Tn("\\grayA", "\\textcolor{##f6f7f7}{#1}"),
                            Tn("\\grayB", "\\textcolor{##f0f1f2}{#1}"),
                            Tn("\\grayC", "\\textcolor{##e3e5e6}{#1}"),
                            Tn("\\grayD", "\\textcolor{##d6d8da}{#1}"),
                            Tn("\\grayE", "\\textcolor{##babec2}{#1}"),
                            Tn("\\grayF", "\\textcolor{##888d93}{#1}"),
                            Tn("\\grayG", "\\textcolor{##626569}{#1}"),
                            Tn("\\grayH", "\\textcolor{##3b3e40}{#1}"),
                            Tn("\\grayI", "\\textcolor{##21242c}{#1}"),
                            Tn("\\kaBlue", "\\textcolor{##314453}{#1}"),
                            Tn("\\kaGreen", "\\textcolor{##71B307}{#1}");
                        var Nn = {
                            "\\relax": !0,
                            "^": !0,
                            _: !0,
                            "\\limits": !0,
                            "\\nolimits": !0
                        }
                            , $n = function () {
                                function t(t, e, r) {
                                    this.settings = void 0,
                                        this.expansionCount = void 0,
                                        this.lexer = void 0,
                                        this.macros = void 0,
                                        this.stack = void 0,
                                        this.mode = void 0,
                                        this.settings = e,
                                        this.expansionCount = 0,
                                        this.feed(t),
                                        this.macros = new Mn(Ln, e.macros),
                                        this.mode = r,
                                        this.stack = []
                                }
                                var e = t.prototype;
                                return e.feed = function (t) {
                                    this.lexer = new kn(t, this.settings)
                                }
                                    ,
                                    e.switchMode = function (t) {
                                        this.mode = t
                                    }
                                    ,
                                    e.beginGroup = function () {
                                        this.macros.beginGroup()
                                    }
                                    ,
                                    e.endGroup = function () {
                                        this.macros.endGroup()
                                    }
                                    ,
                                    e.future = function () {
                                        return 0 === this.stack.length && this.pushToken(this.lexer.lex()),
                                            this.stack[this.stack.length - 1]
                                    }
                                    ,
                                    e.popToken = function () {
                                        return this.future(),
                                            this.stack.pop()
                                    }
                                    ,
                                    e.pushToken = function (t) {
                                        this.stack.push(t)
                                    }
                                    ,
                                    e.pushTokens = function (t) {
                                        var e;
                                        (e = this.stack).push.apply(e, t)
                                    }
                                    ,
                                    e.consumeSpaces = function () {
                                        for (; " " === this.future().text;)
                                            this.stack.pop()
                                    }
                                    ,
                                    e.consumeArgs = function (t) {
                                        for (var e = [], r = 0; r < t; ++r) {
                                            this.consumeSpaces();
                                            var n = this.popToken();
                                            if ("{" === n.text) {
                                                for (var i = [], o = 1; 0 !== o;) {
                                                    var s = this.popToken();
                                                    if (i.push(s),
                                                        "{" === s.text)
                                                        ++o;
                                                    else if ("}" === s.text)
                                                        --o;
                                                    else if ("EOF" === s.text)
                                                        throw new a("End of input in macro argument", n)
                                                }
                                                i.pop(),
                                                    i.reverse(),
                                                    e[r] = i
                                            } else {
                                                if ("EOF" === n.text)
                                                    throw new a("End of input expecting macro argument");
                                                e[r] = [n]
                                            }
                                        }
                                        return e
                                    }
                                    ,
                                    e.expandOnce = function (t) {
                                        var e = this.popToken()
                                            , r = e.text
                                            , n = e.noexpand ? null : this._getExpansion(r);
                                        if (null == n || t && n.unexpandable) {
                                            if (t && null == n && "\\" === r[0] && !this.isDefined(r))
                                                throw new a("Undefined control sequence: " + r);
                                            return this.pushToken(e),
                                                e
                                        }
                                        if (this.expansionCount++,
                                            this.expansionCount > this.settings.maxExpand)
                                            throw new a("Too many expansions: infinite loop or need to increase maxExpand setting");
                                        var i = n.tokens;
                                        if (n.numArgs)
                                            for (var o = this.consumeArgs(n.numArgs), s = (i = i.slice()).length - 1; s >= 0; --s) {
                                                var l = i[s];
                                                if ("#" === l.text) {
                                                    if (0 === s)
                                                        throw new a("Incomplete placeholder at end of macro body", l);
                                                    if ("#" === (l = i[--s]).text)
                                                        i.splice(s + 1, 1);
                                                    else {
                                                        if (!/^[1-9]$/.test(l.text))
                                                            throw new a("Not a valid argument number", l);
                                                        var h;
                                                        (h = i).splice.apply(h, [s, 2].concat(o[+l.text - 1]))
                                                    }
                                                }
                                            }
                                        return this.pushTokens(i),
                                            i
                                    }
                                    ,
                                    e.expandAfterFuture = function () {
                                        return this.expandOnce(),
                                            this.future()
                                    }
                                    ,
                                    e.expandNextToken = function () {
                                        for (; ;) {
                                            var t = this.expandOnce();
                                            if (t instanceof i) {
                                                if ("\\relax" !== t.text && !t.treatAsRelax)
                                                    return this.stack.pop();
                                                this.stack.pop()
                                            }
                                        }
                                        throw new Error
                                    }
                                    ,
                                    e.expandMacro = function (t) {
                                        return this.macros.has(t) ? this.expandTokens([new i(t)]) : void 0
                                    }
                                    ,
                                    e.expandTokens = function (t) {
                                        var e = []
                                            , r = this.stack.length;
                                        for (this.pushTokens(t); this.stack.length > r;) {
                                            var n = this.expandOnce(!0);
                                            n instanceof i && (n.treatAsRelax && (n.noexpand = !1,
                                                n.treatAsRelax = !1),
                                                e.push(this.stack.pop()))
                                        }
                                        return e
                                    }
                                    ,
                                    e.expandMacroAsText = function (t) {
                                        var e = this.expandMacro(t);
                                        return e ? e.map((function (t) {
                                            return t.text
                                        }
                                        )).join("") : e
                                    }
                                    ,
                                    e._getExpansion = function (t) {
                                        var e = this.macros.get(t);
                                        if (null == e)
                                            return e;
                                        var r = "function" == typeof e ? e(this) : e;
                                        if ("string" == typeof r) {
                                            var n = 0;
                                            if (-1 !== r.indexOf("#"))
                                                for (var i = r.replace(/##/g, ""); -1 !== i.indexOf("#" + (n + 1));)
                                                    ++n;
                                            for (var o = new kn(r, this.settings), a = [], s = o.lex(); "EOF" !== s.text;)
                                                a.push(s),
                                                    s = o.lex();
                                            return a.reverse(),
                                            {
                                                tokens: a,
                                                numArgs: n
                                            }
                                        }
                                        return r
                                    }
                                    ,
                                    e.isDefined = function (t) {
                                        return this.macros.has(t) || vn.hasOwnProperty(t) || j.math.hasOwnProperty(t) || j.text.hasOwnProperty(t) || Nn.hasOwnProperty(t)
                                    }
                                    ,
                                    e.isExpandable = function (t) {
                                        var e = this.macros.get(t);
                                        return null != e ? "string" == typeof e || "function" == typeof e || !e.unexpandable : vn.hasOwnProperty(t)
                                    }
                                    ,
                                    t
                            }()
                            , Bn = {
                                "́": {
                                    text: "\\'",
                                    math: "\\acute"
                                },
                                "̀": {
                                    text: "\\`",
                                    math: "\\grave"
                                },
                                "̈": {
                                    text: '\\"',
                                    math: "\\ddot"
                                },
                                "̃": {
                                    text: "\\~",
                                    math: "\\tilde"
                                },
                                "̄": {
                                    text: "\\=",
                                    math: "\\bar"
                                },
                                "̆": {
                                    text: "\\u",
                                    math: "\\breve"
                                },
                                "̌": {
                                    text: "\\v",
                                    math: "\\check"
                                },
                                "̂": {
                                    text: "\\^",
                                    math: "\\hat"
                                },
                                "̇": {
                                    text: "\\.",
                                    math: "\\dot"
                                },
                                "̊": {
                                    text: "\\r",
                                    math: "\\mathring"
                                },
                                "̋": {
                                    text: "\\H"
                                }
                            }
                            , qn = {
                                "á": "á",
                                "à": "à",
                                "ä": "ä",
                                "ǟ": "ǟ",
                                "ã": "ã",
                                "ā": "ā",
                                "ă": "ă",
                                "ắ": "ắ",
                                "ằ": "ằ",
                                "ẵ": "ẵ",
                                "ǎ": "ǎ",
                                "â": "â",
                                "ấ": "ấ",
                                "ầ": "ầ",
                                "ẫ": "ẫ",
                                "ȧ": "ȧ",
                                "ǡ": "ǡ",
                                "å": "å",
                                "ǻ": "ǻ",
                                "ḃ": "ḃ",
                                "ć": "ć",
                                "č": "č",
                                "ĉ": "ĉ",
                                "ċ": "ċ",
                                "ď": "ď",
                                "ḋ": "ḋ",
                                "é": "é",
                                "è": "è",
                                "ë": "ë",
                                "ẽ": "ẽ",
                                "ē": "ē",
                                "ḗ": "ḗ",
                                "ḕ": "ḕ",
                                "ĕ": "ĕ",
                                "ě": "ě",
                                "ê": "ê",
                                "ế": "ế",
                                "ề": "ề",
                                "ễ": "ễ",
                                "ė": "ė",
                                "ḟ": "ḟ",
                                "ǵ": "ǵ",
                                "ḡ": "ḡ",
                                "ğ": "ğ",
                                "ǧ": "ǧ",
                                "ĝ": "ĝ",
                                "ġ": "ġ",
                                "ḧ": "ḧ",
                                "ȟ": "ȟ",
                                "ĥ": "ĥ",
                                "ḣ": "ḣ",
                                "í": "í",
                                "ì": "ì",
                                "ï": "ï",
                                "ḯ": "ḯ",
                                "ĩ": "ĩ",
                                "ī": "ī",
                                "ĭ": "ĭ",
                                "ǐ": "ǐ",
                                "î": "î",
                                "ǰ": "ǰ",
                                "ĵ": "ĵ",
                                "ḱ": "ḱ",
                                "ǩ": "ǩ",
                                "ĺ": "ĺ",
                                "ľ": "ľ",
                                "ḿ": "ḿ",
                                "ṁ": "ṁ",
                                "ń": "ń",
                                "ǹ": "ǹ",
                                "ñ": "ñ",
                                "ň": "ň",
                                "ṅ": "ṅ",
                                "ó": "ó",
                                "ò": "ò",
                                "ö": "ö",
                                "ȫ": "ȫ",
                                "õ": "õ",
                                "ṍ": "ṍ",
                                "ṏ": "ṏ",
                                "ȭ": "ȭ",
                                "ō": "ō",
                                "ṓ": "ṓ",
                                "ṑ": "ṑ",
                                "ŏ": "ŏ",
                                "ǒ": "ǒ",
                                "ô": "ô",
                                "ố": "ố",
                                "ồ": "ồ",
                                "ỗ": "ỗ",
                                "ȯ": "ȯ",
                                "ȱ": "ȱ",
                                "ő": "ő",
                                "ṕ": "ṕ",
                                "ṗ": "ṗ",
                                "ŕ": "ŕ",
                                "ř": "ř",
                                "ṙ": "ṙ",
                                "ś": "ś",
                                "ṥ": "ṥ",
                                "š": "š",
                                "ṧ": "ṧ",
                                "ŝ": "ŝ",
                                "ṡ": "ṡ",
                                "ẗ": "ẗ",
                                "ť": "ť",
                                "ṫ": "ṫ",
                                "ú": "ú",
                                "ù": "ù",
                                "ü": "ü",
                                "ǘ": "ǘ",
                                "ǜ": "ǜ",
                                "ǖ": "ǖ",
                                "ǚ": "ǚ",
                                "ũ": "ũ",
                                "ṹ": "ṹ",
                                "ū": "ū",
                                "ṻ": "ṻ",
                                "ŭ": "ŭ",
                                "ǔ": "ǔ",
                                "û": "û",
                                "ů": "ů",
                                "ű": "ű",
                                "ṽ": "ṽ",
                                "ẃ": "ẃ",
                                "ẁ": "ẁ",
                                "ẅ": "ẅ",
                                "ŵ": "ŵ",
                                "ẇ": "ẇ",
                                "ẘ": "ẘ",
                                "ẍ": "ẍ",
                                "ẋ": "ẋ",
                                "ý": "ý",
                                "ỳ": "ỳ",
                                "ÿ": "ÿ",
                                "ỹ": "ỹ",
                                "ȳ": "ȳ",
                                "ŷ": "ŷ",
                                "ẏ": "ẏ",
                                "ẙ": "ẙ",
                                "ź": "ź",
                                "ž": "ž",
                                "ẑ": "ẑ",
                                "ż": "ż",
                                "Á": "Á",
                                "À": "À",
                                "Ä": "Ä",
                                "Ǟ": "Ǟ",
                                "Ã": "Ã",
                                "Ā": "Ā",
                                "Ă": "Ă",
                                "Ắ": "Ắ",
                                "Ằ": "Ằ",
                                "Ẵ": "Ẵ",
                                "Ǎ": "Ǎ",
                                "Â": "Â",
                                "Ấ": "Ấ",
                                "Ầ": "Ầ",
                                "Ẫ": "Ẫ",
                                "Ȧ": "Ȧ",
                                "Ǡ": "Ǡ",
                                "Å": "Å",
                                "Ǻ": "Ǻ",
                                "Ḃ": "Ḃ",
                                "Ć": "Ć",
                                "Č": "Č",
                                "Ĉ": "Ĉ",
                                "Ċ": "Ċ",
                                "Ď": "Ď",
                                "Ḋ": "Ḋ",
                                "É": "É",
                                "È": "È",
                                "Ë": "Ë",
                                "Ẽ": "Ẽ",
                                "Ē": "Ē",
                                "Ḗ": "Ḗ",
                                "Ḕ": "Ḕ",
                                "Ĕ": "Ĕ",
                                "Ě": "Ě",
                                "Ê": "Ê",
                                "Ế": "Ế",
                                "Ề": "Ề",
                                "Ễ": "Ễ",
                                "Ė": "Ė",
                                "Ḟ": "Ḟ",
                                "Ǵ": "Ǵ",
                                "Ḡ": "Ḡ",
                                "Ğ": "Ğ",
                                "Ǧ": "Ǧ",
                                "Ĝ": "Ĝ",
                                "Ġ": "Ġ",
                                "Ḧ": "Ḧ",
                                "Ȟ": "Ȟ",
                                "Ĥ": "Ĥ",
                                "Ḣ": "Ḣ",
                                "Í": "Í",
                                "Ì": "Ì",
                                "Ï": "Ï",
                                "Ḯ": "Ḯ",
                                "Ĩ": "Ĩ",
                                "Ī": "Ī",
                                "Ĭ": "Ĭ",
                                "Ǐ": "Ǐ",
                                "Î": "Î",
                                "İ": "İ",
                                "Ĵ": "Ĵ",
                                "Ḱ": "Ḱ",
                                "Ǩ": "Ǩ",
                                "Ĺ": "Ĺ",
                                "Ľ": "Ľ",
                                "Ḿ": "Ḿ",
                                "Ṁ": "Ṁ",
                                "Ń": "Ń",
                                "Ǹ": "Ǹ",
                                "Ñ": "Ñ",
                                "Ň": "Ň",
                                "Ṅ": "Ṅ",
                                "Ó": "Ó",
                                "Ò": "Ò",
                                "Ö": "Ö",
                                "Ȫ": "Ȫ",
                                "Õ": "Õ",
                                "Ṍ": "Ṍ",
                                "Ṏ": "Ṏ",
                                "Ȭ": "Ȭ",
                                "Ō": "Ō",
                                "Ṓ": "Ṓ",
                                "Ṑ": "Ṑ",
                                "Ŏ": "Ŏ",
                                "Ǒ": "Ǒ",
                                "Ô": "Ô",
                                "Ố": "Ố",
                                "Ồ": "Ồ",
                                "Ỗ": "Ỗ",
                                "Ȯ": "Ȯ",
                                "Ȱ": "Ȱ",
                                "Ő": "Ő",
                                "Ṕ": "Ṕ",
                                "Ṗ": "Ṗ",
                                "Ŕ": "Ŕ",
                                "Ř": "Ř",
                                "Ṙ": "Ṙ",
                                "Ś": "Ś",
                                "Ṥ": "Ṥ",
                                "Š": "Š",
                                "Ṧ": "Ṧ",
                                "Ŝ": "Ŝ",
                                "Ṡ": "Ṡ",
                                "Ť": "Ť",
                                "Ṫ": "Ṫ",
                                "Ú": "Ú",
                                "Ù": "Ù",
                                "Ü": "Ü",
                                "Ǘ": "Ǘ",
                                "Ǜ": "Ǜ",
                                "Ǖ": "Ǖ",
                                "Ǚ": "Ǚ",
                                "Ũ": "Ũ",
                                "Ṹ": "Ṹ",
                                "Ū": "Ū",
                                "Ṻ": "Ṻ",
                                "Ŭ": "Ŭ",
                                "Ǔ": "Ǔ",
                                "Û": "Û",
                                "Ů": "Ů",
                                "Ű": "Ű",
                                "Ṽ": "Ṽ",
                                "Ẃ": "Ẃ",
                                "Ẁ": "Ẁ",
                                "Ẅ": "Ẅ",
                                "Ŵ": "Ŵ",
                                "Ẇ": "Ẇ",
                                "Ẍ": "Ẍ",
                                "Ẋ": "Ẋ",
                                "Ý": "Ý",
                                "Ỳ": "Ỳ",
                                "Ÿ": "Ÿ",
                                "Ỹ": "Ỹ",
                                "Ȳ": "Ȳ",
                                "Ŷ": "Ŷ",
                                "Ẏ": "Ẏ",
                                "Ź": "Ź",
                                "Ž": "Ž",
                                "Ẑ": "Ẑ",
                                "Ż": "Ż",
                                "ά": "ά",
                                "ὰ": "ὰ",
                                "ᾱ": "ᾱ",
                                "ᾰ": "ᾰ",
                                "έ": "έ",
                                "ὲ": "ὲ",
                                "ή": "ή",
                                "ὴ": "ὴ",
                                "ί": "ί",
                                "ὶ": "ὶ",
                                "ϊ": "ϊ",
                                "ΐ": "ΐ",
                                "ῒ": "ῒ",
                                "ῑ": "ῑ",
                                "ῐ": "ῐ",
                                "ό": "ό",
                                "ὸ": "ὸ",
                                "ύ": "ύ",
                                "ὺ": "ὺ",
                                "ϋ": "ϋ",
                                "ΰ": "ΰ",
                                "ῢ": "ῢ",
                                "ῡ": "ῡ",
                                "ῠ": "ῠ",
                                "ώ": "ώ",
                                "ὼ": "ὼ",
                                "Ύ": "Ύ",
                                "Ὺ": "Ὺ",
                                "Ϋ": "Ϋ",
                                "Ῡ": "Ῡ",
                                "Ῠ": "Ῠ",
                                "Ώ": "Ώ",
                                "Ὼ": "Ὼ"
                            }
                            , En = function () {
                                function t(t, e) {
                                    this.mode = void 0,
                                        this.gullet = void 0,
                                        this.settings = void 0,
                                        this.leftrightDepth = void 0,
                                        this.nextToken = void 0,
                                        this.mode = "math",
                                        this.gullet = new $n(t, e, this.mode),
                                        this.settings = e,
                                        this.leftrightDepth = 0
                                }
                                var e = t.prototype;
                                return e.expect = function (t, e) {
                                    if (void 0 === e && (e = !0),
                                        this.fetch().text !== t)
                                        throw new a("Expected '" + t + "', got '" + this.fetch().text + "'", this.fetch());
                                    e && this.consume()
                                }
                                    ,
                                    e.consume = function () {
                                        this.nextToken = null
                                    }
                                    ,
                                    e.fetch = function () {
                                        return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()),
                                            this.nextToken
                                    }
                                    ,
                                    e.switchMode = function (t) {
                                        this.mode = t,
                                            this.gullet.switchMode(t)
                                    }
                                    ,
                                    e.parse = function () {
                                        this.settings.globalGroup || this.gullet.beginGroup(),
                                            this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
                                        var t = this.parseExpression(!1);
                                        return this.expect("EOF"),
                                            this.settings.globalGroup || this.gullet.endGroup(),
                                            t
                                    }
                                    ,
                                    e.parseExpression = function (e, r) {
                                        for (var n = []; ;) {
                                            "math" === this.mode && this.consumeSpaces();
                                            var i = this.fetch();
                                            if (-1 !== t.endOfExpression.indexOf(i.text))
                                                break;
                                            if (r && i.text === r)
                                                break;
                                            if (e && vn[i.text] && vn[i.text].infix)
                                                break;
                                            var o = this.parseAtom(r);
                                            if (!o)
                                                break;
                                            "internal" !== o.type && n.push(o)
                                        }
                                        return "text" === this.mode && this.formLigatures(n),
                                            this.handleInfixNodes(n)
                                    }
                                    ,
                                    e.handleInfixNodes = function (t) {
                                        for (var e, r = -1, n = 0; n < t.length; n++)
                                            if ("infix" === t[n].type) {
                                                if (-1 !== r)
                                                    throw new a("only one infix operator per group", t[n].token);
                                                r = n,
                                                    e = t[n].replaceWith
                                            }
                                        if (-1 !== r && e) {
                                            var i, o, s = t.slice(0, r), l = t.slice(r + 1);
                                            return i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : {
                                                type: "ordgroup",
                                                mode: this.mode,
                                                body: s
                                            },
                                                o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                                                    type: "ordgroup",
                                                    mode: this.mode,
                                                    body: l
                                                },
                                                ["\\\\abovefrac" === e ? this.callFunction(e, [i, t[r], o], []) : this.callFunction(e, [i, o], [])]
                                        }
                                        return t
                                    }
                                    ,
                                    e.handleSupSubscript = function (e) {
                                        var r = this.fetch()
                                            , n = r.text;
                                        this.consume();
                                        var i = this.parseGroup(e, !1, t.SUPSUB_GREEDINESS, void 0, void 0, !0);
                                        if (!i)
                                            throw new a("Expected group after '" + n + "'", r);
                                        return i
                                    }
                                    ,
                                    e.formatUnsupportedCmd = function (t) {
                                        for (var e = [], r = 0; r < t.length; r++)
                                            e.push({
                                                type: "textord",
                                                mode: "text",
                                                text: t[r]
                                            });
                                        var n = {
                                            type: "text",
                                            mode: this.mode,
                                            body: e
                                        };
                                        return {
                                            type: "color",
                                            mode: this.mode,
                                            color: this.settings.errorColor,
                                            body: [n]
                                        }
                                    }
                                    ,
                                    e.parseAtom = function (t) {
                                        var e, r, n = this.parseGroup("atom", !1, null, t);
                                        if ("text" === this.mode)
                                            return n;
                                        for (; ;) {
                                            this.consumeSpaces();
                                            var i = this.fetch();
                                            if ("\\limits" === i.text || "\\nolimits" === i.text) {
                                                if (n && "op" === n.type) {
                                                    var o = "\\limits" === i.text;
                                                    n.limits = o,
                                                        n.alwaysHandleSupSub = !0
                                                } else {
                                                    if (!n || "operatorname" !== n.type || !n.alwaysHandleSupSub)
                                                        throw new a("Limit controls must follow a math operator", i);
                                                    var s = "\\limits" === i.text;
                                                    n.limits = s
                                                }
                                                this.consume()
                                            } else if ("^" === i.text) {
                                                if (e)
                                                    throw new a("Double superscript", i);
                                                e = this.handleSupSubscript("superscript")
                                            } else if ("_" === i.text) {
                                                if (r)
                                                    throw new a("Double subscript", i);
                                                r = this.handleSupSubscript("subscript")
                                            } else {
                                                if ("'" !== i.text)
                                                    break;
                                                if (e)
                                                    throw new a("Double superscript", i);
                                                var l = {
                                                    type: "textord",
                                                    mode: this.mode,
                                                    text: "\\prime"
                                                }
                                                    , h = [l];
                                                for (this.consume(); "'" === this.fetch().text;)
                                                    h.push(l),
                                                        this.consume();
                                                "^" === this.fetch().text && h.push(this.handleSupSubscript("superscript")),
                                                    e = {
                                                        type: "ordgroup",
                                                        mode: this.mode,
                                                        body: h
                                                    }
                                            }
                                        }
                                        return e || r ? {
                                            type: "supsub",
                                            mode: this.mode,
                                            base: n,
                                            sup: e,
                                            sub: r
                                        } : n
                                    }
                                    ,
                                    e.parseFunction = function (t, e, r) {
                                        var n = this.fetch()
                                            , i = n.text
                                            , o = vn[i];
                                        if (!o)
                                            return null;
                                        if (this.consume(),
                                            null != r && o.greediness <= r)
                                            throw new a("Got function '" + i + "' with no arguments" + (e ? " as " + e : ""), n);
                                        if ("text" === this.mode && !o.allowedInText)
                                            throw new a("Can't use function '" + i + "' in text mode", n);
                                        if ("math" === this.mode && !1 === o.allowedInMath)
                                            throw new a("Can't use function '" + i + "' in math mode", n);
                                        var s = this.parseArguments(i, o)
                                            , l = s.args
                                            , h = s.optArgs;
                                        return this.callFunction(i, l, h, n, t)
                                    }
                                    ,
                                    e.callFunction = function (t, e, r, n, i) {
                                        var o = {
                                            funcName: t,
                                            parser: this,
                                            token: n,
                                            breakOnTokenText: i
                                        }
                                            , s = vn[t];
                                        if (s && s.handler)
                                            return s.handler(o, e, r);
                                        throw new a("No function handler for " + t)
                                    }
                                    ,
                                    e.parseArguments = function (t, e) {
                                        var r = e.numArgs + e.numOptionalArgs;
                                        if (0 === r)
                                            return {
                                                args: [],
                                                optArgs: []
                                            };
                                        for (var n = e.greediness, i = [], o = [], s = 0; s < r; s++) {
                                            var l = e.argTypes && e.argTypes[s]
                                                , h = s < e.numOptionalArgs
                                                , c = s > 0 && !h || 0 === s && !h && "math" === this.mode
                                                , u = this.parseGroupOfType("argument to '" + t + "'", l, h, n, c);
                                            if (!u) {
                                                if (h) {
                                                    o.push(null);
                                                    continue
                                                }
                                                throw new a("Expected group after '" + t + "'", this.fetch())
                                            }
                                            (h ? o : i).push(u)
                                        }
                                        return {
                                            args: i,
                                            optArgs: o
                                        }
                                    }
                                    ,
                                    e.parseGroupOfType = function (t, e, r, n, i) {
                                        switch (e) {
                                            case "color":
                                                return i && this.consumeSpaces(),
                                                    this.parseColorGroup(r);
                                            case "size":
                                                return i && this.consumeSpaces(),
                                                    this.parseSizeGroup(r);
                                            case "url":
                                                return this.parseUrlGroup(r, i);
                                            case "math":
                                            case "text":
                                                return this.parseGroup(t, r, n, void 0, e, i);
                                            case "hbox":
                                                var o = this.parseGroup(t, r, n, void 0, "text", i);
                                                return o ? {
                                                    type: "styling",
                                                    mode: o.mode,
                                                    body: [o],
                                                    style: "text"
                                                } : o;
                                            case "raw":
                                                if (i && this.consumeSpaces(),
                                                    r && "{" === this.fetch().text)
                                                    return null;
                                                var s = this.parseStringGroup("raw", r, !0);
                                                if (s)
                                                    return {
                                                        type: "raw",
                                                        mode: "text",
                                                        string: s.text
                                                    };
                                                throw new a("Expected raw group", this.fetch());
                                            case "original":
                                            case null:
                                            case void 0:
                                                return this.parseGroup(t, r, n, void 0, void 0, i);
                                            default:
                                                throw new a("Unknown group type as " + t, this.fetch())
                                        }
                                    }
                                    ,
                                    e.consumeSpaces = function () {
                                        for (; " " === this.fetch().text;)
                                            this.consume()
                                    }
                                    ,
                                    e.parseStringGroup = function (t, e, r) {
                                        var n = e ? "[" : "{"
                                            , i = e ? "]" : "}"
                                            , o = this.fetch();
                                        if (o.text !== n) {
                                            if (e)
                                                return null;
                                            if (r && "EOF" !== o.text && /[^{}[\]]/.test(o.text))
                                                return this.consume(),
                                                    o
                                        }
                                        var s = this.mode;
                                        this.mode = "text",
                                            this.expect(n);
                                        for (var l, h = "", c = this.fetch(), u = 0, m = c; (l = this.fetch()).text !== i || r && u > 0;) {
                                            switch (l.text) {
                                                case "EOF":
                                                    throw new a("Unexpected end of input in " + t, c.range(m, h));
                                                case n:
                                                    u++;
                                                    break;
                                                case i:
                                                    u--
                                            }
                                            h += (m = l).text,
                                                this.consume()
                                        }
                                        return this.expect(i),
                                            this.mode = s,
                                            c.range(m, h)
                                    }
                                    ,
                                    e.parseRegexGroup = function (t, e) {
                                        var r = this.mode;
                                        this.mode = "text";
                                        for (var n, i = this.fetch(), o = i, s = ""; "EOF" !== (n = this.fetch()).text && t.test(s + n.text);)
                                            s += (o = n).text,
                                                this.consume();
                                        if ("" === s)
                                            throw new a("Invalid " + e + ": '" + i.text + "'", i);
                                        return this.mode = r,
                                            i.range(o, s)
                                    }
                                    ,
                                    e.parseColorGroup = function (t) {
                                        var e = this.parseStringGroup("color", t);
                                        if (!e)
                                            return null;
                                        var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(e.text);
                                        if (!r)
                                            throw new a("Invalid color: '" + e.text + "'", e);
                                        var n = r[0];
                                        return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n),
                                        {
                                            type: "color-token",
                                            mode: this.mode,
                                            color: n
                                        }
                                    }
                                    ,
                                    e.parseSizeGroup = function (t) {
                                        var e, r = !1;
                                        if (!(e = t || "{" === this.fetch().text ? this.parseStringGroup("size", t) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size")))
                                            return null;
                                        t || 0 !== e.text.length || (e.text = "0pt",
                                            r = !0);
                                        var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e.text);
                                        if (!n)
                                            throw new a("Invalid size: '" + e.text + "'", e);
                                        var i = {
                                            number: +(n[1] + n[2]),
                                            unit: n[3]
                                        };
                                        if (!Ot(i))
                                            throw new a("Invalid unit: '" + i.unit + "'", e);
                                        return {
                                            type: "size",
                                            mode: this.mode,
                                            value: i,
                                            isBlank: r
                                        }
                                    }
                                    ,
                                    e.parseUrlGroup = function (t, e) {
                                        this.gullet.lexer.setCatcode("%", 13);
                                        var r = this.parseStringGroup("url", t, !0);
                                        if (this.gullet.lexer.setCatcode("%", 14),
                                            !r)
                                            return null;
                                        var n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
                                        return {
                                            type: "url",
                                            mode: this.mode,
                                            url: n
                                        }
                                    }
                                    ,
                                    e.parseGroup = function (e, r, i, o, s, l) {
                                        var h = this.mode;
                                        s && this.switchMode(s),
                                            l && this.consumeSpaces();
                                        var c, u = this.fetch(), m = u.text;
                                        if (r ? "[" === m : "{" === m || "\\begingroup" === m) {
                                            this.consume();
                                            var p = t.endOfGroup[m];
                                            this.gullet.beginGroup();
                                            var d = this.parseExpression(!1, p)
                                                , f = this.fetch();
                                            this.expect(p),
                                                this.gullet.endGroup(),
                                                c = {
                                                    type: "ordgroup",
                                                    mode: this.mode,
                                                    loc: n.range(u, f),
                                                    body: d,
                                                    semisimple: "\\begingroup" === m || void 0
                                                }
                                        } else if (r)
                                            c = null;
                                        else if (null == (c = this.parseFunction(o, e, i) || this.parseSymbol()) && "\\" === m[0] && !Nn.hasOwnProperty(m)) {
                                            if (this.settings.throwOnError)
                                                throw new a("Undefined control sequence: " + m, u);
                                            c = this.formatUnsupportedCmd(m),
                                                this.consume()
                                        }
                                        return s && this.switchMode(h),
                                            c
                                    }
                                    ,
                                    e.formLigatures = function (t) {
                                        for (var e = t.length - 1, r = 0; r < e; ++r) {
                                            var i = t[r]
                                                , o = i.text;
                                            "-" === o && "-" === t[r + 1].text && (r + 1 < e && "-" === t[r + 2].text ? (t.splice(r, 3, {
                                                type: "textord",
                                                mode: "text",
                                                loc: n.range(i, t[r + 2]),
                                                text: "---"
                                            }),
                                                e -= 2) : (t.splice(r, 2, {
                                                    type: "textord",
                                                    mode: "text",
                                                    loc: n.range(i, t[r + 1]),
                                                    text: "--"
                                                }),
                                                    e -= 1)),
                                                "'" !== o && "`" !== o || t[r + 1].text !== o || (t.splice(r, 2, {
                                                    type: "textord",
                                                    mode: "text",
                                                    loc: n.range(i, t[r + 1]),
                                                    text: o + o
                                                }),
                                                    e -= 1)
                                        }
                                    }
                                    ,
                                    e.parseSymbol = function () {
                                        var t = this.fetch()
                                            , e = t.text;
                                        if (/^\\verb[^a-zA-Z]/.test(e)) {
                                            this.consume();
                                            var r = e.slice(5)
                                                , i = "*" === r.charAt(0);
                                            if (i && (r = r.slice(1)),
                                                r.length < 2 || r.charAt(0) !== r.slice(-1))
                                                throw new a("\\verb assertion failed --\n                    please report what input caused this bug");
                                            return {
                                                type: "verb",
                                                mode: "text",
                                                body: r = r.slice(1, -1),
                                                star: i
                                            }
                                        }
                                        qn.hasOwnProperty(e[0]) && !j[this.mode][e[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + e[0] + '" used in math mode', t),
                                            e = qn[e[0]] + e.substr(1));
                                        var o, s = wn.exec(e);
                                        if (s && ("i" === (e = e.substring(0, s.index)) ? e = "ı" : "j" === e && (e = "ȷ")),
                                            j[this.mode][e]) {
                                            this.settings.strict && "math" === this.mode && zt.indexOf(e) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + e[0] + '" used in math mode', t);
                                            var l, h = j[this.mode][e].group, c = n.range(t);
                                            if (G.hasOwnProperty(h)) {
                                                var u = h;
                                                l = {
                                                    type: "atom",
                                                    mode: this.mode,
                                                    family: u,
                                                    loc: c,
                                                    text: e
                                                }
                                            } else
                                                l = {
                                                    type: h,
                                                    mode: this.mode,
                                                    loc: c,
                                                    text: e
                                                };
                                            o = l
                                        } else {
                                            if (!(e.charCodeAt(0) >= 128))
                                                return null;
                                            this.settings.strict && (S(e.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + e[0] + '" used in math mode', t) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + e[0] + '" (' + e.charCodeAt(0) + ")", t)),
                                                o = {
                                                    type: "textord",
                                                    mode: "text",
                                                    loc: n.range(t),
                                                    text: e
                                                }
                                        }
                                        if (this.consume(),
                                            s)
                                            for (var m = 0; m < s[0].length; m++) {
                                                var p = s[0][m];
                                                if (!Bn[p])
                                                    throw new a("Unknown accent ' " + p + "'", t);
                                                var d = Bn[p][this.mode];
                                                if (!d)
                                                    throw new a("Accent " + p + " unsupported in " + this.mode + " mode", t);
                                                o = {
                                                    type: "accent",
                                                    mode: this.mode,
                                                    loc: n.range(t),
                                                    label: d,
                                                    isStretchy: !1,
                                                    isShifty: !0,
                                                    base: o
                                                }
                                            }
                                        return o
                                    }
                                    ,
                                    t
                            }();
                        En.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"],
                            En.endOfGroup = {
                                "[": "]",
                                "{": "}",
                                "\\begingroup": "\\endgroup"
                            },
                            En.SUPSUB_GREEDINESS = 1;
                        var In = function (t, e) {
                            if (!("string" == typeof t || t instanceof String))
                                throw new TypeError("KaTeX can only parse string typed expression");
                            var r = new En(t, e);
                            delete r.gullet.macros.current["\\df@tag"];
                            var n = r.parse();
                            if (r.gullet.macros.get("\\df@tag")) {
                                if (!e.displayMode)
                                    throw new a("\\tag works only in display equations");
                                r.gullet.feed("\\df@tag"),
                                    n = [{
                                        type: "tag",
                                        mode: "text",
                                        body: n,
                                        tag: r.parse()
                                    }]
                            }
                            return n
                        }
                            , Rn = function (t, e, r) {
                                e.textContent = "";
                                var n = Hn(t, r).toNode();
                                e.appendChild(n)
                            };
                        "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),
                            Rn = function () {
                                throw new a("KaTeX doesn't work in quirks mode.")
                            }
                        );
                        var On = function (t, e, r) {
                            if (r.throwOnError || !(t instanceof a))
                                throw t;
                            var n = Kt.makeSpan(["katex-error"], [new E(e)]);
                            return n.setAttribute("title", t.toString()),
                                n.setAttribute("style", "color:" + r.errorColor),
                                n
                        }
                            , Hn = function (t, e) {
                                var r = new m(e);
                                try {
                                    return function (t, e, r) {
                                        var n, i = Be(r);
                                        if ("mathml" === r.output)
                                            return $e(t, e, i, r.displayMode, !0);
                                        if ("html" === r.output) {
                                            var o = ke(t, i);
                                            n = Kt.makeSpan(["katex"], [o])
                                        } else {
                                            var a = $e(t, e, i, r.displayMode, !1)
                                                , s = ke(t, i);
                                            n = Kt.makeSpan(["katex"], [a, s])
                                        }
                                        return qe(n, r)
                                    }(In(t, r), t, r)
                                } catch (e) {
                                    return On(e, t, r)
                                }
                            }
                            , Dn = {
                                version: "0.12.0",
                                render: Rn,
                                renderToString: function (t, e) {
                                    return Hn(t, e).toMarkup()
                                },
                                ParseError: a,
                                __parse: function (t, e) {
                                    var r = new m(e);
                                    return In(t, r)
                                },
                                __renderToDomTree: Hn,
                                __renderToHTMLTree: function (t, e) {
                                    var r = new m(e);
                                    try {
                                        return function (t, e, r) {
                                            var n = ke(t, Be(r))
                                                , i = Kt.makeSpan(["katex"], [n]);
                                            return qe(i, r)
                                        }(In(t, r), 0, r)
                                    } catch (e) {
                                        return On(e, t, r)
                                    }
                                },
                                __setFontMetrics: function (t, e) {
                                    D[t] = e
                                },
                                __defineSymbol: Z,
                                __defineMacro: Tn,
                                __domTree: {
                                    Span: N,
                                    Anchor: $,
                                    SymbolNode: E,
                                    SvgNode: I,
                                    PathNode: R,
                                    LineNode: O
                                }
                            };
                        e.default = Dn
                    }
                ]).default
            }
            ,
            t.exports = r()
    }
        ,
        Pt(Ct = {
            exports: {}
        }, Ct.exports),
        Ct.exports), $t = _t(Nt);
    function Bt(t, e = !1) {
        const r = {
            displayMode: e,
            throwOnError: !1
        };
        return $t.renderToString(t, r)
    }
    function qt(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, v, S, z, _, C, N, $, B, q, I, O, D, F, V, U, G, X = Bt("y") + "", Y = Bt("y") + "", j = Bt("X = (x_1, x_2, ..., x_k)") + "", Z = Bt(Et, !0) + "", K = Bt(It, !0) + "", J = Bt("z") + "", Q = Bt("y") + "", tt = Bt("X") + "";
        return {
            c() {
                r = x("section"),
                    n = x("p"),
                    l = x("p"),
                    c = x("br"),
                    u = x("br"),
                    p = x("p"),
                    B = M(),
                    q = x("p"),
                    U = x("br"),
                    G = x("br"),
                    T(n, "class", "body-text"),
                    T(l, "class", "body-text"),
                    f.a = v,
                    w.a = S,
                    L.a = z,
                    A.a = _,
                    P.a = null,
                    T(p, "class", "body-text"),
                    R.a = O,
                    H.a = D,
                    W.a = F,
                    T(q, "class", "body-text")
            },
            m(t, e) {
                b(t, r, e),
                    g(r, n),
                    g(r, l),
                    g(r, c),
                    g(r, u),
                    g(r, p),


                    g(r, B),
                    g(r, q),

                    g(r, U),
                    g(r, G)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r)
            }
        }
    }
    const Et = "\\begin{aligned} P(y=1|X) = \\text{sigmoid}(z) = \\frac{1}{1+e^{-z}} \\end{aligned}"
        , It = "\\begin{aligned} z = \\hat{\\beta_0} + \\hat{\\beta_1} x_1 + \\hat{\\beta_2} x_2 + ... + \\hat{\\beta_k} x_k \\end{aligned}";
    class Rt extends lt {
        constructor(t) {
            super(),
                st(this, t, null, qt, s, {})
        }
    }
    const Ot = [{
        Temperature: 23.4055054362,
        Weather: 0
    }, {
        Temperature: 29.5967695127,
        Weather: 0
    }, {
        Temperature: 29.6653345388,
        Weather: 0
    }, {
        Temperature: 31.3190934544,
        Weather: 0
    }, {
        Temperature: 31.4138761388,
        Weather: 0
    }, {
        Temperature: 35.6056097326,
        Weather: 0
    }, {
        Temperature: 39.01261053,
        Weather: 0
    }, {
        Temperature: 41.7086471099,
        Weather: 0
    }, {
        Temperature: 43.2232442267,
        Weather: 0
    }, {
        Temperature: 43.4674973221,
        Weather: 0
    }, {
        Temperature: 43.6532069482,
        Weather: 0
    }, {
        Temperature: 45.8068351785,
        Weather: 0
    }, {
        Temperature: 46.1848351823,
        Weather: 0
    }, {
        Temperature: 46.1890748248,
        Weather: 0
    }, {
        Temperature: 46.2433057692,
        Weather: 0
    }, {
        Temperature: 46.6432266148,
        Weather: 0
    }, {
        Temperature: 46.8649180301,
        Weather: 0
    }, {
        Temperature: 48.6767110156,
        Weather: 0
    }, {
        Temperature: 49.0854737711,
        Weather: 0
    }, {
        Temperature: 49.2552923711,
        Weather: 0
    }, {
        Temperature: 49.6042976031,
        Weather: 0
    }, {
        Temperature: 50.4625552314,
        Weather: 0
    }, {
        Temperature: 50.4797059187,
        Weather: 0
    }, {
        Temperature: 50.6648900915,
        Weather: 0
    }, {
        Temperature: 50.8771021841,
        Weather: 0
    }, {
        Temperature: 52.1611600626,
        Weather: 0
    }, {
        Temperature: 53.2600343339,
        Weather: 0
    }, {
        Temperature: 54.3349633008,
        Weather: 0
    }, {
        Temperature: 55.0839624268,
        Weather: 0
    }, {
        Temperature: 55.2429643001,
        Weather: 0
    }, {
        Temperature: 56.1134077957,
        Weather: 0
    }, {
        Temperature: 56.9511960505,
        Weather: 0
    }, {
        Temperature: 57.3527957607,
        Weather: 0
    }, {
        Temperature: 57.7101173807,
        Weather: 0
    }, {
        Temperature: 58.4245628157,
        Weather: 0
    }, {
        Temperature: 60.0036588655,
        Weather: 0
    }, {
        Temperature: 62.7837923027,
        Weather: 0
    }, {
        Temperature: 62.9566269644,
        Weather: 1
    }, {
        Temperature: 64.6767801057,
        Weather: 0
    }, {
        Temperature: 65.0466273303,
        Weather: 1
    }, {
        Temperature: 65.844870564,
        Weather: 0
    }, {
        Temperature: 67.3118466598,
        Weather: 0
    }, {
        Temperature: 67.4459509036,
        Weather: 1
    }, {
        Temperature: 70.0514794089,
        Weather: 1
    }, {
        Temperature: 71.2829833937,
        Weather: 1
    }, {
        Temperature: 71.6867139953,
        Weather: 1
    }, {
        Temperature: 72.1745218842,
        Weather: 1
    }, {
        Temperature: 72.594334468,
        Weather: 1
    }, {
        Temperature: 73.0785466586,
        Weather: 1
    }, {
        Temperature: 73.6369466955,
        Weather: 1
    }, {
        Temperature: 73.8532447473,
        Weather: 1
    }, {
        Temperature: 74.0905040732,
        Weather: 1
    }, {
        Temperature: 74.1077684404,
        Weather: 1
    }, {
        Temperature: 74.7649033549,
        Weather: 1
    }, {
        Temperature: 75.5364149126,
        Weather: 1
    }, {
        Temperature: 75.8268821014,
        Weather: 1
    }, {
        Temperature: 77.0826950682,
        Weather: 1
    }, {
        Temperature: 77.6282462378,
        Weather: 1
    }, {
        Temperature: 78.1166012785,
        Weather: 1
    }, {
        Temperature: 78.346711784,
        Weather: 1
    }, {
        Temperature: 78.9049608073,
        Weather: 1
    }, {
        Temperature: 78.9255336303,
        Weather: 1
    }, {
        Temperature: 79.6061322094,
        Weather: 1
    }, {
        Temperature: 79.8660865244,
        Weather: 1
    }, {
        Temperature: 80.0000683303,
        Weather: 1
    }, {
        Temperature: 80.0631767568,
        Weather: 1
    }, {
        Temperature: 80.290775751,
        Weather: 1
    }, {
        Temperature: 80.7890855337,
        Weather: 1
    }, {
        Temperature: 81.795993164,
        Weather: 1
    }, {
        Temperature: 82.5931117566,
        Weather: 1
    }, {
        Temperature: 83.5130004475,
        Weather: 1
    }, {
        Temperature: 83.5201699201,
        Weather: 1
    }, {
        Temperature: 83.7734082441,
        Weather: 1
    }, {
        Temperature: 83.796468005,
        Weather: 1
    }, {
        Temperature: 83.8601783118,
        Weather: 1
    }, {
        Temperature: 88.2250085365,
        Weather: 1
    }, {
        Temperature: 89.5174370387,
        Weather: 1
    }, {
        Temperature: 91.4818956588,
        Weather: 1
    }, {
        Temperature: 95.6195675222,
        Weather: 1
    }, {
        Temperature: 96.0454560897,
        Weather: 1
    }]
        , Ht = [{
            x: 20,
            y: 0
        }, {
            x: 21,
            y: 0
        }, {
            x: 22,
            y: 0
        }, {
            x: 23,
            y: 0
        }, {
            x: 24,
            y: 0
        }, {
            x: 25,
            y: 0
        }, {
            x: 26,
            y: 0
        }, {
            x: 27,
            y: 0
        }, {
            x: 28,
            y: 0
        }, {
            x: 29,
            y: 0
        }, {
            x: 30,
            y: 0
        }, {
            x: 31,
            y: 0
        }, {
            x: 32,
            y: 0
        }, {
            x: 33,
            y: 0
        }, {
            x: 34,
            y: 0
        }, {
            x: 35,
            y: 0
        }, {
            x: 36,
            y: 0
        }, {
            x: 37,
            y: 0
        }, {
            x: 38,
            y: 0
        }, {
            x: 39,
            y: 0
        }, {
            x: 40,
            y: 0
        }, {
            x: 41,
            y: 1e-8
        }, {
            x: 42,
            y: 2e-8
        }, {
            x: 43,
            y: 6e-8
        }, {
            x: 44,
            y: 13e-8
        }, {
            x: 45,
            y: 3e-7
        }, {
            x: 46,
            y: 7e-7
        }, {
            x: 47,
            y: 163e-8
        }, {
            x: 48,
            y: 378e-8
        }, {
            x: 49,
            y: 877e-8
        }, {
            x: 50,
            y: 2036e-8
        }, {
            x: 51,
            y: 4727e-8
        }, {
            x: 52,
            y: 10974e-8
        }, {
            x: 53,
            y: 25473e-8
        }, {
            x: 54,
            y: 59115e-8
        }, {
            x: 55,
            y: .00137129
        }, {
            x: 56,
            y: .00317769
        }, {
            x: 57,
            y: .00734615
        }, {
            x: 58,
            y: .0168901
        }, {
            x: 59,
            y: .03835425
        }, {
            x: 60,
            y: .08474404
        }, {
            x: 61,
            y: .17692001
        }, {
            x: 62,
            y: .33288996
        }, {
            x: 63,
            y: .53670127
        }, {
            x: 64,
            y: .72894613
        }, {
            x: 65,
            y: .86193971
        }, {
            x: 66,
            y: .93545724
        }, {
            x: 67,
            y: .97113737
        }, {
            x: 68,
            y: .98735956
        }, {
            x: 69,
            y: .99451559
        }, {
            x: 70,
            y: .99763015
        }, {
            x: 71,
            y: .9989778
        }, {
            x: 72,
            y: .99955942
        }, {
            x: 73,
            y: .99981017
        }, {
            x: 74,
            y: .99991822
        }, {
            x: 75,
            y: .99996477
        }, {
            x: 76,
            y: .99998482
        }, {
            x: 77,
            y: .99999346
        }, {
            x: 78,
            y: .99999718
        }, {
            x: 79,
            y: .99999879
        }, {
            x: 80,
            y: .99999948
        }, {
            x: 81,
            y: .99999977
        }, {
            x: 82,
            y: .9999999
        }, {
            x: 83,
            y: .99999996
        }, {
            x: 84,
            y: .99999998
        }, {
            x: 85,
            y: .99999999
        }, {
            x: 86,
            y: 1
        }, {
            x: 87,
            y: 1
        }, {
            x: 88,
            y: 1
        }, {
            x: 89,
            y: 1
        }, {
            x: 90,
            y: 1
        }, {
            x: 91,
            y: 1
        }, {
            x: 92,
            y: 1
        }, {
            x: 93,
            y: 1
        }, {
            x: 94,
            y: 1
        }, {
            x: 95,
            y: 1
        }, {
            x: 96,
            y: 1
        }, {
            x: 97,
            y: 1
        }, {
            x: 98,
            y: 1
        }, {
            x: 99,
            y: 1
        }, {
            x: 100,
            y: 1
        }]
        , Dt = [{
            Probability: .01,
            LogLoss: .0100503359
        }, {
            Probability: .02,
            LogLoss: .0202027073
        }, {
            Probability: .03,
            LogLoss: .0304592075
        }, {
            Probability: .04,
            LogLoss: .0408219945
        }, {
            Probability: .05,
            LogLoss: .0512932944
        }, {
            Probability: .06,
            LogLoss: .0618754037
        }, {
            Probability: .07,
            LogLoss: .0725706928
        }, {
            Probability: .08,
            LogLoss: .0833816089
        }, {
            Probability: .09,
            LogLoss: .0943106795
        }, {
            Probability: .1,
            LogLoss: .1053605157
        }, {
            Probability: .11,
            LogLoss: .1165338163
        }, {
            Probability: .12,
            LogLoss: .1278333715
        }, {
            Probability: .13,
            LogLoss: .1392620673
        }, {
            Probability: .14,
            LogLoss: .1508228897
        }, {
            Probability: .15,
            LogLoss: .1625189295
        }, {
            Probability: .16,
            LogLoss: .1743533871
        }, {
            Probability: .17,
            LogLoss: .1863295782
        }, {
            Probability: .18,
            LogLoss: .1984509387
        }, {
            Probability: .19,
            LogLoss: .2107210313
        }, {
            Probability: .2,
            LogLoss: .2231435513
        }, {
            Probability: .21,
            LogLoss: .2357223335
        }, {
            Probability: .22,
            LogLoss: .2484613593
        }, {
            Probability: .23,
            LogLoss: .2613647641
        }, {
            Probability: .24,
            LogLoss: .2744368457
        }, {
            Probability: .25,
            LogLoss: .2876820725
        }, {
            Probability: .26,
            LogLoss: .3011050928
        }, {
            Probability: .27,
            LogLoss: .3147107448
        }, {
            Probability: .28,
            LogLoss: .328504067
        }, {
            Probability: .29,
            LogLoss: .3424903089
        }, {
            Probability: .3,
            LogLoss: .3566749439
        }, {
            Probability: .31,
            LogLoss: .3710636814
        }, {
            Probability: .32,
            LogLoss: .3856624808
        }, {
            Probability: .33,
            LogLoss: .4004775666
        }, {
            Probability: .34,
            LogLoss: .415515444
        }, {
            Probability: .35,
            LogLoss: .4307829161
        }, {
            Probability: .36,
            LogLoss: .4462871026
        }, {
            Probability: .37,
            LogLoss: .4620354596
        }, {
            Probability: .38,
            LogLoss: .4780358009
        }, {
            Probability: .39,
            LogLoss: .4942963218
        }, {
            Probability: .4,
            LogLoss: .5108256238
        }, {
            Probability: .41,
            LogLoss: .5276327421
        }, {
            Probability: .42,
            LogLoss: .5447271754
        }, {
            Probability: .43,
            LogLoss: .5621189182
        }, {
            Probability: .44,
            LogLoss: .5798184953
        }, {
            Probability: .45,
            LogLoss: .5978370008
        }, {
            Probability: .46,
            LogLoss: .6161861394
        }, {
            Probability: .47,
            LogLoss: .6348782724
        }, {
            Probability: .48,
            LogLoss: .6539264674
        }, {
            Probability: .49,
            LogLoss: .6733445533
        }, {
            Probability: .5,
            LogLoss: .6931471806
        }, {
            Probability: .51,
            LogLoss: .7133498879
        }, {
            Probability: .52,
            LogLoss: .7339691751
        }, {
            Probability: .53,
            LogLoss: .7550225843
        }, {
            Probability: .54,
            LogLoss: .7765287895
        }, {
            Probability: .55,
            LogLoss: .7985076962
        }, {
            Probability: .56,
            LogLoss: .8209805521
        }, {
            Probability: .57,
            LogLoss: .8439700703
        }, {
            Probability: .58,
            LogLoss: .8675005677
        }, {
            Probability: .59,
            LogLoss: .8915981193
        }, {
            Probability: .6,
            LogLoss: .9162907319
        }, {
            Probability: .61,
            LogLoss: .9416085399
        }, {
            Probability: .62,
            LogLoss: .9675840263
        }, {
            Probability: .63,
            LogLoss: .9942522733
        }, {
            Probability: .64,
            LogLoss: 1.0216512475
        }, {
            Probability: .65,
            LogLoss: 1.0498221245
        }, {
            Probability: .66,
            LogLoss: 1.0788096614
        }, {
            Probability: .67,
            LogLoss: 1.1086626245
        }, {
            Probability: .68,
            LogLoss: 1.1394342832
        }, {
            Probability: .69,
            LogLoss: 1.1711829815
        }, {
            Probability: .7,
            LogLoss: 1.2039728043
        }, {
            Probability: .71,
            LogLoss: 1.237874356
        }, {
            Probability: .72,
            LogLoss: 1.2729656758
        }, {
            Probability: .73,
            LogLoss: 1.30933332
        }, {
            Probability: .74,
            LogLoss: 1.347073648
        }, {
            Probability: .75,
            LogLoss: 1.3862943611
        }, {
            Probability: .76,
            LogLoss: 1.4271163556
        }, {
            Probability: .77,
            LogLoss: 1.4696759701
        }, {
            Probability: .78,
            LogLoss: 1.5141277326
        }, {
            Probability: .79,
            LogLoss: 1.5606477483
        }, {
            Probability: .8,
            LogLoss: 1.6094379124
        }, {
            Probability: .81,
            LogLoss: 1.6607312068
        }, {
            Probability: .82,
            LogLoss: 1.7147984281
        }, {
            Probability: .83,
            LogLoss: 1.7719568419
        }, {
            Probability: .84,
            LogLoss: 1.8325814637
        }, {
            Probability: .85,
            LogLoss: 1.8971199849
        }, {
            Probability: .86,
            LogLoss: 1.9661128564
        }, {
            Probability: .87,
            LogLoss: 2.0402208285
        }, {
            Probability: .88,
            LogLoss: 2.1202635362
        }, {
            Probability: .89,
            LogLoss: 2.2072749132
        }, {
            Probability: .9,
            LogLoss: 2.302585093
        }, {
            Probability: .91,
            LogLoss: 2.4079456087
        }, {
            Probability: .92,
            LogLoss: 2.5257286443
        }, {
            Probability: .93,
            LogLoss: 2.6592600369
        }, {
            Probability: .94,
            LogLoss: 2.8134107168
        }, {
            Probability: .95,
            LogLoss: 2.9957322736
        }, {
            Probability: .96,
            LogLoss: 3.2188758249
        }, {
            Probability: .97,
            LogLoss: 3.5065578973
        }, {
            Probability: .98,
            LogLoss: 3.9120230054
        }, {
            Probability: .99,
            LogLoss: 4.605170186
        }]
        , Wt = [{
            Probability: .01,
            LogLoss: 4.605170186
        }, {
            Probability: .02,
            LogLoss: 3.9120230054
        }, {
            Probability: .03,
            LogLoss: 3.5065578973
        }, {
            Probability: .04,
            LogLoss: 3.2188758249
        }, {
            Probability: .05,
            LogLoss: 2.9957322736
        }, {
            Probability: .06,
            LogLoss: 2.8134107168
        }, {
            Probability: .07,
            LogLoss: 2.6592600369
        }, {
            Probability: .08,
            LogLoss: 2.5257286443
        }, {
            Probability: .09,
            LogLoss: 2.4079456087
        }, {
            Probability: .1,
            LogLoss: 2.302585093
        }, {
            Probability: .11,
            LogLoss: 2.2072749132
        }, {
            Probability: .12,
            LogLoss: 2.1202635362
        }, {
            Probability: .13,
            LogLoss: 2.0402208285
        }, {
            Probability: .14,
            LogLoss: 1.9661128564
        }, {
            Probability: .15,
            LogLoss: 1.8971199849
        }, {
            Probability: .16,
            LogLoss: 1.8325814637
        }, {
            Probability: .17,
            LogLoss: 1.7719568419
        }, {
            Probability: .18,
            LogLoss: 1.7147984281
        }, {
            Probability: .19,
            LogLoss: 1.6607312068
        }, {
            Probability: .2,
            LogLoss: 1.6094379124
        }, {
            Probability: .21,
            LogLoss: 1.5606477483
        }, {
            Probability: .22,
            LogLoss: 1.5141277326
        }, {
            Probability: .23,
            LogLoss: 1.4696759701
        }, {
            Probability: .24,
            LogLoss: 1.4271163556
        }, {
            Probability: .25,
            LogLoss: 1.3862943611
        }, {
            Probability: .26,
            LogLoss: 1.347073648
        }, {
            Probability: .27,
            LogLoss: 1.30933332
        }, {
            Probability: .28,
            LogLoss: 1.2729656758
        }, {
            Probability: .29,
            LogLoss: 1.237874356
        }, {
            Probability: .3,
            LogLoss: 1.2039728043
        }, {
            Probability: .31,
            LogLoss: 1.1711829815
        }, {
            Probability: .32,
            LogLoss: 1.1394342832
        }, {
            Probability: .33,
            LogLoss: 1.1086626245
        }, {
            Probability: .34,
            LogLoss: 1.0788096614
        }, {
            Probability: .35,
            LogLoss: 1.0498221245
        }, {
            Probability: .36,
            LogLoss: 1.0216512475
        }, {
            Probability: .37,
            LogLoss: .9942522733
        }, {
            Probability: .38,
            LogLoss: .9675840263
        }, {
            Probability: .39,
            LogLoss: .9416085399
        }, {
            Probability: .4,
            LogLoss: .9162907319
        }, {
            Probability: .41,
            LogLoss: .8915981193
        }, {
            Probability: .42,
            LogLoss: .8675005677
        }, {
            Probability: .43,
            LogLoss: .8439700703
        }, {
            Probability: .44,
            LogLoss: .8209805521
        }, {
            Probability: .45,
            LogLoss: .7985076962
        }, {
            Probability: .46,
            LogLoss: .7765287895
        }, {
            Probability: .47,
            LogLoss: .7550225843
        }, {
            Probability: .48,
            LogLoss: .7339691751
        }, {
            Probability: .49,
            LogLoss: .7133498879
        }, {
            Probability: .5,
            LogLoss: .6931471806
        }, {
            Probability: .51,
            LogLoss: .6733445533
        }, {
            Probability: .52,
            LogLoss: .6539264674
        }, {
            Probability: .53,
            LogLoss: .6348782724
        }, {
            Probability: .54,
            LogLoss: .6161861394
        }, {
            Probability: .55,
            LogLoss: .5978370008
        }, {
            Probability: .56,
            LogLoss: .5798184953
        }, {
            Probability: .57,
            LogLoss: .5621189182
        }, {
            Probability: .58,
            LogLoss: .5447271754
        }, {
            Probability: .59,
            LogLoss: .5276327421
        }, {
            Probability: .6,
            LogLoss: .5108256238
        }, {
            Probability: .61,
            LogLoss: .4942963218
        }, {
            Probability: .62,
            LogLoss: .4780358009
        }, {
            Probability: .63,
            LogLoss: .4620354596
        }, {
            Probability: .64,
            LogLoss: .4462871026
        }, {
            Probability: .65,
            LogLoss: .4307829161
        }, {
            Probability: .66,
            LogLoss: .415515444
        }, {
            Probability: .67,
            LogLoss: .4004775666
        }, {
            Probability: .68,
            LogLoss: .3856624808
        }, {
            Probability: .69,
            LogLoss: .3710636814
        }, {
            Probability: .7,
            LogLoss: .3566749439
        }, {
            Probability: .71,
            LogLoss: .3424903089
        }, {
            Probability: .72,
            LogLoss: .328504067
        }, {
            Probability: .73,
            LogLoss: .3147107448
        }, {
            Probability: .74,
            LogLoss: .3011050928
        }, {
            Probability: .75,
            LogLoss: .2876820725
        }, {
            Probability: .76,
            LogLoss: .2744368457
        }, {
            Probability: .77,
            LogLoss: .2613647641
        }, {
            Probability: .78,
            LogLoss: .2484613593
        }, {
            Probability: .79,
            LogLoss: .2357223335
        }, {
            Probability: .8,
            LogLoss: .2231435513
        }, {
            Probability: .81,
            LogLoss: .2107210313
        }, {
            Probability: .82,
            LogLoss: .1984509387
        }, {
            Probability: .83,
            LogLoss: .1863295782
        }, {
            Probability: .84,
            LogLoss: .1743533871
        }, {
            Probability: .85,
            LogLoss: .1625189295
        }, {
            Probability: .86,
            LogLoss: .1508228897
        }, {
            Probability: .87,
            LogLoss: .1392620673
        }, {
            Probability: .88,
            LogLoss: .1278333715
        }, {
            Probability: .89,
            LogLoss: .1165338163
        }, {
            Probability: .9,
            LogLoss: .1053605157
        }, {
            Probability: .91,
            LogLoss: .0943106795
        }, {
            Probability: .92,
            LogLoss: .0833816089
        }, {
            Probability: .93,
            LogLoss: .0725706928
        }, {
            Probability: .94,
            LogLoss: .0618754037
        }, {
            Probability: .95,
            LogLoss: .0512932944
        }, {
            Probability: .96,
            LogLoss: .0408219945
        }, {
            Probability: .97,
            LogLoss: .0304592075
        }, {
            Probability: .98,
            LogLoss: .0202027073
        }, {
            Probability: .99,
            LogLoss: .0100503359
        }];
    function Ft(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
    function Vt(t) {
        let e = t
            , r = t;
        function n(t, e, n, i) {
            for (null == n && (n = 0),
                null == i && (i = t.length); n < i;) {
                const o = n + i >>> 1;
                r(t[o], e) < 0 ? n = o + 1 : i = o
            }
            return n
        }
        return 1 === t.length && (e = (e, r) => t(e) - r,
            r = function (t) {
                return (e, r) => Ft(t(e), r)
            }(t)),
        {
            left: n,
            center: function (t, r, i, o) {
                null == i && (i = 0),
                    null == o && (o = t.length);
                const a = n(t, r, i, o - 1);
                return a > i && e(t[a - 1], r) > -e(t[a], r) ? a - 1 : a
            },
            right: function (t, e, n, i) {
                for (null == n && (n = 0),
                    null == i && (i = t.length); n < i;) {
                    const o = n + i >>> 1;
                    r(t[o], e) > 0 ? i = o : n = o + 1
                }
                return n
            }
        }
    }
    const Ut = Vt(Ft).right;
    Vt((function (t) {
        return null === t ? NaN : +t
    }
    )).center;
    var Gt = Ut
        , Xt = Math.sqrt(50)
        , Yt = Math.sqrt(10)
        , jt = Math.sqrt(2);
    function Zt(t, e, r) {
        var n = (e - t) / Math.max(0, r)
            , i = Math.floor(Math.log(n) / Math.LN10)
            , o = n / Math.pow(10, i);
        return i >= 0 ? (o >= Xt ? 10 : o >= Yt ? 5 : o >= jt ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Xt ? 10 : o >= Yt ? 5 : o >= jt ? 2 : 1)
    }
    function Kt(t, e) {
        let r;
        if (void 0 === e)
            for (const e of t)
                null != e && (r < e || void 0 === r && e >= e) && (r = e);
        else {
            let n = -1;
            for (let i of t)
                null != (i = e(i, ++n, t)) && (r < i || void 0 === r && i >= i) && (r = i)
        }
        return r
    }
    function Jt(t, e) {
        let r;
        if (void 0 === e)
            for (const e of t)
                null != e && (r > e || void 0 === r && e >= e) && (r = e);
        else {
            let n = -1;
            for (let i of t)
                null != (i = e(i, ++n, t)) && (r > i || void 0 === r && i >= i) && (r = i)
        }
        return r
    }
    function Qt(t, e) {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t);
                break;
            default:
                this.range(e).domain(t)
        }
        return this
    }
    const te = Symbol("implicit");
    function ee() {
        var t = new Map
            , e = []
            , r = []
            , n = te;
        function i(i) {
            var o = i + ""
                , a = t.get(o);
            if (!a) {
                if (n !== te)
                    return n;
                t.set(o, a = e.push(i))
            }
            return r[(a - 1) % r.length]
        }
        return i.domain = function (r) {
            if (!arguments.length)
                return e.slice();
            e = [],
                t = new Map;
            for (const n of r) {
                const r = n + "";
                t.has(r) || t.set(r, e.push(n))
            }
            return i
        }
            ,
            i.range = function (t) {
                return arguments.length ? (r = Array.from(t),
                    i) : r.slice()
            }
            ,
            i.unknown = function (t) {
                return arguments.length ? (n = t,
                    i) : n
            }
            ,
            i.copy = function () {
                return ee(e, r).unknown(n)
            }
            ,
            Qt.apply(i, arguments),
            i
    }
    function re(t, e, r) {
        t.prototype = e.prototype = r,
            r.constructor = t
    }
    function ne(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e)
            r[n] = e[n];
        return r
    }
    function ie() { }
    var oe = .7
        , ae = 1 / oe
        , se = "\\s*([+-]?\\d+)\\s*"
        , le = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
        , he = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
        , ce = /^#([0-9a-f]{3,8})$/
        , ue = new RegExp("^rgb\\(" + [se, se, se] + "\\)$")
        , me = new RegExp("^rgb\\(" + [he, he, he] + "\\)$")
        , pe = new RegExp("^rgba\\(" + [se, se, se, le] + "\\)$")
        , de = new RegExp("^rgba\\(" + [he, he, he, le] + "\\)$")
        , fe = new RegExp("^hsl\\(" + [le, he, he] + "\\)$")
        , ge = new RegExp("^hsla\\(" + [le, he, he, le] + "\\)$")
        , be = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    function ye() {
        return this.rgb().formatHex()
    }
    function ve() {
        return this.rgb().formatRgb()
    }
    function xe(t) {
        var e, r;
        return t = (t + "").trim().toLowerCase(),
            (e = ce.exec(t)) ? (r = e[1].length,
                e = parseInt(e[1], 16),
                6 === r ? we(e) : 3 === r ? new Le(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === r ? ke(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === r ? ke(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = ue.exec(t)) ? new Le(e[1], e[2], e[3], 1) : (e = me.exec(t)) ? new Le(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = pe.exec(t)) ? ke(e[1], e[2], e[3], e[4]) : (e = de.exec(t)) ? ke(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = fe.exec(t)) ? _e(e[1], e[2] / 100, e[3] / 100, 1) : (e = ge.exec(t)) ? _e(e[1], e[2] / 100, e[3] / 100, e[4]) : be.hasOwnProperty(t) ? we(be[t]) : "transparent" === t ? new Le(NaN, NaN, NaN, 0) : null
    }
    function we(t) {
        return new Le(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }
    function ke(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN),
            new Le(t, e, r, n)
    }
    function Me(t) {
        return t instanceof ie || (t = xe(t)),
            t ? new Le((t = t.rgb()).r, t.g, t.b, t.opacity) : new Le
    }
    function Se(t, e, r, n) {
        return 1 === arguments.length ? Me(t) : new Le(t, e, r, null == n ? 1 : n)
    }
    function Le(t, e, r, n) {
        this.r = +t,
            this.g = +e,
            this.b = +r,
            this.opacity = +n
    }
    function Te() {
        return "#" + Ae(this.r) + Ae(this.g) + Ae(this.b)
    }
    function ze() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
    }
    function Ae(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }
    function _e(t, e, r, n) {
        return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
            new Ce(t, e, r, n)
    }
    function Pe(t) {
        if (t instanceof Ce)
            return new Ce(t.h, t.s, t.l, t.opacity);
        if (t instanceof ie || (t = xe(t)),
            !t)
            return new Ce;
        if (t instanceof Ce)
            return t;
        var e = (t = t.rgb()).r / 255
            , r = t.g / 255
            , n = t.b / 255
            , i = Math.min(e, r, n)
            , o = Math.max(e, r, n)
            , a = NaN
            , s = o - i
            , l = (o + i) / 2;
        return s ? (a = e === o ? (r - n) / s + 6 * (r < n) : r === o ? (n - e) / s + 2 : (e - r) / s + 4,
            s /= l < .5 ? o + i : 2 - o - i,
            a *= 60) : s = l > 0 && l < 1 ? 0 : a,
            new Ce(a, s, l, t.opacity)
    }
    function Ce(t, e, r, n) {
        this.h = +t,
            this.s = +e,
            this.l = +r,
            this.opacity = +n
    }
    function Ne(t, e, r) {
        return 255 * (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e)
    }
    re(ie, xe, {
        copy: function (t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable: function () {
            return this.rgb().displayable()
        },
        hex: ye,
        formatHex: ye,
        formatHsl: function () {
            return Pe(this).formatHsl()
        },
        formatRgb: ve,
        toString: ve
    }),
        re(Le, Se, ne(ie, {
            brighter: function (t) {
                return t = null == t ? ae : Math.pow(ae, t),
                    new Le(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? oe : Math.pow(oe, t),
                    new Le(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function () {
                return this
            },
            displayable: function () {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: Te,
            formatHex: Te,
            formatRgb: ze,
            toString: ze
        })),
        re(Ce, (function (t, e, r, n) {
            return 1 === arguments.length ? Pe(t) : new Ce(t, e, r, null == n ? 1 : n)
        }
        ), ne(ie, {
            brighter: function (t) {
                return t = null == t ? ae : Math.pow(ae, t),
                    new Ce(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? oe : Math.pow(oe, t),
                    new Ce(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0)
                    , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                    , r = this.l
                    , n = r + (r < .5 ? r : 1 - r) * e
                    , i = 2 * r - n;
                return new Le(Ne(t >= 240 ? t - 240 : t + 120, i, n), Ne(t, i, n), Ne(t < 120 ? t + 240 : t - 120, i, n), this.opacity)
            },
            displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
    var $e = t => () => t;
    function Be(t) {
        return 1 == (t = +t) ? qe : function (e, r) {
            return r - e ? function (t, e, r) {
                return t = Math.pow(t, r),
                    e = Math.pow(e, r) - t,
                    r = 1 / r,
                    function (n) {
                        return Math.pow(t + n * e, r)
                    }
            }(e, r, t) : $e(isNaN(e) ? r : e)
        }
    }
    function qe(t, e) {
        var r = e - t;
        return r ? function (t, e) {
            return function (r) {
                return t + r * e
            }
        }(t, r) : $e(isNaN(t) ? e : t)
    }
    var Ee = function t(e) {
        var r = Be(e);
        function n(t, e) {
            var n = r((t = Se(t)).r, (e = Se(e)).r)
                , i = r(t.g, e.g)
                , o = r(t.b, e.b)
                , a = qe(t.opacity, e.opacity);
            return function (e) {
                return t.r = n(e),
                    t.g = i(e),
                    t.b = o(e),
                    t.opacity = a(e),
                    t + ""
            }
        }
        return n.gamma = t,
            n
    }(1);
    function Ie(t, e) {
        e || (e = []);
        var r, n = t ? Math.min(e.length, t.length) : 0, i = e.slice();
        return function (o) {
            for (r = 0; r < n; ++r)
                i[r] = t[r] * (1 - o) + e[r] * o;
            return i
        }
    }
    function Re(t, e) {
        var r, n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, o = new Array(i), a = new Array(n);
        for (r = 0; r < i; ++r)
            o[r] = Ue(t[r], e[r]);
        for (; r < n; ++r)
            a[r] = e[r];
        return function (t) {
            for (r = 0; r < i; ++r)
                a[r] = o[r](t);
            return a
        }
    }
    function Oe(t, e) {
        var r = new Date;
        return t = +t,
            e = +e,
            function (n) {
                return r.setTime(t * (1 - n) + e * n),
                    r
            }
    }
    function He(t, e) {
        return t = +t,
            e = +e,
            function (r) {
                return t * (1 - r) + e * r
            }
    }
    function De(t, e) {
        var r, n = {}, i = {};
        for (r in null !== t && "object" == typeof t || (t = {}),
            null !== e && "object" == typeof e || (e = {}),
            e)
            r in t ? n[r] = Ue(t[r], e[r]) : i[r] = e[r];
        return function (t) {
            for (r in n)
                i[r] = n[r](t);
            return i
        }
    }
    var We = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
        , Fe = new RegExp(We.source, "g");
    function Ve(t, e) {
        var r, n, i, o = We.lastIndex = Fe.lastIndex = 0, a = -1, s = [], l = [];
        for (t += "",
            e += ""; (r = We.exec(t)) && (n = Fe.exec(e));)
            (i = n.index) > o && (i = e.slice(o, i),
                s[a] ? s[a] += i : s[++a] = i),
                (r = r[0]) === (n = n[0]) ? s[a] ? s[a] += n : s[++a] = n : (s[++a] = null,
                    l.push({
                        i: a,
                        x: He(r, n)
                    })),
                o = Fe.lastIndex;
        return o < e.length && (i = e.slice(o),
            s[a] ? s[a] += i : s[++a] = i),
            s.length < 2 ? l[0] ? function (t) {
                return function (e) {
                    return t(e) + ""
                }
            }(l[0].x) : function (t) {
                return function () {
                    return t
                }
            }(e) : (e = l.length,
                function (t) {
                    for (var r, n = 0; n < e; ++n)
                        s[(r = l[n]).i] = r.x(t);
                    return s.join("")
                }
            )
    }
    function Ue(t, e) {
        var r, n = typeof e;
        return null == e || "boolean" === n ? $e(e) : ("number" === n ? He : "string" === n ? (r = xe(e)) ? (e = r,
            Ee) : Ve : e instanceof xe ? Ee : e instanceof Date ? Oe : function (t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView)
            }(e) ? Ie : Array.isArray(e) ? Re : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? De : He)(t, e)
    }
    function Ge(t, e) {
        return t = +t,
            e = +e,
            function (r) {
                return Math.round(t * (1 - r) + e * r)
            }
    }
    var Xe, Ye = 180 / Math.PI, je = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };
    function Ze(t, e, r, n, i, o) {
        var a, s, l;
        return (a = Math.sqrt(t * t + e * e)) && (t /= a,
            e /= a),
            (l = t * r + e * n) && (r -= t * l,
                n -= e * l),
            (s = Math.sqrt(r * r + n * n)) && (r /= s,
                n /= s,
                l /= s),
            t * n < e * r && (t = -t,
                e = -e,
                l = -l,
                a = -a),
        {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(e, t) * Ye,
            skewX: Math.atan(l) * Ye,
            scaleX: a,
            scaleY: s
        }
    }
    function Ke(t, e, r, n) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function (o, a) {
            var s = []
                , l = [];
            return o = t(o),
                a = t(a),
                function (t, n, i, o, a, s) {
                    if (t !== i || n !== o) {
                        var l = a.push("translate(", null, e, null, r);
                        s.push({
                            i: l - 4,
                            x: He(t, i)
                        }, {
                            i: l - 2,
                            x: He(n, o)
                        })
                    } else
                        (i || o) && a.push("translate(" + i + e + o + r)
                }(o.translateX, o.translateY, a.translateX, a.translateY, s, l),
                function (t, e, r, o) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                        o.push({
                            i: r.push(i(r) + "rotate(", null, n) - 2,
                            x: He(t, e)
                        })) : e && r.push(i(r) + "rotate(" + e + n)
                }(o.rotate, a.rotate, s, l),
                function (t, e, r, o) {
                    t !== e ? o.push({
                        i: r.push(i(r) + "skewX(", null, n) - 2,
                        x: He(t, e)
                    }) : e && r.push(i(r) + "skewX(" + e + n)
                }(o.skewX, a.skewX, s, l),
                function (t, e, r, n, o, a) {
                    if (t !== r || e !== n) {
                        var s = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({
                            i: s - 4,
                            x: He(t, r)
                        }, {
                            i: s - 2,
                            x: He(e, n)
                        })
                    } else
                        1 === r && 1 === n || o.push(i(o) + "scale(" + r + "," + n + ")")
                }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, l),
                o = a = null,
                function (t) {
                    for (var e, r = -1, n = l.length; ++r < n;)
                        s[(e = l[r]).i] = e.x(t);
                    return s.join("")
                }
        }
    }
    var Je = Ke((function (t) {
        const e = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return e.isIdentity ? je : Ze(e.a, e.b, e.c, e.d, e.e, e.f)
    }
    ), "px, ", "px)", "deg)")
        , Qe = Ke((function (t) {
            return null == t ? je : (Xe || (Xe = document.createElementNS("http://www.w3.org/2000/svg", "g")),
                Xe.setAttribute("transform", t),
                (t = Xe.transform.baseVal.consolidate()) ? Ze((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : je)
        }
        ), ", ", ")", ")");
    function tr(t) {
        return +t
    }
    var er = [0, 1];
    function rr(t) {
        return t
    }
    function nr(t, e) {
        return (e -= t = +t) ? function (r) {
            return (r - t) / e
        }
            : function (t) {
                return function () {
                    return t
                }
            }(isNaN(e) ? NaN : .5)
    }
    function ir(t, e, r) {
        var n = t[0]
            , i = t[1]
            , o = e[0]
            , a = e[1];
        return i < n ? (n = nr(i, n),
            o = r(a, o)) : (n = nr(n, i),
                o = r(o, a)),
            function (t) {
                return o(n(t))
            }
    }
    function or(t, e, r) {
        var n = Math.min(t.length, e.length) - 1
            , i = new Array(n)
            , o = new Array(n)
            , a = -1;
        for (t[n] < t[0] && (t = t.slice().reverse(),
            e = e.slice().reverse()); ++a < n;)
            i[a] = nr(t[a], t[a + 1]),
                o[a] = r(e[a], e[a + 1]);
        return function (e) {
            var r = Gt(t, e, 1, n) - 1;
            return o[r](i[r](e))
        }
    }
    function ar(t, e) {
        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }
    function sr() {
        var t, e, r, n, i, o, a = er, s = er, l = Ue, h = rr;
        function c() {
            var t, e, r, l = Math.min(a.length, s.length);
            return h !== rr && (t = a[0],
                e = a[l - 1],
                t > e && (r = t,
                    t = e,
                    e = r),
                h = function (r) {
                    return Math.max(t, Math.min(e, r))
                }
            ),
                n = l > 2 ? or : ir,
                i = o = null,
                u
        }
        function u(e) {
            return null == e || isNaN(e = +e) ? r : (i || (i = n(a.map(t), s, l)))(t(h(e)))
        }
        return u.invert = function (r) {
            return h(e((o || (o = n(s, a.map(t), He)))(r)))
        }
            ,
            u.domain = function (t) {
                return arguments.length ? (a = Array.from(t, tr),
                    c()) : a.slice()
            }
            ,
            u.range = function (t) {
                return arguments.length ? (s = Array.from(t),
                    c()) : s.slice()
            }
            ,
            u.rangeRound = function (t) {
                return s = Array.from(t),
                    l = Ge,
                    c()
            }
            ,
            u.clamp = function (t) {
                return arguments.length ? (h = !!t || rr,
                    c()) : h !== rr
            }
            ,
            u.interpolate = function (t) {
                return arguments.length ? (l = t,
                    c()) : l
            }
            ,
            u.unknown = function (t) {
                return arguments.length ? (r = t,
                    u) : r
            }
            ,
            function (r, n) {
                return t = r,
                    e = n,
                    c()
            }
    }
    function lr() {
        return sr()(rr, rr)
    }
    function hr(t, e) {
        if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
            return null;
        var r, n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
    }
    function cr(t) {
        return (t = hr(Math.abs(t))) ? t[1] : NaN
    }
    var ur, mr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function pr(t) {
        if (!(e = mr.exec(t)))
            throw new Error("invalid format: " + t);
        var e;
        return new dr({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10]
        })
    }
    function dr(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "",
            this.align = void 0 === t.align ? ">" : t.align + "",
            this.sign = void 0 === t.sign ? "-" : t.sign + "",
            this.symbol = void 0 === t.symbol ? "" : t.symbol + "",
            this.zero = !!t.zero,
            this.width = void 0 === t.width ? void 0 : +t.width,
            this.comma = !!t.comma,
            this.precision = void 0 === t.precision ? void 0 : +t.precision,
            this.trim = !!t.trim,
            this.type = void 0 === t.type ? "" : t.type + ""
    }
    function fr(t, e) {
        var r = hr(t, e);
        if (!r)
            return t + "";
        var n = r[0]
            , i = r[1];
        return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0")
    }
    pr.prototype = dr.prototype,
        dr.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        }
        ;
    var gr = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: t => Math.round(t).toString(2),
        c: t => t + "",
        d: function (t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: t => Math.round(t).toString(8),
        p: (t, e) => fr(100 * t, e),
        r: fr,
        s: function (t, e) {
            var r = hr(t, e);
            if (!r)
                return t + "";
            var n = r[0]
                , i = r[1]
                , o = i - (ur = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1
                , a = n.length;
            return o === a ? n : o > a ? n + new Array(o - a + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + hr(t, Math.max(0, e + o - 1))[0]
        },
        X: t => Math.round(t).toString(16).toUpperCase(),
        x: t => Math.round(t).toString(16)
    };
    function br(t) {
        return t
    }
    var yr, vr, xr, wr = Array.prototype.map, kr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function Mr(t) {
        var e, r, n = void 0 === t.grouping || void 0 === t.thousands ? br : (e = wr.call(t.grouping, Number),
            r = t.thousands + "",
            function (t, n) {
                for (var i = t.length, o = [], a = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)),
                    o.push(t.substring(i -= s, i + s)),
                    !((l += s + 1) > n));)
                    s = e[a = (a + 1) % e.length];
                return o.reverse().join(r)
            }
        ), i = void 0 === t.currency ? "" : t.currency[0] + "", o = void 0 === t.currency ? "" : t.currency[1] + "", a = void 0 === t.decimal ? "." : t.decimal + "", s = void 0 === t.numerals ? br : function (t) {
            return function (e) {
                return e.replace(/[0-9]/g, (function (e) {
                    return t[+e]
                }
                ))
            }
        }(wr.call(t.numerals, String)), l = void 0 === t.percent ? "%" : t.percent + "", h = void 0 === t.minus ? "−" : t.minus + "", c = void 0 === t.nan ? "NaN" : t.nan + "";
        function u(t) {
            var e = (t = pr(t)).fill
                , r = t.align
                , u = t.sign
                , m = t.symbol
                , p = t.zero
                , d = t.width
                , f = t.comma
                , g = t.precision
                , b = t.trim
                , y = t.type;
            "n" === y ? (f = !0,
                y = "g") : gr[y] || (void 0 === g && (g = 12),
                    b = !0,
                    y = "g"),
                (p || "0" === e && "=" === r) && (p = !0,
                    e = "0",
                    r = "=");
            var v = "$" === m ? i : "#" === m && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""
                , x = "$" === m ? o : /[%p]/.test(y) ? l : ""
                , w = gr[y]
                , k = /[defgprs%]/.test(y);
            function M(t) {
                var i, o, l, m = v, M = x;
                if ("c" === y)
                    M = w(t) + M,
                        t = "";
                else {
                    var S = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? c : w(Math.abs(t), g),
                        b && (t = function (t) {
                            t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                                switch (t[n]) {
                                    case ".":
                                        i = e = n;
                                        break;
                                    case "0":
                                        0 === i && (i = n),
                                            e = n;
                                        break;
                                    default:
                                        if (!+t[n])
                                            break t;
                                        i > 0 && (i = 0)
                                }
                            return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
                        }(t)),
                        S && 0 == +t && "+" !== u && (S = !1),
                        m = (S ? "(" === u ? u : h : "-" === u || "(" === u ? "" : u) + m,
                        M = ("s" === y ? kr[8 + ur / 3] : "") + M + (S && "(" === u ? ")" : ""),
                        k)
                        for (i = -1,
                            o = t.length; ++i < o;)
                            if (48 > (l = t.charCodeAt(i)) || l > 57) {
                                M = (46 === l ? a + t.slice(i + 1) : t.slice(i)) + M,
                                    t = t.slice(0, i);
                                break
                            }
                }
                f && !p && (t = n(t, 1 / 0));
                var L = m.length + t.length + M.length
                    , T = L < d ? new Array(d - L + 1).join(e) : "";
                switch (f && p && (t = n(T + t, T.length ? d - M.length : 1 / 0),
                    T = ""),
                r) {
                    case "<":
                        t = m + t + M + T;
                        break;
                    case "=":
                        t = m + T + t + M;
                        break;
                    case "^":
                        t = T.slice(0, L = T.length >> 1) + m + t + M + T.slice(L);
                        break;
                    default:
                        t = T + m + t + M
                }
                return s(t)
            }
            return g = void 0 === g ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)),
                M.toString = function () {
                    return t + ""
                }
                ,
                M
        }
        return {
            format: u,
            formatPrefix: function (t, e) {
                var r = u(((t = pr(t)).type = "f",
                    t))
                    , n = 3 * Math.max(-8, Math.min(8, Math.floor(cr(e) / 3)))
                    , i = Math.pow(10, -n)
                    , o = kr[8 + n / 3];
                return function (t) {
                    return r(i * t) + o
                }
            }
        }
    }
    function Sr(t, e, r, n) {
        var i, o = function (t, e, r) {
            var n = Math.abs(e - t) / Math.max(0, r)
                , i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10))
                , o = n / i;
            return o >= Xt ? i *= 10 : o >= Yt ? i *= 5 : o >= jt && (i *= 2),
                e < t ? -i : i
        }(t, e, r);
        switch ((n = pr(null == n ? ",f" : n)).type) {
            case "s":
                var a = Math.max(Math.abs(t), Math.abs(e));
                return null != n.precision || isNaN(i = function (t, e) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(cr(e) / 3))) - cr(Math.abs(t)))
                }(o, a)) || (n.precision = i),
                    xr(n, a);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != n.precision || isNaN(i = function (t, e) {
                    return t = Math.abs(t),
                        e = Math.abs(e) - t,
                        Math.max(0, cr(e) - cr(t)) + 1
                }(o, Math.max(Math.abs(t), Math.abs(e)))) || (n.precision = i - ("e" === n.type));
                break;
            case "f":
            case "%":
                null != n.precision || isNaN(i = function (t) {
                    return Math.max(0, -cr(Math.abs(t)))
                }(o)) || (n.precision = i - 2 * ("%" === n.type))
        }
        return vr(n)
    }
    function Lr(t) {
        var e = t.domain;
        return t.ticks = function (t) {
            var r = e();
            return function (t, e, r) {
                var n, i, o, a, s = -1;
                if (r = +r,
                    (t = +t) == (e = +e) && r > 0)
                    return [t];
                if ((n = e < t) && (i = t,
                    t = e,
                    e = i),
                    0 === (a = Zt(t, e, r)) || !isFinite(a))
                    return [];
                if (a > 0) {
                    let r = Math.round(t / a)
                        , n = Math.round(e / a);
                    for (r * a < t && ++r,
                        n * a > e && --n,
                        o = new Array(i = n - r + 1); ++s < i;)
                        o[s] = (r + s) * a
                } else {
                    a = -a;
                    let r = Math.round(t * a)
                        , n = Math.round(e * a);
                    for (r / a < t && ++r,
                        n / a > e && --n,
                        o = new Array(i = n - r + 1); ++s < i;)
                        o[s] = (r + s) / a
                }
                return n && o.reverse(),
                    o
            }(r[0], r[r.length - 1], null == t ? 10 : t)
        }
            ,
            t.tickFormat = function (t, r) {
                var n = e();
                return Sr(n[0], n[n.length - 1], null == t ? 10 : t, r)
            }
            ,
            t.nice = function (r) {
                null == r && (r = 10);
                var n, i, o = e(), a = 0, s = o.length - 1, l = o[a], h = o[s], c = 10;
                for (h < l && (i = l,
                    l = h,
                    h = i,
                    i = a,
                    a = s,
                    s = i); c-- > 0;) {
                    if ((i = Zt(l, h, r)) === n)
                        return o[a] = l,
                            o[s] = h,
                            e(o);
                    if (i > 0)
                        l = Math.floor(l / i) * i,
                            h = Math.ceil(h / i) * i;
                    else {
                        if (!(i < 0))
                            break;
                        l = Math.ceil(l * i) / i,
                            h = Math.floor(h * i) / i
                    }
                    n = i
                }
                return t
            }
            ,
            t
    }
    function Tr() {
        var t = lr();
        return t.copy = function () {
            return ar(t, Tr())
        }
            ,
            Qt.apply(t, arguments),
            Lr(t)
    }
    yr = Mr({
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    }),
        vr = yr.format,
        xr = yr.formatPrefix;
    var zr = "http://www.w3.org/1999/xhtml"
        , Ar = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: zr,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
    function _r(t) {
        var e = t += ""
            , r = e.indexOf(":");
        return r >= 0 && "xmlns" !== (e = t.slice(0, r)) && (t = t.slice(r + 1)),
            Ar.hasOwnProperty(e) ? {
                space: Ar[e],
                local: t
            } : t
    }
    function Pr(t) {
        return function () {
            var e = this.ownerDocument
                , r = this.namespaceURI;
            return r === zr && e.documentElement.namespaceURI === zr ? e.createElement(t) : e.createElementNS(r, t)
        }
    }
    function Cr(t) {
        return function () {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function Nr(t) {
        var e = _r(t);
        return (e.local ? Cr : Pr)(e)
    }
    function $r() { }
    function Br(t) {
        return null == t ? $r : function () {
            return this.querySelector(t)
        }
    }
    function qr(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t)
    }
    function Er() {
        return []
    }
    function Ir(t) {
        return null == t ? Er : function () {
            return this.querySelectorAll(t)
        }
    }
    function Rr(t) {
        return function () {
            return this.matches(t)
        }
    }
    function Or(t) {
        return function (e) {
            return e.matches(t)
        }
    }
    var Hr = Array.prototype.find;
    function Dr() {
        return this.firstElementChild
    }
    var Wr = Array.prototype.filter;
    function Fr() {
        return this.children
    }
    function Vr(t) {
        return new Array(t.length)
    }
    function Ur(t, e) {
        this.ownerDocument = t.ownerDocument,
            this.namespaceURI = t.namespaceURI,
            this._next = null,
            this._parent = t,
            this.__data__ = e
    }
    function Gr(t) {
        return function () {
            return t
        }
    }
    function Xr(t, e, r, n, i, o) {
        for (var a, s = 0, l = e.length, h = o.length; s < h; ++s)
            (a = e[s]) ? (a.__data__ = o[s],
                n[s] = a) : r[s] = new Ur(t, o[s]);
        for (; s < l; ++s)
            (a = e[s]) && (i[s] = a)
    }
    function Yr(t, e, r, n, i, o, a) {
        var s, l, h, c = new Map, u = e.length, m = o.length, p = new Array(u);
        for (s = 0; s < u; ++s)
            (l = e[s]) && (p[s] = h = a.call(l, l.__data__, s, e) + "",
                c.has(h) ? i[s] = l : c.set(h, l));
        for (s = 0; s < m; ++s)
            h = a.call(t, o[s], s, o) + "",
                (l = c.get(h)) ? (n[s] = l,
                    l.__data__ = o[s],
                    c.delete(h)) : r[s] = new Ur(t, o[s]);
        for (s = 0; s < u; ++s)
            (l = e[s]) && c.get(p[s]) === l && (i[s] = l)
    }
    function jr(t) {
        return t.__data__
    }
    function Zr(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }
    function Kr(t) {
        return function () {
            this.removeAttribute(t)
        }
    }
    function Jr(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Qr(t, e) {
        return function () {
            this.setAttribute(t, e)
        }
    }
    function tn(t, e) {
        return function () {
            this.setAttributeNS(t.space, t.local, e)
        }
    }
    function en(t, e) {
        return function () {
            var r = e.apply(this, arguments);
            null == r ? this.removeAttribute(t) : this.setAttribute(t, r)
        }
    }
    function rn(t, e) {
        return function () {
            var r = e.apply(this, arguments);
            null == r ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r)
        }
    }
    function nn(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }
    function on(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }
    function an(t, e, r) {
        return function () {
            this.style.setProperty(t, e, r)
        }
    }
    function sn(t, e, r) {
        return function () {
            var n = e.apply(this, arguments);
            null == n ? this.style.removeProperty(t) : this.style.setProperty(t, n, r)
        }
    }
    function ln(t, e) {
        return t.style.getPropertyValue(e) || nn(t).getComputedStyle(t, null).getPropertyValue(e)
    }
    function hn(t) {
        return function () {
            delete this[t]
        }
    }
    function cn(t, e) {
        return function () {
            this[t] = e
        }
    }
    function un(t, e) {
        return function () {
            var r = e.apply(this, arguments);
            null == r ? delete this[t] : this[t] = r
        }
    }
    function mn(t) {
        return t.trim().split(/^|\s+/)
    }
    function pn(t) {
        return t.classList || new dn(t)
    }
    function dn(t) {
        this._node = t,
            this._names = mn(t.getAttribute("class") || "")
    }
    function fn(t, e) {
        for (var r = pn(t), n = -1, i = e.length; ++n < i;)
            r.add(e[n])
    }
    function gn(t, e) {
        for (var r = pn(t), n = -1, i = e.length; ++n < i;)
            r.remove(e[n])
    }
    function bn(t) {
        return function () {
            fn(this, t)
        }
    }
    function yn(t) {
        return function () {
            gn(this, t)
        }
    }
    function vn(t, e) {
        return function () {
            (e.apply(this, arguments) ? fn : gn)(this, t)
        }
    }
    function xn() {
        this.textContent = ""
    }
    function wn(t) {
        return function () {
            this.textContent = t
        }
    }
    function kn(t) {
        return function () {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e
        }
    }
    function Mn() {
        this.innerHTML = ""
    }
    function Sn(t) {
        return function () {
            this.innerHTML = t
        }
    }
    function Ln(t) {
        return function () {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e
        }
    }
    function Tn() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function zn() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function An() {
        return null
    }
    function _n() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function Pn() {
        var t = this.cloneNode(!1)
            , e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t
    }
    function Cn() {
        var t = this.cloneNode(!0)
            , e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t
    }
    function Nn(t) {
        return t.trim().split(/^|\s+/).map((function (t) {
            var e = ""
                , r = t.indexOf(".");
            return r >= 0 && (e = t.slice(r + 1),
                t = t.slice(0, r)),
            {
                type: t,
                name: e
            }
        }
        ))
    }
    function $n(t) {
        return function () {
            var e = this.__on;
            if (e) {
                for (var r, n = 0, i = -1, o = e.length; n < o; ++n)
                    r = e[n],
                        t.type && r.type !== t.type || r.name !== t.name ? e[++i] = r : this.removeEventListener(r.type, r.listener, r.options);
                ++i ? e.length = i : delete this.__on
            }
        }
    }
    function Bn(t, e, r) {
        return function () {
            var n, i = this.__on, o = function (t) {
                return function (e) {
                    t.call(this, e, this.__data__)
                }
            }(e);
            if (i)
                for (var a = 0, s = i.length; a < s; ++a)
                    if ((n = i[a]).type === t.type && n.name === t.name)
                        return this.removeEventListener(n.type, n.listener, n.options),
                            this.addEventListener(n.type, n.listener = o, n.options = r),
                            void (n.value = e);
            this.addEventListener(t.type, o, r),
                n = {
                    type: t.type,
                    name: t.name,
                    value: e,
                    listener: o,
                    options: r
                },
                i ? i.push(n) : this.__on = [n]
        }
    }
    function qn(t, e, r) {
        var n = nn(t)
            , i = n.CustomEvent;
        "function" == typeof i ? i = new i(e, r) : (i = n.document.createEvent("Event"),
            r ? (i.initEvent(e, r.bubbles, r.cancelable),
                i.detail = r.detail) : i.initEvent(e, !1, !1)),
            t.dispatchEvent(i)
    }
    function En(t, e) {
        return function () {
            return qn(this, t, e)
        }
    }
    function In(t, e) {
        return function () {
            return qn(this, t, e.apply(this, arguments))
        }
    }
    Ur.prototype = {
        constructor: Ur,
        appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function (t, e) {
            return this._parent.insertBefore(t, e)
        },
        querySelector: function (t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    },
        dn.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function (t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };
    var Rn = [null];
    function On(t, e) {
        this._groups = t,
            this._parents = e
    }
    function Hn() {
        return new On([[document.documentElement]], Rn)
    }
    function Dn(t) {
        return "string" == typeof t ? new On([document.querySelectorAll(t)], [document.documentElement]) : new On([null == t ? [] : qr(t)], Rn)
    }
    On.prototype = Hn.prototype = {
        constructor: On,
        select: function (t) {
            "function" != typeof t && (t = Br(t));
            for (var e = this._groups, r = e.length, n = new Array(r), i = 0; i < r; ++i)
                for (var o, a, s = e[i], l = s.length, h = n[i] = new Array(l), c = 0; c < l; ++c)
                    (o = s[c]) && (a = t.call(o, o.__data__, c, s)) && ("__data__" in o && (a.__data__ = o.__data__),
                        h[c] = a);
            return new On(n, this._parents)
        },
        selectAll: function (t) {
            t = "function" == typeof t ? function (t) {
                return function () {
                    var e = t.apply(this, arguments);
                    return null == e ? [] : qr(e)
                }
            }(t) : Ir(t);
            for (var e = this._groups, r = e.length, n = [], i = [], o = 0; o < r; ++o)
                for (var a, s = e[o], l = s.length, h = 0; h < l; ++h)
                    (a = s[h]) && (n.push(t.call(a, a.__data__, h, s)),
                        i.push(a));
            return new On(n, i)
        },
        selectChild: function (t) {
            return this.select(null == t ? Dr : function (t) {
                return function () {
                    return Hr.call(this.children, t)
                }
            }("function" == typeof t ? t : Or(t)))
        },
        selectChildren: function (t) {
            return this.selectAll(null == t ? Fr : function (t) {
                return function () {
                    return Wr.call(this.children, t)
                }
            }("function" == typeof t ? t : Or(t)))
        },
        filter: function (t) {
            "function" != typeof t && (t = Rr(t));
            for (var e = this._groups, r = e.length, n = new Array(r), i = 0; i < r; ++i)
                for (var o, a = e[i], s = a.length, l = n[i] = [], h = 0; h < s; ++h)
                    (o = a[h]) && t.call(o, o.__data__, h, a) && l.push(o);
            return new On(n, this._parents)
        },
        data: function (t, e) {
            if (!arguments.length)
                return Array.from(this, jr);
            var r = e ? Yr : Xr
                , n = this._parents
                , i = this._groups;
            "function" != typeof t && (t = Gr(t));
            for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
                var c = n[h]
                    , u = i[h]
                    , m = u.length
                    , p = qr(t.call(c, c && c.__data__, h, n))
                    , d = p.length
                    , f = s[h] = new Array(d)
                    , g = a[h] = new Array(d)
                    , b = l[h] = new Array(m);
                r(c, u, f, g, b, p, e);
                for (var y, v, x = 0, w = 0; x < d; ++x)
                    if (y = f[x]) {
                        for (x >= w && (w = x + 1); !(v = g[w]) && ++w < d;)
                            ;
                        y._next = v || null
                    }
            }
            return (a = new On(a, n))._enter = s,
                a._exit = l,
                a
        },
        enter: function () {
            return new On(this._enter || this._groups.map(Vr), this._parents)
        },
        exit: function () {
            return new On(this._exit || this._groups.map(Vr), this._parents)
        },
        join: function (t, e, r) {
            var n = this.enter()
                , i = this
                , o = this.exit();
            return n = "function" == typeof t ? t(n) : n.append(t + ""),
                null != e && (i = e(i)),
                null == r ? o.remove() : r(o),
                n && i ? n.merge(i).order() : i
        },
        merge: function (t) {
            if (!(t instanceof On))
                throw new Error("invalid merge");
            for (var e = this._groups, r = t._groups, n = e.length, i = r.length, o = Math.min(n, i), a = new Array(n), s = 0; s < o; ++s)
                for (var l, h = e[s], c = r[s], u = h.length, m = a[s] = new Array(u), p = 0; p < u; ++p)
                    (l = h[p] || c[p]) && (m[p] = l);
            for (; s < n; ++s)
                a[s] = e[s];
            return new On(a, this._parents)
        },
        selection: function () {
            return this
        },
        order: function () {
            for (var t = this._groups, e = -1, r = t.length; ++e < r;)
                for (var n, i = t[e], o = i.length - 1, a = i[o]; --o >= 0;)
                    (n = i[o]) && (a && 4 ^ n.compareDocumentPosition(a) && a.parentNode.insertBefore(n, a),
                        a = n);
            return this
        },
        sort: function (t) {
            function e(e, r) {
                return e && r ? t(e.__data__, r.__data__) : !e - !r
            }
            t || (t = Zr);
            for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o) {
                for (var a, s = r[o], l = s.length, h = i[o] = new Array(l), c = 0; c < l; ++c)
                    (a = s[c]) && (h[c] = a);
                h.sort(e)
            }
            return new On(i, this._parents).order()
        },
        call: function () {
            var t = arguments[0];
            return arguments[0] = this,
                t.apply(null, arguments),
                this
        },
        nodes: function () {
            return Array.from(this)
        },
        node: function () {
            for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
                for (var n = t[e], i = 0, o = n.length; i < o; ++i) {
                    var a = n[i];
                    if (a)
                        return a
                }
            return null
        },
        size: function () {
            let t = 0;
            for (const e of this)
                ++t;
            return t
        },
        empty: function () {
            return !this.node()
        },
        each: function (t) {
            for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
                for (var i, o = e[r], a = 0, s = o.length; a < s; ++a)
                    (i = o[a]) && t.call(i, i.__data__, a, o);
            return this
        },
        attr: function (t, e) {
            var r = _r(t);
            if (arguments.length < 2) {
                var n = this.node();
                return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r)
            }
            return this.each((null == e ? r.local ? Jr : Kr : "function" == typeof e ? r.local ? rn : en : r.local ? tn : Qr)(r, e))
        },
        style: function (t, e, r) {
            return arguments.length > 1 ? this.each((null == e ? on : "function" == typeof e ? sn : an)(t, e, null == r ? "" : r)) : ln(this.node(), t)
        },
        property: function (t, e) {
            return arguments.length > 1 ? this.each((null == e ? hn : "function" == typeof e ? un : cn)(t, e)) : this.node()[t]
        },
        classed: function (t, e) {
            var r = mn(t + "");
            if (arguments.length < 2) {
                for (var n = pn(this.node()), i = -1, o = r.length; ++i < o;)
                    if (!n.contains(r[i]))
                        return !1;
                return !0
            }
            return this.each(("function" == typeof e ? vn : e ? bn : yn)(r, e))
        },
        text: function (t) {
            return arguments.length ? this.each(null == t ? xn : ("function" == typeof t ? kn : wn)(t)) : this.node().textContent
        },
        html: function (t) {
            return arguments.length ? this.each(null == t ? Mn : ("function" == typeof t ? Ln : Sn)(t)) : this.node().innerHTML
        },
        raise: function () {
            return this.each(Tn)
        },
        lower: function () {
            return this.each(zn)
        },
        append: function (t) {
            var e = "function" == typeof t ? t : Nr(t);
            return this.select((function () {
                return this.appendChild(e.apply(this, arguments))
            }
            ))
        },
        insert: function (t, e) {
            var r = "function" == typeof t ? t : Nr(t)
                , n = null == e ? An : "function" == typeof e ? e : Br(e);
            return this.select((function () {
                return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null)
            }
            ))
        },
        remove: function () {
            return this.each(_n)
        },
        clone: function (t) {
            return this.select(t ? Cn : Pn)
        },
        datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function (t, e, r) {
            var n, i, o = Nn(t + ""), a = o.length;
            if (!(arguments.length < 2)) {
                for (s = e ? Bn : $n,
                    n = 0; n < a; ++n)
                    this.each(s(o[n], e, r));
                return this
            }
            var s = this.node().__on;
            if (s)
                for (var l, h = 0, c = s.length; h < c; ++h)
                    for (n = 0,
                        l = s[h]; n < a; ++n)
                        if ((i = o[n]).type === l.type && i.name === l.name)
                            return l.value
        },
        dispatch: function (t, e) {
            return this.each(("function" == typeof e ? In : En)(t, e))
        },
        [Symbol.iterator]: function* () {
            for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
                for (var n, i = t[e], o = 0, a = i.length; o < a; ++o)
                    (n = i[o]) && (yield n)
        }
    };
    var Wn = {
        value: () => { }
    };
    function Fn() {
        for (var t, e = 0, r = arguments.length, n = {}; e < r; ++e) {
            if (!(t = arguments[e] + "") || t in n || /[\s.]/.test(t))
                throw new Error("illegal type: " + t);
            n[t] = []
        }
        return new Vn(n)
    }
    function Vn(t) {
        this._ = t
    }
    function Un(t, e) {
        return t.trim().split(/^|\s+/).map((function (t) {
            var r = ""
                , n = t.indexOf(".");
            if (n >= 0 && (r = t.slice(n + 1),
                t = t.slice(0, n)),
                t && !e.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            return {
                type: t,
                name: r
            }
        }
        ))
    }
    function Gn(t, e) {
        for (var r, n = 0, i = t.length; n < i; ++n)
            if ((r = t[n]).name === e)
                return r.value
    }
    function Xn(t, e, r) {
        for (var n = 0, i = t.length; n < i; ++n)
            if (t[n].name === e) {
                t[n] = Wn,
                    t = t.slice(0, n).concat(t.slice(n + 1));
                break
            }
        return null != r && t.push({
            name: e,
            value: r
        }),
            t
    }
    Vn.prototype = Fn.prototype = {
        constructor: Vn,
        on: function (t, e) {
            var r, n = this._, i = Un(t + "", n), o = -1, a = i.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e)
                    throw new Error("invalid callback: " + e);
                for (; ++o < a;)
                    if (r = (t = i[o]).type)
                        n[r] = Xn(n[r], t.name, e);
                    else if (null == e)
                        for (r in n)
                            n[r] = Xn(n[r], t.name, null);
                return this
            }
            for (; ++o < a;)
                if ((r = (t = i[o]).type) && (r = Gn(n[r], t.name)))
                    return r
        },
        copy: function () {
            var t = {}
                , e = this._;
            for (var r in e)
                t[r] = e[r].slice();
            return new Vn(t)
        },
        call: function (t, e) {
            if ((r = arguments.length - 2) > 0)
                for (var r, n, i = new Array(r), o = 0; o < r; ++o)
                    i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (o = 0,
                r = (n = this._[t]).length; o < r; ++o)
                n[o].value.apply(e, i)
        },
        apply: function (t, e, r) {
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (var n = this._[t], i = 0, o = n.length; i < o; ++i)
                n[i].value.apply(e, r)
        }
    };
    var Yn, jn, Zn = 0, Kn = 0, Jn = 0, Qn = 0, ti = 0, ei = 0, ri = "object" == typeof performance && performance.now ? performance : Date, ni = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
        setTimeout(t, 17)
    }
        ;
    function ii() {
        return ti || (ni(oi),
            ti = ri.now() + ei)
    }
    function oi() {
        ti = 0
    }
    function ai() {
        this._call = this._time = this._next = null
    }
    function si(t, e, r) {
        var n = new ai;
        return n.restart(t, e, r),
            n
    }
    function li() {
        ti = (Qn = ri.now()) + ei,
            Zn = Kn = 0;
        try {
            !function () {
                ii(),
                    ++Zn;
                for (var t, e = Yn; e;)
                    (t = ti - e._time) >= 0 && e._call.call(null, t),
                        e = e._next;
                --Zn
            }()
        } finally {
            Zn = 0,
                function () {
                    var t, e, r = Yn, n = 1 / 0;
                    for (; r;)
                        r._call ? (n > r._time && (n = r._time),
                            t = r,
                            r = r._next) : (e = r._next,
                                r._next = null,
                                r = t ? t._next = e : Yn = e);
                    jn = t,
                        ci(n)
                }(),
                ti = 0
        }
    }
    function hi() {
        var t = ri.now()
            , e = t - Qn;
        e > 1e3 && (ei -= e,
            Qn = t)
    }
    function ci(t) {
        Zn || (Kn && (Kn = clearTimeout(Kn)),
            t - ti > 24 ? (t < 1 / 0 && (Kn = setTimeout(li, t - ri.now() - ei)),
                Jn && (Jn = clearInterval(Jn))) : (Jn || (Qn = ri.now(),
                    Jn = setInterval(hi, 1e3)),
                    Zn = 1,
                    ni(li)))
    }
    function ui(t, e, r) {
        var n = new ai;
        return e = null == e ? 0 : +e,
            n.restart((r => {
                n.stop(),
                    t(r + e)
            }
            ), e, r),
            n
    }
    ai.prototype = si.prototype = {
        constructor: ai,
        restart: function (t, e, r) {
            if ("function" != typeof t)
                throw new TypeError("callback is not a function");
            r = (null == r ? ii() : +r) + (null == e ? 0 : +e),
                this._next || jn === this || (jn ? jn._next = this : Yn = this,
                    jn = this),
                this._call = t,
                this._time = r,
                ci()
        },
        stop: function () {
            this._call && (this._call = null,
                this._time = 1 / 0,
                ci())
        }
    };
    var mi = Fn("start", "end", "cancel", "interrupt")
        , pi = [];
    function di(t, e, r, n, i, o) {
        var a = t.__transition;
        if (a) {
            if (r in a)
                return
        } else
            t.__transition = {};
        !function (t, e, r) {
            var n, i = t.__transition;
            function o(t) {
                r.state = 1,
                    r.timer.restart(a, r.delay, r.time),
                    r.delay <= t && a(t - r.delay)
            }
            function a(o) {
                var h, c, u, m;
                if (1 !== r.state)
                    return l();
                for (h in i)
                    if ((m = i[h]).name === r.name) {
                        if (3 === m.state)
                            return ui(a);
                        4 === m.state ? (m.state = 6,
                            m.timer.stop(),
                            m.on.call("interrupt", t, t.__data__, m.index, m.group),
                            delete i[h]) : +h < e && (m.state = 6,
                                m.timer.stop(),
                                m.on.call("cancel", t, t.__data__, m.index, m.group),
                                delete i[h])
                    }
                if (ui((function () {
                    3 === r.state && (r.state = 4,
                        r.timer.restart(s, r.delay, r.time),
                        s(o))
                }
                )),
                    r.state = 2,
                    r.on.call("start", t, t.__data__, r.index, r.group),
                    2 === r.state) {
                    for (r.state = 3,
                        n = new Array(u = r.tween.length),
                        h = 0,
                        c = -1; h < u; ++h)
                        (m = r.tween[h].value.call(t, t.__data__, r.index, r.group)) && (n[++c] = m);
                    n.length = c + 1
                }
            }
            function s(e) {
                for (var i = e < r.duration ? r.ease.call(null, e / r.duration) : (r.timer.restart(l),
                    r.state = 5,
                    1), o = -1, a = n.length; ++o < a;)
                    n[o].call(t, i);
                5 === r.state && (r.on.call("end", t, t.__data__, r.index, r.group),
                    l())
            }
            function l() {
                for (var n in r.state = 6,
                    r.timer.stop(),
                    delete i[e],
                    i)
                    return;
                delete t.__transition
            }
            i[e] = r,
                r.timer = si(o, 0, r.time)
        }(t, r, {
            name: e,
            index: n,
            group: i,
            on: mi,
            tween: pi,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0
        })
    }
    function fi(t, e) {
        var r = bi(t, e);
        if (r.state > 0)
            throw new Error("too late; already scheduled");
        return r
    }
    function gi(t, e) {
        var r = bi(t, e);
        if (r.state > 3)
            throw new Error("too late; already running");
        return r
    }
    function bi(t, e) {
        var r = t.__transition;
        if (!r || !(r = r[e]))
            throw new Error("transition not found");
        return r
    }
    function yi(t, e) {
        var r, n;
        return function () {
            var i = gi(this, t)
                , o = i.tween;
            if (o !== r)
                for (var a = 0, s = (n = r = o).length; a < s; ++a)
                    if (n[a].name === e) {
                        (n = n.slice()).splice(a, 1);
                        break
                    }
            i.tween = n
        }
    }
    function vi(t, e, r) {
        var n, i;
        if ("function" != typeof r)
            throw new Error;
        return function () {
            var o = gi(this, t)
                , a = o.tween;
            if (a !== n) {
                i = (n = a).slice();
                for (var s = {
                    name: e,
                    value: r
                }, l = 0, h = i.length; l < h; ++l)
                    if (i[l].name === e) {
                        i[l] = s;
                        break
                    }
                l === h && i.push(s)
            }
            o.tween = i
        }
    }
    function xi(t, e, r) {
        var n = t._id;
        return t.each((function () {
            var t = gi(this, n);
            (t.value || (t.value = {}))[e] = r.apply(this, arguments)
        }
        )),
            function (t) {
                return bi(t, n).value[e]
            }
    }
    function wi(t, e) {
        var r;
        return ("number" == typeof e ? He : e instanceof xe ? Ee : (r = xe(e)) ? (e = r,
            Ee) : Ve)(t, e)
    }
    function ki(t) {
        return function () {
            this.removeAttribute(t)
        }
    }
    function Mi(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Si(t, e, r) {
        var n, i, o = r + "";
        return function () {
            var a = this.getAttribute(t);
            return a === o ? null : a === n ? i : i = e(n = a, r)
        }
    }
    function Li(t, e, r) {
        var n, i, o = r + "";
        return function () {
            var a = this.getAttributeNS(t.space, t.local);
            return a === o ? null : a === n ? i : i = e(n = a, r)
        }
    }
    function Ti(t, e, r) {
        var n, i, o;
        return function () {
            var a, s, l = r(this);
            if (null != l)
                return (a = this.getAttribute(t)) === (s = l + "") ? null : a === n && s === i ? o : (i = s,
                    o = e(n = a, l));
            this.removeAttribute(t)
        }
    }
    function zi(t, e, r) {
        var n, i, o;
        return function () {
            var a, s, l = r(this);
            if (null != l)
                return (a = this.getAttributeNS(t.space, t.local)) === (s = l + "") ? null : a === n && s === i ? o : (i = s,
                    o = e(n = a, l));
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function Ai(t, e) {
        return function (r) {
            this.setAttribute(t, e.call(this, r))
        }
    }
    function _i(t, e) {
        return function (r) {
            this.setAttributeNS(t.space, t.local, e.call(this, r))
        }
    }
    function Pi(t, e) {
        var r, n;
        function i() {
            var i = e.apply(this, arguments);
            return i !== n && (r = (n = i) && _i(t, i)),
                r
        }
        return i._value = e,
            i
    }
    function Ci(t, e) {
        var r, n;
        function i() {
            var i = e.apply(this, arguments);
            return i !== n && (r = (n = i) && Ai(t, i)),
                r
        }
        return i._value = e,
            i
    }
    function Ni(t, e) {
        return function () {
            fi(this, t).delay = +e.apply(this, arguments)
        }
    }
    function $i(t, e) {
        return e = +e,
            function () {
                fi(this, t).delay = e
            }
    }
    function Bi(t, e) {
        return function () {
            gi(this, t).duration = +e.apply(this, arguments)
        }
    }
    function qi(t, e) {
        return e = +e,
            function () {
                gi(this, t).duration = e
            }
    }
    function Ei(t, e) {
        if ("function" != typeof e)
            throw new Error;
        return function () {
            gi(this, t).ease = e
        }
    }
    function Ii(t, e, r) {
        var n, i, o = function (t) {
            return (t + "").trim().split(/^|\s+/).every((function (t) {
                var e = t.indexOf(".");
                return e >= 0 && (t = t.slice(0, e)),
                    !t || "start" === t
            }
            ))
        }(e) ? fi : gi;
        return function () {
            var a = o(this, t)
                , s = a.on;
            s !== n && (i = (n = s).copy()).on(e, r),
                a.on = i
        }
    }
    var Ri = Hn.prototype.constructor;
    function Oi(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }
    function Hi(t, e, r) {
        return function (n) {
            this.style.setProperty(t, e.call(this, n), r)
        }
    }
    function Di(t, e, r) {
        var n, i;
        function o() {
            var o = e.apply(this, arguments);
            return o !== i && (n = (i = o) && Hi(t, o, r)),
                n
        }
        return o._value = e,
            o
    }
    function Wi(t) {
        return function (e) {
            this.textContent = t.call(this, e)
        }
    }
    function Fi(t) {
        var e, r;
        function n() {
            var n = t.apply(this, arguments);
            return n !== r && (e = (r = n) && Wi(n)),
                e
        }
        return n._value = t,
            n
    }
    var Vi = 0;
    function Ui(t, e, r, n) {
        this._groups = t,
            this._parents = e,
            this._name = r,
            this._id = n
    }
    function Gi() {
        return ++Vi
    }
    var Xi = Hn.prototype;
    Ui.prototype = {
        constructor: Ui,
        select: function (t) {
            var e = this._name
                , r = this._id;
            "function" != typeof t && (t = Br(t));
            for (var n = this._groups, i = n.length, o = new Array(i), a = 0; a < i; ++a)
                for (var s, l, h = n[a], c = h.length, u = o[a] = new Array(c), m = 0; m < c; ++m)
                    (s = h[m]) && (l = t.call(s, s.__data__, m, h)) && ("__data__" in s && (l.__data__ = s.__data__),
                        u[m] = l,
                        di(u[m], e, r, m, u, bi(s, r)));
            return new Ui(o, this._parents, e, r)
        },
        selectAll: function (t) {
            var e = this._name
                , r = this._id;
            "function" != typeof t && (t = Ir(t));
            for (var n = this._groups, i = n.length, o = [], a = [], s = 0; s < i; ++s)
                for (var l, h = n[s], c = h.length, u = 0; u < c; ++u)
                    if (l = h[u]) {
                        for (var m, p = t.call(l, l.__data__, u, h), d = bi(l, r), f = 0, g = p.length; f < g; ++f)
                            (m = p[f]) && di(m, e, r, f, p, d);
                        o.push(p),
                            a.push(l)
                    }
            return new Ui(o, a, e, r)
        },
        filter: function (t) {
            "function" != typeof t && (t = Rr(t));
            for (var e = this._groups, r = e.length, n = new Array(r), i = 0; i < r; ++i)
                for (var o, a = e[i], s = a.length, l = n[i] = [], h = 0; h < s; ++h)
                    (o = a[h]) && t.call(o, o.__data__, h, a) && l.push(o);
            return new Ui(n, this._parents, this._name, this._id)
        },
        merge: function (t) {
            if (t._id !== this._id)
                throw new Error;
            for (var e = this._groups, r = t._groups, n = e.length, i = r.length, o = Math.min(n, i), a = new Array(n), s = 0; s < o; ++s)
                for (var l, h = e[s], c = r[s], u = h.length, m = a[s] = new Array(u), p = 0; p < u; ++p)
                    (l = h[p] || c[p]) && (m[p] = l);
            for (; s < n; ++s)
                a[s] = e[s];
            return new Ui(a, this._parents, this._name, this._id)
        },
        selection: function () {
            return new Ri(this._groups, this._parents)
        },
        transition: function () {
            for (var t = this._name, e = this._id, r = Gi(), n = this._groups, i = n.length, o = 0; o < i; ++o)
                for (var a, s = n[o], l = s.length, h = 0; h < l; ++h)
                    if (a = s[h]) {
                        var c = bi(a, e);
                        di(a, t, r, h, s, {
                            time: c.time + c.delay + c.duration,
                            delay: 0,
                            duration: c.duration,
                            ease: c.ease
                        })
                    }
            return new Ui(n, this._parents, t, r)
        },
        call: Xi.call,
        nodes: Xi.nodes,
        node: Xi.node,
        size: Xi.size,
        empty: Xi.empty,
        each: Xi.each,
        on: function (t, e) {
            var r = this._id;
            return arguments.length < 2 ? bi(this.node(), r).on.on(t) : this.each(Ii(r, t, e))
        },
        attr: function (t, e) {
            var r = _r(t)
                , n = "transform" === r ? Qe : wi;
            return this.attrTween(t, "function" == typeof e ? (r.local ? zi : Ti)(r, n, xi(this, "attr." + t, e)) : null == e ? (r.local ? Mi : ki)(r) : (r.local ? Li : Si)(r, n, e))
        },
        attrTween: function (t, e) {
            var r = "attr." + t;
            if (arguments.length < 2)
                return (r = this.tween(r)) && r._value;
            if (null == e)
                return this.tween(r, null);
            if ("function" != typeof e)
                throw new Error;
            var n = _r(t);
            return this.tween(r, (n.local ? Pi : Ci)(n, e))
        },
        style: function (t, e, r) {
            var n = "transform" == (t += "") ? Je : wi;
            return null == e ? this.styleTween(t, function (t, e) {
                var r, n, i;
                return function () {
                    var o = ln(this, t)
                        , a = (this.style.removeProperty(t),
                            ln(this, t));
                    return o === a ? null : o === r && a === n ? i : i = e(r = o, n = a)
                }
            }(t, n)).on("end.style." + t, Oi(t)) : "function" == typeof e ? this.styleTween(t, function (t, e, r) {
                var n, i, o;
                return function () {
                    var a = ln(this, t)
                        , s = r(this)
                        , l = s + "";
                    return null == s && (this.style.removeProperty(t),
                        l = s = ln(this, t)),
                        a === l ? null : a === n && l === i ? o : (i = l,
                            o = e(n = a, s))
                }
            }(t, n, xi(this, "style." + t, e))).each(function (t, e) {
                var r, n, i, o, a = "style." + e, s = "end." + a;
                return function () {
                    var l = gi(this, t)
                        , h = l.on
                        , c = null == l.value[a] ? o || (o = Oi(e)) : void 0;
                    h === r && i === c || (n = (r = h).copy()).on(s, i = c),
                        l.on = n
                }
            }(this._id, t)) : this.styleTween(t, function (t, e, r) {
                var n, i, o = r + "";
                return function () {
                    var a = ln(this, t);
                    return a === o ? null : a === n ? i : i = e(n = a, r)
                }
            }(t, n, e), r).on("end.style." + t, null)
        },
        styleTween: function (t, e, r) {
            var n = "style." + (t += "");
            if (arguments.length < 2)
                return (n = this.tween(n)) && n._value;
            if (null == e)
                return this.tween(n, null);
            if ("function" != typeof e)
                throw new Error;
            return this.tween(n, Di(t, e, null == r ? "" : r))
        },
        text: function (t) {
            return this.tween("text", "function" == typeof t ? function (t) {
                return function () {
                    var e = t(this);
                    this.textContent = null == e ? "" : e
                }
            }(xi(this, "text", t)) : function (t) {
                return function () {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        textTween: function (t) {
            var e = "text";
            if (arguments.length < 1)
                return (e = this.tween(e)) && e._value;
            if (null == t)
                return this.tween(e, null);
            if ("function" != typeof t)
                throw new Error;
            return this.tween(e, Fi(t))
        },
        remove: function () {
            return this.on("end.remove", function (t) {
                return function () {
                    var e = this.parentNode;
                    for (var r in this.__transition)
                        if (+r !== t)
                            return;
                    e && e.removeChild(this)
                }
            }(this._id))
        },
        tween: function (t, e) {
            var r = this._id;
            if (t += "",
                arguments.length < 2) {
                for (var n, i = bi(this.node(), r).tween, o = 0, a = i.length; o < a; ++o)
                    if ((n = i[o]).name === t)
                        return n.value;
                return null
            }
            return this.each((null == e ? yi : vi)(r, t, e))
        },
        delay: function (t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Ni : $i)(e, t)) : bi(this.node(), e).delay
        },
        duration: function (t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Bi : qi)(e, t)) : bi(this.node(), e).duration
        },
        ease: function (t) {
            var e = this._id;
            return arguments.length ? this.each(Ei(e, t)) : bi(this.node(), e).ease
        },
        easeVarying: function (t) {
            if ("function" != typeof t)
                throw new Error;
            return this.each(function (t, e) {
                return function () {
                    var r = e.apply(this, arguments);
                    if ("function" != typeof r)
                        throw new Error;
                    gi(this, t).ease = r
                }
            }(this._id, t))
        },
        end: function () {
            var t, e, r = this, n = r._id, i = r.size();
            return new Promise((function (o, a) {
                var s = {
                    value: a
                }
                    , l = {
                        value: function () {
                            0 == --i && o()
                        }
                    };
                r.each((function () {
                    var r = gi(this, n)
                        , i = r.on;
                    i !== t && ((e = (t = i).copy())._.cancel.push(s),
                        e._.interrupt.push(s),
                        e._.end.push(l)),
                        r.on = e
                }
                )),
                    0 === i && o()
            }
            ))
        },
        [Symbol.iterator]: Xi[Symbol.iterator]
    };
    var Yi = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
    };
    function ji(t, e) {
        for (var r; !(r = t.__transition) || !(r = r[e]);)
            if (!(t = t.parentNode))
                throw new Error(`transition ${e} not found`);
        return r
    }
    Hn.prototype.interrupt = function (t) {
        return this.each((function () {
            !function (t, e) {
                var r, n, i, o = t.__transition, a = !0;
                if (o) {
                    for (i in e = null == e ? null : e + "",
                        o)
                        (r = o[i]).name === e ? (n = r.state > 2 && r.state < 5,
                            r.state = 6,
                            r.timer.stop(),
                            r.on.call(n ? "interrupt" : "cancel", t, t.__data__, r.index, r.group),
                            delete o[i]) : a = !1;
                    a && delete t.__transition
                }
            }(this, t)
        }
        ))
    }
        ,
        Hn.prototype.transition = function (t) {
            var e, r;
            t instanceof Ui ? (e = t._id,
                t = t._name) : (e = Gi(),
                    (r = Yi).time = ii(),
                    t = null == t ? null : t + "");
            for (var n = this._groups, i = n.length, o = 0; o < i; ++o)
                for (var a, s = n[o], l = s.length, h = 0; h < l; ++h)
                    (a = s[h]) && di(a, t, e, h, s, r || ji(a, e));
            return new Ui(n, this._parents, t, e)
        }
        ;
    const Zi = Math.PI
        , Ki = 2 * Zi
        , Ji = 1e-6
        , Qi = Ki - Ji;
    function to() {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = ""
    }
    function eo() {
        return new to
    }
    function ro(t) {
        return function () {
            return t
        }
    }
    function no(t) {
        this._context = t
    }
    function io(t) {
        return new no(t)
    }
    function oo(t) {
        return t[0]
    }
    function ao(t) {
        return t[1]
    }
    function so(t, e) {
        var r = ro(!0)
            , n = null
            , i = io
            , o = null;
        function a(a) {
            var s, l, h, c = (a = function (t) {
                return "object" == typeof t && "length" in t ? t : Array.from(t)
            }(a)).length, u = !1;
            for (null == n && (o = i(h = eo())),
                s = 0; s <= c; ++s)
                !(s < c && r(l = a[s], s, a)) === u && ((u = !u) ? o.lineStart() : o.lineEnd()),
                    u && o.point(+t(l, s, a), +e(l, s, a));
            if (h)
                return o = null,
                    h + "" || null
        }
        return t = "function" == typeof t ? t : void 0 === t ? oo : ro(t),
            e = "function" == typeof e ? e : void 0 === e ? ao : ro(e),
            a.x = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : ro(+e),
                    a) : t
            }
            ,
            a.y = function (t) {
                return arguments.length ? (e = "function" == typeof t ? t : ro(+t),
                    a) : e
            }
            ,
            a.defined = function (t) {
                return arguments.length ? (r = "function" == typeof t ? t : ro(!!t),
                    a) : r
            }
            ,
            a.curve = function (t) {
                return arguments.length ? (i = t,
                    null != n && (o = i(n)),
                    a) : i
            }
            ,
            a.context = function (t) {
                return arguments.length ? (null == t ? n = o = null : o = i(n = t),
                    a) : n
            }
            ,
            a
    }
    function lo(t, e, r) {
        const n = t.slice();
        return n[17] = e[r],
            n[19] = r,
            n
    }
    function ho(t, e, r) {
        const n = t.slice();
        return n[20] = e[r],
            n
    }
    function co(t, e, r) {
        const n = t.slice();
        return n[20] = e[r],
            n
    }
    function uo(t, e, r) {
        const n = t.slice();
        return n[25] = e[r],
            n
    }
    function mo(t, e, r) {
        const n = t.slice();
        return n[25] = e[r],
            n
    }
    function po(t) {
        let e, r, n, i, o, a, s = t[25] + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-139wp13"),
                    T(r, "x1", "0"),
                    T(r, "x2", "0"),
                    T(r, "y1", "0"),
                    T(r, "y2", n = -t[1] + t[8].bottom + t[8].top),
                    T(i, "class", "axis-text svelte-139wp13"),
                    T(i, "y", "15"),
                    T(i, "text-anchor", "middle"),
                    T(i, "dy", "5"),
                    T(e, "transform", a = `translate(${t[3](t[25])}, ${t[1] - t[8].bottom})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                2 & i && n !== (n = -t[1] + t[8].bottom + t[8].top) && T(r, "y2", n),
                    8 & i && s !== (s = t[25] + "") && A(o, s),
                    10 & i && a !== (a = `translate(${t[3](t[25])}, ${t[1] - t[8].bottom})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function fo(t) {
        let e, r, n, i, o, a, s = t[10](t[25]) + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-139wp13"),
                    T(r, "x1", "0"),
                    T(r, "x2", n = t[0] - t[8].left - t[8].right),
                    T(r, "y1", "0"),
                    T(r, "y2", "0"),
                    T(i, "class", "axis-text svelte-139wp13"),
                    T(i, "text-anchor", "end"),
                    T(i, "dx", "-5"),
                    T(i, "dominant-baseline", "middle"),
                    T(e, "transform", a = `translate(${t[8].left}, ${t[2](t[25])})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                1 & i && n !== (n = t[0] - t[8].left - t[8].right) && T(r, "x2", n),
                    4 & i && s !== (s = t[10](t[25]) + "") && A(o, s),
                    4 & i && a !== (a = `translate(${t[8].left}, ${t[2](t[25])})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function go(e) {
        let r, n, i;
        return {
            c() {
                r = w("path"),
                    T(r, "class", "y1-arrow"),
                    T(r, "d", n = e[20]),
                    T(r, "style", i = "transform: rotate(-90deg) scale(0.8)"),
                    T(r, "stroke", "#ff9900"),
                    T(r, "fill", "#ff9900")
            },
            m(t, e) {
                b(t, r, e)
            },
            p: t,
            d(t) {
                t && y(r)
            }
        }
    }
    function bo(e) {
        let r, n, i;
        return {
            c() {
                r = w("path"),
                    T(r, "class", "y0-arrow"),
                    T(r, "d", n = e[20]),
                    T(r, "style", i = "transform: rotate(-90deg) scale(0.8)"),
                    T(r, "stroke", "#003181"),
                    T(r, "fill", "#003181")
            },
            m(t, e) {
                b(t, r, e)
            },
            p: t,
            d(t) {
                t && y(r)
            }
        }
    }
    function yo(t) {
        let e, r, n, i, o, a, s = t[9][t[19]] + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "x1", "-5"),
                    T(r, "y1", "0"),
                    T(r, "x2", "15"),
                    T(r, "y2", "0"),
                    T(r, "class", "legend-line svelte-139wp13"),
                    T(r, "stroke-width", "3"),
                    T(r, "stroke", n = t[5](t[19])),
                    T(i, "class", "legend-text svelte-139wp13"),
                    T(i, "dominant-baseline", "middle"),
                    T(i, "x", "20"),
                    T(e, "transform", a = `translate(${75 * t[19]} 0)`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, e) {
                32 & e && n !== (n = t[5](t[19])) && T(r, "stroke", n)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function vo(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, M, L, z, _, P, C, N, $, B, E, I, R, O, H, D, W, F, V, G, X, Y, j, Z, K, J, Q, tt, et, rt = e[11](e[7] ? -Math.log(1 - e[6]) : -Math.log(e[6])) + "", nt = e[3].ticks(), it = [];
        for (let t = 0; t < nt.length; t += 1)
            it[t] = po(mo(e, nt, t));
        let ot = e[2].ticks()
            , at = [];
        for (let t = 0; t < ot.length; t += 1)
            at[t] = fo(uo(e, ot, t));
        let st = e[12]
            , lt = [];
        for (let t = 0; t < st.length; t += 1)
            lt[t] = go(co(e, st, t));
        let ht = e[12]
            , ct = [];
        for (let t = 0; t < ht.length; t += 1)
            ct[t] = bo(ho(e, ht, t));
        let ut = e[9]
            , mt = [];
        for (let t = 0; t < ut.length; t += 1)
            mt[t] = yo(lo(e, ut, t));
        return {
            c() {
                r = x("div"),
                    n = w("svg");
                for (let t = 0; t < it.length; t += 1)
                    it[t].c();
                i = S();
                for (let t = 0; t < at.length; t += 1)
                    at[t].c();
                o = w("line"),
                    h = w("line"),
                    u = w("path"),
                    d = w("path"),
                    L = w("g"),
                    z = w("circle"),
                    C = w("g"),
                    N = w("g");
                for (let t = 0; t < lt.length; t += 1)
                    lt[t].c();
                $ = w("text"),
                    B = k("To Infinity"),
                    E = w("g"),
                    I = w("g");
                for (let t = 0; t < ct.length; t += 1)
                    ct[t].c();
                R = w("text"),
                    O = k("To Infinity"),
                    D = w("text"),
                    W = k("Log-Loss\n    "),
                    V = w("text"),
                    G = k("Predicted Probability\n    "),
                    j = w("g");
                for (let t = 0; t < mt.length; t += 1)
                    mt[t].c();
                Z = w("text"),
                    K = k(rt),
                    T(o, "class", "axis-line svelte-139wp13"),
                    T(o, "x1", e[8].left),
                    T(o, "x2", a = e[0] - e[8].right),
                    T(o, "y1", s = e[1] - e[8].bottom),
                    T(o, "y2", l = e[1] - e[8].bottom),
                    T(h, "class", "axis-line svelte-139wp13"),
                    T(h, "x1", e[8].left),
                    T(h, "x2", e[8].left),
                    T(h, "y1", c = e[1] - e[8].bottom),
                    T(h, "y2", e[8].top),
                    T(u, "id", "loss-line-0"),
                    T(u, "class", "loss-line svelte-139wp13"),
                    T(u, "d", m = e[4](Dt)),
                    T(u, "stroke-width", "3"),
                    T(u, "stroke", p = e[5](0)),
                    T(d, "id", "loss-line-1"),
                    T(d, "class", "loss-line svelte-139wp13"),
                    T(d, "d", f = e[4](Wt)),
                    T(d, "stroke-width", "3"),
                    T(d, "stroke", M = e[5](1)),
                    T(z, "class", "example-circle"),
                    T(z, "r", "10"),
                    T(z, "cx", _ = e[3](e[6])),
                    T(z, "cy", P = e[7] ? e[2](-Math.log(1 - e[6])) : e[2](-Math.log(e[6]))),
                    T(z, "fill", "var(--sky)"),
                    T(z, "opacity", "1"),
                    T(L, "transform", "translate(0, 0)"),
                    T($, "class", "arrow-text svelte-139wp13"),
                    T($, "x", "25"),
                    T($, "y", "0"),
                    T($, "dominant-baseline", "middle"),
                    T(N, "transform", "translate(-40 16)"),
                    T(C, "class", "arrow-holder svelte-139wp13"),
                    T(C, "transform", `translate(${e[8].left + 55} ${e[8].top + 7})`),
                    T(R, "class", "arrow-text svelte-139wp13"),
                    T(R, "x", "-70"),
                    T(R, "y", "0"),
                    T(R, "dominant-baseline", "middle"),
                    T(I, "transform", "translate(-40 16)"),
                    T(E, "class", "arrow-holder svelte-139wp13"),
                    T(E, "transform", H = `translate(${e[0] - 35} ${e[8].top + 7})`),
                    T(D, "class", "axis-label svelte-139wp13"),
                    T(D, "text-anchor", "middle"),
                    T(D, "transform", F = `translate(25,${e[2](2.5)}) rotate(-90)`),
                    T(V, "class", "axis-label svelte-139wp13"),
                    T(V, "text-anchor", "middle"),
                    T(V, "x", X = e[3](.5)),
                    T(V, "y", Y = e[1] - 10),
                    T(j, "transform", `translate(${e[8].left + 5}, 20)`),
                    T(Z, "class", "loss-text svelte-139wp13"),
                    T(Z, "x", J = e[3](e[6]) + 10),
                    T(Z, "y", Q = e[7] ? e[2](-Math.log(1 - e[6])) : e[2](-Math.log(e[6]))),
                    T(n, "width", e[0]),
                    T(n, "height", tt = e[1] + e[8].top + e[8].bottom),
                    T(n, "class", "svelte-139wp13"),
                    T(r, "id", "loss-chart"),
                    T(r, "class", "svelte-139wp13"),
                    U((() => e[13].call(r)))
            },
            m(t, a) {
                b(t, r, a),
                    g(r, n);
                for (let t = 0; t < it.length; t += 1)
                    it[t].m(n, null);
                g(n, i);
                for (let t = 0; t < at.length; t += 1)
                    at[t].m(n, null);
                g(n, o),
                    g(n, h),
                    g(n, u),
                    g(n, d),
                    g(n, L),
                    g(L, z),
                    g(n, C),
                    g(C, N);
                for (let t = 0; t < lt.length; t += 1)
                    lt[t].m(N, null);
                g(N, $),
                    g($, B),
                    g(n, E),
                    g(E, I);
                for (let t = 0; t < ct.length; t += 1)
                    ct[t].m(I, null);
                g(I, R),
                    g(R, O),
                    g(n, D),
                    g(D, W),
                    g(n, V),
                    g(V, G),
                    g(n, j);
                for (let t = 0; t < mt.length; t += 1)
                    mt[t].m(j, null);
                g(n, Z),
                    g(Z, K),
                    et = q(r, e[13].bind(r))
            },
            p(t, [e]) {
                if (266 & e) {
                    let r;
                    for (nt = t[3].ticks(),
                        r = 0; r < nt.length; r += 1) {
                        const o = mo(t, nt, r);
                        it[r] ? it[r].p(o, e) : (it[r] = po(o),
                            it[r].c(),
                            it[r].m(n, i))
                    }
                    for (; r < it.length; r += 1)
                        it[r].d(1);
                    it.length = nt.length
                }
                if (1285 & e) {
                    let r;
                    for (ot = t[2].ticks(),
                        r = 0; r < ot.length; r += 1) {
                        const i = uo(t, ot, r);
                        at[r] ? at[r].p(i, e) : (at[r] = fo(i),
                            at[r].c(),
                            at[r].m(n, o))
                    }
                    for (; r < at.length; r += 1)
                        at[r].d(1);
                    at.length = ot.length
                }
                if (1 & e && a !== (a = t[0] - t[8].right) && T(o, "x2", a),
                    2 & e && s !== (s = t[1] - t[8].bottom) && T(o, "y1", s),
                    2 & e && l !== (l = t[1] - t[8].bottom) && T(o, "y2", l),
                    2 & e && c !== (c = t[1] - t[8].bottom) && T(h, "y1", c),
                    16 & e && m !== (m = t[4](Dt)) && T(u, "d", m),
                    32 & e && p !== (p = t[5](0)) && T(u, "stroke", p),
                    16 & e && f !== (f = t[4](Wt)) && T(d, "d", f),
                    32 & e && M !== (M = t[5](1)) && T(d, "stroke", M),
                    72 & e && _ !== (_ = t[3](t[6])) && T(z, "cx", _),
                    196 & e && P !== (P = t[7] ? t[2](-Math.log(1 - t[6])) : t[2](-Math.log(t[6]))) && T(z, "cy", P),
                    4096 & e) {
                    let r;
                    for (st = t[12],
                        r = 0; r < st.length; r += 1) {
                        const n = co(t, st, r);
                        lt[r] ? lt[r].p(n, e) : (lt[r] = go(n),
                            lt[r].c(),
                            lt[r].m(N, $))
                    }
                    for (; r < lt.length; r += 1)
                        lt[r].d(1);
                    lt.length = st.length
                }
                if (4096 & e) {
                    let r;
                    for (ht = t[12],
                        r = 0; r < ht.length; r += 1) {
                        const n = ho(t, ht, r);
                        ct[r] ? ct[r].p(n, e) : (ct[r] = bo(n),
                            ct[r].c(),
                            ct[r].m(I, R))
                    }
                    for (; r < ct.length; r += 1)
                        ct[r].d(1);
                    ct.length = ht.length
                }
                if (1 & e && H !== (H = `translate(${t[0] - 35} ${t[8].top + 7})`) && T(E, "transform", H),
                    4 & e && F !== (F = `translate(25,${t[2](2.5)}) rotate(-90)`) && T(D, "transform", F),
                    8 & e && X !== (X = t[3](.5)) && T(V, "x", X),
                    2 & e && Y !== (Y = t[1] - 10) && T(V, "y", Y),
                    544 & e) {
                    let r;
                    for (ut = t[9],
                        r = 0; r < ut.length; r += 1) {
                        const n = lo(t, ut, r);
                        mt[r] ? mt[r].p(n, e) : (mt[r] = yo(n),
                            mt[r].c(),
                            mt[r].m(j, null))
                    }
                    for (; r < mt.length; r += 1)
                        mt[r].d(1);
                    mt.length = ut.length
                }
                192 & e && rt !== (rt = t[11](t[7] ? -Math.log(1 - t[6]) : -Math.log(t[6])) + "") && A(K, rt),
                    72 & e && J !== (J = t[3](t[6]) + 10) && T(Z, "x", J),
                    196 & e && Q !== (Q = t[7] ? t[2](-Math.log(1 - t[6])) : t[2](-Math.log(t[6]))) && T(Z, "y", Q),
                    1 & e && T(n, "width", t[0]),
                    2 & e && tt !== (tt = t[1] + t[8].top + t[8].bottom) && T(n, "height", tt)
            },
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    v(it, t),
                    v(at, t),
                    v(lt, t),
                    v(ct, t),
                    v(mt, t),
                    et()
            }
        }
    }
    function xo(t, e, r) {
        let n, i, o, a, s, h;
        l(t, vt, (t => r(6, s = t))),
            l(t, xt, (t => r(7, h = t)));
        let c = 500
            , u = 500;
        const m = {
            top: 50,
            right: 40,
            bottom: 50,
            left: 70
        }
            , p = vr(".1f")
            , d = vr(".2f");
        return t.$$.update = () => {
            1 & t.$$.dirty && r(3, n = Tr().domain([0, 1]).range([m.left, c - m.right])),
                2 & t.$$.dirty && r(2, i = Tr().domain([0, 5]).range([u - m.bottom, m.top])),
                12 & t.$$.dirty && r(4, a = so().x((t => n(t.Probability))).y((t => i(t.LogLoss))))
        }
            ,
            r(5, o = ee().domain([0, 1]).range(["#003181", "#ff9900"])),
            [c, u, i, n, a, o, s, h, m, ["y=0", "y=1"], p, d, ["M0.200275 13.2782C0.200275 12.4153 0.89983 11.7157 1.76278 11.7157H23.6378C24.5007 11.7157 25.2003 12.4153 25.2003 13.2782C25.2003 14.1411 24.5007 14.8407 23.6378 14.8407H1.76278C0.89983 14.8407 0.200275 14.1411 0.200275 13.2782Z", "M11.5954 1.23584C12.2056 0.62565 13.1949 0.62565 13.8051 1.23584L24.7426 12.1733C25.3528 12.7835 25.3528 13.7729 24.7426 14.3831L13.8051 25.3206C13.1949 25.9307 12.2056 25.9307 11.5954 25.3206C10.9852 24.7104 10.9852 23.721 11.5954 23.1108L21.4281 13.2782L11.5954 3.44555C10.9852 2.83536 10.9852 1.84604 11.5954 1.23584Z", "M 11.5954 1.23584 C 12.2056 0.62565 13.1949 0.62565 13.8051 1.23584 L 24.7426 12.1733 C 25.3528 12.7835 25.3528 13.7729 24.7426 14.3831 L 13.8051 25.3206 C 13.1949 25.9307 12.2056 25.9307 11.5954 25.3206 C 10.9852 24.7104 10.9852 23.721 11.5954 23.1108 L 21.4281 13.2782 L 11.5954 3.44555 C 10.9852 2.83536 10.9852 1.84604 11.5954 1.23584 Z"], function () {
                c = this.offsetWidth,
                    u = this.offsetHeight,
                    r(0, c),
                    r(1, u)
            }
            ]
    }
    to.prototype = eo.prototype = {
        constructor: to,
        moveTo: function (t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
        },
        closePath: function () {
            null !== this._x1 && (this._x1 = this._x0,
                this._y1 = this._y0,
                this._ += "Z")
        },
        lineTo: function (t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
        },
        quadraticCurveTo: function (t, e, r, n) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +r) + "," + (this._y1 = +n)
        },
        bezierCurveTo: function (t, e, r, n, i, o) {
            this._ += "C" + +t + "," + +e + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +o)
        },
        arcTo: function (t, e, r, n, i) {
            t = +t,
                e = +e,
                r = +r,
                n = +n,
                i = +i;
            var o = this._x1
                , a = this._y1
                , s = r - t
                , l = n - e
                , h = o - t
                , c = a - e
                , u = h * h + c * c;
            if (i < 0)
                throw new Error("negative radius: " + i);
            if (null === this._x1)
                this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (u > Ji)
                if (Math.abs(c * s - l * h) > Ji && i) {
                    var m = r - o
                        , p = n - a
                        , d = s * s + l * l
                        , f = m * m + p * p
                        , g = Math.sqrt(d)
                        , b = Math.sqrt(u)
                        , y = i * Math.tan((Zi - Math.acos((d + u - f) / (2 * g * b))) / 2)
                        , v = y / b
                        , x = y / g;
                    Math.abs(v - 1) > Ji && (this._ += "L" + (t + v * h) + "," + (e + v * c)),
                        this._ += "A" + i + "," + i + ",0,0," + +(c * m > h * p) + "," + (this._x1 = t + x * s) + "," + (this._y1 = e + x * l)
                } else
                    this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else
                ;
        },
        arc: function (t, e, r, n, i, o) {
            t = +t,
                e = +e,
                o = !!o;
            var a = (r = +r) * Math.cos(n)
                , s = r * Math.sin(n)
                , l = t + a
                , h = e + s
                , c = 1 ^ o
                , u = o ? n - i : i - n;
            if (r < 0)
                throw new Error("negative radius: " + r);
            null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > Ji || Math.abs(this._y1 - h) > Ji) && (this._ += "L" + l + "," + h),
                r && (u < 0 && (u = u % Ki + Ki),
                    u > Qi ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (t - a) + "," + (e - s) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = l) + "," + (this._y1 = h) : u > Ji && (this._ += "A" + r + "," + r + ",0," + +(u >= Zi) + "," + c + "," + (this._x1 = t + r * Math.cos(i)) + "," + (this._y1 = e + r * Math.sin(i))))
        },
        rect: function (t, e, r, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +r + "v" + +n + "h" + -r + "Z"
        },
        toString: function () {
            return this._
        }
    },
        no.prototype = {
            areaStart: function () {
                this._line = 0
            },
            areaEnd: function () {
                this._line = NaN
            },
            lineStart: function () {
                this._point = 0
            },
            lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
                    this._line = 1 - this._line
            },
            point: function (t, e) {
                switch (t = +t,
                e = +e,
                this._point) {
                    case 0:
                        this._point = 1,
                            this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, e)
                }
            }
        };
    class wo extends lt {
        constructor(t) {
            super(),
                st(this, t, xo, vo, s, {})
        }
    }
    function ko(t) {
        let e, r, n, i, a, s, l, h, c, u, p, f, w, z, N, B, I, R, O, H, D, W, F, V, G, X, Y, j, Z, K, J, Q, rt, at, st, lt, ht, ct, ut, mt, pt, dt, ft, gt, bt, yt, vt, xt, wt, kt, Mt, St, Lt, Tt, zt, At, _t, Pt, Ct, Nt, $t, qt, Et, It, Rt, Ot, Ht, Dt, Wt = Bt(Mo, !0) + "", Ft = Bt("n") + "", Vt = Bt("i") + "", Ut = Bt("y_i") + "", Gt = Bt("i") + "", Xt = Bt("p_i") + "", Yt = Bt("i") + "", jt = Bt("y") + "", Zt = Bt("p = 0") + "", Kt = Bt("y = 0") + "", Jt = Bt("p = 1") + "", Qt = Bt("y = 1") + "", te = Bt("y") + "";
        return qt = new wo({
            props: {}
        }),
            t[5](qt),
        {
            c() {
                e = x("section"),
                    r = x("h1"),
                    n = M(),
                    i = x("p"),
                    a = M(),
                    s = x("br"),
                    l = x("br"),
                    h = M(),
                    c = x("p"),
                    u = k(" "),

                    p = k(""),

                    f = k("   "),

                    w = k(" "),

                    z = k("  "),

                    N = k(" "),

                    B = k(""),

                    I = k(""),
                    R = M(),
                    O = x("div"),
                    H = x("div"),
                    D = x("p"),
                    W = x("br"),
                    F = x("br"),
                    V = k("\n        This graph shows how the Log-Loss depends on the true value for\n        "),
                    G = new E(!1),
                    X = k(" and the predicted probability. You can see how as the\n        probability gets closer to the true value ("),
                    Y = new E(!1),
                    j = k(" when\n        "),
                    Z = new E(!1),
                    K = k(" and "),
                    J = new E(!1),
                    Q = k(" when\n        "),
                    rt = new E(!1),
                    at = k("), the Log-Loss decreases to 0. As the\n        probability gets further from the true value, the Log-Loss approaches\n        infinity."),
                    st = M(),
                    lt = x("br"),
                    ht = x("br"),
                    ct = M(),
                    ut = x("div"),
                    mt = x("label"),
                    pt = x("span"),
                    dt = k("Select true value for "),
                    ft = new E(!1),
                    gt = k(":"),
                    bt = M(),
                    yt = x("div"),
                    vt = x("select"),
                    xt = x("option"),
                    xt.textContent = "y = 0",
                    wt = x("option"),
                    wt.textContent = "y = 1",
                    kt = M(),
                    Mt = x("div"),
                    St = x("div"),
                    Lt = x("label"),
                    Tt = x("span"),
                    Tt.textContent = "Probability:",
                    zt = M(),
                    At = k(t[2]),
                    _t = M(),
                    Pt = x("input"),
                    Ct = M(),
                    Nt = x("div"),
                    $t = x("div"),
                    nt(qt.$$.fragment),
                    Et = M(),
                    It = x("br"),
                    Rt = x("br"),
                    T(r, "class", "body-header"),
                    T(i, "class", "body-text"),
                    m.a = p,
                    d.a = f,
                    v.a = w,
                    S.a = z,
                    P.a = N,
                    $.a = B,
                    q.a = I,
                    T(c, "class", "body-text"),
                    G.a = X,
                    Y.a = j,
                    Z.a = K,
                    J.a = Q,
                    rt.a = at,
                    T(D, "class", "body-text"),
                    ft.a = gt,
                    T(pt, "class", "bold"),
                    T(mt, "for", "true-select"),
                    T(mt, "class", "svelte-1fi3wsc"),
                    xt.__value = !0,
                    xt.value = xt.__value,
                    wt.__value = !1,
                    wt.value = wt.__value,
                    T(vt, "class", "true-select svelte-1fi3wsc"),
                    void 0 === t[1] && U((() => t[3].call(vt))),
                    T(yt, "class", "container svelte-1fi3wsc"),
                    T(ut, "class", "input-container svelte-1fi3wsc"),
                    T(Tt, "class", "bold"),
                    T(Lt, "for", "slider1"),
                    T(Lt, "class", "float-left svelte-1fi3wsc"),
                    T(Pt, "type", "range"),
                    T(Pt, "min", "0.01"),
                    T(Pt, "max", "0.99"),
                    T(Pt, "step", "0.01"),
                    T(Pt, "class", "slider svelte-1fi3wsc"),
                    T(Pt, "id", "slider1"),
                    T(St, "class", "input-container svelte-1fi3wsc"),
                    T(Mt, "id", "probability-slider"),
                    T(H, "id", "equations-container"),
                    T(H, "class", "svelte-1fi3wsc"),
                    T($t, "id", "ll-chart"),
                    T(Nt, "id", "charts-container"),
                    T(Nt, "class", "svelte-1fi3wsc"),
                    T(O, "id", "ll-container"),
                    T(O, "class", "svelte-1fi3wsc")
            },
            m(o, y) {
                b(o, e, y),
                    g(e, r),
                    g(e, n),
                    g(e, i),
                    g(e, a),
                    g(e, s),
                    g(e, l),
                    g(e, h),
                    g(e, c),
                    g(c, u),

                    g(c, p),

                    g(c, f),

                    g(c, w),

                    g(c, z),

                    g(c, N),

                    g(c, B),

                    g(c, I),
                    g(e, R),
                    g(e, O),
                    g(O, H),
                    g(H, D),
                    g(D, W),
                    g(D, F),
                    g(D, V),
                    G.m(jt, D),
                    g(D, X),
                    Y.m(Zt, D),
                    g(D, j),
                    Z.m(Kt, D),
                    g(D, K),
                    J.m(Jt, D),
                    g(D, Q),
                    rt.m(Qt, D),
                    g(D, at),
                    g(H, st),
                    g(H, lt),
                    g(H, ht),
                    g(H, ct),
                    g(H, ut),
                    g(ut, mt),
                    g(mt, pt),
                    g(pt, dt),
                    ft.m(te, pt),
                    g(pt, gt),
                    g(ut, bt),
                    g(ut, yt),
                    g(yt, vt),
                    g(vt, xt),
                    g(vt, wt),
                    C(vt, t[1]),
                    g(H, kt),
                    g(H, Mt),
                    g(Mt, St),
                    g(St, Lt),
                    g(Lt, Tt),
                    g(Lt, zt),
                    g(Lt, At),
                    g(St, _t),
                    g(St, Pt),
                    _(Pt, t[2]),
                    g(O, Ct),
                    g(O, Nt),
                    g(Nt, $t),
                    it(qt, $t, null),
                    g(e, Et),
                    g(e, It),
                    g(e, Rt),
                    Ot = !0,
                    Ht || (Dt = [L(vt, "change", t[3]), L(Pt, "change", t[4]), L(Pt, "input", t[4])],
                        Ht = !0)
            },
            p(t, [e]) {
                2 & e && C(vt, t[1]),
                    (!Ot || 4 & e) && A(At, t[2]),
                    4 & e && _(Pt, t[2]);
                qt.$set({})
            },
            i(t) {
                Ot || (tt(qt.$$.fragment, t),
                    Ot = !0)
            },
            o(t) {
                et(qt.$$.fragment, t),
                    Ot = !1
            },
            d(r) {
                r && y(e),
                    t[5](null),
                    ot(qt),
                    Ht = !1,
                    o(Dt)
            }
        }
    }
    const Mo = "\\textrm{Log-Loss} = \\sum_{i=0}^n - (y_i * \\textrm{log}(p_i) + (1-y_i)*\\textrm{log}(1-p_i))";
    function So(t, e, r) {
        let n, i, o;
        return l(t, xt, (t => r(1, n = t))),
            l(t, vt, (t => r(2, i = t))),
            [o, n, i, function () {
                n = function (t) {
                    const e = t.querySelector(":checked") || t.options[0];
                    return e && e.__value
                }(this),
                    xt.set(n)
            }
                , function () {
                    i = z(this.value),
                        vt.set(i)
                }
                , function (t) {
                    H[t ? "unshift" : "push"]((() => {
                        o = t,
                            r(0, o)
                    }
                    ))
                }
            ]
    }
    class Lo extends lt {
        constructor(t) {
            super(),
                st(this, t, So, ko, s, {})
        }
    }
    function To(t) {
        return "[object Date]" === Object.prototype.toString.call(t)
    }
    function zo(t, e) {
        if (t === e || t != t)
            return () => t;
        const r = typeof t;
        if (r !== typeof e || Array.isArray(t) !== Array.isArray(e))
            throw new Error("Cannot interpolate values of different type");
        if (Array.isArray(t)) {
            const r = e.map(((e, r) => zo(t[r], e)));
            return t => r.map((e => e(t)))
        }
        if ("object" === r) {
            if (!t || !e)
                throw new Error("Object cannot be null");
            if (To(t) && To(e)) {
                t = t.getTime();
                const r = (e = e.getTime()) - t;
                return e => new Date(t + e * r)
            }
            const r = Object.keys(e)
                , n = {};
            return r.forEach((r => {
                n[r] = zo(t[r], e[r])
            }
            )),
                t => {
                    const e = {};
                    return r.forEach((r => {
                        e[r] = n[r](t)
                    }
                    )),
                        e
                }
        }
        if ("number" === r) {
            const r = e - t;
            return e => t + e * r
        }
        throw new Error(`Cannot interpolate ${r} values`)
    }
    function Ao(t, n = {}) {
        const i = ct(t);
        let o, a = t;
        function s(s, l) {
            if (null == t)
                return i.set(t = s),
                    Promise.resolve();
            a = s;
            let h = o
                , c = !1
                , { delay: u = 0, duration: g = 400, easing: b = e, interpolate: y = zo } = r(r({}, n), l);
            if (0 === g)
                return h && (h.abort(),
                    h = null),
                    i.set(t = a),
                    Promise.resolve();
            const v = m() + u;
            let x;
            return o = function (t) {
                let e;
                return 0 === d.size && p(f),
                {
                    promise: new Promise((r => {
                        d.add(e = {
                            c: t,
                            f: r
                        })
                    }
                    )),
                    abort() {
                        d.delete(e)
                    }
                }
            }((e => {
                if (e < v)
                    return !0;
                c || (x = y(t, s),
                    "function" == typeof g && (g = g(t, s)),
                    c = !0),
                    h && (h.abort(),
                        h = null);
                const r = e - v;
                return r > g ? (i.set(t = s),
                    !1) : (i.set(t = x(b(r / g))),
                        !0)
            }
            )),
                o.promise
        }
        return {
            set: s,
            update: (e, r) => s(e(a, t), r),
            subscribe: i.subscribe
        }
    }
    function _o(t, e, r) {
        const n = t.slice();
        return n[22] = e[r],
            n
    }
    function Po(t, e, r) {
        const n = t.slice();
        return n[25] = e[r],
            n[27] = r,
            n
    }
    function Co(t, e, r) {
        const n = t.slice();
        return n[28] = e[r],
            n
    }
    function No(t, e, r) {
        const n = t.slice();
        return n[28] = e[r],
            n
    }
    function $o(t) {
        let e, r, n, i, o, a, s = t[10](t[28]) + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-hidv7p"),
                    T(r, "x1", "0"),
                    T(r, "x2", "0"),
                    T(r, "y1", "0"),
                    T(r, "y2", n = -t[0] + t[8].bottom + t[8].top),
                    T(r, "stroke", "black"),
                    T(r, "stroke-dasharray", "4"),
                    T(i, "class", "axis-text svelte-hidv7p"),
                    T(i, "y", "15"),
                    T(i, "text-anchor", "middle"),
                    T(e, "transform", a = `translate(${t[3](t[28])} ${t[0] - t[8].bottom})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                1 & i[0] && n !== (n = -t[0] + t[8].bottom + t[8].top) && T(r, "y2", n),
                    8 & i[0] && s !== (s = t[10](t[28]) + "") && A(o, s),
                    9 & i[0] && a !== (a = `translate(${t[3](t[28])} ${t[0] - t[8].bottom})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Bo(t) {
        let e, r, n, i, o, a, s, l = t[11](t[28]) + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    o = w("text"),
                    a = k(l),
                    T(r, "class", "grid-line svelte-hidv7p"),
                    T(r, "x1", n = 5),
                    T(r, "x2", i = t[1] - t[8].right),
                    T(r, "y1", "0"),
                    T(r, "y2", "0"),
                    T(r, "stroke", "black"),
                    T(r, "stroke-dasharray", "4"),
                    T(o, "class", "axis-text svelte-hidv7p"),
                    T(o, "y", "0"),
                    T(o, "text-anchor", "end"),
                    T(o, "dominant-baseline", "middle"),
                    T(e, "transform", s = `translate(${t[8].left - 5} ${t[2](t[28])})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, o),
                    g(o, a)
            },
            p(t, n) {
                2 & n[0] && i !== (i = t[1] - t[8].right) && T(r, "x2", i),
                    4 & n[0] && l !== (l = t[11](t[28]) + "") && A(a, l),
                    4 & n[0] && s !== (s = `translate(${t[8].left - 5} ${t[2](t[28])})`) && T(e, "transform", s)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function qo(t) {
        let e, r, n, i, o, a, s = t[9][t[27]] + "";
        return {
            c() {
                e = w("g"),
                    r = w("circle"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "legend-circle-gd"),
                    T(r, "r", "5"),
                    T(r, "fill", n = t[5](t[27])),
                    T(i, "class", "legend-text-gd svelte-hidv7p"),
                    T(i, "dominant-baseline", "middle"),
                    T(i, "x", "20"),
                    T(e, "transform", a = `translate(${110 * t[27]} 0)`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, e) {
                32 & e[0] && n !== (n = t[5](t[27])) && T(r, "fill", n)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Eo(t) {
        let e, r, n, i;
        return {
            c() {
                e = w("circle"),
                    T(e, "class", "regression-circle svelte-hidv7p"),
                    T(e, "stroke-width", "1.5"),
                    T(e, "r", "5"),
                    T(e, "cx", r = t[3](t[22].Temperature)),
                    T(e, "cy", n = t[2](t[22].Weather)),
                    T(e, "fill", i = t[5](t[22].Weather)),
                    T(e, "opacity", "1")
            },
            m(t, r) {
                b(t, e, r)
            },
            p(t, o) {
                72 & o[0] && r !== (r = t[3](t[22].Temperature)) && T(e, "cx", r),
                    68 & o[0] && n !== (n = t[2](t[22].Weather)) && T(e, "cy", n),
                    96 & o[0] && i !== (i = t[5](t[22].Weather)) && T(e, "fill", i)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Io(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, M, L, z, A, _, P = e[3].ticks(), C = [];
        for (let t = 0; t < P.length; t += 1)
            C[t] = $o(No(e, P, t));
        let N = e[2].ticks()
            , $ = [];
        for (let t = 0; t < N.length; t += 1)
            $[t] = Bo(Co(e, N, t));
        let B = e[9]
            , E = [];
        for (let t = 0; t < B.length; t += 1)
            E[t] = qo(Po(e, B, t));
        let I = e[6]
            , R = [];
        for (let t = 0; t < I.length; t += 1)
            R[t] = Eo(_o(e, I, t));
        return {
            c() {
                r = x("div"),
                    n = w("svg");
                for (let t = 0; t < C.length; t += 1)
                    C[t].c();
                i = S();
                for (let t = 0; t < $.length; t += 1)
                    $[t].c();
                o = w("line"),
                    l = w("line"),
                    c = w("text"),
                    u = k("Probability\n    "),
                    p = w("text"),
                    d = k("Temperature (Degrees Fahrenheit)\n    "),
                    M = w("g");
                for (let t = 0; t < E.length; t += 1)
                    E[t].c();
                for (let t = 0; t < R.length; t += 1)
                    R[t].c();
                L = w("path"),
                    T(o, "class", "axis-line"),
                    T(o, "y1", a = e[0] - e[8].bottom),
                    T(o, "y2", s = e[0] - e[8].bottom),
                    T(o, "x1", e[8].left),
                    T(o, "x2", e[1]),
                    T(o, "stroke", "black"),
                    T(o, "stroke-width", "1"),
                    T(l, "class", "axis-line"),
                    T(l, "y1", e[8].top),
                    T(l, "y2", h = e[0] - e[8].bottom),
                    T(l, "x1", e[8].left),
                    T(l, "x2", e[8].left),
                    T(l, "stroke", "black"),
                    T(l, "stroke-width", "1"),
                    T(c, "class", "axis-label svelte-hidv7p"),
                    T(c, "text-anchor", "middle"),
                    T(c, "transform", m = `translate(15,${e[2](.5)}) rotate(-90)`),
                    T(p, "class", "axis-label svelte-hidv7p"),
                    T(p, "text-anchor", "middle"),
                    T(p, "x", f = (e[1] + e[8].left) / 2),
                    T(p, "y", e[0]),
                    T(M, "transform", `translate(${e[8].left}, 20)`),
                    T(L, "class", "regression-line svelte-hidv7p"),
                    T(L, "d", z = e[4](e[6])),
                    T(n, "width", e[1]),
                    T(n, "height", A = e[0] + e[8].top + e[8].bottom),
                    T(r, "id", "scatter-chart"),
                    T(r, "class", "svelte-hidv7p"),
                    U((() => e[18].call(r)))
            },
            m(t, a) {
                b(t, r, a),
                    g(r, n);
                for (let t = 0; t < C.length; t += 1)
                    C[t].m(n, null);
                g(n, i);
                for (let t = 0; t < $.length; t += 1)
                    $[t].m(n, null);
                g(n, o),
                    g(n, l),
                    g(n, c),
                    g(c, u),
                    g(n, p),
                    g(p, d),
                    g(n, M);
                for (let t = 0; t < E.length; t += 1)
                    E[t].m(M, null);
                for (let t = 0; t < R.length; t += 1)
                    R[t].m(n, null);
                g(n, L),
                    _ = q(r, e[18].bind(r))
            },
            p(t, e) {
                if (1289 & e[0]) {
                    let r;
                    for (P = t[3].ticks(),
                        r = 0; r < P.length; r += 1) {
                        const o = No(t, P, r);
                        C[r] ? C[r].p(o, e) : (C[r] = $o(o),
                            C[r].c(),
                            C[r].m(n, i))
                    }
                    for (; r < C.length; r += 1)
                        C[r].d(1);
                    C.length = P.length
                }
                if (2310 & e[0]) {
                    let r;
                    for (N = t[2].ticks(),
                        r = 0; r < N.length; r += 1) {
                        const i = Co(t, N, r);
                        $[r] ? $[r].p(i, e) : ($[r] = Bo(i),
                            $[r].c(),
                            $[r].m(n, o))
                    }
                    for (; r < $.length; r += 1)
                        $[r].d(1);
                    $.length = N.length
                }
                if (1 & e[0] && a !== (a = t[0] - t[8].bottom) && T(o, "y1", a),
                    1 & e[0] && s !== (s = t[0] - t[8].bottom) && T(o, "y2", s),
                    2 & e[0] && T(o, "x2", t[1]),
                    1 & e[0] && h !== (h = t[0] - t[8].bottom) && T(l, "y2", h),
                    4 & e[0] && m !== (m = `translate(15,${t[2](.5)}) rotate(-90)`) && T(c, "transform", m),
                    2 & e[0] && f !== (f = (t[1] + t[8].left) / 2) && T(p, "x", f),
                    1 & e[0] && T(p, "y", t[0]),
                    544 & e[0]) {
                    let r;
                    for (B = t[9],
                        r = 0; r < B.length; r += 1) {
                        const n = Po(t, B, r);
                        E[r] ? E[r].p(n, e) : (E[r] = qo(n),
                            E[r].c(),
                            E[r].m(M, null))
                    }
                    for (; r < E.length; r += 1)
                        E[r].d(1);
                    E.length = B.length
                }
                if (108 & e[0]) {
                    let r;
                    for (I = t[6],
                        r = 0; r < I.length; r += 1) {
                        const i = _o(t, I, r);
                        R[r] ? R[r].p(i, e) : (R[r] = Eo(i),
                            R[r].c(),
                            R[r].m(n, L))
                    }
                    for (; r < R.length; r += 1)
                        R[r].d(1);
                    R.length = I.length
                }
                80 & e[0] && z !== (z = t[4](t[6])) && T(L, "d", z),
                    2 & e[0] && T(n, "width", t[1]),
                    1 & e[0] && A !== (A = t[0] + t[8].top + t[8].bottom) && T(n, "height", A)
            },
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    v(C, t),
                    v($, t),
                    v(E, t),
                    v(R, t),
                    _()
            }
        }
    }
    function Ro(t, r, n) {
        let i, o, a, s, h, u, m, p, d, f;
        l(t, dt, (t => n(13, h = t))),
            l(t, ft, (t => n(14, u = t))),
            l(t, bt, (t => n(15, m = t))),
            l(t, gt, (t => n(16, p = t))),
            l(t, yt, (t => n(17, d = t)));
        const g = t => 1 / (1 + Math.exp(-t))
            , b = Ao(Ot.map((t => ({
                Temperature: t.Temperature,
                y: g(u + h * t.Temperature),
                Weather: t.Weather
            }))), {
                duration: 200,
                easing: e
            });
        l(t, b, (t => n(6, f = t)));
        const y = {
            top: 40,
            right: 30,
            bottom: 30,
            left: 50
        };
        let v = 500
            , x = 500;
        const w = new Set(Ot.map((t => t.Weather)))
            , k = vr(".0f")
            , M = vr(".1f");
        return t.$$.update = () => {
            if (24576 & t.$$.dirty[0] && b.set(Ot.map((t => ({
                Temperature: t.Temperature,
                y: g(u + h * t.Temperature),
                Weather: t.Weather
            })))),
                253952 & t.$$.dirty[0]) {
                c(gt, p += 1, p);
                let t = Ot.map((t => -1 * (t.Weather * Math.log(g(h * t.Temperature + u)) + (1 - t.Weather) * Math.log(g(-(h * t.Temperature + u))))));
                c(bt, m = Number(t.reduce(((t, e) => t + e), 0)), m),
                    c(yt, d = [...d, {
                        iteration: p,
                        error: m
                    }], d)
            }
            90112 & t.$$.dirty[0] && c(gt, p += 1, p),
                2 & t.$$.dirty[0] && n(3, o = Tr().domain([20, 100]).range([y.left, x - y.right])),
                1 & t.$$.dirty[0] && n(2, a = Tr().domain([Jt(Ot, (t => t.Weather)), Kt(Ot, (t => t.Weather))]).range([v - y.bottom, y.top])),
                12 & t.$$.dirty[0] && n(4, s = so().x((t => o(t.Temperature))).y((t => a(t.y))))
        }
            ,
            n(5, i = ee().domain(w).range(["#003181", "#ff9900"])),
            [v, x, a, o, s, i, f, b, y, ["Rainy Day", "Sunny Day"], k, M, function (t) {
                const e = Ot.length;
                for (let r = 0; r < t; r++) {
                    c(gt, p += 1, p);
                    let t = Ot.map((t => t.Weather - g(h * t.Temperature + u)))
                        , r = Number(t.reduce(((t, e) => t + e), 0).toFixed(4));
                    c(bt, m = r, m);
                    c(ft, u = Number((u - .001 * (-1 / e * r)).toFixed(4)), u);
                    let n = Ot.map((t => t.Temperature * (t.Weather - g(h * t.Temperature + u))))
                        , i = Number(n.reduce(((t, e) => t + e), 0).toFixed(4));
                    c(dt, h = Number((h - .001 * (-1 / e * i)).toFixed(4)), h)
                }
            }
                , h, u, m, p, d, function () {
                    x = this.offsetWidth,
                        v = this.offsetHeight,
                        n(1, x),
                        n(0, v)
                }
            ]
    }
    class Oo extends lt {
        constructor(t) {
            super(),
                st(this, t, Ro, Io, s, {
                    runGradientDescent: 12
                }, null, [-1, -1])
        }
        get runGradientDescent() {
            return this.$$.ctx[12]
        }
    }
    function Ho(t, e, r) {
        const n = t.slice();
        return n[10] = e[r],
            n
    }
    function Do(t, e, r) {
        const n = t.slice();
        return n[10] = e[r],
            n
    }
    function Wo(t) {
        let e, r, n, i, o, a, s = t[10] + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-qon5v1"),
                    T(r, "x1", "0"),
                    T(r, "x2", "0"),
                    T(r, "y1", "0"),
                    T(r, "y2", n = -t[0] + t[8].bottom + t[8].top),
                    T(r, "stroke", "black"),
                    T(r, "stroke-dasharray", "4"),
                    T(i, "class", "axis-text svelte-qon5v1"),
                    T(i, "y", "15"),
                    T(i, "text-anchor", "middle"),
                    T(e, "transform", a = `translate(${t[3](t[10]) + 0} ${t[0] - t[8].bottom})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                1 & i && n !== (n = -t[0] + t[8].bottom + t[8].top) && T(r, "y2", n),
                    8 & i && s !== (s = t[10] + "") && A(o, s),
                    9 & i && a !== (a = `translate(${t[3](t[10]) + 0} ${t[0] - t[8].bottom})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Fo(t) {
        let e, r, n, i, o, a, s, l = t[10] + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    o = w("text"),
                    a = k(l),
                    T(r, "class", "grid-line svelte-qon5v1"),
                    T(r, "x1", n = 5),
                    T(r, "x2", i = t[1] - t[8].right),
                    T(r, "y1", "0"),
                    T(r, "y2", "0"),
                    T(r, "stroke", "black"),
                    T(r, "stroke-dasharray", "4"),
                    T(o, "class", "axis-text svelte-qon5v1"),
                    T(o, "y", "0"),
                    T(o, "text-anchor", "end"),
                    T(o, "dominant-baseline", "middle"),
                    T(e, "transform", s = `translate(${t[8].left - 5} ${t[2](t[10]) + 0})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, o),
                    g(o, a)
            },
            p(t, n) {
                2 & n && i !== (i = t[1] - t[8].right) && T(r, "x2", i),
                    4 & n && l !== (l = t[10] + "") && A(a, l),
                    4 & n && s !== (s = `translate(${t[8].left - 5} ${t[2](t[10]) + 0})`) && T(e, "transform", s)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Vo(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, M, L, z, _, P, C, N, $, B, E, I, R = (1e4 == e[6] ? "> 10000" : e[7](e[6])) + "", O = e[3].ticks(), H = [];
        for (let t = 0; t < O.length; t += 1)
            H[t] = Wo(Do(e, O, t));
        let D = e[2].ticks()
            , W = [];
        for (let t = 0; t < D.length; t += 1)
            W[t] = Fo(Ho(e, D, t));
        return {
            c() {
                r = x("div"),
                    n = w("svg");
                for (let t = 0; t < H.length; t += 1)
                    H[t].c();
                i = S();
                for (let t = 0; t < W.length; t += 1)
                    W[t].c();
                o = w("line"),
                    l = w("line"),
                    c = w("text"),
                    u = k("Error (Log-Loss)\n    "),
                    p = w("text"),
                    d = k("Iterations\n    "),
                    M = w("path"),
                    z = w("circle"),
                    C = w("text"),
                    N = k(R),
                    T(o, "class", "axis-line"),
                    T(o, "y1", a = e[0] - e[8].bottom),
                    T(o, "y2", s = e[0] - e[8].bottom),
                    T(o, "x1", e[8].left),
                    T(o, "x2", e[1]),
                    T(o, "stroke", "black"),
                    T(o, "stroke-width", "1"),
                    T(l, "class", "axis-line"),
                    T(l, "y1", e[8].top),
                    T(l, "y2", h = e[0] - e[8].bottom),
                    T(l, "x1", e[8].left),
                    T(l, "x2", e[8].left),
                    T(l, "stroke", "black"),
                    T(l, "stroke-width", "1"),
                    T(c, "class", "axis-label svelte-qon5v1"),
                    T(c, "text-anchor", "middle"),
                    T(c, "transform", m = `translate(15,${e[0] / 2}) rotate(-90)`),
                    T(p, "class", "axis-label svelte-qon5v1"),
                    T(p, "text-anchor", "middle"),
                    T(p, "x", f = (e[1] + e[8].left) / 2),
                    T(p, "y", e[0]),
                    T(M, "class", "error-line svelte-qon5v1"),
                    T(M, "d", L = e[5](e[4])),
                    T(z, "class", "error-circle"),
                    T(z, "fill", "var(--secondary)"),
                    T(z, "stroke-width", "1.5"),
                    T(z, "r", "4.5"),
                    T(z, "cx", _ = e[3](e[4][e[4].length - 1].iteration)),
                    T(z, "cy", P = e[2](e[4][e[4].length - 1].error)),
                    T(C, "class", "error-text svelte-qon5v1"),
                    T(C, "x", $ = e[3](e[4][e[4].length - 1].iteration) + 5),
                    T(C, "y", (e[6],
                        B = e[2](e[4][e[4].length - 1].error))),
                    T(n, "width", e[1]),
                    T(n, "height", E = e[0] + e[8].top + e[8].bottom),
                    T(r, "id", "scatter-chart"),
                    T(r, "class", "svelte-qon5v1"),
                    U((() => e[9].call(r)))
            },
            m(t, a) {
                b(t, r, a),
                    g(r, n);
                for (let t = 0; t < H.length; t += 1)
                    H[t].m(n, null);
                g(n, i);
                for (let t = 0; t < W.length; t += 1)
                    W[t].m(n, null);
                g(n, o),
                    g(n, l),
                    g(n, c),
                    g(c, u),
                    g(n, p),
                    g(p, d),
                    g(n, M),
                    g(n, z),
                    g(n, C),
                    g(C, N),
                    I = q(r, e[9].bind(r))
            },
            p(t, [e]) {
                if (265 & e) {
                    let r;
                    for (O = t[3].ticks(),
                        r = 0; r < O.length; r += 1) {
                        const o = Do(t, O, r);
                        H[r] ? H[r].p(o, e) : (H[r] = Wo(o),
                            H[r].c(),
                            H[r].m(n, i))
                    }
                    for (; r < H.length; r += 1)
                        H[r].d(1);
                    H.length = O.length
                }
                if (262 & e) {
                    let r;
                    for (D = t[2].ticks(),
                        r = 0; r < D.length; r += 1) {
                        const i = Ho(t, D, r);
                        W[r] ? W[r].p(i, e) : (W[r] = Fo(i),
                            W[r].c(),
                            W[r].m(n, o))
                    }
                    for (; r < W.length; r += 1)
                        W[r].d(1);
                    W.length = D.length
                }
                1 & e && a !== (a = t[0] - t[8].bottom) && T(o, "y1", a),
                    1 & e && s !== (s = t[0] - t[8].bottom) && T(o, "y2", s),
                    2 & e && T(o, "x2", t[1]),
                    1 & e && h !== (h = t[0] - t[8].bottom) && T(l, "y2", h),
                    1 & e && m !== (m = `translate(15,${t[0] / 2}) rotate(-90)`) && T(c, "transform", m),
                    2 & e && f !== (f = (t[1] + t[8].left) / 2) && T(p, "x", f),
                    1 & e && T(p, "y", t[0]),
                    48 & e && L !== (L = t[5](t[4])) && T(M, "d", L),
                    24 & e && _ !== (_ = t[3](t[4][t[4].length - 1].iteration)) && T(z, "cx", _),
                    20 & e && P !== (P = t[2](t[4][t[4].length - 1].error)) && T(z, "cy", P),
                    64 & e && R !== (R = (1e4 == t[6] ? "> 10000" : t[7](t[6])) + "") && A(N, R),
                    24 & e && $ !== ($ = t[3](t[4][t[4].length - 1].iteration) + 5) && T(C, "x", $),
                    84 & e && B !== (t[6],
                        B = t[2](t[4][t[4].length - 1].error)) && T(C, "y", B),
                    2 & e && T(n, "width", t[1]),
                    1 & e && E !== (E = t[0] + t[8].top + t[8].bottom) && T(n, "height", E)
            },
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    v(H, t),
                    v(W, t),
                    I()
            }
        }
    }
    function Uo(t, e, r) {
        let n, i, o, a, s;
        l(t, yt, (t => r(4, a = t))),
            l(t, bt, (t => r(6, s = t)));
        const h = vr(".2f")
            , c = {
                top: 30,
                right: 30,
                bottom: 30,
                left: 50
            };
        let u = 500
            , m = 500;
        return t.$$.update = () => {
            18 & t.$$.dirty && r(3, n = Tr().domain([0, Kt(a, (t => t.iteration)) + .6 * Kt(a, (t => t.iteration))]).range([c.left, m - c.right])),
                17 & t.$$.dirty && r(2, i = Tr().domain([0, Kt(a, (t => t.error))]).range([u - c.bottom, c.top])),
                12 & t.$$.dirty && r(5, o = so().x((t => n(t.iteration))).y((t => i(t.error))))
        }
            ,
            [u, m, i, n, a, o, s, h, c, function () {
                m = this.offsetWidth,
                    u = this.offsetHeight,
                    r(1, m),
                    r(0, u)
            }
            ]
    }
    class Go extends lt {
        constructor(t) {
            super(),
                st(this, t, Uo, Vo, s, {})
        }
    }
    function Xo(t) {
        let e, r, n, i, a, s, l, h, c, u, m, p, d, f, v, w, S, z, P, C, N, $, B, q, I, R, O, H, D, W, F, V, U, G, X, Y, j, Z, K, J, Q, rt, at, st, lt, ht, ct, ut, mt, pt, dt, ft, gt, bt, yt, vt, xt, wt, kt, Mt = Bt("(\\hat{\\beta_0})", !1) + "", St = Bt("(\\hat{\\beta_1})", !1) + "", Lt = Bt(`\\begin{aligned} P(y=1|x) = \\frac{1}{1 + e^{-(${t[3]}${t[2] < 0 ? "" : "+"}\n            ${t[2]}x)}} \\end{aligned}`) + "";
        pt = new Oo({
            props: {}
        }),
            t[10](pt);
        return gt = new Go({
            props: {}
        }),
            t[11](gt),
        {
            c() {
                e = x("p"),
                    r = M(),
                    n = x("br"),
                    i = x("br"),
                    a = M(),
                    s = x("div"),
                    l = x("div"),
                    h = x("p"),
                    c = k("Let's see how gradient descent works for our logistic regression model.\n      We'll use the algorithm to identify which values for bias "),
                    u = new E(!1),
                    m = k(" and weight "),
                    p = new E(!1),
                    d = k(" we should select.\n      Click the buttons to run 1, 5, 10, or 25 steps of gradient descent, and see\n      the curve update live. The error for each iteration is shown in the bottom\n      error chart."),
                    f = M(),
                    v = x("div"),
                    w = x("button"),
                    w.textContent = "1 Step",
                    S = M(),
                    z = x("button"),
                    z.textContent = "5 Steps",
                    P = M(),
                    C = x("button"),
                    C.textContent = "10 Steps",
                    N = M(),
                    $ = x("button"),
                    $.textContent = "25 Steps",
                    B = M(),
                    q = x("div"),
                    I = x("div"),
                    R = x("label"),
                    O = x("span"),
                    O.textContent = "Weight:",
                    H = M(),
                    D = k(t[2]),
                    W = M(),
                    F = x("input"),
                    V = M(),
                    U = x("div"),
                    G = x("div"),
                    X = x("label"),
                    Y = x("span"),
                    Y.textContent = "Bias:",
                    j = M(),
                    Z = k(t[3]),
                    K = M(),
                    J = x("input"),
                    Q = M(),
                    rt = x("div"),
                    at = x("div"),
                    st = x("label"),
                    st.innerHTML = '<span class="bold">Our Model:</span>',
                    lt = M(),
                    ht = new E(!1),
                    ct = M(),
                    ut = x("div"),
                    mt = x("div"),
                    nt(pt.$$.fragment),
                    dt = M(),
                    ft = x("div"),
                    nt(gt.$$.fragment),
                    bt = M(),
                    yt = x("br"),
                    vt = x("br"),
                    T(e, "class", "body-text"),
                    u.a = m,
                    p.a = d,
                    T(h, "class", "body-text"),
                    T(w, "class", "svelte-i068y6"),
                    T(z, "class", "svelte-i068y6"),
                    T(C, "class", "svelte-i068y6"),
                    T($, "class", "svelte-i068y6"),
                    T(v, "id", "buttons-container"),
                    T(v, "class", "svelte-i068y6"),
                    T(O, "class", "bold"),
                    T(R, "for", "slider1"),
                    T(R, "class", "float-left svelte-i068y6"),
                    T(F, "type", "range"),
                    T(F, "min", "-3"),
                    T(F, "max", "3"),
                    T(F, "step", ".01"),
                    T(F, "class", "slider svelte-i068y6"),
                    T(F, "id", "slider1"),
                    T(I, "class", "input-container svelte-i068y6"),
                    T(q, "id", "weight-slider"),
                    T(Y, "class", "bold"),
                    T(X, "for", "slider2"),
                    T(X, "class", "float-left svelte-i068y6"),
                    T(J, "type", "range"),
                    T(J, "min", "-50"),
                    T(J, "step", "-1"),
                    T(J, "max", "10"),
                    T(J, "class", "slider svelte-i068y6"),
                    T(J, "id", "slider2"),
                    T(G, "class", "input-container svelte-i068y6"),
                    T(U, "id", "bias-slider"),
                    T(st, "for", "equation-math"),
                    T(st, "class", "float-left svelte-i068y6"),
                    ht.a = null,
                    T(at, "class", "input-container svelte-i068y6"),
                    T(rt, "id", "equation-math"),
                    T(rt, "class", "svelte-i068y6"),
                    T(l, "id", "equations-container"),
                    T(l, "class", "svelte-i068y6"),
                    T(mt, "id", "gd-chart-regression"),
                    T(mt, "class", "svelte-i068y6"),
                    T(ft, "id", "gd-chart-error"),
                    T(ut, "id", "charts-container"),
                    T(ut, "class", "svelte-i068y6"),
                    T(s, "id", "gd-container"),
                    T(s, "class", "svelte-i068y6")
            },
            m(o, y) {
                b(o, e, y),
                    b(o, r, y),
                    b(o, n, y),
                    b(o, i, y),
                    b(o, a, y),
                    b(o, s, y),
                    g(s, l),
                    g(l, h),
                    g(h, c),
                    u.m(Mt, h),
                    g(h, m),
                    p.m(St, h),
                    g(h, d),
                    g(l, f),
                    g(l, v),
                    g(v, w),
                    g(v, S),
                    g(v, z),
                    g(v, P),
                    g(v, C),
                    g(v, N),
                    g(v, $),
                    g(l, B),
                    g(l, q),
                    g(q, I),
                    g(I, R),
                    g(R, O),
                    g(R, H),
                    g(R, D),
                    g(I, W),
                    g(I, F),
                    _(F, t[2]),
                    g(l, V),
                    g(l, U),
                    g(U, G),
                    g(G, X),
                    g(X, Y),
                    g(X, j),
                    g(X, Z),
                    g(G, K),
                    g(G, J),
                    _(J, t[3]),
                    g(l, Q),
                    g(l, rt),
                    g(rt, at),
                    g(at, st),
                    g(at, lt),
                    ht.m(Lt, at),
                    g(s, ct),
                    g(s, ut),
                    g(ut, mt),
                    it(pt, mt, null),
                    g(ut, dt),
                    g(ut, ft),
                    it(gt, ft, null),
                    b(o, bt, y),
                    b(o, yt, y),
                    b(o, vt, y),
                    xt = !0,
                    wt || (kt = [L(w, "click", t[4]), L(z, "click", t[5]), L(C, "click", t[6]), L($, "click", t[7]), L(F, "change", t[8]), L(F, "input", t[8]), L(J, "change", t[9]), L(J, "input", t[9])],
                        wt = !0)
            },
            p(t, [e]) {
                (!xt || 4 & e) && A(D, t[2]),
                    4 & e && _(F, t[2]),
                    (!xt || 8 & e) && A(Z, t[3]),
                    8 & e && _(J, t[3]),
                    (!xt || 12 & e) && Lt !== (Lt = Bt(`\\begin{aligned} P(y=1|x) = \\frac{1}{1 + e^{-(${t[3]}${t[2] < 0 ? "" : "+"}\n            ${t[2]}x)}} \\end{aligned}`) + "") && ht.p(Lt);
                pt.$set({});
                gt.$set({})
            },
            i(t) {
                xt || (tt(pt.$$.fragment, t),
                    tt(gt.$$.fragment, t),
                    xt = !0)
            },
            o(t) {
                et(pt.$$.fragment, t),
                    et(gt.$$.fragment, t),
                    xt = !1
            },
            d(l) {
                l && y(e),
                    l && y(r),
                    l && y(n),
                    l && y(i),
                    l && y(a),
                    l && y(s),
                    t[10](null),
                    ot(pt),
                    t[11](null),
                    ot(gt),
                    l && y(bt),
                    l && y(yt),
                    l && y(vt),
                    wt = !1,
                    o(kt)
            }
        }
    }
    function Yo(t, e, r) {
        let n, i, o, a;
        l(t, dt, (t => r(2, n = t))),
            l(t, ft, (t => r(3, i = t)));
        return [o, a, n, i, () => o.runGradientDescent(1), () => o.runGradientDescent(5), () => o.runGradientDescent(10), () => o.runGradientDescent(25), function () {
            n = z(this.value),
                dt.set(n)
        }
            , function () {
                i = z(this.value),
                    ft.set(i)
            }
            , function (t) {
                H[t ? "unshift" : "push"]((() => {
                    o = t,
                        r(0, o)
                }
                ))
            }
            , function (t) {
                H[t ? "unshift" : "push"]((() => {
                    a = t,
                        r(1, a)
                }
                ))
            }
        ]
    }
    class jo extends lt {
        constructor(t) {
            super(),
                st(this, t, Yo, Xo, s, {})
        }
    }
    function Zo(e) {
        let r, n, i, o, a, l, h, c, u, m, p, d, f, v, w, S, L, z, A, _, P = Bt("\\hat{\\beta_0}, \\hat{\\beta_1}, ..., \\hat{\\beta_k}") + "", C = Bt(Ko, !0) + "";
        return d = new jo({}),
        {
            c() {
                r = x("section"),
                    n = x("h1"),
                    i = M(),
                    o = x("p"),
                    a = k(""),

                    l = k(""),
                    h = M(),
                    c = x("h2"),
                    u = M(),
                    m = x("p"),
                    p = M(),
                    nt(d.$$.fragment),
                    f = M(),
                    v = x("h2"),

                    S = x("p"),
                    z = new E(!1),
                    T(n, "class", "body-header"),
                    s.a = l,
                    T(o, "class", "body-text"),
                    T(c, "class", "body-secondary-header svelte-1031e3o"),
                    T(m, "class", "body-text"),
                    T(v, "class", "body-secondary-header svelte-1031e3o"),
                    z.a = A,
                    T(S, "class", "body-text")
            },
            m(t, e) {
                b(t, r, e),
                    g(r, n),
                    g(r, i),
                    g(r, o),
                    g(o, a),

                    g(o, l),
                    g(r, h),
                    g(r, c),
                    g(r, u),
                    g(r, m),
                    g(r, p),
                    it(d, r, null),
                    g(r, f),

                    g(r, S),
                    g(S, L),
                    z.m(C, S),

                    _ = !0
            },
            p: t,
            i(t) {
                _ || (tt(d.$$.fragment, t),
                    _ = !0)
            },
            o(t) {
                et(d.$$.fragment, t),
                    _ = !1
            },
            d(t) {
                t && y(r),
                    ot(d)
            }
        }
    }
    const Ko = "\\textrm{Log-Likelihood} = \\sum_{i=0}^n (y_i * \\textrm{log}(p_i) + (1-y_i)*\\textrm{log}(1-p_i))";
    class Jo extends lt {
        constructor(t) {
            super(),
                st(this, t, null, Zo, s, {})
        }
    }
    function Qo(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, v, w, S, L, z, A, _, P, C, N, $, B, q, I, R, O, H, D, W, F, V, U, G, X, Y, j, Z = Bt("\\begin{aligned} P(y=1|x) = \\frac{1}{1+e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} * x)}} \\end{aligned}", !1) + "", K = Bt("x \\in \\llbracket0, 1\\rrbracket", !1) + "", J = Bt("\\begin{aligned} P(Day=Sunny|Foggy) = \\end{aligned}", !1) + "", Q = Bt("\\begin{aligned} \\frac{1}{1+e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} * Foggy)}} \\end{aligned}", !1) + "", tt = Bt("\\hat{\\beta_1}", !1) + "", et = Bt("e^{-0.7} = 0.50", !1) + "", rt = Bt("\\hat{\\beta_0}", !1) + "";
        return {
            c() {
                r = x("p"),
                    n = x("span"),
                    n.textContent = "Interpreting A Logistic Regression Model With One Binary Feature",
                    i = M(),
                    o = x("br"),
                    a = x("br"),
                    s = M(),
                    l = x("span"),
                    l.textContent = "Model Form:",
                    h = M(),
                    c = new E(!1),
                    u = k(" where "),
                    m = new E(!1),
                    p = M(),
                    d = x("br"),
                    f = M(),
                    v = x("p"),
                    w = x("span"),
                    w.textContent = "Example:",
                    S = M(),
                    L = new E(!1),
                    z = M(),
                    A = new E(!1),
                    _ = M(),
                    P = x("br"),
                    C = M(),
                    N = x("p"),
                    $ = x("span"),
                    $.textContent = "Interpretation",
                    B = k(": This model summarizes the difference\n  in the probability of a sunny day for days that are foggy and days that are\n  not.\n\n  "),
                    q = x("br"),
                    I = x("br"),
                    R = k(" The weight "),
                    O = new E(!1),
                    H = k(" is the change\n  in the log-odds ratio for a foggy day relative to a non-foggy day. For a coefficient\n  of -0.7, the exponentiated value is "),
                    D = new E(!1),
                    W = k(", which indicates that on average, the odds that the day will be sunny\n  multiplies by 0.50 (i.e. is about half) if it is foggy compared to if it is\n  not.\n\n  "),
                    F = x("br"),
                    V = x("br"),
                    U = k("The intercept "),
                    G = new E(!1),
                    X = k(" is the odds\n  of a sunny day if it is not foggy.\n  "),
                    Y = x("br"),
                    j = x("br"),
                    T(n, "class", "interpretation-header svelte-1310ftu"),
                    T(l, "class", "bold"),
                    c.a = u,
                    m.a = null,
                    T(r, "class", "tab-text"),
                    T(w, "class", "bold"),
                    L.a = z,
                    A.a = null,
                    T(v, "class", "tab-text"),
                    T($, "class", "bold"),
                    O.a = H,
                    D.a = W,
                    G.a = X,
                    T(N, "class", "tab-text")
            },
            m(t, e) {
                b(t, r, e),
                    g(r, n),
                    g(r, i),
                    g(r, o),
                    g(r, a),
                    g(r, s),
                    g(r, l),
                    g(r, h),
                    c.m(Z, r),
                    g(r, u),
                    m.m(K, r),
                    b(t, p, e),
                    b(t, d, e),
                    b(t, f, e),
                    b(t, v, e),
                    g(v, w),
                    g(v, S),
                    L.m(J, v),
                    g(v, z),
                    A.m(Q, v),
                    b(t, _, e),
                    b(t, P, e),
                    b(t, C, e),
                    b(t, N, e),
                    g(N, $),
                    g(N, B),
                    g(N, q),
                    g(N, I),
                    g(N, R),
                    O.m(tt, N),
                    g(N, H),
                    D.m(et, N),
                    g(N, W),
                    g(N, F),
                    g(N, V),
                    g(N, U),
                    G.m(rt, N),
                    g(N, X),
                    g(N, Y),
                    g(N, j)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    t && y(p),
                    t && y(d),
                    t && y(f),
                    t && y(v),
                    t && y(_),
                    t && y(P),
                    t && y(C),
                    t && y(N)
            }
        }
    }
    class ta extends lt {
        constructor(t) {
            super(),
                st(this, t, null, Qo, s, {})
        }
    }
    function ea(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, v, w, S, L, z, A, _, P, C, N, $, B, q, I, R, O, H, D, W, F, V, U, G, X, Y, j, Z, K, J, Q, tt, et, rt, nt, it, ot, at, st, lt, ht, ct, ut = Bt("\\begin{aligned} P(y=1|x) = \\frac{1}{1+e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} * x)}} \\end{aligned}", !1) + "", mt = Bt("x \\in \\llbracket \\Reals \\rrbracket", !1) + "", pt = Bt("\\begin{aligned} P(Day = Sunny|Temperature) = \\end{aligned}", !1) + "", dt = Bt("\\begin{aligned} \\frac{1}{1 + e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} *Temperature)}} \\end{aligned}", !1) + "", ft = Bt("\\hat{\\beta_1}", !1) + "", gt = Bt("y", !1) + "", bt = Bt("X", !1) + "", yt = Bt("y", !1) + "", vt = Bt("X", !1) + "", xt = Bt("e^{\\hat{\\beta_1}}", !1) + "", wt = Bt("e^{0.7} = 2.01", !1) + "", kt = Bt("\\hat{\\beta_0}", !1) + "", Mt = Bt("p = \\frac{e^{\\hat{\\beta_i}}}{1 + e^{\\hat{\\beta_i}}}", !1) + "", St = Bt("p = \\frac{e^{2}}{1 + e^{2}} = 0.88", !1) + "";
        return {
            c() {
                r = x("p"),
                    n = x("span"),
                    n.textContent = "Interpreting A Logistic Regression Model With One Continuous Feature",
                    i = M(),
                    o = x("br"),
                    a = x("br"),
                    s = M(),
                    l = x("span"),
                    l.textContent = "Model Form:",
                    h = M(),
                    c = new E(!1),
                    u = k(" where "),
                    m = new E(!1),
                    p = M(),
                    d = x("br"),
                    f = M(),
                    v = x("p"),
                    w = x("span"),
                    w.textContent = "Example:",
                    S = M(),
                    L = new E(!1),
                    z = M(),
                    A = new E(!1),
                    _ = M(),
                    P = x("br"),
                    C = M(),
                    N = x("p"),
                    $ = x("span"),
                    $.textContent = "Interpretation",
                    B = k(": This model describes the probability\n  of a sunny day across temperatures (measured in degrees Fahrenheit).\n  "),
                    q = x("br"),
                    I = x("br"),
                    R = k("\n  The weight "),
                    O = new E(!1),
                    H = k(" is the change in the log-odds ratio for "),
                    D = new E(!1),
                    W = k(" per unit change in "),
                    F = new E(!1),
                    V = k(". When exponentiating the weight, this becomes the change in the odds ratio\n  for "),
                    U = new E(!1),
                    G = k(" per unit change in "),
                    X = new E(!1),
                    Y = k(". In other words, the odds are multiplied by "),
                    j = new E(!1),
                    Z = k(". Therefore, for a coefficient of 0.7, the exponentiated value is "),
                    K = new E(!1),
                    J = k(", which indicates that on average, for an increase of 1 degree in\n  temperature, the odds that the day will be sunny multiplies by 2.01 (i.e.\n  approximately doubles).\n  "),
                    Q = x("br"),
                    tt = x("br"),
                    et = k("\n  The intercept "),
                    rt = new E(!1),
                    nt = k(" is the odds of a sunny\n  day at 0 degrees Fahrenheit. We can use this to calculate the probability of a\n  sunny day by using the following calculation:\n  "),
                    it = new E(!1),
                    ot = k(".\n  "),
                    at = x("br"),
                    st = x("br"),
                    lt = k("\n  If the intercept coefficient is 2, this means that there is a "),
                    ht = new E(!1),
                    ct = k(" probability that it will be a sunny day at 0 degrees Fahrenheit."),
                    T(n, "class", "interpretation-header svelte-1310ftu"),
                    T(l, "class", "bold"),
                    c.a = u,
                    m.a = null,
                    T(r, "class", "tab-text"),
                    T(w, "class", "bold"),
                    L.a = z,
                    A.a = null,
                    T(v, "class", "tab-text"),
                    T($, "class", "bold"),
                    O.a = H,
                    D.a = W,
                    F.a = V,
                    U.a = G,
                    X.a = Y,
                    j.a = Z,
                    K.a = J,
                    rt.a = nt,
                    it.a = ot,
                    ht.a = ct,
                    T(N, "class", "tab-text")
            },
            m(t, e) {
                b(t, r, e),
                    g(r, n),
                    g(r, i),
                    g(r, o),
                    g(r, a),
                    g(r, s),
                    g(r, l),
                    g(r, h),
                    c.m(ut, r),
                    g(r, u),
                    m.m(mt, r),
                    b(t, p, e),
                    b(t, d, e),
                    b(t, f, e),
                    b(t, v, e),
                    g(v, w),
                    g(v, S),
                    L.m(pt, v),
                    g(v, z),
                    A.m(dt, v),
                    b(t, _, e),
                    b(t, P, e),
                    b(t, C, e),
                    b(t, N, e),
                    g(N, $),
                    g(N, B),
                    g(N, q),
                    g(N, I),
                    g(N, R),
                    O.m(ft, N),
                    g(N, H),
                    D.m(gt, N),
                    g(N, W),
                    F.m(bt, N),
                    g(N, V),
                    U.m(yt, N),
                    g(N, G),
                    X.m(vt, N),
                    g(N, Y),
                    j.m(xt, N),
                    g(N, Z),
                    K.m(wt, N),
                    g(N, J),
                    g(N, Q),
                    g(N, tt),
                    g(N, et),
                    rt.m(kt, N),
                    g(N, nt),
                    it.m(Mt, N),
                    g(N, ot),
                    g(N, at),
                    g(N, st),
                    g(N, lt),
                    ht.m(St, N),
                    g(N, ct)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    t && y(p),
                    t && y(d),
                    t && y(f),
                    t && y(v),
                    t && y(_),
                    t && y(P),
                    t && y(C),
                    t && y(N)
            }
        }
    }
    class ra extends lt {
        constructor(t) {
            super(),
                st(this, t, null, ea, s, {})
        }
    }
    function na(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, v, w, S, L, z, A, _, P, C, N, $, B, q, I, R, O, H, D, W, F, V, U, G, X, Y = Bt("\\begin{aligned} P(y=1|x) = \\frac{1}{1+e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} * x_1 + \\hat{\\beta_2} * x_2 + ... + \\hat{\\beta_n} * x_n)}} \\end{aligned}", !1) + "", j = Bt("\\begin{aligned} P(Day = Sunny|Temperature, Foggy) = \\end{aligned}", !1) + "", Z = Bt("\\begin{aligned} \\frac{1}{1 + e^{-(\\hat{\\beta_0} + \\hat{\\beta_1} * Temperature + \\hat{\\beta_2} * Foggy)}} \\end{aligned}", !1) + "", K = Bt("x_i = 0", !1) + "", J = Bt("\\hat{\\beta_1}", !1) + "", Q = Bt("\\hat{\\beta_2}", !1) + "";
        return {
            c() {
                r = x("p"),
                    n = x("span"),
                    n.textContent = "Interpreting A Multivariate Logistic Regression Model",
                    i = M(),
                    o = x("br"),
                    a = x("br"),
                    s = M(),
                    l = x("span"),
                    l.textContent = "Model Form:",
                    h = M(),
                    c = new E(!1),
                    u = M(),
                    m = x("br"),
                    p = M(),
                    d = x("p"),
                    f = x("span"),
                    f.textContent = "Example:",
                    v = M(),
                    w = new E(!1),
                    S = M(),
                    L = new E(!1),
                    z = M(),
                    A = x("br"),
                    _ = M(),
                    P = x("p"),
                    C = x("span"),
                    C.textContent = "Interpretation",
                    N = k(": Typically, a logistic regression model will\n  contain more than one feature. We call this a\n  "),
                    $ = x("i"),
                    $.textContent = "multivariate logistic regression model",
                    B = k(". In this example, we model the\n  probability of a sunny day as a function of temperature and whether or not it\n  is foggy.\n  "),
                    q = x("br"),
                    I = x("br"),
                    R = k("The intercept represents the predicted probability of a sunny day\n  for Days with all "),
                    O = new E(!1),
                    H = k(": it represents the\n  probability for days without fog and with a temperature of zero degrees\n  Fahrenheit.\n  "),
                    D = x("br"),
                    W = x("br"),
                    F = k(" The weight "),
                    V = new E(!1),
                    U = k(" is the change\n  in the log-odds ratio for a sunny day per unit change in temperature, and the weight\n  "),
                    G = new E(!1),
                    X = k(" is the change in the log-odds ratio\n  for a foggy day relative to a non-foggy day."),
                    T(n, "class", "interpretation-header svelte-1310ftu"),
                    T(l, "class", "bold"),
                    c.a = null,
                    T(r, "class", "tab-text"),
                    T(f, "class", "bold"),
                    w.a = S,
                    L.a = null,
                    T(d, "class", "tab-text"),
                    T(C, "class", "bold"),
                    O.a = H,
                    V.a = U,
                    G.a = X,
                    T(P, "class", "tab-text")
            },
            m(t, e) {
                b(t, r, e),
                    g(r, n),
                    g(r, i),
                    g(r, o),
                    g(r, a),
                    g(r, s),
                    g(r, l),
                    g(r, h),
                    c.m(Y, r),
                    b(t, u, e),
                    b(t, m, e),
                    b(t, p, e),
                    b(t, d, e),
                    g(d, f),
                    g(d, v),
                    w.m(j, d),
                    g(d, S),
                    L.m(Z, d),
                    b(t, z, e),
                    b(t, A, e),
                    b(t, _, e),
                    b(t, P, e),
                    g(P, C),
                    g(P, N),
                    g(P, $),
                    g(P, B),
                    g(P, q),
                    g(P, I),
                    g(P, R),
                    O.m(K, P),
                    g(P, H),
                    g(P, D),
                    g(P, W),
                    g(P, F),
                    V.m(J, P),
                    g(P, U),
                    G.m(Q, P),
                    g(P, X)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    t && y(u),
                    t && y(m),
                    t && y(p),
                    t && y(d),
                    t && y(z),
                    t && y(A),
                    t && y(_),
                    t && y(P)
            }
        }
    }
    class ia extends lt {
        constructor(t) {
            super(),
                st(this, t, null, na, s, {})
        }
    }
    function oa(t, e, r) {
        const n = t.slice();
        return n[3] = e[r],
            n
    }
    function aa(t, e, r) {
        const n = t.slice();
        return n[3] = e[r],
            n
    }
    function sa(t) {
        let e, r, n, i, o, s, l, c = t[3].label + "";
        return {
            c() {
                e = x("li"),
                    r = x("span"),
                    n = k(c),
                    i = M(),
                    T(r, "class", "svelte-5x4mav"),
                    T(e, "class", o = h(t[0] === t[3].value ? "active" : "") + " svelte-5x4mav")
            },
            m(o, h) {
                b(o, e, h),
                    g(e, r),
                    g(r, n),
                    g(e, i),
                    s || (l = L(r, "click", (function () {
                        a(t[2](t[3].value)) && t[2](t[3].value).apply(this, arguments)
                    }
                    )),
                        s = !0)
            },
            p(r, i) {
                t = r,
                    2 & i && c !== (c = t[3].label + "") && A(n, c),
                    3 & i && o !== (o = h(t[0] === t[3].value ? "active" : "") + " svelte-5x4mav") && T(e, "class", o)
            },
            d(t) {
                t && y(e),
                    s = !1,
                    l()
            }
        }
    }
    function la(t) {
        let e, r, n, i;
        var o = t[3].component;
        return o && (r = new o({})),
        {
            c() {
                e = x("div"),
                    r && nt(r.$$.fragment),
                    n = M(),
                    T(e, "class", "box svelte-5x4mav")
            },
            m(t, o) {
                b(t, e, o),
                    r && it(r, e, null),
                    g(e, n),
                    i = !0
            },
            p(t, i) {
                if (o !== (o = t[3].component)) {
                    if (r) {
                        J();
                        const t = r;
                        et(t.$$.fragment, 1, 0, (() => {
                            ot(t, 1)
                        }
                        )),
                            Q()
                    }
                    o ? (r = new o({}),
                        nt(r.$$.fragment),
                        tt(r.$$.fragment, 1),
                        it(r, e, n)) : r = null
                }
            },
            i(t) {
                i || (r && tt(r.$$.fragment, t),
                    i = !0)
            },
            o(t) {
                r && et(r.$$.fragment, t),
                    i = !1
            },
            d(t) {
                t && y(e),
                    r && ot(r)
            }
        }
    }
    function ha(t) {
        let e, r, n = t[0] == t[3].value && la(t);
        return {
            c() {
                n && n.c(),
                    e = S()
            },
            m(t, i) {
                n && n.m(t, i),
                    b(t, e, i),
                    r = !0
            },
            p(t, r) {
                t[0] == t[3].value ? n ? (n.p(t, r),
                    3 & r && tt(n, 1)) : (n = la(t),
                        n.c(),
                        tt(n, 1),
                        n.m(e.parentNode, e)) : n && (J(),
                            et(n, 1, 1, (() => {
                                n = null
                            }
                            )),
                            Q())
            },
            i(t) {
                r || (tt(n),
                    r = !0)
            },
            o(t) {
                et(n),
                    r = !1
            },
            d(t) {
                n && n.d(t),
                    t && y(e)
            }
        }
    }
    function ca(t) {
        let e, r, n, i, o = t[1], a = [];
        for (let e = 0; e < o.length; e += 1)
            a[e] = sa(aa(t, o, e));
        let s = t[1]
            , l = [];
        for (let e = 0; e < s.length; e += 1)
            l[e] = ha(oa(t, s, e));
        const h = t => et(l[t], 1, 1, (() => {
            l[t] = null
        }
        ));
        return {
            c() {
                e = x("div"),
                    r = x("ul");
                for (let t = 0; t < a.length; t += 1)
                    a[t].c();
                n = M();
                for (let t = 0; t < l.length; t += 1)
                    l[t].c();
                T(r, "class", "svelte-5x4mav"),
                    T(e, "id", "tab-container"),
                    T(e, "class", "svelte-5x4mav")
            },
            m(t, o) {
                b(t, e, o),
                    g(e, r);
                for (let t = 0; t < a.length; t += 1)
                    a[t].m(r, null);
                g(e, n);
                for (let t = 0; t < l.length; t += 1)
                    l[t].m(e, null);
                i = !0
            },
            p(t, [n]) {
                if (7 & n) {
                    let e;
                    for (o = t[1],
                        e = 0; e < o.length; e += 1) {
                        const i = aa(t, o, e);
                        a[e] ? a[e].p(i, n) : (a[e] = sa(i),
                            a[e].c(),
                            a[e].m(r, null))
                    }
                    for (; e < a.length; e += 1)
                        a[e].d(1);
                    a.length = o.length
                }
                if (3 & n) {
                    let r;
                    for (s = t[1],
                        r = 0; r < s.length; r += 1) {
                        const i = oa(t, s, r);
                        l[r] ? (l[r].p(i, n),
                            tt(l[r], 1)) : (l[r] = ha(i),
                                l[r].c(),
                                tt(l[r], 1),
                                l[r].m(e, null))
                    }
                    for (J(),
                        r = s.length; r < l.length; r += 1)
                        h(r);
                    Q()
                }
            },
            i(t) {
                if (!i) {
                    for (let t = 0; t < s.length; t += 1)
                        tt(l[t]);
                    i = !0
                }
            },
            o(t) {
                l = l.filter(Boolean);
                for (let t = 0; t < l.length; t += 1)
                    et(l[t]);
                i = !1
            },
            d(t) {
                t && y(e),
                    v(a, t),
                    v(l, t)
            }
        }
    }
    function ua(t, e, r) {
        let { items: n = [] } = e
            , { activeTabValue: i = 1 } = e;
        return t.$$set = t => {
            "items" in t && r(1, n = t.items),
                "activeTabValue" in t && r(0, i = t.activeTabValue)
        }
            ,
            [i, n, t => () => r(0, i = t)]
    }
    class ma extends lt {
        constructor(t) {
            super(),
                st(this, t, ua, ca, s, {
                    items: 1,
                    activeTabValue: 0
                })
        }
    }
    function pa(t) {
        let $ = new ma({
            props: {
                items: t[0]
            }
        });
        return {
            c() {
                $.$$.fragment.c();
            },
            m(t, e) {
                it($.$$.fragment, t, e);
            },
            p(t, [e]) {
                const r = {};
                1 & e && (r.items = t[0]);
                $.$set(r);
            },
            i(t) {
                tt($.$$.fragment, t);
            },
            o(t) {
                et($.$$.fragment, t);
            },
            d(t) {
                ot($, t);
            }
        };
    }

    function da(t, e, r) {
        let n, i;
        return l(t, wt, (t => r(1, i = t))),
            t.$$.update = () => {
                2 & t.$$.dirty && r(0, n = [{
                    label: i ? "Binary" : "A Binary Feature",
                    value: 1,
                    component: ta
                }, {
                    label: i ? "Continuous" : "A Continuous Feature",
                    value: 2,
                    component: ra
                }, {
                    label: i ? "Multivariate" : "Multivariate Regression",
                    value: 3,
                    component: ia
                }])
            }
            ,
            [n, i]
    }
    class fa extends lt {
        constructor(t) {
            super(),
                st(this, t, da, pa, s, {})
        }
    }
    function ga(e) {
        let r, n, i;
        return {
            c() {
                r = x("h1"),
                    r.textContent = "",
                    n = M(),
                    i = x("p"),

                    T(r, "class", "body-header"),
                    T(i, "class", "body-text")
            },
            m(t, e) {
                b(t, r, e),
                    b(t, n, e),
                    b(t, i, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    t && y(n),
                    t && y(i)
            }
        }
    }
    class ba extends lt {
        constructor(t) {
            super(),
                st(this, t, null, ga, s, {})
        }
    }
    function ya(e) {
        let r, n, i, o, a, s, l;
        return {
            c() {
                r = x("br"),
                    n = M(),
                    i = x("br"),
                    o = M(),
                    a = x("br"),
                    s = M(),
                    l = x("section"),
                    T(l, "id", "resources"),
                    T(l, "class", "svelte-2n6nk4")
            },
            m(t, e) {
                b(t, r, e),
                    b(t, n, e),
                    b(t, i, e),
                    b(t, o, e),
                    b(t, a, e),
                    b(t, s, e),
                    b(t, l, e)
            },
            p: t,
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    t && y(n),
                    t && y(i),
                    t && y(o),
                    t && y(a),
                    t && y(s),
                    t && y(l)
            }
        }
    }
    class va extends lt {
        constructor(t) {
            super(),
                st(this, t, null, ya, s, {})
        }
    }
    function xa(t, e, r) {
        const n = t.slice();
        return n[25] = e[r],
            n[27] = r,
            n
    }
    function wa(t, e, r) {
        const n = t.slice();
        return n[28] = e[r],
            n
    }
    function ka(t, e, r) {
        const n = t.slice();
        return n[28] = e[r],
            n
    }
    function Ma(t, e, r) {
        const n = t.slice();
        return n[33] = e[r],
            n
    }
    function Sa(t, e, r) {
        const n = t.slice();
        return n[36] = e[r],
            n
    }
    function La(t, e, r) {
        const n = t.slice();
        return n[36] = e[r],
            n
    }
    function Ta(t) {
        let e, r, n, i, o, a, s = t[36] + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-107pwzv"),
                    T(r, "x1", "0"),
                    T(r, "x2", "0"),
                    T(r, "y1", "0"),
                    T(r, "y2", n = -t[1] + t[10].bottom + t[10].top),
                    T(i, "class", "axis-text svelte-107pwzv"),
                    T(i, "y", "15"),
                    T(i, "text-anchor", "middle"),
                    T(i, "dy", "5"),
                    T(e, "transform", a = `translate(${t[3](t[36])}, ${t[1] - t[10].bottom})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                2 & i[0] && n !== (n = -t[1] + t[10].bottom + t[10].top) && T(r, "y2", n),
                    8 & i[0] && s !== (s = t[36] + "") && A(o, s),
                    10 & i[0] && a !== (a = `translate(${t[3](t[36])}, ${t[1] - t[10].bottom})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function za(t) {
        let e, r, n, i, o, a, s = t[12](t[36]) + "";
        return {
            c() {
                e = w("g"),
                    r = w("line"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "grid-line svelte-107pwzv"),
                    T(r, "x1", "0"),
                    T(r, "x2", n = t[0] - t[10].left - t[10].right),
                    T(r, "y1", "0"),
                    T(r, "y2", "0"),
                    T(i, "class", "axis-text svelte-107pwzv"),
                    T(i, "text-anchor", "end"),
                    T(i, "dx", "-5"),
                    T(i, "dominant-baseline", "middle"),
                    T(e, "transform", a = `translate(${t[10].left}, ${t[2](t[36])})`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, i) {
                1 & i[0] && n !== (n = t[0] - t[10].left - t[10].right) && T(r, "x2", n),
                    4 & i[0] && s !== (s = t[12](t[36]) + "") && A(o, s),
                    4 & i[0] && a !== (a = `translate(${t[10].left}, ${t[2](t[36])})`) && T(e, "transform", a)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Aa(t) {
        let e, r, n, i;
        return {
            c() {
                e = w("circle"),
                    T(e, "class", "scatter-circle"),
                    T(e, "r", "0"),
                    T(e, "cx", r = t[3](t[33].Temperature)),
                    T(e, "cy", n = t[2](t[33].Weather)),
                    T(e, "fill", i = t[8](t[33].Weather)),
                    T(e, "opacity", "1")
            },
            m(t, r) {
                b(t, e, r)
            },
            p(t, o) {
                8 & o[0] && r !== (r = t[3](t[33].Temperature)) && T(e, "cx", r),
                    4 & o[0] && n !== (n = t[2](t[33].Weather)) && T(e, "cy", n),
                    256 & o[0] && i !== (i = t[8](t[33].Weather)) && T(e, "fill", i)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function _a(e) {
        let r, n, i;
        return {
            c() {
                r = w("path"),
                    T(r, "class", "bottom-arrow"),
                    T(r, "d", n = e[28]),
                    T(r, "style", i = "transform: rotate(90deg) scale(0.8)"),
                    T(r, "stroke-width", "0"),
                    T(r, "fill", "none"),
                    T(r, "stroke", "none")
            },
            m(t, e) {
                b(t, r, e)
            },
            p: t,
            d(t) {
                t && y(r)
            }
        }
    }
    function Pa(e) {
        let r, n, i;
        return {
            c() {
                r = w("path"),
                    T(r, "class", "top-arrow"),
                    T(r, "d", n = e[28]),
                    T(r, "style", i = "transform: rotate(-90deg) scale(0.8)"),
                    T(r, "stroke-width", "0"),
                    T(r, "fill", "none"),
                    T(r, "stroke", "none")
            },
            m(t, e) {
                b(t, r, e)
            },
            p: t,
            d(t) {
                t && y(r)
            }
        }
    }
    function Ca(t) {
        let e, r, n, i, o, a, s = t[11][t[27]] + "";
        return {
            c() {
                e = w("g"),
                    r = w("circle"),
                    i = w("text"),
                    o = k(s),
                    T(r, "class", "legend-circle"),
                    T(r, "r", "0"),
                    T(r, "fill", n = t[8](t[27])),
                    T(i, "class", "legend-text svelte-107pwzv"),
                    T(i, "dominant-baseline", "middle"),
                    T(i, "x", "20"),
                    T(i, "font-size", "0"),
                    T(e, "transform", a = `translate(${120 * t[27]} 0)`)
            },
            m(t, n) {
                b(t, e, n),
                    g(e, r),
                    g(e, i),
                    g(i, o)
            },
            p(t, e) {
                256 & e[0] && n !== (n = t[8](t[27])) && T(r, "fill", n)
            },
            d(t) {
                t && y(e)
            }
        }
    }
    function Na(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, M, L, z, A, _, P, C, N, $, B, E, I, R, O, H, D, W, F, V, G, X, Y, j, Z, K, J, Q, tt, et, rt, nt = e[3].ticks(), it = [];
        for (let t = 0; t < nt.length; t += 1)
            it[t] = Ta(La(e, nt, t));
        let ot = e[2].ticks()
            , at = [];
        for (let t = 0; t < ot.length; t += 1)
            at[t] = za(Sa(e, ot, t));
        let st = Ot
            , lt = [];
        for (let t = 0; t < st.length; t += 1)
            lt[t] = Aa(Ma(e, st, t));
        let ht = e[13]
            , ct = [];
        for (let t = 0; t < ht.length; t += 1)
            ct[t] = _a(ka(e, ht, t));
        let ut = e[13]
            , mt = [];
        for (let t = 0; t < ut.length; t += 1)
            mt[t] = Pa(wa(e, ut, t));
        let pt = e[11]
            , dt = [];
        for (let t = 0; t < pt.length; t += 1)
            dt[t] = Ca(xa(e, pt, t));
        return {
            c() {
                r = x("div"),
                    n = w("svg");
                for (let t = 0; t < it.length; t += 1)
                    it[t].c();
                i = S();
                for (let t = 0; t < at.length; t += 1)
                    at[t].c();
                o = w("line"),
                    h = w("line");
                for (let t = 0; t < lt.length; t += 1)
                    lt[t].c();
                u = w("path"),
                    p = w("g"),
                    d = w("circle"),
                    z = w("g"),
                    A = w("rect"),
                    C = w("g"),
                    N = w("text"),
                    $ = k("Predict"),
                    B = w("text"),
                    E = k("Rainy"),
                    I = w("g");
                for (let t = 0; t < ct.length; t += 1)
                    ct[t].c();
                O = w("g"),
                    H = w("text"),
                    D = k("Predict"),
                    W = w("text"),
                    F = k("Sunny"),
                    V = w("g");
                for (let t = 0; t < mt.length; t += 1)
                    mt[t].c();
                X = w("text"),
                    Y = k("Probability\n    "),
                    Z = w("text"),
                    K = k("Temperature (Degrees Fahrenheit)\n    "),
                    tt = w("g");
                for (let t = 0; t < dt.length; t += 1)
                    dt[t].c();
                T(o, "class", "axis-line svelte-107pwzv"),
                    T(o, "x1", e[10].left),
                    T(o, "x2", a = e[0] - e[10].right),
                    T(o, "y1", s = e[1] - e[10].bottom),
                    T(o, "y2", l = e[1] - e[10].bottom),
                    T(h, "class", "axis-line svelte-107pwzv"),
                    T(h, "x1", e[10].left),
                    T(h, "x2", e[10].left),
                    T(h, "y1", c = e[1] - e[10].bottom),
                    T(h, "y2", e[10].top),
                    T(u, "class", "sigmoid-line svelte-107pwzv"),
                    T(u, "d", m = e[7](Ht)),
                    T(u, "stroke-width", "0"),
                    T(d, "class", "example-circle"),
                    T(d, "r", "0"),
                    T(d, "cx", f = e[3](e[5])),
                    T(d, "cy", M = e[2](e[6](e[5] - 20))),
                    T(d, "fill", L = e[8](e[9])),
                    T(d, "stroke", "var(--paper)"),
                    T(d, "stroke-width", "3"),
                    T(d, "opacity", "1"),
                    T(p, "transform", "translate(0, 0)"),
                    T(A, "class", "boundary-line"),
                    T(A, "stroke", "var(--squidink)"),
                    T(A, "stroke-width", "1.4"),
                    T(A, "fill", "var(--paper)"),
                    T(A, "width", _ = e[0] - e[10].right - e[10].left),
                    T(A, "height", 10),
                    T(A, "opacity", 0),
                    T(z, "transform", P = `translate(${e[10].left}, ${e[2](e[4]) - 5})`),
                    T(N, "class", "arrow-text svelte-107pwzv"),
                    T(N, "x", "-14"),
                    T(N, "y", "0"),
                    T(N, "dominant-baseline", "middle"),
                    T(B, "class", "arrow-text svelte-107pwzv"),
                    T(B, "x", "-14"),
                    T(B, "y", "13"),
                    T(B, "dominant-baseline", "middle"),
                    T(I, "transform", "translate(-20 -8)"),
                    T(C, "class", "arrow-holder svelte-107pwzv"),
                    T(C, "transform", R = `translate(${e[10].left + 50} ${e[2](e[4]) + 15})`),
                    T(H, "class", "arrow-text svelte-107pwzv"),
                    T(H, "x", "-14"),
                    T(H, "y", "0"),
                    T(H, "dominant-baseline", "middle"),
                    T(W, "class", "arrow-text svelte-107pwzv"),
                    T(W, "x", "-14"),
                    T(W, "y", "10"),
                    T(W, "dominant-baseline", "middle"),
                    T(V, "transform", "translate(-40 16)"),
                    T(O, "class", "arrow-holder svelte-107pwzv"),
                    T(O, "transform", G = `translate(${e[10].left + 50} ${e[2](e[4]) - 25})`),
                    T(X, "class", "axis-label svelte-107pwzv"),
                    T(X, "text-anchor", "middle"),
                    T(X, "transform", j = `translate(25,${e[2](.5)}) rotate(-90)`),
                    T(Z, "class", "axis-label svelte-107pwzv"),
                    T(Z, "text-anchor", "middle"),
                    T(Z, "x", J = e[3](63.6)),
                    T(Z, "y", Q = e[1] - 10),
                    T(tt, "transform", `translate(${e[10].left}, 10)`),
                    T(n, "width", e[0]),
                    T(n, "height", et = e[1] + e[10].top + e[10].bottom),
                    T(n, "class", "svelte-107pwzv"),
                    T(r, "id", "scatter-chart"),
                    T(r, "class", "svelte-107pwzv"),
                    U((() => e[22].call(r)))
            },
            m(t, a) {
                b(t, r, a),
                    g(r, n);
                for (let t = 0; t < it.length; t += 1)
                    it[t].m(n, null);
                g(n, i);
                for (let t = 0; t < at.length; t += 1)
                    at[t].m(n, null);
                g(n, o),
                    g(n, h);
                for (let t = 0; t < lt.length; t += 1)
                    lt[t].m(n, null);
                g(n, u),
                    g(n, p),
                    g(p, d),
                    g(n, z),
                    g(z, A),
                    g(n, C),
                    g(C, N),
                    g(N, $),
                    g(C, B),
                    g(B, E),
                    g(C, I);
                for (let t = 0; t < ct.length; t += 1)
                    ct[t].m(I, null);
                g(n, O),
                    g(O, H),
                    g(H, D),
                    g(O, W),
                    g(W, F),
                    g(O, V);
                for (let t = 0; t < mt.length; t += 1)
                    mt[t].m(V, null);
                g(n, X),
                    g(X, Y),
                    g(n, Z),
                    g(Z, K),
                    g(n, tt);
                for (let t = 0; t < dt.length; t += 1)
                    dt[t].m(tt, null);
                rt = q(r, e[22].bind(r))
            },
            p(t, e) {
                if (1034 & e[0]) {
                    let r;
                    for (nt = t[3].ticks(),
                        r = 0; r < nt.length; r += 1) {
                        const o = La(t, nt, r);
                        it[r] ? it[r].p(o, e) : (it[r] = Ta(o),
                            it[r].c(),
                            it[r].m(n, i))
                    }
                    for (; r < it.length; r += 1)
                        it[r].d(1);
                    it.length = nt.length
                }
                if (5125 & e[0]) {
                    let r;
                    for (ot = t[2].ticks(),
                        r = 0; r < ot.length; r += 1) {
                        const i = Sa(t, ot, r);
                        at[r] ? at[r].p(i, e) : (at[r] = za(i),
                            at[r].c(),
                            at[r].m(n, o))
                    }
                    for (; r < at.length; r += 1)
                        at[r].d(1);
                    at.length = ot.length
                }
                if (1 & e[0] && a !== (a = t[0] - t[10].right) && T(o, "x2", a),
                    2 & e[0] && s !== (s = t[1] - t[10].bottom) && T(o, "y1", s),
                    2 & e[0] && l !== (l = t[1] - t[10].bottom) && T(o, "y2", l),
                    2 & e[0] && c !== (c = t[1] - t[10].bottom) && T(h, "y1", c),
                    268 & e[0]) {
                    let r;
                    for (st = Ot,
                        r = 0; r < st.length; r += 1) {
                        const i = Ma(t, st, r);
                        lt[r] ? lt[r].p(i, e) : (lt[r] = Aa(i),
                            lt[r].c(),
                            lt[r].m(n, u))
                    }
                    for (; r < lt.length; r += 1)
                        lt[r].d(1);
                    lt.length = st.length
                }
                if (128 & e[0] && m !== (m = t[7](Ht)) && T(u, "d", m),
                    40 & e[0] && f !== (f = t[3](t[5])) && T(d, "cx", f),
                    100 & e[0] && M !== (M = t[2](t[6](t[5] - 20))) && T(d, "cy", M),
                    768 & e[0] && L !== (L = t[8](t[9])) && T(d, "fill", L),
                    1 & e[0] && _ !== (_ = t[0] - t[10].right - t[10].left) && T(A, "width", _),
                    20 & e[0] && P !== (P = `translate(${t[10].left}, ${t[2](t[4]) - 5})`) && T(z, "transform", P),
                    8192 & e[0]) {
                    let r;
                    for (ht = t[13],
                        r = 0; r < ht.length; r += 1) {
                        const n = ka(t, ht, r);
                        ct[r] ? ct[r].p(n, e) : (ct[r] = _a(n),
                            ct[r].c(),
                            ct[r].m(I, null))
                    }
                    for (; r < ct.length; r += 1)
                        ct[r].d(1);
                    ct.length = ht.length
                }
                if (20 & e[0] && R !== (R = `translate(${t[10].left + 50} ${t[2](t[4]) + 15})`) && T(C, "transform", R),
                    8192 & e[0]) {
                    let r;
                    for (ut = t[13],
                        r = 0; r < ut.length; r += 1) {
                        const n = wa(t, ut, r);
                        mt[r] ? mt[r].p(n, e) : (mt[r] = Pa(n),
                            mt[r].c(),
                            mt[r].m(V, null))
                    }
                    for (; r < mt.length; r += 1)
                        mt[r].d(1);
                    mt.length = ut.length
                }
                if (20 & e[0] && G !== (G = `translate(${t[10].left + 50} ${t[2](t[4]) - 25})`) && T(O, "transform", G),
                    4 & e[0] && j !== (j = `translate(25,${t[2](.5)}) rotate(-90)`) && T(X, "transform", j),
                    8 & e[0] && J !== (J = t[3](63.6)) && T(Z, "x", J),
                    2 & e[0] && Q !== (Q = t[1] - 10) && T(Z, "y", Q),
                    2304 & e[0]) {
                    let r;
                    for (pt = t[11],
                        r = 0; r < pt.length; r += 1) {
                        const n = xa(t, pt, r);
                        dt[r] ? dt[r].p(n, e) : (dt[r] = Ca(n),
                            dt[r].c(),
                            dt[r].m(tt, null))
                    }
                    for (; r < dt.length; r += 1)
                        dt[r].d(1);
                    dt.length = pt.length
                }
                1 & e[0] && T(n, "width", t[0]),
                    2 & e[0] && et !== (et = t[1] + t[10].top + t[10].bottom) && T(n, "height", et)
            },
            i: t,
            o: t,
            d(t) {
                t && y(r),
                    v(it, t),
                    v(at, t),
                    v(lt, t),
                    v(ct, t),
                    v(mt, t),
                    v(dt, t),
                    rt()
            }
        }
    }
    function $a(t, e, r) {
        let n, i, o, a, s, h, u, m;
        l(t, pt, (t => r(9, h = t))),
            l(t, mt, (t => r(4, u = t))),
            l(t, ut, (t => r(5, m = t)));
        let p = 500
            , d = 500;
        const f = {
            top: 50,
            right: 40,
            bottom: 50,
            left: 70
        }
            , g = new Set(Ot.map((t => t.Weather)))
            , b = vr(".1f");
        return t.$$.update = () => {
            1 & t.$$.dirty[0] && r(3, n = Tr().domain([20, 100]).range([f.left, p - f.right])),
                2 & t.$$.dirty[0] && r(2, i = Tr().domain([Jt(Ot, (t => t.Weather)), Kt(Ot, (t => t.Weather))]).range([d - f.bottom, f.top])),
                12 & t.$$.dirty[0] && r(7, a = so().x((t => n(t.x))).y((t => i(t.y)))),
                48 & t.$$.dirty[0] && (Ht[m - 20].y > u ? c(pt, h = "Sunny Day", h) : c(pt, h = "Rainy Day", h))
        }
            ,
            r(8, o = ee().domain(g).range(["#003181", "#ff9900"])),
            r(6, s = t => Ht[t].y),
            [p, d, i, n, u, m, s, a, o, h, f, ["Rainy Day", "Sunny Day"], b, ["M0.200275 13.2782C0.200275 12.4153 0.89983 11.7157 1.76278 11.7157H23.6378C24.5007 11.7157 25.2003 12.4153 25.2003 13.2782C25.2003 14.1411 24.5007 14.8407 23.6378 14.8407H1.76278C0.89983 14.8407 0.200275 14.1411 0.200275 13.2782Z", "M11.5954 1.23584C12.2056 0.62565 13.1949 0.62565 13.8051 1.23584L24.7426 12.1733C25.3528 12.7835 25.3528 13.7729 24.7426 14.3831L13.8051 25.3206C13.1949 25.9307 12.2056 25.9307 11.5954 25.3206C10.9852 24.7104 10.9852 23.721 11.5954 23.1108L21.4281 13.2782L11.5954 3.44555C10.9852 2.83536 10.9852 1.84604 11.5954 1.23584Z", "M 11.5954 1.23584 C 12.2056 0.62565 13.1949 0.62565 13.8051 1.23584 L 24.7426 12.1733 C 25.3528 12.7835 25.3528 13.7729 24.7426 14.3831 L 13.8051 25.3206 C 13.1949 25.9307 12.2056 25.9307 11.5954 25.3206 C 10.9852 24.7104 10.9852 23.721 11.5954 23.1108 L 21.4281 13.2782 L 11.5954 3.44555 C 10.9852 2.83536 10.9852 1.84604 11.5954 1.23584 Z"], function () {
                Dn(".scatter-circle").transition().delay(1e3).attr("r", 0),
                    Dn(".legend-circle").transition().delay(1e3).attr("r", 0),
                    Dn(".legend-text").transition().delay(1e3).attr("font-size", 0)
            }
                , function () {
                    Dn(".scatter-circle").transition().delay(1e3).attr("r", 5),
                        Dn(".legend-circle").transition().delay(1e3).attr("r", 5),
                        Dn(".legend-text").transition().delay(1e3).attr("font-size", 16)
                }
                , function () {
                    Dn(".sigmoid-line").transition().delay(1e3).attr("stroke-width", 0)
                }
                , function () {
                    Dn(".sigmoid-line").transition().delay(1e3).attr("stroke-width", 5)
                }
                , function () {
                    Dn(".boundary-line").transition().delay(1e3).attr("opacity", 0),
                        Dn(".arrow-text").transition().delay(1e3).attr("font-size", 0),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("fill", "none"),
                        Dn(".top-arrow").transition().delay(1e3).attr("fill", "none"),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("stroke-width", "0"),
                        Dn(".top-arrow").transition().delay(1e3).attr("stroke-width", "0"),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("stroke", "none"),
                        Dn(".top-arrow").transition().delay(1e3).attr("stroke", "none")
                }
                , function () {
                    Dn(".boundary-line").transition().delay(1e3).attr("opacity", 1),
                        Dn(".arrow-text").transition().delay(1e3).attr("font-size", 13),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("fill", "var(--anchor)"),
                        Dn(".top-arrow").transition().delay(1e3).attr("fill", "var(--smile"),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("stroke", "var(--anchor)"),
                        Dn(".top-arrow").transition().delay(1e3).attr("stroke", "var(--smile"),
                        Dn(".bottom-arrow").transition().delay(1e3).attr("stroke-width", 3),
                        Dn(".top-arrow").transition().delay(1e3).attr("stroke-width", 3)
                }
                , function () {
                    Dn(".example-circle").transition().delay(1e3).attr("r", 0)
                }
                , function () {
                    Dn(".example-circle").transition().delay(1e3).attr("r", 13)
                }
                , function () {
                    p = this.offsetWidth,
                        d = this.offsetHeight,
                        r(0, p),
                        r(1, d)
                }
            ]
    }
    class Ba extends lt {
        constructor(t) {
            super(),
                st(this, t, $a, Na, s, {
                    hidePoints: 14,
                    showPoints: 15,
                    hideCurve: 16,
                    showCurve: 17,
                    hideBoundary: 18,
                    showBoundary: 19,
                    hideExample: 20,
                    showExample: 21
                }, null, [-1, -1])
        }
        get hidePoints() {
            return this.$$.ctx[14]
        }
        get showPoints() {
            return this.$$.ctx[15]
        }
        get hideCurve() {
            return this.$$.ctx[16]
        }
        get showCurve() {
            return this.$$.ctx[17]
        }
        get hideBoundary() {
            return this.$$.ctx[18]
        }
        get showBoundary() {
            return this.$$.ctx[19]
        }
        get hideExample() {
            return this.$$.ctx[20]
        }
        get showExample() {
            return this.$$.ctx[21]
        }
    }
    function qa(t) {
        let e, r, n, i, a, s, l, h, c, u, m, p, d, f, v, w, S, z, P, C, N, $, B, q, E, I, R, O, H, D, W, F, V, U, G, X, Y, j, Z, K, J, Q, rt, at, st, lt, ht, ct, ut, mt, pt, dt, ft, gt, bt, yt;
        return mt = new Ba({
            props: {}
        }),
            t[6](mt),
        {
            c() {
                e = x("h2"),

                    r = M(),
                    n = x("p"),
                    i = M(),
                    a = x("section"),
                    s = x("div"),
                    l = x("div"),
                    h = x("div"),
                    c = M(),
                    u = x("div"),
                    m = M(),
                    p = x("div"),
                    d = M(),
                    f = x("div"),
                    v = x("div"),
                    w = x("p"),
                    w.textContent = "To see how the model works for yourself, drag the values to make a\n            prediction!",
                    S = M(),
                    z = x("br"),
                    P = x("br"),
                    C = M(),    
                    N = x("div"),
                    $ = x("p"),
                    B = x("span"),
                    B.textContent = "Temperature:",
                    q = M(),
                    E = k(t[2]),
                    I = k(" Degrees Fahrenheit"),
                    R = M(),
                    O = x("input"),
                    H = M(),
                    D = x("div"),
                    W = x("p"),
                    F = x("span"),
                    F.textContent = "Classification Threshold: ",
                    V = k(t[1]),
                    U = M(),
                    G = x("input"),
                    X = M(),
                    Y = x("br"),
                    j = x("br"),
                    Z = M(),
                    K = x("p"),
                    J = k("The prediction is a "),
                    Q = x("span"),
                    rt = k(t[3]),
                    at = k("."),
                    st = M(),
                    lt = x("div"),
                    ht = M(),
                    ct = x("div"),
                    ut = x("div"),
                    nt(mt.$$.fragment),
                    pt = M(),
                    dt = x("br"),
                    ft = x("br"),
                    T(e, "class", "body-header"),
                    T(n, "class", "body-text"),
                    T(h, "class", "step svelte-cqbz1t"),
                    T(h, "data-index", "1"),
                    T(u, "class", "step svelte-cqbz1t"),
                    T(u, "data-index", "2"),
                    T(p, "class", "step svelte-cqbz1t"),
                    T(p, "data-index", "3"),
                    T(B, "class", "bold"),
                    T(O, "type", "range"),
                    T(O, "min", "20"),
                    T(O, "max", "100"),
                    T(O, "class", "slider svelte-cqbz1t"),
                    T(O, "id", "tempSlider"),
                    T(N, "id", "input-container"),
                    T(F, "class", "bold"),
                    T(G, "type", "range"),
                    T(G, "min", "0"),
                    T(G, "max", "1"),
                    T(G, "step", "0.01"),
                    T(G, "class", "slider svelte-cqbz1t"),
                    T(G, "id", "boundarySlider"),
                    T(D, "id", "input-container"),
                    T(Q, "class", "bold"),
                    T(v, "class", "step-content svelte-cqbz1t"),
                    T(f, "class", "step svelte-cqbz1t"),
                    T(f, "data-index", "4"),
                    T(lt, "class", "spacer svelte-cqbz1t"),
                    T(l, "class", "steps-container svelte-cqbz1t"),
                    T(ut, "class", "chart-one svelte-cqbz1t"),
                    T(ct, "class", "charts-container svelte-cqbz1t"),
                    T(s, "class", "section-container svelte-cqbz1t")
            },
            m(o, y) {
                b(o, e, y),
                    b(o, r, y),
                    b(o, n, y),
                    b(o, i, y),
                    b(o, a, y),
                    g(a, s),
                    g(s, l),
                    g(l, h),
                    g(l, c),
                    g(l, u),
                    g(l, m),
                    g(l, p),
                    g(l, d),
                    g(l, f),
                    g(f, v),
                    g(v, w),
                    g(v, S),
                    g(v, z),
                    g(v, P),
                    g(v, C),
                    g(v, N),
                    g(N, $),
                    g($, B),
                    g($, q),
                    g($, E),
                    g($, I),
                    g(N, R),
                    g(N, O),
                    _(O, t[2]),
                    g(v, H),
                    g(v, D),
                    g(D, W),
                    g(W, F),
                    g(W, V),
                    g(D, U),
                    g(D, G),
                    _(G, t[1]),
                    g(v, X),
                    g(v, Y),
                    g(v, j),
                    g(v, Z),
                    g(v, K),
                    g(K, J),
                    g(K, Q),
                    g(Q, rt),
                    g(K, at),
                    g(l, st),
                    g(l, lt),
                    g(s, ht),
                    g(s, ct),
                    g(ct, ut),
                    it(mt, ut, null),
                    g(a, pt),
                    g(a, dt),
                    g(a, ft),
                    gt = !0,
                    bt || (yt = [L(O, "change", t[4]), L(O, "input", t[4]), L(G, "change", t[5]), L(G, "input", t[5])],
                        bt = !0)
            },
            p(t, [e]) {
                (!gt || 4 & e) && A(E, t[2]),
                    4 & e && _(O, t[2]),
                    (!gt || 2 & e) && A(V, t[1]),
                    2 & e && _(G, t[1]),
                    (!gt || 8 & e) && A(rt, t[3]);
                mt.$set({})
            },
            i(t) {
                gt || (tt(mt.$$.fragment, t),
                    gt = !0)
            },
            o(t) {
                et(mt.$$.fragment, t),
                    gt = !1
            },
            d(s) {
                s && y(e),
                    s && y(r),
                    s && y(n),
                    s && y(i),
                    s && y(a),
                    t[6](null),
                    ot(mt),
                    bt = !1,
                    o(yt)
            }
        }
    }
    function Ea(t, e, r) {
        let n, i, o, a;
        l(t, mt, (t => r(1, n = t))),
            l(t, ut, (t => r(2, i = t))),
            l(t, pt, (t => r(3, o = t)));
        const s = {
            0: () => {
                a.hidePoints(),
                    a.hideCurve(),
                    a.hideBoundary(),
                    a.hideExample()
            }
            ,
            1: () => {
                a.showPoints(),
                    a.hideCurve(),
                    a.hideBoundary(),
                    a.hideExample()
            }
            ,
            2: () => {
                a.showCurve(),
                    a.showPoints(),
                    a.hideBoundary(),
                    a.hideExample()
            }
            ,
            3: () => {
                a.showCurve(),
                    a.showPoints(),
                    a.showBoundary()
            }
            ,
            4: () => {
                a.showCurve(),
                    a.showPoints(),
                    a.showBoundary(),
                    a.showExample()
            }
        };
        R((() => {
            Dn(".step").nodes().forEach((t => {
                h.observe(t)
            }
            ))
        }
        ));
        let h = new IntersectionObserver((t => {
            t.forEach((t => {
                if (t.isIntersecting) {
                    const e = t.target.getAttribute("data-index");
                    document.querySelectorAll(`[data-index="${e}"]`),
                        e in s && function (t) {
                            t in s && s[t]()
                        }(e)
                }
            }
            ))
        }
        ), {
            DecisionBoundary: {
                $DecisionBoundary: n
            }
        });
        return [a, n, i, o, function () {
            i = z(this.value),
                ut.set(i)
        }
            , function () {
                n = z(this.value),
                    mt.set(n)
            }
            , function (t) {
                H[t ? "unshift" : "push"]((() => {
                    a = t,
                        r(0, a)
                }
                ))
            }
        ]
    }
    class Ia extends lt {
        constructor(t) {
            super(),
                st(this, t, Ea, qa, s, {})
        }
    }
    const { window: Ra } = rt;
    function Oa(e) {
        let r, n, i, o, a, s, l, h, c, u, m, p, d, f, g, v, x, w, k, S, T, z;
        return r = new Mt({}),
            i = new Tt({}),
            a = new At({}),
            l = new Rt({}),
            c = new Ia({}),
            m = new Lo({}),
            d = new Jo({}),
            g = new fa({}),
            x = new ba({}),
            k = new va({}),
        {
            c() {
                nt(r.$$.fragment),
                    n = M(),
                    nt(i.$$.fragment),
                    o = M(),
                    nt(a.$$.fragment),
                    s = M(),
                    nt(l.$$.fragment),
                    h = M(),
                    nt(c.$$.fragment),
                    u = M(),
                    nt(m.$$.fragment),
                    p = M(),
                    nt(d.$$.fragment),
                    f = M(),
                    nt(g.$$.fragment),
                    v = M(),
                    nt(x.$$.fragment),
                    w = M(),
                    nt(k.$$.fragment)
            },
            m(t, y) {
                it(r, t, y),
                    b(t, n, y),
                    it(i, t, y),
                    b(t, o, y),
                    it(a, t, y),
                    b(t, s, y),
                    it(l, t, y),
                    b(t, h, y),
                    it(c, t, y),
                    b(t, u, y),
                    it(m, t, y),
                    b(t, p, y),
                    it(d, t, y),
                    b(t, f, y),
                    it(g, t, y),
                    b(t, v, y),
                    it(x, t, y),
                    b(t, w, y),
                    it(k, t, y),
                    S = !0,
                    T || (z = L(Ra, "resize", e[0]),
                        T = !0)
            },
            p: t,
            i(t) {
                S || (tt(r.$$.fragment, t),
                    tt(i.$$.fragment, t),
                    tt(a.$$.fragment, t),
                    tt(l.$$.fragment, t),
                    tt(c.$$.fragment, t),
                    tt(m.$$.fragment, t),
                    tt(d.$$.fragment, t),
                    tt(g.$$.fragment, t),
                    tt(x.$$.fragment, t),
                    tt(k.$$.fragment, t),
                    S = !0)
            },
            o(t) {
                et(r.$$.fragment, t),
                    et(i.$$.fragment, t),
                    et(a.$$.fragment, t),
                    et(l.$$.fragment, t),
                    et(c.$$.fragment, t),
                    et(m.$$.fragment, t),
                    et(d.$$.fragment, t),
                    et(g.$$.fragment, t),
                    et(x.$$.fragment, t),
                    et(k.$$.fragment, t),
                    S = !1
            },
            d(t) {
                ot(r, t),
                    t && y(n),
                    ot(i, t),
                    t && y(o),
                    ot(a, t),
                    t && y(s),
                    ot(l, t),
                    t && y(h),
                    ot(c, t),
                    t && y(u),
                    ot(m, t),
                    t && y(p),
                    ot(d, t),
                    t && y(f),
                    ot(g, t),
                    t && y(v),
                    ot(x, t),
                    t && y(w),
                    ot(k, t),
                    T = !1,
                    z()
            }
        }
    }
    function Ha(t, e, r) {
        let n;
        function i() {
            c(wt, n = window.innerWidth <= 700, n)
        }
        return l(t, wt, (t => r(1, n = t))),
            i(),
            [i]
    }
    return new class extends lt {
        constructor(t) {
            super(),
                st(this, t, Ha, Oa, s, {})
        }
    }
        ({
            target: document.body,
            props: {
                name: "world"
            }
        })
}();
//# sourceMappingURL=bundle.js.map
