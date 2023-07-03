var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
require("./oops.core.js");
require("./quo.components.text.js");
require("./quo.components.tooltip.js");
require("./quo.design_system.colors.js");
require("./quo.design_system.spacing.js");
require("./quo.design_system.typography.js");
require("./quo.platform.js");
require("./quo.react_native.js");
require("./reagent.core.js");
require("./status_im.ui.components.icons.icons.js");
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

$CLJS.SHADOW_ENV.setLoaded("quo.components.text_input.js");

goog.provide('quo.components.text_input');
if((typeof quo !== 'undefined') && (typeof quo.components !== 'undefined') && (typeof quo.components.text_input !== 'undefined') && (typeof quo.components.text_input.text_input_refs !== 'undefined')){
} else {
quo.components.text_input.text_input_refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","multiline","quo.components.text-input/multiline",1557295731),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","secure-text-entry","quo.components.text-input/secure-text-entry",106742042),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","show-cancel","quo.components.text-input/show-cancel",1437750406),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","label","quo.components.text-input/label",29904979),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"component","component",1555936782)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.vector_QMARK_], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","cancel-label","quo.components.text-input/cancel-label",-479620662),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","default-value","quo.components.text-input/default-value",1727646571),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","placeholder","quo.components.text-input/placeholder",1552569766),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","keyboard-type","quo.components.text-input/keyboard-type",-1754183229),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.keyword_QMARK_], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","accessibility-label","quo.components.text-input/accessibility-label",-2010863129),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.keyword_QMARK_], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","on-focus","quo.components.text-input/on-focus",1666445065),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","on-blur","quo.components.text-input/on-blur",-952709012),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","on-press","quo.components.text-input/on-press",-1270407395),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","on-press","quo.components.text-input/on-press",-1270407395),new cljs.core.Keyword("quo.components.text-input","icon","quo.components.text-input/icon",-21268370),new cljs.core.Keyword("quo.components.text-input","component","quo.components.text-input/component",-1550771341)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","on-press","quo.components.text-input/on-press",-1270407395),new cljs.core.Keyword("quo.components.text-input","icon","quo.components.text-input/icon",-21268370),new cljs.core.Keyword("quo.components.text-input","component","quo.components.text-input/component",-1550771341)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19033){
return cljs.core.map_QMARK_.call(null,G__19033);
})], null),(function (G__19033){
return cljs.core.map_QMARK_.call(null,G__19033);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"component","component",1555936782)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","on-press","quo.components.text-input/on-press",-1270407395),new cljs.core.Keyword("quo.components.text-input","icon","quo.components.text-input/icon",-21268370),new cljs.core.Keyword("quo.components.text-input","component","quo.components.text-input/component",-1550771341)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","after","quo.components.text-input/after",118641747),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360),new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","before","quo.components.text-input/before",-1710379269),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360),new cljs.core.Keyword("quo.components.text-input","accessory","quo.components.text-input/accessory",-1993654360),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","input-style","quo.components.text-input/input-style",-1945427149),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","container-style","quo.components.text-input/container-style",1808214202),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("quo.components.text-input","text-input","quo.components.text-input/text-input",292516028),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","label","quo.components.text-input/label",29904979),new cljs.core.Keyword("quo.components.text-input","multiline","quo.components.text-input/multiline",1557295731),new cljs.core.Keyword("quo.components.text-input","error","quo.components.text-input/error",532131799),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),new cljs.core.Keyword("quo.components.text-input","input-style","quo.components.text-input/input-style",-1945427149),new cljs.core.Keyword("quo.components.text-input","keyboard-type","quo.components.text-input/keyboard-type",-1754183229),new cljs.core.Keyword("quo.components.text-input","before","quo.components.text-input/before",-1710379269),new cljs.core.Keyword("quo.components.text-input","after","quo.components.text-input/after",118641747),new cljs.core.Keyword("quo.components.text-input","cancel-label","quo.components.text-input/cancel-label",-479620662),new cljs.core.Keyword("quo.components.text-input","on-focus","quo.components.text-input/on-focus",1666445065),new cljs.core.Keyword("quo.components.text-input","on-blur","quo.components.text-input/on-blur",-952709012),new cljs.core.Keyword("quo.components.text-input","container-style","quo.components.text-input/container-style",1808214202),new cljs.core.Keyword("quo.components.text-input","show-cancel","quo.components.text-input/show-cancel",1437750406),new cljs.core.Keyword("quo.components.text-input","accessibility-label","quo.components.text-input/accessibility-label",-2010863129),new cljs.core.Keyword("quo.components.text-input","bottom-value","quo.components.text-input/bottom-value",-1753003436),new cljs.core.Keyword("quo.components.text-input","secure-text-entry","quo.components.text-input/secure-text-entry",106742042)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","label","quo.components.text-input/label",29904979),new cljs.core.Keyword("quo.components.text-input","multiline","quo.components.text-input/multiline",1557295731),new cljs.core.Keyword("quo.components.text-input","error","quo.components.text-input/error",532131799),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),new cljs.core.Keyword("quo.components.text-input","input-style","quo.components.text-input/input-style",-1945427149),new cljs.core.Keyword("quo.components.text-input","keyboard-type","quo.components.text-input/keyboard-type",-1754183229),new cljs.core.Keyword("quo.components.text-input","before","quo.components.text-input/before",-1710379269),new cljs.core.Keyword("quo.components.text-input","after","quo.components.text-input/after",118641747),new cljs.core.Keyword("quo.components.text-input","cancel-label","quo.components.text-input/cancel-label",-479620662),new cljs.core.Keyword("quo.components.text-input","on-focus","quo.components.text-input/on-focus",1666445065),new cljs.core.Keyword("quo.components.text-input","on-blur","quo.components.text-input/on-blur",-952709012),new cljs.core.Keyword("quo.components.text-input","container-style","quo.components.text-input/container-style",1808214202),new cljs.core.Keyword("quo.components.text-input","show-cancel","quo.components.text-input/show-cancel",1437750406),new cljs.core.Keyword("quo.components.text-input","accessibility-label","quo.components.text-input/accessibility-label",-2010863129),new cljs.core.Keyword("quo.components.text-input","bottom-value","quo.components.text-input/bottom-value",-1753003436),new cljs.core.Keyword("quo.components.text-input","secure-text-entry","quo.components.text-input/secure-text-entry",106742042)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19046){
return cljs.core.map_QMARK_.call(null,G__19046);
})], null),(function (G__19046){
return cljs.core.map_QMARK_.call(null,G__19046);
}),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"multiline","multiline",-1084693234),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"input-style","input-style",-374295278),new cljs.core.Keyword(null,"keyboard-type","keyboard-type",102164446),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"container-style","container-style",-240535783),new cljs.core.Keyword(null,"show-cancel","show-cancel",-69278107),new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717),new cljs.core.Keyword(null,"secure-text-entry","secure-text-entry",1622829879)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("quo.components.text-input","label","quo.components.text-input/label",29904979),new cljs.core.Keyword("quo.components.text-input","multiline","quo.components.text-input/multiline",1557295731),new cljs.core.Keyword("quo.components.text-input","error","quo.components.text-input/error",532131799),new cljs.core.Keyword("quo.components.text-input","style","quo.components.text-input/style",2144028527),new cljs.core.Keyword("quo.components.text-input","input-style","quo.components.text-input/input-style",-1945427149),new cljs.core.Keyword("quo.components.text-input","keyboard-type","quo.components.text-input/keyboard-type",-1754183229),new cljs.core.Keyword("quo.components.text-input","before","quo.components.text-input/before",-1710379269),new cljs.core.Keyword("quo.components.text-input","after","quo.components.text-input/after",118641747),new cljs.core.Keyword("quo.components.text-input","cancel-label","quo.components.text-input/cancel-label",-479620662),new cljs.core.Keyword("quo.components.text-input","on-focus","quo.components.text-input/on-focus",1666445065),new cljs.core.Keyword("quo.components.text-input","on-blur","quo.components.text-input/on-blur",-952709012),new cljs.core.Keyword("quo.components.text-input","container-style","quo.components.text-input/container-style",1808214202),new cljs.core.Keyword("quo.components.text-input","show-cancel","quo.components.text-input/show-cancel",1437750406),new cljs.core.Keyword("quo.components.text-input","accessibility-label","quo.components.text-input/accessibility-label",-2010863129),new cljs.core.Keyword("quo.components.text-input","bottom-value","quo.components.text-input/bottom-value",-1753003436),new cljs.core.Keyword("quo.components.text-input","secure-text-entry","quo.components.text-input/secure-text-entry",106742042)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
quo.components.text_input.check_spec = (function quo$components$text_input$check_spec(spec,prop){
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,prop)){
return true;
} else {
cljs.spec.alpha.explain.call(null,spec,prop);

return false;
}
});
quo.components.text_input.height = (44);
quo.components.text_input.multiline_height = (88);
quo.components.text_input.label_style = (function quo$components$text_input$label_style(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing)], null);
});
quo.components.text_input.text_input_row_style = (function quo$components$text_input$text_input_row_style(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null);
});
quo.components.text_input.text_input_view_style = (function quo$components$text_input$text_input_view_style(style){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"ui-01","ui-01",-1308838541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null),style);
});
quo.components.text_input.text_input_style = (function quo$components$text_input$text_input_style(multiline,input_style,monospace,before,after){
return cljs.core.merge.call(null,(cljs.core.truth_(monospace)?quo.design_system.typography.monospace:quo.design_system.typography.font_regular),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(11),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(11),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-01","text-01",-1912359967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"height","height",1025178622),quo.components.text_input.height], null),(cljs.core.truth_(before)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing)], null)),(cljs.core.truth_(after)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing)], null)),(cljs.core.truth_(multiline)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align-vertical","text-align-vertical",1566166767),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"line-height","line-height",1870784992),(22),new cljs.core.Keyword(null,"height","height",1025178622),quo.components.text_input.multiline_height], null):null),input_style);
});
quo.components.text_input.cancel_style = (function quo$components$text_input$cancel_style(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"tiny","tiny",1577883515).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.spacing),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null);
});
quo.components.text_input.accessory_style = (function quo$components$text_input$accessory_style(){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(quo.design_system.spacing.padding_horizontal),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null));
});
quo.components.text_input.accessory_element = (function quo$components$text_input$accessory_element(p__19068){
var map__19069 = p__19068;
var map__19069__$1 = (((((!((map__19069 == null))))?(((((map__19069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19069):map__19069);
var icon = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var component = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var icon_opts = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"icon-opts","icon-opts",266228513));
var style = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var accessibility_label = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var on_press = cljs.core.get.call(null,map__19069__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var el = (cljs.core.truth_(on_press)?quo.react_native.touchable_opacity:quo.react_native.view);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null)], null),(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,quo.components.text_input.accessory_style.call(null),style)], null),(cljs.core.truth_(accessibility_label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),accessibility_label], null):null)),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status_im.ui.components.icons.icons.icon,icon,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"icon-01","icon-01",164326199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme))], null),icon_opts)], null):(cljs.core.truth_(component)?component:null
))], null)], null);
});
quo.components.text_input.text_input_raw = (function quo$components$text_input$text_input_raw(){
var focused = reagent.core.atom.call(null,null);
var visible = reagent.core.atom.call(null,false);
var ref = cljs.core.atom.call(null,null);
var blur = (function (){
var G__19084 = cljs.core.deref.call(null,ref);
if((G__19084 == null)){
return null;
} else {
var target_obj_19093 = G__19084;
var _STAR_runtime_state_STAR__orig_val__19097 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__19098 = oops.state.prepare_state.call(null,target_obj_19093,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__19098);

try{var call_info_19095 = [target_obj_19093,(function (){var next_obj_19096 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_19093,(0),"blur",true,true,false))?(target_obj_19093["blur"]):null);
return next_obj_19096;
})()];
var fn_19094 = (call_info_19095[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_19094,oops.state.get_last_access_modifier.call(null))){
if((!((fn_19094 == null)))){
return fn_19094.call((call_info_19095[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__19097);
}}
});
return (function (p__19099){
var map__19101 = p__19099;
var map__19101__$1 = (((((!((map__19101 == null))))?(((((map__19101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19101):map__19101);
var props = map__19101__$1;
var container_style = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"container-style","container-style",-240535783));
var on_cancel = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var before = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var keyboard_type = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"keyboard-type","keyboard-type",102164446));
var auto_correct = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927));
var show_cancel = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"show-cancel","show-cancel",-69278107));
var accessibility_label = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048));
var on_focus = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var cancel_label = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),"Cancel");
var on_blur = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var multiline = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"multiline","multiline",-1084693234));
var style = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var monospace = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"monospace","monospace",2089559697));
var get_ref = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"get-ref","get-ref",-129617071));
var auto_complete_type = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"auto-complete-type","auto-complete-type",-1410808719));
var after = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"after","after",594996914));
var input_style = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"input-style","input-style",-374295278));
var bottom_value = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717));
var label = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var secure_text_entry = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"secure-text-entry","secure-text-entry",1622829879));
var error = cljs.core.get.call(null,map__19101__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(quo.components.text_input.check_spec.call(null,new cljs.core.Keyword("quo.components.text-input","text-input","quo.components.text-input/text-input",292516028),props)){
} else {
throw (new Error("Assert failed: (check-spec :quo.components.text-input/text-input props)"));
}

var show_cancel__$1 = (((show_cancel == null))?quo.platform.ios_QMARK_:show_cancel);
var after__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = secure_text_entry;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,visible);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("main-icons","hide","main-icons/hide",1991202293),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_.call(null,visible,false);
})], null):(cljs.core.truth_((function (){var and__4115__auto__ = secure_text_entry;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref.call(null,visible));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("main-icons","show","main-icons/show",-1218203435),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_.call(null,visible,true);
})], null):after
));
var secure = cljs.core.boolean$.call(null,(function (){var and__4115__auto__ = secure_text_entry;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.deref.call(null,visible));
} else {
return and__4115__auto__;
}
})());
var auto_complete = ((cljs.core._EQ_.call(null,keyboard_type,new cljs.core.Keyword(null,"visible-password","visible-password",-1489942345)))?new cljs.core.Keyword(null,"off","off",606440789):(cljs.core.truth_(secure_text_entry)?new cljs.core.Keyword(null,"password","password",417022471):auto_complete_type
));
var auto_correct__$1 = ((cljs.core.not_EQ_.call(null,keyboard_type,new cljs.core.Keyword(null,"visible-password","visible-password",-1489942345)))?((cljs.core.not(secure_text_entry))?auto_correct:false):false);
var on_cancel__$1 = (function (){
if(cljs.core.truth_(on_cancel)){
on_cancel.call(null);
} else {
}

return blur();
});
var keyboard_type__$1 = ((((quo.platform.ios_QMARK_) && (cljs.core._EQ_.call(null,keyboard_type,new cljs.core.Keyword(null,"visible-password","visible-password",-1489942345)))))?new cljs.core.Keyword(null,"default","default",-1987822328):(cljs.core.truth_(((quo.platform.android_QMARK_)?secure_text_entry:false))?new cljs.core.Keyword(null,"default","default",-1987822328):keyboard_type
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),container_style], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.text_input.label_style.call(null)], null),label], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.text_input.text_input_row_style.call(null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.text_input.text_input_view_style.call(null,style),new cljs.core.Keyword(null,"important-for-accessibility","important-for-accessibility",1097948874),(cljs.core.truth_(secure_text_entry)?new cljs.core.Keyword(null,"no-hide-descendants","no-hide-descendants",967496854):new cljs.core.Keyword(null,"auto","auto",-566279492))], null),(cljs.core.truth_(before)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text_input.accessory_element,before], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.text_input,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"auto-complete-type","auto-complete-type",-1410808719),new cljs.core.Keyword(null,"placeholder-text-color","placeholder-text-color",-96880686),new cljs.core.Keyword(null,"underline-color-android","underline-color-android",384791699),new cljs.core.Keyword(null,"secure-text-entry","secure-text-entry",1622829879),new cljs.core.Keyword(null,"keyboard-type","keyboard-type",102164446),new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927)],[new cljs.core.Keyword(null,"none","none",1333468478),(function (r){
cljs.core.reset_BANG_.call(null,ref,r);

if(cljs.core.truth_(get_ref)){
return get_ref.call(null,r);
} else {
return null;
}
}),(function (evt){
if(cljs.core.truth_(on_focus)){
on_focus.call(null,evt);
} else {
}

if(cljs.core.truth_(show_cancel__$1)){
quo.react_native.configure_next.call(null,new cljs.core.Keyword(null,"ease-in-ease-out","ease-in-ease-out",-382563166).cljs$core$IFn$_invoke$arity$1(quo.react_native.layout_animation_presets));
} else {
}

return cljs.core.reset_BANG_.call(null,focused,true);
}),(function (evt){
if(cljs.core.truth_(on_blur)){
on_blur.call(null,evt);
} else {
}

if(cljs.core.truth_(show_cancel__$1)){
quo.react_native.configure_next.call(null,new cljs.core.Keyword(null,"ease-in-ease-out","ease-in-ease-out",-382563166).cljs$core$IFn$_invoke$arity$1(quo.react_native.layout_animation_presets));
} else {
}

return cljs.core.reset_BANG_.call(null,focused,false);
}),quo.components.text_input.text_input_style.call(null,multiline,input_style,monospace,before,after__$1),auto_complete,new cljs.core.Keyword(null,"text-02","text-02",-95561481).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quo.design_system.colors.theme)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),secure,keyboard_type__$1,auto_correct__$1]),((((quo.platform.ios_QMARK_) && (cljs.core.not(after__$1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-button-mode","clear-button-mode",2055085972),new cljs.core.Keyword(null,"while-editing","while-editing",-369152368)], null):null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keyboard-type","keyboard-type",102164446),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"secure-text-entry","secure-text-entry",1622829879),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"get-ref","get-ref",-129617071),new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927),new cljs.core.Keyword(null,"auto-complete-type","auto-complete-type",-1410808719)))], null),(cljs.core.truth_(after__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text_input.accessory_element,after__$1], null):null)], null),(cljs.core.truth_((function (){var and__4115__auto__ = show_cancel__$1;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(multiline)){
return cljs.core.deref.call(null,focused);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.react_native.touchable_opacity,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),quo.components.text_input.cancel_style.call(null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_cancel__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link","link",-1769163468)], null),cancel_label], null)], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.tooltip.tooltip,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom-value","bottom-value",-81184717),(cljs.core.truth_(bottom_value)?bottom_value:(0))], null),(cljs.core.truth_(accessibility_label)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accessibility-label","accessibility-label",713047048),[cljs.core.name.call(null,accessibility_label),"-error"].join('')], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text.text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"negative","negative",-1562068438),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),error], null)], null):null)], null)], null);
});
});
quo.components.text_input.text_input = (function quo$components$text_input$text_input(p__19129){
var map__19130 = p__19129;
var map__19130__$1 = (((((!((map__19130 == null))))?(((((map__19130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19130):map__19130);
var props = map__19130__$1;
var preserve_input_QMARK_ = cljs.core.get.call(null,map__19130__$1,new cljs.core.Keyword(null,"preserve-input?","preserve-input?",97873964));
if(cljs.core.truth_(preserve_input_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text_input.text_input_raw,props], null);
} else {
var id = cljs.core.random_uuid.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return cljs.core.swap_BANG_.call(null,quo.components.text_input.text_input_refs,cljs.core.dissoc,id);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__19141){
var map__19142 = p__19141;
var map__19142__$1 = (((((!((map__19142 == null))))?(((((map__19142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19142):map__19142);
var props__$1 = map__19142__$1;
var get_ref = cljs.core.get.call(null,map__19142__$1,new cljs.core.Keyword(null,"get-ref","get-ref",-129617071));
var default_value = cljs.core.get.call(null,map__19142__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quo.components.text_input.text_input_raw,cljs.core.merge.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-ref","get-ref",-129617071),(function (r){
if(cljs.core.truth_(r)){
cljs.core.swap_BANG_.call(null,quo.components.text_input.text_input_refs,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),r,new cljs.core.Keyword(null,"value","value",305978217),default_value], null));
} else {
}

if(cljs.core.truth_(get_ref)){
return get_ref.call(null,r);
} else {
return null;
}
})], null))], null);
})], null));
}
});
Object.defineProperty(module.exports, "height", { enumerable: false, get: function() { return quo.components.text_input.height; } });
Object.defineProperty(module.exports, "text_input_view_style", { enumerable: false, get: function() { return quo.components.text_input.text_input_view_style; } });
Object.defineProperty(module.exports, "text_input_row_style", { enumerable: false, get: function() { return quo.components.text_input.text_input_row_style; } });
Object.defineProperty(module.exports, "text_input_raw", { enumerable: false, get: function() { return quo.components.text_input.text_input_raw; } });
Object.defineProperty(module.exports, "accessory_element", { enumerable: false, get: function() { return quo.components.text_input.accessory_element; } });
Object.defineProperty(module.exports, "accessory_style", { enumerable: false, get: function() { return quo.components.text_input.accessory_style; } });
Object.defineProperty(module.exports, "text_input_style", { enumerable: false, get: function() { return quo.components.text_input.text_input_style; } });
Object.defineProperty(module.exports, "check_spec", { enumerable: false, get: function() { return quo.components.text_input.check_spec; } });
Object.defineProperty(module.exports, "multiline_height", { enumerable: false, get: function() { return quo.components.text_input.multiline_height; } });
Object.defineProperty(module.exports, "cancel_style", { enumerable: false, get: function() { return quo.components.text_input.cancel_style; } });
Object.defineProperty(module.exports, "text_input_refs", { enumerable: false, get: function() { return quo.components.text_input.text_input_refs; } });
Object.defineProperty(module.exports, "text_input", { enumerable: false, get: function() { return quo.components.text_input.text_input; } });
Object.defineProperty(module.exports, "label_style", { enumerable: false, get: function() { return quo.components.text_input.label_style; } });
//# sourceMappingURL=quo.components.text_input.js.map
