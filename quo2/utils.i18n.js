var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$i18n_js.js");
require("./clojure.string.js");
require("./utils.i18n_goog.js");
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

$CLJS.SHADOW_ENV.setLoaded("utils.i18n.js");

goog.provide('utils.i18n');
utils.i18n.setup = (function utils$i18n$setup(default_device_language,translations_by_locale){
(shadow.js.shim.module$i18n_js.fallbacks = true);

(shadow.js.shim.module$i18n_js.defaultSeparator = "/");

(shadow.js.shim.module$i18n_js.locale = default_device_language);

return (shadow.js.shim.module$i18n_js.translations = translations_by_locale);
});
utils.i18n.get_translations = (function utils$i18n$get_translations(){
return shadow.js.shim.module$i18n_js.translations;
});
utils.i18n.set_language = (function utils$i18n$set_language(lang){
return (shadow.js.shim.module$i18n_js.locale = lang);
});
/**
 * This function is a hack: mobile Safari doesn't support toLocaleString(), so we need to pass
 *   this map to WKWebView to make number formatting work.
 */
utils.i18n.delimeters = (function (){var n = Number(1000.1).toLocaleString();
var delimiter_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,n),(7));
if(delimiter_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),cljs.core.subs.call(null,n,(1),(2)),new cljs.core.Keyword(null,"separator","separator",-1628749125),cljs.core.subs.call(null,n,(5),(6))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),"",new cljs.core.Keyword(null,"separator","separator",-1628749125),cljs.core.subs.call(null,n,(4),(5))], null);
}
})();
utils.i18n.label_number = (function utils$i18n$label_number(number){
if(cljs.core.truth_(number)){
var map__16931 = utils.i18n.delimeters;
var map__16931__$1 = (((((!((map__16931 == null))))?(((((map__16931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16931):map__16931);
var delimiter = cljs.core.get.call(null,map__16931__$1,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
var separator = cljs.core.get.call(null,map__16931__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
return shadow.js.shim.module$i18n_js.toNumber(clojure.string.replace.call(null,number,/,/,"."),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"precision","precision",-1175707478),(10),new cljs.core.Keyword(null,"strip_insignificant_zeros","strip_insignificant_zeros",521322429),true,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),delimiter,new cljs.core.Keyword(null,"separator","separator",-1628749125),separator], null)));
} else {
return null;
}
});
utils.i18n.default_option_value = "<no value>";
utils.i18n.label_options = (function utils$i18n$label_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function utils$i18n$label_options_$_iter__16933(s__16934){
return (new cljs.core.LazySeq(null,(function (){
var s__16934__$1 = s__16934;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16934__$1);
if(temp__5735__auto__){
var s__16934__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16934__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16934__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16936 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16935 = (0);
while(true){
if((i__16935 < size__4528__auto__)){
var vec__16937 = cljs.core._nth(c__4527__auto__,i__16935);
var k = cljs.core.nth.call(null,vec__16937,(0),null);
var v = cljs.core.nth.call(null,vec__16937,(1),null);
cljs.core.chunk_append.call(null,b__16936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__4126__auto__ = v;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return utils.i18n.default_option_value;
}
})()], null));

var G__16950 = (i__16935 + (1));
i__16935 = G__16950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16936),utils$i18n$label_options_$_iter__16933.call(null,cljs.core.chunk_rest.call(null,s__16934__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16936),null);
}
} else {
var vec__16941 = cljs.core.first.call(null,s__16934__$2);
var k = cljs.core.nth.call(null,vec__16941,(0),null);
var v = cljs.core.nth.call(null,vec__16941,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__4126__auto__ = v;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return utils.i18n.default_option_value;
}
})()], null),utils$i18n$label_options_$_iter__16933.call(null,cljs.core.rest.call(null,s__16934__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options);
})());
});
utils.i18n.label_fn = (function utils$i18n$label_fn(var_args){
var G__16945 = arguments.length;
switch (G__16945) {
case 1:
return utils.i18n.label_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return utils.i18n.label_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.i18n.label_fn.cljs$core$IFn$_invoke$arity$1 = (function (path){
return utils.i18n.label_fn.call(null,path,cljs.core.PersistentArrayMap.EMPTY);
}));

(utils.i18n.label_fn.cljs$core$IFn$_invoke$arity$2 = (function (path,options){
if((!((shadow.js.shim.module$i18n_js.t() == null)))){
var options__$1 = cljs.core.update.call(null,options,new cljs.core.Keyword(null,"amount","amount",364489504),utils.i18n.label_number);
return shadow.js.shim.module$i18n_js.t(cljs.core.name.call(null,path),cljs.core.clj__GT_js.call(null,utils.i18n.label_options.call(null,options__$1)));
} else {
return cljs.core.name.call(null,path);
}
}));

(utils.i18n.label_fn.cljs$lang$maxFixedArity = 2);

utils.i18n.label = cljs.core.memoize.call(null,utils.i18n.label_fn);
utils.i18n.label_pluralize = (function utils$i18n$label_pluralize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16952 = arguments.length;
var i__4737__auto___16953 = (0);
while(true){
if((i__4737__auto___16953 < len__4736__auto___16952)){
args__4742__auto__.push((arguments[i__4737__auto___16953]));

var G__16954 = (i__4737__auto___16953 + (1));
i__4737__auto___16953 = G__16954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return utils.i18n.label_pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(utils.i18n.label_pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (count,path,options){
if((!((shadow.js.shim.module$i18n_js.t() == null)))){
return shadow.js.shim.module$i18n_js.p(count,cljs.core.name.call(null,path),cljs.core.clj__GT_js.call(null,options));
} else {
return cljs.core.name.call(null,path);
}
}));

(utils.i18n.label_pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.i18n.label_pluralize.cljs$lang$applyTo = (function (seq16947){
var G__16948 = cljs.core.first.call(null,seq16947);
var seq16947__$1 = cljs.core.next.call(null,seq16947);
var G__16949 = cljs.core.first.call(null,seq16947__$1);
var seq16947__$2 = cljs.core.next.call(null,seq16947__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16948,G__16949,seq16947__$2);
}));

utils.i18n.locale = shadow.js.shim.module$i18n_js.locale;
utils.i18n.format_currency = utils.i18n_goog.format_currency;
Object.defineProperty(module.exports, "get_translations", { enumerable: false, get: function() { return utils.i18n.get_translations; } });
Object.defineProperty(module.exports, "set_language", { enumerable: false, get: function() { return utils.i18n.set_language; } });
Object.defineProperty(module.exports, "delimeters", { enumerable: false, get: function() { return utils.i18n.delimeters; } });
Object.defineProperty(module.exports, "default_option_value", { enumerable: false, get: function() { return utils.i18n.default_option_value; } });
Object.defineProperty(module.exports, "label_fn", { enumerable: false, get: function() { return utils.i18n.label_fn; } });
Object.defineProperty(module.exports, "label_number", { enumerable: false, get: function() { return utils.i18n.label_number; } });
Object.defineProperty(module.exports, "label_pluralize", { enumerable: false, get: function() { return utils.i18n.label_pluralize; } });
Object.defineProperty(module.exports, "format_currency", { enumerable: false, get: function() { return utils.i18n.format_currency; } });
Object.defineProperty(module.exports, "locale", { enumerable: false, get: function() { return utils.i18n.locale; } });
Object.defineProperty(module.exports, "label_options", { enumerable: false, get: function() { return utils.i18n.label_options; } });
Object.defineProperty(module.exports, "setup", { enumerable: false, get: function() { return utils.i18n.setup; } });
Object.defineProperty(module.exports, "label", { enumerable: false, get: function() { return utils.i18n.label; } });
//# sourceMappingURL=utils.i18n.js.map
