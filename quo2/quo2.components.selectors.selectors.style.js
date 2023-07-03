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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.selectors.selectors.style.js");

goog.provide('quo2.components.selectors.selectors.style');
quo2.components.selectors.selectors.style.toggle_background_color = (function quo2$components$selectors$selectors$style$toggle_background_color(custom_color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.custom_color_by_theme.call(null,custom_color,(50),(60)),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_80)], null),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(custom_color,(50)),quo2.foundations.colors.white_opa_70),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_10)], null)], null);
});
quo2.components.selectors.selectors.style.radio_border_color = (function quo2$components$selectors$selectors$style$radio_border_color(customization_color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60)),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_70)], null),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(customization_color,(50)),quo2.foundations.colors.white),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_40)], null)], null);
});
quo2.components.selectors.selectors.style.radio_background_unchecked_color = (function quo2$components$selectors$selectors$style$radio_background_unchecked_color(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white_opa_40,quo2.foundations.colors.neutral_80_opa_40),new cljs.core.Keyword(null,"blur","blur",-453500461),quo2.foundations.colors.white_opa_5], null);
});
quo2.components.selectors.selectors.style.checkbox_background_color = (function quo2$components$selectors$selectors$style$checkbox_background_color(customization_color){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60)),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white_opa_40,quo2.foundations.colors.neutral_80_opa_40)], null),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.custom_color(customization_color,(50)),quo2.foundations.colors.white),new cljs.core.Keyword(null,"unchecked","unchecked",924418378),quo2.foundations.colors.white_opa_5], null)], null);
});
quo2.components.selectors.selectors.style.checkbox_border_unchecked_color = (function quo2$components$selectors$selectors$style$checkbox_border_unchecked_color(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_70),new cljs.core.Keyword(null,"blur","blur",-453500461),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_20,quo2.foundations.colors.white_opa_40)], null);
});
quo2.components.selectors.selectors.style.checkbox_prefill_background_color = (function quo2$components$selectors$selectors$style$checkbox_prefill_background_color(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"normal","normal",-1519123858),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_30,quo2.foundations.colors.neutral_80),new cljs.core.Keyword(null,"blur","blur",-453500461),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_80_opa_10,quo2.foundations.colors.white_opa_10)], null);
});
quo2.components.selectors.selectors.style.get_color = (function quo2$components$selectors$selectors$style$get_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17285 = arguments.length;
var i__4737__auto___17286 = (0);
while(true){
if((i__4737__auto___17286 < len__4736__auto___17285)){
args__4742__auto__.push((arguments[i__4737__auto___17286]));

var G__17287 = (i__4737__auto___17286 + (1));
i__4737__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return quo2.components.selectors.selectors.style.get_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(quo2.components.selectors.selectors.style.get_color.cljs$core$IFn$_invoke$arity$variadic = (function (color_map,p__17210){
var vec__17211 = p__17210;
var blur_QMARK_ = cljs.core.nth.call(null,vec__17211,(0),null);
var checked_QMARK_ = cljs.core.nth.call(null,vec__17211,(1),null);
var blur_type = (cljs.core.truth_(blur_QMARK_)?new cljs.core.Keyword(null,"blur","blur",-453500461):new cljs.core.Keyword(null,"normal","normal",-1519123858));
if((!((checked_QMARK_ == null)))){
return cljs.core.get_in.call(null,color_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blur_type,(cljs.core.truth_(checked_QMARK_)?new cljs.core.Keyword(null,"checked","checked",-50955819):new cljs.core.Keyword(null,"unchecked","unchecked",924418378))], null));
} else {
return cljs.core.get.call(null,color_map,blur_type);
}
}));

(quo2.components.selectors.selectors.style.get_color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quo2.components.selectors.selectors.style.get_color.cljs$lang$applyTo = (function (seq17199){
var G__17202 = cljs.core.first.call(null,seq17199);
var seq17199__$1 = cljs.core.next.call(null,seq17199);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17202,seq17199__$1);
}));

