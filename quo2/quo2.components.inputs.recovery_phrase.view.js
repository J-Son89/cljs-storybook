var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.inputs.recovery_phrase.style.js");
require("./react_native.core.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.recovery_phrase.view.js");

goog.provide('quo2.components.inputs.recovery_phrase.view');
quo2.components.inputs.recovery_phrase.view.custom_props = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"blur?","blur?",366148003),new cljs.core.Keyword(null,"cursor-color","cursor-color",792298766),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"mark-errors?","mark-errors?",1408099926),new cljs.core.Keyword(null,"error-pred","error-pred",90096673),new cljs.core.Keyword(null,"word-limit","word-limit",342968274)], null);
quo2.components.inputs.recovery_phrase.view.error_word = (function quo2$components$inputs$recovery_phrase$view$error_word(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.recovery_phrase.style.error_word.call(null)], null),text], null);
});
quo2.components.inputs.recovery_phrase.view.mark_error_words = (function quo2$components$inputs$recovery_phrase$view$mark_error_words(pred_last_word,pred_previous_words,text,word_limit){
var last_index = (cljs.core.count.call(null,clojure.string.split.call(null,text,/\s+/)) - (1));
var words = cljs.core.map.call(null,(function (p1__17075_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__17075_SHARP_);
}),cljs.core.partition_by.call(null,(function (p1__17076_SHARP_){
return cljs.core._EQ_.call(null," ",p1__17076_SHARP_);
}),text));
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__17083,word){
var map__17084 = p__17083;
var map__17084__$1 = (((((!((map__17084 == null))))?(((((map__17084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17084):map__17084);
var acc = map__17084__$1;
var idx = cljs.core.get.call(null,map__17084__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var error_pred = ((cljs.core._EQ_.call(null,last_index,idx))?pred_last_word:pred_previous_words);
var invalid_word_QMARK_ = (function (){var and__4115__auto__ = (function (){var or__4126__auto__ = error_pred.call(null,word);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (idx >= word_limit);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,word)));
} else {
return and__4115__auto__;
}
})();
var not_blank_spaces_QMARK_ = (!(clojure.string.blank_QMARK_.call(null,word)));
var G__17100 = acc;
var G__17100__$1 = ((not_blank_spaces_QMARK_)?cljs.core.update.call(null,G__17100,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.inc):G__17100);
return cljs.core.update.call(null,G__17100__$1,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.conj,(cljs.core.truth_(invalid_word_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.recovery_phrase.view.error_word,word], null):word));

}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),new cljs.core.Keyword(null,"idx","idx",1053688473),(0)], null),words));
});
quo2.components.inputs.recovery_phrase.view.recovery_phrase_input = (function quo2$components$inputs$recovery_phrase$view$recovery_phrase_input(_,___$1){
var state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
var set_focused = (function (){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.Keyword(null,"focused","focused",1851572115));
});
var set_default = (function (){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.Keyword(null,"default","default",-1987822328));
});
return (function (p__17131,text){
var map__17132 = p__17131;
var map__17132__$1 = (((((!((map__17132 == null))))?(((((map__17132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17132):map__17132);
var props = map__17132__$1;
var error_pred_written_words = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"error-pred-written-words","error-pred-written-words",-53662113),cljs.core.constantly.call(null,false));
var override_theme = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var blur_QMARK_ = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_focus = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var customization_color = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"blue","blue",-622100620));
var word_limit = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"word-limit","word-limit",342968274),Infinity);
var mark_errors_QMARK_ = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"mark-errors?","mark-errors?",1408099926));
var error_pred_current_word = cljs.core.get.call(null,map__17132__$1,new cljs.core.Keyword(null,"error-pred-current-word","error-pred-current-word",-344143210),cljs.core.constantly.call(null,false));
var extra_props = cljs.core.apply.call(null,cljs.core.dissoc,props,quo2.components.inputs.recovery_phrase.view.custom_props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.recovery_phrase.style.container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text_input,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"recovery-phrase-input","recovery-phrase-input",-411064404),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.recovery_phrase.style.input.call(null),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),quo2.components.inputs.recovery_phrase.style.placeholder_color.call(null,cljs.core.deref.call(null,state),override_theme,blur_QMARK_),new cljs.core.Keyword(null,"cursor-color","cursor-color",792298766),quo2.components.inputs.recovery_phrase.style.cursor_color.call(null,customization_color,override_theme),new cljs.core.Keyword(null,"keyboard-appearance","keyboard-appearance",-979969826),quo2.theme.theme_value.call(null,new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
set_focused();

if(cljs.core.truth_(on_focus)){
return on_focus.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
set_default();

if(cljs.core.truth_(on_blur)){
return on_blur.call(null);
} else {
return null;
}
})], null),extra_props),(cljs.core.truth_(mark_errors_QMARK_)?quo2.components.inputs.recovery_phrase.view.mark_error_words.call(null,error_pred_current_word,error_pred_written_words,text,word_limit):text)], null)], null);
});
});
Object.defineProperty(module.exports, "custom_props", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.view.custom_props; } });
Object.defineProperty(module.exports, "error_word", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.view.error_word; } });
Object.defineProperty(module.exports, "mark_error_words", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.view.mark_error_words; } });
Object.defineProperty(module.exports, "recovery_phrase_input", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.view.recovery_phrase_input; } });
//# sourceMappingURL=quo2.components.inputs.recovery_phrase.view.js.map
