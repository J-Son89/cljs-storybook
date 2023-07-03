var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs_bean.core.js");
require("./quo.animated.js");
require("./quo.components.bottom_sheet.style.js");
require("./quo.design_system.colors.js");
require("./quo.gesture_handler.js");
require("./quo.platform.js");
require("./quo.react.js");
require("./quo.react_native.js");
require("./reagent.core.js");
require("./react_native.safe_area.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.bottom_sheet.view.js");

goog.provide('quo.components.bottom_sheet.view');
quo.components.bottom_sheet.view.opacity_coeff = 0.8;
quo.components.bottom_sheet.view.close_duration = (150);
quo.components.bottom_sheet.view.spring_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"damping","damping",1054389681),(15),new cljs.core.Keyword(null,"mass","mass",-2138950046),0.7,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(150),new cljs.core.Keyword(null,"overshootClamping","overshootClamping",-423138060),false,new cljs.core.Keyword(null,"restSpeedThreshold","restSpeedThreshold",455074819),0.1,new cljs.core.Keyword(null,"restDisplacementThreshold","restDisplacementThreshold",448064965),0.1], null);
quo.components.bottom_sheet.view.bottom_sheet_hooks = (function quo$components$bottom_sheet$view$bottom_sheet_hooks(props){
var map__18688 = cljs_bean.core.bean.call(null,props);
var map__18688__$1 = (((((!((map__18688 == null))))?(((((map__18688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18688):map__18688);
var on_cancel = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"onCancel","onCancel",1068330409));
var disable_drag_QMARK_ = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"disableDrag?","disableDrag?",1272965489));
var show_handle_QMARK_ = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"showHandle?","showHandle?",1302905397),true);
var visible_QMARK_ = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var backdrop_dismiss_QMARK_ = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"backdropDismiss?","backdropDismiss?",-1245893548),true);
var back_button_cancel = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"backButtonCancel","backButtonCancel",387315076),true);
var children = cljs.core.get.call(null,map__18688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var body_ref = quo.react.create_ref.call(null);
var master_ref = quo.react.create_ref.call(null);
var height = quo.react.state.call(null,(0));
var map__18689 = quo.react_native.use_window_dimensions.call(null);
var map__18689__$1 = (((((!((map__18689 == null))))?(((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18689):map__18689);
var window_height = cljs.core.get.call(null,map__18689__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__18690 = quo.react_native.use_keyboard.call(null);
var map__18690__$1 = (((((!((map__18690 == null))))?(((((map__18690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18690):map__18690);
var keyboard_shown = cljs.core.get.call(null,map__18690__$1,new cljs.core.Keyword(null,"keyboard-shown","keyboard-shown",754367849));
var keyboard_height = cljs.core.get.call(null,map__18690__$1,new cljs.core.Keyword(null,"keyboard-height","keyboard-height",691169567));
var keyboard_height_android_delta = (cljs.core.truth_(((quo.platform.android_QMARK_)?keyboard_shown:false))?(keyboard_height + (20)):(0));
var safe_area = react_native.safe_area.get_insets.call(null);
var window_height__$1 = (window_height - ((quo.platform.android_QMARK_)?((50) + keyboard_height_android_delta):(0)));
var min_height = ((quo.components.bottom_sheet.style.vertical_padding * (2)) + new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(safe_area));
var max_height = (window_height__$1 - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(safe_area));
var visible = quo.react.state.call(null,false);
var master_translation_y = quo.animated.use_value.call(null,(0));
var master_velocity_y = quo.animated.use_value.call(null,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
var master_state = quo.animated.use_value.call(null,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
var tap_state = quo.animated.use_value.call(null,(0));
var manual_open = quo.animated.use_value.call(null,(0));
var manual_close = quo.animated.use_value.call(null,(0));
var offset = quo.animated.use_value.call(null,(0));
var drag_over = quo.animated.use_value.call(null,(1));
var clock = quo.animated.use_clock.call(null);
var tap_gesture_handler = quo.animated.use_gesture.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),tap_state], null));
var on_master_event = quo.animated.use_gesture.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"translationY","translationY",-1807608867),master_translation_y,new cljs.core.Keyword(null,"state","state",-1988618099),master_state,new cljs.core.Keyword(null,"velocityY","velocityY",1592757200),master_velocity_y], null));
var on_body_event = on_master_event;
var sheet_height = (function (){var x__4217__auto__ = max_height;
var y__4218__auto__ = (quo.components.bottom_sheet.style.border_radius + cljs.core.deref.call(null,height));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var open_snap_point = quo.animated.use_value.call(null,(0));
var close_snap_point = (0);
var on_close = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,visible))){
cljs.core.reset_BANG_.call(null,visible,false);

cljs.core.reset_BANG_.call(null,height,(0));

if(cljs.core.truth_(on_cancel)){
return on_cancel.call(null);
} else {
return null;
}
} else {
return null;
}
});
var close_sheet = (function (){
return quo.animated.set_value.call(null,manual_close,(1));
});
var on_snap = (function (pos){
if(cljs.core._EQ_.call(null,close_snap_point,(pos[(0)]))){
return on_close();
} else {
return null;
}
});
var interrupted = quo.animated.and_STAR_.call(null,quo.animated.eq.call(null,master_state,new cljs.core.Keyword(null,"began","began",-1662943309).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.clock_running.call(null,clock));
var translate_y = quo.react.use_memo.call(null,(function (){
return quo.animated.with_easing.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),quo.animated.cond_STAR_.call(null,quo.animated.less_or_eq.call(null,master_translation_y,(0)),quo.animated.divide.call(null,master_translation_y,(2)),master_translation_y),new cljs.core.Keyword(null,"velocity","velocity",-581524355),master_velocity_y,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"state","state",-1988618099),master_state,new cljs.core.Keyword(null,"animation-over","animation-over",1973203562),drag_over,new cljs.core.Keyword(null,"snap-points","snap-points",1589490132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_snap_point,close_snap_point], null)], null));
}),cljs.core.PersistentVector.EMPTY);
var opacity = quo.react.use_memo.call(null,(function (){
return quo.animated.cond_STAR_.call(null,open_snap_point,quo.animated.interpolate.call(null,translate_y,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputRange","inputRange",-1662948033),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.multiply.call(null,open_snap_point,quo.components.bottom_sheet.view.opacity_coeff),(0)], null),new cljs.core.Keyword(null,"outputRange","outputRange",-89995927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"extrapolate","extrapolate",-619272306),new cljs.core.Keyword(null,"clamp","clamp",1803814940).cljs$core$IFn$_invoke$arity$1(quo.animated.extrapolate)], null)));
}),cljs.core.PersistentVector.EMPTY);
quo.animated.code_BANG_.call(null,(function (){
return quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,quo.animated.eq.call(null,master_state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.not_STAR_.call(null,drag_over)),quo.animated.call_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [translate_y], null),on_snap));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_snap], null));

