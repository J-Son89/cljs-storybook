var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.onboarding.small_option_card.style.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.fast_image.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.onboarding.small_option_card.view.js");

goog.provide('quo2.components.onboarding.small_option_card.view');
quo2.components.onboarding.small_option_card.view.texts = (function quo2$components$onboarding$small_option_card$view$texts(p__19136){
var map__19137 = p__19136;
var map__19137__$1 = (((((!((map__19137 == null))))?(((((map__19137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19137):map__19137);
var title = cljs.core.get.call(null,map__19137__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__19137__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.text_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.title,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.subtitle,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),subtitle], null)], null);
});
quo2.components.onboarding.small_option_card.view.icon_variant = (function quo2$components$onboarding$small_option_card$view$icon_variant(p__19144){
var map__19145 = p__19144;
var map__19145__$1 = (((((!((map__19145 == null))))?(((((map__19145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19145):map__19145);
var title = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var image = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.icon_variant], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.icon_variant_image_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.fast_image.fast_image,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"small-option-card-icon-image","small-option-card-icon-image",-1259301525),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.icon_variant_image,new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"contain","contain",-692843443),new cljs.core.Keyword(null,"source","source",-433931539),image], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.onboarding.small_option_card.view.texts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),subtitle], null)], null)], null);
});
quo2.components.onboarding.small_option_card.view.main_variant = (function quo2$components$onboarding$small_option_card$view$main_variant(p__19150){
var map__19151 = p__19150;
var map__19151__$1 = (((((!((map__19151 == null))))?(((((map__19151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19151):map__19151);
var title = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var image = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var max_height = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.main_variant], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.main_variant_text_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.onboarding.small_option_card.view.texts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),subtitle], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.fast_image.fast_image,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"small-option-card-main-image","small-option-card-main-image",1957416530),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"contain","contain",-692843443),new cljs.core.Keyword(null,"source","source",-433931539),image], null)], null)], null);
});
/**
 * Variants: `:main` or `:icon`
 */
quo2.components.onboarding.small_option_card.view.small_option_card = (function quo2$components$onboarding$small_option_card$view$small_option_card(p__19155){
var map__19156 = p__19155;
var map__19156__$1 = (((((!((map__19156 == null))))?(((((map__19156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19156):map__19156);
var variant = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"main","main",-2117802661));
var title = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var image = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var max_height = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var on_press = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var accessibility_label = cljs.core.get.call(null,map__19156__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"small-option-card","small-option-card",-181220091));
var main_variant_QMARK_ = cljs.core._EQ_.call(null,variant,new cljs.core.Keyword(null,"main","main",-2117802661));
var card_component = ((main_variant_QMARK_)?quo2.components.onboarding.small_option_card.view.main_variant:quo2.components.onboarding.small_option_card.view.icon_variant);
var card_height = (((!(main_variant_QMARK_)))?quo2.components.onboarding.small_option_card.style.icon_variant_height:(cljs.core.truth_(max_height)?(function (){var x__4217__auto__ = max_height;
var y__4218__auto__ = quo2.components.onboarding.small_option_card.style.main_variant_height;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():quo2.components.onboarding.small_option_card.style.main_variant_height
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.touchable_overlay,new cljs.core.Keyword(null,"active-opacity","active-opacity",-726267404),(1),new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),quo2.foundations.colors.white_opa_5,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.card.call(null,card_height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_component,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),subtitle,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null)], null)], null)], null),((main_variant_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.onboarding.small_option_card.style.main_variant_extra_space], null)], null):null)], null);
});
Object.defineProperty(module.exports, "texts", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.view.texts; } });
Object.defineProperty(module.exports, "icon_variant", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.view.icon_variant; } });
Object.defineProperty(module.exports, "main_variant", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.view.main_variant; } });
Object.defineProperty(module.exports, "small_option_card", { enumerable: false, get: function() { return quo2.components.onboarding.small_option_card.view.small_option_card; } });
//# sourceMappingURL=quo2.components.onboarding.small_option_card.view.js.map
