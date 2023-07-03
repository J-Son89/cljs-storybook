var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo.core.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.notifications.activity_log.style.js");
require("./quo2.components.tags.status_tags.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./reagent.core.js");
require("./utils.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.notifications.activity_log.view.js");

goog.provide('quo2.components.notifications.activity_log.view');
quo2.components.notifications.activity_log.view.activity_reply_text_input = (function quo2$components$notifications$activity_log$view$activity_reply_text_input(p__19229,reply_input){
var map__19230 = p__19229;
var map__19230__$1 = (((((!((map__19230 == null))))?(((((map__19230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19230):map__19230);
var on_update_reply = cljs.core.get.call(null,map__19230__$1,new cljs.core.Keyword(null,"on-update-reply","on-update-reply",1047122992));
var max_reply_length = cljs.core.get.call(null,map__19230__$1,new cljs.core.Keyword(null,"max-reply-length","max-reply-length",-338673323));
var valid_reply_QMARK_ = cljs.core.get.call(null,map__19230__$1,new cljs.core.Keyword(null,"valid-reply?","valid-reply?",-25191800));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(16),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_40], null)], null),utils.i18n.label(new cljs.core.Keyword("t","your-answer","t/your-answer",-1023315008))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(valid_reply_QMARK_.call(null,cljs.core.deref.call(null,reply_input)))?quo2.foundations.colors.neutral_40:quo2.foundations.colors.danger_60)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,reply_input))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_reply_length)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.core.text_input,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),(function (p1__19228_SHARP_){
cljs.core.reset_BANG_.call(null,reply_input,p1__19228_SHARP_);

if(cljs.core.truth_(on_update_reply)){
return on_update_reply.call(null,p1__19228_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),false,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"identity-verification-reply-text-input","identity-verification-reply-text-input",61642839),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),utils.i18n.label(new cljs.core.Keyword("t","type-something","t/type-something",401916760)),new cljs.core.Keyword(null,"return-key-type","return-key-type",2064093732),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),false,new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927),false], null)], null)], null)], null);
});
quo2.components.notifications.activity_log.view.activity_icon = (function quo2$components$notifications$activity_log$view$activity_icon(icon){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null);
});
quo2.components.notifications.activity_log.view.activity_context = (function quo2$components$notifications$activity_log$view$activity_context(context,replying_QMARK_){
var first_line_offset = (cljs.core.truth_(replying_QMARK_)?(4):(0));
var gap_between_lines = (4);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,quo2.components.notifications.activity_log.style.context_container,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),first_line_offset)], null)], null),cljs.core.mapcat.call(null,(function (detail){
if(typeof detail === 'string'){
return cljs.core.map.call(null,(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null),s], null)], null);
}),clojure.string.split.call(null,detail,/\s+/));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),gap_between_lines], null),detail], null)], null);
}
}),context));
});
quo2.components.notifications.activity_log.view.activity_message = (function quo2$components$notifications$activity_log$view$activity_message(p__19244){
var map__19245 = p__19244;
var map__19245__$1 = (((((!((map__19245 == null))))?(((((map__19245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19245):map__19245);
var title = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var title_number_of_lines = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"title-number-of-lines","title-number-of-lines",926229670));
var body_number_of_lines = cljs.core.get.call(null,map__19245__$1,new cljs.core.Keyword(null,"body-number-of-lines","body-number-of-lines",1193597626));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.message_container], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity-message-title","activity-message-title",-1099740097),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.message_title,new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),title_number_of_lines], null),title], null):null),((typeof body === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.message_body,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity-message-body","activity-message-body",-781372174),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),body_number_of_lines], null),body], null):body)], null);
});
quo2.components.notifications.activity_log.view.activity_title = (function quo2$components$notifications$activity_log$view$activity_title(title,replying_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity-title","activity-title",-1718828596),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.title.call(null),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(replying_QMARK_)?new cljs.core.Keyword(null,"heading-2","heading-2",-1189317102):new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200))], null),title], null);
});
quo2.components.notifications.activity_log.view.activity_timestamp = (function quo2$components$notifications$activity_log$view$activity_timestamp(timestamp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity-timestamp","activity-timestamp",1424607938),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.timestamp], null),timestamp], null);
});
quo2.components.notifications.activity_log.view.activity_unread_dot = (function quo2$components$notifications$activity_log$view$activity_unread_dot(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity-unread-indicator","activity-unread-indicator",-1211602316),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.unread_dot_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.unread_dot], null)], null)], null);
});
if((typeof quo2 !== 'undefined') && (typeof quo2.components !== 'undefined') && (typeof quo2.components.notifications !== 'undefined') && (typeof quo2.components.notifications.activity_log !== 'undefined') && (typeof quo2.components.notifications.activity_log.view !== 'undefined') && (typeof quo2.components.notifications.activity_log.view.footer_item_view !== 'undefined')){
} else {
quo2.components.notifications.activity_log.view.footer_item_view = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"quo2.components.notifications.activity-log.view","footer-item-view"),(function (item,_,___$1){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method(quo2.components.notifications.activity_log.view.footer_item_view,new cljs.core.Keyword(null,"button","button",1456579943),(function (p__19247,replying_QMARK_,reply_input){
var map__19248 = p__19247;
var map__19248__$1 = (((((!((map__19248 == null))))?(((((map__19248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19248):map__19248);
var button = map__19248__$1;
var label = cljs.core.get.call(null,map__19248__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var subtype = cljs.core.get.call(null,map__19248__$1,new cljs.core.Keyword(null,"subtype","subtype",-2092672993));
var disable_when = cljs.core.get.call(null,map__19248__$1,new cljs.core.Keyword(null,"disable-when","disable-when",-537118681));
var size = (cljs.core.truth_(replying_QMARK_)?(40):(24));
var common_style = (cljs.core.truth_(replying_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(9),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),(0)], null):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,button,new cljs.core.Keyword(null,"size","size",1098693007),size),new cljs.core.Keyword(null,"type","type",1174270348),subtype),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var and__4115__auto__ = replying_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = disable_when;
if(cljs.core.truth_(and__4115__auto____$1)){
return disable_when.call(null,cljs.core.deref.call(null,reply_input));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})()),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,common_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)),label], null);
}));
cljs.core._add_method(quo2.components.notifications.activity_log.view.footer_item_view,new cljs.core.Keyword(null,"status","status",-1997798413),(function (p__19250,_,___$1){
var map__19251 = p__19250;
var map__19251__$1 = (((((!((map__19251 == null))))?(((((map__19251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19251):map__19251);
var label = cljs.core.get.call(null,map__19251__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var subtype = cljs.core.get.call(null,map__19251__$1,new cljs.core.Keyword(null,"subtype","subtype",-2092672993));
var blur_QMARK_ = cljs.core.get.call(null,map__19251__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.status_tags.status_tag,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),subtype], null),new cljs.core.Keyword(null,"blur?","blur?",366148003),blur_QMARK_], null)], null);
}));
quo2.components.notifications.activity_log.view.footer = (function quo2$components$notifications$activity_log$view$footer(_){
var reply_input = reagent.core.atom.call(null,"");
return (function (p__19253){
var map__19254 = p__19253;
var map__19254__$1 = (((((!((map__19254 == null))))?(((((map__19254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19254):map__19254);
var props = map__19254__$1;
var replying_QMARK_ = cljs.core.get.call(null,map__19254__$1,new cljs.core.Keyword(null,"replying?","replying?",-1860126374));
var items = cljs.core.get.call(null,map__19254__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(replying_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_reply_text_input,props,reply_input], null):null),(cljs.core.truth_(items)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.notifications.activity_log.style.footer_container,(function (){var iter__4529__auto__ = (function quo2$components$notifications$activity_log$view$footer_$_iter__19256(s__19257){
return (new cljs.core.LazySeq(null,(function (){
var s__19257__$1 = s__19257;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__19257__$1);
if(temp__5735__auto__){
var s__19257__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19257__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19257__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19259 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19258 = (0);
while(true){
if((i__19258 < size__4528__auto__)){
var map__19260 = cljs.core._nth(c__4527__auto__,i__19258);
var map__19260__$1 = (((((!((map__19260 == null))))?(((((map__19260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19260):map__19260);
var item = map__19260__$1;
var key = cljs.core.get.call(null,map__19260__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append.call(null,b__19259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.footer_item_view,item,replying_QMARK_,reply_input], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__19275 = (i__19258 + (1));
i__19258 = G__19275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19259),quo2$components$notifications$activity_log$view$footer_$_iter__19256.call(null,cljs.core.chunk_rest.call(null,s__19257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19259),null);
}
} else {
var map__19263 = cljs.core.first.call(null,s__19257__$2);
var map__19263__$1 = (((((!((map__19263 == null))))?(((((map__19263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19263):map__19263);
var item = map__19263__$1;
var key = cljs.core.get.call(null,map__19263__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.footer_item_view,item,replying_QMARK_,reply_input], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),quo2$components$notifications$activity_log$view$footer_$_iter__19256.call(null,cljs.core.rest.call(null,s__19257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null):null)], null);
});
});
quo2.components.notifications.activity_log.view.view = (function quo2$components$notifications$activity_log$view$view(p__19270){
var map__19272 = p__19270;
var map__19272__$1 = (((((!((map__19272 == null))))?(((((map__19272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19272):map__19272);
var props = map__19272__$1;
var icon = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var message = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var context = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var timestamp = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var title = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"title","title",636505583));
var replying_QMARK_ = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"replying?","replying?",-1860126374));
var unread_QMARK_ = cljs.core.get.call(null,map__19272__$1,new cljs.core.Keyword(null,"unread?","unread?",-168163197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"activity","activity",-1179221455),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.container,new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338),new cljs.core.Keyword(null,"on-layout","on-layout",-2057720338).cljs$core$IFn$_invoke$arity$1(props)], null),(cljs.core.truth_(replying_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_icon,icon], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(cljs.core.truth_(replying_QMARK_)?null:(8)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.top_section_container], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.activity_log.style.title_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_title,title,replying_QMARK_], null),(cljs.core.truth_(replying_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_timestamp,timestamp], null))], null),(cljs.core.truth_((function (){var and__4115__auto__ = unread_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(replying_QMARK_);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_unread_dot], null):null)], null),(cljs.core.truth_(context)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_context,context,replying_QMARK_], null):null)], null),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.activity_message,message], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.activity_log.view.footer,props], null)], null)], null);
});
Object.defineProperty(module.exports, "footer_item_view", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.footer_item_view; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.view; } });
Object.defineProperty(module.exports, "activity_timestamp", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_timestamp; } });
Object.defineProperty(module.exports, "activity_context", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_context; } });
Object.defineProperty(module.exports, "activity_icon", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_icon; } });
Object.defineProperty(module.exports, "activity_reply_text_input", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_reply_text_input; } });
Object.defineProperty(module.exports, "activity_message", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_message; } });
Object.defineProperty(module.exports, "activity_title", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_title; } });
Object.defineProperty(module.exports, "activity_unread_dot", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.activity_unread_dot; } });
Object.defineProperty(module.exports, "footer", { enumerable: false, get: function() { return quo2.components.notifications.activity_log.view.footer; } });
//# sourceMappingURL=quo2.components.notifications.activity_log.view.js.map
