var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./oops.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.record_audio.record_audio.style.js");
require("./quo2.foundations.colors.js");
require("./quo2.components.record_audio.soundtrack.view.js");
require("./react_native.core.js");
require("./reagent.core.js");
require("./quo2.components.markdown.text.js");
require("./goog.string.string.js");
require("./react_native.audio_toolkit.js");
require("./taoensso.timbre.js");
require("./quo2.components.record_audio.record_audio.buttons.record_button_big.js");
require("./quo2.components.record_audio.record_audio.buttons.send_button.js");
require("./quo2.components.record_audio.record_audio.buttons.lock_button.js");
require("./quo2.components.record_audio.record_audio.buttons.delete_button.js");
require("./quo2.components.record_audio.record_audio.buttons.record_button.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.record_audio.record_audio.view.js");

goog.provide('quo2.components.record_audio.record_audio.view');
quo2.components.record_audio.record_audio.view.min_audio_duration_ms = (500);
quo2.components.record_audio.record_audio.view.max_audio_duration_ms = (120000);
quo2.components.record_audio.record_audio.view.metering_interval = (100);
quo2.components.record_audio.record_audio.view.base_filename = "am";
quo2.components.record_audio.record_audio.view.default_format = ".aac";
quo2.components.record_audio.record_audio.view.min_touch_duration = (150);
quo2.components.record_audio.record_audio.view.record_button_area_big = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(56),new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"x","x",2099068185),(64),new cljs.core.Keyword(null,"y","y",-1757859776),(64)], null);
quo2.components.record_audio.record_audio.view.record_button_area = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(48),new cljs.core.Keyword(null,"height","height",1025178622),(48),new cljs.core.Keyword(null,"x","x",2099068185),(68),new cljs.core.Keyword(null,"y","y",-1757859776),(68)], null);
quo2.components.record_audio.record_audio.view.delete_button_area = (function quo2$components$record_audio$record_audio$view$delete_button_area(p__19282){
var map__19283 = p__19282;
var map__19283__$1 = (((((!((map__19283 == null))))?(((((map__19283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19283):map__19283);
var active_QMARK_ = cljs.core.get.call(null,map__19283__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var reviewing_audio_QMARK_ = cljs.core.get.call(null,map__19283__$1,new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(active_QMARK_)?(72):(cljs.core.truth_(reviewing_audio_QMARK_)?(32):(82)
)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(reviewing_audio_QMARK_)?(32):(56)),new cljs.core.Keyword(null,"x","x",2099068185),(cljs.core.truth_(active_QMARK_)?(-16):(cljs.core.truth_(reviewing_audio_QMARK_)?(36):(-32)
)),new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.truth_(active_QMARK_)?(64):(cljs.core.truth_(reviewing_audio_QMARK_)?(76):(70)
))], null);
});
quo2.components.record_audio.record_audio.view.lock_button_area = (function quo2$components$record_audio$record_audio$view$lock_button_area(p__19291){
var map__19292 = p__19291;
var map__19292__$1 = (((((!((map__19292 == null))))?(((((map__19292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19292):map__19292);
var active_QMARK_ = cljs.core.get.call(null,map__19292__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(active_QMARK_)?(72):(100)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(active_QMARK_)?(72):(102)),new cljs.core.Keyword(null,"x","x",2099068185),(-32),new cljs.core.Keyword(null,"y","y",-1757859776),(-32)], null);
});
quo2.components.record_audio.record_audio.view.send_button_area = (function quo2$components$record_audio$record_audio$view$send_button_area(p__19294){
var map__19295 = p__19294;
var map__19295__$1 = (((((!((map__19295 == null))))?(((((map__19295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19295):map__19295);
var active_QMARK_ = cljs.core.get.call(null,map__19295__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var reviewing_audio_QMARK_ = cljs.core.get.call(null,map__19295__$1,new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(reviewing_audio_QMARK_)?(32):(56)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(active_QMARK_)?(72):(cljs.core.truth_(reviewing_audio_QMARK_)?(47):(92)
)),new cljs.core.Keyword(null,"x","x",2099068185),(cljs.core.truth_(reviewing_audio_QMARK_)?(76):(32)),new cljs.core.Keyword(null,"y","y",-1757859776),(cljs.core.truth_(active_QMARK_)?(-16):(cljs.core.truth_(reviewing_audio_QMARK_)?(76):(-32)
))], null);
});
quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_ = (function quo2$components$record_audio$record_audio$view$touch_inside_area_QMARK_(p__19304,p__19305){
var map__19308 = p__19304;
var map__19308__$1 = (((((!((map__19308 == null))))?(((((map__19308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19308):map__19308);
var location_x = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"location-x","location-x",-1825261579));
var location_y = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"location-y","location-y",-1757799930));
var ignore_min_y_QMARK_ = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967));
var ignore_max_y_QMARK_ = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992));
var ignore_min_x_QMARK_ = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999));
var ignore_max_x_QMARK_ = cljs.core.get.call(null,map__19308__$1,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673));
var map__19309 = p__19305;
var map__19309__$1 = (((((!((map__19309 == null))))?(((((map__19309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19309):map__19309);
var width = cljs.core.get.call(null,map__19309__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__19309__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__19309__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19309__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var max_x = (x + width);
var max_y = (y + height);
var and__4115__auto__ = (function (){var and__4115__auto__ = (function (){var or__4126__auto__ = ignore_min_x_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (location_x >= x);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = ignore_max_x_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (location_x <= max_x);
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = (function (){var or__4126__auto__ = ignore_min_y_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (location_y >= y);
}
})();
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = ignore_max_y_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (location_y <= max_y);
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
quo2.components.record_audio.record_audio.view.f_recording_bar = (function quo2$components$record_audio$record_audio$view$f_recording_bar(recording_length_ms,ready_to_delete_QMARK_){
var fill_percentage = ((recording_length_ms * (100)) / quo2.components.record_audio.record_audio.view.max_audio_duration_ms);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.recording_bar_container.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.recording_bar.call(null,fill_percentage,ready_to_delete_QMARK_)], null)], null)], null);
});
quo2.components.record_audio.record_audio.view.f_time_counter = (function quo2$components$record_audio$record_audio$view$f_time_counter(recording_QMARK_,recording_length_ms,ready_to_delete_QMARK_,reviewing_audio_QMARK_,audio_current_time_ms){
var s = cljs.core.quot.call(null,(cljs.core.truth_(recording_QMARK_)?recording_length_ms:audio_current_time_ms),(1000));
var time_str = goog.string.format("%02d:%02d",cljs.core.quot.call(null,s,(60)),cljs.core.mod.call(null,s,(60)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.timer_container.call(null,reviewing_audio_QMARK_)], null),(cljs.core.truth_(reviewing_audio_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.timer_circle.call(null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),(cljs.core.truth_(ready_to_delete_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.timer_text.call(null)], null):null)),time_str], null)], null);
});
quo2.components.record_audio.record_audio.view.f_play_button = (function quo2$components$record_audio$record_audio$view$f_play_button(playing_audio_QMARK_,player_ref,playing_timer,audio_current_time_ms,seeking_audio_QMARK_){
var on_play = (function (){
cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,true);

return cljs.core.reset_BANG_.call(null,playing_timer,setInterval((function (){
var current_time = react_native.audio_toolkit.get_player_current_time.call(null,cljs.core.deref.call(null,player_ref));
var player_state = react_native.audio_toolkit.get_state.call(null,cljs.core.deref.call(null,player_ref));
var playing_QMARK_ = cljs.core._EQ_.call(null,player_state,react_native.audio_toolkit.PLAYING);
if(((playing_QMARK_) && (cljs.core.not(cljs.core.deref.call(null,seeking_audio_QMARK_))) && ((current_time > (0))))){
return cljs.core.reset_BANG_.call(null,audio_current_time_ms,current_time);
} else {
return null;
}
}),(100)));
});
var on_pause = (function (){
cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,playing_timer))){
clearInterval(cljs.core.deref.call(null,playing_timer));

cljs.core.reset_BANG_.call(null,playing_timer,null);
} else {
}

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,128,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] toggle play / pause - success"], null);
}),null)),null,-1290093203);
});
var on_press = (function (){
return react_native.audio_toolkit.toggle_playpause_player.call(null,cljs.core.deref.call(null,player_ref),on_play,on_pause,(function (p1__19345_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] toggle play / pause - error: ",p1__19345_SHARP_], null);
}),null)),null,639344504);
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.play_button.call(null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(cljs.core.truth_(cljs.core.deref.call(null,playing_audio_QMARK_))?new cljs.core.Keyword("i","pause","i/pause",-2095325585):new cljs.core.Keyword("i","play","i/play",-580417129)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white)], null)], null)], null);
});
quo2.components.record_audio.record_audio.view.record_audio = (function quo2$components$record_audio$record_audio$view$record_audio(p__19353){
var map__19354 = p__19353;
var map__19354__$1 = (((((!((map__19354 == null))))?(((((map__19354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19354):map__19354);
var on_reviewing_audio = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-reviewing-audio","on-reviewing-audio",-1988160647));
var on_init = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-init","on-init",-1723361030));
var on_cancel = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var on_request_record_audio_permission = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-request-record-audio-permission","on-request-record-audio-permission",-846812897));
var record_audio_permission_granted = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"record-audio-permission-granted","record-audio-permission-granted",31174019));
var audio_file = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"audio-file","audio-file",449215652));
var on_send = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-send","on-send",-1300273456));
var on_lock = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-lock","on-lock",-343088720));
var on_check_audio_permissions = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-check-audio-permissions","on-check-audio-permissions",-1042968111));
var on_start_recording = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"on-start-recording","on-start-recording",1530208248));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),(function (){
var recording_QMARK_ = reagent.core.atom.call(null,false);
var locked_QMARK_ = reagent.core.atom.call(null,false);
var ready_to_send_QMARK_ = reagent.core.atom.call(null,false);
var ready_to_lock_QMARK_ = reagent.core.atom.call(null,false);
var ready_to_delete_QMARK_ = reagent.core.atom.call(null,false);
var reviewing_audio_QMARK_ = reagent.core.atom.call(null,(!((audio_file == null))));
var playing_audio_QMARK_ = reagent.core.atom.call(null,false);
var recording_length_ms = reagent.core.atom.call(null,(0));
var audio_current_time_ms = reagent.core.atom.call(null,(0));
var seeking_audio_QMARK_ = reagent.core.atom.call(null,false);
var force_show_controls_QMARK_ = reagent.core.atom.call(null,(!((audio_file == null))));
var clear_timeout = cljs.core.atom.call(null,null);
var record_button_at_initial_position_QMARK_ = cljs.core.atom.call(null,true);
var record_button_is_animating_QMARK_ = cljs.core.atom.call(null,false);
var idle_QMARK_ = cljs.core.atom.call(null,false);
var recorder_ref = cljs.core.atom.call(null,null);
var player_ref = cljs.core.atom.call(null,null);
var touch_active_QMARK_ = cljs.core.atom.call(null,false);
var recording_timer = cljs.core.atom.call(null,null);
var playing_timer = cljs.core.atom.call(null,null);
var output_file = cljs.core.atom.call(null,audio_file);
var reached_max_duration_QMARK_ = cljs.core.atom.call(null,false);
var touch_timestamp = cljs.core.atom.call(null,null);
var touch_identifier = cljs.core.atom.call(null,null);
var disabled_QMARK_ = cljs.core.atom.call(null,false);
var app_state_listener = cljs.core.atom.call(null,null);
var rec_options = cljs.core.merge.call(null,react_native.audio_toolkit.default_recorder_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),[quo2.components.record_audio.record_audio.view.base_filename,cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now()),quo2.components.record_audio.record_audio.view.default_format].join(''),new cljs.core.Keyword(null,"meteringInterval","meteringInterval",-1652526208),quo2.components.record_audio.record_audio.view.metering_interval], null));
var destroy_player = (function (){
react_native.audio_toolkit.destroy_player.call(null,cljs.core.deref.call(null,player_ref));

return cljs.core.reset_BANG_.call(null,player_ref,null);
});
var reload_player = (function (audio_file__$1){
if(cljs.core.truth_(cljs.core.deref.call(null,player_ref))){
destroy_player();
} else {
}

cljs.core.reset_BANG_.call(null,player_ref,react_native.audio_toolkit.new_player.call(null,(function (){var or__4126__auto__ = audio_file__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(rec_options);
}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"autoDestroy","autoDestroy",-2062053792),false,new cljs.core.Keyword(null,"continuesToPlayInBackground","continuesToPlayInBackground",1796374720),false,new cljs.core.Keyword(null,"category","category",-593092832),react_native.audio_toolkit.PLAYBACK], null),(function (){
cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,playing_timer))){
clearInterval(cljs.core.deref.call(null,playing_timer));

cljs.core.reset_BANG_.call(null,playing_timer,null);

cljs.core.reset_BANG_.call(null,audio_current_time_ms,(0));

return cljs.core.reset_BANG_.call(null,seeking_audio_QMARK_,false);
} else {
return null;
}
})));

