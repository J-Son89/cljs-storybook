var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.blur.js");
require("./quo2.components.drawers.drawer_buttons.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.drawers.drawer_buttons.view.js");

goog.provide('quo2.components.drawers.drawer_buttons.view');
quo2.components.drawers.drawer_buttons.view.render_bottom = (function quo2$components$drawers$drawer_buttons$view$render_bottom(children){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.bottom_container], null),children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.bottom_icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword(null,"arrow-right","arrow-right",1734868482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white,new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null)], null);
});
quo2.components.drawers.drawer_buttons.view.label_QMARK_ = (function quo2$components$drawers$drawer_buttons$view$label_QMARK_(el){
return ((typeof el === 'string') || ((el instanceof cljs.core.Keyword)));
});
quo2.components.drawers.drawer_buttons.view.render_children_bottom = (function quo2$components$drawers$drawer_buttons$view$render_children_bottom(children){
if(quo2.components.drawers.drawer_buttons.view.label_QMARK_.call(null,children)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.render_bottom,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.bottom_text,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),children], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.render_bottom,children], null);
}
});
quo2.components.drawers.drawer_buttons.view.render_children_top = (function quo2$components$drawers$drawer_buttons$view$render_children_top(children){
if(quo2.components.drawers.drawer_buttons.view.label_QMARK_.call(null,children)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.top_text,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),children], null);
} else {
return children;
}
});
quo2.components.drawers.drawer_buttons.view.card = (function quo2$components$drawers$drawer_buttons$view$card(p__16987,children){
var map__16988 = p__16987;
var map__16988__$1 = (((((!((map__16988 == null))))?(((((map__16988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16988):map__16988);
var on_press = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var style = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var heading = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var gap = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var accessibility_label = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var top_QMARK_ = cljs.core.get.call(null,map__16988__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"heading-1","heading-1",-1623077842),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.heading_text.call(null,gap),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),heading], null),(cljs.core.truth_(top_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.render_children_top,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.render_children_bottom,children], null))], null)], null);
});
/**
 * [view opts]
 * opts
 * {:container-style  style-object
 *  :top-card         { :on-press event
 *                      :heading  string
 *                      :accessibility-label keyword}
 *  :bottom-card      { :on-press event
 *                      :heading  string
 *                      :accessibility-label keyword}}
 *  child-1           string, keyword or hiccup
 *  child-2           string, keyword or hiccup
 * 
 */
quo2.components.drawers.drawer_buttons.view.view = (function quo2$components$drawers$drawer_buttons$view$view(p__16990,child_1,child_2){
var map__16991 = p__16990;
var map__16991__$1 = (((((!((map__16991 == null))))?(((((map__16991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16991):map__16991);
var container_style = cljs.core.get.call(null,map__16991__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var top_card = cljs.core.get.call(null,map__16991__$1,new cljs.core.Keyword(null,"top-card","top-card",-832274990));
var bottom_card = cljs.core.get.call(null,map__16991__$1,new cljs.core.Keyword(null,"bottom-card","bottom-card",-1072735202));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,container_style,quo2.components.drawers.drawer_buttons.style.outer_container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.blur.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blur-type","blur-type",1771954032),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"blur-amount","blur-amount",-1583937784),(10),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),(20),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.card,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gap","gap",80255254),(4),new cljs.core.Keyword(null,"top?","top?",-1883283796),true,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.top_card], null),top_card),child_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.drawer_buttons.view.card,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.drawer_buttons.style.bottom_card,new cljs.core.Keyword(null,"gap","gap",80255254),(20)], null),bottom_card),child_2], null)], null)], null);
});
Object.defineProperty(module.exports, "render_bottom", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.render_bottom; } });
Object.defineProperty(module.exports, "label_QMARK_", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.label_QMARK_; } });
Object.defineProperty(module.exports, "render_children_bottom", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.render_children_bottom; } });
Object.defineProperty(module.exports, "render_children_top", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.render_children_top; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.card; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.drawers.drawer_buttons.view.view; } });
//# sourceMappingURL=quo2.components.drawers.drawer_buttons.view.js.map
