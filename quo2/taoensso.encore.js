var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./clojure.set.js");
require("./cljs.reader.js");
require("./cljs.tools.reader.edn.js");
require("./goog.object.object.js");
require("./goog.string.string.js");
require("./goog.string.stringformat.js");
require("./goog.string.stringbuffer.js");
require("./goog.events.events.js");
require("./goog.net.xhrio.js");
require("./goog.net.xhriopool.js");
require("./goog.uri.uri.js");
require("./goog.structs.structs.js");
require("./goog.net.eventtype.js");
require("./goog.net.errorcode.js");
require("./taoensso.truss.js");
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

$CLJS.SHADOW_ENV.setLoaded("taoensso.encore.js");

goog.provide('taoensso.encore');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__12338 = arguments.length;
switch (G__12338) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__12339 = ((((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__12339,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__12339,(1),null);
var vec__12342 = ((((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__12342,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__12342,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__12349 = arguments.length;
switch (G__12349) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__12353 = arguments.length;
switch (G__12353) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__12356 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__12357 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__12358 = null;
var _STAR_print_length_STAR__temp_val__12359 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__12358);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__12359);

try{return cljs.core.pr_str.call(null,x);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__12357);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__12356);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__10690__auto__ = (function (){var or__4126__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__10690__auto__)){
var data_map = b2__10690__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
if(taoensso.encore.ident_QMARK_.call(null,x)){
var and__4115__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__4115__auto__)){
return true;
} else {
return and__4115__auto__;
}
} else {
return false;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
var and__4115__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__4115__auto__)){
return true;
} else {
return and__4115__auto__;
}
} else {
return false;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
if((x instanceof cljs.core.Keyword)){
var and__4115__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__4115__auto__)){
return true;
} else {
return and__4115__auto__;
}
} else {
return false;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.call(null,x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_.call(null,x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))) && ((!((parseFloat(x) === parseInt(x,(10)))))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))) && ((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((!((x < (0))))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && ((!((x < (0))))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_.call(null,x)) && ((!((x < (0))))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
if(typeof x === 'number'){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__10690__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var ns = b2__10690__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim.call(null,x);
if(cljs.core._EQ_.call(null,s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var n = b2__10690__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var n = b2__10690__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var n = b2__10690__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var n = b2__10690__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var n = b2__10690__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__10690__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__10690__auto__)){
var f = b2__10690__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")))){
return false;
} else {
if(((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__10690__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__10690__auto__)){
var email = b2__10690__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e12403){if((e12403 instanceof Error)){
var _ = e12403;
return false;
} else {
throw e12403;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__12406 = arguments.length;
switch (G__12406) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failure against arg: ",cljs.core.pr_str.call(null,x)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,["`as-",cljs.core.name.call(null,as_name),"` failed against: `",cljs.core.pr_str.call(null,x),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nblank_trim.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__4126__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__12420 = arguments.length;
switch (G__12420) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__12432){
var vec__12433 = p__12432;
var k = cljs.core.nth.call(null,vec__12433,(0),null);
var v = cljs.core.nth.call(null,vec__12433,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
var inc_14401 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,(function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_(i,inc_14401(cljs.core._deref(i))),in$);
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__12455_SHARP_,p2__12454_SHARP_){
return proc.call(null,p2__12454_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__12458_SHARP_,p2__12456_SHARP_,p3__12457_SHARP_){
return proc.call(null,p2__12456_SHARP_,p3__12457_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__12461_SHARP_,p2__12459_SHARP_,p3__12460_SHARP_){
return proc.call(null,p2__12459_SHARP_,p3__12460_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__12464_SHARP_,p2__12462_SHARP_,p3__12463_SHARP_){
return proc.call(null,p2__12462_SHARP_,p3__12463_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__10690__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__10690__auto__)){
var p = b2__10690__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__10690__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__10690__auto__)){
var p = b2__10690__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
var inc_14425 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_.call(null,(-1));
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_14425(cljs.core._deref(idx_)));
});
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__12486 = arguments.length;
switch (G__12486) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__12497 = arguments.length;
switch (G__12497) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__12510 = type;
var G__12510__$1 = (((G__12510 instanceof cljs.core.Keyword))?G__12510.fqn:null);
switch (G__12510__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__12534 = arguments.length;
switch (G__12534) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__12540){
var map__12541 = p__12540;
var map__12541__$1 = (((((!((map__12541 == null))))?(((((map__12541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12541):map__12541);
var min = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__12541__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__12552 = arguments.length;
switch (G__12552) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14437 = arguments.length;
var i__4737__auto___14438 = (0);
while(true){
if((i__4737__auto___14438 < len__4736__auto___14437)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14438]));

var G__14439 = (i__4737__auto___14438 + (1));
i__4737__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
if(taoensso.encore.some_QMARK_.call(null,x)){
if(cljs.core._EQ_.call(null,x,y)){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__12546_SHARP_){
return cljs.core._EQ_.call(null,p1__12546_SHARP_,x);
}),more);
} else {
return false;
}
} else {
return false;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq12549){
var G__12550 = cljs.core.first.call(null,seq12549);
var seq12549__$1 = cljs.core.next.call(null,seq12549);
var G__12551 = cljs.core.first.call(null,seq12549__$1);
var seq12549__$2 = cljs.core.next.call(null,seq12549__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12550,G__12551,seq12549__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__12564 = arguments.length;
switch (G__12564) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14446 = arguments.length;
var i__4737__auto___14447 = (0);
while(true){
if((i__4737__auto___14447 < len__4736__auto___14446)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14447]));

var G__14449 = (i__4737__auto___14447 + (1));
i__4737__auto___14447 = G__14449;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq12560){
var G__12561 = cljs.core.first.call(null,seq12560);
var seq12560__$1 = cljs.core.next.call(null,seq12560);
var G__12562 = cljs.core.first.call(null,seq12560__$1);
var seq12560__$2 = cljs.core.next.call(null,seq12560__$1);
var G__12563 = cljs.core.first.call(null,seq12560__$2);
var seq12560__$3 = cljs.core.next.call(null,seq12560__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12561,G__12562,G__12563,seq12560__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__12567 = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__12567,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__12567,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__10690__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__10690__auto__)){
var s = b2__10690__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__10690__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__10690__auto__)){
var s = b2__10690__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__12575 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__12575,(0),null);
var yc = cljs.core.nth.call(null,vec__12575,(1),null);
var zc = cljs.core.nth.call(null,vec__12575,(2),null);
var vec__12578 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__12578,(0),null);
var ym = cljs.core.nth.call(null,vec__12578,(1),null);
var zm = cljs.core.nth.call(null,vec__12578,(2),null);
var vec__12581 = cljs.core.mapv.call(null,(function (p1__12574_SHARP_){
var or__4126__auto__ = p1__12574_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__12581,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__12581,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__12581,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.call(null,xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__12599 = arguments.length;
switch (G__12599) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14455 = arguments.length;
var i__4737__auto___14456 = (0);
while(true){
if((i__4737__auto___14456 < len__4736__auto___14455)){
args__4742__auto__.push((arguments[i__4737__auto___14456]));

var G__14457 = (i__4737__auto___14456 + (1));
i__4737__auto___14456 = G__14457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq12605){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12605));
}));

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return goog.object.set((((o == null))?({}):o),k,v);
});
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__12612 = arguments.length;
switch (G__12612) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_14459 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__12622 = arguments.length;
switch (G__12622) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_14459);
if((o__$2 === sentinel_14459)){
return not_found;
} else {
var G__14461 = o__$2;
var G__14462 = cljs.core.next.call(null,ks__$1);
o__$1 = G__14461;
ks__$1 = G__14462;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__12634 = arguments.length;
switch (G__12634) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14496 = arguments.length;
var i__4737__auto___14497 = (0);
while(true){
if((i__4737__auto___14497 < len__4736__auto___14496)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14497]));

var G__14498 = (i__4737__auto___14497 + (1));
i__4737__auto___14497 = G__14498;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq12631){
var G__12632 = cljs.core.first.call(null,seq12631);
var seq12631__$1 = cljs.core.next.call(null,seq12631);
var G__12633 = cljs.core.first.call(null,seq12631__$1);
var seq12631__$2 = cljs.core.next.call(null,seq12631__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12632,G__12633,seq12631__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__12642 = arguments.length;
switch (G__12642) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14505 = arguments.length;
var i__4737__auto___14506 = (0);
while(true){
if((i__4737__auto___14506 < len__4736__auto___14505)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14506]));

var G__14507 = (i__4737__auto___14506 + (1));
i__4737__auto___14506 = G__14507;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq12638){
var G__12639 = cljs.core.first.call(null,seq12638);
var seq12638__$1 = cljs.core.next.call(null,seq12638);
var G__12640 = cljs.core.first.call(null,seq12638__$1);
var seq12638__$2 = cljs.core.next.call(null,seq12638__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12639,G__12640,seq12638__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__12658 = arguments.length;
switch (G__12658) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14515 = arguments.length;
var i__4737__auto___14517 = (0);
while(true){
if((i__4737__auto___14517 < len__4736__auto___14515)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14517]));

var G__14518 = (i__4737__auto___14517 + (1));
i__4737__auto___14517 = G__14518;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq12654){
var G__12655 = cljs.core.first.call(null,seq12654);
var seq12654__$1 = cljs.core.next.call(null,seq12654);
var G__12656 = cljs.core.first.call(null,seq12654__$1);
var seq12654__$2 = cljs.core.next.call(null,seq12654__$1);
var G__12657 = cljs.core.first.call(null,seq12654__$2);
var seq12654__$3 = cljs.core.next.call(null,seq12654__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12655,G__12656,G__12657,seq12654__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__12667 = arguments.length;
switch (G__12667) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14520 = arguments.length;
var i__4737__auto___14521 = (0);
while(true){
if((i__4737__auto___14521 < len__4736__auto___14520)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14521]));

var G__14522 = (i__4737__auto___14521 + (1));
i__4737__auto___14521 = G__14522;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq12663){
var G__12664 = cljs.core.first.call(null,seq12663);
var seq12663__$1 = cljs.core.next.call(null,seq12663);
var G__12665 = cljs.core.first.call(null,seq12663__$1);
var seq12663__$2 = cljs.core.next.call(null,seq12663__$1);
var G__12666 = cljs.core.first.call(null,seq12663__$2);
var seq12663__$3 = cljs.core.next.call(null,seq12663__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12664,G__12665,G__12666,seq12663__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__12681 = arguments.length;
switch (G__12681) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14531 = arguments.length;
var i__4737__auto___14532 = (0);
while(true){
if((i__4737__auto___14532 < len__4736__auto___14531)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14532]));

var G__14533 = (i__4737__auto___14532 + (1));
i__4737__auto___14532 = G__14533;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq12677){
var G__12678 = cljs.core.first.call(null,seq12677);
var seq12677__$1 = cljs.core.next.call(null,seq12677);
var G__12679 = cljs.core.first.call(null,seq12677__$1);
var seq12677__$2 = cljs.core.next.call(null,seq12677__$1);
var G__12680 = cljs.core.first.call(null,seq12677__$2);
var seq12677__$3 = cljs.core.next.call(null,seq12677__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12678,G__12679,G__12680,seq12677__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__12688 = arguments.length;
switch (G__12688) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__12714 = arguments.length;
switch (G__12714) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__12723 = v;
var v1 = cljs.core.nth.call(null,vec__12723,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__12733 = xs__$1;
var seq__12734 = cljs.core.seq.call(null,vec__12733);
var first__12735 = cljs.core.first.call(null,seq__12734);
var seq__12734__$1 = cljs.core.next.call(null,seq__12734);
var x1 = first__12735;
var xn = seq__12734__$1;
if(xn){
var G__14570 = cljs.core.conj.call(null,butlast,x1);
var G__14571 = xn;
butlast = G__14570;
xs__$1 = G__14571;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14574 = arguments.length;
var i__4737__auto___14575 = (0);
while(true){
if((i__4737__auto___14575 < len__4736__auto___14574)){
args__4742__auto__.push((arguments[i__4737__auto___14575]));

var G__14576 = (i__4737__auto___14575 + (1));
i__4737__auto___14575 = G__14576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs(lx));
}),args));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq12736){
var G__12737 = cljs.core.first.call(null,seq12736);
var seq12736__$1 = cljs.core.next.call(null,seq12736);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12737,seq12736__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__12742 = arguments.length;
switch (G__12742) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14580 = arguments.length;
var i__4737__auto___14581 = (0);
while(true){
if((i__4737__auto___14581 < len__4736__auto___14580)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14581]));

var G__14582 = (i__4737__auto___14581 + (1));
i__4737__auto___14581 = G__14582;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq12739){
var G__12740 = cljs.core.first.call(null,seq12739);
var seq12739__$1 = cljs.core.next.call(null,seq12739);
var G__12741 = cljs.core.first.call(null,seq12739__$1);
var seq12739__$2 = cljs.core.next.call(null,seq12739__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12740,G__12741,seq12739__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll)))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__12748 = arguments.length;
switch (G__12748) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__12759 = arguments.length;
switch (G__12759) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__14585 = null;
var G__14585__0 = (function (){
return rf.call(null);
});
var G__14585__1 = (function (acc){
return rf.call(null,acc);
});
var G__14585__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.call(null,cljs.core._deref(seen_),k));

return rf.call(null,acc,input);
}
});
G__14585 = function(acc,input){
switch(arguments.length){
case 0:
return G__14585__0.call(this);
case 1:
return G__14585__1.call(this,acc);
case 2:
return G__14585__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14585.cljs$core$IFn$_invoke$arity$0 = G__14585__0;
G__14585.cljs$core$IFn$_invoke$arity$1 = G__14585__1;
G__14585.cljs$core$IFn$_invoke$arity$2 = G__14585__2;
return G__14585;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,x){
return cljs.core.assoc_BANG_.call(null,acc,f.call(null,x),x);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__12798_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__12798_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__12812 = arguments.length;
switch (G__12812) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__10690__auto__ = cljs.core.seq.call(null,ks);
if(b2__10690__auto__){
var ks_seq = b2__10690__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__10690__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__10690__auto____$1){
var ks__$1 = b2__10690__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__12832 = arguments.length;
switch (G__12832) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__12845 = arguments.length;
switch (G__12845) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14589 = arguments.length;
var i__4737__auto___14590 = (0);
while(true){
if((i__4737__auto___14590 < len__4736__auto___14589)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14590]));

var G__14591 = (i__4737__auto___14590 + (1));
i__4737__auto___14590 = G__14591;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq12841){
var G__12842 = cljs.core.first.call(null,seq12841);
var seq12841__$1 = cljs.core.next.call(null,seq12841);
var G__12843 = cljs.core.first.call(null,seq12841__$1);
var seq12841__$2 = cljs.core.next.call(null,seq12841__$1);
var G__12844 = cljs.core.first.call(null,seq12841__$2);
var seq12841__$3 = cljs.core.next.call(null,seq12841__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12842,G__12843,G__12844,seq12841__$3);
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__12865 = arguments.length;
switch (G__12865) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14593 = arguments.length;
var i__4737__auto___14594 = (0);
while(true){
if((i__4737__auto___14594 < len__4736__auto___14593)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14594]));

var G__14595 = (i__4737__auto___14594 + (1));
i__4737__auto___14594 = G__14595;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if(((s1) && (s2))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq12862){
var G__12863 = cljs.core.first.call(null,seq12862);
var seq12862__$1 = cljs.core.next.call(null,seq12862);
var G__12864 = cljs.core.first.call(null,seq12862__$1);
var seq12862__$2 = cljs.core.next.call(null,seq12862__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12863,G__12864,seq12862__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if(((s1) && (s2))){
var G__14603 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__14604 = cljs.core.next.call(null,s1);
var G__14605 = cljs.core.next.call(null,s2);
v = G__14603;
s1 = G__14604;
s2 = G__14605;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_14607 = ({});
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,(function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_14607);
if((lv === not_found_14607)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
}),(function (){var or__4126__auto__ = acc;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
}),null,maps);
});
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14611 = arguments.length;
var i__4737__auto___14612 = (0);
while(true){
if((i__4737__auto___14612 < len__4736__auto___14611)){
args__4742__auto__.push((arguments[i__4737__auto___14612]));

var G__14613 = (i__4737__auto___14612 + (1));
i__4737__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq12935){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12935));
}));


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14614 = arguments.length;
var i__4737__auto___14615 = (0);
while(true){
if((i__4737__auto___14615 < len__4736__auto___14614)){
args__4742__auto__.push((arguments[i__4737__auto___14615]));

var G__14617 = (i__4737__auto___14615 + (1));
i__4737__auto___14615 = G__14617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq12954){
var G__12955 = cljs.core.first.call(null,seq12954);
var seq12954__$1 = cljs.core.next.call(null,seq12954);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12955,seq12954__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14629 = arguments.length;
var i__4737__auto___14630 = (0);
while(true){
if((i__4737__auto___14630 < len__4736__auto___14629)){
args__4742__auto__.push((arguments[i__4737__auto___14630]));

var G__14631 = (i__4737__auto___14630 + (1));
i__4737__auto___14630 = G__14631;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq13037){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13037));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14632 = arguments.length;
var i__4737__auto___14633 = (0);
while(true){
if((i__4737__auto___14633 < len__4736__auto___14632)){
args__4742__auto__.push((arguments[i__4737__auto___14633]));

var G__14634 = (i__4737__auto___14633 + (1));
i__4737__auto___14633 = G__14634;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq13052){
var G__13053 = cljs.core.first.call(null,seq13052);
var seq13052__$1 = cljs.core.next.call(null,seq13052);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13053,seq13052__$1);
}));


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value actually changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref.call(null,atom_);
cljs.core.reset_BANG_.call(null,atom_,val);

if(cljs.core._EQ_.call(null,old,val)){
return false;
} else {
return true;
}
break;
}
});
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
cljs.core.reset_BANG_.call(null,atom_,m1);

return v1;
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
cljs.core.reset_BANG_.call(null,atom_,v1);

if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
cljs.core.reset_BANG_.call(null,atom_,v1);

return return$.call(null,v0,v1);
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
cljs.core.reset_BANG_.call(null,atom_,m1);

return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
cljs.core.reset_BANG_.call(null,atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
cljs.core.reset_BANG_.call(null,atom_,m1);

return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__10690__auto__ = cljs.core.seq.call(null,ks);
if(b2__10690__auto__){
var ks_seq = b2__10690__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__10690__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__10690__auto__))
,ks);
cljs.core.reset_BANG_.call(null,atom_,m1);

return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__10690__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__10690__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
cljs.core.reset_BANG_.call(null,atom_,m1);

if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__10690__auto__ = cljs.core.seq.call(null,ks);
if(b2__10690__auto__){
var ks_seq = b2__10690__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
cljs.core.reset_BANG_.call(null,atom_,m1);

return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_14655 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__13132 = arguments.length;
switch (G__13132) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_14655,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_14655,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_14658 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__13152 = arguments.length;
switch (G__13152) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_14658,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_14658,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var return_14664 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__13161 = arguments.length;
switch (G__13161) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_14664,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_14664,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__13171 = arguments.length;
switch (G__13171) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__13172 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__13172,(0),null);
return v0;
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

var not_found_14679 = ({});
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_14679,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});
var return_14683 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__13184 = arguments.length;
switch (G__13184) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_14683,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_14683,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_14683,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_14687 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__13194 = arguments.length;
switch (G__13194) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_14687,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_14687,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_14687,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);

var return_14690 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__13205 = arguments.length;
switch (G__13205) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_14690,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_14690,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_14690,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__10690__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__10690__auto__)){
var perf = b2__10690__auto__;
var b2__10690__auto____$1 = (function (){var or__4126__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__10690__auto____$1)){
var f = b2__10690__auto____$1;
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
} else {
return (function (){
return ((1000000) * (new Date()).getTime());
});
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var G__14701__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.call(null,cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.call(null,cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.call(null,cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__14701 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__14707__i = 0, G__14707__a = new Array(arguments.length -  0);
while (G__14707__i < G__14707__a.length) {G__14707__a[G__14707__i] = arguments[G__14707__i + 0]; ++G__14707__i;}
  xs = new cljs.core.IndexedSeq(G__14707__a,0,null);
} 
return G__14701__delegate.call(this,xs);};
G__14701.cljs$lang$maxFixedArity = 0;
G__14701.cljs$lang$applyTo = (function (arglist__14708){
var xs = cljs.core.seq(arglist__14708);
return G__14701__delegate(xs);
});
G__14701.cljs$core$IFn$_invoke$arity$variadic = G__14701__delegate;
return G__14701;
})()
;
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__14709__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,(function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null))]);
}
})),args);
}
})());
};
var G__14709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14710__i = 0, G__14710__a = new Array(arguments.length -  0);
while (G__14710__i < G__14710__a.length) {G__14710__a[G__14710__i] = arguments[G__14710__i + 0]; ++G__14710__i;}
  args = new cljs.core.IndexedSeq(G__14710__a,0,null);
} 
return G__14709__delegate.call(this,args);};
G__14709.cljs$lang$maxFixedArity = 0;
G__14709.cljs$lang$applyTo = (function (arglist__14711){
var args = cljs.core.seq(arglist__14711);
return G__14709__delegate(args);
});
G__14709.cljs$core$IFn$_invoke$arity$variadic = G__14709__delegate;
return G__14709;
})()
;
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__13247 = arguments.length;
switch (G__13247) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_14721 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13263){if((e13263 instanceof Error)){
var e_14721 = e13263;
return e_14721;
} else {
throw e13263;

}
}})();
if((e_14721 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1783,"(pos-int? ttl-ms)",ttl_ms,e_14721,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return (function() { 
var G__14724__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_14726 = null;
cljs.core.reset_BANG_.call(null,latch_,latch_14726);

cljs.core.swap_BANG_.call(null,cache_,(function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,(function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4126__auto__ = (_QMARK_e == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
}));
return cljs.core.deref.call(null,e.delay);
}
};
var G__14724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14737__i = 0, G__14737__a = new Array(arguments.length -  0);
while (G__14737__i < G__14737__a.length) {G__14737__a[G__14737__i] = arguments[G__14737__i + 0]; ++G__14737__i;}
  args = new cljs.core.IndexedSeq(G__14737__a,0,null);
} 
return G__14724__delegate.call(this,args);};
G__14724.cljs$lang$maxFixedArity = 0;
G__14724.cljs$lang$applyTo = (function (arglist__14738){
var args = cljs.core.seq(arglist__14738);
return G__14724__delegate(args);
});
G__14724.cljs$core$IFn$_invoke$arity$variadic = G__14724__delegate;
return G__14724;
})()
;
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_)(x);
}
})(ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1835,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_14741 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13277){if((e13277 instanceof Error)){
var e_14741 = e13277;
return e_14741;
} else {
throw e13277;

}
}})();
if((e_14741 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1836,"(pos-int? cache-size)",cache_size,e_14741,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__4126__auto__ = ttl_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = (!((ttl_ms__$1 === (0))));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return (function() { 
var G__14744__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_14755 = null;
cljs.core.reset_BANG_.call(null,latch_,latch_14755);

if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,(function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,(function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var snapshot_14757 = cljs.core.deref.call(null,cache_);
var n_to_gc_14758 = (cljs.core.count.call(null,snapshot_14757) - cache_size__$1);
if((n_to_gc_14758 > (64))){
var ks_to_gc_14763 = taoensso.encore.top.call(null,n_to_gc_14758,(function (k){
var e = cljs.core.get.call(null,snapshot_14757,k);
return (e.tick_lru + e.tick_lfu);
}),cljs.core.keys.call(null,snapshot_14757));
cljs.core.swap_BANG_.call(null,cache_,(function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
}),cljs.core.transient$.call(null,(function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_14763));
}));
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,(function (n){
return (n + (1));
}));
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,(function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4126__auto__ = (_QMARK_e == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
}));
return cljs.core.deref.call(null,e.delay);
}
};
var G__14744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14774__i = 0, G__14774__a = new Array(arguments.length -  0);
while (G__14774__i < G__14774__a.length) {G__14774__a[G__14774__i] = arguments[G__14774__i + 0]; ++G__14774__i;}
  args = new cljs.core.IndexedSeq(G__14774__a,0,null);
} 
return G__14744__delegate.call(this,args);};
G__14744.cljs$lang$maxFixedArity = 0;
G__14744.cljs$lang$applyTo = (function (arglist__14775){
var args = cljs.core.seq(arglist__14775);
return G__14744__delegate(args);
});
G__14744.cljs$core$IFn$_invoke$arity$variadic = G__14744__delegate;
return G__14744;
})()
;
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_14785 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13293){if((e13293 instanceof Error)){
var e = e13293;
return e;
} else {
throw e13293;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1937,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13294){if((e13294 instanceof Error)){
var e = e13294;
return e;
} else {
throw e13294;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1937,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (acc,sid,p__13299){
var vec__13300 = p__13299;
var n = cljs.core.nth.call(null,vec__13300,(0),null);
var ms = cljs.core.nth.call(null,vec__13300,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_14785(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,(function (acc,p__13305){
var vec__13306 = p__13305;
var n = cljs.core.nth.call(null,vec__13306,(0),null);
var ms = cljs.core.nth.call(null,vec__13306,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__13306,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__4126__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (i__$1){
return (i__$1 + (1));
})(cljs.core._deref(i)));
}
})(),limit_spec_14785(n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if(((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5)))){
var latch_14795 = null;
cljs.core.reset_BANG_.call(null,latch_,latch_14795);

cljs.core.swap_BANG_.call(null,reqs_,(function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,(function (acc__$1,sid,e){
var b2__10690__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__10690__auto__)){
var s = b2__10690__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
}),cljs.core.transient$.call(null,(function (){var or__4126__auto__ = reqs;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
}));
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__10690__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__10690__auto__)){
var s = b2__10690__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__4126__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__10690__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__10690__auto__)){
var h = b2__10690__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__10690__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__10690__auto__)){
var l = b2__10690__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__10690__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__10690__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__10690__auto____$1)){
var e = b2__10690__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__10690__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return null;
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__13336 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__13336,(0),null);
var f = cljs.core.nth.call(null,vec__13336,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__13369 = arguments.length;
switch (G__13369) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___14826 = arguments.length;
var i__4737__auto___14827 = (0);
while(true){
if((i__4737__auto___14827 < len__4736__auto___14826)){
args_arr__4757__auto__.push((arguments[i__4737__auto___14827]));

var G__14828 = (i__4737__auto___14827 + (1));
i__4737__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq13365){
var G__13367 = cljs.core.first.call(null,seq13365);
var seq13365__$1 = cljs.core.next.call(null,seq13365);
var G__13368 = cljs.core.first.call(null,seq13365__$1);
var seq13365__$2 = cljs.core.next.call(null,seq13365__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13367,G__13368,seq13365__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__13386 = arguments.length;
switch (G__13386) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__4115__auto__ = separator;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__4115__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__13444 = arguments.length;
switch (G__13444) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__13447 = arguments.length;
switch (G__13447) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__13475 = arguments.length;
switch (G__13475) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__14849__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__14849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14850__i = 0, G__14850__a = new Array(arguments.length -  0);
while (G__14850__i < G__14850__a.length) {G__14850__a[G__14850__i] = arguments[G__14850__i + 0]; ++G__14850__i;}
  args = new cljs.core.IndexedSeq(G__14850__a,0,null);
} 
return G__14849__delegate.call(this,args);};
G__14849.cljs$lang$maxFixedArity = 0;
G__14849.cljs$lang$applyTo = (function (arglist__14851){
var args = cljs.core.seq(arglist__14851);
return G__14849__delegate(args);
});
G__14849.cljs$core$IFn$_invoke$arity$variadic = G__14849__delegate;
return G__14849;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__4126__auto__ = fmt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14852 = arguments.length;
var i__4737__auto___14853 = (0);
while(true){
if((i__4737__auto___14853 < len__4736__auto___14852)){
args__4742__auto__.push((arguments[i__4737__auto___14853]));

var G__14854 = (i__4737__auto___14853 + (1));
i__4737__auto___14853 = G__14854;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq13486){
var G__13487 = cljs.core.first.call(null,seq13486);
var seq13486__$1 = cljs.core.next.call(null,seq13486);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13487,seq13486__$1);
}));

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.call(null),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14861 = arguments.length;
var i__4737__auto___14862 = (0);
while(true){
if((i__4737__auto___14862 < len__4736__auto___14861)){
args__4742__auto__.push((arguments[i__4737__auto___14862]));

var G__14864 = (i__4737__auto___14862 + (1));
i__4737__auto___14862 = G__14864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq13493){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13493));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__13503 = arguments.length;
switch (G__13503) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14870 = arguments.length;
var i__4737__auto___14871 = (0);
while(true){
if((i__4737__auto___14871 < len__4736__auto___14870)){
args__4742__auto__.push((arguments[i__4737__auto___14871]));

var G__14872 = (i__4737__auto___14871 + (1));
i__4737__auto___14871 = G__14872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.call(null),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq13518){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13518));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__4115__auto__ = s1;
if(cljs.core.truth_(and__4115__auto__)){
return s2;
} else {
return and__4115__auto__;
}
})())){
var v1 = cljs.core.vec.call(null,s1);
var v2 = cljs.core.vec.call(null,s2);
var n1 = cljs.core.count.call(null,v1);
if((n1 === cljs.core.count.call(null,v2))){
return taoensso.encore.reduce_n.call(null,(function (acc,idx){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,v1,idx),cljs.core.get.call(null,v2,idx))){
return acc;
} else {
return false;
}
}),true,n1);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_14877 = ({});
var nil__GT_sentinel_14878 = (function (x){
if((x == null)){
return sentinel_14877;
} else {
return x;
}
});
var sentinel__GT_nil_14879 = (function (x){
if((x === sentinel_14877)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__13542 = arguments.length;
switch (G__13542) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__4217__auto__ = coll_size;
var y__4218__auto__ = cljs.core.long$.call(null,n);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.call(null,cljs.core.take.call(null,n__$1),cljs.core.completing.call(null,rf),init,cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__13558 = arguments.length;
switch (G__13558) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_.call(null,to)){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),coll));
} else {
return taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__13574 = arguments.length;
switch (G__13574) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14905 = arguments.length;
var i__4737__auto___14906 = (0);
while(true){
if((i__4737__auto___14906 < len__4736__auto___14905)){
args__4742__auto__.push((arguments[i__4737__auto___14906]));

var G__14907 = (i__4737__auto___14906 + (1));
i__4737__auto___14906 = G__14907;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__13621){
var map__13622 = p__13621;
var map__13622__$1 = (((((!((map__13622 == null))))?(((((map__13622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13622):map__13622);
var opts = map__13622__$1;
var ms = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
taoensso.truss.impl.revery_QMARK_.call(null,(function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2466,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
}),cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq13617){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13617));
}));

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__14926__delegate = function (xs){
var b2__10690__auto__ = console.log;
if(cljs.core.truth_(b2__10690__auto__)){
var f = b2__10690__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__14926 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__14927__i = 0, G__14927__a = new Array(arguments.length -  0);
while (G__14927__i < G__14927__a.length) {G__14927__a[G__14927__i] = arguments[G__14927__i + 0]; ++G__14927__i;}
  xs = new cljs.core.IndexedSeq(G__14927__a,0,null);
} 
return G__14926__delegate.call(this,xs);};
G__14926.cljs$lang$maxFixedArity = 0;
G__14926.cljs$lang$applyTo = (function (arglist__14928){
var xs = cljs.core.seq(arglist__14928);
return G__14926__delegate(xs);
});
G__14926.cljs$core$IFn$_invoke$arity$variadic = G__14926__delegate;
return G__14926;
})()
:(function() { 
var G__14929__delegate = function (xs){
return null;
};
var G__14929 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__14930__i = 0, G__14930__a = new Array(arguments.length -  0);
while (G__14930__i < G__14930__a.length) {G__14930__a[G__14930__i] = arguments[G__14930__i + 0]; ++G__14930__i;}
  xs = new cljs.core.IndexedSeq(G__14930__a,0,null);
} 
return G__14929__delegate.call(this,xs);};
G__14929.cljs$lang$maxFixedArity = 0;
G__14929.cljs$lang$applyTo = (function (arglist__14931){
var xs = cljs.core.seq(arglist__14931);
return G__14929__delegate(xs);
});
G__14929.cljs$core$IFn$_invoke$arity$variadic = G__14929__delegate;
return G__14929;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14932 = arguments.length;
var i__4737__auto___14933 = (0);
while(true){
if((i__4737__auto___14933 < len__4736__auto___14932)){
args__4742__auto__.push((arguments[i__4737__auto___14933]));

var G__14937 = (i__4737__auto___14933 + (1));
i__4737__auto___14933 = G__14937;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq13644){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13644));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14939 = arguments.length;
var i__4737__auto___14940 = (0);
while(true){
if((i__4737__auto___14940 < len__4736__auto___14939)){
args__4742__auto__.push((arguments[i__4737__auto___14940]));

var G__14942 = (i__4737__auto___14940 + (1));
i__4737__auto___14940 = G__14942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq13646){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13646));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14945 = arguments.length;
var i__4737__auto___14946 = (0);
while(true){
if((i__4737__auto___14946 < len__4736__auto___14945)){
args__4742__auto__.push((arguments[i__4737__auto___14946]));

var G__14949 = (i__4737__auto___14946 + (1));
i__4737__auto___14946 = G__14949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log(taoensso.encore.format_STAR_.call(null,fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq13656){
var G__13657 = cljs.core.first.call(null,seq13656);
var seq13656__$1 = cljs.core.next.call(null,seq13656);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13657,seq13656__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14957 = arguments.length;
var i__4737__auto___14960 = (0);
while(true){
if((i__4737__auto___14960 < len__4736__auto___14957)){
args__4742__auto__.push((arguments[i__4737__auto___14960]));

var G__14962 = (i__4737__auto___14960 + (1));
i__4737__auto___14960 = G__14962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq13684){
var G__13685 = cljs.core.first.call(null,seq13684);
var seq13684__$1 = cljs.core.next.call(null,seq13684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13685,seq13684__$1);
}));

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__10690__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__10690__auto__)){
var js_win = b2__10690__auto__;
var b2__10690__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__10690__auto____$1)){
var loc = b2__10690__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_(params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_14974 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13728){if((e13728 instanceof Error)){
var e_14974 = e13728;
return e_14974;
} else {
throw e13728;

}
}})();
if((e_14974 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2773,"(map? params)",params,e_14974,null);
}

if(cljs.core.truth_((((typeof FormData !== 'undefined'))?taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params)):false))){
var form_data = (new FormData());
var seq__13731_14976 = cljs.core.seq.call(null,params);
var chunk__13732_14977 = null;
var count__13733_14978 = (0);
var i__13734_14979 = (0);
while(true){
if((i__13734_14979 < count__13733_14978)){
var vec__13746_14980 = cljs.core._nth(chunk__13732_14977,i__13734_14979);
var k_14981 = cljs.core.nth.call(null,vec__13746_14980,(0),null);
var v_14982 = cljs.core.nth.call(null,vec__13746_14980,(1),null);
form_data.append(cljs.core.name.call(null,k_14981),v_14982);


var G__14983 = seq__13731_14976;
var G__14984 = chunk__13732_14977;
var G__14985 = count__13733_14978;
var G__14986 = (i__13734_14979 + (1));
seq__13731_14976 = G__14983;
chunk__13732_14977 = G__14984;
count__13733_14978 = G__14985;
i__13734_14979 = G__14986;
continue;
} else {
var temp__5735__auto___14987 = cljs.core.seq.call(null,seq__13731_14976);
if(temp__5735__auto___14987){
var seq__13731_14988__$1 = temp__5735__auto___14987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13731_14988__$1)){
var c__4556__auto___14989 = cljs.core.chunk_first.call(null,seq__13731_14988__$1);
var G__14990 = cljs.core.chunk_rest.call(null,seq__13731_14988__$1);
var G__14991 = c__4556__auto___14989;
var G__14992 = cljs.core.count.call(null,c__4556__auto___14989);
var G__14993 = (0);
seq__13731_14976 = G__14990;
chunk__13732_14977 = G__14991;
count__13733_14978 = G__14992;
i__13734_14979 = G__14993;
continue;
} else {
var vec__13750_14995 = cljs.core.first.call(null,seq__13731_14988__$1);
var k_14996 = cljs.core.nth.call(null,vec__13750_14995,(0),null);
var v_14997 = cljs.core.nth.call(null,vec__13750_14995,(1),null);
form_data.append(cljs.core.name.call(null,k_14996),v_14997);


var G__14999 = cljs.core.next.call(null,seq__13731_14988__$1);
var G__15000 = null;
var G__15001 = (0);
var G__15002 = (0);
seq__13731_14976 = G__14999;
chunk__13732_14977 = G__15000;
count__13733_14978 = G__15001;
i__13734_14979 = G__15002;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode(params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_)(x);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.js_form_data_QMARK_)(x);
}
}
})(params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2785,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__13758 = method;
var G__13758__$1 = (((G__13758 instanceof cljs.core.Keyword))?G__13758.fqn:null);
switch (G__13758__$1) {
case "get":
return url_encode(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13758__$1)].join('')));

}
});
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__13827,callback_fn){
var map__13828 = p__13827;
var map__13828__$1 = (((((!((map__13828 == null))))?(((((map__13828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13828):map__13828);
var opts = map__13828__$1;
var method = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13828__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_)(x);
}
})(timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2817,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__10690__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__10690__auto__)){
var xhr = b2__10690__auto__;
try{var timeout_ms__$1 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__13838 = method;
var G__13838__$1 = (((G__13838 instanceof cljs.core.Keyword))?G__13838.fqn:null);
switch (G__13838__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13838__$1)].join('')));

}
})();
var vec__13835 = taoensso.encore.coerce_xhr_params(uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__13835,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__13835,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,(function (p1__13822_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__13822_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__10690__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__10690__auto____$1)){
var pf = b2__10690__auto____$1;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4115__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__4115__auto__;
}
})())?(loaded / total):null);
return pf.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
}));
} else {
return null;
}
})();
var G__13839_15021 = xhr;
goog.events.listenOnce(G__13839_15021,goog.net.EventType.READY,(function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__13839_15021,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__13840 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});
if(match_QMARK_("/edn")){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(match_QMARK_("/json")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(match_QMARK_("/xml")){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__13845 = resp_type__$1;
var G__13845__$1 = (((G__13845 instanceof cljs.core.Keyword))?G__13845.fqn:null);
switch (G__13845__$1) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13845__$1)].join('')));

}
}catch (e13844){if((e13844 instanceof Error)){
var _e = e13844;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e13844;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__13840,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__13840,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__13840,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
}));


xhr.setTimeoutInterval((function (){var or__4126__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e13834){if((e13834 instanceof Error)){
var e = e13834;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e13834;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Based on https://goo.gl/fBqy6e
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15029 = arguments.length;
var i__4737__auto___15030 = (0);
while(true){
if((i__4737__auto___15030 < len__4736__auto___15029)){
args__4742__auto__.push((arguments[i__4737__auto___15030]));

var G__15031 = (i__4737__auto___15030 + (1));
i__4737__auto___15030 = G__15031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__13861){
var vec__13862 = p__13861;
var encoding = cljs.core.nth.call(null,vec__13862,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq13849){
var G__13850 = cljs.core.first.call(null,seq13849);
var seq13849__$1 = cljs.core.next.call(null,seq13849);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13850,seq13849__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k)),"=",taoensso.encore.url_encode.call(null,(function (){var or__4126__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.call(null,"&",strs);
});
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join((function (){var iter__4529__auto__ = (function taoensso$encore$format_query_string_$_iter__13875(s__13876){
return (new cljs.core.LazySeq(null,(function (){
var s__13876__$1 = s__13876;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__13876__$1);
if(temp__5735__auto__){
var s__13876__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13876__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__13876__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__13878 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__13877 = (0);
while(true){
if((i__13877 < size__4528__auto__)){
var vec__13898 = cljs.core._nth(c__4527__auto__,i__13877);
var k = cljs.core.nth.call(null,vec__13898,(0),null);
var v = cljs.core.nth.call(null,vec__13898,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__13878,((cljs.core.sequential_QMARK_.call(null,v))?join(cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4126__auto__ = cljs.core.seq.call(null,v);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__15032 = (i__13877 + (1));
i__13877 = G__15032;
continue;
} else {
var G__15033 = (i__13877 + (1));
i__13877 = G__15033;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13878),taoensso$encore$format_query_string_$_iter__13875.call(null,cljs.core.chunk_rest.call(null,s__13876__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13878),null);
}
} else {
var vec__13912 = cljs.core.first.call(null,s__13876__$2);
var k = cljs.core.nth.call(null,vec__13912,(0),null);
var v = cljs.core.nth.call(null,vec__13912,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join(cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__4126__auto__ = cljs.core.seq.call(null,v);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__13875.call(null,cljs.core.rest.call(null,s__13876__$2)));
} else {
var G__15034 = cljs.core.rest.call(null,s__13876__$2);
s__13876__$1 = G__15034;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__10690__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__10690__auto__)){
var cur = b2__10690__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15037 = arguments.length;
var i__4737__auto___15038 = (0);
while(true){
if((i__4737__auto___15038 < len__4736__auto___15037)){
args__4742__auto__.push((arguments[i__4737__auto___15038]));

var G__15039 = (i__4737__auto___15038 + (1));
i__4737__auto___15038 = G__15039;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__13959){
var vec__13960 = p__13959;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__13960,(0),null);
var encoding = cljs.core.nth.call(null,vec__13960,(1),null);
if(((clojure.string.blank_QMARK_.call(null,s)) || ((!(taoensso.encore.str_contains_QMARK_.call(null,s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,(function (m,param){
var b2__10690__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__10690__auto__)){
var vec__13969 = b2__10690__auto__;
var k = cljs.core.nth.call(null,vec__13969,(0),null);
var v = cljs.core.nth.call(null,vec__13969,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq13945){
var G__13949 = cljs.core.first.call(null,seq13945);
var seq13945__$1 = cljs.core.next.call(null,seq13945);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13949,seq13945__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__13982 = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__13982,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__13982,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__10690__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__10690__auto__)){
var qstr = b2__10690__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__15040__delegate = function (args){
throw cljs.core.ex_info.call(null,["Attempting to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__15040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15041__i = 0, G__15041__a = new Array(arguments.length -  0);
while (G__15041__i < G__15041__a.length) {G__15041__a[G__15041__i] = arguments[G__15041__i + 0]; ++G__15041__i;}
  args = new cljs.core.IndexedSeq(G__15041__a,0,null);
} 
return G__15040__delegate.call(this,args);};
G__15040.cljs$lang$maxFixedArity = 0;
G__15040.cljs$lang$applyTo = (function (arglist__15042){
var args = cljs.core.seq(arglist__15042);
return G__15040__delegate(args);
});
G__15040.cljs$core$IFn$_invoke$arity$variadic = G__15040__delegate;
return G__15040;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
taoensso.encore.cljs_thing = "cljs-thing";


var stubfn__15043 = taoensso.encore._new_stubfn_.call(null,"stub-test");
taoensso.encore._unstub_stub_test = (function taoensso$encore$_unstub_stub_test(f){
return cljs.core.vreset_BANG_.call(null,stubfn__15043,taoensso.encore._assert_unstub_val.call(null,f));
});

taoensso.encore.unstub_stub_test = (function taoensso$encore$unstub_stub_test(f){
return taoensso.encore._unstub_stub_test.call(null,f);
});

taoensso.encore.stub_test = (function taoensso$encore$stub_test(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15044 = arguments.length;
var i__4737__auto___15045 = (0);
while(true){
if((i__4737__auto___15045 < len__4736__auto___15044)){
args__4742__auto__.push((arguments[i__4737__auto___15045]));

var G__15051 = (i__4737__auto___15045 + (1));
i__4737__auto___15045 = G__15051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.encore.stub_test.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.encore.stub_test.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,stubfn__15043),args);
}));

(taoensso.encore.stub_test.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.stub_test.cljs$lang$applyTo = (function (seq13997){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13997));
}));


taoensso.encore._unstub_stub_test.call(null,cljs.core.identity);
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,["^",x,"$"].join(''),".","\\."),"*","(.*)"));
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x)))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return (function (_QMARK_ns){
return true;
});
} else {
var match_QMARK_ = compile1(x);
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)))){
return true;
} else {
return null;
}
});
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__14018 = match_fns;
var seq__14019 = cljs.core.seq.call(null,vec__14018);
var first__14020 = cljs.core.first.call(null,seq__14019);
var seq__14019__$1 = cljs.core.next.call(null,seq__14019);
var m1 = first__14020;
var mn = seq__14019__$1;
if(mn){
return (function (ns_str){
return taoensso.encore.rsome.call(null,(function (p1__14002_SHARP_){
return p1__14002_SHARP_.call(null,ns_str);
}),match_fns);
});
} else {
return (function (ns_str){
return m1.call(null,ns_str);
});
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__14027 = match_fns;
var seq__14028 = cljs.core.seq.call(null,vec__14027);
var first__14029 = cljs.core.first.call(null,seq__14028);
var seq__14028__$1 = cljs.core.next.call(null,seq__14028);
var m1 = first__14029;
var mn = seq__14028__$1;
if(mn){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome.call(null,(function (p1__14003_SHARP_){
return p1__14003_SHARP_.call(null,ns_str);
}),match_fns));
});
} else {
return (function (ns_str){
return cljs.core.not(m1.call(null,ns_str));
});
}
})():null);
if(cljs.core.truth_((function (){var and__4115__auto__ = white;
if(cljs.core.truth_(and__4115__auto__)){
return black;
} else {
return and__4115__auto__;
}
})())){
return (function (_QMARK_ns){
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns);
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
} else {
if(cljs.core.truth_(white)){
return (function (_QMARK_ns){
if(cljs.core.truth_(white(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)))){
return true;
} else {
return null;
}
});
} else {
if(cljs.core.truth_(black)){
return (function (_QMARK_ns){
if(cljs.core.truth_(black(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)))){
return true;
} else {
return null;
}
});
} else {
return (function (_QMARK_ns){
return true;
});
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_15062 = (function (_,msecs,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_,msecs,f);
} else {
var m__4426__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_15062(_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = ({});

taoensso.encore._tout_cancelled = ({});

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_15066 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_15066(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_15067 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_15067(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_15069 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_15069(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_15070 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_15070(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_15072 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_15072(_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_15074 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_15074(_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_(t__$1);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll(t__$1);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__14056 = arguments.length;
switch (G__14056) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return f.call(null);
}),null));
if(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_)){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});
var impl_15089 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout(impl_15089,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15097 = arguments.length;
var i__4737__auto___15098 = (0);
while(true){
if((i__4737__auto___15098 < len__4736__auto___15097)){
args__4742__auto__.push((arguments[i__4737__auto___15098]));

var G__15099 = (i__4737__auto___15098 + (1));
i__4737__auto___15098 = G__15099;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__14078){
var vec__14079 = p__14078;
var type = cljs.core.nth.call(null,vec__14079,(0),null);
var nplaces = cljs.core.nth.call(null,vec__14079,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq14073){
var G__14074 = cljs.core.first.call(null,seq14073);
var seq14073__$1 = cljs.core.next.call(null,seq14073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14074,seq14073__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__14083 = arguments.length;
switch (G__14083) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15105 = arguments.length;
var i__4737__auto___15106 = (0);
while(true){
if((i__4737__auto___15106 < len__4736__auto___15105)){
args__4742__auto__.push((arguments[i__4737__auto___15106]));

var G__15108 = (i__4737__auto___15106 + (1));
i__4737__auto___15106 = G__15108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq14090){
var G__14091 = cljs.core.first.call(null,seq14090);
var seq14090__$1 = cljs.core.next.call(null,seq14090);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14091,seq14090__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__14099){
var vec__14103 = p__14099;
var _ = cljs.core.nth.call(null,vec__14103,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14103,(1),null);
var id = cljs.core.nth.call(null,vec__14103,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return (function() { 
var G__15119__delegate = function (args){
var b2__10690__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__10690__auto__)){
var vec__14109 = b2__10690__auto__;
var worst_sid = cljs.core.nth.call(null,vec__14109,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__14109,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__15119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15120__i = 0, G__15120__a = new Array(arguments.length -  0);
while (G__15120__i < G__15120__a.length) {G__15120__a[G__15120__i] = arguments[G__15120__i + 0]; ++G__15120__i;}
  args = new cljs.core.IndexedSeq(G__15120__a,0,null);
} 
return G__15119__delegate.call(this,args);};
G__15119.cljs$lang$maxFixedArity = 0;
G__15119.cljs$lang$applyTo = (function (arglist__15121){
var args = cljs.core.seq(arglist__15121);
return G__15119__delegate(args);
});
G__15119.cljs$core$IFn$_invoke$arity$variadic = G__15119__delegate;
return G__15119;
})()
;
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return (function() { 
var G__15125__delegate = function (args){
var b2__10690__auto__ = rl();
if(cljs.core.truth_(b2__10690__auto__)){
var backoff = b2__10690__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__15125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15126__i = 0, G__15126__a = new Array(arguments.length -  0);
while (G__15126__i < G__15126__a.length) {G__15126__a[G__15126__i] = arguments[G__15126__i + 0]; ++G__15126__i;}
  args = new cljs.core.IndexedSeq(G__15126__a,0,null);
} 
return G__15125__delegate.call(this,args);};
G__15125.cljs$lang$maxFixedArity = 0;
G__15125.cljs$lang$applyTo = (function (arglist__15127){
var args = cljs.core.seq(arglist__15127);
return G__15125__delegate(args);
});
G__15125.cljs$core$IFn$_invoke$arity$variadic = G__15125__delegate;
return G__15125;
})()
;
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return (function() { 
var G__15128__delegate = function (args){
var b2__10690__auto__ = rl();
if(cljs.core.truth_(b2__10690__auto__)){
var backoff_ms = b2__10690__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__15128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15133__i = 0, G__15133__a = new Array(arguments.length -  0);
while (G__15133__i < G__15133__a.length) {G__15133__a[G__15133__i] = arguments[G__15133__i + 0]; ++G__15133__i;}
  args = new cljs.core.IndexedSeq(G__15133__a,0,null);
} 
return G__15128__delegate.call(this,args);};
G__15128.cljs$lang$maxFixedArity = 0;
G__15128.cljs$lang$applyTo = (function (arglist__15134){
var args = cljs.core.seq(arglist__15134);
return G__15128__delegate(args);
});
G__15128.cljs$core$IFn$_invoke$arity$variadic = G__15128__delegate;
return G__15128;
})()
;
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15135 = arguments.length;
var i__4737__auto___15136 = (0);
while(true){
if((i__4737__auto___15136 < len__4736__auto___15135)){
args__4742__auto__.push((arguments[i__4737__auto___15136]));

var G__15137 = (i__4737__auto___15136 + (1));
i__4737__auto___15136 = G__15137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__14131){
var vec__14132 = p__14131;
var nattempt = cljs.core.nth.call(null,vec__14132,(0),null);
var b2__10690__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__10690__auto__)){
var js_win = b2__10690__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4126__auto__ = nattempt;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq14125){
var G__14126 = cljs.core.first.call(null,seq14125);
var seq14125__$1 = cljs.core.next.call(null,seq14125);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14126,seq14125__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15148 = arguments.length;
var i__4737__auto___15149 = (0);
while(true){
if((i__4737__auto___15149 < len__4736__auto___15148)){
args__4742__auto__.push((arguments[i__4737__auto___15149]));

var G__15150 = (i__4737__auto___15149 + (1));
i__4737__auto___15149 = G__15150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq14139){
var G__14140 = cljs.core.first.call(null,seq14139);
var seq14139__$1 = cljs.core.next.call(null,seq14139);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14140,seq14139__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15155 = arguments.length;
var i__4737__auto___15156 = (0);
while(true){
if((i__4737__auto___15156 < len__4736__auto___15155)){
args__4742__auto__.push((arguments[i__4737__auto___15156]));

var G__15160 = (i__4737__auto___15156 + (1));
i__4737__auto___15156 = G__15160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq14142){
var G__14143 = cljs.core.first.call(null,seq14142);
var seq14142__$1 = cljs.core.next.call(null,seq14142);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14143,seq14142__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15161 = arguments.length;
var i__4737__auto___15162 = (0);
while(true){
if((i__4737__auto___15162 < len__4736__auto___15161)){
args__4742__auto__.push((arguments[i__4737__auto___15162]));

var G__15163 = (i__4737__auto___15162 + (1));
i__4737__auto___15162 = G__15163;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq14144){
var G__14145 = cljs.core.first.call(null,seq14144);
var seq14144__$1 = cljs.core.next.call(null,seq14144);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14145,seq14144__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15165 = arguments.length;
var i__4737__auto___15166 = (0);
while(true){
if((i__4737__auto___15166 < len__4736__auto___15165)){
args__4742__auto__.push((arguments[i__4737__auto___15166]));

var G__15167 = (i__4737__auto___15166 + (1));
i__4737__auto___15166 = G__15167;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq14146){
var G__14147 = cljs.core.first.call(null,seq14146);
var seq14146__$1 = cljs.core.next.call(null,seq14146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14147,seq14146__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15170 = arguments.length;
var i__4737__auto___15171 = (0);
while(true){
if((i__4737__auto___15171 < len__4736__auto___15170)){
args__4742__auto__.push((arguments[i__4737__auto___15171]));

var G__15172 = (i__4737__auto___15171 + (1));
i__4737__auto___15171 = G__15172;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq14151){
var G__14152 = cljs.core.first.call(null,seq14151);
var seq14151__$1 = cljs.core.next.call(null,seq14151);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14152,seq14151__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15175 = arguments.length;
var i__4737__auto___15176 = (0);
while(true){
if((i__4737__auto___15176 < len__4736__auto___15175)){
args__4742__auto__.push((arguments[i__4737__auto___15176]));

var G__15178 = (i__4737__auto___15176 + (1));
i__4737__auto___15176 = G__15178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq14157){
var G__14158 = cljs.core.first.call(null,seq14157);
var seq14157__$1 = cljs.core.next.call(null,seq14157);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14158,seq14157__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15182 = arguments.length;
var i__4737__auto___15183 = (0);
while(true){
if((i__4737__auto___15183 < len__4736__auto___15182)){
args__4742__auto__.push((arguments[i__4737__auto___15183]));

var G__15184 = (i__4737__auto___15183 + (1));
i__4737__auto___15183 = G__15184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_(new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq14159){
var G__14160 = cljs.core.first.call(null,seq14159);
var seq14159__$1 = cljs.core.next.call(null,seq14159);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14160,seq14159__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15185 = arguments.length;
var i__4737__auto___15186 = (0);
while(true){
if((i__4737__auto___15186 < len__4736__auto___15185)){
args__4742__auto__.push((arguments[i__4737__auto___15186]));

var G__15187 = (i__4737__auto___15186 + (1));
i__4737__auto___15186 = G__15187;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__14170){
var vec__14171 = p__14170;
var _QMARK_comparator = cljs.core.nth.call(null,vec__14171,(0),null);
var comparator = (function (){var or__4126__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,(function (p1__14059_SHARP_,p2__14060_SHARP_){
if((comparator.call(null,p1__14059_SHARP_,p2__14060_SHARP_) > (0))){
return p2__14060_SHARP_;
} else {
return p1__14059_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq14166){
var G__14167 = cljs.core.first.call(null,seq14166);
var seq14166__$1 = cljs.core.next.call(null,seq14166);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14167,seq14166__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15191 = arguments.length;
var i__4737__auto___15192 = (0);
while(true){
if((i__4737__auto___15192 < len__4736__auto___15191)){
args__4742__auto__.push((arguments[i__4737__auto___15192]));

var G__15193 = (i__4737__auto___15192 + (1));
i__4737__auto___15192 = G__15193;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__14179){
var vec__14180 = p__14179;
var _QMARK_comparator = cljs.core.nth.call(null,vec__14180,(0),null);
var comparator = (function (){var or__4126__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,(function (p1__14061_SHARP_,p2__14062_SHARP_){
if((comparator.call(null,p1__14061_SHARP_,p2__14062_SHARP_) < (0))){
return p2__14062_SHARP_;
} else {
return p1__14061_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq14174){
var G__14175 = cljs.core.first.call(null,seq14174);
var seq14174__$1 = cljs.core.next.call(null,seq14174);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14175,seq14174__$1);
}));


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4126__auto__ = x;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__14183,seen__$1){
while(true){
var vec__14184 = p__14183;
var v = cljs.core.nth.call(null,vec__14184,(0),null);
var xs__$1 = vec__14184;
var b2__10690__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__10690__auto__){
var s = b2__10690__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__15201 = cljs.core.rest.call(null,s);
var G__15202 = seen__$1;
p__14183 = G__15201;
seen__$1 = G__15202;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__14192 = arguments.length;
switch (G__14192) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__14194,in$){
var vec__14198 = p__14194;
var v = cljs.core.nth.call(null,vec__14198,(0),null);
var seen = cljs.core.nth.call(null,vec__14198,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.call(null,k);
}):kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15208 = arguments.length;
var i__4737__auto___15209 = (0);
while(true){
if((i__4737__auto___15209 < len__4736__auto___15208)){
args__4742__auto__.push((arguments[i__4737__auto___15209]));

var G__15210 = (i__4737__auto___15209 + (1));
i__4737__auto___15209 = G__15210;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__14203){
var vec__14204 = p__14203;
var kf = cljs.core.nth.call(null,vec__14204,(0),null);
var vf = cljs.core.nth.call(null,vec__14204,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.call(null,k);
}):kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,(function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq14201){
var G__14202 = cljs.core.first.call(null,seq14201);
var seq14201__$1 = cljs.core.next.call(null,seq14201);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14202,seq14201__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15217 = arguments.length;
var i__4737__auto___15218 = (0);
while(true){
if((i__4737__auto___15218 < len__4736__auto___15217)){
args__4742__auto__.push((arguments[i__4737__auto___15218]));

var G__15219 = (i__4737__auto___15218 + (1));
i__4737__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq14213){
var G__14214 = cljs.core.first.call(null,seq14213);
var seq14213__$1 = cljs.core.next.call(null,seq14213);
var G__14215 = cljs.core.first.call(null,seq14213__$1);
var seq14213__$2 = cljs.core.next.call(null,seq14213__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14214,G__14215,seq14213__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4217__auto__ = signed_idx;
var y__4218__auto__ = max_idx;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
} else {
var x__4214__auto__ = (0);
var y__4215__auto__ = (signed_idx + max_idx);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15220 = arguments.length;
var i__4737__auto___15221 = (0);
while(true){
if((i__4737__auto___15221 < len__4736__auto___15220)){
args__4742__auto__.push((arguments[i__4737__auto___15221]));

var G__15222 = (i__4737__auto___15221 + (1));
i__4737__auto___15221 = G__15222;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__14222){
var map__14223 = p__14222;
var map__14223__$1 = (((((!((map__14223 == null))))?(((((map__14223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14223):map__14223);
var max_len = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__14223__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__11158__auto__ = (start_idx_STAR_ + max_len);
var n2__11159__auto__ = xlen;
if((n1__11158__auto__ > n2__11159__auto__)){
return n2__11159__auto__;
} else {
return n1__11158__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq14219){
var G__14220 = cljs.core.first.call(null,seq14219);
var seq14219__$1 = cljs.core.next.call(null,seq14219);
var G__14221 = cljs.core.first.call(null,seq14219__$1);
var seq14219__$2 = cljs.core.next.call(null,seq14219__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14220,G__14221,seq14219__$2);
}));


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15231 = arguments.length;
var i__4737__auto___15232 = (0);
while(true){
if((i__4737__auto___15232 < len__4736__auto___15231)){
args__4742__auto__.push((arguments[i__4737__auto___15232]));

var G__15233 = (i__4737__auto___15232 + (1));
i__4737__auto___15232 = G__15233;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__14231){
var vec__14232 = p__14231;
var _QMARK_max_len = cljs.core.nth.call(null,vec__14232,(0),null);
var vec__14235 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__14235,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__14235,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq14226){
var G__14227 = cljs.core.first.call(null,seq14226);
var seq14226__$1 = cljs.core.next.call(null,seq14226);
var G__14228 = cljs.core.first.call(null,seq14226__$1);
var seq14226__$2 = cljs.core.next.call(null,seq14226__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14227,G__14228,seq14226__$2);
}));



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15235 = arguments.length;
var i__4737__auto___15236 = (0);
while(true){
if((i__4737__auto___15236 < len__4736__auto___15235)){
args__4742__auto__.push((arguments[i__4737__auto___15236]));

var G__15238 = (i__4737__auto___15236 + (1));
i__4737__auto___15236 = G__15238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__14245){
var vec__14246 = p__14245;
var _QMARK_max_len = cljs.core.nth.call(null,vec__14246,(0),null);
var vec__14249 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__14249,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__14249,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq14240){
var G__14241 = cljs.core.first.call(null,seq14240);
var seq14240__$1 = cljs.core.next.call(null,seq14240);
var G__14242 = cljs.core.first.call(null,seq14240__$1);
var seq14240__$2 = cljs.core.next.call(null,seq14240__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14241,G__14242,seq14240__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_.call(null,x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not(cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_.call(null,coll)){
var vec__14261 = coll;
var c1 = cljs.core.nth.call(null,vec__14261,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__15249 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__15250 = cljs.core.next.call(null,ks__$1);
var G__15251 = cljs.core.next.call(null,vs__$1);
m = G__15249;
ks__$1 = G__15250;
vs__$1 = G__15251;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15253 = arguments.length;
var i__4737__auto___15254 = (0);
while(true){
if((i__4737__auto___15254 < len__4736__auto___15253)){
args__4742__auto__.push((arguments[i__4737__auto___15254]));

var G__15255 = (i__4737__auto___15254 + (1));
i__4737__auto___15254 = G__15255;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__14287 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__14287,(0),null);
var ks = cljs.core.nth.call(null,vec__14287,(1),null);
var valf = cljs.core.nth.call(null,vec__14287,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq14279){
var G__14280 = cljs.core.first.call(null,seq14279);
var seq14279__$1 = cljs.core.next.call(null,seq14279);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14280,seq14279__$1);
}));

Object.defineProperty(module.exports, "encore_version", { enumerable: false, get: function() { return taoensso.encore.encore_version; } });
Object.defineProperty(module.exports, "as__QMARK_nat_int", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nat_int; } });
Object.defineProperty(module.exports, "memoize_a1_", { enumerable: false, get: function() { return taoensso.encore.memoize_a1_; } });
Object.defineProperty(module.exports, "TickedCacheEntry", { enumerable: false, get: function() { return taoensso.encore.TickedCacheEntry; } });
Object.defineProperty(module.exports, "removev", { enumerable: false, get: function() { return taoensso.encore.removev; } });
Object.defineProperty(module.exports, "timeout_future_QMARK_", { enumerable: false, get: function() { return taoensso.encore.timeout_future_QMARK_; } });
Object.defineProperty(module.exports, "as_nzero", { enumerable: false, get: function() { return taoensso.encore.as_nzero; } });
Object.defineProperty(module.exports, "swap_in_BANG__STAR_", { enumerable: false, get: function() { return taoensso.encore.swap_in_BANG__STAR_; } });
Object.defineProperty(module.exports, "atom_tag", { enumerable: false, get: function() { return taoensso.encore.atom_tag; } });
Object.defineProperty(module.exports, "_swap_k1_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_k1_BANG_; } });
Object.defineProperty(module.exports, "reduce_indexed", { enumerable: false, get: function() { return taoensso.encore.reduce_indexed; } });
Object.defineProperty(module.exports, "nneg_int_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nneg_int_QMARK_; } });
Object.defineProperty(module.exports, "error_QMARK_", { enumerable: false, get: function() { return taoensso.encore.error_QMARK_; } });
Object.defineProperty(module.exports, "__GT__QMARK_singleton", { enumerable: false, get: function() { return taoensso.encore.__GT__QMARK_singleton; } });
Object.defineProperty(module.exports, "set_STAR_", { enumerable: false, get: function() { return taoensso.encore.set_STAR_; } });
Object.defineProperty(module.exports, "sayp", { enumerable: false, get: function() { return taoensso.encore.sayp; } });
Object.defineProperty(module.exports, "now_udt", { enumerable: false, get: function() { return taoensso.encore.now_udt; } });
Object.defineProperty(module.exports, "qualified_keyword_QMARK_", { enumerable: false, get: function() { return taoensso.encore.qualified_keyword_QMARK_; } });
Object.defineProperty(module.exports, "as__QMARK_kw", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_kw; } });
Object.defineProperty(module.exports, "reduce_kvs", { enumerable: false, get: function() { return taoensso.encore.reduce_kvs; } });
Object.defineProperty(module.exports, "url_decode", { enumerable: false, get: function() { return taoensso.encore.url_decode; } });
Object.defineProperty(module.exports, "_swap_cache_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_cache_BANG_; } });
Object.defineProperty(module.exports, "str_builder_QMARK_", { enumerable: false, get: function() { return taoensso.encore.str_builder_QMARK_; } });
Object.defineProperty(module.exports, "every", { enumerable: false, get: function() { return taoensso.encore.every; } });
Object.defineProperty(module.exports, "parse_query_params", { enumerable: false, get: function() { return taoensso.encore.parse_query_params; } });
Object.defineProperty(module.exports, "dissoc_in", { enumerable: false, get: function() { return taoensso.encore.dissoc_in; } });
Object.defineProperty(module.exports, "norm_word_breaks", { enumerable: false, get: function() { return taoensso.encore.norm_word_breaks; } });
Object.defineProperty(module.exports, "rcompare", { enumerable: false, get: function() { return taoensso.encore.rcompare; } });
Object.defineProperty(module.exports, "_unswapped", { enumerable: false, get: function() { return taoensso.encore._unswapped; } });
Object.defineProperty(module.exports, "Swapped", { enumerable: false, get: function() { return taoensso.encore.Swapped; } });
Object.defineProperty(module.exports, "merge_meta", { enumerable: false, get: function() { return taoensso.encore.merge_meta; } });
Object.defineProperty(module.exports, "ms", { enumerable: false, get: function() { return taoensso.encore.ms; } });
Object.defineProperty(module.exports, "limiter_STAR_", { enumerable: false, get: function() { return taoensso.encore.limiter_STAR_; } });
Object.defineProperty(module.exports, "oget_in", { enumerable: false, get: function() { return taoensso.encore.oget_in; } });
Object.defineProperty(module.exports, "str_ends_with_QMARK_", { enumerable: false, get: function() { return taoensso.encore.str_ends_with_QMARK_; } });
Object.defineProperty(module.exports, "nested_merge", { enumerable: false, get: function() { return taoensso.encore.nested_merge; } });
Object.defineProperty(module.exports, "rate_limited", { enumerable: false, get: function() { return taoensso.encore.rate_limited; } });
Object.defineProperty(module.exports, "format_query_string", { enumerable: false, get: function() { return taoensso.encore.format_query_string; } });
Object.defineProperty(module.exports, "is_BANG_", { enumerable: false, get: function() { return taoensso.encore.is_BANG_; } });
Object.defineProperty(module.exports, "_QMARK_substr_LT_idx", { enumerable: false, get: function() { return taoensso.encore._QMARK_substr_LT_idx; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return taoensso.encore.log; } });
Object.defineProperty(module.exports, "nano_time", { enumerable: false, get: function() { return taoensso.encore.nano_time; } });
Object.defineProperty(module.exports, "clamp", { enumerable: false, get: function() { return taoensso.encore.clamp; } });
Object.defineProperty(module.exports, "memoized", { enumerable: false, get: function() { return taoensso.encore.memoized; } });
Object.defineProperty(module.exports, "uint_QMARK_", { enumerable: false, get: function() { return taoensso.encore.uint_QMARK_; } });
Object.defineProperty(module.exports, "as_pfloat", { enumerable: false, get: function() { return taoensso.encore.as_pfloat; } });
Object.defineProperty(module.exports, "_vswapped", { enumerable: false, get: function() { return taoensso.encore._vswapped; } });
Object.defineProperty(module.exports, "log_QMARK_", { enumerable: false, get: function() { return taoensso.encore.log_QMARK_; } });
Object.defineProperty(module.exports, "greatest", { enumerable: false, get: function() { return taoensso.encore.greatest; } });
Object.defineProperty(module.exports, "_as_throw", { enumerable: false, get: function() { return taoensso.encore._as_throw; } });
Object.defineProperty(module.exports, "str_join", { enumerable: false, get: function() { return taoensso.encore.str_join; } });
Object.defineProperty(module.exports, "merge_keywords", { enumerable: false, get: function() { return taoensso.encore.merge_keywords; } });
Object.defineProperty(module.exports, "__GT_LimitEntry", { enumerable: false, get: function() { return taoensso.encore.__GT_LimitEntry; } });
Object.defineProperty(module.exports, "boolean_QMARK_", { enumerable: false, get: function() { return taoensso.encore.boolean_QMARK_; } });
Object.defineProperty(module.exports, "queue_STAR_", { enumerable: false, get: function() { return taoensso.encore.queue_STAR_; } });
Object.defineProperty(module.exports, "atom_QMARK_", { enumerable: false, get: function() { return taoensso.encore.atom_QMARK_; } });
Object.defineProperty(module.exports, "chan_QMARK_", { enumerable: false, get: function() { return taoensso.encore.chan_QMARK_; } });
Object.defineProperty(module.exports, "ITimeoutImpl", { enumerable: false, get: function() { return taoensso.encore.ITimeoutImpl; } });
Object.defineProperty(module.exports, "keywordize_map", { enumerable: false, get: function() { return taoensso.encore.keywordize_map; } });
Object.defineProperty(module.exports, "subvec_STAR_", { enumerable: false, get: function() { return taoensso.encore.subvec_STAR_; } });
Object.defineProperty(module.exports, "logf", { enumerable: false, get: function() { return taoensso.encore.logf; } });
Object.defineProperty(module.exports, "reportf", { enumerable: false, get: function() { return taoensso.encore.reportf; } });
Object.defineProperty(module.exports, "regular_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.regular_num_QMARK_; } });
Object.defineProperty(module.exports, "__GT_LimitHits", { enumerable: false, get: function() { return taoensso.encore.__GT_LimitHits; } });
Object.defineProperty(module.exports, "some_QMARK_", { enumerable: false, get: function() { return taoensso.encore.some_QMARK_; } });
Object.defineProperty(module.exports, "str__QMARK_index", { enumerable: false, get: function() { return taoensso.encore.str__QMARK_index; } });
Object.defineProperty(module.exports, "as__QMARK_name", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_name; } });
Object.defineProperty(module.exports, "udt_QMARK_", { enumerable: false, get: function() { return taoensso.encore.udt_QMARK_; } });
Object.defineProperty(module.exports, "as_kw", { enumerable: false, get: function() { return taoensso.encore.as_kw; } });
Object.defineProperty(module.exports, "fatalf", { enumerable: false, get: function() { return taoensso.encore.fatalf; } });
Object.defineProperty(module.exports, "neg_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.neg_num_QMARK_; } });
Object.defineProperty(module.exports, "distinct_elements_QMARK_", { enumerable: false, get: function() { return taoensso.encore.distinct_elements_QMARK_; } });
Object.defineProperty(module.exports, "nneg_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nneg_QMARK_; } });
Object.defineProperty(module.exports, "_assert_unstub_val", { enumerable: false, get: function() { return taoensso.encore._assert_unstub_val; } });
Object.defineProperty(module.exports, "simple_symbol_QMARK_", { enumerable: false, get: function() { return taoensso.encore.simple_symbol_QMARK_; } });
Object.defineProperty(module.exports, "some_EQ_", { enumerable: false, get: function() { return taoensso.encore.some_EQ_; } });
Object.defineProperty(module.exports, "coerce_limit_specs", { enumerable: false, get: function() { return taoensso.encore.coerce_limit_specs; } });
Object.defineProperty(module.exports, "as_pint", { enumerable: false, get: function() { return taoensso.encore.as_pint; } });
Object.defineProperty(module.exports, "force_ref", { enumerable: false, get: function() { return taoensso.encore.force_ref; } });
Object.defineProperty(module.exports, "as_name", { enumerable: false, get: function() { return taoensso.encore.as_name; } });
Object.defineProperty(module.exports, "node_target_QMARK_", { enumerable: false, get: function() { return taoensso.encore.node_target_QMARK_; } });
Object.defineProperty(module.exports, "conj_when", { enumerable: false, get: function() { return taoensso.encore.conj_when; } });
Object.defineProperty(module.exports, "ajax_lite", { enumerable: false, get: function() { return taoensso.encore.ajax_lite; } });
Object.defineProperty(module.exports, "merge_with", { enumerable: false, get: function() { return taoensso.encore.merge_with; } });
Object.defineProperty(module.exports, "as__QMARK_nempty_str", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nempty_str; } });
Object.defineProperty(module.exports, "distinct_by", { enumerable: false, get: function() { return taoensso.encore.distinct_by; } });
Object.defineProperty(module.exports, "as_uint", { enumerable: false, get: function() { return taoensso.encore.as_uint; } });
Object.defineProperty(module.exports, "nvec_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nvec_QMARK_; } });
Object.defineProperty(module.exports, "path", { enumerable: false, get: function() { return taoensso.encore.path; } });
Object.defineProperty(module.exports, "as_pos_float", { enumerable: false, get: function() { return taoensso.encore.as_pos_float; } });
Object.defineProperty(module.exports, "contains_in_QMARK_", { enumerable: false, get: function() { return taoensso.encore.contains_in_QMARK_; } });
Object.defineProperty(module.exports, "nil__GT_sentinel", { enumerable: false, get: function() { return taoensso.encore.nil__GT_sentinel; } });
Object.defineProperty(module.exports, "LimitSpec", { enumerable: false, get: function() { return taoensso.encore.LimitSpec; } });
Object.defineProperty(module.exports, "filter_kvs", { enumerable: false, get: function() { return taoensso.encore.filter_kvs; } });
Object.defineProperty(module.exports, "reduce_n", { enumerable: false, get: function() { return taoensso.encore.reduce_n; } });
Object.defineProperty(module.exports, "swap_in_BANG_", { enumerable: false, get: function() { return taoensso.encore.swap_in_BANG_; } });
Object.defineProperty(module.exports, "get_substring", { enumerable: false, get: function() { return taoensso.encore.get_substring; } });
Object.defineProperty(module.exports, "_core_merge", { enumerable: false, get: function() { return taoensso.encore._core_merge; } });
Object.defineProperty(module.exports, "warnf", { enumerable: false, get: function() { return taoensso.encore.warnf; } });
Object.defineProperty(module.exports, "memoize_STAR_", { enumerable: false, get: function() { return taoensso.encore.memoize_STAR_; } });
Object.defineProperty(module.exports, "unstub_stub_test", { enumerable: false, get: function() { return taoensso.encore.unstub_stub_test; } });
Object.defineProperty(module.exports, "nat_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nat_num_QMARK_; } });
Object.defineProperty(module.exports, "as__QMARK_nemail", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nemail; } });
Object.defineProperty(module.exports, "float_QMARK_", { enumerable: false, get: function() { return taoensso.encore.float_QMARK_; } });
Object.defineProperty(module.exports, "as__QMARK_email", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_email; } });
Object.defineProperty(module.exports, "as__QMARK_nblank_trim", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nblank_trim; } });
Object.defineProperty(module.exports, "swap_BANG__STAR_", { enumerable: false, get: function() { return taoensso.encore.swap_BANG__STAR_; } });
Object.defineProperty(module.exports, "spaced_str", { enumerable: false, get: function() { return taoensso.encore.spaced_str; } });
Object.defineProperty(module.exports, "sentinel", { enumerable: false, get: function() { return taoensso.encore.sentinel; } });
Object.defineProperty(module.exports, "merge_deep", { enumerable: false, get: function() { return taoensso.encore.merge_deep; } });
Object.defineProperty(module.exports, "join_once", { enumerable: false, get: function() { return taoensso.encore.join_once; } });
Object.defineProperty(module.exports, "as_nblank_trim", { enumerable: false, get: function() { return taoensso.encore.as_nblank_trim; } });
Object.defineProperty(module.exports, "a0_memoize_", { enumerable: false, get: function() { return taoensso.encore.a0_memoize_; } });
Object.defineProperty(module.exports, "sb_append", { enumerable: false, get: function() { return taoensso.encore.sb_append; } });
Object.defineProperty(module.exports, "console_log", { enumerable: false, get: function() { return taoensso.encore.console_log; } });
Object.defineProperty(module.exports, "as__QMARK_nzero", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nzero; } });
Object.defineProperty(module.exports, "oset", { enumerable: false, get: function() { return taoensso.encore.oset; } });
Object.defineProperty(module.exports, "as__QMARK_pos_float", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_pos_float; } });
Object.defineProperty(module.exports, "_new_stubfn_", { enumerable: false, get: function() { return taoensso.encore._new_stubfn_; } });
Object.defineProperty(module.exports, "oget", { enumerable: false, get: function() { return taoensso.encore.oget; } });
Object.defineProperty(module.exports, "swap_val_BANG__STAR_", { enumerable: false, get: function() { return taoensso.encore.swap_val_BANG__STAR_; } });
Object.defineProperty(module.exports, "fsplit_last", { enumerable: false, get: function() { return taoensso.encore.fsplit_last; } });
Object.defineProperty(module.exports, "tf_cancel_BANG_", { enumerable: false, get: function() { return taoensso.encore.tf_cancel_BANG_; } });
Object.defineProperty(module.exports, "as_qname", { enumerable: false, get: function() { return taoensso.encore.as_qname; } });
Object.defineProperty(module.exports, "get_window_location", { enumerable: false, get: function() { return taoensso.encore.get_window_location; } });
Object.defineProperty(module.exports, "format", { enumerable: false, get: function() { return taoensso.encore.format; } });
Object.defineProperty(module.exports, "compile_ns_filter", { enumerable: false, get: function() { return taoensso.encore.compile_ns_filter; } });
Object.defineProperty(module.exports, "as_int", { enumerable: false, get: function() { return taoensso.encore.as_int; } });
Object.defineProperty(module.exports, "sentinel_QMARK_", { enumerable: false, get: function() { return taoensso.encore.sentinel_QMARK_; } });
Object.defineProperty(module.exports, "nnil_set", { enumerable: false, get: function() { return taoensso.encore.nnil_set; } });
Object.defineProperty(module.exports, "pval_QMARK_", { enumerable: false, get: function() { return taoensso.encore.pval_QMARK_; } });
Object.defineProperty(module.exports, "singleton_QMARK_", { enumerable: false, get: function() { return taoensso.encore.singleton_QMARK_; } });
Object.defineProperty(module.exports, "swapped", { enumerable: false, get: function() { return taoensso.encore.swapped; } });
Object.defineProperty(module.exports, "as_nblank", { enumerable: false, get: function() { return taoensso.encore.as_nblank; } });
Object.defineProperty(module.exports, "logging_level", { enumerable: false, get: function() { return taoensso.encore.logging_level; } });
Object.defineProperty(module.exports, "sub_indexes", { enumerable: false, get: function() { return taoensso.encore.sub_indexes; } });
Object.defineProperty(module.exports, "_reset_kn_BANG_", { enumerable: false, get: function() { return taoensso.encore._reset_kn_BANG_; } });
Object.defineProperty(module.exports, "js_form_data_QMARK_", { enumerable: false, get: function() { return taoensso.encore.js_form_data_QMARK_; } });
Object.defineProperty(module.exports, "undefined__GT_nil", { enumerable: false, get: function() { return taoensso.encore.undefined__GT_nil; } });
Object.defineProperty(module.exports, "memoize_a0_", { enumerable: false, get: function() { return taoensso.encore.memoize_a0_; } });
Object.defineProperty(module.exports, "now_dt", { enumerable: false, get: function() { return taoensso.encore.now_dt; } });
Object.defineProperty(module.exports, "repeatedly_into", { enumerable: false, get: function() { return taoensso.encore.repeatedly_into; } });
Object.defineProperty(module.exports, "__GT_SimpleCacheEntry", { enumerable: false, get: function() { return taoensso.encore.__GT_SimpleCacheEntry; } });
Object.defineProperty(module.exports, "coerce_xhr_params", { enumerable: false, get: function() { return taoensso.encore.coerce_xhr_params; } });
Object.defineProperty(module.exports, "pint_QMARK_", { enumerable: false, get: function() { return taoensso.encore.pint_QMARK_; } });
Object.defineProperty(module.exports, "tout_result", { enumerable: false, get: function() { return taoensso.encore.tout_result; } });
Object.defineProperty(module.exports, "run_obj_BANG_", { enumerable: false, get: function() { return taoensso.encore.run_obj_BANG_; } });
Object.defineProperty(module.exports, "nnil_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nnil_QMARK_; } });
Object.defineProperty(module.exports, "memoize_", { enumerable: false, get: function() { return taoensso.encore.memoize_; } });
Object.defineProperty(module.exports, "memoize_1", { enumerable: false, get: function() { return taoensso.encore.memoize_1; } });
Object.defineProperty(module.exports, "as__QMARK_pint", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_pint; } });
Object.defineProperty(module.exports, "str_contains_QMARK_", { enumerable: false, get: function() { return taoensso.encore.str_contains_QMARK_; } });
Object.defineProperty(module.exports, "swapped_QMARK_", { enumerable: false, get: function() { return taoensso.encore.swapped_QMARK_; } });
Object.defineProperty(module.exports, "default_timeout_impl_", { enumerable: false, get: function() { return taoensso.encore.default_timeout_impl_; } });
Object.defineProperty(module.exports, "filter_vals", { enumerable: false, get: function() { return taoensso.encore.filter_vals; } });
Object.defineProperty(module.exports, "ks_nnil_QMARK_", { enumerable: false, get: function() { return taoensso.encore.ks_nnil_QMARK_; } });
Object.defineProperty(module.exports, "update_in_STAR_", { enumerable: false, get: function() { return taoensso.encore.update_in_STAR_; } });
Object.defineProperty(module.exports, "TimeoutFuture", { enumerable: false, get: function() { return taoensso.encore.TimeoutFuture; } });
Object.defineProperty(module.exports, "vnext", { enumerable: false, get: function() { return taoensso.encore.vnext; } });
Object.defineProperty(module.exports, "as__QMARK_nat_float", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nat_float; } });
Object.defineProperty(module.exports, "as_udt", { enumerable: false, get: function() { return taoensso.encore.as_udt; } });
Object.defineProperty(module.exports, "_STAR_log_level_STAR_", { enumerable: false, get: function() { return taoensso.encore._STAR_log_level_STAR_; } });
Object.defineProperty(module.exports, "dswap_BANG_", { enumerable: false, get: function() { return taoensso.encore.dswap_BANG_; } });
Object.defineProperty(module.exports, "run_BANG__STAR_", { enumerable: false, get: function() { return taoensso.encore.run_BANG__STAR_; } });
Object.defineProperty(module.exports, "rfirst_kv", { enumerable: false, get: function() { return taoensso.encore.rfirst_kv; } });
Object.defineProperty(module.exports, "takev", { enumerable: false, get: function() { return taoensso.encore.takev; } });
Object.defineProperty(module.exports, "__GT_TickedCacheEntry", { enumerable: false, get: function() { return taoensso.encore.__GT_TickedCacheEntry; } });
Object.defineProperty(module.exports, "count_words", { enumerable: false, get: function() { return taoensso.encore.count_words; } });
Object.defineProperty(module.exports, "remove_kvs", { enumerable: false, get: function() { return taoensso.encore.remove_kvs; } });
Object.defineProperty(module.exports, "int_QMARK_", { enumerable: false, get: function() { return taoensso.encore.int_QMARK_; } });
Object.defineProperty(module.exports, "lazy_seq_QMARK_", { enumerable: false, get: function() { return taoensso.encore.lazy_seq_QMARK_; } });
Object.defineProperty(module.exports, "ms__GT_secs", { enumerable: false, get: function() { return taoensso.encore.ms__GT_secs; } });
Object.defineProperty(module.exports, "as_nat_float", { enumerable: false, get: function() { return taoensso.encore.as_nat_float; } });
Object.defineProperty(module.exports, "run_kv_BANG_", { enumerable: false, get: function() { return taoensso.encore.run_kv_BANG_; } });
Object.defineProperty(module.exports, "mapply", { enumerable: false, get: function() { return taoensso.encore.mapply; } });
Object.defineProperty(module.exports, "as_ufloat", { enumerable: false, get: function() { return taoensso.encore.as_ufloat; } });
Object.defineProperty(module.exports, "rate_limit", { enumerable: false, get: function() { return taoensso.encore.rate_limit; } });
Object.defineProperty(module.exports, "error_data", { enumerable: false, get: function() { return taoensso.encore.error_data; } });
Object.defineProperty(module.exports, "reset_val_BANG__QMARK_", { enumerable: false, get: function() { return taoensso.encore.reset_val_BANG__QMARK_; } });
Object.defineProperty(module.exports, "reduce_top", { enumerable: false, get: function() { return taoensso.encore.reduce_top; } });
Object.defineProperty(module.exports, "js_file_QMARK_", { enumerable: false, get: function() { return taoensso.encore.js_file_QMARK_; } });
Object.defineProperty(module.exports, "queue", { enumerable: false, get: function() { return taoensso.encore.queue; } });
Object.defineProperty(module.exports, "revery_kv", { enumerable: false, get: function() { return taoensso.encore.revery_kv; } });
Object.defineProperty(module.exports, "reset_in_BANG_", { enumerable: false, get: function() { return taoensso.encore.reset_in_BANG_; } });
Object.defineProperty(module.exports, "nnil", { enumerable: false, get: function() { return taoensso.encore.nnil; } });
Object.defineProperty(module.exports, "format_STAR_", { enumerable: false, get: function() { return taoensso.encore.format_STAR_; } });
Object.defineProperty(module.exports, "remove_vals", { enumerable: false, get: function() { return taoensso.encore.remove_vals; } });
Object.defineProperty(module.exports, "round_STAR_", { enumerable: false, get: function() { return taoensso.encore.round_STAR_; } });
Object.defineProperty(module.exports, "LimitEntry", { enumerable: false, get: function() { return taoensso.encore.LimitEntry; } });
Object.defineProperty(module.exports, "pos_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.pos_num_QMARK_; } });
Object.defineProperty(module.exports, "top", { enumerable: false, get: function() { return taoensso.encore.top; } });
Object.defineProperty(module.exports, "keys_by", { enumerable: false, get: function() { return taoensso.encore.keys_by; } });
Object.defineProperty(module.exports, "stub_test", { enumerable: false, get: function() { return taoensso.encore.stub_test; } });
Object.defineProperty(module.exports, "stringy_QMARK_", { enumerable: false, get: function() { return taoensso.encore.stringy_QMARK_; } });
Object.defineProperty(module.exports, "revery_QMARK_", { enumerable: false, get: function() { return taoensso.encore.revery_QMARK_; } });
Object.defineProperty(module.exports, "vec2_QMARK_", { enumerable: false, get: function() { return taoensso.encore.vec2_QMARK_; } });
Object.defineProperty(module.exports, "cljs_thing", { enumerable: false, get: function() { return taoensso.encore.cljs_thing; } });
Object.defineProperty(module.exports, "approx_EQ__EQ_", { enumerable: false, get: function() { return taoensso.encore.approx_EQ__EQ_; } });
Object.defineProperty(module.exports, "parse_float", { enumerable: false, get: function() { return taoensso.encore.parse_float; } });
Object.defineProperty(module.exports, "vsplit_last", { enumerable: false, get: function() { return taoensso.encore.vsplit_last; } });
Object.defineProperty(module.exports, "LimitHits", { enumerable: false, get: function() { return taoensso.encore.LimitHits; } });
Object.defineProperty(module.exports, "rsome", { enumerable: false, get: function() { return taoensso.encore.rsome; } });
Object.defineProperty(module.exports, "re_pattern_QMARK_", { enumerable: false, get: function() { return taoensso.encore.re_pattern_QMARK_; } });
Object.defineProperty(module.exports, "nneg_float_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nneg_float_QMARK_; } });
Object.defineProperty(module.exports, "indexed_QMARK_", { enumerable: false, get: function() { return taoensso.encore.indexed_QMARK_; } });
Object.defineProperty(module.exports, "as__QMARK_int", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_int; } });
Object.defineProperty(module.exports, "_reset_k0_BANG_", { enumerable: false, get: function() { return taoensso.encore._reset_k0_BANG_; } });
Object.defineProperty(module.exports, "ks_LT__EQ_", { enumerable: false, get: function() { return taoensso.encore.ks_LT__EQ_; } });
Object.defineProperty(module.exports, "_unstub_stub_test", { enumerable: false, get: function() { return taoensso.encore._unstub_stub_test; } });
Object.defineProperty(module.exports, "name_with_attrs", { enumerable: false, get: function() { return taoensso.encore.name_with_attrs; } });
Object.defineProperty(module.exports, "as_pos_int", { enumerable: false, get: function() { return taoensso.encore.as_pos_int; } });
Object.defineProperty(module.exports, "pow", { enumerable: false, get: function() { return taoensso.encore.pow; } });
Object.defineProperty(module.exports, "as__QMARK_pfloat", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_pfloat; } });
Object.defineProperty(module.exports, "named_QMARK_", { enumerable: false, get: function() { return taoensso.encore.named_QMARK_; } });
Object.defineProperty(module.exports, "exp_backoff", { enumerable: false, get: function() { return taoensso.encore.exp_backoff; } });
Object.defineProperty(module.exports, "assoc_nx", { enumerable: false, get: function() { return taoensso.encore.assoc_nx; } });
Object.defineProperty(module.exports, "swap_val_BANG_", { enumerable: false, get: function() { return taoensso.encore.swap_val_BANG_; } });
Object.defineProperty(module.exports, "_tout_cancelled", { enumerable: false, get: function() { return taoensso.encore._tout_cancelled; } });
Object.defineProperty(module.exports, "as__QMARK_uint", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_uint; } });
Object.defineProperty(module.exports, "as_nemail", { enumerable: false, get: function() { return taoensso.encore.as_nemail; } });
Object.defineProperty(module.exports, "map_keys", { enumerable: false, get: function() { return taoensso.encore.map_keys; } });
Object.defineProperty(module.exports, "memoize", { enumerable: false, get: function() { return taoensso.encore.memoize; } });
Object.defineProperty(module.exports, "into_BANG_", { enumerable: false, get: function() { return taoensso.encore.into_BANG_; } });
Object.defineProperty(module.exports, "substr", { enumerable: false, get: function() { return taoensso.encore.substr; } });
Object.defineProperty(module.exports, "simple_keyword_QMARK_", { enumerable: false, get: function() { return taoensso.encore.simple_keyword_QMARK_; } });
Object.defineProperty(module.exports, "editable_QMARK_", { enumerable: false, get: function() { return taoensso.encore.editable_QMARK_; } });
Object.defineProperty(module.exports, "conj_some", { enumerable: false, get: function() { return taoensso.encore.conj_some; } });
Object.defineProperty(module.exports, "into_all", { enumerable: false, get: function() { return taoensso.encore.into_all; } });
Object.defineProperty(module.exports, "idx_fn", { enumerable: false, get: function() { return taoensso.encore.idx_fn; } });
Object.defineProperty(module.exports, "neg_int_QMARK_", { enumerable: false, get: function() { return taoensso.encore.neg_int_QMARK_; } });
Object.defineProperty(module.exports, "secs", { enumerable: false, get: function() { return taoensso.encore.secs; } });
Object.defineProperty(module.exports, "nil__GT_str", { enumerable: false, get: function() { return taoensso.encore.nil__GT_str; } });
Object.defineProperty(module.exports, "_swap_k0_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_k0_BANG_; } });
Object.defineProperty(module.exports, "interleave_all", { enumerable: false, get: function() { return taoensso.encore.interleave_all; } });
Object.defineProperty(module.exports, "round0", { enumerable: false, get: function() { return taoensso.encore.round0; } });
Object.defineProperty(module.exports, "when_QMARK_", { enumerable: false, get: function() { return taoensso.encore.when_QMARK_; } });
Object.defineProperty(module.exports, "_QMARK_subvec_LT_len", { enumerable: false, get: function() { return taoensso.encore._QMARK_subvec_LT_len; } });
Object.defineProperty(module.exports, "_reset_k1_BANG_", { enumerable: false, get: function() { return taoensso.encore._reset_k1_BANG_; } });
Object.defineProperty(module.exports, "remove_keys", { enumerable: false, get: function() { return taoensso.encore.remove_keys; } });
Object.defineProperty(module.exports, "neg_float_QMARK_", { enumerable: false, get: function() { return taoensso.encore.neg_float_QMARK_; } });
Object.defineProperty(module.exports, "reset_BANG__QMARK_", { enumerable: false, get: function() { return taoensso.encore.reset_BANG__QMARK_; } });
Object.defineProperty(module.exports, "approx_EQ_", { enumerable: false, get: function() { return taoensso.encore.approx_EQ_; } });
Object.defineProperty(module.exports, "as__QMARK_ufloat", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_ufloat; } });
Object.defineProperty(module.exports, "merge_url_with_query_string", { enumerable: false, get: function() { return taoensso.encore.merge_url_with_query_string; } });
Object.defineProperty(module.exports, "update_in", { enumerable: false, get: function() { return taoensso.encore.update_in; } });
Object.defineProperty(module.exports, "reduce_obj", { enumerable: false, get: function() { return taoensso.encore.reduce_obj; } });
Object.defineProperty(module.exports, "str_builder", { enumerable: false, get: function() { return taoensso.encore.str_builder; } });
Object.defineProperty(module.exports, "kw_identical_QMARK_", { enumerable: false, get: function() { return taoensso.encore.kw_identical_QMARK_; } });
Object.defineProperty(module.exports, "run_BANG_", { enumerable: false, get: function() { return taoensso.encore.run_BANG_; } });
Object.defineProperty(module.exports, "assoc_conj", { enumerable: false, get: function() { return taoensso.encore.assoc_conj; } });
Object.defineProperty(module.exports, "swapped_STAR_", { enumerable: false, get: function() { return taoensso.encore.swapped_STAR_; } });
Object.defineProperty(module.exports, "js__QMARK_win", { enumerable: false, get: function() { return taoensso.encore.js__QMARK_win; } });
Object.defineProperty(module.exports, "url_encode", { enumerable: false, get: function() { return taoensso.encore.url_encode; } });
Object.defineProperty(module.exports, "qname", { enumerable: false, get: function() { return taoensso.encore.qname; } });
Object.defineProperty(module.exports, "fzipmap", { enumerable: false, get: function() { return taoensso.encore.fzipmap; } });
Object.defineProperty(module.exports, "_tout_pending", { enumerable: false, get: function() { return taoensso.encore._tout_pending; } });
Object.defineProperty(module.exports, "fq_name", { enumerable: false, get: function() { return taoensso.encore.fq_name; } });
Object.defineProperty(module.exports, "ident_QMARK_", { enumerable: false, get: function() { return taoensso.encore.ident_QMARK_; } });
Object.defineProperty(module.exports, "keys_GT__EQ_", { enumerable: false, get: function() { return taoensso.encore.keys_GT__EQ_; } });
Object.defineProperty(module.exports, "distinctv", { enumerable: false, get: function() { return taoensso.encore.distinctv; } });
Object.defineProperty(module.exports, "filter_keys", { enumerable: false, get: function() { return taoensso.encore.filter_keys; } });
Object.defineProperty(module.exports, "str_rf", { enumerable: false, get: function() { return taoensso.encore.str_rf; } });
Object.defineProperty(module.exports, "run_kvs_BANG_", { enumerable: false, get: function() { return taoensso.encore.run_kvs_BANG_; } });
Object.defineProperty(module.exports, "queue_QMARK_", { enumerable: false, get: function() { return taoensso.encore.queue_QMARK_; } });
Object.defineProperty(module.exports, "qualified_ident_QMARK_", { enumerable: false, get: function() { return taoensso.encore.qualified_ident_QMARK_; } });
Object.defineProperty(module.exports, "debugf", { enumerable: false, get: function() { return taoensso.encore.debugf; } });
Object.defineProperty(module.exports, "_QMARK_subvec_LT_idx", { enumerable: false, get: function() { return taoensso.encore._QMARK_subvec_LT_idx; } });
Object.defineProperty(module.exports, "as__QMARK_udt", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_udt; } });
Object.defineProperty(module.exports, "get_pooled_xhr_BANG_", { enumerable: false, get: function() { return taoensso.encore.get_pooled_xhr_BANG_; } });
Object.defineProperty(module.exports, "pr_edn", { enumerable: false, get: function() { return taoensso.encore.pr_edn; } });
Object.defineProperty(module.exports, "ks_EQ_", { enumerable: false, get: function() { return taoensso.encore.ks_EQ_; } });
Object.defineProperty(module.exports, "nnil_EQ_", { enumerable: false, get: function() { return taoensso.encore.nnil_EQ_; } });
Object.defineProperty(module.exports, "top_into", { enumerable: false, get: function() { return taoensso.encore.top_into; } });
Object.defineProperty(module.exports, "tracef", { enumerable: false, get: function() { return taoensso.encore.tracef; } });
Object.defineProperty(module.exports, "xhr_pool_", { enumerable: false, get: function() { return taoensso.encore.xhr_pool_; } });
Object.defineProperty(module.exports, "get_subvec", { enumerable: false, get: function() { return taoensso.encore.get_subvec; } });
Object.defineProperty(module.exports, "_schedule_timeout", { enumerable: false, get: function() { return taoensso.encore._schedule_timeout; } });
Object.defineProperty(module.exports, "nat_float_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nat_float_QMARK_; } });
Object.defineProperty(module.exports, "_merge_with", { enumerable: false, get: function() { return taoensso.encore._merge_with; } });
Object.defineProperty(module.exports, "const_str_EQ_", { enumerable: false, get: function() { return taoensso.encore.const_str_EQ_; } });
Object.defineProperty(module.exports, "into_str", { enumerable: false, get: function() { return taoensso.encore.into_str; } });
Object.defineProperty(module.exports, "rate_limiter_STAR_", { enumerable: false, get: function() { return taoensso.encore.rate_limiter_STAR_; } });
Object.defineProperty(module.exports, "preserve_reduced", { enumerable: false, get: function() { return taoensso.encore.preserve_reduced; } });
Object.defineProperty(module.exports, "_swap_val_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_val_BANG_; } });
Object.defineProperty(module.exports, "as_float", { enumerable: false, get: function() { return taoensso.encore.as_float; } });
Object.defineProperty(module.exports, "limiter", { enumerable: false, get: function() { return taoensso.encore.limiter; } });
Object.defineProperty(module.exports, "infof", { enumerable: false, get: function() { return taoensso.encore.infof; } });
Object.defineProperty(module.exports, "_swap_k_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_k_BANG_; } });
Object.defineProperty(module.exports, "nneg_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nneg_num_QMARK_; } });
Object.defineProperty(module.exports, "merge", { enumerable: false, get: function() { return taoensso.encore.merge; } });
Object.defineProperty(module.exports, "_core_update_in", { enumerable: false, get: function() { return taoensso.encore._core_update_in; } });
Object.defineProperty(module.exports, "zero_num_QMARK_", { enumerable: false, get: function() { return taoensso.encore.zero_num_QMARK_; } });
Object.defineProperty(module.exports, "secs__GT_ms", { enumerable: false, get: function() { return taoensso.encore.secs__GT_ms; } });
Object.defineProperty(module.exports, "_QMARK_substr_LT_len", { enumerable: false, get: function() { return taoensso.encore._QMARK_substr_LT_len; } });
Object.defineProperty(module.exports, "read_edn", { enumerable: false, get: function() { return taoensso.encore.read_edn; } });
Object.defineProperty(module.exports, "ITimeoutFuture", { enumerable: false, get: function() { return taoensso.encore.ITimeoutFuture; } });
Object.defineProperty(module.exports, "str_starts_with_QMARK_", { enumerable: false, get: function() { return taoensso.encore.str_starts_with_QMARK_; } });
Object.defineProperty(module.exports, "parse_version", { enumerable: false, get: function() { return taoensso.encore.parse_version; } });
Object.defineProperty(module.exports, "__GT_LimitSpec", { enumerable: false, get: function() { return taoensso.encore.__GT_LimitSpec; } });
Object.defineProperty(module.exports, "round", { enumerable: false, get: function() { return taoensso.encore.round; } });
Object.defineProperty(module.exports, "nempty_str_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nempty_str_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Swapped", { enumerable: false, get: function() { return taoensso.encore.__GT_Swapped; } });
Object.defineProperty(module.exports, "__GT_TimeoutFuture", { enumerable: false, get: function() { return taoensso.encore.__GT_TimeoutFuture; } });
Object.defineProperty(module.exports, "tf_poll", { enumerable: false, get: function() { return taoensso.encore.tf_poll; } });
Object.defineProperty(module.exports, "rate_limiter", { enumerable: false, get: function() { return taoensso.encore.rate_limiter; } });
Object.defineProperty(module.exports, "nat_int_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nat_int_QMARK_; } });
Object.defineProperty(module.exports, "min_long", { enumerable: false, get: function() { return taoensso.encore.min_long; } });
Object.defineProperty(module.exports, "now_nano", { enumerable: false, get: function() { return taoensso.encore.now_nano; } });
Object.defineProperty(module.exports, "_swap_kn_BANG_", { enumerable: false, get: function() { return taoensso.encore._swap_kn_BANG_; } });
Object.defineProperty(module.exports, "as_nempty_str", { enumerable: false, get: function() { return taoensso.encore.as_nempty_str; } });
Object.defineProperty(module.exports, "memoize_last", { enumerable: false, get: function() { return taoensso.encore.memoize_last; } });
Object.defineProperty(module.exports, "rsome_kv", { enumerable: false, get: function() { return taoensso.encore.rsome_kv; } });
Object.defineProperty(module.exports, "sayf", { enumerable: false, get: function() { return taoensso.encore.sayf; } });
Object.defineProperty(module.exports, "tf_done_QMARK_", { enumerable: false, get: function() { return taoensso.encore.tf_done_QMARK_; } });
Object.defineProperty(module.exports, "a1_memoize_", { enumerable: false, get: function() { return taoensso.encore.a1_memoize_; } });
Object.defineProperty(module.exports, "least", { enumerable: false, get: function() { return taoensso.encore.least; } });
Object.defineProperty(module.exports, "try_pred", { enumerable: false, get: function() { return taoensso.encore.try_pred; } });
Object.defineProperty(module.exports, "nblank_str_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nblank_str_QMARK_; } });
Object.defineProperty(module.exports, "as_pval", { enumerable: false, get: function() { return taoensso.encore.as_pval; } });
Object.defineProperty(module.exports, "derefable_QMARK_", { enumerable: false, get: function() { return taoensso.encore.derefable_QMARK_; } });
Object.defineProperty(module.exports, "uuid_str", { enumerable: false, get: function() { return taoensso.encore.uuid_str; } });
Object.defineProperty(module.exports, "revery", { enumerable: false, get: function() { return taoensso.encore.revery; } });
Object.defineProperty(module.exports, "translate_signed_idx", { enumerable: false, get: function() { return taoensso.encore.translate_signed_idx; } });
Object.defineProperty(module.exports, "as__QMARK_pval", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_pval; } });
Object.defineProperty(module.exports, "pos_int_QMARK_", { enumerable: false, get: function() { return taoensso.encore.pos_int_QMARK_; } });
Object.defineProperty(module.exports, "as_nat_int", { enumerable: false, get: function() { return taoensso.encore.as_nat_int; } });
Object.defineProperty(module.exports, "nblank_QMARK_", { enumerable: false, get: function() { return taoensso.encore.nblank_QMARK_; } });
Object.defineProperty(module.exports, "set_exp_backoff_timeout_BANG_", { enumerable: false, get: function() { return taoensso.encore.set_exp_backoff_timeout_BANG_; } });
Object.defineProperty(module.exports, "SimpleCacheEntry", { enumerable: false, get: function() { return taoensso.encore.SimpleCacheEntry; } });
Object.defineProperty(module.exports, "call_after_timeout", { enumerable: false, get: function() { return taoensso.encore.call_after_timeout; } });
Object.defineProperty(module.exports, "as__QMARK_bool", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_bool; } });
Object.defineProperty(module.exports, "pos_float_QMARK_", { enumerable: false, get: function() { return taoensso.encore.pos_float_QMARK_; } });
Object.defineProperty(module.exports, "seq_kvs", { enumerable: false, get: function() { return taoensso.encore.seq_kvs; } });
Object.defineProperty(module.exports, "vsplit_first", { enumerable: false, get: function() { return taoensso.encore.vsplit_first; } });
Object.defineProperty(module.exports, "abs", { enumerable: false, get: function() { return taoensso.encore.abs; } });
Object.defineProperty(module.exports, "map_kvs", { enumerable: false, get: function() { return taoensso.encore.map_kvs; } });
Object.defineProperty(module.exports, "vrest", { enumerable: false, get: function() { return taoensso.encore.vrest; } });
Object.defineProperty(module.exports, "reset_val_BANG_", { enumerable: false, get: function() { return taoensso.encore.reset_val_BANG_; } });
Object.defineProperty(module.exports, "map_vals", { enumerable: false, get: function() { return taoensso.encore.map_vals; } });
Object.defineProperty(module.exports, "spaced_str_with_nils", { enumerable: false, get: function() { return taoensso.encore.spaced_str_with_nils; } });
Object.defineProperty(module.exports, "str_join_once", { enumerable: false, get: function() { return taoensso.encore.str_join_once; } });
Object.defineProperty(module.exports, "nested_merge_with", { enumerable: false, get: function() { return taoensso.encore.nested_merge_with; } });
Object.defineProperty(module.exports, "as__QMARK_float", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_float; } });
Object.defineProperty(module.exports, "explode_keyword", { enumerable: false, get: function() { return taoensso.encore.explode_keyword; } });
Object.defineProperty(module.exports, "as__QMARK_nblank", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_nblank; } });
Object.defineProperty(module.exports, "sentinel__GT_nil", { enumerable: false, get: function() { return taoensso.encore.sentinel__GT_nil; } });
Object.defineProperty(module.exports, "xdistinct", { enumerable: false, get: function() { return taoensso.encore.xdistinct; } });
Object.defineProperty(module.exports, "assoc_some", { enumerable: false, get: function() { return taoensso.encore.assoc_some; } });
Object.defineProperty(module.exports, "keys_EQ_nnil_QMARK_", { enumerable: false, get: function() { return taoensso.encore.keys_EQ_nnil_QMARK_; } });
Object.defineProperty(module.exports, "simple_ident_QMARK_", { enumerable: false, get: function() { return taoensso.encore.simple_ident_QMARK_; } });
Object.defineProperty(module.exports, "as_bool", { enumerable: false, get: function() { return taoensso.encore.as_bool; } });
Object.defineProperty(module.exports, "errorf", { enumerable: false, get: function() { return taoensso.encore.errorf; } });
Object.defineProperty(module.exports, "clj1098", { enumerable: false, get: function() { return taoensso.encore.clj1098; } });
Object.defineProperty(module.exports, "parse_bool", { enumerable: false, get: function() { return taoensso.encore.parse_bool; } });
Object.defineProperty(module.exports, "keys_LT__EQ_", { enumerable: false, get: function() { return taoensso.encore.keys_LT__EQ_; } });
Object.defineProperty(module.exports, "str_replace", { enumerable: false, get: function() { return taoensso.encore.str_replace; } });
Object.defineProperty(module.exports, "parse_int", { enumerable: false, get: function() { return taoensso.encore.parse_int; } });
Object.defineProperty(module.exports, "get_win_loc", { enumerable: false, get: function() { return taoensso.encore.get_win_loc; } });
Object.defineProperty(module.exports, "get_substr", { enumerable: false, get: function() { return taoensso.encore.get_substr; } });
Object.defineProperty(module.exports, "without_meta", { enumerable: false, get: function() { return taoensso.encore.without_meta; } });
Object.defineProperty(module.exports, "memoize1", { enumerable: false, get: function() { return taoensso.encore.memoize1; } });
Object.defineProperty(module.exports, "round1", { enumerable: false, get: function() { return taoensso.encore.round1; } });
Object.defineProperty(module.exports, "__GT_DefaultTimeoutImpl", { enumerable: false, get: function() { return taoensso.encore.__GT_DefaultTimeoutImpl; } });
Object.defineProperty(module.exports, "merge_deep_with", { enumerable: false, get: function() { return taoensso.encore.merge_deep_with; } });
Object.defineProperty(module.exports, "as_email", { enumerable: false, get: function() { return taoensso.encore.as_email; } });
Object.defineProperty(module.exports, "pull_val_BANG_", { enumerable: false, get: function() { return taoensso.encore.pull_val_BANG_; } });
Object.defineProperty(module.exports, "vec3_QMARK_", { enumerable: false, get: function() { return taoensso.encore.vec3_QMARK_; } });
Object.defineProperty(module.exports, "tf_state", { enumerable: false, get: function() { return taoensso.encore.tf_state; } });
Object.defineProperty(module.exports, "assert_min_encore_version", { enumerable: false, get: function() { return taoensso.encore.assert_min_encore_version; } });
Object.defineProperty(module.exports, "replace_in", { enumerable: false, get: function() { return taoensso.encore.replace_in; } });
Object.defineProperty(module.exports, "revery_kv_QMARK_", { enumerable: false, get: function() { return taoensso.encore.revery_kv_QMARK_; } });
Object.defineProperty(module.exports, "assoc_when", { enumerable: false, get: function() { return taoensso.encore.assoc_when; } });
Object.defineProperty(module.exports, "as__QMARK_qname", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_qname; } });
Object.defineProperty(module.exports, "rfirst", { enumerable: false, get: function() { return taoensso.encore.rfirst; } });
Object.defineProperty(module.exports, "logp", { enumerable: false, get: function() { return taoensso.encore.logp; } });
Object.defineProperty(module.exports, "as_map", { enumerable: false, get: function() { return taoensso.encore.as_map; } });
Object.defineProperty(module.exports, "vec_STAR_", { enumerable: false, get: function() { return taoensso.encore.vec_STAR_; } });
Object.defineProperty(module.exports, "get_subvector", { enumerable: false, get: function() { return taoensso.encore.get_subvector; } });
Object.defineProperty(module.exports, "tf_pending_QMARK_", { enumerable: false, get: function() { return taoensso.encore.tf_pending_QMARK_; } });
Object.defineProperty(module.exports, "backport_run_BANG_", { enumerable: false, get: function() { return taoensso.encore.backport_run_BANG_; } });
Object.defineProperty(module.exports, "qualified_symbol_QMARK_", { enumerable: false, get: function() { return taoensso.encore.qualified_symbol_QMARK_; } });
Object.defineProperty(module.exports, "keys_EQ_", { enumerable: false, get: function() { return taoensso.encore.keys_EQ_; } });
Object.defineProperty(module.exports, "tf_cancelled_QMARK_", { enumerable: false, get: function() { return taoensso.encore.tf_cancelled_QMARK_; } });
Object.defineProperty(module.exports, "max_long", { enumerable: false, get: function() { return taoensso.encore.max_long; } });
Object.defineProperty(module.exports, "swapped_vec", { enumerable: false, get: function() { return taoensso.encore.swapped_vec; } });
Object.defineProperty(module.exports, "DefaultTimeoutImpl", { enumerable: false, get: function() { return taoensso.encore.DefaultTimeoutImpl; } });
Object.defineProperty(module.exports, "ks_GT__EQ_", { enumerable: false, get: function() { return taoensso.encore.ks_GT__EQ_; } });
Object.defineProperty(module.exports, "__GT_vec", { enumerable: false, get: function() { return taoensso.encore.__GT_vec; } });
Object.defineProperty(module.exports, "as__QMARK_pos_int", { enumerable: false, get: function() { return taoensso.encore.as__QMARK_pos_int; } });
Object.defineProperty(module.exports, "vinterleave_all", { enumerable: false, get: function() { return taoensso.encore.vinterleave_all; } });
Object.defineProperty(module.exports, "round2", { enumerable: false, get: function() { return taoensso.encore.round2; } });
//# sourceMappingURL=taoensso.encore.js.map
