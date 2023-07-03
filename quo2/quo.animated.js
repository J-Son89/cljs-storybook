var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native_reanimated.js");
require("./shadow.js.shim.module$react_native_redash$lib$module$v1.js");
require("./oops.core.js");
require("./quo.gesture_handler.js");
require("./quo.react.js");
require("./quo.react_native.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.animated.js");

goog.provide('quo.animated');
quo.animated.create_animated_component = cljs.core.comp.call(null,reagent.core.adapt_react_class,shadow.js.shim.module$react_native_reanimated.default.createAnimatedComponent);
quo.animated.view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_reanimated.default.View);
quo.animated.text = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_reanimated.default.Text);
quo.animated.scroll_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_reanimated.default.ScrollView);
quo.animated.code = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_reanimated.default.Code);
quo.animated.animated_flat_list = quo.animated.create_animated_component(quo.gesture_handler.flat_list_raw);
quo.animated.flat_list = (function quo$animated$flat_list(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.animated_flat_list,quo.react_native.base_list_props.call(null,props)], null);
});
quo.animated.useCode = shadow.js.shim.module$react_native_reanimated.default.useCode;
quo.animated.code_BANG_ = (function quo$animated$code_BANG_(var_args){
var G__17425 = arguments.length;
switch (G__17425) {
case 1:
return quo.animated.code_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.animated.code_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.animated.code_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return quo.animated.useCode.call(null,(function (){
return setup_fn.call(null);
}));
}));

(quo.animated.code_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return quo.animated.useCode.call(null,(function (){
return setup_fn.call(null);
}),(cljs.core.truth_(deps)?cljs.core.into_array.call(null,deps):undefined));
}));

(quo.animated.code_BANG_.cljs$lang$maxFixedArity = 2);

