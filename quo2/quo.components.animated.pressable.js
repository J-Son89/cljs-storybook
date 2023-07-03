var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs_bean.core.js");
require("./quo.animated.js");
require("./quo.gesture_handler.js");
require("./quo.react.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.animated.pressable.js");

goog.provide('quo.components.animated.pressable');
quo.components.animated.pressable.long_press_duration = (500);
quo.components.animated.pressable.scale_down_small = 0.95;
quo.components.animated.pressable.scale_down_large = 0.9;
quo.components.animated.pressable.opactiy = 0.75;
quo.components.animated.pressable.time_in = (100);
quo.components.animated.pressable.time_out = (200);
if((typeof quo !== 'undefined') && (typeof quo.components !== 'undefined') && (typeof quo.components.animated !== 'undefined') && (typeof quo.components.animated.pressable !== 'undefined') && (typeof quo.components.animated.pressable.type__GT_animation !== 'undefined')){
} else {
quo.components.animated.pressable.type__GT_animation = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"quo.components.animated.pressable","type->animation"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method(quo.components.animated.pressable.type__GT_animation,new cljs.core.Keyword(null,"primary","primary",817773892),(function (p__18087){
var map__18088 = p__18087;
var map__18088__$1 = (((((!((map__18088 == null))))?(((((map__18088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18088):map__18088);
var animation = cljs.core.get.call(null,map__18088__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_small)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_small)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null)], null);
}));
cljs.core._add_method(quo.components.animated.pressable.type__GT_animation,new cljs.core.Keyword(null,"secondary","secondary",-669381460),(function (p__18096){
var map__18097 = p__18096;
var map__18097__$1 = (((((!((map__18097 == null))))?(((((map__18097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18097):map__18097);
var animation = cljs.core.get.call(null,map__18097__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,quo.components.animated.pressable.scale_down_small,(1))], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(0),quo.components.animated.pressable.opactiy)], null),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_small)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null)], null);
}));
cljs.core._add_method(quo.components.animated.pressable.type__GT_animation,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (p__18100){
var map__18101 = p__18100;
var map__18101__$1 = (((((!((map__18101 == null))))?(((((map__18101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18101):map__18101);
var animation = cljs.core.get.call(null,map__18101__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,quo.components.animated.pressable.scale_down_large,(1))], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(0),quo.components.animated.pressable.opactiy)], null),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_large)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null)], null);
}));
cljs.core._add_method(quo.components.animated.pressable.type__GT_animation,new cljs.core.Keyword(null,"list-item","list-item",-999803634),(function (p__18111){
var map__18112 = p__18111;
var map__18112__$1 = (((((!((map__18112 == null))))?(((((map__18112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18112):map__18112);
var animation = cljs.core.get.call(null,map__18112__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(0),quo.components.animated.pressable.opactiy)], null),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_small)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null)], null);
}));
cljs.core._add_method(quo.components.animated.pressable.type__GT_animation,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__18115){
var map__18116 = p__18115;
var map__18116__$1 = (((((!((map__18116 == null))))?(((((map__18116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18116):map__18116);
var animation = cljs.core.get.call(null,map__18116__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.scale_down_small)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,animation,(1),quo.components.animated.pressable.opactiy)], null)], null);
}));
quo.components.animated.pressable.absolute_fill = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null);
quo.components.animated.pressable.pressable_hooks = (function quo$components$animated$pressable$pressable_hooks(props){
var map__18125 = cljs_bean.core.bean.call(null,props);
var map__18125__$1 = (((((!((map__18125 == null))))?(((((map__18125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18125):map__18125);
var on_press_start = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"onPressStart","onPressStart",485498774));
var border_radius = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(0));
var on_long_press = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"onLongPress","onLongPress",2062959144));
var on_press = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"onPress","onPress",-1383694171));
var children = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var disabled = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessibility_label = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"accessibilityLabel","accessibilityLabel",-159475382));
var background_color = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"bgColor","bgColor",-125329317));
var type = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"type","type",1174270348),"primary");
var border_width = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350));
var border_color = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"borderColor","borderColor",1372977096));
var long_press_ref = quo.react.create_ref.call(null);
var state = quo.animated.use_value.call(null,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
var active = quo.animated.eq.call(null,state,new cljs.core.Keyword(null,"began","began",-1662943309).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
var gesture_handler = quo.animated.use_gesture.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
var animation = quo.react.use_memo.call(null,(function (){
return quo.animated.with_timing_transition.call(null,active,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),quo.animated.cond_STAR_.call(null,active,quo.components.animated.pressable.time_in,quo.components.animated.pressable.time_out),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"ease-in","ease-in",-819423123).cljs$core$IFn$_invoke$arity$1(quo.animated.easings)], null));
}),cljs.core.PersistentVector.EMPTY);
var map__18126 = quo.react.use_memo.call(null,(function (){
return quo.components.animated.pressable.type__GT_animation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,type),new cljs.core.Keyword(null,"animation","animation",-1248293244),animation], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
var map__18126__$1 = (((((!((map__18126 == null))))?(((((map__18126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18126):map__18126);
var background = cljs.core.get.call(null,map__18126__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var foreground = cljs.core.get.call(null,map__18126__$1,new cljs.core.Keyword(null,"foreground","foreground",499022036));
var handle_press = (function (){
if(cljs.core.truth_(on_press)){
return on_press.call(null);
} else {
return null;
}
});
var long_gesture_handler = quo.react.callback.call(null,(function (evt){
var gesture_state = evt.nativeEvent.state;
if(cljs.core.truth_((function (){var and__4115__auto__ = on_press_start;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,gesture_state,new cljs.core.Keyword(null,"began","began",-1662943309).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
} else {
return and__4115__auto__;
}
})())){
on_press_start.call(null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = on_long_press;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,gesture_state,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
} else {
return and__4115__auto__;
}
})())){
on_long_press.call(null);

return quo.animated.set_value.call(null,state,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_long_press,on_press_start], null));
quo.animated.code_BANG_.call(null,(function (){
if(cljs.core.truth_(on_press)){
return quo.animated.cond_STAR_.call(null,quo.animated.eq.call(null,state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,state,new cljs.core.Keyword(null,"undetermined","undetermined",330177545).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.call_STAR_.call(null,cljs.core.PersistentVector.EMPTY,handle_press)], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_press], null));

return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.long_press_gesture_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.boolean$.call(null,(function (){var and__4115__auto__ = on_long_press;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled);
} else {
return and__4115__auto__;
}
})()),new cljs.core.Keyword(null,"on-handler-state-change","on-handler-state-change",2141730605),long_gesture_handler,new cljs.core.Keyword(null,"min-duration-ms","min-duration-ms",-49024394),quo.components.animated.pressable.long_press_duration,new cljs.core.Keyword(null,"max-dist","max-dist",-785545881),(22),new cljs.core.Keyword(null,"ref","ref",1289896967),long_press_ref], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.tap_gesture_handler,cljs.core.merge.call(null,gesture_handler,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldCancelWhenOutside","shouldCancelWhenOutside",-1515006820),true,new cljs.core.Keyword(null,"wait-for","wait-for",603509654),long_press_ref,new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.boolean$.call(null,(function (){var and__4115__auto__ = (function (){var or__4126__auto__ = on_press;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = on_long_press;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return on_press_start;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled);
} else {
return and__4115__auto__;
}
})())], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.animated.pressable.absolute_fill,background,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),border_radius,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),border_width], null))], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),foreground], null)], null),quo.react.get_children.call(null,children))], null)], null)], null)], null));
});
quo.components.animated.pressable.pressable = reagent.core.adapt_react_class.call(null,quo.react.memo.call(null,quo.components.animated.pressable.pressable_hooks));
Object.defineProperty(module.exports, "pressable", { enumerable: false, get: function() { return quo.components.animated.pressable.pressable; } });
Object.defineProperty(module.exports, "scale_down_small", { enumerable: false, get: function() { return quo.components.animated.pressable.scale_down_small; } });
Object.defineProperty(module.exports, "type__GT_animation", { enumerable: false, get: function() { return quo.components.animated.pressable.type__GT_animation; } });
Object.defineProperty(module.exports, "time_in", { enumerable: false, get: function() { return quo.components.animated.pressable.time_in; } });
Object.defineProperty(module.exports, "time_out", { enumerable: false, get: function() { return quo.components.animated.pressable.time_out; } });
Object.defineProperty(module.exports, "absolute_fill", { enumerable: false, get: function() { return quo.components.animated.pressable.absolute_fill; } });
Object.defineProperty(module.exports, "long_press_duration", { enumerable: false, get: function() { return quo.components.animated.pressable.long_press_duration; } });
Object.defineProperty(module.exports, "pressable_hooks", { enumerable: false, get: function() { return quo.components.animated.pressable.pressable_hooks; } });
Object.defineProperty(module.exports, "scale_down_large", { enumerable: false, get: function() { return quo.components.animated.pressable.scale_down_large; } });
Object.defineProperty(module.exports, "opactiy", { enumerable: false, get: function() { return quo.components.animated.pressable.opactiy; } });
//# sourceMappingURL=quo.components.animated.pressable.js.map
