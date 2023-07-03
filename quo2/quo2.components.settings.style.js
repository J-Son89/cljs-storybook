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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.settings.style.js");

goog.provide('quo2.components.settings.style');
quo2.components.settings.style.bullet_container = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null);
quo2.components.settings.style.bullet = (function quo2$components$settings$style$bullet(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(100),new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(6),new cljs.core.Keyword(null,"top","top",-1856271961),(6)], null);
});
quo2.components.settings.style.list_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(12)], null);
quo2.components.settings.style.list_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(6),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12)], null);
quo2.components.settings.style.selection_indicator_container = (function quo2$components$settings$style$selection_indicator_container(active_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(active_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.primary_50,quo2.foundations.colors.primary_60):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80))], null);
});
quo2.components.settings.style.selection_indicator = (function quo2$components$settings$style$selection_indicator(active_QMARK_){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),(14),new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(active_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.primary_50,quo2.foundations.colors.primary_60):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white_opa_40,quo2.foundations.colors.neutral_80_opa_40)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"auto","auto",-566279492)], null);
});
quo2.components.settings.style.card_footer_label_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),0.9,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(16)], null);
quo2.components.settings.style.card_footer_toggle_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),0.1,new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(12),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.settings.style.card_footer = (function quo2$components$settings$style$card_footer(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607)],[(12),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_90),(8),(1),(1),new cljs.core.Keyword(null,"space-between","space-between",1908176695),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_10,quo2.foundations.colors.neutral_80),(12),(12),new cljs.core.Keyword(null,"row","row",-570139521),(12)]);
});
quo2.components.settings.style.card_header_container = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(12),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(8),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(12)], null);
quo2.components.settings.style.card_header_label_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4)], null);
quo2.components.settings.style.privacy_option_card = (function quo2$components$settings$style$privacy_option_card(active_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(active_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.primary_50,quo2.foundations.colors.primary_60):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_10,quo2.foundations.colors.neutral_80))], null);
});
Object.defineProperty(module.exports, "card_header_container", { enumerable: false, get: function() { return quo2.components.settings.style.card_header_container; } });
Object.defineProperty(module.exports, "card_footer_label_container", { enumerable: false, get: function() { return quo2.components.settings.style.card_footer_label_container; } });
Object.defineProperty(module.exports, "selection_indicator", { enumerable: false, get: function() { return quo2.components.settings.style.selection_indicator; } });
Object.defineProperty(module.exports, "bullet_container", { enumerable: false, get: function() { return quo2.components.settings.style.bullet_container; } });
Object.defineProperty(module.exports, "selection_indicator_container", { enumerable: false, get: function() { return quo2.components.settings.style.selection_indicator_container; } });
Object.defineProperty(module.exports, "card_footer", { enumerable: false, get: function() { return quo2.components.settings.style.card_footer; } });
Object.defineProperty(module.exports, "card_footer_toggle_container", { enumerable: false, get: function() { return quo2.components.settings.style.card_footer_toggle_container; } });
Object.defineProperty(module.exports, "bullet", { enumerable: false, get: function() { return quo2.components.settings.style.bullet; } });
Object.defineProperty(module.exports, "card_header_label_container", { enumerable: false, get: function() { return quo2.components.settings.style.card_header_label_container; } });
Object.defineProperty(module.exports, "list_item", { enumerable: false, get: function() { return quo2.components.settings.style.list_item; } });
Object.defineProperty(module.exports, "privacy_option_card", { enumerable: false, get: function() { return quo2.components.settings.style.privacy_option_card; } });
Object.defineProperty(module.exports, "list_container", { enumerable: false, get: function() { return quo2.components.settings.style.list_container; } });
//# sourceMappingURL=quo2.components.settings.style.js.map
