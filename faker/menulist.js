var Faker  = require('faker');
Faker.locale="zh_CN";
console.log(Faker, 'faker');

module.exports = {
	errcode: 0,
	errmsg: 'success',
	data: {
		list: [
			{
				name: Faker.name.findName(),
				email: Faker.internet.email(),
				website: Faker.internet.url(),
				image: Faker.image.avatar()
			},
			{
				name: Faker.name.findName(),
				email: Faker.internet.email(),
				website: Faker.internet.url(),
				image: Faker.image.avatar()
			}
		]
	}
}
