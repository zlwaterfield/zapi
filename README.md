![alt text](http://zlwaterfield.com/images/projects/zapi-small.png "Logo")

zapi-uwaterloo (v 1.0.0)
========================

Introduction
------------

Zapi is a JavaScript library built to help developers easily connect to uwaterloo api.

This component is built for [UWaterloo's](https://api.uwaterloo.ca/) api.

Requirements
------------

 - `JQuery`

```html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
```

Install
---------
```
npm install zapi-uwaterloo --save
```


Use
--------------------

You'll have to host the library yourself, so either

 - Require
```javascript
var zapi_uwaterloo = require('zapi-uwaterloo');
```
  
 - Pull in with script (in html)

```html
<script src="your/path/to/zapi-uwaterloo.min.js"></script>
```

Full list of methods supported
------------------------------

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

Example
-------

```javascript
 zapi = new zapi_uwaterloo();
 
 zapi.foodservices({
   api_key: "{your_api}",
   sub_endpoint: "menu",
 }, function(data) {
   console.log(data);
 });
```

 [Api Documentation](https://github.com/uWaterloo/api-documentation)

 [Github Page](http://github.com/zlwaterfield/zapi-uwaterloo)

 [NPM Module](https://www.npmjs.com/package/zapi-uwaterloo)


Issues
------

Any issues, report them [here](https://github.com/zlwaterfield/zapi-uwaterloo/issues).