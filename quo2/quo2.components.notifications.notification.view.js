var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.notifications.notification.style.js");
require("./react_native.blur.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.notifications.notification.view.js");

goog.provide('quo2.components.notifications.notification.view');
quo2.components.notifications.notification.view.header_container = (function quo2$components$notifications$notification$view$header_container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19115 = arguments.length;
var i__4737__auto___19116 = (0);
while(true){
if((i__4737__auto___19116 < len__4736__auto___19115)){
args__4742__auto__.push((arguments[i__4737__auto___19116]));

var G__19117 = (i__4737__auto___19116 + (1));
i__4737__auto___19116 = G__19117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return quo2.components.notifications.notification.view.header_container.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(quo2.components.notifications.notification.view.header_container.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"notification-header","notification-header",762586942)], null)], null),children], null);
}));

(quo2.components.notifications.notification.view.header_container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quo2.components.notifications.notification.view.header_container.cljs$lang$applyTo = (function (seq19059){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19059));
}));

quo2.components.notifications.notification.view.body_container = (function quo2$components$notifications$notification$view$body_container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19118 = arguments.length;
var i__4737__auto___19119 = (0);
while(true){
if((i__4737__auto___19119 < len__4736__auto___19118)){
args__4742__auto__.push((arguments[i__4737__auto___19119]));

var G__19120 = (i__4737__auto___19119 + (1));
i__4737__auto___19119 = G__19120;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return quo2.components.notifications.notification.view.body_container.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(quo2.components.notifications.notification.view.body_container.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"notification-body","notification-body",2060504705)], null)], null),children], null);
}));

(quo2.components.notifications.notification.view.body_container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quo2.components.notifications.notification.view.body_container.cljs$lang$applyTo = (function (seq19064){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19064));
}));

quo2.components.notifications.notification.view.avatar_container = (function quo2$components$notifications$notification$view$avatar_container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19121 = arguments.length;
var i__4737__auto___19122 = (0);
while(true){
if((i__4737__auto___19122 < len__4736__auto___19121)){
args__4742__auto__.push((arguments[i__4737__auto___19122]));

var G__19123 = (i__4737__auto___19122 + (1));
i__4737__auto___19122 = G__19123;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return quo2.components.notifications.notification.view.avatar_container.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(quo2.components.notifications.notification.view.avatar_container.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.avatar_container,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"notification-avatar","notification-avatar",-1971103667)], null)], null),children], null);
}));

(quo2.components.notifications.notification.view.avatar_container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quo2.components.notifications.notification.view.avatar_container.cljs$lang$applyTo = (function (seq19077){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19077));
}));

quo2.components.notifications.notification.view.title = (function quo2$components$notifications$notification$view$title(var_args){
var G__19088 = arguments.length;
switch (G__19088) {
case 2:
return quo2.components.notifications.notification.view.title.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quo2.components.notifications.notification.view.title.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.components.notifications.notification.view.title.cljs$core$IFn$_invoke$arity$2 = (function (text,weight){
return quo2.components.notifications.notification.view.title.call(null,text,weight,null);
}));

(quo2.components.notifications.notification.view.title.cljs$core$IFn$_invoke$arity$3 = (function (text,weight,override_theme){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),(function (){var or__4126__auto__ = weight;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029);
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.title.call(null,override_theme),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"notification-title","notification-title",-502306004)], null),text], null);
}));

(quo2.components.notifications.notification.view.title.cljs$lang$maxFixedArity = 3);

quo2.components.notifications.notification.view.message = (function quo2$components$notifications$notification$view$message(text,override_theme){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.text.call(null,override_theme),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"notification-content","notification-content",341824606)], null),text], null);
});
quo2.components.notifications.notification.view.notification_container = (function quo2$components$notifications$notification$view$notification_container(p__19100){
var map__19102 = p__19100;
var map__19102__$1 = (((((!((map__19102 == null))))?(((((map__19102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19102):map__19102);
var avatar = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var header = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var container_style = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var override_theme = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.notifications.notification.style.box_container,container_style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.blur.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.blur_container,new cljs.core.Keyword(null,"blur-amount","blur-amount",-1583937784),(13),new cljs.core.Keyword(null,"blur-radius","blur-radius",2146629715),(10),new cljs.core.Keyword(null,"blur-type","blur-type",1771954032),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"overlay-color","overlay-color",-632881797),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.content_container.call(null,override_theme)], null),avatar,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.notification.style.right_side_container], null),header,body], null)], null)], null);
});
quo2.components.notifications.notification.view.notification = (function quo2$components$notifications$notification$view$notification(p__19111){
var map__19112 = p__19111;
var map__19112__$1 = (((((!((map__19112 == null))))?(((((map__19112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19112):map__19112);
var title_text = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"title","title",636505583));
var avatar = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var header = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"header","header",119441134));
var title_weight = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"title-weight","title-weight",277979199));
var text = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var body = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var container_style = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var override_theme = cljs.core.get.call(null,map__19112__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var header__$1 = (function (){var or__4126__auto__ = header;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(title_text)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.title,title_text,title_weight,override_theme], null);
} else {
return null;
}
}
})();
var header__$2 = (cljs.core.truth_(header__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.header_container,header__$1], null):null);
var body__$1 = (function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(text)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.message,text,override_theme], null);
} else {
return null;
}
}
})();
var body__$2 = (cljs.core.truth_(body__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.body_container,body__$1], null):null);
var avatar__$1 = (cljs.core.truth_(avatar)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.avatar_container,avatar], null):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.notification.view.notification_container,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"avatar","avatar",-1607499307),avatar__$1,new cljs.core.Keyword(null,"header","header",119441134),header__$2,new cljs.core.Keyword(null,"body","body",-2049205669),body__$2,new cljs.core.Keyword(null,"container-style","container-style",-240535783),container_style,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),override_theme], null)], null);
});
Object.defineProperty(module.exports, "header_container", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.header_container; } });
Object.defineProperty(module.exports, "body_container", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.body_container; } });
Object.defineProperty(module.exports, "avatar_container", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.avatar_container; } });
Object.defineProperty(module.exports, "title", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.title; } });
Object.defineProperty(module.exports, "message", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.message; } });
Object.defineProperty(module.exports, "notification_container", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.notification_container; } });
Object.defineProperty(module.exports, "notification", { enumerable: false, get: function() { return quo2.components.notifications.notification.view.notification; } });
//# sourceMappingURL=quo2.components.notifications.notification.view.js.map
