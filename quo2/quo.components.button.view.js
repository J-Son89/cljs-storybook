var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.components.animated.pressable.js");
require("./quo.components.text.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.spacing.js");
require("./quo.haptic.js");
require("./quo.react_native.js");
require("./status_im.ui.components.icons.icons.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.button.view.js");

goog.provide('quo.components.button.view');
quo.components.button.view.style_container = (function quo$components$button$view$style_container(type){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(44),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),(function (){var G__18958 = type;
var G__18958__$1 = (((G__18958 instanceof cljs.core.Keyword))?G__18958.fqn:null);
switch (G__18958__$1) {
case "primary":
return new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);

break;
case "secondary":
return new cljs.core.Keyword(null,"x-tiny","x-tiny",-522785408).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);

break;
case "icon":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
return null;

}
})());
});
quo.components.button.view.content_style = (function quo$components$button$view$content_style(type){
var G__18963 = type;
var G__18963__$1 = (((G__18963 instanceof cljs.core.Keyword))?G__18963.fqn:null);
switch (G__18963__$1) {
case "primary":
return new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);

break;
case "secondary":
return new cljs.core.Keyword(null,"x-tiny","x-tiny",-522785408).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);

break;
case "icon":
return new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal);

break;
default:
return null;

}
});
quo.components.button.view.themes = (function quo$components$button$view$themes(theme){
var G__18966 = theme;
var G__18966__$1 = (((G__18966 instanceof cljs.core.Keyword))?G__18966.fqn:null);
switch (G__18966__$1) {
case "main":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-04","icon-04",1050021132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-04","text-04",1924373595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "icon":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-01","icon-01",164326199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "negative":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"negative-02","negative-02",1272870091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"negative-01","negative-01",-1197136157).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "positive":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"positive-02","positive-02",-1264647004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"positive-01","positive-01",2000485615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "accent":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-05","icon-05",1866486530).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"interactive-01","interactive-01",-232621318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-05","text-05",1203333556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "secondary":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"interactive-02","interactive-02",-1117107666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "disabled":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-02","icon-02",-1500964864).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
case "monocromatic":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"icon-01","icon-01",164326199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-background","ui-background",925586609).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18966__$1)].join('')));

}
});
quo.components.button.view.button = (function quo$components$button$view$button(p__18981,children){
var map__18983 = p__18981;
var map__18983__$1 = (((((!((map__18983 == null))))?(((((map__18983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18983):map__18983);
var on_press_start = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"on-press-start","on-press-start",-1739147621));
var border_radius = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8));
var before = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var on_long_press = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209));
var on_press = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var accessibility_label = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var haptic_type = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"haptic-type","haptic-type",-720743861),new cljs.core.Keyword(null,"selection","selection",975998651));
var type = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"primary","primary",817773892));
var test_ID = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"test-ID","test-ID",734294159));
var style = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var theme = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"main","main",-2117802661));
var after = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"after","after",594996914));
var loading = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var haptic_feedback = cljs.core.get.call(null,map__18983__$1,new cljs.core.Keyword(null,"haptic-feedback","haptic-feedback",-384336204),true);
var theme_SINGLEQUOTE_ = (cljs.core.truth_(disabled)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):theme
);
var map__18986 = quo.components.button.view.themes.call(null,theme_SINGLEQUOTE_);
var map__18986__$1 = (((((!((map__18986 == null))))?(((((map__18986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18986):map__18986);
var icon_color = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var background_color = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var text_color = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var border_color = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var optional_haptic = (function (){
if(cljs.core.truth_(haptic_feedback)){
return quo.haptic.trigger.call(null,haptic_type);
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.animated.pressable.pressable,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bg-color","bg-color",455102491),background_color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),border_radius,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null),(cljs.core.truth_(border_color)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(1)], null):null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
optional_haptic();

return on_press.call(null);
})], null):null),(cljs.core.truth_(on_long_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),(function (){
optional_haptic();

return on_long_press.call(null);
})], null):null),(cljs.core.truth_(on_press_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press-start","on-press-start",-1739147621),(function (){
optional_haptic();

return on_press_start.call(null);
})], null):null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-ID","test-ID",734294159),test_ID,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.button.view.style_container.call(null,type),style)], null),(cljs.core.truth_(before)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,before,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null)], null):null),(cljs.core.truth_(loading)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.activity_indicator], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.button.view.content_style.call(null,type),(cljs.core.truth_(loading)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null):null))], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"icon","icon",1679606541)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null):((typeof children === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),children], null):((cljs.core.vector_QMARK_.call(null,children))?children:null)))], null),(cljs.core.truth_(after)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,after,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null)], null):null)], null)], null);
});
Object.defineProperty(module.exports, "style_container", { enumerable: false, get: function() { return quo.components.button.view.style_container; } });
Object.defineProperty(module.exports, "content_style", { enumerable: false, get: function() { return quo.components.button.view.content_style; } });
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo.components.button.view.themes; } });
Object.defineProperty(module.exports, "button", { enumerable: false, get: function() { return quo.components.button.view.button; } });
//# sourceMappingURL=quo.components.button.view.js.map
