var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.reactions.resource.js");
require("./quo2.components.selectors.reactions.style.js");
require("./react_native.core.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.selectors.reactions.view.js");

goog.provide('quo2.components.selectors.reactions.view');
quo2.components.selectors.reactions.view.view = (function quo2$components$selectors$reactions$view$view(_,p__19235){
var map__19236 = p__19235;
var map__19236__$1 = (((((!((map__19236 == null))))?(((((map__19236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19236):map__19236);
var start_pressed_QMARK_ = cljs.core.get.call(null,map__19236__$1,new cljs.core.Keyword(null,"start-pressed?","start-pressed?",-46426678));
var pressed_QMARK_ = reagent.core.atom.call(null,start_pressed_QMARK_);
return (function (emoji,p__19240){
var map__19241 = p__19240;
var map__19241__$1 = (((((!((map__19241 == null))))?(((((map__19241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19241):map__19241);
var container_style = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var on_press = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var accessibility_label = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"reaction","reaction",490869788));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (e){
cljs.core.swap_BANG_.call(null,pressed_QMARK_,cljs.core.not);

if(cljs.core.truth_(on_press)){
return on_press.call(null,e);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.selectors.reactions.style.container.call(null,cljs.core.deref.call(null,pressed_QMARK_)),container_style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),quo2.components.reactions.resource.get_reaction.call(null,emoji),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null)], null)], null);
});
});
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.selectors.reactions.view.view; } });
//# sourceMappingURL=quo2.components.selectors.reactions.view.js.map
