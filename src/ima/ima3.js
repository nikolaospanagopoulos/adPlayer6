// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
       */
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        p = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        q = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ha = function(a) {
            if (!(a instanceof Array)) {
                a = q(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ia = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d =
                    arguments[c];
                if (d)
                    for (var e in d) ia(d, e) && (a[e] = d[e])
            }
            return a
        };
    p("Object.assign", function(a) {
        return a || ka
    });
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if ("undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = ma(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c,
                    e, d) || e
            }
        }(),
        oa;
    if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa,
        t = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (sa) sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ya = b.prototype
        },
        ta = function() {
            this.B = !1;
            this.l = null;
            this.A = void 0;
            this.g = 1;
            this.I = this.h = 0;
            this.o = null
        },
        ua = function(a) {
            if (a.B) throw new TypeError("Generator is already running");
            a.B = !0
        };
    ta.prototype.C = function(a) {
        this.A = a
    };
    var va = function(a, b) {
        a.o = {
            zd: b,
            Xe: !0
        };
        a.g = a.h || a.I
    };
    ta.prototype.return = function(a) {
        this.o = {
            return: a
        };
        this.g = this.I
    };
    var wa = function(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        },
        xa = function(a) {
            a.h = 0;
            var b = a.o.zd;
            a.o = null;
            return b
        },
        ya = function(a) {
            this.g = new ta;
            this.h = a
        },
        Ba = function(a, b) {
            ua(a.g);
            var c = a.g.l;
            if (c) return za(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
            a.g.return(b);
            return Aa(a)
        },
        za = function(a, b, c, d) {
            try {
                var e = b.call(a.g.l, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.B = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.l = null,
                    va(a.g, g), Aa(a)
            }
            a.g.l = null;
            d.call(a.g, f);
            return Aa(a)
        },
        Aa = function(a) {
            for (; a.g.g;) try {
                var b = a.h(a.g);
                if (b) return a.g.B = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.A = void 0, va(a.g, c)
            }
            a.g.B = !1;
            if (a.g.o) {
                b = a.g.o;
                a.g.o = null;
                if (b.Xe) throw b.zd;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Ca = function(a) {
            this.next = function(b) {
                ua(a.g);
                a.g.l ? b = za(a, a.g.l.next, b, a.g.C) : (a.g.C(b), b = Aa(a));
                return b
            };
            this.throw = function(b) {
                ua(a.g);
                a.g.l ? b = za(a, a.g.l["throw"], b, a.g.C) : (va(a.g, b), b = Aa(a));
                return b
            };
            this.return = function(b) {
                return Ba(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Da = function(a, b) {
            b = new Ca(new ya(b));
            sa && a.prototype && sa(b, a.prototype);
            return b
        },
        Ea = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Fa = function(a) {
            return Ea(new Ca(new ya(a)))
        };
    p("Reflect", function(a) {
        return a ? a : {}
    });
    p("Reflect.construct", function() {
        return na
    });
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : sa ? function(b, c) {
            try {
                return sa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    p("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.B()
                })
            }
            this.g.push(g)
        };
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.B = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (n) {
                        this.o(n)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.h = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(n) {
                return function(m) {
                    k || (k = !0, n.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.B)
            }
        };
        e.prototype.H = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ?
                this.G(g) : this.A(g)
            }
        };
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.A(g)
        };
        e.prototype.B = function(g) {
            this.I(2, g)
        };
        e.prototype.A = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            2 === this.g && this.J();
            this.L()
        };
        e.prototype.J = function() {
            var g = this;
            d(function() {
                    if (g.D()) {
                        var h = da.console;
                        "undefined" !== typeof h && h.error(g.l)
                    }
                },
                1)
        };
        e.prototype.D = function() {
            if (this.C) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.L = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h =
                    null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.o();
            g.Rb(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (n) {
                k.reject(n)
            }
        };
        e.prototype.then = function(g, h) {
            function k(r, w) {
                return "function" == typeof r ? function(x) {
                    try {
                        n(r(x))
                    } catch (G) {
                        m(G)
                    }
                } : w
            }
            var n, m, v = new e(function(r, w) {
                n = r;
                m = w
            });
            this.Rb(k(g, n), k(h, m));
            return v
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Rb = function(g, h) {
            function k() {
                switch (n.g) {
                    case 1:
                        g(n.l);
                        break;
                    case 2:
                        h(n.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.g);
                }
            }
            var n = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.C = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var n = q(g), m = n.next(); !m.done; m = n.next()) c(m.value).Rb(h, k)
            })
        };
        e.all = function(g) {
            var h = q(g),
                k = h.next();
            return k.done ? c([]) : new e(function(n, m) {
                function v(x) {
                    return function(G) {
                        r[x] = G;
                        w--;
                        0 == w && n(r)
                    }
                }
                var r = [],
                    w = 0;
                do r.push(void 0), w++, c(k.value).Rb(v(r.length -
                    1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    p("Object.setPrototypeOf", function(a) {
        return a || sa
    });
    p("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var n = typeof k;
            return "object" === n && null !== k || "function" === n
        }

        function d(k) {
            if (!ia(k, f)) {
                var n = new b;
                ba(k, f, {
                    value: n
                })
            }
        }

        function e(k) {
            var n = Object[k];
            n && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return n(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        n = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [n, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(n)) return !1;
                    m.delete(k);
                    m.set(n, 4);
                    return !m.has(k) && 4 == m.get(n)
                } catch (v) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                    k = q(k);
                    for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        h.prototype.set = function(k, n) {
            if (!c(k)) throw Error("Invalid WeakMap key");
            d(k);
            if (!ia(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.g] = n;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ia(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ia(k, f) && ia(k[f],
                this.g)
        };
        h.prototype.delete = function(k) {
            return c(k) && ia(k, f) && ia(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    p("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(q([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var n = k.entries(),
                        m = n.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = n.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
                } catch (v) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                    h = q(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this.h[n.id] = []);
            n.ma ? n.ma.value = k : (n.ma = {
                next: this.g,
                Ja: this.g.Ja,
                head: this.g,
                key: h,
                value: k
            }, n.list.push(n.ma), this.g.Ja.next = n.ma, this.g.Ja = n.ma, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ma.Ja.next = h.ma.next, h.ma.next.Ja = h.ma.Ja,
                h.ma.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ma
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ma) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var n = this.entries(),
                    m; !(m = n.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var n = k && typeof k;
                "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
                var m = h.h[n];
                if (m && ia(h.h, n))
                    for (h = 0; h < m.length; h++) {
                        var v = m[h];
                        if (k !== k && v.key !== v.key || k === v.key) return {
                            id: n,
                            list: m,
                            index: h,
                            ma: v
                        }
                    }
                return {
                    id: n,
                    list: m,
                    index: -1,
                    ma: void 0
                }
            },
            e = function(h, k) {
                var n = h.g;
                return ea(function() {
                    if (n) {
                        for (; n.head != h.g;) n = n.Ja;
                        for (; n.next != n.head;) return n =
                            n.next, {
                                done: !1,
                                value: k(n)
                            };
                        n = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ja = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Ga = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ga(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var Ha = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ha(this, function(b) {
                return b
            })
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ga(this, b, "includes").indexOf(b, c || 0)
        }
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ia = function(a) {
        return a ? a : Array.prototype.fill
    };
    p("Int8Array.prototype.fill", Ia);
    p("Uint8Array.prototype.fill", Ia);
    p("Uint8ClampedArray.prototype.fill", Ia);
    p("Int16Array.prototype.fill", Ia);
    p("Uint16Array.prototype.fill", Ia);
    p("Int32Array.prototype.fill", Ia);
    p("Uint32Array.prototype.fill", Ia);
    p("Float32Array.prototype.fill", Ia);
    p("Float64Array.prototype.fill", Ia);
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ga(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return c
            })
        }
    });
    p("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535,
                e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    var Ja = Ja || {},
        u = this || self,
        y = function(a, b, c) {
            a = a.split(".");
            c = c || u;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Ka = function(a, b) {
            a = a.split(".");
            b = b || u;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        La = function() {},
        Ma = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Na = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ra = function(a) {
            return Object.prototype.hasOwnProperty.call(a, Oa) && a[Oa] || (a[Oa] = ++Pa)
        },
        Ta = function(a) {
            null !== a && "removeAttribute" in a && a.removeAttribute(Oa);
            try {
                delete a[Oa]
            } catch (b) {}
        },
        Oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Pa = 0,
        Ua = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Va = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        Wa = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa = Ua : Wa = Va;
            return Wa.apply(null, arguments)
        },
        Xa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Ya = function() {
            return Date.now()
        },
        Za = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ya = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.xh = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        $a = function(a) {
            return a
        };
    var ab = function(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (n) {
                    e(n)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (n) {
                    e(n)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(n) {
                    n(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };

    function bb(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, bb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    Za(bb, Error);
    bb.prototype.name = "CustomError";
    var cb;
    var db, eb = "undefined" !== typeof TextEncoder;

    function fb(a) {
        if (eb) a = (db || (db = new TextEncoder)).encode(a);
        else {
            var b = void 0;
            b = void 0 === b ? !1 : b;
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] =
                            f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = d.subarray(0, c)
        }
        return a
    };
    var gb = function(a) {
        return Array.prototype.map.call(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var ib = function(a) {
            return function() {
                return a
            }
        },
        jb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        kb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        lb = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = u.setTimeout(e, 1E3);
                    var g = d;
                    d = [];
                    a.apply(void 0, g)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var nb = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        z = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function ob(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var pb = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                } return d
        },
        qb = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        rb = function(a, b, c) {
            var d = c;
            z(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        sb = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function tb(a, b) {
        b = ub(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ub(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function vb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    }

    function wb(a, b) {
        return 0 <= nb(a, b)
    }

    function xb(a, b) {
        b = nb(a, b);
        var c;
        (c = 0 <= b) && yb(a, b);
        return c
    }

    function yb(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }

    function zb(a, b) {
        var c = 0;
        ob(a, function(d, e) {
            b.call(void 0, d, e, a) && yb(a, e) && c++
        })
    }

    function Ab(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Bb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Cb(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = Na(e) ? "o" + Ra(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    }

    function Db(a, b) {
        a.sort(b || Eb)
    }

    function Eb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Fb(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = "";
        return b
    };

    function Gb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Hb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ib(a) {
        var b = Jb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return !0;
        return !1
    }

    function Kb(a) {
        var b = Lb,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Mb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Nb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Ob(a, b) {
        var c = Ma(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    }

    function Pb(a, b) {
        return null !== a && b in a
    }

    function Qb(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function Rb(a) {
        var b = Sb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function Tb(a) {
        for (var b in a) return !1;
        return !0
    }

    function Ub(a) {
        for (var b in a) delete a[b]
    }

    function Vb(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Xb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wb.length; f++) c = Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Yb, Zb = function() {
        if (void 0 === Yb) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: $a,
                        createScript: $a,
                        createScriptURL: $a
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Yb = a
            } else Yb = a
        }
        return Yb
    };
    var bc = function(a, b) {
        this.g = a === $b && b || "";
        this.h = ac
    };
    bc.prototype.Qa = !0;
    bc.prototype.Ga = function() {
        return this.g
    };
    var cc = function(a) {
            return a instanceof bc && a.constructor === bc && a.h === ac ? a.g : "type_error:Const"
        },
        dc = function(a) {
            return new bc($b, a)
        },
        ac = {},
        $b = {};
    var fc = function(a, b) {
        this.g = b === ec ? a : ""
    };
    l = fc.prototype;
    l.Qa = !0;
    l.Ga = function() {
        return this.g.toString()
    };
    l.Fc = !0;
    l.Bc = function() {
        return 1
    };
    l.toString = function() {
        return this.g + ""
    };
    var gc = function(a) {
            return a instanceof fc && a.constructor === fc ? a.g : "type_error:TrustedResourceUrl"
        },
        ec = {},
        hc = function(a) {
            var b = Zb();
            a = b ? b.createScriptURL(a) : a;
            return new fc(a, ec)
        };
    var ic = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        jc = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        kc = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        lc = /&/g,
        mc = /</g,
        nc = />/g,
        oc = /"/g,
        pc = /'/g,
        qc = /\x00/g,
        rc = /[\x00&<>"']/,
        sc = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        uc = function(a, b) {
            var c = 0;
            a = kc(String(a)).split(".");
            b = kc(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c &&
                e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = tc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || tc(0 == f[2].length, 0 == g[2].length) || tc(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        tc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var wc = function(a, b) {
        this.g = b === vc ? a : ""
    };
    l = wc.prototype;
    l.Qa = !0;
    l.Ga = function() {
        return this.g.toString()
    };
    l.Fc = !0;
    l.Bc = function() {
        return 1
    };
    l.toString = function() {
        return this.g.toString()
    };
    var xc = function(a) {
            return a instanceof wc && a.constructor === wc ? a.g : "type_error:SafeUrl"
        },
        yc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ac = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        vc = {},
        Bc = new wc("about:invalid#zClosurez", vc);
    var Cc = {},
        Dc = function(a, b) {
            this.g = b === Cc ? a : "";
            this.Qa = !0
        };
    Dc.prototype.Ga = function() {
        return this.g
    };
    Dc.prototype.toString = function() {
        return this.g.toString()
    };
    var Ec = new Dc("", Cc);
    var Fc;
    a: {
        var Gc = u.navigator;
        if (Gc) {
            var Hc = Gc.userAgent;
            if (Hc) {
                Fc = Hc;
                break a
            }
        }
        Fc = ""
    }

    function A(a) {
        return -1 != Fc.indexOf(a)
    };

    function Ic() {
        return A("Trident") || A("MSIE")
    }

    function Jc() {
        return A("Firefox") || A("FxiOS")
    }

    function Kc() {
        return A("Safari") && !(Lc() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Jc() || A("Silk") || A("Android"))
    }

    function Lc() {
        return (A("Chrome") || A("CriOS")) && !A("Edge")
    };
    var Mc = {},
        Nc = function(a, b, c) {
            this.g = c === Mc ? a : "";
            this.h = b;
            this.Qa = this.Fc = !0
        };
    Nc.prototype.Bc = function() {
        return this.h
    };
    Nc.prototype.Ga = function() {
        return this.g.toString()
    };
    Nc.prototype.toString = function() {
        return this.g.toString()
    };
    var Oc = function(a) {
            return a instanceof Nc && a.constructor === Nc ? a.g : "type_error:SafeHtml"
        },
        Pc = function(a, b) {
            var c = Zb();
            a = c ? c.createHTML(a) : a;
            return new Nc(a, b, Mc)
        },
        Qc = new Nc(u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, Mc);
    var Rc = jb(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Oc(Qc);
            return !b.parentElement
        }),
        Sc = function(a, b) {
            if (Rc())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Oc(b)
        },
        Tc = function(a, b) {
            a.write(Oc(b))
        },
        Uc = /^[\w+/_-]+[=]{0,2}$/,
        Vc = function(a, b) {
            b = (b || u).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Uc.test(a) ? a :
                "" : ""
        };
    var Wc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Xc = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Yc = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Zc = function(a) {
            return null == a ? "" : String(a)
        },
        ad = 2147483648 * Math.random() | 0,
        bd = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        cd = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        dd = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])",
                "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        ed = function(a) {
            isFinite(a) && (a = String(a));
            return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
        };
    var fd = "function" === typeof Uint8Array.prototype.slice,
        gd, hd = 0,
        id = 0;

    function jd(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        a >>>= 0;
        b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
        hd = c;
        id = a
    };
    var kd = function() {
        this.g = new Uint8Array(64);
        this.h = 0
    };
    kd.prototype.push = function(a) {
        if (!(this.h + 1 < this.g.length)) {
            var b = this.g;
            this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
            this.g.set(b)
        }
        this.g[this.h++] = a
    };
    kd.prototype.length = function() {
        return this.h
    };
    kd.prototype.end = function() {
        var a = this.g,
            b = this.h;
        this.h = 0;
        return 0 === b ? gd || (gd = new Uint8Array(0)) : fd ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
    };
    var ld = function(a) {
            for (var b = hd, c = id; 0 < c || 127 < b;) a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.push(b)
        },
        md = function(a, b) {
            for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
            a.push(b)
        },
        nd = function(a, b) {
            a.push(b >>> 0 & 255);
            a.push(b >>> 8 & 255);
            a.push(b >>> 16 & 255);
            a.push(b >>> 24 & 255)
        };

    function od() {
        return A("iPhone") && !A("iPod") && !A("iPad")
    }

    function pd() {
        return od() || A("iPad") || A("iPod")
    };
    var qd = function(a) {
        qd[" "](a);
        return a
    };
    qd[" "] = La;
    var rd = function(a, b) {
            try {
                return qd(a[b]), !0
            } catch (c) {}
            return !1
        },
        td = function(a, b) {
            var c = sd;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var ud = A("Opera"),
        vd = Ic(),
        wd = A("Edge"),
        xd = A("Gecko") && !(sc(Fc, "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        yd = sc(Fc, "WebKit") && !A("Edge"),
        zd = A("Macintosh"),
        Bd = A("Android"),
        Cd = od(),
        Dd = A("iPad"),
        Ed = A("iPod"),
        Fd = pd(),
        Gd = function() {
            var a = u.document;
            return a ? a.documentMode : void 0
        },
        Hd;
    a: {
        var Id = "",
            Jd = function() {
                var a = Fc;
                if (xd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (wd) return /Edge\/([\d\.]+)/.exec(a);
                if (vd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (yd) return /WebKit\/(\S+)/.exec(a);
                if (ud) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Jd && (Id = Jd ? Jd[1] : "");
        if (vd) {
            var Kd = Gd();
            if (null != Kd && Kd > parseFloat(Id)) {
                Hd = String(Kd);
                break a
            }
        }
        Hd = Id
    }
    var Ld = Hd,
        sd = {},
        Md = function(a) {
            return td(a, function() {
                return 0 <= uc(Ld, a)
            })
        },
        Nd;
    if (u.document && vd) {
        var Od = Gd();
        Nd = Od ? Od : parseInt(Ld, 10) || void 0
    } else Nd = void 0;
    var Pd = Nd;
    var Qd = Jc(),
        Rd = od() || A("iPod"),
        Sd = A("iPad"),
        Td = A("Android") && !(Lc() || Jc() || A("Opera") || A("Silk")),
        Ud = Lc(),
        Vd = Kc() && !pd();
    var Wd = {},
        Xd = null,
        Zd = function(a, b) {
            void 0 === b && (b = 0);
            Yd();
            b = Wd[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    n = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + n + g + h + k
            }
            n = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    n = a[e + 1], k = b[(n & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d
            }
            return c.join("")
        },
        $d = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            return Zd(b,
                3)
        },
        be = function(a) {
            var b = [];
            ae(a, function(c) {
                b.push(c)
            });
            return b
        },
        ae = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var n = a.charAt(d++),
                        m = Xd[n];
                    if (null != m) return m;
                    if (!jc(n)) throw Error("Unknown base64 encoding at char: " + n);
                }
                return k
            }
            Yd();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Yd = function() {
            if (!Xd) {
                Xd = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/",
                        "-_=", "-_.", "-_"
                    ], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Wd[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Xd[f] && (Xd[f] = e)
                    }
                }
            }
        };
    var ce = function() {
            this.l = [];
            this.h = 0;
            this.g = new kd
        },
        de = function(a, b) {
            0 !== b.length && (a.l.push(b), a.h += b.length)
        },
        ee = function(a) {
            de(a, a.g.end())
        },
        fe = function(a, b) {
            md(a.g, 8 * b + 2);
            ee(a);
            return {
                af: a.h,
                we: a.l.length - 1
            }
        },
        ge = function(a, b) {
            ee(a);
            md(a.g, a.h + a.g.length() - b.af);
            var c = a.g.end();
            a.h += c.length;
            a.l.splice(1 + b.we, 0, c)
        },
        he = function(a) {
            var b = a.h + a.g.length();
            if (0 === b) return new Uint8Array(0);
            b = new Uint8Array(b);
            for (var c = a.l, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                0 !== g.length && (b.set(g, e), e += g.length)
            }
            c =
                a.g;
            d = c.h;
            0 !== d && (b.set(c.g.subarray(0, d), e), c.h = 0);
            a.l = [b];
            return b
        },
        ie = function(a, b, c) {
            if (null != c && null != c)
                if (md(a.g, 8 * b), a = a.g, 0 <= c) md(a, c);
                else {
                    for (b = 0; 9 > b; b++) a.push(c & 127 | 128), c >>= 7;
                    a.push(1)
                }
        },
        je = function(a, b, c) {
            null != c && null != c && (md(a.g, 8 * b), a = a.g, jd(c), ld(a))
        },
        ke = function(a, b, c) {
            null != c && null != c && (md(a.g, 8 * b), a = a.g, jd(c), ld(a))
        },
        le = function(a, b, c) {
            md(a.g, 8 * b + 2);
            md(a.g, c.length);
            ee(a);
            de(a, c)
        },
        ne = function(a, b, c) {
            var d = me;
            null != c && (b = fe(a, b), d(c, a), ge(a, b))
        },
        oe = function(a, b, c, d) {
            if (null != c)
                for (var e =
                        0; e < c.length; e++) {
                    var f = fe(a, b);
                    d(c[e], a);
                    ge(a, f)
                }
        };
    var pe = "function" === typeof Uint8Array;

    function qe(a, b, c) {
        return "object" === typeof a ? pe && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : re(a, b, c) : b(a)
    }

    function re(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = qe(f, b, c))
            }
            Array.isArray(a) && a.Ze && se(d);
            return d
        }
        d = {};
        for (e in a) f = a[e], null != f && (d[e] = qe(f, b, c));
        return d
    }

    function te(a) {
        return re(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Zd(b)
        })
    }
    var ue = {
            Ze: {
                value: !0,
                configurable: !0
            }
        },
        se = function(a) {
            Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, ue);
            return a
        },
        ve;
    var we;

    function xe(a, b) {
        we = b;
        a = new a(b);
        we = null;
        return a
    };
    var B = function(a, b, c) {
            var d = we;
            we = null;
            a || (a = d);
            d = this.constructor.messageId;
            a || (a = d ? [d] : []);
            this.o = d ? 0 : -1;
            this.g = null;
            this.h = a;
            a: {
                d = this.h.length;a = d - 1;
                if (d && (d = this.h[a], !(null === d || "object" != typeof d || Array.isArray(d) || pe && d instanceof Uint8Array))) {
                    this.B = a - this.o;
                    this.l = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.B = Math.max(b, a + 1 - this.o), this.l = null) : this.B = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++) a = c[b], a < this.B ? (a += this.o, (d = this.h[a]) ? se(d) : this.h[a] = ye) : (ze(this), (d = this.l[a]) ? se(d) : this.l[a] = ye)
        },
        ye = Object.freeze(se([])),
        ze = function(a) {
            var b = a.B + a.o;
            a.h[b] || (a.l = a.h[b] = {})
        },
        C = function(a, b, c) {
            return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.B ? a.l ? a.l[b] : void 0 : a.h[b + a.o]
        },
        Be = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = C(a, b, c);
            null == d && (d = ye);
            d === ye && (d = se([]), Ae(a, b, d, c));
            return d
        },
        Ce = function(a, b) {
            a = C(a, b);
            return null == a ? a : +a
        },
        De = function(a, b) {
            a = C(a, b);
            return null == a ? a : !!a
        },
        Ee = function(a, b, c) {
            a = C(a, b);
            return null == a ? c : a
        },
        Fe = function(a, b) {
            a = De(a, b);
            return null == a ? !1 : a
        },
        Ae = function(a, b, c, d) {
            (void 0 ===
                d ? 0 : d) || b >= a.B ? (ze(a), a.l[b] = c) : a.h[b + a.o] = c;
            return a
        },
        Ge = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            return Ae(a, b, se(c || []), d)
        };

    function He(a, b, c, d) {
        c !== d ? Ae(a, b, c) : Ae(a, b, void 0);
        return a
    }
    var Ie = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != C(a, e) && (0 !== c && Ae(a, c, void 0), c = e)
            }
            return c
        },
        Je = function(a, b, c) {
            if (-1 === c) return null;
            a.g || (a.g = {});
            if (!a.g[c]) {
                var d = C(a, c, !1);
                d && (a.g[c] = new b(d))
            }
            return a.g[c]
        },
        Ke = function(a, b, c) {
            a.g || (a.g = {});
            var d = a.g[c];
            if (!d) {
                var e = Be(a, c);
                d = [];
                for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
                a.g[c] = d
            }
            return d
        },
        Me = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            a.g || (a.g = {});
            var e = c ? Le(c, !1) : c;
            a.g[b] = c;
            return Ae(a, b, e, d)
        };
    B.prototype.toJSON = function() {
        var a = Le(this, !1);
        return ve ? a : te(a)
    };
    var Le = function(a, b) {
            if (a.g)
                for (var c in a.g) {
                    var d = a.g[c];
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e++) d[e] && Le(d[e], b);
                    else d && Le(d, b)
                }
            return a.h
        },
        Oe = function(a) {
            ve = !0;
            try {
                return JSON.stringify(a.toJSON(), Ne)
            } finally {
                ve = !1
            }
        },
        Ne = function(a, b) {
            switch (typeof b) {
                case "number":
                    return isFinite(b) ? b : String(b);
                case "object":
                    if (pe && null != b && b instanceof Uint8Array) return Zd(b)
            }
            return b
        };
    B.prototype.toString = function() {
        return Le(this, !1).toString()
    };
    var Pe = function(a, b, c) {
        b = Ie(a, c) === b ? b : -1;
        return Ee(a, b, 0)
    };

    function Qe(a, b) {
        if (a = a.A) {
            ee(b);
            for (var c = 0; c < a.length; c++) de(b, a[c])
        }
    };
    var Re = document,
        D = window;
    var Se = {};

    function Te() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Ue;

    function Ve() {
        var a, b;
        if (void 0 === Ue) try {
            Ue = null !== (b = null === (a = Te()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Ue = null
        }
        return Ue
    };
    var We = function() {},
        Xe = function(a) {
            this.g = a
        };
    t(Xe, We);
    Xe.prototype.toString = function() {
        return this.g
    };
    var Ye = new Xe("about:invalid#zTSz", Se);
    var Ze = function() {},
        $e = function(a) {
            this.g = a
        };
    t($e, Ze);
    $e.prototype.toString = function() {
        return this.g.toString()
    };

    function af(a) {
        var b, c = null === (b = Ve()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new $e(null !== c && void 0 !== c ? c : a, Se)
    };

    function bf(a) {
        if (a instanceof Ze)
            if (a instanceof $e) a = a.g;
            else throw Error("");
        else a = gc(a);
        return a
    }

    function cf(a) {
        if (a instanceof We)
            if (a instanceof Xe) a = a.g;
            else throw Error("");
        else a = xc(a);
        return a
    };
    /*
       
        Copyright 2021 The Safevalues Authors
        SPDX-License-Identifier: Apache-2.0
       */
    function df(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    var ef = jb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function ff(a) {
        return a ? a.passive && ef() ? a : a.capture || !1 : !1
    }
    var gf = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, ff(d)), !0) : !1
        },
        hf = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, ff(void 0))
        },
        jf = function(a) {
            var b = void 0 === b ? {} : b;
            if ("function" === typeof window.CustomEvent) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c)
        };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var kf = vd || yd;
    var lf = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    lf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    lf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    lf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    lf.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var mf = function(a, b) {
        this.width = a;
        this.height = b
    };
    l = mf.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var pf = function(a) {
            return a ? new nf( of (a)) : cb || (cb = new nf)
        },
        qf = function(a) {
            var b = document;
            return "string" === typeof a ? b.getElementById(a) : a
        },
        rf = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        },
        tf = function(a, b) {
            Gb(b, function(c, d) {
                c && "object" == typeof c && c.Qa && (c = c.Ga());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : sf.hasOwnProperty(d) ? a.setAttribute(sf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 ==
                    d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        sf = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        uf = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new mf(a.clientWidth, a.clientHeight)
        },
        vf = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : yd || "CSS1Compat" != a.compatMode ?
                a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return vd && Md("10") && a.pageYOffset != b.scrollTop ? new lf(b.scrollLeft, b.scrollTop) : new lf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        E = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        yf = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[1],
                g = wf(e, String(d[0]));
            f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : tf(g, f));
            2 < d.length && xf(e, g, d, 2);
            return g
        },
        xf = function(a, b, c, d) {
            function e(h) {
                h &&
                    b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Ma(f) || Na(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Na(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    z(g ? Bb(f) : f, e)
                }
            }
        },
        wf = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        zf = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Af = function(a) {
            var b;
            if (kf && !(vd && Md("9") && !Md("10") && u.SVGElement && a instanceof u.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Na(b) && 1 == b.nodeType ? b : null
        },
        Bf = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        of = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Cf = function(a) {
            try {
                return a.contentWindow ||
                    (a.contentDocument ? E(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        Df = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        nf = function(a) {
            this.g = a || u.document || document
        };
    l = nf.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    l.createElement = function(a) {
        return wf(this.g, a)
    };
    l.appendChild = function(a, b) {
        a.appendChild(b)
    };
    l.append = function(a, b) {
        xf( of (a), a, arguments, 1)
    };
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    var Ff = function() {
            return !Ef() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
        },
        Ef = function() {
            return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
        };
    var Gf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Hf = function(a) {
            var b = a.match(Gf);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        If = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Wc(e) : "")
                }
            }
        },
        Jf = /#|$/,
        Kf = function(a, b) {
            var c = a.search(Jf);
            a: {
                var d =
                    0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Wc(a.substr(d, e - d))
        };
    var Lf = function(a) {
            try {
                return !!a && null != a.location.href && rd(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Nf = function(a) {
            for (var b = u, c = 0; b && 40 > c++ && (!Lf(b) || !a(b));) b = Mf(b)
        },
        Of = function() {
            var a, b = a = void 0 === a ? u : a;
            Nf(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Mf = function(a) {
            try {
                var b = a.parent;
                if (b && b != a) return b
            } catch (c) {}
            return null
        },
        Pf = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Qf = /https?:\/\/[^\/]+/,
        Rf = function(a) {
            return (a = Qf.exec(a)) && a[0] || ""
        },
        Sf = function() {
            var a =
                u;
            var b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        },
        Uf = function() {
            var a = Tf;
            if (!a) return "";
            var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        Vf = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Wf = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (Vf(a,
                        b)) return a;
                if (!(a = Mf(a))) break
            }
            return null
        },
        Yf = function(a) {
            var b = Xf;
            a = void 0 === a ? window.document : a;
            0 != b.length && a.head && b.forEach(function(c) {
                if (c) {
                    var d = a;
                    d = void 0 === d ? window.document : d;
                    if (c && d.head) {
                        var e = document.createElement("meta");
                        d.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = c
                    }
                }
            })
        };
    var F = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    F.prototype.getWidth = function() {
        return this.right - this.left
    };
    F.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    var Zf = function(a) {
        return new F(a.top, a.right, a.bottom, a.left)
    };
    F.prototype.expand = function(a, b, c, d) {
        Na(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    F.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    F.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    F.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var $f = function(a, b, c) {
        b instanceof lf ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    F.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var ag = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        bg = function(a) {
            return new F(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    ag.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ag.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ag.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    ag.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var cg = function(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var dg = function(a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement("img");
            c.src = b;
            a.google_image_requests.push(c)
        },
        fg = function(a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Pf(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            eg(c)
        },
        eg = function(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : dg(b, a)
        };
    var gg = function(a) {
        this.$e = a
    };

    function hg(a) {
        return new gg(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var ig = [hg("data"), hg("http"), hg("https"), hg("mailto"), hg("ftp"), new gg(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var kg = function(a, b) {
            if ("string" === typeof b)(b = jg(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = jg(d, c);
                    f && (d.style[f] = e)
                }
        },
        lg = {},
        jg = function(a, b) {
            var c = lg[b];
            if (!c) {
                var d = bd(b);
                c = d;
                void 0 === a.style[d] && (d = (yd ? "Webkit" : xd ? "Moz" : vd ? "ms" : null) + dd(d), void 0 !== a.style[d] && (c = d));
                lg[b] = c
            }
            return c
        },
        mg = function(a, b) {
            var c = a.style[bd(b)];
            return "undefined" !== typeof c ? c : a.style[jg(a, b)] || ""
        },
        ng = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        og = function(a) {
            var b = of (a),
                c = new lf(0, 0);
            var d = b ? of (b) : document;
            d = !vd || 9 <= Number(Pd) || "CSS1Compat" == pf(d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = ng(a);
            b = vf(pf(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        pg = function(a, b) {
            var c = new lf(0, 0),
                d = E( of (a));
            if (!rd(d, "parent")) return c;
            do {
                if (d == b) var e = og(a);
                else e = ng(a), e = new lf(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        qg = function() {
            var a = "100%";
            "number" == typeof a && (a = Math.round(a) +
                "px");
            return a
        },
        sg = function(a) {
            var b = rg;
            a: {
                var c = of (a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break a
                }
                c = ""
            }
            c || (c = a.currentStyle ? a.currentStyle.display : null);
            if ("none" != (c || a.style && a.style.display)) return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        rg = function(a) {
            var b =
                a.offsetWidth,
                c = a.offsetHeight,
                d = yd && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = ng(a), new mf(a.right - a.left, a.bottom - a.top)) : new mf(b, c)
        };
    var tg = !!window.google_async_iframe_id,
        ug = tg && window.parent || window,
        vg = function() {
            if (tg && !Lf(ug)) {
                var a = "." + Re.domain;
                try {
                    for (; 2 < a.split(".").length && !Lf(ug);) Re.domain = a = a.substr(a.indexOf(".") + 1), ug = window.parent
                } catch (b) {}
                Lf(ug) || (ug = window)
            }
            return ug
        };
    var wg = function(a) {
            this.g = a;
            this.defaultValue = !1
        },
        xg = function(a, b) {
            this.g = a;
            this.defaultValue = void 0 === b ? 0 : b
        };
    var yg = new wg(1930),
        zg = new xg(360261971),
        Ag = new xg(1921, 72),
        Bg = new xg(1920, 24),
        Cg = new xg(1917, 300),
        Dg = new xg(1916, .001),
        Eg = new wg(1954),
        Fg = new wg(1948),
        Gg = new wg(1928),
        Hg = new wg(1941),
        Ig = new wg(370946349),
        Jg = new wg(379841917),
        Kg = new wg(396382471),
        Lg = new wg(393546021);
    var H = function(a) {
        if (a.Hc && a.hasOwnProperty("Hc")) return a.Hc;
        var b = new a;
        return a.Hc = b
    };
    var Mg = function() {
            var a = {};
            this.g = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.h = function(b, c) {
                return null != a[b] ? a[b] : c
            }
        },
        Ng = function(a) {
            return H(Mg).g(a.g, a.defaultValue)
        },
        Og = function(a) {
            return H(Mg).h(a.g, a.defaultValue)
        };
    var Pg = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Lf(a) && (c = a, b = d);
        return {
            ka: c,
            level: b
        }
    };
    var Qg = function() {
            this.S = {}
        },
        Tg = function() {
            if (Rg) var a = Rg;
            else {
                a = ((a = cg()) ? Lf(a.master) ? a.master : null : null) || vg();
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Rg = b : a.google_persistent_state_async = Rg = new Qg
            }
            b = vg();
            var c = cg(b);
            c ? ((c = c || cg()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Pg(b).ka, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
                43))), b = c);
            c = Sg[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            a = void 0 === d ? a[c] = b : d;
            return a
        },
        Rg = null,
        Ug = {},
        Sg = (Ug[8] = "google_prev_ad_formats_by_region", Ug[9] = "google_prev_ad_slotnames_by_region", Ug);
    var Vg = function() {
        var a;
        this.g = a = void 0 === a ? {} : a
    };
    Vg.prototype.reset = function() {
        this.g = {}
    };

    function Wg(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (0 === c.length) return af(a[0]);
        d = [a[0]];
        for (var e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return af(d.join(""))
    };
    var Xg = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        Yg = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var Zg = null;
    var $g = function() {
            var a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ya()
        },
        ah = function() {
            var a = void 0 === a ? u : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        bh = function(a) {
            var b = u.performance;
            return b && b.timing && b.timing[a] || 0
        },
        ch = function() {
            var a = Math.min(bh("domLoading") || Infinity, bh("domInteractive") || Infinity);
            return Infinity == a ? Math.max(bh("responseEnd"), bh("navigationStart")) : a
        };
    var dh = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var eh = u.performance,
        fh = !!(eh && eh.mark && eh.measure && eh.clearMarks),
        gh = jb(function() {
            var a;
            if (a = fh) {
                var b;
                if (null === Zg) {
                    Zg = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Zg = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Zg;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        hh = function(a, b) {
            this.events = [];
            this.g = b || u;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = gh() || (null !=
                c ? c : Math.random() < a)
        };
    hh.prototype.C = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (gh() && z(this.events, ih), this.events.length = 0)
    };
    hh.prototype.I = function(a) {
        !this.l || 2048 < this.events.length || this.events.push(a)
    };
    var ih = function(a) {
        a && eh && gh() && (eh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), eh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    hh.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new dh(a, b, ah() || $g());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        eh && gh() && eh.mark(b);
        return a
    };
    hh.prototype.end = function(a) {
        if (this.l && "number" === typeof a.value) {
            a.duration = (ah() || $g()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            eh && gh() && eh.mark(b);
            this.I(a)
        }
    };
    var jh = fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        kh = function() {
            this.h = "jserror";
            this.l = !1;
            this.g = null;
            this.o = !1;
            this.A = Math.random();
            this.B = this.Ia;
            this.C = null
        };
    l = kh.prototype;
    l.Vc = function(a) {
        this.h = a
    };
    l.lc = function(a) {
        this.g = a
    };
    l.Wc = function(a) {
        this.l = a
    };
    l.Xc = function(a) {
        this.o = a
    };
    l.Ia = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.A : Math.random()) > (void 0 === c ? .01 : c)) return this.l;
        Yg(b) || (b = new Xg(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        u.google_js_errors = u.google_js_errors || [];
        u.google_js_errors.push(b);
        if (!u.error_rep_loaded) {
            c = Wg(jh);
            var f;
            a = u.document;
            b = null != (f = this.C) ? f : hc(bf(c).toString());
            f = a.createElement("script");
            f.src = bf(b);
            df(f);
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(f,
                a);
            u.error_rep_loaded = !0
        }
        return this.l
    };
    l.fb = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.B(a, e, .01, c, this.h)) throw e;
        }
        return d
    };
    l.Sc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var lh = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        mh = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var nh = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var oh = function(a, b, c) {
            Pf(b, function(d, e) {
                var f = c && c[e];
                !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
            });
            return a
        },
        wh = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            hh.call(this, a, h);
            var k = this;
            this.L = 0;
            this.K = f;
            this.$ = b;
            this.J = c;
            this.Y = d;
            this.aa = e;
            a = this.g.navigator;
            this.V = !("csi.gstatic.com" !== this.J || !a || !a.sendBeacon);
            this.B = {};
            this.H = {};
            this.g.performance && this.g.performance.now || ph(this, "dat", 1);
            a && a.deviceMemory && ph(this, "dmc",
                a.deviceMemory);
            this.g === this.g.top && ph(this, "top", 1);
            this.T = !g;
            this.M = function() {
                k.g.setTimeout(function() {
                    return qh(k)
                }, 1100)
            };
            this.ua = [];
            this.X = function() {
                rh(k, 1)
            };
            this.R = function() {
                rh(k, 2)
            };
            this.da = lb(function() {
                qh(k)
            });
            this.va = function() {
                var m = k.g.document;
                (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.da()
            };
            this.D = this.g.setTimeout(function() {
                return qh(k)
            }, 5E3);
            this.A = {};
            this.o = b.length + c.length + d.length + e.length + 3;
            this.h = 0;
            z(this.events, function(m) {
                return sh(k,
                    m)
            });
            this.G = [];
            b = nh(this.g);
            var n = function(m) {
                var v = m[0];
                m = m[1];
                var r = v.length + m.length + 2;
                8E3 < k.o + k.h + r && qh(k);
                k.G.push([v, m]);
                k.h += r;
                th(k);
                return 0
            };
            z(b, function(m) {
                return n(m)
            });
            b.length = 0;
            b.push = n;
            uh(this);
            vh(this)
        };
    t(wh, hh);
    var vh = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                return qh(a)
            }, 0) : gf(a.g, "load", a.M);
            var b = mh(a.g.document);
            "undefined" !== typeof b && gf(a.g, b, a.va);
            Ng(Eg) || gf(a.g, "unload", a.X);
            gf(a.g, "pagehide", a.R)
        },
        ph = function(a, b, c) {
            c = String(c);
            a.o = null != a.B[b] ? a.o + (c.length - a.B[b].length) : a.o + (b.length + c.length + 2);
            a.B[b] = c
        },
        xh = function(a) {
            null != a.B.uet && (a.o -= 3 + a.B.uet.length + 2, delete a.B.uet)
        },
        Ah = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = yh(a, b, c, d, e);
            8E3 < a.o + a.h + f && (qh(a),
                f = b.length + c.length + 2);
            zh(a, b, c, d, e);
            a.h += f;
            th(a)
        },
        yh = function(a, b, c, d, e) {
            return null == a.A[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.A[b].length
        },
        zh = function(a, b, c, d, e) {
            a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + (void 0 === e ? "" : e) + c) : c
        },
        th = function(a) {
            6E3 <= a.o + a.h && qh(a)
        },
        qh = function(a) {
            if (a.l && a.T) {
                try {
                    if (a.h) {
                        var b = a.A;
                        a.L++;
                        var c = Bh(a, b);
                        b = !1;
                        try {
                            b = !!(a.V && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                        } catch (d) {
                            a.V = !1
                        }
                        b || dg(a.g, c);
                        uh(a);
                        a.L === a.K && a.C()
                    }
                } catch (d) {
                    (new kh).Ia(358,
                        d)
                }
                a.A = {};
                a.h = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.D);
                a.D = 0
            }
        },
        Bh = function(a, b) {
            var c = a.$ + "//" + a.J + a.Y + a.aa,
                d = {};
            c = oh(c, a.B, d);
            c = oh(c, b, d);
            a.g.google_timing_params && (c = oh(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
            z(a.G, function(e) {
                var f = q(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = oh(c, (g[e] = f, g))
            });
            a.G.length = 0;
            return c
        },
        uh = function(a) {
            ph(a, "puid", (a.L + 1).toString(36) + "~" + Ya().toString(36))
        },
        sh = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) :
                b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
            Ah(a, c, b, !0, "~")
        };
    wh.prototype.I = function(a) {
        this.l && this.L < this.K && (hh.prototype.I.call(this, a), sh(this, a))
    };
    wh.prototype.C = function() {
        hh.prototype.C.call(this);
        this.g.clearTimeout(this.D);
        this.h = this.D = 0;
        this.A = {};
        Ub(this.H);
        Ub(this.B);
        hf(this.g, "load", this.M);
        Ng(Eg) || hf(this.g, "unload", this.X);
        hf(this.g, "pagehide", this.R)
    };
    var rh = function(a, b) {
        ph(a, "uet", b);
        z(a.ua, function(c) {
            try {
                c()
            } catch (d) {}
        });
        jf(a.g);
        qh(a);
        xh(a)
    };
    var Ch = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (void 0 === f) b.push("undefined");
                    else if (null === f) b.push("NULL");
                    else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Na(f)) {
                        f[Oa] || c.push(f);
                        var k = Ra(f);
                        if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
                        else {
                            d[k] = !0;
                            b.push("{");
                            for (var n in f) "function" !== typeof f[n] && (b.push("\n"), b.push(h), b.push(n + " = "), e(f[n], h));
                            b.push("\n" +
                                g + "}");
                            delete d[k]
                        }
                    } else b.push(f)
                } catch (m) {
                    b.push("*** " + m + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) Ta(c[a]);
        return b.join("")
    };
    var Dh = function() {
            this.g = new wh(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = Tg();
            null != a && ph(this.g, "c", a);
            a = parseInt(this.g.B.c, 10) / 2;
            null != a && ph(this.g, "slotId", a)
        },
        I = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.H[d] || (Ah(a, b, c, !1), 1E3 > d.length && (a.H[d] = !0))
            }
        },
        Eh = function(a, b) {
            for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
            a = a.g;
            c = !1;
            var d = 0,
                e;
            for (e in b) null != a.A[e] && (c = !0), d += yh(a, e, b[e], !1);
            (8E3 <
                a.o + a.h + d || c) && qh(a);
            for (var f in b) zh(a, f, b[f], !1);
            a.h += d;
            th(a)
        },
        Fh = function(a) {
            var b = J().g,
                c = $g() - 0;
            b.l && b.I(new dh(a, 4, c, 0, void 0))
        },
        J = function() {
            return H(Dh)
        };
    var Gh = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Hh = function(a) {
            try {
                return u.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (Gh(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Ih = function(a) {
            this.g = a
        },
        Kh = function(a, b) {
            var c = [];
            Jh(a, b, c);
            return c.join("")
        },
        Jh = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Jh(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Lh(d, c), c.push(":"), Jh(a, a.g ? a.g.call(b, d,
                            e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Lh(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Mh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Nh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Lh = function(a, b) {
            b.push('"', a.replace(Nh,
                function(c) {
                    var d = Mh[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Mh[c] = d);
                    return d
                }), '"')
        };
    var Oh = function() {
            this.l = null;
            this.g = "missing-id";
            this.h = !1
        },
        Qh = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return Ph("missing-element", a.g), null
            }
            if (1 < b.length) return Ph("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (Ph("missing-element", a.g), null)
        },
        Sh = function() {
            var a = Rh,
                b = Qh(a);
            if (null !== b)
                if (Gh(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = "string" === typeof d;
                    if ("string" == typeof c) {
                        var f = J();
                        null != c &&
                            ph(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    "string" !== typeof b ? Ph("missing-flags", a.g) : (e || Ph("missing-binary-id", a.g), a.l = b)
                } else Ph("invalid-json", a.g)
        };
    Oh.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };
    var Uh = function(a, b, c, d, e) {
            this.id = a;
            this.F = b;
            this.o = c;
            this.g = !1;
            this.l = d;
            this.h = e;
            this.o && Th(this)
        },
        Vh = function(a) {
            return a.g || a.o
        },
        Th = function(a) {
            if (a.l && a.h) {
                var b = a.l;
                b && Object.assign(a.h.g, b)
            }
        },
        Wh = function() {
            this.g = []
        },
        Xh = function() {
            this.g = new Map;
            this.h = !1;
            this.B = new Wh;
            this.A = new Uh(0, 0, !1);
            this.l = [this.B];
            this.o = new Vg
        },
        K = function(a) {
            var b = Yh;
            if (b.h || b.g.has(a.id) || null == a.F && null == a.control || 0 == a.ye) return b.A;
            var c = b.B;
            if (null != a.control)
                for (var d = q(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e =
                        e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.sa && (c = a.sa);
            d = 0;
            null != a.control ? d = a.control.F : null != a.F && (d = a.F);
            a = new Uh(a.id, d, !!a.zh, a.flags, b.o);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        Zh = function() {
            var a = Yh;
            return [].concat(ha(a.g.keys())).filter(function(b) {
                return Vh(this.g.get(b))
            }, a)
        },
        $h = function(a) {
            var b = Yh;
            b.h || (a.g(b.l, b.g), b.h = !0)
        };
    Xh.prototype.reset = function() {
        for (var a = q(this.g), b = a.next(); !b.done; b = a.next()) b = q(b.value), b.next(), b.next().value.g = !1;
        this.h = !1;
        this.o.reset()
    };
    var Yh = new Xh,
        bi = function() {
            return ai.g.filter(function(a) {
                return Vh(a)
            }).map(function(a) {
                return a.id
            })
        };
    var ci = function() {};
    ci.prototype.g = function(a) {
        a = q(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = q(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.F, d < c) {
                    e.g = !0;
                    Th(e);
                    break
                }
        }
    };
    var ei = function(a) {
        B.call(this, a, -1, di)
    };
    t(ei, B);
    var di = [2, 8],
        fi = [3, 4, 5];
    var hi = function(a) {
        B.call(this, a, -1, gi)
    };
    t(hi, B);
    var gi = [4];
    var ji = function(a) {
        B.call(this, a, -1, ii)
    };
    t(ji, B);
    var ii = [5],
        ki = [1, 2, 3, 6, 7];
    var mi = function(a) {
        B.call(this, a, -1, li)
    };
    t(mi, B);
    mi.prototype.getId = function() {
        return Ee(this, 1, 0)
    };
    var li = [2];
    var oi = function(a) {
        B.call(this, a, -1, ni)
    };
    t(oi, B);
    var ni = [2];
    var qi = function(a) {
        B.call(this, a, -1, pi)
    };
    t(qi, B);
    var si = function(a) {
        B.call(this, a, -1, ri)
    };
    t(si, B);
    var pi = [1, 4, 2, 3],
        ri = [2];
    var ti = function(a, b) {
            switch (b) {
                case 1:
                    return Pe(a, 1, ki);
                case 2:
                    return Pe(a, 2, ki);
                case 3:
                    return Pe(a, 3, ki);
                case 6:
                    return Pe(a, 6, ki);
                default:
                    return null
            }
        },
        ui = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Fe(a, 1);
                case 7:
                    return Ee(a, 3, "");
                case 2:
                    return a = Ce(a, 2), null == a ? 0 : a;
                case 3:
                    return Ee(a, 3, "");
                case 6:
                    return Be(a, 4);
                default:
                    return null
            }
        };
    var vi = {},
        wi = (vi[47] = Qd, vi);

    function xi() {
        var a = yi,
            b = Ke(new qi(zi), si, 2);
        1 == b.length && 16 == Ee(b[0], 1, 0) && Ke(b[0], oi, 2).forEach(function(c) {
            var d = Ee(c, 1, 0),
                e = Je(c, ei, 3),
                f = a[Ee(c, 4, 0)];
            Ke(c, mi, 2).forEach(function(g) {
                var h = d || Ee(g, 4, 0),
                    k = g.getId(),
                    n = e || Je(g, ei, 3);
                n = n ? Pe(n, 3, fi) : null;
                n = wi[n];
                g = Ai(Ke(g, ji, 2));
                K({
                    id: k,
                    F: h,
                    sa: f,
                    ye: n,
                    flags: g
                })
            })
        })
    }

    function Ai(a) {
        if (a.length) {
            var b = {};
            a.forEach(function(c) {
                var d = Ie(c, ki),
                    e = Je(c, hi, 4);
                e && (c = ti(c, d), d = ui(e, d), b[c] = d)
            });
            return b
        }
    };
    var Bi = function(a) {
        this.h = a
    };
    Bi.prototype.g = function(a, b) {
        a = q(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.g = !0, Th(c)
    };
    var Ci = function(a, b) {
        this.h = a;
        this.l = b
    };
    t(Ci, Bi);
    Ci.prototype.g = function(a, b) {
        Bi.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = q(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        I(J(), "sei", b);
        I(J(), "nsei", a);
        I(J(), "bi", this.l)
    };
    var Di = function() {
        Oh.apply(this, arguments)
    };
    t(Di, Oh);
    var Ph = function(a, b) {
        var c = J();
        I(c, "eee", a);
        I(c, "bi", b)
    };

    function Ei() {
        return Fi.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var ai = new Wh,
        Gi = new Wh,
        Hi = new Wh,
        Ii = new Wh;
    K({
        id: 318475490,
        F: 0
    });
    K({
        id: 324123032,
        F: 0
    });
    K({
        id: 418572103,
        F: 0
    });
    K({
        id: 420706097,
        F: 10
    });
    K({
        id: 420706098,
        F: 10
    });
    K({
        id: 44736152,
        F: 10
    });
    K({
        id: 44736153,
        F: 10
    });
    K({
        id: 44736284,
        F: 10
    });
    K({
        id: 44736285,
        F: 10
    });
    K({
        id: 21062100,
        F: 0
    });
    K({
        id: 21062101,
        F: 0
    });
    K({
        id: 420706109,
        F: 10
    });
    K({
        id: 420706110,
        F: 10
    });
    K({
        id: 21062347,
        F: 0
    });
    K({
        id: 21063070,
        F: 0
    });
    K({
        id: 21063072,
        F: 0
    });
    K({
        id: 21063100,
        F: 0
    });
    K({
        id: 420706105,
        F: 10
    });
    K({
        id: 420706106,
        F: 10
    });
    K({
        id: 21064018,
        F: 0
    });
    K({
        id: 21064020,
        F: 0
    });
    K({
        id: 21064022,
        F: 0
    });
    K({
        id: 21064024,
        F: 0
    });
    K({
        id: 21064075,
        F: 0
    });
    K({
        id: 21064201,
        F: 50
    });
    var Ji = K({
        id: 210640812,
        F: 10
    });
    K({
        id: 420706142,
        F: 0
    });
    K({
        id: 21064347,
        F: 0
    });
    K({
        id: 44745813,
        F: 0
    });
    K({
        id: 44746068,
        F: 0
    });
    K({
        id: 21064565,
        F: 0
    });
    K({
        id: 21064567,
        F: 0
    });
    K({
        id: 40819804,
        F: 10
    });
    var Ki = K({
        id: 40819805,
        F: 10
    });
    K({
        id: 418572006,
        F: 10
    });
    var Li = K({
            id: 44744588,
            F: 10
        }),
        Mi = K({
            id: 44747319,
            F: 10
        });
    K({
        id: 44740339,
        F: 10
    });
    var Ni = K({
        id: 44740340,
        F: 10
    });
    K({
        id: 44714743,
        F: 0
    });
    K({
        id: 44719216,
        F: 0
    });
    K({
        id: 44730895,
        F: 10
    });
    K({
        id: 44730896,
        F: 10
    });
    K({
        id: 44731465,
        F: 10
    });
    K({
        id: 44731467,
        F: 10
    });
    K({
        id: 44736292,
        F: 10
    });
    K({
        id: 44736293,
        F: 10
    });
    K({
        id: 44731964,
        F: 10,
        sa: ai
    });
    K({
        id: 44731965,
        F: 10,
        sa: ai
    });
    K({
        id: 668123728,
        F: 10,
        sa: ai
    });
    K({
        id: 668123729,
        F: 10,
        sa: ai
    });
    K({
        id: 31061774,
        F: 10
    });
    var Oi = K({
        id: 31061775,
        F: 10
    });
    K({
        id: 44730612,
        F: 50
    });
    K({
        id: 44750603,
        F: 10
    });
    K({
        id: 44750604,
        F: 10
    });
    K({
        id: 44712632,
        F: 10
    });
    K({
        id: 44712633,
        F: 10
    });
    K({
        id: 44715336,
        F: 10
    });
    K({
        id: 44729309,
        F: 10
    });
    K({
        id: 44721472,
        F: 0
    });
    K({
        id: 75259410,
        F: 0
    });
    K({
        id: 75259412,
        F: 0
    });
    K({
        id: 75259413,
        F: 0
    });
    K({
        id: 44725355,
        F: 50,
        sa: Hi
    });
    var Pi = K({
        id: 44725356,
        F: 50,
        sa: Hi
    });
    K({
        id: 44724516,
        F: 0
    });
    K({
        id: 44726389,
        F: 10
    });
    K({
        id: 44726392,
        F: 10
    });
    K({
        id: 44726393,
        F: 10
    });
    K({
        id: 44730464,
        F: 10
    });
    K({
        id: 44730465,
        F: 10
    });
    K({
        id: 44733378,
        F: 10
    });
    K({
        id: 44727953,
        F: 0
    });
    K({
        id: 44729911,
        F: 0
    });
    K({
        id: 44730425,
        F: 0
    });
    K({
        id: 44730426,
        F: 0
    });
    K({
        id: 447304389,
        F: 0
    });
    K({
        id: 44732022,
        F: 10
    });
    K({
        id: 44732023,
        F: 10
    });
    K({
        id: 44733246,
        F: 10
    });
    K({
        id: 44750823,
        F: 0
    });
    K({
        id: 44750824,
        F: 0
    });
    K({
        id: 44750822,
        F: 0
    });
    K({
        id: 44737473,
        F: 100,
        sa: Gi
    });
    K({
        id: 44737475,
        F: 100,
        sa: Gi
    });
    K({
        id: 44738437,
        F: 0
    });
    var Qi = K({
        id: 44738438,
        F: 0
    });
    K({
        id: 44750815,
        F: 50
    });
    K({
        id: 44750816,
        F: 50
    });
    K({
        id: 44750820,
        F: 100
    });
    K({
        id: 44750821,
        F: 100
    });
    K({
        id: 44750813,
        F: 10
    });
    K({
        id: 44750814,
        F: 10
    });
    var Ri = new Wh;
    K({
        id: 44746831,
        F: 0,
        sa: Ri
    });
    var Si = K({
        id: 44746832,
        F: 1E3,
        sa: Ri
    });
    K({
        id: 44749185,
        F: 10
    });
    var Ti = new Wh;
    K({
        id: 44750029,
        F: 0,
        sa: Ti
    });
    var Ui = K({
            id: 44750030,
            F: 1E3,
            sa: Ti
        }),
        Vi = {},
        yi = (Vi[32] = ai, Vi[35] = Ii, Vi);
    yi = void 0 === yi ? {} : yi;
    if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
        var zi = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
        zi instanceof Array && xi()
    } catch (a) {
        I(J(), "espe", a.message)
    }
    if ("undefined" === typeof window.v8_flag_map) {
        var Rh = H(Di);
        Rh.h || (Sh(), Rh.h = !0);
        var Fi = Rh.l,
            Wi;
        Rh.h || (Sh(), Rh.h = !0);
        Wi = Rh.g;
        if (null != Fi) {
            var Xi = new Ci(Ei(), Wi);
            $h(Xi)
        }
    };
    Yh.reset();
    $h(new ci);
    u.console && "function" === typeof u.console.log && Wa(u.console.log, u.console);
    var Yi = function(a) {
        for (var b = [], c = a = E(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };

    function Zi(a) {
        a && "function" == typeof a.W && a.W()
    };
    var L = function() {
        this.L = this.L;
        this.I = this.I
    };
    L.prototype.L = !1;
    L.prototype.Ra = function() {
        return this.L
    };
    L.prototype.W = function() {
        this.L || (this.L = !0, this.N())
    };
    var aj = function(a, b) {
            $i(a, Xa(Zi, b))
        },
        $i = function(a, b) {
            a.L ? b() : (a.I || (a.I = []), a.I.push(b))
        };
    L.prototype.N = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };
    var bj = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.h = !1
    };
    bj.prototype.stopPropagation = function() {
        this.h = !0
    };
    bj.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var cj = function() {
        if (!u.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            u.addEventListener("test", La, b), u.removeEventListener("test", La, b)
        } catch (c) {}
        return a
    }();
    var dj = function(a, b) {
        bj.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    Za(dj, bj);
    var ej = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    dj.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? xd && (rd(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ?
            a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ej[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && dj.ya.preventDefault.call(this)
    };
    dj.prototype.stopPropagation = function() {
        dj.ya.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    dj.prototype.preventDefault = function() {
        dj.ya.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var fj = "closure_listenable_" + (1E6 * Math.random() | 0),
        gj = function(a) {
            return !(!a || !a[fj])
        };
    var hj = 0;
    var ij = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Xb = e;
            this.key = ++hj;
            this.Ib = this.Qb = !1
        },
        jj = function(a) {
            a.Ib = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Xb = null
        };
    var kj = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    kj.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = lj(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Qb = !1)) : (b = new ij(b, this.src, f, !!d, e), b.Qb = c, a.push(b));
        return b
    };
    kj.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = lj(e, b, c, d);
        return -1 < b ? (jj(e[b]), yb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
    };
    var mj = function(a, b) {
        var c = b.type;
        c in a.g && xb(a.g[c], b) && (jj(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    };
    kj.prototype.Cb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = lj(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var lj = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ib && f.listener == b && f.capture == !!c && f.Xb == d) return e
        }
        return -1
    };
    var nj = "closure_lm_" + (1E6 * Math.random() | 0),
        oj = {},
        pj = 0,
        rj = function(a, b, c, d, e) {
            if (d && d.once) return qj(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) rj(a, b[f], c, d, e);
                return null
            }
            c = sj(c);
            return gj(a) ? a.O(b, c, Na(d) ? !!d.capture : !!d, e) : tj(a, b, c, !1, d, e)
        },
        tj = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Na(e) ? !!e.capture : !!e,
                h = uj(a);
            h || (a[nj] = h = new kj(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = vj();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) cj || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(wj(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            pj++;
            return c
        },
        vj = function() {
            var a = xj,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        qj = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) qj(a, b[f], c, d, e);
                return null
            }
            c = sj(c);
            return gj(a) ? a.Gb(b, c, Na(d) ? !!d.capture : !!d, e) : tj(a, b, c, !0, d, e)
        },
        yj = function(a,
            b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) yj(a, b[f], c, d, e);
            else d = Na(d) ? !!d.capture : !!d, c = sj(c), gj(a) ? a.Ua(b, c, d, e) : a && (a = uj(a)) && (b = a.Cb(b, c, d, e)) && zj(b)
        },
        zj = function(a) {
            if ("number" !== typeof a && a && !a.Ib) {
                var b = a.src;
                if (gj(b)) mj(b.B, a);
                else {
                    var c = a.type,
                        d = a.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(wj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    pj--;
                    (c = uj(b)) ? (mj(c, a), 0 == c.h && (c.src = null, b[nj] = null)) : jj(a)
                }
            }
        },
        wj = function(a) {
            return a in
                oj ? oj[a] : oj[a] = "on" + a
        },
        xj = function(a, b) {
            if (a.Ib) a = !0;
            else {
                b = new dj(b, this);
                var c = a.listener,
                    d = a.Xb || a.src;
                a.Qb && zj(a);
                a = c.call(d, b)
            }
            return a
        },
        uj = function(a) {
            a = a[nj];
            return a instanceof kj ? a : null
        },
        Aj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        sj = function(a) {
            if ("function" === typeof a) return a;
            a[Aj] || (a[Aj] = function(b) {
                return a.handleEvent(b)
            });
            return a[Aj]
        };
    var M = function() {
        L.call(this);
        this.B = new kj(this);
        this.Ob = this;
        this.ua = null
    };
    Za(M, L);
    M.prototype[fj] = !0;
    l = M.prototype;
    l.addEventListener = function(a, b, c, d) {
        rj(this, a, b, c, d)
    };
    l.removeEventListener = function(a, b, c, d) {
        yj(this, a, b, c, d)
    };
    l.dispatchEvent = function(a) {
        var b, c = this.ua;
        if (c)
            for (b = []; c; c = c.ua) b.push(c);
        c = this.Ob;
        var d = a.type || a;
        if ("string" === typeof a) a = new bj(a, c);
        else if (a instanceof bj) a.target = a.target || c;
        else {
            var e = a;
            a = new bj(d, c);
            Xb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Bj(g, d, !0, a) && e
            }
        a.h || (g = a.currentTarget = c, e = Bj(g, d, !0, a) && e, a.h || (e = Bj(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.h && f < b.length; f++) g = a.currentTarget = b[f], e = Bj(g, d, !1, a) && e;
        return e
    };
    l.N = function() {
        M.ya.N.call(this);
        if (this.B) {
            var a = this.B,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, jj(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ua = null
    };
    l.O = function(a, b, c, d) {
        return this.B.add(String(a), b, !1, c, d)
    };
    l.Gb = function(a, b, c, d) {
        return this.B.add(String(a), b, !0, c, d)
    };
    l.Ua = function(a, b, c, d) {
        this.B.remove(String(a), b, c, d)
    };
    var Bj = function(a, b, c, d) {
        b = a.B.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ib && g.capture == c) {
                var h = g.listener,
                    k = g.Xb || g.src;
                g.Qb && mj(a.B, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    M.prototype.Cb = function(a, b, c, d) {
        return this.B.Cb(String(a), b, c, d)
    };
    var Cj = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    Cj.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var Dj = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var Ej, Fj = function() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
            var e = wf(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Wa(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Ic()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.ud;
                    c.ud = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    ud: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    };

    function Gj(a) {
        u.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Hj = function() {
        this.h = this.g = null
    };
    Hj.prototype.add = function(a, b) {
        var c = Ij.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    Hj.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var Ij = new Cj(function() {
            return new Jj
        }, function(a) {
            return a.reset()
        }),
        Jj = function() {
            this.next = this.g = this.h = null
        };
    Jj.prototype.set = function(a, b) {
        this.h = a;
        this.g = b;
        this.next = null
    };
    Jj.prototype.reset = function() {
        this.next = this.g = this.h = null
    };
    var Oj = function(a, b) {
            Kj || Lj();
            Mj || (Kj(), Mj = !0);
            Nj.add(a, b)
        },
        Kj, Lj = function() {
            if (u.Promise && u.Promise.resolve) {
                var a = u.Promise.resolve(void 0);
                Kj = function() {
                    a.then(Pj)
                }
            } else Kj = function() {
                var b = Pj;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !A("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (Ej || (Ej = Fj()), Ej(b)) : u.setImmediate(b)
            }
        },
        Mj = !1,
        Nj = new Hj,
        Pj = function() {
            for (var a; a = Nj.remove();) {
                try {
                    a.h.call(a.g)
                } catch (b) {
                    Gj(b)
                }
                Dj(Ij, a)
            }
            Mj = !1
        };
    var Qj = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Sj = function(a) {
            this.g = 0;
            this.C = void 0;
            this.o = this.h = this.l = null;
            this.B = this.A = !1;
            if (a != La) try {
                var b = this;
                a.call(void 0, function(c) {
                    Rj(b, 2, c)
                }, function(c) {
                    Rj(b, 3, c)
                })
            } catch (c) {
                Rj(this, 3, c)
            }
        },
        Tj = function() {
            this.next = this.context = this.h = this.l = this.g = null;
            this.o = !1
        };
    Tj.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    var Uj = new Cj(function() {
            return new Tj
        }, function(a) {
            a.reset()
        }),
        Vj = function(a, b, c) {
            var d = Uj.get();
            d.l = a;
            d.h = b;
            d.context = c;
            return d
        };
    Sj.prototype.then = function(a, b, c) {
        return Wj(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    Sj.prototype.$goog_Thenable = !0;
    Sj.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Xj(a);
            Oj(function() {
                Yj(this, b)
            }, this)
        }
    };
    var Yj = function(a, b) {
            if (0 == a.g)
                if (a.l) {
                    var c = a.l;
                    if (c.h) {
                        for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? Yj(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Zj(c), ak(c, e, 3, b)))
                    }
                    a.l = null
                } else Rj(a, 3, b)
        },
        ck = function(a, b) {
            a.h || 2 != a.g && 3 != a.g || bk(a);
            a.o ? a.o.next = b : a.h = b;
            a.o = b
        },
        Wj = function(a, b, c, d) {
            var e = Vj(null, null, null);
            e.g = new Sj(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (n) {
                        g(n)
                    }
                } : f;
                e.h = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        void 0 === k && h instanceof Xj ? g(h) : f(k)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.g.l = a;
            ck(a, e);
            return e.g
        };
    Sj.prototype.L = function(a) {
        this.g = 0;
        Rj(this, 2, a)
    };
    Sj.prototype.D = function(a) {
        this.g = 0;
        Rj(this, 3, a)
    };
    var Rj = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.L,
                        f = a.D;
                    if (d instanceof Sj) {
                        ck(d, Vj(e || La, f || null, a));
                        var g = !0
                    } else if (Qj(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Na(d)) try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                dk(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, bk(a), 3 != b || c instanceof Xj || ek(a, c))
            }
        },
        dk = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e,
                        k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        bk = function(a) {
            a.A || (a.A = !0, Oj(a.I, a))
        },
        Zj = function(a) {
            var b = null;
            a.h && (b = a.h, a.h = b.next, b.next = null);
            a.h || (a.o = null);
            return b
        };
    Sj.prototype.I = function() {
        for (var a; a = Zj(this);) ak(this, a, this.g, this.C);
        this.A = !1
    };
    var ak = function(a, b, c, d) {
            if (3 == c && b.h && !b.o)
                for (; a && a.B; a = a.l) a.B = !1;
            if (b.g) b.g.l = null, fk(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : fk(b, c, d)
            } catch (e) {
                gk.call(null, e)
            }
            Dj(Uj, b)
        },
        fk = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
        },
        ek = function(a, b) {
            a.B = !0;
            Oj(function() {
                a.B && gk.call(null, b)
            })
        },
        gk = Gj,
        Xj = function(a) {
            bb.call(this, a)
        };
    Za(Xj, bb);
    Xj.prototype.name = "cancel";
    var hk = function(a, b) {
        M.call(this);
        this.h = a || 1;
        this.g = b || u;
        this.l = Wa(this.uf, this);
        this.o = Ya()
    };
    Za(hk, M);
    l = hk.prototype;
    l.jb = !1;
    l.Ea = null;
    l.uf = function() {
        if (this.jb) {
            var a = Ya() - this.o;
            0 < a && a < .8 * this.h ? this.Ea = this.g.setTimeout(this.l, this.h - a) : (this.Ea && (this.g.clearTimeout(this.Ea), this.Ea = null), this.dispatchEvent("tick"), this.jb && (this.stop(), this.start()))
        }
    };
    l.start = function() {
        this.jb = !0;
        this.Ea || (this.Ea = this.g.setTimeout(this.l, this.h), this.o = Ya())
    };
    l.stop = function() {
        this.jb = !1;
        this.Ea && (this.g.clearTimeout(this.Ea), this.Ea = null)
    };
    l.N = function() {
        hk.ya.N.call(this);
        this.stop();
        delete this.g
    };
    var ik = function(a, b, c) {
        if ("function" === typeof a) c && (a = Wa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Wa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0)
    };
    var jk = function() {
        return Math.round(Date.now() / 1E3)
    };
    var kk = function() {
        this.g = {};
        return this
    };
    kk.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    };
    kk.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var lk = function(a, b) {
        a.g.eb = Vb(a.g, "eb", 0) | b
    };
    kk.prototype.get = function(a) {
        return Vb(this.g, a, null)
    };
    var mk = null,
        nk = function() {
            this.g = {};
            this.h = 0
        },
        ok = function() {
            mk || (mk = new nk);
            return mk
        },
        pk = function(a, b) {
            a.g[b.getName()] = b
        },
        qk = function(a, b) {
            this.o = a;
            this.l = !0;
            this.g = b
        };
    qk.prototype.getName = function() {
        return this.o
    };
    qk.prototype.h = function() {
        return String(this.g)
    };
    var rk = function(a, b) {
        qk.call(this, String(a), b);
        this.B = a;
        this.g = !!b
    };
    t(rk, qk);
    rk.prototype.h = function() {
        return this.g ? "1" : "0"
    };
    var sk = function(a, b) {
        qk.call(this, a, b)
    };
    t(sk, qk);
    sk.prototype.h = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    };
    var tk = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new sk("", new ag(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new sk("", new ag(0, 0, 0, 0))
    };
    var uk = function(a) {
            var b = new ag(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new ag(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (k <= f) {
                            e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        vk = function(a, b) {
            var c = a.getBoundingClientRect();
            a = pg(a,
                b);
            return new ag(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        wk = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new ag(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;pk(a, new qk("vp", d));d && 0 < d ? (e = bg(b), f = bg(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;pk(a, new rk(512,
                    e));d && 0 < d ? (e = bg(b), f = bg(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;pk(a, new rk(1024, e));d && 0 < d ? (e = bg(b), f = bg(c), e = e.left >= f.left && e.left < f.right) : e = !1;pk(a, new rk(2048, e));d && 0 < d ? (b = bg(b), c = bg(c), c = b.right <= c.right && b.right > c.left) : c = !1;pk(a, new rk(4096, c))
            }
        };
    var xk = function(a, b) {
        var c = 0;
        Ob(E(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = ok();
            a.g = {};
            var e = new rk(32, !0);
            e.l = !1;
            pk(a, e);
            e = E().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            pk(a, new rk(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = E().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (m) {
                    g = !1
                }
                if (g) {
                    var h = Yi(d);
                    var k = h && 0 != h.length ? "1" : "0"
                } else k = "2"
            } catch (m) {
                k = "2"
            }
            pk(a, new rk(256,
                "2" == k));
            pk(a, new rk(128, "1" == k));
            h = g = E().top;
            "2" == k && (h = E());
            f = vk(d, h);
            pk(a, new sk("er", f));
            try {
                var n = h.document && !h.document.body ? null : uf(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = vf(pf(h.document).g), pk(a, new rk(16384, !!h)), n = h ? new ag(h.x, h.y, n.width, n.height) : null) : n = null;
            pk(a, new sk("vi", n));
            if (n && "1" == k) {
                k = Yi(d);
                d = [];
                for (h = 0; h < k.length; h++)(e = vk(k[h], g)) && d.push(e);
                d.push(n);
                n = uk(d)
            }
            wk(a, f, n);
            a.h && pk(a, new qk("ts", jk() - a.h));
            a.h = jk()
        } else a = ok(), a.g = {}, a.h = jk(), pk(a, new rk(32, !1));
        this.l = a;
        this.g = new kk;
        this.g.set("ve", 4);
        c && lk(this.g, 1);
        Ob(E(), "ima", "video", "client", "crossdomainTag") && lk(this.g, 4);
        Ob(E(), "ima", "video", "client", "sdkTag") && lk(this.g, 8);
        Ob(E(), "ima", "video", "client", "jsTag") && lk(this.g, 2);
        b && Vb(b, "fullscreen", !1) && lk(this.g, 16);
        this.h = b = null;
        if (c && (c = Ob(E(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = Ob(E(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi, b && a &&
                    (b = tk(b).g, a = tk(a).g, k = null, Vb(c.g, "er", null) && (k = Vb(c.g, "er", null).g, k.top += b.top, k.left += b.left, pk(c, new sk("er", k))), Vb(c.g, "vi", null) && (n = Vb(c.g, "vi", null).g, n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = uk(d), wk(c, k, b), pk(c, new sk("vi", a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing &&
            window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", jk() - (null != a ? a : null != b ? b : jk()))
    };
    var yk = new hk(200),
        zk = function(a, b) {
            try {
                var c = new xk(a, b);
                a = [];
                var d = Number(c.g.get("eb"));
                c.g.remove("eb");
                var e, f = c.g;
                b = [];
                for (var g in f.g) b.push(g + f.g[g]);
                (e = b.join("_")) && a.push(e);
                if (c.h) {
                    var h = c.h.serialize();
                    h && a.push(h)
                }
                var k, n = c.l;
                e = d;
                f = [];
                e || (e = 0);
                for (var m in n.g) {
                    var v = n.g[m];
                    if (v instanceof rk) v.g && (e |= v.B);
                    else {
                        var r, w = n.g[m];
                        (r = w.l ? w.h() : "") && f.push(m + r)
                    }
                }
                f.push("eb" + String(e));
                (k = f.join("_")) && a.push(k);
                c.g.set("eb", d);
                return a.join("_")
            } catch (x) {
                return "tle;" + Xc(x.name, 12) + ";" + Xc(x.message,
                    40)
            }
        },
        Ak = function(a, b) {
            rj(yk, "tick", function() {
                var c = zk(b);
                a(c)
            });
            yk.start();
            yk.dispatchEvent("tick")
        };
    var Ck = function(a) {
        B.call(this, a, -1, Bk)
    };
    t(Ck, B);
    var Dk = function(a) {
        B.call(this, a)
    };
    t(Dk, B);
    var Fk = function(a, b) {
            ke(b, 1, C(a, 1));
            ne(b, 2, Je(a, Ek, 2));
            ne(b, 3, Je(a, Ek, 3));
            var c = C(a, 4);
            null != c && le(b, 4, fb(c));
            c = C(a, 5);
            null != c && le(b, 5, fb(c));
            Qe(a, b)
        },
        Ek = function(a) {
            B.call(this, a)
        };
    t(Ek, B);
    var me = function(a, b) {
            ke(b, 1, C(a, 1));
            ke(b, 2, C(a, 2));
            ke(b, 3, C(a, 3));
            Qe(a, b)
        },
        Gk = function(a) {
            B.call(this, a)
        };
    t(Gk, B);
    var Hk = function(a, b) {
            var c = C(a, 1);
            null != c && le(b, 1, fb(c));
            c = C(a, 2);
            null != c && le(b, 2, fb(c));
            je(b, 3, C(a, 3));
            je(b, 7, C(a, 7));
            var d = C(a, 8);
            if (null != d) {
                md(b.g, 69);
                c = b.g;
                var e = d;
                e = (d = 0 > e ? 1 : 0) ? -e : e;
                if (0 === e) 0 < 1 / e ? hd = id = 0 : (id = 0, hd = 2147483648);
                else if (isNaN(e)) id = 0, hd = 2147483647;
                else if (3.4028234663852886E38 < e) id = 0, hd = (d << 31 | 2139095040) >>> 0;
                else if (1.1754943508222875E-38 > e) e = Math.round(e / Math.pow(2, -149)), id = 0, hd = (d << 31 | e) >>> 0;
                else {
                    var f = Math.floor(Math.log(e) / Math.LN2);
                    e *= Math.pow(2, -f);
                    e = Math.round(8388608 *
                        e) & 8388607;
                    id = 0;
                    hd = (d << 31 | f + 127 << 23 | e) >>> 0
                }
                nd(c, hd)
            }
            ie(b, 4, C(a, 4));
            ie(b, 5, C(a, 5));
            ie(b, 6, C(a, 6));
            Qe(a, b)
        },
        Bk = [1, 2];
    var Ik = function(a) {
        B.call(this, a)
    };
    t(Ik, B);
    var Jk;
    Jk = ["av.default", "js", "unreleased"].slice(-1)[0];
    var Kk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        Ok = function(a) {
            a = a || Lk();
            for (var b = new Mk(u.location.href, u, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                var f = a[e];
                !c && Kk.test(f.url) && (c = f);
                if (f.url && !f.Jc) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]);
            return new Nk(b, e, c)
        },
        Lk = function() {
            var a = u,
                b = [],
                c = null;
            do {
                var d = a;
                if (Lf(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new Mk(e || "", d));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = u;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Jc = !0);
            return b
        },
        Nk = function(a, b, c) {
            this.g = a;
            this.h = b;
            this.l = c
        },
        Mk = function(a, b, c) {
            this.url = a;
            this.ka = b;
            this.Jc = !!c;
            this.depth = null
        };
    var Pk = function() {
            this.l = "&";
            this.h = {};
            this.o = 0;
            this.g = []
        },
        Qk = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Sk = function(a, b, c, d, e) {
            var f = [];
            Pf(a, function(g, h) {
                (g = Rk(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Rk = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Rk(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Sk(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Tk = function(a, b, c) {
            a.g.push(b);
            a.h[b] = c
        },
        Uk = function(a, b, c, d) {
            a.g.push(b);
            a.h[b] = Qk(c, d)
        },
        Wk = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = Vk(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(m, v) {
                return m - v
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var n = Sk(h[k], a.l, ",$");
                    if (n) {
                        n = e + n;
                        if (d >= n.length) {
                            d -= n.length;
                            b += n;
                            e = a.l;
                            break
                        }
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c &&
                (a = e + "trn=" + c);
            return b + a + ""
        },
        Vk = function(a) {
            var b = 1,
                c;
            for (c in a.h) b = c.length > b ? c.length : b;
            return 3997 - b - a.l.length - 1
        };
    var Xk = function(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof Pk) var f = c;
            else f = new Pk, Pf(c, function(h, k) {
                var n = f,
                    m = n.o++;
                Tk(n, m, Qk(k, h))
            });
            var g = Wk(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && dg(u, g)
        } catch (h) {}
    };
    var $k = function() {
        var a = Yk;
        this.A = Zk;
        this.B = "jserror";
        this.l = !0;
        this.h = null;
        this.C = this.Ia;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = $k.prototype;
    l.lc = function(a) {
        this.h = a
    };
    l.Vc = function(a) {
        this.B = a
    };
    l.Wc = function(a) {
        this.l = a
    };
    l.Xc = function(a) {
        this.o = a
    };
    l.fb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (k) {
            b = this.l;
            try {
                ih(d);
                var f = new Xg(k, {
                    message: al(k)
                });
                b = this.C(a, f, void 0, c)
            } catch (n) {
                this.Ia(217, n)
            }
            if (b) {
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            } else throw k;
        }
        return e
    };
    l.Sc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    l.Ia = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Pk;
            Uk(f, 1, "context", a);
            Yg(b) || (b = new Xg(b, {
                message: al(b)
            }));
            b.msg && Uk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Tk(f, 3, [g]);
            var h = Ok();
            h.h && Uk(f, 4, "top", h.h.url || "");
            Tk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Hf(h.g.url) : ""
            }]);
            Xk(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                Xk(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: al(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    };
    var al = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Zk, bl, cl = vg(),
        Yk = new hh(1, cl);
    Zk = new function() {
        var a = void 0 === a ? D : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    };
    "number" !== typeof cl.google_srt && (cl.google_srt = Math.random());
    var dl = Zk,
        el = cl.google_srt;
    0 <= el && 1 >= el && (dl.g = el);
    bl = new $k;
    bl.lc(function() {});
    bl.Xc(!0);
    "complete" == cl.document.readyState ? cl.google_measure_js_timing || Yk.C() : Yk.l && gf(cl, "load", function() {
        cl.google_measure_js_timing || Yk.C()
    });
    var fl = function() {
        this.blockSize = -1
    };
    var gl = [0, 2, 1],
        hl = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        hl = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || hl) {
                var c;
                (c = b.which ? 1 << gl[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else b = null;
            if (c = b)
                if (window.css) window.css(a.id, "mb", c, void 0, void 0);
                else if (a) {
                b = a.href;
                var d = b.indexOf("&mb=");
                if (0 > d) c = b + "&mb=" + c;
                else {
                    d += 4;
                    var e = b.indexOf("&", d);
                    c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
                }
                a.href = 2E3 < c.length ? b : c
            }
        }
    };
    var il = function(a) {
        var b = {};
        z(a, function(c) {
            var d = c.g,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        zb(a, function(c) {
            return null === b[c.g]
        })
    };
    var jl = {
            NONE: 0,
            Tf: 1
        },
        kl = {
            Sf: 0,
            Wg: 1,
            Vg: 2,
            Xg: 3
        };
    var ll = function() {
        this.Z = 0;
        this.g = !1;
        this.h = -1;
        this.Za = !1;
        this.oa = 0
    };
    ll.prototype.isVisible = function() {
        return this.Za ? .3 <= this.Z : .5 <= this.Z
    };
    var ml = {
            Rf: 0,
            Xf: 1
        },
        nl = {
            668123728: 0,
            668123729: 1
        },
        ol = {
            44731964: 0,
            44731965: 1
        },
        pl = {
            NONE: 0,
            xg: 1,
            ag: 2
        },
        ql = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var rl = function() {
            this.g = null;
            this.o = !1;
            this.l = null
        },
        sl = function(a) {
            a.o = !0;
            return a
        },
        tl = function(a, b) {
            a.l && z(b, function(c) {
                c = a.l[c];
                void 0 !== c && a.h(c)
            })
        },
        ul = function(a) {
            rl.call(this);
            this.B = a
        };
    t(ul, rl);
    ul.prototype.h = function(a) {
        null === this.g && Qb(this.B, a) && (this.g = a)
    };
    var vl = function() {
        rl.call(this)
    };
    t(vl, rl);
    vl.prototype.h = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };
    var wl = function() {
        rl.call(this)
    };
    t(wl, rl);
    wl.prototype.h = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    };
    var xl = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    xl.prototype.enable = function() {
        this.l = !0
    };
    xl.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    var yl = function(a, b, c) {
            a.g[b] || (a.g[b] = new ul(c));
            return a.g[b]
        },
        zl = function(a) {
            a.g.queryid || (a.g.queryid = new wl)
        },
        Al = function(a, b, c) {
            (a = a.g[b]) && a.h(c)
        },
        Bl = function(a, b) {
            if (Pb(a.h, b)) return a.h[b];
            if (a = a.g[b]) return a.g
        },
        Cl = function(a) {
            var b = {},
                c = Hb(a.g, function(d) {
                    return d.o
                });
            Gb(c, function(d, e) {
                d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        Dl = function(a) {
            a = Cl(a);
            var b = [];
            Gb(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c && b.push([d,
                    ":", c
                ].join(""))
            });
            return b
        },
        El = function() {
            var a = N().U,
                b = bi();
            a.l && z(Mb(a.g), function(c) {
                return tl(c, b)
            })
        };
    var Fl = !vd && !Kc();
    var Gl = function() {
        this.g = this.Sa = null
    };
    var Hl = function() {};
    Hl.prototype.now = function() {
        return 0
    };
    Hl.prototype.h = function() {
        return 0
    };
    Hl.prototype.l = function() {
        return 0
    };
    Hl.prototype.g = function() {
        return 0
    };
    var Jl = function() {
        if (!Il()) throw Error();
    };
    t(Jl, Hl);
    var Il = function() {
        return !(!D || !D.performance)
    };
    Jl.prototype.now = function() {
        return Il() && D.performance.now ? D.performance.now() : Hl.prototype.now.call(this)
    };
    Jl.prototype.h = function() {
        return Il() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : Hl.prototype.h.call(this)
    };
    Jl.prototype.l = function() {
        return Il() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : Hl.prototype.l.call(this)
    };
    Jl.prototype.g = function() {
        return Il() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : Hl.prototype.g.call(this)
    };
    var Kl = function() {};
    Kl.prototype.isVisible = function() {
        return 1 === lh(Re)
    };
    var Ll = function(a, b) {
            this.g = a;
            this.depth = b
        },
        Nl = function(a) {
            a = a || Lk();
            var b = Math.max(a.length - 1, 0),
                c = Ok(a);
            a = c.g;
            var d = c.h,
                e = c.l,
                f = [];
            c = function(h, k) {
                return null == h ? k : h
            };
            e && f.push(new Ll([e.url, e.Jc ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new Ll([d.url, 2], 0));
            a.url && a != e && f.push(new Ll([a.url, 0], c(a.depth, b)));
            var g = qb(f, function(h, k) {
                return f.slice(0, f.length - k)
            });
            !a.url || (e || d) && a != e || (d = Rf(a.url)) && g.push([new Ll([d, 1], c(a.depth, b))]);
            g.push([]);
            return qb(g, function(h) {
                return Ml(b, h)
            })
        };

    function Ml(a, b) {
        var c = rb(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = Fb(c + 2);
        d[0] = a;
        z(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var Ol = function() {
        var a = Nl();
        return qb(a, function(b) {
            return Rk(b)
        })
    };
    var Pl = function() {
            this.h = new Kl;
            this.g = Il() ? new Jl : new Hl
        },
        Rl = function() {
            Ql();
            var a = D.document;
            return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof D.setInterval && "function" === typeof D.clearInterval && "function" === typeof D.setTimeout && "function" === typeof D.clearTimeout)
        };
    Pl.prototype.setTimeout = function(a, b) {
        return D.setTimeout(a, b)
    };
    Pl.prototype.clearTimeout = function(a) {
        D.clearTimeout(a)
    };
    var Sl = function(a) {
            Ql();
            var b = vg() || D;
            dg(b, a)
        },
        Tl = function() {
            Ql();
            return Ol()
        };
    var Ul = function() {};
    Ul.prototype.getContext = function() {
        if (!this.g) {
            if (!D) throw Error("Context has not been set and window is undefined.");
            this.g = H(Pl)
        }
        return this.g
    };
    var Ql = function() {
        return H(Ul).getContext()
    };
    var Vl = function(a) {
        B.call(this, a)
    };
    t(Vl, B);
    var Wl = function(a) {
            this.l = a;
            this.g = -1;
            this.h = this.o = 0
        },
        Xl = function(a, b) {
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, ha(d));
                try {
                    return a.g = a.l.g.now(), b.apply(null, ha(d))
                } finally {
                    a.o += a.l.g.now() - a.g, a.g = -1, a.h += 1
                }
            }
        };
    var Yl = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new Wl(a)
    };
    var Zl = function() {};
    var $l = {
        Rg: 1,
        th: 2,
        Fg: 3
    };
    hc(cc(dc("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var am = function() {
        this.o = void 0;
        this.h = this.C = 0;
        this.A = -1;
        this.U = new xl;
        sl(yl(this.U, "mv", pl)).l = void 0 === ql ? null : ql;
        yl(this.U, "omid", ml);
        sl(yl(this.U, "epoh", ml));
        sl(yl(this.U, "epph", ml));
        sl(yl(this.U, "umt", ml)).l = void 0 === nl ? null : nl;
        sl(yl(this.U, "phel", ml));
        sl(yl(this.U, "phell", ml));
        sl(yl(this.U, "oseid", $l));
        var a = this.U;
        a.g.sloi || (a.g.sloi = new vl);
        sl(a.g.sloi);
        sl(yl(this.U, "ovms", kl));
        sl(yl(this.U, "xdi", ml));
        sl(yl(this.U, "amp", ml));
        sl(yl(this.U, "prf", ml));
        sl(yl(this.U, "gtx", ml));
        sl(yl(this.U, "mvp_lv",
            ml));
        sl(yl(this.U, "ssmol", ml)).l = void 0 === ol ? null : ol;
        this.g = new Yl(Ql(), this.U);
        this.B = this.l = !1;
        this.flags = new Zl
    };
    am.prototype.Rc = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.U;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.h(d)
                }
            }
        }
    };
    var N = function() {
        return H(am)
    };
    var bm = function() {
            var a = "https:";
            D && D.location && "http:" === D.location.protocol && (a = "http:");
            this.h = a;
            this.g = .01;
            this.l = Math.random()
        },
        cm = function(a, b, c, d, e) {
            if ((d ? a.l : Math.random()) < (e || a.g)) try {
                if (c instanceof Pk) var f = c;
                else f = new Pk, Pf(c, function(h, k) {
                    var n = f,
                        m = n.o++;
                    Tk(n, m, Qk(k, h))
                });
                var g = Wk(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Sl(g)
            } catch (h) {}
        };
    var fm = function() {
        var a = dm;
        this.A = em;
        this.B = "jserror";
        this.l = !0;
        this.h = null;
        this.C = this.Ia;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = fm.prototype;
    l.lc = function(a) {
        this.h = a
    };
    l.Vc = function(a) {
        this.B = a
    };
    l.Wc = function(a) {
        this.l = a
    };
    l.Xc = function(a) {
        this.o = a
    };
    l.fb = function(a, b, c) {
        var d = this;
        return Xl(N().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (k) {
                var g = d.l;
                try {
                    ih(e);
                    var h = new gm(hm(k));
                    g = d.C(a, h, void 0, c)
                } catch (n) {
                    d.Ia(217, n)
                }
                if (!g) throw k;
            }
            return f
        })()
    };
    l.Sc = function(a, b, c, d) {
        var e = this;
        return Xl(N().g.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.fb(a, function() {
                return b.apply(c, g)
            }, d)
        })
    };
    l.Ia = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Pk;
            Uk(f, 1, "context", a);
            Yg(b) || (b = new gm(hm(b)));
            b.msg && Uk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Tk(f, 3, [g]);
            var h = Ok();
            h.h && Uk(f, 4, "top", h.h.url || "");
            Tk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Hf(h.g.url) : ""
            }]);
            cm(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                cm(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: hm(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    };
    var hm = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        gm = function(a) {
            Xg.call(this, Error(a), {
                message: a
            })
        };
    t(gm, Xg);
    var em, im, dm = new hh(1, vg()),
        jm = function() {
            var a = vg();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || dm.C())
        };
    (function() {
        em = new bm;
        im = new fm;
        var a = vg();
        a && a.document && ("complete" == a.document.readyState ? jm() : dm.l && gf(a, "load", function() {
            jm()
        }))
    })();
    var km = function(a) {
            im.lc(function(b) {
                z(a, function(c) {
                    c(b)
                })
            })
        },
        lm = function(a, b) {
            return im.fb(a, b, void 0)
        },
        mm = function(a, b, c, d) {
            return im.Sc(a, b, c, d)
        },
        nm = function(a, b, c, d) {
            im.Ia(a, b, c, d)
        };
    var om = Date.now(),
        pm = -1,
        qm = -1,
        rm, sm = -1,
        tm = !1,
        um = function() {
            return Date.now() - om
        },
        vm = function() {
            var a = N().o,
                b = 0 <= qm ? um() - qm : -1,
                c = tm ? um() - pm : -1,
                d = 0 <= sm ? um() - sm : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            nm(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                } void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var wm = function(a, b, c) {
        var d = new F(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var xm = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.h = b;
        this.B = c;
        this.g = d;
        this.o = e;
        this.C = f;
        this.A = g
    };
    xm.prototype.getTimestamp = function() {
        return this.C
    };
    var ym = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        Sb = {
            vc: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            ee: "metric",
            uc: "pause",
            nd: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            fe: "mute",
            qe: "unmute",
            FULLSCREEN: "fullscreen",
            Zd: "exitfullscreen",
            ed: "bufferstart",
            dd: "bufferfinish",
            gd: "fully_viewable_audible_half_duration_impression",
            md: "measurable_impression",
            Ud: "abandon",
            fd: "engagedview",
            IMPRESSION: "impression",
            Wd: "creativeview",
            LOADED: "loaded",
            Tg: "progress",
            Jf: "close",
            Kf: "collapse",
            ge: "overlay_resize",
            he: "overlay_unmeasurable_impression",
            ie: "overlay_unviewable_impression",
            ke: "overlay_viewable_immediate_impression",
            je: "overlay_viewable_end_of_session_impression",
            Xd: "custom_metric_viewable",
            Kg: "verification_debug"
        },
        zm = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Am = ["start", "firstquartile", "midpoint", "thirdquartile"],
        Bm = ["abandon"],
        Cm = {
            mh: -1,
            vc: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            ee: 5,
            uc: 6,
            nd: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            fe: 10,
            qe: 11,
            FULLSCREEN: 12,
            Zd: 13,
            gd: 14,
            md: 15,
            Ud: 16,
            fd: 17,
            IMPRESSION: 18,
            Wd: 19,
            LOADED: 20,
            Xd: 21,
            ed: 22,
            dd: 23
        };
    var Lb = {
            Bf: "addEventListener",
            bg: "getMaxSize",
            cg: "getScreenSize",
            dg: "getState",
            eg: "getVersion",
            Ug: "removeEventListener",
            yg: "isViewable"
        },
        Dm = function(a) {
            var b = a !== a.top,
                c = a.top === Pg(a).ka,
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), Kb(function(g) {
                return "function" === typeof f[g]
            }) || (e = 1));
            return {
                za: f,
                Tb: e,
                sf: d
            }
        };
    var Em = function(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (Re && Re.URL) {
        var Fm, Tf = Re.URL;
        Fm = !!Tf && 0 < Uf().length;
        im.Wc(!Fm)
    }
    var Gm = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = mm(d, c);
        gf(a, b, c, {
            capture: e
        })
    };
    var Hm = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new mf(e.innerWidth, e.innerHeight)).round() : uf(e || window).round()
            } catch (k) {
                d = new mf(-12245933, -12245933)
            }
            a = d;
            var f = vf(pf(b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new F(g, g, g, g)
            } else h = new F(f.y, f.x + a.width, f.y + a.height, f.x);
            return h
        } catch (k) {
            return new F(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Im = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function Jm(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && rd(a, "parentElement") ? Jm(Af(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var Km = function(a, b, c, d) {
        if (!a) return d;
        d = Jm(a, b, c, d);
        if (!d.done) try {
            var e = of (a),
                f = e && E(e);
            return Km(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function Lm(a) {
        var b = !vd || Md(8);
        return Km(a, function(c, d) {
            c = rd(d, "style") && d.style && mg(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Mm = function(a) {
            return Km(a, function(b, c) {
                return !(!rd(c, "style") || !c.style || "none" !== mg(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : Lm(a)
        },
        Nm = function(a) {
            return new F(a.top, a.right, a.bottom, a.left)
        },
        Om = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new F(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        Pm = function(a) {
            return null != a && 0 <= a && 1 >= a
        };

    function Qm() {
        var a = Fc;
        return a ? sb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return sc(a, b)
        }) || sc(a, "OMI/") && !sc(a, "XiaoMi/") ? !0 : sc(a, "Presto") && sc(a, "Linux") && !sc(a, "X11") && !sc(a, "Android") && !sc(a, "Mobi") : !1
    }

    function Rm() {
        var a = Fc;
        return sc(a, "AppleTV") || sc(a, "Apple TV") || sc(a, "CFNetwork") || sc(a, "tvOS")
    }

    function Sm() {
        var a;
        (a = sc(Fc, "CrKey") || sc(Fc, "PlayStation") || sc(Fc, "Roku") || Qm() || sc(Fc, "Xbox") || Rm()) || (a = Fc, a = sc(a, "sdk_google_atv_x86") || sc(a, "Android TV"));
        return a
    };
    var Um = function() {
            this.L = !1;
            this.l = !Lf(D.top);
            this.C = Ef() || Ff();
            var a = Lk();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(Gf)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new F(0, 0, 0, 0);
            this.B = new mf(0, 0);
            this.o = new mf(0, 0);
            this.I = new F(0, 0, 0, 0);
            this.A = 0;
            this.D = !1;
            this.h = !(!D || !Dm(D).za);
            Tm(this)
        },
        Vm = function(a, b) {
            b && b.screen && (a.B = new mf(b.screen.width, b.screen.height))
        },
        Wm = function(a, b) {
            var c = a.g ? new mf(a.g.getWidth(), a.g.getHeight()) : new mf(0, 0);
            b = void 0 === b ? D : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight,
                        n = h.scrollWidth,
                        m = h.offsetHeight,
                        v = h.offsetWidth;
                    h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, v = g.offsetWidth);
                    k > c.height ? k > m ? (d = k, e = n) : (d = m, e = v) : k < m ? (d = k, e = n) : (d = m, e = v)
                }
                var r = new mf(e,
                    d)
            } catch (w) {
                r = new mf(-12245933, -12245933)
            }
            a.o = r
        },
        Tm = function(a) {
            D && D.document && (a.I = Hm(!1, D, a.C), a.g = Hm(!0, D, a.C), Wm(a, D), Vm(a, D))
        },
        Xm = function() {
            var a = O();
            if (0 < a.A || a.D) return !0;
            a = Ql().h.isVisible();
            var b = 0 === lh(Re);
            return a || b
        },
        O = function() {
            return H(Um)
        };
    var Ym = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    Ym.prototype.cancel = function() {
        Ql().clearTimeout(this.g);
        this.g = null
    };
    var Zm = function(a) {
        var b = Ql();
        a.g = b.setTimeout(Xl(N().g.g, mm(143, function() {
            a.h++;
            a.l.sample()
        })), vm())
    };
    var $m = function(a, b, c) {
        this.ka = a;
        this.da = void 0 === c ? "na" : c;
        this.B = [];
        this.G = !1;
        this.l = new wm(-1, !0, this);
        this.g = this;
        this.I = b;
        this.H = this.L = !1;
        this.V = "uk";
        this.M = !1;
        this.o = !0
    };
    $m.prototype.D = function() {
        return !1
    };
    $m.prototype.initialize = function() {
        return this.G = !0
    };
    $m.prototype.pb = function() {
        return this.g.V
    };
    $m.prototype.Db = function() {
        return this.g.H
    };
    var bn = function(a, b, c) {
        if (!a.H || (void 0 === c ? 0 : c)) a.H = !0, a.V = b, a.I = 0, a.g != a || an(a)
    };
    $m.prototype.getName = function() {
        return this.g.da
    };
    $m.prototype.Na = function() {
        return this.g.X()
    };
    $m.prototype.X = function() {
        return {}
    };
    $m.prototype.Ha = function() {
        return this.g.I
    };
    var cn = function(a, b) {
        wb(a.B, b) || (a.B.push(b), b.rb(a.g), b.Pa(a.l), b.Da() && (a.L = !0))
    };
    $m.prototype.R = function() {
        var a = O();
        a.g = Hm(!0, this.ka, a.C)
    };
    $m.prototype.T = function() {
        Vm(O(), this.ka)
    };
    $m.prototype.Y = function() {
        return this.l.g
    };
    var dn = function(a) {
        a = a.g;
        a.T();
        a.R();
        var b = O();
        b.I = Hm(!1, a.ka, b.C);
        Wm(O(), a.ka);
        a.l.g = a.Y()
    };
    $m.prototype.sample = function() {};
    var en = function(a, b) {
        a.g != a ? en(a.g, b) : a.o !== b && (a.o = b, an(a))
    };
    $m.prototype.Ic = function() {
        return this.g.o
    };
    var fn = function(a) {
            a.L = a.B.length ? sb(a.B, function(b) {
                return b.Da()
            }) : !1
        },
        gn = function(a) {
            var b = Bb(a.B);
            z(b, function(c) {
                c.Pa(a.l)
            })
        },
        an = function(a) {
            var b = Bb(a.B);
            z(b, function(c) {
                c.rb(a.g)
            });
            a.g != a || gn(a)
        };
    l = $m.prototype;
    l.rb = function(a) {
        var b = this.g;
        this.g = a.Ha() >= this.I ? a : this;
        b !== this.g ? (this.o = this.g.o, an(this)) : this.o !== this.g.o && (this.o = this.g.o, an(this))
    };
    l.Pa = function(a) {
        if (a.h === this.g) {
            var b = this.l,
                c = this.L;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.l = a;
            !c && gn(this)
        }
    };
    l.Da = function() {
        return this.L
    };
    l.W = function() {
        this.M = !0
    };
    l.Ra = function() {
        return this.M
    };
    var hn = function(a, b, c, d) {
        this.l = a;
        this.g = new F(0, 0, 0, 0);
        this.A = new F(0, 0, 0, 0);
        this.h = b;
        this.U = c;
        this.H = d;
        this.G = !1;
        this.timestamp = -1;
        this.I = new xm(b.l, this.g, new F(0, 0, 0, 0), 0, 0, um(), 0)
    };
    l = hn.prototype;
    l.tc = function() {
        return !0
    };
    l.Kb = function() {};
    l.W = function() {
        if (!this.Ra()) {
            var a = this.h;
            xb(a.B, this);
            a.L && this.Da() && fn(a);
            this.Kb();
            this.G = !0
        }
    };
    l.Ra = function() {
        return this.G
    };
    l.Na = function() {
        return this.h.Na()
    };
    l.Ha = function() {
        return this.h.Ha()
    };
    l.pb = function() {
        return this.h.pb()
    };
    l.Db = function() {
        return this.h.Db()
    };
    l.rb = function() {};
    l.Pa = function() {
        this.Ma()
    };
    l.Da = function() {
        return this.H
    };
    var jn = function(a) {
        this.B = !1;
        this.g = a;
        this.o = La
    };
    l = jn.prototype;
    l.Ha = function() {
        return this.g.Ha()
    };
    l.pb = function() {
        return this.g.pb()
    };
    l.Db = function() {
        return this.g.Db()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Lb(a, b, c), cn(this.g, d));
        return d
    };
    l.hd = function() {
        return this.yb()
    };
    l.yb = function() {
        return !1
    };
    l.init = function(a) {
        return this.g.initialize() ? (cn(this.g, this), this.o = a, !0) : !1
    };
    l.rb = function(a) {
        0 == a.Ha() && this.o(a.pb(), this)
    };
    l.Pa = function() {};
    l.Da = function() {
        return !1
    };
    l.W = function() {
        this.B = !0
    };
    l.Ra = function() {
        return this.B
    };
    l.Na = function() {
        return {}
    };
    var kn = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.h = a;
            this.g = null == b ? "" : b
        },
        ln = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        mn = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var nn = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    nn.prototype.add = function(a, b, c) {
        ++this.l;
        a = new kn(a, b, c);
        this.g.push(new kn(a.h, a.g, a.l + this.l / 4096));
        this.h = !0;
        return this
    };
    var on = function(a, b) {
            z(b.g, function(c) {
                a.add(c.h, c.g, ln(c))
            })
        },
        pn = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            Pf(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        rn = function(a) {
            var b = qn;
            a.h && (Db(a.g, function(c, d) {
                return mn(d, c) ? 1 : mn(c, d) ? -1 : 0
            }), a.h = !1);
            return rb(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var qn = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (wb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var sn = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new nn;
        void 0 !== a && on(this.g, a);
        b && this.g.add("v", Jk, -16)
    };
    sn.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = rn(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var tn = function(a) {
            var b = [],
                c = [];
            Gb(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        un = function() {
            if (Jk && "unreleased" !== Jk) return Jk
        },
        vn = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c =
                    un();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            a = a.substring(0, b);
            Sl(a)
        };
    var wn = function() {
        this.g = 0
    };
    var xn = function(a, b, c) {
        z(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                    g = new nn;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.B);
                d = H(wn);
                g.add("i", d.g++);
                g.add("adk", e);
                pn(g, f);
                e = new sn(g);
                vn(e)
            }
        })
    };
    var yn = function() {
            this.h = this.l = this.o = this.g = 0
        },
        zn = function(a, b, c, d) {
            b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (void 0 === d ? !b : d) a.o = 0
        };
    var An = [1, .75, .5, .3, 0],
        Bn = function(a) {
            this.h = a = void 0 === a ? An : a;
            this.g = qb(this.h, function() {
                return new yn
            })
        },
        Dn = function(a, b) {
            return Cn(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        Fn = function(a, b) {
            return En(a, b, function(c) {
                return c.g
            })
        },
        Gn = function(a, b) {
            return Cn(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        Hn = function(a, b) {
            return En(a, b, function(c) {
                return c.l
            })
        },
        In = function(a, b) {
            return En(a, b, function(c) {
                return c.h
            })
        },
        Jn = function(a) {
            z(a.g, function(b) {
                b.h = 0
            })
        },
        Kn = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                    k = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                zn(a.g[f], g && k, e, !g || h)
            }
        },
        Cn = function(a, b, c) {
            a = qb(a.g, function(d) {
                return b(d)
            });
            return c ? a : Ln(a)
        },
        En = function(a, b, c) {
            var d = vb(a.h, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        Ln = function(a) {
            return qb(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var Mn = function() {
            this.h = new Bn;
            this.V = new yn;
            this.H = this.C = -1;
            this.$ = 1E3;
            this.aa = new Bn([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.M = this.J = -1
        },
        Nn = function(a, b) {
            return Gn(a.h, void 0 === b ? !0 : b)
        };
    Mn.prototype.L = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.J = -1 != this.J ? Math.min(this.J, b.oa) : b.oa;
        this.M = Math.max(this.M, b.oa);
        Kn(this.aa, b.oa, c.oa, b.g, a, d);
        Kn(this.h, b.Z, c.Z, b.g, a, d);
        c = d || c.Za != b.Za ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        zn(this.V, c, a, b)
    };
    Mn.prototype.ab = function() {
        return this.V.l >= this.$
    };
    var On = new F(0, 0, 0, 0);

    function Pn(a, b) {
        b = Qn(b);
        return 0 === b ? 0 : Qn(a) / b
    }

    function Qn(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Rn(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                if (a = Af(a) || a) {
                    var d = of (a),
                        e = d && E(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function Sn(a, b, c) {
        if (!a || !b) return !1;
        b = $f(Zf(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = vg();
        Lf(d.top) && d.top && d.top.document && (d = d.top);
        if (!Em(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = of (c)) && b.defaultView && b.defaultView.frameElement) && Rn(b, a);
        d = a === c;
        a = !d && a && Df(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Tn(a, b, c, d) {
        return O().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? lm(208, function() {
            return Sn(a, b, c)
        }) : !1
    };
    var Un = new F(0, 0, 0, 0),
        Vn = function(a, b, c) {
            L.call(this);
            this.position = Zf(Un);
            this.cc = this.Wb();
            this.Lc = -2;
            this.vf = Date.now();
            this.Rd = -1;
            this.Zb = b;
            this.Yb = null;
            this.Ub = !1;
            this.jc = null;
            this.opacity = -1;
            this.qf = c;
            this.Sd = this.Mc = La;
            this.pa = new Gl;
            this.pa.Sa = a;
            this.pa.g = a;
            this.$a = !1;
            this.Xa = {
                Oc: null,
                Nc: null
            };
            this.Pd = !0;
            this.Jb = null;
            this.sb = this.Ye = !1;
            N().C++;
            this.na = this.Dc();
            this.Qd = -1;
            this.ba = null;
            this.Te = !1;
            a = this.U = new xl;
            yl(a, "od", jl);
            sl(yl(a, "opac", ml));
            sl(yl(a, "sbeos", ml));
            sl(yl(a, "prf", ml));
            sl(yl(a,
                "mwt", ml));
            yl(a, "iogeo", ml);
            (a = this.pa.Sa) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Fl && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + cd()) : a.getAttribute("data-" + cd())) && (O().h = !0);
            1 == this.qf ? Al(this.U, "od", 1) : Al(this.U, "od", 0)
        };
    t(Vn, L);
    l = Vn.prototype;
    l.N = function() {
        this.pa.g && (this.Xa.Oc && (hf(this.pa.g, "mouseover", this.Xa.Oc), this.Xa.Oc = null), this.Xa.Nc && (hf(this.pa.g, "mouseout", this.Xa.Nc), this.Xa.Nc = null));
        this.Jb && this.Jb.W();
        this.ba && this.ba.W();
        delete this.cc;
        delete this.Mc;
        delete this.Sd;
        delete this.pa.Sa;
        delete this.pa.g;
        delete this.Xa;
        delete this.Jb;
        delete this.ba;
        delete this.U;
        L.prototype.N.call(this)
    };
    l.Ya = function() {
        return this.ba ? this.ba.g : this.position
    };
    l.Rc = function(a) {
        N().Rc(a)
    };
    l.Da = function() {
        return !1
    };
    l.Wb = function() {
        return new Mn
    };
    l.ra = function() {
        return this.cc
    };
    var Wn = function(a, b) {
            b != a.sb && (a.sb = b, a = O(), b ? a.A++ : 0 < a.A && a.A--)
        },
        Xn = function(a, b) {
            if (a.ba) {
                if (b.getName() === a.ba.getName()) return;
                a.ba.W();
                a.ba = null
            }
            b = b.create(a.pa.g, a.U, a.Da());
            if (b = null != b && b.tc() ? b : null) a.ba = b
        },
        Yn = function(a, b, c) {
            if (!a.Yb || -1 == a.Zb || -1 === b.getTimestamp() || -1 === a.Yb.getTimestamp()) return 0;
            a = b.getTimestamp() - a.Yb.getTimestamp();
            return a > c ? 0 : a
        };
    Vn.prototype.Dd = function(a) {
        return Yn(this, a, 1E4)
    };
    var Zn = function(a, b, c) {
            if (a.ba) {
                a.ba.Ma();
                var d = a.ba.I,
                    e = d.l,
                    f = e.g;
                if (null != d.B) {
                    var g = d.h;
                    a.jc = new lf(g.left - f.left, g.top - f.top)
                }
                f = a.qc() ? Math.max(d.g, d.o) : d.g;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = a.Dd(d);
                a.Yb = d;
                a.$c(f, b, c, !1, g, e, d.A)
            }
        },
        $n = function(a) {
            if (a.Ub && a.Jb) {
                var b = 1 == Bl(a.U, "od"),
                    c = O().g,
                    d = a.Jb,
                    e = a.ba ? a.ba.getName() : "ns",
                    f = new mf(c.getWidth(), c.getHeight());
                c = a.qc();
                a = {
                    tf: e,
                    jc: a.jc,
                    Af: f,
                    qc: c,
                    Z: a.na.Z,
                    wf: b
                };
                if (b = d.h) {
                    b.Ma();
                    e = b.I;
                    f = e.l.g;
                    var g = null,
                        h = null;
                    null != e.B && f && (g = e.h, g = new lf(g.left -
                        f.left, g.top - f.top), h = new mf(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.o) : e.g;
                    c = {
                        tf: b.getName(),
                        jc: g,
                        Af: h,
                        qc: c,
                        wf: !1,
                        Z: e
                    }
                } else c = null;
                c && xn(d, a, c)
            }
        };
    l = Vn.prototype;
    l.$c = function(a, b, c, d, e, f, g) {
        this.$a || (this.Ub && (a = this.wc(a, c, e, g), d = d && this.na.Z >= (this.Za() ? .3 : .5), this.bd(f, a, d), this.Zb = b, 0 < a.Z && -1 === this.Qd && (this.Qd = b), -1 == this.Rd && this.ab() && (this.Rd = b), -2 == this.Lc && (this.Lc = Qn(this.Ya()) ? a.Z : -1), this.na = a), this.Mc(this))
    };
    l.bd = function(a, b, c) {
        this.ra().L(a, b, this.na, c)
    };
    l.Dc = function() {
        return new ll
    };
    l.wc = function(a, b, c, d) {
        c = this.Dc();
        c.g = b;
        b = Ql().h;
        b = 0 === lh(Re) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.Z = this.zc(a);
        c.Za = this.Za();
        c.oa = d;
        return c
    };
    l.zc = function(a) {
        return 0 === this.opacity && 1 === Bl(this.U, "opac") ? 0 : a
    };
    l.Za = function() {
        return !1
    };
    l.qc = function() {
        return this.Te || this.Ye
    };
    l.wa = function() {
        return 0
    };
    l.ab = function() {
        return this.cc.ab()
    };
    var ao = function(a, b, c) {
        b && (a.Mc = b);
        c && (a.Sd = c)
    };
    var bo = "StopIteration" in u ? u.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        co = function() {};
    co.prototype.next = function() {
        return co.prototype.g.call(this)
    };
    co.prototype.g = function() {
        throw bo;
    };
    co.prototype.lb = function() {
        return this
    };
    var eo = function() {
            this.o = this.g = this.l = this.h = this.B = 0
        },
        fo = function(a) {
            var b = {};
            b = (b.ptlt = Ya() - a.B, b);
            var c = a.h;
            c && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var go = function() {
        ll.call(this);
        this.l = !1;
        this.volume = void 0;
        this.paused = !1;
        this.mediaTime = -1
    };
    t(go, ll);
    var ho = function(a) {
        return Pm(a.volume) && 0 < a.volume
    };
    var io = function() {
            var a = {};
            this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.g = {};
            for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
            this.l = 0
        },
        jo = function(a, b) {
            var c = a.h[b],
                d = c[1];
            a.l += c[0];
            0 < d && 0 == a.g[b] && (a.g[b] = 1)
        },
        ko = function(a) {
            var b = Nb(a.h),
                c = 0,
                d;
            for (d in a.g) wb(b, d) && 1 == a.g[d] && (c += a.h[d][1], a.g[d] =
                2);
            return c
        },
        lo = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1]
            }
            return b
        };
    var mo = function() {
            this.h = this.g = 0
        },
        no = function(a, b, c) {
            32 <= b || (a.h & 1 << b && !c ? a.g &= ~(1 << b) : a.h & 1 << b || !c || (a.g |= 1 << b), a.h |= 1 << b)
        };
    var oo = function() {
        Mn.call(this);
        this.l = new yn;
        this.T = this.D = this.K = 0;
        this.I = -1;
        this.da = new yn;
        this.B = new yn;
        this.g = new Bn;
        this.A = this.o = -1;
        this.G = new yn;
        this.$ = 2E3;
        this.R = new mo;
        this.Y = new mo;
        this.X = new mo
    };
    t(oo, Mn);
    var po = function(a, b, c) {
        var d = a.T;
        tm || c || -1 == a.I || (d += b - a.I);
        return d
    };
    oo.prototype.L = function(a, b, c, d) {
        if (!b.paused) {
            Mn.prototype.L.call(this, a, b, c, d);
            var e = ho(b) && ho(c),
                f = .5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
            Pm(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
            f && (this.K += a, this.D += e ? a : 0);
            Kn(this.g, b.Z, c.Z, b.g, a, d, e);
            zn(this.l, !0, a);
            zn(this.B, e, a);
            zn(this.G, c.l, a);
            zn(this.da, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            no(this.R, a, b.isVisible());
            no(this.Y, a, 1 <= b.Z);
            no(this.X, a, ho(b))
        }
    };
    var qo = function() {
        this.g = !1
    };
    var ro = function(a, b) {
        this.g = !1;
        this.h = a;
        this.I = b;
        this.l = 0
    };
    t(ro, qo);
    var so = function(a, b) {
        return a.o(b) ? (b = a.I.report(a.h, b), a.l |= b, 0 == b) : !1
    };
    ro.prototype.o = function() {
        return !0
    };
    ro.prototype.B = function() {
        return !1
    };
    ro.prototype.getId = function() {
        var a = this,
            b = Rb(function(c) {
                return c == a.h
            });
        return Cm[b].toString()
    };
    ro.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.g && (a += "s");
        0 < this.l && (a += ":" + this.l);
        return this.getId() + a
    };
    var to = function(a, b, c, d) {
        hn.call(this, a, b, c, d)
    };
    t(to, hn);
    l = to.prototype;
    l.xc = function() {
        if (this.l) {
            var a = this.l,
                b = this.h.g.ka;
            try {
                try {
                    var c = Nm(a.getBoundingClientRect())
                } catch (n) {
                    c = new F(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = pg(a, b),
                    g = f.x,
                    h = f.y;
                var k = new F(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (n) {
                k = Zf(On)
            }
            this.g = k
        }
    };
    l.rd = function() {
        this.A = this.h.l.g
    };
    l.Fd = function(a) {
        return Tn(a, this.A, this.l, 1 == Bl(this.U, "od"))
    };
    l.sd = function() {
        this.timestamp = um()
    };
    l.Ma = function() {
        this.sd();
        this.xc();
        if (this.l && "number" === typeof this.l.videoWidth && "number" === typeof this.l.videoHeight) {
            var a = this.l;
            var b = new mf(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Zf(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.g = a
        }
        this.rd();
        a = this.g;
        c = this.A;
        a = a.left <=
            c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new F(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new F(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new F(0, 0, 0, 0) : a;
        a = this.h.l;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Fd(c) ? c = new F(0, 0, 0, 0) : (d = O().B, b = new F(0, d.height, d.width, 0), d = Pn(c, this.g), e = Pn(c, O().g), b = Pn(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new F(0, 0, 0, 0) : $f(c, -this.g.left, -this.g.top);
        Xm() ||
            (e = d = 0);
        this.I = new xm(a, this.g, c, d, e, this.timestamp, b)
    };
    l.getName = function() {
        return this.h.getName()
    };
    var uo = new F(0, 0, 0, 0),
        vo = function(a, b, c) {
            hn.call(this, null, a, b, c);
            this.C = a.Ic();
            this.B = 0
        };
    t(vo, to);
    l = vo.prototype;
    l.tc = function() {
        this.o();
        return !0
    };
    l.Pa = function() {
        to.prototype.Ma.call(this)
    };
    l.sd = function() {};
    l.xc = function() {};
    l.Ma = function() {
        this.o();
        to.prototype.Ma.call(this)
    };
    l.rb = function(a) {
        a = a.Ic();
        a !== this.C && (a ? this.o() : (O().g = new F(0, 0, 0, 0), this.g = new F(0, 0, 0, 0), this.A = new F(0, 0, 0, 0), this.timestamp = -1));
        this.C = a
    };

    function wo(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var xo = {},
        yo = (xo.firstquartile = 0, xo.midpoint = 1, xo.thirdquartile = 2, xo.complete = 3, xo),
        zo = function(a, b, c, d, e, f) {
            e = void 0 === e ? null : e;
            f = void 0 === f ? [] : f;
            Vn.call(this, b, c, d);
            this.Ac = 0;
            this.ga = {};
            this.fa = new io;
            this.Td = {};
            this.ia = "";
            this.Ta = null;
            this.ua = !1;
            this.g = [];
            this.bb = e;
            this.A = f;
            this.B = null;
            this.l = -1;
            this.V = this.G = void 0;
            this.J = this.H = 0;
            this.R = -1;
            this.aa = this.$ = !1;
            this.M = this.C = this.h = this.vb = this.da = 0;
            new Bn;
            this.T = this.X = 0;
            this.Y = -1;
            this.ea = 0;
            this.D = La;
            this.K = [this.Wb()];
            this.va = 2;
            this.gb = {};
            this.gb.pause =
                "p";
            this.gb.resume = "r";
            this.gb.skip = "s";
            this.gb.mute = "m";
            this.gb.unmute = "um";
            this.gb.exitfullscreen = "ef";
            this.o = null
        };
    t(zo, Vn);
    zo.prototype.Da = function() {
        return !0
    };
    var Ao = function(a) {
        return void 0 === a ? a : Number(a) ? Im(a, 3) : 0
    };
    l = zo.prototype;
    l.Dd = function(a) {
        return Yn(this, a, Math.max(1E4, this.l / 3))
    };
    l.$c = function(a, b, c, d, e, f, g) {
        var h = this,
            k = this.D(this) || {};
        Xb(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.V = k.isYouTube || this.V;
        e = Bo(this, b);
        1 === Co(this) && (f = e);
        Vn.prototype.$c.call(this, a, b, c, d, k, f, g);
        this.bb && this.bb.g && z(this.A, function(n) {
            n.g || (n.g = so(n, h))
        })
    };
    l.bd = function(a, b, c) {
        Vn.prototype.bd.call(this, a, b, c);
        Do(this).L(a, b, this.na, c);
        this.aa = ho(this.na) && ho(b); - 1 == this.R && this.$ && (this.R = this.ra().l.g);
        this.fa.l = 0;
        a = this.ab();
        b.isVisible() && jo(this.fa, "vs");
        a && jo(this.fa, "vw");
        Pm(b.volume) && jo(this.fa, "am");
        ho(b) && jo(this.fa, "a");
        this.sb && jo(this.fa, "f"); - 1 != b.h && (jo(this.fa, "bm"), 1 == b.h && jo(this.fa, "b"));
        ho(b) && b.isVisible() && jo(this.fa, "avs");
        this.aa && a && jo(this.fa, "avw");
        0 < b.Z && jo(this.fa, "pv");
        Eo(this, this.ra().l.g, !0) && jo(this.fa, "gdr");
        2E3 <=
            Hn(this.ra().h, 1) && jo(this.fa, "pmx")
    };
    l.Wb = function() {
        return new oo
    };
    l.ra = function() {
        return this.cc
    };
    var Do = function(a, b) {
        return a.K[null != b && b < a.K.length ? b : a.K.length - 1]
    };
    zo.prototype.Dc = function() {
        return new go
    };
    zo.prototype.wc = function(a, b, c, d) {
        a = Vn.prototype.wc.call(this, a, b, c, void 0 === d ? -1 : d);
        a.l = this.sb;
        a.paused = 2 == this.ea;
        a.volume = c.volume;
        Pm(a.volume) || (this.da++, b = this.na, Pm(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    };
    var Co = function(a) {
            var b = !!Bl(N().U, "umt");
            return a.G || !b && !a.V ? 0 : 1
        },
        Bo = function(a, b) {
            2 == a.ea ? b = 0 : -1 == a.Zb ? b = 0 : (b -= a.Zb, b = b > Math.max(1E4, a.l / 3) ? 0 : b);
            var c = a.D(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.H;
            var d = c - a.H,
                e = 0;
            0 <= d ? (a.J += b, a.T += Math.max(b - d, 0), e = Math.min(d, a.J)) : a.X += Math.abs(d);
            0 != d && (a.J = 0); - 1 == a.Y && 0 < d && (a.Y = 0 <= sm ? um() - sm : -1);
            a.H = c;
            return e
        };
    zo.prototype.zc = function(a) {
        return O().L ? 0 : this.sb ? 1 : Vn.prototype.zc.call(this, a)
    };
    zo.prototype.wa = function() {
        return 1
    };
    zo.prototype.getDuration = function() {
        return this.l
    };
    var Fo = function(a, b) {
            sb(a.A, function(c) {
                return c.h == b.h
            }) || a.A.push(b)
        },
        Eo = function(a, b, c) {
            return 15E3 <= b ? !0 : a.$ ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.R ? b >= a.R : !1 : !1
        },
        Go = function(a) {
            var b = {},
                c = O();
            b.insideIframe = c.l;
            b.unmeasurable = a.$a;
            b.position = a.Ya();
            b.exposure = a.na.Z;
            b.documentSize = c.o;
            b.viewportSize = new mf(c.g.getWidth(), c.g.getHeight());
            null != a.o && (b.presenceData = a.o);
            b.screenShare = a.na.oa;
            return b
        },
        Ho = function(a) {
            var b = Im(a.na.Z, 2),
                c = a.fa.l,
                d = a.na,
                e = Do(a),
                f = Ao(e.o),
                g = Ao(e.A),
                h = Ao(d.volume),
                k = Im(e.C, 2),
                n = Im(e.H, 2),
                m = Im(d.Z, 2),
                v = Im(e.J, 2),
                r = Im(e.M, 2);
            d = Im(d.oa, 2);
            a = Zf(a.Ya());
            a.round();
            e = Nn(e, !1);
            return {
                zf: b,
                Eb: c,
                dc: f,
                $b: g,
                zb: h,
                ec: k,
                ac: n,
                Z: m,
                fc: v,
                bc: r,
                oa: d,
                position: a,
                hc: e
            }
        },
        Jo = function(a, b) {
            Io(a.g, b, function() {
                return {
                    zf: 0,
                    Eb: void 0,
                    dc: -1,
                    $b: -1,
                    zb: -1,
                    ec: -1,
                    ac: -1,
                    Z: -1,
                    fc: -1,
                    bc: -1,
                    oa: -1,
                    position: void 0,
                    hc: []
                }
            });
            a.g[b] = Ho(a)
        },
        Io = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Mo = function(a, b, c) {
            var d = a.Td[b];
            if (null != d) return d;
            d = Ko(a, b);
            var e = Rb(function(f) {
                return f == b
            });
            a = Lo(a,
                d, d, c, yo[Sb[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
            return a
        },
        No = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        Lo = function(a, b, c, d, e) {
            if (a.$a) return {
                "if": 0
            };
            var f = Zf(a.Ya());
            f.round();
            var g = O(),
                h = N(),
                k = a.ra(),
                n = a.ba ? a.ba.getName() : "ns",
                m = {};
            m["if"] = g.l ? 1 : void 0;
            m.sdk = a.B ? a.B : void 0;
            m.t = a.vf;
            m.p = [f.top, f.left, f.bottom, f.right];
            m.tos = Dn(k.h, !1);
            m.mtos = Nn(k);
            m.mcvt = k.V.l;
            m.ps = void 0;
            m.vht = po(k, um(), 2 == a.ea);
            m.mut = k.da.l;
            m.a = Ao(a.na.volume);
            m.mv = Ao(k.A);
            m.fs = a.sb ? 1 : 0;
            m.ft = k.G.g;
            m.at = k.B.g;
            m.as = 0 < k.o ? 1 : 0;
            m.atos = Dn(k.g);
            m.ssb = Dn(k.aa, !1);
            m.amtos = Gn(k.g, !1);
            m.uac = a.da;
            m.vpt = k.l.g;
            "nio" == n && (m.nio = 1, m.avms = "nio");
            m.gmm = "4";
            m.gdr = Eo(a, k.l.g, !0) ? 1 : 0;
            m.efpf = a.va;
            if ("gsv" == n || "nis" == n) f = a.ba, 0 < f.B && (m.nnut = f.B);
            m.tcm = Co(a);
            m.nmt = a.X;
            m.bt = a.T;
            m.pst = a.Y;
            m.vpaid = a.G;
            m.dur = a.l;
            m.vmtime = a.H;
            m.is = a.fa.l;
            1 <= a.g.length && (m.i0 = a.g[0].Eb, m.a0 = [a.g[0].zb], m.c0 = [a.g[0].Z], m.ss0 = [a.g[0].oa], f = a.g[0].position, m.p0 = f ? wo(f) : void 0);
            2 <= a.g.length && (m.i1 = a.g[1].Eb,
                m.a1 = No(a.g[1].dc, a.g[1].zb, a.g[1].$b), m.c1 = No(a.g[1].ec, a.g[1].Z, a.g[1].ac), m.ss1 = No(a.g[1].fc, a.g[1].oa, a.g[1].bc), f = a.g[1].position, m.p1 = f ? wo(f) : void 0, m.mtos1 = a.g[1].hc);
            3 <= a.g.length && (m.i2 = a.g[2].Eb, m.a2 = No(a.g[2].dc, a.g[2].zb, a.g[2].$b), m.c2 = No(a.g[2].ec, a.g[2].Z, a.g[2].ac), m.ss2 = No(a.g[2].fc, a.g[2].oa, a.g[2].bc), f = a.g[2].position, m.p2 = f ? wo(f) : void 0, m.mtos2 = a.g[2].hc);
            4 <= a.g.length && (m.i3 = a.g[3].Eb, m.a3 = No(a.g[3].dc, a.g[3].zb, a.g[3].$b), m.c3 = No(a.g[3].ec, a.g[3].Z, a.g[3].ac), m.ss3 = No(a.g[3].fc,
                a.g[3].oa, a.g[3].bc), f = a.g[3].position, m.p3 = f ? wo(f) : void 0, m.mtos3 = a.g[3].hc);
            m.cs = lo(a.fa);
            b && (m.ic = ko(a.fa), m.dvpt = k.l.h, m.dvs = In(k.h, .5), m.dfvs = In(k.h, 1), m.davs = In(k.g, .5), m.dafvs = In(k.g, 1), c && (k.l.h = 0, Jn(k.h), Jn(k.g)), a.ab() && (m.dtos = k.K, m.dav = k.D, m.dtoss = a.Ac + 1, c && (k.K = 0, k.D = 0, a.Ac++)), m.dat = k.B.h, m.dft = k.G.h, c && (k.B.h = 0, k.G.h = 0));
            m.ps = [g.o.width, g.o.height];
            m.bs = [g.g.getWidth(), g.g.getHeight()];
            m.scs = [g.B.width, g.B.height];
            m.dom = g.domain;
            a.vb && (m.vds = a.vb);
            if (0 < a.A.length || a.bb) b = Bb(a.A), a.bb &&
                b.push(a.bb), m.pings = qb(b, function(v) {
                    return v.toString()
                });
            b = qb(pb(a.A, function(v) {
                return v.B()
            }), function(v) {
                return v.getId()
            });
            Cb(b);
            m.ces = b;
            a.h && (m.vmer = a.h);
            a.C && (m.vmmk = a.C);
            a.M && (m.vmiec = a.M);
            m.avms = a.ba ? a.ba.getName() : "ns";
            a.ba && Xb(m, a.ba.Na());
            d ? (m.c = Im(a.na.Z, 2), m.ss = Im(a.na.oa, 2)) : m.tth = um() - rm;
            m.mc = Im(k.H, 2);
            m.nc = Im(k.C, 2);
            m.mv = Ao(k.A);
            m.nv = Ao(k.o);
            m.lte = Im(a.Lc, 2);
            d = Do(a, e);
            Nn(k);
            m.qmtos = Nn(d);
            m.qnc = Im(d.C, 2);
            m.qmv = Ao(d.A);
            m.qnv = Ao(d.o);
            m.qas = 0 < d.o ? 1 : 0;
            m.qi = a.ia;
            m.avms || (m.avms = "geo");
            m.psm = k.R.h;
            m.psv = k.R.g;
            m.psfv = k.Y.g;
            m.psa = k.X.g;
            h = Dl(h.U);
            h.length && (m.veid = h);
            a.o && Xb(m, fo(a.o));
            return m
        },
        Ko = function(a, b) {
            if (wb(Bm, b)) return !0;
            var c = a.ga[b];
            return void 0 !== c ? (a.ga[b] = !0, !c) : !1
        };
    var Oo = Ya(),
        Ro = function() {
            this.g = {};
            var a = E();
            Po(this, a, document);
            var b = Qo();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) Po(this, c, c.document);
                    Po(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        Qo = function() {
            var a = document.documentElement;
            try {
                if (!Lf(E().top)) return "2";
                var b = [],
                    c = E(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        Po = function(a, b, c) {
            Gm(c, "mousedown", function() {
                return So(a)
            }, 301);
            Gm(b,
                "scroll",
                function() {
                    return To(a)
                }, 302);
            Gm(c, "touchmove", function() {
                return Uo(a)
            }, 303);
            Gm(c, "mousemove", function() {
                return Vo(a)
            }, 304);
            Gm(c, "keydown", function() {
                return Wo(a)
            }, 305)
        },
        So = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        To = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Uo = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        Wo = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.h || ++b.h
            })
        },
        Vo = function(a) {
            Gb(a.g, function(b) {
                1E5 < b.o || ++b.o
            })
        };
    var Xo = function() {
            this.g = [];
            this.h = []
        },
        Yo = function(a, b) {
            return tb(a.g, function(c) {
                return c.ia == b
            })
        },
        Zo = function(a, b) {
            return b ? tb(a.g, function(c) {
                return c.pa.Sa == b
            }) : null
        },
        $o = function(a, b) {
            return tb(a.h, function(c) {
                return 2 == c.wa() && c.ia == b
            })
        },
        bp = function() {
            var a = ap;
            return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Ab(a.h, a.g)
        };
    Xo.prototype.reset = function() {
        this.g = [];
        this.h = []
    };
    var cp = function(a, b) {
            a = 1 == b.wa() ? a.g : a.h;
            var c = ub(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.ba && b.ba.Kb(), b.W(), !0) : !1
        },
        dp = function(a) {
            var b = ap;
            if (cp(b, a)) {
                switch (a.wa()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return $o(b, a.ia)
                        };
                        break;
                    case 1:
                        c = function() {
                            return Yo(b, a.ia)
                        }
                }
                for (var d = c(); d; d = c()) cp(b, d)
            }
        },
        ep = function(a) {
            var b = ap;
            a = pb(a, function(c) {
                return !Zo(b, c.pa.Sa)
            });
            b.g.push.apply(b.g, ha(a))
        },
        fp = function(a) {
            var b = ap,
                c = [];
            z(a, function(d) {
                sb(b.g, function(e) {
                    return e.pa.Sa ===
                        d.pa.Sa && e.ia === d.ia
                }) || (b.g.push(d), c.push(d))
            })
        },
        ap = H(Xo);
    var gp = function() {
            this.g = this.h = null
        },
        hp = function(a, b) {
            if (null == a.h) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = tb(a.h, function(d) {
                return null != d && d.hd()
            });
            a.g && (a.g.init(c) ? dn(a.g.g) : b(a.g.g.pb(), a.g));
            return null != a.g
        };
    var jp = function(a) {
        a = ip(a);
        jn.call(this, a.length ? a[a.length - 1] : new $m(D, 0));
        this.l = a;
        this.h = null
    };
    t(jp, jn);
    l = jp.prototype;
    l.getName = function() {
        return (this.h ? this.h : this.g).getName()
    };
    l.Na = function() {
        return (this.h ? this.h : this.g).Na()
    };
    l.Ha = function() {
        return (this.h ? this.h : this.g).Ha()
    };
    l.init = function(a) {
        var b = !1;
        z(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a, cn(this.g, this));
        return b
    };
    l.W = function() {
        z(this.l, function(a) {
            a.W()
        });
        jn.prototype.W.call(this)
    };
    l.hd = function() {
        return sb(this.l, function(a) {
            return a.D()
        })
    };
    l.yb = function() {
        return sb(this.l, function(a) {
            return a.D()
        })
    };
    l.Lb = function(a, b, c) {
        return new to(a, this.g, b, c)
    };
    l.Pa = function(a) {
        this.h = a.h
    };
    var ip = function(a) {
        if (!a.length) return [];
        a = pb(a, function(c) {
            return null != c && c.D()
        });
        for (var b = 1; b < a.length; b++) cn(a[b - 1], a[b]);
        return a
    };
    var kp = {
            threshold: [0, .3, .5, .75, 1]
        },
        lp = function(a, b, c, d) {
            hn.call(this, a, b, c, d);
            this.D = this.L = this.C = this.B = this.o = null
        };
    t(lp, to);
    lp.prototype.tc = function() {
        var a = this;
        this.D || (this.D = um());
        if (lm(298, function() {
                return mp(a)
            })) return !0;
        bn(this.h, "msf");
        return !1
    };
    lp.prototype.Kb = function() {
        if (this.o && this.l) try {
            this.o.unobserve(this.l), this.B ? (this.B.unobserve(this.l), this.B = null) : this.C && (this.C.disconnect(), this.C = null)
        } catch (a) {}
    };
    var np = function(a) {
            return a.o && a.o.takeRecords ? a.o.takeRecords() : []
        },
        mp = function(a) {
            if (!a.l) return !1;
            var b = a.l,
                c = a.h.g.ka,
                d = N().g.g;
            a.o = new c.IntersectionObserver(Xl(d, function(e) {
                return op(a, e)
            }), kp);
            d = Xl(d, function() {
                a.o.unobserve(b);
                a.o.observe(b);
                op(a, np(a))
            });
            c.ResizeObserver ? (a.B = new c.ResizeObserver(d), a.B.observe(b)) : c.MutationObserver && (a.C = new u.MutationObserver(d), a.C.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.o.observe(b);
            op(a, np(a));
            return !0
        },
        op = function(a,
            b) {
            try {
                if (b.length) {
                    a.L || (a.L = um());
                    var c = pp(b),
                        d = pg(a.l, a.h.g.ka),
                        e = d.x,
                        f = d.y;
                    a.g = new F(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = Nm(c.intersectionRect);
                    a.A = $f(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.Kb(), nm(299, h)
            }
        },
        pp = function(a) {
            return rb(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    l = lp.prototype;
    l.Ma = function() {
        var a = np(this);
        0 < a.length && op(this, a);
        to.prototype.Ma.call(this)
    };
    l.xc = function() {};
    l.Fd = function() {
        return !1
    };
    l.rd = function() {};
    l.Na = function() {
        var a = {};
        return Object.assign(this.h.Na(), (a.niot_obs = this.D, a.niot_cbk = this.L, a))
    };
    l.getName = function() {
        return "nio"
    };
    var qp = function(a) {
        a = void 0 === a ? D : a;
        jn.call(this, new $m(a, 2))
    };
    t(qp, jn);
    qp.prototype.getName = function() {
        return "nio"
    };
    qp.prototype.yb = function() {
        return !O().h && null != this.g.g.ka.IntersectionObserver
    };
    qp.prototype.Lb = function(a, b, c) {
        return new lp(a, this.g, b, c)
    };
    var sp = function() {
        var a = rp();
        $m.call(this, D.top, a, "geo")
    };
    t(sp, $m);
    sp.prototype.Y = function() {
        return O().g
    };
    sp.prototype.D = function() {
        var a = rp();
        this.I !== a && (this.g != this && a > this.g.I && (this.g = this, an(this)), this.I = a);
        return 2 == a
    };
    var rp = function() {
        N();
        var a = O();
        return a.l || a.h ? 0 : 2
    };
    var tp = function() {};
    var up = function() {
            this.done = !1;
            this.g = {
                se: 0,
                od: 0,
                Ch: 0,
                yd: 0,
                Gc: -1,
                Ae: 0,
                ze: 0,
                Be: 0
            };
            this.B = null;
            this.A = !1;
            this.l = null;
            this.C = 0;
            this.h = new Ym(this)
        },
        xp = function() {
            var a = vp;
            a.A || (a.A = !0, wp(a, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                return a.o.apply(a, ha(c))
            }), a.o())
        };
    up.prototype.sample = function() {
        yp(this, bp(), !1)
    };
    var zp = function() {
            H(tp);
            var a = H(gp);
            null != a.g && a.g.g ? dn(a.g.g) : Tm(O())
        },
        yp = function(a, b, c) {
            if (!a.done && (a.h.cancel(), 0 != b.length)) {
                a.l = null;
                try {
                    zp();
                    var d = um(),
                        e = N();
                    e.A = d;
                    if (null != H(gp).g)
                        for (e = 0; e < b.length; e++) Zn(b[e], d, c);
                    else cm(em, "", {
                        strategy_not_selected: 1,
                        bin: e.h
                    }, !0, void 0);
                    for (d = 0; d < b.length; d++) $n(b[d]);
                    ++a.g.yd;
                    N()
                } finally {
                    c ? z(b, function(f) {
                        f.na.Z = 0
                    }) : Zm(a.h)
                }
            }
        },
        wp = function(a, b) {
            if (!a.B) {
                b = mm(142, b);
                Ql();
                var c = mh(Re);
                c && gf(Re, c, b, {
                    capture: !1
                }) && (a.B = b)
            }
        };
    up.prototype.o = function() {
        var a = Xm(),
            b = um();
        a ? (tm || (pm = b, z(ap.g, function(c) {
            var d = c.ra();
            d.T = po(d, b, 1 != c.ea)
        })), tm = !0) : (this.C = Ap(this, b), tm = !1, rm = b, z(ap.g, function(c) {
            c.Ub && (c.ra().I = b)
        }));
        yp(this, bp(), !a)
    };
    var Bp = function() {
            var a = H(gp);
            if (null != a.g) {
                var b = a.g;
                z(bp(), function(c) {
                    return Xn(c, b)
                })
            }
        },
        Ap = function(a, b) {
            a = a.C;
            tm && (a += b - pm);
            return a
        },
        Cp = function(a) {
            var b = vp;
            a = void 0 === a ? function() {
                return {}
            } : a;
            im.Vc("av-js");
            em.g = .01;
            km([function(c) {
                var d = N(),
                    e = {};
                e = (e.bin = d.h, e.type = "error", e);
                d = Cl(d.U);
                if (!b.l) {
                    var f = D.document,
                        g = 0 <= qm ? um() - qm : -1,
                        h = um(); - 1 == b.g.Gc && (g = h);
                    var k = O(),
                        n = N(),
                        m = Cl(n.U),
                        v = bp();
                    try {
                        if (0 < v.length) {
                            var r = k.g;
                            r && (m.bs = [r.getWidth(), r.getHeight()]);
                            var w = k.o;
                            w && (m.ps = [w.width, w.height]);
                            D.screen && (m.scs = [D.screen.width, D.screen.height])
                        } else m.url = encodeURIComponent(D.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        m.tt = g;
                        m.pt = qm;
                        m.bin = n.h;
                        void 0 !== D.google_osd_load_pub_page_exp && (m.olpp = D.google_osd_load_pub_page_exp);
                        m.deb = [1, b.g.se, b.g.od, b.g.yd, b.g.Gc, 0, b.h.h, b.g.Ae, b.g.ze, b.g.Be].join("-");
                        m.tvt = Ap(b, h);
                        k.h && (m.inapp = 1);
                        if (null !== D && D != D.top) {
                            0 < v.length && (m.iframe_loc = encodeURIComponent(D.location.href.substring(0, 512)));
                            var x = k.I;
                            m.is = [x.getWidth(), x.getHeight()]
                        }
                    } catch (la) {
                        m.error = 1
                    }
                    b.l = m
                }
                w = b.l;
                r = {};
                for (var G in w) r[G] = w[G];
                G = N().g;
                if (1 == Bl(G.l, "prf")) {
                    w = new Vl;
                    x = G.g;
                    f = 0; - 1 < x.g && (f = x.l.g.now() - x.g);
                    w = He(w, 1, x.o + f, 0);
                    x = G.g;
                    w = He(w, 5, -1 < x.g ? x.h + 1 : x.h, 0);
                    w = He(w, 2, G.h.g.l(), 0);
                    w = He(w, 3, G.h.g.h(), 0);
                    w = He(w, 4, G.h.g.g(), 0);
                    G = {};
                    x = new ce;
                    g = C(w, 1);
                    if (null != g) {
                        md(x.g, 9);
                        f = x.g;
                        k = g;
                        k = (g = 0 > k ? 1 : 0) ? -k : k;
                        if (0 === k) id = 0 < 1 / k ? 0 : 2147483648, hd = 0;
                        else if (isNaN(k)) id = 2147483647, hd = 4294967295;
                        else if (1.7976931348623157E308 < k) id = (g << 31 | 2146435072) >>>
                            0, hd = 0;
                        else if (2.2250738585072014E-308 > k) h = k / Math.pow(2, -1074), id = (g << 31 | h / 4294967296) >>> 0, hd = h >>> 0;
                        else {
                            n = k;
                            h = 0;
                            if (2 <= n)
                                for (; 2 <= n && 1023 > h;) h++, n /= 2;
                            else
                                for (; 1 > n && -1022 < h;) n *= 2, h--;
                            k *= Math.pow(2, -h);
                            id = (g << 31 | h + 1023 << 20 | 1048576 * k & 1048575) >>> 0;
                            hd = 4503599627370496 * k >>> 0
                        }
                        nd(f, hd);
                        nd(f, id)
                    }
                    je(x, 2, C(w, 2));
                    je(x, 3, C(w, 3));
                    je(x, 4, C(w, 4));
                    ie(x, 5, C(w, 5));
                    Qe(w, x);
                    w = he(x);
                    G = (G.pf = Zd(w), G)
                } else G = {};
                Xb(r, G);
                Xb(c, e, d, r, a());
                if (e = un()) d = {}, Xb(c, (d.v = encodeURIComponent(e), d))
            }])
        },
        vp = H(up);
    var Dp = null,
        Ep = "",
        Fp = !1,
        Gp = function() {
            var a = Dp || D;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };
    var Hp = function(a) {
            return function(b) {
                return void 0 === b[a] ? 0 : b[a]
            }
        },
        Jp = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (Array.isArray(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return void 0 !== a ? Ip(c, a) : c
                }
            }
        },
        Kp = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return Ip(f, b, c)
            }
        },
        Lp = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        Mp = function(a) {
            return function(b) {
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        Ip = function(a, b, c) {
            return void 0 === c || c ? pb(a, function(d, e) {
                return wb(b, e)
            }) : qb(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h
                }, 0)
            })
        };
    var Np = Mp([void 0, 1, 2, 3, 4, 8, 16]),
        Op = Mp([void 0, 4, 8, 16]),
        Pp = {
            sv: "sv",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: Lp("p0", Op),
            p1: Lp("p1", Op),
            p2: Lp("p2", Op),
            p3: Lp("p3", Op),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: Kp("mtos1", [0, 2, 4], !1, Op),
            mtos2: Kp("mtos2", [0, 2, 4], !1, Op),
            mtos3: Kp("mtos3", [0, 2, 4], !1, Op),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: Lp("a0", Op),
            a1: Lp("a1", Op),
            a2: Lp("a2", Op),
            a3: Lp("a3", Op),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: Lp("c0", Op),
            c1: Lp("c1", Op),
            c2: Lp("c2", Op),
            c3: Lp("c3", Op),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: Lp("qmtos", Np),
            qnc: Lp("qnc", Np),
            qmv: Lp("qmv", Np),
            qnv: Lp("qnv", Np),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: Lp("ss0", Op),
            ss1: Lp("ss1", Op),
            ss2: Lp("ss2", Op),
            ss3: Lp("ss3", Op),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia"
        },
        Qp = {
            c: Hp("c"),
            at: "at",
            atos: Kp("atos", [0, 2, 4]),
            ta: function(a, b) {
                return function(c) {
                    if (void 0 === c[a]) return b
                }
            }("tth", "1"),
            a: "a",
            dur: "dur",
            p: "p",
            tos: Jp(),
            j: "dom",
            mtos: Kp("mtos", [0, 2, 4]),
            gmm: "gmm",
            gdr: "gdr",
            ss: Hp("ss"),
            vsv: ib("w2"),
            t: "t"
        },
        Rp = {
            atos: "atos",
            avt: Kp("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: Hp("ss"),
            t: "t"
        },
        Sp = {
            a: "a",
            tos: Jp(),
            at: "at",
            c: Hp("c"),
            mtos: Kp("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: ib("ias_w2"),
            dom: "dom",
            gmm: "gmm",
            gdr: "gdr",
            t: "t"
        },
        Tp = {
            tos: Jp(),
            at: "at",
            c: Hp("c"),
            mtos: Kp("mtos",
                [0, 2, 4]),
            p: "p",
            vpt: "vpt",
            vsv: ib("dv_w4"),
            gmm: "gmm",
            gdr: "gdr",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: Kp("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if ("number" === typeof d) return qb(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
                }
            }("qnc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas",
            a: "a"
        };

    function Up() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b;
        if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : "903"
    }
    var Vp = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? {
                Ca: "ima",
                version: "903"
            } : "ima_html5_sdk".includes("ima_native_sdk") ? {
                Ca: "nima",
                version: "903"
            } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
                Ca: "an",
                version: "903"
            } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
                Ca: "cast",
                version: Up()
            } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
                Ca: "yw",
                version: Up()
            } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
                Ca: "out",
                version: Up()
            } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
                Ca: "r",
                version: Up()
            } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
                Ca: "n",
                version: Up()
            } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
                Ca: "int",
                version: Up()
            } : {
                Ca: "j",
                version: "903"
            }
        },
        Wp = Vp().Ca,
        Xp = Vp().version;
    var Zp = function(a, b) {
            var c = {
                sv: Xp,
                cb: Wp
            };
            c.nas = ap.g.length;
            c.msg = a;
            void 0 !== b && (a = Yp(b)) && (c.e = Cm[a]);
            return c
        },
        $p = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        Yp = function(a) {
            var b = $p(a) ? "custom_metric_viewable" : a.toLowerCase();
            return Rb(function(c) {
                return c == b
            })
        };
    var aq = {
            Yf: "visible",
            Ff: "audible",
            gh: "time",
            ih: "timetype"
        },
        bq = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        cq = function() {
            this.g = void 0;
            this.h = !1;
            this.l = 0;
            this.o = -1;
            this.B = "tos"
        },
        dq = function(a) {
            try {
                var b = a.split(",");
                return b.length > Nb(aq).length ? null : rb(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        bq[d[0]] || !bq[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        eq = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.B) {
                case "mtos":
                    return a.h ? Hn(b.g, a.g) : Hn(b.h, a.g);
                case "tos":
                    return a.h ? Fn(b.g, a.g) : Fn(b.h, a.g)
            }
            return 0
        };
    var fq = function(a, b, c, d) {
        ro.call(this, b, d);
        this.A = a;
        this.C = c
    };
    t(fq, ro);
    fq.prototype.getId = function() {
        return this.A
    };
    fq.prototype.B = function() {
        return !0
    };
    fq.prototype.o = function(a) {
        var b = a.ra(),
            c = a.getDuration();
        return sb(this.C, function(d) {
            if (void 0 != d.g) var e = eq(d, b);
            else b: {
                switch (d.B) {
                    case "mtos":
                        e = d.h ? b.B.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.h ? b.B.g : b.l.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var gq = function(a) {
        ro.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    t(gq, ro);
    gq.prototype.o = function(a) {
        var b = Fn(a.ra().g, 1);
        return Eo(a, b)
    };
    var hq = function(a, b) {
        ro.call(this, a, b)
    };
    t(hq, ro);
    hq.prototype.o = function(a) {
        return a.ra().ab()
    };
    var iq = function() {
        this.h = this.o = this.A = this.B = this.l = this.g = ""
    };
    var jq = function() {},
        kq = function(a, b, c, d, e) {
            var f = {};
            if (void 0 !== a)
                if (null != b)
                    for (var g in b) {
                        var h = b[g];
                        g in Object.prototype || null != h && (f[g] = "function" === typeof h ? h(a) : a[h])
                    } else Xb(f, a);
            void 0 !== c && Xb(f, c);
            a = rn(pn(new nn, f));
            0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += "&" + d + "=" + e);
            return a
        };
    var lq = function() {};
    t(lq, jq);
    lq.prototype.g = function(a) {
        var b = new iq;
        b.g = kq(a, Pp);
        b.l = kq(a, Rp);
        return b
    };
    var mq = function(a, b, c) {
        vo.call(this, a, b, c)
    };
    t(mq, vo);
    mq.prototype.o = function() {
        var a = Ka("ima.admob.getViewability"),
            b = Bl(this.U, "queryid");
        "function" === typeof a && b && a(b)
    };
    mq.prototype.getName = function() {
        return "gsv"
    };
    var nq = function(a) {
        a = void 0 === a ? D : a;
        jn.call(this, new $m(a, 2))
    };
    t(nq, jn);
    nq.prototype.getName = function() {
        return "gsv"
    };
    nq.prototype.yb = function() {
        var a = O();
        N();
        return a.h && !1
    };
    nq.prototype.Lb = function(a, b, c) {
        return new mq(this.g, b, c)
    };
    var oq = function(a, b, c) {
        vo.call(this, a, b, c)
    };
    t(oq, vo);
    oq.prototype.o = function() {
        var a = this,
            b = Ka("ima.bridge.getNativeViewability"),
            c = Bl(this.U, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            Tb(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = Om(d.opt_nativeViewBounds || {});
            var g = a.h.l;
            g.g = f ? Zf(uo) : Om(e);
            a.timestamp = d.opt_nativeTime || -1;
            O().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    oq.prototype.getName = function() {
        return "nis"
    };
    var pq = function(a) {
        a = void 0 === a ? D : a;
        jn.call(this, new $m(a, 2))
    };
    t(pq, jn);
    pq.prototype.getName = function() {
        return "nis"
    };
    pq.prototype.yb = function() {
        var a = O();
        N();
        return a.h && !1
    };
    pq.prototype.Lb = function(a, b, c) {
        return new oq(this.g, b, c)
    };
    var qq = function() {
        $m.call(this, D, 2, "mraid");
        this.$ = 0;
        this.J = this.K = !1;
        this.C = null;
        this.h = Dm(this.ka);
        this.l.g = new F(0, 0, 0, 0);
        this.aa = !1
    };
    t(qq, $m);
    qq.prototype.D = function() {
        return null != this.h.za
    };
    qq.prototype.X = function() {
        var a = {};
        this.$ && (a.mraid = this.$);
        this.K && (a.mlc = 1);
        a.mtop = this.h.sf;
        this.C && (a.mse = this.C);
        this.aa && (a.msc = 1);
        a.mcp = this.h.Tb;
        return a
    };
    qq.prototype.A = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.za[a].apply(this.h.za, c)
        } catch (e) {
            nm(538, e, .01, function(f) {
                f.method = a
            })
        }
    };
    var rq = function(a, b, c) {
        a.A("addEventListener", b, c)
    };
    qq.prototype.initialize = function() {
        var a = this;
        if (this.G) return !this.Db();
        this.G = !0;
        if (2 === this.h.Tb) return this.C = "ng", bn(this, "w"), !1;
        if (1 === this.h.Tb) return this.C = "mm", bn(this, "w"), !1;
        O().D = !0;
        this.ka.document.readyState && "complete" == this.ka.document.readyState ? sq(this) : Gm(this.ka, "load", function() {
            Ql().setTimeout(mm(292, function() {
                return sq(a)
            }), 100)
        }, 292);
        return !0
    };
    var sq = function(a) {
            N().B = !!a.A("isViewable");
            rq(a, "viewableChange", tq);
            "loading" === a.A("getState") ? rq(a, "ready", uq) : vq(a)
        },
        vq = function(a) {
            "string" === typeof a.h.za.AFMA_LIDAR ? (a.K = !0, wq(a)) : (a.h.Tb = 3, a.C = "nc", bn(a, "w"))
        },
        wq = function(a) {
            a.J = !1;
            var b = 1 == Bl(N().U, "rmmt"),
                c = !!a.A("isViewable");
            (b ? !c : 1) && Ql().setTimeout(mm(524, function() {
                a.J || (xq(a), nm(540, Error()), a.C = "mt", bn(a, "w"))
            }), 500);
            yq(a);
            rq(a, a.h.za.AFMA_LIDAR, zq)
        },
        yq = function(a) {
            var b = 1 == Bl(N().U, "sneio"),
                c = void 0 !== a.h.za.AFMA_LIDAR_EXP_1,
                d =
                void 0 !== a.h.za.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.h.za.AFMA_LIDAR_EXP_2 = !0);
            c && (a.h.za.AFMA_LIDAR_EXP_1 = !b)
        },
        xq = function(a) {
            a.A("removeEventListener", a.h.za.AFMA_LIDAR, zq);
            a.K = !1
        };
    qq.prototype.R = function() {
        var a = O(),
            b = Aq(this, "getMaxSize");
        a.g = new F(0, b.width, b.height, 0)
    };
    qq.prototype.T = function() {
        O().B = Aq(this, "getScreenSize")
    };
    var Aq = function(a, b) {
        if ("loading" === a.A("getState")) return new mf(-1, -1);
        b = a.A(b);
        if (!b) return new mf(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new mf(-1, -1) : new mf(a, b)
    };
    qq.prototype.W = function() {
        xq(this);
        $m.prototype.W.call(this)
    };
    var uq = function() {
            try {
                var a = H(qq);
                a.A("removeEventListener", "ready", uq);
                vq(a)
            } catch (b) {
                nm(541, b)
            }
        },
        zq = function(a, b) {
            try {
                var c = H(qq);
                c.J = !0;
                var d = a ? new F(a.y, a.x + a.width, a.y + a.height, a.x) : new F(0, 0, 0, 0);
                var e = um(),
                    f = Xm();
                var g = new wm(e, f, c);
                g.g = d;
                g.volume = b;
                c.Pa(g)
            } catch (h) {
                nm(542, h)
            }
        },
        tq = function(a) {
            var b = N(),
                c = H(qq);
            a && !b.B && (b.B = !0, c.aa = !0, c.C && bn(c, "w", !0))
        };
    var Cq = function() {
        this.l = this.H = !1;
        this.g = null;
        this.o = new lq;
        this.h = null;
        var a = {};
        this.M = (a.start = this.Re, a.firstquartile = this.Me, a.midpoint = this.Oe, a.thirdquartile = this.Se, a.complete = this.Ke, a.pause = this.Qc, a.resume = this.Od, a.skip = this.Qe, a.viewable_impression = this.Oa, a.mute = this.ub, a.unmute = this.ub, a.fullscreen = this.Ne, a.exitfullscreen = this.Le, a.fully_viewable_audible_half_duration_impression = this.Oa, a.measurable_impression = this.Oa, a.abandon = this.Qc, a.engagedview = this.Oa, a.impression = this.Oa, a.creativeview =
            this.Oa, a.progress = this.ub, a.custom_metric_viewable = this.Oa, a.bufferstart = this.Qc, a.bufferfinish = this.Od, a);
        a = {};
        this.T = (a.overlay_resize = this.Pe, a.abandon = this.Ec, a.close = this.Ec, a.collapse = this.Ec, a.overlay_unmeasurable_impression = function(b) {
                return Mo(b, "overlay_unmeasurable_impression", Xm())
            }, a.overlay_viewable_immediate_impression = function(b) {
                return Mo(b, "overlay_viewable_immediate_impression", Xm())
            }, a.overlay_unviewable_impression = function(b) {
                return Mo(b, "overlay_unviewable_impression", Xm())
            },
            a.overlay_viewable_end_of_session_impression = function(b) {
                return Mo(b, "overlay_viewable_end_of_session_impression", Xm())
            }, a);
        N().h = 3;
        Bq(this)
    };
    Cq.prototype.A = function(a) {
        Wn(a, !1);
        dp(a)
    };
    Cq.prototype.I = function() {};
    var Dq = function(a, b, c, d) {
        a = a.C(null, d, !0, b);
        a.B = c;
        ep([a]);
        return a
    };
    Cq.prototype.C = function(a, b, c, d) {
        var e = this;
        this.h || (this.h = this.wd());
        b = c ? b : -1;
        a = null == this.h || this.l ? new zo(D, a, b, 7) : new zo(D, a, b, 7, new ro("measurable_impression", this.h), Eq(this));
        a.ia = d;
        zl(a.U);
        Al(a.U, "queryid", a.ia);
        a.Rc("");
        ao(a, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.K.apply(e, ha(g))
        }, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.R.apply(e, ha(g))
        });
        (d = H(gp).g) && Xn(a, d);
        a.pa.Sa && H(tp);
        return a
    };
    var Fq = function(a, b, c) {
            il(b);
            var d = a.h;
            z(b, function(e) {
                var f = qb(e.l, function(g) {
                    var h = dq(g);
                    if (null == h) g = null;
                    else if (g = new cq, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                        var k = "mtos" == h.timetype ? "mtos" : "tos",
                            n = ic(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        "%" == n && (h /= 100);
                        "ms" == n ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.B = void 0 === k ? "tos" : k
                    }
                    return g
                });
                sb(f, function(g) {
                    return null == g
                }) || Fo(c, new fq(e.id, e.g, f, d))
            })
        },
        Eq = function(a) {
            a = a.h;
            return [new hq("viewable_impression",
                a), new gq(a)]
        },
        Gq = function() {
            var a = [],
                b = N();
            a.push(H(sp));
            Bl(b.U, "mvp_lv") && a.push(H(qq));
            b = [new nq, new pq];
            b.push(new jp(a));
            b.push(new qp(D));
            return b
        },
        Iq = function(a) {
            if (!a.H) {
                a.H = !0;
                try {
                    var b = um(),
                        c = N(),
                        d = O();
                    qm = b;
                    c.o = 79463069;
                    "o" !== a.g && (Dp = Pg(D).ka);
                    if (Rl()) {
                        vp.g.od = 0;
                        vp.g.Gc = um() - b;
                        var e = Gq(),
                            f = H(gp);
                        f.h = e;
                        hp(f, function() {
                            Hq()
                        }) ? vp.done || (Bp(), cn(f.g.g, a), xp()) : d.l ? Hq() : xp()
                    } else Fp = !0
                } catch (g) {
                    throw ap.reset(), g;
                }
            }
        },
        Jq = function(a) {
            vp.h.cancel();
            Ep = a;
            vp.done = !0
        },
        Kq = function(a) {
            if (a.g) return a.g;
            var b = H(gp).g;
            if (b) switch (b.getName()) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            }
            a.g || (a.g = "h");
            return a.g
        },
        Lq = function(a, b, c) {
            if (null == a.h) return b.vb |= 4, !1;
            a = a.h.report(c, b);
            b.vb |= a;
            return 0 == a
        };
    Cq.prototype.rb = function(a) {
        switch (a.Ha()) {
            case 0:
                if (a = H(gp).g) a = a.g, xb(a.B, this), a.L && this.Da() && fn(a);
                Hq();
                break;
            case 2:
                xp()
        }
    };
    Cq.prototype.Pa = function() {};
    Cq.prototype.Da = function() {
        return !1
    };
    var Hq = function() {
        var a = [new qp(D)],
            b = H(gp);
        b.h = a;
        hp(b, function() {
            Jq("i")
        }) ? vp.done || (Bp(), xp()) : Jq("i")
    };
    Cq.prototype.R = function(a, b) {
        a.$a = !0;
        switch (a.wa()) {
            case 1:
                Mq(this, a, b);
                break;
            case 2:
                this.Tc(a)
        }
        this.Uc(a)
    };
    var Mq = function(a, b, c) {
        if (!b.ua) {
            var d = Mo(b, "start", Xm());
            a = a.o.g(d).g;
            var e = {
                id: "lidarv"
            };
            e.r = c;
            e.v = Xp + "v";
            If(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = Gp();
            If(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + rn(pn(new nn, e));
            vn(c);
            b.ua = !0
        }
    };
    l = Cq.prototype;
    l.Re = function(a) {
        Jo(a, 0);
        return Mo(a, "start", Xm())
    };
    l.ub = function(a, b, c) {
        yp(vp, [a], !Xm());
        return this.Oa(a, b, c)
    };
    l.Oa = function(a, b, c) {
        return Mo(a, c, Xm())
    };
    l.Me = function(a) {
        return Nq(a, "firstquartile", 1)
    };
    l.Oe = function(a) {
        a.$ = !0;
        return Nq(a, "midpoint", 2)
    };
    l.Se = function(a) {
        return Nq(a, "thirdquartile", 3)
    };
    l.Ke = function(a) {
        var b = Nq(a, "complete", 4);
        0 != a.ea && (a.ea = 3);
        return b
    };
    var Nq = function(a, b, c) {
        yp(vp, [a], !Xm());
        Jo(a, c);
        4 != c && Io(a.K, c, a.Wb);
        return Mo(a, b, Xm())
    };
    l = Cq.prototype;
    l.Od = function(a, b, c) {
        b = Xm();
        2 != a.ea || b || (a.ra().I = um());
        yp(vp, [a], !b);
        2 == a.ea && (a.ea = 1);
        return Mo(a, c, b)
    };
    l.Qe = function(a, b) {
        b = this.ub(a, b || {}, "skip");
        0 != a.ea && (a.ea = 3);
        return b
    };
    l.Ne = function(a, b) {
        Wn(a, !0);
        return this.ub(a, b || {}, "fullscreen")
    };
    l.Le = function(a, b) {
        Wn(a, !1);
        return this.ub(a, b || {}, "exitfullscreen")
    };
    l.Qc = function(a, b, c) {
        b = a.ra();
        b.T = po(b, um(), 1 != a.ea);
        yp(vp, [a], !Xm());
        1 == a.ea && (a.ea = 2);
        return Mo(a, c, Xm())
    };
    l.Pe = function(a) {
        yp(vp, [a], !Xm());
        return a.h()
    };
    l.Ec = function(a) {
        yp(vp, [a], !Xm());
        this.Md(a);
        0 != a.ea && (a.ea = 3);
        return a.h()
    };
    var Bq = function(a) {
            Cp(function() {
                var b = Oq();
                null != a.g && (b.sdk = a.g);
                var c = H(gp);
                null != c.g && (b.avms = c.g.getName());
                return b
            })
        },
        Pq = function(a, b, c, d) {
            var e = Zo(ap, c);
            null !== e && e.ia !== b && (a.A(e), e = null);
            e || (b = a.C(c, um(), !1, b), 0 == ap.h.length && (N().o = 79463069), fp([b]), e = b, e.B = Kq(a), d && (e.Ta = d));
            return e
        };
    Cq.prototype.K = function() {};
    var Rq = function(a, b) {
        b.C = 0;
        for (var c in ym) null == a[c] && (b.C |= ym[c]);
        Qq(a, "currentTime");
        Qq(a, "duration")
    };
    l = Cq.prototype;
    l.Tc = function() {};
    l.Md = function() {};
    l.jd = function() {};
    l.Uc = function() {};
    l.wd = function() {};
    var Qq = function(a, b) {
            var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        Oq = function() {
            var a = O(),
                b = {};
            return b.sv = Xp, b["if"] = a.l ? "1" : "0", b.nas = String(ap.g.length), b
        };
    var Sq = Ya(),
        Tq = !1,
        Uq = !1,
        Vq = !1,
        Wq = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        Xq = function(a) {
            return !!(1 << a & Sq)
        },
        Yq = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return Xq(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return Xq(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return Xq(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return Xq(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return Xq(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return Uq
            },
            function() {
                return Vq
            },
            function() {
                return Xq(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return Xq(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || Wq(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return Wq(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return Xq(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return Wq(a.CSS.supports)
            },
            function() {
                return Wq(Intl.Collator)
            },
            function(a) {
                return Wq(a.document.createElement("dialog").show)
            },
            function() {
                return Xq(8)
            },
            function(a) {
                return Wq(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                }], {
                    duration: 1300,
                    iterations: 1
                }).reverse)
            },
            function(a) {
                return Wq(a.document.createElement("div").animate)
            },
            function(a) {
                return Wq(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return Wq(a.navigator.getBattery)
            },
            function(a) {
                return Wq(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return Xq(9)
            },
            function() {
                return Wq(webkitRequestAnimationFrame)
            },
            function(a) {
                return Wq(a.BroadcastChannel.call)
            },
            function(a) {
                return Wq(a.FontFace)
            },
            function(a) {
                return Wq(a.Gamepad)
            },
            function() {
                return Xq(10)
            },
            function(a) {
                return Wq(a.MutationEvent)
            },
            function(a) {
                return Wq(a.MutationObserver)
            },
            function(a) {
                return Wq(a.crypto.getRandomValues)
            },
            function(a) {
                return Wq(a.document.body.createShadowRoot)
            },
            function(a) {
                return Wq(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return Wq(a.fetch)
            },
            function() {
                return Xq(11)
            },
            function(a) {
                return Wq(a.navigator.serviceWorker.register)
            },
            function(a) {
                return Wq(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return Wq(a.speechSynthesis.speak)
            },
            function(a) {
                return Wq(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return Xq(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return Xq(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return Xq(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.Gh
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        Zq = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        $q = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        br = function() {
            try {
                ar()
            } catch (d) {}
            var a = "a=1&b=" + Sq + "&",
                b = [],
                c = 99;
            z(Yq, function(d, e) {
                var f = !1;
                try {
                    f = d(D)
                } catch (g) {}
                b[e / 32 >>> 0] |= f << e % 32
            });
            z(b, function(d, e) {
                a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
            });
            c = 105;
            z(Zq, function(d) {
                var e = "false";
                try {
                    e = d(D)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            z($q, function(d) {
                var e = "";
                try {
                    e = $d(d(D))
                } catch (f) {}
                a +=
                    String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        ar = function() {
            if (!Tq) {
                var a = function() {
                    Uq = !0;
                    D.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                D.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    Vq = !0;
                    D.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                D.document.addEventListener("webdriver-evaluate-response", b, !0);
                Tq = !0
            }
        };
    var cr = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = Array(4);
        this.o = Array(this.blockSize);
        this.l = this.h = 0;
        this.reset()
    };
    Za(cr, fl);
    cr.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.l = this.h = 0
    };
    var dr = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if ("string" === typeof b)
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.g[0];
            c = a.g[1];
            e = a.g[2];
            var f = a.g[3];
            var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>>
                15);
            g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 |
                g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g <<
                5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c =
                e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 |
                g >>> 21);
            g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] +
                3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
                4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
                4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.g[0] = a.g[0] + b & 4294967295;
            a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.g[2] = a.g[2] + e & 4294967295;
            a.g[3] = a.g[3] + f & 4294967295
        },
        er = function(a, b) {
            if (void 0 === c) var c = b.length;
            for (var d = c - a.blockSize,
                    e = a.o, f = a.h, g = 0; g < c;) {
                if (0 == f)
                    for (; g <= d;) dr(a, b, g), g += a.blockSize;
                if ("string" === typeof b)
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.blockSize) {
                            dr(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.blockSize) {
                                dr(a, e);
                                f = 0;
                                break
                            }
            }
            a.h = f;
            a.l += c
        };
    var fr = function() {
        this.h = null
    };
    t(fr, lq);
    fr.prototype.g = function(a) {
        var b = lq.prototype.g.call(this, a);
        var c = Sq = Ya();
        var d = Xq(5);
        c = (Uq ? !d : d) ? c | 2 : c & -3;
        d = Xq(2);
        c = (Vq ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = br());
        b.B = this.h;
        b.A = kq(a, Qp, c, "h", gr("kArwaWEsTs"));
        b.o = kq(a, Sp, {}, "h", gr("b96YPMzfnx"));
        b.h = kq(a, Tp, {}, "h", gr("yb8Wev6QDg"));
        return b
    };
    var gr = function(a) {
        return function(b) {
            var c = new cr;
            er(c, b + a);
            var d = Array((56 > c.h ? c.blockSize : 2 * c.blockSize) - c.h);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            var e = 8 * c.l;
            for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            er(c, d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)
                for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
            return gb(d).slice(-8)
        }
    };
    var hr = function(a, b) {
        this.l = a;
        this.o = b
    };
    hr.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            d = (d.sv = Xp, d.cb = Wp, d.e = ir(a), d);
            var e = Mo(b, a, Xm());
            Xb(d, e);
            b.Td[a] = e;
            d = 2 == b.wa() ? tn(d).join("&") : this.o.g(d).g;
            try {
                return c(b.ia, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var ir = function(a) {
        var b = $p(a) ? "custom_metric_viewable" : a;
        a = Rb(function(c) {
            return c == b
        });
        return Cm[a]
    };
    hr.prototype.g = function() {
        return Ka(this.l)
    };
    var jr = function(a, b, c) {
        hr.call(this, a, b);
        this.h = c
    };
    t(jr, hr);
    jr.prototype.g = function(a) {
        if (!a.Ta) return hr.prototype.g.call(this, a);
        if (this.h[a.Ta]) return function() {};
        nm(393, Error());
        return null
    };
    var kr = function() {
        Cq.call(this);
        this.D = void 0;
        this.G = null;
        this.L = !1;
        this.B = {};
        this.J = 0;
        this.o = new fr
    };
    t(kr, Cq);
    kr.prototype.I = function(a, b) {
        var c = this,
            d = H(gp);
        if (null != d.g) switch (d.g.getName()) {
            case "nis":
                var e = lr(this, a, b);
                break;
            case "gsv":
                e = mr(this, a, b);
                break;
            case "exc":
                e = nr(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Pq(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.wa() && (e.D == La && (e.D = function(f) {
            return c.jd(f)
        }), or(this, e, b));
        return e
    };
    var or = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.h && Array.isArray(c) && Fq(a, c, b)
    };
    kr.prototype.jd = function(a) {
        a.h = 0;
        a.M = 0;
        if ("h" == a.B || "n" == a.B) {
            if (N().l) var b = Ka("ima.bridge.getVideoMetadata");
            else if (a.Ta && pr(this)) {
                var c = this.B[a.Ta];
                c ? b = function(e) {
                    return qr(c, e)
                } : null !== c && nm(379, Error())
            } else b = Ka("ima.common.getVideoMetadata");
            if ("function" === typeof b) try {
                var d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2
        } else if ("b" == a.B)
            if (b = Ka("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else if ("ml" == a.B)
            if (b = Ka("ima.common.getVideoMetadata"),
                "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Tb(d) ? a.h |= 32 : null != d.errorCode && (a.M = d.errorCode, a.h |= 64));
        null == d && (d = {});
        Rq(d, a);
        Pm(d.volume) && Pm(this.D) && (d.volume *= this.D);
        return d
    };
    var mr = function(a, b, c) {
            var d = Yo(ap, b);
            d || (d = c.opt_nativeTime || -1, d = Dq(a, b, Kq(a), d), c.opt_osdId && (d.Ta = c.opt_osdId));
            return d
        },
        lr = function(a, b, c) {
            var d = Yo(ap, b);
            d || (d = Dq(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        nr = function(a, b) {
            var c = Yo(ap, b);
            c || (c = Dq(a, b, "h", -1));
            return c
        };
    kr.prototype.wd = function() {
        if (pr(this)) return new jr("ima.common.triggerExternalActivityEvent", this.o, this.B);
        var a = rr(this);
        return null != a ? new hr(a, this.o) : null
    };
    var rr = function(a) {
        var b = N();
        switch (Kq(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if (b.l) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    kr.prototype.Tc = function(a) {
        !a.g && a.$a && Lq(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    kr.prototype.Md = function(a) {
        a.Pd && (a.ab() ? Lq(this, a, "overlay_viewable_end_of_session_impression") : Lq(this, a, "overlay_unviewable_impression"), a.Pd = !1)
    };
    var sr = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        Xb(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        if (e.opt_bounds) return a.o.g(Zp("ol", d));
        if (void 0 !== d)
            if (void 0 !== Yp(d))
                if (Fp) b = Zp("ue", d);
                else if (Iq(a), "i" == Ep) b = Zp("i", d), b["if"] = 0;
        else if (b = a.I(b, e)) {
            b: {
                "i" == Ep && (b.$a = !0, a.Uc(b));c = e.opt_fullscreen;void 0 !== c && Wn(b, !!c);
                var f;
                if (c = !O().h && !Sm()) Ql(),
                c = 0 === lh(Re);
                if (f = c) {
                    switch (b.wa()) {
                        case 1:
                            Mq(a, b, "pv");
                            break;
                        case 2:
                            a.Tc(b)
                    }
                    Jq("pv")
                }
                c = d.toLowerCase();
                if (f = !f) c: {
                    if (Bl(N().U, "ssmol") && (f =
                            a.l, "loaded" === c)) break c;f = wb(zm, c)
                }
                if (f && 0 == b.ea) {
                    "i" != Ep && (vp.done = !1);
                    f = void 0 !== e ? e.opt_nativeTime : void 0;
                    sm = f = "number" === typeof f ? f : um();
                    b.Ub = !0;
                    var g = Xm();
                    b.ea = 1;
                    b.ga = {};
                    b.ga.start = !1;
                    b.ga.firstquartile = !1;
                    b.ga.midpoint = !1;
                    b.ga.thirdquartile = !1;
                    b.ga.complete = !1;
                    b.ga.resume = !1;
                    b.ga.pause = !1;
                    b.ga.skip = !1;
                    b.ga.mute = !1;
                    b.ga.unmute = !1;
                    b.ga.viewable_impression = !1;
                    b.ga.measurable_impression = !1;
                    b.ga.fully_viewable_audible_half_duration_impression = !1;
                    b.ga.fullscreen = !1;
                    b.ga.exitfullscreen = !1;
                    b.Ac = 0;
                    g || (b.ra().I = f);
                    yp(vp, [b], !g)
                }(f = b.gb[c]) && jo(b.fa, f);wb(Am, c) && !b.$a && b.bb && 0 != b.ea && (f = b.bb, f.g || (f.g = so(f, b)));
                switch (b.wa()) {
                    case 1:
                        var h = $p(c) ? a.M.custom_metric_viewable : a.M[c];
                        break;
                    case 2:
                        h = a.T[c]
                }
                if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
                    e = Zp(void 0, c);
                    Xb(e, d);
                    d = e;
                    break b
                }
                d = void 0
            }
            3 == b.ea && a.A(b);b = d
        }
        else b = Zp("nf", d);
        else b = void 0;
        else Fp ? b = Zp("ue") : (b = a.I(b, e)) ? (d = Zp(), Xb(d, Lo(b, !0, !1, !1)), b = d) : b = Zp("nf");
        return "string" === typeof b ? a.o.g(void 0) : a.o.g(b)
    };
    kr.prototype.K = function(a) {
        this.l && 1 == a.wa() && tr(this, a)
    };
    kr.prototype.Uc = function(a) {
        this.l && 1 == a.wa() && tr(this, a)
    };
    var tr = function(a, b) {
            var c;
            if (b.Ta && pr(a)) {
                var d = a.B[b.Ta];
                d ? c = function(f, g) {
                    ur(d, f, g)
                } : null !== d && nm(379, Error())
            } else c = Ka("ima.common.triggerViewabilityMeasurementUpdate");
            if ("function" === typeof c) {
                var e = Go(b);
                e.nativeVolume = a.D;
                c(b.ia, e)
            }
        },
        vr = function(a, b, c) {
            a.B[b] = c
        },
        pr = function(a) {
            return N().l || "h" != Kq(a) && "m" != Kq(a) ? !1 : 0 != a.J
        };
    kr.prototype.C = function(a, b, c, d) {
        a = Cq.prototype.C.call(this, a, b, c, d);
        this.L && (b = this.G, null == a.o && (a.o = new eo), b.g[a.ia] = a.o, a.o.B = Oo);
        return a
    };
    kr.prototype.A = function(a) {
        a && 1 == a.wa() && this.L && delete this.G.g[a.ia];
        return Cq.prototype.A.call(this, a)
    };
    var wr = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.B, b.moatViewability = a.A, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b
        },
        xr = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = sr(H(kr), b, c, a);
            return wr(a)
        },
        yr = new iq;
    yr.B = "stopped";
    yr.g = "stopped";
    yr.l = "stopped";
    yr.A = "stopped";
    yr.o = "stopped";
    yr.h = "stopped";
    Object.freeze(yr);
    var zr = mm(193, xr, void 0, Oq);
    y("Goog_AdSense_Lidar_sendVastEvent", zr, void 0);
    var Ar = mm(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = sr(H(kr), a, b);
        return wr(a)
    });
    y("Goog_AdSense_Lidar_getViewability", Ar, void 0);
    var Br = mm(195, function() {
        return Tl()
    });
    y("Goog_AdSense_Lidar_getUrlSignalsArray", Br, void 0);
    var Cr = mm(196, function() {
        return JSON.stringify(Tl())
    });
    y("Goog_AdSense_Lidar_getUrlSignalsList", Cr, void 0);
    var Er = function(a) {
        B.call(this, a, -1, Dr)
    };
    t(Er, B);
    var Dr = [3];
    var Gr = function(a) {
        B.call(this, a, -1, Fr)
    };
    t(Gr, B);
    var Hr = function(a, b) {
            return Ge(a, 1, b)
        },
        Ir = function(a, b) {
            return Ge(a, 2, b)
        },
        Jr = function(a, b) {
            return Ge(a, 3, b)
        },
        Kr = function(a, b) {
            Ge(a, 4, b)
        },
        Fr = [1, 2, 3, 4];
    var Lr = function(a) {
        B.call(this, a)
    };
    t(Lr, B);
    var Nr = function(a) {
        B.call(this, a, -1, Mr)
    };
    t(Nr, B);
    Nr.prototype.getVersion = function() {
        return Ee(this, 1, 0)
    };
    var Or = function(a, b) {
            return He(a, 1, b, 0)
        },
        Pr = function(a, b) {
            return Me(a, 2, b)
        },
        Qr = function(a, b) {
            return Me(a, 3, b)
        },
        Rr = function(a, b) {
            return He(a, 4, b, 0)
        },
        Sr = function(a, b) {
            return He(a, 5, b, 0)
        },
        Tr = function(a, b) {
            return He(a, 6, b, 0)
        },
        Ur = function(a, b) {
            return He(a, 7, b, "")
        },
        Vr = function(a, b) {
            return He(a, 8, b, 0)
        },
        Wr = function(a, b) {
            return He(a, 9, b, 0)
        },
        Xr = function(a, b) {
            return He(a, 10, b, !1)
        },
        Yr = function(a, b) {
            return He(a, 11, b, !1)
        },
        Zr = function(a, b) {
            return Ge(a, 12, b)
        },
        $r = function(a, b) {
            return Ge(a, 13, b)
        },
        as = function(a, b) {
            return Ge(a,
                14, b)
        },
        bs = function(a, b) {
            return He(a, 15, b, !1)
        },
        cs = function(a, b) {
            return He(a, 16, b, "")
        },
        ds = function(a, b) {
            return Ge(a, 17, b)
        },
        es = function(a, b) {
            return Ge(a, 18, b)
        },
        fs = function(a, b) {
            var c = void 0 === c ? !1 : c;
            a.g || (a.g = {});
            b = b || [];
            for (var d = se([]), e = 0; e < b.length; e++) d[e] = Le(b[e], !1);
            a.g[19] = b;
            return Ae(a, 19, d, c)
        },
        Mr = [12, 13, 14, 17, 18, 19];
    var gs = function(a) {
        B.call(this, a)
    };
    t(gs, B);
    var hs = "a".charCodeAt(),
        is = Mb({
            tg: 0,
            sg: 1,
            pg: 2,
            kg: 3,
            qg: 4,
            lg: 5,
            rg: 6,
            ng: 7,
            og: 8,
            jg: 9,
            mg: 10
        }),
        js = Mb({
            vg: 0,
            wg: 1,
            ug: 2
        });
    var ks = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.h = a;
            this.g = 0
        },
        ms = function(a) {
            a = ls(a, 36);
            var b = new Lr;
            b = He(b, 1, Math.floor(a / 10), 0);
            return He(b, 2, a % 10 * 1E8, 0)
        },
        ns = function(a) {
            return String.fromCharCode(hs + ls(a, 6)) + String.fromCharCode(hs + ls(a, 6))
        },
        qs = function(a) {
            var b = ls(a, 16);
            return !0 === !!ls(a, 1) ? (a = os(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : ps(a, b)
        },
        rs = function(a) {
            for (var b = [], c = ls(a, 12); c--;) {
                var d = ls(a,
                        6),
                    e = ls(a, 2),
                    f = os(a),
                    g = b,
                    h = g.push,
                    k = new Er;
                d = He(k, 1, d, 0);
                e = He(d, 2, e, 0);
                f = Ge(e, 3, f);
                h.call(g, f)
            }
            return b
        },
        os = function(a) {
            for (var b = ls(a, 12), c = []; b--;) {
                var d = !0 === !!ls(a, 1),
                    e = ls(a, 16);
                if (d)
                    for (d = ls(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        ps = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (ls(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                } return d
        },
        ls = function(a, b) {
            if (a.g + b > a.h.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    ks.prototype.skip = function(a) {
        this.g += a
    };
    var ts = function(a) {
        try {
            var b = be(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join(""),
                c = new ks(b);
            if (3 !== ls(c, 3)) return null;
            var d = Ir(Hr(new Gr, ps(c, 24, is)), ps(c, 24, is)),
                e = ls(c, 6);
            0 !== e && Kr(Jr(d, ps(c, e)), ps(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var us = function(a) {
        try {
            var b = be(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join(""),
                c = new ks(b);
            return fs(es(ds(cs(bs(as($r(Zr(Yr(Xr(Wr(Vr(Ur(Tr(Sr(Rr(Qr(Pr(Or(new Nr, ls(c, 6)), ms(c)), ms(c)), ls(c, 12)), ls(c, 12)), ls(c, 6)), ns(c)), ls(c, 12)), ls(c, 6)), !!ls(c, 1)), !!ls(c, 1)), ps(c, 12, js)), ps(c, 24, is)), ps(c, 24, is)), !!ls(c, 1)), ns(c)), qs(c)), qs(c)), rs(c))
        } catch (d) {
            return null
        }
    };
    var ws = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (4 < b.length) return null;
            a = us(b[0]);
            if (!a) return null;
            var c = new gs;
            a = Me(c, 1, a);
            b.shift();
            b = q(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, vs(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = ts(c);
                    if (!c) return null;
                    Me(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        vs = function(a) {
            try {
                var b = be(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return ls(new ks(b), 3)
            } catch (c) {
                return -1
            }
        };
    var xs = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = q(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = q(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };
    var zs = function(a) {
        B.call(this, a, -1, ys)
    };
    t(zs, B);
    var ys = [6];
    var As = function(a) {
        B.call(this, a)
    };
    t(As, B);
    var Bs = function(a) {
        B.call(this, a)
    };
    t(Bs, B);
    var Cs = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    l = Cs.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Bh;
            d = c.rf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Hd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Hd: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.Vb = function() {
        return Ds(this).keys
    };
    l.qb = function() {
        return Ds(this).values
    };
    l.isEmpty = function() {
        return !this.g.cookie
    };
    l.clear = function() {
        for (var a = Ds(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    var Ds = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = kc(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };

    function Es(a) {
        return (a = (new Cs(a)).get("DATA_USE_CONSENT", "")) ? a : null
    }

    function Fs(a) {
        var b = (b = (new Cs(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? xe(As, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        if (!c) return Es(a);
        c = Je(c, Bs, 3);
        if (!c || null == C(c, 1)) return Es(a);
        a = C(c, 2);
        b = Date.now();
        if (a) {
            if (b < a || b > a + 33696E6) return null
        } else return null;
        return C(c, 1)
    };
    var Hs = function(a) {
        B.call(this, a, -1, Gs)
    };
    t(Hs, B);
    var Gs = [1, 2, 3, 4];
    var Is = /^((market|itms|intent|itms-appss):\/\/)/i;
    var P = function(a, b) {
        this.h = this.A = this.o = "";
        this.I = null;
        this.L = this.g = "";
        this.B = !1;
        var c;
        a instanceof P ? (this.B = void 0 !== b ? b : a.B, Js(this, a.o), this.A = a.A, this.h = a.h, Ks(this, a.I), this.g = a.g, Ls(this, Ms(a.l)), this.L = a.D()) : a && (c = String(a).match(Gf)) ? (this.B = !!b, Js(this, c[1] || "", !0), this.A = Ns(c[2] || ""), this.h = Ns(c[3] || "", !0), Ks(this, c[4]), this.g = Ns(c[5] || "", !0), Ls(this, c[6] || "", !0), this.L = Ns(c[7] || "")) : (this.B = !!b, this.l = new Os(null, this.B))
    };
    P.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(Ps(b, Qs, !0), ":");
        var c = this.h;
        if (c || "file" == b) a.push("//"), (b = this.A) && a.push(Ps(b, Qs, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c && a.push(":", String(c));
        if (c = this.g) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Ps(c, "/" == c.charAt(0) ? Rs : Ss, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", Ps(c, Ts));
        return a.join("")
    };
    P.prototype.resolve = function(a) {
        var b = this.G(),
            c = !!a.o;
        c ? Js(b, a.o) : c = !!a.A;
        c ? b.A = a.A : c = !!a.h;
        c ? b.h = a.h : c = null != a.I;
        var d = a.g;
        if (c) Ks(b, a.I);
        else if (c = !!a.g) {
            if ("/" != d.charAt(0))
                if (this.h && !this.g) d = "/" + d;
                else {
                    var e = b.g.lastIndexOf("/"); - 1 != e && (d = b.g.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" !=
                        f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.g = d : c = "" !== a.l.toString();
        c ? Ls(b, Ms(a.l)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    };
    P.prototype.G = function() {
        return new P(this)
    };
    var Js = function(a, b, c) {
            a.o = c ? Ns(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        Ks = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.I = b
            } else a.I = null
        },
        Ls = function(a, b, c) {
            b instanceof Os ? (a.l = b, Us(a.l, a.B)) : (c || (b = Ps(b, Vs)), a.l = new Os(b, a.B))
        },
        Ws = function(a, b, c) {
            a.l.set(b, c);
            return a
        };
    P.prototype.D = function() {
        return this.L
    };
    var Xs = function(a) {
            return a instanceof P ? a.G() : new P(a, void 0)
        },
        Ns = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Ps = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Ys), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Ys = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Qs = /[#\/\?@]/g,
        Ss = /[#\?:]/g,
        Rs = /[#\?]/g,
        Vs = /[#\?@]/g,
        Ts = /#/g,
        Os = function(a, b) {
            this.h = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        Zs = function(a) {
            a.g ||
                (a.g = new Map, a.h = 0, a.l && If(a.l, function(b, c) {
                    a.add(Wc(b), c)
                }))
        };
    Os.prototype.add = function(a, b) {
        Zs(this);
        this.l = null;
        a = $s(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };
    Os.prototype.remove = function(a) {
        Zs(this);
        a = $s(this, a);
        return this.g.has(a) ? (this.l = null, this.h -= this.g.get(a).length, this.g.delete(a)) : !1
    };
    Os.prototype.clear = function() {
        this.g = this.l = null;
        this.h = 0
    };
    Os.prototype.isEmpty = function() {
        Zs(this);
        return 0 == this.h
    };
    var at = function(a, b) {
        Zs(a);
        b = $s(a, b);
        return a.g.has(b)
    };
    l = Os.prototype;
    l.forEach = function(a, b) {
        Zs(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    l.Vb = function() {
        Zs(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.qb = function(a) {
        Zs(this);
        var b = [];
        if ("string" === typeof a) at(this, a) && (b = b.concat(this.g.get($s(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    l.set = function(a, b) {
        Zs(this);
        this.l = null;
        a = $s(this, a);
        at(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    l.get = function(a, b) {
        if (!a) return b;
        a = this.qb(a);
        return 0 < a.length ? String(a[0]) : b
    };
    l.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.qb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    var Ms = function(a) {
            var b = new Os;
            b.l = a.l;
            a.g && (b.g = new Map(a.g), b.h = a.h);
            return b
        },
        $s = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        Us = function(a, b) {
            b && !a.o && (Zs(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.l = null, this.g.set($s(this, e), Bb(c)), this.h += c.length))
            }, a));
            a.o = b
        };
    var bt = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        ct = /\bocr\b/,
        dt = 0,
        et = {},
        ft = function(a) {
            if (jc(Zc(a))) return !1;
            if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
            try {
                var b = new P(a)
            } catch (c) {
                return null !=
                    tb(bt, function(d) {
                        return 0 < a.search(d)
                    })
            }
            return b.D().match(ct) ? !0 : null != tb(bt, function(c) {
                return null != a.match(c)
            })
        },
        jt = function(a) {
            if (a && (a = gt(a), !jc(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                ht(function(c) {
                    it(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                })
            }
        },
        it = function(a) {
            var b = yf("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = of (b).body;
            var c = ik(function() {
                zj(d);
                zf(b)
            }, 15E3);
            var d = qj(b, ["load",
                "error"
            ], function() {
                ik(function() {
                    u.clearTimeout(c);
                    zf(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        ht = function(a) {
            var b = et.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                kt(function(d, e) {
                    delete et[e];
                    c || (c = !0, null == et.imageLoadingEnabled && (et.imageLoadingEnabled = d), a(d))
                })
            }
        },
        kt = function(a) {
            var b = new Image,
                c = "" + dt++;
            et[c] = b;
            b.onload = function() {
                clearTimeout(d);
                a(!0, c)
            };
            var d = setTimeout(function() {
                a(!1, c)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        lt = function(a) {
            if (a) {
                var b =
                    wf(document, "OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + dt++;
                et[c] = b;
                b.onload = b.onerror = function() {
                    delete et[c]
                };
                document.body.appendChild(b)
            }
        },
        mt = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + dt++;
                et[c] = b;
                b.onload = b.onerror = function() {
                    delete et[c]
                };
                b.src = a
            }
        },
        nt = function(a) {
            a && ht(function(b) {
                b ? mt(a) : lt(a)
            })
        },
        gt = function(a) {
            if (!(a instanceof wc))
                if (a = "object" == typeof a && a.Qa ? a.Ga() : String(a), Ac.test(a)) a = new wc(a, vc);
                else {
                    a = String(a);
                    a = a.replace(/(%0A|%0D)/g, "");
                    var b =
                        a.match(zc);
                    a = b && yc.test(b[1]) ? new wc(a, vc) : null
                } b = xc(a || Bc);
            if ("about:invalid#zClosurez" === b) return "";
            if (b instanceof Nc) a = b;
            else {
                var c = "object" == typeof b;
                a = null;
                c && b.Fc && (a = b.Bc());
                b = c && b.Qa ? b.Ga() : String(b);
                rc.test(b) && (-1 != b.indexOf("&") && (b = b.replace(lc, "&amp;")), -1 != b.indexOf("<") && (b = b.replace(mc, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(nc, "&gt;")), -1 != b.indexOf('"') && (b = b.replace(oc, "&quot;")), -1 != b.indexOf("'") && (b = b.replace(pc, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(qc, "&#0;")));
                a = Pc(b, a)
            }
            a = Oc(a).toString();
            return encodeURIComponent(String(Kh(new Ih(void 0), a)))
        };
    var ot = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var pt = function(a) {
        var b = a.La,
            c = a.height,
            d = a.width,
            e = void 0 === a.Aa ? !1 : a.Aa;
        this.Va = a.Va;
        this.La = b;
        this.height = c;
        this.width = d;
        this.Aa = e
    };
    pt.prototype.getHeight = function() {
        return this.height
    };
    pt.prototype.getWidth = function() {
        return this.width
    };
    var qt = function(a) {
        var b = a.yf,
            c = a.ve,
            d = a.xf,
            e = a.ue;
        pt.call(this, {
            Va: a.Va,
            La: a.La,
            height: a.height,
            width: a.width,
            Aa: void 0 === a.Aa ? !1 : a.Aa
        });
        this.o = b;
        this.h = c;
        this.l = d;
        this.g = e
    };
    t(qt, pt);
    var rt = function(a) {
        var b = a.bf;
        pt.call(this, {
            Va: a.Va,
            La: a.La,
            height: a.height,
            width: a.width,
            Aa: void 0 === a.Aa ? !1 : a.Aa
        });
        this.g = b
    };
    t(rt, pt);
    rt.prototype.getMediaUrl = function() {
        return this.g
    };
    /*
       
       Math.uuid.js (v1.4)
       http://www.broofa.com
       mailto:robert@broofa.com
       Copyright (c) 2010 Robert Kieffer
       Dual licensed under the MIT and GPL licenses.
       */
    var tt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        ut = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = tt[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };

    function vt(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new(Function.prototype.bind.apply(a, [null].concat(ha(c))))
    };
    var Q = {},
        wt = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q),
        R = {},
        xt = (R[18] = !1, R[22] = !1, R[43] = !0, R[44] = !0, R[45] = !0, R[59] = !1, R[133] = !0, R[134] = !0, R[135] = !0, R[136] = !0, R[139] = !0, R[140] = !0, R[141] = !0, R[160] = !0, R[242] = !0, R[243] = !0, R[244] = !0, R[245] = !0, R[249] = !0, R[250] = !0, R[251] = !0, R[278] = !0, R[342] = !1, R[343] = !1, R[344] = !1, R[345] = !1, R[346] = !1, R[347] = !1, R),
        S = {},
        yt = (S[18] = "video/mp4", S[22] = "video/mp4", S[43] = "video/webm", S[44] = "video/webm", S[45] = "video/webm", S[59] = "video/mp4", S[133] = "video/mp4", S[134] = "video/mp4", S[135] = "video/mp4", S[136] = "video/mp4", S[139] = "audio/mp4", S[140] = "audio/mp4", S[141] = "audio/mp4", S[160] = "video/mp4", S[242] = "video/webm", S[243] = "video/webm", S[244] = "video/webm", S[245] = "video/webm", S[249] = "audio/webm", S[250] = "audio/webm", S[251] = "audio/webm", S[278] =
            "video/webm", S[342] = "video/mp4", S[343] = "video/mp4", S[344] = "video/mp4", S[345] = "video/mp4", S[346] = "video/mp4", S[347] = "video/mp4", S),
        T = {},
        zt = (T[18] = "avc1.42001E, mp4a.40.2", T[22] = "avc1.64001F, mp4a.40.2", T[43] = "vp8, vorbis", T[44] = "vp8, vorbis", T[45] = "vp8, vorbis", T[59] = "avc1.4D001F, mp4a.40.2", T[133] = "avc1.4D401E", T[134] = "avc1.4D401E", T[135] = "avc1.4D401E", T[136] = "avc1.4D401E", T[139] = "mp4a.40.2", T[140] = "mp4a.40.2", T[141] = "mp4a.40.2", T[160] = "avc1.4D401E", T[242] = "vp9", T[243] = "vp9", T[244] = "vp9", T[245] = "vp9",
            T[249] = "opus", T[250] = "opus", T[251] = "opus", T[278] = "vp9", T[342] = "avc1.42E01E, mp4a.40.2", T[343] = "avc1.42E01E, mp4a.40.2", T[344] = "avc1.42E01E, mp4a.40.2", T[345] = "avc1.42E01E, mp4a.40.2", T[346] = "avc1.42E01E, mp4a.40.2", T[347] = "avc1.4D001F, mp4a.40.2", T);
    var At = function() {};
    At.prototype.g = null;
    var Ct = function(a) {
        var b;
        (b = a.g) || (b = {}, Bt(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    var Dt, Et = function() {};
    Za(Et, At);
    var Ft = function(a) {
            return (a = Bt(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Bt = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        };
    Dt = new Et;
    var Gt = function(a) {
        M.call(this);
        this.headers = new Map;
        this.H = a || null;
        this.h = !1;
        this.G = this.g = null;
        this.M = "";
        this.o = 0;
        this.l = this.K = this.A = this.J = !1;
        this.D = 0;
        this.C = null;
        this.$ = "";
        this.T = this.V = !1;
        this.R = null
    };
    Za(Gt, M);
    var Ht = /^https?$/i,
        It = ["POST", "PUT"];
    Gt.prototype.X = function(a) {
        this.R = a
    };
    var Mt = function(a, b, c, d) {
            if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.M + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.M = b;
            a.o = 0;
            a.J = !1;
            a.h = !0;
            a.g = a.H ? Ft(a.H) : Ft(Dt);
            a.G = a.H ? Ct(a.H) : Ct(Dt);
            a.g.onreadystatechange = Wa(a.Y, a);
            try {
                a.K = !0, a.g.open(c, String(b), !0), a.K = !1
            } catch (g) {
                Jt(a);
                return
            }
            b = d || "";
            d = new Map(a.headers);
            var e = Array.from(d.keys()).find(function(g) {
                    return "content-type" == g.toLowerCase()
                }),
                f = u.FormData && b instanceof u.FormData;
            !wb(It, c) || e || f || d.set("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");
            c = q(d);
            for (d = c.next(); !d.done; d = c.next()) e = q(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
            a.$ && (a.g.responseType = a.$);
            "withCredentials" in a.g && a.g.withCredentials !== a.V && (a.g.withCredentials = a.V);
            if ("setTrustToken" in a.g && a.R) try {
                a.g.setTrustToken(a.R)
            } catch (g) {}
            try {
                Kt(a), 0 < a.D && (a.T = Lt(a.g), a.T ? (a.g.timeout = a.D, a.g.ontimeout = Wa(a.aa, a)) : a.C = ik(a.aa, a.D, a)), a.A = !0, a.g.send(b), a.A = !1
            } catch (g) {
                Jt(a)
            }
        },
        Lt = function(a) {
            return vd &&
                Md(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
    Gt.prototype.aa = function() {
        "undefined" != typeof Ja && this.g && (this.o = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Jt = function(a) {
            a.h = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.o = 5;
            Nt(a);
            Ot(a)
        },
        Nt = function(a) {
            a.J || (a.J = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Gt.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ot(this))
    };
    Gt.prototype.N = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Ot(this, !0));
        Gt.ya.N.call(this)
    };
    Gt.prototype.Y = function() {
        this.Ra() || (this.K || this.A || this.l ? Pt(this) : this.da())
    };
    Gt.prototype.da = function() {
        Pt(this)
    };
    var Pt = function(a) {
            if (a.h && "undefined" != typeof Ja && (!a.G[1] || 4 != Qt(a) || 2 != Rt(a)))
                if (a.A && 4 == Qt(a)) ik(a.Y, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Qt(a)) {
                a.h = !1;
                try {
                    var b = Rt(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.M).match(Gf)[1] || null;
                            if (!f && u.self && u.self.location) {
                                var g = u.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !Ht.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.o = 6, Nt(a))
                } finally {
                    Ot(a)
                }
            }
        },
        Ot = function(a, b) {
            if (a.g) {
                Kt(a);
                var c = a.g,
                    d = a.G[0] ? La : null;
                a.g = null;
                a.G = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Kt = function(a) {
            a.g && a.T && (a.g.ontimeout = null);
            a.C && (u.clearTimeout(a.C), a.C = null)
        };
    Gt.prototype.Ic = function() {
        return !!this.g
    };
    var Qt = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Rt = function(a) {
            try {
                return 2 < Qt(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        St = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        Tt = function(a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (u.JSON) try {
                        var b = u.JSON.parse(a);
                        break a
                    } catch (c) {}
                    b = Hh(a)
                }
                return b
            }
        },
        Ut = function(a, b) {
            if (a.g && 4 == Qt(a)) return a = a.g.getResponseHeader(b), null === a ? void 0 : a
        };
    var Vt = RegExp("/itag/(\\d+)/");

    function Wt(a) {
        var b = parseInt(Kf(a, "itag"), 10);
        return b ? b : (a = a.match(Vt)) && 2 == a.length ? parseInt(a[1], 10) : null
    }

    function Xt(a) {
        var b = yt[a];
        a = zt[a];
        b ? (b = Zc(b).toLowerCase(), b = a ? b + '; codecs="' + Zc(a) + '"' : b) : b = "";
        return b
    }

    function Yt(a, b) {
        if ("function" === typeof CustomEvent) return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    };
    var Zt = -1;
    var $t = function() {
        this.g = Date.now()
    };
    $t.prototype.reset = function() {
        this.g = Date.now()
    };
    var au = function(a) {
        a = a.g + 5E3 - Date.now();
        return 0 < a ? a : 0
    };
    var bu = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        cu = ["c.googlesyndication.com"];

    function du(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        eu(a, cu) ? c = !1 : b.includes("https") && eu(a, bu) && (c = !0);
        if (c) {
            b = new P(a);
            if ("https" == b.o) return a;
            I(J(), "htp", "1");
            Js(b, "https");
            return b.toString()
        }
        return a
    }

    function eu(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var fu = function(a) {
        return (a = a.exec(Fc)) ? a[1] : ""
    };
    (function() {
        if (Qd) return fu(/Firefox\/([0-9.]+)/);
        if (vd || wd || ud) return Ld;
        if (Ud) {
            if (pd() || A("Macintosh")) {
                var a = fu(/CriOS\/([0-9.]+)/);
                if (a) return a
            }
            return fu(/Chrome\/([0-9.]+)/)
        }
        if (Vd && !pd()) return fu(/Version\/([0-9.]+)/);
        if (Rd || Sd) {
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fc)) return a[1] + "." + a[2]
        } else if (Td) return (a = fu(/Android\s+([0-9.]+)/)) ? a : fu(/Version\/([0-9.]+)/);
        return ""
    })();
    var gu = /OS (\S+) like/,
        hu = /Android ([\d\.]+)/;

    function iu(a, b) {
        a = (a = a.exec(Fc)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= uc(a, b)
    }
    var ju = function() {
            return zd && "ontouchstart" in document.documentElement
        },
        ku = function(a) {
            return Fd && iu(gu, a)
        },
        lu = function(a) {
            return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var mu = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.errorCode = a
    };
    t(mu, Error);
    var ou = function(a) {
            nu();
            return Pc(a, null)
        },
        nu = La;
    var pu = function() {
            if (!vd) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        qu = vd && pu();
    var ru = function(a) {
        L.call(this);
        this.o = a;
        this.h = {}
    };
    Za(ru, L);
    var tu = [];
    ru.prototype.O = function(a, b, c, d) {
        return uu(this, a, b, c, d)
    };
    var uu = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (tu[0] = c.toString()), c = tu);
        for (var g = 0; g < c.length; g++) {
            var h = rj(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h) break;
            a.h[h.key] = h
        }
        return a
    };
    ru.prototype.Gb = function(a, b, c, d) {
        return vu(this, a, b, c, d)
    };
    var vu = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) vu(a, b, c[g], d, e, f);
        else {
            b = qj(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b) return a;
            a.h[b.key] = b
        }
        return a
    };
    ru.prototype.Ua = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ua(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Na(d) ? !!d.capture : !!d, e = e || this.o || this, c = sj(c), d = !!d, b = gj(a) ? a.Cb(b, c, d, e) : a ? (a = uj(a)) ? a.Cb(b, c, d, e) : null : null, b && (zj(b), delete this.h[b.key])
    };
    var wu = function(a) {
        Gb(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && zj(b)
        }, a);
        a.h = {}
    };
    ru.prototype.N = function() {
        ru.ya.N.call(this);
        wu(this)
    };
    ru.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var xu = function() {};
    xu.prototype.get = function(a) {
        return yu({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET",
            Ka: void 0 === a.Ka ? void 0 : a.Ka
        })
    };
    var yu = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.Ka ? void 0 : a.Ka,
                h = void 0 === a.headers ? {} : a.headers;
            return zu({
                url: b,
                timeout: c,
                withCredentials: d,
                method: e,
                content: f,
                Ka: g,
                headers: h
            }).then(function(k) {
                return Promise.resolve(k)
            }, function(k) {
                return k instanceof Error && 6 == k.message && d ? zu({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    Ka: g,
                    headers: h
                }) : Promise.reject(k)
            })
        },
        zu = function(a) {
            var b = a.url,
                c = a.timeout,
                d = a.withCredentials,
                e = a.method,
                f = void 0 === a.content ? void 0 : a.content,
                g = void 0 === a.Ka ? void 0 : a.Ka;
            a = void 0 === a.headers ? {} : a.headers;
            var h = new Gt;
            h.V = d;
            h.D = Math.max(0, au(c));
            h.X && g && h.X(g);
            for (var k in a) h.headers.set(k, a[k]);
            var n = new ru;
            return new Promise(function(m, v) {
                n.Gb(h, "success", function() {
                    a: {
                        if (Rm()) try {
                            Tt(h);
                            var r = "application/json";
                            break a
                        } catch (Qa) {
                            r = "application/xml";
                            break a
                        }
                        r = Ut(h, "Content-Type") || ""
                    }
                    if (-1 != r.indexOf("application/json")) m(Tt(h) || {});
                    else {
                        try {
                            var w = h.g ? h.g.responseXML : null
                        } catch (Qa) {
                            w = null
                        }
                        if (null ==
                            w)
                            if (w = St(h), "undefined" != typeof DOMParser) r = new DOMParser, w = ou(w), w = r.parseFromString(Oc(w), "application/xml");
                            else if (qu) {
                            r = new ActiveXObject("MSXML2.DOMDocument");
                            r.resolveExternals = !1;
                            r.validateOnParse = !1;
                            try {
                                r.setProperty("ProhibitDTD", !0), r.setProperty("MaxXMLSize", 2048), r.setProperty("MaxElementDepth", 256)
                            } catch (Qa) {}
                            r.loadXML(w);
                            w = r
                        } else throw Error("Your browser does not support loading xml documents");
                        r = Vh(Ji);
                        var x;
                        if (x = w && w.documentElement)(x = w.documentElement) && "VAST" != !x.nodeName ? (x =
                            x.getAttribute("version")) ? (x = parseInt(x, 10), x = null == x || isNaN(x) ? null : x) : x = null : x = null, x = null == x || 2 > x || 4 < x ? !1 : !0;
                        if (!x && r) {
                            r = {
                                vastUrl: b.substring(0, 200),
                                responseText: St(h).substring(0, 200),
                                status: Rt(h),
                                origin: window.location.origin
                            };
                            Rm() || (r.contentType = Ut(h, "Content-Type"), r.acao = Ut(h, "Access-Control-Allow-Origin"), r.acac = Ut(h, "Access-Control-Allow-Credentials"));
                            x = J();
                            for (var G = q(Object.keys(r)), la = G.next(); !la.done; la = G.next()) la = la.value, I(x, la, r[la])
                        }
                        m(w)
                    }
                    n.W();h.W()
                });
                n.Gb(h, ["error", "timeout"],
                    function() {
                        v(new mu(h.o, Rt(h)));
                        n.W();
                        h.W()
                    });
                Mt(h, du(b), e, f)
            })
        };

    function Au(a, b) {
        return jc(b) ? !1 : (new RegExp(a)).test(b)
    }

    function Bu(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = kc(d[0]), d = kc(d[1]), 0 < c.length && (b[c] = d))
        });
        return b
    }

    function Cu(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a) return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var Eu = function(a) {
        P.call(this, a);
        this.C = new Map;
        a = this.g;
        var b = a.indexOf(";"),
            c = null;
        0 <= b ? (this.g = a.substring(0, b), c = a.substring(b + 1)) : this.g = a;
        Du(this, c)
    };
    t(Eu, P);
    Eu.prototype.toString = function() {
        return Fu(this, P.prototype.toString.call(this))
    };
    Eu.prototype.D = function() {
        return ""
    };
    var Du = function(a, b) {
            jc(Zc(b)) || b.split(";").forEach(function(c) {
                var d = c.indexOf("=");
                if (!(0 >= d)) {
                    var e = Wc(c.substring(0, d));
                    c = Wc(c.substring(d + 1));
                    d = a.C.get(e);
                    null != d ? d.includes(c) || d.push(c) : d = [Zc(c)];
                    a.C.set(e, d)
                }
            }, a)
        },
        Gu = function(a) {
            if (jc(Zc("ord"))) return null;
            a = a.C.get("ord");
            return null != a ? a : null
        },
        Hu = function(a, b) {
            jc(Zc("ord")) || (b = b.map(Zc), a.C.set("ord", b))
        },
        Fu = function(a, b) {
            b = [Zc(b)];
            b.push.apply(b, ha(Iu(a)));
            return b.join(";")
        },
        Iu = function(a) {
            var b = Gu(a);
            null == b ? b = [Zc(Date.now())] : jc(Zc("ord")) ||
                a.C.delete("ord");
            var c = [];
            a.C.forEach(function(d, e) {
                d.forEach(function(f) {
                    c.push(e + "=" + f)
                })
            });
            c.push("ord=" + b[0]);
            Hu(a, b);
            return c
        };
    Eu.prototype.G = function() {
        return new Eu(this.toString())
    };
    var Ju, Ku, Mu, Nu = function() {
            return u.navigator ? u.navigator.userAgent : ""
        },
        Ou = -1 != Nu().indexOf("(iPad") || -1 != Nu().indexOf("(Macintosh") || -1 != Nu().indexOf("(iPod") || -1 != Nu().indexOf("(iPhone");

    function Pu(a, b) {
        b = void 0 === b ? "" : b;
        vd && (b = "");
        if (!jc(Zc(a))) {
            var c = a instanceof wc || !Is.test(a) ? a : new wc(a, vc);
            if (c instanceof wc) a = c;
            else {
                var d = void 0 === d ? ig : d;
                a: {
                    d = void 0 === d ? ig : d;
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof gg && e.$e(a)) {
                            a = new Xe(a, Se);
                            break a
                        }
                    }
                    a = void 0
                }
                a = a || Ye
            }
            window.open(cf(a), "_blank", b)
        }
    };
    var Qu = function(a) {
        M.call(this);
        this.g = a;
        this.o = this.A = !1;
        this.C = this.D = 0;
        this.h = new hk(1E3);
        aj(this, this.h);
        rj(this.h, "tick", this.G, !1, this);
        rj(this.g, "pause", this.l, !1, this);
        rj(this.g, "playing", this.l, !1, this);
        rj(this.g, "ended", this.l, !1, this);
        rj(this.g, "timeupdate", this.l, !1, this)
    };
    t(Qu, M);
    Qu.prototype.l = function(a) {
        switch (a.type) {
            case "playing":
                Ru(this);
                break;
            case "pause":
            case "ended":
                this.h.jb && this.h.stop();
                break;
            case "timeupdate":
                !this.A && 0 < this.g.currentTime && (this.A = !0, Ru(this))
        }
    };
    var Ru = function(a) {
        !a.h.jb && a.A && (a.D = 1E3 * a.g.currentTime, a.C = Date.now(), a.o = !1, a.h.start())
    };
    Qu.prototype.G = function() {
        var a = Date.now(),
            b = 1E3 * this.g.currentTime;
        b - this.D < .5 * (a - this.C) ? this.o || (this.o = !0, this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.D = b;
        this.C = a
    };
    var Su = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Gf: "beginFullscreen",
        Hf: "canPlay",
        If: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Uf: "end",
        Vf: "endFullscreen",
        Wf: "error",
        $f: "focusSkipButton",
        de: "loadStart",
        LOADED: "loaded",
        Cg: "mediaLoadTimeout",
        Dg: "mediaPlaybackTimeout",
        uc: "pause",
        Og: "play",
        Qg: "playing",
        Yg: "seeked",
        Zg: "seeking",
        $g: "skip",
        ne: "skipShown",
        vc: "start",
        jh: "timeUpdate",
        hh: "timedMetadata",
        re: "volumeChange",
        uh: "waiting"
    };
    var Uu = function(a) {
            this.g = a;
            this.h = Tu(a)
        },
        Tu = function(a) {
            return new Map(a.g.split("/").reduce(function(b, c, d) {
                d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                return b
            }, []))
        };
    Uu.prototype.getId = function() {
        return Vu(this, "id")
    };
    var Vu = function(a, b) {
        var c = a.g.l.get(b);
        return c ? c : (a = a.h.get(b)) ? a : null
    };
    var Wu = function() {};
    var Xu = ["doubleclick.net"];

    function Yu() {
        if (pd()) return !1;
        if (A("Android")) {
            if (void 0 === Mu) {
                a: {
                    if (void 0 === Ju) {
                        if (Ou) {
                            var a = -1 != Nu().indexOf("Safari");
                            var b = (new P(window.location.href)).l.qb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = Ju = !0;
                                break a
                            }
                        }
                        Ju = !1
                    }
                    a = Ju
                }
                a || (void 0 === Ku && (Ku = -1 != Nu().indexOf("afma-sdk-a") ? !0 : !1), a = Ku);Mu = a
            }
            return Mu ? !0 : Ef() ? !1 : Zu()
        }
        a = A("Macintosh") ||
            A("Linux") || A("Windows") || A("CrOS");
        return (Vh(Ni) || Vh(Li) || Vh(Mi)) && a && Lc() ? Zu() : !1
    }

    function Zu() {
        var a = !1,
            b = (new P(window.location.href)).h;
        Xu.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }

    function $u(a) {
        for (var b = 0, c = 0; c < a.length; c++) b = Math.imul(31, b) + a.charCodeAt(c) | 0;
        return b.toString()
    };
    var av, dv = function(a, b, c) {
        if ("number" === typeof a) var d = {
            name: bv(a)
        };
        else d = a, a = cv(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        bb.call(this, b)
    };
    Za(dv, bb);
    dv.prototype.getName = function() {
        return this.g.name || ""
    };
    var ev = {
            pe: 1,
            Ig: 2,
            NOT_FOUND_ERR: 3,
            Vd: 4,
            Yd: 5,
            Jg: 6,
            oe: 7,
            ABORT_ERR: 8,
            me: 9,
            lh: 10,
            TIMEOUT_ERR: 11,
            le: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        fv = (u.g || u.h || ev).pe,
        gv = (u.g || u.h || ev).NOT_FOUND_ERR,
        hv = (u.g || u.h || ev).Vd,
        iv = (u.g || u.h || ev).Yd,
        jv = (u.g || u.h || ev).oe,
        kv = (u.g || u.h || ev).ABORT_ERR,
        lv = (u.g || u.h || ev).me,
        mv = (u.g || u.h || ev).TIMEOUT_ERR,
        nv = (u.g || u.h || ev).le,
        ov = (u.DOMException || ev).INVALID_ACCESS_ERR,
        pv = (u.DOMException || ev).INVALID_STATE_ERR,
        cv = function(a) {
            switch (a) {
                case "UnknownError":
                    return fv;
                case "NotFoundError":
                    return gv;
                case "ConstraintError":
                    return hv;
                case "DataError":
                    return iv;
                case "TransactionInactiveError":
                    return jv;
                case "AbortError":
                    return kv;
                case "ReadOnlyError":
                    return lv;
                case "TimeoutError":
                    return mv;
                case "QuotaExceededError":
                    return nv;
                case "InvalidAccessError":
                    return ov;
                case "InvalidStateError":
                    return pv;
                default:
                    return fv
            }
        },
        bv = function(a) {
            switch (a) {
                case fv:
                    return "UnknownError";
                case gv:
                    return "NotFoundError";
                case hv:
                    return "ConstraintError";
                case iv:
                    return "DataError";
                case jv:
                    return "TransactionInactiveError";
                case kv:
                    return "AbortError";
                case lv:
                    return "ReadOnlyError";
                case mv:
                    return "TimeoutError";
                case nv:
                    return "QuotaExceededError";
                case ov:
                    return "InvalidAccessError";
                case pv:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        qv = function(a, b) {
            return "error" in a ? new dv(a.error, b) : new dv({
                name: "UnknownError"
            }, b)
        },
        rv = function(a, b) {
            if ("name" in a) return b = b + ": " + a.message, new dv(a, b);
            if ("code" in a) {
                var c = bv(a.code);
                b = b + ": " + a.message;
                return new dv({
                    name: c
                }, b)
            }
            return new dv({
                name: "UnknownError"
            }, b)
        };
    var tv = function(a) {
            this.g = a
        },
        uv = u.IDBKeyRange || u.webkitIDBKeyRange;
    /*
       
        Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: MIT
       */
    var vv = function() {
        this.A = [];
        this.B = this.o = !1;
        this.l = void 0;
        this.D = this.H = this.I = !1;
        this.C = 0;
        this.h = null;
        this.L = 0
    };
    vv.prototype.cancel = function(a) {
        if (this.o) this.l instanceof vv && this.l.cancel();
        else {
            if (this.h) {
                var b = this.h;
                delete this.h;
                a ? b.cancel(a) : (b.L--, 0 >= b.L && b.cancel())
            }
            this.D = !0;
            this.o || wv(this, new xv(this))
        }
    };
    vv.prototype.G = function(a, b) {
        this.I = !1;
        yv(this, a, b)
    };
    var yv = function(a, b, c) {
            a.o = !0;
            a.l = c;
            a.B = !b;
            zv(a)
        },
        Bv = function(a) {
            if (a.o) {
                if (!a.D) throw new Av(a);
                a.D = !1
            }
        };
    vv.prototype.g = function(a) {
        Bv(this);
        yv(this, !0, a)
    };
    var wv = function(a, b) {
            Bv(a);
            yv(a, !1, b)
        },
        Dv = function(a, b) {
            return Cv(a, b, null, void 0)
        },
        Cv = function(a, b, c, d) {
            a.A.push([b, c, d]);
            a.o && zv(a);
            return a
        };
    vv.prototype.then = function(a, b, c) {
        var d, e, f = new Sj(function(g, h) {
            e = g;
            d = h
        });
        Cv(this, e, function(g) {
            g instanceof xv ? f.cancel() : d(g)
        });
        return f.then(a, b, c)
    };
    vv.prototype.$goog_Thenable = !0;
    var Ev = function(a) {
            return sb(a.A, function(b) {
                return "function" === typeof b[1]
            })
        },
        zv = function(a) {
            if (a.C && a.o && Ev(a)) {
                var b = a.C,
                    c = Fv[b];
                c && (u.clearTimeout(c.g), delete Fv[b]);
                a.C = 0
            }
            a.h && (a.h.L--, delete a.h);
            b = a.l;
            for (var d = c = !1; a.A.length && !a.I;) {
                var e = a.A.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.B ? g : f) try {
                    var h = f.call(e || null, b);
                    void 0 !== h && (a.B = a.B && (h == b || h instanceof Error), a.l = b = h);
                    if (Qj(b) || "function" === typeof u.Promise && b instanceof u.Promise) d = !0, a.I = !0
                } catch (k) {
                    b = k, a.B = !0, Ev(a) || (c = !0)
                }
            }
            a.l = b;
            d && (h =
                Wa(a.G, a, !0), d = Wa(a.G, a, !1), b instanceof vv ? (Cv(b, h, d), b.H = !0) : b.then(h, d));
            c && (b = new Gv(b), Fv[b.g] = b, a.C = b.g)
        },
        Av = function() {
            bb.call(this)
        };
    Za(Av, bb);
    Av.prototype.message = "Deferred has already fired";
    Av.prototype.name = "AlreadyCalledError";
    var xv = function() {
        bb.call(this)
    };
    Za(xv, bb);
    xv.prototype.message = "Deferred was canceled";
    xv.prototype.name = "CanceledError";
    var Gv = function(a) {
        this.g = u.setTimeout(Wa(this.l, this), 0);
        this.h = a
    };
    Gv.prototype.l = function() {
        delete Fv[this.g];
        throw this.h;
    };
    var Fv = {};
    var Hv = function() {
        M.call(this)
    };
    Za(Hv, M);
    Hv.prototype.g = null;
    Hv.prototype.next = function(a) {
        if (a) this.g["continue"](a);
        else this.g["continue"]()
    };
    Hv.prototype.remove = function() {
        var a = new vv;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return wv(a, rv(c, "deleting via cursor")), a
        }
        b.onsuccess = function() {
            a.g()
        };
        b.onerror = function(c) {
            wv(a, qv(c.target, "deleting via cursor"))
        };
        return a
    };
    var Iv = function(a, b) {
        var c = new Hv;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.W(), rv(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };
    var Jv = function(a) {
        this.g = a
    };
    Jv.prototype.getName = function() {
        return this.g.name
    };
    var Kv = function(a, b, c) {
        var d = new vv;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + Ch(c), wv(d, rv(f, b)), d
        }
        e.onsuccess = function(f) {
            d.g(f.target.result)
        };
        e.onerror = function(f) {
            b += " with key " + Ch(c);
            wv(d, qv(f.target, b))
        };
        return d
    };
    Jv.prototype.get = function(a) {
        return Kv(this, "getting from index " + this.getName(), a)
    };
    var Lv = function(a, b) {
        return Iv(a.g, b)
    };
    var Mv = function(a) {
        this.g = a
    };
    Mv.prototype.getName = function() {
        return this.g.name
    };
    var Nv = function(a, b, c, d, e) {
            var f = new vv;
            try {
                var g = e ? a.g[b](d, e) : a.g[b](d)
            } catch (h) {
                return c += Ch(d), e && (c += ", with key " + Ch(e)), wv(f, rv(h, c)), f
            }
            g.onsuccess = function(h) {
                f.g(h.target.result)
            };
            g.onerror = function(h) {
                c += Ch(d);
                e && (c += ", with key " + Ch(e));
                wv(f, qv(h.target, c))
            };
            return f
        },
        Ov = function(a, b) {
            return Nv(a, "put", "putting into " + a.getName() + " with value", b, void 0)
        };
    Mv.prototype.add = function(a, b) {
        return Nv(this, "add", "adding into " + this.getName() + " with value ", a, b)
    };
    Mv.prototype.remove = function(a) {
        var b = new vv;
        try {
            var c = this.g["delete"](a instanceof tv ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + Ch(a), wv(b, rv(e, c)), b
        }
        c.onsuccess = function() {
            b.g()
        };
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + Ch(a);
            wv(b, qv(e.target, f))
        };
        return b
    };
    Mv.prototype.get = function(a) {
        var b = new vv;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + Ch(a), wv(b, rv(e, c)), b
        }
        c.onsuccess = function(e) {
            b.g(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + Ch(a);
            wv(b, qv(e.target, f))
        };
        return b
    };
    Mv.prototype.clear = function() {
        var a = "clearing store " + this.getName(),
            b = new vv;
        try {
            var c = this.g.clear()
        } catch (d) {
            return wv(b, rv(d, a)), b
        }
        c.onsuccess = function() {
            b.g()
        };
        c.onerror = function(d) {
            wv(b, qv(d.target, a))
        };
        return b
    };
    var Pv = function(a) {
        try {
            return new Jv(a.g.index("timestamp"))
        } catch (b) {
            throw rv(b, "getting index timestamp");
        }
    };
    var Qv = function(a, b) {
        M.call(this);
        this.g = a;
        this.l = b;
        this.h = new ru(this);
        this.h.O(this.g, "complete", Wa(this.dispatchEvent, this, "complete"));
        this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.O(this.g, "error", this.$d)
    };
    Za(Qv, M);
    l = Qv.prototype;
    l.$d = function(a) {
        a.target instanceof dv ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: qv(a.target, "in transaction")
        })
    };
    l.objectStore = function(a) {
        try {
            return new Mv(this.g.objectStore(a))
        } catch (b) {
            throw rv(b, "getting object store " + a);
        }
    };
    l.commit = function(a) {
        if (this.g.commit || !a) try {
            this.g.commit()
        } catch (b) {
            throw rv(b, "cannot commit the transaction");
        }
    };
    l.wait = function() {
        var a = new vv;
        qj(this, "complete", Wa(a.g, a));
        var b = qj(this, "abort", function() {
            zj(c);
            wv(a, new dv(kv, "waiting for transaction to complete"))
        });
        var c = qj(this, "error", function(e) {
            zj(b);
            wv(a, e.target)
        });
        var d = this.l;
        return Dv(a, function() {
            return d
        })
    };
    l.abort = function() {
        this.g.abort()
    };
    l.N = function() {
        Qv.ya.N.call(this);
        this.h.W()
    };
    var Rv = function(a) {
        M.call(this);
        this.g = a;
        this.h = new ru(this);
        this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.O(this.g, "error", this.ae);
        this.h.O(this.g, "versionchange", this.De);
        this.h.O(this.g, "close", Wa(this.dispatchEvent, this, "close"))
    };
    Za(Rv, M);
    l = Rv.prototype;
    l.Pc = !0;
    l.ae = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    l.De = function(a) {
        this.dispatchEvent(new Sv(a.oldVersion, a.newVersion))
    };
    l.close = function() {
        this.Pc && (this.g.close(), this.Pc = !1)
    };
    l.getName = function() {
        return this.g.name
    };
    l.getVersion = function() {
        return Number(this.g.version)
    };
    var Tv = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new Qv(c, a)
        } catch (d) {
            throw rv(d, "creating transaction");
        }
    };
    Rv.prototype.N = function() {
        Rv.ya.N.call(this);
        this.h.W()
    };
    var Sv = function(a, b) {
        bj.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    Za(Sv, bj);
    var Uv = function(a) {
        var b = new vv;
        void 0 == av && (av = u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.moz_indexedDB);
        var c = av.open("VideoChunkPersistentStorage", 5);
        c.onsuccess = function(d) {
            d = new Rv(d.target.result);
            b.g(d)
        };
        c.onerror = function(d) {
            wv(b, qv(d.target, "opening database VideoChunkPersistentStorage"))
        };
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new Rv(d.target.result);
                a(new Sv(d.oldVersion, d.newVersion), e, new Qv(d.target.transaction, e))
            }
        };
        c.onblocked = function() {};
        return b
    };
    var Vv = {
            sh: "videoId",
            zg: "itag",
            ah: "source",
            bh: "startIndex"
        },
        Wv = function() {
            M.call(this);
            this.g = null
        };
    t(Wv, M);
    Wv.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(Uv(this.h)).then(function(b) {
            return a.g = b
        }, function(b) {
            I(J(), "codf", b.message)
        })
    };
    var Xv = function(a) {
        return null !== a.g && a.g.Pc
    };
    Wv.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            return Yv(a, b)
        })).then(function() {
            return Zv()
        }).then(function() {
            return a.g.close()
        })
    };
    var Zv = function() {
            return "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate().then(function(a) {
                I(J(), "csue", String(a.usage))
            }) : Promise.resolve(void 0)
        },
        cw = function(a, b) {
            b = $v(b);
            if (!b) return Promise.resolve(null);
            var c = aw(b);
            return bw(a, c, b.lmt)
        },
        ew = function(a, b, c, d) {
            if (c = $v(c)) {
                var e = aw(c),
                    f = c.startIndex;
                dw(a, {
                    cacheId: e,
                    startIndex: f,
                    endIndex: f + b.byteLength - 1,
                    lmt: c.lmt,
                    timestamp: new Date(Date.now()),
                    isLastVideoChunk: d,
                    video: b
                })
            } else Promise.resolve(void 0)
        };
    Wv.prototype.h = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
            b.g.deleteObjectStore("MediaSourceVideoChunk")
        } catch (d) {
            throw rv(d, "deleting object store MediaSourceVideoChunk");
        }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new Mv(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw rv(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw rv(d, "creating new index timestamp with key path timestamp");
        }
    };
    var Yv = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new tv(uv.upperBound(c, void 0));
            var d = Lv(Pv(Tv(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = d.O("n", function() {
                    d.remove();
                    d.next()
                });
            qj(d, "c", function() {
                zj(e);
                b()
            })
        },
        $v = function(a) {
            var b = new Uu(a);
            a = b.getId();
            var c = Vu(b, "itag"),
                d = Vu(b, "source"),
                e = Vu(b, "lmt");
            (b = b.g.l.get("range")) ? (b = b.split("-")[0], b = !b || isNaN(b) ? null : parseInt(b, 10)) : b = null;
            var f = [];
            a ? c ? d ? e ? null === b && f.push("startIndex") : f.push("lmt") : f.push("source") :
                f.push("itag") : f.push("videoId");
            return 0 < f.length ? (I(J(), "civp", f.join("-")), null) : {
                videoId: a,
                itag: c,
                source: d,
                lmt: e,
                startIndex: b + 0
            }
        },
        aw = function(a) {
            var b = Object.keys(Vv).sort().map(function(c) {
                return a[Vv[c]]
            }).join(",");
            return $u(b)
        },
        bw = function(a, b, c) {
            var d = Tv(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return I(J(), "cenf", "1"), null;
                if (e.lmt !== c) return I(J(), "cdl", "1"), d.remove(b).then(null, function(f) {
                    I(J(), "crdlvf", f.message)
                }), null;
                I(J(),
                    "cefml", "1");
                return {
                    endIndex: e.endIndex,
                    isLastVideoChunk: e.isLastVideoChunk,
                    video: e.video
                }
            }, function(e) {
                I(J(), "cgvf", e.message)
            })
        },
        dw = function(a, b) {
            a = Tv(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(Ov(a, b)).then(function() {
                I(J(), "cavs", "1")
            }, function(c) {
                I(J(), "cavf", c.message)
            })
        };
    var fw = function(a) {
        M.call(this);
        var b = this;
        this.D = new P(a);
        this.G = this.g = this.l = this.h = 0;
        this.o = (this.C = Yu()) ? vt(Wv) : null;
        $i(this, function() {
            Zi(b.o)
        });
        this.H = this.C ? this.o.initialize() : null;
        this.A = null
    };
    t(fw, M);
    var hw = function(a) {
            Fa(function(b) {
                if (1 == b.g) return 2 === a.g && (a.g = 1), wa(b, gw(a), 4);
                var c = 3 < a.G;
                if (c && null !== a.A) {
                    var d = Yt("media_source_error", {
                        code: 0 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.A + '" with ' + a.h + " bytes requested and " + a.l + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.l < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0), b.g = 0)
            })
        },
        gw = function(a) {
            var b;
            return Fa(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.l + "-" + (a.h - 1);
                        Ws(a.D, "range", b);
                        if (!a.C) {
                            c.g = 2;
                            break
                        }
                        return wa(c,
                            a.H, 3);
                    case 3:
                        return c.return(iw(a));
                    case 2:
                        return c.h = 4, wa(c, jw(a), 6);
                    case 6:
                        c.g = 0;
                        c.h = 0;
                        break;
                    case 4:
                        xa(c), a.G++, c.g = 0
                }
            })
        },
        iw = function(a) {
            var b;
            return Fa(function(c) {
                switch (c.g) {
                    case 1:
                        return wa(c, cw(a.o, a.D), 2);
                    case 2:
                        if (b = c.A) {
                            b.isLastVideoChunk && (a.g = 3);
                            kw(a, b.video, 0);
                            c.g = 0;
                            break
                        }
                        c.h = 4;
                        return wa(c, jw(a), 6);
                    case 6:
                        c.g = 0;
                        c.h = 0;
                        break;
                    case 4:
                        xa(c), a.G++, c.g = 0
                }
            })
        },
        jw = function(a) {
            return new Promise(function(b, c) {
                var d = new XMLHttpRequest,
                    e = 0,
                    f = a.h - a.l;
                d.addEventListener("load", function() {
                    Fh("lvlcl");
                    if (400 <= d.status) return I(J(), "lvlxes", d.status.toString()), a.A = d.status, c();
                    var g = d.response;
                    g.byteLength < f && (a.g = 3);
                    var h = kw(a, g, e);
                    e += h;
                    a.C && 0 < g.byteLength && ew(a.o, g, a.D, g.byteLength < f);
                    b()
                });
                d.addEventListener("timeout", function() {
                    Fh("lvlct");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("error", function() {
                    Fh("lvlce");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("progress", function() {
                    if (400 <= d.status) a.A = d.status;
                    else {
                        var g = kw(a, d.response, e);
                        e += g
                    }
                });
                d.responseType = "arraybuffer";
                d.open("get", a.D.toString());
                d.send(null)
            })
        },
        kw = function(a, b, c) {
            if (null === b) return 0;
            b = b.slice(c);
            a.l += b.byteLength;
            a.dispatchEvent({
                type: "progress",
                xe: b
            });
            return b.byteLength
        };
    fw.prototype.N = function() {
        this.C && Xv(this.o) && this.o.close();
        M.prototype.N.call(this)
    };

    function lw() {
        return !!window.MediaSource
    }

    function mw(a) {
        return [43, 44, 45].includes(a) && Qd ? !1 : xt[a] ? (a = Xt(a), !!a && lw() && MediaSource.isTypeSupported(a)) : !1
    };
    var nw = function() {};
    nw.prototype.g = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    };
    var ow = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var rw = function(a) {
        M.call(this);
        var b = this;
        this.h = a;
        this.o = this.h.map(function(c) {
            return vt(fw, c.url)
        });
        this.ca = vt(MediaSource);
        this.g = [];
        this.l = window.URL.createObjectURL(this.ca);
        this.G = 0;
        this.D = !1;
        this.C = function() {
            return pw(b)
        };
        this.ca.addEventListener("sourceopen", this.C);
        this.H = qw(this);
        this.A = 0
    };
    t(rw, M);
    var qw = function(a) {
            for (var b = [], c = 0; c < a.h.length; ++c) b.push(new nw);
            return b
        },
        pw = function(a) {
            Fh("msms_oso");
            for (var b = {}, c = 0; c < a.h.length; b = {
                    xb: b.xb,
                    wb: b.wb
                }, ++c) {
                var d = a.h[c];
                I(J(), "msms_mime" + c, d.mimeType);
                I(J(), "msms_cs" + c, d.g.toString());
                b.xb = a.ca.addSourceBuffer(d.mimeType);
                b.wb = a.o[c];
                b.wb.O("progress", function(e) {
                    return function(f) {
                        var g = e.wb;
                        f = f.xe;
                        0 !== f.byteLength && e.xb.appendBuffer(f);
                        3 === g.g && (a.G++, a.G === a.g.length && tw(a))
                    }
                }(b));
                b.wb.O("media_source_error", function(e) {
                    a.dispatchEvent(e)
                });
                b.xb ? a.g.push(b.xb) : Fh("msms_sbf" + c)
            }
            I(J(), "msms_ns", a.g.length.toString());
            a.D = !0;
            uw(a)
        },
        tw = function(a) {
            Promise.all(a.g.map(function(b) {
                return new Promise(function(c) {
                    b.updating ? b.addEventListener("updateend", function() {
                        c()
                    }) : c()
                })
            })).then(function() {
                return a.ca.endOfStream()
            })
        },
        uw = function(a) {
            if (a.D)
                for (var b = 0; b < a.h.length; ++b) {
                    var c = a.o[b],
                        d = a.g[b];
                    d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                    d = a.H[b].g(a.A, d, c.h);
                    0 !== d && (1 === c.g ? (c.h += d, c.g = 2) : 0 === c.g && (c.h += d, c.g = 1, hw(c)))
                }
        };
    rw.prototype.N = function() {
        this.l && window.URL.revokeObjectURL(this.l);
        for (var a = q(this.o), b = a.next(); !b.done; b = a.next()) b.value.W();
        this.ca.removeEventListener("sourceopen", this.C);
        M.prototype.N.call(this)
    };
    var vw = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
        ww = RegExp("outstream.min.js"),
        xw = RegExp("outstream.min.css"),
        yw = RegExp("fonts.gstatic.com"),
        zw = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
        Aw = RegExp("custom.elements.min.js");

    function Bw(a, b) {
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = 0,
            n = !1,
            m = !1;
        if ("function" === typeof Ka("performance.getEntriesByType", u) && "transferSize" in u.PerformanceResourceTiming.prototype) {
            var v = u.performance.getEntriesByType("resource");
            v = q(v);
            for (var r = v.next(); !r.done; r = v.next()) r = r.value, vw.test(r.name) || (f += 1, r.transferSize ? (c += r.transferSize, r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1, e += r.encodedBodySize, ww.test(r.name) && (n = !0), xw.test(r.name) && (m = !0)), zw.test(r.name) && (d += r.transferSize)) :
                0 == r.transferSize && 0 == r.encodedBodySize ? Aw.test(r.name) ? c += 6686 : yw.test(r.name) || (k += 1, Eh(J(), {
                    event_name: "unmeasurable_asset",
                    resource_name: r.name,
                    encoded_body_size: r.encodedBodySize,
                    transfer_size: r.transferSize
                })) : (g += 1, e += r.encodedBodySize, ww.test(r.name) && (n = !0), xw.test(r.name) && (m = !0)));
            v = 0;
            if (a.duration) {
                for (r = 0; r < a.buffered.length; r++) v += a.buffered.end(r) - a.buffered.start(r);
                v = Math.min(v, a.duration)
            }
            Eh(J(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: v.toFixed(2)
            })
        } else I(J(), "error", "reporting_timing_not_supported")
    };

    function Cw(a) {
        var b = J(),
            c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime, I(b, "vqdf", String(c.droppedVideoFrames)), I(b, "vqtf", String(c.totalVideoFrames)), I(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : I(b, "vqu", "1")
    };
    var Dw = function() {};
    Dw.prototype.toString = function() {
        return "video_mute"
    };
    var Ew = new Dw;
    var Fw = function(a) {
        L.call(this);
        this.A = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.h = {};
        this.D = !!a
    };
    Za(Fw, L);
    var Gw = function(a, b, c) {
            var d = Ew.toString(),
                e = a.h[d];
            e || (e = a.h[d] = []);
            var f = a.A;
            a.g[f] = d;
            a.g[f + 1] = b;
            a.g[f + 2] = c;
            a.A = f + 3;
            e.push(f)
        },
        Hw = function(a, b, c) {
            var d = a.h[Ew.toString()];
            if (d) {
                var e = a.g;
                (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c
                })) && a.B(d)
            }
        };
    Fw.prototype.B = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.o ? (this.l.push(a), this.g[a + 1] = La) : (c && xb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    Fw.prototype.C = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    Iw(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.o++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.Ra(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.o--, 0 < this.l.length && 0 == this.o)
                            for (; c = this.l.pop();) this.B(c)
                    }
                }
        }
    };
    var Iw = function(a, b, c) {
        Oj(function() {
            a.apply(b, c)
        })
    };
    Fw.prototype.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.B, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    Fw.prototype.N = function() {
        Fw.ya.N.call(this);
        this.clear();
        this.l.length = 0
    };
    var Jw = function(a) {
        L.call(this);
        this.g = new Fw(a);
        aj(this, this.g)
    };
    Za(Jw, L);
    Jw.prototype.clear = function(a) {
        this.g.clear(void 0 !== a ? a.toString() : void 0)
    };
    var Kw = function(a) {
        a = void 0 === a ? null : a;
        L.call(this);
        this.g = new ru(this);
        aj(this, this.g);
        this.tb = a
    };
    t(Kw, L);
    var Lw = function(a, b, c) {
        a.tb && (Gw(a.tb.g, b, c), $i(a, function() {
            Hw(a.tb.g, b, c)
        }))
    };
    var Mw = function(a, b) {
        Kw.call(this, b);
        Lw(this, function(c) {
            c ? a.show() : a.g.mode = "hidden"
        }, this)
    };
    t(Mw, Kw);
    var Nw = function() {
        M.call(this);
        this.h = new ru(this);
        aj(this, this.h)
    };
    t(Nw, M);
    var Pw = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        Nw.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = yf("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        Ow(this);
        c ? this.show() : this.g.mode = "hidden"
    };
    t(Pw, Nw);
    var Ow = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    Pw.prototype.show = function() {
        this.g.mode = "showing"
    };

    function Qw(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                    e = q(e);
                    for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
                },
                d = new ReportingObserver(c, {
                    buffered: !0
                });
            u.addEventListener("unload", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }

    function Rw(a) {
        a = void 0 === a ? null : a;
        Qw(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body,
                d = J();
            I(d, "ham", c.message);
            c.message.includes("Ad was removed because its CPU usage exceeded the limit") ? I(d, "hacpu", "true") : c.message.includes("Ad was removed because its network usage exceeded the limit") && I(d, "habytes", "true");
            a && a(b)
        })
    };
    var Sw = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
        Tw = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
        Uw = {
            childList: !0
        },
        Vw = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
        Ww = HTMLElement;
    Vw && (Ww = function() {
        return u.Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }, Object.setPrototypeOf(Ww, HTMLElement), Object.setPrototypeOf(Ww.prototype, HTMLElement.prototype));
    var Xw = function(a) {
            if (null !== a) {
                a = q(a);
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b.nodeName === "TRACK".toString()) return b
            }
            return null
        },
        Yw = function(a, b) {
            this.code = a;
            this.message = void 0 === b ? "" : b
        },
        Zw = function(a) {
            Yw.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
        };
    t(Zw, Yw);
    var cx = function() {
        var a = Ww.call(this) || this;
        I(J(), "ulv", "1");
        a.ca = null;
        a.Kd = "";
        a.pd = null;
        a.P = yf("VIDEO");
        $w(a);
        a.tb = new Jw;
        ax(a);
        a.Sb = null;
        bx(a);
        a.attachShadow({
            mode: "open"
        });
        a.shadowRoot.appendChild(a.P);
        Rw(function() {
            I(J(), "has", a.src || a.ob);
            I(J(), "hat", String(a.P.currentTime))
        });
        a.kc = !1;
        a.Nd = !1;
        a.Hb = null;
        return a
    };
    t(cx, Ww);
    cx.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
            case "src":
                dx(this, c);
                break;
            case "demuxedaudiosrc":
            case "demuxedvideosrc":
                ex(this);
                break;
            case "muted":
                this.P[a] = "" === c ? !0 : !!c;
                fx(this, a, c);
                break;
            default:
                fx(this, a, c)
        }
    };
    var fx = function(a, b, c) {
            c !== a.P.getAttribute(b) && (null === c ? a.P.removeAttribute(b) : a.P.setAttribute(b, c))
        },
        gx = function(a) {
            a.ca && (a.P.removeEventListener("timeupdate", a.Hb), a.ca.W(), a.ca = null)
        },
        hx = function(a, b) {
            a.pd = b;
            a.P.dispatchEvent(new Event("error"))
        },
        $w = function(a) {
            ix(a);
            jx(a);
            a.P.addEventListener("loadedmetadata", function() {
                var b = a.P.videoWidth,
                    c = a.P.videoHeight,
                    d = sg(a),
                    e = d.width,
                    f = d.height;
                0 < b && 0 < c && 0 < e && 0 < f && (d = d.width / d.height, b /= c, .97 <= Math.min(b, d) / Math.max(b, d) ? kg(a.P, {
                        "object-fit": "cover"
                    }) :
                    kg(a.P, {
                        "object-fit": "contain"
                    }))
            });
            a.P.addEventListener("play", function() {
                a.Nd || (Bw(a.P, "first_play"), a.Nd = !0)
            });
            a.P.addEventListener("pause", function() {
                a.kc || (Bw(a.P, "first_pause"), Cw(a.P), a.kc = !0)
            });
            rj(u, "unload", function() {
                a.kc || (Bw(a.P, "first_pause"), Cw(a.P), a.kc = !0)
            });
            a.P.addEventListener("stalled", function() {
                I(J(), "ves", "1")
            });
            (new Qu(a.P)).O("playbackStalled", function() {
                return I(J(), "pbs", "1")
            });
            a.P.addEventListener("media_source_error", function(b) {
                gx(a);
                b = b.detail;
                hx(a, new Yw(b.code, b.message))
            });
            kx(a)
        },
        bx = function(a) {
            var b = Xw(a.childNodes);
            b && lx(a, b);
            null === a.Sb && mx(a)
        },
        mx = function(a) {
            if (u.MutationObserver) {
                var b = new MutationObserver(function(c) {
                    c = q(c);
                    for (var d = c.next(); !d.done; d = c.next())
                        if (d = d.value, "childList" === d.type && (d = Xw(d.addedNodes))) {
                            lx(a, d);
                            b.disconnect();
                            break
                        }
                });
                b.observe(a, Uw)
            }
        },
        ax = function(a) {
            a.P.addEventListener("volumechange", function() {
                a.tb.g.C(Ew.toString(), a.P.muted)
            })
        },
        lx = function(a, b) {
            if (null === a.Sb && b.hasAttribute("src")) {
                var c = b.getAttribute("src");
                a.Sb = new Pw(a.P,
                    c, b.hasAttribute("default"));
                new Mw(a.Sb, a.tb);
                c.includes("kind=asr") && I(J(), "act", "1")
            }
        },
        dx = function(a, b) {
            if (b !== a.Kd) {
                var c = (a.Kd = b) ? Wt(b) : null,
                    d = !!c && mw(c);
                I(J(), "umsem", d ? "1" : "0");
                d ? (b = vt(ow, b, Xt(c), 1E3 * wt[c], null), a.ca = vt(rw, [b]), a.ca.O("media_source_error", function(e) {
                    e = Yt("media_source_error", e.detail);
                    a.P.dispatchEvent(e)
                }), a.Hb = function() {
                    var e = a.ca;
                    e.A = 1E3 * a.P.currentTime;
                    uw(e)
                }, a.P.addEventListener("timeupdate", a.Hb), a.P.src = a.ca.l) : (gx(a), a.P.src = b);
                a.P.load()
            }
        },
        ex = function(a) {
            a.src &&
                hx(a, new Yw(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
            if (!a.Bb && !a.ob && a.ca) gx(a), a.P.src = "about:blank", a.P.load();
            else if (a.Bb && a.ob) {
                var b = Wt(a.Bb),
                    c = Wt(a.ob);
                if (c && mw(c))
                    if (b && mw(b)) {
                        var d = !!c && mw(c) && !!b && mw(b);
                        I(J(), "umsed", d ? "1" : "0");
                        c = vt(ow, a.ob, Xt(c), -1, null);
                        b = vt(ow, a.Bb, Xt(b), -1, null);
                        a.ca = vt(rw, [c, b]);
                        a.ca.O("media_source_error", function(e) {
                            e = Yt("media_source_error", e.detail);
                            a.P.dispatchEvent(e)
                        });
                        a.Hb = function() {
                            var e = a.ca;
                            e.A = 1E3 * a.P.currentTime;
                            uw(e)
                        };
                        a.P.addEventListener("timeupdate", a.Hb);
                        a.P.src = a.ca.l;
                        a.P.load()
                    } else hx(a, new Zw('Audio itag "' + b + '" not supported.'));
                else hx(a, new Zw('Video itag "' + c + '" not supported.'))
            }
        },
        ix = function(a) {
            for (var b = {}, c = q(Tw), d = c.next(); !d.done; b = {
                    Ba: b.Ba,
                    sc: b.sc
                }, d = c.next()) b.Ba = d.value, b.Ba in a.P && ("function" === typeof a.P[b.Ba] ? (b.sc = a.P[b.Ba].bind(a.P), Object.defineProperty(a, b.Ba, {
                set: function(e) {
                    return function(f) {
                        a.P[e.Ba] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return e.sc
                    }
                }(b)
            })) : Object.defineProperty(a,
                b.Ba, {
                    set: function(e) {
                        return function(f) {
                            a.P[e.Ba] = f
                        }
                    }(b),
                    get: function(e) {
                        return function() {
                            return a.P[e.Ba]
                        }
                    }(b)
                }))
        },
        jx = function(a) {
            Object.defineProperty(a, "error", {
                set: function() {},
                get: function() {
                    return a.P.error ? a.P.error : a.pd
                }
            })
        },
        kx = function(a) {
            a.P.style.width = qg();
            a.P.style.height = qg()
        };
    da.Object.defineProperties(cx.prototype, {
        Bb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        ob: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(cx, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Sw
            }
        }
    });
    u.customElements && (u.customElements.get("lima-video") || u.customElements.define("lima-video", cx));

    function nx() {
        var a = vt(Wv);
        a.initialize().then(function(b) {
            b && (b = Yt("initialized"), a.dispatchEvent(b))
        });
        return a
    }
    var px = function(a, b, c, d, e) {
        L.call(this);
        this.J = a;
        this.R = new P(b.url);
        this.h = c;
        this.o = e;
        this.H = b.g;
        this.va = d;
        (this.V = b.h) || this.R.l.remove("alr");
        I(J(), "sl_dv" + this.o, (null != this.V).toString());
        this.X = !this.V;
        this.nb = 0;
        this.g = new XMLHttpRequest;
        this.$ = this.T = this.Ob = this.D = this.l = 0;
        this.Y = .1;
        this.C = [];
        this.M = !1;
        this.aa = this.ua = this.da = null;
        this.Wa = !1;
        this.Pb = this.K = this.A = this.kb = this.ib = null;
        this.G = !1;
        if (this.B = Yu()) this.A = nx(), aj(this, this.A);
        ox(this)
    };
    t(px, L);
    var qx = function(a, b) {
            b = Yt("media_source_error", b);
            a.J.dispatchEvent(b)
        },
        rx = function(a, b) {
            qx(a, {
                code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        ox = function(a) {
            a.da = function() {
                sx(a);
                if (a.X) {
                    var b = a.g.responseText;
                    a.M = !b || b.length < a.H;
                    a.T = 0;
                    Fh("sl_cc" + a.o + "_" + a.l);
                    a.D++;
                    tx(a)
                }
            };
            a.ua = function() {
                return sx(a)
            };
            a.aa = function() {
                Fh("sl_ec" + a.o + "_" + a.l);
                rx(a, "Failed to load chunk " + a.l + " for stream " + a.o)
            };
            a.g.addEventListener("load", a.da);
            a.g.addEventListener("progress",
                a.ua);
            a.g.addEventListener("error", a.aa);
            a.h.addEventListener("updateend", function() {
                a.h.buffered.length && (a.Ob = a.h.buffered.end(0), a.B ? a.G && !a.h.updating && a.l === a.D && (Fh("sl_lc" + a.o), a.va()) : a.M && !a.h.updating && a.l === a.D && (Fh("sl_lc" + a.o), a.va()));
                !a.Wa && 1 < a.J.buffered.length && (I(J(), "dbr", "1"), a.Wa = !0)
            });
            a.h.addEventListener("update", function() {
                a.C.length && !a.h.updating && a.h.appendBuffer(a.C.shift())
            });
            a.h.addEventListener("error", function() {
                Fh("msb_err" + a.o);
                qx(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.o
                })
            });
            a.B ? (Xv(a.A) ? ux(a) : a.ib = rj(a.A, "initialized", function() {
                ux(a)
            }), a.kb = rj(a.A, "get_video_succeeded", function() {
                tx(a)
            })) : ux(a)
        },
        wx = function(a) {
            Fh("sl_rc" + a.o + "-" + a.l);
            var b = vx(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.B && (a.K = null, a.Pb = b)
        },
        sx = function(a) {
            if (400 <= a.g.status) rx(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
            else {
                if (!a.X) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && 0 <= b.indexOf("text/plain")) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.R = new P(a.g.response), a.l = 0, a.D = 0, a.nb++, ux(a));
                        return
                    }
                    a.X = !0;
                    Fh("sl_redc" + a.o);
                    I(J(), "sl_tr" + a.o, a.nb.toString())
                }
                a.R.l.remove("alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = xx(a, a.T), a.T = a.g.response.length, a.$ += b.byteLength, yx(a, b);
                if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = xx(a, 0), 0 < b.byteLength)) {
                    var c = a.g.responseText;
                    a.G = !c || c.length < a.H;
                    ew(a.A, b, new P(a.Pb), a.G)
                }
            }
        },
        yx =
        function(a, b) {
            0 < b.byteLength && (a.h.updating || a.C.length ? a.C.push(b) : a.h.appendBuffer(b))
        },
        xx = function(a, b) {
            a = a.g.response;
            for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
            return c.buffer
        },
        tx = function(a) {
            var b = Zt; - 1 != b && b < a.$ + a.H ? (a.J.pause(), Zt = -1, b = !1) : (b = a.D === a.l && !a.h.updating && !a.C.length, b = a.B ? !a.G && b && a.J.currentTime >= a.Y : !a.M && b && a.J.currentTime >= a.Y);
            b && (a.Y = a.Ob + .1, ux(a))
        },
        vx = function(a) {
            var b = a.B && a.K ? a.K + 1 : a.l * a.H;
            return Ws(a.R, "range", b + "-" + (b + a.H - 1)).toString()
        },
        ux = function(a) {
            if (a.B) {
                var b = new P(vx(a));
                cw(a.A, b).then(function(c) {
                    c ? (a.K = parseInt(c.endIndex, 10), a.G = c.isLastVideoChunk, yx(a, c.video), c = Yt("get_video_succeeded"), a.A.dispatchEvent(c), a.D++) : wx(a);
                    a.l++
                })
            } else wx(a), a.l++
        };
    px.prototype.N = function() {
        this.B && Xv(this.A) && this.A.close();
        this.g.removeEventListener("load", this.da);
        this.g.removeEventListener("progress", this.ua);
        this.g.removeEventListener("error", this.aa);
        zj(this.ib);
        zj(this.kb);
        L.prototype.N.call(this)
    };
    var Ax = function(a, b) {
        L.call(this);
        var c = this;
        this.o = a;
        this.D = b;
        this.ca = new MediaSource;
        this.C = [];
        this.h = [];
        this.g = this.l = null;
        this.B = !1;
        this.A = function() {
            return zx(c)
        };
        this.ca.addEventListener("sourceopen", this.A)
    };
    t(Ax, L);
    var Bx = function(a) {
            a.l && a.o.removeEventListener("timeupdate", a.l)
        },
        zx = function(a) {
            Fh("msmsw_oso");
            a.l = function() {
                if (!a.B)
                    for (var e = q(a.h), f = e.next(); !f.done; f = e.next()) tx(f.value)
            };
            a.o.addEventListener("timeupdate", a.l);
            for (var b = 0; b < a.D.length; b++) {
                var c = a.D[b];
                I(J(), "msmsw_mime" + b, c.mimeType);
                I(J(), "msmsw_cs" + b, c.g.toString());
                var d = a.ca.addSourceBuffer(c.mimeType);
                d ? (a.C.push(d), c = vt(px, a.o, c, d, function() {
                    a: if (!a.B) {
                        for (var e = q(a.h), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.B ? !f.G || f.h.updating ||
                                f.C.length : !f.M || f.h.updating || f.C.length) break a;
                        a.ca.endOfStream();
                        a.B = !0;
                        Bx(a)
                    }
                }, b), a.h.push(c)) : Fh("msmsw_sbf" + b)
            }
            I(J(), "msmsw_ns", a.C.length.toString())
        };
    Ax.prototype.N = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = q(this.h), b = a.next(); !b.done; b = a.next()) b.value.W();
        Bx(this);
        this.ca.removeEventListener("sourceopen", this.A);
        L.prototype.N.call(this)
    };
    var Cx = function() {
        throw Error("Do not instantiate directly");
    };
    Cx.prototype.g = null;
    Cx.prototype.getContent = function() {
        return this.content
    };
    Cx.prototype.toString = function() {
        return this.content
    };
    var Dx = function() {
        Cx.call(this)
    };
    Za(Dx, Cx);
    var Ex = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(Dx);
    /*
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
       */
    var Fx = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            })).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || Fx();
    var Gx = function(a) {
            this.g = a
        },
        Hx = function(a, b) {
            return Pb(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1
        },
        Ix = function(a) {
            if (Pb(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) {
                    "number" === typeof d && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var V = function() {
            this.D = "always";
            this.M = 4;
            this.A = 1;
            this.g = 0;
            this.L = !0;
            this.o = "en";
            this.K = !1;
            this.V = this.T = "";
            this.B = null;
            this.Y = this.R = -1;
            this.X = this.J = this.I = "";
            this.G = !1;
            this.h = !0;
            this.C = ut();
            this.H = {};
            try {
                this.aa = Nl(void 0)[0]
            } catch (a) {}
        },
        Jx = function(a) {
            a = Zc(a);
            jc(a) || (a = a.substring(0, 20));
            return a
        };
    l = V.prototype;
    l.setCompanionBackfill = function(a) {
        this.D = a
    };
    l.getCompanionBackfill = function() {
        return this.D
    };
    l.setNumRedirects = function(a) {
        this.M = a
    };
    l.getNumRedirects = function() {
        return this.M
    };
    l.setPpid = function(a) {
        this.$ = a
    };
    l.getPpid = function() {
        return this.$
    };
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.A = a ? 1 : 0)
    };
    l.setVpaidMode = function(a) {
        this.A = a
    };
    l.getVpaidMode = function() {
        return this.A
    };
    l.setAutoPlayAdBreaks = function(a) {
        this.L = a
    };
    l.isAutoPlayAdBreaks = function() {
        return this.L
    };
    l.setIsVpaidAdapter = function(a) {
        this.K = a
    };
    l.Fb = function() {
        return this.K
    };
    l.setLocale = function(a) {
        if (a = Cu(a)) this.o = a
    };
    l.Ge = function() {
        return this.o
    };
    l.setPlayerType = function(a) {
        this.T = Jx(a)
    };
    l.getPlayerType = function() {
        return this.T
    };
    l.setPlayerVersion = function(a) {
        this.V = Jx(a)
    };
    l.getPlayerVersion = function() {
        return this.V
    };
    var Kx = function(a) {
        if (null == a.B) {
            var b = {},
                c = (new P(E().location.href)).l;
            if (at(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.B = new Gx(b)
        }
        return a.B
    };
    l = V.prototype;
    l.setPageCorrelator = function(a) {
        this.R = a
    };
    l.setStreamCorrelator = function(a) {
        this.Y = a
    };
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.G = a
    };
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.G
    };
    l.Ue = function() {
        return this.h
    };
    l.setCookiesEnabled = function(a) {
        null != a && (this.h = a)
    };
    l.setSessionId = function(a) {
        this.C = a
    };
    l.setDisableFlashAds = function() {};
    l.getDisableFlashAds = function() {
        return !0
    };
    l.setFeatureFlags = function(a) {
        this.H = a
    };
    l.getFeatureFlags = function() {
        return this.H
    };
    V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
    V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
    V.prototype.getDisableFlashAds = V.prototype.getDisableFlashAds;
    V.prototype.setDisableFlashAds = V.prototype.setDisableFlashAds;
    V.prototype.setSessionId = V.prototype.setSessionId;
    V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
    V.prototype.isCookiesEnabled = V.prototype.Ue;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
    V.prototype.setStreamCorrelator = V.prototype.setStreamCorrelator;
    V.prototype.setPageCorrelator = V.prototype.setPageCorrelator;
    V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
    V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
    V.prototype.getPlayerType = V.prototype.getPlayerType;
    V.prototype.setPlayerType = V.prototype.setPlayerType;
    V.prototype.getLocale = V.prototype.Ge;
    V.prototype.setLocale = V.prototype.setLocale;
    V.prototype.isVpaidAdapter = V.prototype.Fb;
    V.prototype.setIsVpaidAdapter = V.prototype.setIsVpaidAdapter;
    V.prototype.isAutoPlayAdBreaks = V.prototype.isAutoPlayAdBreaks;
    V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
    V.prototype.getVpaidMode = V.prototype.getVpaidMode;
    V.prototype.setVpaidMode = V.prototype.setVpaidMode;
    V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
    V.prototype.getPpid = V.prototype.getPpid;
    V.prototype.setPpid = V.prototype.setPpid;
    V.prototype.getNumRedirects = V.prototype.getNumRedirects;
    V.prototype.setNumRedirects = V.prototype.setNumRedirects;
    V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
    V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
    var W = new V;
    var Lx = function(a) {
        B.call(this, a)
    };
    t(Lx, B);
    var Mx = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Nx = function(a, b) {
            b = void 0 === b ? 500 : b;
            L.call(this);
            this.h = a;
            this.g = null;
            this.B = {};
            this.A = 0;
            this.o = b;
            this.l = null
        };
    t(Nx, L);
    Nx.prototype.N = function() {
        this.B = {};
        this.l && (hf(this.h, "message", this.l), delete this.l);
        delete this.B;
        delete this.h;
        delete this.g;
        L.prototype.N.call(this)
    };
    var Px = function(a) {
            return "function" === typeof a.h.__tcfapi || null != Ox(a)
        },
        Sx = function(a, b) {
            var c = {
                    internalErrorState: 0
                },
                d = kb(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.o && (e = setTimeout(function() {
                e = 0;
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            Qx(a, "addEventListener", function(f) {
                f && (c = f, c.internalErrorState = Mx(c), Rx(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Qx(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
            })
        };
    Nx.prototype.addEventListener = function(a) {
        var b = {},
            c = kb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.o && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.o));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Mx(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Qx(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Nx.prototype.removeEventListener = function(a) {
        a && a.listenerId && Qx(this, "removeEventListener", null, a.listenerId)
    };
    var Qx = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
            else if (Ox(a)) {
                Tx(a);
                var e = ++a.A;
                a.B[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Ox = function(a) {
            if (a.g) return a.g;
            a.g = Wf(a.h, "__tcfapiLocator");
            return a.g
        },
        Tx = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, gf(a.h,
                "message", a.l))
        },
        Rx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Mx(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
        };

    function Ux(a) {
        var b = {};
        (new P(a)).l.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var Vx = function(a) {
            this.Gd = a.isGdprLoader || !1;
            this.uspString = a.uspString || "";
            var b = a.gdprApplies;
            this.h = "boolean" == typeof b ? b ? "1" : "0" : "number" != typeof b || 1 !== b && 0 !== b ? "string" != typeof b || "1" !== b && "0" !== b ? "" : "1" == b ? "1" : "0" : 1 == b ? "1" : "0";
            this.g = a.tcString || "";
            /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g))
        },
        Wx = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            this.g = a;
            this.h = new Vx(b)
        },
        Xx = function(a, b) {
            var c = new P(a);
            var d = c.g;
            (c = ic(c.h, "googleads.g.doubleclick.net") && Au("/pagead/(live/)?ads",
                d)) || (d = new Eu(a), c = d.h, d = Fu(d, d.g), c = !ic(c, ".g.doubleclick.net") && ic(c, "doubleclick.net") && Au("/(ad|pfad)[x|i|j]?/", d));
            c || (c = new P(a), d = c.g, c = ic(c.h, "doubleclick.net") && Au("/gampad/(live/)?ads", d));
            (c = c || "bid.g.doubleclick.net" == (new P(a)).h) || (c = new P(a), d = c.g, c = "ad.doubleclick.net" === c.h && Au("/dv3/adv", d));
            c || (c = new P(a), d = c.g, "pubads.g.doubleclick.net" === c.h && (Au("/ssai/", d) || Au("/ondemand/", d)));
            return new Wx(Ux(a), b)
        },
        Yx = function(a, b) {
            if (a.g.hasOwnProperty(b)) return a.g[b]
        },
        Zx = function(a) {
            var b,
                c;
            if (!(b = "1" == (null == (c = Yx(a, "ltd")) ? void 0 : c.toString()))) {
                var d;
                b = null == (d = Yx(a, "gdpr")) ? void 0 : d.toString();
                d = a.h.h;
                d = ("1" == d || "0" == d ? d : void 0 != b ? b : "").toLowerCase();
                if ("true" === d || "1" === d)
                    if (d = a.h.g, a = Yx(a, "gdpr_consent"), a = d && "tcunavailable" != d ? d : "tcunavailable" == d ? a || d : a || "", "tcunavailable" === a) var e = !1;
                    else {
                        if ((d = ws(a)) && a) {
                            var f = Je(d, Nr, 1);
                            d = Je(d, Gr, 2) || new Gr;
                            b = Ee(f, 9, 0);
                            c = Ee(f, 4, 0);
                            var g = Ee(f, 5, 0),
                                h = Fe(f, 10),
                                k = Fe(f, 11),
                                n = Ee(f, 16, ""),
                                m = Fe(f, 15),
                                v = {
                                    consents: xs(Be(f, 13), is),
                                    legitimateInterests: xs(Be(f,
                                        14), is)
                                },
                                r = {
                                    consents: xs(Be(f, 17), void 0),
                                    legitimateInterests: xs(Be(f, 18), void 0)
                                },
                                w = xs(Be(f, 12), js),
                                x = Ke(f, Er, 19);
                            f = {};
                            x = q(x);
                            for (var G = x.next(); !G.done; G = x.next()) {
                                G = G.value;
                                var la = Ee(G, 1, 0);
                                f[la] = f[la] || {};
                                for (var Qa = q(Be(G, 3)), Ad = Qa.next(); !Ad.done; Ad = Qa.next()) f[la][Ad.value] = Ee(G, 2, 0)
                            }
                            a = {
                                tcString: a,
                                tcfPolicyVersion: b,
                                gdprApplies: !0,
                                cmpId: c,
                                cmpVersion: g,
                                isServiceSpecific: h,
                                useNonStandardStacks: k,
                                publisherCC: n,
                                purposeOneTreatment: m,
                                purpose: v,
                                vendor: r,
                                specialFeatureOptins: w,
                                publisher: {
                                    restrictions: f,
                                    consents: xs(Be(d, 1), is),
                                    legitimateInterests: xs(Be(d, 2), is),
                                    customPurposes: {
                                        consents: xs(Be(d, 3)),
                                        legitimateInterests: xs(Be(d, 4))
                                    }
                                }
                            }
                        } else a = null;
                        if (a) {
                            var Sa = void 0 === Sa ? !1 : Sa;
                            if (Rx(a))
                                if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !Sa || "string" !== typeof a.tcString || !a.tcString.length) e = !0;
                                else {
                                    e = void 0 === e ? "755" : e;
                                    c: {
                                        if (a.publisher && a.publisher.restrictions && (Sa = a.publisher.restrictions["1"], void 0 !== Sa)) {
                                            Sa = Sa[void 0 === e ? "755" : e];
                                            break c
                                        }
                                        Sa = void 0
                                    }
                                    0 === Sa ? e = !1 : a.purpose &&
                                        a.vendor ? (Sa = a.vendor.consents, (e = !(!Sa || !Sa[void 0 === e ? "755" : e])) && a.purposeOneTreatment && ("DE" === a.publisherCC || "CH" === a.publisherCC) ? e = !0 : e && (e = a.purpose.consents, e = !(!e || !e["1"]))) : e = !0
                                }
                            else e = !1
                        } else e = !1
                    }
                else e = !0;
                b = !e
            }
            return b
        };
    var $x = "platform platformVersion architecture model uaFullVersion bitness".split(" "),
        ay = function() {
            var a = window;
            return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues($x).then(function(b) {
                var c = new zs;
                c = Ae(c, 1, b.platform);
                c = Ae(c, 2, b.platformVersion);
                c = Ae(c, 3, b.architecture);
                c = Ae(c, 4, b.model);
                c = Ae(c, 5, b.uaFullVersion);
                return Ae(c, 9, b.bitness)
            }) : null
        };
    var cy = function() {
            new Wx;
            ut();
            this.deviceId = "";
            this.g = this.referrer = null;
            by(this)
        },
        dy = function() {
            H(cy);
            var a = "h.3.482.0";
            W.Fb() && (a += "/vpaid_adapter");
            return a
        },
        by = function(a) {
            var b = ay();
            b && b.then(function(c) {
                a.g = $d(Oe(c))
            })
        };
    var ey = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var gy = function(a) {
            var b = Kx(W);
            if (b && Hx(b, "forceCustomPlayback") || W.Fb()) return !0;
            if ((Dd || ju()) && a) return !1;
            a = a && (Dd || ju() || ku(10)) && (W.getDisableCustomPlaybackForIOS10Plus() || Vh(Ki));
            return (Cd || Ed) && !a || Bd && (!Bd || !iu(hu, 4)) || fy() ? !0 : !1
        },
        hy = function(a) {
            return null == a ? !1 : W.Fb() ? !0 : Fd || Dd || ju() ? lu(a) ? Dd || ju() || ku(10) && W.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Bd && (!Bd || !iu(hu, 4)) || fy() ? !0 : !1
        },
        iy = function() {
            var a = Kx(W);
            return a && Hx(a, "disableOnScreenDetection") ? !1 : !Rm()
        },
        fy = function() {
            var a;
            (a = Sm()) || (H(cy), a = !1);
            return a
        };
    var jy = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = []
        },
        ky = {
            IMAGE: "Image",
            FLASH: "Flash",
            ALL: "All"
        };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType", ky, void 0);
    var ly = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType", ly, void 0);
    var my = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch"
    };
    y("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria", my, void 0);
    var oy = function(a, b) {
            b = void 0 === b ? new jy : b;
            this.h = a;
            this.g = b ? b : new jy;
            this.A = ny(ly, this.g.resourceType) ? this.g.resourceType : "All";
            this.l = ny(ky, this.g.creativeType) ? this.g.creativeType : "All";
            this.C = ny(my, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
            this.o = null != this.g.adSlotIds ? this.g.adSlotIds : [];
            this.B = "number" === typeof this.g.nearMatchPercent && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90
        },
        ry = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.g.allowCustom &&
                    (!jc(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.mainAdSequenceNumber) || d.g.mainAdSequenceNumber == d.g.sequenceNumber) && py(a, d) ? c.push(d) : (d = qy(a, d), null != d && !jc(d.getContent()) && c.push(d)))
            });
            return c
        },
        py = function(a, b) {
            var c;
            if (c = "Flash" != b.getContentType()) {
                if (c = "All" == a.A || a.A == b.g.resourceType) c = b.getContentType(), c = null == c ? !0 : "All" == a.l || a.l == c;
                c && (c = b.Bd(), c = 0 == a.o.length ? !0 : null != c ? a.o.includes(c) : !1)
            }
            if (c)
                if (b = b.g.size, (c = "IgnoreSize" == a.C) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width &&
                        c.height == b.height : !1), c) a = !0;
                else {
                    if (c = "SelectNearMatch" == a.C) c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.B / 100 * a.h.width || b < a.B / 100 * a.h.height ? !1 : !0;
                    a = c
                }
            else a = !1;
            return a
        },
        qy = function(a, b) {
            b = sy(b);
            return null == b ? null : b.find(function(c) {
                return py(a, c)
            }) || null
        },
        ny = function(a, b) {
            return null != b && Qb(a, b)
        };
    var X = {},
        ty = (X.creativeView = "creativeview", X.start = "start", X.midpoint = "midpoint", X.firstQuartile = "firstquartile", X.thirdQuartile = "thirdquartile", X.complete = "complete", X.mute = "mute", X.unmute = "unmute", X.pause = "pause", X.rewind = "rewind", X.resume = "resume", X.fullscreen = "fullscreen", X.exitFullscreen = "exitfullscreen", X.expand = "expand", X.collapse = "collapse", X.close = "close", X.acceptInvitation = "acceptinvitation", X.userInteraction = "userInteraction", X.adCanPlay = "adCanPlay", X.adStarted = "adStarted", X.abandon = "abandon",
            X.acceptInvitationLinear = "acceptinvitationlinear", X.engagedView = "engagedview", X.instreamAdComplete = "instreamAdComplete", X.skipShown = "skipshown", X.skippableStateChanged = "skippableStateChanged", X.skip = "skip", X.progress = "progress", X.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", X.annotation_start = "annotation_start", X.annotation_click = "annotation_click", X.annotation_close = "annotation_close", X.cta_annotation_shown = "cta_annotation_shown", X.cta_annotation_clicked = "cta_annotation_clicked", X.cta_annotation_closed =
            "cta_annotation_closed", X.replay = "replay", X.stop = "stop", X.autoplayDisallowed = "autoplayDisallowed", X.error = "error", X.mediaLoadTimeout = "mediaLoadTimeout", X.linearChanged = "linearChanged", X.click = "click", X.contentPauseRequested = "contentPauseRequested", X.contentResumeRequested = "contentResumeRequested", X.discardAdBreak = "discardAdBreak", X.updateAdsRenderingSettings = "updateAdsRenderingSettings", X.durationChange = "durationChange", X.expandedChanged = "expandedChanged", X.autoClose = "autoClose", X.userClose = "userClose",
            X.userRecall = "userRecall", X.prefetched = "prefetched", X.loaded = "loaded", X.init = "init", X.allAdsCompleted = "allAdsCompleted", X.adMetadata = "adMetadata", X.adBreakReady = "adBreakReady", X.adBreakFetchError = "adBreakFetchError", X.log = "log", X.volumeChange = "volumeChange", X.companionBackfill = "companionBackfill", X.companionInitialized = "companionInitialized", X.companionImpression = "companionImpression", X.companionClick = "companionClick", X.impression = "impression", X.interaction = "interaction", X.adProgress = "adProgress",
            X.adBuffering = "adBuffering", X.trackingUrlPinged = "trackingUrlPinged", X.measurable_impression = "measurable_impression", X.custom_metric_viewable = "custom_metric_viewable", X.viewable_impression = "viewable_impression", X.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", X.overlay_resize = "overlay_resize", X.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", X.overlay_unviewable_impression = "overlay_unviewable_impression", X.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", X.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", X.externalActivityEvent = "externalActivityEvent", X.adEvent = "adEvent", X.configure = "configure", X.remainingTime = "remainingTime", X.destroy = "destroy", X.resize = "resize", X.volume = "volume", X.authorIconClicked = "videoAuthorIconClicked", X.authorNameClicked = "videoAuthorClicked", X.videoClicked = "videoClicked", X.videoIconClicked = "videoIconClicked", X.learnMoreClicked = "videoLearnMoreClicked",
            X.muteClicked = "videoMuteClicked", X.titleClicked = "videoTitleClicked", X.skipShown = "SKIP_SHOWN", X.videoSkipClicked = "SKIPPED", X.unmuteClicked = "videoUnmuteClicked", X.vpaidEvent = "vpaidEvent", X.show_ad = "show_ad", X.video_card_endcap_collapse = "video_card_endcap_collapse", X.video_card_endcap_dismiss = "video_card_endcap_dismiss", X.video_card_endcap_impression = "video_card_endcap_impression", X.mediaUrlPinged = "mediaUrlPinged", X.breakStart = "breakstart", X.breakEnd = "breakend", X.omidReady = "omidReady", X.omidUnavailable =
            "omidUnavailable", X.omidAdSessionCompleted = "omidAdSessionCompleted", X.omidAdSessionAbandoned = "omidAdSessionAbandoned", X.verificationNotExecuted = "verificationNotExecuted", X.loadStart = "loadStart", X.seeked = "seeked", X.seeking = "seeking", X);
    var uy = function(a) {
        M.call(this);
        this.h = a || "goog_" + ad++;
        this.o = [];
        this.l = !1
    };
    t(uy, M);
    uy.prototype.connect = function() {
        for (this.l = !0; 0 != this.o.length;) {
            var a = this.o.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    var vy = function(a, b, c, d) {
        a.l ? a.sendMessage(b, c, d) : a.o.push({
            name: b,
            type: c,
            data: d
        })
    };
    uy.prototype.sendMessage = function() {};

    function wy(a) {
        a = du(a, Rm() ? "https" : window.location.protocol);
        if (Rm()) yy(a);
        else try {
            a && (ft(a) ? jt(a) : nt(a))
        } catch (b) {}
    }

    function yy(a) {
        (new xu).get({
            url: a,
            timeout: new $t
        }).then(function() {}, function() {})
    };
    var zy = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.l = b;
        this.g = c;
        this.o = a
    };
    t(zy, Error);
    l = zy.prototype;
    l.getAd = function() {
        return this.B
    };
    l.getInnerError = function() {
        return this.h
    };
    l.getMessage = function() {
        return this.l
    };
    l.getErrorCode = function() {
        return this.g
    };
    l.Ed = function() {
        return 1E3 > this.g ? this.g : 900
    };
    l.getType = function() {
        return this.o
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    var Ay = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    Ay.prototype.getErrorCode = function() {
        return this.errorCode
    };
    Ay.prototype.getMessage = function() {
        return this.message
    };
    var By = new Ay("Failed to initialize ad playback element before starting ad playback.", 400),
        Cy = new Ay("The provided {0} information: {1} is invalid.", 1101);

    function Dy(a, b, c) {
        var d = void 0 === b ? null : b;
        if (!(d instanceof zy)) {
            var e = a.errorCode,
                f = a.message,
                g = Array.prototype.slice.call(arguments, 2);
            if (0 < g.length)
                for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
            e = new zy("adPlayError", f, e);
            e.h = d;
            d = e
        }
        return d
    };
    var Ey = function() {
            this.errorMessage = this.info = this.error = this.Zc = null
        },
        Fy = function(a, b) {
            a.Zc = b;
            return a
        };
    Ey.prototype.getError = function() {
        return this.error
    };
    var Gy = function(a, b) {
        a.errorMessage = b;
        return a
    };
    Ey.prototype.getErrorMessage = function() {
        return this.errorMessage
    };
    var Hy = function() {
            this.cache = {}
        },
        Ly = function() {
            Iy || (Jy = Og(Bg), Ky = Og(Ag), Iy = new Hy);
            return Iy
        },
        My = function(a) {
            var b = C(a, 3);
            if (!b) return 3;
            if (void 0 === C(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Ky ? 2 : a > b + 36E5 * Jy ? 1 : 0
        };
    Hy.prototype.get = function(a, b) {
        var c = new Ey;
        if (this.cache[a]) return Fy(c, this.cache[a]);
        var d = "";
        try {
            d = b.getItem("_GESPSK-" + a)
        } catch (e) {
            return c.error = 6, Gy(c, e.message)
        }
        if (!d) return new Ey;
        b = null;
        try {
            b = xe(Gk, d ? JSON.parse(d) : null)
        } catch (e) {
            return a = new Ey, a.error = 5, Gy(a, e.message)
        }
        b && (this.cache[a] = b);
        return Fy(new Ey, b)
    };
    Hy.prototype.set = function(a, b) {
        var c = C(a, 1),
            d = "_GESPSK-" + c,
            e = Fy(new Ey, a);
        try {
            b.setItem(d, Oe(a))
        } catch (f) {
            e.info = 7, Gy(e, f.message)
        }
        this.cache[c] = a;
        return e
    };
    var Iy = null,
        Jy = 24,
        Ky = 72;
    var Ny = function() {
        this.g = function() {
            return []
        }
    };

    function Oy(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        if (Math.random() < Og(Dg)) {
            var e = {},
                f = Object,
                g = f.assign;
            e.c = String(a);
            a = String;
            var h = window;
            if ("number" !== typeof h.goog_pvsid) try {
                Object.defineProperty(h, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (k) {}
            fg(g.call(f, (e.pc = a(Number(h.goog_pvsid) || -1), e.em = c, e.lid = b, e.eids = H(Ny).g().join(), e), d), "esp")
        }
    };

    function Py(a) {
        if (!a) return null;
        var b = new Ck,
            c = Og(Cg),
            d = [],
            e = RegExp("^_GESPSK-(.+)$");
        try {
            for (var f = 0; f < a.length; f++) {
                var g = (e.exec(a.key(f)) || [])[1];
                g && d.push(g)
            }
        } catch (k) {}
        d = q(d);
        for (e = d.next(); !e.done; e = d.next())
            if (e = e.value, f = Ly().get(e, a), f.getError()) Oy(f.getError(), e, f.getErrorMessage());
            else if (f = f.Zc)
            if (g = My(f), 0 === g || 1 === g)
                if (g = C(f, 2), 0 <= c && g && g.length > c) Oy(12, e);
                else {
                    var h = Gk;
                    g = Ke(b, h, 2);
                    f = f ? f : new h;
                    h = Be(b, 2);
                    g.push(f);
                    h.push(Le(f, !1));
                    Oy(19, e)
                } Ke(b, Gk, 2).length ? (a = new ce, oe(a, 1, Ke(b,
            Dk, 1), Fk), oe(a, 2, Ke(b, Gk, 2), Hk), Qe(b, a), b = he(a), b = Zd(b, 2)) : b = null;
        return b
    };
    var Qy = function() {
        L.apply(this, arguments);
        this.g = [];
        this.h = [];
        this.l = []
    };
    t(Qy, L);
    Qy.prototype.N = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.h.length = 0;
        L.prototype.N.call(this)
    };
    var Ry = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Sy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, Sy.prototype);
        this.name = "InputError"
    };
    t(Sy, Error);
    var Ty = function() {
            var a = this;
            this.C = this.o = null;
            this.B = -1;
            this.h = new Ry;
            this.g = !1;
            this.h.promise.then(function() {
                -1 !== a.B && (a.C = $g() - a.B)
            }, function() {})
        },
        Uy = function() {
            Ty.apply(this, arguments)
        };
    t(Uy, Ty);
    var Vy = function(a, b) {
            a.g || (a.g = !0, a.o = b, a.h.resolve(b))
        },
        Wy = function(a) {
            a.g || (a.g = !0, a.o = null, a.h.resolve(null))
        };
    da.Object.defineProperties(Uy.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.h.promise
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g
            }
        }
    });
    var Xy = function(a) {
        Ty.call(this);
        this.l = a
    };
    t(Xy, Ty);
    da.Object.defineProperties(Xy.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.A
            }
        }
    });
    var Yy = function(a) {
        Xy.call(this, a);
        this.l = a
    };
    t(Yy, Xy);
    da.Object.defineProperties(Yy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.o
            }
        }
    });

    function Zy(a, b) {
        return ab(this, function d() {
            var e, f, g;
            return Da(d, function(h) {
                if (1 == h.g) return e = 0 < b ? a.filter(function(k) {
                    return !k.qd
                }) : a, wa(h, Promise.all(e.map(function(k) {
                    return k.xd.promise
                })), 2);
                if (3 != h.g) {
                    if (a.length === e.length) return h.return(0);
                    f = a.filter(function(k) {
                        return k.qd
                    });
                    g = $g();
                    return wa(h, Promise.race([Promise.all(f.map(function(k) {
                        return k.xd.promise
                    })), new Promise(function(k) {
                        return void setTimeout(k, b)
                    })]), 3)
                }
                return h.return($g() - g)
            })
        })
    }
    var $y = function(a, b) {
        b = void 0 === b ? 0 : b;
        L.call(this);
        this.id = a;
        this.D = b;
        this.g = new Qy;
        this.C = !1;
        this.J = -1;
        aj(this, this.g)
    };
    t($y, L);
    $y.prototype.start = function() {
        return ab(this, function b() {
            var c = this,
                d, e, f, g;
            return Da(b, function(h) {
                switch (h.g) {
                    case 1:
                        if (c.C) return h.return();
                        c.C = !0;
                        h.h = 2;
                        return wa(h, Zy(c.g.h, c.D), 4);
                    case 4:
                        c.J = h.A;
                        if (c.Ra()) {
                            h.g = 5;
                            break
                        }
                        for (var k = 0, n = q(c.g.l), m = n.next(); !m.done; m = n.next()) {
                            if (null === m.value.l.o) throw Error("missing input: " + c.id + "/" + k);
                            ++k
                        }
                        d = q(c.g.g);
                        for (e = d.next(); !e.done; e = d.next()) f = e.value, f.B = $g();
                        return wa(h, c.A(), 5);
                    case 5:
                        h.g = 0;
                        h.h = 0;
                        break;
                    case 2:
                        g = xa(h);
                        if (c.Ra()) return h.return();
                        if (!(g instanceof Sy) && g instanceof Error && (c.G(c.id, g), c.g.g.length))
                            for (k = new Sy(g.message), n = q(c.g.g), m = n.next(); !m.done; m = n.next())
                                if (m = m.value, !m.l) {
                                    var v = k;
                                    m.g = !0;
                                    m.A = v;
                                    m.h.reject(v)
                                } h.g = 0
                }
            })
        })
    };
    var az = function(a) {
            var b = new Uy;
            a.g.g.push(b);
            return b
        },
        bz = function(a, b) {
            a.g.h.push({
                qd: !1,
                xd: b
            });
            return new Yy(b)
        };
    var cz = function(a, b) {
        $y.call(this, a);
        this.id = a;
        this.G = b
    };
    t(cz, $y);
    var dz = function(a, b, c, d) {
        cz.call(this, 655, d);
        this.Fa = a;
        this.B = b;
        this.H = c;
        this.l = az(this);
        this.o = az(this);
        this.h = Og(zg)
    };
    t(dz, cz);
    dz.prototype.A = function() {
        var a, b = Ly().get(this.Fa, this.H);
        if (b.getError()) Oy(b.getError(), this.Fa, b.getErrorMessage()), Wy(this.l), Wy(this.o);
        else {
            var c = Date.now();
            if (b = b.Zc)
                if (this.h && (null == C(b, 8) && (Oy(33, this.Fa), Ae(b, 8, this.h)), null == C(b, 7) && (Oy(34, this.Fa), Ae(b, 7, Math.round(Date.now() / 1E3 / 60)))), null != C(b, 3) || Oy(35, this.Fa), this.h) {
                    var d = Ce(b, 8),
                        e = null !== (a = C(b, 7)) && void 0 !== a ? a : c;
                    d < this.h && Ae(b, 8, Math.min(d + Number((this.h * (c / 1E3 / 60 - e) / 60).toFixed(3)), this.h));
                    1 > Ce(b, 8) ? (c = {}, Oy(22, this.Fa, null,
                        (c.t = String(e), c.cr = String(d), c.cs = String(My(b)), c)), Wy(this.l), Wy(this.o)) : (Vy(this.l, this.B), Vy(this.o, b))
                } else Vy(this.l, this.B), Vy(this.o, b);
            else Vy(this.l, this.B), b = this.o, d = new Gk, d = Ae(d, 1, this.Fa), d = Ae(d, 8, this.h), c = Ae(d, 3, c), Vy(b, c)
        }
    };

    function ez(a, b, c, d) {
        Oy(18, a);
        try {
            var e = $g();
            Og(zg) && (Ae(b, 8, Number((Ce(b, 8) - 1).toFixed(3))), Ae(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Oy(29, a, null, {
                    delta: String($g() - e)
                });
                Ae(b, 3, Date.now());
                fz(a, b, f, d);
                return b
            }).catch(function(f) {
                fz(a, b, C(b, 2), d);
                Oy(28, a, gz(f));
                return b
            })
        } catch (f) {
            return fz(a, b, C(b, 2), d), Oy(1, a, gz(f)), Promise.resolve(b)
        }
    }
    var fz = function(a, b, c, d) {
            "string" !== typeof c ? Oy(21, a) : c || Oy(20, a);
            Ae(b, 2, c);
            b = Ly().set(b, d);
            b.getErrorMessage() ? Oy(b.info, a, b.getErrorMessage()) : Oy(27, a)
        },
        gz = function(a) {
            return "string" === typeof a ? a : a instanceof Error ? a.message : null
        };
    var hz = function(a, b, c, d) {
        cz.call(this, 658, d);
        this.H = c;
        this.h = az(this);
        this.l = az(this);
        this.o = az(this);
        this.B = bz(this, a);
        this.K = bz(this, b)
    };
    t(hz, cz);
    hz.prototype.A = function() {
        var a = this;
        if (this.B.value) {
            var b = function(g) {
                    Vy(a.h, {
                        id: C(g, 1),
                        yc: C(g, 2)
                    })
                },
                c = this.B.value,
                d = this.K.value,
                e = C(d, 1),
                f = My(d);
            switch (f) {
                case 0:
                    Oy(24, e);
                    break;
                case 1:
                    Oy(25, e);
                    break;
                case 2:
                    Oy(26, e);
                    break;
                case 3:
                    Oy(9, e);
                    break;
                case 4:
                    Oy(23, e)
            }
            switch (f) {
                case 0:
                    b(d);
                    iz(this);
                    break;
                case 1:
                    b(d);
                    Vy(this.l, c);
                    Vy(this.o, d);
                    break;
                case 3:
                case 2:
                case 4:
                    Ae(d, 2, null), ez(e, d, c, this.H).then(b), iz(this)
            }
        } else Wy(this.h), iz(this)
    };
    var iz = function(a) {
        Wy(a.l);
        Wy(a.o)
    };

    function jz() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                hf(a, "load", d)
            };
            gf(a, "load", d)
        })
    };
    var kz = function(a, b, c, d) {
        cz.call(this, 662, d);
        this.o = c;
        this.h = bz(this, a);
        this.l = bz(this, b)
    };
    t(kz, cz);
    kz.prototype.A = function() {
        var a = this;
        this.l.value && this.h.value && jz().then(function() {
            var b = a.l.value;
            ez(C(b, 1), b, a.h.value, a.o)
        })
    };
    var lz = function() {
        L.apply(this, arguments);
        this.g = []
    };
    t(lz, L);
    lz.prototype.N = function() {
        L.prototype.N.call(this);
        this.g.length = 0
    };

    function mz(a, b, c, d) {
        return ab(this, function f() {
            var g, h, k, n, m;
            return Da(f, function(v) {
                if (1 == v.g) {
                    g = new dz(a, b, c, d);
                    h = new hz(g.l, g.o, c, d);
                    k = new kz(h.l, h.o, c, d);
                    n = new lz;
                    for (var r = q([g, h, k]), w = r.next(); !w.done; w = r.next()) w = w.value, aj(n, w), n.g.push(w);
                    if (n.g.length)
                        for (r = q(n.g), w = r.next(); !w.done; w = r.next()) w.value.start();
                    return wa(v, h.h.promise, 2)
                }
                m = v.A;
                return v.return(m ? m : {
                    id: a,
                    yc: null
                })
            })
        })
    };
    var nz = function(a, b) {
        this.B = b;
        this.l = [];
        this.h = [];
        this.g = [];
        a = q(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    nz.prototype.push = function(a) {
        var b = a.id;
        a = a.collectorFunction;
        if ("string" !== typeof b) Oy(37, "invalid-id");
        else if ("function" !== typeof a) Oy(14, b);
        else {
            var c = {};
            Oy(17, b, null, (c.api = "1", c));
            b = mz(b, a, this.B, this.o);
            this.l.push(b);
            a = q(this.h);
            for (c = a.next(); !c.done; c = a.next()) b.then(c.value)
        }
    };
    var oz = function(a, b) {
        a.h.push(b);
        a = q(a.l);
        for (var c = a.next(); !c.done; c = a.next()) c.value.then(b)
    };
    nz.prototype.o = function(a, b) {
        for (var c = q(this.g), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };

    function pz(a, b, c, d) {
        var e;
        if (b) {
            var f = Of();
            var g = window;
            g = Lf(g.top) ? g.top : null;
            f === g || Ng(yg) ? a.encryptedSignalProviders instanceof nz ? (d && oz(a.encryptedSignalProviders, d), a.encryptedSignalProviders.g.push(c)) : (f = new nz(null !== (e = a.encryptedSignalProviders) && void 0 !== e ? e : [], b), a.encryptedSignalProviders = f, d && oz(f, d), f.g.push(c)) : Oy(16, "")
        } else Oy(15, "")
    }

    function qz(a, b, c, d) {
        var e = new Map;
        b = b.map(function(f) {
            var g = f.Fa;
            return new Promise(function(h) {
                e.set(g, h)
            })
        });
        pz(a, c, d, function(f) {
            var g = f.yc;
            f = f.id;
            var h;
            return void(null === (h = e.get(f)) || void 0 === h ? void 0 : h({
                yc: g,
                id: f
            }))
        });
        return b
    };
    var rz = function() {
        return u.googletag || (u.googletag = {})
    };

    function sz(a) {
        if (!a || Zx(a)) return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }

    function tz(a, b) {
        a = sz(a);
        pz(rz(), a, function() {}, b)
    }

    function uz(a, b) {
        return (b = sz(b)) && 0 != a.length ? qz(rz(), a, b, function() {}) : null
    };
    /*
       
       
        Copyright Mathias Bynens <http://mathiasbynens.be/>
       
        Permission is hereby granted, free of charge, to any person obtaining
        a copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
       
        The above copyright notice and this permission notice shall be
        included in all copies or substantial portions of the Software.
       
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
        OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
        WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       */
    var vz = function(a, b) {
        return 0 == a.indexOf(b) ? a.substr(b.length) : null
    };
    var wz = function(a) {
        try {
            var b = new P(a);
            if (!b.h.includes(".cdn.ampproject.org")) return null;
            var c = b.g.split("/").slice(1);
            if (2 > c.length) return a;
            var d = "s" == c[1];
            if (d && 3 > c.length) return null;
            c = d ? c.slice(2) : c.slice(1);
            var e = decodeURIComponent(c[0]) + "/";
            return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/")
        } catch (f) {
            return null
        }
    };
    var xz = function() {
        M.call(this);
        this.G = !1;
        this.g = null;
        this.A = this.D = this.K = !1;
        this.h = 0;
        this.o = [];
        this.C = !1;
        this.R = this.M = Infinity;
        this.l = 0;
        this.J = new ru(this);
        aj(this, this.J);
        this.H = {}
    };
    t(xz, M);
    var zz = function(a, b) {
            null == b || a.G || (a.g = b, yz(a), a.G = !0)
        },
        Bz = function(a) {
            null != a.g && a.G && (Az(a), a.G = !1, a.D = !1, a.A = !1, a.h = 0, a.o = [], a.C = !1)
        },
        yz = function(a) {
            Az(a);
            !(a.g instanceof M) && "ontouchstart" in document.documentElement && Fd ? (a.H = {
                touchstart: function(b) {
                    a.D = !0;
                    a.h = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.K = !0);
                    a.C = Cz(a, b.touches) || 1 != b.touches.length;
                    a.C ? (a.M = Infinity, a.R = Infinity) : (a.M = b.touches[0].clientX, a.R = b.touches[0].clientY);
                    b = b.touches;
                    a.o = [];
                    for (var c = 0; c < b.length; c++) a.o.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.h = b.touches.length;
                    if (!ku(8) || Math.pow(b.changedTouches[0].clientX - a.M, 2) + Math.pow(b.changedTouches[0].clientY - a.R, 2) > Math.pow(5, 2)) a.A = !0
                },
                touchend: function(b) {
                    return void Dz(a, b)
                }
            }, Gb(a.H, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.J.O(a.g, "click", a.T)
        },
        Az = function(a) {
            a.J.Ua(a.g, "click", a.T);
            Gb(a.H, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.H = {}
        },
        Dz = function(a, b) {
            !a.D || 1 != a.h || a.A || a.K || a.C || !Cz(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void Ez(a)
                },
                300));
            a.h = b.touches.length;
            0 == a.h && (a.D = !1, a.A = !1, a.o = []);
            a.K = !1
        };
    xz.prototype.T = function() {
        Ez(this)
    };
    var Cz = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.o.includes(b[c].identifier)) return !0;
            return !1
        },
        Ez = function(a) {
            a.l = 0;
            a.dispatchEvent(new bj("click"))
        };
    xz.prototype.N = function() {
        Bz(this);
        M.prototype.N.call(this)
    };
    var Fz = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [
            []
        ]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (239 < h && 365 > h) {
                    k = d[f++];
                    var n = d[f++],
                        m = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (k & 63) << 6 | n & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    Fz.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.482.0" == c[1] || 2 <= c.length && "3.482.0" == c[2] ? !0 : !1
        })
    };
    var Gz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Hz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Iz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
            101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
        ],
        Jz = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Kz = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
                50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        Lz = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Mz = new Fz(Gz, Jz, !1),
        Nz = new Fz(Gz, Kz, !0),
        Oz = new Fz(Hz, Jz, !1),
        Pz = new Fz(Hz, Kz, !0),
        Qz = new Fz(Iz, Jz, !1),
        Rz = new Fz([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
            121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1),
        Sz = new Fz(Gz, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44,
                51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ], !0),
        Tz = new Fz(Gz, Lz, !1),
        Uz = new Fz(Iz, Lz, !1),
        Jb = {
            hg: Mz,
            fg: Nz,
            Bg: Oz,
            Ag: Pz,
            ig: Qz,
            fh: Rz,
            gg: Sz,
            Lg: Tz,
            Mg: Uz
        };

    function Vz(a) {
        for (var b = null, c = 0; c < a.length; c++)
            if (b = a[c], Ib(function(d) {
                    return d.match(b.src)
                })) return b;
        return null
    };
    var Wz = function() {
            var a = E(),
                b = document;
            return new P(a.parent == a ? a.location.href : b.referrer)
        },
        Xz = function(a, b) {
            Ws(a, "url", "");
            try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                Ws(a, "url", d)
            } catch (g) {}
            return a.toString()
        };
    var Yz = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    Yz.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == u.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = dy();
            a = Zh().sort().join(",");
            jc(Zc(a)) || (b.e = a);
            b = Zz(this, b);
            var d = new P("http://pagead2.googlesyndication.com/pagead/gen_204");
            Gb(b, function(e, f) {
                Ws(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = Wz();
            Js(d, b.o);
            b = d.toString();
            a = d.l.get("url");
            null != a && Ic() && 2083 < b.length && (b = Xz(d, a));
            wy(b)
        }
    };
    var Zz = function(a, b) {
            b.id = "ima_html5";
            var c = Wz();
            b.c = a.h;
            b.domain = c.h;
            return b
        },
        $z = function() {
            return H(Yz)
        };
    var aA = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        bj.call(this, a);
        this.ha = b;
        this.la = c;
        this.Mb = d;
        this.Jd = e
    };
    t(aA, bj);
    aA.prototype.toString = function() {
        return ""
    };
    var bA = function(a) {
        this.g = a
    };
    l = bA.prototype;
    l.getTotalAds = function() {
        return this.g.totalAds
    };
    l.getMaxDuration = function() {
        return this.g.maxDuration
    };
    l.getAdPosition = function() {
        return this.g.adPosition
    };
    l.getPodIndex = function() {
        return this.g.podIndex
    };
    l.getTimeOffset = function() {
        return this.g.timeOffset
    };
    l.getIsBumper = function() {
        return this.g.isBumper
    };
    bA.prototype.getIsBumper = bA.prototype.getIsBumper;
    bA.prototype.getTimeOffset = bA.prototype.getTimeOffset;
    bA.prototype.getPodIndex = bA.prototype.getPodIndex;
    bA.prototype.getAdPosition = bA.prototype.getAdPosition;
    bA.prototype.getMaxDuration = bA.prototype.getMaxDuration;
    bA.prototype.getTotalAds = bA.prototype.getTotalAds;
    var cA = function(a) {
        this.g = a
    };
    l = cA.prototype;
    l.getContent = function() {
        return this.g.content
    };
    l.getContentType = function() {
        return this.g.contentType
    };
    l.getWidth = function() {
        return this.g.size.width
    };
    l.getHeight = function() {
        return this.g.size.height
    };
    l.Bd = function() {
        return this.g.adSlotId
    };
    var sy = function(a) {
        return (a = a.g.backupCompanions) ? a.map(function(b) {
            return new cA(b)
        }) : []
    };
    cA.prototype.getAdSlotId = cA.prototype.Bd;
    cA.prototype.getHeight = cA.prototype.getHeight;
    cA.prototype.getWidth = cA.prototype.getWidth;
    cA.prototype.getContentType = cA.prototype.getContentType;
    cA.prototype.getContent = cA.prototype.getContent;
    var dA = function(a, b) {
        this.h = a;
        this.g = b
    };
    dA.prototype.getAdIdValue = function() {
        return this.h
    };
    dA.prototype.getAdIdRegistry = function() {
        return this.g
    };
    dA.prototype.getAdIdRegistry = dA.prototype.getAdIdRegistry;
    dA.prototype.getAdIdValue = dA.prototype.getAdIdValue;
    var Y = function(a) {
        this.g = a
    };
    Y.prototype.getAdId = function() {
        return this.g.adId
    };
    Y.prototype.getCreativeAdId = function() {
        return this.g.creativeAdId
    };
    Y.prototype.getCreativeId = function() {
        return this.g.creativeId
    };
    var eA = function(a) {
        return a.g.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.g.adSystem
    };
    l.getAdvertiserName = function() {
        return this.g.advertiserName
    };
    l.getApiFramework = function() {
        return this.g.apiFramework
    };
    l.getWrapperAdIds = function() {
        return this.g.adWrapperIds
    };
    l.getWrapperCreativeIds = function() {
        return this.g.adWrapperCreativeIds
    };
    l.getWrapperAdSystems = function() {
        return this.g.adWrapperSystems
    };
    l.isLinear = function() {
        return this.g.linear
    };
    l.isSkippable = function() {
        return this.g.skippable
    };
    l.getContentType = function() {
        return this.g.contentType
    };
    l.Fe = function() {
        return this.g.description
    };
    l.He = function() {
        return this.g.title
    };
    l.getDuration = function() {
        return this.g.duration
    };
    l.getVastMediaWidth = function() {
        return this.g.vastMediaWidth
    };
    l.getVastMediaHeight = function() {
        return this.g.vastMediaHeight
    };
    l.getWidth = function() {
        return this.g.width
    };
    l.getHeight = function() {
        return this.g.height
    };
    l.getUiElements = function() {
        return this.g.uiElements
    };
    l.getMinSuggestedDuration = function() {
        return this.g.minSuggestedDuration
    };
    l.getAdPodInfo = function() {
        return new bA(this.g.adPodInfo)
    };
    l.getCompanionAds = function(a, b, c) {
        if (!this.g.companions) return [];
        var d = this.g.companions.map(function(e) {
            return new cA(e)
        });
        return ry(new oy(new mf(a, b), c), d)
    };
    l.getTraffickingParameters = function() {
        return Bu(Zc(this.g.traffickingParameters))
    };
    l.getTraffickingParametersString = function() {
        return this.g.traffickingParameters
    };
    l.getVastMediaBitrate = function() {
        return this.g.vastMediaBitrate
    };
    l.getMediaUrl = function() {
        return this.g.mediaUrl
    };
    l.getSurveyUrl = function() {
        return this.g.surveyUrl
    };
    l.getDealId = function() {
        return this.g.dealId
    };
    l.Ie = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new dA(a.adIdValue, a.adIdRegistry)
        })
    };
    l.getUniversalAdIdValue = function() {
        return this.g.universalAdIdValue
    };
    l.getUniversalAdIdRegistry = function() {
        return this.g.universalAdIdRegistry
    };
    l.getSkipTimeOffset = function() {
        return this.g.skipTimeOffset
    };
    l.isUiDisabled = function() {
        return this.g.disableUi
    };
    Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.Ie;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.He;
    Y.prototype.getDescription = Y.prototype.Fe;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var fA = null,
        gA = function() {
            M.call(this);
            this.g = null;
            this.D = new ru(this);
            aj(this, this.D);
            this.h = new Map;
            this.o = new Map;
            this.l = this.A = !1;
            this.C = null
        },
        hA;
    t(gA, M);
    var iA = function() {
            null == fA && (fA = new gA);
            return fA
        },
        ur = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && vy(a.g, "activityMonitor", "viewabilityMeasurement", d)
        };
    gA.prototype.destroy = function() {
        this.D.Ua(this.g, "activityMonitor", this.G);
        this.l = !1;
        this.h.clear();
        this === hA && (hA = null)
    };
    gA.prototype.N = function() {
        this.destroy();
        M.prototype.N.call(this)
    };
    gA.prototype.init = function(a) {
        if (!this.l) {
            if (this.g = a || null) this.D.O(this.g, "activityMonitor", this.G), jA(this);
            if (!(u.ima && u.ima.video && u.ima.video.client && u.ima.video.client.tagged)) {
                y("ima.video.client.sdkTag", !0, void 0);
                var b = u.document;
                a = wf(document, "SCRIPT");
                var c = hc(cc(dc("https://s0.2mdn.net/instream/video/client.js")));
                a.src = bf(c);
                df(a);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            El();
            H(kr).J = W.g;
            this.A = !0;
            H(kr).l = !0;
            this.C = null;
            a = H(kr);
            b = "h" == Kq(a) || "b" == Kq(a);
            c = !(N(), !1);
            b && c && (a.L = !0, a.G = new Ro);
            this.l = !0
        }
    };
    var lA = function(a) {
            if (null == a) return !1;
            if ((Cd || Ed) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            a = kA(a);
            var b = window.screen.availHeight || window.screen.height;
            return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
        },
        kA = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                "function" === typeof a.getBoundingClientRect && Bf( of (a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        mA = function(a, b, c, d, e) {
            e =
                void 0 === e ? {} : e;
            if (a.l) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.C) return a.C(b, c, e);
                if (a = d ? a.o.get(d) : W.l) null == e.opt_fullscreen && (e.opt_fullscreen = lA(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return bl.fb(469, Xa(xr, b, c, e), void 0) || {}
            }
            return {}
        },
        nA = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.o.set(c, b);
            if (Vh(Oi)) try {
                Ak(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        vy(a.g, "activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
            0 != W.g && vr(H(kr), c, a);
            return c
        },
        oA = function(a, b, c) {
            if (c) a.h.get(c) == b && a.h.delete(c);
            else {
                var d = [];
                a.h.forEach(function(e, f) {
                    e == b && d.push(f)
                });
                d.forEach(a.h.delete, a.h)
            }
        },
        qr = function(a, b) {
            a = a.h.get(b);
            return "function" === typeof a ? a() : {}
        },
        jA = function(a) {
            if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                vy(a.g, "activityMonitor", "pageSignals", b)
            }
        };
    gA.prototype.G = function(a) {
        var b = a.la,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.ha) {
            case "getPageSignals":
                jA(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = mA(this, e, c, a, f);
                vy(this.g, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, Pb(b, "isFullscreen") && (e = b.isFullscreen), Pb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, $z().report(43, {
                    step: "beforeLookup",
                    logid: b,
                    time: Date.now()
                })), c.engagementString = pA(this, a, e), this.g && vy(this.g, "activityMonitor", "engagement", c)
        }
    };
    var pA = function(a, b, c) {
        var d = b ? a.o.get(b) : W.l;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = zk(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Xc(e.name, 12) + ";" + Xc(e.message, 40)
        }
        return c
    };
    y("ima.common.getVideoMetadata", function(a) {
        return qr(iA(), a)
    }, void 0);
    y("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        ur(iA(), a, b)
    }, void 0);
    var qA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("about:blank")));
    gc(qA);
    var rA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("javascript:undefined")));
    gc(rA);
    var sA = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        bj.call(this, a);
        this.l = b;
        this.g = c
    };
    t(sA, bj);
    sA.prototype.getAd = function() {
        return this.l
    };
    sA.prototype.getAdData = function() {
        return this.g
    };
    var tA = function() {
            this.loadVideoTimeout = 8E3;
            this.autoAlign = !0;
            this.bitrate = -1;
            this.uiElements = null;
            this.enablePreloading = this.disableClickThrough = !1;
            this.mimeTypes = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.playAdsAfterTime = -1;
            this.useVideoAdUi = !0;
            this.disableUi = !1
        },
        uA = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.disableClickThrough = !0);
            return c
        };
    tA.prototype.append = function(a) {
        if (a) {
            this.autoAlign = a.autoAlign || this.autoAlign;
            var b = ed(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
            b = ed(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = ed(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    };
    y("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1, void 0);
    var vA = function(a, b) {
        this.h = a[u.Symbol.iterator]();
        this.l = b;
        this.o = 0
    };
    vA.prototype[Symbol.iterator] = function() {
        return this
    };
    vA.prototype.next = function() {
        var a = this.h.next();
        return {
            value: a.done ? void 0 : this.l.call(void 0, a.value, this.o++),
            done: a.done
        }
    };
    var wA = function(a, b) {
        return new vA(a, b)
    };
    var BA = function(a) {
            if (a instanceof xA || a instanceof yA || a instanceof zA) return a;
            if ("function" == typeof a.next) return new xA(function() {
                return AA(a)
            });
            if ("function" == typeof a[Symbol.iterator]) return new xA(function() {
                return a[Symbol.iterator]()
            });
            if ("function" == typeof a.lb) return new xA(function() {
                return AA(a.lb())
            });
            throw Error("Not an iterator or iterable.");
        },
        AA = function(a) {
            if (!(a instanceof co)) return a;
            var b = !1;
            return {
                next: function() {
                    for (var c; !b;) try {
                        c = a.g();
                        break
                    } catch (d) {
                        if (d !== bo) throw d;
                        b = !0
                    }
                    return {
                        value: c,
                        done: b
                    }
                }
            }
        },
        xA = function(a) {
            this.h = a
        };
    xA.prototype.lb = function() {
        return new yA(this.h())
    };
    xA.prototype[Symbol.iterator] = function() {
        return new zA(this.h())
    };
    xA.prototype.l = function() {
        return new zA(this.h())
    };
    var yA = function(a) {
        this.h = a
    };
    t(yA, co);
    yA.prototype.g = function() {
        var a = this.h.next();
        if (a.done) throw bo;
        return a.value
    };
    yA.prototype.next = function() {
        return yA.prototype.g.call(this)
    };
    yA.prototype[Symbol.iterator] = function() {
        return new zA(this.h)
    };
    yA.prototype.l = function() {
        return new zA(this.h)
    };
    var zA = function(a) {
        xA.call(this, function() {
            return a
        });
        this.o = a
    };
    t(zA, xA);
    zA.prototype.next = function() {
        return this.o.next()
    };
    var CA = function(a, b) {
        this.h = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof CA)
                for (c = a.Vb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    l = CA.prototype;
    l.qb = function() {
        DA(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    l.Vb = function() {
        DA(this);
        return this.g.concat()
    };
    l.has = function(a) {
        return EA(this.h, a)
    };
    l.isEmpty = function() {
        return 0 == this.size
    };
    l.clear = function() {
        this.h = {};
        this.l = this.size = this.g.length = 0
    };
    l.remove = function(a) {
        return FA(this, a)
    };
    var FA = function(a, b) {
            return EA(a.h, b) ? (delete a.h[b], --a.size, a.l++, a.g.length > 2 * a.size && DA(a), !0) : !1
        },
        DA = function(a) {
            if (a.size != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    EA(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.size != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], EA(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    l = CA.prototype;
    l.get = function(a, b) {
        return EA(this.h, a) ? this.h[a] : b
    };
    l.set = function(a, b) {
        EA(this.h, a) || (this.size += 1, this.g.push(a), this.l++);
        this.h[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.Vb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.keys = function() {
        return BA(this.lb(!0)).l()
    };
    l.values = function() {
        return BA(this.lb(!1)).l()
    };
    l.entries = function() {
        var a = this;
        return wA(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.lb = function(a) {
        DA(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new co;
        e.g = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw bo;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        e.next = e.g.bind(e);
        return e
    };
    var EA = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var GA = null,
        HA = function() {
            M.call(this);
            this.g = new CA;
            this.h = null;
            this.o = new Map;
            this.l = new ru(this);
            aj(this, this.l);
            this.A = new Map;
            this.G = null;
            this.D = -1;
            N().l = !0;
            iy()
        };
    t(HA, M);
    var IA = function() {
            null == GA && (GA = new HA);
            return GA
        },
        JA = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            IA().dispatchEvent(new sA("measurable_impression", null, c))
        },
        KA = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            IA().dispatchEvent(new sA("viewable_impression", null, c))
        },
        LA = function(a, b, c) {
            var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            IA().dispatchEvent(new sA("externalActivityEvent", null, d))
        };
    HA.prototype.destroy = function() {
        this.l.Ua(this.h, "activityMonitor", this.C);
        this.h = null
    };
    HA.prototype.C = function(a) {
        var b = a.la;
        switch (a.ha) {
            case "appStateChanged":
                H(kr);
                b = b.appState;
                a = O();
                a.L != b && (a.L = b, (a = H(gp).g) && en(a.g, !b));
                break;
            case "externalActivityEvent":
                LA(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                JA(b.queryId, b.viewabilityString);
                break;
            case "viewableImpression":
                KA(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                IA().G = b;
                IA().D = Ya();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.o.get(a) && "start" ==
                    c && this.o.get(a);
                a = b.eventId;
                clearTimeout(a);
                if (c = this.g.get(a)) FA(this.g, a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                H(kr);
                N();
                break;
            case "engagement":
                a = b.eventId;
                clearTimeout(a);
                c = this.g.get(a);
                if ($z().g) {
                    var d = -1;
                    this.H && (d = Ya() - this.H);
                    var e = !1;
                    c || (e = !0);
                    Pb(b, "loggingId") && $z().report(43, {
                        step: "receivedResponse",
                        time: Ya(),
                        timeout: e,
                        logid: b.loggingId,
                        timediff: d
                    })
                }
                c && (FA(this.g, a), c(b.engagementString))
        }
    };
    y("ima.bridge.getNativeViewability", function(a, b) {
        IA();
        b({})
    }, void 0);
    y("ima.bridge.getVideoMetadata", function(a) {
        return (a = IA().A.get(a)) ? a() : {}
    }, void 0);
    y("ima.bridge.triggerViewEvent", KA, void 0);
    y("ima.bridge.triggerMeasurableEvent", JA, void 0);
    y("ima.bridge.triggerExternalActivityEvent", LA, void 0);
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });

    function MA(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }

    function NA(a, b) {
        return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b
    }
    var OA = function(a, b) {
        uy.call(this, b);
        this.A = a;
        this.g = null;
        this.C = new ru(this);
        this.C.O(E(), "message", this.D)
    };
    t(OA, uy);
    var PA = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, NA)
        } catch (b) {
            return null
        }
    };
    OA.prototype.sendMessage = function(a, b, c) {
        if (null != this.g && null != this.g.postMessage) {
            var d = this.g,
                e = d.postMessage,
                f = {};
            f.name = a;
            f.type = b;
            null != c && (f.data = c);
            f.sid = this.h;
            f.channel = this.A;
            a = "ima://" + Kh(new Ih(MA), f);
            e.call(d, a, "*")
        }
        null != this.g && null == this.g.postMessage && $z().report(11)
    };
    OA.prototype.N = function() {
        Zi(this.C);
        this.g = null;
        uy.prototype.N.call(this)
    };
    OA.prototype.D = function(a) {
        a = a.g;
        var b = PA(a.data);
        if (QA(this, b)) {
            if (null == this.g) this.g = a.source, this.l || this.connect();
            else if (this.g != a.source) return;
            QA(this, b) && this.dispatchEvent(new aA(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var QA = function(a, b) {
        if (null == b) return !1;
        var c = b.channel;
        if (null == c || c != a.A) return !1;
        b = b.sid;
        return null == b || "*" != a.h && b != a.h ? !1 : !0
    };
    var RA = hc(cc(dc("https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js")));
    var SA = {
        LOADED: "loaded",
        vc: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        uc: "pause",
        nd: "resume",
        ed: "bufferStart",
        dd: "bufferFinish",
        SKIPPED: "skipped",
        re: "volumeChange",
        Pg: "playerStateChange",
        Ef: "adUserInteraction"
    };

    function TA(a, b) {
        if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
        if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
        if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
    }

    function UA(a, b) {
        if (null == b) throw Error("Value for " + a + " is undefined or null");
    }

    function VA(a, b) {
        if (null == b) throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
    };

    function WA(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function XA(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(WA, c)[a[a.length - 1]] = b
    };

    function YA() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.23-google_20210913")
    }

    function ZA() {
        for (var a = ["1", "3", "23"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var $A = function(a, b, c, d) {
            this.h = a;
            this.method = b;
            this.version = c;
            this.g = d
        },
        aB = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        bB = function(a) {
            return new $A(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        },
        cB = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.g && (b.omid_message_args = a.g);
            return b
        };
    var dB = function(a) {
        this.h = a
    };

    function eB() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function fB(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        gB(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ha(b))));
        }, function() {
            return console.error.apply(console, ha(b))
        })
    }

    function gB(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var hB = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var iB = function(a) {
        this.h = a;
        this.handleExportedMessage = iB.prototype.l.bind(this)
    };
    t(iB, dB);
    iB.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(cB(a), this)
    };
    iB.prototype.l = function(a, b) {
        aB(a) && this.g && this.g(bB(a), b)
    };
    var jB = eval("this"),
        kB = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof jB && jB) return jB;
            throw Error("Could not determine global object context.");
        }();

    function lB(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function mB(a) {
        if (a === kB) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var nB = function(a, b) {
        this.h = b = void 0 === b ? kB : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                aB(e) && d.source && c.g && c.g(bB(e), d.source)
            }
        })
    };
    t(nB, dB);
    nB.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(cB(a), "*")
    };
    var oB = ["omid", "v1_SessionServiceCommunication"];

    function pB(a) {
        return oB.reduce(function(b, c) {
            return b && b[c]
        }, a)
    };
    XA("OmidSessionClient.Partner", function(a, b) {
        TA("Partner.name", a);
        TA("Partner.version", b);
        this.name = a;
        this.version = b
    });
    var qB = function(a, b, c, d) {
        d = void 0 === d ? "full" : d;
        TA("VerificationScriptResource.resourceUrl", a);
        this.l = a;
        this.o = b;
        this.h = c;
        this.g = d
    };
    qB.prototype.toJSON = function() {
        return {
            accessMode: this.g,
            resourceUrl: this.l,
            vendorKey: this.o,
            verificationParameters: this.h
        }
    };
    XA("OmidSessionClient.VerificationScriptResource", qB);
    XA("OmidSessionClient.Context", function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        UA("Context.partner", a);
        this.g = a;
        this.B = b;
        this.l = c;
        this.h = d;
        this.o = !1
    });
    var rB = {
            sessionError: "reportError"
        },
        sB = Object.keys(SA).map(function(a) {
            return SA[a]
        }),
        tB = ["impressionOccurred"],
        uB = function() {
            var a = void 0 === a ? kB : a;
            this.g = a.omidSessionInterface
        };
    uB.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        rB[a] && (a = rB[a]);
        b = this.g;
        0 <= tB.indexOf(a) && (b = b.adEvents);
        0 <= sB.indexOf(a) && (b = b.mediaEvents);
        b = b[a];
        if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, ha(c))
    };
    var xB = function(a, b, c) {
            UA("AdSession.context", a);
            this.g = a;
            if (!b) {
                var d;
                "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
                d = lB(d) ? d : kB;
                var e = void 0 === e ? hB : e;
                a: {
                    b = q([d, lB(d) ? d.top : kB]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        b: {
                            var g = d;f = f.value;
                            var h = e;
                            if (!mB(f)) try {
                                var k = pB(f);
                                if (k) {
                                    var n = new iB(k);
                                    break b
                                }
                            } catch (m) {}
                            n = h(f) ? new nB(g, f) : null
                        }
                        if (g = n) {
                            b = g;
                            break a
                        }
                    }
                    b = null
                }
            }
            this.h = b;
            this.B = c || new uB;
            this.L = this.C = this.A = !1;
            this.I = this.o = null;
            this.l = {};
            this.h && (this.h.g = this.Je.bind(this));
            this.xa("setClientInfo", "1.3.23-google_20210913", this.g.g.name, this.g.g.version);
            vB(this, a.B);
            (a = a.l) && this.xa("setContentUrl", a);
            wB(this)
        },
        yB = function(a, b) {
            a.sendMessage("registerSessionObserver", b)
        };
    l = xB.prototype;
    l.start = function() {
        this.xa("startSession", {
            customReferenceData: this.g.h,
            underEvaluation: this.g.o
        })
    };
    l.error = function(a, b) {
        this.xa("sessionError", a, b)
    };
    l.xa = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(ha(c)))
    };
    l.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        if (this.h) e = eB(), b && (this.l[e] = b), d = new $A(e, "SessionService." + a, "1.3.23-google_20210913", YA() && ZA() ? d : JSON.stringify(d)), this.h.sendMessage(d);
        else if (null != this.B.g) try {
            this.B.sendMessage(a, b, d)
        } catch (f) {
            fB("Failed to communicate with SessionInterface with error:"), fB(f)
        }
    };
    l.Je = function(a) {
        var b = a.method,
            c = a.h;
        a = a.g;
        if ("response" === b && this.l[c]) {
            var d = YA() && ZA() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.l[c].apply(this, d)
        }
        "error" === b && window.console && fB(a)
    };
    var vB = function(a, b) {
            b && (b = b.map(function(c) {
                return c.toJSON()
            }), a.xa("injectVerificationScriptResources", b))
        },
        wB = function(a) {
            yB(a, function(b) {
                "sessionStart" === b.type && (a.L = !0, a.o = b.data.creativeType, a.I = b.data.impressionType);
                "sessionFinish" === b.type && (a.L = !1)
            })
        };
    XA("OmidSessionClient.AdSession", xB);
    var zB = function(a) {
        UA("AdEvents.adSession", a);
        try {
            if (a.A) throw Error("AdEvents already registered.");
            a.A = !0;
            a.xa("registerAdEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    };
    zB.prototype.loaded = function(a) {
        a = void 0 === a ? null : a;
        var b = this.g;
        if ("definedByJavaScript" === b.o) throw Error("Creative type has not been redefined");
        if ("definedByJavaScript" === b.I) throw Error("Impression type has not been redefined");
        a ? this.g.xa("loaded", a.toJSON()) : this.g.xa("loaded")
    };
    XA("OmidSessionClient.AdEvents", zB);
    var AB = function(a) {
        UA("MediaEvents.adSession", a);
        try {
            if (a.C) throw Error("MediaEvents already registered.");
            a.C = !0;
            a.xa("registerMediaEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a media events instance registered");
        }
    };
    AB.prototype.start = function(a, b) {
        VA("MediaEvents.start.duration", a);
        VA("MediaEvents.start.mediaPlayerVolume", b);
        if (0 > b || 1 < b) throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
        this.g.xa("start", a, b)
    };
    AB.prototype.pause = function() {
        this.g.xa("pause")
    };
    AB.prototype.resume = function() {
        this.g.xa("resume")
    };
    XA("OmidSessionClient.MediaEvents", AB);
    var DB = function(a, b) {
            BB ? a.srcdoc = b : (a = a.contentWindow) && CB(a.document, b)
        },
        BB = yd && "srcdoc" in wf(document, "IFRAME"),
        CB = function(a, b) {
            a.open("text/html", "replace");
            Tc(a, ou(b));
            a.close()
        };

    function EB(a) {
        return (a = Cf(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function FB(a, b) {
        var c = yf("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + RA.Ga() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                EB(c) ? d(c) : e()
            })
        });
        DB(c, a);
        return b
    };
    var GB = function(a, b) {
        M.call(this);
        this.h = EB(a);
        this.g = b
    };
    t(GB, M);
    var IB = function(a) {
            try {
                a.h.registerSessionObserver(function(b) {
                    "sessionStart" == b.type ? HB(a, a.g) : "sessionFinish" == b.type && IB(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        HB = function(a, b) {
            try {
                a.h.setVideoElement(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var JB = function(a) {
        this.g = a
    };
    JB.prototype.getCuePoints = function() {
        return this.g
    };
    JB.prototype.getCuePoints = JB.prototype.getCuePoints;
    y("module$contents$ima$AdCuePoints_AdCuePoints.PREROLL", 0, void 0);
    y("module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL", -1, void 0);
    var KB = function(a) {
            this.g = a;
            this.l = "";
            this.h = -1;
            this.o = !1
        },
        MB = function(a, b) {
            if (0 <= a.h) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        LB(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        LB = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.o ? c ? (a.g.currentTime = a.h, NB(a), b()) : setTimeout(function() {
                return LB(a, b)
            }, 100) : (NB(a), b())
        },
        NB = function(a) {
            a.h = -1;
            a.l = "";
            a.o = !1
        };
    var OB = function(a) {
            return 5 < a.width && 5 < a.height
        },
        PB = function(a) {
            M.call(this);
            this.g = a;
            this.aa = null;
            this.D = new KB(a);
            this.h = new ru(this);
            aj(this, this.h);
            this.C = 0;
            this.M = this.H = this.T = this.$ = this.K = !1;
            this.R = this.o = null;
            this.l = new mf(this.g.offsetWidth, this.g.offsetHeight);
            this.A = null;
            this.X = lA(this.g);
            this.Y = !1
        };
    t(PB, M);
    l = PB.prototype;
    l.kd = function() {
        var a = this.D;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    };
    l.Nb = function(a) {
        MB(this.D, a)
    };
    l.load = function(a, b) {
        var c = J().g;
        c.T = !0;
        qh(c);
        Fh("hvd_lc");
        QB(this);
        this.T = !1;
        if (b)
            if (Fh("hvd_ad"), b instanceof rt) {
                if (Fh("hvd_mad"), c = b.getMediaUrl()) {
                    Fh("hvd_admu");
                    Fh("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof qt) {
            Fh("hvd_dad");
            c = b.o;
            var d = b.h,
                e = b.l,
                f = b.g,
                g = b.Va,
                h = b.La;
            if (c && d && e && f && g && h && (Fh("hvd_addu"), b.Aa)) {
                Fh("hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (lw() && lw() && MediaSource.isTypeSupported(b) && lw() && MediaSource.isTypeSupported(f)) {
                    Fh("hvd_ymse");
                    Fh("hvd_mse");
                    a = !1;
                    try {
                        -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                    } catch (k) {}
                    u.customElements ? a ? a = !0 : (Vh(Pi) && $z().report(153, {
                        limvid: "vd"
                    }), a = Vh(Pi) || Vh(Ni) || Vh(Li) || Vh(Mi) ? !0 : !1) : a = !1;
                    a ? (this.g.ob = c, this.g.Bb = d) : (this.aa = new Ax(this.g, [new ow(c, b, 35E4, new Wu), new ow(d, f, 82E3, new Wu)]), aj(this, this.aa), a = this.g, c = this.aa, c.g || (c.g = window.URL.createObjectURL(c.ca)), c = c.g, a.src = c);
                    this.g.load();
                    return
                }
                Fh("hvd_nmse")
            }
        } else Fh("hvd_uad");
        a ? (Fh("hvd_src"), this.g.src = a) : Fh("hvd_vn");
        this.g.load()
    };
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 == a ? !0 : !1
    };
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    };
    var RB = function(a) {
        a.Y = !1;
        a.T || Ic() ? (a.M = !1, a.o = a.g.play(), null != a.o && (a.R = null, a.o.then(function() {
            a.o = null;
            a.Id(a.R);
            a.R = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.da()
        }))) : a.M = !0
    };
    PB.prototype.pause = function() {
        null == this.o && (this.Y = !0, this.g.pause())
    };
    PB.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    PB.prototype.N = function() {
        this.A && (this.g instanceof HTMLElement && this.A.unobserve(this.g), this.A = null);
        SB(this);
        M.prototype.N.call(this)
    };
    var SB = function(a) {
            null != a.G && (Bz(a.G), a.G = null);
            null != a.V && a.V.W();
            wu(a.h);
            QB(a)
        },
        QB = function(a) {
            a.$ = !1;
            a.H = !1;
            a.K = !1;
            a.M = !1;
            a.C = 0;
            a.o = null;
            a.R = null;
            Zi(a.J)
        };
    PB.prototype.nb = function(a) {
        this.dispatchEvent(a.type)
    };
    var UB = function(a) {
        if (!a.H) {
            a.H = !0;
            a.dispatchEvent("start");
            try {
                if (Vh(Pi) && u.customElements) {
                    var b = u.customElements.get("lima-video");
                    a.g instanceof b ? $z().report(153, {
                        limvid: "limastart"
                    }) : $z().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (d) {
                $z().report(153, {
                    limvid: "startfail"
                })
            }
            b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            var c;
            if (!(c = !(Dd || ju()) && !ku(10))) {
                if (b = !b) H(cy), b = !1;
                c = b
            }
            c ? (H(cy), (b = sc(Fc, "Xbox")) || (Cd || Ed ? b = 0 : !Bd || Bd && iu(hu, 4) ? Rm() ? (H(cy),
                b = !1) : b = !fy() : b = 0)) : b = 1;
            b || !Bd || Bd && iu(hu, 3) || (Cd || Ed) && !ku(4) || TB(a)
        }
    };
    l = PB.prototype;
    l.df = function() {
        this.T = !0;
        this.M && RB(this);
        this.M = !1;
        I(J(), "irve", this.g instanceof HTMLElement ? "1" : "0");
        if (OB(this.l)) {
            var a = this.l;
            I(J(), "ps", a.width + "x" + a.height)
        } else I(J(), "psnvoc", "1"), VB(this)
    };
    l.ff = function() {
        this.$ || (this.$ = !0, this.dispatchEvent("loaded"))
    };
    l.Id = function(a) {
        null != this.o ? this.R = a : (this.dispatchEvent("play"), Fd || Dd || ju() || Td || UB(this))
    };
    l.jf = function(a) {
        if (!this.H && (Fd || Dd || ju() || Td)) {
            if (0 >= this.g.currentTime) return;
            if (Td && this.g.ended && 1 == this.getDuration()) {
                this.da(a);
                return
            }
            UB(this)
        }
        if (Fd || sc(Fc, "Nintendo WiiU")) {
            if (1.5 < this.g.currentTime - this.C) {
                this.K = !0;
                this.g.currentTime = this.C;
                return
            }
            this.K = !1;
            this.g.currentTime > this.C && (this.C = this.g.currentTime)
        }
        this.dispatchEvent("timeUpdate")
    };
    l.kf = function() {
        this.dispatchEvent("volumeChange")
    };
    l.hf = function() {
        if (this.H && Fd && !this.Y && (2 > WB(this) || this.K)) {
            this.J = new hk(250);
            this.h.O(this.J, "tick", this.kb);
            this.J.start();
            var a = !0
        } else a = !1;
        a || this.o || this.dispatchEvent("pause")
    };
    l.cf = function() {
        var a = !0;
        if (Fd || sc(Fc, "Nintendo WiiU")) a = this.C >= this.g.duration - 1.5;
        !this.K && a && this.dispatchEvent("end")
    };
    var TB = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    PB.prototype.va = function() {
        this.dispatchEvent("endFullscreen")
    };
    PB.prototype.da = function() {
        this.dispatchEvent("error")
    };
    PB.prototype.Wa = function() {
        this.dispatchEvent("click")
    };
    var VB = function(a) {
        "ResizeObserver" in window ? (a.A = new ResizeObserver(function(b) {
            b = q(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, c.contentBoxSize ? (c = Array.isArray(c.contentBoxSize) ? c.contentBoxSize[0] : c.contentBoxSize, a.l.width = Math.floor(c.inlineSize), a.l.height = Math.floor(c.blockSize)) : (a.l.width = Math.floor(c.contentRect.width), a.l.height = Math.floor(c.contentRect.height)), OB(a.l) && (a.g instanceof HTMLElement && a.A.unobserve(a.g), a.A = null, c = a.l, I(J(), "ps", c.width + "x" + c.height))
        }), a.g instanceof HTMLElement && a.A.observe(a.g)) : I(J(), "rons", "1")
    };
    PB.prototype.ib = function() {
        var a = new mf(this.g.offsetWidth, this.g.offsetHeight),
            b = lA(this.g);
        if (a.width != this.l.width || a.height != this.l.height) !this.X && b ? TB(this) : this.X && !b && this.va(), this.l = a, this.X = b
    };
    PB.prototype.kb = function() {
        if (!this.g.ended && this.g.paused && (Fd || Ud ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = WB(this);
            0 < b && (2 <= b || 2 > a) && (Zi(this.J), RB(this))
        } else Zi(this.J)
    };
    var WB = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    PB.prototype.Pb = function() {
        $z().report(139);
        TB(this)
    };
    var $B = function(a, b, c) {
        L.call(this);
        var d = this;
        this.l = b;
        this.o = c;
        b = new ru(this);
        aj(this, b);
        this.B = "goog_" + ad++;
        this.g = this.h = null;
        FB(a, this.B).then(function(e) {
            return void XB(d, e)
        }).catch(function() {
            return void YB(d)
        });
        b.O(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.ha && ZB(d)
        })
    };
    t($B, L);
    var XB = function(a, b) {
            a.h = b;
            var c = {};
            c = (c.frameName = a.B, c);
            vy(a.l, "omid", "iframeReady", c);
            a.g = new GB(b, a.o);
            a.g.O("error", function() {
                return void YB(a)
            });
            IB(a.g)
        },
        YB = function(a) {
            vy(a.l, "omid", "iframeFailed");
            a.W()
        },
        ZB = function(a) {
            setTimeout(function() {
                a.W()
            }, 3E3)
        };
    $B.prototype.N = function() {
        this.h && (zf(this.h), this.h = null);
        L.prototype.N.call(this)
    };
    var aC = function(a, b, c, d) {
        L.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.h = new ru(this);
        aj(this, this.h);
        this.h.O(this.o, d, this.A)
    };
    t(aC, L);
    var cC = function(a, b) {
        var c = b.la;
        switch (b.ha) {
            case "showVideo":
                c = a.l;
                null != c.h && c.h.show();
                break;
            case "hide":
                c = a.l;
                null != c.h && bC(c.h.g, !1);
                break;
            case "resizeAndPositionVideo":
                a = a.l.g;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.left) + "px";
                a.g.style.top = String(c.top) + "px";
                a.g.style.width = String(c.width) + "px";
                a.g.style.height = String(c.height) + "px";
                break;
            case "restoreSizeAndPositionVideo":
                c = a.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0"
        }
    };
    aC.prototype.A = function(a) {
        var b = a.la;
        switch (a.ha) {
            case "activate":
                a = this.l;
                var c = this.g;
                a.g != c && a.h && a.o && a.l && (c.setVolume(a.g.getVolume()), c = a.g, a.g = a.l, a.l = c, c = a.h, a.h = a.o, a.o = c, bC(a.o.g, !1), null != (c = a.I.G) && (a = a.g.D.g, c.o = a, c.g && (c = c.g, c.g = a, HB(c, a))));
                break;
            case "startTracking":
                a = this.g;
                c = this.B;
                this.h.O(a, Mb(Su), c);
                this.h.O(a, ey, c);
                a = this.g;
                SB(a);
                a.h.O(a.g, ey, a.nb);
                a.h.O(a.g, "ended", a.cf);
                a.h.O(a.g, "webkitbeginfullscreen", a.Pb);
                a.h.O(a.g, "webkitendfullscreen", a.va);
                a.h.O(a.g, "loadedmetadata",
                    a.df);
                a.h.O(a.g, "pause", a.hf);
                a.h.O(a.g, "playing", a.Id);
                a.h.O(a.g, "timeupdate", a.jf);
                a.h.O(a.g, "volumechange", a.kf);
                a.h.O(a.g, "error", a.da);
                a.h.O(a.g, Td || Fd && !ku(8) ? "loadeddata" : "canplay", a.ff);
                a.G = new xz;
                a.h.O(a.G, "click", a.Wa);
                zz(a.G, a.g);
                a.V = new hk(1E3);
                a.h.O(a.V, "tick", a.ib);
                a.V.start();
                break;
            case "stopTracking":
                a = this.g;
                c = this.B;
                this.h.Ua(a, Mb(Su), c);
                this.h.Ua(a, ey, c);
                SB(this.g);
                break;
            case "exitFullscreen":
                a = this.g;
                (Cd || Ed) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                break;
            case "play":
                RB(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    k = b.demuxedVideoUrl,
                    n = b.demuxedAudioMimeType,
                    m = b.demuxedVideoMimeType,
                    v = b.demuxedAudioCodec,
                    r = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var w = null;
                k && h && b && m && n && r && v && (w = new qt({
                    yf: k,
                    ve: h,
                    Fh: null,
                    wh: null,
                    xf: m,
                    ue: n,
                    Va: r,
                    La: v,
                    height: null,
                    width: null,
                    Aa: b,
                    Eh: null,
                    vh: null
                }));
                h = null;
                d && e && g && f && (h = new rt({
                    bf: d,
                    Ah: null,
                    mimeType: e,
                    Va: g,
                    La: f,
                    height: null,
                    width: null,
                    Aa: b,
                    yh: null
                }));
                w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
                break;
            case "unload":
                a = this.g;
                QB(a);
                a.T = !1;
                "removeAttribute" in a.g ? a.g.removeAttribute("src") : a.g.src = "";
                a.g.load();
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    aC.prototype.B = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.g.currentTime;
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        vy(this.o,
            this.C, a, b)
    };
    var dC = function(a, b) {
        L.call(this);
        this.h = b;
        this.l = new aC(a, b, this.h.g, "videoDisplay1");
        aj(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new aC(a, b, c, "videoDisplay2"), aj(this, this.g))
    };
    t(dC, L);
    var eC = function(a, b, c, d) {
        var e = wf(document, "IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        Ng(Fg) && (e.setAttribute("role", "region"), e.setAttribute("aria-label", "Advertisement"), e.title = "3rd party ad content", e.tabIndex = 0);
        a.appendChild(e);
        return e
    };

    function fC() {
        var a, b;
        return null == (a = E().googletag) ? void 0 : null == (b = a.companionAds) ? void 0 : b.call(a)
    }

    function gC(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = q(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value, "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
            } return b.adSizes = c, b
    }

    function hC(a) {
        var b = fC();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(r) {
                return [r.getSlotId().getId(), r]
            }));
            a = q(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                    f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = qf(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth,
                            k = e.adHeight;
                        d.textContent = "";
                        if (e.friendlyIframeRendering) try {
                            var n = "google_companion_" + f.getSlotId().getId(),
                                m = eC(d, n, h, k),
                                v = m.contentWindow ? m.contentWindow.document :
                                m.contentDocument;
                            xd && v.open("text/html", "replace");
                            Tc(v, ou(g));
                            v.close()
                        } catch (r) {} else Sc(d, ou(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    };
    var iC = function(a, b, c, d, e, f) {
        aA.call(this, a, b, c, d, e);
        this.g = f
    };
    t(iC, aA);
    var jC = function(a, b) {
        M.call(this);
        this.o = a;
        this.l = b;
        this.g = {};
        this.h = new ru(this);
        aj(this, this.h);
        this.h.O(E(), "message", this.A)
    };
    t(jC, M);
    var kC = function(a, b) {
            var c = b.g;
            a.g.hasOwnProperty(c) && vy(a.g[c], b.type, b.ha, b.la)
        },
        lC = function(a, b, c, d) {
            a.g.hasOwnProperty(b) || (c = new OA(b, c), a.h.O(c, a.o, function(e) {
                this.dispatchEvent(new iC(e.type, e.ha, e.la, e.Mb, e.Jd, b))
            }), c.g = d, c.connect(), a.g[b] = c)
        };
    jC.prototype.N = function() {
        for (var a in this.g) Zi(this.g[a]);
        M.prototype.N.call(this)
    };
    jC.prototype.A = function(a) {
        a = a.g;
        var b = PA(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.l && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                lC(this, c, d, a.source);
                this.dispatchEvent(new iC(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function mC() {
        return !!Ka("googletag.cmd", E())
    }

    function nC() {
        var a = Ka("googletag.console", E());
        return null != a ? a : null
    }
    var oC = function() {
        ru.call(this);
        this.l = new jC("gpt", !0);
        aj(this, this.l);
        this.O(this.l, "gpt", this.A);
        this.g = null;
        mC() || E().top === E() || (this.g = new jC("gpt", !1), aj(this, this.g), this.O(this.g, "gpt", this.B))
    };
    t(oC, ru);
    oC.prototype.A = function(a) {
        var b = a.Jd,
            c = "//imasdk.googleapis.com".match(Gf);
        b = b.match(Gf);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) lC(this.g, a.g, a.Mb, E().parent), null != this.g && kC(this.g, a);
            else if (c = a.la, null != c && void 0 !== c.scope) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" == b) {
                var e = a.ha;
                "isGptPresent" == e ? d = mC() : "isConsolePresent" == e && (d = null != nC())
            } else if (mC())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.ha;
                    var f = E().googletag;
                    if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
                        e = d.apply(b, c)
                    } catch (g) {}
                    d =
                        e
                } else if ("console" == b) {
                if (e = nC(), null != e && (b = e[a.ha], null != b)) try {
                    b.apply(e, c)
                } catch (g) {}
            } else null === b && (e = a.ha, "googleGetCompanionAdSlots" == e ? (e = fC()) ? (e = e.getSlots().map(gC), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" == e && hC(c[0]), d = null));
            void 0 !== d && (a.la.returnValue = d, kC(this.l, a))
        }
    };
    oC.prototype.B = function(a) {
        kC(this.l, a)
    };
    var pC = function(a, b) {
        if (a.g) {
            var c = a.g;
            Zi(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Zi(a.g[b]), delete a.g[b])
    };
    H(Mg);
    var Xf = ["A8RhywYzBE2ntUAzipotZo1NirmVUD5B/IVOEROQCjOklthZ85lxgT2/VAcq1YwhDA6C5W3zQ4bWESWdQ452pgsAAACJeyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0="];
    var rC = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, v) {
                if ("%" == n) return "%";
                var r = c.shift();
                if ("undefined" == typeof r) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = r;
                return qC[n].apply(null, arguments)
            })
        },
        qC = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Yc(" ", Number(c) - a.length) : Yc(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Yc(" ", a) : f + Yc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return qC.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    qC.i = qC.d;
    qC.u = qC.d;
    var tC = function(a, b) {
        M.call(this);
        this.l = new ru(this);
        aj(this, this.l);
        this.K = this.J = null;
        this.H = !1;
        this.D = "goog_" + ad++;
        this.A = new Map;
        var c = this.D,
            d = (Sf() ? "https:" : "http:") + rC("//imasdk.googleapis.com/js/core/bridge3.482.0_%s.html", W.o);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (h) {}
                    e = e.parent
                } while (e != e.top)
            } catch (h) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        f = void 0 === f ? window.document : f;
        Yf(f);
        var g = void 0 === g ? window.navigator.userAgent :
            g;
        g = g.match(/Chrome\/([0-9]+)/);
        c = yf("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay;trust-token-redemption;" + (g && 92 > Number(g[1]) ? "conversion-measurement" : "attribution-reporting") + ";",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
        });
        this.l.Gb(c, "load", this.Y);
        a.appendChild(c);
        this.g = c;
        this.o = sC(this);
        this.C = b;
        this.h = null;
        this.M = new dC(this.o, this.C);
        aj(this, this.M);
        this.C.g && this.l.O(this.o, "displayContainer", this.T);
        this.l.O(this.o, "mouse", this.V);
        this.l.O(this.o, "touch", this.X);
        c = E();
        d = Ka("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new oC, y("google.ima.gptProxyInstance", d, c), c = d);
        this.R = c;
        fy() || (this.G = new $B(a, this.o, b.g.D.g), aj(this, this.G))
    };
    t(tC, M);
    var sC = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.A.get(b);
        null == c && (c = new OA(a.D, b), a.H && (c.g = Cf(a.g), c.connect()), a.A.set(b, c));
        return c
    };
    tC.prototype.N = function() {
        null !== this.h && (this.h.W(), this.h = null);
        this.A.forEach(function(a) {
            Zi(a)
        });
        this.A.clear();
        pC(this.R, this.D);
        zf(this.g);
        M.prototype.N.call(this)
    };
    tC.prototype.V = function(a) {
        var b = a.la,
            c = og(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.ha, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var uC = function(a, b) {
        var c = og(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    tC.prototype.X = function(a) {
        var b = a.la,
            c = og(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: uC(this, b.touches),
            targetTouches: uC(this, b.targetTouches),
            changedTouches: uC(this, b.changedTouches)
        }, a = new TouchEvent(a.ha, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.ha, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
                c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, uC(this, b.touches), uC(this, b.targetTouches), uC(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    tC.prototype.T = function(a) {
        switch (a.ha) {
            case "showVideo":
                null == this.h ? (this.h = new xz, this.l.O(this.h, "click", this.$)) : Bz(this.h);
                zz(this.h, vC(this.C));
                break;
            case "hide":
                null !== this.h && (this.h.W(), this.h = null)
        }
        var b = this.M;
        cC(b.l, a);
        b.g && cC(b.g, a)
    };
    tC.prototype.$ = function() {
        vy(this.o, "displayContainer", "videoClick")
    };
    tC.prototype.Y = function() {
        var a = this;
        this.J = ch();
        this.K = $g();
        this.A.forEach(function(b) {
            b.g = Cf(a.g);
            b.connect()
        });
        this.H = !0
    };
    var xC = function() {
        M.call(this);
        this.buffered = new wC;
        this.o = new wC;
        this.h = new ru(this);
        aj(this, this.h);
        this.src = this.l = "";
        this.A = !1;
        this.g = null;
        var a = Kx(W);
        if (a) {
            a: {
                if (Pb(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a)) break a;a = NaN
            }
            this.duration = a
        }
    };
    t(xC, M);
    var yC = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new xC;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        };
        c.width = 0;
        c.height = 0;
        c.offsetWidth = 0;
        c.offsetHeight = 0;
        return c
    };
    l = xC.prototype;
    l.pause = function() {
        this.paused || (null.stop(), this.paused = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"))
    };
    l.load = function() {
        this.ld = 0;
        this.paused = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.setProperty("duration", a);
        a = this.o;
        a.g.push(new zC(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new zC(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.be
    };
    l.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = Ya() - this.Kc;
                b = this.currentTime + a / 1E3;
                this.Kc += a;
                2 < this.ld && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                this.currentTime == this.duration && (this.paused = !0, null.stop(), this.dispatchEvent("ended"));
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.volume = Number(b);
                this.dispatchEvent("volumechange");
                break;
            default:
                throw "Property setter not implemented";
        }
    };
    l.setAttribute = function(a, b) {
        null != a && AC.set(a, b)
    };
    l.getAttribute = function(a) {
        return AC.get(a)
    };
    l.ce = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.rc && (this.rc.innerText = b);
        c && this.Ab && (this.Ab.style.backgroundColor = c)
    };
    var AC = new CA,
        zC = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        wC = function() {
            this.length = 0;
            this.g = []
        };
    wC.prototype.start = function(a) {
        return this.g[a].startTime
    };
    wC.prototype.end = function(a) {
        return this.g[a].endTime
    };
    l = xC.prototype;
    l.ld = 0;
    l.currentTime = 0;
    l.duration = NaN;
    l.paused = !0;
    l.volume = 1;
    l.muted = !1;
    Object.defineProperty(xC.prototype, "src", {
        get: function() {
            return xC.prototype.l
        },
        set: function(a) {
            var b = xC.prototype;
            b.A && null != b.g ? (b.g.reject(), b.g = null) : b.l = a
        }
    });
    l = xC.prototype;
    l.be = 1;
    l.playbackRate = 0;
    l.Kc = 0;
    l.Ab = null;
    l.rc = null;
    var DC = function(a, b) {
        L.call(this);
        this.o = a;
        this.l = this.g = null;
        this.h = BC();
        CC(this, b);
        Rw(function() {
            I(J(), "haob", "1")
        })
    };
    t(DC, L);
    DC.prototype.initialize = function() {
        this.h && this.h.load()
    };
    DC.prototype.N = function() {
        zf(this.g);
        L.prototype.N.call(this)
    };
    var CC = function(a, b) {
            a.g = yf("DIV", {
                style: "display:none;"
            });
            a.o.appendChild(a.g);
            a.g.appendChild(a.h);
            b && (a.l = yf("DIV", {
                style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
            }), a.g.appendChild(a.l))
        },
        BC = function() {
            var a = Kx(W);
            if (Hx(a, "useVideoElementFake")) {
                a = yC();
                var b = yf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
                });
                Object.assign(b, a);
                a.Ab = yf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
                });
                a.rc = yf("P", {
                    style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
                });
                a.Ab.appendChild(a.rc);
                b.appendChild(a.Ab);
                a.h.O(a, ["loadeddata", "playing", "pause", "ended"], a.ce);
                a = b
            } else {
                a = !1;
                try {
                    -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                } catch (c) {}
                u.customElements ? a ? b = !0 : (Vh(Pi) && $z().report(153, {
                    limvid: "vw"
                }), b = Vh(Ni) || Vh(Pi) || Vh(Li) || Vh(Mi) ? !0 : !1) : b = !1;
                if (b) {
                    a && console.log("force lima video in wrapper");
                    a = null;
                    try {
                        a = new cx
                    } catch (c) {
                        a = yf("lima-video"), Vh(Pi) && $z().report(153, {
                            limvid: "firefail"
                        })
                    }
                    a.style.backgroundColor = "#000";
                    a.style.height = "100%";
                    a.style.width =
                        "100%";
                    a.style.position = "absolute";
                    a.style.left = "0";
                    a.style.top = "0"
                } else a = yf("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: Ex("Advertisement").toString()
                })
            }
            a.setAttribute("webkit-playsinline", !0);
            a.setAttribute("playsinline", !0);
            return a
        };
    DC.prototype.show = function() {
        bC(this.g, !0)
    };
    var bC = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var GC = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !Bf( of (d), d)) throw Dy(Cy, null, "containerElement", "element");
        this.A = b;
        this.Y = hy(this.A || null);
        this.X = lu(this.A || null);
        this.V = String(Math.floor(1E9 * Math.random()));
        this.H = !1;
        this.G = a;
        this.T = null != b;
        W.g = 2;
        this.D = EC(b ? b : null);
        d = yf("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.B = d;
        this.h = null;
        FC(this) && b ? a = new PB(b) : (this.h = new DC(this.B, !0), a = new PB(this.h.h));
        this.g = a;
        this.l = this.o = null;
        if (a = this.h && W.isAutoPlayAdBreaks()) a = !(FC(this) || Cd || Ed || Sm() || Bd && (!Bd || !iu(hu, 4)));
        a && (this.o = new DC(this.B, !0), this.l = new PB(this.o.h));
        this.C = c || null;
        this.R = null != this.C;
        FC(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.B, W.l = c) : c = b : c = this.B;
        this.L = c;
        this.I = new tC(this.B, this);
        this.M = new mf(0, 0);
        this.J = "";
        b && (b = Xs(b.src || b.currentSrc), 200 > b.toString().length ? this.J = b.toString() : 200 > b.h.length && (this.J = b.h));
        this.K = new Map;
        this.K.set("videoDisplay1", this.g);
        this.l && this.K.set("videoDisplay2",
            this.l)
    };
    GC.prototype.initialize = function() {
        this.H = !0;
        null != this.h && this.h.initialize();
        null != this.o && this.o.initialize()
    };
    GC.prototype.destroy = function() {
        var a = this;
        this.A = null;
        Zi(this.h);
        Zi(this.o);
        Zi(this.I);
        this.g.Nb(function() {
            return Zi(a.g)
        });
        null != this.l && this.l.Nb(function() {
            return Zi(a.l)
        });
        zf(this.B)
    };
    var vC = function(a) {
            return a.R && a.C ? a.C : null != a.h ? a.h.l : null
        },
        FC = function(a) {
            return gy(a.D) && a.T
        },
        EC = function(a) {
            return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
        };
    GC.prototype.destroy = GC.prototype.destroy;
    GC.prototype.initialize = GC.prototype.initialize;
    var HC = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.g = a
    };
    t(HC, Error);
    l = HC.prototype;
    l.getInnerError = function() {
        var a = this.g.innerError;
        return a instanceof Object ? new HC(a) : null != a ? Error(a) : null
    };
    l.getMessage = function() {
        return this.g.errorMessage
    };
    l.getErrorCode = function() {
        return this.g.errorCode
    };
    l.Ed = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    };
    l.getType = function() {
        return this.g.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    };
    HC.prototype.getType = HC.prototype.getType;
    HC.prototype.getVastErrorCode = HC.prototype.Ed;
    HC.prototype.getErrorCode = HC.prototype.getErrorCode;
    HC.prototype.getMessage = HC.prototype.getMessage;
    HC.prototype.getInnerError = HC.prototype.getInnerError;
    var IC = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    };
    y("module$contents$ima$AdError_AdError.Type", IC, void 0);
    var JC = function(a, b) {
        b = void 0 === b ? null : b;
        bj.call(this, "adError");
        this.g = a;
        this.l = b
    };
    t(JC, bj);
    JC.prototype.getError = function() {
        return this.g
    };
    JC.prototype.getUserRequestContext = function() {
        return this.l
    };
    JC.prototype.getUserRequestContext = JC.prototype.getUserRequestContext;
    JC.prototype.getError = JC.prototype.getError;
    var KC = {
        AD_ERROR: "adError"
    };
    y("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", KC, void 0);
    var LC = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        bj.call(this, a);
        this.l = b;
        this.g = c
    };
    t(LC, bj);
    LC.prototype.getAd = function() {
        return this.l
    };
    LC.prototype.getAdData = function() {
        return this.g
    };
    LC.prototype.getAdData = LC.prototype.getAdData;
    LC.prototype.getAd = LC.prototype.getAd;
    var MC = {
        AD_CAN_PLAY: "adCanPlay",
        Df: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        fd: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        md: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        gd: "fully_viewable_audible_half_duration_impression",
        ge: "overlay_resize",
        he: "overlay_unmeasurable_impression",
        ie: "overlay_unviewable_impression",
        ke: "overlay_viewable_immediate_impression",
        je: "overlay_viewable_end_of_session_impression",
        Zf: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        nh: "userRecall",
        Sg: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        ne: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        Cf: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        Mf: "companionBackfill",
        kh: "trackingUrlPinged",
        ph: "video_card_endcap_collapse",
        qh: "video_card_endcap_dismiss",
        rh: "video_card_endcap_impression",
        Pf: "companionInitialized",
        Of: "companionImpression",
        Nf: "companionClick",
        Eg: "mediaUrlPinged",
        de: "loadStart",
        Hg: "navigationRequested"
    };
    y("module$contents$ima$AdEvent_AdEvent.Type", MC, void 0);
    var NC = function(a, b) {
        b = void 0 === b ? null : b;
        LC.call(this, "adMetadata", a);
        this.o = b
    };
    t(NC, LC);
    NC.prototype.Ee = function() {
        return this.o
    };
    NC.prototype.getAdCuePoints = NC.prototype.Ee;
    var OC = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var PC = function(a, b) {
        M.call(this);
        this.l = a;
        this.A = b;
        this.h = this.l.currentTime;
        this.g = new hk(250);
        aj(this, this.g);
        this.o = new ru(this);
        aj(this, this.o);
        uu(this.o, this.g, "tick", this.C, !1, this)
    };
    t(PC, M);
    PC.prototype.Ya = function() {
        return this.h
    };
    PC.prototype.start = function() {
        QC(this);
        this.g.start()
    };
    PC.prototype.stop = function() {
        this.g.stop()
    };
    PC.prototype.C = function() {
        var a = this.l.currentTime;
        a != this.Ya() && (this.h = a, QC(this))
    };
    var QC = function(a) {
        var b = {};
        b.currentTime = a.Ya();
        vy(a.A, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var RC = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        SC = function(a) {
            a = kc(a);
            if ("" == a) return null;
            var b = String(a.substr(0, 4)).toLowerCase();
            if (0 == ("url(" <
                    b ? -1 : "url(" == b ? 0 : 1)) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in RC)) return null
            }
            return a
        };

    function TC(a) {
        var b = u.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var UC = TC("getPropertyValue"),
        VC = TC("setProperty");

    function WC(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (vd && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var XC = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        ZC = function(a) {
            if (!a) return Ec;
            var b = document.createElement("div").style;
            YC(a).forEach(function(c) {
                var d = yd && c in XC ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = WC(UC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = SC(c), null != c && WC(VC, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
            });
            return new Dc(b.cssText ||
                "", Cc)
        },
        YC = function(a) {
            Ma(a) ? a = Bb(a) : (a = Nb(a), xb(a, "cssText"));
            return a
        };
    var $C = function(a, b, c) {
        M.call(this);
        this.h = a;
        this.g = null;
        this.H = "";
        this.J = Ec;
        this.K = 0;
        this.C = this.l = null;
        this.o = b;
        this.A = null;
        this.D = "";
        this.G = c
    };
    t($C, M);
    $C.prototype.init = function(a) {
        this.D = a;
        a = "about:blank";
        vd && (a = "");
        this.l = yf("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent"
        });
        kg(this.l, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.h.G;
        a.appendChild(this.l);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.A && (this.A = new ru(this));
        this.A.O(a, "message", this.M);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.D + '");\x3c/script></body>');
        if (Ud ||
            Qd || wd) {
            var b = this.l.contentWindow;
            b && CB(b.document, a)
        } else DB(this.l, a)
    };
    $C.prototype.M = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (la) {
                return
            }
            var d = c.session;
            if (null != d && this.D == d) switch (c.type) {
                case "friendlyReady":
                    var e = aD(this);
                    if (null != e) {
                        this.g = e;
                        this.H = e.currentSrc;
                        var f = e.style.cssText;
                        if (vd && 10 > document.documentMode) var g = Ec;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = wf(document, "TEMPLATE").content.ownerDocument);
                            var k = h.implementation.createHTMLDocument("").createElement("DIV");
                            k.style.cssText = f;
                            g = ZC(k.style)
                        }
                        this.J = g;
                        this.K =
                            e.currentTime
                    } else {
                        var n = this.h.G,
                            m = this.h.M;
                        var v = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width + "px; ");
                        v += "height:" + m.height + "px;";
                        this.g = yf("VIDEO", {
                            style: v,
                            autoplay: !0
                        });
                        n.appendChild(this.g)
                    }
                    var r = this.h.G;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var w = sg(this.g);
                    e += "width:" + w.width + "px; ";
                    e += "height:" + w.height + "px;";
                    this.C = yf("DIV", {
                        style: e
                    });
                    r.appendChild(this.C);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.C)
                    } catch (la) {
                        bD(this)
                    }
                    vy(this.o,
                        "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !Ff() && !Ef() && kg(this.g, {
                        visibility: "visible"
                    });
                    vy(this.o, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    cD(this);
                    vy(this.o, "vpaid", "", b);
                    break;
                case "startAd":
                    r = {};
                    if (this.g) {
                        h = this.g.paused;
                        var x = 0 < this.g.currentTime;
                        r.apl = x && !h ? "1" : "0";
                        r.ip = h ? "1" : "0";
                        r.iavp = x ? "1" : "0"
                    } else r.apl = "n";
                    $z().report(99, r);
                    vy(this.o, "vpaid", "", b);
                    if (null != aD(this)) {
                        var G = this.h;
                        null != G.h && G.h.show()
                    }
                    break;
                default:
                    vy(this.o, "vpaid", "", b)
            }
        } catch (la) {
            bD(this)
        }
    };
    var bD = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.D;
            a = Kh(new Ih(void 0), b);
            window.postMessage(a, "*")
        },
        aD = function(a) {
            return ("videoDisplayUnknown" == a.G ? a.h.g : a.h.K.get(a.G)).D.g
        },
        cD = function(a) {
            a.g && !Ff() && !Ef() && kg(a.g, {
                visibility: "hidden"
            })
        };
    $C.prototype.N = function() {
        M.ya.N.call(this);
        Zi(this.A);
        this.A = null;
        zf(this.C);
        this.C = null;
        zf(this.l);
        this.l = null;
        var a = aD(this);
        if (null != a) {
            var b = this.J;
            a.style.cssText = b instanceof Dc && b.constructor === Dc ? b.g : "type_error:SafeStyle";
            Ff() || Ef() ? (a.src = this.H, a.currentTime = this.K) : (a.removeAttribute("src"), a = this.h, null != a.h && bC(a.h.g, !1))
        } else zf(this.g), this.g = null
    };
    var dD = function(a, b) {
        L.call(this);
        this.h = a;
        this.l = b;
        this.g = new Map
    };
    t(dD, L);
    var eD = function(a, b) {
        try {
            var c = b.la,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new $C(a.h, a.l, b);
                    a.g.set(e, f);
                    f.init(e);
                    break;
                case "vpaidNonLinear":
                    var g = a.g.get(d);
                    g && cD(g);
                    break;
                case "destroyFriendlyIframe":
                    var h = a.g.get(d);
                    h && (h.W(), a.g.delete(d))
            }
        } catch (k) {
            $z().report(125, {
                msg: k.message
            })
        }
    };
    dD.prototype.N = function() {
        this.g.forEach(function(a) {
            return a.W()
        })
    };
    var fD = function() {
        this.g = [];
        this.h = []
    };
    fD.prototype.isEmpty = function() {
        return 0 === this.g.length && 0 === this.h.length
    };
    fD.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    fD.prototype.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a) break b;
                c = -1
            }
        }
        0 <= c ? (yb(b, c), b = !0) : b = !1;
        return b || xb(this.h, a)
    };
    fD.prototype.qb = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    var Z = function(a, b, c, d, e, f, g) {
        M.call(this);
        var h = this;
        this.H = a;
        this.g = b;
        this.K = c;
        this.ib = e;
        this.o = new tA;
        this.C = g;
        this.M = !1;
        this.T = 1;
        this.kb = d;
        this.aa = -1;
        this.l = this.h = null;
        this.G = new PC({
            currentTime: 0
        }, this.C);
        this.D = new fD;
        this.da = this.X = !1;
        this.Y = new Map;
        this.$ = this.va = !1;
        this.Wa = new dD(b, g);
        aj(this, this.Wa);
        this.J = f && null != this.g.C;
        this.R = function() {
            var k = h.g.g,
                n = k.g.currentTime;
            k = k.getDuration();
            return {
                currentTime: n,
                duration: k,
                isPlaying: !0,
                volume: h.T
            }
        };
        this.V = new ru(this);
        this.V.O(this.C, "adsManager",
            this.nb)
    };
    t(Z, M);
    Z.prototype.nb = function(a) {
        var b = this,
            c = a.ha,
            d = a.la;
        switch (c) {
            case "error":
                gD(this);
                hD(this, d);
                break;
            case "contentPauseRequested":
                $z().report(130);
                iD(this);
                jD(this, c, d);
                break;
            case "contentResumeRequested":
                kD(this, function() {
                    return jD(b, c, d)
                });
                break;
            case "remainingTime":
                this.aa = d.remainingTime;
                break;
            case "skip":
                jD(this, c, d);
                break;
            case "log":
                jD(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = Ka("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.M = !0;
                jD(this, c, d);
                break;
            case "interaction":
                jD(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                eD(this.Wa, a);
                break;
            case "skippableStateChanged":
                a = d.adData;
                null != a.skippable && (this.M = a.skippable);
                jD(this, c, d);
                break;
            case "volumeChange":
                a = d.adData;
                null != a && "number" === typeof a.volume && (this.T = a.volume);
                jD(this, c, d);
                break;
            case "firstQuartile":
                jD(this, ty.firstQuartile, d);
                jD(this, c, d);
                break;
            case "thirdQuartile":
                jD(this, ty.thirdQuartile, d);
                jD(this, c, d);
                break;
            default:
                jD(this, c, d)
        }
    };
    var jD = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.Y.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            if (e = null == f ? null : new Y(f)) a.h = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new LC(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new JB(c.adCuePoints));
                    b = new NC(e, b);
                    break;
                case "allAdsCompleted":
                    a.h = null;
                    a.va = !0;
                    b = new LC(b, e);
                    break;
                case "contentPauseRequested":
                    a.$ = !1;
                    b = new LC(b, e);
                    break;
                case "contentResumeRequested":
                    a.h = null;
                    a.$ = !0;
                    b = new LC(b, e);
                    break;
                case "loaded":
                    a.aa =
                        e.getDuration();
                    a.M = !1;
                    iy() && (d = a.H, c = a.ib, d.h.set(eA(e), a.R), (0 != W.g ? H(kr).l : d.A) && mA(d, "loaded", eA(e), c));
                    b = new LC(b, e, f);
                    break;
                case "start":
                    a.Y.set(c.adId, c.companions);
                    null != vC(a.g) && (null == a.l ? (a.l = new xz, a.V.O(a.l, "click", a.gf)) : Bz(a.l), zz(a.l, vC(a.g)));
                    b = new LC(b, e);
                    break;
                case "complete":
                    null != a.l && Bz(a.l);
                    iy() && oA(a.H, a.R, eA(e));
                    a.h = null;
                    a.Y.delete(c.adId);
                    b = new LC(b, e);
                    break;
                case "log":
                    c = null;
                    null != d && null != d.type ? (f = d.type, f = "adLoadError" == f || "adPlayError" == f) : f = !1;
                    f && (c = {
                        adError: new HC(d)
                    });
                    b = new LC(b, e, c);
                    break;
                case "interaction":
                    b = new LC(b, e, d);
                    break;
                case "adProgress":
                    b = new LC(b, e, new OC(c));
                    break;
                default:
                    b = new LC(b, e)
            }
            a.dispatchEvent(b);
            a.va && a.$ && a.destroy()
        },
        hD = function(a, b) {
            var c = new JC(new HC(b));
            a.X ? (a.dispatchEvent(c), iy() && a.h && oA(a.H, a.R, eA(a.h)), a.h = null) : a.D.h.push(c);
            a = {
                error: b.errorCode,
                vis: lh(document)
            };
            $z().report(7, a)
        },
        lD = function(a, b, c) {
            vy(a.C, "adsManager", b, c)
        },
        kD = function(a, b) {
            $z().report(131);
            gD(a, b)
        },
        iD = function(a) {
            var b = a.g.g;
            FC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete &&
                null != b.kd && b.kd()
        },
        gD = function(a, b) {
            var c = a.g.g;
            FC(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Nb ? c.Nb(b) : b && b()
        };
    l = Z.prototype;
    l.init = function(a, b, c, d) {
        if (this.D.isEmpty()) {
            var e = this.g,
                f = null;
            e.A && null == d && (f = {
                vd: "setnull"
            });
            e.A && e.A === d && (f = {
                vd: "match"
            });
            if (e.A && e.A !== d) {
                f = hy(d || null);
                var g = lu(d || null);
                f = {
                    vd: "diff",
                    oc: e.Y,
                    nc: f,
                    oi: e.X,
                    ni: g
                }
            }!e.A && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.V, $z().report(93, f));
            null != d && (e.D = EC(d), gy(e.D) && (e.T = !0, Zi(e.h), Zi(e.o), Zi(e.l), e.h = null, e.o = null, e.l = null, Zi(e.g), e.g = new PB(d), "function" !== typeof d.getBoundingClientRect ? (e.L = e.B, W.l = e.L) : e.L = d, null != (d = e.I.G) && (e = e.g.D.g, d.o = e, d.g && (d = d.g,
                d.g = e, HB(d, e)))));
            this.X = !0;
            this.resize(a, b, c);
            e = uA(this.o, this.J);
            lD(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.D.isEmpty();) b = a = this.D, 0 === b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
            this.W()
        }
    };
    l.We = function() {
        return FC(this.g)
    };
    l.Ve = function() {
        return this.J
    };
    l.getRemainingTime = function() {
        return this.aa
    };
    l.getAdSkippableState = function() {
        return this.M
    };
    l.Ce = function() {
        lD(this, "discardAdBreak")
    };
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            var b = this.o.bitrate,
                c = a.bitrate;
            $z().report(96, {
                init: this.X ? "1" : "0",
                start: this.da ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.o = a;
            a = uA(this.o, this.J);
            lD(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    };
    l.skip = function() {
        lD(this, "skip")
    };
    l.start = function() {
        if (this.K) {
            (Cd || Ed) && $z().report(50, {
                customPlayback: FC(this.g)
            });
            this.g.H || $z().report(26, {
                adtagurl: this.K,
                customPlayback: FC(this.g)
            });
            Mm(this.g.B) && $z().report(30, {
                adtagurl: this.K,
                customPlayback: FC(this.g)
            });
            var a = this.g.C,
                b = this.g.B,
                c;
            if (c = a && b && !Mm(a)) a = kA(a), b = kA(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && $z().report(31, {
                adtagurl: this.K,
                customPlayback: FC(this.g)
            })
        }
        if (!this.g.H &&
            !FC(this.g)) throw Dy(By);
        b = this.g;
        b.R = this.J && null != b.C;
        this.g.I.g.style.opacity = 1;
        null != this.A && 1 == this.getVolume() && ("boolean" === typeof this.A.muted && this.A.muted ? this.setVolume(0) : "number" === typeof this.A.volume && (b = this.A.volume, 0 <= b && 1 >= b && this.setVolume(this.A.volume)));
        this.da = !0;
        lD(this, "start")
    };
    l.gf = function() {
        if (!this.o.disableClickThrough && null != this.h) {
            var a = this.h.g.clickThroughUrl;
            if (null != a) {
                var b = this.h.g.attributionParams;
                Pu(a, b);
                $z().report(156, {
                    te: !!b
                })
            }
        }
    };
    l.resize = function(a, b, c) {
        var d = this.g,
            e = d.B;
        null != e && (-1 == a ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", -1 == b ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
        e = d.I;
        e.g.width = -1 == a ? "100%" : a;
        e.g.height = -1 == b ? "100%" : b;
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.M = new mf(a, b);
        lD(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    l.stop = function() {
        lD(this, "stop")
    };
    l.expand = function() {
        lD(this, "expand")
    };
    l.collapse = function() {
        lD(this, "collapse")
    };
    l.getVolume = function() {
        return this.T
    };
    l.setVolume = function(a) {
        this.T = a;
        this.g.g.setVolume(a);
        lD(this, "volume", {
            volume: a
        })
    };
    l.pause = function() {
        lD(this, "pause")
    };
    l.resume = function() {
        lD(this, "resume")
    };
    l.destroy = function() {
        this.W()
    };
    l.getCuePoints = function() {
        return this.kb
    };
    l.getCurrentAd = function() {
        return this.h
    };
    l.N = function() {
        lD(this, "destroy");
        null != this.l && this.l.W();
        this.V.W();
        this.D.clear();
        this.G && (this.G.stop(), this.G.W());
        iy() && oA(this.H, this.R);
        M.prototype.N.call(this)
    };
    l.clicked = function() {
        $z().report(124, {
            api: "clicked"
        });
        var a = this.h && this.h.g.clickThroughUrl;
        if (a && this.h.isUiDisabled()) {
            var b = this.h.g.attributionParams;
            Pu(a, b);
            $z().report(156, {
                te: !!b
            })
        }
        lD(this, "click")
    };
    l.focus = function() {
        vy(this.C, "userInteraction", "focusUiElement")
    };
    Z.prototype.clicked = Z.prototype.clicked;
    Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.Ce;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.Ve;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.We;
    Z.prototype.init = Z.prototype.init;
    var mD = function(a, b) {
        bj.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b
    };
    t(mD, bj);
    mD.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        var c = this.g;
        c.A = a;
        null != a.currentTime && (c.G = new PC(a, c.C), c.G.start());
        null != b && (c.o = b);
        return this.g
    };
    mD.prototype.getUserRequestContext = function() {
        return this.l
    };
    mD.prototype.getUserRequestContext = mD.prototype.getUserRequestContext;
    mD.prototype.getAdsManager = mD.prototype.getAdsManager;
    var nD = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    };
    y("module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type", nD, void 0);
    var oD = function() {
        this.videoPlayMuted = this.videoPlayActivation = "unknown";
        this.videoContinuousPlay = "0";
        this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
        this.forceNonLinearFullSlot = !1;
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.vastLoadTimeout = 5E3;
        this.omidAccessModeRules = {};
        this.pageUrl = null
    };
    oD.prototype.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    oD.prototype.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    };
    oD.prototype.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    };
    oD.prototype.setContinuousPlayback = oD.prototype.setContinuousPlayback;
    oD.prototype.setAdWillPlayMuted = oD.prototype.setAdWillPlayMuted;
    oD.prototype.setAdWillAutoPlay = oD.prototype.setAdWillAutoPlay;
    var pD = function(a) {
        var b = document;
        try {
            var c = Fs(b);
            var d = c ? xe(Hs, c ? JSON.parse(c) : null) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        if (De(d, 7)) return 4;
        if (a) {
            if (wb(Be(d, 3), a)) return 2;
            if (wb(Be(d, 4), a)) return 3
        }
        return 1
    };

    function qD(a, b, c) {
        b = De(b, 5) && "null" !== c.origin ? c.document.cookie : null;
        return null === b ? null : (new Cs({
            cookie: b
        })).get(a) || ""
    };
    var rD = function() {
            this.g = window;
            this.h = 0
        },
        sD = function(a, b) {
            return b ? b ? qD("__gads", b, a.g) : null : null
        };
    var tD = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            if (e.rel = "preload", sc("preload", "stylesheet")) {
                e.href = gc(b).toString();
                var f = Vc('style[nonce],link[rel="stylesheet"][nonce]', e.ownerDocument && e.ownerDocument.defaultView);
                f && e.setAttribute("nonce", f)
            } else {
                if (b instanceof fc) var g = gc(b).toString();
                else {
                    if (b instanceof wc) var h = xc(b);
                    else {
                        if (b instanceof wc) var k = b;
                        else b = "object" == typeof b && b.Qa ? b.Ga() : String(b), Ac.test(b) || (b = "about:invalid#zClosurez"), k = new wc(b,
                            vc);
                        h = xc(k)
                    }
                    g = h
                }
                e.href = g
            }
        } catch (n) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (n) {}
    };
    var uD = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        vD = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        wD = u,
        yD = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(u.location.hostname)];
            xD[3] >= Ya() && b.push("adsid=" + encodeURIComponent(xD[1]));
            return a + "?" + b.join("&")
        },
        xD, zD, AD = function() {
            wD = u;
            xD = wD.googleToken = wD.googleToken || {};
            var a = Ya();
            xD[1] && xD[3] > a && 0 < xD[2] || (xD[1] = "", xD[2] = -1, xD[3] = -1, xD[4] = "", xD[6] = "");
            zD = wD.googleIMState = wD.googleIMState || {};
            a = zD[1];
            uD.test(a) && !vD.test(a) ||
                (zD[1] = ".google.com");
            Array.isArray(zD[5]) || (zD[5] = []);
            "boolean" !== typeof zD[6] && (zD[6] = !1);
            Array.isArray(zD[7]) || (zD[7] = []);
            "number" !== typeof zD[8] && (zD[8] = 0)
        },
        BD = {
            Cc: function() {
                return 0 < zD[8]
            },
            lf: function() {
                zD[8]++
            },
            mf: function() {
                0 < zD[8] && zD[8]--
            },
            nf: function() {
                zD[8] = 0
            },
            Dh: function() {
                return !1
            },
            Cd: function() {
                return zD[5]
            },
            td: function(a) {
                try {
                    a()
                } catch (b) {
                    u.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Ld: function() {
                if (!BD.Cc()) {
                    var a = u.document,
                        b = function(e) {
                            e = yD(e);
                            a: {
                                try {
                                    var f = Vc("script[nonce]", void 0);
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            tD(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return u.processGoogleToken({}, 2)
                            };
                            nu();
                            e = hc(e);
                            f.src = bf(e);
                            df(f);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), BD.lf()
                            } catch (g) {}
                        },
                        c = zD[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    u.setTimeout(function() {
                        return u.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        CD = function(a) {
            AD();
            var b = wD.googleToken[5] || 0;
            a && (0 != b || xD[3] >= Ya() ? BD.td(a) : (BD.Cd().push(a), BD.Ld()));
            xD[3] >= Ya() && xD[2] >= Ya() || BD.Ld()
        },
        DD = function(a) {
            u.processGoogleToken = u.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                AD();
                1 == c ? BD.nf() : BD.mf();
                var k = wD.googleToken = wD.googleToken || {},
                    n = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !BD.Cc() && (!(xD[3] >= Ya()) || "NT" ==
                    xD[1]);
                var m = !(xD[3] >= Ya()) && 0 != c;
                if (n || e || m) e = Ya(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && dg(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, AD();
                if (n || !BD.Cc()) {
                    c = BD.Cd();
                    for (b = 0; b < c.length; b++) BD.td(c[b]);
                    c.length = 0
                }
            };
            CD(a)
        };
    var ED = function(a, b) {
        b = void 0 === b ? 500 : b;
        L.call(this);
        this.h = a;
        this.B = b;
        this.g = null;
        this.o = {};
        this.A = 0;
        this.l = null
    };
    t(ED, L);
    ED.prototype.N = function() {
        this.o = {};
        this.l && (hf(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        L.prototype.N.call(this)
    };
    var GD = function(a) {
            var b;
            return "function" === typeof(null === (b = a.h) || void 0 === b ? void 0 : b.__uspapi) || null != FD(a)
        },
        ID = function(a, b) {
            var c = {};
            if (GD(a)) {
                var d = kb(function() {
                    return b(c)
                });
                HD(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.B)
            } else b(c)
        },
        HD = function(a, b) {
            var c, d;
            if ("function" === typeof(null === (c = a.h) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.h) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
            else if (FD(a)) {
                JD(a);
                var e = ++a.A;
                a.o[e] = b;
                a.g && (b = {}, a.g.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }, b), "*"))
            }
        },
        FD = function(a) {
            if (a.g) return a.g;
            a.g = Wf(a.h, "__uspapiLocator");
            return a.g
        },
        JD = function(a) {
            a.l || (a.l = function(b) {
                var c;
                try {
                    var d = {};
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var e = d.__uspapiReturn;
                    null === (c = a.o) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success)
                } catch (f) {}
            }, gf(a.h, "message", a.l))
        };
    var KD = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        LD = function() {
            var a = void 0 === a ? window : a;
            if (!KD(a) && Ng(Gg) || KD(a) && Ng(Hg)) {
                a = a.navigator.userAgent;
                var b = /Chrome/.test(a);
                return /Android/.test(a) && b
            }
            return !1
        },
        MD = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return LD()
            },
            shouldRequestToken: function() {
                return LD()
            }
        };
    H(Mg);
    var OD = function(a, b) {
        a = void 0 === a ? null : a;
        b = void 0 === b ? !1 : b;
        L.call(this);
        this.h = b;
        this.g = [];
        Ng(Lg) ? LD() && this.g.push(MD) : this.g = a || [MD];
        if (document.hasTrustToken && !Ng(Ig) && !Array.isArray(window.goog_tt_state)) {
            var c = ND(this);
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return c.slice()
                }
            })
        }
    };
    t(OD, L);
    var ND = function(a) {
            return a.g.map(function(b) {
                return {
                    issuerOrigin: b.issuerOrigin,
                    state: Ng(Jg) && !a.h ? 12 : 1
                }
            })
        },
        PD = function(a, b) {
            var c = window.goog_tt_state.find(function(d) {
                return d.issuerOrigin === a
            });
            c && (c.state = b)
        },
        QD = function() {
            var a = window.goog_tt_state;
            return Array.isArray(a) && a.some(function(b) {
                return 1 != b.state
            })
        },
        RD = function(a) {
            var b = "" + a.issuerOrigin + a.redemptionPath,
                c = {
                    keepalive: !0,
                    redirect: "follow",
                    method: "get",
                    trustToken: {
                        type: "token-redemption",
                        issuer: a.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            PD(a.issuerOrigin, 2);
            return window.fetch(b, c).then(function(d) {
                if (!d.ok) throw Error(d.status + ": Network response was not ok!");
                PD(a.issuerOrigin, 6)
            }).catch(function(d) {
                d && "NoModificationAllowedError" === d.name ? PD(a.issuerOrigin, 6) : PD(a.issuerOrigin, 5)
            })
        },
        SD = function(a, b) {
            var c = "" + a.issuerOrigin + a.issuancePath,
                d = {
                    trustToken: {
                        type: "token-request"
                    }
                };
            Ng(Kg) && (d.keepalive = !0);
            PD(a.issuerOrigin, 8);
            return window.fetch(c, d).then(function(e) {
                if (!e.ok) throw Error(e.status + ": Network response was not ok!");
                PD(a.issuerOrigin,
                    10);
                if (b) return RD(a)
            }).catch(function(e) {
                if (e && "NoModificationAllowedError" === e.name) {
                    if (PD(a.issuerOrigin, 10), b) return RD(a)
                } else PD(a.issuerOrigin, 9)
            })
        },
        TD = function() {
            PD(MD.issuerOrigin, 13);
            return document.hasTrustToken(MD.issuerOrigin).then(function(a) {
                return a ? RD(MD) : SD(MD, !0)
            })
        },
        UD = function() {
            var a = new OD(null, !1);
            if (document.hasTrustToken && !Ng(Ig) && (!Ng(Jg) || a.h) && !QD()) {
                var b = [];
                Ng(Lg) ? LD() && b.push(TD()) : a.g.forEach(function(c) {
                    PD(c.issuerOrigin, 13);
                    var d = c.shouldRedeemToken(),
                        e = c.shouldRequestToken();
                    if (d || e) {
                        var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                            if (g) {
                                if (d) return RD(c)
                            } else {
                                if (e) return SD(c, d);
                                PD(c.issuerOrigin, 3)
                            }
                        });
                        b.push(f)
                    } else PD(c.issuerOrigin, 7)
                });
                window.Promise && window.Promise.all && (a = window.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }))
            }
        };
    (function() {
        if (!Ib(function(b) {
                return b.match(E().location.href)
            })) {
            var a = Vz(rf());
            null == a && document.querySelectorAll && (a = Vz(document.querySelectorAll("script")));
        }
    })();
    var VD = function(a) {
        M.call(this);
        var b = this,
            c = Ix(Kx(this.getSettings()));
        c && 0 < c.length && (Yh.reset(), $h(new Bi(c)));
        this.D = new rD;
        this.g = a;
        this.G = new Map;
        this.o = this.g.I;
        this.H = new ru(this);
        aj(this, this.H);
        this.J = new Nx(window);
        this.K = new ED(window);
        this.h = null;
        this.A = {};
        0 != W.g ? (this.l = new gA, aj(this, this.l)) : this.l = iA();
        iy() && (this.l.init(sC(this.o)), this.C = nA(this.l, this.g.L), $i(this, function() {
            var d = b.C;
            b.l.o.delete(d);
            0 != W.g && (H(kr).B[d] = null)
        }));
        Vh(Qi) && UD()
    };
    t(VD, M);
    VD.prototype.destroy = function() {
        this.W()
    };
    VD.prototype.getVersion = function() {
        return "h.3.482.0"
    };
    VD.prototype.requestAds = function(a, b) {
        var c = this,
            d = [],
            e = null;
        Px(this.J) && d.push(new Promise(function(g) {
            Sx(c.J, function(h) {
                e = h;
                g()
            })
        }));
        var f = null;
        GD(this.K) && d.push(new Promise(function(g) {
            ID(c.K, function(h) {
                f = h;
                g()
            })
        }));
        Promise.all(d).then(function() {
            WD(c, a, b, {
                Yc: e,
                cd: f
            })
        })
    };
    var WD = function(a, b, c, d) {
        var e = b.adTagUrl;
        e && $z().report(8, {
            adtagurl: e,
            customPlayback: FC(a.g),
            customClick: null != a.g.C
        });
        var f = "goog_" + ad++;
        a.G.set(f, c || null);
        var g = XD({
            adTagUrl: e,
            Gd: !0,
            Yc: d.Yc,
            cd: d.cd
        });
        a.h = Xx(e, g || {});
        Vh(Ui) && tz(a.h, function() {
            YD(a)
        });
        ZD(Zx(a.h)) ? $D().then(function() {
            aE(a, f, b, g)
        }) : aE(a, f, b, g)
    };
    VD.prototype.getSettings = function() {
        return W
    };
    VD.prototype.contentComplete = function() {
        vy(sC(this.o), "adsLoader", "contentComplete")
    };
    var ZD = function(a) {
        return a ? !1 : !fy()
    };
    VD.prototype.M = function(a) {
        var b = a.ha;
        switch (b) {
            case "adsLoaded":
                b = a.la;
                a = a.Mb;
                b = new Z(this.l, this.g, b.adTagUrl || "", b.adCuePoints, this.C, b.isCustomClickTrackingAllowed, sC(this.o, a));
                this.dispatchEvent(new mD(b, bE(this, a)));
                break;
            case "error":
                b = a.la;
                this.dispatchEvent(new JC(new HC(b), bE(this, a.Mb)));
                a = {
                    error: b.errorCode,
                    vis: lh(document)
                };
                $z().report(7, a);
                break;
            case "cookieUpdate":
                a = a.la;
                if (null == a) break;
                var c = a.gfpCookie;
                if (c && W.h) {
                    var d = new Lx;
                    Ae(d, 5, !0);
                    b = this.D;
                    c = xe(Ik, c ? JSON.parse(c) : null);
                    if (d) {
                        if (d) {
                            var e = {
                                    Hd: C(c, 2) - Date.now() / 1E3,
                                    path: C(c, 3),
                                    domain: C(c, 4),
                                    rf: !1
                                },
                                f = b.g;
                            De(d, 5) && "null" !== f.origin && (new Cs(f.document)).set("__gads", C(c, 1), e)
                        }
                        De(d, 5) && .01 > b.g.Math.random() && (d = sD(b, d), fg({
                            domain: C(c, 4),
                            host: b.g.location.host,
                            success: d === C(c, 1) ? "1" : "0"
                        }, "gfp_cw_status"))
                    }
                }
                cE(this, a.encryptedSignalBidderIds || []);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new LC(b, null, a.la))
        }
    };
    var cE = function(a, b) {
            0 != b.length && (b = uz(b.map(function(c) {
                return {
                    Fa: c
                }
            }), a.h)) && b.forEach(function(c) {
                return c.then(function(d) {
                    d && YD(a)
                })
            })
        },
        YD = function(a) {
            var b = Py(sz(a.h));
            b && (a.A.espSignals = b, vy(sC(a.o), "adsLoader", "signalsRefresh", a.A))
        },
        bE = function(a, b) {
            var c = a.G.get(b);
            a.G.delete(b);
            return c
        },
        XD = function(a) {
            var b = a.adTagUrl;
            if (b) {
                var c = /iu=\/(\d+)\//.exec(Wc(b));
                (c = c && 2 == c.length ? c[1] : null) || (b = Zc((new P(b)).l.get("client")), c = jc(b) ? null : b);
                b = c
            } else b = null;
            b = b || "";
            var d = void 0 === d ? u : d;
            c = pD(b);
            if (0 != c) var e = c;
            else e = void 0 === e ? u : e, e = e.top, e = Vf(e, "googlefcInactive") ? 4 : b && Vf(e, "googlefcPA-" + b) ? 2 : Vf(e, "googlefcNPA") ? 3 : 0;
            b = d;
            d = b = void 0 === b ? u : b;
            d = void 0 === d ? u : d;
            (d = !!d.googlefc) || (d = b.top, d = void 0 === d ? u.top : d, d = Vf(d, "googlefcPresent"));
            var f = void 0 === f ? u : f;
            f = Vf(f.top, "googlefcLoaded");
            b = a.Yc;
            c = a.cd;
            var g = {};
            return g.gfcPresent = d && 4 != e, g.gfcLoaded = f, g.gfcUserConsent = e, g.isGdprLoader = a.Gd, g.addtlConsent = b ? b.addtlConsent : null, g.gdprApplies = b ? b.gdprApplies : null, g.tcString = b ? b.tcString : null, g.uspString =
                c ? c.uspString : null, g
        },
        $D = function() {
            return new Promise(function(a) {
                DD(function() {
                    AD();
                    W.I = xD[1] || "";
                    AD();
                    W.X = xD[6] || "";
                    AD();
                    W.J = xD[4] || "";
                    a()
                })
            })
        },
        aE = function(a, b, c, d) {
            var e = {};
            e = (e.limaExperimentIds = Zh().sort().join(","), e);
            var f = a.getSettings(),
                g = 0 != W.g ? H(kr).l : a.l.A;
            g = void 0 === g ? null : g;
            var h = {};
            null != g && (h.activeViewPushUpdates = g);
            h.activityMonitorMode = f.g;
            h.adsToken = f.I;
            h.autoPlayAdBreaks = f.isAutoPlayAdBreaks();
            h.companionBackfill = f.getCompanionBackfill();
            h.cookiesEnabled = f.h;
            h.disableCustomPlaybackForIOS10Plus =
                f.getDisableCustomPlaybackForIOS10Plus();
            h.engagementDetection = !0;
            h.isFunctionalTest = !1;
            h.isVpaidAdapter = f.Fb();
            h["1pJar"] = f.J;
            h.numRedirects = f.getNumRedirects();
            h.pageCorrelator = f.R;
            h.persistentStateCorrelator = Tg();
            h.playerType = f.getPlayerType();
            h.playerVersion = f.getPlayerVersion();
            h.ppid = f.getPpid();
            h.privacyControls = f.X;
            h.reportMediaRequests = !1;
            h.sessionId = f.C;
            h.streamCorrelator = f.Y;
            h.testingConfig = Kx(f).g;
            h.urlSignals = f.aa;
            h.vpaidMode = f.getVpaidMode();
            h.featureFlags = f.getFeatureFlags();
            g = c.adTagUrl;
            f = {};
            f.contentMediaUrl = a.g.J;
            f.customClickTrackingProvided = null != a.g.C;
            a: {
                var k = Lk();k = q(k);
                for (var n = k.next(); !n.done; n = k.next())
                    if (n = n.value, n.url && n.url.includes("amp=1")) {
                        k = !0;
                        break a
                    } k = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != Ok().l
            }
            f.isAmp = k;
            a: {
                try {
                    var m = window.top.location.href
                } catch (Lu) {
                    m = 2;
                    break a
                }
                m = null == m ? 2 : m == window.document.location.href ? 0 : 1
            }
            f.iframeState = m;
            f.imaHostingDomain = window.document.domain;
            f.imaHostingPageUrl = window.document.URL;
            if (Rm()) var v =
                window.location.href;
            else {
                n = Ok();
                m = n.h;
                k = n.g;
                var r = n.l;
                n = null;
                if (r)
                    if (r = r.url, Vh(Si)) try {
                        v = Xs(r);
                        var w = v.g,
                            x = vz(w, "/v/");
                        x || (x = vz(w, "/a/"));
                        if (!x) throw Error("Can not extract standalone amp url.");
                        var G = vz("/" + x, "/s/"),
                            la = Ms(v.l);
                        la.remove("amp_js_v");
                        la.remove("amp_lite");
                        var Qa = G ? Xs("https://" + G) : Xs("http://" + x);
                        Ls(Qa, la);
                        n = Qa.toString()
                    } catch (Lu) {
                        n = null
                    } else n = wz(r);
                v = n ? n : m && m.url ? m.url : k && k.url ? k.url : ""
            }
            f.topAccessiblePageUrl = v;
            f.referrer = window.document.referrer;
            f.domLoadTime = a.o.J;
            f.sdkImplLoadTime =
                a.o.K;
            f.supportsResizing = !FC(a.g);
            v = E().location.ancestorOrigins;
            f.topOrigin = v ? 0 < v.length && 200 > v[v.length - 1].length ? v[v.length - 1] : "" : null;
            f.osdId = a.C;
            f.usesCustomVideoPlayback = FC(a.g);
            f.usesInlinePlayback = a.g.D;
            w = a.g.G;
            v = [];
            G = x = "";
            if (null != w) {
                x = w;
                G = !0;
                G = void 0 === G ? !1 : G;
                la = [];
                for (Qa = 0; x && 25 > Qa; ++Qa) {
                    m = "";
                    void 0 !== G && G || (m = (m = 9 !== x.nodeType && x.id) ? "/" + m : "");
                    a: {
                        if (x && x.nodeName && x.parentElement) {
                            k = x.nodeName.toString().toLowerCase();
                            n = x.parentElement.childNodes;
                            for (var Ad = r = 0; Ad < n.length; ++Ad) {
                                var Sa =
                                    n[Ad];
                                if (Sa.nodeName && Sa.nodeName.toString().toLowerCase() === k) {
                                    if (x === Sa) {
                                        k = "." + r;
                                        break a
                                    }++r
                                }
                            }
                        }
                        k = ""
                    }
                    la.push((x.nodeName && x.nodeName.toString().toLowerCase()) + m + k);
                    x = x.parentElement
                }
                x = la.join();
                if (w) {
                    w = (w = w.ownerDocument) && (w.defaultView || w.parentWindow) || null;
                    G = [];
                    if (w) try {
                        var U = w.parent;
                        for (la = 0; U && U !== w && 25 > la; ++la) {
                            var $c = U.frames;
                            for (Qa = 0; Qa < $c.length; ++Qa)
                                if (w === $c[Qa]) {
                                    G.push(Qa);
                                    break
                                } w = U;
                            U = w.parent
                        }
                    } catch (Lu) {}
                    G = G.join()
                } else G = ""
            }
            v.push(x, G);
            if (null != g) {
                for (U = 0; U < ot.length - 1; ++U) v.push(Kf(g,
                    ot[U]) || "");
                U = Kf(g, "videoad_start_delay");
                $c = "";
                U && (U = parseInt(U, 10), $c = 0 > U ? "postroll" : 0 == U ? "preroll" : "midroll");
                v.push($c)
            } else
                for (U = 0; U < ot.length; ++U) v.push("");
            U = v.join(":");
            $c = U.length;
            if (0 == $c) U = 0;
            else {
                g = 305419896;
                for (v = 0; v < $c; v++) g ^= (g << 5) + (g >> 2) + U.charCodeAt(v) & 4294967295;
                U = 0 < g ? g : 4294967296 + g
            }
            f = (f.videoAdKey = U.toString(), f);
            U = {};
            d = (U.consentSettings = d, U.imalibExperiments = e, U.settings = h, U.videoEnvironment = f, U);
            e = {};
            e.adsResponse = c.adsResponse;
            e.videoPlayActivation = c.videoPlayActivation;
            e.videoPlayMuted =
                c.videoPlayMuted;
            e.videoContinuousPlay = c.videoContinuousPlay;
            e.adTagUrl = c.adTagUrl;
            e.contentDuration = c.contentDuration;
            e.contentKeywords = c.contentKeywords;
            e.contentTitle = c.contentTitle;
            e.linearAdSlotWidth = c.linearAdSlotWidth;
            e.linearAdSlotHeight = c.linearAdSlotHeight;
            e.nonLinearAdSlotWidth = c.nonLinearAdSlotWidth;
            e.nonLinearAdSlotHeight = c.nonLinearAdSlotHeight;
            e.forceNonLinearFullSlot = c.forceNonLinearFullSlot;
            e.liveStreamPrefetchSeconds = c.liveStreamPrefetchSeconds;
            e.vastLoadTimeout = c.vastLoadTimeout;
            e.omidAccessModeRules = c.omidAccessModeRules;
            e.pageUrl = c.pageUrl;
            Object.assign(d, e);
            if (a.h && W.h) {
                e = a.h;
                c = new Lx;
                e = !Zx(e);
                Ae(c, 5, e);
                e = a.D;
                if (0 === e.h) {
                    if (sD(e, c)) h = !0;
                    else if (h = e.g, De(c, 5) && "null" !== h.origin && (new Cs(h.document)).set("GoogleAdServingTest", "Good", void 0), h = "Good" === qD("GoogleAdServingTest", c, e.g)) f = e.g, De(c, 5) && "null" !== f.origin && (new Cs(f.document)).remove("GoogleAdServingTest", void 0, void 0);
                    e.h = h ? 2 : 1
                }
                d.isBrowserCookieEnabled = 2 === e.h;
                c = sD(a.D, c);
                null !== c && (d.gfpCookieValue = c)
            }
            d.trustTokenStatus =
                a.A.trustTokenStatus;
            if (c = Py(sz(a.h))) a.A.espSignals = c, d.espSignals = c;
            d.isEapLoader = !1;
            b = sC(a.o, b);
            a.H.O(b, "adsLoader", a.M);
            vy(b, "adsLoader", "requestAds", d)
        };
    VD.prototype.contentComplete = VD.prototype.contentComplete;
    VD.prototype.getSettings = VD.prototype.getSettings;
    VD.prototype.requestAds = VD.prototype.requestAds;
    VD.prototype.getVersion = VD.prototype.getVersion;
    VD.prototype.destroy = VD.prototype.destroy;
    y("google.ima.AdCuePoints", JB, window);
    y("google.ima.AdDisplayContainer", GC, window);
    y("google.ima.AdError.ErrorCode", {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        Ng: 502,
        oh: 503,
        Qf: 602,
        Lf: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        Gg: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        eh: 2002
    }, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    y("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    y("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    y("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    y("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    y("google.ima.AdError.Type", IC, window);
    y("google.ima.AdErrorEvent.Type", KC, window);
    y("google.ima.AdEvent.Type", MC, window);
    y("google.ima.AdsLoader", VD, window);
    y("google.ima.AdsManagerLoadedEvent.Type", nD, window);
    y("google.ima.CompanionAdSelectionSettings", jy, window);
    y("google.ima.CompanionAdSelectionSettings.CreativeType", ky, void 0);
    y("google.ima.CompanionAdSelectionSettings.ResourceType", ly, void 0);
    y("google.ima.CompanionAdSelectionSettings.SizeCriteria", my, void 0);
    y("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    y("ima.ImaSdkSettings", V, window);
    y("google.ima.settings", W, window);
    y("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    }, void 0);
    y("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2
    }, void 0);
    y("google.ima.AdsRenderingSettings", tA, window);
    y("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    y("google.ima.AdsRequest", oD, window);
    y("google.ima.VERSION", "3.482.0", void 0);
    y("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    }, void 0);
    y("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    }, void 0);
    y("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    }, void 0);
})();