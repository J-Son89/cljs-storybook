var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$$react_native_community$blur.js");
require("./shadow.js.shim.module$$react_native_community$clipboard.js");
require("./shadow.js.shim.module$$react_native_community$masked_view.js");
require("./shadow.js.shim.module$react.js");
require("./shadow.js.shim.module$react_native.js");
require("./shadow.js.shim.module$react_native_fast_image.js");
require("./shadow.js.shim.module$react_native_image_crop_picker.js");
require("./shadow.js.shim.module$react_native_linear_gradient.js");
require("./shadow.js.shim.module$react_native_navigation.js");
require("./quo.design_system.colors.js");
require("./reagent.core.js");
require("./utils.i18n.js");
require("./status_im.ui.components.typography.js");
require("./status_im.utils.platform.js");
require("./status_im.utils.utils.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.ui.components.react.js");

goog.provide('status_im.ui.components.react');
status_im.ui.components.react.native_modules = shadow.js.shim.module$react_native.NativeModules;
status_im.ui.components.react.app_state = shadow.js.shim.module$react_native.AppState;
status_im.ui.components.react.view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.View);
status_im.ui.components.react.scroll_view_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.ScrollView);
status_im.ui.components.react.keyboard_avoiding_view_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.KeyboardAvoidingView);
status_im.ui.components.react.text_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Text);
status_im.ui.components.react.text_input_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TextInput);
status_im.ui.components.react.image_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react.memo(shadow.js.shim.module$react_native.Image));
status_im.ui.components.react.fast_image_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_fast_image);
status_im.ui.components.react.image_get_size = (function status_im$ui$components$react$image_get_size(uri,callback){
return shadow.js.shim.module$react_native.Image.getSize(uri,callback);
});
status_im.ui.components.react.resolve_asset_source = (function status_im$ui$components$react$resolve_asset_source(uri){
return cljs.core.js__GT_clj.call(null,shadow.js.shim.module$react_native.Image.resolveAssetSource(uri),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
status_im.ui.components.react.linear_gradient = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native_linear_gradient.default);
status_im.ui.components.react.masked_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$$react_native_community$masked_view.default);
status_im.ui.components.react.blur_view = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$$react_native_community$blur.BlurView);
status_im.ui.components.react.valid_source_QMARK_ = (function status_im$ui$components$react$valid_source_QMARK_(source){
var or__4126__auto__ = (!(cljs.core.map_QMARK_.call(null,source)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.core.contains_QMARK_.call(null,source,new cljs.core.Keyword(null,"uri","uri",-774711847))));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if(cljs.core.contains_QMARK_.call(null,source,new cljs.core.Keyword(null,"uri","uri",-774711847))){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(source);
} else {
return false;
}
}
}
});
status_im.ui.components.react.image = (function status_im$ui$components$react$image(p__18859){
var map__18860 = p__18859;
var map__18860__$1 = (((((!((map__18860 == null))))?(((((map__18860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18860):map__18860);
var props = map__18860__$1;
var source = cljs.core.get.call(null,map__18860__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(status_im.ui.components.react.valid_source_QMARK_.call(null,source))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.image_class,props], null);
} else {
return null;
}
});
status_im.ui.components.react.switch_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Switch);
status_im.ui.components.react.switch$ = (function status_im$ui$components$react$switch(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.switch_class,props], null);
});
status_im.ui.components.react.touchable_highlight_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableHighlight);
status_im.ui.components.react.pressable_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.Pressable);
status_im.ui.components.react.touchable_without_feedback_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableWithoutFeedback);
status_im.ui.components.react.touchable_opacity_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.TouchableOpacity);
status_im.ui.components.react.activity_indicator_class = reagent.core.adapt_react_class.call(null,shadow.js.shim.module$react_native.ActivityIndicator);
status_im.ui.components.react.activity_indicator = (function status_im$ui$components$react$activity_indicator(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.activity_indicator_class,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173),(function (p1__18862_SHARP_){
var or__4126__auto__ = p1__18862_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return quo.design_system.colors.gray;
}
}))], null);
});
status_im.ui.components.react.small_loading_indicator = (function status_im$ui$components$react$small_loading_indicator(color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.activity_indicator,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"ios","ios",-778010715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"16","16",1354114028)], null)], null)], null);
});
status_im.ui.components.react.animated = shadow.js.shim.module$react_native.Animated;
status_im.ui.components.react.animated_view_class = reagent.core.adapt_react_class.call(null,status_im.ui.components.react.animated.View);
status_im.ui.components.react.animated_flat_list_class = reagent.core.adapt_react_class.call(null,status_im.ui.components.react.animated.FlatList);
status_im.ui.components.react.animated_scroll_view_class = reagent.core.adapt_react_class.call(null,status_im.ui.components.react.animated.ScrollView);
status_im.ui.components.react.animated_view = (function status_im$ui$components$react$animated_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18901 = arguments.length;
var i__4737__auto___18902 = (0);
while(true){
if((i__4737__auto___18902 < len__4736__auto___18901)){
args__4742__auto__.push((arguments[i__4737__auto___18902]));

var G__18903 = (i__4737__auto___18902 + (1));
i__4737__auto___18902 = G__18903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.animated_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.animated_view.cljs$core$IFn$_invoke$arity$variadic = (function (props,content){
return cljs.core.vec.call(null,cljs.core.conj.call(null,content,props,status_im.ui.components.react.animated_view_class));
}));

(status_im.ui.components.react.animated_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.animated_view.cljs$lang$applyTo = (function (seq18863){
var G__18864 = cljs.core.first.call(null,seq18863);
var seq18863__$1 = cljs.core.next.call(null,seq18863);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18864,seq18863__$1);
}));

status_im.ui.components.react.animated_scroll_view = (function status_im$ui$components$react$animated_scroll_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18904 = arguments.length;
var i__4737__auto___18905 = (0);
while(true){
if((i__4737__auto___18905 < len__4736__auto___18904)){
args__4742__auto__.push((arguments[i__4737__auto___18905]));

var G__18906 = (i__4737__auto___18905 + (1));
i__4737__auto___18905 = G__18906;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.animated_scroll_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.animated_scroll_view.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.vec.call(null,cljs.core.conj.call(null,children,props,status_im.ui.components.react.animated_scroll_view_class));
}));

(status_im.ui.components.react.animated_scroll_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.animated_scroll_view.cljs$lang$applyTo = (function (seq18865){
var G__18866 = cljs.core.first.call(null,seq18865);
var seq18865__$1 = cljs.core.next.call(null,seq18865);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18866,seq18865__$1);
}));

