var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react.js");
require("./oops.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.react.js");

goog.provide('quo.react');
quo.react.create_ref = shadow.js.shim.module$react.createRef;
quo.react.current_ref = (function quo$react$current_ref(ref){
var target_obj_17333 = ref;
var _STAR_runtime_state_STAR__orig_val__17335 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17336 = oops.state.prepare_state.call(null,target_obj_17333,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17336);

try{var next_obj_17334 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17333,(0),"current",true,true,false))?(target_obj_17333["current"]):null);
return next_obj_17334;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17335);
}});
quo.react.set_ref_val_BANG_ = (function quo$react$set_ref_val_BANG_(ref,val){
var target_obj_17343_17413 = ref;
var _STAR_runtime_state_STAR__orig_val__17345_17414 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17346_17415 = oops.state.prepare_state.call(null,target_obj_17343_17413,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17346_17415);

try{var parent_obj_17344_17416 = target_obj_17343_17413;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_17344_17416,(0),"current",true,true,true)){
(parent_obj_17344_17416["current"] = val);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17345_17414);
}
return val;
});
quo.react.set_native_props = (function quo$react$set_native_props(ref,props){
var temp__5735__auto__ = quo.react.current_ref.call(null,ref);
if(cljs.core.truth_(temp__5735__auto__)){
var curr_ref = temp__5735__auto__;
return curr_ref.setNativeProps(props);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
quo.react.StateHook = (function (value,set_value){
this.value = value;
this.set_value = set_value;
this.cljs$lang$protocol_mask$partition0$ = 4227072;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(quo.react.StateHook.prototype.cljs$core$IHash$_hash$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return goog.getUid(o__$1);
}));

(quo.react.StateHook.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_o){
var self__ = this;
var _o__$1 = this;
return self__.value;
}));

(quo.react.StateHook.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_o,new_value){
var self__ = this;
var _o__$1 = this;
return self__.set_value.call(null,new_value);
}));

(quo.react.StateHook.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_o,f){
var self__ = this;
var _o__$1 = this;
return self__.set_value.call(null,f);
}));

(quo.react.StateHook.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_o,f,a){
var self__ = this;
var _o__$1 = this;
return self__.set_value.call(null,(function (p1__17350_SHARP_){
return f.call(null,p1__17350_SHARP_,a);
}));
}));

(quo.react.StateHook.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_o,f,a,b){
var self__ = this;
var _o__$1 = this;
return self__.set_value.call(null,(function (p1__17351_SHARP_){
return f.call(null,p1__17351_SHARP_,a,b);
}));
}));

(quo.react.StateHook.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_o,f,a,b,xs){
var self__ = this;
var _o__$1 = this;
return self__.set_value.call(null,(function (p1__17352_SHARP_){
return cljs.core.apply.call(null,f,p1__17352_SHARP_,a,b,xs);
}));
}));

(quo.react.StateHook.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"set-value","set-value",2085758879,null)], null);
}));

(quo.react.StateHook.cljs$lang$type = true);

(quo.react.StateHook.cljs$lang$ctorStr = "quo.react/StateHook");

(quo.react.StateHook.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"quo.react/StateHook");
}));

/**
 * Positional factory function for quo.react/StateHook.
 */
quo.react.__GT_StateHook = (function quo$react$__GT_StateHook(value,set_value){
return (new quo.react.StateHook(value,set_value));
});

quo.react.state = (function quo$react$state(value){
var vec__17358 = shadow.js.shim.module$react.useState(value);
var value__$1 = cljs.core.nth.call(null,vec__17358,(0),null);
var set_value = cljs.core.nth.call(null,vec__17358,(1),null);
var sh = shadow.js.shim.module$react.useMemo((function (){
return (new quo.react.StateHook(value__$1,set_value));
}),[]);
return shadow.js.shim.module$react.useMemo((function (){
(sh.value = value__$1);

(sh.set_value = set_value);

return sh;
}),[value__$1,set_value]);
});
quo.react.use_ref = (function quo$react$use_ref(val){
var ref = shadow.js.shim.module$react.useRef(val);
if((typeof quo !== 'undefined') && (typeof quo.react !== 'undefined') && (typeof quo.react.t_quo$react17361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
quo.react.t_quo$react17361 = (function (val,ref,meta17362){
this.val = val;
this.ref = ref;
this.meta17362 = meta17362;
this.cljs$lang$protocol_mask$partition0$ = 4620288;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(quo.react.t_quo$react17361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17363,meta17362__$1){
var self__ = this;
var _17363__$1 = this;
return (new quo.react.t_quo$react17361(self__.val,self__.ref,meta17362__$1));
}));

(quo.react.t_quo$react17361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17363){
var self__ = this;
var _17363__$1 = this;
return self__.meta17362;
}));

(quo.react.t_quo$react17361.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return goog.getUid(self__.ref);
}));

