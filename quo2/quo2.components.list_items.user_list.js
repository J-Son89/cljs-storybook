var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.core.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.icon.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.messages.author.view.js");
require("./quo2.components.selectors.selectors.view.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.list_items.user_list.js");

goog.provide('quo2.components.list_items.user_list');
quo2.components.list_items.user_list.container_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(8),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.list_items.user_list.action_icon = (function quo2$components$list_items$user_list$action_icon(p__17347){
var map__17348 = p__17347;
var map__17348__$1 = (((((!((map__17348 == null))))?(((((map__17348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17348):map__17348);
var type = cljs.core.get.call(null,map__17348__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_press = cljs.core.get.call(null,map__17348__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var on_check = cljs.core.get.call(null,map__17348__$1,new cljs.core.Keyword(null,"on-check","on-check",-1182255051));
var disabled_QMARK_ = cljs.core.get.call(null,map__17348__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var checked_QMARK_ = cljs.core.get.call(null,map__17348__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(cljs.core.truth_(on_press)?on_press:null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null)], null),(function (){var G__17353 = type;
var G__17353__$1 = (((G__17353 instanceof cljs.core.Keyword))?G__17353.fqn:null);
switch (G__17353__$1) {
case "options":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","options","i/options",99638360),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null);

break;
case "checkbox":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.checkbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),checked_QMARK_,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"user-list-toggle-check","user-list-toggle-check",328730014),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(cljs.core.truth_(on_check)?on_check:null)], null)], null);

break;
case "close":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,"not implemented"], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view], null);

}
})()], null);
});
quo2.components.list_items.user_list.user_list = (function quo2$components$list_items$user_list$user_list(p__17354){
var map__17355 = p__17354;
var map__17355__$1 = (((((!((map__17355 == null))))?(((((map__17355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17355):map__17355);
var contact_QMARK_ = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"contact?","contact?",-928974215));
var on_long_press = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var primary_name = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"primary-name","primary-name",-1670654080));
var on_press = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var secondary_name = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"secondary-name","secondary-name",-1921356287));
var accessory = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"accessory","accessory",635495745));
var short_chat_key = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"short-chat-key","short-chat-key",12643044));
var online_QMARK_ = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"online?","online?",-1144837492));
var verified_QMARK_ = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"verified?","verified?",863527758));
var untrustworthy_QMARK_ = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"untrustworthy?","untrustworthy?",1357508079));
var photo_path = cljs.core.get.call(null,map__17355__$1,new cljs.core.Keyword(null,"photo-path","photo-path",1024562482));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.list_items.user_list.container_style,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"user-list","user-list",346594331),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(cljs.core.truth_(on_press)?on_press:null),new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),(cljs.core.truth_(on_long_press)?on_long_press:null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"full-name","full-name",408178550),primary_name,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366),photo_path,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),true,new cljs.core.Keyword(null,"online?","online?",-1144837492),online_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.messages.author.view.author,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"primary-name","primary-name",-1670654080),primary_name,new cljs.core.Keyword(null,"secondary-name","secondary-name",-1921356287),secondary_name,new cljs.core.Keyword(null,"contact?","contact?",-928974215),contact_QMARK_,new cljs.core.Keyword(null,"verified?","verified?",863527758),verified_QMARK_,new cljs.core.Keyword(null,"untrustworthy?","untrustworthy?",1357508079),untrustworthy_QMARK_], null)], null),(cljs.core.truth_(short_chat_key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null),short_chat_key], null):null)], null),(cljs.core.truth_(accessory)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.list_items.user_list.action_icon,accessory], null):null)], null);
});
Object.defineProperty(module.exports, "container_style", { enumerable: false, get: function() { return quo2.components.list_items.user_list.container_style; } });
Object.defineProperty(module.exports, "action_icon", { enumerable: false, get: function() { return quo2.components.list_items.user_list.action_icon; } });
Object.defineProperty(module.exports, "user_list", { enumerable: false, get: function() { return quo2.components.list_items.user_list.user_list; } });
//# sourceMappingURL=quo2.components.list_items.user_list.js.map
