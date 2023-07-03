var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.helpers.js");
require("./oops.config.js");
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

$CLJS.SHADOW_ENV.setLoaded("oops.state.js");

goog.provide('oops.state');
oops.state.make_empty_key_path = (function oops$state$make_empty_key_path(){
return [];
});
oops.state.prepare_state = (function oops$state$prepare_state(target_object,call_site_error,console_reporter){
return [target_object,call_site_error,console_reporter,false,oops.state.make_empty_key_path.call(null),(0)];
});
oops.state.get_target_object = (function oops$state$get_target_object(){

var current_target_object = (oops.state._STAR_runtime_state_STAR_[(0)]);
return current_target_object;
});
oops.state.get_console_reporter = (function oops$state$get_console_reporter(){

var console_reporter = (oops.state._STAR_runtime_state_STAR_[(2)]);

return console_reporter;
});
oops.state.get_call_site_error = (function oops$state$get_call_site_error(){

var call_site_error = (oops.state._STAR_runtime_state_STAR_[(1)]);

return call_site_error;
});
oops.state.add_key_to_current_path_BANG_ = (function oops$state$add_key_to_current_path_BANG_(key){


var current_key_path = (oops.state._STAR_runtime_state_STAR_[(4)]);

current_key_path.push(key);

return current_key_path;
});
oops.state.get_key_path = (function oops$state$get_key_path(){

var current_key_path = (oops.state._STAR_runtime_state_STAR_[(4)]);

return current_key_path;
});
oops.state.get_key_path_str = (function oops$state$get_key_path_str(){

return oops.state.get_key_path.call(null).join(".");
});
oops.state.get_last_access_modifier = (function oops$state$get_last_access_modifier(){

return (oops.state._STAR_runtime_state_STAR_[(5)]);
});
oops.state.set_last_access_modifier_BANG_ = (function oops$state$set_last_access_modifier_BANG_(mode){

return (oops.state._STAR_runtime_state_STAR_[(5)] = mode);
});
oops.state.was_error_reported_QMARK_ = (function oops$state$was_error_reported_QMARK_(){

var error_reported_QMARK_ = (oops.state._STAR_runtime_state_STAR_[(3)]);

return error_reported_QMARK_;
});
oops.state.mark_error_reported_BANG_ = (function oops$state$mark_error_reported_BANG_(){

return (oops.state._STAR_runtime_state_STAR_[(3)] = true);
});
oops.state.prepare_error_from_call_site = (function oops$state$prepare_error_from_call_site(msg,data){
if(oops.config.throw_errors_from_macro_call_sites_QMARK_.call(null)){
return oops.helpers.repurpose_error.call(null,oops.state.get_call_site_error.call(null),msg,data);
} else {
return (new Error(msg));
}
});
Object.defineProperty(module.exports, "get_target_object", { enumerable: false, get: function() { return oops.state.get_target_object; } });
Object.defineProperty(module.exports, "set_last_access_modifier_BANG_", { enumerable: false, get: function() { return oops.state.set_last_access_modifier_BANG_; } });
Object.defineProperty(module.exports, "get_last_access_modifier", { enumerable: false, get: function() { return oops.state.get_last_access_modifier; } });
Object.defineProperty(module.exports, "get_key_path", { enumerable: false, get: function() { return oops.state.get_key_path; } });
Object.defineProperty(module.exports, "make_empty_key_path", { enumerable: false, get: function() { return oops.state.make_empty_key_path; } });
Object.defineProperty(module.exports, "prepare_state", { enumerable: false, get: function() { return oops.state.prepare_state; } });
Object.defineProperty(module.exports, "mark_error_reported_BANG_", { enumerable: false, get: function() { return oops.state.mark_error_reported_BANG_; } });
Object.defineProperty(module.exports, "prepare_error_from_call_site", { enumerable: false, get: function() { return oops.state.prepare_error_from_call_site; } });
Object.defineProperty(module.exports, "_STAR_runtime_state_STAR_", { enumerable: false, get: function() { return oops.state._STAR_runtime_state_STAR_; } });
Object.defineProperty(module.exports, "get_console_reporter", { enumerable: false, get: function() { return oops.state.get_console_reporter; } });
Object.defineProperty(module.exports, "add_key_to_current_path_BANG_", { enumerable: false, get: function() { return oops.state.add_key_to_current_path_BANG_; } });
Object.defineProperty(module.exports, "get_call_site_error", { enumerable: false, get: function() { return oops.state.get_call_site_error; } });
Object.defineProperty(module.exports, "get_key_path_str", { enumerable: false, get: function() { return oops.state.get_key_path_str; } });
Object.defineProperty(module.exports, "was_error_reported_QMARK_", { enumerable: false, get: function() { return oops.state.was_error_reported_QMARK_; } });
//# sourceMappingURL=oops.state.js.map
