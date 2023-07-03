var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.theme.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.dividers.divider_label.js");

goog.provide('quo2.components.dividers.divider_label');
quo2.components.dividers.divider_label.chevron_icon_container_width = (20);
quo2.components.dividers.divider_label.chevron_icon_container_height = (20);
/**
 * label -> string
 * chevron-position -> :left, :right
 * chevron-icon -> keyword
 * on-press -> function
 * padding-bottom -> number
 * counter-value -> number
 * increase-padding-top? -> boolean
 * blur? -> boolean
 * theme -> theme value passed from with-theme HOC
 */
quo2.components.dividers.divider_label.themed_view = (function quo2$components$dividers$divider_label$themed_view(p__16925){
var map__16926 = p__16925;
var map__16926__$1 = (((((!((map__16926 == null))))?(((((map__16926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16926):map__16926);
var chevron_icon = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"chevron-icon","chevron-icon",-1528815143));
var container_style = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var padding_bottom = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591));
var counter_value = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"counter-value","counter-value",-866717862));
var on_press = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var blur_QMARK_ = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var increase_padding_top_QMARK_ = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"increase-padding-top?","increase-padding-top?",-790219160));
var chevron_position = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"chevron-position","chevron-position",-653541841));
var theme = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var label = cljs.core.get.call(null,map__16926__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var dark_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),theme);
var border_and_counter_bg_color = ((dark_QMARK_)?(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.white_opa_5:quo2.foundations.colors.neutral_70):quo2.foundations.colors.neutral_10);
var padding_top = (cljs.core.truth_(increase_padding_top_QMARK_)?(16):(8));
var text_and_icon_color = ((dark_QMARK_)?quo2.foundations.colors.neutral_40:quo2.foundations.colors.neutral_50);
var counter_text_color = ((dark_QMARK_)?quo2.foundations.colors.white:quo2.foundations.colors.neutral_100);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"divider-label","divider-label",-1544991782),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),(1),new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),border_and_counter_bg_color,new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),padding_top,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),padding_bottom,new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(16),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),container_style)], null),((cljs.core._EQ_.call(null,chevron_position,new cljs.core.Keyword(null,"left","left",-399115937)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),new cljs.core.Keyword(null,"divider-label-icon-left","divider-label-icon-left",-2063119040),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(function (){var or__4126__auto__ = chevron_icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("i","chevron-down","i/chevron-down",1154032462);
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),text_and_icon_color,new cljs.core.Keyword(null,"width","width",-384071477),quo2.components.dividers.divider_label.chevron_icon_container_width,new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.dividers.divider_label.chevron_icon_container_height], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),text_and_icon_color,new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),label], null),((cljs.core._EQ_.call(null,chevron_position,new cljs.core.Keyword(null,"right","right",-452581833)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),new cljs.core.Keyword(null,"divider-label-icon-right","divider-label-icon-right",1661448890)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(function (){var or__4126__auto__ = chevron_icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("i","chevron-down","i/chevron-down",1154032462);
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),text_and_icon_color,new cljs.core.Keyword(null,"size","size",1098693007),quo2.components.dividers.divider_label.chevron_icon_container_width], null)], null)], null):null),(((counter_value > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__16940 = cljs.core.count.call(null,counter_value);
switch (G__16940) {
case (1):
return (16);

break;
case (2):
return (20);

break;
default:
return (28);

}
})(),new cljs.core.Keyword(null,"background-color","background-color",570434026),border_and_counter_bg_color,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),counter_text_color], null)], null),counter_value], null)], null):null)], null)], null);
});
quo2.components.dividers.divider_label.divider_label = quo2.theme.with_theme.call(null,quo2.components.dividers.divider_label.themed_view);
Object.defineProperty(module.exports, "chevron_icon_container_width", { enumerable: false, get: function() { return quo2.components.dividers.divider_label.chevron_icon_container_width; } });
Object.defineProperty(module.exports, "chevron_icon_container_height", { enumerable: false, get: function() { return quo2.components.dividers.divider_label.chevron_icon_container_height; } });
Object.defineProperty(module.exports, "themed_view", { enumerable: false, get: function() { return quo2.components.dividers.divider_label.themed_view; } });
Object.defineProperty(module.exports, "divider_label", { enumerable: false, get: function() { return quo2.components.dividers.divider_label.divider_label; } });
//# sourceMappingURL=quo2.components.dividers.divider_label.js.map
