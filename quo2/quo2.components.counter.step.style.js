var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.counter.step.style.js");

goog.provide('quo2.components.counter.step.style');
quo2.components.counter.step.style.container_base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null);
quo2.components.counter.step.style.neutral_border_color = (function quo2$components$counter$step$style$neutral_border_color(in_blur_view_QMARK_,override_theme){
if(cljs.core.truth_(in_blur_view_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_5,quo2.foundations.colors.white_opa_10,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80,override_theme);
}
});
quo2.components.counter.step.style.active_background_color = quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"blue","blue",-622100620),(50),(10));
quo2.components.counter.step.style.complete_background_color = quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"blue","blue",-622100620),(50));
quo2.components.counter.step.style.container = (function quo2$components$counter$step$style$container(size,type,in_blur_view_QMARK_,override_theme){
var G__16910 = quo2.components.counter.step.style.container_base;
var G__16910__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,size))?cljs.core.assoc.call(null,G__16910,new cljs.core.Keyword(null,"width","width",-384071477),(20)):G__16910);
var G__16910__$2 = ((cljs.core._EQ_.call(null,size,(3)))?cljs.core.assoc.call(null,G__16910__$1,new cljs.core.Keyword(null,"width","width",-384071477),(28)):G__16910__$1);
var G__16910__$3 = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"neutral","neutral",-1941956087)))?cljs.core.assoc.call(null,G__16910__$2,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.counter.step.style.neutral_border_color.call(null,in_blur_view_QMARK_,override_theme)):G__16910__$2);
var G__16910__$4 = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"active","active",1895962068)))?cljs.core.assoc.call(null,G__16910__$3,new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.counter.step.style.active_background_color):G__16910__$3);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"complete","complete",-500388775))){
return cljs.core.assoc.call(null,G__16910__$4,new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.counter.step.style.complete_background_color);
} else {
return G__16910__$4;
}
});
quo2.components.counter.step.style.text_color = (function quo2$components$counter$step$style$text_color(var_args){
var G__16915 = arguments.length;
switch (G__16915) {
case 1:
return quo2.components.counter.step.style.text_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo2.components.counter.step.style.text_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.components.counter.step.style.text_color.cljs$core$IFn$_invoke$arity$1 = (function (type){
return quo2.components.counter.step.style.text_color.call(null,type,null);
}));

(quo2.components.counter.step.style.text_color.cljs$core$IFn$_invoke$arity$2 = (function (type,override_theme){
var G__16916 = type;
var G__16916__$1 = (((G__16916 instanceof cljs.core.Keyword))?G__16916.fqn:null);
switch (G__16916__$1) {
case "neutral":
case "active":
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100_opa_100,quo2.foundations.colors.white,override_theme);

break;
case "complete":
return quo2.foundations.colors.white;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16916__$1)].join('')));

}
}));

(quo2.components.counter.step.style.text_color.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "container_base", { enumerable: false, get: function() { return quo2.components.counter.step.style.container_base; } });
Object.defineProperty(module.exports, "neutral_border_color", { enumerable: false, get: function() { return quo2.components.counter.step.style.neutral_border_color; } });
Object.defineProperty(module.exports, "active_background_color", { enumerable: false, get: function() { return quo2.components.counter.step.style.active_background_color; } });
Object.defineProperty(module.exports, "complete_background_color", { enumerable: false, get: function() { return quo2.components.counter.step.style.complete_background_color; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.counter.step.style.container; } });
Object.defineProperty(module.exports, "text_color", { enumerable: false, get: function() { return quo2.components.counter.step.style.text_color; } });
//# sourceMappingURL=quo2.components.counter.step.style.js.map
