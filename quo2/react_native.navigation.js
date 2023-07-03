var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native_navigation.js");
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

$CLJS.SHADOW_ENV.setLoaded("react_native.navigation.js");

goog.provide('react_native.navigation');
react_native.navigation.set_default_options = (function react_native$navigation$set_default_options(opts){
return shadow.js.shim.module$react_native_navigation.Navigation.setDefaultOptions(cljs.core.clj__GT_js.call(null,opts));
});
react_native.navigation.register_component = (function react_native$navigation$register_component(arg1,arg2,arg3){
return shadow.js.shim.module$react_native_navigation.Navigation.registerComponent(arg1,arg2,arg3);
});
react_native.navigation.set_lazy_component_registrator = (function react_native$navigation$set_lazy_component_registrator(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.setLazyComponentRegistrator(handler);
});
react_native.navigation.set_root = (function react_native$navigation$set_root(root){
return shadow.js.shim.module$react_native_navigation.Navigation.setRoot(cljs.core.clj__GT_js.call(null,root));
});
react_native.navigation.set_stack_root = (function react_native$navigation$set_stack_root(stack,comp){
return shadow.js.shim.module$react_native_navigation.Navigation.setStackRoot(stack,cljs.core.clj__GT_js.call(null,comp));
});
react_native.navigation.push = (function react_native$navigation$push(arg1,arg2){
return shadow.js.shim.module$react_native_navigation.Navigation.push(arg1,cljs.core.clj__GT_js.call(null,arg2));
});
react_native.navigation.pop = (function react_native$navigation$pop(comp){
return shadow.js.shim.module$react_native_navigation.Navigation.pop(comp);
});
react_native.navigation.show_modal = (function react_native$navigation$show_modal(arg){
return shadow.js.shim.module$react_native_navigation.Navigation.showModal(cljs.core.clj__GT_js.call(null,arg));
});
react_native.navigation.dismiss_modal = (function react_native$navigation$dismiss_modal(comp){
return shadow.js.shim.module$react_native_navigation.Navigation.dismissModal(comp);
});
react_native.navigation.show_overlay = (function react_native$navigation$show_overlay(comp){
return shadow.js.shim.module$react_native_navigation.Navigation.showOverlay(cljs.core.clj__GT_js.call(null,comp));
});
react_native.navigation.pop_to_root = (function react_native$navigation$pop_to_root(tab){
return shadow.js.shim.module$react_native_navigation.Navigation.popToRoot(cljs.core.clj__GT_js.call(null,tab));
});
react_native.navigation.dissmiss_overlay = (function react_native$navigation$dissmiss_overlay(comp){
return shadow.js.shim.module$react_native_navigation.Navigation.dismissOverlay(comp).catch((function (){
return cljs.core.List.EMPTY;
}));
});
react_native.navigation.reg_app_launched_listener = (function react_native$navigation$reg_app_launched_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerAppLaunchedListener(handler);
});
react_native.navigation.reg_button_pressed_listener = (function react_native$navigation$reg_button_pressed_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerNavigationButtonPressedListener((function (evn){
return handler.call(null,evn.buttonId);
}));
});
react_native.navigation.reg_modal_dismissed_listener = (function react_native$navigation$reg_modal_dismissed_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerModalDismissedListener(handler);
});
react_native.navigation.reg_component_did_appear_listener = (function react_native$navigation$reg_component_did_appear_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerComponentDidAppearListener((function (evn){
return handler.call(null,cljs.core.keyword.call(null,evn.componentName));
}));
});
react_native.navigation.reg_component_did_disappear_listener = (function react_native$navigation$reg_component_did_disappear_listener(handler){
return shadow.js.shim.module$react_native_navigation.Navigation.events().registerComponentDidDisappearListener((function (evn){
return handler.call(null,evn.componentName);
}));
});
react_native.navigation.merge_options = (function react_native$navigation$merge_options(id,opts){
return shadow.js.shim.module$react_native_navigation.Navigation.mergeOptions(id,cljs.core.clj__GT_js.call(null,opts));
});
react_native.navigation.constants = cljs.core.atom.call(null,null);
react_native.navigation.status_bar_height = (function react_native$navigation$status_bar_height(){
return new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,react_native.navigation.constants));
});
shadow.js.shim.module$react_native_navigation.Navigation.constants().then((function (consts){
return cljs.core.reset_BANG_.call(null,react_native.navigation.constants,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-bar-height","top-bar-height",234123751),consts.topBarHeight,new cljs.core.Keyword(null,"bottom-tabs-height","bottom-tabs-height",-1011199138),consts.bottomTabsHeight,new cljs.core.Keyword(null,"status-bar-height","status-bar-height",-1927646666),consts.statusBarHeight], null));
}));
Object.defineProperty(module.exports, "set_stack_root", { enumerable: false, get: function() { return react_native.navigation.set_stack_root; } });
Object.defineProperty(module.exports, "reg_component_did_disappear_listener", { enumerable: false, get: function() { return react_native.navigation.reg_component_did_disappear_listener; } });
Object.defineProperty(module.exports, "dissmiss_overlay", { enumerable: false, get: function() { return react_native.navigation.dissmiss_overlay; } });
Object.defineProperty(module.exports, "pop_to_root", { enumerable: false, get: function() { return react_native.navigation.pop_to_root; } });
Object.defineProperty(module.exports, "constants", { enumerable: false, get: function() { return react_native.navigation.constants; } });
Object.defineProperty(module.exports, "register_component", { enumerable: false, get: function() { return react_native.navigation.register_component; } });
Object.defineProperty(module.exports, "set_root", { enumerable: false, get: function() { return react_native.navigation.set_root; } });
Object.defineProperty(module.exports, "set_default_options", { enumerable: false, get: function() { return react_native.navigation.set_default_options; } });
Object.defineProperty(module.exports, "reg_app_launched_listener", { enumerable: false, get: function() { return react_native.navigation.reg_app_launched_listener; } });
Object.defineProperty(module.exports, "push", { enumerable: false, get: function() { return react_native.navigation.push; } });
Object.defineProperty(module.exports, "reg_button_pressed_listener", { enumerable: false, get: function() { return react_native.navigation.reg_button_pressed_listener; } });
Object.defineProperty(module.exports, "pop", { enumerable: false, get: function() { return react_native.navigation.pop; } });
Object.defineProperty(module.exports, "merge_options", { enumerable: false, get: function() { return react_native.navigation.merge_options; } });
Object.defineProperty(module.exports, "set_lazy_component_registrator", { enumerable: false, get: function() { return react_native.navigation.set_lazy_component_registrator; } });
Object.defineProperty(module.exports, "reg_modal_dismissed_listener", { enumerable: false, get: function() { return react_native.navigation.reg_modal_dismissed_listener; } });
Object.defineProperty(module.exports, "show_overlay", { enumerable: false, get: function() { return react_native.navigation.show_overlay; } });
Object.defineProperty(module.exports, "dismiss_modal", { enumerable: false, get: function() { return react_native.navigation.dismiss_modal; } });
Object.defineProperty(module.exports, "reg_component_did_appear_listener", { enumerable: false, get: function() { return react_native.navigation.reg_component_did_appear_listener; } });
Object.defineProperty(module.exports, "status_bar_height", { enumerable: false, get: function() { return react_native.navigation.status_bar_height; } });
Object.defineProperty(module.exports, "show_modal", { enumerable: false, get: function() { return react_native.navigation.show_modal; } });
//# sourceMappingURL=react_native.navigation.js.map
