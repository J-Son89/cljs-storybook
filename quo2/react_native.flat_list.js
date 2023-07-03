var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.flat_list.js");

goog.provide('react_native.flat_list');
react_native.flat_list.react_native_flat_list = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.FlatList);
react_native.flat_list.wrap_render_fn = (function react_native$flat_list$wrap_render_fn(f,render_data){
return (function (data){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,data.item,data.index,data.separators,render_data,data.isActive,data.drag], null));
});
});
react_native.flat_list.wrap_on_drag_end_fn = (function react_native$flat_list$wrap_on_drag_end_fn(f){
return (function (data){
return f.call(null,data.from,data.to,data.data);
});
});
react_native.flat_list.wrap_key_fn = (function react_native$flat_list$wrap_key_fn(f){
return (function (data,index){
if(cljs.core.truth_(f)){
return f.call(null,data,index);
} else {
return null;
}
});
});
react_native.flat_list.base_list_props = (function react_native$flat_list$base_list_props(p__14471){
var map__14475 = p__14471;
var map__14475__$1 = (((((!((map__14475 == null))))?(((((map__14475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14475):map__14475);
var props = map__14475__$1;
var separator = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var data = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var render_fn = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var render_data = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"render-data","render-data",-1989310708));
var header = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var on_drag_end_fn = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"on-drag-end-fn","on-drag-end-fn",-1728242863));
var key_fn = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var empty_component = cljs.core.get.call(null,map__14475__$1,new cljs.core.Keyword(null,"empty-component","empty-component",349256468));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.to_array.call(null,data)], null),(cljs.core.truth_(key_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyExtractor","keyExtractor",-52348106),react_native.flat_list.wrap_key_fn.call(null,key_fn)], null):null),(cljs.core.truth_(render_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderItem","renderItem",2115239233),react_native.flat_list.wrap_render_fn.call(null,render_fn,render_data)], null):null),(cljs.core.truth_(separator)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ItemSeparatorComponent","ItemSeparatorComponent",1006101526),(function (){
return reagent.core.as_element.call(null,separator);
})], null):null),(cljs.core.truth_(empty_component)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ListEmptyComponent","ListEmptyComponent",-726187473),(function (){
return reagent.core.as_element.call(null,empty_component);
})], null):null),(cljs.core.truth_(header)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ListHeaderComponent","ListHeaderComponent",-1363711184),reagent.core.as_element.call(null,header)], null):null),(cljs.core.truth_(footer)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ListFooterComponent","ListFooterComponent",-56658253),reagent.core.as_element.call(null,footer)], null):null),(cljs.core.truth_(on_drag_end_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),react_native.flat_list.wrap_on_drag_end_fn.call(null,on_drag_end_fn)], null):null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"empty-component","empty-component",349256468),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"on-drag-end-fn","on-drag-end-fn",-1728242863)));
});
react_native.flat_list.flat_list = (function react_native$flat_list$flat_list(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.flat_list.react_native_flat_list,react_native.flat_list.base_list_props.call(null,props)], null);
});
Object.defineProperty(module.exports, "react_native_flat_list", { enumerable: false, get: function() { return react_native.flat_list.react_native_flat_list; } });
Object.defineProperty(module.exports, "wrap_render_fn", { enumerable: false, get: function() { return react_native.flat_list.wrap_render_fn; } });
Object.defineProperty(module.exports, "wrap_on_drag_end_fn", { enumerable: false, get: function() { return react_native.flat_list.wrap_on_drag_end_fn; } });
Object.defineProperty(module.exports, "wrap_key_fn", { enumerable: false, get: function() { return react_native.flat_list.wrap_key_fn; } });
Object.defineProperty(module.exports, "base_list_props", { enumerable: false, get: function() { return react_native.flat_list.base_list_props; } });
Object.defineProperty(module.exports, "flat_list", { enumerable: false, get: function() { return react_native.flat_list.flat_list; } });
//# sourceMappingURL=react_native.flat_list.js.map
