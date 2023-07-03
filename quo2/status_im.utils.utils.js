var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native.js");
require("./shadow.js.shim.module$react_native_background_timer.js");
require("./clojure.string.js");
require("./goog.string.string.js");
require("./re_frame.core.js");
require("./status_im.ethereum.core.js");
require("./status_im.ethereum.eip55.js");
require("./utils.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.utils.utils.js");

goog.provide('status_im.utils.utils');
status_im.utils.utils.show_popup = (function status_im$utils$utils$show_popup(var_args){
var G__18687 = arguments.length;
switch (G__18687) {
case 2:
return status_im.utils.utils.show_popup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return status_im.utils.utils.show_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.utils.utils.show_popup.cljs$core$IFn$_invoke$arity$2 = (function (title,content){
return status_im.utils.utils.show_popup.call(null,title,content,null);
}));

(status_im.utils.utils.show_popup.cljs$core$IFn$_invoke$arity$3 = (function (title,content,on_dismiss){
return shadow.js.shim.module$react_native.Alert.alert(title,content,cljs.core.clj__GT_js.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"OK",new cljs.core.Keyword(null,"style","style",-496642736),"cancel",new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)], null),(cljs.core.truth_(on_dismiss)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),on_dismiss], null):null))],null))),(cljs.core.truth_(on_dismiss)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancelable","cancelable",2083112403),false], null)):null));
}));

(status_im.utils.utils.show_popup.cljs$lang$maxFixedArity = 3);

status_im.utils.utils.show_confirmation = (function status_im$utils$utils$show_confirmation(p__18695){
var map__18696 = p__18695;
var map__18696__$1 = (((((!((map__18696 == null))))?(((((map__18696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18696):map__18696);
var title = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"content","content",15833224));
var confirm_button_text = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"confirm-button-text","confirm-button-text",122485941));
var on_accept = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var on_cancel = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var cancel_button_text = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"cancel-button-text","cancel-button-text",-33362523));
var extra_options = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"extra-options","extra-options",1568282574));
return shadow.js.shim.module$react_native.Alert.alert(title,content,cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__4126__auto__ = cancel_button_text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return utils.i18n.label(new cljs.core.Keyword("t","cancel","t/cancel",-1964088284));
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),"cancel",new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"cancel-button","cancel-button",-45389038)], null),(cljs.core.truth_(on_cancel)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),on_cancel], null):null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__4126__auto__ = confirm_button_text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return utils.i18n.label(new cljs.core.Keyword("t","ok","t/ok",967785360));
}
})(),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),on_accept,new cljs.core.Keyword(null,"style","style",-496642736),"default",new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"confirm-button","confirm-button",1845692142)], null)],null)),(function (){var or__4126__auto__ = extra_options;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})())),({"cancelable": false}));
});
status_im.utils.utils.show_question = (function status_im$utils$utils$show_question(var_args){
var G__18707 = arguments.length;
switch (G__18707) {
case 3:
return status_im.utils.utils.show_question.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return status_im.utils.utils.show_question.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.utils.utils.show_question.cljs$core$IFn$_invoke$arity$3 = (function (title,content,on_accept){
return status_im.utils.utils.show_question.call(null,title,content,on_accept,null);
}));

(status_im.utils.utils.show_question.cljs$core$IFn$_invoke$arity$4 = (function (title,content,on_accept,on_cancel){
return shadow.js.shim.module$react_native.Alert.alert(title,content,cljs.core.clj__GT_js.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),utils.i18n.label(new cljs.core.Keyword("t","no","t/no",-390373718)),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"no-button","no-button",-95065764)], null),(cljs.core.truth_(on_cancel)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),on_cancel], null):null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),utils.i18n.label(new cljs.core.Keyword("t","yes","t/yes",182838943)),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),on_accept,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"yes-button","yes-button",-1720257602)], null)],null))));
}));

(status_im.utils.utils.show_question.cljs$lang$maxFixedArity = 4);

