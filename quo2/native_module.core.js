var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react_native.js");
require("./utils.validators.js");
require("./taoensso.timbre.js");
require("./react_native.platform.js");
require("./react_native.core.js");
require("./utils.transforms.js");
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

$CLJS.SHADOW_ENV.setLoaded("native_module.core.js");

goog.provide('native_module.core');
native_module.core.status = (function native_module$core$status(){
if((!((shadow.js.shim.module$react_native.NativeModules == null)))){
return shadow.js.shim.module$react_native.NativeModules.Status;
} else {
return null;
}
});
native_module.core.init = (function native_module$core$init(handler){
return react_native.core.device_event_emitter.addListener("gethEvent",(function (p1__18221_SHARP_){
return handler.call(null,p1__18221_SHARP_.jsonEvent);
}));
});
native_module.core.clear_web_data = (function native_module$core$clear_web_data(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] clear-web-data"], null);
}),null)),null,26560570);

if(cljs.core.truth_(native_module.core.status.call(null))){
native_module.core.status.call(null).clearCookies();

return native_module.core.status.call(null).clearStorageAPIs();
} else {
return null;
}
});
native_module.core.init_keystore = (function native_module$core$init_keystore(key_uid,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] init-keystore",key_uid], null);
}),null)),null,1355792718);

return native_module.core.status.call(null).initKeystore(key_uid,callback);
});
native_module.core.open_accounts = (function native_module$core$open_accounts(callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] open-accounts"], null);
}),null)),null,-1259472257);

return native_module.core.status.call(null).openAccounts((function (p1__18242_SHARP_){
return callback.call(null,utils.transforms.json__GT_clj.call(null,p1__18242_SHARP_));
}));
});
native_module.core.prepare_dir_and_update_config = (function native_module$core$prepare_dir_and_update_config(key_uid,config,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] prepare-dir-and-update-config"], null);
}),null)),null,428192506);

return native_module.core.status.call(null).prepareDirAndUpdateConfig(key_uid,config,(function (p1__18249_SHARP_){
return callback.call(null,utils.transforms.json__GT_clj.call(null,p1__18249_SHARP_));
}));
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.save_account_and_login = (function native_module$core$save_account_and_login(key_uid,multiaccount_data,hashed_password,settings,config,accounts_data){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] save-account-and-login","multiaccount-data",multiaccount_data], null);
}),null)),null,191379719);

native_module.core.clear_web_data.call(null);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).saveAccountAndLogin(multiaccount_data,hashed_password,settings,config,accounts_data);
}));
});
/**
 * NOTE: chat-key is a whisper private key sent from keycard
 */
native_module.core.save_multiaccount_and_login_with_keycard = (function native_module$core$save_multiaccount_and_login_with_keycard(key_uid,multiaccount_data,password,settings,config,accounts_data,chat_key){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] save-account-and-login-with-keycard"], null);
}),null)),null,-1915587655);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).saveAccountAndLoginWithKeycard(multiaccount_data,password,settings,config,accounts_data,chat_key);
}));
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.login_with_config = (function native_module$core$login_with_config(key_uid,account_data,hashed_password,config){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] loginWithConfig"], null);
}),null)),null,-1366658091);

native_module.core.clear_web_data.call(null);

var config__$1 = (cljs.core.truth_(config)?utils.transforms.clj__GT_json.call(null,config):"");
return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).loginWithConfig(account_data,hashed_password,config__$1);
}));
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.login_account = (function native_module$core$login_account(p__18268){
var map__18271 = p__18268;
var map__18271__$1 = (((((!((map__18271 == null))))?(((((map__18271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18271):map__18271);
var request = map__18271__$1;
var keyUid = cljs.core.get.call(null,map__18271__$1,new cljs.core.Keyword(null,"keyUid","keyUid",1612157334));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,88,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] loginWithConfig"], null);
}),null)),null,-1983823024);

native_module.core.clear_web_data.call(null);

return native_module.core.init_keystore.call(null,keyUid,(function (){
return native_module.core.status.call(null).loginAccount(utils.transforms.clj__GT_json.call(null,request));
}));
});
native_module.core.create_account_and_login = (function native_module$core$create_account_and_login(request){
return native_module.core.status.call(null).createAccountAndLogin(utils.transforms.clj__GT_json.call(null,request));
});
native_module.core.restore_account_and_login = (function native_module$core$restore_account_and_login(request){
return native_module.core.status.call(null).restoreAccountAndLogin(utils.transforms.clj__GT_json.call(null,request));
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.export_db = (function native_module$core$export_db(key_uid,account_data,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] export-db"], null);
}),null)),null,547333950);

