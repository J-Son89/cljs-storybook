var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.components.animated.pressable.js");
require("./quo.components.controls.view.js");
require("./quo.components.text.js");
require("./quo.components.tooltip.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.spacing.js");
require("./quo.haptic.js");
require("./quo.platform.js");
require("./quo.react_native.js");
require("./status_im.ui.components.icons.icons.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.list.item.js");

goog.provide('quo.components.list.item');
quo.components.list.item.themes = (function quo$components$list$item$themes(theme){
var G__19012 = theme;
var G__19012__$1 = (((G__19012 instanceof cljs.core.Keyword))?G__19012.fqn:null);
switch (G__19012__$1) {
case "main":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-04","icon-04",1050021132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"active-background","active-background",-920440291),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "accent":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-04","icon-04",1050021132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"active-background","active-background",-920440291),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-04","text-04",1924373595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "negative":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"negative-02","negative-02",1272870091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"active-background","active-background",-920440291),new cljs.core.Keyword(null,"negative-02","negative-02",1272870091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "positive":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"positive-02","positive-02",-1264647004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"active-background","active-background",-920440291),new cljs.core.Keyword(null,"positive-02","positive-02",-1264647004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "disabled":
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"active-background","active-background",-920440291),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19012__$1)].join('')));

}
});
quo.components.list.item.size__GT_icon_size = (function quo$components$list$item$size__GT_icon_size(size){
var G__19017 = size;
var G__19017__$1 = (((G__19017 instanceof cljs.core.Keyword))?G__19017.fqn:null);
switch (G__19017__$1) {
case "small":
return (36);

break;
default:
return (40);

}
});
quo.components.list.item.size__GT_container_size = (function quo$components$list$item$size__GT_container_size(size){
var G__19019 = size;
var G__19019__$1 = (((G__19019 instanceof cljs.core.Keyword))?G__19019.fqn:null);
switch (G__19019__$1) {
case "small":
return (52);

break;
default:
return (64);

}
});
quo.components.list.item.size__GT_single_title_size = (function quo$components$list$item$size__GT_single_title_size(size){
var G__19022 = size;
var G__19022__$1 = (((G__19022 instanceof cljs.core.Keyword))?G__19022.fqn:null);
switch (G__19022__$1) {
case "small":
return new cljs.core.Keyword(null,"base","base",185279322);

break;
default:
return new cljs.core.Keyword(null,"large","large",-196820544);

}
});
quo.components.list.item.container = (function quo$components$list$item$container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19108 = arguments.length;
var i__4737__auto___19109 = (0);
while(true){
if((i__4737__auto___19109 < len__4736__auto___19108)){
args__4742__auto__.push((arguments[i__4737__auto___19109]));

var G__19110 = (i__4737__auto___19109 + (1));
i__4737__auto___19109 = G__19110;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo.components.list.item.container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo.components.list.item.container.cljs$core$IFn$_invoke$arity$variadic = (function (p__19027,children){
var map__19028 = p__19027;
var map__19028__$1 = (((((!((map__19028 == null))))?(((((map__19028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19028):map__19028);
var size = cljs.core.get.call(null,map__19028__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var container_style = cljs.core.get.call(null,map__19028__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-height","min-height",398480837),quo.components.list.item.size__GT_container_size.call(null,size),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null),container_style)], null)], null),children);
}));

(quo.components.list.item.container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo.components.list.item.container.cljs$lang$applyTo = (function (seq19023){
var G__19024 = cljs.core.first.call(null,seq19023);
var seq19023__$1 = cljs.core.next.call(null,seq19023);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19024,seq19023__$1);
}));

quo.components.list.item.icon_column = (function quo$components$list$item$icon_column(p__19035){
var map__19036 = p__19035;
var map__19036__$1 = (((((!((map__19036 == null))))?(((((map__19036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19036):map__19036);
var icon = cljs.core.get.call(null,map__19036__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var icon_bg_color = cljs.core.get.call(null,map__19036__$1,new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796));
var icon_color = cljs.core.get.call(null,map__19036__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var size = cljs.core.get.call(null,map__19036__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var icon_container_style = cljs.core.get.call(null,map__19036__$1,new cljs.core.Keyword(null,"icon-container-style","icon-container-style",-1995494173));
if(cljs.core.truth_(icon)){
var icon_size = quo.components.list.item.size__GT_icon_size.call(null,size);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4126__auto__ = icon_container_style;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);
}
})()], null),((cljs.core.vector_QMARK_.call(null,icon))?icon:(((icon instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),icon_size,new cljs.core.Keyword(null,"height","height",1025178622),icon_size,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(icon_size / (2)),new cljs.core.Keyword(null,"background-color","background-color",570434026),icon_bg_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null)], null):null))], null);
} else {
return null;
}
});
quo.components.list.item.title_column = (function quo$components$list$item$title_column(p__19043){
var map__19044 = p__19043;
var map__19044__$1 = (((((!((map__19044 == null))))?(((((map__19044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19044):map__19044);
var subtitle_secondary = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"subtitle-secondary","subtitle-secondary",598633721));
var text_size = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"text-size","text-size",-945618309));
var title_text_weight = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"title-text-weight","title-text-weight",-1659203385));
var text_color = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var right_side_present_QMARK_ = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"right-side-present?","right-side-present?",168556746));
var title = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle_max_lines = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"subtitle-max-lines","subtitle-max-lines",1741836943));
var size = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var subtitle = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var title_accessibility_label = cljs.core.get.call(null,map__19044__$1,new cljs.core.Keyword(null,"title-accessibility-label","title-accessibility-label",-1286107881));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),(cljs.core.truth_(right_side_present_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)))], null),(cljs.core.truth_((function (){var and__4115__auto__ = title;
if(cljs.core.truth_(and__4115__auto__)){
return subtitle;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((typeof title === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(function (){var or__4126__auto__ = title_text_weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"medium","medium",-1864319384);
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),title_accessibility_label,new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"size","size",1098693007),text_size], null),title], null):title),((typeof subtitle_secondary === 'string')?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"56.5%"], null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),subtitle_max_lines,new cljs.core.Keyword(null,"size","size",1098693007),text_size], null),subtitle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"7%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),subtitle_max_lines,new cljs.core.Keyword(null,"size","size",1098693007),text_size], null),"\u2022"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"36.5%"], null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),subtitle_max_lines,new cljs.core.Keyword(null,"size","size",1098693007),text_size], null),subtitle_secondary], null)], null):((typeof subtitle === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),subtitle_max_lines,new cljs.core.Keyword(null,"size","size",1098693007),text_size], null),subtitle], null):subtitle))], null):(cljs.core.truth_(title)?((typeof title === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(function (){var or__4126__auto__ = title_text_weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"regular","regular",-1153375582);
}
})(),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"title-accessibility-label","title-accessibility-label",-1286107881),title_accessibility_label,new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__4126__auto__ = text_size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo.components.list.item.size__GT_single_title_size.call(null,size);
}
})()], null),title], null):title):null))], null);
});
quo.components.list.item.left_side = (function quo$components$list$item$left_side(props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(1),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(16),new cljs.core.Keyword(null,"align-items","align-items",-267946462),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"left-side-alignment","left-side-alignment",-1887619814).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.list.item.icon_column,props], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.list.item.title_column,props], null)], null);
});
quo.components.list.item.right_side = (function quo$components$list$item$right_side(p__19047){
var map__19048 = p__19047;
var map__19048__$1 = (((((!((map__19048 == null))))?(((((map__19048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19048):map__19048);
var chevron = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"chevron","chevron",1127691895));
var active = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var disabled = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessory = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"accessory","accessory",635495745));
var accessory_text = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"accessory-text","accessory-text",1203656373));
var accessory_style = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"accessory-style","accessory-style",559747756));
var animated_accessory_QMARK_ = cljs.core.get.call(null,map__19048__$1,new cljs.core.Keyword(null,"animated-accessory?","animated-accessory?",-2025833661));
if(cljs.core.truth_((function (){var or__4126__auto__ = chevron;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return accessory;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(16),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),(80)], null),accessory_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal)], null),(function (){var G__19053 = accessory;
var G__19053__$1 = (((G__19053 instanceof cljs.core.Keyword))?G__19053.fqn:null);
switch (G__19053__$1) {
case "radio":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.controls.view.radio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)], null);