quo.animated.eq = (function (){var target_obj_17426 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17434 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17435 = oops.state.prepare_state.call(null,target_obj_17426,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17435);

try{var next_obj_17431 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17426,(0),"eq",true,true,false))?(target_obj_17426["eq"]):null);
return next_obj_17431;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17434);
}})();
quo.animated.neq = (function (){var target_obj_17445 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17447 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17448 = oops.state.prepare_state.call(null,target_obj_17445,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17448);

try{var next_obj_17446 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17445,(0),"neq",true,true,false))?(target_obj_17445["neq"]):null);
return next_obj_17446;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17447);
}})();
quo.animated.greater = (function (){var target_obj_17449 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17452 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17453 = oops.state.prepare_state.call(null,target_obj_17449,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17453);

try{var next_obj_17451 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17449,(0),"greaterThan",true,true,false))?(target_obj_17449["greaterThan"]):null);
return next_obj_17451;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17452);
}})();
quo.animated.greater_or_eq = (function (){var target_obj_17456 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17459 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17461 = oops.state.prepare_state.call(null,target_obj_17456,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17461);

try{var next_obj_17457 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17456,(0),"greaterOrEq",true,true,false))?(target_obj_17456["greaterOrEq"]):null);
return next_obj_17457;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17459);
}})();
quo.animated.less = (function (){var target_obj_17464 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17467 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17468 = oops.state.prepare_state.call(null,target_obj_17464,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17468);

try{var next_obj_17465 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17464,(0),"lessThan",true,true,false))?(target_obj_17464["lessThan"]):null);
return next_obj_17465;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17467);
}})();
quo.animated.less_or_eq = (function (){var target_obj_17470 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17472 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17473 = oops.state.prepare_state.call(null,target_obj_17470,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17473);

try{var next_obj_17471 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17470,(0),"lessOrEq",true,true,false))?(target_obj_17470["lessOrEq"]):null);
return next_obj_17471;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17472);
}})();
quo.animated.not_STAR_ = (function (){var target_obj_17475 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17482 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17483 = oops.state.prepare_state.call(null,target_obj_17475,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17483);

try{var next_obj_17480 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17475,(0),"not",true,true,false))?(target_obj_17475["not"]):null);
return next_obj_17480;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17482);
}})();
quo.animated.or_STAR_ = (function (){var target_obj_17485 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17487 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17488 = oops.state.prepare_state.call(null,target_obj_17485,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17488);

try{var next_obj_17486 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17485,(0),"or",true,true,false))?(target_obj_17485["or"]):null);
return next_obj_17486;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17487);
}})();
quo.animated.and_STAR_ = (function (){var target_obj_17489 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17491 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17492 = oops.state.prepare_state.call(null,target_obj_17489,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17492);

try{var next_obj_17490 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17489,(0),"and",true,true,false))?(target_obj_17489["and"]):null);
return next_obj_17490;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17491);
}})();
quo.animated.diff = (function (){var target_obj_17495 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17500 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17501 = oops.state.prepare_state.call(null,target_obj_17495,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17501);

try{var next_obj_17498 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17495,(0),"diff",true,true,false))?(target_obj_17495["diff"]):null);
return next_obj_17498;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17500);
}})();
quo.animated.add = (function (){var target_obj_17503 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17506 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17507 = oops.state.prepare_state.call(null,target_obj_17503,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17507);

try{var next_obj_17505 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17503,(0),"add",true,true,false))?(target_obj_17503["add"]):null);
return next_obj_17505;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17506);
}})();
quo.animated.sub = (function (){var target_obj_17509 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17511 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17512 = oops.state.prepare_state.call(null,target_obj_17509,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17512);

try{var next_obj_17510 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17509,(0),"sub",true,true,false))?(target_obj_17509["sub"]):null);
return next_obj_17510;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17511);
}})();
quo.animated.multiply = (function (){var target_obj_17514 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17516 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17517 = oops.state.prepare_state.call(null,target_obj_17514,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17517);

try{var next_obj_17515 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17514,(0),"multiply",true,true,false))?(target_obj_17514["multiply"]):null);
return next_obj_17515;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17516);
}})();
quo.animated.divide = (function (){var target_obj_17519 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17521 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17522 = oops.state.prepare_state.call(null,target_obj_17519,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17522);

try{var next_obj_17520 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17519,(0),"divide",true,true,false))?(target_obj_17519["divide"]):null);
return next_obj_17520;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17521);
}})();
quo.animated.abs = (function (){var target_obj_17525 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17529 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17530 = oops.state.prepare_state.call(null,target_obj_17525,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17530);

try{var next_obj_17527 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17525,(0),"abs",true,true,false))?(target_obj_17525["abs"]):null);
return next_obj_17527;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17529);
}})();
quo.animated.min_STAR_ = (function (){var target_obj_17532 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17534 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17535 = oops.state.prepare_state.call(null,target_obj_17532,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17535);

try{var next_obj_17533 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17532,(0),"min",true,true,false))?(target_obj_17532["min"]):null);
return next_obj_17533;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17534);
}})();
quo.animated.max_STAR_ = (function (){var target_obj_17540 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17542 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17543 = oops.state.prepare_state.call(null,target_obj_17540,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17543);

try{var next_obj_17541 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17540,(0),"max",true,true,false))?(target_obj_17540["max"]):null);
return next_obj_17541;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17542);
}})();
quo.animated.set = (function (){var target_obj_17545 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17549 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17550 = oops.state.prepare_state.call(null,target_obj_17545,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17550);

try{var next_obj_17546 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17545,(0),"set",true,true,false))?(target_obj_17545["set"]):null);
return next_obj_17546;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17549);
}})();
quo.animated.start_clock = (function (){var target_obj_17551 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17554 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17555 = oops.state.prepare_state.call(null,target_obj_17551,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17555);

try{var next_obj_17553 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17551,(0),"startClock",true,true,false))?(target_obj_17551["startClock"]):null);
return next_obj_17553;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17554);
}})();
quo.animated.stop_clock = (function (){var target_obj_17557 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17560 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17561 = oops.state.prepare_state.call(null,target_obj_17557,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17561);

try{var next_obj_17559 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17557,(0),"stopClock",true,true,false))?(target_obj_17557["stopClock"]):null);
return next_obj_17559;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17560);
}})();
quo.animated.clock_running = shadow.js.shim.module$react_native_reanimated.clockRunning;
quo.animated.bezier = shadow.js.shim.module$react_native_reanimated.EasingNode.bezier;
quo.animated.linear = shadow.js.shim.module$react_native_reanimated.EasingNode.linear;
quo.animated.easings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"linear","linear",872268697),quo.animated.linear,new cljs.core.Keyword(null,"ease-in","ease-in",-819423123),quo.animated.bezier.call(null,0.42,(0),(1),(1)),new cljs.core.Keyword(null,"ease-out","ease-out",1760664474),quo.animated.bezier.call(null,(0),(0),0.58,(1)),new cljs.core.Keyword(null,"ease-in-out","ease-in-out",1896519269),quo.animated.bezier.call(null,0.42,(0),0.58,(1)),new cljs.core.Keyword(null,"cubic","cubic",1834638442),quo.animated.bezier.call(null,0.55,0.055,0.675,0.19),new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),quo.animated.bezier.call(null,0.17,0.59,0.4,0.77)], null);
quo.animated.springs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"damping","damping",1054389681),(50),new cljs.core.Keyword(null,"mass","mass",-2138950046),0.3,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(120),new cljs.core.Keyword(null,"overshootClamping","overshootClamping",-423138060),true,new cljs.core.Keyword(null,"bouncyFactor","bouncyFactor",390465459),(1)], null),new cljs.core.Keyword(null,"jump","jump",-971319427),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"damping","damping",1054389681),(13),new cljs.core.Keyword(null,"mass","mass",-2138950046),0.5,new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(170),new cljs.core.Keyword(null,"overshootClamping","overshootClamping",-423138060),false,new cljs.core.Keyword(null,"bouncyFactor","bouncyFactor",390465459),(1),new cljs.core.Keyword(null,"restSpeedThreshold","restSpeedThreshold",455074819),0.001,new cljs.core.Keyword(null,"restDisplacementThreshold","restDisplacementThreshold",448064965),0.001], null)], null);
quo.animated.set_value = (function quo$animated$set_value(anim,val){
var target_obj_17564 = anim;
var _STAR_runtime_state_STAR__orig_val__17569 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17570 = oops.state.prepare_state.call(null,target_obj_17564,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17570);

try{var call_info_17566 = [target_obj_17564,(function (){var next_obj_17568 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17564,(0),"setValue",true,true,false))?(target_obj_17564["setValue"]):null);
return next_obj_17568;
})()];
var fn_17565 = (call_info_17566[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17565,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17565 == null)))){
return fn_17565.call((call_info_17566[(0)]),val);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17569);
}});
quo.animated.Value = (function (){var target_obj_17575 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17577 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17578 = oops.state.prepare_state.call(null,target_obj_17575,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17578);

try{var next_obj_17576 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17575,(0),"Value",true,true,false))?(target_obj_17575["Value"]):null);
return next_obj_17576;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17577);
}})();
quo.animated.value = (function quo$animated$value(x){
return (new quo.animated.Value(x));
});
quo.animated.Clock = (function (){var target_obj_17579 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17581 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17582 = oops.state.prepare_state.call(null,target_obj_17579,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17582);

try{var next_obj_17580 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17579,(0),"Clock",true,true,false))?(target_obj_17579["Clock"]):null);
return next_obj_17580;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17581);
}})();
quo.animated.clock = (function quo$animated$clock(){
return (new quo.animated.Clock());
});
quo.animated.debug = (function (){var target_obj_17583 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17585 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17586 = oops.state.prepare_state.call(null,target_obj_17583,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17586);

try{var next_obj_17584 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17583,(0),"debug",true,true,false))?(target_obj_17583["debug"]):null);
return next_obj_17584;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17585);
}})();
quo.animated.log = (function (){var target_obj_17587 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17591 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17592 = oops.state.prepare_state.call(null,target_obj_17587,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17592);

try{var next_obj_17589 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17587,(0),"log",true,true,false))?(target_obj_17587["log"]):null);
return next_obj_17589;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17591);
}})();
quo.animated.event = (function quo$animated$event(var_args){
var G__17596 = arguments.length;
switch (G__17596) {
case 1:
return quo.animated.event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.animated.event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.animated.event.cljs$core$IFn$_invoke$arity$1 = (function (config){
return quo.animated.event.call(null,config,cljs.core.PersistentArrayMap.EMPTY);
}));

(quo.animated.event.cljs$core$IFn$_invoke$arity$2 = (function (config,options){
var target_obj_17601 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17605 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17606 = oops.state.prepare_state.call(null,target_obj_17601,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17606);

try{var call_info_17603 = [target_obj_17601,(function (){var next_obj_17604 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17601,(0),"event",true,true,false))?(target_obj_17601["event"]):null);
return next_obj_17604;
})()];
var fn_17602 = (call_info_17603[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17602,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17602 == null)))){
return fn_17602.call((call_info_17603[(0)]),cljs.core.clj__GT_js.call(null,config),cljs.core.clj__GT_js.call(null,options));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17605);
}}));