native_module.core.clear_web_data.call(null);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).exportUnencryptedDatabase(account_data,hashed_password,callback);
}));
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.import_db = (function native_module$core$import_db(key_uid,account_data,hashed_password){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] import-db"], null);
}),null)),null,140453270);

native_module.core.clear_web_data.call(null);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).importUnencryptedDatabase(account_data,hashed_password);
}));
});
native_module.core.logout = (function native_module$core$logout(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,122,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] logout"], null);
}),null)),null,-1827488741);

native_module.core.clear_web_data.call(null);

return native_module.core.status.call(null).logout();
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 * 
 * this function is used after storing an account when you still want to
 * derive accounts from it, because saving an account flushes the loaded keys
 * from memory
 */
native_module.core.multiaccount_load_account = (function native_module$core$multiaccount_load_account(address,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,133,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] multiaccount-load-account"], null);
}),null)),null,1436999281);

return native_module.core.status.call(null).multiAccountLoadAccount(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"password","password",417022471),hashed_password], null)),callback);
});
/**
 * NOTE: this should be named derive-accounts
 * this only derive addresses, they still need to be stored
 * with `multiaccount-store-derived` if you want to be able to
 * reuse the derived addresses later
 */
native_module.core.multiaccount_derive_addresses = (function native_module$core$multiaccount_derive_addresses(account_id,paths,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,145,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module]  multiaccount-derive-addresses"], null);
}),null)),null,368141780);

if(cljs.core.truth_(native_module.core.status.call(null))){
return native_module.core.status.call(null).multiAccountDeriveAddresses(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accountID","accountID",75658708),account_id,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),callback);
} else {
return null;
}
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 * 
 * this stores the account and flush keys in memory so
 * in order to also store derived accounts like initial wallet
 * and chat accounts, you need to load the account again with
 * `multiaccount-load-account` before using `multiaccount-store-derived`
 * and the id of the account stored will have changed
 */
native_module.core.multiaccount_store_account = (function native_module$core$multiaccount_store_account(account_id,key_uid,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] multiaccount-store-account"], null);
}),null)),null,1985660341);

if(cljs.core.truth_(native_module.core.status.call(null))){
return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).multiAccountStoreAccount(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accountID","accountID",75658708),account_id,new cljs.core.Keyword(null,"password","password",417022471),hashed_password], null)),callback);
}));
} else {
return null;
}
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.multiaccount_store_derived = (function native_module$core$multiaccount_store_derived(account_id,key_uid,paths,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,173,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] multiaccount-store-derived","account-id",account_id], null);
}),null)),null,1316791786);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).multiAccountStoreDerived(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accountID","accountID",75658708),account_id,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths,new cljs.core.Keyword(null,"password","password",417022471),hashed_password], null)),callback);
}));
});
/**
 * used to generate multiple multiaccounts for onboarding
 * NOTE: nothing is saved so you will need to use
 * `multiaccount-store-account` on the selected multiaccount
 * to store the key
 */
native_module.core.multiaccount_generate_and_derive_addresses = (function native_module$core$multiaccount_generate_and_derive_addresses(n,mnemonic_length,paths,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module]  multiaccount-generate-and-derive-addresses"], null);
}),null)),null,1228765237);

return native_module.core.status.call(null).multiAccountGenerateAndDeriveAddresses(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"mnemonicPhraseLength","mnemonicPhraseLength",-1896036359),mnemonic_length,new cljs.core.Keyword(null,"bip39Passphrase","bip39Passphrase",-1213223598),"",new cljs.core.Keyword(null,"paths","paths",-1807389588),paths], null)),callback);
});
native_module.core.multiaccount_import_mnemonic = (function native_module$core$multiaccount_import_mnemonic(mnemonic,password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,200,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] multiaccount-import-mnemonic"], null);
}),null)),null,-1305756198);

return native_module.core.status.call(null).multiAccountImportMnemonic(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mnemonicPhrase","mnemonicPhrase",528356999),mnemonic,new cljs.core.Keyword(null,"Bip39Passphrase","Bip39Passphrase",122117123),password], null)),callback);
});
native_module.core.multiaccount_import_private_key = (function native_module$core$multiaccount_import_private_key(private_key,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] multiaccount-import-private-key"], null);
}),null)),null,355372225);

return native_module.core.status.call(null).multiAccountImportPrivateKey(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"privateKey","privateKey",1845961641),private_key], null)),callback);
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.verify = (function native_module$core$verify(address,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] verify"], null);
}),null)),null,619836667);

return native_module.core.status.call(null).verify(address,hashed_password,callback);
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.verify_database_password = (function native_module$core$verify_database_password(key_uid,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,223,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] verify-database-password"], null);
}),null)),null,-1809336632);

