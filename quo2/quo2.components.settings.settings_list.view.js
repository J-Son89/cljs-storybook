var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.settings.settings_list.style.js");
require("./quo2.components.icon.js");
require("./quo2.components.selectors.selectors.view.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.tags.status_tags.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.settings.settings_list.view.js");

goog.provide('quo2.components.settings.settings_list.view');
quo2.components.settings.settings_list.view.settings_title = (function quo2$components$settings$settings_list$view$settings_title(title,status_tag_props,override_theme){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.title_container], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"setting-item-name-text","setting-item-name-text",772971039),new cljs.core.Keyword(null,"ellipsize-mode","ellipsize-mode",678839962),new cljs.core.Keyword(null,"tail","tail",-1146023564),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.title.call(null,override_theme),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),override_theme,new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200)], null),title], null):null),(cljs.core.truth_(status_tag_props)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.tag_container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.status_tags.status_tag,status_tag_props], null)], null):null)], null);
});
quo2.components.settings.settings_list.view.left_icon_comp = (function quo2$components$settings$settings_list$view$left_icon_comp(icon){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null)], null);
});
quo2.components.settings.settings_list.view.chevron_icon = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,new cljs.core.Keyword(null,"chevron-right","chevron-right",-219634075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40)], null)], null)], null);
quo2.components.settings.settings_list.view.toggle_button = (function quo2$components$settings$settings_list$view$toggle_button(p__19403){
var map__19404 = p__19403;
var map__19404__$1 = (((((!((map__19404 == null))))?(((((map__19404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19404):map__19404);
var checked_QMARK_ = cljs.core.get.call(null,map__19404__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var on_change = cljs.core.get.call(null,map__19404__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.selectors.selectors.view.toggle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (new_value){
return on_change.call(null,new_value);
})], null)], null);
});
quo2.components.settings.settings_list.view.badge_icon = (function quo2$components$settings$settings_list$view$badge_icon(override_theme){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessible","accessible",-1730589797),new cljs.core.Keyword(null,"true","true",-1114210334),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"setting-list-badge","setting-list-badge",35610830),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.dot.call(null,override_theme)], null)], null);
});
quo2.components.settings.settings_list.view.right_button = (function quo2$components$settings$settings_list$view$right_button(p__19411,override_theme){
var map__19412 = p__19411;
var map__19412__$1 = (((((!((map__19412 == null))))?(((((map__19412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19412):map__19412);
var title = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_press = cljs.core.get.call(null,map__19412__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),override_theme,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"size","size",1098693007),(24)], null),title], null);
});
quo2.components.settings.settings_list.view.communities_icons = (function quo2$components$settings$settings_list$view$communities_icons(p__19423,override_theme){
var map__19424 = p__19423;
var map__19424__$1 = (((((!((map__19424 == null))))?(((((map__19424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19424):map__19424);
var data = cljs.core.get.call(null,map__19424__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var icon_style = cljs.core.get.call(null,map__19424__$1,new cljs.core.Keyword(null,"icon-style","icon-style",1146958049));
var communities_count = (cljs.core.count.call(null,data) - (1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.communities_container], null),cljs.core.map_indexed.call(null,(function (index,p__19442){
var map__19443 = p__19442;
var map__19443__$1 = (((((!((map__19443 == null))))?(((((map__19443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19443):map__19443);
var source = cljs.core.get.call(null,map__19443__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var accessibility_label = cljs.core.get.call(null,map__19443__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),source,new cljs.core.Keyword(null,"source","source",-433931539),((typeof source === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),source], null):source),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.settings.settings_list.style.community_icon.call(null,(communities_count - index),override_theme),icon_style)], null)], null);
}),data)], null);
});
/**
 * Options
 * - `title` String to show in the center of the component, right to the icon and left to optional gadgets.
 * - `on-press` Callback called when the component is pressed.
 * - `accessibility-label` String to use as accessibility-label for VoiceOver.
 * - `left-icon` icon keyword for icon on left.
 * - `chevron?` Boolean to show/hide chevron at the right border of the component.
 * - `toggle-prop` Map with the following keys:
 *     `checked?` Boolean value to set check or unchecked toggle.
 *     `on-change` Callback called when user toggles toggle. Will pass the new toggle value to the callback
 * - `badge?` Boolean to show/hide badge.
 * - `button-props` Map with the following keys:
 *     `title` String to show as button text.
 *     `on-press` Callback called when button is pressed.
 * - `communities-props` Map with the following keys:
 *     `data` Array of maps containg source of the community asset.
 * - `style` Styles map to be merge with default container styles.
 * - `overide-theme` :dark or :light
 * - `status-tag-props see the spec for status-tag component
 * 
 */
quo2.components.settings.settings_list.view.settings_list = (function quo2$components$settings$settings_list$view$settings_list(p__19450){
var map__19451 = p__19450;
var map__19451__$1 = (((((!((map__19451 == null))))?(((((map__19451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19451):map__19451);
var container_style = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var status_tag_props = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"status-tag-props","status-tag-props",1220027071));
var override_theme = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var on_press = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var badge_QMARK_ = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"badge?","badge?",-1250836346));
var button_props = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"button-props","button-props",-392655929));
var toggle_props = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"toggle-props","toggle-props",406548360));
var accessibility_label = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var communities_props = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"communities-props","communities-props",-1908470322));
var chevron_QMARK_ = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"chevron?","chevron?",-732296114));
var title = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"title","title",636505583));
var left_icon = cljs.core.get.call(null,map__19451__$1,new cljs.core.Keyword(null,"left-icon","left-icon",769524213));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.settings.settings_list.style.item_container,container_style)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.settings.settings_list.style.inner_container], null),(cljs.core.truth_(left_icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.settings_list.view.left_icon_comp,left_icon], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.settings_list.view.settings_title,title,status_tag_props,override_theme], null),(cljs.core.truth_(toggle_props)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.settings_list.view.toggle_button,toggle_props], null):null),(cljs.core.truth_(badge_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.settings_list.view.badge_icon,override_theme], null):null),(cljs.core.truth_(button_props)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.settings.settings_list.view.right_button,button_props,override_theme], null):null),(cljs.core.truth_(communities_props)?quo2.components.settings.settings_list.view.communities_icons.call(null,communities_props,override_theme):null),(cljs.core.truth_(chevron_QMARK_)?quo2.components.settings.settings_list.view.chevron_icon:null)], null)], null)], null);
});
Object.defineProperty(module.exports, "settings_title", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.settings_title; } });
Object.defineProperty(module.exports, "left_icon_comp", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.left_icon_comp; } });
Object.defineProperty(module.exports, "chevron_icon", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.chevron_icon; } });
Object.defineProperty(module.exports, "toggle_button", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.toggle_button; } });
Object.defineProperty(module.exports, "badge_icon", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.badge_icon; } });
Object.defineProperty(module.exports, "right_button", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.right_button; } });
Object.defineProperty(module.exports, "communities_icons", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.communities_icons; } });
Object.defineProperty(module.exports, "settings_list", { enumerable: false, get: function() { return quo2.components.settings.settings_list.view.settings_list; } });
//# sourceMappingURL=quo2.components.settings.settings_list.view.js.map
