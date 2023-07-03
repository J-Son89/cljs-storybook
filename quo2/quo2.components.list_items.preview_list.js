var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.fast_image.js");
require("./react_native.hole_view.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.list_items.preview_list.js");

goog.provide('quo2.components.list_items.preview_list');
quo2.components.list_items.preview_list.params = new cljs.core.PersistentArrayMap(null, 3, [(32),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(16),new cljs.core.Keyword(null,"rounded","rounded",85415706),(10)], null),new cljs.core.Keyword(null,"hole-radius","hole-radius",-282926671),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(18),new cljs.core.Keyword(null,"rounded","rounded",85415706),(12)], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-8),new cljs.core.Keyword(null,"hole-size","hole-size",-1844007068),(36),new cljs.core.Keyword(null,"hole-x","hole-x",-2073810248),(22),new cljs.core.Keyword(null,"hole-y","hole-y",1270076079),(-2)], null),(24),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(12),new cljs.core.Keyword(null,"rounded","rounded",85415706),(8)], null),new cljs.core.Keyword(null,"hole-radius","hole-radius",-282926671),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(13),new cljs.core.Keyword(null,"rounded","rounded",85415706),(9)], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-4),new cljs.core.Keyword(null,"hole-size","hole-size",-1844007068),(26),new cljs.core.Keyword(null,"hole-x","hole-x",-2073810248),(19),new cljs.core.Keyword(null,"hole-y","hole-y",1270076079),(-1)], null),(16),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(8),new cljs.core.Keyword(null,"rounded","rounded",85415706),(8)], null),new cljs.core.Keyword(null,"hole-radius","hole-radius",-282926671),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circular","circular",-1815834918),(9),new cljs.core.Keyword(null,"rounded","rounded",85415706),(9)], null),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-4),new cljs.core.Keyword(null,"hole-size","hole-size",-1844007068),(18),new cljs.core.Keyword(null,"hole-x","hole-x",-2073810248),(11),new cljs.core.Keyword(null,"hole-y","hole-y",1270076079),(-1)], null)], null);
quo2.components.list_items.preview_list.avatar = (function quo2$components$list_items$preview_list$avatar(item,type,size,border_radius){
var G__17150 = type;
var G__17150__$1 = (((G__17150 instanceof cljs.core.Keyword))?G__17150.fqn:null);
switch (G__17150__$1) {
case "user":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ring?","ring?",458220940),false,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false,new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__17152 = size;
switch (G__17152) {
case (32):
return new cljs.core.Keyword(null,"small","small",2133478704);

break;
case (24):
return new cljs.core.Keyword(null,"xs","xs",649443341);

break;
case (16):
return new cljs.core.Keyword(null,"xxxs","xxxs",511924189);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17152)].join('')));

}
})()], null),item)], null);