return native_module.core.status.call(null).verifyDatabasePassword(key_uid,hashed_password,callback);
});
native_module.core.login_with_keycard = (function native_module$core$login_with_keycard(p__18304){
var map__18305 = p__18304;
var map__18305__$1 = (((((!((map__18305 == null))))?(((((map__18305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18305):map__18305);
var key_uid = cljs.core.get.call(null,map__18305__$1,new cljs.core.Keyword(null,"key-uid","key-uid",-2084857503));
var multiaccount_data = cljs.core.get.call(null,map__18305__$1,new cljs.core.Keyword(null,"multiaccount-data","multiaccount-data",1075904149));
var password = cljs.core.get.call(null,map__18305__$1,new cljs.core.Keyword(null,"password","password",417022471));
var chat_key = cljs.core.get.call(null,map__18305__$1,new cljs.core.Keyword(null,"chat-key","chat-key",629294701));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,228,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] login-with-keycard"], null);
}),null)),null,1929507360);

native_module.core.clear_web_data.call(null);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).loginWithKeycard(multiaccount_data,password,chat_key);
}));
});
native_module.core.set_soft_input_mode = (function native_module$core$set_soft_input_mode(mode){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,236,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module]  set-soft-input-mode"], null);
}),null)),null,713269566);

return native_module.core.status.call(null).setSoftInputMode(mode);
});
native_module.core.call_rpc = (function native_module$core$call_rpc(payload,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,241,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] call-rpc"], null);
}),null)),null,-1737998488);

return native_module.core.status.call(null).callRPC(payload,callback);
});
native_module.core.call_private_rpc = (function native_module$core$call_private_rpc(payload,callback){
return native_module.core.status.call(null).callPrivateRPC(payload,callback);
});
/**
 * used for keycard
 */
native_module.core.hash_transaction = (function native_module$core$hash_transaction(rpcParams,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,251,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hash-transaction"], null);
}),null)),null,1575577478);

return native_module.core.status.call(null).hashTransaction(rpcParams,callback);
});
/**
 * used for keycard
 */
native_module.core.hash_message = (function native_module$core$hash_message(message,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,257,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hash-message"], null);
}),null)),null,1593104587);

return native_module.core.status.call(null).hashMessage(message,callback);
});
/**
 * Checks whether the device has allows connecting to the local server
 */
native_module.core.local_pairing_preflight_outbound_check = (function native_module$core$local_pairing_preflight_outbound_check(callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"native-module.core",null,263,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] Performing local pairing preflight check"], null);
}),null)),null,621827519);

if(react_native.platform.ios_QMARK_){
return native_module.core.status.call(null).localPairingPreflightOutboundCheck(callback);
} else {
return null;
}
});
/**
 * Generates connection string form status-go for the purpose of local pairing on the sender end
 */
native_module.core.get_connection_string_for_bootstrapping_another_device = (function native_module$core$get_connection_string_for_bootstrapping_another_device(config_json,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"native-module.core",null,270,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] Fetching Connection String",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"get-connection-string-for-bootstrapping-another-device","get-connection-string-for-bootstrapping-another-device",887247864),new cljs.core.Keyword(null,"config-json","config-json",-2135731477),config_json], null)], null);
}),null)),null,1892216396);

return native_module.core.status.call(null).getConnectionStringForBootstrappingAnotherDevice(config_json,callback);
});
/**
 * Provides connection string to status-go for the purpose of local pairing on the receiver end
 */
native_module.core.input_connection_string_for_bootstrapping = (function native_module$core$input_connection_string_for_bootstrapping(connection_string,config_json,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"native-module.core",null,278,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] Sending Connection String",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"input-connection-string-for-bootstrapping","input-connection-string-for-bootstrapping",-1174214693),new cljs.core.Keyword(null,"config-json","config-json",-2135731477),config_json,new cljs.core.Keyword(null,"connection-string","connection-string",71626353),connection_string], null)], null);
}),null)),null,-1065285388);

return native_module.core.status.call(null).inputConnectionStringForBootstrapping(connection_string,config_json,callback);
});
/**
 * Provides a community id (public key) to status-go which is first deserialized
 *   and then compressed. Example input/output :
 *   input key  = zQ3shTAten2v9CwyQD1Kc7VXAqNPDcHZAMsfbLHCZEx6nFqk9 and
 *   output key = 0x025596a7ff87da36860a84b0908191ce60a504afc94aac93c1abd774f182967ce6
 */
native_module.core.deserialize_and_compress_key = (function native_module$core$deserialize_and_compress_key(key,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"native-module.core",null,290,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] Deserializing and then compressing public key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"deserialize-and-compress-key","deserialize-and-compress-key",-942953176),new cljs.core.Keyword(null,"key","key",-1516042587),key], null)], null);
}),null)),null,1882625721);

