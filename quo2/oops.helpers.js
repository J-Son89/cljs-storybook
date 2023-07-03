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

$CLJS.SHADOW_ENV.setLoaded("oops.helpers.js");

goog.provide('oops.helpers');
oops.helpers.is_prototype_QMARK_ = (function oops$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
oops.helpers.get_constructor = (function oops$helpers$get_constructor(o){
return (o["constructor"]);
});
oops.helpers.cljs_type_QMARK_ = (function oops$helpers$cljs_type_QMARK_(f){
var and__4115__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__4115__auto__)){
if((!(oops.helpers.is_prototype_QMARK_.call(null,f)))){
return (f["cljs$lang$type"]);
} else {
return false;
}
} else {
return and__4115__auto__;
}
});
oops.helpers.cljs_instance_QMARK_ = (function oops$helpers$cljs_instance_QMARK_(value){
var and__4115__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__4115__auto__)){
return oops.helpers.cljs_type_QMARK_.call(null,oops.helpers.get_constructor.call(null,value));
} else {
return and__4115__auto__;
}
});
oops.helpers.to_native_array = (function oops$helpers$to_native_array(coll){
if(cljs.core.array_QMARK_.call(null,coll)){
return coll;
} else {
var arr = [];
var items = cljs.core.seq.call(null,coll);
while(true){
if((!((items == null)))){
var item = cljs.core._first(items);
arr.push(item);

var G__13686 = cljs.core.next.call(null,items);
items = G__13686;
continue;
} else {
return arr;
}
break;
}
}
});
oops.helpers.repurpose_error = (function oops$helpers$repurpose_error(error,msg,info){


(error.message = msg);

var x13652 = error;
(x13652.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(x13652.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_obj,writer,opts){
var _obj__$1 = this;
cljs.core._write(writer,msg);

if((!((info == null)))){
cljs.core._write(writer," ");

return cljs.core.pr_writer.call(null,info,writer,opts);
} else {
return null;
}
}));

return x13652;
});
oops.helpers.get_property_descriptor = (function oops$helpers$get_property_descriptor(obj,property){
var o = obj;
while(true){
if((!((o == null)))){
var temp__5737__auto__ = Object.getOwnPropertyDescriptor(o,property);
if((temp__5737__auto__ == null)){
var G__13688 = Object.getPrototypeOf(o);
o = G__13688;
continue;
} else {
var descriptor = temp__5737__auto__;
return descriptor;
}
} else {
return null;
}
break;
}
});
oops.helpers.determine_property_non_writable_reason = (function oops$helpers$determine_property_non_writable_reason(property_descriptor){
if(cljs.core.truth_(property_descriptor.hasOwnProperty("writable"))){
if(property_descriptor.writable === false){
return "data property descriptor has writable=false";
} else {
return null;
}
} else {
if((property_descriptor.set == null)){
return "accessor property descriptor has neither writable flag nor a setter function";
} else {
return null;
}
}
});
oops.helpers.is_object_sealed_QMARK_ = (function oops$helpers$is_object_sealed_QMARK_(obj){
return Object.isSealed(obj);
});
oops.helpers.is_object_frozen_QMARK_ = (function oops$helpers$is_object_frozen_QMARK_(obj){
return Object.isFrozen(obj);
});
oops.helpers.wrap_data_in_enveloper_if_possible = (function oops$helpers$wrap_data_in_enveloper_if_possible(wrap_QMARK_,data){
var or__4126__auto__ = (cljs.core.truth_(wrap_QMARK_)?(function (){var temp__5739__auto__ = (goog.global["devtools"]);
if((temp__5739__auto__ == null)){
return null;
} else {
var devtools = temp__5739__auto__;
var temp__5739__auto____$1 = (devtools["toolbox"]);
if((temp__5739__auto____$1 == null)){
return null;
} else {
var toolbox = temp__5739__auto____$1;
var temp__5739__auto____$2 = (toolbox["envelope"]);
if((temp__5739__auto____$2 == null)){
return null;
} else {
var envelope = temp__5739__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope)){
return envelope.call(null,data,"details");
} else {
return null;
}
}
}
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return data;
}
});
Object.defineProperty(module.exports, "wrap_data_in_enveloper_if_possible", { enumerable: false, get: function() { return oops.helpers.wrap_data_in_enveloper_if_possible; } });
Object.defineProperty(module.exports, "is_object_sealed_QMARK_", { enumerable: false, get: function() { return oops.helpers.is_object_sealed_QMARK_; } });
Object.defineProperty(module.exports, "determine_property_non_writable_reason", { enumerable: false, get: function() { return oops.helpers.determine_property_non_writable_reason; } });
Object.defineProperty(module.exports, "is_prototype_QMARK_", { enumerable: false, get: function() { return oops.helpers.is_prototype_QMARK_; } });
Object.defineProperty(module.exports, "repurpose_error", { enumerable: false, get: function() { return oops.helpers.repurpose_error; } });
Object.defineProperty(module.exports, "cljs_instance_QMARK_", { enumerable: false, get: function() { return oops.helpers.cljs_instance_QMARK_; } });
Object.defineProperty(module.exports, "get_constructor", { enumerable: false, get: function() { return oops.helpers.get_constructor; } });
Object.defineProperty(module.exports, "get_property_descriptor", { enumerable: false, get: function() { return oops.helpers.get_property_descriptor; } });
Object.defineProperty(module.exports, "is_object_frozen_QMARK_", { enumerable: false, get: function() { return oops.helpers.is_object_frozen_QMARK_; } });
Object.defineProperty(module.exports, "to_native_array", { enumerable: false, get: function() { return oops.helpers.to_native_array; } });
Object.defineProperty(module.exports, "cljs_type_QMARK_", { enumerable: false, get: function() { return oops.helpers.cljs_type_QMARK_; } });
//# sourceMappingURL=oops.helpers.js.map
