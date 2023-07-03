var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.empty_state.empty_state.styles.js");
require("./quo2.components.markdown.text.js");
require("./react_native.core.js");
require("./react_native.fast_image.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.empty_state.empty_state.view.js");

goog.provide('quo2.components.empty_state.empty_state.view');
quo2.components.empty_state.empty_state.view.empty_state = (function quo2$components$empty_state$empty_state$view$empty_state(p__17008){
var map__17010 = p__17008;
var map__17010__$1 = (((((!((map__17010 == null))))?(((((map__17010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17010):map__17010);
var upper_button = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"upper-button","upper-button",-686549047));
var lower_button = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"lower-button","lower-button",-1461985619));
var customization_color = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"blue","blue",-622100620));
var image = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var title = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var blur_QMARK_ = cljs.core.get.call(null,map__17010__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.fast_image.fast_image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.image,new cljs.core.Keyword(null,"source","source",-433931539),image], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.text_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.title.call(null,blur_QMARK_),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.description.call(null,blur_QMARK_),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),description], null)], null),(function (){var temp__5735__auto__ = upper_button;
if(cljs.core.truth_(temp__5735__auto__)){
var map__17016 = temp__5735__auto__;
var map__17016__$1 = (((((!((map__17016 == null))))?(((((map__17016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17016):map__17016);
var upper_button_text = cljs.core.get.call(null,map__17016__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var upper_button_on_press = cljs.core.get.call(null,map__17016__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.empty_state.empty_state.styles.button_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,(function (){var G__17021 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"override-background-color","override-background-color",1009064888),quo2.components.empty_state.empty_state.styles.upper_button_color.call(null,customization_color),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),upper_button_on_press], null);
if(cljs.core.truth_(blur_QMARK_)){
return cljs.core.assoc.call(null,G__17021,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999));
} else {
return G__17021;
}
})(),upper_button_text], null),(function (){var temp__5735__auto____$1 = lower_button;
if(cljs.core.truth_(temp__5735__auto____$1)){
var map__17022 = temp__5735__auto____$1;
var map__17022__$1 = (((((!((map__17022 == null))))?(((((map__17022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17022):map__17022);
var lower_button_text = cljs.core.get.call(null,map__17022__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var lower_button_on_press = cljs.core.get.call(null,map__17022__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,(function (){var G__17024 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(12)], null),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blur-bg","blur-bg",-2109324038),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),lower_button_on_press], null);
if(cljs.core.truth_(blur_QMARK_)){
return cljs.core.assoc.call(null,G__17024,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999));
} else {
return G__17024;
}
})(),lower_button_text], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
})()], null);
});
Object.defineProperty(module.exports, "empty_state", { enumerable: false, get: function() { return quo2.components.empty_state.empty_state.view.empty_state; } });
//# sourceMappingURL=quo2.components.empty_state.empty_state.view.js.map
