var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
require("./react_native.core.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.buttons.button.js");

goog.provide('quo2.components.buttons.button');
quo2.components.buttons.button.themes = (function quo2$components$buttons$button$themes(customization_color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"positive","positive",1112941866),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"photo-bg","photo-bg",-1182545586),new cljs.core.Keyword(null,"dark-grey","dark-grey",-1524149166),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"blur-bg","blur-bg",-2109324038),new cljs.core.Keyword(null,"blur-bg-outline","blur-bg-outline",1214241370),new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.Keyword(null,"grey","grey",1875582333)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.custom_color(customization_color,(50)),new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.custom_color(customization_color,(60)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.custom_color(customization_color,(50))], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.success_50,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.success_60,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.success_50_opa_30], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.primary_50_opa_20,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.primary_50_opa_40,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.primary_50_opa_20], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.white_opa_40,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.white_opa_50,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.white_opa_40], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_20,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_30,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_20], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.danger_50,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.danger_60,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.danger_50], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_30,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_30], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_10], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_80_opa_10,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_80_opa_5], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_80_opa_10,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_80_opa_20,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_80_opa_10], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_95,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_95,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_95], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.neutral_100,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_10,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_20,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_10], null)], null)]),new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"positive","positive",1112941866),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"photo-bg","photo-bg",-1182545586),new cljs.core.Keyword(null,"dark-grey","dark-grey",-1524149166),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"blur-bg","blur-bg",-2109324038),new cljs.core.Keyword(null,"blur-bg-outline","blur-bg-outline",1214241370),new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.Keyword(null,"grey","grey",1875582333)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.custom_color(customization_color,(60)),new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.custom_color(customization_color,(50)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.custom_color(customization_color,(60))], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.success_60,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.success_50,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.success_60_opa_30], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.primary_50,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.primary_50_opa_20,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.primary_50_opa_30,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.primary_50_opa_20], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_30,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_80_opa_40,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_80_opa_50,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_80_opa_40], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_70], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.danger_60,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.danger_50,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.danger_60], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_70], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_80], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_70,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.white_opa_10,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.white_opa_5], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.white_opa_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.white_opa_10,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.white_opa_20,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.white_opa_5], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_95], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.white,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556),quo2.foundations.colors.neutral_40,new cljs.core.Keyword(null,"label-color","label-color",813573617),quo2.foundations.colors.white,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),quo2.foundations.colors.neutral_90,new cljs.core.Keyword(null,"pressed","pressed",1100937946),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),quo2.foundations.colors.neutral_90], null)], null)])], null);
});
quo2.components.buttons.button.shape_style_container = (function quo2$components$buttons$button$shape_style_container(type,icon,size){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(cljs.core.truth_((function (){var and__4115__auto__ = icon;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"secondary","secondary",-669381460),null,new cljs.core.Keyword(null,"danger","danger",-624338030),null], null), null).call(null,type);
} else {
return and__4115__auto__;
}
})())?(24):(function (){var G__16647 = size;
switch (G__16647) {
case (56):
return (12);

break;
case (40):
return (12);

break;
case (32):
return (10);

break;
case (24):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16647)].join('')));

}
})())], null);
});
quo2.components.buttons.button.style_container = (function quo2$components$buttons$button$style_container(type,size,disabled,background_color,border_color,icon,above,width,before,after){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),background_color,(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return after;
}
})())?null:(function (){var G__16653 = size;
switch (G__16653) {
case (56):
return (16);

break;
case (40):
return (16);

break;
case (32):
return (12);

break;
case (24):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16653)].join('')));

}
})()),(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = before;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return after;
}
}
})())?null:(function (){var G__16656 = size;
switch (G__16656) {
case (56):
return (0);

break;
case (40):
return (9);

break;
case (32):
return (5);

break;
case (24):
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16656)].join('')));

}
})()),(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return before;
}
})())?null:(function (){var G__16657 = size;
switch (G__16657) {
case (56):
return (16);

break;
case (40):
return (16);

break;
case (32):
return (12);

break;
case (24):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16657)].join('')));

}
})()),new cljs.core.Keyword(null,"center","center",-748944368),(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = before;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return after;
}
}
})())?null:(function (){var G__16658 = size;
switch (G__16658) {
case (56):
return (16);

break;
case (40):
return (16);

break;
case (32):
return (12);

break;
case (24):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16658)].join('')));

}
})()),(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = before;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return after;
}
}
})())?null:(function (){var G__16662 = size;
switch (G__16662) {
case (56):
return (0);

break;
case (40):
return (9);

break;
case (32):
return (5);

break;
case (24):
return (4);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16662)].join('')));

}
})()),(cljs.core.truth_(above)?new cljs.core.Keyword(null,"column","column",2078222095):new cljs.core.Keyword(null,"row","row",-570139521)),size]),quo2.components.buttons.button.shape_style_container.call(null,type,icon,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(icon)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),size], null):null),(cljs.core.truth_(border_color)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null):null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null):null));
});
/**
 * with label
 * [button opts "label"]
 * opts
 * {:type   :primary/:secondary/:grey/:dark-grey/:outline/:ghost/
 *          :danger/:photo-bg/:blur-bg/:blur-bg-outline/:shell/:community
 *  :size   40 [default] /32/24
 *  :icon   true/false
 *  :community-color '#FFFFFF'
 *  :community-text-color '#000000'
 *  :before :icon-keyword
 *  :after  :icon-keyword}
 * 
 * only icon
 * [button {:icon true} :i/close-circle]
 */
