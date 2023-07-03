var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
require("./oops.core.js");
require("./quo2.components.tags.tag.js");
require("./utils.number.js");
require("./react_native.core.js");
require("./react_native.masked_view.js");
require("./react_native.linear_gradient.js");
require("./utils.collection.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.tags.js");

goog.provide('quo2.components.tags.tags');
quo2.components.tags.tags.default_tab_size = (32);
quo2.components.tags.tags.calculate_fade_end_percentage = (function quo2$components$tags$tags$calculate_fade_end_percentage(p__19357){
var map__19358 = p__19357;
var map__19358__$1 = (((((!((map__19358 == null))))?(((((map__19358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19358):map__19358);
var offset_x = cljs.core.get.call(null,map__19358__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var content_width = cljs.core.get.call(null,map__19358__$1,new cljs.core.Keyword(null,"content-width","content-width",702940455));
var layout_width = cljs.core.get.call(null,map__19358__$1,new cljs.core.Keyword(null,"layout-width","layout-width",523260922));
var max_fade_percentage = cljs.core.get.call(null,map__19358__$1,new cljs.core.Keyword(null,"max-fade-percentage","max-fade-percentage",1721596194));
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
/**
 * Usage:
 * {:type             :icon/:emoji/:label
 *  :component        tag/tab
 *  :size             32/24
 *  :on-press         fn
 *  :blurred?         true/false
 *  :labelled?        true/false
 *  :disabled?        true/false
 *  :scroll-on-press? true
 *  :scrollable?      false
 *  :fade-end?        true
 *  :on-change        fn
 *  :default-active   tag-id
 *  :data             [{:id :label "" :resource "url"}
 *                     {:id :label "" :resource "url"}]}
 *   Opts:
 * - `component` this is to determine which component is to be rendered since the
 *               logic in this view is shared between tab and tag component
 * - `blurred`   boolean: use to determine border color if the background is blurred
 * - `type`      can be icon or emoji with or without a tag label
 * - `labelled`  boolean: is true if tag has label else false
 * - `size` number
 * - `scroll-on-press?` When non-nil, clicking on a tag centers it the middle
 *   (with animation enabled).
 * - `fade-end?` When non-nil, causes the end of the scrollable view to fade out.
 * - `fade-end-percentage` Percentage where fading starts relative to the total
 *   layout width of the `flat-list` data.
 */
quo2.components.tags.tags.tags = (function quo2$components$tags$tags$tags(p__19385){
var map__19386 = p__19385;
var map__19386__$1 = (((((!((map__19386 == null))))?(((((map__19386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19386):map__19386);
var default_active = cljs.core.get.call(null,map__19386__$1,new cljs.core.Keyword(null,"default-active","default-active",467671365));
var fade_end_percentage = cljs.core.get.call(null,map__19386__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),0.8);
var active_tab_id = reagent.core.atom.call(null,default_active);
var fading = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),fade_end_percentage], null));
var flat_list_ref = cljs.core.atom.call(null,null);
return (function (p__19390){
var map__19392 = p__19390;
var map__19392__$1 = (((((!((map__19392 == null))))?(((((map__19392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19392):map__19392);
var props = map__19392__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var data = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var scroll_on_press_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842),false);
var on_scroll = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677));
var fade_end_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),false);
var icon_color = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var scroll_event_throttle = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"scroll-event-throttle","scroll-event-throttle",-961582487),(64));
var blurred_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"blurred?","blurred?",-53220885));
var type = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"size","size",1098693007),quo2.components.tags.tags.default_tab_size);
var labelled_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908));
var scrollable_QMARK_ = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"scrollable?","scrollable?",1366456374),false);
var fade_end_percentage__$1 = cljs.core.get.call(null,map__19392__$1,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),fade_end_percentage);
var maybe_mask_wrapper = (cljs.core.truth_(fade_end_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.masked_view.masked_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mask-element","mask-element",-1569730996),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.linear_gradient.linear_gradient,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.deref.call(null,fading),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624)),(1)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null))], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null));
if(cljs.core.truth_(scrollable_QMARK_)){
return cljs.core.conj.call(null,maybe_mask_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.flat_list,cljs.core.merge.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"default-active","default-active",467671365),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),new cljs.core.Keyword(null,"fade-end?","fade-end?",-1928269659),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"scroll-on-press?","scroll-on-press?",1951771842),new cljs.core.Keyword(null,"size","size",1098693007)),(cljs.core.truth_(scroll_on_press_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-scroll-index","initial-scroll-index",-553578860),utils.collection.first_index.call(null,(function (p1__19379_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,active_tab_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19379_SHARP_));
}),data)], null):null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"shows-horizontal-scroll-indicator","shows-horizontal-scroll-indicator",-727898649),new cljs.core.Keyword(null,"scroll-event-throttle","scroll-event-throttle",-961582487),new cljs.core.Keyword(null,"extra-data","extra-data",915012813),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"data","data",-232669377)],[true,(function (e){
if(cljs.core.truth_(fade_end_QMARK_)){
var offset_x_19549 = (function (){var target_obj_19413 = e;
var _STAR_runtime_state_STAR__orig_val__19419 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19420 = oops.state.prepare_state.call(null,target_obj_19413,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19420);

try{var next_obj_19414 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19413,(0),"nativeEvent",true,true,false))?(target_obj_19413["nativeEvent"]):null);
var next_obj_19415 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19414,(0),"contentOffset",true,true,false))?(next_obj_19414["contentOffset"]):null);
var next_obj_19417 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19415,(0),"x",true,true,false))?(next_obj_19415["x"]):null);
return next_obj_19417;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19419);
}})();
var content_width_19550 = (function (){var target_obj_19426 = e;
var _STAR_runtime_state_STAR__orig_val__19434 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19435 = oops.state.prepare_state.call(null,target_obj_19426,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19435);

try{var next_obj_19428 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19426,(0),"nativeEvent",true,true,false))?(target_obj_19426["nativeEvent"]):null);
var next_obj_19429 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19428,(0),"contentSize",true,true,false))?(next_obj_19428["contentSize"]):null);
var next_obj_19430 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19429,(0),"width",true,true,false))?(next_obj_19429["width"]):null);
return next_obj_19430;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19434);
}})();
var layout_width_19551 = (function (){var target_obj_19453 = e;
var _STAR_runtime_state_STAR__orig_val__19462 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19463 = oops.state.prepare_state.call(null,target_obj_19453,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19463);

try{var next_obj_19455 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19453,(0),"nativeEvent",true,true,false))?(target_obj_19453["nativeEvent"]):null);
var next_obj_19456 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19455,(0),"layoutMeasurement",true,true,false))?(next_obj_19455["layoutMeasurement"]):null);
var next_obj_19459 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19456,(0),"width",true,true,false))?(next_obj_19456["width"]):null);
return next_obj_19459;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19462);
}})();
var new_percentage_19552 = quo2.components.tags.tags.calculate_fade_end_percentage.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),offset_x_19549,new cljs.core.Keyword(null,"content-width","content-width",702940455),content_width_19550,new cljs.core.Keyword(null,"layout-width","layout-width",523260922),layout_width_19551,new cljs.core.Keyword(null,"max-fade-percentage","max-fade-percentage",1721596194),fade_end_percentage__$1], null));
if(cljs.core.not_EQ_.call(null,new_percentage_19552,cljs.core.get.call(null,cljs.core.deref.call(null,fading),new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624)))){
cljs.core.swap_BANG_.call(null,fading,cljs.core.assoc,new cljs.core.Keyword(null,"fade-end-percentage","fade-end-percentage",41129624),new_percentage_19552);
} else {
}
} else {
}

