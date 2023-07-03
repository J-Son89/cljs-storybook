var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.animated.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.typography.js");
require("./quo.react_native.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.text.js");

goog.provide('quo.components.text');
quo.components.text.text_style = (function quo$components$text$text_style(p__18081){
var map__18082 = p__18081;
var map__18082__$1 = (((((!((map__18082 == null))))?(((((map__18082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18082):map__18082);
var size = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var align = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var weight = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var monospace = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"monospace","monospace",2089559697));
var color = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.merge.call(null,(cljs.core.truth_(monospace)?quo.design_system.typography.monospace:(function (){var G__18086 = (function (){var or__4126__auto__ = weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"regular","regular",-1153375582);
}
})();
var G__18086__$1 = (((G__18086 instanceof cljs.core.Keyword))?G__18086.fqn:null);
switch (G__18086__$1) {
case "regular":
return quo.design_system.typography.font_regular;

break;
case "medium":
return quo.design_system.typography.font_medium;

break;
case "semi-bold":
return quo.design_system.typography.font_semi_bold;

break;
case "bold":
return quo.design_system.typography.font_bold;

break;
case "monospace":
return quo.design_system.typography.monospace;

break;
case "inherit":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18086__$1)].join('')));

}
})()),(function (){var G__18090 = (function (){var or__4126__auto__ = color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"main","main",-2117802661);
}
})();
var G__18090__$1 = (((G__18090 instanceof cljs.core.Keyword))?G__18090.fqn:null);
switch (G__18090__$1) {
case "main":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "secondary":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "secondary-inverse":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-03","text-03",462265760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "link":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-04","text-04",1924373595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "inverse":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-05","text-05",1203333556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "positive":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "negative":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "inherit":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18090__$1)].join('')));

}
})(),(function (){var G__18099 = (function (){var or__4126__auto__ = size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"base","base",185279322);
}
})();
var G__18099__$1 = (((G__18099 instanceof cljs.core.Keyword))?G__18099.fqn:null);
switch (G__18099__$1) {
case "tiny":
return quo.design_system.typography.tiny;

break;
case "x-small":
return quo.design_system.typography.x_small;

break;
case "small":
return quo.design_system.typography.small;

break;
case "base":
return quo.design_system.typography.base;

break;
case "large":
return quo.design_system.typography.large;

break;
case "x-large":
return quo.design_system.typography.x_large;

break;
case "xx-large":
return quo.design_system.typography.xx_large;

break;
case "inherit":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18099__$1)].join('')));

}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),(function (){var or__4126__auto__ = align;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"auto","auto",-566279492);
}
})()], null),style);
});
quo.components.text.text = (function quo$components$text$text(){
var this$ = reagent.core.current_component.call(null);
var props = reagent.core.props.call(null,this$);
var component = (cljs.core.truth_(new cljs.core.Keyword(null,"animated?","animated?",-1143981820).cljs$core$IFn$_invoke$arity$1(props))?quo.animated.text:quo.react_native.text);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.text.text_style.call(null,props)], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"animated?","animated?",-1143981820)))], null),reagent.core.children.call(null,this$));
});
Object.defineProperty(module.exports, "text_style", { enumerable: false, get: function() { return quo.components.text.text_style; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return quo.components.text.text; } });
//# sourceMappingURL=quo.components.text.js.map