quo2.components.buttons.button.button_internal = (function quo2$components$buttons$button$button_internal(_,___$1){
var pressed_in = reagent.core.atom.call(null,false);
return (function (p__16663,children){
var map__16664 = p__16663;
var map__16664__$1 = (((((!((map__16664 == null))))?(((((map__16664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16664):map__16664);
var above = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"above","above",-1286866470));
var pressed = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"pressed","pressed",1100937946));
var before = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var on_long_press = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var on_press = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon_no_color = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"icon-no-color","icon-no-color",-1474481247));
var inner_style = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"inner-style","inner-style",-1651909244));
var disabled = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessibility_label = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var icon_secondary_no_color = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"icon-secondary-no-color","icon-secondary-no-color",1480354152));
var width = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"primary","primary",817773892));
var icon = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var test_ID = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"test-ID","test-ID",734294159));
var size = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"size","size",1098693007),(40));
var style = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var theme = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var customization_color = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"primary","primary",817773892));
var after = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"after","after",594996914));
var override_background_color = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"override-background-color","override-background-color",1009064888));
var map__16669 = cljs.core.get_in.call(null,quo2.components.buttons.button.themes.call(null,customization_color),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [theme,type], null));
var map__16669__$1 = (((((!((map__16669 == null))))?(((((map__16669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16669):map__16669);
var icon_color = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var icon_secondary_color = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"icon-secondary-color","icon-secondary-color",-823702556));
var background_color = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var label_color = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"label-color","label-color",813573617));
var border_color = cljs.core.get.call(null,map__16669__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var state = (cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref.call(null,pressed_in);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pressed;
}
})())?new cljs.core.Keyword(null,"pressed","pressed",1100937946):new cljs.core.Keyword(null,"default","default",-1987822328)
));
var icon_size = ((cljs.core._EQ_.call(null,(24),size))?(12):null);
var icon_secondary_color__$1 = (function (){var or__4126__auto__ = icon_secondary_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return icon_color;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),test_ID,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"on-press-in","on-press-in",-1371923889),(function (){
return cljs.core.reset_BANG_.call(null,pressed_in,true);
}),new cljs.core.Keyword(null,"on-press-out","on-press-out",1645381459),(function (){
return cljs.core.reset_BANG_.call(null,pressed_in,null);
})], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null):null),(cljs.core.truth_(on_long_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),on_long_press], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.buttons.button.shape_style_container.call(null,type,icon,size),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.buttons.button.style_container.call(null,type,size,disabled,(function (){var or__4126__auto__ = override_background_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,background_color,state);
}
})(),cljs.core.get.call(null,border_color,state),icon,above,width,before,after),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"pressed","pressed",1100937946)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.9], null):null),inner_style)], null),(cljs.core.truth_(above)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,above,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(2)], null),new cljs.core.Keyword(null,"color","color",1011675173),icon_secondary_color__$1,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null)], null)], null):null),(cljs.core.truth_(before)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,before,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),((cljs.core._EQ_.call(null,size,(40)))?(12):(8)),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"color","color",1011675173),icon_secondary_color__$1,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,(cljs.core.truth_((function (){var or__4126__auto__ = icon;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return icon_no_color;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,children,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color,new cljs.core.Keyword(null,"no-color","no-color",-309925745),icon_no_color,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null)], null):((typeof children === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(24),null,(56),null], null), null).call(null,size))?new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103):null),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),label_color], null)], null),children], null):((cljs.core.vector_QMARK_.call(null,children))?children:null)))], null),(cljs.core.truth_(after)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,after,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),((cljs.core._EQ_.call(null,size,(40)))?(12):(8))], null),new cljs.core.Keyword(null,"no-color","no-color",-309925745),icon_secondary_no_color,new cljs.core.Keyword(null,"color","color",1011675173),icon_secondary_color__$1,new cljs.core.Keyword(null,"size","size",1098693007),icon_size], null)], null)], null):null)], null)], null)], null);
});
});
quo2.components.buttons.button.button = quo2.theme.with_theme.call(null,quo2.components.buttons.button.button_internal);
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.buttons.button.themes; } });
Object.defineProperty(module.exports, "shape_style_container", { enumerable: false, get: function() { return quo2.components.buttons.button.shape_style_container; } });
Object.defineProperty(module.exports, "style_container", { enumerable: false, get: function() { return quo2.components.buttons.button.style_container; } });
Object.defineProperty(module.exports, "button_internal", { enumerable: false, get: function() { return quo2.components.buttons.button.button_internal; } });
Object.defineProperty(module.exports, "button", { enumerable: false, get: function() { return quo2.components.buttons.button.button; } });
//# sourceMappingURL=quo2.components.buttons.button.js.map