(quo.react.t_quo$react17361.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return quo.react.current_ref.call(null,self__.ref);
}));

(quo.react.t_quo$react17361.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return quo.react.set_ref_val_BANG_.call(null,self__.ref,new_value);
}));

(quo.react.t_quo$react17361.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core._reset_BANG_(self__.ref,f.call(null,quo.react.current_ref.call(null,self__.ref)));
}));

(quo.react.t_quo$react17361.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,a){
var self__ = this;
var ___$1 = this;
return cljs.core._reset_BANG_(self__.ref,f.call(null,quo.react.current_ref.call(null,self__.ref),a));
}));

(quo.react.t_quo$react17361.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,a,b){
var self__ = this;
var ___$1 = this;
return cljs.core._reset_BANG_(self__.ref,f.call(null,quo.react.current_ref.call(null,self__.ref),a,b));
}));

(quo.react.t_quo$react17361.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,a,b,xs){
var self__ = this;
var ___$1 = this;
return cljs.core._reset_BANG_(self__.ref,cljs.core.apply.call(null,f,quo.react.current_ref.call(null,self__.ref),a,b,xs));
}));

(quo.react.t_quo$react17361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"meta17362","meta17362",-200330942,null)], null);
}));

(quo.react.t_quo$react17361.cljs$lang$type = true);

(quo.react.t_quo$react17361.cljs$lang$ctorStr = "quo.react/t_quo$react17361");

(quo.react.t_quo$react17361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"quo.react/t_quo$react17361");
}));

/**
 * Positional factory function for quo.react/t_quo$react17361.
 */
quo.react.__GT_t_quo$react17361 = (function quo$react$use_ref_$___GT_t_quo$react17361(val__$1,ref__$1,meta17362){
return (new quo.react.t_quo$react17361(val__$1,ref__$1,meta17362));
});

}

return (new quo.react.t_quo$react17361(val,ref,cljs.core.PersistentArrayMap.EMPTY));
});
quo.react.ref = (function quo$react$ref(value){
var vref = quo.react.use_ref.call(null,value);
return shadow.js.shim.module$react.useMemo((function (){
return vref;
}),[]);
});
quo.react.effect_BANG_ = (function quo$react$effect_BANG_(var_args){
var G__17386 = arguments.length;
switch (G__17386) {
case 1:
return quo.react.effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.react.effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.react.effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useEffect((function (){
var ret = setup_fn.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
return ret;
} else {
return undefined;
}
}));
}));

(quo.react.effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
var prev_deps_STAR_ = quo.react.ref.call(null,deps);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,prev_deps_STAR_),deps)){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);
} else {
}

return shadow.js.shim.module$react.useEffect((function (){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);

var ret = setup_fn.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
return ret;
} else {
return undefined;
}
}),(cljs.core.truth_(cljs.core.deref.call(null,prev_deps_STAR_))?cljs.core.into_array.call(null,cljs.core.deref.call(null,prev_deps_STAR_)):undefined));
}));

(quo.react.effect_BANG_.cljs$lang$maxFixedArity = 2);

quo.react.layout_effect_BANG_ = (function quo$react$layout_effect_BANG_(var_args){
var G__17394 = arguments.length;
switch (G__17394) {
case 1:
return quo.react.layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.react.layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.react.layout_effect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return shadow.js.shim.module$react.useLayoutEffect((function (){
var ret = setup_fn.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
return ret;
} else {
return undefined;
}
}));
}));

(quo.react.layout_effect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
var prev_deps_STAR_ = quo.react.ref.call(null,deps);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,prev_deps_STAR_),deps)){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);
} else {
}

