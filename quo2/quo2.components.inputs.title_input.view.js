var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.inputs.title_input.style.js");
require("./quo2.components.markdown.text.js");
require("./reagent.core.js");
require("./react_native.core.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.title_input.view.js");

goog.provide('quo2.components.inputs.title_input.view');
quo2.components.inputs.title_input.view.pad_0 = (function quo2$components$inputs$title_input$view$pad_0(value){
if((cljs.core.count.call(null,value) <= (1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
quo2.components.inputs.title_input.view.title_input = (function quo2$components$inputs$title_input$view$title_input(p__17051){
var map__17052 = p__17051;
var map__17052__$1 = (((((!((map__17052 == null))))?(((((map__17052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17052):map__17052);
var blur_QMARK_ = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_change_text = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860));
var auto_focus = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),false);
var placeholder = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var max_length = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109),(0));
var default_value = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),"");
var override_theme = cljs.core.get.call(null,map__17052__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var focused_QMARK_ = reagent.core.atom.call(null,auto_focus);
var value = reagent.core.atom.call(null,default_value);
var on_change = (function (v){
cljs.core.reset_BANG_.call(null,value,v);

if(cljs.core.truth_(on_change_text)){
return on_change_text.call(null,v);
} else {
return null;
}
});
return (function (p__17054){
var map__17055 = p__17054;
var map__17055__$1 = (((((!((map__17055 == null))))?(((((map__17055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17055):map__17055);
var customization_color = cljs.core.get.call(null,map__17055__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
var disabled_QMARK_ = cljs.core.get.call(null,map__17055__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.text_input_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text_input,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"editable","editable",1930280326),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"selection-color","selection-color",233738767),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"input-mode","input-mode",1777008412),new cljs.core.Keyword(null,"keyboard-appearance","keyboard-appearance",-979969826)],[max_length,placeholder,cljs.core.not(disabled_QMARK_),new cljs.core.Keyword(null,"profile-title-input","profile-title-input",1864232821),(function (){
return cljs.core.swap_BANG_.call(null,focused_QMARK_,cljs.core.constantly.call(null,true));
}),default_value,(function (){
return cljs.core.swap_BANG_.call(null,focused_QMARK_,cljs.core.constantly.call(null,false));
}),quo2.components.inputs.title_input.style.get_selection_color.call(null,customization_color,blur_QMARK_,override_theme),quo2.components.markdown.text.text_style.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"heading-2","heading-2",-1189317102),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.title_text.call(null,disabled_QMARK_,blur_QMARK_,override_theme)], null)),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?quo2.components.inputs.title_input.style.get_focused_placeholder_color.call(null,blur_QMARK_,override_theme):quo2.components.inputs.title_input.style.get_placeholder_color.call(null,blur_QMARK_,override_theme)),on_change,auto_focus,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.theme.theme_value.call(null,new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme)])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.counter_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.char_count.call(null,blur_QMARK_,override_theme),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),quo2.components.inputs.title_input.view.pad_0.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,value))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.title_input.style.char_count.call(null,blur_QMARK_,override_theme),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quo2.components.inputs.title_input.view.pad_0.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_length)))].join('')], null)], null)], null)], null);
});
});
Object.defineProperty(module.exports, "pad_0", { enumerable: false, get: function() { return quo2.components.inputs.title_input.view.pad_0; } });
Object.defineProperty(module.exports, "title_input", { enumerable: false, get: function() { return quo2.components.inputs.title_input.view.title_input; } });
//# sourceMappingURL=quo2.components.inputs.title_input.view.js.map
