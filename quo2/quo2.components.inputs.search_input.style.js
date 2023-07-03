var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.search_input.style.js");

goog.provide('quo2.components.inputs.search_input.style');
quo2.components.inputs.search_input.style.placeholder_color = (function quo2$components$inputs$search_input$style$placeholder_color(state,blur_QMARK_,override_theme){
if(cljs.core.truth_((function (){var and__4115__auto__ = blur_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"active","active",1895962068));
} else {
return and__4115__auto__;
}
})())){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_20,override_theme);
} else {
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_30,override_theme);
} else {
if(cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"active","active",1895962068))){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_60,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme);

}
}
}
});
quo2.components.inputs.search_input.style.clear_icon_container = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(8),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20)], null);
quo2.components.inputs.search_input.style.clear_icon = (function quo2$components$inputs$search_input$style$clear_icon(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_30,quo2.foundations.colors.white_opa_10,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_60,override_theme);
}
});
quo2.components.inputs.search_input.style.cursor = (function quo2$components$inputs$search_input$style$cursor(customization_color,override_theme){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(customization_color,(50)),quo2.foundations.colors.custom_color(customization_color,(60)),override_theme);
});
quo2.components.inputs.search_input.style.tag_separator = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(8)], null);
quo2.components.inputs.search_input.style.tag_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.inputs.search_input.style.container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.inputs.search_input.style.scroll_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"height","height",1025178622),(32)], null);
quo2.components.inputs.search_input.style.scroll_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null);
quo2.components.inputs.search_input.style.input_text = (function quo2$components$inputs$search_input$style$input_text(disabled_QMARK_){
return cljs.core.assoc.call(null,quo2.components.markdown.text.text_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582)], null)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(5),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(120),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"min-height","min-height",398480837),(32));
});
Object.defineProperty(module.exports, "tag_container", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.tag_container; } });
Object.defineProperty(module.exports, "scroll_content", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.scroll_content; } });
Object.defineProperty(module.exports, "placeholder_color", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.placeholder_color; } });
Object.defineProperty(module.exports, "input_text", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.input_text; } });
Object.defineProperty(module.exports, "scroll_container", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.scroll_container; } });
Object.defineProperty(module.exports, "tag_separator", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.tag_separator; } });
Object.defineProperty(module.exports, "cursor", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.cursor; } });
Object.defineProperty(module.exports, "clear_icon", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.clear_icon; } });
Object.defineProperty(module.exports, "clear_icon_container", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.clear_icon_container; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.inputs.search_input.style.container; } });
//# sourceMappingURL=quo2.components.inputs.search_input.style.js.map
