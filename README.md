Chinese_Elastic_Search
======================

Indexing Chinese Data with Elastic Search


# Setup

1. Install Elastic Search
```
$ brew install elasticsearch
```

2. Install plugin to support chinese characters
```
$ /usr/local/opt/elasticsearch/bin/plugin -install elasticsearch/elasticsearch-analysis-smartcn/2.0.0
```

3. Create An Index, and ensure the default plugin is the new chinese plugin we just installed

```
$ curl -XPUT 'http://localhost:9200/chineseIndex/' -d '
{
  "settings": {
    "index": {
      "analysis": {
        "analyzer": {
          "default": {
            "type": "smart_chinese"
          }
        }
      }
    }
  }
}'
```

4. Insert Test Data into your chinese index
```
$ curl -XPUT 'http://localhost:9200/chineseIndex/name/1' -d '{
    "name" : "中文",
    "message" : "this is a chinese record with a name of 中文"
}'
```

5. Confirm your data was imported 

```
$ curl -XGET 'http://localhost:9200/chineseIndex/name/1'
```

6. Confrim search works with chinese terms

```
$ curl -XGET 'http://localhost:9200/chineseIndex/_search?q=name:文'
```
or
```
$ curl -XGET 'http://localhost:9200/chineseIndex/_search?q=message:文'
```


Some Additional Information of Use
1. Finding a Chinese/Japanese character in javascript text
```
if (chinese.match(/[\u3400-\u9FBF]/))
{
  console.log('True');
}
else
{
console.log('False'); 
}
```

2. Generate all Chinese Characters in this range
```
var chinese = '\u3400';
for(var i=0x3400; i < 0x9FBF; i++)
{
  chinese = String.fromCharCode(i);
  console.log(chinese);

}
```