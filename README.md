zapi-uwaterloo (v 0.0.1)
========================

Introduction
------------
This is the first of a group of Javascript components in a Library built to makes the api's easy for anyone to use.

This component is built for [UWaterloo's](https://api.uwaterloo.ca/) api.

First run
```
npm install zapi-uwaterloo --save
```

Requirements

You will need to include jquery:

```html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
```

Once you bace the node_module include
```javascript
var zapi_uwaterloo = require('zapi-uwaterloo');
```

The full list of methods is as follows:

 - `api`
 - `buildings`
 - `codes`
 - `courses`
 - `events`
 - `foodservices`
 - `news`
 - `server`
 - `services`
 - `terms`
 - `weather`
 - `resources`

 An example usage might be:
 
 ```javascript
  zapi = new zapi_uwaterloo();
  
  zapi.foodservices({
    api_key: "{your_api}",
    sub_endpoint: "menu",
  }).then(function(data) {
    console.log(data);
  });
 ```

Api Documentation can be found [here](https://github.com/uWaterloo/api-documentation).