(quo.animated.event.cljs$lang$maxFixedArity = 2);

quo.animated.on_change = (function quo$animated$on_change(state,node){
var target_obj_17607 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17611 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17612 = oops.state.prepare_state.call(null,target_obj_17607,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17612);

try{var call_info_17609 = [target_obj_17607,(function (){var next_obj_17610 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17607,(0),"onChange",true,true,false))?(target_obj_17607["onChange"]):null);
return next_obj_17610;
})()];
var fn_17608 = (call_info_17609[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17608,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17608 == null)))){
return fn_17608.call((call_info_17609[(0)]),state,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.clj__GT_js.call(null,node):node));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17611);
}});
quo.animated.cond_STAR_ = (function quo$animated$cond_STAR_(var_args){
var G__17615 = arguments.length;
switch (G__17615) {
case 2:
return quo.animated.cond_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quo.animated.cond_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.animated.cond_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (condition,node){
return shadow.js.shim.module$react_native_reanimated.default.cond(condition,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.clj__GT_js.call(null,node):node));
}));

(quo.animated.cond_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (condition,if_node,else_node){
return shadow.js.shim.module$react_native_reanimated.default.cond(condition,((cljs.core.vector_QMARK_.call(null,if_node))?cljs.core.clj__GT_js.call(null,if_node):if_node),((cljs.core.vector_QMARK_.call(null,else_node))?cljs.core.clj__GT_js.call(null,else_node):else_node));
}));