return react_native.audio_toolkit.prepare_player.call(null,cljs.core.deref.call(null,player_ref),(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,206,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] prepare player - success"], null);
}),null)),null,192606730);
}),(function (p1__19346_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,207,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] prepare player - error: ",p1__19346_SHARP_], null);
}),null)),null,-1274475961);
}));
});
var destroy_recorder = (function (){
react_native.audio_toolkit.destroy_recorder.call(null,cljs.core.deref.call(null,recorder_ref));

return cljs.core.reset_BANG_.call(null,recorder_ref,null);
});
var reload_recorder = (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,recorder_ref))){
destroy_recorder();
} else {
}

return cljs.core.reset_BANG_.call(null,recorder_ref,react_native.audio_toolkit.new_recorder.call(null,rec_options,(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,218,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] new recorder - on meter"], null);
}),null)),null,324207199);
}),(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] new recorder - on ended"], null);
}),null)),null,-728992212);
})));
});
var reset_recorder = (function (){
cljs.core.reset_BANG_.call(null,recording_QMARK_,false);

cljs.core.reset_BANG_.call(null,reviewing_audio_QMARK_,false);

cljs.core.reset_BANG_.call(null,locked_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_send_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_delete_QMARK_,false);

cljs.core.reset_BANG_.call(null,audio_current_time_ms,(0));

cljs.core.reset_BANG_.call(null,recording_length_ms,(0));

cljs.core.reset_BANG_.call(null,seeking_audio_QMARK_,false);

cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,false);

cljs.core.reset_BANG_.call(null,touch_active_QMARK_,false);

cljs.core.reset_BANG_.call(null,reached_max_duration_QMARK_,false);

cljs.core.reset_BANG_.call(null,output_file,null);

cljs.core.reset_BANG_.call(null,idle_QMARK_,false);

cljs.core.reset_BANG_.call(null,record_button_is_animating_QMARK_,false);

cljs.core.reset_BANG_.call(null,record_button_at_initial_position_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref.call(null,clear_timeout))){
clearTimeout(cljs.core.deref.call(null,clear_timeout));

cljs.core.reset_BANG_.call(null,clear_timeout,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,recording_timer))){
clearInterval(cljs.core.deref.call(null,recording_timer));

cljs.core.reset_BANG_.call(null,recording_timer,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,playing_timer))){
clearInterval(cljs.core.deref.call(null,playing_timer));

cljs.core.reset_BANG_.call(null,playing_timer,null);
} else {
}

