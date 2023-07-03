var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./goog.i18n.compactnumberformatsymbols.js");
require("./goog.i18n.currency.js");
require("./goog.i18n.datetimeformat.js");
require("./goog.i18n.datetimesymbols.js");
require("./goog.i18n.messageformat.js");
require("./goog.i18n.numberformat.js");
require("./goog.i18n.ordinalrules.js");
require("./goog.i18n.pluralrules.js");
require("./goog.i18n.timezone.js");
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

$CLJS.SHADOW_ENV.setLoaded("utils.i18n_goog.js");

goog.provide('utils.i18n_goog');
utils.i18n_goog.locales = cljs.core.PersistentHashMap.fromArrays(["es_US","nl","en_ISO","ar_EG","en_US","en_IN","pt","en","sw","br","sq","lv","lt","de_CH","ur","chr","cy","ne","zh","mo","sr","ro","hy","tr","pt_PT","iw","en_IE","it","zh_CN","es_ES","en_AU","el","fa","zu","is","zh_HK","bs","lo","ky","vi","ar_DZ","es_MX","id","uk","pl","zh_TW","tl","my","fi","ca","sv","si","ln","hr","fil","en_GB","sl","fr","kn","eu","bn","mk","ms","af","gu","es_419","da","ml","hu","or","de","hi","am","nb","ru","sk","ga","gsw","be","uz","es","en_SG","de_AT","ja","mt","en_ZA","km","gl","et","sr_Latn","mr","mn","cs","no","fr_CA","sh","ar","bg","ko","te","ka","en_CA","pa","ta","th","pt_BR","kk","he","haw","no_NO","in","az"],[goog.i18n.DateTimeSymbols_es_US,goog.i18n.DateTimeSymbols_nl,goog.i18n.DateTimeSymbols_en_ISO,goog.i18n.DateTimeSymbols_ar_EG,goog.i18n.DateTimeSymbols_en_US,goog.i18n.DateTimeSymbols_en_IN,goog.i18n.DateTimeSymbols_pt,goog.i18n.DateTimeSymbols_en,goog.i18n.DateTimeSymbols_sw,goog.i18n.DateTimeSymbols_br,goog.i18n.DateTimeSymbols_sq,goog.i18n.DateTimeSymbols_lv,goog.i18n.DateTimeSymbols_lt,goog.i18n.DateTimeSymbols_de_CH,goog.i18n.DateTimeSymbols_ur,goog.i18n.DateTimeSymbols_chr,goog.i18n.DateTimeSymbols_cy,goog.i18n.DateTimeSymbols_ne,goog.i18n.DateTimeSymbols_zh,goog.i18n.DateTimeSymbols_mo,goog.i18n.DateTimeSymbols_sr,goog.i18n.DateTimeSymbols_ro,goog.i18n.DateTimeSymbols_hy,goog.i18n.DateTimeSymbols_tr,goog.i18n.DateTimeSymbols_pt_PT,goog.i18n.DateTimeSymbols_iw,goog.i18n.DateTimeSymbols_en_IE,goog.i18n.DateTimeSymbols_it,goog.i18n.DateTimeSymbols_zh_CN,goog.i18n.DateTimeSymbols_es_ES,goog.i18n.DateTimeSymbols_en_AU,goog.i18n.DateTimeSymbols_el,goog.i18n.DateTimeSymbols_fa,goog.i18n.DateTimeSymbols_zu,goog.i18n.DateTimeSymbols_is,goog.i18n.DateTimeSymbols_zh_HK,goog.i18n.DateTimeSymbols_bs,goog.i18n.DateTimeSymbols_lo,goog.i18n.DateTimeSymbols_ky,goog.i18n.DateTimeSymbols_vi,goog.i18n.DateTimeSymbols_ar_DZ,goog.i18n.DateTimeSymbols_es_MX,goog.i18n.DateTimeSymbols_id,goog.i18n.DateTimeSymbols_uk,goog.i18n.DateTimeSymbols_pl,goog.i18n.DateTimeSymbols_zh_TW,goog.i18n.DateTimeSymbols_tl,goog.i18n.DateTimeSymbols_my,goog.i18n.DateTimeSymbols_fi,goog.i18n.DateTimeSymbols_ca,goog.i18n.DateTimeSymbols_sv,goog.i18n.DateTimeSymbols_si,goog.i18n.DateTimeSymbols_ln,goog.i18n.DateTimeSymbols_hr,goog.i18n.DateTimeSymbols_fil,goog.i18n.DateTimeSymbols_en_GB,goog.i18n.DateTimeSymbols_sl,goog.i18n.DateTimeSymbols_fr,goog.i18n.DateTimeSymbols_kn,goog.i18n.DateTimeSymbols_eu,goog.i18n.DateTimeSymbols_bn,goog.i18n.DateTimeSymbols_mk,goog.i18n.DateTimeSymbols_ms,goog.i18n.DateTimeSymbols_af,goog.i18n.DateTimeSymbols_gu,goog.i18n.DateTimeSymbols_es_419,goog.i18n.DateTimeSymbols_da,goog.i18n.DateTimeSymbols_ml,goog.i18n.DateTimeSymbols_hu,goog.i18n.DateTimeSymbols_or,goog.i18n.DateTimeSymbols_de,goog.i18n.DateTimeSymbols_hi,goog.i18n.DateTimeSymbols_am,goog.i18n.DateTimeSymbols_nb,goog.i18n.DateTimeSymbols_ru,goog.i18n.DateTimeSymbols_sk,goog.i18n.DateTimeSymbols_ga,goog.i18n.DateTimeSymbols_gsw,goog.i18n.DateTimeSymbols_be,goog.i18n.DateTimeSymbols_uz,goog.i18n.DateTimeSymbols_es,goog.i18n.DateTimeSymbols_en_SG,goog.i18n.DateTimeSymbols_de_AT,goog.i18n.DateTimeSymbols_ja,goog.i18n.DateTimeSymbols_mt,goog.i18n.DateTimeSymbols_en_ZA,goog.i18n.DateTimeSymbols_km,goog.i18n.DateTimeSymbols_gl,goog.i18n.DateTimeSymbols_et,goog.i18n.DateTimeSymbols_sr_Latn,goog.i18n.DateTimeSymbols_mr,goog.i18n.DateTimeSymbols_mn,goog.i18n.DateTimeSymbols_cs,goog.i18n.DateTimeSymbols_no,goog.i18n.DateTimeSymbols_fr_CA,goog.i18n.DateTimeSymbols_sh,goog.i18n.DateTimeSymbols_ar,goog.i18n.DateTimeSymbols_bg,goog.i18n.DateTimeSymbols_ko,goog.i18n.DateTimeSymbols_te,goog.i18n.DateTimeSymbols_ka,goog.i18n.DateTimeSymbols_en_CA,goog.i18n.DateTimeSymbols_pa,goog.i18n.DateTimeSymbols_ta,goog.i18n.DateTimeSymbols_th,goog.i18n.DateTimeSymbols_pt_BR,goog.i18n.DateTimeSymbols_kk,goog.i18n.DateTimeSymbols_he,goog.i18n.DateTimeSymbols_haw,goog.i18n.DateTimeSymbols_no_NO,goog.i18n.DateTimeSymbols_in,goog.i18n.DateTimeSymbols_az]);
utils.i18n_goog.locale_symbols = (function utils$i18n_goog$locale_symbols(locale_name){
var temp__5733__auto__ = cljs.core.get.call(null,utils.i18n_goog.locales,locale_name);
if(cljs.core.truth_(temp__5733__auto__)){
var loc = temp__5733__auto__;
return loc;
} else {
var name_first = clojure.string.replace.call(null,(function (){var or__4126__auto__ = locale_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),/-.*$/,"");
var loc = cljs.core.get.call(null,utils.i18n_goog.locales,name_first);
var or__4126__auto__ = loc;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.i18n.DateTimeSymbols_en;
}
}
});
utils.i18n_goog.mk_fmt = (function utils$i18n_goog$mk_fmt(locale,format_fn){
var locsym = utils.i18n_goog.locale_symbols.call(null,locale);
return (new goog.i18n.DateTimeFormat(format_fn.call(null,locsym),locsym));
});
/**
 * Formats an amount of a currency based on the currency pattern
 *   If currency-symbol? is false, the currency symbol is excluded from the
 *   formatting
 */
