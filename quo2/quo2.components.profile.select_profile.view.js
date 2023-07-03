var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.profile.select_profile.style.js");
require("./react_native.core.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.profile.select_profile.view.js");

goog.provide('quo2.components.profile.select_profile.view');
quo2.components.profile.select_profile.view.on_change_handler = (function quo2$components$profile$select_profile$view$on_change_handler(selected_QMARK_,on_change){
cljs.core.swap_BANG_.call(null,selected_QMARK_,cljs.core.not);

if(cljs.core.truth_(on_change)){
return on_change.call(null,cljs.core.deref.call(null,selected_QMARK_));
} else {
return null;
}
});
/**
 * Options
 * - `default-selected?` The default selected state. Use when the component is not controlled.
 * - `selected?` Selected state. Use when the component is controlled.
 * - `name` Full name
 * - `profile-picture` Profile picture
 * - `customization-color` Customization color
 * - `(on-change selected?)` On change event handler
 * 
 */
quo2.components.profile.select_profile.view.view = (function quo2$components$profile$select_profile$view$view(p__19166){
var map__19168 = p__19166;
var map__19168__$1 = (((((!((map__19168 == null))))?(((((map__19168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19168):map__19168);
var default_selected_QMARK_ = cljs.core.get.call(null,map__19168__$1,new cljs.core.Keyword(null,"default-selected?","default-selected?",1900063812));
var internal_selected_QMARK_ = reagent.core.atom.call(null,(function (){var or__4126__auto__ = default_selected_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
})());
return (function (p__19172){
var map__19173 = p__19172;
var map__19173__$1 = (((((!((map__19173 == null))))?(((((map__19173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19173):map__19173);
var selected_QMARK_ = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var profile_picture = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366));
var ring_background = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"ring-background","ring-background",-1752774668));
var name = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var customization_color = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"turquoise","turquoise",876845491));
var on_change = cljs.core.get.call(null,map__19173__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var avatar_image_key = (cljs.core.truth_(profile_picture)?new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366):new cljs.core.Keyword(null,"ring-background","ring-background",-1752774668));
var picture = (function (){var or__4126__auto__ = profile_picture;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ring_background;
}
})();
if((((!((selected_QMARK_ == null)))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_selected_QMARK_),selected_QMARK_)))){
cljs.core.reset_BANG_.call(null,internal_selected_QMARK_,selected_QMARK_);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.select_profile.style.container.call(null,customization_color,cljs.core.deref.call(null,internal_selected_QMARK_)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return quo2.components.profile.select_profile.view.on_change_handler.call(null,internal_selected_QMARK_,on_change);
}),new cljs.core.Keyword(null,"active-opacity","active-opacity",-726267404),(1),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"select-profile","select-profile",1737801386)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.select_profile.style.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"full-name","full-name",408178550),name,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384),avatar_image_key,picture])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.select_profile.style.select_radio.call(null,cljs.core.deref.call(null,internal_selected_QMARK_))], null),(cljs.core.truth_(cljs.core.deref.call(null,internal_selected_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.select_profile.style.select_radio_inner], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"heading-2","heading-2",-1189317102),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.select_profile.style.profile_name], null),name], null)], null);
});
});
Object.defineProperty(module.exports, "on_change_handler", { enumerable: false, get: function() { return quo2.components.profile.select_profile.view.on_change_handler; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.profile.select_profile.view.view; } });
//# sourceMappingURL=quo2.components.profile.select_profile.view.js.map
