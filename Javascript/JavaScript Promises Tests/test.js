
function def(){
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


var client = new HttpClient();
var varList={}

for(var i=1; i<5;i++){

	varList['p'+i] = new Promise(function(resolve, reject) {  
		client.get('https://pokeapi.co/api/v2/pokemon/'+i, function(response) {
    		resolve(response)
		})
	})

}

// console.log(Object.values(varList))

Promise.all([Object.values(varList)]).then(values => { 
	console.log(values)
});

}

def()





// -------------------------------------------------



var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


var client = new HttpClient();
var varList={}

function f() {
    return new Promise(function(resolve, reject) {

		for(var i=1; i<5;i++){

			varList['p'+i] = new Promise(function(resolve, reject) {  
				client.get('https://pokeapi.co/api/v2/pokemon/'+i, function(response) {
		    		resolve(response)
				})
			})

		}
    })
}

function g() {
    return f().then((res) => {
        return res;
    })
    .then((res) =>{
        console.log(res);
    })

}
g()4

// -------------------------------------------------
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


var client = new HttpClient();
var varList={}
function f() {
  return new Promise(function(resolve, reject) {
		for(var i=1; i<5;i++){

			varList['p'+i] = new Promise(function(resolve, reject) {  
				client.get('https://pokeapi.co/api/v2/pokemon/'+i, function(response) {
		    		resolve(response)
				})
			})

		}
  });
}

async function g() {
  var a = await f();
  a.then((res) => {return res;})

}

g();
////---------------------------

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


var client = new HttpClient();
var varList={}
var promise1 = new Promise(function(resolve, reject) {  
		client.get('https://pokeapi.co/api/v2/pokemon/1', function(response) {
    		resolve(response)
		})
	})

promise1.then(function(value) {
  console.log(value);
  // expected output: "Success!"
});


const async = require('async');
const request = require('request');

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/1"
];

async.map(urls, httpGet, function (err, res){
  if (err) return console.log(err);
  console.log(res);
});