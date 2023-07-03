var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.debug.js");
require("./reagent.impl.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.batching.js");

goog.provide('reagent.impl.batching');
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.mount_count !== 'undefined')){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return (reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1)));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = (((!(reagent.impl.util.is_client)))?reagent.impl.batching.fake_raf:(function (){var w = window;
return (function (){var or__4126__auto__ = w.requestAnimationFrame;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = w.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = w.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = w.msRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})().bind(w);
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return (c1.cljsMountOrder - c2.cljsMountOrder);
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__4613__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4613__auto__)){
var c_9446 = (a[i]);
if(c_9446.cljsIsDirty === true){
c_9446.forceUpdate();
} else {
}

var G__9447 = (i + (1));
i = G__9447;
continue;
} else {
return null;
}
break;
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
reagent.impl.batching.ratom_flush = (function reagent$impl$batching$ratom_flush(){
return null;
});
}
reagent.impl.batching.run_funs = (function reagent$impl$batching$run_funs(fs){
var n__4613__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4613__auto__)){
(fs[i]).call(null);

var G__9449 = (i + (1));
i = G__9449;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.enqueue = (function reagent$impl$batching$enqueue(queue,fs,f){
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

fs.push(f);

return queue.schedule();
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
var temp__5739__auto__ = this$.afterRender;
if((temp__5739__auto__ == null)){
return null;
} else {
var fs = temp__5739__auto__;
(this$.afterRender = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
if((this$.componentQueue == null)){
(this$.componentQueue = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.componentQueue,c);
}));

(reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

return reagent.impl.batching.next_tick.call(null,(function (){
return this$.run_queues();
}));
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_before_flush = (function (){
var self__ = this;
var this$ = this;
var temp__5739__auto__ = this$.beforeFlush;
if((temp__5739__auto__ == null)){
return null;
} else {
var fs = temp__5739__auto__;
(this$.beforeFlush = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.flush_before_flush();

reagent.impl.batching.ratom_flush.call(null);

this$.flush_render();

return this$.flush_after_render();
}));

(reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
if((this$.beforeFlush == null)){
(this$.beforeFlush = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.beforeFlush,f);
}));

(reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
if((this$.afterRender == null)){
(this$.afterRender = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.afterRender,f);
}));

(reagent.impl.batching.RenderQueue.prototype.flush_render = (function (){
var self__ = this;
var this$ = this;
var temp__5739__auto__ = this$.componentQueue;
if((temp__5739__auto__ == null)){
return null;
} else {
var fs = temp__5739__auto__;
(this$.componentQueue = null);

return reagent.impl.batching.run_queue.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue");

(reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for reagent.impl.batching/RenderQueue.
 */
reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.render_queue !== 'undefined')){
} else {
reagent.impl.batching.render_queue = reagent.impl.batching.__GT_RenderQueue.call(null,false);
}
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.flush_after_render = (function reagent$impl$batching$flush_after_render(){
return reagent.impl.batching.render_queue.flush_after_render();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
if(cljs.core.truth_(c.cljsIsDirty)){
return null;
} else {
(c.cljsIsDirty = true);

return reagent.impl.batching.render_queue.queue_render(c);
}
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c.cljsIsDirty = false);
});
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});
Object.defineProperty(module.exports, "fake_raf", { enumerable: false, get: function() { return reagent.impl.batching.fake_raf; } });
Object.defineProperty(module.exports, "run_funs", { enumerable: false, get: function() { return reagent.impl.batching.run_funs; } });
Object.defineProperty(module.exports, "do_before_flush", { enumerable: false, get: function() { return reagent.impl.batching.do_before_flush; } });
Object.defineProperty(module.exports, "flush_after_render", { enumerable: false, get: function() { return reagent.impl.batching.flush_after_render; } });
Object.defineProperty(module.exports, "queue_render", { enumerable: false, get: function() { return reagent.impl.batching.queue_render; } });
Object.defineProperty(module.exports, "next_tick", { enumerable: false, get: function() { return reagent.impl.batching.next_tick; } });
Object.defineProperty(module.exports, "flush", { enumerable: false, get: function() { return reagent.impl.batching.flush; } });
Object.defineProperty(module.exports, "mark_rendered", { enumerable: false, get: function() { return reagent.impl.batching.mark_rendered; } });
Object.defineProperty(module.exports, "schedule", { enumerable: false, get: function() { return reagent.impl.batching.schedule; } });
Object.defineProperty(module.exports, "render_queue", { enumerable: false, get: function() { return reagent.impl.batching.render_queue; } });
Object.defineProperty(module.exports, "RenderQueue", { enumerable: false, get: function() { return reagent.impl.batching.RenderQueue; } });
Object.defineProperty(module.exports, "compare_mount_order", { enumerable: false, get: function() { return reagent.impl.batching.compare_mount_order; } });
Object.defineProperty(module.exports, "enqueue", { enumerable: false, get: function() { return reagent.impl.batching.enqueue; } });
Object.defineProperty(module.exports, "mount_count", { enumerable: false, get: function() { return reagent.impl.batching.mount_count; } });
Object.defineProperty(module.exports, "next_mount_count", { enumerable: false, get: function() { return reagent.impl.batching.next_mount_count; } });
Object.defineProperty(module.exports, "__GT_RenderQueue", { enumerable: false, get: function() { return reagent.impl.batching.__GT_RenderQueue; } });
Object.defineProperty(module.exports, "do_after_render", { enumerable: false, get: function() { return reagent.impl.batching.do_after_render; } });
Object.defineProperty(module.exports, "run_queue", { enumerable: false, get: function() { return reagent.impl.batching.run_queue; } });
Object.defineProperty(module.exports, "ratom_flush", { enumerable: false, get: function() { return reagent.impl.batching.ratom_flush; } });
//# sourceMappingURL=reagent.impl.batching.js.map
