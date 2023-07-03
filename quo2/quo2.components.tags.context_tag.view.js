var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.avatars.group_avatar.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.tags.context_tag.style.js");
require("./quo2.components.avatars.user_avatar.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.context_tag.view.js");

goog.provide('quo2.components.tags.context_tag.view');
quo2.components.tags.context_tag.view.trim_public_key = (function quo2$components$tags$context_tag$view$trim_public_key(pk){
return [cljs.core.subs.call(null,pk,(0),(6)),"...",cljs.core.subs.call(null,pk,(cljs.core.count.call(null,pk) - (3)))].join('');
});
quo2.components.tags.context_tag.view.base_tag = (function quo2$components$tags$context_tag$view$base_tag(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19535 = arguments.length;
var i__4737__auto___19539 = (0);
while(true){
if((i__4737__auto___19539 < len__4736__auto___19535)){
args__4742__auto__.push((arguments[i__4737__auto___19539]));

var G__19540 = (i__4737__auto___19539 + (1));
i__4737__auto___19539 = G__19540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.tags.context_tag.view.base_tag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.tags.context_tag.view.base_tag.cljs$core$IFn$_invoke$arity$variadic = (function (p__19391,children){
var map__19393 = p__19391;
var map__19393__$1 = (((((!((map__19393 == null))))?(((((map__19393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19393):map__19393);
var override_theme = cljs.core.get.call(null,map__19393__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var style = cljs.core.get.call(null,map__19393__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var blur_QMARK_ = cljs.core.get.call(null,map__19393__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.tags.context_tag.style.base_tag.call(null,override_theme,blur_QMARK_),style)], null)], null),children);
}));

(quo2.components.tags.context_tag.view.base_tag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.tags.context_tag.view.base_tag.cljs$lang$applyTo = (function (seq19373){
var G__19374 = cljs.core.first.call(null,seq19373);
var seq19373__$1 = cljs.core.next.call(null,seq19373);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19374,seq19373__$1);
}));

quo2.components.tags.context_tag.view.group_avatar_tag = (function quo2$components$tags$context_tag$view$group_avatar_tag(label,opts){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.base_tag,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"blur?","blur?",366148003)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053)], null),(3)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607)], null),(2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.group_avatar.group_avatar,opts], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"text-style","text-style",-230732139).cljs$core$IFn$_invoke$arity$1(opts)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')], null)], null);
});
quo2.components.tags.context_tag.view.public_key_tag = (function quo2$components$tags$context_tag$view$public_key_tag(params,public_key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.base_tag,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"monospace","monospace",2089559697),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),quo2.components.tags.context_tag.view.trim_public_key.call(null,public_key)], null)], null);
});
quo2.components.tags.context_tag.view.context_tag = (function quo2$components$tags$context_tag$view$context_tag(p__19416,photo,name,channel_name){
var map__19418 = p__19416;
var map__19418__$1 = (((((!((map__19418 == null))))?(((((map__19418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19418):map__19418);
var params = map__19418__$1;
var text_style = cljs.core.get.call(null,map__19418__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var blur_QMARK_ = cljs.core.get.call(null,map__19418__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var no_avatar_placeholder_QMARK_ = cljs.core.get.call(null,map__19418__$1,new cljs.core.Keyword(null,"no-avatar-placeholder?","no-avatar-placeholder?",-140480049));
var text_params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,text_style,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368))], null);
var empty_photo_QMARK_ = (photo == null);
var avatar_size = new cljs.core.Keyword(null,"xxs","xxs",-16722349);
var avatar_outer_size = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avatar_size,new cljs.core.Keyword(null,"outer","outer",-375185956)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.base_tag,cljs.core.assoc_in.call(null,params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053)], null),(3)),(cljs.core.truth_(((empty_photo_QMARK_)?no_avatar_placeholder_QMARK_:false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),avatar_outer_size], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-name","full-name",408178550),name,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366),photo,new cljs.core.Keyword(null,"size","size",1098693007),avatar_size,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tags.context_tag.style.context_tag_text_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,text_params,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),(cljs.core.truth_(channel_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","chevron-right","i/chevron-right",-219633420),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.tags.context_tag.style.context_tag_icon_color.call(null,blur_QMARK_),new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,text_params,["# ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_name)].join('')], null)], null):null)], null)], null)], null);
});
quo2.components.tags.context_tag.view.user_avatar_tag = (function quo2$components$tags$context_tag$view$user_avatar_tag(params,username,photo){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.context_tag,params,photo,username], null);
});
quo2.components.tags.context_tag.view.audio_tag = (function quo2$components$tags$context_tag$view$audio_tag(duration,params){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.base_tag,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tags.context_tag.style.audio_tag_container], null),params),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tags.context_tag.style.audio_tag_icon_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","play","i/play",-580417129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.tags.context_tag.style.audio_tag_icon_color,new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.tags.context_tag.style.audio_tag_text_color.call(null,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800).cljs$core$IFn$_invoke$arity$1(params))], null)], null),duration], null)], null);
});
quo2.components.tags.context_tag.view.community_tag = (function quo2$components$tags$context_tag$view$community_tag(avatar,community_name,p__19524){
var map__19525 = p__19524;
var map__19525__$1 = (((((!((map__19525 == null))))?(((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);
var params = map__19525__$1;
var override_theme = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.context_tag.view.context_tag,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.tags.context_tag.style.community_tag,new cljs.core.Keyword(null,"text-style","text-style",-230732139),quo2.components.tags.context_tag.style.community_tag_text.call(null,override_theme)], null),params),avatar,community_name], null);
});
Object.defineProperty(module.exports, "trim_public_key", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.trim_public_key; } });
Object.defineProperty(module.exports, "base_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.base_tag; } });
Object.defineProperty(module.exports, "group_avatar_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.group_avatar_tag; } });
Object.defineProperty(module.exports, "public_key_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.public_key_tag; } });
Object.defineProperty(module.exports, "context_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.context_tag; } });
Object.defineProperty(module.exports, "user_avatar_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.user_avatar_tag; } });
Object.defineProperty(module.exports, "audio_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.audio_tag; } });
Object.defineProperty(module.exports, "community_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.view.community_tag; } });
//# sourceMappingURL=quo2.components.tags.context_tag.view.js.map
