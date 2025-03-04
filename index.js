// Code your solution in this file!
 const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
 }
 console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

 const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
 }
 console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 console.log(selectingDrivers[0])

 function createFareMultiplier(num){
    return function (fare){
        return fare*num
    }
 }

const fareDoubler = createFareMultiplier(2)
const fareTripler =createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers)
}