var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./quo2.components.avatars.user_avatar.view.js");
require("./quo2.components.buttons.button.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.navigation.page_nav.js");

goog.provide('quo2.components.navigation.page_nav');
quo2.components.navigation.page_nav.centrify_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
quo2.components.navigation.page_nav.align_left = cljs.core.assoc.call(null,quo2.components.navigation.page_nav.centrify_style,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815));
quo2.components.navigation.page_nav.big_QMARK_ = (function quo2$components$navigation$page_nav$big_QMARK_(size){
return cljs.core._EQ_.call(null,size,new cljs.core.Keyword(null,"big","big",903550151));
});
quo2.components.navigation.page_nav.icon_props = (function quo2$components$navigation$page_nav$icon_props(color,size){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((quo2.components.navigation.page_nav.big_QMARK_.call(null,size))?(20):(16)),new cljs.core.Keyword(null,"height","height",1025178622),((quo2.components.navigation.page_nav.big_QMARK_.call(null,size))?(20):(16))], null)], null),(((!(clojure.string.blank_QMARK_.call(null,color))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-color","no-color",-309925745),true], null)));
});
quo2.components.navigation.page_nav.left_section_view = (function quo2$components$navigation$page_nav$left_section_view(p__17220,put_middle_section_on_left_QMARK_){
var map__17221 = p__17220;
var map__17221__$1 = (((((!((map__17221 == null))))?(((((map__17221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17221):map__17221);
var on_press = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var accessibility_label = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var type = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grey","grey",1875582333));
var icon_background_color = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"icon-background-color","icon-background-color",-283586785));
var icon_override_theme = cljs.core.get.call(null,map__17221__$1,new cljs.core.Keyword(null,"icon-override-theme","icon-override-theme",1296020279));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(put_middle_section_on_left_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"icon","icon",1679606541),true,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),icon_override_theme,new cljs.core.Keyword(null,"override-background-color","override-background-color",1009064888),icon_background_color], null),icon], null)], null);
});
quo2.components.navigation.page_nav.mid_section_comp = (function quo2$components$navigation$page_nav$mid_section_comp(p__17233){
var map__17234 = p__17233;
var map__17234__$1 = (((((!((map__17234 == null))))?(((((map__17234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17234):map__17234);
var text_secondary_color = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"text-secondary-color","text-secondary-color",-1496146342));
var main_text = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"main-text","main-text",-742805026));
var description = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var description_user_icon = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"description-user-icon","description-user-icon",1297975623));
var text_color = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var horizontal_description_QMARK_ = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"horizontal-description?","horizontal-description?",1114644011));
var type = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var icon = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var description_img = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"description-img","description-img",609089972));
var align_mid_QMARK_ = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword(null,"align-mid?","align-mid?",19488247));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,quo2.components.navigation.page_nav.centrify_style,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"margin-horizontal","margin-horizontal",-1679305526),(2))], null),(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.not(horizontal_description_QMARK_))?(function (){var and__4115__auto__ = align_mid_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"text-with-description","text-with-description",-1242354023),type);
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = (function (){var or__4126__auto____$1 = description_img;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return description_user_icon;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(icon);
} else {
return and__4115__auto__;
}
}
})())?(cljs.core.truth_(description_img)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [description_img], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),description_user_icon], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(32),new cljs.core.Keyword(null,"height","height",1025178622),(32),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(32),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null)], null)):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),(cljs.core.truth_(horizontal_description_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521):new cljs.core.Keyword(null,"column","column",2078222095))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"line-height","line-height",1870784992),(21)], null)], null),main_text], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17250 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(4),new cljs.core.Keyword(null,"color","color",1011675173),text_secondary_color,new cljs.core.Keyword(null,"line-height","line-height",1870784992),(18)], null);
if(cljs.core.truth_(horizontal_description_QMARK_)){
return cljs.core.assoc.call(null,G__17250,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2));
} else {
return G__17250;
}
})()], null),description], null):null)], null)], null);
});
quo2.components.navigation.page_nav.mid_section_view = (function quo2$components$navigation$page_nav$mid_section_view(p__17252){
var map__17253 = p__17252;
var map__17253__$1 = (((((!((map__17253 == null))))?(((((map__17253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17253):map__17253);
var props = map__17253__$1;
var one_icon_align_left_QMARK_ = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"one-icon-align-left?","one-icon-align-left?",-1587818115));
var main_text = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"main-text","main-text",-742805026));
var on_press = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var horizontal_description_QMARK_ = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"horizontal-description?","horizontal-description?",1114644011));
var type = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var right_icon = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"right-icon","right-icon",-707506540));
var avatar = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307));
var left_icon = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"left-icon","left-icon",769524213));
var left_align_QMARK_ = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"left-align?","left-align?",1657399893));
var main_text_icon_color = cljs.core.get.call(null,map__17253__$1,new cljs.core.Keyword(null,"main-text-icon-color","main-text-icon-color",-642500714));
var text_color = ((quo2.foundations.colors.dark_QMARK_.call(null))?quo2.foundations.colors.neutral_5:quo2.foundations.colors.neutral_95);
var text_secondary_color = ((quo2.foundations.colors.dark_QMARK_.call(null))?quo2.foundations.colors.neutral_40:quo2.foundations.colors.neutral_50);
var component_instance = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.navigation.page_nav.mid_section_comp,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"text-secondary-color","text-secondary-color",-1496146342),text_secondary_color)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(left_align_QMARK_)?quo2.components.navigation.page_nav.align_left:quo2.components.navigation.page_nav.centrify_style),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(4),new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"center","center",-748944368)], null))], null),(function (){var G__17266 = type;
var G__17266__$1 = (((G__17266 instanceof cljs.core.Keyword))?G__17266.fqn:null);
switch (G__17266__$1) {
case "text-only":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),main_text], null);

