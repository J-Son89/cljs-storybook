var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.selectors.selectors.style.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.selectors.selectors.view.js");

goog.provide('quo2.components.selectors.selectors.view');
quo2.components.selectors.selectors.view.handle_press = (function quo2$components$selectors$selectors$view$handle_press(on_change,checked_atom,checked_QMARK_){
if(cljs.core.truth_(checked_atom)){
cljs.core.swap_BANG_.call(null,checked_atom,cljs.core.not);
} else {
}

if(cljs.core.truth_(on_change)){
return on_change.call(null,cljs.core.not(checked_QMARK_));
} else {
return null;
}
});
quo2.components.selectors.selectors.view.selector = (function quo2$components$selectors$selectors$view$selector(p__17337){
var map__17338 = p__17337;
var map__17338__$1 = (((((!((map__17338 == null))))?(((((map__17338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17338):map__17338);
var default_checked_QMARK_ = cljs.core.get.call(null,map__17338__$1,new cljs.core.Keyword(null,"default-checked?","default-checked?",1949214712));
var checked_QMARK_ = cljs.core.get.call(null,map__17338__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var controlled_component_QMARK_ = (!((checked_QMARK_ == null)));
var internal_checked_QMARK_ = ((controlled_component_QMARK_)?null:reagent.core.atom.call(null,(function (){var or__4126__auto__ = default_checked_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})()));
return (function (p__17340){
var map__17341 = p__17340;
var map__17341__$1 = (((((!((map__17341 == null))))?(((((map__17341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17341):map__17341);
var container_style = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var icon_style_fn = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"icon-style-fn","icon-style-fn",2041905177));
var disabled_QMARK_ = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var inner_style_fn = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"inner-style-fn","inner-style-fn",-413472128));
var checked_QMARK___$1 = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var blur_QMARK_ = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var label_prefix = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"label-prefix","label-prefix",186550318));
var customization_color = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"blue","blue",-622100620));
var outer_style_fn = cljs.core.get.call(null,map__17341__$1,new cljs.core.Keyword(null,"outer-style-fn","outer-style-fn",-88908301));
var actual_checked_QMARK_ = ((controlled_component_QMARK_)?checked_QMARK___$1:cljs.core.deref.call(null,internal_checked_QMARK_));
var accessibility_label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_prefix),"-",(cljs.core.truth_(actual_checked_QMARK_)?"on":"off")].join('');
var test_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_prefix),"-component"].join('');
var outer_styles = outer_style_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),actual_checked_QMARK_,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"container-style","container-style",-240535783),container_style,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,(cljs.core.truth_(disabled_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return quo2.components.selectors.selectors.view.handle_press.call(null,on_change,internal_checked_QMARK_,actual_checked_QMARK_);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),outer_styles,new cljs.core.Keyword(null,"needs-offscreen-alpha-compositing","needs-offscreen-alpha-compositing",-1997904369),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"accessibility-role","accessibility-role",1740020433),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"testID","testID",-1376182509),test_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inner_style_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),actual_checked_QMARK_,new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color], null))], null),(cljs.core.truth_((function (){var and__4115__auto__ = icon_style_fn;
if(cljs.core.truth_(and__4115__auto__)){
return actual_checked_QMARK_;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","check-small","i/check-small",-991647900),icon_style_fn.call(null,actual_checked_QMARK_,blur_QMARK_)], null):null)], null)], null)], null);
});
});
quo2.components.selectors.selectors.view.toggle = (function quo2$components$selectors$selectors$view$toggle(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.selector,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"label-prefix","label-prefix",186550318),"toggle",new cljs.core.Keyword(null,"outer-style-fn","outer-style-fn",-88908301),quo2.components.selectors.selectors.style.toggle,new cljs.core.Keyword(null,"inner-style-fn","inner-style-fn",-413472128),quo2.components.selectors.selectors.style.toggle_inner)], null);
});
quo2.components.selectors.selectors.view.radio = (function quo2$components$selectors$selectors$view$radio(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.selector,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"label-prefix","label-prefix",186550318),"radio",new cljs.core.Keyword(null,"outer-style-fn","outer-style-fn",-88908301),quo2.components.selectors.selectors.style.radio,new cljs.core.Keyword(null,"inner-style-fn","inner-style-fn",-413472128),quo2.components.selectors.selectors.style.radio_inner)], null);
});
quo2.components.selectors.selectors.view.checkbox = (function quo2$components$selectors$selectors$view$checkbox(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.selector,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"label-prefix","label-prefix",186550318),"checkbox",new cljs.core.Keyword(null,"outer-style-fn","outer-style-fn",-88908301),quo2.components.selectors.selectors.style.checkbox,new cljs.core.Keyword(null,"inner-style-fn","inner-style-fn",-413472128),quo2.components.selectors.selectors.style.common_checkbox_inner,new cljs.core.Keyword(null,"icon-style-fn","icon-style-fn",2041905177),quo2.components.selectors.selectors.style.checkbox_check)], null);
});
quo2.components.selectors.selectors.view.checkbox_prefill = (function quo2$components$selectors$selectors$view$checkbox_prefill(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.selector,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"label-prefix","label-prefix",186550318),"checkbox-prefill",new cljs.core.Keyword(null,"outer-style-fn","outer-style-fn",-88908301),quo2.components.selectors.selectors.style.checkbox_prefill,new cljs.core.Keyword(null,"inner-style-fn","inner-style-fn",-413472128),quo2.components.selectors.selectors.style.common_checkbox_inner,new cljs.core.Keyword(null,"icon-style-fn","icon-style-fn",2041905177),quo2.components.selectors.selectors.style.checkbox_prefill_check)], null);
});
Object.defineProperty(module.exports, "handle_press", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.handle_press; } });
Object.defineProperty(module.exports, "selector", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.selector; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.toggle; } });
Object.defineProperty(module.exports, "radio", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.radio; } });
Object.defineProperty(module.exports, "checkbox", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.checkbox; } });
Object.defineProperty(module.exports, "checkbox_prefill", { enumerable: false, get: function() { return quo2.components.selectors.selectors.view.checkbox_prefill; } });
//# sourceMappingURL=quo2.components.selectors.selectors.view.js.map
