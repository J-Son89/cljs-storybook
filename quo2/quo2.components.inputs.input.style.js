var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.inputs.input.style.js");

goog.provide('quo2.components.inputs.input.style');
quo2.components.inputs.input.style.variants_colors = (function quo2$components$inputs$input$style$variants_colors(blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_40,override_theme),new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_70,quo2.foundations.colors.white_opa_70,override_theme),new cljs.core.Keyword(null,"button-border","button-border",1489575541),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_30,quo2.foundations.colors.white_opa_10,override_theme),new cljs.core.Keyword(null,"password-icon","password-icon",1837048621),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white_opa_70,override_theme),new cljs.core.Keyword(null,"clear-icon","clear-icon",619279822),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_30,quo2.foundations.colors.white_opa_10,override_theme),new cljs.core.Keyword(null,"cursor","cursor",1011937484),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"blue","blue",-622100620),(50)),quo2.foundations.colors.white,override_theme)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,override_theme),new cljs.core.Keyword(null,"icon","icon",1679606541),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,override_theme),new cljs.core.Keyword(null,"button-border","button-border",1489575541),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_70,override_theme),new cljs.core.Keyword(null,"clear-icon","clear-icon",619279822),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_60,override_theme),new cljs.core.Keyword(null,"password-icon","password-icon",1837048621),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.white,override_theme),new cljs.core.Keyword(null,"cursor","cursor",1011937484),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"blue","blue",-622100620),(50)),quo2.foundations.colors.custom_color(new cljs.core.Keyword(null,"blue","blue",-622100620),(60)),override_theme)], null);
}
});
quo2.components.inputs.input.style.status_colors = (function quo2$components$inputs$input$style$status_colors(status,blur_QMARK_,override_theme){
if(cljs.core.truth_(blur_QMARK_)){
var G__17025 = status;
var G__17025__$1 = (((G__17025 instanceof cljs.core.Keyword))?G__17025.fqn:null);
switch (G__17025__$1) {
case "focus":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_40,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_20,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

break;
case "error":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_opa_40,quo2.foundations.colors.danger_opa_40,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_40,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

break;
case "disabled":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_10,quo2.foundations.colors.white_opa_10,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_30,quo2.foundations.colors.white_opa_20,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_30,quo2.foundations.colors.white_opa_20,override_theme)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_10,quo2.foundations.colors.white_opa_10,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_40,quo2.foundations.colors.white_opa_40,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

}
} else {
var G__17033 = status;
var G__17033__$1 = (((G__17033 instanceof cljs.core.Keyword))?G__17033.fqn:null);
switch (G__17033__$1) {
case "focus":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_60,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_60,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

break;
case "error":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_opa_40,quo2.foundations.colors.danger_opa_40,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.white_opa_40,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

break;
case "disabled":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_40,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_40,override_theme)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_20,quo2.foundations.colors.neutral_80,override_theme),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_40,quo2.foundations.colors.neutral_50,override_theme),new cljs.core.Keyword(null,"text","text",-1790561697),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)], null);

}
}
});
quo2.components.inputs.input.style.input_container = (function quo2$components$inputs$input$style$input_container(colors_by_status,small_QMARK_,disabled_QMARK_){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(8),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-color","border-color",-2059162761).cljs$core$IFn$_invoke$arity$1(colors_by_status),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(cljs.core.truth_(small_QMARK_)?(10):(12)),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1))], null);
});
quo2.components.inputs.input.style.left_icon_container = (function quo2$components$inputs$input$style$left_icon_container(small_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(small_QMARK_)?(0):(4)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(cljs.core.truth_(small_QMARK_)?(5):(9)),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20)], null);
});
quo2.components.inputs.input.style.icon = (function quo2$components$inputs$input$style$icon(colors_by_variant){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(colors_by_variant),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null);
});
quo2.components.inputs.input.style.input = (function quo2$components$inputs$input$style$input(colors_by_status,small_QMARK_,multiple_lines_QMARK_){
var base_props = cljs.core.assoc.call(null,quo2.components.markdown.text.text_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582)], null)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(cljs.core.truth_(small_QMARK_)?(4):(8)),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(cljs.core.truth_(small_QMARK_)?(4):(8)),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(colors_by_status));
if(cljs.core.truth_(multiple_lines_QMARK_)){
return cljs.core.assoc.call(null,base_props,new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return cljs.core.assoc.call(null,base_props,new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(small_QMARK_)?(30):(38)),new cljs.core.Keyword(null,"line-height","line-height",1870784992),null);
}
});
quo2.components.inputs.input.style.right_icon_touchable_area = (function quo2$components$inputs$input$style$right_icon_touchable_area(small_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(small_QMARK_)?(4):(8)),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(cljs.core.truth_(small_QMARK_)?(0):(4)),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(cljs.core.truth_(small_QMARK_)?(5):(9))], null);
});
quo2.components.inputs.input.style.password_icon = (function quo2$components$inputs$input$style$password_icon(variant_colors){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"password-icon","password-icon",1837048621).cljs$core$IFn$_invoke$arity$1(variant_colors)], null);
});
quo2.components.inputs.input.style.clear_icon = (function quo2$components$inputs$input$style$clear_icon(variant_colors){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"clear-icon","clear-icon",619279822).cljs$core$IFn$_invoke$arity$1(variant_colors)], null);
});
quo2.components.inputs.input.style.texts_container = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622),(18),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8)], null);
quo2.components.inputs.input.style.label_container = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null);
quo2.components.inputs.input.style.label_color = (function quo2$components$inputs$input$style$label_color(variant_colors){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(variant_colors)], null);
});
quo2.components.inputs.input.style.counter_container = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null);
quo2.components.inputs.input.style.counter_color = (function quo2$components$inputs$input$style$counter_color(current_chars,char_limit,variant_colors){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((current_chars > char_limit))?quo2.foundations.colors.danger_60:new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(variant_colors))], null);
});
quo2.components.inputs.input.style.button = (function quo2$components$inputs$input$style$button(colors_by_variant,small_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"margin-vertical","margin-vertical",-320294707),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),(4),(cljs.core.truth_(small_QMARK_)?(3):(7)),(1),1.5,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"button-border","button-border",1489575541).cljs$core$IFn$_invoke$arity$1(colors_by_variant),(7),2.5,(cljs.core.truth_(small_QMARK_)?(-4):(0)),(8),(24)]);
});
quo2.components.inputs.input.style.button_text = (function quo2$components$inputs$input$style$button_text(colors_by_status){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(colors_by_status)], null);
});
Object.defineProperty(module.exports, "input", { enumerable: false, get: function() { return quo2.components.inputs.input.style.input; } });
Object.defineProperty(module.exports, "left_icon_container", { enumerable: false, get: function() { return quo2.components.inputs.input.style.left_icon_container; } });
Object.defineProperty(module.exports, "texts_container", { enumerable: false, get: function() { return quo2.components.inputs.input.style.texts_container; } });
Object.defineProperty(module.exports, "counter_container", { enumerable: false, get: function() { return quo2.components.inputs.input.style.counter_container; } });
Object.defineProperty(module.exports, "button", { enumerable: false, get: function() { return quo2.components.inputs.input.style.button; } });
Object.defineProperty(module.exports, "button_text", { enumerable: false, get: function() { return quo2.components.inputs.input.style.button_text; } });
Object.defineProperty(module.exports, "input_container", { enumerable: false, get: function() { return quo2.components.inputs.input.style.input_container; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return quo2.components.inputs.input.style.icon; } });
Object.defineProperty(module.exports, "password_icon", { enumerable: false, get: function() { return quo2.components.inputs.input.style.password_icon; } });
Object.defineProperty(module.exports, "clear_icon", { enumerable: false, get: function() { return quo2.components.inputs.input.style.clear_icon; } });
Object.defineProperty(module.exports, "counter_color", { enumerable: false, get: function() { return quo2.components.inputs.input.style.counter_color; } });
Object.defineProperty(module.exports, "label_color", { enumerable: false, get: function() { return quo2.components.inputs.input.style.label_color; } });
Object.defineProperty(module.exports, "label_container", { enumerable: false, get: function() { return quo2.components.inputs.input.style.label_container; } });
Object.defineProperty(module.exports, "variants_colors", { enumerable: false, get: function() { return quo2.components.inputs.input.style.variants_colors; } });
Object.defineProperty(module.exports, "right_icon_touchable_area", { enumerable: false, get: function() { return quo2.components.inputs.input.style.right_icon_touchable_area; } });
Object.defineProperty(module.exports, "status_colors", { enumerable: false, get: function() { return quo2.components.inputs.input.style.status_colors; } });
//# sourceMappingURL=quo2.components.inputs.input.style.js.map
