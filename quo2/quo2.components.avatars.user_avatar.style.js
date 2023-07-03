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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.avatars.user_avatar.style.js");

goog.provide('quo2.components.avatars.user_avatar.style');
quo2.components.avatars.user_avatar.style.sizes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(80),new cljs.core.Keyword(null,"inner","inner",-1383171215),(72),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(20),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(4),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"heading-1","heading-1",-1623077842)], null),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(48),new cljs.core.Keyword(null,"inner","inner",-1383171215),(44),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(12),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(2),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"heading-2","heading-2",-1189317102)], null),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(32),new cljs.core.Keyword(null,"inner","inner",-1383171215),(28),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(12),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(2),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(24),new cljs.core.Keyword(null,"inner","inner",-1383171215),(24),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(0),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),new cljs.core.Keyword(null,"xxs","xxs",-16722349),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(20),new cljs.core.Keyword(null,"inner","inner",-1383171215),(20),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(0),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"label","label",1718410804)], null),new cljs.core.Keyword(null,"xxxs","xxxs",511924189),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outer","outer",-375185956),(16),new cljs.core.Keyword(null,"inner","inner",-1383171215),(16),new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409),(0),new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"label","label",1718410804)], null)], null);
quo2.components.avatars.user_avatar.style.outer = (function quo2$components$avatars$user_avatar$style$outer(size){
var dimensions = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"outer","outer",-375185956)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),dimensions,new cljs.core.Keyword(null,"height","height",1025178622),dimensions,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),dimensions], null);
});
quo2.components.avatars.user_avatar.style.initials_avatar = (function quo2$components$avatars$user_avatar$style$initials_avatar(size,draw_ring_QMARK_,customization_color){
var outer_dimensions = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"outer","outer",-375185956)], null));
var inner_dimensions = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,(cljs.core.truth_(draw_ring_QMARK_)?new cljs.core.Keyword(null,"inner","inner",-1383171215):new cljs.core.Keyword(null,"outer","outer",-375185956))], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.Keyword(null,"center","center",-748944368),((outer_dimensions - inner_dimensions) / (2)),quo2.foundations.colors.custom_color_by_theme.call(null,customization_color,(50),(60)),inner_dimensions,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"absolute","absolute",1655386478),inner_dimensions,inner_dimensions,((outer_dimensions - inner_dimensions) / (2))]);
});
quo2.components.avatars.user_avatar.style.initials_avatar_text = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white_opa_70], null);
quo2.components.avatars.user_avatar.style.inner_dot = (function quo2$components$avatars$user_avatar$style$inner_dot(size,online_QMARK_){
var background = (cljs.core.truth_(online_QMARK_)?quo2.foundations.colors.success_50:quo2.foundations.colors.neutral_40);
var dimensions = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409)], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(dimensions - (4)),new cljs.core.Keyword(null,"height","height",1025178622),(dimensions - (4)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(dimensions - (4)),new cljs.core.Keyword(null,"background-color","background-color",570434026),background], null);
});
quo2.components.avatars.user_avatar.style.dot = (function quo2$components$avatars$user_avatar$style$dot(size,ring_QMARK_){
var dimensions = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"status-indicator","status-indicator",-799823409)], null));
var border_width = cljs.core.get_in.call(null,quo2.components.avatars.user_avatar.style.sizes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,new cljs.core.Keyword(null,"status-indicator-border","status-indicator-border",1150658736)], null));
var right = (function (){var G__16582 = size;
var G__16582__$1 = (((G__16582 instanceof cljs.core.Keyword))?G__16582.fqn:null);
switch (G__16582__$1) {
case "big":
return (2);

break;
case "medium":
return (0);

break;
case "small":
return (-2);

break;
default:
return (0);

}
})();
var bottom = (function (){var G__16584 = size;
var G__16584__$1 = (((G__16584 instanceof cljs.core.Keyword))?G__16584.fqn:null);
switch (G__16584__$1) {
case "big":
if(cljs.core.truth_(ring_QMARK_)){
return (-1);
} else {
return (2);
}

break;
case "medium":
if(cljs.core.truth_(ring_QMARK_)){
return (0);
} else {
return (-2);
}

break;
case "small":
return (-2);

break;
default:
return (0);

}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),bottom,quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100),dimensions,border_width,new cljs.core.Keyword(null,"center","center",-748944368),right,quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_100),new cljs.core.Keyword(null,"absolute","absolute",1655386478),dimensions,dimensions]);
});
Object.defineProperty(module.exports, "sizes", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.sizes; } });
Object.defineProperty(module.exports, "outer", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.outer; } });
Object.defineProperty(module.exports, "initials_avatar", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.initials_avatar; } });
Object.defineProperty(module.exports, "initials_avatar_text", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.initials_avatar_text; } });
Object.defineProperty(module.exports, "inner_dot", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.inner_dot; } });
Object.defineProperty(module.exports, "dot", { enumerable: false, get: function() { return quo2.components.avatars.user_avatar.style.dot; } });
//# sourceMappingURL=quo2.components.avatars.user_avatar.style.js.map
