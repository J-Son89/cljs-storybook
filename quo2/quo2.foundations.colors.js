var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.foundations.colors.js");

goog.provide('quo2.foundations.colors');
quo2.foundations.colors.alpha = (function quo2$foundations$colors$alpha(value,opacity){
if(cljs.core.truth_(value)){
if(clojure.string.starts_with_QMARK_.call(null,value,"#")){
var hex = clojure.string.replace.call(null,value,/#/,"");
var r = parseInt(cljs.core.subs.call(null,hex,(0),(2)),(16));
var g = parseInt(cljs.core.subs.call(null,hex,(2),(4)),(16));
var b = parseInt(cljs.core.subs.call(null,hex,(4),(6)),(16));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity),")"].join('');
} else {
var rgb = clojure.string.split.call(null,value,/,/);
return [clojure.string.join.call(null,",",cljs.core.butlast.call(null,rgb)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity),")"].join('');
}
} else {
return null;
}
});
quo2.foundations.colors.alpha_opaque = (function quo2$foundations$colors$alpha_opaque(value,opacity){
if(cljs.core.truth_(value)){
if(clojure.string.starts_with_QMARK_.call(null,value,"#")){
var hex = clojure.string.replace.call(null,value,/#/,"");
var r = ((255) - (opacity * ((255) - parseInt(cljs.core.subs.call(null,hex,(0),(2)),(16)))));
var g = ((255) - (opacity * ((255) - parseInt(cljs.core.subs.call(null,hex,(2),(4)),(16)))));
var b = ((255) - (opacity * ((255) - parseInt(cljs.core.subs.call(null,hex,(4),(6)),(16)))));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
} else {
var rgb = clojure.string.split.call(null,value,/,/);
var r = ((255) - (opacity * ((255) - cljs.core.get.call(null,rgb,(0)))));
var g = ((255) - (opacity * ((255) - cljs.core.get.call(null,rgb,(1)))));
var b = ((255) - (opacity * ((255) - cljs.core.get.call(null,rgb,(2)))));
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
}
} else {
return null;
}
});
quo2.foundations.colors.theme_alpha = cljs.core.memoize.call(null,(function() {
var G__16569 = null;
var G__16569__3 = (function (color,light_opacity,dark_opacity){
return quo2.foundations.colors.theme_alpha.call(null,color,light_opacity,color,dark_opacity);
});
var G__16569__4 = (function (light_color,light_opacity,dark_color,dark_opacity){
if(quo2.theme.dark_QMARK_.call(null)){
return quo2.foundations.colors.alpha.call(null,light_color,light_opacity);
} else {
return quo2.foundations.colors.alpha.call(null,dark_color,dark_opacity);
}
});
G__16569 = function(light_color,light_opacity,dark_color,dark_opacity){
switch(arguments.length){
case 3:
return G__16569__3.call(this,light_color,light_opacity,dark_color);
case 4:
return G__16569__4.call(this,light_color,light_opacity,dark_color,dark_opacity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16569.cljs$core$IFn$_invoke$arity$3 = G__16569__3;
G__16569.cljs$core$IFn$_invoke$arity$4 = G__16569__4;
return G__16569;
})()
);
quo2.foundations.colors.neutral_5 = "#F5F6F8";
quo2.foundations.colors.neutral_10 = "#F0F2F5";
quo2.foundations.colors.neutral_20 = "#E7EAEE";
quo2.foundations.colors.neutral_30 = "#DCE0E5";
quo2.foundations.colors.neutral_40 = "#A1ABBD";
quo2.foundations.colors.neutral_50 = "#647084";
quo2.foundations.colors.neutral_60 = "#303D55";
quo2.foundations.colors.neutral_70 = "#202C42";
quo2.foundations.colors.neutral_80 = "#1B273D";
quo2.foundations.colors.neutral_90 = "#131D2F";
quo2.foundations.colors.neutral_95 = "#0D1625";
quo2.foundations.colors.neutral_100 = "#09101C";
quo2.foundations.colors.neutral_80_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.05);
quo2.foundations.colors.neutral_80_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.1);
quo2.foundations.colors.neutral_80_opa_15 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.15);
quo2.foundations.colors.neutral_80_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.2);
quo2.foundations.colors.neutral_80_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.3);
quo2.foundations.colors.neutral_80_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.4);
quo2.foundations.colors.neutral_80_opa_50 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.4);
quo2.foundations.colors.neutral_80_opa_60 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.6);
quo2.foundations.colors.neutral_80_opa_70 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.7);
quo2.foundations.colors.neutral_80_opa_80 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.8);
quo2.foundations.colors.neutral_80_opa_90 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.9);
quo2.foundations.colors.neutral_80_opa_95 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_80,0.95);
quo2.foundations.colors.neutral_90_opa_0 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_90,(0));
quo2.foundations.colors.neutral_95_opa_0 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,(0));
quo2.foundations.colors.neutral_95_opa_60 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,0.6);
quo2.foundations.colors.neutral_95_opa_70 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,0.7);
quo2.foundations.colors.neutral_95_opa_80 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,0.8);
quo2.foundations.colors.neutral_95_opa_90 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,0.9);
quo2.foundations.colors.neutral_95_opa_95 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_95,0.95);
quo2.foundations.colors.neutral_100_opa_0 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,(0));
quo2.foundations.colors.neutral_100_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.05);
quo2.foundations.colors.neutral_100_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.1);
quo2.foundations.colors.neutral_100_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.3);
quo2.foundations.colors.neutral_100_opa_60 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.6);
quo2.foundations.colors.neutral_100_opa_70 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.7);
quo2.foundations.colors.neutral_100_opa_80 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.8);
quo2.foundations.colors.neutral_100_opa_90 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.9);
quo2.foundations.colors.neutral_100_opa_95 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.95);
quo2.foundations.colors.neutral_100_opa_100 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,(1));
quo2.foundations.colors.neutral_80_opa_5_opaque = quo2.foundations.colors.alpha_opaque.call(null,quo2.foundations.colors.neutral_80,0.05);
quo2.foundations.colors.white = "#ffffff";
quo2.foundations.colors.white_opa_0 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,(0));
quo2.foundations.colors.white_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.05);
quo2.foundations.colors.white_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.1);
quo2.foundations.colors.white_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.2);
quo2.foundations.colors.white_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.3);
quo2.foundations.colors.white_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.4);
quo2.foundations.colors.white_opa_50 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.5);
quo2.foundations.colors.white_opa_60 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.6);
quo2.foundations.colors.white_opa_70 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.7);
quo2.foundations.colors.white_opa_80 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.8);
quo2.foundations.colors.white_opa_90 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.9);
quo2.foundations.colors.white_opa_95 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.95);
quo2.foundations.colors.white_70_blur = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.7);
quo2.foundations.colors.neutral_80_opa_1_blur = quo2.foundations.colors.alpha.call(null,"#192438",0.1);
quo2.foundations.colors.neutral_5_opa_70_blur = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_5,0.7);
quo2.foundations.colors.neutral_80_opa_80_blur = quo2.foundations.colors.alpha.call(null,"#192438",0.8);
quo2.foundations.colors.neutral_90_opa_70_blur = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_90,0.7);
quo2.foundations.colors.neutral_95_opa_70_blur = quo2.foundations.colors.neutral_95_opa_70;
quo2.foundations.colors.neutral_100_opa_70_blur = quo2.foundations.colors.neutral_100_opa_70;
quo2.foundations.colors.black = "#000000";
quo2.foundations.colors.black_opa_0 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.black,(0));
quo2.foundations.colors.onboarding_header_black = "#000716";
quo2.foundations.colors.primary_50 = "#4360DF";
quo2.foundations.colors.primary_60 = "#354DB2";
quo2.foundations.colors.primary_50_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.primary_50,0.05);
quo2.foundations.colors.primary_50_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.primary_50,0.1);
quo2.foundations.colors.primary_50_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.primary_50,0.2);
quo2.foundations.colors.primary_50_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.primary_50,0.3);
quo2.foundations.colors.primary_50_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.primary_50,0.4);
quo2.foundations.colors.success_50 = "#23ADA0";
quo2.foundations.colors.success_60 = "#1C8A80";
quo2.foundations.colors.success_50_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_50,0.05);
quo2.foundations.colors.success_50_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_50,0.1);
quo2.foundations.colors.success_50_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_50,0.2);
quo2.foundations.colors.success_50_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_50,0.3);
quo2.foundations.colors.success_50_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_50,0.4);
quo2.foundations.colors.success_60_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_60,0.05);
quo2.foundations.colors.success_60_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_60,0.1);
quo2.foundations.colors.success_60_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_60,0.2);
quo2.foundations.colors.success_60_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_60,0.3);
quo2.foundations.colors.success_60_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.success_60,0.4);
quo2.foundations.colors.danger = "#E95460";
quo2.foundations.colors.danger_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger,0.4);
quo2.foundations.colors.danger_50 = "#E95460";
quo2.foundations.colors.danger_60 = "#BA434D";
quo2.foundations.colors.danger_50_opa_5 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger_50,0.05);
quo2.foundations.colors.danger_50_opa_10 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger_50,0.1);
quo2.foundations.colors.danger_50_opa_20 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger_50,0.2);
quo2.foundations.colors.danger_50_opa_30 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger_50,0.3);
quo2.foundations.colors.danger_50_opa_40 = quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.danger_50,0.4);
quo2.foundations.colors.customization = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"copper","copper",-934352731),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"army","army",842961270),new cljs.core.Keyword(null,"camel","camel",-126762952),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"sky","sky",1271496862)],[new cljs.core.PersistentArrayMap(null, 2, [(50),"#FF7D46",(60),"#CC6438"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#CB6256",(60),"#A24E45"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#F6B03C",(60),"#C58D30"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#2A799B",(60),"#22617C"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#2A4AF5",(60),"#223BC4"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#216266",(60),"#1A4E52"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#C78F67",(60),"#9F7252"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#F66F8F",(60),"#C55972"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#EC266C",(60),"#BD1E56"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#7140FD",(60),"#5A33CA"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#1992D7",(60),"#1475AC"], null)]);
quo2.foundations.colors.colors_map = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"beige","beige",836725695)],[new cljs.core.PersistentArrayMap(null, 2, [(50),quo2.foundations.colors.primary_50,(60),quo2.foundations.colors.primary_60], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#5BCC95",(60),"#4CAB7D"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#496289",(60),"#3D5273"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),quo2.foundations.colors.danger_50,(60),quo2.foundations.colors.danger_60], null),new cljs.core.PersistentArrayMap(null, 2, [(50),quo2.foundations.colors.success_50,(60),quo2.foundations.colors.success_60], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#F46666",(60),"#CD5656"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#EC266C",(60),"#BD1E56"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#99604D",(60),"#805141"], null),new cljs.core.PersistentArrayMap(null, 2, [(50),"#CAAE93",(60),"#AA927C"], null)]),quo2.foundations.colors.customization);
/**
 * (custom-color color suffix opacity)
 * color   :primary/:purple/...
 * suffix  50/60
 * opacity 0-100 (optional)
 */
quo2.foundations.colors.custom_color = cljs.core.memoize.call(null,(function() {
var G__16598 = null;
var G__16598__2 = (function (color,suffix){
return quo2.foundations.colors.custom_color.call(null,color,suffix,null);
});
var G__16598__3 = (function (color,suffix,opacity){
var color_keyword = cljs.core.keyword.call(null,color);
var base_color = cljs.core.get_in.call(null,quo2.foundations.colors.colors_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_keyword,suffix], null));
if(cljs.core.truth_(opacity)){
return quo2.foundations.colors.alpha.call(null,base_color,(opacity / (100)));
} else {
return base_color;
}
});
G__16598 = function(color,suffix,opacity){
switch(arguments.length){
case 2:
return G__16598__2.call(this,color,suffix);
case 3:
return G__16598__3.call(this,color,suffix,opacity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16598.cljs$core$IFn$_invoke$arity$2 = G__16598__2;
G__16598.cljs$core$IFn$_invoke$arity$3 = G__16598__3;
return G__16598;
})()
);
/**
 * (custom-color-by-theme color suffix-light suffix-dark opacity-light opacity-dark)
 * color         :primary/:purple/...
 * suffix-light  50/60
 * suffix-dark   50/60
 * opacity-light 0-100 (optional)
 * opacity-dark  0-100 (optional)
 */
quo2.foundations.colors.custom_color_by_theme = (function quo2$foundations$colors$custom_color_by_theme(var_args){
var G__16565 = arguments.length;
switch (G__16565) {
case 3:
return quo2.foundations.colors.custom_color_by_theme.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quo2.foundations.colors.custom_color_by_theme.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.foundations.colors.custom_color_by_theme.cljs$core$IFn$_invoke$arity$3 = (function (color,suffix_light,suffix_dark){
return quo2.foundations.colors.custom_color_by_theme.call(null,color,suffix_light,suffix_dark,null,null);
}));

(quo2.foundations.colors.custom_color_by_theme.cljs$core$IFn$_invoke$arity$5 = (function (color,suffix_light,suffix_dark,opacity_light,opacity_dark){
if(quo2.theme.dark_QMARK_.call(null)){
return quo2.foundations.colors.custom_color(color,suffix_dark,opacity_dark);
} else {
return quo2.foundations.colors.custom_color(color,suffix_light,opacity_light);
}
}));

(quo2.foundations.colors.custom_color_by_theme.cljs$lang$maxFixedArity = 5);

quo2.foundations.colors.shadow = "rgba(9,16,28,0.08)";
quo2.foundations.colors.divider_light = "#EDF2f4";
quo2.foundations.colors.divider_dark = "#0E1620";
/**
 * (theme-colors light dark override-theme)
 */
quo2.foundations.colors.theme_colors = (function quo2$foundations$colors$theme_colors(var_args){
var G__16567 = arguments.length;
switch (G__16567) {
case 2:
return quo2.foundations.colors.theme_colors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quo2.foundations.colors.theme_colors.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quo2.foundations.colors.theme_colors.cljs$core$IFn$_invoke$arity$2 = (function (light,dark){
return quo2.foundations.colors.theme_colors.call(null,light,dark,null);
}));

(quo2.foundations.colors.theme_colors.cljs$core$IFn$_invoke$arity$3 = (function (light,dark,override_theme){
var theme = (function (){var or__4126__auto__ = override_theme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.theme.get_theme.call(null);
}
})();
if(cljs.core._EQ_.call(null,theme,new cljs.core.Keyword(null,"light","light",1918998747))){
return light;
} else {
return dark;
}
}));

(quo2.foundations.colors.theme_colors.cljs$lang$maxFixedArity = 3);

quo2.foundations.colors.dark_QMARK_ = (function quo2$foundations$colors$dark_QMARK_(){
return quo2.theme.dark_QMARK_.call(null);
});
Object.defineProperty(module.exports, "white_opa_50", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_50; } });
Object.defineProperty(module.exports, "shadow", { enumerable: false, get: function() { return quo2.foundations.colors.shadow; } });
Object.defineProperty(module.exports, "neutral_80_opa_15", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_15; } });
Object.defineProperty(module.exports, "neutral_80_opa_80", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_80; } });
Object.defineProperty(module.exports, "neutral_60", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_60; } });
Object.defineProperty(module.exports, "neutral_80_opa_90", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_90; } });
Object.defineProperty(module.exports, "neutral_80_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_30; } });
Object.defineProperty(module.exports, "white_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_40; } });
Object.defineProperty(module.exports, "danger_60", { enumerable: false, get: function() { return quo2.foundations.colors.danger_60; } });
Object.defineProperty(module.exports, "neutral_100_opa_90", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_90; } });
Object.defineProperty(module.exports, "neutral_5_opa_70_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_5_opa_70_blur; } });
Object.defineProperty(module.exports, "black", { enumerable: false, get: function() { return quo2.foundations.colors.black; } });
Object.defineProperty(module.exports, "neutral_100_opa_70", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_70; } });
Object.defineProperty(module.exports, "customization", { enumerable: false, get: function() { return quo2.foundations.colors.customization; } });
Object.defineProperty(module.exports, "success_60_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.success_60_opa_40; } });
Object.defineProperty(module.exports, "neutral_20", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_20; } });
Object.defineProperty(module.exports, "neutral_30", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_30; } });
Object.defineProperty(module.exports, "primary_50_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50_opa_5; } });
Object.defineProperty(module.exports, "neutral_80_opa_60", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_60; } });
Object.defineProperty(module.exports, "alpha_opaque", { enumerable: false, get: function() { return quo2.foundations.colors.alpha_opaque; } });
Object.defineProperty(module.exports, "neutral_95_opa_70_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_70_blur; } });
Object.defineProperty(module.exports, "danger_50_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50_opa_30; } });
Object.defineProperty(module.exports, "success_60_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.success_60_opa_10; } });
Object.defineProperty(module.exports, "neutral_80_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_5; } });
Object.defineProperty(module.exports, "neutral_80_opa_80_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_80_blur; } });
Object.defineProperty(module.exports, "neutral_80", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80; } });
Object.defineProperty(module.exports, "neutral_80_opa_70", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_70; } });
Object.defineProperty(module.exports, "black_opa_0", { enumerable: false, get: function() { return quo2.foundations.colors.black_opa_0; } });
Object.defineProperty(module.exports, "neutral_95_opa_0", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_0; } });
Object.defineProperty(module.exports, "success_50_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.success_50_opa_10; } });
Object.defineProperty(module.exports, "neutral_95_opa_95", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_95; } });
Object.defineProperty(module.exports, "primary_50_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50_opa_10; } });
Object.defineProperty(module.exports, "neutral_95_opa_80", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_80; } });
Object.defineProperty(module.exports, "neutral_40", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_40; } });
Object.defineProperty(module.exports, "danger_50_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50_opa_20; } });
Object.defineProperty(module.exports, "neutral_70", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_70; } });
Object.defineProperty(module.exports, "success_60", { enumerable: false, get: function() { return quo2.foundations.colors.success_60; } });
Object.defineProperty(module.exports, "success_60_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.success_60_opa_20; } });
Object.defineProperty(module.exports, "success_60_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.success_60_opa_5; } });
Object.defineProperty(module.exports, "theme_alpha", { enumerable: false, get: function() { return quo2.foundations.colors.theme_alpha; } });
Object.defineProperty(module.exports, "white", { enumerable: false, get: function() { return quo2.foundations.colors.white; } });
Object.defineProperty(module.exports, "danger_50_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50_opa_5; } });
Object.defineProperty(module.exports, "white_opa_95", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_95; } });
Object.defineProperty(module.exports, "white_opa_70", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_70; } });
Object.defineProperty(module.exports, "neutral_95", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95; } });
Object.defineProperty(module.exports, "danger_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.danger_opa_40; } });
Object.defineProperty(module.exports, "neutral_95_opa_70", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_70; } });
Object.defineProperty(module.exports, "neutral_95_opa_90", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_90; } });
Object.defineProperty(module.exports, "neutral_100_opa_80", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_80; } });
Object.defineProperty(module.exports, "primary_50_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50_opa_40; } });
Object.defineProperty(module.exports, "neutral_80_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_20; } });
Object.defineProperty(module.exports, "neutral_90", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_90; } });
Object.defineProperty(module.exports, "neutral_100_opa_60", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_60; } });
Object.defineProperty(module.exports, "white_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_20; } });
Object.defineProperty(module.exports, "neutral_100", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100; } });
Object.defineProperty(module.exports, "neutral_80_opa_1_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_1_blur; } });
Object.defineProperty(module.exports, "danger_50_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50_opa_40; } });
Object.defineProperty(module.exports, "neutral_50", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_50; } });
Object.defineProperty(module.exports, "custom_color_by_theme", { enumerable: false, get: function() { return quo2.foundations.colors.custom_color_by_theme; } });
Object.defineProperty(module.exports, "neutral_80_opa_5_opaque", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_5_opaque; } });
Object.defineProperty(module.exports, "neutral_100_opa_70_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_70_blur; } });
Object.defineProperty(module.exports, "white_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_10; } });
Object.defineProperty(module.exports, "success_50_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.success_50_opa_30; } });
Object.defineProperty(module.exports, "primary_50_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50_opa_20; } });
Object.defineProperty(module.exports, "neutral_90_opa_0", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_90_opa_0; } });
Object.defineProperty(module.exports, "neutral_100_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_10; } });
Object.defineProperty(module.exports, "white_opa_0", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_0; } });
Object.defineProperty(module.exports, "white_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_5; } });
Object.defineProperty(module.exports, "neutral_80_opa_95", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_95; } });
Object.defineProperty(module.exports, "neutral_80_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_10; } });
Object.defineProperty(module.exports, "custom_color", { enumerable: false, get: function() { return quo2.foundations.colors.custom_color; } });
Object.defineProperty(module.exports, "danger_50_opa_10", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50_opa_10; } });
Object.defineProperty(module.exports, "onboarding_header_black", { enumerable: false, get: function() { return quo2.foundations.colors.onboarding_header_black; } });
Object.defineProperty(module.exports, "white_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_30; } });
Object.defineProperty(module.exports, "neutral_80_opa_50", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_50; } });
Object.defineProperty(module.exports, "success_50_opa_20", { enumerable: false, get: function() { return quo2.foundations.colors.success_50_opa_20; } });
Object.defineProperty(module.exports, "success_50", { enumerable: false, get: function() { return quo2.foundations.colors.success_50; } });
Object.defineProperty(module.exports, "neutral_100_opa_0", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_0; } });
Object.defineProperty(module.exports, "dark_QMARK_", { enumerable: false, get: function() { return quo2.foundations.colors.dark_QMARK_; } });
Object.defineProperty(module.exports, "primary_50", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50; } });
Object.defineProperty(module.exports, "success_50_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.success_50_opa_5; } });
Object.defineProperty(module.exports, "neutral_100_opa_100", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_100; } });
Object.defineProperty(module.exports, "divider_light", { enumerable: false, get: function() { return quo2.foundations.colors.divider_light; } });
Object.defineProperty(module.exports, "danger", { enumerable: false, get: function() { return quo2.foundations.colors.danger; } });
Object.defineProperty(module.exports, "colors_map", { enumerable: false, get: function() { return quo2.foundations.colors.colors_map; } });
Object.defineProperty(module.exports, "neutral_100_opa_95", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_95; } });
Object.defineProperty(module.exports, "success_60_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.success_60_opa_30; } });
Object.defineProperty(module.exports, "primary_60", { enumerable: false, get: function() { return quo2.foundations.colors.primary_60; } });
Object.defineProperty(module.exports, "neutral_95_opa_60", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_95_opa_60; } });
Object.defineProperty(module.exports, "white_opa_90", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_90; } });
Object.defineProperty(module.exports, "theme_colors", { enumerable: false, get: function() { return quo2.foundations.colors.theme_colors; } });
Object.defineProperty(module.exports, "neutral_100_opa_5", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_5; } });
Object.defineProperty(module.exports, "success_50_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.success_50_opa_40; } });
Object.defineProperty(module.exports, "danger_50", { enumerable: false, get: function() { return quo2.foundations.colors.danger_50; } });
Object.defineProperty(module.exports, "neutral_90_opa_70_blur", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_90_opa_70_blur; } });
Object.defineProperty(module.exports, "white_70_blur", { enumerable: false, get: function() { return quo2.foundations.colors.white_70_blur; } });
Object.defineProperty(module.exports, "neutral_5", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_5; } });
Object.defineProperty(module.exports, "neutral_100_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_100_opa_30; } });
Object.defineProperty(module.exports, "white_opa_60", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_60; } });
Object.defineProperty(module.exports, "neutral_80_opa_40", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_80_opa_40; } });
Object.defineProperty(module.exports, "divider_dark", { enumerable: false, get: function() { return quo2.foundations.colors.divider_dark; } });
Object.defineProperty(module.exports, "alpha", { enumerable: false, get: function() { return quo2.foundations.colors.alpha; } });
Object.defineProperty(module.exports, "neutral_10", { enumerable: false, get: function() { return quo2.foundations.colors.neutral_10; } });
Object.defineProperty(module.exports, "primary_50_opa_30", { enumerable: false, get: function() { return quo2.foundations.colors.primary_50_opa_30; } });
Object.defineProperty(module.exports, "white_opa_80", { enumerable: false, get: function() { return quo2.foundations.colors.white_opa_80; } });
//# sourceMappingURL=quo2.foundations.colors.js.map
