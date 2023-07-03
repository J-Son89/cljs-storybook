var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.core.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.icon.js");
require("./reagent.core.js");
require("./quo2.components.colors.color_picker.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.colors.color_picker.view.js");

goog.provide('quo2.components.colors.color_picker.view');
quo2.components.colors.color_picker.view.color_list = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"copper","copper",-934352731),new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"camel","camel",-126762952),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"army","army",842961270),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"no-color","no-color",-309925745)], null);
quo2.components.colors.color_picker.view.picker_colors = (function quo2$components$colors$color_picker$view$picker_colors(blur_QMARK_){
return cljs.core.map.call(null,(function (color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),color,new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.custom_color_by_theme.call(null,color,(cljs.core.truth_(blur_QMARK_)?(60):(50)),(60))], null);
}),quo2.components.colors.color_picker.view.color_list);
});
quo2.components.colors.color_picker.view.on_change_handler = (function quo2$components$colors$color_picker$view$on_change_handler(selected,color_name,on_change){
cljs.core.reset_BANG_.call(null,selected,color_name);

if(cljs.core.truth_(on_change)){
return on_change.call(null,color_name);
} else {
return null;
}
});
quo2.components.colors.color_picker.view.empty_color_item = (function quo2$components$colors$color_picker$view$empty_color_item(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.color_button_common], null)], null);
});
quo2.components.colors.color_picker.view.color_item = (function quo2$components$colors$color_picker$view$color_item(p__16699){
var map__16701 = p__16699;
var map__16701__$1 = (((((!((map__16701 == null))))?(((((map__16701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16701):map__16701);
var name = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var color = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var secondary_color = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"secondary-color","secondary-color",1338634739));
var selected_QMARK_ = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var on_press = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var blur_QMARK_ = cljs.core.get.call(null,map__16701__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var border_QMARK_ = ((cljs.core.not(blur_QMARK_))?(function (){var and__4115__auto__ = secondary_color;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(selected_QMARK_);
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-color","no-color",-309925745),name)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.colors.color_picker.view.empty_color_item], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.color_button.call(null,color,selected_QMARK_),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"color-picker-item","color-picker-item",699894775),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return on_press.call(null,name);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibile","accessibile",-107082797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),name,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.color_circle.call(null,color,border_QMARK_)], null),(cljs.core.truth_((function (){var and__4115__auto__ = secondary_color;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(selected_QMARK_);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.secondary_overlay.call(null,secondary_color,border_QMARK_)], null)], null):null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","check","i/check",1226308239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__4126__auto__ = secondary_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.foundations.colors.white;
}
})()], null)], null):null)], null)], null);
}
});
/**
 * Options
 * - `default-selected?` Default selected color name.
 * - `selected` Selected color name.
 * - `on-change` Callback called when a color is selected `(fn [color-name])`.
 * - `blur?` Boolean to enable blur background support.}
 */
quo2.components.colors.color_picker.view.view = (function quo2$components$colors$color_picker$view$view(p__16715){
var map__16716 = p__16715;
var map__16716__$1 = (((((!((map__16716 == null))))?(((((map__16716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16716):map__16716);
var default_selected_QMARK_ = cljs.core.get.call(null,map__16716__$1,new cljs.core.Keyword(null,"default-selected?","default-selected?",1900063812));
var internal_selected = reagent.core.atom.call(null,default_selected_QMARK_);
return (function (p__16718){
var map__16719 = p__16718;
var map__16719__$1 = (((((!((map__16719 == null))))?(((((map__16719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16719):map__16719);
var blur_QMARK_ = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_change = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var selected = cljs.core.get.call(null,map__16719__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
if((((!((selected == null)))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_selected),selected)))){
cljs.core.reset_BANG_.call(null,internal_selected,selected);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.color_picker_container], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,color){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),color.call(null,new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.colors.color_picker.view.color_item,cljs.core.merge.call(null,color,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.call(null,color.call(null,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.deref.call(null,internal_selected)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (p1__16711_SHARP_){
return quo2.components.colors.color_picker.view.on_change_handler.call(null,internal_selected,p1__16711_SHARP_,on_change);
}),new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_], null))], null),((cljs.core._EQ_.call(null,index,(5)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.colors.color_picker.style.flex_break], null)], null):null)], null);
}),quo2.components.colors.color_picker.view.picker_colors.call(null,blur_QMARK_)))], null);
});
});
Object.defineProperty(module.exports, "color_list", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.color_list; } });
Object.defineProperty(module.exports, "picker_colors", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.picker_colors; } });
Object.defineProperty(module.exports, "on_change_handler", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.on_change_handler; } });
Object.defineProperty(module.exports, "empty_color_item", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.empty_color_item; } });
Object.defineProperty(module.exports, "color_item", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.color_item; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.colors.color_picker.view.view; } });
//# sourceMappingURL=quo2.components.colors.color_picker.view.js.map