break;
case "user-avatar":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,quo2.components.navigation.page_nav.centrify_style,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.avatars.user_avatar.view.user_avatar,avatar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(4),new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),main_text], null)], null);

break;
case "text-with-two-icons":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,quo2.components.navigation.page_nav.centrify_style,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,left_icon,quo2.components.navigation.page_nav.icon_props.call(null,main_text_icon_color,new cljs.core.Keyword(null,"big","big",903550151))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(4),new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),main_text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,right_icon,quo2.components.navigation.page_nav.icon_props.call(null,main_text_icon_color,new cljs.core.Keyword(null,"big","big",903550151))], null)], null);

break;
case "text-with-one-icon":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(cljs.core.truth_(one_icon_align_left_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(horizontal_description_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,left_icon,quo2.components.navigation.page_nav.icon_props.call(null,main_text_icon_color,new cljs.core.Keyword(null,"big","big",903550151))], null):null),component_instance], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),component_instance,(cljs.core.truth_(horizontal_description_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,left_icon,quo2.components.navigation.page_nav.icon_props.call(null,main_text_icon_color,new cljs.core.Keyword(null,"big","big",903550151))], null):null)], null))], null);

break;
case "text-with-description":
return component_instance;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17266__$1)].join('')));

}
})()], null)], null);
});
quo2.components.navigation.page_nav.right_section_view = (function quo2$components$navigation$page_nav$right_section_view(right_section_buttons){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,quo2.components.navigation.page_nav.centrify_style,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970))], null),(function (){var last_icon_index = (cljs.core.count.call(null,right_section_buttons) - (1));
return cljs.core.map_indexed.call(null,(function (index,p__17273){
var map__17274 = p__17273;
var map__17274__$1 = (((((!((map__17274 == null))))?(((((map__17274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17274):map__17274);
var icon = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_press = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var type = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grey","grey",1875582333));
var style = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var icon_override_theme = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"icon-override-theme","icon-override-theme",1296020279));
var icon_background_color = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"icon-background-color","icon-background-color",-283586785));
var accessibility_label = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var label = cljs.core.get.call(null,map__17274__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,(function (){var G__17280 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),((cljs.core._EQ_.call(null,index,last_icon_index))?(0):(8)))], null);
if(cljs.core.truth_(accessibility_label)){
return cljs.core.assoc.call(null,G__17280,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true);
} else {
return G__17280;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"icon","icon",1679606541),cljs.core.not(label),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"before","before",-1633692388),(cljs.core.truth_(label)?icon:null),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"override-theme","override-theme",1436796800),icon_override_theme,new cljs.core.Keyword(null,"override-background-color","override-background-color",1009064888),icon_background_color], null),(cljs.core.truth_(label)?label:icon)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
}),right_section_buttons);
})()], null);
});
/**
 * [page-nav opts]
 * opts
 * { :one-icon-align-left?    true/false
 *   :horizontal-description? true/false
 *   :align-mid?              true/false
 *   :page-nav-color          color
 *   :page-nav-background-uri image-uri
 *   :mid-section
 *   {:type                  one-of :text-only :text-with-two-icons :text-with-one-icon :text-with-description :user-avatar
 *    :icon                  icon
 *    :main-text             string
 *    :left-icon             icon
 *    :right-icon            icon
 *    :description           string
 *    :description-color     color
 *    :description-icon      icon
 *    :description-user-icon icon
 *    :description-img a render prop which will be used in place of :description-user-icon
 *    :main-text-icon-color  color
 *   }
 *   :left-section
 *   {:type                  button-type
 *    :on-press              event
 *    :icon                  icon
 *    :icon-override-theme   :light/:dark
 *   }
 *   :right-section-buttons vector of
 *    {:type                  button-type
 *     :on-press              event
 *     :icon                  icon
 *     :icon-override-theme   :light/:dark
 *    }
 * }
 *   
 */