status_im.ui.components.react.dimensions = shadow.js.shim.module$react_native.Dimensions;
status_im.ui.components.react.keyboard = shadow.js.shim.module$react_native.Keyboard;
status_im.ui.components.react.dismiss_keyboard_BANG_ = (function status_im$ui$components$react$dismiss_keyboard_BANG_(){
return shadow.js.shim.module$react_native.Keyboard.dismiss();
});
status_im.ui.components.react.linking = shadow.js.shim.module$react_native.Linking;
status_im.ui.components.react.max_font_size_multiplier = 1.25;
status_im.ui.components.react.prepare_text_props = (function status_im$ui$components$react$prepare_text_props(props){
return cljs.core.assoc.call(null,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),status_im.ui.components.typography.get_style),new cljs.core.Keyword(null,"max-font-size-multiplier","max-font-size-multiplier",-248773415),status_im.ui.components.react.max_font_size_multiplier);
});
status_im.ui.components.react.prepare_nested_text_props = (function status_im$ui$components$react$prepare_nested_text_props(props){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),status_im.ui.components.typography.get_nested_style),new cljs.core.Keyword(null,"parseBasicMarkdown","parseBasicMarkdown",1047906724),true),new cljs.core.Keyword(null,"nested?","nested?",1182745618),true);
});
/**
 * For nested text elements, use nested-text instead
 */
