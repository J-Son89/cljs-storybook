var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.notifications.count_down_circle.js");
require("./quo2.components.notifications.toast.style.js");
require("./quo2.theme.js");
require("./react_native.blur.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.notifications.toast.view.js");

goog.provide('quo2.components.notifications.toast.view');
quo2.components.notifications.toast.view.toast_action_container = (function quo2$components$notifications$toast$view$toast_action_container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19214 = arguments.length;
var i__4737__auto___19215 = (0);
while(true){
if((i__4737__auto___19215 < len__4736__auto___19214)){
args__4742__auto__.push((arguments[i__4737__auto___19215]));

var G__19216 = (i__4737__auto___19215 + (1));
i__4737__auto___19215 = G__19216;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.notifications.toast.view.toast_action_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.notifications.toast.view.toast_action_container.cljs$core$IFn$_invoke$arity$variadic = (function (p__19188,children){
var map__19191 = p__19188;
var map__19191__$1 = (((((!((map__19191 == null))))?(((((map__19191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19191):map__19191);
var on_press = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var style = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.notifications.toast.style.action_container.call(null,quo2.theme.get_theme.call(null)),style)], null)], null),children], null)], null);
}));

(quo2.components.notifications.toast.view.toast_action_container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.notifications.toast.view.toast_action_container.cljs$lang$applyTo = (function (seq19128){
var G__19159 = cljs.core.first.call(null,seq19128);
var seq19128__$1 = cljs.core.next.call(null,seq19128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19159,seq19128__$1);
}));

quo2.components.notifications.toast.view.toast_undo_action = (function quo2$components$notifications$toast$view$toast_undo_action(duration,on_press,override_theme){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.toast.view.toast_action_container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"toast-undo-action","toast-undo-action",214758288)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.count_down_circle.circle_timer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.text.call(null,override_theme)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [utils.i18n.label,new cljs.core.Keyword("t","undo","t/undo",-1818036698)], null)], null)], null);
});
quo2.components.notifications.toast.view.toast_container = (function quo2$components$notifications$toast$view$toast_container(p__19194){
var map__19195 = p__19194;
var map__19195__$1 = (((((!((map__19195 == null))))?(((((map__19195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19195):map__19195);
var left = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var title = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var right = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var container_style = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var override_theme = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.notifications.toast.style.box_container,container_style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.blur.view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.blur_container,new cljs.core.Keyword(null,"blur-amount","blur-amount",-1583937784),(13),new cljs.core.Keyword(null,"blur-radius","blur-radius",2146629715),(10),new cljs.core.Keyword(null,"blur-type","blur-type",1771954032),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"overlay-color","overlay-color",-632881797),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.content_container.call(null,override_theme)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.left_side_container], null),left], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.right_side_container], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.title.call(null,override_theme),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"toast-title","toast-title",1034038114)], null),title], null):null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.notifications.toast.style.text.call(null,override_theme),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"toast-content","toast-content",1372857885)], null),text], null):null)], null),(cljs.core.truth_(right)?right:null)], null)], null);
});
quo2.components.notifications.toast.view.toast = (function quo2$components$notifications$toast$view$toast(p__19202){
var map__19204 = p__19202;
var map__19204__$1 = (((((!((map__19204 == null))))?(((((map__19204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19204):map__19204);
var container_style = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var user = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var text = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var override_theme = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var undo_duration = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"undo-duration","undo-duration",-1922417085));
var undo_on_press = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"undo-on-press","undo-on-press",598556740));
var icon_color = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var icon = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.call(null,map__19204__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.toast.view.toast_container,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,(function (){var G__19213 = quo2.components.notifications.toast.style.icon.call(null,override_theme);
if(cljs.core.truth_(icon_color)){
return cljs.core.assoc.call(null,G__19213,new cljs.core.Keyword(null,"color","color",1011675173),icon_color);
} else {
return G__19213;
}
})()], null):(cljs.core.truth_(user)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,user], null):null)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"right","right",-452581833),(cljs.core.truth_(undo_duration)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.notifications.toast.view.toast_undo_action,undo_duration,undo_on_press,override_theme], null):action),new cljs.core.Keyword(null,"container-style","container-style",-240535783),container_style,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),override_theme], null)], null);
});
Object.defineProperty(module.exports, "toast_action_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.view.toast_action_container; } });
Object.defineProperty(module.exports, "toast_undo_action", { enumerable: false, get: function() { return quo2.components.notifications.toast.view.toast_undo_action; } });
Object.defineProperty(module.exports, "toast_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.view.toast_container; } });
Object.defineProperty(module.exports, "toast", { enumerable: false, get: function() { return quo2.components.notifications.toast.view.toast; } });
//# sourceMappingURL=quo2.components.notifications.toast.view.js.map
