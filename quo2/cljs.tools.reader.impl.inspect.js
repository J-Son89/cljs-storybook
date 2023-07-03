var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.tools.reader.impl.inspect.js");

goog.provide('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.inspect.inspect_STAR__col = (function cljs$tools$reader$impl$inspect$inspect_STAR__col(truncate,col,start,end){
var n = cljs.core.count.call(null,col);
var l = (cljs.core.truth_(truncate)?(0):(function (){var x__4217__auto__ = (10);
var y__4218__auto__ = n;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var elements = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.tools.reader.impl.inspect.inspect_STAR_,true),cljs.core.take.call(null,l,col));
var content = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",elements));
var suffix = (((l < n))?"...":null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),suffix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
});
cljs.tools.reader.impl.inspect.dispatch_inspect = (function cljs$tools$reader$impl$inspect$dispatch_inspect(_,x){
if((x == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((x instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"strable","strable",1877668047);
} else {
if(typeof x === 'number'){
return new cljs.core.Keyword(null,"strable","strable",1877668047);
} else {
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"strable","strable",1877668047);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core._EQ_.call(null,x,true)){
return new cljs.core.Keyword(null,"strable","strable",1877668047);
} else {
if(cljs.core._EQ_.call(null,x,false)){
return new cljs.core.Keyword(null,"strable","strable",1877668047);
} else {
return cljs.core.type.call(null,x);

}
}
}
}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.tools !== 'undefined') && (typeof cljs.tools.reader !== 'undefined') && (typeof cljs.tools.reader.impl !== 'undefined') && (typeof cljs.tools.reader.impl.inspect !== 'undefined') && (typeof cljs.tools.reader.impl.inspect.inspect_STAR_ !== 'undefined')){
} else {
cljs.tools.reader.impl.inspect.inspect_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.tools.reader.impl.inspect","inspect*"),cljs.tools.reader.impl.inspect.dispatch_inspect,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"string","string",-1989541586),(function (truncate,x){
var n = (cljs.core.truth_(truncate)?(5):(20));
var suffix = (((x.length > n))?"...\"":"\"");
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.substring((0),(function (){var x__4217__auto__ = n;
var y__4218__auto__ = x.length;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})())),suffix].join('');
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"strable","strable",1877668047),(function (truncate,x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,cljs.core.IndexedSeq,(function (truncate,x){
return "<indexed seq>";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,cljs.core.PersistentArrayMapSeq,(function (truncate,x){
return "<map seq>";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,cljs.core.NodeSeq,(function (truncate,x){
return "<map seq>";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,cljs.core.Cons,(function (truncate,x){
return "<cons>";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,cljs.core.LazySeq,(function (truncate,x){
return "<lazy seq>";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1){
return "nil";
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null,truncate,col,"(",")");
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (truncate,m){
var len = cljs.core.count.call(null,m);
var n_shown = (cljs.core.truth_(truncate)?(0):len);
var contents = cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,n_shown,m));
var suffix = (((len > n_shown))?"...}":"}");
return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null,truncate,contents,"{",suffix);
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null,truncate,col,"#{","}");
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col.call(null,truncate,col,"[","]");
}));
cljs.core._add_method(cljs.tools.reader.impl.inspect.inspect_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (truncate,x){
return cljs.core.pr_str.call(null,cljs.core.type.call(null,x));
}));
/**
 * Return a string description of the value supplied.
 * May be the a string version of the value itself (e.g. "true")
 * or it may be a description (e.g. "an instance of Foo").
 * If truncate is true then return a very terse version of
 * the inspection.
 */
cljs.tools.reader.impl.inspect.inspect = (function cljs$tools$reader$impl$inspect$inspect(var_args){
var G__8161 = arguments.length;
switch (G__8161) {
case 1:
return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.tools.reader.impl.inspect.inspect_STAR_.call(null,false,x);
}));

(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2 = (function (truncate,x){
return cljs.tools.reader.impl.inspect.inspect_STAR_.call(null,truncate,x);
}));

(cljs.tools.reader.impl.inspect.inspect.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "inspect_STAR_", { enumerable: false, get: function() { return cljs.tools.reader.impl.inspect.inspect_STAR_; } });
Object.defineProperty(module.exports, "inspect_STAR__col", { enumerable: false, get: function() { return cljs.tools.reader.impl.inspect.inspect_STAR__col; } });
Object.defineProperty(module.exports, "dispatch_inspect", { enumerable: false, get: function() { return cljs.tools.reader.impl.inspect.dispatch_inspect; } });
Object.defineProperty(module.exports, "inspect", { enumerable: false, get: function() { return cljs.tools.reader.impl.inspect.inspect; } });
//# sourceMappingURL=cljs.tools.reader.impl.inspect.js.map
