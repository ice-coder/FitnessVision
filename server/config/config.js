var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/fitnessvision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://oddig:fitnessvision@ds031329.mongolab.com:31329/fitnessvision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}