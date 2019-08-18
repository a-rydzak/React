

const express = require('express')
const app = express()
const port = 3000

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const request = require('request-promise');

function def(){
	const urls = ["http://pokeapi.co/api/v2/pokemon/1", "http://pokeapi.co/api/v2/pokemon/1"];
	const promises = urls.map(url => request(url));
	Promise.all(promises).then((data) => {

	    return data
	});
}

app.get('/', (req, res) => res.send('dsdsaffdsads'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))