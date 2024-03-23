// Code your solution in this file!



// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
// {const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// return drivers.slice(0,2);
// };

const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = drivers => drivers.slice(-2);
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(fare){
        return fare * 5;
    }
}

function fareDoubler(fare){
    return fare * 2;
}
function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(drivers, anotherFunction){
   return anotherFunction(drivers);    
}



