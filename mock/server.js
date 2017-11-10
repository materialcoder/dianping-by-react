var Koa = require("koa");
var Router = require("koa-router");

var app = new Koa();
var router = new Router();

//首页 -- 广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/get/homead', function (ctx, next) {
	ctx.body = homeAdData
});

//首页 -- 推荐列表
var homeListData = require("./home/list.js");
router.get('/get/homelist/:city/:page', function (ctx, next) {
	const params = ctx.params;
	const paramsCity = params.city;
	const paramsPage = params.page;

	console.log('当前城市：' + paramsCity);
	console.log('当前页数：' + paramsPage);

	ctx.body = homeListData
});

//搜索页--搜索结果列表 - 三个参数
var searchListData = require("./search/list.js");
router.get('/get/search/:page/:city/:category/:keyword', function(ctx, next) {
	const params = ctx.params;
	const paramsPage = params.page;
	const paramsCity = params.city;
	const paramsCategory = params.category;
	const paramsKeyword = params.keyword;

	console.log('当前页数：' + paramsPage);
	console.log('当前城市：' + paramsCity);
	console.log('当前类别：' + paramsCategory);
	console.log('关键字：' + paramsKeyword);

	ctx.body = searchListData;
});

//搜索页--搜索结果列表 - 两个参数
var searchListData = require("./search/list.js");
router.get('/get/search/:page/:city/:category', function(ctx, next) {
	const params = ctx.params;
	const paramsPage = params.page;
	const paramsCity = params.city;
	const paramsCategory = params.category;

	console.log('当前页数：' + paramsPage);
	console.log('当前城市：' + paramsCity);
	console.log('当前类别：' + paramsCategory);

	ctx.body = searchListData;
});

//详情页 -- 商户信息
var detailInfoData = require("./detail/info.js");
router.get('/get/detail/info/:id', function(ctx, next) {
	console.log('详情页 - 商户信息');
	const params = ctx.params;
	const id = params.id;
	console.log('商户id: ' + id);

	ctx.body = detailInfoData;
});

//详情页 -- 用户评论
const detailCommentData = require("./detail/comment.js");
router.get('/get/detail/comment/:page/:id', function(ctx, next) {
	console.log('详情页 - 用户评论');
	const params = ctx.params;
	const page = params.page;
	const id = params.id;

	console.log('商户id: ' + id);
	console.log('当前页数：' + page);

	ctx.body = detailCommentData;
});

//用户详情页 - 购买清单
const orderListData = require("./orderlist/orderList.js")
router.get('/get/orderlist/:username', function(ctx, next) {
	const params = ctx.params;
	const username = params.username;
	console.log('用户名: ' + username);

	ctx.body = orderListData;
});

//提交评论
router.post('/post/submitComment', function(ctx, next) {
	console.log('提交评论');

	ctx.body = {
		errono: 0,
		msg: 'ok'
	}
});

//开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);