var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.protocols.js");

goog.provide('reagent.impl.protocols');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_9556 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_9556(this$);
}
});

var reagent$impl$protocols$Compiler$parse_tag$dyn_9560 = (function (this$,tag_name,tag_value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reagent.impl.protocols.parse_tag[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,tag_name,tag_value);
} else {
var m__4426__auto__ = (reagent.impl.protocols.parse_tag["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,tag_name,tag_value);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.parse-tag",this$);
}
}
});
reagent.impl.protocols.parse_tag = (function reagent$impl$protocols$parse_tag(this$,tag_name,tag_value){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$parse_tag$arity$3 == null)))))){
return this$.reagent$impl$protocols$Compiler$parse_tag$arity$3(this$,tag_name,tag_value);
} else {
return reagent$impl$protocols$Compiler$parse_tag$dyn_9560(this$,tag_name,tag_value);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_9561 = (function (this$,x){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,x);
} else {
var m__4426__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_9561(this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_9562 = (function (this$,argv,component,jsprops,first_child){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
var m__4426__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_9562(this$,argv,component,jsprops,first_child);
}
});

Object.defineProperty(module.exports, "Compiler", { enumerable: false, get: function() { return reagent.impl.protocols.Compiler; } });
Object.defineProperty(module.exports, "get_id", { enumerable: false, get: function() { return reagent.impl.protocols.get_id; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return reagent.impl.protocols.parse_tag; } });
Object.defineProperty(module.exports, "as_element", { enumerable: false, get: function() { return reagent.impl.protocols.as_element; } });
Object.defineProperty(module.exports, "make_element", { enumerable: false, get: function() { return reagent.impl.protocols.make_element; } });
//# sourceMappingURL=reagent.impl.protocols.js.map
