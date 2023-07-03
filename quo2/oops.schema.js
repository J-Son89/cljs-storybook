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

$CLJS.SHADOW_ENV.setLoaded("oops.schema.js");

goog.provide('oops.schema');
oops.schema.escaped_dot_marker = "####ESCAPED-DOT####";
oops.schema.re_all_escaped_dots = (new RegExp("\\\\\\.","g"));
oops.schema.re_all_escaped_dot_markers = (new RegExp("####ESCAPED-DOT####","g"));
oops.schema.unescape_modifiers = (function oops$schema$unescape_modifiers(s){
return s.replace(/^\\([?!])/,"$1");
});
oops.schema.parse_selector_element_BANG_ = (function oops$schema$parse_selector_element_BANG_(element_str,arr){
if(cljs.core.empty_QMARK_.call(null,element_str)){
return null;
} else {
var G__14464 = cljs.core.first.call(null,element_str);
switch (G__14464) {
case "?":
arr.push((1));

return arr.push(element_str.substring((1)));

break;
case "!":
arr.push((2));

return arr.push(element_str.substring((1)));

break;
default:
arr.push((0));

return arr.push(oops.schema.unescape_modifiers.call(null,element_str));

}
}
});
oops.schema.unescape_dots = (function oops$schema$unescape_dots(s){
return s.replace(oops.schema.re_all_escaped_dot_markers,".");
});
oops.schema.parse_selector_string_BANG_ = (function oops$schema$parse_selector_string_BANG_(selector_str,arr){
var elements_arr = selector_str.replace(oops.schema.re_all_escaped_dots,oops.schema.escaped_dot_marker).split(".");
var items = cljs.core.seq.call(null,elements_arr);
while(true){
if(items){
oops.schema.parse_selector_element_BANG_.call(null,oops.schema.unescape_dots.call(null,cljs.core.first.call(null,items)),arr);

var G__14500 = cljs.core.next.call(null,items);
items = G__14500;
continue;
} else {
return null;
}
break;
}
});
oops.schema.coerce_key_dynamically_BANG_ = (function oops$schema$coerce_key_dynamically_BANG_(key,arr){
var selector_str = cljs.core.name.call(null,key);
return oops.schema.parse_selector_string_BANG_.call(null,selector_str,arr);
});
oops.schema.collect_coerced_keys_into_array_BANG_ = (function oops$schema$collect_coerced_keys_into_array_BANG_(coll,arr){
var items = cljs.core.seq.call(null,coll);
while(true){
if((!((items == null)))){
var item = cljs.core._first(items);
if(cljs.core.sequential_QMARK_.call(null,item)){
oops.schema.collect_coerced_keys_into_array_BANG_.call(null,item,arr);
} else {
oops.schema.coerce_key_dynamically_BANG_.call(null,item,arr);
}

var G__14511 = cljs.core.next.call(null,items);
items = G__14511;
continue;
} else {
return null;
}
break;
}
});
oops.schema.standalone_modifier_QMARK_ = (function oops$schema$standalone_modifier_QMARK_(arr,i){
return ((((arr[i]) > (0))) && (cljs.core._EQ_.call(null,"",(arr[(i + (1))]))));
});
oops.schema.merge_standalone_modifier_BANG_ = (function oops$schema$merge_standalone_modifier_BANG_(arr,i){
(arr[(i + (2))] = (arr[i]));

return arr.splice(i,(2));
});
oops.schema.merge_standalone_modifiers_BANG_ = (function oops$schema$merge_standalone_modifiers_BANG_(arr){
var len = arr.length;
var i = (len - (2));
while(true){
var finger = (i - (2));
if((finger < (0))){
return arr;
} else {
if(oops.schema.standalone_modifier_QMARK_.call(null,arr,finger)){
oops.schema.merge_standalone_modifier_BANG_.call(null,arr,finger);
} else {
}

var G__14513 = finger;
i = G__14513;
continue;
}
break;
}
});
oops.schema.prepare_path_BANG_ = (function oops$schema$prepare_path_BANG_(selector,arr){
oops.schema.collect_coerced_keys_into_array_BANG_.call(null,selector,arr);

return oops.schema.merge_standalone_modifiers_BANG_.call(null,arr);
});
oops.schema.prepare_simple_path_BANG_ = (function oops$schema$prepare_simple_path_BANG_(key,arr){
return oops.schema.coerce_key_dynamically_BANG_.call(null,key,arr);
});
oops.schema.has_invalid_path_access_mode_QMARK_ = (function oops$schema$has_invalid_path_access_mode_QMARK_(path,is_valid_QMARK_){
var items = cljs.core.seq.call(null,path);
while(true){
if(items){
if(cljs.core.truth_(is_valid_QMARK_.call(null,cljs.core.first.call(null,items)))){
var G__14514 = cljs.core.next.call(null,cljs.core.next.call(null,items));
items = G__14514;
continue;
} else {
return true;
}
} else {
return null;
}
break;
}
});
oops.schema.check_dynamic_path_BANG_ = (function oops$schema$check_dynamic_path_BANG_(path,op){


if(cljs.core.empty_QMARK_.call(null,path)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900)], null);
} else {
var G__14489 = op;
switch (G__14489) {
case (0):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_.call(null,path,(function (p1__14484_SHARP_){
return cljs.core.not_EQ_.call(null,p1__14484_SHARP_,(2));
})))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338)], null);
} else {
return null;
}

