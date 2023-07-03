var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.icon.js");
require("./quo2.components.markdown.text.js");
require("./quo2.components.tags.base_tag.js");
require("./quo2.foundations.colors.js");
require("./quo2.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.tags.tag.js");

goog.provide('quo2.components.tags.tag');
quo2.components.tags.tag.themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_20,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_30,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.neutral_80_opa_10,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_20,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.neutral_80_opa_5,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.neutral_100], null)], null)], null)], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.white_opa_10,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_60,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.white_opa_20,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),quo2.foundations.colors.neutral_70,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229),quo2.foundations.colors.white_opa_10,new cljs.core.Keyword(null,"text-color","text-color",1728708298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),quo2.foundations.colors.white], null)], null)], null)], null)], null);
quo2.components.tags.tag.tag_resources = (function quo2$components$tags$tag$tag_resources(size,type,resource,icon_color,label,text_color,labelled_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),(cljs.core.truth_(label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(function (){var G__16755 = size;
switch (G__16755) {
case (32):
return (12);

break;
case (24):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16755)].join('')));

}
})()], null):null))], null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"icon","icon",1679606541)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.icon.icon,resource,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-style","container-style",-240535783),(cljs.core.truth_(label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null):null),new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__16756 = size;
switch (G__16756) {
case (32):
return (20);

break;
case (24):
return (12);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16756)].join('')));

}
})(),new cljs.core.Keyword(null,"color","color",1011675173),icon_color], null)], null):null),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"emoji","emoji",1031230144)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(4)], null),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__16757 = size;
switch (G__16757) {
case (32):
return new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200);

break;
case (24):
return new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103);

break;
default:
return null;

}
})()], null),resource], null):null),(cljs.core.truth_(labelled_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(function (){var G__16758 = size;
switch (G__16758) {
case (32):
return new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200);

break;
case (24):
return new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103);

break;
case (20):
return new cljs.core.Keyword(null,"label","label",1718410804);

break;
default:
return null;

}
})(),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1)], null),text_color),label], null):null)], null);
});
/**
 * opts
 * {:type         :icon/:emoji/:label
 *  :label        string
 *  :size         32/24
 *  :on-press     fn
 *  :blurred?     true/false 
 *  :resource     icon/image
 *  :labelled?    true/false
 *  :disabled?    true/false}
 *   
 * opts
 *  - `blurred`  boolean: use to determine border color if the background is blurred
 *  - `type`     can be icon or emoji with or without a tag label
 *  - `labelled` boolean: is true if tag has label else false
 */
quo2.components.tags.tag.tag = (function quo2$components$tags$tag$tag(_,___$1){
return (function (p__16762){
var map__16764 = p__16762;
var map__16764__$1 = (((((!((map__16764 == null))))?(((((map__16764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16764):map__16764);
var disabled_QMARK_ = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var override_theme = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"override-theme","override-theme",1436796800));
var on_press = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var icon_color = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"icon-color","icon-color",620934726));
var accessibility_label = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var blurred_QMARK_ = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"blurred?","blurred?",-53220885));
var type = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"size","size",1098693007),(32));
var active = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var labelled_QMARK_ = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908));
var label = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var resource = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
var state = (cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):(cljs.core.truth_(active)?new cljs.core.Keyword(null,"active","active",1895962068):new cljs.core.Keyword(null,"default","default",-1987822328)
));
var map__16766 = cljs.core.get_in.call(null,quo2.components.tags.tag.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = override_theme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo2.theme.get_theme.call(null);
}
})(),state], null));
var map__16766__$1 = (((((!((map__16766 == null))))?(((((map__16766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16766):map__16766);
var border_color = cljs.core.get.call(null,map__16766__$1,new cljs.core.Keyword(null,"border-color","border-color",-2059162761));
var blurred_border_color = cljs.core.get.call(null,map__16766__$1,new cljs.core.Keyword(null,"blurred-border-color","blurred-border-color",-771247229));
var text_color = cljs.core.get.call(null,map__16766__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.base_tag.base_tag,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"labelled?","labelled?",-1907816908),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[on_press,accessibility_label,type,size,(1),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"label","label",1718410804)))?true:labelled_QMARK_),id,(cljs.core.truth_(blurred_QMARK_)?blurred_border_color:border_color),disabled_QMARK_]),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.tags.tag.tag_resources,size,type,resource,icon_color,label,text_color,labelled_QMARK_], null)], null)], null);
});
});
Object.defineProperty(module.exports, "themes", { enumerable: false, get: function() { return quo2.components.tags.tag.themes; } });
Object.defineProperty(module.exports, "tag_resources", { enumerable: false, get: function() { return quo2.components.tags.tag.tag_resources; } });
Object.defineProperty(module.exports, "tag", { enumerable: false, get: function() { return quo2.components.tags.tag.tag; } });
//# sourceMappingURL=quo2.components.tags.tag.js.map
