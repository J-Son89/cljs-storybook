var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.string.string.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
require("./react_native.core.js");
require("./react_native.svg.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.notifications.count_down_circle.js");

goog.provide('quo2.components.notifications.count_down_circle');
quo2.components.notifications.count_down_circle.get_path_props = (function quo2$components$notifications$count_down_circle$get_path_props(size,stroke_width,rotation){
var half_size = (size / (2));
var half_stroke_width = (stroke_width / (2));
var arc_radius = (half_size - half_stroke_width);
var arc_diameter = (arc_radius * (2));
var rotation_indicator = ((cljs.core._EQ_.call(null,rotation,new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918)))?"1,0":"0,1");
var path_length = (Math.PI * arc_diameter);
var path = goog.string.format("m %s,%s a %s,%s 0 %s 0,%s a %s,%s 0 %s 0 ,-%s",half_size,half_stroke_width,arc_radius,arc_radius,rotation_indicator,arc_diameter,arc_radius,arc_radius,rotation_indicator,arc_diameter);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"path-length","path-length",651940791),path_length], null);
});
quo2.components.notifications.count_down_circle.linear_ease = (function quo2$components$notifications$count_down_circle$linear_ease(time,start,goal,duration){
if((duration === (0))){
return start;
} else {
return (((time / duration) * goal) + start);
}
});
quo2.components.notifications.count_down_circle.get_start_at = (function quo2$components$notifications$count_down_circle$get_start_at(duration,initial_remaining_time){
if((((duration === (0))) || (cljs.core._EQ_.call(null,duration,initial_remaining_time)))){
return (0);
} else {
if(typeof initial_remaining_time === 'number'){
return (duration - initial_remaining_time);
} else {
return (0);

}
}
});
quo2.components.notifications.count_down_circle.themes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dark","dark",1818973999),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"light","light",1918998747),quo2.foundations.colors.white_opa_40], null)], null);
quo2.components.notifications.count_down_circle.circle_timer = (function quo2$components$notifications$count_down_circle$circle_timer(p__19025){
var map__19026 = p__19025;
var map__19026__$1 = (((((!((map__19026 == null))))?(((((map__19026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19026):map__19026);
var color = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var duration = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var size = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var stroke_width = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var trail_color = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"trail-color","trail-color",823797297));
var rotation = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var initial_remaining_time = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"initial-remaining-time","initial-remaining-time",-680022170));
var rotation__$1 = (function (){var or__4126__auto__ = rotation;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918);
}
})();
var duration__$1 = (function (){var or__4126__auto__ = duration;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (4);
}
})();
var stroke_width__$1 = (function (){var or__4126__auto__ = stroke_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
var size__$1 = (function (){var or__4126__auto__ = size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (9);
}
})();
var max_stroke_width = (function (){var x__4214__auto__ = stroke_width__$1;
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var map__19034 = quo2.components.notifications.count_down_circle.get_path_props.call(null,size__$1,max_stroke_width,rotation__$1);
var map__19034__$1 = (((((!((map__19034 == null))))?(((((map__19034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19034):map__19034);
var path = cljs.core.get.call(null,map__19034__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_length = cljs.core.get.call(null,map__19034__$1,new cljs.core.Keyword(null,"path-length","path-length",651940791));
var start_at = quo2.components.notifications.count_down_circle.get_start_at.call(null,duration__$1,initial_remaining_time);
var elapsed_time = reagent.core.atom.call(null,(0));
var prev_frame_time = reagent.core.atom.call(null,null);
var frame_request = reagent.core.atom.call(null,null);
var display_time = reagent.core.atom.call(null,start_at);
var swap_elapsed_time_each_frame = (function quo2$components$notifications$count_down_circle$circle_timer_$_swap_elapsed_time_each_frame(frame_time){
if((cljs.core.deref.call(null,prev_frame_time) == null)){
cljs.core.reset_BANG_.call(null,prev_frame_time,frame_time);

return cljs.core.reset_BANG_.call(null,frame_request,requestAnimationFrame(quo2$components$notifications$count_down_circle$circle_timer_$_swap_elapsed_time_each_frame));
} else {
var delta = ((frame_time / (1000)) - (cljs.core.deref.call(null,prev_frame_time) / (1000)));
var current_elapsed = cljs.core.swap_BANG_.call(null,elapsed_time,cljs.core._PLUS_,delta);
var current_display_time = (start_at + current_elapsed);
var completed_QMARK_ = (current_display_time >= duration__$1);
cljs.core.reset_BANG_.call(null,display_time,((completed_QMARK_)?duration__$1:current_display_time));

if(completed_QMARK_){
return null;
} else {
cljs.core.reset_BANG_.call(null,prev_frame_time,frame_time);

return cljs.core.reset_BANG_.call(null,frame_request,requestAnimationFrame(quo2$components$notifications$count_down_circle$circle_timer_$_swap_elapsed_time_each_frame));
}
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return cancelAnimationFrame(cljs.core.deref.call(null,frame_request));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
cljs.core.reset_BANG_.call(null,frame_request,requestAnimationFrame(swap_elapsed_time_each_frame));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"width","width",-384071477),size__$1,new cljs.core.Keyword(null,"height","height",1025178622),size__$1], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size__$1)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),size__$1,new cljs.core.Keyword(null,"height","height",1025178622),size__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),path,new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4126__auto__ = trail_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"transparent","transparent",-2073609949);
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width__$1], null)], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,display_time),duration__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.svg.path,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"d","d",1972142424),path,new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4126__auto__ = color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.call(null,quo2.components.notifications.count_down_circle.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.theme.get_theme.call(null)], null));
}
})(),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width__$1,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),path_length,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),quo2.components.notifications.count_down_circle.linear_ease.call(null,cljs.core.deref.call(null,display_time),(0),path_length,duration__$1)], null)], null))], null)], null);
})], null));
});
Object.defineProperty(module.exports, "get_path_props", { enumerable: false, get: function() { return quo2.components.notifications.count_down_circle.get_path_props; } });
Object.defineProperty(module.exports, "linear_ease", { enumerable: false, get: function() { return quo2.components.notifications.count_down_circle.linear_ease; } });
Object.defineProperty(module.exports, "get_start_at", { enumerable: false, get: function() { return quo2.components.notifications.count_down_circle.get_start_at; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.notifications.count_down_circle.themes; } });
Object.defineProperty(module.exports, "circle_timer", { enumerable: false, get: function() { return quo2.components.notifications.count_down_circle.circle_timer; } });
//# sourceMappingURL=quo2.components.notifications.count_down_circle.js.map
