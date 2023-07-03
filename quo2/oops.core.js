var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
require("./goog.object.object.js");
require("./oops.sdefs.js");
require("./oops.state.js");
require("./oops.config.js");
require("./oops.messages.js");
require("./oops.helpers.js");
require("./oops.schema.js");
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

$CLJS.SHADOW_ENV.setLoaded("oops.core.js");

goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__16377 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__16377)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__16377)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__16377)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16377)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__16392 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__16392)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__16392)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__16392)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16392)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16471 = arguments.length;
var i__4737__auto___16472 = (0);
while(true){
if((i__4737__auto___16472 < len__4736__auto___16471)){
args__4742__auto__.push((arguments[i__4737__auto___16472]));

var G__16473 = (i__4737__auto___16472 + (1));
i__4737__auto___16472 = G__16473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__16398){
var vec__16400 = p__16398;
var info = cljs.core.nth.call(null,vec__16400,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__16405_16474 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__16405_16474)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__16405_16474)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__16405_16474)){
} else {
if(cljs.core._EQ_.call(null,null,G__16405_16474)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16405_16474)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq16395){
var G__16396 = cljs.core.first.call(null,seq16395);
var seq16395__$1 = cljs.core.next.call(null,seq16395);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16396,seq16395__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5737__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_16406 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_16406);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_16407 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_16407,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_16409 = oops.config.get_child_factory.call(null);
var child_factory_16409__$1 = (function (){var G__16410 = child_factory_16409;
var G__16410__$1 = (((G__16410 instanceof cljs.core.Keyword))?G__16410.fqn:null);
switch (G__16410__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_16409;

}
})();

var child_obj_16408 = child_factory_16409__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_16408);
} else {
}

return child_obj_16408;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_16413 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_16413);

return selector_path_16413;
} else {
var selector_path_16414 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_16414);

