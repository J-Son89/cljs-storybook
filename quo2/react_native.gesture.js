var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native_gesture_handler.js");
require("./react_native.flat_list.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.gesture.js");

goog.provide('react_native.gesture');
react_native.gesture.gesture_detector = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.GestureDetector);
react_native.gesture.gesture_handler_root_hoc = shadow.js.shim.module$react_native_gesture_handler.gestureHandlerRootHOC;
react_native.gesture.gesture_tap = (function react_native$gesture$gesture_tap(){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Tap();
});
react_native.gesture.gesture_pan = (function react_native$gesture$gesture_pan(){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Pan();
});
react_native.gesture.gesture_pinch = (function react_native$gesture$gesture_pinch(){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Pinch();
});
react_native.gesture.on_begin = (function react_native$gesture$on_begin(gesture,handler){
return gesture.onBegin(handler);
});
react_native.gesture.on_start = (function react_native$gesture$on_start(gesture,handler){
return gesture.onStart(handler);
});
react_native.gesture.on_update = (function react_native$gesture$on_update(gesture,handler){
return gesture.onUpdate(handler);
});
react_native.gesture.on_end = (function react_native$gesture$on_end(gesture,handler){
return gesture.onEnd(handler);
});
react_native.gesture.on_finalize = (function react_native$gesture$on_finalize(gesture,handler){
return gesture.onFinalize(handler);
});
react_native.gesture.max_pointers = (function react_native$gesture$max_pointers(gesture,count){
return gesture.maxPointers(count);
});
react_native.gesture.min_distance = (function react_native$gesture$min_distance(gesture,dist){
return gesture.minDistance(dist);
});
react_native.gesture.number_of_taps = (function react_native$gesture$number_of_taps(gesture,count){
return gesture.numberOfTaps(count);
});
react_native.gesture.enabled = (function react_native$gesture$enabled(gesture,enabled_QMARK_){
return gesture.enabled(enabled_QMARK_);
});
react_native.gesture.average_touches = (function react_native$gesture$average_touches(gesture,average_touches_QMARK_){
return gesture.averageTouches(average_touches_QMARK_);
});
react_native.gesture.with_test_ID = (function react_native$gesture$with_test_ID(gesture,test_ID){
return gesture.withTestId(cljs.core.str.cljs$core$IFn$_invoke$arity$1(test_ID));
});
react_native.gesture.simultaneous = (function react_native$gesture$simultaneous(var_args){
var G__16694 = arguments.length;
switch (G__16694) {
case 2:
return react_native.gesture.simultaneous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return react_native.gesture.simultaneous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(react_native.gesture.simultaneous.cljs$core$IFn$_invoke$arity$2 = (function (g1,g2){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Simultaneous(g1,g2);
}));

(react_native.gesture.simultaneous.cljs$core$IFn$_invoke$arity$3 = (function (g1,g2,g3){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Simultaneous(g1,g2,g3);
}));

(react_native.gesture.simultaneous.cljs$lang$maxFixedArity = 3);

react_native.gesture.exclusive = (function react_native$gesture$exclusive(g1,g2){
return shadow.js.shim.module$react_native_gesture_handler.Gesture.Exclusive(g1,g2);
});
react_native.gesture.touchable_without_feedback = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.TouchableWithoutFeedback);
react_native.gesture.rect_button = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.RectButton);
react_native.gesture.swipeable_component = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.Swipeable);
react_native.gesture.swipeable = (function react_native$gesture$swipeable(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16743 = arguments.length;
var i__4737__auto___16744 = (0);
while(true){
if((i__4737__auto___16744 < len__4736__auto___16743)){
args__4742__auto__.push((arguments[i__4737__auto___16744]));

var G__16745 = (i__4737__auto___16744 + (1));
i__4737__auto___16744 = G__16745;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return react_native.gesture.swipeable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(react_native.gesture.swipeable.cljs$core$IFn$_invoke$arity$variadic = (function (p__16721,children){
var map__16722 = p__16721;
var map__16722__$1 = (((((!((map__16722 == null))))?(((((map__16722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16722):map__16722);
var props = map__16722__$1;
var render_left_actions = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"render-left-actions","render-left-actions",-1749977121));
var render_right_actions = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"render-right-actions","render-right-actions",-470432282));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.gesture.swipeable_component,(function (){var G__16726 = props;
var G__16726__$1 = (cljs.core.truth_(render_left_actions)?cljs.core.assoc.call(null,G__16726,new cljs.core.Keyword(null,"render-left-actions","render-left-actions",-1749977121),(function() { 
var G__16747__delegate = function (args){
return reagent.core.as_element.call(null,cljs.core.apply.call(null,render_left_actions,args));
};
var G__16747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16749__i = 0, G__16749__a = new Array(arguments.length -  0);
while (G__16749__i < G__16749__a.length) {G__16749__a[G__16749__i] = arguments[G__16749__i + 0]; ++G__16749__i;}
  args = new cljs.core.IndexedSeq(G__16749__a,0,null);
} 
return G__16747__delegate.call(this,args);};
G__16747.cljs$lang$maxFixedArity = 0;
G__16747.cljs$lang$applyTo = (function (arglist__16750){
var args = cljs.core.seq(arglist__16750);
return G__16747__delegate(args);
});
G__16747.cljs$core$IFn$_invoke$arity$variadic = G__16747__delegate;
return G__16747;
})()
):G__16726);
if(cljs.core.truth_(render_right_actions)){
return cljs.core.assoc.call(null,G__16726__$1,new cljs.core.Keyword(null,"render-right-actions","render-right-actions",-470432282),(function() { 
var G__16752__delegate = function (args){
return reagent.core.as_element.call(null,cljs.core.apply.call(null,render_right_actions,args));
};
var G__16752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16753__i = 0, G__16753__a = new Array(arguments.length -  0);
while (G__16753__i < G__16753__a.length) {G__16753__a[G__16753__i] = arguments[G__16753__i + 0]; ++G__16753__i;}
  args = new cljs.core.IndexedSeq(G__16753__a,0,null);
} 
return G__16752__delegate.call(this,args);};
G__16752.cljs$lang$maxFixedArity = 0;
G__16752.cljs$lang$applyTo = (function (arglist__16754){
var args = cljs.core.seq(arglist__16754);
return G__16752__delegate(args);
});
G__16752.cljs$core$IFn$_invoke$arity$variadic = G__16752__delegate;
return G__16752;
})()
);
} else {
return G__16726__$1;
}
})()], null),children);
}));

