var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.section_list.js");

goog.provide('react_native.section_list');
react_native.section_list.section_list_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.SectionList);
react_native.section_list.memo_wrap_render_fn = cljs.core.memoize.call(null,(function (f,render_data){
return (function (data){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,data.item,data.index,data.separators,render_data], null));
});
}));
react_native.section_list.wrap_render_section_header_fn = (function react_native$section_list$wrap_render_section_header_fn(f){
return (function (data){
var section = data.section;
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),section.title,new cljs.core.Keyword(null,"data","data",-232669377),section.data], null)], null));
});
});
react_native.section_list.wrap_per_section_render_fn = (function react_native$section_list$wrap_per_section_render_fn(props){
return cljs.core.update.call(null,(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"render-data","render-data",-1989310708)),new cljs.core.Keyword(null,"renderItem","renderItem",2115239233),react_native.section_list.memo_wrap_render_fn(f,new cljs.core.Keyword(null,"render-data","render-data",-1989310708).cljs$core$IFn$_invoke$arity$1(props)));
} else {
return props;
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.to_array);
});
/**
 * A wrapper for SectionList.
 * To render something on empty sections, use renderSectionFooter and conditionaly
 * render on empty data
 * See https://facebook.github.io/react-native/docs/sectionlist.html
 */
react_native.section_list.section_list = (function react_native$section_list$section_list(p__16006){
var map__16007 = p__16006;
var map__16007__$1 = (((((!((map__16007 == null))))?(((((map__16007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16007):map__16007);
var props = map__16007__$1;
var sections = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var render_section_header_fn = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"render-section-header-fn","render-section-header-fn",279306756));
var render_section_footer_fn = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"render-section-footer-fn","render-section-footer-fn",452135122));
var style = cljs.core.get.call(null,map__16007__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.section_list.section_list_class,cljs.core.merge.call(null,react_native.flat_list.base_list_props.call(null,props),props,(cljs.core.truth_(render_section_footer_fn)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderSectionFooter","renderSectionFooter",1776215046),react_native.section_list.wrap_render_section_header_fn.call(null,render_section_footer_fn)], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sections","sections",-886710106),cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,react_native.section_list.wrap_per_section_render_fn,sections)),new cljs.core.Keyword(null,"renderSectionHeader","renderSectionHeader",486456084),react_native.section_list.wrap_render_section_header_fn.call(null,render_section_header_fn),new cljs.core.Keyword(null,"style","style",-496642736),style], null))], null);
});
Object.defineProperty(module.exports, "section_list_class", { enumerable: false, get: function() { return react_native.section_list.section_list_class; } });
Object.defineProperty(module.exports, "memo_wrap_render_fn", { enumerable: false, get: function() { return react_native.section_list.memo_wrap_render_fn; } });
Object.defineProperty(module.exports, "wrap_render_section_header_fn", { enumerable: false, get: function() { return react_native.section_list.wrap_render_section_header_fn; } });
Object.defineProperty(module.exports, "wrap_per_section_render_fn", { enumerable: false, get: function() { return react_native.section_list.wrap_per_section_render_fn; } });
Object.defineProperty(module.exports, "section_list", { enumerable: false, get: function() { return react_native.section_list.section_list; } });
//# sourceMappingURL=react_native.section_list.js.map
