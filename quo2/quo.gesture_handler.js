var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native_gesture_handler.js");
require("./oops.core.js");
require("./quo.design_system.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.gesture_handler.js");

goog.provide('quo.gesture_handler');
quo.gesture_handler.flat_list_raw = shadow.js.shim.module$react_native_gesture_handler.FlatList;
quo.gesture_handler.flat_list = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.FlatList);
quo.gesture_handler.scroll_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.ScrollView);
quo.gesture_handler.tap_gesture_handler = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.TapGestureHandler);
quo.gesture_handler.pan_gesture_handler = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.PanGestureHandler);
quo.gesture_handler.long_press_gesture_handler = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.LongPressGestureHandler);
quo.gesture_handler.touchable_without_feedback_class = shadow.js.shim.module$react_native_gesture_handler.TouchableWithoutFeedback;
quo.gesture_handler.touchable_without_feedback = reagent.core.adapt_react_class.call(null,quo.gesture_handler.touchable_without_feedback_class);
quo.gesture_handler.touchable_highlight_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.TouchableHighlight);
quo.gesture_handler.touchable_highlight = (function quo$gesture_handler$touchable_highlight(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16870 = arguments.length;
var i__4737__auto___16871 = (0);
while(true){
if((i__4737__auto___16871 < len__4736__auto___16870)){
args__4742__auto__.push((arguments[i__4737__auto___16871]));

var G__16872 = (i__4737__auto___16871 + (1));
i__4737__auto___16871 = G__16872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo.gesture_handler.touchable_highlight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo.gesture_handler.touchable_highlight.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.gesture_handler.touchable_highlight_class,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null),props)], null),children);
}));

(quo.gesture_handler.touchable_highlight.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo.gesture_handler.touchable_highlight.cljs$lang$applyTo = (function (seq16840){
var G__16841 = cljs.core.first.call(null,seq16840);
var seq16840__$1 = cljs.core.next.call(null,seq16840);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16841,seq16840__$1);
}));

quo.gesture_handler.touchable_opacity = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.TouchableOpacity);
quo.gesture_handler.native_view_gesture_handler = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.NativeViewGestureHandler);
quo.gesture_handler.states = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"began","began",-1662943309),(function (){var target_obj_16842 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16844 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16845 = oops.state.prepare_state.call(null,target_obj_16842,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16845);

try{var next_obj_16843 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16842,(0),"BEGAN",true,true,false))?(target_obj_16842["BEGAN"]):null);
return next_obj_16843;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16844);
}})(),new cljs.core.Keyword(null,"active","active",1895962068),(function (){var target_obj_16847 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16849 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16850 = oops.state.prepare_state.call(null,target_obj_16847,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16850);

try{var next_obj_16848 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16847,(0),"ACTIVE",true,true,false))?(target_obj_16847["ACTIVE"]):null);
return next_obj_16848;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16849);
}})(),new cljs.core.Keyword(null,"cancelled","cancelled",488726224),(function (){var target_obj_16851 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16853 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16854 = oops.state.prepare_state.call(null,target_obj_16851,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16854);

try{var next_obj_16852 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16851,(0),"CANCELLED",true,true,false))?(target_obj_16851["CANCELLED"]):null);
return next_obj_16852;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16853);
}})(),new cljs.core.Keyword(null,"end","end",-268185958),(function (){var target_obj_16855 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16857 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16858 = oops.state.prepare_state.call(null,target_obj_16855,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16858);

try{var next_obj_16856 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16855,(0),"END",true,true,false))?(target_obj_16855["END"]):null);
return next_obj_16856;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16857);
}})(),new cljs.core.Keyword(null,"failed","failed",-1397425762),(function (){var target_obj_16861 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16864 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16865 = oops.state.prepare_state.call(null,target_obj_16861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16865);

try{var next_obj_16862 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16861,(0),"FAILED",true,true,false))?(target_obj_16861["FAILED"]):null);
return next_obj_16862;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16864);
}})(),new cljs.core.Keyword(null,"undetermined","undetermined",330177545),(function (){var target_obj_16866 = shadow.js.shim.module$react_native_gesture_handler.State;
var _STAR_runtime_state_STAR__orig_val__16868 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16869 = oops.state.prepare_state.call(null,target_obj_16866,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16869);

try{var next_obj_16867 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16866,(0),"UNDETERMINED",true,true,false))?(target_obj_16866["UNDETERMINED"]):null);
return next_obj_16867;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16868);
}})()], null);
Object.defineProperty(module.exports, "pan_gesture_handler", { enumerable: false, get: function() { return quo.gesture_handler.pan_gesture_handler; } });
Object.defineProperty(module.exports, "touchable_without_feedback", { enumerable: false, get: function() { return quo.gesture_handler.touchable_without_feedback; } });
Object.defineProperty(module.exports, "flat_list_raw", { enumerable: false, get: function() { return quo.gesture_handler.flat_list_raw; } });
Object.defineProperty(module.exports, "native_view_gesture_handler", { enumerable: false, get: function() { return quo.gesture_handler.native_view_gesture_handler; } });
Object.defineProperty(module.exports, "long_press_gesture_handler", { enumerable: false, get: function() { return quo.gesture_handler.long_press_gesture_handler; } });
Object.defineProperty(module.exports, "states", { enumerable: false, get: function() { return quo.gesture_handler.states; } });
Object.defineProperty(module.exports, "flat_list", { enumerable: false, get: function() { return quo.gesture_handler.flat_list; } });
Object.defineProperty(module.exports, "scroll_view", { enumerable: false, get: function() { return quo.gesture_handler.scroll_view; } });
Object.defineProperty(module.exports, "touchable_highlight", { enumerable: false, get: function() { return quo.gesture_handler.touchable_highlight; } });
Object.defineProperty(module.exports, "touchable_without_feedback_class", { enumerable: false, get: function() { return quo.gesture_handler.touchable_without_feedback_class; } });
Object.defineProperty(module.exports, "touchable_highlight_class", { enumerable: false, get: function() { return quo.gesture_handler.touchable_highlight_class; } });
Object.defineProperty(module.exports, "touchable_opacity", { enumerable: false, get: function() { return quo.gesture_handler.touchable_opacity; } });
Object.defineProperty(module.exports, "tap_gesture_handler", { enumerable: false, get: function() { return quo.gesture_handler.tap_gesture_handler; } });
//# sourceMappingURL=quo.gesture_handler.js.map
