var zapi = new Zapi();

/*=============================
        Api
 ==============================*/

var paramsApi =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "usage"
};

function buttonApi() {
    zapi.api({
        parameters:paramsApi
    }, function(data) {
        console.log(data);
    })
}

/*=============================
        Buildings
 ==============================*/

var paramsBuildings =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    building_code: "CPH"
};

function buttonBuildings() {
    zapi.buildings({
        parameters:paramsBuildings
    }, function(data) {
        console.log(data);
    })
}

/*=============================
        Codes
 ==============================*/

var paramsCodes =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "instructions"
};

function buttonCodes() {
    zapi.codes({
        parameters:paramsCodes
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         Courses
 ==============================*/

var paramsCourses =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "examschedule",
    subject: "ECE",
    catalog_number: "254"
};

function buttonCourses() {
    zapi.courses({
        parameters:paramsCourses
    }, function(data) {
        console.log(data);
    })
}

/*=============================
        Events
 ==============================*/

var paramsEvents =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "xml",
    sub_endpoint: "holidays"
};


function buttonEvents() {
    zapi.events({
        parameters:paramsEvents
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         Food Services
 ==============================*/

var paramsFood =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "menu",
    year: 2010,
    week: 12
};

function buttonFood() {
    zapi.foodservices({
        parameters:paramsFood
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         News
 ==============================*/

var paramsNews =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    site: "science"
};

function buttonNews() {
    zapi.news({
        parameters:paramsNews
    }, function(data) {
        console.log(data);
    })
}
/*=============================
         Resources
 ==============================*/

var paramsResources =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "printers"
};

function buttonResources() {
    zapi.resources({
        parameters:paramsResources
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         Services
 ==============================*/

var paramsServices =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    site: "arts-computing"
};

function buttonServices() {
    zapi.services({
        parameters:paramsServices
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         Server
 ==============================*/

var paramsServer =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "time"
};

function buttonServer() {
    zapi.server({
        parameters:paramsServer
    }, function(data) {
        console.log(data);
    })
}

/*=============================
         Terms
 ==============================*/

var paramsTerms =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "schedule",
    term: 1139,
    subject: "ECE",
    catalog_number: 254
};

function buttonTerms() {
    zapi.terms({
        parameters:paramsTerms
    }, function(data) {
        console.log(data);
    })
}

/*=============================
        Weather
 ==============================*/

var paramsWeather =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "current"
};

function buttonWeather() {
    zapi.weather({
        parameters:paramsWeather
    }, function(data) {
        console.log(data);
    })
}
