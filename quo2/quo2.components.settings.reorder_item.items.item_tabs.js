var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.tabs.segmented_tab.js");
require("./quo.react_native.js");
require("./quo.components.text.js");
require("./quo2.components.settings.reorder_item.style.js");
require("./quo2.components.icon.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.settings.reorder_item.items.item_tabs.js");

goog.provide('quo2.components.settings.reorder_item.items.item_tabs');
quo2.components.settings.reorder_item.items.item_tabs.render_tab_item = (function quo2$components$settings$reorder_item$items$item_tabs$render_tab_item(item){
var tab_image = (cljs.core.truth_(item.call(null,new cljs.core.Keyword(null,"image","image",-58725096)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.reorder_item.style.tab_item_image], null)], null):(cljs.core.truth_(item.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.reorder_item.style.tab_item_image], null),quo2.components.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item),quo2.components.settings.reorder_item.style.tab_icon.call(null))], null):null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.reorder_item.style.tab_item_container], null),tab_image,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.reorder_item.style.tab_item_label,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
});
quo2.components.settings.reorder_item.items.item_tabs.transform_data = (function quo2$components$settings$reorder_item$items$item_tabs$transform_data(data){
return cljs.core.map.call(null,(function (p1__19542_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19542_SHARP_),quo2.components.settings.reorder_item.items.item_tabs.render_tab_item.call(null,p1__19542_SHARP_)]);
}),data);
});
quo2.components.settings.reorder_item.items.item_tabs.view = (function quo2$components$settings$reorder_item$items$item_tabs$view(p__19553){
var map__19554 = p__19553;
var map__19554__$1 = (((((!((map__19554 == null))))?(((((map__19554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19554):map__19554);
var data = cljs.core.get.call(null,map__19554__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var default_active = cljs.core.get.call(null,map__19554__$1,new cljs.core.Keyword(null,"default-active","default-active",467671365),(1));
var on_change = cljs.core.get.call(null,map__19554__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.constantly.call(null,null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tabs.segmented_tab.segmented_control,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"default-active","default-active",467671365),default_active,new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"blur?","blur?",366148003),false,new cljs.core.Keyword(null,"container-style","container-style",-240535783),quo2.components.settings.reorder_item.style.tab_container.call(null),new cljs.core.Keyword(null,"item-container-style","item-container-style",-1282731310),quo2.components.settings.reorder_item.style.segmented_tab_item_container.call(null),new cljs.core.Keyword(null,"active-item-container-style","active-item-container-style",657402941),quo2.components.settings.reorder_item.style.active_segmented_tab_item_container.call(null),new cljs.core.Keyword(null,"data","data",-232669377),quo2.components.settings.reorder_item.items.item_tabs.transform_data.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
Object.defineProperty(module.exports, "render_tab_item", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.items.item_tabs.render_tab_item; } });
Object.defineProperty(module.exports, "transform_data", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.items.item_tabs.transform_data; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.settings.reorder_item.items.item_tabs.view; } });
//# sourceMappingURL=quo2.components.settings.reorder_item.items.item_tabs.js.map
