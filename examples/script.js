var zapi = new Zapi();

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
