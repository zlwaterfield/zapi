var Zapi = (function () {

    function Zapi() {}

    Zapi.prototype.api = function(opts, callback) {
        var url = this.buildBase("api/");
        var params = opts.parameters;
        url += params["sub_endpoint"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.buildings = function(opts, callback) {
        var url = this.buildBase("buildings");
        var params = opts.parameters;
        if(params["building"]) {
            url += "/" + params["building"] + "/" + params["room"] + "/" + params["sub_endpoint"];
        } else if(params["building_code"]) {
            url += "/" + params["building_code"];
        } else {
            url += "/" + params["sub_endpoint"];
        }
        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.codes = function(opts, callback) {
        var url = this.buildBase("codes/");
        var params = opts.parameters;
        url += params["sub_endpoint"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.courses = function(opts, callback) {
        var url = this.buildBase("courses/");
        var params = opts.parameters;
        if(params["course_id"]) {
            url += params["course_id"];
        } else if(params["class_number"]) {
            url += params["class_number"];
        } else if(params["subject"] && params["catalog_number"] && params["sub_endpoint"]) {
            url += params["subject"] + "/" + params["catalog_number"] + "/" + params["sub_endpoint"];
        } else if(params["subject"] && params["catalog_number"]) {
            url += params["subject"] + "/" + params["catalog_number"];
        } else {
            url += params["subject"];
        }

        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);

    };

    Zapi.prototype.events = function(opts, callback) {
        var url = this.buildBase("events");
        var params = opts.parameters;
        if(params["site"] && params["id"]) {
            url += "/" + params["site"] + "/" + params["id"];
        } else if(params["site"]) {
            url += "/" +  params["site"];
        } else if(params["sub_endpoint"]) {
            url += "/" +  params["sub_endpoint"];
        }
        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.foodservices = function(opts, callback) {
        var url = this.buildBase("foodservices/");
        var params = opts.parameters;
        if(params["year"]) {
            url += params["year"] + "/" + params["week"] + "/" + params["sub_endpoint"];

        } else if(params["sub_endpoint"] === "products") {
            url += params["sub_endpoint"] + "/" + params["product_id"];
        } else {
            url += params["sub_endpoint"];
        }
        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.news = function(opts, callback) {
        var url = this.buildBase("news");
        var params = opts.parameters;
        if(params["id"] && params["site"]) {
            url += "/" + params["site"] + "/" + params["id"];
        } else if(params["site"]) {
            url += "/" + params["site"];
        } else {

        }
        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.resources = function(opts, callback) {
        var url = this.buildBase("resources/");
        var params = opts.parameters;
        url += params["sub_endpoint"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.server = function(opts, callback) {
        var url = this.buildBase("server/");
        var params = opts.parameters;
        url += params["sub_endpoint"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.services = function(opts, callback) {
        var url = this.buildBase("services/");
        var params = opts.parameters;
        url += params["site"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.terms = function(opts, callback) {
        var url = this.buildBase("terms/");
        var params = opts.parameters;
        if(params["sub_endpoint"] === "list") {
            url += params["sub_endpoint"];
        } else if(params["subject"] && params["catalog_number"]) {
            url += params["term"] + "/" + params["subject"] + "/" + params["catalog_number"] + "/" + params["sub_endpoint"];
        } else if(params["subject"]) {
            url += params["term"] + "/" + params["subject"] + "/" + params["sub_endpoint"];
        } else {
            url += params["term"] + "/" + params["sub_endpoint"];
        }
        url += "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.weather = function(opts, callback) {
        var url = this.buildBase("weather/");
        var params = opts.parameters;
        url += params["sub_endpoint"] + "." + params["format"] + "?key=" + params["api_key"];

        this.get(url, callback);
    };

    Zapi.prototype.buildBase = function (endpoint) {
        var baseUrl = "https://api.uwaterloo.ca/v2/" + endpoint;

        return baseUrl;
    };

    Zapi.prototype.get = function (url, callback) {
        $.get(url)
        .done(function(data) {
            callback(data);
        })
        .fail(function(error) {
            callback(error);
        });
    };

    return Zapi;
})();

module.exports = Zapi;
