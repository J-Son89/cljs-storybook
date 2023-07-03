var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.inputs.search_input.style.js");
require("./react_native.core.js");
require("./reagent.core.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.search_input.view.js");

goog.provide('quo2.components.inputs.search_input.view');
quo2.components.inputs.search_input.view.tag_separator = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.search_input.style.tag_separator], null)], null);
quo2.components.inputs.search_input.view.inner_tags = (function quo2$components$inputs$search_input$view$inner_tags(tags_coll){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.search_input.style.tag_container], null)], null),cljs.core.interpose.call(null,quo2.components.inputs.search_input.view.tag_separator),tags_coll);
});
quo2.components.inputs.search_input.view.clear_button = (function quo2$components$inputs$search_input$view$clear_button(p__17094){
var map__17096 = p__17094;
var map__17096__$1 = (((((!((map__17096 == null))))?(((((map__17096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17096):map__17096);
var on_press = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var blur_QMARK_ = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var override_theme = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.search_input.style.clear_icon_container,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","clear","i/clear",1877104870),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.inputs.search_input.style.clear_icon.call(null,blur_QMARK_,override_theme),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
quo2.components.inputs.search_input.view.handle_backspace = (function quo2$components$inputs$search_input$view$handle_backspace(event,scroll_view_ref){
if(cljs.core.truth_(((cljs.core._EQ_.call(null,(function (){var target_obj_17125 = event;
var _STAR_runtime_state_STAR__orig_val__17128 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17129 = oops.state.prepare_state.call(null,target_obj_17125,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17129);

try{var next_obj_17126 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17125,(0),"nativeEvent",true,true,false))?(target_obj_17125["nativeEvent"]):null);
var next_obj_17127 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17126,(0),"key",true,true,false))?(next_obj_17126["key"]):null);
return next_obj_17127;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17128);
}})(),"Backspace"))?scroll_view_ref:false))){
return scroll_view_ref.scrollToEnd(({"animated": false}));
} else {
return null;
}
});
quo2.components.inputs.search_input.view.props_to_remove = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor-color","cursor-color",792298766),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"editable","editable",1930280326),new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"blur?","blur?",366148003),new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800)], null);
quo2.components.inputs.search_input.view.add_children = (function quo2$components$inputs$search_input$view$add_children(text_input,children){
if(cljs.core.seq.call(null,children)){
return cljs.core.into.call(null,text_input,children);
} else {
return text_input;
}
});
quo2.components.inputs.search_input.view.search_input = (function quo2$components$inputs$search_input$view$search_input(p__17137){
var map__17138 = p__17137;
var map__17138__$1 = (((((!((map__17138 == null))))?(((((map__17138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17138):map__17138);
var value = cljs.core.get.call(null,map__17138__$1,new cljs.core.Keyword(null,"value","value",305978217));
var state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
var set_active = (function (){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.Keyword(null,"active","active",1895962068));
});
var set_default = (function (){
return cljs.core.reset_BANG_.call(null,state,new cljs.core.Keyword(null,"default","default",-1987822328));
});
var scroll_view_ref = cljs.core.atom.call(null,null);
var use_value_QMARK_ = cljs.core.boolean$.call(null,value);
return (function() { 
var G__17162__delegate = function (p__17141,children){
var map__17142 = p__17141;
var map__17142__$1 = (((((!((map__17142 == null))))?(((((map__17142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17142):map__17142);
var props = map__17142__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var override_theme = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var tags = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var on_clear = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
var blur_QMARK_ = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_focus = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var value__$1 = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_blur = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var customization_color = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"blue","blue",-622100620));
var on_change_text = cljs.core.get.call(null,map__17142__$1,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860));
var clean_props = cljs.core.apply.call(null,cljs.core.dissoc,props,quo2.components.inputs.search_input.view.props_to_remove);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.search_input.style.container], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.scroll_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__17134_SHARP_){
return cljs.core.reset_BANG_.call(null,scroll_view_ref,p1__17134_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.search_input.style.scroll_container,new cljs.core.Keyword(null,"content-container-style","content-container-style",-26145133),quo2.components.inputs.search_input.style.scroll_content,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"shows-horizontal-scroll-indicator","shows-horizontal-scroll-indicator",-727898649),false], null),((cljs.core.seq.call(null,tags))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.search_input.view.inner_tags,tags], null):null),quo2.components.inputs.search_input.view.add_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text_input,(function (){var G__17146 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"editable","editable",1930280326),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"cursor-color","cursor-color",792298766),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),new cljs.core.Keyword(null,"keyboard-appearance","keyboard-appearance",-979969826)],[(function (p1__17135_SHARP_){
return quo2.components.inputs.search_input.view.handle_backspace.call(null,p1__17135_SHARP_,cljs.core.deref.call(null,scroll_view_ref));
}),cljs.core.not(disabled_QMARK_),(function (){
set_active();

if(cljs.core.truth_(on_focus)){
return on_focus.call(null);
} else {
return null;
}
}),(function (){
set_default();

if(cljs.core.truth_(on_blur)){
return on_blur.call(null);
} else {
return null;
}
}),quo2.components.inputs.search_input.style.cursor.call(null,customization_color,override_theme),quo2.components.inputs.search_input.style.input_text.call(null,disabled_QMARK_),quo2.components.inputs.search_input.style.placeholder_color.call(null,cljs.core.deref.call(null,state),blur_QMARK_,override_theme),(function (new_text){
if(cljs.core.truth_(on_change_text)){
on_change_text.call(null,new_text);
} else {
}

return reagent.core.flush.call(null);
}),quo2.foundations.colors.theme_colors.call(null,new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme)]);
var G__17146__$1 = ((use_value_QMARK_)?cljs.core.assoc.call(null,G__17146,new cljs.core.Keyword(null,"value","value",305978217),value__$1):G__17146);
if(cljs.core.seq.call(null,clean_props)){
return cljs.core.merge.call(null,G__17146__$1,clean_props);
} else {
return G__17146__$1;
}
})()], null),((use_value_QMARK_)?null:children))], null),((((cljs.core.seq.call(null,value__$1)) || (cljs.core.seq.call(null,children))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.search_input.view.clear_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_clear,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),override_theme], null)], null):null)], null);
};
var G__17162 = function (p__17141,var_args){
var children = null;
if (arguments.length > 1) {
var G__17168__i = 0, G__17168__a = new Array(arguments.length -  1);
while (G__17168__i < G__17168__a.length) {G__17168__a[G__17168__i] = arguments[G__17168__i + 1]; ++G__17168__i;}
  children = new cljs.core.IndexedSeq(G__17168__a,0,null);
} 
return G__17162__delegate.call(this,p__17141,children);};
G__17162.cljs$lang$maxFixedArity = 1;
G__17162.cljs$lang$applyTo = (function (arglist__17169){
var p__17141 = cljs.core.first(arglist__17169);
var children = cljs.core.rest(arglist__17169);
return G__17162__delegate(p__17141,children);
});
G__17162.cljs$core$IFn$_invoke$arity$variadic = G__17162__delegate;
return G__17162;
})()
;
});
Object.defineProperty(module.exports, "tag_separator", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.tag_separator; } });
Object.defineProperty(module.exports, "inner_tags", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.inner_tags; } });
Object.defineProperty(module.exports, "clear_button", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.clear_button; } });
Object.defineProperty(module.exports, "handle_backspace", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.handle_backspace; } });
Object.defineProperty(module.exports, "props_to_remove", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.props_to_remove; } });
Object.defineProperty(module.exports, "add_children", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.add_children; } });
Object.defineProperty(module.exports, "search_input", { enumerable: false, get: function() { return quo2.components.inputs.search_input.view.search_input; } });
//# sourceMappingURL=quo2.components.inputs.search_input.view.js.map
