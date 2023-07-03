var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.tools.reader.impl.errors.js");
require("./cljs.tools.reader.reader_types.js");
require("./cljs.tools.reader.impl.utils.js");
require("./cljs.tools.reader.impl.commons.js");
require("./cljs.tools.reader.js");
require("./goog.string.string.js");
require("./goog.string.stringbuffer.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.tools.reader.edn.js");

goog.provide('cljs.tools.reader.edn');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
if((!(("#" === ch)))){
if((!(("'" === ch)))){
if((!((":" === ch)))){
return cljs.tools.reader.edn.macros.call(null,ch);
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return ((("@" === ch)) || (("`" === ch)) || (("~" === ch)));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var G__9657 = arguments.length;
switch (G__9657) {
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,kind,initch){
return cljs.tools.reader.edn.read_token.call(null,rdr,kind,initch,true);
}));

(cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,initch,validate_leading_QMARK_){
if(cljs.core.not(initch)){
return cljs.tools.reader.impl.errors.throw_eof_at_start.call(null,rdr,kind);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_.call(null,initch);
} else {
return and__4115__auto__;
}
})())){
return cljs.tools.reader.impl.errors.throw_bad_char.call(null,rdr,kind,initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread(rdr,initch);

return initch;
})()
;
while(true){
if(((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)){
return cljs.tools.reader.impl.errors.throw_bad_char.call(null,rdr,kind,ch);
} else {
var G__9833 = (function (){var G__9665 = sb;
G__9665.append(cljs.tools.reader.reader_types.read_char(rdr));

return G__9665;
})();
var G__9834 = cljs.tools.reader.reader_types.peek_char(rdr);
sb = G__9833;
ch = G__9834;
continue;
}
}
break;
}

}
}
}));

(cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 4);

cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__5733__auto__ = cljs.tools.reader.reader_types.read_char(rdr);
if(cljs.core.truth_(temp__5733__auto__)){
var ch = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.tools.reader.edn.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__5733__auto____$1)){
var dm = temp__5733__auto____$1;
return dm.call(null,rdr,ch,opts);
} else {
return cljs.tools.reader.edn.read_tagged.call(null,(function (){var G__9666 = rdr;
cljs.tools.reader.reader_types.unread(G__9666,ch);

return G__9666;
})(),ch,opts);
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch.call(null,rdr);
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter.call(null,rdr,ch);
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var G__9671 = arguments.length;
switch (G__9671) {
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal.call(null,null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.impl.utils.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token.call(null,null,cljs.core.nth.call(null,token,i),token);
} else {
var G__9837 = (i + (1));
var G__9838 = (d + (uc * base));
i = G__9837;
uc = G__9838;
continue;
}
}
break;
}
}));

(cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.impl.utils.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null,rdr,initch);
} else {
if((!((i === length)))){
var ch = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len.call(null,rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.impl.utils.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char(rdr);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null,rdr,ch);
} else {
var G__9839 = (i + (1));
var G__9840 = (d + (uc * base));
i = G__9839;
uc = G__9840;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
}));

(cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5);

