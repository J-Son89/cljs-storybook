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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tabs.tab.style.js");

goog.provide('quo2.components.tabs.tab.style');
quo2.components.tabs.tab.style.tab_background_opacity = 0.3;
quo2.components.tabs.tab.style.size__GT_padding_left = (function quo2$components$tabs$tab$style$size__GT_padding_left(size){
var G__19322 = size;
switch (G__19322) {
case (32):
return (12);

break;
case (28):
return (12);

break;
case (24):
return (8);

break;
case (20):
return (8);

break;
default:
return null;

}
});
quo2.components.tabs.tab.style.size__GT_border_radius = (function quo2$components$tabs$tab$style$size__GT_border_radius(size){
var G__19323 = size;
switch (G__19323) {
case (32):
return (10);

break;
case (28):
return (8);

break;
case (24):
return (8);

break;
case (20):
return (6);

break;
default:
return null;

}
});
quo2.components.tabs.tab.style.notification_dot = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(-2),new cljs.core.Keyword(null,"right","right",-452581833),(-2)], null);
quo2.components.tabs.tab.style.container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
quo2.components.tabs.tab.style.tab = (function quo2$components$tabs$tab$style$tab(p__19327){
var map__19329 = p__19327;
var map__19329__$1 = (((((!((map__19329 == null))))?(((((map__19329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19329):map__19329);
var background_color = cljs.core.get.call(null,map__19329__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var disabled = cljs.core.get.call(null,map__19329__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var segmented_QMARK_ = cljs.core.get.call(null,map__19329__$1,new cljs.core.Keyword(null,"segmented?","segmented?",506415002));
var show_notification_dot_QMARK_ = cljs.core.get.call(null,map__19329__$1,new cljs.core.Keyword(null,"show-notification-dot?","show-notification-dot?",-180941106));
var size = cljs.core.get.call(null,map__19329__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var border_radius = quo2.components.tabs.tab.style.size__GT_border_radius.call(null,size);
var padding = quo2.components.tabs.tab.style.size__GT_padding_left.call(null,size);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),border_radius,new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),border_radius,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),padding], null),(cljs.core.truth_(show_notification_dot_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(1)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),border_radius,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),padding], null)),(cljs.core.truth_(segmented_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null):null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),quo2.components.tabs.tab.style.tab_background_opacity], null):null));
});
quo2.components.tabs.tab.style.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_10,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_10,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_90,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_90,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null)], null)], null);
quo2.components.tabs.tab.style.themes_for_blur_background = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_80_opa_60,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white_opa_20,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null)], null)], null);
quo2.components.tabs.tab.style.by_theme = (function quo2$components$tabs$tab$style$by_theme(p__19335){
var map__19336 = p__19335;
var map__19336__$1 = (((((!((map__19336 == null))))?(((((map__19336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19336):map__19336);
var disabled = cljs.core.get.call(null,map__19336__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__19336__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var blur_QMARK_ = cljs.core.get.call(null,map__19336__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var theme = cljs.core.get.call(null,map__19336__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var state = (cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):(cljs.core.truth_(active)?new cljs.core.Keyword(null,"active","active",1895962068):new cljs.core.Keyword(null,"default","default",-1987822328)
));
return cljs.core.get_in.call(null,(cljs.core.truth_(blur_QMARK_)?quo2.components.tabs.tab.style.themes_for_blur_background:quo2.components.tabs.tab.style.themes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme,state], null));
});
Object.defineProperty(module.exports, "tab", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.tab; } });
Object.defineProperty(module.exports, "notification_dot", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.notification_dot; } });
Object.defineProperty(module.exports, "size__GT_border_radius", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.size__GT_border_radius; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.themes; } });
Object.defineProperty(module.exports, "tab_background_opacity", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.tab_background_opacity; } });
Object.defineProperty(module.exports, "themes_for_blur_background", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.themes_for_blur_background; } });
Object.defineProperty(module.exports, "size__GT_padding_left", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.size__GT_padding_left; } });
Object.defineProperty(module.exports, "by_theme", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.by_theme; } });
Object.defineProperty(module.exports, "container", { enumerable: false, get: function() { return quo2.components.tabs.tab.style.container; } });
//# sourceMappingURL=quo2.components.tabs.tab.style.js.map
