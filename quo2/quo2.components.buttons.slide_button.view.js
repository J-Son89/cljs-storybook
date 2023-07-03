var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.buttons.slide_button.style.js");
require("./quo2.components.buttons.slide_button.utils.js");
require("./quo2.components.buttons.slide_button.animations.js");
require("./react_native.gesture.js");
require("./react_native.core.js");
require("./reagent.core.js");
require("./oops.core.js");
require("./react_native.reanimated.js");
require("./quo2.components.buttons.slide_button.constants.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.slide_button.view.js");

goog.provide('quo2.components.buttons.slide_button.view');
quo2.components.buttons.slide_button.view.f_slider = (function quo2$components$buttons$slide_button$view$f_slider(p__16814){
var map__16815 = p__16814;
var map__16815__$1 = (((((!((map__16815 == null))))?(((((map__16815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16815):map__16815);
var disabled_QMARK_ = cljs.core.get.call(null,map__16815__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var track_width = reagent.core.atom.call(null,null);
var sliding_complete_QMARK_ = reagent.core.atom.call(null,false);
var gestures_disabled_QMARK_ = reagent.core.atom.call(null,disabled_QMARK_);
var on_track_layout = (function (evt){
var width = (function (){var target_obj_16820 = evt;
var _STAR_runtime_state_STAR__orig_val__16827 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16828 = oops.state.prepare_state.call(null,target_obj_16820,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16828);

try{var next_obj_16824 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16820,(0),"nativeEvent",true,true,false))?(target_obj_16820["nativeEvent"]):null);
var next_obj_16825 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_16824,(0),"layout",true,true,false))?(next_obj_16824["layout"]):null);
var next_obj_16826 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_16825,(0),"width",true,true,false))?(next_obj_16825["width"]):null);
return next_obj_16826;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16827);
}})();
return cljs.core.reset_BANG_.call(null,track_width,width);
});
return (function (p__16833){
var map__16834 = p__16833;
var map__16834__$1 = (((((!((map__16834 == null))))?(((((map__16834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16834):map__16834);
var on_complete = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var track_text = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"track-text","track-text",199607649));
var track_icon = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"track-icon","track-icon",-1851994822));
var disabled_QMARK___$1 = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var customization_color = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
var size = cljs.core.get.call(null,map__16834__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var x_pos = react_native.reanimated.use_shared_value.call(null,(0));
var dimensions = cljs.core.partial.call(null,quo2.components.buttons.slide_button.utils.get_dimensions,(function (){var or__4126__auto__ = cljs.core.deref.call(null,track_width);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.components.buttons.slide_button.constants.default_width;
}
})(),size);
var interpolate_track = cljs.core.partial.call(null,quo2.components.buttons.slide_button.animations.interpolate_track,x_pos,dimensions(new cljs.core.Keyword(null,"usable-track","usable-track",1619106138)),dimensions(new cljs.core.Keyword(null,"thumb","thumb",1718947232)));
react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,sliding_complete_QMARK_))){
return on_complete.call(null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,sliding_complete_QMARK_)], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.gesture.gesture_detector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gesture","gesture",-55070012),quo2.components.buttons.slide_button.animations.drag_gesture.call(null,x_pos,gestures_disabled_QMARK_,disabled_QMARK___$1,dimensions(new cljs.core.Keyword(null,"usable-track","usable-track",1619106138)),sliding_complete_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),new cljs.core.Keyword(null,"slide-button-track","slide-button-track",-1207645675),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.track.call(null,disabled_QMARK___$1,customization_color,dimensions(new cljs.core.Keyword(null,"track-height","track-height",-1871630545))),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),(((!((cljs.core.deref.call(null,track_width) == null))))?null:on_track_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.track_cover.call(null,interpolate_track)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.track_cover_text_container.call(null,cljs.core.deref.call(null,track_width))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,track_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.buttons.slide_button.utils.slider_color.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),customization_color),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.track_text.call(null,customization_color)], null),track_text], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.thumb_container.call(null,interpolate_track,dimensions(new cljs.core.Keyword(null,"thumb","thumb",1718947232)),customization_color)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.arrow_icon_container.call(null,interpolate_track)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword(null,"arrow-right","arrow-right",1734868482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.slide_button.style.action_icon.call(null,interpolate_track,dimensions(new cljs.core.Keyword(null,"thumb","thumb",1718947232)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,track_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null)], null)], null)], null);
});
});
/**
 * Options
 *   - `on-complete`         Callback called when the sliding is complete
 *   - `disabled?`           Boolean that disables the button
 *                        (_and gestures_)
 *   - `size`                `:small`/`:large`
 *   - `track-text`          Text that is shown on the track
 *   - `track-icon`          Key of the icon shown on the track
 *                        (e.g. `:face-id`)
 *   - `customization-color` Customization color
 *   
 */
quo2.components.buttons.slide_button.view.view = (function quo2$components$buttons$slide_button$view$view(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.buttons.slide_button.view.f_slider,props], null);
});
Object.defineProperty(module.exports, "f_slider", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.view.f_slider; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.view.view; } });
//# sourceMappingURL=quo2.components.buttons.slide_button.view.js.map