return selector_path_16414;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_16415 = temp__5739__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_16415);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_16424 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_16424,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_16417 = (function (){var path_16416 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_16416,(0));

return path_16416;
})();
var len_16418 = path_16417.length;
var i_16419 = (0);
var obj_16420 = obj;
while(true){
if((i_16419 < len_16418)){
var mode_16421 = (path_16417[i_16419]);
var key_16422 = (path_16417[(i_16419 + (1))]);
var next_obj_16423 = oops.core.get_key_dynamically.call(null,obj_16420,key_16422,mode_16421);
var G__16425 = mode_16421;
switch (G__16425) {
case (0):
var G__16477 = (i_16419 + (2));
var G__16478 = next_obj_16423;
i_16419 = G__16477;
obj_16420 = G__16478;
continue;

break;
case (1):
if((!((next_obj_16423 == null)))){
var G__16479 = (i_16419 + (2));
var G__16480 = next_obj_16423;
i_16419 = G__16479;
obj_16420 = G__16480;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16423 == null)))){
var G__16481 = (i_16419 + (2));
var G__16482 = next_obj_16423;
i_16419 = G__16481;
obj_16420 = G__16482;
continue;
} else {
var G__16483 = (i_16419 + (2));
var G__16484 = oops.core.punch_key_dynamically_BANG_.call(null,obj_16420,key_16422);
i_16419 = G__16483;
obj_16420 = G__16484;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16425)].join('')));

}
} else {
return obj_16420;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_16451 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_16451,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_16427 = (function (){var path_16426 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_16426,(0));

return path_16426;
})();
var len_16428 = path_16427.length;
if((len_16428 < (4))){
return [obj,(function (){var path_16430 = path_16427;
var len_16431 = path_16430.length;
var i_16432 = (0);
var obj_16433 = obj;
while(true){
if((i_16432 < len_16431)){
var mode_16434 = (path_16430[i_16432]);
var key_16435 = (path_16430[(i_16432 + (1))]);
var next_obj_16436 = oops.core.get_key_dynamically.call(null,obj_16433,key_16435,mode_16434);
var G__16452 = mode_16434;
switch (G__16452) {
case (0):
var G__16486 = (i_16432 + (2));
var G__16487 = next_obj_16436;
i_16432 = G__16486;
obj_16433 = G__16487;
continue;

break;
case (1):
if((!((next_obj_16436 == null)))){
var G__16488 = (i_16432 + (2));
var G__16489 = next_obj_16436;
i_16432 = G__16488;
obj_16433 = G__16489;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16436 == null)))){
var G__16490 = (i_16432 + (2));
var G__16491 = next_obj_16436;
i_16432 = G__16490;
obj_16433 = G__16491;
continue;
} else {
var G__16492 = (i_16432 + (2));
var G__16493 = oops.core.punch_key_dynamically_BANG_.call(null,obj_16433,key_16435);
i_16432 = G__16492;
obj_16433 = G__16493;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16452)].join('')));

}
} else {
return obj_16433;
}
break;
}
})()];
} else {
var target_obj_16429 = (function (){var path_16437 = path_16427.slice((0),(len_16428 - (2)));
var len_16438 = path_16437.length;
var i_16439 = (0);
var obj_16440 = obj;
while(true){
if((i_16439 < len_16438)){
var mode_16441 = (path_16437[i_16439]);
var key_16442 = (path_16437[(i_16439 + (1))]);
var next_obj_16443 = oops.core.get_key_dynamically.call(null,obj_16440,key_16442,mode_16441);
var G__16453 = mode_16441;
switch (G__16453) {
case (0):
var G__16495 = (i_16439 + (2));
var G__16496 = next_obj_16443;
i_16439 = G__16495;
obj_16440 = G__16496;
continue;

break;
case (1):
if((!((next_obj_16443 == null)))){
var G__16497 = (i_16439 + (2));
var G__16498 = next_obj_16443;
i_16439 = G__16497;
obj_16440 = G__16498;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16443 == null)))){
var G__16499 = (i_16439 + (2));
var G__16500 = next_obj_16443;
i_16439 = G__16499;
obj_16440 = G__16500;
continue;
} else {
var G__16501 = (i_16439 + (2));
var G__16502 = oops.core.punch_key_dynamically_BANG_.call(null,obj_16440,key_16442);
i_16439 = G__16501;
obj_16440 = G__16502;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16453)].join('')));

}
} else {
return obj_16440;
}
break;
}
})();
return [target_obj_16429,(function (){var path_16444 = [(path_16427[(len_16428 - (2))]),(path_16427[(len_16428 - (1))])];
var len_16445 = path_16444.length;
var i_16446 = (0);
var obj_16447 = target_obj_16429;
while(true){
if((i_16446 < len_16445)){
var mode_16448 = (path_16444[i_16446]);
var key_16449 = (path_16444[(i_16446 + (1))]);
var next_obj_16450 = oops.core.get_key_dynamically.call(null,obj_16447,key_16449,mode_16448);
var G__16454 = mode_16448;
switch (G__16454) {
case (0):
var G__16504 = (i_16446 + (2));
var G__16505 = next_obj_16450;
i_16446 = G__16504;
obj_16447 = G__16505;
continue;

break;
case (1):
if((!((next_obj_16450 == null)))){
var G__16506 = (i_16446 + (2));
var G__16507 = next_obj_16450;
i_16446 = G__16506;
obj_16447 = G__16507;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16450 == null)))){
var G__16508 = (i_16446 + (2));
var G__16509 = next_obj_16450;
i_16446 = G__16508;
obj_16447 = G__16509;
continue;
} else {
var G__16510 = (i_16446 + (2));
var G__16511 = oops.core.punch_key_dynamically_BANG_.call(null,obj_16447,key_16449);
i_16446 = G__16510;
obj_16447 = G__16511;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16454)].join('')));

}
} else {
return obj_16447;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_16469 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_16469,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_16456 = (function (){var path_16455 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_16455,(1));

return path_16455;
})();
var len_16459 = path_16456.length;
var parent_obj_path_16460 = path_16456.slice((0),(len_16459 - (2)));
var key_16457 = (path_16456[(len_16459 - (1))]);
var mode_16458 = (path_16456[(len_16459 - (2))]);
var parent_obj_16461 = (function (){var path_16462 = parent_obj_path_16460;
var len_16463 = path_16462.length;
var i_16464 = (0);
var obj_16465 = obj;
while(true){
if((i_16464 < len_16463)){
var mode_16466 = (path_16462[i_16464]);
var key_16467 = (path_16462[(i_16464 + (1))]);
var next_obj_16468 = oops.core.get_key_dynamically.call(null,obj_16465,key_16467,mode_16466);
var G__16470 = mode_16466;
switch (G__16470) {
case (0):
var G__16513 = (i_16464 + (2));
var G__16514 = next_obj_16468;
i_16464 = G__16513;
obj_16465 = G__16514;
continue;

break;
case (1):
if((!((next_obj_16468 == null)))){
var G__16515 = (i_16464 + (2));
var G__16516 = next_obj_16468;
i_16464 = G__16515;
obj_16465 = G__16516;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_16468 == null)))){
var G__16517 = (i_16464 + (2));
var G__16518 = next_obj_16468;
i_16464 = G__16517;
obj_16465 = G__16518;
continue;
} else {
var G__16519 = (i_16464 + (2));
var G__16520 = oops.core.punch_key_dynamically_BANG_.call(null,obj_16465,key_16467);
i_16464 = G__16519;
obj_16465 = G__16520;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16470)].join('')));

}
} else {
return obj_16465;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_16461,key_16457,val,mode_16458);
} else {
return null;
}
});
Object.defineProperty(module.exports, "set_key_dynamically", { enumerable: false, get: function() { return oops.core.set_key_dynamically; } });
Object.defineProperty(module.exports, "report_warning_dynamically", { enumerable: false, get: function() { return oops.core.report_warning_dynamically; } });
Object.defineProperty(module.exports, "validate_fn_call_dynamically", { enumerable: false, get: function() { return oops.core.validate_fn_call_dynamically; } });
Object.defineProperty(module.exports, "report_error_dynamically", { enumerable: false, get: function() { return oops.core.report_error_dynamically; } });
Object.defineProperty(module.exports, "punch_key_dynamically_BANG_", { enumerable: false, get: function() { return oops.core.punch_key_dynamically_BANG_; } });
Object.defineProperty(module.exports, "get_selector_dynamically", { enumerable: false, get: function() { return oops.core.get_selector_dynamically; } });
Object.defineProperty(module.exports, "check_path_dynamically", { enumerable: false, get: function() { return oops.core.check_path_dynamically; } });
Object.defineProperty(module.exports, "get_key_dynamically", { enumerable: false, get: function() { return oops.core.get_key_dynamically; } });
Object.defineProperty(module.exports, "set_selector_dynamically", { enumerable: false, get: function() { return oops.core.set_selector_dynamically; } });
Object.defineProperty(module.exports, "report_if_needed_dynamically", { enumerable: false, get: function() { return oops.core.report_if_needed_dynamically; } });
Object.defineProperty(module.exports, "validate_object_access_dynamically", { enumerable: false, get: function() { return oops.core.validate_object_access_dynamically; } });
Object.defineProperty(module.exports, "get_selector_call_info_dynamically", { enumerable: false, get: function() { return oops.core.get_selector_call_info_dynamically; } });
Object.defineProperty(module.exports, "build_path_dynamically", { enumerable: false, get: function() { return oops.core.build_path_dynamically; } });
//# sourceMappingURL=oops.core.js.map
