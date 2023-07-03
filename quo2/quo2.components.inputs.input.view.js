var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.inputs.input.style.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.input.view.js");

goog.provide('quo2.components.inputs.input.view');
quo2.components.inputs.input.view.label__AMPERSAND__counter = (function quo2$components$inputs$input$view$label__AMPERSAND__counter(p__17060){
var map__17061 = p__17060;
var map__17061__$1 = (((((!((map__17061 == null))))?(((((map__17061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17061):map__17061);
var label = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var current_chars = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"current-chars","current-chars",-1901182739));
var char_limit = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"char-limit","char-limit",-107884369));
var variant_colors = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175));
var count_text = (cljs.core.truth_(char_limit)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_chars),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_limit)].join(''):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"input-labels","input-labels",-1235558218),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.texts_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.label_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.label_color.call(null,variant_colors),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.counter_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.counter_color.call(null,current_chars,char_limit,variant_colors),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),count_text], null)], null)], null);
});
quo2.components.inputs.input.view.left_accessory = (function quo2$components$inputs$input$view$left_accessory(p__17063){
var map__17064 = p__17063;
var map__17064__$1 = (((((!((map__17064 == null))))?(((((map__17064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17064):map__17064);
var variant_colors = cljs.core.get.call(null,map__17064__$1,new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175));
var small_QMARK_ = cljs.core.get.call(null,map__17064__$1,new cljs.core.Keyword(null,"small?","small?",95242445));
var icon_name = cljs.core.get.call(null,map__17064__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"input-icon","input-icon",-210150429),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.left_icon_container.call(null,small_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon_name,quo2.components.inputs.input.style.icon.call(null,variant_colors)], null)], null);
});
quo2.components.inputs.input.view.right_accessory = (function quo2$components$inputs$input$view$right_accessory(p__17069){
var map__17070 = p__17069;
var map__17070__$1 = (((((!((map__17070 == null))))?(((((map__17070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17070):map__17070);
var variant_colors = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175));
var small_QMARK_ = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"small?","small?",95242445));
var disabled_QMARK_ = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_press = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon_style_fn = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"icon-style-fn","icon-style-fn",2041905177));
var icon_name = cljs.core.get.call(null,map__17070__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"input-right-icon","input-right-icon",1264815607),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.right_icon_touchable_area.call(null,small_QMARK_),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon_name,icon_style_fn.call(null,variant_colors)], null)], null);
});
quo2.components.inputs.input.view.right_button = (function quo2$components$inputs$input$view$right_button(p__17072){
var map__17073 = p__17072;
var map__17073__$1 = (((((!((map__17073 == null))))?(((((map__17073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17073):map__17073);
var variant_colors = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175));
var colors_by_status = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"colors-by-status","colors-by-status",3445934));
var small_QMARK_ = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"small?","small?",95242445));
var disabled_QMARK_ = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_press = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var text = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"input-button","input-button",1826953244),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.button.call(null,variant_colors,small_QMARK_),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.button_text.call(null,colors_by_status)], null),text], null)], null);
});
/**
 * Custom properties that must be removed from properties map passed to InputText.
 */
