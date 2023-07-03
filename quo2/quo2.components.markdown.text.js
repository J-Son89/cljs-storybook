var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
require("./quo2.foundations.typography.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.markdown.text.js");

goog.provide('quo2.components.markdown.text');
quo2.components.markdown.text.text_style = (function quo2$components$markdown$text$text_style(p__16572){
var map__16573 = p__16572;
var map__16573__$1 = (((((!((map__16573 == null))))?(((((map__16573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16573):map__16573);
var size = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var align = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var weight = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var style = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.merge.call(null,(function (){var G__16577 = (function (){var or__4126__auto__ = weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"regular","regular",-1153375582);
}
})();
var G__16577__$1 = (((G__16577 instanceof cljs.core.Keyword))?G__16577.fqn:null);
switch (G__16577__$1) {
case "regular":
return quo2.foundations.typography.font_regular;

break;
case "medium":
return quo2.foundations.typography.font_medium;

break;
case "semi-bold":
return quo2.foundations.typography.font_semi_bold;

break;
case "bold":
return quo2.foundations.typography.font_bold;

break;
case "monospace":
return quo2.foundations.typography.monospace;

break;
case "code":
return quo2.foundations.typography.code;

break;
case "inherit":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16577__$1)].join('')));

}
})(),(function (){var G__16581 = (function (){var or__4126__auto__ = size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200);
}
})();
var G__16581__$1 = (((G__16581 instanceof cljs.core.Keyword))?G__16581.fqn:null);
switch (G__16581__$1) {
case "label":
return quo2.foundations.typography.label;

break;
case "paragraph-2":
return quo2.foundations.typography.paragraph_2;

break;
case "paragraph-1":
return quo2.foundations.typography.paragraph_1;

break;
case "heading-2":
return quo2.foundations.typography.heading_2;

break;
case "heading-1":
return quo2.foundations.typography.heading_1;

break;
case "inherit":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16581__$1)].join('')));

}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),(function (){var or__4126__auto__ = align;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"auto","auto",-566279492);
}
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(style))?style:cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,quo2.theme.get_theme.call(null),new cljs.core.Keyword(null,"dark","dark",1818973999)))?quo2.foundations.colors.white:quo2.foundations.colors.neutral_100))));
});
quo2.components.markdown.text.text = (function quo2$components$markdown$text$text(){
var this$ = reagent.core.current_component.call(null);
var props = reagent.core.props.call(null,this$);
var style = quo2.components.markdown.text.text_style.call(null,props);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.text,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"color","color",1011675173)))], null),reagent.core.children.call(null,this$));
});
Object.defineProperty(module.exports, "text_style", { enumerable: false, get: function() { return quo2.components.markdown.text.text_style; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return quo2.components.markdown.text.text; } });
//# sourceMappingURL=quo2.components.markdown.text.js.map