return reload_recorder();
});
var on_start_should_set_responder = (function (e){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref.call(null,locked_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.deref.call(null,idle_QMARK_);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (e == null);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return cljs.core.deref.call(null,disabled_QMARK_);
}
}
}
})())){
} else {
var pressed_record_button_QMARK__19589 = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),(function (){var target_obj_19360 = e;
var _STAR_runtime_state_STAR__orig_val__19365 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19366 = oops.state.prepare_state.call(null,target_obj_19360,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19366);

try{var next_obj_19361 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19360,(0),"nativeEvent",true,true,false))?(target_obj_19360["nativeEvent"]):null);
var next_obj_19362 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19361,(0),"locationX",true,true,false))?(next_obj_19361["locationX"]):null);
return next_obj_19362;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19365);
}})(),new cljs.core.Keyword(null,"location-y","location-y",-1757799930),(function (){var target_obj_19377 = e;
var _STAR_runtime_state_STAR__orig_val__19388 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19389 = oops.state.prepare_state.call(null,target_obj_19377,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19389);

try{var next_obj_19382 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19377,(0),"nativeEvent",true,true,false))?(target_obj_19377["nativeEvent"]):null);
var next_obj_19384 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19382,(0),"locationY",true,true,false))?(next_obj_19382["locationY"]):null);
return next_obj_19384;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19388);
}})(),new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),false,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),false,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),false,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),false], null),quo2.components.record_audio.record_audio.view.record_button_area);
var new_recorder_19590 = react_native.audio_toolkit.new_recorder.call(null,rec_options,(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] new recorder - on meter"], null);
}),null)),null,-548063713);
}),(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,262,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] new recorder - on ended"], null);
}),null)),null,438723451);
}));
cljs.core.reset_BANG_.call(null,touch_timestamp,(function (){var target_obj_19397 = e;
var _STAR_runtime_state_STAR__orig_val__19401 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19402 = oops.state.prepare_state.call(null,target_obj_19397,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19402);

try{var next_obj_19399 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19397,(0),"nativeEvent",true,true,false))?(target_obj_19397["nativeEvent"]):null);
var next_obj_19400 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19399,(0),"timestamp",true,true,false))?(next_obj_19399["timestamp"]):null);
return next_obj_19400;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19401);
}})());

