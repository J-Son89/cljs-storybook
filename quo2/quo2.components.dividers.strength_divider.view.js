var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.dividers.strength_divider.style.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.linear_gradient.js");
require("./react_native.svg.js");
require("./utils.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.dividers.strength_divider.view.js");

goog.provide('quo2.components.dividers.strength_divider.view');
quo2.components.dividers.strength_divider.view.strength_divider_types = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"very-weak","very-weak",-982435635),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),utils.i18n.label(new cljs.core.Keyword("t","strength-divider-very-weak-label","t/strength-divider-very-weak-label",-921863795)),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.danger_60,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(20)], null),new cljs.core.Keyword(null,"weak","weak",-263559193),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),utils.i18n.label(new cljs.core.Keyword("t","strength-divider-weak-label","t/strength-divider-weak-label",346797030)),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"orange","orange",73816386),(60)),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(40)], null),new cljs.core.Keyword(null,"okay","okay",675029136),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),utils.i18n.label(new cljs.core.Keyword("t","strength-divider-okay-label","t/strength-divider-okay-label",614749090)),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"yellow","yellow",-881035449),(60)),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(60)], null),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),utils.i18n.label(new cljs.core.Keyword("t","strength-divider-strong-label","t/strength-divider-strong-label",1881987134)),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.success_60,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(80)], null),new cljs.core.Keyword(null,"very-strong","very-strong",-457012707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),utils.i18n.label(new cljs.core.Keyword("t","strength-divider-very-strong-label","t/strength-divider-very-strong-label",2025911246)),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.success_60,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(100)], null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white_opa_40], null),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.danger_60], null)], null);
quo2.components.dividers.strength_divider.view.circular_progress = (function quo2$components$dividers$strength_divider$view$circular_progress(p__16957){
var map__16958 = p__16957;
var map__16958__$1 = (((((!((map__16958 == null))))?(((((map__16958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16958):map__16958);
var color = cljs.core.get.call(null,map__16958__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var percentage = cljs.core.get.call(null,map__16958__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
var strength_indicator_radius = 6.5;
var strength_indicator_circumference = (((2) * Math.PI) * strength_indicator_radius);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 16 16",new cljs.core.Keyword(null,"width","width",-384071477),14.2,new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),"270deg"], null)], null),new cljs.core.Keyword(null,"height","height",1025178622),14.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.circle,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(8),new cljs.core.Keyword(null,"cy","cy",755331060),(8),new cljs.core.Keyword(null,"r","r",-471384190),strength_indicator_radius,new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),quo2.foundations.colors.alpha.call(null,color,0.2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.circle,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),(8),new cljs.core.Keyword(null,"cy","cy",755331060),(8),new cljs.core.Keyword(null,"r","r",-471384190),strength_indicator_radius,new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.2,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),strength_indicator_circumference,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),((((100) - percentage) * 0.01) * strength_indicator_circumference),new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.circle], null)], null);
});
quo2.components.dividers.strength_divider.view.strength_indicator = (function quo2$components$dividers$strength_divider$view$strength_indicator(type){
var map__16966 = quo2.components.dividers.strength_divider.view.strength_divider_types.call(null,type);
var map__16966__$1 = (((((!((map__16966 == null))))?(((((map__16966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16966):map__16966);
var color = cljs.core.get.call(null,map__16966__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var percentage = cljs.core.get.call(null,map__16966__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
var G__16968 = type;
var G__16968__$1 = (((G__16968 instanceof cljs.core.Keyword))?G__16968.fqn:null);
switch (G__16968__$1) {
case "info":
return null;

break;
case "alert":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","alert","i/alert",-571950203),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.dividers.strength_divider.view.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),percentage], null)], null);

}
});
/**
 * Options
 * - `:type` `:very-weak`/`:weak`/`:okay`/`:strong`/`:very-strong`/`:info`/`:alert`)
 * 
 * `text` message string(only works when type is `info`/`alert`)
 */
quo2.components.dividers.strength_divider.view.view = (function quo2$components$dividers$strength_divider$view$view(p__16973,text){
var map__16974 = p__16973;
var map__16974__$1 = (((((!((map__16974 == null))))?(((((map__16974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16974):map__16974);
var type = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"very-weak","very-weak",-982435635));
var map__16976 = quo2.components.dividers.strength_divider.view.strength_divider_types.call(null,type);
var map__16976__$1 = (((((!((map__16976 == null))))?(((((map__16976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16976):map__16976);
var color = cljs.core.get.call(null,map__16976__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var default_text = cljs.core.get.call(null,map__16976__$1,new cljs.core.Keyword(null,"default-text","default-text",-631230836));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.linear_gradient.linear_gradient,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.foundations.colors.alpha.call(null,color,0.05),quo2.foundations.colors.alpha.call(null,color,(0))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.dividers.strength_divider.style.container,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"strength-divider","strength-divider",1315262663)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.dividers.strength_divider.view.strength_indicator,type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.dividers.strength_divider.style.text.call(null,color)], null),(function (){var or__4126__auto__ = default_text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return text;
}
})()], null)], null)], null);
});
Object.defineProperty(module.exports, "strength_divider_types", { enumerable: false, get: function() { return quo2.components.dividers.strength_divider.view.strength_divider_types; } });
Object.defineProperty(module.exports, "circular_progress", { enumerable: false, get: function() { return quo2.components.dividers.strength_divider.view.circular_progress; } });
Object.defineProperty(module.exports, "strength_indicator", { enumerable: false, get: function() { return quo2.components.dividers.strength_divider.view.strength_indicator; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.dividers.strength_divider.view.view; } });
//# sourceMappingURL=quo2.components.dividers.strength_divider.view.js.map
