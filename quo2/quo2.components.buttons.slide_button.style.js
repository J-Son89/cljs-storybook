var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.buttons.slide_button.constants.js");
require("./quo2.components.buttons.slide_button.utils.js");
require("./react_native.reanimated.js");
require("./quo2.foundations.typography.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.slide_button.style.js");

goog.provide('quo2.components.buttons.slide_button.style');
quo2.components.buttons.slide_button.style.absolute_fill = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null);
quo2.components.buttons.slide_button.style.thumb_container = (function quo2$components$buttons$slide_button$style$thumb_container(interpolate_track,thumb_size,customization_color){
return react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translate-x","translate-x",970754667),interpolate_track.call(null,new cljs.core.Keyword(null,"track-clamp","track-clamp",2102447526))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.buttons.slide_button.utils.slider_color.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),customization_color),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"height","height",1025178622),thumb_size,new cljs.core.Keyword(null,"width","width",-384071477),thumb_size,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
quo2.components.buttons.slide_button.style.arrow_icon_container = (function quo2$components$buttons$slide_button$style$arrow_icon_container(interpolate_track){
return react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translate-x","translate-x",970754667),interpolate_track.call(null,new cljs.core.Keyword(null,"arrow-icon-position","arrow-icon-position",-740473702))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
quo2.components.buttons.slide_button.style.action_icon = (function quo2$components$buttons$slide_button$style$action_icon(interpolate_track,size){
return react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translate-x","translate-x",970754667),interpolate_track.call(null,new cljs.core.Keyword(null,"action-icon-position","action-icon-position",-1955358068))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132)], null));
});
quo2.components.buttons.slide_button.style.track = (function quo2$components$buttons$slide_button$style$track(disabled_QMARK_,customization_color,height){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(14),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"padding","padding",1660304693),quo2.components.buttons.slide_button.constants.track_padding,new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.buttons.slide_button.utils.slider_color.call(null,new cljs.core.Keyword(null,"track","track",195787487),customization_color)], null);
});
quo2.components.buttons.slide_button.style.track_cover = (function quo2$components$buttons$slide_button$style$track_cover(interpolate_track){
return react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),interpolate_track.call(null,new cljs.core.Keyword(null,"track-cover","track-cover",523114914))], null),cljs.core.assoc.call(null,quo2.components.buttons.slide_button.style.absolute_fill,new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)));
});
quo2.components.buttons.slide_button.style.track_cover_text_container = (function quo2$components$buttons$slide_button$style$track_cover_text_container(track_width){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477),track_width], null);
});
quo2.components.buttons.slide_button.style.track_text = (function quo2$components$buttons$slide_button$style$track_text(customization_color){
return cljs.core.assoc.call(null,cljs.core.merge.call(null,quo2.foundations.typography.paragraph_1,quo2.foundations.typography.font_medium),new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.buttons.slide_button.utils.slider_color.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),customization_color));
});
Object.defineProperty(module.exports, "absolute_fill", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.absolute_fill; } });
Object.defineProperty(module.exports, "thumb_container", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.thumb_container; } });
Object.defineProperty(module.exports, "arrow_icon_container", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.arrow_icon_container; } });
Object.defineProperty(module.exports, "action_icon", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.action_icon; } });
Object.defineProperty(module.exports, "track", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.track; } });
Object.defineProperty(module.exports, "track_cover", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.track_cover; } });
Object.defineProperty(module.exports, "track_cover_text_container", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.track_cover_text_container; } });
Object.defineProperty(module.exports, "track_text", { enumerable: false, get: function() { return quo2.components.buttons.slide_button.style.track_text; } });
//# sourceMappingURL=quo2.components.buttons.slide_button.style.js.map
