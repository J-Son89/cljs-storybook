var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.animated.js");
require("./quo.design_system.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.controls.styles.js");

goog.provide('quo.components.controls.styles');
quo.components.controls.styles.switch_style = (function quo$components$controls$styles$switch_style(state,disabled){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(52),new cljs.core.Keyword(null,"height","height",1025178622),(28),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(14),new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo.animated.mix_color.call(null,state,new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),(cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)):new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))))], null);
});
quo.components.controls.styles.switch_bullet_style = (function quo$components$controls$styles$switch_bullet_style(state,hold){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translateX","translateX",319703152),quo.animated.mix.call(null,state,(0),(24))], null)], null),quo.design_system.colors.white_persist,(20),(1),(16),quo.animated.mix.call(null,hold,(1),0.6),(10),(20)]);
});
quo.components.controls.styles.radio_style = (function quo$components$controls$styles$radio_style(state,disabled){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo.animated.mix_color.call(null,state,new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),(cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)):new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))))], null);
});
quo.components.controls.styles.radio_bullet_style = (function quo$components$controls$styles$radio_bullet_style(state,hold){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(4)], null),new cljs.core.Keyword(null,"shadow-01","shadow-01",925639454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),(4),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,state,1.0E-4,(1))], null)], null),quo.design_system.colors.white_persist,(12),(1),(16),quo.animated.mix.call(null,hold,(1),0.6),(6),(12)]);
});
quo.components.controls.styles.animated_checkbox_style = (function quo$components$controls$styles$animated_checkbox_style(state,disabled){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(18),new cljs.core.Keyword(null,"height","height",1025178622),(18),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo.animated.mix_color.call(null,state,new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),(cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)):new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))))], null);
});
quo.components.controls.styles.checkbox_style = (function quo$components$controls$styles$checkbox_style(value,disabled){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(18),new cljs.core.Keyword(null,"height","height",1025178622),(18),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(value)?(cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"interactive-04","interactive-04",-1619856772).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)):new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))):new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)))], null);
});
quo.components.controls.styles.animated_check_icon_style = (function quo$components$controls$styles$animated_check_icon_style(state,hold){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),quo.animated.mix.call(null,hold,(1),0.6),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),quo.animated.mix.call(null,state,1.0E-4,(1))], null)], null)], null);
});
quo.components.controls.styles.check_icon_style = (function quo$components$controls$styles$check_icon_style(value){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(value)?(1):(0))], null);
});
Object.defineProperty(module.exports, "switch_style", { enumerable: false, get: function() { return quo.components.controls.styles.switch_style; } });
Object.defineProperty(module.exports, "switch_bullet_style", { enumerable: false, get: function() { return quo.components.controls.styles.switch_bullet_style; } });
Object.defineProperty(module.exports, "radio_style", { enumerable: false, get: function() { return quo.components.controls.styles.radio_style; } });
Object.defineProperty(module.exports, "radio_bullet_style", { enumerable: false, get: function() { return quo.components.controls.styles.radio_bullet_style; } });
Object.defineProperty(module.exports, "animated_checkbox_style", { enumerable: false, get: function() { return quo.components.controls.styles.animated_checkbox_style; } });
Object.defineProperty(module.exports, "checkbox_style", { enumerable: false, get: function() { return quo.components.controls.styles.checkbox_style; } });
Object.defineProperty(module.exports, "animated_check_icon_style", { enumerable: false, get: function() { return quo.components.controls.styles.animated_check_icon_style; } });
Object.defineProperty(module.exports, "check_icon_style", { enumerable: false, get: function() { return quo.components.controls.styles.check_icon_style; } });
//# sourceMappingURL=quo.components.controls.styles.js.map
