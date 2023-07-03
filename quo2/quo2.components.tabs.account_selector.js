var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tabs.account_selector.js");

goog.provide('quo2.components.tabs.account_selector');
quo2.components.tabs.account_selector.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.neutral_10,new cljs.core.Keyword(null,"account-text","account-text",-1317686404),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),quo2.foundations.colors.neutral_50], null),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"account-text","account-text",-1317686404),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),quo2.foundations.colors.neutral_80_opa_40], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.neutral_80_opa_80,new cljs.core.Keyword(null,"account-text","account-text",-1317686404),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),quo2.foundations.colors.neutral_40], null),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"account-text","account-text",-1317686404),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label-text","label-text",-1566972381),quo2.foundations.colors.neutral_40], null)], null)], null);
quo2.components.tabs.account_selector.account_container_row = (function quo2$components$tabs$account_selector$account_container_row(background_color){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(4),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12)], null);
});
quo2.components.tabs.account_selector.account_emoji = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"width","width",-384071477),(16)], null);
quo2.components.tabs.account_selector.account_emoji_container = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"purple","purple",-876021126),(50)),new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.tabs.account_selector.get_color_by_type = (function quo2$components$tabs$account_selector$get_color_by_type(type,key){
return cljs.core.get_in.call(null,quo2.components.tabs.account_selector.themes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.theme.get_theme.call(null),type,key], null));
});
/**
 * [account-selector opts]
 * opts
 * {:show-label?       true/false            ;; hide or show the label
 *  :transparent?      true/false            ;; implement transparent background styles
 *  :style             style                 ;; any other styling can be passed
 *  :label-text        "Label"             ;; content to show where the label should be shown
 *  :account-text      "My Savings"        ;; content in place of account name
 * }
 */
quo2.components.tabs.account_selector.account_selector = (function quo2$components$tabs$account_selector$account_selector(p__19316){
var map__19317 = p__19316;
var map__19317__$1 = (((((!((map__19317 == null))))?(((((map__19317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19317):map__19317);
var show_label_QMARK_ = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"show-label?","show-label?",1178462922));
var account_text = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"account-text","account-text",-1317686404));
var account_emoji = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"account-emoji","account-emoji",-1259388527));
var transparent_QMARK_ = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"transparent?","transparent?",-1446050548));
var label_text = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var style = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var background_color = quo2.components.tabs.account_selector.get_color_by_type.call(null,(cljs.core.truth_(transparent_QMARK_)?new cljs.core.Keyword(null,"transparent","transparent",-2073609949):new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"bg","bg",-206688421));
var account_text_color = quo2.components.tabs.account_selector.get_color_by_type.call(null,(cljs.core.truth_(transparent_QMARK_)?new cljs.core.Keyword(null,"transparent","transparent",-2073609949):new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"account-text","account-text",-1317686404));
var label_text_color = quo2.components.tabs.account_selector.get_color_by_type.call(null,(cljs.core.truth_(transparent_QMARK_)?new cljs.core.Keyword(null,"transparent","transparent",-2073609949):new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(cljs.core.truth_(show_label_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),label_text_color,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8)], null)], null),label_text], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tabs.account_selector.account_container_row.call(null,background_color)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tabs.account_selector.account_emoji_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,account_emoji], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),account_text_color], null)], null),account_text], null)], null)], null);
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.themes; } });
Object.defineProperty(module.exports, "account_container_row", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.account_container_row; } });
Object.defineProperty(module.exports, "account_emoji", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.account_emoji; } });
Object.defineProperty(module.exports, "account_emoji_container", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.account_emoji_container; } });
Object.defineProperty(module.exports, "get_color_by_type", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.get_color_by_type; } });
Object.defineProperty(module.exports, "account_selector", { enumerable: false, get: function() { return quo2.components.tabs.account_selector.account_selector; } });
//# sourceMappingURL=quo2.components.tabs.account_selector.js.map
