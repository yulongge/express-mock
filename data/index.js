//'use strict';
const HomeData = require('./home_data.json');
const ExploreData = require('./explore_data.json');
const DetailData = require('./detail_data.json');
const BalanceData = require('./balance_data.json');
const TestData = require('./test_data.json');
const dyTest = require('./test_data.js');
const PluginListData = require('./pluginlist_data.json');
const ShopRecordData = require('./shoprecord_data.json');
const ChargeRecordData = require('./charge_record.json');
const CreateData = require('./create.json');
const LoginData = require('./login.json');
const LogoutData = require('./logout.json');
const PrizeListData = require('./activity_prizelist.json');
const ChargeData = require('./charge.json');
const PayStatus = require('./paystatus.json');
const Online = require('./setonline.json');
const Offline = require('./setoffline.json');
const PrizeSave = require('./prizesave.json');
const PrizeInfo = require('./prizeinfo.json');
const ParamConf = require('./conf.json');
const ParamConfInfo = require('./confinfo.json');
const UploadImage = require('./uploadImage.json');

console.log(dyTest, 'dyTest');

module.exports = {
	index: HomeData,
	list: ExploreData,
	info: DetailData,
	balance: BalanceData,
	shoplist: PluginListData,
	shoprecord: ShopRecordData,
	chargerecord: ChargeRecordData,
	createshop: CreateData,
	login: LoginData,
	logout: LogoutData,
	prizelist: PrizeListData,
	charge: ChargeData,
	paystatus: PayStatus,
	test: TestData,
	online: Online,
	offline: Offline,
	prizeinfo: PrizeInfo,
	prizesave: PrizeSave,
	paramconf: ParamConf,
	paramconfinfo: ParamConfInfo,
	uploadimage: UploadImage
}
