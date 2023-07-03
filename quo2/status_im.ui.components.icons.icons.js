var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./quo.design_system.colors.js");
require("./status_im.ui.components.react.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.ui.components.icons.icons.js");

goog.provide('status_im.ui.components.icons.icons');
status_im.ui.components.icons.icons.icons = cljs.core.PersistentHashMap.fromArrays(["checkmark","make-admin","buy-crypto","one-on-one-chat","more","desktop","message","appearance","gif","arrow-down","group-chat","tiny-snt","save","log-out","play","security24","back","next","token","hide","delete16","stickers","warning","wallet","tiny-reply","security","chevron-down","food","copy","tiny-group2","cancel","dapp","union-nfc","arrow-left","browser-context20","delete","reply","settings-advanced","settings","edit-connector","mobile-sync","paste","user-profile","total-members20","travel","dropdown-up","send","activity","download","node-offline","username","sticker-history","key","tribute-to-talk","edit-context20","add-circle","speech","max","info","notification2","profile","offline","faceid","arrow-right","dropdown","flags","camera","reorder-handle","objects","backspace","emojis","rotate-camera","tooltip-tip","scan2","tiny-sent","tiny-warning-background","mobile-sync-off","refresh","gas","tiny-lock-broken","browser","symbols","two-arrows","scan","forward","keycard","network","mailserver","check","show","commands","edit","manage-connections","tabs","address","tiny-muted","status","qr","pause","tiny-arrow-down","text","photo","mention","filter","account","animals-nature","favourite","stickers-big","keycard-account","in-contacts","close","keyboard","history","link","gallery","tiny-edit","chevron-right","share-default","keycard-logo-big","pin","total-members12","remove-circle","flash-active","help","arrow-up","private-chat","password","print","billfold","smileys","channel","mobile","communities","add-contact","channel-category","public-chat","tiny-warning","add","recent","flash","notification","tiny-group","tiny-public","language","checkmark-circle","tiny-pending","connector","search","tiny-new-contact","search2","remove-contact","tiny-delivered","receive","tiny-community","tiny-external","tiny-check","total-members16","tiny-lock","share","change","qr2","close-circle"],[require("../resources/images/icons/checkmark.png"),require("../resources/images/icons/make_admin.png"),require("../resources/images/icons/buy_crypto.png"),require("../resources/images/icons/one_on_one_chat.png"),require("../resources/images/icons/more.png"),require("../resources/images/icons/desktop.png"),require("../resources/images/icons/message.png"),require("../resources/images/icons/appearance.png"),require("../resources/images/icons/gif.png"),require("../resources/images/icons/arrow_down.png"),require("../resources/images/icons/group_chat.png"),require("../resources/images/icons/tiny_snt.png"),require("../resources/images/icons/save.png"),require("../resources/images/icons/log_out.png"),require("../resources/images/icons/play.png"),require("../resources/images/icons/security24.png"),require("../resources/images/icons/back.png"),require("../resources/images/icons/next.png"),require("../resources/images/icons/token.png"),require("../resources/images/icons/hide.png"),require("../resources/images/icons/delete16.png"),require("../resources/images/icons/stickers.png"),require("../resources/images/icons/warning.png"),require("../resources/images/icons/wallet.png"),require("../resources/images/icons/tiny_reply.png"),require("../resources/images/icons/security.png"),require("../resources/images/icons/chevron_down.png"),require("../resources/images/icons/food.png"),require("../resources/images/icons/copy.png"),require("../resources/images/icons/tiny_group2.png"),require("../resources/images/icons/cancel.png"),require("../resources/images/icons/dapp.png"),require("../resources/images/icons/union_nfc.png"),require("../resources/images/icons/arrow_left.png"),require("../resources/images/icons/browser_context20.png"),require("../resources/images/icons/delete.png"),require("../resources/images/icons/reply.png"),require("../resources/images/icons/settings_advanced.png"),require("../resources/images/icons/settings.png"),require("../resources/images/icons/edit_connector.png"),require("../resources/images/icons/mobile_sync.png"),require("../resources/images/icons/paste.png"),require("../resources/images/icons/user_profile.png"),require("../resources/images/icons/total_members20.png"),require("../resources/images/icons/travel.png"),require("../resources/images/icons/dropdown_up.png"),require("../resources/images/icons/send.png"),require("../resources/images/icons/activity.png"),require("../resources/images/icons/download.png"),require("../resources/images/icons/node_offline.png"),require("../resources/images/icons/username.png"),require("../resources/images/icons/sticker_history.png"),require("../resources/images/icons/key.png"),require("../resources/images/icons/tribute_to_talk.png"),require("../resources/images/icons/edit_context20.png"),require("../resources/images/icons/add_circle.png"),require("../resources/images/icons/speech.png"),require("../resources/images/icons/max.png"),require("../resources/images/icons/info.png"),require("../resources/images/icons/notification2.png"),require("../resources/images/icons/profile.png"),require("../resources/images/icons/offline.png"),require("../resources/images/icons/faceid.png"),require("../resources/images/icons/arrow_right.png"),require("../resources/images/icons/dropdown.png"),require("../resources/images/icons/flags.png"),require("../resources/images/icons/camera.png"),require("../resources/images/icons/reorder_handle.png"),require("../resources/images/icons/objects.png"),require("../resources/images/icons/backspace.png"),require("../resources/images/icons/emojis.png"),require("../resources/images/icons/rotate_camera.png"),require("../resources/images/icons/tooltip_tip.png"),require("../resources/images/icons/scan2.png"),require("../resources/images/icons/tiny_sent.png"),require("../resources/images/icons/tiny_warning_background.png"),require("../resources/images/icons/mobile_sync_off.png"),require("../resources/images/icons/refresh.png"),require("../resources/images/icons/gas.png"),require("../resources/images/icons/tiny_lock_broken.png"),require("../resources/images/icons/browser.png"),require("../resources/images/icons/symbols.png"),require("../resources/images/icons/two_arrows.png"),require("../resources/images/icons/scan.png"),require("../resources/images/icons/forward.png"),require("../resources/images/icons/keycard.png"),require("../resources/images/icons/network.png"),require("../resources/images/icons/mailserver.png"),require("../resources/images/icons/check.png"),require("../resources/images/icons/show.png"),require("../resources/images/icons/commands.png"),require("../resources/images/icons/edit.png"),require("../resources/images/icons/manage_connections.png"),require("../resources/images/icons/tabs.png"),require("../resources/images/icons/address.png"),require("../resources/images/icons/tiny_muted.png"),require("../resources/images/icons/status.png"),require("../resources/images/icons/qr.png"),require("../resources/images/icons/pause.png"),require("../resources/images/icons/tiny_arrow_down.png"),require("../resources/images/icons/text.png"),require("../resources/images/icons/photo.png"),require("../resources/images/icons/mention.png"),require("../resources/images/icons/filter.png"),require("../resources/images/icons/account.png"),require("../resources/images/icons/animals-nature.png"),require("../resources/images/icons/favourite.png"),require("../resources/images/icons/stickers_big.png"),require("../resources/images/icons/keycard_account.png"),require("../resources/images/icons/in_contacts.png"),require("../resources/images/icons/close.png"),require("../resources/images/icons/keyboard.png"),require("../resources/images/icons/history.png"),require("../resources/images/icons/link.png"),require("../resources/images/icons/gallery.png"),require("../resources/images/icons/tiny_edit.png"),require("../resources/images/icons/chevron_right.png"),require("../resources/images/icons/share_default.png"),require("../resources/images/icons/keycard_logo_big.png"),require("../resources/images/icons/pin.png"),require("../resources/images/icons/total_members12.png"),require("../resources/images/icons/remove_circle.png"),require("../resources/images/icons/flash_active.png"),require("../resources/images/icons/help.png"),require("../resources/images/icons/arrow_up.png"),require("../resources/images/icons/private_chat.png"),require("../resources/images/icons/password.png"),require("../resources/images/icons/print.png"),require("../resources/images/icons/billfold.png"),require("../resources/images/icons/smileys.png"),require("../resources/images/icons/channel.png"),require("../resources/images/icons/mobile.png"),require("../resources/images/icons/communities.png"),require("../resources/images/icons/add_contact.png"),require("../resources/images/icons/channel_category.png"),require("../resources/images/icons/public_chat.png"),require("../resources/images/icons/tiny_warning.png"),require("../resources/images/icons/add.png"),require("../resources/images/icons/recent.png"),require("../resources/images/icons/flash.png"),require("../resources/images/icons/notification.png"),require("../resources/images/icons/tiny_group.png"),require("../resources/images/icons/tiny_public.png"),require("../resources/images/icons/language.png"),require("../resources/images/icons/checkmark_circle.png"),require("../resources/images/icons/tiny_pending.png"),require("../resources/images/icons/connector.png"),require("../resources/images/icons/search.png"),require("../resources/images/icons/tiny_new_contact.png"),require("../resources/images/icons/search2.png"),require("../resources/images/icons/remove_contact.png"),require("../resources/images/icons/tiny_delivered.png"),require("../resources/images/icons/receive.png"),require("../resources/images/icons/tiny_community.png"),require("../resources/images/icons/tiny_external.png"),require("../resources/images/icons/tiny_check.png"),require("../resources/images/icons/total_members16.png"),require("../resources/images/icons/tiny_lock.png"),require("../resources/images/icons/share.png"),require("../resources/images/icons/change.png"),require("../resources/images/icons/qr2.png"),require("../resources/images/icons/close_circle.png")]);
status_im.ui.components.icons.icons.icon_source = (function status_im$ui$components$icons$icons$icon_source(icon){
return cljs.core.get.call(null,status_im.ui.components.icons.icons.icons,cljs.core.name.call(null,icon));
});
status_im.ui.components.icons.icons.match_color = (function status_im$ui$components$icons$icons$match_color(color){
if((color instanceof cljs.core.Keyword)){
var G__18947 = color;
var G__18947__$1 = (((G__18947 instanceof cljs.core.Keyword))?G__18947.fqn:null);
switch (G__18947__$1) {
case "dark":
return quo.design_system.colors.black;

break;
case "gray":
return quo.design_system.colors.gray;

break;
case "blue":
return quo.design_system.colors.blue;

break;
case "active":
return quo.design_system.colors.blue;

break;
case "white":
return quo.design_system.colors.white;

break;
case "red":
return quo.design_system.colors.red;

break;
case "none":
return null;

break;
default:
return quo.design_system.colors.black;

}
} else {
if(typeof color === 'string'){
return color;
} else {
return quo.design_system.colors.black;

}
}
});
status_im.ui.components.icons.icons.memo_icon_fn = (function status_im$ui$components$icons$icons$memo_icon_fn(var_args){
var G__18949 = arguments.length;
switch (G__18949) {
case 1:
return status_im.ui.components.icons.icons.memo_icon_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return status_im.ui.components.icons.icons.memo_icon_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.ui.components.icons.icons.memo_icon_fn.cljs$core$IFn$_invoke$arity$1 = (function (name){
return status_im.ui.components.icons.icons.memo_icon_fn.call(null,name,null);
}));

(status_im.ui.components.icons.icons.memo_icon_fn.cljs$core$IFn$_invoke$arity$2 = (function (name,p__18950){
var map__18951 = p__18950;
var map__18951__$1 = (((((!((map__18951 == null))))?(((((map__18951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18951):map__18951);
var color = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var resize_mode = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418));
var container_style = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var accessibility_label = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"icon","icon",1679606541));
var width = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var no_color = cljs.core.get.call(null,map__18951__$1,new cljs.core.Keyword(null,"no-color","no-color",-309925745));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.react.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(function (){var G__18953 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (24);
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (24);
}
})()], null);
var G__18953__$1 = (cljs.core.truth_(resize_mode)?cljs.core.assoc.call(null,G__18953,new cljs.core.Keyword(null,"resize-mode","resize-mode",-962168418),resize_mode):G__18953);
if(cljs.core.not(no_color)){
return cljs.core.assoc.call(null,G__18953__$1,new cljs.core.Keyword(null,"tint-color","tint-color",-940062868),status_im.ui.components.icons.icons.match_color.call(null,color));
} else {
return G__18953__$1;
}
})(),container_style),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label,new cljs.core.Keyword(null,"source","source",-433931539),status_im.ui.components.icons.icons.icon_source.call(null,name)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
}));

