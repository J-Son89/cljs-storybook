var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.community.community_view.js");
require("./quo2.components.community.style.js");
require("./quo2.components.counter.counter.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.community.icon.js");
require("./quo2.components.common.unread_grey_dot.view.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.community.community_list_view.js");

goog.provide('quo2.components.community.community_list_view');
quo2.components.community.community_list_view.notification_view = (function quo2$components$community$community_list_view$notification_view(p__16904){
var map__16905 = p__16904;
var map__16905__$1 = (((((!((map__16905 == null))))?(((((map__16905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16905):map__16905);
var muted_QMARK_ = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"muted?","muted?",-692634461));
var unread_messages_QMARK_ = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"unread-messages?","unread-messages?",443079948));
var unread_mentions_count = cljs.core.get.call(null,map__16905__$1,new cljs.core.Keyword(null,"unread-mentions-count","unread-mentions-count",792393408));
if(cljs.core.truth_(muted_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword("i","muted","i/muted",1275108862),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50)], null)], null);
} else {
if((unread_mentions_count > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.counter.counter.counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328)], null),unread_mentions_count], null);
} else {
if(cljs.core.truth_(unread_messages_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.common.unread_grey_dot.view.unread_grey_dot,new cljs.core.Keyword(null,"unviewed-messages-public","unviewed-messages-public",1176278963)], null);
} else {
return null;
}
}
}
});
quo2.components.community.community_list_view.communities_list_view_item = (function quo2$components$community$community_list_view$communities_list_view_item(props,p__16907){
var map__16908 = p__16907;
var map__16908__$1 = (((((!((map__16908 == null))))?(((((map__16908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16908):map__16908);
var name = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var locked_QMARK_ = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var status = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var muted_QMARK_ = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"muted?","muted?",-692634461));
var unread_messages_QMARK_ = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"unread-messages?","unread-messages?",443079948));
var unread_mentions_count = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"unread-mentions-count","unread-mentions-count",792393408));
var community_icon = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"community-icon","community-icon",-1849088700));
var tokens = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.community.style.community_card.call(null,(16)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(12)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16)], null)], null),props),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.community.style.detail_container], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.community.style.list_info_container.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.icon.community_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),community_icon], null),(32)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"community-name-text","community-name-text",-126462657),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(muted_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_60):null)], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.community_view.community_stats_column,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list-view","list-view",-358977901)], null)], null)], null),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"gated","gated",-361446323)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.community_view.permission_tag_container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locked?","locked?",995448757),locked_QMARK_,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.community_list_view.notification_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"muted?","muted?",-692634461),muted_QMARK_,new cljs.core.Keyword(null,"unread-mentions-count","unread-mentions-count",792393408),unread_mentions_count,new cljs.core.Keyword(null,"unread-messages?","unread-messages?",443079948),unread_messages_QMARK_], null)], null))], null)], null)], null)], null);
});
quo2.components.community.community_list_view.communities_membership_list_item = (function quo2$components$community$community_list_view$communities_membership_list_item(props,p__16911){
var map__16912 = p__16911;
var map__16912__$1 = (((((!((map__16912 == null))))?(((((map__16912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16912):map__16912);
var unviewed_mentions_count = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"unviewed-mentions-count","unviewed-mentions-count",-1694575239));
var muted_QMARK_ = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"muted?","muted?",-692634461));
var images = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"images","images",1757475080));
var name = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var unviewed_messages_count = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"unviewed-messages-count","unviewed-messages-count",1193193773));
var style = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var locked_QMARK_ = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var tokens = cljs.core.get.call(null,map__16912__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_95),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(12)], null)], null),props),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,cljs.core.merge.call(null,quo2.components.community.style.membership_info_container.call(null),style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.icon.community_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),images], null),(32)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(12),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"chat-name-text","chat-name-text",870789618),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200)], null),name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(16)], null),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"gated","gated",-361446323)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.community_view.permission_tag_container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locked?","locked?",995448757),locked_QMARK_,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.community_list_view.notification_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"muted?","muted?",-692634461),muted_QMARK_,new cljs.core.Keyword(null,"unread-mentions-count","unread-mentions-count",792393408),unviewed_mentions_count,new cljs.core.Keyword(null,"unread-messages?","unread-messages?",443079948),(unviewed_messages_count > (0))], null)], null))], null)], null)], null);
});
Object.defineProperty(module.exports, "notification_view", { enumerable: false, get: function() { return quo2.components.community.community_list_view.notification_view; } });
Object.defineProperty(module.exports, "communities_list_view_item", { enumerable: false, get: function() { return quo2.components.community.community_list_view.communities_list_view_item; } });
Object.defineProperty(module.exports, "communities_membership_list_item", { enumerable: false, get: function() { return quo2.components.community.community_list_view.communities_membership_list_item; } });
//# sourceMappingURL=quo2.components.community.community_list_view.js.map
