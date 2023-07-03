var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./react_native.reanimated.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.record_audio.record_audio.helpers.js");

goog.provide('quo2.components.record_audio.record_audio.helpers');
quo2.components.record_audio.record_audio.helpers.animate_linear = (function quo2$components$record_audio$record_audio$helpers$animate_linear(shared_value,value,duration){
return react_native.reanimated.animate_shared_value_with_timing.call(null,shared_value,value,duration,new cljs.core.Keyword(null,"linear","linear",872268697));
});
quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay = (function quo2$components$record_audio$record_audio$helpers$animate_linear_with_delay(shared_value,value,duration,delay){
return react_native.reanimated.animate_shared_value_with_delay.call(null,shared_value,value,duration,new cljs.core.Keyword(null,"linear","linear",872268697),delay);
});
quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay_loop = (function quo2$components$record_audio$record_audio$helpers$animate_linear_with_delay_loop(shared_value,value,duration,delay){
return react_native.reanimated.animate_shared_value_with_delay_repeat.call(null,shared_value,value,duration,new cljs.core.Keyword(null,"linear","linear",872268697),delay,(-1));
});
quo2.components.record_audio.record_audio.helpers.animate_easing = (function quo2$components$record_audio$record_audio$helpers$animate_easing(shared_value,value,duration){
return react_native.reanimated.animate_shared_value_with_timing.call(null,shared_value,value,duration,new cljs.core.Keyword(null,"easing1","easing1",-1871246040));
});
quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay = (function quo2$components$record_audio$record_audio$helpers$animate_easing_with_delay(shared_value,value,duration,delay){
return react_native.reanimated.animate_shared_value_with_delay.call(null,shared_value,value,duration,new cljs.core.Keyword(null,"easing1","easing1",-1871246040),delay);
});
quo2.components.record_audio.record_audio.helpers.set_value = (function quo2$components$record_audio$record_audio$helpers$set_value(shared_value,value){
return react_native.reanimated.set_shared_value.call(null,shared_value,value);
});
Object.defineProperty(module.exports, "animate_linear", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.animate_linear; } });
Object.defineProperty(module.exports, "animate_linear_with_delay", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay; } });
Object.defineProperty(module.exports, "animate_linear_with_delay_loop", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.animate_linear_with_delay_loop; } });
Object.defineProperty(module.exports, "animate_easing", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.animate_easing; } });
Object.defineProperty(module.exports, "animate_easing_with_delay", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.animate_easing_with_delay; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return quo2.components.record_audio.record_audio.helpers.set_value; } });
//# sourceMappingURL=quo2.components.record_audio.record_audio.helpers.js.map
