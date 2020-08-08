!
function (e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var l = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(l.exports, l, l.exports, t),
        l.l = !0,
        l.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    },
    t.n = function (e) {
        var n = e && e.__esModule ?
        function () {
            return e.
        default
        } : function () {
            return e
        };
        return t.d(n, "a", n),
        n
    },
    t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    t.p = "",
    t(t.s = 0)
}([function (e, t, n) {
    (function (o) {
        var l, r, i;
        !
        function (n, o) {
            r = [],
            l = o(n),
            void 0 !== (i = "function" == typeof l ? l.apply(t, r) : l) && (e.exports = i)
        }(void 0 !== o ? o : this.window || this.global, function (e) {
            "use strict";

            function t() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) m.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            function o(e, t, n) {
                t || (t = 250);
                var o, l;
                return function () {
                    var r = n || this,
                        i = +new Date,
                        s = arguments;
                    o && i < o + t ? (clearTimeout(l), l = setTimeout(function () {
                            o = i,
                            e.apply(r, s)
                        }, t)) : (o = i, e.apply(r, s))
                }
            }
            var l, r, i = n(2),
                s = {},
                c = {},
                a = n(3),
                u = n(4);
            if ("undefined" != typeof window) {
                    var d, f = !! e.document.querySelector && !! e.addEventListener,
                        m = Object.prototype.hasOwnProperty;
                    return c.destroy = function () {
                            if (!s.skipRendering) try {
                                document.querySelector(s.tocSelector).innerHTML = ""
                            } catch (e) {
                                console.warn("Element not found: " + s.tocSelector)
                            }
                            s.scrollContainer && document.querySelector(s.scrollContainer) ? (document.querySelector(s.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(s.scrollContainer).removeEventListener("resize", this._scrollListener, !1), l && document.querySelector(s.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), l && document.removeEventListener("click", this._clickListener, !1))
                        },
                    c.init = function (e) {
                            if (f && (s = t(i, e || {}), this.options = s, this.state = {}, s.scrollSmooth && (s.duration = s.scrollSmoothDuration, s.offset = s.scrollSmoothOffset, c.scrollSmooth = n(5).initSmoothScrolling(s)), l = a(s), r = u(s), this._buildHtml = l, this._parseContent = r, c.destroy(), null !== (d = r.selectHeadings(s.contentSelector, s.headingSelector)))) {
                                var m = r.nestHeadingsArray(d),
                                    h = m.nest;
                                s.skipRendering || l.render(s.tocSelector, h),
                                this._scrollListener = o(function (e) {
                                        l.updateToc(d);
                                        var t = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
                                        (e && (0 === e.eventPhase || null === e.currentTarget) || t) && (l.updateToc(d), s.scrollEndCallback && s.scrollEndCallback(e))
                                    }, s.throttleTimeout),
                                this._scrollListener(),
                                s.scrollContainer && document.querySelector(s.scrollContainer) ? (document.querySelector(s.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(s.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
                                var p = null;
                                return this._clickListener = o(function (e) {
                                        s.scrollSmooth && l.disableTocAnimation(e),
                                        l.updateToc(d),
                                        p && clearTimeout(p),
                                        p = setTimeout(function () {
                                            l.enableTocAnimation()
                                        }, s.scrollSmoothDuration)
                                    }, s.throttleTimeout),
                                s.scrollContainer && document.querySelector(s.scrollContainer) ? document.querySelector(s.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1),
                                this
                            }
                        },
                    c.refresh = function (e) {
                            c.destroy(),
                            c.init(e || this.options)
                        },
                    e.tocbot = c,
                    c
                }
        })
    }).call(t, n(1))
},


function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
},


function (e, t) {
    e.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        //scrollSmoothDuration: 420,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        onClick: !1,
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1
    }
},


function (e, t) {
    e.exports = function (e) {
        function t(e, n) {
            var r = n.appendChild(o(e));
            if (e.children.length) {
                var i = l(e.isCollapsed);
                e.children.forEach(function (e) {
                    t(e, i)
                }),
                r.appendChild(i)
            }
        }
        function n(e, n) {
            var o = l(!1);
            n.forEach(function (e) {
                t(e, o)
            });
            var r = document.querySelector(e);
            if (null !== r) return r.firstChild && r.removeChild(r.firstChild),
            0 === n.length ? r : r.appendChild(o)
        }
        function o(t) {
            var n = document.createElement("li"),
                o = document.createElement("a");
            return e.listItemClass && n.setAttribute("class", e.listItemClass),
            e.onClick && (o.onclick = e.onClick),
            e.includeHtml && t.childNodes.length ? d.call(t.childNodes, function (e) {
                    o.appendChild(e.cloneNode(!0))
                }) : o.textContent = t.textContent,
            o.setAttribute("href", "#" + t.id),
            o.setAttribute("class", e.linkClass + p + "node-name--" + t.nodeName + p + e.extraLinkClasses),
            n.appendChild(o),
            n
        }
        function l(t) {
            var n = e.orderedList ? "ol" : "ul",
                o = document.createElement(n),
                l = e.listClass + p + e.extraListClasses;
            return t && (l += p + e.collapsibleClass, l += p + e.isCollapsedClass),
            o.setAttribute("class", l),
            o
        }
        function r() {
            if (e.scrollContainer && document.querySelector(e.scrollContainer)) var t = document.querySelector(e.scrollContainer).scrollTop;
            else var t = document.documentElement.scrollTop || m.scrollTop;
            var n = document.querySelector(e.positionFixedSelector);
            "auto" === e.fixedSidebarOffset && (e.fixedSidebarOffset = document.querySelector(e.tocSelector).offsetTop),
            t > e.fixedSidebarOffset ? -1 === n.className.indexOf(e.positionFixedClass) && (n.className += p + e.positionFixedClass) : n.className = n.className.split(p + e.positionFixedClass).join("")
        }
        function i(t) {
            var n = 0;
            return t != document.querySelector(e.contentSelector && null != t) && (n = t.offsetTop, e.hasInnerContainers && (n += i(t.offsetParent))),
            n
        }
        function s(t) {
            if (e.scrollContainer && document.querySelector(e.scrollContainer)) var n = document.querySelector(e.scrollContainer).scrollTop;
            else var n = document.documentElement.scrollTop || m.scrollTop;
            e.positionFixedSelector && r();
            var o, l = t;
            if (h && null !== document.querySelector(e.tocSelector) && l.length > 0) {
                f.call(l, function (t, r) {
                    if (i(t) > n + e.headingsOffset + 10) {
                        return o = l[0 === r ? r : r - 1],
                        !0
                    }
                    if (r === l.length - 1) return o = l[l.length - 1],
                    !0
                });
                var s = document.querySelector(e.tocSelector).querySelectorAll("." + e.linkClass);
                d.call(s, function (t) {
                    t.className = t.className.split(p + e.activeLinkClass).join("")
                });
                var a = document.querySelector(e.tocSelector).querySelectorAll("." + e.listItemClass);
                d.call(a, function (t) {
                    t.className = t.className.split(p + e.activeListItemClass).join("")
                });
                var u = document.querySelector(e.tocSelector).querySelector("." + e.linkClass + ".node-name--" + o.nodeName + '[href="#' + o.id + '"]'); - 1 === u.className.indexOf(e.activeLinkClass) && (u.className += p + e.activeLinkClass);
                var C = u.parentNode;
                C && -1 === C.className.indexOf(e.activeListItemClass) && (C.className += p + e.activeListItemClass);
                var v = document.querySelector(e.tocSelector).querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
                d.call(v, function (t) {
                    -1 === t.className.indexOf(e.isCollapsedClass) && (t.className += p + e.isCollapsedClass)
                }),
                u.nextSibling && -1 !== u.nextSibling.className.indexOf(e.isCollapsedClass) && (u.nextSibling.className = u.nextSibling.className.split(p + e.isCollapsedClass).join("")),
                c(u.parentNode.parentNode)
            }
        }
        function c(t) {
            return -1 !== t.className.indexOf(e.collapsibleClass) && -1 !== t.className.indexOf(e.isCollapsedClass) ? (t.className = t.className.split(p + e.isCollapsedClass).join(""), c(t.parentNode.parentNode)) : t
        }
        function a(t) {
            var n = t.target || t.srcElement;
            "string" == typeof n.className && -1 !== n.className.indexOf(e.linkClass) && (h = !1)
        }
        function u() {
            h = !0
        }
        var d = [].forEach,
            f = [].some,
            m = document.body,
            h = !0,
            p = " ";
        return {
                enableTocAnimation: u,
                disableTocAnimation: a,
                render: n,
                updateToc: s
            }
    }
},


function (e, t) {
    e.exports = function (e) {
        function t(e) {
            return e[e.length - 1]
        }
        function n(e) {
            return +e.nodeName.split("H").join("")
        }
        function o(t) {
            var o = {
                id: t.id,
                children: [],
                nodeName: t.nodeName,
                headingLevel: n(t),
                textContent: t.textContent.trim()
            };
            return e.includeHtml && (o.childNodes = t.childNodes),
            o
        }
        function l(l, r) {
            for (var i = o(l), s = n(l), c = r, a = t(c), u = a ? a.headingLevel : 0, d = s - u; d > 0;) a = t(c),
            a && void 0 !== a.children && (c = a.children),
            d--;
            return s >= e.collapseDepth && (i.isCollapsed = !0),
            c.push(i),
            c
        }
        function r(t, n) {
            var o = n;
            e.ignoreSelector && (o = n.split(",").map(function (t) {
                return t.trim() + ":not(" + e.ignoreSelector + ")"
            }));
            try {
                return document.querySelector(t).querySelectorAll(o)
            } catch (e) {
                return console.warn("Element not found: " + t),
                null
            }
        }
        function i(e) {
            return s.call(e, function (e, t) {
                return l(o(t), e.nest),
                e
            }, {
                nest: []
            })
        }
        var s = [].reduce;
        return {
            nestHeadingsArray: i,
            selectHeadings: r
        }
    }
},


function (e, t) {
    function n(e) {
        function t(e) {
            return "a" === e.tagName.toLowerCase() && (e.hash.length > 0 || "#" === e.href.charAt(e.href.length - 1)) && (n(e.href) === s || n(e.href) + "#" === s)
        }
        function n(e) {
            return e.slice(0, e.lastIndexOf("#"))
        }
        function l(e) {
            var t = document.getElementById(e.substring(1));
            t && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
        }!
        function () {
            document.documentElement.style
        }();
        var r = e.duration,
            i = e.offset,
            s = location.hash ? n(location.href) : location.href;
        !
        function () {
                function n(n) {
                    !t(n.target) || n.target.className.indexOf("no-smooth-scroll") > -1 || "#" === n.target.href.charAt(n.target.href.length - 2) && "!" === n.target.href.charAt(n.target.href.length - 1) || -1 === n.target.className.indexOf(e.linkClass) || o(n.target.hash, {
                        duration: r,
                        offset: i,
                        callback: function () {
                            l(n.target.hash)
                        }
                    })
                }
                document.body.addEventListener("click", n, !1)
            }()
    }
    function o(e, t) {
        function n(e) {
            i = e - r,
            window.scrollTo(0, c.easing(i, s, u, d)),
            i < d ? requestAnimationFrame(n) : o()
        }
        function o() {
            window.scrollTo(0, s + u),
            "function" == typeof c.callback && c.callback()
        }
        function l(e, t, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t)
        }
        var r, i, s = window.pageYOffset,
            c = {
                duration: t.duration,
                offset: t.offset || 0,
                callback: t.callback,
                easing: t.easing || l
            },
            a = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]'),
            u = "string" == typeof e ? c.offset + (e ? a && a.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e,
            d = "function" == typeof c.duration ? c.duration(u) : c.duration;
        requestAnimationFrame(function (e) {
                r = e,
                n(e)
            })
    }
    t.initSmoothScrolling = n
}]);