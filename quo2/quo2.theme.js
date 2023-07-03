var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.core.js");
require("./shadow.js.shim.module$react.js");
require("./reagent.core.js");
require("./utils.transforms.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.theme.js");

goog.provide('quo2.theme');
if((typeof quo2 !== 'undefined') && (typeof quo2.theme !== 'undefined') && (typeof quo2.theme.theme_context !== 'undefined')){
} else {
quo2.theme.theme_context = shadow.js.shim.module$react.createContext(new cljs.core.Keyword(null,"light","light",1918998747));
}
if((typeof quo2 !== 'undefined') && (typeof quo2.theme !== 'undefined') && (typeof quo2.theme.theme_state !== 'undefined')){
} else {
quo2.theme.theme_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"light","light",1918998747));
}
quo2.theme.dark_QMARK_ = (function quo2$theme$dark_QMARK_(){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref.call(null,quo2.theme.theme_state));
});
quo2.theme.get_theme = (function quo2$theme$get_theme(){
return cljs.core.deref.call(null,quo2.theme.theme_state);
});
quo2.theme.set_theme = (function quo2$theme$set_theme(value){
return cljs.core.reset_BANG_.call(null,quo2.theme.theme_state,value);
});
/**
 * Returns a value based on the current/override-theme theme.
 */
quo2.theme.theme_value = (function quo2$theme$theme_value(var_args){
var G__16548 = arguments.length;
switch (G__16548) {
case 2:
return quo2.theme.theme_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quo2.theme.theme_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.theme.theme_value.cljs$core$IFn$_invoke$arity$2 = (function (light_value,dark_value){
return quo2.theme.theme_value.call(null,light_value,dark_value,null);
}));

(quo2.theme.theme_value.cljs$core$IFn$_invoke$arity$3 = (function (light_value,dark_value,override_theme){
var theme = (function (){var or__4126__auto__ = override_theme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.theme.get_theme.call(null);
}
})();
if(cljs.core._EQ_.call(null,theme,new cljs.core.Keyword(null,"light","light",1918998747))){
return light_value;
} else {
return dark_value;
}
}));

(quo2.theme.theme_value.cljs$lang$maxFixedArity = 3);

/**
 * Wrap `children` in a React Provider using `quo2.theme/theme-context` as the
 *   context.
 * 
 *   `options`: Clojure map. Currently we only use the `:theme` key. In the future
 *   we may support other settings.
 *   
 */
quo2.theme.provider = (function quo2$theme$provider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16555 = arguments.length;
var i__4737__auto___16556 = (0);
while(true){
if((i__4737__auto___16556 < len__4736__auto___16555)){
args__4742__auto__.push((arguments[i__4737__auto___16556]));

var G__16557 = (i__4737__auto___16556 + (1));
i__4737__auto___16556 = G__16557;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.theme.provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.theme.provider.cljs$core$IFn$_invoke$arity$variadic = (function (options,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),quo2.theme.theme_context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),options], null)], null),children);
}));

(quo2.theme.provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.theme.provider.cljs$lang$applyTo = (function (seq16549){
var G__16550 = cljs.core.first.call(null,seq16549);
var seq16549__$1 = cljs.core.next.call(null,seq16549);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16550,seq16549__$1);
}));

/**
 * A hook that returns the current theme context.
 */
quo2.theme.use_theme = (function quo2$theme$use_theme(){
return utils.transforms.js__GT_clj.call(null,react_native.core.use_context.call(null,quo2.theme.theme_context));
});
quo2.theme.f_with_theme = (function quo2$theme$f_with_theme(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16558 = arguments.length;
var i__4737__auto___16559 = (0);
while(true){
if((i__4737__auto___16559 < len__4736__auto___16558)){
args__4742__auto__.push((arguments[i__4737__auto___16559]));

var G__16560 = (i__4737__auto___16559 + (1));
i__4737__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return quo2.theme.f_with_theme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(quo2.theme.f_with_theme.cljs$core$IFn$_invoke$arity$variadic = (function (component,props,args){
var theme = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(quo2.theme.use_theme.call(null)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme)], null),args);
}));

(quo2.theme.f_with_theme.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(quo2.theme.f_with_theme.cljs$lang$applyTo = (function (seq16551){
var G__16552 = cljs.core.first.call(null,seq16551);
var seq16551__$1 = cljs.core.next.call(null,seq16551);
var G__16553 = cljs.core.first.call(null,seq16551__$1);
var seq16551__$2 = cljs.core.next.call(null,seq16551__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16552,G__16553,seq16551__$2);
}));

/**
 * Create a functional component that assoc `:theme` into the first arg of
 *   `component`. The theme value is taken from the nearest `quo2.theme/provider`.
 */
quo2.theme.with_theme = (function quo2$theme$with_theme(component){
return (function() { 
var G__16561__delegate = function (args){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.theme.f_with_theme,component], null),args);
};
var G__16561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16562__i = 0, G__16562__a = new Array(arguments.length -  0);
while (G__16562__i < G__16562__a.length) {G__16562__a[G__16562__i] = arguments[G__16562__i + 0]; ++G__16562__i;}
  args = new cljs.core.IndexedSeq(G__16562__a,0,null);
} 
return G__16561__delegate.call(this,args);};
G__16561.cljs$lang$maxFixedArity = 0;
G__16561.cljs$lang$applyTo = (function (arglist__16563){
var args = cljs.core.seq(arglist__16563);
return G__16561__delegate(args);
});
G__16561.cljs$core$IFn$_invoke$arity$variadic = G__16561__delegate;
return G__16561;
})()
;
});
Object.defineProperty(module.exports, "theme_context", { enumerable: false, get: function() { return quo2.theme.theme_context; } });
Object.defineProperty(module.exports, "provider", { enumerable: false, get: function() { return quo2.theme.provider; } });
Object.defineProperty(module.exports, "theme_state", { enumerable: false, get: function() { return quo2.theme.theme_state; } });
Object.defineProperty(module.exports, "get_theme", { enumerable: false, get: function() { return quo2.theme.get_theme; } });
Object.defineProperty(module.exports, "set_theme", { enumerable: false, get: function() { return quo2.theme.set_theme; } });
Object.defineProperty(module.exports, "use_theme", { enumerable: false, get: function() { return quo2.theme.use_theme; } });
Object.defineProperty(module.exports, "with_theme", { enumerable: false, get: function() { return quo2.theme.with_theme; } });
Object.defineProperty(module.exports, "theme_value", { enumerable: false, get: function() { return quo2.theme.theme_value; } });
Object.defineProperty(module.exports, "f_with_theme", { enumerable: false, get: function() { return quo2.theme.f_with_theme; } });
Object.defineProperty(module.exports, "dark_QMARK_", { enumerable: false, get: function() { return quo2.theme.dark_QMARK_; } });
//# sourceMappingURL=quo2.theme.js.map
