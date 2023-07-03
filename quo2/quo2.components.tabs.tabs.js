var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo2.components.tabs.tab.view.js");
require("./react_native.core.js");
require("./react_native.linear_gradient.js");
require("./react_native.masked_view.js");
require("./reagent.core.js");
require("./utils.collection.js");
require("./utils.number.js");
require("./react_native.gesture.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tabs.tabs.js");

goog.provide('quo2.components.tabs.tabs');
quo2.components.tabs.tabs.default_tab_size = (32);
quo2.components.tabs.tabs.unread_count_offset = (3);
quo2.components.tabs.tabs.calculate_fade_end_percentage = (function quo2$components$tabs$tabs$calculate_fade_end_percentage(p__19439){
var map__19440 = p__19439;
var map__19440__$1 = (((((!((map__19440 == null))))?(((((map__19440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19440):map__19440);
var offset_x = cljs.core.get.call(null,map__19440__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var content_width = cljs.core.get.call(null,map__19440__$1,new cljs.core.Keyword(null,"content-width","content-width",702940455));
var layout_width = cljs.core.get.call(null,map__19440__$1,new cljs.core.Keyword(null,"layout-width","layout-width",523260922));
var max_fade_percentage = cljs.core.get.call(null,map__19440__$1,new cljs.core.Keyword(null,"max-fade-percentage","max-fade-percentage",1721596194));
var fade_percentage = (function (){var x__4214__auto__ = max_fade_percentage;
var y__4215__auto__ = ((layout_width + offset_x) / content_width);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
if((fade_percentage > 0.99)){
return 0.99;
} else {
return utils.number.naive_round.call(null,fade_percentage,(2));
}
});
quo2.components.tabs.tabs.masked_view_wrapper = (function quo2$components$tabs$tabs$masked_view_wrapper(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19580 = arguments.length;
var i__4737__auto___19581 = (0);
while(true){
if((i__4737__auto___19581 < len__4736__auto___19580)){
args__4742__auto__.push((arguments[i__4737__auto___19581]));

var G__19582 = (i__4737__auto___19581 + (1));
i__4737__auto___19581 = G__19582;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.tabs.tabs.masked_view_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.tabs.tabs.masked_view_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__19458,children){
var map__19460 = p__19458;
var map__19460__$1 = (((((!((map__19460 == null))))?(((((map__19460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19460):map__19460);
var fade_end_percentage = cljs.core.get.call(null,map__19460__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624));
var fade_end_QMARK_ = cljs.core.get.call(null,map__19460__$1,new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659));
if(cljs.core.truth_(fade_end_QMARK_)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.masked_view.masked_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mask-element","mask-element",-1569730996),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.linear_gradient.linear_gradient,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fade_end_percentage,(1)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null))], null)], null),children);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children);
}
}));

(quo2.components.tabs.tabs.masked_view_wrapper.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.tabs.tabs.masked_view_wrapper.cljs$lang$applyTo = (function (seq19446){
var G__19448 = cljs.core.first.call(null,seq19446);
var seq19446__$1 = cljs.core.next.call(null,seq19446);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19448,seq19446__$1);
}));

quo2.components.tabs.tabs.on_scroll_handler = (function quo2$components$tabs$tabs$on_scroll_handler(p__19490,e){
var map__19491 = p__19490;
var map__19491__$1 = (((((!((map__19491 == null))))?(((((map__19491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19491):map__19491);
var on_scroll = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677));
var fading = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"fading","fading",1798564850));
var fade_end_percentage = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624));
var fade_end_QMARK_ = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659));
if(cljs.core.truth_(fade_end_QMARK_)){
var offset_x_19583 = (function (){var target_obj_19500 = e;
var _STAR_runtime_state_STAR__orig_val__19505 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19506 = oops.state.prepare_state.call(null,target_obj_19500,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19506);

try{var next_obj_19501 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19500,(0),"nativeEvent",true,true,false))?(target_obj_19500["nativeEvent"]):null);
var next_obj_19502 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19501,(0),"contentOffset",true,true,false))?(next_obj_19501["contentOffset"]):null);
var next_obj_19503 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19502,(0),"x",true,true,false))?(next_obj_19502["x"]):null);
return next_obj_19503;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19505);
}})();
var content_width_19584 = (function (){var target_obj_19509 = e;
var _STAR_runtime_state_STAR__orig_val__19522 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19523 = oops.state.prepare_state.call(null,target_obj_19509,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19523);

try{var next_obj_19514 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19509,(0),"nativeEvent",true,true,false))?(target_obj_19509["nativeEvent"]):null);
var next_obj_19515 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19514,(0),"contentSize",true,true,false))?(next_obj_19514["contentSize"]):null);
var next_obj_19516 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19515,(0),"width",true,true,false))?(next_obj_19515["width"]):null);
return next_obj_19516;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19522);
}})();
var layout_width_19585 = (function (){var target_obj_19528 = e;
var _STAR_runtime_state_STAR__orig_val__19533 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19534 = oops.state.prepare_state.call(null,target_obj_19528,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19534);

try{var next_obj_19530 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19528,(0),"nativeEvent",true,true,false))?(target_obj_19528["nativeEvent"]):null);
var next_obj_19531 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19530,(0),"layoutMeasurement",true,true,false))?(next_obj_19530["layoutMeasurement"]):null);
var next_obj_19532 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19531,(0),"width",true,true,false))?(next_obj_19531["width"]):null);
return next_obj_19532;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19533);
}})();
var new_percentage_19586 = quo2.components.tabs.tabs.calculate_fade_end_percentage.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),offset_x_19583,new cljs.core.Keyword(null,"content-width","content-width",702940455),content_width_19584,new cljs.core.Keyword(null,"layout-width","layout-width",523260922),layout_width_19585,new cljs.core.Keyword(null,"max-fade-percentage","max-fade-percentage",1721596194),fade_end_percentage], null));
if(cljs.core.not_EQ_.call(null,new_percentage_19586,cljs.core.get.call(null,cljs.core.deref.call(null,fading),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624)))){
cljs.core.swap_BANG_.call(null,fading,cljs.core.assoc,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),new_percentage_19586);
} else {
}
} else {
}

