var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
require("./quo2.foundations.shadows.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.notifications.toast.style.js");

goog.provide('quo2.components.notifications.toast.style');
quo2.components.notifications.toast.style.box_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(12),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null);
quo2.components.notifications.toast.style.blur_container = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null);
quo2.components.notifications.toast.style.content_container = (function quo2$components$notifications$toast$style$content_container(override_theme){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329).cljs$core$IFn$_invoke$arity$1(quo2.foundations.shadows.normal_scale),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_70,quo2.foundations.colors.white_opa_70,override_theme),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12)], null));
});
quo2.components.notifications.toast.style.title = (function quo2$components$notifications$toast$style$title(override_theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100,override_theme)], null);
});
quo2.components.notifications.toast.style.text = (function quo2$components$notifications$toast$style$text(override_theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100,override_theme)], null);
});
quo2.components.notifications.toast.style.icon = (function quo2$components$notifications$toast$style$icon(override_theme){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100,override_theme),new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null);
});
quo2.components.notifications.toast.style.left_side_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(2)], null);
quo2.components.notifications.toast.style.right_side_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo2.components.notifications.toast.style.action_container = (function quo2$components$notifications$toast$style$action_container(override_theme){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white_opa_5,quo2.foundations.colors.neutral_80_opa_5,override_theme),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(3),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(8),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8)], null);
});
Object.defineProperty(module.exports, "left_side_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.left_side_container; } });
Object.defineProperty(module.exports, "action_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.action_container; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.text; } });
Object.defineProperty(module.exports, "box_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.box_container; } });
Object.defineProperty(module.exports, "content_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.content_container; } });
Object.defineProperty(module.exports, "right_side_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.right_side_container; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.icon; } });
Object.defineProperty(module.exports, "title", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.title; } });
Object.defineProperty(module.exports, "blur_container", { enumerable: false, get: function() { return quo2.components.notifications.toast.style.blur_container; } });
//# sourceMappingURL=quo2.components.notifications.toast.style.js.map
