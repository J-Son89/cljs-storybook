var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.tags.base_tag.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.permission_tag.js");

goog.provide('quo2.components.tags.permission_tag');
quo2.components.tags.permission_tag.outer_resource_container = (function quo2$components$tags$permission_tag$outer_resource_container(size,background_color){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),size,new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(function (){var G__16746 = size;
switch (G__16746) {
case (32):
return (-12);

break;
case (24):
return (-8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16746)].join('')));

}
})(),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null);
});
quo2.components.tags.permission_tag.extra_count_styles = (function quo2$components$tags$permission_tag$extra_count_styles(size){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_70),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__16748 = size;
switch (G__16748) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16748)].join('')));

}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__16751 = size;
switch (G__16751) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16751)].join('')));

}
})(),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),size,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
});
quo2.components.tags.permission_tag.extra_count = (function quo2$components$tags$permission_tag$extra_count(total_group_count,selected_count,size,background_color){
var extra_group_count = (total_group_count - selected_count);
if((extra_group_count > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.tags.permission_tag.outer_resource_container.call(null,size,background_color),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.tags.permission_tag.extra_count_styles.call(null,size),(((extra_group_count < (4)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null),["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_group_count)].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","pending-default","i/pending-default",978300810),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40),new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null))], null)], null);
} else {
return null;
}
});
quo2.components.tags.permission_tag.selected_token_count = (function quo2$components$tags$permission_tag$selected_token_count(group){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))){
return (3);
} else {
if((cljs.core.count.call(null,group) > (3))){
return (2);
} else {
return cljs.core.count.call(null,group);

}
}
});
quo2.components.tags.permission_tag.token_group = (function quo2$components$tags$permission_tag$token_group(){
return (function (p__16760){
var map__16761 = p__16760;
var map__16761__$1 = (((((!((map__16761 == null))))?(((((map__16761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16761):map__16761);
var group = cljs.core.get.call(null,map__16761__$1,new cljs.core.Keyword(null,"group","group",582596132));
var size = cljs.core.get.call(null,map__16761__$1,new cljs.core.Keyword(null,"size","size",1098693007),(24));
var last_group = cljs.core.get.call(null,map__16761__$1,new cljs.core.Keyword(null,"last-group","last-group",-659318337));
var background_color = cljs.core.get.call(null,map__16761__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var tokens_count = cljs.core.count.call(null,group);
var selected_tokens = cljs.core.take.call(null,quo2.components.tags.permission_tag.selected_token_count.call(null,group),group);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),(function (){var iter__4529__auto__ = (function quo2$components$tags$permission_tag$token_group_$_iter__16767(s__16768){
return (new cljs.core.LazySeq(null,(function (){
var s__16768__$1 = s__16768;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16768__$1);
if(temp__5735__auto__){
var s__16768__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16768__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16768__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16770 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16769 = (0);
while(true){
if((i__16769 < size__4528__auto__)){
var map__16774 = cljs.core._nth(c__4527__auto__,i__16769);
var map__16774__$1 = (((((!((map__16774 == null))))?(((((map__16774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16774):map__16774);
var token_icon = cljs.core.get.call(null,map__16774__$1,new cljs.core.Keyword(null,"token-icon","token-icon",623153488));
cljs.core.chunk_append.call(null,b__16770,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.tags.permission_tag.outer_resource_container.call(null,size,background_color),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),token_icon,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__16779 = size;
switch (G__16779) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16779)].join('')));

}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__16781 = size;
switch (G__16781) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16781)].join('')));

}
})(),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),size], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),token_icon], null)));

var G__16832 = (i__16769 + (1));
i__16769 = G__16832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16770),quo2$components$tags$permission_tag$token_group_$_iter__16767.call(null,cljs.core.chunk_rest.call(null,s__16768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16770),null);
}
} else {
var map__16788 = cljs.core.first.call(null,s__16768__$2);
var map__16788__$1 = (((((!((map__16788 == null))))?(((((map__16788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16788):map__16788);
var token_icon = cljs.core.get.call(null,map__16788__$1,new cljs.core.Keyword(null,"token-icon","token-icon",623153488));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.tags.permission_tag.outer_resource_container.call(null,size,background_color),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),token_icon,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__16791 = size;
switch (G__16791) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16791)].join('')));

}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__16793 = size;
switch (G__16793) {
case (32):
return (28);

break;
case (24):
return (20);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16793)].join('')));

}
})(),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),size], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),token_icon], null)),quo2$components$tags$permission_tag$token_group_$_iter__16767.call(null,cljs.core.rest.call(null,s__16768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(selected_tokens);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.permission_tag.extra_count,tokens_count,cljs.core.count.call(null,selected_tokens),size], null),(cljs.core.truth_(last_group)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__16798 = size;
switch (G__16798) {
case (32):
return new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103);

break;
case (24):
return new cljs.core.Keyword(null,"label","label",1718410804);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16798)].join('')));

}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"lowercase","lowercase",41029539),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(function (){var G__16799 = size;
switch (G__16799) {
case (32):
return (16);

break;
case (24):
return (12);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16799)].join('')));

}
})()], null)], null),"or"], null)], null))], null);
});
});
quo2.components.tags.permission_tag.selected_group_count = (function quo2$components$tags$permission_tag$selected_group_count(tokens){
if((cljs.core.count.call(null,tokens) > (3))){
return (3);
} else {
return cljs.core.count.call(null,tokens);

}
});
quo2.components.tags.permission_tag.tag_tokens = (function quo2$components$tags$permission_tag$tag_tokens(){
return (function (p__16800){
var map__16801 = p__16800;
var map__16801__$1 = (((((!((map__16801 == null))))?(((((map__16801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16801):map__16801);
var tokens = cljs.core.get.call(null,map__16801__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var size = cljs.core.get.call(null,map__16801__$1,new cljs.core.Keyword(null,"size","size",1098693007),(24));
var background_color = cljs.core.get.call(null,map__16801__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var selected_groups = cljs.core.take.call(null,quo2.components.tags.permission_tag.selected_group_count.call(null,tokens),tokens);
var last_group_id = cljs.core.last.call(null,selected_groups).call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),(function (){var iter__4529__auto__ = (function quo2$components$tags$permission_tag$tag_tokens_$_iter__16803(s__16804){
return (new cljs.core.LazySeq(null,(function (){
var s__16804__$1 = s__16804;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16804__$1);
if(temp__5735__auto__){
var s__16804__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16804__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16804__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16806 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16805 = (0);
while(true){
if((i__16805 < size__4528__auto__)){
var map__16807 = cljs.core._nth(c__4527__auto__,i__16805);
var map__16807__$1 = (((((!((map__16807 == null))))?(((((map__16807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16807):map__16807);
var id = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var group = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"group","group",582596132));
cljs.core.chunk_append.call(null,b__16806,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.permission_tag.token_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"last-group","last-group",-659318337),((cljs.core._EQ_.call(null,id,last_group_id))?true:false),new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__16846 = (i__16805 + (1));
i__16805 = G__16846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16806),quo2$components$tags$permission_tag$tag_tokens_$_iter__16803.call(null,cljs.core.chunk_rest.call(null,s__16804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16806),null);
}
} else {
var map__16809 = cljs.core.first.call(null,s__16804__$2);
var map__16809__$1 = (((((!((map__16809 == null))))?(((((map__16809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16809):map__16809);
var id = cljs.core.get.call(null,map__16809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var group = cljs.core.get.call(null,map__16809__$1,new cljs.core.Keyword(null,"group","group",582596132));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.permission_tag.token_group,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"last-group","last-group",-659318337),((cljs.core._EQ_.call(null,id,last_group_id))?true:false),new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),quo2$components$tags$permission_tag$tag_tokens_$_iter__16803.call(null,cljs.core.rest.call(null,s__16804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(selected_groups);
})()], null);
});
});
quo2.components.tags.permission_tag.tag = (function quo2$components$tags$permission_tag$tag(_,___$1){
return (function (p__16811){
var map__16812 = p__16811;
var map__16812__$1 = (((((!((map__16812 == null))))?(((((map__16812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16812):map__16812);
var locked_QMARK_ = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var tokens = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var size = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"size","size",1098693007),(24));
var background_color = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var on_press = cljs.core.get.call(null,map__16812__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.base_tag.base_tag,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"permission","permission",-511292572),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(function (){var G__16817 = (32);
switch (G__16817) {
case (8):
return (24);

break;
default:
return (6);

}
})(),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(function (){var G__16818 = size;
switch (G__16818) {
case (32):
return (16);

break;
case (24):
return (12);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16818)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(cljs.core.truth_(locked_QMARK_)?new cljs.core.Keyword("i","locked","i/locked",-1658763621):new cljs.core.Keyword("i","unlocked","i/unlocked",-1647243648)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__16819 = size;
switch (G__16819) {
case (32):
return (20);

break;
case (24):
return (16);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16819)].join('')));

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.permission_tag.tag_tokens,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color], null)], null)], null)], null);
});
});
Object.defineProperty(module.exports, "outer_resource_container", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.outer_resource_container; } });
Object.defineProperty(module.exports, "extra_count_styles", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.extra_count_styles; } });
Object.defineProperty(module.exports, "extra_count", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.extra_count; } });
Object.defineProperty(module.exports, "selected_token_count", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.selected_token_count; } });
Object.defineProperty(module.exports, "token_group", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.token_group; } });
Object.defineProperty(module.exports, "selected_group_count", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.selected_group_count; } });
Object.defineProperty(module.exports, "tag_tokens", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.tag_tokens; } });
Object.defineProperty(module.exports, "tag", { enumerable: false, get: function() { return quo2.components.tags.permission_tag.tag; } });
//# sourceMappingURL=quo2.components.tags.permission_tag.js.map
