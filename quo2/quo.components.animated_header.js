var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo.animated.js");
require("./quo.components.header.js");
require("./quo.design_system.colors.js");
require("./quo.platform.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.animated_header.js");

goog.provide('quo.components.animated_header');
quo.components.animated_header.header_wrapper_style = (function quo$components$animated_header$header_wrapper_style(p__19125){
var map__19126 = p__19125;
var map__19126__$1 = (((((!((map__19126 == null))))?(((((map__19126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19126):map__19126);
var value = cljs.core.get.call(null,map__19126__$1,new cljs.core.Keyword(null,"value","value",305978217));
var offset = cljs.core.get.call(null,map__19126__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null),(cljs.core.truth_((function (){var and__4115__auto__ = offset;
if(cljs.core.truth_(and__4115__auto__)){
return quo.platform.android_QMARK_;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),quo.animated.interpolate.call(null,value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputRange","inputRange",-1662948033),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offset], null),new cljs.core.Keyword(null,"outputRange","outputRange",-89995927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.Keyword(null,"extrapolate","extrapolate",-619272306),new cljs.core.Keyword(null,"clamp","clamp",1803814940).cljs$core$IFn$_invoke$arity$1(quo.animated.extrapolate)], null))], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = offset;
if(cljs.core.truth_(and__4115__auto__)){
return quo.platform.ios_QMARK_;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),quo.animated.interpolate.call(null,value,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputRange","inputRange",-1662948033),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),offset], null),new cljs.core.Keyword(null,"outputRange","outputRange",-89995927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"extrapolate","extrapolate",-619272306),new cljs.core.Keyword(null,"clamp","clamp",1803814940).cljs$core$IFn$_invoke$arity$1(quo.animated.extrapolate)], null)),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16),new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null)], null):null));
});
quo.components.animated_header.title_style = (function quo$components$animated_header$title_style(layout){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),cljs.core.get_in.call(null,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477)], null))], null);
});
quo.components.animated_header.header_container = (function quo$components$animated_header$header_container(){
var y = quo.animated.value.call(null,(0));
var animation_value = quo.animated.value.call(null,(0));
var animation = quo.animated.with_timing_transition.call(null,animation_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(250),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"ease-in","ease-in",-819423123).cljs$core$IFn$_invoke$arity$1(quo.animated.easings)], null));
var on_scroll = quo.animated.on_scroll.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
var layout = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var offset = reagent.core.atom.call(null,(0));
var on_layout = (function (evt){
return cljs.core.reset_BANG_.call(null,offset,(function (){var target_obj_19132 = evt;
var _STAR_runtime_state_STAR__orig_val__19139 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19140 = oops.state.prepare_state.call(null,target_obj_19132,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19140);

try{var next_obj_19133 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19132,(0),"nativeEvent",true,true,false))?(target_obj_19132["nativeEvent"]):null);
var next_obj_19134 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19133,(0),"layout",true,true,false))?(next_obj_19133["layout"]):null);
var next_obj_19135 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19134,(0),"height",true,true,false))?(next_obj_19134["height"]):null);
return next_obj_19135;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19139);
}})());
});
return (function (p__19147,children){
var map__19148 = p__19147;
var map__19148__$1 = (((((!((map__19148 == null))))?(((((map__19148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19148):map__19148);
var props = map__19148__$1;
var extended_header = cljs.core.get.call(null,map__19148__$1,new cljs.core.Keyword(null,"extended-header","extended-header",1373771917));
var refresh_control = cljs.core.get.call(null,map__19148__$1,new cljs.core.Keyword(null,"refresh-control","refresh-control",2085705898));
var refreshing_sub = cljs.core.get.call(null,map__19148__$1,new cljs.core.Keyword(null,"refreshing-sub","refreshing-sub",-2019626341));
var refreshing_counter = cljs.core.get.call(null,map__19148__$1,new cljs.core.Keyword(null,"refreshing-counter","refreshing-counter",840463444));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.code,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offset)),new cljs.core.Keyword(null,"exec","exec",1625568743),quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,quo.animated.greater_or_eq.call(null,y,cljs.core.deref.call(null,offset)),quo.animated.greater_or_eq.call(null,y,(1))),quo.animated.set.call(null,animation_value,(1)),quo.animated.set.call(null,animation_value,(0)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338),new cljs.core.Keyword(null,"style","style",-496642736),quo.components.animated_header.header_wrapper_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),y,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.deref.call(null,offset)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.header.header,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-layout","get-layout",-718965838),(function (el,l){
return cljs.core.swap_BANG_.call(null,layout,cljs.core.assoc,el,l);
}),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),false,new cljs.core.Keyword(null,"title-component","title-component",-1035418730),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.animated_header.title_style.call(null,cljs.core.deref.call(null,layout))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extended_header,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),y,new cljs.core.Keyword(null,"animation","animation",-1248293244),animation,new cljs.core.Keyword(null,"minimized","minimized",-615970902),true,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.deref.call(null,offset)], null)], null)], null),new cljs.core.Keyword(null,"title-align","title-align",27439503),new cljs.core.Keyword(null,"left","left",-399115937)], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"extended-header","extended-header",1373771917)))], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.scroll_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),on_scroll,new cljs.core.Keyword(null,"refreshControl","refreshControl",-704602159),(cljs.core.truth_(refresh_control)?refresh_control.call(null,(function (){var and__4115__auto__ = cljs.core.deref.call(null,refreshing_sub);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,refreshing_counter);
} else {
return and__4115__auto__;
}
})()):null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),new cljs.core.Keyword(null,"scrollEventThrottle","scrollEventThrottle",185143551),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),on_layout], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extended_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),y,new cljs.core.Keyword(null,"animation","animation",-1248293244),animation,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.deref.call(null,offset)], null)], null)], null)], null)], null),children)], null);
});
});
quo.components.animated_header.header = (function quo$components$animated_header$header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19219 = arguments.length;
var i__4737__auto___19220 = (0);
while(true){
if((i__4737__auto___19220 < len__4736__auto___19219)){
args__4742__auto__.push((arguments[i__4737__auto___19220]));

var G__19221 = (i__4737__auto___19220 + (1));
i__4737__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo.components.animated_header.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo.components.animated_header.header.cljs$core$IFn$_invoke$arity$variadic = (function (p__19187,children){
var map__19189 = p__19187;
var map__19189__$1 = (((((!((map__19189 == null))))?(((((map__19189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19189):map__19189);
var props = map__19189__$1;
var use_insets = cljs.core.get.call(null,map__19189__$1,new cljs.core.Keyword(null,"use-insets","use-insets",-1063377533));
if(cljs.core.truth_(use_insets)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.animated_header.header_container,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"use-insets","use-insets",-1063377533)),new cljs.core.Keyword(null,"insets","insets",596585768),react_native.safe_area.get_insets.call(null)),children], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.animated_header.header_container,props,children], null);
}
}));

(quo.components.animated_header.header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo.components.animated_header.header.cljs$lang$applyTo = (function (seq19153){
var G__19158 = cljs.core.first.call(null,seq19153);
var seq19153__$1 = cljs.core.next.call(null,seq19153);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19158,seq19153__$1);
}));

Object.defineProperty(module.exports, "header_wrapper_style", { enumerable: false, get: function() { return quo.components.animated_header.header_wrapper_style; } });
Object.defineProperty(module.exports, "title_style", { enumerable: false, get: function() { return quo.components.animated_header.title_style; } });
Object.defineProperty(module.exports, "header_container", { enumerable: false, get: function() { return quo.components.animated_header.header_container; } });
Object.defineProperty(module.exports, "header", { enumerable: false, get: function() { return quo.components.animated_header.header; } });
//# sourceMappingURL=quo.components.animated_header.js.map