cljs.core.reset_BANG_.call(null,touch_identifier,(function (){var target_obj_19406 = e;
var _STAR_runtime_state_STAR__orig_val__19409 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19410 = oops.state.prepare_state.call(null,target_obj_19406,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19410);

try{var next_obj_19407 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19406,(0),"nativeEvent",true,true,false))?(target_obj_19406["nativeEvent"]):null);
var next_obj_19408 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19407,(0),"identifier",true,true,false))?(next_obj_19407["identifier"]):null);
return next_obj_19408;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19409);
}})());

if(cljs.core.truth_(cljs.core.deref.call(null,reviewing_audio_QMARK_))){
} else {
if(cljs.core.truth_(record_audio_permission_granted)){
if(cljs.core.not(cljs.core.deref.call(null,idle_QMARK_))){
cljs.core.reset_BANG_.call(null,recording_QMARK_,pressed_record_button_QMARK__19589);
} else {
}

if(cljs.core.truth_(pressed_record_button_QMARK__19589)){
cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref.call(null,recording_timer))){
clearInterval(cljs.core.deref.call(null,recording_timer));
} else {
}

cljs.core.reset_BANG_.call(null,output_file,null);

cljs.core.reset_BANG_.call(null,recorder_ref,new_recorder_19590);

react_native.audio_toolkit.start_recording.call(null,new_recorder_19590,(function (){
cljs.core.reset_BANG_.call(null,audio_current_time_ms,(0));

cljs.core.reset_BANG_.call(null,recording_timer,setInterval((function (){
if((cljs.core.deref.call(null,recording_length_ms) < quo2.components.record_audio.record_audio.view.max_audio_duration_ms)){
return cljs.core.reset_BANG_.call(null,recording_length_ms,(cljs.core.deref.call(null,recording_length_ms) + quo2.components.record_audio.record_audio.view.metering_interval));
} else {
cljs.core.reset_BANG_.call(null,reached_max_duration_QMARK_,cljs.core.not(cljs.core.deref.call(null,locked_QMARK_)));

cljs.core.reset_BANG_.call(null,reviewing_audio_QMARK_,true);

cljs.core.reset_BANG_.call(null,idle_QMARK_,false);

cljs.core.reset_BANG_.call(null,locked_QMARK_,false);

cljs.core.reset_BANG_.call(null,recording_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_send_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_delete_QMARK_,false);

react_native.audio_toolkit.stop_recording.call(null,new_recorder_19590,(function (){
cljs.core.reset_BANG_.call(null,output_file,react_native.audio_toolkit.get_recorder_file_path.call(null,new_recorder_19590));

reload_player(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,301,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - success"], null);
}),null)),null,-1808441318);
}),(function (p1__19347_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,302,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - error: ",p1__19347_SHARP_], null);
}),null)),null,-2031628496);
}));

setTimeout((function (){
return cljs.core.reset_BANG_.call(null,idle_QMARK_,false);
}),(1000));

clearInterval(cljs.core.deref.call(null,recording_timer));

