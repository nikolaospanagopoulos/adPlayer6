(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS2 = (cb2, mod) => function __require() {
    return mod || (0, cb2[Object.keys(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // out/ima/ima3.js
  var require_ima32 = __commonJS2({
    "out/ima/ima3.js"(exports, module) {
      (() => {
        var __commonJS = (cb2, mod) => function __require() {
          return mod || (0, cb2[Object.keys(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };
        var require_ima3 = __commonJS({
          "src/ima/ima3.js"(exports, module) {
            (function() {
              var l, aa = function(a2) {
                var b = 0;
                return function() {
                  return b < a2.length ? {
                    done: false,
                    value: a2[b++]
                  } : {
                    done: true
                  };
                };
              }, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a2, b, c) {
                if (a2 == Array.prototype || a2 == Object.prototype)
                  return a2;
                a2[b] = c.value;
                return a2;
              }, ca = function(a2) {
                a2 = [typeof globalThis == "object" && globalThis, a2, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
                for (var b = 0; b < a2.length; ++b) {
                  var c = a2[b];
                  if (c && c.Math == Math)
                    return c;
                }
                throw Error("Cannot find global object");
              }, da = ca(this), p = function(a2, b) {
                if (b)
                  a: {
                    var c = da;
                    a2 = a2.split(".");
                    for (var d = 0; d < a2.length - 1; d++) {
                      var e = a2[d];
                      if (!(e in c))
                        break a;
                      c = c[e];
                    }
                    a2 = a2[a2.length - 1];
                    d = c[a2];
                    b = b(d);
                    b != d && b != null && ba(c, a2, {
                      configurable: true,
                      writable: true,
                      value: b
                    });
                  }
              };
              p("Symbol", function(a2) {
                if (a2)
                  return a2;
                var b = function(f, g) {
                  this.g = f;
                  ba(this, "description", {
                    configurable: true,
                    writable: true,
                    value: g
                  });
                };
                b.prototype.toString = function() {
                  return this.g;
                };
                var c = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", d = 0, e = function(f) {
                  if (this instanceof e)
                    throw new TypeError("Symbol is not a constructor");
                  return new b(c + (f || "") + "_" + d++, f);
                };
                return e;
              });
              p("Symbol.iterator", function(a2) {
                if (a2)
                  return a2;
                a2 = Symbol("Symbol.iterator");
                for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                  var d = da[b[c]];
                  typeof d === "function" && typeof d.prototype[a2] != "function" && ba(d.prototype, a2, {
                    configurable: true,
                    writable: true,
                    value: function() {
                      return ea(aa(this));
                    }
                  });
                }
                return a2;
              });
              var ea = function(a2) {
                a2 = {
                  next: a2
                };
                a2[Symbol.iterator] = function() {
                  return this;
                };
                return a2;
              }, fa = function(a2) {
                return a2.raw = a2;
              }, q = function(a2) {
                var b = typeof Symbol != "undefined" && Symbol.iterator && a2[Symbol.iterator];
                return b ? b.call(a2) : {
                  next: aa(a2)
                };
              }, ha = function(a2) {
                if (!(a2 instanceof Array)) {
                  a2 = q(a2);
                  for (var b, c = []; !(b = a2.next()).done; )
                    c.push(b.value);
                  a2 = c;
                }
                return a2;
              }, ia = function(a2, b) {
                return Object.prototype.hasOwnProperty.call(a2, b);
              }, ka = typeof Object.assign == "function" ? Object.assign : function(a2, b) {
                for (var c = 1; c < arguments.length; c++) {
                  var d = arguments[c];
                  if (d)
                    for (var e in d)
                      ia(d, e) && (a2[e] = d[e]);
                }
                return a2;
              };
              p("Object.assign", function(a2) {
                return a2 || ka;
              });
              var ma = typeof Object.create == "function" ? Object.create : function(a2) {
                var b = function() {
                };
                b.prototype = a2;
                return new b();
              }, na = function() {
                function a2() {
                  function c() {
                  }
                  new c();
                  Reflect.construct(c, [], function() {
                  });
                  return new c() instanceof c;
                }
                if (typeof Reflect != "undefined" && Reflect.construct) {
                  if (a2())
                    return Reflect.construct;
                  var b = Reflect.construct;
                  return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c;
                  };
                }
                return function(c, d, e) {
                  e === void 0 && (e = c);
                  e = ma(e.prototype || Object.prototype);
                  return Function.prototype.apply.call(c, e, d) || e;
                };
              }(), oa;
              if (typeof Object.setPrototypeOf == "function")
                oa = Object.setPrototypeOf;
              else {
                var pa;
                a: {
                  var qa = {
                    a: true
                  }, ra = {};
                  try {
                    ra.__proto__ = qa;
                    pa = ra.a;
                    break a;
                  } catch (a2) {
                  }
                  pa = false;
                }
                oa = pa ? function(a2, b) {
                  a2.__proto__ = b;
                  if (a2.__proto__ !== b)
                    throw new TypeError(a2 + " is not extensible");
                  return a2;
                } : null;
              }
              var sa = oa, t = function(a2, b) {
                a2.prototype = ma(b.prototype);
                a2.prototype.constructor = a2;
                if (sa)
                  sa(a2, b);
                else
                  for (var c in b)
                    if (c != "prototype")
                      if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a2, c, d);
                      } else
                        a2[c] = b[c];
                a2.ya = b.prototype;
              }, ta = function() {
                this.B = false;
                this.l = null;
                this.A = void 0;
                this.g = 1;
                this.I = this.h = 0;
                this.o = null;
              }, ua = function(a2) {
                if (a2.B)
                  throw new TypeError("Generator is already running");
                a2.B = true;
              };
              ta.prototype.C = function(a2) {
                this.A = a2;
              };
              var va = function(a2, b) {
                a2.o = {
                  zd: b,
                  Xe: true
                };
                a2.g = a2.h || a2.I;
              };
              ta.prototype.return = function(a2) {
                this.o = {
                  return: a2
                };
                this.g = this.I;
              };
              var wa = function(a2, b, c) {
                a2.g = c;
                return {
                  value: b
                };
              }, xa = function(a2) {
                a2.h = 0;
                var b = a2.o.zd;
                a2.o = null;
                return b;
              }, ya = function(a2) {
                this.g = new ta();
                this.h = a2;
              }, Ba = function(a2, b) {
                ua(a2.g);
                var c = a2.g.l;
                if (c)
                  return za(a2, "return" in c ? c["return"] : function(d) {
                    return {
                      value: d,
                      done: true
                    };
                  }, b, a2.g.return);
                a2.g.return(b);
                return Aa(a2);
              }, za = function(a2, b, c, d) {
                try {
                  var e = b.call(a2.g.l, c);
                  if (!(e instanceof Object))
                    throw new TypeError("Iterator result " + e + " is not an object");
                  if (!e.done)
                    return a2.g.B = false, e;
                  var f = e.value;
                } catch (g) {
                  return a2.g.l = null, va(a2.g, g), Aa(a2);
                }
                a2.g.l = null;
                d.call(a2.g, f);
                return Aa(a2);
              }, Aa = function(a2) {
                for (; a2.g.g; )
                  try {
                    var b = a2.h(a2.g);
                    if (b)
                      return a2.g.B = false, {
                        value: b.value,
                        done: false
                      };
                  } catch (c) {
                    a2.g.A = void 0, va(a2.g, c);
                  }
                a2.g.B = false;
                if (a2.g.o) {
                  b = a2.g.o;
                  a2.g.o = null;
                  if (b.Xe)
                    throw b.zd;
                  return {
                    value: b.return,
                    done: true
                  };
                }
                return {
                  value: void 0,
                  done: true
                };
              }, Ca = function(a2) {
                this.next = function(b) {
                  ua(a2.g);
                  a2.g.l ? b = za(a2, a2.g.l.next, b, a2.g.C) : (a2.g.C(b), b = Aa(a2));
                  return b;
                };
                this.throw = function(b) {
                  ua(a2.g);
                  a2.g.l ? b = za(a2, a2.g.l["throw"], b, a2.g.C) : (va(a2.g, b), b = Aa(a2));
                  return b;
                };
                this.return = function(b) {
                  return Ba(a2, b);
                };
                this[Symbol.iterator] = function() {
                  return this;
                };
              }, Da = function(a2, b) {
                b = new Ca(new ya(b));
                sa && a2.prototype && sa(b, a2.prototype);
                return b;
              }, Ea = function(a2) {
                function b(d) {
                  return a2.next(d);
                }
                function c(d) {
                  return a2.throw(d);
                }
                return new Promise(function(d, e) {
                  function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
                  }
                  f(a2.next());
                });
              }, Fa = function(a2) {
                return Ea(new Ca(new ya(a2)));
              };
              p("Reflect", function(a2) {
                return a2 ? a2 : {};
              });
              p("Reflect.construct", function() {
                return na;
              });
              p("Reflect.setPrototypeOf", function(a2) {
                return a2 ? a2 : sa ? function(b, c) {
                  try {
                    return sa(b, c), true;
                  } catch (d) {
                    return false;
                  }
                } : null;
              });
              p("Promise", function(a2) {
                function b() {
                  this.g = null;
                }
                function c(g) {
                  return g instanceof e ? g : new e(function(h) {
                    h(g);
                  });
                }
                if (a2)
                  return a2;
                b.prototype.h = function(g) {
                  if (this.g == null) {
                    this.g = [];
                    var h = this;
                    this.l(function() {
                      h.B();
                    });
                  }
                  this.g.push(g);
                };
                var d = da.setTimeout;
                b.prototype.l = function(g) {
                  d(g, 0);
                };
                b.prototype.B = function() {
                  for (; this.g && this.g.length; ) {
                    var g = this.g;
                    this.g = [];
                    for (var h = 0; h < g.length; ++h) {
                      var k = g[h];
                      g[h] = null;
                      try {
                        k();
                      } catch (n) {
                        this.o(n);
                      }
                    }
                  }
                  this.g = null;
                };
                b.prototype.o = function(g) {
                  this.l(function() {
                    throw g;
                  });
                };
                var e = function(g) {
                  this.g = 0;
                  this.l = void 0;
                  this.h = [];
                  this.C = false;
                  var h = this.o();
                  try {
                    g(h.resolve, h.reject);
                  } catch (k) {
                    h.reject(k);
                  }
                };
                e.prototype.o = function() {
                  function g(n) {
                    return function(m) {
                      k || (k = true, n.call(h, m));
                    };
                  }
                  var h = this, k = false;
                  return {
                    resolve: g(this.H),
                    reject: g(this.B)
                  };
                };
                e.prototype.H = function(g) {
                  if (g === this)
                    this.B(new TypeError("A Promise cannot resolve to itself"));
                  else if (g instanceof e)
                    this.K(g);
                  else {
                    a:
                      switch (typeof g) {
                        case "object":
                          var h = g != null;
                          break a;
                        case "function":
                          h = true;
                          break a;
                        default:
                          h = false;
                      }
                    h ? this.G(g) : this.A(g);
                  }
                };
                e.prototype.G = function(g) {
                  var h = void 0;
                  try {
                    h = g.then;
                  } catch (k) {
                    this.B(k);
                    return;
                  }
                  typeof h == "function" ? this.M(h, g) : this.A(g);
                };
                e.prototype.B = function(g) {
                  this.I(2, g);
                };
                e.prototype.A = function(g) {
                  this.I(1, g);
                };
                e.prototype.I = function(g, h) {
                  if (this.g != 0)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
                  this.g = g;
                  this.l = h;
                  this.g === 2 && this.J();
                  this.L();
                };
                e.prototype.J = function() {
                  var g = this;
                  d(function() {
                    if (g.D()) {
                      var h = da.console;
                      typeof h !== "undefined" && h.error(g.l);
                    }
                  }, 1);
                };
                e.prototype.D = function() {
                  if (this.C)
                    return false;
                  var g = da.CustomEvent, h = da.Event, k = da.dispatchEvent;
                  if (typeof k === "undefined")
                    return true;
                  typeof g === "function" ? g = new g("unhandledrejection", {
                    cancelable: true
                  }) : typeof h === "function" ? g = new h("unhandledrejection", {
                    cancelable: true
                  }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", false, true, g));
                  g.promise = this;
                  g.reason = this.l;
                  return k(g);
                };
                e.prototype.L = function() {
                  if (this.h != null) {
                    for (var g = 0; g < this.h.length; ++g)
                      f.h(this.h[g]);
                    this.h = null;
                  }
                };
                var f = new b();
                e.prototype.K = function(g) {
                  var h = this.o();
                  g.Rb(h.resolve, h.reject);
                };
                e.prototype.M = function(g, h) {
                  var k = this.o();
                  try {
                    g.call(h, k.resolve, k.reject);
                  } catch (n) {
                    k.reject(n);
                  }
                };
                e.prototype.then = function(g, h) {
                  function k(r, w) {
                    return typeof r == "function" ? function(x) {
                      try {
                        n(r(x));
                      } catch (G) {
                        m(G);
                      }
                    } : w;
                  }
                  var n, m, v = new e(function(r, w) {
                    n = r;
                    m = w;
                  });
                  this.Rb(k(g, n), k(h, m));
                  return v;
                };
                e.prototype.catch = function(g) {
                  return this.then(void 0, g);
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
                  this.h == null ? f.h(k) : this.h.push(k);
                  this.C = true;
                };
                e.resolve = c;
                e.reject = function(g) {
                  return new e(function(h, k) {
                    k(g);
                  });
                };
                e.race = function(g) {
                  return new e(function(h, k) {
                    for (var n = q(g), m = n.next(); !m.done; m = n.next())
                      c(m.value).Rb(h, k);
                  });
                };
                e.all = function(g) {
                  var h = q(g), k = h.next();
                  return k.done ? c([]) : new e(function(n, m) {
                    function v(x) {
                      return function(G) {
                        r[x] = G;
                        w--;
                        w == 0 && n(r);
                      };
                    }
                    var r = [], w = 0;
                    do
                      r.push(void 0), w++, c(k.value).Rb(v(r.length - 1), m), k = h.next();
                    while (!k.done);
                  });
                };
                return e;
              });
              p("Object.setPrototypeOf", function(a2) {
                return a2 || sa;
              });
              p("WeakMap", function(a2) {
                function b() {
                }
                function c(k) {
                  var n = typeof k;
                  return n === "object" && k !== null || n === "function";
                }
                function d(k) {
                  if (!ia(k, f)) {
                    var n = new b();
                    ba(k, f, {
                      value: n
                    });
                  }
                }
                function e(k) {
                  var n = Object[k];
                  n && (Object[k] = function(m) {
                    if (m instanceof b)
                      return m;
                    Object.isExtensible(m) && d(m);
                    return n(m);
                  });
                }
                if (function() {
                  if (!a2 || !Object.seal)
                    return false;
                  try {
                    var k = Object.seal({}), n = Object.seal({}), m = new a2([
                      [k, 2],
                      [n, 3]
                    ]);
                    if (m.get(k) != 2 || m.get(n) != 3)
                      return false;
                    m.delete(k);
                    m.set(n, 4);
                    return !m.has(k) && m.get(n) == 4;
                  } catch (v) {
                    return false;
                  }
                }())
                  return a2;
                var f = "$jscomp_hidden_" + Math.random();
                e("freeze");
                e("preventExtensions");
                e("seal");
                var g = 0, h = function(k) {
                  this.g = (g += Math.random() + 1).toString();
                  if (k) {
                    k = q(k);
                    for (var n; !(n = k.next()).done; )
                      n = n.value, this.set(n[0], n[1]);
                  }
                };
                h.prototype.set = function(k, n) {
                  if (!c(k))
                    throw Error("Invalid WeakMap key");
                  d(k);
                  if (!ia(k, f))
                    throw Error("WeakMap key fail: " + k);
                  k[f][this.g] = n;
                  return this;
                };
                h.prototype.get = function(k) {
                  return c(k) && ia(k, f) ? k[f][this.g] : void 0;
                };
                h.prototype.has = function(k) {
                  return c(k) && ia(k, f) && ia(k[f], this.g);
                };
                h.prototype.delete = function(k) {
                  return c(k) && ia(k, f) && ia(k[f], this.g) ? delete k[f][this.g] : false;
                };
                return h;
              });
              p("Map", function(a2) {
                if (function() {
                  if (!a2 || typeof a2 != "function" || !a2.prototype.entries || typeof Object.seal != "function")
                    return false;
                  try {
                    var h = Object.seal({
                      x: 4
                    }), k = new a2(q([
                      [h, "s"]
                    ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                      x: 4
                    }) || k.set({
                      x: 4
                    }, "t") != k || k.size != 2)
                      return false;
                    var n = k.entries(), m = n.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s")
                      return false;
                    m = n.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !n.next().done ? false : true;
                  } catch (v) {
                    return false;
                  }
                }())
                  return a2;
                var b = new WeakMap(), c = function(h) {
                  this.h = {};
                  this.g = f();
                  this.size = 0;
                  if (h) {
                    h = q(h);
                    for (var k; !(k = h.next()).done; )
                      k = k.value, this.set(k[0], k[1]);
                  }
                };
                c.prototype.set = function(h, k) {
                  h = h === 0 ? 0 : h;
                  var n = d(this, h);
                  n.list || (n.list = this.h[n.id] = []);
                  n.ma ? n.ma.value = k : (n.ma = {
                    next: this.g,
                    Ja: this.g.Ja,
                    head: this.g,
                    key: h,
                    value: k
                  }, n.list.push(n.ma), this.g.Ja.next = n.ma, this.g.Ja = n.ma, this.size++);
                  return this;
                };
                c.prototype.delete = function(h) {
                  h = d(this, h);
                  return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ma.Ja.next = h.ma.next, h.ma.next.Ja = h.ma.Ja, h.ma.head = null, this.size--, true) : false;
                };
                c.prototype.clear = function() {
                  this.h = {};
                  this.g = this.g.Ja = f();
                  this.size = 0;
                };
                c.prototype.has = function(h) {
                  return !!d(this, h).ma;
                };
                c.prototype.get = function(h) {
                  return (h = d(this, h).ma) && h.value;
                };
                c.prototype.entries = function() {
                  return e(this, function(h) {
                    return [h.key, h.value];
                  });
                };
                c.prototype.keys = function() {
                  return e(this, function(h) {
                    return h.key;
                  });
                };
                c.prototype.values = function() {
                  return e(this, function(h) {
                    return h.value;
                  });
                };
                c.prototype.forEach = function(h, k) {
                  for (var n = this.entries(), m; !(m = n.next()).done; )
                    m = m.value, h.call(k, m[1], m[0], this);
                };
                c.prototype[Symbol.iterator] = c.prototype.entries;
                var d = function(h, k) {
                  var n = k && typeof k;
                  n == "object" || n == "function" ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
                  var m = h.h[n];
                  if (m && ia(h.h, n))
                    for (h = 0; h < m.length; h++) {
                      var v = m[h];
                      if (k !== k && v.key !== v.key || k === v.key)
                        return {
                          id: n,
                          list: m,
                          index: h,
                          ma: v
                        };
                    }
                  return {
                    id: n,
                    list: m,
                    index: -1,
                    ma: void 0
                  };
                }, e = function(h, k) {
                  var n = h.g;
                  return ea(function() {
                    if (n) {
                      for (; n.head != h.g; )
                        n = n.Ja;
                      for (; n.next != n.head; )
                        return n = n.next, {
                          done: false,
                          value: k(n)
                        };
                      n = null;
                    }
                    return {
                      done: true,
                      value: void 0
                    };
                  });
                }, f = function() {
                  var h = {};
                  return h.Ja = h.next = h.head = h;
                }, g = 0;
                return c;
              });
              var Ga = function(a2, b, c) {
                if (a2 == null)
                  throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
                if (b instanceof RegExp)
                  throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
                return a2 + "";
              };
              p("Array.prototype.find", function(a2) {
                return a2 ? a2 : function(b, c) {
                  a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                      var g = d[f];
                      if (b.call(c, g, f, d)) {
                        b = g;
                        break a;
                      }
                    }
                    b = void 0;
                  }
                  return b;
                };
              });
              p("String.prototype.repeat", function(a2) {
                return a2 ? a2 : function(b) {
                  var c = Ga(this, null, "repeat");
                  if (0 > b || 1342177279 < b)
                    throw new RangeError("Invalid count value");
                  b |= 0;
                  for (var d = ""; b; )
                    if (b & 1 && (d += c), b >>>= 1)
                      c += c;
                  return d;
                };
              });
              var Ha = function(a2, b) {
                a2 instanceof String && (a2 += "");
                var c = 0, d = false, e = {
                  next: function() {
                    if (!d && c < a2.length) {
                      var f = c++;
                      return {
                        value: b(f, a2[f]),
                        done: false
                      };
                    }
                    d = true;
                    return {
                      done: true,
                      value: void 0
                    };
                  }
                };
                e[Symbol.iterator] = function() {
                  return e;
                };
                return e;
              };
              p("Array.prototype.entries", function(a2) {
                return a2 ? a2 : function() {
                  return Ha(this, function(b, c) {
                    return [b, c];
                  });
                };
              });
              p("Object.entries", function(a2) {
                return a2 ? a2 : function(b) {
                  var c = [], d;
                  for (d in b)
                    ia(b, d) && c.push([d, b[d]]);
                  return c;
                };
              });
              p("Array.prototype.keys", function(a2) {
                return a2 ? a2 : function() {
                  return Ha(this, function(b) {
                    return b;
                  });
                };
              });
              p("Object.is", function(a2) {
                return a2 ? a2 : function(b, c) {
                  return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
                };
              });
              p("Array.prototype.includes", function(a2) {
                return a2 ? a2 : function(b, c) {
                  var d = this;
                  d instanceof String && (d = String(d));
                  var e = d.length;
                  c = c || 0;
                  for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b))
                      return true;
                  }
                  return false;
                };
              });
              p("String.prototype.includes", function(a2) {
                return a2 ? a2 : function(b, c) {
                  return Ga(this, b, "includes").indexOf(b, c || 0) !== -1;
                };
              });
              p("Array.from", function(a2) {
                return a2 ? a2 : function(b, c, d) {
                  c = c != null ? c : function(h) {
                    return h;
                  };
                  var e = [], f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
                  if (typeof f == "function") {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done; )
                      e.push(c.call(d, f.value, g++));
                  } else
                    for (f = b.length, g = 0; g < f; g++)
                      e.push(c.call(d, b[g], g));
                  return e;
                };
              });
              p("Math.trunc", function(a2) {
                return a2 ? a2 : function(b) {
                  b = Number(b);
                  if (isNaN(b) || b === Infinity || b === -Infinity || b === 0)
                    return b;
                  var c = Math.floor(Math.abs(b));
                  return 0 > b ? -c : c;
                };
              });
              p("Array.prototype.fill", function(a2) {
                return a2 ? a2 : function(b, c, d) {
                  var e = this.length || 0;
                  0 > c && (c = Math.max(0, e + c));
                  if (d == null || d > e)
                    d = e;
                  d = Number(d);
                  0 > d && (d = Math.max(0, e + d));
                  for (c = Number(c || 0); c < d; c++)
                    this[c] = b;
                  return this;
                };
              });
              var Ia = function(a2) {
                return a2 ? a2 : Array.prototype.fill;
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
              p("String.prototype.padStart", function(a2) {
                return a2 ? a2 : function(b, c) {
                  var d = Ga(this, null, "padStart");
                  b -= d.length;
                  c = c !== void 0 ? String(c) : " ";
                  return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d;
                };
              });
              p("Array.prototype.values", function(a2) {
                return a2 ? a2 : function() {
                  return Ha(this, function(b, c) {
                    return c;
                  });
                };
              });
              p("Math.imul", function(a2) {
                return a2 ? a2 : function(b, c) {
                  b = Number(b);
                  c = Number(c);
                  var d = b & 65535, e = c & 65535;
                  return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0;
                };
              });
              var Ja = Ja || {}, u = this || self, y = function(a2, b, c) {
                a2 = a2.split(".");
                c = c || u;
                a2[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a2[0]);
                for (var d; a2.length && (d = a2.shift()); )
                  a2.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
              }, Ka = function(a2, b) {
                a2 = a2.split(".");
                b = b || u;
                for (var c = 0; c < a2.length; c++)
                  if (b = b[a2[c]], b == null)
                    return null;
                return b;
              }, La = function() {
              }, Ma = function(a2) {
                var b = typeof a2;
                b = b != "object" ? b : a2 ? Array.isArray(a2) ? "array" : b : "null";
                return b == "array" || b == "object" && typeof a2.length == "number";
              }, Na = function(a2) {
                var b = typeof a2;
                return b == "object" && a2 != null || b == "function";
              }, Ra = function(a2) {
                return Object.prototype.hasOwnProperty.call(a2, Oa) && a2[Oa] || (a2[Oa] = ++Pa);
              }, Ta = function(a2) {
                a2 !== null && "removeAttribute" in a2 && a2.removeAttribute(Oa);
                try {
                  delete a2[Oa];
                } catch (b) {
                }
              }, Oa = "closure_uid_" + (1e9 * Math.random() >>> 0), Pa = 0, Ua = function(a2, b, c) {
                return a2.call.apply(a2.bind, arguments);
              }, Va = function(a2, b, c) {
                if (!a2)
                  throw Error();
                if (2 < arguments.length) {
                  var d = Array.prototype.slice.call(arguments, 2);
                  return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a2.apply(b, e);
                  };
                }
                return function() {
                  return a2.apply(b, arguments);
                };
              }, Wa = function(a2, b, c) {
                Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Wa = Ua : Wa = Va;
                return Wa.apply(null, arguments);
              }, Xa = function(a2, b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function() {
                  var d = c.slice();
                  d.push.apply(d, arguments);
                  return a2.apply(this, d);
                };
              }, Ya = function() {
                return Date.now();
              }, Za = function(a2, b) {
                function c() {
                }
                c.prototype = b.prototype;
                a2.ya = b.prototype;
                a2.prototype = new c();
                a2.prototype.constructor = a2;
                a2.xh = function(d, e, f) {
                  for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                  return b.prototype[e].apply(d, g);
                };
              }, $a = function(a2) {
                return a2;
              };
              var ab = function(a2, b) {
                var c = void 0;
                return new (c || (c = Promise))(function(d, e) {
                  function f(k) {
                    try {
                      h(b.next(k));
                    } catch (n) {
                      e(n);
                    }
                  }
                  function g(k) {
                    try {
                      h(b["throw"](k));
                    } catch (n) {
                      e(n);
                    }
                  }
                  function h(k) {
                    k.done ? d(k.value) : new c(function(n) {
                      n(k.value);
                    }).then(f, g);
                  }
                  h((b = b.apply(a2, void 0)).next());
                });
              };
              function bb(a2) {
                if (Error.captureStackTrace)
                  Error.captureStackTrace(this, bb);
                else {
                  var b = Error().stack;
                  b && (this.stack = b);
                }
                a2 && (this.message = String(a2));
              }
              Za(bb, Error);
              bb.prototype.name = "CustomError";
              var cb;
              var db, eb = typeof TextEncoder !== "undefined";
              function fb(a2) {
                if (eb)
                  a2 = (db || (db = new TextEncoder())).encode(a2);
                else {
                  var b = void 0;
                  b = b === void 0 ? false : b;
                  for (var c = 0, d = new Uint8Array(3 * a2.length), e = 0; e < a2.length; e++) {
                    var f = a2.charCodeAt(e);
                    if (128 > f)
                      d[c++] = f;
                    else {
                      if (2048 > f)
                        d[c++] = f >> 6 | 192;
                      else {
                        if (55296 <= f && 57343 >= f) {
                          if (56319 >= f && e < a2.length) {
                            var g = a2.charCodeAt(++e);
                            if (56320 <= g && 57343 >= g) {
                              f = 1024 * (f - 55296) + g - 56320 + 65536;
                              d[c++] = f >> 18 | 240;
                              d[c++] = f >> 12 & 63 | 128;
                              d[c++] = f >> 6 & 63 | 128;
                              d[c++] = f & 63 | 128;
                              continue;
                            } else
                              e--;
                          }
                          if (b)
                            throw Error("Found an unpaired surrogate");
                          f = 65533;
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128;
                      }
                      d[c++] = f & 63 | 128;
                    }
                  }
                  a2 = d.subarray(0, c);
                }
                return a2;
              }
              ;
              var gb = function(a2) {
                return Array.prototype.map.call(a2, function(b) {
                  b = b.toString(16);
                  return 1 < b.length ? b : "0" + b;
                }).join("");
              };
              var ib = function(a2) {
                return function() {
                  return a2;
                };
              }, jb = function(a2) {
                var b = false, c;
                return function() {
                  b || (c = a2(), b = true);
                  return c;
                };
              }, kb = function(a2) {
                var b = a2;
                return function() {
                  if (b) {
                    var c = b;
                    b = null;
                    c();
                  }
                };
              }, lb = function(a2) {
                var b = 0, c = false, d = [], e = function() {
                  b = 0;
                  c && (c = false, f());
                }, f = function() {
                  b = u.setTimeout(e, 1e3);
                  var g = d;
                  d = [];
                  a2.apply(void 0, g);
                };
                return function(g) {
                  d = arguments;
                  b ? c = true : f();
                };
              };
              var nb = function(a2, b) {
                if (typeof a2 === "string")
                  return typeof b !== "string" || b.length != 1 ? -1 : a2.indexOf(b, 0);
                for (var c = 0; c < a2.length; c++)
                  if (c in a2 && a2[c] === b)
                    return c;
                return -1;
              }, z = function(a2, b) {
                for (var c = a2.length, d = typeof a2 === "string" ? a2.split("") : a2, e = 0; e < c; e++)
                  e in d && b.call(void 0, d[e], e, a2);
              };
              function ob(a2, b) {
                for (var c = typeof a2 === "string" ? a2.split("") : a2, d = a2.length - 1; 0 <= d; --d)
                  d in c && b.call(void 0, c[d], d, a2);
              }
              var pb = function(a2, b) {
                for (var c = a2.length, d = [], e = 0, f = typeof a2 === "string" ? a2.split("") : a2, g = 0; g < c; g++)
                  if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a2) && (d[e++] = h);
                  }
                return d;
              }, qb = function(a2, b) {
                for (var c = a2.length, d = Array(c), e = typeof a2 === "string" ? a2.split("") : a2, f = 0; f < c; f++)
                  f in e && (d[f] = b.call(void 0, e[f], f, a2));
                return d;
              }, rb = function(a2, b, c) {
                var d = c;
                z(a2, function(e, f) {
                  d = b.call(void 0, d, e, f, a2);
                });
                return d;
              }, sb = function(a2, b) {
                for (var c = a2.length, d = typeof a2 === "string" ? a2.split("") : a2, e = 0; e < c; e++)
                  if (e in d && b.call(void 0, d[e], e, a2))
                    return true;
                return false;
              };
              function tb(a2, b) {
                b = ub(a2, b, void 0);
                return 0 > b ? null : typeof a2 === "string" ? a2.charAt(b) : a2[b];
              }
              function ub(a2, b, c) {
                for (var d = a2.length, e = typeof a2 === "string" ? a2.split("") : a2, f = 0; f < d; f++)
                  if (f in e && b.call(c, e[f], f, a2))
                    return f;
                return -1;
              }
              function vb(a2, b) {
                for (var c = typeof a2 === "string" ? a2.split("") : a2, d = a2.length - 1; 0 <= d; d--)
                  if (d in c && b.call(void 0, c[d], d, a2))
                    return d;
                return -1;
              }
              function wb(a2, b) {
                return 0 <= nb(a2, b);
              }
              function xb(a2, b) {
                b = nb(a2, b);
                var c;
                (c = 0 <= b) && yb(a2, b);
                return c;
              }
              function yb(a2, b) {
                return Array.prototype.splice.call(a2, b, 1).length == 1;
              }
              function zb(a2, b) {
                var c = 0;
                ob(a2, function(d, e) {
                  b.call(void 0, d, e, a2) && yb(a2, e) && c++;
                });
              }
              function Ab(a2) {
                return Array.prototype.concat.apply([], arguments);
              }
              function Bb(a2) {
                var b = a2.length;
                if (0 < b) {
                  for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a2[d];
                  return c;
                }
                return [];
              }
              function Cb(a2) {
                for (var b = 0, c = 0, d = {}; c < a2.length; ) {
                  var e = a2[c++], f = Na(e) ? "o" + Ra(e) : (typeof e).charAt(0) + e;
                  Object.prototype.hasOwnProperty.call(d, f) || (d[f] = true, a2[b++] = e);
                }
                a2.length = b;
              }
              function Db(a2, b) {
                a2.sort(b || Eb);
              }
              function Eb(a2, b) {
                return a2 > b ? 1 : a2 < b ? -1 : 0;
              }
              function Fb(a2) {
                for (var b = [], c = 0; c < a2; c++)
                  b[c] = "";
                return b;
              }
              ;
              function Gb(a2, b, c) {
                for (var d in a2)
                  b.call(c, a2[d], d, a2);
              }
              function Hb(a2, b) {
                var c = {}, d;
                for (d in a2)
                  b.call(void 0, a2[d], d, a2) && (c[d] = a2[d]);
                return c;
              }
              function Ib(a2) {
                var b = Jb, c;
                for (c in b)
                  if (a2.call(void 0, b[c], c, b))
                    return true;
                return false;
              }
              function Kb(a2) {
                var b = Lb, c;
                for (c in b)
                  if (!a2.call(void 0, b[c], c, b))
                    return false;
                return true;
              }
              function Mb(a2) {
                var b = [], c = 0, d;
                for (d in a2)
                  b[c++] = a2[d];
                return b;
              }
              function Nb(a2) {
                var b = [], c = 0, d;
                for (d in a2)
                  b[c++] = d;
                return b;
              }
              function Ob(a2, b) {
                var c = Ma(b), d = c ? b : arguments;
                for (c = c ? 0 : 1; c < d.length; c++) {
                  if (a2 == null)
                    return;
                  a2 = a2[d[c]];
                }
                return a2;
              }
              function Pb(a2, b) {
                return a2 !== null && b in a2;
              }
              function Qb(a2, b) {
                for (var c in a2)
                  if (a2[c] == b)
                    return true;
                return false;
              }
              function Rb(a2) {
                var b = Sb, c;
                for (c in b)
                  if (a2.call(void 0, b[c], c, b))
                    return c;
              }
              function Tb(a2) {
                for (var b in a2)
                  return false;
                return true;
              }
              function Ub(a2) {
                for (var b in a2)
                  delete a2[b];
              }
              function Vb(a2, b, c) {
                return a2 !== null && b in a2 ? a2[b] : c;
              }
              var Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
              function Xb(a2, b) {
                for (var c, d, e = 1; e < arguments.length; e++) {
                  d = arguments[e];
                  for (c in d)
                    a2[c] = d[c];
                  for (var f = 0; f < Wb.length; f++)
                    c = Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a2[c] = d[c]);
                }
              }
              ;
              var Yb, Zb = function() {
                if (Yb === void 0) {
                  var a2 = null, b = u.trustedTypes;
                  if (b && b.createPolicy) {
                    try {
                      a2 = b.createPolicy("goog#html", {
                        createHTML: $a,
                        createScript: $a,
                        createScriptURL: $a
                      });
                    } catch (c) {
                      u.console && u.console.error(c.message);
                    }
                    Yb = a2;
                  } else
                    Yb = a2;
                }
                return Yb;
              };
              var bc = function(a2, b) {
                this.g = a2 === $b && b || "";
                this.h = ac;
              };
              bc.prototype.Qa = true;
              bc.prototype.Ga = function() {
                return this.g;
              };
              var cc = function(a2) {
                return a2 instanceof bc && a2.constructor === bc && a2.h === ac ? a2.g : "type_error:Const";
              }, dc = function(a2) {
                return new bc($b, a2);
              }, ac = {}, $b = {};
              var fc = function(a2, b) {
                this.g = b === ec ? a2 : "";
              };
              l = fc.prototype;
              l.Qa = true;
              l.Ga = function() {
                return this.g.toString();
              };
              l.Fc = true;
              l.Bc = function() {
                return 1;
              };
              l.toString = function() {
                return this.g + "";
              };
              var gc = function(a2) {
                return a2 instanceof fc && a2.constructor === fc ? a2.g : "type_error:TrustedResourceUrl";
              }, ec = {}, hc = function(a2) {
                var b = Zb();
                a2 = b ? b.createScriptURL(a2) : a2;
                return new fc(a2, ec);
              };
              var ic = function(a2, b) {
                var c = a2.length - b.length;
                return 0 <= c && a2.indexOf(b, c) == c;
              }, jc = function(a2) {
                return /^[\s\xa0]*$/.test(a2);
              }, kc = String.prototype.trim ? function(a2) {
                return a2.trim();
              } : function(a2) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
              }, lc = /&/g, mc = /</g, nc = />/g, oc = /"/g, pc = /'/g, qc = /\x00/g, rc = /[\x00&<>"']/, sc = function(a2, b) {
                return a2.toLowerCase().indexOf(b.toLowerCase()) != -1;
              }, uc = function(a2, b) {
                var c = 0;
                a2 = kc(String(a2)).split(".");
                b = kc(String(b)).split(".");
                for (var d = Math.max(a2.length, b.length), e = 0; c == 0 && e < d; e++) {
                  var f = a2[e] || "", g = b[e] || "";
                  do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (f[0].length == 0 && g[0].length == 0)
                      break;
                    c = tc(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || tc(f[2].length == 0, g[2].length == 0) || tc(f[2], g[2]);
                    f = f[3];
                    g = g[3];
                  } while (c == 0);
                }
                return c;
              }, tc = function(a2, b) {
                return a2 < b ? -1 : a2 > b ? 1 : 0;
              };
              var wc = function(a2, b) {
                this.g = b === vc ? a2 : "";
              };
              l = wc.prototype;
              l.Qa = true;
              l.Ga = function() {
                return this.g.toString();
              };
              l.Fc = true;
              l.Bc = function() {
                return 1;
              };
              l.toString = function() {
                return this.g.toString();
              };
              var xc = function(a2) {
                return a2 instanceof wc && a2.constructor === wc ? a2.g : "type_error:SafeUrl";
              }, yc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"), zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, Ac = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, vc = {}, Bc = new wc("about:invalid#zClosurez", vc);
              var Cc = {}, Dc = function(a2, b) {
                this.g = b === Cc ? a2 : "";
                this.Qa = true;
              };
              Dc.prototype.Ga = function() {
                return this.g;
              };
              Dc.prototype.toString = function() {
                return this.g.toString();
              };
              var Ec = new Dc("", Cc);
              var Fc;
              a: {
                var Gc = u.navigator;
                if (Gc) {
                  var Hc = Gc.userAgent;
                  if (Hc) {
                    Fc = Hc;
                    break a;
                  }
                }
                Fc = "";
              }
              function A(a2) {
                return Fc.indexOf(a2) != -1;
              }
              ;
              function Ic() {
                return A("Trident") || A("MSIE");
              }
              function Jc() {
                return A("Firefox") || A("FxiOS");
              }
              function Kc() {
                return A("Safari") && !(Lc() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Jc() || A("Silk") || A("Android"));
              }
              function Lc() {
                return (A("Chrome") || A("CriOS")) && !A("Edge");
              }
              ;
              var Mc = {}, Nc = function(a2, b, c) {
                this.g = c === Mc ? a2 : "";
                this.h = b;
                this.Qa = this.Fc = true;
              };
              Nc.prototype.Bc = function() {
                return this.h;
              };
              Nc.prototype.Ga = function() {
                return this.g.toString();
              };
              Nc.prototype.toString = function() {
                return this.g.toString();
              };
              var Oc = function(a2) {
                return a2 instanceof Nc && a2.constructor === Nc ? a2.g : "type_error:SafeHtml";
              }, Pc = function(a2, b) {
                var c = Zb();
                a2 = c ? c.createHTML(a2) : a2;
                return new Nc(a2, b, Mc);
              }, Qc = new Nc(u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, Mc);
              var Rc = jb(function() {
                var a2 = document.createElement("div"), b = document.createElement("div");
                b.appendChild(document.createElement("div"));
                a2.appendChild(b);
                b = a2.firstChild.firstChild;
                a2.innerHTML = Oc(Qc);
                return !b.parentElement;
              }), Sc = function(a2, b) {
                if (Rc())
                  for (; a2.lastChild; )
                    a2.removeChild(a2.lastChild);
                a2.innerHTML = Oc(b);
              }, Tc = function(a2, b) {
                a2.write(Oc(b));
              }, Uc = /^[\w+/_-]+[=]{0,2}$/, Vc = function(a2, b) {
                b = (b || u).document;
                return b.querySelector ? (a2 = b.querySelector(a2)) && (a2 = a2.nonce || a2.getAttribute("nonce")) && Uc.test(a2) ? a2 : "" : "";
              };
              var Wc = function(a2) {
                return decodeURIComponent(a2.replace(/\+/g, " "));
              }, Xc = function(a2, b) {
                a2.length > b && (a2 = a2.substring(0, b - 3) + "...");
                return a2;
              }, Yc = String.prototype.repeat ? function(a2, b) {
                return a2.repeat(b);
              } : function(a2, b) {
                return Array(b + 1).join(a2);
              }, Zc = function(a2) {
                return a2 == null ? "" : String(a2);
              }, ad = 2147483648 * Math.random() | 0, bd = function(a2) {
                return String(a2).replace(/\-([a-z])/g, function(b, c) {
                  return c.toUpperCase();
                });
              }, cd = function() {
                return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase();
              }, dd = function(a2) {
                return a2.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                  return c + d.toUpperCase();
                });
              }, ed = function(a2) {
                isFinite(a2) && (a2 = String(a2));
                return typeof a2 === "string" ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
              };
              var fd = typeof Uint8Array.prototype.slice === "function", gd, hd = 0, id = 0;
              function jd(a2) {
                var b = 0 > a2;
                a2 = Math.abs(a2);
                var c = a2 >>> 0;
                a2 = Math.floor((a2 - c) / 4294967296);
                a2 >>>= 0;
                b && (a2 = ~a2 >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a2++, 4294967295 < a2 && (a2 = 0)));
                hd = c;
                id = a2;
              }
              ;
              var kd = function() {
                this.g = new Uint8Array(64);
                this.h = 0;
              };
              kd.prototype.push = function(a2) {
                if (!(this.h + 1 < this.g.length)) {
                  var b = this.g;
                  this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
                  this.g.set(b);
                }
                this.g[this.h++] = a2;
              };
              kd.prototype.length = function() {
                return this.h;
              };
              kd.prototype.end = function() {
                var a2 = this.g, b = this.h;
                this.h = 0;
                return b === 0 ? gd || (gd = new Uint8Array(0)) : fd ? a2.slice(0, b) : new Uint8Array(a2.subarray(0, b));
              };
              var ld = function(a2) {
                for (var b = hd, c = id; 0 < c || 127 < b; )
                  a2.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
                a2.push(b);
              }, md = function(a2, b) {
                for (; 127 < b; )
                  a2.push(b & 127 | 128), b >>>= 7;
                a2.push(b);
              }, nd = function(a2, b) {
                a2.push(b >>> 0 & 255);
                a2.push(b >>> 8 & 255);
                a2.push(b >>> 16 & 255);
                a2.push(b >>> 24 & 255);
              };
              function od() {
                return A("iPhone") && !A("iPod") && !A("iPad");
              }
              function pd() {
                return od() || A("iPad") || A("iPod");
              }
              ;
              var qd = function(a2) {
                qd[" "](a2);
                return a2;
              };
              qd[" "] = La;
              var rd = function(a2, b) {
                try {
                  return qd(a2[b]), true;
                } catch (c) {
                }
                return false;
              }, td = function(a2, b) {
                var c = sd;
                return Object.prototype.hasOwnProperty.call(c, a2) ? c[a2] : c[a2] = b(a2);
              };
              var ud = A("Opera"), vd = Ic(), wd = A("Edge"), xd = A("Gecko") && !(sc(Fc, "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"), yd = sc(Fc, "WebKit") && !A("Edge"), zd = A("Macintosh"), Bd = A("Android"), Cd = od(), Dd = A("iPad"), Ed = A("iPod"), Fd = pd(), Gd = function() {
                var a2 = u.document;
                return a2 ? a2.documentMode : void 0;
              }, Hd;
              a: {
                var Id = "", Jd = function() {
                  var a2 = Fc;
                  if (xd)
                    return /rv:([^\);]+)(\)|;)/.exec(a2);
                  if (wd)
                    return /Edge\/([\d\.]+)/.exec(a2);
                  if (vd)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
                  if (yd)
                    return /WebKit\/(\S+)/.exec(a2);
                  if (ud)
                    return /(?:Version)[ \/]?(\S+)/.exec(a2);
                }();
                Jd && (Id = Jd ? Jd[1] : "");
                if (vd) {
                  var Kd = Gd();
                  if (Kd != null && Kd > parseFloat(Id)) {
                    Hd = String(Kd);
                    break a;
                  }
                }
                Hd = Id;
              }
              var Ld = Hd, sd = {}, Md = function(a2) {
                return td(a2, function() {
                  return 0 <= uc(Ld, a2);
                });
              }, Nd;
              if (u.document && vd) {
                var Od = Gd();
                Nd = Od ? Od : parseInt(Ld, 10) || void 0;
              } else
                Nd = void 0;
              var Pd = Nd;
              var Qd = Jc(), Rd = od() || A("iPod"), Sd = A("iPad"), Td = A("Android") && !(Lc() || Jc() || A("Opera") || A("Silk")), Ud = Lc(), Vd = Kc() && !pd();
              var Wd = {}, Xd = null, Zd = function(a2, b) {
                b === void 0 && (b = 0);
                Yd();
                b = Wd[b];
                for (var c = Array(Math.floor(a2.length / 3)), d = b[64] || "", e = 0, f = 0; e < a2.length - 2; e += 3) {
                  var g = a2[e], h = a2[e + 1], k = a2[e + 2], n = b[g >> 2];
                  g = b[(g & 3) << 4 | h >> 4];
                  h = b[(h & 15) << 2 | k >> 6];
                  k = b[k & 63];
                  c[f++] = "" + n + g + h + k;
                }
                n = 0;
                k = d;
                switch (a2.length - e) {
                  case 2:
                    n = a2[e + 1], k = b[(n & 15) << 2] || d;
                  case 1:
                    a2 = a2[e], c[f] = "" + b[a2 >> 2] + b[(a2 & 3) << 4 | n >> 4] + k + d;
                }
                return c.join("");
              }, $d = function(a2) {
                for (var b = [], c = 0, d = 0; d < a2.length; d++) {
                  var e = a2.charCodeAt(d);
                  255 < e && (b[c++] = e & 255, e >>= 8);
                  b[c++] = e;
                }
                return Zd(b, 3);
              }, be = function(a2) {
                var b = [];
                ae(a2, function(c) {
                  b.push(c);
                });
                return b;
              }, ae = function(a2, b) {
                function c(k) {
                  for (; d < a2.length; ) {
                    var n = a2.charAt(d++), m = Xd[n];
                    if (m != null)
                      return m;
                    if (!jc(n))
                      throw Error("Unknown base64 encoding at char: " + n);
                  }
                  return k;
                }
                Yd();
                for (var d = 0; ; ) {
                  var e = c(-1), f = c(0), g = c(64), h = c(64);
                  if (h === 64 && e === -1)
                    break;
                  b(e << 2 | f >> 4);
                  g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h));
                }
              }, Yd = function() {
                if (!Xd) {
                  Xd = {};
                  for (var a2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = [
                    "+/=",
                    "+/",
                    "-_=",
                    "-_.",
                    "-_"
                  ], c = 0; 5 > c; c++) {
                    var d = a2.concat(b[c].split(""));
                    Wd[c] = d;
                    for (var e = 0; e < d.length; e++) {
                      var f = d[e];
                      Xd[f] === void 0 && (Xd[f] = e);
                    }
                  }
                }
              };
              var ce = function() {
                this.l = [];
                this.h = 0;
                this.g = new kd();
              }, de = function(a2, b) {
                b.length !== 0 && (a2.l.push(b), a2.h += b.length);
              }, ee = function(a2) {
                de(a2, a2.g.end());
              }, fe = function(a2, b) {
                md(a2.g, 8 * b + 2);
                ee(a2);
                return {
                  af: a2.h,
                  we: a2.l.length - 1
                };
              }, ge = function(a2, b) {
                ee(a2);
                md(a2.g, a2.h + a2.g.length() - b.af);
                var c = a2.g.end();
                a2.h += c.length;
                a2.l.splice(1 + b.we, 0, c);
              }, he = function(a2) {
                var b = a2.h + a2.g.length();
                if (b === 0)
                  return new Uint8Array(0);
                b = new Uint8Array(b);
                for (var c = a2.l, d = c.length, e = 0, f = 0; f < d; f++) {
                  var g = c[f];
                  g.length !== 0 && (b.set(g, e), e += g.length);
                }
                c = a2.g;
                d = c.h;
                d !== 0 && (b.set(c.g.subarray(0, d), e), c.h = 0);
                a2.l = [b];
                return b;
              }, ie = function(a2, b, c) {
                if (c != null && c != null)
                  if (md(a2.g, 8 * b), a2 = a2.g, 0 <= c)
                    md(a2, c);
                  else {
                    for (b = 0; 9 > b; b++)
                      a2.push(c & 127 | 128), c >>= 7;
                    a2.push(1);
                  }
              }, je = function(a2, b, c) {
                c != null && c != null && (md(a2.g, 8 * b), a2 = a2.g, jd(c), ld(a2));
              }, ke = function(a2, b, c) {
                c != null && c != null && (md(a2.g, 8 * b), a2 = a2.g, jd(c), ld(a2));
              }, le = function(a2, b, c) {
                md(a2.g, 8 * b + 2);
                md(a2.g, c.length);
                ee(a2);
                de(a2, c);
              }, ne = function(a2, b, c) {
                var d = me;
                c != null && (b = fe(a2, b), d(c, a2), ge(a2, b));
              }, oe = function(a2, b, c, d) {
                if (c != null)
                  for (var e = 0; e < c.length; e++) {
                    var f = fe(a2, b);
                    d(c[e], a2);
                    ge(a2, f);
                  }
              };
              var pe = typeof Uint8Array === "function";
              function qe(a2, b, c) {
                return typeof a2 === "object" ? pe && !Array.isArray(a2) && a2 instanceof Uint8Array ? c(a2) : re(a2, b, c) : b(a2);
              }
              function re(a2, b, c) {
                if (Array.isArray(a2)) {
                  for (var d = Array(a2.length), e = 0; e < a2.length; e++) {
                    var f = a2[e];
                    f != null && (d[e] = qe(f, b, c));
                  }
                  Array.isArray(a2) && a2.Ze && se(d);
                  return d;
                }
                d = {};
                for (e in a2)
                  f = a2[e], f != null && (d[e] = qe(f, b, c));
                return d;
              }
              function te(a2) {
                return re(a2, function(b) {
                  return typeof b === "number" ? isFinite(b) ? b : String(b) : b;
                }, function(b) {
                  return Zd(b);
                });
              }
              var ue = {
                Ze: {
                  value: true,
                  configurable: true
                }
              }, se = function(a2) {
                Array.isArray(a2) && !Object.isFrozen(a2) && Object.defineProperties(a2, ue);
                return a2;
              }, ve;
              var we;
              function xe(a2, b) {
                we = b;
                a2 = new a2(b);
                we = null;
                return a2;
              }
              ;
              var B = function(a2, b, c) {
                var d = we;
                we = null;
                a2 || (a2 = d);
                d = this.constructor.messageId;
                a2 || (a2 = d ? [d] : []);
                this.o = d ? 0 : -1;
                this.g = null;
                this.h = a2;
                a: {
                  d = this.h.length;
                  a2 = d - 1;
                  if (d && (d = this.h[a2], !(d === null || typeof d != "object" || Array.isArray(d) || pe && d instanceof Uint8Array))) {
                    this.B = a2 - this.o;
                    this.l = d;
                    break a;
                  }
                  b !== void 0 && -1 < b ? (this.B = Math.max(b, a2 + 1 - this.o), this.l = null) : this.B = Number.MAX_VALUE;
                }
                if (c)
                  for (b = 0; b < c.length; b++)
                    a2 = c[b], a2 < this.B ? (a2 += this.o, (d = this.h[a2]) ? se(d) : this.h[a2] = ye) : (ze(this), (d = this.l[a2]) ? se(d) : this.l[a2] = ye);
              }, ye = Object.freeze(se([])), ze = function(a2) {
                var b = a2.B + a2.o;
                a2.h[b] || (a2.l = a2.h[b] = {});
              }, C = function(a2, b, c) {
                return b === -1 ? null : (c === void 0 ? 0 : c) || b >= a2.B ? a2.l ? a2.l[b] : void 0 : a2.h[b + a2.o];
              }, Be = function(a2, b) {
                var c = c === void 0 ? false : c;
                var d = C(a2, b, c);
                d == null && (d = ye);
                d === ye && (d = se([]), Ae(a2, b, d, c));
                return d;
              }, Ce = function(a2, b) {
                a2 = C(a2, b);
                return a2 == null ? a2 : +a2;
              }, De = function(a2, b) {
                a2 = C(a2, b);
                return a2 == null ? a2 : !!a2;
              }, Ee = function(a2, b, c) {
                a2 = C(a2, b);
                return a2 == null ? c : a2;
              }, Fe = function(a2, b) {
                a2 = De(a2, b);
                return a2 == null ? false : a2;
              }, Ae = function(a2, b, c, d) {
                (d === void 0 ? 0 : d) || b >= a2.B ? (ze(a2), a2.l[b] = c) : a2.h[b + a2.o] = c;
                return a2;
              }, Ge = function(a2, b, c) {
                var d = d === void 0 ? false : d;
                return Ae(a2, b, se(c || []), d);
              };
              function He(a2, b, c, d) {
                c !== d ? Ae(a2, b, c) : Ae(a2, b, void 0);
                return a2;
              }
              var Ie = function(a2, b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                  var e = b[d];
                  C(a2, e) != null && (c !== 0 && Ae(a2, c, void 0), c = e);
                }
                return c;
              }, Je = function(a2, b, c) {
                if (c === -1)
                  return null;
                a2.g || (a2.g = {});
                if (!a2.g[c]) {
                  var d = C(a2, c, false);
                  d && (a2.g[c] = new b(d));
                }
                return a2.g[c];
              }, Ke = function(a2, b, c) {
                a2.g || (a2.g = {});
                var d = a2.g[c];
                if (!d) {
                  var e = Be(a2, c);
                  d = [];
                  for (var f = 0; f < e.length; f++)
                    d[f] = new b(e[f]);
                  a2.g[c] = d;
                }
                return d;
              }, Me = function(a2, b, c) {
                var d = d === void 0 ? false : d;
                a2.g || (a2.g = {});
                var e = c ? Le(c, false) : c;
                a2.g[b] = c;
                return Ae(a2, b, e, d);
              };
              B.prototype.toJSON = function() {
                var a2 = Le(this, false);
                return ve ? a2 : te(a2);
              };
              var Le = function(a2, b) {
                if (a2.g)
                  for (var c in a2.g) {
                    var d = a2.g[c];
                    if (Array.isArray(d))
                      for (var e = 0; e < d.length; e++)
                        d[e] && Le(d[e], b);
                    else
                      d && Le(d, b);
                  }
                return a2.h;
              }, Oe = function(a2) {
                ve = true;
                try {
                  return JSON.stringify(a2.toJSON(), Ne);
                } finally {
                  ve = false;
                }
              }, Ne = function(a2, b) {
                switch (typeof b) {
                  case "number":
                    return isFinite(b) ? b : String(b);
                  case "object":
                    if (pe && b != null && b instanceof Uint8Array)
                      return Zd(b);
                }
                return b;
              };
              B.prototype.toString = function() {
                return Le(this, false).toString();
              };
              var Pe = function(a2, b, c) {
                b = Ie(a2, c) === b ? b : -1;
                return Ee(a2, b, 0);
              };
              function Qe(a2, b) {
                if (a2 = a2.A) {
                  ee(b);
                  for (var c = 0; c < a2.length; c++)
                    de(b, a2[c]);
                }
              }
              ;
              var Re = document, D = window;
              var Se = {};
              function Te() {
                var a2 = typeof window !== "undefined" ? window.trustedTypes : void 0;
                return a2 !== null && a2 !== void 0 ? a2 : null;
              }
              var Ue;
              function Ve() {
                var a2, b;
                if (Ue === void 0)
                  try {
                    Ue = (b = (a2 = Te()) === null || a2 === void 0 ? void 0 : a2.createPolicy("google#safe", {
                      createHTML: function(c) {
                        return c;
                      },
                      createScript: function(c) {
                        return c;
                      },
                      createScriptURL: function(c) {
                        return c;
                      }
                    })) !== null && b !== void 0 ? b : null;
                  } catch (c) {
                    Ue = null;
                  }
                return Ue;
              }
              ;
              var We = function() {
              }, Xe = function(a2) {
                this.g = a2;
              };
              t(Xe, We);
              Xe.prototype.toString = function() {
                return this.g;
              };
              var Ye = new Xe("about:invalid#zTSz", Se);
              var Ze = function() {
              }, $e = function(a2) {
                this.g = a2;
              };
              t($e, Ze);
              $e.prototype.toString = function() {
                return this.g.toString();
              };
              function af(a2) {
                var b, c = (b = Ve()) === null || b === void 0 ? void 0 : b.createScriptURL(a2);
                return new $e(c !== null && c !== void 0 ? c : a2, Se);
              }
              ;
              function bf(a2) {
                if (a2 instanceof Ze)
                  if (a2 instanceof $e)
                    a2 = a2.g;
                  else
                    throw Error("");
                else
                  a2 = gc(a2);
                return a2;
              }
              function cf(a2) {
                if (a2 instanceof We)
                  if (a2 instanceof Xe)
                    a2 = a2.g;
                  else
                    throw Error("");
                else
                  a2 = xc(a2);
                return a2;
              }
              ;
              function df(a2) {
                var b, c = (a2.ownerDocument && a2.ownerDocument.defaultView || window).document, d = (b = c.querySelector) === null || b === void 0 ? void 0 : b.call(c, "script[nonce]");
                (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a2.setAttribute("nonce", b);
              }
              ;
              var ef = jb(function() {
                var a2 = false;
                try {
                  var b = Object.defineProperty({}, "passive", {
                    get: function() {
                      a2 = true;
                    }
                  });
                  u.addEventListener("test", null, b);
                } catch (c) {
                }
                return a2;
              });
              function ff(a2) {
                return a2 ? a2.passive && ef() ? a2 : a2.capture || false : false;
              }
              var gf = function(a2, b, c, d) {
                return a2.addEventListener ? (a2.addEventListener(b, c, ff(d)), true) : false;
              }, hf = function(a2, b, c) {
                a2.removeEventListener && a2.removeEventListener(b, c, ff(void 0));
              }, jf = function(a2) {
                var b = b === void 0 ? {} : b;
                if (typeof window.CustomEvent === "function")
                  var c = new CustomEvent("rum_blp", b);
                else
                  c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
                a2.dispatchEvent(c);
              };
              try {
                new self.OffscreenCanvas(0, 0).getContext("2d");
              } catch (a2) {
              }
              var kf = vd || yd;
              var lf = function(a2, b) {
                this.x = a2 !== void 0 ? a2 : 0;
                this.y = b !== void 0 ? b : 0;
              };
              lf.prototype.ceil = function() {
                this.x = Math.ceil(this.x);
                this.y = Math.ceil(this.y);
                return this;
              };
              lf.prototype.floor = function() {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this;
              };
              lf.prototype.round = function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this;
              };
              lf.prototype.scale = function(a2, b) {
                this.x *= a2;
                this.y *= typeof b === "number" ? b : a2;
                return this;
              };
              var mf = function(a2, b) {
                this.width = a2;
                this.height = b;
              };
              l = mf.prototype;
              l.aspectRatio = function() {
                return this.width / this.height;
              };
              l.isEmpty = function() {
                return !(this.width * this.height);
              };
              l.ceil = function() {
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
              };
              l.floor = function() {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
              };
              l.round = function() {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
              };
              l.scale = function(a2, b) {
                this.width *= a2;
                this.height *= typeof b === "number" ? b : a2;
                return this;
              };
              var pf = function(a2) {
                return a2 ? new nf(of(a2)) : cb || (cb = new nf());
              }, qf = function(a2) {
                var b = document;
                return typeof a2 === "string" ? b.getElementById(a2) : a2;
              }, rf = function() {
                var a2 = document;
                return a2.querySelectorAll && a2.querySelector ? a2.querySelectorAll("SCRIPT") : a2.getElementsByTagName("SCRIPT");
              }, tf = function(a2, b) {
                Gb(b, function(c, d) {
                  c && typeof c == "object" && c.Qa && (c = c.Ga());
                  d == "style" ? a2.style.cssText = c : d == "class" ? a2.className = c : d == "for" ? a2.htmlFor = c : sf.hasOwnProperty(d) ? a2.setAttribute(sf[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a2.setAttribute(d, c) : a2[d] = c;
                });
              }, sf = {
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
              }, uf = function(a2) {
                a2 = a2.document;
                a2 = a2.compatMode == "CSS1Compat" ? a2.documentElement : a2.body;
                return new mf(a2.clientWidth, a2.clientHeight);
              }, vf = function(a2) {
                var b = a2.scrollingElement ? a2.scrollingElement : yd || a2.compatMode != "CSS1Compat" ? a2.body || a2.documentElement : a2.documentElement;
                a2 = a2.parentWindow || a2.defaultView;
                return vd && Md("10") && a2.pageYOffset != b.scrollTop ? new lf(b.scrollLeft, b.scrollTop) : new lf(a2.pageXOffset || b.scrollLeft, a2.pageYOffset || b.scrollTop);
              }, E = function(a2) {
                return a2 ? a2.parentWindow || a2.defaultView : window;
              }, yf = function(a2, b, c) {
                var d = arguments, e = document, f = d[1], g = wf(e, String(d[0]));
                f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : tf(g, f));
                2 < d.length && xf(e, g, d, 2);
                return g;
              }, xf = function(a2, b, c, d) {
                function e(h) {
                  h && b.appendChild(typeof h === "string" ? a2.createTextNode(h) : h);
                }
                for (; d < c.length; d++) {
                  var f = c[d];
                  if (!Ma(f) || Na(f) && 0 < f.nodeType)
                    e(f);
                  else {
                    a: {
                      if (f && typeof f.length == "number") {
                        if (Na(f)) {
                          var g = typeof f.item == "function" || typeof f.item == "string";
                          break a;
                        }
                        if (typeof f === "function") {
                          g = typeof f.item == "function";
                          break a;
                        }
                      }
                      g = false;
                    }
                    z(g ? Bb(f) : f, e);
                  }
                }
              }, wf = function(a2, b) {
                b = String(b);
                a2.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
                return a2.createElement(b);
              }, zf = function(a2) {
                a2 && a2.parentNode && a2.parentNode.removeChild(a2);
              }, Af = function(a2) {
                var b;
                if (kf && !(vd && Md("9") && !Md("10") && u.SVGElement && a2 instanceof u.SVGElement) && (b = a2.parentElement))
                  return b;
                b = a2.parentNode;
                return Na(b) && b.nodeType == 1 ? b : null;
              }, Bf = function(a2, b) {
                if (!a2 || !b)
                  return false;
                if (a2.contains && b.nodeType == 1)
                  return a2 == b || a2.contains(b);
                if (typeof a2.compareDocumentPosition != "undefined")
                  return a2 == b || !!(a2.compareDocumentPosition(b) & 16);
                for (; b && a2 != b; )
                  b = b.parentNode;
                return b == a2;
              }, of = function(a2) {
                return a2.nodeType == 9 ? a2 : a2.ownerDocument || a2.document;
              }, Cf = function(a2) {
                try {
                  return a2.contentWindow || (a2.contentDocument ? E(a2.contentDocument) : null);
                } catch (b) {
                }
                return null;
              }, Df = function(a2, b) {
                a2 && (a2 = a2.parentNode);
                for (var c = 0; a2; ) {
                  if (b(a2))
                    return a2;
                  a2 = a2.parentNode;
                  c++;
                }
                return null;
              }, nf = function(a2) {
                this.g = a2 || u.document || document;
              };
              l = nf.prototype;
              l.getElementsByTagName = function(a2, b) {
                return (b || this.g).getElementsByTagName(String(a2));
              };
              l.createElement = function(a2) {
                return wf(this.g, a2);
              };
              l.appendChild = function(a2, b) {
                a2.appendChild(b);
              };
              l.append = function(a2, b) {
                xf(of(a2), a2, arguments, 1);
              };
              l.canHaveChildren = function(a2) {
                if (a2.nodeType != 1)
                  return false;
                switch (a2.tagName) {
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
                    return false;
                }
                return true;
              };
              var Ff = function() {
                return !Ef() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"));
              }, Ef = function() {
                return A("iPad") || A("Android") && !A("Mobile") || A("Silk");
              };
              var Gf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"), Hf = function(a2) {
                var b = a2.match(Gf);
                a2 = b[1];
                var c = b[3];
                b = b[4];
                var d = "";
                a2 && (d += a2 + ":");
                c && (d = d + "//" + c, b && (d += ":" + b));
                return d;
              }, If = function(a2, b) {
                if (a2) {
                  a2 = a2.split("&");
                  for (var c = 0; c < a2.length; c++) {
                    var d = a2[c].indexOf("="), e = null;
                    if (0 <= d) {
                      var f = a2[c].substring(0, d);
                      e = a2[c].substring(d + 1);
                    } else
                      f = a2[c];
                    b(f, e ? Wc(e) : "");
                  }
                }
              }, Jf = /#|$/, Kf = function(a2, b) {
                var c = a2.search(Jf);
                a: {
                  var d = 0;
                  for (var e = b.length; 0 <= (d = a2.indexOf(b, d)) && d < c; ) {
                    var f = a2.charCodeAt(d - 1);
                    if (f == 38 || f == 63) {
                      if (f = a2.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35)
                        break a;
                    }
                    d += e + 1;
                  }
                  d = -1;
                }
                if (0 > d)
                  return null;
                e = a2.indexOf("&", d);
                if (0 > e || e > c)
                  e = c;
                d += b.length + 1;
                return Wc(a2.substr(d, e - d));
              };
              var Lf = function(a2) {
                try {
                  return !!a2 && a2.location.href != null && rd(a2, "foo");
                } catch (b) {
                  return false;
                }
              }, Nf = function(a2) {
                for (var b = u, c = 0; b && 40 > c++ && (!Lf(b) || !a2(b)); )
                  b = Mf(b);
              }, Of = function() {
                var a2, b = a2 = a2 === void 0 ? u : a2;
                Nf(function(c) {
                  b = c;
                  return false;
                });
                return b;
              }, Mf = function(a2) {
                try {
                  var b = a2.parent;
                  if (b && b != a2)
                    return b;
                } catch (c) {
                }
                return null;
              }, Pf = function(a2, b) {
                if (a2)
                  for (var c in a2)
                    Object.prototype.hasOwnProperty.call(a2, c) && b.call(void 0, a2[c], c, a2);
              }, Qf = /https?:\/\/[^\/]+/, Rf = function(a2) {
                return (a2 = Qf.exec(a2)) && a2[0] || "";
              }, Sf = function() {
                var a2 = u;
                var b = b === void 0 ? true : b;
                try {
                  for (var c = null; c != a2; c = a2, a2 = a2.parent)
                    switch (a2.location.protocol) {
                      case "https:":
                        return true;
                      case "file:":
                        return b;
                      case "http:":
                        return false;
                    }
                } catch (d) {
                }
                return true;
              }, Uf = function() {
                var a2 = Tf;
                if (!a2)
                  return "";
                var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                try {
                  var c = b.exec(decodeURIComponent(a2));
                  if (c)
                    return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
                } catch (d) {
                }
                return "";
              }, Vf = function(a2, b) {
                try {
                  return !(!a2.frames || !a2.frames[b]);
                } catch (c) {
                  return false;
                }
              }, Wf = function(a2, b) {
                for (var c = 0; 50 > c; ++c) {
                  if (Vf(a2, b))
                    return a2;
                  if (!(a2 = Mf(a2)))
                    break;
                }
                return null;
              }, Yf = function(a2) {
                var b = Xf;
                a2 = a2 === void 0 ? window.document : a2;
                b.length != 0 && a2.head && b.forEach(function(c) {
                  if (c) {
                    var d = a2;
                    d = d === void 0 ? window.document : d;
                    if (c && d.head) {
                      var e = document.createElement("meta");
                      d.head.appendChild(e);
                      e.httpEquiv = "origin-trial";
                      e.content = c;
                    }
                  }
                });
              };
              var F = function(a2, b, c, d) {
                this.top = a2;
                this.right = b;
                this.bottom = c;
                this.left = d;
              };
              F.prototype.getWidth = function() {
                return this.right - this.left;
              };
              F.prototype.getHeight = function() {
                return this.bottom - this.top;
              };
              var Zf = function(a2) {
                return new F(a2.top, a2.right, a2.bottom, a2.left);
              };
              F.prototype.expand = function(a2, b, c, d) {
                Na(a2) ? (this.top -= a2.top, this.right += a2.right, this.bottom += a2.bottom, this.left -= a2.left) : (this.top -= a2, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
                return this;
              };
              F.prototype.ceil = function() {
                this.top = Math.ceil(this.top);
                this.right = Math.ceil(this.right);
                this.bottom = Math.ceil(this.bottom);
                this.left = Math.ceil(this.left);
                return this;
              };
              F.prototype.floor = function() {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this;
              };
              F.prototype.round = function() {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this;
              };
              var $f = function(a2, b, c) {
                b instanceof lf ? (a2.left += b.x, a2.right += b.x, a2.top += b.y, a2.bottom += b.y) : (a2.left += b, a2.right += b, typeof c === "number" && (a2.top += c, a2.bottom += c));
                return a2;
              };
              F.prototype.scale = function(a2, b) {
                b = typeof b === "number" ? b : a2;
                this.left *= a2;
                this.right *= a2;
                this.top *= b;
                this.bottom *= b;
                return this;
              };
              var ag = function(a2, b, c, d) {
                this.left = a2;
                this.top = b;
                this.width = c;
                this.height = d;
              }, bg = function(a2) {
                return new F(a2.top, a2.left + a2.width, a2.top + a2.height, a2.left);
              };
              ag.prototype.ceil = function() {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
              };
              ag.prototype.floor = function() {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
              };
              ag.prototype.round = function() {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
              };
              ag.prototype.scale = function(a2, b) {
                b = typeof b === "number" ? b : a2;
                this.left *= a2;
                this.width *= a2;
                this.top *= b;
                this.height *= b;
                return this;
              };
              var cg = function(a2) {
                a2 = a2 === void 0 ? u : a2;
                var b = a2.context || a2.AMP_CONTEXT_DATA;
                if (!b)
                  try {
                    b = a2.parent.context || a2.parent.AMP_CONTEXT_DATA;
                  } catch (c) {
                  }
                try {
                  if (b && b.pageViewId && b.canonicalUrl)
                    return b;
                } catch (c) {
                }
                return null;
              };
              var dg = function(a2, b) {
                a2.google_image_requests || (a2.google_image_requests = []);
                var c = a2.document.createElement("img");
                c.src = b;
                a2.google_image_requests.push(c);
              }, fg = function(a2, b) {
                var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
                Pf(a2, function(d, e) {
                  d && (c += "&" + e + "=" + encodeURIComponent(d));
                });
                eg(c);
              }, eg = function(a2) {
                var b = window;
                b.fetch ? b.fetch(a2, {
                  keepalive: true,
                  credentials: "include",
                  redirect: "follow",
                  method: "get",
                  mode: "no-cors"
                }) : dg(b, a2);
              };
              var gg = function(a2) {
                this.$e = a2;
              };
              function hg(a2) {
                return new gg(function(b) {
                  return b.substr(0, a2.length + 1).toLowerCase() === a2 + ":";
                });
              }
              var ig = [hg("data"), hg("http"), hg("https"), hg("mailto"), hg("ftp"), new gg(function(a2) {
                return /^[^:]*([/?#]|$)/.test(a2);
              })];
              var kg = function(a2, b) {
                if (typeof b === "string")
                  (b = jg(a2, b)) && (a2.style[b] = void 0);
                else
                  for (var c in b) {
                    var d = a2, e = b[c], f = jg(d, c);
                    f && (d.style[f] = e);
                  }
              }, lg = {}, jg = function(a2, b) {
                var c = lg[b];
                if (!c) {
                  var d = bd(b);
                  c = d;
                  a2.style[d] === void 0 && (d = (yd ? "Webkit" : xd ? "Moz" : vd ? "ms" : null) + dd(d), a2.style[d] !== void 0 && (c = d));
                  lg[b] = c;
                }
                return c;
              }, mg = function(a2, b) {
                var c = a2.style[bd(b)];
                return typeof c !== "undefined" ? c : a2.style[jg(a2, b)] || "";
              }, ng = function(a2) {
                try {
                  return a2.getBoundingClientRect();
                } catch (b) {
                  return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                  };
                }
              }, og = function(a2) {
                var b = of(a2), c = new lf(0, 0);
                var d = b ? of(b) : document;
                d = !vd || 9 <= Number(Pd) || pf(d).g.compatMode == "CSS1Compat" ? d.documentElement : d.body;
                if (a2 == d)
                  return c;
                a2 = ng(a2);
                b = vf(pf(b).g);
                c.x = a2.left + b.x;
                c.y = a2.top + b.y;
                return c;
              }, pg = function(a2, b) {
                var c = new lf(0, 0), d = E(of(a2));
                if (!rd(d, "parent"))
                  return c;
                do {
                  if (d == b)
                    var e = og(a2);
                  else
                    e = ng(a2), e = new lf(e.left, e.top);
                  c.x += e.x;
                  c.y += e.y;
                } while (d && d != b && d != d.parent && (a2 = d.frameElement) && (d = d.parent));
                return c;
              }, qg = function() {
                var a2 = "100%";
                typeof a2 == "number" && (a2 = Math.round(a2) + "px");
                return a2;
              }, sg = function(a2) {
                var b = rg;
                a: {
                  var c = of(a2);
                  if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a2, null))) {
                    c = c.display || c.getPropertyValue("display") || "";
                    break a;
                  }
                  c = "";
                }
                c || (c = a2.currentStyle ? a2.currentStyle.display : null);
                if ((c || a2.style && a2.style.display) != "none")
                  return b(a2);
                c = a2.style;
                var d = c.display, e = c.visibility, f = c.position;
                c.visibility = "hidden";
                c.position = "absolute";
                c.display = "inline";
                a2 = b(a2);
                c.display = d;
                c.position = f;
                c.visibility = e;
                return a2;
              }, rg = function(a2) {
                var b = a2.offsetWidth, c = a2.offsetHeight, d = yd && !b && !c;
                return (b === void 0 || d) && a2.getBoundingClientRect ? (a2 = ng(a2), new mf(a2.right - a2.left, a2.bottom - a2.top)) : new mf(b, c);
              };
              var tg = !!window.google_async_iframe_id, ug = tg && window.parent || window, vg = function() {
                if (tg && !Lf(ug)) {
                  var a2 = "." + Re.domain;
                  try {
                    for (; 2 < a2.split(".").length && !Lf(ug); )
                      Re.domain = a2 = a2.substr(a2.indexOf(".") + 1), ug = window.parent;
                  } catch (b) {
                  }
                  Lf(ug) || (ug = window);
                }
                return ug;
              };
              var wg = function(a2) {
                this.g = a2;
                this.defaultValue = false;
              }, xg = function(a2, b) {
                this.g = a2;
                this.defaultValue = b === void 0 ? 0 : b;
              };
              var yg = new wg(1930), zg = new xg(360261971), Ag = new xg(1921, 72), Bg = new xg(1920, 24), Cg = new xg(1917, 300), Dg = new xg(1916, 1e-3), Eg = new wg(1954), Fg = new wg(1948), Gg = new wg(1928), Hg = new wg(1941), Ig = new wg(370946349), Jg = new wg(379841917), Kg = new wg(396382471), Lg = new wg(393546021);
              var H = function(a2) {
                if (a2.Hc && a2.hasOwnProperty("Hc"))
                  return a2.Hc;
                var b = new a2();
                return a2.Hc = b;
              };
              var Mg = function() {
                var a2 = {};
                this.g = function(b, c) {
                  return a2[b] != null ? a2[b] : c;
                };
                this.h = function(b, c) {
                  return a2[b] != null ? a2[b] : c;
                };
              }, Ng = function(a2) {
                return H(Mg).g(a2.g, a2.defaultValue);
              }, Og = function(a2) {
                return H(Mg).h(a2.g, a2.defaultValue);
              };
              var Pg = function(a2) {
                for (var b = 0, c = a2, d = 0; a2 && a2 != a2.parent; )
                  a2 = a2.parent, d++, Lf(a2) && (c = a2, b = d);
                return {
                  ka: c,
                  level: b
                };
              };
              var Qg = function() {
                this.S = {};
              }, Tg = function() {
                if (Rg)
                  var a2 = Rg;
                else {
                  a2 = ((a2 = cg()) ? Lf(a2.master) ? a2.master : null : null) || vg();
                  var b = a2.google_persistent_state_async;
                  a2 = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Rg = b : a2.google_persistent_state_async = Rg = new Qg();
                }
                b = vg();
                var c = cg(b);
                c ? ((c = c || cg()) ? (b = c.pageViewId, c = c.clientId, typeof c === "string" && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Pg(b).ka, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2, 43))), b = c);
                c = Sg[7] || "google_ps_7";
                a2 = a2.S;
                var d = a2[c];
                a2 = d === void 0 ? a2[c] = b : d;
                return a2;
              }, Rg = null, Ug = {}, Sg = (Ug[8] = "google_prev_ad_formats_by_region", Ug[9] = "google_prev_ad_slotnames_by_region", Ug);
              var Vg = function() {
                var a2;
                this.g = a2 = a2 === void 0 ? {} : a2;
              };
              Vg.prototype.reset = function() {
                this.g = {};
              };
              function Wg(a2, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                  c[d - 1] = arguments[d];
                if (c.length === 0)
                  return af(a2[0]);
                d = [a2[0]];
                for (var e = 0; e < c.length; e++)
                  d.push(encodeURIComponent(c[e])), d.push(a2[e + 1]);
                return af(d.join(""));
              }
              ;
              var Xg = function(a2, b, c) {
                c = c === void 0 ? {} : c;
                this.error = a2;
                this.context = b.context;
                this.msg = b.message || "";
                this.id = b.id || "jserror";
                this.meta = c;
              }, Yg = function(a2) {
                return !!(a2.error && a2.meta && a2.id);
              };
              var Zg = null;
              var $g = function() {
                var a2 = u.performance;
                return a2 && a2.now && a2.timing ? Math.floor(a2.now() + a2.timing.navigationStart) : Ya();
              }, ah = function() {
                var a2 = a2 === void 0 ? u : a2;
                return (a2 = a2.performance) && a2.now ? a2.now() : null;
              }, bh = function(a2) {
                var b = u.performance;
                return b && b.timing && b.timing[a2] || 0;
              }, ch = function() {
                var a2 = Math.min(bh("domLoading") || Infinity, bh("domInteractive") || Infinity);
                return a2 == Infinity ? Math.max(bh("responseEnd"), bh("navigationStart")) : a2;
              };
              var dh = function(a2, b, c, d, e) {
                this.label = a2;
                this.type = b;
                this.value = c;
                this.duration = d === void 0 ? 0 : d;
                this.uniqueId = Math.random();
                this.slotId = e;
              };
              var eh = u.performance, fh = !!(eh && eh.mark && eh.measure && eh.clearMarks), gh = jb(function() {
                var a2;
                if (a2 = fh) {
                  var b;
                  if (Zg === null) {
                    Zg = "";
                    try {
                      a2 = "";
                      try {
                        a2 = u.top.location.hash;
                      } catch (c) {
                        a2 = u.location.hash;
                      }
                      a2 && (Zg = (b = a2.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
                    } catch (c) {
                    }
                  }
                  b = Zg;
                  a2 = !!b.indexOf && 0 <= b.indexOf("1337");
                }
                return a2;
              }), hh = function(a2, b) {
                this.events = [];
                this.g = b || u;
                var c = null;
                b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                this.l = gh() || (c != null ? c : Math.random() < a2);
              };
              hh.prototype.C = function() {
                this.l = false;
                this.events != this.g.google_js_reporting_queue && (gh() && z(this.events, ih), this.events.length = 0);
              };
              hh.prototype.I = function(a2) {
                !this.l || 2048 < this.events.length || this.events.push(a2);
              };
              var ih = function(a2) {
                a2 && eh && gh() && (eh.clearMarks("goog_" + a2.label + "_" + a2.uniqueId + "_start"), eh.clearMarks("goog_" + a2.label + "_" + a2.uniqueId + "_end"));
              };
              hh.prototype.start = function(a2, b) {
                if (!this.l)
                  return null;
                a2 = new dh(a2, b, ah() || $g());
                b = "goog_" + a2.label + "_" + a2.uniqueId + "_start";
                eh && gh() && eh.mark(b);
                return a2;
              };
              hh.prototype.end = function(a2) {
                if (this.l && typeof a2.value === "number") {
                  a2.duration = (ah() || $g()) - a2.value;
                  var b = "goog_" + a2.label + "_" + a2.uniqueId + "_end";
                  eh && gh() && eh.mark(b);
                  this.I(a2);
                }
              };
              var jh = fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]), kh = function() {
                this.h = "jserror";
                this.l = false;
                this.g = null;
                this.o = false;
                this.A = Math.random();
                this.B = this.Ia;
                this.C = null;
              };
              l = kh.prototype;
              l.Vc = function(a2) {
                this.h = a2;
              };
              l.lc = function(a2) {
                this.g = a2;
              };
              l.Wc = function(a2) {
                this.l = a2;
              };
              l.Xc = function(a2) {
                this.o = a2;
              };
              l.Ia = function(a2, b, c, d, e) {
                e = e === void 0 ? this.h : e;
                if ((this.o ? this.A : Math.random()) > (c === void 0 ? 0.01 : c))
                  return this.l;
                Yg(b) || (b = new Xg(b, {
                  context: a2,
                  id: e
                }));
                if (d || this.g)
                  b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
                u.google_js_errors = u.google_js_errors || [];
                u.google_js_errors.push(b);
                if (!u.error_rep_loaded) {
                  c = Wg(jh);
                  var f;
                  a2 = u.document;
                  b = (f = this.C) != null ? f : hc(bf(c).toString());
                  f = a2.createElement("script");
                  f.src = bf(b);
                  df(f);
                  (a2 = a2.getElementsByTagName("script")[0]) && a2.parentNode && a2.parentNode.insertBefore(f, a2);
                  u.error_rep_loaded = true;
                }
                return this.l;
              };
              l.fb = function(a2, b, c) {
                try {
                  var d = b();
                } catch (e) {
                  if (!this.B(a2, e, 0.01, c, this.h))
                    throw e;
                }
                return d;
              };
              l.Sc = function(a2, b, c, d) {
                var e = this;
                return function(f) {
                  for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h - 0] = arguments[h];
                  return e.fb(a2, function() {
                    return b.apply(c, g);
                  }, d);
                };
              };
              var lh = function(a2) {
                return {
                  visible: 1,
                  hidden: 2,
                  prerender: 3,
                  preview: 4,
                  unloaded: 5
                }[a2.visibilityState || a2.webkitVisibilityState || a2.mozVisibilityState || ""] || 0;
              }, mh = function(a2) {
                var b;
                a2.visibilityState ? b = "visibilitychange" : a2.mozVisibilityState ? b = "mozvisibilitychange" : a2.webkitVisibilityState && (b = "webkitvisibilitychange");
                return b;
              };
              var nh = function(a2) {
                a2 = a2._google_rum_ns_ = a2._google_rum_ns_ || {};
                return a2.pq = a2.pq || [];
              };
              var oh = function(a2, b, c) {
                Pf(b, function(d, e) {
                  var f = c && c[e];
                  !d && d !== 0 || f || (a2 += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = true));
                });
                return a2;
              }, wh = function(a2, b, c, d, e, f, g, h) {
                f = f === void 0 ? Infinity : f;
                g = g === void 0 ? false : g;
                hh.call(this, a2, h);
                var k = this;
                this.L = 0;
                this.K = f;
                this.$ = b;
                this.J = c;
                this.Y = d;
                this.aa = e;
                a2 = this.g.navigator;
                this.V = !(this.J !== "csi.gstatic.com" || !a2 || !a2.sendBeacon);
                this.B = {};
                this.H = {};
                this.g.performance && this.g.performance.now || ph(this, "dat", 1);
                a2 && a2.deviceMemory && ph(this, "dmc", a2.deviceMemory);
                this.g === this.g.top && ph(this, "top", 1);
                this.T = !g;
                this.M = function() {
                  k.g.setTimeout(function() {
                    return qh(k);
                  }, 1100);
                };
                this.ua = [];
                this.X = function() {
                  rh(k, 1);
                };
                this.R = function() {
                  rh(k, 2);
                };
                this.da = lb(function() {
                  qh(k);
                });
                this.va = function() {
                  var m = k.g.document;
                  (m.hidden != null ? m.hidden : m.mozHidden != null ? m.mozHidden : m.webkitHidden != null && m.webkitHidden) && k.da();
                };
                this.D = this.g.setTimeout(function() {
                  return qh(k);
                }, 5e3);
                this.A = {};
                this.o = b.length + c.length + d.length + e.length + 3;
                this.h = 0;
                z(this.events, function(m) {
                  return sh(k, m);
                });
                this.G = [];
                b = nh(this.g);
                var n = function(m) {
                  var v = m[0];
                  m = m[1];
                  var r = v.length + m.length + 2;
                  8e3 < k.o + k.h + r && qh(k);
                  k.G.push([v, m]);
                  k.h += r;
                  th(k);
                  return 0;
                };
                z(b, function(m) {
                  return n(m);
                });
                b.length = 0;
                b.push = n;
                uh(this);
                vh(this);
              };
              t(wh, hh);
              var vh = function(a2) {
                a2.g.document.readyState === "complete" ? a2.g.setTimeout(function() {
                  return qh(a2);
                }, 0) : gf(a2.g, "load", a2.M);
                var b = mh(a2.g.document);
                typeof b !== "undefined" && gf(a2.g, b, a2.va);
                Ng(Eg) || gf(a2.g, "unload", a2.X);
                gf(a2.g, "pagehide", a2.R);
              }, ph = function(a2, b, c) {
                c = String(c);
                a2.o = a2.B[b] != null ? a2.o + (c.length - a2.B[b].length) : a2.o + (b.length + c.length + 2);
                a2.B[b] = c;
              }, xh = function(a2) {
                a2.B.uet != null && (a2.o -= 3 + a2.B.uet.length + 2, delete a2.B.uet);
              }, Ah = function(a2, b, c, d, e) {
                e = e === void 0 ? "" : e;
                var f = yh(a2, b, c, d, e);
                8e3 < a2.o + a2.h + f && (qh(a2), f = b.length + c.length + 2);
                zh(a2, b, c, d, e);
                a2.h += f;
                th(a2);
              }, yh = function(a2, b, c, d, e) {
                return a2.A[b] == null ? b.length + c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a2.A[b].length;
              }, zh = function(a2, b, c, d, e) {
                a2.A[b] = d && a2.A[b] != null ? a2.A[b] + ("" + (e === void 0 ? "" : e) + c) : c;
              }, th = function(a2) {
                6e3 <= a2.o + a2.h && qh(a2);
              }, qh = function(a2) {
                if (a2.l && a2.T) {
                  try {
                    if (a2.h) {
                      var b = a2.A;
                      a2.L++;
                      var c = Bh(a2, b);
                      b = false;
                      try {
                        b = !!(a2.V && a2.g.navigator && a2.g.navigator.sendBeacon(c, null));
                      } catch (d) {
                        a2.V = false;
                      }
                      b || dg(a2.g, c);
                      uh(a2);
                      a2.L === a2.K && a2.C();
                    }
                  } catch (d) {
                    new kh().Ia(358, d);
                  }
                  a2.A = {};
                  a2.h = 0;
                  a2.events.length = 0;
                  a2.g.clearTimeout(a2.D);
                  a2.D = 0;
                }
              }, Bh = function(a2, b) {
                var c = a2.$ + "//" + a2.J + a2.Y + a2.aa, d = {};
                c = oh(c, a2.B, d);
                c = oh(c, b, d);
                a2.g.google_timing_params && (c = oh(c, a2.g.google_timing_params, d), a2.g.google_timing_params = void 0);
                z(a2.G, function(e) {
                  var f = q(e);
                  e = f.next().value;
                  f = f.next().value;
                  var g = {};
                  c = oh(c, (g[e] = f, g));
                });
                a2.G.length = 0;
                return c;
              }, uh = function(a2) {
                ph(a2, "puid", (a2.L + 1).toString(36) + "~" + Ya().toString(36));
              }, sh = function(a2, b) {
                var c = "met." + b.type, d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value, e = Math.round(b.duration);
                b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
                Ah(a2, c, b, true, "~");
              };
              wh.prototype.I = function(a2) {
                this.l && this.L < this.K && (hh.prototype.I.call(this, a2), sh(this, a2));
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
                hf(this.g, "pagehide", this.R);
              };
              var rh = function(a2, b) {
                ph(a2, "uet", b);
                z(a2.ua, function(c) {
                  try {
                    c();
                  } catch (d) {
                  }
                });
                jf(a2.g);
                qh(a2);
                xh(a2);
              };
              var Ch = function(a2) {
                var b = [], c = [], d = {}, e = function(f, g) {
                  var h = g + "  ";
                  try {
                    if (f === void 0)
                      b.push("undefined");
                    else if (f === null)
                      b.push("NULL");
                    else if (typeof f === "string")
                      b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if (typeof f === "function")
                      b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Na(f)) {
                      f[Oa] || c.push(f);
                      var k = Ra(f);
                      if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                      else {
                        d[k] = true;
                        b.push("{");
                        for (var n in f)
                          typeof f[n] !== "function" && (b.push("\n"), b.push(h), b.push(n + " = "), e(f[n], h));
                        b.push("\n" + g + "}");
                        delete d[k];
                      }
                    } else
                      b.push(f);
                  } catch (m) {
                    b.push("*** " + m + " ***");
                  }
                };
                e(a2, "");
                for (a2 = 0; a2 < c.length; a2++)
                  Ta(c[a2]);
                return b.join("");
              };
              var Dh = function() {
                this.g = new wh(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, true);
                var a2 = Tg();
                a2 != null && ph(this.g, "c", a2);
                a2 = parseInt(this.g.B.c, 10) / 2;
                a2 != null && ph(this.g, "slotId", a2);
              }, I = function(a2, b, c) {
                if (c != null) {
                  a2 = a2.g;
                  var d = b + "=" + c;
                  a2.H[d] || (Ah(a2, b, c, false), 1e3 > d.length && (a2.H[d] = true));
                }
              }, Eh = function(a2, b) {
                for (var c in b)
                  b[c] = typeof b[c] === "object" ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
                a2 = a2.g;
                c = false;
                var d = 0, e;
                for (e in b)
                  a2.A[e] != null && (c = true), d += yh(a2, e, b[e], false);
                (8e3 < a2.o + a2.h + d || c) && qh(a2);
                for (var f in b)
                  zh(a2, f, b[f], false);
                a2.h += d;
                th(a2);
              }, Fh = function(a2) {
                var b = J().g, c = $g() - 0;
                b.l && b.I(new dh(a2, 4, c, 0, void 0));
              }, J = function() {
                return H(Dh);
              };
              var Gh = function(a2) {
                return /^\s*$/.test(a2) ? false : /^[\],:{}\s\u2028\u2029]*$/.test(a2.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
              }, Hh = function(a) {
                try {
                  return u.JSON.parse(a);
                } catch (b) {
                }
                a = String(a);
                if (Gh(a))
                  try {
                    return eval("(" + a + ")");
                  } catch (b) {
                  }
                throw Error("Invalid JSON string: " + a);
              }, Ih = function(a2) {
                this.g = a2;
              }, Kh = function(a2, b) {
                var c = [];
                Jh(a2, b, c);
                return c.join("");
              }, Jh = function(a2, b, c) {
                if (b == null)
                  c.push("null");
                else {
                  if (typeof b == "object") {
                    if (Array.isArray(b)) {
                      var d = b;
                      b = d.length;
                      c.push("[");
                      for (var e = "", f = 0; f < b; f++)
                        c.push(e), e = d[f], Jh(a2, a2.g ? a2.g.call(d, String(f), e) : e, c), e = ",";
                      c.push("]");
                      return;
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean)
                      b = b.valueOf();
                    else {
                      c.push("{");
                      f = "";
                      for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], typeof e != "function" && (c.push(f), Lh(d, c), c.push(":"), Jh(a2, a2.g ? a2.g.call(b, d, e) : e, c), f = ","));
                      c.push("}");
                      return;
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
              }, Mh = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "	": "\\t",
                "\v": "\\u000b"
              }, Nh = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g, Lh = function(a2, b) {
                b.push('"', a2.replace(Nh, function(c) {
                  var d = Mh[c];
                  d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Mh[c] = d);
                  return d;
                }), '"');
              };
              var Oh = function() {
                this.l = null;
                this.g = "missing-id";
                this.h = false;
              }, Qh = function(a2) {
                var b = null;
                try {
                  b = document.getElementsByClassName("lima-exp-data");
                } catch (c) {
                  return Ph("missing-element", a2.g), null;
                }
                if (1 < b.length)
                  return Ph("multiple-elements", a2.g), null;
                b = b[0];
                return b ? b.innerHTML : (Ph("missing-element", a2.g), null);
              }, Sh = function() {
                var a2 = Rh, b = Qh(a2);
                if (b !== null)
                  if (Gh(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = typeof d === "string";
                    if (typeof c == "string") {
                      var f = J();
                      c != null && ph(f.g, "qqid", c);
                    }
                    e && (a2.g = d);
                    typeof b !== "string" ? Ph("missing-flags", a2.g) : (e || Ph("missing-binary-id", a2.g), a2.l = b);
                  } else
                    Ph("invalid-json", a2.g);
              };
              Oh.prototype.reset = function() {
                this.l = null;
                this.g = "missing-id";
              };
              var Uh = function(a2, b, c, d, e) {
                this.id = a2;
                this.F = b;
                this.o = c;
                this.g = false;
                this.l = d;
                this.h = e;
                this.o && Th(this);
              }, Vh = function(a2) {
                return a2.g || a2.o;
              }, Th = function(a2) {
                if (a2.l && a2.h) {
                  var b = a2.l;
                  b && Object.assign(a2.h.g, b);
                }
              }, Wh = function() {
                this.g = [];
              }, Xh = function() {
                this.g = new Map();
                this.h = false;
                this.B = new Wh();
                this.A = new Uh(0, 0, false);
                this.l = [this.B];
                this.o = new Vg();
              }, K = function(a2) {
                var b = Yh;
                if (b.h || b.g.has(a2.id) || a2.F == null && a2.control == null || a2.ye == 0)
                  return b.A;
                var c = b.B;
                if (a2.control != null)
                  for (var d = q(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a2.control)) {
                      c = e;
                      break;
                    }
                  }
                else
                  a2.sa != null && (c = a2.sa);
                d = 0;
                a2.control != null ? d = a2.control.F : a2.F != null && (d = a2.F);
                a2 = new Uh(a2.id, d, !!a2.zh, a2.flags, b.o);
                c.g.push(a2);
                b.l.includes(c) || b.l.push(c);
                b.g.set(a2.id, a2);
                return a2;
              }, Zh = function() {
                var a2 = Yh;
                return [].concat(ha(a2.g.keys())).filter(function(b) {
                  return Vh(this.g.get(b));
                }, a2);
              }, $h = function(a2) {
                var b = Yh;
                b.h || (a2.g(b.l, b.g), b.h = true);
              };
              Xh.prototype.reset = function() {
                for (var a2 = q(this.g), b = a2.next(); !b.done; b = a2.next())
                  b = q(b.value), b.next(), b.next().value.g = false;
                this.h = false;
                this.o.reset();
              };
              var Yh = new Xh(), bi = function() {
                return ai.g.filter(function(a2) {
                  return Vh(a2);
                }).map(function(a2) {
                  return a2.id;
                });
              };
              var ci = function() {
              };
              ci.prototype.g = function(a2) {
                a2 = q(a2);
                for (var b = a2.next(); !b.done; b = a2.next()) {
                  var c = 0, d = Math.floor(1e3 * Math.random());
                  b = q(b.value.g);
                  for (var e = b.next(); !e.done; e = b.next())
                    if (e = e.value, c += e.F, d < c) {
                      e.g = true;
                      Th(e);
                      break;
                    }
                }
              };
              var ei = function(a2) {
                B.call(this, a2, -1, di);
              };
              t(ei, B);
              var di = [2, 8], fi = [3, 4, 5];
              var hi = function(a2) {
                B.call(this, a2, -1, gi);
              };
              t(hi, B);
              var gi = [4];
              var ji = function(a2) {
                B.call(this, a2, -1, ii);
              };
              t(ji, B);
              var ii = [5], ki = [1, 2, 3, 6, 7];
              var mi = function(a2) {
                B.call(this, a2, -1, li);
              };
              t(mi, B);
              mi.prototype.getId = function() {
                return Ee(this, 1, 0);
              };
              var li = [2];
              var oi = function(a2) {
                B.call(this, a2, -1, ni);
              };
              t(oi, B);
              var ni = [2];
              var qi = function(a2) {
                B.call(this, a2, -1, pi);
              };
              t(qi, B);
              var si = function(a2) {
                B.call(this, a2, -1, ri);
              };
              t(si, B);
              var pi = [1, 4, 2, 3], ri = [2];
              var ti = function(a2, b) {
                switch (b) {
                  case 1:
                    return Pe(a2, 1, ki);
                  case 2:
                    return Pe(a2, 2, ki);
                  case 3:
                    return Pe(a2, 3, ki);
                  case 6:
                    return Pe(a2, 6, ki);
                  default:
                    return null;
                }
              }, ui = function(a2, b) {
                if (!a2)
                  return null;
                switch (b) {
                  case 1:
                    return Fe(a2, 1);
                  case 7:
                    return Ee(a2, 3, "");
                  case 2:
                    return a2 = Ce(a2, 2), a2 == null ? 0 : a2;
                  case 3:
                    return Ee(a2, 3, "");
                  case 6:
                    return Be(a2, 4);
                  default:
                    return null;
                }
              };
              var vi = {}, wi = (vi[47] = Qd, vi);
              function xi() {
                var a2 = yi, b = Ke(new qi(zi), si, 2);
                b.length == 1 && Ee(b[0], 1, 0) == 16 && Ke(b[0], oi, 2).forEach(function(c) {
                  var d = Ee(c, 1, 0), e = Je(c, ei, 3), f = a2[Ee(c, 4, 0)];
                  Ke(c, mi, 2).forEach(function(g) {
                    var h = d || Ee(g, 4, 0), k = g.getId(), n = e || Je(g, ei, 3);
                    n = n ? Pe(n, 3, fi) : null;
                    n = wi[n];
                    g = Ai(Ke(g, ji, 2));
                    K({
                      id: k,
                      F: h,
                      sa: f,
                      ye: n,
                      flags: g
                    });
                  });
                });
              }
              function Ai(a2) {
                if (a2.length) {
                  var b = {};
                  a2.forEach(function(c) {
                    var d = Ie(c, ki), e = Je(c, hi, 4);
                    e && (c = ti(c, d), d = ui(e, d), b[c] = d);
                  });
                  return b;
                }
              }
              ;
              var Bi = function(a2) {
                this.h = a2;
              };
              Bi.prototype.g = function(a2, b) {
                a2 = q(this.h);
                for (var c = a2.next(); !c.done; c = a2.next())
                  if (c = b.get(c.value))
                    c.g = true, Th(c);
              };
              var Ci = function(a2, b) {
                this.h = a2;
                this.l = b;
              };
              t(Ci, Bi);
              Ci.prototype.g = function(a2, b) {
                Bi.prototype.g.call(this, a2, b);
                var c = [];
                a2 = [];
                for (var d = q(this.h), e = d.next(); !e.done; e = d.next())
                  e = e.value, b.get(e) ? c.push(e) : a2.push(e);
                b = c.map(String).join(",") || "0";
                a2 = a2.map(String).join(",") || "0";
                I(J(), "sei", b);
                I(J(), "nsei", a2);
                I(J(), "bi", this.l);
              };
              var Di = function() {
                Oh.apply(this, arguments);
              };
              t(Di, Oh);
              var Ph = function(a2, b) {
                var c = J();
                I(c, "eee", a2);
                I(c, "bi", b);
              };
              function Ei() {
                return Fi.split(",").map(function(a2) {
                  return parseInt(a2, 10);
                }).filter(function(a2) {
                  return !isNaN(a2);
                });
              }
              ;
              var ai = new Wh(), Gi = new Wh(), Hi = new Wh(), Ii = new Wh();
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
              }), Mi = K({
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
              var Ri = new Wh();
              K({
                id: 44746831,
                F: 0,
                sa: Ri
              });
              var Si = K({
                id: 44746832,
                F: 1e3,
                sa: Ri
              });
              K({
                id: 44749185,
                F: 10
              });
              var Ti = new Wh();
              K({
                id: 44750029,
                F: 0,
                sa: Ti
              });
              var Ui = K({
                id: 44750030,
                F: 1e3,
                sa: Ti
              }), Vi = {}, yi = (Vi[32] = ai, Vi[35] = Ii, Vi);
              yi = yi === void 0 ? {} : yi;
              if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}"))
                try {
                  var zi = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
                  zi instanceof Array && xi();
                } catch (a2) {
                  I(J(), "espe", a2.message);
                }
              if (typeof window.v8_flag_map === "undefined") {
                var Rh = H(Di);
                Rh.h || (Sh(), Rh.h = true);
                var Fi = Rh.l, Wi;
                Rh.h || (Sh(), Rh.h = true);
                Wi = Rh.g;
                if (Fi != null) {
                  var Xi = new Ci(Ei(), Wi);
                  $h(Xi);
                }
              }
              ;
              Yh.reset();
              $h(new ci());
              u.console && typeof u.console.log === "function" && Wa(u.console.log, u.console);
              var Yi = function(a2) {
                for (var b = [], c = a2 = E(a2.ownerDocument); c != a2.top; c = c.parent)
                  if (c.frameElement)
                    b.push(c.frameElement);
                  else
                    break;
                return b;
              };
              function Zi(a2) {
                a2 && typeof a2.W == "function" && a2.W();
              }
              ;
              var L = function() {
                this.L = this.L;
                this.I = this.I;
              };
              L.prototype.L = false;
              L.prototype.Ra = function() {
                return this.L;
              };
              L.prototype.W = function() {
                this.L || (this.L = true, this.N());
              };
              var aj = function(a2, b) {
                $i(a2, Xa(Zi, b));
              }, $i = function(a2, b) {
                a2.L ? b() : (a2.I || (a2.I = []), a2.I.push(b));
              };
              L.prototype.N = function() {
                if (this.I)
                  for (; this.I.length; )
                    this.I.shift()();
              };
              var bj = function(a2, b) {
                this.type = a2;
                this.currentTarget = this.target = b;
                this.defaultPrevented = this.h = false;
              };
              bj.prototype.stopPropagation = function() {
                this.h = true;
              };
              bj.prototype.preventDefault = function() {
                this.defaultPrevented = true;
              };
              var cj = function() {
                if (!u.addEventListener || !Object.defineProperty)
                  return false;
                var a2 = false, b = Object.defineProperty({}, "passive", {
                  get: function() {
                    a2 = true;
                  }
                });
                try {
                  u.addEventListener("test", La, b), u.removeEventListener("test", La, b);
                } catch (c) {
                }
                return a2;
              }();
              var dj = function(a2, b) {
                bj.call(this, a2 ? a2.type : "");
                this.relatedTarget = this.currentTarget = this.target = null;
                this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
                this.key = "";
                this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
                this.state = null;
                this.pointerId = 0;
                this.pointerType = "";
                this.g = null;
                a2 && this.init(a2, b);
              };
              Za(dj, bj);
              var ej = {
                2: "touch",
                3: "pen",
                4: "mouse"
              };
              dj.prototype.init = function(a2, b) {
                var c = this.type = a2.type, d = a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : null;
                this.target = a2.target || a2.srcElement;
                this.currentTarget = b;
                (b = a2.relatedTarget) ? xd && (rd(b, "nodeName") || (b = null)) : c == "mouseover" ? b = a2.fromElement : c == "mouseout" && (b = a2.toElement);
                this.relatedTarget = b;
                d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a2.clientX !== void 0 ? a2.clientX : a2.pageX, this.clientY = a2.clientY !== void 0 ? a2.clientY : a2.pageY, this.screenX = a2.screenX || 0, this.screenY = a2.screenY || 0);
                this.button = a2.button;
                this.key = a2.key || "";
                this.ctrlKey = a2.ctrlKey;
                this.altKey = a2.altKey;
                this.shiftKey = a2.shiftKey;
                this.metaKey = a2.metaKey;
                this.pointerId = a2.pointerId || 0;
                this.pointerType = typeof a2.pointerType === "string" ? a2.pointerType : ej[a2.pointerType] || "";
                this.state = a2.state;
                this.g = a2;
                a2.defaultPrevented && dj.ya.preventDefault.call(this);
              };
              dj.prototype.stopPropagation = function() {
                dj.ya.stopPropagation.call(this);
                this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = true;
              };
              dj.prototype.preventDefault = function() {
                dj.ya.preventDefault.call(this);
                var a2 = this.g;
                a2.preventDefault ? a2.preventDefault() : a2.returnValue = false;
              };
              var fj = "closure_listenable_" + (1e6 * Math.random() | 0), gj = function(a2) {
                return !(!a2 || !a2[fj]);
              };
              var hj = 0;
              var ij = function(a2, b, c, d, e) {
                this.listener = a2;
                this.g = null;
                this.src = b;
                this.type = c;
                this.capture = !!d;
                this.Xb = e;
                this.key = ++hj;
                this.Ib = this.Qb = false;
              }, jj = function(a2) {
                a2.Ib = true;
                a2.listener = null;
                a2.g = null;
                a2.src = null;
                a2.Xb = null;
              };
              var kj = function(a2) {
                this.src = a2;
                this.g = {};
                this.h = 0;
              };
              kj.prototype.add = function(a2, b, c, d, e) {
                var f = a2.toString();
                a2 = this.g[f];
                a2 || (a2 = this.g[f] = [], this.h++);
                var g = lj(a2, b, d, e);
                -1 < g ? (b = a2[g], c || (b.Qb = false)) : (b = new ij(b, this.src, f, !!d, e), b.Qb = c, a2.push(b));
                return b;
              };
              kj.prototype.remove = function(a2, b, c, d) {
                a2 = a2.toString();
                if (!(a2 in this.g))
                  return false;
                var e = this.g[a2];
                b = lj(e, b, c, d);
                return -1 < b ? (jj(e[b]), yb(e, b), e.length == 0 && (delete this.g[a2], this.h--), true) : false;
              };
              var mj = function(a2, b) {
                var c = b.type;
                c in a2.g && xb(a2.g[c], b) && (jj(b), a2.g[c].length == 0 && (delete a2.g[c], a2.h--));
              };
              kj.prototype.Cb = function(a2, b, c, d) {
                a2 = this.g[a2.toString()];
                var e = -1;
                a2 && (e = lj(a2, b, c, d));
                return -1 < e ? a2[e] : null;
              };
              var lj = function(a2, b, c, d) {
                for (var e = 0; e < a2.length; ++e) {
                  var f = a2[e];
                  if (!f.Ib && f.listener == b && f.capture == !!c && f.Xb == d)
                    return e;
                }
                return -1;
              };
              var nj = "closure_lm_" + (1e6 * Math.random() | 0), oj = {}, pj = 0, rj = function(a2, b, c, d, e) {
                if (d && d.once)
                  return qj(a2, b, c, d, e);
                if (Array.isArray(b)) {
                  for (var f = 0; f < b.length; f++)
                    rj(a2, b[f], c, d, e);
                  return null;
                }
                c = sj(c);
                return gj(a2) ? a2.O(b, c, Na(d) ? !!d.capture : !!d, e) : tj(a2, b, c, false, d, e);
              }, tj = function(a2, b, c, d, e, f) {
                if (!b)
                  throw Error("Invalid event type");
                var g = Na(e) ? !!e.capture : !!e, h = uj(a2);
                h || (a2[nj] = h = new kj(a2));
                c = h.add(b, c, d, g, f);
                if (c.g)
                  return c;
                d = vj();
                c.g = d;
                d.src = a2;
                d.listener = c;
                if (a2.addEventListener)
                  cj || (e = g), e === void 0 && (e = false), a2.addEventListener(b.toString(), d, e);
                else if (a2.attachEvent)
                  a2.attachEvent(wj(b.toString()), d);
                else if (a2.addListener && a2.removeListener)
                  a2.addListener(d);
                else
                  throw Error("addEventListener and attachEvent are unavailable.");
                pj++;
                return c;
              }, vj = function() {
                var a2 = xj, b = function(c) {
                  return a2.call(b.src, b.listener, c);
                };
                return b;
              }, qj = function(a2, b, c, d, e) {
                if (Array.isArray(b)) {
                  for (var f = 0; f < b.length; f++)
                    qj(a2, b[f], c, d, e);
                  return null;
                }
                c = sj(c);
                return gj(a2) ? a2.Gb(b, c, Na(d) ? !!d.capture : !!d, e) : tj(a2, b, c, true, d, e);
              }, yj = function(a2, b, c, d, e) {
                if (Array.isArray(b))
                  for (var f = 0; f < b.length; f++)
                    yj(a2, b[f], c, d, e);
                else
                  d = Na(d) ? !!d.capture : !!d, c = sj(c), gj(a2) ? a2.Ua(b, c, d, e) : a2 && (a2 = uj(a2)) && (b = a2.Cb(b, c, d, e)) && zj(b);
              }, zj = function(a2) {
                if (typeof a2 !== "number" && a2 && !a2.Ib) {
                  var b = a2.src;
                  if (gj(b))
                    mj(b.B, a2);
                  else {
                    var c = a2.type, d = a2.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a2.capture) : b.detachEvent ? b.detachEvent(wj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    pj--;
                    (c = uj(b)) ? (mj(c, a2), c.h == 0 && (c.src = null, b[nj] = null)) : jj(a2);
                  }
                }
              }, wj = function(a2) {
                return a2 in oj ? oj[a2] : oj[a2] = "on" + a2;
              }, xj = function(a2, b) {
                if (a2.Ib)
                  a2 = true;
                else {
                  b = new dj(b, this);
                  var c = a2.listener, d = a2.Xb || a2.src;
                  a2.Qb && zj(a2);
                  a2 = c.call(d, b);
                }
                return a2;
              }, uj = function(a2) {
                a2 = a2[nj];
                return a2 instanceof kj ? a2 : null;
              }, Aj = "__closure_events_fn_" + (1e9 * Math.random() >>> 0), sj = function(a2) {
                if (typeof a2 === "function")
                  return a2;
                a2[Aj] || (a2[Aj] = function(b) {
                  return a2.handleEvent(b);
                });
                return a2[Aj];
              };
              var M = function() {
                L.call(this);
                this.B = new kj(this);
                this.Ob = this;
                this.ua = null;
              };
              Za(M, L);
              M.prototype[fj] = true;
              l = M.prototype;
              l.addEventListener = function(a2, b, c, d) {
                rj(this, a2, b, c, d);
              };
              l.removeEventListener = function(a2, b, c, d) {
                yj(this, a2, b, c, d);
              };
              l.dispatchEvent = function(a2) {
                var b, c = this.ua;
                if (c)
                  for (b = []; c; c = c.ua)
                    b.push(c);
                c = this.Ob;
                var d = a2.type || a2;
                if (typeof a2 === "string")
                  a2 = new bj(a2, c);
                else if (a2 instanceof bj)
                  a2.target = a2.target || c;
                else {
                  var e = a2;
                  a2 = new bj(d, c);
                  Xb(a2, e);
                }
                e = true;
                if (b)
                  for (var f = b.length - 1; !a2.h && 0 <= f; f--) {
                    var g = a2.currentTarget = b[f];
                    e = Bj(g, d, true, a2) && e;
                  }
                a2.h || (g = a2.currentTarget = c, e = Bj(g, d, true, a2) && e, a2.h || (e = Bj(g, d, false, a2) && e));
                if (b)
                  for (f = 0; !a2.h && f < b.length; f++)
                    g = a2.currentTarget = b[f], e = Bj(g, d, false, a2) && e;
                return e;
              };
              l.N = function() {
                M.ya.N.call(this);
                if (this.B) {
                  var a2 = this.B, b = 0, c;
                  for (c in a2.g) {
                    for (var d = a2.g[c], e = 0; e < d.length; e++)
                      ++b, jj(d[e]);
                    delete a2.g[c];
                    a2.h--;
                  }
                }
                this.ua = null;
              };
              l.O = function(a2, b, c, d) {
                return this.B.add(String(a2), b, false, c, d);
              };
              l.Gb = function(a2, b, c, d) {
                return this.B.add(String(a2), b, true, c, d);
              };
              l.Ua = function(a2, b, c, d) {
                this.B.remove(String(a2), b, c, d);
              };
              var Bj = function(a2, b, c, d) {
                b = a2.B.g[String(b)];
                if (!b)
                  return true;
                b = b.concat();
                for (var e = true, f = 0; f < b.length; ++f) {
                  var g = b[f];
                  if (g && !g.Ib && g.capture == c) {
                    var h = g.listener, k = g.Xb || g.src;
                    g.Qb && mj(a2.B, g);
                    e = h.call(k, d) !== false && e;
                  }
                }
                return e && !d.defaultPrevented;
              };
              M.prototype.Cb = function(a2, b, c, d) {
                return this.B.Cb(String(a2), b, c, d);
              };
              var Cj = function(a2, b) {
                this.l = a2;
                this.o = b;
                this.h = 0;
                this.g = null;
              };
              Cj.prototype.get = function() {
                if (0 < this.h) {
                  this.h--;
                  var a2 = this.g;
                  this.g = a2.next;
                  a2.next = null;
                } else
                  a2 = this.l();
                return a2;
              };
              var Dj = function(a2, b) {
                a2.o(b);
                100 > a2.h && (a2.h++, b.next = a2.g, a2.g = b);
              };
              var Ej, Fj = function() {
                var a2 = u.MessageChannel;
                typeof a2 === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !A("Presto") && (a2 = function() {
                  var e = wf(document, "IFRAME");
                  e.style.display = "none";
                  document.documentElement.appendChild(e);
                  var f = e.contentWindow;
                  e = f.document;
                  e.open();
                  e.close();
                  var g = "callImmediate" + Math.random(), h = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
                  e = Wa(function(k) {
                    if ((h == "*" || k.origin == h) && k.data == g)
                      this.port1.onmessage();
                  }, this);
                  f.addEventListener("message", e, false);
                  this.port1 = {};
                  this.port2 = {
                    postMessage: function() {
                      f.postMessage(g, h);
                    }
                  };
                });
                if (typeof a2 !== "undefined" && !Ic()) {
                  var b = new a2(), c = {}, d = c;
                  b.port1.onmessage = function() {
                    if (c.next !== void 0) {
                      c = c.next;
                      var e = c.ud;
                      c.ud = null;
                      e();
                    }
                  };
                  return function(e) {
                    d.next = {
                      ud: e
                    };
                    d = d.next;
                    b.port2.postMessage(0);
                  };
                }
                return function(e) {
                  u.setTimeout(e, 0);
                };
              };
              function Gj(a2) {
                u.setTimeout(function() {
                  throw a2;
                }, 0);
              }
              ;
              var Hj = function() {
                this.h = this.g = null;
              };
              Hj.prototype.add = function(a2, b) {
                var c = Ij.get();
                c.set(a2, b);
                this.h ? this.h.next = c : this.g = c;
                this.h = c;
              };
              Hj.prototype.remove = function() {
                var a2 = null;
                this.g && (a2 = this.g, this.g = this.g.next, this.g || (this.h = null), a2.next = null);
                return a2;
              };
              var Ij = new Cj(function() {
                return new Jj();
              }, function(a2) {
                return a2.reset();
              }), Jj = function() {
                this.next = this.g = this.h = null;
              };
              Jj.prototype.set = function(a2, b) {
                this.h = a2;
                this.g = b;
                this.next = null;
              };
              Jj.prototype.reset = function() {
                this.next = this.g = this.h = null;
              };
              var Oj = function(a2, b) {
                Kj || Lj();
                Mj || (Kj(), Mj = true);
                Nj.add(a2, b);
              }, Kj, Lj = function() {
                if (u.Promise && u.Promise.resolve) {
                  var a2 = u.Promise.resolve(void 0);
                  Kj = function() {
                    a2.then(Pj);
                  };
                } else
                  Kj = function() {
                    var b = Pj;
                    typeof u.setImmediate !== "function" || u.Window && u.Window.prototype && !A("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (Ej || (Ej = Fj()), Ej(b)) : u.setImmediate(b);
                  };
              }, Mj = false, Nj = new Hj(), Pj = function() {
                for (var a2; a2 = Nj.remove(); ) {
                  try {
                    a2.h.call(a2.g);
                  } catch (b) {
                    Gj(b);
                  }
                  Dj(Ij, a2);
                }
                Mj = false;
              };
              var Qj = function(a2) {
                if (!a2)
                  return false;
                try {
                  return !!a2.$goog_Thenable;
                } catch (b) {
                  return false;
                }
              };
              var Sj = function(a2) {
                this.g = 0;
                this.C = void 0;
                this.o = this.h = this.l = null;
                this.B = this.A = false;
                if (a2 != La)
                  try {
                    var b = this;
                    a2.call(void 0, function(c) {
                      Rj(b, 2, c);
                    }, function(c) {
                      Rj(b, 3, c);
                    });
                  } catch (c) {
                    Rj(this, 3, c);
                  }
              }, Tj = function() {
                this.next = this.context = this.h = this.l = this.g = null;
                this.o = false;
              };
              Tj.prototype.reset = function() {
                this.context = this.h = this.l = this.g = null;
                this.o = false;
              };
              var Uj = new Cj(function() {
                return new Tj();
              }, function(a2) {
                a2.reset();
              }), Vj = function(a2, b, c) {
                var d = Uj.get();
                d.l = a2;
                d.h = b;
                d.context = c;
                return d;
              };
              Sj.prototype.then = function(a2, b, c) {
                return Wj(this, typeof a2 === "function" ? a2 : null, typeof b === "function" ? b : null, c);
              };
              Sj.prototype.$goog_Thenable = true;
              Sj.prototype.cancel = function(a2) {
                if (this.g == 0) {
                  var b = new Xj(a2);
                  Oj(function() {
                    Yj(this, b);
                  }, this);
                }
              };
              var Yj = function(a2, b) {
                if (a2.g == 0)
                  if (a2.l) {
                    var c = a2.l;
                    if (c.h) {
                      for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a2 && (e = g), !(e && 1 < d))); g = g.next)
                        e || (f = g);
                      e && (c.g == 0 && d == 1 ? Yj(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Zj(c), ak(c, e, 3, b)));
                    }
                    a2.l = null;
                  } else
                    Rj(a2, 3, b);
              }, ck = function(a2, b) {
                a2.h || a2.g != 2 && a2.g != 3 || bk(a2);
                a2.o ? a2.o.next = b : a2.h = b;
                a2.o = b;
              }, Wj = function(a2, b, c, d) {
                var e = Vj(null, null, null);
                e.g = new Sj(function(f, g) {
                  e.l = b ? function(h) {
                    try {
                      var k = b.call(d, h);
                      f(k);
                    } catch (n) {
                      g(n);
                    }
                  } : f;
                  e.h = c ? function(h) {
                    try {
                      var k = c.call(d, h);
                      k === void 0 && h instanceof Xj ? g(h) : f(k);
                    } catch (n) {
                      g(n);
                    }
                  } : g;
                });
                e.g.l = a2;
                ck(a2, e);
                return e.g;
              };
              Sj.prototype.L = function(a2) {
                this.g = 0;
                Rj(this, 2, a2);
              };
              Sj.prototype.D = function(a2) {
                this.g = 0;
                Rj(this, 3, a2);
              };
              var Rj = function(a2, b, c) {
                if (a2.g == 0) {
                  a2 === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                  a2.g = 1;
                  a: {
                    var d = c, e = a2.L, f = a2.D;
                    if (d instanceof Sj) {
                      ck(d, Vj(e || La, f || null, a2));
                      var g = true;
                    } else if (Qj(d))
                      d.then(e, f, a2), g = true;
                    else {
                      if (Na(d))
                        try {
                          var h = d.then;
                          if (typeof h === "function") {
                            dk(d, h, e, f, a2);
                            g = true;
                            break a;
                          }
                        } catch (k) {
                          f.call(a2, k);
                          g = true;
                          break a;
                        }
                      g = false;
                    }
                  }
                  g || (a2.C = c, a2.g = b, a2.l = null, bk(a2), b != 3 || c instanceof Xj || ek(a2, c));
                }
              }, dk = function(a2, b, c, d, e) {
                var f = false, g = function(k) {
                  f || (f = true, c.call(e, k));
                }, h = function(k) {
                  f || (f = true, d.call(e, k));
                };
                try {
                  b.call(a2, g, h);
                } catch (k) {
                  h(k);
                }
              }, bk = function(a2) {
                a2.A || (a2.A = true, Oj(a2.I, a2));
              }, Zj = function(a2) {
                var b = null;
                a2.h && (b = a2.h, a2.h = b.next, b.next = null);
                a2.h || (a2.o = null);
                return b;
              };
              Sj.prototype.I = function() {
                for (var a2; a2 = Zj(this); )
                  ak(this, a2, this.g, this.C);
                this.A = false;
              };
              var ak = function(a2, b, c, d) {
                if (c == 3 && b.h && !b.o)
                  for (; a2 && a2.B; a2 = a2.l)
                    a2.B = false;
                if (b.g)
                  b.g.l = null, fk(b, c, d);
                else
                  try {
                    b.o ? b.l.call(b.context) : fk(b, c, d);
                  } catch (e) {
                    gk.call(null, e);
                  }
                Dj(Uj, b);
              }, fk = function(a2, b, c) {
                b == 2 ? a2.l.call(a2.context, c) : a2.h && a2.h.call(a2.context, c);
              }, ek = function(a2, b) {
                a2.B = true;
                Oj(function() {
                  a2.B && gk.call(null, b);
                });
              }, gk = Gj, Xj = function(a2) {
                bb.call(this, a2);
              };
              Za(Xj, bb);
              Xj.prototype.name = "cancel";
              var hk = function(a2, b) {
                M.call(this);
                this.h = a2 || 1;
                this.g = b || u;
                this.l = Wa(this.uf, this);
                this.o = Ya();
              };
              Za(hk, M);
              l = hk.prototype;
              l.jb = false;
              l.Ea = null;
              l.uf = function() {
                if (this.jb) {
                  var a2 = Ya() - this.o;
                  0 < a2 && a2 < 0.8 * this.h ? this.Ea = this.g.setTimeout(this.l, this.h - a2) : (this.Ea && (this.g.clearTimeout(this.Ea), this.Ea = null), this.dispatchEvent("tick"), this.jb && (this.stop(), this.start()));
                }
              };
              l.start = function() {
                this.jb = true;
                this.Ea || (this.Ea = this.g.setTimeout(this.l, this.h), this.o = Ya());
              };
              l.stop = function() {
                this.jb = false;
                this.Ea && (this.g.clearTimeout(this.Ea), this.Ea = null);
              };
              l.N = function() {
                hk.ya.N.call(this);
                this.stop();
                delete this.g;
              };
              var ik = function(a2, b, c) {
                if (typeof a2 === "function")
                  c && (a2 = Wa(a2, c));
                else if (a2 && typeof a2.handleEvent == "function")
                  a2 = Wa(a2.handleEvent, a2);
                else
                  throw Error("Invalid listener argument");
                return 2147483647 < Number(b) ? -1 : u.setTimeout(a2, b || 0);
              };
              var jk = function() {
                return Math.round(Date.now() / 1e3);
              };
              var kk = function() {
                this.g = {};
                return this;
              };
              kk.prototype.remove = function(a2) {
                var b = this.g;
                a2 in b && delete b[a2];
              };
              kk.prototype.set = function(a2, b) {
                this.g[a2] = b;
              };
              var lk = function(a2, b) {
                a2.g.eb = Vb(a2.g, "eb", 0) | b;
              };
              kk.prototype.get = function(a2) {
                return Vb(this.g, a2, null);
              };
              var mk = null, nk = function() {
                this.g = {};
                this.h = 0;
              }, ok = function() {
                mk || (mk = new nk());
                return mk;
              }, pk = function(a2, b) {
                a2.g[b.getName()] = b;
              }, qk = function(a2, b) {
                this.o = a2;
                this.l = true;
                this.g = b;
              };
              qk.prototype.getName = function() {
                return this.o;
              };
              qk.prototype.h = function() {
                return String(this.g);
              };
              var rk = function(a2, b) {
                qk.call(this, String(a2), b);
                this.B = a2;
                this.g = !!b;
              };
              t(rk, qk);
              rk.prototype.h = function() {
                return this.g ? "1" : "0";
              };
              var sk = function(a2, b) {
                qk.call(this, a2, b);
              };
              t(sk, qk);
              sk.prototype.h = function() {
                return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : "";
              };
              var tk = function(a2) {
                if (a2.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                  a2 = a2.split(".");
                  var b = Number(a2[0]), c = Number(a2[1]);
                  return new sk("", new ag(c, b, Number(a2[3]) - c, Number(a2[2]) - b));
                }
                return new sk("", new ag(0, 0, 0, 0));
              };
              var uk = function(a2) {
                var b = new ag(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE), c = new ag(0, 0, 0, 0);
                if (!a2 || a2.length == 0)
                  return c;
                for (var d = 0; d < a2.length; d++) {
                  a: {
                    var e = b;
                    var f = a2[d], g = Math.max(e.left, f.left), h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                      var k = Math.max(e.top, f.top);
                      f = Math.min(e.top + e.height, f.top + f.height);
                      if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = true;
                        break a;
                      }
                    }
                    e = false;
                  }
                  if (!e)
                    return c;
                }
                return b;
              }, vk = function(a2, b) {
                var c = a2.getBoundingClientRect();
                a2 = pg(a2, b);
                return new ag(Math.round(a2.x), Math.round(a2.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top));
              }, wk = function(a2, b, c) {
                if (b && c) {
                  a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                      var f = Math.max(b.top, c.top), g = Math.min(b.top + b.height, c.top + c.height);
                      if (f <= g) {
                        d = new ag(d, f, e - d, g - f);
                        break a;
                      }
                    }
                    d = null;
                  }
                  e = d ? d.height * d.width : 0;
                  f = d ? b.height * b.width : 0;
                  d = d && f ? Math.round(e / f * 100) : 0;
                  pk(a2, new qk("vp", d));
                  d && 0 < d ? (e = bg(b), f = bg(c), e = e.top >= f.top && e.top < f.bottom) : e = false;
                  pk(a2, new rk(512, e));
                  d && 0 < d ? (e = bg(b), f = bg(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = false;
                  pk(a2, new rk(1024, e));
                  d && 0 < d ? (e = bg(b), f = bg(c), e = e.left >= f.left && e.left < f.right) : e = false;
                  pk(a2, new rk(2048, e));
                  d && 0 < d ? (b = bg(b), c = bg(c), c = b.right <= c.right && b.right > c.left) : c = false;
                  pk(a2, new rk(4096, c));
                }
              };
              var xk = function(a2, b) {
                var c = 0;
                Ob(E(), "ima", "video", "client", "tagged") && (c = 1);
                var d = null;
                a2 && (d = a2());
                if (d) {
                  a2 = ok();
                  a2.g = {};
                  var e = new rk(32, true);
                  e.l = false;
                  pk(a2, e);
                  e = E().document;
                  e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
                  pk(a2, new rk(64, e.toLowerCase().substring(e.length - 6) != "hidden" ? true : false));
                  try {
                    var f = E().top;
                    try {
                      var g = !!f.location.href || f.location.href === "";
                    } catch (m) {
                      g = false;
                    }
                    if (g) {
                      var h = Yi(d);
                      var k = h && h.length != 0 ? "1" : "0";
                    } else
                      k = "2";
                  } catch (m) {
                    k = "2";
                  }
                  pk(a2, new rk(256, k == "2"));
                  pk(a2, new rk(128, k == "1"));
                  h = g = E().top;
                  k == "2" && (h = E());
                  f = vk(d, h);
                  pk(a2, new sk("er", f));
                  try {
                    var n = h.document && !h.document.body ? null : uf(h || window);
                  } catch (m) {
                    n = null;
                  }
                  n ? (h = vf(pf(h.document).g), pk(a2, new rk(16384, !!h)), n = h ? new ag(h.x, h.y, n.width, n.height) : null) : n = null;
                  pk(a2, new sk("vi", n));
                  if (n && k == "1") {
                    k = Yi(d);
                    d = [];
                    for (h = 0; h < k.length; h++)
                      (e = vk(k[h], g)) && d.push(e);
                    d.push(n);
                    n = uk(d);
                  }
                  wk(a2, f, n);
                  a2.h && pk(a2, new qk("ts", jk() - a2.h));
                  a2.h = jk();
                } else
                  a2 = ok(), a2.g = {}, a2.h = jk(), pk(a2, new rk(32, false));
                this.l = a2;
                this.g = new kk();
                this.g.set("ve", 4);
                c && lk(this.g, 1);
                Ob(E(), "ima", "video", "client", "crossdomainTag") && lk(this.g, 4);
                Ob(E(), "ima", "video", "client", "sdkTag") && lk(this.g, 8);
                Ob(E(), "ima", "video", "client", "jsTag") && lk(this.g, 2);
                b && Vb(b, "fullscreen", false) && lk(this.g, 16);
                this.h = b = null;
                if (c && (c = Ob(E(), "ima", "video", "client"), c.getEData)) {
                  this.h = c.getEData();
                  if (c = Ob(E(), "ima", "video", "client", "getLastSnapshotFromTop")) {
                    if (a2 = c())
                      this.h.extendWithDataFromTopIframe(a2.tagstamp, a2.playstamp, a2.lactstamp), c = this.l, b = a2.er, a2 = a2.vi, b && a2 && (b = tk(b).g, a2 = tk(a2).g, k = null, Vb(c.g, "er", null) && (k = Vb(c.g, "er", null).g, k.top += b.top, k.left += b.left, pk(c, new sk("er", k))), Vb(c.g, "vi", null) && (n = Vb(c.g, "vi", null).g, n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a2), b = uk(d), wk(c, k, b), pk(c, new sk("vi", a2))));
                  }
                  a: {
                    if (this.h) {
                      if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a;
                      }
                      if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a;
                      }
                    }
                    b = null;
                  }
                }
                c = this.g;
                a2 = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1e3) : null;
                c.set.call(c, "td", jk() - (a2 != null ? a2 : b != null ? b : jk()));
              };
              var yk = new hk(200), zk = function(a2, b) {
                try {
                  var c = new xk(a2, b);
                  a2 = [];
                  var d = Number(c.g.get("eb"));
                  c.g.remove("eb");
                  var e, f = c.g;
                  b = [];
                  for (var g in f.g)
                    b.push(g + f.g[g]);
                  (e = b.join("_")) && a2.push(e);
                  if (c.h) {
                    var h = c.h.serialize();
                    h && a2.push(h);
                  }
                  var k, n = c.l;
                  e = d;
                  f = [];
                  e || (e = 0);
                  for (var m in n.g) {
                    var v = n.g[m];
                    if (v instanceof rk)
                      v.g && (e |= v.B);
                    else {
                      var r, w = n.g[m];
                      (r = w.l ? w.h() : "") && f.push(m + r);
                    }
                  }
                  f.push("eb" + String(e));
                  (k = f.join("_")) && a2.push(k);
                  c.g.set("eb", d);
                  return a2.join("_");
                } catch (x) {
                  return "tle;" + Xc(x.name, 12) + ";" + Xc(x.message, 40);
                }
              }, Ak = function(a2, b) {
                rj(yk, "tick", function() {
                  var c = zk(b);
                  a2(c);
                });
                yk.start();
                yk.dispatchEvent("tick");
              };
              var Ck = function(a2) {
                B.call(this, a2, -1, Bk);
              };
              t(Ck, B);
              var Dk = function(a2) {
                B.call(this, a2);
              };
              t(Dk, B);
              var Fk = function(a2, b) {
                ke(b, 1, C(a2, 1));
                ne(b, 2, Je(a2, Ek, 2));
                ne(b, 3, Je(a2, Ek, 3));
                var c = C(a2, 4);
                c != null && le(b, 4, fb(c));
                c = C(a2, 5);
                c != null && le(b, 5, fb(c));
                Qe(a2, b);
              }, Ek = function(a2) {
                B.call(this, a2);
              };
              t(Ek, B);
              var me = function(a2, b) {
                ke(b, 1, C(a2, 1));
                ke(b, 2, C(a2, 2));
                ke(b, 3, C(a2, 3));
                Qe(a2, b);
              }, Gk = function(a2) {
                B.call(this, a2);
              };
              t(Gk, B);
              var Hk = function(a2, b) {
                var c = C(a2, 1);
                c != null && le(b, 1, fb(c));
                c = C(a2, 2);
                c != null && le(b, 2, fb(c));
                je(b, 3, C(a2, 3));
                je(b, 7, C(a2, 7));
                var d = C(a2, 8);
                if (d != null) {
                  md(b.g, 69);
                  c = b.g;
                  var e = d;
                  e = (d = 0 > e ? 1 : 0) ? -e : e;
                  if (e === 0)
                    0 < 1 / e ? hd = id = 0 : (id = 0, hd = 2147483648);
                  else if (isNaN(e))
                    id = 0, hd = 2147483647;
                  else if (34028234663852886e22 < e)
                    id = 0, hd = (d << 31 | 2139095040) >>> 0;
                  else if (11754943508222875e-54 > e)
                    e = Math.round(e / Math.pow(2, -149)), id = 0, hd = (d << 31 | e) >>> 0;
                  else {
                    var f = Math.floor(Math.log(e) / Math.LN2);
                    e *= Math.pow(2, -f);
                    e = Math.round(8388608 * e) & 8388607;
                    id = 0;
                    hd = (d << 31 | f + 127 << 23 | e) >>> 0;
                  }
                  nd(c, hd);
                }
                ie(b, 4, C(a2, 4));
                ie(b, 5, C(a2, 5));
                ie(b, 6, C(a2, 6));
                Qe(a2, b);
              }, Bk = [1, 2];
              var Ik = function(a2) {
                B.call(this, a2);
              };
              t(Ik, B);
              var Jk;
              Jk = ["av.default", "js", "unreleased"].slice(-1)[0];
              var Kk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"), Ok = function(a2) {
                a2 = a2 || Lk();
                for (var b = new Mk(u.location.href, u, false), c = null, d = a2.length - 1, e = d; 0 <= e; --e) {
                  var f = a2[e];
                  !c && Kk.test(f.url) && (c = f);
                  if (f.url && !f.Jc) {
                    b = f;
                    break;
                  }
                }
                e = null;
                f = a2.length && a2[d].url;
                b.depth != 0 && f && (e = a2[d]);
                return new Nk(b, e, c);
              }, Lk = function() {
                var a2 = u, b = [], c = null;
                do {
                  var d = a2;
                  if (Lf(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null;
                  } else
                    e = c, c = null;
                  b.push(new Mk(e || "", d));
                  try {
                    a2 = d.parent;
                  } catch (f) {
                    a2 = null;
                  }
                } while (a2 && d != a2);
                d = 0;
                for (a2 = b.length - 1; d <= a2; ++d)
                  b[d].depth = a2 - d;
                d = u;
                if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                  for (a2 = 1; a2 < b.length; ++a2)
                    e = b[a2], e.url || (e.url = d.location.ancestorOrigins[a2 - 1] || "", e.Jc = true);
                return b;
              }, Nk = function(a2, b, c) {
                this.g = a2;
                this.h = b;
                this.l = c;
              }, Mk = function(a2, b, c) {
                this.url = a2;
                this.ka = b;
                this.Jc = !!c;
                this.depth = null;
              };
              var Pk = function() {
                this.l = "&";
                this.h = {};
                this.o = 0;
                this.g = [];
              }, Qk = function(a2, b) {
                var c = {};
                c[a2] = b;
                return [c];
              }, Sk = function(a2, b, c, d, e) {
                var f = [];
                Pf(a2, function(g, h) {
                  (g = Rk(g, b, c, d, e)) && f.push(h + "=" + g);
                });
                return f.join(b);
              }, Rk = function(a2, b, c, d, e) {
                if (a2 == null)
                  return "";
                b = b || "&";
                c = c || ",$";
                typeof c == "string" && (c = c.split(""));
                if (a2 instanceof Array) {
                  if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a2.length; g++)
                      f.push(Rk(a2[g], b, c, d + 1, e));
                    return f.join(c[d]);
                  }
                } else if (typeof a2 == "object")
                  return e = e || 0, 2 > e ? encodeURIComponent(Sk(a2, b, c, d, e + 1)) : "...";
                return encodeURIComponent(String(a2));
              }, Tk = function(a2, b, c) {
                a2.g.push(b);
                a2.h[b] = c;
              }, Uk = function(a2, b, c, d) {
                a2.g.push(b);
                a2.h[b] = Qk(c, d);
              }, Wk = function(a2, b, c) {
                b = b + "//pagead2.googlesyndication.com" + c;
                var d = Vk(a2) - c.length;
                if (0 > d)
                  return "";
                a2.g.sort(function(m, v) {
                  return m - v;
                });
                c = null;
                for (var e = "", f = 0; f < a2.g.length; f++)
                  for (var g = a2.g[f], h = a2.h[g], k = 0; k < h.length; k++) {
                    if (!d) {
                      c = c == null ? g : c;
                      break;
                    }
                    var n = Sk(h[k], a2.l, ",$");
                    if (n) {
                      n = e + n;
                      if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a2.l;
                        break;
                      }
                      c = c == null ? g : c;
                    }
                  }
                a2 = "";
                c != null && (a2 = e + "trn=" + c);
                return b + a2 + "";
              }, Vk = function(a2) {
                var b = 1, c;
                for (c in a2.h)
                  b = c.length > b ? c.length : b;
                return 3997 - b - a2.l.length - 1;
              };
              var Xk = function(a2, b, c, d, e) {
                if ((d ? a2.g : Math.random()) < (e || 0.01))
                  try {
                    if (c instanceof Pk)
                      var f = c;
                    else
                      f = new Pk(), Pf(c, function(h, k) {
                        var n = f, m = n.o++;
                        Tk(n, m, Qk(k, h));
                      });
                    var g = Wk(f, a2.h, "/pagead/gen_204?id=" + b + "&");
                    g && dg(u, g);
                  } catch (h) {
                  }
              };
              var $k = function() {
                var a2 = Yk;
                this.A = Zk;
                this.B = "jserror";
                this.l = true;
                this.h = null;
                this.C = this.Ia;
                this.g = a2 === void 0 ? null : a2;
                this.o = false;
              };
              l = $k.prototype;
              l.lc = function(a2) {
                this.h = a2;
              };
              l.Vc = function(a2) {
                this.B = a2;
              };
              l.Wc = function(a2) {
                this.l = a2;
              };
              l.Xc = function(a2) {
                this.o = a2;
              };
              l.fb = function(a2, b, c) {
                try {
                  if (this.g && this.g.l) {
                    var d = this.g.start(a2.toString(), 3);
                    var e = b();
                    this.g.end(d);
                  } else
                    e = b();
                } catch (k) {
                  b = this.l;
                  try {
                    ih(d);
                    var f = new Xg(k, {
                      message: al(k)
                    });
                    b = this.C(a2, f, void 0, c);
                  } catch (n) {
                    this.Ia(217, n);
                  }
                  if (b) {
                    var g, h;
                    (g = window.console) == null || (h = g.error) == null || h.call(g, k);
                  } else
                    throw k;
                }
                return e;
              };
              l.Sc = function(a2, b, c, d) {
                var e = this;
                return function(f) {
                  for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h - 0] = arguments[h];
                  return e.fb(a2, function() {
                    return b.apply(c, g);
                  }, d);
                };
              };
              l.Ia = function(a2, b, c, d, e) {
                e = e || this.B;
                try {
                  var f = new Pk();
                  Uk(f, 1, "context", a2);
                  Yg(b) || (b = new Xg(b, {
                    message: al(b)
                  }));
                  b.msg && Uk(f, 2, "msg", b.msg.substring(0, 512));
                  var g = b.meta || {};
                  if (this.h)
                    try {
                      this.h(g);
                    } catch (k) {
                    }
                  if (d)
                    try {
                      d(g);
                    } catch (k) {
                    }
                  Tk(f, 3, [g]);
                  var h = Ok();
                  h.h && Uk(f, 4, "top", h.h.url || "");
                  Tk(f, 5, [{
                    url: h.g.url || ""
                  }, {
                    url: h.g.url ? Hf(h.g.url) : ""
                  }]);
                  Xk(this.A, e, f, this.o, c);
                } catch (k) {
                  try {
                    Xk(this.A, e, {
                      context: "ecmserr",
                      rctx: a2,
                      msg: al(k),
                      url: h && h.g.url
                    }, this.o, c);
                  } catch (n) {
                  }
                }
                return this.l;
              };
              var al = function(a2) {
                var b = a2.toString();
                a2.name && b.indexOf(a2.name) == -1 && (b += ": " + a2.name);
                a2.message && b.indexOf(a2.message) == -1 && (b += ": " + a2.message);
                if (a2.stack) {
                  a2 = a2.stack;
                  var c = b;
                  try {
                    a2.indexOf(c) == -1 && (a2 = c + "\n" + a2);
                    for (var d; a2 != d; )
                      d = a2, a2 = a2.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a2.replace(/\n */g, "\n");
                  } catch (e) {
                    b = c;
                  }
                }
                return b;
              };
              var Zk, bl, cl = vg(), Yk = new hh(1, cl);
              Zk = new function() {
                var a2 = a2 === void 0 ? D : a2;
                this.h = a2.location.protocol === "http:" ? "http:" : "https:";
                this.g = Math.random();
              }();
              typeof cl.google_srt !== "number" && (cl.google_srt = Math.random());
              var dl = Zk, el = cl.google_srt;
              0 <= el && 1 >= el && (dl.g = el);
              bl = new $k();
              bl.lc(function() {
              });
              bl.Xc(true);
              cl.document.readyState == "complete" ? cl.google_measure_js_timing || Yk.C() : Yk.l && gf(cl, "load", function() {
                cl.google_measure_js_timing || Yk.C();
              });
              var fl = function() {
                this.blockSize = -1;
              };
              var gl = [0, 2, 1], hl = null;
              document.addEventListener && document.addEventListener("mousedown", function(a2) {
                hl = a2;
              }, true);
              window.mb = function(a2) {
                if (a2) {
                  var b;
                  if (b = window.event || hl) {
                    var c;
                    (c = b.which ? 1 << gl[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                    c && b.altKey && (c |= 16);
                    c && b.ctrlKey && (c |= 32);
                    b = c;
                  } else
                    b = null;
                  if (c = b) {
                    if (window.css)
                      window.css(a2.id, "mb", c, void 0, void 0);
                    else if (a2) {
                      b = a2.href;
                      var d = b.indexOf("&mb=");
                      if (0 > d)
                        c = b + "&mb=" + c;
                      else {
                        d += 4;
                        var e = b.indexOf("&", d);
                        c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c;
                      }
                      a2.href = 2e3 < c.length ? b : c;
                    }
                  }
                }
              };
              var il = function(a2) {
                var b = {};
                z(a2, function(c) {
                  var d = c.g, e = b[d];
                  b.hasOwnProperty(d) ? e !== null && (c.h(e) || (b[d] = null)) : b[d] = c;
                });
                zb(a2, function(c) {
                  return b[c.g] === null;
                });
              };
              var jl = {
                NONE: 0,
                Tf: 1
              }, kl = {
                Sf: 0,
                Wg: 1,
                Vg: 2,
                Xg: 3
              };
              var ll = function() {
                this.Z = 0;
                this.g = false;
                this.h = -1;
                this.Za = false;
                this.oa = 0;
              };
              ll.prototype.isVisible = function() {
                return this.Za ? 0.3 <= this.Z : 0.5 <= this.Z;
              };
              var ml = {
                Rf: 0,
                Xf: 1
              }, nl = {
                668123728: 0,
                668123729: 1
              }, ol = {
                44731964: 0,
                44731965: 1
              }, pl = {
                NONE: 0,
                xg: 1,
                ag: 2
              }, ql = {
                480596784: 0,
                480596785: 1,
                21063355: 2
              };
              var rl = function() {
                this.g = null;
                this.o = false;
                this.l = null;
              }, sl = function(a2) {
                a2.o = true;
                return a2;
              }, tl = function(a2, b) {
                a2.l && z(b, function(c) {
                  c = a2.l[c];
                  c !== void 0 && a2.h(c);
                });
              }, ul = function(a2) {
                rl.call(this);
                this.B = a2;
              };
              t(ul, rl);
              ul.prototype.h = function(a2) {
                this.g === null && Qb(this.B, a2) && (this.g = a2);
              };
              var vl = function() {
                rl.call(this);
              };
              t(vl, rl);
              vl.prototype.h = function(a2) {
                this.g === null && typeof a2 === "number" && (this.g = a2);
              };
              var wl = function() {
                rl.call(this);
              };
              t(wl, rl);
              wl.prototype.h = function(a2) {
                this.g === null && typeof a2 === "string" && (this.g = a2);
              };
              var xl = function() {
                this.g = {};
                this.l = true;
                this.h = {};
              };
              xl.prototype.enable = function() {
                this.l = true;
              };
              xl.prototype.reset = function() {
                this.g = {};
                this.l = true;
                this.h = {};
              };
              var yl = function(a2, b, c) {
                a2.g[b] || (a2.g[b] = new ul(c));
                return a2.g[b];
              }, zl = function(a2) {
                a2.g.queryid || (a2.g.queryid = new wl());
              }, Al = function(a2, b, c) {
                (a2 = a2.g[b]) && a2.h(c);
              }, Bl = function(a2, b) {
                if (Pb(a2.h, b))
                  return a2.h[b];
                if (a2 = a2.g[b])
                  return a2.g;
              }, Cl = function(a2) {
                var b = {}, c = Hb(a2.g, function(d) {
                  return d.o;
                });
                Gb(c, function(d, e) {
                  d = a2.h[e] !== void 0 ? String(a2.h[e]) : d.o && d.g !== null ? String(d.g) : "";
                  0 < d.length && (b[e] = d);
                }, a2);
                return b;
              }, Dl = function(a2) {
                a2 = Cl(a2);
                var b = [];
                Gb(a2, function(c, d) {
                  d in Object.prototype || typeof c != "undefined" && b.push([
                    d,
                    ":",
                    c
                  ].join(""));
                });
                return b;
              }, El = function() {
                var a2 = N().U, b = bi();
                a2.l && z(Mb(a2.g), function(c) {
                  return tl(c, b);
                });
              };
              var Fl = !vd && !Kc();
              var Gl = function() {
                this.g = this.Sa = null;
              };
              var Hl = function() {
              };
              Hl.prototype.now = function() {
                return 0;
              };
              Hl.prototype.h = function() {
                return 0;
              };
              Hl.prototype.l = function() {
                return 0;
              };
              Hl.prototype.g = function() {
                return 0;
              };
              var Jl = function() {
                if (!Il())
                  throw Error();
              };
              t(Jl, Hl);
              var Il = function() {
                return !(!D || !D.performance);
              };
              Jl.prototype.now = function() {
                return Il() && D.performance.now ? D.performance.now() : Hl.prototype.now.call(this);
              };
              Jl.prototype.h = function() {
                return Il() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : Hl.prototype.h.call(this);
              };
              Jl.prototype.l = function() {
                return Il() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : Hl.prototype.l.call(this);
              };
              Jl.prototype.g = function() {
                return Il() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : Hl.prototype.g.call(this);
              };
              var Kl = function() {
              };
              Kl.prototype.isVisible = function() {
                return lh(Re) === 1;
              };
              var Ll = function(a2, b) {
                this.g = a2;
                this.depth = b;
              }, Nl = function(a2) {
                a2 = a2 || Lk();
                var b = Math.max(a2.length - 1, 0), c = Ok(a2);
                a2 = c.g;
                var d = c.h, e = c.l, f = [];
                c = function(h, k) {
                  return h == null ? k : h;
                };
                e && f.push(new Ll([e.url, e.Jc ? 2 : 0], c(e.depth, 1)));
                d && d != e && f.push(new Ll([d.url, 2], 0));
                a2.url && a2 != e && f.push(new Ll([a2.url, 0], c(a2.depth, b)));
                var g = qb(f, function(h, k) {
                  return f.slice(0, f.length - k);
                });
                !a2.url || (e || d) && a2 != e || (d = Rf(a2.url)) && g.push([new Ll([d, 1], c(a2.depth, b))]);
                g.push([]);
                return qb(g, function(h) {
                  return Ml(b, h);
                });
              };
              function Ml(a2, b) {
                var c = rb(b, function(e, f) {
                  return Math.max(e, f.depth);
                }, -1), d = Fb(c + 2);
                d[0] = a2;
                z(b, function(e) {
                  return d[e.depth + 1] = e.g;
                });
                return d;
              }
              var Ol = function() {
                var a2 = Nl();
                return qb(a2, function(b) {
                  return Rk(b);
                });
              };
              var Pl = function() {
                this.h = new Kl();
                this.g = Il() ? new Jl() : new Hl();
              }, Rl = function() {
                Ql();
                var a2 = D.document;
                return !!(a2 && a2.body && a2.body.getBoundingClientRect && typeof D.setInterval === "function" && typeof D.clearInterval === "function" && typeof D.setTimeout === "function" && typeof D.clearTimeout === "function");
              };
              Pl.prototype.setTimeout = function(a2, b) {
                return D.setTimeout(a2, b);
              };
              Pl.prototype.clearTimeout = function(a2) {
                D.clearTimeout(a2);
              };
              var Sl = function(a2) {
                Ql();
                var b = vg() || D;
                dg(b, a2);
              }, Tl = function() {
                Ql();
                return Ol();
              };
              var Ul = function() {
              };
              Ul.prototype.getContext = function() {
                if (!this.g) {
                  if (!D)
                    throw Error("Context has not been set and window is undefined.");
                  this.g = H(Pl);
                }
                return this.g;
              };
              var Ql = function() {
                return H(Ul).getContext();
              };
              var Vl = function(a2) {
                B.call(this, a2);
              };
              t(Vl, B);
              var Wl = function(a2) {
                this.l = a2;
                this.g = -1;
                this.h = this.o = 0;
              }, Xl = function(a2, b) {
                return function(c) {
                  for (var d = [], e = 0; e < arguments.length; ++e)
                    d[e - 0] = arguments[e];
                  if (-1 < a2.g)
                    return b.apply(null, ha(d));
                  try {
                    return a2.g = a2.l.g.now(), b.apply(null, ha(d));
                  } finally {
                    a2.o += a2.l.g.now() - a2.g, a2.g = -1, a2.h += 1;
                  }
                };
              };
              var Yl = function(a2, b) {
                this.h = a2;
                this.l = b;
                this.g = new Wl(a2);
              };
              var Zl = function() {
              };
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
                this.U = new xl();
                sl(yl(this.U, "mv", pl)).l = ql === void 0 ? null : ql;
                yl(this.U, "omid", ml);
                sl(yl(this.U, "epoh", ml));
                sl(yl(this.U, "epph", ml));
                sl(yl(this.U, "umt", ml)).l = nl === void 0 ? null : nl;
                sl(yl(this.U, "phel", ml));
                sl(yl(this.U, "phell", ml));
                sl(yl(this.U, "oseid", $l));
                var a2 = this.U;
                a2.g.sloi || (a2.g.sloi = new vl());
                sl(a2.g.sloi);
                sl(yl(this.U, "ovms", kl));
                sl(yl(this.U, "xdi", ml));
                sl(yl(this.U, "amp", ml));
                sl(yl(this.U, "prf", ml));
                sl(yl(this.U, "gtx", ml));
                sl(yl(this.U, "mvp_lv", ml));
                sl(yl(this.U, "ssmol", ml)).l = ol === void 0 ? null : ol;
                this.g = new Yl(Ql(), this.U);
                this.B = this.l = false;
                this.flags = new Zl();
              };
              am.prototype.Rc = function(a2) {
                if (typeof a2 === "string" && a2.length != 0) {
                  var b = this.U;
                  if (b.l) {
                    a2 = a2.split("&");
                    for (var c = a2.length - 1; 0 <= c; c--) {
                      var d = a2[c].split("="), e = d[0];
                      d = 1 < d.length ? parseInt(d[1], 10) : 1;
                      isNaN(d) || (e = b.g[e]) && e.h(d);
                    }
                  }
                }
              };
              var N = function() {
                return H(am);
              };
              var bm = function() {
                var a2 = "https:";
                D && D.location && D.location.protocol === "http:" && (a2 = "http:");
                this.h = a2;
                this.g = 0.01;
                this.l = Math.random();
              }, cm = function(a2, b, c, d, e) {
                if ((d ? a2.l : Math.random()) < (e || a2.g))
                  try {
                    if (c instanceof Pk)
                      var f = c;
                    else
                      f = new Pk(), Pf(c, function(h, k) {
                        var n = f, m = n.o++;
                        Tk(n, m, Qk(k, h));
                      });
                    var g = Wk(f, a2.h, "/pagead/gen_204?id=" + b + "&");
                    g && Sl(g);
                  } catch (h) {
                  }
              };
              var fm = function() {
                var a2 = dm;
                this.A = em;
                this.B = "jserror";
                this.l = true;
                this.h = null;
                this.C = this.Ia;
                this.g = a2 === void 0 ? null : a2;
                this.o = false;
              };
              l = fm.prototype;
              l.lc = function(a2) {
                this.h = a2;
              };
              l.Vc = function(a2) {
                this.B = a2;
              };
              l.Wc = function(a2) {
                this.l = a2;
              };
              l.Xc = function(a2) {
                this.o = a2;
              };
              l.fb = function(a2, b, c) {
                var d = this;
                return Xl(N().g.g, function() {
                  try {
                    if (d.g && d.g.l) {
                      var e = d.g.start(a2.toString(), 3);
                      var f = b();
                      d.g.end(e);
                    } else
                      f = b();
                  } catch (k) {
                    var g = d.l;
                    try {
                      ih(e);
                      var h = new gm(hm(k));
                      g = d.C(a2, h, void 0, c);
                    } catch (n) {
                      d.Ia(217, n);
                    }
                    if (!g)
                      throw k;
                  }
                  return f;
                })();
              };
              l.Sc = function(a2, b, c, d) {
                var e = this;
                return Xl(N().g.g, function(f) {
                  for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h - 0] = arguments[h];
                  return e.fb(a2, function() {
                    return b.apply(c, g);
                  }, d);
                });
              };
              l.Ia = function(a2, b, c, d, e) {
                e = e || this.B;
                try {
                  var f = new Pk();
                  Uk(f, 1, "context", a2);
                  Yg(b) || (b = new gm(hm(b)));
                  b.msg && Uk(f, 2, "msg", b.msg.substring(0, 512));
                  var g = b.meta || {};
                  if (this.h)
                    try {
                      this.h(g);
                    } catch (k) {
                    }
                  if (d)
                    try {
                      d(g);
                    } catch (k) {
                    }
                  Tk(f, 3, [g]);
                  var h = Ok();
                  h.h && Uk(f, 4, "top", h.h.url || "");
                  Tk(f, 5, [{
                    url: h.g.url || ""
                  }, {
                    url: h.g.url ? Hf(h.g.url) : ""
                  }]);
                  cm(this.A, e, f, this.o, c);
                } catch (k) {
                  try {
                    cm(this.A, e, {
                      context: "ecmserr",
                      rctx: a2,
                      msg: hm(k),
                      url: h && h.g.url
                    }, this.o, c);
                  } catch (n) {
                  }
                }
                return this.l;
              };
              var hm = function(a2) {
                var b = a2.toString();
                a2.name && b.indexOf(a2.name) == -1 && (b += ": " + a2.name);
                a2.message && b.indexOf(a2.message) == -1 && (b += ": " + a2.message);
                if (a2.stack) {
                  a2 = a2.stack;
                  var c = b;
                  try {
                    a2.indexOf(c) == -1 && (a2 = c + "\n" + a2);
                    for (var d; a2 != d; )
                      d = a2, a2 = a2.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a2.replace(/\n */g, "\n");
                  } catch (e) {
                    b = c;
                  }
                }
                return b;
              }, gm = function(a2) {
                Xg.call(this, Error(a2), {
                  message: a2
                });
              };
              t(gm, Xg);
              var em, im, dm = new hh(1, vg()), jm = function() {
                var a2 = vg();
                a2 && typeof a2.google_measure_js_timing != "undefined" && (a2.google_measure_js_timing || dm.C());
              };
              (function() {
                em = new bm();
                im = new fm();
                var a2 = vg();
                a2 && a2.document && (a2.document.readyState == "complete" ? jm() : dm.l && gf(a2, "load", function() {
                  jm();
                }));
              })();
              var km = function(a2) {
                im.lc(function(b) {
                  z(a2, function(c) {
                    c(b);
                  });
                });
              }, lm = function(a2, b) {
                return im.fb(a2, b, void 0);
              }, mm = function(a2, b, c, d) {
                return im.Sc(a2, b, c, d);
              }, nm = function(a2, b, c, d) {
                im.Ia(a2, b, c, d);
              };
              var om = Date.now(), pm = -1, qm = -1, rm, sm = -1, tm = false, um = function() {
                return Date.now() - om;
              }, vm = function() {
                var a2 = N().o, b = 0 <= qm ? um() - qm : -1, c = tm ? um() - pm : -1, d = 0 <= sm ? um() - sm : -1;
                if (a2 == 947190542)
                  return 100;
                if (a2 == 79463069)
                  return 200;
                a2 = [2e3, 4e3];
                var e = [250, 500, 1e3];
                nm(637, Error(), 1e-3);
                var f = b;
                c != -1 && c < b && (f = c);
                for (b = 0; b < a2.length; ++b)
                  if (f < a2[b]) {
                    var g = e[b];
                    break;
                  }
                g === void 0 && (g = e[a2.length]);
                return d != -1 && 1500 < d && 4e3 > d ? 500 : g;
              };
              var wm = function(a2, b, c) {
                var d = new F(0, 0, 0, 0);
                this.time = a2;
                this.volume = null;
                this.l = b;
                this.g = d;
                this.h = c;
              };
              var xm = function(a2, b, c, d, e, f, g) {
                this.l = a2;
                this.h = b;
                this.B = c;
                this.g = d;
                this.o = e;
                this.C = f;
                this.A = g;
              };
              xm.prototype.getTimestamp = function() {
                return this.C;
              };
              var ym = {
                currentTime: 1,
                duration: 2,
                isVpaid: 4,
                volume: 8,
                isYouTube: 16,
                isPlaying: 32
              }, Sb = {
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
              }, zm = "start firstquartile midpoint thirdquartile resume loaded".split(" "), Am = ["start", "firstquartile", "midpoint", "thirdquartile"], Bm = ["abandon"], Cm = {
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
              }, Dm = function(a2) {
                var b = a2 !== a2.top, c = a2.top === Pg(a2).ka, d = -1, e = 0;
                if (b && c && a2.top.mraid) {
                  d = 3;
                  var f = a2.top.mraid;
                } else
                  d = (f = a2.mraid) ? b ? c ? 2 : 1 : 0 : -1;
                f && (f.IS_GMA_SDK || (e = 2), Kb(function(g) {
                  return typeof f[g] === "function";
                }) || (e = 1));
                return {
                  za: f,
                  Tb: e,
                  sf: d
                };
              };
              var Em = function(a2) {
                return (a2 = a2.document) && typeof a2.elementFromPoint === "function";
              };
              if (Re && Re.URL) {
                var Fm, Tf = Re.URL;
                Fm = !!Tf && 0 < Uf().length;
                im.Wc(!Fm);
              }
              var Gm = function(a2, b, c, d) {
                var e = e === void 0 ? false : e;
                c = mm(d, c);
                gf(a2, b, c, {
                  capture: e
                });
              };
              var Hm = function(a2, b, c) {
                try {
                  a2 && (b = b.top);
                  var d = void 0;
                  var e = b;
                  c = c === void 0 ? false : c;
                  a2 && e !== null && e != e.top && (e = e.top);
                  try {
                    d = (c === void 0 ? 0 : c) ? new mf(e.innerWidth, e.innerHeight).round() : uf(e || window).round();
                  } catch (k) {
                    d = new mf(-12245933, -12245933);
                  }
                  a2 = d;
                  var f = vf(pf(b.document).g);
                  if (a2.width == -12245933) {
                    var g = a2.width;
                    var h = new F(g, g, g, g);
                  } else
                    h = new F(f.y, f.x + a2.width, f.y + a2.height, f.x);
                  return h;
                } catch (k) {
                  return new F(-12245933, -12245933, -12245933, -12245933);
                }
              };
              var Im = function(a2, b) {
                b = Math.pow(10, b);
                return Math.floor(a2 * b) / b;
              };
              function Jm(a2, b, c, d) {
                if (!a2)
                  return {
                    value: d,
                    done: false
                  };
                d = b(d, a2);
                var e = c(d, a2);
                return !e && rd(a2, "parentElement") ? Jm(Af(a2), b, c, d) : {
                  done: e,
                  value: d
                };
              }
              var Km = function(a2, b, c, d) {
                if (!a2)
                  return d;
                d = Jm(a2, b, c, d);
                if (!d.done)
                  try {
                    var e = of(a2), f = e && E(e);
                    return Km(f && f.frameElement, b, c, d.value);
                  } catch (g) {
                  }
                return d.value;
              };
              function Lm(a2) {
                var b = !vd || Md(8);
                return Km(a2, function(c, d) {
                  c = rd(d, "style") && d.style && mg(d, "visibility");
                  return {
                    hidden: c === "hidden",
                    visible: b && c === "visible"
                  };
                }, function(c) {
                  return c.hidden || c.visible;
                }, {
                  hidden: false,
                  visible: false
                }).hidden;
              }
              var Mm = function(a2) {
                return Km(a2, function(b, c) {
                  return !(!rd(c, "style") || !c.style || mg(c, "display") !== "none");
                }, function(b) {
                  return b;
                }, false) ? true : Lm(a2);
              }, Nm = function(a2) {
                return new F(a2.top, a2.right, a2.bottom, a2.left);
              }, Om = function(a2) {
                var b = a2.top || 0, c = a2.left || 0;
                return new F(b, c + (a2.width || 0), b + (a2.height || 0), c);
              }, Pm = function(a2) {
                return a2 != null && 0 <= a2 && 1 >= a2;
              };
              function Qm() {
                var a2 = Fc;
                return a2 ? sb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
                  return sc(a2, b);
                }) || sc(a2, "OMI/") && !sc(a2, "XiaoMi/") ? true : sc(a2, "Presto") && sc(a2, "Linux") && !sc(a2, "X11") && !sc(a2, "Android") && !sc(a2, "Mobi") : false;
              }
              function Rm() {
                var a2 = Fc;
                return sc(a2, "AppleTV") || sc(a2, "Apple TV") || sc(a2, "CFNetwork") || sc(a2, "tvOS");
              }
              function Sm() {
                var a2;
                (a2 = sc(Fc, "CrKey") || sc(Fc, "PlayStation") || sc(Fc, "Roku") || Qm() || sc(Fc, "Xbox") || Rm()) || (a2 = Fc, a2 = sc(a2, "sdk_google_atv_x86") || sc(a2, "Android TV"));
                return a2;
              }
              ;
              var Um = function() {
                this.L = false;
                this.l = !Lf(D.top);
                this.C = Ef() || Ff();
                var a2 = Lk();
                a2 = 0 < a2.length && a2[a2.length - 1] != null && a2[a2.length - 1].url != null ? ((a2 = a2[a2.length - 1].url.match(Gf)[3] || null) ? decodeURI(a2) : a2) || "" : "";
                this.domain = a2;
                this.g = new F(0, 0, 0, 0);
                this.B = new mf(0, 0);
                this.o = new mf(0, 0);
                this.I = new F(0, 0, 0, 0);
                this.A = 0;
                this.D = false;
                this.h = !(!D || !Dm(D).za);
                Tm(this);
              }, Vm = function(a2, b) {
                b && b.screen && (a2.B = new mf(b.screen.width, b.screen.height));
              }, Wm = function(a2, b) {
                var c = a2.g ? new mf(a2.g.getWidth(), a2.g.getHeight()) : new mf(0, 0);
                b = b === void 0 ? D : b;
                b !== null && b != b.top && (b = b.top);
                var d = 0, e = 0;
                try {
                  var f = b.document, g = f.body, h = f.documentElement;
                  if (f.compatMode == "CSS1Compat" && h.scrollHeight)
                    d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                  else {
                    var k = h.scrollHeight, n = h.scrollWidth, m = h.offsetHeight, v = h.offsetWidth;
                    h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, v = g.offsetWidth);
                    k > c.height ? k > m ? (d = k, e = n) : (d = m, e = v) : k < m ? (d = k, e = n) : (d = m, e = v);
                  }
                  var r = new mf(e, d);
                } catch (w) {
                  r = new mf(-12245933, -12245933);
                }
                a2.o = r;
              }, Tm = function(a2) {
                D && D.document && (a2.I = Hm(false, D, a2.C), a2.g = Hm(true, D, a2.C), Wm(a2, D), Vm(a2, D));
              }, Xm = function() {
                var a2 = O();
                if (0 < a2.A || a2.D)
                  return true;
                a2 = Ql().h.isVisible();
                var b = lh(Re) === 0;
                return a2 || b;
              }, O = function() {
                return H(Um);
              };
              var Ym = function(a2) {
                this.l = a2;
                this.h = 0;
                this.g = null;
              };
              Ym.prototype.cancel = function() {
                Ql().clearTimeout(this.g);
                this.g = null;
              };
              var Zm = function(a2) {
                var b = Ql();
                a2.g = b.setTimeout(Xl(N().g.g, mm(143, function() {
                  a2.h++;
                  a2.l.sample();
                })), vm());
              };
              var $m = function(a2, b, c) {
                this.ka = a2;
                this.da = c === void 0 ? "na" : c;
                this.B = [];
                this.G = false;
                this.l = new wm(-1, true, this);
                this.g = this;
                this.I = b;
                this.H = this.L = false;
                this.V = "uk";
                this.M = false;
                this.o = true;
              };
              $m.prototype.D = function() {
                return false;
              };
              $m.prototype.initialize = function() {
                return this.G = true;
              };
              $m.prototype.pb = function() {
                return this.g.V;
              };
              $m.prototype.Db = function() {
                return this.g.H;
              };
              var bn = function(a2, b, c) {
                if (!a2.H || (c === void 0 ? 0 : c))
                  a2.H = true, a2.V = b, a2.I = 0, a2.g != a2 || an(a2);
              };
              $m.prototype.getName = function() {
                return this.g.da;
              };
              $m.prototype.Na = function() {
                return this.g.X();
              };
              $m.prototype.X = function() {
                return {};
              };
              $m.prototype.Ha = function() {
                return this.g.I;
              };
              var cn = function(a2, b) {
                wb(a2.B, b) || (a2.B.push(b), b.rb(a2.g), b.Pa(a2.l), b.Da() && (a2.L = true));
              };
              $m.prototype.R = function() {
                var a2 = O();
                a2.g = Hm(true, this.ka, a2.C);
              };
              $m.prototype.T = function() {
                Vm(O(), this.ka);
              };
              $m.prototype.Y = function() {
                return this.l.g;
              };
              var dn = function(a2) {
                a2 = a2.g;
                a2.T();
                a2.R();
                var b = O();
                b.I = Hm(false, a2.ka, b.C);
                Wm(O(), a2.ka);
                a2.l.g = a2.Y();
              };
              $m.prototype.sample = function() {
              };
              var en = function(a2, b) {
                a2.g != a2 ? en(a2.g, b) : a2.o !== b && (a2.o = b, an(a2));
              };
              $m.prototype.Ic = function() {
                return this.g.o;
              };
              var fn = function(a2) {
                a2.L = a2.B.length ? sb(a2.B, function(b) {
                  return b.Da();
                }) : false;
              }, gn = function(a2) {
                var b = Bb(a2.B);
                z(b, function(c) {
                  c.Pa(a2.l);
                });
              }, an = function(a2) {
                var b = Bb(a2.B);
                z(b, function(c) {
                  c.rb(a2.g);
                });
                a2.g != a2 || gn(a2);
              };
              l = $m.prototype;
              l.rb = function(a2) {
                var b = this.g;
                this.g = a2.Ha() >= this.I ? a2 : this;
                b !== this.g ? (this.o = this.g.o, an(this)) : this.o !== this.g.o && (this.o = this.g.o, an(this));
              };
              l.Pa = function(a2) {
                if (a2.h === this.g) {
                  var b = this.l, c = this.L;
                  if (c = a2 && (c === void 0 || !c || b.volume == a2.volume) && b.l == a2.l)
                    b = b.g, c = a2.g, c = b == c ? true : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : false;
                  this.l = a2;
                  !c && gn(this);
                }
              };
              l.Da = function() {
                return this.L;
              };
              l.W = function() {
                this.M = true;
              };
              l.Ra = function() {
                return this.M;
              };
              var hn = function(a2, b, c, d) {
                this.l = a2;
                this.g = new F(0, 0, 0, 0);
                this.A = new F(0, 0, 0, 0);
                this.h = b;
                this.U = c;
                this.H = d;
                this.G = false;
                this.timestamp = -1;
                this.I = new xm(b.l, this.g, new F(0, 0, 0, 0), 0, 0, um(), 0);
              };
              l = hn.prototype;
              l.tc = function() {
                return true;
              };
              l.Kb = function() {
              };
              l.W = function() {
                if (!this.Ra()) {
                  var a2 = this.h;
                  xb(a2.B, this);
                  a2.L && this.Da() && fn(a2);
                  this.Kb();
                  this.G = true;
                }
              };
              l.Ra = function() {
                return this.G;
              };
              l.Na = function() {
                return this.h.Na();
              };
              l.Ha = function() {
                return this.h.Ha();
              };
              l.pb = function() {
                return this.h.pb();
              };
              l.Db = function() {
                return this.h.Db();
              };
              l.rb = function() {
              };
              l.Pa = function() {
                this.Ma();
              };
              l.Da = function() {
                return this.H;
              };
              var jn = function(a2) {
                this.B = false;
                this.g = a2;
                this.o = La;
              };
              l = jn.prototype;
              l.Ha = function() {
                return this.g.Ha();
              };
              l.pb = function() {
                return this.g.pb();
              };
              l.Db = function() {
                return this.g.Db();
              };
              l.create = function(a2, b, c) {
                var d = null;
                this.g && (d = this.Lb(a2, b, c), cn(this.g, d));
                return d;
              };
              l.hd = function() {
                return this.yb();
              };
              l.yb = function() {
                return false;
              };
              l.init = function(a2) {
                return this.g.initialize() ? (cn(this.g, this), this.o = a2, true) : false;
              };
              l.rb = function(a2) {
                a2.Ha() == 0 && this.o(a2.pb(), this);
              };
              l.Pa = function() {
              };
              l.Da = function() {
                return false;
              };
              l.W = function() {
                this.B = true;
              };
              l.Ra = function() {
                return this.B;
              };
              l.Na = function() {
                return {};
              };
              var kn = function(a2, b, c) {
                this.l = c === void 0 ? 0 : c;
                this.h = a2;
                this.g = b == null ? "" : b;
              }, ln = function(a2) {
                switch (Math.trunc(a2.l)) {
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
                    return 16;
                }
              }, mn = function(a2, b) {
                return a2.l < b.l ? true : a2.l > b.l ? false : a2.h < b.h ? true : a2.h > b.h ? false : typeof a2.g < typeof b.g ? true : typeof a2.g > typeof b.g ? false : a2.g < b.g;
              };
              var nn = function() {
                this.l = 0;
                this.g = [];
                this.h = false;
              };
              nn.prototype.add = function(a2, b, c) {
                ++this.l;
                a2 = new kn(a2, b, c);
                this.g.push(new kn(a2.h, a2.g, a2.l + this.l / 4096));
                this.h = true;
                return this;
              };
              var on = function(a2, b) {
                z(b.g, function(c) {
                  a2.add(c.h, c.g, ln(c));
                });
              }, pn = function(a2, b) {
                var c = c === void 0 ? 0 : c;
                var d = d === void 0 ? true : d;
                Pf(b, function(e, f) {
                  d && e === void 0 || a2.add(f, e, c);
                });
                return a2;
              }, rn = function(a2) {
                var b = qn;
                a2.h && (Db(a2.g, function(c, d) {
                  return mn(d, c) ? 1 : mn(c, d) ? -1 : 0;
                }), a2.h = false);
                return rb(a2.g, function(c, d) {
                  d = b(d);
                  return "" + c + (c != "" && d != "" ? "&" : "") + d;
                }, "");
              };
              var qn = function(a2) {
                var b = a2.h;
                a2 = a2.g;
                return a2 === "" ? b : typeof a2 === "boolean" ? a2 ? b : "" : Array.isArray(a2) ? a2.length === 0 ? b : b + "=" + a2.join() : b + "=" + (wb(["mtos", "tos", "p"], b) ? a2 : encodeURIComponent(a2));
              };
              var sn = function(a2) {
                var b = b === void 0 ? true : b;
                this.g = new nn();
                a2 !== void 0 && on(this.g, a2);
                b && this.g.add("v", Jk, -16);
              };
              sn.prototype.toString = function() {
                var a2 = "//pagead2.googlesyndication.com//pagead/gen_204", b = rn(this.g);
                0 < b.length && (a2 += "?" + b);
                return a2;
              };
              var tn = function(a2) {
                var b = [], c = [];
                Gb(a2, function(d, e) {
                  if (!(e in Object.prototype) && typeof d != "undefined")
                    switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
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
                        b.push(d);
                    }
                });
                return b.concat(c);
              }, un = function() {
                if (Jk && Jk !== "unreleased")
                  return Jk;
              }, vn = function(a2) {
                var b = b === void 0 ? 4e3 : b;
                a2 = a2.toString();
                if (!/&v=[^&]+/.test(a2)) {
                  var c = un();
                  a2 = c ? a2 + "&v=" + encodeURIComponent(c) : a2;
                }
                a2 = a2.substring(0, b);
                Sl(a2);
              };
              var wn = function() {
                this.g = 0;
              };
              var xn = function(a2, b, c) {
                z(a2.l, function(d) {
                  var e = a2.g;
                  if (!d.g && (d.l(b, c), d.o())) {
                    d.g = true;
                    var f = d.h(), g = new nn();
                    g.add("id", "av-js");
                    g.add("type", "verif");
                    g.add("vtype", d.B);
                    d = H(wn);
                    g.add("i", d.g++);
                    g.add("adk", e);
                    pn(g, f);
                    e = new sn(g);
                    vn(e);
                  }
                });
              };
              var yn = function() {
                this.h = this.l = this.o = this.g = 0;
              }, zn = function(a2, b, c, d) {
                b && (a2.g += c, a2.h += c, a2.o += c, a2.l = Math.max(a2.l, a2.o));
                if (d === void 0 ? !b : d)
                  a2.o = 0;
              };
              var An = [1, 0.75, 0.5, 0.3, 0], Bn = function(a2) {
                this.h = a2 = a2 === void 0 ? An : a2;
                this.g = qb(this.h, function() {
                  return new yn();
                });
              }, Dn = function(a2, b) {
                return Cn(a2, function(c) {
                  return c.g;
                }, b === void 0 ? true : b);
              }, Fn = function(a2, b) {
                return En(a2, b, function(c) {
                  return c.g;
                });
              }, Gn = function(a2, b) {
                return Cn(a2, function(c) {
                  return c.l;
                }, b === void 0 ? true : b);
              }, Hn = function(a2, b) {
                return En(a2, b, function(c) {
                  return c.l;
                });
              }, In = function(a2, b) {
                return En(a2, b, function(c) {
                  return c.h;
                });
              }, Jn = function(a2) {
                z(a2.g, function(b) {
                  b.h = 0;
                });
              }, Kn = function(a2, b, c, d, e, f, g) {
                g = g === void 0 ? true : g;
                c = f ? Math.min(b, c) : c;
                for (f = 0; f < a2.h.length; f++) {
                  var h = a2.h[f], k = 0 < c && c >= h;
                  h = !(0 < b && b >= h) || d;
                  zn(a2.g[f], g && k, e, !g || h);
                }
              }, Cn = function(a2, b, c) {
                a2 = qb(a2.g, function(d) {
                  return b(d);
                });
                return c ? a2 : Ln(a2);
              }, En = function(a2, b, c) {
                var d = vb(a2.h, function(e) {
                  return b <= e;
                });
                return d == -1 ? 0 : c(a2.g[d]);
              }, Ln = function(a2) {
                return qb(a2, function(b, c, d) {
                  return 0 < c ? d[c] - d[c - 1] : d[c];
                });
              };
              var Mn = function() {
                this.h = new Bn();
                this.V = new yn();
                this.H = this.C = -1;
                this.$ = 1e3;
                this.aa = new Bn([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
                this.M = this.J = -1;
              }, Nn = function(a2, b) {
                return Gn(a2.h, b === void 0 ? true : b);
              };
              Mn.prototype.L = function(a2, b, c, d) {
                this.C = this.C != -1 ? Math.min(this.C, b.Z) : b.Z;
                this.H = Math.max(this.H, b.Z);
                this.J = this.J != -1 ? Math.min(this.J, b.oa) : b.oa;
                this.M = Math.max(this.M, b.oa);
                Kn(this.aa, b.oa, c.oa, b.g, a2, d);
                Kn(this.h, b.Z, c.Z, b.g, a2, d);
                c = d || c.Za != b.Za ? c.isVisible() && b.isVisible() : c.isVisible();
                b = !b.isVisible() || b.g;
                zn(this.V, c, a2, b);
              };
              Mn.prototype.ab = function() {
                return this.V.l >= this.$;
              };
              var On = new F(0, 0, 0, 0);
              function Pn(a2, b) {
                b = Qn(b);
                return b === 0 ? 0 : Qn(a2) / b;
              }
              function Qn(a2) {
                return Math.max(a2.bottom - a2.top, 0) * Math.max(a2.right - a2.left, 0);
              }
              function Rn(a2, b) {
                if (!a2 || !b)
                  return false;
                for (var c = 0; a2 !== null && 100 > c++; ) {
                  if (a2 === b)
                    return true;
                  try {
                    if (a2 = Af(a2) || a2) {
                      var d = of(a2), e = d && E(d), f = e && e.frameElement;
                      f && (a2 = f);
                    }
                  } catch (g) {
                    break;
                  }
                }
                return false;
              }
              function Sn(a2, b, c) {
                if (!a2 || !b)
                  return false;
                b = $f(Zf(a2), -b.left, -b.top);
                a2 = (b.left + b.right) / 2;
                b = (b.top + b.bottom) / 2;
                var d = vg();
                Lf(d.top) && d.top && d.top.document && (d = d.top);
                if (!Em(d))
                  return false;
                a2 = d.document.elementFromPoint(a2, b);
                if (!a2)
                  return false;
                b = (b = (b = of(c)) && b.defaultView && b.defaultView.frameElement) && Rn(b, a2);
                d = a2 === c;
                a2 = !d && a2 && Df(a2, function(e) {
                  return e === c;
                });
                return !(b || d || a2);
              }
              function Tn(a2, b, c, d) {
                return O().l ? false : 0 >= a2.getWidth() || 0 >= a2.getHeight() ? true : c && d ? lm(208, function() {
                  return Sn(a2, b, c);
                }) : false;
              }
              ;
              var Un = new F(0, 0, 0, 0), Vn = function(a2, b, c) {
                L.call(this);
                this.position = Zf(Un);
                this.cc = this.Wb();
                this.Lc = -2;
                this.vf = Date.now();
                this.Rd = -1;
                this.Zb = b;
                this.Yb = null;
                this.Ub = false;
                this.jc = null;
                this.opacity = -1;
                this.qf = c;
                this.Sd = this.Mc = La;
                this.pa = new Gl();
                this.pa.Sa = a2;
                this.pa.g = a2;
                this.$a = false;
                this.Xa = {
                  Oc: null,
                  Nc: null
                };
                this.Pd = true;
                this.Jb = null;
                this.sb = this.Ye = false;
                N().C++;
                this.na = this.Dc();
                this.Qd = -1;
                this.ba = null;
                this.Te = false;
                a2 = this.U = new xl();
                yl(a2, "od", jl);
                sl(yl(a2, "opac", ml));
                sl(yl(a2, "sbeos", ml));
                sl(yl(a2, "prf", ml));
                sl(yl(a2, "mwt", ml));
                yl(a2, "iogeo", ml);
                (a2 = this.pa.Sa) && a2.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Fl && a2.dataset ? "googleAvInapp" in a2.dataset : a2.hasAttribute ? a2.hasAttribute("data-" + cd()) : a2.getAttribute("data-" + cd())) && (O().h = true);
                this.qf == 1 ? Al(this.U, "od", 1) : Al(this.U, "od", 0);
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
                L.prototype.N.call(this);
              };
              l.Ya = function() {
                return this.ba ? this.ba.g : this.position;
              };
              l.Rc = function(a2) {
                N().Rc(a2);
              };
              l.Da = function() {
                return false;
              };
              l.Wb = function() {
                return new Mn();
              };
              l.ra = function() {
                return this.cc;
              };
              var Wn = function(a2, b) {
                b != a2.sb && (a2.sb = b, a2 = O(), b ? a2.A++ : 0 < a2.A && a2.A--);
              }, Xn = function(a2, b) {
                if (a2.ba) {
                  if (b.getName() === a2.ba.getName())
                    return;
                  a2.ba.W();
                  a2.ba = null;
                }
                b = b.create(a2.pa.g, a2.U, a2.Da());
                if (b = b != null && b.tc() ? b : null)
                  a2.ba = b;
              }, Yn = function(a2, b, c) {
                if (!a2.Yb || a2.Zb == -1 || b.getTimestamp() === -1 || a2.Yb.getTimestamp() === -1)
                  return 0;
                a2 = b.getTimestamp() - a2.Yb.getTimestamp();
                return a2 > c ? 0 : a2;
              };
              Vn.prototype.Dd = function(a2) {
                return Yn(this, a2, 1e4);
              };
              var Zn = function(a2, b, c) {
                if (a2.ba) {
                  a2.ba.Ma();
                  var d = a2.ba.I, e = d.l, f = e.g;
                  if (d.B != null) {
                    var g = d.h;
                    a2.jc = new lf(g.left - f.left, g.top - f.top);
                  }
                  f = a2.qc() ? Math.max(d.g, d.o) : d.g;
                  g = {};
                  e.volume !== null && (g.volume = e.volume);
                  e = a2.Dd(d);
                  a2.Yb = d;
                  a2.$c(f, b, c, false, g, e, d.A);
                }
              }, $n = function(a2) {
                if (a2.Ub && a2.Jb) {
                  var b = Bl(a2.U, "od") == 1, c = O().g, d = a2.Jb, e = a2.ba ? a2.ba.getName() : "ns", f = new mf(c.getWidth(), c.getHeight());
                  c = a2.qc();
                  a2 = {
                    tf: e,
                    jc: a2.jc,
                    Af: f,
                    qc: c,
                    Z: a2.na.Z,
                    wf: b
                  };
                  if (b = d.h) {
                    b.Ma();
                    e = b.I;
                    f = e.l.g;
                    var g = null, h = null;
                    e.B != null && f && (g = e.h, g = new lf(g.left - f.left, g.top - f.top), h = new mf(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.o) : e.g;
                    c = {
                      tf: b.getName(),
                      jc: g,
                      Af: h,
                      qc: c,
                      wf: false,
                      Z: e
                    };
                  } else
                    c = null;
                  c && xn(d, a2, c);
                }
              };
              l = Vn.prototype;
              l.$c = function(a2, b, c, d, e, f, g) {
                this.$a || (this.Ub && (a2 = this.wc(a2, c, e, g), d = d && this.na.Z >= (this.Za() ? 0.3 : 0.5), this.bd(f, a2, d), this.Zb = b, 0 < a2.Z && this.Qd === -1 && (this.Qd = b), this.Rd == -1 && this.ab() && (this.Rd = b), this.Lc == -2 && (this.Lc = Qn(this.Ya()) ? a2.Z : -1), this.na = a2), this.Mc(this));
              };
              l.bd = function(a2, b, c) {
                this.ra().L(a2, b, this.na, c);
              };
              l.Dc = function() {
                return new ll();
              };
              l.wc = function(a2, b, c, d) {
                c = this.Dc();
                c.g = b;
                b = Ql().h;
                b = lh(Re) === 0 ? -1 : b.isVisible() ? 0 : 1;
                c.h = b;
                c.Z = this.zc(a2);
                c.Za = this.Za();
                c.oa = d;
                return c;
              };
              l.zc = function(a2) {
                return this.opacity === 0 && Bl(this.U, "opac") === 1 ? 0 : a2;
              };
              l.Za = function() {
                return false;
              };
              l.qc = function() {
                return this.Te || this.Ye;
              };
              l.wa = function() {
                return 0;
              };
              l.ab = function() {
                return this.cc.ab();
              };
              var ao = function(a2, b, c) {
                b && (a2.Mc = b);
                c && (a2.Sd = c);
              };
              var bo = "StopIteration" in u ? u.StopIteration : {
                message: "StopIteration",
                stack: ""
              }, co = function() {
              };
              co.prototype.next = function() {
                return co.prototype.g.call(this);
              };
              co.prototype.g = function() {
                throw bo;
              };
              co.prototype.lb = function() {
                return this;
              };
              var eo = function() {
                this.o = this.g = this.l = this.h = this.B = 0;
              }, fo = function(a2) {
                var b = {};
                b = (b.ptlt = Ya() - a2.B, b);
                var c = a2.h;
                c && (b.pnk = c);
                (c = a2.l) && (b.pnc = c);
                (c = a2.o) && (b.pnmm = c);
                (a2 = a2.g) && (b.pns = a2);
                return b;
              };
              var go = function() {
                ll.call(this);
                this.l = false;
                this.volume = void 0;
                this.paused = false;
                this.mediaTime = -1;
              };
              t(go, ll);
              var ho = function(a2) {
                return Pm(a2.volume) && 0 < a2.volume;
              };
              var io = function() {
                var a2 = {};
                this.h = (a2.vs = [1, 0], a2.vw = [0, 1], a2.am = [2, 2], a2.a = [4, 4], a2.f = [8, 8], a2.bm = [16, 16], a2.b = [32, 32], a2.avw = [0, 64], a2.avs = [64, 0], a2.pv = [256, 256], a2.gdr = [0, 512], a2.p = [0, 1024], a2.r = [0, 2048], a2.m = [0, 4096], a2.um = [0, 8192], a2.ef = [0, 16384], a2.s = [0, 32768], a2.pmx = [0, 16777216], a2);
                this.g = {};
                for (var b in this.h)
                  0 < this.h[b][1] && (this.g[b] = 0);
                this.l = 0;
              }, jo = function(a2, b) {
                var c = a2.h[b], d = c[1];
                a2.l += c[0];
                0 < d && a2.g[b] == 0 && (a2.g[b] = 1);
              }, ko = function(a2) {
                var b = Nb(a2.h), c = 0, d;
                for (d in a2.g)
                  wb(b, d) && a2.g[d] == 1 && (c += a2.h[d][1], a2.g[d] = 2);
                return c;
              }, lo = function(a2) {
                var b = 0, c;
                for (c in a2.g) {
                  var d = a2.g[c];
                  if (d == 1 || d == 2)
                    b += a2.h[c][1];
                }
                return b;
              };
              var mo = function() {
                this.h = this.g = 0;
              }, no = function(a2, b, c) {
                32 <= b || (a2.h & 1 << b && !c ? a2.g &= ~(1 << b) : a2.h & 1 << b || !c || (a2.g |= 1 << b), a2.h |= 1 << b);
              };
              var oo = function() {
                Mn.call(this);
                this.l = new yn();
                this.T = this.D = this.K = 0;
                this.I = -1;
                this.da = new yn();
                this.B = new yn();
                this.g = new Bn();
                this.A = this.o = -1;
                this.G = new yn();
                this.$ = 2e3;
                this.R = new mo();
                this.Y = new mo();
                this.X = new mo();
              };
              t(oo, Mn);
              var po = function(a2, b, c) {
                var d = a2.T;
                tm || c || a2.I == -1 || (d += b - a2.I);
                return d;
              };
              oo.prototype.L = function(a2, b, c, d) {
                if (!b.paused) {
                  Mn.prototype.L.call(this, a2, b, c, d);
                  var e = ho(b) && ho(c), f = 0.5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
                  Pm(b.volume) && (this.o = this.o != -1 ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
                  f && (this.K += a2, this.D += e ? a2 : 0);
                  Kn(this.g, b.Z, c.Z, b.g, a2, d, e);
                  zn(this.l, true, a2);
                  zn(this.B, e, a2);
                  zn(this.G, c.l, a2);
                  zn(this.da, e && !f, a2);
                  a2 = Math.floor(b.mediaTime / 1e3);
                  no(this.R, a2, b.isVisible());
                  no(this.Y, a2, 1 <= b.Z);
                  no(this.X, a2, ho(b));
                }
              };
              var qo = function() {
                this.g = false;
              };
              var ro = function(a2, b) {
                this.g = false;
                this.h = a2;
                this.I = b;
                this.l = 0;
              };
              t(ro, qo);
              var so = function(a2, b) {
                return a2.o(b) ? (b = a2.I.report(a2.h, b), a2.l |= b, b == 0) : false;
              };
              ro.prototype.o = function() {
                return true;
              };
              ro.prototype.B = function() {
                return false;
              };
              ro.prototype.getId = function() {
                var a2 = this, b = Rb(function(c) {
                  return c == a2.h;
                });
                return Cm[b].toString();
              };
              ro.prototype.toString = function() {
                var a2 = "";
                this.B() && (a2 += "c");
                this.g && (a2 += "s");
                0 < this.l && (a2 += ":" + this.l);
                return this.getId() + a2;
              };
              var to = function(a2, b, c, d) {
                hn.call(this, a2, b, c, d);
              };
              t(to, hn);
              l = to.prototype;
              l.xc = function() {
                if (this.l) {
                  var a2 = this.l, b = this.h.g.ka;
                  try {
                    try {
                      var c = Nm(a2.getBoundingClientRect());
                    } catch (n) {
                      c = new F(0, 0, 0, 0);
                    }
                    var d = c.right - c.left, e = c.bottom - c.top, f = pg(a2, b), g = f.x, h = f.y;
                    var k = new F(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g));
                  } catch (n) {
                    k = Zf(On);
                  }
                  this.g = k;
                }
              };
              l.rd = function() {
                this.A = this.h.l.g;
              };
              l.Fd = function(a2) {
                return Tn(a2, this.A, this.l, Bl(this.U, "od") == 1);
              };
              l.sd = function() {
                this.timestamp = um();
              };
              l.Ma = function() {
                this.sd();
                this.xc();
                if (this.l && typeof this.l.videoWidth === "number" && typeof this.l.videoHeight === "number") {
                  var a2 = this.l;
                  var b = new mf(a2.videoWidth, a2.videoHeight);
                  a2 = this.g;
                  var c = a2.getWidth(), d = a2.getHeight(), e = b.width;
                  b = b.height;
                  0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a2 = Zf(a2), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a2.top + d, a2.top = Math.round(d), a2.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a2.left + c, a2.left = Math.round(c), a2.right = Math.round(c + d))));
                  this.g = a2;
                }
                this.rd();
                a2 = this.g;
                c = this.A;
                a2 = a2.left <= c.right && c.left <= a2.right && a2.top <= c.bottom && c.top <= a2.bottom ? new F(Math.max(a2.top, c.top), Math.min(a2.right, c.right), Math.min(a2.bottom, c.bottom), Math.max(a2.left, c.left)) : new F(0, 0, 0, 0);
                c = a2.top >= a2.bottom || a2.left >= a2.right ? new F(0, 0, 0, 0) : a2;
                a2 = this.h.l;
                b = e = d = 0;
                0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Fd(c) ? c = new F(0, 0, 0, 0) : (d = O().B, b = new F(0, d.height, d.width, 0), d = Pn(c, this.g), e = Pn(c, O().g), b = Pn(c, b)));
                c = c.top >= c.bottom || c.left >= c.right ? new F(0, 0, 0, 0) : $f(c, -this.g.left, -this.g.top);
                Xm() || (e = d = 0);
                this.I = new xm(a2, this.g, c, d, e, this.timestamp, b);
              };
              l.getName = function() {
                return this.h.getName();
              };
              var uo = new F(0, 0, 0, 0), vo = function(a2, b, c) {
                hn.call(this, null, a2, b, c);
                this.C = a2.Ic();
                this.B = 0;
              };
              t(vo, to);
              l = vo.prototype;
              l.tc = function() {
                this.o();
                return true;
              };
              l.Pa = function() {
                to.prototype.Ma.call(this);
              };
              l.sd = function() {
              };
              l.xc = function() {
              };
              l.Ma = function() {
                this.o();
                to.prototype.Ma.call(this);
              };
              l.rb = function(a2) {
                a2 = a2.Ic();
                a2 !== this.C && (a2 ? this.o() : (O().g = new F(0, 0, 0, 0), this.g = new F(0, 0, 0, 0), this.A = new F(0, 0, 0, 0), this.timestamp = -1));
                this.C = a2;
              };
              function wo(a2) {
                return [a2.top, a2.left, a2.bottom, a2.right];
              }
              var xo = {}, yo = (xo.firstquartile = 0, xo.midpoint = 1, xo.thirdquartile = 2, xo.complete = 3, xo), zo = function(a2, b, c, d, e, f) {
                e = e === void 0 ? null : e;
                f = f === void 0 ? [] : f;
                Vn.call(this, b, c, d);
                this.Ac = 0;
                this.ga = {};
                this.fa = new io();
                this.Td = {};
                this.ia = "";
                this.Ta = null;
                this.ua = false;
                this.g = [];
                this.bb = e;
                this.A = f;
                this.B = null;
                this.l = -1;
                this.V = this.G = void 0;
                this.J = this.H = 0;
                this.R = -1;
                this.aa = this.$ = false;
                this.M = this.C = this.h = this.vb = this.da = 0;
                new Bn();
                this.T = this.X = 0;
                this.Y = -1;
                this.ea = 0;
                this.D = La;
                this.K = [this.Wb()];
                this.va = 2;
                this.gb = {};
                this.gb.pause = "p";
                this.gb.resume = "r";
                this.gb.skip = "s";
                this.gb.mute = "m";
                this.gb.unmute = "um";
                this.gb.exitfullscreen = "ef";
                this.o = null;
              };
              t(zo, Vn);
              zo.prototype.Da = function() {
                return true;
              };
              var Ao = function(a2) {
                return a2 === void 0 ? a2 : Number(a2) ? Im(a2, 3) : 0;
              };
              l = zo.prototype;
              l.Dd = function(a2) {
                return Yn(this, a2, Math.max(1e4, this.l / 3));
              };
              l.$c = function(a2, b, c, d, e, f, g) {
                var h = this, k = this.D(this) || {};
                Xb(k, e);
                this.l = k.duration || this.l;
                this.G = k.isVpaid || this.G;
                this.V = k.isYouTube || this.V;
                e = Bo(this, b);
                Co(this) === 1 && (f = e);
                Vn.prototype.$c.call(this, a2, b, c, d, k, f, g);
                this.bb && this.bb.g && z(this.A, function(n) {
                  n.g || (n.g = so(n, h));
                });
              };
              l.bd = function(a2, b, c) {
                Vn.prototype.bd.call(this, a2, b, c);
                Do(this).L(a2, b, this.na, c);
                this.aa = ho(this.na) && ho(b);
                this.R == -1 && this.$ && (this.R = this.ra().l.g);
                this.fa.l = 0;
                a2 = this.ab();
                b.isVisible() && jo(this.fa, "vs");
                a2 && jo(this.fa, "vw");
                Pm(b.volume) && jo(this.fa, "am");
                ho(b) && jo(this.fa, "a");
                this.sb && jo(this.fa, "f");
                b.h != -1 && (jo(this.fa, "bm"), b.h == 1 && jo(this.fa, "b"));
                ho(b) && b.isVisible() && jo(this.fa, "avs");
                this.aa && a2 && jo(this.fa, "avw");
                0 < b.Z && jo(this.fa, "pv");
                Eo(this, this.ra().l.g, true) && jo(this.fa, "gdr");
                2e3 <= Hn(this.ra().h, 1) && jo(this.fa, "pmx");
              };
              l.Wb = function() {
                return new oo();
              };
              l.ra = function() {
                return this.cc;
              };
              var Do = function(a2, b) {
                return a2.K[b != null && b < a2.K.length ? b : a2.K.length - 1];
              };
              zo.prototype.Dc = function() {
                return new go();
              };
              zo.prototype.wc = function(a2, b, c, d) {
                a2 = Vn.prototype.wc.call(this, a2, b, c, d === void 0 ? -1 : d);
                a2.l = this.sb;
                a2.paused = this.ea == 2;
                a2.volume = c.volume;
                Pm(a2.volume) || (this.da++, b = this.na, Pm(b.volume) && (a2.volume = b.volume));
                c = c.currentTime;
                a2.mediaTime = c !== void 0 && 0 <= c ? c : -1;
                return a2;
              };
              var Co = function(a2) {
                var b = !!Bl(N().U, "umt");
                return a2.G || !b && !a2.V ? 0 : 1;
              }, Bo = function(a2, b) {
                a2.ea == 2 ? b = 0 : a2.Zb == -1 ? b = 0 : (b -= a2.Zb, b = b > Math.max(1e4, a2.l / 3) ? 0 : b);
                var c = a2.D(a2) || {};
                c = c.currentTime !== void 0 ? c.currentTime : a2.H;
                var d = c - a2.H, e = 0;
                0 <= d ? (a2.J += b, a2.T += Math.max(b - d, 0), e = Math.min(d, a2.J)) : a2.X += Math.abs(d);
                d != 0 && (a2.J = 0);
                a2.Y == -1 && 0 < d && (a2.Y = 0 <= sm ? um() - sm : -1);
                a2.H = c;
                return e;
              };
              zo.prototype.zc = function(a2) {
                return O().L ? 0 : this.sb ? 1 : Vn.prototype.zc.call(this, a2);
              };
              zo.prototype.wa = function() {
                return 1;
              };
              zo.prototype.getDuration = function() {
                return this.l;
              };
              var Fo = function(a2, b) {
                sb(a2.A, function(c) {
                  return c.h == b.h;
                }) || a2.A.push(b);
              }, Eo = function(a2, b, c) {
                return 15e3 <= b ? true : a2.$ ? (c === void 0 ? 0 : c) ? true : 0 < a2.l ? b >= a2.l / 2 : 0 < a2.R ? b >= a2.R : false : false;
              }, Go = function(a2) {
                var b = {}, c = O();
                b.insideIframe = c.l;
                b.unmeasurable = a2.$a;
                b.position = a2.Ya();
                b.exposure = a2.na.Z;
                b.documentSize = c.o;
                b.viewportSize = new mf(c.g.getWidth(), c.g.getHeight());
                a2.o != null && (b.presenceData = a2.o);
                b.screenShare = a2.na.oa;
                return b;
              }, Ho = function(a2) {
                var b = Im(a2.na.Z, 2), c = a2.fa.l, d = a2.na, e = Do(a2), f = Ao(e.o), g = Ao(e.A), h = Ao(d.volume), k = Im(e.C, 2), n = Im(e.H, 2), m = Im(d.Z, 2), v = Im(e.J, 2), r = Im(e.M, 2);
                d = Im(d.oa, 2);
                a2 = Zf(a2.Ya());
                a2.round();
                e = Nn(e, false);
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
                  position: a2,
                  hc: e
                };
              }, Jo = function(a2, b) {
                Io(a2.g, b, function() {
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
                  };
                });
                a2.g[b] = Ho(a2);
              }, Io = function(a2, b, c) {
                for (var d = a2.length; d < b + 1; )
                  a2.push(c()), d++;
              }, Mo = function(a2, b, c) {
                var d = a2.Td[b];
                if (d != null)
                  return d;
                d = Ko(a2, b);
                var e = Rb(function(f) {
                  return f == b;
                });
                a2 = Lo(a2, d, d, c, yo[Sb[e]]);
                b == "fully_viewable_audible_half_duration_impression" && (a2.std = "csm");
                return a2;
              }, No = function(a2, b, c) {
                var d = [b];
                if (a2 != b || c != b)
                  d.unshift(a2), d.push(c);
                return d;
              }, Lo = function(a2, b, c, d, e) {
                if (a2.$a)
                  return {
                    "if": 0
                  };
                var f = Zf(a2.Ya());
                f.round();
                var g = O(), h = N(), k = a2.ra(), n = a2.ba ? a2.ba.getName() : "ns", m = {};
                m["if"] = g.l ? 1 : void 0;
                m.sdk = a2.B ? a2.B : void 0;
                m.t = a2.vf;
                m.p = [f.top, f.left, f.bottom, f.right];
                m.tos = Dn(k.h, false);
                m.mtos = Nn(k);
                m.mcvt = k.V.l;
                m.ps = void 0;
                m.vht = po(k, um(), a2.ea == 2);
                m.mut = k.da.l;
                m.a = Ao(a2.na.volume);
                m.mv = Ao(k.A);
                m.fs = a2.sb ? 1 : 0;
                m.ft = k.G.g;
                m.at = k.B.g;
                m.as = 0 < k.o ? 1 : 0;
                m.atos = Dn(k.g);
                m.ssb = Dn(k.aa, false);
                m.amtos = Gn(k.g, false);
                m.uac = a2.da;
                m.vpt = k.l.g;
                n == "nio" && (m.nio = 1, m.avms = "nio");
                m.gmm = "4";
                m.gdr = Eo(a2, k.l.g, true) ? 1 : 0;
                m.efpf = a2.va;
                if (n == "gsv" || n == "nis")
                  f = a2.ba, 0 < f.B && (m.nnut = f.B);
                m.tcm = Co(a2);
                m.nmt = a2.X;
                m.bt = a2.T;
                m.pst = a2.Y;
                m.vpaid = a2.G;
                m.dur = a2.l;
                m.vmtime = a2.H;
                m.is = a2.fa.l;
                1 <= a2.g.length && (m.i0 = a2.g[0].Eb, m.a0 = [a2.g[0].zb], m.c0 = [a2.g[0].Z], m.ss0 = [a2.g[0].oa], f = a2.g[0].position, m.p0 = f ? wo(f) : void 0);
                2 <= a2.g.length && (m.i1 = a2.g[1].Eb, m.a1 = No(a2.g[1].dc, a2.g[1].zb, a2.g[1].$b), m.c1 = No(a2.g[1].ec, a2.g[1].Z, a2.g[1].ac), m.ss1 = No(a2.g[1].fc, a2.g[1].oa, a2.g[1].bc), f = a2.g[1].position, m.p1 = f ? wo(f) : void 0, m.mtos1 = a2.g[1].hc);
                3 <= a2.g.length && (m.i2 = a2.g[2].Eb, m.a2 = No(a2.g[2].dc, a2.g[2].zb, a2.g[2].$b), m.c2 = No(a2.g[2].ec, a2.g[2].Z, a2.g[2].ac), m.ss2 = No(a2.g[2].fc, a2.g[2].oa, a2.g[2].bc), f = a2.g[2].position, m.p2 = f ? wo(f) : void 0, m.mtos2 = a2.g[2].hc);
                4 <= a2.g.length && (m.i3 = a2.g[3].Eb, m.a3 = No(a2.g[3].dc, a2.g[3].zb, a2.g[3].$b), m.c3 = No(a2.g[3].ec, a2.g[3].Z, a2.g[3].ac), m.ss3 = No(a2.g[3].fc, a2.g[3].oa, a2.g[3].bc), f = a2.g[3].position, m.p3 = f ? wo(f) : void 0, m.mtos3 = a2.g[3].hc);
                m.cs = lo(a2.fa);
                b && (m.ic = ko(a2.fa), m.dvpt = k.l.h, m.dvs = In(k.h, 0.5), m.dfvs = In(k.h, 1), m.davs = In(k.g, 0.5), m.dafvs = In(k.g, 1), c && (k.l.h = 0, Jn(k.h), Jn(k.g)), a2.ab() && (m.dtos = k.K, m.dav = k.D, m.dtoss = a2.Ac + 1, c && (k.K = 0, k.D = 0, a2.Ac++)), m.dat = k.B.h, m.dft = k.G.h, c && (k.B.h = 0, k.G.h = 0));
                m.ps = [g.o.width, g.o.height];
                m.bs = [g.g.getWidth(), g.g.getHeight()];
                m.scs = [g.B.width, g.B.height];
                m.dom = g.domain;
                a2.vb && (m.vds = a2.vb);
                if (0 < a2.A.length || a2.bb)
                  b = Bb(a2.A), a2.bb && b.push(a2.bb), m.pings = qb(b, function(v) {
                    return v.toString();
                  });
                b = qb(pb(a2.A, function(v) {
                  return v.B();
                }), function(v) {
                  return v.getId();
                });
                Cb(b);
                m.ces = b;
                a2.h && (m.vmer = a2.h);
                a2.C && (m.vmmk = a2.C);
                a2.M && (m.vmiec = a2.M);
                m.avms = a2.ba ? a2.ba.getName() : "ns";
                a2.ba && Xb(m, a2.ba.Na());
                d ? (m.c = Im(a2.na.Z, 2), m.ss = Im(a2.na.oa, 2)) : m.tth = um() - rm;
                m.mc = Im(k.H, 2);
                m.nc = Im(k.C, 2);
                m.mv = Ao(k.A);
                m.nv = Ao(k.o);
                m.lte = Im(a2.Lc, 2);
                d = Do(a2, e);
                Nn(k);
                m.qmtos = Nn(d);
                m.qnc = Im(d.C, 2);
                m.qmv = Ao(d.A);
                m.qnv = Ao(d.o);
                m.qas = 0 < d.o ? 1 : 0;
                m.qi = a2.ia;
                m.avms || (m.avms = "geo");
                m.psm = k.R.h;
                m.psv = k.R.g;
                m.psfv = k.Y.g;
                m.psa = k.X.g;
                h = Dl(h.U);
                h.length && (m.veid = h);
                a2.o && Xb(m, fo(a2.o));
                return m;
              }, Ko = function(a2, b) {
                if (wb(Bm, b))
                  return true;
                var c = a2.ga[b];
                return c !== void 0 ? (a2.ga[b] = true, !c) : false;
              };
              var Oo = Ya(), Ro = function() {
                this.g = {};
                var a2 = E();
                Po(this, a2, document);
                var b = Qo();
                try {
                  if (b == "1") {
                    for (var c = a2.parent; c != a2.top; c = c.parent)
                      Po(this, c, c.document);
                    Po(this, a2.top, a2.top.document);
                  }
                } catch (d) {
                }
              }, Qo = function() {
                var a2 = document.documentElement;
                try {
                  if (!Lf(E().top))
                    return "2";
                  var b = [], c = E(a2.ownerDocument);
                  for (a2 = c; a2 != c.top; a2 = a2.parent)
                    if (a2.frameElement)
                      b.push(a2.frameElement);
                    else
                      break;
                  return b && b.length != 0 ? "1" : "0";
                } catch (d) {
                  return "2";
                }
              }, Po = function(a2, b, c) {
                Gm(c, "mousedown", function() {
                  return So(a2);
                }, 301);
                Gm(b, "scroll", function() {
                  return To(a2);
                }, 302);
                Gm(c, "touchmove", function() {
                  return Uo(a2);
                }, 303);
                Gm(c, "mousemove", function() {
                  return Vo(a2);
                }, 304);
                Gm(c, "keydown", function() {
                  return Wo(a2);
                }, 305);
              }, So = function(a2) {
                Gb(a2.g, function(b) {
                  1e5 < b.l || ++b.l;
                });
              }, To = function(a2) {
                Gb(a2.g, function(b) {
                  1e5 < b.g || ++b.g;
                });
              }, Uo = function(a2) {
                Gb(a2.g, function(b) {
                  1e5 < b.g || ++b.g;
                });
              }, Wo = function(a2) {
                Gb(a2.g, function(b) {
                  1e5 < b.h || ++b.h;
                });
              }, Vo = function(a2) {
                Gb(a2.g, function(b) {
                  1e5 < b.o || ++b.o;
                });
              };
              var Xo = function() {
                this.g = [];
                this.h = [];
              }, Yo = function(a2, b) {
                return tb(a2.g, function(c) {
                  return c.ia == b;
                });
              }, Zo = function(a2, b) {
                return b ? tb(a2.g, function(c) {
                  return c.pa.Sa == b;
                }) : null;
              }, $o = function(a2, b) {
                return tb(a2.h, function(c) {
                  return c.wa() == 2 && c.ia == b;
                });
              }, bp = function() {
                var a2 = ap;
                return a2.g.length == 0 ? a2.h : a2.h.length == 0 ? a2.g : Ab(a2.h, a2.g);
              };
              Xo.prototype.reset = function() {
                this.g = [];
                this.h = [];
              };
              var cp = function(a2, b) {
                a2 = b.wa() == 1 ? a2.g : a2.h;
                var c = ub(a2, function(d) {
                  return d == b;
                });
                return c != -1 ? (a2.splice(c, 1), b.ba && b.ba.Kb(), b.W(), true) : false;
              }, dp = function(a2) {
                var b = ap;
                if (cp(b, a2)) {
                  switch (a2.wa()) {
                    case 0:
                      var c = function() {
                        return null;
                      };
                    case 2:
                      c = function() {
                        return $o(b, a2.ia);
                      };
                      break;
                    case 1:
                      c = function() {
                        return Yo(b, a2.ia);
                      };
                  }
                  for (var d = c(); d; d = c())
                    cp(b, d);
                }
              }, ep = function(a2) {
                var b = ap;
                a2 = pb(a2, function(c) {
                  return !Zo(b, c.pa.Sa);
                });
                b.g.push.apply(b.g, ha(a2));
              }, fp = function(a2) {
                var b = ap, c = [];
                z(a2, function(d) {
                  sb(b.g, function(e) {
                    return e.pa.Sa === d.pa.Sa && e.ia === d.ia;
                  }) || (b.g.push(d), c.push(d));
                });
              }, ap = H(Xo);
              var gp = function() {
                this.g = this.h = null;
              }, hp = function(a2, b) {
                if (a2.h == null)
                  return false;
                var c = function(d, e) {
                  b(d, e);
                };
                a2.g = tb(a2.h, function(d) {
                  return d != null && d.hd();
                });
                a2.g && (a2.g.init(c) ? dn(a2.g.g) : b(a2.g.g.pb(), a2.g));
                return a2.g != null;
              };
              var jp = function(a2) {
                a2 = ip(a2);
                jn.call(this, a2.length ? a2[a2.length - 1] : new $m(D, 0));
                this.l = a2;
                this.h = null;
              };
              t(jp, jn);
              l = jp.prototype;
              l.getName = function() {
                return (this.h ? this.h : this.g).getName();
              };
              l.Na = function() {
                return (this.h ? this.h : this.g).Na();
              };
              l.Ha = function() {
                return (this.h ? this.h : this.g).Ha();
              };
              l.init = function(a2) {
                var b = false;
                z(this.l, function(c) {
                  c.initialize() && (b = true);
                });
                b && (this.o = a2, cn(this.g, this));
                return b;
              };
              l.W = function() {
                z(this.l, function(a2) {
                  a2.W();
                });
                jn.prototype.W.call(this);
              };
              l.hd = function() {
                return sb(this.l, function(a2) {
                  return a2.D();
                });
              };
              l.yb = function() {
                return sb(this.l, function(a2) {
                  return a2.D();
                });
              };
              l.Lb = function(a2, b, c) {
                return new to(a2, this.g, b, c);
              };
              l.Pa = function(a2) {
                this.h = a2.h;
              };
              var ip = function(a2) {
                if (!a2.length)
                  return [];
                a2 = pb(a2, function(c) {
                  return c != null && c.D();
                });
                for (var b = 1; b < a2.length; b++)
                  cn(a2[b - 1], a2[b]);
                return a2;
              };
              var kp = {
                threshold: [0, 0.3, 0.5, 0.75, 1]
              }, lp = function(a2, b, c, d) {
                hn.call(this, a2, b, c, d);
                this.D = this.L = this.C = this.B = this.o = null;
              };
              t(lp, to);
              lp.prototype.tc = function() {
                var a2 = this;
                this.D || (this.D = um());
                if (lm(298, function() {
                  return mp(a2);
                }))
                  return true;
                bn(this.h, "msf");
                return false;
              };
              lp.prototype.Kb = function() {
                if (this.o && this.l)
                  try {
                    this.o.unobserve(this.l), this.B ? (this.B.unobserve(this.l), this.B = null) : this.C && (this.C.disconnect(), this.C = null);
                  } catch (a2) {
                  }
              };
              var np = function(a2) {
                return a2.o && a2.o.takeRecords ? a2.o.takeRecords() : [];
              }, mp = function(a2) {
                if (!a2.l)
                  return false;
                var b = a2.l, c = a2.h.g.ka, d = N().g.g;
                a2.o = new c.IntersectionObserver(Xl(d, function(e) {
                  return op(a2, e);
                }), kp);
                d = Xl(d, function() {
                  a2.o.unobserve(b);
                  a2.o.observe(b);
                  op(a2, np(a2));
                });
                c.ResizeObserver ? (a2.B = new c.ResizeObserver(d), a2.B.observe(b)) : c.MutationObserver && (a2.C = new u.MutationObserver(d), a2.C.observe(b, {
                  attributes: true,
                  childList: true,
                  characterData: true,
                  subtree: true
                }));
                a2.o.observe(b);
                op(a2, np(a2));
                return true;
              }, op = function(a2, b) {
                try {
                  if (b.length) {
                    a2.L || (a2.L = um());
                    var c = pp(b), d = pg(a2.l, a2.h.g.ka), e = d.x, f = d.y;
                    a2.g = new F(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = Nm(c.intersectionRect);
                    a2.A = $f(g, a2.g.left - g.left, a2.g.top - g.top);
                  }
                } catch (h) {
                  a2.Kb(), nm(299, h);
                }
              }, pp = function(a2) {
                return rb(a2, function(b, c) {
                  return b.time > c.time ? b : c;
                }, a2[0]);
              };
              l = lp.prototype;
              l.Ma = function() {
                var a2 = np(this);
                0 < a2.length && op(this, a2);
                to.prototype.Ma.call(this);
              };
              l.xc = function() {
              };
              l.Fd = function() {
                return false;
              };
              l.rd = function() {
              };
              l.Na = function() {
                var a2 = {};
                return Object.assign(this.h.Na(), (a2.niot_obs = this.D, a2.niot_cbk = this.L, a2));
              };
              l.getName = function() {
                return "nio";
              };
              var qp = function(a2) {
                a2 = a2 === void 0 ? D : a2;
                jn.call(this, new $m(a2, 2));
              };
              t(qp, jn);
              qp.prototype.getName = function() {
                return "nio";
              };
              qp.prototype.yb = function() {
                return !O().h && this.g.g.ka.IntersectionObserver != null;
              };
              qp.prototype.Lb = function(a2, b, c) {
                return new lp(a2, this.g, b, c);
              };
              var sp = function() {
                var a2 = rp();
                $m.call(this, D.top, a2, "geo");
              };
              t(sp, $m);
              sp.prototype.Y = function() {
                return O().g;
              };
              sp.prototype.D = function() {
                var a2 = rp();
                this.I !== a2 && (this.g != this && a2 > this.g.I && (this.g = this, an(this)), this.I = a2);
                return a2 == 2;
              };
              var rp = function() {
                N();
                var a2 = O();
                return a2.l || a2.h ? 0 : 2;
              };
              var tp = function() {
              };
              var up = function() {
                this.done = false;
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
                this.A = false;
                this.l = null;
                this.C = 0;
                this.h = new Ym(this);
              }, xp = function() {
                var a2 = vp;
                a2.A || (a2.A = true, wp(a2, function(b) {
                  for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d - 0] = arguments[d];
                  return a2.o.apply(a2, ha(c));
                }), a2.o());
              };
              up.prototype.sample = function() {
                yp(this, bp(), false);
              };
              var zp = function() {
                H(tp);
                var a2 = H(gp);
                a2.g != null && a2.g.g ? dn(a2.g.g) : Tm(O());
              }, yp = function(a2, b, c) {
                if (!a2.done && (a2.h.cancel(), b.length != 0)) {
                  a2.l = null;
                  try {
                    zp();
                    var d = um(), e = N();
                    e.A = d;
                    if (H(gp).g != null)
                      for (e = 0; e < b.length; e++)
                        Zn(b[e], d, c);
                    else
                      cm(em, "", {
                        strategy_not_selected: 1,
                        bin: e.h
                      }, true, void 0);
                    for (d = 0; d < b.length; d++)
                      $n(b[d]);
                    ++a2.g.yd;
                    N();
                  } finally {
                    c ? z(b, function(f) {
                      f.na.Z = 0;
                    }) : Zm(a2.h);
                  }
                }
              }, wp = function(a2, b) {
                if (!a2.B) {
                  b = mm(142, b);
                  Ql();
                  var c = mh(Re);
                  c && gf(Re, c, b, {
                    capture: false
                  }) && (a2.B = b);
                }
              };
              up.prototype.o = function() {
                var a2 = Xm(), b = um();
                a2 ? (tm || (pm = b, z(ap.g, function(c) {
                  var d = c.ra();
                  d.T = po(d, b, c.ea != 1);
                })), tm = true) : (this.C = Ap(this, b), tm = false, rm = b, z(ap.g, function(c) {
                  c.Ub && (c.ra().I = b);
                }));
                yp(this, bp(), !a2);
              };
              var Bp = function() {
                var a2 = H(gp);
                if (a2.g != null) {
                  var b = a2.g;
                  z(bp(), function(c) {
                    return Xn(c, b);
                  });
                }
              }, Ap = function(a2, b) {
                a2 = a2.C;
                tm && (a2 += b - pm);
                return a2;
              }, Cp = function(a2) {
                var b = vp;
                a2 = a2 === void 0 ? function() {
                  return {};
                } : a2;
                im.Vc("av-js");
                em.g = 0.01;
                km([function(c) {
                  var d = N(), e = {};
                  e = (e.bin = d.h, e.type = "error", e);
                  d = Cl(d.U);
                  if (!b.l) {
                    var f = D.document, g = 0 <= qm ? um() - qm : -1, h = um();
                    b.g.Gc == -1 && (g = h);
                    var k = O(), n = N(), m = Cl(n.U), v = bp();
                    try {
                      if (0 < v.length) {
                        var r = k.g;
                        r && (m.bs = [r.getWidth(), r.getHeight()]);
                        var w = k.o;
                        w && (m.ps = [w.width, w.height]);
                        D.screen && (m.scs = [D.screen.width, D.screen.height]);
                      } else
                        m.url = encodeURIComponent(D.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                      m.tt = g;
                      m.pt = qm;
                      m.bin = n.h;
                      D.google_osd_load_pub_page_exp !== void 0 && (m.olpp = D.google_osd_load_pub_page_exp);
                      m.deb = [1, b.g.se, b.g.od, b.g.yd, b.g.Gc, 0, b.h.h, b.g.Ae, b.g.ze, b.g.Be].join("-");
                      m.tvt = Ap(b, h);
                      k.h && (m.inapp = 1);
                      if (D !== null && D != D.top) {
                        0 < v.length && (m.iframe_loc = encodeURIComponent(D.location.href.substring(0, 512)));
                        var x = k.I;
                        m.is = [x.getWidth(), x.getHeight()];
                      }
                    } catch (la) {
                      m.error = 1;
                    }
                    b.l = m;
                  }
                  w = b.l;
                  r = {};
                  for (var G in w)
                    r[G] = w[G];
                  G = N().g;
                  if (Bl(G.l, "prf") == 1) {
                    w = new Vl();
                    x = G.g;
                    f = 0;
                    -1 < x.g && (f = x.l.g.now() - x.g);
                    w = He(w, 1, x.o + f, 0);
                    x = G.g;
                    w = He(w, 5, -1 < x.g ? x.h + 1 : x.h, 0);
                    w = He(w, 2, G.h.g.l(), 0);
                    w = He(w, 3, G.h.g.h(), 0);
                    w = He(w, 4, G.h.g.g(), 0);
                    G = {};
                    x = new ce();
                    g = C(w, 1);
                    if (g != null) {
                      md(x.g, 9);
                      f = x.g;
                      k = g;
                      k = (g = 0 > k ? 1 : 0) ? -k : k;
                      if (k === 0)
                        id = 0 < 1 / k ? 0 : 2147483648, hd = 0;
                      else if (isNaN(k))
                        id = 2147483647, hd = 4294967295;
                      else if (17976931348623157e292 < k)
                        id = (g << 31 | 2146435072) >>> 0, hd = 0;
                      else if (22250738585072014e-324 > k)
                        h = k / Math.pow(2, -1074), id = (g << 31 | h / 4294967296) >>> 0, hd = h >>> 0;
                      else {
                        n = k;
                        h = 0;
                        if (2 <= n)
                          for (; 2 <= n && 1023 > h; )
                            h++, n /= 2;
                        else
                          for (; 1 > n && -1022 < h; )
                            n *= 2, h--;
                        k *= Math.pow(2, -h);
                        id = (g << 31 | h + 1023 << 20 | 1048576 * k & 1048575) >>> 0;
                        hd = 4503599627370496 * k >>> 0;
                      }
                      nd(f, hd);
                      nd(f, id);
                    }
                    je(x, 2, C(w, 2));
                    je(x, 3, C(w, 3));
                    je(x, 4, C(w, 4));
                    ie(x, 5, C(w, 5));
                    Qe(w, x);
                    w = he(x);
                    G = (G.pf = Zd(w), G);
                  } else
                    G = {};
                  Xb(r, G);
                  Xb(c, e, d, r, a2());
                  if (e = un())
                    d = {}, Xb(c, (d.v = encodeURIComponent(e), d));
                }]);
              }, vp = H(up);
              var Dp = null, Ep = "", Fp = false, Gp = function() {
                var a2 = Dp || D;
                if (!a2)
                  return "";
                var b = [];
                if (!a2.location || !a2.location.href)
                  return "";
                b.push("url=" + encodeURIComponent(a2.location.href.substring(0, 512)));
                a2.document && a2.document.referrer && b.push("referrer=" + encodeURIComponent(a2.document.referrer.substring(0, 512)));
                return b.join("&");
              };
              var Hp = function(a2) {
                return function(b) {
                  return b[a2] === void 0 ? 0 : b[a2];
                };
              }, Jp = function() {
                var a2 = [0, 2, 4];
                return function(b) {
                  b = b.tos;
                  if (Array.isArray(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++)
                      c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return a2 !== void 0 ? Ip(c, a2) : c;
                  }
                };
              }, Kp = function(a2, b, c, d) {
                c = c === void 0 ? true : c;
                d = d === void 0 ? function() {
                  return true;
                } : d;
                return function(e) {
                  var f = e[a2];
                  if (Array.isArray(f) && d(e))
                    return Ip(f, b, c);
                };
              }, Lp = function(a2, b) {
                return function(c) {
                  return b(c) ? c[a2] : void 0;
                };
              }, Mp = function(a2) {
                return function(b) {
                  for (var c = 0; c < a2.length; c++)
                    if (a2[c] === b.e || a2[c] === void 0 && !b.hasOwnProperty("e"))
                      return true;
                  return false;
                };
              }, Ip = function(a2, b, c) {
                return c === void 0 || c ? pb(a2, function(d, e) {
                  return wb(b, e);
                }) : qb(b, function(d, e, f) {
                  return a2.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h;
                  }, 0);
                });
              };
              var Np = Mp([void 0, 1, 2, 3, 4, 8, 16]), Op = Mp([void 0, 4, 8, 16]), Pp = {
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
                mtos1: Kp("mtos1", [0, 2, 4], false, Op),
                mtos2: Kp("mtos2", [0, 2, 4], false, Op),
                mtos3: Kp("mtos3", [0, 2, 4], false, Op),
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
              }, Qp = {
                c: Hp("c"),
                at: "at",
                atos: Kp("atos", [0, 2, 4]),
                ta: function(a2, b) {
                  return function(c) {
                    if (c[a2] === void 0)
                      return b;
                  };
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
              }, Rp = {
                atos: "atos",
                avt: Kp("atos", [2]),
                davs: "davs",
                dafvs: "dafvs",
                dav: "dav",
                ss: Hp("ss"),
                t: "t"
              }, Sp = {
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
              }, Tp = {
                tos: Jp(),
                at: "at",
                c: Hp("c"),
                mtos: Kp("mtos", [0, 2, 4]),
                p: "p",
                vpt: "vpt",
                vsv: ib("dv_w4"),
                gmm: "gmm",
                gdr: "gdr",
                dom: "dom",
                t: "t",
                mv: "mv",
                qmpt: Kp("qmtos", [0, 2, 4]),
                qvs: function(a2, b) {
                  return function(c) {
                    var d = c[a2];
                    if (typeof d === "number")
                      return qb(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0;
                      });
                  };
                }("qnc", [1, 0.5, 0]),
                qmv: "qmv",
                qa: "qas",
                a: "a"
              };
              function Up() {
                var a2 = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/), b;
                if (((b = a2) == null ? void 0 : b.length) == 2)
                  return a2[1];
                a2 = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
                var c;
                return ((c = a2) == null ? void 0 : c.length) == 3 ? "20" + a2[1] + a2[2] : "903";
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
                };
              }, Wp = Vp().Ca, Xp = Vp().version;
              var Zp = function(a2, b) {
                var c = {
                  sv: Xp,
                  cb: Wp
                };
                c.nas = ap.g.length;
                c.msg = a2;
                b !== void 0 && (a2 = Yp(b)) && (c.e = Cm[a2]);
                return c;
              }, $p = function(a2) {
                return a2.lastIndexOf("custom_metric_viewable", 0) == 0;
              }, Yp = function(a2) {
                var b = $p(a2) ? "custom_metric_viewable" : a2.toLowerCase();
                return Rb(function(c) {
                  return c == b;
                });
              };
              var aq = {
                Yf: "visible",
                Ff: "audible",
                gh: "time",
                ih: "timetype"
              }, bq = {
                visible: function(a2) {
                  return /^(100|[0-9]{1,2})$/.test(a2);
                },
                audible: function(a2) {
                  return a2 == "0" || a2 == "1";
                },
                timetype: function(a2) {
                  return a2 == "mtos" || a2 == "tos";
                },
                time: function(a2) {
                  return /^(100|[0-9]{1,2})%$/.test(a2) || /^([0-9])+ms$/.test(a2);
                }
              }, cq = function() {
                this.g = void 0;
                this.h = false;
                this.l = 0;
                this.o = -1;
                this.B = "tos";
              }, dq = function(a2) {
                try {
                  var b = a2.split(",");
                  return b.length > Nb(aq).length ? null : rb(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (d.length != 2 || bq[d[0]] === void 0 || !bq[d[0]](d[1]))
                      throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c;
                  }, {});
                } catch (c) {
                  return null;
                }
              }, eq = function(a2, b) {
                if (a2.g == void 0)
                  return 0;
                switch (a2.B) {
                  case "mtos":
                    return a2.h ? Hn(b.g, a2.g) : Hn(b.h, a2.g);
                  case "tos":
                    return a2.h ? Fn(b.g, a2.g) : Fn(b.h, a2.g);
                }
                return 0;
              };
              var fq = function(a2, b, c, d) {
                ro.call(this, b, d);
                this.A = a2;
                this.C = c;
              };
              t(fq, ro);
              fq.prototype.getId = function() {
                return this.A;
              };
              fq.prototype.B = function() {
                return true;
              };
              fq.prototype.o = function(a2) {
                var b = a2.ra(), c = a2.getDuration();
                return sb(this.C, function(d) {
                  if (d.g != void 0)
                    var e = eq(d, b);
                  else
                    b: {
                      switch (d.B) {
                        case "mtos":
                          e = d.h ? b.B.l : b.l.g;
                          break b;
                        case "tos":
                          e = d.h ? b.B.g : b.l.g;
                          break b;
                      }
                      e = 0;
                    }
                  e == 0 ? d = false : (d = d.l != -1 ? d.l : c !== void 0 && 0 < c ? d.o * c : -1, d = d != -1 && e >= d);
                  return d;
                });
              };
              var gq = function(a2) {
                ro.call(this, "fully_viewable_audible_half_duration_impression", a2);
              };
              t(gq, ro);
              gq.prototype.o = function(a2) {
                var b = Fn(a2.ra().g, 1);
                return Eo(a2, b);
              };
              var hq = function(a2, b) {
                ro.call(this, a2, b);
              };
              t(hq, ro);
              hq.prototype.o = function(a2) {
                return a2.ra().ab();
              };
              var iq = function() {
                this.h = this.o = this.A = this.B = this.l = this.g = "";
              };
              var jq = function() {
              }, kq = function(a2, b, c, d, e) {
                var f = {};
                if (a2 !== void 0)
                  if (b != null)
                    for (var g in b) {
                      var h = b[g];
                      g in Object.prototype || h != null && (f[g] = typeof h === "function" ? h(a2) : a2[h]);
                    }
                  else
                    Xb(f, a2);
                c !== void 0 && Xb(f, c);
                a2 = rn(pn(new nn(), f));
                0 < a2.length && d !== void 0 && e !== void 0 && (e = e(a2), a2 += "&" + d + "=" + e);
                return a2;
              };
              var lq = function() {
              };
              t(lq, jq);
              lq.prototype.g = function(a2) {
                var b = new iq();
                b.g = kq(a2, Pp);
                b.l = kq(a2, Rp);
                return b;
              };
              var mq = function(a2, b, c) {
                vo.call(this, a2, b, c);
              };
              t(mq, vo);
              mq.prototype.o = function() {
                var a2 = Ka("ima.admob.getViewability"), b = Bl(this.U, "queryid");
                typeof a2 === "function" && b && a2(b);
              };
              mq.prototype.getName = function() {
                return "gsv";
              };
              var nq = function(a2) {
                a2 = a2 === void 0 ? D : a2;
                jn.call(this, new $m(a2, 2));
              };
              t(nq, jn);
              nq.prototype.getName = function() {
                return "gsv";
              };
              nq.prototype.yb = function() {
                var a2 = O();
                N();
                return a2.h && false;
              };
              nq.prototype.Lb = function(a2, b, c) {
                return new mq(this.g, b, c);
              };
              var oq = function(a2, b, c) {
                vo.call(this, a2, b, c);
              };
              t(oq, vo);
              oq.prototype.o = function() {
                var a2 = this, b = Ka("ima.bridge.getNativeViewability"), c = Bl(this.U, "queryid");
                typeof b === "function" && c && b(c, function(d) {
                  Tb(d) && a2.B++;
                  var e = d.opt_nativeViewVisibleBounds || {}, f = d.opt_nativeViewHidden;
                  a2.g = Om(d.opt_nativeViewBounds || {});
                  var g = a2.h.l;
                  g.g = f ? Zf(uo) : Om(e);
                  a2.timestamp = d.opt_nativeTime || -1;
                  O().g = g.g;
                  d = d.opt_nativeVolume;
                  d !== void 0 && (g.volume = d);
                });
              };
              oq.prototype.getName = function() {
                return "nis";
              };
              var pq = function(a2) {
                a2 = a2 === void 0 ? D : a2;
                jn.call(this, new $m(a2, 2));
              };
              t(pq, jn);
              pq.prototype.getName = function() {
                return "nis";
              };
              pq.prototype.yb = function() {
                var a2 = O();
                N();
                return a2.h && false;
              };
              pq.prototype.Lb = function(a2, b, c) {
                return new oq(this.g, b, c);
              };
              var qq = function() {
                $m.call(this, D, 2, "mraid");
                this.$ = 0;
                this.J = this.K = false;
                this.C = null;
                this.h = Dm(this.ka);
                this.l.g = new F(0, 0, 0, 0);
                this.aa = false;
              };
              t(qq, $m);
              qq.prototype.D = function() {
                return this.h.za != null;
              };
              qq.prototype.X = function() {
                var a2 = {};
                this.$ && (a2.mraid = this.$);
                this.K && (a2.mlc = 1);
                a2.mtop = this.h.sf;
                this.C && (a2.mse = this.C);
                this.aa && (a2.msc = 1);
                a2.mcp = this.h.Tb;
                return a2;
              };
              qq.prototype.A = function(a2, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                  c[d - 1] = arguments[d];
                try {
                  return this.h.za[a2].apply(this.h.za, c);
                } catch (e) {
                  nm(538, e, 0.01, function(f) {
                    f.method = a2;
                  });
                }
              };
              var rq = function(a2, b, c) {
                a2.A("addEventListener", b, c);
              };
              qq.prototype.initialize = function() {
                var a2 = this;
                if (this.G)
                  return !this.Db();
                this.G = true;
                if (this.h.Tb === 2)
                  return this.C = "ng", bn(this, "w"), false;
                if (this.h.Tb === 1)
                  return this.C = "mm", bn(this, "w"), false;
                O().D = true;
                this.ka.document.readyState && this.ka.document.readyState == "complete" ? sq(this) : Gm(this.ka, "load", function() {
                  Ql().setTimeout(mm(292, function() {
                    return sq(a2);
                  }), 100);
                }, 292);
                return true;
              };
              var sq = function(a2) {
                N().B = !!a2.A("isViewable");
                rq(a2, "viewableChange", tq);
                a2.A("getState") === "loading" ? rq(a2, "ready", uq) : vq(a2);
              }, vq = function(a2) {
                typeof a2.h.za.AFMA_LIDAR === "string" ? (a2.K = true, wq(a2)) : (a2.h.Tb = 3, a2.C = "nc", bn(a2, "w"));
              }, wq = function(a2) {
                a2.J = false;
                var b = Bl(N().U, "rmmt") == 1, c = !!a2.A("isViewable");
                (b ? !c : 1) && Ql().setTimeout(mm(524, function() {
                  a2.J || (xq(a2), nm(540, Error()), a2.C = "mt", bn(a2, "w"));
                }), 500);
                yq(a2);
                rq(a2, a2.h.za.AFMA_LIDAR, zq);
              }, yq = function(a2) {
                var b = Bl(N().U, "sneio") == 1, c = a2.h.za.AFMA_LIDAR_EXP_1 !== void 0, d = a2.h.za.AFMA_LIDAR_EXP_2 !== void 0;
                (b = b && d) && (a2.h.za.AFMA_LIDAR_EXP_2 = true);
                c && (a2.h.za.AFMA_LIDAR_EXP_1 = !b);
              }, xq = function(a2) {
                a2.A("removeEventListener", a2.h.za.AFMA_LIDAR, zq);
                a2.K = false;
              };
              qq.prototype.R = function() {
                var a2 = O(), b = Aq(this, "getMaxSize");
                a2.g = new F(0, b.width, b.height, 0);
              };
              qq.prototype.T = function() {
                O().B = Aq(this, "getScreenSize");
              };
              var Aq = function(a2, b) {
                if (a2.A("getState") === "loading")
                  return new mf(-1, -1);
                b = a2.A(b);
                if (!b)
                  return new mf(-1, -1);
                a2 = parseInt(b.width, 10);
                b = parseInt(b.height, 10);
                return isNaN(a2) || isNaN(b) ? new mf(-1, -1) : new mf(a2, b);
              };
              qq.prototype.W = function() {
                xq(this);
                $m.prototype.W.call(this);
              };
              var uq = function() {
                try {
                  var a2 = H(qq);
                  a2.A("removeEventListener", "ready", uq);
                  vq(a2);
                } catch (b) {
                  nm(541, b);
                }
              }, zq = function(a2, b) {
                try {
                  var c = H(qq);
                  c.J = true;
                  var d = a2 ? new F(a2.y, a2.x + a2.width, a2.y + a2.height, a2.x) : new F(0, 0, 0, 0);
                  var e = um(), f = Xm();
                  var g = new wm(e, f, c);
                  g.g = d;
                  g.volume = b;
                  c.Pa(g);
                } catch (h) {
                  nm(542, h);
                }
              }, tq = function(a2) {
                var b = N(), c = H(qq);
                a2 && !b.B && (b.B = true, c.aa = true, c.C && bn(c, "w", true));
              };
              var Cq = function() {
                this.l = this.H = false;
                this.g = null;
                this.o = new lq();
                this.h = null;
                var a2 = {};
                this.M = (a2.start = this.Re, a2.firstquartile = this.Me, a2.midpoint = this.Oe, a2.thirdquartile = this.Se, a2.complete = this.Ke, a2.pause = this.Qc, a2.resume = this.Od, a2.skip = this.Qe, a2.viewable_impression = this.Oa, a2.mute = this.ub, a2.unmute = this.ub, a2.fullscreen = this.Ne, a2.exitfullscreen = this.Le, a2.fully_viewable_audible_half_duration_impression = this.Oa, a2.measurable_impression = this.Oa, a2.abandon = this.Qc, a2.engagedview = this.Oa, a2.impression = this.Oa, a2.creativeview = this.Oa, a2.progress = this.ub, a2.custom_metric_viewable = this.Oa, a2.bufferstart = this.Qc, a2.bufferfinish = this.Od, a2);
                a2 = {};
                this.T = (a2.overlay_resize = this.Pe, a2.abandon = this.Ec, a2.close = this.Ec, a2.collapse = this.Ec, a2.overlay_unmeasurable_impression = function(b) {
                  return Mo(b, "overlay_unmeasurable_impression", Xm());
                }, a2.overlay_viewable_immediate_impression = function(b) {
                  return Mo(b, "overlay_viewable_immediate_impression", Xm());
                }, a2.overlay_unviewable_impression = function(b) {
                  return Mo(b, "overlay_unviewable_impression", Xm());
                }, a2.overlay_viewable_end_of_session_impression = function(b) {
                  return Mo(b, "overlay_viewable_end_of_session_impression", Xm());
                }, a2);
                N().h = 3;
                Bq(this);
              };
              Cq.prototype.A = function(a2) {
                Wn(a2, false);
                dp(a2);
              };
              Cq.prototype.I = function() {
              };
              var Dq = function(a2, b, c, d) {
                a2 = a2.C(null, d, true, b);
                a2.B = c;
                ep([a2]);
                return a2;
              };
              Cq.prototype.C = function(a2, b, c, d) {
                var e = this;
                this.h || (this.h = this.wd());
                b = c ? b : -1;
                a2 = this.h == null || this.l ? new zo(D, a2, b, 7) : new zo(D, a2, b, 7, new ro("measurable_impression", this.h), Eq(this));
                a2.ia = d;
                zl(a2.U);
                Al(a2.U, "queryid", a2.ia);
                a2.Rc("");
                ao(a2, function(f) {
                  for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h - 0] = arguments[h];
                  return e.K.apply(e, ha(g));
                }, function(f) {
                  for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h - 0] = arguments[h];
                  return e.R.apply(e, ha(g));
                });
                (d = H(gp).g) && Xn(a2, d);
                a2.pa.Sa && H(tp);
                return a2;
              };
              var Fq = function(a2, b, c) {
                il(b);
                var d = a2.h;
                z(b, function(e) {
                  var f = qb(e.l, function(g) {
                    var h = dq(g);
                    if (h == null)
                      g = null;
                    else if (g = new cq(), h.visible != null && (g.g = h.visible / 100), h.audible != null && (g.h = h.audible == 1), h.time != null) {
                      var k = h.timetype == "mtos" ? "mtos" : "tos", n = ic(h.time, "%") ? "%" : "ms";
                      h = parseInt(h.time, 10);
                      n == "%" && (h /= 100);
                      n == "ms" ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                      g.B = k === void 0 ? "tos" : k;
                    }
                    return g;
                  });
                  sb(f, function(g) {
                    return g == null;
                  }) || Fo(c, new fq(e.id, e.g, f, d));
                });
              }, Eq = function(a2) {
                a2 = a2.h;
                return [new hq("viewable_impression", a2), new gq(a2)];
              }, Gq = function() {
                var a2 = [], b = N();
                a2.push(H(sp));
                Bl(b.U, "mvp_lv") && a2.push(H(qq));
                b = [new nq(), new pq()];
                b.push(new jp(a2));
                b.push(new qp(D));
                return b;
              }, Iq = function(a2) {
                if (!a2.H) {
                  a2.H = true;
                  try {
                    var b = um(), c = N(), d = O();
                    qm = b;
                    c.o = 79463069;
                    a2.g !== "o" && (Dp = Pg(D).ka);
                    if (Rl()) {
                      vp.g.od = 0;
                      vp.g.Gc = um() - b;
                      var e = Gq(), f = H(gp);
                      f.h = e;
                      hp(f, function() {
                        Hq();
                      }) ? vp.done || (Bp(), cn(f.g.g, a2), xp()) : d.l ? Hq() : xp();
                    } else
                      Fp = true;
                  } catch (g) {
                    throw ap.reset(), g;
                  }
                }
              }, Jq = function(a2) {
                vp.h.cancel();
                Ep = a2;
                vp.done = true;
              }, Kq = function(a2) {
                if (a2.g)
                  return a2.g;
                var b = H(gp).g;
                if (b)
                  switch (b.getName()) {
                    case "nis":
                      a2.g = "n";
                      break;
                    case "gsv":
                      a2.g = "m";
                  }
                a2.g || (a2.g = "h");
                return a2.g;
              }, Lq = function(a2, b, c) {
                if (a2.h == null)
                  return b.vb |= 4, false;
                a2 = a2.h.report(c, b);
                b.vb |= a2;
                return a2 == 0;
              };
              Cq.prototype.rb = function(a2) {
                switch (a2.Ha()) {
                  case 0:
                    if (a2 = H(gp).g)
                      a2 = a2.g, xb(a2.B, this), a2.L && this.Da() && fn(a2);
                    Hq();
                    break;
                  case 2:
                    xp();
                }
              };
              Cq.prototype.Pa = function() {
              };
              Cq.prototype.Da = function() {
                return false;
              };
              var Hq = function() {
                var a2 = [new qp(D)], b = H(gp);
                b.h = a2;
                hp(b, function() {
                  Jq("i");
                }) ? vp.done || (Bp(), xp()) : Jq("i");
              };
              Cq.prototype.R = function(a2, b) {
                a2.$a = true;
                switch (a2.wa()) {
                  case 1:
                    Mq(this, a2, b);
                    break;
                  case 2:
                    this.Tc(a2);
                }
                this.Uc(a2);
              };
              var Mq = function(a2, b, c) {
                if (!b.ua) {
                  var d = Mo(b, "start", Xm());
                  a2 = a2.o.g(d).g;
                  var e = {
                    id: "lidarv"
                  };
                  e.r = c;
                  e.v = Xp + "v";
                  If(a2, function(f, g) {
                    return e[f] = f == "mtos" || f == "tos" ? g : encodeURIComponent(g);
                  });
                  c = Gp();
                  If(c, function(f, g) {
                    return e[f] = encodeURIComponent(g);
                  });
                  c = "//pagead2.googlesyndication.com/pagead/gen_204?" + rn(pn(new nn(), e));
                  vn(c);
                  b.ua = true;
                }
              };
              l = Cq.prototype;
              l.Re = function(a2) {
                Jo(a2, 0);
                return Mo(a2, "start", Xm());
              };
              l.ub = function(a2, b, c) {
                yp(vp, [a2], !Xm());
                return this.Oa(a2, b, c);
              };
              l.Oa = function(a2, b, c) {
                return Mo(a2, c, Xm());
              };
              l.Me = function(a2) {
                return Nq(a2, "firstquartile", 1);
              };
              l.Oe = function(a2) {
                a2.$ = true;
                return Nq(a2, "midpoint", 2);
              };
              l.Se = function(a2) {
                return Nq(a2, "thirdquartile", 3);
              };
              l.Ke = function(a2) {
                var b = Nq(a2, "complete", 4);
                a2.ea != 0 && (a2.ea = 3);
                return b;
              };
              var Nq = function(a2, b, c) {
                yp(vp, [a2], !Xm());
                Jo(a2, c);
                c != 4 && Io(a2.K, c, a2.Wb);
                return Mo(a2, b, Xm());
              };
              l = Cq.prototype;
              l.Od = function(a2, b, c) {
                b = Xm();
                a2.ea != 2 || b || (a2.ra().I = um());
                yp(vp, [a2], !b);
                a2.ea == 2 && (a2.ea = 1);
                return Mo(a2, c, b);
              };
              l.Qe = function(a2, b) {
                b = this.ub(a2, b || {}, "skip");
                a2.ea != 0 && (a2.ea = 3);
                return b;
              };
              l.Ne = function(a2, b) {
                Wn(a2, true);
                return this.ub(a2, b || {}, "fullscreen");
              };
              l.Le = function(a2, b) {
                Wn(a2, false);
                return this.ub(a2, b || {}, "exitfullscreen");
              };
              l.Qc = function(a2, b, c) {
                b = a2.ra();
                b.T = po(b, um(), a2.ea != 1);
                yp(vp, [a2], !Xm());
                a2.ea == 1 && (a2.ea = 2);
                return Mo(a2, c, Xm());
              };
              l.Pe = function(a2) {
                yp(vp, [a2], !Xm());
                return a2.h();
              };
              l.Ec = function(a2) {
                yp(vp, [a2], !Xm());
                this.Md(a2);
                a2.ea != 0 && (a2.ea = 3);
                return a2.h();
              };
              var Bq = function(a2) {
                Cp(function() {
                  var b = Oq();
                  a2.g != null && (b.sdk = a2.g);
                  var c = H(gp);
                  c.g != null && (b.avms = c.g.getName());
                  return b;
                });
              }, Pq = function(a2, b, c, d) {
                var e = Zo(ap, c);
                e !== null && e.ia !== b && (a2.A(e), e = null);
                e || (b = a2.C(c, um(), false, b), ap.h.length == 0 && (N().o = 79463069), fp([b]), e = b, e.B = Kq(a2), d && (e.Ta = d));
                return e;
              };
              Cq.prototype.K = function() {
              };
              var Rq = function(a2, b) {
                b.C = 0;
                for (var c in ym)
                  a2[c] == null && (b.C |= ym[c]);
                Qq(a2, "currentTime");
                Qq(a2, "duration");
              };
              l = Cq.prototype;
              l.Tc = function() {
              };
              l.Md = function() {
              };
              l.jd = function() {
              };
              l.Uc = function() {
              };
              l.wd = function() {
              };
              var Qq = function(a2, b) {
                var c = a2[b];
                c !== void 0 && 0 < c && (a2[b] = Math.floor(1e3 * c));
              }, Oq = function() {
                var a2 = O(), b = {};
                return b.sv = Xp, b["if"] = a2.l ? "1" : "0", b.nas = String(ap.g.length), b;
              };
              var Sq = Ya(), Tq = false, Uq = false, Vq = false, Wq = function(a2) {
                return !a2 || typeof a2 !== "function" || 0 > String(Function.prototype.toString).indexOf("[native code]") ? false : 0 <= String(a2).indexOf("[native code]") && true || false;
              }, Xq = function(a2) {
                return !!(1 << a2 & Sq);
              }, Yq = [
                function(a2) {
                  return !(!a2.chrome || !a2.chrome.webstore);
                },
                function(a2) {
                  return !!a2.document.documentMode;
                },
                function(a2) {
                  return !!a2.document.fonts.ready;
                },
                function() {
                  return Xq(0);
                },
                function(a2) {
                  return !!a2.ActiveXObject;
                },
                function(a2) {
                  return !!a2.chrome;
                },
                function(a2) {
                  return !!a2.navigator.serviceWorker;
                },
                function(a2) {
                  return !!a2.opera;
                },
                function(a2) {
                  return !!a2.sidebar;
                },
                function() {
                  return !+"\v1";
                },
                function() {
                  return Xq(1);
                },
                function(a2) {
                  return !a2.ActiveXObject;
                },
                function(a2) {
                  return "-ms-ime-align" in a2.document.documentElement.style;
                },
                function(a2) {
                  return "-ms-scroll-limit" in a2.document.documentElement.style;
                },
                function(a2) {
                  return "-webkit-font-feature-settings" in a2.document.body.style;
                },
                function() {
                  return Xq(2);
                },
                function(a2) {
                  return "ActiveXObject" in a2;
                },
                function(a2) {
                  return "MozAppearance" in a2.document.documentElement.style;
                },
                function(a2) {
                  return "_phantom" in a2;
                },
                function(a2) {
                  return "callPhantom" in a2;
                },
                function(a2) {
                  return "content" in a2.document.createElement("template");
                },
                function(a2) {
                  return "getEntriesByType" in a2.performance;
                },
                function() {
                  return Xq(3);
                },
                function(a2) {
                  return "image-rendering" in a2.document.body.style;
                },
                function(a2) {
                  return "object-fit" in a2.document.body.style;
                },
                function(a2) {
                  return "open" in a2.document.createElement("details");
                },
                function(a2) {
                  return "orientation" in a2.screen;
                },
                function(a2) {
                  return "performance" in a2;
                },
                function(a2) {
                  return "shape-image-threshold" in a2.document.body.style;
                },
                function() {
                  return Xq(4);
                },
                function(a2) {
                  return "srcset" in a2.document.createElement("img");
                },
                function() {
                  return Uq;
                },
                function() {
                  return Vq;
                },
                function() {
                  return Xq(5);
                },
                function(a2) {
                  a2 = a2.document.createElement("div");
                  a2.style.width = "1px";
                  a2.style.width = "-webkit-min-content";
                  a2.style.width = "min-content";
                  return a2.style.width != "1px";
                },
                function(a2) {
                  a2 = a2.document.createElement("div");
                  a2.style.width = "1px";
                  a2.style.width = "calc(1px - 1px)";
                  a2.style.width = "-webkit-calc(1px - 1px)";
                  return a2.style.width != "1px";
                },
                function() {
                  var a = false;
                  eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                  try {
                    DummyFunction1();
                  } catch (b) {
                    a = true;
                  }
                  return a;
                },
                function() {
                  var a2 = false;
                  try {
                    DummyFunction2();
                  } catch (b) {
                    a2 = true;
                  }
                  return a2;
                },
                function() {
                  return false;
                },
                function() {
                  return Xq(6);
                },
                function(a2) {
                  var b = a2.document.createElement("canvas");
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
                  return b[0] == b[2] && b[1] == b[3] || Wq(a2.navigator.vibrate);
                },
                function(a2) {
                  a2 = a2.document.createElement("canvas");
                  a2.width = a2.height = 1;
                  a2 = a2.getContext("2d");
                  a2.globalCompositeOperation = "multiply";
                  a2.fillStyle = "rgb(0,255,255)";
                  a2.fillRect(0, 0, 1, 1);
                  a2.fill();
                  a2.fillStyle = "rgb(255,255,0)";
                  a2.fillRect(0, 0, 1, 1);
                  a2.fill();
                  a2 = a2.getImageData(0, 0, 1, 1).data;
                  return a2[0] == a2[2] && a2[1] == a2[3];
                },
                function(a2) {
                  return Wq(a2.document.createElement("div").matches);
                },
                function(a2) {
                  a2 = a2.document.createElement("input");
                  a2.setAttribute("type", "range");
                  return a2.type !== "text";
                },
                function(a2) {
                  return a2.CSS.supports("image-rendering", "pixelated");
                },
                function(a2) {
                  return a2.CSS.supports("object-fit", "contain");
                },
                function() {
                  return Xq(7);
                },
                function(a2) {
                  return a2.CSS.supports("object-fit", "inherit");
                },
                function(a2) {
                  return a2.CSS.supports("shape-image-threshold", "0.9");
                },
                function(a2) {
                  return a2.CSS.supports("word-break", "keep-all");
                },
                function() {
                  return eval("1 == [for (item of [1,2,3]) item][0]");
                },
                function(a2) {
                  return Wq(a2.CSS.supports);
                },
                function() {
                  return Wq(Intl.Collator);
                },
                function(a2) {
                  return Wq(a2.document.createElement("dialog").show);
                },
                function() {
                  return Xq(8);
                },
                function(a2) {
                  return Wq(a2.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                  }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                  }], {
                    duration: 1300,
                    iterations: 1
                  }).reverse);
                },
                function(a2) {
                  return Wq(a2.document.createElement("div").animate);
                },
                function(a2) {
                  return Wq(a2.document.documentElement.webkitRequestFullScreen);
                },
                function(a2) {
                  return Wq(a2.navigator.getBattery);
                },
                function(a2) {
                  return Wq(a2.navigator.permissions.query);
                },
                function() {
                  return false;
                },
                function() {
                  return Xq(9);
                },
                function() {
                  return Wq(webkitRequestAnimationFrame);
                },
                function(a2) {
                  return Wq(a2.BroadcastChannel.call);
                },
                function(a2) {
                  return Wq(a2.FontFace);
                },
                function(a2) {
                  return Wq(a2.Gamepad);
                },
                function() {
                  return Xq(10);
                },
                function(a2) {
                  return Wq(a2.MutationEvent);
                },
                function(a2) {
                  return Wq(a2.MutationObserver);
                },
                function(a2) {
                  return Wq(a2.crypto.getRandomValues);
                },
                function(a2) {
                  return Wq(a2.document.body.createShadowRoot);
                },
                function(a2) {
                  return Wq(a2.document.body.webkitCreateShadowRoot);
                },
                function(a2) {
                  return Wq(a2.fetch);
                },
                function() {
                  return Xq(11);
                },
                function(a2) {
                  return Wq(a2.navigator.serviceWorker.register);
                },
                function(a2) {
                  return Wq(a2.navigator.webkitGetGamepads);
                },
                function(a2) {
                  return Wq(a2.speechSynthesis.speak);
                },
                function(a2) {
                  return Wq(a2.webkitRTCPeerConnection);
                },
                function(a2) {
                  return a2.CSS.supports("--fake-var", "0");
                },
                function() {
                  return Xq(12);
                },
                function(a2) {
                  return a2.CSS.supports("cursor", "grab");
                },
                function(a2) {
                  return a2.CSS.supports("cursor", "zoom-in");
                },
                function(a2) {
                  return a2.CSS.supports("image-orientation", "270deg");
                },
                function() {
                  return Xq(13);
                },
                function(a2) {
                  return a2.CSS.supports("position", "sticky");
                },
                function(a2) {
                  return a2.document.createElement("style").scoped === void 0;
                },
                function(a2) {
                  return a2.performance.getEntriesByType("resource") instanceof Array;
                },
                function() {
                  return typeof InstallTrigger == "undefined";
                },
                function() {
                  return typeof new Intl.Collator().resolvedOptions() == "object";
                },
                function(a2) {
                  return typeof a2.navigator.onLine == "boolean";
                },
                function() {
                  return Xq(14);
                },
                function(a2) {
                  return typeof a2.navigator.Gh == "undefined";
                },
                function(a2) {
                  return typeof a2.performance.now() == "number";
                },
                function() {
                  return new Uint16Array(1)[0] == 0;
                },
                function(a2) {
                  return a2.ActiveXObject.toString().indexOf("native") == -1;
                },
                function(a2) {
                  return Object.prototype.toString.call(a2.HTMLElement).indexOf("Constructor") == -1;
                }
              ], Zq = [
                function(a2) {
                  a2 = a2.document.createElement("div");
                  var b = null, c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                  try {
                    a2.style.behavior = "url(#default#clientcaps)";
                  } catch (e) {
                  }
                  for (var d = 0; d < c.length; d++) {
                    try {
                      b = a2.getComponentVersion(c[d], "componentid").replace(/,/g, ".");
                    } catch (e) {
                    }
                    if (b)
                      return b.split(".")[0];
                  }
                  return false;
                },
                function() {
                  return new Date().getTimezoneOffset();
                },
                function(a2) {
                  return (a2.innerWidth || a2.document.documentElement.clientWidth || a2.document.body.clientWidth) / (a2.innerHeight || a2.document.documentElement.clientHeight || a2.document.body.clientHeight);
                },
                function(a2) {
                  return (a2.outerWidth || a2.document && a2.document.body && a2.document.body.offsetWidth) / (a2.outerHeight || a2.document && a2.document.body && a2.document.body.offsetHeight);
                },
                function(a2) {
                  return a2.screen.availWidth / a2.screen.availHeight;
                },
                function(a2) {
                  return a2.screen.width / a2.screen.height;
                }
              ], $q = [function(a2) {
                return a2.navigator.userAgent;
              }, function(a2) {
                return a2.navigator.platform;
              }, function(a2) {
                return a2.navigator.vendor;
              }], br = function() {
                try {
                  ar();
                } catch (d) {
                }
                var a2 = "a=1&b=" + Sq + "&", b = [], c = 99;
                z(Yq, function(d, e) {
                  var f = false;
                  try {
                    f = d(D);
                  } catch (g) {
                  }
                  b[e / 32 >>> 0] |= f << e % 32;
                });
                z(b, function(d, e) {
                  a2 += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&";
                });
                c = 105;
                z(Zq, function(d) {
                  var e = "false";
                  try {
                    e = d(D);
                  } catch (f) {
                  }
                  a2 += String.fromCharCode(c++) + "=" + e + "&";
                });
                z($q, function(d) {
                  var e = "";
                  try {
                    e = $d(d(D));
                  } catch (f) {
                  }
                  a2 += String.fromCharCode(c++) + "=" + e + "&";
                });
                return a2.slice(0, -1);
              }, ar = function() {
                if (!Tq) {
                  var a2 = function() {
                    Uq = true;
                    D.document.removeEventListener("webdriver-evaluate", a2, true);
                  };
                  D.document.addEventListener("webdriver-evaluate", a2, true);
                  var b = function() {
                    Vq = true;
                    D.document.removeEventListener("webdriver-evaluate-response", b, true);
                  };
                  D.document.addEventListener("webdriver-evaluate-response", b, true);
                  Tq = true;
                }
              };
              var cr = function() {
                this.blockSize = -1;
                this.blockSize = 64;
                this.g = Array(4);
                this.o = Array(this.blockSize);
                this.l = this.h = 0;
                this.reset();
              };
              Za(cr, fl);
              cr.prototype.reset = function() {
                this.g[0] = 1732584193;
                this.g[1] = 4023233417;
                this.g[2] = 2562383102;
                this.g[3] = 271733878;
                this.l = this.h = 0;
              };
              var dr = function(a2, b, c) {
                c || (c = 0);
                var d = Array(16);
                if (typeof b === "string")
                  for (var e = 0; 16 > e; ++e)
                    d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
                else
                  for (e = 0; 16 > e; ++e)
                    d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
                b = a2.g[0];
                c = a2.g[1];
                e = a2.g[2];
                var f = a2.g[3];
                var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
                b = c + (g << 7 & 4294967295 | g >>> 25);
                g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
                f = b + (g << 12 & 4294967295 | g >>> 20);
                g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
                e = f + (g << 17 & 4294967295 | g >>> 15);
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
                f = b + (g << 12 & 4294967295 | g >>> 20);
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
                b = c + (g << 5 & 4294967295 | g >>> 27);
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
                c = e + (g << 20 & 4294967295 | g >>> 12);
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
                f = b + (g << 11 & 4294967295 | g >>> 21);
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
                g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
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
                g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
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
                g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
                c = e + (g << 21 & 4294967295 | g >>> 11);
                g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
                b = c + (g << 6 & 4294967295 | g >>> 26);
                g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
                f = b + (g << 10 & 4294967295 | g >>> 22);
                g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
                e = f + (g << 15 & 4294967295 | g >>> 17);
                g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
                a2.g[0] = a2.g[0] + b & 4294967295;
                a2.g[1] = a2.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
                a2.g[2] = a2.g[2] + e & 4294967295;
                a2.g[3] = a2.g[3] + f & 4294967295;
              }, er = function(a2, b) {
                if (c === void 0)
                  var c = b.length;
                for (var d = c - a2.blockSize, e = a2.o, f = a2.h, g = 0; g < c; ) {
                  if (f == 0)
                    for (; g <= d; )
                      dr(a2, b, g), g += a2.blockSize;
                  if (typeof b === "string")
                    for (; g < c; ) {
                      if (e[f++] = b.charCodeAt(g++), f == a2.blockSize) {
                        dr(a2, e);
                        f = 0;
                        break;
                      }
                    }
                  else
                    for (; g < c; )
                      if (e[f++] = b[g++], f == a2.blockSize) {
                        dr(a2, e);
                        f = 0;
                        break;
                      }
                }
                a2.h = f;
                a2.l += c;
              };
              var fr = function() {
                this.h = null;
              };
              t(fr, lq);
              fr.prototype.g = function(a2) {
                var b = lq.prototype.g.call(this, a2);
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
                b.A = kq(a2, Qp, c, "h", gr("kArwaWEsTs"));
                b.o = kq(a2, Sp, {}, "h", gr("b96YPMzfnx"));
                b.h = kq(a2, Tp, {}, "h", gr("yb8Wev6QDg"));
                return b;
              };
              var gr = function(a2) {
                return function(b) {
                  var c = new cr();
                  er(c, b + a2);
                  var d = Array((56 > c.h ? c.blockSize : 2 * c.blockSize) - c.h);
                  d[0] = 128;
                  for (b = 1; b < d.length - 8; ++b)
                    d[b] = 0;
                  var e = 8 * c.l;
                  for (b = d.length - 8; b < d.length; ++b)
                    d[b] = e & 255, e /= 256;
                  er(c, d);
                  d = Array(16);
                  for (b = e = 0; 4 > b; ++b)
                    for (var f = 0; 32 > f; f += 8)
                      d[e++] = c.g[b] >>> f & 255;
                  return gb(d).slice(-8);
                };
              };
              var hr = function(a2, b) {
                this.l = a2;
                this.o = b;
              };
              hr.prototype.report = function(a2, b) {
                var c = this.g(b);
                if (typeof c === "function") {
                  var d = {};
                  d = (d.sv = Xp, d.cb = Wp, d.e = ir(a2), d);
                  var e = Mo(b, a2, Xm());
                  Xb(d, e);
                  b.Td[a2] = e;
                  d = b.wa() == 2 ? tn(d).join("&") : this.o.g(d).g;
                  try {
                    return c(b.ia, d, a2), 0;
                  } catch (f) {
                    return 2;
                  }
                } else
                  return 1;
              };
              var ir = function(a2) {
                var b = $p(a2) ? "custom_metric_viewable" : a2;
                a2 = Rb(function(c) {
                  return c == b;
                });
                return Cm[a2];
              };
              hr.prototype.g = function() {
                return Ka(this.l);
              };
              var jr = function(a2, b, c) {
                hr.call(this, a2, b);
                this.h = c;
              };
              t(jr, hr);
              jr.prototype.g = function(a2) {
                if (!a2.Ta)
                  return hr.prototype.g.call(this, a2);
                if (this.h[a2.Ta])
                  return function() {
                  };
                nm(393, Error());
                return null;
              };
              var kr = function() {
                Cq.call(this);
                this.D = void 0;
                this.G = null;
                this.L = false;
                this.B = {};
                this.J = 0;
                this.o = new fr();
              };
              t(kr, Cq);
              kr.prototype.I = function(a2, b) {
                var c = this, d = H(gp);
                if (d.g != null)
                  switch (d.g.getName()) {
                    case "nis":
                      var e = lr(this, a2, b);
                      break;
                    case "gsv":
                      e = mr(this, a2, b);
                      break;
                    case "exc":
                      e = nr(this, a2);
                  }
                e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Pq(this, a2, b.opt_adElement, b.opt_osdId)));
                e && e.wa() == 1 && (e.D == La && (e.D = function(f) {
                  return c.jd(f);
                }), or(this, e, b));
                return e;
              };
              var or = function(a2, b, c) {
                c = c.opt_configurable_tracking_events;
                a2.h != null && Array.isArray(c) && Fq(a2, c, b);
              };
              kr.prototype.jd = function(a2) {
                a2.h = 0;
                a2.M = 0;
                if (a2.B == "h" || a2.B == "n") {
                  if (N().l)
                    var b = Ka("ima.bridge.getVideoMetadata");
                  else if (a2.Ta && pr(this)) {
                    var c = this.B[a2.Ta];
                    c ? b = function(e) {
                      return qr(c, e);
                    } : c !== null && nm(379, Error());
                  } else
                    b = Ka("ima.common.getVideoMetadata");
                  if (typeof b === "function")
                    try {
                      var d = b(a2.ia);
                    } catch (e) {
                      a2.h |= 4;
                    }
                  else
                    a2.h |= 2;
                } else if (a2.B == "b")
                  if (b = Ka("ytads.bulleit.getVideoMetadata"), typeof b === "function")
                    try {
                      d = b(a2.ia);
                    } catch (e) {
                      a2.h |= 4;
                    }
                  else
                    a2.h |= 2;
                else if (a2.B == "ml")
                  if (b = Ka("ima.common.getVideoMetadata"), typeof b === "function")
                    try {
                      d = b(a2.ia);
                    } catch (e) {
                      a2.h |= 4;
                    }
                  else
                    a2.h |= 2;
                else
                  a2.h |= 1;
                a2.h || (d === void 0 ? a2.h |= 8 : d === null ? a2.h |= 16 : Tb(d) ? a2.h |= 32 : d.errorCode != null && (a2.M = d.errorCode, a2.h |= 64));
                d == null && (d = {});
                Rq(d, a2);
                Pm(d.volume) && Pm(this.D) && (d.volume *= this.D);
                return d;
              };
              var mr = function(a2, b, c) {
                var d = Yo(ap, b);
                d || (d = c.opt_nativeTime || -1, d = Dq(a2, b, Kq(a2), d), c.opt_osdId && (d.Ta = c.opt_osdId));
                return d;
              }, lr = function(a2, b, c) {
                var d = Yo(ap, b);
                d || (d = Dq(a2, b, "n", c.opt_nativeTime || -1));
                return d;
              }, nr = function(a2, b) {
                var c = Yo(ap, b);
                c || (c = Dq(a2, b, "h", -1));
                return c;
              };
              kr.prototype.wd = function() {
                if (pr(this))
                  return new jr("ima.common.triggerExternalActivityEvent", this.o, this.B);
                var a2 = rr(this);
                return a2 != null ? new hr(a2, this.o) : null;
              };
              var rr = function(a2) {
                var b = N();
                switch (Kq(a2)) {
                  case "b":
                    return "ytads.bulleit.triggerExternalActivityEvent";
                  case "n":
                    return "ima.bridge.triggerExternalActivityEvent";
                  case "h":
                    if (b.l)
                      return "ima.bridge.triggerExternalActivityEvent";
                  case "m":
                  case "ml":
                    return "ima.common.triggerExternalActivityEvent";
                }
                return null;
              };
              kr.prototype.Tc = function(a2) {
                !a2.g && a2.$a && Lq(this, a2, "overlay_unmeasurable_impression") && (a2.g = true);
              };
              kr.prototype.Md = function(a2) {
                a2.Pd && (a2.ab() ? Lq(this, a2, "overlay_viewable_end_of_session_impression") : Lq(this, a2, "overlay_unviewable_impression"), a2.Pd = false);
              };
              var sr = function(a2, b, c, d) {
                c = c === void 0 ? {} : c;
                var e = {};
                Xb(e, {
                  opt_adElement: void 0,
                  opt_fullscreen: void 0
                }, c);
                if (e.opt_bounds)
                  return a2.o.g(Zp("ol", d));
                if (d !== void 0)
                  if (Yp(d) !== void 0)
                    if (Fp)
                      b = Zp("ue", d);
                    else if (Iq(a2), Ep == "i")
                      b = Zp("i", d), b["if"] = 0;
                    else if (b = a2.I(b, e)) {
                      b: {
                        Ep == "i" && (b.$a = true, a2.Uc(b));
                        c = e.opt_fullscreen;
                        c !== void 0 && Wn(b, !!c);
                        var f;
                        if (c = !O().h && !Sm())
                          Ql(), c = lh(Re) === 0;
                        if (f = c) {
                          switch (b.wa()) {
                            case 1:
                              Mq(a2, b, "pv");
                              break;
                            case 2:
                              a2.Tc(b);
                          }
                          Jq("pv");
                        }
                        c = d.toLowerCase();
                        if (f = !f)
                          c: {
                            if (Bl(N().U, "ssmol") && (f = a2.l, c === "loaded"))
                              break c;
                            f = wb(zm, c);
                          }
                        if (f && b.ea == 0) {
                          Ep != "i" && (vp.done = false);
                          f = e !== void 0 ? e.opt_nativeTime : void 0;
                          sm = f = typeof f === "number" ? f : um();
                          b.Ub = true;
                          var g = Xm();
                          b.ea = 1;
                          b.ga = {};
                          b.ga.start = false;
                          b.ga.firstquartile = false;
                          b.ga.midpoint = false;
                          b.ga.thirdquartile = false;
                          b.ga.complete = false;
                          b.ga.resume = false;
                          b.ga.pause = false;
                          b.ga.skip = false;
                          b.ga.mute = false;
                          b.ga.unmute = false;
                          b.ga.viewable_impression = false;
                          b.ga.measurable_impression = false;
                          b.ga.fully_viewable_audible_half_duration_impression = false;
                          b.ga.fullscreen = false;
                          b.ga.exitfullscreen = false;
                          b.Ac = 0;
                          g || (b.ra().I = f);
                          yp(vp, [b], !g);
                        }
                        (f = b.gb[c]) && jo(b.fa, f);
                        wb(Am, c) && !b.$a && b.bb && b.ea != 0 && (f = b.bb, f.g || (f.g = so(f, b)));
                        switch (b.wa()) {
                          case 1:
                            var h = $p(c) ? a2.M.custom_metric_viewable : a2.M[c];
                            break;
                          case 2:
                            h = a2.T[c];
                        }
                        if (h && (d = h.call(a2, b, e, d), d !== void 0)) {
                          e = Zp(void 0, c);
                          Xb(e, d);
                          d = e;
                          break b;
                        }
                        d = void 0;
                      }
                      b.ea == 3 && a2.A(b);
                      b = d;
                    } else
                      b = Zp("nf", d);
                  else
                    b = void 0;
                else
                  Fp ? b = Zp("ue") : (b = a2.I(b, e)) ? (d = Zp(), Xb(d, Lo(b, true, false, false)), b = d) : b = Zp("nf");
                return typeof b === "string" ? a2.o.g(void 0) : a2.o.g(b);
              };
              kr.prototype.K = function(a2) {
                this.l && a2.wa() == 1 && tr(this, a2);
              };
              kr.prototype.Uc = function(a2) {
                this.l && a2.wa() == 1 && tr(this, a2);
              };
              var tr = function(a2, b) {
                var c;
                if (b.Ta && pr(a2)) {
                  var d = a2.B[b.Ta];
                  d ? c = function(f, g) {
                    ur(d, f, g);
                  } : d !== null && nm(379, Error());
                } else
                  c = Ka("ima.common.triggerViewabilityMeasurementUpdate");
                if (typeof c === "function") {
                  var e = Go(b);
                  e.nativeVolume = a2.D;
                  c(b.ia, e);
                }
              }, vr = function(a2, b, c) {
                a2.B[b] = c;
              }, pr = function(a2) {
                return N().l || Kq(a2) != "h" && Kq(a2) != "m" ? false : a2.J != 0;
              };
              kr.prototype.C = function(a2, b, c, d) {
                a2 = Cq.prototype.C.call(this, a2, b, c, d);
                this.L && (b = this.G, a2.o == null && (a2.o = new eo()), b.g[a2.ia] = a2.o, a2.o.B = Oo);
                return a2;
              };
              kr.prototype.A = function(a2) {
                a2 && a2.wa() == 1 && this.L && delete this.G.g[a2.ia];
                return Cq.prototype.A.call(this, a2);
              };
              var wr = function(a2) {
                var b = {};
                return b.viewability = a2.g, b.googleViewability = a2.l, b.moatInit = a2.B, b.moatViewability = a2.A, b.integralAdsViewability = a2.o, b.doubleVerifyViewability = a2.h, b;
              }, xr = function(a2, b, c) {
                c = c === void 0 ? {} : c;
                a2 = sr(H(kr), b, c, a2);
                return wr(a2);
              }, yr = new iq();
              yr.B = "stopped";
              yr.g = "stopped";
              yr.l = "stopped";
              yr.A = "stopped";
              yr.o = "stopped";
              yr.h = "stopped";
              Object.freeze(yr);
              var zr = mm(193, xr, void 0, Oq);
              y("Goog_AdSense_Lidar_sendVastEvent", zr, void 0);
              var Ar = mm(194, function(a2, b) {
                b = b === void 0 ? {} : b;
                a2 = sr(H(kr), a2, b);
                return wr(a2);
              });
              y("Goog_AdSense_Lidar_getViewability", Ar, void 0);
              var Br = mm(195, function() {
                return Tl();
              });
              y("Goog_AdSense_Lidar_getUrlSignalsArray", Br, void 0);
              var Cr = mm(196, function() {
                return JSON.stringify(Tl());
              });
              y("Goog_AdSense_Lidar_getUrlSignalsList", Cr, void 0);
              var Er = function(a2) {
                B.call(this, a2, -1, Dr);
              };
              t(Er, B);
              var Dr = [3];
              var Gr = function(a2) {
                B.call(this, a2, -1, Fr);
              };
              t(Gr, B);
              var Hr = function(a2, b) {
                return Ge(a2, 1, b);
              }, Ir = function(a2, b) {
                return Ge(a2, 2, b);
              }, Jr = function(a2, b) {
                return Ge(a2, 3, b);
              }, Kr = function(a2, b) {
                Ge(a2, 4, b);
              }, Fr = [1, 2, 3, 4];
              var Lr = function(a2) {
                B.call(this, a2);
              };
              t(Lr, B);
              var Nr = function(a2) {
                B.call(this, a2, -1, Mr);
              };
              t(Nr, B);
              Nr.prototype.getVersion = function() {
                return Ee(this, 1, 0);
              };
              var Or = function(a2, b) {
                return He(a2, 1, b, 0);
              }, Pr = function(a2, b) {
                return Me(a2, 2, b);
              }, Qr = function(a2, b) {
                return Me(a2, 3, b);
              }, Rr = function(a2, b) {
                return He(a2, 4, b, 0);
              }, Sr = function(a2, b) {
                return He(a2, 5, b, 0);
              }, Tr = function(a2, b) {
                return He(a2, 6, b, 0);
              }, Ur = function(a2, b) {
                return He(a2, 7, b, "");
              }, Vr = function(a2, b) {
                return He(a2, 8, b, 0);
              }, Wr = function(a2, b) {
                return He(a2, 9, b, 0);
              }, Xr = function(a2, b) {
                return He(a2, 10, b, false);
              }, Yr = function(a2, b) {
                return He(a2, 11, b, false);
              }, Zr = function(a2, b) {
                return Ge(a2, 12, b);
              }, $r = function(a2, b) {
                return Ge(a2, 13, b);
              }, as = function(a2, b) {
                return Ge(a2, 14, b);
              }, bs = function(a2, b) {
                return He(a2, 15, b, false);
              }, cs = function(a2, b) {
                return He(a2, 16, b, "");
              }, ds = function(a2, b) {
                return Ge(a2, 17, b);
              }, es = function(a2, b) {
                return Ge(a2, 18, b);
              }, fs = function(a2, b) {
                var c = c === void 0 ? false : c;
                a2.g || (a2.g = {});
                b = b || [];
                for (var d = se([]), e = 0; e < b.length; e++)
                  d[e] = Le(b[e], false);
                a2.g[19] = b;
                return Ae(a2, 19, d, c);
              }, Mr = [12, 13, 14, 17, 18, 19];
              var gs = function(a2) {
                B.call(this, a2);
              };
              t(gs, B);
              var hs = "a".charCodeAt(), is = Mb({
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
              }), js = Mb({
                vg: 0,
                wg: 1,
                ug: 2
              });
              var ks = function(a2) {
                if (/[^01]/.test(a2))
                  throw Error("Input bitstring " + a2 + " is malformed!");
                this.h = a2;
                this.g = 0;
              }, ms = function(a2) {
                a2 = ls(a2, 36);
                var b = new Lr();
                b = He(b, 1, Math.floor(a2 / 10), 0);
                return He(b, 2, a2 % 10 * 1e8, 0);
              }, ns = function(a2) {
                return String.fromCharCode(hs + ls(a2, 6)) + String.fromCharCode(hs + ls(a2, 6));
              }, qs = function(a2) {
                var b = ls(a2, 16);
                return !!ls(a2, 1) === true ? (a2 = os(a2), a2.forEach(function(c) {
                  if (c > b)
                    throw Error("ID " + c + " is past MaxVendorId " + b + "!");
                }), a2) : ps(a2, b);
              }, rs = function(a2) {
                for (var b = [], c = ls(a2, 12); c--; ) {
                  var d = ls(a2, 6), e = ls(a2, 2), f = os(a2), g = b, h = g.push, k = new Er();
                  d = He(k, 1, d, 0);
                  e = He(d, 2, e, 0);
                  f = Ge(e, 3, f);
                  h.call(g, f);
                }
                return b;
              }, os = function(a2) {
                for (var b = ls(a2, 12), c = []; b--; ) {
                  var d = !!ls(a2, 1) === true, e = ls(a2, 16);
                  if (d)
                    for (d = ls(a2, 16); e <= d; e++)
                      c.push(e);
                  else
                    c.push(e);
                }
                c.sort(function(f, g) {
                  return f - g;
                });
                return c;
              }, ps = function(a2, b, c) {
                for (var d = [], e = 0; e < b; e++)
                  if (ls(a2, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1)
                      throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f);
                  }
                return d;
              }, ls = function(a2, b) {
                if (a2.g + b > a2.h.length)
                  throw Error("Requested length " + b + " is past end of string.");
                var c = a2.h.substring(a2.g, a2.g + b);
                a2.g += b;
                return parseInt(c, 2);
              };
              ks.prototype.skip = function(a2) {
                this.g += a2;
              };
              var ts = function(a2) {
                try {
                  var b = be(a2).map(function(f) {
                    return f.toString(2).padStart(8, "0");
                  }).join(""), c = new ks(b);
                  if (ls(c, 3) !== 3)
                    return null;
                  var d = Ir(Hr(new Gr(), ps(c, 24, is)), ps(c, 24, is)), e = ls(c, 6);
                  e !== 0 && Kr(Jr(d, ps(c, e)), ps(c, e));
                  return d;
                } catch (f) {
                  return null;
                }
              };
              var us = function(a2) {
                try {
                  var b = be(a2).map(function(d) {
                    return d.toString(2).padStart(8, "0");
                  }).join(""), c = new ks(b);
                  return fs(es(ds(cs(bs(as($r(Zr(Yr(Xr(Wr(Vr(Ur(Tr(Sr(Rr(Qr(Pr(Or(new Nr(), ls(c, 6)), ms(c)), ms(c)), ls(c, 12)), ls(c, 12)), ls(c, 6)), ns(c)), ls(c, 12)), ls(c, 6)), !!ls(c, 1)), !!ls(c, 1)), ps(c, 12, js)), ps(c, 24, is)), ps(c, 24, is)), !!ls(c, 1)), ns(c)), qs(c)), qs(c)), rs(c));
                } catch (d) {
                  return null;
                }
              };
              var ws = function(a2) {
                if (!a2)
                  return null;
                var b = a2.split(".");
                if (4 < b.length)
                  return null;
                a2 = us(b[0]);
                if (!a2)
                  return null;
                var c = new gs();
                a2 = Me(c, 1, a2);
                b.shift();
                b = q(b);
                for (c = b.next(); !c.done; c = b.next())
                  switch (c = c.value, vs(c)) {
                    case 1:
                    case 2:
                      break;
                    case 3:
                      c = ts(c);
                      if (!c)
                        return null;
                      Me(a2, 2, c);
                      break;
                    default:
                      return null;
                  }
                return a2;
              }, vs = function(a2) {
                try {
                  var b = be(a2).map(function(c) {
                    return c.toString(2).padStart(8, "0");
                  }).join("");
                  return ls(new ks(b), 3);
                } catch (c) {
                  return -1;
                }
              };
              var xs = function(a2, b) {
                var c = {};
                if (Array.isArray(b) && b.length !== 0) {
                  b = q(b);
                  for (var d = b.next(); !d.done; d = b.next())
                    d = d.value, c[d] = a2.indexOf(d) !== -1;
                } else
                  for (a2 = q(a2), d = a2.next(); !d.done; d = a2.next())
                    c[d.value] = true;
                delete c[0];
                return c;
              };
              var zs = function(a2) {
                B.call(this, a2, -1, ys);
              };
              t(zs, B);
              var ys = [6];
              var As = function(a2) {
                B.call(this, a2);
              };
              t(As, B);
              var Bs = function(a2) {
                B.call(this, a2);
              };
              t(Bs, B);
              var Cs = function(a2) {
                this.g = a2 || {
                  cookie: ""
                };
              };
              l = Cs.prototype;
              l.set = function(a2, b, c) {
                var d = false;
                if (typeof c === "object") {
                  var e = c.Bh;
                  d = c.rf || false;
                  var f = c.domain || void 0;
                  var g = c.path || void 0;
                  var h = c.Hd;
                }
                if (/[;=\s]/.test(a2))
                  throw Error('Invalid cookie name "' + a2 + '"');
                if (/[;\r\n]/.test(b))
                  throw Error('Invalid cookie value "' + b + '"');
                h === void 0 && (h = -1);
                this.g.cookie = a2 + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : h == 0 ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "");
              };
              l.get = function(a2, b) {
                for (var c = a2 + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                  f = kc(d[e]);
                  if (f.lastIndexOf(c, 0) == 0)
                    return f.substr(c.length);
                  if (f == a2)
                    return "";
                }
                return b;
              };
              l.remove = function(a2, b, c) {
                var d = this.get(a2) !== void 0;
                this.set(a2, "", {
                  Hd: 0,
                  path: b,
                  domain: c
                });
                return d;
              };
              l.Vb = function() {
                return Ds(this).keys;
              };
              l.qb = function() {
                return Ds(this).values;
              };
              l.isEmpty = function() {
                return !this.g.cookie;
              };
              l.clear = function() {
                for (var a2 = Ds(this).keys, b = a2.length - 1; 0 <= b; b--)
                  this.remove(a2[b]);
              };
              var Ds = function(a2) {
                a2 = (a2.g.cookie || "").split(";");
                for (var b = [], c = [], d, e, f = 0; f < a2.length; f++)
                  e = kc(a2[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
                return {
                  keys: b,
                  values: c
                };
              };
              function Es(a2) {
                return (a2 = new Cs(a2).get("DATA_USE_CONSENT", "")) ? a2 : null;
              }
              function Fs(a2) {
                var b = (b = new Cs(a2).get("FCCDCF", "")) ? b : null;
                try {
                  var c = b ? xe(As, b ? JSON.parse(b) : null) : null;
                } catch (d) {
                  c = null;
                }
                if (!c)
                  return Es(a2);
                c = Je(c, Bs, 3);
                if (!c || C(c, 1) == null)
                  return Es(a2);
                a2 = C(c, 2);
                b = Date.now();
                if (a2) {
                  if (b < a2 || b > a2 + 33696e6)
                    return null;
                } else
                  return null;
                return C(c, 1);
              }
              ;
              var Hs = function(a2) {
                B.call(this, a2, -1, Gs);
              };
              t(Hs, B);
              var Gs = [1, 2, 3, 4];
              var Is = /^((market|itms|intent|itms-appss):\/\/)/i;
              var P = function(a2, b) {
                this.h = this.A = this.o = "";
                this.I = null;
                this.L = this.g = "";
                this.B = false;
                var c;
                a2 instanceof P ? (this.B = b !== void 0 ? b : a2.B, Js(this, a2.o), this.A = a2.A, this.h = a2.h, Ks(this, a2.I), this.g = a2.g, Ls(this, Ms(a2.l)), this.L = a2.D()) : a2 && (c = String(a2).match(Gf)) ? (this.B = !!b, Js(this, c[1] || "", true), this.A = Ns(c[2] || ""), this.h = Ns(c[3] || "", true), Ks(this, c[4]), this.g = Ns(c[5] || "", true), Ls(this, c[6] || "", true), this.L = Ns(c[7] || "")) : (this.B = !!b, this.l = new Os(null, this.B));
              };
              P.prototype.toString = function() {
                var a2 = [], b = this.o;
                b && a2.push(Ps(b, Qs, true), ":");
                var c = this.h;
                if (c || b == "file")
                  a2.push("//"), (b = this.A) && a2.push(Ps(b, Qs, true), "@"), a2.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, c != null && a2.push(":", String(c));
                if (c = this.g)
                  this.h && c.charAt(0) != "/" && a2.push("/"), a2.push(Ps(c, c.charAt(0) == "/" ? Rs : Ss, true));
                (c = this.l.toString()) && a2.push("?", c);
                (c = this.D()) && a2.push("#", Ps(c, Ts));
                return a2.join("");
              };
              P.prototype.resolve = function(a2) {
                var b = this.G(), c = !!a2.o;
                c ? Js(b, a2.o) : c = !!a2.A;
                c ? b.A = a2.A : c = !!a2.h;
                c ? b.h = a2.h : c = a2.I != null;
                var d = a2.g;
                if (c)
                  Ks(b, a2.I);
                else if (c = !!a2.g) {
                  if (d.charAt(0) != "/")
                    if (this.h && !this.g)
                      d = "/" + d;
                    else {
                      var e = b.g.lastIndexOf("/");
                      e != -1 && (d = b.g.substr(0, e + 1) + d);
                    }
                  e = d;
                  if (e == ".." || e == ".")
                    d = "";
                  else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
                    d = e.lastIndexOf("/", 0) == 0;
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length; ) {
                      var h = e[g++];
                      h == "." ? d && g == e.length && f.push("") : h == ".." ? ((1 < f.length || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = true);
                    }
                    d = f.join("/");
                  } else
                    d = e;
                }
                c ? b.g = d : c = a2.l.toString() !== "";
                c ? Ls(b, Ms(a2.l)) : c = !!a2.L;
                c && (b.L = a2.D());
                return b;
              };
              P.prototype.G = function() {
                return new P(this);
              };
              var Js = function(a2, b, c) {
                a2.o = c ? Ns(b, true) : b;
                a2.o && (a2.o = a2.o.replace(/:$/, ""));
              }, Ks = function(a2, b) {
                if (b) {
                  b = Number(b);
                  if (isNaN(b) || 0 > b)
                    throw Error("Bad port number " + b);
                  a2.I = b;
                } else
                  a2.I = null;
              }, Ls = function(a2, b, c) {
                b instanceof Os ? (a2.l = b, Us(a2.l, a2.B)) : (c || (b = Ps(b, Vs)), a2.l = new Os(b, a2.B));
              }, Ws = function(a2, b, c) {
                a2.l.set(b, c);
                return a2;
              };
              P.prototype.D = function() {
                return this.L;
              };
              var Xs = function(a2) {
                return a2 instanceof P ? a2.G() : new P(a2, void 0);
              }, Ns = function(a2, b) {
                return a2 ? b ? decodeURI(a2.replace(/%25/g, "%2525")) : decodeURIComponent(a2) : "";
              }, Ps = function(a2, b, c) {
                return typeof a2 === "string" ? (a2 = encodeURI(a2).replace(b, Ys), c && (a2 = a2.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a2) : null;
              }, Ys = function(a2) {
                a2 = a2.charCodeAt(0);
                return "%" + (a2 >> 4 & 15).toString(16) + (a2 & 15).toString(16);
              }, Qs = /[#\/\?@]/g, Ss = /[#\?:]/g, Rs = /[#\?]/g, Vs = /[#\?@]/g, Ts = /#/g, Os = function(a2, b) {
                this.h = this.g = null;
                this.l = a2 || null;
                this.o = !!b;
              }, Zs = function(a2) {
                a2.g || (a2.g = new Map(), a2.h = 0, a2.l && If(a2.l, function(b, c) {
                  a2.add(Wc(b), c);
                }));
              };
              Os.prototype.add = function(a2, b) {
                Zs(this);
                this.l = null;
                a2 = $s(this, a2);
                var c = this.g.get(a2);
                c || this.g.set(a2, c = []);
                c.push(b);
                this.h += 1;
                return this;
              };
              Os.prototype.remove = function(a2) {
                Zs(this);
                a2 = $s(this, a2);
                return this.g.has(a2) ? (this.l = null, this.h -= this.g.get(a2).length, this.g.delete(a2)) : false;
              };
              Os.prototype.clear = function() {
                this.g = this.l = null;
                this.h = 0;
              };
              Os.prototype.isEmpty = function() {
                Zs(this);
                return this.h == 0;
              };
              var at = function(a2, b) {
                Zs(a2);
                b = $s(a2, b);
                return a2.g.has(b);
              };
              l = Os.prototype;
              l.forEach = function(a2, b) {
                Zs(this);
                this.g.forEach(function(c, d) {
                  c.forEach(function(e) {
                    a2.call(b, e, d, this);
                  }, this);
                }, this);
              };
              l.Vb = function() {
                Zs(this);
                for (var a2 = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
                  for (var e = a2[d], f = 0; f < e.length; f++)
                    c.push(b[d]);
                return c;
              };
              l.qb = function(a2) {
                Zs(this);
                var b = [];
                if (typeof a2 === "string")
                  at(this, a2) && (b = b.concat(this.g.get($s(this, a2))));
                else {
                  a2 = Array.from(this.g.values());
                  for (var c = 0; c < a2.length; c++)
                    b = b.concat(a2[c]);
                }
                return b;
              };
              l.set = function(a2, b) {
                Zs(this);
                this.l = null;
                a2 = $s(this, a2);
                at(this, a2) && (this.h -= this.g.get(a2).length);
                this.g.set(a2, [b]);
                this.h += 1;
                return this;
              };
              l.get = function(a2, b) {
                if (!a2)
                  return b;
                a2 = this.qb(a2);
                return 0 < a2.length ? String(a2[0]) : b;
              };
              l.toString = function() {
                if (this.l)
                  return this.l;
                if (!this.g)
                  return "";
                for (var a2 = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                  var d = b[c], e = encodeURIComponent(String(d));
                  d = this.qb(d);
                  for (var f = 0; f < d.length; f++) {
                    var g = e;
                    d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                    a2.push(g);
                  }
                }
                return this.l = a2.join("&");
              };
              var Ms = function(a2) {
                var b = new Os();
                b.l = a2.l;
                a2.g && (b.g = new Map(a2.g), b.h = a2.h);
                return b;
              }, $s = function(a2, b) {
                b = String(b);
                a2.o && (b = b.toLowerCase());
                return b;
              }, Us = function(a2, b) {
                b && !a2.o && (Zs(a2), a2.l = null, a2.g.forEach(function(c, d) {
                  var e = d.toLowerCase();
                  d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.l = null, this.g.set($s(this, e), Bb(c)), this.h += c.length));
                }, a2));
                a2.o = b;
              };
              var bt = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "), ct = /\bocr\b/, dt = 0, et = {}, ft = function(a2) {
                if (jc(Zc(a2)))
                  return false;
                if (0 <= a2.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"))
                  return true;
                try {
                  var b = new P(a2);
                } catch (c) {
                  return tb(bt, function(d) {
                    return 0 < a2.search(d);
                  }) != null;
                }
                return b.D().match(ct) ? true : tb(bt, function(c) {
                  return a2.match(c) != null;
                }) != null;
              }, jt = function(a2) {
                if (a2 && (a2 = gt(a2), !jc(a2))) {
                  var b = 'javascript:"<body><img src=\\""+' + a2 + '+"\\"></body>"';
                  ht(function(c) {
                    it(c ? b : 'javascript:"<body><object data=\\""+' + a2 + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"');
                  });
                }
              }, it = function(a2) {
                var b = yf("IFRAME", {
                  src: a2,
                  style: "display:none"
                });
                a2 = of(b).body;
                var c = ik(function() {
                  zj(d);
                  zf(b);
                }, 15e3);
                var d = qj(b, [
                  "load",
                  "error"
                ], function() {
                  ik(function() {
                    u.clearTimeout(c);
                    zf(b);
                  }, 5e3);
                });
                a2.appendChild(b);
              }, ht = function(a2) {
                var b = et.imageLoadingEnabled;
                if (b != null)
                  a2(b);
                else {
                  var c = false;
                  kt(function(d, e) {
                    delete et[e];
                    c || (c = true, et.imageLoadingEnabled == null && (et.imageLoadingEnabled = d), a2(d));
                  });
                }
              }, kt = function(a2) {
                var b = new Image(), c = "" + dt++;
                et[c] = b;
                b.onload = function() {
                  clearTimeout(d);
                  a2(true, c);
                };
                var d = setTimeout(function() {
                  a2(false, c);
                }, 300);
                b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
              }, lt = function(a2) {
                if (a2) {
                  var b = wf(document, "OBJECT");
                  b.data = a2;
                  b.width = "1";
                  b.height = "1";
                  b.style.visibility = "hidden";
                  var c = "" + dt++;
                  et[c] = b;
                  b.onload = b.onerror = function() {
                    delete et[c];
                  };
                  document.body.appendChild(b);
                }
              }, mt = function(a2) {
                if (a2) {
                  var b = new Image(), c = "" + dt++;
                  et[c] = b;
                  b.onload = b.onerror = function() {
                    delete et[c];
                  };
                  b.src = a2;
                }
              }, nt = function(a2) {
                a2 && ht(function(b) {
                  b ? mt(a2) : lt(a2);
                });
              }, gt = function(a2) {
                if (!(a2 instanceof wc))
                  if (a2 = typeof a2 == "object" && a2.Qa ? a2.Ga() : String(a2), Ac.test(a2))
                    a2 = new wc(a2, vc);
                  else {
                    a2 = String(a2);
                    a2 = a2.replace(/(%0A|%0D)/g, "");
                    var b = a2.match(zc);
                    a2 = b && yc.test(b[1]) ? new wc(a2, vc) : null;
                  }
                b = xc(a2 || Bc);
                if (b === "about:invalid#zClosurez")
                  return "";
                if (b instanceof Nc)
                  a2 = b;
                else {
                  var c = typeof b == "object";
                  a2 = null;
                  c && b.Fc && (a2 = b.Bc());
                  b = c && b.Qa ? b.Ga() : String(b);
                  rc.test(b) && (b.indexOf("&") != -1 && (b = b.replace(lc, "&amp;")), b.indexOf("<") != -1 && (b = b.replace(mc, "&lt;")), b.indexOf(">") != -1 && (b = b.replace(nc, "&gt;")), b.indexOf('"') != -1 && (b = b.replace(oc, "&quot;")), b.indexOf("'") != -1 && (b = b.replace(pc, "&#39;")), b.indexOf("\0") != -1 && (b = b.replace(qc, "&#0;")));
                  a2 = Pc(b, a2);
                }
                a2 = Oc(a2).toString();
                return encodeURIComponent(String(Kh(new Ih(void 0), a2)));
              };
              var ot = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
              var pt = function(a2) {
                var b = a2.La, c = a2.height, d = a2.width, e = a2.Aa === void 0 ? false : a2.Aa;
                this.Va = a2.Va;
                this.La = b;
                this.height = c;
                this.width = d;
                this.Aa = e;
              };
              pt.prototype.getHeight = function() {
                return this.height;
              };
              pt.prototype.getWidth = function() {
                return this.width;
              };
              var qt = function(a2) {
                var b = a2.yf, c = a2.ve, d = a2.xf, e = a2.ue;
                pt.call(this, {
                  Va: a2.Va,
                  La: a2.La,
                  height: a2.height,
                  width: a2.width,
                  Aa: a2.Aa === void 0 ? false : a2.Aa
                });
                this.o = b;
                this.h = c;
                this.l = d;
                this.g = e;
              };
              t(qt, pt);
              var rt = function(a2) {
                var b = a2.bf;
                pt.call(this, {
                  Va: a2.Va,
                  La: a2.La,
                  height: a2.height,
                  width: a2.width,
                  Aa: a2.Aa === void 0 ? false : a2.Aa
                });
                this.g = b;
              };
              t(rt, pt);
              rt.prototype.getMediaUrl = function() {
                return this.g;
              };
              var tt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), ut = function() {
                for (var a2 = Array(36), b = 0, c, d = 0; 36 > d; d++)
                  d == 8 || d == 13 || d == 18 || d == 23 ? a2[d] = "-" : d == 14 ? a2[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a2[d] = tt[d == 19 ? c & 3 | 8 : c]);
                return a2.join("");
              };
              function vt(a2, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                  c[d - 1] = arguments[d];
                return new (Function.prototype.bind.apply(a2, [null].concat(ha(c))))();
              }
              ;
              var Q = {}, wt = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q), R = {}, xt = (R[18] = false, R[22] = false, R[43] = true, R[44] = true, R[45] = true, R[59] = false, R[133] = true, R[134] = true, R[135] = true, R[136] = true, R[139] = true, R[140] = true, R[141] = true, R[160] = true, R[242] = true, R[243] = true, R[244] = true, R[245] = true, R[249] = true, R[250] = true, R[251] = true, R[278] = true, R[342] = false, R[343] = false, R[344] = false, R[345] = false, R[346] = false, R[347] = false, R), S = {}, yt = (S[18] = "video/mp4", S[22] = "video/mp4", S[43] = "video/webm", S[44] = "video/webm", S[45] = "video/webm", S[59] = "video/mp4", S[133] = "video/mp4", S[134] = "video/mp4", S[135] = "video/mp4", S[136] = "video/mp4", S[139] = "audio/mp4", S[140] = "audio/mp4", S[141] = "audio/mp4", S[160] = "video/mp4", S[242] = "video/webm", S[243] = "video/webm", S[244] = "video/webm", S[245] = "video/webm", S[249] = "audio/webm", S[250] = "audio/webm", S[251] = "audio/webm", S[278] = "video/webm", S[342] = "video/mp4", S[343] = "video/mp4", S[344] = "video/mp4", S[345] = "video/mp4", S[346] = "video/mp4", S[347] = "video/mp4", S), T = {}, zt = (T[18] = "avc1.42001E, mp4a.40.2", T[22] = "avc1.64001F, mp4a.40.2", T[43] = "vp8, vorbis", T[44] = "vp8, vorbis", T[45] = "vp8, vorbis", T[59] = "avc1.4D001F, mp4a.40.2", T[133] = "avc1.4D401E", T[134] = "avc1.4D401E", T[135] = "avc1.4D401E", T[136] = "avc1.4D401E", T[139] = "mp4a.40.2", T[140] = "mp4a.40.2", T[141] = "mp4a.40.2", T[160] = "avc1.4D401E", T[242] = "vp9", T[243] = "vp9", T[244] = "vp9", T[245] = "vp9", T[249] = "opus", T[250] = "opus", T[251] = "opus", T[278] = "vp9", T[342] = "avc1.42E01E, mp4a.40.2", T[343] = "avc1.42E01E, mp4a.40.2", T[344] = "avc1.42E01E, mp4a.40.2", T[345] = "avc1.42E01E, mp4a.40.2", T[346] = "avc1.42E01E, mp4a.40.2", T[347] = "avc1.4D001F, mp4a.40.2", T);
              var At = function() {
              };
              At.prototype.g = null;
              var Ct = function(a2) {
                var b;
                (b = a2.g) || (b = {}, Bt(a2) && (b[0] = true, b[1] = true), b = a2.g = b);
                return b;
              };
              var Dt, Et = function() {
              };
              Za(Et, At);
              var Ft = function(a2) {
                return (a2 = Bt(a2)) ? new ActiveXObject(a2) : new XMLHttpRequest();
              }, Bt = function(a2) {
                if (!a2.h && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
                  for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                      return new ActiveXObject(d), a2.h = d;
                    } catch (e) {
                    }
                  }
                  throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                return a2.h;
              };
              Dt = new Et();
              var Gt = function(a2) {
                M.call(this);
                this.headers = new Map();
                this.H = a2 || null;
                this.h = false;
                this.G = this.g = null;
                this.M = "";
                this.o = 0;
                this.l = this.K = this.A = this.J = false;
                this.D = 0;
                this.C = null;
                this.$ = "";
                this.T = this.V = false;
                this.R = null;
              };
              Za(Gt, M);
              var Ht = /^https?$/i, It = ["POST", "PUT"];
              Gt.prototype.X = function(a2) {
                this.R = a2;
              };
              var Mt = function(a2, b, c, d) {
                if (a2.g)
                  throw Error("[goog.net.XhrIo] Object is active with another request=" + a2.M + "; newUri=" + b);
                c = c ? c.toUpperCase() : "GET";
                a2.M = b;
                a2.o = 0;
                a2.J = false;
                a2.h = true;
                a2.g = a2.H ? Ft(a2.H) : Ft(Dt);
                a2.G = a2.H ? Ct(a2.H) : Ct(Dt);
                a2.g.onreadystatechange = Wa(a2.Y, a2);
                try {
                  a2.K = true, a2.g.open(c, String(b), true), a2.K = false;
                } catch (g) {
                  Jt(a2);
                  return;
                }
                b = d || "";
                d = new Map(a2.headers);
                var e = Array.from(d.keys()).find(function(g) {
                  return g.toLowerCase() == "content-type";
                }), f = u.FormData && b instanceof u.FormData;
                !wb(It, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                c = q(d);
                for (d = c.next(); !d.done; d = c.next())
                  e = q(d.value), d = e.next().value, e = e.next().value, a2.g.setRequestHeader(d, e);
                a2.$ && (a2.g.responseType = a2.$);
                "withCredentials" in a2.g && a2.g.withCredentials !== a2.V && (a2.g.withCredentials = a2.V);
                if ("setTrustToken" in a2.g && a2.R)
                  try {
                    a2.g.setTrustToken(a2.R);
                  } catch (g) {
                  }
                try {
                  Kt(a2), 0 < a2.D && (a2.T = Lt(a2.g), a2.T ? (a2.g.timeout = a2.D, a2.g.ontimeout = Wa(a2.aa, a2)) : a2.C = ik(a2.aa, a2.D, a2)), a2.A = true, a2.g.send(b), a2.A = false;
                } catch (g) {
                  Jt(a2);
                }
              }, Lt = function(a2) {
                return vd && Md(9) && typeof a2.timeout === "number" && a2.ontimeout !== void 0;
              };
              Gt.prototype.aa = function() {
                typeof Ja != "undefined" && this.g && (this.o = 8, this.dispatchEvent("timeout"), this.abort(8));
              };
              var Jt = function(a2) {
                a2.h = false;
                a2.g && (a2.l = true, a2.g.abort(), a2.l = false);
                a2.o = 5;
                Nt(a2);
                Ot(a2);
              }, Nt = function(a2) {
                a2.J || (a2.J = true, a2.dispatchEvent("complete"), a2.dispatchEvent("error"));
              };
              Gt.prototype.abort = function(a2) {
                this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.o = a2 || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ot(this));
              };
              Gt.prototype.N = function() {
                this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Ot(this, true));
                Gt.ya.N.call(this);
              };
              Gt.prototype.Y = function() {
                this.Ra() || (this.K || this.A || this.l ? Pt(this) : this.da());
              };
              Gt.prototype.da = function() {
                Pt(this);
              };
              var Pt = function(a2) {
                if (a2.h && typeof Ja != "undefined" && (!a2.G[1] || Qt(a2) != 4 || Rt(a2) != 2)) {
                  if (a2.A && Qt(a2) == 4)
                    ik(a2.Y, 0, a2);
                  else if (a2.dispatchEvent("readystatechange"), Qt(a2) == 4) {
                    a2.h = false;
                    try {
                      var b = Rt(a2);
                      a:
                        switch (b) {
                          case 200:
                          case 201:
                          case 202:
                          case 204:
                          case 206:
                          case 304:
                          case 1223:
                            var c = true;
                            break a;
                          default:
                            c = false;
                        }
                      var d;
                      if (!(d = c)) {
                        var e;
                        if (e = b === 0) {
                          var f = String(a2.M).match(Gf)[1] || null;
                          if (!f && u.self && u.self.location) {
                            var g = u.self.location.protocol;
                            f = g.substr(0, g.length - 1);
                          }
                          e = !Ht.test(f ? f.toLowerCase() : "");
                        }
                        d = e;
                      }
                      d ? (a2.dispatchEvent("complete"), a2.dispatchEvent("success")) : (a2.o = 6, Nt(a2));
                    } finally {
                      Ot(a2);
                    }
                  }
                }
              }, Ot = function(a2, b) {
                if (a2.g) {
                  Kt(a2);
                  var c = a2.g, d = a2.G[0] ? La : null;
                  a2.g = null;
                  a2.G = null;
                  b || a2.dispatchEvent("ready");
                  try {
                    c.onreadystatechange = d;
                  } catch (e) {
                  }
                }
              }, Kt = function(a2) {
                a2.g && a2.T && (a2.g.ontimeout = null);
                a2.C && (u.clearTimeout(a2.C), a2.C = null);
              };
              Gt.prototype.Ic = function() {
                return !!this.g;
              };
              var Qt = function(a2) {
                return a2.g ? a2.g.readyState : 0;
              }, Rt = function(a2) {
                try {
                  return 2 < Qt(a2) ? a2.g.status : -1;
                } catch (b) {
                  return -1;
                }
              }, St = function(a2) {
                try {
                  return a2.g ? a2.g.responseText : "";
                } catch (b) {
                  return "";
                }
              }, Tt = function(a2) {
                if (a2.g) {
                  a: {
                    a2 = a2.g.responseText;
                    if (u.JSON)
                      try {
                        var b = u.JSON.parse(a2);
                        break a;
                      } catch (c) {
                      }
                    b = Hh(a2);
                  }
                  return b;
                }
              }, Ut = function(a2, b) {
                if (a2.g && Qt(a2) == 4)
                  return a2 = a2.g.getResponseHeader(b), a2 === null ? void 0 : a2;
              };
              var Vt = RegExp("/itag/(\\d+)/");
              function Wt(a2) {
                var b = parseInt(Kf(a2, "itag"), 10);
                return b ? b : (a2 = a2.match(Vt)) && a2.length == 2 ? parseInt(a2[1], 10) : null;
              }
              function Xt(a2) {
                var b = yt[a2];
                a2 = zt[a2];
                b ? (b = Zc(b).toLowerCase(), b = a2 ? b + '; codecs="' + Zc(a2) + '"' : b) : b = "";
                return b;
              }
              function Yt(a2, b) {
                if (typeof CustomEvent === "function")
                  return new CustomEvent(a2, {
                    detail: b
                  });
                var c = document.createEvent("CustomEvent");
                c.initCustomEvent(a2, false, true, b);
                return c;
              }
              ;
              var Zt = -1;
              var $t = function() {
                this.g = Date.now();
              };
              $t.prototype.reset = function() {
                this.g = Date.now();
              };
              var au = function(a2) {
                a2 = a2.g + 5e3 - Date.now();
                return 0 < a2 ? a2 : 0;
              };
              var bu = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "), cu = ["c.googlesyndication.com"];
              function du(a2, b) {
                b = b === void 0 ? window.location.protocol : b;
                var c = false;
                eu(a2, cu) ? c = false : b.includes("https") && eu(a2, bu) && (c = true);
                if (c) {
                  b = new P(a2);
                  if (b.o == "https")
                    return a2;
                  I(J(), "htp", "1");
                  Js(b, "https");
                  return b.toString();
                }
                return a2;
              }
              function eu(a2, b) {
                return new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i").test(a2);
              }
              ;
              var fu = function(a2) {
                return (a2 = a2.exec(Fc)) ? a2[1] : "";
              };
              (function() {
                if (Qd)
                  return fu(/Firefox\/([0-9.]+)/);
                if (vd || wd || ud)
                  return Ld;
                if (Ud) {
                  if (pd() || A("Macintosh")) {
                    var a2 = fu(/CriOS\/([0-9.]+)/);
                    if (a2)
                      return a2;
                  }
                  return fu(/Chrome\/([0-9.]+)/);
                }
                if (Vd && !pd())
                  return fu(/Version\/([0-9.]+)/);
                if (Rd || Sd) {
                  if (a2 = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fc))
                    return a2[1] + "." + a2[2];
                } else if (Td)
                  return (a2 = fu(/Android\s+([0-9.]+)/)) ? a2 : fu(/Version\/([0-9.]+)/);
                return "";
              })();
              var gu = /OS (\S+) like/, hu = /Android ([\d\.]+)/;
              function iu(a2, b) {
                a2 = (a2 = a2.exec(Fc)) ? a2[1] : "";
                a2 = a2.replace(/_/g, ".");
                return 0 <= uc(a2, b);
              }
              var ju = function() {
                return zd && "ontouchstart" in document.documentElement;
              }, ku = function(a2) {
                return Fd && iu(gu, a2);
              }, lu = function(a2) {
                return (a2 = a2 === void 0 ? null : a2) && typeof a2.getAttribute === "function" ? a2.getAttribute("playsinline") ? true : false : false;
              };
              var mu = function(a2) {
                var b = Error.call(this, a2);
                this.message = b.message;
                "stack" in b && (this.stack = b.stack);
                this.errorCode = a2;
              };
              t(mu, Error);
              var ou = function(a2) {
                nu();
                return Pc(a2, null);
              }, nu = La;
              var pu = function() {
                if (!vd)
                  return false;
                try {
                  return new ActiveXObject("MSXML2.DOMDocument"), true;
                } catch (a2) {
                  return false;
                }
              }, qu = vd && pu();
              var ru = function(a2) {
                L.call(this);
                this.o = a2;
                this.h = {};
              };
              Za(ru, L);
              var tu = [];
              ru.prototype.O = function(a2, b, c, d) {
                return uu(this, a2, b, c, d);
              };
              var uu = function(a2, b, c, d, e, f) {
                Array.isArray(c) || (c && (tu[0] = c.toString()), c = tu);
                for (var g = 0; g < c.length; g++) {
                  var h = rj(b, c[g], d || a2.handleEvent, e || false, f || a2.o || a2);
                  if (!h)
                    break;
                  a2.h[h.key] = h;
                }
                return a2;
              };
              ru.prototype.Gb = function(a2, b, c, d) {
                return vu(this, a2, b, c, d);
              };
              var vu = function(a2, b, c, d, e, f) {
                if (Array.isArray(c))
                  for (var g = 0; g < c.length; g++)
                    vu(a2, b, c[g], d, e, f);
                else {
                  b = qj(b, c, d || a2.handleEvent, e, f || a2.o || a2);
                  if (!b)
                    return a2;
                  a2.h[b.key] = b;
                }
                return a2;
              };
              ru.prototype.Ua = function(a2, b, c, d, e) {
                if (Array.isArray(b))
                  for (var f = 0; f < b.length; f++)
                    this.Ua(a2, b[f], c, d, e);
                else
                  c = c || this.handleEvent, d = Na(d) ? !!d.capture : !!d, e = e || this.o || this, c = sj(c), d = !!d, b = gj(a2) ? a2.Cb(b, c, d, e) : a2 ? (a2 = uj(a2)) ? a2.Cb(b, c, d, e) : null : null, b && (zj(b), delete this.h[b.key]);
              };
              var wu = function(a2) {
                Gb(a2.h, function(b, c) {
                  this.h.hasOwnProperty(c) && zj(b);
                }, a2);
                a2.h = {};
              };
              ru.prototype.N = function() {
                ru.ya.N.call(this);
                wu(this);
              };
              ru.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented");
              };
              var xu = function() {
              };
              xu.prototype.get = function(a2) {
                return yu({
                  url: a2.url,
                  timeout: a2.timeout,
                  withCredentials: a2.withCredentials === void 0 ? true : a2.withCredentials,
                  method: "GET",
                  Ka: a2.Ka === void 0 ? void 0 : a2.Ka
                });
              };
              var yu = function(a2) {
                var b = a2.url, c = a2.timeout, d = a2.withCredentials, e = a2.method, f = a2.content === void 0 ? void 0 : a2.content, g = a2.Ka === void 0 ? void 0 : a2.Ka, h = a2.headers === void 0 ? {} : a2.headers;
                return zu({
                  url: b,
                  timeout: c,
                  withCredentials: d,
                  method: e,
                  content: f,
                  Ka: g,
                  headers: h
                }).then(function(k) {
                  return Promise.resolve(k);
                }, function(k) {
                  return k instanceof Error && k.message == 6 && d ? zu({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    Ka: g,
                    headers: h
                  }) : Promise.reject(k);
                });
              }, zu = function(a2) {
                var b = a2.url, c = a2.timeout, d = a2.withCredentials, e = a2.method, f = a2.content === void 0 ? void 0 : a2.content, g = a2.Ka === void 0 ? void 0 : a2.Ka;
                a2 = a2.headers === void 0 ? {} : a2.headers;
                var h = new Gt();
                h.V = d;
                h.D = Math.max(0, au(c));
                h.X && g && h.X(g);
                for (var k in a2)
                  h.headers.set(k, a2[k]);
                var n = new ru();
                return new Promise(function(m, v) {
                  n.Gb(h, "success", function() {
                    a: {
                      if (Rm())
                        try {
                          Tt(h);
                          var r = "application/json";
                          break a;
                        } catch (Qa) {
                          r = "application/xml";
                          break a;
                        }
                      r = Ut(h, "Content-Type") || "";
                    }
                    if (r.indexOf("application/json") != -1)
                      m(Tt(h) || {});
                    else {
                      try {
                        var w = h.g ? h.g.responseXML : null;
                      } catch (Qa) {
                        w = null;
                      }
                      if (w == null)
                        if (w = St(h), typeof DOMParser != "undefined")
                          r = new DOMParser(), w = ou(w), w = r.parseFromString(Oc(w), "application/xml");
                        else if (qu) {
                          r = new ActiveXObject("MSXML2.DOMDocument");
                          r.resolveExternals = false;
                          r.validateOnParse = false;
                          try {
                            r.setProperty("ProhibitDTD", true), r.setProperty("MaxXMLSize", 2048), r.setProperty("MaxElementDepth", 256);
                          } catch (Qa) {
                          }
                          r.loadXML(w);
                          w = r;
                        } else
                          throw Error("Your browser does not support loading xml documents");
                      r = Vh(Ji);
                      var x;
                      if (x = w && w.documentElement)
                        (x = w.documentElement) && !x.nodeName != "VAST" ? (x = x.getAttribute("version")) ? (x = parseInt(x, 10), x = x == null || isNaN(x) ? null : x) : x = null : x = null, x = x == null || 2 > x || 4 < x ? false : true;
                      if (!x && r) {
                        r = {
                          vastUrl: b.substring(0, 200),
                          responseText: St(h).substring(0, 200),
                          status: Rt(h),
                          origin: window.location.origin
                        };
                        Rm() || (r.contentType = Ut(h, "Content-Type"), r.acao = Ut(h, "Access-Control-Allow-Origin"), r.acac = Ut(h, "Access-Control-Allow-Credentials"));
                        x = J();
                        for (var G = q(Object.keys(r)), la = G.next(); !la.done; la = G.next())
                          la = la.value, I(x, la, r[la]);
                      }
                      m(w);
                    }
                    n.W();
                    h.W();
                  });
                  n.Gb(h, ["error", "timeout"], function() {
                    v(new mu(h.o, Rt(h)));
                    n.W();
                    h.W();
                  });
                  Mt(h, du(b), e, f);
                });
              };
              function Au(a2, b) {
                return jc(b) ? false : new RegExp(a2).test(b);
              }
              function Bu(a2) {
                var b = {};
                a2.split(",").forEach(function(c) {
                  var d = c.split("=");
                  d.length == 2 && (c = kc(d[0]), d = kc(d[1]), 0 < c.length && (b[c] = d));
                });
                return b;
              }
              function Cu(a2) {
                var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
                if (!a2)
                  return null;
                a2 = a2.toLowerCase().replace("-", "_");
                if (b.includes(a2))
                  return a2;
                a2 = (a2 = a2.match(/^\w{2,3}([-_]|$)/)) ? a2[0].replace(/[_-]/g, "") : "";
                return b.includes(a2) ? a2 : null;
              }
              ;
              var Eu = function(a2) {
                P.call(this, a2);
                this.C = new Map();
                a2 = this.g;
                var b = a2.indexOf(";"), c = null;
                0 <= b ? (this.g = a2.substring(0, b), c = a2.substring(b + 1)) : this.g = a2;
                Du(this, c);
              };
              t(Eu, P);
              Eu.prototype.toString = function() {
                return Fu(this, P.prototype.toString.call(this));
              };
              Eu.prototype.D = function() {
                return "";
              };
              var Du = function(a2, b) {
                jc(Zc(b)) || b.split(";").forEach(function(c) {
                  var d = c.indexOf("=");
                  if (!(0 >= d)) {
                    var e = Wc(c.substring(0, d));
                    c = Wc(c.substring(d + 1));
                    d = a2.C.get(e);
                    d != null ? d.includes(c) || d.push(c) : d = [Zc(c)];
                    a2.C.set(e, d);
                  }
                }, a2);
              }, Gu = function(a2) {
                if (jc(Zc("ord")))
                  return null;
                a2 = a2.C.get("ord");
                return a2 != null ? a2 : null;
              }, Hu = function(a2, b) {
                jc(Zc("ord")) || (b = b.map(Zc), a2.C.set("ord", b));
              }, Fu = function(a2, b) {
                b = [Zc(b)];
                b.push.apply(b, ha(Iu(a2)));
                return b.join(";");
              }, Iu = function(a2) {
                var b = Gu(a2);
                b == null ? b = [Zc(Date.now())] : jc(Zc("ord")) || a2.C.delete("ord");
                var c = [];
                a2.C.forEach(function(d, e) {
                  d.forEach(function(f) {
                    c.push(e + "=" + f);
                  });
                });
                c.push("ord=" + b[0]);
                Hu(a2, b);
                return c;
              };
              Eu.prototype.G = function() {
                return new Eu(this.toString());
              };
              var Ju, Ku, Mu, Nu = function() {
                return u.navigator ? u.navigator.userAgent : "";
              }, Ou = Nu().indexOf("(iPad") != -1 || Nu().indexOf("(Macintosh") != -1 || Nu().indexOf("(iPod") != -1 || Nu().indexOf("(iPhone") != -1;
              function Pu(a2, b) {
                b = b === void 0 ? "" : b;
                vd && (b = "");
                if (!jc(Zc(a2))) {
                  var c = a2 instanceof wc || !Is.test(a2) ? a2 : new wc(a2, vc);
                  if (c instanceof wc)
                    a2 = c;
                  else {
                    var d = d === void 0 ? ig : d;
                    a: {
                      d = d === void 0 ? ig : d;
                      for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof gg && e.$e(a2)) {
                          a2 = new Xe(a2, Se);
                          break a;
                        }
                      }
                      a2 = void 0;
                    }
                    a2 = a2 || Ye;
                  }
                  window.open(cf(a2), "_blank", b);
                }
              }
              ;
              var Qu = function(a2) {
                M.call(this);
                this.g = a2;
                this.o = this.A = false;
                this.C = this.D = 0;
                this.h = new hk(1e3);
                aj(this, this.h);
                rj(this.h, "tick", this.G, false, this);
                rj(this.g, "pause", this.l, false, this);
                rj(this.g, "playing", this.l, false, this);
                rj(this.g, "ended", this.l, false, this);
                rj(this.g, "timeupdate", this.l, false, this);
              };
              t(Qu, M);
              Qu.prototype.l = function(a2) {
                switch (a2.type) {
                  case "playing":
                    Ru(this);
                    break;
                  case "pause":
                  case "ended":
                    this.h.jb && this.h.stop();
                    break;
                  case "timeupdate":
                    !this.A && 0 < this.g.currentTime && (this.A = true, Ru(this));
                }
              };
              var Ru = function(a2) {
                !a2.h.jb && a2.A && (a2.D = 1e3 * a2.g.currentTime, a2.C = Date.now(), a2.o = false, a2.h.start());
              };
              Qu.prototype.G = function() {
                var a2 = Date.now(), b = 1e3 * this.g.currentTime;
                b - this.D < 0.5 * (a2 - this.C) ? this.o || (this.o = true, this.dispatchEvent("playbackStalled")) : this.o = false;
                this.D = b;
                this.C = a2;
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
              var Uu = function(a2) {
                this.g = a2;
                this.h = Tu(a2);
              }, Tu = function(a2) {
                return new Map(a2.g.split("/").reduce(function(b, c, d) {
                  d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                  return b;
                }, []));
              };
              Uu.prototype.getId = function() {
                return Vu(this, "id");
              };
              var Vu = function(a2, b) {
                var c = a2.g.l.get(b);
                return c ? c : (a2 = a2.h.get(b)) ? a2 : null;
              };
              var Wu = function() {
              };
              var Xu = ["doubleclick.net"];
              function Yu() {
                if (pd())
                  return false;
                if (A("Android")) {
                  if (Mu === void 0) {
                    a: {
                      if (Ju === void 0) {
                        if (Ou) {
                          var a2 = Nu().indexOf("Safari") != -1;
                          var b = new P(window.location.href).l.qb("js");
                          b: {
                            if ((b = b.length ? b[0] : "") && b.lastIndexOf("afma-", 0) == 0) {
                              var c = b.lastIndexOf("v");
                              if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                b = b[1];
                                break b;
                              }
                            }
                            b = "0.0.0";
                          }
                          if (!a2 || b !== "0.0.0") {
                            a2 = Ju = true;
                            break a;
                          }
                        }
                        Ju = false;
                      }
                      a2 = Ju;
                    }
                    a2 || (Ku === void 0 && (Ku = Nu().indexOf("afma-sdk-a") != -1 ? true : false), a2 = Ku);
                    Mu = a2;
                  }
                  return Mu ? true : Ef() ? false : Zu();
                }
                a2 = A("Macintosh") || A("Linux") || A("Windows") || A("CrOS");
                return (Vh(Ni) || Vh(Li) || Vh(Mi)) && a2 && Lc() ? Zu() : false;
              }
              function Zu() {
                var a2 = false, b = new P(window.location.href).h;
                Xu.forEach(function(c) {
                  b.includes(c) && (a2 = true);
                });
                return a2;
              }
              function $u(a2) {
                for (var b = 0, c = 0; c < a2.length; c++)
                  b = Math.imul(31, b) + a2.charCodeAt(c) | 0;
                return b.toString();
              }
              ;
              var av, dv = function(a2, b, c) {
                if (typeof a2 === "number")
                  var d = {
                    name: bv(a2)
                  };
                else
                  d = a2, a2 = cv(a2.name);
                this.code = a2;
                this.g = d;
                b = "Error " + b + ": " + this.getName();
                c && (b += ", " + c);
                bb.call(this, b);
              };
              Za(dv, bb);
              dv.prototype.getName = function() {
                return this.g.name || "";
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
              }, fv = (u.g || u.h || ev).pe, gv = (u.g || u.h || ev).NOT_FOUND_ERR, hv = (u.g || u.h || ev).Vd, iv = (u.g || u.h || ev).Yd, jv = (u.g || u.h || ev).oe, kv = (u.g || u.h || ev).ABORT_ERR, lv = (u.g || u.h || ev).me, mv = (u.g || u.h || ev).TIMEOUT_ERR, nv = (u.g || u.h || ev).le, ov = (u.DOMException || ev).INVALID_ACCESS_ERR, pv = (u.DOMException || ev).INVALID_STATE_ERR, cv = function(a2) {
                switch (a2) {
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
                    return fv;
                }
              }, bv = function(a2) {
                switch (a2) {
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
                    return "UnknownError";
                }
              }, qv = function(a2, b) {
                return "error" in a2 ? new dv(a2.error, b) : new dv({
                  name: "UnknownError"
                }, b);
              }, rv = function(a2, b) {
                if ("name" in a2)
                  return b = b + ": " + a2.message, new dv(a2, b);
                if ("code" in a2) {
                  var c = bv(a2.code);
                  b = b + ": " + a2.message;
                  return new dv({
                    name: c
                  }, b);
                }
                return new dv({
                  name: "UnknownError"
                }, b);
              };
              var tv = function(a2) {
                this.g = a2;
              }, uv = u.IDBKeyRange || u.webkitIDBKeyRange;
              var vv = function() {
                this.A = [];
                this.B = this.o = false;
                this.l = void 0;
                this.D = this.H = this.I = false;
                this.C = 0;
                this.h = null;
                this.L = 0;
              };
              vv.prototype.cancel = function(a2) {
                if (this.o)
                  this.l instanceof vv && this.l.cancel();
                else {
                  if (this.h) {
                    var b = this.h;
                    delete this.h;
                    a2 ? b.cancel(a2) : (b.L--, 0 >= b.L && b.cancel());
                  }
                  this.D = true;
                  this.o || wv(this, new xv(this));
                }
              };
              vv.prototype.G = function(a2, b) {
                this.I = false;
                yv(this, a2, b);
              };
              var yv = function(a2, b, c) {
                a2.o = true;
                a2.l = c;
                a2.B = !b;
                zv(a2);
              }, Bv = function(a2) {
                if (a2.o) {
                  if (!a2.D)
                    throw new Av(a2);
                  a2.D = false;
                }
              };
              vv.prototype.g = function(a2) {
                Bv(this);
                yv(this, true, a2);
              };
              var wv = function(a2, b) {
                Bv(a2);
                yv(a2, false, b);
              }, Dv = function(a2, b) {
                return Cv(a2, b, null, void 0);
              }, Cv = function(a2, b, c, d) {
                a2.A.push([b, c, d]);
                a2.o && zv(a2);
                return a2;
              };
              vv.prototype.then = function(a2, b, c) {
                var d, e, f = new Sj(function(g, h) {
                  e = g;
                  d = h;
                });
                Cv(this, e, function(g) {
                  g instanceof xv ? f.cancel() : d(g);
                });
                return f.then(a2, b, c);
              };
              vv.prototype.$goog_Thenable = true;
              var Ev = function(a2) {
                return sb(a2.A, function(b) {
                  return typeof b[1] === "function";
                });
              }, zv = function(a2) {
                if (a2.C && a2.o && Ev(a2)) {
                  var b = a2.C, c = Fv[b];
                  c && (u.clearTimeout(c.g), delete Fv[b]);
                  a2.C = 0;
                }
                a2.h && (a2.h.L--, delete a2.h);
                b = a2.l;
                for (var d = c = false; a2.A.length && !a2.I; ) {
                  var e = a2.A.shift(), f = e[0], g = e[1];
                  e = e[2];
                  if (f = a2.B ? g : f)
                    try {
                      var h = f.call(e || null, b);
                      h !== void 0 && (a2.B = a2.B && (h == b || h instanceof Error), a2.l = b = h);
                      if (Qj(b) || typeof u.Promise === "function" && b instanceof u.Promise)
                        d = true, a2.I = true;
                    } catch (k) {
                      b = k, a2.B = true, Ev(a2) || (c = true);
                    }
                }
                a2.l = b;
                d && (h = Wa(a2.G, a2, true), d = Wa(a2.G, a2, false), b instanceof vv ? (Cv(b, h, d), b.H = true) : b.then(h, d));
                c && (b = new Gv(b), Fv[b.g] = b, a2.C = b.g);
              }, Av = function() {
                bb.call(this);
              };
              Za(Av, bb);
              Av.prototype.message = "Deferred has already fired";
              Av.prototype.name = "AlreadyCalledError";
              var xv = function() {
                bb.call(this);
              };
              Za(xv, bb);
              xv.prototype.message = "Deferred was canceled";
              xv.prototype.name = "CanceledError";
              var Gv = function(a2) {
                this.g = u.setTimeout(Wa(this.l, this), 0);
                this.h = a2;
              };
              Gv.prototype.l = function() {
                delete Fv[this.g];
                throw this.h;
              };
              var Fv = {};
              var Hv = function() {
                M.call(this);
              };
              Za(Hv, M);
              Hv.prototype.g = null;
              Hv.prototype.next = function(a2) {
                if (a2)
                  this.g["continue"](a2);
                else
                  this.g["continue"]();
              };
              Hv.prototype.remove = function() {
                var a2 = new vv();
                try {
                  var b = this.g["delete"]();
                } catch (c) {
                  return wv(a2, rv(c, "deleting via cursor")), a2;
                }
                b.onsuccess = function() {
                  a2.g();
                };
                b.onerror = function(c) {
                  wv(a2, qv(c.target, "deleting via cursor"));
                };
                return a2;
              };
              var Iv = function(a2, b) {
                var c = new Hv();
                try {
                  var d = a2.openCursor(b ? b.g : null);
                } catch (e) {
                  throw c.W(), rv(e, a2.name);
                }
                d.onsuccess = function(e) {
                  c.g = e.target.result || null;
                  c.g ? c.dispatchEvent("n") : c.dispatchEvent("c");
                };
                d.onerror = function() {
                  c.dispatchEvent("e");
                };
                return c;
              };
              var Jv = function(a2) {
                this.g = a2;
              };
              Jv.prototype.getName = function() {
                return this.g.name;
              };
              var Kv = function(a2, b, c) {
                var d = new vv();
                try {
                  var e = a2.g.get(c);
                } catch (f) {
                  return b += " with key " + Ch(c), wv(d, rv(f, b)), d;
                }
                e.onsuccess = function(f) {
                  d.g(f.target.result);
                };
                e.onerror = function(f) {
                  b += " with key " + Ch(c);
                  wv(d, qv(f.target, b));
                };
                return d;
              };
              Jv.prototype.get = function(a2) {
                return Kv(this, "getting from index " + this.getName(), a2);
              };
              var Lv = function(a2, b) {
                return Iv(a2.g, b);
              };
              var Mv = function(a2) {
                this.g = a2;
              };
              Mv.prototype.getName = function() {
                return this.g.name;
              };
              var Nv = function(a2, b, c, d, e) {
                var f = new vv();
                try {
                  var g = e ? a2.g[b](d, e) : a2.g[b](d);
                } catch (h) {
                  return c += Ch(d), e && (c += ", with key " + Ch(e)), wv(f, rv(h, c)), f;
                }
                g.onsuccess = function(h) {
                  f.g(h.target.result);
                };
                g.onerror = function(h) {
                  c += Ch(d);
                  e && (c += ", with key " + Ch(e));
                  wv(f, qv(h.target, c));
                };
                return f;
              }, Ov = function(a2, b) {
                return Nv(a2, "put", "putting into " + a2.getName() + " with value", b, void 0);
              };
              Mv.prototype.add = function(a2, b) {
                return Nv(this, "add", "adding into " + this.getName() + " with value ", a2, b);
              };
              Mv.prototype.remove = function(a2) {
                var b = new vv();
                try {
                  var c = this.g["delete"](a2 instanceof tv ? a2.g : a2);
                } catch (e) {
                  return c = "removing from " + this.getName() + " with key " + Ch(a2), wv(b, rv(e, c)), b;
                }
                c.onsuccess = function() {
                  b.g();
                };
                var d = this;
                c.onerror = function(e) {
                  var f = "removing from " + d.getName() + " with key " + Ch(a2);
                  wv(b, qv(e.target, f));
                };
                return b;
              };
              Mv.prototype.get = function(a2) {
                var b = new vv();
                try {
                  var c = this.g.get(a2);
                } catch (e) {
                  return c = "getting from " + this.getName() + " with key " + Ch(a2), wv(b, rv(e, c)), b;
                }
                c.onsuccess = function(e) {
                  b.g(e.target.result);
                };
                var d = this;
                c.onerror = function(e) {
                  var f = "getting from " + d.getName() + " with key " + Ch(a2);
                  wv(b, qv(e.target, f));
                };
                return b;
              };
              Mv.prototype.clear = function() {
                var a2 = "clearing store " + this.getName(), b = new vv();
                try {
                  var c = this.g.clear();
                } catch (d) {
                  return wv(b, rv(d, a2)), b;
                }
                c.onsuccess = function() {
                  b.g();
                };
                c.onerror = function(d) {
                  wv(b, qv(d.target, a2));
                };
                return b;
              };
              var Pv = function(a2) {
                try {
                  return new Jv(a2.g.index("timestamp"));
                } catch (b) {
                  throw rv(b, "getting index timestamp");
                }
              };
              var Qv = function(a2, b) {
                M.call(this);
                this.g = a2;
                this.l = b;
                this.h = new ru(this);
                this.h.O(this.g, "complete", Wa(this.dispatchEvent, this, "complete"));
                this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
                this.h.O(this.g, "error", this.$d);
              };
              Za(Qv, M);
              l = Qv.prototype;
              l.$d = function(a2) {
                a2.target instanceof dv ? this.dispatchEvent({
                  type: "error",
                  target: a2.target
                }) : this.dispatchEvent({
                  type: "error",
                  target: qv(a2.target, "in transaction")
                });
              };
              l.objectStore = function(a2) {
                try {
                  return new Mv(this.g.objectStore(a2));
                } catch (b) {
                  throw rv(b, "getting object store " + a2);
                }
              };
              l.commit = function(a2) {
                if (this.g.commit || !a2)
                  try {
                    this.g.commit();
                  } catch (b) {
                    throw rv(b, "cannot commit the transaction");
                  }
              };
              l.wait = function() {
                var a2 = new vv();
                qj(this, "complete", Wa(a2.g, a2));
                var b = qj(this, "abort", function() {
                  zj(c);
                  wv(a2, new dv(kv, "waiting for transaction to complete"));
                });
                var c = qj(this, "error", function(e) {
                  zj(b);
                  wv(a2, e.target);
                });
                var d = this.l;
                return Dv(a2, function() {
                  return d;
                });
              };
              l.abort = function() {
                this.g.abort();
              };
              l.N = function() {
                Qv.ya.N.call(this);
                this.h.W();
              };
              var Rv = function(a2) {
                M.call(this);
                this.g = a2;
                this.h = new ru(this);
                this.h.O(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
                this.h.O(this.g, "error", this.ae);
                this.h.O(this.g, "versionchange", this.De);
                this.h.O(this.g, "close", Wa(this.dispatchEvent, this, "close"));
              };
              Za(Rv, M);
              l = Rv.prototype;
              l.Pc = true;
              l.ae = function(a2) {
                a2 = (a2 = a2.target) && a2.error;
                this.dispatchEvent({
                  type: "error",
                  errorCode: a2 && a2.severity
                });
              };
              l.De = function(a2) {
                this.dispatchEvent(new Sv(a2.oldVersion, a2.newVersion));
              };
              l.close = function() {
                this.Pc && (this.g.close(), this.Pc = false);
              };
              l.getName = function() {
                return this.g.name;
              };
              l.getVersion = function() {
                return Number(this.g.version);
              };
              var Tv = function(a2) {
                var b = ["MediaSourceVideoChunk"];
                try {
                  var c = a2.g.transaction(b, "readwrite");
                  return new Qv(c, a2);
                } catch (d) {
                  throw rv(d, "creating transaction");
                }
              };
              Rv.prototype.N = function() {
                Rv.ya.N.call(this);
                this.h.W();
              };
              var Sv = function(a2, b) {
                bj.call(this, "versionchange");
                this.oldVersion = a2;
                this.newVersion = b;
              };
              Za(Sv, bj);
              var Uv = function(a2) {
                var b = new vv();
                av == void 0 && (av = u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.moz_indexedDB);
                var c = av.open("VideoChunkPersistentStorage", 5);
                c.onsuccess = function(d) {
                  d = new Rv(d.target.result);
                  b.g(d);
                };
                c.onerror = function(d) {
                  wv(b, qv(d.target, "opening database VideoChunkPersistentStorage"));
                };
                c.onupgradeneeded = function(d) {
                  if (a2) {
                    var e = new Rv(d.target.result);
                    a2(new Sv(d.oldVersion, d.newVersion), e, new Qv(d.target.transaction, e));
                  }
                };
                c.onblocked = function() {
                };
                return b;
              };
              var Vv = {
                sh: "videoId",
                zg: "itag",
                ah: "source",
                bh: "startIndex"
              }, Wv = function() {
                M.call(this);
                this.g = null;
              };
              t(Wv, M);
              Wv.prototype.initialize = function() {
                var a2 = this;
                return Promise.resolve(Uv(this.h)).then(function(b) {
                  return a2.g = b;
                }, function(b) {
                  I(J(), "codf", b.message);
                });
              };
              var Xv = function(a2) {
                return a2.g !== null && a2.g.Pc;
              };
              Wv.prototype.close = function() {
                var a2 = this;
                return new Promise(function(b) {
                  return Yv(a2, b);
                }).then(function() {
                  return Zv();
                }).then(function() {
                  return a2.g.close();
                });
              };
              var Zv = function() {
                return "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate().then(function(a2) {
                  I(J(), "csue", String(a2.usage));
                }) : Promise.resolve(void 0);
              }, cw = function(a2, b) {
                b = $v(b);
                if (!b)
                  return Promise.resolve(null);
                var c = aw(b);
                return bw(a2, c, b.lmt);
              }, ew = function(a2, b, c, d) {
                if (c = $v(c)) {
                  var e = aw(c), f = c.startIndex;
                  dw(a2, {
                    cacheId: e,
                    startIndex: f,
                    endIndex: f + b.byteLength - 1,
                    lmt: c.lmt,
                    timestamp: new Date(Date.now()),
                    isLastVideoChunk: d,
                    video: b
                  });
                } else
                  Promise.resolve(void 0);
              };
              Wv.prototype.h = function(a2, b) {
                if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
                  try {
                    b.g.deleteObjectStore("MediaSourceVideoChunk");
                  } catch (d) {
                    throw rv(d, "deleting object store MediaSourceVideoChunk");
                  }
                a2 = {
                  keyPath: "cacheId"
                };
                try {
                  var c = new Mv(b.g.createObjectStore("MediaSourceVideoChunk", a2));
                } catch (d) {
                  throw rv(d, "creating object store MediaSourceVideoChunk");
                }
                b = {
                  unique: false
                };
                try {
                  c.g.createIndex("timestamp", "timestamp", b);
                } catch (d) {
                  throw rv(d, "creating new index timestamp with key path timestamp");
                }
              };
              var Yv = function(a2, b) {
                var c = new Date(Date.now());
                c.setDate(c.getDate() - 30);
                c = new tv(uv.upperBound(c, void 0));
                var d = Lv(Pv(Tv(a2.g).objectStore("MediaSourceVideoChunk")), c), e = d.O("n", function() {
                  d.remove();
                  d.next();
                });
                qj(d, "c", function() {
                  zj(e);
                  b();
                });
              }, $v = function(a2) {
                var b = new Uu(a2);
                a2 = b.getId();
                var c = Vu(b, "itag"), d = Vu(b, "source"), e = Vu(b, "lmt");
                (b = b.g.l.get("range")) ? (b = b.split("-")[0], b = !b || isNaN(b) ? null : parseInt(b, 10)) : b = null;
                var f = [];
                a2 ? c ? d ? e ? b === null && f.push("startIndex") : f.push("lmt") : f.push("source") : f.push("itag") : f.push("videoId");
                return 0 < f.length ? (I(J(), "civp", f.join("-")), null) : {
                  videoId: a2,
                  itag: c,
                  source: d,
                  lmt: e,
                  startIndex: b + 0
                };
              }, aw = function(a2) {
                var b = Object.keys(Vv).sort().map(function(c) {
                  return a2[Vv[c]];
                }).join(",");
                return $u(b);
              }, bw = function(a2, b, c) {
                var d = Tv(a2.g).objectStore("MediaSourceVideoChunk");
                return Promise.resolve(d.get(b)).then(function(e) {
                  if (!e)
                    return I(J(), "cenf", "1"), null;
                  if (e.lmt !== c)
                    return I(J(), "cdl", "1"), d.remove(b).then(null, function(f) {
                      I(J(), "crdlvf", f.message);
                    }), null;
                  I(J(), "cefml", "1");
                  return {
                    endIndex: e.endIndex,
                    isLastVideoChunk: e.isLastVideoChunk,
                    video: e.video
                  };
                }, function(e) {
                  I(J(), "cgvf", e.message);
                });
              }, dw = function(a2, b) {
                a2 = Tv(a2.g).objectStore("MediaSourceVideoChunk");
                Promise.resolve(Ov(a2, b)).then(function() {
                  I(J(), "cavs", "1");
                }, function(c) {
                  I(J(), "cavf", c.message);
                });
              };
              var fw = function(a2) {
                M.call(this);
                var b = this;
                this.D = new P(a2);
                this.G = this.g = this.l = this.h = 0;
                this.o = (this.C = Yu()) ? vt(Wv) : null;
                $i(this, function() {
                  Zi(b.o);
                });
                this.H = this.C ? this.o.initialize() : null;
                this.A = null;
              };
              t(fw, M);
              var hw = function(a2) {
                Fa(function(b) {
                  if (b.g == 1)
                    return a2.g === 2 && (a2.g = 1), wa(b, gw(a2), 4);
                  var c = 3 < a2.G;
                  if (c && a2.A !== null) {
                    var d = Yt("media_source_error", {
                      code: 0 < a2.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                      message: 'Response code "' + a2.A + '" with ' + a2.h + " bytes requested and " + a2.l + " bytes loaded"
                    });
                    a2.dispatchEvent(d);
                  }
                  a2.l < a2.h && a2.g !== 3 && !c ? b.g = 1 : (a2.g !== 3 && (a2.g = 0), b.g = 0);
                });
              }, gw = function(a2) {
                var b;
                return Fa(function(c) {
                  switch (c.g) {
                    case 1:
                      b = a2.l + "-" + (a2.h - 1);
                      Ws(a2.D, "range", b);
                      if (!a2.C) {
                        c.g = 2;
                        break;
                      }
                      return wa(c, a2.H, 3);
                    case 3:
                      return c.return(iw(a2));
                    case 2:
                      return c.h = 4, wa(c, jw(a2), 6);
                    case 6:
                      c.g = 0;
                      c.h = 0;
                      break;
                    case 4:
                      xa(c), a2.G++, c.g = 0;
                  }
                });
              }, iw = function(a2) {
                var b;
                return Fa(function(c) {
                  switch (c.g) {
                    case 1:
                      return wa(c, cw(a2.o, a2.D), 2);
                    case 2:
                      if (b = c.A) {
                        b.isLastVideoChunk && (a2.g = 3);
                        kw(a2, b.video, 0);
                        c.g = 0;
                        break;
                      }
                      c.h = 4;
                      return wa(c, jw(a2), 6);
                    case 6:
                      c.g = 0;
                      c.h = 0;
                      break;
                    case 4:
                      xa(c), a2.G++, c.g = 0;
                  }
                });
              }, jw = function(a2) {
                return new Promise(function(b, c) {
                  var d = new XMLHttpRequest(), e = 0, f = a2.h - a2.l;
                  d.addEventListener("load", function() {
                    Fh("lvlcl");
                    if (400 <= d.status)
                      return I(J(), "lvlxes", d.status.toString()), a2.A = d.status, c();
                    var g = d.response;
                    g.byteLength < f && (a2.g = 3);
                    var h = kw(a2, g, e);
                    e += h;
                    a2.C && 0 < g.byteLength && ew(a2.o, g, a2.D, g.byteLength < f);
                    b();
                  });
                  d.addEventListener("timeout", function() {
                    Fh("lvlct");
                    a2.A = d.status;
                    c();
                  });
                  d.addEventListener("error", function() {
                    Fh("lvlce");
                    a2.A = d.status;
                    c();
                  });
                  d.addEventListener("progress", function() {
                    if (400 <= d.status)
                      a2.A = d.status;
                    else {
                      var g = kw(a2, d.response, e);
                      e += g;
                    }
                  });
                  d.responseType = "arraybuffer";
                  d.open("get", a2.D.toString());
                  d.send(null);
                });
              }, kw = function(a2, b, c) {
                if (b === null)
                  return 0;
                b = b.slice(c);
                a2.l += b.byteLength;
                a2.dispatchEvent({
                  type: "progress",
                  xe: b
                });
                return b.byteLength;
              };
              fw.prototype.N = function() {
                this.C && Xv(this.o) && this.o.close();
                M.prototype.N.call(this);
              };
              function lw() {
                return !!window.MediaSource;
              }
              function mw(a2) {
                return [43, 44, 45].includes(a2) && Qd ? false : xt[a2] ? (a2 = Xt(a2), !!a2 && lw() && MediaSource.isTypeSupported(a2)) : false;
              }
              ;
              var nw = function() {
              };
              nw.prototype.g = function(a2, b, c) {
                return c === 0 ? 1e6 : 5e3 > b - a2 ? 3e5 : 0;
              };
              var ow = function(a2, b, c, d) {
                this.url = a2;
                this.mimeType = b;
                this.g = c;
                this.h = d === void 0 ? null : d;
              };
              var rw = function(a2) {
                M.call(this);
                var b = this;
                this.h = a2;
                this.o = this.h.map(function(c) {
                  return vt(fw, c.url);
                });
                this.ca = vt(MediaSource);
                this.g = [];
                this.l = window.URL.createObjectURL(this.ca);
                this.G = 0;
                this.D = false;
                this.C = function() {
                  return pw(b);
                };
                this.ca.addEventListener("sourceopen", this.C);
                this.H = qw(this);
                this.A = 0;
              };
              t(rw, M);
              var qw = function(a2) {
                for (var b = [], c = 0; c < a2.h.length; ++c)
                  b.push(new nw());
                return b;
              }, pw = function(a2) {
                Fh("msms_oso");
                for (var b = {}, c = 0; c < a2.h.length; b = {
                  xb: b.xb,
                  wb: b.wb
                }, ++c) {
                  var d = a2.h[c];
                  I(J(), "msms_mime" + c, d.mimeType);
                  I(J(), "msms_cs" + c, d.g.toString());
                  b.xb = a2.ca.addSourceBuffer(d.mimeType);
                  b.wb = a2.o[c];
                  b.wb.O("progress", function(e) {
                    return function(f) {
                      var g = e.wb;
                      f = f.xe;
                      f.byteLength !== 0 && e.xb.appendBuffer(f);
                      g.g === 3 && (a2.G++, a2.G === a2.g.length && tw(a2));
                    };
                  }(b));
                  b.wb.O("media_source_error", function(e) {
                    a2.dispatchEvent(e);
                  });
                  b.xb ? a2.g.push(b.xb) : Fh("msms_sbf" + c);
                }
                I(J(), "msms_ns", a2.g.length.toString());
                a2.D = true;
                uw(a2);
              }, tw = function(a2) {
                Promise.all(a2.g.map(function(b) {
                  return new Promise(function(c) {
                    b.updating ? b.addEventListener("updateend", function() {
                      c();
                    }) : c();
                  });
                })).then(function() {
                  return a2.ca.endOfStream();
                });
              }, uw = function(a2) {
                if (a2.D)
                  for (var b = 0; b < a2.h.length; ++b) {
                    var c = a2.o[b], d = a2.g[b];
                    d = d.buffered.length === 0 ? 0 : 1e3 * d.buffered.end(0);
                    d = a2.H[b].g(a2.A, d, c.h);
                    d !== 0 && (c.g === 1 ? (c.h += d, c.g = 2) : c.g === 0 && (c.h += d, c.g = 1, hw(c)));
                  }
              };
              rw.prototype.N = function() {
                this.l && window.URL.revokeObjectURL(this.l);
                for (var a2 = q(this.o), b = a2.next(); !b.done; b = a2.next())
                  b.value.W();
                this.ca.removeEventListener("sourceopen", this.C);
                M.prototype.N.call(this);
              };
              var vw = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"), ww = RegExp("outstream.min.js"), xw = RegExp("outstream.min.css"), yw = RegExp("fonts.gstatic.com"), zw = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"), Aw = RegExp("custom.elements.min.js");
              function Bw(a2, b) {
                var c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, n = false, m = false;
                if (typeof Ka("performance.getEntriesByType", u) === "function" && "transferSize" in u.PerformanceResourceTiming.prototype) {
                  var v = u.performance.getEntriesByType("resource");
                  v = q(v);
                  for (var r = v.next(); !r.done; r = v.next())
                    r = r.value, vw.test(r.name) || (f += 1, r.transferSize ? (c += r.transferSize, r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1, e += r.encodedBodySize, ww.test(r.name) && (n = true), xw.test(r.name) && (m = true)), zw.test(r.name) && (d += r.transferSize)) : r.transferSize == 0 && r.encodedBodySize == 0 ? Aw.test(r.name) ? c += 6686 : yw.test(r.name) || (k += 1, Eh(J(), {
                      event_name: "unmeasurable_asset",
                      resource_name: r.name,
                      encoded_body_size: r.encodedBodySize,
                      transfer_size: r.transferSize
                    })) : (g += 1, e += r.encodedBodySize, ww.test(r.name) && (n = true), xw.test(r.name) && (m = true)));
                  v = 0;
                  if (a2.duration) {
                    for (r = 0; r < a2.buffered.length; r++)
                      v += a2.buffered.end(r) - a2.buffered.start(r);
                    v = Math.min(v, a2.duration);
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
                    video_played_seconds: a2.currentTime.toFixed(2),
                    video_muted: a2.muted,
                    video_seconds_loaded: v.toFixed(2)
                  });
                } else
                  I(J(), "error", "reporting_timing_not_supported");
              }
              ;
              function Cw(a2) {
                var b = J(), c = a2.getVideoPlaybackQuality && a2.getVideoPlaybackQuality();
                c ? (a2 = a2.currentTime, I(b, "vqdf", String(c.droppedVideoFrames)), I(b, "vqtf", String(c.totalVideoFrames)), I(b, "vqfr", String(Math.round(c.totalVideoFrames / a2)))) : I(b, "vqu", "1");
              }
              ;
              var Dw = function() {
              };
              Dw.prototype.toString = function() {
                return "video_mute";
              };
              var Ew = new Dw();
              var Fw = function(a2) {
                L.call(this);
                this.A = 1;
                this.l = [];
                this.o = 0;
                this.g = [];
                this.h = {};
                this.D = !!a2;
              };
              Za(Fw, L);
              var Gw = function(a2, b, c) {
                var d = Ew.toString(), e = a2.h[d];
                e || (e = a2.h[d] = []);
                var f = a2.A;
                a2.g[f] = d;
                a2.g[f + 1] = b;
                a2.g[f + 2] = c;
                a2.A = f + 3;
                e.push(f);
              }, Hw = function(a2, b, c) {
                var d = a2.h[Ew.toString()];
                if (d) {
                  var e = a2.g;
                  (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c;
                  })) && a2.B(d);
                }
              };
              Fw.prototype.B = function(a2) {
                var b = this.g[a2];
                if (b) {
                  var c = this.h[b];
                  this.o != 0 ? (this.l.push(a2), this.g[a2 + 1] = La) : (c && xb(c, a2), delete this.g[a2], delete this.g[a2 + 1], delete this.g[a2 + 2]);
                }
                return !!b;
              };
              Fw.prototype.C = function(a2, b) {
                var c = this.h[a2];
                if (c) {
                  for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                    d[e - 1] = arguments[e];
                  if (this.D)
                    for (e = 0; e < c.length; e++) {
                      var g = c[e];
                      Iw(this.g[g + 1], this.g[g + 2], d);
                    }
                  else {
                    this.o++;
                    try {
                      for (e = 0, f = c.length; e < f && !this.Ra(); e++)
                        g = c[e], this.g[g + 1].apply(this.g[g + 2], d);
                    } finally {
                      if (this.o--, 0 < this.l.length && this.o == 0)
                        for (; c = this.l.pop(); )
                          this.B(c);
                    }
                  }
                }
              };
              var Iw = function(a2, b, c) {
                Oj(function() {
                  a2.apply(b, c);
                });
              };
              Fw.prototype.clear = function(a2) {
                if (a2) {
                  var b = this.h[a2];
                  b && (b.forEach(this.B, this), delete this.h[a2]);
                } else
                  this.g.length = 0, this.h = {};
              };
              Fw.prototype.N = function() {
                Fw.ya.N.call(this);
                this.clear();
                this.l.length = 0;
              };
              var Jw = function(a2) {
                L.call(this);
                this.g = new Fw(a2);
                aj(this, this.g);
              };
              Za(Jw, L);
              Jw.prototype.clear = function(a2) {
                this.g.clear(a2 !== void 0 ? a2.toString() : void 0);
              };
              var Kw = function(a2) {
                a2 = a2 === void 0 ? null : a2;
                L.call(this);
                this.g = new ru(this);
                aj(this, this.g);
                this.tb = a2;
              };
              t(Kw, L);
              var Lw = function(a2, b, c) {
                a2.tb && (Gw(a2.tb.g, b, c), $i(a2, function() {
                  Hw(a2.tb.g, b, c);
                }));
              };
              var Mw = function(a2, b) {
                Kw.call(this, b);
                Lw(this, function(c) {
                  c ? a2.show() : a2.g.mode = "hidden";
                }, this);
              };
              t(Mw, Kw);
              var Nw = function() {
                M.call(this);
                this.h = new ru(this);
                aj(this, this.h);
              };
              t(Nw, M);
              var Pw = function(a2, b, c) {
                c = c === void 0 ? true : c;
                Nw.call(this);
                a2.setAttribute("crossorigin", "anonymous");
                var d = yf("TRACK");
                d.setAttribute("kind", "captions");
                d.setAttribute("src", b);
                d.setAttribute("default", "");
                a2.appendChild(d);
                this.g = a2.textTracks[0];
                Ow(this);
                c ? this.show() : this.g.mode = "hidden";
              };
              t(Pw, Nw);
              var Ow = function(a2) {
                var b = a2.g;
                b.addEventListener("cuechange", function() {
                  for (var c = b.cues, d = 0; d < c.length; d++) {
                    var e = c[d];
                    e.align = "center";
                    e.position = "auto";
                  }
                }, {
                  once: true
                });
              };
              Pw.prototype.show = function() {
                this.g.mode = "showing";
              };
              function Qw(a2, b) {
                if (typeof ReportingObserver !== "undefined") {
                  var c = function(e) {
                    e = q(e);
                    for (var f = e.next(); !f.done; f = e.next())
                      f = f.value, a2(f) && b(f);
                  }, d = new ReportingObserver(c, {
                    buffered: true
                  });
                  u.addEventListener("unload", function() {
                    c(d.takeRecords(), d);
                    d.disconnect();
                  });
                  d.observe();
                }
              }
              function Rw(a2) {
                a2 = a2 === void 0 ? null : a2;
                Qw(function(b) {
                  return b.body && b.body.id === "HeavyAdIntervention";
                }, function(b) {
                  var c = b.body, d = J();
                  I(d, "ham", c.message);
                  c.message.includes("Ad was removed because its CPU usage exceeded the limit") ? I(d, "hacpu", "true") : c.message.includes("Ad was removed because its network usage exceeded the limit") && I(d, "habytes", "true");
                  a2 && a2(b);
                });
              }
              ;
              var Sw = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "), Tw = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "), Uw = {
                childList: true
              }, Vw = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {
              }.toString()), Ww = HTMLElement;
              Vw && (Ww = function() {
                return u.Reflect.construct(HTMLElement, [], this.__proto__.constructor);
              }, Object.setPrototypeOf(Ww, HTMLElement), Object.setPrototypeOf(Ww.prototype, HTMLElement.prototype));
              var Xw = function(a2) {
                if (a2 !== null) {
                  a2 = q(a2);
                  for (var b = a2.next(); !b.done; b = a2.next())
                    if (b = b.value, b.nodeName === "TRACK".toString())
                      return b;
                }
                return null;
              }, Yw = function(a2, b) {
                this.code = a2;
                this.message = b === void 0 ? "" : b;
              }, Zw = function(a2) {
                Yw.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, a2 === void 0 ? "" : a2);
              };
              t(Zw, Yw);
              var cx = function() {
                var a2 = Ww.call(this) || this;
                I(J(), "ulv", "1");
                a2.ca = null;
                a2.Kd = "";
                a2.pd = null;
                a2.P = yf("VIDEO");
                $w(a2);
                a2.tb = new Jw();
                ax(a2);
                a2.Sb = null;
                bx(a2);
                a2.attachShadow({
                  mode: "open"
                });
                a2.shadowRoot.appendChild(a2.P);
                Rw(function() {
                  I(J(), "has", a2.src || a2.ob);
                  I(J(), "hat", String(a2.P.currentTime));
                });
                a2.kc = false;
                a2.Nd = false;
                a2.Hb = null;
                return a2;
              };
              t(cx, Ww);
              cx.prototype.attributeChangedCallback = function(a2, b, c) {
                switch (a2) {
                  case "src":
                    dx(this, c);
                    break;
                  case "demuxedaudiosrc":
                  case "demuxedvideosrc":
                    ex(this);
                    break;
                  case "muted":
                    this.P[a2] = c === "" ? true : !!c;
                    fx(this, a2, c);
                    break;
                  default:
                    fx(this, a2, c);
                }
              };
              var fx = function(a2, b, c) {
                c !== a2.P.getAttribute(b) && (c === null ? a2.P.removeAttribute(b) : a2.P.setAttribute(b, c));
              }, gx = function(a2) {
                a2.ca && (a2.P.removeEventListener("timeupdate", a2.Hb), a2.ca.W(), a2.ca = null);
              }, hx = function(a2, b) {
                a2.pd = b;
                a2.P.dispatchEvent(new Event("error"));
              }, $w = function(a2) {
                ix(a2);
                jx(a2);
                a2.P.addEventListener("loadedmetadata", function() {
                  var b = a2.P.videoWidth, c = a2.P.videoHeight, d = sg(a2), e = d.width, f = d.height;
                  0 < b && 0 < c && 0 < e && 0 < f && (d = d.width / d.height, b /= c, 0.97 <= Math.min(b, d) / Math.max(b, d) ? kg(a2.P, {
                    "object-fit": "cover"
                  }) : kg(a2.P, {
                    "object-fit": "contain"
                  }));
                });
                a2.P.addEventListener("play", function() {
                  a2.Nd || (Bw(a2.P, "first_play"), a2.Nd = true);
                });
                a2.P.addEventListener("pause", function() {
                  a2.kc || (Bw(a2.P, "first_pause"), Cw(a2.P), a2.kc = true);
                });
                rj(u, "unload", function() {
                  a2.kc || (Bw(a2.P, "first_pause"), Cw(a2.P), a2.kc = true);
                });
                a2.P.addEventListener("stalled", function() {
                  I(J(), "ves", "1");
                });
                new Qu(a2.P).O("playbackStalled", function() {
                  return I(J(), "pbs", "1");
                });
                a2.P.addEventListener("media_source_error", function(b) {
                  gx(a2);
                  b = b.detail;
                  hx(a2, new Yw(b.code, b.message));
                });
                kx(a2);
              }, bx = function(a2) {
                var b = Xw(a2.childNodes);
                b && lx(a2, b);
                a2.Sb === null && mx(a2);
              }, mx = function(a2) {
                if (u.MutationObserver) {
                  var b = new MutationObserver(function(c) {
                    c = q(c);
                    for (var d = c.next(); !d.done; d = c.next())
                      if (d = d.value, d.type === "childList" && (d = Xw(d.addedNodes))) {
                        lx(a2, d);
                        b.disconnect();
                        break;
                      }
                  });
                  b.observe(a2, Uw);
                }
              }, ax = function(a2) {
                a2.P.addEventListener("volumechange", function() {
                  a2.tb.g.C(Ew.toString(), a2.P.muted);
                });
              }, lx = function(a2, b) {
                if (a2.Sb === null && b.hasAttribute("src")) {
                  var c = b.getAttribute("src");
                  a2.Sb = new Pw(a2.P, c, b.hasAttribute("default"));
                  new Mw(a2.Sb, a2.tb);
                  c.includes("kind=asr") && I(J(), "act", "1");
                }
              }, dx = function(a2, b) {
                if (b !== a2.Kd) {
                  var c = (a2.Kd = b) ? Wt(b) : null, d = !!c && mw(c);
                  I(J(), "umsem", d ? "1" : "0");
                  d ? (b = vt(ow, b, Xt(c), 1e3 * wt[c], null), a2.ca = vt(rw, [b]), a2.ca.O("media_source_error", function(e) {
                    e = Yt("media_source_error", e.detail);
                    a2.P.dispatchEvent(e);
                  }), a2.Hb = function() {
                    var e = a2.ca;
                    e.A = 1e3 * a2.P.currentTime;
                    uw(e);
                  }, a2.P.addEventListener("timeupdate", a2.Hb), a2.P.src = a2.ca.l) : (gx(a2), a2.P.src = b);
                  a2.P.load();
                }
              }, ex = function(a2) {
                a2.src && hx(a2, new Yw(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
                if (!a2.Bb && !a2.ob && a2.ca)
                  gx(a2), a2.P.src = "about:blank", a2.P.load();
                else if (a2.Bb && a2.ob) {
                  var b = Wt(a2.Bb), c = Wt(a2.ob);
                  if (c && mw(c))
                    if (b && mw(b)) {
                      var d = !!c && mw(c) && !!b && mw(b);
                      I(J(), "umsed", d ? "1" : "0");
                      c = vt(ow, a2.ob, Xt(c), -1, null);
                      b = vt(ow, a2.Bb, Xt(b), -1, null);
                      a2.ca = vt(rw, [c, b]);
                      a2.ca.O("media_source_error", function(e) {
                        e = Yt("media_source_error", e.detail);
                        a2.P.dispatchEvent(e);
                      });
                      a2.Hb = function() {
                        var e = a2.ca;
                        e.A = 1e3 * a2.P.currentTime;
                        uw(e);
                      };
                      a2.P.addEventListener("timeupdate", a2.Hb);
                      a2.P.src = a2.ca.l;
                      a2.P.load();
                    } else
                      hx(a2, new Zw('Audio itag "' + b + '" not supported.'));
                  else
                    hx(a2, new Zw('Video itag "' + c + '" not supported.'));
                }
              }, ix = function(a2) {
                for (var b = {}, c = q(Tw), d = c.next(); !d.done; b = {
                  Ba: b.Ba,
                  sc: b.sc
                }, d = c.next())
                  b.Ba = d.value, b.Ba in a2.P && (typeof a2.P[b.Ba] === "function" ? (b.sc = a2.P[b.Ba].bind(a2.P), Object.defineProperty(a2, b.Ba, {
                    set: function(e) {
                      return function(f) {
                        a2.P[e.Ba] = f;
                      };
                    }(b),
                    get: function(e) {
                      return function() {
                        return e.sc;
                      };
                    }(b)
                  })) : Object.defineProperty(a2, b.Ba, {
                    set: function(e) {
                      return function(f) {
                        a2.P[e.Ba] = f;
                      };
                    }(b),
                    get: function(e) {
                      return function() {
                        return a2.P[e.Ba];
                      };
                    }(b)
                  }));
              }, jx = function(a2) {
                Object.defineProperty(a2, "error", {
                  set: function() {
                  },
                  get: function() {
                    return a2.P.error ? a2.P.error : a2.pd;
                  }
                });
              }, kx = function(a2) {
                a2.P.style.width = qg();
                a2.P.style.height = qg();
              };
              da.Object.defineProperties(cx.prototype, {
                Bb: {
                  configurable: true,
                  enumerable: true,
                  set: function(a2) {
                    this.setAttribute("demuxedaudiosrc", a2);
                  },
                  get: function() {
                    return this.getAttribute("demuxedaudiosrc");
                  }
                },
                ob: {
                  configurable: true,
                  enumerable: true,
                  set: function(a2) {
                    this.setAttribute("demuxedvideosrc", a2);
                  },
                  get: function() {
                    return this.getAttribute("demuxedvideosrc");
                  }
                },
                src: {
                  configurable: true,
                  enumerable: true,
                  set: function(a2) {
                    this.setAttribute("src", a2);
                  },
                  get: function() {
                    return this.getAttribute("src");
                  }
                }
              });
              da.Object.defineProperties(cx, {
                observedAttributes: {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return Sw;
                  }
                }
              });
              u.customElements && (u.customElements.get("lima-video") || u.customElements.define("lima-video", cx));
              function nx() {
                var a2 = vt(Wv);
                a2.initialize().then(function(b) {
                  b && (b = Yt("initialized"), a2.dispatchEvent(b));
                });
                return a2;
              }
              var px = function(a2, b, c, d, e) {
                L.call(this);
                this.J = a2;
                this.R = new P(b.url);
                this.h = c;
                this.o = e;
                this.H = b.g;
                this.va = d;
                (this.V = b.h) || this.R.l.remove("alr");
                I(J(), "sl_dv" + this.o, (this.V != null).toString());
                this.X = !this.V;
                this.nb = 0;
                this.g = new XMLHttpRequest();
                this.$ = this.T = this.Ob = this.D = this.l = 0;
                this.Y = 0.1;
                this.C = [];
                this.M = false;
                this.aa = this.ua = this.da = null;
                this.Wa = false;
                this.Pb = this.K = this.A = this.kb = this.ib = null;
                this.G = false;
                if (this.B = Yu())
                  this.A = nx(), aj(this, this.A);
                ox(this);
              };
              t(px, L);
              var qx = function(a2, b) {
                b = Yt("media_source_error", b);
                a2.J.dispatchEvent(b);
              }, rx = function(a2, b) {
                qx(a2, {
                  code: 1 < a2.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                  message: b
                });
              }, ox = function(a2) {
                a2.da = function() {
                  sx(a2);
                  if (a2.X) {
                    var b = a2.g.responseText;
                    a2.M = !b || b.length < a2.H;
                    a2.T = 0;
                    Fh("sl_cc" + a2.o + "_" + a2.l);
                    a2.D++;
                    tx(a2);
                  }
                };
                a2.ua = function() {
                  return sx(a2);
                };
                a2.aa = function() {
                  Fh("sl_ec" + a2.o + "_" + a2.l);
                  rx(a2, "Failed to load chunk " + a2.l + " for stream " + a2.o);
                };
                a2.g.addEventListener("load", a2.da);
                a2.g.addEventListener("progress", a2.ua);
                a2.g.addEventListener("error", a2.aa);
                a2.h.addEventListener("updateend", function() {
                  a2.h.buffered.length && (a2.Ob = a2.h.buffered.end(0), a2.B ? a2.G && !a2.h.updating && a2.l === a2.D && (Fh("sl_lc" + a2.o), a2.va()) : a2.M && !a2.h.updating && a2.l === a2.D && (Fh("sl_lc" + a2.o), a2.va()));
                  !a2.Wa && 1 < a2.J.buffered.length && (I(J(), "dbr", "1"), a2.Wa = true);
                });
                a2.h.addEventListener("update", function() {
                  a2.C.length && !a2.h.updating && a2.h.appendBuffer(a2.C.shift());
                });
                a2.h.addEventListener("error", function() {
                  Fh("msb_err" + a2.o);
                  qx(a2, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a2.o
                  });
                });
                a2.B ? (Xv(a2.A) ? ux(a2) : a2.ib = rj(a2.A, "initialized", function() {
                  ux(a2);
                }), a2.kb = rj(a2.A, "get_video_succeeded", function() {
                  tx(a2);
                })) : ux(a2);
              }, wx = function(a2) {
                Fh("sl_rc" + a2.o + "-" + a2.l);
                var b = vx(a2);
                a2.g.open("get", b);
                a2.g.overrideMimeType("text/plain; charset=x-user-defined");
                a2.g.send(null);
                a2.B && (a2.K = null, a2.Pb = b);
              }, sx = function(a2) {
                if (400 <= a2.g.status)
                  rx(a2, 'Response code "' + a2.g.status + '" on loading chunk ' + a2.l + " for stream " + a2.o);
                else {
                  if (!a2.X) {
                    var b = a2.g.getResponseHeader("content-type");
                    if (b && 0 <= b.indexOf("text/plain")) {
                      a2.g.readyState === XMLHttpRequest.DONE && (a2.R = new P(a2.g.response), a2.l = 0, a2.D = 0, a2.nb++, ux(a2));
                      return;
                    }
                    a2.X = true;
                    Fh("sl_redc" + a2.o);
                    I(J(), "sl_tr" + a2.o, a2.nb.toString());
                  }
                  a2.R.l.remove("alr");
                  if (a2.g.readyState === XMLHttpRequest.LOADING || a2.g.readyState === XMLHttpRequest.DONE)
                    b = xx(a2, a2.T), a2.T = a2.g.response.length, a2.$ += b.byteLength, yx(a2, b);
                  if (a2.B && a2.g.readyState === XMLHttpRequest.DONE && (b = xx(a2, 0), 0 < b.byteLength)) {
                    var c = a2.g.responseText;
                    a2.G = !c || c.length < a2.H;
                    ew(a2.A, b, new P(a2.Pb), a2.G);
                  }
                }
              }, yx = function(a2, b) {
                0 < b.byteLength && (a2.h.updating || a2.C.length ? a2.C.push(b) : a2.h.appendBuffer(b));
              }, xx = function(a2, b) {
                a2 = a2.g.response;
                for (var c = new Uint8Array(a2.length - b), d = 0; d < c.length; d++)
                  c[d] = a2.charCodeAt(d + b) & 255;
                return c.buffer;
              }, tx = function(a2) {
                var b = Zt;
                b != -1 && b < a2.$ + a2.H ? (a2.J.pause(), Zt = -1, b = false) : (b = a2.D === a2.l && !a2.h.updating && !a2.C.length, b = a2.B ? !a2.G && b && a2.J.currentTime >= a2.Y : !a2.M && b && a2.J.currentTime >= a2.Y);
                b && (a2.Y = a2.Ob + 0.1, ux(a2));
              }, vx = function(a2) {
                var b = a2.B && a2.K ? a2.K + 1 : a2.l * a2.H;
                return Ws(a2.R, "range", b + "-" + (b + a2.H - 1)).toString();
              }, ux = function(a2) {
                if (a2.B) {
                  var b = new P(vx(a2));
                  cw(a2.A, b).then(function(c) {
                    c ? (a2.K = parseInt(c.endIndex, 10), a2.G = c.isLastVideoChunk, yx(a2, c.video), c = Yt("get_video_succeeded"), a2.A.dispatchEvent(c), a2.D++) : wx(a2);
                    a2.l++;
                  });
                } else
                  wx(a2), a2.l++;
              };
              px.prototype.N = function() {
                this.B && Xv(this.A) && this.A.close();
                this.g.removeEventListener("load", this.da);
                this.g.removeEventListener("progress", this.ua);
                this.g.removeEventListener("error", this.aa);
                zj(this.ib);
                zj(this.kb);
                L.prototype.N.call(this);
              };
              var Ax = function(a2, b) {
                L.call(this);
                var c = this;
                this.o = a2;
                this.D = b;
                this.ca = new MediaSource();
                this.C = [];
                this.h = [];
                this.g = this.l = null;
                this.B = false;
                this.A = function() {
                  return zx(c);
                };
                this.ca.addEventListener("sourceopen", this.A);
              };
              t(Ax, L);
              var Bx = function(a2) {
                a2.l && a2.o.removeEventListener("timeupdate", a2.l);
              }, zx = function(a2) {
                Fh("msmsw_oso");
                a2.l = function() {
                  if (!a2.B)
                    for (var e = q(a2.h), f = e.next(); !f.done; f = e.next())
                      tx(f.value);
                };
                a2.o.addEventListener("timeupdate", a2.l);
                for (var b = 0; b < a2.D.length; b++) {
                  var c = a2.D[b];
                  I(J(), "msmsw_mime" + b, c.mimeType);
                  I(J(), "msmsw_cs" + b, c.g.toString());
                  var d = a2.ca.addSourceBuffer(c.mimeType);
                  d ? (a2.C.push(d), c = vt(px, a2.o, c, d, function() {
                    a:
                      if (!a2.B) {
                        for (var e = q(a2.h), f = e.next(); !f.done; f = e.next())
                          if (f = f.value, f.B ? !f.G || f.h.updating || f.C.length : !f.M || f.h.updating || f.C.length)
                            break a;
                        a2.ca.endOfStream();
                        a2.B = true;
                        Bx(a2);
                      }
                  }, b), a2.h.push(c)) : Fh("msmsw_sbf" + b);
                }
                I(J(), "msmsw_ns", a2.C.length.toString());
              };
              Ax.prototype.N = function() {
                this.g && window.URL.revokeObjectURL(this.g);
                for (var a2 = q(this.h), b = a2.next(); !b.done; b = a2.next())
                  b.value.W();
                Bx(this);
                this.ca.removeEventListener("sourceopen", this.A);
                L.prototype.N.call(this);
              };
              var Cx = function() {
                throw Error("Do not instantiate directly");
              };
              Cx.prototype.g = null;
              Cx.prototype.getContent = function() {
                return this.content;
              };
              Cx.prototype.toString = function() {
                return this.content;
              };
              var Dx = function() {
                Cx.call(this);
              };
              Za(Dx, Cx);
              var Ex = function(a2) {
                function b(c) {
                  this.content = c;
                }
                b.prototype = a2.prototype;
                return function(c, d) {
                  c = new b(String(c));
                  d !== void 0 && (c.g = d);
                  return c;
                };
              }(Dx);
              var Fx = function() {
                if (window.MutationObserver) {
                  var a2 = [];
                  new MutationObserver(function() {
                    a2.forEach(function(b) {
                      return b();
                    });
                    a2 = [];
                  }).observe(document.createTextNode(""), {
                    characterData: true
                  });
                }
              };
              typeof Promise === "function" && -1 < String(Promise).indexOf("[native code]") || Fx();
              var Gx = function(a2) {
                this.g = a2;
              }, Hx = function(a2, b) {
                return Pb(a2.g, b) && (a2 = a2.g[b], typeof a2 === "boolean") ? a2 : false;
              }, Ix = function(a2) {
                if (Pb(a2.g, "forceExperimentIds")) {
                  a2 = a2.g.forceExperimentIds;
                  var b = [], c = 0;
                  Array.isArray(a2) && a2.forEach(function(d) {
                    typeof d === "number" && (b[c++] = d);
                  });
                  return b;
                }
                return null;
              };
              var V = function() {
                this.D = "always";
                this.M = 4;
                this.A = 1;
                this.g = 0;
                this.L = true;
                this.o = "en";
                this.K = false;
                this.V = this.T = "";
                this.B = null;
                this.Y = this.R = -1;
                this.X = this.J = this.I = "";
                this.G = false;
                this.h = true;
                this.C = ut();
                this.H = {};
                try {
                  this.aa = Nl(void 0)[0];
                } catch (a2) {
                }
              }, Jx = function(a2) {
                a2 = Zc(a2);
                jc(a2) || (a2 = a2.substring(0, 20));
                return a2;
              };
              l = V.prototype;
              l.setCompanionBackfill = function(a2) {
                this.D = a2;
              };
              l.getCompanionBackfill = function() {
                return this.D;
              };
              l.setNumRedirects = function(a2) {
                this.M = a2;
              };
              l.getNumRedirects = function() {
                return this.M;
              };
              l.setPpid = function(a2) {
                this.$ = a2;
              };
              l.getPpid = function() {
                return this.$;
              };
              l.setVpaidAllowed = function(a2) {
                typeof a2 === "boolean" && (this.A = a2 ? 1 : 0);
              };
              l.setVpaidMode = function(a2) {
                this.A = a2;
              };
              l.getVpaidMode = function() {
                return this.A;
              };
              l.setAutoPlayAdBreaks = function(a2) {
                this.L = a2;
              };
              l.isAutoPlayAdBreaks = function() {
                return this.L;
              };
              l.setIsVpaidAdapter = function(a2) {
                this.K = a2;
              };
              l.Fb = function() {
                return this.K;
              };
              l.setLocale = function(a2) {
                if (a2 = Cu(a2))
                  this.o = a2;
              };
              l.Ge = function() {
                return this.o;
              };
              l.setPlayerType = function(a2) {
                this.T = Jx(a2);
              };
              l.getPlayerType = function() {
                return this.T;
              };
              l.setPlayerVersion = function(a2) {
                this.V = Jx(a2);
              };
              l.getPlayerVersion = function() {
                return this.V;
              };
              var Kx = function(a2) {
                if (a2.B == null) {
                  var b = {}, c = new P(E().location.href).l;
                  if (at(c, "tcnfp"))
                    try {
                      b = JSON.parse(c.get("tcnfp"));
                    } catch (d) {
                    }
                  a2.B = new Gx(b);
                }
                return a2.B;
              };
              l = V.prototype;
              l.setPageCorrelator = function(a2) {
                this.R = a2;
              };
              l.setStreamCorrelator = function(a2) {
                this.Y = a2;
              };
              l.setDisableCustomPlaybackForIOS10Plus = function(a2) {
                this.G = a2;
              };
              l.getDisableCustomPlaybackForIOS10Plus = function() {
                return this.G;
              };
              l.Ue = function() {
                return this.h;
              };
              l.setCookiesEnabled = function(a2) {
                a2 != null && (this.h = a2);
              };
              l.setSessionId = function(a2) {
                this.C = a2;
              };
              l.setDisableFlashAds = function() {
              };
              l.getDisableFlashAds = function() {
                return true;
              };
              l.setFeatureFlags = function(a2) {
                this.H = a2;
              };
              l.getFeatureFlags = function() {
                return this.H;
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
              var W = new V();
              var Lx = function(a2) {
                B.call(this, a2);
              };
              t(Lx, B);
              var Mx = function(a2) {
                a2.addtlConsent !== void 0 && typeof a2.addtlConsent !== "string" && (a2.addtlConsent = void 0);
                a2.gdprApplies !== void 0 && typeof a2.gdprApplies !== "boolean" && (a2.gdprApplies = void 0);
                return a2.tcString !== void 0 && typeof a2.tcString !== "string" || a2.listenerId !== void 0 && typeof a2.listenerId !== "number" ? 2 : a2.cmpStatus && a2.cmpStatus !== "error" ? 0 : 3;
              }, Nx = function(a2, b) {
                b = b === void 0 ? 500 : b;
                L.call(this);
                this.h = a2;
                this.g = null;
                this.B = {};
                this.A = 0;
                this.o = b;
                this.l = null;
              };
              t(Nx, L);
              Nx.prototype.N = function() {
                this.B = {};
                this.l && (hf(this.h, "message", this.l), delete this.l);
                delete this.B;
                delete this.h;
                delete this.g;
                L.prototype.N.call(this);
              };
              var Px = function(a2) {
                return typeof a2.h.__tcfapi === "function" || Ox(a2) != null;
              }, Sx = function(a2, b) {
                var c = {
                  internalErrorState: 0
                }, d = kb(function() {
                  return b(c);
                }), e = 0;
                a2.o !== -1 && (e = setTimeout(function() {
                  e = 0;
                  c.tcString = "tcunavailable";
                  c.internalErrorState = 1;
                  d();
                }, a2.o));
                Qx(a2, "addEventListener", function(f) {
                  f && (c = f, c.internalErrorState = Mx(c), Rx(c) && (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), Qx(a2, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()));
                });
              };
              Nx.prototype.addEventListener = function(a2) {
                var b = {}, c = kb(function() {
                  return a2(b);
                }), d = 0;
                this.o !== -1 && (d = setTimeout(function() {
                  b.tcString = "tcunavailable";
                  b.internalErrorState = 1;
                  c();
                }, this.o));
                var e = function(f, g) {
                  clearTimeout(d);
                  f ? (b = f, b.internalErrorState = Mx(b), g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                  a2(b);
                };
                try {
                  Qx(this, "addEventListener", e);
                } catch (f) {
                  b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
              };
              Nx.prototype.removeEventListener = function(a2) {
                a2 && a2.listenerId && Qx(this, "removeEventListener", null, a2.listenerId);
              };
              var Qx = function(a2, b, c, d) {
                c || (c = function() {
                });
                if (typeof a2.h.__tcfapi === "function")
                  a2 = a2.h.__tcfapi, a2(b, 2, c, d);
                else if (Ox(a2)) {
                  Tx(a2);
                  var e = ++a2.A;
                  a2.B[e] = c;
                  a2.g && (c = {}, a2.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                  }, c), "*"));
                } else
                  c({}, false);
              }, Ox = function(a2) {
                if (a2.g)
                  return a2.g;
                a2.g = Wf(a2.h, "__tcfapiLocator");
                return a2.g;
              }, Tx = function(a2) {
                a2.l || (a2.l = function(b) {
                  try {
                    var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a2.B[c.callId](c.returnValue, c.success);
                  } catch (d) {
                  }
                }, gf(a2.h, "message", a2.l));
              }, Rx = function(a2) {
                if (a2.gdprApplies === false)
                  return true;
                a2.internalErrorState === void 0 && (a2.internalErrorState = Mx(a2));
                return a2.cmpStatus === "error" || a2.internalErrorState !== 0 || a2.cmpStatus === "loaded" && (a2.eventStatus === "tcloaded" || a2.eventStatus === "useractioncomplete") ? true : false;
              };
              function Ux(a2) {
                var b = {};
                new P(a2).l.forEach(function(c, d) {
                  b[d] = c;
                });
                return b;
              }
              var Vx = function(a2) {
                this.Gd = a2.isGdprLoader || false;
                this.uspString = a2.uspString || "";
                var b = a2.gdprApplies;
                this.h = typeof b == "boolean" ? b ? "1" : "0" : typeof b != "number" || b !== 1 && b !== 0 ? typeof b != "string" || b !== "1" && b !== "0" ? "" : b == "1" ? "1" : "0" : b == 1 ? "1" : "0";
                this.g = a2.tcString || "";
                /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
              }, Wx = function(a2, b) {
                a2 = a2 === void 0 ? {} : a2;
                b = b === void 0 ? {} : b;
                this.g = a2;
                this.h = new Vx(b);
              }, Xx = function(a2, b) {
                var c = new P(a2);
                var d = c.g;
                (c = ic(c.h, "googleads.g.doubleclick.net") && Au("/pagead/(live/)?ads", d)) || (d = new Eu(a2), c = d.h, d = Fu(d, d.g), c = !ic(c, ".g.doubleclick.net") && ic(c, "doubleclick.net") && Au("/(ad|pfad)[x|i|j]?/", d));
                c || (c = new P(a2), d = c.g, c = ic(c.h, "doubleclick.net") && Au("/gampad/(live/)?ads", d));
                (c = c || new P(a2).h == "bid.g.doubleclick.net") || (c = new P(a2), d = c.g, c = c.h === "ad.doubleclick.net" && Au("/dv3/adv", d));
                c || (c = new P(a2), d = c.g, c.h === "pubads.g.doubleclick.net" && (Au("/ssai/", d) || Au("/ondemand/", d)));
                return new Wx(Ux(a2), b);
              }, Yx = function(a2, b) {
                if (a2.g.hasOwnProperty(b))
                  return a2.g[b];
              }, Zx = function(a2) {
                var b, c;
                if (!(b = ((c = Yx(a2, "ltd")) == null ? void 0 : c.toString()) == "1")) {
                  var d;
                  b = (d = Yx(a2, "gdpr")) == null ? void 0 : d.toString();
                  d = a2.h.h;
                  d = (d == "1" || d == "0" ? d : b != void 0 ? b : "").toLowerCase();
                  if (d === "true" || d === "1")
                    if (d = a2.h.g, a2 = Yx(a2, "gdpr_consent"), a2 = d && d != "tcunavailable" ? d : d == "tcunavailable" ? a2 || d : a2 || "", a2 === "tcunavailable")
                      var e = false;
                    else {
                      if ((d = ws(a2)) && a2) {
                        var f = Je(d, Nr, 1);
                        d = Je(d, Gr, 2) || new Gr();
                        b = Ee(f, 9, 0);
                        c = Ee(f, 4, 0);
                        var g = Ee(f, 5, 0), h = Fe(f, 10), k = Fe(f, 11), n = Ee(f, 16, ""), m = Fe(f, 15), v = {
                          consents: xs(Be(f, 13), is),
                          legitimateInterests: xs(Be(f, 14), is)
                        }, r = {
                          consents: xs(Be(f, 17), void 0),
                          legitimateInterests: xs(Be(f, 18), void 0)
                        }, w = xs(Be(f, 12), js), x = Ke(f, Er, 19);
                        f = {};
                        x = q(x);
                        for (var G = x.next(); !G.done; G = x.next()) {
                          G = G.value;
                          var la = Ee(G, 1, 0);
                          f[la] = f[la] || {};
                          for (var Qa = q(Be(G, 3)), Ad = Qa.next(); !Ad.done; Ad = Qa.next())
                            f[la][Ad.value] = Ee(G, 2, 0);
                        }
                        a2 = {
                          tcString: a2,
                          tcfPolicyVersion: b,
                          gdprApplies: true,
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
                        };
                      } else
                        a2 = null;
                      if (a2) {
                        var Sa = Sa === void 0 ? false : Sa;
                        if (Rx(a2))
                          if (a2.gdprApplies === false || a2.tcString === "tcunavailable" || a2.gdprApplies === void 0 && !Sa || typeof a2.tcString !== "string" || !a2.tcString.length)
                            e = true;
                          else {
                            e = e === void 0 ? "755" : e;
                            c: {
                              if (a2.publisher && a2.publisher.restrictions && (Sa = a2.publisher.restrictions["1"], Sa !== void 0)) {
                                Sa = Sa[e === void 0 ? "755" : e];
                                break c;
                              }
                              Sa = void 0;
                            }
                            Sa === 0 ? e = false : a2.purpose && a2.vendor ? (Sa = a2.vendor.consents, (e = !(!Sa || !Sa[e === void 0 ? "755" : e])) && a2.purposeOneTreatment && (a2.publisherCC === "DE" || a2.publisherCC === "CH") ? e = true : e && (e = a2.purpose.consents, e = !(!e || !e["1"]))) : e = true;
                          }
                        else
                          e = false;
                      } else
                        e = false;
                    }
                  else
                    e = true;
                  b = !e;
                }
                return b;
              };
              var $x = "platform platformVersion architecture model uaFullVersion bitness".split(" "), ay = function() {
                var a2 = window;
                return a2.navigator && a2.navigator.userAgentData && typeof a2.navigator.userAgentData.getHighEntropyValues === "function" ? a2.navigator.userAgentData.getHighEntropyValues($x).then(function(b) {
                  var c = new zs();
                  c = Ae(c, 1, b.platform);
                  c = Ae(c, 2, b.platformVersion);
                  c = Ae(c, 3, b.architecture);
                  c = Ae(c, 4, b.model);
                  c = Ae(c, 5, b.uaFullVersion);
                  return Ae(c, 9, b.bitness);
                }) : null;
              };
              var cy = function() {
                new Wx();
                ut();
                this.deviceId = "";
                this.g = this.referrer = null;
                by(this);
              }, dy = function() {
                H(cy);
                var a2 = "h.3.482.0";
                W.Fb() && (a2 += "/vpaid_adapter");
                return a2;
              }, by = function(a2) {
                var b = ay();
                b && b.then(function(c) {
                  a2.g = $d(Oe(c));
                });
              };
              var ey = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
              var gy = function(a2) {
                var b = Kx(W);
                if (b && Hx(b, "forceCustomPlayback") || W.Fb())
                  return true;
                if ((Dd || ju()) && a2)
                  return false;
                a2 = a2 && (Dd || ju() || ku(10)) && (W.getDisableCustomPlaybackForIOS10Plus() || Vh(Ki));
                return (Cd || Ed) && !a2 || Bd && (!Bd || !iu(hu, 4)) || fy() ? true : false;
              }, hy = function(a2) {
                return a2 == null ? false : W.Fb() ? true : Fd || Dd || ju() ? lu(a2) ? Dd || ju() || ku(10) && W.getDisableCustomPlaybackForIOS10Plus() ? false : true : true : Bd && (!Bd || !iu(hu, 4)) || fy() ? true : false;
              }, iy = function() {
                var a2 = Kx(W);
                return a2 && Hx(a2, "disableOnScreenDetection") ? false : !Rm();
              }, fy = function() {
                var a2;
                (a2 = Sm()) || (H(cy), a2 = false);
                return a2;
              };
              var jy = function() {
                this.allowCustom = true;
                this.creativeType = this.resourceType = "All";
                this.sizeCriteria = "SelectExactMatch";
                this.nearMatchPercent = 90;
                this.adSlotIds = [];
              }, ky = {
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
              var oy = function(a2, b) {
                b = b === void 0 ? new jy() : b;
                this.h = a2;
                this.g = b ? b : new jy();
                this.A = ny(ly, this.g.resourceType) ? this.g.resourceType : "All";
                this.l = ny(ky, this.g.creativeType) ? this.g.creativeType : "All";
                this.C = ny(my, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
                this.o = this.g.adSlotIds != null ? this.g.adSlotIds : [];
                this.B = typeof this.g.nearMatchPercent === "number" && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90;
              }, ry = function(a2, b) {
                var c = [];
                b.forEach(function(d) {
                  a2.g.allowCustom && (!jc(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.mainAdSequenceNumber) || d.g.mainAdSequenceNumber == d.g.sequenceNumber) && py(a2, d) ? c.push(d) : (d = qy(a2, d), d != null && !jc(d.getContent()) && c.push(d)));
                });
                return c;
              }, py = function(a2, b) {
                var c;
                if (c = b.getContentType() != "Flash") {
                  if (c = a2.A == "All" || a2.A == b.g.resourceType)
                    c = b.getContentType(), c = c == null ? true : a2.l == "All" || a2.l == c;
                  c && (c = b.Bd(), c = a2.o.length == 0 ? true : c != null ? a2.o.includes(c) : false);
                }
                if (c)
                  if (b = b.g.size, (c = a2.C == "IgnoreSize") || (c = a2.h, c = c == b ? true : c && b ? c.width == b.width && c.height == b.height : false), c)
                    a2 = true;
                  else {
                    if (c = a2.C == "SelectNearMatch")
                      c = b.width, b = b.height, c = c > a2.h.width || b > a2.h.height || c < a2.B / 100 * a2.h.width || b < a2.B / 100 * a2.h.height ? false : true;
                    a2 = c;
                  }
                else
                  a2 = false;
                return a2;
              }, qy = function(a2, b) {
                b = sy(b);
                return b == null ? null : b.find(function(c) {
                  return py(a2, c);
                }) || null;
              }, ny = function(a2, b) {
                return b != null && Qb(a2, b);
              };
              var X = {}, ty = (X.creativeView = "creativeview", X.start = "start", X.midpoint = "midpoint", X.firstQuartile = "firstquartile", X.thirdQuartile = "thirdquartile", X.complete = "complete", X.mute = "mute", X.unmute = "unmute", X.pause = "pause", X.rewind = "rewind", X.resume = "resume", X.fullscreen = "fullscreen", X.exitFullscreen = "exitfullscreen", X.expand = "expand", X.collapse = "collapse", X.close = "close", X.acceptInvitation = "acceptinvitation", X.userInteraction = "userInteraction", X.adCanPlay = "adCanPlay", X.adStarted = "adStarted", X.abandon = "abandon", X.acceptInvitationLinear = "acceptinvitationlinear", X.engagedView = "engagedview", X.instreamAdComplete = "instreamAdComplete", X.skipShown = "skipshown", X.skippableStateChanged = "skippableStateChanged", X.skip = "skip", X.progress = "progress", X.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", X.annotation_start = "annotation_start", X.annotation_click = "annotation_click", X.annotation_close = "annotation_close", X.cta_annotation_shown = "cta_annotation_shown", X.cta_annotation_clicked = "cta_annotation_clicked", X.cta_annotation_closed = "cta_annotation_closed", X.replay = "replay", X.stop = "stop", X.autoplayDisallowed = "autoplayDisallowed", X.error = "error", X.mediaLoadTimeout = "mediaLoadTimeout", X.linearChanged = "linearChanged", X.click = "click", X.contentPauseRequested = "contentPauseRequested", X.contentResumeRequested = "contentResumeRequested", X.discardAdBreak = "discardAdBreak", X.updateAdsRenderingSettings = "updateAdsRenderingSettings", X.durationChange = "durationChange", X.expandedChanged = "expandedChanged", X.autoClose = "autoClose", X.userClose = "userClose", X.userRecall = "userRecall", X.prefetched = "prefetched", X.loaded = "loaded", X.init = "init", X.allAdsCompleted = "allAdsCompleted", X.adMetadata = "adMetadata", X.adBreakReady = "adBreakReady", X.adBreakFetchError = "adBreakFetchError", X.log = "log", X.volumeChange = "volumeChange", X.companionBackfill = "companionBackfill", X.companionInitialized = "companionInitialized", X.companionImpression = "companionImpression", X.companionClick = "companionClick", X.impression = "impression", X.interaction = "interaction", X.adProgress = "adProgress", X.adBuffering = "adBuffering", X.trackingUrlPinged = "trackingUrlPinged", X.measurable_impression = "measurable_impression", X.custom_metric_viewable = "custom_metric_viewable", X.viewable_impression = "viewable_impression", X.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", X.overlay_resize = "overlay_resize", X.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", X.overlay_unviewable_impression = "overlay_unviewable_impression", X.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression", X.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", X.externalActivityEvent = "externalActivityEvent", X.adEvent = "adEvent", X.configure = "configure", X.remainingTime = "remainingTime", X.destroy = "destroy", X.resize = "resize", X.volume = "volume", X.authorIconClicked = "videoAuthorIconClicked", X.authorNameClicked = "videoAuthorClicked", X.videoClicked = "videoClicked", X.videoIconClicked = "videoIconClicked", X.learnMoreClicked = "videoLearnMoreClicked", X.muteClicked = "videoMuteClicked", X.titleClicked = "videoTitleClicked", X.skipShown = "SKIP_SHOWN", X.videoSkipClicked = "SKIPPED", X.unmuteClicked = "videoUnmuteClicked", X.vpaidEvent = "vpaidEvent", X.show_ad = "show_ad", X.video_card_endcap_collapse = "video_card_endcap_collapse", X.video_card_endcap_dismiss = "video_card_endcap_dismiss", X.video_card_endcap_impression = "video_card_endcap_impression", X.mediaUrlPinged = "mediaUrlPinged", X.breakStart = "breakstart", X.breakEnd = "breakend", X.omidReady = "omidReady", X.omidUnavailable = "omidUnavailable", X.omidAdSessionCompleted = "omidAdSessionCompleted", X.omidAdSessionAbandoned = "omidAdSessionAbandoned", X.verificationNotExecuted = "verificationNotExecuted", X.loadStart = "loadStart", X.seeked = "seeked", X.seeking = "seeking", X);
              var uy = function(a2) {
                M.call(this);
                this.h = a2 || "goog_" + ad++;
                this.o = [];
                this.l = false;
              };
              t(uy, M);
              uy.prototype.connect = function() {
                for (this.l = true; this.o.length != 0; ) {
                  var a2 = this.o.shift();
                  this.sendMessage(a2.name, a2.type, a2.data);
                }
              };
              var vy = function(a2, b, c, d) {
                a2.l ? a2.sendMessage(b, c, d) : a2.o.push({
                  name: b,
                  type: c,
                  data: d
                });
              };
              uy.prototype.sendMessage = function() {
              };
              function wy(a2) {
                a2 = du(a2, Rm() ? "https" : window.location.protocol);
                if (Rm())
                  yy(a2);
                else
                  try {
                    a2 && (ft(a2) ? jt(a2) : nt(a2));
                  } catch (b) {
                  }
              }
              function yy(a2) {
                new xu().get({
                  url: a2,
                  timeout: new $t()
                }).then(function() {
                }, function() {
                });
              }
              ;
              var zy = function(a2, b, c) {
                var d = Error.call(this);
                this.message = d.message;
                "stack" in d && (this.stack = d.stack);
                this.l = b;
                this.g = c;
                this.o = a2;
              };
              t(zy, Error);
              l = zy.prototype;
              l.getAd = function() {
                return this.B;
              };
              l.getInnerError = function() {
                return this.h;
              };
              l.getMessage = function() {
                return this.l;
              };
              l.getErrorCode = function() {
                return this.g;
              };
              l.Ed = function() {
                return 1e3 > this.g ? this.g : 900;
              };
              l.getType = function() {
                return this.o;
              };
              l.toString = function() {
                return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "");
              };
              var Ay = function(a2, b) {
                this.message = a2;
                this.errorCode = b;
              };
              Ay.prototype.getErrorCode = function() {
                return this.errorCode;
              };
              Ay.prototype.getMessage = function() {
                return this.message;
              };
              var By = new Ay("Failed to initialize ad playback element before starting ad playback.", 400), Cy = new Ay("The provided {0} information: {1} is invalid.", 1101);
              function Dy(a2, b, c) {
                var d = b === void 0 ? null : b;
                if (!(d instanceof zy)) {
                  var e = a2.errorCode, f = a2.message, g = Array.prototype.slice.call(arguments, 2);
                  if (0 < g.length)
                    for (var h = 0; h < g.length; h++)
                      f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
                  e = new zy("adPlayError", f, e);
                  e.h = d;
                  d = e;
                }
                return d;
              }
              ;
              var Ey = function() {
                this.errorMessage = this.info = this.error = this.Zc = null;
              }, Fy = function(a2, b) {
                a2.Zc = b;
                return a2;
              };
              Ey.prototype.getError = function() {
                return this.error;
              };
              var Gy = function(a2, b) {
                a2.errorMessage = b;
                return a2;
              };
              Ey.prototype.getErrorMessage = function() {
                return this.errorMessage;
              };
              var Hy = function() {
                this.cache = {};
              }, Ly = function() {
                Iy || (Jy = Og(Bg), Ky = Og(Ag), Iy = new Hy());
                return Iy;
              }, My = function(a2) {
                var b = C(a2, 3);
                if (!b)
                  return 3;
                if (C(a2, 2) === void 0)
                  return 4;
                a2 = Date.now();
                return a2 > b + 36e5 * Ky ? 2 : a2 > b + 36e5 * Jy ? 1 : 0;
              };
              Hy.prototype.get = function(a2, b) {
                var c = new Ey();
                if (this.cache[a2])
                  return Fy(c, this.cache[a2]);
                var d = "";
                try {
                  d = b.getItem("_GESPSK-" + a2);
                } catch (e) {
                  return c.error = 6, Gy(c, e.message);
                }
                if (!d)
                  return new Ey();
                b = null;
                try {
                  b = xe(Gk, d ? JSON.parse(d) : null);
                } catch (e) {
                  return a2 = new Ey(), a2.error = 5, Gy(a2, e.message);
                }
                b && (this.cache[a2] = b);
                return Fy(new Ey(), b);
              };
              Hy.prototype.set = function(a2, b) {
                var c = C(a2, 1), d = "_GESPSK-" + c, e = Fy(new Ey(), a2);
                try {
                  b.setItem(d, Oe(a2));
                } catch (f) {
                  e.info = 7, Gy(e, f.message);
                }
                this.cache[c] = a2;
                return e;
              };
              var Iy = null, Jy = 24, Ky = 72;
              var Ny = function() {
                this.g = function() {
                  return [];
                };
              };
              function Oy(a2, b, c, d) {
                c = c === void 0 ? null : c;
                d = d === void 0 ? {} : d;
                if (Math.random() < Og(Dg)) {
                  var e = {}, f = Object, g = f.assign;
                  e.c = String(a2);
                  a2 = String;
                  var h = window;
                  if (typeof h.goog_pvsid !== "number")
                    try {
                      Object.defineProperty(h, "goog_pvsid", {
                        value: Math.floor(Math.random() * Math.pow(2, 52)),
                        configurable: false
                      });
                    } catch (k) {
                    }
                  fg(g.call(f, (e.pc = a2(Number(h.goog_pvsid) || -1), e.em = c, e.lid = b, e.eids = H(Ny).g().join(), e), d), "esp");
                }
              }
              ;
              function Py(a2) {
                if (!a2)
                  return null;
                var b = new Ck(), c = Og(Cg), d = [], e = RegExp("^_GESPSK-(.+)$");
                try {
                  for (var f = 0; f < a2.length; f++) {
                    var g = (e.exec(a2.key(f)) || [])[1];
                    g && d.push(g);
                  }
                } catch (k) {
                }
                d = q(d);
                for (e = d.next(); !e.done; e = d.next())
                  if (e = e.value, f = Ly().get(e, a2), f.getError())
                    Oy(f.getError(), e, f.getErrorMessage());
                  else if (f = f.Zc) {
                    if (g = My(f), g === 0 || g === 1)
                      if (g = C(f, 2), 0 <= c && g && g.length > c)
                        Oy(12, e);
                      else {
                        var h = Gk;
                        g = Ke(b, h, 2);
                        f = f ? f : new h();
                        h = Be(b, 2);
                        g.push(f);
                        h.push(Le(f, false));
                        Oy(19, e);
                      }
                  }
                Ke(b, Gk, 2).length ? (a2 = new ce(), oe(a2, 1, Ke(b, Dk, 1), Fk), oe(a2, 2, Ke(b, Gk, 2), Hk), Qe(b, a2), b = he(a2), b = Zd(b, 2)) : b = null;
                return b;
              }
              ;
              var Qy = function() {
                L.apply(this, arguments);
                this.g = [];
                this.h = [];
                this.l = [];
              };
              t(Qy, L);
              Qy.prototype.N = function() {
                this.g.length = 0;
                this.l.length = 0;
                this.h.length = 0;
                L.prototype.N.call(this);
              };
              var Ry = function() {
                var a2 = this;
                this.promise = new Promise(function(b, c) {
                  a2.resolve = b;
                  a2.reject = c;
                });
              };
              var Sy = function(a2) {
                a2 = Error.call(this, a2);
                this.message = a2.message;
                "stack" in a2 && (this.stack = a2.stack);
                Object.setPrototypeOf(this, Sy.prototype);
                this.name = "InputError";
              };
              t(Sy, Error);
              var Ty = function() {
                var a2 = this;
                this.C = this.o = null;
                this.B = -1;
                this.h = new Ry();
                this.g = false;
                this.h.promise.then(function() {
                  a2.B !== -1 && (a2.C = $g() - a2.B);
                }, function() {
                });
              }, Uy = function() {
                Ty.apply(this, arguments);
              };
              t(Uy, Ty);
              var Vy = function(a2, b) {
                a2.g || (a2.g = true, a2.o = b, a2.h.resolve(b));
              }, Wy = function(a2) {
                a2.g || (a2.g = true, a2.o = null, a2.h.resolve(null));
              };
              da.Object.defineProperties(Uy.prototype, {
                promise: {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return this.h.promise;
                  }
                },
                l: {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return this.g;
                  }
                }
              });
              var Xy = function(a2) {
                Ty.call(this);
                this.l = a2;
              };
              t(Xy, Ty);
              da.Object.defineProperties(Xy.prototype, {
                error: {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return this.l.A;
                  }
                }
              });
              var Yy = function(a2) {
                Xy.call(this, a2);
                this.l = a2;
              };
              t(Yy, Xy);
              da.Object.defineProperties(Yy.prototype, {
                value: {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return this.l.o;
                  }
                }
              });
              function Zy(a2, b) {
                return ab(this, function d() {
                  var e, f, g;
                  return Da(d, function(h) {
                    if (h.g == 1)
                      return e = 0 < b ? a2.filter(function(k) {
                        return !k.qd;
                      }) : a2, wa(h, Promise.all(e.map(function(k) {
                        return k.xd.promise;
                      })), 2);
                    if (h.g != 3) {
                      if (a2.length === e.length)
                        return h.return(0);
                      f = a2.filter(function(k) {
                        return k.qd;
                      });
                      g = $g();
                      return wa(h, Promise.race([Promise.all(f.map(function(k) {
                        return k.xd.promise;
                      })), new Promise(function(k) {
                        return void setTimeout(k, b);
                      })]), 3);
                    }
                    return h.return($g() - g);
                  });
                });
              }
              var $y = function(a2, b) {
                b = b === void 0 ? 0 : b;
                L.call(this);
                this.id = a2;
                this.D = b;
                this.g = new Qy();
                this.C = false;
                this.J = -1;
                aj(this, this.g);
              };
              t($y, L);
              $y.prototype.start = function() {
                return ab(this, function b() {
                  var c = this, d, e, f, g;
                  return Da(b, function(h) {
                    switch (h.g) {
                      case 1:
                        if (c.C)
                          return h.return();
                        c.C = true;
                        h.h = 2;
                        return wa(h, Zy(c.g.h, c.D), 4);
                      case 4:
                        c.J = h.A;
                        if (c.Ra()) {
                          h.g = 5;
                          break;
                        }
                        for (var k = 0, n = q(c.g.l), m = n.next(); !m.done; m = n.next()) {
                          if (m.value.l.o === null)
                            throw Error("missing input: " + c.id + "/" + k);
                          ++k;
                        }
                        d = q(c.g.g);
                        for (e = d.next(); !e.done; e = d.next())
                          f = e.value, f.B = $g();
                        return wa(h, c.A(), 5);
                      case 5:
                        h.g = 0;
                        h.h = 0;
                        break;
                      case 2:
                        g = xa(h);
                        if (c.Ra())
                          return h.return();
                        if (!(g instanceof Sy) && g instanceof Error && (c.G(c.id, g), c.g.g.length)) {
                          for (k = new Sy(g.message), n = q(c.g.g), m = n.next(); !m.done; m = n.next())
                            if (m = m.value, !m.l) {
                              var v = k;
                              m.g = true;
                              m.A = v;
                              m.h.reject(v);
                            }
                        }
                        h.g = 0;
                    }
                  });
                });
              };
              var az = function(a2) {
                var b = new Uy();
                a2.g.g.push(b);
                return b;
              }, bz = function(a2, b) {
                a2.g.h.push({
                  qd: false,
                  xd: b
                });
                return new Yy(b);
              };
              var cz = function(a2, b) {
                $y.call(this, a2);
                this.id = a2;
                this.G = b;
              };
              t(cz, $y);
              var dz = function(a2, b, c, d) {
                cz.call(this, 655, d);
                this.Fa = a2;
                this.B = b;
                this.H = c;
                this.l = az(this);
                this.o = az(this);
                this.h = Og(zg);
              };
              t(dz, cz);
              dz.prototype.A = function() {
                var a2, b = Ly().get(this.Fa, this.H);
                if (b.getError())
                  Oy(b.getError(), this.Fa, b.getErrorMessage()), Wy(this.l), Wy(this.o);
                else {
                  var c = Date.now();
                  if (b = b.Zc)
                    if (this.h && (C(b, 8) == null && (Oy(33, this.Fa), Ae(b, 8, this.h)), C(b, 7) == null && (Oy(34, this.Fa), Ae(b, 7, Math.round(Date.now() / 1e3 / 60)))), C(b, 3) != null || Oy(35, this.Fa), this.h) {
                      var d = Ce(b, 8), e = (a2 = C(b, 7)) !== null && a2 !== void 0 ? a2 : c;
                      d < this.h && Ae(b, 8, Math.min(d + Number((this.h * (c / 1e3 / 60 - e) / 60).toFixed(3)), this.h));
                      1 > Ce(b, 8) ? (c = {}, Oy(22, this.Fa, null, (c.t = String(e), c.cr = String(d), c.cs = String(My(b)), c)), Wy(this.l), Wy(this.o)) : (Vy(this.l, this.B), Vy(this.o, b));
                    } else
                      Vy(this.l, this.B), Vy(this.o, b);
                  else
                    Vy(this.l, this.B), b = this.o, d = new Gk(), d = Ae(d, 1, this.Fa), d = Ae(d, 8, this.h), c = Ae(d, 3, c), Vy(b, c);
                }
              };
              function ez(a2, b, c, d) {
                Oy(18, a2);
                try {
                  var e = $g();
                  Og(zg) && (Ae(b, 8, Number((Ce(b, 8) - 1).toFixed(3))), Ae(b, 7, Math.round(e / 1e3 / 60)));
                  return c().then(function(f) {
                    Oy(29, a2, null, {
                      delta: String($g() - e)
                    });
                    Ae(b, 3, Date.now());
                    fz(a2, b, f, d);
                    return b;
                  }).catch(function(f) {
                    fz(a2, b, C(b, 2), d);
                    Oy(28, a2, gz(f));
                    return b;
                  });
                } catch (f) {
                  return fz(a2, b, C(b, 2), d), Oy(1, a2, gz(f)), Promise.resolve(b);
                }
              }
              var fz = function(a2, b, c, d) {
                typeof c !== "string" ? Oy(21, a2) : c || Oy(20, a2);
                Ae(b, 2, c);
                b = Ly().set(b, d);
                b.getErrorMessage() ? Oy(b.info, a2, b.getErrorMessage()) : Oy(27, a2);
              }, gz = function(a2) {
                return typeof a2 === "string" ? a2 : a2 instanceof Error ? a2.message : null;
              };
              var hz = function(a2, b, c, d) {
                cz.call(this, 658, d);
                this.H = c;
                this.h = az(this);
                this.l = az(this);
                this.o = az(this);
                this.B = bz(this, a2);
                this.K = bz(this, b);
              };
              t(hz, cz);
              hz.prototype.A = function() {
                var a2 = this;
                if (this.B.value) {
                  var b = function(g) {
                    Vy(a2.h, {
                      id: C(g, 1),
                      yc: C(g, 2)
                    });
                  }, c = this.B.value, d = this.K.value, e = C(d, 1), f = My(d);
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
                      Oy(23, e);
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
                      Ae(d, 2, null), ez(e, d, c, this.H).then(b), iz(this);
                  }
                } else
                  Wy(this.h), iz(this);
              };
              var iz = function(a2) {
                Wy(a2.l);
                Wy(a2.o);
              };
              function jz() {
                var a2 = window;
                var b = b === void 0 ? function() {
                } : b;
                return new Promise(function(c) {
                  var d = function() {
                    c(b());
                    hf(a2, "load", d);
                  };
                  gf(a2, "load", d);
                });
              }
              ;
              var kz = function(a2, b, c, d) {
                cz.call(this, 662, d);
                this.o = c;
                this.h = bz(this, a2);
                this.l = bz(this, b);
              };
              t(kz, cz);
              kz.prototype.A = function() {
                var a2 = this;
                this.l.value && this.h.value && jz().then(function() {
                  var b = a2.l.value;
                  ez(C(b, 1), b, a2.h.value, a2.o);
                });
              };
              var lz = function() {
                L.apply(this, arguments);
                this.g = [];
              };
              t(lz, L);
              lz.prototype.N = function() {
                L.prototype.N.call(this);
                this.g.length = 0;
              };
              function mz(a2, b, c, d) {
                return ab(this, function f() {
                  var g, h, k, n, m;
                  return Da(f, function(v) {
                    if (v.g == 1) {
                      g = new dz(a2, b, c, d);
                      h = new hz(g.l, g.o, c, d);
                      k = new kz(h.l, h.o, c, d);
                      n = new lz();
                      for (var r = q([g, h, k]), w = r.next(); !w.done; w = r.next())
                        w = w.value, aj(n, w), n.g.push(w);
                      if (n.g.length)
                        for (r = q(n.g), w = r.next(); !w.done; w = r.next())
                          w.value.start();
                      return wa(v, h.h.promise, 2);
                    }
                    m = v.A;
                    return v.return(m ? m : {
                      id: a2,
                      yc: null
                    });
                  });
                });
              }
              ;
              var nz = function(a2, b) {
                this.B = b;
                this.l = [];
                this.h = [];
                this.g = [];
                a2 = q(a2);
                for (b = a2.next(); !b.done; b = a2.next())
                  this.push(b.value);
              };
              nz.prototype.push = function(a2) {
                var b = a2.id;
                a2 = a2.collectorFunction;
                if (typeof b !== "string")
                  Oy(37, "invalid-id");
                else if (typeof a2 !== "function")
                  Oy(14, b);
                else {
                  var c = {};
                  Oy(17, b, null, (c.api = "1", c));
                  b = mz(b, a2, this.B, this.o);
                  this.l.push(b);
                  a2 = q(this.h);
                  for (c = a2.next(); !c.done; c = a2.next())
                    b.then(c.value);
                }
              };
              var oz = function(a2, b) {
                a2.h.push(b);
                a2 = q(a2.l);
                for (var c = a2.next(); !c.done; c = a2.next())
                  c.value.then(b);
              };
              nz.prototype.o = function(a2, b) {
                for (var c = q(this.g), d = c.next(); !d.done; d = c.next())
                  d = d.value, d(a2, b);
              };
              function pz(a2, b, c, d) {
                var e;
                if (b) {
                  var f = Of();
                  var g = window;
                  g = Lf(g.top) ? g.top : null;
                  f === g || Ng(yg) ? a2.encryptedSignalProviders instanceof nz ? (d && oz(a2.encryptedSignalProviders, d), a2.encryptedSignalProviders.g.push(c)) : (f = new nz((e = a2.encryptedSignalProviders) !== null && e !== void 0 ? e : [], b), a2.encryptedSignalProviders = f, d && oz(f, d), f.g.push(c)) : Oy(16, "");
                } else
                  Oy(15, "");
              }
              function qz(a2, b, c, d) {
                var e = new Map();
                b = b.map(function(f) {
                  var g = f.Fa;
                  return new Promise(function(h) {
                    e.set(g, h);
                  });
                });
                pz(a2, c, d, function(f) {
                  var g = f.yc;
                  f = f.id;
                  var h;
                  return void ((h = e.get(f)) === null || h === void 0 ? void 0 : h({
                    yc: g,
                    id: f
                  }));
                });
                return b;
              }
              ;
              var rz = function() {
                return u.googletag || (u.googletag = {});
              };
              function sz(a2) {
                if (!a2 || Zx(a2))
                  return null;
                try {
                  return window.localStorage;
                } catch (b) {
                  return null;
                }
              }
              function tz(a2, b) {
                a2 = sz(a2);
                pz(rz(), a2, function() {
                }, b);
              }
              function uz(a2, b) {
                return (b = sz(b)) && a2.length != 0 ? qz(rz(), a2, b, function() {
                }) : null;
              }
              ;
              var vz = function(a2, b) {
                return a2.indexOf(b) == 0 ? a2.substr(b.length) : null;
              };
              var wz = function(a2) {
                try {
                  var b = new P(a2);
                  if (!b.h.includes(".cdn.ampproject.org"))
                    return null;
                  var c = b.g.split("/").slice(1);
                  if (2 > c.length)
                    return a2;
                  var d = c[1] == "s";
                  if (d && 3 > c.length)
                    return null;
                  c = d ? c.slice(2) : c.slice(1);
                  var e = decodeURIComponent(c[0]) + "/";
                  return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/");
                } catch (f) {
                  return null;
                }
              };
              var xz = function() {
                M.call(this);
                this.G = false;
                this.g = null;
                this.A = this.D = this.K = false;
                this.h = 0;
                this.o = [];
                this.C = false;
                this.R = this.M = Infinity;
                this.l = 0;
                this.J = new ru(this);
                aj(this, this.J);
                this.H = {};
              };
              t(xz, M);
              var zz = function(a2, b) {
                b == null || a2.G || (a2.g = b, yz(a2), a2.G = true);
              }, Bz = function(a2) {
                a2.g != null && a2.G && (Az(a2), a2.G = false, a2.D = false, a2.A = false, a2.h = 0, a2.o = [], a2.C = false);
              }, yz = function(a2) {
                Az(a2);
                !(a2.g instanceof M) && "ontouchstart" in document.documentElement && Fd ? (a2.H = {
                  touchstart: function(b) {
                    a2.D = true;
                    a2.h = b.touches.length;
                    a2.l && (window.clearTimeout(a2.l), a2.l = 0, a2.K = true);
                    a2.C = Cz(a2, b.touches) || b.touches.length != 1;
                    a2.C ? (a2.M = Infinity, a2.R = Infinity) : (a2.M = b.touches[0].clientX, a2.R = b.touches[0].clientY);
                    b = b.touches;
                    a2.o = [];
                    for (var c = 0; c < b.length; c++)
                      a2.o.push(b[c].identifier);
                  },
                  touchmove: function(b) {
                    a2.h = b.touches.length;
                    if (!ku(8) || Math.pow(b.changedTouches[0].clientX - a2.M, 2) + Math.pow(b.changedTouches[0].clientY - a2.R, 2) > Math.pow(5, 2))
                      a2.A = true;
                  },
                  touchend: function(b) {
                    return void Dz(a2, b);
                  }
                }, Gb(a2.H, function(b, c) {
                  a2.g.addEventListener(c, b, false);
                })) : a2.J.O(a2.g, "click", a2.T);
              }, Az = function(a2) {
                a2.J.Ua(a2.g, "click", a2.T);
                Gb(a2.H, function(b, c) {
                  this.g.removeEventListener(c, b, false);
                }, a2);
                a2.H = {};
              }, Dz = function(a2, b) {
                !a2.D || a2.h != 1 || a2.A || a2.K || a2.C || !Cz(a2, b.changedTouches) || (a2.l = window.setTimeout(function() {
                  return void Ez(a2);
                }, 300));
                a2.h = b.touches.length;
                a2.h == 0 && (a2.D = false, a2.A = false, a2.o = []);
                a2.K = false;
              };
              xz.prototype.T = function() {
                Ez(this);
              };
              var Cz = function(a2, b) {
                for (var c = 0; c < b.length; c++)
                  if (a2.o.includes(b[c].identifier))
                    return true;
                return false;
              }, Ez = function(a2) {
                a2.l = 0;
                a2.dispatchEvent(new bj("click"));
              };
              xz.prototype.N = function() {
                Bz(this);
                M.prototype.N.call(this);
              };
              var Fz = function(a2, b, c) {
                this.h = c;
                b.length == 0 && (b = [
                  []
                ]);
                this.g = b.map(function(d) {
                  d = a2.concat(d);
                  for (var e = [], f = 0, g = 0; f < d.length; ) {
                    var h = d[f++];
                    if (128 > h)
                      e[g++] = String.fromCharCode(h);
                    else if (191 < h && 224 > h) {
                      var k = d[f++];
                      e[g++] = String.fromCharCode((h & 31) << 6 | k & 63);
                    } else if (239 < h && 365 > h) {
                      k = d[f++];
                      var n = d[f++], m = d[f++];
                      h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                      e[g++] = String.fromCharCode(55296 + (h >> 10));
                      e[g++] = String.fromCharCode(56320 + (h & 1023));
                    } else
                      k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | n & 63);
                  }
                  return new RegExp(e.join(""));
                });
              };
              Fz.prototype.match = function(a2) {
                var b = this;
                return this.g.some(function(c) {
                  c = a2.match(c);
                  return c == null ? false : !b.h || 1 <= c.length && c[1] == "3.482.0" || 2 <= c.length && c[2] == "3.482.0" ? true : false;
                });
              };
              var Gz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47], Hz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47], Iz = [
                104,
                116,
                116,
                112,
                115,
                63,
                58,
                47,
                47,
                105,
                109,
                97,
                115,
                100,
                107,
                92,
                46,
                103,
                111,
                111,
                103,
                108,
                101,
                97,
                112,
                105,
                115,
                92,
                46,
                99,
                111,
                109,
                47,
                112,
                114,
                101,
                114,
                101,
                108,
                101,
                97,
                115,
                101,
                47,
                106,
                115,
                47,
                91,
                48,
                45,
                57,
                93,
                43,
                92,
                46,
                91,
                48,
                45,
                57,
                92,
                46,
                93,
                43,
                47
              ], Jz = [
                [105, 109, 97, 51, 92, 46, 106, 115],
                [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
              ], Kz = [
                [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                [
                  98,
                  114,
                  105,
                  100,
                  103,
                  101,
                  40,
                  91,
                  48,
                  45,
                  57,
                  93,
                  43,
                  92,
                  46,
                  91,
                  48,
                  45,
                  57,
                  92,
                  46,
                  93,
                  43,
                  41,
                  95,
                  100,
                  101,
                  98,
                  117,
                  103,
                  40,
                  95,
                  40,
                  91,
                  97,
                  45,
                  122,
                  48,
                  45,
                  57,
                  93,
                  41,
                  123,
                  50,
                  44,
                  51,
                  125,
                  41,
                  123,
                  48,
                  44,
                  50,
                  125,
                  92,
                  46,
                  104,
                  116,
                  109,
                  108
                ],
                [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
              ], Lz = [
                [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
                [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
              ], Mz = new Fz(Gz, Jz, false), Nz = new Fz(Gz, Kz, true), Oz = new Fz(Hz, Jz, false), Pz = new Fz(Hz, Kz, true), Qz = new Fz(Iz, Jz, false), Rz = new Fz([
                104,
                116,
                116,
                112,
                115,
                63,
                58,
                47,
                47,
                40,
                112,
                97,
                103,
                101,
                97,
                100,
                50,
                124,
                116,
                112,
                99,
                41,
                92,
                46,
                103,
                111,
                111,
                103,
                108,
                101,
                115,
                121,
                110,
                100,
                105,
                99,
                97,
                116,
                105,
                111,
                110,
                92,
                46,
                99,
                111,
                109,
                47,
                112,
                97,
                103,
                101,
                97,
                100,
                47,
                40,
                103,
                97,
                100,
                103,
                101,
                116,
                115,
                124,
                106,
                115,
                41,
                47
              ], [], false), Sz = new Fz(Gz, [
                [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
                [
                  100,
                  97,
                  105,
                  95,
                  105,
                  102,
                  114,
                  97,
                  109,
                  101,
                  40,
                  91,
                  48,
                  45,
                  57,
                  93,
                  43,
                  92,
                  46,
                  91,
                  48,
                  45,
                  57,
                  92,
                  46,
                  93,
                  43,
                  41,
                  95,
                  100,
                  101,
                  98,
                  117,
                  103,
                  40,
                  95,
                  40,
                  91,
                  97,
                  45,
                  122,
                  48,
                  45,
                  57,
                  93,
                  41,
                  123,
                  50,
                  44,
                  51,
                  125,
                  41,
                  123,
                  48,
                  44,
                  50,
                  125,
                  92,
                  46,
                  104,
                  116,
                  109,
                  108
                ],
                [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
              ], true), Tz = new Fz(Gz, Lz, false), Uz = new Fz(Iz, Lz, false), Jb = {
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
              function Vz(a2) {
                for (var b = null, c = 0; c < a2.length; c++)
                  if (b = a2[c], Ib(function(d) {
                    return d.match(b.src);
                  }))
                    return b;
                return null;
              }
              ;
              var Wz = function() {
                var a2 = E(), b = document;
                return new P(a2.parent == a2 ? a2.location.href : b.referrer);
              }, Xz = function(a2, b) {
                Ws(a2, "url", "");
                try {
                  var c = 2083 - a2.toString().length - 1;
                  if (0 >= c)
                    return a2.toString();
                  for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c; )
                    d = b.slice(0, f--), e = encodeURIComponent(d);
                  Ws(a2, "url", d);
                } catch (g) {
                }
                return a2.toString();
              };
              var Yz = function() {
                this.g = 0.01 > Math.random();
                this.h = Math.floor(4503599627370496 * Math.random());
              };
              Yz.prototype.report = function(a2, b, c) {
                b = b === void 0 ? {} : b;
                if (u.G_testRunner == null && (this.g || (c === void 0 ? 0 : c))) {
                  b.lid = a2;
                  b.sdkv = dy();
                  a2 = Zh().sort().join(",");
                  jc(Zc(a2)) || (b.e = a2);
                  b = Zz(this, b);
                  var d = new P("http://pagead2.googlesyndication.com/pagead/gen_204");
                  Gb(b, function(e, f) {
                    Ws(d, f, e == null ? "" : typeof e == "boolean" ? e ? "t" : "f" : "" + e);
                  }, this);
                  b = Wz();
                  Js(d, b.o);
                  b = d.toString();
                  a2 = d.l.get("url");
                  a2 != null && Ic() && 2083 < b.length && (b = Xz(d, a2));
                  wy(b);
                }
              };
              var Zz = function(a2, b) {
                b.id = "ima_html5";
                var c = Wz();
                b.c = a2.h;
                b.domain = c.h;
                return b;
              }, $z = function() {
                return H(Yz);
              };
              var aA = function(a2, b, c, d, e) {
                e = e === void 0 ? "" : e;
                bj.call(this, a2);
                this.ha = b;
                this.la = c;
                this.Mb = d;
                this.Jd = e;
              };
              t(aA, bj);
              aA.prototype.toString = function() {
                return "";
              };
              var bA = function(a2) {
                this.g = a2;
              };
              l = bA.prototype;
              l.getTotalAds = function() {
                return this.g.totalAds;
              };
              l.getMaxDuration = function() {
                return this.g.maxDuration;
              };
              l.getAdPosition = function() {
                return this.g.adPosition;
              };
              l.getPodIndex = function() {
                return this.g.podIndex;
              };
              l.getTimeOffset = function() {
                return this.g.timeOffset;
              };
              l.getIsBumper = function() {
                return this.g.isBumper;
              };
              bA.prototype.getIsBumper = bA.prototype.getIsBumper;
              bA.prototype.getTimeOffset = bA.prototype.getTimeOffset;
              bA.prototype.getPodIndex = bA.prototype.getPodIndex;
              bA.prototype.getAdPosition = bA.prototype.getAdPosition;
              bA.prototype.getMaxDuration = bA.prototype.getMaxDuration;
              bA.prototype.getTotalAds = bA.prototype.getTotalAds;
              var cA = function(a2) {
                this.g = a2;
              };
              l = cA.prototype;
              l.getContent = function() {
                return this.g.content;
              };
              l.getContentType = function() {
                return this.g.contentType;
              };
              l.getWidth = function() {
                return this.g.size.width;
              };
              l.getHeight = function() {
                return this.g.size.height;
              };
              l.Bd = function() {
                return this.g.adSlotId;
              };
              var sy = function(a2) {
                return (a2 = a2.g.backupCompanions) ? a2.map(function(b) {
                  return new cA(b);
                }) : [];
              };
              cA.prototype.getAdSlotId = cA.prototype.Bd;
              cA.prototype.getHeight = cA.prototype.getHeight;
              cA.prototype.getWidth = cA.prototype.getWidth;
              cA.prototype.getContentType = cA.prototype.getContentType;
              cA.prototype.getContent = cA.prototype.getContent;
              var dA = function(a2, b) {
                this.h = a2;
                this.g = b;
              };
              dA.prototype.getAdIdValue = function() {
                return this.h;
              };
              dA.prototype.getAdIdRegistry = function() {
                return this.g;
              };
              dA.prototype.getAdIdRegistry = dA.prototype.getAdIdRegistry;
              dA.prototype.getAdIdValue = dA.prototype.getAdIdValue;
              var Y = function(a2) {
                this.g = a2;
              };
              Y.prototype.getAdId = function() {
                return this.g.adId;
              };
              Y.prototype.getCreativeAdId = function() {
                return this.g.creativeAdId;
              };
              Y.prototype.getCreativeId = function() {
                return this.g.creativeId;
              };
              var eA = function(a2) {
                return a2.g.adQueryId;
              };
              l = Y.prototype;
              l.getAdSystem = function() {
                return this.g.adSystem;
              };
              l.getAdvertiserName = function() {
                return this.g.advertiserName;
              };
              l.getApiFramework = function() {
                return this.g.apiFramework;
              };
              l.getWrapperAdIds = function() {
                return this.g.adWrapperIds;
              };
              l.getWrapperCreativeIds = function() {
                return this.g.adWrapperCreativeIds;
              };
              l.getWrapperAdSystems = function() {
                return this.g.adWrapperSystems;
              };
              l.isLinear = function() {
                return this.g.linear;
              };
              l.isSkippable = function() {
                return this.g.skippable;
              };
              l.getContentType = function() {
                return this.g.contentType;
              };
              l.Fe = function() {
                return this.g.description;
              };
              l.He = function() {
                return this.g.title;
              };
              l.getDuration = function() {
                return this.g.duration;
              };
              l.getVastMediaWidth = function() {
                return this.g.vastMediaWidth;
              };
              l.getVastMediaHeight = function() {
                return this.g.vastMediaHeight;
              };
              l.getWidth = function() {
                return this.g.width;
              };
              l.getHeight = function() {
                return this.g.height;
              };
              l.getUiElements = function() {
                return this.g.uiElements;
              };
              l.getMinSuggestedDuration = function() {
                return this.g.minSuggestedDuration;
              };
              l.getAdPodInfo = function() {
                return new bA(this.g.adPodInfo);
              };
              l.getCompanionAds = function(a2, b, c) {
                if (!this.g.companions)
                  return [];
                var d = this.g.companions.map(function(e) {
                  return new cA(e);
                });
                return ry(new oy(new mf(a2, b), c), d);
              };
              l.getTraffickingParameters = function() {
                return Bu(Zc(this.g.traffickingParameters));
              };
              l.getTraffickingParametersString = function() {
                return this.g.traffickingParameters;
              };
              l.getVastMediaBitrate = function() {
                return this.g.vastMediaBitrate;
              };
              l.getMediaUrl = function() {
                return this.g.mediaUrl;
              };
              l.getSurveyUrl = function() {
                return this.g.surveyUrl;
              };
              l.getDealId = function() {
                return this.g.dealId;
              };
              l.Ie = function() {
                return (this.g.universalAdIds || []).map(function(a2) {
                  return new dA(a2.adIdValue, a2.adIdRegistry);
                });
              };
              l.getUniversalAdIdValue = function() {
                return this.g.universalAdIdValue;
              };
              l.getUniversalAdIdRegistry = function() {
                return this.g.universalAdIdRegistry;
              };
              l.getSkipTimeOffset = function() {
                return this.g.skipTimeOffset;
              };
              l.isUiDisabled = function() {
                return this.g.disableUi;
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
              var fA = null, gA = function() {
                M.call(this);
                this.g = null;
                this.D = new ru(this);
                aj(this, this.D);
                this.h = new Map();
                this.o = new Map();
                this.l = this.A = false;
                this.C = null;
              }, hA;
              t(gA, M);
              var iA = function() {
                fA == null && (fA = new gA());
                return fA;
              }, ur = function(a2, b, c) {
                var d = {};
                d.queryId = b;
                d.viewabilityData = c;
                a2.g && vy(a2.g, "activityMonitor", "viewabilityMeasurement", d);
              };
              gA.prototype.destroy = function() {
                this.D.Ua(this.g, "activityMonitor", this.G);
                this.l = false;
                this.h.clear();
                this === hA && (hA = null);
              };
              gA.prototype.N = function() {
                this.destroy();
                M.prototype.N.call(this);
              };
              gA.prototype.init = function(a2) {
                if (!this.l) {
                  if (this.g = a2 || null)
                    this.D.O(this.g, "activityMonitor", this.G), jA(this);
                  if (!(u.ima && u.ima.video && u.ima.video.client && u.ima.video.client.tagged)) {
                    y("ima.video.client.sdkTag", true, void 0);
                    var b = u.document;
                    a2 = wf(document, "SCRIPT");
                    var c = hc(cc(dc("https://s0.2mdn.net/instream/video/client.js")));
                    a2.src = bf(c);
                    df(a2);
                    a2.async = true;
                    a2.type = "text/javascript";
                    b = b.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a2, b);
                  }
                  El();
                  H(kr).J = W.g;
                  this.A = true;
                  H(kr).l = true;
                  this.C = null;
                  a2 = H(kr);
                  b = Kq(a2) == "h" || Kq(a2) == "b";
                  c = !(N(), false);
                  b && c && (a2.L = true, a2.G = new Ro());
                  this.l = true;
                }
              };
              var lA = function(a2) {
                if (a2 == null)
                  return false;
                if ((Cd || Ed) && a2.webkitDisplayingFullscreen != null)
                  return a2.webkitDisplayingFullscreen;
                a2 = kA(a2);
                var b = window.screen.availHeight || window.screen.height;
                return 0 >= (window.screen.availWidth || window.screen.width) - a2.width && 42 >= b - a2.height;
              }, kA = function(a2) {
                var b = {
                  left: a2.offsetLeft,
                  top: a2.offsetTop,
                  width: a2.offsetWidth,
                  height: a2.offsetHeight
                };
                try {
                  typeof a2.getBoundingClientRect === "function" && Bf(of(a2), a2) && (b = a2.getBoundingClientRect());
                } catch (c) {
                }
                return b;
              }, mA = function(a2, b, c, d, e) {
                e = e === void 0 ? {} : e;
                if (a2.l) {
                  d && e.opt_osdId == null && (e.opt_osdId = d);
                  if (a2.C)
                    return a2.C(b, c, e);
                  if (a2 = d ? a2.o.get(d) : W.l)
                    e.opt_fullscreen == null && (e.opt_fullscreen = lA(a2)), e.opt_adElement == null && (e.opt_adElement = a2);
                  return bl.fb(469, Xa(xr, b, c, e), void 0) || {};
                }
                return {};
              }, nA = function(a2, b) {
                var c = String(Math.floor(1e9 * Math.random()));
                a2.o.set(c, b);
                if (Vh(Oi))
                  try {
                    Ak(function(d) {
                      if (a2.g) {
                        var e = {};
                        e.engagementString = d;
                        vy(a2.g, "activityMonitor", "engagementData", e);
                      }
                    }, function() {
                      return b;
                    });
                  } catch (d) {
                  }
                W.g != 0 && vr(H(kr), c, a2);
                return c;
              }, oA = function(a2, b, c) {
                if (c)
                  a2.h.get(c) == b && a2.h.delete(c);
                else {
                  var d = [];
                  a2.h.forEach(function(e, f) {
                    e == b && d.push(f);
                  });
                  d.forEach(a2.h.delete, a2.h);
                }
              }, qr = function(a2, b) {
                a2 = a2.h.get(b);
                return typeof a2 === "function" ? a2() : {};
              }, jA = function(a2) {
                if (typeof window.Goog_AdSense_Lidar_getUrlSignalsArray === "function") {
                  var b = {};
                  b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                  vy(a2.g, "activityMonitor", "pageSignals", b);
                }
              };
              gA.prototype.G = function(a2) {
                var b = a2.la, c = b.queryId, d = {}, e = null;
                d.eventId = b.eventId;
                switch (a2.ha) {
                  case "getPageSignals":
                    jA(this);
                    break;
                  case "reportVastEvent":
                    e = b.vastEvent;
                    a2 = b.osdId;
                    var f = {};
                    f.opt_fullscreen = b.isFullscreen;
                    b.isOverlay && (f.opt_bounds = b.overlayBounds);
                    d.viewabilityData = mA(this, e, c, a2, f);
                    vy(this.g, "activityMonitor", "viewability", d);
                    break;
                  case "fetchAdTagUrl":
                    c = {}, c.eventId = b.eventId, a2 = b.osdId, Pb(b, "isFullscreen") && (e = b.isFullscreen), Pb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, $z().report(43, {
                      step: "beforeLookup",
                      logid: b,
                      time: Date.now()
                    })), c.engagementString = pA(this, a2, e), this.g && vy(this.g, "activityMonitor", "engagement", c);
                }
              };
              var pA = function(a2, b, c) {
                var d = b ? a2.o.get(b) : W.l;
                a2 = {};
                c != null && (a2.fullscreen = c);
                c = "";
                try {
                  c = zk(function() {
                    return d;
                  }, a2);
                } catch (e) {
                  c = "sdktle;" + Xc(e.name, 12) + ";" + Xc(e.message, 40);
                }
                return c;
              };
              y("ima.common.getVideoMetadata", function(a2) {
                return qr(iA(), a2);
              }, void 0);
              y("ima.common.triggerViewabilityMeasurementUpdate", function(a2, b) {
                ur(iA(), a2, b);
              }, void 0);
              var qA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("about:blank")));
              gc(qA);
              var rA = vd ? hc(cc(dc('javascript:""'))) : hc(cc(dc("javascript:undefined")));
              gc(rA);
              var sA = function(a2, b, c) {
                b = b === void 0 ? null : b;
                c = c === void 0 ? null : c;
                bj.call(this, a2);
                this.l = b;
                this.g = c;
              };
              t(sA, bj);
              sA.prototype.getAd = function() {
                return this.l;
              };
              sA.prototype.getAdData = function() {
                return this.g;
              };
              var tA = function() {
                this.loadVideoTimeout = 8e3;
                this.autoAlign = true;
                this.bitrate = -1;
                this.uiElements = null;
                this.enablePreloading = this.disableClickThrough = false;
                this.mimeTypes = null;
                this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = false;
                this.playAdsAfterTime = -1;
                this.useVideoAdUi = true;
                this.disableUi = false;
              }, uA = function(a2, b) {
                var c = {};
                Object.assign(c, a2);
                b && (c.disableClickThrough = true);
                return c;
              };
              tA.prototype.append = function(a2) {
                if (a2) {
                  this.autoAlign = a2.autoAlign || this.autoAlign;
                  var b = ed(a2.bitrate);
                  typeof b === "number" && !isNaN(b) && 0 < b && (this.bitrate = b);
                  this.disableClickThrough = a2.disableClickThrough || this.disableClickThrough;
                  this.disableUi = a2.disableUi || this.disableUi;
                  this.enablePreloading = a2.enablePreloading || this.enablePreloading;
                  a2.mimeTypes && a2.mimeTypes.length != 0 && (this.mimeTypes = a2.mimeTypes);
                  b = ed(a2.playAdsAfterTime);
                  typeof b === "number" && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
                  this.restoreCustomPlaybackStateOnAdBreakComplete = a2.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
                  b = ed(a2.loadVideoTimeout);
                  typeof b === "number" && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
                  this.uiElements = a2.uiElements || this.uiElements;
                  this.useLearnMoreButton = a2.useLearnMoreButton || this.useLearnMoreButton;
                  this.useStyledLinearAds = a2.useStyledLinearAds || this.useStyledLinearAds;
                  this.useStyledNonLinearAds = a2.useStyledNonLinearAds || this.useStyledNonLinearAds;
                  this.useVideoAdUi = a2.useVideoAdUi === false ? false : this.useVideoAdUi;
                }
              };
              y("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1, void 0);
              var vA = function(a2, b) {
                this.h = a2[u.Symbol.iterator]();
                this.l = b;
                this.o = 0;
              };
              vA.prototype[Symbol.iterator] = function() {
                return this;
              };
              vA.prototype.next = function() {
                var a2 = this.h.next();
                return {
                  value: a2.done ? void 0 : this.l.call(void 0, a2.value, this.o++),
                  done: a2.done
                };
              };
              var wA = function(a2, b) {
                return new vA(a2, b);
              };
              var BA = function(a2) {
                if (a2 instanceof xA || a2 instanceof yA || a2 instanceof zA)
                  return a2;
                if (typeof a2.next == "function")
                  return new xA(function() {
                    return AA(a2);
                  });
                if (typeof a2[Symbol.iterator] == "function")
                  return new xA(function() {
                    return a2[Symbol.iterator]();
                  });
                if (typeof a2.lb == "function")
                  return new xA(function() {
                    return AA(a2.lb());
                  });
                throw Error("Not an iterator or iterable.");
              }, AA = function(a2) {
                if (!(a2 instanceof co))
                  return a2;
                var b = false;
                return {
                  next: function() {
                    for (var c; !b; )
                      try {
                        c = a2.g();
                        break;
                      } catch (d) {
                        if (d !== bo)
                          throw d;
                        b = true;
                      }
                    return {
                      value: c,
                      done: b
                    };
                  }
                };
              }, xA = function(a2) {
                this.h = a2;
              };
              xA.prototype.lb = function() {
                return new yA(this.h());
              };
              xA.prototype[Symbol.iterator] = function() {
                return new zA(this.h());
              };
              xA.prototype.l = function() {
                return new zA(this.h());
              };
              var yA = function(a2) {
                this.h = a2;
              };
              t(yA, co);
              yA.prototype.g = function() {
                var a2 = this.h.next();
                if (a2.done)
                  throw bo;
                return a2.value;
              };
              yA.prototype.next = function() {
                return yA.prototype.g.call(this);
              };
              yA.prototype[Symbol.iterator] = function() {
                return new zA(this.h);
              };
              yA.prototype.l = function() {
                return new zA(this.h);
              };
              var zA = function(a2) {
                xA.call(this, function() {
                  return a2;
                });
                this.o = a2;
              };
              t(zA, xA);
              zA.prototype.next = function() {
                return this.o.next();
              };
              var CA = function(a2, b) {
                this.h = {};
                this.g = [];
                this.l = this.size = 0;
                var c = arguments.length;
                if (1 < c) {
                  if (c % 2)
                    throw Error("Uneven number of arguments");
                  for (var d = 0; d < c; d += 2)
                    this.set(arguments[d], arguments[d + 1]);
                } else if (a2)
                  if (a2 instanceof CA)
                    for (c = a2.Vb(), d = 0; d < c.length; d++)
                      this.set(c[d], a2.get(c[d]));
                  else
                    for (d in a2)
                      this.set(d, a2[d]);
              };
              l = CA.prototype;
              l.qb = function() {
                DA(this);
                for (var a2 = [], b = 0; b < this.g.length; b++)
                  a2.push(this.h[this.g[b]]);
                return a2;
              };
              l.Vb = function() {
                DA(this);
                return this.g.concat();
              };
              l.has = function(a2) {
                return EA(this.h, a2);
              };
              l.isEmpty = function() {
                return this.size == 0;
              };
              l.clear = function() {
                this.h = {};
                this.l = this.size = this.g.length = 0;
              };
              l.remove = function(a2) {
                return FA(this, a2);
              };
              var FA = function(a2, b) {
                return EA(a2.h, b) ? (delete a2.h[b], --a2.size, a2.l++, a2.g.length > 2 * a2.size && DA(a2), true) : false;
              }, DA = function(a2) {
                if (a2.size != a2.g.length) {
                  for (var b = 0, c = 0; b < a2.g.length; ) {
                    var d = a2.g[b];
                    EA(a2.h, d) && (a2.g[c++] = d);
                    b++;
                  }
                  a2.g.length = c;
                }
                if (a2.size != a2.g.length) {
                  var e = {};
                  for (c = b = 0; b < a2.g.length; )
                    d = a2.g[b], EA(e, d) || (a2.g[c++] = d, e[d] = 1), b++;
                  a2.g.length = c;
                }
              };
              l = CA.prototype;
              l.get = function(a2, b) {
                return EA(this.h, a2) ? this.h[a2] : b;
              };
              l.set = function(a2, b) {
                EA(this.h, a2) || (this.size += 1, this.g.push(a2), this.l++);
                this.h[a2] = b;
              };
              l.forEach = function(a2, b) {
                for (var c = this.Vb(), d = 0; d < c.length; d++) {
                  var e = c[d], f = this.get(e);
                  a2.call(b, f, e, this);
                }
              };
              l.keys = function() {
                return BA(this.lb(true)).l();
              };
              l.values = function() {
                return BA(this.lb(false)).l();
              };
              l.entries = function() {
                var a2 = this;
                return wA(this.keys(), function(b) {
                  return [b, a2.get(b)];
                });
              };
              l.lb = function(a2) {
                DA(this);
                var b = 0, c = this.l, d = this, e = new co();
                e.g = function() {
                  if (c != d.l)
                    throw Error("The map has changed since the iterator was created");
                  if (b >= d.g.length)
                    throw bo;
                  var f = d.g[b++];
                  return a2 ? f : d.h[f];
                };
                e.next = e.g.bind(e);
                return e;
              };
              var EA = function(a2, b) {
                return Object.prototype.hasOwnProperty.call(a2, b);
              };
              var GA = null, HA = function() {
                M.call(this);
                this.g = new CA();
                this.h = null;
                this.o = new Map();
                this.l = new ru(this);
                aj(this, this.l);
                this.A = new Map();
                this.G = null;
                this.D = -1;
                N().l = true;
                iy();
              };
              t(HA, M);
              var IA = function() {
                GA == null && (GA = new HA());
                return GA;
              }, JA = function(a2, b) {
                var c = {};
                c.queryId = a2;
                c.viewabilityString = b;
                IA().dispatchEvent(new sA("measurable_impression", null, c));
              }, KA = function(a2, b) {
                var c = {};
                c.queryId = a2;
                c.viewabilityString = b;
                IA().dispatchEvent(new sA("viewable_impression", null, c));
              }, LA = function(a2, b, c) {
                var d = {};
                d.queryId = a2;
                d.viewabilityString = b;
                d.eventName = c;
                IA().dispatchEvent(new sA("externalActivityEvent", null, d));
              };
              HA.prototype.destroy = function() {
                this.l.Ua(this.h, "activityMonitor", this.C);
                this.h = null;
              };
              HA.prototype.C = function(a2) {
                var b = a2.la;
                switch (a2.ha) {
                  case "appStateChanged":
                    H(kr);
                    b = b.appState;
                    a2 = O();
                    a2.L != b && (a2.L = b, (a2 = H(gp).g) && en(a2.g, !b));
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
                    a2 = b.queryId;
                    var c = b.vastEvent;
                    this.o.get(a2) && c == "start" && this.o.get(a2);
                    a2 = b.eventId;
                    clearTimeout(a2);
                    if (c = this.g.get(a2))
                      FA(this.g, a2), c(b.viewabilityData);
                    break;
                  case "viewabilityMeasurement":
                    H(kr);
                    N();
                    break;
                  case "engagement":
                    a2 = b.eventId;
                    clearTimeout(a2);
                    c = this.g.get(a2);
                    if ($z().g) {
                      var d = -1;
                      this.H && (d = Ya() - this.H);
                      var e = false;
                      c || (e = true);
                      Pb(b, "loggingId") && $z().report(43, {
                        step: "receivedResponse",
                        time: Ya(),
                        timeout: e,
                        logid: b.loggingId,
                        timediff: d
                      });
                    }
                    c && (FA(this.g, a2), c(b.engagementString));
                }
              };
              y("ima.bridge.getNativeViewability", function(a2, b) {
                IA();
                b({});
              }, void 0);
              y("ima.bridge.getVideoMetadata", function(a2) {
                return (a2 = IA().A.get(a2)) ? a2() : {};
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
              function MA(a2, b) {
                return b instanceof RegExp ? "__REGEXP" + b.toString() : b;
              }
              function NA(a2, b) {
                return b && b.toString().indexOf("__REGEXP") == 0 ? (a2 = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a2[1], a2[2] || "")) : b;
              }
              var OA = function(a2, b) {
                uy.call(this, b);
                this.A = a2;
                this.g = null;
                this.C = new ru(this);
                this.C.O(E(), "message", this.D);
              };
              t(OA, uy);
              var PA = function(a2) {
                if (a2 == null || typeof a2 !== "string" || a2.lastIndexOf("ima://", 0) != 0)
                  return null;
                a2 = a2.substr(6);
                try {
                  return JSON.parse(a2, NA);
                } catch (b) {
                  return null;
                }
              };
              OA.prototype.sendMessage = function(a2, b, c) {
                if (this.g != null && this.g.postMessage != null) {
                  var d = this.g, e = d.postMessage, f = {};
                  f.name = a2;
                  f.type = b;
                  c != null && (f.data = c);
                  f.sid = this.h;
                  f.channel = this.A;
                  a2 = "ima://" + Kh(new Ih(MA), f);
                  e.call(d, a2, "*");
                }
                this.g != null && this.g.postMessage == null && $z().report(11);
              };
              OA.prototype.N = function() {
                Zi(this.C);
                this.g = null;
                uy.prototype.N.call(this);
              };
              OA.prototype.D = function(a2) {
                a2 = a2.g;
                var b = PA(a2.data);
                if (QA(this, b)) {
                  if (this.g == null)
                    this.g = a2.source, this.l || this.connect();
                  else if (this.g != a2.source)
                    return;
                  QA(this, b) && this.dispatchEvent(new aA(b.name, b.type, b.data || {}, b.sid, a2.origin));
                }
              };
              var QA = function(a2, b) {
                if (b == null)
                  return false;
                var c = b.channel;
                if (c == null || c != a2.A)
                  return false;
                b = b.sid;
                return b == null || a2.h != "*" && b != a2.h ? false : true;
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
              function TA(a2, b) {
                if (!b)
                  throw Error("Value for " + a2 + " is undefined, null or blank.");
                if (typeof b !== "string" && !(b instanceof String))
                  throw Error("Value for " + a2 + " is not a string.");
                if (b.trim() === "")
                  throw Error("Value for " + a2 + " is empty string.");
              }
              function UA(a2, b) {
                if (b == null)
                  throw Error("Value for " + a2 + " is undefined or null");
              }
              function VA(a2, b) {
                if (b == null)
                  throw Error(a2 + " must not be null or undefined.");
                if (typeof b !== "number" || isNaN(b))
                  throw Error("Value for " + a2 + " is not a number");
              }
              ;
              function WA(a2, b) {
                return a2 && (a2[b] || (a2[b] = {}));
              }
              function XA(a2, b) {
                var c;
                if (c = c === void 0 ? typeof omidExports === "undefined" ? null : omidExports : c)
                  a2 = a2.split("."), a2.slice(0, a2.length - 1).reduce(WA, c)[a2[a2.length - 1]] = b;
              }
              ;
              function YA() {
                return /\d+\.\d+\.\d+(-.*)?/.test("1.3.23-google_20210913");
              }
              function ZA() {
                for (var a2 = ["1", "3", "23"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
                  var d = parseInt(a2[c], 10), e = parseInt(b[c], 10);
                  if (d > e)
                    break;
                  else if (d < e)
                    return false;
                }
                return true;
              }
              ;
              var $A = function(a2, b, c, d) {
                this.h = a2;
                this.method = b;
                this.version = c;
                this.g = d;
              }, aB = function(a2) {
                return !!a2 && a2.omid_message_guid !== void 0 && a2.omid_message_method !== void 0 && a2.omid_message_version !== void 0 && typeof a2.omid_message_guid === "string" && typeof a2.omid_message_method === "string" && typeof a2.omid_message_version === "string" && (a2.omid_message_args === void 0 || a2.omid_message_args !== void 0);
              }, bB = function(a2) {
                return new $A(a2.omid_message_guid, a2.omid_message_method, a2.omid_message_version, a2.omid_message_args);
              }, cB = function(a2) {
                var b = {};
                b = (b.omid_message_guid = a2.h, b.omid_message_method = a2.method, b.omid_message_version = a2.version, b);
                a2.g !== void 0 && (b.omid_message_args = a2.g);
                return b;
              };
              var dB = function(a2) {
                this.h = a2;
              };
              function eB() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a2) {
                  var b = 16 * Math.random() | 0;
                  return a2 === "y" ? (b & 3 | 8).toString(16) : b.toString(16);
                });
              }
              ;
              function fB(a2) {
                for (var b = [], c = 0; c < arguments.length; ++c)
                  b[c - 0] = arguments[c];
                gB(function() {
                  throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ha(b))))();
                }, function() {
                  return console.error.apply(console, ha(b));
                });
              }
              function gB(a2, b) {
                typeof jasmine !== "undefined" && jasmine ? a2() : typeof console !== "undefined" && console && console.error && b();
              }
              ;
              var hB = function(a2) {
                try {
                  return a2.frames ? !!a2.frames.omid_v1_present : false;
                } catch (b) {
                  return false;
                }
              };
              var iB = function(a2) {
                this.h = a2;
                this.handleExportedMessage = iB.prototype.l.bind(this);
              };
              t(iB, dB);
              iB.prototype.sendMessage = function(a2, b) {
                b = b === void 0 ? this.h : b;
                if (!b)
                  throw Error("Message destination must be defined at construction time or when sending the message.");
                b.handleExportedMessage(cB(a2), this);
              };
              iB.prototype.l = function(a2, b) {
                aB(a2) && this.g && this.g(bB(a2), b);
              };
              var jB = eval("this"), kB = function() {
                if (typeof omidGlobal !== "undefined" && omidGlobal)
                  return omidGlobal;
                if (typeof global !== "undefined" && global)
                  return global;
                if (typeof window !== "undefined" && window)
                  return window;
                if (typeof jB !== "undefined" && jB)
                  return jB;
                throw Error("Could not determine global object context.");
              }();
              function lB(a2) {
                return a2 != null && typeof a2.top !== "undefined" && a2.top != null;
              }
              function mB(a2) {
                if (a2 === kB)
                  return false;
                try {
                  if (typeof a2.location.hostname === "undefined")
                    return true;
                } catch (b) {
                  return true;
                }
                return false;
              }
              ;
              var nB = function(a2, b) {
                this.h = b = b === void 0 ? kB : b;
                var c = this;
                a2.addEventListener("message", function(d) {
                  if (typeof d.data === "object") {
                    var e = d.data;
                    aB(e) && d.source && c.g && c.g(bB(e), d.source);
                  }
                });
              };
              t(nB, dB);
              nB.prototype.sendMessage = function(a2, b) {
                b = b === void 0 ? this.h : b;
                if (!b)
                  throw Error("Message destination must be defined at construction time or when sending the message.");
                b.postMessage(cB(a2), "*");
              };
              var oB = ["omid", "v1_SessionServiceCommunication"];
              function pB(a2) {
                return oB.reduce(function(b, c) {
                  return b && b[c];
                }, a2);
              }
              ;
              XA("OmidSessionClient.Partner", function(a2, b) {
                TA("Partner.name", a2);
                TA("Partner.version", b);
                this.name = a2;
                this.version = b;
              });
              var qB = function(a2, b, c, d) {
                d = d === void 0 ? "full" : d;
                TA("VerificationScriptResource.resourceUrl", a2);
                this.l = a2;
                this.o = b;
                this.h = c;
                this.g = d;
              };
              qB.prototype.toJSON = function() {
                return {
                  accessMode: this.g,
                  resourceUrl: this.l,
                  vendorKey: this.o,
                  verificationParameters: this.h
                };
              };
              XA("OmidSessionClient.VerificationScriptResource", qB);
              XA("OmidSessionClient.Context", function(a2, b, c, d) {
                c = c === void 0 ? null : c;
                d = d === void 0 ? null : d;
                UA("Context.partner", a2);
                this.g = a2;
                this.B = b;
                this.l = c;
                this.h = d;
                this.o = false;
              });
              var rB = {
                sessionError: "reportError"
              }, sB = Object.keys(SA).map(function(a2) {
                return SA[a2];
              }), tB = ["impressionOccurred"], uB = function() {
                var a2 = a2 === void 0 ? kB : a2;
                this.g = a2.omidSessionInterface;
              };
              uB.prototype.sendMessage = function(a2, b, c) {
                a2 == "registerSessionObserver" && (c = [b]);
                rB[a2] && (a2 = rB[a2]);
                b = this.g;
                0 <= tB.indexOf(a2) && (b = b.adEvents);
                0 <= sB.indexOf(a2) && (b = b.mediaEvents);
                b = b[a2];
                if (!b)
                  throw Error("Unrecognized method name: " + a2 + ".");
                b.apply(null, ha(c));
              };
              var xB = function(a2, b, c) {
                UA("AdSession.context", a2);
                this.g = a2;
                if (!b) {
                  var d;
                  typeof d === "undefined" && typeof window !== "undefined" && window && (d = window);
                  d = lB(d) ? d : kB;
                  var e = e === void 0 ? hB : e;
                  a: {
                    b = q([d, lB(d) ? d.top : kB]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                      b: {
                        var g = d;
                        f = f.value;
                        var h = e;
                        if (!mB(f))
                          try {
                            var k = pB(f);
                            if (k) {
                              var n = new iB(k);
                              break b;
                            }
                          } catch (m) {
                          }
                        n = h(f) ? new nB(g, f) : null;
                      }
                      if (g = n) {
                        b = g;
                        break a;
                      }
                    }
                    b = null;
                  }
                }
                this.h = b;
                this.B = c || new uB();
                this.L = this.C = this.A = false;
                this.I = this.o = null;
                this.l = {};
                this.h && (this.h.g = this.Je.bind(this));
                this.xa("setClientInfo", "1.3.23-google_20210913", this.g.g.name, this.g.g.version);
                vB(this, a2.B);
                (a2 = a2.l) && this.xa("setContentUrl", a2);
                wB(this);
              }, yB = function(a2, b) {
                a2.sendMessage("registerSessionObserver", b);
              };
              l = xB.prototype;
              l.start = function() {
                this.xa("startSession", {
                  customReferenceData: this.g.h,
                  underEvaluation: this.g.o
                });
              };
              l.error = function(a2, b) {
                this.xa("sessionError", a2, b);
              };
              l.xa = function(a2, b) {
                for (var c = [], d = 1; d < arguments.length; ++d)
                  c[d - 1] = arguments[d];
                this.sendMessage.apply(this, [a2, null].concat(ha(c)));
              };
              l.sendMessage = function(a2, b, c) {
                for (var d = [], e = 2; e < arguments.length; ++e)
                  d[e - 2] = arguments[e];
                if (this.h)
                  e = eB(), b && (this.l[e] = b), d = new $A(e, "SessionService." + a2, "1.3.23-google_20210913", YA() && ZA() ? d : JSON.stringify(d)), this.h.sendMessage(d);
                else if (this.B.g != null)
                  try {
                    this.B.sendMessage(a2, b, d);
                  } catch (f) {
                    fB("Failed to communicate with SessionInterface with error:"), fB(f);
                  }
              };
              l.Je = function(a2) {
                var b = a2.method, c = a2.h;
                a2 = a2.g;
                if (b === "response" && this.l[c]) {
                  var d = YA() && ZA() ? a2 ? a2 : [] : a2 && typeof a2 === "string" ? JSON.parse(a2) : [];
                  this.l[c].apply(this, d);
                }
                b === "error" && window.console && fB(a2);
              };
              var vB = function(a2, b) {
                b && (b = b.map(function(c) {
                  return c.toJSON();
                }), a2.xa("injectVerificationScriptResources", b));
              }, wB = function(a2) {
                yB(a2, function(b) {
                  b.type === "sessionStart" && (a2.L = true, a2.o = b.data.creativeType, a2.I = b.data.impressionType);
                  b.type === "sessionFinish" && (a2.L = false);
                });
              };
              XA("OmidSessionClient.AdSession", xB);
              var zB = function(a2) {
                UA("AdEvents.adSession", a2);
                try {
                  if (a2.A)
                    throw Error("AdEvents already registered.");
                  a2.A = true;
                  a2.xa("registerAdEvents");
                  this.g = a2;
                } catch (b) {
                  throw Error("AdSession already has an ad events instance registered");
                }
              };
              zB.prototype.loaded = function(a2) {
                a2 = a2 === void 0 ? null : a2;
                var b = this.g;
                if (b.o === "definedByJavaScript")
                  throw Error("Creative type has not been redefined");
                if (b.I === "definedByJavaScript")
                  throw Error("Impression type has not been redefined");
                a2 ? this.g.xa("loaded", a2.toJSON()) : this.g.xa("loaded");
              };
              XA("OmidSessionClient.AdEvents", zB);
              var AB = function(a2) {
                UA("MediaEvents.adSession", a2);
                try {
                  if (a2.C)
                    throw Error("MediaEvents already registered.");
                  a2.C = true;
                  a2.xa("registerMediaEvents");
                  this.g = a2;
                } catch (b) {
                  throw Error("AdSession already has a media events instance registered");
                }
              };
              AB.prototype.start = function(a2, b) {
                VA("MediaEvents.start.duration", a2);
                VA("MediaEvents.start.mediaPlayerVolume", b);
                if (0 > b || 1 < b)
                  throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
                this.g.xa("start", a2, b);
              };
              AB.prototype.pause = function() {
                this.g.xa("pause");
              };
              AB.prototype.resume = function() {
                this.g.xa("resume");
              };
              XA("OmidSessionClient.MediaEvents", AB);
              var DB = function(a2, b) {
                BB ? a2.srcdoc = b : (a2 = a2.contentWindow) && CB(a2.document, b);
              }, BB = yd && "srcdoc" in wf(document, "IFRAME"), CB = function(a2, b) {
                a2.open("text/html", "replace");
                Tc(a2, ou(b));
                a2.close();
              };
              function EB(a2) {
                return (a2 = Cf(a2)) && a2.omidSessionInterface ? a2.omidSessionInterface : null;
              }
              function FB(a2, b) {
                var c = yf("IFRAME", {
                  name: b,
                  sandbox: "allow-scripts allow-same-origin",
                  style: "display: none"
                });
                a2.appendChild(c);
                a2 = "<script src=" + RA.Ga() + "><\/script>";
                b = new Promise(function(d, e) {
                  c.addEventListener("load", function() {
                    EB(c) ? d(c) : e();
                  });
                });
                DB(c, a2);
                return b;
              }
              ;
              var GB = function(a2, b) {
                M.call(this);
                this.h = EB(a2);
                this.g = b;
              };
              t(GB, M);
              var IB = function(a2) {
                try {
                  a2.h.registerSessionObserver(function(b) {
                    b.type == "sessionStart" ? HB(a2, a2.g) : b.type == "sessionFinish" && IB(a2);
                  });
                } catch (b) {
                  a2.dispatchEvent(new Event("error"));
                }
              }, HB = function(a2, b) {
                try {
                  a2.h.setVideoElement(b);
                } catch (c) {
                  a2.dispatchEvent(new Event("error"));
                }
              };
              var JB = function(a2) {
                this.g = a2;
              };
              JB.prototype.getCuePoints = function() {
                return this.g;
              };
              JB.prototype.getCuePoints = JB.prototype.getCuePoints;
              y("module$contents$ima$AdCuePoints_AdCuePoints.PREROLL", 0, void 0);
              y("module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL", -1, void 0);
              var KB = function(a2) {
                this.g = a2;
                this.l = "";
                this.h = -1;
                this.o = false;
              }, MB = function(a2, b) {
                if (0 <= a2.h) {
                  var c = b == null ? function() {
                  } : b, d = function() {
                    LB(a2, c);
                    a2.g.removeEventListener("loadedmetadata", d, false);
                  };
                  a2.g.addEventListener("loadedmetadata", d, false);
                  a2.g.src = a2.l;
                  a2.g.load();
                } else
                  b != null && b();
              }, LB = function(a2, b) {
                var c = 0 < a2.g.seekable.length;
                a2.o ? c ? (a2.g.currentTime = a2.h, NB(a2), b()) : setTimeout(function() {
                  return LB(a2, b);
                }, 100) : (NB(a2), b());
              }, NB = function(a2) {
                a2.h = -1;
                a2.l = "";
                a2.o = false;
              };
              var OB = function(a2) {
                return 5 < a2.width && 5 < a2.height;
              }, PB = function(a2) {
                M.call(this);
                this.g = a2;
                this.aa = null;
                this.D = new KB(a2);
                this.h = new ru(this);
                aj(this, this.h);
                this.C = 0;
                this.M = this.H = this.T = this.$ = this.K = false;
                this.R = this.o = null;
                this.l = new mf(this.g.offsetWidth, this.g.offsetHeight);
                this.A = null;
                this.X = lA(this.g);
                this.Y = false;
              };
              t(PB, M);
              l = PB.prototype;
              l.kd = function() {
                var a2 = this.D;
                a2.l = a2.g.currentSrc;
                a2.o = 0 < a2.g.seekable.length;
                a2.h = a2.g.ended ? -1 : a2.g.currentTime;
              };
              l.Nb = function(a2) {
                MB(this.D, a2);
              };
              l.load = function(a2, b) {
                var c = J().g;
                c.T = true;
                qh(c);
                Fh("hvd_lc");
                QB(this);
                this.T = false;
                if (b)
                  if (Fh("hvd_ad"), b instanceof rt) {
                    if (Fh("hvd_mad"), c = b.getMediaUrl()) {
                      Fh("hvd_admu");
                      Fh("hvd_src");
                      this.g.src = c;
                      this.g.load();
                      return;
                    }
                  } else if (b instanceof qt) {
                    Fh("hvd_dad");
                    c = b.o;
                    var d = b.h, e = b.l, f = b.g, g = b.Va, h = b.La;
                    if (c && d && e && f && g && h && (Fh("hvd_addu"), b.Aa)) {
                      Fh("hvd_admse");
                      b = e + '; codecs="' + g + '"';
                      f = f + '; codecs="' + h + '"';
                      if (lw() && lw() && MediaSource.isTypeSupported(b) && lw() && MediaSource.isTypeSupported(f)) {
                        Fh("hvd_ymse");
                        Fh("hvd_mse");
                        a2 = false;
                        try {
                          window.location.search.indexOf("goog_limavideo=true") != -1 && (a2 = true);
                        } catch (k) {
                        }
                        u.customElements ? a2 ? a2 = true : (Vh(Pi) && $z().report(153, {
                          limvid: "vd"
                        }), a2 = Vh(Pi) || Vh(Ni) || Vh(Li) || Vh(Mi) ? true : false) : a2 = false;
                        a2 ? (this.g.ob = c, this.g.Bb = d) : (this.aa = new Ax(this.g, [new ow(c, b, 35e4, new Wu()), new ow(d, f, 82e3, new Wu())]), aj(this, this.aa), a2 = this.g, c = this.aa, c.g || (c.g = window.URL.createObjectURL(c.ca)), c = c.g, a2.src = c);
                        this.g.load();
                        return;
                      }
                      Fh("hvd_nmse");
                    }
                  } else
                    Fh("hvd_uad");
                a2 ? (Fh("hvd_src"), this.g.src = a2) : Fh("hvd_vn");
                this.g.load();
              };
              l.setVolume = function(a2) {
                this.g.volume = Math.max(a2, 0);
                this.g.muted = a2 == 0 ? true : false;
              };
              l.getVolume = function() {
                return this.g.muted ? 0 : this.g.volume;
              };
              var RB = function(a2) {
                a2.Y = false;
                a2.T || Ic() ? (a2.M = false, a2.o = a2.g.play(), a2.o != null && (a2.R = null, a2.o.then(function() {
                  a2.o = null;
                  a2.Id(a2.R);
                  a2.R = null;
                }).catch(function(b) {
                  a2.o = null;
                  var c = "";
                  b != null && b.name != null && (c = b.name);
                  c == "AbortError" || c == "NotAllowedError" ? a2.dispatchEvent("autoplayDisallowed") : a2.da();
                }))) : a2.M = true;
              };
              PB.prototype.pause = function() {
                this.o == null && (this.Y = true, this.g.pause());
              };
              PB.prototype.getDuration = function() {
                return isNaN(this.g.duration) ? -1 : this.g.duration;
              };
              PB.prototype.N = function() {
                this.A && (this.g instanceof HTMLElement && this.A.unobserve(this.g), this.A = null);
                SB(this);
                M.prototype.N.call(this);
              };
              var SB = function(a2) {
                a2.G != null && (Bz(a2.G), a2.G = null);
                a2.V != null && a2.V.W();
                wu(a2.h);
                QB(a2);
              }, QB = function(a2) {
                a2.$ = false;
                a2.H = false;
                a2.K = false;
                a2.M = false;
                a2.C = 0;
                a2.o = null;
                a2.R = null;
                Zi(a2.J);
              };
              PB.prototype.nb = function(a2) {
                this.dispatchEvent(a2.type);
              };
              var UB = function(a2) {
                if (!a2.H) {
                  a2.H = true;
                  a2.dispatchEvent("start");
                  try {
                    if (Vh(Pi) && u.customElements) {
                      var b = u.customElements.get("lima-video");
                      a2.g instanceof b ? $z().report(153, {
                        limvid: "limastart"
                      }) : $z().report(153, {
                        limvid: "videostart"
                      });
                    }
                  } catch (d) {
                    $z().report(153, {
                      limvid: "startfail"
                    });
                  }
                  b = typeof a2.g.getAttribute === "function" && a2.g.getAttribute("playsinline") != null;
                  b = b === void 0 ? false : b;
                  var c;
                  if (!(c = !(Dd || ju()) && !ku(10))) {
                    if (b = !b)
                      H(cy), b = false;
                    c = b;
                  }
                  c ? (H(cy), (b = sc(Fc, "Xbox")) || (Cd || Ed ? b = 0 : !Bd || Bd && iu(hu, 4) ? Rm() ? (H(cy), b = false) : b = !fy() : b = 0)) : b = 1;
                  b || !Bd || Bd && iu(hu, 3) || (Cd || Ed) && !ku(4) || TB(a2);
                }
              };
              l = PB.prototype;
              l.df = function() {
                this.T = true;
                this.M && RB(this);
                this.M = false;
                I(J(), "irve", this.g instanceof HTMLElement ? "1" : "0");
                if (OB(this.l)) {
                  var a2 = this.l;
                  I(J(), "ps", a2.width + "x" + a2.height);
                } else
                  I(J(), "psnvoc", "1"), VB(this);
              };
              l.ff = function() {
                this.$ || (this.$ = true, this.dispatchEvent("loaded"));
              };
              l.Id = function(a2) {
                this.o != null ? this.R = a2 : (this.dispatchEvent("play"), Fd || Dd || ju() || Td || UB(this));
              };
              l.jf = function(a2) {
                if (!this.H && (Fd || Dd || ju() || Td)) {
                  if (0 >= this.g.currentTime)
                    return;
                  if (Td && this.g.ended && this.getDuration() == 1) {
                    this.da(a2);
                    return;
                  }
                  UB(this);
                }
                if (Fd || sc(Fc, "Nintendo WiiU")) {
                  if (1.5 < this.g.currentTime - this.C) {
                    this.K = true;
                    this.g.currentTime = this.C;
                    return;
                  }
                  this.K = false;
                  this.g.currentTime > this.C && (this.C = this.g.currentTime);
                }
                this.dispatchEvent("timeUpdate");
              };
              l.kf = function() {
                this.dispatchEvent("volumeChange");
              };
              l.hf = function() {
                if (this.H && Fd && !this.Y && (2 > WB(this) || this.K)) {
                  this.J = new hk(250);
                  this.h.O(this.J, "tick", this.kb);
                  this.J.start();
                  var a2 = true;
                } else
                  a2 = false;
                a2 || this.o || this.dispatchEvent("pause");
              };
              l.cf = function() {
                var a2 = true;
                if (Fd || sc(Fc, "Nintendo WiiU"))
                  a2 = this.C >= this.g.duration - 1.5;
                !this.K && a2 && this.dispatchEvent("end");
              };
              var TB = function(a2) {
                a2.dispatchEvent("beginFullscreen");
              };
              PB.prototype.va = function() {
                this.dispatchEvent("endFullscreen");
              };
              PB.prototype.da = function() {
                this.dispatchEvent("error");
              };
              PB.prototype.Wa = function() {
                this.dispatchEvent("click");
              };
              var VB = function(a2) {
                "ResizeObserver" in window ? (a2.A = new ResizeObserver(function(b) {
                  b = q(b);
                  for (var c = b.next(); !c.done; c = b.next())
                    c = c.value, c.contentBoxSize ? (c = Array.isArray(c.contentBoxSize) ? c.contentBoxSize[0] : c.contentBoxSize, a2.l.width = Math.floor(c.inlineSize), a2.l.height = Math.floor(c.blockSize)) : (a2.l.width = Math.floor(c.contentRect.width), a2.l.height = Math.floor(c.contentRect.height)), OB(a2.l) && (a2.g instanceof HTMLElement && a2.A.unobserve(a2.g), a2.A = null, c = a2.l, I(J(), "ps", c.width + "x" + c.height));
                }), a2.g instanceof HTMLElement && a2.A.observe(a2.g)) : I(J(), "rons", "1");
              };
              PB.prototype.ib = function() {
                var a2 = new mf(this.g.offsetWidth, this.g.offsetHeight), b = lA(this.g);
                if (a2.width != this.l.width || a2.height != this.l.height)
                  !this.X && b ? TB(this) : this.X && !b && this.va(), this.l = a2, this.X = b;
              };
              PB.prototype.kb = function() {
                if (!this.g.ended && this.g.paused && (Fd || Ud ? this.g.currentTime < this.g.duration : 1)) {
                  var a2 = this.g.duration - this.g.currentTime, b = WB(this);
                  0 < b && (2 <= b || 2 > a2) && (Zi(this.J), RB(this));
                } else
                  Zi(this.J);
              };
              var WB = function(a2) {
                var b;
                a: {
                  for (b = a2.g.buffered.length - 1; 0 <= b; ) {
                    if (a2.g.buffered.start(b) <= a2.g.currentTime) {
                      b = a2.g.buffered.end(b);
                      break a;
                    }
                    b--;
                  }
                  b = 0;
                }
                return b - a2.g.currentTime;
              };
              PB.prototype.Pb = function() {
                $z().report(139);
                TB(this);
              };
              var $B = function(a2, b, c) {
                L.call(this);
                var d = this;
                this.l = b;
                this.o = c;
                b = new ru(this);
                aj(this, b);
                this.B = "goog_" + ad++;
                this.g = this.h = null;
                FB(a2, this.B).then(function(e) {
                  return void XB(d, e);
                }).catch(function() {
                  return void YB(d);
                });
                b.O(this.l, "adsManager", function(e) {
                  e.ha == "allAdsCompleted" && ZB(d);
                });
              };
              t($B, L);
              var XB = function(a2, b) {
                a2.h = b;
                var c = {};
                c = (c.frameName = a2.B, c);
                vy(a2.l, "omid", "iframeReady", c);
                a2.g = new GB(b, a2.o);
                a2.g.O("error", function() {
                  return void YB(a2);
                });
                IB(a2.g);
              }, YB = function(a2) {
                vy(a2.l, "omid", "iframeFailed");
                a2.W();
              }, ZB = function(a2) {
                setTimeout(function() {
                  a2.W();
                }, 3e3);
              };
              $B.prototype.N = function() {
                this.h && (zf(this.h), this.h = null);
                L.prototype.N.call(this);
              };
              var aC = function(a2, b, c, d) {
                L.call(this);
                this.o = a2;
                this.l = b;
                this.g = c;
                this.C = d;
                this.h = new ru(this);
                aj(this, this.h);
                this.h.O(this.o, d, this.A);
              };
              t(aC, L);
              var cC = function(a2, b) {
                var c = b.la;
                switch (b.ha) {
                  case "showVideo":
                    c = a2.l;
                    c.h != null && c.h.show();
                    break;
                  case "hide":
                    c = a2.l;
                    c.h != null && bC(c.h.g, false);
                    break;
                  case "resizeAndPositionVideo":
                    a2 = a2.l.g;
                    c = c.resizeAndPositionVideo;
                    a2.g.style.left = String(c.left) + "px";
                    a2.g.style.top = String(c.top) + "px";
                    a2.g.style.width = String(c.width) + "px";
                    a2.g.style.height = String(c.height) + "px";
                    break;
                  case "restoreSizeAndPositionVideo":
                    c = a2.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0";
                }
              };
              aC.prototype.A = function(a2) {
                var b = a2.la;
                switch (a2.ha) {
                  case "activate":
                    a2 = this.l;
                    var c = this.g;
                    a2.g != c && a2.h && a2.o && a2.l && (c.setVolume(a2.g.getVolume()), c = a2.g, a2.g = a2.l, a2.l = c, c = a2.h, a2.h = a2.o, a2.o = c, bC(a2.o.g, false), (c = a2.I.G) != null && (a2 = a2.g.D.g, c.o = a2, c.g && (c = c.g, c.g = a2, HB(c, a2))));
                    break;
                  case "startTracking":
                    a2 = this.g;
                    c = this.B;
                    this.h.O(a2, Mb(Su), c);
                    this.h.O(a2, ey, c);
                    a2 = this.g;
                    SB(a2);
                    a2.h.O(a2.g, ey, a2.nb);
                    a2.h.O(a2.g, "ended", a2.cf);
                    a2.h.O(a2.g, "webkitbeginfullscreen", a2.Pb);
                    a2.h.O(a2.g, "webkitendfullscreen", a2.va);
                    a2.h.O(a2.g, "loadedmetadata", a2.df);
                    a2.h.O(a2.g, "pause", a2.hf);
                    a2.h.O(a2.g, "playing", a2.Id);
                    a2.h.O(a2.g, "timeupdate", a2.jf);
                    a2.h.O(a2.g, "volumechange", a2.kf);
                    a2.h.O(a2.g, "error", a2.da);
                    a2.h.O(a2.g, Td || Fd && !ku(8) ? "loadeddata" : "canplay", a2.ff);
                    a2.G = new xz();
                    a2.h.O(a2.G, "click", a2.Wa);
                    zz(a2.G, a2.g);
                    a2.V = new hk(1e3);
                    a2.h.O(a2.V, "tick", a2.ib);
                    a2.V.start();
                    break;
                  case "stopTracking":
                    a2 = this.g;
                    c = this.B;
                    this.h.Ua(a2, Mb(Su), c);
                    this.h.Ua(a2, ey, c);
                    SB(this.g);
                    break;
                  case "exitFullscreen":
                    a2 = this.g;
                    (Cd || Ed) && a2.g.webkitDisplayingFullscreen && a2.g.webkitExitFullscreen();
                    break;
                  case "play":
                    RB(this.g);
                    break;
                  case "pause":
                    this.g.pause();
                    break;
                  case "load":
                    a2 = this.g;
                    c = b.videoUrl;
                    var d = b.muxedMediaUrl, e = b.muxedMimeType, f = b.muxedAudioCodec, g = b.muxedVideoCodec, h = b.demuxedAudioUrl, k = b.demuxedVideoUrl, n = b.demuxedAudioMimeType, m = b.demuxedVideoMimeType, v = b.demuxedAudioCodec, r = b.demuxedVideoCodec;
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
                    w ? a2.load(c, w) : h ? a2.load(c, h) : a2.load(c, null);
                    break;
                  case "unload":
                    a2 = this.g;
                    QB(a2);
                    a2.T = false;
                    "removeAttribute" in a2.g ? a2.g.removeAttribute("src") : a2.g.src = "";
                    a2.g.load();
                    break;
                  case "setCurrentTime":
                    this.g.g.currentTime = b.currentTime;
                    break;
                  case "setVolume":
                    this.g.setVolume(b.volume);
                }
              };
              aC.prototype.B = function(a2) {
                var b = {};
                switch (a2.type) {
                  case "autoplayDisallowed":
                    a2 = "autoplayDisallowed";
                    break;
                  case "beginFullscreen":
                    a2 = "fullscreen";
                    break;
                  case "endFullscreen":
                    a2 = "exitFullscreen";
                    break;
                  case "click":
                    a2 = "click";
                    break;
                  case "end":
                    a2 = "end";
                    break;
                  case "error":
                    a2 = "error";
                    break;
                  case "loaded":
                    a2 = "loaded";
                    break;
                  case "mediaLoadTimeout":
                    a2 = "mediaLoadTimeout";
                    break;
                  case "pause":
                    a2 = "pause";
                    b.ended = this.g.g.ended;
                    break;
                  case "play":
                    a2 = "play";
                    break;
                  case "skip":
                    a2 = "skip";
                    break;
                  case "start":
                    a2 = "start";
                    b.volume = this.g.getVolume();
                    break;
                  case "timeUpdate":
                    a2 = "timeupdate";
                    b.currentTime = this.g.g.currentTime;
                    b.duration = this.g.getDuration();
                    break;
                  case "volumeChange":
                    a2 = "volumeChange";
                    b.volume = this.g.getVolume();
                    break;
                  case "loadedmetadata":
                    a2 = a2.type;
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
                    a2 = a2.type;
                    break;
                  default:
                    return;
                }
                vy(this.o, this.C, a2, b);
              };
              var dC = function(a2, b) {
                L.call(this);
                this.h = b;
                this.l = new aC(a2, b, this.h.g, "videoDisplay1");
                aj(this, this.l);
                this.g = null;
                var c = this.h.l;
                c != null && (this.g = new aC(a2, b, c, "videoDisplay2"), aj(this, this.g));
              };
              t(dC, L);
              var eC = function(a2, b, c, d) {
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
                a2.appendChild(e);
                return e;
              };
              function fC() {
                var a2, b;
                return (a2 = E().googletag) == null ? void 0 : (b = a2.companionAds) == null ? void 0 : b.call(a2);
              }
              function gC(a2) {
                var b = {};
                b.slotId = a2.getSlotId().getId();
                var c = [];
                a2 = q(a2.getSizes() || []);
                for (var d = a2.next(); !d.done; d = a2.next())
                  if (d = d.value, typeof d !== "string") {
                    var e = {};
                    c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e));
                  }
                return b.adSizes = c, b;
              }
              function hC(a2) {
                var b = fC();
                if (b && a2 && Array.isArray(a2)) {
                  var c = new Map(b.getSlots().map(function(r) {
                    return [r.getSlotId().getId(), r];
                  }));
                  a2 = q(a2);
                  for (var d = a2.next(); !d.done; d = a2.next()) {
                    var e = d.value, f = c.get(e.slotId);
                    if (f && !b.isSlotAPersistentRoadblock(f)) {
                      var g = e.adContent;
                      if (g && (d = qf(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth, k = e.adHeight;
                        d.textContent = "";
                        if (e.friendlyIframeRendering)
                          try {
                            var n = "google_companion_" + f.getSlotId().getId(), m = eC(d, n, h, k), v = m.contentWindow ? m.contentWindow.document : m.contentDocument;
                            xd && v.open("text/html", "replace");
                            Tc(v, ou(g));
                            v.close();
                          } catch (r) {
                          }
                        else
                          Sc(d, ou(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d);
                      }
                    }
                  }
                }
              }
              ;
              var iC = function(a2, b, c, d, e, f) {
                aA.call(this, a2, b, c, d, e);
                this.g = f;
              };
              t(iC, aA);
              var jC = function(a2, b) {
                M.call(this);
                this.o = a2;
                this.l = b;
                this.g = {};
                this.h = new ru(this);
                aj(this, this.h);
                this.h.O(E(), "message", this.A);
              };
              t(jC, M);
              var kC = function(a2, b) {
                var c = b.g;
                a2.g.hasOwnProperty(c) && vy(a2.g[c], b.type, b.ha, b.la);
              }, lC = function(a2, b, c, d) {
                a2.g.hasOwnProperty(b) || (c = new OA(b, c), a2.h.O(c, a2.o, function(e) {
                  this.dispatchEvent(new iC(e.type, e.ha, e.la, e.Mb, e.Jd, b));
                }), c.g = d, c.connect(), a2.g[b] = c);
              };
              jC.prototype.N = function() {
                for (var a2 in this.g)
                  Zi(this.g[a2]);
                M.prototype.N.call(this);
              };
              jC.prototype.A = function(a2) {
                a2 = a2.g;
                var b = PA(a2.data);
                if (b != null) {
                  var c = b.channel;
                  if (this.l && !this.g.hasOwnProperty(c)) {
                    var d = b.sid;
                    lC(this, c, d, a2.source);
                    this.dispatchEvent(new iC(b.name, b.type, b.data || {}, d, a2.origin, c));
                  }
                }
              };
              function mC() {
                return !!Ka("googletag.cmd", E());
              }
              function nC() {
                var a2 = Ka("googletag.console", E());
                return a2 != null ? a2 : null;
              }
              var oC = function() {
                ru.call(this);
                this.l = new jC("gpt", true);
                aj(this, this.l);
                this.O(this.l, "gpt", this.A);
                this.g = null;
                mC() || E().top === E() || (this.g = new jC("gpt", false), aj(this, this.g), this.O(this.g, "gpt", this.B));
              };
              t(oC, ru);
              oC.prototype.A = function(a2) {
                var b = a2.Jd, c = "//imasdk.googleapis.com".match(Gf);
                b = b.match(Gf);
                if (c[3] == b[3] && c[4] == b[4]) {
                  if (this.g != null)
                    lC(this.g, a2.g, a2.Mb, E().parent), this.g != null && kC(this.g, a2);
                  else if (c = a2.la, c != null && c.scope !== void 0) {
                    b = c.scope;
                    c = c.args;
                    var d;
                    if (b == "proxy") {
                      var e = a2.ha;
                      e == "isGptPresent" ? d = mC() : e == "isConsolePresent" && (d = nC() != null);
                    } else if (mC())
                      if (b == "pubads" || b == "companionAds") {
                        d = a2.ha;
                        var f = E().googletag;
                        if (f != null && f[b] != null && (b = f[b](), b != null && (d = b[d], d != null)))
                          try {
                            e = d.apply(b, c);
                          } catch (g) {
                          }
                        d = e;
                      } else if (b == "console") {
                        if (e = nC(), e != null && (b = e[a2.ha], b != null))
                          try {
                            b.apply(e, c);
                          } catch (g) {
                          }
                      } else
                        b === null && (e = a2.ha, e == "googleGetCompanionAdSlots" ? (e = fC()) ? (e = e.getSlots().map(gC), d = e.length ? e : null) : d = null : (e == "googleSetCompanionAdContents" && hC(c[0]), d = null));
                    d !== void 0 && (a2.la.returnValue = d, kC(this.l, a2));
                  }
                }
              };
              oC.prototype.B = function(a2) {
                kC(this.l, a2);
              };
              var pC = function(a2, b) {
                if (a2.g) {
                  var c = a2.g;
                  Zi(c.g[b]);
                  delete c.g[b];
                }
                a2.l && (a2 = a2.l, Zi(a2.g[b]), delete a2.g[b]);
              };
              H(Mg);
              var Xf = ["A8RhywYzBE2ntUAzipotZo1NirmVUD5B/IVOEROQCjOklthZ85lxgT2/VAcq1YwhDA6C5W3zQ4bWESWdQ452pgsAAACJeyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0="];
              var rC = function(a2, b) {
                var c = Array.prototype.slice.call(arguments), d = c.shift();
                if (typeof d == "undefined")
                  throw Error("[goog.string.format] Template required");
                return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, v) {
                  if (n == "%")
                    return "%";
                  var r = c.shift();
                  if (typeof r == "undefined")
                    throw Error("[goog.string.format] Not enough arguments");
                  arguments[0] = r;
                  return qC[n].apply(null, arguments);
                });
              }, qC = {
                s: function(a2, b, c) {
                  return isNaN(c) || c == "" || a2.length >= Number(c) ? a2 : a2 = -1 < b.indexOf("-", 0) ? a2 + Yc(" ", Number(c) - a2.length) : Yc(" ", Number(c) - a2.length) + a2;
                },
                f: function(a2, b, c, d, e) {
                  d = a2.toString();
                  isNaN(e) || e == "" || (d = parseFloat(a2).toFixed(e));
                  var f = 0 > Number(a2) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                  0 <= Number(a2) && (d = f + d);
                  if (isNaN(c) || d.length >= Number(c))
                    return d;
                  d = isNaN(e) ? Math.abs(Number(a2)).toString() : Math.abs(Number(a2)).toFixed(e);
                  a2 = Number(c) - d.length - f.length;
                  return d = 0 <= b.indexOf("-", 0) ? f + d + Yc(" ", a2) : f + Yc(0 <= b.indexOf("0", 0) ? "0" : " ", a2) + d;
                },
                d: function(a2, b, c, d, e, f, g, h) {
                  return qC.f(parseInt(a2, 10), b, c, d, 0, f, g, h);
                }
              };
              qC.i = qC.d;
              qC.u = qC.d;
              var tC = function(a2, b) {
                M.call(this);
                this.l = new ru(this);
                aj(this, this.l);
                this.K = this.J = null;
                this.H = false;
                this.D = "goog_" + ad++;
                this.A = new Map();
                var c = this.D, d = (Sf() ? "https:" : "http:") + rC("//imasdk.googleapis.com/js/core/bridge3.482.0_%s.html", W.o);
                a: {
                  var e = window;
                  try {
                    do {
                      try {
                        if (e.location.href.indexOf(d) == 0 || e.document.referrer.indexOf(d) == 0) {
                          var f = true;
                          break a;
                        }
                      } catch (h) {
                      }
                      e = e.parent;
                    } while (e != e.top);
                  } catch (h) {
                  }
                  f = false;
                }
                f && (d += "?f=" + c);
                f = window.document;
                f = f === void 0 ? window.document : f;
                Yf(f);
                var g = g === void 0 ? window.navigator.userAgent : g;
                g = g.match(/Chrome\/([0-9]+)/);
                c = yf("IFRAME", {
                  src: d + "#" + c,
                  allowFullscreen: true,
                  allow: "autoplay;trust-token-redemption;" + (g && 92 > Number(g[1]) ? "conversion-measurement" : "attribution-reporting") + ";",
                  style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
                });
                this.l.Gb(c, "load", this.Y);
                a2.appendChild(c);
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
                d != null ? c = d : (d = new oC(), y("google.ima.gptProxyInstance", d, c), c = d);
                this.R = c;
                fy() || (this.G = new $B(a2, this.o, b.g.D.g), aj(this, this.G));
              };
              t(tC, M);
              var sC = function(a2, b) {
                b = b === void 0 ? "*" : b;
                var c = a2.A.get(b);
                c == null && (c = new OA(a2.D, b), a2.H && (c.g = Cf(a2.g), c.connect()), a2.A.set(b, c));
                return c;
              };
              tC.prototype.N = function() {
                this.h !== null && (this.h.W(), this.h = null);
                this.A.forEach(function(a2) {
                  Zi(a2);
                });
                this.A.clear();
                pC(this.R, this.D);
                zf(this.g);
                M.prototype.N.call(this);
              };
              tC.prototype.V = function(a2) {
                var b = a2.la, c = og(this.g), d = document.createEvent("MouseEvent");
                d.initMouseEvent(a2.ha, true, true, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
                this.g.dispatchEvent(d);
              };
              var uC = function(a2, b) {
                var c = og(a2.g), d = !!("TouchEvent" in window && 0 < TouchEvent.length);
                b = b.map(function(e) {
                  return d ? new Touch({
                    identifier: e.identifier,
                    target: a2.g,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    pageX: e.pageX + c.x,
                    pageY: e.pageY + c.y
                  }) : document.createTouch(window, a2.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY);
                });
                return d ? b : document.createTouchList.apply(document, b);
              };
              tC.prototype.X = function(a2) {
                var b = a2.la, c = og(this.g);
                if ("TouchEvent" in window && 0 < TouchEvent.length)
                  b = {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    detail: b.detail,
                    ctrlKey: b.ctrlKey,
                    altKey: b.altKey,
                    shiftKey: b.shiftKey,
                    metaKey: b.metaKey,
                    touches: uC(this, b.touches),
                    targetTouches: uC(this, b.targetTouches),
                    changedTouches: uC(this, b.changedTouches)
                  }, a2 = new TouchEvent(a2.ha, b), this.g.dispatchEvent(a2);
                else {
                  var d = document.createEvent("TouchEvent");
                  d.initTouchEvent(a2.ha, true, true, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, uC(this, b.touches), uC(this, b.targetTouches), uC(this, b.changedTouches), b.scale, b.rotation);
                  this.g.dispatchEvent(d);
                }
              };
              tC.prototype.T = function(a2) {
                switch (a2.ha) {
                  case "showVideo":
                    this.h == null ? (this.h = new xz(), this.l.O(this.h, "click", this.$)) : Bz(this.h);
                    zz(this.h, vC(this.C));
                    break;
                  case "hide":
                    this.h !== null && (this.h.W(), this.h = null);
                }
                var b = this.M;
                cC(b.l, a2);
                b.g && cC(b.g, a2);
              };
              tC.prototype.$ = function() {
                vy(this.o, "displayContainer", "videoClick");
              };
              tC.prototype.Y = function() {
                var a2 = this;
                this.J = ch();
                this.K = $g();
                this.A.forEach(function(b) {
                  b.g = Cf(a2.g);
                  b.connect();
                });
                this.H = true;
              };
              var xC = function() {
                M.call(this);
                this.buffered = new wC();
                this.o = new wC();
                this.h = new ru(this);
                aj(this, this.h);
                this.src = this.l = "";
                this.A = false;
                this.g = null;
                var a2 = Kx(W);
                if (a2) {
                  a: {
                    if (Pb(a2.g, "videoElementFakeDuration") && (a2 = a2.g.videoElementFakeDuration, typeof a2 === "number"))
                      break a;
                    a2 = NaN;
                  }
                  this.duration = a2;
                }
              };
              t(xC, M);
              var yC = function() {
                var a2 = ["video/mp4"], b = ["video/ogg"], c = new xC();
                c.canPlayType = function(d) {
                  return a2.includes(d) ? "probably" : b.includes(d) ? "maybe" : "";
                };
                c.width = 0;
                c.height = 0;
                c.offsetWidth = 0;
                c.offsetHeight = 0;
                return c;
              };
              l = xC.prototype;
              l.pause = function() {
                this.paused || (null.stop(), this.paused = true, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"));
              };
              l.load = function() {
                this.ld = 0;
                this.paused = true;
                this.dispatchEvent("loadstart");
                var a2;
                isNaN(this.duration) ? a2 = 10 + 20 * Math.random() : a2 = this.duration;
                this.setProperty("duration", a2);
                a2 = this.o;
                a2.g.push(new zC(this.duration));
                a2.length = a2.g.length;
                a2 = this.buffered;
                a2.g.push(new zC(this.duration));
                a2.length = a2.g.length;
                this.dispatchEvent("loadedmetadata");
                0 < this.currentTime && this.dispatchEvent("timeupdate");
                this.dispatchEvent("loadeddata");
                this.dispatchEvent("canplay");
                this.dispatchEvent("canplaythrough");
                this.dispatchEvent("progress");
                this.playbackRate = this.be;
              };
              l.setProperty = function(a2, b) {
                switch (a2) {
                  case "currentTime":
                    a2 = Number(b);
                    this.dispatchEvent("seeking");
                    this.currentTime = a2;
                    this.dispatchEvent("seeked");
                    a2 = Ya() - this.Kc;
                    b = this.currentTime + a2 / 1e3;
                    this.Kc += a2;
                    2 < this.ld && (this.currentTime = Math.min(b, this.duration));
                    this.dispatchEvent("timeupdate");
                    this.currentTime == this.duration && (this.paused = true, null.stop(), this.dispatchEvent("ended"));
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
              l.setAttribute = function(a2, b) {
                a2 != null && AC.set(a2, b);
              };
              l.getAttribute = function(a2) {
                return AC.get(a2);
              };
              l.ce = function(a2) {
                var b = null, c = null;
                switch (a2.type) {
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
                    b = "Ended", c = "#000";
                }
                b && this.rc && (this.rc.innerText = b);
                c && this.Ab && (this.Ab.style.backgroundColor = c);
              };
              var AC = new CA(), zC = function(a2) {
                this.startTime = 0;
                this.endTime = a2;
              }, wC = function() {
                this.length = 0;
                this.g = [];
              };
              wC.prototype.start = function(a2) {
                return this.g[a2].startTime;
              };
              wC.prototype.end = function(a2) {
                return this.g[a2].endTime;
              };
              l = xC.prototype;
              l.ld = 0;
              l.currentTime = 0;
              l.duration = NaN;
              l.paused = true;
              l.volume = 1;
              l.muted = false;
              Object.defineProperty(xC.prototype, "src", {
                get: function() {
                  return xC.prototype.l;
                },
                set: function(a2) {
                  var b = xC.prototype;
                  b.A && b.g != null ? (b.g.reject(), b.g = null) : b.l = a2;
                }
              });
              l = xC.prototype;
              l.be = 1;
              l.playbackRate = 0;
              l.Kc = 0;
              l.Ab = null;
              l.rc = null;
              var DC = function(a2, b) {
                L.call(this);
                this.o = a2;
                this.l = this.g = null;
                this.h = BC();
                CC(this, b);
                Rw(function() {
                  I(J(), "haob", "1");
                });
              };
              t(DC, L);
              DC.prototype.initialize = function() {
                this.h && this.h.load();
              };
              DC.prototype.N = function() {
                zf(this.g);
                L.prototype.N.call(this);
              };
              var CC = function(a2, b) {
                a2.g = yf("DIV", {
                  style: "display:none;"
                });
                a2.o.appendChild(a2.g);
                a2.g.appendChild(a2.h);
                b && (a2.l = yf("DIV", {
                  style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
                }), a2.g.appendChild(a2.l));
              }, BC = function() {
                var a2 = Kx(W);
                if (Hx(a2, "useVideoElementFake")) {
                  a2 = yC();
                  var b = yf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
                  });
                  Object.assign(b, a2);
                  a2.Ab = yf("DIV", {
                    style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
                  });
                  a2.rc = yf("P", {
                    style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
                  });
                  a2.Ab.appendChild(a2.rc);
                  b.appendChild(a2.Ab);
                  a2.h.O(a2, ["loadeddata", "playing", "pause", "ended"], a2.ce);
                  a2 = b;
                } else {
                  a2 = false;
                  try {
                    window.location.search.indexOf("goog_limavideo=true") != -1 && (a2 = true);
                  } catch (c) {
                  }
                  u.customElements ? a2 ? b = true : (Vh(Pi) && $z().report(153, {
                    limvid: "vw"
                  }), b = Vh(Ni) || Vh(Pi) || Vh(Li) || Vh(Mi) ? true : false) : b = false;
                  if (b) {
                    a2 && console.log("force lima video in wrapper");
                    a2 = null;
                    try {
                      a2 = new cx();
                    } catch (c) {
                      a2 = yf("lima-video"), Vh(Pi) && $z().report(153, {
                        limvid: "firefail"
                      });
                    }
                    a2.style.backgroundColor = "#000";
                    a2.style.height = "100%";
                    a2.style.width = "100%";
                    a2.style.position = "absolute";
                    a2.style.left = "0";
                    a2.style.top = "0";
                  } else
                    a2 = yf("VIDEO", {
                      style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                      title: Ex("Advertisement").toString()
                    });
                }
                a2.setAttribute("webkit-playsinline", true);
                a2.setAttribute("playsinline", true);
                return a2;
              };
              DC.prototype.show = function() {
                bC(this.g, true);
              };
              var bC = function(a2, b) {
                a2 != null && (a2.style.display = b ? "block" : "none");
              };
              var GC = function(a2, b, c) {
                var d = a2 && a2.getRootNode ? a2.getRootNode({
                  composed: true
                }) : a2;
                if (a2 == null || !Bf(of(d), d))
                  throw Dy(Cy, null, "containerElement", "element");
                this.A = b;
                this.Y = hy(this.A || null);
                this.X = lu(this.A || null);
                this.V = String(Math.floor(1e9 * Math.random()));
                this.H = false;
                this.G = a2;
                this.T = b != null;
                W.g = 2;
                this.D = EC(b ? b : null);
                d = yf("DIV", {
                  style: "position:absolute"
                });
                a2.insertBefore(d, a2.firstChild);
                this.B = d;
                this.h = null;
                FC(this) && b ? a2 = new PB(b) : (this.h = new DC(this.B, true), a2 = new PB(this.h.h));
                this.g = a2;
                this.l = this.o = null;
                if (a2 = this.h && W.isAutoPlayAdBreaks())
                  a2 = !(FC(this) || Cd || Ed || Sm() || Bd && (!Bd || !iu(hu, 4)));
                a2 && (this.o = new DC(this.B, true), this.l = new PB(this.o.h));
                this.C = c || null;
                this.R = this.C != null;
                FC(this) && b ? typeof b.getBoundingClientRect !== "function" ? (c = this.B, W.l = c) : c = b : c = this.B;
                this.L = c;
                this.I = new tC(this.B, this);
                this.M = new mf(0, 0);
                this.J = "";
                b && (b = Xs(b.src || b.currentSrc), 200 > b.toString().length ? this.J = b.toString() : 200 > b.h.length && (this.J = b.h));
                this.K = new Map();
                this.K.set("videoDisplay1", this.g);
                this.l && this.K.set("videoDisplay2", this.l);
              };
              GC.prototype.initialize = function() {
                this.H = true;
                this.h != null && this.h.initialize();
                this.o != null && this.o.initialize();
              };
              GC.prototype.destroy = function() {
                var a2 = this;
                this.A = null;
                Zi(this.h);
                Zi(this.o);
                Zi(this.I);
                this.g.Nb(function() {
                  return Zi(a2.g);
                });
                this.l != null && this.l.Nb(function() {
                  return Zi(a2.l);
                });
                zf(this.B);
              };
              var vC = function(a2) {
                return a2.R && a2.C ? a2.C : a2.h != null ? a2.h.l : null;
              }, FC = function(a2) {
                return gy(a2.D) && a2.T;
              }, EC = function(a2) {
                return a2 != null && typeof a2.getAttribute === "function" && a2.getAttribute("playsinline") != null ? true : false;
              };
              GC.prototype.destroy = GC.prototype.destroy;
              GC.prototype.initialize = GC.prototype.initialize;
              var HC = function(a2) {
                var b = Error.call(this);
                this.message = b.message;
                "stack" in b && (this.stack = b.stack);
                this.g = a2;
              };
              t(HC, Error);
              l = HC.prototype;
              l.getInnerError = function() {
                var a2 = this.g.innerError;
                return a2 instanceof Object ? new HC(a2) : a2 != null ? Error(a2) : null;
              };
              l.getMessage = function() {
                return this.g.errorMessage;
              };
              l.getErrorCode = function() {
                return this.g.errorCode;
              };
              l.Ed = function() {
                var a2 = this.getErrorCode();
                return 1e3 > a2 ? a2 : 900;
              };
              l.getType = function() {
                return this.g.type;
              };
              l.toString = function() {
                return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "");
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
              var JC = function(a2, b) {
                b = b === void 0 ? null : b;
                bj.call(this, "adError");
                this.g = a2;
                this.l = b;
              };
              t(JC, bj);
              JC.prototype.getError = function() {
                return this.g;
              };
              JC.prototype.getUserRequestContext = function() {
                return this.l;
              };
              JC.prototype.getUserRequestContext = JC.prototype.getUserRequestContext;
              JC.prototype.getError = JC.prototype.getError;
              var KC = {
                AD_ERROR: "adError"
              };
              y("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", KC, void 0);
              var LC = function(a2, b, c) {
                b = b === void 0 ? null : b;
                c = c === void 0 ? null : c;
                bj.call(this, a2);
                this.l = b;
                this.g = c;
              };
              t(LC, bj);
              LC.prototype.getAd = function() {
                return this.l;
              };
              LC.prototype.getAdData = function() {
                return this.g;
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
              var NC = function(a2, b) {
                b = b === void 0 ? null : b;
                LC.call(this, "adMetadata", a2);
                this.o = b;
              };
              t(NC, LC);
              NC.prototype.Ee = function() {
                return this.o;
              };
              NC.prototype.getAdCuePoints = NC.prototype.Ee;
              var OC = function(a2) {
                this.adBreakDuration = a2.adBreakDuration;
                this.adPosition = a2.adPosition;
                this.currentTime = a2.currentTime;
                this.duration = a2.duration;
                this.totalAds = a2.totalAds;
              };
              var PC = function(a2, b) {
                M.call(this);
                this.l = a2;
                this.A = b;
                this.h = this.l.currentTime;
                this.g = new hk(250);
                aj(this, this.g);
                this.o = new ru(this);
                aj(this, this.o);
                uu(this.o, this.g, "tick", this.C, false, this);
              };
              t(PC, M);
              PC.prototype.Ya = function() {
                return this.h;
              };
              PC.prototype.start = function() {
                QC(this);
                this.g.start();
              };
              PC.prototype.stop = function() {
                this.g.stop();
              };
              PC.prototype.C = function() {
                var a2 = this.l.currentTime;
                a2 != this.Ya() && (this.h = a2, QC(this));
              };
              var QC = function(a2) {
                var b = {};
                b.currentTime = a2.Ya();
                vy(a2.A, "contentTimeUpdate", "contentTimeUpdate", b);
              };
              var RC = {
                rgb: true,
                rgba: true,
                alpha: true,
                rect: true,
                image: true,
                "linear-gradient": true,
                "radial-gradient": true,
                "repeating-linear-gradient": true,
                "repeating-radial-gradient": true,
                "cubic-bezier": true,
                matrix: true,
                perspective: true,
                rotate: true,
                rotate3d: true,
                rotatex: true,
                rotatey: true,
                steps: true,
                rotatez: true,
                scale: true,
                scale3d: true,
                scalex: true,
                scaley: true,
                scalez: true,
                skew: true,
                skewx: true,
                skewy: true,
                translate: true,
                translate3d: true,
                translatex: true,
                translatey: true,
                translatez: true
              }, SC = function(a2) {
                a2 = kc(a2);
                if (a2 == "")
                  return null;
                var b = String(a2.substr(0, 4)).toLowerCase();
                if (("url(" < b ? -1 : b == "url(" ? 0 : 1) == 0)
                  return null;
                if (0 < a2.indexOf("(")) {
                  if (/"|'/.test(a2))
                    return null;
                  b = /([\-\w]+)\(/g;
                  for (var c; c = b.exec(a2); )
                    if (!(c[1].toLowerCase() in RC))
                      return null;
                }
                return a2;
              };
              function TC(a2) {
                var b = u.CSSStyleDeclaration;
                return b && b.prototype && b.prototype[a2] || null;
              }
              var UC = TC("getPropertyValue"), VC = TC("setProperty");
              function WC(a2, b, c, d) {
                if (a2)
                  return a2.apply(b, d);
                if (vd && 10 > document.documentMode) {
                  if (!b[c].call)
                    throw Error("IE Clobbering detected");
                } else if (typeof b[c] != "function")
                  throw Error("Clobbering detected");
                return b[c].apply(b, d);
              }
              ;
              var XC = {
                "-webkit-border-horizontal-spacing": true,
                "-webkit-border-vertical-spacing": true
              }, ZC = function(a2) {
                if (!a2)
                  return Ec;
                var b = document.createElement("div").style;
                YC(a2).forEach(function(c) {
                  var d = yd && c in XC ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                  d.lastIndexOf("--", 0) != 0 && d.lastIndexOf("var", 0) != 0 && (c = WC(UC, a2, a2.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = SC(c), c != null && WC(VC, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]));
                });
                return new Dc(b.cssText || "", Cc);
              }, YC = function(a2) {
                Ma(a2) ? a2 = Bb(a2) : (a2 = Nb(a2), xb(a2, "cssText"));
                return a2;
              };
              var $C = function(a2, b, c) {
                M.call(this);
                this.h = a2;
                this.g = null;
                this.H = "";
                this.J = Ec;
                this.K = 0;
                this.C = this.l = null;
                this.o = b;
                this.A = null;
                this.D = "";
                this.G = c;
              };
              t($C, M);
              $C.prototype.init = function(a2) {
                this.D = a2;
                a2 = "about:blank";
                vd && (a2 = "");
                this.l = yf("IFRAME", {
                  src: a2,
                  allowtransparency: true,
                  background: "transparent"
                });
                kg(this.l, {
                  display: "none",
                  width: "0",
                  height: "0"
                });
                a2 = this.h.G;
                a2.appendChild(this.l);
                a2 = a2.ownerDocument;
                a2 = a2.defaultView || a2.parentWindow;
                this.A == null && (this.A = new ru(this));
                this.A.O(a2, "message", this.M);
                a2 = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js"><\/script><script>loader = new VPAIDLoader(false, "' + (this.D + '");<\/script></body>');
                if (Ud || Qd || wd) {
                  var b = this.l.contentWindow;
                  b && CB(b.document, a2);
                } else
                  DB(this.l, a2);
              };
              $C.prototype.M = function(a2) {
                try {
                  var b = a2.g.data;
                  try {
                    var c = JSON.parse(b);
                  } catch (la) {
                    return;
                  }
                  var d = c.session;
                  if (d != null && this.D == d)
                    switch (c.type) {
                      case "friendlyReady":
                        var e = aD(this);
                        if (e != null) {
                          this.g = e;
                          this.H = e.currentSrc;
                          var f = e.style.cssText;
                          if (vd && 10 > document.documentMode)
                            var g = Ec;
                          else {
                            var h = document;
                            typeof HTMLTemplateElement === "function" && (h = wf(document, "TEMPLATE").content.ownerDocument);
                            var k = h.implementation.createHTMLDocument("").createElement("DIV");
                            k.style.cssText = f;
                            g = ZC(k.style);
                          }
                          this.J = g;
                          this.K = e.currentTime;
                        } else {
                          var n = this.h.G, m = this.h.M;
                          var v = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width + "px; ");
                          v += "height:" + m.height + "px;";
                          this.g = yf("VIDEO", {
                            style: v,
                            autoplay: true
                          });
                          n.appendChild(this.g);
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
                          this.l.contentWindow.loader.initFriendly(this.g, this.C);
                        } catch (la) {
                          bD(this);
                        }
                        vy(this.o, "vpaid", "", b);
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
                          r.iavp = x ? "1" : "0";
                        } else
                          r.apl = "n";
                        $z().report(99, r);
                        vy(this.o, "vpaid", "", b);
                        if (aD(this) != null) {
                          var G = this.h;
                          G.h != null && G.h.show();
                        }
                        break;
                      default:
                        vy(this.o, "vpaid", "", b);
                    }
                } catch (la) {
                  bD(this);
                }
              };
              var bD = function(a2) {
                var b = {
                  type: "error"
                };
                b.session = a2.D;
                a2 = Kh(new Ih(void 0), b);
                window.postMessage(a2, "*");
              }, aD = function(a2) {
                return (a2.G == "videoDisplayUnknown" ? a2.h.g : a2.h.K.get(a2.G)).D.g;
              }, cD = function(a2) {
                a2.g && !Ff() && !Ef() && kg(a2.g, {
                  visibility: "hidden"
                });
              };
              $C.prototype.N = function() {
                M.ya.N.call(this);
                Zi(this.A);
                this.A = null;
                zf(this.C);
                this.C = null;
                zf(this.l);
                this.l = null;
                var a2 = aD(this);
                if (a2 != null) {
                  var b = this.J;
                  a2.style.cssText = b instanceof Dc && b.constructor === Dc ? b.g : "type_error:SafeStyle";
                  Ff() || Ef() ? (a2.src = this.H, a2.currentTime = this.K) : (a2.removeAttribute("src"), a2 = this.h, a2.h != null && bC(a2.h.g, false));
                } else
                  zf(this.g), this.g = null;
              };
              var dD = function(a2, b) {
                L.call(this);
                this.h = a2;
                this.l = b;
                this.g = new Map();
              };
              t(dD, L);
              var eD = function(a2, b) {
                try {
                  var c = b.la, d = c.session;
                  switch (c.vpaidEventType) {
                    case "createFriendlyIframe":
                      b = "videoDisplayUnknown";
                      c.videoDisplayName && (b = c.videoDisplayName);
                      var e = c.session, f = new $C(a2.h, a2.l, b);
                      a2.g.set(e, f);
                      f.init(e);
                      break;
                    case "vpaidNonLinear":
                      var g = a2.g.get(d);
                      g && cD(g);
                      break;
                    case "destroyFriendlyIframe":
                      var h = a2.g.get(d);
                      h && (h.W(), a2.g.delete(d));
                  }
                } catch (k) {
                  $z().report(125, {
                    msg: k.message
                  });
                }
              };
              dD.prototype.N = function() {
                this.g.forEach(function(a2) {
                  return a2.W();
                });
              };
              var fD = function() {
                this.g = [];
                this.h = [];
              };
              fD.prototype.isEmpty = function() {
                return this.g.length === 0 && this.h.length === 0;
              };
              fD.prototype.clear = function() {
                this.g = [];
                this.h = [];
              };
              fD.prototype.remove = function(a2) {
                var b = this.g;
                b: {
                  var c = b.length - 1;
                  0 > c && (c = Math.max(0, b.length + c));
                  if (typeof b === "string")
                    c = typeof a2 !== "string" || a2.length != 1 ? -1 : b.lastIndexOf(a2, c);
                  else {
                    for (; 0 <= c; c--)
                      if (c in b && b[c] === a2)
                        break b;
                    c = -1;
                  }
                }
                0 <= c ? (yb(b, c), b = true) : b = false;
                return b || xb(this.h, a2);
              };
              fD.prototype.qb = function() {
                for (var a2 = [], b = this.g.length - 1; 0 <= b; --b)
                  a2.push(this.g[b]);
                var c = this.h.length;
                for (b = 0; b < c; ++b)
                  a2.push(this.h[b]);
                return a2;
              };
              var Z = function(a2, b, c, d, e, f, g) {
                M.call(this);
                var h = this;
                this.H = a2;
                this.g = b;
                this.K = c;
                this.ib = e;
                this.o = new tA();
                this.C = g;
                this.M = false;
                this.T = 1;
                this.kb = d;
                this.aa = -1;
                this.l = this.h = null;
                this.G = new PC({
                  currentTime: 0
                }, this.C);
                this.D = new fD();
                this.da = this.X = false;
                this.Y = new Map();
                this.$ = this.va = false;
                this.Wa = new dD(b, g);
                aj(this, this.Wa);
                this.J = f && this.g.C != null;
                this.R = function() {
                  var k = h.g.g, n = k.g.currentTime;
                  k = k.getDuration();
                  return {
                    currentTime: n,
                    duration: k,
                    isPlaying: true,
                    volume: h.T
                  };
                };
                this.V = new ru(this);
                this.V.O(this.C, "adsManager", this.nb);
              };
              t(Z, M);
              Z.prototype.nb = function(a2) {
                var b = this, c = a2.ha, d = a2.la;
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
                      return jD(b, c, d);
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
                    a2 = Ka("window.google_show_companion_ad");
                    a2 != null && a2();
                    break;
                  case "skipShown":
                    this.M = true;
                    jD(this, c, d);
                    break;
                  case "interaction":
                    jD(this, c, d, d.interactionData);
                    break;
                  case "vpaidEvent":
                    eD(this.Wa, a2);
                    break;
                  case "skippableStateChanged":
                    a2 = d.adData;
                    a2.skippable != null && (this.M = a2.skippable);
                    jD(this, c, d);
                    break;
                  case "volumeChange":
                    a2 = d.adData;
                    a2 != null && typeof a2.volume === "number" && (this.T = a2.volume);
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
                    jD(this, c, d);
                }
              };
              var jD = function(a2, b, c, d) {
                if (c.companions == null) {
                  var e = a2.Y.get(c.adId);
                  c.companions = e != null ? e : [];
                }
                var f = c.adData;
                if (e = f == null ? null : new Y(f))
                  a2.h = e;
                switch (b) {
                  case "adBreakReady":
                  case "mediaUrlPinged":
                    b = new LC(b, null, c);
                    break;
                  case "adMetadata":
                    b = null;
                    c.adCuePoints != null && (b = new JB(c.adCuePoints));
                    b = new NC(e, b);
                    break;
                  case "allAdsCompleted":
                    a2.h = null;
                    a2.va = true;
                    b = new LC(b, e);
                    break;
                  case "contentPauseRequested":
                    a2.$ = false;
                    b = new LC(b, e);
                    break;
                  case "contentResumeRequested":
                    a2.h = null;
                    a2.$ = true;
                    b = new LC(b, e);
                    break;
                  case "loaded":
                    a2.aa = e.getDuration();
                    a2.M = false;
                    iy() && (d = a2.H, c = a2.ib, d.h.set(eA(e), a2.R), (W.g != 0 ? H(kr).l : d.A) && mA(d, "loaded", eA(e), c));
                    b = new LC(b, e, f);
                    break;
                  case "start":
                    a2.Y.set(c.adId, c.companions);
                    vC(a2.g) != null && (a2.l == null ? (a2.l = new xz(), a2.V.O(a2.l, "click", a2.gf)) : Bz(a2.l), zz(a2.l, vC(a2.g)));
                    b = new LC(b, e);
                    break;
                  case "complete":
                    a2.l != null && Bz(a2.l);
                    iy() && oA(a2.H, a2.R, eA(e));
                    a2.h = null;
                    a2.Y.delete(c.adId);
                    b = new LC(b, e);
                    break;
                  case "log":
                    c = null;
                    d != null && d.type != null ? (f = d.type, f = f == "adLoadError" || f == "adPlayError") : f = false;
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
                    b = new LC(b, e);
                }
                a2.dispatchEvent(b);
                a2.va && a2.$ && a2.destroy();
              }, hD = function(a2, b) {
                var c = new JC(new HC(b));
                a2.X ? (a2.dispatchEvent(c), iy() && a2.h && oA(a2.H, a2.R, eA(a2.h)), a2.h = null) : a2.D.h.push(c);
                a2 = {
                  error: b.errorCode,
                  vis: lh(document)
                };
                $z().report(7, a2);
              }, lD = function(a2, b, c) {
                vy(a2.C, "adsManager", b, c);
              }, kD = function(a2, b) {
                $z().report(131);
                gD(a2, b);
              }, iD = function(a2) {
                var b = a2.g.g;
                FC(a2.g) && a2.o.restoreCustomPlaybackStateOnAdBreakComplete && b.kd != null && b.kd();
              }, gD = function(a2, b) {
                var c = a2.g.g;
                FC(a2.g) && a2.o.restoreCustomPlaybackStateOnAdBreakComplete && c.Nb != null ? c.Nb(b) : b && b();
              };
              l = Z.prototype;
              l.init = function(a2, b, c, d) {
                if (this.D.isEmpty()) {
                  var e = this.g, f = null;
                  e.A && d == null && (f = {
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
                    };
                  }
                  !e.A && d && (f = {
                    vd: "new"
                  });
                  f && (f.custVid = e.V, $z().report(93, f));
                  d != null && (e.D = EC(d), gy(e.D) && (e.T = true, Zi(e.h), Zi(e.o), Zi(e.l), e.h = null, e.o = null, e.l = null, Zi(e.g), e.g = new PB(d), typeof d.getBoundingClientRect !== "function" ? (e.L = e.B, W.l = e.L) : e.L = d, (d = e.I.G) != null && (e = e.g.D.g, d.o = e, d.g && (d = d.g, d.g = e, HB(d, e)))));
                  this.X = true;
                  this.resize(a2, b, c);
                  e = uA(this.o, this.J);
                  lD(this, "init", {
                    adsRenderingSettings: e,
                    width: a2,
                    height: b,
                    viewMode: c
                  });
                } else {
                  for (; !this.D.isEmpty(); )
                    b = a2 = this.D, b.g.length === 0 && (b.g = b.h, b.g.reverse(), b.h = []), a2 = a2.g.pop(), this.dispatchEvent(a2);
                  this.W();
                }
              };
              l.We = function() {
                return FC(this.g);
              };
              l.Ve = function() {
                return this.J;
              };
              l.getRemainingTime = function() {
                return this.aa;
              };
              l.getAdSkippableState = function() {
                return this.M;
              };
              l.Ce = function() {
                lD(this, "discardAdBreak");
              };
              l.updateAdsRenderingSettings = function(a2) {
                if (a2 != null) {
                  var b = this.o.bitrate, c = a2.bitrate;
                  $z().report(96, {
                    init: this.X ? "1" : "0",
                    start: this.da ? "1" : "0",
                    old: b,
                    "new": c,
                    changed: b != c ? "1" : "0"
                  });
                  this.o = a2;
                  a2 = uA(this.o, this.J);
                  lD(this, "updateAdsRenderingSettings", {
                    adsRenderingSettings: a2
                  });
                }
              };
              l.skip = function() {
                lD(this, "skip");
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
                  var a2 = this.g.C, b = this.g.B, c;
                  if (c = a2 && b && !Mm(a2))
                    a2 = kA(a2), b = kA(b), c = 0 < a2.width && 0 < a2.height && 0 < b.width && 0 < b.height && a2.left <= b.left + b.width && b.left <= a2.left + a2.width && a2.top <= b.top + b.height && b.top <= a2.top + a2.height;
                  c && $z().report(31, {
                    adtagurl: this.K,
                    customPlayback: FC(this.g)
                  });
                }
                if (!this.g.H && !FC(this.g))
                  throw Dy(By);
                b = this.g;
                b.R = this.J && b.C != null;
                this.g.I.g.style.opacity = 1;
                this.A != null && this.getVolume() == 1 && (typeof this.A.muted === "boolean" && this.A.muted ? this.setVolume(0) : typeof this.A.volume === "number" && (b = this.A.volume, 0 <= b && 1 >= b && this.setVolume(this.A.volume)));
                this.da = true;
                lD(this, "start");
              };
              l.gf = function() {
                if (!this.o.disableClickThrough && this.h != null) {
                  var a2 = this.h.g.clickThroughUrl;
                  if (a2 != null) {
                    var b = this.h.g.attributionParams;
                    Pu(a2, b);
                    $z().report(156, {
                      te: !!b
                    });
                  }
                }
              };
              l.resize = function(a2, b, c) {
                var d = this.g, e = d.B;
                e != null && (a2 == -1 ? (e.style.right = "0", e.style.left = "0") : e.style.width = a2 + "px", b == -1 ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
                e = d.I;
                e.g.width = a2 == -1 ? "100%" : a2;
                e.g.height = b == -1 ? "100%" : b;
                try {
                  e.g.offsetTop = e.g.offsetTop;
                } catch (f) {
                }
                d.M = new mf(a2, b);
                lD(this, "resize", {
                  width: a2,
                  height: b,
                  viewMode: c
                });
              };
              l.stop = function() {
                lD(this, "stop");
              };
              l.expand = function() {
                lD(this, "expand");
              };
              l.collapse = function() {
                lD(this, "collapse");
              };
              l.getVolume = function() {
                return this.T;
              };
              l.setVolume = function(a2) {
                this.T = a2;
                this.g.g.setVolume(a2);
                lD(this, "volume", {
                  volume: a2
                });
              };
              l.pause = function() {
                lD(this, "pause");
              };
              l.resume = function() {
                lD(this, "resume");
              };
              l.destroy = function() {
                this.W();
              };
              l.getCuePoints = function() {
                return this.kb;
              };
              l.getCurrentAd = function() {
                return this.h;
              };
              l.N = function() {
                lD(this, "destroy");
                this.l != null && this.l.W();
                this.V.W();
                this.D.clear();
                this.G && (this.G.stop(), this.G.W());
                iy() && oA(this.H, this.R);
                M.prototype.N.call(this);
              };
              l.clicked = function() {
                $z().report(124, {
                  api: "clicked"
                });
                var a2 = this.h && this.h.g.clickThroughUrl;
                if (a2 && this.h.isUiDisabled()) {
                  var b = this.h.g.attributionParams;
                  Pu(a2, b);
                  $z().report(156, {
                    te: !!b
                  });
                }
                lD(this, "click");
              };
              l.focus = function() {
                vy(this.C, "userInteraction", "focusUiElement");
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
              var mD = function(a2, b) {
                bj.call(this, "adsManagerLoaded");
                this.g = a2;
                this.l = b;
              };
              t(mD, bj);
              mD.prototype.getAdsManager = function(a2, b) {
                a2 = a2 || {
                  currentTime: null
                };
                var c = this.g;
                c.A = a2;
                a2.currentTime != null && (c.G = new PC(a2, c.C), c.G.start());
                b != null && (c.o = b);
                return this.g;
              };
              mD.prototype.getUserRequestContext = function() {
                return this.l;
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
                this.forceNonLinearFullSlot = false;
                this.contentTitle = this.contentKeywords = this.contentDuration = null;
                this.vastLoadTimeout = 5e3;
                this.omidAccessModeRules = {};
                this.pageUrl = null;
              };
              oD.prototype.setAdWillAutoPlay = function(a2) {
                this.videoPlayActivation = a2 ? "auto" : "click";
              };
              oD.prototype.setAdWillPlayMuted = function(a2) {
                this.videoPlayMuted = a2 ? "muted" : "unmuted";
              };
              oD.prototype.setContinuousPlayback = function(a2) {
                this.videoContinuousPlay = a2 ? "2" : "1";
              };
              oD.prototype.setContinuousPlayback = oD.prototype.setContinuousPlayback;
              oD.prototype.setAdWillPlayMuted = oD.prototype.setAdWillPlayMuted;
              oD.prototype.setAdWillAutoPlay = oD.prototype.setAdWillAutoPlay;
              var pD = function(a2) {
                var b = document;
                try {
                  var c = Fs(b);
                  var d = c ? xe(Hs, c ? JSON.parse(c) : null) : null;
                } catch (e) {
                  d = null;
                }
                if (!d)
                  return 0;
                if (De(d, 7))
                  return 4;
                if (a2) {
                  if (wb(Be(d, 3), a2))
                    return 2;
                  if (wb(Be(d, 4), a2))
                    return 3;
                }
                return 1;
              };
              function qD(a2, b, c) {
                b = De(b, 5) && c.origin !== "null" ? c.document.cookie : null;
                return b === null ? null : new Cs({
                  cookie: b
                }).get(a2) || "";
              }
              ;
              var rD = function() {
                this.g = window;
                this.h = 0;
              }, sD = function(a2, b) {
                return b ? b ? qD("__gads", b, a2.g) : null : null;
              };
              var tD = function(a2, b, c) {
                var d = "script";
                d = d === void 0 ? "" : d;
                var e = a2.createElement("link");
                try {
                  if (e.rel = "preload", sc("preload", "stylesheet")) {
                    e.href = gc(b).toString();
                    var f = Vc('style[nonce],link[rel="stylesheet"][nonce]', e.ownerDocument && e.ownerDocument.defaultView);
                    f && e.setAttribute("nonce", f);
                  } else {
                    if (b instanceof fc)
                      var g = gc(b).toString();
                    else {
                      if (b instanceof wc)
                        var h = xc(b);
                      else {
                        if (b instanceof wc)
                          var k = b;
                        else
                          b = typeof b == "object" && b.Qa ? b.Ga() : String(b), Ac.test(b) || (b = "about:invalid#zClosurez"), k = new wc(b, vc);
                        h = xc(k);
                      }
                      g = h;
                    }
                    e.href = g;
                  }
                } catch (n) {
                  return;
                }
                d && (e.as = d);
                c && e.setAttribute("nonce", c);
                if (a2 = a2.getElementsByTagName("head")[0])
                  try {
                    a2.appendChild(e);
                  } catch (n) {
                  }
              };
              var uD = /^\.google\.(com?\.)?[a-z]{2,3}$/, vD = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, wD = u, yD = function(a2) {
                a2 = "https://adservice" + (a2 + "/adsid/integrator.js");
                var b = ["domain=" + encodeURIComponent(u.location.hostname)];
                xD[3] >= Ya() && b.push("adsid=" + encodeURIComponent(xD[1]));
                return a2 + "?" + b.join("&");
              }, xD, zD, AD = function() {
                wD = u;
                xD = wD.googleToken = wD.googleToken || {};
                var a2 = Ya();
                xD[1] && xD[3] > a2 && 0 < xD[2] || (xD[1] = "", xD[2] = -1, xD[3] = -1, xD[4] = "", xD[6] = "");
                zD = wD.googleIMState = wD.googleIMState || {};
                a2 = zD[1];
                uD.test(a2) && !vD.test(a2) || (zD[1] = ".google.com");
                Array.isArray(zD[5]) || (zD[5] = []);
                typeof zD[6] !== "boolean" && (zD[6] = false);
                Array.isArray(zD[7]) || (zD[7] = []);
                typeof zD[8] !== "number" && (zD[8] = 0);
              }, BD = {
                Cc: function() {
                  return 0 < zD[8];
                },
                lf: function() {
                  zD[8]++;
                },
                mf: function() {
                  0 < zD[8] && zD[8]--;
                },
                nf: function() {
                  zD[8] = 0;
                },
                Dh: function() {
                  return false;
                },
                Cd: function() {
                  return zD[5];
                },
                td: function(a2) {
                  try {
                    a2();
                  } catch (b) {
                    u.setTimeout(function() {
                      throw b;
                    }, 0);
                  }
                },
                Ld: function() {
                  if (!BD.Cc()) {
                    var a2 = u.document, b = function(e) {
                      e = yD(e);
                      a: {
                        try {
                          var f = Vc("script[nonce]", void 0);
                          break a;
                        } catch (g) {
                        }
                        f = void 0;
                      }
                      tD(a2, e, f);
                      f = a2.createElement("script");
                      f.type = "text/javascript";
                      f.onerror = function() {
                        return u.processGoogleToken({}, 2);
                      };
                      nu();
                      e = hc(e);
                      f.src = bf(e);
                      df(f);
                      try {
                        (a2.head || a2.body || a2.documentElement).appendChild(f), BD.lf();
                      } catch (g) {
                      }
                    }, c = zD[1];
                    b(c);
                    c != ".google.com" && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    u.setTimeout(function() {
                      return u.processGoogleToken(d, 1);
                    }, 1e3);
                  }
                }
              }, CD = function(a2) {
                AD();
                var b = wD.googleToken[5] || 0;
                a2 && (b != 0 || xD[3] >= Ya() ? BD.td(a2) : (BD.Cd().push(a2), BD.Ld()));
                xD[3] >= Ya() && xD[2] >= Ya() || BD.Ld();
              }, DD = function(a2) {
                u.processGoogleToken = u.processGoogleToken || function(b, c) {
                  var d = b;
                  d = d === void 0 ? {} : d;
                  c = c === void 0 ? 0 : c;
                  b = d.newToken || "";
                  var e = b == "NT", f = parseInt(d.freshLifetimeSecs || "", 10), g = parseInt(d.validLifetimeSecs || "", 10), h = d["1p_jar"] || "";
                  d = d.pucrd || "";
                  AD();
                  c == 1 ? BD.nf() : BD.mf();
                  var k = wD.googleToken = wD.googleToken || {}, n = c == 0 && b && typeof b === "string" && !e && typeof f === "number" && 0 < f && typeof g === "number" && 0 < g && typeof h === "string";
                  e = e && !BD.Cc() && (!(xD[3] >= Ya()) || xD[1] == "NT");
                  var m = !(xD[3] >= Ya()) && c != 0;
                  if (n || e || m)
                    e = Ya(), f = e + 1e3 * f, g = e + 1e3 * g, 1e-5 > Math.random() && dg(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, AD();
                  if (n || !BD.Cc()) {
                    c = BD.Cd();
                    for (b = 0; b < c.length; b++)
                      BD.td(c[b]);
                    c.length = 0;
                  }
                };
                CD(a2);
              };
              var ED = function(a2, b) {
                b = b === void 0 ? 500 : b;
                L.call(this);
                this.h = a2;
                this.B = b;
                this.g = null;
                this.o = {};
                this.A = 0;
                this.l = null;
              };
              t(ED, L);
              ED.prototype.N = function() {
                this.o = {};
                this.l && (hf(this.h, "message", this.l), delete this.l);
                delete this.o;
                delete this.h;
                delete this.g;
                L.prototype.N.call(this);
              };
              var GD = function(a2) {
                var b;
                return typeof ((b = a2.h) === null || b === void 0 ? void 0 : b.__uspapi) === "function" || FD(a2) != null;
              }, ID = function(a2, b) {
                var c = {};
                if (GD(a2)) {
                  var d = kb(function() {
                    return b(c);
                  });
                  HD(a2, function(e, f) {
                    f && (c = e);
                    d();
                  });
                  setTimeout(d, a2.B);
                } else
                  b(c);
              }, HD = function(a2, b) {
                var c, d;
                if (typeof ((c = a2.h) === null || c === void 0 ? void 0 : c.__uspapi) === "function")
                  ((d = a2.h) === null || d === void 0 ? void 0 : d.__uspapi)("getUSPData", 1, b);
                else if (FD(a2)) {
                  JD(a2);
                  var e = ++a2.A;
                  a2.o[e] = b;
                  a2.g && (b = {}, a2.g.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                  }, b), "*"));
                }
              }, FD = function(a2) {
                if (a2.g)
                  return a2.g;
                a2.g = Wf(a2.h, "__uspapiLocator");
                return a2.g;
              }, JD = function(a2) {
                a2.l || (a2.l = function(b) {
                  var c;
                  try {
                    var d = {};
                    typeof b.data === "string" ? d = JSON.parse(b.data) : d = b.data;
                    var e = d.__uspapiReturn;
                    (c = a2.o) === null || c === void 0 ? void 0 : c[e.callId](e.returnValue, e.success);
                  } catch (f) {
                  }
                }, gf(a2.h, "message", a2.l));
              };
              var KD = function(a2) {
                a2 = a2 === void 0 ? window : a2;
                return !a2.PeriodicSyncManager;
              }, LD = function() {
                var a2 = a2 === void 0 ? window : a2;
                if (!KD(a2) && Ng(Gg) || KD(a2) && Ng(Hg)) {
                  a2 = a2.navigator.userAgent;
                  var b = /Chrome/.test(a2);
                  return /Android/.test(a2) && b;
                }
                return false;
              }, MD = {
                issuerOrigin: "https://attestation.android.com",
                issuancePath: "/att/i",
                redemptionPath: "/att/r",
                shouldRedeemToken: function() {
                  return LD();
                },
                shouldRequestToken: function() {
                  return LD();
                }
              };
              H(Mg);
              var OD = function(a2, b) {
                a2 = a2 === void 0 ? null : a2;
                b = b === void 0 ? false : b;
                L.call(this);
                this.h = b;
                this.g = [];
                Ng(Lg) ? LD() && this.g.push(MD) : this.g = a2 || [MD];
                if (document.hasTrustToken && !Ng(Ig) && !Array.isArray(window.goog_tt_state)) {
                  var c = ND(this);
                  Object.defineProperty(window, "goog_tt_state", {
                    configurable: false,
                    get: function() {
                      return c.slice();
                    }
                  });
                }
              };
              t(OD, L);
              var ND = function(a2) {
                return a2.g.map(function(b) {
                  return {
                    issuerOrigin: b.issuerOrigin,
                    state: Ng(Jg) && !a2.h ? 12 : 1
                  };
                });
              }, PD = function(a2, b) {
                var c = window.goog_tt_state.find(function(d) {
                  return d.issuerOrigin === a2;
                });
                c && (c.state = b);
              }, QD = function() {
                var a2 = window.goog_tt_state;
                return Array.isArray(a2) && a2.some(function(b) {
                  return b.state != 1;
                });
              }, RD = function(a2) {
                var b = "" + a2.issuerOrigin + a2.redemptionPath, c = {
                  keepalive: true,
                  redirect: "follow",
                  method: "get",
                  trustToken: {
                    type: "token-redemption",
                    issuer: a2.issuerOrigin,
                    refreshPolicy: "none"
                  }
                };
                PD(a2.issuerOrigin, 2);
                return window.fetch(b, c).then(function(d) {
                  if (!d.ok)
                    throw Error(d.status + ": Network response was not ok!");
                  PD(a2.issuerOrigin, 6);
                }).catch(function(d) {
                  d && d.name === "NoModificationAllowedError" ? PD(a2.issuerOrigin, 6) : PD(a2.issuerOrigin, 5);
                });
              }, SD = function(a2, b) {
                var c = "" + a2.issuerOrigin + a2.issuancePath, d = {
                  trustToken: {
                    type: "token-request"
                  }
                };
                Ng(Kg) && (d.keepalive = true);
                PD(a2.issuerOrigin, 8);
                return window.fetch(c, d).then(function(e) {
                  if (!e.ok)
                    throw Error(e.status + ": Network response was not ok!");
                  PD(a2.issuerOrigin, 10);
                  if (b)
                    return RD(a2);
                }).catch(function(e) {
                  if (e && e.name === "NoModificationAllowedError") {
                    if (PD(a2.issuerOrigin, 10), b)
                      return RD(a2);
                  } else
                    PD(a2.issuerOrigin, 9);
                });
              }, TD = function() {
                PD(MD.issuerOrigin, 13);
                return document.hasTrustToken(MD.issuerOrigin).then(function(a2) {
                  return a2 ? RD(MD) : SD(MD, true);
                });
              }, UD = function() {
                var a2 = new OD(null, false);
                if (document.hasTrustToken && !Ng(Ig) && (!Ng(Jg) || a2.h) && !QD()) {
                  var b = [];
                  Ng(Lg) ? LD() && b.push(TD()) : a2.g.forEach(function(c) {
                    PD(c.issuerOrigin, 13);
                    var d = c.shouldRedeemToken(), e = c.shouldRequestToken();
                    if (d || e) {
                      var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                          if (d)
                            return RD(c);
                        } else {
                          if (e)
                            return SD(c, d);
                          PD(c.issuerOrigin, 3);
                        }
                      });
                      b.push(f);
                    } else
                      PD(c.issuerOrigin, 7);
                  });
                  window.Promise && window.Promise.all && (a2 = window.Promise.all(b), typeof window.goog_tt_promise != "object" && Object.defineProperty(window, "goog_tt_promise", {
                    configurable: false,
                    value: a2,
                    writable: false
                  }));
                }
              };
              (function() {
                if (!Ib(function(b) {
                  return b.match(E().location.href);
                })) {
                  var a2 = Vz(rf());
                  a2 == null && document.querySelectorAll && (a2 = Vz(document.querySelectorAll("script")));
                }
              })();
              var VD = function(a2) {
                M.call(this);
                var b = this, c = Ix(Kx(this.getSettings()));
                c && 0 < c.length && (Yh.reset(), $h(new Bi(c)));
                this.D = new rD();
                this.g = a2;
                this.G = new Map();
                this.o = this.g.I;
                this.H = new ru(this);
                aj(this, this.H);
                this.J = new Nx(window);
                this.K = new ED(window);
                this.h = null;
                this.A = {};
                W.g != 0 ? (this.l = new gA(), aj(this, this.l)) : this.l = iA();
                iy() && (this.l.init(sC(this.o)), this.C = nA(this.l, this.g.L), $i(this, function() {
                  var d = b.C;
                  b.l.o.delete(d);
                  W.g != 0 && (H(kr).B[d] = null);
                }));
                Vh(Qi) && UD();
              };
              t(VD, M);
              VD.prototype.destroy = function() {
                this.W();
              };
              VD.prototype.getVersion = function() {
                return "h.3.482.0";
              };
              VD.prototype.requestAds = function(a2, b) {
                var c = this, d = [], e = null;
                Px(this.J) && d.push(new Promise(function(g) {
                  Sx(c.J, function(h) {
                    e = h;
                    g();
                  });
                }));
                var f = null;
                GD(this.K) && d.push(new Promise(function(g) {
                  ID(c.K, function(h) {
                    f = h;
                    g();
                  });
                }));
                Promise.all(d).then(function() {
                  WD(c, a2, b, {
                    Yc: e,
                    cd: f
                  });
                });
              };
              var WD = function(a2, b, c, d) {
                var e = b.adTagUrl;
                e && $z().report(8, {
                  adtagurl: e,
                  customPlayback: FC(a2.g),
                  customClick: a2.g.C != null
                });
                var f = "goog_" + ad++;
                a2.G.set(f, c || null);
                var g = XD({
                  adTagUrl: e,
                  Gd: true,
                  Yc: d.Yc,
                  cd: d.cd
                });
                a2.h = Xx(e, g || {});
                Vh(Ui) && tz(a2.h, function() {
                  YD(a2);
                });
                ZD(Zx(a2.h)) ? $D().then(function() {
                  aE(a2, f, b, g);
                }) : aE(a2, f, b, g);
              };
              VD.prototype.getSettings = function() {
                return W;
              };
              VD.prototype.contentComplete = function() {
                vy(sC(this.o), "adsLoader", "contentComplete");
              };
              var ZD = function(a2) {
                return a2 ? false : !fy();
              };
              VD.prototype.M = function(a2) {
                var b = a2.ha;
                switch (b) {
                  case "adsLoaded":
                    b = a2.la;
                    a2 = a2.Mb;
                    b = new Z(this.l, this.g, b.adTagUrl || "", b.adCuePoints, this.C, b.isCustomClickTrackingAllowed, sC(this.o, a2));
                    this.dispatchEvent(new mD(b, bE(this, a2)));
                    break;
                  case "error":
                    b = a2.la;
                    this.dispatchEvent(new JC(new HC(b), bE(this, a2.Mb)));
                    a2 = {
                      error: b.errorCode,
                      vis: lh(document)
                    };
                    $z().report(7, a2);
                    break;
                  case "cookieUpdate":
                    a2 = a2.la;
                    if (a2 == null)
                      break;
                    var c = a2.gfpCookie;
                    if (c && W.h) {
                      var d = new Lx();
                      Ae(d, 5, true);
                      b = this.D;
                      c = xe(Ik, c ? JSON.parse(c) : null);
                      if (d) {
                        if (d) {
                          var e = {
                            Hd: C(c, 2) - Date.now() / 1e3,
                            path: C(c, 3),
                            domain: C(c, 4),
                            rf: false
                          }, f = b.g;
                          De(d, 5) && f.origin !== "null" && new Cs(f.document).set("__gads", C(c, 1), e);
                        }
                        De(d, 5) && 0.01 > b.g.Math.random() && (d = sD(b, d), fg({
                          domain: C(c, 4),
                          host: b.g.location.host,
                          success: d === C(c, 1) ? "1" : "0"
                        }, "gfp_cw_status"));
                      }
                    }
                    cE(this, a2.encryptedSignalBidderIds || []);
                    break;
                  case "trackingUrlPinged":
                    this.dispatchEvent(new LC(b, null, a2.la));
                }
              };
              var cE = function(a2, b) {
                b.length != 0 && (b = uz(b.map(function(c) {
                  return {
                    Fa: c
                  };
                }), a2.h)) && b.forEach(function(c) {
                  return c.then(function(d) {
                    d && YD(a2);
                  });
                });
              }, YD = function(a2) {
                var b = Py(sz(a2.h));
                b && (a2.A.espSignals = b, vy(sC(a2.o), "adsLoader", "signalsRefresh", a2.A));
              }, bE = function(a2, b) {
                var c = a2.G.get(b);
                a2.G.delete(b);
                return c;
              }, XD = function(a2) {
                var b = a2.adTagUrl;
                if (b) {
                  var c = /iu=\/(\d+)\//.exec(Wc(b));
                  (c = c && c.length == 2 ? c[1] : null) || (b = Zc(new P(b).l.get("client")), c = jc(b) ? null : b);
                  b = c;
                } else
                  b = null;
                b = b || "";
                var d = d === void 0 ? u : d;
                c = pD(b);
                if (c != 0)
                  var e = c;
                else
                  e = e === void 0 ? u : e, e = e.top, e = Vf(e, "googlefcInactive") ? 4 : b && Vf(e, "googlefcPA-" + b) ? 2 : Vf(e, "googlefcNPA") ? 3 : 0;
                b = d;
                d = b = b === void 0 ? u : b;
                d = d === void 0 ? u : d;
                (d = !!d.googlefc) || (d = b.top, d = d === void 0 ? u.top : d, d = Vf(d, "googlefcPresent"));
                var f = f === void 0 ? u : f;
                f = Vf(f.top, "googlefcLoaded");
                b = a2.Yc;
                c = a2.cd;
                var g = {};
                return g.gfcPresent = d && e != 4, g.gfcLoaded = f, g.gfcUserConsent = e, g.isGdprLoader = a2.Gd, g.addtlConsent = b ? b.addtlConsent : null, g.gdprApplies = b ? b.gdprApplies : null, g.tcString = b ? b.tcString : null, g.uspString = c ? c.uspString : null, g;
              }, $D = function() {
                return new Promise(function(a2) {
                  DD(function() {
                    AD();
                    W.I = xD[1] || "";
                    AD();
                    W.X = xD[6] || "";
                    AD();
                    W.J = xD[4] || "";
                    a2();
                  });
                });
              }, aE = function(a2, b, c, d) {
                var e = {};
                e = (e.limaExperimentIds = Zh().sort().join(","), e);
                var f = a2.getSettings(), g = W.g != 0 ? H(kr).l : a2.l.A;
                g = g === void 0 ? null : g;
                var h = {};
                g != null && (h.activeViewPushUpdates = g);
                h.activityMonitorMode = f.g;
                h.adsToken = f.I;
                h.autoPlayAdBreaks = f.isAutoPlayAdBreaks();
                h.companionBackfill = f.getCompanionBackfill();
                h.cookiesEnabled = f.h;
                h.disableCustomPlaybackForIOS10Plus = f.getDisableCustomPlaybackForIOS10Plus();
                h.engagementDetection = true;
                h.isFunctionalTest = false;
                h.isVpaidAdapter = f.Fb();
                h["1pJar"] = f.J;
                h.numRedirects = f.getNumRedirects();
                h.pageCorrelator = f.R;
                h.persistentStateCorrelator = Tg();
                h.playerType = f.getPlayerType();
                h.playerVersion = f.getPlayerVersion();
                h.ppid = f.getPpid();
                h.privacyControls = f.X;
                h.reportMediaRequests = false;
                h.sessionId = f.C;
                h.streamCorrelator = f.Y;
                h.testingConfig = Kx(f).g;
                h.urlSignals = f.aa;
                h.vpaidMode = f.getVpaidMode();
                h.featureFlags = f.getFeatureFlags();
                g = c.adTagUrl;
                f = {};
                f.contentMediaUrl = a2.g.J;
                f.customClickTrackingProvided = a2.g.C != null;
                a: {
                  var k = Lk();
                  k = q(k);
                  for (var n = k.next(); !n.done; n = k.next())
                    if (n = n.value, n.url && n.url.includes("amp=1")) {
                      k = true;
                      break a;
                    }
                  k = window.context != null ? 0 < parseInt(window.context.ampcontextVersion, 10) : Ok().l != null;
                }
                f.isAmp = k;
                a: {
                  try {
                    var m = window.top.location.href;
                  } catch (Lu) {
                    m = 2;
                    break a;
                  }
                  m = m == null ? 2 : m == window.document.location.href ? 0 : 1;
                }
                f.iframeState = m;
                f.imaHostingDomain = window.document.domain;
                f.imaHostingPageUrl = window.document.URL;
                if (Rm())
                  var v = window.location.href;
                else {
                  n = Ok();
                  m = n.h;
                  k = n.g;
                  var r = n.l;
                  n = null;
                  if (r)
                    if (r = r.url, Vh(Si))
                      try {
                        v = Xs(r);
                        var w = v.g, x = vz(w, "/v/");
                        x || (x = vz(w, "/a/"));
                        if (!x)
                          throw Error("Can not extract standalone amp url.");
                        var G = vz("/" + x, "/s/"), la = Ms(v.l);
                        la.remove("amp_js_v");
                        la.remove("amp_lite");
                        var Qa = G ? Xs("https://" + G) : Xs("http://" + x);
                        Ls(Qa, la);
                        n = Qa.toString();
                      } catch (Lu) {
                        n = null;
                      }
                    else
                      n = wz(r);
                  v = n ? n : m && m.url ? m.url : k && k.url ? k.url : "";
                }
                f.topAccessiblePageUrl = v;
                f.referrer = window.document.referrer;
                f.domLoadTime = a2.o.J;
                f.sdkImplLoadTime = a2.o.K;
                f.supportsResizing = !FC(a2.g);
                v = E().location.ancestorOrigins;
                f.topOrigin = v ? 0 < v.length && 200 > v[v.length - 1].length ? v[v.length - 1] : "" : null;
                f.osdId = a2.C;
                f.usesCustomVideoPlayback = FC(a2.g);
                f.usesInlinePlayback = a2.g.D;
                w = a2.g.G;
                v = [];
                G = x = "";
                if (w != null) {
                  x = w;
                  G = true;
                  G = G === void 0 ? false : G;
                  la = [];
                  for (Qa = 0; x && 25 > Qa; ++Qa) {
                    m = "";
                    G !== void 0 && G || (m = (m = x.nodeType !== 9 && x.id) ? "/" + m : "");
                    a: {
                      if (x && x.nodeName && x.parentElement) {
                        k = x.nodeName.toString().toLowerCase();
                        n = x.parentElement.childNodes;
                        for (var Ad = r = 0; Ad < n.length; ++Ad) {
                          var Sa = n[Ad];
                          if (Sa.nodeName && Sa.nodeName.toString().toLowerCase() === k) {
                            if (x === Sa) {
                              k = "." + r;
                              break a;
                            }
                            ++r;
                          }
                        }
                      }
                      k = "";
                    }
                    la.push((x.nodeName && x.nodeName.toString().toLowerCase()) + m + k);
                    x = x.parentElement;
                  }
                  x = la.join();
                  if (w) {
                    w = (w = w.ownerDocument) && (w.defaultView || w.parentWindow) || null;
                    G = [];
                    if (w)
                      try {
                        var U = w.parent;
                        for (la = 0; U && U !== w && 25 > la; ++la) {
                          var $c = U.frames;
                          for (Qa = 0; Qa < $c.length; ++Qa)
                            if (w === $c[Qa]) {
                              G.push(Qa);
                              break;
                            }
                          w = U;
                          U = w.parent;
                        }
                      } catch (Lu) {
                      }
                    G = G.join();
                  } else
                    G = "";
                }
                v.push(x, G);
                if (g != null) {
                  for (U = 0; U < ot.length - 1; ++U)
                    v.push(Kf(g, ot[U]) || "");
                  U = Kf(g, "videoad_start_delay");
                  $c = "";
                  U && (U = parseInt(U, 10), $c = 0 > U ? "postroll" : U == 0 ? "preroll" : "midroll");
                  v.push($c);
                } else
                  for (U = 0; U < ot.length; ++U)
                    v.push("");
                U = v.join(":");
                $c = U.length;
                if ($c == 0)
                  U = 0;
                else {
                  g = 305419896;
                  for (v = 0; v < $c; v++)
                    g ^= (g << 5) + (g >> 2) + U.charCodeAt(v) & 4294967295;
                  U = 0 < g ? g : 4294967296 + g;
                }
                f = (f.videoAdKey = U.toString(), f);
                U = {};
                d = (U.consentSettings = d, U.imalibExperiments = e, U.settings = h, U.videoEnvironment = f, U);
                e = {};
                e.adsResponse = c.adsResponse;
                e.videoPlayActivation = c.videoPlayActivation;
                e.videoPlayMuted = c.videoPlayMuted;
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
                if (a2.h && W.h) {
                  e = a2.h;
                  c = new Lx();
                  e = !Zx(e);
                  Ae(c, 5, e);
                  e = a2.D;
                  if (e.h === 0) {
                    if (sD(e, c))
                      h = true;
                    else if (h = e.g, De(c, 5) && h.origin !== "null" && new Cs(h.document).set("GoogleAdServingTest", "Good", void 0), h = qD("GoogleAdServingTest", c, e.g) === "Good")
                      f = e.g, De(c, 5) && f.origin !== "null" && new Cs(f.document).remove("GoogleAdServingTest", void 0, void 0);
                    e.h = h ? 2 : 1;
                  }
                  d.isBrowserCookieEnabled = e.h === 2;
                  c = sD(a2.D, c);
                  c !== null && (d.gfpCookieValue = c);
                }
                d.trustTokenStatus = a2.A.trustTokenStatus;
                if (c = Py(sz(a2.h)))
                  a2.A.espSignals = c, d.espSignals = c;
                d.isEapLoader = false;
                b = sC(a2.o, b);
                a2.H.O(b, "adsLoader", a2.M);
                vy(b, "adsLoader", "requestAds", d);
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
          }
        });
        require_ima3();
      })();
    }
  });

  // src/elements/createPlayer.js
  function createPlayer() {
    try {
      if (this.options.elementToAppend) {
        this.elementToAppend = document.querySelector(this.options.elementToAppend);
        this.parentElement = document.createElement("div");
        this.parentElement.classList.add("video-container");
        this.elementToAppend.append(this.parentElement);
        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("video");
        this.videoElement.src = this.options.contentSource;
        this.parentElement.append(this.videoElement);
        this.createUi();
        this.resize();
      } else {
        throw new Error("No element to append Player");
      }
    } catch (err) {
      console.error(err);
      return;
    }
  }

  // src/elements/createUi.js
  function createUi() {
    var uiHtml = `
    <div id='adContainer'></div>
    <div class="show-controls">
    
        <div class="controls-container">
          <!-- progress bar -->
          <div class="progress-range" title="seek">
            <div class="progress-bar"></div>
          </div>
          <div class="control-group">
            <div class="controls-left">
              <div class="play-controls">
                <i class="fas fa-play" title="Play" id="play-btn"></i>
              </div>
              <div class="volume">
                <div class="volume-icon">
                  <i class="fas fa-volume-up" title="Mute" id="volume-icon"></i>
                </div>
                <div class="volume-range" title="Change Volume">
                  <div class="volume-bar"></div>
                </div>
              </div>
            </div>
            <div class="controls-right">
              <div class="speed" title="Playback Rate">
                <select name="playbackRate" class="player-speed">
                  <option value="0.5">0.5</option>
                  <option value="0.75">0.75</option>
                  <option value="1" selected>1</option>
                  <option value="1.5">1.5</option>
                  <option value="7.75">1.75</option>
                </select>
              </div>
              <div class="time">
                <span class="time-elapsed"> 00:00 /</span>
                <span class="time-duration">00:00</span>
              </div>
              <div class="fullscreen">
                <i class="fas fa-expand" id="fullscreenBtn"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    this.videoElement?.insertAdjacentHTML("afterend", uiHtml);
    this.adContainer = document.getElementById("adContainer");
    this.playBtn = document.getElementById("play-btn");
    this.progressBar = document.querySelector(".progress-bar");
    this.volumeRange = document.querySelector(".volume-range");
    this.volumeBar = document.querySelector(".volume-bar");
    this.volumeIconSymbol = document.getElementById("volume-icon");
  }

  // src/helpers/createScripts.js
  function createLink(url, rel) {
    var element;
    if (typeof url == "string" && typeof rel == "string") {
      element = document.createElement("link");
      element.href = url;
      document.head.append(element);
      element.rel = rel;
    }
  }

  // src/elements/resize.js
  function resize() {
    var containerHeight = this.elementToAppend?.getBoundingClientRect()?.height;
    var containerWidth = this.elementToAppend.getBoundingClientRect()?.width;
    var aspectRatio = 16 / 9;
    var calculatedHeight = containerWidth / aspectRatio;
    var containerDimensions = {
      height: containerHeight || calculatedHeight,
      width: containerWidth
    };
    this.parentElement.style.height = `${containerDimensions.height}px`;
    this.parentElement.style.width = `${containerDimensions.width}px`;
    this.playerWidth = containerDimensions.width;
    this.playerHeight = containerDimensions.height;
  }

  // src/advertising/createAdvertisingContainer.js
  function createAdDisplayContainer() {
    this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer, this.videoElement);
  }

  // src/class/Player.js
  var import_ima3 = __toModule(require_ima32());

  // src/advertising/adsLoader.js
  function adsLoader() {
    this.createAdDisplayContainer();
    var adsLoader2 = new google.ima.AdsLoader(this.adDisplayContainer);
    adsLoader2.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
    adsLoader2.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e) => {
      console.error(e.g.g.errorMessage);
      this.playBtn.addEventListener("click", () => this.playPauseContent());
    }, false);
    var contentEndedListener = function() {
      adsLoader2.contentComplete();
    };
    this.videoElement.onended = contentEndedListener;
    var adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = `${this.options.adSrc}`;
    adsRequest.linearAdSlotWidth = 640;
    adsRequest.linearAdSlotHeight = 400;
    adsRequest.nonLinearAdSlotWidth = 640;
    adsRequest.nonLinearAdSlotHeight = 150;
    adsLoader2.requestAds(adsRequest);
    console.log(this);
  }

  // src/advertising/setupIma/imaInit.js
  function imaInit() {
    const init = () => {
      this.adsLoader();
      this.playBtn.addEventListener("click", playAds);
      this.adContainer.addEventListener("click", playAds);
    };
    var adsManager = this.adsManager;
    var playAds = () => {
      try {
        this.adDisplayContainer.initialize();
        this.adsManager?.start();
      } catch (adError) {
        console.error(adError, "error");
      }
      this.playBtn.removeEventListener("click", playAds);
      this.adContainer.removeEventListener("click", playAds);
    };
    init();
  }

  // src/helpers/styles.js
  function changeClassname(element, oldClassname, newClassname) {
    var DOMelement;
    if (typeof oldClassname == "string" && typeof newClassname == "string") {
      if (element instanceof Element) {
        DOMelement = element;
      } else if (typeof element == "string") {
        DOMelement = document.querySelector(element);
      }
      DOMelement.classList.remove(oldClassname);
      DOMelement.classList.add(newClassname);
    }
  }

  // src/content/play.js
  function playPauseContent() {
    if (this.videoElement.paused) {
      changeClassname(this.playBtn, "fa-play", "fa-pause");
      this.videoElement.play();
    } else {
      changeClassname(this.playBtn, "fa-pause", "fa-play");
      this.videoElement.pause();
    }
  }

  // src/helpers/videoEvents.js
  function resumeVideoAd(adsManager) {
    console.log(12345);
    adsManager.resume();
  }

  // src/advertising/adProgress.js
  function adProgressBarWidth(duration, currentTime) {
    return currentTime / duration * 100;
  }

  // src/advertising/adStarted.js
  function adStarted() {
    console.log(this.adsManager);
    changeClassname(this.playBtn, "fa-play", "fa-pause");
    this.playBtn.addEventListener("click", () => this.adsManager.pause());
  }

  // src/advertising/setupIma/dimensions.js
  function getDimentions(element) {
    element.getBoundingClientRect();
    var dimensionsObj = {
      height: element.getBoundingClientRect().height,
      width: element.getBoundingClientRect().width
    };
    return dimensionsObj;
  }

  // src/advertising/setupIma/adsManager.js
  function onAdsManagerLoaded(adsManagerLoadedEvent) {
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    this.adsManager = adsManagerLoadedEvent.getAdsManager(this.videoElement, adsRenderingSettings);
    var dimentions = getDimentions(this.parentElement);
    this.adsManager.init(dimentions.width, dimentions.height, google.ima.ViewMode.NORMAL);
    var resume = resumeVideoAd.bind(this, this.adsManager);
    var playPauseContentFn = this.playPauseContent.bind(this);
    var duration;
    var currentTime;
    this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, adStarted.bind(this));
    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, (e) => {
      console.log("lOADED");
      console.log(e.getAdData());
      duration = e.getAdData().duration;
      console.log(duration);
      this.setVolume();
    });
    this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
      changeClassname(this.playBtn, "fa-pause", "fa-play");
      this.playBtn.addEventListener("click", resume);
    });
    this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, (e) => {
      currentTime = e.getAdData().currentTime;
      this.progressBar.style.width = adProgressBarWidth(duration, currentTime) + "%";
    });
    this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
      changeClassname(this.playBtn, "fa-play", "fa-pause");
      this.playBtn.removeEventListener("click", resume);
    });
    this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
      this.videoElement.play();
    });
    this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
      console.log("resume content");
      this.playBtn.addEventListener("click", playPauseContentFn);
    });
  }

  // src/common/setVolume.js
  function setVolume() {
    var oldVolume = this.adsManager.getVolume() || 1;
    console.log(this);
    this.volumeRange.addEventListener("click", (e) => {
      var newVolume = e.offsetX / this.volumeRange.offsetWidth;
      console.log(newVolume);
      if (newVolume < 0.1)
        newVolume = 0;
      if (newVolume > 0.9)
        newVolume = 1;
      this.volumeBar.style.width = `${newVolume * 100}px`;
      this.adsManager.setVolume(newVolume);
      this.videoElement.volume = newVolume;
      oldVolume = newVolume;
    });
    this.volumeIconSymbol.addEventListener("click", () => {
      this.volumeIconSymbol.className = "";
      if (this.videoElement.volume > 0) {
        oldVolume = this.videoElement.volume;
        this.videoElement.volume = 0;
        this.adsManager.setVolume(0);
        this.volumeIconSymbol.classList.add("fas", "fa-volume-mute");
        this.volumeBar.style.width = 0;
      } else {
        this.adsManager.setVolume(oldVolume);
        this.videoElement.volume = oldVolume;
        this.volumeBar.style.width = `${oldVolume * 100}%`;
        this.changeVolumeIcon(oldVolume);
      }
    });
  }

  // src/helpers/changeVolumeIcon.js
  function changeVolumeIcon(newVolume) {
    this.volumeIconSymbol.className = "";
    if (newVolume > 0.7) {
      this.volumeIconSymbol.classList.add("fas", "fa-volume-up");
    } else if (newVolume <= 0.7 && newVolume > 0) {
      this.volumeIconSymbol.classList.add("fas", "fa-volume-down");
    } else if (newVolume == 0) {
      this.volumeIconSymbol.classList.add("fas", "fa-volume-mute");
    }
  }

  // src/class/Player.js
  var Player = class {
    constructor(options) {
      this.options = options;
      this.createLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css", "stylesheet");
      this.createLink("../../out/style/style.css", "stylesheet");
      this.createPlayer();
      this.imaInit();
    }
    playPauseContent = playPauseContent;
    changeVolumeIcon = changeVolumeIcon;
    setVolume = setVolume;
    onAdsManagerLoaded = onAdsManagerLoaded;
    imaInit = imaInit;
    adsLoader = adsLoader;
    createAdDisplayContainer = createAdDisplayContainer;
    resize = resize;
    createPlayer = createPlayer;
    createUi = createUi;
    createLink = createLink;
  };

  // src/index.js
  window.Player = Player;
})();
//# sourceMappingURL=index.js.map
