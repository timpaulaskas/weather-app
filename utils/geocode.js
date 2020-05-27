const request = require('postman-request')

const geocode = (address, callback) => {
    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHBhdWxhc2thcyIsImEiOiJja2FwbnVqenowMHlwMzBucmQ3MmtqM3FiIn0.uPMAp8NeLn0CCq7lMnDprQ&limit=1'

    request({ url: geoURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = response.body.features[0]
            latitude = data.center[1]
            longitude = data.center[0]
            location = data.place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode