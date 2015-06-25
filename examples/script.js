var zapi = new Zapi();

var paramsFood =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "menu",
    year: 2010,
    week: 12
};

var paramsWeather =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "current"
};

var paramsTerms =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "schedule",
    term: 1139,
    subject: "ECE",
    catalog_number: 254
};

var paramsNews =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    site: "science"
};

var paramsApi =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "usage"
};

var paramsCodes =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "instructions"
};

var paramsServer =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "time"
};

var paramsCourses =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "examschedule",
    subject: "ECE",
    catalog_number: "254"
};

var paramsEvents =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "xml",
    sub_endpoint: "holidays"
};

var paramsServices =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    site: "arts-computing"
};

var paramsResources =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    sub_endpoint: "printers"
};

var paramsBuildings =
{
    api_key: "d8cb47df8f51e2fdf0b77b5b740ddf88",
    format: "json",
    building_code: "CPH"
};


function buttonTerms() {
    zapi.terms({
        parameters:paramsTerms
    }, function(data) {
        console.log(data);
    })
}

function buttonWeather() {
    zapi.weather({
        parameters:paramsWeather
    }, function(data) {
        console.log(data);
    })
}


function buttonFood() {
    zapi.foodservices({
        parameters:paramsFood
    }, function(data) {
        console.log(data);
    })
}


function buttonNews() {
    zapi.news({
        parameters:paramsNews
    }, function(data) {
        console.log(data);
    })
}

function buttonApi() {
    zapi.api({
        parameters:paramsApi
    }, function(data) {
        console.log(data);
    })
}

function buttonCodes() {
    zapi.codes({
        parameters:paramsCodes
    }, function(data) {
        console.log(data);
    })
}

function buttonServer() {
    zapi.server({
        parameters:paramsServer
    }, function(data) {
        console.log(data);
    })
}


function buttonCourses() {
    zapi.courses({
        parameters:paramsCourses
    }, function(data) {
        console.log(data);
    })
}

function buttonEvents() {
    zapi.events({
        parameters:paramsEvents
    }, function(data) {
        console.log(data);
    })
}

function buttonServices() {
    zapi.services({
        parameters:paramsServices
    }, function(data) {
        console.log(data);
    })
}
function buttonResources() {
    zapi.resources({
        parameters:paramsResources
    }, function(data) {
        console.log(data);
    })
}

function buttonBuildings() {
    zapi.buildings({
        parameters:paramsBuildings
    }, function(data) {
        console.log(data);
    })
}

