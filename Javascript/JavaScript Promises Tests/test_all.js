
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

// Promise.all([Object.values(varList)]).then(values => { 
// 	console.log(values)
// });

Promise.all([Object.values(varList)])
  .then(function(results) {
    var first = results[0];  // contents of the first csv file
    var second = results[1]; // contents of the second csv file
    console.log(first)
  });

}

def()



// -----------------------------------



async function def(){
    
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

        varList['p'+i] = await new Promise(function(resolve, reject) {  
            client.get('https://pokeapi.co/api/v2/pokemon/'+i, function(response) {
                resolve(response)
            })
        })

    }


    Promise.all([Object.values(varList)])
      .then(function(results) {
        var first = results[0];  // contents of the first csv file
        var second = results[1]; // contents of the second csv file
        var x =  new Promise(function(resolve, reject) {return first})
        x
      });

    }

def()