status_im.ui.components.react.text = (function status_im$ui$components$react$text(var_args){
var G__18868 = arguments.length;
switch (G__18868) {
case 1:
return status_im.ui.components.react.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return status_im.ui.components.react.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.ui.components.react.text.cljs$core$IFn$_invoke$arity$1 = (function (text_element){
return status_im.ui.components.react.text.call(null,cljs.core.PersistentArrayMap.EMPTY,text_element);
}));

(status_im.ui.components.react.text.cljs$core$IFn$_invoke$arity$2 = (function (options,text_element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.text_class,status_im.ui.components.react.prepare_text_props.call(null,options),text_element], null);
}));

(status_im.ui.components.react.text.cljs$lang$maxFixedArity = 2);

/**
 * Returns nested text elements with proper styling and typography
 *   Do not use the nested? option, it is for internal usage of the function only
 */
status_im.ui.components.react.nested_text = (function status_im$ui$components$react$nested_text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18908 = arguments.length;
var i__4737__auto___18909 = (0);
while(true){
if((i__4737__auto___18909 < len__4736__auto___18908)){
args__4742__auto__.push((arguments[i__4737__auto___18909]));

var G__18911 = (i__4737__auto___18909 + (1));
i__4737__auto___18909 = G__18911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.nested_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.nested_text.cljs$core$IFn$_invoke$arity$variadic = (function (options,nested_text_elements){
var options_with_style = (cljs.core.truth_(new cljs.core.Keyword(null,"nested?","nested?",1182745618).cljs$core$IFn$_invoke$arity$1(options))?status_im.ui.components.react.prepare_nested_text_props.call(null,options):status_im.ui.components.react.prepare_text_props.call(null,options));
return cljs.core.reduce.call(null,(function (acc,text_element){
return cljs.core.conj.call(null,acc,((typeof text_element === 'string')?text_element:(function (){var vec__18874 = text_element;
var seq__18875 = cljs.core.seq.call(null,vec__18874);
var first__18876 = cljs.core.first.call(null,seq__18875);
var seq__18875__$1 = cljs.core.next.call(null,seq__18875);
var options__$1 = first__18876;
var nested_text_elements__$1 = seq__18875__$1;
return cljs.core.apply.call(null,status_im.ui.components.react.nested_text,status_im.ui.components.react.prepare_nested_text_props.call(null,options__$1),nested_text_elements__$1);
})()));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.text_class,cljs.core.dissoc.call(null,options_with_style,new cljs.core.Keyword(null,"nested?","nested?",1182745618))], null),nested_text_elements);
}));

(status_im.ui.components.react.nested_text.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.nested_text.cljs$lang$applyTo = (function (seq18872){
var G__18873 = cljs.core.first.call(null,seq18872);
var seq18872__$1 = cljs.core.next.call(null,seq18872);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18873,seq18872__$1);
}));

status_im.ui.components.react.text_input_refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
status_im.ui.components.react.text_input = (function status_im$ui$components$react$text_input(options,_){
var render_fn = (function (options__$1,text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.text_input_class,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"underline-color-android","underline-color-android",384791699),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"max-font-size-multiplier","max-font-size-multiplier",-248773415),status_im.ui.components.react.max_font_size_multiplier,new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),quo.design_system.colors.text_gray,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),utils.i18n.label(new cljs.core.Keyword("t","type-a-message","t/type-a-message",953224377)),new cljs.core.Keyword(null,"value","value",305978217),text], null),cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,options__$1,new cljs.core.Keyword(null,"preserve-input?","preserve-input?",97873964)),new cljs.core.Keyword(null,"style","style",-496642736),status_im.ui.components.typography.get_style),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.dissoc,new cljs.core.Keyword(null,"line-height","line-height",1870784992)))], null);
});
if(cljs.core.truth_(new cljs.core.Keyword(null,"preserve-input?","preserve-input?",97873964).cljs$core$IFn$_invoke$arity$1(options))){
return render_fn;
} else {
var input_ref = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,input_ref))){
return cljs.core.swap_BANG_.call(null,status_im.ui.components.react.text_input_refs,cljs.core.dissoc,cljs.core.deref.call(null,input_ref));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (options__$1,text){
return render_fn(cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
if(cljs.core.truth_((function (){var and__4115__auto__ = r;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.deref.call(null,input_ref) == null);
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,status_im.ui.components.react.text_input_refs,cljs.core.assoc,r,new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(options__$1));
} else {
}

cljs.core.reset_BANG_.call(null,input_ref,r);

if(cljs.core.truth_(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options__$1))){
return new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(options__$1).call(null,r);
} else {
return null;
}
})),text);
})], null));
}
});
status_im.ui.components.react.i18n_text = (function status_im$ui$components$react$i18n_text(p__18877){
var map__18878 = p__18877;
var map__18878__$1 = (((((!((map__18878 == null))))?(((((map__18878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18878):map__18878);
var style = cljs.core.get.call(null,map__18878__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var key = cljs.core.get.call(null,map__18878__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),utils.i18n.label(key)], null);
});
status_im.ui.components.react.touchable_opacity = (function status_im$ui$components$react$touchable_opacity(props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.touchable_opacity_class,props,content], null);
});
status_im.ui.components.react.touchable_highlight = (function status_im$ui$components$react$touchable_highlight(props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.touchable_highlight_class,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),props),content], null);
});
status_im.ui.components.react.pressable = (function status_im$ui$components$react$pressable(props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.pressable_class,props,content], null);
});
status_im.ui.components.react.touchable_without_feedback = (function status_im$ui$components$react$touchable_without_feedback(props,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.touchable_without_feedback_class,props,content], null);
});
status_im.ui.components.react.get_dimensions = (function status_im$ui$components$react$get_dimensions(name){
return cljs.core.js__GT_clj.call(null,status_im.ui.components.react.dimensions.get(name),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
status_im.ui.components.react.show_access_error = (function status_im$ui$components$react$show_access_error(o){
if(cljs.core._EQ_.call(null,"E_PERMISSION_MISSING",o.code)){
return status_im.utils.utils.show_popup.call(null,utils.i18n.label(new cljs.core.Keyword("t","error","t/error",-978968148)),utils.i18n.label(new cljs.core.Keyword("t","photos-access-error","t/photos-access-error",1253012056)));
} else {
return null;
}
});
status_im.ui.components.react.show_image_picker = (function status_im$ui$components$react$show_image_picker(var_args){
var G__18881 = arguments.length;
switch (G__18881) {
case 1:
return status_im.ui.components.react.show_image_picker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return status_im.ui.components.react.show_image_picker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.ui.components.react.show_image_picker.cljs$core$IFn$_invoke$arity$1 = (function (images_fn){
return status_im.ui.components.react.show_image_picker.call(null,images_fn,null);
}));

(status_im.ui.components.react.show_image_picker.cljs$core$IFn$_invoke$arity$2 = (function (images_fn,p__18882){
var map__18883 = p__18882;
var map__18883__$1 = (((((!((map__18883 == null))))?(((((map__18883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18883):map__18883);
var props = map__18883__$1;
var media_type = cljs.core.get.call(null,map__18883__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129),"any");
return shadow.js.shim.module$react_native_image_crop_picker.default.openPicker(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mediaType","mediaType",272273903),media_type], null),props))).then(images_fn).catch(status_im.ui.components.react.show_access_error);
}));

(status_im.ui.components.react.show_image_picker.cljs$lang$maxFixedArity = 2);

status_im.ui.components.react.show_image_picker_camera = (function status_im$ui$components$react$show_image_picker_camera(var_args){
var G__18886 = arguments.length;
switch (G__18886) {
case 1:
return status_im.ui.components.react.show_image_picker_camera.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return status_im.ui.components.react.show_image_picker_camera.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.ui.components.react.show_image_picker_camera.cljs$core$IFn$_invoke$arity$1 = (function (images_fn){
return status_im.ui.components.react.show_image_picker_camera.call(null,images_fn,null);
}));

(status_im.ui.components.react.show_image_picker_camera.cljs$core$IFn$_invoke$arity$2 = (function (images_fn,props){
return shadow.js.shim.module$react_native_image_crop_picker.default.openCamera(cljs.core.clj__GT_js.call(null,props)).then(images_fn).catch(status_im.ui.components.react.show_access_error);
}));

(status_im.ui.components.react.show_image_picker_camera.cljs$lang$maxFixedArity = 2);

status_im.ui.components.react.sharing = shadow.js.shim.module$react_native.Share;
status_im.ui.components.react.copy_to_clipboard = (function status_im$ui$components$react$copy_to_clipboard(text){
return shadow.js.shim.module$$react_native_community$clipboard.default.setString(text);
});
status_im.ui.components.react.get_from_clipboard = (function status_im$ui$components$react$get_from_clipboard(clbk){
var clipboard_contents = shadow.js.shim.module$$react_native_community$clipboard.default.getString();
return clipboard_contents.then((function (p1__18887_SHARP_){
return clbk.call(null,p1__18887_SHARP_);
}));
});
status_im.ui.components.react.navigation_const = cljs.core.atom.call(null,null);
shadow.js.shim.module$react_native_navigation.Navigation.constants().then((function (consts){
return cljs.core.reset_BANG_.call(null,status_im.ui.components.react.navigation_const,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-bar-height","top-bar-height",234123751),consts.topBarHeight,new cljs.core.Keyword(null,"bottom-tabs-height","bottom-tabs-height",-1011199138),consts.bottomTabsHeight,new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666),consts.statusBarHeight], null));
}));
status_im.ui.components.react.keyboard_avoiding_view = (function status_im$ui$components$react$keyboard_avoiding_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18923 = arguments.length;
var i__4737__auto___18924 = (0);
while(true){
if((i__4737__auto___18924 < len__4736__auto___18923)){
args__4742__auto__.push((arguments[i__4737__auto___18924]));

var G__18925 = (i__4737__auto___18924 + (1));
i__4737__auto___18924 = G__18925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.keyboard_avoiding_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.keyboard_avoiding_view.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.keyboard_avoiding_view_class,cljs.core.merge.call(null,((status_im.utils.platform.ios_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"padding","padding",1660304693)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-offset","ignore-offset",1915575097).cljs$core$IFn$_invoke$arity$1(props))?props:cljs.core.update.call(null,props,new cljs.core.Keyword(null,"keyboardVerticalOffset","keyboardVerticalOffset",1451527608),cljs.core._PLUS_,(44),new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,status_im.ui.components.react.navigation_const)))))], null),children);
}));

(status_im.ui.components.react.keyboard_avoiding_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.keyboard_avoiding_view.cljs$lang$applyTo = (function (seq18888){
var G__18889 = cljs.core.first.call(null,seq18888);
var seq18888__$1 = cljs.core.next.call(null,seq18888);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18889,seq18888__$1);
}));

status_im.ui.components.react.keyboard_avoiding_view_new = (function status_im$ui$components$react$keyboard_avoiding_view_new(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18926 = arguments.length;
var i__4737__auto___18927 = (0);
while(true){
if((i__4737__auto___18927 < len__4736__auto___18926)){
args__4742__auto__.push((arguments[i__4737__auto___18927]));

var G__18929 = (i__4737__auto___18927 + (1));
i__4737__auto___18927 = G__18929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.keyboard_avoiding_view_new.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.keyboard_avoiding_view_new.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.keyboard_avoiding_view_class,cljs.core.merge.call(null,((status_im.utils.platform.ios_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"padding","padding",1660304693)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-offset","ignore-offset",1915575097).cljs$core$IFn$_invoke$arity$1(props))?props:cljs.core.update.call(null,props,new cljs.core.Keyword(null,"keyboardVerticalOffset","keyboardVerticalOffset",1451527608),cljs.core._PLUS_,(44))))], null),children);
}));

(status_im.ui.components.react.keyboard_avoiding_view_new.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.keyboard_avoiding_view_new.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first.call(null,seq18890);
var seq18890__$1 = cljs.core.next.call(null,seq18890);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18891,seq18890__$1);
}));

status_im.ui.components.react.scroll_view = (function status_im$ui$components$react$scroll_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18930 = arguments.length;
var i__4737__auto___18931 = (0);
while(true){
if((i__4737__auto___18931 < len__4736__auto___18930)){
args__4742__auto__.push((arguments[i__4737__auto___18931]));

var G__18932 = (i__4737__auto___18931 + (1));
i__4737__auto___18931 = G__18932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return status_im.ui.components.react.scroll_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(status_im.ui.components.react.scroll_view.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.vec.call(null,cljs.core.conj.call(null,children,props,status_im.ui.components.react.scroll_view_class));
}));

(status_im.ui.components.react.scroll_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(status_im.ui.components.react.scroll_view.cljs$lang$applyTo = (function (seq18892){
var G__18893 = cljs.core.first.call(null,seq18892);
var seq18892__$1 = cljs.core.next.call(null,seq18892);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18893,seq18892__$1);
}));

status_im.ui.components.react.with_activity_indicator = (function status_im$ui$components$react$with_activity_indicator(p__18895,comp){
var map__18896 = p__18895;
var map__18896__$1 = (((((!((map__18896 == null))))?(((((map__18896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18896):map__18896);
var timeout = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var style = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var enabled_QMARK_ = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var preview = cljs.core.get.call(null,map__18896__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var loading = reagent.core.atom.call(null,true);
return reagent.core.create_class.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function() { 
var G__18935__delegate = function (args18894){
return cljs.core.apply.call(null,(function (){
if((((timeout == null)) || (((100) > timeout)))){
return cljs.core.reset_BANG_.call(null,loading,false);
} else {
return status_im.utils.utils.set_timeout.call(null,(function (){
return cljs.core.reset_BANG_.call(null,loading,false);
}),timeout);
}
}),args18894);
};
var G__18935 = function (var_args){
var args18894 = null;
if (arguments.length > 0) {
var G__18937__i = 0, G__18937__a = new Array(arguments.length -  0);
while (G__18937__i < G__18937__a.length) {G__18937__a[G__18937__i] = arguments[G__18937__i + 0]; ++G__18937__i;}
  args18894 = new cljs.core.IndexedSeq(G__18937__a,0,null);
} 
return G__18935__delegate.call(this,args18894);};
G__18935.cljs$lang$maxFixedArity = 0;
G__18935.cljs$lang$applyTo = (function (arglist__18939){
var args18894 = cljs.core.seq(arglist__18939);
return G__18935__delegate(args18894);
});
G__18935.cljs$core$IFn$_invoke$arity$variadic = G__18935__delegate;
return G__18935;
})()
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__18898,comp__$1){
var map__18899 = p__18898;
var map__18899__$1 = (((((!((map__18899 == null))))?(((((map__18899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18899):map__18899);
var timeout__$1 = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var style__$1 = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var enabled_QMARK___$1 = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
var preview__$1 = cljs.core.get.call(null,map__18899__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
if(cljs.core.truth_(((cljs.core.not(enabled_QMARK___$1))?cljs.core.deref.call(null,loading):false))){
var or__4126__auto__ = preview__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4126__auto____$1 = style__$1;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.activity_indicator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animating","animating",-109443106),true], null)], null)], null);
}
} else {
return comp__$1;
}
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),cljs.core.name.call(null,new cljs.core.Symbol(null,"with-activity-indicator","with-activity-indicator",1485099426,null))], null)));
});
status_im.ui.components.react.hw_back_add_listener = (function status_im$ui$components$react$hw_back_add_listener(callback){
return shadow.js.shim.module$react_native.BackHandler.addEventListener("hardwareBackPress",callback);
});
status_im.ui.components.react.hw_back_remove_listener = (function status_im$ui$components$react$hw_back_remove_listener(callback){
return shadow.js.shim.module$react_native.BackHandler.removeEventListener("hardwareBackPress",callback);
});
Object.defineProperty(module.exports, "prepare_text_props", { enumerable: false, get: function() { return status_im.ui.components.react.prepare_text_props; } });
Object.defineProperty(module.exports, "max_font_size_multiplier", { enumerable: false, get: function() { return status_im.ui.components.react.max_font_size_multiplier; } });
Object.defineProperty(module.exports, "text_input_class", { enumerable: false, get: function() { return status_im.ui.components.react.text_input_class; } });
Object.defineProperty(module.exports, "i18n_text", { enumerable: false, get: function() { return status_im.ui.components.react.i18n_text; } });
Object.defineProperty(module.exports, "with_activity_indicator", { enumerable: false, get: function() { return status_im.ui.components.react.with_activity_indicator; } });
Object.defineProperty(module.exports, "small_loading_indicator", { enumerable: false, get: function() { return status_im.ui.components.react.small_loading_indicator; } });
Object.defineProperty(module.exports, "touchable_opacity_class", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_opacity_class; } });
Object.defineProperty(module.exports, "animated_scroll_view_class", { enumerable: false, get: function() { return status_im.ui.components.react.animated_scroll_view_class; } });
Object.defineProperty(module.exports, "copy_to_clipboard", { enumerable: false, get: function() { return status_im.ui.components.react.copy_to_clipboard; } });
Object.defineProperty(module.exports, "keyboard_avoiding_view_new", { enumerable: false, get: function() { return status_im.ui.components.react.keyboard_avoiding_view_new; } });
Object.defineProperty(module.exports, "touchable_without_feedback", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_without_feedback; } });
Object.defineProperty(module.exports, "switch$", { enumerable: false, get: function() { return status_im.ui.components.react.switch$; } });
Object.defineProperty(module.exports, "pressable", { enumerable: false, get: function() { return status_im.ui.components.react.pressable; } });
Object.defineProperty(module.exports, "view", { enumerable: false, get: function() { return status_im.ui.components.react.view; } });
Object.defineProperty(module.exports, "animated_flat_list_class", { enumerable: false, get: function() { return status_im.ui.components.react.animated_flat_list_class; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return status_im.ui.components.react.text; } });
Object.defineProperty(module.exports, "animated_view_class", { enumerable: false, get: function() { return status_im.ui.components.react.animated_view_class; } });
Object.defineProperty(module.exports, "hw_back_add_listener", { enumerable: false, get: function() { return status_im.ui.components.react.hw_back_add_listener; } });
Object.defineProperty(module.exports, "activity_indicator_class", { enumerable: false, get: function() { return status_im.ui.components.react.activity_indicator_class; } });
Object.defineProperty(module.exports, "linking", { enumerable: false, get: function() { return status_im.ui.components.react.linking; } });
Object.defineProperty(module.exports, "pressable_class", { enumerable: false, get: function() { return status_im.ui.components.react.pressable_class; } });
Object.defineProperty(module.exports, "scroll_view_class", { enumerable: false, get: function() { return status_im.ui.components.react.scroll_view_class; } });
Object.defineProperty(module.exports, "keyboard", { enumerable: false, get: function() { return status_im.ui.components.react.keyboard; } });
Object.defineProperty(module.exports, "keyboard_avoiding_view", { enumerable: false, get: function() { return status_im.ui.components.react.keyboard_avoiding_view; } });
Object.defineProperty(module.exports, "activity_indicator", { enumerable: false, get: function() { return status_im.ui.components.react.activity_indicator; } });
Object.defineProperty(module.exports, "animated_scroll_view", { enumerable: false, get: function() { return status_im.ui.components.react.animated_scroll_view; } });
Object.defineProperty(module.exports, "get_from_clipboard", { enumerable: false, get: function() { return status_im.ui.components.react.get_from_clipboard; } });
Object.defineProperty(module.exports, "blur_view", { enumerable: false, get: function() { return status_im.ui.components.react.blur_view; } });
Object.defineProperty(module.exports, "animated_view", { enumerable: false, get: function() { return status_im.ui.components.react.animated_view; } });
Object.defineProperty(module.exports, "masked_view", { enumerable: false, get: function() { return status_im.ui.components.react.masked_view; } });
Object.defineProperty(module.exports, "linear_gradient", { enumerable: false, get: function() { return status_im.ui.components.react.linear_gradient; } });
Object.defineProperty(module.exports, "text_class", { enumerable: false, get: function() { return status_im.ui.components.react.text_class; } });
Object.defineProperty(module.exports, "scroll_view", { enumerable: false, get: function() { return status_im.ui.components.react.scroll_view; } });
Object.defineProperty(module.exports, "touchable_highlight", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_highlight; } });
Object.defineProperty(module.exports, "show_access_error", { enumerable: false, get: function() { return status_im.ui.components.react.show_access_error; } });
Object.defineProperty(module.exports, "resolve_asset_source", { enumerable: false, get: function() { return status_im.ui.components.react.resolve_asset_source; } });
Object.defineProperty(module.exports, "touchable_without_feedback_class", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_without_feedback_class; } });
Object.defineProperty(module.exports, "switch_class", { enumerable: false, get: function() { return status_im.ui.components.react.switch_class; } });
Object.defineProperty(module.exports, "animated", { enumerable: false, get: function() { return status_im.ui.components.react.animated; } });
Object.defineProperty(module.exports, "native_modules", { enumerable: false, get: function() { return status_im.ui.components.react.native_modules; } });
Object.defineProperty(module.exports, "hw_back_remove_listener", { enumerable: false, get: function() { return status_im.ui.components.react.hw_back_remove_listener; } });
Object.defineProperty(module.exports, "get_dimensions", { enumerable: false, get: function() { return status_im.ui.components.react.get_dimensions; } });
Object.defineProperty(module.exports, "nested_text", { enumerable: false, get: function() { return status_im.ui.components.react.nested_text; } });
Object.defineProperty(module.exports, "valid_source_QMARK_", { enumerable: false, get: function() { return status_im.ui.components.react.valid_source_QMARK_; } });
Object.defineProperty(module.exports, "fast_image_class", { enumerable: false, get: function() { return status_im.ui.components.react.fast_image_class; } });
Object.defineProperty(module.exports, "sharing", { enumerable: false, get: function() { return status_im.ui.components.react.sharing; } });
Object.defineProperty(module.exports, "image_get_size", { enumerable: false, get: function() { return status_im.ui.components.react.image_get_size; } });
Object.defineProperty(module.exports, "dismiss_keyboard_BANG_", { enumerable: false, get: function() { return status_im.ui.components.react.dismiss_keyboard_BANG_; } });
Object.defineProperty(module.exports, "show_image_picker_camera", { enumerable: false, get: function() { return status_im.ui.components.react.show_image_picker_camera; } });
Object.defineProperty(module.exports, "dimensions", { enumerable: false, get: function() { return status_im.ui.components.react.dimensions; } });
Object.defineProperty(module.exports, "touchable_highlight_class", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_highlight_class; } });
Object.defineProperty(module.exports, "keyboard_avoiding_view_class", { enumerable: false, get: function() { return status_im.ui.components.react.keyboard_avoiding_view_class; } });
Object.defineProperty(module.exports, "show_image_picker", { enumerable: false, get: function() { return status_im.ui.components.react.show_image_picker; } });
Object.defineProperty(module.exports, "app_state", { enumerable: false, get: function() { return status_im.ui.components.react.app_state; } });
Object.defineProperty(module.exports, "navigation_const", { enumerable: false, get: function() { return status_im.ui.components.react.navigation_const; } });
Object.defineProperty(module.exports, "prepare_nested_text_props", { enumerable: false, get: function() { return status_im.ui.components.react.prepare_nested_text_props; } });
Object.defineProperty(module.exports, "text_input_refs", { enumerable: false, get: function() { return status_im.ui.components.react.text_input_refs; } });
Object.defineProperty(module.exports, "image_class", { enumerable: false, get: function() { return status_im.ui.components.react.image_class; } });
Object.defineProperty(module.exports, "text_input", { enumerable: false, get: function() { return status_im.ui.components.react.text_input; } });
Object.defineProperty(module.exports, "touchable_opacity", { enumerable: false, get: function() { return status_im.ui.components.react.touchable_opacity; } });
Object.defineProperty(module.exports, "image", { enumerable: false, get: function() { return status_im.ui.components.react.image; } });
//# sourceMappingURL=status_im.ui.components.react.js.map
