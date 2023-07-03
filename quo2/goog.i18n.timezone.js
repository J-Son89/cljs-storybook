var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.array.array.js");
require("./goog.date.datelike.js");
require("./goog.object.object.js");
require("./goog.string.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("goog.i18n.timezone.js");

goog.provide("goog.i18n.TimeZone");
goog.require("goog.array");
goog.require("goog.date.DateLike");
goog.require("goog.object");
goog.require("goog.string");
goog.i18n.TimeZone = function() {
  this.timeZoneId_;
  this.standardOffset_;
  this.tzNames_;
  this.tzNamesExt_;
  this.transitions_;
};
goog.i18n.TimeZone.MILLISECONDS_PER_HOUR_ = 3600 * 1000;
goog.i18n.TimeZone.NameType = {STD_SHORT_NAME:0, STD_LONG_NAME:1, DLT_SHORT_NAME:2, DLT_LONG_NAME:3};
goog.i18n.TimeZone.createTimeZone = function(timeZoneData) {
  if (typeof timeZoneData == "number") {
    return goog.i18n.TimeZone.createSimpleTimeZone_(timeZoneData);
  }
  var tz = new goog.i18n.TimeZone;
  tz.timeZoneId_ = timeZoneData["id"];
  tz.standardOffset_ = -timeZoneData["std_offset"];
  tz.tzNames_ = timeZoneData["names"];
  tz.tzNamesExt_ = timeZoneData["names_ext"];
  tz.transitions_ = timeZoneData["transitions"];
  return tz;
};
goog.i18n.TimeZone.createSimpleTimeZone_ = function(timeZoneOffsetInMinutes) {
  var tz = new goog.i18n.TimeZone;
  tz.standardOffset_ = timeZoneOffsetInMinutes;
  tz.timeZoneId_ = goog.i18n.TimeZone.composePosixTimeZoneID_(timeZoneOffsetInMinutes);
  var str = goog.i18n.TimeZone.composeUTCString_(timeZoneOffsetInMinutes);
  var strGMT = goog.i18n.TimeZone.composeGMTString_(timeZoneOffsetInMinutes);
  tz.tzNames_ = [str, str];
  tz.tzNamesExt_ = {STD_LONG_NAME_GMT:strGMT, STD_GENERIC_LOCATION:strGMT};
  tz.transitions_ = [];
  return tz;
};
goog.i18n.TimeZone.composeGMTString_ = function(offset) {
  var parts = ["GMT"];
  parts.push(offset <= 0 ? "+" : "-");
  offset = Math.abs(offset);
  parts.push(goog.string.padNumber(Math.floor(offset / 60) % 100, 2), ":", goog.string.padNumber(offset % 60, 2));
  return parts.join("");
};
goog.i18n.TimeZone.composePosixTimeZoneID_ = function(offset) {
  if (offset == 0) {
    return "Etc/GMT";
  }
  var parts = ["Etc/GMT", offset < 0 ? "-" : "+"];
  offset = Math.abs(offset);
  parts.push(Math.floor(offset / 60) % 100);
  offset = offset % 60;
  if (offset != 0) {
    parts.push(":", goog.string.padNumber(offset, 2));
  }
  return parts.join("");
};
goog.i18n.TimeZone.composeUTCString_ = function(offset) {
  if (offset == 0) {
    return "UTC";
  }
  var parts = ["UTC", offset < 0 ? "+" : "-"];
  offset = Math.abs(offset);
  parts.push(Math.floor(offset / 60) % 100);
  offset = offset % 60;
  if (offset != 0) {
    parts.push(":", offset);
  }
  return parts.join("");
};
goog.i18n.TimeZone.prototype.getTimeZoneData = function() {
  return {"id":this.timeZoneId_, "std_offset":-this.standardOffset_, "names":goog.array.clone(this.tzNames_), "names_ext":goog.object.clone(this.tzNamesExt_), "transitions":goog.array.clone(this.transitions_)};
};
goog.i18n.TimeZone.prototype.getDaylightAdjustment = function(date) {
  var timeInMs = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes());
  var timeInHours = timeInMs / goog.i18n.TimeZone.MILLISECONDS_PER_HOUR_;
  var index = 0;
  while (index < this.transitions_.length && timeInHours >= this.transitions_[index]) {
    index += 2;
  }
  return index == 0 ? 0 : this.transitions_[index - 1];
};
goog.i18n.TimeZone.prototype.getGMTString = function(date) {
  return goog.i18n.TimeZone.composeGMTString_(this.getOffset(date));
};
goog.i18n.TimeZone.prototype.getUTCString = function(date) {
  return goog.i18n.TimeZone.composeUTCString_(this.getOffset(date));
};
goog.i18n.TimeZone.prototype.getLongName = function(date) {
  return this.tzNames_[this.isDaylightTime(date) ? goog.i18n.TimeZone.NameType.DLT_LONG_NAME : goog.i18n.TimeZone.NameType.STD_LONG_NAME];
};
goog.i18n.TimeZone.prototype.getOffset = function(date) {
  return this.standardOffset_ - this.getDaylightAdjustment(date);
};
goog.i18n.TimeZone.prototype.getRFCTimeZoneString = function(date) {
  var offset = -this.getOffset(date);
  var parts = [offset < 0 ? "-" : "+"];
  offset = Math.abs(offset);
  parts.push(goog.string.padNumber(Math.floor(offset / 60) % 100, 2), goog.string.padNumber(offset % 60, 2));
  return parts.join("");
};
goog.i18n.TimeZone.prototype.getShortName = function(date) {
  return this.tzNames_[this.isDaylightTime(date) ? goog.i18n.TimeZone.NameType.DLT_SHORT_NAME : goog.i18n.TimeZone.NameType.STD_SHORT_NAME];
};
goog.i18n.TimeZone.prototype.getTimeZoneId = function() {
  return this.timeZoneId_;
};
goog.i18n.TimeZone.prototype.isDaylightTime = function(date) {
  return this.getDaylightAdjustment(date) > 0;
};
goog.i18n.TimeZone.prototype.getLongNameGMT = function(date) {
  if (this.isDaylightTime(date)) {
    return this.tzNamesExt_.DST_LONG_NAME_GMT !== undefined ? this.tzNamesExt_.DST_LONG_NAME_GMT : this.tzNamesExt_["DST_LONG_NAME_GMT"];
  } else {
    return this.tzNamesExt_.STD_LONG_NAME_GMT !== undefined ? this.tzNamesExt_.STD_LONG_NAME_GMT : this.tzNamesExt_["STD_LONG_NAME_GMT"];
  }
};
goog.i18n.TimeZone.prototype.getGenericLocation = function(date) {
  if (this.isDaylightTime(date)) {
    return this.tzNamesExt_.DST_GENERIC_LOCATION !== undefined ? this.tzNamesExt_.DST_GENERIC_LOCATION : this.tzNamesExt_["DST_GENERIC_LOCATION"];
  } else {
    return this.tzNamesExt_.STD_GENERIC_LOCATION !== undefined ? this.tzNamesExt_.STD_GENERIC_LOCATION : this.tzNamesExt_["STD_GENERIC_LOCATION"];
  }
};

module.exports = goog.i18n.TimeZone;

//# sourceMappingURL=goog.i18n.timezone.js.map