return native_module.core.status.call(null).deserializeAndCompressKey(key,callback);
});
/**
 * Provides compressed key to status-go and gets back the uncompressed public key via deserialization
 */
native_module.core.compressed_key__GT_public_key = (function native_module$core$compressed_key__GT_public_key(public_key,deserialization_key,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"native-module.core",null,298,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] Deserializing compressed key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"compressed-key->public-key","compressed-key->public-key",666996923),new cljs.core.Keyword(null,"public-key","public-key",-2106850051),public_key], null)], null);
}),null)),null,1702620364);

return native_module.core.status.call(null).multiformatDeserializePublicKey(public_key,deserialization_key,callback);
});
/**
 * used for keycard
 */
native_module.core.hash_typed_data = (function native_module$core$hash_typed_data(data,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,306,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hash-typed-data"], null);
}),null)),null,633462041);

return native_module.core.status.call(null).hashTypedData(data,callback);
});
/**
 * used for keycard
 */
native_module.core.hash_typed_data_v4 = (function native_module$core$hash_typed_data_v4(data,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,312,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hash-typed-data-v4"], null);
}),null)),null,1841938615);

return native_module.core.status.call(null).hashTypedDataV4(data,callback);
});
/**
 * used for keycard
 */
native_module.core.send_transaction_with_signature = (function native_module$core$send_transaction_with_signature(rpcParams,sig,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,318,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] send-transaction-with-signature"], null);
}),null)),null,1581626835);

return native_module.core.status.call(null).sendTransactionWithSignature(rpcParams,sig,callback);
});
/**
 * NOTE: beware, the password in rpcParams has to be sha3 hashed
 */
native_module.core.sign_message = (function native_module$core$sign_message(rpcParams,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,324,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] sign-message"], null);
}),null)),null,1737888444);

return native_module.core.status.call(null).signMessage(rpcParams,callback);
});
native_module.core.recover_message = (function native_module$core$recover_message(rpcParams,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,329,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] recover"], null);
}),null)),null,-899732762);

return native_module.core.status.call(null).recover(rpcParams,callback);
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.send_transaction = (function native_module$core$send_transaction(rpcParams,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,335,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] send-transaction"], null);
}),null)),null,1341118528);

return native_module.core.status.call(null).sendTransaction(rpcParams,hashed_password,callback);
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.sign_typed_data = (function native_module$core$sign_typed_data(data,account,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,341,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] sign-typed-data"], null);
}),null)),null,-197080818);

return native_module.core.status.call(null).signTypedData(data,account,hashed_password,callback);
});
/**
 * NOTE: beware, the password has to be sha3 hashed
 */
native_module.core.sign_typed_data_v4 = (function native_module$core$sign_typed_data_v4(data,account,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,347,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] sign-typed-data-v4"], null);
}),null)),null,-1566474396);

return native_module.core.status.call(null).signTypedDataV4(data,account,hashed_password,callback);
});
native_module.core.send_logs = (function native_module$core$send_logs(dbJson,js_logs,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] send-logs"], null);
}),null)),null,-524735205);

return native_module.core.status.call(null).sendLogs(dbJson,js_logs,callback);
});
native_module.core.close_application = (function native_module$core$close_application(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,357,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] close-application"], null);
}),null)),null,-814677224);

return native_module.core.status.call(null).closeApplication();
});
native_module.core.connection_change = (function native_module$core$connection_change(type,expensive_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,362,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] connection-change"], null);
}),null)),null,-1671789178);

return native_module.core.status.call(null).connectionChange(type,cljs.core.boolean$.call(null,expensive_QMARK_));
});
native_module.core.app_state_change = (function native_module$core$app_state_change(state){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,367,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] app-state-change"], null);
}),null)),null,1276845319);

return native_module.core.status.call(null).appStateChange(state);
});
native_module.core.start_local_notifications = (function native_module$core$start_local_notifications(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,372,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] start-local-notifications"], null);
}),null)),null,102635585);

return native_module.core.status.call(null).startLocalNotifications();
});
native_module.core.set_blank_preview_flag = (function native_module$core$set_blank_preview_flag(flag){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,377,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] set-blank-preview-flag"], null);
}),null)),null,-1173948114);

return native_module.core.status.call(null).setBlankPreviewFlag(flag);
});
native_module.core.get_device_model_info = (function native_module$core$get_device_model_info(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,382,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] get-device-model-info"], null);
}),null)),null,2071362566);

var temp__5735__auto__ = native_module.core.status.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var status = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),status.model,new cljs.core.Keyword(null,"brand","brand",557863343),status.brand,new cljs.core.Keyword(null,"build-id","build-id",1642831089),status.buildId,new cljs.core.Keyword(null,"device-id","device-id",1535359525),status.deviceId], null);
} else {
return null;
}
});
native_module.core.get_node_config = (function native_module$core$get_node_config(callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,392,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] get-node-config"], null);
}),null)),null,-106081952);

