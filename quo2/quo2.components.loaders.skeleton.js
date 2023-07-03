var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo2.foundations.colors.js");
require("./react_native.core.js");
require("./react_native.masked_view.js");
require("./react_native.reanimated.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo2.components.loaders.skeleton.js");

goog.provide('quo2.components.loaders.skeleton');
quo2.components.loaders.skeleton.message_skeleton_height = (54);
quo2.components.loaders.skeleton.avatar_skeleton_size = (32);
quo2.components.loaders.skeleton.message_content_width = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),(80),new cljs.core.Keyword(null,"message","message",-406056002),(249)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),(124),new cljs.core.Keyword(null,"message","message",-406056002),(156)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),(96),new cljs.core.Keyword(null,"message","message",-406056002),(212)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),(112),new cljs.core.Keyword(null,"message","message",-406056002),(144)], null)], null);
quo2.components.loaders.skeleton.f_message_skeleton = (function quo2$components$loaders$skeleton$f_message_skeleton(){
var color = quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_5,quo2.foundations.colors.neutral_70);
var loading_color = quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.neutral_10,quo2.foundations.colors.neutral_60);
var content_width = cljs.core.rand_nth.call(null,quo2.components.loaders.skeleton.message_content_width);
var author_width = content_width.call(null,new cljs.core.Keyword(null,"author","author",2111686192));
var message_width = content_width.call(null,new cljs.core.Keyword(null,"message","message",-406056002));
var map__17195 = react_native.core.get_window();
var map__17195__$1 = (((((!((map__17195 == null))))?(((((map__17195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17195):map__17195);
var window_width = cljs.core.get.call(null,map__17195__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var translate_x = react_native.reanimated.use_shared_value.call(null,(- window_width));
var animated_gradient_style = react_native.reanimated.apply_animations_to_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translateX","translateX",319703152),translate_x], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),window_width,new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null));
react_native.reanimated.animate_shared_value_with_repeat.call(null,translate_x,window_width,(1000),new cljs.core.Keyword(null,"linear","linear",872268697),(- (1)),false);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.masked_view.masked_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.loaders.skeleton.message_skeleton_height], null),new cljs.core.Keyword(null,"maskElement","maskElement",-22427542),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.loaders.skeleton.message_skeleton_height,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(11),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(21)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),quo2.components.loaders.skeleton.avatar_skeleton_size,new cljs.core.Keyword(null,"width","width",-384071477),quo2.components.loaders.skeleton.avatar_skeleton_size,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(quo2.components.loaders.skeleton.avatar_skeleton_size / (2)),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"width","width",-384071477),author_width,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(8),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"width","width",-384071477),message_width,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(6),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.reanimated.linear_gradient,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,color,loading_color,color,color], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"style","style",-496642736),animated_gradient_style], null)], null)], null)], null);
});
quo2.components.loaders.skeleton.skeleton = (function quo2$components$loaders$skeleton$skeleton(parent_height){
var number_of_skeletons = (Math.floor((parent_height / quo2.components.loaders.skeleton.message_skeleton_height)) | (0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),quo2.foundations.colors.theme_colors.call(null,quo2.foundations.colors.white,quo2.foundations.colors.neutral_90),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function quo2$components$loaders$skeleton$skeleton_$_iter__17204(s__17205){
return (new cljs.core.LazySeq(null,(function (){
var s__17205__$1 = s__17205;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__17205__$1);
if(temp__5735__auto__){
var s__17205__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17205__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__17205__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__17207 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__17206 = (0);
while(true){
if((i__17206 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__17206);
cljs.core.chunk_append.call(null,b__17207,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.loaders.skeleton.f_message_skeleton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)], null));

var G__17249 = (i__17206 + (1));
i__17206 = G__17249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17207),quo2$components$loaders$skeleton$skeleton_$_iter__17204.call(null,cljs.core.chunk_rest.call(null,s__17205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17207),null);
}
} else {
var n = cljs.core.first.call(null,s__17205__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),quo2.components.loaders.skeleton.f_message_skeleton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)], null),quo2$components$loaders$skeleton$skeleton_$_iter__17204.call(null,cljs.core.rest.call(null,s__17205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.call(null,number_of_skeletons));
})())], null);
});
Object.defineProperty(module.exports, "message_skeleton_height", { enumerable: false, get: function() { return quo2.components.loaders.skeleton.message_skeleton_height; } });
Object.defineProperty(module.exports, "avatar_skeleton_size", { enumerable: false, get: function() { return quo2.components.loaders.skeleton.avatar_skeleton_size; } });
Object.defineProperty(module.exports, "message_content_width", { enumerable: false, get: function() { return quo2.components.loaders.skeleton.message_content_width; } });
Object.defineProperty(module.exports, "f_message_skeleton", { enumerable: false, get: function() { return quo2.components.loaders.skeleton.f_message_skeleton; } });
Object.defineProperty(module.exports, "skeleton", { enumerable: false, get: function() { return quo2.components.loaders.skeleton.skeleton; } });
//# sourceMappingURL=quo2.components.loaders.skeleton.js.map