(quo.animated.cond_STAR_.cljs$lang$maxFixedArity = 3);

quo.animated.block = (function quo$animated$block(opts){
return shadow.js.shim.module$react_native_reanimated.default.block(cljs.core.to_array.call(null,opts));
});
quo.animated.interpolate = (function quo$animated$interpolate(anim_value,config){
return shadow.js.shim.module$react_native_reanimated.default.interpolateNode(anim_value,cljs.core.clj__GT_js.call(null,config));
});
quo.animated.call_STAR_ = (function quo$animated$call_STAR_(args,callback){
return shadow.js.shim.module$react_native_reanimated.default.call(cljs.core.to_array.call(null,args),callback);
});
quo.animated.timing = (function quo$animated$timing(clock_value,opts,config){
return shadow.js.shim.module$react_native_reanimated.default.timing(clock_value,cljs.core.clj__GT_js.call(null,opts),cljs.core.clj__GT_js.call(null,config));
});
quo.animated.spring = (function quo$animated$spring(clock_value,opts,config){
return shadow.js.shim.module$react_native_reanimated.default.spring(clock_value,cljs.core.clj__GT_js.call(null,opts),cljs.core.clj__GT_js.call(null,config));
});
quo.animated.extrapolate = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clamp","clamp",1803814940),(function (){var target_obj_17627 = shadow.js.shim.module$react_native_reanimated.default;
var _STAR_runtime_state_STAR__orig_val__17634 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17635 = oops.state.prepare_state.call(null,target_obj_17627,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17635);