break;
case "photo":
case "collectible":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.fast_image.fast_image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),border_radius], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17150__$1)].join('')));

}
});
quo2.components.list_items.preview_list.list_item = (function quo2$components$list_items$preview_list$list_item(index,type,size,item,list_size,margin_left,hole_size,hole_radius,hole_x,hole_y,border_radius){
var last_item_QMARK_ = cljs.core._EQ_.call(null,index,(list_size - (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.hole_view.hole_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),((cljs.core._EQ_.call(null,index,(0)))?(0):margin_left)], null),new cljs.core.Keyword(null,"holes","holes",188002959),((last_item_QMARK_)?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),hole_x,new cljs.core.Keyword(null,"y","y",-1757859776),hole_y,new cljs.core.Keyword(null,"width","width",-384071477),hole_size,new cljs.core.Keyword(null,"height","height",1025178622),hole_size,new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),hole_radius], null)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.list_items.preview_list.avatar,item,type,size,border_radius], null)], null);
});
quo2.components.list_items.preview_list.get_overflow_color = (function quo2$components$list_items$preview_list$get_overflow_color(transparent_QMARK_,transparent_color,light_color,dark_color,override_theme){
if(cljs.core.truth_(transparent_QMARK_)){
return transparent_color;
} else {
return quo2.foundations.colors.theme_colors.call(null,light_color,dark_color,override_theme);
}
});
quo2.components.list_items.preview_list.overflow_label = (function quo2$components$list_items$preview_list$overflow_label(label,size,transparent_QMARK_,border_radius,margin_left,override_theme,more_than_99_label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),border_radius,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.list_items.preview_list.get_overflow_color.call(null,transparent_QMARK_,quo2.foundations.colors.white_opa_10,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_70,override_theme)], null)], null),((cljs.core._EQ_.call(null,size,(16)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","more","i/more",-2058822627),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.list_items.preview_list.get_overflow_color.call(null,transparent_QMARK_,quo2.foundations.colors.white_opa_70,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,override_theme)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core._EQ_.call(null,size,(32)))?new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103):new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.list_items.preview_list.get_overflow_color.call(null,transparent_QMARK_,quo2.foundations.colors.white_opa_70,quo2.foundations.colors.neutral_60,quo2.foundations.colors.neutral_40,override_theme),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-2)], null)], null),(((label < (100)))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):more_than_99_label)], null))], null);
});
quo2.components.list_items.preview_list.border_type = (function quo2$components$list_items$preview_list$border_type(type){
var G__17181 = type;
var G__17181__$1 = (((G__17181 instanceof cljs.core.Keyword))?G__17181.fqn:null);
switch (G__17181__$1) {
case "account":
case "collectible":
case "photo":
return new cljs.core.Keyword(null,"rounded","rounded",85415706);

break;
default:
return new cljs.core.Keyword(null,"circular","circular",-1815834918);

}
});
/**
 * [preview-list opts items]
 * opts
 * {:type          :user/:community/:account/:token/:collectible/:dapp
 *  :size          32/24/16
 *  :list-size     override items count in overflow label (optional)
 *  :transparent?  overflow-label transparent?}
 * items           preview list items (only 4 items is required for preview)
 *   
 */
quo2.components.list_items.preview_list.preview_list = (function quo2$components$list_items$preview_list$preview_list(p__17182,items){
var map__17183 = p__17182;
var map__17183__$1 = (((((!((map__17183 == null))))?(((((map__17183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17183):map__17183);
var type = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var list_size = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"list-size","list-size",-1806515773));
var transparent_QMARK_ = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"transparent?","transparent?",-1446050548));
var override_theme = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var more_than_99_label = cljs.core.get.call(null,map__17183__$1,new cljs.core.Keyword(null,"more-than-99-label","more-than-99-label",-380215895));
var items_arr = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,items);
var list_size__$1 = (function (){var or__4126__auto__ = list_size;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.count.call(null,items);
}
})();
var margin_left = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377)], null));
var hole_size = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"hole-size","hole-size",-1844007068)], null));
var border_radius = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),quo2.components.list_items.preview_list.border_type.call(null,type)], null));
var hole_radius = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"hole-radius","hole-radius",-282926671),quo2.components.list_items.preview_list.border_type.call(null,type)], null));
var hole_x = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"hole-x","hole-x",-2073810248)], null));
var hole_y = cljs.core.get_in.call(null,quo2.components.list_items.preview_list.params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"hole-y","hole-y",1270076079)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__4529__auto__ = (function quo2$components$list_items$preview_list$preview_list_$_iter__17185(s__17186){
return (new cljs.core.LazySeq(null,(function (){
var s__17186__$1 = s__17186;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17186__$1);
if(temp__5735__auto__){
var s__17186__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17186__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__17186__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__17188 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__17187 = (0);
while(true){
if((i__17187 < size__4528__auto__)){
var index = cljs.core._nth(c__4527__auto__,i__17187);
cljs.core.chunk_append.call(null,b__17188,cljs.core.with_meta(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.list_items.preview_list.list_item,index,type,size,cljs.core.get.call(null,items_arr,index),list_size__$1,margin_left,hole_size,hole_radius,hole_x,hole_y,border_radius], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(list_size__$1)].join('')], null)));

var G__17209 = (i__17187 + (1));
i__17187 = G__17209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17188),quo2$components$list_items$preview_list$preview_list_$_iter__17185.call(null,cljs.core.chunk_rest.call(null,s__17186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17188),null);
}
} else {
var index = cljs.core.first.call(null,s__17186__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.list_items.preview_list.list_item,index,type,size,cljs.core.get.call(null,items_arr,index),list_size__$1,margin_left,hole_size,hole_radius,hole_x,hole_y,border_radius], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(list_size__$1)].join('')], null)),quo2$components$list_items$preview_list$preview_list_$_iter__17185.call(null,cljs.core.rest.call(null,s__17186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.call(null,(((list_size__$1 > (4)))?(3):list_size__$1)));
})(),(((list_size__$1 > (4)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.list_items.preview_list.overflow_label,(list_size__$1 - (3)),size,transparent_QMARK_,border_radius,margin_left,override_theme,more_than_99_label], null):null)], null);
});
Object.defineProperty(module.exports, "params", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.params; } });
Object.defineProperty(module.exports, "avatar", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.avatar; } });
Object.defineProperty(module.exports, "list_item", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.list_item; } });
Object.defineProperty(module.exports, "get_overflow_color", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.get_overflow_color; } });
Object.defineProperty(module.exports, "overflow_label", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.overflow_label; } });
Object.defineProperty(module.exports, "border_type", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.border_type; } });
Object.defineProperty(module.exports, "preview_list", { enumerable: false, get: function() { return quo2.components.list_items.preview_list.preview_list; } });
//# sourceMappingURL=quo2.components.list_items.preview_list.js.map
