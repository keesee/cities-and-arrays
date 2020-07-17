// write a function
///// takes a number and return all cities with population > than that #

// write a function
/////  takes a city name and returns the data for that city

///////////////////////////////////////////////
///////////////////////////////////////////////

// 1. create a folder          <- mkdir foldername
// 2. go to the folder         <- cd foldername
// 3. Initialize the project   <- npm init
// 4. open in VS code          <- code .
// 5. create a src folder
// 6. create an index.js
// 7 install modules you need  <- npm install module-name
//////////////  Search for modules on
//////////////  https://npmjs.org

// start coding

const cityDB = require('all-the-cities')

console.log(cityDB.length)



const getCitiesPopGreater = function(number) {
    const largeCities = cityDB.filter(function(it) {
        var keep = it.population > number
        return keep
    })

    return largeCities
}  // return an array

var tenMillion = getCitiesPopGreater(10000000) // array

console.log(tenMillion) 




// const getCity = function(city) { 
//     const cityToFind = cityDB.find(function(it) {
//         const keep = 
//     })
// }  // return an object


// Pamplona

const findCity = function(queryCity) {
    const city = cityDB.find(function(it) {
        var keep = it.name === queryCity
        return keep
    })
    return city
}

const pamplona = findCity('Pamplona')
const chengdu = findCity('Chengdu')
console.log(pamplona, chengdu)