var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.tags.token_tag.js");
require("./react_native.core.js");
require("./utils.i18n.js");
require("./clojure.string.js");
require("./quo2.components.community.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.community.token_gating.js");

goog.provide('quo2.components.community.token_gating');
quo2.components.community.token_gating.token_requirement_list_row = (function quo2$components$community$token_gating$token_requirement_list_row(tokens,padding_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.community.style.token_row.call(null,padding_QMARK_)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (token_index,token){
var map__16955 = token;
var map__16955__$1 = (((((!((map__16955 == null))))?(((((map__16955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16955):map__16955);
var img_src = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"img-src","img-src",-108905265));
var symbol = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
var amount = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var sufficient_QMARK_ = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"sufficient?","sufficient?",-901789607));
var purchasable_QMARK_ = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"purchasable?","purchasable?",-1171226911));
var loading_QMARK_ = cljs.core.get.call(null,map__16955__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.community.style.token_tag_spacing], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.token_tag.token_tag,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol,new cljs.core.Keyword(null,"value","value",305978217),amount,new cljs.core.Keyword(null,"size","size",1098693007),(24),new cljs.core.Keyword(null,"sufficient?","sufficient?",-901789607),sufficient_QMARK_,new cljs.core.Keyword(null,"purchasable","purchasable",799522228),purchasable_QMARK_,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_,new cljs.core.Keyword(null,"img-src","img-src",-108905265),img_src], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),token_index], null));
}),tokens))], null);
});
quo2.components.community.token_gating.token_requirement_list = (function quo2$components$community$token_gating$token_requirement_list(p__16960){
var map__16961 = p__16960;
var map__16961__$1 = (((((!((map__16961 == null))))?(((((map__16961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16961):map__16961);
var tokens = cljs.core.get.call(null,map__16961__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var padding_QMARK_ = cljs.core.get.call(null,map__16961__$1,new cljs.core.Keyword(null,"padding?","padding?",1972880290));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((cljs.core.count.call(null,tokens) > (1)))?cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (token_requirement_index,tokens__$1){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(12)], null),((cljs.core._EQ_.call(null,token_requirement_index,(0)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.community.style.token_row_or_border.call(null)], null)], null)),((cljs.core._EQ_.call(null,token_requirement_index,(0)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.community.style.token_row_or_text.call(null,padding_QMARK_),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"label","label",1718410804)], null),clojure.string.lower_case.call(null,utils.i18n.label(new cljs.core.Keyword("t","or","t/or",235751453)))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.token_gating.token_requirement_list_row,tokens__$1,padding_QMARK_], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),token_requirement_index], null));
}),tokens)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.community.token_gating.token_requirement_list_row,cljs.core.first.call(null,tokens),padding_QMARK_], null))], null);
});
Object.defineProperty(module.exports, "token_requirement_list_row", { enumerable: false, get: function() { return quo2.components.community.token_gating.token_requirement_list_row; } });
Object.defineProperty(module.exports, "token_requirement_list", { enumerable: false, get: function() { return quo2.components.community.token_gating.token_requirement_list; } });
//# sourceMappingURL=quo2.components.community.token_gating.js.map