cljs.core.reset_BANG_.call(null,recording_length_ms,(0));

if(cljs.core.truth_(on_reviewing_audio)){
return on_reviewing_audio.call(null,react_native.audio_toolkit.get_recorder_file_path.call(null,new_recorder_19590));
} else {
return null;
}
}
}),quo2.components.record_audio.record_audio.view.metering_interval));

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,310,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] start recording - success"], null);
}),null)),null,184587850);
}),(function (p1__19348_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,311,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] start recording - error: ",p1__19348_SHARP_], null);
}),null)),null,-350096104);
}));

if(cljs.core.truth_(on_start_recording)){
on_start_recording.call(null);
} else {
}
} else {
}
} else {
if(cljs.core.truth_(on_request_record_audio_permission)){
on_request_record_audio_permission.call(null);
} else {
}
}
}

if(cljs.core.truth_(record_audio_permission_granted)){
cljs.core.reset_BANG_.call(null,touch_active_QMARK_,true);
} else {
}
}

return ((cljs.core.not(cljs.core.deref.call(null,idle_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,disabled_QMARK_))));
});
var on_responder_move = (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,locked_QMARK_))){
return null;
} else {
var location_x = (function (){var target_obj_19452 = e;
var _STAR_runtime_state_STAR__orig_val__19464 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19465 = oops.state.prepare_state.call(null,target_obj_19452,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19465);

try{var next_obj_19454 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19452,(0),"nativeEvent",true,true,false))?(target_obj_19452["nativeEvent"]):null);
var next_obj_19457 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19454,(0),"locationX",true,true,false))?(next_obj_19454["locationX"]):null);
return next_obj_19457;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19464);
}})();
var location_y = (function (){var target_obj_19467 = e;
var _STAR_runtime_state_STAR__orig_val__19470 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19471 = oops.state.prepare_state.call(null,target_obj_19467,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19471);

try{var next_obj_19468 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19467,(0),"nativeEvent",true,true,false))?(target_obj_19467["nativeEvent"]):null);
var next_obj_19469 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19468,(0),"locationY",true,true,false))?(next_obj_19468["locationY"]):null);
return next_obj_19469;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19470);
}})();
var page_x = (function (){var target_obj_19473 = e;
var _STAR_runtime_state_STAR__orig_val__19478 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19480 = oops.state.prepare_state.call(null,target_obj_19473,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19480);

try{var next_obj_19474 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19473,(0),"nativeEvent",true,true,false))?(target_obj_19473["nativeEvent"]):null);
var next_obj_19475 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19474,(0),"pageX",true,true,false))?(next_obj_19474["pageX"]):null);
return next_obj_19475;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19478);
}})();
var page_y = (function (){var target_obj_19485 = e;
var _STAR_runtime_state_STAR__orig_val__19488 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19489 = oops.state.prepare_state.call(null,target_obj_19485,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19489);

try{var next_obj_19486 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19485,(0),"nativeEvent",true,true,false))?(target_obj_19485["nativeEvent"]):null);
var next_obj_19487 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19486,(0),"pageY",true,true,false))?(next_obj_19486["pageY"]):null);
return next_obj_19487;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19488);
}})();
var identifier = (function (){var target_obj_19498 = e;
var _STAR_runtime_state_STAR__orig_val__19507 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19508 = oops.state.prepare_state.call(null,target_obj_19498,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19508);

try{var next_obj_19499 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19498,(0),"nativeEvent",true,true,false))?(target_obj_19498["nativeEvent"]):null);
var next_obj_19504 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19499,(0),"identifier",true,true,false))?(next_obj_19499["identifier"]):null);
return next_obj_19504;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19507);
}})();
var moved_to_send_button_QMARK_ = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),location_x,new cljs.core.Keyword(null,"location-y","location-y",-1757799930),location_y,new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),true,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),false,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),false,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),true], null),quo2.components.record_audio.record_audio.view.send_button_area.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.deref.call(null,ready_to_send_QMARK_),new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608),false], null)));
var moved_to_delete_button_QMARK_ = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),location_x,new cljs.core.Keyword(null,"location-y","location-y",-1757799930),location_y,new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),false,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),true,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),true,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),false], null),quo2.components.record_audio.record_audio.view.delete_button_area.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.deref.call(null,ready_to_delete_QMARK_),new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608),false], null)));
var moved_to_lock_button_QMARK_ = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),location_x,new cljs.core.Keyword(null,"location-y","location-y",-1757799930),location_y,new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),false,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),false,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),false,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),false], null),quo2.components.record_audio.record_audio.view.lock_button_area.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.deref.call(null,ready_to_lock_QMARK_)], null)));
var moved_to_record_button_QMARK_ = (function (){var and__4115__auto__ = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),location_x,new cljs.core.Keyword(null,"location-y","location-y",-1757799930),location_y,new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),false,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),false,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),false,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),false], null),quo2.components.record_audio.record_audio.view.record_button_area_big);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not_EQ_.call(null,location_x,page_x)) && (cljs.core.not_EQ_.call(null,location_y,page_y)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core._EQ_.call(null,identifier,cljs.core.deref.call(null,touch_identifier))){
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (function (){var and__4115__auto__ = moved_to_record_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,ready_to_lock_QMARK_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not(cljs.core.deref.call(null,locked_QMARK_))){
var and__4115__auto__ = moved_to_lock_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,record_button_at_initial_position_QMARK_);
} else {
return and__4115__auto__;
}
} else {
return false;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_send_QMARK_))){
return cljs.core.deref.call(null,recording_QMARK_);
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,moved_to_lock_button_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (function (){var and__4115__auto__ = moved_to_record_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,ready_to_delete_QMARK_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = moved_to_delete_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,record_button_at_initial_position_QMARK_);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_lock_QMARK_))){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_send_QMARK_))){
return cljs.core.deref.call(null,recording_QMARK_);
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,ready_to_delete_QMARK_,moved_to_delete_button_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (function (){var and__4115__auto__ = moved_to_record_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,ready_to_send_QMARK_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = moved_to_send_button_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,record_button_at_initial_position_QMARK_);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_lock_QMARK_))){
if(cljs.core.not(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
return cljs.core.deref.call(null,recording_QMARK_);
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,ready_to_send_QMARK_,moved_to_send_button_QMARK_);
} else {
return null;
}
}
}
} else {
return null;
}
}
});
var on_responder_release = (function (e){
if(((cljs.core.not(cljs.core.deref.call(null,idle_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,reached_max_duration_QMARK_))))){
var touch_area_19597 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location-x","location-x",-1825261579),(function (){var target_obj_19556 = e;
var _STAR_runtime_state_STAR__orig_val__19559 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19560 = oops.state.prepare_state.call(null,target_obj_19556,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19560);

try{var next_obj_19557 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19556,(0),"nativeEvent",true,true,false))?(target_obj_19556["nativeEvent"]):null);
var next_obj_19558 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19557,(0),"locationX",true,true,false))?(next_obj_19557["locationX"]):null);
return next_obj_19558;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19559);
}})(),new cljs.core.Keyword(null,"location-y","location-y",-1757799930),(function (){var target_obj_19563 = e;
var _STAR_runtime_state_STAR__orig_val__19566 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19567 = oops.state.prepare_state.call(null,target_obj_19563,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19567);

try{var next_obj_19564 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19563,(0),"nativeEvent",true,true,false))?(target_obj_19563["nativeEvent"]):null);
var next_obj_19565 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19564,(0),"locationY",true,true,false))?(next_obj_19564["locationY"]):null);
return next_obj_19565;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19566);
}})(),new cljs.core.Keyword(null,"ignore-min-y?","ignore-min-y?",255610967),false,new cljs.core.Keyword(null,"ignore-max-y?","ignore-max-y?",27214992),false,new cljs.core.Keyword(null,"ignore-min-x?","ignore-min-x?",-698693999),false,new cljs.core.Keyword(null,"ignore-max-x?","ignore-max-x?",1395953673),false], null);
var on_record_button_QMARK__19598 = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,touch_area_19597,quo2.components.record_audio.record_audio.view.record_button_area_big);
var on_send_button_QMARK__19599 = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,touch_area_19597,quo2.components.record_audio.record_audio.view.send_button_area.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608),true], null)));
var on_delete_button_QMARK__19600 = quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_.call(null,touch_area_19597,quo2.components.record_audio.record_audio.view.delete_button_area.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"reviewing-audio?","reviewing-audio?",1191308608),true], null)));
var release_touch_timestamp_19601 = (function (){var target_obj_19575 = e;
var _STAR_runtime_state_STAR__orig_val__19578 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19579 = oops.state.prepare_state.call(null,target_obj_19575,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19579);

try{var next_obj_19576 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19575,(0),"nativeEvent",true,true,false))?(target_obj_19575["nativeEvent"]):null);
var next_obj_19577 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_19576,(0),"timestamp",true,true,false))?(next_obj_19576["timestamp"]):null);
return next_obj_19577;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19578);
}})();
var touch_timestamp_diff_19602 = (release_touch_timestamp_19601 - cljs.core.deref.call(null,touch_timestamp));
var audio_length_19603 = cljs.core.deref.call(null,recording_length_ms);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,reviewing_audio_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return on_send_button_QMARK__19599;
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,reviewing_audio_QMARK_,false);

