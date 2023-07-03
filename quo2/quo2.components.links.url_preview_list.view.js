var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.links.url_preview_list.style.js");
require("./quo2.components.links.url_preview.view.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.links.url_preview_list.view.js");

goog.provide('quo2.components.links.url_preview_list.view');
quo2.components.links.url_preview_list.view.use_scroll_to_last_item = (function quo2$components$links$url_preview_list$view$use_scroll_to_last_item(flat_list_ref,item_count,item_width){
return react_native.core.use_effect.call(null,(function (){
if((((item_count > (0))) && ((item_width > (0))))){
var timer_id = setTimeout((function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,flat_list_ref);
if(cljs.core.truth_(and__4115__auto__)){
return (item_count > (0));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.deref.call(null,flat_list_ref).scrollToOffset(({"animated": true, "offset": ((item_width + quo2.components.links.url_preview_list.style.url_preview_gap) * (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (item_count - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())}));
} else {
return null;
}
}),(25));
return (function (){
return clearTimeout(timer_id);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_count,item_width], null));
});
quo2.components.links.url_preview_list.view.separator = (function quo2$components$links$url_preview_list$view$separator(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.url_preview_list.style.url_preview_separator], null)], null);
});
quo2.components.links.url_preview_list.view.item_component = (function quo2$components$links$url_preview_list$view$item_component(p__17159,_,___$1,p__17160){
var map__17161 = p__17159;
var map__17161__$1 = (((((!((map__17161 == null))))?(((((map__17161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17161):map__17161);
var title = cljs.core.get.call(null,map__17161__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.call(null,map__17161__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loading_QMARK_ = cljs.core.get.call(null,map__17161__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var logo = cljs.core.get.call(null,map__17161__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var map__17163 = p__17160;
var map__17163__$1 = (((((!((map__17163 == null))))?(((((map__17163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17163):map__17163);
var width = cljs.core.get.call(null,map__17163__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_clear = cljs.core.get.call(null,map__17163__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
var loading_message = cljs.core.get.call(null,map__17163__$1,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595));
var container_style = cljs.core.get.call(null,map__17163__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.url_preview.view.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"logo","logo",1237980263),logo,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),loading_message,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),on_clear,new cljs.core.Keyword(null,"container-style","container-style",-240535783),cljs.core.merge.call(null,container_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null))], null)], null);
});
quo2.components.links.url_preview_list.view.f_view = (function quo2$components$links$url_preview_list$view$f_view(){
var flat_list_ref = cljs.core.atom.call(null,null);
return (function (p__17178){
var map__17179 = p__17178;
var map__17179__$1 = (((((!((map__17179 == null))))?(((((map__17179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17179):map__17179);
var data = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var key_fn = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var horizontal_spacing = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"horizontal-spacing","horizontal-spacing",987481522));
var on_clear = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
var loading_message = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595));
var container_style = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var container_style_item = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"container-style-item","container-style-item",-1442922115));
var preview_width = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"preview-width","preview-width",-711136639));
quo2.components.links.url_preview_list.view.use_scroll_to_last_item.call(null,flat_list_ref,cljs.core.count.call(null,data),preview_width);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),container_style,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"url-preview-list","url-preview-list",-112927011)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.gesture.flat_list,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"snap-to-interval","snap-to-interval",1993669696),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"shows-horizontal-scroll-indicator","shows-horizontal-scroll-indicator",-727898649),new cljs.core.Keyword(null,"render-data","render-data",-1989310708),new cljs.core.Keyword(null,"keyboard-should-persist-taps","keyboard-should-persist-taps",578336622),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"deceleration-rate","deceleration-rate",33822289),new cljs.core.Keyword(null,"content-container-style","content-container-style",-26145133),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"on-scroll-to-index-failed","on-scroll-to-index-failed",2067120894),new cljs.core.Keyword(null,"data","data",-232669377)],[(preview_width + quo2.components.links.url_preview_list.style.url_preview_gap),true,quo2.components.links.url_preview_list.view.item_component,(function (p1__17175_SHARP_){
return cljs.core.reset_BANG_.call(null,flat_list_ref,p1__17175_SHARP_);
}),false,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),preview_width,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),on_clear,new cljs.core.Keyword(null,"loading-message","loading-message",2009613595),loading_message,new cljs.core.Keyword(null,"container-style","container-style",-240535783),container_style_item], null),new cljs.core.Keyword(null,"always","always",-1772028770),key_fn,new cljs.core.Keyword(null,"fast","fast",-24391997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),horizontal_spacing], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.url_preview_list.view.separator], null),cljs.core.identity,data])], null)], null);
});
});
quo2.components.links.url_preview_list.view.view = (function quo2$components$links$url_preview_list$view$view(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.links.url_preview_list.view.f_view,props], null);
});
Object.defineProperty(module.exports, "use_scroll_to_last_item", { enumerable: false, get: function() { return quo2.components.links.url_preview_list.view.use_scroll_to_last_item; } });
Object.defineProperty(module.exports, "separator", { enumerable: false, get: function() { return quo2.components.links.url_preview_list.view.separator; } });
Object.defineProperty(module.exports, "item_component", { enumerable: false, get: function() { return quo2.components.links.url_preview_list.view.item_component; } });
Object.defineProperty(module.exports, "f_view", { enumerable: false, get: function() { return quo2.components.links.url_preview_list.view.f_view; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.links.url_preview_list.view.view; } });
//# sourceMappingURL=quo2.components.links.url_preview_list.view.js.map
