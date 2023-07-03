var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.tabs.tab.view.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tabs.segmented_tab.js");

goog.provide('quo2.components.tabs.segmented_tab');
quo2.components.tabs.segmented_tab.themes_for_blur = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_80_opa_5], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white_opa_5], null)], null);
quo2.components.tabs.segmented_tab.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_10], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_90], null)], null);
quo2.components.tabs.segmented_tab.segmented_control = (function quo2$components$tabs$segmented_tab$segmented_control(p__19433){
var map__19436 = p__19433;
var map__19436__$1 = (((((!((map__19436 == null))))?(((((map__19436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19436):map__19436);
var default_active = cljs.core.get.call(null,map__19436__$1,new cljs.core.Keyword(null,"default-active","default-active",467671365));
var on_change = cljs.core.get.call(null,map__19436__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var active_tab_id = reagent.core.atom.call(null,default_active);
return (function (p__19445){
var map__19447 = p__19445;
var map__19447__$1 = (((((!((map__19447 == null))))?(((((map__19447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19447):map__19447);
var data = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var size = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var override_theme = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var blur_QMARK_ = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var container_style = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var item_container_style = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"item-container-style","item-container-style",-1282731310));
var active_item_container_style = cljs.core.get.call(null,map__19447__$1,new cljs.core.Keyword(null,"active-item-container-style","active-item-container-style",657402941));
var active_id = cljs.core.deref.call(null,active_tab_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.get_in.call(null,(cljs.core.truth_(blur_QMARK_)?quo2.components.tabs.segmented_tab.themes_for_blur:quo2.components.tabs.segmented_tab.themes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = override_theme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.theme.get_theme.call(null);
}
})(),new cljs.core.Keyword(null,"background-color","background-color",570434026)], null)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(function (){var G__19472 = size;
switch (G__19472) {
case (32):
return (10);

break;
case (28):
return (8);

break;
case (24):
return (8);

break;
case (20):
return (6);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19472)].join('')));

}
})(),new cljs.core.Keyword(null,"padding","padding",1660304693),(2)], null),container_style),(function (){var iter__4529__auto__ = (function quo2$components$tabs$segmented_tab$segmented_control_$_iter__19481(s__19482){
return (new cljs.core.LazySeq(null,(function (){
var s__19482__$1 = s__19482;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__19482__$1);
if(temp__5735__auto__){
var s__19482__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19482__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19482__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19484 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19483 = (0);
while(true){
if((i__19483 < size__4528__auto__)){
var vec__19493 = cljs.core._nth(c__4527__auto__,i__19483);
var indx = cljs.core.nth.call(null,vec__19493,(0),null);
var map__19496 = cljs.core.nth.call(null,vec__19493,(1),null);
var map__19496__$1 = (((((!((map__19496 == null))))?(((((map__19496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19496):map__19496);
var label = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__19484,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),((cljs.core._EQ_.call(null,(0),indx))?(0):(2)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tab.view.view,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"blur?","blur?",366148003),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"item-container-style","item-container-style",-1282731310),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"segmented?","segmented?",506415002),new cljs.core.Keyword(null,"active-item-container-style","active-item-container-style",657402941)],[((function (i__19483,vec__19493,indx,map__19496,map__19496__$1,label,id,c__4527__auto__,size__4528__auto__,b__19484,s__19482__$2,temp__5735__auto__,active_id,map__19447,map__19447__$1,data,size,override_theme,blur_QMARK_,container_style,item_container_style,active_item_container_style,active_tab_id,map__19436,map__19436__$1,default_active,on_change){
return (function (tab_id){
cljs.core.reset_BANG_.call(null,active_tab_id,tab_id);

if(cljs.core.truth_(on_change)){
return on_change.call(null,tab_id);
} else {
return null;
}
});})(i__19483,vec__19493,indx,map__19496,map__19496__$1,label,id,c__4527__auto__,size__4528__auto__,b__19484,s__19482__$2,temp__5735__auto__,active_id,map__19447,map__19447__$1,data,size,override_theme,blur_QMARK_,container_style,item_container_style,active_item_container_style,active_tab_id,map__19436,map__19436__$1,default_active,on_change))
,override_theme,blur_QMARK_,size,item_container_style,cljs.core._EQ_.call(null,id,active_id),id,true,active_item_container_style]),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__19541 = (i__19483 + (1));
i__19483 = G__19541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19484),quo2$components$tabs$segmented_tab$segmented_control_$_iter__19481.call(null,cljs.core.chunk_rest.call(null,s__19482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19484),null);
}
} else {
var vec__19510 = cljs.core.first.call(null,s__19482__$2);
var indx = cljs.core.nth.call(null,vec__19510,(0),null);
var map__19513 = cljs.core.nth.call(null,vec__19510,(1),null);
var map__19513__$1 = (((((!((map__19513 == null))))?(((((map__19513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19513):map__19513);
var label = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__19513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),((cljs.core._EQ_.call(null,(0),indx))?(0):(2)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.tab.view.view,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"blur?","blur?",366148003),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"item-container-style","item-container-style",-1282731310),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"segmented?","segmented?",506415002),new cljs.core.Keyword(null,"active-item-container-style","active-item-container-style",657402941)],[((function (vec__19510,indx,map__19513,map__19513__$1,label,id,s__19482__$2,temp__5735__auto__,active_id,map__19447,map__19447__$1,data,size,override_theme,blur_QMARK_,container_style,item_container_style,active_item_container_style,active_tab_id,map__19436,map__19436__$1,default_active,on_change){
return (function (tab_id){
cljs.core.reset_BANG_.call(null,active_tab_id,tab_id);

if(cljs.core.truth_(on_change)){
return on_change.call(null,tab_id);
} else {
return null;
}
});})(vec__19510,indx,map__19513,map__19513__$1,label,id,s__19482__$2,temp__5735__auto__,active_id,map__19447,map__19447__$1,data,size,override_theme,blur_QMARK_,container_style,item_container_style,active_item_container_style,active_tab_id,map__19436,map__19436__$1,default_active,on_change))
,override_theme,blur_QMARK_,size,item_container_style,cljs.core._EQ_.call(null,id,active_id),id,true,active_item_container_style]),label], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),quo2$components$tabs$segmented_tab$segmented_control_$_iter__19481.call(null,cljs.core.rest.call(null,s__19482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.call(null,cljs.core.vector,data));
})()], null);
});
});
Object.defineProperty(module.exports, "themes_for_blur", { enumerable: false, get: function() { return quo2.components.tabs.segmented_tab.themes_for_blur; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.tabs.segmented_tab.themes; } });
Object.defineProperty(module.exports, "segmented_control", { enumerable: false, get: function() { return quo2.components.tabs.segmented_tab.segmented_control; } });
//# sourceMappingURL=quo2.components.tabs.segmented_tab.js.map