quo2.components.selectors.selectors.style.toggle = (function quo2$components$selectors$selectors$style$toggle(p__17217){
var map__17218 = p__17217;
var map__17218__$1 = (((((!((map__17218 == null))))?(((((map__17218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17218):map__17218);
var checked_QMARK_ = cljs.core.get.call(null,map__17218__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var disabled_QMARK_ = cljs.core.get.call(null,map__17218__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var blur_QMARK_ = cljs.core.get.call(null,map__17218__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var container_style = cljs.core.get.call(null,map__17218__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var customization_color = cljs.core.get.call(null,map__17218__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
return cljs.core.assoc.call(null,container_style,new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.toggle_background_color.call(null,customization_color),blur_QMARK_,checked_QMARK_));
});
quo2.components.selectors.selectors.style.toggle_inner = (function quo2$components$selectors$selectors$style$toggle_inner(p__17226){
var map__17231 = p__17226;
var map__17231__$1 = (((((!((map__17231 == null))))?(((((map__17231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17231):map__17231);
var checked_QMARK_ = cljs.core.get.call(null,map__17231__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.white,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(checked_QMARK_)?(12):(2)),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"auto","auto",-566279492)], null);
});
quo2.components.selectors.selectors.style.radio = (function quo2$components$selectors$selectors$style$radio(p__17236){
var map__17237 = p__17236;
var map__17237__$1 = (((((!((map__17237 == null))))?(((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17237):map__17237);
var checked_QMARK_ = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var disabled_QMARK_ = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var blur_QMARK_ = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var container_style = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var customization_color = cljs.core.get.call(null,map__17237__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
return cljs.core.assoc.call(null,container_style,new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(20),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),1.2,new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(checked_QMARK_)?null:quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.radio_background_unchecked_color.call(null),blur_QMARK_)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.radio_border_color.call(null,customization_color),blur_QMARK_,checked_QMARK_));
});
quo2.components.selectors.selectors.style.radio_inner = (function quo2$components$selectors$selectors$style$radio_inner(p__17246){
var map__17248 = p__17246;
var map__17248__$1 = (((((!((map__17248 == null))))?(((((map__17248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17248):map__17248);
var checked_QMARK_ = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var blur_QMARK_ = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var customization_color = cljs.core.get.call(null,map__17248__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(14),new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"margin","margin",-995903681),1.8,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(7),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(checked_QMARK_)?quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.radio_border_color.call(null,customization_color),blur_QMARK_,checked_QMARK_):null)], null);
});
quo2.components.selectors.selectors.style.checkbox = (function quo2$components$selectors$selectors$style$checkbox(p__17256){
var map__17258 = p__17256;
var map__17258__$1 = (((((!((map__17258 == null))))?(((((map__17258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17258):map__17258);
var checked_QMARK_ = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var disabled_QMARK_ = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var blur_QMARK_ = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var container_style = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var customization_color = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943));
return cljs.core.assoc.call(null,container_style,new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(cljs.core.truth_(checked_QMARK_)?(0):1.2),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.checkbox_background_color.call(null,customization_color),blur_QMARK_,checked_QMARK_),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(checked_QMARK_)?null:quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.checkbox_border_unchecked_color.call(null),blur_QMARK_)));
});
quo2.components.selectors.selectors.style.common_checkbox_inner = (function quo2$components$selectors$selectors$style$common_checkbox_inner(p__17263){
var map__17264 = p__17263;
var map__17264__$1 = (((((!((map__17264 == null))))?(((((map__17264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17264):map__17264);
var checked_QMARK_ = cljs.core.get.call(null,map__17264__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var size = (cljs.core.truth_(checked_QMARK_)?(20):(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"width","width",-384071477),size], null);
});
quo2.components.selectors.selectors.style.checkbox_check = (function quo2$components$selectors$selectors$style$checkbox_check(_checked_QMARK_,blur_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(blur_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100):quo2.foundations.colors.white)], null);
});
quo2.components.selectors.selectors.style.checkbox_prefill = (function quo2$components$selectors$selectors$style$checkbox_prefill(p__17267){
var map__17268 = p__17267;
var map__17268__$1 = (((((!((map__17268 == null))))?(((((map__17268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17268):map__17268);
var disabled_QMARK_ = cljs.core.get.call(null,map__17268__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var blur_QMARK_ = cljs.core.get.call(null,map__17268__$1,new cljs.core.Keyword(null,"blur?","blur?",366148003));
var container_style = cljs.core.get.call(null,map__17268__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
return cljs.core.assoc.call(null,container_style,new cljs.core.Keyword(null,"height","height",1025178622),(21),new cljs.core.Keyword(null,"width","width",-384071477),(21),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(disabled_QMARK_)?0.3:(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.components.selectors.selectors.style.get_color.call(null,quo2.components.selectors.selectors.style.checkbox_prefill_background_color.call(null),blur_QMARK_));
});
quo2.components.selectors.selectors.style.checkbox_prefill_check = (function quo2$components$selectors$selectors$style$checkbox_prefill_check(checked_QMARK_,_blur_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(checked_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white):null)], null);
});
Object.defineProperty(module.exports, "checkbox_border_unchecked_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_border_unchecked_color; } });
Object.defineProperty(module.exports, "checkbox_check", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_check; } });
Object.defineProperty(module.exports, "checkbox_prefill", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_prefill; } });
Object.defineProperty(module.exports, "radio", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.radio; } });
Object.defineProperty(module.exports, "common_checkbox_inner", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.common_checkbox_inner; } });
Object.defineProperty(module.exports, "checkbox", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox; } });
Object.defineProperty(module.exports, "toggle_inner", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.toggle_inner; } });
Object.defineProperty(module.exports, "toggle", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.toggle; } });
Object.defineProperty(module.exports, "checkbox_prefill_background_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_prefill_background_color; } });
Object.defineProperty(module.exports, "toggle_background_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.toggle_background_color; } });
Object.defineProperty(module.exports, "radio_inner", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.radio_inner; } });
Object.defineProperty(module.exports, "radio_background_unchecked_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.radio_background_unchecked_color; } });
Object.defineProperty(module.exports, "radio_border_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.radio_border_color; } });
Object.defineProperty(module.exports, "checkbox_background_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_background_color; } });
Object.defineProperty(module.exports, "checkbox_prefill_check", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.checkbox_prefill_check; } });
Object.defineProperty(module.exports, "get_color", { enumerable: false, get: function() { return quo2.components.selectors.selectors.style.get_color; } });
//# sourceMappingURL=quo2.components.selectors.selectors.style.js.map