break;
case (1):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_.call(null,path,(function (p1__14485_SHARP_){
return cljs.core.not_EQ_.call(null,p1__14485_SHARP_,(1));
})))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14489)].join('')));

}
}
});
Object.defineProperty(module.exports, "unescape_dots", { enumerable: false, get: function() { return oops.schema.unescape_dots; } });
Object.defineProperty(module.exports, "re_all_escaped_dots", { enumerable: false, get: function() { return oops.schema.re_all_escaped_dots; } });
Object.defineProperty(module.exports, "standalone_modifier_QMARK_", { enumerable: false, get: function() { return oops.schema.standalone_modifier_QMARK_; } });
Object.defineProperty(module.exports, "re_all_escaped_dot_markers", { enumerable: false, get: function() { return oops.schema.re_all_escaped_dot_markers; } });
Object.defineProperty(module.exports, "check_dynamic_path_BANG_", { enumerable: false, get: function() { return oops.schema.check_dynamic_path_BANG_; } });
Object.defineProperty(module.exports, "coerce_key_dynamically_BANG_", { enumerable: false, get: function() { return oops.schema.coerce_key_dynamically_BANG_; } });
Object.defineProperty(module.exports, "collect_coerced_keys_into_array_BANG_", { enumerable: false, get: function() { return oops.schema.collect_coerced_keys_into_array_BANG_; } });
Object.defineProperty(module.exports, "parse_selector_string_BANG_", { enumerable: false, get: function() { return oops.schema.parse_selector_string_BANG_; } });
Object.defineProperty(module.exports, "prepare_simple_path_BANG_", { enumerable: false, get: function() { return oops.schema.prepare_simple_path_BANG_; } });
Object.defineProperty(module.exports, "merge_standalone_modifiers_BANG_", { enumerable: false, get: function() { return oops.schema.merge_standalone_modifiers_BANG_; } });
Object.defineProperty(module.exports, "has_invalid_path_access_mode_QMARK_", { enumerable: false, get: function() { return oops.schema.has_invalid_path_access_mode_QMARK_; } });
Object.defineProperty(module.exports, "escaped_dot_marker", { enumerable: false, get: function() { return oops.schema.escaped_dot_marker; } });
Object.defineProperty(module.exports, "prepare_path_BANG_", { enumerable: false, get: function() { return oops.schema.prepare_path_BANG_; } });
Object.defineProperty(module.exports, "parse_selector_element_BANG_", { enumerable: false, get: function() { return oops.schema.parse_selector_element_BANG_; } });
Object.defineProperty(module.exports, "unescape_modifiers", { enumerable: false, get: function() { return oops.schema.unescape_modifiers; } });
Object.defineProperty(module.exports, "merge_standalone_modifier_BANG_", { enumerable: false, get: function() { return oops.schema.merge_standalone_modifier_BANG_; } });
//# sourceMappingURL=oops.schema.js.map