try{var next_obj_17628 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17627,(0),"Extrapolate",true,true,false))?(target_obj_17627["Extrapolate"]):null);
var next_obj_17629 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_17628,(0),"CLAMP",true,true,false))?(next_obj_17628["CLAMP"]):null);
return next_obj_17629;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17634);
}})()], null);
quo.animated.clamp = (function (){var target_obj_17639 = shadow.js.shim.module$react_native_redash$lib$module$v1;
var _STAR_runtime_state_STAR__orig_val__17641 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17642 = oops.state.prepare_state.call(null,target_obj_17639,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17642);

try{var next_obj_17640 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17639,(0),"clamp",true,true,false))?(target_obj_17639["clamp"]):null);
return next_obj_17640;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17641);
}})();
quo.animated.diff_clamp = shadow.js.shim.module$react_native_redash$lib$module$v1.diffClamp;
quo.animated.with_spring = (function quo$animated$with_spring(config){
var target_obj_17647 = shadow.js.shim.module$react_native_redash$lib$module$v1;
var _STAR_runtime_state_STAR__orig_val__17651 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17652 = oops.state.prepare_state.call(null,target_obj_17647,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17652);

try{var call_info_17649 = [target_obj_17647,(function (){var next_obj_17650 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17647,(0),"withSpring",true,true,false))?(target_obj_17647["withSpring"]):null);
return next_obj_17650;
})()];
var fn_17648 = (call_info_17649[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17648,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17648 == null)))){
return fn_17648.call((call_info_17649[(0)]),cljs.core.clj__GT_js.call(null,config));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17651);
}});
quo.animated.with_decay = (function quo$animated$with_decay(config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.withDecay(cljs.core.clj__GT_js.call(null,config));
});
quo.animated.with_offset = (function quo$animated$with_offset(config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.withOffset(cljs.core.clj__GT_js.call(null,config));
});
quo.animated.with_spring_transition = (function quo$animated$with_spring_transition(val,config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.withSpringTransition(val,cljs.core.clj__GT_js.call(null,config));
});
quo.animated.with_timing_transition = (function quo$animated$with_timing_transition(val,config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.withTimingTransition(val,cljs.core.clj__GT_js.call(null,config));
});
quo.animated.use_spring_transition = (function quo$animated$use_spring_transition(val,config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.useSpringTransition(val,cljs.core.clj__GT_js.call(null,config));
});
quo.animated.use_timing_transition = (function quo$animated$use_timing_transition(val,config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.useTimingTransition(val,cljs.core.clj__GT_js.call(null,config));
});
quo.animated.re_timing = (function quo$animated$re_timing(config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.timing(cljs.core.clj__GT_js.call(null,config));
});
quo.animated.re_spring = (function quo$animated$re_spring(config){
return shadow.js.shim.module$react_native_redash$lib$module$v1.spring(cljs.core.clj__GT_js.call(null,config));
});
quo.animated.on_scroll = (function quo$animated$on_scroll(opts){
var target_obj_17665 = shadow.js.shim.module$react_native_redash$lib$module$v1;
var _STAR_runtime_state_STAR__orig_val__17670 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17671 = oops.state.prepare_state.call(null,target_obj_17665,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17671);

try{var call_info_17667 = [target_obj_17665,(function (){var next_obj_17668 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17665,(0),"onScrollEvent",true,true,false))?(target_obj_17665["onScrollEvent"]):null);
return next_obj_17668;
})()];
var fn_17666 = (call_info_17667[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17666,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17666 == null)))){
return fn_17666.call((call_info_17667[(0)]),cljs.core.clj__GT_js.call(null,opts));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17670);
}});
quo.animated.on_gesture = (function quo$animated$on_gesture(opts){
var gesture_event = quo.animated.event.call(null,[({"nativeEvent": cljs.core.clj__GT_js.call(null,opts)})]);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onHandlerStateChange","onHandlerStateChange",644319555),gesture_event,new cljs.core.Keyword(null,"onGestureEvent","onGestureEvent",-539607336),gesture_event], null);
});
quo.animated.mix = shadow.js.shim.module$react_native_redash$lib$module$v1.mix;
quo.animated.mix_color = shadow.js.shim.module$react_native_redash$lib$module$v1.mixColor;
quo.animated.delay = shadow.js.shim.module$react_native_redash$lib$module$v1.delay;
quo.animated.loop_STAR_ = (function quo$animated$loop_STAR_(opts){
var target_obj_17721 = shadow.js.shim.module$react_native_redash$lib$module$v1;
var _STAR_runtime_state_STAR__orig_val__17733 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17735 = oops.state.prepare_state.call(null,target_obj_17721,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17735);

try{var call_info_17723 = [target_obj_17721,(function (){var next_obj_17728 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17721,(0),"loop",true,true,false))?(target_obj_17721["loop"]):null);
return next_obj_17728;
})()];
var fn_17722 = (call_info_17723[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_17722,oops.state.get_last_access_modifier.call(null))){
if((!((fn_17722 == null)))){
return fn_17722.call((call_info_17723[(0)]),cljs.core.clj__GT_js.call(null,opts));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17733);
}});
quo.animated.use_value = shadow.js.shim.module$react_native_redash$lib$module$v1.useValue;
quo.animated.use_clock = shadow.js.shim.module$react_native_redash$lib$module$v1.useClock;
quo.animated.use_gesture = (function quo$animated$use_gesture(opts){
var gesture = shadow.js.shim.module$react_native_redash$lib$module$v1.useGestureHandler(cljs.core.clj__GT_js.call(null,opts));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onHandlerStateChange","onHandlerStateChange",644319555),gesture.onHandlerStateChange,new cljs.core.Keyword(null,"onGestureEvent","onGestureEvent",-539607336),gesture.onGestureEvent], null);
});
quo.animated.snap_point = (function quo$animated$snap_point(value,velocity,snap_points){
return shadow.js.shim.module$react_native_redash$lib$module$v1.snapPoint(value,velocity,cljs.core.to_array.call(null,snap_points));
});
quo.animated.cancelable_loop = (function quo$animated$cancelable_loop(p__17743){
var map__17745 = p__17743;
var map__17745__$1 = (((((!((map__17745 == null))))?(((((map__17745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17745):map__17745);
var clock = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var duration = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var finished = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731));
var on_reach = cljs.core.get.call(null,map__17745__$1,new cljs.core.Keyword(null,"on-reach","on-reach",1528247084));
var time = quo.animated.value.call(null,(0));
var frame_time = quo.animated.value.call(null,(0));
var position = quo.animated.value.call(null,(0));
var to_value = quo.animated.value.call(null,(1));
var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"frameTime","frameTime",1708019962),frame_time,new cljs.core.Keyword(null,"finished","finished",-1018867731),finished,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toValue","toValue",730500269),to_value,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"linear","linear",872268697).cljs$core$IFn$_invoke$arity$1(quo.animated.easings)], null);
return quo.animated.block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.timing.call(null,clock,state,config),quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,finished,quo.animated.eq.call(null,position,to_value)),quo.animated.call_STAR_.call(null,cljs.core.PersistentVector.EMPTY,on_reach)),quo.animated.cond_STAR_.call(null,finished,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,finished,(0)),quo.animated.set.call(null,time,(0)),quo.animated.set.call(null,frame_time,(0)),quo.animated.set.call(null,position,(0))], null)),position], null));
});
quo.animated.with_easing = (function quo$animated$with_easing(p__17747){
var map__17748 = p__17747;
var map__17748__$1 = (((((!((map__17748 == null))))?(((((map__17748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17748):map__17748);
var val = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"value","value",305978217));
var snap_points = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"snap-points","snap-points",1589490132));
var velocity = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
var offset = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var state = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var easing = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"ease-out","ease-out",1760664474).cljs$core$IFn$_invoke$arity$1(quo.animated.easings));
var duration = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(250));
var animation_over = cljs.core.get.call(null,map__17748__$1,new cljs.core.Keyword(null,"animation-over","animation-over",1973203562),quo.animated.value.call(null,(1)));
var position = quo.animated.value.call(null,(0));
var c = quo.animated.clock.call(null);
var interrupted = quo.animated.and_STAR_.call(null,quo.animated.eq.call(null,state,new cljs.core.Keyword(null,"began","began",-1662943309).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.clock_running.call(null,c));
var vel = quo.animated.multiply.call(null,velocity,1.5);
var to = quo.animated.snap_point.call(null,position,vel,snap_points);
var finish_animation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,offset,position),quo.animated.stop_clock.call(null,c),quo.animated.set.call(null,animation_over,(1))], null);
return quo.animated.block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.cond_STAR_.call(null,interrupted,finish_animation),quo.animated.cond_STAR_.call(null,animation_over,quo.animated.set.call(null,position,offset)),quo.animated.cond_STAR_.call(null,quo.animated.neq.call(null,state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,animation_over,(0)),quo.animated.set.call(null,position,quo.animated.add.call(null,offset,val))], null)),quo.animated.cond_STAR_.call(null,quo.animated.and_STAR_.call(null,quo.animated.eq.call(null,state,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(quo.gesture_handler.states)),quo.animated.not_STAR_.call(null,animation_over)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.set.call(null,position,quo.animated.re_timing.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"clock","clock",-894301127),c,new cljs.core.Keyword(null,"easing","easing",735372043),easing,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"from","from",1815293044),position,new cljs.core.Keyword(null,"to","to",192099007),to], null))),quo.animated.cond_STAR_.call(null,quo.animated.not_STAR_.call(null,quo.animated.clock_running.call(null,c)),finish_animation)], null)),position], null));
});
Object.defineProperty(module.exports, "linear", { enumerable: false, get: function() { return quo.animated.linear; } });
Object.defineProperty(module.exports, "clock", { enumerable: false, get: function() { return quo.animated.clock; } });
Object.defineProperty(module.exports, "greater", { enumerable: false, get: function() { return quo.animated.greater; } });
Object.defineProperty(module.exports, "set", { enumerable: false, get: function() { return quo.animated.set; } });
Object.defineProperty(module.exports, "animated_flat_list", { enumerable: false, get: function() { return quo.animated.animated_flat_list; } });
Object.defineProperty(module.exports, "cond_STAR_", { enumerable: false, get: function() { return quo.animated.cond_STAR_; } });
Object.defineProperty(module.exports, "add", { enumerable: false, get: function() { return quo.animated.add; } });
Object.defineProperty(module.exports, "on_change", { enumerable: false, get: function() { return quo.animated.on_change; } });
Object.defineProperty(module.exports, "mix", { enumerable: false, get: function() { return quo.animated.mix; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return quo.animated.log; } });
Object.defineProperty(module.exports, "clamp", { enumerable: false, get: function() { return quo.animated.clamp; } });
Object.defineProperty(module.exports, "with_timing_transition", { enumerable: false, get: function() { return quo.animated.with_timing_transition; } });
Object.defineProperty(module.exports, "delay", { enumerable: false, get: function() { return quo.animated.delay; } });
Object.defineProperty(module.exports, "diff_clamp", { enumerable: false, get: function() { return quo.animated.diff_clamp; } });
Object.defineProperty(module.exports, "springs", { enumerable: false, get: function() { return quo.animated.springs; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo.animated.view; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return quo.animated.text; } });
Object.defineProperty(module.exports, "diff", { enumerable: false, get: function() { return quo.animated.diff; } });
Object.defineProperty(module.exports, "and_STAR_", { enumerable: false, get: function() { return quo.animated.and_STAR_; } });
Object.defineProperty(module.exports, "with_easing", { enumerable: false, get: function() { return quo.animated.with_easing; } });
Object.defineProperty(module.exports, "min_STAR_", { enumerable: false, get: function() { return quo.animated.min_STAR_; } });
Object.defineProperty(module.exports, "use_clock", { enumerable: false, get: function() { return quo.animated.use_clock; } });
Object.defineProperty(module.exports, "use_spring_transition", { enumerable: false, get: function() { return quo.animated.use_spring_transition; } });
Object.defineProperty(module.exports, "bezier", { enumerable: false, get: function() { return quo.animated.bezier; } });
Object.defineProperty(module.exports, "loop_STAR_", { enumerable: false, get: function() { return quo.animated.loop_STAR_; } });
Object.defineProperty(module.exports, "divide", { enumerable: false, get: function() { return quo.animated.divide; } });
Object.defineProperty(module.exports, "block", { enumerable: false, get: function() { return quo.animated.block; } });
Object.defineProperty(module.exports, "with_spring", { enumerable: false, get: function() { return quo.animated.with_spring; } });
Object.defineProperty(module.exports, "greater_or_eq", { enumerable: false, get: function() { return quo.animated.greater_or_eq; } });
Object.defineProperty(module.exports, "less_or_eq", { enumerable: false, get: function() { return quo.animated.less_or_eq; } });
Object.defineProperty(module.exports, "eq", { enumerable: false, get: function() { return quo.animated.eq; } });
Object.defineProperty(module.exports, "on_scroll", { enumerable: false, get: function() { return quo.animated.on_scroll; } });
Object.defineProperty(module.exports, "useCode", { enumerable: false, get: function() { return quo.animated.useCode; } });
Object.defineProperty(module.exports, "flat_list", { enumerable: false, get: function() { return quo.animated.flat_list; } });
Object.defineProperty(module.exports, "re_spring", { enumerable: false, get: function() { return quo.animated.re_spring; } });
Object.defineProperty(module.exports, "stop_clock", { enumerable: false, get: function() { return quo.animated.stop_clock; } });
Object.defineProperty(module.exports, "sub", { enumerable: false, get: function() { return quo.animated.sub; } });
Object.defineProperty(module.exports, "max_STAR_", { enumerable: false, get: function() { return quo.animated.max_STAR_; } });
Object.defineProperty(module.exports, "scroll_view", { enumerable: false, get: function() { return quo.animated.scroll_view; } });
Object.defineProperty(module.exports, "re_timing", { enumerable: false, get: function() { return quo.animated.re_timing; } });
Object.defineProperty(module.exports, "value", { enumerable: false, get: function() { return quo.animated.value; } });
Object.defineProperty(module.exports, "clock_running", { enumerable: false, get: function() { return quo.animated.clock_running; } });
Object.defineProperty(module.exports, "mix_color", { enumerable: false, get: function() { return quo.animated.mix_color; } });
Object.defineProperty(module.exports, "start_clock", { enumerable: false, get: function() { return quo.animated.start_clock; } });
Object.defineProperty(module.exports, "debug", { enumerable: false, get: function() { return quo.animated.debug; } });
Object.defineProperty(module.exports, "use_value", { enumerable: false, get: function() { return quo.animated.use_value; } });
Object.defineProperty(module.exports, "use_gesture", { enumerable: false, get: function() { return quo.animated.use_gesture; } });
Object.defineProperty(module.exports, "call_STAR_", { enumerable: false, get: function() { return quo.animated.call_STAR_; } });
Object.defineProperty(module.exports, "interpolate", { enumerable: false, get: function() { return quo.animated.interpolate; } });
Object.defineProperty(module.exports, "or_STAR_", { enumerable: false, get: function() { return quo.animated.or_STAR_; } });
Object.defineProperty(module.exports, "extrapolate", { enumerable: false, get: function() { return quo.animated.extrapolate; } });
Object.defineProperty(module.exports, "on_gesture", { enumerable: false, get: function() { return quo.animated.on_gesture; } });
Object.defineProperty(module.exports, "use_timing_transition", { enumerable: false, get: function() { return quo.animated.use_timing_transition; } });
Object.defineProperty(module.exports, "with_spring_transition", { enumerable: false, get: function() { return quo.animated.with_spring_transition; } });
Object.defineProperty(module.exports, "easings", { enumerable: false, get: function() { return quo.animated.easings; } });
Object.defineProperty(module.exports, "spring", { enumerable: false, get: function() { return quo.animated.spring; } });
Object.defineProperty(module.exports, "event", { enumerable: false, get: function() { return quo.animated.event; } });
Object.defineProperty(module.exports, "snap_point", { enumerable: false, get: function() { return quo.animated.snap_point; } });
Object.defineProperty(module.exports, "not_STAR_", { enumerable: false, get: function() { return quo.animated.not_STAR_; } });
Object.defineProperty(module.exports, "less", { enumerable: false, get: function() { return quo.animated.less; } });
Object.defineProperty(module.exports, "abs", { enumerable: false, get: function() { return quo.animated.abs; } });
Object.defineProperty(module.exports, "neq", { enumerable: false, get: function() { return quo.animated.neq; } });
Object.defineProperty(module.exports, "Clock", { enumerable: false, get: function() { return quo.animated.Clock; } });
Object.defineProperty(module.exports, "code_BANG_", { enumerable: false, get: function() { return quo.animated.code_BANG_; } });
Object.defineProperty(module.exports, "cancelable_loop", { enumerable: false, get: function() { return quo.animated.cancelable_loop; } });
Object.defineProperty(module.exports, "timing", { enumerable: false, get: function() { return quo.animated.timing; } });
Object.defineProperty(module.exports, "with_decay", { enumerable: false, get: function() { return quo.animated.with_decay; } });
Object.defineProperty(module.exports, "code", { enumerable: false, get: function() { return quo.animated.code; } });
Object.defineProperty(module.exports, "Value", { enumerable: false, get: function() { return quo.animated.Value; } });
Object.defineProperty(module.exports, "multiply", { enumerable: false, get: function() { return quo.animated.multiply; } });
Object.defineProperty(module.exports, "with_offset", { enumerable: false, get: function() { return quo.animated.with_offset; } });
Object.defineProperty(module.exports, "create_animated_component", { enumerable: false, get: function() { return quo.animated.create_animated_component; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return quo.animated.set_value; } });
//# sourceMappingURL=quo.animated.js.map
