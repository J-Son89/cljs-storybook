var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.selectors.selectors.view.js");
require("./quo2.components.settings.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.settings.privacy_option.js");

goog.provide('quo2.components.settings.privacy_option');
quo2.components.settings.privacy_option.bullet = (function quo2$components$settings$privacy_option$bullet(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.bullet_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.bullet.call(null)], null)], null)], null);
});
quo2.components.settings.privacy_option.unordered_list = (function quo2$components$settings$privacy_option$unordered_list(container_style,list_items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.settings.style.list_container,container_style)], null),(function (){var iter__4529__auto__ = (function quo2$components$settings$privacy_option$unordered_list_$_iter__19300(s__19301){
return (new cljs.core.LazySeq(null,(function (){
var s__19301__$1 = s__19301;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__19301__$1);
if(temp__5735__auto__){
var s__19301__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19301__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__19301__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__19303 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__19302 = (0);
while(true){
if((i__19302 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__19302);
cljs.core.chunk_append.call(null,b__19303,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.list_item], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.bullet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,item)], null)));

var G__19344 = (i__19302 + (1));
i__19302 = G__19344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19303),quo2$components$settings$privacy_option$unordered_list_$_iter__19300.call(null,cljs.core.chunk_rest.call(null,s__19301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19303),null);
}
} else {
var item = cljs.core.first.call(null,s__19301__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.list_item], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.bullet], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,item)], null)),quo2$components$settings$privacy_option$unordered_list_$_iter__19300.call(null,cljs.core.rest.call(null,s__19301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(list_items);
})()], null);
});
quo2.components.settings.privacy_option.card_footer = (function quo2$components$settings$privacy_option$card_footer(p__19319){
var map__19320 = p__19319;
var map__19320__$1 = (((((!((map__19320 == null))))?(((((map__19320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19320):map__19320);
var active_QMARK_ = cljs.core.get.call(null,map__19320__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var label = cljs.core.get.call(null,map__19320__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_toggle = cljs.core.get.call(null,map__19320__$1,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.card_footer.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.card_footer_label_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103)], null),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.card_footer_toggle_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.toggle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(active_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_toggle], null)], null)], null)], null)], null);
});
quo2.components.settings.privacy_option.selection_indicator = (function quo2$components$settings$privacy_option$selection_indicator(active_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.selection_indicator_container.call(null,active_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.selection_indicator.call(null,active_QMARK_)], null)], null)], null);
});
quo2.components.settings.privacy_option.card_header = (function quo2$components$settings$privacy_option$card_header(p__19324){
var map__19325 = p__19324;
var map__19325__$1 = (((((!((map__19325 == null))))?(((((map__19325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19325):map__19325);
var icon = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var active_QMARK_ = cljs.core.get.call(null,map__19325__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.card_header_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.style.card_header_label_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029)], null),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.selection_indicator,active_QMARK_], null)], null);
});
quo2.components.settings.privacy_option.card = (function quo2$components$settings$privacy_option$card(p__19331){
var map__19332 = p__19331;
var map__19332__$1 = (((((!((map__19332 == null))))?(((((map__19332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19332):map__19332);
var active_QMARK_ = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"active?","active?",459499776),false);
var header = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var list_items = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"list-items","list-items",307159780));
var icon = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("i","world","i/world",-418293028));
var on_select = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_toggle = cljs.core.get.call(null,map__19332__$1,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_select,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"privacy-option-card","privacy-option-card",209149103),new cljs.core.Keyword(null,"testID","testID",-1376182509),new cljs.core.Keyword(null,"privacy-option-card","privacy-option-card",209149103)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,quo2.components.settings.style.privacy_option_card.call(null,active_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.card_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"label","label",1718410804),header], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.unordered_list,(cljs.core.truth_(footer)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8)], null)),list_items], null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.privacy_option.card_footer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),footer,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),on_toggle], null)], null):null)], null)], null);
});
Object.defineProperty(module.exports, "bullet", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.bullet; } });
Object.defineProperty(module.exports, "unordered_list", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.unordered_list; } });
Object.defineProperty(module.exports, "card_footer", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.card_footer; } });
Object.defineProperty(module.exports, "selection_indicator", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.selection_indicator; } });
Object.defineProperty(module.exports, "card_header", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.card_header; } });
Object.defineProperty(module.exports, "card", { enumerable: false, get: function() { return quo2.components.settings.privacy_option.card; } });
//# sourceMappingURL=quo2.components.settings.privacy_option.js.map