if(cljs.core.truth_(on_scroll)){
return on_scroll.call(null,e);
} else {
return null;
}
});
quo2.components.tabs.tabs.render_tab = (function quo2$components$tabs$tabs$render_tab(p__19543,p__19544,index){
var map__19545 = p__19543;
var map__19545__$1 = (((((!((map__19545 == null))))?(((((map__19545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19545):map__19545);
var active_tab_id = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var blur_QMARK_ = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var flat_list_ref = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"flat-list-ref","flat-list-ref",836010045));
var number_of_items = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"number-of-items","number-of-items",-889693644));
var on_change = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var scroll_on_press_QMARK_ = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842));
var size = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var style = cljs.core.get.call(null,map__19545__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var map__19546 = p__19544;
var map__19546__$1 = (((((!((map__19546 == null))))?(((((map__19546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19546):map__19546);
var id = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var notification_dot_QMARK_ = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"notification-dot?","notification-dot?",2136428475));
var accessibility_label = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),((cljs.core._EQ_.call(null,size,quo2.components.tabs.tabs.default_tab_size))?(12):(8)),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),((cljs.core._EQ_.call(null,index,(number_of_items - (1))))?new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053).cljs$core$IFn$_invoke$arity$1(style):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tab.view.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"notification-dot?","notification-dot?",2136428475),notification_dot_QMARK_,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,active_tab_id)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (id__$1){
cljs.core.reset_BANG_.call(null,active_tab_id,id__$1);

if(cljs.core.truth_((function (){var and__4115__auto__ = scroll_on_press_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,flat_list_ref);
} else {
return and__4115__auto__;
}
})())){
cljs.core.deref.call(null,flat_list_ref).scrollToIndex(({"animated": true, "index": index, "viewPosition": 0.5}));
} else {
}

if(cljs.core.truth_(on_change)){
return on_change.call(null,id__$1);
} else {
return null;
}
})], null),label], null)], null);
});
/**
 *  Common options (for scrollable and non-scrollable tabs):
 * 
 *   - `blur?` Boolean passed down to `quo2.components.tabs.tab/tab`.
 *   - `data` Vector of tab items.
 *   - `on-change` Callback called after a tab is selected.
 *   - `size` 32/24
 *   - `style` Style map passed to View wrapping tabs or to the FlatList when tabs
 *  are scrollable.
 * 
 *   Options for scrollable tabs:
 *   - `fade-end-percentage` Percentage where fading starts relative to the total
 *  layout width of the `flat-list` data.
 *   - `fade-end?` When non-nil, causes the end of the scrollable view to fade out.
 *   - `on-scroll` Callback called on the on-scroll event of the FlatList. Only
 *  used when `scrollable?` is non-nil.
 *   - `scrollable?` When non-nil, use a scrollable flat-list to render tabs.
 *   - `scroll-on-press?` When non-nil, clicking on a tag centers it the middle
 *  (with animation enabled).
 *   
 */
