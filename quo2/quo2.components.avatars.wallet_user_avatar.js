var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.avatars.wallet_user_avatar.js");

goog.provide('quo2.components.avatars.wallet_user_avatar');
quo2.components.avatars.wallet_user_avatar.circle_sizes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"small","small",2133478704),(20),new cljs.core.Keyword(null,"medium","medium",-1864319384),(32),new cljs.core.Keyword(null,"large","large",-196820544),(48),new cljs.core.Keyword(null,"x-large","x-large",-671747671),(80)], null);
quo2.components.avatars.wallet_user_avatar.font_sizes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"x-large","x-large",-671747671),new cljs.core.Keyword(null,"heading-1","heading-1",-1623077842)], null);
quo2.components.avatars.wallet_user_avatar.font_weights = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"x-large","x-large",-671747671),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null);
/**
 * params, first name, last name, color, size
 * and if it's dark or not!
 */
quo2.components.avatars.wallet_user_avatar.wallet_user_avatar = (function quo2$components$avatars$wallet_user_avatar$wallet_user_avatar(p__16613){
var map__16614 = p__16613;
var map__16614__$1 = (((((!((map__16614 == null))))?(((((map__16614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);
var f_name = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"f-name","f-name",1829376078),"John");
var l_name = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"l-name","l-name",-1347905953),"Doe");
var color = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204));
var size = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x-large","x-large",-671747671));
var circle_size = size.call(null,quo2.components.avatars.wallet_user_avatar.circle_sizes);
var small_QMARK_ = cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"small","small",2133478704));
var f_name_initial = cljs.core.subs.call(null,clojure.string.upper_case.call(null,f_name),(0),(1));
var l_name_initial = cljs.core.subs.call(null,clojure.string.upper_case.call(null,l_name),(0),(1));
var circle_color = quo2.foundations.colors.custom_color(color,(50),(20));
var text_color = quo2.foundations.colors.custom_color_by_theme.call(null,color,(50),(60));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),circle_size,new cljs.core.Keyword(null,"height","height",1025178622),circle_size,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),circle_size,new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),circle_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size.call(null,quo2.components.avatars.wallet_user_avatar.font_sizes),new cljs.core.Keyword(null,"weight","weight",-1262796205),size.call(null,quo2.components.avatars.wallet_user_avatar.font_weights),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),((small_QMARK_)?f_name_initial:[f_name_initial,l_name_initial].join(''))], null)], null);
});
Object.defineProperty(module.exports, "circle_sizes", { enumerable: false, get: function() { return quo2.components.avatars.wallet_user_avatar.circle_sizes; } });
Object.defineProperty(module.exports, "font_sizes", { enumerable: false, get: function() { return quo2.components.avatars.wallet_user_avatar.font_sizes; } });
Object.defineProperty(module.exports, "font_weights", { enumerable: false, get: function() { return quo2.components.avatars.wallet_user_avatar.font_weights; } });
Object.defineProperty(module.exports, "wallet_user_avatar", { enumerable: false, get: function() { return quo2.components.avatars.wallet_user_avatar.wallet_user_avatar; } });
//# sourceMappingURL=quo2.components.avatars.wallet_user_avatar.js.map
