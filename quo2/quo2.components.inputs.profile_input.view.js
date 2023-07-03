var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.inputs.profile_input.style.js");
require("./quo2.components.inputs.title_input.view.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.hole_view.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.profile_input.view.js");

goog.provide('quo2.components.inputs.profile_input.view');
quo2.components.inputs.profile_input.view.profile_input = (function quo2$components$inputs$profile_input$view$profile_input(p__17066){
var map__17067 = p__17066;
var map__17067__$1 = (((((!((map__17067 == null))))?(((((map__17067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17067):map__17067);
var customization_color = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
var placeholder = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_press = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var title_input_props = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"title-input-props","title-input-props",925493873));
var image_picker_props = cljs.core.get.call(null,map__17067__$1,new cljs.core.Keyword(null,"image-picker-props","image-picker-props",-1911465273));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.profile_input.style.container.call(null,customization_color)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.hole_view.hole_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366).cljs$core$IFn$_invoke$arity$1(image_picker_props))?new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366).cljs$core$IFn$_invoke$arity$1(image_picker_props):image_picker_props)),new cljs.core.Keyword(null,"holes","holes",188002959),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(33),new cljs.core.Keyword(null,"y","y",-1757859776),(24),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(12)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,cljs.core.assoc.call(null,image_picker_props,new cljs.core.Keyword(null,"static?","static?",-1639874822),true,new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"inner-style","inner-style",-1651909244),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"icon-size","icon-size",414161352),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"override-background-color","override-background-color",1009064888)],[on_press,new cljs.core.Keyword(null,"dark","dark",1818973999),quo2.components.inputs.profile_input.style.button_inner,new cljs.core.Keyword(null,"select-profile-picture-button","select-profile-picture-button",-1035431711),(20),(24),new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword("i","camera","i/camera",-1190349214),(24),quo2.components.inputs.profile_input.style.button,quo2.foundations.colors.alpha.call(null,quo2.foundations.colors.white,0.05)]),new cljs.core.Keyword("i","camera","i/camera",-1190349214)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.inputs.profile_input.style.input_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.inputs.title_input.view.title_input,cljs.core.merge.call(null,title_input_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blur?","blur?",366148003),true,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color], null))], null)], null)], null);
});
Object.defineProperty(module.exports, "profile_input", { enumerable: false, get: function() { return quo2.components.inputs.profile_input.view.profile_input; } });
//# sourceMappingURL=quo2.components.inputs.profile_input.view.js.map