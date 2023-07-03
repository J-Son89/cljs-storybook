var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.record_audio.soundtrack.style.js");
require("./quo2.foundations.colors.js");
require("./react_native.audio_toolkit.js");
require("./taoensso.timbre.js");
require("./react_native.platform.js");
require("./react_native.slider.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.record_audio.soundtrack.view.js");

goog.provide('quo2.components.record_audio.soundtrack.view');
quo2.components.record_audio.soundtrack.view.thumb_light = require("../resources/images/icons2/12x12/thumb-light.png");
quo2.components.record_audio.soundtrack.view.thumb_dark = require("../resources/images/icons2/12x12/thumb-dark.png");
quo2.components.record_audio.soundtrack.view.f_soundtrack = (function quo2$components$record_audio$soundtrack$view$f_soundtrack(p__19266){
var map__19267 = p__19266;
var map__19267__$1 = (((((!((map__19267 == null))))?(((((map__19267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19267):map__19267);
var audio_current_time_ms = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"audio-current-time-ms","audio-current-time-ms",942128002));
var player_ref = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"player-ref","player-ref",-113668224));
var style = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var seeking_audio_QMARK_ = cljs.core.get.call(null,map__19267__$1,new cljs.core.Keyword(null,"seeking-audio?","seeking-audio?",942747933));
var audio_duration_ms = react_native.audio_toolkit.get_player_duration.call(null,player_ref);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.slider.slider,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"test-ID","test-ID",734294159),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"maximum-value","maximum-value",-1843056175),new cljs.core.Keyword(null,"minimum-track-tint-color","minimum-track-tint-color",-1764608527),new cljs.core.Keyword(null,"on-sliding-start","on-sliding-start",34774705),new cljs.core.Keyword(null,"maximum-track-tint-color","maximum-track-tint-color",-998410221),new cljs.core.Keyword(null,"on-sliding-complete","on-sliding-complete",-137152908),new cljs.core.Keyword(null,"thumb-image","thumb-image",1880794396),new cljs.core.Keyword(null,"minimum-value","minimum-value",-1087347874)],[(function (p1__19264_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,seeking_audio_QMARK_))){
return cljs.core.reset_BANG_.call(null,audio_current_time_ms,p1__19264_SHARP_);
} else {
return null;
}
}),cljs.core.deref.call(null,audio_current_time_ms),"soundtrack",cljs.core.merge.call(null,quo2.components.record_audio.soundtrack.style.player_slider_container.call(null),(function (){var or__4126__auto__ = style;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),audio_duration_ms,quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.primary_50,quo2.foundations.colors.primary_60),(function (){
return cljs.core.reset_BANG_.call(null,seeking_audio_QMARK_,true);
}),quo2.foundations.colors.theme_colors.call(null,((react_native.platform.ios_QMARK_)?quo2.foundations.colors.neutral_20:quo2.foundations.colors.neutral_40),((react_native.platform.ios_QMARK_)?quo2.foundations.colors.neutral_80:quo2.foundations.colors.neutral_60)),(function (seek_time){
cljs.core.reset_BANG_.call(null,seeking_audio_QMARK_,false);

return react_native.audio_toolkit.seek_player.call(null,player_ref,seek_time,(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.soundtrack.view",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] on seek - seek time: ",seek_time], null);
}),null)),null,-1299494554);
}),(function (p1__19262_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.soundtrack.view",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] on seek - error: ",p1__19262_SHARP_], null);
}),null)),null,-1945184461);
}));
}),((quo2.foundations.colors.dark_QMARK_.call(null))?quo2.components.record_audio.soundtrack.view.thumb_dark:quo2.components.record_audio.soundtrack.view.thumb_light),(0)])], null)], null);
});
Object.defineProperty(module.exports, "thumb_light", { enumerable: false, get: function() { return quo2.components.record_audio.soundtrack.view.thumb_light; } });
Object.defineProperty(module.exports, "thumb_dark", { enumerable: false, get: function() { return quo2.components.record_audio.soundtrack.view.thumb_dark; } });
Object.defineProperty(module.exports, "f_soundtrack", { enumerable: false, get: function() { return quo2.components.record_audio.soundtrack.view.f_soundtrack; } });
//# sourceMappingURL=quo2.components.record_audio.soundtrack.view.js.map
