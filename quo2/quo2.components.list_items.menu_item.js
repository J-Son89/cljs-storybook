var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.list_items.menu_item.js");

goog.provide('quo2.components.list_items.menu_item');
quo2.components.list_items.menu_item.themes = (function quo2$components$list_items$menu_item$themes(type){
var G__17147 = type;
var G__17147__$1 = (((G__17147 instanceof cljs.core.Keyword))?G__17147.fqn:null);
switch (G__17147__$1) {
case "main":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_10),new cljs.core.Keyword(null,"background","background",-863952629),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90),new cljs.core.Keyword(null,"text-color","text-color",1728708298),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white)], null);

break;
case "danger":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_50,quo2.foundations.colors.danger_60),new cljs.core.Keyword(null,"background","background",-863952629),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90),new cljs.core.Keyword(null,"text-color","text-color",1728708298),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_50,quo2.foundations.colors.danger_60)], null);

break;
case "transparent":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon-color","icon-color",620934726),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_10),new cljs.core.Keyword(null,"text-color","text-color",1728708298),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17147__$1)].join('')));

}
});
quo2.components.list_items.menu_item.menu_item = (function quo2$components$list_items$menu_item$menu_item(p__17155){
var map__17156 = p__17155;
var map__17156__$1 = (((((!((map__17156 == null))))?(((((map__17156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17156):map__17156);
var type = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"main","main",-2117802661));
var title = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"title","title",636505583));
var accessibility_label = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var icon = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_press = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var style_props = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"style-props","style-props",144347079));
var subtitle = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var subtitle_color = cljs.core.get.call(null,map__17156__$1,new cljs.core.Keyword(null,"subtitle-color","subtitle-color",-439473130));
var map__17167 = quo2.components.list_items.menu_item.themes.call(null,type);
var map__17167__$1 = (((((!((map__17167 == null))))?(((((map__17167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17167):map__17167);
var icon_color = cljs.core.get.call(null,map__17167__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var text_color = cljs.core.get.call(null,map__17167__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var background = cljs.core.get.call(null,map__17167__$1,new cljs.core.Keyword(null,"background","background",-863952629));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background,new cljs.core.Keyword(null,"height","height",1025178622),(48),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null))], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null):null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17173 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(0),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
if(cljs.core.truth_(icon)){
return cljs.core.assoc.call(null,G__17173,new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20));
} else {
return G__17173;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17176 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null);
if(cljs.core.truth_(icon)){
return cljs.core.assoc.call(null,G__17176,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(12));
} else {
return G__17176;
}
})()], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200)], null),title], null),(cljs.core.truth_(subtitle)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),subtitle_color], null),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200)], null),subtitle], null):null)], null)], null)], null);
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.list_items.menu_item.themes; } });
Object.defineProperty(module.exports, "menu_item", { enumerable: false, get: function() { return quo2.components.list_items.menu_item.menu_item; } });
//# sourceMappingURL=quo2.components.list_items.menu_item.js.map
