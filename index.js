// Code your solution in this file!
const headquarterBlockStreet = 42;
const distanceFromHqInBlocks = (location) => {
    // returns the number of blocks between customer location and headquarters
    return Math.abs((headquarterBlockStreet - location))
}

const distanceFromHqInFeet = (location) => {
    // calculates and returns how feet far between blocks is  
    // each block in Manhattan is 264 feet long
    return distanceFromHqInBlocks(location) * 264
}

const distanceTravelledInFeet = (startLocation, destinationLocation) => {
    return (Math.abs(destinationLocation - startLocation)) * 264
}

const calculatesFarePrice = (start, destination) => {
    let travelled = distanceTravelledInFeet(start, destination)
    if (travelled <= 400) {
        return 0
    }
    else if(travelled > 400 && travelled <= 2000){
        return (travelled - 400) * 0.02
    }
    else if(travelled > 2000 && travelled <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}