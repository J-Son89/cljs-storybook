var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./quo2.components.drawers.action_drawers.style.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.drawers.action_drawers.view.js");

goog.provide('quo2.components.drawers.action_drawers.view');
quo2.components.drawers.action_drawers.view.get_icon_color = (function quo2$components$drawers$action_drawers$view$get_icon_color(danger_QMARK_,override_theme){
if(cljs.core.truth_(danger_QMARK_)){
return quo2.foundations.colors.danger_60;
} else {
return quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,override_theme);
}
});
quo2.components.drawers.action_drawers.view.divider = (function quo2$components$drawers$action_drawers$view$divider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.divider.call(null),new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"divider","divider",1265972657)], null)], null);
});
quo2.components.drawers.action_drawers.view.maybe_pressable = (function quo2$components$drawers$action_drawers$view$maybe_pressable(disabled_QMARK_,props,child){
if(cljs.core.truth_(disabled_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"on-press","on-press",-1763585856)),child], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.touchable_highlight,props,child], null);
}
});
quo2.components.drawers.action_drawers.view.action = (function quo2$components$drawers$action_drawers$view$action(p__16970){
var map__16971 = p__16970;
var map__16971__$1 = (((((!((map__16971 == null))))?(((((map__16971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16971):map__16971);
var action_props = map__16971__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var add_divider_QMARK_ = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"add-divider?","add-divider?",-483518500));
var right_text = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"right-text","right-text",2097694399));
var override_theme = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var on_press = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon_color = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var accessibility_label = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var danger_QMARK_ = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"danger?","danger?",181682216));
var sub_label = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"sub-label","sub-label",-1423649269));
var icon = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var right_icon = cljs.core.get.call(null,map__16971__$1,new cljs.core.Keyword(null,"right-icon","right-icon",-707506540));
if(cljs.core.truth_(action_props)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),(cljs.core.truth_(add_divider_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.action_drawers.view.divider], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.drawers.action_drawers.view.maybe_pressable,disabled_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.container.call(null,sub_label,disabled_QMARK_),new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_90,override_theme),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.row_container.call(null,sub_label)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"left-icon-for-action","left-icon-for-action",-573908720),new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.left_icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__4126__auto__ = icon_color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.components.drawers.action_drawers.view.get_icon_color.call(null,danger_QMARK_,override_theme);
}
})(),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.text_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(danger_QMARK_)?quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.danger_50,quo2.foundations.colors.danger_60,override_theme):quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_100,quo2.foundations.colors.white,override_theme)
)], null)], null),label], null),(cljs.core.truth_(sub_label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_50,quo2.foundations.colors.neutral_40,override_theme)], null)], null),sub_label], null):null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = right_text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return right_icon;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.right_side_container], null),(cljs.core.truth_(right_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"right-text-for-action","right-text-for-action",1076389745),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.right_text.call(null,override_theme)], null),right_text], null):null),(cljs.core.truth_(right_icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.drawers.action_drawers.style.right_icon,new cljs.core.Keyword(null,"accessible","accessible",-1730589797),true,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"right-icon-for-action","right-icon-for-action",195717743)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,right_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.components.drawers.action_drawers.view.get_icon_color.call(null,danger_QMARK_,override_theme),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null):null)], null):null)], null)], null)], null);
} else {
return null;
}
});
quo2.components.drawers.action_drawers.view.action_drawer = (function quo2$components$drawers$action_drawers$view$action_drawer(sections){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function quo2$components$drawers$action_drawers$view$action_drawer_$_iter__16978(s__16979){
return (new cljs.core.LazySeq(null,(function (){
var s__16979__$1 = s__16979;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__16979__$1);
if(temp__5735__auto__){
var s__16979__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16979__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16979__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16981 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16980 = (0);
while(true){
if((i__16980 < size__4528__auto__)){
var actions = cljs.core._nth(c__4527__auto__,i__16980);
cljs.core.chunk_append.call(null,b__16981,cljs.core.doall.call(null,cljs.core.map.call(null,quo2.components.drawers.action_drawers.view.action,actions)));

var G__16986 = (i__16980 + (1));
i__16980 = G__16986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16981),quo2$components$drawers$action_drawers$view$action_drawer_$_iter__16978.call(null,cljs.core.chunk_rest.call(null,s__16979__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16981),null);
}
} else {
var actions = cljs.core.first.call(null,s__16979__$2);
return cljs.core.cons.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,quo2.components.drawers.action_drawers.view.action,actions)),quo2$components$drawers$action_drawers$view$action_drawer_$_iter__16978.call(null,cljs.core.rest.call(null,s__16979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sections);
})())], null);
});
Object.defineProperty(module.exports, "get_icon_color", { enumerable: false, get: function() { return quo2.components.drawers.action_drawers.view.get_icon_color; } });
Object.defineProperty(module.exports, "divider", { enumerable: false, get: function() { return quo2.components.drawers.action_drawers.view.divider; } });
Object.defineProperty(module.exports, "maybe_pressable", { enumerable: false, get: function() { return quo2.components.drawers.action_drawers.view.maybe_pressable; } });
Object.defineProperty(module.exports, "action", { enumerable: false, get: function() { return quo2.components.drawers.action_drawers.view.action; } });
Object.defineProperty(module.exports, "action_drawer", { enumerable: false, get: function() { return quo2.components.drawers.action_drawers.view.action_drawer; } });
//# sourceMappingURL=quo2.components.drawers.action_drawers.view.js.map
