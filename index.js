// code your solution here
function saturdayFun(plan = "roller-skate"){
   return `This Saturday, I want to ${plan}!`
    
}

function mondayWork(plan = 'go to the office') {
    return `This Monday, I will ${plan}.`
}

// function wrapAdjective(razzle = "*", adj = 'special'){
//     return `You are ${razzle}${adj}${razzle}!`;
// }

function wrapAdjective(razzle="*") {
    return function(adj="special") {
        return `You are ${razzle}${adj}${razzle}!`
    }
}