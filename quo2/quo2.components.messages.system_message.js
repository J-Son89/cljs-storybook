var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.avatars.icon_avatar.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.messages.author.view.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
require("./react_native.core.js");
require("./react_native.reanimated.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.messages.system_message.js");

goog.provide('quo2.components.messages.system_message');
quo2.components.messages.system_message.themes_landed = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),quo2.foundations.colors.primary_50_opa_5,new cljs.core.Keyword(null,"added","added",2057651688),quo2.foundations.colors.primary_50_opa_5,new cljs.core.Keyword(null,"deleted","deleted",-510100639),quo2.foundations.colors.danger_50_opa_5], null);
quo2.components.messages.system_message.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"time","time",1385887882),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.white,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_5,new cljs.core.Keyword(null,"landed","landed",-1056197628),quo2.components.messages.system_message.themes_landed], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.white,new cljs.core.Keyword(null,"time","time",1385887882),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_90,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_80,new cljs.core.Keyword(null,"landed","landed",-1056197628),quo2.components.messages.system_message.themes_landed], null)], null)], null);
quo2.components.messages.system_message.get_color = (function quo2$components$messages$system_message$get_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17300 = arguments.length;
var i__4737__auto___17301 = (0);
while(true){
if((i__4737__auto___17301 < len__4736__auto___17300)){
args__4742__auto__.push((arguments[i__4737__auto___17301]));

var G__17304 = (i__4737__auto___17301 + (1));
i__4737__auto___17301 = G__17304;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return quo2.components.messages.system_message.get_color.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(quo2.components.messages.system_message.get_color.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.get.call(null,acc,k,cljs.core.reduced.call(null,acc));
}),quo2.theme.get_theme.call(null).call(null,quo2.components.messages.system_message.themes),cljs.core.vec.call(null,keys));
}));

(quo2.components.messages.system_message.get_color.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quo2.components.messages.system_message.get_color.cljs$lang$applyTo = (function (seq17214){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17214));
}));