cljs.core.reset_BANG_.call(null,audio_current_time_ms,(0));

cljs.core.reset_BANG_.call(null,force_show_controls_QMARK_,false);

if(cljs.core.truth_(on_send)){
on_send.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-path","file-path",-2005501162),cljs.core.deref.call(null,output_file),new cljs.core.Keyword(null,"duration","duration",1444101068),(react_native.audio_toolkit.get_player_duration.call(null,cljs.core.deref.call(null,player_ref)) | (0))], null));
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,player_ref))){
react_native.audio_toolkit.stop_playing.call(null,cljs.core.deref.call(null,player_ref),(function (){
destroy_player();

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,433,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop playing - success"], null);
}),null)),null,450023661);
}),(function (p1__19349_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,434,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop playing - error: ",p1__19349_SHARP_], null);
}),null)),null,1742521587);
}));
} else {
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,reviewing_audio_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return on_delete_button_QMARK__19600;
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,reviewing_audio_QMARK_,false);

cljs.core.reset_BANG_.call(null,audio_current_time_ms,(0));

cljs.core.reset_BANG_.call(null,force_show_controls_QMARK_,false);

destroy_player();

if(cljs.core.truth_(on_cancel)){
on_cancel.call(null);
} else {
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,ready_to_lock_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref.call(null,record_button_is_animating_QMARK_));
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,locked_QMARK_,true);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