if(cljs.core.truth_(on_scroll)){
return on_scroll.call(null,e);
} else {
return null;
}
}),(function (p__19476,index){
var map__19477 = p__19476;
var map__19477__$1 = (((((!((map__19477 == null))))?(((((map__19477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19477):map__19477);
var id = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var resource = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),((cljs.core._EQ_.call(null,size,quo2.components.tags.tags.default_tab_size))?(12):(8)),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),((cljs.core._EQ_.call(null,index,(cljs.core.count.call(null,data) - (1))))?cljs.core.get_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053)], null)):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.tag.tag,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"blurred?","blurred?",-53220885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[(function (id__$1){
cljs.core.reset_BANG_.call(null,active_tab_id,id__$1);

if(cljs.core.truth_(scroll_on_press_QMARK_)){
cljs.core.deref.call(null,flat_list_ref).scrollToIndex(({"animated": true, "index": index, "viewPosition": 0.5}));
} else {
}

if(cljs.core.truth_(on_change)){
return on_change.call(null,id__$1);
} else {
return null;
}
}),icon_color,blurred_QMARK_,type,size,cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,active_tab_id)),labelled_QMARK_,(cljs.core.truth_(labelled_QMARK_)?label:((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?label:null)),id,resource,disabled_QMARK_])], null)], null);
}),(function (p1__19380_SHARP_){
return cljs.core.reset_BANG_.call(null,flat_list_ref,p1__19380_SHARP_);
}),false,scroll_event_throttle,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_tab_id)),cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"id","id",-1388402092)),data]))], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__4529__auto__ = (function quo2$components$tags$tags$tags_$_iter__19518(s__19519){
return (new cljs.core.LazySeq(null,(function (){
var s__19519__$1 = s__19519;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__19519__$1);
if(temp__5735__auto__){
var s__19519__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19519__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19519__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19521 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19520 = (0);
while(true){
if((i__19520 < size__4528__auto__)){
var map__19527 = cljs.core._nth(c__4527__auto__,i__19520);
var map__19527__$1 = (((((!((map__19527 == null))))?(((((map__19527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19527):map__19527);
var id = cljs.core.get.call(null,map__19527__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__19527__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var resource = cljs.core.get.call(null,map__19527__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
cljs.core.chunk_append.call(null,b__19521,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.tag.tag,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"blurred?","blurred?",-53220885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[((function (i__19520,map__19527,map__19527__$1,id,label,resource,c__4527__auto__,size__4528__auto__,b__19521,s__19519__$2,temp__5735__auto__,maybe_mask_wrapper,map__19392,map__19392__$1,props,disabled_QMARK_,on_change,data,scroll_on_press_QMARK_,on_scroll,fade_end_QMARK_,icon_color,scroll_event_throttle,blurred_QMARK_,type,size,labelled_QMARK_,scrollable_QMARK_,fade_end_percentage__$1,active_tab_id,fading,flat_list_ref,map__19386,map__19386__$1,default_active,fade_end_percentage){
return (function (p1__19383_SHARP_){
cljs.core.reset_BANG_.call(null,active_tab_id,p1__19383_SHARP_);

if(cljs.core.truth_(on_change)){
return on_change.call(null,p1__19383_SHARP_);
} else {
return null;
}
});})(i__19520,map__19527,map__19527__$1,id,label,resource,c__4527__auto__,size__4528__auto__,b__19521,s__19519__$2,temp__5735__auto__,maybe_mask_wrapper,map__19392,map__19392__$1,props,disabled_QMARK_,on_change,data,scroll_on_press_QMARK_,on_scroll,fade_end_QMARK_,icon_color,scroll_event_throttle,blurred_QMARK_,type,size,labelled_QMARK_,scrollable_QMARK_,fade_end_percentage__$1,active_tab_id,fading,flat_list_ref,map__19386,map__19386__$1,default_active,fade_end_percentage))
,icon_color,blurred_QMARK_,type,size,cljs.core._EQ_.call(null,id,active_tab_id),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?true:labelled_QMARK_),(cljs.core.truth_(labelled_QMARK_)?label:((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?label:null)),id,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"icon","icon",1679606541)))?new cljs.core.Keyword("i","placeholder","i/placeholder",-104873200):resource),disabled_QMARK_]))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19574 = (i__19520 + (1));
i__19520 = G__19574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19521),quo2$components$tags$tags$tags_$_iter__19518.call(null,cljs.core.chunk_rest.call(null,s__19519__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19521),null);
}
} else {
var map__19536 = cljs.core.first.call(null,s__19519__$2);
var map__19536__$1 = (((((!((map__19536 == null))))?(((((map__19536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19536):map__19536);
var id = cljs.core.get.call(null,map__19536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.call(null,map__19536__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var resource = cljs.core.get.call(null,map__19536__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.tag.tag,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"blurred?","blurred?",-53220885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[((function (map__19536,map__19536__$1,id,label,resource,s__19519__$2,temp__5735__auto__,maybe_mask_wrapper,map__19392,map__19392__$1,props,disabled_QMARK_,on_change,data,scroll_on_press_QMARK_,on_scroll,fade_end_QMARK_,icon_color,scroll_event_throttle,blurred_QMARK_,type,size,labelled_QMARK_,scrollable_QMARK_,fade_end_percentage__$1,active_tab_id,fading,flat_list_ref,map__19386,map__19386__$1,default_active,fade_end_percentage){
return (function (p1__19383_SHARP_){
cljs.core.reset_BANG_.call(null,active_tab_id,p1__19383_SHARP_);

if(cljs.core.truth_(on_change)){
return on_change.call(null,p1__19383_SHARP_);
} else {
return null;
}
});})(map__19536,map__19536__$1,id,label,resource,s__19519__$2,temp__5735__auto__,maybe_mask_wrapper,map__19392,map__19392__$1,props,disabled_QMARK_,on_change,data,scroll_on_press_QMARK_,on_scroll,fade_end_QMARK_,icon_color,scroll_event_throttle,blurred_QMARK_,type,size,labelled_QMARK_,scrollable_QMARK_,fade_end_percentage__$1,active_tab_id,fading,flat_list_ref,map__19386,map__19386__$1,default_active,fade_end_percentage))
,icon_color,blurred_QMARK_,type,size,cljs.core._EQ_.call(null,id,active_tab_id),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?true:labelled_QMARK_),(cljs.core.truth_(labelled_QMARK_)?label:((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?label:null)),id,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"icon","icon",1679606541)))?new cljs.core.Keyword("i","placeholder","i/placeholder",-104873200):resource),disabled_QMARK_]))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),quo2$components$tags$tags$tags_$_iter__19518.call(null,cljs.core.rest.call(null,s__19519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(data);
})()], null);
}
});
});
Object.defineProperty(module.exports, "default_tab_size", { enumerable: false, get: function() { return quo2.components.tags.tags.default_tab_size; } });
Object.defineProperty(module.exports, "calculate_fade_end_percentage", { enumerable: false, get: function() { return quo2.components.tags.tags.calculate_fade_end_percentage; } });
Object.defineProperty(module.exports, "tags", { enumerable: false, get: function() { return quo2.components.tags.tags.tags; } });
//# sourceMappingURL=quo2.components.tags.tags.js.map
