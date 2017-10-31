var http = require('https');
var _ = require('underscore');
//var _s = require("underscore.string");

var options = {
  host: 'api-ratp.pierre-grimaud.fr',
  port: 443,
  path: '/v3/schedules/bus/58/hopitaux+broussais+et+saint+joseph/A',
  method: 'GET'  
    
};


var req = http.request(options, function(res) {
  var body = '';  
  
  res.on('data', function(chunk) {
    body += chunk;
  });

  res.on('end', function() {
    var schedules = JSON.parse(body).result.schedules;
    _.each(schedules, function(data){
           
      console.log("Prochain bus direction "+data.destination+" : "+data.message);  
    })
    //_s.toSentence()
    

    
    //console.log(JSON.parse(body));
  });
}).end();



