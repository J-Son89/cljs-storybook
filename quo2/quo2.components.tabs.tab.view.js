var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.notifications.notification_dot.js");
require("./quo2.components.tabs.tab.style.js");
require("./quo2.theme.js");
require("./react_native.core.js");
require("./react_native.svg.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tabs.tab.view.js");

goog.provide('quo2.components.tabs.tab.view');
/**
 * SVG exported from Figma.
 */
quo2.components.tabs.tab.view.right_side_with_cutout = (function quo2$components$tabs$tab$view$right_side_with_cutout(p__19356){
var map__19359 = p__19356;
var map__19359__$1 = (((((!((map__19359 == null))))?(((((map__19359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19359):map__19359);
var height = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var background_color = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var disabled = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill","fill",883462889),background_color,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(cljs.core.truth_(disabled)?quo2.components.tabs.tab.style.tab_background_opacity:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 11.468 6.781 C 11.004 6.923 10.511 7 10 7 C 7.239 7 5 4.761 5 2 C 5\n     1.489 5.077 0.996 5.219 0.532 C 4.687 0.351 4.134 0.213 3.564 0.123 C 2.787\n     0 1.858 0 0 0 L 0 32 C 1.858 32 2.787 32 3.564 31.877 C 7.843 31.199 11.199\n     27.843 11.877 23.564 C 12 22.787 12 21.858 12 20 L 12 12 C 12 10.142 12\n     9.213 11.877 8.436 C 11.787 7.866 11.649 7.313 11.468 6.781 Z",new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),"url(#clip0_5514_84289)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.defs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.clippath,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"clip0_5514_84289"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null)], null)], null);
});
quo2.components.tabs.tab.view.content = (function quo2$components$tabs$tab$view$content(p__19370,children){
var map__19371 = p__19370;
var map__19371__$1 = (((((!((map__19371 == null))))?(((((map__19371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19371):map__19371);
var size = cljs.core.get.call(null,map__19371__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.call(null,map__19371__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,((typeof children === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__19375 = size;
switch (G__19375) {
case (24):
return new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103);

break;
case (20):
return new cljs.core.Keyword(null,"label","label",1718410804);

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),label),children], null):((cljs.core.vector_QMARK_.call(null,children))?children:null))], null);
});
quo2.components.tabs.tab.view.themed_view = (function quo2$components$tabs$tab$view$themed_view(p__19376,children){
var map__19378 = p__19376;
var map__19378__$1 = (((((!((map__19378 == null))))?(((((map__19378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19378):map__19378);
var segmented_QMARK_ = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"segmented?","segmented?",506415002));
var notification_dot_QMARK_ = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"notification-dot?","notification-dot?",2136428475));
var before = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var active_item_container_style = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"active-item-container-style","active-item-container-style",657402941));
var on_press = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var blur_QMARK_ = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var disabled = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessibility_label = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var size = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"size","size",1098693007),(32));
var theme = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var item_container_style = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"item-container-style","item-container-style",-1282731310));
var active = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var id = cljs.core.get.call(null,map__19378__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var show_notification_dot_QMARK_ = (function (){var and__4115__auto__ = notification_dot_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,size,(32));
} else {
return and__4115__auto__;
}
})();
var map__19394 = quo2.components.tabs.tab.style.by_theme.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"active","active",1895962068),active], null));
var map__19394__$1 = (((((!((map__19394 == null))))?(((((map__19394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19394):map__19394);
var icon_color = cljs.core.get.call(null,map__19394__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var background_color = cljs.core.get.call(null,map__19394__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var label = cljs.core.get.call(null,map__19394__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return on_press.call(null,id);
})], null):null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tabs.tab.style.container], null),(cljs.core.truth_(show_notification_dot_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification_dot.notification_dot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tabs.tab.style.notification_dot], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.tabs.tab.style.tab.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_((function (){var and__4115__auto__ = segmented_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(active);
} else {
return and__4115__auto__;
}
})())?new cljs.core.Keyword(null,"transparent","transparent",-2073609949):background_color),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"segmented?","segmented?",506415002),segmented_QMARK_,new cljs.core.Keyword(null,"show-notification-dot?","show-notification-dot?",-180941106),show_notification_dot_QMARK_], null)),(cljs.core.truth_(active)?active_item_container_style:item_container_style))], null),(cljs.core.truth_(before)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,before,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tab.view.content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"label","label",1718410804),label], null),children], null)], null),(cljs.core.truth_(show_notification_dot_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tab.view.right_side_with_cutout,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),quo2.components.tabs.tab.style.size__GT_padding_left.call(null,size),new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color], null)], null):null)], null)], null);
});
quo2.components.tabs.tab.view.view = quo2.theme.with_theme.call(null,quo2.components.tabs.tab.view.themed_view);
Object.defineProperty(module.exports, "right_side_with_cutout", { enumerable: false, get: function() { return quo2.components.tabs.tab.view.right_side_with_cutout; } });
Object.defineProperty(module.exports, "content", { enumerable: false, get: function() { return quo2.components.tabs.tab.view.content; } });
Object.defineProperty(module.exports, "themed_view", { enumerable: false, get: function() { return quo2.components.tabs.tab.view.themed_view; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.tabs.tab.view.view; } });
//# sourceMappingURL=quo2.components.tabs.tab.view.js.map
