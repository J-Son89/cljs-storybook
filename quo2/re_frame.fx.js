var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.router.js");
require("./re_frame.db.js");
require("./re_frame.interceptor.js");
require("./re_frame.interop.js");
require("./re_frame.events.js");
require("./re_frame.registrar.js");
require("./re_frame.loggers.js");
require("./re_frame.trace.js");
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

$CLJS.SHADOW_ENV.setLoaded("re_frame.fx.js");

goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__18440 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18441 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18441);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___18528 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___18528)){
var new_db_18529 = temp__5735__auto___18528;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18529);
} else {
}

var seq__18443 = cljs.core.seq.call(null,effects_without_db);
var chunk__18444 = null;
var count__18445 = (0);
var i__18446 = (0);
while(true){
if((i__18446 < count__18445)){
var vec__18456 = cljs.core._nth(chunk__18444,i__18446);
var effect_key = cljs.core.nth.call(null,vec__18456,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18456,(1),null);
var temp__5733__auto___18530 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18530)){
var effect_fn_18532 = temp__5733__auto___18530;
effect_fn_18532.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18534 = seq__18443;
var G__18535 = chunk__18444;
var G__18536 = count__18445;
var G__18537 = (i__18446 + (1));
seq__18443 = G__18534;
chunk__18444 = G__18535;
count__18445 = G__18536;
i__18446 = G__18537;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18443);
if(temp__5735__auto__){
var seq__18443__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18443__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18443__$1);
var G__18539 = cljs.core.chunk_rest.call(null,seq__18443__$1);
var G__18540 = c__4556__auto__;
var G__18541 = cljs.core.count.call(null,c__4556__auto__);
var G__18542 = (0);
seq__18443 = G__18539;
chunk__18444 = G__18540;
count__18445 = G__18541;
i__18446 = G__18542;
continue;
} else {
var vec__18460 = cljs.core.first.call(null,seq__18443__$1);
var effect_key = cljs.core.nth.call(null,vec__18460,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18460,(1),null);
var temp__5733__auto___18543 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18543)){
var effect_fn_18544 = temp__5733__auto___18543;
effect_fn_18544.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18545 = cljs.core.next.call(null,seq__18443__$1);
var G__18546 = null;
var G__18547 = (0);
var G__18548 = (0);
seq__18443 = G__18545;
chunk__18444 = G__18546;
count__18445 = G__18547;
i__18446 = G__18548;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18061__auto___18549 = re_frame.interop.now.call(null);
var duration__18062__auto___18550 = (end__18061__auto___18549 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18062__auto___18550,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18061__auto___18549);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18440);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___18551 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___18551)){
var new_db_18552 = temp__5735__auto___18551;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18552);
} else {
}