cljs.tools.reader.edn.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.edn.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
if((!((ch == null)))){
var token = ((((cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch):cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"character","character",380652989),ch,false));
var token_len = ((token).length);
if(((1) === token_len)){
return cljs.core.nth.call(null,token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt();
if((((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit)))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal.call(null,rdr,ic.toString((16)));
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len.call(null,rdr,token);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null,rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character.call(null,rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null,rdr);
}
});
cljs.tools.reader.edn.starting_line_col_info = (function cljs$tools$reader$edn$starting_line_col_info(rdr){
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number(rdr),(((cljs.tools.reader.reader_types.get_column_number(rdr) | (0)) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(kind,delim,rdr,opts){
var vec__9730 = cljs.tools.reader.edn.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9730,(0),null);
var start_column = cljs.core.nth.call(null,vec__9730,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.impl.errors.throw_eof_delimited.call(null,rdr,kind,start_line,start_column,cljs.core.count.call(null,a));
}

if(cljs.core._EQ_.call(null,delim__$1,cljs.tools.reader.impl.utils.char$.call(null,ch))){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__5733__auto__ = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(temp__5733__auto__)){
var macrofn = temp__5733__auto__;
var mret = macrofn.call(null,rdr,ch,opts);
var G__9847 = (((!((mret === rdr))))?cljs.core.conj_BANG_.call(null,a,mret):a);
a = G__9847;
continue;
} else {
var o = cljs.tools.reader.edn.read.call(null,(function (){var G__9749 = rdr;
cljs.tools.reader.reader_types.unread(G__9749,ch);

return G__9749;
})(),true,null,opts);
var G__9848 = (((!((o === rdr))))?cljs.core.conj_BANG_.call(null,a,o):a);
a = G__9848;
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"list","list",765357683),")",rdr,opts);
if(cljs.core.empty_QMARK_.call(null,the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.call(null,cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),"]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var vec__9761 = cljs.tools.reader.edn.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__9761,(0),null);
var start_column = cljs.core.nth.call(null,vec__9761,(1),null);
var the_map = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"}",rdr,opts);
var map_count = cljs.core.count.call(null,the_map);
var ks = cljs.core.take_nth.call(null,(2),the_map);
var key_set = cljs.core.set.call(null,ks);
if(cljs.core.odd_QMARK_.call(null,map_count)){
cljs.tools.reader.impl.errors.throw_odd_map.call(null,rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,key_set),cljs.core.count.call(null,ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"map","map",1371690461),ks);
}

if((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array.call(null,the_map),true,true);
} else {
return cljs.core.PersistentHashMap.fromArray(cljs.core.to_array.call(null,the_map),true);
}
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(rdr,initch,opts){
var sb = (function (){var G__9766 = (new goog.string.StringBuffer());
G__9766.append(initch);

return G__9766;
})();
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
cljs.tools.reader.reader_types.unread(rdr,ch);

var or__4126__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number.call(null,rdr,s);
}
} else {
var G__9849 = (function (){var G__9768 = sb;
G__9768.append(ch);

return G__9768;
})();
var G__9850 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__9849;
ch = G__9850;
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char(rdr);
var G__9769 = ch;
switch (G__9769) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char(rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape.call(null,rdr,ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null,rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char.call(null,rdr,ch);
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(rdr,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char(rdr);
while(true){
var G__9770 = ch;
if(cljs.core._EQ_.call(null,null,G__9770)){
return cljs.tools.reader.impl.errors.throw_eof_reading.call(null,rdr,new cljs.core.Keyword(null,"string","string",-1989541586),"\"",sb);
} else {
if(cljs.core._EQ_.call(null,"\\",G__9770)){
var G__9854 = (function (){var G__9772 = sb;
G__9772.append(cljs.tools.reader.edn.escape_char.call(null,sb,rdr));

return G__9772;
})();
var G__9855 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__9854;
ch = G__9855;
continue;
} else {
if(cljs.core._EQ_.call(null,"\"",G__9770)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__9856 = (function (){var G__9773 = sb;
G__9773.append(ch);

return G__9773;
})();
var G__9857 = cljs.tools.reader.reader_types.read_char(rdr);
sb = G__9856;
ch = G__9857;
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__5735__auto__ = cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),initch);
if(cljs.core.truth_(temp__5735__auto__)){
var token = temp__5735__auto__;
var G__9774 = token;
switch (G__9774) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
default:
var or__4126__auto__ = (function (){var temp__5735__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_(temp__5735__auto____$1)){
var p = temp__5735__auto____$1;
return cljs.core.symbol.call(null,p.call(null,(0)),p.call(null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid.call(null,rdr,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),token);
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if((!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))){
var token = cljs.tools.reader.edn.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__4115__auto__;
}
})())){
var ns = s.call(null,(0));
var name = s.call(null,(1));
if((":" === cljs.core.nth.call(null,token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon.call(null,reader);
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
return (new cljs.core.List(null,sym,(new cljs.core.List(null,cljs.tools.reader.edn.read.call(null,rdr,true,null,opts),null,(1),null)),(2),null));
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata.call(null,rdr,m);
}

var o = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target.call(null,rdr,o);
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
var coll = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"set","set",304602554),"}",rdr,opts);
var the_set = cljs.core.set.call(null,coll);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__9780 = rdr;
cljs.tools.reader.edn.read.call(null,G__9780,true,null,true);

return G__9780;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),cljs.tools.reader.reader_types.read_char(rdr));
var temp__5733__auto__ = (function (){var G__9784 = token;
var G__9784__$1 = (((G__9784 == null))?null:cljs.tools.reader.impl.commons.parse_symbol.call(null,G__9784));
if((G__9784__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null,G__9784__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ns = temp__5733__auto__;
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),"}",rdr,opts);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,items))){
cljs.tools.reader.impl.errors.throw_odd_map.call(null,rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.take_nth.call(null,(2),items));
var vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,items));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set.call(null,keys)),cljs.core.count.call(null,keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),keys);
}

return cljs.core.zipmap.call(null,keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map.call(null,rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns.call(null,rdr,token);
}
});
cljs.tools.reader.edn.read_symbolic_value = (function cljs$tools$reader$edn$read_symbolic_value(rdr,_,opts){
var sym = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
var G__9789 = sym;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"NaN","NaN",666918153,null),G__9789)){
return Number.NaN;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"-Inf","-Inf",-2123243689,null),G__9789)){
return Number.NEGATIVE_INFINITY;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Inf","Inf",647172781,null),G__9789)){
return Number.POSITIVE_INFINITY;
} else {
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,["Invalid token: ##",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));

}
}
}
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__9790 = ch;
switch (G__9790) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__9792 = ch;
switch (G__9792) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
case "#":
return cljs.tools.reader.edn.read_symbolic_value;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
var object = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if((!((tag instanceof cljs.core.Symbol)))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag.call(null,rdr,"Reader tag must be a symbol");
} else {
}

