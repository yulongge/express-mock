var Faker  = require('faker');
var _ = require('lodash');
Faker.locale="zh_CN";

module.exports = {
	errcode: 0,
	errmsg: 'success',
	data: {
		list: [
			{
				id: 1,
				name: "公司食堂",
				address: Faker.address.streetName(),
				image: Faker.image.avatar()
			},
			{
				id: 2,
				name: "九号食堂",
				address: Faker.address.streetName(),
				image: Faker.image.avatar()
			},
			{
				id: 3,
				name: "美食城",
				address: Faker.address.streetName(),
				image: Faker.image.avatar()
			},
			{
				id: 4,
				name: "新奥超市",
				address: Faker.address.streetName(),
				image: Faker.image.avatar()
			}
		] 
	}
}