utils.i18n_goog.format_currency = (function utils$i18n_goog$format_currency(value,currency_code){
goog.i18n.currency.addTier2Support();

var currency_code_to_nfs_map = cljs.core.PersistentHashMap.fromArrays(["SGD","MNT","HUF","AZN","BYN","MYR","MMK","RSD","ZAR","PHP","KGS","RON","RUB","TRY","MKD","KZT","MXN","AUD","BDT","ISK","KRW","DZD","JPY","ETB","BRL","GEL","IDR","EUR","GBP","SEK","UZS","ILS","NPR","UAH","DKK","VND","HRK","HKD","CDF","BAM","CNY","BGN","AMD","CZK","CAD","LAK","PLN","LKR","KHR","TWD","IRR","THB","ALL","USD","NOK","TZS","EGP","MDL","INR","PKR","CHF"],[goog.i18n.NumberFormatSymbols_en_SG,goog.i18n.NumberFormatSymbols_mn,goog.i18n.NumberFormatSymbols_hu,goog.i18n.NumberFormatSymbols_az,goog.i18n.NumberFormatSymbols_be,goog.i18n.NumberFormatSymbols_ms,goog.i18n.NumberFormatSymbols_my,goog.i18n.NumberFormatSymbols_sh,goog.i18n.NumberFormatSymbols_af,goog.i18n.NumberFormatSymbols_fil,goog.i18n.NumberFormatSymbols_ky,goog.i18n.NumberFormatSymbols_ro,goog.i18n.NumberFormatSymbols_ru,goog.i18n.NumberFormatSymbols_tr,goog.i18n.NumberFormatSymbols_mk,goog.i18n.NumberFormatSymbols_kk,goog.i18n.NumberFormatSymbols_es_419,goog.i18n.NumberFormatSymbols_en_AU,goog.i18n.NumberFormatSymbols_bn,goog.i18n.NumberFormatSymbols_is,goog.i18n.NumberFormatSymbols_ko,goog.i18n.NumberFormatSymbols_ar_DZ,goog.i18n.NumberFormatSymbols_ja,goog.i18n.NumberFormatSymbols_am,goog.i18n.NumberFormatSymbols_pt,goog.i18n.NumberFormatSymbols_ka,goog.i18n.NumberFormatSymbols_id,goog.i18n.NumberFormatSymbols_br,goog.i18n.NumberFormatSymbols_cy,goog.i18n.NumberFormatSymbols_sv,goog.i18n.NumberFormatSymbols_uz,goog.i18n.NumberFormatSymbols_he,goog.i18n.NumberFormatSymbols_ne,goog.i18n.NumberFormatSymbols_uk,goog.i18n.NumberFormatSymbols_da,goog.i18n.NumberFormatSymbols_vi,goog.i18n.NumberFormatSymbols_hr,goog.i18n.NumberFormatSymbols_zh_HK,goog.i18n.NumberFormatSymbols_ln,goog.i18n.NumberFormatSymbols_bs,goog.i18n.NumberFormatSymbols_zh,goog.i18n.NumberFormatSymbols_bg,goog.i18n.NumberFormatSymbols_hy,goog.i18n.NumberFormatSymbols_cs,goog.i18n.NumberFormatSymbols_en_CA,goog.i18n.NumberFormatSymbols_lo,goog.i18n.NumberFormatSymbols_pl,goog.i18n.NumberFormatSymbols_si,goog.i18n.NumberFormatSymbols_km,goog.i18n.NumberFormatSymbols_zh_TW,goog.i18n.NumberFormatSymbols_fa,goog.i18n.NumberFormatSymbols_th,goog.i18n.NumberFormatSymbols_sq,goog.i18n.NumberFormatSymbols_en,goog.i18n.NumberFormatSymbols_nb,goog.i18n.NumberFormatSymbols_sw,goog.i18n.NumberFormatSymbols_ar,goog.i18n.NumberFormatSymbols_mo,goog.i18n.NumberFormatSymbols_en_IN,goog.i18n.NumberFormatSymbols_ur,goog.i18n.NumberFormatSymbols_de_CH]);
var nfs = (function (){var or__4126__auto__ = cljs.core.get.call(null,currency_code_to_nfs_map,currency_code);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.i18n.NumberFormatSymbols_en;
}
})();
return (new goog.i18n.NumberFormat((function (){var pattern = nfs.CURRENCY_PATTERN;
return clojure.string.replace.call(null,pattern,/\s*¤\s*/,"");
})())).format(value);
});
Object.defineProperty(module.exports, "locales", { enumerable: false, get: function() { return utils.i18n_goog.locales; } });
Object.defineProperty(module.exports, "locale_symbols", { enumerable: false, get: function() { return utils.i18n_goog.locale_symbols; } });
Object.defineProperty(module.exports, "mk_fmt", { enumerable: false, get: function() { return utils.i18n_goog.mk_fmt; } });
Object.defineProperty(module.exports, "format_currency", { enumerable: false, get: function() { return utils.i18n_goog.format_currency; } });
//# sourceMappingURL=utils.i18n_goog.js.map
