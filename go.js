var elasticsearch = require('elasticsearch');

// Connect to localhost:9200 and use the default settings
var client = new elasticsearch.Client();

// search for documents (and also promises!!)
client.search({
  index: 'ci',
  size: 50,
  body: {
    query: {
      match: {
       cname: '李'
      }
    }
  }
}).then(function (resp) {
  console.log(resp.hits.hits.length);
  console.log(resp.hits.hits);

});