var seq__18463 = cljs.core.seq.call(null,effects_without_db);
var chunk__18464 = null;
var count__18465 = (0);
var i__18466 = (0);
while(true){
if((i__18466 < count__18465)){
var vec__18485 = cljs.core._nth(chunk__18464,i__18466);
var effect_key = cljs.core.nth.call(null,vec__18485,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18485,(1),null);
var temp__5733__auto___18553 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18553)){
var effect_fn_18554 = temp__5733__auto___18553;
effect_fn_18554.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18555 = seq__18463;
var G__18556 = chunk__18464;
var G__18557 = count__18465;
var G__18558 = (i__18466 + (1));
seq__18463 = G__18555;
chunk__18464 = G__18556;
count__18465 = G__18557;
i__18466 = G__18558;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18463);
if(temp__5735__auto__){
var seq__18463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18463__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18463__$1);
var G__18559 = cljs.core.chunk_rest.call(null,seq__18463__$1);
var G__18560 = c__4556__auto__;
var G__18561 = cljs.core.count.call(null,c__4556__auto__);
var G__18562 = (0);
seq__18463 = G__18559;
chunk__18464 = G__18560;
count__18465 = G__18561;
i__18466 = G__18562;
continue;
} else {
var vec__18488 = cljs.core.first.call(null,seq__18463__$1);
var effect_key = cljs.core.nth.call(null,vec__18488,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18488,(1),null);
var temp__5733__auto___18564 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18564)){
var effect_fn_18566 = temp__5733__auto___18564;
effect_fn_18566.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18568 = cljs.core.next.call(null,seq__18463__$1);
var G__18569 = null;
var G__18570 = (0);
var G__18571 = (0);
seq__18463 = G__18568;
chunk__18464 = G__18569;
count__18465 = G__18570;
i__18466 = G__18571;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__18491){
var map__18492 = p__18491;
var map__18492__$1 = (((((!((map__18492 == null))))?(((((map__18492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18492):map__18492);
var effect = map__18492__$1;
var ms = cljs.core.get.call(null,map__18492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__18494 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18495 = null;
var count__18496 = (0);
var i__18497 = (0);
while(true){
if((i__18497 < count__18496)){
var effect = cljs.core._nth(chunk__18495,i__18497);
re_frame.fx.dispatch_later.call(null,effect);


var G__18572 = seq__18494;
var G__18573 = chunk__18495;
var G__18574 = count__18496;
var G__18575 = (i__18497 + (1));
seq__18494 = G__18572;
chunk__18495 = G__18573;
count__18496 = G__18574;
i__18497 = G__18575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18494);
if(temp__5735__auto__){
var seq__18494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18494__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18494__$1);
var G__18576 = cljs.core.chunk_rest.call(null,seq__18494__$1);
var G__18577 = c__4556__auto__;
var G__18578 = cljs.core.count.call(null,c__4556__auto__);
var G__18579 = (0);
seq__18494 = G__18576;
chunk__18495 = G__18577;
count__18496 = G__18578;
i__18497 = G__18579;
continue;
} else {
var effect = cljs.core.first.call(null,seq__18494__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__18580 = cljs.core.next.call(null,seq__18494__$1);
var G__18581 = null;
var G__18582 = (0);
var G__18583 = (0);
seq__18494 = G__18580;
chunk__18495 = G__18581;
count__18496 = G__18582;
i__18497 = G__18583;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__18500 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__18501 = null;
var count__18502 = (0);
var i__18503 = (0);
while(true){
if((i__18503 < count__18502)){
var vec__18511 = cljs.core._nth(chunk__18501,i__18503);
var effect_key = cljs.core.nth.call(null,vec__18511,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18511,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___18584 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18584)){
var effect_fn_18585 = temp__5733__auto___18584;
effect_fn_18585.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18586 = seq__18500;
var G__18587 = chunk__18501;
var G__18588 = count__18502;
var G__18589 = (i__18503 + (1));
seq__18500 = G__18586;
chunk__18501 = G__18587;
count__18502 = G__18588;
i__18503 = G__18589;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18500);
if(temp__5735__auto__){
var seq__18500__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18500__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18500__$1);
var G__18590 = cljs.core.chunk_rest.call(null,seq__18500__$1);
var G__18591 = c__4556__auto__;
var G__18592 = cljs.core.count.call(null,c__4556__auto__);
var G__18593 = (0);
seq__18500 = G__18590;
chunk__18501 = G__18591;
count__18502 = G__18592;
i__18503 = G__18593;
continue;
} else {
var vec__18514 = cljs.core.first.call(null,seq__18500__$1);
var effect_key = cljs.core.nth.call(null,vec__18514,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18514,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5733__auto___18594 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18594)){
var effect_fn_18595 = temp__5733__auto___18594;
effect_fn_18595.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18596 = cljs.core.next.call(null,seq__18500__$1);
var G__18597 = null;
var G__18598 = (0);
var G__18599 = (0);
seq__18500 = G__18596;
chunk__18501 = G__18597;
count__18502 = G__18598;
i__18503 = G__18599;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__18517 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18518 = null;
var count__18519 = (0);
var i__18520 = (0);
while(true){
if((i__18520 < count__18519)){
var event = cljs.core._nth(chunk__18518,i__18520);
re_frame.router.dispatch.call(null,event);


var G__18600 = seq__18517;
var G__18601 = chunk__18518;
var G__18602 = count__18519;
var G__18603 = (i__18520 + (1));
seq__18517 = G__18600;
chunk__18518 = G__18601;
count__18519 = G__18602;
i__18520 = G__18603;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18517);
if(temp__5735__auto__){
var seq__18517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18517__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18517__$1);
var G__18605 = cljs.core.chunk_rest.call(null,seq__18517__$1);
var G__18606 = c__4556__auto__;
var G__18607 = cljs.core.count.call(null,c__4556__auto__);
var G__18608 = (0);
seq__18517 = G__18605;
chunk__18518 = G__18606;
count__18519 = G__18607;
i__18520 = G__18608;
continue;
} else {
var event = cljs.core.first.call(null,seq__18517__$1);
re_frame.router.dispatch.call(null,event);


var G__18609 = cljs.core.next.call(null,seq__18517__$1);
var G__18610 = null;
var G__18611 = (0);
var G__18612 = (0);
seq__18517 = G__18609;
chunk__18518 = G__18610;
count__18519 = G__18611;
i__18520 = G__18612;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__18524 = cljs.core.seq.call(null,value);
var chunk__18525 = null;
var count__18526 = (0);
var i__18527 = (0);
while(true){
if((i__18527 < count__18526)){
var event = cljs.core._nth(chunk__18525,i__18527);
clear_event(event);


var G__18613 = seq__18524;
var G__18614 = chunk__18525;
var G__18615 = count__18526;
var G__18616 = (i__18527 + (1));
seq__18524 = G__18613;
chunk__18525 = G__18614;
count__18526 = G__18615;
i__18527 = G__18616;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18524);
if(temp__5735__auto__){
var seq__18524__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18524__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18524__$1);
var G__18618 = cljs.core.chunk_rest.call(null,seq__18524__$1);
var G__18619 = c__4556__auto__;
var G__18620 = cljs.core.count.call(null,c__4556__auto__);
var G__18621 = (0);
seq__18524 = G__18618;
chunk__18525 = G__18619;
count__18526 = G__18620;
i__18527 = G__18621;
continue;
} else {
var event = cljs.core.first.call(null,seq__18524__$1);
clear_event(event);


var G__18622 = cljs.core.next.call(null,seq__18524__$1);
var G__18623 = null;
var G__18624 = (0);
var G__18625 = (0);
seq__18524 = G__18622;
chunk__18525 = G__18623;
count__18526 = G__18624;
i__18527 = G__18625;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
Object.defineProperty(module.exports, "kind", { enumerable: false, get: function() { return re_frame.fx.kind; } });
Object.defineProperty(module.exports, "reg_fx", { enumerable: false, get: function() { return re_frame.fx.reg_fx; } });
Object.defineProperty(module.exports, "do_fx", { enumerable: false, get: function() { return re_frame.fx.do_fx; } });
Object.defineProperty(module.exports, "dispatch_later", { enumerable: false, get: function() { return re_frame.fx.dispatch_later; } });
//# sourceMappingURL=re_frame.fx.js.map
