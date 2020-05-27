const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]
if (!address) {
    console.log("Please specify a location")
} else {
    geocode(address, (error, { location, latitude, longitude } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }
            console.log(location + '.', forecastdata)
        })
    })
}
