var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo.animated.js");
require("./quo.components.button.view.js");
require("./quo.components.text.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.spacing.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.header.js");

goog.provide('quo.components.header');
quo.components.header.header_height = (56);
quo.components.header.header_wrapper_style = (function quo$components$header$header_wrapper_style(p__19009){
var map__19010 = p__19009;
var map__19010__$1 = (((((!((map__19010 == null))))?(((((map__19010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19010):map__19010);
var height = cljs.core.get.call(null,map__19010__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_bottom = cljs.core.get.call(null,map__19010__$1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415));
var background = cljs.core.get.call(null,map__19010__$1,new cljs.core.Keyword(null,"background","background",-863952629));
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"x-tiny","x-tiny",-522785408).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"height","height",1025178622),height], null),(cljs.core.truth_(background)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background], null):null),(cljs.core.truth_(border_bottom)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),(1),new cljs.core.Keyword(null,"border-bottom-color","border-bottom-color",-208763333),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null):null));
});
quo.components.header.absolute_fill = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null);
quo.components.header.content = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo.components.header.left = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null);
quo.components.header.right = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null);
quo.components.header.title_style = (function quo$components$header$title_style(p__19039,title_align){
var map__19040 = p__19039;
var map__19040__$1 = (((((!((map__19040 == null))))?(((((map__19040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19040):map__19040);
var left = cljs.core.get.call(null,map__19040__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__19040__$1,new cljs.core.Keyword(null,"right","right",-452581833));
return cljs.core.merge.call(null,quo.components.header.absolute_fill,(function (){var G__19042 = title_align;
var G__19042__$1 = (((G__19042 instanceof cljs.core.Keyword))?G__19042.fqn:null);
switch (G__19042__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(right)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"left","left",-399115937),(function (){var x__4214__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(left);
var y__4215__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),new cljs.core.Keyword(null,"right","right",-452581833),(function (){var x__4214__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(left);
var y__4215__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);

}
})());
});
quo.components.header.header_actions_style = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"x-tiny","x-tiny",-522785408).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal));
quo.components.header.header_action_placeholder = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing)], null);
quo.components.header.element = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo.components.header.header_action = (function quo$components$header$header_action(p__19050){
var map__19051 = p__19050;
var map__19051__$1 = (((((!((map__19051 == null))))?(((((map__19051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19051):map__19051);
var icon = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_press = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessibility_label = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.button.view.button,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null),(cljs.core.truth_(icon)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"icon","icon",1679606541)], null):(cljs.core.truth_(label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null):null)),(cljs.core.truth_(accessibility_label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null):null)),(cljs.core.truth_(icon)?icon:(cljs.core.truth_(label)?label:null))], null);
});
quo.components.header.header_actions = (function quo$components$header$header_actions(p__19054){
var map__19055 = p__19054;
var map__19055__$1 = (((((!((map__19055 == null))))?(((((map__19055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19055):map__19055);
var accessories = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword(null,"accessories","accessories",1599367847));
var component = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.element], null),((cljs.core.seq.call(null,accessories))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.header_actions_style], null)], null),cljs.core.map.call(null,quo.components.header.header_action,accessories)):(cljs.core.truth_(component)?component:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.header_action_placeholder], null)], null)
))], null);
});
quo.components.header.header_title = (function quo$components$header$header_title(p__19057){
var map__19058 = p__19057;
var map__19058__$1 = (((((!((map__19058 == null))))?(((((map__19058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19058):map__19058);
var title = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var component = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var title_align = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"title-align","title-align",27439503));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(component)?component:(cljs.core.truth_((function (){var and__4115__auto__ = title;
if(cljs.core.truth_(and__4115__auto__)){
return subtitle;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),subtitle], null)], null):(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(0),new cljs.core.Keyword(null,"align","align",1964212802),title_align,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),title], null):null)))], null);
});
quo.components.header.header = (function quo$components$header$header(p__19065){
var map__19066 = p__19065;
var map__19066__$1 = (((((!((map__19066 == null))))?(((((map__19066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19066):map__19066);
var left_width = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"left-width","left-width",-726874108));
var right_width = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"right-width","right-width",1434783909));
var layout = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4126__auto__ = left_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (8);
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),quo.components.header.header_height], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4126__auto__ = right_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (8);
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),quo.components.header.header_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo.components.header.header_height], null)], null));
var handle_layout = (function (el,get_layout){
return (function (evt){
var width = (function (){var target_obj_19073 = evt;
var _STAR_runtime_state_STAR__orig_val__19078 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19079 = oops.state.prepare_state.call(null,target_obj_19073,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19079);

try{var next_obj_19074 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19073,(0),"nativeEvent",true,true,false))?(target_obj_19073["nativeEvent"]):null);
var next_obj_19075 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19074,(0),"layout",true,true,false))?(next_obj_19074["layout"]):null);
var next_obj_19076 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19075,(0),"width",true,true,false))?(next_obj_19075["width"]):null);
return next_obj_19076;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19078);
}})();
var height = (function (){var target_obj_19080 = evt;
var _STAR_runtime_state_STAR__orig_val__19085 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19086 = oops.state.prepare_state.call(null,target_obj_19080,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19086);

try{var next_obj_19081 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19080,(0),"nativeEvent",true,true,false))?(target_obj_19080["nativeEvent"]):null);
var next_obj_19082 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19081,(0),"layout",true,true,false))?(next_obj_19081["layout"]):null);
var next_obj_19083 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19082,(0),"height",true,true,false))?(next_obj_19082["height"]):null);
return next_obj_19083;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19085);
}})();
if(cljs.core.truth_(get_layout)){
get_layout.call(null,el,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
} else {
}

return cljs.core.swap_BANG_.call(null,layout,cljs.core.assoc,el,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
});
});
return (function (p__19089){
var map__19090 = p__19089;
var map__19090__$1 = (((((!((map__19090 == null))))?(((((map__19090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19090):map__19090);
var left_accessories = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"left-accessories","left-accessories",-1635687301));
var left_component = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"left-component","left-component",2021891839));
var border_bottom = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),true);
var insets = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"insets","insets",596585768));
var background = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var right_accessories = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"right-accessories","right-accessories",402598668));
var title = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"title","title",636505583));
var title_align = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"title-align","title-align",27439503),new cljs.core.Keyword(null,"center","center",-748944368));
var style = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var get_layout = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"get-layout","get-layout",-718965838));
var subtitle = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var title_component = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"title-component","title-component",-1035418730));
var right_component = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"right-component","right-component",547619927));
var status_bar_height = cljs.core.get.call(null,insets,new cljs.core.Keyword(null,"top","top",-1856271961),(0));
var height = (quo.components.header.header_height + status_bar_height);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.animated.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.header_wrapper_style.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"background","background",-863952629),background,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_bottom], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338),new cljs.core.Keyword(null,"height","height",1025178622),status_bar_height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),quo.components.header.header_height], null),style),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.absolute_fill,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.content,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.left,new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),handle_layout(new cljs.core.Keyword(null,"left","left",-399115937),get_layout),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.header.header_actions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessories","accessories",1599367847),left_accessories,new cljs.core.Keyword(null,"component","component",1555936782),left_component], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.title_style.call(null,cljs.core.deref.call(null,layout),title_align),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),handle_layout(new cljs.core.Keyword(null,"title","title",636505583),get_layout),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.header.header_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),subtitle,new cljs.core.Keyword(null,"title-align","title-align",27439503),title_align,new cljs.core.Keyword(null,"component","component",1555936782),title_component], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.header.right,new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),handle_layout(new cljs.core.Keyword(null,"right","right",-452581833),get_layout),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.header.header_actions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessories","accessories",1599367847),right_accessories,new cljs.core.Keyword(null,"component","component",1555936782),right_component], null)], null)], null)], null)], null)], null)], null);
});
});
Object.defineProperty(module.exports, "header_action", { enumerable: false, get: function() { return quo.components.header.header_action; } });
Object.defineProperty(module.exports, "header_title", { enumerable: false, get: function() { return quo.components.header.header_title; } });
Object.defineProperty(module.exports, "title_style", { enumerable: false, get: function() { return quo.components.header.title_style; } });
Object.defineProperty(module.exports, "header_height", { enumerable: false, get: function() { return quo.components.header.header_height; } });
Object.defineProperty(module.exports, "left", { enumerable: false, get: function() { return quo.components.header.left; } });
Object.defineProperty(module.exports, "header_actions", { enumerable: false, get: function() { return quo.components.header.header_actions; } });
Object.defineProperty(module.exports, "element", { enumerable: false, get: function() { return quo.components.header.element; } });
Object.defineProperty(module.exports, "content", { enumerable: false, get: function() { return quo.components.header.content; } });
Object.defineProperty(module.exports, "header", { enumerable: false, get: function() { return quo.components.header.header; } });
Object.defineProperty(module.exports, "absolute_fill", { enumerable: false, get: function() { return quo.components.header.absolute_fill; } });
Object.defineProperty(module.exports, "header_wrapper_style", { enumerable: false, get: function() { return quo.components.header.header_wrapper_style; } });
Object.defineProperty(module.exports, "header_action_placeholder", { enumerable: false, get: function() { return quo.components.header.header_action_placeholder; } });
Object.defineProperty(module.exports, "right", { enumerable: false, get: function() { return quo.components.header.right; } });
Object.defineProperty(module.exports, "header_actions_style", { enumerable: false, get: function() { return quo.components.header.header_actions_style; } });
//# sourceMappingURL=quo.components.header.js.map
