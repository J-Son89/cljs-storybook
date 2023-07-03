var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
require("./react_native.platform.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.title_input.style.js");

goog.provide('quo2.components.inputs.title_input.style');
quo2.components.inputs.title_input.style.get_focused_placeholder_color = (function quo2$components$inputs$title_input$style$get_focused_placeholder_color(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_20,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_60,override_theme);
}
});
quo2.components.inputs.title_input.style.get_placeholder_color = (function quo2$components$inputs$title_input$style$get_placeholder_color(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_30,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme);
}
});
quo2.components.inputs.title_input.style.get_disabled_color = (function quo2$components$inputs$title_input$style$get_disabled_color(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_30);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme);
}
});
quo2.components.inputs.title_input.style.get_char_count_color = (function quo2$components$inputs$title_input$style$get_char_count_color(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_40);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme);
}
});
quo2.components.inputs.title_input.style.get_selection_color = (function quo2$components$inputs$title_input$style$get_selection_color(customization_color,blur_QMARK_,override_theme){
return quo2.foundations.colors.alpha.call(null,(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme):quo2.foundations.colors.custom_color(customization_color,(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),override_theme);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return quo2.foundations.colors.dark_QMARK_;
}
})())?(60):(50)))),((react_native.platform.ios_QMARK_)?(1):0.2));
});
quo2.components.inputs.title_input.style.text_input_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo2.components.inputs.title_input.style.title_text = (function quo2$components$inputs$title_input$style$title_text(disabled_QMARK_,blur_QMARK_,override_theme){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK_)?quo2.components.inputs.title_input.style.get_disabled_color.call(null,blur_QMARK_,override_theme):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme))], null);
});
quo2.components.inputs.title_input.style.char_count = (function quo2$components$inputs$title_input$style$char_count(blur_QMARK_,override_theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.inputs.title_input.style.get_char_count_color.call(null,blur_QMARK_,override_theme)], null);
});
quo2.components.inputs.title_input.style.container = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.inputs.title_input.style.counter_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(8)], null);
Object.defineProperty(module.exports, "counter_container", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.counter_container; } });
Object.defineProperty(module.exports, "get_char_count_color", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.get_char_count_color; } });
Object.defineProperty(module.exports, "get_placeholder_color", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.get_placeholder_color; } });
Object.defineProperty(module.exports, "get_selection_color", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.get_selection_color; } });
Object.defineProperty(module.exports, "text_input_container", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.text_input_container; } });
Object.defineProperty(module.exports, "get_focused_placeholder_color", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.get_focused_placeholder_color; } });
Object.defineProperty(module.exports, "title_text", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.title_text; } });
Object.defineProperty(module.exports, "char_count", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.char_count; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.container; } });
Object.defineProperty(module.exports, "get_disabled_color", { enumerable: false, get: function() { return quo2.components.inputs.title_input.style.get_disabled_color; } });
//# sourceMappingURL=quo2.components.inputs.title_input.style.js.map
