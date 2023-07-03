var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
require("./react_native.core.js");
require("./utils.number.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.counter.counter.js");

goog.provide('quo2.components.counter.counter');
quo2.components.counter.counter.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"secondary","secondary",-669381460),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"grey","grey",1875582333),quo2.foundations.colors.neutral_10,new cljs.core.Keyword(null,"outline","outline",793464534),quo2.foundations.colors.neutral_20], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.primary_60,new cljs.core.Keyword(null,"secondary","secondary",-669381460),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"grey","grey",1875582333),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"outline","outline",793464534),quo2.foundations.colors.neutral_70], null)], null);
quo2.components.counter.counter.get_color = (function quo2$components$counter$counter$get_color(key){
return cljs.core.get_in.call(null,quo2.components.counter.counter.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.theme.get_theme.call(null),key], null));
});
quo2.components.counter.counter.counter = (function quo2$components$counter$counter$counter(p__16636,value){
var map__16637 = p__16636;
var map__16637__$1 = (((((!((map__16637 == null))))?(((((map__16637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16637):map__16637);
var type = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var override_text_color = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"override-text-color","override-text-color",-105749497));
var override_bg_color = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"override-bg-color","override-bg-color",1475783927));
var style = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var accessibility_label = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var max_value = cljs.core.get.call(null,map__16637__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168),(99));
var type__$1 = (function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var text_color = (function (){var or__4126__auto__ = override_text_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(((cljs.core._EQ_.call(null,quo2.theme.get_theme.call(null),new cljs.core.Keyword(null,"dark","dark",1818973999))) || (cljs.core._EQ_.call(null,type__$1,new cljs.core.Keyword(null,"default","default",-1987822328))))){
return quo2.foundations.colors.white;
} else {
return quo2.foundations.colors.neutral_100;
}
}
})();
var value__$1 = utils.number.parse_int.call(null,value);
var label = (((value__$1 > max_value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_value),"+"].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
var width = (function (){var G__16644 = ((label).length);
switch (G__16644) {
case (1):
return (16);

break;
case (2):
return (20);

break;
default:
return (28);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),new cljs.core.Keyword(null,"counter-component","counter-component",155922570),new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__16646 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(16)], null),style);
var G__16646__$1 = ((cljs.core._EQ_.call(null,type__$1,new cljs.core.Keyword(null,"outline","outline",793464534)))?cljs.core.merge.call(null,G__16646,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.counter.counter.get_color.call(null,type__$1)], null)):G__16646);
var G__16646__$2 = ((cljs.core.not_EQ_.call(null,type__$1,new cljs.core.Keyword(null,"outline","outline",793464534)))?cljs.core.assoc.call(null,G__16646__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var or__4126__auto__ = override_bg_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.components.counter.counter.get_color.call(null,type__$1);
}
})()):G__16646__$1);
if((value__$1 > max_value)){
return cljs.core.assoc.call(null,G__16646__$2,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),0.5);
} else {
return G__16646__$2;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),label], null)], null);
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.counter.counter.themes; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.counter.counter.get_color; } });
Object.defineProperty(module.exports, "counter", { enumerable: false, get: function() { return quo2.components.counter.counter.counter; } });
//# sourceMappingURL=quo2.components.counter.counter.js.map
