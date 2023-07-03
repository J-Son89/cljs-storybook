var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.disposable.disposable.js");
require("./goog.structs.queue.js");
require("./goog.structs.set.js");
var module$shadow_js_shim_module$rn_emoji_keyboard=$CLJS.module$shadow_js_shim_module$rn_emoji_keyboard || ($CLJS.module$shadow_js_shim_module$rn_emoji_keyboard = {});
var react_native=$CLJS.react_native || ($CLJS.react_native = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var quo2=$CLJS.quo2 || ($CLJS.quo2 = {});
var module$shadow_js_shim_module$react_native_haptic_feedback=$CLJS.module$shadow_js_shim_module$react_native_haptic_feedback || ($CLJS.module$shadow_js_shim_module$react_native_haptic_feedback = {});
var module$shadow_js_shim_module$react_native_reanimated=$CLJS.module$shadow_js_shim_module$react_native_reanimated || ($CLJS.module$shadow_js_shim_module$react_native_reanimated = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var module$shadow_js_shim_module$$react_native_community$masked_view=$CLJS.module$shadow_js_shim_module$$react_native_community$masked_view || ($CLJS.module$shadow_js_shim_module$$react_native_community$masked_view = {});
var module$shadow_js_shim_module$react_native=$CLJS.module$shadow_js_shim_module$react_native || ($CLJS.module$shadow_js_shim_module$react_native = {});
var module$shadow_js_shim_module$react_native_background_timer=$CLJS.module$shadow_js_shim_module$react_native_background_timer || ($CLJS.module$shadow_js_shim_module$react_native_background_timer = {});
var module$shadow_js_shim_module$react_native_static_safe_area_insets=$CLJS.module$shadow_js_shim_module$react_native_static_safe_area_insets || ($CLJS.module$shadow_js_shim_module$react_native_static_safe_area_insets = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$$react_native_community$slider=$CLJS.module$shadow_js_shim_module$$react_native_community$slider || ($CLJS.module$shadow_js_shim_module$$react_native_community$slider = {});
var module$shadow_js_shim_module$$react_native_community$audio_toolkit=$CLJS.module$shadow_js_shim_module$$react_native_community$audio_toolkit || ($CLJS.module$shadow_js_shim_module$$react_native_community$audio_toolkit = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var native_module=$CLJS.native_module || ($CLJS.native_module = {});
var module$shadow_js_shim_module$$react_native_community$clipboard=$CLJS.module$shadow_js_shim_module$$react_native_community$clipboard || ($CLJS.module$shadow_js_shim_module$$react_native_community$clipboard = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var module$shadow_js_shim_module$react_native_fast_image=$CLJS.module$shadow_js_shim_module$react_native_fast_image || ($CLJS.module$shadow_js_shim_module$react_native_fast_image = {});
var oops=$CLJS.oops || ($CLJS.oops = {});
var module$shadow_js_shim_module$react_native_hole_view=$CLJS.module$shadow_js_shim_module$react_native_hole_view || ($CLJS.module$shadow_js_shim_module$react_native_hole_view = {});
var module$shadow_js_shim_module$react_native_linear_gradient=$CLJS.module$shadow_js_shim_module$react_native_linear_gradient || ($CLJS.module$shadow_js_shim_module$react_native_linear_gradient = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$react_native_community$hooks=$CLJS.module$shadow_js_shim_module$$react_native_community$hooks || ($CLJS.module$shadow_js_shim_module$$react_native_community$hooks = {});
var module$shadow_js_shim_module$react_native_draggable_flatlist=$CLJS.module$shadow_js_shim_module$react_native_draggable_flatlist || ($CLJS.module$shadow_js_shim_module$react_native_draggable_flatlist = {});
var status_im=$CLJS.status_im || ($CLJS.status_im = {});
var module$shadow_js_shim_module$react_native_redash=$CLJS.module$shadow_js_shim_module$react_native_redash || ($CLJS.module$shadow_js_shim_module$react_native_redash = {});
var taoensso=$CLJS.taoensso || ($CLJS.taoensso = {});
var module$shadow_js_shim_module$$react_native_community$blur=$CLJS.module$shadow_js_shim_module$$react_native_community$blur || ($CLJS.module$shadow_js_shim_module$$react_native_community$blur = {});
var quo=$CLJS.quo || ($CLJS.quo = {});
var cljs_bean=$CLJS.cljs_bean || ($CLJS.cljs_bean = {});
var module$shadow_js_shim_module$react_native_navigation=$CLJS.module$shadow_js_shim_module$react_native_navigation || ($CLJS.module$shadow_js_shim_module$react_native_navigation = {});
var module$shadow_js_shim_module$react_native_image_crop_picker=$CLJS.module$shadow_js_shim_module$react_native_image_crop_picker || ($CLJS.module$shadow_js_shim_module$react_native_image_crop_picker = {});
var module$shadow_js_shim_module$i18n_js=$CLJS.module$shadow_js_shim_module$i18n_js || ($CLJS.module$shadow_js_shim_module$i18n_js = {});
var module$shadow_js_shim_module$react_native_gesture_handler=$CLJS.module$shadow_js_shim_module$react_native_gesture_handler || ($CLJS.module$shadow_js_shim_module$react_native_gesture_handler = {});
var utils=$CLJS.utils || ($CLJS.utils = {});
var module$shadow_js_shim_module$react_native_redash$lib$module$v1=$CLJS.module$shadow_js_shim_module$react_native_redash$lib$module$v1 || ($CLJS.module$shadow_js_shim_module$react_native_redash$lib$module$v1 = {});
var module$shadow_js_shim_module$react_native_svg=$CLJS.module$shadow_js_shim_module$react_native_svg || ($CLJS.module$shadow_js_shim_module$react_native_svg = {});

$CLJS.SHADOW_ENV.setLoaded("goog.structs.pool.js");

goog.provide("goog.structs.Pool");
goog.require("goog.Disposable");
goog.require("goog.structs.Queue");
goog.require("goog.structs.Set");
goog.structs.Pool = function(opt_minCount, opt_maxCount) {
  goog.Disposable.call(this);
  this.minCount_ = opt_minCount || 0;
  this.maxCount_ = opt_maxCount || 10;
  if (this.minCount_ > this.maxCount_) {
    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);
  }
  this.freeQueue_ = new goog.structs.Queue;
  this.inUseSet_ = new goog.structs.Set;
  this.delay = 0;
  this.lastAccess = null;
  this.adjustForMinMax();
};
goog.inherits(goog.structs.Pool, goog.Disposable);
goog.structs.Pool.ERROR_MIN_MAX_ = "[goog.structs.Pool] Min can not be greater than max";
goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ = "[goog.structs.Pool] Objects not released";
goog.structs.Pool.prototype.setMinimumCount = function(min) {
  if (min > this.maxCount_) {
    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);
  }
  this.minCount_ = min;
  this.adjustForMinMax();
};
goog.structs.Pool.prototype.setMaximumCount = function(max) {
  if (max < this.minCount_) {
    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);
  }
  this.maxCount_ = max;
  this.adjustForMinMax();
};
goog.structs.Pool.prototype.setDelay = function(delay) {
  this.delay = delay;
};
goog.structs.Pool.prototype.getObject = function() {
  var time = goog.now();
  if (this.lastAccess != null && time - this.lastAccess < this.delay) {
    return undefined;
  }
  var obj = this.removeFreeObject_();
  if (obj) {
    this.lastAccess = time;
    this.inUseSet_.add(obj);
  }
  return obj;
};
goog.structs.Pool.prototype.releaseObject = function(obj) {
  if (this.inUseSet_.remove(obj)) {
    this.addFreeObject(obj);
    return true;
  }
  return false;
};
goog.structs.Pool.prototype.removeFreeObject_ = function() {
  var obj;
  while (this.getFreeCount() > 0) {
    obj = this.freeQueue_.dequeue();
    if (!this.objectCanBeReused(obj)) {
      this.adjustForMinMax();
    } else {
      break;
    }
  }
  if (!obj && this.getCount() < this.maxCount_) {
    obj = this.createObject();
  }
  return obj;
};
goog.structs.Pool.prototype.addFreeObject = function(obj) {
  this.inUseSet_.remove(obj);
  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {
    this.freeQueue_.enqueue(obj);
  } else {
    this.disposeObject(obj);
  }
};
goog.structs.Pool.prototype.adjustForMinMax = function() {
  var freeQueue = this.freeQueue_;
  while (this.getCount() < this.minCount_) {
    freeQueue.enqueue(this.createObject());
  }
  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {
    this.disposeObject(freeQueue.dequeue());
  }
};
goog.structs.Pool.prototype.createObject = function() {
  return {};
};
goog.structs.Pool.prototype.disposeObject = function(obj) {
  if (typeof obj.dispose == "function") {
    obj.dispose();
  } else {
    for (var i in obj) {
      obj[i] = null;
    }
  }
};
goog.structs.Pool.prototype.objectCanBeReused = function(obj) {
  if (typeof obj.canBeReused == "function") {
    return obj.canBeReused();
  }
  return true;
};
goog.structs.Pool.prototype.contains = function(obj) {
  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);
};
goog.structs.Pool.prototype.getCount = function() {
  return this.freeQueue_.getCount() + this.inUseSet_.getCount();
};
goog.structs.Pool.prototype.getInUseCount = function() {
  return this.inUseSet_.getCount();
};
goog.structs.Pool.prototype.getFreeCount = function() {
  return this.freeQueue_.getCount();
};
goog.structs.Pool.prototype.isEmpty = function() {
  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();
};
goog.structs.Pool.prototype.disposeInternal = function() {
  goog.structs.Pool.superClass_.disposeInternal.call(this);
  if (this.getInUseCount() > 0) {
    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);
  }
  delete this.inUseSet_;
  var freeQueue = this.freeQueue_;
  while (!freeQueue.isEmpty()) {
    this.disposeObject(freeQueue.dequeue());
  }
  delete this.freeQueue_;
};

module.exports = goog.structs.Pool;

//# sourceMappingURL=goog.structs.pool.js.map
