var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('fitnessvision db opened');
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		userName: String
	});
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			User.create({firstName: 'Thorsteinn', lastName: 'Gestsson', userName: 'oddig'});
			User.create({firstName: 'Joe', lastName: 'Eames', userName: 'joe'});
			User.create({firstName: 'John', lastName: 'Papa', userName: 'john'});
			User.create({firstName: 'Dan', lastName: 'Wahlin', userName: 'dan'});
		}
	});
}