quo2.components.tabs.tabs.tabs = (function quo2$components$tabs$tabs$tabs(p__19568){
var map__19569 = p__19568;
var map__19569__$1 = (((((!((map__19569 == null))))?(((((map__19569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19569):map__19569);
var default_active = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"default-active","default-active",467671365));
var fade_end_percentage = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),0.8);
var active_tab_id = reagent.core.atom.call(null,default_active);
var fading = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),fade_end_percentage], null));
var flat_list_ref = cljs.core.atom.call(null,null);
return (function (p__19571){
var map__19572 = p__19571;
var map__19572__$1 = (((((!((map__19572 == null))))?(((((map__19572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19572):map__19572);
var props = map__19572__$1;
var on_change = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var data = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var in_scroll_view_QMARK_ = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"in-scroll-view?","in-scroll-view?",-1589098366));
var scroll_on_press_QMARK_ = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842),false);
var blur_QMARK_ = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var on_scroll = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677));
var fade_end_QMARK_ = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),false);
var size = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"size","size",1098693007),quo2.components.tabs.tabs.default_tab_size);
var style = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var scrollable_QMARK_ = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),false);
var fade_end_percentage__$1 = cljs.core.get.call(null,map__19572__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),fade_end_percentage);
if(cljs.core.truth_(scrollable_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(- (quo2.components.tabs.tabs.unread_count_offset - (1)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tabs.masked_view_wrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),cljs.core.get.call(null,cljs.core.deref.call(null,fading),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624)),new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),fade_end_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(in_scroll_view_QMARK_)?react_native.gesture.flat_list:react_native.core.flat_list),cljs.core.merge.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"default-active","default-active",467671365),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842),new cljs.core.Keyword(null,"size","size",1098693007)),(cljs.core.truth_(scroll_on_press_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-scroll-index","initial-scroll-index",-553578860),utils.collection.first_index.call(null,(function (p1__19561_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_tab_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19561_SHARP_));
}),data)], null):null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"shows-horizontal-scroll-indicator","shows-horizontal-scroll-indicator",-727898649),new cljs.core.Keyword(null,"scroll-event-throttle","scroll-event-throttle",-961582487),new cljs.core.Keyword(null,"extra-data","extra-data",915012813),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"content-container-style","content-container-style",-26145133),new cljs.core.Keyword(null,"on-scroll-to-index-failed","on-scroll-to-index-failed",2067120894),new cljs.core.Keyword(null,"data","data",-232669377)],[true,cljs.core.partial.call(null,quo2.components.tabs.tabs.on_scroll_handler,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),fade_end_percentage__$1,new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),fade_end_QMARK_,new cljs.core.Keyword(null,"fading","fading",1798564850),fading,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),on_scroll], null)),cljs.core.partial.call(null,quo2.components.tabs.tabs.render_tab,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab_id,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"flat-list-ref","flat-list-ref",836010045),flat_list_ref,new cljs.core.Keyword(null,"number-of-items","number-of-items",-889693644),cljs.core.count.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842),scroll_on_press_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"style","style",-496642736),style], null)),(function (p1__19562_SHARP_){
return cljs.core.reset_BANG_.call(null,flat_list_ref,p1__19562_SHARP_);
}),false,(64),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tab_id)),style,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(quo2.components.tabs.tabs.unread_count_offset - (1))], null),cljs.core.identity,data]))], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)),cljs.core.map_indexed.call(null,(function (index,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tabs.render_tab,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_tab_id,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"number-of-items","number-of-items",-889693644),cljs.core.count.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"style","style",-496642736),style], null),item,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
}),data)], null);
}
});
});
Object.defineProperty(module.exports, "default_tab_size", { enumerable: false, get: function() { return quo2.components.tabs.tabs.default_tab_size; } });
Object.defineProperty(module.exports, "unread_count_offset", { enumerable: false, get: function() { return quo2.components.tabs.tabs.unread_count_offset; } });
Object.defineProperty(module.exports, "calculate_fade_end_percentage", { enumerable: false, get: function() { return quo2.components.tabs.tabs.calculate_fade_end_percentage; } });
Object.defineProperty(module.exports, "masked_view_wrapper", { enumerable: false, get: function() { return quo2.components.tabs.tabs.masked_view_wrapper; } });
Object.defineProperty(module.exports, "on_scroll_handler", { enumerable: false, get: function() { return quo2.components.tabs.tabs.on_scroll_handler; } });
Object.defineProperty(module.exports, "render_tab", { enumerable: false, get: function() { return quo2.components.tabs.tabs.render_tab; } });
Object.defineProperty(module.exports, "tabs", { enumerable: false, get: function() { return quo2.components.tabs.tabs.tabs; } });
//# sourceMappingURL=quo2.components.tabs.tabs.js.map