quo2.components.navigation.page_nav.page_nav = (function quo2$components$navigation$page_nav$page_nav(p__17288){
var map__17289 = p__17288;
var map__17289__$1 = (((((!((map__17289 == null))))?(((((map__17289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17289):map__17289);
var container_style = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var one_icon_align_left_QMARK_ = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"one-icon-align-left?","one-icon-align-left?",-1587818115));
var right_section_buttons = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"right-section-buttons","right-section-buttons",940734975));
var left_section = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"left-section","left-section",1725153983));
var mid_section = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"mid-section","mid-section",-1624762137));
var horizontal_description_QMARK_ = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"horizontal-description?","horizontal-description?",1114644011));
var page_nav_background_uri = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"page-nav-background-uri","page-nav-background-uri",726511213));
var page_nav_color = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"page-nav-color","page-nav-color",-599516144));
var align_mid_QMARK_ = cljs.core.get.call(null,map__17289__$1,new cljs.core.Keyword(null,"align-mid?","align-mid?",19488247));
var put_middle_section_on_left_QMARK_ = (function (){var or__4126__auto__ = align_mid_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (cljs.core.count.call(null,right_section_buttons) > (1));
}
})();
var mid_section_props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"horizontal-description?","horizontal-description?",1114644011),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"description-img","description-img",609089972),new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),new cljs.core.Keyword(null,"avatar","avatar",-1607499307),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),new cljs.core.Keyword(null,"main-text-icon-color","main-text-icon-color",-642500714),new cljs.core.Keyword(null,"one-icon-align-left?","one-icon-align-left?",-1587818115),new cljs.core.Keyword(null,"main-text","main-text",-742805026)],[horizontal_description_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"description-img","description-img",609089972).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"right-icon","right-icon",-707506540).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"left-icon","left-icon",769524213).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"main-text-icon-color","main-text-icon-color",-642500714).cljs$core$IFn$_invoke$arity$1(mid_section),one_icon_align_left_QMARK_,new cljs.core.Keyword(null,"main-text","main-text",-742805026).cljs$core$IFn$_invoke$arity$1(mid_section)]);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17297 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20),new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null),container_style);
var G__17297__$1 = (cljs.core.truth_(page_nav_background_uri)?cljs.core.assoc.call(null,G__17297,new cljs.core.Keyword(null,"background-color","background-color",570434026),page_nav_color):G__17297);
if(cljs.core.truth_(page_nav_color)){
return cljs.core.assoc.call(null,G__17297__$1,new cljs.core.Keyword(null,"background","background",-863952629),page_nav_background_uri);
} else {
return G__17297__$1;
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(left_section)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.navigation.page_nav.left_section_view,left_section,put_middle_section_on_left_QMARK_], null):null),(cljs.core.truth_(mid_section)?(cljs.core.truth_(put_middle_section_on_left_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.navigation.page_nav.mid_section_view,cljs.core.assoc.call(null,mid_section_props,new cljs.core.Keyword(null,"left-align?","left-align?",1657399893),true,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"description-color","description-color",-491370439),new cljs.core.Keyword(null,"description-color","description-color",-491370439).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"description-icon","description-icon",105462698),new cljs.core.Keyword(null,"description-icon","description-icon",105462698).cljs$core$IFn$_invoke$arity$1(mid_section),new cljs.core.Keyword(null,"align-mid?","align-mid?",19488247),align_mid_QMARK_,new cljs.core.Keyword(null,"description-user-icon","description-user-icon",1297975623),new cljs.core.Keyword(null,"description-user-icon","description-user-icon",1297975623).cljs$core$IFn$_invoke$arity$1(mid_section))], null):((cljs.core.not(put_middle_section_on_left_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.navigation.page_nav.mid_section_view,mid_section_props], null):null)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.navigation.page_nav.right_section_view,right_section_buttons], null)], null);
});
Object.defineProperty(module.exports, "mid_section_comp", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.mid_section_comp; } });
Object.defineProperty(module.exports, "big_QMARK_", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.big_QMARK_; } });
Object.defineProperty(module.exports, "left_section_view", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.left_section_view; } });
Object.defineProperty(module.exports, "centrify_style", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.centrify_style; } });
Object.defineProperty(module.exports, "right_section_view", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.right_section_view; } });
Object.defineProperty(module.exports, "align_left", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.align_left; } });
Object.defineProperty(module.exports, "mid_section_view", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.mid_section_view; } });
Object.defineProperty(module.exports, "icon_props", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.icon_props; } });
Object.defineProperty(module.exports, "page_nav", { enumerable: false, get: function() { return quo2.components.navigation.page_nav.page_nav; } });
//# sourceMappingURL=quo2.components.navigation.page_nav.js.map
