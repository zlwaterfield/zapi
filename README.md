zapi-uwaterloo (v 0.0.3)
========================

Introduction
------------
This is the first of a group of Javascript components in a Library built to makes the api's easy for anyone to use.

This component is built for [UWaterloo's](https://api.uwaterloo.ca/) api.

First run
---------
```
npm install zapi-uwaterloo --save
```

Requirements
------------

 - `JQuery`

```html
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
```

Browser Installation
--------------------

You'll have to host the library yourself, so:

```html
<script src="your/path/to/zapi.min.js"></script>
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
var zapi_uwaterloo = require('zapi-uwaterloo');
```
 
```javascript
 zapi = new zapi_uwaterloo();
 
 zapi.foodservices({
   api_key: "{your_api}",
   sub_endpoint: "menu",
 }, function(data) {
   console.log(data);
 });
```

Api Documentation can be found [here](https://github.com/uWaterloo/api-documentation).


Issues
------

Any issues, report them [here](https://github.com/zlwaterfield/zapi-uwaterloo/issues).