return native_module.core.status.call(null).getNodeConfig(callback);
});
native_module.core.toggle_webview_debug = (function native_module$core$toggle_webview_debug(on){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,397,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] toggle-webview-debug",on], null);
}),null)),null,1958185771);

return native_module.core.status.call(null).toggleWebviewDebug(on);
});
native_module.core.rooted_device_QMARK_ = (function native_module$core$rooted_device_QMARK_(callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,402,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] rooted-device?"], null);
}),null)),null,-1162886213);

if(react_native.platform.ios_QMARK_){
return callback.call(null,false);
} else {
if(react_native.platform.android_QMARK_){
if(cljs.core.truth_(native_module.core.status.call(null))){
return native_module.core.status.call(null).isDeviceRooted(callback);
} else {
return callback.call(null,true);
}
} else {
return callback.call(null,true);

}
}
});
/**
 * Generate a 3 words random name based on the user public-key, synchronously
 */
native_module.core.generate_gfycat = (function native_module$core$generate_gfycat(public_key){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,421,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] generate-gfycat"], null);
}),null)),null,1087709801);

if(cljs.core.truth_(utils.validators.valid_public_key_QMARK_.call(null,public_key))){
return native_module.core.status.call(null).generateAlias(public_key);
} else {
return null;
}
});
/**
 * Generate a icon based on a string, synchronously
 */
native_module.core.identicon = (function native_module$core$identicon(seed){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,428,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] identicon"], null);
}),null)),null,247356182);

return native_module.core.status.call(null).identicon(seed);
});
native_module.core.encode_transfer = (function native_module$core$encode_transfer(to_norm,amount_hex){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,433,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] encode-transfer"], null);
}),null)),null,-558961416);

return native_module.core.status.call(null).encodeTransfer(to_norm,amount_hex);
});
native_module.core.decode_parameters = (function native_module$core$decode_parameters(bytes_string,types){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,438,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] decode-parameters"], null);
}),null)),null,1664099038);

var json_str = native_module.core.status.call(null).decodeParameters(utils.transforms.clj__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bytesString","bytesString",-1013775793),bytes_string,new cljs.core.Keyword(null,"types","types",590030639),types], null)));
return utils.transforms.json__GT_clj.call(null,json_str);
});
native_module.core.hex_to_number = (function native_module$core$hex_to_number(hex){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hex-to-number"], null);
}),null)),null,-202923364);

var json_str = native_module.core.status.call(null).hexToNumber(hex);
return utils.transforms.json__GT_clj.call(null,json_str);
});
native_module.core.number_to_hex = (function native_module$core$number_to_hex(num){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,451,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] number-to-hex"], null);
}),null)),null,-807178717);

return native_module.core.status.call(null).numberToHex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
native_module.core.sha3 = (function native_module$core$sha3(str){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,456,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] sha3"], null);
}),null)),null,1456963678);

return native_module.core.status.call(null).sha3(str);
});
native_module.core.utf8_to_hex = (function native_module$core$utf8_to_hex(str){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,461,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] utf8-to-hex"], null);
}),null)),null,-1713485158);

return native_module.core.status.call(null).utf8ToHex(str);
});
native_module.core.hex_to_utf8 = (function native_module$core$hex_to_utf8(str){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,466,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] hex-to-utf8"], null);
}),null)),null,-487729369);

return native_module.core.status.call(null).hexToUtf8(str);
});
native_module.core.check_address_checksum = (function native_module$core$check_address_checksum(address){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,471,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] check-address-checksum"], null);
}),null)),null,1751194519);

var result = native_module.core.status.call(null).checkAddressChecksum(address);
return utils.transforms.json__GT_clj.call(null,result);
});
native_module.core.address_QMARK_ = (function native_module$core$address_QMARK_(address){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,477,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] address?"], null);
}),null)),null,-1446782156);

var result = native_module.core.status.call(null).isAddress(address);
return utils.transforms.json__GT_clj.call(null,result);
});
native_module.core.to_checksum_address = (function native_module$core$to_checksum_address(address){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,483,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] to-checksum-address"], null);
}),null)),null,793883055);

return native_module.core.status.call(null).toChecksumAddress(address);
});
/**
 * Generate an icon based on a string and 3 words random name asynchronously
 */
native_module.core.gfycat_identicon_async = (function native_module$core$gfycat_identicon_async(seed,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,489,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] gfycat-identicon-async"], null);
}),null)),null,-1652588697);

