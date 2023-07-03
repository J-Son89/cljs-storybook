var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.gesture.js");
require("./quo2.components.buttons.slide_button.utils.js");
require("./oops.core.js");
require("./react_native.reanimated.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.slide_button.animations.js");

goog.provide('quo2.components.buttons.slide_button.animations');
quo2.components.buttons.slide_button.animations.extrapolation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extrapolateLeft","extrapolateLeft",211803892),"clamp",new cljs.core.Keyword(null,"extrapolateRight","extrapolateRight",-1211061454),"clamp"], null);
quo2.components.buttons.slide_button.animations.track_interpolation_inputs = (function quo2$components$buttons$slide_button$animations$track_interpolation_inputs(in_vectors,track_width){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,track_width),in_vectors);
});
quo2.components.buttons.slide_button.animations.track_clamp_interpolation = (function quo2$components$buttons$slide_button$animations$track_clamp_interpolation(track_width){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [track_width,(0),track_width], null)], null);
});
quo2.components.buttons.slide_button.animations.track_cover_interpolation = (function quo2$components$buttons$slide_button$animations$track_cover_interpolation(track_width,thumb_size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thumb_size / (2)),track_width], null)], null);
});
quo2.components.buttons.slide_button.animations.arrow_icon_position_interpolation = (function quo2$components$buttons$slide_button$animations$arrow_icon_position_interpolation(thumb_size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,(1)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- thumb_size)], null)], null);
});
quo2.components.buttons.slide_button.animations.action_icon_position_interpolation = (function quo2$components$buttons$slide_button$animations$action_icon_position_interpolation(thumb_size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,(1)], null),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thumb_size,(0)], null)], null);
});
/**
 * Interpolate the position in the track
 *   `x-pos`            Track animated value
 *   `track-width`      Usable width of the track
 *   `thumb-size`       Size of the thumb
 *   `interpolation` `  :thumb-border-radius`/`:thumb-drop-position`/`:thumb-drop-scale`/`:thumb-drop-z-index`/...
 */
