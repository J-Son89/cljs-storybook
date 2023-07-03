var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.utils.platform.js");

goog.provide('status_im.utils.platform');
status_im.utils.platform.platform = shadow.js.shim.module$react_native.Platform;
status_im.utils.platform.os = (cljs.core.truth_(status_im.utils.platform.platform)?status_im.utils.platform.platform.OS:null);
status_im.utils.platform.version = (cljs.core.truth_(status_im.utils.platform.platform)?status_im.utils.platform.platform.Version:null);
status_im.utils.platform.x_height = (812);
status_im.utils.platform.xs_height = (896);
status_im.utils.platform.iphone_x_dimensions_QMARK_ = (function status_im$utils$platform$iphone_x_dimensions_QMARK_(){
var map__17364 = cljs.core.js__GT_clj.call(null,shadow.js.shim.module$react_native.Dimensions.get("window"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__17364__$1 = (((((!((map__17364 == null))))?(((((map__17364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17364):map__17364);
var height = cljs.core.get.call(null,map__17364__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return ((cljs.core._EQ_.call(null,height,status_im.utils.platform.x_height)) || (cljs.core._EQ_.call(null,height,status_im.utils.platform.xs_height)));
});
status_im.utils.platform.android_QMARK_ = cljs.core._EQ_.call(null,status_im.utils.platform.os,"android");
status_im.utils.platform.ios_QMARK_ = cljs.core._EQ_.call(null,status_im.utils.platform.os,"ios");
status_im.utils.platform.iphone_x_QMARK_ = ((status_im.utils.platform.ios_QMARK_) && (status_im.utils.platform.iphone_x_dimensions_QMARK_.call(null)));
status_im.utils.platform.no_backup_directory = (function status_im$utils$platform$no_backup_directory(){
if(status_im.utils.platform.android_QMARK_){
return "/../no_backup";
} else {
if(status_im.utils.platform.ios_QMARK_){
return "/";
} else {
return null;
}
}
});
status_im.utils.platform.android_version_GT__EQ_ = (function status_im$utils$platform$android_version_GT__EQ_(v){
return ((status_im.utils.platform.android_QMARK_) && ((status_im.utils.platform.version >= v)));
});
status_im.utils.platform.low_device_QMARK_ = ((status_im.utils.platform.android_QMARK_) && ((status_im.utils.platform.version < (29))));
Object.defineProperty(module.exports, "os", { enumerable: false, get: function() { return status_im.utils.platform.os; } });
Object.defineProperty(module.exports, "no_backup_directory", { enumerable: false, get: function() { return status_im.utils.platform.no_backup_directory; } });
Object.defineProperty(module.exports, "version", { enumerable: false, get: function() { return status_im.utils.platform.version; } });
Object.defineProperty(module.exports, "iphone_x_QMARK_", { enumerable: false, get: function() { return status_im.utils.platform.iphone_x_QMARK_; } });
Object.defineProperty(module.exports, "platform", { enumerable: false, get: function() { return status_im.utils.platform.platform; } });
Object.defineProperty(module.exports, "x_height", { enumerable: false, get: function() { return status_im.utils.platform.x_height; } });
Object.defineProperty(module.exports, "low_device_QMARK_", { enumerable: false, get: function() { return status_im.utils.platform.low_device_QMARK_; } });
Object.defineProperty(module.exports, "xs_height", { enumerable: false, get: function() { return status_im.utils.platform.xs_height; } });
Object.defineProperty(module.exports, "iphone_x_dimensions_QMARK_", { enumerable: false, get: function() { return status_im.utils.platform.iphone_x_dimensions_QMARK_; } });
Object.defineProperty(module.exports, "android_QMARK_", { enumerable: false, get: function() { return status_im.utils.platform.android_QMARK_; } });
Object.defineProperty(module.exports, "ios_QMARK_", { enumerable: false, get: function() { return status_im.utils.platform.ios_QMARK_; } });
Object.defineProperty(module.exports, "android_version_GT__EQ_", { enumerable: false, get: function() { return status_im.utils.platform.android_version_GT__EQ_; } });
//# sourceMappingURL=status_im.utils.platform.js.map