quo2.components.inputs.input.view.custom_props = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blur?","blur?",366148003),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"error?","error?",-460689159),new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"small?","small?",95242445),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"char-limit","char-limit",-107884369),new cljs.core.Keyword(null,"on-char-limit-reach","on-char-limit-reach",1290158684),new cljs.core.Keyword(null,"icon-name","icon-name",152456315),new cljs.core.Keyword(null,"multiline?","multiline?",405422918),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747)], null);
quo2.components.inputs.input.view.base_input = (function quo2$components$inputs$input$view$base_input(p__17079){
var map__17080 = p__17079;
var map__17080__$1 = (((((!((map__17080 == null))))?(((((map__17080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17080):map__17080);
var on_change_text = cljs.core.get.call(null,map__17080__$1,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860));
var on_char_limit_reach = cljs.core.get.call(null,map__17080__$1,new cljs.core.Keyword(null,"on-char-limit-reach","on-char-limit-reach",1290158684));
var status = reagent.core.atom.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
var internal_on_focus = (function (){
return cljs.core.reset_BANG_.call(null,status,new cljs.core.Keyword(null,"focus","focus",234677911));
});
var internal_on_blur = (function (){
return cljs.core.reset_BANG_.call(null,status,new cljs.core.Keyword(null,"default","default",-1987822328));
});
var multiple_lines_QMARK_ = reagent.core.atom.call(null,false);
var set_multiple_lines_BANG_ = (function (p1__17077_SHARP_){
var height = (function (){var target_obj_17082 = p1__17077_SHARP_;
var _STAR_runtime_state_STAR__orig_val__17089 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17090 = oops.state.prepare_state.call(null,target_obj_17082,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17090);

try{var next_obj_17086 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17082,(0),"nativeEvent",true,true,false))?(target_obj_17082["nativeEvent"]):null);
var next_obj_17087 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17086,(0),"contentSize",true,true,false))?(next_obj_17086["contentSize"]):null);
var next_obj_17088 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17087,(0),"height",true,true,false))?(next_obj_17087["height"]):null);
return next_obj_17088;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17089);
}})();
if((height > (57))){
return cljs.core.reset_BANG_.call(null,multiple_lines_QMARK_,true);
} else {
return cljs.core.reset_BANG_.call(null,multiple_lines_QMARK_,false);
}
});
var char_count = reagent.core.atom.call(null,(0));
var update_char_limit_BANG_ = (function (new_text,char_limit){
if(cljs.core.truth_(on_change_text)){
on_change_text.call(null,new_text);
} else {
}

var amount_chars = cljs.core.count.call(null,new_text);
cljs.core.reset_BANG_.call(null,char_count,amount_chars);

if((amount_chars >= char_limit)){
return on_char_limit_reach.call(null,amount_chars);
} else {
return null;
}
});
return (function (p__17104){
var map__17105 = p__17104;
var map__17105__$1 = (((((!((map__17105 == null))))?(((((map__17105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17105):map__17105);
var props = map__17105__$1;
var error_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var override_theme = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var blur_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var clearable_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var multiline_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"multiline?","multiline?",405422918));
var button = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var on_focus = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var small_QMARK_ = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"small?","small?",95242445));
var char_limit = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"char-limit","char-limit",-107884369));
var label = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var right_icon = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"right-icon","right-icon",-707506540));
var left_icon = cljs.core.get.call(null,map__17105__$1,new cljs.core.Keyword(null,"left-icon","left-icon",769524213));
var status_kw = (cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):(cljs.core.truth_(error_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):cljs.core.deref.call(null,status)
));
var colors_by_status = quo2.components.inputs.input.style.status_colors.call(null,status_kw,blur_QMARK_,override_theme);
var variant_colors = quo2.components.inputs.input.style.variants_colors.call(null,blur_QMARK_,override_theme);
var clean_props = cljs.core.apply.call(null,cljs.core.dissoc,props,quo2.components.inputs.input.view.custom_props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_((function (){var or__4126__auto__ = label;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return char_limit;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.label__AMPERSAND__counter,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175),variant_colors,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"current-chars","current-chars",-1901182739),cljs.core.deref.call(null,char_count),new cljs.core.Keyword(null,"char-limit","char-limit",-107884369),char_limit], null)], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.input_container.call(null,colors_by_status,small_QMARK_,disabled_QMARK_)], null),(function (){var temp__5735__auto__ = left_icon;
if(cljs.core.truth_(temp__5735__auto__)){
var map__17123 = temp__5735__auto__;
var map__17123__$1 = (((((!((map__17123 == null))))?(((((map__17123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17123):map__17123);
var icon_name = cljs.core.get.call(null,map__17123__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.left_accessory,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175),variant_colors,new cljs.core.Keyword(null,"small?","small?",95242445),small_QMARK_,new cljs.core.Keyword(null,"icon-name","icon-name",152456315),icon_name], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text_input,(function (){var G__17130 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.input.style.input.call(null,colors_by_status,small_QMARK_,cljs.core.deref.call(null,multiple_lines_QMARK_)),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(colors_by_status),new cljs.core.Keyword(null,"keyboard-appearance","keyboard-appearance",-979969826),quo2.theme.theme_value.call(null,new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme),new cljs.core.Keyword(null,"cursor-color","cursor-color",792298766),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(variant_colors),new cljs.core.Keyword(null,"editable","editable",1930280326),cljs.core.not(disabled_QMARK_),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
if(cljs.core.truth_(on_focus)){
on_focus.call(null);
} else {
}

return internal_on_focus();
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(on_blur)){
on_blur.call(null);
} else {
}

return internal_on_blur();
})], null);
var G__17130__$1 = cljs.core.merge.call(null,G__17130,clean_props)
;
var G__17130__$2 = (cljs.core.truth_(multiline_QMARK_)?cljs.core.assoc.call(null,G__17130__$1,new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true,new cljs.core.Keyword(null,"on-content-size-change","on-content-size-change",665415945),set_multiple_lines_BANG_):G__17130__$1);
if(cljs.core.truth_(char_limit)){
return cljs.core.assoc.call(null,G__17130__$2,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),(function (p1__17078_SHARP_){
return update_char_limit_BANG_(p1__17078_SHARP_,char_limit);
}));
} else {
return G__17130__$2;
}
})()], null),(function (){var temp__5735__auto__ = right_icon;
if(cljs.core.truth_(temp__5735__auto__)){
var map__17136 = temp__5735__auto__;
var map__17136__$1 = (((((!((map__17136 == null))))?(((((map__17136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17136):map__17136);
var on_press = cljs.core.get.call(null,map__17136__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon_name = cljs.core.get.call(null,map__17136__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var style_fn = cljs.core.get.call(null,map__17136__$1,new cljs.core.Keyword(null,"style-fn","style-fn",1689278216));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.right_accessory,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175),variant_colors,new cljs.core.Keyword(null,"small?","small?",95242445),small_QMARK_,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"icon-style-fn","icon-style-fn",2041905177),style_fn,new cljs.core.Keyword(null,"icon-name","icon-name",152456315),icon_name,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if(cljs.core.truth_(clearable_QMARK_)){
cljs.core.reset_BANG_.call(null,char_count,(0));
} else {
}

return on_press.call(null);
})], null)], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = button;
if(cljs.core.truth_(temp__5735__auto__)){
var map__17144 = temp__5735__auto__;
var map__17144__$1 = (((((!((map__17144 == null))))?(((((map__17144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17144):map__17144);
var on_press = cljs.core.get.call(null,map__17144__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var text = cljs.core.get.call(null,map__17144__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.right_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"colors-by-status","colors-by-status",3445934),colors_by_status,new cljs.core.Keyword(null,"variant-colors","variant-colors",1760172175),variant_colors,new cljs.core.Keyword(null,"small?","small?",95242445),small_QMARK_,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
} else {
return null;
}
})()], null)], null);
});
});
quo2.components.inputs.input.view.password_input = (function quo2$components$inputs$input$view$password_input(p__17148){
var map__17149 = p__17148;
var map__17149__$1 = (((((!((map__17149 == null))))?(((((map__17149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17149):map__17149);
var default_shown_QMARK_ = cljs.core.get.call(null,map__17149__$1,new cljs.core.Keyword(null,"default-shown?","default-shown?",-848001026),false);
var password_shown_QMARK_ = reagent.core.atom.call(null,default_shown_QMARK_);
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.base_input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"password-input","password-input",-978093158),new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"secure-text-entry","secure-text-entry",1622829879),cljs.core.not(cljs.core.deref.call(null,password_shown_QMARK_)),new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style-fn","style-fn",1689278216),quo2.components.inputs.input.style.password_icon,new cljs.core.Keyword(null,"icon-name","icon-name",152456315),(cljs.core.truth_(cljs.core.deref.call(null,password_shown_QMARK_))?new cljs.core.Keyword("i","hide","i/hide",-596913000):new cljs.core.Keyword("i","reveal","i/reveal",-131374321)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.swap_BANG_.call(null,password_shown_QMARK_,cljs.core.not);
})], null))], null);
});
});
/**
 * This input supports the following properties:
 *   - :type - Can be `:text`(default) or `:password`.
 *   - :blur? - Boolean to set the blur color variant.
 *   - :override-theme - Can be `light` or `:dark`.
 *   - :small? - Boolean to specify if this input is rendered in its small version.
 *   - :multiline? - Boolean to specify if this input support multiple lines.
 *   - :icon-name - The name of an icon to display at the left of the input.
 *   - :error? - Boolean to specify it this input marks an error.
 *   - :disabled? - Boolean to specify if this input is disabled or not.
 *   - :clearable? - Booolean to specify if this input has a clear button at the end.
 *   - :on-clear - Function executed when the clear button is pressed.
 *   - :button - Map containing `:on-press` & `:text` keys, if provided renders a button
 *   - :label - A string to set as label for this input.
 *   - :char-limit - A number to set a maximum char limit for this input.
 *   - :on-char-limit-reach - Function executed each time char limit is reached or exceeded.
 *   - :default-shown? - boolean to show password input initially
 *   and supports the usual React Native's TextInput properties to control its behaviour:
 *   - :value
 *   - :default-value
 *   - :on-change
 *   - :on-change-text
 *   ...
 *   
 */