quo2.components.buttons.slide_button.animations.interpolate_track = (function quo2$components$buttons$slide_button$animations$interpolate_track(x_pos,track_width,thumb_size,interpolation){
var interpolations = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"track-cover","track-cover",523114914),quo2.components.buttons.slide_button.animations.track_cover_interpolation.call(null,track_width,thumb_size),new cljs.core.Keyword(null,"track-clamp","track-clamp",2102447526),quo2.components.buttons.slide_button.animations.track_clamp_interpolation.call(null,track_width),new cljs.core.Keyword(null,"action-icon-position","action-icon-position",-1955358068),quo2.components.buttons.slide_button.animations.action_icon_position_interpolation.call(null,thumb_size),new cljs.core.Keyword(null,"arrow-icon-position","arrow-icon-position",-740473702),quo2.components.buttons.slide_button.animations.arrow_icon_position_interpolation.call(null,thumb_size)], null);
var interpolation_values = interpolation.call(null,interpolations);
var output = new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(interpolation_values);
var input = quo2.components.buttons.slide_button.animations.track_interpolation_inputs.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(interpolation_values),track_width);
if(cljs.core.truth_(interpolation_values)){
return react_native.reanimated.interpolate.call(null,x_pos,input,output,quo2.components.buttons.slide_button.animations.extrapolation);
} else {
return x_pos;
}
});
quo2.components.buttons.slide_button.animations.animate_spring = (function quo2$components$buttons$slide_button$animations$animate_spring(value,to_value){
return react_native.reanimated.animate_shared_value_with_spring.call(null,value,to_value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(1),new cljs.core.Keyword(null,"damping","damping",1054389681),(30),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(400)], null));
});
quo2.components.buttons.slide_button.animations.complete_animation = (function quo2$components$buttons$slide_button$animations$complete_animation(sliding_complete_QMARK_){
return cljs.core.reset_BANG_.call(null,sliding_complete_QMARK_,true);
});
quo2.components.buttons.slide_button.animations.reset_track_position = (function quo2$components$buttons$slide_button$animations$reset_track_position(x_pos){
return quo2.components.buttons.slide_button.animations.animate_spring.call(null,x_pos,(0));
});
quo2.components.buttons.slide_button.animations.drag_gesture = (function quo2$components$buttons$slide_button$animations$drag_gesture(x_pos,gestures_disabled_QMARK_,disabled_QMARK_,track_width,sliding_complete_QMARK_){
var gestures_enabled_QMARK_ = cljs.core.not((function (){var or__4126__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref.call(null,gestures_disabled_QMARK_);
}
})());
return react_native.gesture.on_end.call(null,react_native.gesture.on_update.call(null,react_native.gesture.min_distance.call(null,react_native.gesture.enabled.call(null,react_native.gesture.with_test_ID.call(null,react_native.gesture.gesture_pan.call(null),new cljs.core.Keyword(null,"slide-button-gestures","slide-button-gestures",1322002830)),gestures_enabled_QMARK_),(0)),(function (event){
var x_translation = (function (){var target_obj_16780 = event;
var _STAR_runtime_state_STAR__orig_val__16783 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16784 = oops.state.prepare_state.call(null,target_obj_16780,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16784);

try{var next_obj_16782 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16780,(0),"translationX",true,true,false))?(target_obj_16780["translationX"]):null);
return next_obj_16782;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16783);
}})();
var clamped_x = quo2.components.buttons.slide_button.utils.clamp_value.call(null,x_translation,(0),track_width);
var reached_end_QMARK_ = (clamped_x >= track_width);
react_native.reanimated.set_shared_value.call(null,x_pos,clamped_x);

if(((reached_end_QMARK_) && (cljs.core.not(cljs.core.deref.call(null,sliding_complete_QMARK_))))){
cljs.core.reset_BANG_.call(null,gestures_disabled_QMARK_,true);

return quo2.components.buttons.slide_button.animations.complete_animation.call(null,sliding_complete_QMARK_);
} else {
return null;
}
})),(function (event){
var x_translation = (function (){var target_obj_16792 = event;
var _STAR_runtime_state_STAR__orig_val__16796 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16797 = oops.state.prepare_state.call(null,target_obj_16792,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16797);

try{var next_obj_16794 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16792,(0),"translationX",true,true,false))?(target_obj_16792["translationX"]):null);
return next_obj_16794;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16796);
}})();
var reached_end_QMARK_ = (x_translation >= track_width);
if((!(reached_end_QMARK_))){
return quo2.components.buttons.slide_button.animations.reset_track_position.call(null,x_pos);
} else {
return null;
}
}));
});
Object.defineProperty(module.exports, "track_clamp_interpolation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.track_clamp_interpolation; } });
Object.defineProperty(module.exports, "action_icon_position_interpolation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.action_icon_position_interpolation; } });
Object.defineProperty(module.exports, "extrapolation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.extrapolation; } });
Object.defineProperty(module.exports, "interpolate_track", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.interpolate_track; } });
Object.defineProperty(module.exports, "track_interpolation_inputs", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.track_interpolation_inputs; } });
Object.defineProperty(module.exports, "track_cover_interpolation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.track_cover_interpolation; } });
Object.defineProperty(module.exports, "animate_spring", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.animate_spring; } });
Object.defineProperty(module.exports, "complete_animation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.complete_animation; } });
Object.defineProperty(module.exports, "drag_gesture", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.drag_gesture; } });
Object.defineProperty(module.exports, "arrow_icon_position_interpolation", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.arrow_icon_position_interpolation; } });
Object.defineProperty(module.exports, "reset_track_position", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.animations.reset_track_position; } });
//# sourceMappingURL=quo2.components.buttons.slide_button.animations.js.map
