var elasticsearch = require('elasticsearch');

// Connect to localhost:9200 and use the default settings
var client = new elasticsearch.Client();
function search(fieldName,fieldValue)
{
	// search for documents (and also promises!!)
	var searchObject = {index: 'ci', size: 50, body: {query: {match: {}}}};
	searchObject.body.query.match[fieldName] = fieldValue;
	client.search(searchObject).then(function (resp) {
	for (var i=0;i<resp.hits.hits.length;i++)
	{ 
	  console.log(resp.hits.hits[i]._source);
	}


	});
}



//search('common','你');
console.log('Searching on Last Name:' + '朱')
search('cname','朱');

console.log('Searching on First Name:' + '庆')
search('cname','庆');

console.log('Searching on Full Name:' + '朱庆')
search('cname','庆');

console.log('Searching on Complex Name:' + '生')
search('cname','生');
