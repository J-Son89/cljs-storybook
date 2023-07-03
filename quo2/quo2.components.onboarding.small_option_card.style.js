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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.onboarding.small_option_card.style.js");

goog.provide('quo2.components.onboarding.small_option_card.style');
quo2.components.onboarding.small_option_card.style.main_variant_height = (335);
quo2.components.onboarding.small_option_card.style.icon_variant_height = (56);
quo2.components.onboarding.small_option_card.style.text_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo2.components.onboarding.small_option_card.style.title = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white,new cljs.core.Keyword(null,"height","height",1025178622),(22)], null);
quo2.components.onboarding.small_option_card.style.subtitle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"height","height",1025178622),(18)], null);
quo2.components.onboarding.small_option_card.style.icon_variant = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(8),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12)], null);
quo2.components.onboarding.small_option_card.style.icon_variant_image_container = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(4),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.onboarding.small_option_card.style.icon_variant_image = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(32)], null);
quo2.components.onboarding.small_option_card.style.main_variant = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(-8)], null);
quo2.components.onboarding.small_option_card.style.main_variant_text_container = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(62),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(12),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12)], null);
quo2.components.onboarding.small_option_card.style.touchable_overlay = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16)], null);
quo2.components.onboarding.small_option_card.style.card = (function quo2$components$onboarding$small_option_card$style$card(height){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});
quo2.components.onboarding.small_option_card.style.main_variant_extra_space = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(8)], null);
Object.defineProperty(module.exports, "main_variant_height", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.main_variant_height; } });
Object.defineProperty(module.exports, "icon_variant", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.icon_variant; } });
Object.defineProperty(module.exports, "main_variant_text_container", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.main_variant_text_container; } });
Object.defineProperty(module.exports, "icon_variant_height", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.icon_variant_height; } });
Object.defineProperty(module.exports, "icon_variant_image_container", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.icon_variant_image_container; } });
Object.defineProperty(module.exports, "icon_variant_image", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.icon_variant_image; } });
Object.defineProperty(module.exports, "main_variant", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.main_variant; } });
Object.defineProperty(module.exports, "title", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.title; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.card; } });
Object.defineProperty(module.exports, "main_variant_extra_space", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.main_variant_extra_space; } });
Object.defineProperty(module.exports, "subtitle", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.subtitle; } });
Object.defineProperty(module.exports, "touchable_overlay", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.touchable_overlay; } });
Object.defineProperty(module.exports, "text_container", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.style.text_container; } });
//# sourceMappingURL=quo2.components.onboarding.small_option_card.style.js.map