break;
case "checkbox":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(animated_accessory_QMARK_)?quo.components.controls.view.animated_checkbox:quo.components.controls.view.checkbox),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)], null);

break;
case "switch":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.controls.view.switch$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null)], null);

break;
case "text":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),accessory_text], null);

break;
default:
return accessory;

}
})()], null),(cljs.core.truth_((function (){var and__4115__auto__ = chevron;
if(cljs.core.truth_(and__4115__auto__)){
return quo.platform.ios_QMARK_;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,new cljs.core.Keyword("main-icons","next","main-icons/next",1320652437),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.4,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null)], null)], null):null)], null);
} else {
return null;
}
});
quo.components.list.item.list_item = (function quo$components$list$item$list_item(p__19061){
var map__19062 = p__19061;
var map__19062__$1 = (((((!((map__19062 == null))))?(((((map__19062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19062):map__19062);
var container_style = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var subtitle_secondary = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"subtitle-secondary","subtitle-secondary",598633721));
var left_side_alignment = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"left-side-alignment","left-side-alignment",-1887619814));
var text_size = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"text-size","text-size",-945618309));
var on_long_press = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var on_press = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var accessory = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"accessory","accessory",635495745));
var animated_accessory_QMARK_ = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"animated-accessory?","animated-accessory?",-2025833661));
var icon_container_style = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"icon-container-style","icon-container-style",-1995494173));
var icon_color = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var disabled = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var title_text_weight = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"title-text-weight","title-text-weight",-1659203385));
var accessibility_label = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var background_color = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var haptic_type = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"haptic-type","haptic-type",-720743861),new cljs.core.Keyword(null,"selection","selection",975998651));
var animated = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"animated","animated",129318795),quo.platform.ios_QMARK_);
var accessory_style = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"accessory-style","accessory-style",559747756));
var icon_bg_color = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796));
var icon = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle_max_lines = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"subtitle-max-lines","subtitle-max-lines",1741836943),(1));
var size = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var theme = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"main","main",-2117802661));
var active_background_enabled = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"active-background-enabled","active-background-enabled",308636883),true);
var active = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var haptic_feedback = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"haptic-feedback","haptic-feedback",-384336204),true);
var accessory_text = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"accessory-text","accessory-text",1203656373));
var subtitle = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var chevron = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"chevron","chevron",1127691895));
var title_accessibility_label = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"title-accessibility-label","title-accessibility-label",-1286107881));
var error = cljs.core.get.call(null,map__19062__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var theme__$1 = (cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):theme);
var map__19071 = quo.components.list.item.themes.call(null,theme__$1);
var map__19071__$1 = (((((!((map__19071 == null))))?(((((map__19071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19071):map__19071);
var text_color = cljs.core.get.call(null,map__19071__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var active_background = cljs.core.get.call(null,map__19071__$1,new cljs.core.Keyword(null,"active-background","active-background",-920440291));
var passive_background = cljs.core.get.call(null,map__19071__$1,new cljs.core.Keyword(null,"passive-background","passive-background",-1033618948));
var icon_color__$1 = (function (){var or__4126__auto__ = icon_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(quo.components.list.item.themes.call(null,theme__$1));
}
})();
var icon_bg_color__$1 = (function (){var or__4126__auto__ = icon_bg_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796).cljs$core$IFn$_invoke$arity$1(quo.components.list.item.themes.call(null,theme__$1));
}
})();
var optional_haptic = (function (){
if(cljs.core.truth_(haptic_feedback)){
return quo.haptic.trigger.call(null,haptic_type);
} else {
return null;
}
});
var component = ((((cljs.core.not(on_press)) && (cljs.core.not(on_long_press))))?quo.react_native.view:(cljs.core.truth_(animated)?quo.components.animated.pressable.pressable:quo.react_native.touchable_highlight
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core.not_EQ_.call(null,background_color,null))?background_color:(cljs.core.truth_(((cljs.core._EQ_.call(null,accessory,new cljs.core.Keyword(null,"radio","radio",1323726374)))?active:false))?active_background:passive_background
))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list-item","list-item",-999803634),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"bg-color","bg-color",455102491),(cljs.core.truth_(active_background_enabled)?active_background:null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
optional_haptic();

return on_press.call(null);
})], null):null),(cljs.core.truth_(on_long_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),(function (){
optional_haptic();

return on_long_press.call(null);
})], null):null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.list.item.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"container-style","container-style",-240535783),container_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.list.item.left_side,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon-container-style","icon-container-style",-1995494173),new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"title-text-weight","title-text-weight",-1659203385),new cljs.core.Keyword(null,"right-side-present?","right-side-present?",168556746),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"icon-bg-color","icon-bg-color",-2103259796),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"subtitle-max-lines","subtitle-max-lines",1741836943),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.Keyword(null,"title-accessibility-label","title-accessibility-label",-1286107881),new cljs.core.Keyword(null,"subtitle-secondary","subtitle-secondary",598633721),new cljs.core.Keyword(null,"left-side-alignment","left-side-alignment",-1887619814),new cljs.core.Keyword(null,"text-size","text-size",-945618309)],[icon_container_style,icon_color__$1,title_text_weight,(function (){var or__4126__auto__ = accessory;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return chevron;
}
})(),(cljs.core.truth_(on_press)?text_color:new cljs.core.Keyword(null,"text-color","text-color",1728708298).cljs$core$IFn$_invoke$arity$1(quo.components.list.item.themes.call(null,new cljs.core.Keyword(null,"main","main",-2117802661)))),icon_bg_color__$1,icon,size,title,subtitle_max_lines,subtitle,title_accessibility_label,subtitle_secondary,left_side_alignment,text_size])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.list.item.right_side,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"chevron","chevron",1127691895),chevron,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"accessory-text","accessory-text",1203656373),accessory_text,new cljs.core.Keyword(null,"animated-accessory?","animated-accessory?",-2025833661),animated_accessory_QMARK_,new cljs.core.Keyword(null,"accessory-style","accessory-style",559747756),accessory_style,new cljs.core.Keyword(null,"accessory","accessory",635495745),accessory], null)], null)], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.tooltip.tooltip,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717),(0)], null),(cljs.core.truth_(accessibility_label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),[cljs.core.name.call(null,accessibility_label),"-error"].join('')], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"negative","negative",-1562068438),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),error], null)], null):null)], null);
});
Object.defineProperty(module.exports, "left_side", { enumerable: false, get: function() { return quo.components.list.item.left_side; } });
Object.defineProperty(module.exports, "size__GT_single_title_size", { enumerable: false, get: function() { return quo.components.list.item.size__GT_single_title_size; } });
Object.defineProperty(module.exports, "title_column", { enumerable: false, get: function() { return quo.components.list.item.title_column; } });
Object.defineProperty(module.exports, "size__GT_container_size", { enumerable: false, get: function() { return quo.components.list.item.size__GT_container_size; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo.components.list.item.themes; } });
Object.defineProperty(module.exports, "size__GT_icon_size", { enumerable: false, get: function() { return quo.components.list.item.size__GT_icon_size; } });
Object.defineProperty(module.exports, "list_item", { enumerable: false, get: function() { return quo.components.list.item.list_item; } });
Object.defineProperty(module.exports, "icon_column", { enumerable: false, get: function() { return quo.components.list.item.icon_column; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo.components.list.item.container; } });
Object.defineProperty(module.exports, "right_side", { enumerable: false, get: function() { return quo.components.list.item.right_side; } });
//# sourceMappingURL=quo.components.list.item.js.map
