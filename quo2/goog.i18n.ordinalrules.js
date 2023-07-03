var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

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

$CLJS.SHADOW_ENV.setLoaded("goog.i18n.ordinalrules.js");

goog.provide("goog.i18n.ordinalRules");
goog.i18n.ordinalRules.Keyword = {ZERO:"zero", ONE:"one", TWO:"two", FEW:"few", MANY:"many", OTHER:"other"};
goog.i18n.ordinalRules.select;
goog.i18n.ordinalRules.defaultSelect_ = function(n, opt_precision) {
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.decimals_ = function(n) {
  var str = n + "";
  var result = str.indexOf(".");
  return result == -1 ? 0 : str.length - result - 1;
};
goog.i18n.ordinalRules.get_vf_ = function(n, opt_precision) {
  var DEFAULT_DIGITS = 3;
  var v;
  if (undefined === opt_precision) {
    v = Math.min(goog.i18n.ordinalRules.decimals_(n), DEFAULT_DIGITS);
  } else {
    v = opt_precision;
  }
  var base = Math.pow(10, v);
  var f = (n * base | 0) % base;
  return {v:v, f:f};
};
goog.i18n.ordinalRules.get_wt_ = function(v, f) {
  if (f === 0) {
    return {w:0, t:0};
  }
  while (f % 10 === 0) {
    f /= 10;
    v--;
  }
  return {w:v, t:f};
};
goog.i18n.ordinalRules.cySelect_ = function(n, opt_precision) {
  if (n == 0 || n == 7 || n == 8 || n == 9) {
    return goog.i18n.ordinalRules.Keyword.ZERO;
  }
  if (n == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 3 || n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  if (n == 5 || n == 6) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.enSelect_ = function(n, opt_precision) {
  if (n % 10 == 1 && n % 100 != 11) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n % 10 == 2 && n % 100 != 12) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n % 10 == 3 && n % 100 != 13) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.ukSelect_ = function(n, opt_precision) {
  if (n % 10 == 3 && n % 100 != 13) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.itSelect_ = function(n, opt_precision) {
  if (n == 11 || n == 8 || n == 80 || n == 800) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.neSelect_ = function(n, opt_precision) {
  if (n >= 1 && n <= 4) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.orSelect_ = function(n, opt_precision) {
  if (n == 1 || n == 5 || n >= 7 && n <= 9) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2 || n == 3) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  if (n == 6) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.beSelect_ = function(n, opt_precision) {
  if ((n % 10 == 2 || n % 10 == 3) && n % 100 != 12 && n % 100 != 13) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.azSelect_ = function(n, opt_precision) {
  var i = n | 0;
  if (i % 10 == 1 || i % 10 == 2 || i % 10 == 5 || i % 10 == 7 || i % 10 == 8 || (i % 100 == 20 || i % 100 == 50 || i % 100 == 70 || i % 100 == 80)) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (i % 10 == 3 || i % 10 == 4 || (i % 1000 == 100 || i % 1000 == 200 || i % 1000 == 300 || i % 1000 == 400 || i % 1000 == 500 || i % 1000 == 600 || i % 1000 == 700 || i % 1000 == 800 || i % 1000 == 900)) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  if (i == 0 || i % 10 == 6 || (i % 100 == 40 || i % 100 == 60 || i % 100 == 90)) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.kaSelect_ = function(n, opt_precision) {
  var i = n | 0;
  if (i == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (i == 0 || (i % 100 >= 2 && i % 100 <= 20 || i % 100 == 40 || i % 100 == 60 || i % 100 == 80)) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.mrSelect_ = function(n, opt_precision) {
  if (n == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2 || n == 3) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.svSelect_ = function(n, opt_precision) {
  if ((n % 10 == 1 || n % 10 == 2) && n % 100 != 11 && n % 100 != 12) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.kkSelect_ = function(n, opt_precision) {
  if (n % 10 == 6 || n % 10 == 9 || n % 10 == 0 && n != 0) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.mkSelect_ = function(n, opt_precision) {
  var i = n | 0;
  if (i % 10 == 1 && i % 100 != 11) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (i % 10 == 2 && i % 100 != 12) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if ((i % 10 == 7 || i % 10 == 8) && i % 100 != 17 && i % 100 != 18) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.huSelect_ = function(n, opt_precision) {
  if (n == 1 || n == 5) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.frSelect_ = function(n, opt_precision) {
  if (n == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.sqSelect_ = function(n, opt_precision) {
  if (n == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n % 10 == 4 && n % 100 != 14) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.caSelect_ = function(n, opt_precision) {
  if (n == 1 || n == 3) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.guSelect_ = function(n, opt_precision) {
  if (n == 1) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2 || n == 3) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  if (n == 6) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.tkSelect_ = function(n, opt_precision) {
  if (n % 10 == 6 || n % 10 == 9 || n == 10) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.gdSelect_ = function(n, opt_precision) {
  if (n == 1 || n == 11) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2 || n == 12) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 3 || n == 13) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.kwSelect_ = function(n, opt_precision) {
  if (n >= 1 && n <= 4 || (n % 100 >= 1 && n % 100 <= 4 || n % 100 >= 21 && n % 100 <= 24 || n % 100 >= 41 && n % 100 <= 44 || n % 100 >= 61 && n % 100 <= 64 || n % 100 >= 81 && n % 100 <= 84)) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 5 || n % 100 == 5) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.asSelect_ = function(n, opt_precision) {
  if (n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10) {
    return goog.i18n.ordinalRules.Keyword.ONE;
  }
  if (n == 2 || n == 3) {
    return goog.i18n.ordinalRules.Keyword.TWO;
  }
  if (n == 4) {
    return goog.i18n.ordinalRules.Keyword.FEW;
  }
  if (n == 6) {
    return goog.i18n.ordinalRules.Keyword.MANY;
  }
  return goog.i18n.ordinalRules.Keyword.OTHER;
};
goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
if (goog.LOCALE == "af") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "am") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ar") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ar_DZ" || goog.LOCALE == "ar-DZ") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ar_EG" || goog.LOCALE == "ar-EG") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "az") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.azSelect_;
}
if (goog.LOCALE == "be") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.beSelect_;
}
if (goog.LOCALE == "bg") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "bn") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.asSelect_;
}
if (goog.LOCALE == "br") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "bs") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ca") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.caSelect_;
}
if (goog.LOCALE == "chr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "cs") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "cy") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.cySelect_;
}
if (goog.LOCALE == "da") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "de") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "de_AT" || goog.LOCALE == "de-AT") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "de_CH" || goog.LOCALE == "de-CH") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "el") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "en") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_AU" || goog.LOCALE == "en-AU") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_CA" || goog.LOCALE == "en-CA") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_GB" || goog.LOCALE == "en-GB") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_IE" || goog.LOCALE == "en-IE") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_IN" || goog.LOCALE == "en-IN") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_SG" || goog.LOCALE == "en-SG") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_US" || goog.LOCALE == "en-US") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "en_ZA" || goog.LOCALE == "en-ZA") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.enSelect_;
}
if (goog.LOCALE == "es") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "es_419" || goog.LOCALE == "es-419") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "es_ES" || goog.LOCALE == "es-ES") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "es_MX" || goog.LOCALE == "es-MX") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "es_US" || goog.LOCALE == "es-US") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "et") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "eu") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "fa") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "fi") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "fil") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "fr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "fr_CA" || goog.LOCALE == "fr-CA") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "ga") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "gl") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "gsw") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "gu") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.guSelect_;
}
if (goog.LOCALE == "haw") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "he") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "hi") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.guSelect_;
}
if (goog.LOCALE == "hr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "hu") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.huSelect_;
}
if (goog.LOCALE == "hy") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "id") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "in") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "is") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "it") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.itSelect_;
}
if (goog.LOCALE == "iw") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ja") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ka") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.kaSelect_;
}
if (goog.LOCALE == "kk") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.kkSelect_;
}
if (goog.LOCALE == "km") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "kn") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ko") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ky") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ln") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "lo") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "lt") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "lv") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "mk") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.mkSelect_;
}
if (goog.LOCALE == "ml") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "mn") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "mo") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "mr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.mrSelect_;
}
if (goog.LOCALE == "ms") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "mt") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "my") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "nb") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ne") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.neSelect_;
}
if (goog.LOCALE == "nl") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "no") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "no_NO" || goog.LOCALE == "no-NO") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "or") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.orSelect_;
}
if (goog.LOCALE == "pa") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "pl") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "pt") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "pt_BR" || goog.LOCALE == "pt-BR") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "pt_PT" || goog.LOCALE == "pt-PT") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ro") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "ru") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sh") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "si") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sk") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sl") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sq") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.sqSelect_;
}
if (goog.LOCALE == "sr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sr_Latn" || goog.LOCALE == "sr-Latn") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "sv") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.svSelect_;
}
if (goog.LOCALE == "sw") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "ta") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "te") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "th") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "tl") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "tr") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "uk") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.ukSelect_;
}
if (goog.LOCALE == "ur") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "uz") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "vi") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.frSelect_;
}
if (goog.LOCALE == "zh") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "zh_CN" || goog.LOCALE == "zh-CN") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "zh_HK" || goog.LOCALE == "zh-HK") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "zh_TW" || goog.LOCALE == "zh-TW") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}
if (goog.LOCALE == "zu") {
  goog.i18n.ordinalRules.select = goog.i18n.ordinalRules.defaultSelect_;
}

module.exports = goog.i18n.ordinalRules;

//# sourceMappingURL=goog.i18n.ordinalrules.js.map