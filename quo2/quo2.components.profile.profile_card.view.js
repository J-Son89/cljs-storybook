var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./utils.i18n.js");
require("./react_native.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.tags.tag.js");
require("./quo2.foundations.colors.js");
require("./react_native.hole_view.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.profile.profile_card.style.js");
require("./quo2.components.avatars.user_avatar.view.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.profile.profile_card.view.js");

goog.provide('quo2.components.profile.profile_card.view');
quo2.components.profile.profile_card.view.f_profile_card_component = (function quo2$components$profile$profile_card$view$f_profile_card_component(p__19167){
var map__19169 = p__19167;
var map__19169__$1 = (((((!((map__19169 == null))))?(((((map__19169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19169):map__19169);
var login_card_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"login-card?","login-card?",-1561473060),false);
var show_options_button_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"show-options-button?","show-options-button?",-377956675),false);
var show_user_hash_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"show-user-hash?","show-user-hash?",-1654897923),false);
var keycard_account_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"keycard-account?","keycard-account?",505905342),false);
var show_emoji_hash_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"show-emoji-hash?","show-emoji-hash?",241381761),false);
var hash = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var show_logged_in_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"show-logged-in?","show-logged-in?",-211247258),false);
var name = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var emoji_hash = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"emoji-hash","emoji-hash",-993411987));
var profile_picture = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366));
var card_style = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"card-style","card-style",-454732337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null));
var last_item_QMARK_ = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"last-item?","last-item?",-1385525713),false);
var on_options_press = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"on-options-press","on-options-press",-432523057));
var customization_color = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),new cljs.core.Keyword(null,"turquoise","turquoise",876845491));
var on_card_press = cljs.core.get.call(null,map__19169__$1,new cljs.core.Keyword(null,"on-card-press","on-card-press",1458732465));
var map__19175 = react_native.core.get_window();
var map__19175__$1 = (((((!((map__19175 == null))))?(((((map__19175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19175):map__19175);
var width = cljs.core.get.call(null,map__19175__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var padding_bottom = (cljs.core.truth_(login_card_QMARK_)?(38):(cljs.core.truth_(show_emoji_hash_QMARK_)?(12):(10)
));
var border_bottom_radius = (cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(login_card_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return last_item_QMARK_;
}
})())?(16):(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_without_feedback,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_card_press,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"profile-card","profile-card",-433842160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.hole_view.hole_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_item_QMARK_)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),card_style),new cljs.core.Keyword(null,"holes","holes",188002959),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(login_card_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return last_item_QMARK_;
}
})())?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(108),new cljs.core.Keyword(null,"width","width",-384071477),(width - (40)),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(16)], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.card_container.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color,new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),padding_bottom,new cljs.core.Keyword(null,"border-bottom-radius","border-bottom-radius",-603571407),border_bottom_radius], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.card_header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"full-name","full-name",408178550),name,new cljs.core.Keyword(null,"profile-picture","profile-picture",1638048366),profile_picture,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"status-indicator?","status-indicator?",-279597843),false,new cljs.core.Keyword(null,"customization-color","customization-color",-2064044943),customization_color,new cljs.core.Keyword(null,"static?","static?",-1639874822),true], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),(cljs.core.truth_(show_logged_in_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.tag.tag,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"icon-color","icon-color",620934726),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"blurred?","blurred?",-53220885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"resource","resource",251898836)],[new cljs.core.Keyword(null,"dark","dark",1818973999),quo2.foundations.colors.success_50,new cljs.core.Keyword(null,"logged-in-tag","logged-in-tag",1841361814),true,new cljs.core.Keyword(null,"icon","icon",1679606541),(32),true,utils.i18n.label(new cljs.core.Keyword("t","logged-in","t/logged-in",627058427)),new cljs.core.Keyword("main-icons2","check","main-icons2/check",-1236320244)])], null):null),(cljs.core.truth_(show_options_button_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blur-bg","blur-bg",-2109324038),new cljs.core.Keyword(null,"icon","icon",1679606541),true,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.option_button,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_options_press,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"profile-card-options","profile-card-options",974537412)], null),new cljs.core.Keyword("i","options","i/options",99638360)], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.name_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"heading-2","heading-2",-1189317102),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.user_name], null),name], null),(cljs.core.truth_(keycard_account_QMARK_)?quo2.components.icon.icon.call(null,new cljs.core.Keyword("i","keycard","i/keycard",-1349469403),quo2.components.profile.profile_card.style.keycard_icon):null)], null),(cljs.core.truth_(show_user_hash_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"monospace","monospace",2089559697),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.user_hash], null),hash], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = show_emoji_hash_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return emoji_hash;
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"monospace","monospace",2089559697),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.profile.profile_card.style.emoji_hash], null),emoji_hash], null):null)], null)], null)], null);
});
quo2.components.profile.profile_card.view.profile_card = (function quo2$components$profile$profile_card$view$profile_card(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.profile.profile_card.view.f_profile_card_component,props], null);
});
Object.defineProperty(module.exports, "f_profile_card_component", { enumerable: false, get: function() { return quo2.components.profile.profile_card.view.f_profile_card_component; } });
Object.defineProperty(module.exports, "profile_card", { enumerable: false, get: function() { return quo2.components.profile.profile_card.view.profile_card; } });
//# sourceMappingURL=quo2.components.profile.profile_card.view.js.map
