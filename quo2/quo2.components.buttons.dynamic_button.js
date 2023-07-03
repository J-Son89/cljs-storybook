var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.dynamic_button.js");

goog.provide('quo2.components.buttons.dynamic_button');
quo2.components.buttons.dynamic_button.get_button_color = (function quo2$components$buttons$dynamic_button$get_button_color(type,pressed_QMARK_,customization_color){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jump-to","jump-to",2078255234),null,new cljs.core.Keyword(null,"mention","mention",-1057367181),null], null), null).call(null,type))){
if(cljs.core.truth_(pressed_QMARK_)){
return quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(60),(50));
} else {
return quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60));
}
} else {
if(cljs.core.truth_(pressed_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_80,quo2.foundations.colors.white_opa_80);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_70,quo2.foundations.colors.white_opa_70);
}
}
});
quo2.components.buttons.dynamic_button.get_icon_and_text_color = (function quo2$components$buttons$dynamic_button$get_icon_and_text_color(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jump-to","jump-to",2078255234),null,new cljs.core.Keyword(null,"mention","mention",-1057367181),null], null), null).call(null,type))){
return quo2.foundations.colors.white;
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100);
}
});
quo2.components.buttons.dynamic_button.icon_view = (function quo2$components$buttons$dynamic_button$icon_view(type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,(function (){var G__16652 = type;
var G__16652__$1 = (((G__16652 instanceof cljs.core.Keyword))?G__16652.fqn:null);
switch (G__16652__$1) {
case "jump-to":
return new cljs.core.Keyword("i","jump-to","i/jump-to",2078255211);

break;
case "mention":
return new cljs.core.Keyword("i","mention","i/mention",-1057367590);

break;
case "notification-down":
return new cljs.core.Keyword("i","arrow-down","i/arrow-down",141510256);

break;
case "notification-up":
return new cljs.core.Keyword("i","arrow-up","i/arrow-up",-1363214578);

break;
case "search-with-label":
return new cljs.core.Keyword("i","search","i/search",1564940667);

break;
case "search":
return new cljs.core.Keyword("i","search","i/search",1564940667);

break;
case "scroll-to-bottom":
return new cljs.core.Keyword("i","arrow-down","i/arrow-down",141510256);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16652__$1)].join('')));

}
})(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(12),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.buttons.dynamic_button.get_icon_and_text_color.call(null,type),new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(6),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(6),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(function (){var G__16654 = type;
var G__16654__$1 = (((G__16654 instanceof cljs.core.Keyword))?G__16654.fqn:null);
switch (G__16654__$1) {
case "jump-to":
return (0);

break;
case "mention":
return (8);

break;
case "notification-down":
return (2);

break;
case "notification-up":
return (2);

break;
case "search-with-label":
return (8);

break;
case "search":
return (6);

break;
case "scroll-to-bottom":
return (6);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16654__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(function (){var G__16655 = type;
var G__16655__$1 = (((G__16655 instanceof cljs.core.Keyword))?G__16655.fqn:null);
switch (G__16655__$1) {
case "jump-to":
return (8);

break;
case "mention":
return (2);

break;
case "notification-down":
return (8);

break;
case "notification-up":
return (8);

break;
case "search-with-label":
return (4);

break;
case "search":
return (6);

break;
case "scroll-to-bottom":
return (6);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16655__$1)].join('')));

}
})()], null)], null)], null);
});
/**
 * [dynamic-button opts]
 * opts
 * {:type                :jump-to/:mention/:notification-down/:notification-up/:search/:search-with-label/:scroll-to-bottom
 *  :on-press            fn
 *  :count               mentions or notifications count
 *  :customization-color customize jump-to and mention button color}
 */
