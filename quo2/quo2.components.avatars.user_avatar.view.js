var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.avatars.user_avatar.style.js");
require("./quo2.components.markdown.text.js");
require("./react_native.core.js");
require("./react_native.fast_image.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.avatars.user_avatar.view.js");

goog.provide('quo2.components.avatars.user_avatar.view');
quo2.components.avatars.user_avatar.view.trim_whitespace = (function quo2$components$avatars$user_avatar$view$trim_whitespace(s){
return clojure.string.join.call(null," ",clojure.string.split.call(null,clojure.string.trim.call(null,s),/\s+/));
});
quo2.components.avatars.user_avatar.view.extract_initials = (function quo2$components$avatars$user_avatar$view$extract_initials(full_name,amount_initials){
var upper_case_first_letter = cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.first);
var names_list = clojure.string.split.call(null,quo2.components.avatars.user_avatar.view.trim_whitespace.call(null,full_name)," ");
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,names_list),"")){
return "";
} else {
return clojure.string.join.call(null,cljs.core.take.call(null,amount_initials,cljs.core.map.call(null,upper_case_first_letter,names_list)));
}
});
quo2.components.avatars.user_avatar.view.initials_avatar = (function quo2$components$avatars$user_avatar$view$initials_avatar(p__16610){
var map__16611 = p__16610;
var map__16611__$1 = (((((!((map__16611 == null))))?(((((map__16611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16611):map__16611);
var full_name = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"full-name","full-name",408178550));
var size = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var draw_ring_QMARK_ = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"draw-ring?","draw-ring?",1149056764));
var customization_color = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
var font_size = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null));
var amount_initials = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"xxs","xxs",-16722349),null,new cljs.core.Keyword(null,"xxxs","xxxs",511924189),null], null), null).call(null,size))?(1):(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"initials-avatar","initials-avatar",759969786),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.avatars.user_avatar.style.initials_avatar.call(null,size,draw_ring_QMARK_,customization_color)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.avatars.user_avatar.style.initials_avatar_text,new cljs.core.Keyword(null,"size","size",1098693007),font_size,new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),quo2.components.avatars.user_avatar.view.extract_initials.call(null,full_name,amount_initials)], null)], null);
});
quo2.components.avatars.user_avatar.view.valid_ring_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"big","big",903550151),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
/**
 * If no `profile-picture` is given, draws the initials based on the `full-name` and
 *   uses `ring-background` to display the ring behind the initials when given. Otherwise,
 *   shows the `profile-picture` which already comes with the ring drawn.
 */
quo2.components.avatars.user_avatar.view.user_avatar = (function quo2$components$avatars$user_avatar$view$user_avatar(p__16616){
var map__16617 = p__16616;
var map__16617__$1 = (((((!((map__16617 == null))))?(((((map__16617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16617):map__16617);
var static_QMARK_ = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822));
var muted_QMARK_ = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"muted?","muted?",-692634461));
var online_QMARK_ = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"online?","online?",-1144837492),true);
var status_indicator_QMARK_ = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),true);
var profile_picture = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366));
var size = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"big","big",903550151));
var customization_color = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"turquoise","turquoise",876845491));
var ring_background = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"ring-background","ring-background",-1752774668));
var full_name = cljs.core.get.call(null,map__16617__$1,new cljs.core.Keyword(null,"full-name","full-name",408178550));
var full_name__$1 = (function (){var or__4126__auto__ = full_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "empty name";
}
})();
var draw_ring_QMARK_ = (cljs.core.truth_(muted_QMARK_)?null:(function (){var and__4115__auto__ = ring_background;
if(cljs.core.truth_(and__4115__auto__)){
return quo2.components.avatars.user_avatar.view.valid_ring_sizes.call(null,size);
} else {
return and__4115__auto__;
}
})());
var outer_styles = quo2.components.avatars.user_avatar.style.outer.call(null,size);
var image_view = (cljs.core.truth_(static_QMARK_)?react_native.core.image:react_native.fast_image.fast_image);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),outer_styles,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"user-avatar","user-avatar",-432709400)], null),(function (){var temp__5735__auto__ = (function (){var or__4126__auto__ = profile_picture;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ring_background;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var image = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [image_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),(cljs.core.truth_(draw_ring_QMARK_)?new cljs.core.Keyword(null,"ring-background","ring-background",-1752774668):new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366)),new cljs.core.Keyword(null,"style","style",-496642736),outer_styles,new cljs.core.Keyword(null,"source","source",-433931539),image], null)], null);
} else {
return null;
}
})(),(cljs.core.truth_(profile_picture)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.initials_avatar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-name","full-name",408178550),full_name__$1,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"draw-ring?","draw-ring?",1149056764),draw_ring_QMARK_,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color], null)], null)),(cljs.core.truth_(status_indicator_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.avatars.user_avatar.style.dot.call(null,size,draw_ring_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"inner-status-indicator-dot","inner-status-indicator-dot",1876612622),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.avatars.user_avatar.style.inner_dot.call(null,size,online_QMARK_)], null)], null)], null):null)], null);
});
Object.defineProperty(module.exports, "trim_whitespace", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.view.trim_whitespace; } });
Object.defineProperty(module.exports, "extract_initials", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.view.extract_initials; } });
Object.defineProperty(module.exports, "initials_avatar", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.view.initials_avatar; } });
Object.defineProperty(module.exports, "valid_ring_sizes", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.view.valid_ring_sizes; } });
Object.defineProperty(module.exports, "user_avatar", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.view.user_avatar; } });
//# sourceMappingURL=quo2.components.avatars.user_avatar.view.js.map
