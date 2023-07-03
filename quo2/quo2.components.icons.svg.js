var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.svg.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.icons.svg.js");

goog.provide('quo2.components.icons.svg');
quo2.components.icons.svg.container = (function quo2$components$icons$svg$container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16594 = arguments.length;
var i__4737__auto___16595 = (0);
while(true){
if((i__4737__auto___16595 < len__4736__auto___16594)){
args__4742__auto__.push((arguments[i__4737__auto___16595]));

var G__16596 = (i__4737__auto___16595 + (1));
i__4737__auto___16595 = G__16596;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.icons.svg.container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.icons.svg.container.cljs$core$IFn$_invoke$arity$variadic = (function (p__16578,children){
var map__16579 = p__16578;
var map__16579__$1 = (((((!((map__16579 == null))))?(((((map__16579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16579):map__16579);
var size = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"size","size",1098693007),(20));
var accessibility_label = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var style = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.svg,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),children);
}));

(quo2.components.icons.svg.container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.icons.svg.container.cljs$lang$applyTo = (function (seq16570){
var G__16571 = cljs.core.first.call(null,seq16570);
var seq16570__$1 = cljs.core.next.call(null,seq16570);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16571,seq16570__$1);
}));

quo2.components.icons.svg.clear_20 = (function quo2$components$icons$svg$clear_20(p__16583){
var map__16585 = p__16583;
var map__16585__$1 = (((((!((map__16585 == null))))?(((((map__16585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16585):map__16585);
var props = map__16585__$1;
var color = cljs.core.get.call(null,map__16585__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var color_2 = cljs.core.get.call(null,map__16585__$1,new cljs.core.Keyword(null,"color-2","color-2",1680964274));
var color__$1 = (function (){var or__4126__auto__ = color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.foundations.colors.neutral_100;
}
})();
var color_2__$1 = (function (){var or__4126__auto__ = color_2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.foundations.colors.white;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icons.svg.container,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z",new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M9.15142 9.99998L7.07566 12.0757L7.9242 12.9243L9.99994 10.8485L12.0757 12.9242L12.9242 12.0757L10.8485 9.99998L12.9242 7.92421L12.0757 7.07568L9.99994 9.15145L7.92421 7.07572L7.07568 7.92425L9.15142 9.99998Z",new cljs.core.Keyword(null,"fill","fill",883462889),color_2__$1], null)], null)], null);
});
quo2.components.icons.svg.icons = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("i","clear-20","i/clear-20",1263239362),quo2.components.icons.svg.clear_20], null);
quo2.components.icons.svg.append_to_keyword = (function quo2$components$icons$svg$append_to_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16603 = arguments.length;
var i__4737__auto___16604 = (0);
while(true){
if((i__4737__auto___16604 < len__4736__auto___16603)){
args__4742__auto__.push((arguments[i__4737__auto___16604]));

var G__16605 = (i__4737__auto___16604 + (1));
i__4737__auto___16604 = G__16605;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.icons.svg.append_to_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.icons.svg.append_to_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (k,xs){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),(1)),xs));
}));

(quo2.components.icons.svg.append_to_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.icons.svg.append_to_keyword.cljs$lang$applyTo = (function (seq16591){
var G__16592 = cljs.core.first.call(null,seq16591);
var seq16591__$1 = cljs.core.next.call(null,seq16591);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16592,seq16591__$1);
}));

quo2.components.icons.svg.get_icon = (function quo2$components$icons$svg$get_icon(icon_name,size){
return cljs.core.get.call(null,quo2.components.icons.svg.icons,quo2.components.icons.svg.append_to_keyword.call(null,icon_name,"-",size));
});
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.icons.svg.container; } });
Object.defineProperty(module.exports, "clear_20", { enumerable: false, get: function() { return quo2.components.icons.svg.clear_20; } });
Object.defineProperty(module.exports, "icons", { enumerable: false, get: function() { return quo2.components.icons.svg.icons; } });
Object.defineProperty(module.exports, "append_to_keyword", { enumerable: false, get: function() { return quo2.components.icons.svg.append_to_keyword; } });
Object.defineProperty(module.exports, "get_icon", { enumerable: false, get: function() { return quo2.components.icons.svg.get_icon; } });
//# sourceMappingURL=quo2.components.icons.svg.js.map
