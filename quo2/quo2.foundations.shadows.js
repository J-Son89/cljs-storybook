var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.foundations.shadows.js");

goog.provide('quo2.foundations.shadows');
quo2.foundations.shadows.get_inverted = (function quo2$foundations$shadows$get_inverted(inverted_QMARK_,number){
if(cljs.core.truth_(inverted_QMARK_)){
return ((-1) * number);
} else {
return number;
}
});
quo2.foundations.shadows.get_scales = (function quo2$foundations$shadows$get_scales(inverted_QMARK_){
if(quo2.theme.dark_QMARK_.call(null)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.5),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(4))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(3),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(20)], null),new cljs.core.Keyword(null,"shadow-2","shadow-2",90509887),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.64),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(4))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(20)], null),new cljs.core.Keyword(null,"shadow-3","shadow-3",-406950500),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.64),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(12))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(8),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(20)], null),new cljs.core.Keyword(null,"shadow-4","shadow-4",-598266190),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.72),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(16))], null),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(20),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(15)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shadow-1","shadow-1",-1417857329),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.04),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(4))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(1),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16)], null),new cljs.core.Keyword(null,"shadow-2","shadow-2",90509887),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.08),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(4))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16)], null),new cljs.core.Keyword(null,"shadow-3","shadow-3",-406950500),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.12),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(12))], null),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(5),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16)], null),new cljs.core.Keyword(null,"shadow-4","shadow-4",-598266190),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.16),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),quo2.foundations.shadows.get_inverted.call(null,inverted_QMARK_,(16))], null),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(13)], null)], null);
}
});
quo2.foundations.shadows.normal_scale = quo2.foundations.shadows.get_scales.call(null,false);
quo2.foundations.shadows.inverted_scale = quo2.foundations.shadows.get_scales.call(null,true);
quo2.foundations.shadows.inner_shadow = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054),quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.neutral_100,0.08),new cljs.core.Keyword(null,"shadow-offset","shadow-offset",1863207233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null),new cljs.core.Keyword(null,"shadow-opacity","shadow-opacity",1343080080),(1),new cljs.core.Keyword(null,"shadow-radius","shadow-radius",-2003216400),(16),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(13)], null);
Object.defineProperty(module.exports, "get_inverted", { enumerable: false, get: function() { return quo2.foundations.shadows.get_inverted; } });
Object.defineProperty(module.exports, "get_scales", { enumerable: false, get: function() { return quo2.foundations.shadows.get_scales; } });
Object.defineProperty(module.exports, "normal_scale", { enumerable: false, get: function() { return quo2.foundations.shadows.normal_scale; } });
Object.defineProperty(module.exports, "inverted_scale", { enumerable: false, get: function() { return quo2.foundations.shadows.inverted_scale; } });
Object.defineProperty(module.exports, "inner_shadow", { enumerable: false, get: function() { return quo2.foundations.shadows.inner_shadow; } });
//# sourceMappingURL=quo2.foundations.shadows.js.map
