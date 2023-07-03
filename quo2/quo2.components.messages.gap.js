var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.messages.gap.js");

goog.provide('quo2.components.messages.gap');
quo2.components.messages.gap.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"time","time",1385887882),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"background","background",-863952629),quo2.foundations.colors.neutral_5], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"time","time",1385887882),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"background","background",-863952629),quo2.foundations.colors.neutral_95], null)], null);
quo2.components.messages.gap.get_color = (function quo2$components$messages$gap$get_color(key){
return cljs.core.get_in.call(null,quo2.components.messages.gap.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.theme.get_theme.call(null),key], null));
});
quo2.components.messages.gap.ui_images = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),require("../resources/images/ui/message-gap-hborder-light.png"),new cljs.core.Keyword(null,"vertical","vertical",718696748),require("../resources/images/ui/message-gap-vborder-light.png"),new cljs.core.Keyword(null,"circles","circles",-1947060917),require("../resources/images/ui/message-gap-circle-bg-light.png")], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),require("../resources/images/ui/message-gap-hborder-dark.png"),new cljs.core.Keyword(null,"circles","circles",-1947060917),require("../resources/images/ui/message-gap-circle-bg-dark.png")], null)], null);
quo2.components.messages.gap.get_image = (function quo2$components$messages$gap$get_image(key){
return cljs.core.get_in.call(null,quo2.components.messages.gap.ui_images,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.theme.get_theme.call(null),key], null));
});
quo2.components.messages.gap.hborder = (function quo2$components$messages$gap$hborder(p__17200){
var map__17201 = p__17200;
var map__17201__$1 = (((((!((map__17201 == null))))?(((((map__17201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17201):map__17201);
var type = cljs.core.get.call(null,map__17201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.call(null,map__17201__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),quo2.components.messages.gap.get_image.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(4),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"width","width",-384071477),"110%",new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-4)], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"top","top",-1856271961)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotateZ","rotateZ",-2039495426),"180deg"], null)], null),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)),style)], null)], null);
});
quo2.components.messages.gap.vborder = (function quo2$components$messages$gap$vborder(type,body_height){
var height = cljs.core.deref.call(null,body_height);
var img = quo2.components.messages.gap.get_image.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748));
if(cljs.core.truth_((function (){var and__4115__auto__ = img;
if(cljs.core.truth_(and__4115__auto__)){
return height;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),img,new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(4),new cljs.core.Keyword(null,"height","height",1025178622),(height - (8)),new cljs.core.Keyword(null,"width","width",-384071477),(4)], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"left","left",-399115937)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(0)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),"180deg"], null)], null),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null)))], null)], null);
} else {
return null;
}
});
quo2.components.messages.gap.circle = (function quo2$components$messages$gap$circle(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(9),new cljs.core.Keyword(null,"height","height",1025178622),(9),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),(4),new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.messages.gap.get_color.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(50)], null)], null);
});
quo2.components.messages.gap.timestamp = (function quo2$components$messages$gap$timestamp(str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.messages.gap.get_color.call(null,new cljs.core.Keyword(null,"time","time",1385887882))], null)], null),str], null);
});
quo2.components.messages.gap.info_button = (function quo2$components$messages$gap$info_button(on_press){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,"message-gap-info",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"no-color","no-color",-309925745),true,new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(4)], null)], null)], null)], null);
});
quo2.components.messages.gap.timeline = (function quo2$components$messages$gap$timeline(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),(9),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.circle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"source","source",-433931539),quo2.components.messages.gap.get_image.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917)),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"repeat","repeat",832692087)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.circle], null)], null);
});
quo2.components.messages.gap.body = (function quo2$components$messages$gap$body(timestamp_far,timestamp_near,on_info_button_pressed,on_press,warning_label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.timestamp,timestamp_far], null),(cljs.core.truth_(on_info_button_pressed)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.info_button,on_info_button_pressed], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(16),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if(cljs.core.truth_(on_press)){
return on_press.call(null);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,warning_label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.timestamp,timestamp_near], null)], null);
});
/**
 * if `gap-ids` and `chat-id` are provided, press the main text area to fetch messages
 *   if `on-info-button-pressed` fn is provided, the info button will show up and is pressable
 */
quo2.components.messages.gap.gap = (function quo2$components$messages$gap$gap(p__17227){
var map__17228 = p__17227;
var map__17228__$1 = (((((!((map__17228 == null))))?(((((map__17228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17228):map__17228);
var timestamp_far = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"timestamp-far","timestamp-far",981767233));
var timestamp_near = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"timestamp-near","timestamp-near",1225956415));
var on_info_button_pressed = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"on-info-button-pressed","on-info-button-pressed",1451689334));
var style = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var on_press = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var warning_label = cljs.core.get.call(null,map__17228__$1,new cljs.core.Keyword(null,"warning-label","warning-label",-252042644));
var body_height = reagent.core.atom.call(null,null);
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),(function (p1__17223_SHARP_){
return cljs.core.reset_BANG_.call(null,body_height,(function (){var target_obj_17239 = p1__17223_SHARP_;
var _STAR_runtime_state_STAR__orig_val__17244 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17245 = oops.state.prepare_state.call(null,target_obj_17239,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17245);

try{var next_obj_17241 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17239,(0),"nativeEvent",true,true,false))?(target_obj_17239["nativeEvent"]):null);
var next_obj_17242 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17241,(0),"layout",true,true,false))?(next_obj_17241["layout"]):null);
var next_obj_17243 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17242,(0),"height",true,true,false))?(next_obj_17242["height"]):null);
return next_obj_17243;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17244);
}})());
}),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.hborder,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"top","top",-1856271961)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.hborder,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.messages.gap.get_color.call(null,new cljs.core.Keyword(null,"background","background",-863952629)),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(31),new cljs.core.Keyword(null,"margin-vertical","margin-vertical",-320294707),(4)], null),style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.timeline], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.body,timestamp_far,timestamp_near,on_info_button_pressed,on_press,warning_label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.vborder,new cljs.core.Keyword(null,"left","left",-399115937),body_height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.gap.vborder,new cljs.core.Keyword(null,"right","right",-452581833),body_height], null)], null);
});
});
Object.defineProperty(module.exports, "timeline", { enumerable: false, get: function() { return quo2.components.messages.gap.timeline; } });
Object.defineProperty(module.exports, "timestamp", { enumerable: false, get: function() { return quo2.components.messages.gap.timestamp; } });
Object.defineProperty(module.exports, "body", { enumerable: false, get: function() { return quo2.components.messages.gap.body; } });
Object.defineProperty(module.exports, "get_image", { enumerable: false, get: function() { return quo2.components.messages.gap.get_image; } });
Object.defineProperty(module.exports, "hborder", { enumerable: false, get: function() { return quo2.components.messages.gap.hborder; } });
Object.defineProperty(module.exports, "circle", { enumerable: false, get: function() { return quo2.components.messages.gap.circle; } });
Object.defineProperty(module.exports, "info_button", { enumerable: false, get: function() { return quo2.components.messages.gap.info_button; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.messages.gap.themes; } });
Object.defineProperty(module.exports, "vborder", { enumerable: false, get: function() { return quo2.components.messages.gap.vborder; } });
Object.defineProperty(module.exports, "gap", { enumerable: false, get: function() { return quo2.components.messages.gap.gap; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.messages.gap.get_color; } });
Object.defineProperty(module.exports, "ui_images", { enumerable: false, get: function() { return quo2.components.messages.gap.ui_images; } });
//# sourceMappingURL=quo2.components.messages.gap.js.map
