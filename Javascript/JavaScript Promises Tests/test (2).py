# importing the requests library 
import requests 
  
# api-endpoint 
URL = "http://chappt0003.qcorpaa.aa.com:8082/HealthMonitor/ping"
  

PARAMS = {} 
  
# sending get request and saving the response as response object 
r = requests.get(url = URL, verify=False) 
  
# extracting data in json format 
data = r.json() 
  
  
print(data)

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const promise = require('promise');
const request = require('request');

app.get('/api/test', (req, res) => {

     function parse(){
        return new promise(function(resolve, reject){
            request('https://pokeapi.co/api/v2/pokemon/1', function (error, response, body) {
                
                resolve(response)
            });
        });
    }

    parse().then(function(val) {
        res.send()
    }).catch(function(err) {
        console.err(err);
    });

});