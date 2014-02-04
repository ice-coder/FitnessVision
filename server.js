var express 	= require('express'),
	stylus 		= require('stylus'),
	mongoose 	= require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(src, path) {
	return stylus(src).set('filename' + path);
};

app.configure(function() {
	app.set('views', __dirname + '/server/views');
	app.set('view engine', 'jade');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(stylus.middleware({
		src: __dirname + '/public',
		compile: compile
	}));
	app.use(express.static(__dirname + '/public'));
});
if(env === 'development') {
	mongoose.connect('mongodb://localhost/fitnessvision');
} else {
	mongoose.connect('mongodb://oddig:fitnessvision@ds031329.mongolab.com:31329/fitnessvision');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('fitnessvision db opened');
});

app.get('/partials/*', function(req, res) {
	res.render('../../public/app/' + req.params);
});

app.get('*', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');