var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.record_audio.record_audio.style.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.reanimated.js");
require("./react_native.audio_toolkit.js");
require("./taoensso.timbre.js");
require("./cljs_bean.core.js");
require("./reagent.core.js");
require("./quo2.components.record_audio.record_audio.helpers.js");
require("./utils.worklets.record_audio.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.record_audio.record_audio.buttons.record_button_big.js");

goog.provide('quo2.components.record_audio.record_audio.buttons.record_button_big');
quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_each = 1.8;
quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_total = 2.6;
quo2.components.record_audio.record_audio.buttons.record_button_big.scale_padding = 0.16;
quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_lock = (1);
quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_default = 0.5;
quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration = (3900);
quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration_2 = (1950);
quo2.components.record_audio.record_audio.buttons.record_button_big.animated_ring = reagent.core.adapt_react_class.call(null,react_native.core.memo.call(null,(function (props){
var map__19269 = cljs_bean.core.bean.call(null,props);
var map__19269__$1 = (((((!((map__19269 == null))))?(((((map__19269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19269):map__19269);
var scale = cljs.core.get.call(null,map__19269__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var opacity = cljs.core.get.call(null,map__19269__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var color = cljs.core.get.call(null,map__19269__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.animated_circle.call(null,scale,opacity,color)], null)], null));
})));
quo2.components.record_audio.record_audio.buttons.record_button_big.f_record_button_big = (function quo2$components$record_audio$record_audio$buttons$record_button_big$f_record_button_big(recording_QMARK_,ready_to_send_QMARK_,ready_to_lock_QMARK_,ready_to_delete_QMARK_,record_button_is_animating_QMARK_,record_button_at_initial_position_QMARK_,locked_QMARK_,reviewing_audio_QMARK_,recording_timer,recording_length_ms,clear_timeout,touch_active_QMARK_,recorder_ref,reload_recorder_fn,idle_QMARK_,on_send,on_cancel){
var scale = react_native.reanimated.use_shared_value.call(null,(1));
var opacity = react_native.reanimated.use_shared_value.call(null,(0));
var opacity_from = (cljs.core.truth_(cljs.core.deref.call(null,ready_to_lock_QMARK_))?quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_lock:quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_default);
var animations = cljs.core.map.call(null,(function (index){
var ring_scale = utils.worklets.record_audio.ring_scale.call(null,scale,(quo2.components.record_audio.record_audio.buttons.record_button_big.scale_padding * index));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),ring_scale,new cljs.core.Keyword(null,"opacity","opacity",397153780),react_native.reanimated.interpolate.call(null,ring_scale,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_each], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opacity_from,(0)], null))], null);
}),cljs.core.range.call(null,(0),(5)));
var rings_color = (cljs.core.truth_(cljs.core.deref.call(null,ready_to_lock_QMARK_))?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_5_opaque,quo2.foundations.colors.neutral_80):(cljs.core.truth_(cljs.core.deref.call(null,ready_to_delete_QMARK_))?quo2.foundations.colors.danger_50:quo2.foundations.colors.primary_50
));
var translate_y = react_native.reanimated.use_shared_value.call(null,(0));
var translate_x = react_native.reanimated.use_shared_value.call(null,(0));
var button_color = quo2.foundations.colors.primary_50;
var icon_color = (cljs.core.truth_((((!(quo2.foundations.colors.dark_QMARK_.call(null))))?cljs.core.deref.call(null,ready_to_lock_QMARK_):false))?quo2.foundations.colors.black:quo2.foundations.colors.white);
var icon_opacity = react_native.reanimated.use_shared_value.call(null,(1));
var red_overlay_opacity = react_native.reanimated.use_shared_value.call(null,(0));
var gray_overlay_opacity = react_native.reanimated.use_shared_value.call(null,(0));
var complete_animation = (function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,ready_to_lock_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref.call(null,record_button_is_animating_QMARK_));
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,locked_QMARK_,true);

return cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);
} else {
if(((cljs.core.not(cljs.core.deref.call(null,locked_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,reviewing_audio_QMARK_))))){
return react_native.audio_toolkit.stop_recording.call(null,cljs.core.deref.call(null,recorder_ref),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_send_QMARK_))){
if(cljs.core.truth_(on_send)){
on_send.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-path","file-path",-2005501162),react_native.audio_toolkit.get_recorder_file_path.call(null,cljs.core.deref.call(null,recorder_ref)),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,recording_length_ms)], null));
} else {
}
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
if(cljs.core.truth_(on_cancel)){
on_cancel.call(null);
} else {
}
} else {
}
}

reload_recorder_fn.call(null);

