var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.buttons.slide_button.constants.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.slide_button.utils.js");

goog.provide('quo2.components.buttons.slide_button.utils');
/**
 * - `color-key`               `:main`/`:track`
 * - `customization-color` Customization color
 */
quo2.components.buttons.slide_button.utils.slider_color = (function quo2$components$buttons$slide_button$utils$slider_color(color_key,customization_color){
var colors_by_key = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60)),new cljs.core.Keyword(null,"track","track",195787487),quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60),(10),(10))], null);
return color_key.call(null,colors_by_key);
});
quo2.components.buttons.slide_button.utils.clamp_value = (function quo2$components$buttons$slide_button$utils$clamp_value(value,min_value,max_value){
if((value < min_value)){
return min_value;
} else {
if((value > max_value)){
return max_value;
} else {
return value;

}
}
});
/**
 * Calculate the track section in which the
 *   thumb can move in. Mostly used for interpolations.
 */
quo2.components.buttons.slide_button.utils.calc_usable_track = (function quo2$components$buttons$slide_button$utils$calc_usable_track(track_width,thumb_size){
var double_padding = (quo2.components.buttons.slide_button.constants.track_padding * (2));
return ((track_width - double_padding) - thumb_size);
});
quo2.components.buttons.slide_button.utils.get_dimensions = (function quo2$components$buttons$slide_button$utils$get_dimensions(track_width,size,dimension_key){
var default_dimensions = (function (){var G__16686 = size;
var G__16686__$1 = (((G__16686 instanceof cljs.core.Keyword))?G__16686.fqn:null);
switch (G__16686__$1) {
case "small":
return quo2.components.buttons.slide_button.constants.small_dimensions;

break;
case "large":
return quo2.components.buttons.slide_button.constants.large_dimensions;

break;
default:
return quo2.components.buttons.slide_button.constants.large_dimensions;

}
})();
return cljs.core.get.call(null,cljs.core.merge.call(null,default_dimensions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usable-track","usable-track",1619106138),quo2.components.buttons.slide_button.utils.calc_usable_track.call(null,track_width,new cljs.core.Keyword(null,"thumb","thumb",1718947232).cljs$core$IFn$_invoke$arity$1(default_dimensions))], null)),dimension_key);
});
Object.defineProperty(module.exports, "slider_color", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.utils.slider_color; } });
Object.defineProperty(module.exports, "clamp_value", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.utils.clamp_value; } });
Object.defineProperty(module.exports, "calc_usable_track", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.utils.calc_usable_track; } });
Object.defineProperty(module.exports, "get_dimensions", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.utils.get_dimensions; } });
//# sourceMappingURL=quo2.components.buttons.slide_button.utils.js.map
