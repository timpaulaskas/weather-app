const request = require('postman-request')

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHBhdWxhc2thcyIsImEiOiJja2FwbnVqenowMHlwMzBucmQ3MmtqM3FiIn0.uPMAp8NeLn0CCq7lMnDprQ&limit=1'

request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const data = response.body.features[0]
        latitude = data.center[1]
        longitude = data.center[0]
        console.log(latitude, longitude)
    }
})

const weatherURL = 'http://api.weatherstack.com/current?access_key=304de7682cf118807f3d99e8c0bac028&units=f&query=37.8267,-122.4233'

request({ url: weatherURL, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service!")
    } else if (response.body.error) {
        console.log("Unable to find location")
    } else {
        const data = response.body.current
        console.log("It is currently " + data.temperature + " degrees out and is " + data.weather_descriptions[0].toLowerCase() + ". It feels like " + data.feelslike + " degrees out.")
    }
})