quo.animated.code_BANG_.call(null,(function (){
return quo.animated.block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,interrupted,manual_open),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,manual_open,(0)),quo.animated.set.call(null,offset,open_snap_point),quo.animated.stop_clock.call(null,clock)], null)),quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,manual_open,quo.animated.not_STAR_.call(null,manual_close)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,offset,quo.animated.re_spring.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),offset,new cljs.core.Keyword(null,"to","to",192099007),open_snap_point,new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"config","config",994861415),quo.components.bottom_sheet.view.spring_config], null))),quo.animated.cond_STAR_.call(null,quo.animated.not_STAR_.call(null,quo.animated.clock_running.call(null,clock)),quo.animated.set.call(null,manual_open,(0)))], null))], null));
}),cljs.core.PersistentVector.EMPTY);

quo.animated.code_BANG_.call(null,(function (){
return quo.animated.block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,interrupted,manual_close),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,manual_close,(0)),quo.animated.set.call(null,offset,close_snap_point),quo.animated.call_STAR_.call(null,cljs.core.PersistentVector.EMPTY,on_close),quo.animated.stop_clock.call(null,clock)], null)),quo.animated.cond_STAR_.call(null,quo.animated.eq.call(null,tap_state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,quo.animated.not_STAR_.call(null,manual_close)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.stop_clock.call(null,clock),quo.animated.set.call(null,manual_close,(1))], null)),quo.animated.set.call(null,tap_state,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states))], null)),quo.animated.cond_STAR_.call(null,manual_close,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,offset,quo.animated.re_timing.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),offset,new cljs.core.Keyword(null,"to","to",192099007),close_snap_point,new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"ease-out","ease-out",1760664474).cljs$core$IFn$_invoke$arity$1(quo.animated.easings),new cljs.core.Keyword(null,"duration","duration",1444101068),quo.components.bottom_sheet.view.close_duration], null))),quo.animated.cond_STAR_.call(null,quo.animated.not_STAR_.call(null,quo.animated.clock_running.call(null,clock)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,manual_close,(0)),quo.animated.set.call(null,manual_open,(0)),quo.animated.call_STAR_.call(null,cljs.core.PersistentVector.EMPTY,on_close)], null))], null))], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_cancel], null));

