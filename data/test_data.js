module.exports = function() {
	var data = { users: []};
	for(var i=0; i < 100; i++) {
		data.users.push({ id: i, name: 'user' +i });
	}
	return data;
}
