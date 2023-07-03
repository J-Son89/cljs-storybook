var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.components.buttons.button.js");
require("./quo2.components.links.link_preview.style.js");
require("./quo2.components.markdown.text.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.links.link_preview.view.js");

goog.provide('quo2.components.links.link_preview.view');
quo2.components.links.link_preview.view.button_disabled = (function quo2$components$links$link_preview$view$button_disabled(disabled_text,on_enable){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.buttons.button.button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword("i","reveal","i/reveal",-131374321),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grey","grey",1875582333),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_enable,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"button-enable-preview","button-enable-preview",1666883218)], null),disabled_text], null);
});
quo2.components.links.link_preview.view.description_comp = (function quo2$components$links$link_preview$view$description_comp(description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(3),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description], null);
});
quo2.components.links.link_preview.view.link_comp = (function quo2$components$links$link_preview$view$link_comp(link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-2","paragraph-2",-1910853103),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.link_preview.style.link.call(null),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"link","link",-1769163468)], null),link], null);
});
quo2.components.links.link_preview.view.title_comp = (function quo2$components$links$link_preview$view$title_comp(title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.markdown.text.text,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"paragraph-1","paragraph-1",600732200),new cljs.core.Keyword(null,"number-of-lines","number-of-lines",-2067612161),(1),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"semi-bold","semi-bold",1938697029),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.link_preview.style.title,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"title","title",636505583)], null),title], null);
});
quo2.components.links.link_preview.view.thumbnail_comp = (function quo2$components$links$link_preview$view$thumbnail_comp(thumbnail,size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.link_preview.style.thumbnail.call(null,size),new cljs.core.Keyword(null,"source","source",-433931539),((typeof thumbnail === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),thumbnail], null):thumbnail),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798)], null)], null);
});
quo2.components.links.link_preview.view.logo_comp = (function quo2$components$links$link_preview$view$logo_comp(logo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"logo","logo",1237980263),new cljs.core.Keyword(null,"source","source",-433931539),((typeof logo === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),logo], null):logo),new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.link_preview.style.logo], null)], null);
});
quo2.components.links.link_preview.view.view = (function quo2$components$links$link_preview$view$view(p__17189){
var map__17190 = p__17189;
var map__17190__$1 = (((((!((map__17190 == null))))?(((((map__17190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17190):map__17190);
var container_style = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var on_enable = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"on-enable","on-enable",-1827653892));
var description = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var thumbnail_size = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"thumbnail-size","thumbnail-size",1408774436));
var disabled_text = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"disabled-text","disabled-text",1246654021));
var logo = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var title = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"title","title",636505583));
var enabled_QMARK_ = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true);
var thumbnail = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798));
var link = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo2.components.links.link_preview.style.container.call(null,enabled_QMARK_),container_style),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"link-preview","link-preview",-1210485610)], null),(cljs.core.truth_(enabled_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo2.components.links.link_preview.style.header_container], null),(cljs.core.truth_(logo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.logo_comp,logo], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.title_comp,title], null)], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.description_comp,description], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.link_comp,link], null),(cljs.core.truth_(thumbnail)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.thumbnail_comp,thumbnail,thumbnail_size], null):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo2.components.links.link_preview.view.button_disabled,disabled_text,on_enable], null))], null);
});
Object.defineProperty(module.exports, "button_disabled", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.button_disabled; } });
Object.defineProperty(module.exports, "description_comp", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.description_comp; } });
Object.defineProperty(module.exports, "link_comp", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.link_comp; } });
Object.defineProperty(module.exports, "title_comp", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.title_comp; } });
Object.defineProperty(module.exports, "thumbnail_comp", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.thumbnail_comp; } });
Object.defineProperty(module.exports, "logo_comp", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.logo_comp; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return quo2.components.links.link_preview.view.view; } });
//# sourceMappingURL=quo2.components.links.link_preview.view.js.map
