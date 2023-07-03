var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react.js");
require("./shadow.js.shim.module$react_native.js");
require("./cljs_bean.core.js");
require("./oops.core.js");
require("./react_native.flat_list.js");
require("./react_native.platform.js");
require("./react_native.section_list.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.core.js");

goog.provide('react_native.core');
react_native.core.app_state = shadow.js.shim.module$react_native.AppState;
react_native.core.animated_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Animated.View);
react_native.core.view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.View);
react_native.core.scroll_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.ScrollView);
react_native.core.image = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Image);
react_native.core.image_get_size = (function react_native$core$image_get_size(uri,callback){
return shadow.js.shim.module$react_native.Image.getSize(uri,callback);
});
react_native.core.text = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Text);
react_native.core.text_input = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TextInput);
react_native.core.touchable_opacity = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableOpacity);
react_native.core.touchable_highlight = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableHighlight);
react_native.core.touchable_without_feedback = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableWithoutFeedback);
react_native.core.flat_list = react_native.flat_list.flat_list;
react_native.core.section_list = react_native.section_list.section_list;
react_native.core.activity_indicator = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.ActivityIndicator);
react_native.core.modal = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Modal);
react_native.core.keyboard = shadow.js.shim.module$react_native.Keyboard;
react_native.core.dismiss_keyboard_BANG_ = (function react_native$core$dismiss_keyboard_BANG_(){
return react_native.core.keyboard.dismiss();
});
react_native.core.device_event_emitter = shadow.js.shim.module$react_native.DeviceEventEmitter;
react_native.core.hide_splash_screen = (function react_native$core$hide_splash_screen(){
return shadow.js.shim.module$react_native.NativeModules.SplashScreen.hide();
});
react_native.core.alert = (function react_native$core$alert(title,message,buttons,options){
return shadow.js.shim.module$react_native.Alert.alert(title,message,cljs.core.clj__GT_js.call(null,buttons),cljs.core.clj__GT_js.call(null,options));
});
react_native.core.appearance = shadow.js.shim.module$react_native.Appearance;
react_native.core.get_color_scheme = (function react_native$core$get_color_scheme(){
return react_native.core.appearance.getColorScheme();
});
react_native.core.appearance_add_change_listener = (function react_native$core$appearance_add_change_listener(handler){
return react_native.core.appearance.addChangeListener(handler);
});
react_native.core.get_window = cljs.core.memoize.call(null,(function (){
return cljs.core.js__GT_clj.call(null,shadow.js.shim.module$react_native.Dimensions.get("window"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));
react_native.core.get_screen = cljs.core.memoize.call(null,(function (){
return cljs.core.js__GT_clj.call(null,shadow.js.shim.module$react_native.Dimensions.get("screen"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));
react_native.core.hw_back_add_listener = (function react_native$core$hw_back_add_listener(callback){
return shadow.js.shim.module$react_native.BackHandler.addEventListener("hardwareBackPress",callback);
});
react_native.core.hw_back_remove_listener = (function react_native$core$hw_back_remove_listener(callback){
return shadow.js.shim.module$react_native.BackHandler.removeEventListener("hardwareBackPress",callback);
});
react_native.core.keyboard_avoiding_view_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.KeyboardAvoidingView);
react_native.core.keyboard_avoiding_view = (function react_native$core$keyboard_avoiding_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16539 = arguments.length;
var i__4737__auto___16540 = (0);
while(true){
if((i__4737__auto___16540 < len__4736__auto___16539)){
args__4742__auto__.push((arguments[i__4737__auto___16540]));

var G__16541 = (i__4737__auto___16540 + (1));
i__4737__auto___16540 = G__16541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return react_native.core.keyboard_avoiding_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(react_native.core.keyboard_avoiding_view.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.keyboard_avoiding_view_class,cljs.core.merge.call(null,((react_native.platform.ios_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"padding","padding",1660304693)], null):null),props)], null),children);
}));

(react_native.core.keyboard_avoiding_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(react_native.core.keyboard_avoiding_view.cljs$lang$applyTo = (function (seq16521){
var G__16522 = cljs.core.first.call(null,seq16521);
var seq16521__$1 = cljs.core.next.call(null,seq16521);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16522,seq16521__$1);
}));

react_native.core.memo = shadow.js.shim.module$react.memo;
react_native.core.create_ref = shadow.js.shim.module$react.createRef;
react_native.core.use_ref = shadow.js.shim.module$react.useRef;
react_native.core.current_ref = (function react_native$core$current_ref(ref){
var target_obj_16523 = ref;
var _STAR_runtime_state_STAR__orig_val__16525 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16526 = oops.state.prepare_state.call(null,target_obj_16523,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16526);

try{var next_obj_16524 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16523,(0),"current",true,true,false))?(target_obj_16523["current"]):null);
return next_obj_16524;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16525);
}});
react_native.core.create_context = shadow.js.shim.module$react.createContext;
react_native.core.use_context = shadow.js.shim.module$react.useContext;
react_native.core.use_effect = (function react_native$core$use_effect(var_args){
var G__16528 = arguments.length;
switch (G__16528) {
case 1:
return react_native.core.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return react_native.core.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(react_native.core.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (effect_fn){
return react_native.core.use_effect.call(null,effect_fn,cljs.core.PersistentVector.EMPTY);
}));

(react_native.core.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (effect_fn,deps){
return shadow.js.shim.module$react.useEffect((function (){
var ret = effect_fn.call(null);
if(cljs.core.fn_QMARK_.call(null,ret)){
return ret;
} else {
return undefined;
}
}),cljs_bean.core.__GT_js.call(null,deps));
}));

(react_native.core.use_effect.cljs$lang$maxFixedArity = 2);

react_native.core.use_callback = shadow.js.shim.module$react.useCallback;
react_native.core.use_effect_once = (function react_native$core$use_effect_once(effect_fn){
return react_native.core.use_effect.call(null,effect_fn);
});
react_native.core.use_unmount = (function react_native$core$use_unmount(f){
var fn_ref = react_native.core.use_ref.call(null,f);
var target_obj_16529_16543 = fn_ref;
var _STAR_runtime_state_STAR__orig_val__16531_16544 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16532_16545 = oops.state.prepare_state.call(null,target_obj_16529_16543,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16532_16545);

try{var parent_obj_16530_16546 = target_obj_16529_16543;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_16530_16546,(0),"current",true,true,true)){
(parent_obj_16530_16546["current"] = f);
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16531_16544);
}
return react_native.core.use_effect_once.call(null,(function (){
return (function (){
var target_obj_16533 = fn_ref;
var _STAR_runtime_state_STAR__orig_val__16537 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__16538 = oops.state.prepare_state.call(null,target_obj_16533,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__16538);

try{var call_info_16535 = [target_obj_16533,(function (){var next_obj_16536 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_16533,(0),"current",true,true,false))?(target_obj_16533["current"]):null);
return next_obj_16536;
})()];
var fn_16534 = (call_info_16535[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_16534,oops.state.get_last_access_modifier.call(null))){
if((!((fn_16534 == null)))){
return fn_16534.call((call_info_16535[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__16537);
}});
}));
});
react_native.core.layout_animation = shadow.js.shim.module$react_native.LayoutAnimation;
react_native.core.configure_next = react_native.core.layout_animation.configureNext;
react_native.core.layout_animation_presets = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ease-in-ease-out","ease-in-ease-out",-382563166),react_native.core.layout_animation.Presets.easeInEaseOut,new cljs.core.Keyword(null,"linear","linear",872268697),react_native.core.layout_animation.Presets.linear,new cljs.core.Keyword(null,"spring","spring",787848305),react_native.core.layout_animation.Presets.spring], null);
react_native.core.find_node_handle = shadow.js.shim.module$react_native.findNodeHandle;
react_native.core.selectable_text_input_manager = (function react_native$core$selectable_text_input_manager(){
if((!((shadow.js.shim.module$react_native.NativeModules == null)))){
return shadow.js.shim.module$react_native.NativeModules.RNSelectableTextInputManager;
} else {
return null;
}
});
if((typeof react_native !== 'undefined') && (typeof react_native.core !== 'undefined') && (typeof react_native.core.selectable_text_input !== 'undefined')){
} else {
react_native.core.selectable_text_input = ((react_native.platform.android_QMARK_)?reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.requireNativeComponent("RNSelectableTextInput")):react_native.core.view);
}
Object.defineProperty(module.exports, "use_ref", { enumerable: false, get: function() { return react_native.core.use_ref; } });
Object.defineProperty(module.exports, "get_screen", { enumerable: false, get: function() { return react_native.core.get_screen; } });
Object.defineProperty(module.exports, "selectable_text_input", { enumerable: false, get: function() { return react_native.core.selectable_text_input; } });
Object.defineProperty(module.exports, "create_context", { enumerable: false, get: function() { return react_native.core.create_context; } });
Object.defineProperty(module.exports, "use_unmount", { enumerable: false, get: function() { return react_native.core.use_unmount; } });
Object.defineProperty(module.exports, "memo", { enumerable: false, get: function() { return react_native.core.memo; } });
Object.defineProperty(module.exports, "touchable_without_feedback", { enumerable: false, get: function() { return react_native.core.touchable_without_feedback; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return react_native.core.view; } });
Object.defineProperty(module.exports, "device_event_emitter", { enumerable: false, get: function() { return react_native.core.device_event_emitter; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return react_native.core.text; } });
Object.defineProperty(module.exports, "hw_back_add_listener", { enumerable: false, get: function() { return react_native.core.hw_back_add_listener; } });
Object.defineProperty(module.exports, "current_ref", { enumerable: false, get: function() { return react_native.core.current_ref; } });
Object.defineProperty(module.exports, "hide_splash_screen", { enumerable: false, get: function() { return react_native.core.hide_splash_screen; } });
Object.defineProperty(module.exports, "configure_next", { enumerable: false, get: function() { return react_native.core.configure_next; } });
Object.defineProperty(module.exports, "create_ref", { enumerable: false, get: function() { return react_native.core.create_ref; } });
Object.defineProperty(module.exports, "keyboard", { enumerable: false, get: function() { return react_native.core.keyboard; } });
Object.defineProperty(module.exports, "keyboard_avoiding_view", { enumerable: false, get: function() { return react_native.core.keyboard_avoiding_view; } });
Object.defineProperty(module.exports, "activity_indicator", { enumerable: false, get: function() { return react_native.core.activity_indicator; } });
Object.defineProperty(module.exports, "selectable_text_input_manager", { enumerable: false, get: function() { return react_native.core.selectable_text_input_manager; } });
Object.defineProperty(module.exports, "get_window", { enumerable: false, get: function() { return react_native.core.get_window; } });
Object.defineProperty(module.exports, "layout_animation_presets", { enumerable: false, get: function() { return react_native.core.layout_animation_presets; } });
Object.defineProperty(module.exports, "find_node_handle", { enumerable: false, get: function() { return react_native.core.find_node_handle; } });
Object.defineProperty(module.exports, "flat_list", { enumerable: false, get: function() { return react_native.core.flat_list; } });
Object.defineProperty(module.exports, "animated_view", { enumerable: false, get: function() { return react_native.core.animated_view; } });
Object.defineProperty(module.exports, "scroll_view", { enumerable: false, get: function() { return react_native.core.scroll_view; } });
Object.defineProperty(module.exports, "use_effect_once", { enumerable: false, get: function() { return react_native.core.use_effect_once; } });
Object.defineProperty(module.exports, "touchable_highlight", { enumerable: false, get: function() { return react_native.core.touchable_highlight; } });
Object.defineProperty(module.exports, "section_list", { enumerable: false, get: function() { return react_native.core.section_list; } });
Object.defineProperty(module.exports, "alert", { enumerable: false, get: function() { return react_native.core.alert; } });
Object.defineProperty(module.exports, "hw_back_remove_listener", { enumerable: false, get: function() { return react_native.core.hw_back_remove_listener; } });
Object.defineProperty(module.exports, "layout_animation", { enumerable: false, get: function() { return react_native.core.layout_animation; } });
Object.defineProperty(module.exports, "image_get_size", { enumerable: false, get: function() { return react_native.core.image_get_size; } });
Object.defineProperty(module.exports, "dismiss_keyboard_BANG_", { enumerable: false, get: function() { return react_native.core.dismiss_keyboard_BANG_; } });
Object.defineProperty(module.exports, "modal", { enumerable: false, get: function() { return react_native.core.modal; } });
Object.defineProperty(module.exports, "use_effect", { enumerable: false, get: function() { return react_native.core.use_effect; } });
Object.defineProperty(module.exports, "keyboard_avoiding_view_class", { enumerable: false, get: function() { return react_native.core.keyboard_avoiding_view_class; } });
Object.defineProperty(module.exports, "get_color_scheme", { enumerable: false, get: function() { return react_native.core.get_color_scheme; } });
Object.defineProperty(module.exports, "app_state", { enumerable: false, get: function() { return react_native.core.app_state; } });
Object.defineProperty(module.exports, "text_input", { enumerable: false, get: function() { return react_native.core.text_input; } });
Object.defineProperty(module.exports, "appearance_add_change_listener", { enumerable: false, get: function() { return react_native.core.appearance_add_change_listener; } });
Object.defineProperty(module.exports, "use_callback", { enumerable: false, get: function() { return react_native.core.use_callback; } });
Object.defineProperty(module.exports, "touchable_opacity", { enumerable: false, get: function() { return react_native.core.touchable_opacity; } });
Object.defineProperty(module.exports, "use_context", { enumerable: false, get: function() { return react_native.core.use_context; } });
Object.defineProperty(module.exports, "appearance", { enumerable: false, get: function() { return react_native.core.appearance; } });
Object.defineProperty(module.exports, "image", { enumerable: false, get: function() { return react_native.core.image; } });
//# sourceMappingURL=react_native.core.js.map
