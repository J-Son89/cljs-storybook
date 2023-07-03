var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.record_audio.record_audio.style.js");
require("./quo2.foundations.colors.js");
require("./react_native.reanimated.js");
require("./react_native.core.js");
require("./quo2.components.record_audio.record_audio.helpers.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.record_audio.record_audio.buttons.delete_button.js");

goog.provide('quo2.components.record_audio.record_audio.buttons.delete_button');
quo2.components.record_audio.record_audio.buttons.delete_button.f_delete_button = (function quo2$components$record_audio$record_audio$buttons$delete_button$f_delete_button(recording_QMARK_,ready_to_delete_QMARK_,reviewing_audio_QMARK_,force_show_controls_QMARK_){
var opacity = react_native.reanimated.use_shared_value.call(null,(cljs.core.truth_(force_show_controls_QMARK_)?(1):(0)));
var translate_x = react_native.reanimated.use_shared_value.call(null,(cljs.core.truth_(force_show_controls_QMARK_)?(35):(20)));
var scale = react_native.reanimated.use_shared_value.call(null,(cljs.core.truth_(force_show_controls_QMARK_)?0.75:(1)));
var connector_opacity = react_native.reanimated.use_shared_value.call(null,(0));
var connector_width = react_native.reanimated.use_shared_value.call(null,(24));
var connector_height = react_native.reanimated.use_shared_value.call(null,(12));
var border_radius_first_half = react_native.reanimated.use_shared_value.call(null,(8));
var border_radius_second_half = react_native.reanimated.use_shared_value.call(null,(8));
var start_x_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,translate_x,(12),(50),133.33);

quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay.call(null,connector_opacity,(1),(0),93.33);

quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay.call(null,connector_width,(56),83.33,(80));

quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay.call(null,connector_height,(56),83.33,(80));

quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay.call(null,border_radius_first_half,(28),83.33,(80));

return quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay.call(null,border_radius_second_half,(28),83.33,(80));
});
var reset_x_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,translate_x,(0),(100));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_opacity,(0));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_width,(24));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_height,(12));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,border_radius_first_half,(8));

return quo2.components.record_audio.record_audio.helpers.set_value.call(null,border_radius_second_half,(16));
});
var fade_in_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,translate_x,(0),(200));

return quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,opacity,(1),(200));
});
var fade_out_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,translate_x,(cljs.core.truth_(cljs.core.deref.call(null,reviewing_audio_QMARK_))?(35):(20)),(200));

if(cljs.core.truth_(cljs.core.deref.call(null,reviewing_audio_QMARK_))){
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,scale,0.75,(200));
} else {
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,opacity,(0),(200));
}

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_opacity,(0));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_width,(24));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,connector_height,(12));

quo2.components.record_audio.record_audio.helpers.set_value.call(null,border_radius_first_half,(8));

return quo2.components.record_audio.record_audio.helpers.set_value.call(null,border_radius_second_half,(16));
});
var fade_out_reset_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,opacity,(0),(200));

quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,translate_x,(20),(0),(200));

return quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,scale,(1),(0),(200));
});
react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,recording_QMARK_))){
return fade_in_animation();
} else {
return fade_out_animation();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,recording_QMARK_)], null));

react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,reviewing_audio_QMARK_))){
return null;
} else {
return fade_out_reset_animation();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,reviewing_audio_QMARK_)], null));

react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
return start_x_animation();
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,recording_QMARK_))){
return reset_x_animation();
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,ready_to_delete_QMARK_)], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.delete_button_container.call(null,opacity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.delete_button_connector.call(null,connector_opacity,connector_width,connector_height,border_radius_first_half,border_radius_second_half)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.delete_button.call(null,scale,translate_x,opacity),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","delete","i/delete",-1768633455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null)], null);
});
Object.defineProperty(module.exports, "f_delete_button", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.delete_button.f_delete_button; } });
//# sourceMappingURL=quo2.components.record_audio.record_audio.buttons.delete_button.js.map