return native_module.core.status.call(null).generateAliasAndIdenticonAsync(seed,callback);
});
/**
 * Validate that a mnemonic conforms to BIP39 dictionary/checksum standards
 */
native_module.core.validate_mnemonic = (function native_module$core$validate_mnemonic(mnemonic,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,495,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] validate-mnemonic"], null);
}),null)),null,697339662);

return native_module.core.status.call(null).validateMnemonic(mnemonic,callback);
});
/**
 * Delete multiaccount from database, deletes multiaccount's database and
 *   key files.
 */
native_module.core.delete_multiaccount = (function native_module$core$delete_multiaccount(key_uid,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,502,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] delete-multiaccount"], null);
}),null)),null,-543706990);

return native_module.core.status.call(null).deleteMultiaccount(key_uid,callback);
});
/**
 * Delete imported key file.
 */
native_module.core.delete_imported_key = (function native_module$core$delete_imported_key(key_uid,address,hashed_password,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,508,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] delete-imported-key"], null);
}),null)),null,666545);

return native_module.core.status.call(null).deleteImportedKey(key_uid,address,hashed_password,callback);
});
native_module.core.reset_keyboard_input = (function native_module$core$reset_keyboard_input(input,selection){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,513,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] resetKeyboardInput"], null);
}),null)),null,804590550);

if(react_native.platform.android_QMARK_){
return native_module.core.status.call(null).resetKeyboardInputCursor(input,selection);
} else {
return null;
}
});
native_module.core.reset_password = (function native_module$core$reset_password(key_uid,current_password_SHARP_,new_password_SHARP_,callback){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,520,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] change-database-password"], null);
}),null)),null,-778171057);

