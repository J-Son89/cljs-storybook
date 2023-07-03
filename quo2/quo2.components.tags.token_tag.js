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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.token_tag.js");

goog.provide('quo2.components.tags.token_tag');
quo2.components.tags.token_tag.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_20], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_80], null)], null);
quo2.components.tags.token_tag.get_value_from_size = (function quo2$components$tags$token_tag$get_value_from_size(size,big_option,small_option){
if(cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"big","big",903550151))){
return big_option;
} else {
return small_option;
}
});
quo2.components.tags.token_tag.icon_container_styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(2)], null);
quo2.components.tags.token_tag.tag_container = (function quo2$components$tags$token_tag$tag_container(size){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(32),(24)),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20)], null);
});
/**
 * [tag opts "label"]]
 * opts
 * {
 *  :size :small/:big
 *  :token-img-src :token-img-src
 *  :token-img-style {}
 *  :border-color :color
 *  :overlay child-elements
 *  }
 */
quo2.components.tags.token_tag.tag = (function quo2$components$tags$token_tag$tag(_,___$1){
return (function (p__16883,label){
var map__16884 = p__16883;
var map__16884__$1 = (((((!((map__16884 == null))))?(((((map__16884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16884):map__16884);
var size = cljs.core.get.call(null,map__16884__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704));
var img_src = cljs.core.get.call(null,map__16884__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var img_style = cljs.core.get.call(null,map__16884__$1,new cljs.core.Keyword(null,"img-style","img-style",550275798));
var border_color = cljs.core.get.call(null,map__16884__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var overlay = cljs.core.get.call(null,map__16884__$1,new cljs.core.Keyword(null,"overlay","overlay",-139131598));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(border_color)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null):null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.tags.token_tag.tag_container.call(null,size),cljs.core.get.call(null,quo2.components.tags.token_tag.themes,quo2.theme.get_theme.call(null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_src,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(28),(20)),new cljs.core.Keyword(null,"width","width",-384071477),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(28),(20)),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(8),(6))], null),img_style)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(12),(11))], null),new cljs.core.Keyword(null,"size","size",1098693007),quo2.components.tags.token_tag.get_value_from_size.call(null,size,new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"label","label",1718410804))], null),label], null),overlay], null)], null);
});
});
quo2.components.tags.token_tag.loading_icon = (function quo2$components$tags$token_tag$loading_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"right","right",-452581833),(-8),new cljs.core.Keyword(null,"top","top",-1856271961),(-8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("t","checktoken","t/checktoken",-1872740893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-color","no-color",-309925745),true,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
quo2.components.tags.token_tag.icon = (function quo2$components$tags$token_tag$icon(size,border_color,sufficient_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.tags.token_tag.icon_container_styles,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),border_color,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),((cljs.core._EQ_.call(null,quo2.theme.get_theme.call(null),new cljs.core.Keyword(null,"dark","dark",1818973999)))?quo2.foundations.colors.neutral_100:quo2.foundations.colors.white),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"right","right",-452581833),quo2.components.tags.token_tag.get_value_from_size.call(null,size,-3.75,-5.75),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),quo2.components.tags.token_tag.get_value_from_size.call(null,size,(((32) - 7.75) - (4)),(((24) - 7.75) - (2)))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(cljs.core.truth_(sufficient_QMARK_)?new cljs.core.Keyword("i","hold","i/hold",-1621117116):new cljs.core.Keyword("i","add","i/add",235287990)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-color","no-color",-309925745),true,new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null)], null);
});
/**
 * [token-tag opts]
 * opts
 * {
 *  :symbol string
 *  :value string
 *  :size :small/:big
 *  :token-img-src :token-img-src
 *  :border-color :color
 *  :sufficient? true/false
 *  :purchasable? true/false
 *  :loading? true/false
 *  }
 */
quo2.components.tags.token_tag.token_tag = (function quo2$components$tags$token_tag$token_tag(_,___$1){
return (function (p__16892){
var map__16893 = p__16892;
var map__16893__$1 = (((((!((map__16893 == null))))?(((((map__16893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16893):map__16893);
var symbol = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
var value = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704));
var img_src = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var border_color = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var purchasable_QMARK_ = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"purchasable?","purchasable?",-1171226911));
var sufficient_QMARK_ = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"sufficient?","sufficient?",-901789607));
var loading_QMARK_ = cljs.core.get.call(null,map__16893__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var sufficient_QMARK___$1 = (cljs.core.truth_(loading_QMARK_)?null:sufficient_QMARK_);
var border_color__$1 = (cljs.core.truth_(sufficient_QMARK___$1)?quo2.foundations.colors.success_50:border_color);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.token_tag.tag,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"img-src","img-src",-108905265),img_src,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(sufficient_QMARK___$1)?quo2.foundations.colors.success_50:border_color__$1),new cljs.core.Keyword(null,"overlay","overlay",-139131598),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.token_tag.loading_icon], null):(cljs.core.truth_((function (){var or__4126__auto__ = purchasable_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sufficient_QMARK___$1;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.token_tag.icon,size,border_color__$1,sufficient_QMARK___$1], null):null))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join('')], null);
});
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.tags.token_tag.themes; } });
Object.defineProperty(module.exports, "get_value_from_size", { enumerable: false, get: function() { return quo2.components.tags.token_tag.get_value_from_size; } });
Object.defineProperty(module.exports, "icon_container_styles", { enumerable: false, get: function() { return quo2.components.tags.token_tag.icon_container_styles; } });
Object.defineProperty(module.exports, "tag_container", { enumerable: false, get: function() { return quo2.components.tags.token_tag.tag_container; } });
Object.defineProperty(module.exports, "tag", { enumerable: false, get: function() { return quo2.components.tags.token_tag.tag; } });
Object.defineProperty(module.exports, "loading_icon", { enumerable: false, get: function() { return quo2.components.tags.token_tag.loading_icon; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return quo2.components.tags.token_tag.icon; } });
Object.defineProperty(module.exports, "token_tag", { enumerable: false, get: function() { return quo2.components.tags.token_tag.token_tag; } });
//# sourceMappingURL=quo2.components.tags.token_tag.js.map
