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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.info.information_box.style.js");

goog.provide('quo2.components.info.information_box.style');
quo2.components.info.information_box.style.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.white,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.neutral_20,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.neutral_100], null),new cljs.core.Keyword(null,"informative","informative",1852560673),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.primary_50_opa_5,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.primary_50_opa_10,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.neutral_100], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.danger_50_opa_5,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.danger_50_opa_10,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.danger_50,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.danger_50], null),new cljs.core.Keyword(null,"close-button","close-button",1885538121),quo2.foundations.colors.neutral_100], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.neutral_90,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.white], null),new cljs.core.Keyword(null,"informative","informative",1852560673),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.primary_50_opa_5,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.primary_50_opa_10,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.white,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.white], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bg","bg",-206688421),quo2.foundations.colors.danger_50_opa_5,new cljs.core.Keyword(null,"border","border",1444987323),quo2.foundations.colors.danger_50_opa_10,new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.danger_50,new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.danger_50], null),new cljs.core.Keyword(null,"close-button","close-button",1885538121),quo2.foundations.colors.white], null)], null);
quo2.components.info.information_box.style.get_color = (function quo2$components$info$information_box$style$get_color(theme,key){
return cljs.core.get_in.call(null,quo2.components.info.information_box.style.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme,key], null));
});
quo2.components.info.information_box.style.get_color_by_type = (function quo2$components$info$information_box$style$get_color_by_type(theme,type,key){
return cljs.core.get_in.call(null,quo2.components.info.information_box.style.themes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme,type,key], null));
});
quo2.components.info.information_box.style.container = (function quo2$components$info$information_box$style$container(p__17013){
var map__17014 = p__17013;
var map__17014__$1 = (((((!((map__17014 == null))))?(((((map__17014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17014):map__17014);
var theme = cljs.core.get.call(null,map__17014__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var type = cljs.core.get.call(null,map__17014__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var include_button_QMARK_ = cljs.core.get.call(null,map__17014__$1,new cljs.core.Keyword(null,"include-button?","include-button?",512326479));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.info.information_box.style.get_color_by_type.call(null,theme,type,new cljs.core.Keyword(null,"bg","bg",-206688421)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.info.information_box.style.get_color_by_type.call(null,theme,type,new cljs.core.Keyword(null,"border","border",1444987323)),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(cljs.core.truth_(include_button_QMARK_)?(10):(11)),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(cljs.core.truth_(include_button_QMARK_)?(12):(11)),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(16)], null);
});
quo2.components.info.information_box.style.icon = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(1),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
quo2.components.info.information_box.style.close_button = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(4),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(8)], null);
quo2.components.info.information_box.style.content_text = (function quo2$components$info$information_box$style$content_text(theme,type){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.info.information_box.style.get_color_by_type.call(null,theme,type,new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null);
});
quo2.components.info.information_box.style.content_button = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(8),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null);
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.info.information_box.style.themes; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.info.information_box.style.get_color; } });
Object.defineProperty(module.exports, "get_color_by_type", { enumerable: false, get: function() { return quo2.components.info.information_box.style.get_color_by_type; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.info.information_box.style.container; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return quo2.components.info.information_box.style.icon; } });
Object.defineProperty(module.exports, "close_button", { enumerable: false, get: function() { return quo2.components.info.information_box.style.close_button; } });
Object.defineProperty(module.exports, "content_text", { enumerable: false, get: function() { return quo2.components.info.information_box.style.content_text; } });
Object.defineProperty(module.exports, "content_button", { enumerable: false, get: function() { return quo2.components.info.information_box.style.content_button; } });
//# sourceMappingURL=quo2.components.info.information_box.style.js.map
