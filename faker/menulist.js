var Faker  = require('faker');
var _ = require('lodash');
Faker.locale="zh_CN";
console.log(Faker, 'faker');

var data = [];
_.times(10, function() {
	var temp = {
		name: Faker.name.findName(),
		emial: Faker.internet.email(),
		website: Faker.internet.url(),
		image: Faker.image.avatar()
	};
	data.push(temp);
})

module.exports = {
	errcode: 0,
	errmsg: 'success',
	data: {
		list: data 
	}
}