if(cljs.core.truth_(on_lock)){
on_lock.call(null);
} else {
}
} else {
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref.call(null,reviewing_audio_QMARK_)))?(function (){var or__4126__auto__ = on_record_button_QMARK__19598;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.not(cljs.core.deref.call(null,ready_to_delete_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,ready_to_lock_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,ready_to_send_QMARK_))));
}
})():false))){
cljs.core.reset_BANG_.call(null,disabled_QMARK_,(touch_timestamp_diff_19602 <= quo2.components.record_audio.record_audio.view.min_touch_duration));

setTimeout((function (){
if((cljs.core.deref.call(null,recording_length_ms) >= quo2.components.record_audio.record_audio.view.min_audio_duration_ms)){
cljs.core.reset_BANG_.call(null,reviewing_audio_QMARK_,true);

cljs.core.reset_BANG_.call(null,idle_QMARK_,false);

if(cljs.core.truth_(on_reviewing_audio)){
on_reviewing_audio.call(null,react_native.audio_toolkit.get_recorder_file_path.call(null,cljs.core.deref.call(null,recorder_ref)));
} else {
}
} else {
if(cljs.core.truth_(on_cancel)){
on_cancel.call(null);
} else {
}

cljs.core.reset_BANG_.call(null,idle_QMARK_,true);
}

cljs.core.reset_BANG_.call(null,locked_QMARK_,false);

cljs.core.reset_BANG_.call(null,recording_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

react_native.audio_toolkit.stop_recording.call(null,cljs.core.deref.call(null,recorder_ref),(function (){
cljs.core.reset_BANG_.call(null,output_file,react_native.audio_toolkit.get_recorder_file_path.call(null,cljs.core.deref.call(null,recorder_ref)));

if((audio_length_19603 >= quo2.components.record_audio.record_audio.view.min_audio_duration_ms)){
reload_player(null);
} else {
}

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,475,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - success"], null);
}),null)),null,433355386);
}),(function (p1__19350_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,476,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - error: ",p1__19350_SHARP_], null);
}),null)),null,1941986401);
}));

setTimeout((function (){
return cljs.core.reset_BANG_.call(null,idle_QMARK_,false);
}),(1000));

clearInterval(cljs.core.deref.call(null,recording_timer));

cljs.core.reset_BANG_.call(null,recording_length_ms,(0));

return cljs.core.reset_BANG_.call(null,disabled_QMARK_,false);
}),(((touch_timestamp_diff_19602 > quo2.components.record_audio.record_audio.view.min_touch_duration))?(0):(250)));
} else {
if(((cljs.core.not(cljs.core.deref.call(null,locked_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,reviewing_audio_QMARK_))) && (cljs.core.not(cljs.core.deref.call(null,record_button_is_animating_QMARK_))))){
cljs.core.reset_BANG_.call(null,disabled_QMARK_,(touch_timestamp_diff_19602 <= quo2.components.record_audio.record_audio.view.min_touch_duration));

setTimeout((function (){
return react_native.audio_toolkit.stop_recording.call(null,cljs.core.deref.call(null,recorder_ref),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_send_QMARK_))){
if(cljs.core.truth_(on_send)){
on_send.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-path","file-path",-2005501162),react_native.audio_toolkit.get_recorder_file_path.call(null,cljs.core.deref.call(null,recorder_ref)),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,recording_length_ms)], null));
} else {
}
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,ready_to_delete_QMARK_))){
if(cljs.core.truth_(on_cancel)){
on_cancel.call(null);
} else {
}
} else {
}
}

cljs.core.reset_BANG_.call(null,recording_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_send_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_delete_QMARK_,false);

cljs.core.reset_BANG_.call(null,ready_to_lock_QMARK_,false);

cljs.core.reset_BANG_.call(null,idle_QMARK_,true);

setTimeout((function (){
return cljs.core.reset_BANG_.call(null,idle_QMARK_,false);
}),(1000));

clearInterval(cljs.core.deref.call(null,recording_timer));

cljs.core.reset_BANG_.call(null,recording_length_ms,(0));

cljs.core.reset_BANG_.call(null,disabled_QMARK_,false);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"quo2.components.record-audio.record-audio.view",null,507,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - success"], null);
}),null)),null,1476183864);
}),(function (p1__19351_SHARP_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"quo2.components.record-audio.record-audio.view",null,508,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[record-audio] stop recording - error: ",p1__19351_SHARP_], null);
}),null)),null,640946801);
}));
}),(((touch_timestamp_diff_19602 > quo2.components.record_audio.record_audio.view.min_touch_duration))?(0):(250)));
} else {
}
}
}
}
}

cljs.core.reset_BANG_.call(null,touch_active_QMARK_,false);
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,reached_max_duration_QMARK_))){
cljs.core.reset_BANG_.call(null,reached_max_duration_QMARK_,false);
} else {
}