quo.animated.code_BANG_.call(null,(function (){
return quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,quo.animated.not_STAR_.call(null,manual_close),(cljs.core.truth_(cljs.core.deref.call(null,visible))?(1):(0)),(((cljs.core.deref.call(null,height) > min_height))?(1):(0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.stop_clock.call(null,clock),quo.animated.set.call(null,open_snap_point,((-1) * sheet_height)),quo.animated.set.call(null,manual_open,(1))], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,height),cljs.core.deref.call(null,visible)], null));

quo.react_native.use_back_handler.call(null,(function (){
if(cljs.core.truth_(back_button_cancel)){
close_sheet();
} else {
}

return cljs.core.deref.call(null,visible);
}));

quo.react.effect_BANG_.call(null,(function (){
if(cljs.core.truth_(visible_QMARK_)){
quo.react_native.dismiss_keyboard_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,visible,visible_QMARK_);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,visible))){
return close_sheet();
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [visible_QMARK_], null));

return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.bottom_sheet.style.container,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.tap_gesture_handler,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),backdrop_dismiss_QMARK_], null),tap_gesture_handler),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.bottom_sheet.style.backdrop.call(null),((quo.platform.ios_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null):null))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.bottom_sheet.style.content_container.call(null,window_height__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translateY","translateY",1140534123),((cljs.core._EQ_.call(null,sheet_height,max_height))?quo.animated.add.call(null,translate_y,keyboard_height_android_delta):translate_y)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translateY","translateY",1140534123),(window_height__$1 * (2))], null)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.pan_gesture_handler,cljs.core.merge.call(null,on_master_event,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),master_ref,new cljs.core.Keyword(null,"wait-for","wait-for",603509654),body_ref,new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.not(disable_drag_QMARK_)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.bottom_sheet.style.content_header], null),(cljs.core.truth_(show_handle_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.bottom_sheet.style.handle], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.pan_gesture_handler,cljs.core.merge.call(null,on_body_event,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),body_ref,new cljs.core.Keyword(null,"wait-for","wait-for",603509654),master_ref,new cljs.core.Keyword(null,"enabled","enabled",1195909756),((cljs.core.not(disable_drag_QMARK_)) && (cljs.core.not_EQ_.call(null,sheet_height,max_height)))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),sheet_height,new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),quo.components.bottom_sheet.style.vertical_padding,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(quo.components.bottom_sheet.style.vertical_padding + (cljs.core.truth_(((quo.platform.ios_QMARK_)?keyboard_shown:false))?keyboard_height:new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(safe_area)))], null),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),(function (p1__18683_SHARP_){
return cljs.core.reset_BANG_.call(null,height,p1__18683_SHARP_.nativeEvent.layout.height);
})], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),quo.react.get_children.call(null,children))], null)], null)], null)], null)], null));
});
quo.components.bottom_sheet.view.bottom_sheet = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.bottom_sheet.view.bottom_sheet_hooks));
Object.defineProperty(module.exports, "opacity_coeff", { enumerable: false, get: function() { return quo.components.bottom_sheet.view.opacity_coeff; } });
Object.defineProperty(module.exports, "close_duration", { enumerable: false, get: function() { return quo.components.bottom_sheet.view.close_duration; } });
Object.defineProperty(module.exports, "spring_config", { enumerable: false, get: function() { return quo.components.bottom_sheet.view.spring_config; } });
Object.defineProperty(module.exports, "bottom_sheet_hooks", { enumerable: false, get: function() { return quo.components.bottom_sheet.view.bottom_sheet_hooks; } });
Object.defineProperty(module.exports, "bottom_sheet", { enumerable: false, get: function() { return quo.components.bottom_sheet.view.bottom_sheet; } });
//# sourceMappingURL=quo.components.bottom_sheet.view.js.map
