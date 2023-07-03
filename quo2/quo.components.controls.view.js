var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs_bean.core.js");
require("./quo.animated.js");
require("./quo.components.controls.styles.js");
require("./quo.design_system.colors.js");
require("./quo.gesture_handler.js");
require("./quo.react.js");
require("./quo.react_native.js");
require("./reagent.core.js");
require("./status_im.ui.components.icons.icons.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.controls.view.js");

goog.provide('quo.components.controls.view');
quo.components.controls.view.control_builder = (function quo$components$controls$view$control_builder(component){
return (function (props){
var map__18960 = cljs_bean.core.bean.call(null,props);
var map__18960__$1 = (((((!((map__18960 == null))))?(((((map__18960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18960):map__18960);
var value = cljs.core.get.call(null,map__18960__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.call(null,map__18960__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var disabled = cljs.core.get.call(null,map__18960__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var state = quo.animated.use_value.call(null,(0));
var tap_state = quo.animated.use_value.call(null,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
var tap_handler = quo.animated.on_gesture.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),tap_state], null));
var hold = quo.react.use_memo.call(null,(function (){
return quo.animated.with_timing_transition.call(null,quo.animated.eq.call(null,tap_state,new cljs.core.Keyword(null,"began","began",-1662943309).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.PersistentVector.EMPTY);
var transition = quo.react.use_memo.call(null,(function (){
return quo.animated.with_spring_transition.call(null,state,new cljs.core.Keyword(null,"lazy","lazy",-424547181).cljs$core$IFn$_invoke$arity$1(quo.animated.springs));
}),cljs.core.PersistentVector.EMPTY);
var press_end = (function (){
if(cljs.core.truth_(((cljs.core.not(disabled))?onChange:false))){
return onChange.call(null,cljs.core.not(value));
} else {
return null;
}
});
quo.animated.code_BANG_.call(null,(function (){
return quo.animated.cond_STAR_.call(null,quo.animated.eq.call(null,tap_state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,state,quo.animated.not_STAR_.call(null,state)),quo.animated.set.call(null,tap_state,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.call_STAR_.call(null,cljs.core.PersistentVector.EMPTY,press_end)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [press_end], null));

quo.animated.code_BANG_.call(null,(function (){
return quo.animated.set.call(null,state,((value === true)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));

return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.tap_gesture_handler,cljs.core.merge.call(null,tap_handler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldCancelWhenOutside","shouldCancelWhenOutside",-1515006820),true,new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.boolean$.call(null,(function (){var and__4115__auto__ = onChange;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled);
} else {
return and__4115__auto__;
}
})())], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition","transition",765692007),transition,new cljs.core.Keyword(null,"hold","hold",-1621118005),hold,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)], null)], null)], null));
});
});
quo.components.controls.view.switch_view = (function quo$components$controls$view$switch_view(p__18968){
var map__18969 = p__18968;
var map__18969__$1 = (((((!((map__18969 == null))))?(((((map__18969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18969):map__18969);
var transition = cljs.core.get.call(null,map__18969__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var hold = cljs.core.get.call(null,map__18969__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
var disabled = cljs.core.get.call(null,map__18969__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.call(null,map__18969__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.switch_style.call(null,transition,disabled),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),["switch-",(cljs.core.truth_(value)?"on":"off")].join(''),new cljs.core.Keyword(null,"accessibility-role","accessibility-role",1740020433),new cljs.core.Keyword(null,"switch","switch",71881310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.switch_bullet_style.call(null,transition,hold)], null)], null)], null);
});
quo.components.controls.view.radio_view = (function quo$components$controls$view$radio_view(p__18979){
var map__18980 = p__18979;
var map__18980__$1 = (((((!((map__18980 == null))))?(((((map__18980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18980):map__18980);
var transition = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var hold = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
var disabled = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.radio_style.call(null,transition,disabled),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),["radio-",(cljs.core.truth_(value)?"on":"off")].join(''),new cljs.core.Keyword(null,"accessibility-role","accessibility-role",1740020433),new cljs.core.Keyword(null,"radio","radio",1323726374)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.radio_bullet_style.call(null,transition,hold)], null)], null)], null);
});
quo.components.controls.view.checkbox_view = (function quo$components$controls$view$checkbox_view(props){
var map__18987 = cljs_bean.core.bean.call(null,props);
var map__18987__$1 = (((((!((map__18987 == null))))?(((((map__18987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18987):map__18987);
var value = cljs.core.get.call(null,map__18987__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.call(null,map__18987__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var disabled = cljs.core.get.call(null,map__18987__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(cljs.core.truth_((function (){var and__4115__auto__ = onChange;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled);
} else {
return and__4115__auto__;
}
})())?onChange:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.checkbox_style.call(null,value,disabled),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),["checkbox-",(cljs.core.truth_(value)?"on":"off")].join(''),new cljs.core.Keyword(null,"accessibility-role","accessibility-role",1740020433),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.check_icon_style.call(null,value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.tiny_icon,new cljs.core.Keyword("tiny-icons","tiny-check","tiny-icons/tiny-check",492835009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo.design_system.colors.white], null)], null)], null)], null)], null));
});
quo.components.controls.view.animated_checkbox_view = (function quo$components$controls$view$animated_checkbox_view(p__18995){
var map__18999 = p__18995;
var map__18999__$1 = (((((!((map__18999 == null))))?(((((map__18999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18999):map__18999);
var transition = cljs.core.get.call(null,map__18999__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var hold = cljs.core.get.call(null,map__18999__$1,new cljs.core.Keyword(null,"hold","hold",-1621118005));
var disabled = cljs.core.get.call(null,map__18999__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var value = cljs.core.get.call(null,map__18999__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.animated_checkbox_style.call(null,transition,disabled),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),["checkbox-",(cljs.core.truth_(value)?"on":"off")].join(''),new cljs.core.Keyword(null,"accessibility-role","accessibility-role",1740020433),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.controls.styles.animated_check_icon_style.call(null,transition,hold)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.tiny_icon,new cljs.core.Keyword("tiny-icons","tiny-check","tiny-icons/tiny-check",492835009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo.design_system.colors.white], null)], null)], null)], null);
});
quo.components.controls.view.switch$ = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.controls.view.control_builder.call(null,quo.components.controls.view.switch_view)));
quo.components.controls.view.radio = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.controls.view.control_builder.call(null,quo.components.controls.view.radio_view)));
quo.components.controls.view.animated_checkbox = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.controls.view.control_builder.call(null,quo.components.controls.view.animated_checkbox_view)));
quo.components.controls.view.checkbox = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.controls.view.checkbox_view));
Object.defineProperty(module.exports, "switch$", { enumerable: false, get: function() { return quo.components.controls.view.switch$; } });
Object.defineProperty(module.exports, "checkbox_view", { enumerable: false, get: function() { return quo.components.controls.view.checkbox_view; } });
Object.defineProperty(module.exports, "animated_checkbox_view", { enumerable: false, get: function() { return quo.components.controls.view.animated_checkbox_view; } });
Object.defineProperty(module.exports, "radio", { enumerable: false, get: function() { return quo.components.controls.view.radio; } });
Object.defineProperty(module.exports, "checkbox", { enumerable: false, get: function() { return quo.components.controls.view.checkbox; } });
Object.defineProperty(module.exports, "radio_view", { enumerable: false, get: function() { return quo.components.controls.view.radio_view; } });
Object.defineProperty(module.exports, "control_builder", { enumerable: false, get: function() { return quo.components.controls.view.control_builder; } });
Object.defineProperty(module.exports, "animated_checkbox", { enumerable: false, get: function() { return quo.components.controls.view.animated_checkbox; } });
Object.defineProperty(module.exports, "switch_view", { enumerable: false, get: function() { return quo.components.controls.view.switch_view; } });
//# sourceMappingURL=quo.components.controls.view.js.map