var temp__5733__auto__ = (function (){var or__4126__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return f.call(null,object);
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto____$1)){
var d = temp__5733__auto____$1;
return d.call(null,tag,object);
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag.call(null,rdr,tag);
}
}
});
/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var G__9799 = arguments.length;
switch (G__9799) {
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,cljs.core.PersistentArrayMap.EMPTY,reader);
}));

(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__9804,reader){
var map__9805 = p__9804;
var map__9805__$1 = (((((!((map__9805 == null))))?(((((map__9805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9805):map__9805);
var opts = map__9805__$1;
var eof = cljs.core.get.call(null,map__9805__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var eof_error_QMARK_ = (!(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"eof","eof",-489063237))));
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,opts);
}));

(cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.impl.errors.throw_eof_error.call(null,reader,null);
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.edn.read_number.call(null,reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(f)){
var res = f.call(null,reader,ch,opts);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol.call(null,reader,ch);
}

}
}
}
break;
}
}catch (e9812){if((e9812 instanceof Error)){
var e = e9812;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),d,((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number(reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number(reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(reader)], null):null)),e);
}
} else {
throw e9812;

}
}}));

(cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var G__9819 = arguments.length;
switch (G__9819) {
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,s,"");
} else {
return and__4115__auto__;
}
})())){
return cljs.tools.reader.edn.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
}));

(cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "read_symbolic_value", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_symbolic_value; } });
Object.defineProperty(module.exports, "read_tagged", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_tagged; } });
Object.defineProperty(module.exports, "starting_line_col_info", { enumerable: false, get: function() { return cljs.tools.reader.edn.starting_line_col_info; } });
Object.defineProperty(module.exports, "wrapping_reader", { enumerable: false, get: function() { return cljs.tools.reader.edn.wrapping_reader; } });
Object.defineProperty(module.exports, "read_meta", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_meta; } });
Object.defineProperty(module.exports, "read_unicode_char", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_unicode_char; } });
Object.defineProperty(module.exports, "read_unmatched_delimiter", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_unmatched_delimiter; } });
Object.defineProperty(module.exports, "not_constituent_QMARK_", { enumerable: false, get: function() { return cljs.tools.reader.edn.not_constituent_QMARK_; } });
Object.defineProperty(module.exports, "read", { enumerable: false, get: function() { return cljs.tools.reader.edn.read; } });
Object.defineProperty(module.exports, "read_set", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_set; } });
Object.defineProperty(module.exports, "read_symbol", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_symbol; } });
Object.defineProperty(module.exports, "read_map", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_map; } });
Object.defineProperty(module.exports, "macros", { enumerable: false, get: function() { return cljs.tools.reader.edn.macros; } });
Object.defineProperty(module.exports, "read_namespaced_map", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_namespaced_map; } });
Object.defineProperty(module.exports, "read_list", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_list; } });
Object.defineProperty(module.exports, "dispatch_macros", { enumerable: false, get: function() { return cljs.tools.reader.edn.dispatch_macros; } });
Object.defineProperty(module.exports, "read_delimited", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_delimited; } });
Object.defineProperty(module.exports, "read_token", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_token; } });
Object.defineProperty(module.exports, "upper_limit", { enumerable: false, get: function() { return cljs.tools.reader.edn.upper_limit; } });
Object.defineProperty(module.exports, "read_dispatch", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_dispatch; } });
Object.defineProperty(module.exports, "read_string", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_string; } });
Object.defineProperty(module.exports, "escape_char", { enumerable: false, get: function() { return cljs.tools.reader.edn.escape_char; } });
Object.defineProperty(module.exports, "read_char_STAR_", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_char_STAR_; } });
Object.defineProperty(module.exports, "read_string_STAR_", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_string_STAR_; } });
Object.defineProperty(module.exports, "macro_terminating_QMARK_", { enumerable: false, get: function() { return cljs.tools.reader.edn.macro_terminating_QMARK_; } });
Object.defineProperty(module.exports, "lower_limit", { enumerable: false, get: function() { return cljs.tools.reader.edn.lower_limit; } });
Object.defineProperty(module.exports, "read_keyword", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_keyword; } });
Object.defineProperty(module.exports, "read_discard", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_discard; } });
Object.defineProperty(module.exports, "read_vector", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_vector; } });
Object.defineProperty(module.exports, "read_number", { enumerable: false, get: function() { return cljs.tools.reader.edn.read_number; } });
//# sourceMappingURL=cljs.tools.reader.edn.js.map