quo2.components.buttons.dynamic_button.dynamic_button = (function quo2$components$buttons$dynamic_button$dynamic_button(_){
var pressed_QMARK_ = reagent.core.atom.call(null,false);
return (function (p__16659){
var map__16660 = p__16659;
var map__16660__$1 = (((((!((map__16660 == null))))?(((((map__16660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16660):map__16660);
var type = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var label = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_press = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var count = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var customization_color = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
var style = cljs.core.get.call(null,map__16660__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-press-in","on-press-in",-1371923889),(function (){
return cljs.core.reset_BANG_.call(null,pressed_QMARK_,true);
}),new cljs.core.Keyword(null,"on-press-out","on-press-out",1645381459),(function (){
return cljs.core.reset_BANG_.call(null,pressed_QMARK_,false);
}),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"active-opacity","active-opacity",-726267404),(1),new cljs.core.Keyword(null,"hit-slop","hit-slop",-1010555951),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(5),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(5),new cljs.core.Keyword(null,"left","left",-399115937),(5),new cljs.core.Keyword(null,"right","right",-452581833),(5)], null),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),type], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.buttons.dynamic_button.get_button_color.call(null,type,cljs.core.deref.call(null,pressed_QMARK_),(function (){var or__4126__auto__ = customization_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"primary","primary",817773892);
}
})())], null),style)], null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-with-label","search-with-label",-2086753939),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"mention","mention",-1057367181),null,new cljs.core.Keyword(null,"scroll-to-bottom","scroll-to-bottom",887338044),null], null), null).call(null,type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.dynamic_button.icon_view,type], null):null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"jump-to","jump-to",2078255234),null,new cljs.core.Keyword(null,"notification-down","notification-down",1761321672),null,new cljs.core.Keyword(null,"notification-up","notification-up",-1652263895),null,new cljs.core.Keyword(null,"search-with-label","search-with-label",-2086753939),null,new cljs.core.Keyword(null,"mention","mention",-1057367181),null], null), null).call(null,type))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.buttons.dynamic_button.get_icon_and_text_color.call(null,type),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),2.5,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),3.5,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(function (){var G__16665 = type;
var G__16665__$1 = (((G__16665 instanceof cljs.core.Keyword))?G__16665.fqn:null);
switch (G__16665__$1) {
case "jump-to":
return (8);

break;
case "mention":
return (0);

break;
case "notification-down":
return (8);

break;
case "notification-up":
return (8);

break;
case "search-with-label":
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16665__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(function (){var G__16667 = type;
var G__16667__$1 = (((G__16667 instanceof cljs.core.Keyword))?G__16667.fqn:null);
switch (G__16667__$1) {
case "jump-to":
return (0);

break;
case "mention":
return (8);

break;
case "notification-down":
return (0);

break;
case "notification-up":
return (0);

break;
case "search-with-label":
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16667__$1)].join('')));

}
})()], null)], null),(function (){var G__16668 = type;
var G__16668__$1 = (((G__16668 instanceof cljs.core.Keyword))?G__16668.fqn:null);
switch (G__16668__$1) {
case "jump-to":
return label;

break;
case "search-with-label":
return label;

break;
case "mention":
case "notification-down":
case "notification-up":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(count);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16668__$1)].join('')));

}
})()], null):null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"jump-to","jump-to",2078255234),null,new cljs.core.Keyword(null,"notification-down","notification-down",1761321672),null,new cljs.core.Keyword(null,"notification-up","notification-up",-1652263895),null], null), null).call(null,type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.dynamic_button.icon_view,type], null):null)], null)], null);
});
});
Object.defineProperty(module.exports, "get_button_color", { enumerable: false, get: function() { return quo2.components.buttons.dynamic_button.get_button_color; } });
Object.defineProperty(module.exports, "get_icon_and_text_color", { enumerable: false, get: function() { return quo2.components.buttons.dynamic_button.get_icon_and_text_color; } });
Object.defineProperty(module.exports, "icon_view", { enumerable: false, get: function() { return quo2.components.buttons.dynamic_button.icon_view; } });
Object.defineProperty(module.exports, "dynamic_button", { enumerable: false, get: function() { return quo2.components.buttons.dynamic_button.dynamic_button; } });
//# sourceMappingURL=quo2.components.buttons.dynamic_button.js.map
