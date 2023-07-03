var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.design_system.colors.js");

goog.provide('quo.design_system.colors');
quo.design_system.colors.light_theme = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864),new cljs.core.Keyword(null,"text-03","text-03",462265760),new cljs.core.Keyword(null,"text-01","text-01",-1912359967),new cljs.core.Keyword(null,"icon-05","icon-05",1866486530),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157),new cljs.core.Keyword(null,"positive-02","positive-02",-1264647004),new cljs.core.Keyword(null,"ui-02","ui-02",1490274148),new cljs.core.Keyword(null,"positive-03","positive-03",1751384359),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"ui-03","ui-03",1577788458),new cljs.core.Keyword(null,"negative-02","negative-02",1272870091),new cljs.core.Keyword(null,"border-01","border-01",-1792505013),new cljs.core.Keyword(null,"icon-04","icon-04",1050021132),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615),new cljs.core.Keyword(null,"ui-background","ui-background",925586609),new cljs.core.Keyword(null,"blurred-bg","blurred-bg",-414258574),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541),new cljs.core.Keyword(null,"interactive-03","interactive-03",-1336399628),new cljs.core.Keyword(null,"text-05","text-05",1203333556),new cljs.core.Keyword(null,"border-02","border-02",-2099517930),new cljs.core.Keyword(null,"text-02","text-02",-95561481),new cljs.core.Keyword(null,"icon-01","icon-01",164326199),new cljs.core.Keyword(null,"icon-03","icon-03",496125528),new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318),new cljs.core.Keyword(null,"text-04","text-04",1924373595),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454),new cljs.core.Keyword(null,"warning-01","warning-01",1584503678),new cljs.core.Keyword(null,"warning-02","warning-02",-1335580257)],["rgba(147,155,161,1)","rgba(255,255,255,0.7)","rgba(0,0,0,1)","rgba(255,255,255,1)","rgba(255,45,85,1)","rgba(78,188,96,0.1)","rgba(0,0,0,0.1)","rgba(78,188,96,1)","rgba(67,96,223,0.4)","rgba(0,0,0,0.86)","rgba(255,45,85,0.1))","rgba(238,242,245,1)","rgba(67,96,223,1)","rgba(236,239,252,1)","rgba(68,208,88,1)","rgba(255,255,255,1)","rgba(255,255,255,0.3)","rgba(238,242,245,1)","rgba(255,255,255,0.1)","rgba(255,255,255,1)","rgba(67, 96, 223, 0.1)","rgba(147,155,161,1)","rgba(0,0,0,1)","rgba(255,255,255,0.4)","rgba(67,96,223,1)","rgba(67,96,223,1)","rgba(0,0,0,0.4)","rgba(147,155,161,1)","rgba(0,9,26,0.12)","rgba(255, 202, 15, 1)","rgba(255, 202, 15, 0.1)"]);
quo.design_system.colors.dark_theme = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864),new cljs.core.Keyword(null,"text-03","text-03",462265760),new cljs.core.Keyword(null,"text-01","text-01",-1912359967),new cljs.core.Keyword(null,"icon-05","icon-05",1866486530),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157),new cljs.core.Keyword(null,"positive-02","positive-02",-1264647004),new cljs.core.Keyword(null,"ui-02","ui-02",1490274148),new cljs.core.Keyword(null,"positive-03","positive-03",1751384359),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"ui-03","ui-03",1577788458),new cljs.core.Keyword(null,"negative-02","negative-02",1272870091),new cljs.core.Keyword(null,"border-01","border-01",-1792505013),new cljs.core.Keyword(null,"icon-04","icon-04",1050021132),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615),new cljs.core.Keyword(null,"ui-background","ui-background",925586609),new cljs.core.Keyword(null,"blurred-bg","blurred-bg",-414258574),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541),new cljs.core.Keyword(null,"interactive-03","interactive-03",-1336399628),new cljs.core.Keyword(null,"text-05","text-05",1203333556),new cljs.core.Keyword(null,"border-02","border-02",-2099517930),new cljs.core.Keyword(null,"text-02","text-02",-95561481),new cljs.core.Keyword(null,"icon-01","icon-01",164326199),new cljs.core.Keyword(null,"icon-03","icon-03",496125528),new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318),new cljs.core.Keyword(null,"text-04","text-04",1924373595),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454),new cljs.core.Keyword(null,"warning-01","warning-01",1584503678),new cljs.core.Keyword(null,"warning-02","warning-02",-1335580257)],["rgba(131,140,145,1)","rgba(255,255,255,0.7)","rgba(255,255,255,1)","rgba(20,20,20,1)","rgba(252,95,95,1)","rgba(78,188,96,0.1)","rgba(0,0,0,0.1)","rgba(78,188,96,1)","rgba(67,96,223,0.4)","rgba(0,0,0,0.86)","rgba(252,95,95,0.1)","rgba(37,37,40,1)","rgba(97,119,229,1)","rgba(35,37,47,1)","rgba(68,208,88,1)","rgba(20,20,20,1)","rgba(0,0,0,0.3)","rgba(37,37,40,1)","rgba(255,255,255,0.1)","rgba(20,20,20,1)","rgba(97,119,229,0.1)","rgba(131,140,145,1)","rgba(255,255,255,1)","rgba(255,255,255,0.4)","rgba(97,119,229,1)","rgba(97,119,229,1)","rgba(0,0,0,0.4)","rgba(131,140,145,1)","rgba(0,0,0,0.75)","rgba(255, 202, 15, 1)","rgba(255, 202, 15, 0.1)"]);
quo.design_system.colors.theme = reagent.core.atom.call(null,quo.design_system.colors.light_theme);
quo.design_system.colors.get_color = (function quo$design_system$colors$get_color(color){
return cljs.core.get.call(null,cljs.core.deref.call(null,quo.design_system.colors.theme),color);
});
quo.design_system.colors.alpha = (function quo$design_system$colors$alpha(value,opacity){
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
});
quo.design_system.colors.old_colors_mapping_light = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mentioned-background","mentioned-background",-2119258760),"#def6fc",new cljs.core.Keyword(null,"mentioned-border","mentioned-border",2036092127),"#b8ecf9",new cljs.core.Keyword(null,"pin-background","pin-background",2093198105),"#FFEECC"], null);
quo.design_system.colors.old_colors_mapping_dark = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mentioned-background","mentioned-background",-2119258760),"#2a4046",new cljs.core.Keyword(null,"mentioned-border","mentioned-border",2036092127),"#2a4046",new cljs.core.Keyword(null,"pin-background","pin-background",2093198105),"#34232B"], null);
quo.design_system.colors.old_colors_mapping_themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dark","dark",1818973999),quo.design_system.colors.old_colors_mapping_dark,new cljs.core.Keyword(null,"light","light",1918998747),quo.design_system.colors.old_colors_mapping_light], null);
quo.design_system.colors.white = new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_persist = new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_transparent_10 = new cljs.core.Keyword(null,"interactive-03","interactive-03",-1336399628).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_transparent = new cljs.core.Keyword(null,"icon-03","icon-03",496125528).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_transparent_persist = new cljs.core.Keyword(null,"icon-03","icon-03",496125528).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_transparent_70 = new cljs.core.Keyword(null,"text-03","text-03",462265760).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.white_transparent_70_persist = new cljs.core.Keyword(null,"text-03","text-03",462265760).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.mentioned_background = new cljs.core.Keyword(null,"mentioned-background","mentioned-background",-2119258760).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.old_colors_mapping_light);
quo.design_system.colors.mentioned_border = new cljs.core.Keyword(null,"mentioned-border","mentioned-border",2036092127).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.old_colors_mapping_light);
quo.design_system.colors.red_light = "#ffe5ea";
quo.design_system.colors.black = new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_persist = new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.dark_theme);
quo.design_system.colors.black_transparent = new cljs.core.Keyword(null,"ui-02","ui-02",1490274148).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_transparent_20 = new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_transparent_40 = new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_transparent_40_persist = new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_transparent_50 = new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.black_light = "#2d2d2d";
quo.design_system.colors.black_transparent_86 = new cljs.core.Keyword(null,"ui-03","ui-03",1577788458).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.gray = new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.gray_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.gray,0.1);
quo.design_system.colors.gray_transparent_40 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.gray,0.4);
quo.design_system.colors.gray_lighter = new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.blue = new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.blue_persist = new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.blue_light = new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.blue_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.blue,0.1);
quo.design_system.colors.red = new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.light_theme);
quo.design_system.colors.red_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.red,0.1);
quo.design_system.colors.red_audio_recorder = "#fa6565";
quo.design_system.colors.green = "#44d058";
quo.design_system.colors.green_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.green,0.1);
quo.design_system.colors.pin_background = new cljs.core.Keyword(null,"pin-background","pin-background",2093198105).cljs$core$IFn$_invoke$arity$1(quo.design_system.colors.old_colors_mapping_light);
quo.design_system.colors.purple = "#887af9";
quo.design_system.colors.orange = "#FE8F59";
quo.design_system.colors.chat_colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fa6565","#7cda00",quo.design_system.colors.purple,"#51d0f0",quo.design_system.colors.orange,"#d37ef4"], null);
quo.design_system.colors.account_colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#9B832F","#D37EF4","#1D806F","#FA6565","#7CDA00",quo.design_system.colors.purple,"#8B3131"], null);
quo.design_system.colors.mention_incoming = "#0DA4C9";
quo.design_system.colors.mention_outgoing = "#9EE8FA";
quo.design_system.colors.text = quo.design_system.colors.black;
quo.design_system.colors.text_gray = quo.design_system.colors.gray;
quo.design_system.colors.default_community_color = "#773377";
quo.design_system.colors.default_chat_color = "#a187d5";
quo.design_system.colors.theme_type = reagent.core.atom.call(null,new cljs.core.Keyword(null,"light","light",1918998747));
quo.design_system.colors.dark_QMARK_ = (function quo$design_system$colors$dark_QMARK_(){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref.call(null,quo.design_system.colors.theme_type));
});
quo.design_system.colors.set_legacy_theme_type = (function quo$design_system$colors$set_legacy_theme_type(type){
if(cljs.core._EQ_.call(null,type,cljs.core.deref.call(null,quo.design_system.colors.theme_type))){
return null;
} else {
var old_colors_mapping_colors_16829 = cljs.core.get.call(null,quo.design_system.colors.old_colors_mapping_themes,type);
(quo.design_system.colors.white = new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.black = new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.gray_lighter = new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.blue = new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.gray = new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.blue_light = new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.red = new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)));

(quo.design_system.colors.text = quo.design_system.colors.black);

(quo.design_system.colors.mentioned_background = new cljs.core.Keyword(null,"mentioned-background","mentioned-background",-2119258760).cljs$core$IFn$_invoke$arity$1(old_colors_mapping_colors_16829));

(quo.design_system.colors.mentioned_border = new cljs.core.Keyword(null,"mentioned-border","mentioned-border",2036092127).cljs$core$IFn$_invoke$arity$1(old_colors_mapping_colors_16829));

(quo.design_system.colors.white_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.white,0.1));

