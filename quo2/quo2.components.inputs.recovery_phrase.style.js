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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.recovery_phrase.style.js");

goog.provide('quo2.components.inputs.recovery_phrase.style');
quo2.components.inputs.recovery_phrase.style.container = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(40),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(4),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20)], null);
quo2.components.inputs.recovery_phrase.style.input = (function quo2$components$inputs$recovery_phrase$style$input(){
return cljs.core.assoc.call(null,quo2.components.markdown.text.text_style.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"height","height",1025178622),(32),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(5),new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"top","top",-1856271961));
});
quo2.components.inputs.recovery_phrase.style.placeholder_color = (function quo2$components$inputs$recovery_phrase$style$placeholder_color(input_state,override_theme,blur_QMARK_){
if(cljs.core.truth_(((cljs.core._EQ_.call(null,input_state,new cljs.core.Keyword(null,"focused","focused",1851572115)))?blur_QMARK_:false))){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_20,override_theme);
} else {
if(cljs.core._EQ_.call(null,input_state,new cljs.core.Keyword(null,"focused","focused",1851572115))){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_60,override_theme);
} else {
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_30,override_theme);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme);

}
}
}
});
quo2.components.inputs.recovery_phrase.style.cursor_color = (function quo2$components$inputs$recovery_phrase$style$cursor_color(customization_color,override_theme){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(customization_color,(50)),quo2.foundations.colors.custom_color(customization_color,(60)),override_theme);
});
quo2.components.inputs.recovery_phrase.style.error_word = (function quo2$components$inputs$recovery_phrase$style$error_word(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(22),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.danger_50_opa_10,new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_50,quo2.foundations.colors.danger_60)], null);
});
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.style.container; } });
Object.defineProperty(module.exports, "input", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.style.input; } });
Object.defineProperty(module.exports, "placeholder_color", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.style.placeholder_color; } });
Object.defineProperty(module.exports, "cursor_color", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.style.cursor_color; } });
Object.defineProperty(module.exports, "error_word", { enumerable: false, get: function() { return quo2.components.inputs.recovery_phrase.style.error_word; } });
//# sourceMappingURL=quo2.components.inputs.recovery_phrase.style.js.map