return cljs.core.reset_BANG_.call(null,touch_timestamp,null);
});
return (function (){
react_native.core.use_effect.call(null,(function (){
if(cljs.core.truth_(on_check_audio_permissions)){
on_check_audio_permissions.call(null);
} else {
}

if(cljs.core.truth_(on_init)){
on_init.call(null,reset_recorder);
} else {
}

if(cljs.core.truth_(audio_file)){
var filename_19604 = cljs.core.last.call(null,clojure.string.split.call(null,audio_file,"/"));
reload_player(filename_19604);
} else {
}

cljs.core.reset_BANG_.call(null,app_state_listener,react_native.core.app_state.addEventListener("change",(function (p1__19352_SHARP_){
if(cljs.core._EQ_.call(null,p1__19352_SHARP_,"background")){
return cljs.core.reset_BANG_.call(null,playing_audio_QMARK_,false);
} else {
return null;
}
})));

return (function (){
return cljs.core.deref.call(null,app_state_listener).remove();
});
}));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.bar_container,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-none","box-none",699925338)], null),(cljs.core.truth_(cljs.core.deref.call(null,reviewing_audio_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.view.f_play_button,playing_audio_QMARK_,player_ref,playing_timer,audio_current_time_ms,seeking_audio_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.soundtrack.view.f_soundtrack,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio-current-time-ms","audio-current-time-ms",942128002),audio_current_time_ms,new cljs.core.Keyword(null,"player-ref","player-ref",-113668224),cljs.core.deref.call(null,player_ref),new cljs.core.Keyword(null,"seeking-audio?","seeking-audio?",942747933),seeking_audio_QMARK_], null)], null)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref.call(null,recording_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref.call(null,reviewing_audio_QMARK_);
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.view.f_time_counter,cljs.core.deref.call(null,recording_QMARK_),cljs.core.deref.call(null,recording_length_ms),cljs.core.deref.call(null,ready_to_delete_QMARK_),cljs.core.deref.call(null,reviewing_audio_QMARK_),cljs.core.deref.call(null,audio_current_time_ms)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,recording_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.view.f_recording_bar,cljs.core.deref.call(null,recording_length_ms),cljs.core.deref.call(null,ready_to_delete_QMARK_)], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),"record-audio",new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.record_audio.record_audio.style.button_container,new cljs.core.Keyword(null,"hit-slop","hit-slop",-1010555951),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(-70),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"box-only","box-only",-565325006),new cljs.core.Keyword(null,"on-start-should-set-responder","on-start-should-set-responder",1885702001),on_start_should_set_responder,new cljs.core.Keyword(null,"on-responder-move","on-responder-move",-676884554),on_responder_move,new cljs.core.Keyword(null,"on-responder-release","on-responder-release",249430978),on_responder_release], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.buttons.delete_button.f_delete_button,recording_QMARK_,ready_to_delete_QMARK_,reviewing_audio_QMARK_,cljs.core.deref.call(null,force_show_controls_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.buttons.lock_button.f_lock_button,recording_QMARK_,ready_to_lock_QMARK_,locked_QMARK_], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.buttons.send_button.f_send_button,recording_QMARK_,ready_to_send_QMARK_,reviewing_audio_QMARK_,cljs.core.deref.call(null,force_show_controls_QMARK_)], null),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.buttons.record_button_big.f_record_button_big,recording_QMARK_,ready_to_send_QMARK_,ready_to_lock_QMARK_,ready_to_delete_QMARK_,record_button_is_animating_QMARK_,record_button_at_initial_position_QMARK_,locked_QMARK_,reviewing_audio_QMARK_,recording_timer,recording_length_ms,clear_timeout,touch_active_QMARK_,recorder_ref,reload_recorder,idle_QMARK_,on_send,on_cancel], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.record_audio.record_audio.buttons.record_button.f_record_button,recording_QMARK_,reviewing_audio_QMARK_], null)], null)], null);
});
})], null);
});
Object.defineProperty(module.exports, "f_play_button", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.f_play_button; } });
Object.defineProperty(module.exports, "record_audio", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.record_audio; } });
Object.defineProperty(module.exports, "min_audio_duration_ms", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.min_audio_duration_ms; } });
Object.defineProperty(module.exports, "base_filename", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.base_filename; } });
Object.defineProperty(module.exports, "record_button_area", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.record_button_area; } });
Object.defineProperty(module.exports, "record_button_area_big", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.record_button_area_big; } });
Object.defineProperty(module.exports, "touch_inside_area_QMARK_", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.touch_inside_area_QMARK_; } });
Object.defineProperty(module.exports, "f_recording_bar", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.f_recording_bar; } });
Object.defineProperty(module.exports, "metering_interval", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.metering_interval; } });
Object.defineProperty(module.exports, "default_format", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.default_format; } });
Object.defineProperty(module.exports, "send_button_area", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.send_button_area; } });
Object.defineProperty(module.exports, "f_time_counter", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.f_time_counter; } });
Object.defineProperty(module.exports, "max_audio_duration_ms", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.max_audio_duration_ms; } });
Object.defineProperty(module.exports, "delete_button_area", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.delete_button_area; } });
Object.defineProperty(module.exports, "min_touch_duration", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.min_touch_duration; } });
Object.defineProperty(module.exports, "lock_button_area", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.view.lock_button_area; } });
//# sourceMappingURL=quo2.components.record_audio.record_audio.view.js.map
