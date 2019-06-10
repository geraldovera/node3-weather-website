const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/11964430b2702c11bbf5e3bdd803920d/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
                     body.currently.temperature +
                     ' degrees out. There is a ' + body.currently.precipProbability + 
                     '% chance it rains. We will be expiriencing a temperature high of: ' +
                     body.daily.data[0].temperatureHigh + '.')
        }
    })
}

module.exports = forecast