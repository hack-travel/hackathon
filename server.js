//  OpenShift sample Node application
const express = require('express'),
    session = require('express-session'),
    app     = express(),
    morgan  = require('morgan'),
    bodyParser = require('body-parser'),
    api = require('./server/router');
    db = require('./db');
    
Object.assign=require('object-assign')

// app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.use(session({
  secret: 'travel',
  cookie: {
    maxAge: 600000
  }
}));


app.use(express.static(__dirname + '/client'));









app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})



app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
