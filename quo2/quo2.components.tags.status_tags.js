var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.status_tags.js");

goog.provide('quo2.components.tags.status_tags');
quo2.components.tags.status_tags.default_container_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null);
quo2.components.tags.status_tags.small_container_style = cljs.core.merge.call(null,quo2.components.tags.status_tags.default_container_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(24),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(8),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(1)], null));
quo2.components.tags.status_tags.large_container_style = cljs.core.merge.call(null,quo2.components.tags.status_tags.default_container_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(32),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(11),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(4)], null));
quo2.components.tags.status_tags.base_tag = (function quo2$components$tags$status_tags$base_tag(_){
return (function (p__18976){
var map__18977 = p__18976;
var map__18977__$1 = (((((!((map__18977 == null))))?(((((map__18977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18977):map__18977);
var size = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var border_color = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var background_color = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var icon = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text_color = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var label = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var accessibility_label = cljs.core.get.call(null,map__18977__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var paragraph_size = ((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"small","small",2133478704)))?new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103):new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"small","small",2133478704)))?quo2.components.tags.status_tags.small_container_style:quo2.components.tags.status_tags.large_container_style),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-color","no-color",-309925745),true,new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"large","large",-196820544)))?(20):(12))], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),paragraph_size,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(5),new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),label], null)], null)], null);
});
});
quo2.components.tags.status_tags.positive = (function quo2$components$tags$status_tags$positive(size,theme,label,_,no_icon_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.status_tags.base_tag,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"status-tag-positive","status-tag-positive",-523185585),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(no_icon_QMARK_)?null:new cljs.core.Keyword("i","positive-state","i/positive-state",158085196)),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.success_50_opa_10,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.success_50_opa_20,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text-color","text-color",1728708298),((cljs.core._EQ_.call(null,theme,new cljs.core.Keyword(null,"dark","dark",1818973999)))?quo2.foundations.colors.success_60:quo2.foundations.colors.success_50)], null)], null);
});
quo2.components.tags.status_tags.negative = (function quo2$components$tags$status_tags$negative(size,theme,label,_,no_icon_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.status_tags.base_tag,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"status-tag-negative","status-tag-negative",273003677),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(no_icon_QMARK_)?null:new cljs.core.Keyword("i","negative-state","i/negative-state",936904509)),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.danger_50_opa_10,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.danger_50_opa_20,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"text-color","text-color",1728708298),((cljs.core._EQ_.call(null,theme,new cljs.core.Keyword(null,"light","light",1918998747)))?quo2.foundations.colors.danger_50:quo2.foundations.colors.danger_60)], null)], null);
});
quo2.components.tags.status_tags.pending = (function quo2$components$tags$status_tags$pending(size,theme,label,blur_QMARK_,no_icon_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.status_tags.base_tag,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"status-tag-pending","status-tag-pending",2137997901),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(no_icon_QMARK_)?null:(cljs.core.truth_(blur_QMARK_)?new cljs.core.Keyword("i","pending-dark-blur","i/pending-dark-blur",874024147):((cljs.core._EQ_.call(null,theme,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword("i","pending-light","i/pending-light",-1721271640):new cljs.core.Keyword("i","pending-dark","i/pending-dark",-304029003)))),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.white_opa_5:quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_10,quo2.foundations.colors.neutral_80_opa_40,theme)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.white_opa_5:quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80,theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.white_opa_70:quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,theme))], null)], null);
});
quo2.components.tags.status_tags.status_tag = (function quo2$components$tags$status_tags$status_tag(p__18996){
var map__18997 = p__18996;
var map__18997__$1 = (((((!((map__18997 == null))))?(((((map__18997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18997):map__18997);
var status = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var size = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var override_theme = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var label = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var blur_QMARK_ = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var no_icon_QMARK_ = cljs.core.get.call(null,map__18997__$1,new cljs.core.Keyword(null,"no-icon?","no-icon?",-1584011644));
if(cljs.core.truth_(status)){
var temp__5735__auto__ = (function (){var G__19002 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(status);
var G__19002__$1 = (((G__19002 instanceof cljs.core.Keyword))?G__19002.fqn:null);
switch (G__19002__$1) {
case "positive":
return quo2.components.tags.status_tags.positive;

break;
case "negative":
return quo2.components.tags.status_tags.negative;

break;
case "pending":
return quo2.components.tags.status_tags.pending;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var status_component = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_component,size,(function (){var or__4126__auto__ = override_theme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.theme.get_theme.call(null);
}
})(),label,blur_QMARK_,no_icon_QMARK_], null);
} else {
return null;
}
} else {
return null;
}
});
Object.defineProperty(module.exports, "default_container_style", { enumerable: false, get: function() { return quo2.components.tags.status_tags.default_container_style; } });
Object.defineProperty(module.exports, "small_container_style", { enumerable: false, get: function() { return quo2.components.tags.status_tags.small_container_style; } });
Object.defineProperty(module.exports, "large_container_style", { enumerable: false, get: function() { return quo2.components.tags.status_tags.large_container_style; } });
Object.defineProperty(module.exports, "base_tag", { enumerable: false, get: function() { return quo2.components.tags.status_tags.base_tag; } });
Object.defineProperty(module.exports, "positive", { enumerable: false, get: function() { return quo2.components.tags.status_tags.positive; } });
Object.defineProperty(module.exports, "negative", { enumerable: false, get: function() { return quo2.components.tags.status_tags.negative; } });
Object.defineProperty(module.exports, "pending", { enumerable: false, get: function() { return quo2.components.tags.status_tags.pending; } });
Object.defineProperty(module.exports, "status_tag", { enumerable: false, get: function() { return quo2.components.tags.status_tags.status_tag; } });
//# sourceMappingURL=quo2.components.tags.status_tags.js.map
