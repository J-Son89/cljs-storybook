var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.interop.js");
require("./re_frame.loggers.js");
require("./goog.functions.functions.js");
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

$CLJS.SHADOW_ENV.setLoaded("re_frame.trace.js");

goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__18091){
var map__18093 = p__18091;
var map__18093__$1 = (((((!((map__18093 == null))))?(((((map__18093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18093):map__18093);
var operation = cljs.core.get.call(null,map__18093__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__18093__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__18093__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__18093__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__18103_18141 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__18104_18142 = null;
var count__18105_18143 = (0);
var i__18106_18144 = (0);
while(true){
if((i__18106_18144 < count__18105_18143)){
var vec__18128_18145 = cljs.core._nth(chunk__18104_18142,i__18106_18144);
var k_18146 = cljs.core.nth.call(null,vec__18128_18145,(0),null);
var cb_18147 = cljs.core.nth.call(null,vec__18128_18145,(1),null);
try{cb_18147.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e18132){var e_18148 = e18132;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_18146,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_18148);
}

var G__18153 = seq__18103_18141;
var G__18154 = chunk__18104_18142;
var G__18155 = count__18105_18143;
var G__18156 = (i__18106_18144 + (1));
seq__18103_18141 = G__18153;
chunk__18104_18142 = G__18154;
count__18105_18143 = G__18155;
i__18106_18144 = G__18156;
continue;
} else {
var temp__5735__auto___18157 = cljs.core.seq.call(null,seq__18103_18141);
if(temp__5735__auto___18157){
var seq__18103_18158__$1 = temp__5735__auto___18157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18103_18158__$1)){
var c__4556__auto___18159 = cljs.core.chunk_first.call(null,seq__18103_18158__$1);
var G__18160 = cljs.core.chunk_rest.call(null,seq__18103_18158__$1);
var G__18161 = c__4556__auto___18159;
var G__18162 = cljs.core.count.call(null,c__4556__auto___18159);
var G__18163 = (0);
seq__18103_18141 = G__18160;
chunk__18104_18142 = G__18161;
count__18105_18143 = G__18162;
i__18106_18144 = G__18163;
continue;
} else {
var vec__18133_18167 = cljs.core.first.call(null,seq__18103_18158__$1);
var k_18168 = cljs.core.nth.call(null,vec__18133_18167,(0),null);
var cb_18169 = cljs.core.nth.call(null,vec__18133_18167,(1),null);
try{cb_18169.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e18136){var e_18170 = e18136;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_18168,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_18170);
}

var G__18171 = cljs.core.next.call(null,seq__18103_18158__$1);
var G__18172 = null;
var G__18173 = (0);
var G__18174 = (0);
seq__18103_18141 = G__18171;
chunk__18104_18142 = G__18172;
count__18105_18143 = G__18173;
i__18106_18144 = G__18174;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
Object.defineProperty(module.exports, "reset_tracing_BANG_", { enumerable: false, get: function() { return re_frame.trace.reset_tracing_BANG_; } });
Object.defineProperty(module.exports, "next_delivery", { enumerable: false, get: function() { return re_frame.trace.next_delivery; } });
Object.defineProperty(module.exports, "run_tracing_callbacks_BANG_", { enumerable: false, get: function() { return re_frame.trace.run_tracing_callbacks_BANG_; } });
Object.defineProperty(module.exports, "trace_cbs", { enumerable: false, get: function() { return re_frame.trace.trace_cbs; } });
Object.defineProperty(module.exports, "register_trace_cb", { enumerable: false, get: function() { return re_frame.trace.register_trace_cb; } });
Object.defineProperty(module.exports, "next_id", { enumerable: false, get: function() { return re_frame.trace.next_id; } });
Object.defineProperty(module.exports, "debounce", { enumerable: false, get: function() { return re_frame.trace.debounce; } });
Object.defineProperty(module.exports, "is_trace_enabled_QMARK_", { enumerable: false, get: function() { return re_frame.trace.is_trace_enabled_QMARK_; } });
Object.defineProperty(module.exports, "traces", { enumerable: false, get: function() { return re_frame.trace.traces; } });
Object.defineProperty(module.exports, "debounce_time", { enumerable: false, get: function() { return re_frame.trace.debounce_time; } });
Object.defineProperty(module.exports, "schedule_debounce", { enumerable: false, get: function() { return re_frame.trace.schedule_debounce; } });
Object.defineProperty(module.exports, "id", { enumerable: false, get: function() { return re_frame.trace.id; } });
Object.defineProperty(module.exports, "_STAR_current_trace_STAR_", { enumerable: false, get: function() { return re_frame.trace._STAR_current_trace_STAR_; } });
Object.defineProperty(module.exports, "remove_trace_cb", { enumerable: false, get: function() { return re_frame.trace.remove_trace_cb; } });
Object.defineProperty(module.exports, "start_trace", { enumerable: false, get: function() { return re_frame.trace.start_trace; } });
Object.defineProperty(module.exports, "trace_enabled_QMARK_", { enumerable: false, get: function() { return re_frame.trace.trace_enabled_QMARK_; } });
//# sourceMappingURL=re_frame.trace.js.map
