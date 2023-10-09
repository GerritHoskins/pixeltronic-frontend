import { c as computed, h, g as getCurrentInstance, Y as unref, F as isKeyCode, t as addEvt, z as cleanEvt, x as stop, y as position, r as ref, a as onBeforeUnmount, A as withDirectives, s as stopAndPrevent, Z as Transition, l as listenOpts, v as prevent } from "./index.2facb99b.js";
import { c as createComponent, h as hSlot, e as hMergeSlot, b as createDirective } from "./render.ce87f311.js";
const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};
const useSizeProps = {
  size: String
};
function useSize(props, sizes = useSizeDefaults) {
  return computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
const defaultViewBox = "0 0 24 24";
const sameFn = (i) => i;
const ionFn = (i) => `ionicons ${i}`;
const libMap = {
  "mdi-": (i) => `mdi ${i}`,
  "icon-": sameFn,
  "bt-": (i) => `bt ${i}`,
  "eva-": (i) => `eva ${i}`,
  "ion-md": ionFn,
  "ion-ios": ionFn,
  "ion-logo": ionFn,
  "iconfont ": sameFn,
  "ti-": (i) => `themify-icon ${i}`,
  "bi-": (i) => `bootstrap-icons ${i}`
};
const matMap = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
};
const symMap = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
};
const libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
const matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
const symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faRE = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon = createComponent({
  name: "QIcon",
  props: {
    ...useSizeProps,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);
    const classes = computed(
      () => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : "")
    );
    const type = computed(() => {
      let cls;
      let icon = props.name;
      if (icon === "none" || !icon) {
        return { none: true };
      }
      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === "none" || !icon) {
              return { none: true };
            }
          } else {
            return {
              cls: res.cls,
              content: res.content !== void 0 ? res.content : " "
            };
          }
        }
      }
      if (mRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svg: true,
          viewBox,
          nodes: def.split("&&").map((path) => {
            const [d, style, transform] = path.split("@@");
            return h("path", { style, d, transform });
          })
        };
      }
      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        };
      }
      if (svgUseRE.test(icon) === true) {
        const [def, viewBox = defaultViewBox] = icon.split("|");
        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        };
      }
      let content = " ";
      const matches = icon.match(libRE);
      if (matches !== null) {
        cls = libMap[matches[1]](icon);
      } else if (faRE.test(icon) === true) {
        cls = icon;
      } else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
      } else if (symRE.test(icon) === true) {
        cls = "notranslate material-symbols";
        const matches2 = icon.match(symRE);
        if (matches2 !== null) {
          icon = icon.substring(6);
          cls += symMap[matches2[1]];
        }
        content = icon;
      } else {
        cls = "notranslate material-icons";
        const matches2 = icon.match(matRE);
        if (matches2 !== null) {
          icon = icon.substring(2);
          cls += matMap[matches2[1]];
        }
        content = icon;
      }
      return {
        cls,
        content
      };
    });
    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default));
      }
      if (type.value.img === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("img", { src: type.value.src })
        ]));
      }
      if (type.value.svg === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox || "0 0 24 24"
          }, type.value.nodes)
        ]));
      }
      if (type.value.svguse === true) {
        return h("span", data, hMergeSlot(slots.default, [
          h("svg", {
            viewBox: type.value.viewBox
          }, [
            h("use", { "xlink:href": type.value.src })
          ])
        ]));
      }
      if (type.value.cls !== void 0) {
        data.class += " " + type.value.cls;
      }
      return h(props.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]));
    };
  }
});
const useSpinnerProps = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function useSpinner(props) {
  return {
    cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
    classes: computed(
      () => "q-spinner" + (props.color ? ` text-${props.color}` : "")
    )
  };
}
var QSpinner = createComponent({
  name: "QSpinner",
  props: {
    ...useSpinnerProps,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value + " q-spinner-mat",
      width: cSize.value,
      height: cSize.value,
      viewBox: "25 25 50 50"
    }, [
      h("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": props.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function css(element, css2) {
  const style = element.style;
  for (const prop in css2) {
    style[prop] = css2[prop];
  }
}
function getElement(el) {
  if (el === void 0 || el === null) {
    return void 0;
  }
  if (typeof el === "string") {
    try {
      return document.querySelector(el) || void 0;
    } catch (err) {
      return void 0;
    }
  }
  const target = unref(el);
  if (target) {
    return target.$el || target;
  }
}
function throttle(fn, limit = 250) {
  let wait = false, result;
  return function() {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      result = fn.apply(this, arguments);
    }
    return result;
  };
}
function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt);
  const color = ctx.modifiers.color;
  let center = ctx.modifiers.center;
  center = center === true || forceCenter === true;
  const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
  innerNode.className = "q-ripple__inner";
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  });
  node.className = `q-ripple${color ? " text-" + color : ""}`;
  node.setAttribute("dir", "ltr");
  node.appendChild(innerNode);
  el.appendChild(node);
  const abort = () => {
    node.remove();
    clearTimeout(timer);
  };
  ctx.abort.push(abort);
  let timer = setTimeout(() => {
    innerNode.classList.add("q-ripple__inner--enter");
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
    innerNode.style.opacity = 0.2;
    timer = setTimeout(() => {
      innerNode.classList.remove("q-ripple__inner--enter");
      innerNode.classList.add("q-ripple__inner--leave");
      innerNode.style.opacity = 0;
      timer = setTimeout(() => {
        node.remove();
        ctx.abort.splice(ctx.abort.indexOf(abort), 1);
      }, 275);
    }, 250);
  }, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
  const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  };
}
var Ripple = createDirective(
  {
    name: "ripple",
    beforeMount(el, binding) {
      const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
      if (cfg.ripple === false) {
        return;
      }
      const ctx = {
        cfg,
        enabled: binding.value !== false,
        modifiers: {},
        abort: [],
        start(evt) {
          if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) {
            showRipple(evt, el, ctx, evt.qKeyEvent === true);
          }
        },
        keystart: throttle((evt) => {
          if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) {
            showRipple(evt, el, ctx, true);
          }
        }, 300)
      };
      updateModifiers(ctx, binding);
      el.__qripple = ctx;
      addEvt(ctx, "main", [
        [el, "pointerdown", "start", "passive"],
        [el, "click", "start", "passive"],
        [el, "keydown", "keystart", "passive"],
        [el, "keyup", "keystart", "passive"]
      ]);
    },
    updated(el, binding) {
      if (binding.oldValue !== binding.value) {
        const ctx = el.__qripple;
        if (ctx !== void 0) {
          ctx.enabled = binding.value !== false;
          if (ctx.enabled === true && Object(binding.value) === binding.value) {
            updateModifiers(ctx, binding);
          }
        }
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qripple;
      if (ctx !== void 0) {
        ctx.abort.forEach((fn) => {
          fn();
        });
        cleanEvt(ctx, "main");
        delete el._qripple;
      }
    }
  }
);
const alignMap = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
};
const alignValues = Object.keys(alignMap);
const useAlignProps = {
  align: {
    type: String,
    validator: (v) => alignValues.includes(v)
  }
};
function useAlign(props) {
  return computed(() => {
    const align = props.align === void 0 ? props.vertical === true ? "stretch" : "left" : props.align;
    return `${props.vertical === true ? "items" : "justify"}-${alignMap[align]}`;
  });
}
function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
  return vm.isUnmounted === true || vm.isDeactivated === true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key], outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) {
        return false;
      }
    } else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) {
      return false;
    }
  }
  return true;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[key], b[key]) === false) {
      return false;
    }
  }
  return true;
}
const useRouterLinkProps = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  href: String,
  target: String,
  disable: Boolean
};
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm = getCurrentInstance();
  const { props, proxy, emit } = vm;
  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
  const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(
    () => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  ) : computed(
    () => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== ""
  );
  const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
  const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
  const linkAttrs = computed(() => hasHrefLink.value === true ? {
    href: props.href,
    target: props.target
  } : hasRouterLink.value === true ? {
    href: resolvedLink.value.href,
    target: props.target
  } : {});
  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1;
    }
    const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
    if (routeMatched === void 0) {
      return -1;
    }
    const currentMatched = proxy.$route.matched;
    if (currentMatched.length === 0) {
      return -1;
    }
    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );
    if (index > -1) {
      return index;
    }
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(
      isSameRouteRecord.bind(null, matched[length - 2])
    ) : index;
  });
  const linkIsActive = computed(
    () => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkIsExactActive = computed(
    () => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );
  const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
  function getLink(to) {
    try {
      return proxy.$router.resolve(to);
    } catch (_) {
    }
    return null;
  }
  function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
    if (props.disable === true) {
      e.preventDefault();
      return Promise.resolve(false);
    }
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") {
      return Promise.resolve(false);
    }
    e.preventDefault();
    const promise = proxy.$router[replace === true ? "replace" : "push"](to);
    return returnRouterError === true ? promise : promise.then(() => {
    }).catch(() => {
    });
  }
  function navigateOnClick(e) {
    if (hasRouterLink.value === true) {
      const go = (opts) => navigateToRouterLink(e, opts);
      emit("click", e, go);
      e.defaultPrevented !== true && go();
    } else {
      emit("click", e);
    }
  }
  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,
    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,
    getLink,
    navigateToRouterLink,
    navigateOnClick
  };
}
const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const formTypes = ["button", "submit", "reset"];
const mediaTypeRE = /[^\s]\/[^\s]/;
const btnDesignOptions = ["flat", "outline", "push", "unelevated"];
const getBtnDesign = (props, defaultValue) => {
  if (props.flat === true)
    return "flat";
  if (props.outline === true)
    return "outline";
  if (props.push === true)
    return "push";
  if (props.unelevated === true)
    return "unelevated";
  return defaultValue;
};
const useBtnProps = {
  ...useSizeProps,
  ...useRouterLinkProps,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...btnDesignOptions.reduce(
    (acc, val) => (acc[val] = Boolean) && acc,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  align: {
    ...useAlignProps.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function useBtn(props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: "button"
  });
  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false ? sizeStyle.value : {};
    return props.padding !== void 0 ? Object.assign({}, obj, {
      padding: props.padding.split(/\s+/).map((v) => v in btnPadding ? btnPadding[v] + "px" : v).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : obj;
  });
  const isRounded = computed(
    () => props.rounded === true || props.fab === true || props.fabMini === true
  );
  const isActionable = computed(
    () => props.disable !== true && props.loading !== true
  );
  const tabIndex = computed(() => isActionable.value === true ? props.tabindex || 0 : -1);
  const design = computed(() => getBtnDesign(props, "standard"));
  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };
    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    } else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }
    if (linkTag.value === "a") {
      if (props.disable === true) {
        acc["aria-disabled"] = "true";
      } else if (acc.href === void 0) {
        acc.role = "button";
      }
      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    } else if (props.disable === true) {
      acc.disabled = "";
      acc["aria-disabled"] = "true";
    }
    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": props.percentage
      });
    }
    return acc;
  });
  const classes = computed(() => {
    let colors;
    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${props.textColor || props.color}`;
      } else {
        colors = `bg-${props.color} text-${props.textColor || "white"}`;
      }
    } else if (props.textColor) {
      colors = `text-${props.textColor}`;
    }
    const shape = props.round === true ? "round" : `rectangle${isRounded.value === true ? " q-btn--rounded" : props.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${design.value} q-btn--${shape}` + (colors !== void 0 ? " " + colors : "") + (isActionable.value === true ? " q-btn--actionable q-focusable q-hoverable" : props.disable === true ? " disabled" : "") + (props.fab === true ? " q-btn--fab" : props.fabMini === true ? " q-btn--fab-mini" : "") + (props.noCaps === true ? " q-btn--no-uppercase" : "") + (props.dense === true ? " q-btn--dense" : "") + (props.stretch === true ? " no-border-radius self-stretch" : "") + (props.glossy === true ? " glossy" : "") + (props.square ? " q-btn--square" : "");
  });
  const innerClasses = computed(
    () => alignClass.value + (props.stack === true ? " column" : " row") + (props.noWrap === true ? " no-wrap text-no-wrap" : "") + (props.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  };
}
const { passiveCapture } = listenOpts;
let touchTarget = null, keyboardTarget = null, mouseTarget = null;
var QBtn = createComponent({
  name: "QBtn",
  props: {
    ...useBtnProps,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const {
      classes,
      style,
      innerClasses,
      attributes,
      hasLink,
      linkTag,
      navigateOnClick,
      isActionable
    } = useBtn(props);
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;
    const hasLabel = computed(
      () => props.label !== void 0 && props.label !== null && props.label !== ""
    );
    const ripple = computed(() => props.disable === true || props.ripple === false ? false : {
      keyCodes: hasLink.value === true ? [13, 32] : [13],
      ...props.ripple === true ? {} : props.ripple
    });
    const rippleProps = computed(() => ({ center: props.round }));
    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0 ? { transition: "transform 0.6s", transform: `translateX(${val - 100}%)` } : {};
    });
    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        };
      }
      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };
        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0 ? "" : "Passive";
          acc[`onTouchstart${suffix}`] = onTouchstart;
        }
        return acc;
      }
      return {
        onClick: stopAndPrevent
      };
    });
    const nodeProps = computed(() => ({
      ref: rootRef,
      class: "q-btn q-btn-item non-selectable no-outline " + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));
    function onClick(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return;
        }
        const el = document.activeElement;
        if (props.type === "submit" && el !== document.body && rootRef.value.contains(el) === false && el.contains(rootRef.value) === false) {
          rootRef.value.focus();
          const onClickCleanup = () => {
            document.removeEventListener("keydown", stopAndPrevent, true);
            document.removeEventListener("keyup", onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener("blur", onClickCleanup, passiveCapture);
          };
          document.addEventListener("keydown", stopAndPrevent, true);
          document.addEventListener("keyup", onClickCleanup, passiveCapture);
          rootRef.value.addEventListener("blur", onClickCleanup, passiveCapture);
        }
      }
      navigateOnClick(e);
    }
    function onKeydown(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("keydown", e);
      if (isKeyCode(e, [13, 32]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();
        if (e.defaultPrevented !== true) {
          rootRef.value.focus();
          keyboardTarget = rootRef.value;
          rootRef.value.classList.add("q-btn--active");
          document.addEventListener("keyup", onPressEnd, true);
          rootRef.value.addEventListener("blur", onPressEnd, passiveCapture);
        }
        stopAndPrevent(e);
      }
    }
    function onTouchstart(e) {
      if (rootRef.value === null) {
        return;
      }
      emit("touchstart", e);
      if (e.defaultPrevented === true) {
        return;
      }
      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;
        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener("touchcancel", onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener("touchend", onPressEnd, passiveCapture);
      }
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }
    function onMousedown(e) {
      if (rootRef.value === null) {
        return;
      }
      e.qSkipRipple = avoidMouseRipple === true;
      emit("mousedown", e);
      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add("q-btn--active");
        document.addEventListener("mouseup", onPressEnd, passiveCapture);
      }
    }
    function onPressEnd(e) {
      if (rootRef.value === null) {
        return;
      }
      if (e !== void 0 && e.type === "blur" && document.activeElement === rootRef.value) {
        return;
      }
      if (e !== void 0 && e.type === "keyup") {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [13, 32]) === true) {
          const evt = new MouseEvent("click", e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);
          stopAndPrevent(e);
          e.qKeyEvent = true;
        }
        emit("keyup", e);
      }
      cleanup();
    }
    function cleanup(destroying) {
      const blurTarget = blurTargetRef.value;
      if (destroying !== true && (touchTarget === rootRef.value || mouseTarget === rootRef.value) && blurTarget !== null && blurTarget !== document.activeElement) {
        blurTarget.setAttribute("tabindex", -1);
        blurTarget.focus();
      }
      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener("touchcancel", onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener("touchend", onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }
      if (mouseTarget === rootRef.value) {
        document.removeEventListener("mouseup", onPressEnd, passiveCapture);
        mouseTarget = null;
      }
      if (keyboardTarget === rootRef.value) {
        document.removeEventListener("keyup", onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener("blur", onPressEnd, passiveCapture);
        keyboardTarget = null;
      }
      rootRef.value !== null && rootRef.value.classList.remove("q-btn--active");
    }
    function onLoadingEvt(evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }
    onBeforeUnmount(() => {
      cleanup(true);
    });
    Object.assign(proxy, { click: onClick });
    return () => {
      let inner = [];
      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack === false && hasLabel.value === true,
          role: "img",
          "aria-hidden": "true"
        })
      );
      hasLabel.value === true && inner.push(
        h("span", { class: "block" }, [props.label])
      );
      inner = hMergeSlot(slots.default, inner);
      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack === false && hasLabel.value === true,
            role: "img",
            "aria-hidden": "true"
          })
        );
      }
      const child = [
        h("span", {
          class: "q-focus-helper",
          ref: blurTargetRef
        })
      ];
      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h("span", {
            class: "q-btn__progress absolute-full overflow-hidden" + (props.darkPercentage === true ? " q-btn__progress--dark" : "")
          }, [
            h("span", {
              class: "q-btn__progress-indicator fit block",
              style: percentageStyle.value
            })
          ])
        );
      }
      child.push(
        h("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + innerClasses.value
        }, inner)
      );
      props.loading !== null && child.push(
        h(Transition, {
          name: "q-transition--fade"
        }, () => props.loading === true ? [
          h("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, slots.loading !== void 0 ? slots.loading() : [h(QSpinner)])
        ] : null)
      );
      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [[
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ]]
      );
    };
  }
});
export { QIcon as Q, vmIsDestroyed as a, useRouterLink as b, css as c, QBtn as d, getElement as g, useRouterLinkProps as u, vmHasRouter as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0bi5mMjU3ZmJjYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaWNvbi9RSWNvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci91c2Utc3Bpbm5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2RvbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy9SaXBwbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1hbGlnbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvdm0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuL3VzZS1idG4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi9RQnRuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlU2l6ZURlZmF1bHRzID0ge1xuICB4czogMTgsXG4gIHNtOiAyNCxcbiAgbWQ6IDMyLFxuICBsZzogMzgsXG4gIHhsOiA0NlxufVxuXG5leHBvcnQgY29uc3QgdXNlU2l6ZVByb3BzID0ge1xuICBzaXplOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzaXplcyA9IHVzZVNpemVEZWZhdWx0cykge1xuICAvLyByZXR1cm4gc2l6ZVN0eWxlXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc2l6ZSAhPT0gdm9pZCAwXG4gICAgICA/IHsgZm9udFNpemU6IHByb3BzLnNpemUgaW4gc2l6ZXMgPyBgJHsgc2l6ZXNbIHByb3BzLnNpemUgXSB9cHhgIDogcHJvcHMuc2l6ZSB9XG4gICAgICA6IG51bGxcbiAgKSlcbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgZGVmYXVsdFZpZXdCb3ggPSAnMCAwIDI0IDI0J1xuXG5jb25zdCBzYW1lRm4gPSBpID0+IGlcbmNvbnN0IGlvbkZuID0gaSA9PiBgaW9uaWNvbnMgJHsgaSB9YFxuXG5jb25zdCBsaWJNYXAgPSB7XG4gICdtZGktJzogaSA9PiBgbWRpICR7IGkgfWAsXG4gICdpY29uLSc6IHNhbWVGbiwgLy8gZm9udGF3ZXNvbWUgZXF1aXZcbiAgJ2J0LSc6IGkgPT4gYGJ0ICR7IGkgfWAsXG4gICdldmEtJzogaSA9PiBgZXZhICR7IGkgfWAsXG4gICdpb24tbWQnOiBpb25GbixcbiAgJ2lvbi1pb3MnOiBpb25GbixcbiAgJ2lvbi1sb2dvJzogaW9uRm4sXG4gICdpY29uZm9udCAnOiBzYW1lRm4sXG4gICd0aS0nOiBpID0+IGB0aGVtaWZ5LWljb24gJHsgaSB9YCxcbiAgJ2JpLSc6IGkgPT4gYGJvb3RzdHJhcC1pY29ucyAkeyBpIH1gXG59XG5cbmNvbnN0IG1hdE1hcCA9IHtcbiAgb186ICctb3V0bGluZWQnLFxuICByXzogJy1yb3VuZCcsXG4gIHNfOiAnLXNoYXJwJ1xufVxuXG5jb25zdCBzeW1NYXAgPSB7XG4gIHN5bV9vXzogJy1vdXRsaW5lZCcsXG4gIHN5bV9yXzogJy1yb3VuZGVkJyxcbiAgc3ltX3NfOiAnLXNoYXJwJ1xufVxuXG5jb25zdCBsaWJSRSA9IG5ldyBSZWdFeHAoJ14oJyArIE9iamVjdC5rZXlzKGxpYk1hcCkuam9pbignfCcpICsgJyknKVxuY29uc3QgbWF0UkUgPSBuZXcgUmVnRXhwKCdeKCcgKyBPYmplY3Qua2V5cyhtYXRNYXApLmpvaW4oJ3wnKSArICcpJylcbmNvbnN0IHN5bVJFID0gbmV3IFJlZ0V4cCgnXignICsgT2JqZWN0LmtleXMoc3ltTWFwKS5qb2luKCd8JykgKyAnKScpXG5jb25zdCBtUkUgPSAvXltNbV1cXHM/Wy0rXT9cXC4/XFxkL1xuY29uc3QgaW1nUkUgPSAvXmltZzovXG5jb25zdCBzdmdVc2VSRSA9IC9ec3ZndXNlOi9cbmNvbnN0IGlvblJFID0gL15pb24tL1xuY29uc3QgZmFSRSA9IC9eKGZhLShzaGFycHxzb2xpZHxyZWd1bGFyfGxpZ2h0fGJyYW5kc3xkdW90b25lfHRoaW4pfFtsZl1hW3NybGJka10/KSAvXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSWNvbicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdpJ1xuICAgIH0sXG5cbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBsZWZ0OiBCb29sZWFuLFxuICAgIHJpZ2h0OiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaWNvbidcbiAgICAgICsgKHByb3BzLmxlZnQgPT09IHRydWUgPyAnIG9uLWxlZnQnIDogJycpIC8vIFRPRE8gUXYzOiBkcm9wIHRoaXNcbiAgICAgICsgKHByb3BzLnJpZ2h0ID09PSB0cnVlID8gJyBvbi1yaWdodCcgOiAnJylcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0eXBlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IGNsc1xuICAgICAgbGV0IGljb24gPSBwcm9wcy5uYW1lXG5cbiAgICAgIGlmIChpY29uID09PSAnbm9uZScgfHwgIWljb24pIHtcbiAgICAgICAgcmV0dXJuIHsgbm9uZTogdHJ1ZSB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkcS5pY29uTWFwRm4gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVzID0gJHEuaWNvbk1hcEZuKGljb24pXG4gICAgICAgIGlmIChyZXMgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChyZXMuaWNvbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpY29uID0gcmVzLmljb25cbiAgICAgICAgICAgIGlmIChpY29uID09PSAnbm9uZScgfHwgIWljb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgbm9uZTogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY2xzOiByZXMuY2xzLFxuICAgICAgICAgICAgICBjb250ZW50OiByZXMuY29udGVudCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgPyByZXMuY29udGVudFxuICAgICAgICAgICAgICAgIDogJyAnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtUkUudGVzdChpY29uKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBbIGRlZiwgdmlld0JveCA9IGRlZmF1bHRWaWV3Qm94IF0gPSBpY29uLnNwbGl0KCd8JylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN2ZzogdHJ1ZSxcbiAgICAgICAgICB2aWV3Qm94LFxuICAgICAgICAgIG5vZGVzOiBkZWYuc3BsaXQoJyYmJykubWFwKHBhdGggPT4ge1xuICAgICAgICAgICAgY29uc3QgWyBkLCBzdHlsZSwgdHJhbnNmb3JtIF0gPSBwYXRoLnNwbGl0KCdAQCcpXG4gICAgICAgICAgICByZXR1cm4gaCgncGF0aCcsIHsgc3R5bGUsIGQsIHRyYW5zZm9ybSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGltZ1JFLnRlc3QoaWNvbikgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbWc6IHRydWUsXG4gICAgICAgICAgc3JjOiBpY29uLnN1YnN0cmluZyg0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdmdVc2VSRS50ZXN0KGljb24pID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IFsgZGVmLCB2aWV3Qm94ID0gZGVmYXVsdFZpZXdCb3ggXSA9IGljb24uc3BsaXQoJ3wnKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3ZndXNlOiB0cnVlLFxuICAgICAgICAgIHNyYzogZGVmLnN1YnN0cmluZyg3KSxcbiAgICAgICAgICB2aWV3Qm94XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNvbnRlbnQgPSAnICdcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBpY29uLm1hdGNoKGxpYlJFKVxuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjbHMgPSBsaWJNYXBbIG1hdGNoZXNbIDEgXSBdKGljb24pXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmYVJFLnRlc3QoaWNvbikgPT09IHRydWUpIHtcbiAgICAgICAgY2xzID0gaWNvblxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaW9uUkUudGVzdChpY29uKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbHMgPSBgaW9uaWNvbnMgaW9uLSR7ICRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSA/ICdpb3MnIDogJ21kJyB9JHsgaWNvbi5zdWJzdHJpbmcoMykgfWBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN5bVJFLnRlc3QoaWNvbikgPT09IHRydWUpIHtcbiAgICAgICAgLy8gXCJub3RyYW5zbGF0ZVwiIGNsYXNzIGlzIGZvciBHb29nbGUgVHJhbnNsYXRlXG4gICAgICAgIC8vIHRvIGF2b2lkIHRhbXBlcmluZyB3aXRoIE1hdGVyaWFsIFN5bWJvbHMgbGlnYXR1cmUgZm9udFxuICAgICAgICAvL1xuICAgICAgICAvLyBDYXV0aW9uOiBUbyBiZSBhYmxlIHRvIGFkZCBzdWZmaXggdG8gdGhlIGNsYXNzIG5hbWUsXG4gICAgICAgIC8vIGtlZXAgdGhlICdtYXRlcmlhbC1zeW1ib2xzJyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4gICAgICAgIGNscyA9ICdub3RyYW5zbGF0ZSBtYXRlcmlhbC1zeW1ib2xzJ1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBpY29uLm1hdGNoKHN5bVJFKVxuICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGljb24gPSBpY29uLnN1YnN0cmluZyg2KVxuICAgICAgICAgIGNscyArPSBzeW1NYXBbIG1hdGNoZXNbIDEgXSBdXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50ID0gaWNvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIFwibm90cmFuc2xhdGVcIiBjbGFzcyBpcyBmb3IgR29vZ2xlIFRyYW5zbGF0ZVxuICAgICAgICAvLyB0byBhdm9pZCB0YW1wZXJpbmcgd2l0aCBNYXRlcmlhbCBJY29ucyBsaWdhdHVyZSBmb250XG4gICAgICAgIC8vXG4gICAgICAgIC8vIENhdXRpb246IFRvIGJlIGFibGUgdG8gYWRkIHN1ZmZpeCB0byB0aGUgY2xhc3MgbmFtZSxcbiAgICAgICAgLy8ga2VlcCB0aGUgJ21hdGVyaWFsLWljb25zJyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4gICAgICAgIGNscyA9ICdub3RyYW5zbGF0ZSBtYXRlcmlhbC1pY29ucydcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaWNvbi5tYXRjaChtYXRSRSlcbiAgICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgICBpY29uID0gaWNvbi5zdWJzdHJpbmcoMilcbiAgICAgICAgICBjbHMgKz0gbWF0TWFwWyBtYXRjaGVzWyAxIF0gXVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudCA9IGljb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xzLFxuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNpemVTdHlsZS52YWx1ZSxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICByb2xlOiAncHJlc2VudGF0aW9uJ1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS52YWx1ZS5ub25lID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKHByb3BzLnRhZywgZGF0YSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlLmltZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnc3BhbicsIGRhdGEsIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgIGgoJ2ltZycsIHsgc3JjOiB0eXBlLnZhbHVlLnNyYyB9KVxuICAgICAgICBdKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUudmFsdWUuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdzcGFuJywgZGF0YSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgICAgdmlld0JveDogdHlwZS52YWx1ZS52aWV3Qm94IHx8ICcwIDAgMjQgMjQnXG4gICAgICAgICAgfSwgdHlwZS52YWx1ZS5ub2RlcylcbiAgICAgICAgXSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlLnN2Z3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnc3BhbicsIGRhdGEsIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICAgIHZpZXdCb3g6IHR5cGUudmFsdWUudmlld0JveFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ3VzZScsIHsgJ3hsaW5rOmhyZWYnOiB0eXBlLnZhbHVlLnNyYyB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS52YWx1ZS5jbHMgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzICs9ICcgJyArIHR5cGUudmFsdWUuY2xzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKHByb3BzLnRhZywgZGF0YSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIHR5cGUudmFsdWUuY29udGVudFxuICAgICAgXSkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VTaXplRGVmYXVsdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlU3Bpbm5lclByb3BzID0ge1xuICBzaXplOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICcxZW0nXG4gIH0sXG4gIGNvbG9yOiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3Bpbm5lciAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBjU2l6ZTogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2l6ZSBpbiB1c2VTaXplRGVmYXVsdHNcbiAgICAgICAgPyBgJHsgdXNlU2l6ZURlZmF1bHRzWyBwcm9wcy5zaXplIF0gfXB4YFxuICAgICAgICA6IHByb3BzLnNpemVcbiAgICApKSxcblxuICAgIGNsYXNzZXM6IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zcGlubmVyJyArIChwcm9wcy5jb2xvciA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTcGlubmVyUHJvcHMsXG5cbiAgICB0aGlja25lc3M6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDVcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArICcgcS1zcGlubmVyLW1hdCcsXG4gICAgICB3aWR0aDogY1NpemUudmFsdWUsXG4gICAgICBoZWlnaHQ6IGNTaXplLnZhbHVlLFxuICAgICAgdmlld0JveDogJzI1IDI1IDUwIDUwJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2NpcmNsZScsIHtcbiAgICAgICAgY2xhc3M6ICdwYXRoJyxcbiAgICAgICAgY3g6ICc1MCcsXG4gICAgICAgIGN5OiAnNTAnLFxuICAgICAgICByOiAnMjAnLFxuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiBwcm9wcy50aGlja25lc3MsXG4gICAgICAgICdzdHJva2UtbWl0ZXJsaW1pdCc6ICcxMCdcbiAgICAgIH0pXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IHVucmVmIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0IChlbCkge1xuICBpZiAoZWwgPT09IHdpbmRvdykge1xuICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9XG4gIH1cbiAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7IHRvcCwgbGVmdCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZSAoZWwsIHByb3BlcnR5KSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCAoZWwpIHtcbiAgcmV0dXJuIGVsID09PSB3aW5kb3dcbiAgICA/IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIDogZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aWR0aCAoZWwpIHtcbiAgcmV0dXJuIGVsID09PSB3aW5kb3dcbiAgICA/IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgOiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzIChlbGVtZW50LCBjc3MpIHtcbiAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LnN0eWxlXG5cbiAgZm9yIChjb25zdCBwcm9wIGluIGNzcykge1xuICAgIHN0eWxlWyBwcm9wIF0gPSBjc3NbIHByb3AgXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3NCYXRjaCAoZWxlbWVudHMsIHN0eWxlKSB7XG4gIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gY3NzKGVsLCBzdHlsZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkeSAoZm4pIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiBmbigpXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4sIGZhbHNlKVxufVxuXG4vLyBpbnRlcm5hbFxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQgKGVsKSB7XG4gIGlmIChlbCA9PT0gdm9pZCAwIHx8IGVsID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHZvaWQgMFxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIHx8IHZvaWQgMFxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdm9pZCAwXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGFyZ2V0ID0gdW5yZWYoZWwpXG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LiRlbCB8fCB0YXJnZXRcbiAgfVxufVxuXG4vLyBpbnRlcm5hbFxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkSGFzRm9jdXMgKGVsLCBmb2N1c2VkRWwpIHtcbiAgaWYgKGVsID09PSB2b2lkIDAgfHwgZWwgPT09IG51bGwgfHwgZWwuY29udGFpbnMoZm9jdXNlZEVsKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKGxldCBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nOyBuZXh0ICE9PSBudWxsOyBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBpZiAobmV4dC5jb250YWlucyhmb2N1c2VkRWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9mZnNldCxcbiAgc3R5bGUsXG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIGNzcyxcbiAgY3NzQmF0Y2gsXG4gIHJlYWR5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZm4sIGxpbWl0ID0gMjUwKSB7XG4gIGxldCB3YWl0ID0gZmFsc2UsIHJlc3VsdFxuXG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIGlmICh3YWl0ID09PSBmYWxzZSkge1xuICAgICAgd2FpdCA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB3YWl0ID0gZmFsc2UgfSwgbGltaXQpXG4gICAgICByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNzcyB9IGZyb20gJy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IHBvc2l0aW9uLCBzdG9wLCBhZGRFdnQsIGNsZWFuRXZ0IH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuLi91dGlscy90aHJvdHRsZS5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIHNob3dSaXBwbGUgKGV2dCwgZWwsIGN0eCwgZm9yY2VDZW50ZXIpIHtcbiAgY3R4Lm1vZGlmaWVycy5zdG9wID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuXG4gIGNvbnN0IGNvbG9yID0gY3R4Lm1vZGlmaWVycy5jb2xvclxuICBsZXQgY2VudGVyID0gY3R4Lm1vZGlmaWVycy5jZW50ZXJcbiAgY2VudGVyID0gY2VudGVyID09PSB0cnVlIHx8IGZvcmNlQ2VudGVyID09PSB0cnVlXG5cbiAgY29uc3RcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgIGlubmVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgIHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBkaWFtZXRlciA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KSxcbiAgICByYWRpdXMgPSBkaWFtZXRlciAvIDIsXG4gICAgY2VudGVyWCA9IGAkeyAod2lkdGggLSBkaWFtZXRlcikgLyAyIH1weGAsXG4gICAgeCA9IGNlbnRlciA/IGNlbnRlclggOiBgJHsgcG9zLmxlZnQgLSBsZWZ0IC0gcmFkaXVzIH1weGAsXG4gICAgY2VudGVyWSA9IGAkeyAoaGVpZ2h0IC0gZGlhbWV0ZXIpIC8gMiB9cHhgLFxuICAgIHkgPSBjZW50ZXIgPyBjZW50ZXJZIDogYCR7IHBvcy50b3AgLSB0b3AgLSByYWRpdXMgfXB4YFxuXG4gIGlubmVyTm9kZS5jbGFzc05hbWUgPSAncS1yaXBwbGVfX2lubmVyJ1xuICBjc3MoaW5uZXJOb2RlLCB7XG4gICAgaGVpZ2h0OiBgJHsgZGlhbWV0ZXIgfXB4YCxcbiAgICB3aWR0aDogYCR7IGRpYW1ldGVyIH1weGAsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHsgeCB9LCR7IHkgfSwwKSBzY2FsZTNkKC4yLC4yLDEpYCxcbiAgICBvcGFjaXR5OiAwXG4gIH0pXG5cbiAgbm9kZS5jbGFzc05hbWUgPSBgcS1yaXBwbGUkeyBjb2xvciA/ICcgdGV4dC0nICsgY29sb3IgOiAnJyB9YFxuICBub2RlLnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpXG4gIG5vZGUuYXBwZW5kQ2hpbGQoaW5uZXJOb2RlKVxuICBlbC5hcHBlbmRDaGlsZChub2RlKVxuXG4gIGNvbnN0IGFib3J0ID0gKCkgPT4ge1xuICAgIG5vZGUucmVtb3ZlKClcbiAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gIH1cbiAgY3R4LmFib3J0LnB1c2goYWJvcnQpXG5cbiAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaW5uZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ3EtcmlwcGxlX19pbm5lci0tZW50ZXInKVxuICAgIGlubmVyTm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsgY2VudGVyWCB9LCR7IGNlbnRlclkgfSwwKSBzY2FsZTNkKDEsMSwxKWBcbiAgICBpbm5lck5vZGUuc3R5bGUub3BhY2l0eSA9IDAuMlxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlubmVyTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdxLXJpcHBsZV9faW5uZXItLWVudGVyJylcbiAgICAgIGlubmVyTm9kZS5jbGFzc0xpc3QuYWRkKCdxLXJpcHBsZV9faW5uZXItLWxlYXZlJylcbiAgICAgIGlubmVyTm9kZS5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZSgpXG4gICAgICAgIGN0eC5hYm9ydC5zcGxpY2UoY3R4LmFib3J0LmluZGV4T2YoYWJvcnQpLCAxKVxuICAgICAgfSwgMjc1KVxuICAgIH0sIDI1MClcbiAgfSwgNTApXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1vZGlmaWVycyAoY3R4LCB7IG1vZGlmaWVycywgdmFsdWUsIGFyZyB9KSB7XG4gIGNvbnN0IGNmZyA9IE9iamVjdC5hc3NpZ24oe30sIGN0eC5jZmcucmlwcGxlLCBtb2RpZmllcnMsIHZhbHVlKVxuICBjdHgubW9kaWZpZXJzID0ge1xuICAgIGVhcmx5OiBjZmcuZWFybHkgPT09IHRydWUsXG4gICAgc3RvcDogY2ZnLnN0b3AgPT09IHRydWUsXG4gICAgY2VudGVyOiBjZmcuY2VudGVyID09PSB0cnVlLFxuICAgIGNvbG9yOiBjZmcuY29sb3IgfHwgYXJnLFxuICAgIGtleUNvZGVzOiBbXS5jb25jYXQoY2ZnLmtleUNvZGVzIHx8IDEzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICdyaXBwbGUnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3JpcHBsZScsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgYmluZGluZykge1xuICAgICAgICBjb25zdCBjZmcgPSBiaW5kaW5nLmluc3RhbmNlLiQuYXBwQ29udGV4dC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcS5jb25maWcgfHwge31cblxuICAgICAgICBpZiAoY2ZnLnJpcHBsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBjZmcsXG4gICAgICAgICAgZW5hYmxlZDogYmluZGluZy52YWx1ZSAhPT0gZmFsc2UsXG4gICAgICAgICAgbW9kaWZpZXJzOiB7fSxcbiAgICAgICAgICBhYm9ydDogW10sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5lbmFibGVkID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC5xU2tpcFJpcHBsZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQudHlwZSA9PT0gKGN0eC5tb2RpZmllcnMuZWFybHkgPT09IHRydWUgPyAncG9pbnRlcmRvd24nIDogJ2NsaWNrJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzaG93UmlwcGxlKGV2dCwgZWwsIGN0eCwgZXZ0LnFLZXlFdmVudCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAga2V5c3RhcnQ6IHRocm90dGxlKGV2dCA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5lbmFibGVkID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGV2dC5xU2tpcFJpcHBsZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBpc0tleUNvZGUoZXZ0LCBjdHgubW9kaWZpZXJzLmtleUNvZGVzKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBldnQudHlwZSA9PT0gYGtleSR7IGN0eC5tb2RpZmllcnMuZWFybHkgPT09IHRydWUgPyAnZG93bicgOiAndXAnIH1gXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2hvd1JpcHBsZShldnQsIGVsLCBjdHgsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMzAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTW9kaWZpZXJzKGN0eCwgYmluZGluZylcblxuICAgICAgICBlbC5fX3FyaXBwbGUgPSBjdHhcblxuICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAncG9pbnRlcmRvd24nLCAnc3RhcnQnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGVsLCAnY2xpY2snLCAnc3RhcnQnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGVsLCAna2V5ZG93bicsICdrZXlzdGFydCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgZWwsICdrZXl1cCcsICdrZXlzdGFydCcsICdwYXNzaXZlJyBdXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZykge1xuICAgICAgICBpZiAoYmluZGluZy5vbGRWYWx1ZSAhPT0gYmluZGluZy52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXJpcHBsZVxuICAgICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY3R4LmVuYWJsZWQgPSBiaW5kaW5nLnZhbHVlICE9PSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoY3R4LmVuYWJsZWQgPT09IHRydWUgJiYgT2JqZWN0KGJpbmRpbmcudmFsdWUpID09PSBiaW5kaW5nLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZU1vZGlmaWVycyhjdHgsIGJpbmRpbmcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3FyaXBwbGVcbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY3R4LmFib3J0LmZvckVhY2goZm4gPT4geyBmbigpIH0pXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgZGVsZXRlIGVsLl9xcmlwcGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IGFsaWduTWFwID0ge1xuICBsZWZ0OiAnc3RhcnQnLFxuICBjZW50ZXI6ICdjZW50ZXInLFxuICByaWdodDogJ2VuZCcsXG4gIGJldHdlZW46ICdiZXR3ZWVuJyxcbiAgYXJvdW5kOiAnYXJvdW5kJyxcbiAgZXZlbmx5OiAnZXZlbmx5JyxcbiAgc3RyZXRjaDogJ3N0cmV0Y2gnXG59XG5cbmV4cG9ydCBjb25zdCBhbGlnblZhbHVlcyA9IE9iamVjdC5rZXlzKGFsaWduTWFwKVxuXG5leHBvcnQgY29uc3QgdXNlQWxpZ25Qcm9wcyA9IHtcbiAgYWxpZ246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIC8vIHJldHVybiBhbGlnbkNsYXNzXG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWxpZ24gPSBwcm9wcy5hbGlnbiA9PT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3N0cmV0Y2gnIDogJ2xlZnQnXG4gICAgICA6IHByb3BzLmFsaWduXG5cbiAgICByZXR1cm4gYCR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2l0ZW1zJyA6ICdqdXN0aWZ5JyB9LSR7IGFsaWduTWFwWyBhbGlnbiBdIH1gXG4gIH0pXG59XG4iLCJcbi8vIGNvcGllZCB0byBkb2NzIHRvb1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFByb3h5IChwcm94eSkge1xuICBpZiAoT2JqZWN0KHByb3h5LiRwYXJlbnQpID09PSBwcm94eS4kcGFyZW50KSB7XG4gICAgcmV0dXJuIHByb3h5LiRwYXJlbnRcbiAgfVxuXG4gIGxldCB7IHBhcmVudCB9ID0gcHJveHkuJFxuXG4gIHdoaWxlIChPYmplY3QocGFyZW50KSA9PT0gcGFyZW50KSB7XG4gICAgaWYgKE9iamVjdChwYXJlbnQucHJveHkpID09PSBwYXJlbnQucHJveHkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQucHJveHlcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbE5vcm1hbGl6ZWRWTm9kZXMgKGNoaWxkcmVuLCB2bm9kZSkge1xuICBpZiAodHlwZW9mIHZub2RlLnR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUuY2hpbGRyZW4pID09PSB0cnVlKSB7XG4gICAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZmlsbE5vcm1hbGl6ZWRWTm9kZXMoY2hpbGRyZW4sIGNoaWxkKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY2hpbGRyZW4uYWRkKHZub2RlKVxuICB9XG59XG5cbi8vIHZub2RlcyBmcm9tIHJlbmRlcmVkIGluIGFkdmFuY2VkIHNsb3RzXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFZOb2RlcyAodm5vZGVzKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gbmV3IFNldCgpXG5cbiAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xuICAgIGZpbGxOb3JtYWxpemVkVk5vZGVzKGNoaWxkcmVuLCB2bm9kZSlcbiAgfSlcblxuICByZXR1cm4gQXJyYXkuZnJvbShjaGlsZHJlbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZtSGFzUm91dGVyICh2bSkge1xuICByZXR1cm4gdm0uYXBwQ29udGV4dC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcm91dGVyICE9PSB2b2lkIDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZtSXNEZXN0cm95ZWQgKHZtKSB7XG4gIHJldHVybiB2bS5pc1VubW91bnRlZCA9PT0gdHJ1ZSB8fCB2bS5pc0RlYWN0aXZhdGVkID09PSB0cnVlXG59XG4iLCIvKlxuICogSW5zcGlyZWQgYnkgUm91dGVyTGluayBmcm9tIFZ1ZSBSb3V0ZXJcbiAqICAtLT4gQVBJIHNob3VsZCBtYXRjaCFcbiAqL1xuXG5pbXBvcnQgeyBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbi8vIEdldCB0aGUgb3JpZ2luYWwgcGF0aCB2YWx1ZSBvZiBhIHJlY29yZCBieSBmb2xsb3dpbmcgaXRzIGFsaWFzT2ZcbmZ1bmN0aW9uIGdldE9yaWdpbmFsUGF0aCAocmVjb3JkKSB7XG4gIHJldHVybiByZWNvcmRcbiAgICA/IChcbiAgICAgICAgcmVjb3JkLmFsaWFzT2ZcbiAgICAgICAgICA/IHJlY29yZC5hbGlhc09mLnBhdGhcbiAgICAgICAgICA6IHJlY29yZC5wYXRoXG4gICAgICApIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGVSZWNvcmQgKGEsIGIpIHtcbiAgLy8gc2luY2UgdGhlIG9yaWdpbmFsIHJlY29yZCBoYXMgYW4gdW5kZWZpbmVkIHZhbHVlIGZvciBhbGlhc09mXG4gIC8vIGJ1dCBhbGwgYWxpYXNlcyBwb2ludCB0byB0aGUgb3JpZ2luYWwgcmVjb3JkLCB0aGlzIHdpbGwgYWx3YXlzIGNvbXBhcmVcbiAgLy8gdGhlIG9yaWdpbmFsIHJlY29yZFxuICByZXR1cm4gKGEuYWxpYXNPZiB8fCBhKSA9PT0gKGIuYWxpYXNPZiB8fCBiKVxufVxuXG5mdW5jdGlvbiBpbmNsdWRlc1BhcmFtcyAob3V0ZXIsIGlubmVyKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgIGlubmVyVmFsdWUgPSBpbm5lclsga2V5IF0sXG4gICAgICBvdXRlclZhbHVlID0gb3V0ZXJbIGtleSBdXG5cbiAgICBpZiAodHlwZW9mIGlubmVyVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5uZXJWYWx1ZSAhPT0gb3V0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KG91dGVyVmFsdWUpID09PSBmYWxzZVxuICAgICAgfHwgb3V0ZXJWYWx1ZS5sZW5ndGggIT09IGlubmVyVmFsdWUubGVuZ3RoXG4gICAgICB8fCBpbm5lclZhbHVlLnNvbWUoKHZhbHVlLCBpKSA9PiB2YWx1ZSAhPT0gb3V0ZXJWYWx1ZVsgaSBdKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaXNFcXVpdmFsZW50QXJyYXkgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgPT09IHRydWVcbiAgICA/IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh2YWx1ZSwgaSkgPT4gdmFsdWUgPT09IGJbIGkgXSlcbiAgICA6IGEubGVuZ3RoID09PSAxICYmIGFbIDAgXSA9PT0gYlxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZUxvY2F0aW9uUGFyYW1zVmFsdWUgKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgPT09IHRydWVcbiAgICA/IGlzRXF1aXZhbGVudEFycmF5KGEsIGIpXG4gICAgOiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoYikgPT09IHRydWVcbiAgICAgICAgICA/IGlzRXF1aXZhbGVudEFycmF5KGIsIGEpXG4gICAgICAgICAgOiBhID09PSBiXG4gICAgICApXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXMgKGEsIGIpIHtcbiAgaWYgKE9iamVjdC5rZXlzKGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBhKSB7XG4gICAgaWYgKGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXNWYWx1ZShhWyBrZXkgXSwgYlsga2V5IF0pID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJvdXRlckxpbmtQcm9wcyA9IHtcbiAgLy8gcm91dGVyLWxpbmtcbiAgdG86IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgcmVwbGFjZTogQm9vbGVhbixcbiAgZXhhY3Q6IEJvb2xlYW4sXG4gIGFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdxLXJvdXRlci1saW5rLS1hY3RpdmUnXG4gIH0sXG4gIGV4YWN0QWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ3Etcm91dGVyLWxpbmstLWV4YWN0LWFjdGl2ZSdcbiAgfSxcblxuICAvLyByZWd1bGFyIDxhPiBsaW5rXG4gIGhyZWY6IFN0cmluZyxcbiAgdGFyZ2V0OiBTdHJpbmcsXG5cbiAgLy8gc3RhdGVcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG4vLyBleHRlcm5hbCBwcm9wczogdHlwZSwgdGFnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGZhbGxiYWNrVGFnLCB1c2VEaXNhYmxlRm9yUm91dGVyTGlua1Byb3BzID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBwcm94eSwgZW1pdCB9ID0gdm1cblxuICBjb25zdCBoYXNSb3V0ZXIgPSB2bUhhc1JvdXRlcih2bSlcbiAgY29uc3QgaGFzSHJlZkxpbmsgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLmhyZWYgIT09IHZvaWQgMClcblxuICAvLyBmb3IgcGVyZiByZWFzb25zLCB3ZSB1c2UgbWluaW11bSBhbW91bnQgb2YgcnVudGltZSB3b3JrXG4gIGNvbnN0IGhhc1JvdXRlckxpbmtQcm9wcyA9IHVzZURpc2FibGVGb3JSb3V0ZXJMaW5rUHJvcHMgPT09IHRydWVcbiAgICA/IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNSb3V0ZXIgPT09IHRydWVcbiAgICAgICYmIHByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgICYmIGhhc0hyZWZMaW5rLnZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJ1xuICAgIClcbiAgICA6IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNSb3V0ZXIgPT09IHRydWVcbiAgICAgICYmIGhhc0hyZWZMaW5rLnZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJ1xuICAgIClcblxuICBjb25zdCByZXNvbHZlZExpbmsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaGFzUm91dGVyTGlua1Byb3BzLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGdldExpbmsocHJvcHMudG8pXG4gICAgICA6IG51bGxcbiAgKSlcblxuICBjb25zdCBoYXNSb3V0ZXJMaW5rID0gY29tcHV0ZWQoKCkgPT4gcmVzb2x2ZWRMaW5rLnZhbHVlICE9PSBudWxsKVxuICBjb25zdCBoYXNMaW5rID0gY29tcHV0ZWQoKCkgPT4gaGFzSHJlZkxpbmsudmFsdWUgPT09IHRydWUgfHwgaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSlcblxuICBjb25zdCBsaW5rVGFnID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnR5cGUgPT09ICdhJyB8fCBoYXNMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/ICdhJ1xuICAgICAgOiAocHJvcHMudGFnIHx8IGZhbGxiYWNrVGFnIHx8ICdkaXYnKVxuICApKVxuXG4gIGNvbnN0IGxpbmtBdHRycyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNIcmVmTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyB7XG4gICAgICAgICAgaHJlZjogcHJvcHMuaHJlZixcbiAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgICB9XG4gICAgICA6IChcbiAgICAgICAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBocmVmOiByZXNvbHZlZExpbmsudmFsdWUuaHJlZixcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIClcbiAgKSlcblxuICBjb25zdCBsaW5rQWN0aXZlSW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGhhc1JvdXRlckxpbmsudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgeyBtYXRjaGVkIH0gPSByZXNvbHZlZExpbmsudmFsdWUsXG4gICAgICB7IGxlbmd0aCB9ID0gbWF0Y2hlZCxcbiAgICAgIHJvdXRlTWF0Y2hlZCA9IG1hdGNoZWRbIGxlbmd0aCAtIDEgXVxuXG4gICAgaWYgKHJvdXRlTWF0Y2hlZCA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TWF0Y2hlZCA9IHByb3h5LiRyb3V0ZS5tYXRjaGVkXG5cbiAgICBpZiAoY3VycmVudE1hdGNoZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRNYXRjaGVkLmZpbmRJbmRleChcbiAgICAgIGlzU2FtZVJvdXRlUmVjb3JkLmJpbmQobnVsbCwgcm91dGVNYXRjaGVkKVxuICAgIClcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICAvLyBwb3NzaWJsZSBwYXJlbnQgcmVjb3JkXG4gICAgY29uc3QgcGFyZW50UmVjb3JkUGF0aCA9IGdldE9yaWdpbmFsUGF0aChtYXRjaGVkWyBsZW5ndGggLSAyIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gd2UgYXJlIGRlYWxpbmcgd2l0aCBuZXN0ZWQgcm91dGVzXG4gICAgICBsZW5ndGggPiAxXG4gICAgICAvLyBpZiB0aGUgcGFyZW50IGFuZCBtYXRjaGVkIHJvdXRlIGhhdmUgdGhlIHNhbWUgcGF0aCwgdGhpcyBsaW5rIGlzXG4gICAgICAvLyByZWZlcnJpbmcgdG8gdGhlIGVtcHR5IGNoaWxkLiBPciB3ZSBjdXJyZW50bHkgYXJlIG9uIGEgZGlmZmVyZW50XG4gICAgICAvLyBjaGlsZCBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgICYmIGdldE9yaWdpbmFsUGF0aChyb3V0ZU1hdGNoZWQpID09PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAvLyBhdm9pZCBjb21wYXJpbmcgdGhlIGNoaWxkIHdpdGggaXRzIHBhcmVudFxuICAgICAgJiYgY3VycmVudE1hdGNoZWRbIGN1cnJlbnRNYXRjaGVkLmxlbmd0aCAtIDEgXS5wYXRoICE9PSBwYXJlbnRSZWNvcmRQYXRoXG4gICAgICAgID8gY3VycmVudE1hdGNoZWQuZmluZEluZGV4KFxuICAgICAgICAgIGlzU2FtZVJvdXRlUmVjb3JkLmJpbmQobnVsbCwgbWF0Y2hlZFsgbGVuZ3RoIC0gMiBdKVxuICAgICAgICApXG4gICAgICAgIDogaW5kZXhcbiAgICApXG4gIH0pXG5cbiAgY29uc3QgbGlua0lzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT5cbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgJiYgbGlua0FjdGl2ZUluZGV4LnZhbHVlICE9PSAtMVxuICAgICYmIGluY2x1ZGVzUGFyYW1zKHByb3h5LiRyb3V0ZS5wYXJhbXMsIHJlc29sdmVkTGluay52YWx1ZS5wYXJhbXMpXG4gIClcblxuICBjb25zdCBsaW5rSXNFeGFjdEFjdGl2ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgbGlua0lzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBsaW5rQWN0aXZlSW5kZXgudmFsdWUgPT09IHByb3h5LiRyb3V0ZS5tYXRjaGVkLmxlbmd0aCAtIDFcbiAgICAgICYmIGlzU2FtZVJvdXRlTG9jYXRpb25QYXJhbXMocHJveHkuJHJvdXRlLnBhcmFtcywgcmVzb2x2ZWRMaW5rLnZhbHVlLnBhcmFtcylcbiAgKVxuXG4gIGNvbnN0IGxpbmtDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChcbiAgICAgICAgICBsaW5rSXNFeGFjdEFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBgICR7IHByb3BzLmV4YWN0QWN0aXZlQ2xhc3MgfSAkeyBwcm9wcy5hY3RpdmVDbGFzcyB9YFxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgcHJvcHMuZXhhY3QgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgIDogKGxpbmtJc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJylcbiAgICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICA6ICcnXG4gICkpXG5cbiAgZnVuY3Rpb24gZ2V0TGluayAodG8pIHtcbiAgICB0cnkgeyByZXR1cm4gcHJveHkuJHJvdXRlci5yZXNvbHZlKHRvKSB9XG4gICAgY2F0Y2ggKF8pIHt9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFByb21pc2U8Um91dGVyRXJyb3IgfCBmYWxzZSB8IHVuZGVmaW5lZD5cbiAgICovXG4gIGZ1bmN0aW9uIG5hdmlnYXRlVG9Sb3V0ZXJMaW5rIChcbiAgICBlLFxuICAgIHsgcmV0dXJuUm91dGVyRXJyb3IsIHRvID0gcHJvcHMudG8sIHJlcGxhY2UgPSBwcm9wcy5yZXBsYWNlIH0gPSB7fVxuICApIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gZW5zdXJlIG5hdGl2ZSBuYXZpZ2F0aW9uIGlzIHByZXZlbnRlZCBpbiBhbGwgY2FzZXMsXG4gICAgICAvLyBsaWtlIHdoZW4gdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wcyA9PT0gZmFsc2UgKFFSb3V0ZVRhYilcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5cztcbiAgICAgIC8vIHNob3VsZCBtYXRjaCBSb3V0ZXJMaW5rIGZyb20gVnVlIFJvdXRlclxuICAgICAgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5XG5cbiAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICB8fCAoZS5idXR0b24gIT09IHZvaWQgMCAmJiBlLmJ1dHRvbiAhPT0gMClcblxuICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgaXQgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93XG4gICAgICB8fCBwcm9wcy50YXJnZXQgPT09ICdfYmxhbmsnXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIGhpbmRlciB0aGUgbmF0aXZlIG5hdmlnYXRpb25cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIHRoZW4oKSBjYW4gYWxzbyByZXR1cm4gYSBcInNvZnRcIiByb3V0ZXIgZXJyb3IgKFZ1ZSBSb3V0ZXIgYmVoYXZpb3IpXG4gICAgY29uc3QgcHJvbWlzZSA9IHByb3h5LiRyb3V0ZXJbIHJlcGxhY2UgPT09IHRydWUgPyAncmVwbGFjZScgOiAncHVzaCcgXSh0bylcblxuICAgIHJldHVybiByZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZVxuICAgICAgPyBwcm9taXNlXG4gICAgICAvLyBlbHNlIGNhdGNoaW5nIGhhcmQgZXJyb3JzIGFuZCBhbHNvIFwic29mdFwiIG9uZXMgLSB0aGVuKGVyciA9PiAuLi4pXG4gICAgICA6IHByb21pc2UudGhlbigoKSA9PiB7fSkuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICAvLyB3YXJuaW5nISBlbnN1cmUgdGhhdCB0aGUgY29tcG9uZW50IHVzaW5nIGl0IGhhcyAnY2xpY2snIGluY2x1ZGVkIGluIGl0cyAnZW1pdHMnIGRlZmluaXRpb24gcHJvcFxuICBmdW5jdGlvbiBuYXZpZ2F0ZU9uQ2xpY2sgKGUpIHtcbiAgICBpZiAoaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSBvcHRzID0+IG5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIG9wdHMpXG5cbiAgICAgIGVtaXQoJ2NsaWNrJywgZSwgZ28pXG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgZ28oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc1JvdXRlckxpbmssXG4gICAgaGFzSHJlZkxpbmssXG4gICAgaGFzTGluayxcblxuICAgIGxpbmtUYWcsXG4gICAgcmVzb2x2ZWRMaW5rLFxuICAgIGxpbmtJc0FjdGl2ZSxcbiAgICBsaW5rSXNFeGFjdEFjdGl2ZSxcbiAgICBsaW5rQ2xhc3MsXG4gICAgbGlua0F0dHJzLFxuXG4gICAgZ2V0TGluayxcbiAgICBuYXZpZ2F0ZVRvUm91dGVyTGluayxcbiAgICBuYXZpZ2F0ZU9uQ2xpY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VBbGlnbiwgeyB1c2VBbGlnblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYWxpZ24uanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMnXG5cbmV4cG9ydCBjb25zdCBidG5QYWRkaW5nID0ge1xuICBub25lOiAwLFxuICB4czogNCxcbiAgc206IDgsXG4gIG1kOiAxNixcbiAgbGc6IDI0LFxuICB4bDogMzJcbn1cblxuY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogOCxcbiAgc206IDEwLFxuICBtZDogMTQsXG4gIGxnOiAyMCxcbiAgeGw6IDI0XG59XG5cbmNvbnN0IGZvcm1UeXBlcyA9IFsgJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnIF1cbmNvbnN0IG1lZGlhVHlwZVJFID0gL1teXFxzXVxcL1teXFxzXS9cblxuZXhwb3J0IGNvbnN0IGJ0bkRlc2lnbk9wdGlvbnMgPSBbICdmbGF0JywgJ291dGxpbmUnLCAncHVzaCcsICd1bmVsZXZhdGVkJyBdXG5leHBvcnQgY29uc3QgZ2V0QnRuRGVzaWduID0gKHByb3BzLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgaWYgKHByb3BzLmZsYXQgPT09IHRydWUpIHJldHVybiAnZmxhdCdcbiAgaWYgKHByb3BzLm91dGxpbmUgPT09IHRydWUpIHJldHVybiAnb3V0bGluZSdcbiAgaWYgKHByb3BzLnB1c2ggPT09IHRydWUpIHJldHVybiAncHVzaCdcbiAgaWYgKHByb3BzLnVuZWxldmF0ZWQgPT09IHRydWUpIHJldHVybiAndW5lbGV2YXRlZCdcbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuZXhwb3J0IGNvbnN0IGdldEJ0bkRlc2lnbkF0dHIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGRlc2lnbiA9IGdldEJ0bkRlc2lnbihwcm9wcylcbiAgcmV0dXJuIGRlc2lnbiAhPT0gdm9pZCAwXG4gICAgPyB7IFsgZGVzaWduIF06IHRydWUgfVxuICAgIDoge31cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUJ0blByb3BzID0ge1xuICAuLi51c2VTaXplUHJvcHMsXG4gIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICB0eXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdidXR0b24nXG4gIH0sXG5cbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgaWNvbjogU3RyaW5nLFxuICBpY29uUmlnaHQ6IFN0cmluZyxcblxuICAuLi5idG5EZXNpZ25PcHRpb25zLnJlZHVjZShcbiAgICAoYWNjLCB2YWwpID0+IChhY2NbIHZhbCBdID0gQm9vbGVhbikgJiYgYWNjLFxuICAgIHt9XG4gICksXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICByb3VuZDogQm9vbGVhbixcbiAgcm91bmRlZDogQm9vbGVhbixcbiAgZ2xvc3N5OiBCb29sZWFuLFxuXG4gIHNpemU6IFN0cmluZyxcbiAgZmFiOiBCb29sZWFuLFxuICBmYWJNaW5pOiBCb29sZWFuLFxuICBwYWRkaW5nOiBTdHJpbmcsXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG4gIG5vQ2FwczogQm9vbGVhbixcbiAgbm9XcmFwOiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuXG4gIGFsaWduOiB7XG4gICAgLi4udXNlQWxpZ25Qcm9wcy5hbGlnbixcbiAgICBkZWZhdWx0OiAnY2VudGVyJ1xuICB9LFxuICBzdGFjazogQm9vbGVhbixcbiAgc3RyZXRjaDogQm9vbGVhbixcbiAgbG9hZGluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG4gIGNvbnN0IGFsaWduQ2xhc3MgPSB1c2VBbGlnbihwcm9wcylcbiAgY29uc3QgeyBoYXNSb3V0ZXJMaW5rLCBoYXNMaW5rLCBsaW5rVGFnLCBsaW5rQXR0cnMsIG5hdmlnYXRlT25DbGljayB9ID0gdXNlUm91dGVyTGluayh7XG4gICAgZmFsbGJhY2tUYWc6ICdidXR0b24nXG4gIH0pXG5cbiAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgb2JqID0gcHJvcHMuZmFiID09PSBmYWxzZSAmJiBwcm9wcy5mYWJNaW5pID09PSBmYWxzZVxuICAgICAgPyBzaXplU3R5bGUudmFsdWVcbiAgICAgIDoge31cblxuICAgIHJldHVybiBwcm9wcy5wYWRkaW5nICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb2JqLCB7XG4gICAgICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmdcbiAgICAgICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgICAgIC5tYXAodiA9PiAodiBpbiBidG5QYWRkaW5nID8gYnRuUGFkZGluZ1sgdiBdICsgJ3B4JyA6IHYpKVxuICAgICAgICAgIC5qb2luKCcgJyksXG4gICAgICAgIG1pbldpZHRoOiAnMCcsXG4gICAgICAgIG1pbkhlaWdodDogJzAnXG4gICAgICB9KVxuICAgICAgOiBvYmpcbiAgfSlcblxuICBjb25zdCBpc1JvdW5kZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnJvdW5kZWQgPT09IHRydWUgfHwgcHJvcHMuZmFiID09PSB0cnVlIHx8IHByb3BzLmZhYk1pbmkgPT09IHRydWVcbiAgKVxuXG4gIGNvbnN0IGlzQWN0aW9uYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5sb2FkaW5nICE9PSB0cnVlXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTFcbiAgKSlcblxuICBjb25zdCBkZXNpZ24gPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ24ocHJvcHMsICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUgfVxuXG4gICAgaWYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oYWNjLCBsaW5rQXR0cnMudmFsdWUpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1UeXBlcy5pbmNsdWRlcyhwcm9wcy50eXBlKSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgfVxuXG4gICAgaWYgKGxpbmtUYWcudmFsdWUgPT09ICdhJykge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYWNjLmhyZWYgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2Mucm9sZSA9ICdidXR0b24nXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNSb3V0ZXJMaW5rLnZhbHVlICE9PSB0cnVlICYmIG1lZGlhVHlwZVJFLnRlc3QocHJvcHMudHlwZSkgPT09IHRydWUpIHtcbiAgICAgICAgYWNjLnR5cGUgPSBwcm9wcy50eXBlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjYy5kaXNhYmxlZCA9ICcnXG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgcHJvcHMucGVyY2VudGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMTAwLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLnBlcmNlbnRhZ2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgbGV0IGNvbG9yc1xuXG4gICAgaWYgKHByb3BzLmNvbG9yICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChwcm9wcy5mbGF0ID09PSB0cnVlIHx8IHByb3BzLm91dGxpbmUgPT09IHRydWUpIHtcbiAgICAgICAgY29sb3JzID0gYHRleHQtJHsgcHJvcHMudGV4dENvbG9yIHx8IHByb3BzLmNvbG9yIH1gXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3JzID0gYGJnLSR7IHByb3BzLmNvbG9yIH0gdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfHwgJ3doaXRlJyB9YFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50ZXh0Q29sb3IpIHtcbiAgICAgIGNvbG9ycyA9IGB0ZXh0LSR7IHByb3BzLnRleHRDb2xvciB9YFxuICAgIH1cblxuICAgIGNvbnN0IHNoYXBlID0gcHJvcHMucm91bmQgPT09IHRydWVcbiAgICAgID8gJ3JvdW5kJ1xuICAgICAgOiBgcmVjdGFuZ2xlJHsgaXNSb3VuZGVkLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tcm91bmRlZCcgOiAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWJ0bi0tc3F1YXJlJyA6ICcnKSB9YFxuXG4gICAgcmV0dXJuIGBxLWJ0bi0tJHsgZGVzaWduLnZhbHVlIH0gcS1idG4tLSR7IHNoYXBlIH1gXG4gICAgICArIChjb2xvcnMgIT09IHZvaWQgMCA/ICcgJyArIGNvbG9ycyA6ICcnKVxuICAgICAgKyAoaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLWJ0bi0tYWN0aW9uYWJsZSBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZScgOiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpKVxuICAgICAgKyAocHJvcHMuZmFiID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiJyA6IChwcm9wcy5mYWJNaW5pID09PSB0cnVlID8gJyBxLWJ0bi0tZmFiLW1pbmknIDogJycpKVxuICAgICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlID8gJyBxLWJ0bi0tbm8tdXBwZXJjYXNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtYnRuLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIG5vLWJvcmRlci1yYWRpdXMgc2VsZi1zdHJldGNoJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZ2xvc3N5ID09PSB0cnVlID8gJyBnbG9zc3knIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPyAnIHEtYnRuLS1zcXVhcmUnIDogJycpXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJDbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGlnbkNsYXNzLnZhbHVlICsgKHByb3BzLnN0YWNrID09PSB0cnVlID8gJyBjb2x1bW4nIDogJyByb3cnKVxuICAgICsgKHByb3BzLm5vV3JhcCA9PT0gdHJ1ZSA/ICcgbm8td3JhcCB0ZXh0LW5vLXdyYXAnIDogJycpXG4gICAgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS1idG5fX2NvbnRlbnQtLWhpZGRlbicgOiAnJylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NlcyxcbiAgICBzdHlsZSxcbiAgICBpbm5lckNsYXNzZXMsXG4gICAgYXR0cmlidXRlcyxcbiAgICBoYXNMaW5rLFxuICAgIGxpbmtUYWcsXG4gICAgbmF2aWdhdGVPbkNsaWNrLFxuICAgIGlzQWN0aW9uYWJsZVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBUcmFuc2l0aW9uLCBvbkJlZm9yZVVubW91bnQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9SaXBwbGUuanMnXG5cbmltcG9ydCB1c2VCdG4sIHsgdXNlQnRuUHJvcHMgfSBmcm9tICcuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQsIGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5jb25zdCB7IHBhc3NpdmVDYXB0dXJlIH0gPSBsaXN0ZW5PcHRzXG5cbmxldFxuICB0b3VjaFRhcmdldCA9IG51bGwsXG4gIGtleWJvYXJkVGFyZ2V0ID0gbnVsbCxcbiAgbW91c2VUYXJnZXQgPSBudWxsXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUJ0blByb3BzLFxuXG4gICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgIGRhcmtQZXJjZW50YWdlOiBCb29sZWFuLFxuXG4gICAgb25Ub3VjaHN0YXJ0OiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJywgJ2tleWRvd24nLCAnbW91c2Vkb3duJywgJ2tleXVwJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsIHN0eWxlLCBpbm5lckNsYXNzZXMsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgaGFzTGluaywgbGlua1RhZywgbmF2aWdhdGVPbkNsaWNrLFxuICAgICAgaXNBY3Rpb25hYmxlXG4gICAgfSA9IHVzZUJ0bihwcm9wcylcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgbG9jYWxUb3VjaFRhcmdldEVsID0gbnVsbCwgYXZvaWRNb3VzZVJpcHBsZSwgbW91c2VUaW1lciA9IG51bGxcblxuICAgIGNvbnN0IGhhc0xhYmVsID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgJiYgcHJvcHMubGFiZWwgIT09IG51bGwgJiYgcHJvcHMubGFiZWwgIT09ICcnXG4gICAgKVxuXG4gICAgY29uc3QgcmlwcGxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiB7XG4gICAgICAgICAgICBrZXlDb2RlczogaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSA/IFsgMTMsIDMyIF0gOiBbIDEzIF0sXG4gICAgICAgICAgICAuLi4ocHJvcHMucmlwcGxlID09PSB0cnVlID8ge30gOiBwcm9wcy5yaXBwbGUpXG4gICAgICAgICAgfVxuICAgICkpXG5cbiAgICBjb25zdCByaXBwbGVQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7IGNlbnRlcjogcHJvcHMucm91bmQgfSkpXG5cbiAgICBjb25zdCBwZXJjZW50YWdlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHByb3BzLnBlcmNlbnRhZ2UpKVxuICAgICAgcmV0dXJuIHZhbCA+IDBcbiAgICAgICAgPyB7IHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC42cycsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsgdmFsIC0gMTAwIH0lKWAgfVxuICAgICAgICA6IHt9XG4gICAgfSlcblxuICAgIGNvbnN0IG9uRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uVG91Y2hzdGFydDogb25Mb2FkaW5nRXZ0LFxuICAgICAgICAgIG9uQ2xpY2s6IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbktleWRvd246IG9uTG9hZGluZ0V2dCxcbiAgICAgICAgICBvbktleXVwOiBvbkxvYWRpbmdFdnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBY3Rpb25hYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgICBvbkNsaWNrLFxuICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICBvbk1vdXNlZG93blxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3h5LiRxLnBsYXRmb3JtLmhhcy50b3VjaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IHByb3BzLm9uVG91Y2hzdGFydCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICA6ICdQYXNzaXZlJ1xuXG4gICAgICAgICAgYWNjWyBgb25Ub3VjaHN0YXJ0JHsgc3VmZml4IH1gIF0gPSBvblRvdWNoc3RhcnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbmVlZGVkOyBlc3BlY2lhbGx5IGZvciBkaXNhYmxlZCA8YT4gdGFnc1xuICAgICAgICBvbkNsaWNrOiBzdG9wQW5kUHJldmVudFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBub2RlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6ICdxLWJ0biBxLWJ0bi1pdGVtIG5vbi1zZWxlY3RhYmxlIG5vLW91dGxpbmUgJyArIGNsYXNzZXMudmFsdWUsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgLi4ub25FdmVudHMudmFsdWVcbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgaWYgKGUgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgLy8gZm9jdXMgYnV0dG9uIGlmIGl0IGNhbWUgZnJvbSBFTlRFUiBvbiBmb3JtXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIG5ldyBzdWJtaXQgKGFscmVhZHkgZG9uZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzLnR5cGUgPT09ICdzdWJtaXQnXG4gICAgICAgICAgJiYgZWwgIT09IGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAmJiByb290UmVmLnZhbHVlLmNvbnRhaW5zKGVsKSA9PT0gZmFsc2VcbiAgICAgICAgICAvLyByZXF1aXJlZCBmb3IgaU9TIGFuZCBkZXNrdG9wIFNhZmFyaVxuICAgICAgICAgICYmIGVsLmNvbnRhaW5zKHJvb3RSZWYudmFsdWUpID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcblxuICAgICAgICAgIGNvbnN0IG9uQ2xpY2tDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BBbmRQcmV2ZW50LCB0cnVlKVxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgICByb290UmVmLnZhbHVlICE9PSBudWxsICYmIHJvb3RSZWYudmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQ2xpY2tDbGVhbnVwLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcEFuZFByZXZlbnQsIHRydWUpXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbkNsaWNrQ2xlYW51cCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25DbGlja0NsZWFudXAsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRlT25DbGljayhlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgICAgLy8gaXMgaXQgYWxyZWFkeSBkZXN0cm95ZWQ/XG4gICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSA9PT0gdHJ1ZSAmJiBrZXlib2FyZFRhcmdldCAhPT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBrZXlib2FyZFRhcmdldCAhPT0gbnVsbCAmJiBjbGVhbnVwKClcblxuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZm9jdXMgZXh0ZXJuYWwgYnV0dG9uIGlmIHRoZSBmb2N1cyBoZWxwZXIgd2FzIGZvY3VzZWQgYmVmb3JlXG4gICAgICAgICAgcm9vdFJlZi52YWx1ZS5mb2N1cygpXG5cbiAgICAgICAgICBrZXlib2FyZFRhcmdldCA9IHJvb3RSZWYudmFsdWVcbiAgICAgICAgICByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5hZGQoJ3EtYnRuLS1hY3RpdmUnKVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25QcmVzc0VuZCwgdHJ1ZSlcbiAgICAgICAgICByb290UmVmLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvblByZXNzRW5kLCBwYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ub3VjaHN0YXJ0IChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGVtaXQoJ3RvdWNoc3RhcnQnLCBlKVxuXG4gICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGlmICh0b3VjaFRhcmdldCAhPT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICB0b3VjaFRhcmdldCAhPT0gbnVsbCAmJiBjbGVhbnVwKClcbiAgICAgICAgdG91Y2hUYXJnZXQgPSByb290UmVmLnZhbHVlXG5cbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsID0gZS50YXJnZXRcbiAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIGxvY2FsVG91Y2hUYXJnZXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBkdXBsaWNhdGVkIG1vdXNlZG93biBldmVudFxuICAgICAgLy8gdHJpZ2dlcmluZyBhbm90aGVyIGVhcmx5IHJpcHBsZVxuICAgICAgYXZvaWRNb3VzZVJpcHBsZSA9IHRydWVcbiAgICAgIG1vdXNlVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KG1vdXNlVGltZXIpXG4gICAgICBtb3VzZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vdXNlVGltZXIgPSBudWxsXG4gICAgICAgIGF2b2lkTW91c2VSaXBwbGUgPSBmYWxzZVxuICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChlKSB7XG4gICAgICAvLyBpcyBpdCBhbHJlYWR5IGRlc3Ryb3llZD9cbiAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGUucVNraXBSaXBwbGUgPSBhdm9pZE1vdXNlUmlwcGxlID09PSB0cnVlXG4gICAgICBlbWl0KCdtb3VzZWRvd24nLCBlKVxuXG4gICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlICYmIG1vdXNlVGFyZ2V0ICE9PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIG1vdXNlVGFyZ2V0ICE9PSBudWxsICYmIGNsZWFudXAoKVxuICAgICAgICBtb3VzZVRhcmdldCA9IHJvb3RSZWYudmFsdWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QuYWRkKCdxLWJ0bi0tYWN0aXZlJylcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJlc3NFbmQgKGUpIHtcbiAgICAgIC8vIGlzIGl0IGFscmVhZHkgZGVzdHJveWVkP1xuICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgLy8gbmVlZGVkIGZvciBJRSAoYmVjYXVzZSBpdCBlbWl0cyBibHVyIHdoZW4gZm9jdXNpbmcgYnV0dG9uIGZyb20gZm9jdXMgaGVscGVyKVxuICAgICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUgPT09ICdibHVyJyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZSAhPT0gdm9pZCAwICYmIGUudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUgJiYgaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgICBjb25zdCBldnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCBlKVxuICAgICAgICAgIGV2dC5xS2V5RXZlbnQgPSB0cnVlXG4gICAgICAgICAgZS5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIGUuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgIHJvb3RSZWYudmFsdWUuZGlzcGF0Y2hFdmVudChldnQpXG5cbiAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgICAgLy8gZm9yIHJpcHBsZVxuICAgICAgICAgIGUucUtleUV2ZW50ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgICAgfVxuXG4gICAgICBjbGVhbnVwKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwIChkZXN0cm95aW5nKSB7XG4gICAgICBjb25zdCBibHVyVGFyZ2V0ID0gYmx1clRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRlc3Ryb3lpbmcgIT09IHRydWVcbiAgICAgICAgJiYgKHRvdWNoVGFyZ2V0ID09PSByb290UmVmLnZhbHVlIHx8IG1vdXNlVGFyZ2V0ID09PSByb290UmVmLnZhbHVlKVxuICAgICAgICAmJiBibHVyVGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICYmIGJsdXJUYXJnZXQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICBibHVyVGFyZ2V0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSlcbiAgICAgICAgYmx1clRhcmdldC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmICh0b3VjaFRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBpZiAobG9jYWxUb3VjaFRhcmdldEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgICAgbG9jYWxUb3VjaFRhcmdldEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIH1cbiAgICAgICAgdG91Y2hUYXJnZXQgPSBsb2NhbFRvdWNoVGFyZ2V0RWwgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChtb3VzZVRhcmdldCA9PT0gcm9vdFJlZi52YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25QcmVzc0VuZCwgcGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIG1vdXNlVGFyZ2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5Ym9hcmRUYXJnZXQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvblByZXNzRW5kLCB0cnVlKVxuICAgICAgICByb290UmVmLnZhbHVlICE9PSBudWxsICYmIHJvb3RSZWYudmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uUHJlc3NFbmQsIHBhc3NpdmVDYXB0dXJlKVxuICAgICAgICBrZXlib2FyZFRhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbCAmJiByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ3EtYnRuLS1hY3RpdmUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZGluZ0V2dCAoZXZ0KSB7XG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICBldnQucVNraXBSaXBwbGUgPSB0cnVlXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNsZWFudXAodHJ1ZSlcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBjbGljazogb25DbGljayB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpbm5lciA9IFtdXG5cbiAgICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBpbm5lci5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgbmFtZTogcHJvcHMuaWNvbixcbiAgICAgICAgICBsZWZ0OiBwcm9wcy5zdGFjayA9PT0gZmFsc2UgJiYgaGFzTGFiZWwudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgcm9sZTogJ2ltZycsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGhhc0xhYmVsLnZhbHVlID09PSB0cnVlICYmIGlubmVyLnB1c2goXG4gICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAnYmxvY2snIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgIClcblxuICAgICAgaW5uZXIgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGlubmVyKVxuXG4gICAgICBpZiAocHJvcHMuaWNvblJpZ2h0ICE9PSB2b2lkIDAgJiYgcHJvcHMucm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlubmVyLnB1c2goXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgbmFtZTogcHJvcHMuaWNvblJpZ2h0LFxuICAgICAgICAgICAgcmlnaHQ6IHByb3BzLnN0YWNrID09PSBmYWxzZSAmJiBoYXNMYWJlbC52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIHJvbGU6ICdpbWcnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZm9jdXMtaGVscGVyJyxcbiAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWZcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgcHJvcHMucGVyY2VudGFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1idG5fX3Byb2dyZXNzIGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJyArIChwcm9wcy5kYXJrUGVyY2VudGFnZSA9PT0gdHJ1ZSA/ICcgcS1idG5fX3Byb2dyZXNzLS1kYXJrJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1idG5fX3Byb2dyZXNzLWluZGljYXRvciBmaXQgYmxvY2snLFxuICAgICAgICAgICAgICBzdHlsZTogcGVyY2VudGFnZVN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuX19jb250ZW50IHRleHQtY2VudGVyIGNvbCBpdGVtcy1jZW50ZXIgcS1hbmNob3ItLXNraXAgJyArIGlubmVyQ2xhc3Nlcy52YWx1ZVxuICAgICAgICB9LCBpbm5lcilcbiAgICAgIClcblxuICAgICAgcHJvcHMubG9hZGluZyAhPT0gbnVsbCAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICB9LCAoKSA9PiAoXG4gICAgICAgICAgcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgICAgICAgfSwgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwID8gc2xvdHMubG9hZGluZygpIDogWyBoKFFTcGlubmVyKSBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgKSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKFxuICAgICAgICAgIGxpbmtUYWcudmFsdWUsXG4gICAgICAgICAgbm9kZVByb3BzLnZhbHVlLFxuICAgICAgICAgIGNoaWxkXG4gICAgICAgICksXG4gICAgICAgIFsgW1xuICAgICAgICAgIFJpcHBsZSxcbiAgICAgICAgICByaXBwbGUudmFsdWUsXG4gICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgIHJpcHBsZVByb3BzLnZhbHVlXG4gICAgICAgIF0gXVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJtYXRjaGVzIiwiY3NzIl0sIm1hcHBpbmdzIjoiOztBQUVPLE1BQU0sa0JBQWtCO0FBQUEsRUFDN0IsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUNOO0FBRU8sTUFBTSxlQUFlO0FBQUEsRUFDMUIsTUFBTTtBQUNSO0FBRWUsU0FBQSxRQUFVLE9BQU8sUUFBUSxpQkFBaUI7QUFFdkQsU0FBTyxTQUFTLE1BQ2QsTUFBTSxTQUFTLFNBQ1gsRUFBRSxVQUFVLE1BQU0sUUFBUSxRQUFRLEdBQUksTUFBTyxNQUFNLFlBQWMsTUFBTSxLQUFNLElBQzdFLElBQ0w7QUFDSDtBQ2RBLE1BQU0saUJBQWlCO0FBRXZCLE1BQU0sU0FBUyxPQUFLO0FBQ3BCLE1BQU0sUUFBUSxPQUFLLFlBQWE7QUFFaEMsTUFBTSxTQUFTO0FBQUEsRUFDYixRQUFRLE9BQUssT0FBUTtBQUFBLEVBQ3JCLFNBQVM7QUFBQSxFQUNULE9BQU8sT0FBSyxNQUFPO0FBQUEsRUFDbkIsUUFBUSxPQUFLLE9BQVE7QUFBQSxFQUNyQixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixPQUFPLE9BQUssZ0JBQWlCO0FBQUEsRUFDN0IsT0FBTyxPQUFLLG1CQUFvQjtBQUNsQztBQUVBLE1BQU0sU0FBUztBQUFBLEVBQ2IsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFB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
