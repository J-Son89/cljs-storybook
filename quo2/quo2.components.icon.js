var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.icons.icons.js");
require("./quo2.components.icons.svg.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.icon.js");

goog.provide('quo2.components.icon');
quo2.components.icon.valid_color_QMARK_ = (function quo2$components$icon$valid_color_QMARK_(color){
return (((color instanceof cljs.core.Keyword)) || (((typeof color === 'string') && ((!(clojure.string.blank_QMARK_.call(null,color)))))));
});
quo2.components.icon.memo_icon_fn = (function quo2$components$icon$memo_icon_fn(icon_name,p__16606,_){
var map__16607 = p__16606;
var map__16607__$1 = (((((!((map__16607 == null))))?(((((map__16607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16607):map__16607);
var color = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var color_2 = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"color-2","color-2",1680964274));
var no_color = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"no-color","no-color",-309925745));
var container_style = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var size = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var accessibility_label = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"icon","icon",1679606541));
var size__$1 = (function (){var or__4126__auto__ = size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (20);
}
})();
var temp__5733__auto__ = quo2.components.icons.svg.get_icon.call(null,icon_name,size__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var svg_icon = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),size__$1,new cljs.core.Keyword(null,"color","color",1011675173),((quo2.components.icon.valid_color_QMARK_.call(null,color))?color:null),new cljs.core.Keyword(null,"color-2","color-2",1680964274),((quo2.components.icon.valid_color_QMARK_.call(null,color_2))?color_2:null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),container_style], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size__$1,new cljs.core.Keyword(null,"height","height",1025178622),size__$1], null),((cljs.core.not(no_color))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tint-color","tint-color",-940062868),((((typeof color === 'string') && ((!(clojure.string.blank_QMARK_.call(null,color))))))?color:quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white))], null):null),container_style),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"source","source",-433931539),quo2.components.icons.icons.icon_source.call(null,[cljs.core.name.call(null,icon_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$1)].join(''))], null)], null);
}
});
quo2.components.icon.themed_icon = cljs.core.memoize.call(null,quo2.components.icon.memo_icon_fn);
quo2.components.icon.icon = (function quo2$components$icon$icon(var_args){
var G__16621 = arguments.length;
switch (G__16621) {
case 1:
return quo2.components.icon.icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo2.components.icon.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.components.icon.icon.cljs$core$IFn$_invoke$arity$1 = (function (icon_name){
return quo2.components.icon.icon.call(null,icon_name,null);
}));

(quo2.components.icon.icon.cljs$core$IFn$_invoke$arity$2 = (function (icon_name,params){
return quo2.components.icon.themed_icon(icon_name,params,quo2.foundations.colors.dark_QMARK_.call(null));
}));

(quo2.components.icon.icon.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "valid_color_QMARK_", { enumerable: false, get: function() { return quo2.components.icon.valid_color_QMARK_; } });
Object.defineProperty(module.exports, "memo_icon_fn", { enumerable: false, get: function() { return quo2.components.icon.memo_icon_fn; } });
Object.defineProperty(module.exports, "themed_icon", { enumerable: false, get: function() { return quo2.components.icon.themed_icon; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return quo2.components.icon.icon; } });
//# sourceMappingURL=quo2.components.icon.js.map
