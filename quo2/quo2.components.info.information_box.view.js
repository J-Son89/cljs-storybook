var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.icon.js");
require("./quo2.components.info.information_box.style.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.info.information_box.view.js");

goog.provide('quo2.components.info.information_box.view');
quo2.components.info.information_box.view.info_type__GT_button_type = (function quo2$components$info$information_box$view$info_type__GT_button_type(type){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"error","error",-978969032))){
return new cljs.core.Keyword(null,"danger","danger",-624338030);
} else {
return new cljs.core.Keyword(null,"primary","primary",817773892);
}
});
quo2.components.info.information_box.view.close_button = (function quo2$components$info$information_box$view$close_button(p__17032){
var map__17034 = p__17032;
var map__17034__$1 = (((((!((map__17034 == null))))?(((((map__17034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17034):map__17034);
var theme = cljs.core.get.call(null,map__17034__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var on_close = cljs.core.get.call(null,map__17034__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_close,new cljs.core.Keyword(null,"hit-slop","hit-slop",-1010555951),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(3),new cljs.core.Keyword(null,"right","right",-452581833),(3),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(3),new cljs.core.Keyword(null,"left","left",-399115937),(3)], null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"information-box-close-button","information-box-close-button",149204327)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","close","i/close",1835145911),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.info.information_box.style.get_color.call(null,theme,new cljs.core.Keyword(null,"close-button","close-button",1885538121)),new cljs.core.Keyword(null,"container-style","container-style",-240535783),quo2.components.info.information_box.style.close_button], null)], null)], null);
});
quo2.components.info.information_box.view.content = (function quo2$components$info$information_box$view$content(p__17037){
var map__17038 = p__17037;
var map__17038__$1 = (((((!((map__17038 == null))))?(((((map__17038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17038):map__17038);
var theme = cljs.core.get.call(null,map__17038__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var type = cljs.core.get.call(null,map__17038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var button_label = cljs.core.get.call(null,map__17038__$1,new cljs.core.Keyword(null,"button-label","button-label",-1402542935));
var on_button_press = cljs.core.get.call(null,map__17038__$1,new cljs.core.Keyword(null,"on-button-press","on-button-press",-1799202835));
var message = cljs.core.get.call(null,map__17038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.info.information_box.style.content_text.call(null,theme,type)], null),message], null),(((!(clojure.string.blank_QMARK_.call(null,button_label))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),quo2.components.info.information_box.view.info_type__GT_button_type.call(null,type),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"information-box-action-button","information-box-action-button",2106865666),new cljs.core.Keyword(null,"size","size",1098693007),(24),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_button_press,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.info.information_box.style.content_button], null),button_label], null):null)], null);
});
/**
 * [view opts "message"]
 * opts
 * {:type            :default/:informative/:error
 *  :closed?         bool (false)  ;; Information box's state
 *  :icon            keyword, required (:i/info)
 *  :icon-size       int (16)
 *  :no-icon-color?  bool (false)
 *  :style           map
 *  :button-label    string
 *  :on-button-press function
 *  :on-close        function
 */
quo2.components.info.information_box.view.view = (function quo2$components$info$information_box$view$view(p__17045,message){
var map__17049 = p__17045;
var map__17049__$1 = (((((!((map__17049 == null))))?(((((map__17049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17049):map__17049);
var on_close = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var icon_size = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"icon-size","icon-size",414161352));
var button_label = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"button-label","button-label",-1402542935));
var type = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var icon = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_button_press = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"on-button-press","on-button-press",-1799202835));
var no_icon_color_QMARK_ = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"no-icon-color?","no-icon-color?",1566108528));
var closed_QMARK_ = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var style = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(closed_QMARK_)){
return null;
} else {
var theme = quo2.theme.get_theme.call(null);
var include_button_QMARK_ = (!(clojure.string.blank_QMARK_.call(null,button_label)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"information-box","information-box",-2113788250),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.info.information_box.style.container.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"include-button?","include-button?",512326479),include_button_QMARK_], null)),style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.info.information_box.style.get_color_by_type.call(null,theme,type,new cljs.core.Keyword(null,"icon","icon",1679606541)),new cljs.core.Keyword(null,"no-color","no-color",-309925745),no_icon_color_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__4126__auto__ = icon_size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (16);
}
})(),new cljs.core.Keyword(null,"container-style","container-style",-240535783),quo2.components.info.information_box.style.icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.info.information_box.view.content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"button-label","button-label",-1402542935),button_label,new cljs.core.Keyword(null,"on-button-press","on-button-press",-1799202835),on_button_press,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.info.information_box.view.close_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null)], null):null)], null);
}
});
Object.defineProperty(module.exports, "info_type__GT_button_type", { enumerable: false, get: function() { return quo2.components.info.information_box.view.info_type__GT_button_type; } });
Object.defineProperty(module.exports, "close_button", { enumerable: false, get: function() { return quo2.components.info.information_box.view.close_button; } });
Object.defineProperty(module.exports, "content", { enumerable: false, get: function() { return quo2.components.info.information_box.view.content; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.info.information_box.view.view; } });
//# sourceMappingURL=quo2.components.info.information_box.view.js.map
