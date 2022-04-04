import { reactive, getCurrentInstance, watch, onBeforeMount, onUnmounted, onActivated, onDeactivated, ref, onMounted, provide, computed, inject, nextTick, createApp, onBeforeUnmount, h, isVNode, defineComponent, createVNode, Teleport, Transition, withDirectives, mergeProps, vShow, openBlock, createBlock, resolveDynamicComponent, normalizeClass, normalizeStyle, resolveComponent, resolveDirective, withCtx, createElementVNode, renderSlot, toDisplayString, createElementBlock, Fragment, renderList, createCommentVNode, onUpdated, createTextVNode, pushScopeId, popScopeId, withModifiers, normalizeProps, guardReactiveProps, vModelText, toRefs, withKeys, toRaw, TransitionGroup, Comment } from "vue";
var context = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: true
};
reactive(context);
var Context = reactive(context);
var toNumber = (val) => {
  if (val == null)
    return 0;
  if (isString(val)) {
    val = parseFloat(val);
    val = Number.isNaN(val) ? 0 : val;
    return val;
  }
  if (isBool(val))
    return Number(val);
  return val;
};
var isHTMLSupportImage = (val) => {
  if (val == null) {
    return false;
  }
  return val.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg)$/.test(val);
};
var isHTMLSupportVideo = (val) => {
  if (val == null) {
    return false;
  }
  return val.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(val);
};
var isString = (val) => typeof val === "string";
var isBool = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isObject = (val) => typeof val === "object" && val !== null;
var isArray = (val) => Array.isArray(val);
var isURL = (val) => {
  if (!val) {
    return false;
  }
  return /^(http)|(\.*\/)/.test(val);
};
var isEmpty = (val) => val === void 0 || val === null || val === "" || Array.isArray(val) && !val.length;
var removeItem = (arr, item) => {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
};
var throttle = function(method, mustRunDelay) {
  if (mustRunDelay === void 0) {
    mustRunDelay = 200;
  }
  var timer;
  var start = 0;
  return function loop() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var now = Date.now();
    var elapsed = now - start;
    if (!start) {
      start = now;
    }
    if (timer) {
      window.clearTimeout(timer);
    }
    if (elapsed >= mustRunDelay) {
      method.apply(this, args);
      start = now;
    } else {
      timer = window.setTimeout(() => {
        loop.apply(this, args);
      }, mustRunDelay - elapsed);
    }
  };
};
var createCache = (max2) => {
  var cache = [];
  return {
    cache,
    has(key) {
      return this.cache.includes(key);
    },
    add(key) {
      if (this.has(key)) {
        return;
      }
      this.cache.length === max2 && cache.shift();
      this.cache.push(key);
    },
    remove(key) {
      this.has(key) && removeItem(this.cache, key);
    },
    clear() {
      this.cache.length = 0;
    }
  };
};
var linear = (value) => value;
var cubic = (value) => Math.pow(value, 3);
var easeInOutCubic = (value) => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
function parseFormat(format, time) {
  var scannedTimes = Object.values(time);
  var scannedFormats = ["DD", "HH", "mm", "ss"];
  var padValues = [24, 60, 60, 1e3];
  scannedFormats.forEach((scannedFormat, index) => {
    if (!format.includes(scannedFormat)) {
      scannedTimes[index + 1] += scannedTimes[index] * padValues[index];
    } else {
      format = format.replace(scannedFormat, String(scannedTimes[index]).padStart(2, "0"));
    }
  });
  if (format.includes("S")) {
    var ms = String(scannedTimes[scannedTimes.length - 1]).padStart(3, "0");
    if (format.includes("SSS")) {
      format = format.replace("SSS", ms);
    } else if (format.includes("SS")) {
      format = format.replace("SS", ms.slice(0, 2));
    } else {
      format = format.replace("S", ms.slice(0, 1));
    }
  }
  return format;
}
var dt = (value, defaultText) => value == null ? defaultText : value;
var inBrowser = () => typeof window !== "undefined";
var uniq = (arr) => [...new Set(arr)];
function kebabCase(str) {
  var ret = str.replace(/([A-Z])/g, " $1").trim();
  return ret.split(" ").join("-").toLowerCase();
}
function asyncGeneratorStep$b(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$b(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$b(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$b(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function getLeft(element) {
  var {
    left
  } = element.getBoundingClientRect();
  return left + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function getTop$1(element) {
  var {
    top
  } = element.getBoundingClientRect();
  return top + (document.body.scrollTop || document.documentElement.scrollTop);
}
function getScrollTop(element) {
  var top = "scrollTop" in element ? element.scrollTop : element.pageYOffset;
  return Math.max(top, 0);
}
function getScrollLeft(element) {
  var left = "scrollLeft" in element ? element.scrollLeft : element.pageXOffset;
  return Math.max(left, 0);
}
function inViewport(_x) {
  return _inViewport.apply(this, arguments);
}
function _inViewport() {
  _inViewport = _asyncToGenerator$b(function* (element) {
    yield doubleRaf();
    var {
      top,
      bottom,
      left,
      right
    } = element.getBoundingClientRect();
    var {
      innerWidth,
      innerHeight
    } = window;
    var xInViewport = left <= innerWidth && right >= 0;
    var yInViewport = top <= innerHeight && bottom >= 0;
    return xInViewport && yInViewport;
  });
  return _inViewport.apply(this, arguments);
}
function getTranslate(el) {
  var {
    transform
  } = window.getComputedStyle(el);
  return +transform.slice(transform.lastIndexOf(",") + 2, transform.length - 1);
}
function getParentScroller(el) {
  var element = el;
  while (element) {
    if (!element.parentNode) {
      break;
    }
    element = element.parentNode;
    if (element === document.body || element === document.documentElement) {
      break;
    }
    var scrollRE = /(scroll|auto)/;
    var {
      overflowY,
      overflow
    } = window.getComputedStyle(element);
    if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
      return element;
    }
  }
  return window;
}
function getAllParentScroller(el) {
  var allParentScroller = [];
  var element = el;
  while (element !== window) {
    element = getParentScroller(element);
    allParentScroller.push(element);
  }
  return allParentScroller;
}
var isRem = (value) => isString(value) && value.endsWith("rem");
var isPx = (value) => isString(value) && value.endsWith("px") || isNumber(value);
var isPercent = (value) => isString(value) && value.endsWith("%");
var isVw = (value) => isString(value) && value.endsWith("vw");
var isVh = (value) => isString(value) && value.endsWith("vh");
var toPxNum = (value) => {
  if (isNumber(value)) {
    return value;
  }
  if (isPx(value)) {
    return +value.replace("px", "");
  }
  if (isVw(value)) {
    return +value.replace("vw", "") * window.innerWidth / 100;
  }
  if (isVh(value)) {
    return +value.replace("vh", "") * window.innerHeight / 100;
  }
  if (isRem(value)) {
    var num = +value.replace("rem", "");
    var rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
    return num * parseFloat(rootFontSize);
  }
  if (isString(value)) {
    return toNumber(value);
  }
  return 0;
};
var toSizeUnit = (value) => {
  if (value == null) {
    return void 0;
  }
  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value;
  }
  return toPxNum(value) + "px";
};
function requestAnimationFrame(fn) {
  return globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(fn) : globalThis.setTimeout(fn, 16);
}
function cancelAnimationFrame(handle) {
  globalThis.cancelAnimationFrame ? globalThis.cancelAnimationFrame(handle) : globalThis.clearTimeout(handle);
}
function nextTickFrame(fn) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn);
  });
}
function doubleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}
function scrollTo(element, _ref) {
  var {
    top = 0,
    left = 0,
    duration = 300,
    animation
  } = _ref;
  var startTime = Date.now();
  var scrollTop = getScrollTop(element);
  var scrollLeft = getScrollLeft(element);
  return new Promise((resolve) => {
    var frame = () => {
      var progress2 = (Date.now() - startTime) / duration;
      if (progress2 < 1) {
        var nextTop = scrollTop + (top - scrollTop) * animation(progress2);
        var nextLeft = scrollLeft + (left - scrollLeft) * animation(progress2);
        element.scrollTo(nextLeft, nextTop);
        requestAnimationFrame(frame);
      } else {
        element.scrollTo(left, top);
        resolve();
      }
    };
    requestAnimationFrame(frame);
  });
}
function formatStyleVars(styleVars) {
  return Object.entries(styleVars != null ? styleVars : {}).reduce((styles, _ref2) => {
    var [key, value] = _ref2;
    var cssVar = key.startsWith("--") ? key : "--" + kebabCase(key);
    styles[cssVar] = value;
    return styles;
  }, {});
}
function supportTouch() {
  var inBrowser2 = typeof window !== "undefined";
  return inBrowser2 && "ontouchstart" in window;
}
function _extends$d() {
  _extends$d = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var ANIMATION_DURATION$1 = 250;
function setStyles(element) {
  var {
    zIndex,
    position
  } = window.getComputedStyle(element);
  element.style.overflow = "hidden";
  element.style.overflowX = "hidden";
  element.style.overflowY = "hidden";
  position === "static" && (element.style.position = "relative");
  zIndex === "auto" && (element.style.zIndex = "1");
}
function computeRippleStyles(element, event) {
  var {
    top,
    left
  } = element.getBoundingClientRect();
  var {
    clientWidth,
    clientHeight
  } = element;
  var radius = Math.sqrt(Math.pow(clientWidth, 2) + Math.pow(clientHeight, 2)) / 2;
  var size = radius * 2;
  var localX = event.touches[0].clientX - left;
  var localY = event.touches[0].clientY - top;
  var centerX = (clientWidth - radius * 2) / 2;
  var centerY = (clientHeight - radius * 2) / 2;
  var x = localX - radius;
  var y = localY - radius;
  return {
    x,
    y,
    centerX,
    centerY,
    size
  };
}
function createRipple(event) {
  var _ripple = this._ripple;
  _ripple.removeRipple();
  if (_ripple.disabled || _ripple.tasker) {
    return;
  }
  var task = () => {
    _ripple.tasker = null;
    var {
      x,
      y,
      centerX,
      centerY,
      size
    } = computeRippleStyles(this, event);
    var ripple2 = document.createElement("div");
    ripple2.classList.add("var-ripple");
    ripple2.style.opacity = "0";
    ripple2.style.transform = "translate(" + x + "px, " + y + "px) scale3d(.3, .3, .3)";
    ripple2.style.width = size + "px";
    ripple2.style.height = size + "px";
    _ripple.color && (ripple2.style.backgroundColor = _ripple.color);
    ripple2.dataset.createdAt = String(performance.now());
    setStyles(this);
    this.appendChild(ripple2);
    window.setTimeout(() => {
      ripple2.style.transform = "translate(" + centerX + "px, " + centerY + "px) scale3d(1, 1, 1)";
      ripple2.style.opacity = ".25";
    }, 20);
  };
  _ripple.tasker = window.setTimeout(task, 60);
}
function removeRipple() {
  var _ripple = this._ripple;
  var task = () => {
    var ripples = this.querySelectorAll(".var-ripple");
    if (!ripples.length) {
      return;
    }
    var lastRipple = ripples[ripples.length - 1];
    var delay = ANIMATION_DURATION$1 - performance.now() + Number(lastRipple.dataset.createdAt);
    setTimeout(() => {
      lastRipple.style.opacity = "0";
      setTimeout(() => {
        var _lastRipple$parentNod;
        return (_lastRipple$parentNod = lastRipple.parentNode) == null ? void 0 : _lastRipple$parentNod.removeChild(lastRipple);
      }, ANIMATION_DURATION$1);
    }, delay);
  };
  _ripple.tasker ? setTimeout(task, 60) : task();
}
function forbidRippleTask() {
  var _ripple = this._ripple;
  if (!supportTouch()) {
    return;
  }
  if (!_ripple.touchmoveForbid) {
    return;
  }
  _ripple.tasker && window.clearTimeout(_ripple.tasker);
  _ripple.tasker = null;
}
function mounted$1(el, binding) {
  var _binding$value, _binding$value$touchm, _binding$value2;
  el._ripple = _extends$d({
    tasker: null
  }, (_binding$value = binding.value) != null ? _binding$value : {}, {
    touchmoveForbid: (_binding$value$touchm = (_binding$value2 = binding.value) == null ? void 0 : _binding$value2.touchmoveForbid) != null ? _binding$value$touchm : Context.touchmoveForbid,
    removeRipple: removeRipple.bind(el)
  });
  el.addEventListener("touchstart", createRipple, {
    passive: true
  });
  el.addEventListener("touchmove", forbidRippleTask, {
    passive: true
  });
  el.addEventListener("dragstart", removeRipple, {
    passive: true
  });
  document.addEventListener("touchend", el._ripple.removeRipple, {
    passive: true
  });
  document.addEventListener("touchcancel", el._ripple.removeRipple, {
    passive: true
  });
}
function unmounted(el) {
  el.removeEventListener("touchstart", createRipple);
  el.removeEventListener("touchmove", forbidRippleTask);
  el.removeEventListener("dragstart", removeRipple);
  document.removeEventListener("touchend", el._ripple.removeRipple);
  document.removeEventListener("touchcancel", el._ripple.removeRipple);
}
function updated$1(el, binding) {
  var _binding$value3, _binding$value$touchm2, _binding$value4;
  el._ripple = _extends$d({}, el._ripple, (_binding$value3 = binding.value) != null ? _binding$value3 : {}, {
    touchmoveForbid: (_binding$value$touchm2 = (_binding$value4 = binding.value) == null ? void 0 : _binding$value4.touchmoveForbid) != null ? _binding$value$touchm2 : Context.touchmoveForbid,
    tasker: null
  });
}
var Ripple = {
  mounted: mounted$1,
  unmounted,
  updated: updated$1,
  install(app) {
    app.directive("ripple", this);
  }
};
function positionValidator$3(position) {
  return ["top", "bottom", "right", "left", "center"].includes(position);
}
var props$S = {
  show: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: "center",
    validator: positionValidator$3
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: String
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  onRouteChange: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function resolveLock() {
  var lockCounts = Object.keys(Context.locks).length;
  lockCounts <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function addLock(uid) {
  Context.locks[uid] = 1;
  resolveLock();
}
function releaseLock(uid) {
  delete Context.locks[uid];
  resolveLock();
}
function useLock(props2, state, use2) {
  var {
    uid
  } = getCurrentInstance();
  if (use2) {
    watch(() => props2[use2], (newValue) => {
      if (newValue === false) {
        releaseLock(uid);
      } else if (newValue === true && props2[state] === true) {
        addLock(uid);
      }
    });
  }
  watch(() => props2[state], (newValue) => {
    if (use2 && props2[use2] === false) {
      return;
    }
    if (newValue === true) {
      addLock(uid);
    } else {
      releaseLock(uid);
    }
  });
  onBeforeMount(() => {
    if (use2 && props2[use2] === false) {
      return;
    }
    if (props2[state] === true) {
      addLock(uid);
    }
  });
  onUnmounted(() => {
    if (use2 && props2[use2] === false) {
      return;
    }
    if (props2[state] === true) {
      releaseLock(uid);
    }
  });
  onActivated(() => {
    if (use2 && props2[use2] === false) {
      return;
    }
    if (props2[state] === true) {
      addLock(uid);
    }
  });
  onDeactivated(() => {
    if (use2 && props2[use2] === false) {
      return;
    }
    if (props2[state] === true) {
      releaseLock(uid);
    }
  });
}
function useZIndex(source, count) {
  var zIndex = ref(Context.zIndex);
  watch(source, (newValue) => {
    if (newValue) {
      Context.zIndex += count;
      zIndex.value = Context.zIndex;
    }
  }, {
    immediate: true
  });
  return {
    zIndex
  };
}
var _excluded = ["collect", "clear"];
function asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$a(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$a(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends$c() {
  _extends$c = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
function pickProps(props2, propsKey) {
  return Array.isArray(propsKey) ? propsKey.reduce((pickedProps, key) => {
    pickedProps[key] = props2[key];
    return pickedProps;
  }, {}) : props2[propsKey];
}
function mount(component) {
  var app = createApp(component);
  var host = document.createElement("div");
  document.body.appendChild(host);
  return {
    instance: app.mount(host),
    unmount() {
      app.unmount();
      document.body.removeChild(host);
    }
  };
}
function mountInstance(component, props2, eventListener) {
  if (props2 === void 0) {
    props2 = {};
  }
  if (eventListener === void 0) {
    eventListener = {};
  }
  var Host = {
    setup() {
      return () => h(component, _extends$c({}, props2, eventListener));
    }
  };
  var {
    unmount: unmount2
  } = mount(Host);
  return {
    unmountInstance: unmount2
  };
}
function flatVNodes(subTree) {
  var vNodes = [];
  var flat = (subTree2) => {
    if (subTree2 != null && subTree2.component) {
      flat(subTree2 == null ? void 0 : subTree2.component.subTree);
      return;
    }
    if (Array.isArray(subTree2 == null ? void 0 : subTree2.children)) {
      subTree2.children.forEach((child) => {
        if (isVNode(child)) {
          vNodes.push(child);
          flat(child);
        }
      });
    }
  };
  flat(subTree);
  return vNodes;
}
function useAtChildrenCounter(key) {
  var instances = reactive([]);
  var parentInstance = getCurrentInstance();
  var sortInstances = () => {
    var vNodes = flatVNodes(parentInstance.subTree);
    instances.sort((a, b) => {
      return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode);
    });
  };
  var collect = (instance) => {
    instances.push(instance);
    sortInstances();
  };
  var clear2 = (instance) => {
    removeItem(instances, instance);
  };
  provide(key, {
    collect,
    clear: clear2,
    instances
  });
  var length = computed(() => instances.length);
  return {
    length
  };
}
function useAtParentIndex(key) {
  if (!keyInProvides(key)) {
    return {
      index: null
    };
  }
  var childrenCounter = inject(key);
  var {
    collect,
    clear: clear2,
    instances
  } = childrenCounter;
  var instance = getCurrentInstance();
  onMounted(() => {
    nextTick().then(() => collect(instance));
  });
  onUnmounted(() => {
    nextTick().then(() => clear2(instance));
  });
  var index = computed(() => instances.indexOf(instance));
  return {
    index
  };
}
function useChildren(key) {
  var childProviders = [];
  var collect = (childProvider) => {
    childProviders.push(childProvider);
  };
  var clear2 = (childProvider) => {
    removeItem(childProviders, childProvider);
  };
  var bindChildren = (parentProvider) => {
    provide(key, _extends$c({
      collect,
      clear: clear2
    }, parentProvider));
  };
  return {
    childProviders,
    bindChildren
  };
}
function useParent(key) {
  if (!keyInProvides(key)) {
    return {
      parentProvider: null,
      bindParent: null
    };
  }
  var rawParentProvider = inject(key);
  var {
    collect,
    clear: clear2
  } = rawParentProvider, parentProvider = _objectWithoutPropertiesLoose(rawParentProvider, _excluded);
  var bindParent = (childProvider) => {
    onMounted(() => collect(childProvider));
    onBeforeUnmount(() => clear2(childProvider));
  };
  return {
    parentProvider,
    bindParent
  };
}
function keyInProvides(key) {
  var instance = getCurrentInstance();
  return key in instance.provides;
}
function useValidation() {
  var errorMessage = ref("");
  var validate = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator$a(function* (rules, value, apis) {
      if (!isArray(rules) || !rules.length) {
        return true;
      }
      var resArr = yield Promise.all(rules.map((rule) => rule(value, apis)));
      return !resArr.some((res) => {
        if (res !== true) {
          errorMessage.value = String(res);
          return true;
        }
        return false;
      });
    });
    return function validate2(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var resetValidation = () => {
    errorMessage.value = "";
  };
  var validateWithTrigger = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator$a(function* (validateTrigger, trigger, rules, value, apis) {
      if (validateTrigger.includes(trigger)) {
        (yield validate(rules, value, apis)) && (errorMessage.value = "");
      }
    });
    return function validateWithTrigger2(_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    errorMessage,
    validate,
    resetValidation,
    validateWithTrigger
  };
}
function addRouteListener(cb) {
  onMounted(() => {
    window.addEventListener("hashchange", cb);
    window.addEventListener("popstate", cb);
  });
  onUnmounted(() => {
    window.removeEventListener("hashchange", cb);
    window.removeEventListener("popstate", cb);
  });
}
function useTeleport() {
  var disabled = ref(false);
  onActivated(() => {
    disabled.value = false;
  });
  onDeactivated(() => {
    disabled.value = true;
  });
  return {
    disabled
  };
}
function exposeApis(apis) {
  var instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
function _extends$b() {
  _extends$b = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Popup = defineComponent({
  name: "VarPopup",
  inheritAttrs: false,
  props: props$S,
  setup(props2, _ref) {
    var {
      slots,
      attrs
    } = _ref;
    var {
      zIndex
    } = useZIndex(() => props2.show, 3);
    var {
      disabled
    } = useTeleport();
    var hidePopup = () => {
      var _props$onUpdateShow;
      var {
        closeOnClickOverlay,
        onClickOverlay
      } = props2;
      onClickOverlay == null ? void 0 : onClickOverlay();
      if (!closeOnClickOverlay) {
        return;
      }
      (_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false);
    };
    useLock(props2, "show", "lockScroll");
    watch(() => props2.show, (newValue) => {
      var {
        onOpen,
        onClose
      } = props2;
      newValue ? onOpen == null ? void 0 : onOpen() : onClose == null ? void 0 : onClose();
    });
    addRouteListener(() => props2.onRouteChange == null ? void 0 : props2.onRouteChange());
    var renderOverlay = () => {
      var {
        overlayClass,
        overlayStyle
      } = props2;
      return createVNode("div", {
        "class": ["var-popup__overlay", overlayClass],
        "style": _extends$b({
          zIndex: zIndex.value - 1
        }, overlayStyle),
        "onClick": hidePopup
      }, null);
    };
    var renderContent = () => {
      return createVNode("div", mergeProps({
        "class": ["var-popup__content", "var-elevation--3", "var-popup--" + props2.position],
        "style": {
          zIndex: zIndex.value
        }
      }, attrs), [slots.default == null ? void 0 : slots.default()]);
    };
    var renderPopup = () => {
      var {
        onOpened,
        onClosed,
        show,
        overlay,
        transition,
        position
      } = props2;
      return createVNode(Transition, {
        "name": "var-fade",
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "var--box var-popup",
          "style": {
            zIndex: zIndex.value - 2
          }
        }, [overlay && renderOverlay(), createVNode(Transition, {
          "name": transition || "var-pop-" + position
        }, {
          default: () => [show && renderContent()]
        })]), [[vShow, show]])]
      });
    };
    return () => {
      var {
        teleport
      } = props2;
      if (teleport) {
        var _slot;
        return createVNode(Teleport, {
          "to": teleport,
          "disabled": disabled.value
        }, _isSlot$2(_slot = renderPopup()) ? _slot : {
          default: () => [_slot]
        });
      }
      return renderPopup();
    };
  }
});
Popup.install = function(app) {
  app.component(Popup.name, Popup);
};
var props$R = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  }
};
function asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$9(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$9(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function render$X(_ctx, _cache) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.isURL(_ctx.name) ? "img" : "i"), {
    class: normalizeClass(["var-icon", [_ctx.namespace + "--set", _ctx.isURL(_ctx.name) ? "var-icon__image" : _ctx.namespace + "-" + _ctx.nextName, _ctx.shrinking ? "var-icon--shrinking" : null]]),
    style: normalizeStyle({
      color: _ctx.color,
      transition: "transform " + _ctx.toNumber(_ctx.transition) + "ms",
      width: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
      height: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
      fontSize: _ctx.toSizeUnit(_ctx.size)
    }),
    src: _ctx.isURL(_ctx.name) ? _ctx.nextName : null,
    onClick: _ctx.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
var Icon = defineComponent({
  render: render$X,
  name: "VarIcon",
  props: props$R,
  setup(props2) {
    var nextName = ref("");
    var shrinking = ref(false);
    var handleNameChange = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$9(function* (newName, oldName) {
        var {
          transition
        } = props2;
        if (oldName == null || toNumber(transition) === 0) {
          nextName.value = newName;
          return;
        }
        shrinking.value = true;
        yield nextTick();
        setTimeout(() => {
          oldName != null && (nextName.value = newName);
          shrinking.value = false;
        }, toNumber(transition));
      });
      return function handleNameChange2(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    watch(() => props2.name, handleNameChange, {
      immediate: true
    });
    return {
      nextName,
      shrinking,
      isURL,
      toNumber,
      toSizeUnit
    };
  }
});
Icon.install = function(app) {
  app.component(Icon.name, Icon);
};
function _extends$a() {
  _extends$a = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var props$Q = _extends$a({
  show: {
    type: Boolean,
    default: false
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: true
  },
  onSelect: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
}, pickProps(props$S, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
var zhCN = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    "10": {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    "11": {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    "12": {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    "0": {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    "1": {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    "2": {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    "3": {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    "4": {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    "5": {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    "6": {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
};
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
function useLocale() {
  var packs2 = {};
  var pack2 = ref({});
  var add2 = (lang, pack3) => {
    pack3.lang = lang;
    packs2[lang] = pack3;
  };
  var use2 = (lang) => {
    if (!packs2[lang]) {
      console.warn("The " + lang + " does not exist. You can mount a language package using the add method");
      return {};
    }
    pack2.value = packs2[lang];
  };
  var merge2 = (lang, pack3) => {
    if (!packs2[lang]) {
      console.warn("The " + lang + " does not exist. You can mount a language package using the add method");
      return;
    }
    packs2[lang] = _extends$9({}, packs2[lang], pack3);
    use2(lang);
  };
  return {
    packs: packs2,
    pack: pack2,
    add: add2,
    use: use2,
    merge: merge2
  };
}
var {
  packs,
  pack,
  add: add$2,
  use,
  merge
} = useLocale();
add$2("zh-CN", zhCN);
use("zh-CN");
var Locale = {
  packs,
  pack,
  add: add$2,
  use,
  merge,
  useLocale
};
var _hoisted_1$H = {
  class: "var-action-sheet__title"
};
var _hoisted_2$t = ["onClick"];
var _hoisted_3$j = {
  class: "var-action-sheet__action-name"
};
function render$W(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_popup = resolveComponent("var-popup");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(_component_var_popup, mergeProps({
    class: "var-action-sheet__popup-radius",
    position: "bottom",
    overlay: _ctx.overlay,
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    "lock-scroll": _ctx.lockScroll,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    teleport: _ctx.teleport,
    show: _ctx.popupShow
  }, {
    "onUpdate:show": (value) => {
      var _ctx$$props$onUpdate, _ctx$$props;
      return (_ctx$$props$onUpdate = (_ctx$$props = _ctx.$props)["onUpdate:show"]) == null ? void 0 : _ctx$$props$onUpdate.call(_ctx$$props, value);
    }
  }, {
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange
  }), {
    default: withCtx(() => [createElementVNode("div", mergeProps({
      class: "var-action-sheet var--box"
    }, _ctx.$attrs), [renderSlot(_ctx.$slots, "title", {}, () => [createElementVNode("div", _hoisted_1$H, toDisplayString(_ctx.dt(_ctx.title, _ctx.pack.actionSheetTitle)), 1)]), renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.actions, (action) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["var-action-sheet__action-item", [action.className, action.disabled ? "var-action-sheet--disabled" : null]]),
        key: action.name,
        style: normalizeStyle({
          color: action.color
        }),
        onClick: ($event) => _ctx.handleSelect(action)
      }, [action.icon ? (openBlock(), createBlock(_component_var_icon, {
        key: 0,
        class: "var-action-sheet__action-icon",
        "var-action-sheet-cover": "",
        name: action.icon,
        size: action.iconSize
      }, null, 8, ["name", "size"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_3$j, toDisplayString(action.name), 1)], 14, _hoisted_2$t)), [[_directive_ripple, {
        disabled: action.disabled
      }]]);
    }), 128))])], 16)]),
    _: 3
  }, 16, ["overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var VarActionSheet = defineComponent({
  render: render$W,
  name: "VarActionSheet",
  directives: {
    Ripple
  },
  components: {
    VarPopup: Popup,
    VarIcon: Icon
  },
  inheritAttrs: false,
  props: props$Q,
  setup(props2) {
    var popupShow = ref(false);
    var handleSelect = (action) => {
      var _props$onUpdateShow;
      if (action.disabled) {
        return;
      }
      var {
        closeOnClickAction,
        onSelect
      } = props2;
      onSelect == null ? void 0 : onSelect(action);
      closeOnClickAction && ((_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false));
    };
    watch(() => props2.show, (newValue) => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    return {
      popupShow,
      pack,
      dt,
      handleSelect
    };
  }
});
var singletonOptions$3;
function ActionSheet(options) {
  if (!inBrowser()) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    ActionSheet.close();
    var reactiveActionSheetOptions = reactive(options);
    reactiveActionSheetOptions.teleport = "body";
    singletonOptions$3 = reactiveActionSheetOptions;
    var {
      unmountInstance
    } = mountInstance(VarActionSheet, reactiveActionSheetOptions, {
      onSelect: (action) => {
        reactiveActionSheetOptions.onSelect == null ? void 0 : reactiveActionSheetOptions.onSelect(action);
        resolve(action);
      },
      onClose: () => {
        reactiveActionSheetOptions.onClose == null ? void 0 : reactiveActionSheetOptions.onClose();
        resolve("close");
      },
      onClosed: () => {
        reactiveActionSheetOptions.onClosed == null ? void 0 : reactiveActionSheetOptions.onClosed();
        unmountInstance();
        singletonOptions$3 === reactiveActionSheetOptions && (singletonOptions$3 = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions$3 === reactiveActionSheetOptions && (singletonOptions$3 = null);
      },
      "onUpdate:show": (value) => {
        reactiveActionSheetOptions.show = value;
      }
    });
    reactiveActionSheetOptions.show = true;
  });
}
ActionSheet.Component = VarActionSheet;
VarActionSheet.install = function(app) {
  app.component(VarActionSheet.name, VarActionSheet);
};
ActionSheet.close = () => {
  if (singletonOptions$3 != null) {
    var prevSingletonOptions = singletonOptions$3;
    singletonOptions$3 = null;
    nextTick().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};
ActionSheet.install = function(app) {
  app.component(VarActionSheet.name, VarActionSheet);
};
function positionValidator$2(position) {
  var validPositions = ["left", "center", "right"];
  return validPositions.includes(position);
}
var props$P = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: positionValidator$2
  },
  elevation: {
    type: Boolean,
    default: true
  }
};
var _hoisted_1$G = {
  class: "var-app-bar__left"
};
var _hoisted_2$s = {
  key: 0,
  class: "var-app-bar__title"
};
var _hoisted_3$i = {
  class: "var-app-bar__right"
};
function render$V(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-app-bar", {
      "var-elevation--3": _ctx.elevation
    }]),
    style: normalizeStyle({
      background: _ctx.color,
      color: _ctx.textColor
    })
  }, [createElementVNode("div", _hoisted_1$G, [renderSlot(_ctx.$slots, "left"), _ctx.titlePosition === "left" ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-app-bar__title",
    style: normalizeStyle({
      paddingLeft: _ctx.paddingLeft
    })
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 4)) : createCommentVNode("v-if", true)]), _ctx.titlePosition === "center" ? (openBlock(), createElementBlock("div", _hoisted_2$s, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_3$i, [_ctx.titlePosition === "right" ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-app-bar__title",
    style: normalizeStyle({
      paddingRight: _ctx.paddingRight
    })
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 4)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "right")])], 6);
}
var AppBar = defineComponent({
  render: render$V,
  name: "VarAppBar",
  props: props$P,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var paddingLeft = ref();
    var paddingRight = ref();
    var computePadding = () => {
      paddingLeft.value = slots.left ? 0 : void 0;
      paddingRight.value = slots.right ? 0 : void 0;
    };
    onMounted(computePadding);
    onUpdated(computePadding);
    return {
      paddingLeft,
      paddingRight
    };
  }
});
AppBar.install = function(app) {
  app.component(AppBar.name, AppBar);
};
function typeValidator$6(type) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(type);
}
function sizeValidator$3(size) {
  return ["normal", "mini", "small", "large"].includes(size);
}
var props$O = {
  type: {
    type: String,
    default: "circle",
    validator: typeValidator$6
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: sizeValidator$3
  },
  color: {
    type: String,
    default: "currentColor"
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  }
};
var _withScopeId$2 = (n) => (pushScopeId(""), n = n(), popScopeId(), n);
var _hoisted_1$F = {
  class: "var-loading"
};
var _hoisted_2$r = {
  key: 0,
  class: "var-loading__circle"
};
var _hoisted_3$h = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "25 25 50 50"
}, [/* @__PURE__ */ createElementVNode("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
})], -1));
var _hoisted_4$a = [_hoisted_3$h];
function render$U(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$F, [_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-loading__content", [_ctx.loading ? "var-loading__content--active" : null]])
  }, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true), _ctx.isShow ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["var--box var-loading__body", [_ctx.$slots.default ? "var-loading__inside" : null]])
  }, [_ctx.type === "circle" ? (openBlock(), createElementBlock("div", _hoisted_2$r, [createElementVNode("span", {
    class: "var-loading__circle-block",
    style: normalizeStyle({
      width: _ctx.getRadius * 2 + "px",
      height: _ctx.getRadius * 2 + "px",
      color: _ctx.color
    })
  }, _hoisted_4$a, 4)])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loadingTypeDict, (nums, key) => {
    return openBlock(), createElementBlock(Fragment, {
      key
    }, [_ctx.type === key ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass("var-loading__" + key + " var-loading__" + key + "-" + _ctx.size)
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(nums, (num) => {
      return openBlock(), createElementBlock("div", {
        key: num + key,
        style: normalizeStyle({
          backgroundColor: _ctx.color
        }),
        class: normalizeClass("var-loading__" + key + "-item var-loading__" + key + "-item-" + _ctx.size)
      }, null, 6);
    }), 128))], 2)) : createCommentVNode("v-if", true)], 64);
  }), 128)), _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["var-loading__description", "var-loading__description--" + _ctx.size]),
    style: normalizeStyle({
      color: _ctx.color
    })
  }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(_ctx.description), 1)])], 6)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true)]);
}
var Loading = defineComponent({
  render: render$U,
  name: "VarLoading",
  props: props$O,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    };
    var sizeDict = {
      mini: 9,
      small: 12,
      normal: 15,
      large: 18
    };
    var getRadius = computed(() => {
      return props2.radius ? toNumber(props2.radius) : sizeDict[props2.size];
    });
    var isShow = computed(() => {
      if (!(slots.default != null && slots.default()))
        return true;
      return props2.loading;
    });
    return {
      loadingTypeDict,
      getRadius,
      isShow
    };
  }
});
Loading.install = function(app) {
  app.component(Loading.name, Loading);
};
function typeValidator$5(type) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(type);
}
function sizeValidator$2(size) {
  return ["normal", "mini", "small", "large"].includes(size);
}
var props$N = {
  type: {
    type: String,
    default: "default",
    validator: typeValidator$5
  },
  size: {
    type: String,
    default: "normal",
    validator: sizeValidator$2
  },
  loading: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: false
  },
  loadingRadius: {
    type: [Number, String],
    default: 12
  },
  loadingType: pickProps(props$O, "type"),
  loadingSize: pickProps(props$O, "size"),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
var _hoisted_1$E = ["disabled"];
function render$T(_ctx, _cache) {
  var _component_var_loading = resolveComponent("var-loading");
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", {
    class: normalizeClass(["var-button var--box", ["var-button--" + _ctx.size, _ctx.block ? "var--flex var-button--block" : "var--inline-flex", _ctx.disabled ? "var-button--disabled" : null, _ctx.text ? "var-button--text-" + _ctx.type : "var-button--" + _ctx.type, _ctx.text ? "var-button--text" : "var-elevation--2", _ctx.text && _ctx.disabled ? "var-button--text-disabled" : null, _ctx.round ? "var-button--round" : null, _ctx.outline ? "var-button--outline" : null]]),
    style: normalizeStyle({
      color: _ctx.textColor,
      background: _ctx.color
    }),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    }),
    onTouchstart: _cache[1] || (_cache[1] = function() {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    })
  }, [_ctx.loading || _ctx.pending ? (openBlock(), createBlock(_component_var_loading, {
    key: 0,
    class: "var-button__loading",
    "var-button-cover": "",
    type: _ctx.loadingType,
    size: _ctx.loadingSize,
    radius: _ctx.loadingRadius
  }, null, 8, ["type", "size", "radius"])) : createCommentVNode("v-if", true), createElementVNode("div", {
    class: normalizeClass(["var-button__content", [_ctx.loading || _ctx.pending ? "var-button--hidden" : null]])
  }, [renderSlot(_ctx.$slots, "default")], 2)], 46, _hoisted_1$E)), [[_directive_ripple, {
    disabled: _ctx.disabled || !_ctx.ripple
  }]]);
}
var Button = defineComponent({
  render: render$T,
  name: "VarButton",
  components: {
    VarLoading: Loading
  },
  directives: {
    Ripple
  },
  props: props$N,
  setup(props2) {
    var pending = ref(false);
    var attemptAutoLoading = (result) => {
      if (props2.autoLoading) {
        pending.value = true;
        Promise.resolve(result).finally(() => {
          pending.value = false;
        });
      }
    };
    var handleClick = (e) => {
      var {
        loading: loading2,
        disabled,
        onClick
      } = props2;
      if (!onClick || loading2 || disabled || pending.value) {
        return;
      }
      attemptAutoLoading(onClick(e));
    };
    var handleTouchstart = (e) => {
      var {
        loading: loading2,
        disabled,
        onTouchstart
      } = props2;
      if (!onTouchstart || loading2 || disabled || pending.value) {
        return;
      }
      attemptAutoLoading(onTouchstart(e));
    };
    return {
      pending,
      handleClick,
      handleTouchstart
    };
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
};
var props$M = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  }
};
function render$S(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_button = resolveComponent("var-button");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: _ctx.disabled
  }, [createElementVNode("div", {
    class: normalizeClass(["var-back-top", [_ctx.show ? "var-back-top--active" : null]]),
    ref: "backTopEl",
    style: normalizeStyle({
      right: _ctx.toSizeUnit(_ctx.right),
      bottom: _ctx.toSizeUnit(_ctx.bottom)
    }),
    onClick: _cache[0] || (_cache[0] = withModifiers(function() {
      return _ctx.click && _ctx.click(...arguments);
    }, ["stop"]))
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(_component_var_button, {
    type: "primary",
    round: "",
    "var-back-top-cover": ""
  }, {
    default: withCtx(() => [createVNode(_component_var_icon, {
      name: "chevron-up"
    })]),
    _: 1
  })])], 6)], 8, ["disabled"]);
}
var BackTop = defineComponent({
  render: render$S,
  name: "VarBackTop",
  components: {
    VarButton: Button,
    VarIcon: Icon
  },
  props: props$M,
  setup(props2) {
    var show = ref(false);
    var backTopEl = ref(null);
    var disabled = ref(true);
    var target;
    var click = (event) => {
      props2.onClick == null ? void 0 : props2.onClick(event);
      var left = getScrollLeft(target);
      scrollTo(target, {
        left,
        duration: props2.duration,
        animation: easeInOutCubic
      });
    };
    var scroll = () => {
      show.value = getScrollTop(target) >= toPxNum(props2.visibilityHeight);
    };
    var throttleScroll = throttle(scroll, 200);
    var getTarget = () => {
      var {
        target: target2
      } = props2;
      if (isString(target2)) {
        var el = document.querySelector(props2.target);
        if (!el) {
          throw Error("[Varlet] BackTop: target element cannot found");
        }
        return el;
      }
      if (isObject(target2))
        return target2;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    onMounted(() => {
      target = props2.target ? getTarget() : getParentScroller(backTopEl.value);
      target.addEventListener("scroll", throttleScroll);
      disabled.value = false;
    });
    onBeforeUnmount(() => {
      target.removeEventListener("scroll", throttleScroll);
    });
    return {
      disabled,
      show,
      backTopEl,
      toSizeUnit,
      click
    };
  }
});
BackTop.install = function(app) {
  app.component(BackTop.name, BackTop);
};
function typeValidator$4(type) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(type);
}
function positionValidator$1(position) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(position);
}
var props$L = {
  type: {
    type: String,
    default: "default",
    validator: typeValidator$4
  },
  hidden: {
    type: Boolean,
    default: false
  },
  dot: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: positionValidator$1
  },
  icon: {
    type: String
  }
};
var _hoisted_1$D = {
  class: "var-badge var--box"
};
var _hoisted_2$q = {
  key: 1
};
function render$R(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$D, [createVNode(Transition, {
    name: "var-badge-fade"
  }, {
    default: withCtx(() => [withDirectives(createElementVNode("span", mergeProps(_ctx.$attrs, {
      class: ["var-badge__content", _ctx.contentClass],
      style: {
        background: _ctx.color
      }
    }), [_ctx.icon && !_ctx.dot ? (openBlock(), createBlock(_component_var_icon, {
      key: 0,
      name: _ctx.icon,
      size: "10px"
    }, null, 8, ["name"])) : (openBlock(), createElementBlock("span", _hoisted_2$q, toDisplayString(_ctx.values), 1))], 16), [[vShow, !_ctx.hidden]])]),
    _: 1
  }), renderSlot(_ctx.$slots, "default")]);
}
var Badge = defineComponent({
  render: render$R,
  name: "VarBadge",
  components: {
    VarIcon: Icon
  },
  inheritAttrs: false,
  props: props$L,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var contentClass = computed(() => {
      var {
        type,
        position,
        dot,
        icon: icon2
      } = props2;
      var positionBasic = slots.default && "var-badge__position var-badge--" + position;
      var dotClass = dot && "var-badge__dot";
      var positionClass = getPositionClass();
      var iconClass = icon2 && "var-badge__icon";
      return ["var-badge--" + type, positionBasic, dotClass, positionClass, iconClass];
    });
    var values = computed(() => {
      var {
        dot,
        value,
        maxValue
      } = props2;
      if (dot)
        return "";
      if (value !== void 0 && maxValue !== void 0 && toNumber(value) > maxValue)
        return maxValue + "+";
      return value;
    });
    var getPositionClass = () => {
      var {
        position,
        dot
      } = props2;
      if (dot && position.includes("right"))
        return "var-badge__dot--right";
      if (dot && position.includes("left"))
        return "var-badge__dot--left";
    };
    return {
      values,
      contentClass
    };
  }
});
Badge.install = function(app) {
  app.component(Badge.name, Badge);
};
function fitValidator$1(fit) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(fit);
}
var props$K = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fitValidator$1,
    default: "cover"
  },
  height: {
    type: [String, Number]
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  }
};
var _hoisted_1$C = ["src", "alt"];
var _hoisted_2$p = {
  key: 0,
  class: "var-card__title"
};
var _hoisted_3$g = {
  key: 0,
  class: "var-card__subtitle"
};
var _hoisted_4$9 = {
  key: 0,
  class: "var-card__description"
};
var _hoisted_5$7 = {
  key: 0,
  class: "var-card__footer"
};
function render$Q(_ctx, _cache) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-card", [_ctx.elevation ? "var-elevation--" + _ctx.elevation : "var-elevation--2"]]),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "image", {}, () => [_ctx.src ? (openBlock(), createElementBlock("img", {
    key: 0,
    class: "var-card__image",
    style: normalizeStyle({
      objectFit: _ctx.fit,
      height: _ctx.toSizeUnit(_ctx.height)
    }),
    src: _ctx.src,
    alt: _ctx.alt
  }, null, 12, _hoisted_1$C)) : createCommentVNode("v-if", true)]), renderSlot(_ctx.$slots, "title", {}, () => [_ctx.title ? (openBlock(), createElementBlock("div", _hoisted_2$p, toDisplayString(_ctx.title), 1)) : createCommentVNode("v-if", true)]), renderSlot(_ctx.$slots, "subtitle", {}, () => [_ctx.subtitle ? (openBlock(), createElementBlock("div", _hoisted_3$g, toDisplayString(_ctx.subtitle), 1)) : createCommentVNode("v-if", true)]), renderSlot(_ctx.$slots, "description", {}, () => [_ctx.description ? (openBlock(), createElementBlock("div", _hoisted_4$9, toDisplayString(_ctx.description), 1)) : createCommentVNode("v-if", true)]), _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_5$7, [renderSlot(_ctx.$slots, "extra")])) : createCommentVNode("v-if", true)], 2)), [[_directive_ripple, {
    disabled: !_ctx.ripple
  }]]);
}
var Card = defineComponent({
  render: render$Q,
  name: "VarCard",
  directives: {
    Ripple
  },
  props: props$K,
  setup() {
    return {
      toSizeUnit
    };
  }
});
Card.install = function(app) {
  app.component(Card.name, Card);
};
var props$J = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  desc: {
    type: String
  },
  border: {
    type: Boolean,
    default: false
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descClass: {
    type: String
  },
  extraClass: {
    type: String
  }
};
var _hoisted_1$B = {
  class: "var-cell__content"
};
function render$P(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-cell", [_ctx.border ? "var-cell--border" : null]])
  }, [_ctx.$slots.icon || _ctx.icon ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-cell__icon", [_ctx.iconClass ? _ctx.iconClass : null]])
  }, [renderSlot(_ctx.$slots, "icon", {}, () => [createVNode(_component_var_icon, {
    class: "var--flex",
    name: _ctx.icon
  }, null, 8, ["name"])])], 2)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$B, [createElementVNode("div", {
    class: normalizeClass(["var-cell__title", [_ctx.titleClass ? _ctx.titleClass : null]])
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])], 2), _ctx.$slots.desc || _ctx.desc ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-cell__desc", [_ctx.descClass ? _ctx.descClass : null]])
  }, [renderSlot(_ctx.$slots, "desc", {}, () => [createTextVNode(toDisplayString(_ctx.desc), 1)])], 2)) : createCommentVNode("v-if", true)]), _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["var-cell__extra", [_ctx.extraClass ? _ctx.extraClass : null]])
  }, [renderSlot(_ctx.$slots, "extra")], 2)) : createCommentVNode("v-if", true)], 2);
}
var Cell = defineComponent({
  render: render$P,
  name: "VarCell",
  components: {
    VarIcon: Icon
  },
  props: props$J
});
Cell.install = function(app) {
  app.component(Cell.name, Cell);
};
var props$I = {
  errorMessage: {
    type: String,
    default: ""
  },
  maxlengthText: {
    type: String,
    default: ""
  }
};
var _hoisted_1$A = {
  key: 0,
  class: "var-form-details"
};
var _hoisted_2$o = {
  class: "var-form-details__message"
};
var _hoisted_3$f = {
  class: "var-form-details__length"
};
function render$O(_ctx, _cache) {
  return openBlock(), createBlock(Transition, {
    name: "var-form-details"
  }, {
    default: withCtx(() => [_ctx.errorMessage || _ctx.maxlengthText ? (openBlock(), createElementBlock("div", _hoisted_1$A, [createElementVNode("div", _hoisted_2$o, toDisplayString(_ctx.errorMessage), 1), createElementVNode("div", _hoisted_3$f, toDisplayString(_ctx.maxlengthText), 1)])) : createCommentVNode("v-if", true)]),
    _: 1
  });
}
var FormDetails = defineComponent({
  render: render$O,
  name: "VarFormDetails",
  props: props$I
});
FormDetails.install = function(app) {
  app.component(FormDetails.name, FormDetails);
};
var props$H = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
var CHECKBOX_GROUP_COUNT_CHECKBOX_KEY = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function useCheckboxes() {
  var {
    bindChildren,
    childProviders
  } = useChildren(CHECKBOX_GROUP_BIND_CHECKBOX_KEY);
  var {
    length
  } = useAtChildrenCounter(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY);
  return {
    length,
    checkboxes: childProviders,
    bindCheckboxes: bindChildren
  };
}
function useCheckboxGroup() {
  var {
    bindParent,
    parentProvider
  } = useParent(CHECKBOX_GROUP_BIND_CHECKBOX_KEY);
  var {
    index
  } = useAtParentIndex(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY);
  return {
    index,
    checkboxGroup: parentProvider,
    bindCheckboxGroup: bindParent
  };
}
var FORM_BIND_FORM_ITEM_KEY = Symbol("FORM_BIND_FORM_ITEM_KEY");
function useForm() {
  var {
    bindParent,
    parentProvider
  } = useParent(FORM_BIND_FORM_ITEM_KEY);
  return {
    bindForm: bindParent,
    form: parentProvider
  };
}
function useFormItems() {
  var {
    bindChildren,
    childProviders
  } = useChildren(FORM_BIND_FORM_ITEM_KEY);
  return {
    formItems: childProviders,
    bindFormItems: bindChildren
  };
}
var _hoisted_1$z = {
  class: "var-checkbox"
};
function render$N(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", {
    class: "var-checkbox__wrap",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [createElementVNode("div", _hoisted_1$z, [withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-checkbox__action", [_ctx.checked ? "var-checkbox--checked" : "var-checkbox--unchecked", _ctx.errorMessage || _ctx.checkboxGroupErrorMessage ? "var-checkbox--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-checkbox--disabled" : null]]),
    style: normalizeStyle({
      color: _ctx.checked ? _ctx.checkedColor : _ctx.uncheckedColor
    })
  }, [_ctx.checked ? renderSlot(_ctx.$slots, "checked-icon", {
    key: 0
  }, () => [createVNode(_component_var_icon, {
    class: normalizeClass(["var-checkbox__icon", [_ctx.withAnimation ? "var-checkbox--with-animation" : null]]),
    name: "checkbox-marked",
    size: _ctx.iconSize,
    "var-checkbox-cover": ""
  }, null, 8, ["class", "size"])]) : renderSlot(_ctx.$slots, "unchecked-icon", {
    key: 1
  }, () => [createVNode(_component_var_icon, {
    class: normalizeClass(["var-checkbox__icon", [_ctx.withAnimation ? "var-checkbox--with-animation" : null]]),
    name: "checkbox-blank-outline",
    size: _ctx.iconSize,
    "var-checkbox-cover": ""
  }, null, 8, ["class", "size"])])], 6)), [[_directive_ripple, {
    disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
  }]]), createElementVNode("div", {
    class: normalizeClass(["var-checkbox__text", [_ctx.errorMessage || _ctx.checkboxGroupErrorMessage ? "var-checkbox--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-checkbox--disabled" : null]])
  }, [renderSlot(_ctx.$slots, "default")], 2)]), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var Checkbox = defineComponent({
  render: render$N,
  name: "VarCheckbox",
  directives: {
    Ripple
  },
  components: {
    VarIcon: Icon,
    VarFormDetails: FormDetails
  },
  props: props$H,
  setup(props2) {
    var value = ref(false);
    var checked = computed(() => value.value === props2.checkedValue);
    var checkedValue = computed(() => props2.checkedValue);
    var withAnimation = ref(false);
    var {
      checkboxGroup: checkboxGroup2,
      bindCheckboxGroup
    } = useCheckboxGroup();
    var {
      form,
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var change = (changedValue) => {
      var _props$onUpdateModel;
      value.value = changedValue;
      var {
        checkedValue: checkedValue2,
        onChange
      } = props2;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, value.value);
      onChange == null ? void 0 : onChange(value.value);
      validateWithTrigger("onChange");
      changedValue === checkedValue2 ? checkboxGroup2 == null ? void 0 : checkboxGroup2.onChecked(checkedValue2) : checkboxGroup2 == null ? void 0 : checkboxGroup2.onUnchecked(checkedValue2);
    };
    var handleClick = (e) => {
      var {
        disabled,
        readonly,
        checkedValue: checkedValue2,
        uncheckedValue,
        onClick
      } = props2;
      if (form != null && form.disabled.value || disabled) {
        return;
      }
      onClick == null ? void 0 : onClick(e);
      if (form != null && form.readonly.value || readonly) {
        return;
      }
      withAnimation.value = true;
      var maximum = checkboxGroup2 ? checkboxGroup2.checkedCount.value >= Number(checkboxGroup2.max.value) : false;
      if (!checked.value && maximum) {
        return;
      }
      change(checked.value ? uncheckedValue : checkedValue2);
    };
    var sync = (values) => {
      var {
        checkedValue: checkedValue2,
        uncheckedValue
      } = props2;
      value.value = values.includes(checkedValue2) ? checkedValue2 : uncheckedValue;
    };
    var resetWithAnimation = () => {
      withAnimation.value = false;
    };
    var reset = () => {
      var _props$onUpdateModel2;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, props2.uncheckedValue);
      resetValidation();
    };
    var toggle = (changedValue) => {
      var {
        checkedValue: checkedValue2,
        uncheckedValue
      } = props2;
      var shouldReverse = ![checkedValue2, uncheckedValue].includes(changedValue);
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue2;
      }
      change(changedValue);
    };
    var validate = () => v(props2.rules, props2.modelValue);
    watch(() => props2.modelValue, (newValue) => {
      value.value = newValue;
    }, {
      immediate: true
    });
    var checkboxProvider = {
      checkedValue,
      checked,
      sync,
      validate,
      resetValidation,
      reset,
      resetWithAnimation
    };
    bindCheckboxGroup == null ? void 0 : bindCheckboxGroup(checkboxProvider);
    bindForm == null ? void 0 : bindForm(checkboxProvider);
    return {
      withAnimation,
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroup2 == null ? void 0 : checkboxGroup2.errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      handleClick,
      toggle,
      reset,
      validate,
      resetValidation
    };
  }
});
Checkbox.install = function(app) {
  app.component(Checkbox.name, Checkbox);
};
function directionValidator$3(direction) {
  return ["horizontal", "vertical"].includes(direction);
}
var props$G = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: directionValidator$3
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$y = {
  class: "var-checkbox-group__wrap"
};
function render$M(_ctx, _cache) {
  var _component_var_form_details = resolveComponent("var-form-details");
  return openBlock(), createElementBlock("div", _hoisted_1$y, [createElementVNode("div", {
    class: normalizeClass(["var-checkbox-group", ["var-checkbox-group--" + _ctx.direction]])
  }, [renderSlot(_ctx.$slots, "default")], 2), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var CheckboxGroup = defineComponent({
  render: render$M,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: FormDetails
  },
  props: props$G,
  setup(props2) {
    var max2 = computed(() => props2.max);
    var checkedCount = computed(() => props2.modelValue.length);
    var {
      length,
      checkboxes,
      bindCheckboxes
    } = useCheckboxes();
    var {
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var checkboxGroupErrorMessage = computed(() => errorMessage.value);
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var change = (changedModelValue) => {
      var _props$onUpdateModel;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, changedModelValue);
      props2.onChange == null ? void 0 : props2.onChange(changedModelValue);
      validateWithTrigger("onChange");
    };
    var onChecked = (changedValue) => {
      var {
        modelValue
      } = props2;
      if (!modelValue.includes(changedValue)) {
        change([...modelValue, changedValue]);
      }
    };
    var onUnchecked = (changedValue) => {
      var {
        modelValue
      } = props2;
      if (!modelValue.includes(changedValue)) {
        return;
      }
      change(modelValue.filter((value) => value !== changedValue));
    };
    var syncCheckboxes = () => checkboxes.forEach((_ref) => {
      var {
        sync
      } = _ref;
      return sync(props2.modelValue);
    });
    var resetWithAnimation = () => {
      checkboxes.forEach((checkbox2) => checkbox2.resetWithAnimation());
    };
    var checkAll2 = () => {
      var _props$onUpdateModel2;
      var checkedValues = checkboxes.map((_ref2) => {
        var {
          checkedValue
        } = _ref2;
        return checkedValue.value;
      });
      var changedModelValue = uniq(checkedValues);
      resetWithAnimation();
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, changedModelValue);
      return changedModelValue;
    };
    var inverseAll = () => {
      var _props$onUpdateModel3;
      var checkedValues = checkboxes.filter((_ref3) => {
        var {
          checked
        } = _ref3;
        return !checked.value;
      }).map((_ref4) => {
        var {
          checkedValue
        } = _ref4;
        return checkedValue.value;
      });
      var changedModelValue = uniq(checkedValues);
      resetWithAnimation();
      (_props$onUpdateModel3 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel3.call(props2, changedModelValue);
      return changedModelValue;
    };
    var reset = () => {
      var _props$onUpdateModel4;
      (_props$onUpdateModel4 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel4.call(props2, []);
      resetValidation();
    };
    var validate = () => v(props2.rules, props2.modelValue);
    watch(() => props2.modelValue, syncCheckboxes, {
      deep: true
    });
    watch(() => length.value, syncCheckboxes);
    var checkboxGroupProvider = {
      max: max2,
      checkedCount,
      onChecked,
      onUnchecked,
      validate,
      resetValidation,
      reset,
      errorMessage: checkboxGroupErrorMessage
    };
    bindCheckboxes(checkboxGroupProvider);
    bindForm == null ? void 0 : bindForm(checkboxGroupProvider);
    return {
      errorMessage,
      checkAll: checkAll2,
      inverseAll,
      reset,
      validate,
      resetValidation
    };
  }
});
CheckboxGroup.install = function(app) {
  app.component(CheckboxGroup.name, CheckboxGroup);
};
function typeValidator$3(type) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(type);
}
function sizeValidator$1(size) {
  return ["normal", "mini", "small", "large"].includes(size);
}
var props$F = {
  type: {
    type: String,
    default: "default",
    validator: typeValidator$3
  },
  size: {
    type: String,
    default: "normal",
    validator: sizeValidator$1
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: pickProps(props$R, "name"),
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: true
  },
  block: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function
  }
};
function render$L(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createBlock(Transition, {
    name: "var-fade"
  }, {
    default: withCtx(() => [createElementVNode("span", mergeProps({
      class: ["var-chip var--box", _ctx.contentClass],
      style: _ctx.chipStyles
    }, _ctx.$attrs), [renderSlot(_ctx.$slots, "left"), createElementVNode("span", {
      class: normalizeClass(["var-chip--text-" + _ctx.size])
    }, [renderSlot(_ctx.$slots, "default")], 2), renderSlot(_ctx.$slots, "right"), _ctx.closable ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "var-chip--close",
      onClick: _cache[0] || (_cache[0] = function() {
        return _ctx.onClose && _ctx.onClose(...arguments);
      })
    }, [createVNode(_component_var_icon, {
      name: "" + (_ctx.iconName ? _ctx.iconName : "close-circle")
    }, null, 8, ["name"])])) : createCommentVNode("v-if", true)], 16)]),
    _: 3
  });
}
var Chip = defineComponent({
  render: render$L,
  name: "VarChip",
  components: {
    VarIcon: Icon
  },
  inheritAttrs: false,
  props: props$F,
  setup(props2) {
    var chipStyles = computed(() => {
      var {
        plain,
        textColor,
        color
      } = props2;
      if (plain) {
        return {
          color: textColor || color,
          borderColor: color
        };
      }
      return {
        color: textColor,
        background: color
      };
    });
    var contentClass = computed(() => {
      var {
        size,
        block,
        type,
        plain,
        round: round2
      } = props2;
      var blockClass = block ? "var--flex" : "var--inline-flex";
      var plainTypeClass = plain ? "var-chip--plain var-chip--plain-" + type : "var-chip--" + type;
      var roundClass = round2 && "var-chip--round";
      return ["var-chip--" + size, blockClass, plainTypeClass, roundClass];
    });
    return {
      chipStyles,
      contentClass
    };
  }
});
Chip.install = function(app) {
  app.component(Chip.name, Chip);
};
var props$E = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  onClick: {
    type: Function
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  }
};
var ROW_BIND_COL_KEY = Symbol("ROW_BIND_COL_KEY");
var ROW_COUNT_COL_KEY = Symbol("ROW_COUNT_COL_KEY");
function useCols() {
  var {
    bindChildren,
    childProviders
  } = useChildren(ROW_BIND_COL_KEY);
  var {
    length
  } = useAtChildrenCounter(ROW_COUNT_COL_KEY);
  return {
    length,
    cols: childProviders,
    bindCols: bindChildren
  };
}
function useRow() {
  var {
    parentProvider,
    bindParent
  } = useParent(ROW_BIND_COL_KEY);
  var {
    index
  } = useAtParentIndex(ROW_COUNT_COL_KEY);
  if (!parentProvider || !bindParent || !index) {
    console.warn("col must in row");
  }
  return {
    index,
    row: parentProvider,
    bindRow: bindParent
  };
}
function render$K(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-col var--box", [_ctx.span ? "var-col--span-" + _ctx.span : null, _ctx.offset ? "var-col--offset-" + _ctx.offset : null, ..._ctx.getSize("xs", _ctx.xs), ..._ctx.getSize("sm", _ctx.sm), ..._ctx.getSize("md", _ctx.md), ..._ctx.getSize("lg", _ctx.lg), ..._ctx.getSize("xl", _ctx.xl)]]),
    style: normalizeStyle({
      paddingLeft: _ctx.toSizeUnit(_ctx.padding.left),
      paddingRight: _ctx.toSizeUnit(_ctx.padding.right)
    }),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 6);
}
var Col = defineComponent({
  render: render$K,
  name: "VarCol",
  props: props$E,
  setup(props2) {
    var padding = ref({
      left: 0,
      right: 0
    });
    var span = computed(() => toNumber(props2.span));
    var offset = computed(() => toNumber(props2.offset));
    var {
      row: row2,
      bindRow
    } = useRow();
    var colProvider = {
      setPadding(pad) {
        padding.value = pad;
      }
    };
    var getSize = (mode, size) => {
      var classes = [];
      if (!size) {
        return classes;
      }
      if (isPlainObject(size)) {
        var {
          span: _span,
          offset: _offset
        } = size;
        _span && classes.push("var-col--span-" + mode + "-" + _span);
        _offset && classes.push("var-col--offset-" + mode + "-" + _offset);
      } else {
        classes.push("var-col--span-" + mode + "-" + size);
      }
      return classes;
    };
    watch([() => props2.span, () => props2.offset], () => {
      row2 == null ? void 0 : row2.computePadding();
    });
    bindRow == null ? void 0 : bindRow(colProvider);
    return {
      padding,
      toNumber,
      toSizeUnit,
      getSize,
      span,
      offset
    };
  }
});
Col.install = function(app) {
  app.component(Col.name, Col);
};
var COLLAPSE_BIND_COLLAPSE_ITEM_KEY = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
var COLLAPSE_COUNT_COLLAPSE_ITEM_KEY = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function useCollapseItem() {
  var {
    bindChildren,
    childProviders
  } = useChildren(COLLAPSE_BIND_COLLAPSE_ITEM_KEY);
  var {
    length
  } = useAtChildrenCounter(COLLAPSE_COUNT_COLLAPSE_ITEM_KEY);
  return {
    length,
    collapseItem: childProviders,
    bindCollapseItem: bindChildren
  };
}
var props$D = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$x = {
  class: "var-collapse"
};
function render$J(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$x, [renderSlot(_ctx.$slots, "default")]);
}
var Collapse = defineComponent({
  render: render$J,
  name: "VarCollapse",
  props: props$D,
  setup(props2) {
    var {
      length,
      collapseItem: collapseItem2,
      bindCollapseItem
    } = useCollapseItem();
    var active = computed(() => props2.modelValue);
    var offset = computed(() => props2.offset);
    var checkValue = () => {
      if (!props2.accordion && !isArray(props2.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array');
        return false;
      }
      if (props2.accordion && isArray(props2.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number');
        return false;
      }
      return true;
    };
    var getValue = (value, isExpand) => {
      if (!checkValue())
        return null;
      if (isExpand)
        return props2.accordion ? value : [...props2.modelValue, value];
      return props2.accordion ? null : props2.modelValue.filter((name) => name !== value);
    };
    var updateItem = (value, isExpand) => {
      var _props$onUpdateModel;
      var modelValue = getValue(value, isExpand);
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, modelValue);
      props2.onChange == null ? void 0 : props2.onChange(modelValue);
    };
    var matchName = () => {
      if (props2.accordion) {
        return collapseItem2.find((_ref) => {
          var {
            name
          } = _ref;
          return props2.modelValue === name.value;
        });
      }
      var filterItem = collapseItem2.filter((_ref2) => {
        var {
          name
        } = _ref2;
        if (name.value === void 0)
          return false;
        return props2.modelValue.includes(name.value);
      });
      return filterItem.length ? filterItem : void 0;
    };
    var matchIndex = () => {
      if (props2.accordion) {
        return collapseItem2.find((_ref3) => {
          var {
            index,
            name
          } = _ref3;
          return name.value === void 0 ? props2.modelValue === index.value : false;
        });
      }
      return collapseItem2.filter((_ref4) => {
        var {
          index,
          name
        } = _ref4;
        return name.value === void 0 ? props2.modelValue.includes(index.value) : false;
      });
    };
    var resize = () => {
      if (!checkValue())
        return;
      var matchProviders = matchName() || matchIndex();
      if (props2.accordion && !matchProviders || !props2.accordion && !matchProviders.length) {
        collapseItem2.forEach((provider) => {
          provider.init(props2.accordion, false);
        });
        return;
      }
      collapseItem2.forEach((provider) => {
        var isShow = props2.accordion ? matchProviders === provider : matchProviders.includes(provider);
        provider.init(props2.accordion, isShow);
      });
    };
    var collapseProvider = {
      active,
      offset,
      updateItem
    };
    bindCollapseItem(collapseProvider);
    watch(() => length.value, () => nextTick().then(resize));
    watch(() => props2.modelValue, () => nextTick().then(resize));
  }
});
Collapse.install = function(app) {
  app.component(Collapse.name, Collapse);
};
function useCollapse() {
  var {
    parentProvider,
    bindParent
  } = useParent(COLLAPSE_BIND_COLLAPSE_ITEM_KEY);
  var {
    index
  } = useAtParentIndex(COLLAPSE_COUNT_COLLAPSE_ITEM_KEY);
  if (!parentProvider || !bindParent || !index) {
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  }
  return {
    index,
    collapse: parentProvider,
    bindCollapse: bindParent
  };
}
var props$C = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
var _hoisted_1$w = {
  class: "var-collapse-item-header__title"
};
var _hoisted_2$n = {
  class: "var-collapse-item-header__icon"
};
var _hoisted_3$e = {
  class: "var-collapse-item__wrap"
};
function render$I(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({
      "var-collapse-item": true,
      "var-collapse-item__active": _ctx.offset && _ctx.isShow,
      "var-collapse-item__disable": _ctx.disabled
    })
  }, [createElementVNode("div", {
    class: "var-collapse-item-header",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggle())
  }, [createElementVNode("div", _hoisted_1$w, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])]), createElementVNode("div", _hoisted_2$n, [renderSlot(_ctx.$slots, "icon", {}, () => [createVNode(_component_var_icon, {
    name: _ctx.icon,
    transition: 250,
    class: normalizeClass({
      "var-collapse-item-header__icon": true,
      "var-collapse-item-header__open": _ctx.isShow && _ctx.icon === "chevron-down",
      "var-collapse-item-header__disable": _ctx.disabled
    })
  }, null, 8, ["name", "class"])])])]), withDirectives(createElementVNode("div", {
    class: "var-collapse-item-content",
    ref: "contentEl",
    onTransitionend: _cache[1] || (_cache[1] = function() {
      return _ctx.transitionend && _ctx.transitionend(...arguments);
    })
  }, [createElementVNode("div", _hoisted_3$e, [renderSlot(_ctx.$slots, "default")])], 544), [[vShow, _ctx.show]])], 2);
}
var CollapseItem = defineComponent({
  render: render$I,
  name: "VarCollapseItem",
  components: {
    VarIcon: Icon
  },
  props: props$C,
  setup(props2) {
    var {
      index,
      collapse,
      bindCollapse
    } = useCollapse();
    var contentEl = ref(null);
    var show = ref(false);
    var isShow = ref(false);
    var {
      active,
      offset,
      updateItem
    } = collapse;
    var name = computed(() => props2.name);
    var init = (accordion, show2) => {
      if (active.value === void 0 || accordion && isArray(active.value) || show2 === isShow.value)
        return;
      isShow.value = show2;
      toggle(true);
    };
    var toggle = (initOrAccordion) => {
      if (props2.disabled)
        return;
      if (!initOrAccordion) {
        updateItem(props2.name || index.value, !isShow.value);
      }
    };
    var openPanel = () => {
      if (!contentEl.value)
        return;
      contentEl.value.style.height = "";
      show.value = true;
      nextTick(() => {
        var {
          offsetHeight
        } = contentEl.value;
        contentEl.value.style.height = 0 + "px";
        requestAnimationFrame(() => {
          contentEl.value.style.height = offsetHeight + "px";
        });
      });
    };
    var closePanel = () => {
      if (!contentEl.value)
        return;
      contentEl.value.style.height = 0 + "px";
    };
    var transitionend = () => {
      if (!isShow.value) {
        show.value = false;
        contentEl.value.style.height = "";
      }
    };
    var collapseItemProvider = {
      index,
      name,
      init
    };
    bindCollapse(collapseItemProvider);
    watch(isShow, (value) => {
      if (value)
        openPanel();
      else
        closePanel();
    });
    return {
      show,
      isShow,
      offset,
      toggle,
      contentEl,
      transitionend
    };
  }
});
CollapseItem.install = function(app) {
  app.component(CollapseItem.name, CollapseItem);
};
var props$B = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: true
  },
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var _hoisted_1$v = {
  class: "var-countdown"
};
function render$H(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$v, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.timeData)), () => [createTextVNode(toDisplayString(_ctx.showTime), 1)])]);
}
var Countdown = defineComponent({
  render: render$H,
  name: "VarCountdown",
  props: props$B,
  setup(props2) {
    var endTime = ref(0);
    var isStart = ref(false);
    var showTime = ref("");
    var handle = ref(0);
    var pauseTime = ref(0);
    var timeData = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    var formatTime = (durationTime) => {
      var days = Math.floor(durationTime / DAY);
      var hours = Math.floor(durationTime % DAY / HOUR);
      var minutes = Math.floor(durationTime % HOUR / MINUTE);
      var seconds = Math.floor(durationTime % MINUTE / SECOND);
      var milliseconds = Math.floor(durationTime % SECOND);
      var time = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      };
      timeData.value = time;
      props2.onChange == null ? void 0 : props2.onChange(timeData.value);
      showTime.value = parseFormat(props2.format, time);
    };
    var countdown = () => {
      var {
        time,
        onEnd,
        autoStart
      } = props2;
      var now = Date.now();
      if (!endTime.value)
        endTime.value = now + toNumber(time);
      var durationTime = endTime.value - now;
      if (durationTime < 0)
        durationTime = 0;
      pauseTime.value = durationTime;
      formatTime(durationTime);
      if (durationTime === 0) {
        onEnd == null ? void 0 : onEnd();
        return;
      }
      if (autoStart || isStart.value)
        handle.value = requestAnimationFrame(countdown);
    };
    var start = () => {
      if (isStart.value)
        return;
      isStart.value = true;
      endTime.value = Date.now() + (pauseTime.value || toNumber(props2.time));
      countdown();
    };
    var pause = () => {
      isStart.value = false;
    };
    var reset = () => {
      endTime.value = 0;
      isStart.value = false;
      cancelAnimationFrame(handle.value);
      countdown();
    };
    watch(() => props2.time, () => reset(), {
      immediate: true
    });
    return {
      showTime,
      timeData,
      start,
      pause,
      reset
    };
  }
});
Countdown.install = function(app) {
  app.component(Countdown.name, Countdown);
};
var EXP_LIMIT = 9e15, MAX_DIGITS = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -EXP_LIMIT,
  maxE: EXP_LIMIT,
  crypto: false
}, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", precisionLimitExceeded = decimalError + "Precision limit exceeded", cryptoUnavailable = decimalError + "crypto unavailable", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3)
      n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0)
      for (i = j; r.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1))
      return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base)
                k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str = ""; i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str = "1."; i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add$1(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add$1;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var props$A = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disableIncrement: {
    type: Boolean,
    default: false
  },
  disableDecrement: {
    type: Boolean,
    default: false
  },
  disableInput: {
    type: Boolean,
    default: false
  },
  lazyChange: {
    type: Boolean,
    default: false
  },
  incrementButton: {
    type: Boolean,
    default: true
  },
  decrementButton: {
    type: Boolean,
    default: true
  },
  press: {
    type: Boolean,
    default: true
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var SPEED = 100;
var DELAY = 600;
var _hoisted_1$u = {
  class: "var-counter var--box"
};
var _hoisted_2$m = ["inputmode", "readonly", "disabled"];
function render$G(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1$u, [createElementVNode("div", mergeProps({
    class: ["var-counter__controller var-elevation--2", [_ctx.disabled || _ctx.formDisabled ? "var-counter--disabled" : null, _ctx.errorMessage ? "var-counter--error" : null]],
    style: {
      background: _ctx.color ? _ctx.color : void 0
    }
  }, _ctx.$attrs), [withDirectives(createVNode(_component_var_icon, {
    class: normalizeClass(["var-counter__decrement-button", [!_ctx.decrementButton ? "var-counter--hidden" : null]]),
    "var-counter-cover": "",
    name: "minus",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.buttonSize),
      height: _ctx.toSizeUnit(_ctx.buttonSize)
    }),
    onClick: _ctx.decrement,
    onTouchstart: _ctx.pressDecrement,
    onTouchend: _ctx.releaseDecrement,
    onTouchcancel: _ctx.releaseDecrement
  }, null, 8, ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.readonly || _ctx.disableDecrement || !_ctx.decrementButton || _ctx.isMin
  }]]), withDirectives(createElementVNode("input", {
    class: "var-counter__input",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.inputWidth),
      fontSize: _ctx.toSizeUnit(_ctx.inputTextSize)
    }),
    inputmode: _ctx.toNumber(_ctx.decimalLength) === 0 ? "numeric" : "decimal",
    readonly: _ctx.readonly || _ctx.formReadonly,
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.disableInput,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
    onChange: _cache[1] || (_cache[1] = function() {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 44, _hoisted_2$m), [[vModelText, _ctx.inputValue]]), withDirectives(createVNode(_component_var_icon, {
    class: normalizeClass(["var-counter__increment-button", [!_ctx.incrementButton ? "var-counter--hidden" : null]]),
    "var-counter-cover": "",
    name: "plus",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.buttonSize),
      height: _ctx.toSizeUnit(_ctx.buttonSize)
    }),
    onClick: _ctx.increment,
    onTouchstart: _ctx.pressIncrement,
    onTouchend: _ctx.releaseIncrement,
    onTouchcancel: _ctx.releaseIncrement
  }, null, 8, ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.readonly || _ctx.disableIncrement || !_ctx.incrementButton || _ctx.isMax
  }]])], 16), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var Counter = defineComponent({
  render: render$G,
  name: "VarCounter",
  components: {
    VarIcon: Icon,
    VarFormDetails: FormDetails
  },
  directives: {
    Ripple
  },
  inheritAttrs: false,
  props: props$A,
  setup(props2) {
    var inputValue = ref("");
    var incrementTimer;
    var decrementTimer;
    var incrementDelayTimer;
    var decrementDelayTimer;
    var {
      bindForm,
      form
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var {
      readonly: formReadonly,
      disabled: formDisabled
    } = form != null ? form : {};
    var validate = () => v(props2.rules, props2.modelValue);
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var reset = () => {
      var _props$onUpdateModel;
      var {
        min: min2
      } = props2;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, min2 != null ? toNumber(min2) : 0);
      resetValidation();
    };
    var counterProvider = {
      reset,
      validate,
      resetValidation
    };
    var isMax = computed(() => {
      var {
        max: max2,
        modelValue
      } = props2;
      return max2 != null && toNumber(modelValue) >= toNumber(max2);
    });
    var isMin = computed(() => {
      var {
        min: min2,
        modelValue
      } = props2;
      return min2 != null && toNumber(modelValue) <= toNumber(min2);
    });
    var normalizeValue = (value) => {
      var {
        decimalLength,
        max: max2,
        min: min2
      } = props2;
      var num = toNumber(value);
      if (max2 != null && num > toNumber(max2)) {
        num = toNumber(max2);
      }
      if (min2 != null && num < toNumber(min2)) {
        num = toNumber(min2);
      }
      value = String(num);
      if (decimalLength != null) {
        value = num.toFixed(toNumber(decimalLength));
      }
      return value;
    };
    var handleChange = (event) => {
      var {
        lazyChange,
        onBeforeChange
      } = props2;
      var {
        value
      } = event.target;
      var normalizedValue = normalizeValue(value);
      lazyChange ? onBeforeChange == null ? void 0 : onBeforeChange(toNumber(normalizedValue), change) : setNormalizedValue(normalizedValue);
      validateWithTrigger("onInputChange");
    };
    var decrement = () => {
      var {
        disabled,
        readonly,
        disableDecrement,
        decrementButton,
        lazyChange,
        step: step2,
        modelValue,
        onDecrement,
        onBeforeChange
      } = props2;
      if (formDisabled != null && formDisabled.value || formReadonly != null && formReadonly.value || disabled || readonly || disableDecrement || !decrementButton) {
        return;
      }
      if (isMin.value) {
        return;
      }
      var value = new Decimal(toNumber(modelValue)).minus(new Decimal(toNumber(step2))).toString();
      var normalizedValue = normalizeValue(value);
      var normalizedValueNum = toNumber(normalizedValue);
      onDecrement == null ? void 0 : onDecrement(normalizedValueNum);
      if (lazyChange) {
        onBeforeChange == null ? void 0 : onBeforeChange(normalizedValueNum, change);
      } else {
        setNormalizedValue(normalizedValue);
        validateWithTrigger("onDecrement");
      }
    };
    var increment = () => {
      var {
        disabled,
        readonly,
        disableIncrement,
        incrementButton,
        lazyChange,
        step: step2,
        modelValue,
        onIncrement,
        onBeforeChange
      } = props2;
      if (formDisabled != null && formDisabled.value || formReadonly != null && formReadonly.value || disabled || readonly || disableIncrement || !incrementButton) {
        return;
      }
      if (isMax.value) {
        return;
      }
      var value = new Decimal(toNumber(modelValue)).plus(new Decimal(toNumber(step2))).toString();
      var normalizedValue = normalizeValue(value);
      var normalizedValueNum = toNumber(normalizedValue);
      onIncrement == null ? void 0 : onIncrement(normalizedValueNum);
      if (lazyChange) {
        onBeforeChange == null ? void 0 : onBeforeChange(normalizedValueNum, change);
      } else {
        setNormalizedValue(normalizedValue);
        validateWithTrigger("onIncrement");
      }
    };
    var pressDecrement = () => {
      var {
        press,
        lazyChange
      } = props2;
      if (!press || lazyChange) {
        return;
      }
      decrementDelayTimer = window.setTimeout(() => {
        continuedDecrement();
      }, DELAY);
    };
    var pressIncrement = () => {
      var {
        press,
        lazyChange
      } = props2;
      if (!press || lazyChange) {
        return;
      }
      incrementDelayTimer = window.setTimeout(() => {
        continuedIncrement();
      }, DELAY);
    };
    var releaseDecrement = () => {
      decrementTimer && clearTimeout(decrementTimer);
      decrementDelayTimer && clearTimeout(decrementDelayTimer);
    };
    var releaseIncrement = () => {
      incrementTimer && clearTimeout(incrementTimer);
      incrementDelayTimer && clearTimeout(incrementDelayTimer);
    };
    var continuedIncrement = () => {
      incrementTimer = window.setTimeout(() => {
        increment();
        continuedIncrement();
      }, SPEED);
    };
    var continuedDecrement = () => {
      decrementTimer = window.setTimeout(() => {
        decrement();
        continuedDecrement();
      }, SPEED);
    };
    var setNormalizedValue = (normalizedValue) => {
      var _props$onUpdateModel2;
      inputValue.value = normalizedValue;
      var normalizedValueNum = toNumber(normalizedValue);
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, normalizedValueNum);
    };
    var change = (value) => {
      setNormalizedValue(normalizeValue(String(value)));
      validateWithTrigger("onLazyChange");
    };
    bindForm == null ? void 0 : bindForm(counterProvider);
    watch(() => props2.modelValue, (newValue) => {
      setNormalizedValue(normalizeValue(String(newValue)));
      props2.onChange == null ? void 0 : props2.onChange(toNumber(newValue));
    });
    setNormalizedValue(normalizeValue(String(props2.modelValue)));
    return {
      inputValue,
      errorMessage,
      formDisabled,
      formReadonly,
      isMax,
      isMin,
      validate,
      reset,
      resetValidation,
      handleChange,
      decrement,
      increment,
      pressDecrement,
      pressIncrement,
      releaseDecrement,
      releaseIncrement,
      toSizeUnit,
      toNumber
    };
  }
});
Counter.install = function(app) {
  app.component(Counter.name, Counter);
};
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var padStart = function padStart2(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length)
    return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date())
    return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
var U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en;
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs;
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset)
    return L;
  if (typeof preset === "string") {
    if (Ls[preset]) {
      l = preset;
    }
    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l)
    L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
  });
};
var Utils = U;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null)
    return new Date(NaN);
  if (Utils.u(date))
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = /* @__PURE__ */ function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input2, get, set) {
    if (Utils.u(input2))
      return this[get];
    return this.set(set, input2);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(_this.toDate("s"), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name)
      this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add2(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step2 = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step2;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale = this.$locale();
    if (!this.isValid())
      return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale.weekdays, months = locale.months, meridiem = locale.meridiem;
    var getShort = function getShort2(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].substr(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, "0"),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, "0"),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, "0"),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, "0"),
      SSS: Utils.s(this.$ms, 3, "0"),
      Z: zoneStr
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches[match] || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff2(input2, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;
    var unit = Utils.p(units);
    var that = dayjs(input2);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff3 = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff3 - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff3 - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff3 / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff3 / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff3 / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff3;
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale(preset, object) {
    if (!preset)
      return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName)
      that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone2() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input2) {
    return this.$g(input2, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option2) {
  if (!plugin.$i) {
    plugin(option2, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var isSameOrBefore = function(o, c) {
  c.prototype.isSameOrBefore = function(that, units) {
    return this.isSame(that, units) || this.isBefore(that, units);
  };
};
var isSameOrAfter = function(o, c) {
  c.prototype.isSameOrAfter = function(that, units) {
    return this.isSame(that, units) || this.isAfter(that, units);
  };
};
function typeValidator$2(type) {
  return ["date", "month"].includes(type);
}
var MONTH_LIST = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}];
var WEEK_HEADER = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}];
var props$z = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: typeValidator$2
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  shadow: {
    type: Boolean,
    default: false
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  touchable: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$t = {
  class: "var-picker-header"
};
function render$F(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_button = resolveComponent("var-button");
  return openBlock(), createElementBlock("div", _hoisted_1$t, [createVNode(_component_var_button, {
    round: "",
    text: "",
    style: {
      "filter": "opacity(0.54)"
    },
    disabled: _ctx.disabled.left,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.checkDate("prev"))
  }, {
    default: withCtx(() => [createVNode(_component_var_icon, {
      name: "chevron-left"
    })]),
    _: 1
  }, 8, ["disabled"]), createElementVNode("div", {
    class: "var-picker-header__value",
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("check-panel"))
  }, [createVNode(Transition, {
    name: "var-date-picker" + (_ctx.reverse ? "-reverse" : "") + "-translatex"
  }, {
    default: withCtx(() => [(openBlock(), createElementBlock("div", {
      key: _ctx.showDate
    }, toDisplayString(_ctx.showDate), 1))]),
    _: 1
  }, 8, ["name"])]), createVNode(_component_var_button, {
    round: "",
    text: "",
    style: {
      "filter": "opacity(0.54)"
    },
    disabled: _ctx.disabled.right,
    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.checkDate("next"))
  }, {
    default: withCtx(() => [createVNode(_component_var_icon, {
      name: "chevron-right"
    })]),
    _: 1
  }, 8, ["disabled"])]);
}
var PanelHeader = defineComponent({
  render: render$F,
  name: "PanelHeader",
  components: {
    VarButton: Button,
    VarIcon: Icon
  },
  props: {
    date: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: true
    }
  },
  emits: ["check-panel", "check-date"],
  setup(props2, _ref) {
    var {
      emit
    } = _ref;
    var reverse = ref(false);
    var forwardOrBackNum = ref(0);
    var showDate = computed(() => {
      var _pack$value$datePicke;
      var {
        date,
        type
      } = props2;
      var {
        previewMonth,
        previewYear
      } = date;
      if (type === "month")
        return toNumber(previewYear) + forwardOrBackNum.value;
      var monthName = (_pack$value$datePicke = pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke[previewMonth.index].name;
      return pack.value.lang === "zh-CN" ? previewYear + " " + monthName : monthName + " " + previewYear;
    });
    var checkDate = (checkType) => {
      if (checkType === "prev" && props2.disabled.left || checkType === "next" && props2.disabled.right)
        return;
      emit("check-date", checkType);
      reverse.value = checkType === "prev";
      forwardOrBackNum.value += checkType === "prev" ? -1 : 1;
    };
    watch(() => props2.date, () => {
      forwardOrBackNum.value = 0;
    });
    return {
      reverse,
      showDate,
      checkDate
    };
  }
});
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
var _hoisted_1$s = {
  class: "var-month-picker__panel"
};
var _hoisted_2$l = {
  class: "var-month-picker__content"
};
function render$E(_ctx, _cache) {
  var _component_panel_header = resolveComponent("panel-header");
  var _component_var_button = resolveComponent("var-button");
  return openBlock(), createElementBlock("div", _hoisted_1$s, [createElementVNode("div", _hoisted_2$l, [createVNode(_component_panel_header, {
    ref: "headerEl",
    type: "month",
    date: _ctx.preview,
    disabled: _ctx.panelBtnDisabled,
    onCheckPanel: _ctx.clickYear,
    onCheckDate: _ctx.checkDate
  }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), createVNode(Transition, {
    name: "var-date-picker" + (_ctx.reverse ? "-reverse" : "") + "-translatex"
  }, {
    default: withCtx(() => [(openBlock(), createElementBlock("ul", {
      key: _ctx.panelKey
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.MONTH_LIST, (month) => {
      return openBlock(), createElementBlock("li", {
        key: month.index
      }, [createVNode(_component_var_button, mergeProps({
        type: "primary",
        class: "var-month-picker__button",
        "var-month-picker-cover": "",
        ripple: false
      }, _extends$8({}, _ctx.buttonProps(month.index)), {
        onClick: (event) => _ctx.chooseMonth(month, event)
      }), {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.getMonthAbbr(month.index)), 1)]),
        _: 2
      }, 1040, ["onClick"])]);
    }), 128))]))]),
    _: 1
  }, 8, ["name"])])]);
}
var MonthPickerPanel = defineComponent({
  render: render$E,
  name: "MonthPickerPanel",
  components: {
    VarButton: Button,
    PanelHeader
  },
  props: {
    choose: {
      type: Object,
      required: true
    },
    preview: {
      type: Object,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    clickYear: {
      type: Function,
      required: true
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(props2, _ref) {
    var {
      emit
    } = _ref;
    var [currentYear, currentMonth] = props2.current.split("-");
    var reverse = ref(false);
    var panelKey = ref(0);
    var headerEl = ref(null);
    var panelBtnDisabled = reactive({
      left: false,
      right: false
    });
    var isSameYear = computed(() => props2.choose.chooseYear === props2.preview.previewYear);
    var isCurrentYear = computed(() => props2.preview.previewYear === currentYear);
    var getMonthAbbr = (key) => {
      var _pack$value$datePicke, _pack$value$datePicke2;
      return (_pack$value$datePicke = (_pack$value$datePicke2 = pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke2[key].abbr) != null ? _pack$value$datePicke : "";
    };
    var inRange = (key) => {
      var {
        preview: {
          previewYear
        },
        componentProps: {
          min: min2,
          max: max2
        }
      } = props2;
      var isBeforeMax = true;
      var isAfterMin = true;
      var previewDate = previewYear + "-" + key;
      if (max2)
        isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max2), "month");
      if (min2)
        isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min2), "month");
      return isBeforeMax && isAfterMin;
    };
    var shouldChoose = (val) => {
      var {
        choose: {
          chooseMonths,
          chooseDays,
          chooseRangeMonth
        },
        componentProps: {
          type,
          range
        }
      } = props2;
      if (range) {
        if (!chooseRangeMonth.length)
          return false;
        var isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeMonth[1]), "month");
        var isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeMonth[0]), "month");
        return isBeforeMax && isAfterMin;
      }
      if (type === "month")
        return chooseMonths.includes(val);
      return chooseDays.some((value) => value.includes(val));
    };
    var buttonProps = (key) => {
      var {
        choose: {
          chooseMonth: chooseMonth2
        },
        preview: {
          previewYear
        },
        componentProps: {
          allowedDates,
          color,
          multiple,
          range
        }
      } = props2;
      var val = previewYear + "-" + key;
      var monthExist = () => {
        if (range || multiple)
          return shouldChoose(val);
        return (chooseMonth2 == null ? void 0 : chooseMonth2.index) === key && isSameYear.value;
      };
      var computeDisabled = () => {
        if (!inRange(key))
          return true;
        if (!allowedDates)
          return false;
        return !allowedDates(val);
      };
      var disabled = computeDisabled();
      var computeText = () => {
        if (disabled)
          return true;
        if (range || multiple)
          return !shouldChoose(val);
        return !isSameYear.value || (chooseMonth2 == null ? void 0 : chooseMonth2.index) !== key;
      };
      var computeOutline = () => {
        if (!(isCurrentYear.value && currentMonth === key && props2.componentProps.showCurrent))
          return false;
        if ((range || multiple || isSameYear.value) && disabled)
          return true;
        if (range || multiple)
          return !shouldChoose(val);
        if (isSameYear.value)
          return (chooseMonth2 == null ? void 0 : chooseMonth2.index) !== currentMonth;
        return true;
      };
      var textColorOrCover = () => {
        if (disabled)
          return "";
        if (computeOutline())
          return color != null ? color : "";
        if (monthExist())
          return "";
        return "var-date-picker-color-cover";
      };
      var isCover = textColorOrCover().startsWith("var-date-picker");
      return {
        outline: computeOutline(),
        text: computeText(),
        color: !computeText() ? color : "",
        textColor: isCover ? "" : textColorOrCover(),
        "var-date-picker-color-cover": isCover,
        class: {
          "var-month-picker__button-disabled": disabled
        }
      };
    };
    var chooseMonth = (month, event) => {
      var buttonEl = event.currentTarget;
      if (buttonEl.classList.contains("var-month-picker__button-disabled"))
        return;
      emit("choose-month", month);
    };
    var checkDate = (checkType) => {
      reverse.value = checkType === "prev";
      panelKey.value += checkType === "prev" ? -1 : 1;
      emit("check-preview", "year", checkType);
    };
    var forwardRef = (checkType) => {
      headerEl.value.checkDate(checkType);
    };
    watch(() => props2.preview.previewYear, (year) => {
      var {
        componentProps: {
          min: min2,
          max: max2
        }
      } = props2;
      if (max2)
        panelBtnDisabled.right = !dayjs("" + (toNumber(year) + 1)).isSameOrBefore(dayjs(max2), "year");
      if (min2)
        panelBtnDisabled.left = !dayjs("" + (toNumber(year) - 1)).isSameOrAfter(dayjs(min2), "year");
    }, {
      immediate: true
    });
    return {
      pack,
      MONTH_LIST,
      headerEl,
      reverse,
      panelKey,
      panelBtnDisabled,
      forwardRef,
      buttonProps,
      getMonthAbbr,
      chooseMonth,
      checkDate
    };
  }
});
var _hoisted_1$r = {
  class: "var-year-picker__panel"
};
var _hoisted_2$k = ["onClick"];
function render$D(_ctx, _cache) {
  return openBlock(), createElementBlock("ul", _hoisted_1$r, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.yearList, (year) => {
    return openBlock(), createElementBlock("li", {
      key: year,
      class: normalizeClass([year === _ctx.toNumber(_ctx.preview) ? "var-year-picker__panel--active" : null]),
      style: normalizeStyle({
        color: year === _ctx.toNumber(_ctx.preview) ? _ctx.componentProps.color : ""
      }),
      onClick: ($event) => _ctx.chooseYear(year)
    }, toDisplayString(year), 15, _hoisted_2$k);
  }), 128))]);
}
var YearPickerPanel = defineComponent({
  render: render$D,
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ["choose-year"],
  setup(props2, _ref) {
    var {
      emit
    } = _ref;
    var yearList = computed(() => {
      var list2 = [];
      var {
        preview,
        componentProps: {
          max: max2,
          min: min2
        }
      } = props2;
      if (!preview)
        return list2;
      var yearRange = [toNumber(preview) + 100, toNumber(preview) - 100];
      if (max2) {
        var formatMax = dayjs(max2).format("YYYY-MM-D");
        var year = toNumber(formatMax.split("-")[0]);
        if (year < yearRange[0] && year > yearRange[1])
          yearRange = [year, yearRange[1]];
        if (year <= yearRange[1])
          return [year];
      }
      if (min2) {
        var formatMin = dayjs(min2).format("YYYY-MM-D");
        var _year = toNumber(formatMin.split("-")[0]);
        if (_year < yearRange[0] && _year > yearRange[1])
          yearRange = [yearRange[0], _year];
        if (_year >= yearRange[0])
          return [_year];
      }
      for (var i = yearRange[0]; i >= yearRange[1]; i--) {
        list2.push(i);
      }
      return list2;
    });
    var chooseYear = (year) => {
      emit("choose-year", year);
    };
    onMounted(() => {
      var activeEl = document.querySelector(".var-year-picker__panel--active");
      activeEl == null ? void 0 : activeEl.scrollIntoView({
        block: "center"
      });
    });
    return {
      yearList,
      chooseYear,
      toNumber
    };
  }
});
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
var _hoisted_1$q = {
  class: "var-day-picker__panel"
};
var _hoisted_2$j = {
  class: "var-day-picker__content"
};
var _hoisted_3$d = {
  class: "var-day-picker__head"
};
var _hoisted_4$8 = {
  class: "var-day-picker__body"
};
function render$C(_ctx, _cache) {
  var _component_panel_header = resolveComponent("panel-header");
  var _component_var_button = resolveComponent("var-button");
  return openBlock(), createElementBlock("div", _hoisted_1$q, [createElementVNode("div", _hoisted_2$j, [createVNode(_component_panel_header, {
    ref: "headerEl",
    type: "day",
    date: _ctx.preview,
    disabled: _ctx.panelBtnDisabled,
    onCheckPanel: _ctx.clickMonth,
    onCheckDate: _ctx.checkDate
  }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), createVNode(Transition, {
    name: "var-date-picker" + (_ctx.reverse ? "-reverse" : "") + "-translatex"
  }, {
    default: withCtx(() => [(openBlock(), createElementBlock("div", {
      key: _ctx.panelKey
    }, [createElementVNode("ul", _hoisted_3$d, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortWeekList, (week) => {
      return openBlock(), createElementBlock("li", {
        key: week.index
      }, toDisplayString(_ctx.getDayAbbr(week.index)), 1);
    }), 128))]), createElementVNode("ul", _hoisted_4$8, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.days, (day, index) => {
      return openBlock(), createElementBlock("li", {
        key: index
      }, [createVNode(_component_var_button, mergeProps({
        type: "primary",
        class: ["var-day-picker__button", {
          "var-day-picker__button--usable": day > 0
        }],
        "var-day-picker-cover": "",
        round: "",
        ripple: false
      }, _extends$7({}, _ctx.buttonProps(day)), {
        onClick: (event) => _ctx.chooseDay(day, event)
      }), {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.filterDay(day)), 1)]),
        _: 2
      }, 1040, ["class", "onClick"])]);
    }), 128))])]))]),
    _: 1
  }, 8, ["name"])])]);
}
var DayPickerPanel = defineComponent({
  render: render$C,
  name: "DayPickerPanel",
  components: {
    VarButton: Button,
    PanelHeader
  },
  props: {
    choose: {
      type: Object,
      required: true
    },
    preview: {
      type: Object,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    clickMonth: {
      type: Function,
      required: true
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(props2, _ref) {
    var {
      emit
    } = _ref;
    var [currentYear, currentMonth, currentDay] = props2.current.split("-");
    var days = ref([]);
    var reverse = ref(false);
    var panelKey = ref(0);
    var headerEl = ref(null);
    var panelBtnDisabled = reactive({
      left: false,
      right: false
    });
    var isCurrent = computed(() => props2.preview.previewYear === currentYear && props2.preview.previewMonth.index === currentMonth);
    var isSame = computed(() => {
      var _props$choose$chooseM;
      return props2.choose.chooseYear === props2.preview.previewYear && ((_props$choose$chooseM = props2.choose.chooseMonth) == null ? void 0 : _props$choose$chooseM.index) === props2.preview.previewMonth.index;
    });
    var sortWeekList = computed(() => {
      var index = WEEK_HEADER.findIndex((week) => week.index === props2.componentProps.firstDayOfWeek);
      if (index === -1 || index === 0)
        return WEEK_HEADER;
      return WEEK_HEADER.slice(index).concat(WEEK_HEADER.slice(0, index));
    });
    var getDayAbbr = (key) => {
      var _pack$value$datePicke, _pack$value$datePicke2;
      return (_pack$value$datePicke = (_pack$value$datePicke2 = pack.value.datePickerWeekDict) == null ? void 0 : _pack$value$datePicke2[key].abbr) != null ? _pack$value$datePicke : "";
    };
    var filterDay = (day) => day > 0 ? day : "";
    var initDate = () => {
      var {
        preview: {
          previewMonth,
          previewYear
        }
      } = props2;
      var monthNum = dayjs(previewYear + "-" + previewMonth.index).daysInMonth();
      var firstDayToWeek = dayjs(previewYear + "-" + previewMonth.index + "-01").day();
      var index = sortWeekList.value.findIndex((week) => week.index === "" + firstDayToWeek);
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter((value) => value);
    };
    var initHeader = () => {
      var {
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          max: max2,
          min: min2
        }
      } = props2;
      if (max2) {
        var date = previewYear + "-" + (toNumber(previewMonth.index) + 1);
        panelBtnDisabled.right = !dayjs(date).isSameOrBefore(dayjs(max2), "month");
      }
      if (min2) {
        var _date = previewYear + "-" + (toNumber(previewMonth.index) - 1);
        panelBtnDisabled.left = !dayjs(_date).isSameOrAfter(dayjs(min2), "month");
      }
    };
    var inRange = (day) => {
      var {
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          min: min2,
          max: max2
        }
      } = props2;
      var isBeforeMax = true;
      var isAfterMin = true;
      var previewDate = previewYear + "-" + previewMonth.index + "-" + day;
      if (max2)
        isBeforeMax = dayjs(previewDate).isSameOrBefore(dayjs(max2), "day");
      if (min2)
        isAfterMin = dayjs(previewDate).isSameOrAfter(dayjs(min2), "day");
      return isBeforeMax && isAfterMin;
    };
    var shouldChoose = (val) => {
      var {
        choose: {
          chooseDays,
          chooseRangeDay
        },
        componentProps: {
          range
        }
      } = props2;
      if (range) {
        if (!chooseRangeDay.length)
          return false;
        var isBeforeMax = dayjs(val).isSameOrBefore(dayjs(chooseRangeDay[1]), "day");
        var isAfterMin = dayjs(val).isSameOrAfter(dayjs(chooseRangeDay[0]), "day");
        return isBeforeMax && isAfterMin;
      }
      return chooseDays.includes(val);
    };
    var buttonProps = (day) => {
      if (day < 0) {
        return {
          text: true,
          outline: false,
          textColor: ""
        };
      }
      var {
        choose: {
          chooseDay: chooseDay2
        },
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          allowedDates,
          color,
          multiple,
          range
        }
      } = props2;
      var val = previewYear + "-" + previewMonth.index + "-" + day;
      var dayExist = () => {
        if (range || multiple)
          return shouldChoose(val);
        return toNumber(chooseDay2) === day && isSame.value;
      };
      var computeDisabled = () => {
        if (!inRange(day))
          return true;
        if (!allowedDates)
          return false;
        return !allowedDates(val);
      };
      var disabled = computeDisabled();
      var computeText = () => {
        if (disabled)
          return true;
        if (range || multiple)
          return !shouldChoose(val);
        return !isSame.value || toNumber(chooseDay2) !== day;
      };
      var computeOutline = () => {
        if (!(isCurrent.value && toNumber(currentDay) === day && props2.componentProps.showCurrent))
          return false;
        if ((range || multiple || isSame.value) && disabled)
          return true;
        if (range || multiple)
          return !shouldChoose(val);
        if (isSame.value)
          return chooseDay2 !== currentDay;
        return true;
      };
      var textColorOrCover = () => {
        if (disabled)
          return "";
        if (computeOutline())
          return color != null ? color : "";
        if (dayExist())
          return "";
        return "var-date-picker-color-cover";
      };
      var isCover = textColorOrCover().startsWith("var-date-picker");
      return {
        text: computeText(),
        outline: computeOutline(),
        textColor: isCover ? "" : textColorOrCover(),
        "var-date-picker-color-cover": isCover,
        class: {
          "var-day-picker__button-disabled": disabled
        }
      };
    };
    var checkDate = (checkType) => {
      reverse.value = checkType === "prev";
      panelKey.value += checkType === "prev" ? -1 : 1;
      emit("check-preview", "month", checkType);
    };
    var chooseDay = (day, event) => {
      var buttonEl = event.currentTarget;
      if (buttonEl.classList.contains("var-day-picker__button-disabled"))
        return;
      emit("choose-day", day);
    };
    var forwardRef = (checkType) => {
      headerEl.value.checkDate(checkType);
    };
    onMounted(() => {
      initDate();
      initHeader();
    });
    watch(() => props2.preview, () => {
      initDate();
      initHeader();
    });
    return {
      days,
      reverse,
      headerEl,
      panelKey,
      sortWeekList,
      panelBtnDisabled,
      forwardRef,
      filterDay,
      getDayAbbr,
      checkDate,
      chooseDay,
      buttonProps
    };
  }
});
function render$B(_ctx, _cache) {
  var _component_year_picker_panel = resolveComponent("year-picker-panel");
  var _component_month_picker_panel = resolveComponent("month-picker-panel");
  var _component_day_picker_panel = resolveComponent("day-picker-panel");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-date-picker", [_ctx.shadow ? "var-elevation--2" : null]])
  }, [createElementVNode("div", {
    class: "var-date-picker-title",
    style: normalizeStyle({
      background: _ctx.headerColor || _ctx.color
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-date-picker-title__year", [_ctx.isYearPanel ? "var-date-picker-title__year--active" : null]]),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clickEl("year"))
  }, [renderSlot(_ctx.$slots, "year", {
    year: _ctx.previewYear
  }, () => [createTextVNode(toDisplayString(_ctx.previewYear), 1)])], 2), createElementVNode("div", {
    class: normalizeClass(["var-date-picker-title__date", [!_ctx.isYearPanel ? "var-date-picker-title__date--active" : null, _ctx.range ? "var-date-picker-title__date--range" : null]]),
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clickEl("date"))
  }, [createVNode(Transition, {
    name: _ctx.multiple ? "" : "var-date-picker" + (_ctx.reverse ? "-reverse" : "") + "-translatey"
  }, {
    default: withCtx(() => {
      var _ctx$chooseMonth, _ctx$chooseMonth2, _ctx$chooseMonth3;
      return [_ctx.type === "month" ? (openBlock(), createElementBlock("div", {
        key: "" + _ctx.chooseYear + ((_ctx$chooseMonth = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth.index)
      }, [_ctx.range ? renderSlot(_ctx.$slots, "range", {
        key: 0,
        choose: _ctx.getChoose.chooseRangeMonth
      }, () => [createTextVNode(toDisplayString(_ctx.getMonthTitle), 1)]) : _ctx.multiple ? renderSlot(_ctx.$slots, "multiple", {
        key: 1,
        choose: _ctx.getChoose.chooseMonths
      }, () => [createTextVNode(toDisplayString(_ctx.getMonthTitle), 1)]) : renderSlot(_ctx.$slots, "month", {
        key: 2,
        month: (_ctx$chooseMonth2 = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth2.index,
        year: _ctx.chooseYear
      }, () => [createTextVNode(toDisplayString(_ctx.getMonthTitle), 1)])])) : (openBlock(), createElementBlock("div", {
        key: "" + _ctx.chooseYear + ((_ctx$chooseMonth3 = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth3.index) + _ctx.chooseDay
      }, [_ctx.range ? renderSlot(_ctx.$slots, "range", {
        key: 0,
        choose: _ctx.formatRange
      }, () => [createTextVNode(toDisplayString(_ctx.getDateTitle), 1)]) : _ctx.multiple ? renderSlot(_ctx.$slots, "multiple", {
        key: 1,
        choose: _ctx.getChoose.chooseDays
      }, () => [createTextVNode(toDisplayString(_ctx.getDateTitle), 1)]) : renderSlot(_ctx.$slots, "date", normalizeProps(mergeProps({
        key: 2
      }, _ctx.slotProps)), () => [createTextVNode(toDisplayString(_ctx.getDateTitle), 1)])]))];
    }),
    _: 3
  }, 8, ["name"])], 2)], 4), createElementVNode("div", {
    class: "var-date-picker-body",
    onTouchstart: _cache[2] || (_cache[2] = function() {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function() {
      return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
    }),
    onTouchend: _cache[4] || (_cache[4] = function() {
      return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
    })
  }, [createVNode(Transition, {
    name: "var-date-picker-panel-fade"
  }, {
    default: withCtx(() => [_ctx.getPanelType === "year" ? (openBlock(), createBlock(_component_year_picker_panel, {
      key: 0,
      "component-props": _ctx.componentProps,
      preview: _ctx.previewYear,
      onChooseYear: _ctx.getChooseYear
    }, null, 8, ["component-props", "preview", "onChooseYear"])) : _ctx.getPanelType === "month" ? (openBlock(), createBlock(_component_month_picker_panel, {
      key: 1,
      ref: "monthPanelEl",
      current: _ctx.currentDate,
      choose: _ctx.getChoose,
      preview: _ctx.getPreview,
      "click-year": () => _ctx.clickEl("year"),
      "component-props": _ctx.componentProps,
      onChooseMonth: _ctx.getChooseMonth,
      onCheckPreview: _ctx.checkPreview
    }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : _ctx.getPanelType === "date" ? (openBlock(), createBlock(_component_day_picker_panel, {
      key: 2,
      ref: "dayPanelEl",
      current: _ctx.currentDate,
      choose: _ctx.getChoose,
      preview: _ctx.getPreview,
      "component-props": _ctx.componentProps,
      "click-month": () => _ctx.clickEl("month"),
      onChooseDay: _ctx.getChooseDay,
      onCheckPreview: _ctx.checkPreview
    }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : createCommentVNode("v-if", true)]),
    _: 1
  })], 32)], 2);
}
var DatePicker = defineComponent({
  render: render$B,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel,
    YearPickerPanel,
    DayPickerPanel
  },
  props: props$z,
  setup(props2) {
    var startX = 0;
    var startY = 0;
    var checkType = "";
    var touchDirection;
    var currentDate = dayjs().format("YYYY-MM-D");
    var [currentYear, currentMonth] = currentDate.split("-");
    var monthDes = MONTH_LIST.find((month) => month.index === currentMonth);
    var isYearPanel = ref(false);
    var isMonthPanel = ref(false);
    var rangeDone = ref(true);
    var chooseMonth = ref();
    var chooseYear = ref();
    var chooseDay = ref();
    var previewMonth = ref(monthDes);
    var previewYear = ref(currentYear);
    var reverse = ref(false);
    var chooseMonths = ref([]);
    var chooseDays = ref([]);
    var chooseRangeMonth = ref([]);
    var chooseRangeDay = ref([]);
    var monthPanelEl = ref(null);
    var dayPanelEl = ref(null);
    var componentProps = reactive({
      allowedDates: props2.allowedDates,
      type: props2.type,
      color: props2.color,
      firstDayOfWeek: props2.firstDayOfWeek,
      min: props2.min,
      max: props2.max,
      showCurrent: props2.showCurrent,
      multiple: props2.multiple,
      range: props2.range
    });
    var getChoose = computed(() => ({
      chooseMonth: chooseMonth.value,
      chooseYear: chooseYear.value,
      chooseDay: chooseDay.value,
      chooseMonths: chooseMonths.value,
      chooseDays: chooseDays.value,
      chooseRangeMonth: chooseRangeMonth.value,
      chooseRangeDay: chooseRangeDay.value
    }));
    var getPreview = computed(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value
    }));
    var getMonthTitle = computed(() => {
      var {
        multiple,
        range
      } = props2;
      if (range) {
        return chooseRangeMonth.value.length ? chooseRangeMonth.value[0] + " ~ " + chooseRangeMonth.value[1] : "";
      }
      var monthName = "";
      if (chooseMonth.value) {
        var _pack$value$datePicke, _pack$value$datePicke2;
        monthName = (_pack$value$datePicke = (_pack$value$datePicke2 = pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke2[chooseMonth.value.index].name) != null ? _pack$value$datePicke : "";
      }
      return multiple ? "" + chooseMonths.value.length + pack.value.datePickerSelected : monthName;
    });
    var getDateTitle = computed(() => {
      var _pack$value$datePicke3, _pack$value$datePicke4, _pack$value$datePicke5, _pack$value$datePicke6;
      var {
        multiple,
        range
      } = props2;
      if (range) {
        var formatRangeDays = chooseRangeDay.value.map((date) => dayjs(date).format("YYYY-MM-DD"));
        return formatRangeDays.length ? formatRangeDays[0] + " ~ " + formatRangeDays[1] : "";
      }
      if (multiple)
        return "" + chooseDays.value.length + pack.value.datePickerSelected;
      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value)
        return "";
      var weekIndex = dayjs(chooseYear.value + "-" + chooseMonth.value.index + "-" + chooseDay.value).day();
      var week = WEEK_HEADER.find((value) => value.index === "" + weekIndex);
      var weekName = (_pack$value$datePicke3 = (_pack$value$datePicke4 = pack.value.datePickerWeekDict) == null ? void 0 : _pack$value$datePicke4[week.index].name) != null ? _pack$value$datePicke3 : "";
      var monthName = (_pack$value$datePicke5 = (_pack$value$datePicke6 = pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke6[chooseMonth.value.index].name) != null ? _pack$value$datePicke5 : "";
      var showDay = chooseDay.value.padStart(2, "0");
      if (pack.value.lang === "zh-CN")
        return chooseMonth.value.index + "-" + showDay + " " + weekName.slice(0, 3);
      return weekName.slice(0, 3) + ", " + monthName.slice(0, 3) + " " + chooseDay.value;
    });
    var getPanelType = computed(() => {
      if (isYearPanel.value)
        return "year";
      if (props2.type === "month" || isMonthPanel.value)
        return "month";
      if (props2.type === "date")
        return "date";
      return "";
    });
    var isUntouchable = computed(() => {
      return !props2.touchable || ["", "year"].includes(getPanelType.value);
    });
    var slotProps = computed(() => {
      var _chooseMonth$value, _chooseDay$value, _chooseYear$value, _chooseMonth$value$in, _chooseMonth$value2;
      var weekIndex = dayjs(chooseYear.value + "-" + ((_chooseMonth$value = chooseMonth.value) == null ? void 0 : _chooseMonth$value.index) + "-" + chooseDay.value).day();
      var date = chooseDay.value ? (_chooseDay$value = chooseDay.value) == null ? void 0 : _chooseDay$value.padStart(2, "0") : "";
      return {
        week: "" + weekIndex,
        year: (_chooseYear$value = chooseYear.value) != null ? _chooseYear$value : "",
        month: (_chooseMonth$value$in = (_chooseMonth$value2 = chooseMonth.value) == null ? void 0 : _chooseMonth$value2.index) != null ? _chooseMonth$value$in : "",
        date
      };
    });
    var formatRange = computed(() => getChoose.value.chooseRangeDay.map((choose) => dayjs(choose).format("YYYY-MM-DD")));
    var isSameYear = computed(() => chooseYear.value === previewYear.value);
    var isSameMonth = computed(() => {
      var _chooseMonth$value3;
      return ((_chooseMonth$value3 = chooseMonth.value) == null ? void 0 : _chooseMonth$value3.index) === previewMonth.value.index;
    });
    var clickEl = (type) => {
      if (type === "year")
        isYearPanel.value = true;
      else if (type === "month")
        isMonthPanel.value = true;
      else {
        isYearPanel.value = false;
        isMonthPanel.value = false;
      }
    };
    var handleTouchstart = (event) => {
      if (isUntouchable.value)
        return;
      var {
        clientX,
        clientY
      } = event.touches[0];
      startX = clientX;
      startY = clientY;
    };
    var getDirection = (x, y) => {
      return x >= y && x > 20 ? "x" : "y";
    };
    var handleTouchmove = (event) => {
      if (isUntouchable.value)
        return;
      var {
        clientX,
        clientY
      } = event.touches[0];
      var x = clientX - startX;
      var y = clientY - startY;
      touchDirection = getDirection(Math.abs(x), Math.abs(y));
      checkType = x > 0 ? "prev" : "next";
    };
    var handleTouchend = () => {
      if (isUntouchable.value || touchDirection !== "x")
        return;
      var componentRef = getPanelType.value === "month" ? monthPanelEl : dayPanelEl;
      nextTickFrame(() => {
        componentRef.value.forwardRef(checkType);
        resetState();
      });
    };
    var updateRange = (date, type) => {
      var rangeDate = type === "month" ? chooseRangeMonth : chooseRangeDay;
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date];
      rangeDone.value = !rangeDone.value;
      if (rangeDone.value) {
        var _props$onUpdateModel;
        var isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1]);
        var _date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value];
        (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, _date);
        props2.onChange == null ? void 0 : props2.onChange(_date);
      }
    };
    var updateMultiple = (date, type) => {
      var _props$onUpdateModel2;
      var multipleDates = type === "month" ? chooseMonths : chooseDays;
      var formatType = type === "month" ? "YYYY-MM" : "YYYY-MM-DD";
      var formatDates = multipleDates.value.map((date2) => dayjs(date2).format(formatType));
      var index = formatDates.findIndex((choose) => choose === date);
      if (index === -1)
        formatDates.push(date);
      else
        formatDates.splice(index, 1);
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, formatDates);
      props2.onChange == null ? void 0 : props2.onChange(formatDates);
    };
    var getReverse = (dateType, date) => {
      if (!chooseYear.value || !chooseMonth.value)
        return false;
      if (!isSameYear.value)
        return chooseYear.value > previewYear.value;
      if (dateType === "month")
        return date.index < chooseMonth.value.index;
      return isSameMonth.value ? date < toNumber(chooseDay.value) : chooseMonth.value.index > previewMonth.value.index;
    };
    var getChooseDay = (day) => {
      var {
        readonly,
        range,
        multiple,
        onChange,
        "onUpdate:modelValue": updateModelValue
      } = props2;
      if (day < 0 || readonly)
        return;
      reverse.value = getReverse("day", day);
      var date = previewYear.value + "-" + previewMonth.value.index + "-" + day;
      var formatDate = dayjs(date).format("YYYY-MM-DD");
      if (range)
        updateRange(formatDate, "day");
      else if (multiple)
        updateMultiple(formatDate, "day");
      else {
        updateModelValue == null ? void 0 : updateModelValue(formatDate);
        onChange == null ? void 0 : onChange(formatDate);
      }
    };
    var getChooseMonth = (month) => {
      var {
        type,
        readonly,
        range,
        multiple,
        onChange,
        "onUpdate:modelValue": updateModelValue
      } = props2;
      reverse.value = getReverse("month", month);
      if (type === "month" && !readonly) {
        var date = previewYear.value + "-" + month.index;
        if (range)
          updateRange(date, "month");
        else if (multiple)
          updateMultiple(date, "month");
        else {
          updateModelValue == null ? void 0 : updateModelValue(date);
          onChange == null ? void 0 : onChange(date);
        }
      } else {
        previewMonth.value = month;
      }
      isMonthPanel.value = false;
    };
    var getChooseYear = (year) => {
      previewYear.value = "" + year;
      isYearPanel.value = false;
      isMonthPanel.value = true;
    };
    var checkPreview = (type, checkType2) => {
      var changeValue = checkType2 === "prev" ? -1 : 1;
      if (type === "year") {
        previewYear.value = "" + (toNumber(previewYear.value) + changeValue);
      } else {
        var checkIndex = toNumber(previewMonth.value.index) + changeValue;
        if (checkIndex < 1) {
          previewYear.value = "" + (toNumber(previewYear.value) - 1);
          checkIndex = 12;
        }
        if (checkIndex > 12) {
          previewYear.value = "" + (toNumber(previewYear.value) + 1);
          checkIndex = 1;
        }
        previewMonth.value = MONTH_LIST.find((month) => toNumber(month.index) === checkIndex);
      }
    };
    var checkValue = () => {
      if ((props2.multiple || props2.range) && !isArray(props2.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array');
        return false;
      }
      if (!props2.multiple && !props2.range && isArray(props2.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String');
        return false;
      }
      return true;
    };
    var invalidFormatDate = (date) => {
      if (isArray(date))
        return false;
      if (date === "Invalid Date") {
        console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date');
        return true;
      }
      return false;
    };
    var rangeInit = (value, type) => {
      var rangeDate = type === "month" ? chooseRangeMonth : chooseRangeDay;
      var formatType = type === "month" ? "YYYY-MM" : "YYYY-MM-D";
      var formatDateList = value.map((choose) => dayjs(choose).format(formatType)).slice(0, 2);
      var isValid = rangeDate.value.some((date) => invalidFormatDate(date));
      if (isValid)
        return;
      rangeDate.value = formatDateList;
      var isChangeOrder = dayjs(rangeDate.value[0]).isAfter(rangeDate.value[1]);
      if (rangeDate.value.length === 2 && isChangeOrder) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]];
      }
    };
    var multipleInit = (value, type) => {
      var rangeDate = type === "month" ? chooseMonths : chooseDays;
      var formatType = type === "month" ? "YYYY-MM" : "YYYY-MM-D";
      var formatDateList = Array.from(new Set(value.map((choose) => dayjs(choose).format(formatType))));
      rangeDate.value = formatDateList.filter((date) => date !== "Invalid Date");
    };
    var dateInit = (value) => {
      var formatDate = dayjs(value).format("YYYY-MM-D");
      if (invalidFormatDate(formatDate))
        return;
      var [yearValue, monthValue, dayValue] = formatDate.split("-");
      var monthDes2 = MONTH_LIST.find((month) => month.index === monthValue);
      chooseMonth.value = monthDes2;
      chooseYear.value = yearValue;
      chooseDay.value = dayValue;
      previewMonth.value = monthDes2;
      previewYear.value = yearValue;
    };
    var resetState = () => {
      startY = 0;
      startX = 0;
      checkType = "";
      touchDirection = void 0;
    };
    watch(() => props2.modelValue, (value) => {
      if (!checkValue() || invalidFormatDate(value) || !value)
        return;
      if (props2.range) {
        if (!isArray(value))
          return;
        rangeDone.value = value.length !== 1;
        rangeInit(value, props2.type);
      } else if (props2.multiple) {
        if (!isArray(value))
          return;
        multipleInit(value, props2.type);
      } else {
        dateInit(value);
      }
    }, {
      immediate: true
    });
    watch(getPanelType, resetState);
    return {
      monthPanelEl,
      dayPanelEl,
      reverse,
      currentDate,
      chooseMonth,
      chooseYear,
      chooseDay,
      previewYear,
      isYearPanel,
      isMonthPanel,
      getMonthTitle,
      getDateTitle,
      getPanelType,
      getChoose,
      getPreview,
      componentProps,
      slotProps,
      formatRange,
      clickEl,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      getChooseDay,
      getChooseMonth,
      getChooseYear,
      checkPreview
    };
  }
});
DatePicker.install = function(app) {
  app.component(DatePicker.name, DatePicker);
};
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
function messageAlignValidator(messageAlign) {
  return ["left", "center", "right"].includes(messageAlign);
}
var props$y = _extends$6({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: messageAlignValidator
  },
  confirmButton: {
    type: Boolean,
    default: true
  },
  cancelButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, pickProps(props$S, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
]));
var _hoisted_1$p = {
  class: "var-dialog__title"
};
var _hoisted_2$i = {
  class: "var-dialog__actions"
};
function render$A(_ctx, _cache) {
  var _component_var_button = resolveComponent("var-button");
  var _component_var_popup = resolveComponent("var-popup");
  return openBlock(), createBlock(_component_var_popup, {
    class: "var-dialog__popup",
    "var-dialog-cover": "",
    show: _ctx.popupShow,
    overlay: _ctx.overlay,
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    "lock-scroll": _ctx.lockScroll,
    "close-on-click-overlay": _ctx.popupCloseOnClickOverlay,
    teleport: _ctx.teleport,
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange,
    onClickOverlay: _ctx.handleClickOverlay
  }, {
    default: withCtx(() => [createElementVNode("div", mergeProps({
      class: ["var--box var-dialog", _ctx.dialogClass],
      style: _ctx.dialogStyle
    }, _ctx.$attrs), [createElementVNode("div", _hoisted_1$p, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.dt(_ctx.title, _ctx.pack.dialogTitle)), 1)])]), createElementVNode("div", {
      class: "var-dialog__message",
      style: normalizeStyle({
        textAlign: _ctx.messageAlign
      })
    }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.message), 1)])], 4), createElementVNode("div", _hoisted_2$i, [_ctx.cancelButton ? (openBlock(), createBlock(_component_var_button, {
      key: 0,
      class: "var-dialog__button var-dialog__cancel-button",
      "var-dialog-cover": "",
      text: "",
      "text-color": _ctx.cancelButtonTextColor,
      color: _ctx.cancelButtonColor,
      onClick: _ctx.cancel
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.dt(_ctx.cancelButtonText, _ctx.pack.dialogCancelButtonText)), 1)]),
      _: 1
    }, 8, ["text-color", "color", "onClick"])) : createCommentVNode("v-if", true), _ctx.confirmButton ? (openBlock(), createBlock(_component_var_button, {
      key: 1,
      class: "var-dialog__button var-dialog__confirm-button",
      "var-dialog-cover": "",
      text: "",
      "text-color": _ctx.confirmButtonTextColor,
      color: _ctx.confirmButtonColor,
      onClick: _ctx.confirm
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.dt(_ctx.confirmButtonText, _ctx.pack.dialogConfirmButtonText)), 1)]),
      _: 1
    }, 8, ["text-color", "color", "onClick"])) : createCommentVNode("v-if", true)])], 16)]),
    _: 3
  }, 8, ["show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
var VarDialog = defineComponent({
  render: render$A,
  name: "VarDialog",
  components: {
    VarPopup: Popup,
    VarButton: Button
  },
  inheritAttrs: false,
  props: props$y,
  setup(props2) {
    var popupShow = ref(false);
    var popupCloseOnClickOverlay = ref(false);
    var done = () => {
      var _props$onUpdateShow;
      return (_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false);
    };
    var handleClickOverlay = () => {
      var _props$onUpdateShow2;
      var {
        closeOnClickOverlay,
        onClickOverlay,
        onBeforeClose
      } = props2;
      onClickOverlay == null ? void 0 : onClickOverlay();
      if (!closeOnClickOverlay) {
        return;
      }
      if (onBeforeClose != null) {
        onBeforeClose("close", done);
        return;
      }
      (_props$onUpdateShow2 = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow2.call(props2, false);
    };
    var confirm = () => {
      var _props$onUpdateShow3;
      var {
        onBeforeClose,
        onConfirm
      } = props2;
      onConfirm == null ? void 0 : onConfirm();
      if (onBeforeClose != null) {
        onBeforeClose("confirm", done);
        return;
      }
      (_props$onUpdateShow3 = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow3.call(props2, false);
    };
    var cancel = () => {
      var _props$onUpdateShow4;
      var {
        onBeforeClose,
        onCancel
      } = props2;
      onCancel == null ? void 0 : onCancel();
      if (onBeforeClose != null) {
        onBeforeClose("cancel", done);
        return;
      }
      (_props$onUpdateShow4 = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow4.call(props2, false);
    };
    watch(() => props2.show, (newValue) => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    watch(() => props2.closeOnClickOverlay, (newValue) => {
      if (props2.onBeforeClose != null) {
        popupCloseOnClickOverlay.value = false;
        return;
      }
      popupCloseOnClickOverlay.value = newValue;
    }, {
      immediate: true
    });
    return {
      pack,
      dt,
      popupShow,
      popupCloseOnClickOverlay,
      handleClickOverlay,
      confirm,
      cancel
    };
  }
});
var singletonOptions$2;
function Dialog(options) {
  if (!inBrowser()) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    Dialog.close();
    var dialogOptions = isString(options) || isNumber(options) ? {
      message: String(options)
    } : options;
    var reactiveDialogOptions = reactive(dialogOptions);
    reactiveDialogOptions.teleport = "body";
    singletonOptions$2 = reactiveDialogOptions;
    var {
      unmountInstance
    } = mountInstance(VarDialog, reactiveDialogOptions, {
      onConfirm: () => {
        reactiveDialogOptions.onConfirm == null ? void 0 : reactiveDialogOptions.onConfirm();
        resolve("confirm");
      },
      onCancel: () => {
        reactiveDialogOptions.onCancel == null ? void 0 : reactiveDialogOptions.onCancel();
        resolve("cancel");
      },
      onClose: () => {
        reactiveDialogOptions.onClose == null ? void 0 : reactiveDialogOptions.onClose();
        resolve("close");
      },
      onClosed: () => {
        reactiveDialogOptions.onClosed == null ? void 0 : reactiveDialogOptions.onClosed();
        unmountInstance();
        singletonOptions$2 === reactiveDialogOptions && (singletonOptions$2 = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions$2 === reactiveDialogOptions && (singletonOptions$2 = null);
      },
      "onUpdate:show": (value) => {
        reactiveDialogOptions.show = value;
      }
    });
    reactiveDialogOptions.show = true;
  });
}
VarDialog.install = function(app) {
  app.component(VarDialog.name, VarDialog);
};
Dialog.install = function(app) {
  app.component(VarDialog.name, VarDialog);
};
Dialog.close = () => {
  if (singletonOptions$2 != null) {
    var prevSingletonOptions = singletonOptions$2;
    singletonOptions$2 = null;
    nextTick().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};
Dialog.Component = VarDialog;
var props$x = {
  inset: {
    type: [Boolean, Number, String],
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: false
  }
};
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var _hoisted_1$o = {
  key: 0,
  class: "var-divider__text"
};
function render$z(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-divider var--box", [_ctx.vertical ? "var-divider--vertical" : null, _ctx.withText ? "var-divider--with-text" : null, _ctx.isInset ? "var-divider--inset" : null, _ctx.dashed ? "var-divider--dashed" : null]]),
    style: normalizeStyle(_ctx.style)
  }, [renderSlot(_ctx.$slots, "default", {}, () => [_ctx.description ? (openBlock(), createElementBlock("span", _hoisted_1$o, toDisplayString(_ctx.description), 1)) : createCommentVNode("v-if", true)])], 6);
}
var Divider = defineComponent({
  render: render$z,
  name: "VarDivider",
  props: props$x,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var state = reactive({
      withText: false
    });
    var isInset = computed(() => isBool(props2.inset) ? props2.inset : true);
    var style = computed(() => {
      var {
        inset,
        vertical,
        margin
      } = props2;
      var baseStyle = {
        margin
      };
      if (isBool(inset) || inset === 0)
        return _extends$5({}, baseStyle);
      var _inset = toNumber(inset);
      var absInsetWithUnit = Math.abs(_inset) + (inset + "").replace(_inset + "", "");
      return vertical ? _extends$5({}, baseStyle, {
        height: "calc(80% - " + toSizeUnit(absInsetWithUnit) + ")"
      }) : _extends$5({}, baseStyle, {
        width: "calc(100% - " + toSizeUnit(absInsetWithUnit) + ")",
        left: _inset > 0 ? toSizeUnit(absInsetWithUnit) : toSizeUnit(0)
      });
    });
    var checkHasText = () => {
      state.withText = Boolean(slots.default) || Boolean(props2.description);
    };
    onMounted(() => {
      checkHasText();
    });
    onUpdated(() => {
      checkHasText();
    });
    return _extends$5({}, toRefs(state), {
      style,
      isInset
    });
  }
});
Divider.install = function(app) {
  app.component(Divider.name, Divider);
};
var props$w = {
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  }
};
function asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$8(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$8(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var _hoisted_1$n = {
  class: "var-form"
};
function render$y(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$n, [renderSlot(_ctx.$slots, "default")]);
}
var Form = defineComponent({
  render: render$y,
  name: "VarForm",
  props: props$w,
  setup(props2) {
    var disabled = computed(() => props2.disabled);
    var readonly = computed(() => props2.readonly);
    var {
      formItems,
      bindFormItems
    } = useFormItems();
    var validate = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$8(function* () {
        var res = yield Promise.all(formItems.map((_ref2) => {
          var {
            validate: validate2
          } = _ref2;
          return validate2();
        }));
        return res.every((r) => r === true);
      });
      return function validate2() {
        return _ref.apply(this, arguments);
      };
    }();
    var reset = () => formItems.forEach((_ref3) => {
      var {
        reset: reset2
      } = _ref3;
      return reset2();
    });
    var resetValidation = () => formItems.forEach((_ref4) => {
      var {
        resetValidation: resetValidation2
      } = _ref4;
      return resetValidation2();
    });
    var formProvider = {
      disabled,
      readonly
    };
    bindFormItems(formProvider);
    return {
      validate,
      reset,
      resetValidation
    };
  }
});
Form.install = function(app) {
  app.component(Form.name, Form);
};
function asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$7(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$7(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var BACKGROUND_IMAGE_ARG_NAME = "background-image";
var LAZY_LOADING = "lazy-loading";
var LAZY_ERROR = "lazy-error";
var LAZY_ATTEMPT = "lazy-attempt";
var EVENTS = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"];
var PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
var lazyElements = [];
var listenTargets = [];
var imageCache = createCache(100);
var defaultLazyOptions = {
  loading: PIXEL,
  error: PIXEL,
  attempt: 3,
  throttleWait: 300,
  events: EVENTS
};
var checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait);
function setSRC(el, src) {
  if (el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
    el.style.backgroundImage = "url(" + src + ")";
  } else {
    el.setAttribute("src", src);
  }
}
function setLoading(el) {
  el._lazy.loading && setSRC(el, el._lazy.loading);
  checkAll();
}
function setError(el) {
  el._lazy.error && setSRC(el, el._lazy.error);
  el._lazy.state = "error";
  clear(el);
  checkAll();
}
function setSuccess(el, attemptSRC) {
  setSRC(el, attemptSRC);
  el._lazy.state = "success";
  clear(el);
  checkAll();
}
function bindEvents(listenTarget) {
  var _defaultLazyOptions$e;
  if (listenTargets.includes(listenTarget)) {
    return;
  }
  listenTargets.push(listenTarget);
  (_defaultLazyOptions$e = defaultLazyOptions.events) == null ? void 0 : _defaultLazyOptions$e.forEach((event) => {
    listenTarget.addEventListener(event, checkAllWithThrottle, {
      passive: true
    });
  });
}
function unbindEvents() {
  listenTargets.forEach((listenTarget) => {
    var _defaultLazyOptions$e2;
    (_defaultLazyOptions$e2 = defaultLazyOptions.events) == null ? void 0 : _defaultLazyOptions$e2.forEach((event) => {
      listenTarget.removeEventListener(event, checkAllWithThrottle);
    });
  });
  listenTargets.length = 0;
}
function createLazy(el, binding) {
  var _el$getAttribute, _el$getAttribute2;
  var lazyOptions = {
    loading: (_el$getAttribute = el.getAttribute(LAZY_LOADING)) != null ? _el$getAttribute : defaultLazyOptions.loading,
    error: (_el$getAttribute2 = el.getAttribute(LAZY_ERROR)) != null ? _el$getAttribute2 : defaultLazyOptions.error,
    attempt: el.getAttribute(LAZY_ATTEMPT) ? Number(el.getAttribute(LAZY_ATTEMPT)) : defaultLazyOptions.attempt
  };
  el._lazy = _extends$4({
    src: binding.value,
    arg: binding.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: false
  }, lazyOptions);
  setSRC(el, PIXEL);
  defaultLazyOptions.filter == null ? void 0 : defaultLazyOptions.filter(el._lazy);
}
function createImage(el, attemptSRC) {
  var image2 = new Image();
  image2.src = attemptSRC;
  el._lazy.preloadImage = image2;
  image2.addEventListener("load", () => {
    el._lazy.attemptLock = false;
    imageCache.add(attemptSRC);
    setSuccess(el, attemptSRC);
  });
  image2.addEventListener("error", () => {
    el._lazy.attemptLock = false;
    el._lazy.currentAttempt >= el._lazy.attempt ? setError(el) : attemptLoad(el);
  });
}
function attemptLoad(el) {
  if (el._lazy.attemptLock) {
    return;
  }
  el._lazy.attemptLock = true;
  el._lazy.currentAttempt++;
  var {
    src: attemptSRC
  } = el._lazy;
  if (imageCache.has(attemptSRC)) {
    setSuccess(el, attemptSRC);
    el._lazy.attemptLock = false;
    return;
  }
  setLoading(el);
  createImage(el, attemptSRC);
}
function check(_x) {
  return _check.apply(this, arguments);
}
function _check() {
  _check = _asyncToGenerator$7(function* (el) {
    (yield inViewport(el)) && attemptLoad(el);
  });
  return _check.apply(this, arguments);
}
function checkAll() {
  lazyElements.forEach((el) => check(el));
}
function add(_x2) {
  return _add.apply(this, arguments);
}
function _add() {
  _add = _asyncToGenerator$7(function* (el) {
    !lazyElements.includes(el) && lazyElements.push(el);
    getAllParentScroller(el).forEach(bindEvents);
    yield check(el);
  });
  return _add.apply(this, arguments);
}
function clear(el) {
  removeItem(lazyElements, el);
  lazyElements.length === 0 && unbindEvents();
}
function diff(el, binding) {
  var {
    src,
    arg
  } = el._lazy;
  return src !== binding.value || arg !== binding.arg;
}
function mounted(_x3, _x4) {
  return _mounted.apply(this, arguments);
}
function _mounted() {
  _mounted = _asyncToGenerator$7(function* (el, binding) {
    createLazy(el, binding);
    yield add(el);
  });
  return _mounted.apply(this, arguments);
}
function updated(_x5, _x6) {
  return _updated.apply(this, arguments);
}
function _updated() {
  _updated = _asyncToGenerator$7(function* (el, binding) {
    if (!diff(el, binding)) {
      lazyElements.includes(el) && (yield check(el));
      return;
    }
    yield mounted(el, binding);
  });
  return _updated.apply(this, arguments);
}
function mergeLazyOptions(lazyOptions) {
  if (lazyOptions === void 0) {
    lazyOptions = {};
  }
  var {
    events,
    loading: loading2,
    error,
    attempt,
    throttleWait,
    filter
  } = lazyOptions;
  defaultLazyOptions.events = events != null ? events : defaultLazyOptions.events;
  defaultLazyOptions.loading = loading2 != null ? loading2 : defaultLazyOptions.loading;
  defaultLazyOptions.error = error != null ? error : defaultLazyOptions.error;
  defaultLazyOptions.attempt = attempt != null ? attempt : defaultLazyOptions.attempt;
  defaultLazyOptions.throttleWait = throttleWait != null ? throttleWait : defaultLazyOptions.throttleWait;
  defaultLazyOptions.filter = filter;
}
var Lazy = {
  mounted,
  unmounted: clear,
  updated,
  install(app, lazyOptions) {
    mergeLazyOptions(lazyOptions);
    checkAllWithThrottle = throttle(checkAll, defaultLazyOptions.throttleWait);
    app.directive("lazy", this);
  }
};
function fitValidator(fit) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(fit);
}
var props$v = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fitValidator,
    default: "fill"
  },
  alt: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: true
  },
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
};
var _hoisted_1$m = ["alt", "lazy-error", "lazy-loading"];
var _hoisted_2$h = ["alt", "src"];
function render$x(_ctx, _cache) {
  var _directive_lazy = resolveDirective("lazy");
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-image var--box", [!_ctx.block ? "var--inline-block" : null]]),
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.width),
      height: _ctx.toSizeUnit(_ctx.height),
      "border-radius": _ctx.toSizeUnit(_ctx.radius)
    })
  }, [_ctx.lazy ? withDirectives((openBlock(), createElementBlock("img", {
    key: 0,
    class: "var-image__image",
    alt: _ctx.alt,
    "lazy-error": _ctx.error,
    "lazy-loading": _ctx.loading,
    style: normalizeStyle({
      objectFit: _ctx.fit
    }),
    onLoad: _cache[0] || (_cache[0] = function() {
      return _ctx.handleLoad && _ctx.handleLoad(...arguments);
    }),
    onError: _cache[1] || (_cache[1] = function() {
      return _ctx.handleError && _ctx.handleError(...arguments);
    }),
    onClick: _cache[2] || (_cache[2] = function() {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, null, 44, _hoisted_1$m)), [[_directive_lazy, _ctx.src]]) : (openBlock(), createElementBlock("img", {
    key: 1,
    class: "var-image__image",
    alt: _ctx.alt,
    style: normalizeStyle({
      objectFit: _ctx.fit
    }),
    src: _ctx.src,
    onLoad: _cache[3] || (_cache[3] = function() {
      return _ctx.handleLoad && _ctx.handleLoad(...arguments);
    }),
    onError: _cache[4] || (_cache[4] = function() {
      return _ctx.handleError && _ctx.handleError(...arguments);
    }),
    onClick: _cache[5] || (_cache[5] = function() {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, null, 44, _hoisted_2$h))], 6)), [[_directive_ripple, {
    disabled: !_ctx.ripple
  }]]);
}
var Image$1 = defineComponent({
  render: render$x,
  name: "VarImage",
  directives: {
    Lazy,
    Ripple
  },
  props: props$v,
  setup(props2) {
    var handleLoad = (e) => {
      var el = e.currentTarget;
      var {
        lazy,
        onLoad,
        onError
      } = props2;
      if (lazy) {
        el._lazy.state === "success" && (onLoad == null ? void 0 : onLoad(e));
        el._lazy.state === "error" && (onError == null ? void 0 : onError(e));
      } else {
        onLoad == null ? void 0 : onLoad(e);
      }
    };
    var handleError = (e) => {
      var {
        lazy,
        onError
      } = props2;
      !lazy && (onError == null ? void 0 : onError(e));
    };
    return {
      toSizeUnit,
      handleLoad,
      handleError
    };
  }
});
Image$1.install = function(app) {
  app.component(Image$1.name, Image$1);
};
var SWIPE_BIND_SWIPE_ITEM_KEY = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
var SWIPE_COUNT_SWIPE_ITEM_KEY = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function useSwipeItems() {
  var {
    childProviders,
    bindChildren
  } = useChildren(SWIPE_BIND_SWIPE_ITEM_KEY);
  var {
    length
  } = useAtChildrenCounter(SWIPE_COUNT_SWIPE_ITEM_KEY);
  return {
    length,
    swipeItems: childProviders,
    bindSwipeItems: bindChildren
  };
}
var props$u = {
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: true
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: false
  },
  touchable: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  }
};
function asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$6(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$6(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var SWIPE_DELAY = 250;
var SWIPE_DISTANCE = 20;
var _hoisted_1$l = {
  class: "var-swipe",
  ref: "swipeEl"
};
var _hoisted_2$g = ["onClick"];
function render$w(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$l, [createElementVNode("div", {
    class: normalizeClass(["var-swipe__track", [_ctx.vertical ? "var-swipe--vertical" : null]]),
    style: normalizeStyle({
      width: !_ctx.vertical ? _ctx.trackSize + "px" : void 0,
      height: _ctx.vertical ? _ctx.trackSize + "px" : void 0,
      transform: "translate" + (_ctx.vertical ? "Y" : "X") + "(" + _ctx.translate + "px)",
      transitionDuration: _ctx.lockDuration ? "0ms" : _ctx.toNumber(_ctx.duration) + "ms"
    }),
    onTouchstart: _cache[0] || (_cache[0] = function() {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function() {
      return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function() {
      return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 38), renderSlot(_ctx.$slots, "indicator", {
    index: _ctx.index,
    length: _ctx.length
  }, () => [_ctx.indicator && _ctx.length ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-swipe__indicators", [_ctx.vertical ? "var-swipe--indicators-vertical" : null]])
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.length, (l, idx) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["var-swipe__indicator", [_ctx.index === idx ? "var-swipe--indicator-active" : null, _ctx.vertical ? "var-swipe--indicator-vertical" : null]]),
      style: normalizeStyle({
        background: _ctx.indicatorColor
      }),
      key: l,
      onClick: ($event) => _ctx.to(idx)
    }, null, 14, _hoisted_2$g);
  }), 128))], 2)) : createCommentVNode("v-if", true)])], 512);
}
var Swipe = defineComponent({
  render: render$w,
  name: "VarSwipe",
  props: props$u,
  setup(props2) {
    var swipeEl = ref(null);
    var size = ref(0);
    var vertical = computed(() => props2.vertical);
    var trackSize = ref(0);
    var translate = ref(0);
    var lockDuration = ref(false);
    var index = ref(0);
    var {
      swipeItems,
      bindSwipeItems,
      length
    } = useSwipeItems();
    var touching = false;
    var timer = -1;
    var startX;
    var startY;
    var startTime;
    var prevX;
    var prevY;
    var findSwipeItem = (idx) => swipeItems.find((_ref) => {
      var {
        index: index2
      } = _ref;
      return index2.value === idx;
    });
    var dispatchBorrower = () => {
      if (!props2.loop) {
        return;
      }
      if (translate.value >= 0) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value);
      }
      if (translate.value <= -(trackSize.value - size.value)) {
        findSwipeItem(0).setTranslate(trackSize.value);
      }
      if (translate.value > -(trackSize.value - size.value) && translate.value < 0) {
        findSwipeItem(length.value - 1).setTranslate(0);
        findSwipeItem(0).setTranslate(0);
      }
    };
    var getSwipeIndex = (targetSwipeIndex) => {
      var swipeIndex = isNumber(targetSwipeIndex) ? targetSwipeIndex : Math.floor((translate.value - size.value / 2) / -size.value);
      var {
        loop
      } = props2;
      if (swipeIndex <= -1) {
        return loop ? -1 : 0;
      }
      if (swipeIndex >= length.value) {
        return loop ? length.value : length.value - 1;
      }
      return swipeIndex;
    };
    var swipeIndexToIndex = (swipeIndex) => {
      var {
        loop
      } = props2;
      if (swipeIndex === -1) {
        return loop ? length.value - 1 : 0;
      }
      if (swipeIndex === length.value) {
        return loop ? 0 : length.value - 1;
      }
      return swipeIndex;
    };
    var boundaryIndex = (index2) => {
      var {
        loop
      } = props2;
      if (index2 < 0) {
        return loop ? length.value - 1 : 0;
      }
      if (index2 > length.value - 1) {
        return loop ? 0 : length.value - 1;
      }
      return index2;
    };
    var fixPosition = (fn) => {
      var overLeft = translate.value >= size.value;
      var overRight = translate.value <= -trackSize.value;
      var leftTranslate = 0;
      var rightTranslate = -(trackSize.value - size.value);
      lockDuration.value = true;
      if (overLeft || overRight) {
        lockDuration.value = true;
        translate.value = overRight ? leftTranslate : rightTranslate;
        findSwipeItem(0).setTranslate(0);
        findSwipeItem(length.value - 1).setTranslate(0);
      }
      nextTickFrame(() => {
        lockDuration.value = false;
        fn == null ? void 0 : fn();
      });
    };
    var initialIndex = () => {
      index.value = boundaryIndex(toNumber(props2.initialIndex));
    };
    var startAutoplay = () => {
      var {
        autoplay
      } = props2;
      if (!autoplay || length.value <= 1) {
        return;
      }
      stopAutoplay();
      timer = window.setTimeout(() => {
        next();
        startAutoplay();
      }, toNumber(autoplay));
    };
    var stopAutoplay = () => {
      timer && clearTimeout(timer);
    };
    var getDirection = (x, y) => {
      if (x > y && x > 10) {
        return "horizontal";
      }
      if (y > x && y > 10) {
        return "vertical";
      }
    };
    var handleTouchstart = (event) => {
      if (length.value <= 1 || !props2.touchable) {
        return;
      }
      var {
        clientX,
        clientY
      } = event.touches[0];
      startX = clientX;
      startY = clientY;
      startTime = performance.now();
      touching = true;
      stopAutoplay();
      fixPosition(() => {
        lockDuration.value = true;
      });
    };
    var handleTouchmove = (event) => {
      var {
        touchable,
        vertical: vertical2
      } = props2;
      if (!touching || !touchable) {
        return;
      }
      var {
        clientX,
        clientY
      } = event.touches[0];
      var deltaX = Math.abs(clientX - startX);
      var deltaY = Math.abs(clientY - startY);
      var direction = getDirection(deltaX, deltaY);
      var expectDirection = vertical2 ? "vertical" : "horizontal";
      if (direction === expectDirection) {
        event.preventDefault();
        var moveX = prevX !== void 0 ? clientX - prevX : 0;
        var moveY = prevY !== void 0 ? clientY - prevY : 0;
        prevX = clientX;
        prevY = clientY;
        translate.value += vertical2 ? moveY : moveX;
        dispatchBorrower();
      }
    };
    var handleTouchend = () => {
      if (!touching) {
        return;
      }
      var {
        vertical: vertical2,
        onChange
      } = props2;
      var positive = vertical2 ? prevY < startY : prevX < startX;
      var distance = vertical2 ? Math.abs(startY - prevY) : Math.abs(startX - prevX);
      var quickSwiping = performance.now() - startTime <= SWIPE_DELAY && distance >= SWIPE_DISTANCE;
      var swipeIndex = quickSwiping ? positive ? getSwipeIndex(index.value + 1) : getSwipeIndex(index.value - 1) : getSwipeIndex();
      touching = false;
      lockDuration.value = false;
      prevX = void 0;
      prevY = void 0;
      translate.value = swipeIndex * -size.value;
      var prevIndex = index.value;
      index.value = swipeIndexToIndex(swipeIndex);
      startAutoplay();
      prevIndex !== index.value && (onChange == null ? void 0 : onChange(index.value));
    };
    var resize = () => {
      lockDuration.value = true;
      size.value = props2.vertical ? swipeEl.value.offsetHeight : swipeEl.value.offsetWidth;
      trackSize.value = size.value * length.value;
      translate.value = index.value * -size.value;
      swipeItems.forEach((swipeItem2) => {
        swipeItem2.setTranslate(0);
      });
      startAutoplay();
      setTimeout(() => {
        lockDuration.value = false;
      });
    };
    var next = () => {
      if (length.value <= 1) {
        return;
      }
      var {
        loop,
        onChange
      } = props2;
      var currentIndex = index.value;
      index.value = boundaryIndex(currentIndex + 1);
      onChange == null ? void 0 : onChange(index.value);
      fixPosition(() => {
        if (currentIndex === length.value - 1 && loop) {
          findSwipeItem(0).setTranslate(trackSize.value);
          translate.value = length.value * -size.value;
          return;
        }
        if (currentIndex !== length.value - 1) {
          translate.value = index.value * -size.value;
        }
      });
    };
    var prev = () => {
      if (length.value <= 1) {
        return;
      }
      var {
        loop,
        onChange
      } = props2;
      var currentIndex = index.value;
      index.value = boundaryIndex(currentIndex - 1);
      onChange == null ? void 0 : onChange(index.value);
      fixPosition(() => {
        if (currentIndex === 0 && loop) {
          findSwipeItem(length.value - 1).setTranslate(-trackSize.value);
          translate.value = size.value;
          return;
        }
        if (currentIndex !== 0) {
          translate.value = index.value * -size.value;
        }
      });
    };
    var to = (idx) => {
      if (length.value <= 1 || idx === index.value) {
        return;
      }
      idx = idx < 0 ? 0 : idx;
      idx = idx >= length.value ? length.value : idx;
      var task = idx > index.value ? next : prev;
      Array.from({
        length: Math.abs(idx - index.value)
      }).forEach(task);
    };
    var swipeProvider = {
      size,
      vertical
    };
    bindSwipeItems(swipeProvider);
    watch(() => length.value, /* @__PURE__ */ _asyncToGenerator$6(function* () {
      yield doubleRaf();
      initialIndex();
      resize();
    }));
    onMounted(() => {
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", resize);
      stopAutoplay();
    });
    return {
      length,
      index,
      swipeEl,
      trackSize,
      translate,
      lockDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      next,
      prev,
      to,
      resize,
      toNumber
    };
  }
});
Swipe.install = function(app) {
  app.component(Swipe.name, Swipe);
};
function useSwipe() {
  var {
    bindParent,
    parentProvider
  } = useParent(SWIPE_BIND_SWIPE_ITEM_KEY);
  var {
    index
  } = useAtParentIndex(SWIPE_COUNT_SWIPE_ITEM_KEY);
  if (!bindParent || !parentProvider || !index) {
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  }
  return {
    index,
    swipe: parentProvider,
    bindSwipe: bindParent
  };
}
function render$v(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: "var-swipe-item",
    style: normalizeStyle({
      width: !_ctx.vertical ? _ctx.size + "px" : void 0,
      height: _ctx.vertical ? _ctx.size + "px" : void 0,
      transform: "translate" + (_ctx.vertical ? "Y" : "X") + "(" + _ctx.translate + "px)"
    })
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
var SwipeItem = defineComponent({
  render: render$v,
  name: "VarSwipeItem",
  setup() {
    var translate = ref(0);
    var {
      swipe: swipe2,
      bindSwipe,
      index
    } = useSwipe();
    var {
      size,
      vertical
    } = swipe2;
    var setTranslate = (x) => {
      translate.value = x;
    };
    var swipeItemProvider = {
      index,
      setTranslate
    };
    bindSwipe(swipeItemProvider);
    return {
      size,
      vertical,
      translate
    };
  }
});
SwipeItem.install = function(app) {
  app.component(SwipeItem.name, SwipeItem);
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var props$t = _extends$3({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: false
  },
  "onUpdate:show": {
    type: Function
  }
}, pickProps(props$u, ["loop", "indicator", "onChange"]), pickProps(props$S, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
]));
var DISTANCE_OFFSET = 12;
var EVENT_DELAY = 200;
var TAP_DELAY = 350;
var ANIMATION_DURATION = 200;
var _hoisted_1$k = ["src", "alt"];
var _hoisted_2$f = {
  key: 0,
  class: "var-image-preview__indicators"
};
var _hoisted_3$c = {
  class: "var-image-preview__extra"
};
function render$u(_ctx, _cache) {
  var _component_var_swipe_item = resolveComponent("var-swipe-item");
  var _component_var_swipe = resolveComponent("var-swipe");
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_popup = resolveComponent("var-popup");
  return openBlock(), createBlock(_component_var_popup, {
    class: "var-image-preview__popup",
    "var-image-preview-cover": "",
    transition: "var-fade",
    show: _ctx.popupShow,
    overlay: false,
    "close-on-click-overlay": false,
    "lock-scroll": _ctx.lockScroll,
    teleport: _ctx.teleport,
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange
  }, {
    default: withCtx(() => [createVNode(_component_var_swipe, mergeProps({
      class: "var-image-preview__swipe",
      "var-image-preview-cover": "",
      touchable: _ctx.canSwipe,
      indicator: _ctx.indicator && _ctx.images.length > 1,
      "initial-index": _ctx.initialIndex,
      loop: _ctx.loop,
      onChange: _ctx.onChange
    }, _ctx.$attrs), {
      default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.images, (image2) => {
        return openBlock(), createBlock(_component_var_swipe_item, {
          class: "var-image-preview__swipe-item",
          "var-image-preview-cover": "",
          key: image2
        }, {
          default: withCtx(() => [createElementVNode("div", {
            class: "var-image-preview__zoom-container",
            style: normalizeStyle({
              transform: "scale(" + _ctx.scale + ") translate(" + _ctx.translateX + "px, " + _ctx.translateY + "px)",
              transitionTimingFunction: _ctx.transitionTimingFunction,
              transitionDuration: _ctx.transitionDuration
            }),
            onTouchstart: _cache[0] || (_cache[0] = function() {
              return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
            }),
            onTouchmove: _cache[1] || (_cache[1] = function() {
              return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
            }),
            onTouchend: _cache[2] || (_cache[2] = function() {
              return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
            })
          }, [createElementVNode("img", {
            class: "var-image-preview__image",
            src: image2,
            alt: image2
          }, null, 8, _hoisted_1$k)], 36)]),
          _: 2
        }, 1024);
      }), 128))]),
      indicator: withCtx((_ref) => {
        var {
          index,
          length
        } = _ref;
        return [renderSlot(_ctx.$slots, "indicator", {
          index,
          length
        }, () => [_ctx.indicator && _ctx.images.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$f, toDisplayString(index + 1) + " / " + toDisplayString(length), 1)) : createCommentVNode("v-if", true)])];
      }),
      _: 3
    }, 16, ["touchable", "indicator", "initial-index", "loop", "onChange"]), renderSlot(_ctx.$slots, "close-icon", {}, () => [_ctx.closeable ? (openBlock(), createBlock(_component_var_icon, {
      key: 0,
      class: "var-image-preview__close-icon",
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: _ctx.close
    }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_3$c, [renderSlot(_ctx.$slots, "extra")])]),
    _: 3
  }, 8, ["show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var VarImagePreview = defineComponent({
  render: render$u,
  name: "VarImagePreview",
  components: {
    VarSwipe: Swipe,
    VarSwipeItem: SwipeItem,
    VarPopup: Popup,
    VarIcon: Icon
  },
  inheritAttrs: false,
  props: props$t,
  setup(props2) {
    var popupShow = ref(false);
    var initialIndex = computed(() => {
      var {
        images,
        current
      } = props2;
      var index = images.findIndex((image2) => image2 === current);
      return index >= 0 ? index : 0;
    });
    var scale = ref(1);
    var translateX = ref(0);
    var translateY = ref(0);
    var transitionTimingFunction = ref(void 0);
    var transitionDuration = ref(void 0);
    var canSwipe = ref(true);
    var startTouch = null;
    var prevTouch = null;
    var checker = null;
    var getDistance = (touch, target) => {
      var {
        clientX: touchX,
        clientY: touchY
      } = touch;
      var {
        clientX: targetX,
        clientY: targetY
      } = target;
      return Math.abs(Math.sqrt(Math.pow(targetX - touchX, 2) + Math.pow(targetY - touchY, 2)));
    };
    var createVarTouch = (touches, target) => ({
      clientX: touches.clientX,
      clientY: touches.clientY,
      timestamp: Date.now(),
      target
    });
    var zoomIn = () => {
      scale.value = toNumber(props2.zoom);
      canSwipe.value = false;
      prevTouch = null;
      window.setTimeout(() => {
        transitionTimingFunction.value = "linear";
        transitionDuration.value = "0s";
      }, ANIMATION_DURATION);
    };
    var zoomOut = () => {
      scale.value = 1;
      translateX.value = 0;
      translateY.value = 0;
      canSwipe.value = true;
      prevTouch = null;
      transitionTimingFunction.value = void 0;
      transitionDuration.value = void 0;
    };
    var isDoubleTouch = (currentTouch) => {
      if (!prevTouch) {
        return false;
      }
      return getDistance(prevTouch, currentTouch) <= DISTANCE_OFFSET && currentTouch.timestamp - prevTouch.timestamp <= EVENT_DELAY && prevTouch.target === currentTouch.target;
    };
    var isTapTouch = (target) => {
      if (!target || !startTouch || !prevTouch) {
        return false;
      }
      return getDistance(startTouch, prevTouch) <= DISTANCE_OFFSET && Date.now() - prevTouch.timestamp < TAP_DELAY && (target === startTouch.target || target.parentNode === startTouch.target);
    };
    var handleTouchend = (event) => {
      checker = window.setTimeout(() => {
        isTapTouch(event.target) && close();
        startTouch = null;
      }, EVENT_DELAY);
    };
    var handleTouchstart = (event) => {
      checker && window.clearTimeout(checker);
      var {
        touches
      } = event;
      var currentTouch = createVarTouch(touches[0], event.currentTarget);
      startTouch = currentTouch;
      if (isDoubleTouch(currentTouch)) {
        scale.value > 1 ? zoomOut() : zoomIn();
        return;
      }
      prevTouch = currentTouch;
    };
    var getZoom = (target) => {
      var {
        offsetWidth,
        offsetHeight
      } = target;
      var {
        naturalWidth,
        naturalHeight
      } = target.querySelector(".var-image-preview__image");
      return {
        width: offsetWidth,
        height: offsetHeight,
        imageRadio: naturalHeight / naturalWidth,
        rootRadio: offsetHeight / offsetWidth,
        zoom: toNumber(props2.zoom)
      };
    };
    var getLimitX = (target) => {
      var {
        zoom,
        imageRadio,
        rootRadio,
        width,
        height
      } = getZoom(target);
      if (!imageRadio) {
        return 0;
      }
      var displayWidth = imageRadio > rootRadio ? height / imageRadio : width;
      return Math.max(0, (zoom * displayWidth - width) / 2) / zoom;
    };
    var getLimitY = (target) => {
      var {
        zoom,
        imageRadio,
        rootRadio,
        width,
        height
      } = getZoom(target);
      if (!imageRadio) {
        return 0;
      }
      var displayHeight = imageRadio > rootRadio ? height : width * imageRadio;
      return Math.max(0, (zoom * displayHeight - height) / 2) / zoom;
    };
    var getMoveTranslate = (current, move, limit) => {
      if (current + move >= limit) {
        return limit;
      }
      if (current + move <= -limit) {
        return -limit;
      }
      return current + move;
    };
    var handleTouchmove = (event) => {
      if (!prevTouch) {
        return;
      }
      var target = event.currentTarget;
      var {
        touches
      } = event;
      var currentTouch = createVarTouch(touches[0], target);
      if (scale.value > 1) {
        var moveX = currentTouch.clientX - prevTouch.clientX;
        var moveY = currentTouch.clientY - prevTouch.clientY;
        var limitX = getLimitX(target);
        var limitY = getLimitY(target);
        translateX.value = getMoveTranslate(translateX.value, moveX, limitX);
        translateY.value = getMoveTranslate(translateY.value, moveY, limitY);
      }
      prevTouch = currentTouch;
    };
    var close = () => {
      var _props$onUpdateShow2;
      if (scale.value > 1) {
        zoomOut();
        setTimeout(() => {
          var _props$onUpdateShow;
          return (_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false);
        }, ANIMATION_DURATION);
        return;
      }
      (_props$onUpdateShow2 = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow2.call(props2, false);
    };
    watch(() => props2.show, (newValue) => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    return {
      initialIndex,
      popupShow,
      scale,
      translateX,
      translateY,
      canSwipe,
      transitionTimingFunction,
      transitionDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      close
    };
  }
});
var singletonOptions$1;
function ImagePreview(options) {
  if (!inBrowser()) {
    return;
  }
  ImagePreview.close();
  var imagePreviewOptions = isString(options) ? {
    images: [options]
  } : isArray(options) ? {
    images: options
  } : options;
  var reactiveImagePreviewOptions = reactive(imagePreviewOptions);
  reactiveImagePreviewOptions.teleport = "body";
  singletonOptions$1 = reactiveImagePreviewOptions;
  var {
    unmountInstance
  } = mountInstance(VarImagePreview, reactiveImagePreviewOptions, {
    onClose: () => reactiveImagePreviewOptions.onClose == null ? void 0 : reactiveImagePreviewOptions.onClose(),
    onClosed: () => {
      reactiveImagePreviewOptions.onClosed == null ? void 0 : reactiveImagePreviewOptions.onClosed();
      unmountInstance();
      singletonOptions$1 === reactiveImagePreviewOptions && (singletonOptions$1 = null);
    },
    onRouteChange: () => {
      unmountInstance();
      singletonOptions$1 === reactiveImagePreviewOptions && (singletonOptions$1 = null);
    },
    "onUpdate:show": (value) => {
      reactiveImagePreviewOptions.show = value;
    }
  });
  reactiveImagePreviewOptions.show = true;
}
ImagePreview.close = () => {
  if (singletonOptions$1 != null) {
    var prevSingletonOptions = singletonOptions$1;
    singletonOptions$1 = null;
    nextTick().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};
VarImagePreview.install = function(app) {
  app.component(VarImagePreview.name, VarImagePreview);
};
ImagePreview.install = function(app) {
  app.component(VarImagePreview.name, VarImagePreview);
};
ImagePreview.Component = VarImagePreview;
var props$s = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onScroll: {
    type: Function
  }
};
function asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$5(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-sticky", [_ctx.enableCSSMode ? "var-sticky--css-mode" : null]]),
    ref: "stickyEl",
    style: normalizeStyle({
      zIndex: _ctx.toNumber(_ctx.zIndex),
      top: _ctx.enableCSSMode ? _ctx.offsetTop + "px" : void 0,
      width: _ctx.enableFixedMode ? _ctx.fixedWidth : void 0,
      height: _ctx.enableFixedMode ? _ctx.fixedHeight : void 0
    })
  }, [createElementVNode("div", {
    class: "var-sticky__wrapper",
    ref: "wrapperEl",
    style: normalizeStyle({
      zIndex: _ctx.toNumber(_ctx.zIndex),
      position: _ctx.enableFixedMode ? "fixed" : void 0,
      width: _ctx.enableFixedMode ? _ctx.fixedWrapperWidth : void 0,
      height: _ctx.enableFixedMode ? _ctx.fixedWrapperHeight : void 0,
      left: _ctx.enableFixedMode ? _ctx.fixedLeft : void 0,
      top: _ctx.enableFixedMode ? _ctx.fixedTop : void 0
    })
  }, [renderSlot(_ctx.$slots, "default")], 4)], 6);
}
var Sticky = defineComponent({
  render: render$t,
  name: "VarSticky",
  props: props$s,
  setup(props2) {
    var stickyEl = ref(null);
    var wrapperEl = ref(null);
    var isFixed = ref(false);
    var fixedTop = ref("0px");
    var fixedLeft = ref("0px");
    var fixedWidth = ref("auto");
    var fixedHeight = ref("auto");
    var fixedWrapperWidth = ref("auto");
    var fixedWrapperHeight = ref("auto");
    var enableCSSMode = computed(() => !props2.disabled && props2.cssMode);
    var enableFixedMode = computed(() => !props2.disabled && isFixed.value);
    var offsetTop = computed(() => toPxNum(props2.offsetTop));
    var scroller2;
    var handleScroll = () => {
      var {
        onScroll,
        cssMode,
        disabled
      } = props2;
      if (disabled) {
        return;
      }
      var scrollerTop = 0;
      if (scroller2 !== window) {
        var {
          top
        } = scroller2.getBoundingClientRect();
        scrollerTop = top;
      }
      var wrapper3 = wrapperEl.value;
      var sticky2 = stickyEl.value;
      var {
        top: stickyTop,
        left: stickyLeft
      } = sticky2.getBoundingClientRect();
      var currentOffsetTop = stickyTop - scrollerTop;
      if (currentOffsetTop <= offsetTop.value) {
        if (!cssMode) {
          fixedWidth.value = sticky2.offsetWidth + "px";
          fixedHeight.value = sticky2.offsetHeight + "px";
          fixedTop.value = scrollerTop + offsetTop.value + "px";
          fixedLeft.value = stickyLeft + "px";
          fixedWrapperWidth.value = wrapper3.offsetWidth + "px";
          fixedWrapperHeight.value = wrapper3.offsetHeight + "px";
          isFixed.value = true;
        }
        onScroll == null ? void 0 : onScroll(offsetTop.value, true);
      } else {
        isFixed.value = false;
        onScroll == null ? void 0 : onScroll(currentOffsetTop, false);
      }
    };
    var addScrollListener = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$5(function* () {
        yield doubleRaf();
        scroller2 = getParentScroller(stickyEl.value);
        scroller2 !== window && scroller2.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      });
      return function addScrollListener2() {
        return _ref.apply(this, arguments);
      };
    }();
    var removeScrollListener = () => {
      scroller2 !== window && scroller2.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
    watch(() => props2.disabled, handleScroll);
    onActivated(addScrollListener);
    onDeactivated(removeScrollListener);
    onMounted(addScrollListener);
    onUnmounted(removeScrollListener);
    return {
      stickyEl,
      wrapperEl,
      isFixed,
      offsetTop,
      fixedTop,
      fixedLeft,
      fixedWidth,
      fixedHeight,
      fixedWrapperWidth,
      fixedWrapperHeight,
      enableCSSMode,
      enableFixedMode,
      toNumber
    };
  }
});
Sticky.install = function(app) {
  app.component(Sticky.name, Sticky);
};
var INDEX_BAR_BIND_INDEX_ANCHOR_KEY = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
var INDEX_BAR_COUNT_INDEX_ANCHOR_KEY = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function useIndexAnchors() {
  var {
    bindChildren,
    childProviders
  } = useChildren(INDEX_BAR_BIND_INDEX_ANCHOR_KEY);
  var {
    length
  } = useAtChildrenCounter(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY);
  return {
    length,
    indexAnchors: childProviders,
    bindIndexAnchors: bindChildren
  };
}
function useIndexBar() {
  var {
    parentProvider,
    bindParent
  } = useParent(INDEX_BAR_BIND_INDEX_ANCHOR_KEY);
  var {
    index
  } = useAtParentIndex(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY);
  if (!parentProvider || !bindParent) {
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  }
  return {
    index,
    indexBar: parentProvider,
    bindIndexBar: bindParent
  };
}
var props$r = {
  index: {
    type: [Number, String]
  }
};
function render$s(_ctx, _cache) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.sticky ? "var-sticky" : _ctx.Transition), {
    "offset-top": _ctx.sticky ? _ctx.stickyOffsetTop : null,
    "z-index": _ctx.sticky ? _ctx.zIndex : null,
    disabled: _ctx.disabled && !_ctx.cssMode,
    "css-mode": _ctx.cssMode,
    ref: "anchorEl"
  }, {
    default: withCtx(() => [createElementVNode("div", mergeProps({
      class: "var-index-anchor"
    }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.name), 1)])], 16)]),
    _: 3
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
var IndexAnchor = defineComponent({
  render: render$s,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Sticky
  },
  inheritAttrs: false,
  props: props$r,
  setup(props2) {
    var {
      index,
      indexBar: indexBar2,
      bindIndexBar
    } = useIndexBar();
    var ownTop = ref(0);
    var disabled = ref(false);
    var name = computed(() => props2.index);
    var anchorEl = ref(null);
    var {
      active,
      sticky: sticky2,
      cssMode,
      stickyOffsetTop,
      zIndex
    } = indexBar2;
    var setOwnTop = () => {
      if (!anchorEl.value)
        return;
      ownTop.value = anchorEl.value.$el ? anchorEl.value.$el.offsetTop : anchorEl.value.offsetTop;
    };
    var setDisabled = (value) => {
      disabled.value = value;
    };
    var indexAnchorProvider = {
      index,
      name,
      ownTop,
      setOwnTop,
      setDisabled
    };
    bindIndexBar(indexAnchorProvider);
    return {
      name,
      anchorEl,
      active,
      sticky: sticky2,
      zIndex,
      disabled,
      cssMode,
      stickyOffsetTop,
      Transition
    };
  }
});
IndexAnchor.install = function(app) {
  app.component(IndexAnchor.name, IndexAnchor);
};
var props$q = {
  sticky: {
    type: Boolean,
    default: true
  },
  stickyOffsetTop: {
    type: Number,
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: false
  },
  hideList: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
function asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$4(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var _hoisted_1$j = {
  class: "var-index-bar",
  ref: "barEl"
};
var _hoisted_2$e = ["onClick"];
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$j, [renderSlot(_ctx.$slots, "default"), createElementVNode("ul", {
    class: "var-index-bar__anchor-list",
    style: normalizeStyle({
      zIndex: _ctx.toNumber(_ctx.zIndex) + 2,
      display: _ctx.hideList ? "none" : "block"
    })
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.anchorNameList, (anchorName) => {
    return openBlock(), createElementBlock("li", {
      key: anchorName,
      class: normalizeClass(["var-index-bar__anchor-item", {
        "var-index-bar__anchor-item--active": _ctx.active === anchorName
      }]),
      style: normalizeStyle({
        color: _ctx.active === anchorName && _ctx.highlightColor ? _ctx.highlightColor : ""
      }),
      onClick: ($event) => _ctx.anchorClick(anchorName)
    }, toDisplayString(anchorName), 15, _hoisted_2$e);
  }), 128))], 4)], 512);
}
var IndexBar = defineComponent({
  render: render$r,
  name: "VarIndexBar",
  props: props$q,
  setup(props2) {
    var {
      length,
      indexAnchors,
      bindIndexAnchors
    } = useIndexAnchors();
    var clickedName = ref("");
    var scroller2 = ref(null);
    var barEl = ref(null);
    var anchorNameList = ref([]);
    var active = ref();
    var sticky2 = computed(() => props2.sticky);
    var cssMode = computed(() => props2.cssMode);
    var stickyOffsetTop = computed(() => props2.stickyOffsetTop);
    var zIndex = computed(() => props2.zIndex);
    var indexBarProvider = {
      active,
      sticky: sticky2,
      cssMode,
      stickyOffsetTop,
      zIndex
    };
    bindIndexAnchors(indexBarProvider);
    var emitEvent = (anchor) => {
      var anchorName = isPlainObject(anchor) ? anchor.name.value : anchor;
      if (anchorName === active.value || anchorName === void 0)
        return;
      active.value = anchorName;
      props2.onChange == null ? void 0 : props2.onChange(anchorName);
    };
    var handleScroll = () => {
      var scrollTop = getScrollTop(scroller2.value);
      var scrollHeight = scroller2.value === window ? document.body.scrollHeight : scroller2.value.scrollHeight;
      var {
        offsetTop
      } = barEl.value;
      indexAnchors.forEach((anchor, index) => {
        var anchorTop = anchor.ownTop.value;
        var top = scrollTop - anchorTop + stickyOffsetTop.value - offsetTop;
        var distance = index === indexAnchors.length - 1 ? scrollHeight : indexAnchors[index + 1].ownTop.value - anchor.ownTop.value;
        if (top >= 0 && top < distance && !clickedName.value) {
          if (index && !props2.cssMode) {
            indexAnchors[index - 1].setDisabled(true);
          }
          anchor.setDisabled(false);
          emitEvent(anchor);
        }
      });
    };
    var anchorClick = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$4(function* (anchorName, manualCall) {
        var {
          offsetTop
        } = barEl.value;
        if (manualCall)
          props2.onClick == null ? void 0 : props2.onClick(anchorName);
        if (anchorName === active.value)
          return;
        var indexAnchor = indexAnchors.find((_ref2) => {
          var {
            name
          } = _ref2;
          return anchorName === name.value;
        });
        if (!indexAnchor)
          return;
        var top = indexAnchor.ownTop.value - stickyOffsetTop.value + offsetTop;
        var left = getScrollLeft(scroller2.value);
        clickedName.value = anchorName;
        emitEvent(anchorName);
        yield scrollTo(scroller2.value, {
          left,
          top,
          animation: easeInOutCubic,
          duration: toNumber(props2.duration)
        });
        nextTickFrame(() => {
          clickedName.value = "";
        });
      });
      return function anchorClick2(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    var scrollTo$1 = (index) => {
      requestAnimationFrame(() => anchorClick(index, true));
    };
    watch(() => length.value, /* @__PURE__ */ _asyncToGenerator$4(function* () {
      yield doubleRaf();
      indexAnchors.forEach((_ref4) => {
        var {
          name,
          setOwnTop
        } = _ref4;
        if (name.value)
          anchorNameList.value.push(name.value);
        setOwnTop();
      });
    }));
    onMounted(/* @__PURE__ */ _asyncToGenerator$4(function* () {
      yield doubleRaf();
      scroller2.value = getParentScroller(barEl.value);
      scroller2.value.addEventListener("scroll", handleScroll);
    }));
    onBeforeUnmount(() => {
      var _scroller$value;
      (_scroller$value = scroller2.value) == null ? void 0 : _scroller$value.removeEventListener("scroll", handleScroll);
    });
    return {
      barEl,
      active,
      zIndex,
      anchorNameList,
      toNumber,
      scrollTo: scrollTo$1,
      anchorClick
    };
  }
});
IndexBar.install = function(app) {
  app.component(IndexBar.name, IndexBar);
};
function typeValidator$1(type) {
  return ["text", "password", "number"].includes(type);
}
var props$p = {
  modelValue: {
    type: String
  },
  type: {
    type: String,
    default: "text",
    validator: typeValidator$1
  },
  textarea: {
    type: Boolean,
    default: false
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: true
  },
  hint: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  resize: {
    type: Boolean,
    default: false
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$i = {
  key: 0,
  class: "var-input__autocomplete"
};
var _hoisted_2$d = ["id", "disabled", "type", "value", "maxlength", "rows"];
var _hoisted_3$b = ["id", "disabled", "type", "value", "maxlength"];
var _hoisted_4$7 = ["for"];
function render$q(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-input var--box", [_ctx.disabled ? "var-input--disabled" : null]]),
    onClick: _cache[8] || (_cache[8] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-input__controller", [_ctx.isFocus ? "var-input--focus" : null, _ctx.errorMessage ? "var-input--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-input--disabled" : null]]),
    style: normalizeStyle({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : void 0
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-input__icon", [!_ctx.hint ? "var-input--non-hint" : null]])
  }, [renderSlot(_ctx.$slots, "prepend-icon")], 2), createElementVNode("div", {
    class: normalizeClass(["var-input__wrap", [!_ctx.hint ? "var-input--non-hint" : null]])
  }, [_ctx.type === "password" ? (openBlock(), createElementBlock("input", _hoisted_1$i)) : createCommentVNode("v-if", true), _ctx.textarea ? (openBlock(), createElementBlock("textarea", {
    key: 1,
    class: normalizeClass(["var-input__input var-input--textarea", [_ctx.formDisabled || _ctx.disabled ? "var-input--disabled" : null, _ctx.errorMessage ? "var-input--caret-error" : null]]),
    ref: "el",
    autocomplete: "new-password",
    id: _ctx.id,
    disabled: _ctx.formDisabled || _ctx.disabled || _ctx.formReadonly || _ctx.readonly,
    type: _ctx.type,
    value: _ctx.modelValue,
    maxlength: _ctx.maxlength,
    rows: _ctx.rows,
    style: normalizeStyle({
      color: _ctx.textColor,
      caretColor: !_ctx.errorMessage ? _ctx.focusColor : null,
      resize: _ctx.resize ? "vertical" : "none"
    }),
    onFocus: _cache[0] || (_cache[0] = function() {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    }),
    onInput: _cache[2] || (_cache[2] = function() {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[3] || (_cache[3] = function() {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, "\n        ", 46, _hoisted_2$d)) : (openBlock(), createElementBlock("input", {
    key: 2,
    class: normalizeClass(["var-input__input", [_ctx.formDisabled || _ctx.disabled ? "var-input--disabled" : null, _ctx.errorMessage ? "var-input--caret-error" : null]]),
    ref: "el",
    autocomplete: "new-password",
    id: _ctx.id,
    disabled: _ctx.formDisabled || _ctx.disabled || _ctx.formReadonly || _ctx.readonly,
    type: _ctx.type,
    value: _ctx.modelValue,
    maxlength: _ctx.maxlength,
    style: normalizeStyle({
      color: _ctx.textColor,
      caretColor: !_ctx.errorMessage ? _ctx.focusColor : null
    }),
    onFocus: _cache[4] || (_cache[4] = function() {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function() {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    }),
    onInput: _cache[6] || (_cache[6] = function() {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[7] || (_cache[7] = function() {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 46, _hoisted_3$b)), createElementVNode("label", {
    class: normalizeClass(["var--ellipsis", [_ctx.isFocus ? "var-input--focus" : null, _ctx.errorMessage ? "var-input--error" : null, _ctx.textarea ? "var-input__textarea-placeholder" : "var-input__placeholder", _ctx.computePlaceholderState(), !_ctx.hint ? "var-input--placeholder-non-hint" : null]]),
    style: normalizeStyle({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : void 0
    }),
    for: _ctx.id
  }, toDisplayString(_ctx.placeholder), 15, _hoisted_4$7)], 2), createElementVNode("div", {
    class: normalizeClass(["var-input__icon", [!_ctx.hint ? "var-input--non-hint" : null]])
  }, [renderSlot(_ctx.$slots, "append-icon", {}, () => [_ctx.clearable && !_ctx.isEmpty(_ctx.modelValue) ? (openBlock(), createBlock(_component_var_icon, {
    key: 0,
    class: "var-input__clear-icon",
    "var-input-cover": "",
    name: "close-circle",
    size: "14px",
    onClick: _ctx.handleClear
  }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)])], 2)], 6), _ctx.line ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-input__line", [_ctx.formDisabled || _ctx.disabled ? "var-input--line-disabled" : null, _ctx.errorMessage ? "var-input--line-error" : null]]),
    style: normalizeStyle({
      background: !_ctx.errorMessage ? _ctx.blurColor : void 0
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-input__dot", [_ctx.isFocus ? "var-input--spread" : null, _ctx.formDisabled || _ctx.disabled ? "var-input--line-disabled" : null, _ctx.errorMessage ? "var-input--line-error" : null]]),
    style: normalizeStyle({
      background: !_ctx.errorMessage ? _ctx.focusColor : void 0
    })
  }, null, 6)], 6)) : createCommentVNode("v-if", true), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    "maxlength-text": _ctx.maxlengthText
  }, null, 8, ["error-message", "maxlength-text"])], 2);
}
var Input = defineComponent({
  render: render$q,
  name: "VarInput",
  components: {
    VarIcon: Icon,
    VarFormDetails: FormDetails
  },
  props: props$p,
  setup(props2) {
    var id = ref("var-input-" + getCurrentInstance().uid);
    var el = ref(null);
    var isFocus = ref(false);
    var maxlengthText = computed(() => {
      var {
        maxlength,
        modelValue
      } = props2;
      if (!maxlength) {
        return "";
      }
      if (isEmpty(modelValue)) {
        return "0 / " + maxlength;
      }
      return String(modelValue).length + "/" + maxlength;
    });
    var {
      bindForm,
      form
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var computePlaceholderState = () => {
      var {
        hint,
        modelValue
      } = props2;
      if (!hint && !isEmpty(modelValue)) {
        return "var-input--placeholder-hidden";
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return "var-input--placeholder-hint";
      }
    };
    var handleFocus = (e) => {
      isFocus.value = true;
      props2.onFocus == null ? void 0 : props2.onFocus(e);
      validateWithTrigger("onFocus");
    };
    var handleBlur = (e) => {
      isFocus.value = false;
      props2.onBlur == null ? void 0 : props2.onBlur(e);
      validateWithTrigger("onBlur");
    };
    var handleInput = (e) => {
      var _props$onUpdateModel;
      var {
        value
      } = e.target;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, value);
      props2.onInput == null ? void 0 : props2.onInput(value, e);
      validateWithTrigger("onInput");
    };
    var handleChange = (e) => {
      var {
        value
      } = e.target;
      props2.onChange == null ? void 0 : props2.onChange(value, e);
      validateWithTrigger("onChange");
    };
    var handleClear = () => {
      var _props$onUpdateModel2;
      var {
        disabled,
        readonly,
        clearable,
        onClear
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
        return;
      }
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, "");
      onClear == null ? void 0 : onClear("");
      validateWithTrigger("onClear");
    };
    var handleClick = (e) => {
      var {
        disabled,
        onClick
      } = props2;
      if (form != null && form.disabled.value || disabled) {
        return;
      }
      onClick == null ? void 0 : onClick(e);
      validateWithTrigger("onClick");
    };
    var reset = () => {
      var _props$onUpdateModel3;
      (_props$onUpdateModel3 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel3.call(props2, "");
      resetValidation();
    };
    var validate = () => v(props2.rules, props2.modelValue);
    var focus = () => {
      el.value.focus();
    };
    var blur = () => {
      el.value.blur();
    };
    var inputProvider = {
      reset,
      validate,
      resetValidation
    };
    bindForm == null ? void 0 : bindForm(inputProvider);
    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      isEmpty,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      validate,
      resetValidation,
      reset,
      focus,
      blur
    };
  }
});
Input.install = function(app) {
  app.component(Input.name, Input);
};
var props$o = {
  loading: {
    type: Boolean,
    default: false
  },
  immediateCheck: {
    type: Boolean,
    default: true
  },
  finished: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: {
    type: Function
  },
  "onUpdate:loading": {
    type: Function
  },
  "onUpdate:error": {
    type: Function
  }
};
function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$3(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var _hoisted_1$h = {
  class: "var-list var--box",
  ref: "listEl"
};
var _hoisted_2$c = {
  class: "var-list__loading"
};
var _hoisted_3$a = {
  class: "var-list__loading-text"
};
var _hoisted_4$6 = {
  class: "var-list__finished"
};
var _hoisted_5$6 = {
  class: "var-list__detector",
  ref: "detectorEl"
};
function render$p(_ctx, _cache) {
  var _component_var_loading = resolveComponent("var-loading");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1$h, [renderSlot(_ctx.$slots, "default"), _ctx.loading ? renderSlot(_ctx.$slots, "loading", {
    key: 0
  }, () => [createElementVNode("div", _hoisted_2$c, [createElementVNode("div", _hoisted_3$a, toDisplayString(_ctx.dt(_ctx.loadingText, _ctx.pack.listLoadingText)), 1), createVNode(_component_var_loading, {
    size: "mini",
    radius: 10
  })])]) : createCommentVNode("v-if", true), _ctx.finished ? renderSlot(_ctx.$slots, "finished", {
    key: 1
  }, () => [createElementVNode("div", _hoisted_4$6, toDisplayString(_ctx.dt(_ctx.finishedText, _ctx.pack.listFinishedText)), 1)]) : createCommentVNode("v-if", true), _ctx.error ? renderSlot(_ctx.$slots, "error", {
    key: 2
  }, () => [withDirectives((openBlock(), createElementBlock("div", {
    class: "var-list__error",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.load && _ctx.load(...arguments);
    })
  }, [createTextVNode(toDisplayString(_ctx.dt(_ctx.errorText, _ctx.pack.listErrorText)), 1)])), [[_directive_ripple]])]) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5$6, null, 512)], 512);
}
var List = defineComponent({
  render: render$p,
  name: "VarList",
  directives: {
    Ripple
  },
  components: {
    VarLoading: Loading
  },
  props: props$o,
  setup(props2) {
    var listEl = ref(null);
    var detectorEl = ref(null);
    var scroller2;
    var load = () => {
      var _props$onUpdateError, _props$onUpdateLoadi;
      (_props$onUpdateError = props2["onUpdate:error"]) == null ? void 0 : _props$onUpdateError.call(props2, false);
      (_props$onUpdateLoadi = props2["onUpdate:loading"]) == null ? void 0 : _props$onUpdateLoadi.call(props2, true);
      props2.onLoad == null ? void 0 : props2.onLoad();
    };
    var isReachBottom = () => {
      var containerBottom = scroller2 === window ? window.innerHeight : scroller2.getBoundingClientRect().bottom;
      var {
        bottom: detectorBottom
      } = detectorEl.value.getBoundingClientRect();
      return Math.floor(detectorBottom) - toPxNum(props2.offset) <= containerBottom;
    };
    var check2 = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator$3(function* () {
        yield nextTick();
        var {
          loading: loading2,
          finished,
          error
        } = props2;
        if (!loading2 && !finished && !error && isReachBottom()) {
          load();
        }
      });
      return function check3() {
        return _ref.apply(this, arguments);
      };
    }();
    onMounted(() => {
      scroller2 = getParentScroller(listEl.value);
      props2.immediateCheck && check2();
      scroller2.addEventListener("scroll", check2);
    });
    onUnmounted(() => {
      scroller2.removeEventListener("scroll", check2);
    });
    return {
      pack,
      listEl,
      detectorEl,
      dt,
      isNumber,
      load,
      check: check2
    };
  }
});
List.install = function(app) {
  app.component(List.name, List);
};
function alignmentValidator(alignment) {
  return ["top", "bottom"].includes(alignment);
}
var props$n = {
  show: {
    type: Boolean,
    default: false
  },
  alignment: {
    type: String,
    default: "top",
    validator: alignmentValidator
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: String,
    default: "body"
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$2(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Menu = defineComponent({
  name: "VarMenu",
  props: props$n,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var host = ref(null);
    var menu2 = ref(null);
    var to = ref();
    var top = ref(0);
    var left = ref(0);
    var {
      zIndex
    } = useZIndex(() => props2.show, 1);
    var {
      disabled
    } = useTeleport();
    var clickSelf = false;
    var computeTop = (alignment) => {
      return alignment === "top" ? getTop$1(host.value) : getTop$1(host.value) - menu2.value.offsetHeight;
    };
    var handleClick = () => {
      clickSelf = true;
    };
    var handleMenuClose = () => {
      var _props$onUpdateShow;
      if (clickSelf) {
        clickSelf = false;
        return;
      }
      if (!props2.show) {
        return;
      }
      (_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false);
    };
    var resize = () => {
      top.value = computeTop(props2.alignment);
      left.value = getLeft(host.value);
    };
    var transitionStyle = computed(() => {
      return {
        top: "calc(" + top.value + "px + " + toSizeUnit(props2.offsetY) + ")",
        left: "calc(" + left.value + "px + " + toSizeUnit(props2.offsetX) + ")",
        zIndex: zIndex.value
      };
    });
    var renderTransition = () => createVNode(Transition, {
      "name": "var-menu",
      "onAfterEnter": props2.onOpened,
      "onAfterLeave": props2.onClosed
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": "var-menu__menu var-elevation--3",
        "ref": menu2,
        "style": transitionStyle.value,
        "onClick": (event) => {
          event.stopPropagation();
        }
      }, [slots.menu == null ? void 0 : slots.menu()]), [[vShow, props2.show]])]
    });
    watch(() => props2.alignment, resize);
    watch(() => props2.show, /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator$2(function* (newValue) {
        var {
          onOpen,
          onClose
        } = props2;
        if (newValue) {
          yield nextTick();
          resize();
        }
        newValue ? onOpen == null ? void 0 : onOpen() : onClose == null ? void 0 : onClose();
      });
      return function(_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    watch(() => props2.teleport, (newValue) => {
      to.value = newValue;
    });
    onMounted(() => {
      to.value = props2.teleport;
      resize();
      document.addEventListener("click", handleMenuClose);
      window.addEventListener("resize", resize);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleMenuClose);
      window.removeEventListener("resize", resize);
    });
    exposeApis({
      resize
    });
    return () => {
      var _slot;
      return createVNode("div", {
        "class": "var-menu",
        "ref": host,
        "onClick": handleClick
      }, [slots.default == null ? void 0 : slots.default(), to.value ? createVNode(Teleport, {
        "to": to.value,
        "disabled": disabled.value
      }, _isSlot$1(_slot = renderTransition()) ? _slot : {
        default: () => [_slot]
      }) : renderTransition()]);
    };
  }
});
Menu.install = function(app) {
  app.component(Menu.name, Menu);
};
var SELECT_BIND_OPTION_KEY = Symbol("SELECT_BIND_OPTION_KEY");
var SELECT_COUNT_OPTION_KEY = Symbol("SELECT_COUNT_OPTION_KEY");
function useOptions() {
  var {
    bindChildren,
    childProviders
  } = useChildren(SELECT_BIND_OPTION_KEY);
  var {
    length
  } = useAtChildrenCounter(SELECT_COUNT_OPTION_KEY);
  return {
    length,
    options: childProviders,
    bindOptions: bindChildren
  };
}
function useSelect() {
  var {
    bindParent,
    parentProvider
  } = useParent(SELECT_BIND_OPTION_KEY);
  var {
    index
  } = useAtParentIndex(SELECT_COUNT_OPTION_KEY);
  if (!bindParent || !parentProvider) {
    throw Error("<var-option/> must in <var-select/>");
  }
  return {
    index,
    select: parentProvider,
    bindSelect: bindParent
  };
}
var props$m = {
  label: {},
  value: {}
};
var _hoisted_1$g = {
  class: "var-option__text var--ellipsis"
};
function render$o(_ctx, _cache) {
  var _component_var_checkbox = resolveComponent("var-checkbox");
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-option var--box", [_ctx.optionSelected ? "var-option--selected-color" : null]]),
    style: normalizeStyle({
      width: _ctx.wrapWidth,
      color: _ctx.optionSelected ? _ctx.focusColor : void 0
    }),
    onClick: _cache[2] || (_cache[2] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-option__cover", [_ctx.optionSelected ? "var-option--selected-background" : null]]),
    style: normalizeStyle({
      background: _ctx.optionSelected ? _ctx.focusColor : void 0
    })
  }, null, 6), _ctx.multiple ? (openBlock(), createBlock(_component_var_checkbox, {
    key: 0,
    ref: "checkbox",
    "checked-color": _ctx.focusColor,
    modelValue: _ctx.optionSelected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.optionSelected = $event),
    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
    }, ["stop"])),
    onChange: _ctx.handleSelect
  }, null, 8, ["checked-color", "modelValue", "onChange"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$g, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])])], 6)), [[_directive_ripple]]);
}
var Option = defineComponent({
  render: render$o,
  name: "VarOption",
  directives: {
    Ripple
  },
  components: {
    VarCheckbox: Checkbox
  },
  props: props$m,
  setup(props2) {
    var optionSelected = ref(false);
    var selected = computed(() => optionSelected.value);
    var label = computed(() => props2.label);
    var value = computed(() => props2.value);
    var {
      select: select2,
      bindSelect
    } = useSelect();
    var {
      wrapWidth,
      multiple,
      focusColor,
      onSelect
    } = select2;
    var handleClick = () => {
      optionSelected.value = !optionSelected.value;
      onSelect(optionProvider);
    };
    var handleSelect = () => onSelect(optionProvider);
    var sync = (checked) => {
      optionSelected.value = checked;
    };
    var optionProvider = {
      label,
      value,
      selected,
      sync
    };
    watch([() => props2.label, () => props2.value], () => {
      if (props2.label == null && props2.value == null) {
        throw Error("Props label and value can't both be undefined\n");
      }
    }, {
      immediate: true
    });
    bindSelect(optionProvider);
    return {
      optionSelected,
      wrapWidth,
      multiple,
      focusColor,
      handleClick,
      handleSelect
    };
  }
});
Option.install = function(app) {
  app.component(Option.name, Option);
};
var props$l = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: false
  },
  simple: {
    type: Boolean,
    default: true
  },
  showSizeChanger: {
    type: Boolean,
    default: true
  },
  showQuickJumper: {
    type: Boolean,
    default: false
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:current": {
    type: Function
  },
  "onUpdate:size": {
    type: Function
  }
};
var _hoisted_1$f = {
  class: "var-pagination"
};
var _hoisted_2$b = ["item-mode", "onClick"];
var _hoisted_3$9 = {
  key: 4,
  class: "var-pagination__total"
};
function render$n(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_input = resolveComponent("var-input");
  var _component_var_cell = resolveComponent("var-cell");
  var _component_var_menu = resolveComponent("var-menu");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", _hoisted_1$f, [withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(["var-pagination__item var-pagination__prev", {
      "var-pagination__item-disabled": _ctx.current <= 1 || _ctx.disabled,
      "var-pagination__item-hover": _ctx.simple,
      "var-elevation--2": !_ctx.simple
    }]),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clickItem("prev"))
  }, [renderSlot(_ctx.$slots, "prev", {}, () => [createVNode(_component_var_icon, {
    name: "chevron-left"
  })])], 2)), [[_directive_ripple, {
    disabled: _ctx.current <= 1 || _ctx.disabled
  }]]), _ctx.simple ? (openBlock(), createElementBlock("li", {
    key: 0,
    class: normalizeClass(["var-pagination__simple", {
      "var-pagination__item-disabled": _ctx.disabled
    }])
  }, [createVNode(_component_var_input, {
    modelValue: _ctx.simpleValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.simpleValue = $event),
    disabled: _ctx.disabled,
    "var-pagination-cover": "",
    onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.setPage("simple", _ctx.simpleValue, $event)),
    onKeydown: _cache[3] || (_cache[3] = withKeys(($event) => _ctx.setPage("simple", _ctx.simpleValue, $event), ["enter"]))
  }, null, 8, ["modelValue", "disabled"]), createElementVNode("span", null, "/ " + toDisplayString(_ctx.pageCount), 1)], 2)) : (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList(_ctx.pageList, (item, index) => {
    return withDirectives((openBlock(), createElementBlock("li", {
      key: _ctx.toNumber(item) + index,
      "item-mode": _ctx.getMode(item, index),
      class: normalizeClass(["var-pagination__item var-elevation--2", {
        "var-pagination__item-active": item === _ctx.current && !_ctx.disabled,
        "var-pagination__item-hide": _ctx.isHideEllipsis(item, index),
        "var-pagination__item-disabled": _ctx.disabled,
        "var-pagination__item-disabled-active": item === _ctx.current && _ctx.disabled
      }]),
      onClick: ($event) => _ctx.clickItem(item, index)
    }, [createTextVNode(toDisplayString(item), 1)], 10, _hoisted_2$b)), [[_directive_ripple, {
      disabled: _ctx.disabled
    }]]);
  }), 128)), withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(["var-pagination__item var-pagination__next", {
      "var-pagination__item-disabled": _ctx.current >= _ctx.pageCount || _ctx.disabled,
      "var-pagination__item-hover": _ctx.simple,
      "var-elevation--2": !_ctx.simple
    }]),
    onClick: _cache[4] || (_cache[4] = ($event) => _ctx.clickItem("next"))
  }, [renderSlot(_ctx.$slots, "next", {}, () => [createVNode(_component_var_icon, {
    name: "chevron-right"
  })])], 2)), [[_directive_ripple, {
    disabled: _ctx.current >= _ctx.pageCount || _ctx.disabled
  }]]), _ctx.showSizeChanger ? (openBlock(), createElementBlock("li", {
    key: 2,
    class: normalizeClass(["var-pagination__size", {
      "var-pagination__item-disabled": _ctx.disabled
    }])
  }, [createVNode(_component_var_menu, {
    show: _ctx.menuVisible,
    "onUpdate:show": _cache[6] || (_cache[6] = ($event) => _ctx.menuVisible = $event),
    "offset-x": -4
  }, {
    menu: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sizeOption, (option2, index) => {
      return withDirectives((openBlock(), createBlock(_component_var_cell, {
        class: normalizeClass(["var-pagination__list", {
          "var-pagination__list-active": _ctx.size === option2
        }]),
        key: index,
        onClick: ($event) => _ctx.clickSize(option2)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(option2) + toDisplayString(_ctx.pack.paginationItem) + " / " + toDisplayString(_ctx.pack.paginationPage), 1)]),
        _: 2
      }, 1032, ["class", "onClick"])), [[_directive_ripple]]);
    }), 128))]),
    default: withCtx(() => [createElementVNode("div", {
      class: "var-pagination__size-open",
      style: {
        "display": "flex"
      },
      onClick: _cache[5] || (_cache[5] = function() {
        return _ctx.showMenu && _ctx.showMenu(...arguments);
      })
    }, [createElementVNode("span", null, toDisplayString(_ctx.size) + toDisplayString(_ctx.pack.paginationItem) + " / " + toDisplayString(_ctx.pack.paginationPage), 1), createVNode(_component_var_icon, {
      class: "var-pagination__size-open-icon",
      "var-pagination-cover": "",
      name: "menu-down"
    })])]),
    _: 1
  }, 8, ["show"])], 2)) : createCommentVNode("v-if", true), _ctx.showQuickJumper && !_ctx.simple ? (openBlock(), createElementBlock("li", {
    key: 3,
    class: normalizeClass(["var-pagination__quickly", {
      "var-pagination__item-disabled": _ctx.disabled
    }])
  }, [createTextVNode(toDisplayString(_ctx.pack.paginationJump) + " ", 1), createVNode(_component_var_input, {
    modelValue: _ctx.inputValue,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.inputValue = $event),
    disabled: _ctx.disabled,
    "var-pagination-cover": "",
    onBlur: _cache[8] || (_cache[8] = ($event) => _ctx.setPage("quick", _ctx.inputValue, $event)),
    onKeydown: _cache[9] || (_cache[9] = withKeys(($event) => _ctx.setPage("quick", _ctx.inputValue, $event), ["enter"]))
  }, null, 8, ["modelValue", "disabled"])], 2)) : createCommentVNode("v-if", true), _ctx.totalText ? (openBlock(), createElementBlock("li", _hoisted_3$9, toDisplayString(_ctx.totalText), 1)) : createCommentVNode("v-if", true)]);
}
var Pagination = defineComponent({
  render: render$n,
  name: "VarPagination",
  components: {
    VarMenu: Menu,
    VarIcon: Icon,
    VarCell: Cell,
    VarInput: Input
  },
  directives: {
    Ripple
  },
  props: props$l,
  setup(props2) {
    var menuVisible = ref(false);
    var inputValue = ref("");
    var simpleValue = ref("1");
    var isHideEllipsisHead = ref(false);
    var isHideEllipsisTail = ref(false);
    var current = ref(toNumber(props2.current) || 1);
    var size = ref(toNumber(props2.size) || 10);
    var pageList = ref([]);
    var activePosition = computed(() => Math.ceil(props2.maxPagerCount / 2));
    var pageCount = computed(() => Math.ceil(toNumber(props2.total) / toNumber(size.value)));
    var range = computed(() => {
      var start = size.value * (current.value - 1) + 1;
      var end = Math.min(size.value * current.value, toNumber(props2.total));
      return [start, end];
    });
    var totalText = computed(() => {
      if (!props2.showTotal)
        return "";
      return props2.showTotal(toNumber(props2.total), range.value);
    });
    var isHideEllipsis = (item, index) => {
      if (isNumber(item))
        return false;
      return index === 1 ? isHideEllipsisHead.value : isHideEllipsisTail.value;
    };
    var getMode = (item, index) => {
      if (isNumber(item))
        return "basic";
      return index === 1 ? "head" : "tail";
    };
    var clickItem = (item, index) => {
      if (item === current.value || props2.disabled)
        return;
      if (isNumber(item))
        current.value = item;
      else if (item === "prev")
        current.value > 1 && (current.value -= 1);
      else if (item === "next")
        current.value < pageCount.value && (current.value += 1);
      else if (item === "...") {
        if (index === 1) {
          current.value = Math.max(current.value - props2.maxPagerCount, 1);
        } else {
          current.value = Math.min(current.value + props2.maxPagerCount, pageCount.value);
        }
      }
    };
    var showMenu = () => {
      if (props2.disabled)
        return;
      menuVisible.value = true;
    };
    var clickSize = (option2) => {
      size.value = option2;
      menuVisible.value = false;
    };
    var isValidatePage = (value) => {
      var pattern = /^[1-9][0-9]*$/;
      return pattern.test(value);
    };
    var setPage = (type, value, event) => {
      event.target.blur();
      if (isValidatePage(value)) {
        var valueNum = toNumber(value);
        if (valueNum > pageCount.value) {
          valueNum = pageCount.value;
          simpleValue.value = "" + valueNum;
        }
        if (valueNum !== current.value)
          current.value = valueNum;
      }
      if (type === "quick")
        inputValue.value = "";
      if (type === "simple" && !isValidatePage(value))
        simpleValue.value = "" + current.value;
    };
    watch([() => props2.current, () => props2.size], (_ref) => {
      var [newCurrent, newSize] = _ref;
      current.value = toNumber(newCurrent) || 1;
      size.value = toNumber(newSize || 10);
    });
    watch([current, size], (_ref2, _ref3) => {
      var _props$onUpdateCurre, _props$onUpdateSize;
      var [newCurrent, newSize] = _ref2;
      var [oldCurrent, oldSize] = _ref3;
      if (newCurrent > pageCount.value) {
        current.value = pageCount.value;
        return;
      }
      var list2 = [];
      var {
        maxPagerCount,
        total,
        onChange
      } = props2;
      var oldCount = Math.ceil(toNumber(total) / toNumber(oldSize));
      var rEllipseSign = pageCount.value - (maxPagerCount - activePosition.value) - 1;
      simpleValue.value = "" + newCurrent;
      if (pageCount.value - 2 > maxPagerCount) {
        if (oldCurrent === void 0 || pageCount.value !== oldCount) {
          for (var i = 2; i < maxPagerCount + 2; i++) {
            list2.push(i);
          }
        }
        if (newCurrent <= maxPagerCount && newCurrent < rEllipseSign) {
          list2 = [];
          for (var _i = 1; _i < maxPagerCount + 1; _i++) {
            list2.push(_i + 1);
          }
          isHideEllipsisHead.value = true;
          isHideEllipsisTail.value = false;
        }
        if (newCurrent > maxPagerCount && newCurrent < rEllipseSign) {
          list2 = [];
          for (var _i2 = 1; _i2 < maxPagerCount + 1; _i2++) {
            list2.push(newCurrent + _i2 - activePosition.value);
          }
          isHideEllipsisHead.value = newCurrent === 2 && maxPagerCount === 1;
          isHideEllipsisTail.value = false;
        }
        if (newCurrent >= rEllipseSign) {
          list2 = [];
          for (var _i3 = 1; _i3 < maxPagerCount + 1; _i3++) {
            list2.push(pageCount.value - (maxPagerCount - _i3) - 1);
          }
          isHideEllipsisHead.value = false;
          isHideEllipsisTail.value = true;
        }
        list2 = [1, "...", ...list2, "...", pageCount.value];
      } else {
        for (var _i4 = 1; _i4 <= pageCount.value; _i4++) {
          list2.push(_i4);
        }
      }
      pageList.value = list2;
      if (oldCurrent !== void 0)
        onChange == null ? void 0 : onChange(newCurrent, newSize);
      (_props$onUpdateCurre = props2["onUpdate:current"]) == null ? void 0 : _props$onUpdateCurre.call(props2, newCurrent);
      (_props$onUpdateSize = props2["onUpdate:size"]) == null ? void 0 : _props$onUpdateSize.call(props2, newSize);
    }, {
      immediate: true
    });
    return {
      pack,
      current,
      menuVisible,
      size,
      pageCount,
      pageList,
      inputValue,
      simpleValue,
      totalText,
      getMode,
      isHideEllipsis,
      clickItem,
      showMenu,
      clickSize,
      setPage,
      toNumber
    };
  }
});
Pagination.install = function(app) {
  app.component(Pagination.name, Pagination);
};
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var props$k = _extends$2({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: true
  },
  cascade: {
    type: Boolean,
    default: false
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  dynamic: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  }
}, pickProps(props$S, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"]));
var MOMENTUM_RECORD_TIME = 300;
var MOMENTUM_ALLOW_DISTANCE = 15;
var sid$1 = 0;
var _hoisted_1$e = {
  class: "var-picker__toolbar"
};
var _hoisted_2$a = {
  class: "var-picker__title"
};
var _hoisted_3$8 = ["onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_4$5 = ["onTransitionend"];
var _hoisted_5$5 = {
  class: "var-picker__text"
};
function render$m(_ctx, _cache) {
  var _component_var_button = resolveComponent("var-button");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.dynamic ? "var-popup" : _ctx.Transition), mergeProps(_ctx.dynamic ? {
    onOpen: _ctx.onOpen,
    onOpened: _ctx.onOpened,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onClickOverlay: _ctx.onClickOverlay,
    onRouteChange: _ctx.onRouteChange,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    teleport: _ctx.teleport,
    show: _ctx.show,
    "onUpdate:show": _ctx.handlePopupUpdateShow,
    position: "bottom",
    class: "var-picker__popup"
  } : null, {
    "var-picker-cover": ""
  }), {
    default: withCtx(() => [createElementVNode("div", mergeProps({
      class: "var-picker"
    }, _ctx.$attrs), [createElementVNode("div", _hoisted_1$e, [renderSlot(_ctx.$slots, "cancel", {}, () => [createVNode(_component_var_button, {
      class: "var-picker__cancel-button",
      "var-picker-cover": "",
      text: "",
      "text-color": _ctx.cancelButtonTextColor,
      onClick: _ctx.cancel
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.dt(_ctx.cancelButtonText, _ctx.pack.pickerCancelButtonText)), 1)]),
      _: 1
    }, 8, ["text-color", "onClick"])]), renderSlot(_ctx.$slots, "title", {}, () => [createElementVNode("div", _hoisted_2$a, toDisplayString(_ctx.dt(_ctx.title, _ctx.pack.pickerTitle)), 1)]), renderSlot(_ctx.$slots, "confirm", {}, () => [createVNode(_component_var_button, {
      class: "var-picker__confirm-button",
      text: "",
      "var-picker-cover": "",
      "text-color": _ctx.confirmButtonTextColor,
      onClick: _ctx.confirm
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.dt(_ctx.confirmButtonText, _ctx.pack.pickerConfirmButtonText)), 1)]),
      _: 1
    }, 8, ["text-color", "onClick"])])]), createElementVNode("div", {
      class: "var-picker__columns",
      style: normalizeStyle({
        height: _ctx.columnHeight + "px"
      })
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.scrollColumns, (c) => {
      return openBlock(), createElementBlock("div", {
        class: "var-picker__column",
        key: c.id,
        onTouchstart: ($event) => _ctx.handleTouchstart($event, c),
        onTouchmove: withModifiers(($event) => _ctx.handleTouchmove($event, c), ["prevent"]),
        onTouchend: ($event) => _ctx.handleTouchend($event, c)
      }, [createElementVNode("div", {
        class: "var-picker__scroller",
        ref_for: true,
        ref: (el) => _ctx.getScrollEl(el, c),
        style: normalizeStyle({
          transform: "translateY(" + c.translate + "px)",
          transitionDuration: c.duration + "ms",
          transitionProperty: c.duration ? "transform" : "none"
        }),
        onTransitionend: ($event) => _ctx.handleTransitionend(c)
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(c.column.texts, (t) => {
        return openBlock(), createElementBlock("div", {
          class: "var-picker__option",
          style: normalizeStyle({
            height: _ctx.optionHeight + "px"
          }),
          key: t
        }, [createElementVNode("div", _hoisted_5$5, toDisplayString(t), 1)], 4);
      }), 128))], 44, _hoisted_4$5)], 40, _hoisted_3$8);
    }), 128)), createElementVNode("div", {
      class: "var-picker__picked",
      style: normalizeStyle({
        top: _ctx.center + "px",
        height: _ctx.optionHeight + "px"
      })
    }, null, 4), createElementVNode("div", {
      class: "var-picker__mask",
      style: normalizeStyle({
        backgroundSize: "100% " + (_ctx.columnHeight - _ctx.optionHeight) / 2 + "px"
      })
    }, null, 4)], 4)], 16)]),
    _: 3
  }, 16);
}
var VarPicker = defineComponent({
  render: render$m,
  name: "VarPicker",
  components: {
    VarButton: Button,
    VarPopup: Popup
  },
  inheritAttrs: false,
  props: props$k,
  setup(props2) {
    var scrollColumns = ref([]);
    var optionHeight = computed(() => toPxNum(props2.optionHeight));
    var optionCount = computed(() => toPxNum(props2.optionCount));
    var center = computed(() => optionCount.value * optionHeight.value / 2 - optionHeight.value / 2);
    var columnHeight = computed(() => optionCount.value * optionHeight.value);
    var prevIndexes = [];
    var getScrollEl = (el, scrollColumn) => {
      scrollColumn.scrollEl = el;
    };
    var handlePopupUpdateShow = (value) => {
      var _props$onUpdateShow;
      (_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, value);
    };
    var limitTranslate = (scrollColumn) => {
      var START_LIMIT = optionHeight.value + center.value;
      var END_LIMIT = center.value - scrollColumn.column.texts.length * optionHeight.value;
      if (scrollColumn.translate >= START_LIMIT) {
        scrollColumn.translate = START_LIMIT;
      }
      if (scrollColumn.translate <= END_LIMIT) {
        scrollColumn.translate = END_LIMIT;
      }
    };
    var boundaryIndex = (scrollColumn, index) => {
      var {
        length
      } = scrollColumn.column.texts;
      index = index >= length ? length - 1 : index;
      index = index <= 0 ? 0 : index;
      return index;
    };
    var getIndex = (scrollColumn) => {
      var index = Math.round((center.value - scrollColumn.translate) / optionHeight.value);
      return boundaryIndex(scrollColumn, index);
    };
    var getPicked = () => {
      var texts = scrollColumns.value.map((scrollColumn) => scrollColumn.column.texts[scrollColumn.index]);
      var indexes = scrollColumns.value.map((scrollColumn) => scrollColumn.index);
      return {
        texts,
        indexes
      };
    };
    var scrollTo2 = function(scrollColumn, index, duration, noEmit) {
      if (noEmit === void 0) {
        noEmit = false;
      }
      var translate = center.value - boundaryIndex(scrollColumn, index) * optionHeight.value;
      if (translate === scrollColumn.translate) {
        scrollColumn.scrolling = false;
        !noEmit && change(scrollColumn);
      }
      scrollColumn.translate = translate;
      scrollColumn.duration = duration;
    };
    var momentum = (scrollColumn, distance, duration) => {
      scrollColumn.translate += Math.abs(distance / duration) / 3e-3 * (distance < 0 ? -1 : 1);
    };
    var handleTouchstart = (event, scrollColumn) => {
      scrollColumn.touching = true;
      scrollColumn.scrolling = false;
      scrollColumn.duration = 0;
      scrollColumn.translate = getTranslate(scrollColumn.scrollEl);
    };
    var handleTouchmove = (event, scrollColumn) => {
      if (!scrollColumn.touching) {
        return;
      }
      var {
        clientY
      } = event.touches[0];
      var moveY = scrollColumn.prevY !== void 0 ? clientY - scrollColumn.prevY : 0;
      scrollColumn.prevY = clientY;
      scrollColumn.translate += moveY;
      limitTranslate(scrollColumn);
      var now = performance.now();
      if (now - scrollColumn.momentumTime > MOMENTUM_RECORD_TIME) {
        scrollColumn.momentumTime = now;
        scrollColumn.momentumPrevY = scrollColumn.translate;
      }
    };
    var handleTouchend = (event, scrollColumn) => {
      scrollColumn.touching = false;
      scrollColumn.scrolling = true;
      scrollColumn.prevY = void 0;
      var distance = scrollColumn.translate - scrollColumn.momentumPrevY;
      var duration = performance.now() - scrollColumn.momentumTime;
      var shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME;
      shouldMomentum && momentum(scrollColumn, distance, duration);
      scrollColumn.index = getIndex(scrollColumn);
      scrollTo2(scrollColumn, scrollColumn.index, shouldMomentum ? 1e3 : 200);
    };
    var handleTransitionend = (scrollColumn) => {
      scrollColumn.scrolling = false;
      change(scrollColumn);
    };
    var normalizeNormalColumns = (normalColumns) => {
      return normalColumns.map((column) => {
        var _normalColumn$initial;
        var normalColumn = isArray(column) ? {
          texts: column
        } : column;
        var scrollColumn = {
          id: sid$1++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: false,
          translate: center.value,
          index: (_normalColumn$initial = normalColumn.initialIndex) != null ? _normalColumn$initial : 0,
          duration: 0,
          momentumTime: 0,
          column: normalColumn,
          scrollEl: null,
          scrolling: false
        };
        scrollTo2(scrollColumn, scrollColumn.index, 200);
        return scrollColumn;
      });
    };
    var normalizeCascadeColumns = (cascadeColumns) => {
      var scrollColumns2 = [];
      createChildren(scrollColumns2, cascadeColumns);
      return scrollColumns2;
    };
    var createChildren = (scrollColumns2, children) => {
      if (isArray(children) && children.length) {
        var scrollColumn = {
          id: sid$1++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: false,
          translate: center.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: children.map((cascadeColumn) => cascadeColumn[props2.textKey])
          },
          columns: children,
          scrollEl: null,
          scrolling: false
        };
        scrollColumns2.push(scrollColumn);
        createChildren(scrollColumns2, scrollColumn.columns[scrollColumn.index].children);
      }
    };
    var rebuildChildren = (scrollColumn) => {
      scrollColumns.value.splice(scrollColumns.value.indexOf(scrollColumn) + 1);
      createChildren(scrollColumns.value, scrollColumn.columns[scrollColumn.index].children);
    };
    var change = (scrollColumn) => {
      var {
        cascade,
        onChange
      } = props2;
      cascade && rebuildChildren(scrollColumn);
      var hasScrolling = scrollColumns.value.some((scrollColumn2) => scrollColumn2.scrolling);
      if (hasScrolling) {
        return;
      }
      var {
        texts,
        indexes
      } = getPicked();
      var samePicked = indexes.every((index, idx) => index === prevIndexes[idx]);
      if (samePicked) {
        return;
      }
      prevIndexes = [...indexes];
      onChange == null ? void 0 : onChange(texts, indexes);
    };
    var stopScroll = () => {
      if (props2.cascade) {
        var currentScrollColumn = scrollColumns.value.find((scrollColumn) => scrollColumn.scrolling);
        if (currentScrollColumn) {
          currentScrollColumn.translate = getTranslate(currentScrollColumn.scrollEl);
          currentScrollColumn.index = getIndex(currentScrollColumn);
          scrollTo2(currentScrollColumn, currentScrollColumn.index, 0, true);
          currentScrollColumn.scrolling = false;
          rebuildChildren(currentScrollColumn);
        }
      } else {
        scrollColumns.value.forEach((scrollColumn) => {
          scrollColumn.translate = getTranslate(scrollColumn.scrollEl);
          scrollColumn.index = getIndex(scrollColumn);
          scrollTo2(scrollColumn, scrollColumn.index, 0);
        });
      }
    };
    var confirm = () => {
      stopScroll();
      var {
        texts,
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
      props2.onConfirm == null ? void 0 : props2.onConfirm(texts, indexes);
    };
    var cancel = () => {
      stopScroll();
      var {
        texts,
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
      props2.onCancel == null ? void 0 : props2.onCancel(texts, indexes);
    };
    watch(() => props2.columns, (newValue) => {
      scrollColumns.value = props2.cascade ? normalizeCascadeColumns(toRaw(newValue)) : normalizeNormalColumns(toRaw(newValue));
      var {
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
    }, {
      immediate: true
    });
    return {
      pack,
      optionHeight,
      optionCount,
      scrollColumns,
      columnHeight,
      center,
      Transition,
      getScrollEl,
      handlePopupUpdateShow,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTransitionend,
      confirm,
      cancel,
      dt
    };
  }
});
var singletonOptions;
function Picker(options) {
  return new Promise((resolve) => {
    Picker.close();
    var pickerOptions = isArray(options) ? {
      columns: options
    } : options;
    var reactivePickerOptions = reactive(pickerOptions);
    reactivePickerOptions.dynamic = true;
    reactivePickerOptions.teleport = "body";
    singletonOptions = reactivePickerOptions;
    var {
      unmountInstance
    } = mountInstance(VarPicker, reactivePickerOptions, {
      onConfirm: (texts, indexes) => {
        reactivePickerOptions.onConfirm == null ? void 0 : reactivePickerOptions.onConfirm(texts, indexes);
        resolve({
          state: "confirm",
          texts,
          indexes
        });
        reactivePickerOptions.show = false;
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onCancel: (texts, indexes) => {
        reactivePickerOptions.onCancel == null ? void 0 : reactivePickerOptions.onCancel(texts, indexes);
        resolve({
          state: "cancel",
          texts,
          indexes
        });
        reactivePickerOptions.show = false;
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onClose: () => {
        reactivePickerOptions.onClose == null ? void 0 : reactivePickerOptions.onClose();
        resolve({
          state: "close"
        });
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onClosed: () => {
        reactivePickerOptions.onClosed == null ? void 0 : reactivePickerOptions.onClosed();
        unmountInstance();
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      "onUpdate:show": (value) => {
        reactivePickerOptions.show = value;
      }
    });
    reactivePickerOptions.show = true;
  });
}
VarPicker.install = function(app) {
  app.component(VarPicker.name, VarPicker);
};
Picker.Component = VarPicker;
Picker.install = function(app) {
  app.component(VarPicker.name, VarPicker);
};
Picker.close = () => {
  if (singletonOptions != null) {
    var prevSingletonOptions = singletonOptions;
    singletonOptions = null;
    nextTick().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};
function modeValidator(mode) {
  return ["linear", "circle"].includes(mode);
}
var props$j = {
  mode: {
    type: String,
    default: "linear",
    validator: modeValidator
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: true
  }
};
var _hoisted_1$d = {
  class: "var-progress"
};
var _hoisted_2$9 = {
  key: 0,
  class: "var-progress-linear"
};
var _hoisted_3$7 = ["viewBox"];
var _hoisted_4$4 = ["cx", "cy", "r", "stroke-width"];
var _hoisted_5$4 = ["cx", "cy", "r", "stroke-width"];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$d, [_ctx.mode === "linear" ? (openBlock(), createElementBlock("div", _hoisted_2$9, [createElementVNode("div", mergeProps({
    class: "var-progress-linear__block",
    style: {
      height: _ctx.lineWidth + "px"
    }
  }, _ctx.$attrs), [_ctx.track ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-progress-linear__background",
    style: normalizeStyle({
      background: _ctx.trackColor
    })
  }, null, 4)) : createCommentVNode("v-if", true), createElementVNode("div", {
    class: normalizeClass("var-progress-linear__certain" + (_ctx.ripple ? " var-progress-linear__ripple" : "")),
    style: normalizeStyle({
      background: _ctx.color,
      width: _ctx.linearProps.width
    })
  }, null, 6)], 16), _ctx.label ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    class: "var-progress-linear__label"
  }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.linearProps.roundValue), 1)])], 16)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), _ctx.mode === "circle" ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: "var-progress-circle",
    style: normalizeStyle({
      width: _ctx.size + "px",
      height: _ctx.size + "px"
    })
  }, [(openBlock(), createElementBlock("svg", {
    class: "var-progress-circle__svg",
    style: normalizeStyle({
      transform: "rotate(" + (_ctx.rotate - 90) + "deg)"
    }),
    viewBox: _ctx.circleProps.viewBox
  }, [_ctx.track ? (openBlock(), createElementBlock("circle", {
    key: 0,
    class: "var-progress-circle__background",
    cx: _ctx.size / 2,
    cy: _ctx.size / 2,
    r: _ctx.circleProps.radius,
    fill: "transparent",
    "stroke-width": _ctx.lineWidth,
    style: normalizeStyle({
      strokeDasharray: _ctx.circleProps.perimeter,
      stroke: _ctx.trackColor
    })
  }, null, 12, _hoisted_4$4)) : createCommentVNode("v-if", true), createElementVNode("circle", {
    class: "var-progress-circle__certain",
    cx: _ctx.size / 2,
    cy: _ctx.size / 2,
    r: _ctx.circleProps.radius,
    fill: "transparent",
    "stroke-width": _ctx.lineWidth,
    style: normalizeStyle({
      strokeDasharray: _ctx.circleProps.strokeDasharray,
      stroke: _ctx.color
    })
  }, null, 12, _hoisted_5$4)], 12, _hoisted_3$7)), _ctx.label ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    class: "var-progress-circle__label"
  }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.circleProps.roundValue), 1)])], 16)) : createCommentVNode("v-if", true)], 4)) : createCommentVNode("v-if", true)]);
}
var Progress = defineComponent({
  render: render$l,
  name: "VarProgress",
  inheritAttrs: false,
  props: props$j,
  setup(props2) {
    var linearProps = computed(() => {
      var value = toNumber(props2.value);
      var width = value > 100 ? 100 : value;
      var roundValue = value > 100 ? 100 : Math.round(value);
      return {
        width: width + "%",
        roundValue: roundValue + "%"
      };
    });
    var circleProps = computed(() => {
      var {
        size,
        lineWidth,
        value
      } = props2;
      var viewBox = "0 0 " + size + " " + size;
      var roundValue = toNumber(value) > 100 ? 100 : Math.round(toNumber(value));
      var radius = (size - toNumber(lineWidth)) / 2;
      var perimeter = 2 * Math.PI * radius;
      var strokeDasharray = roundValue / 100 * perimeter + ", " + perimeter;
      return {
        viewBox,
        radius,
        strokeDasharray,
        perimeter,
        roundValue: roundValue + "%"
      };
    });
    return {
      linearProps,
      circleProps
    };
  }
});
Progress.install = function(app) {
  app.component(Progress.name, Progress);
};
var props$i = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: false
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var MAX_DISTANCE = 100;
var CONTROL_POSITION = -50;
var scroller;
function render$k(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createElementBlock("div", {
    ref: "freshNode",
    class: "var-pull-refresh",
    onTouchstart: _cache[0] || (_cache[0] = function() {
      return _ctx.touchStart && _ctx.touchStart(...arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function() {
      return _ctx.touchMove && _ctx.touchMove(...arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function() {
      return _ctx.touchEnd && _ctx.touchEnd(...arguments);
    }),
    onTouchcancel: _cache[3] || (_cache[3] = function() {
      return _ctx.touchEnd && _ctx.touchEnd(...arguments);
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-pull-refresh__control var-elevation--2", [_ctx.isSuccess ? "var-pull-refresh__control-success" : null]]),
    style: normalizeStyle(_ctx.controlStyle)
  }, [createVNode(_component_var_icon, {
    name: _ctx.iconName,
    transition: 200,
    class: normalizeClass(_ctx.iconClass),
    "var-pull-refresh-cover": ""
  }, null, 8, ["name", "class"])], 6), renderSlot(_ctx.$slots, "default")], 544);
}
var PullRefresh = defineComponent({
  render: render$k,
  name: "VarPullRefresh",
  components: {
    VarIcon: Icon
  },
  props: props$i,
  setup(props2) {
    var freshNode = ref(null);
    var startPosition = ref(0);
    var distance = ref(CONTROL_POSITION);
    var iconName = ref("arrow-down");
    var refreshStatus = ref("default");
    var isEnd = ref(false);
    var isTouchable = computed(() => refreshStatus.value !== "loading" && refreshStatus.value !== "success" && !props2.disabled);
    var iconClass = computed(() => ({
      "var-pull-refresh__icon": true,
      "var-pull-refresh__animation": refreshStatus.value === "loading"
    }));
    var controlStyle = computed(() => ({
      transform: "translate3d(0px, " + distance.value + "px, 0px) translate(-50%, 0)",
      transition: isEnd.value ? "transform " + props2.animationDuration + "ms" : void 0,
      background: props2.successBgColor || props2.bgColor,
      color: props2.successColor || props2.color
    }));
    var isSuccess = computed(() => refreshStatus.value === "success");
    var touchStart = (event) => {
      if (!isTouchable.value)
        return;
      refreshStatus.value = "pulling";
      startPosition.value = event.touches[0].clientY;
    };
    var touchMove = (event) => {
      var scrollTop = getScrollTop(scroller);
      if (scrollTop > 0 || !isTouchable.value)
        return;
      if (scrollTop === 0 && distance.value > CONTROL_POSITION)
        event.cancelable && event.preventDefault();
      var moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + CONTROL_POSITION;
      distance.value = moveDistance >= MAX_DISTANCE ? MAX_DISTANCE : moveDistance;
      iconName.value = distance.value >= MAX_DISTANCE * 0.2 ? "refresh" : "arrow-down";
    };
    var touchEnd = () => {
      if (!isTouchable.value)
        return;
      isEnd.value = true;
      if (distance.value >= MAX_DISTANCE * 0.2) {
        var _props$onUpdateModel;
        refreshStatus.value = "loading";
        distance.value = MAX_DISTANCE * 0.3;
        (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, true);
        props2.onRefresh == null ? void 0 : props2.onRefresh();
      } else {
        refreshStatus.value = "loosing";
        iconName.value = "arrow-down";
        distance.value = CONTROL_POSITION;
        setTimeout(() => {
          isEnd.value = false;
        }, toNumber(props2.animationDuration));
      }
    };
    var reset = () => {
      setTimeout(() => {
        refreshStatus.value = "default";
        iconName.value = "arrow-down";
        isEnd.value = false;
      }, toNumber(props2.animationDuration));
    };
    watch(() => props2.modelValue, (newValue) => {
      if (newValue === false) {
        isEnd.value = true;
        refreshStatus.value = "success";
        iconName.value = "checkbox-marked-circle";
        setTimeout(() => {
          distance.value = CONTROL_POSITION;
          reset();
        }, toNumber(props2.successDuration));
      }
    });
    onMounted(() => {
      scroller = getParentScroller(freshNode.value);
    });
    return {
      freshNode,
      touchStart,
      touchMove,
      touchEnd,
      iconName,
      iconClass,
      controlStyle,
      isSuccess
    };
  }
});
PullRefresh.install = function(app) {
  app.component(PullRefresh.name, PullRefresh);
};
var props$h = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var RADIO_GROUP_BIND_RADIO_KEY = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
var RADIO_GROUP_COUNT_RADIO_KEY = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function useRadios() {
  var {
    bindChildren,
    childProviders
  } = useChildren(RADIO_GROUP_BIND_RADIO_KEY);
  var {
    length
  } = useAtChildrenCounter(RADIO_GROUP_COUNT_RADIO_KEY);
  return {
    length,
    radios: childProviders,
    bindRadios: bindChildren
  };
}
function useRadioGroup() {
  var {
    bindParent,
    parentProvider
  } = useParent(RADIO_GROUP_BIND_RADIO_KEY);
  var {
    index
  } = useAtParentIndex(RADIO_GROUP_COUNT_RADIO_KEY);
  return {
    index,
    radioGroup: parentProvider,
    bindRadioGroup: bindParent
  };
}
var _hoisted_1$c = {
  class: "var-radio__wrap"
};
function render$j(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [createElementVNode("div", mergeProps({
    class: "var-radio",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, _ctx.$attrs), [withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-radio__action", [_ctx.checked ? "var-radio--checked" : "var-radio--unchecked", _ctx.errorMessage || _ctx.radioGroupErrorMessage ? "var-radio--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-radio--disabled" : null]]),
    style: normalizeStyle({
      color: _ctx.checked ? _ctx.checkedColor : _ctx.uncheckedColor
    })
  }, [_ctx.checked ? renderSlot(_ctx.$slots, "checked-icon", {
    key: 0
  }, () => [createVNode(_component_var_icon, {
    class: normalizeClass(["var-radio__icon", [_ctx.withAnimation ? "var-radio--with-animation" : null]]),
    "var-radio-cover": "",
    name: "radio-marked",
    size: _ctx.iconSize
  }, null, 8, ["class", "size"])]) : renderSlot(_ctx.$slots, "unchecked-icon", {
    key: 1
  }, () => [createVNode(_component_var_icon, {
    class: normalizeClass(["var-radio__icon", [_ctx.withAnimation ? "var-radio--with-animation" : null]]),
    "var-radio-cover": "",
    name: "radio-blank",
    size: _ctx.iconSize
  }, null, 8, ["class", "size"])])], 6)), [[_directive_ripple, {
    disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
  }]]), createElementVNode("div", {
    class: normalizeClass(["var-radio__text", [_ctx.errorMessage || _ctx.radioGroupErrorMessage ? "var-radio--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-radio--disabled" : null]])
  }, [renderSlot(_ctx.$slots, "default")], 2)], 16), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var Radio = defineComponent({
  render: render$j,
  name: "VarRadio",
  directives: {
    Ripple
  },
  components: {
    VarIcon: Icon,
    VarFormDetails: FormDetails
  },
  inheritAttrs: false,
  props: props$h,
  setup(props2) {
    var value = ref(false);
    var checked = computed(() => value.value === props2.checkedValue);
    var withAnimation = ref(false);
    var {
      radioGroup: radioGroup2,
      bindRadioGroup
    } = useRadioGroup();
    var {
      form,
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var change = (changedValue) => {
      var _props$onUpdateModel;
      var {
        checkedValue,
        onChange
      } = props2;
      if (radioGroup2 && value.value === checkedValue) {
        return;
      }
      value.value = changedValue;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, value.value);
      onChange == null ? void 0 : onChange(value.value);
      radioGroup2 == null ? void 0 : radioGroup2.onToggle(checkedValue);
      validateWithTrigger("onChange");
    };
    var handleClick = (e) => {
      var {
        disabled,
        readonly,
        uncheckedValue,
        checkedValue,
        onClick
      } = props2;
      if (form != null && form.disabled.value || disabled) {
        return;
      }
      onClick == null ? void 0 : onClick(e);
      if (form != null && form.readonly.value || readonly) {
        return;
      }
      withAnimation.value = true;
      change(checked.value ? uncheckedValue : checkedValue);
    };
    var sync = (v2) => {
      var {
        checkedValue,
        uncheckedValue
      } = props2;
      value.value = v2 === checkedValue ? checkedValue : uncheckedValue;
    };
    var reset = () => {
      var _props$onUpdateModel2;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, props2.uncheckedValue);
      resetValidation();
    };
    var validate = () => v(props2.rules, props2.modelValue);
    var toggle = (changedValue) => {
      var {
        uncheckedValue,
        checkedValue
      } = props2;
      var shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue);
      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue;
      }
      change(changedValue);
    };
    watch(() => props2.modelValue, (newValue) => {
      value.value = newValue;
    }, {
      immediate: true
    });
    var radioProvider = {
      sync,
      validate,
      resetValidation,
      reset
    };
    bindRadioGroup == null ? void 0 : bindRadioGroup(radioProvider);
    bindForm == null ? void 0 : bindForm(radioProvider);
    return {
      withAnimation,
      checked,
      errorMessage,
      radioGroupErrorMessage: radioGroup2 == null ? void 0 : radioGroup2.errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      handleClick,
      toggle,
      reset,
      validate,
      resetValidation
    };
  }
});
Radio.install = function(app) {
  app.component(Radio.name, Radio);
};
function directionValidator$2(direction) {
  return ["horizontal", "vertical"].includes(direction);
}
var props$g = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: directionValidator$2
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$b = {
  class: "var-radio-group__wrap"
};
function render$i(_ctx, _cache) {
  var _component_var_form_details = resolveComponent("var-form-details");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [createElementVNode("div", {
    class: normalizeClass(["var-radio-group", ["var-radio-group--" + _ctx.direction]])
  }, [renderSlot(_ctx.$slots, "default")], 2), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var RadioGroup = defineComponent({
  render: render$i,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: FormDetails
  },
  props: props$g,
  setup(props2) {
    var {
      length,
      radios,
      bindRadios
    } = useRadios();
    var {
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var radioGroupErrorMessage = computed(() => errorMessage.value);
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var syncRadios = () => radios.forEach((_ref) => {
      var {
        sync
      } = _ref;
      return sync(props2.modelValue);
    });
    var onToggle = (changedValue) => {
      var _props$onUpdateModel;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, changedValue);
      props2.onChange == null ? void 0 : props2.onChange(changedValue);
      validateWithTrigger("onChange");
    };
    var validate = () => v(props2.rules, props2.modelValue);
    var reset = () => {
      var _props$onUpdateModel2;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, void 0);
      resetValidation();
    };
    watch(() => props2.modelValue, syncRadios);
    watch(() => length.value, syncRadios);
    var radioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: radioGroupErrorMessage
    };
    bindForm == null ? void 0 : bindForm(radioGroupProvider);
    bindRadios(radioGroupProvider);
    return {
      errorMessage,
      reset,
      validate,
      resetValidation
    };
  }
});
RadioGroup.install = function(app) {
  app.component(RadioGroup.name, RadioGroup);
};
var props$f = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number],
    default: "24"
  },
  gap: {
    type: [String, Number],
    default: "2"
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: false
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$a = {
  class: "var-rate__warp"
};
var _hoisted_2$8 = {
  class: "var-rate"
};
var _hoisted_3$6 = ["onClick"];
function render$h(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1$a, [createElementVNode("div", _hoisted_2$8, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.toNumber(_ctx.count), (val) => {
    return withDirectives((openBlock(), createElementBlock("div", {
      key: val,
      style: normalizeStyle(_ctx.getStyle(val)),
      class: normalizeClass(_ctx.getClass(val)),
      onClick: ($event) => _ctx.handleClick(val, $event)
    }, [createVNode(_component_var_icon, {
      transition: 0,
      namespace: _ctx.namespace,
      name: _ctx.getIconName(val),
      style: normalizeStyle({
        fontSize: _ctx.toSizeUnit(_ctx.size)
      })
    }, null, 8, ["namespace", "name", "style"])], 14, _hoisted_3$6)), [[_directive_ripple, {
      disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
    }]]);
  }), 128))]), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var Rate = defineComponent({
  render: render$h,
  name: "VarRate",
  components: {
    VarIcon: Icon,
    VarFormDetails: FormDetails
  },
  directives: {
    Ripple
  },
  props: props$f,
  setup(props2) {
    var {
      form,
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var getStyle = (val) => {
      var {
        count,
        size,
        gap
      } = props2;
      return {
        color: transformValue(val).color,
        marginRight: val !== toNumber(count) ? toSizeUnit(gap) : 0,
        width: toSizeUnit(size),
        height: toSizeUnit(size),
        borderRadius: "50%"
      };
    };
    var getClass = (val) => {
      var {
        type,
        color
      } = transformValue(val);
      return {
        "var-rate__content": true,
        "var-rate--disabled": form == null ? void 0 : form.disabled.value,
        "var-rate--error": errorMessage.value,
        "var-rate--primary": type !== "empty" && !color
      };
    };
    var getIconName = (val) => {
      var {
        type
      } = transformValue(val);
      var {
        icon: icon2,
        halfIcon,
        emptyIcon
      } = props2;
      return type === "full" ? icon2 : type === "half" ? halfIcon : emptyIcon;
    };
    var transformValue = (index) => {
      var {
        modelValue,
        disabled,
        disabledColor,
        color,
        half,
        emptyColor
      } = props2;
      var iconColor;
      if (disabled || form != null && form.disabled.value)
        iconColor = disabledColor;
      else if (color)
        iconColor = color;
      if (index <= toNumber(modelValue)) {
        return {
          type: "full",
          score: index,
          color: iconColor
        };
      }
      if (half && index <= toNumber(modelValue) + 0.5) {
        return {
          type: "half",
          score: index,
          color: iconColor
        };
      }
      return {
        type: "empty",
        score: index,
        color: disabled || form != null && form.disabled.value ? disabledColor : emptyColor
      };
    };
    var changeValue = (score, event) => {
      var _props$onUpdateModel;
      if (props2.half) {
        var {
          offsetWidth
        } = event.target;
        if (event.offsetX <= Math.floor(offsetWidth / 2))
          score -= 0.5;
      }
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, score);
    };
    var validate = () => v(props2.rules, toNumber(props2.modelValue));
    var validateWithTrigger = () => nextTick(() => vt(["onChange"], "onChange", props2.rules, props2.modelValue));
    var handleClick = (score, event) => {
      var {
        readonly,
        disabled,
        onChange
      } = props2;
      if (readonly || disabled || form != null && form.disabled.value || form != null && form.readonly.value) {
        return;
      }
      changeValue(score, event);
      onChange == null ? void 0 : onChange(score);
      validateWithTrigger();
    };
    var reset = () => {
      var _props$onUpdateModel2;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, 0);
      resetValidation();
    };
    var rateProvider = {
      reset,
      validate,
      resetValidation
    };
    bindForm == null ? void 0 : bindForm(rateProvider);
    return {
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      getStyle,
      getClass,
      getIconName,
      handleClick,
      reset,
      validate,
      resetValidation,
      toSizeUnit,
      toNumber
    };
  }
});
Rate.install = function(app) {
  app.component(Rate.name, Rate);
};
function justifyValidator$1(justify) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(justify);
}
function alignValidator(align) {
  return ["flex-start", "center", "flex-end"].includes(align);
}
var props$e = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: justifyValidator$1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: alignValidator
  },
  onClick: {
    type: Function
  }
};
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: "var-row var--box",
    style: normalizeStyle({
      justifyContent: _ctx.justify,
      alignItems: _ctx.align,
      margin: _ctx.average ? "0 -" + _ctx.average + "px" : void 0
    }),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
var Row = defineComponent({
  render: render$g,
  name: "VarRow",
  props: props$e,
  setup(props2) {
    var {
      cols,
      bindCols,
      length
    } = useCols();
    var average = computed(() => {
      var gutter = toPxNum(props2.gutter);
      return gutter / 2;
    });
    var computePadding = () => {
      cols.forEach((col2) => {
        col2.setPadding({
          left: average.value,
          right: average.value
        });
      });
    };
    var rowProvider = {
      computePadding
    };
    watch(() => length.value, computePadding);
    watch(() => props2.gutter, computePadding);
    bindCols(rowProvider);
    return {
      average
    };
  }
});
Row.install = function(app) {
  app.component(Row.name, Row);
};
function textAlignValidator(textAlign) {
  return ["left", "right", "center"].includes(textAlign);
}
var props$d = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: false
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: false
  },
  line: {
    type: Boolean,
    default: true
  },
  hint: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: textAlignValidator
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$9 = {
  key: 0
};
var _hoisted_2$7 = {
  key: 0,
  class: "var-select__chips"
};
var _hoisted_3$5 = {
  key: 1,
  class: "var-select__values"
};
var _hoisted_4$3 = {
  key: 1
};
var _hoisted_5$3 = {
  class: "var-select__scroller"
};
function render$f(_ctx, _cache) {
  var _component_var_chip = resolveComponent("var-chip");
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_menu = resolveComponent("var-menu");
  var _component_var_form_details = resolveComponent("var-form-details");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-select var--box", [_ctx.formDisabled || _ctx.disabled ? "var-select--disabled" : null]]),
    onClick: _cache[3] || (_cache[3] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-select__controller", [_ctx.isFocus ? "var-select--focus" : null, _ctx.errorMessage ? "var-select--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-select--disabled" : null]]),
    style: normalizeStyle({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : void 0
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-select__icon", [!_ctx.hint ? "var-select--non-hint" : null]])
  }, [renderSlot(_ctx.$slots, "prepend-icon")], 2), createVNode(_component_var_menu, {
    class: "var-select__menu",
    "var-select-cover": "",
    "offset-y": _ctx.offsetY,
    show: _ctx.isFocus,
    "onUpdate:show": _cache[2] || (_cache[2] = ($event) => _ctx.isFocus = $event),
    onClose: _ctx.handleBlur
  }, {
    menu: withCtx(() => [createElementVNode("div", _hoisted_5$3, [renderSlot(_ctx.$slots, "default")])]),
    default: withCtx(() => [createElementVNode("div", {
      class: normalizeClass(["var-select__wrap", [!_ctx.hint ? "var-select--non-hint" : null]]),
      ref: "wrapEl",
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleFocus && _ctx.handleFocus(...arguments);
      })
    }, [createElementVNode("div", {
      class: normalizeClass(["var-select__select", [_ctx.errorMessage ? "var-select--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-select--disabled" : null]]),
      style: normalizeStyle({
        textAlign: _ctx.textAlign,
        color: _ctx.textColor
      })
    }, [_ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$9, [_ctx.chip ? (openBlock(), createElementBlock("div", _hoisted_2$7, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.labels, (l) => {
      return openBlock(), createBlock(_component_var_chip, {
        class: "var-select__chip",
        "var-select-cover": "",
        closable: "",
        size: "small",
        type: _ctx.errorMessage ? "danger" : void 0,
        key: l,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        onClose: () => _ctx.handleClose(l)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(l), 1)]),
        _: 2
      }, 1032, ["type", "onClose"]);
    }), 128))])) : (openBlock(), createElementBlock("div", _hoisted_3$5, toDisplayString(_ctx.labels.join(_ctx.separator)), 1))])) : (openBlock(), createElementBlock("span", _hoisted_4$3, toDisplayString(_ctx.label), 1)), createVNode(_component_var_icon, {
      class: normalizeClass(["var-select__arrow", [_ctx.isFocus ? "var-select--arrow-rotate" : null]]),
      "var-select-cover": "",
      name: "menu-down",
      transition: 300
    }, null, 8, ["class"])], 6), createElementVNode("label", {
      class: normalizeClass(["var-select__placeholder var--ellipsis", [_ctx.isFocus ? "var-select--focus" : null, _ctx.errorMessage ? "var-select--error" : null, _ctx.formDisabled || _ctx.disabled ? "var-select--disabled" : null, _ctx.computePlaceholderState(), !_ctx.hint ? "var-select--placeholder-non-hint" : null]]),
      style: normalizeStyle({
        color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : void 0
      })
    }, toDisplayString(_ctx.placeholder), 7)], 2)]),
    _: 3
  }, 8, ["offset-y", "show", "onClose"]), createElementVNode("div", {
    class: normalizeClass(["var-select__icon", [!_ctx.hint ? "var-select--non-hint" : null]])
  }, [renderSlot(_ctx.$slots, "append-icon", {}, () => [_ctx.clearable ? (openBlock(), createBlock(_component_var_icon, {
    key: 0,
    class: "var-select__clear-icon",
    name: "close-circle",
    size: "14px",
    onClick: _ctx.handleClear
  }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)])], 2)], 6), _ctx.line ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var-select__line", [_ctx.formDisabled || _ctx.disabled ? "var-select--line-disabled" : null, _ctx.errorMessage ? "var-select--line-error" : null]]),
    style: normalizeStyle({
      background: !_ctx.errorMessage ? _ctx.blurColor : void 0
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-select__dot", [_ctx.isFocus ? "var-select--spread" : null, _ctx.formDisabled || _ctx.disabled ? "var-select--line-disabled" : null, _ctx.errorMessage ? "var-select--line-error" : null]]),
    style: normalizeStyle({
      background: !_ctx.errorMessage ? _ctx.focusColor : void 0
    })
  }, null, 6)], 6)) : createCommentVNode("v-if", true), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])], 2);
}
var Select = defineComponent({
  render: render$f,
  name: "VarSelect",
  components: {
    VarIcon: Icon,
    VarMenu: Menu,
    VarChip: Chip,
    VarFormDetails: FormDetails
  },
  props: props$d,
  setup(props2) {
    var wrapEl = ref(null);
    var isFocus = ref(false);
    var multiple = computed(() => props2.multiple);
    var focusColor = computed(() => props2.focusColor);
    var label = ref("");
    var labels = ref([]);
    var wrapWidth = ref("0px");
    var offsetY = ref(0);
    var {
      bindForm,
      form
    } = useForm();
    var {
      length,
      options,
      bindOptions
    } = useOptions();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var computeLabel = () => {
      var {
        multiple: multiple2,
        modelValue
      } = props2;
      if (multiple2) {
        var rawModelValue = modelValue;
        labels.value = rawModelValue.map(findLabel);
      }
      if (!multiple2 && !isEmpty(modelValue)) {
        label.value = findLabel(modelValue);
      }
      if (!multiple2 && isEmpty(modelValue)) {
        label.value = "";
      }
    };
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };
    var findValueOrLabel = (_ref) => {
      var {
        value,
        label: label2
      } = _ref;
      if (value.value != null) {
        return value.value;
      }
      return label2.value;
    };
    var findLabel = (modelValue) => {
      var option2 = options.find((_ref2) => {
        var {
          value
        } = _ref2;
        return value.value === modelValue;
      });
      if (!option2) {
        option2 = options.find((_ref3) => {
          var {
            label: label2
          } = _ref3;
          return label2.value === modelValue;
        });
      }
      return option2.label.value;
    };
    var computePlaceholderState = () => {
      var {
        hint,
        modelValue
      } = props2;
      if (!hint && !isEmpty(modelValue)) {
        return "var-select--placeholder-hidden";
      }
      if (hint && (!isEmpty(modelValue) || isFocus.value)) {
        return "var-select--placeholder-hint";
      }
    };
    var getWrapWidth = () => {
      return wrapEl.value && window.getComputedStyle(wrapEl.value).width || "0px";
    };
    var getOffsetY = () => {
      var paddingTop = wrapEl.value && window.getComputedStyle(wrapEl.value).paddingTop || "0px";
      return toPxNum(paddingTop) * 1.5;
    };
    var handleFocus = () => {
      var {
        disabled,
        readonly,
        onFocus
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }
      wrapWidth.value = getWrapWidth();
      offsetY.value = getOffsetY() + toPxNum(props2.offsetY);
      isFocus.value = true;
      onFocus == null ? void 0 : onFocus();
      validateWithTrigger("onFocus");
    };
    var handleBlur = () => {
      var {
        disabled,
        readonly,
        onBlur
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }
      onBlur == null ? void 0 : onBlur();
      validateWithTrigger("onBlur");
    };
    var onSelect = (option2) => {
      var _props$onUpdateModel;
      var {
        disabled,
        readonly,
        multiple: multiple2,
        onChange
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }
      var selectedValue = multiple2 ? options.filter((_ref4) => {
        var {
          selected
        } = _ref4;
        return selected.value;
      }).map(findValueOrLabel) : findValueOrLabel(option2);
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, selectedValue);
      onChange == null ? void 0 : onChange(selectedValue);
      validateWithTrigger("onChange");
      !multiple2 && (isFocus.value = false);
    };
    var handleClear = () => {
      var _props$onUpdateModel2;
      var {
        disabled,
        readonly,
        multiple: multiple2,
        clearable,
        onClear
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
        return;
      }
      var changedModelValue = multiple2 ? [] : void 0;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, changedModelValue);
      onClear == null ? void 0 : onClear(changedModelValue);
      validateWithTrigger("onClear");
    };
    var handleClick = (e) => {
      var {
        disabled,
        onClick
      } = props2;
      if (form != null && form.disabled.value || disabled) {
        return;
      }
      onClick == null ? void 0 : onClick(e);
      validateWithTrigger("onClick");
    };
    var handleClose = (text) => {
      var _props$onUpdateModel3;
      var {
        disabled,
        readonly,
        modelValue,
        onClose
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }
      var rawModelValue = modelValue;
      var option2 = options.find((_ref5) => {
        var {
          label: label2
        } = _ref5;
        return label2.value === text;
      });
      var currentModelValue = rawModelValue.filter((value) => {
        var _value$value;
        return value !== ((_value$value = option2.value.value) != null ? _value$value : option2.label.value);
      });
      (_props$onUpdateModel3 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel3.call(props2, currentModelValue);
      onClose == null ? void 0 : onClose(currentModelValue);
      validateWithTrigger("onClose");
    };
    var syncOptions = () => {
      var {
        multiple: multiple2,
        modelValue
      } = props2;
      if (multiple2) {
        var rawModelValue = modelValue;
        options.forEach((option2) => option2.sync(rawModelValue.includes(findValueOrLabel(option2))));
      } else {
        options.forEach((option2) => option2.sync(modelValue === findValueOrLabel(option2)));
      }
      computeLabel();
    };
    var focus = () => {
      wrapWidth.value = getWrapWidth();
      offsetY.value = getOffsetY() + toPxNum(props2.offsetY);
      isFocus.value = true;
    };
    var blur = () => {
      isFocus.value = false;
    };
    var validate = () => v(props2.rules, props2.modelValue);
    var reset = () => {
      var _props$onUpdateModel4;
      (_props$onUpdateModel4 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel4.call(props2, props2.multiple ? [] : void 0);
      resetValidation();
    };
    watch(() => props2.multiple, () => {
      var {
        multiple: multiple2,
        modelValue
      } = props2;
      if (multiple2 && !isArray(modelValue)) {
        throw Error("The modelValue must be an array when multiple is true");
      }
    });
    watch(() => props2.modelValue, syncOptions, {
      deep: true
    });
    watch(() => length.value, syncOptions);
    var selectProvider = {
      wrapWidth: computed(() => wrapWidth.value),
      multiple,
      focusColor,
      onSelect,
      reset,
      validate,
      resetValidation
    };
    bindOptions(selectProvider);
    bindForm == null ? void 0 : bindForm(selectProvider);
    return {
      wrapEl,
      offsetY,
      isFocus,
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      label,
      labels,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleClear,
      handleClick,
      handleClose,
      reset,
      validate,
      resetValidation,
      focus,
      blur
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
};
var props$c = {
  loading: {
    type: Boolean,
    default: true
  },
  title: {
    type: Boolean,
    default: false
  },
  card: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
};
var _withScopeId$1 = (n) => (pushScopeId(""), n = n(), popScopeId(), n);
var _hoisted_1$8 = {
  class: "var--box var-skeleton"
};
var _hoisted_2$6 = {
  key: 0,
  class: "var-skeleton__data"
};
var _hoisted_3$4 = {
  key: 1,
  class: "var-skeleton__content"
};
var _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", {
  class: "var-skeleton--animation"
}, null, -1));
var _hoisted_5$2 = [_hoisted_4$2];
var _hoisted_6$1 = {
  class: "var-skeleton__article"
};
var _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", {
  class: "var-skeleton--animation"
}, null, -1));
var _hoisted_8$1 = [_hoisted_7$1];
var _hoisted_9 = {
  class: "var-skeleton__section"
};
var _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", {
  class: "var-skeleton--animation"
}, null, -1));
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", {
  class: "var-skeleton--animation"
}, null, -1));
var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", {
  class: "var-skeleton--animation"
}, null, -1));
var _hoisted_15 = [_hoisted_14];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [!_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_2$6, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true), _ctx.loading && !_ctx.fullscreen ? (openBlock(), createElementBlock("div", _hoisted_3$4, [_ctx.card ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-skeleton__card",
    style: normalizeStyle({
      height: _ctx.toSizeUnit(_ctx.cardHeight)
    })
  }, _hoisted_5$2, 4)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6$1, [_ctx.avatar ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-skeleton__avatar",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.avatarSize),
      height: _ctx.toSizeUnit(_ctx.avatarSize)
    })
  }, _hoisted_8$1, 4)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_9, [_ctx.title ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "var-skeleton__title",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.titleWidth)
    })
  }, _hoisted_11, 4)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.toNumber(_ctx.rows), (r, index) => {
    return openBlock(), createElementBlock("div", {
      class: "var-skeleton__row",
      key: r,
      style: normalizeStyle({
        width: _ctx.toSizeUnit(_ctx.rowsWidth[index])
      })
    }, _hoisted_13, 4);
  }), 128))])])])) : createCommentVNode("v-if", true), _ctx.loading && _ctx.fullscreen ? (openBlock(), createElementBlock("div", {
    key: 2,
    class: "var-skeleton__fullscreen",
    style: normalizeStyle({
      zIndex: _ctx.toNumber(_ctx.fullscreenZIndex)
    })
  }, _hoisted_15, 4)) : createCommentVNode("v-if", true)]);
}
var Skeleton = defineComponent({
  render: render$e,
  name: "VarSkeleton",
  props: props$c,
  setup() {
    return {
      toSizeUnit,
      toNumber
    };
  }
});
Skeleton.install = function(app) {
  app.component(Skeleton.name, Skeleton);
};
function labelValidator(label) {
  return ["always", "normal", "never"].includes(label);
}
var props$b = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: false
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: labelValidator
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Thumbs;
(function(Thumbs2) {
  Thumbs2["First"] = "1";
  Thumbs2["Second"] = "2";
})(Thumbs || (Thumbs = {}));
var _hoisted_1$7 = {
  class: "var-slider"
};
var _hoisted_2$5 = {
  class: "var-slider__track"
};
var _hoisted_3$3 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function render$d(_ctx, _cache) {
  var _component_var_form_details = resolveComponent("var-form-details");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [createElementVNode("div", {
    class: normalizeClass(["var-slider-block", [_ctx.isDisabled ? "var-slider__disable" : null, _ctx.errorMessage ? "var-slider__error" : null]]),
    style: normalizeStyle({
      height: _ctx.thumbSize === void 0 ? _ctx.thumbSize : 3 * _ctx.toNumber(_ctx.thumbSize) + "px",
      margin: _ctx.thumbSize === void 0 ? _ctx.thumbSize : "0 " + _ctx.toNumber(_ctx.thumbSize) / 2 + "px"
    }),
    ref: "sliderEl",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [createElementVNode("div", _hoisted_2$5, [createElementVNode("div", {
    class: "var-slider__track-background",
    style: normalizeStyle({
      background: _ctx.trackColor,
      height: _ctx.trackHeight + "px"
    })
  }, null, 4), createElementVNode("div", {
    class: "var-slider__track-fill",
    style: normalizeStyle(_ctx.getFillStyle)
  }, null, 4)]), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.thumbList, (item) => {
    return openBlock(), createElementBlock("div", {
      class: "var-slider__thumb",
      key: item.enumValue,
      style: normalizeStyle({
        left: item.value + "%",
        zIndex: _ctx.thumbsProps[item.enumValue].active ? 1 : void 0
      }),
      onTouchstart: ($event) => _ctx.start($event, item.enumValue),
      onTouchmove: ($event) => _ctx.move($event, item.enumValue),
      onTouchend: ($event) => _ctx.end(item.enumValue),
      onTouchcancel: ($event) => _ctx.end(item.enumValue)
    }, [renderSlot(_ctx.$slots, "button", {
      currentValue: item.value
    }, () => [createElementVNode("div", {
      class: "var-slider__thumb-block",
      style: normalizeStyle({
        background: _ctx.thumbColor,
        height: _ctx.thumbSize + "px",
        width: _ctx.thumbSize + "px"
      })
    }, null, 4), createElementVNode("div", {
      class: normalizeClass(["var-slider__thumb-ripple", [_ctx.thumbsProps[item.enumValue].active ? "var-slider__thumb-ripple-active" : null]]),
      style: normalizeStyle(_extends$1({
        background: _ctx.thumbColor
      }, _ctx.getRippleSize(item)))
    }, null, 6), createElementVNode("div", {
      class: normalizeClass(["var-slider__thumb-label", [_ctx.showLabel(item.enumValue) ? "var-slider__thumb-label-active" : null]]),
      style: normalizeStyle({
        background: _ctx.labelColor,
        color: _ctx.labelTextColor,
        height: _ctx.thumbSize === void 0 ? _ctx.thumbSize : 2 * _ctx.toNumber(_ctx.thumbSize) + "px",
        width: _ctx.thumbSize === void 0 ? _ctx.thumbSize : 2 * _ctx.toNumber(_ctx.thumbSize) + "px"
      })
    }, [createElementVNode("span", null, toDisplayString(item.value), 1)], 6)])], 44, _hoisted_3$3);
  }), 128))], 6), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    class: "var-slider__form",
    "var-slider-cover": ""
  }, null, 8, ["error-message"])]);
}
var Slider = defineComponent({
  render: render$d,
  name: "VarSlider",
  components: {
    VarFormDetails: FormDetails
  },
  props: props$b,
  setup(props2) {
    var {
      bindForm,
      form
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var validate = () => v(props2.rules, props2.modelValue);
    var getThumbProps = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: false,
      percentValue: 0
    });
    var validateWithTrigger = () => nextTick(() => vt(["onChange"], "onChange", props2.rules, props2.modelValue));
    var sliderEl = ref(null);
    var maxWidth = ref(0);
    var isScroll = ref(false);
    var thumbsProps = reactive({
      [Thumbs.First]: getThumbProps(),
      [Thumbs.Second]: getThumbProps()
    });
    var unitWidth = computed(() => maxWidth.value / 100 * toNumber(props2.step));
    var thumbList = computed(() => {
      var list2 = [{
        value: props2.modelValue,
        enumValue: Thumbs.First
      }];
      if (props2.range && isArray(props2.modelValue)) {
        list2 = [{
          value: props2.modelValue[0],
          enumValue: Thumbs.First
        }, {
          value: props2.modelValue[1],
          enumValue: Thumbs.Second
        }];
      }
      return list2;
    });
    var getRippleSize = (item) => {
      var size;
      if (props2.thumbSize !== void 0) {
        size = thumbsProps[item.enumValue].active ? 3 * toNumber(props2.thumbSize) + "px" : "0px";
      }
      return {
        height: size,
        width: size
      };
    };
    var showLabel = (type) => {
      if (props2.labelVisible === "always")
        return true;
      if (props2.labelVisible === "never")
        return false;
      return thumbsProps[type].active;
    };
    var getFillStyle = computed(() => {
      var {
        activeColor,
        range,
        modelValue
      } = props2;
      var width = range && isArray(modelValue) ? Math.abs(modelValue[0] - modelValue[1]) : modelValue;
      var left = range && isArray(modelValue) ? Math.min(modelValue[0], modelValue[1]) : 0;
      return {
        width: width + "%",
        left: left + "%",
        background: activeColor
      };
    });
    var isDisabled = computed(() => props2.disabled || (form == null ? void 0 : form.disabled.value));
    var isReadonly = computed(() => props2.readonly || (form == null ? void 0 : form.readonly.value));
    var setPercent = (moveDistance, type) => {
      var rangeValue = [];
      var {
        step: step2,
        range,
        modelValue,
        onChange
      } = props2;
      var stepNumber = toNumber(step2);
      var roundDistance = Math.round(moveDistance / unitWidth.value);
      var curValue = roundDistance * stepNumber;
      var prevValue = thumbsProps[type].percentValue;
      thumbsProps[type].percentValue = curValue / stepNumber;
      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue];
      }
      if (prevValue !== curValue) {
        var _props$onUpdateModel;
        var value = range ? rangeValue : curValue;
        onChange == null ? void 0 : onChange(value);
        (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, value);
        validateWithTrigger();
      }
    };
    var getType = (offset) => {
      if (!props2.range)
        return Thumbs.First;
      var thumb1Distance = thumbsProps[Thumbs.First].percentValue * unitWidth.value;
      var thumb2Distance = thumbsProps[Thumbs.Second].percentValue * unitWidth.value;
      var offsetToThumb1 = Math.abs(offset - thumb1Distance);
      var offsetToThumb2 = Math.abs(offset - thumb2Distance);
      return offsetToThumb1 <= offsetToThumb2 ? Thumbs.First : Thumbs.Second;
    };
    var start = (event, type) => {
      if (!maxWidth.value)
        maxWidth.value = sliderEl.value.offsetWidth;
      if (isDisabled.value || isReadonly.value)
        return;
      props2.onStart == null ? void 0 : props2.onStart();
      isScroll.value = true;
      thumbsProps[type].startPosition = event.touches[0].clientX;
    };
    var move = (event, type) => {
      if (isDisabled.value || isReadonly.value || !isScroll.value)
        return;
      var moveDistance = event.touches[0].clientX - thumbsProps[type].startPosition + thumbsProps[type].currentLeft;
      thumbsProps[type].active = true;
      if (moveDistance <= 0)
        moveDistance = 0;
      else if (moveDistance >= maxWidth.value)
        moveDistance = maxWidth.value;
      setPercent(moveDistance, type);
    };
    var end = (type) => {
      var {
        range,
        modelValue,
        onEnd
      } = props2;
      if (isDisabled.value || isReadonly.value)
        return;
      var rangeValue = [];
      thumbsProps[type].currentLeft = thumbsProps[type].percentValue * unitWidth.value;
      thumbsProps[type].active = false;
      var curValue = thumbsProps[type].percentValue;
      if (range && isArray(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue];
      }
      onEnd == null ? void 0 : onEnd(range ? rangeValue : curValue);
      isScroll.value = false;
    };
    var click = (event) => {
      if (isDisabled.value || isReadonly.value)
        return;
      if (event.target.closest(".var-slider__thumb"))
        return;
      var offset = event.clientX - getLeft(event.currentTarget);
      var type = getType(offset);
      setPercent(offset, type);
      end(type);
    };
    var stepValidator = () => {
      var stepNumber = toNumber(props2.step);
      if (isNaN(stepNumber)) {
        console.warn('[Varlet] Slider: type of prop "step" should be Number');
        return false;
      }
      if (stepNumber < 1 || stepNumber > 100) {
        console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100');
        return false;
      }
      if (parseInt("" + props2.step, 10) !== stepNumber) {
        console.warn('[Varlet] Slider: "step" should be an Integer');
        return false;
      }
      return true;
    };
    var valueValidator = () => {
      var {
        range,
        modelValue
      } = props2;
      if (range && !isArray(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be an Array');
        return false;
      }
      if (!range && isArray(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be a Number');
        return false;
      }
      if (range && isArray(modelValue) && modelValue.length < 2) {
        console.error('[Varlet] Slider: "modelValue" should have two value');
        return false;
      }
      return true;
    };
    var setProps = function(modelValue, step2) {
      if (modelValue === void 0) {
        modelValue = props2.modelValue;
      }
      if (step2 === void 0) {
        step2 = toNumber(props2.step);
      }
      if (props2.range && isArray(modelValue)) {
        thumbsProps[Thumbs.First].percentValue = modelValue[0] / step2;
        thumbsProps[Thumbs.First].currentLeft = thumbsProps[Thumbs.First].percentValue * unitWidth.value;
        thumbsProps[Thumbs.Second].percentValue = modelValue[1] / step2;
        thumbsProps[Thumbs.Second].currentLeft = thumbsProps[Thumbs.Second].percentValue * unitWidth.value;
      } else if (isNumber(modelValue)) {
        thumbsProps[Thumbs.First].currentLeft = modelValue / step2 * unitWidth.value;
      }
    };
    watch([() => props2.modelValue, () => props2.step], (_ref) => {
      var [modelValue, step2] = _ref;
      if (!stepValidator() || !valueValidator() || isScroll.value)
        return;
      setProps(modelValue, toNumber(step2));
    });
    watch(maxWidth, () => setProps());
    onMounted(() => {
      if (!stepValidator() || !valueValidator())
        return;
      maxWidth.value = sliderEl.value.offsetWidth;
    });
    var reset = () => {
      var _props$onUpdateModel2;
      var resetValue = props2.range ? [0, 0] : 0;
      (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, resetValue);
      resetValidation();
    };
    var sliderProvider = {
      reset,
      validate,
      resetValidation
    };
    bindForm == null ? void 0 : bindForm(sliderProvider);
    return {
      Thumbs,
      sliderEl,
      getFillStyle,
      isDisabled,
      errorMessage,
      thumbsProps,
      thumbList,
      toNumber,
      getRippleSize,
      showLabel,
      start,
      move,
      end,
      click
    };
  }
});
Slider.install = function(app) {
  app.component(Slider.name, Slider);
};
function positionValidator(position) {
  var validPositions = ["top", "center", "bottom"];
  return validPositions.includes(position);
}
function typeValidator(type) {
  return SNACKBAR_TYPE.includes(type);
}
var props$a = {
  type: {
    type: String,
    validator: typeValidator
  },
  position: {
    type: String,
    default: "top",
    validator: positionValidator
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: false
  },
  loadingType: pickProps(props$O, "type"),
  loadingSize: pickProps(props$O, "size"),
  lockScroll: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: false
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: false
  },
  onOpen: {
    type: Function,
    default: () => {
    }
  },
  onOpened: {
    type: Function,
    default: () => {
    }
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  onClosed: {
    type: Function,
    default: () => {
    }
  },
  "onUpdate:show": {
    type: Function
  },
  _update: {
    type: String
  }
};
var ICON_TYPE_DICT = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
var _hoisted_1$6 = {
  class: "var-snackbar__action"
};
function render$c(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_loading = resolveComponent("var-loading");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "var-snackbar",
    style: normalizeStyle({
      pointerEvents: _ctx.isForbidClick ? "auto" : "none",
      zIndex: _ctx.zIndex
    })
  }, [createElementVNode("div", {
    class: normalizeClass(_ctx.snackbarClass),
    style: normalizeStyle({
      zIndex: _ctx.zIndex
    })
  }, [createElementVNode("div", {
    class: normalizeClass(["var-snackbar__content", [_ctx.contentClass]])
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.content), 1)])], 2), createElementVNode("div", _hoisted_1$6, [_ctx.iconName ? (openBlock(), createBlock(_component_var_icon, {
    key: 0,
    name: _ctx.iconName
  }, null, 8, ["name"])) : createCommentVNode("v-if", true), _ctx.type === "loading" ? (openBlock(), createBlock(_component_var_loading, {
    key: 1,
    type: _ctx.loadingType,
    size: _ctx.loadingSize
  }, null, 8, ["type", "size"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "action")])], 6)], 4)), [[vShow, _ctx.show]]);
}
var VarSnackbarCore = defineComponent({
  render: render$c,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Loading,
    VarIcon: Icon
  },
  props: props$a,
  setup(props2) {
    var timer = ref(null);
    var {
      zIndex
    } = useZIndex(() => props2.show, 1);
    useLock(props2, "show", "lockScroll");
    var snackbarClass = computed(() => {
      var {
        position,
        vertical,
        type
      } = props2;
      var baseClass = "var-snackbar__wrapper var-snackbar__wrapper-" + position + " var-elevation--4";
      var verticalClass = vertical ? " var-snackbar__vertical" : "";
      var typeClass = type && SNACKBAR_TYPE.includes(type) ? " var-snackbar__wrapper-" + type : "";
      return "" + baseClass + verticalClass + typeClass;
    });
    var isForbidClick = computed(() => props2.type === "loading" || props2.forbidClick);
    var iconName = computed(() => {
      if (!props2.type)
        return "";
      return ICON_TYPE_DICT[props2.type];
    });
    var updateAfterDuration = () => {
      timer.value = setTimeout(() => {
        var _props$onUpdateShow;
        props2.type !== "loading" && ((_props$onUpdateShow = props2["onUpdate:show"]) == null ? void 0 : _props$onUpdateShow.call(props2, false));
      }, props2.duration);
    };
    watch(() => props2.show, (show) => {
      if (show) {
        props2.onOpen == null ? void 0 : props2.onOpen();
        updateAfterDuration();
      } else if (show === false) {
        clearTimeout(timer.value);
        props2.onClose == null ? void 0 : props2.onClose();
      }
    });
    watch(() => props2._update, () => {
      clearTimeout(timer.value);
      updateAfterDuration();
    });
    onMounted(() => {
      if (props2.show) {
        props2.onOpen == null ? void 0 : props2.onOpen();
        updateAfterDuration();
      }
    });
    return {
      zIndex,
      snackbarClass,
      iconName,
      isForbidClick
    };
  }
});
function render$b(_ctx, _cache) {
  var _component_var_snackbar_core = resolveComponent("var-snackbar-core");
  return openBlock(), createBlock(Teleport, {
    to: _ctx.teleport,
    disabled: _ctx.disabled
  }, [createVNode(Transition, {
    name: "var-snackbar-fade",
    onAfterEnter: _ctx.onOpened,
    onAfterLeave: _ctx.onClosed
  }, {
    default: withCtx(() => [createVNode(_component_var_snackbar_core, mergeProps(_ctx.$props, {
      class: "var-snackbar-transition"
    }), {
      action: withCtx(() => [renderSlot(_ctx.$slots, "action")]),
      default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.content), 1)])]),
      _: 3
    }, 16)]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]);
}
var VarSnackbar = defineComponent({
  render: render$b,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore
  },
  props: props$a,
  setup() {
    var {
      disabled
    } = useTeleport();
    return {
      disabled
    };
  }
});
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var SNACKBAR_TYPE = ["loading", "success", "warning", "info", "error"];
var sid = 0;
var isMount = false;
var unmount;
var isAllowMultiple = false;
var uniqSnackbarOptions = reactive([]);
var defaultOption = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: false,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: false,
  teleport: "body",
  forbidClick: false,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
var transitionGroupProps = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
};
var TransitionGroupHost = {
  setup() {
    return () => {
      var snackbarList = uniqSnackbarOptions.map((_ref) => {
        var {
          id,
          reactiveSnackOptions,
          _update
        } = _ref;
        var transitionGroupEl = document.querySelector(".var-transition-group");
        if (reactiveSnackOptions.forbidClick || reactiveSnackOptions.type === "loading") {
          transitionGroupEl.classList.add("var-pointer-auto");
        } else {
          transitionGroupEl.classList.remove("var-pointer-auto");
        }
        if (isAllowMultiple)
          reactiveSnackOptions.position = "top";
        var position = isAllowMultiple ? "relative" : "absolute";
        var style = _extends({
          position
        }, getTop(reactiveSnackOptions.position));
        return createVNode(VarSnackbarCore, mergeProps(reactiveSnackOptions, {
          "key": id,
          "style": style,
          "data-id": id,
          "_update": _update,
          "show": reactiveSnackOptions.show,
          "onUpdate:show": ($event) => reactiveSnackOptions.show = $event
        }), null);
      });
      var zindex = Context.zIndex;
      return createVNode(TransitionGroup, mergeProps(transitionGroupProps, {
        "style": {
          zIndex: zindex
        },
        "onAfterEnter": opened,
        "onAfterLeave": removeUniqOption
      }), _isSlot(snackbarList) ? snackbarList : {
        default: () => [snackbarList]
      });
    };
  }
};
var Snackbar = function(options) {
  var snackOptions = isString(options) || isNumber(options) ? {
    content: String(options)
  } : options;
  var reactiveSnackOptions = reactive(_extends({}, defaultOption, snackOptions));
  reactiveSnackOptions.show = true;
  if (!isMount) {
    isMount = true;
    unmount = mountInstance(TransitionGroupHost).unmountInstance;
  }
  var {
    length
  } = uniqSnackbarOptions;
  var uniqSnackbarOptionItem = {
    id: sid++,
    reactiveSnackOptions
  };
  if (length === 0 || isAllowMultiple) {
    addUniqOption(uniqSnackbarOptionItem);
  } else {
    var _update = "update-" + sid;
    updateUniqOption(reactiveSnackOptions, _update);
  }
  return {
    clear() {
      if (!isAllowMultiple && uniqSnackbarOptions.length) {
        uniqSnackbarOptions[0].reactiveSnackOptions.show = false;
      } else {
        reactiveSnackOptions.show = false;
      }
    }
  };
};
SNACKBAR_TYPE.forEach((type) => {
  Snackbar[type] = (options) => {
    if (isPlainObject(options)) {
      options.type = type;
    } else {
      options = {
        content: options,
        type
      };
    }
    return Snackbar(options);
  };
});
Snackbar.install = function(app) {
  app.component(VarSnackbar.name, VarSnackbar);
};
Snackbar.allowMultiple = function(bool) {
  if (bool === void 0) {
    bool = false;
  }
  if (bool !== isAllowMultiple) {
    uniqSnackbarOptions.forEach((option2) => {
      option2.reactiveSnackOptions.show = false;
    });
    isAllowMultiple = bool;
  }
};
Snackbar.clear = function() {
  uniqSnackbarOptions.forEach((option2) => {
    option2.reactiveSnackOptions.show = false;
  });
};
Snackbar.Component = VarSnackbar;
function opened(element) {
  var id = element.getAttribute("data-id");
  var option2 = uniqSnackbarOptions.find((option3) => option3.id === toNumber(id));
  if (option2)
    option2.reactiveSnackOptions.onOpened == null ? void 0 : option2.reactiveSnackOptions.onOpened();
}
function removeUniqOption(element) {
  element.parentElement && element.parentElement.classList.remove("var-pointer-auto");
  var id = element.getAttribute("data-id");
  var option2 = uniqSnackbarOptions.find((option3) => option3.id === toNumber(id));
  if (option2) {
    option2.animationEnd = true;
    option2.reactiveSnackOptions.onClosed == null ? void 0 : option2.reactiveSnackOptions.onClosed();
  }
  var isAllAnimationEnd = uniqSnackbarOptions.every((option3) => option3.animationEnd);
  if (isAllAnimationEnd) {
    unmount == null ? void 0 : unmount();
    uniqSnackbarOptions = reactive([]);
    isMount = false;
  }
}
function addUniqOption(uniqSnackbarOptionItem) {
  uniqSnackbarOptions.push(uniqSnackbarOptionItem);
}
function updateUniqOption(reactiveSnackOptions, _update) {
  var [firstOption] = uniqSnackbarOptions;
  firstOption.reactiveSnackOptions = _extends({}, firstOption.reactiveSnackOptions, reactiveSnackOptions);
  firstOption._update = _update;
}
function getTop(position) {
  if (position === void 0) {
    position = "top";
  }
  if (position === "bottom")
    return {
      [position]: "5%"
    };
  return {
    top: position === "top" ? "5%" : "45%"
  };
}
VarSnackbar.install = function(app) {
  app.component(VarSnackbar.name, VarSnackbar);
};
var internalSizeValidator = (size) => ["mini", "small", "normal", "large"].includes(size);
var sizeValidator = (size) => {
  return internalSizeValidator(size) || isArray(size) || isNumber(size) || isString(size);
};
var justifyValidator = (justify) => {
  return ["start", "end", "center", "space-around", "space-between"].includes(justify);
};
var props$9 = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: sizeValidator
  },
  wrap: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "start",
    validator: justifyValidator
  },
  inline: {
    type: Boolean,
    default: false
  }
};
var internalSizes = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
var Space = defineComponent({
  name: "VarSpace",
  props: props$9,
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var getSize = (size, isInternalSize) => {
      return isInternalSize ? internalSizes[size] : isArray(size) ? size.map(toPxNum) : [toPxNum(size), toPxNum(size)];
    };
    return () => {
      var _slots$default;
      var {
        inline,
        justify,
        align,
        wrap,
        direction,
        size
      } = props2;
      var children = (_slots$default = slots.default == null ? void 0 : slots.default()) != null ? _slots$default : [];
      var isInternalSize = internalSizeValidator(size);
      var [y, x] = getSize(size, isInternalSize);
      var flatten = (vNodes) => {
        var result = [];
        vNodes.forEach((vNode) => {
          if (vNode.type === Comment)
            return;
          if (vNode.type === Fragment && isArray(vNode.children)) {
            vNode.children.forEach((item) => {
              result.push(item);
            });
            return;
          }
          result.push(vNode);
        });
        return result;
      };
      children = flatten(children);
      var lastIndex = children.length - 1;
      var spacers = children.map((child, index) => {
        var margin = "0";
        if (direction === "row") {
          if (justify === "start" || justify === "center" || justify === "end") {
            if (index !== lastIndex) {
              margin = y / 2 + "px " + x + "px " + y / 2 + "px 0";
            } else {
              margin = y / 2 + "px 0";
            }
          } else if (justify === "space-around") {
            margin = y / 2 + "px " + x / 2 + "px";
          } else if (justify === "space-between") {
            if (index === 0) {
              margin = y / 2 + "px " + x / 2 + "px " + y / 2 + "px 0";
            } else if (index === lastIndex) {
              margin = y / 2 + "px 0 " + y / 2 + "px " + x / 2 + "px";
            } else {
              margin = y / 2 + "px " + x / 2 + "px";
            }
          }
        }
        if (direction === "column" && index !== lastIndex) {
          margin = "0 0 " + y + "px 0";
        }
        return createVNode("div", {
          "style": {
            margin
          }
        }, [child]);
      });
      return createVNode("div", {
        "class": ["var-space", "var--box", inline ? "var-space--inline" : null],
        "style": {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          flexWrap: wrap ? "wrap" : "nowrap",
          margin: direction === "row" ? "-" + y / 2 + "px 0" : void 0
        }
      }, [spacers]);
    };
  }
});
Space.install = function(app) {
  app.component(Space.name, Space);
};
var props$8 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
};
var STEPS_BIND_STEP_KEY = Symbol("STEPS_BIND_STEP_KEY");
var STEPS_COUNT_STEP_KEY = Symbol("STEPS_COUNT_STEP_KEY");
function useStep() {
  var {
    bindChildren,
    childProviders
  } = useChildren(STEPS_BIND_STEP_KEY);
  var {
    length
  } = useAtChildrenCounter(STEPS_COUNT_STEP_KEY);
  return {
    length,
    step: childProviders,
    bindStep: bindChildren
  };
}
function useSteps() {
  var {
    parentProvider,
    bindParent
  } = useParent(STEPS_BIND_STEP_KEY);
  var {
    index
  } = useAtParentIndex(STEPS_COUNT_STEP_KEY);
  if (!parentProvider || !bindParent || !index) {
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  }
  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent
  };
}
var _hoisted_1$5 = {
  class: "var-step"
};
var _hoisted_2$4 = {
  key: 3
};
function render$a(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("div", {
    class: normalizeClass("var-step-" + _ctx.direction)
  }, [createElementVNode("div", {
    class: normalizeClass("var-step-" + _ctx.direction + "__main"),
    ref: _ctx.getRef
  }, [createElementVNode("div", {
    class: normalizeClass({
      ["var-step-" + _ctx.direction + "__tag"]: true,
      ["var-step-" + _ctx.direction + "__tag--active"]: _ctx.isActive || _ctx.isCurrent
    }),
    style: normalizeStyle({
      backgroundColor: _ctx.isActive || _ctx.isCurrent ? _ctx.activeColor : _ctx.inactiveColor
    }),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [_ctx.isActive ? (openBlock(), createBlock(_component_var_icon, {
    key: 0,
    class: "var-step__icon",
    "var-step-cover": "",
    name: _ctx.activeIcon
  }, null, 8, ["name"])) : _ctx.isCurrent && _ctx.currentIcon ? (openBlock(), createBlock(_component_var_icon, {
    key: 1,
    class: "var-step__icon",
    "var-step-cover": "",
    name: _ctx.currentIcon
  }, null, 8, ["name"])) : _ctx.inactiveIcon ? (openBlock(), createBlock(_component_var_icon, {
    key: 2,
    class: "var-step__icon",
    "var-step-cover": "",
    name: _ctx.inactiveIcon
  }, null, 8, ["name"])) : (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(_ctx.index + 1), 1))], 6), createElementVNode("div", {
    class: normalizeClass({
      ["var-step-" + _ctx.direction + "__content"]: true,
      ["var-step-" + _ctx.direction + "__content--active"]: _ctx.isActive || _ctx.isCurrent
    }),
    onClick: _cache[1] || (_cache[1] = function() {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 2)], 2), !_ctx.isLastChild ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass("var-step-" + _ctx.direction + "__line"),
    style: normalizeStyle({
      margin: _ctx.lineMargin
    })
  }, null, 6)) : createCommentVNode("v-if", true)], 2)]);
}
var Step = defineComponent({
  render: render$a,
  name: "VarStep",
  components: {
    VarIcon: Icon
  },
  props: props$8,
  setup() {
    var main = ref(null);
    var lineMargin = ref("");
    var isLastChild = ref(false);
    var {
      index,
      steps,
      bindSteps
    } = useSteps();
    var {
      active,
      length,
      activeColor,
      inactiveColor,
      direction,
      clickStep
    } = steps;
    var isCurrent = computed(() => active.value === index.value);
    var isActive = computed(() => index.value !== -1 && active.value > index.value);
    var stepProvider = {
      index
    };
    var click = () => clickStep(index.value);
    var getRef = (el) => {
      if (direction.value === "horizontal") {
        main.value = el;
      }
    };
    bindSteps(stepProvider);
    watch(length, (newLength) => {
      isLastChild.value = newLength - 1 === index.value;
      if (main.value) {
        var margin = main.value.offsetWidth / 2 - 14;
        lineMargin.value = "0 -" + margin + "px";
      }
    });
    return {
      main,
      index,
      isActive,
      isCurrent,
      direction,
      lineMargin,
      activeColor,
      inactiveColor,
      isLastChild,
      click,
      getRef
    };
  }
});
Step.install = function(app) {
  app.component(Step.name, Step);
};
function directionValidator$1(direction) {
  return ["horizontal", "vertical"].includes(direction);
}
var props$7 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: directionValidator$1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
};
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: "var-steps",
    style: normalizeStyle({
      flexDirection: _ctx.direction === "horizontal" ? "row" : "column"
    })
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
var Steps = defineComponent({
  render: render$9,
  name: "VarSteps",
  props: props$7,
  setup(props2) {
    var active = computed(() => props2.active);
    var activeColor = computed(() => props2.activeColor);
    var inactiveColor = computed(() => props2.inactiveColor);
    var direction = computed(() => props2.direction);
    var {
      length,
      bindStep
    } = useStep();
    var clickStep = (index) => {
      props2.onClickStep == null ? void 0 : props2.onClickStep(index);
    };
    var stepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      clickStep
    };
    bindStep(stepsProvider);
  }
});
Steps.install = function(app) {
  app.component(Steps.name, Steps);
};
var VarStyleProvider = defineComponent({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    return () => h("div", {
      class: "var-style-provider",
      style: formatStyleVars(props2.styleVars)
    }, slots.default == null ? void 0 : slots.default());
  }
});
var mountedVarKeys = [];
function StyleProvider(styleVars) {
  if (styleVars === void 0) {
    styleVars = {};
  }
  mountedVarKeys.forEach((key) => document.documentElement.style.removeProperty(key));
  mountedVarKeys.length = 0;
  var styles = formatStyleVars(styleVars);
  Object.entries(styles).forEach((_ref) => {
    var [key, value] = _ref;
    document.documentElement.style.setProperty(key, value);
    mountedVarKeys.push(key);
  });
}
StyleProvider.Component = VarStyleProvider;
VarStyleProvider.install = function(app) {
  app.component(VarStyleProvider.name, VarStyleProvider);
};
StyleProvider.install = function(app) {
  app.component(VarStyleProvider.name, VarStyleProvider);
};
var props$6 = {
  modelValue: {
    default: false
  },
  activeValue: {
    default: true
  },
  inactiveValue: {
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number],
    default: 20
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: true
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
var _hoisted_1$4 = {
  class: "var-switch"
};
function render$8(_ctx, _cache) {
  var _component_var_loading = resolveComponent("var-loading");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [createElementVNode("div", {
    class: normalizeClass(["var-switch-block", [_ctx.disabled || _ctx.formDisabled ? "var-switch__disable" : null]]),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.switchActive && _ctx.switchActive(...arguments);
    }),
    style: normalizeStyle(_ctx.styleComputed.switch)
  }, [createElementVNode("div", {
    style: normalizeStyle(_ctx.styleComputed.track),
    class: normalizeClass(["var-switch__track", [_ctx.modelValue === _ctx.activeValue ? "var-switch__track-active" : null, _ctx.errorMessage ? "var-switch__track-error" : null]])
  }, null, 6), withDirectives((openBlock(), createElementBlock("div", {
    class: "var-switch__ripple",
    style: normalizeStyle(_ctx.styleComputed.ripple)
  }, [createElementVNode("div", {
    style: normalizeStyle(_ctx.styleComputed.handle),
    class: normalizeClass(["var-switch__handle var-elevation--2", [_ctx.modelValue === _ctx.activeValue ? "var-switch__handle-active" : null, _ctx.errorMessage ? "var-switch__handle-error" : null]])
  }, [_ctx.loading ? (openBlock(), createBlock(_component_var_loading, {
    key: 0,
    radius: _ctx.toNumber(_ctx.size) / 2 - 2
  }, null, 8, ["radius"])) : createCommentVNode("v-if", true)], 6)], 4)), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.loading || _ctx.formDisabled
  }]])], 6), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8, ["error-message"])]);
}
var Switch = defineComponent({
  render: render$8,
  name: "VarSwitch",
  components: {
    VarLoading: Loading,
    VarFormDetails: FormDetails
  },
  directives: {
    Ripple
  },
  props: props$6,
  setup(props2) {
    var {
      bindForm,
      form
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var validate = () => v(props2.rules, props2.modelValue);
    var validateWithTrigger = () => nextTick(() => vt(["onChange"], "onChange", props2.rules, props2.modelValue));
    var styleComputed = computed(() => {
      var {
        size,
        modelValue,
        color,
        closeColor,
        loadingColor,
        activeValue
      } = props2;
      var sizeNum = toNumber(size);
      var switchWidth = sizeNum * 2;
      var switchHeight = sizeNum * 1.2;
      return {
        handle: {
          width: size + "px",
          height: size + "px",
          backgroundColor: modelValue === activeValue ? color || "" : closeColor || "",
          color: loadingColor && loadingColor
        },
        ripple: {
          left: modelValue === activeValue ? sizeNum / 2 + "px" : "-" + sizeNum / 2 + "px",
          color: modelValue === activeValue ? color || "" : closeColor || "#999",
          width: sizeNum * 2 + "px",
          height: sizeNum * 2 + "px"
        },
        track: {
          height: switchHeight * 0.6 + "px",
          width: switchWidth - 2 + "px",
          borderRadius: switchWidth / 3 + "px",
          filter: modelValue === activeValue || errorMessage != null && errorMessage.value ? "opacity(.6)" : "brightness(.6)",
          backgroundColor: modelValue === activeValue ? color || "" : closeColor || ""
        },
        switch: {
          height: switchHeight + "px",
          width: switchWidth + "px"
        }
      };
    });
    var switchActive = (event) => {
      var {
        onClick,
        onChange,
        disabled,
        loading: loading2,
        readonly,
        modelValue,
        activeValue,
        inactiveValue,
        "onUpdate:modelValue": updateModelValue
      } = props2;
      onClick == null ? void 0 : onClick(event);
      if (disabled || loading2 || readonly || form != null && form.disabled.value || form != null && form.readonly.value)
        return;
      var newValue = modelValue === activeValue ? inactiveValue : activeValue;
      onChange == null ? void 0 : onChange(newValue);
      updateModelValue == null ? void 0 : updateModelValue(newValue);
      validateWithTrigger();
    };
    var reset = () => {
      var _props$onUpdateModel;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, props2.inactiveValue);
      resetValidation();
    };
    var switchProvider = {
      reset,
      validate,
      resetValidation
    };
    bindForm == null ? void 0 : bindForm(switchProvider);
    return {
      switchActive,
      toNumber,
      styleComputed,
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly
    };
  }
});
Switch.install = function(app) {
  app.component(Switch.name, Switch);
};
var props$5 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  }
};
var TABS_BIND_TAB_KEY = Symbol("TABS_BIND_TAB_KEY");
var TABS_COUNT_TAB_KEY = Symbol("TABS_COUNT_TAB_KEY");
function useTabList() {
  var {
    childProviders,
    bindChildren
  } = useChildren(TABS_BIND_TAB_KEY);
  var {
    length
  } = useAtChildrenCounter(TABS_COUNT_TAB_KEY);
  return {
    length,
    tabList: childProviders,
    bindTabList: bindChildren
  };
}
function useTabs() {
  var {
    parentProvider,
    bindParent
  } = useParent(TABS_BIND_TAB_KEY);
  var {
    index
  } = useAtParentIndex(TABS_COUNT_TAB_KEY);
  if (!parentProvider || !bindParent || !index) {
    throw Error("<var-tab/> must in <var-tabs/>");
  }
  return {
    index,
    tabs: parentProvider,
    bindTabs: bindParent
  };
}
function render$7(_ctx, _cache) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-tab var--box", [_ctx.computeColorClass(), "var-tab--" + _ctx.itemDirection]]),
    ref: "tabEl",
    style: normalizeStyle({
      color: _ctx.computeColorStyle()
    }),
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [renderSlot(_ctx.$slots, "default")], 6)), [[_directive_ripple, {
    disabled: _ctx.disabled
  }]]);
}
var Tab = defineComponent({
  render: render$7,
  name: "VarTab",
  directives: {
    Ripple
  },
  props: props$5,
  setup(props2) {
    var tabEl = ref(null);
    var name = computed(() => props2.name);
    var disabled = computed(() => props2.disabled);
    var element = computed(() => tabEl.value);
    var {
      index,
      tabs: tabs2,
      bindTabs
    } = useTabs();
    var {
      onTabClick,
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize
    } = tabs2;
    var tabProvider = {
      name,
      index,
      disabled,
      element
    };
    bindTabs(tabProvider);
    var computeColorStyle = () => {
      var {
        disabled: disabled2,
        name: name2
      } = props2;
      return disabled2 ? disabledColor.value : active.value === name2 || active.value === (index == null ? void 0 : index.value) ? activeColor.value : inactiveColor.value;
    };
    var computeColorClass = () => {
      var {
        disabled: disabled2,
        name: name2
      } = props2;
      return disabled2 ? "var-tab--disabled" : active.value === name2 || active.value === (index == null ? void 0 : index.value) ? "var-tab--active" : "var-tab--inactive";
    };
    var handleClick = (event) => {
      var {
        disabled: disabled2,
        name: name2,
        onClick
      } = props2;
      if (disabled2) {
        return;
      }
      onClick == null ? void 0 : onClick(name2 != null ? name2 : index.value, event);
      onTabClick(tabProvider);
    };
    watch(() => props2.name, resize);
    watch(() => props2.disabled, resize);
    return {
      tabEl,
      active,
      activeColor,
      inactiveColor,
      itemDirection,
      computeColorStyle,
      computeColorClass,
      handleClick
    };
  }
});
Tab.install = function(app) {
  app.component(Tab.name, Tab);
};
var TABS_ITEMS_BIND_TAB_ITEM_KEY = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
var TABS_ITEMS_COUNT_TAB_ITEM_KEY = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function useTabItem() {
  var {
    bindChildren,
    childProviders
  } = useChildren(TABS_ITEMS_BIND_TAB_ITEM_KEY);
  var {
    length
  } = useAtChildrenCounter(TABS_ITEMS_COUNT_TAB_ITEM_KEY);
  return {
    length,
    tabItemList: childProviders,
    bindTabItem: bindChildren
  };
}
function useTabsItems() {
  var {
    parentProvider,
    bindParent
  } = useParent(TABS_ITEMS_BIND_TAB_ITEM_KEY);
  var {
    index
  } = useAtParentIndex(TABS_ITEMS_COUNT_TAB_ITEM_KEY);
  if (!parentProvider || !bindParent || !index) {
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  }
  return {
    index,
    tabsItems: parentProvider,
    bindTabsItems: bindParent
  };
}
var props$4 = {
  name: {
    type: [String, Number]
  }
};
function render$6(_ctx, _cache) {
  var _component_var_swipe_item = resolveComponent("var-swipe-item");
  return openBlock(), createBlock(_component_var_swipe_item, {
    class: normalizeClass(["var-tab-item", [!_ctx.current && "var-tab-item--inactive"]]),
    "var-tab-item-cover": ""
  }, {
    default: withCtx(() => [_ctx.initSlot ? renderSlot(_ctx.$slots, "default", {
      key: 0
    }) : createCommentVNode("v-if", true)]),
    _: 3
  }, 8, ["class"]);
}
var TabItem = defineComponent({
  render: render$6,
  name: "VarTabItem",
  components: {
    VarSwipeItem: SwipeItem
  },
  props: props$4,
  setup(props2) {
    var current = ref(false);
    var initSlot = ref(false);
    var name = computed(() => props2.name);
    var {
      index,
      bindTabsItems
    } = useTabsItems();
    var setCurrent = (value) => {
      if (!initSlot.value && value) {
        initSlot.value = true;
      }
      current.value = value;
    };
    var tabItemProvider = {
      index,
      name,
      setCurrent
    };
    bindTabsItems(tabItemProvider);
    return {
      current,
      initSlot
    };
  }
});
TabItem.install = function(app) {
  app.component(TabItem.name, TabItem);
};
var _hoisted_1$3 = {
  class: "var-table var-elevation--1 var--box"
};
var _hoisted_2$3 = {
  class: "var-table__main"
};
var _hoisted_3$2 = {
  key: 0,
  class: "var-table__footer"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [createElementVNode("table", {
    class: "var-table__table",
    style: normalizeStyle({
      width: _ctx.toSizeUnit(_ctx.fullWidth)
    })
  }, [renderSlot(_ctx.$slots, "default")], 4)]), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3$2, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("v-if", true)]);
}
var Table = defineComponent({
  render: render$5,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit
    };
  }
});
Table.install = function(app) {
  app.component(Table.name, Table);
};
function directionValidator(direction) {
  return ["horizontal", "vertical"].includes(direction);
}
var props$3 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: directionValidator
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: directionValidator
  },
  fixedBottom: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  offsetTop: pickProps(props$s, "offsetTop"),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  }
};
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator$1(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function render$4(_ctx, _cache) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.sticky ? "var-sticky" : _ctx.Transition), {
    "offset-top": _ctx.sticky ? _ctx.offsetTop : null
  }, {
    default: withCtx(() => [createElementVNode("div", mergeProps({
      class: ["var-tabs var--box", ["var-tabs--item-" + _ctx.itemDirection, "var-tabs--layout-" + _ctx.layoutDirection + "-padding", _ctx.elevation ? "var-elevation--4" : null, _ctx.fixedBottom ? "var-tabs--fixed-bottom" : null]],
      style: {
        background: _ctx.color
      }
    }, _ctx.$attrs), [createElementVNode("div", {
      class: normalizeClass(["var-tabs__tab-wrap", [_ctx.scrollable ? "var-tabs--layout-" + _ctx.layoutDirection + "-scrollable" : null, "var-tabs--layout-" + _ctx.layoutDirection]]),
      ref: "scrollerEl"
    }, [renderSlot(_ctx.$slots, "default"), createElementVNode("div", {
      class: normalizeClass(["var-tabs__indicator", ["var-tabs--layout-" + _ctx.layoutDirection + "-indicator"]]),
      style: normalizeStyle({
        width: _ctx.layoutDirection === "horizontal" ? _ctx.indicatorWidth : _ctx.toSizeUnit(_ctx.indicatorSize),
        height: _ctx.layoutDirection === "horizontal" ? _ctx.toSizeUnit(_ctx.indicatorSize) : _ctx.indicatorHeight,
        transform: _ctx.layoutDirection === "horizontal" ? "translateX(" + _ctx.indicatorX + ")" : "translateY(" + _ctx.indicatorY + ")",
        background: _ctx.indicatorColor || _ctx.activeColor
      })
    }, null, 6)], 2)], 16)]),
    _: 3
  }, 8, ["offset-top"]);
}
var Tabs = defineComponent({
  render: render$4,
  name: "VarTabs",
  components: {
    VarSticky: Sticky
  },
  inheritAttrs: false,
  props: props$3,
  setup(props2) {
    var indicatorWidth = ref("0px");
    var indicatorHeight = ref("0px");
    var indicatorX = ref("0px");
    var indicatorY = ref("0px");
    var scrollable = ref(false);
    var scrollerEl = ref(null);
    var active = computed(() => props2.active);
    var activeColor = computed(() => props2.activeColor);
    var inactiveColor = computed(() => props2.inactiveColor);
    var disabledColor = computed(() => props2.disabledColor);
    var itemDirection = computed(() => props2.itemDirection);
    var {
      tabList,
      bindTabList,
      length
    } = useTabList();
    var onTabClick = (tab2) => {
      var _tab$name$value, _props$onUpdateActiv;
      var currentActive = (_tab$name$value = tab2.name.value) != null ? _tab$name$value : tab2.index.value;
      var {
        active: active2,
        onChange,
        onClick
      } = props2;
      (_props$onUpdateActiv = props2["onUpdate:active"]) == null ? void 0 : _props$onUpdateActiv.call(props2, currentActive);
      onClick == null ? void 0 : onClick(currentActive);
      currentActive !== active2 && (onChange == null ? void 0 : onChange(currentActive));
    };
    var matchName = () => {
      return tabList.find((_ref) => {
        var {
          name
        } = _ref;
        return props2.active === name.value;
      });
    };
    var matchIndex = () => {
      return tabList.find((_ref2) => {
        var {
          index
        } = _ref2;
        return props2.active === index.value;
      });
    };
    var matchBoundary = () => {
      var _props$onUpdateActiv2, _props$onUpdateActiv3;
      if (length.value === 0) {
        return;
      }
      var {
        active: active2
      } = props2;
      isNumber(active2) ? active2 > length.value - 1 ? (_props$onUpdateActiv2 = props2["onUpdate:active"]) == null ? void 0 : _props$onUpdateActiv2.call(props2, length.value - 1) : (_props$onUpdateActiv3 = props2["onUpdate:active"]) == null ? void 0 : _props$onUpdateActiv3.call(props2, 0) : null;
      return matchIndex();
    };
    var watchScrollable = () => {
      scrollable.value = tabList.length >= 5;
    };
    var moveIndicator = (_ref3) => {
      var {
        element
      } = _ref3;
      var el = element.value;
      if (props2.layoutDirection === "horizontal") {
        indicatorWidth.value = (el == null ? void 0 : el.offsetWidth) + "px";
        indicatorX.value = (el == null ? void 0 : el.offsetLeft) + "px";
      } else {
        indicatorHeight.value = (el == null ? void 0 : el.offsetHeight) + "px";
        indicatorY.value = (el == null ? void 0 : el.offsetTop) + "px";
      }
    };
    var scrollToCenter = (_ref4) => {
      var {
        element
      } = _ref4;
      if (!scrollable.value) {
        return;
      }
      var scroller2 = scrollerEl.value;
      var el = element.value;
      if (props2.layoutDirection === "horizontal") {
        var left = el.offsetLeft + el.offsetWidth / 2 - scroller2.offsetWidth / 2;
        scrollTo(scroller2, {
          left,
          animation: linear
        });
      } else {
        var top = el.offsetTop + el.offsetHeight / 2 - scroller2.offsetHeight / 2;
        scrollTo(scroller2, {
          top,
          animation: linear
        });
      }
    };
    var resize = () => {
      var tab2 = matchName() || matchIndex() || matchBoundary();
      if (!tab2 || tab2.disabled.value) {
        return;
      }
      watchScrollable();
      moveIndicator(tab2);
      scrollToCenter(tab2);
    };
    var tabsProvider = {
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize,
      onTabClick
    };
    bindTabList(tabsProvider);
    watch(() => length.value, /* @__PURE__ */ _asyncToGenerator$1(function* () {
      yield doubleRaf();
      resize();
    }));
    watch(() => props2.active, resize);
    onMounted(() => window.addEventListener("resize", resize));
    onUnmounted(() => window.removeEventListener("resize", resize));
    return {
      indicatorWidth,
      indicatorHeight,
      indicatorX,
      indicatorY,
      scrollable,
      scrollerEl,
      Transition,
      toSizeUnit,
      resize
    };
  }
});
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
};
var props$2 = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: false
  },
  "onUpdate:active": {
    type: Function
  }
};
function render$3(_ctx, _cache) {
  var _component_var_swipe = resolveComponent("var-swipe");
  return openBlock(), createBlock(_component_var_swipe, {
    class: "var-tabs-items",
    ref: "swipe",
    loop: _ctx.loop,
    touchable: _ctx.canSwipe,
    indicator: false,
    onChange: _ctx.handleSwipeChange
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["loop", "touchable", "onChange"]);
}
var TabsItems = defineComponent({
  render: render$3,
  name: "VarTabsItems",
  components: {
    VarSwipe: Swipe
  },
  props: props$2,
  setup(props2) {
    var swipe2 = ref(null);
    var {
      tabItemList,
      bindTabItem,
      length
    } = useTabItem();
    var matchName = (active) => {
      return tabItemList.find((_ref) => {
        var {
          name
        } = _ref;
        return active === name.value;
      });
    };
    var matchIndex = (active) => {
      return tabItemList.find((_ref2) => {
        var {
          index
        } = _ref2;
        return active === index.value;
      });
    };
    var matchActive = (active) => {
      return matchName(active) || matchIndex(active);
    };
    var handleActiveChange = (newValue) => {
      var _swipe$value;
      var newActiveTabItemProvider = matchActive(newValue);
      if (!newActiveTabItemProvider) {
        return;
      }
      tabItemList.forEach((_ref3) => {
        var {
          setCurrent
        } = _ref3;
        return setCurrent(false);
      });
      newActiveTabItemProvider.setCurrent(true);
      (_swipe$value = swipe2.value) == null ? void 0 : _swipe$value.to(newActiveTabItemProvider.index.value);
    };
    var handleSwipeChange = (currentIndex) => {
      var _tabItem$name$value, _props$onUpdateActiv;
      var tabItem2 = tabItemList.find((_ref4) => {
        var {
          index
        } = _ref4;
        return index.value === currentIndex;
      });
      var active = (_tabItem$name$value = tabItem2.name.value) != null ? _tabItem$name$value : tabItem2.index.value;
      (_props$onUpdateActiv = props2["onUpdate:active"]) == null ? void 0 : _props$onUpdateActiv.call(props2, active);
    };
    var tabsItemsProvider = {};
    bindTabItem(tabsItemsProvider);
    watch(() => props2.active, handleActiveChange);
    watch(() => length.value, () => handleActiveChange(props2.active));
    return {
      swipe: swipe2,
      handleSwipeChange
    };
  }
});
TabsItems.install = function(app) {
  app.component(TabsItems.name, TabsItems);
};
var hoursAmpm = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var hours24 = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
var minSec = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function formatValidator(type) {
  return ["ampm", "24hr"].includes(type);
}
var props$1 = {
  modelValue: {
    type: String
  },
  shadow: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: formatValidator
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  "onUpdate:modelValue": {
    type: Function
  },
  onChange: {
    type: Function
  }
};
var notConvert = (format, ampm) => format === "24hr" || ampm === "am";
var convertHour = (format, ampm, hour) => {
  var index = hoursAmpm.findIndex((hourAmpm) => toNumber(hourAmpm) === toNumber(hour));
  var getHour = notConvert(format, ampm) ? hour : hours24[index];
  return {
    hourStr: getHour,
    hourNum: toNumber(getHour)
  };
};
var getNumberTime = (time) => {
  var [hour, minute, second] = time.split(":");
  return {
    hour: toNumber(hour),
    minute: toNumber(minute),
    second: toNumber(second)
  };
};
var getIsDisableMinute = (values) => {
  var _values$allowedTime, _values$allowedTime2;
  var {
    time,
    format,
    ampm,
    hour,
    max: max2,
    min: min2,
    disableHour
  } = values;
  var {
    hourStr,
    hourNum
  } = convertHour(format, ampm, hour);
  var isBetweenMinMax = false;
  var isAllow = false;
  if (disableHour.includes(hourStr))
    return true;
  if (max2 && !min2) {
    var {
      hour: maxHour,
      minute: maxMinute
    } = getNumberTime(max2);
    isBetweenMinMax = maxHour === hourNum && time > maxMinute;
  }
  if (!max2 && min2) {
    var {
      hour: minHour,
      minute: minMinute
    } = getNumberTime(min2);
    isBetweenMinMax = minHour === hourNum && time < minMinute;
  }
  if (max2 && min2) {
    var {
      hour: _maxHour,
      minute: _maxMinute
    } = getNumberTime(max2);
    var {
      hour: _minHour,
      minute: _minMinute
    } = getNumberTime(min2);
    isBetweenMinMax = _minHour === hourNum && time < _minMinute || _maxHour === hourNum && time > _maxMinute;
  }
  if ((_values$allowedTime = values.allowedTime) != null && _values$allowedTime.minutes)
    isAllow = (_values$allowedTime2 = values.allowedTime) == null ? void 0 : _values$allowedTime2.minutes(time);
  return isBetweenMinMax || isAllow;
};
var getIsDisableSecond = (values) => {
  var _values$allowedTime3, _values$allowedTime4;
  var {
    time,
    format,
    ampm,
    hour,
    minute,
    max: max2,
    min: min2,
    disableHour
  } = values;
  var {
    hourStr,
    hourNum
  } = convertHour(format, ampm, hour);
  var isBetweenMinMax = false;
  var isAllow = false;
  if (disableHour.includes(hourStr))
    return true;
  if (max2 && !min2) {
    var {
      hour: maxHour,
      minute: maxMinute,
      second: maxSecond
    } = getNumberTime(max2);
    isBetweenMinMax = maxHour === hourNum && maxMinute < minute || maxMinute === minute && time > maxSecond;
  }
  if (!max2 && min2) {
    var {
      hour: minHour,
      minute: minMinute,
      second: minSecond
    } = getNumberTime(min2);
    isBetweenMinMax = minHour === hourNum && minMinute > minute || minMinute === minute && time > minSecond;
  }
  if (max2 && min2) {
    var {
      hour: _maxHour2,
      minute: _maxMinute2,
      second: _maxSecond
    } = getNumberTime(max2);
    var {
      hour: _minHour2,
      minute: _minMinute2,
      second: _minSecond
    } = getNumberTime(min2);
    isBetweenMinMax = _maxHour2 === hourNum && _maxMinute2 < minute || _minHour2 === hourNum && _minMinute2 > minute || _maxHour2 === hourNum && _maxMinute2 === minute && time > _maxSecond || _minHour2 === hourNum && _minMinute2 === minute && time < _minSecond;
  }
  if ((_values$allowedTime3 = values.allowedTime) != null && _values$allowedTime3.seconds)
    isAllow = (_values$allowedTime4 = values.allowedTime) == null ? void 0 : _values$allowedTime4.seconds(time);
  return isBetweenMinMax || isAllow;
};
var _hoisted_1$2 = {
  class: "var-time-picker-clock"
};
var _hoisted_2$2 = {
  key: 0,
  class: "var-time-picker-clock__inner",
  ref: "inner"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", {
    class: "var-time-picker-clock__hand",
    style: normalizeStyle(_ctx.handStyle)
  }, null, 4), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.timeScales, (timeScale, index) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["var-time-picker-clock__item", [_ctx.isActive(index, false) ? "var-time-picker-clock__item--active" : null, _ctx.isDisable(timeScale) ? "var-time-picker-clock__item--disable" : null]]),
      key: timeScale,
      style: normalizeStyle(_ctx.getStyle(index, timeScale, false))
    }, toDisplayString(timeScale), 7);
  }), 128)), _ctx.format === "24hr" && _ctx.type === "hour" ? (openBlock(), createElementBlock("div", _hoisted_2$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.hours24, (hour, index) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["var-time-picker-clock__item", [_ctx.isActive(index, true) ? "var-time-picker-clock__item--active" : null, _ctx.isDisable(hour) ? "var-time-picker-clock__item--disable" : null]]),
      key: hour,
      style: normalizeStyle(_ctx.getStyle(index, hour, true))
    }, toDisplayString(hour), 7);
  }), 128))], 512)) : createCommentVNode("v-if", true)]);
}
var Clock = defineComponent({
  render: render$2,
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: true
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: true
    },
    useSeconds: {
      type: Boolean,
      default: false
    },
    preventNextUpdate: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(props2, _ref) {
    var {
      emit
    } = _ref;
    var inner = ref(null);
    var disableHour = ref([]);
    var disable24HourIndex = ref([]);
    var handStyle = computed(() => ({
      transform: "rotate(" + toNumber(props2.rad) + "deg)",
      height: props2.isInner && props2.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: getHandleColor(),
      borderColor: getHandleColor()
    }));
    var activeItemIndex = computed(() => {
      if (props2.rad === void 0)
        return;
      var value = props2.rad / 30;
      return value >= 0 ? value : value + 12;
    });
    var timeScales = computed(() => {
      if (props2.type === "hour")
        return hoursAmpm;
      return minSec;
    });
    var isDisableMinSec = (time, isDisable2) => {
      var _time;
      time = (_time = time) != null ? _time : props2.type === "minute" ? props2.time.minute : props2.time.second;
      var disableMethod = props2.type === "minute" ? getIsDisableMinute : getIsDisableSecond;
      var values = {
        time: toNumber(time),
        format: props2.format,
        ampm: props2.ampm,
        hour: props2.time.hour,
        minute: toNumber(props2.time.minute),
        max: props2.max,
        min: props2.min,
        allowedTime: props2.allowedTime,
        disableHour: disableHour.value
      };
      if (isDisable2 && props2.type === "minute")
        Reflect.deleteProperty(values, "minute");
      return disableMethod(values);
    };
    var getHandleColor = () => {
      if (activeItemIndex.value === void 0)
        return props2.color;
      var hour = props2.isInner ? hours24[activeItemIndex.value] : timeScales.value[activeItemIndex.value];
      if (timeScales.value === minSec) {
        return isDisableMinSec() ? "#bdbdbd" : props2.color;
      }
      return isDisable(hour) ? "#bdbdbd" : props2.color;
    };
    var isActive = (index, inner2) => {
      if (inner2)
        return activeItemIndex.value === index && props2.isInner;
      return activeItemIndex.value === index && (!props2.isInner || props2.type !== "hour");
    };
    var isDisable = (time) => {
      if (props2.type === "hour") {
        if (notConvert(props2.format, props2.ampm))
          return disableHour.value.includes(time);
        var timeIndex = hoursAmpm.findIndex((hour) => hour === time);
        return disable24HourIndex.value.includes(timeIndex);
      }
      return isDisableMinSec(time, true);
    };
    var getStyle = (index, hour, inner2) => {
      var rad = 2 * Math.PI / 12 * index - Math.PI / 2;
      var left = 50 * (1 + Math.cos(rad));
      var top = 50 * (1 + Math.sin(rad));
      var computedColor = () => {
        if (!isActive(index, inner2)) {
          return {
            backgroundColor: void 0,
            color: void 0
          };
        }
        if (isDisable(hour)) {
          return {
            backgroundColor: "#bdbdbd",
            color: "#fff"
          };
        }
        return {
          backgroundColor: props2.color,
          color: void 0
        };
      };
      var {
        backgroundColor,
        color
      } = computedColor();
      return {
        left: left + "%",
        top: top + "%",
        backgroundColor,
        color
      };
    };
    var getSize = () => {
      var {
        width,
        height
      } = inner.value.getBoundingClientRect();
      return {
        width,
        height
      };
    };
    var getHour = () => {
      if (activeItemIndex.value === void 0)
        return void 0;
      var hours = props2.ampm === "am" ? hoursAmpm : hours24;
      return hours[activeItemIndex.value].padStart(2, "0");
    };
    watch([activeItemIndex, () => props2.isInner], (_ref2, _ref3) => {
      var [index, inner2] = _ref2;
      var [oldIndex, oldInner] = _ref3;
      var isSame = index === oldIndex && inner2 === oldInner;
      if (isSame || props2.type !== "hour" || activeItemIndex.value === void 0)
        return;
      var newHour = inner2 ? hours24[activeItemIndex.value] : getHour();
      var second = props2.useSeconds ? ":" + props2.time.second : "";
      var newTime = newHour + ":" + props2.time.minute + second;
      if (!props2.preventNextUpdate)
        emit("update", newTime);
      emit("change-prevent-update");
    });
    watch(() => props2.rad, (rad, oldRad) => {
      if (props2.type === "hour" || rad === void 0 || oldRad === void 0)
        return;
      var radToMinSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var oldRadToMinSec = oldRad / 6 >= 0 ? oldRad / 6 : oldRad / 6 + 60;
      if (radToMinSec === oldRadToMinSec)
        return;
      var newTime;
      var {
        hourStr
      } = convertHour(props2.format, props2.ampm, props2.time.hour);
      if (props2.type === "minute") {
        var newMinute = dayjs().minute(radToMinSec).format("mm");
        var second = props2.useSeconds ? ":" + props2.time.second : "";
        newTime = hourStr + ":" + newMinute + second;
      }
      if (props2.type === "second") {
        var newSecond = dayjs().second(radToMinSec).format("ss");
        var _second = props2.useSeconds ? ":" + newSecond : "";
        newTime = hourStr + ":" + props2.time.minute + _second;
      }
      emit("update", newTime);
    });
    watch([() => props2.max, () => props2.min, () => props2.allowedTime], (_ref4) => {
      var [max2, min2, allowedTime] = _ref4;
      disableHour.value = [];
      if (max2 && !min2) {
        var {
          hour: maxHour
        } = getNumberTime(max2);
        var disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) > maxHour);
        var disable24Hours = hours24.filter((hour) => toNumber(hour) > maxHour);
        disableHour.value = [...disableAmpmHours, ...disable24Hours];
      }
      if (!max2 && min2) {
        var {
          hour: minHour
        } = getNumberTime(min2);
        var _disableAmpmHours = hoursAmpm.filter((hour) => toNumber(hour) < minHour);
        var _disable24Hours = hours24.filter((hour) => toNumber(hour) < minHour);
        disableHour.value = [..._disableAmpmHours, ..._disable24Hours];
      }
      if (max2 && min2) {
        var {
          hour: _maxHour
        } = getNumberTime(max2);
        var {
          hour: _minHour
        } = getNumberTime(min2);
        var _disableAmpmHours2 = hoursAmpm.filter((hour) => toNumber(hour) < _minHour || toNumber(hour) > _maxHour);
        var _disable24Hours2 = hours24.filter((hour) => toNumber(hour) < _minHour || toNumber(hour) > _maxHour);
        disableHour.value = [..._disableAmpmHours2, ..._disable24Hours2];
      }
      if (allowedTime != null && allowedTime.hours) {
        var {
          hours
        } = allowedTime;
        var _disableAmpmHours3 = hoursAmpm.filter((hour) => !hours(toNumber(hour)));
        var _disable24Hours3 = hours24.filter((hour) => !hours(toNumber(hour)));
        disableHour.value = [.../* @__PURE__ */ new Set([...disableHour.value, ..._disableAmpmHours3, ..._disable24Hours3])];
      }
      disable24HourIndex.value = disableHour.value.map((hour) => hours24.findIndex((hour24) => hour === hour24)).filter((hour) => hour >= 0);
    }, {
      immediate: true
    });
    return {
      hours24,
      timeScales,
      inner,
      handStyle,
      disableHour,
      isActive,
      isDisable,
      getSize,
      getStyle,
      activeItemIndex
    };
  }
});
var _withScopeId = (n) => (pushScopeId(""), n = n(), popScopeId(), n);
var _hoisted_1$1 = {
  class: "var-time-picker-title__time"
};
var _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, ":", -1));
var _hoisted_3$1 = {
  key: 0
};
var _hoisted_4$1 = {
  key: 0,
  class: "var-time-picker-title__ampm"
};
var _hoisted_5$1 = {
  class: "var-time-picker-body"
};
function render$1(_ctx, _cache) {
  var _component_clock = resolveComponent("clock");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["var-time-picker", [_ctx.shadow ? "var-elevation--2" : null]]),
    ref: "picker"
  }, [createElementVNode("div", {
    class: "var-time-picker-title",
    style: normalizeStyle({
      background: _ctx.headerColor || _ctx.color
    })
  }, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", {
    class: normalizeClass(["var-time-picker-title__btn", _ctx.type === "hour" ? "var-time-picker-title__btn--active" : null]),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.checkPanel("hour"))
  }, toDisplayString(_ctx.time.hour), 3), _hoisted_2$1, createElementVNode("div", {
    class: normalizeClass(["var-time-picker-title__btn", _ctx.type === "minute" ? "var-time-picker-title__btn--active" : null]),
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.checkPanel("minute"))
  }, toDisplayString(_ctx.time.minute), 3), _ctx.useSeconds ? (openBlock(), createElementBlock("span", _hoisted_3$1, ":")) : createCommentVNode("v-if", true), _ctx.useSeconds ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["var-time-picker-title__btn", _ctx.type === "second" ? "var-time-picker-title__btn--active" : null]),
    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.checkPanel("second"))
  }, toDisplayString(_ctx.time.second), 3)) : createCommentVNode("v-if", true)]), _ctx.format === "ampm" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createElementVNode("div", {
    class: normalizeClass(["var-time-picker-title__btn", _ctx.ampm === "am" ? "var-time-picker-title__btn--active" : null]),
    onClick: _cache[3] || (_cache[3] = ($event) => _ctx.checkAmpm("am"))
  }, " AM ", 2), createElementVNode("div", {
    class: normalizeClass(["var-time-picker-title__btn", _ctx.ampm === "pm" ? "var-time-picker-title__btn--active" : null]),
    onClick: _cache[4] || (_cache[4] = ($event) => _ctx.checkAmpm("pm"))
  }, " PM ", 2)])) : createCommentVNode("v-if", true)], 4), createElementVNode("div", _hoisted_5$1, [createElementVNode("div", {
    class: "var-time-picker-clock__container",
    onTouchstart: _cache[5] || (_cache[5] = function() {
      return _ctx.moveHand && _ctx.moveHand(...arguments);
    }),
    onTouchmove: _cache[6] || (_cache[6] = function() {
      return _ctx.moveHand && _ctx.moveHand(...arguments);
    }),
    onTouchend: _cache[7] || (_cache[7] = function() {
      return _ctx.end && _ctx.end(...arguments);
    }),
    ref: "container"
  }, [createVNode(Transition, {
    name: "var-time-picker-panel-fade"
  }, {
    default: withCtx(() => [(openBlock(), createBlock(_component_clock, {
      key: _ctx.type,
      ref: "inner",
      type: _ctx.type,
      ampm: _ctx.ampm,
      color: _ctx.color,
      "is-inner": _ctx.isInner,
      format: _ctx.format,
      "allowed-time": _ctx.allowedTime,
      rad: _ctx.getRad,
      time: _ctx.time,
      "prevent-next-update": _ctx.isPreventNextUpdate,
      "use-seconds": _ctx.useSeconds,
      max: _ctx.max,
      min: _ctx.min,
      onUpdate: _ctx.update,
      onChangePreventUpdate: _ctx.changePreventUpdate
    }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))]),
    _: 1
  })], 544)])], 2);
}
var TimePicker = defineComponent({
  render: render$1,
  name: "VarTimePicker",
  components: {
    Clock
  },
  props: props$1,
  setup(props2) {
    var container = ref(null);
    var picker2 = ref(null);
    var inner = ref(null);
    var isInner = ref(false);
    var isPreventNextUpdate = ref(false);
    var isActualInner = ref(false);
    var isChosenUsableHour = ref(false);
    var isChosenUsableMinute = ref(false);
    var hourRad = ref(void 0);
    var minuteRad = ref(0);
    var secondRad = ref(0);
    var type = ref("hour");
    var ampm = ref("am");
    var isDisableHour = ref(false);
    var isDisableMinute = ref(false);
    var time = ref({
      hour: "00",
      minute: "00",
      second: "00"
    });
    var center = reactive({
      x: 0,
      y: 0
    });
    var innerRange = reactive({
      x: [],
      y: []
    });
    var getRad = computed(() => {
      if (type.value === "hour")
        return hourRad.value;
      if (type.value === "minute")
        return minuteRad.value;
      return secondRad.value;
    });
    var update = (newTime) => {
      var _props$onUpdateModel;
      (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, newTime);
      props2.onChange == null ? void 0 : props2.onChange(newTime);
    };
    var rad2deg = (rad) => {
      return rad * 57.29577951308232;
    };
    var checkPanel = (panelType) => {
      isChosenUsableHour.value = false;
      isDisableMinute.value = false;
      type.value = panelType;
    };
    var findAvailableHour = (ampm2) => {
      var {
        disableHour
      } = inner.value;
      var index = hoursAmpm.findIndex((hour) => toNumber(hour) === toNumber(time.value.hour));
      var hours = ampm2 === "am" ? hoursAmpm : hours24;
      var realignmentHours = [...hours.slice(index), ...hours.slice(0, index)];
      return realignmentHours.find((hour, index2) => {
        isPreventNextUpdate.value = index2 !== 0;
        return !disableHour.includes(hour);
      });
    };
    var checkAmpm = (ampmType) => {
      if (props2.readonly)
        return;
      ampm.value = ampmType;
      var newHour = findAvailableHour(ampmType);
      if (!newHour)
        return;
      var second = props2.useSeconds ? ":" + time.value.second : "";
      var newTime = newHour.padStart(2, "0") + ":" + time.value.minute + second;
      update(newTime);
    };
    var getInner = (clientX, clientY) => {
      var xIsInRange = clientX >= innerRange.x[0] && clientX <= innerRange.x[1];
      var yIsInRange = clientY >= innerRange.y[0] && clientY <= innerRange.y[1];
      return xIsInRange && yIsInRange;
    };
    var getTime = (value) => {
      var hourFormat = props2.format === "24hr" ? "HH" : "hh";
      var {
        hour,
        minute,
        second
      } = getNumberTime(value);
      return {
        hour: dayjs().hour(hour).format(hourFormat),
        minute: dayjs().minute(minute).format("mm"),
        second: dayjs().second(second).format("ss")
      };
    };
    var getHourIndex = (rad) => {
      var value = rad / 30;
      return value >= 0 ? value : value + 12;
    };
    var getRangeSize = () => {
      var {
        width: innerWidth,
        height: innerHeight
      } = inner.value.getSize();
      var rangeXMin = center.x - innerWidth / 2 - 8;
      var rangeXMax = center.x + innerWidth / 2 + 8;
      var rangeYMin = center.y - innerHeight / 2 - 8;
      var rangeYMax = center.y + innerHeight / 2 + 8;
      return {
        rangeXMin,
        rangeXMax,
        rangeYMin,
        rangeYMax
      };
    };
    var setHourRad = (clientX, clientY, roundDeg) => {
      var {
        disableHour
      } = inner.value;
      isActualInner.value = getInner(clientX, clientY);
      var rad = Math.round(roundDeg / 30) * 30 + 90;
      var index = getHourIndex(rad);
      var anotherHour = isInner.value ? hoursAmpm[index] : hours24[index];
      if (!disableHour.includes(anotherHour)) {
        isInner.value = props2.format === "24hr" ? getInner(clientX, clientY) : false;
      }
      if (isInner.value !== isActualInner.value)
        return;
      var newHour = isInner.value || ampm.value === "pm" ? hours24[index] : hoursAmpm[index];
      isDisableHour.value = disableHour.includes(newHour);
      if (isDisableHour.value)
        return;
      hourRad.value = rad;
      isChosenUsableHour.value = true;
    };
    var setMinuteRad = (roundDeg) => {
      var {
        disableHour
      } = inner.value;
      var rad = Math.round(roundDeg / 6) * 6 + 90;
      var radToMin = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var values = {
        time: radToMin,
        format: props2.format,
        ampm: ampm.value,
        hour: time.value.hour,
        max: props2.max,
        min: props2.min,
        disableHour,
        allowedTime: props2.allowedTime
      };
      isDisableMinute.value = getIsDisableMinute(values);
      if (isDisableMinute.value)
        return;
      minuteRad.value = rad;
      isChosenUsableMinute.value = true;
    };
    var setSecondRad = (roundDeg) => {
      var {
        disableHour
      } = inner.value;
      var rad = Math.round(roundDeg / 6) * 6 + 90;
      var radToSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var values = {
        time: radToSec,
        format: props2.format,
        ampm: ampm.value,
        hour: time.value.hour,
        minute: toNumber(time.value.minute),
        max: props2.max,
        min: props2.min,
        disableHour,
        allowedTime: props2.allowedTime
      };
      if (!getIsDisableSecond(values))
        secondRad.value = rad;
    };
    var setCenterAndRange = () => {
      var {
        left,
        top,
        width,
        height
      } = container.value.getBoundingClientRect();
      center.x = left + width / 2;
      center.y = top + height / 2;
      if (type.value === "hour" && props2.format === "24hr") {
        var {
          rangeXMin,
          rangeXMax,
          rangeYMin,
          rangeYMax
        } = getRangeSize();
        innerRange.x = [rangeXMin, rangeXMax];
        innerRange.y = [rangeYMin, rangeYMax];
      }
    };
    var moveHand = (event) => {
      event.preventDefault();
      if (props2.readonly)
        return;
      setCenterAndRange();
      var {
        clientX,
        clientY
      } = event.touches[0];
      var x = clientX - center.x;
      var y = clientY - center.y;
      var roundDeg = Math.round(rad2deg(Math.atan2(y, x)));
      if (type.value === "hour")
        setHourRad(clientX, clientY, roundDeg);
      else if (type.value === "minute")
        setMinuteRad(roundDeg);
      else
        setSecondRad(roundDeg);
    };
    var end = () => {
      if (props2.readonly)
        return;
      if (type.value === "hour" && isChosenUsableHour.value) {
        type.value = "minute";
        return;
      }
      if (type.value === "minute" && props2.useSeconds && isChosenUsableMinute.value) {
        type.value = "second";
      }
    };
    var changePreventUpdate = () => {
      isPreventNextUpdate.value = false;
    };
    watch(() => props2.modelValue, (value) => {
      if (value) {
        var {
          hour,
          minute,
          second
        } = getNumberTime(value);
        var formatHour12 = dayjs().hour(hour).format("hh");
        var formatHour24 = dayjs().hour(hour).format("HH");
        var formatMinute = dayjs().minute(minute).format("mm");
        var formatSecond = dayjs().second(second).format("ss");
        hourRad.value = (formatHour12 === "12" ? 0 : toNumber(formatHour12)) * 30;
        minuteRad.value = toNumber(formatMinute) * 6;
        secondRad.value = toNumber(formatSecond) * 6;
        time.value = getTime(value);
        if (props2.format !== "24hr") {
          ampm.value = ("" + hour).padStart(2, "0") === formatHour24 && hours24.includes(formatHour24) ? "pm" : "am";
        }
        isInner.value = props2.format === "24hr" && hours24.includes(formatHour24);
      }
    }, {
      immediate: true
    });
    return {
      getRad,
      time,
      container,
      inner,
      picker: picker2,
      isInner,
      type,
      ampm,
      isPreventNextUpdate,
      moveHand,
      checkPanel,
      checkAmpm,
      end,
      update,
      changePreventUpdate
    };
  }
});
TimePicker.install = function(app) {
  app.component(TimePicker.name, TimePicker);
};
var props = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  removable: {
    type: Boolean,
    default: true
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: true
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: false
  },
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var fid = 0;
var _hoisted_1 = {
  class: "var-uploader var--box"
};
var _hoisted_2 = {
  class: "var-uploader__file-list"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  class: "var-uploader__file-name"
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = ["src", "alt"];
var _hoisted_7 = ["multiple", "accept", "capture", "disabled"];
var _hoisted_8 = ["src"];
function render(_ctx, _cache) {
  var _component_var_icon = resolveComponent("var-icon");
  var _component_var_form_details = resolveComponent("var-form-details");
  var _component_var_popup = resolveComponent("var-popup");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, (f) => {
    return withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(["var-uploader__file var-elevation--2", [f.state === "loading" ? "var-uploader--loading" : null]]),
      key: f.id,
      onClick: ($event) => _ctx.preview(f)
    }, [createElementVNode("div", _hoisted_4, toDisplayString(f.name || f.url), 1), _ctx.removable ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "var-uploader__file-close",
      onClick: withModifiers(($event) => _ctx.handleRemove(f), ["stop"])
    }, [createVNode(_component_var_icon, {
      class: "var-uploader__file-close-icon",
      "var-uploader-cover": "",
      name: "delete"
    })], 8, _hoisted_5)) : createCommentVNode("v-if", true), f.cover ? (openBlock(), createElementBlock("img", {
      key: 1,
      class: "var-uploader__file-cover",
      style: normalizeStyle({
        objectFit: f.fit
      }),
      src: f.cover,
      alt: f.name
    }, null, 12, _hoisted_6)) : createCommentVNode("v-if", true), createElementVNode("div", {
      class: normalizeClass(["var-uploader__file-indicator", [f.state === "success" ? "var-uploader--success" : null, f.state === "error" ? "var-uploader--error" : null]])
    }, null, 2)], 10, _hoisted_3)), [[_directive_ripple, {
      disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly || !_ctx.ripple
    }]]);
  }), 128)), !_ctx.maxlength || _ctx.modelValue.length < _ctx.maxlength ? withDirectives((openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["var--relative", [!_ctx.$slots.default ? "var-uploader__action var-elevation--2" : null, _ctx.disabled || _ctx.formDisabled ? "var-uploader--disabled" : null]])
  }, [createElementVNode("input", {
    class: "var-uploader__action-input",
    type: "file",
    multiple: _ctx.multiple,
    accept: _ctx.accept,
    capture: _ctx.capture,
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly,
    onChange: _cache[0] || (_cache[0] = function() {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 40, _hoisted_7), renderSlot(_ctx.$slots, "default", {}, () => [createVNode(_component_var_icon, {
    class: "var-uploader__action-icon",
    "var-uploader-cover": "",
    name: "plus"
  })])], 2)), [[_directive_ripple, {
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly || !_ctx.ripple || _ctx.$slots.default
  }]]) : createCommentVNode("v-if", true)]), createVNode(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    "maxlength-text": _ctx.maxlengthText
  }, null, 8, ["error-message", "maxlength-text"]), createVNode(_component_var_popup, {
    class: "var-uploader__preview",
    "var-uploader-cover": "",
    position: "center",
    show: _ctx.showPreview,
    "onUpdate:show": _cache[1] || (_cache[1] = ($event) => _ctx.showPreview = $event),
    onClosed: _cache[2] || (_cache[2] = ($event) => _ctx.currentPreview = null)
  }, {
    default: withCtx(() => {
      var _ctx$currentPreview, _ctx$currentPreview2;
      return [_ctx.currentPreview && _ctx.isHTMLSupportVideo((_ctx$currentPreview = _ctx.currentPreview) == null ? void 0 : _ctx$currentPreview.url) ? (openBlock(), createElementBlock("video", {
        key: 0,
        class: "var-uploader__preview-video",
        playsinline: "true",
        "webkit-playsinline": "true",
        "x5-playsinline": "true",
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": "false",
        controls: "",
        src: (_ctx$currentPreview2 = _ctx.currentPreview) == null ? void 0 : _ctx$currentPreview2.url
      }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true)];
    }),
    _: 1
  }, 8, ["show"])]);
}
var Uploader = defineComponent({
  render,
  name: "VarUploader",
  directives: {
    Ripple
  },
  components: {
    VarIcon: Icon,
    VarPopup: Popup,
    VarFormDetails: FormDetails
  },
  props,
  setup(props2) {
    var showPreview = ref(false);
    var currentPreview = ref(null);
    var maxlengthText = computed(() => {
      var {
        maxlength,
        modelValue: {
          length
        }
      } = props2;
      return isNumber(maxlength) ? length + " / " + maxlength : "";
    });
    var {
      form,
      bindForm
    } = useForm();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = useValidation();
    var files = computed(() => {
      var {
        modelValue,
        hideList
      } = props2;
      if (hideList) {
        return [];
      }
      return modelValue;
    });
    var preview = (varFile) => {
      var {
        disabled,
        readonly,
        previewed
      } = props2;
      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !previewed) {
        return;
      }
      var {
        url
      } = varFile;
      if (isString(url) && isHTMLSupportImage(url)) {
        ImagePreview(url);
        return;
      }
      if (isString(url) && isHTMLSupportVideo(url)) {
        currentPreview.value = varFile;
        showPreview.value = true;
      }
    };
    var createVarFile = (file) => {
      return {
        id: fid++,
        url: "",
        cover: "",
        name: file.name,
        file
      };
    };
    var getFiles = (event) => {
      var el = event.target;
      var {
        files: fileList
      } = el;
      return Array.from(fileList);
    };
    var resolver = (varFile) => {
      return new Promise((resolve) => {
        var fileReader = new FileReader();
        fileReader.onload = () => {
          var base64 = fileReader.result;
          varFile.file.type.startsWith("image") && (varFile.cover = base64);
          varFile.url = base64;
          resolve(varFile);
        };
        fileReader.readAsDataURL(varFile.file);
      });
    };
    var getResolvers = (varFiles) => varFiles.map(resolver);
    var getBeforeReaders = (varFiles) => {
      var {
        onBeforeRead
      } = props2;
      return varFiles.map((varFile) => {
        return new Promise((resolve) => {
          var valid = onBeforeRead ? onBeforeRead(reactive(varFile)) : true;
          Promise.resolve(valid).then((valid2) => resolve({
            valid: valid2,
            varFile
          }));
        });
      });
    };
    var handleChange = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator(function* (event) {
        var _props$onUpdateModel;
        var {
          maxsize,
          maxlength,
          modelValue,
          onOversize,
          onAfterRead,
          readonly,
          disabled
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        var getValidSizeVarFile = (varFiles2) => {
          return varFiles2.filter((varFile) => {
            if (varFile.file.size > toNumber(maxsize)) {
              onOversize == null ? void 0 : onOversize(reactive(varFile));
              return false;
            }
            return true;
          });
        };
        var getValidLengthVarFiles = (varFiles2) => {
          var limit = Math.min(varFiles2.length, toNumber(maxlength) - modelValue.length);
          return varFiles2.slice(0, limit);
        };
        var files2 = getFiles(event);
        var varFiles = files2.map(createVarFile);
        varFiles = maxsize != null ? getValidSizeVarFile(varFiles) : varFiles;
        varFiles = maxlength != null ? getValidLengthVarFiles(varFiles) : varFiles;
        var resolvedVarFiles = yield Promise.all(getResolvers(varFiles));
        var validationVarFiles = yield Promise.all(getBeforeReaders(resolvedVarFiles));
        var validVarFiles = validationVarFiles.filter((_ref2) => {
          var {
            valid
          } = _ref2;
          return valid;
        }).map((_ref3) => {
          var {
            varFile
          } = _ref3;
          return varFile;
        });
        (_props$onUpdateModel = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel.call(props2, [...modelValue, ...validVarFiles]);
        event.target.value = "";
        validVarFiles.forEach((varFile) => onAfterRead == null ? void 0 : onAfterRead(reactive(varFile)));
      });
      return function handleChange2(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var handleRemove = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(function* (removedVarFile) {
        var _props$onUpdateModel2;
        var {
          disabled,
          readonly,
          modelValue,
          onBeforeRemove,
          onRemove
        } = props2;
        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }
        if (onBeforeRemove && !(yield onBeforeRemove(removedVarFile))) {
          return;
        }
        var expectedFiles = modelValue.filter((varFile) => varFile !== removedVarFile);
        onRemove == null ? void 0 : onRemove(removedVarFile);
        validateWithTrigger("onRemove");
        (_props$onUpdateModel2 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel2.call(props2, expectedFiles);
      });
      return function handleRemove2(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();
    var getSuccess = () => props2.modelValue.filter((varFile) => varFile.state === "success");
    var getError = () => props2.modelValue.filter((varFile) => varFile.state === "error");
    var getLoading = () => props2.modelValue.filter((varFile) => varFile.state === "loading");
    var varFileUtils = {
      getSuccess,
      getError,
      getLoading
    };
    var validateWithTrigger = (trigger) => {
      nextTick(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props2;
        vt(validateTrigger, trigger, rules, modelValue, varFileUtils);
      });
    };
    var callReset = false;
    var validate = () => v(props2.rules, props2.modelValue, varFileUtils);
    var reset = () => {
      var _props$onUpdateModel3;
      callReset = true;
      (_props$onUpdateModel3 = props2["onUpdate:modelValue"]) == null ? void 0 : _props$onUpdateModel3.call(props2, []);
      resetValidation();
    };
    var uploaderProvider = {
      validate,
      resetValidation,
      reset
    };
    bindForm == null ? void 0 : bindForm(uploaderProvider);
    watch(() => props2.modelValue, () => {
      !callReset && validateWithTrigger("onChange");
      callReset = false;
    }, {
      deep: true
    });
    return {
      files,
      showPreview,
      currentPreview,
      errorMessage,
      maxlengthText,
      isHTMLSupportVideo,
      isHTMLSupportImage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      preview,
      handleChange,
      handleRemove,
      getSuccess,
      getError,
      getLoading,
      validate,
      resetValidation,
      reset
    };
  }
});
Uploader.install = function(app) {
  app.component(Uploader.name, Uploader);
};
var common = "";
var icon = "";
var ripple = "";
var popup = "";
var actionSheet = "";
var ActionSheetSfc = "";
var elevation = "";
var appBar = "";
var AppBarSfc = "";
var button = "";
var backTop = "";
var BackTopSfc = "";
var badge = "";
var BadgeSfc = "";
var loading = "";
var ButtonSfc = "";
var card = "";
var CardSfc = "";
var cell = "";
var CellSfc = "";
var formDetails = "";
var checkbox = "";
var CheckboxSfc = "";
var checkboxGroup = "";
var CheckboxGroupSfc = "";
var chip = "";
var ChipSfc = "";
var col = "";
var ColSfc = "";
var CollapseSfc = "";
var collapseItem = "";
var CollapseItemSfc = "";
var CountdownSfc = "";
var counter = "";
var CounterSfc = "";
var datePicker = "";
var DatePickerSfc = "";
var dialog = "";
var DialogSfc = "";
var divider = "";
var DividerSfc = "";
var FormSfc = "";
var FormDetailsSfc = "";
var IconSfc = "";
var image = "";
var ImageSfc = "";
var swipe = "";
var swipeItem = "";
var imagePreview = "";
var ImagePreviewSfc = "";
var sticky = "";
var IndexAnchorSfc = "";
var indexBar = "";
var IndexBarSfc = "";
var input = "";
var InputSfc = "";
var list = "";
var ListSfc = "";
var LoadingSfc = "";
var menu = "";
var select = "";
var option = "";
var OptionSfc = "";
var pagination = "";
var PaginationSfc = "";
var picker = "";
var PickerSfc = "";
var progress = "";
var ProgressSfc = "";
var pullRefresh = "";
var PullRefreshSfc = "";
var radio = "";
var RadioSfc = "";
var radioGroup = "";
var RadioGroupSfc = "";
var rate = "";
var RateSfc = "";
var row = "";
var RowSfc = "";
var SelectSfc = "";
var skeleton = "";
var SkeletonSfc = "";
var slider = "";
var SliderSfc = "";
var SnackbarSfc = "";
var snackbar = "";
var coreSfc = "";
var space = "";
var step = "";
var StepSfc = "";
var StepsSfc = "";
var StickySfc = "";
var StyleProviderSfc = "";
var SwipeSfc = "";
var SwipeItemSfc = "";
var _switch = "";
var SwitchSfc = "";
var tab = "";
var TabSfc = "";
var tabItem = "";
var TabItemSfc = "";
var table = "";
var TableSfc = "";
var tabs = "";
var TabsSfc = "";
var TabsItemsSfc = "";
var timePicker = "";
var TimePickerSfc = "";
var uploader = "";
var UploaderSfc = "";
function install(app) {
  ActionSheet.install && app.use(ActionSheet);
  AppBar.install && app.use(AppBar);
  BackTop.install && app.use(BackTop);
  Badge.install && app.use(Badge);
  Button.install && app.use(Button);
  Card.install && app.use(Card);
  Cell.install && app.use(Cell);
  Checkbox.install && app.use(Checkbox);
  CheckboxGroup.install && app.use(CheckboxGroup);
  Chip.install && app.use(Chip);
  Col.install && app.use(Col);
  Collapse.install && app.use(Collapse);
  CollapseItem.install && app.use(CollapseItem);
  Context.install && app.use(Context);
  Countdown.install && app.use(Countdown);
  Counter.install && app.use(Counter);
  DatePicker.install && app.use(DatePicker);
  Dialog.install && app.use(Dialog);
  Divider.install && app.use(Divider);
  Form.install && app.use(Form);
  FormDetails.install && app.use(FormDetails);
  Icon.install && app.use(Icon);
  Image$1.install && app.use(Image$1);
  ImagePreview.install && app.use(ImagePreview);
  IndexAnchor.install && app.use(IndexAnchor);
  IndexBar.install && app.use(IndexBar);
  Input.install && app.use(Input);
  Lazy.install && app.use(Lazy);
  List.install && app.use(List);
  Loading.install && app.use(Loading);
  Locale.install && app.use(Locale);
  Menu.install && app.use(Menu);
  Option.install && app.use(Option);
  Pagination.install && app.use(Pagination);
  Picker.install && app.use(Picker);
  Popup.install && app.use(Popup);
  Progress.install && app.use(Progress);
  PullRefresh.install && app.use(PullRefresh);
  Radio.install && app.use(Radio);
  RadioGroup.install && app.use(RadioGroup);
  Rate.install && app.use(Rate);
  Ripple.install && app.use(Ripple);
  Row.install && app.use(Row);
  Select.install && app.use(Select);
  Skeleton.install && app.use(Skeleton);
  Slider.install && app.use(Slider);
  Snackbar.install && app.use(Snackbar);
  Space.install && app.use(Space);
  Step.install && app.use(Step);
  Steps.install && app.use(Steps);
  Sticky.install && app.use(Sticky);
  StyleProvider.install && app.use(StyleProvider);
  Swipe.install && app.use(Swipe);
  SwipeItem.install && app.use(SwipeItem);
  Switch.install && app.use(Switch);
  Tab.install && app.use(Tab);
  TabItem.install && app.use(TabItem);
  Table.install && app.use(Table);
  Tabs.install && app.use(Tabs);
  TabsItems.install && app.use(TabsItems);
  TimePicker.install && app.use(TimePicker);
  Uploader.install && app.use(Uploader);
}
var umdIndex = {
  install,
  ActionSheet,
  AppBar,
  BackTop,
  Badge,
  Button,
  Card,
  Cell,
  Checkbox,
  CheckboxGroup,
  Chip,
  Col,
  Collapse,
  CollapseItem,
  Context,
  Countdown,
  Counter,
  DatePicker,
  Dialog,
  Divider,
  Form,
  FormDetails,
  Icon,
  Image: Image$1,
  ImagePreview,
  IndexAnchor,
  IndexBar,
  Input,
  Lazy,
  List,
  Loading,
  Locale,
  Menu,
  Option,
  Pagination,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Ripple,
  Row,
  Select,
  Skeleton,
  Slider,
  Snackbar,
  Space,
  Step,
  Steps,
  Sticky,
  StyleProvider,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  TabItem,
  Table,
  Tabs,
  TabsItems,
  TimePicker,
  Uploader
};
export { ActionSheet, AppBar, BackTop, Badge, Button, Card, Cell, Checkbox, CheckboxGroup, Chip, Col, Collapse, CollapseItem, Context, Countdown, Counter, DatePicker, Dialog, Divider, Form, FormDetails, Icon, Image$1 as Image, ImagePreview, IndexAnchor, IndexBar, Input, Lazy, List, Loading, Locale, Menu, Option, Pagination, Picker, Popup, Progress, PullRefresh, Radio, RadioGroup, Rate, Ripple, Row, Select, Skeleton, Slider, Snackbar, Space, Step, Steps, Sticky, StyleProvider, Swipe, SwipeItem, Switch, Tab, TabItem, Table, Tabs, TabsItems, TimePicker, Uploader, umdIndex as default, install };
