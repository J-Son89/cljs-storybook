var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.info.info_message.js");

goog.provide('quo2.components.info.info_message');
quo2.components.info.info_message.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"success","success",1890645906),quo2.foundations.colors.success_50,new cljs.core.Keyword(null,"error","error",-978969032),quo2.foundations.colors.danger_50], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"success","success",1890645906),quo2.foundations.colors.success_60,new cljs.core.Keyword(null,"error","error",-978969032),quo2.foundations.colors.danger_60], null)], null);
quo2.components.info.info_message.get_color = (function quo2$components$info$info_message$get_color(key){
return cljs.core.get_in.call(null,quo2.components.info.info_message.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.theme.get_theme.call(null),key], null));
});
/**
 * [info-message opts "message"]
 *   opts
 *   {:type           :default/:success/:error
 * :size           :default/:tiny
 * :icon           :i/info       ;; info message icon
 * :text-color     colors/white  ;; text color override
 * :icon-color     colors/white  ;; icon color override
 * :no-icon-color? false         ;; disable tint color for icon
 */
quo2.components.info.info_message.info_message = (function quo2$components$info$info_message$info_message(p__16675,message){
var map__16676 = p__16675;
var map__16676__$1 = (((((!((map__16676 == null))))?(((((map__16676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16676):map__16676);
var type = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var icon = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text_color = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var icon_color = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var no_icon_color_QMARK_ = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"no-icon-color?","no-icon-color?",1566108528));
var style = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var weight = ((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword(null,"regular","regular",-1153375582):new cljs.core.Keyword(null,"medium","medium",-1864319384));
var icon_size = ((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"default","default",-1987822328)))?(16):(12));
var size__$1 = ((cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103):new cljs.core.Keyword(null,"label","label",1718410804));
var text_color__$1 = (function (){var or__4126__auto__ = text_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.components.info.info_message.get_color.call(null,type);
}
})();
var icon_color__$1 = (function (){var or__4126__auto__ = icon_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return text_color__$1;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null),style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color__$1,new cljs.core.Keyword(null,"no-color","no-color",-309925745),no_icon_color_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),text_color__$1,new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(4)], null)], null),message], null)], null);
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.info.info_message.themes; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.info.info_message.get_color; } });
Object.defineProperty(module.exports, "info_message", { enumerable: false, get: function() { return quo2.components.info.info_message.info_message; } });
//# sourceMappingURL=quo2.components.info.info_message.js.map
