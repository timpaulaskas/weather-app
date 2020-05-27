const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const weatherURL = 'http://api.weatherstack.com/current?access_key=304de7682cf118807f3d99e8c0bac028&units=f&query=' + latitude + ',' + longitude

    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            const data = response.body.current
            callback(undefined, "It is currently " + data.temperature + " degrees out and is " + data.weather_descriptions[0].toLowerCase() + ". It feels like " + data.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast