var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.selectors.filter.style.js");

goog.provide('quo2.components.selectors.filter.style');
quo2.components.selectors.filter.style.container_default = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(32),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),(6)], null);
quo2.components.selectors.filter.style.container_border_color = (function quo2$components$selectors$filter$style$container_border_color(pressed_QMARK_,blur_QMARK_,override_theme){
var dark_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme);
if(((cljs.core.not(pressed_QMARK_)) && ((!(dark_QMARK_))) && (cljs.core.not(blur_QMARK_)))){
return quo2.foundations.colors.neutral_20;
} else {
if(((cljs.core.not(pressed_QMARK_)) && (dark_QMARK_) && (cljs.core.not(blur_QMARK_)))){
return quo2.foundations.colors.neutral_80;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = pressed_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if((!(dark_QMARK_))){
return blur_QMARK_;
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return quo2.foundations.colors.neutral_80_opa_20;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = pressed_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(dark_QMARK_))) && (cljs.core.not(blur_QMARK_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.not(pressed_QMARK_)){
if((!(dark_QMARK_))){
return blur_QMARK_;
} else {
return false;
}
} else {
return false;
}
}
})())){
return quo2.foundations.colors.neutral_80_opa_10;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = pressed_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((dark_QMARK_) && (cljs.core.not(blur_QMARK_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core.not(pressed_QMARK_))?((dark_QMARK_)?blur_QMARK_:false):false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = pressed_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(dark_QMARK_){
return blur_QMARK_;
} else {
return false;
}
} else {
return and__4115__auto__;
}
}
}
})())){
return quo2.foundations.colors.white_opa_10;
} else {
return null;

}
}
}
}
}
});
quo2.components.selectors.filter.style.container_background_color = (function quo2$components$selectors$filter$style$container_background_color(pressed_QMARK_,override_theme){
if(cljs.core.truth_(pressed_QMARK_)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme)){
return quo2.foundations.colors.primary_60;
} else {
return quo2.foundations.colors.primary_50;
}
} else {
return null;
}
});
quo2.components.selectors.filter.style.container_outer = (function quo2$components$selectors$filter$style$container_outer(pressed_QMARK_,override_theme){
return cljs.core.merge.call(null,quo2.components.selectors.filter.style.container_default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.selectors.filter.style.container_background_color.call(null,pressed_QMARK_,override_theme)], null));
});
quo2.components.selectors.filter.style.container_inner = (function quo2$components$selectors$filter$style$container_inner(pressed_QMARK_,blur_QMARK_,override_theme){
return cljs.core.merge.call(null,quo2.components.selectors.filter.style.container_default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.selectors.filter.style.container_border_color.call(null,pressed_QMARK_,blur_QMARK_,override_theme)], null));
});
quo2.components.selectors.filter.style.icon_color = (function quo2$components$selectors$filter$style$icon_color(pressed_QMARK_,override_theme){
if(((cljs.core.not(pressed_QMARK_)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"light","light",1918998747),override_theme)))){
return quo2.foundations.colors.neutral_100;
} else {
return quo2.foundations.colors.white;
}
});
Object.defineProperty(module.exports, "container_default", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.container_default; } });
Object.defineProperty(module.exports, "container_border_color", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.container_border_color; } });
Object.defineProperty(module.exports, "container_background_color", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.container_background_color; } });
Object.defineProperty(module.exports, "container_outer", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.container_outer; } });
Object.defineProperty(module.exports, "container_inner", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.container_inner; } });
Object.defineProperty(module.exports, "icon_color", { enumerable: false, get: function() { return quo2.components.selectors.filter.style.icon_color; } });
//# sourceMappingURL=quo2.components.selectors.filter.style.js.map
