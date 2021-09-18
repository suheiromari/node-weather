const request = require('request')
const forcast = (latitude , longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7040c1d5e93446ead00cd98a46a7cb72&query=' + latitude + ',' + longitude + '&units=m'
    
    request({url, json :true},(error,{body})=>
     {
        if (error){
            callback('Unable to connect to weather services',undefined)
        } else if(body.error){
            callback('unable to find location', undefined) 
        }else{
            callback(undefined , 'the temp is ' + body.current.temperature
                  + ' it feels like ' + body.current.feelslike)}
    })


}


module.exports = forcast