status_im.utils.utils.set_timeout = (function status_im$utils$utils$set_timeout(cb,ms){
return shadow.js.shim.module$react_native_background_timer.default.setTimeout(cb,ms);
});
status_im.utils.utils.clear_timeout = (function status_im$utils$utils$clear_timeout(id){
return shadow.js.shim.module$react_native_background_timer.default.clearTimeout(id);
});
status_im.utils.utils.set_interval = (function status_im$utils$utils$set_interval(cb,ms){
return shadow.js.shim.module$react_native_background_timer.default.setInterval(cb,ms);
});
status_im.utils.utils.clear_interval = (function status_im$utils$utils$clear_interval(id){
return shadow.js.shim.module$react_native_background_timer.default.clearInterval(id);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("utils","dispatch-later","utils/dispatch-later",-427834483),(function (params){
var seq__18715 = cljs.core.seq.call(null,params);
var chunk__18716 = null;
var count__18717 = (0);
var i__18718 = (0);
while(true){
if((i__18718 < count__18717)){
var map__18742 = cljs.core._nth(chunk__18716,i__18718);
var map__18742__$1 = (((((!((map__18742 == null))))?(((((map__18742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18742):map__18742);
var ms = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(cljs.core.truth_((function (){var and__4115__auto__ = ms;
if(cljs.core.truth_(and__4115__auto__)){
return dispatch;
} else {
return and__4115__auto__;
}
})())){
status_im.utils.utils.set_timeout.call(null,((function (seq__18715,chunk__18716,count__18717,i__18718,map__18742,map__18742__$1,ms,dispatch){
return (function (){
return re_frame.core.dispatch.call(null,dispatch);
});})(seq__18715,chunk__18716,count__18717,i__18718,map__18742,map__18742__$1,ms,dispatch))
,ms);
} else {
}


var G__18770 = seq__18715;
var G__18771 = chunk__18716;
var G__18772 = count__18717;
var G__18773 = (i__18718 + (1));
seq__18715 = G__18770;
chunk__18716 = G__18771;
count__18717 = G__18772;
i__18718 = G__18773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18715);
if(temp__5735__auto__){
var seq__18715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18715__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18715__$1);
var G__18774 = cljs.core.chunk_rest.call(null,seq__18715__$1);
var G__18775 = c__4556__auto__;
var G__18776 = cljs.core.count.call(null,c__4556__auto__);
var G__18777 = (0);
seq__18715 = G__18774;
chunk__18716 = G__18775;
count__18717 = G__18776;
i__18718 = G__18777;
continue;
} else {
var map__18755 = cljs.core.first.call(null,seq__18715__$1);
var map__18755__$1 = (((((!((map__18755 == null))))?(((((map__18755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18755):map__18755);
var ms = cljs.core.get.call(null,map__18755__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18755__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(cljs.core.truth_((function (){var and__4115__auto__ = ms;
if(cljs.core.truth_(and__4115__auto__)){
return dispatch;
} else {
return and__4115__auto__;
}
})())){
status_im.utils.utils.set_timeout.call(null,((function (seq__18715,chunk__18716,count__18717,i__18718,map__18755,map__18755__$1,ms,dispatch,seq__18715__$1,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch.call(null,dispatch);
});})(seq__18715,chunk__18716,count__18717,i__18718,map__18755,map__18755__$1,ms,dispatch,seq__18715__$1,temp__5735__auto__))
,ms);
} else {
}


var G__18778 = cljs.core.next.call(null,seq__18715__$1);
var G__18779 = null;
var G__18780 = (0);
var G__18781 = (0);
seq__18715 = G__18778;
chunk__18716 = G__18779;
count__18717 = G__18780;
i__18718 = G__18781;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("status-im.utils.utils","clear-timeouts","status-im.utils.utils/clear-timeouts",-1355349341),(function (ids){
var seq__18762 = cljs.core.seq.call(null,ids);
var chunk__18763 = null;
var count__18764 = (0);
var i__18765 = (0);
while(true){
if((i__18765 < count__18764)){
var id = cljs.core._nth(chunk__18763,i__18765);
if(cljs.core.truth_(id)){
status_im.utils.utils.clear_timeout.call(null,id);
} else {
}


var G__18782 = seq__18762;
var G__18783 = chunk__18763;
var G__18784 = count__18764;
var G__18785 = (i__18765 + (1));
seq__18762 = G__18782;
chunk__18763 = G__18783;
count__18764 = G__18784;
i__18765 = G__18785;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__18762);
if(temp__5735__auto__){
var seq__18762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18762__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18762__$1);
var G__18786 = cljs.core.chunk_rest.call(null,seq__18762__$1);
var G__18787 = c__4556__auto__;
var G__18788 = cljs.core.count.call(null,c__4556__auto__);
var G__18789 = (0);
seq__18762 = G__18786;
chunk__18763 = G__18787;
count__18764 = G__18788;
i__18765 = G__18789;
continue;
} else {
var id = cljs.core.first.call(null,seq__18762__$1);
if(cljs.core.truth_(id)){
status_im.utils.utils.clear_timeout.call(null,id);
} else {
}


var G__18790 = cljs.core.next.call(null,seq__18762__$1);
var G__18791 = null;
var G__18792 = (0);
var G__18793 = (0);
seq__18762 = G__18790;
chunk__18763 = G__18791;
count__18764 = G__18792;
i__18765 = G__18793;
continue;
}
} else {
return null;
}
}
break;
}
}));
/**
 * Takes first and last 4 digits from address including leading 0x
 *   and adds unicode ellipsis in between
 */
status_im.utils.utils.get_shortened_address = (function status_im$utils$utils$get_shortened_address(address){
if(cljs.core.truth_(address)){
return [cljs.core.subs.call(null,address,(0),(6)),"\u2026",cljs.core.subs.call(null,address,(cljs.core.count.call(null,address) - (3)),cljs.core.count.call(null,address))].join('');
} else {
return null;
}
});
status_im.utils.utils.get_shortened_checksum_address = (function status_im$utils$utils$get_shortened_checksum_address(address){
if(cljs.core.truth_(address)){
return status_im.utils.utils.get_shortened_address.call(null,status_im.ethereum.eip55.address__GT_checksum.call(null,status_im.ethereum.core.normalized_hex.call(null,address)));
} else {
return null;
}
});
status_im.utils.utils.format_decimals = (function status_im$utils$utils$format_decimals(amount,places){
var decimal_part = cljs.core.get.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"."),(1));
if((cljs.core.count.call(null,decimal_part) > places)){
return goog.string.format(["%.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(places),"f"].join(''),amount);
} else {
var or__4126__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
}
});
status_im.utils.utils.safe_trim = (function status_im$utils$utils$safe_trim(s){
if(typeof s === 'string'){
return clojure.string.trim.call(null,s);
} else {
return null;
}
});
status_im.utils.utils.safe_replace = (function status_im$utils$utils$safe_replace(s,m,r){
if(typeof s === 'string'){
return clojure.string.replace.call(null,s,m,r);
} else {
return null;
}
});
status_im.utils.utils.safe_nth = (function status_im$utils$utils$safe_nth(coll,index){
if(typeof index === 'number'){
return cljs.core.nth.call(null,coll,index);
} else {
return null;
}
});
status_im.utils.utils.svg_QMARK_ = (function status_im$utils$utils$svg_QMARK_(some_string){
return clojure.string.ends_with_QMARK_.call(null,some_string,".svg");
});
status_im.utils.utils.exclude_svg_resources = (function status_im$utils$utils$exclude_svg_resources(lst){
return cljs.core.remove.call(null,status_im.utils.utils.svg_QMARK_,lst);
});
Object.defineProperty(module.exports, "show_confirmation", { enumerable: false, get: function() { return status_im.utils.utils.show_confirmation; } });
Object.defineProperty(module.exports, "show_popup", { enumerable: false, get: function() { return status_im.utils.utils.show_popup; } });
Object.defineProperty(module.exports, "show_question", { enumerable: false, get: function() { return status_im.utils.utils.show_question; } });
Object.defineProperty(module.exports, "clear_interval", { enumerable: false, get: function() { return status_im.utils.utils.clear_interval; } });
Object.defineProperty(module.exports, "svg_QMARK_", { enumerable: false, get: function() { return status_im.utils.utils.svg_QMARK_; } });
Object.defineProperty(module.exports, "clear_timeout", { enumerable: false, get: function() { return status_im.utils.utils.clear_timeout; } });
Object.defineProperty(module.exports, "safe_trim", { enumerable: false, get: function() { return status_im.utils.utils.safe_trim; } });
Object.defineProperty(module.exports, "get_shortened_address", { enumerable: false, get: function() { return status_im.utils.utils.get_shortened_address; } });
Object.defineProperty(module.exports, "safe_replace", { enumerable: false, get: function() { return status_im.utils.utils.safe_replace; } });
Object.defineProperty(module.exports, "format_decimals", { enumerable: false, get: function() { return status_im.utils.utils.format_decimals; } });
Object.defineProperty(module.exports, "exclude_svg_resources", { enumerable: false, get: function() { return status_im.utils.utils.exclude_svg_resources; } });
Object.defineProperty(module.exports, "set_interval", { enumerable: false, get: function() { return status_im.utils.utils.set_interval; } });
Object.defineProperty(module.exports, "get_shortened_checksum_address", { enumerable: false, get: function() { return status_im.utils.utils.get_shortened_checksum_address; } });
Object.defineProperty(module.exports, "safe_nth", { enumerable: false, get: function() { return status_im.utils.utils.safe_nth; } });
Object.defineProperty(module.exports, "set_timeout", { enumerable: false, get: function() { return status_im.utils.utils.set_timeout; } });
//# sourceMappingURL=status_im.utils.utils.js.map
