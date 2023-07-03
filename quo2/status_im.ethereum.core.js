var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./status_im.ethereum.eip55.js");
require("./native_module.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("status_im.ethereum.core.js");

goog.provide('status_im.ethereum.core');
status_im.ethereum.core.sha3 = (function status_im$ethereum$core$sha3(s){
if(cljs.core.truth_(s)){
return native_module.core.sha3.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
});
status_im.ethereum.core.utf8_to_hex = (function status_im$ethereum$core$utf8_to_hex(s){
var hex = native_module.core.utf8_to_hex.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.empty_QMARK_.call(null,hex)){
return null;
} else {
return hex;
}
});
status_im.ethereum.core.hex_to_utf8 = (function status_im$ethereum$core$hex_to_utf8(s){
var utf8 = native_module.core.hex_to_utf8.call(null,s);
if(cljs.core.empty_QMARK_.call(null,utf8)){
return null;
} else {
return utf8;
}
});
status_im.ethereum.core.BSC_mainnet_chain_id = (56);
status_im.ethereum.core.BSC_testnet_chain_id = (97);
status_im.ethereum.core.chains = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mainnet","mainnet",1085077630),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Mainnet"], null),new cljs.core.Keyword(null,"xdai","xdai",-493187997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(100),new cljs.core.Keyword(null,"name","name",1843675177),"xDai"], null),new cljs.core.Keyword(null,"goerli","goerli",1521689201),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Goerli"], null),new cljs.core.Keyword(null,"bsc","bsc",-1616827084),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),status_im.ethereum.core.BSC_mainnet_chain_id,new cljs.core.Keyword(null,"name","name",1843675177),"BSC"], null),new cljs.core.Keyword(null,"bsc-testnet","bsc-testnet",-1340641543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),status_im.ethereum.core.BSC_testnet_chain_id,new cljs.core.Keyword(null,"name","name",1843675177),"BSC tetnet"], null)], null);
status_im.ethereum.core.chain_id__GT_chain_keyword = (function status_im$ethereum$core$chain_id__GT_chain_keyword(i){
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__18498_SHARP_){
if(cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__18498_SHARP_)))){
return cljs.core.key.call(null,p1__18498_SHARP_);
} else {
return null;
}
}),status_im.ethereum.core.chains);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"custom","custom",340151948);
}
});
status_im.ethereum.core.chain_id__GT_chain_name = (function status_im$ethereum$core$chain_id__GT_chain_name(i){
var or__4126__auto__ = cljs.core.some.call(null,(function (p1__18499_SHARP_){
if(cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__18499_SHARP_)))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__18499_SHARP_));
} else {
return null;
}
}),status_im.ethereum.core.chains);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"custom","custom",340151948);
}
});
status_im.ethereum.core.chain_keyword__GT_chain_id = (function status_im$ethereum$core$chain_keyword__GT_chain_id(k){
return cljs.core.get_in.call(null,status_im.ethereum.core.chains,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});
status_im.ethereum.core.chain_keyword__GT_snt_symbol = (function status_im$ethereum$core$chain_keyword__GT_snt_symbol(k){
var G__18507 = k;
var G__18507__$1 = (((G__18507 instanceof cljs.core.Keyword))?G__18507.fqn:null);
switch (G__18507__$1) {
case "mainnet":
return new cljs.core.Keyword(null,"SNT","SNT",1040633677);

break;
default:
return new cljs.core.Keyword(null,"STT","STT",-2063490070);

}
});
status_im.ethereum.core.testnet_QMARK_ = (function status_im$ethereum$core$testnet_QMARK_(id){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status_im.ethereum.core.chain_keyword__GT_chain_id.call(null,new cljs.core.Keyword(null,"bsc-testnet","bsc-testnet",-1340641543)),status_im.ethereum.core.chain_keyword__GT_chain_id.call(null,new cljs.core.Keyword(null,"goerli","goerli",1521689201))]),id);
});
status_im.ethereum.core.sidechain_QMARK_ = (function status_im$ethereum$core$sidechain_QMARK_(id){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status_im.ethereum.core.chain_keyword__GT_chain_id.call(null,new cljs.core.Keyword(null,"bsc","bsc",-1616827084)),status_im.ethereum.core.chain_keyword__GT_chain_id.call(null,new cljs.core.Keyword(null,"xdai","xdai",-493187997))]),id);
});
status_im.ethereum.core.network_with_upstream_rpc_QMARK_ = (function status_im$ethereum$core$network_with_upstream_rpc_QMARK_(network){
return cljs.core.get_in.call(null,network,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"UpstreamConfig","UpstreamConfig",1760534256),new cljs.core.Keyword(null,"Enabled","Enabled",-114192199)], null));
});
status_im.ethereum.core.hex_prefix = "0x";
status_im.ethereum.core.normalized_hex = (function status_im$ethereum$core$normalized_hex(hex){
if(cljs.core.truth_(hex)){
if(clojure.string.starts_with_QMARK_.call(null,hex,status_im.ethereum.core.hex_prefix)){
return hex;
} else {
return [status_im.ethereum.core.hex_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
} else {
return null;
}
});
status_im.ethereum.core.current_address = (function status_im$ethereum$core$current_address(db){
return status_im.ethereum.core.normalized_hex.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiaccount","multiaccount",1007681896),new cljs.core.Keyword(null,"address","address",559499426)], null)));
});
status_im.ethereum.core.get_default_account = (function status_im$ethereum$core$get_default_account(accounts){
return cljs.core.some.call(null,(function (p1__18521_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"wallet","wallet",1450743621).cljs$core$IFn$_invoke$arity$1(p1__18521_SHARP_))){
return p1__18521_SHARP_;
} else {
return null;
}
}),accounts);
});
status_im.ethereum.core.default_address = (function status_im$ethereum$core$default_address(db){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(status_im.ethereum.core.get_default_account.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword("multiaccount","accounts","multiaccount/accounts",-757227824))));
});
status_im.ethereum.core.addresses_without_watch = (function status_im$ethereum$core$addresses_without_watch(db){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (p1__18522_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18522_SHARP_),new cljs.core.Keyword(null,"watch","watch",380988277));
}),cljs.core.map.call(null,(function (p1__18523_SHARP_){
return status_im.ethereum.eip55.address__GT_checksum.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__18523_SHARP_));
}),cljs.core.get.call(null,db,new cljs.core.Keyword("multiaccount","accounts","multiaccount/accounts",-757227824)))));
});
status_im.ethereum.core.naked_address = (function status_im$ethereum$core$naked_address(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,status_im.ethereum.core.hex_prefix,"");
} else {
return null;
}
});
status_im.ethereum.core.public_key_length = (128);
status_im.ethereum.core.coordinates = (function status_im$ethereum$core$coordinates(public_key){
var temp__5735__auto__ = status_im.ethereum.core.naked_address.call(null,public_key);
if(cljs.core.truth_(temp__5735__auto__)){
var hex = temp__5735__auto__;
if(cljs.core._EQ_.call(null,status_im.ethereum.core.public_key_length,((cljs.core.subs.call(null,hex,(2))).length))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),status_im.ethereum.core.normalized_hex.call(null,cljs.core.subs.call(null,hex,(2),(66))),new cljs.core.Keyword(null,"y","y",-1757859776),status_im.ethereum.core.normalized_hex.call(null,cljs.core.subs.call(null,hex,(66)))], null);
} else {
return null;
}
} else {
return null;
}
});
status_im.ethereum.core.address_QMARK_ = (function status_im$ethereum$core$address_QMARK_(s){
if(cljs.core.truth_(s)){
return native_module.core.address_QMARK_.call(null,s);
} else {
return null;
}
});
status_im.ethereum.core.network__GT_chain_id = (function status_im$ethereum$core$network__GT_chain_id(network){
return cljs.core.get_in.call(null,network,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"NetworkId","NetworkId",-154749739)], null));
});
status_im.ethereum.core.network__GT_chain_keyword = (function status_im$ethereum$core$network__GT_chain_keyword(network){
return status_im.ethereum.core.chain_id__GT_chain_keyword.call(null,status_im.ethereum.core.network__GT_chain_id.call(null,network));
});
status_im.ethereum.core.current_network = (function status_im$ethereum$core$current_network(db){
var networks = cljs.core.get.call(null,db,new cljs.core.Keyword("networks","networks","networks/networks",-2114969714));
var network_id = cljs.core.get.call(null,db,new cljs.core.Keyword("networks","current-network","networks/current-network",-557724548));
return cljs.core.get.call(null,networks,network_id);
});
status_im.ethereum.core.binance_chain_id_QMARK_ = (function status_im$ethereum$core$binance_chain_id_QMARK_(chain_id){
return ((cljs.core._EQ_.call(null,status_im.ethereum.core.BSC_mainnet_chain_id,chain_id)) || (cljs.core._EQ_.call(null,status_im.ethereum.core.BSC_testnet_chain_id,chain_id)));
});
status_im.ethereum.core.binance_chain_QMARK_ = (function status_im$ethereum$core$binance_chain_QMARK_(db){
return status_im.ethereum.core.binance_chain_id_QMARK_.call(null,status_im.ethereum.core.network__GT_chain_id.call(null,status_im.ethereum.core.current_network.call(null,db)));
});
status_im.ethereum.core.custom_rpc_node_id_len = (45);
status_im.ethereum.core.custom_rpc_node_QMARK_ = (function status_im$ethereum$core$custom_rpc_node_QMARK_(p__18531){
var map__18533 = p__18531;
var map__18533__$1 = (((((!((map__18533 == null))))?(((((map__18533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18533):map__18533);
var id = cljs.core.get.call(null,map__18533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.call(null,status_im.ethereum.core.custom_rpc_node_id_len,cljs.core.count.call(null,id));
});
status_im.ethereum.core.network__GT_network_name = (function status_im$ethereum$core$network__GT_network_name(network){
return status_im.ethereum.core.chain_id__GT_chain_name.call(null,status_im.ethereum.core.network__GT_chain_id.call(null,network));
});
status_im.ethereum.core.network__GT_chain_name = (function status_im$ethereum$core$network__GT_chain_name(network){
return cljs.core.name.call(null,status_im.ethereum.core.network__GT_chain_keyword.call(null,network));
});
status_im.ethereum.core.get_current_network = (function status_im$ethereum$core$get_current_network(p__18563){
var map__18565 = p__18563;
var map__18565__$1 = (((((!((map__18565 == null))))?(((((map__18565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18565):map__18565);
var current_network = cljs.core.get.call(null,map__18565__$1,new cljs.core.Keyword("networks","current-network","networks/current-network",-557724548));
var networks = cljs.core.get.call(null,map__18565__$1,new cljs.core.Keyword("networks","networks","networks/networks",-2114969714));
return cljs.core.get.call(null,networks,current_network);
});
status_im.ethereum.core.chain_keyword = (function status_im$ethereum$core$chain_keyword(db){
return status_im.ethereum.core.network__GT_chain_keyword.call(null,status_im.ethereum.core.get_current_network.call(null,db));
});
status_im.ethereum.core.chain_id = (function status_im$ethereum$core$chain_id(db){
return status_im.ethereum.core.network__GT_chain_id.call(null,status_im.ethereum.core.get_current_network.call(null,db));
});
status_im.ethereum.core.snt_symbol = (function status_im$ethereum$core$snt_symbol(db){
return status_im.ethereum.core.chain_keyword__GT_snt_symbol.call(null,status_im.ethereum.core.chain_keyword.call(null,db));
});
status_im.ethereum.core.address_EQ_ = (function status_im$ethereum$core$address_EQ_(address1,address2){
var and__4115__auto__ = address1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = address2;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,status_im.ethereum.core.normalized_hex.call(null,address1)),clojure.string.lower_case.call(null,status_im.ethereum.core.normalized_hex.call(null,address2)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
status_im.ethereum.core.public_key__GT_address = (function status_im$ethereum$core$public_key__GT_address(public_key){
var length = cljs.core.count.call(null,public_key);
var normalized_key = (function (){var G__18604 = length;
switch (G__18604) {
case (132):
return ["0x",cljs.core.subs.call(null,public_key,(4))].join('');

break;
case (130):
return public_key;

break;
case (128):
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(public_key)].join('');

break;
default:
return null;

}
})();
if(cljs.core.truth_(normalized_key)){
return cljs.core.subs.call(null,status_im.ethereum.core.sha3.call(null,normalized_key),(26));
} else {
return null;
}
});
/**
 * Converts a hexstring to UTF8 text.
 */
status_im.ethereum.core.hex__GT_text = (function status_im$ethereum$core$hex__GT_text(data){
var or__4126__auto__ = status_im.ethereum.core.hex_to_utf8.call(null,data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return data;
}
});
Object.defineProperty(module.exports, "public_key_length", { enumerable: false, get: function() { return status_im.ethereum.core.public_key_length; } });
Object.defineProperty(module.exports, "utf8_to_hex", { enumerable: false, get: function() { return status_im.ethereum.core.utf8_to_hex; } });
Object.defineProperty(module.exports, "hex__GT_text", { enumerable: false, get: function() { return status_im.ethereum.core.hex__GT_text; } });
Object.defineProperty(module.exports, "custom_rpc_node_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.custom_rpc_node_QMARK_; } });
Object.defineProperty(module.exports, "address_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.address_QMARK_; } });
Object.defineProperty(module.exports, "custom_rpc_node_id_len", { enumerable: false, get: function() { return status_im.ethereum.core.custom_rpc_node_id_len; } });
Object.defineProperty(module.exports, "chain_keyword__GT_snt_symbol", { enumerable: false, get: function() { return status_im.ethereum.core.chain_keyword__GT_snt_symbol; } });
Object.defineProperty(module.exports, "BSC_mainnet_chain_id", { enumerable: false, get: function() { return status_im.ethereum.core.BSC_mainnet_chain_id; } });
Object.defineProperty(module.exports, "current_network", { enumerable: false, get: function() { return status_im.ethereum.core.current_network; } });
Object.defineProperty(module.exports, "get_current_network", { enumerable: false, get: function() { return status_im.ethereum.core.get_current_network; } });
Object.defineProperty(module.exports, "hex_to_utf8", { enumerable: false, get: function() { return status_im.ethereum.core.hex_to_utf8; } });
Object.defineProperty(module.exports, "network_with_upstream_rpc_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.network_with_upstream_rpc_QMARK_; } });
Object.defineProperty(module.exports, "public_key__GT_address", { enumerable: false, get: function() { return status_im.ethereum.core.public_key__GT_address; } });
Object.defineProperty(module.exports, "network__GT_network_name", { enumerable: false, get: function() { return status_im.ethereum.core.network__GT_network_name; } });
Object.defineProperty(module.exports, "chain_id__GT_chain_keyword", { enumerable: false, get: function() { return status_im.ethereum.core.chain_id__GT_chain_keyword; } });
Object.defineProperty(module.exports, "coordinates", { enumerable: false, get: function() { return status_im.ethereum.core.coordinates; } });
Object.defineProperty(module.exports, "get_default_account", { enumerable: false, get: function() { return status_im.ethereum.core.get_default_account; } });
Object.defineProperty(module.exports, "network__GT_chain_id", { enumerable: false, get: function() { return status_im.ethereum.core.network__GT_chain_id; } });
Object.defineProperty(module.exports, "chains", { enumerable: false, get: function() { return status_im.ethereum.core.chains; } });
Object.defineProperty(module.exports, "BSC_testnet_chain_id", { enumerable: false, get: function() { return status_im.ethereum.core.BSC_testnet_chain_id; } });
Object.defineProperty(module.exports, "chain_keyword", { enumerable: false, get: function() { return status_im.ethereum.core.chain_keyword; } });
Object.defineProperty(module.exports, "network__GT_chain_name", { enumerable: false, get: function() { return status_im.ethereum.core.network__GT_chain_name; } });
Object.defineProperty(module.exports, "sidechain_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.sidechain_QMARK_; } });
Object.defineProperty(module.exports, "chain_id__GT_chain_name", { enumerable: false, get: function() { return status_im.ethereum.core.chain_id__GT_chain_name; } });
Object.defineProperty(module.exports, "sha3", { enumerable: false, get: function() { return status_im.ethereum.core.sha3; } });
Object.defineProperty(module.exports, "normalized_hex", { enumerable: false, get: function() { return status_im.ethereum.core.normalized_hex; } });
Object.defineProperty(module.exports, "hex_prefix", { enumerable: false, get: function() { return status_im.ethereum.core.hex_prefix; } });
Object.defineProperty(module.exports, "snt_symbol", { enumerable: false, get: function() { return status_im.ethereum.core.snt_symbol; } });
Object.defineProperty(module.exports, "current_address", { enumerable: false, get: function() { return status_im.ethereum.core.current_address; } });
Object.defineProperty(module.exports, "testnet_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.testnet_QMARK_; } });
Object.defineProperty(module.exports, "chain_id", { enumerable: false, get: function() { return status_im.ethereum.core.chain_id; } });
Object.defineProperty(module.exports, "binance_chain_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.binance_chain_QMARK_; } });
Object.defineProperty(module.exports, "addresses_without_watch", { enumerable: false, get: function() { return status_im.ethereum.core.addresses_without_watch; } });
Object.defineProperty(module.exports, "address_EQ_", { enumerable: false, get: function() { return status_im.ethereum.core.address_EQ_; } });
Object.defineProperty(module.exports, "chain_keyword__GT_chain_id", { enumerable: false, get: function() { return status_im.ethereum.core.chain_keyword__GT_chain_id; } });
Object.defineProperty(module.exports, "binance_chain_id_QMARK_", { enumerable: false, get: function() { return status_im.ethereum.core.binance_chain_id_QMARK_; } });
Object.defineProperty(module.exports, "naked_address", { enumerable: false, get: function() { return status_im.ethereum.core.naked_address; } });
Object.defineProperty(module.exports, "default_address", { enumerable: false, get: function() { return status_im.ethereum.core.default_address; } });
Object.defineProperty(module.exports, "network__GT_chain_keyword", { enumerable: false, get: function() { return status_im.ethereum.core.network__GT_chain_keyword; } });
//# sourceMappingURL=status_im.ethereum.core.js.map