(react_native.gesture.swipeable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(react_native.gesture.swipeable.cljs$lang$applyTo = (function (seq16712){
var G__16714 = cljs.core.first.call(null,seq16712);
var seq16712__$1 = cljs.core.next.call(null,seq16712);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16714,seq16712__$1);
}));

react_native.gesture.gesture_flat_list = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.FlatList);
react_native.gesture.flat_list = (function react_native$gesture$flat_list(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.gesture.gesture_flat_list,react_native.flat_list.base_list_props.call(null,props)], null);
});
react_native.gesture.scroll_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_gesture_handler.ScrollView);
react_native.gesture.flatten_sections = (function react_native$gesture$flatten_sections(sections){
return cljs.core.mapcat.call(null,(function (p__16729){
var map__16730 = p__16729;
var map__16730__$1 = (((((!((map__16730 == null))))?(((((map__16730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16730):map__16730);
var title = cljs.core.get.call(null,map__16730__$1,new cljs.core.Keyword(null,"title","title",636505583));
var data = cljs.core.get.call(null,map__16730__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"header?","header?",-106649173),true], null)], null),data);
}),sections);
});
react_native.gesture.section_list = (function react_native$gesture$section_list(p__16734){
var map__16736 = p__16734;
var map__16736__$1 = (((((!((map__16736 == null))))?(((((map__16736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16736):map__16736);
var props = map__16736__$1;
var sections = cljs.core.get.call(null,map__16736__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var render_section_header_fn = cljs.core.get.call(null,map__16736__$1,new cljs.core.Keyword(null,"render-section-header-fn","render-section-header-fn",279306756));
var render_fn = cljs.core.get.call(null,map__16736__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var data = react_native.gesture.flatten_sections.call(null,sections);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.gesture.flat_list,cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1,p2,p3,p4){
if(cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(p1))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_section_header_fn,p1,p2,p3,p4], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn,p1,p2,p3,p4], null);
}
})], null))], null);
});
Object.defineProperty(module.exports, "on_finalize", { enumerable: false, get: function() { return react_native.gesture.on_finalize; } });
Object.defineProperty(module.exports, "simultaneous", { enumerable: false, get: function() { return react_native.gesture.simultaneous; } });
Object.defineProperty(module.exports, "enabled", { enumerable: false, get: function() { return react_native.gesture.enabled; } });
Object.defineProperty(module.exports, "average_touches", { enumerable: false, get: function() { return react_native.gesture.average_touches; } });
Object.defineProperty(module.exports, "touchable_without_feedback", { enumerable: false, get: function() { return react_native.gesture.touchable_without_feedback; } });
Object.defineProperty(module.exports, "gesture_tap", { enumerable: false, get: function() { return react_native.gesture.gesture_tap; } });
Object.defineProperty(module.exports, "swipeable_component", { enumerable: false, get: function() { return react_native.gesture.swipeable_component; } });
Object.defineProperty(module.exports, "swipeable", { enumerable: false, get: function() { return react_native.gesture.swipeable; } });
Object.defineProperty(module.exports, "on_start", { enumerable: false, get: function() { return react_native.gesture.on_start; } });
Object.defineProperty(module.exports, "exclusive", { enumerable: false, get: function() { return react_native.gesture.exclusive; } });
Object.defineProperty(module.exports, "number_of_taps", { enumerable: false, get: function() { return react_native.gesture.number_of_taps; } });
Object.defineProperty(module.exports, "flat_list", { enumerable: false, get: function() { return react_native.gesture.flat_list; } });
Object.defineProperty(module.exports, "rect_button", { enumerable: false, get: function() { return react_native.gesture.rect_button; } });
Object.defineProperty(module.exports, "scroll_view", { enumerable: false, get: function() { return react_native.gesture.scroll_view; } });
Object.defineProperty(module.exports, "gesture_flat_list", { enumerable: false, get: function() { return react_native.gesture.gesture_flat_list; } });
Object.defineProperty(module.exports, "on_begin", { enumerable: false, get: function() { return react_native.gesture.on_begin; } });
Object.defineProperty(module.exports, "gesture_pan", { enumerable: false, get: function() { return react_native.gesture.gesture_pan; } });
Object.defineProperty(module.exports, "section_list", { enumerable: false, get: function() { return react_native.gesture.section_list; } });
Object.defineProperty(module.exports, "on_end", { enumerable: false, get: function() { return react_native.gesture.on_end; } });
Object.defineProperty(module.exports, "gesture_detector", { enumerable: false, get: function() { return react_native.gesture.gesture_detector; } });
Object.defineProperty(module.exports, "gesture_handler_root_hoc", { enumerable: false, get: function() { return react_native.gesture.gesture_handler_root_hoc; } });
Object.defineProperty(module.exports, "min_distance", { enumerable: false, get: function() { return react_native.gesture.min_distance; } });
Object.defineProperty(module.exports, "on_update", { enumerable: false, get: function() { return react_native.gesture.on_update; } });
Object.defineProperty(module.exports, "flatten_sections", { enumerable: false, get: function() { return react_native.gesture.flatten_sections; } });
Object.defineProperty(module.exports, "max_pointers", { enumerable: false, get: function() { return react_native.gesture.max_pointers; } });
Object.defineProperty(module.exports, "gesture_pinch", { enumerable: false, get: function() { return react_native.gesture.gesture_pinch; } });
Object.defineProperty(module.exports, "with_test_ID", { enumerable: false, get: function() { return react_native.gesture.with_test_ID; } });
//# sourceMappingURL=react_native.gesture.js.map
