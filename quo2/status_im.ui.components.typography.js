var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.design_system.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.ui.components.typography.js");

goog.provide('status_im.ui.components.typography');
status_im.ui.components.typography.default_font_family = "Inter";
status_im.ui.components.typography.default_style = (function status_im$ui$components$typography$default_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),quo.design_system.colors.black,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15)], null);
});
status_im.ui.components.typography.typography_styles = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(22)], null),new cljs.core.Keyword(null,"title-bold","title-bold",979715964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(17)], null),new cljs.core.Keyword(null,"main-semibold","main-semibold",-1779279295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),new cljs.core.Keyword(null,"main-medium","main-medium",-1476372211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922)], null)], null);
status_im.ui.components.typography.get_style = (function status_im$ui$components$typography$get_style(p__17365){
var map__17366 = p__17365;
var map__17366__$1 = (((((!((map__17366 == null))))?(((((map__17366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17366):map__17366);
var style = map__17366__$1;
var typography = cljs.core.get.call(null,map__17366__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
if((((typography == null)) || (cljs.core.contains_QMARK_.call(null,status_im.ui.components.typography.typography_styles,typography)))){
} else {
throw (new Error("Assert failed: (or (nil? typography) (contains? typography-styles typography))"));
}

var map__17369 = cljs.core.merge.call(null,status_im.ui.components.typography.default_style.call(null),cljs.core.get.call(null,status_im.ui.components.typography.typography_styles,typography),cljs.core.dissoc.call(null,style,new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"nested?","nested?",1182745618)));
var map__17369__$1 = (((((!((map__17369 == null))))?(((((map__17369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17369):map__17369);
var style__$1 = map__17369__$1;
var font_weight = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_style = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,style__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874),[status_im.ui.components.typography.default_font_family,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17376 = font_weight;
switch (G__17376) {
case "400":
if(cljs.core._EQ_.call(null,font_style,new cljs.core.Keyword(null,"italic","italic",32599196))){
return null;
} else {
return "Regular";
}

break;
case "500":
return "Medium";

break;
case "600":
return "SemiBold";

break;
case "700":
return "Bold";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17376)].join('')));

}
})()),((cljs.core._EQ_.call(null,font_style,new cljs.core.Keyword(null,"italic","italic",32599196)))?"Italic":null)].join('')),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352));
});
status_im.ui.components.typography.get_nested_style = (function status_im$ui$components$typography$get_nested_style(p__17377){
var map__17378 = p__17377;
var map__17378__$1 = (((((!((map__17378 == null))))?(((((map__17378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17378):map__17378);
var style = map__17378__$1;
var typography = cljs.core.get.call(null,map__17378__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
if((((typography == null)) || (cljs.core.contains_QMARK_.call(null,status_im.ui.components.typography.typography_styles,typography)))){
} else {
throw (new Error("Assert failed: (or (nil? typography) (contains? typography-styles typography))"));
}

var map__17380 = cljs.core.merge.call(null,cljs.core.get.call(null,status_im.ui.components.typography.typography_styles,typography),cljs.core.dissoc.call(null,style,new cljs.core.Keyword(null,"typography","typography",-399568138)));
var map__17380__$1 = (((((!((map__17380 == null))))?(((((map__17380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17380):map__17380);
var style__$1 = map__17380__$1;
var font_weight = cljs.core.get.call(null,map__17380__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_style = cljs.core.get.call(null,map__17380__$1,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
var G__17382 = cljs.core.dissoc.call(null,style__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352));
if(cljs.core.truth_((function (){var or__4126__auto__ = font_weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return font_style;
}
})())){
return cljs.core.assoc.call(null,G__17382,new cljs.core.Keyword(null,"font-family","font-family",-667419874),[status_im.ui.components.typography.default_font_family,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17384 = font_weight;
switch (G__17384) {
case "500":
return "Medium";

break;
case "600":
return "SemiBold";

break;
case "700":
return "Bold";

break;
default:
if(cljs.core._EQ_.call(null,font_style,new cljs.core.Keyword(null,"italic","italic",32599196))){
return null;
} else {
return "Regular";
}

}
})()),((cljs.core._EQ_.call(null,font_style,new cljs.core.Keyword(null,"italic","italic",32599196)))?"Italic":null)].join(''));
} else {
return G__17382;
}
});
Object.defineProperty(module.exports, "default_font_family", { enumerable: false, get: function() { return status_im.ui.components.typography.default_font_family; } });
Object.defineProperty(module.exports, "default_style", { enumerable: false, get: function() { return status_im.ui.components.typography.default_style; } });
Object.defineProperty(module.exports, "typography_styles", { enumerable: false, get: function() { return status_im.ui.components.typography.typography_styles; } });
Object.defineProperty(module.exports, "get_style", { enumerable: false, get: function() { return status_im.ui.components.typography.get_style; } });
Object.defineProperty(module.exports, "get_nested_style", { enumerable: false, get: function() { return status_im.ui.components.typography.get_nested_style; } });
//# sourceMappingURL=status_im.ui.components.typography.js.map