quo2.components.messages.system_message.sm_timestamp = (function quo2$components$messages$system_message$sm_timestamp(timestamp_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"time","time",1385887882)),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),timestamp_str], null)], null);
});
quo2.components.messages.system_message.sm_icon = (function quo2$components$messages$system_message$sm_icon(p__17224){
var map__17225 = p__17224;
var map__17225__$1 = (((((!((map__17225 == null))))?(((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17225):map__17225);
var icon = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var color = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.call(null,map__17225__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.icon_avatar.icon_avatar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null)], null)], null);
});
quo2.components.messages.system_message.sm_user_avatar = (function quo2$components$messages$system_message$sm_user_avatar(image){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false,new cljs.core.Keyword(null,"online?","online?",-1144837492),false,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xxxs","xxxs",511924189),new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366),image,new cljs.core.Keyword(null,"ring?","ring?",458220940),false], null)], null)], null);
});
if((typeof quo2 !== 'undefined') && (typeof quo2.components !== 'undefined') && (typeof quo2.components.messages !== 'undefined') && (typeof quo2.components.messages.system_message !== 'undefined') && (typeof quo2.components.messages.system_message.system_message_content !== 'undefined')){
} else {
quo2.components.messages.system_message.system_message_content = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"quo2.components.messages.system-message","system-message-content"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method(quo2.components.messages.system_message.system_message_content,new cljs.core.Keyword(null,"deleted","deleted",-510100639),(function (p__17260){
var map__17261 = p__17260;
var map__17261__$1 = (((((!((map__17261 == null))))?(((((map__17261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17261):map__17261);
var label = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var timestamp_str = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"timestamp-str","timestamp-str",2091833621));
var labels = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
var child = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"child","child",623967545));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("main-icons","delete","main-icons/delete",1682985198),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"opacity","opacity",397153780),(5)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987)], null),(cljs.core.truth_(child)?child:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"text","text",-1790561697))], null)], null),(function (){var or__4126__auto__ = cljs.core.get.call(null,labels,label);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = label;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"message-deleted","message-deleted",-1317052926).cljs$core$IFn$_invoke$arity$1(labels);
}
}
})()], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_timestamp,timestamp_str], null)], null)], null);
}));
cljs.core._add_method(quo2.components.messages.system_message.system_message_content,new cljs.core.Keyword(null,"added","added",2057651688),(function (p__17276){
var map__17278 = p__17276;
var map__17278__$1 = (((((!((map__17278 == null))))?(((((map__17278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17278):map__17278);
var state = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var mentions = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"mentions","mentions",-1355741087));
var timestamp_str = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"timestamp-str","timestamp-str",2091833621));
var labels = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("main-icons","add-user","main-icons/add-user",-819494539),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"landed","landed",-1056197628)))?(0):(5))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_user_avatar,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mentions))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mentions))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(3),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(3)], null)], null),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(labels)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_user_avatar,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,mentions))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,mentions))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_timestamp,timestamp_str], null)], null);
}));
cljs.core._add_method(quo2.components.messages.system_message.system_message_content,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),(function (p__17282){
var map__17283 = p__17282;
var map__17283__$1 = (((((!((map__17283 == null))))?(((((map__17283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17283):map__17283);
var state = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var pinned_by = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"pinned-by","pinned-by",-850313283));
var child = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"child","child",623967545));
var timestamp_str = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"timestamp-str","timestamp-str",2091833621));
var labels = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("main-icons","pin","main-icons/pin",1541759384),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"landed","landed",-1056197628)))?(0):(5))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.author.view.author,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-name","primary-name",-1670654080),pinned_by,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"text","text",-1790561697))], null)], null),new cljs.core.Keyword(null,"pinned-a-message","pinned-a-message",1835658830).cljs$core$IFn$_invoke$arity$1(labels)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.sm_timestamp,timestamp_str], null)], null),(cljs.core.truth_(child)?child:null)], null)], null);
}));
quo2.components.messages.system_message.f_system_message = (function quo2$components$messages$system_message$f_system_message(p__17295){
var map__17296 = p__17295;
var map__17296__$1 = (((((!((map__17296 == null))))?(((((map__17296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17296):map__17296);
var message = map__17296__$1;
var type = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var non_pressable_QMARK_ = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"non-pressable?","non-pressable?",-848714332));
var animate_landing_QMARK_ = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"animate-landing?","animate-landing?",116138284));
var labels = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
var on_long_press = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var sv_color = react_native.reanimated.use_shared_value.call(null,quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421),(cljs.core.truth_(animate_landing_QMARK_)?new cljs.core.Keyword(null,"landed","landed",-1056197628):new cljs.core.Keyword(null,"default","default",-1987822328)),type));
if(cljs.core.truth_(animate_landing_QMARK_)){
react_native.reanimated.animate_shared_value_with_delay.call(null,sv_color,quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"default","default",-1987822328),type),(0),new cljs.core.Keyword(null,"linear","linear",872268697),(1000));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.touchable_opacity,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if(cljs.core.truth_(non_pressable_QMARK_)){
return null;
} else {
return react_native.reanimated.set_shared_value.call(null,sv_color,quo2.components.messages.system_message.get_color.call(null,new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"pressed","pressed",1100937946),type));
}
}),new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),on_long_press,new cljs.core.Keyword(null,"style","style",-496642736),react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),sv_color], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12),new cljs.core.Keyword(null,"background-color","background-color",570434026),sv_color], null),style))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.system_message.system_message_content,message,labels], null)], null);
});
quo2.components.messages.system_message.system_message = (function quo2$components$messages$system_message$system_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.messages.system_message.f_system_message,message], null);
});
Object.defineProperty(module.exports, "sm_timestamp", { enumerable: false, get: function() { return quo2.components.messages.system_message.sm_timestamp; } });
Object.defineProperty(module.exports, "sm_icon", { enumerable: false, get: function() { return quo2.components.messages.system_message.sm_icon; } });
Object.defineProperty(module.exports, "sm_user_avatar", { enumerable: false, get: function() { return quo2.components.messages.system_message.sm_user_avatar; } });
Object.defineProperty(module.exports, "themes_landed", { enumerable: false, get: function() { return quo2.components.messages.system_message.themes_landed; } });
Object.defineProperty(module.exports, "system_message", { enumerable: false, get: function() { return quo2.components.messages.system_message.system_message; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.messages.system_message.themes; } });
Object.defineProperty(module.exports, "system_message_content", { enumerable: false, get: function() { return quo2.components.messages.system_message.system_message_content; } });
Object.defineProperty(module.exports, "f_system_message", { enumerable: false, get: function() { return quo2.components.messages.system_message.f_system_message; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.messages.system_message.get_color; } });
//# sourceMappingURL=quo2.components.messages.system_message.js.map