quo2.components.inputs.input.view.input = (function quo2$components$inputs$input$view$input(p__17153){
var map__17154 = p__17153;
var map__17154__$1 = (((((!((map__17154 == null))))?(((((map__17154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17154):map__17154);
var props = map__17154__$1;
var type = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697));
var clearable_QMARK_ = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"clearable?","clearable?",661720997));
var on_clear = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
var on_change_text = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860));
var icon_name = cljs.core.get.call(null,map__17154__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var base_props = (function (){var G__17165 = props;
var G__17165__$1 = (cljs.core.truth_(icon_name)?cljs.core.assoc_in.call(null,G__17165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-icon","left-icon",769524213),new cljs.core.Keyword(null,"icon-name","icon-name",152456315)], null),icon_name):G__17165);
var G__17165__$2 = (cljs.core.truth_(clearable_QMARK_)?cljs.core.assoc.call(null,G__17165__$1,new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style-fn","style-fn",1689278216),quo2.components.inputs.input.style.clear_icon,new cljs.core.Keyword(null,"icon-name","icon-name",152456315),new cljs.core.Keyword("i","clear","i/clear",1877104870),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if(cljs.core.truth_(on_clear)){
return on_clear.call(null);
} else {
return null;
}
})], null)):G__17165__$1);
if(cljs.core.truth_(on_change_text)){
return cljs.core.assoc.call(null,G__17165__$2,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),(function (new_text){
on_change_text.call(null,new_text);

return reagent.core.flush.call(null);
}));
} else {
return G__17165__$2;
}
})();
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"password","password",417022471))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.password_input,base_props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.input.view.base_input,base_props], null);
}
});
Object.defineProperty(module.exports, "label__AMPERSAND__counter", { enumerable: false, get: function() { return quo2.components.inputs.input.view.label__AMPERSAND__counter; } });
Object.defineProperty(module.exports, "left_accessory", { enumerable: false, get: function() { return quo2.components.inputs.input.view.left_accessory; } });
Object.defineProperty(module.exports, "right_accessory", { enumerable: false, get: function() { return quo2.components.inputs.input.view.right_accessory; } });
Object.defineProperty(module.exports, "right_button", { enumerable: false, get: function() { return quo2.components.inputs.input.view.right_button; } });
Object.defineProperty(module.exports, "custom_props", { enumerable: false, get: function() { return quo2.components.inputs.input.view.custom_props; } });
Object.defineProperty(module.exports, "base_input", { enumerable: false, get: function() { return quo2.components.inputs.input.view.base_input; } });
Object.defineProperty(module.exports, "password_input", { enumerable: false, get: function() { return quo2.components.inputs.input.view.password_input; } });
Object.defineProperty(module.exports, "input", { enumerable: false, get: function() { return quo2.components.inputs.input.view.input; } });
//# sourceMappingURL=quo2.components.inputs.input.view.js.map
