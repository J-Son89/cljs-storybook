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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.settings.reorder_item.style.js");

goog.provide('quo2.components.settings.reorder_item.style');
quo2.components.settings.reorder_item.style.item_container = (function quo2$components$settings$reorder_item$style$item_container(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(10),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(14),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(23),new cljs.core.Keyword(null,"height","height",1025178622),(45),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90)], null);
});
quo2.components.settings.reorder_item.style.item_container_extended = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(52)], null);
quo2.components.settings.reorder_item.style.body_container = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(12),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(-6)], null);
quo2.components.settings.reorder_item.style.image_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.settings.reorder_item.style.image = (function quo2$components$settings$reorder_item$style$image(size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null);
});
quo2.components.settings.reorder_item.style.item_text = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null);
quo2.components.settings.reorder_item.style.chevron = (function quo2$components$settings$reorder_item$style$chevron(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40),new cljs.core.Keyword(null,"height","height",1025178622),(14),new cljs.core.Keyword(null,"width","width",-384071477),(14)], null);
});
quo2.components.settings.reorder_item.style.item_subtitle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null);
quo2.components.settings.reorder_item.style.right_text = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_40], null);
quo2.components.settings.reorder_item.style.text_container = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.settings.reorder_item.style.right_icon = (function quo2$components$settings$reorder_item$style$right_icon(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_40)], null);
});
quo2.components.settings.reorder_item.style.right_icon_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.settings.reorder_item.style.placeholder_container = (function quo2$components$settings$reorder_item$style$placeholder_container(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],[new cljs.core.Keyword(null,"dashed","dashed",-1449249319),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),(1),(12),new cljs.core.Keyword(null,"center","center",-748944368),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_80),(16),(24)]);
});
quo2.components.settings.reorder_item.style.placeholder_text = (function quo2$components$settings$reorder_item$style$placeholder_text(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null);
});
quo2.components.settings.reorder_item.style.skeleton_container = (function quo2$components$settings$reorder_item$style$skeleton_container(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_95),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(16),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(24),new cljs.core.Keyword(null,"height","height",1025178622),(48)], null);
});
quo2.components.settings.reorder_item.style.tab_container = (function quo2$components$settings$reorder_item$style$tab_container(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_95),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(4),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(6),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(24)], null);
});
quo2.components.settings.reorder_item.style.segmented_tab_item_container = (function quo2$components$settings$reorder_item$style$segmented_tab_item_container(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"dashed","dashed",-1449249319),new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_60)], null);
});
quo2.components.settings.reorder_item.style.active_segmented_tab_item_container = (function quo2$components$settings$reorder_item$style$active_segmented_tab_item_container(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_90)], null);
});
quo2.components.settings.reorder_item.style.tab_item_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.settings.reorder_item.style.tab_item_image = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(19),new cljs.core.Keyword(null,"width","width",-384071477),(19),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(3)], null);
quo2.components.settings.reorder_item.style.tab_item_label = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null);
quo2.components.settings.reorder_item.style.tab_icon = (function quo2$components$settings$reorder_item$style$tab_icon(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_40)], null);
});
Object.defineProperty(module.exports, "image_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.image_container; } });
Object.defineProperty(module.exports, "tab_item_label", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.tab_item_label; } });
Object.defineProperty(module.exports, "item_text", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.item_text; } });
Object.defineProperty(module.exports, "right_icon_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.right_icon_container; } });
Object.defineProperty(module.exports, "tab_item_image", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.tab_item_image; } });
Object.defineProperty(module.exports, "right_text", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.right_text; } });
Object.defineProperty(module.exports, "tab_icon", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.tab_icon; } });
Object.defineProperty(module.exports, "tab_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.tab_container; } });
Object.defineProperty(module.exports, "item_subtitle", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.item_subtitle; } });
Object.defineProperty(module.exports, "skeleton_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.skeleton_container; } });
Object.defineProperty(module.exports, "body_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.body_container; } });
Object.defineProperty(module.exports, "item_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.item_container; } });
Object.defineProperty(module.exports, "tab_item_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.tab_item_container; } });
Object.defineProperty(module.exports, "item_container_extended", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.item_container_extended; } });
Object.defineProperty(module.exports, "segmented_tab_item_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.segmented_tab_item_container; } });
Object.defineProperty(module.exports, "active_segmented_tab_item_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.active_segmented_tab_item_container; } });
Object.defineProperty(module.exports, "placeholder_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.placeholder_container; } });
Object.defineProperty(module.exports, "right_icon", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.right_icon; } });
Object.defineProperty(module.exports, "text_container", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.text_container; } });
Object.defineProperty(module.exports, "chevron", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.chevron; } });
Object.defineProperty(module.exports, "image", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.image; } });
Object.defineProperty(module.exports, "placeholder_text", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.style.placeholder_text; } });
//# sourceMappingURL=quo2.components.settings.reorder_item.style.js.map