(status_im.ui.components.icons.icons.memo_icon_fn.cljs$lang$maxFixedArity = 2);

status_im.ui.components.icons.icons.icon = cljs.core.memoize.call(null,status_im.ui.components.icons.icons.memo_icon_fn);
status_im.ui.components.icons.icons.tiny_icon = (function status_im$ui$components$icons$icons$tiny_icon(var_args){
var G__18955 = arguments.length;
switch (G__18955) {
case 1:
return status_im.ui.components.icons.icons.tiny_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return status_im.ui.components.icons.icons.tiny_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(status_im.ui.components.icons.icons.tiny_icon.cljs$core$IFn$_invoke$arity$1 = (function (name){
return status_im.ui.components.icons.icons.tiny_icon.call(null,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(status_im.ui.components.icons.icons.tiny_icon.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return status_im.ui.components.icons.icons.icon(name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null),options));
}));

(status_im.ui.components.icons.icons.tiny_icon.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "icons", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.icons; } });
Object.defineProperty(module.exports, "icon_source", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.icon_source; } });
Object.defineProperty(module.exports, "match_color", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.match_color; } });
Object.defineProperty(module.exports, "memo_icon_fn", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.memo_icon_fn; } });
Object.defineProperty(module.exports, "icon", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.icon; } });
Object.defineProperty(module.exports, "tiny_icon", { enumerable: false, get: function() { return status_im.ui.components.icons.icons.tiny_icon; } });
//# sourceMappingURL=status_im.ui.components.icons.icons.js.map
