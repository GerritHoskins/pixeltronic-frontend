import { _ as __vitePreload } from "./index.2facb99b.js";
var __extends = globalThis && globalThis.__extends || function() {
  var e = function(t, n) {
    e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t2) {
      e2.__proto__ = t2;
    } || function(e2, t2) {
      for (var n2 in t2)
        if (Object.prototype.hasOwnProperty.call(t2, n2))
          e2[n2] = t2[n2];
    };
    return e(t, n);
  };
  return function(t, n) {
    if (typeof n !== "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var __awaiter = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function a(e2) {
    return e2 instanceof n ? e2 : new n(function(t2) {
      t2(e2);
    });
  }
  return new (n || (n = Promise))(function(n2, o) {
    function s(e2) {
      try {
        l(r.next(e2));
      } catch (e3) {
        o(e3);
      }
    }
    function i(e2) {
      try {
        l(r["throw"](e2));
      } catch (e3) {
        o(e3);
      }
    }
    function l(e2) {
      e2.done ? n2(e2.value) : a(e2.value).then(s, i);
    }
    l((r = r.apply(e, t || [])).next());
  });
};
var __generator = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, a, o, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol === "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(e2) {
    return function(t2) {
      return l([e2, t2]);
    };
  }
  function l(i2) {
    if (r)
      throw new TypeError("Generator is already executing.");
    while (s && (s = 0, i2[0] && (n = 0)), n)
      try {
        if (r = 1, a && (o = i2[0] & 2 ? a["return"] : i2[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 0) : a.next) && !(o = o.call(a, i2[1])).done)
          return o;
        if (a = 0, o)
          i2 = [i2[0] & 2, o.value];
        switch (i2[0]) {
          case 0:
          case 1:
            o = i2;
            break;
          case 4:
            n.label++;
            return { value: i2[1], done: false };
          case 5:
            n.label++;
            a = i2[1];
            i2 = [0];
            continue;
          case 7:
            i2 = n.ops.pop();
            n.trys.pop();
            continue;
          default:
            if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (i2[0] === 6 || i2[0] === 2)) {
              n = 0;
              continue;
            }
            if (i2[0] === 3 && (!o || i2[1] > o[0] && i2[1] < o[3])) {
              n.label = i2[1];
              break;
            }
            if (i2[0] === 6 && n.label < o[1]) {
              n.label = o[1];
              o = i2;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2];
              n.ops.push(i2);
              break;
            }
            if (o[2])
              n.ops.pop();
            n.trys.pop();
            continue;
        }
        i2 = t.call(e, n);
      } catch (e2) {
        i2 = [6, e2];
        a = 0;
      } finally {
        r = o = 0;
      }
    if (i2[0] & 5)
      throw i2[1];
    return { value: i2[0] ? i2[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, o; r < a; r++) {
      if (o || !(r in t)) {
        if (!o)
          o = Array.prototype.slice.call(t, 0, r);
        o[r] = t[r];
      }
    }
  return e.concat(o || Array.prototype.slice.call(t));
};
var NAMESPACE = "ionicpwaelements";
var scopeId;
var hostTagName;
var isSvgMode = false;
var queuePending = false;
var createTime = function(e, t) {
  {
    return function() {
      return;
    };
  }
};
var uniqueTime = function(e, t) {
  {
    return function() {
      return;
    };
  }
};
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = function(e) {
  return e != null;
};
var isComplexType = function(e) {
  e = typeof e;
  return e === "object" || e === "function";
};
function queryNonceMetaTagContent(e) {
  var t, n, r;
  return (r = (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0 ? void 0 : n.getAttribute("content")) !== null && r !== void 0 ? r : void 0;
}
var h = function(e, t) {
  var n = [];
  for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
  }
  var a = null;
  var o = false;
  var s = false;
  var i = [];
  var l = function(t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      a = t2[n2];
      if (Array.isArray(a)) {
        l(a);
      } else if (a != null && typeof a !== "boolean") {
        if (o = typeof e !== "function" && !isComplexType(a)) {
          a = String(a);
        }
        if (o && s) {
          i[i.length - 1].$text$ += a;
        } else {
          i.push(o ? newVNode(null, a) : a);
        }
        s = o;
      }
    }
  };
  l(n);
  if (t) {
    {
      var u = t.className || t.class;
      if (u) {
        t.class = typeof u !== "object" ? u : Object.keys(u).filter(function(e2) {
          return u[e2];
        }).join(" ");
      }
    }
  }
  var c = newVNode(e, null);
  c.$attrs$ = t;
  if (i.length > 0) {
    c.$children$ = i;
  }
  return c;
};
var newVNode = function(e, t) {
  var n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
  {
    n.$attrs$ = null;
  }
  return n;
};
var Host = {};
var isHost = function(e) {
  return e && e.$tag$ === Host;
};
var parsePropertyValue = function(e, t) {
  if (e != null && !isComplexType(e)) {
    if (t & 4) {
      return e === "false" ? false : e === "" || !!e;
    }
    if (t & 2) {
      return parseFloat(e);
    }
    if (t & 1) {
      return String(e);
    }
    return e;
  }
  return e;
};
var getElement = function(e) {
  return getHostRef(e).$hostElement$;
};
var createEvent = function(e, t, n) {
  var r = getElement(e);
  return { emit: function(e2) {
    return emitEvent(r, t, { bubbles: !!(n & 4), composed: !!(n & 2), cancelable: !!(n & 1), detail: e2 });
  } };
};
var emitEvent = function(e, t, n) {
  var r = plt.ce(t, n);
  e.dispatchEvent(r);
  return r;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = function(e, t, n) {
  var r = styles.get(e);
  if (supportsConstructableStylesheets && n) {
    r = r || new CSSStyleSheet();
    if (typeof r === "string") {
      r = t;
    } else {
      r.replaceSync(t);
    }
  } else {
    r = t;
  }
  styles.set(e, r);
};
var addStyle = function(e, t, n, r) {
  var a;
  var o = getScopeId(t);
  var s = styles.get(o);
  e = e.nodeType === 11 ? e : doc;
  if (s) {
    if (typeof s === "string") {
      e = e.head || e;
      var i = rootAppliedStyles.get(e);
      var l = void 0;
      if (!i) {
        rootAppliedStyles.set(e, i = /* @__PURE__ */ new Set());
      }
      if (!i.has(o)) {
        {
          {
            l = doc.createElement("style");
            l.innerHTML = s;
          }
          var u = (a = plt.$nonce$) !== null && a !== void 0 ? a : queryNonceMetaTagContent(doc);
          if (u != null) {
            l.setAttribute("nonce", u);
          }
          e.insertBefore(l, e.querySelector("link"));
        }
        if (i) {
          i.add(o);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(s)) {
      e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [s], false);
    }
  }
  return o;
};
var attachStyles = function(e) {
  var t = e.$cmpMeta$;
  var n = e.$hostElement$;
  var r = t.$flags$;
  var a = createTime("attachStyles", t.$tagName$);
  var o = addStyle(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
  if (r & 10) {
    n["s-sc"] = o;
    n.classList.add(o + "-h");
  }
  a();
};
var getScopeId = function(e, t) {
  return "sc-" + e.$tagName$;
};
var setAccessor = function(e, t, n, r, a, o) {
  if (n !== r) {
    var s = isMemberInElement(e, t);
    var i = t.toLowerCase();
    if (t === "class") {
      var l = e.classList;
      var u = parseClassList(n);
      var c = parseClassList(r);
      l.remove.apply(l, u.filter(function(e2) {
        return e2 && !c.includes(e2);
      }));
      l.add.apply(l, c.filter(function(e2) {
        return e2 && !u.includes(e2);
      }));
    } else if (t === "style") {
      {
        for (var f in n) {
          if (!r || r[f] == null) {
            if (f.includes("-")) {
              e.style.removeProperty(f);
            } else {
              e.style[f] = "";
            }
          }
        }
      }
      for (var f in r) {
        if (!n || r[f] !== n[f]) {
          if (f.includes("-")) {
            e.style.setProperty(f, r[f]);
          } else {
            e.style[f] = r[f];
          }
        }
      }
    } else if (t === "ref") {
      if (r) {
        r(e);
      }
    } else if (!s && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-") {
        t = t.slice(3);
      } else if (isMemberInElement(win, i)) {
        t = i.slice(2);
      } else {
        t = i[2] + t.slice(3);
      }
      if (n) {
        plt.rel(e, t, n, false);
      }
      if (r) {
        plt.ael(e, t, r, false);
      }
    } else {
      var $ = isComplexType(r);
      if ((s || $ && r !== null) && !a) {
        try {
          if (!e.tagName.includes("-")) {
            var d = r == null ? "" : r;
            if (t === "list") {
              s = false;
            } else if (n == null || e[t] != d) {
              e[t] = d;
            }
          } else {
            e[t] = r;
          }
        } catch (e2) {
        }
      }
      if (r == null || r === false) {
        if (r !== false || e.getAttribute(t) === "") {
          {
            e.removeAttribute(t);
          }
        }
      } else if ((!s || o & 4 || a) && !$) {
        r = r === true ? "" : r;
        {
          e.setAttribute(t, r);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = function(e) {
  return !e ? [] : e.split(parseClassListRegex);
};
var updateElement = function(e, t, n, r) {
  var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
  var o = e && e.$attrs$ || EMPTY_OBJ;
  var s = t.$attrs$ || EMPTY_OBJ;
  {
    for (r in o) {
      if (!(r in s)) {
        setAccessor(a, r, o[r], void 0, n, t.$flags$);
      }
    }
  }
  for (r in s) {
    setAccessor(a, r, o[r], s[r], n, t.$flags$);
  }
};
var createElm = function(e, t, n, r) {
  var a = t.$children$[n];
  var o = 0;
  var s;
  var i;
  if (a.$text$ !== null) {
    s = a.$elm$ = doc.createTextNode(a.$text$);
  } else {
    if (!isSvgMode) {
      isSvgMode = a.$tag$ === "svg";
    }
    s = a.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, a.$tag$);
    if (isSvgMode && a.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, a, isSvgMode);
    }
    if (isDef(scopeId) && s["s-si"] !== scopeId) {
      s.classList.add(s["s-si"] = scopeId);
    }
    if (a.$children$) {
      for (o = 0; o < a.$children$.length; ++o) {
        i = createElm(e, a, o);
        if (i) {
          s.appendChild(i);
        }
      }
    }
    {
      if (a.$tag$ === "svg") {
        isSvgMode = false;
      } else if (s.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  return s;
};
var addVnodes = function(e, t, n, r, a, o) {
  var s = e;
  var i;
  if (s.shadowRoot && s.tagName === hostTagName) {
    s = s.shadowRoot;
  }
  for (; a <= o; ++a) {
    if (r[a]) {
      i = createElm(null, n, a);
      if (i) {
        r[a].$elm$ = i;
        s.insertBefore(i, t);
      }
    }
  }
};
var removeVnodes = function(e, t, n) {
  for (var r = t; r <= n; ++r) {
    var a = e[r];
    if (a) {
      var o = a.$elm$;
      nullifyVNodeRefs(a);
      if (o) {
        o.remove();
      }
    }
  }
};
var updateChildren = function(e, t, n, r) {
  var a = 0;
  var o = 0;
  var s = t.length - 1;
  var i = t[0];
  var l = t[s];
  var u = r.length - 1;
  var c = r[0];
  var f = r[u];
  var $;
  while (a <= s && o <= u) {
    if (i == null) {
      i = t[++a];
    } else if (l == null) {
      l = t[--s];
    } else if (c == null) {
      c = r[++o];
    } else if (f == null) {
      f = r[--u];
    } else if (isSameVnode(i, c)) {
      patch(i, c);
      i = t[++a];
      c = r[++o];
    } else if (isSameVnode(l, f)) {
      patch(l, f);
      l = t[--s];
      f = r[--u];
    } else if (isSameVnode(i, f)) {
      patch(i, f);
      e.insertBefore(i.$elm$, l.$elm$.nextSibling);
      i = t[++a];
      f = r[--u];
    } else if (isSameVnode(l, c)) {
      patch(l, c);
      e.insertBefore(l.$elm$, i.$elm$);
      l = t[--s];
      c = r[++o];
    } else {
      {
        $ = createElm(t && t[o], n, o);
        c = r[++o];
      }
      if ($) {
        {
          i.$elm$.parentNode.insertBefore($, i.$elm$);
        }
      }
    }
  }
  if (a > s) {
    addVnodes(e, r[u + 1] == null ? null : r[u + 1].$elm$, n, r, o, u);
  } else if (o > u) {
    removeVnodes(t, a, s);
  }
};
var isSameVnode = function(e, t) {
  if (e.$tag$ === t.$tag$) {
    return true;
  }
  return false;
};
var patch = function(e, t) {
  var n = t.$elm$ = e.$elm$;
  var r = e.$children$;
  var a = t.$children$;
  var o = t.$tag$;
  var s = t.$text$;
  if (s === null) {
    {
      isSvgMode = o === "svg" ? true : o === "foreignObject" ? false : isSvgMode;
    }
    {
      {
        updateElement(e, t, isSvgMode);
      }
    }
    if (r !== null && a !== null) {
      updateChildren(n, r, t, a);
    } else if (a !== null) {
      if (e.$text$ !== null) {
        n.textContent = "";
      }
      addVnodes(n, null, t, a, 0, a.length - 1);
    } else if (r !== null) {
      removeVnodes(r, 0, r.length - 1);
    }
    if (isSvgMode && o === "svg") {
      isSvgMode = false;
    }
  } else if (e.$text$ !== s) {
    n.data = s;
  }
};
var nullifyVNodeRefs = function(e) {
  {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
    e.$children$ && e.$children$.map(nullifyVNodeRefs);
  }
};
var renderVdom = function(e, t) {
  var n = e.$hostElement$;
  var r = e.$vnode$ || newVNode(null, null);
  var a = isHost(t) ? t : h(null, null, t);
  hostTagName = n.tagName;
  a.$tag$ = null;
  a.$flags$ |= 4;
  e.$vnode$ = a;
  a.$elm$ = r.$elm$ = n.shadowRoot || n;
  {
    scopeId = n["s-sc"];
  }
  patch(r, a);
};
var attachToAncestor = function(e, t) {
  if (t && !e.$onRenderResolve$ && t["s-p"]) {
    t["s-p"].push(new Promise(function(t2) {
      return e.$onRenderResolve$ = t2;
    }));
  }
};
var scheduleUpdate = function(e, t) {
  {
    e.$flags$ |= 16;
  }
  if (e.$flags$ & 4) {
    e.$flags$ |= 512;
    return;
  }
  attachToAncestor(e, e.$ancestorComponent$);
  var n = function() {
    return dispatchHooks(e, t);
  };
  return writeTask(n);
};
var dispatchHooks = function(e, t) {
  var n = createTime("scheduleUpdate", e.$cmpMeta$.$tagName$);
  var r = e.$lazyInstance$;
  var a;
  if (t) {
    {
      e.$flags$ |= 256;
      if (e.$queuedListeners$) {
        e.$queuedListeners$.map(function(e2) {
          var t2 = e2[0], n2 = e2[1];
          return safeCall(r, t2, n2);
        });
        e.$queuedListeners$ = void 0;
      }
    }
  }
  n();
  return enqueue(a, function() {
    return updateComponent(e, r, t);
  });
};
var enqueue = function(e, t) {
  return isPromisey(e) ? e.then(t) : t();
};
var isPromisey = function(e) {
  return e instanceof Promise || e && e.then && typeof e.then === "function";
};
var updateComponent = function(e, t, n) {
  return __awaiter(void 0, void 0, void 0, function() {
    var r, a, o, s, i, l, u;
    return __generator(this, function(c) {
      a = e.$hostElement$;
      o = createTime("update", e.$cmpMeta$.$tagName$);
      s = a["s-rc"];
      if (n) {
        attachStyles(e);
      }
      i = createTime("render", e.$cmpMeta$.$tagName$);
      {
        callRender(e, t);
      }
      if (s) {
        s.map(function(e2) {
          return e2();
        });
        a["s-rc"] = void 0;
      }
      i();
      o();
      {
        l = (r = a["s-p"]) !== null && r !== void 0 ? r : [];
        u = function() {
          return postUpdateComponent(e);
        };
        if (l.length === 0) {
          u();
        } else {
          Promise.all(l).then(u);
          e.$flags$ |= 4;
          l.length = 0;
        }
      }
      return [2];
    });
  });
};
var callRender = function(e, t, n) {
  try {
    t = t.render();
    {
      e.$flags$ &= ~16;
    }
    {
      e.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(e, t);
        }
      }
    }
  } catch (t2) {
    consoleError(t2, e.$hostElement$);
  }
  return null;
};
var postUpdateComponent = function(e) {
  e.$cmpMeta$.$tagName$;
  var n = e.$hostElement$;
  var r = createTime();
  var a = e.$lazyInstance$;
  var o = e.$ancestorComponent$;
  if (!(e.$flags$ & 64)) {
    e.$flags$ |= 64;
    {
      addHydratedFlag(n);
    }
    {
      safeCall(a, "componentDidLoad");
    }
    r();
    {
      e.$onReadyResolve$(n);
      if (!o) {
        appDidLoad();
      }
    }
  } else {
    r();
  }
  {
    e.$onInstanceResolve$(n);
  }
  {
    if (e.$onRenderResolve$) {
      e.$onRenderResolve$();
      e.$onRenderResolve$ = void 0;
    }
    if (e.$flags$ & 512) {
      nextTick(function() {
        return scheduleUpdate(e, false);
      });
    }
    e.$flags$ &= ~(4 | 512);
  }
};
var forceUpdate = function(e) {
  {
    var t = getHostRef(e);
    var n = t.$hostElement$.isConnected;
    if (n && (t.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(t, false);
    }
    return n;
  }
};
var appDidLoad = function(e) {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(function() {
    return emitEvent(win, "appload", { detail: { namespace: NAMESPACE } });
  });
};
var safeCall = function(e, t, n) {
  if (e && e[t]) {
    try {
      return e[t](n);
    } catch (e2) {
      consoleError(e2);
    }
  }
  return void 0;
};
var addHydratedFlag = function(e) {
  return e.classList.add("hydrated");
};
var getValue = function(e, t) {
  return getHostRef(e).$instanceValues$.get(t);
};
var setValue = function(e, t, n, r) {
  var a = getHostRef(e);
  var o = a.$instanceValues$.get(t);
  var s = a.$flags$;
  var i = a.$lazyInstance$;
  n = parsePropertyValue(n, r.$members$[t][0]);
  var l = Number.isNaN(o) && Number.isNaN(n);
  var u = n !== o && !l;
  if ((!(s & 8) || o === void 0) && u) {
    a.$instanceValues$.set(t, n);
    if (i) {
      if ((s & (2 | 16)) === 2) {
        scheduleUpdate(a, false);
      }
    }
  }
};
var proxyComponent = function(e, t, n) {
  if (t.$members$) {
    var r = Object.entries(t.$members$);
    var a = e.prototype;
    r.map(function(e2) {
      var r2 = e2[0], o2 = e2[1][0];
      if (o2 & 31 || n & 2 && o2 & 32) {
        Object.defineProperty(a, r2, { get: function() {
          return getValue(this, r2);
        }, set: function(e3) {
          setValue(this, r2, e3, t);
        }, configurable: true, enumerable: true });
      } else if (n & 1 && o2 & 64) {
        Object.defineProperty(a, r2, { value: function() {
          var e3 = [];
          for (var t2 = 0; t2 < arguments.length; t2++) {
            e3[t2] = arguments[t2];
          }
          var n2 = getHostRef(this);
          return n2.$onInstancePromise$.then(function() {
            var t3;
            return (t3 = n2.$lazyInstance$)[r2].apply(t3, e3);
          });
        } });
      }
    });
    if (n & 1) {
      var o = /* @__PURE__ */ new Map();
      a.attributeChangedCallback = function(e2, t2, n2) {
        var r2 = this;
        plt.jmp(function() {
          var t3 = o.get(e2);
          if (r2.hasOwnProperty(t3)) {
            n2 = r2[t3];
            delete r2[t3];
          } else if (a.hasOwnProperty(t3) && typeof r2[t3] === "number" && r2[t3] == n2) {
            return;
          }
          r2[t3] = n2 === null && typeof r2[t3] === "boolean" ? false : n2;
        });
      };
      e.observedAttributes = r.filter(function(e2) {
        e2[0];
        var n2 = e2[1];
        return n2[0] & 15;
      }).map(function(e2) {
        var t2 = e2[0], n2 = e2[1];
        var r2 = n2[1] || t2;
        o.set(r2, t2);
        return r2;
      });
    }
  }
  return e;
};
var initializeComponent = function(e, t, n, r, a) {
  return __awaiter(void 0, void 0, void 0, function() {
    var e2, r2, o, s, i, l, u;
    return __generator(this, function(c) {
      switch (c.label) {
        case 0:
          if (!((t.$flags$ & 32) === 0))
            return [3, 3];
          t.$flags$ |= 32;
          a = loadModule(n);
          if (!a.then)
            return [3, 2];
          e2 = uniqueTime();
          return [4, a];
        case 1:
          a = c.sent();
          e2();
          c.label = 2;
        case 2:
          if (!a.isProxied) {
            proxyComponent(a, n, 2);
            a.isProxied = true;
          }
          r2 = createTime("createInstance", n.$tagName$);
          {
            t.$flags$ |= 8;
          }
          try {
            new a(t);
          } catch (e3) {
            consoleError(e3);
          }
          {
            t.$flags$ &= ~8;
          }
          r2();
          if (a.style) {
            o = a.style;
            s = getScopeId(n);
            if (!styles.has(s)) {
              i = createTime("registerStyles", n.$tagName$);
              registerStyle(s, o, !!(n.$flags$ & 1));
              i();
            }
          }
          c.label = 3;
        case 3:
          l = t.$ancestorComponent$;
          u = function() {
            return scheduleUpdate(t, true);
          };
          if (l && l["s-rc"]) {
            l["s-rc"].push(u);
          } else {
            u();
          }
          return [2];
      }
    });
  });
};
var connectedCallback = function(e) {
  if ((plt.$flags$ & 1) === 0) {
    var t = getHostRef(e);
    var n = t.$cmpMeta$;
    var r = createTime("connectedCallback", n.$tagName$);
    if (!(t.$flags$ & 1)) {
      t.$flags$ |= 1;
      {
        var a = e;
        while (a = a.parentNode || a.host) {
          if (a["s-p"]) {
            attachToAncestor(t, t.$ancestorComponent$ = a);
            break;
          }
        }
      }
      if (n.$members$) {
        Object.entries(n.$members$).map(function(t2) {
          var n2 = t2[0], r2 = t2[1][0];
          if (r2 & 31 && e.hasOwnProperty(n2)) {
            var a2 = e[n2];
            delete e[n2];
            e[n2] = a2;
          }
        });
      }
      {
        initializeComponent(e, t, n);
      }
    } else {
      addHostEventListeners(e, t, n.$listeners$);
    }
    r();
  }
};
var disconnectedCallback = function(e) {
  if ((plt.$flags$ & 1) === 0) {
    var t = getHostRef(e);
    var n = t.$lazyInstance$;
    {
      if (t.$rmListeners$) {
        t.$rmListeners$.map(function(e2) {
          return e2();
        });
        t.$rmListeners$ = void 0;
      }
    }
    {
      safeCall(n, "disconnectedCallback");
    }
  }
};
var bootstrapLazy = function(e, t) {
  if (t === void 0) {
    t = {};
  }
  var n;
  var r = createTime();
  var a = [];
  var o = t.exclude || [];
  var s = win.customElements;
  var i = doc.head;
  var l = i.querySelector("meta[charset]");
  var u = doc.createElement("style");
  var c = [];
  var f;
  var $ = true;
  Object.assign(plt, t);
  plt.$resourcesUrl$ = new URL(t.resourcesUrl || "./", doc.baseURI).href;
  e.map(function(e2) {
    e2[1].map(function(t2) {
      var n2 = { $flags$: t2[0], $tagName$: t2[1], $members$: t2[2], $listeners$: t2[3] };
      {
        n2.$members$ = t2[2];
      }
      {
        n2.$listeners$ = t2[3];
      }
      var r2 = n2.$tagName$;
      var i2 = function(e3) {
        __extends(t3, e3);
        function t3(t4) {
          var r3 = e3.call(this, t4) || this;
          t4 = r3;
          registerHost(t4, n2);
          if (n2.$flags$ & 1) {
            {
              {
                t4.attachShadow({ mode: "open" });
              }
            }
          }
          return r3;
        }
        t3.prototype.connectedCallback = function() {
          var e4 = this;
          if (f) {
            clearTimeout(f);
            f = null;
          }
          if ($) {
            c.push(this);
          } else {
            plt.jmp(function() {
              return connectedCallback(e4);
            });
          }
        };
        t3.prototype.disconnectedCallback = function() {
          var e4 = this;
          plt.jmp(function() {
            return disconnectedCallback(e4);
          });
        };
        t3.prototype.componentOnReady = function() {
          return getHostRef(this).$onReadyPromise$;
        };
        return t3;
      }(HTMLElement);
      n2.$lazyBundleId$ = e2[0];
      if (!o.includes(r2) && !s.get(r2)) {
        a.push(r2);
        s.define(r2, proxyComponent(i2, n2, 1));
      }
    });
  });
  {
    u.innerHTML = a + HYDRATED_CSS;
    u.setAttribute("data-styles", "");
    var d = (n = plt.$nonce$) !== null && n !== void 0 ? n : queryNonceMetaTagContent(doc);
    if (d != null) {
      u.setAttribute("nonce", d);
    }
    i.insertBefore(u, l ? l.nextSibling : i.firstChild);
  }
  $ = false;
  if (c.length) {
    c.map(function(e2) {
      return e2.connectedCallback();
    });
  } else {
    {
      plt.jmp(function() {
        return f = setTimeout(appDidLoad, 30);
      });
    }
  }
  r();
};
var addHostEventListeners = function(e, t, n, r) {
  if (n) {
    n.map(function(n2) {
      var r2 = n2[0], a = n2[1], o = n2[2];
      var s = getHostListenerTarget(e, r2);
      var i = hostListenerProxy(t, o);
      var l = hostListenerOpts(r2);
      plt.ael(s, a, i, l);
      (t.$rmListeners$ = t.$rmListeners$ || []).push(function() {
        return plt.rel(s, a, i, l);
      });
    });
  }
};
var hostListenerProxy = function(e, t) {
  return function(n) {
    try {
      {
        if (e.$flags$ & 256) {
          e.$lazyInstance$[t](n);
        } else {
          (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, n]);
        }
      }
    } catch (e2) {
      consoleError(e2);
    }
  };
};
var getHostListenerTarget = function(e, t) {
  if (t & 16)
    return doc.body;
  return e;
};
var hostListenerOpts = function(e) {
  return (e & 2) !== 0;
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = function(e) {
  return hostRefs.get(e);
};
var registerInstance = function(e, t) {
  return hostRefs.set(t.$lazyInstance$ = e, t);
};
var registerHost = function(e, t) {
  var n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: /* @__PURE__ */ new Map() };
  {
    n.$onInstancePromise$ = new Promise(function(e2) {
      return n.$onInstanceResolve$ = e2;
    });
  }
  {
    n.$onReadyPromise$ = new Promise(function(e2) {
      return n.$onReadyResolve$ = e2;
    });
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  addHostEventListeners(e, n, t.$listeners$);
  return hostRefs.set(e, n);
};
var isMemberInElement = function(e, t) {
  return t in e;
};
var consoleError = function(e, t) {
  return (0, console.error)(e, t);
};
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = function(e, t, n) {
  var r = e.$tagName$.replace(/-/g, "_");
  var a = e.$lazyBundleId$;
  var o = cmpModules.get(a);
  if (o) {
    return o[r];
  }
  if (!n || !BUILD.hotModuleReplacement) {
    var s = function(e2) {
      cmpModules.set(a, e2);
      return e2[r];
    };
    switch (a) {
      case "pwa-action-sheet":
        return __vitePreload(() => import("./pwa-action-sheet.entry.784e603f.js"), true ? ["assets/pwa-action-sheet.entry.784e603f.js","assets/index.2facb99b.js","assets/index.7e8ead14.css"] : void 0).then(s, consoleError);
      case "pwa-camera-modal":
        return __vitePreload(() => import("./pwa-camera-modal.entry.f853dc5c.js"), true ? ["assets/pwa-camera-modal.entry.f853dc5c.js","assets/index.2facb99b.js","assets/index.7e8ead14.css"] : void 0).then(s, consoleError);
      case "pwa-toast":
        return __vitePreload(() => import("./pwa-toast.entry.15096b7a.js"), true ? ["assets/pwa-toast.entry.15096b7a.js","assets/index.2facb99b.js","assets/index.7e8ead14.css"] : void 0).then(s, consoleError);
      case "pwa-camera-modal-instance":
        return __vitePreload(() => import("./pwa-camera-modal-instance.entry.4e68b5e4.js"), true ? ["assets/pwa-camera-modal-instance.entry.4e68b5e4.js","assets/index.2facb99b.js","assets/index.7e8ead14.css"] : void 0).then(s, consoleError);
      case "pwa-camera":
        return __vitePreload(() => import("./pwa-camera.entry.7d8d11a6.js"), true ? ["assets/pwa-camera.entry.7d8d11a6.js","assets/index.2facb99b.js","assets/index.7e8ead14.css"] : void 0).then(s, consoleError);
    }
  }
  return __vitePreload(() => import("./".concat(a, ".entry.js").concat("")), true ? [] : void 0).then(function(e2) {
    {
      cmpModules.set(a, e2);
    }
    return e2[r];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var plt = { $flags$: 0, $resourcesUrl$: "", jmp: function(e) {
  return e();
}, raf: function(e) {
  return requestAnimationFrame(e);
}, ael: function(e, t, n, r) {
  return e.addEventListener(t, n, r);
}, rel: function(e, t, n, r) {
  return e.removeEventListener(t, n, r);
}, ce: function(e, t) {
  return new CustomEvent(e, t);
} };
var promiseResolve = function(e) {
  return Promise.resolve(e);
};
var supportsConstructableStylesheets = function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
}();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, t) {
  return function(n) {
    e.push(n);
    if (!queuePending) {
      queuePending = true;
      if (t && plt.$flags$ & 4) {
        nextTick(flush);
      } else {
        plt.raf(flush);
      }
    }
  };
};
var consume = function(e) {
  for (var t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  e.length = 0;
};
var flush = function() {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = function(e) {
  return promiseResolve().then(e);
};
var writeTask = queueTask(queueDomWrites, true);
var patchEsm = function() {
  return promiseResolve();
};
var defineCustomElements = function(e, o) {
  if (typeof window === "undefined")
    return Promise.resolve();
  return patchEsm().then(function() {
    return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", { facingMode: [1, "facing-mode"], present: [64], dismiss: [64] }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", { header: [1], cancelable: [4], options: [16], open: [32] }]]], ["pwa-toast", [[1, "pwa-toast", { message: [1], duration: [2], closing: [32] }]]], ["pwa-camera", [[1, "pwa-camera", { facingMode: [1, "facing-mode"], handlePhoto: [16], handleNoDeviceError: [16], noDevicesText: [1, "no-devices-text"], noDevicesButtonText: [1, "no-devices-button-text"], photo: [32], photoSrc: [32], showShutterOverlay: [32], flashIndex: [32], hasCamera: [32], rotation: [32], deviceError: [32] }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", { facingMode: [1, "facing-mode"], noDevicesText: [1, "no-devices-text"], noDevicesButtonText: [1, "no-devices-button-text"] }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], o);
  });
};
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
var capacitor = async () => {
  await defineCustomElements();
};
var capacitor$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": capacitor
}, Symbol.toStringTag, { value: "Module" }));
export { Host as H, capacitor$1 as a, createEvent as c, forceUpdate as f, getElement as g, h, registerInstance as r };
//# sourceMappingURL=data:application/json;base64,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QUUsa0JBQWtCLEdBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxFQUFFLFlBQWE7QUFBQyxRQUFHLE1BQUksU0FBUTtBQUFDLFVBQUksSUFBRSxFQUFFO0FBQVUsVUFBSSxJQUFFLGVBQWUsQ0FBQztBQUFFLFVBQUksSUFBRSxlQUFlLENBQUM7QUFBRSxRQUFFLE9BQU8sTUFBTSxHQUFFLEVBQUUsT0FBUSxTQUFTQSxJQUFFO0FBQUMsZUFBT0EsTUFBRyxDQUFDLEVBQUUsU0FBU0EsRUFBQztBQUFBLE1BQUMsQ0FBQyxDQUFFO0FBQUUsUUFBRSxJQUFJLE1BQU0sR0FBRSxFQUFFLE9BQVEsU0FBU0EsSUFBRTtBQUFDLGVBQU9BLE1BQUcsQ0FBQyxFQUFFLFNBQVNBLEVBQUM7QUFBQSxNQUFDLENBQUMsQ0FBRTtBQUFBLElBQUMsV0FBUyxNQUFJLFNBQVE7QUFBQztBQUFDLGlCQUFRLEtBQUssR0FBRTtBQUFDLGNBQUcsQ0FBQyxLQUFHLEVBQUUsTUFBSSxNQUFLO0FBQUMsZ0JBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLGdCQUFFLE1BQU0sZUFBZSxDQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsZ0JBQUUsTUFBTSxLQUFHO0FBQUEsWUFBRTtBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFDLGVBQVEsS0FBSyxHQUFFO0FBQUMsWUFBRyxDQUFDLEtBQUcsRUFBRSxPQUFLLEVBQUUsSUFBRztBQUFDLGNBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLGNBQUUsTUFBTSxZQUFZLEdBQUUsRUFBRSxFQUFFO0FBQUEsVUFBQyxPQUFLO0FBQUMsY0FBRSxNQUFNLEtBQUcsRUFBRTtBQUFBLFVBQUU7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsV0FBUyxNQUFJLE9BQU07QUFBQyxVQUFHLEdBQUU7QUFBQyxVQUFFLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQyxXQUFTLENBQUMsS0FBRyxFQUFFLE9BQUssT0FBSyxFQUFFLE9BQUssS0FBSTtBQUFDLFVBQUcsRUFBRSxPQUFLLEtBQUk7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O0FBQUUsTUFBSSxJQUFFLEVBQUUsU0FBTztBQUFFLE1BQUksSUFBRSxFQUFFO0FBQUcsTUFBSSxJQUFFLEVBQUU7QUFBRyxNQUFJLElBQUUsRUFBRSxTQUFPO0FBQUUsTUFBSSxJQUFFLEVBQUU7QUFBRyxNQUFJLElBQUUsRUFBRTtBQUFHLE1BQUk7QUFBRSxTQUFNLEtBQUcsS0FBRyxLQUFHLEdBQUU7QUFBQyxRQUFHLEtBQUcsTUFBSztBQUFDLFVBQUUsRUFBRSxFQUFFO0FBQUEsSUFBRSxXQUFTLEtBQUcsTUFBSztBQUFDLFVBQUUsRUFBRSxFQUFFO0FBQUEsSUFBRSxXQUFTLEtBQUcsTUFBSztBQUFDLFVBQUUsRUFBRSxFQUFFO0FBQUEsSUFBRSxXQUFTLEtBQUcsTUFBSztBQUFDLFVBQUUsRUFBRSxFQUFFO0FBQUEsSUFBRSxXQUFTLFlBQVksR0FBRSxDQUFDLEdBQUU7QUFBQyxZQUFNLEdBQUUsQ0FBQztBQUFFLFVBQUUsRUFBRSxFQUFFO0FBQUcsVUFBRSxFQUFFLEVBQUU7QUFBQSxJQUFFLFdBQVMsWUFBWSxHQUFFLENBQUMsR0FBRTtBQUFDLFlBQU0sR0FBRSxDQUFDO0FBQUUsVUFBRSxFQUFFLEVBQUU7QUFBRyxVQUFFLEVBQUUsRUFBRTtBQUFBLElBQUUsV0FBUyxZQUFZLEdBQUUsQ0FBQyxHQUFFO0FBQUMsWUFBTSxHQUFFLENBQUM7QUFBRSxRQUFFLGFBQWEsRUFBRSxPQUFNLEVBQUUsTUFBTSxXQUFXO0FBQUUsVUFBRSxFQUFFLEVBQUU7QUFBRyxVQUFFLEVBQUUsRUFBRTtBQUFBLElBQUUsV0FBUyxZQUFZLEdBQUUsQ0FBQyxHQUFFO0FBQUMsWUFBTSxHQUFFLENBQUM7QUFBRSxRQUFFLGFBQWEsRUFBRSxPQUFNLEVBQUUsS0FBSztBQUFFLFVBQUUsRUFBRSxFQUFFO0FBQUcsVUFBRSxFQUFFLEVBQUU7QUFBQSxJQUFFLE9BQUs7QUFBQztBQUFDLFlBQUUsVUFBVSxLQUFHLEVBQUUsSUFBRyxHQUFFLENBQUM7QUFBRSxZQUFFLEVBQUUsRUFBRTtBQUFBLE1BQUU7QUFBQyxVQUFH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LCJlIiwidCIsIm4iLCJpIiwiciIsIm8iLCJhIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L2luZGV4LTFjNWM0N2I0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9wd2EtZWxlbWVudHMvZGlzdC9lc20tZXM1L2xvYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2xvYWRlci9pbmRleC5qcyIsIi4uLy4uLy4uL3NyYy9ib290L2NhcGFjaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKHQsbil7ZT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKSllW25dPXRbbl19O3JldHVybiBlKHQsbil9O3JldHVybiBmdW5jdGlvbih0LG4pe2lmKHR5cGVvZiBuIT09XCJmdW5jdGlvblwiJiZuIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcobikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtlKHQsbik7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH10LnByb3RvdHlwZT1uPT09bnVsbD9PYmplY3QuY3JlYXRlKG4pOihyLnByb3RvdHlwZT1uLnByb3RvdHlwZSxuZXcgcil9fSgpO3ZhciBfX2F3YWl0ZXI9dGhpcyYmdGhpcy5fX2F3YWl0ZXJ8fGZ1bmN0aW9uKGUsdCxuLHIpe2Z1bmN0aW9uIGEoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBuP2U6bmV3IG4oKGZ1bmN0aW9uKHQpe3QoZSl9KSl9cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG4sbyl7ZnVuY3Rpb24gcyhlKXt0cnl7bChyLm5leHQoZSkpfWNhdGNoKGUpe28oZSl9fWZ1bmN0aW9uIGkoZSl7dHJ5e2wocltcInRocm93XCJdKGUpKX1jYXRjaChlKXtvKGUpfX1mdW5jdGlvbiBsKGUpe2UuZG9uZT9uKGUudmFsdWUpOmEoZS52YWx1ZSkudGhlbihzLGkpfWwoKHI9ci5hcHBseShlLHR8fFtdKSkubmV4dCgpKX0pKX07dmFyIF9fZ2VuZXJhdG9yPXRoaXMmJnRoaXMuX19nZW5lcmF0b3J8fGZ1bmN0aW9uKGUsdCl7dmFyIG49e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKG9bMF0mMSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX0scixhLG8scztyZXR1cm4gcz17bmV4dDppKDApLHRocm93OmkoMSkscmV0dXJuOmkoMil9LHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJihzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHM7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGwoW2UsdF0pfX1mdW5jdGlvbiBsKGkpe2lmKHIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7d2hpbGUocyYmKHM9MCxpWzBdJiYobj0wKSksbil0cnl7aWYocj0xLGEmJihvPWlbMF0mMj9hW1wicmV0dXJuXCJdOmlbMF0/YVtcInRocm93XCJdfHwoKG89YVtcInJldHVyblwiXSkmJm8uY2FsbChhKSwwKTphLm5leHQpJiYhKG89by5jYWxsKGEsaVsxXSkpLmRvbmUpcmV0dXJuIG87aWYoYT0wLG8paT1baVswXSYyLG8udmFsdWVdO3N3aXRjaChpWzBdKXtjYXNlIDA6Y2FzZSAxOm89aTticmVhaztjYXNlIDQ6bi5sYWJlbCsrO3JldHVybnt2YWx1ZTppWzFdLGRvbmU6ZmFsc2V9O2Nhc2UgNTpuLmxhYmVsKys7YT1pWzFdO2k9WzBdO2NvbnRpbnVlO2Nhc2UgNzppPW4ub3BzLnBvcCgpO24udHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1uLnRyeXMsbz1vLmxlbmd0aD4wJiZvW28ubGVuZ3RoLTFdKSYmKGlbMF09PT02fHxpWzBdPT09Mikpe249MDtjb250aW51ZX1pZihpWzBdPT09MyYmKCFvfHxpWzFdPm9bMF0mJmlbMV08b1szXSkpe24ubGFiZWw9aVsxXTticmVha31pZihpWzBdPT09NiYmbi5sYWJlbDxvWzFdKXtuLmxhYmVsPW9bMV07bz1pO2JyZWFrfWlmKG8mJm4ubGFiZWw8b1syXSl7bi5sYWJlbD1vWzJdO24ub3BzLnB1c2goaSk7YnJlYWt9aWYob1syXSluLm9wcy5wb3AoKTtuLnRyeXMucG9wKCk7Y29udGludWV9aT10LmNhbGwoZSxuKX1jYXRjaChlKXtpPVs2LGVdO2E9MH1maW5hbGx5e3I9bz0wfWlmKGlbMF0mNSl0aHJvdyBpWzFdO3JldHVybnt2YWx1ZTppWzBdP2lbMV06dm9pZCAwLGRvbmU6dHJ1ZX19fTt2YXIgX19zcHJlYWRBcnJheT10aGlzJiZ0aGlzLl9fc3ByZWFkQXJyYXl8fGZ1bmN0aW9uKGUsdCxuKXtpZihufHxhcmd1bWVudHMubGVuZ3RoPT09Milmb3IodmFyIHI9MCxhPXQubGVuZ3RoLG87cjxhO3IrKyl7aWYob3x8IShyIGluIHQpKXtpZighbylvPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQsMCxyKTtvW3JdPXRbcl19fXJldHVybiBlLmNvbmNhdChvfHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KSl9O3ZhciBOQU1FU1BBQ0U9XCJpb25pY3B3YWVsZW1lbnRzXCI7dmFyIHNjb3BlSWQ7dmFyIGhvc3RUYWdOYW1lO3ZhciBpc1N2Z01vZGU9ZmFsc2U7dmFyIHF1ZXVlUGVuZGluZz1mYWxzZTt2YXIgY3JlYXRlVGltZT1mdW5jdGlvbihlLHQpe2lmKHQ9PT12b2lkIDApe3Q9XCJcIn17cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJufX19O3ZhciB1bmlxdWVUaW1lPWZ1bmN0aW9uKGUsdCl7e3JldHVybiBmdW5jdGlvbigpe3JldHVybn19fTt2YXIgSFlEUkFURURfQ1NTPVwie3Zpc2liaWxpdHk6aGlkZGVufS5oeWRyYXRlZHt2aXNpYmlsaXR5OmluaGVyaXR9XCI7dmFyIEVNUFRZX09CSj17fTt2YXIgU1ZHX05TPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjt2YXIgSFRNTF9OUz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjt2YXIgaXNEZWY9ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPW51bGx9O3ZhciBpc0NvbXBsZXhUeXBlPWZ1bmN0aW9uKGUpe2U9dHlwZW9mIGU7cmV0dXJuIGU9PT1cIm9iamVjdFwifHxlPT09XCJmdW5jdGlvblwifTtmdW5jdGlvbiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZSl7dmFyIHQsbixyO3JldHVybihyPShuPSh0PWUuaGVhZCk9PT1udWxsfHx0PT09dm9pZCAwP3ZvaWQgMDp0LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcC1ub25jZVwiXScpKT09PW51bGx8fG49PT12b2lkIDA/dm9pZCAwOm4uZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSkhPT1udWxsJiZyIT09dm9pZCAwP3I6dW5kZWZpbmVkfXZhciBoPWZ1bmN0aW9uKGUsdCl7dmFyIG49W107Zm9yKHZhciByPTI7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7bltyLTJdPWFyZ3VtZW50c1tyXX12YXIgYT1udWxsO3ZhciBvPWZhbHNlO3ZhciBzPWZhbHNlO3ZhciBpPVtdO3ZhciBsPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXthPXRbbl07aWYoQXJyYXkuaXNBcnJheShhKSl7bChhKX1lbHNlIGlmKGEhPW51bGwmJnR5cGVvZiBhIT09XCJib29sZWFuXCIpe2lmKG89dHlwZW9mIGUhPT1cImZ1bmN0aW9uXCImJiFpc0NvbXBsZXhUeXBlKGEpKXthPVN0cmluZyhhKX1pZihvJiZzKXtpW2kubGVuZ3RoLTFdLiR0ZXh0JCs9YX1lbHNle2kucHVzaChvP25ld1ZOb2RlKG51bGwsYSk6YSl9cz1vfX19O2wobik7aWYodCl7e3ZhciB1PXQuY2xhc3NOYW1lfHx0LmNsYXNzO2lmKHUpe3QuY2xhc3M9dHlwZW9mIHUhPT1cIm9iamVjdFwiP3U6T2JqZWN0LmtleXModSkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gdVtlXX0pKS5qb2luKFwiIFwiKX19fXZhciBjPW5ld1ZOb2RlKGUsbnVsbCk7Yy4kYXR0cnMkPXQ7aWYoaS5sZW5ndGg+MCl7Yy4kY2hpbGRyZW4kPWl9cmV0dXJuIGN9O3ZhciBuZXdWTm9kZT1mdW5jdGlvbihlLHQpe3ZhciBuPXskZmxhZ3MkOjAsJHRhZyQ6ZSwkdGV4dCQ6dCwkZWxtJDpudWxsLCRjaGlsZHJlbiQ6bnVsbH07e24uJGF0dHJzJD1udWxsfXJldHVybiBufTt2YXIgSG9zdD17fTt2YXIgaXNIb3N0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLiR0YWckPT09SG9zdH07dmFyIHBhcnNlUHJvcGVydHlWYWx1ZT1mdW5jdGlvbihlLHQpe2lmKGUhPW51bGwmJiFpc0NvbXBsZXhUeXBlKGUpKXtpZih0JjQpe3JldHVybiBlPT09XCJmYWxzZVwiP2ZhbHNlOmU9PT1cIlwifHwhIWV9aWYodCYyKXtyZXR1cm4gcGFyc2VGbG9hdChlKX1pZih0JjEpe3JldHVybiBTdHJpbmcoZSl9cmV0dXJuIGV9cmV0dXJuIGV9O3ZhciBnZXRFbGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiBnZXRIb3N0UmVmKGUpLiRob3N0RWxlbWVudCR9O3ZhciBjcmVhdGVFdmVudD1mdW5jdGlvbihlLHQsbil7dmFyIHI9Z2V0RWxlbWVudChlKTtyZXR1cm57ZW1pdDpmdW5jdGlvbihlKXtyZXR1cm4gZW1pdEV2ZW50KHIsdCx7YnViYmxlczohIShuJjQpLGNvbXBvc2VkOiEhKG4mMiksY2FuY2VsYWJsZTohIShuJjEpLGRldGFpbDplfSl9fX07dmFyIGVtaXRFdmVudD1mdW5jdGlvbihlLHQsbil7dmFyIHI9cGx0LmNlKHQsbik7ZS5kaXNwYXRjaEV2ZW50KHIpO3JldHVybiByfTt2YXIgcm9vdEFwcGxpZWRTdHlsZXM9bmV3IFdlYWtNYXA7dmFyIHJlZ2lzdGVyU3R5bGU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXN0eWxlcy5nZXQoZSk7aWYoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMmJm4pe3I9cnx8bmV3IENTU1N0eWxlU2hlZXQ7aWYodHlwZW9mIHI9PT1cInN0cmluZ1wiKXtyPXR9ZWxzZXtyLnJlcGxhY2VTeW5jKHQpfX1lbHNle3I9dH1zdHlsZXMuc2V0KGUscil9O3ZhciBhZGRTdHlsZT1mdW5jdGlvbihlLHQsbixyKXt2YXIgYTt2YXIgbz1nZXRTY29wZUlkKHQpO3ZhciBzPXN0eWxlcy5nZXQobyk7ZT1lLm5vZGVUeXBlPT09MTE/ZTpkb2M7aWYocyl7aWYodHlwZW9mIHM9PT1cInN0cmluZ1wiKXtlPWUuaGVhZHx8ZTt2YXIgaT1yb290QXBwbGllZFN0eWxlcy5nZXQoZSk7dmFyIGw9dm9pZCAwO2lmKCFpKXtyb290QXBwbGllZFN0eWxlcy5zZXQoZSxpPW5ldyBTZXQpfWlmKCFpLmhhcyhvKSl7e3tsPWRvYy5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7bC5pbm5lckhUTUw9c312YXIgdT0oYT1wbHQuJG5vbmNlJCkhPT1udWxsJiZhIT09dm9pZCAwP2E6cXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYyk7aWYodSE9bnVsbCl7bC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLHUpfWUuaW5zZXJ0QmVmb3JlKGwsZS5xdWVyeVNlbGVjdG9yKFwibGlua1wiKSl9aWYoaSl7aS5hZGQobyl9fX1lbHNlIGlmKCFlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzKSl7ZS5hZG9wdGVkU3R5bGVTaGVldHM9X19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLGUuYWRvcHRlZFN0eWxlU2hlZXRzLHRydWUpLFtzXSxmYWxzZSl9fXJldHVybiBvfTt2YXIgYXR0YWNoU3R5bGVzPWZ1bmN0aW9uKGUpe3ZhciB0PWUuJGNtcE1ldGEkO3ZhciBuPWUuJGhvc3RFbGVtZW50JDt2YXIgcj10LiRmbGFncyQ7dmFyIGE9Y3JlYXRlVGltZShcImF0dGFjaFN0eWxlc1wiLHQuJHRhZ05hbWUkKTt2YXIgbz1hZGRTdHlsZShuLnNoYWRvd1Jvb3Q/bi5zaGFkb3dSb290Om4uZ2V0Um9vdE5vZGUoKSx0KTtpZihyJjEwKXtuW1wicy1zY1wiXT1vO24uY2xhc3NMaXN0LmFkZChvK1wiLWhcIil9YSgpfTt2YXIgZ2V0U2NvcGVJZD1mdW5jdGlvbihlLHQpe3JldHVyblwic2MtXCIrZS4kdGFnTmFtZSR9O3ZhciBzZXRBY2Nlc3Nvcj1mdW5jdGlvbihlLHQsbixyLGEsbyl7aWYobiE9PXIpe3ZhciBzPWlzTWVtYmVySW5FbGVtZW50KGUsdCk7dmFyIGk9dC50b0xvd2VyQ2FzZSgpO2lmKHQ9PT1cImNsYXNzXCIpe3ZhciBsPWUuY2xhc3NMaXN0O3ZhciB1PXBhcnNlQ2xhc3NMaXN0KG4pO3ZhciBjPXBhcnNlQ2xhc3NMaXN0KHIpO2wucmVtb3ZlLmFwcGx5KGwsdS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlJiYhYy5pbmNsdWRlcyhlKX0pKSk7bC5hZGQuYXBwbHkobCxjLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJiF1LmluY2x1ZGVzKGUpfSkpKX1lbHNlIGlmKHQ9PT1cInN0eWxlXCIpe3tmb3IodmFyIGYgaW4gbil7aWYoIXJ8fHJbZl09PW51bGwpe2lmKGYuaW5jbHVkZXMoXCItXCIpKXtlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGYpfWVsc2V7ZS5zdHlsZVtmXT1cIlwifX19fWZvcih2YXIgZiBpbiByKXtpZighbnx8cltmXSE9PW5bZl0pe2lmKGYuaW5jbHVkZXMoXCItXCIpKXtlLnN0eWxlLnNldFByb3BlcnR5KGYscltmXSl9ZWxzZXtlLnN0eWxlW2ZdPXJbZl19fX19ZWxzZSBpZih0PT09XCJyZWZcIil7aWYocil7cihlKX19ZWxzZSBpZighcyYmdFswXT09PVwib1wiJiZ0WzFdPT09XCJuXCIpe2lmKHRbMl09PT1cIi1cIil7dD10LnNsaWNlKDMpfWVsc2UgaWYoaXNNZW1iZXJJbkVsZW1lbnQod2luLGkpKXt0PWkuc2xpY2UoMil9ZWxzZXt0PWlbMl0rdC5zbGljZSgzKX1pZihuKXtwbHQucmVsKGUsdCxuLGZhbHNlKX1pZihyKXtwbHQuYWVsKGUsdCxyLGZhbHNlKX19ZWxzZXt2YXIgJD1pc0NvbXBsZXhUeXBlKHIpO2lmKChzfHwkJiZyIT09bnVsbCkmJiFhKXt0cnl7aWYoIWUudGFnTmFtZS5pbmNsdWRlcyhcIi1cIikpe3ZhciBkPXI9PW51bGw/XCJcIjpyO2lmKHQ9PT1cImxpc3RcIil7cz1mYWxzZX1lbHNlIGlmKG49PW51bGx8fGVbdF0hPWQpe2VbdF09ZH19ZWxzZXtlW3RdPXJ9fWNhdGNoKGUpe319aWYocj09bnVsbHx8cj09PWZhbHNlKXtpZihyIT09ZmFsc2V8fGUuZ2V0QXR0cmlidXRlKHQpPT09XCJcIil7e2UucmVtb3ZlQXR0cmlidXRlKHQpfX19ZWxzZSBpZigoIXN8fG8mNHx8YSkmJiEkKXtyPXI9PT10cnVlP1wiXCI6cjt7ZS5zZXRBdHRyaWJ1dGUodCxyKX19fX19O3ZhciBwYXJzZUNsYXNzTGlzdFJlZ2V4PS9cXHMvO3ZhciBwYXJzZUNsYXNzTGlzdD1mdW5jdGlvbihlKXtyZXR1cm4hZT9bXTplLnNwbGl0KHBhcnNlQ2xhc3NMaXN0UmVnZXgpfTt2YXIgdXBkYXRlRWxlbWVudD1mdW5jdGlvbihlLHQsbixyKXt2YXIgYT10LiRlbG0kLm5vZGVUeXBlPT09MTEmJnQuJGVsbSQuaG9zdD90LiRlbG0kLmhvc3Q6dC4kZWxtJDt2YXIgbz1lJiZlLiRhdHRycyR8fEVNUFRZX09CSjt2YXIgcz10LiRhdHRycyR8fEVNUFRZX09CSjt7Zm9yKHIgaW4gbyl7aWYoIShyIGluIHMpKXtzZXRBY2Nlc3NvcihhLHIsb1tyXSx1bmRlZmluZWQsbix0LiRmbGFncyQpfX19Zm9yKHIgaW4gcyl7c2V0QWNjZXNzb3IoYSxyLG9bcl0sc1tyXSxuLHQuJGZsYWdzJCl9fTt2YXIgY3JlYXRlRWxtPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBhPXQuJGNoaWxkcmVuJFtuXTt2YXIgbz0wO3ZhciBzO3ZhciBpO2lmKGEuJHRleHQkIT09bnVsbCl7cz1hLiRlbG0kPWRvYy5jcmVhdGVUZXh0Tm9kZShhLiR0ZXh0JCl9ZWxzZXtpZighaXNTdmdNb2RlKXtpc1N2Z01vZGU9YS4kdGFnJD09PVwic3ZnXCJ9cz1hLiRlbG0kPWRvYy5jcmVhdGVFbGVtZW50TlMoaXNTdmdNb2RlP1NWR19OUzpIVE1MX05TLGEuJHRhZyQpO2lmKGlzU3ZnTW9kZSYmYS4kdGFnJD09PVwiZm9yZWlnbk9iamVjdFwiKXtpc1N2Z01vZGU9ZmFsc2V9e3VwZGF0ZUVsZW1lbnQobnVsbCxhLGlzU3ZnTW9kZSl9aWYoaXNEZWYoc2NvcGVJZCkmJnNbXCJzLXNpXCJdIT09c2NvcGVJZCl7cy5jbGFzc0xpc3QuYWRkKHNbXCJzLXNpXCJdPXNjb3BlSWQpfWlmKGEuJGNoaWxkcmVuJCl7Zm9yKG89MDtvPGEuJGNoaWxkcmVuJC5sZW5ndGg7KytvKXtpPWNyZWF0ZUVsbShlLGEsbyk7aWYoaSl7cy5hcHBlbmRDaGlsZChpKX19fXtpZihhLiR0YWckPT09XCJzdmdcIil7aXNTdmdNb2RlPWZhbHNlfWVsc2UgaWYocy50YWdOYW1lPT09XCJmb3JlaWduT2JqZWN0XCIpe2lzU3ZnTW9kZT10cnVlfX19cmV0dXJuIHN9O3ZhciBhZGRWbm9kZXM9ZnVuY3Rpb24oZSx0LG4scixhLG8pe3ZhciBzPWU7dmFyIGk7aWYocy5zaGFkb3dSb290JiZzLnRhZ05hbWU9PT1ob3N0VGFnTmFtZSl7cz1zLnNoYWRvd1Jvb3R9Zm9yKDthPD1vOysrYSl7aWYoclthXSl7aT1jcmVhdGVFbG0obnVsbCxuLGEpO2lmKGkpe3JbYV0uJGVsbSQ9aTtzLmluc2VydEJlZm9yZShpLHQpfX19fTt2YXIgcmVtb3ZlVm5vZGVzPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9dDtyPD1uOysrcil7dmFyIGE9ZVtyXTtpZihhKXt2YXIgbz1hLiRlbG0kO251bGxpZnlWTm9kZVJlZnMoYSk7aWYobyl7by5yZW1vdmUoKX19fX07dmFyIHVwZGF0ZUNoaWxkcmVuPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBhPTA7dmFyIG89MDt2YXIgcz10Lmxlbmd0aC0xO3ZhciBpPXRbMF07dmFyIGw9dFtzXTt2YXIgdT1yLmxlbmd0aC0xO3ZhciBjPXJbMF07dmFyIGY9clt1XTt2YXIgJDt3aGlsZShhPD1zJiZvPD11KXtpZihpPT1udWxsKXtpPXRbKythXX1lbHNlIGlmKGw9PW51bGwpe2w9dFstLXNdfWVsc2UgaWYoYz09bnVsbCl7Yz1yWysrb119ZWxzZSBpZihmPT1udWxsKXtmPXJbLS11XX1lbHNlIGlmKGlzU2FtZVZub2RlKGksYykpe3BhdGNoKGksYyk7aT10WysrYV07Yz1yWysrb119ZWxzZSBpZihpc1NhbWVWbm9kZShsLGYpKXtwYXRjaChsLGYpO2w9dFstLXNdO2Y9clstLXVdfWVsc2UgaWYoaXNTYW1lVm5vZGUoaSxmKSl7cGF0Y2goaSxmKTtlLmluc2VydEJlZm9yZShpLiRlbG0kLGwuJGVsbSQubmV4dFNpYmxpbmcpO2k9dFsrK2FdO2Y9clstLXVdfWVsc2UgaWYoaXNTYW1lVm5vZGUobCxjKSl7cGF0Y2gobCxjKTtlLmluc2VydEJlZm9yZShsLiRlbG0kLGkuJGVsbSQpO2w9dFstLXNdO2M9clsrK29dfWVsc2V7eyQ9Y3JlYXRlRWxtKHQmJnRbb10sbixvKTtjPXJbKytvXX1pZigkKXt7aS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSgkLGkuJGVsbSQpfX19fWlmKGE+cyl7YWRkVm5vZGVzKGUsclt1KzFdPT1udWxsP251bGw6clt1KzFdLiRlbG0kLG4scixvLHUpfWVsc2UgaWYobz51KXtyZW1vdmVWbm9kZXModCxhLHMpfX07dmFyIGlzU2FtZVZub2RlPWZ1bmN0aW9uKGUsdCl7aWYoZS4kdGFnJD09PXQuJHRhZyQpe3JldHVybiB0cnVlfXJldHVybiBmYWxzZX07dmFyIHBhdGNoPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC4kZWxtJD1lLiRlbG0kO3ZhciByPWUuJGNoaWxkcmVuJDt2YXIgYT10LiRjaGlsZHJlbiQ7dmFyIG89dC4kdGFnJDt2YXIgcz10LiR0ZXh0JDtpZihzPT09bnVsbCl7e2lzU3ZnTW9kZT1vPT09XCJzdmdcIj90cnVlOm89PT1cImZvcmVpZ25PYmplY3RcIj9mYWxzZTppc1N2Z01vZGV9e3t1cGRhdGVFbGVtZW50KGUsdCxpc1N2Z01vZGUpfX1pZihyIT09bnVsbCYmYSE9PW51bGwpe3VwZGF0ZUNoaWxkcmVuKG4scix0LGEpfWVsc2UgaWYoYSE9PW51bGwpe2lmKGUuJHRleHQkIT09bnVsbCl7bi50ZXh0Q29udGVudD1cIlwifWFkZFZub2RlcyhuLG51bGwsdCxhLDAsYS5sZW5ndGgtMSl9ZWxzZSBpZihyIT09bnVsbCl7cmVtb3ZlVm5vZGVzKHIsMCxyLmxlbmd0aC0xKX1pZihpc1N2Z01vZGUmJm89PT1cInN2Z1wiKXtpc1N2Z01vZGU9ZmFsc2V9fWVsc2UgaWYoZS4kdGV4dCQhPT1zKXtuLmRhdGE9c319O3ZhciBudWxsaWZ5Vk5vZGVSZWZzPWZ1bmN0aW9uKGUpe3tlLiRhdHRycyQmJmUuJGF0dHJzJC5yZWYmJmUuJGF0dHJzJC5yZWYobnVsbCk7ZS4kY2hpbGRyZW4kJiZlLiRjaGlsZHJlbiQubWFwKG51bGxpZnlWTm9kZVJlZnMpfX07dmFyIHJlbmRlclZkb209ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLiRob3N0RWxlbWVudCQ7dmFyIHI9ZS4kdm5vZGUkfHxuZXdWTm9kZShudWxsLG51bGwpO3ZhciBhPWlzSG9zdCh0KT90OmgobnVsbCxudWxsLHQpO2hvc3RUYWdOYW1lPW4udGFnTmFtZTthLiR0YWckPW51bGw7YS4kZmxhZ3MkfD00O2UuJHZub2RlJD1hO2EuJGVsbSQ9ci4kZWxtJD1uLnNoYWRvd1Jvb3R8fG47e3Njb3BlSWQ9bltcInMtc2NcIl19cGF0Y2gocixhKX07dmFyIGF0dGFjaFRvQW5jZXN0b3I9ZnVuY3Rpb24oZSx0KXtpZih0JiYhZS4kb25SZW5kZXJSZXNvbHZlJCYmdFtcInMtcFwiXSl7dFtcInMtcFwiXS5wdXNoKG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtyZXR1cm4gZS4kb25SZW5kZXJSZXNvbHZlJD10fSkpKX19O3ZhciBzY2hlZHVsZVVwZGF0ZT1mdW5jdGlvbihlLHQpe3tlLiRmbGFncyR8PTE2fWlmKGUuJGZsYWdzJCY0KXtlLiRmbGFncyR8PTUxMjtyZXR1cm59YXR0YWNoVG9BbmNlc3RvcihlLGUuJGFuY2VzdG9yQ29tcG9uZW50JCk7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gZGlzcGF0Y2hIb29rcyhlLHQpfTtyZXR1cm4gd3JpdGVUYXNrKG4pfTt2YXIgZGlzcGF0Y2hIb29rcz1mdW5jdGlvbihlLHQpe3ZhciBuPWNyZWF0ZVRpbWUoXCJzY2hlZHVsZVVwZGF0ZVwiLGUuJGNtcE1ldGEkLiR0YWdOYW1lJCk7dmFyIHI9ZS4kbGF6eUluc3RhbmNlJDt2YXIgYTtpZih0KXt7ZS4kZmxhZ3MkfD0yNTY7aWYoZS4kcXVldWVkTGlzdGVuZXJzJCl7ZS4kcXVldWVkTGlzdGVuZXJzJC5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0sbj1lWzFdO3JldHVybiBzYWZlQ2FsbChyLHQsbil9KSk7ZS4kcXVldWVkTGlzdGVuZXJzJD11bmRlZmluZWR9fX1uKCk7cmV0dXJuIGVucXVldWUoYSwoZnVuY3Rpb24oKXtyZXR1cm4gdXBkYXRlQ29tcG9uZW50KGUscix0KX0pKX07dmFyIGVucXVldWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaXNQcm9taXNleShlKT9lLnRoZW4odCk6dCgpfTt2YXIgaXNQcm9taXNleT1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIFByb21pc2V8fGUmJmUudGhlbiYmdHlwZW9mIGUudGhlbj09PVwiZnVuY3Rpb25cIn07dmFyIHVwZGF0ZUNvbXBvbmVudD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgcixhLG8scyxpLGwsdTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24oYyl7YT1lLiRob3N0RWxlbWVudCQ7bz1jcmVhdGVUaW1lKFwidXBkYXRlXCIsZS4kY21wTWV0YSQuJHRhZ05hbWUkKTtzPWFbXCJzLXJjXCJdO2lmKG4pe2F0dGFjaFN0eWxlcyhlKX1pPWNyZWF0ZVRpbWUoXCJyZW5kZXJcIixlLiRjbXBNZXRhJC4kdGFnTmFtZSQpO3tjYWxsUmVuZGVyKGUsdCl9aWYocyl7cy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KSk7YVtcInMtcmNcIl09dW5kZWZpbmVkfWkoKTtvKCk7e2w9KHI9YVtcInMtcFwiXSkhPT1udWxsJiZyIT09dm9pZCAwP3I6W107dT1mdW5jdGlvbigpe3JldHVybiBwb3N0VXBkYXRlQ29tcG9uZW50KGUpfTtpZihsLmxlbmd0aD09PTApe3UoKX1lbHNle1Byb21pc2UuYWxsKGwpLnRoZW4odSk7ZS4kZmxhZ3MkfD00O2wubGVuZ3RoPTB9fXJldHVyblsyXX0pKX0pKX07dmFyIGNhbGxSZW5kZXI9ZnVuY3Rpb24oZSx0LG4pe3RyeXt0PXQucmVuZGVyKCk7e2UuJGZsYWdzJCY9fjE2fXtlLiRmbGFncyR8PTJ9e3t7cmVuZGVyVmRvbShlLHQpfX19fWNhdGNoKHQpe2NvbnNvbGVFcnJvcih0LGUuJGhvc3RFbGVtZW50JCl9cmV0dXJuIG51bGx9O3ZhciBwb3N0VXBkYXRlQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3ZhciB0PWUuJGNtcE1ldGEkLiR0YWdOYW1lJDt2YXIgbj1lLiRob3N0RWxlbWVudCQ7dmFyIHI9Y3JlYXRlVGltZShcInBvc3RVcGRhdGVcIix0KTt2YXIgYT1lLiRsYXp5SW5zdGFuY2UkO3ZhciBvPWUuJGFuY2VzdG9yQ29tcG9uZW50JDtpZighKGUuJGZsYWdzJCY2NCkpe2UuJGZsYWdzJHw9NjQ7e2FkZEh5ZHJhdGVkRmxhZyhuKX17c2FmZUNhbGwoYSxcImNvbXBvbmVudERpZExvYWRcIil9cigpO3tlLiRvblJlYWR5UmVzb2x2ZSQobik7aWYoIW8pe2FwcERpZExvYWQoKX19fWVsc2V7cigpfXtlLiRvbkluc3RhbmNlUmVzb2x2ZSQobil9e2lmKGUuJG9uUmVuZGVyUmVzb2x2ZSQpe2UuJG9uUmVuZGVyUmVzb2x2ZSQoKTtlLiRvblJlbmRlclJlc29sdmUkPXVuZGVmaW5lZH1pZihlLiRmbGFncyQmNTEyKXtuZXh0VGljaygoZnVuY3Rpb24oKXtyZXR1cm4gc2NoZWR1bGVVcGRhdGUoZSxmYWxzZSl9KSl9ZS4kZmxhZ3MkJj1+KDR8NTEyKX19O3ZhciBmb3JjZVVwZGF0ZT1mdW5jdGlvbihlKXt7dmFyIHQ9Z2V0SG9zdFJlZihlKTt2YXIgbj10LiRob3N0RWxlbWVudCQuaXNDb25uZWN0ZWQ7aWYobiYmKHQuJGZsYWdzJCYoMnwxNikpPT09Mil7c2NoZWR1bGVVcGRhdGUodCxmYWxzZSl9cmV0dXJuIG59fTt2YXIgYXBwRGlkTG9hZD1mdW5jdGlvbihlKXt7YWRkSHlkcmF0ZWRGbGFnKGRvYy5kb2N1bWVudEVsZW1lbnQpfW5leHRUaWNrKChmdW5jdGlvbigpe3JldHVybiBlbWl0RXZlbnQod2luLFwiYXBwbG9hZFwiLHtkZXRhaWw6e25hbWVzcGFjZTpOQU1FU1BBQ0V9fSl9KSl9O3ZhciBzYWZlQ2FsbD1mdW5jdGlvbihlLHQsbil7aWYoZSYmZVt0XSl7dHJ5e3JldHVybiBlW3RdKG4pfWNhdGNoKGUpe2NvbnNvbGVFcnJvcihlKX19cmV0dXJuIHVuZGVmaW5lZH07dmFyIGFkZEh5ZHJhdGVkRmxhZz1mdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwiaHlkcmF0ZWRcIil9O3ZhciBnZXRWYWx1ZT1mdW5jdGlvbihlLHQpe3JldHVybiBnZXRIb3N0UmVmKGUpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHQpfTt2YXIgc2V0VmFsdWU9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGE9Z2V0SG9zdFJlZihlKTt2YXIgbz1hLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHQpO3ZhciBzPWEuJGZsYWdzJDt2YXIgaT1hLiRsYXp5SW5zdGFuY2UkO249cGFyc2VQcm9wZXJ0eVZhbHVlKG4sci4kbWVtYmVycyRbdF1bMF0pO3ZhciBsPU51bWJlci5pc05hTihvKSYmTnVtYmVyLmlzTmFOKG4pO3ZhciB1PW4hPT1vJiYhbDtpZigoIShzJjgpfHxvPT09dW5kZWZpbmVkKSYmdSl7YS4kaW5zdGFuY2VWYWx1ZXMkLnNldCh0LG4pO2lmKGkpe2lmKChzJigyfDE2KSk9PT0yKXtzY2hlZHVsZVVwZGF0ZShhLGZhbHNlKX19fX07dmFyIHByb3h5Q29tcG9uZW50PWZ1bmN0aW9uKGUsdCxuKXtpZih0LiRtZW1iZXJzJCl7dmFyIHI9T2JqZWN0LmVudHJpZXModC4kbWVtYmVycyQpO3ZhciBhPWUucHJvdG90eXBlO3IubWFwKChmdW5jdGlvbihlKXt2YXIgcj1lWzBdLG89ZVsxXVswXTtpZihvJjMxfHxuJjImJm8mMzIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHIse2dldDpmdW5jdGlvbigpe3JldHVybiBnZXRWYWx1ZSh0aGlzLHIpfSxzZXQ6ZnVuY3Rpb24oZSl7c2V0VmFsdWUodGhpcyxyLGUsdCl9LGNvbmZpZ3VyYWJsZTp0cnVlLGVudW1lcmFibGU6dHJ1ZX0pfWVsc2UgaWYobiYxJiZvJjY0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxyLHt2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPVtdO2Zvcih2YXIgdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe2VbdF09YXJndW1lbnRzW3RdfXZhciBuPWdldEhvc3RSZWYodGhpcyk7cmV0dXJuIG4uJG9uSW5zdGFuY2VQcm9taXNlJC50aGVuKChmdW5jdGlvbigpe3ZhciB0O3JldHVybih0PW4uJGxhenlJbnN0YW5jZSQpW3JdLmFwcGx5KHQsZSl9KSl9fSl9fSkpO2lmKG4mMSl7dmFyIG89bmV3IE1hcDthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcztwbHQuam1wKChmdW5jdGlvbigpe3ZhciB0PW8uZ2V0KGUpO2lmKHIuaGFzT3duUHJvcGVydHkodCkpe249clt0XTtkZWxldGUgclt0XX1lbHNlIGlmKGEuaGFzT3duUHJvcGVydHkodCkmJnR5cGVvZiByW3RdPT09XCJudW1iZXJcIiYmclt0XT09bil7cmV0dXJufXJbdF09bj09PW51bGwmJnR5cGVvZiByW3RdPT09XCJib29sZWFuXCI/ZmFsc2U6bn0pKX07ZS5vYnNlcnZlZEF0dHJpYnV0ZXM9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0sbj1lWzFdO3JldHVybiBuWzBdJjE1fSkpLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXSxuPWVbMV07dmFyIHI9blsxXXx8dDtvLnNldChyLHQpO3JldHVybiByfSkpfX1yZXR1cm4gZX07dmFyIGluaXRpYWxpemVDb21wb25lbnQ9ZnVuY3Rpb24oZSx0LG4scixhKXtyZXR1cm4gX19hd2FpdGVyKHZvaWQgMCx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLHIsbyxzLGksbCx1O3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihjKXtzd2l0Y2goYy5sYWJlbCl7Y2FzZSAwOmlmKCEoKHQuJGZsYWdzJCYzMik9PT0wKSlyZXR1cm5bMywzXTt0LiRmbGFncyR8PTMyO2E9bG9hZE1vZHVsZShuKTtpZighYS50aGVuKXJldHVyblszLDJdO2U9dW5pcXVlVGltZSgpO3JldHVybls0LGFdO2Nhc2UgMTphPWMuc2VudCgpO2UoKTtjLmxhYmVsPTI7Y2FzZSAyOmlmKCFhLmlzUHJveGllZCl7cHJveHlDb21wb25lbnQoYSxuLDIpO2EuaXNQcm94aWVkPXRydWV9cj1jcmVhdGVUaW1lKFwiY3JlYXRlSW5zdGFuY2VcIixuLiR0YWdOYW1lJCk7e3QuJGZsYWdzJHw9OH10cnl7bmV3IGEodCl9Y2F0Y2goZSl7Y29uc29sZUVycm9yKGUpfXt0LiRmbGFncyQmPX44fXIoKTtpZihhLnN0eWxlKXtvPWEuc3R5bGU7cz1nZXRTY29wZUlkKG4pO2lmKCFzdHlsZXMuaGFzKHMpKXtpPWNyZWF0ZVRpbWUoXCJyZWdpc3RlclN0eWxlc1wiLG4uJHRhZ05hbWUkKTtyZWdpc3RlclN0eWxlKHMsbywhIShuLiRmbGFncyQmMSkpO2koKX19Yy5sYWJlbD0zO2Nhc2UgMzpsPXQuJGFuY2VzdG9yQ29tcG9uZW50JDt1PWZ1bmN0aW9uKCl7cmV0dXJuIHNjaGVkdWxlVXBkYXRlKHQsdHJ1ZSl9O2lmKGwmJmxbXCJzLXJjXCJdKXtsW1wicy1yY1wiXS5wdXNoKHUpfWVsc2V7dSgpfXJldHVyblsyXX19KSl9KSl9O3ZhciBjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihlKXtpZigocGx0LiRmbGFncyQmMSk9PT0wKXt2YXIgdD1nZXRIb3N0UmVmKGUpO3ZhciBuPXQuJGNtcE1ldGEkO3ZhciByPWNyZWF0ZVRpbWUoXCJjb25uZWN0ZWRDYWxsYmFja1wiLG4uJHRhZ05hbWUkKTtpZighKHQuJGZsYWdzJCYxKSl7dC4kZmxhZ3MkfD0xO3t2YXIgYT1lO3doaWxlKGE9YS5wYXJlbnROb2RlfHxhLmhvc3Qpe2lmKGFbXCJzLXBcIl0pe2F0dGFjaFRvQW5jZXN0b3IodCx0LiRhbmNlc3RvckNvbXBvbmVudCQ9YSk7YnJlYWt9fX1pZihuLiRtZW1iZXJzJCl7T2JqZWN0LmVudHJpZXMobi4kbWVtYmVycyQpLm1hcCgoZnVuY3Rpb24odCl7dmFyIG49dFswXSxyPXRbMV1bMF07aWYociYzMSYmZS5oYXNPd25Qcm9wZXJ0eShuKSl7dmFyIGE9ZVtuXTtkZWxldGUgZVtuXTtlW25dPWF9fSkpfXtpbml0aWFsaXplQ29tcG9uZW50KGUsdCxuKX19ZWxzZXthZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZSx0LG4uJGxpc3RlbmVycyQpfXIoKX19O3ZhciBkaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihlKXtpZigocGx0LiRmbGFncyQmMSk9PT0wKXt2YXIgdD1nZXRIb3N0UmVmKGUpO3ZhciBuPXQuJGxhenlJbnN0YW5jZSQ7e2lmKHQuJHJtTGlzdGVuZXJzJCl7dC4kcm1MaXN0ZW5lcnMkLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUoKX0pKTt0LiRybUxpc3RlbmVycyQ9dW5kZWZpbmVkfX17c2FmZUNhbGwobixcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpfX19O3ZhciBib290c3RyYXBMYXp5PWZ1bmN0aW9uKGUsdCl7aWYodD09PXZvaWQgMCl7dD17fX12YXIgbjt2YXIgcj1jcmVhdGVUaW1lKCk7dmFyIGE9W107dmFyIG89dC5leGNsdWRlfHxbXTt2YXIgcz13aW4uY3VzdG9tRWxlbWVudHM7dmFyIGk9ZG9jLmhlYWQ7dmFyIGw9aS5xdWVyeVNlbGVjdG9yKFwibWV0YVtjaGFyc2V0XVwiKTt2YXIgdT1kb2MuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3ZhciBjPVtdO3ZhciBmO3ZhciAkPXRydWU7T2JqZWN0LmFzc2lnbihwbHQsdCk7cGx0LiRyZXNvdXJjZXNVcmwkPW5ldyBVUkwodC5yZXNvdXJjZXNVcmx8fFwiLi9cIixkb2MuYmFzZVVSSSkuaHJlZjtlLm1hcCgoZnVuY3Rpb24oZSl7ZVsxXS5tYXAoKGZ1bmN0aW9uKHQpe3ZhciBuPXskZmxhZ3MkOnRbMF0sJHRhZ05hbWUkOnRbMV0sJG1lbWJlcnMkOnRbMl0sJGxpc3RlbmVycyQ6dFszXX07e24uJG1lbWJlcnMkPXRbMl19e24uJGxpc3RlbmVycyQ9dFszXX12YXIgcj1uLiR0YWdOYW1lJDt2YXIgaT1mdW5jdGlvbihlKXtfX2V4dGVuZHModCxlKTtmdW5jdGlvbiB0KHQpe3ZhciByPWUuY2FsbCh0aGlzLHQpfHx0aGlzO3Q9cjtyZWdpc3Rlckhvc3QodCxuKTtpZihuLiRmbGFncyQmMSl7e3t0LmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pfX19cmV0dXJuIHJ9dC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKGYpe2NsZWFyVGltZW91dChmKTtmPW51bGx9aWYoJCl7Yy5wdXNoKHRoaXMpfWVsc2V7cGx0LmptcCgoZnVuY3Rpb24oKXtyZXR1cm4gY29ubmVjdGVkQ2FsbGJhY2soZSl9KSl9fTt0LnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cGx0LmptcCgoZnVuY3Rpb24oKXtyZXR1cm4gZGlzY29ubmVjdGVkQ2FsbGJhY2soZSl9KSl9O3QucHJvdG90eXBlLmNvbXBvbmVudE9uUmVhZHk9ZnVuY3Rpb24oKXtyZXR1cm4gZ2V0SG9zdFJlZih0aGlzKS4kb25SZWFkeVByb21pc2UkfTtyZXR1cm4gdH0oSFRNTEVsZW1lbnQpO24uJGxhenlCdW5kbGVJZCQ9ZVswXTtpZighby5pbmNsdWRlcyhyKSYmIXMuZ2V0KHIpKXthLnB1c2gocik7cy5kZWZpbmUocixwcm94eUNvbXBvbmVudChpLG4sMSkpfX0pKX0pKTt7dS5pbm5lckhUTUw9YStIWURSQVRFRF9DU1M7dS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlc1wiLFwiXCIpO3ZhciBkPShuPXBsdC4kbm9uY2UkKSE9PW51bGwmJm4hPT12b2lkIDA/bjpxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtpZihkIT1udWxsKXt1LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsZCl9aS5pbnNlcnRCZWZvcmUodSxsP2wubmV4dFNpYmxpbmc6aS5maXJzdENoaWxkKX0kPWZhbHNlO2lmKGMubGVuZ3RoKXtjLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY29ubmVjdGVkQ2FsbGJhY2soKX0pKX1lbHNle3twbHQuam1wKChmdW5jdGlvbigpe3JldHVybiBmPXNldFRpbWVvdXQoYXBwRGlkTG9hZCwzMCl9KSl9fXIoKX07dmFyIGFkZEhvc3RFdmVudExpc3RlbmVycz1mdW5jdGlvbihlLHQsbixyKXtpZihuKXtuLm1hcCgoZnVuY3Rpb24obil7dmFyIHI9blswXSxhPW5bMV0sbz1uWzJdO3ZhciBzPWdldEhvc3RMaXN0ZW5lclRhcmdldChlLHIpO3ZhciBpPWhvc3RMaXN0ZW5lclByb3h5KHQsbyk7dmFyIGw9aG9zdExpc3RlbmVyT3B0cyhyKTtwbHQuYWVsKHMsYSxpLGwpOyh0LiRybUxpc3RlbmVycyQ9dC4kcm1MaXN0ZW5lcnMkfHxbXSkucHVzaCgoZnVuY3Rpb24oKXtyZXR1cm4gcGx0LnJlbChzLGEsaSxsKX0pKX0pKX19O3ZhciBob3N0TGlzdGVuZXJQcm94eT1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihuKXt0cnl7e2lmKGUuJGZsYWdzJCYyNTYpe2UuJGxhenlJbnN0YW5jZSRbdF0obil9ZWxzZXsoZS4kcXVldWVkTGlzdGVuZXJzJD1lLiRxdWV1ZWRMaXN0ZW5lcnMkfHxbXSkucHVzaChbdCxuXSl9fX1jYXRjaChlKXtjb25zb2xlRXJyb3IoZSl9fX07dmFyIGdldEhvc3RMaXN0ZW5lclRhcmdldD1mdW5jdGlvbihlLHQpe2lmKHQmMTYpcmV0dXJuIGRvYy5ib2R5O3JldHVybiBlfTt2YXIgaG9zdExpc3RlbmVyT3B0cz1mdW5jdGlvbihlKXtyZXR1cm4oZSYyKSE9PTB9O3ZhciBzZXROb25jZT1mdW5jdGlvbihlKXtyZXR1cm4gcGx0LiRub25jZSQ9ZX07dmFyIGhvc3RSZWZzPW5ldyBXZWFrTWFwO3ZhciBnZXRIb3N0UmVmPWZ1bmN0aW9uKGUpe3JldHVybiBob3N0UmVmcy5nZXQoZSl9O3ZhciByZWdpc3Rlckluc3RhbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGhvc3RSZWZzLnNldCh0LiRsYXp5SW5zdGFuY2UkPWUsdCl9O3ZhciByZWdpc3Rlckhvc3Q9ZnVuY3Rpb24oZSx0KXt2YXIgbj17JGZsYWdzJDowLCRob3N0RWxlbWVudCQ6ZSwkY21wTWV0YSQ6dCwkaW5zdGFuY2VWYWx1ZXMkOm5ldyBNYXB9O3tuLiRvbkluc3RhbmNlUHJvbWlzZSQ9bmV3IFByb21pc2UoKGZ1bmN0aW9uKGUpe3JldHVybiBuLiRvbkluc3RhbmNlUmVzb2x2ZSQ9ZX0pKX17bi4kb25SZWFkeVByb21pc2UkPW5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gbi4kb25SZWFkeVJlc29sdmUkPWV9KSk7ZVtcInMtcFwiXT1bXTtlW1wicy1yY1wiXT1bXX1hZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZSxuLHQuJGxpc3RlbmVycyQpO3JldHVybiBob3N0UmVmcy5zZXQoZSxuKX07dmFyIGlzTWVtYmVySW5FbGVtZW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQgaW4gZX07dmFyIGNvbnNvbGVFcnJvcj1mdW5jdGlvbihlLHQpe3JldHVybigwLGNvbnNvbGUuZXJyb3IpKGUsdCl9O3ZhciBjbXBNb2R1bGVzPW5ldyBNYXA7dmFyIGxvYWRNb2R1bGU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZyxcIl9cIik7dmFyIGE9ZS4kbGF6eUJ1bmRsZUlkJDt2YXIgbz1jbXBNb2R1bGVzLmdldChhKTtpZihvKXtyZXR1cm4gb1tyXX1pZighbnx8IUJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KXt2YXIgcz1mdW5jdGlvbihlKXtjbXBNb2R1bGVzLnNldChhLGUpO3JldHVybiBlW3JdfTtzd2l0Y2goYSl7Y2FzZVwicHdhLWFjdGlvbi1zaGVldFwiOnJldHVybiBpbXBvcnQoXCIuL3B3YS1hY3Rpb24tc2hlZXQuZW50cnkuanNcIikudGhlbihzLGNvbnNvbGVFcnJvcik7Y2FzZVwicHdhLWNhbWVyYS1tb2RhbFwiOnJldHVybiBpbXBvcnQoXCIuL3B3YS1jYW1lcmEtbW9kYWwuZW50cnkuanNcIikudGhlbihzLGNvbnNvbGVFcnJvcik7Y2FzZVwicHdhLXRvYXN0XCI6cmV0dXJuIGltcG9ydChcIi4vcHdhLXRvYXN0LmVudHJ5LmpzXCIpLnRoZW4ocyxjb25zb2xlRXJyb3IpO2Nhc2VcInB3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2VcIjpyZXR1cm4gaW1wb3J0KFwiLi9wd2EtY2FtZXJhLW1vZGFsLWluc3RhbmNlLmVudHJ5LmpzXCIpLnRoZW4ocyxjb25zb2xlRXJyb3IpO2Nhc2VcInB3YS1jYW1lcmFcIjpyZXR1cm4gaW1wb3J0KFwiLi9wd2EtY2FtZXJhLmVudHJ5LmpzXCIpLnRoZW4ocyxjb25zb2xlRXJyb3IpfX1yZXR1cm4gaW1wb3J0KFwiLi9cIi5jb25jYXQoYSxcIi5lbnRyeS5qc1wiKS5jb25jYXQoXCJcIikpLnRoZW4oKGZ1bmN0aW9uKGUpe3tjbXBNb2R1bGVzLnNldChhLGUpfXJldHVybiBlW3JdfSksY29uc29sZUVycm9yKX07dmFyIHN0eWxlcz1uZXcgTWFwO3ZhciB3aW49dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ont9O3ZhciBkb2M9d2luLmRvY3VtZW50fHx7aGVhZDp7fX07dmFyIHBsdD17JGZsYWdzJDowLCRyZXNvdXJjZXNVcmwkOlwiXCIsam1wOmZ1bmN0aW9uKGUpe3JldHVybiBlKCl9LHJhZjpmdW5jdGlvbihlKXtyZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpfSxhZWw6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcih0LG4scil9LHJlbDpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixyKX0sY2U6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGUsdCl9fTt2YXIgcHJvbWlzZVJlc29sdmU9ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShlKX07dmFyIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzPWZ1bmN0aW9uKCl7dHJ5e25ldyBDU1NTdHlsZVNoZWV0O3JldHVybiB0eXBlb2YobmV3IENTU1N0eWxlU2hlZXQpLnJlcGxhY2VTeW5jPT09XCJmdW5jdGlvblwifWNhdGNoKGUpe31yZXR1cm4gZmFsc2V9KCk7dmFyIHF1ZXVlRG9tUmVhZHM9W107dmFyIHF1ZXVlRG9tV3JpdGVzPVtdO3ZhciBxdWV1ZVRhc2s9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24obil7ZS5wdXNoKG4pO2lmKCFxdWV1ZVBlbmRpbmcpe3F1ZXVlUGVuZGluZz10cnVlO2lmKHQmJnBsdC4kZmxhZ3MkJjQpe25leHRUaWNrKGZsdXNoKX1lbHNle3BsdC5yYWYoZmx1c2gpfX19fTt2YXIgY29uc3VtZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dHJ5e2VbdF0ocGVyZm9ybWFuY2Uubm93KCkpfWNhdGNoKGUpe2NvbnNvbGVFcnJvcihlKX19ZS5sZW5ndGg9MH07dmFyIGZsdXNoPWZ1bmN0aW9uKCl7Y29uc3VtZShxdWV1ZURvbVJlYWRzKTt7Y29uc3VtZShxdWV1ZURvbVdyaXRlcyk7aWYocXVldWVQZW5kaW5nPXF1ZXVlRG9tUmVhZHMubGVuZ3RoPjApe3BsdC5yYWYoZmx1c2gpfX19O3ZhciBuZXh0VGljaz1mdW5jdGlvbihlKXtyZXR1cm4gcHJvbWlzZVJlc29sdmUoKS50aGVuKGUpfTt2YXIgd3JpdGVUYXNrPXF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcyx0cnVlKTtleHBvcnR7SG9zdCBhcyBILGJvb3RzdHJhcExhenkgYXMgYixjcmVhdGVFdmVudCBhcyBjLGZvcmNlVXBkYXRlIGFzIGYsZ2V0RWxlbWVudCBhcyBnLGgscHJvbWlzZVJlc29sdmUgYXMgcCxyZWdpc3Rlckluc3RhbmNlIGFzIHIsc2V0Tm9uY2UgYXMgc307IiwiaW1wb3J0e3AgYXMgcHJvbWlzZVJlc29sdmUsYiBhcyBib290c3RyYXBMYXp5fWZyb21cIi4vaW5kZXgtMWM1YzQ3YjQuanNcIjtleHBvcnR7cyBhcyBzZXROb25jZX1mcm9tXCIuL2luZGV4LTFjNWM0N2I0LmpzXCI7dmFyIHBhdGNoRXNtPWZ1bmN0aW9uKCl7cmV0dXJuIHByb21pc2VSZXNvbHZlKCl9O3ZhciBkZWZpbmVDdXN0b21FbGVtZW50cz1mdW5jdGlvbihlLG8pe2lmKHR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwiKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTtyZXR1cm4gcGF0Y2hFc20oKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBib290c3RyYXBMYXp5KFtbXCJwd2EtY2FtZXJhLW1vZGFsXCIsW1sxLFwicHdhLWNhbWVyYS1tb2RhbFwiLHtmYWNpbmdNb2RlOlsxLFwiZmFjaW5nLW1vZGVcIl0scHJlc2VudDpbNjRdLGRpc21pc3M6WzY0XX1dXV0sW1wicHdhLWFjdGlvbi1zaGVldFwiLFtbMSxcInB3YS1hY3Rpb24tc2hlZXRcIix7aGVhZGVyOlsxXSxjYW5jZWxhYmxlOls0XSxvcHRpb25zOlsxNl0sb3BlbjpbMzJdfV1dXSxbXCJwd2EtdG9hc3RcIixbWzEsXCJwd2EtdG9hc3RcIix7bWVzc2FnZTpbMV0sZHVyYXRpb246WzJdLGNsb3Npbmc6WzMyXX1dXV0sW1wicHdhLWNhbWVyYVwiLFtbMSxcInB3YS1jYW1lcmFcIix7ZmFjaW5nTW9kZTpbMSxcImZhY2luZy1tb2RlXCJdLGhhbmRsZVBob3RvOlsxNl0saGFuZGxlTm9EZXZpY2VFcnJvcjpbMTZdLG5vRGV2aWNlc1RleHQ6WzEsXCJuby1kZXZpY2VzLXRleHRcIl0sbm9EZXZpY2VzQnV0dG9uVGV4dDpbMSxcIm5vLWRldmljZXMtYnV0dG9uLXRleHRcIl0scGhvdG86WzMyXSxwaG90b1NyYzpbMzJdLHNob3dTaHV0dGVyT3ZlcmxheTpbMzJdLGZsYXNoSW5kZXg6WzMyXSxoYXNDYW1lcmE6WzMyXSxyb3RhdGlvbjpbMzJdLGRldmljZUVycm9yOlszMl19XV1dLFtcInB3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2VcIixbWzEsXCJwd2EtY2FtZXJhLW1vZGFsLWluc3RhbmNlXCIse2ZhY2luZ01vZGU6WzEsXCJmYWNpbmctbW9kZVwiXSxub0RldmljZXNUZXh0OlsxLFwibm8tZGV2aWNlcy10ZXh0XCJdLG5vRGV2aWNlc0J1dHRvblRleHQ6WzEsXCJuby1kZXZpY2VzLWJ1dHRvbi10ZXh0XCJdfSxbWzE2LFwia2V5dXBcIixcImhhbmRsZUJhY2tkcm9wS2V5VXBcIl1dXV1dXSxvKX0pKX07ZXhwb3J0e2RlZmluZUN1c3RvbUVsZW1lbnRzfTsiLCJcbihmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93JiZ2b2lkIDAhPT13aW5kb3cuUmVmbGVjdCYmdm9pZCAwIT09d2luZG93LmN1c3RvbUVsZW1lbnRzKXt2YXIgYT1IVE1MRWxlbWVudDt3aW5kb3cuSFRNTEVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoYSxbXSx0aGlzLmNvbnN0cnVjdG9yKX07SFRNTEVsZW1lbnQucHJvdG90eXBlPWEucHJvdG90eXBlO0hUTUxFbGVtZW50LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1IVE1MRWxlbWVudDtPYmplY3Quc2V0UHJvdG90eXBlT2YoSFRNTEVsZW1lbnQsYSl9fSkoKTtcbmV4cG9ydCAqIGZyb20gJy4uL2Rpc3QvZXNtL3BvbHlmaWxscy9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuLi9kaXN0L2VzbS1lczUvbG9hZGVyLmpzJztcbiIsImltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnQGlvbmljL3B3YS1lbGVtZW50cy9sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gYXdhaXQgZGVmaW5lQ3VzdG9tRWxlbWVudHMod2luZG93KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL2NhcGFjaXRvci44ZTM5N2M4Yi5qcyJ9
