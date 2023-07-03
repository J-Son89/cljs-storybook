var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo.animated.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.spacing.js");
require("./quo.platform.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.tooltip.js");

goog.provide('quo.components.tooltip');
quo.components.tooltip.initial_height = (22);
quo.components.tooltip.tooltip_style = (function quo$components$tooltip$tooltip_style(p__18962){
var map__18964 = p__18962;
var map__18964__$1 = (((((!((map__18964 == null))))?(((((map__18964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18964):map__18964);
var bottom_value = cljs.core.get.call(null,map__18964__$1,new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717));
var animation = cljs.core.get.call(null,map__18964__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(- bottom_value),new cljs.core.Keyword(null,"opacity","opacity",397153780),animation,new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translateY","translateY",1140534123),quo.animated.mix.call(null,animation,(10),(0))], null)], null)], null));
});
quo.components.tooltip.container_style = (function quo$components$tooltip$container_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null)], null);
});
quo.components.tooltip.content_style = (function quo$components$tooltip$content_style(){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(6),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8)], null));
});
quo.components.tooltip.tooltip = (function quo$components$tooltip$tooltip(){
var layout = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),quo.components.tooltip.initial_height], null));
var animation_v = quo.animated.value.call(null,(0));
var animation = quo.animated.with_timing_transition.call(null,animation_v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"ease-in","ease-in",-819423123).cljs$core$IFn$_invoke$arity$1(quo.animated.easings)], null));
var on_layout = (function (evt){
var width = (function (){var target_obj_18967 = evt;
var _STAR_runtime_state_STAR__orig_val__18974 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__18975 = oops.state.prepare_state.call(null,target_obj_18967,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__18975);

try{var next_obj_18970 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_18967,(0),"nativeEvent",true,true,false))?(target_obj_18967["nativeEvent"]):null);
var next_obj_18971 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_18970,(0),"layout",true,true,false))?(next_obj_18970["layout"]):null);
var next_obj_18972 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_18971,(0),"width",true,true,false))?(next_obj_18971["width"]):null);
return next_obj_18972;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__18974);
}})();
var height = (function (){var target_obj_18985 = evt;
var _STAR_runtime_state_STAR__orig_val__18993 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__18994 = oops.state.prepare_state.call(null,target_obj_18985,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__18994);

try{var next_obj_18990 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_18985,(0),"nativeEvent",true,true,false))?(target_obj_18985["nativeEvent"]):null);
var next_obj_18991 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_18990,(0),"layout",true,true,false))?(next_obj_18990["layout"]):null);
var next_obj_18992 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_18991,(0),"height",true,true,false))?(next_obj_18991["height"]):null);
return next_obj_18992;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__18993);
}})();
return cljs.core.reset_BANG_.call(null,layout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
});
return (function() { 
var G__19011__delegate = function (p__19001,children){
var map__19004 = p__19001;
var map__19004__$1 = (((((!((map__19004 == null))))?(((((map__19004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19004):map__19004);
var bottom_value = cljs.core.get.call(null,map__19004__$1,new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717));
var accessibility_label = cljs.core.get.call(null,map__19004__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exec","exec",1625568743),quo.animated.cond_STAR_.call(null,quo.animated.not_STAR_.call(null,animation_v),quo.animated.set.call(null,animation_v,(1)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.tooltip.tooltip_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717),(cljs.core.get.call(null,cljs.core.deref.call(null,layout),new cljs.core.Keyword(null,"height","height",1025178622)) - bottom_value),new cljs.core.Keyword(null,"animation","animation",-1248293244),animation], null)),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.tooltip.container_style.call(null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.tooltip.content_style.call(null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),on_layout], null)], null),children),((quo.platform.ios_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,new cljs.core.Keyword("icons","tooltip-tip","icons/tooltip-tip",980619855),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(18),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(3)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null)], null):null)], null)], null)], null);
};
var G__19011 = function (p__19001,var_args){
var children = null;
if (arguments.length > 1) {
var G__19013__i = 0, G__19013__a = new Array(arguments.length -  1);
while (G__19013__i < G__19013__a.length) {G__19013__a[G__19013__i] = arguments[G__19013__i + 1]; ++G__19013__i;}
  children = new cljs.core.IndexedSeq(G__19013__a,0,null);
} 
return G__19011__delegate.call(this,p__19001,children);};
G__19011.cljs$lang$maxFixedArity = 1;
G__19011.cljs$lang$applyTo = (function (arglist__19015){
var p__19001 = cljs.core.first(arglist__19015);
var children = cljs.core.rest(arglist__19015);
return G__19011__delegate(p__19001,children);
});
G__19011.cljs$core$IFn$_invoke$arity$variadic = G__19011__delegate;
return G__19011;
})()
;
});
Object.defineProperty(module.exports, "initial_height", { enumerable: false, get: function() { return quo.components.tooltip.initial_height; } });
Object.defineProperty(module.exports, "tooltip_style", { enumerable: false, get: function() { return quo.components.tooltip.tooltip_style; } });
Object.defineProperty(module.exports, "container_style", { enumerable: false, get: function() { return quo.components.tooltip.container_style; } });
Object.defineProperty(module.exports, "content_style", { enumerable: false, get: function() { return quo.components.tooltip.content_style; } });
Object.defineProperty(module.exports, "tooltip", { enumerable: false, get: function() { return quo.components.tooltip.tooltip; } });
//# sourceMappingURL=quo.components.tooltip.js.map
