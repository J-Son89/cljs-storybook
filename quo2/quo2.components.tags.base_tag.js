var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.base_tag.js");

goog.provide('quo2.components.tags.base_tag');
quo2.components.tags.base_tag.style_container = (function quo2$components$tags$base_tag$style_container(size,disabled,border_color,border_width,background_color,labelled_QMARK_,type){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),border_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),border_width,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),size,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null):null),((((((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"icon","icon",1679606541))) || (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"emoji","emoji",1031230144))))) && (cljs.core.not(labelled_QMARK_))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),size], null):null));
});
quo2.components.tags.base_tag.base_tag = (function quo2$components$tags$base_tag$base_tag(_){
return (function (p__16702,children){
var map__16703 = p__16702;
var map__16703__$1 = (((((!((map__16703 == null))))?(((((map__16703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16703):map__16703);
var disabled_QMARK_ = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_press = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var accessibility_label = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var background_color = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var type = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"size","size",1098693007),(32));
var border_width = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var labelled_QMARK_ = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908));
var id = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var border_color = cljs.core.get.call(null,map__16703__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return on_press.call(null,id);
})], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.tags.base_tag.style_container.call(null,size,disabled_QMARK_,border_color,border_width,background_color,labelled_QMARK_,type))], null),children], null)], null);
});
});
Object.defineProperty(module.exports, "style_container", { enumerable: false, get: function() { return quo2.components.tags.base_tag.style_container; } });
Object.defineProperty(module.exports, "base_tag", { enumerable: false, get: function() { return quo2.components.tags.base_tag.base_tag; } });
//# sourceMappingURL=quo2.components.tags.base_tag.js.map