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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.context_tag.style.js");

goog.provide('quo2.components.tags.context_tag.style');
quo2.components.tags.context_tag.style.base_tag = (function quo2$components$tags$context_tag$style$base_tag(override_theme,blur_QMARK_){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(100),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(3),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_5,quo2.foundations.colors.white_opa_5,override_theme):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_10,quo2.foundations.colors.neutral_90,override_theme))], null);
});
quo2.components.tags.context_tag.style.context_tag_icon_color = (function quo2$components$tags$context_tag$style$context_tag_icon_color(blur_QMARK_){
if(cljs.core.truth_(blur_QMARK_)){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_40);
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40);
}
});
quo2.components.tags.context_tag.style.context_tag_text_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
quo2.components.tags.context_tag.style.audio_tag_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(2),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(2)], null);
quo2.components.tags.context_tag.style.audio_tag_icon_container = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.primary_50], null);
quo2.components.tags.context_tag.style.audio_tag_icon_color = quo2.foundations.colors.white;
quo2.components.tags.context_tag.style.audio_tag_text_color = (function quo2$components$tags$context_tag$style$audio_tag_text_color(override_theme){
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme);
});
quo2.components.tags.context_tag.style.community_tag = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(2)], null);
quo2.components.tags.context_tag.style.community_tag_text = (function quo2$components$tags$context_tag$style$community_tag_text(override_theme){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(2),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);
});
Object.defineProperty(module.exports, "audio_tag_icon_color", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.audio_tag_icon_color; } });
Object.defineProperty(module.exports, "audio_tag_text_color", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.audio_tag_text_color; } });
Object.defineProperty(module.exports, "community_tag_text", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.community_tag_text; } });
Object.defineProperty(module.exports, "base_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.base_tag; } });
Object.defineProperty(module.exports, "audio_tag_icon_container", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.audio_tag_icon_container; } });
Object.defineProperty(module.exports, "context_tag_text_container", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.context_tag_text_container; } });
Object.defineProperty(module.exports, "context_tag_icon_color", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.context_tag_icon_color; } });
Object.defineProperty(module.exports, "audio_tag_container", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.audio_tag_container; } });
Object.defineProperty(module.exports, "community_tag", { enumerable: false, get: function() { return quo2.components.tags.context_tag.style.community_tag; } });
//# sourceMappingURL=quo2.components.tags.context_tag.style.js.map