return shadow.js.shim.module$react.useLayoutEffect((function (){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);

var ret = setup_fn.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
return ret;
} else {
return undefined;
}
}),(cljs.core.truth_(cljs.core.deref.call(null,prev_deps_STAR_))?cljs.core.into_array.call(null,cljs.core.deref.call(null,prev_deps_STAR_)):undefined));
}));

(quo.react.layout_effect_BANG_.cljs$lang$maxFixedArity = 2);

quo.react.callback = (function quo$react$callback(var_args){
var G__17399 = arguments.length;
switch (G__17399) {
case 1:
return quo.react.callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.react.callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.react.callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$react.useCallback(f);
}));

(quo.react.callback.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var prev_deps_STAR_ = quo.react.ref.call(null,deps);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,prev_deps_STAR_),deps)){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);
} else {
}

return shadow.js.shim.module$react.useCallback(f,(cljs.core.truth_(cljs.core.deref.call(null,prev_deps_STAR_))?cljs.core.into_array.call(null,cljs.core.deref.call(null,prev_deps_STAR_)):undefined));
}));

(quo.react.callback.cljs$lang$maxFixedArity = 2);

quo.react.use_memo = (function quo$react$use_memo(var_args){
var G__17409 = arguments.length;
switch (G__17409) {
case 1:
return quo.react.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quo.react.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo.react.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return shadow.js.shim.module$react.useMemo(f);
}));

(quo.react.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var prev_deps_STAR_ = quo.react.ref.call(null,deps);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,prev_deps_STAR_),deps)){
cljs.core.reset_BANG_.call(null,prev_deps_STAR_,deps);
} else {
}

return shadow.js.shim.module$react.useMemo(f,(cljs.core.truth_(cljs.core.deref.call(null,prev_deps_STAR_))?cljs.core.into_array.call(null,cljs.core.deref.call(null,prev_deps_STAR_)):undefined));
}));

(quo.react.use_memo.cljs$lang$maxFixedArity = 2);

quo.react.memo = shadow.js.shim.module$react.memo;
quo.react.get_children = (function quo$react$get_children(children){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,shadow.js.shim.module$react.Children.toArray(children));
});
Object.defineProperty(module.exports, "use_ref", { enumerable: false, get: function() { return quo.react.use_ref; } });
Object.defineProperty(module.exports, "callback", { enumerable: false, get: function() { return quo.react.callback; } });
Object.defineProperty(module.exports, "memo", { enumerable: false, get: function() { return quo.react.memo; } });
Object.defineProperty(module.exports, "use_memo", { enumerable: false, get: function() { return quo.react.use_memo; } });
Object.defineProperty(module.exports, "current_ref", { enumerable: false, get: function() { return quo.react.current_ref; } });
Object.defineProperty(module.exports, "create_ref", { enumerable: false, get: function() { return quo.react.create_ref; } });
Object.defineProperty(module.exports, "__GT_StateHook", { enumerable: false, get: function() { return quo.react.__GT_StateHook; } });
Object.defineProperty(module.exports, "__GT_t_quo$react17361", { enumerable: false, get: function() { return quo.react.__GT_t_quo$react17361; } });
Object.defineProperty(module.exports, "set_native_props", { enumerable: false, get: function() { return quo.react.set_native_props; } });
Object.defineProperty(module.exports, "StateHook", { enumerable: false, get: function() { return quo.react.StateHook; } });
Object.defineProperty(module.exports, "layout_effect_BANG_", { enumerable: false, get: function() { return quo.react.layout_effect_BANG_; } });
Object.defineProperty(module.exports, "ref", { enumerable: false, get: function() { return quo.react.ref; } });
Object.defineProperty(module.exports, "set_ref_val_BANG_", { enumerable: false, get: function() { return quo.react.set_ref_val_BANG_; } });
Object.defineProperty(module.exports, "state", { enumerable: false, get: function() { return quo.react.state; } });
Object.defineProperty(module.exports, "get_children", { enumerable: false, get: function() { return quo.react.get_children; } });
Object.defineProperty(module.exports, "effect_BANG_", { enumerable: false, get: function() { return quo.react.effect_BANG_; } });
Object.defineProperty(module.exports, "t_quo$react17361", { enumerable: false, get: function() { return quo.react.t_quo$react17361; } });
//# sourceMappingURL=quo.react.js.map
