const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]
if (!address) {
    console.log("Please specify a location")
} else {
    geocode(process.argv[2], (error, geodata) => {
        if (error) {
            return console.log(error)
        }
        const {location, latitude, longitude} = geodata
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log(error)
            }
            console.log(location + '.', forecastdata)
        })
    })
}
