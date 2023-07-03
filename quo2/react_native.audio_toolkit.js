var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$$react_native_community$audio_toolkit.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.audio_toolkit.js");

goog.provide('react_native.audio_toolkit');
react_native.audio_toolkit.PLAYING = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.PLAYING;
react_native.audio_toolkit.PAUSED = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.PAUSED;
react_native.audio_toolkit.RECORDING = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.RECORDING;
react_native.audio_toolkit.PREPARED = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.PREPARED;
react_native.audio_toolkit.IDLE = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.IDLE;
react_native.audio_toolkit.ERROR = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.ERROR;
react_native.audio_toolkit.DESTROYED = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.DESTROYED;
react_native.audio_toolkit.SEEKING = shadow.js.shim.module$$react_native_community$audio_toolkit.MediaStates.SEEKING;
react_native.audio_toolkit.PLAYBACK = shadow.js.shim.module$$react_native_community$audio_toolkit.PlaybackCategories.Playback;
react_native.audio_toolkit.default_recorder_options = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"recording.aac",new cljs.core.Keyword(null,"bitrate","bitrate",-1215050921),(32000),new cljs.core.Keyword(null,"channels","channels",1132759174),(1),new cljs.core.Keyword(null,"sampleRate","sampleRate",-541273751),(22050),new cljs.core.Keyword(null,"quality","quality",147850199),"medium",new cljs.core.Keyword(null,"meteringInterval","meteringInterval",-1652526208),(50),new cljs.core.Keyword(null,"category","category",-593092832),react_native.audio_toolkit.PLAYBACK], null);
react_native.audio_toolkit.get_state = (function react_native$audio_toolkit$get_state(player_recorder){
if(cljs.core.truth_(player_recorder)){
return player_recorder.state;
} else {
return null;
}
});
react_native.audio_toolkit.new_recorder = (function react_native$audio_toolkit$new_recorder(options,on_meter,on_ended){
var recorder = (new shadow.js.shim.module$$react_native_community$audio_toolkit.Recorder(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(options),cljs.core.clj__GT_js.call(null,options)));
if(cljs.core.truth_(on_meter)){
recorder.on("meter",on_meter);
} else {
}

if(cljs.core.truth_(on_ended)){
return recorder.on("ended",on_ended);
} else {
return null;
}
});
react_native.audio_toolkit.new_player = (function react_native$audio_toolkit$new_player(audio,options,on_ended){
var player = (new shadow.js.shim.module$$react_native_community$audio_toolkit.Player(audio,cljs.core.clj__GT_js.call(null,options)));
if(cljs.core.truth_(on_ended)){
return player.on("ended",on_ended);
} else {
return null;
}
});
react_native.audio_toolkit.prepare_player = (function react_native$audio_toolkit$prepare_player(player,on_prepared,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPrepare;
} else {
return and__4115__auto__;
}
})())){
return player.prepare((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_prepared.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.prepare_recorder = (function react_native$audio_toolkit$prepare_recorder(recorder,on_prepared,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = recorder;
if(cljs.core.truth_(and__4115__auto__)){
return recorder.canPrepare;
} else {
return and__4115__auto__;
}
})())){
return recorder.prepare((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_prepared.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.start_recording = (function react_native$audio_toolkit$start_recording(recorder,on_start,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = recorder;
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = recorder.canRecord;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return recorder.canPrepare;
}
} else {
return and__4115__auto__;
}
})())){
return recorder.record((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_start.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.stop_recording = (function react_native$audio_toolkit$stop_recording(recorder,on_stop,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = recorder;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([react_native.audio_toolkit.PAUSED,react_native.audio_toolkit.RECORDING]).call(null,react_native.audio_toolkit.get_state.call(null,recorder));
} else {
return and__4115__auto__;
}
})())){
return recorder.stop((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_stop.call(null);
}
}));
} else {
return on_stop.call(null);
}
});
react_native.audio_toolkit.pause_recording = (function react_native$audio_toolkit$pause_recording(recorder,on_pause,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = recorder;
if(cljs.core.truth_(and__4115__auto__)){
return recorder.isRecording;
} else {
return and__4115__auto__;
}
})())){
return recorder.pause((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_pause.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.start_playing = (function react_native$audio_toolkit$start_playing(player,on_start,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
})())){
return player.play((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_start.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.stop_playing = (function react_native$audio_toolkit$stop_playing(player,on_stop,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.isPlaying;
} else {
return and__4115__auto__;
}
})())){
return player.stop((function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_stop.call(null);
}
}));
} else {
return on_stop.call(null);
}
});
react_native.audio_toolkit.get_recorder_file_path = (function react_native$audio_toolkit$get_recorder_file_path(recorder){
if(cljs.core.truth_(recorder)){
return recorder.fsPath;
} else {
return null;
}
});
react_native.audio_toolkit.get_player_duration = (function react_native$audio_toolkit$get_player_duration(player){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
})())){
return player.duration;
} else {
return null;
}
});
react_native.audio_toolkit.get_player_current_time = (function react_native$audio_toolkit$get_player_current_time(player){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
})())){
return player.currentTime;
} else {
return null;
}
});
react_native.audio_toolkit.set_player_wake_lock = (function react_native$audio_toolkit$set_player_wake_lock(player,wake_lock_QMARK_){
if(cljs.core.truth_(player)){
return (player.wakeLock = wake_lock_QMARK_);
} else {
return null;
}
});
react_native.audio_toolkit.toggle_playpause_player = (function react_native$audio_toolkit$toggle_playpause_player(player,on_play,on_pause,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
})())){
return player.playPause((function (error,pause_QMARK_){
if(cljs.core.truth_(error)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error.err,new cljs.core.Keyword(null,"message","message",-406056002),error.message], null));
} else {
if(cljs.core.truth_(pause_QMARK_)){
return on_pause.call(null);
} else {
return on_play.call(null);
}
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.seek_player = (function react_native$audio_toolkit$seek_player(player,value,on_seek,on_error){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
})())){
return player.seek(value,(function (err){
if(cljs.core.truth_(err)){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err.err,new cljs.core.Keyword(null,"message","message",-406056002),err.message], null));
} else {
return on_seek.call(null);
}
}));
} else {
return null;
}
});
react_native.audio_toolkit.can_play_QMARK_ = (function react_native$audio_toolkit$can_play_QMARK_(player){
var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return player.canPlay;
} else {
return and__4115__auto__;
}
});
react_native.audio_toolkit.destroy_recorder = (function react_native$audio_toolkit$destroy_recorder(recorder){
return react_native.audio_toolkit.stop_recording.call(null,recorder,(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = recorder;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,react_native.audio_toolkit.get_state.call(null,recorder),react_native.audio_toolkit.DESTROYED);
} else {
return and__4115__auto__;
}
})())){
return recorder.destroy();
} else {
return null;
}
}),(function (){
return cljs.core.List.EMPTY;
}));
});
react_native.audio_toolkit.destroy_player = (function react_native$audio_toolkit$destroy_player(player){
return react_native.audio_toolkit.stop_playing.call(null,player,(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = player;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,react_native.audio_toolkit.get_state.call(null,player),react_native.audio_toolkit.IDLE);
} else {
return and__4115__auto__;
}
})())){
return player.destroy();
} else {
return null;
}
}),(function (){
return cljs.core.List.EMPTY;
}));
});
Object.defineProperty(module.exports, "SEEKING", { enumerable: false, get: function() { return react_native.audio_toolkit.SEEKING; } });
Object.defineProperty(module.exports, "get_recorder_file_path", { enumerable: false, get: function() { return react_native.audio_toolkit.get_recorder_file_path; } });
Object.defineProperty(module.exports, "can_play_QMARK_", { enumerable: false, get: function() { return react_native.audio_toolkit.can_play_QMARK_; } });
Object.defineProperty(module.exports, "get_player_duration", { enumerable: false, get: function() { return react_native.audio_toolkit.get_player_duration; } });
Object.defineProperty(module.exports, "destroy_player", { enumerable: false, get: function() { return react_native.audio_toolkit.destroy_player; } });
Object.defineProperty(module.exports, "toggle_playpause_player", { enumerable: false, get: function() { return react_native.audio_toolkit.toggle_playpause_player; } });
Object.defineProperty(module.exports, "set_player_wake_lock", { enumerable: false, get: function() { return react_native.audio_toolkit.set_player_wake_lock; } });
Object.defineProperty(module.exports, "DESTROYED", { enumerable: false, get: function() { return react_native.audio_toolkit.DESTROYED; } });
Object.defineProperty(module.exports, "PLAYING", { enumerable: false, get: function() { return react_native.audio_toolkit.PLAYING; } });
Object.defineProperty(module.exports, "IDLE", { enumerable: false, get: function() { return react_native.audio_toolkit.IDLE; } });
Object.defineProperty(module.exports, "new_recorder", { enumerable: false, get: function() { return react_native.audio_toolkit.new_recorder; } });
Object.defineProperty(module.exports, "PLAYBACK", { enumerable: false, get: function() { return react_native.audio_toolkit.PLAYBACK; } });
Object.defineProperty(module.exports, "PAUSED", { enumerable: false, get: function() { return react_native.audio_toolkit.PAUSED; } });
Object.defineProperty(module.exports, "RECORDING", { enumerable: false, get: function() { return react_native.audio_toolkit.RECORDING; } });
Object.defineProperty(module.exports, "destroy_recorder", { enumerable: false, get: function() { return react_native.audio_toolkit.destroy_recorder; } });
Object.defineProperty(module.exports, "get_state", { enumerable: false, get: function() { return react_native.audio_toolkit.get_state; } });
Object.defineProperty(module.exports, "seek_player", { enumerable: false, get: function() { return react_native.audio_toolkit.seek_player; } });
Object.defineProperty(module.exports, "ERROR", { enumerable: false, get: function() { return react_native.audio_toolkit.ERROR; } });
Object.defineProperty(module.exports, "stop_recording", { enumerable: false, get: function() { return react_native.audio_toolkit.stop_recording; } });
Object.defineProperty(module.exports, "get_player_current_time", { enumerable: false, get: function() { return react_native.audio_toolkit.get_player_current_time; } });
Object.defineProperty(module.exports, "new_player", { enumerable: false, get: function() { return react_native.audio_toolkit.new_player; } });
Object.defineProperty(module.exports, "start_recording", { enumerable: false, get: function() { return react_native.audio_toolkit.start_recording; } });
Object.defineProperty(module.exports, "prepare_player", { enumerable: false, get: function() { return react_native.audio_toolkit.prepare_player; } });
Object.defineProperty(module.exports, "stop_playing", { enumerable: false, get: function() { return react_native.audio_toolkit.stop_playing; } });
Object.defineProperty(module.exports, "default_recorder_options", { enumerable: false, get: function() { return react_native.audio_toolkit.default_recorder_options; } });
Object.defineProperty(module.exports, "pause_recording", { enumerable: false, get: function() { return react_native.audio_toolkit.pause_recording; } });
Object.defineProperty(module.exports, "start_playing", { enumerable: false, get: function() { return react_native.audio_toolkit.start_playing; } });
Object.defineProperty(module.exports, "PREPARED", { enumerable: false, get: function() { return react_native.audio_toolkit.PREPARED; } });
Object.defineProperty(module.exports, "prepare_recorder", { enumerable: false, get: function() { return react_native.audio_toolkit.prepare_recorder; } });
//# sourceMappingURL=react_native.audio_toolkit.js.map