(quo.design_system.colors.white_transparent = quo.design_system.colors.alpha.call(null,quo.design_system.colors.white,0.4));

(quo.design_system.colors.white_transparent_70 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.white,0.7));

(quo.design_system.colors.black_transparent = quo.design_system.colors.alpha.call(null,quo.design_system.colors.black,0.1));

(quo.design_system.colors.black_transparent_20 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.black,0.2));

(quo.design_system.colors.black_transparent_40 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.black,0.4));

(quo.design_system.colors.black_transparent_50 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.black,0.5));

(quo.design_system.colors.gray_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.gray,0.1));

(quo.design_system.colors.gray_transparent_40 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.gray,0.4));

(quo.design_system.colors.green_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.green,0.1));

(quo.design_system.colors.red_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.red,0.1));

(quo.design_system.colors.blue_transparent_10 = quo.design_system.colors.alpha.call(null,quo.design_system.colors.blue,0.1));

(quo.design_system.colors.pin_background = new cljs.core.Keyword(null,"pin-background","pin-background",2093198105).cljs$core$IFn$_invoke$arity$1(old_colors_mapping_colors_16829));

return cljs.core.reset_BANG_.call(null,quo.design_system.colors.theme_type,type);
}
});
quo.design_system.colors.color_online = "#7CDA00";
quo.design_system.colors.color_dnd = "#FA6565";
quo.design_system.colors.color_inactive = "#939BA1";
Object.defineProperty(module.exports, "default_community_color", { enumerable: false, get: function() { return quo.design_system.colors.default_community_color; } });
Object.defineProperty(module.exports, "pin_background", { enumerable: false, get: function() { return quo.design_system.colors.pin_background; } });
Object.defineProperty(module.exports, "black_transparent_40", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent_40; } });
Object.defineProperty(module.exports, "white_transparent_70_persist", { enumerable: false, get: function() { return quo.design_system.colors.white_transparent_70_persist; } });
Object.defineProperty(module.exports, "purple", { enumerable: false, get: function() { return quo.design_system.colors.purple; } });
Object.defineProperty(module.exports, "white_transparent_persist", { enumerable: false, get: function() { return quo.design_system.colors.white_transparent_persist; } });
Object.defineProperty(module.exports, "blue_persist", { enumerable: false, get: function() { return quo.design_system.colors.blue_persist; } });
Object.defineProperty(module.exports, "white_transparent", { enumerable: false, get: function() { return quo.design_system.colors.white_transparent; } });
Object.defineProperty(module.exports, "light_theme", { enumerable: false, get: function() { return quo.design_system.colors.light_theme; } });
Object.defineProperty(module.exports, "red_transparent_10", { enumerable: false, get: function() { return quo.design_system.colors.red_transparent_10; } });
Object.defineProperty(module.exports, "color_inactive", { enumerable: false, get: function() { return quo.design_system.colors.color_inactive; } });
Object.defineProperty(module.exports, "black_transparent_20", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent_20; } });
Object.defineProperty(module.exports, "gray_transparent_40", { enumerable: false, get: function() { return quo.design_system.colors.gray_transparent_40; } });
Object.defineProperty(module.exports, "gray_transparent_10", { enumerable: false, get: function() { return quo.design_system.colors.gray_transparent_10; } });
Object.defineProperty(module.exports, "gray_lighter", { enumerable: false, get: function() { return quo.design_system.colors.gray_lighter; } });
Object.defineProperty(module.exports, "black_transparent_40_persist", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent_40_persist; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return quo.design_system.colors.text; } });
Object.defineProperty(module.exports, "color_online", { enumerable: false, get: function() { return quo.design_system.colors.color_online; } });
Object.defineProperty(module.exports, "black", { enumerable: false, get: function() { return quo.design_system.colors.black; } });
Object.defineProperty(module.exports, "mentioned_border", { enumerable: false, get: function() { return quo.design_system.colors.mentioned_border; } });
Object.defineProperty(module.exports, "black_transparent_50", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent_50; } });
Object.defineProperty(module.exports, "chat_colors", { enumerable: false, get: function() { return quo.design_system.colors.chat_colors; } });
Object.defineProperty(module.exports, "orange", { enumerable: false, get: function() { return quo.design_system.colors.orange; } });
Object.defineProperty(module.exports, "red_light", { enumerable: false, get: function() { return quo.design_system.colors.red_light; } });
Object.defineProperty(module.exports, "blue_transparent_10", { enumerable: false, get: function() { return quo.design_system.colors.blue_transparent_10; } });
Object.defineProperty(module.exports, "default_chat_color", { enumerable: false, get: function() { return quo.design_system.colors.default_chat_color; } });
Object.defineProperty(module.exports, "gray", { enumerable: false, get: function() { return quo.design_system.colors.gray; } });
Object.defineProperty(module.exports, "black_light", { enumerable: false, get: function() { return quo.design_system.colors.black_light; } });
Object.defineProperty(module.exports, "white", { enumerable: false, get: function() { return quo.design_system.colors.white; } });
Object.defineProperty(module.exports, "account_colors", { enumerable: false, get: function() { return quo.design_system.colors.account_colors; } });
Object.defineProperty(module.exports, "old_colors_mapping_light", { enumerable: false, get: function() { return quo.design_system.colors.old_colors_mapping_light; } });
Object.defineProperty(module.exports, "green", { enumerable: false, get: function() { return quo.design_system.colors.green; } });
Object.defineProperty(module.exports, "dark_theme", { enumerable: false, get: function() { return quo.design_system.colors.dark_theme; } });
Object.defineProperty(module.exports, "mention_outgoing", { enumerable: false, get: function() { return quo.design_system.colors.mention_outgoing; } });
Object.defineProperty(module.exports, "old_colors_mapping_themes", { enumerable: false, get: function() { return quo.design_system.colors.old_colors_mapping_themes; } });
Object.defineProperty(module.exports, "blue_light", { enumerable: false, get: function() { return quo.design_system.colors.blue_light; } });
Object.defineProperty(module.exports, "dark_QMARK_", { enumerable: false, get: function() { return quo.design_system.colors.dark_QMARK_; } });
Object.defineProperty(module.exports, "white_persist", { enumerable: false, get: function() { return quo.design_system.colors.white_persist; } });
Object.defineProperty(module.exports, "color_dnd", { enumerable: false, get: function() { return quo.design_system.colors.color_dnd; } });
Object.defineProperty(module.exports, "text_gray", { enumerable: false, get: function() { return quo.design_system.colors.text_gray; } });
Object.defineProperty(module.exports, "theme", { enumerable: false, get: function() { return quo.design_system.colors.theme; } });
Object.defineProperty(module.exports, "old_colors_mapping_dark", { enumerable: false, get: function() { return quo.design_system.colors.old_colors_mapping_dark; } });
Object.defineProperty(module.exports, "white_transparent_10", { enumerable: false, get: function() { return quo.design_system.colors.white_transparent_10; } });
Object.defineProperty(module.exports, "green_transparent_10", { enumerable: false, get: function() { return quo.design_system.colors.green_transparent_10; } });
Object.defineProperty(module.exports, "mention_incoming", { enumerable: false, get: function() { return quo.design_system.colors.mention_incoming; } });
Object.defineProperty(module.exports, "red", { enumerable: false, get: function() { return quo.design_system.colors.red; } });
Object.defineProperty(module.exports, "blue", { enumerable: false, get: function() { return quo.design_system.colors.blue; } });
Object.defineProperty(module.exports, "white_transparent_70", { enumerable: false, get: function() { return quo.design_system.colors.white_transparent_70; } });
Object.defineProperty(module.exports, "black_transparent", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent; } });
Object.defineProperty(module.exports, "theme_type", { enumerable: false, get: function() { return quo.design_system.colors.theme_type; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo.design_system.colors.get_color; } });
Object.defineProperty(module.exports, "alpha", { enumerable: false, get: function() { return quo.design_system.colors.alpha; } });
Object.defineProperty(module.exports, "set_legacy_theme_type", { enumerable: false, get: function() { return quo.design_system.colors.set_legacy_theme_type; } });
Object.defineProperty(module.exports, "black_persist", { enumerable: false, get: function() { return quo.design_system.colors.black_persist; } });
Object.defineProperty(module.exports, "black_transparent_86", { enumerable: false, get: function() { return quo.design_system.colors.black_transparent_86; } });
Object.defineProperty(module.exports, "mentioned_background", { enumerable: false, get: function() { return quo.design_system.colors.mentioned_background; } });
Object.defineProperty(module.exports, "red_audio_recorder", { enumerable: false, get: function() { return quo.design_system.colors.red_audio_recorder; } });
//# sourceMappingURL=quo.design_system.colors.js.map
