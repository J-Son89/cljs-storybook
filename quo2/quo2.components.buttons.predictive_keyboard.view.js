var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.core.js");
require("./quo2.components.buttons.predictive_keyboard.style.js");
require("./quo2.components.info.info_message.js");
require("./react_native.linear_gradient.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.buttons.button.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.predictive_keyboard.view.js");

goog.provide('quo2.components.buttons.predictive_keyboard.view');
quo2.components.buttons.predictive_keyboard.view.gradients = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_40,0.05),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_40,(0))], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.7),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,(0))], null),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.foundations.colors.white_opa_5,quo2.foundations.colors.white_opa_0], null)], null);
quo2.components.buttons.predictive_keyboard.view.word_component = (function quo2$components$buttons$predictive_keyboard$view$word_component(word,_,___$1,p__16689){
var map__16690 = p__16689;
var map__16690__$1 = (((((!((map__16690 == null))))?(((((map__16690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16690):map__16690);
var blur_QMARK_ = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_press = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blur-bg","blur-bg",-2109324038),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return on_press.call(null,word);
})], null),(cljs.core.truth_(blur_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999)], null):null)),word], null);
});
quo2.components.buttons.predictive_keyboard.view.separator = (function quo2$components$buttons$predictive_keyboard$view$separator(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(8)], null)], null)], null);
});
/**
 * Options
 * - `type` `:words`/`:error`/`:info`/`:empty`.
 * - `blur?` Boolean to enable blur background support.
 * - `text`  error/info text.
 * - `words` List of words to display in the keyboard.
 * - `on-press` Callback called when a word is pressed `(fn [word])`.
 */
quo2.components.buttons.predictive_keyboard.view.view = (function quo2$components$buttons$predictive_keyboard$view$view(p__16695){
var map__16696 = p__16695;
var map__16696__$1 = (((((!((map__16696 == null))))?(((((map__16696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16696):map__16696);
var type = cljs.core.get.call(null,map__16696__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var blur_QMARK_ = cljs.core.get.call(null,map__16696__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var text = cljs.core.get.call(null,map__16696__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var words = cljs.core.get.call(null,map__16696__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var on_press = cljs.core.get.call(null,map__16696__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.linear_gradient.linear_gradient,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"predictive-keyboard","predictive-keyboard",-1637188630),new cljs.core.Keyword(null,"colors","colors",1157174732),(cljs.core.truth_(blur_QMARK_)?quo2.components.buttons.predictive_keyboard.view.gradients.call(null,new cljs.core.Keyword(null,"blur","blur",-453500461)):quo2.foundations.colors.theme_colors.call(null,quo2.components.buttons.predictive_keyboard.view.gradients.call(null,new cljs.core.Keyword(null,"light","light",1918998747)),quo2.components.buttons.predictive_keyboard.view.gradients.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.buttons.predictive_keyboard.style.wrapper.call(null,type)], null),(function (){var G__16698 = type;
var G__16698__$1 = (((G__16698 instanceof cljs.core.Keyword))?G__16698.fqn:null);
switch (G__16698__$1) {
case "words":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.flat_list,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"shows-horizontal-scroll-indicator","shows-horizontal-scroll-indicator",-727898649),new cljs.core.Keyword(null,"render-data","render-data",-1989310708),new cljs.core.Keyword(null,"keyboard-should-persist-taps","keyboard-should-persist-taps",578336622),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"content-container-style","content-container-style",-26145133),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"data","data",-232669377)],[true,quo2.components.buttons.predictive_keyboard.view.word_component,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.Keyword(null,"always","always",-1772028770),cljs.core.str,quo2.components.buttons.predictive_keyboard.style.word_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.predictive_keyboard.view.separator], null),words])], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.info.info_message.info_message,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("i","info","i/info",-317068989),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),text], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.info.info_message.info_message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("i","info","i/info",-317068989),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"error","error",-978969032)))?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"default","default",-1987822328))], null),(cljs.core.truth_(blur_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white_opa_70], null):null)),text], null);

break;
default:
return null;

}
})()], null)], null);
});
Object.defineProperty(module.exports, "gradients", { enumerable: false, get: function() { return quo2.components.buttons.predictive_keyboard.view.gradients; } });
Object.defineProperty(module.exports, "word_component", { enumerable: false, get: function() { return quo2.components.buttons.predictive_keyboard.view.word_component; } });
Object.defineProperty(module.exports, "separator", { enumerable: false, get: function() { return quo2.components.buttons.predictive_keyboard.view.separator; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.buttons.predictive_keyboard.view.view; } });
//# sourceMappingURL=quo2.components.buttons.predictive_keyboard.view.js.map