cljs.core.reset_BANG_.call(null,recording_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_send_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_delete_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

cljs.core.reset_BANG_.call(null,idle_QMARK_,true);

setTimeout((function (){
return cljs.core.reset_BANG_.call(null,idle_QMARK_,false);
}),(1000));

clearInterval(cljs.core.deref.call(null,recording_timer));

cljs.core.reset_BANG_.call(null,recording_length_ms,(0));

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.buttons.record-button-big",null,87,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - success"], null);
}),null)),null,18191987);
}),(function (p1__19274_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.buttons.record-button-big",null,88,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - error: ",p1__19274_SHARP_], null);
}),null)),null,-1318142749);
}));
} else {
return null;
}
}
});
var start_animation = (function (){
quo2.components.record_audio.record_audio.helpers.set_value.call(null,opacity,(1));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,scale,2.6,quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration);

return cljs.core.reset_BANG_.call(null,clear_timeout,setTimeout((function (){
quo2.components.record_audio.record_audio.helpers.set_value.call(null,scale,quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_each);

return quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay_loop.call(null,scale,quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_total,quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration_2,(0));
}),quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration));
});
var stop_animation = (function (){
quo2.components.record_audio.record_audio.helpers.set_value.call(null,opacity,(0));

react_native.reanimated.cancel_animation.call(null,scale);

quo2.components.record_audio.record_audio.helpers.set_value.call(null,scale,(1));

if(cljs.core.truth_(cljs.core.deref.call(null,clear_timeout))){
return clearTimeout(cljs.core.deref.call(null,clear_timeout));
} else {
return null;
}
});
var start_y_animation = (function (){
cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,false);

cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,true);

quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_y,(-64),(250));

quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,icon_opacity,(0),33.33,76.66);

return setTimeout((function (){
cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,touch_active_QMARK_))){
return null;
} else {
return complete_animation();
}
}),(250));
});
var reset_y_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_y,(0),(300));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,icon_opacity,(1),(500));

return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,true);
}),(500));
});
var start_x_animation = (function (){
cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,false);

cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,true);

quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_x,(-64),(250));

quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,icon_opacity,(0),33.33,76.66);

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,red_overlay_opacity,(1),33.33);

return setTimeout((function (){
cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,touch_active_QMARK_))){
return null;
} else {
return complete_animation();
}
}),(250));
});
var reset_x_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_x,(0),(300));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,icon_opacity,(1),(500));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,red_overlay_opacity,(0),(100));

return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,true);
}),(500));
});
var start_x_y_animation = (function (){
cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,false);

cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,true);

quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_y,(-44),(200));

quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_x,(-44),(200));

quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay.call(null,icon_opacity,(0),33.33,33.33);

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,gray_overlay_opacity,(1),33.33);

return setTimeout((function (){
cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,touch_active_QMARK_))){
return null;
} else {
return complete_animation();
}
}),(200));
});
var reset_x_y_animation = (function (){
quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_y,(0),(300));

quo2.components.record_audio.record_audio.helpers.animate_easing.call(null,translate_x,(0),(300));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,icon_opacity,(1),(500));

quo2.components.record_audio.record_audio.helpers.animate_linear.call(null,gray_overlay_opacity,(0),(800));

return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,true);
}),(800));
});
react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,recording_QMARK_))){
return start_animation();
} else {
if(cljs.core.not(cljs.core.deref.call(null,ready_to_lock_QMARK_))){
return stop_animation();
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,recording_QMARK_)], null));

react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_lock_QMARK_))){
return start_x_y_animation();
} else {
return reset_x_y_animation();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,ready_to_lock_QMARK_)], null));

react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_send_QMARK_))){
return start_y_animation();
} else {
return reset_y_animation();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,ready_to_send_QMARK_)], null));

react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
return start_x_animation();
} else {
return reset_x_animation();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,ready_to_delete_QMARK_)], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.record_button_big_container.call(null,translate_x,translate_y,opacity),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.call(null,(function (id,animation){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.record_audio.record_audio.buttons.record_button_big.animated_ring,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(animation),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(animation),new cljs.core.Keyword(null,"color","color",1011675173),rings_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),animations)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.record_button_big_body.call(null,button_color)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.record_button_big_red_overlay.call(null,red_overlay_opacity)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.record_button_big_gray_overlay.call(null,gray_overlay_opacity)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.record_button_big_icon_container.call(null,icon_opacity)], null),(cljs.core.truth_(cljs.core.deref.call(null,locked_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.stop_icon], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","audio","i/audio",1819127234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null))], null)], null)], null);
});
Object.defineProperty(module.exports, "signal_anim_duration", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration; } });
Object.defineProperty(module.exports, "opacity_from_lock", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_lock; } });
Object.defineProperty(module.exports, "f_record_button_big", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.f_record_button_big; } });
Object.defineProperty(module.exports, "scale_to_each", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_each; } });
Object.defineProperty(module.exports, "signal_anim_duration_2", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.signal_anim_duration_2; } });
Object.defineProperty(module.exports, "animated_ring", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.animated_ring; } });
Object.defineProperty(module.exports, "opacity_from_default", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.opacity_from_default; } });
Object.defineProperty(module.exports, "scale_padding", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.scale_padding; } });
Object.defineProperty(module.exports, "scale_to_total", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.buttons.record_button_big.scale_to_total; } });
//# sourceMappingURL=quo2.components.record_audio.record_audio.buttons.record_button_big.js.map
