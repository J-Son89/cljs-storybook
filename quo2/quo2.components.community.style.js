var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.community.style.js");

goog.provide('quo2.components.community.style');
quo2.components.community.style.community_card = (function quo2$components$community$style$community_card(radius){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(2)], null),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),radius,new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.shadow,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(1),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90)], null);
});
quo2.components.community.style.detail_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo2.components.community.style.stats_count_container = (function quo2$components$community$style$stats_count_container(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(16)], null);
});
quo2.components.community.style.card_stats_container = (function quo2$components$community$style$card_stats_container(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
});
quo2.components.community.style.list_stats_container = (function quo2$components$community$style$list_stats_container(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
});
quo2.components.community.style.card_stats_position = (function quo2$components$community$style$card_stats_position(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(116),new cljs.core.Keyword(null,"right","right",-452581833),(12),new cljs.core.Keyword(null,"left","left",-399115937),(12)], null);
});
quo2.components.community.style.community_tags_position = (function quo2$components$community$style$community_tags_position(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(154),new cljs.core.Keyword(null,"right","right",-452581833),(12),new cljs.core.Keyword(null,"left","left",-399115937),(12)], null);
});
quo2.components.community.style.card_view_content_container = (function quo2$components$community$style$card_view_content_container(padding_horizontal){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],[(0),(40),(16),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90),(16),(0),new cljs.core.Keyword(null,"absolute","absolute",1655386478),padding_horizontal,(20),(0)]);
});
quo2.components.community.style.card_view_chat_icon = (function quo2$components$community$style$card_view_chat_icon(icon_size){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(48),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(- (icon_size / (2))),new cljs.core.Keyword(null,"left","left",-399115937),(icon_size / (4)),new cljs.core.Keyword(null,"padding","padding",1660304693),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90)], null);
});
quo2.components.community.style.list_info_container = (function quo2$components$community$style$list_info_container(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8)], null);
});
quo2.components.community.style.membership_info_container = (function quo2$components$community$style$membership_info_container(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"height","height",1025178622),(48)], null);
});
quo2.components.community.style.community_title_description_container = (function quo2$components$community$style$community_title_description_container(margin_top){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null);
});
quo2.components.community.style.community_cover_container = (function quo2$components$community$style$community_cover_container(height){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),(20),new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),(20),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.primary_50_opa_20], null);
});
quo2.components.community.style.permission_tag_styles = (function quo2$components$community$style$permission_tag_styles(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(8),new cljs.core.Keyword(null,"right","right",-452581833),(8)], null);
});
quo2.components.community.style.token_tag_spacing = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.community.style.token_row = (function quo2$components$community$style$token_row(padding_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),(cljs.core.truth_(padding_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12)], null):null));
});
quo2.components.community.style.token_row_or_text = (function quo2$components$community$style$token_row_or_text(padding_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null),(cljs.core.truth_(padding_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(12)], null):null));
});
quo2.components.community.style.token_row_or_border = (function quo2$components$community$style$token_row_or_border(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80)], null);
});
quo2.components.community.style.channel_action_touch = (function quo2$components$community$style$channel_action_touch(big_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(cljs.core.truth_(big_QMARK_)?(216):(104))], null);
});
quo2.components.community.style.channel_action = (function quo2$components$community$style$channel_action(color){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"height","height",1025178622),(102),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.custom_color(color,(50),(10)),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null);
});
quo2.components.community.style.channel_action_row = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
Object.defineProperty(module.exports, "community_card", { enumerable: false, get: function() { return quo2.components.community.style.community_card; } });
Object.defineProperty(module.exports, "token_row", { enumerable: false, get: function() { return quo2.components.community.style.token_row; } });
Object.defineProperty(module.exports, "community_cover_container", { enumerable: false, get: function() { return quo2.components.community.style.community_cover_container; } });
Object.defineProperty(module.exports, "membership_info_container", { enumerable: false, get: function() { return quo2.components.community.style.membership_info_container; } });
Object.defineProperty(module.exports, "channel_action_row", { enumerable: false, get: function() { return quo2.components.community.style.channel_action_row; } });
Object.defineProperty(module.exports, "detail_container", { enumerable: false, get: function() { return quo2.components.community.style.detail_container; } });
Object.defineProperty(module.exports, "card_stats_position", { enumerable: false, get: function() { return quo2.components.community.style.card_stats_position; } });
Object.defineProperty(module.exports, "card_stats_container", { enumerable: false, get: function() { return quo2.components.community.style.card_stats_container; } });
Object.defineProperty(module.exports, "community_title_description_container", { enumerable: false, get: function() { return quo2.components.community.style.community_title_description_container; } });
Object.defineProperty(module.exports, "token_tag_spacing", { enumerable: false, get: function() { return quo2.components.community.style.token_tag_spacing; } });
Object.defineProperty(module.exports, "token_row_or_text", { enumerable: false, get: function() { return quo2.components.community.style.token_row_or_text; } });
Object.defineProperty(module.exports, "card_view_chat_icon", { enumerable: false, get: function() { return quo2.components.community.style.card_view_chat_icon; } });
Object.defineProperty(module.exports, "channel_action_touch", { enumerable: false, get: function() { return quo2.components.community.style.channel_action_touch; } });
Object.defineProperty(module.exports, "list_info_container", { enumerable: false, get: function() { return quo2.components.community.style.list_info_container; } });
Object.defineProperty(module.exports, "list_stats_container", { enumerable: false, get: function() { return quo2.components.community.style.list_stats_container; } });
Object.defineProperty(module.exports, "card_view_content_container", { enumerable: false, get: function() { return quo2.components.community.style.card_view_content_container; } });
Object.defineProperty(module.exports, "stats_count_container", { enumerable: false, get: function() { return quo2.components.community.style.stats_count_container; } });
Object.defineProperty(module.exports, "permission_tag_styles", { enumerable: false, get: function() { return quo2.components.community.style.permission_tag_styles; } });
Object.defineProperty(module.exports, "token_row_or_border", { enumerable: false, get: function() { return quo2.components.community.style.token_row_or_border; } });
Object.defineProperty(module.exports, "channel_action", { enumerable: false, get: function() { return quo2.components.community.style.channel_action; } });
Object.defineProperty(module.exports, "community_tags_position", { enumerable: false, get: function() { return quo2.components.community.style.community_tags_position; } });
//# sourceMappingURL=quo2.components.community.style.js.map