return native_module.core.init_keystore.call(null,key_uid,(function (){
return native_module.core.status.call(null).reEncryptDbAndKeystore(key_uid,current_password_SHARP_,new_password_SHARP_,callback);
}));
});
native_module.core.convert_to_keycard_account = (function native_module$core$convert_to_keycard_account(p__18421,settings,current_password_SHARP_,new_password,callback){
var map__18423 = p__18421;
var map__18423__$1 = (((((!((map__18423 == null))))?(((((map__18423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18423):map__18423);
var multiaccount_data = map__18423__$1;
var key_uid = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"key-uid","key-uid",-2084857503));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"native-module.core",null,527,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[native-module] convert-to-keycard-account"], null);
}),null)),null,-1571077909);

return native_module.core.status.call(null).convertToKeycardAccount(key_uid,utils.transforms.clj__GT_json.call(null,multiaccount_data),utils.transforms.clj__GT_json.call(null,settings),"",current_password_SHARP_,new_password,callback);
});
native_module.core.backup_disabled_data_dir = (function native_module$core$backup_disabled_data_dir(){
return native_module.core.status.call(null).backupDisabledDataDir();
});
native_module.core.keystore_dir = (function native_module$core$keystore_dir(){
return native_module.core.status.call(null).keystoreDir();
});
native_module.core.log_file_directory = (function native_module$core$log_file_directory(){
return native_module.core.status.call(null).logFileDirectory();
});
native_module.core.init_status_go_logging = (function native_module$core$init_status_go_logging(p__18436){
var map__18437 = p__18436;
var map__18437__$1 = (((((!((map__18437 == null))))?(((((map__18437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18437):map__18437);
var enable_QMARK_ = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"enable?","enable?",-407239694));
var mobile_system_QMARK_ = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"mobile-system?","mobile-system?",888565271));
var log_level = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
var callback = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return native_module.core.status.call(null).initLogging(enable_QMARK_,mobile_system_QMARK_,log_level,callback);
});
Object.defineProperty(module.exports, "multiaccount_generate_and_derive_addresses", { enumerable: false, get: function() { return native_module.core.multiaccount_generate_and_derive_addresses; } });
Object.defineProperty(module.exports, "set_soft_input_mode", { enumerable: false, get: function() { return native_module.core.set_soft_input_mode; } });
Object.defineProperty(module.exports, "hex_to_number", { enumerable: false, get: function() { return native_module.core.hex_to_number; } });
Object.defineProperty(module.exports, "get_device_model_info", { enumerable: false, get: function() { return native_module.core.get_device_model_info; } });
Object.defineProperty(module.exports, "utf8_to_hex", { enumerable: false, get: function() { return native_module.core.utf8_to_hex; } });
Object.defineProperty(module.exports, "hash_typed_data_v4", { enumerable: false, get: function() { return native_module.core.hash_typed_data_v4; } });
Object.defineProperty(module.exports, "sign_typed_data_v4", { enumerable: false, get: function() { return native_module.core.sign_typed_data_v4; } });
Object.defineProperty(module.exports, "local_pairing_preflight_outbound_check", { enumerable: false, get: function() { return native_module.core.local_pairing_preflight_outbound_check; } });
Object.defineProperty(module.exports, "call_private_rpc", { enumerable: false, get: function() { return native_module.core.call_private_rpc; } });
Object.defineProperty(module.exports, "hash_message", { enumerable: false, get: function() { return native_module.core.hash_message; } });
Object.defineProperty(module.exports, "input_connection_string_for_bootstrapping", { enumerable: false, get: function() { return native_module.core.input_connection_string_for_bootstrapping; } });
Object.defineProperty(module.exports, "compressed_key__GT_public_key", { enumerable: false, get: function() { return native_module.core.compressed_key__GT_public_key; } });
Object.defineProperty(module.exports, "clear_web_data", { enumerable: false, get: function() { return native_module.core.clear_web_data; } });
Object.defineProperty(module.exports, "hash_typed_data", { enumerable: false, get: function() { return native_module.core.hash_typed_data; } });
Object.defineProperty(module.exports, "connection_change", { enumerable: false, get: function() { return native_module.core.connection_change; } });
Object.defineProperty(module.exports, "address_QMARK_", { enumerable: false, get: function() { return native_module.core.address_QMARK_; } });
Object.defineProperty(module.exports, "close_application", { enumerable: false, get: function() { return native_module.core.close_application; } });
Object.defineProperty(module.exports, "hex_to_utf8", { enumerable: false, get: function() { return native_module.core.hex_to_utf8; } });
Object.defineProperty(module.exports, "delete_multiaccount", { enumerable: false, get: function() { return native_module.core.delete_multiaccount; } });
Object.defineProperty(module.exports, "get_node_config", { enumerable: false, get: function() { return native_module.core.get_node_config; } });
Object.defineProperty(module.exports, "convert_to_keycard_account", { enumerable: false, get: function() { return native_module.core.convert_to_keycard_account; } });
Object.defineProperty(module.exports, "init_keystore", { enumerable: false, get: function() { return native_module.core.init_keystore; } });
Object.defineProperty(module.exports, "sign_typed_data", { enumerable: false, get: function() { return native_module.core.sign_typed_data; } });
Object.defineProperty(module.exports, "set_blank_preview_flag", { enumerable: false, get: function() { return native_module.core.set_blank_preview_flag; } });
Object.defineProperty(module.exports, "verify_database_password", { enumerable: false, get: function() { return native_module.core.verify_database_password; } });
Object.defineProperty(module.exports, "number_to_hex", { enumerable: false, get: function() { return native_module.core.number_to_hex; } });
Object.defineProperty(module.exports, "backup_disabled_data_dir", { enumerable: false, get: function() { return native_module.core.backup_disabled_data_dir; } });
Object.defineProperty(module.exports, "identicon", { enumerable: false, get: function() { return native_module.core.identicon; } });
Object.defineProperty(module.exports, "keystore_dir", { enumerable: false, get: function() { return native_module.core.keystore_dir; } });
Object.defineProperty(module.exports, "multiaccount_store_derived", { enumerable: false, get: function() { return native_module.core.multiaccount_store_derived; } });
Object.defineProperty(module.exports, "init", { enumerable: false, get: function() { return native_module.core.init; } });
Object.defineProperty(module.exports, "call_rpc", { enumerable: false, get: function() { return native_module.core.call_rpc; } });
Object.defineProperty(module.exports, "send_logs", { enumerable: false, get: function() { return native_module.core.send_logs; } });
Object.defineProperty(module.exports, "hash_transaction", { enumerable: false, get: function() { return native_module.core.hash_transaction; } });
Object.defineProperty(module.exports, "multiaccount_import_mnemonic", { enumerable: false, get: function() { return native_module.core.multiaccount_import_mnemonic; } });
Object.defineProperty(module.exports, "save_account_and_login", { enumerable: false, get: function() { return native_module.core.save_account_and_login; } });
Object.defineProperty(module.exports, "sign_message", { enumerable: false, get: function() { return native_module.core.sign_message; } });
Object.defineProperty(module.exports, "deserialize_and_compress_key", { enumerable: false, get: function() { return native_module.core.deserialize_and_compress_key; } });
Object.defineProperty(module.exports, "create_account_and_login", { enumerable: false, get: function() { return native_module.core.create_account_and_login; } });
Object.defineProperty(module.exports, "logout", { enumerable: false, get: function() { return native_module.core.logout; } });
Object.defineProperty(module.exports, "app_state_change", { enumerable: false, get: function() { return native_module.core.app_state_change; } });
Object.defineProperty(module.exports, "delete_imported_key", { enumerable: false, get: function() { return native_module.core.delete_imported_key; } });
Object.defineProperty(module.exports, "save_multiaccount_and_login_with_keycard", { enumerable: false, get: function() { return native_module.core.save_multiaccount_and_login_with_keycard; } });
Object.defineProperty(module.exports, "export_db", { enumerable: false, get: function() { return native_module.core.export_db; } });
Object.defineProperty(module.exports, "prepare_dir_and_update_config", { enumerable: false, get: function() { return native_module.core.prepare_dir_and_update_config; } });
Object.defineProperty(module.exports, "import_db", { enumerable: false, get: function() { return native_module.core.import_db; } });
Object.defineProperty(module.exports, "encode_transfer", { enumerable: false, get: function() { return native_module.core.encode_transfer; } });
Object.defineProperty(module.exports, "start_local_notifications", { enumerable: false, get: function() { return native_module.core.start_local_notifications; } });
Object.defineProperty(module.exports, "sha3", { enumerable: false, get: function() { return native_module.core.sha3; } });
Object.defineProperty(module.exports, "multiaccount_store_account", { enumerable: false, get: function() { return native_module.core.multiaccount_store_account; } });
Object.defineProperty(module.exports, "login_with_config", { enumerable: false, get: function() { return native_module.core.login_with_config; } });
Object.defineProperty(module.exports, "toggle_webview_debug", { enumerable: false, get: function() { return native_module.core.toggle_webview_debug; } });
Object.defineProperty(module.exports, "recover_message", { enumerable: false, get: function() { return native_module.core.recover_message; } });
Object.defineProperty(module.exports, "validate_mnemonic", { enumerable: false, get: function() { return native_module.core.validate_mnemonic; } });
Object.defineProperty(module.exports, "check_address_checksum", { enumerable: false, get: function() { return native_module.core.check_address_checksum; } });
Object.defineProperty(module.exports, "to_checksum_address", { enumerable: false, get: function() { return native_module.core.to_checksum_address; } });
Object.defineProperty(module.exports, "multiaccount_derive_addresses", { enumerable: false, get: function() { return native_module.core.multiaccount_derive_addresses; } });
Object.defineProperty(module.exports, "log_file_directory", { enumerable: false, get: function() { return native_module.core.log_file_directory; } });
Object.defineProperty(module.exports, "send_transaction", { enumerable: false, get: function() { return native_module.core.send_transaction; } });
Object.defineProperty(module.exports, "init_status_go_logging", { enumerable: false, get: function() { return native_module.core.init_status_go_logging; } });
Object.defineProperty(module.exports, "decode_parameters", { enumerable: false, get: function() { return native_module.core.decode_parameters; } });
Object.defineProperty(module.exports, "generate_gfycat", { enumerable: false, get: function() { return native_module.core.generate_gfycat; } });
Object.defineProperty(module.exports, "status", { enumerable: false, get: function() { return native_module.core.status; } });
Object.defineProperty(module.exports, "reset_keyboard_input", { enumerable: false, get: function() { return native_module.core.reset_keyboard_input; } });
Object.defineProperty(module.exports, "send_transaction_with_signature", { enumerable: false, get: function() { return native_module.core.send_transaction_with_signature; } });
Object.defineProperty(module.exports, "rooted_device_QMARK_", { enumerable: false, get: function() { return native_module.core.rooted_device_QMARK_; } });
Object.defineProperty(module.exports, "multiaccount_import_private_key", { enumerable: false, get: function() { return native_module.core.multiaccount_import_private_key; } });
Object.defineProperty(module.exports, "gfycat_identicon_async", { enumerable: false, get: function() { return native_module.core.gfycat_identicon_async; } });
Object.defineProperty(module.exports, "open_accounts", { enumerable: false, get: function() { return native_module.core.open_accounts; } });
Object.defineProperty(module.exports, "reset_password", { enumerable: false, get: function() { return native_module.core.reset_password; } });
Object.defineProperty(module.exports, "login_account", { enumerable: false, get: function() { return native_module.core.login_account; } });
Object.defineProperty(module.exports, "multiaccount_load_account", { enumerable: false, get: function() { return native_module.core.multiaccount_load_account; } });
Object.defineProperty(module.exports, "restore_account_and_login", { enumerable: false, get: function() { return native_module.core.restore_account_and_login; } });
Object.defineProperty(module.exports, "verify", { enumerable: false, get: function() { return native_module.core.verify; } });
Object.defineProperty(module.exports, "login_with_keycard", { enumerable: false, get: function() { return native_module.core.login_with_keycard; } });
Object.defineProperty(module.exports, "get_connection_string_for_bootstrapping_another_device", { enumerable: false, get: function() { return native_module.core.get_connection_string_for_bootstrapping_another_device; } });
//# sourceMappingURL=native_module.core.js.map
