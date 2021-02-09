// Your code here
function saturdayFun(activity='roller-skate') {
  return(`This Saturday, I want to ${activity}!`);
}
saturdayFun() //=> Billy razzle-dazzles 'em!
saturdayFun('This Saturday, I want to bathe my dog!') //=> Methuselah razzle-dazzles T'challah! 

// let mondayWork = function(activity='go to the office') {
//     return `This Monday, I will ${activity}`
// }

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ` + `${activity}.`
  }
mondayWork();

let wrapAdjective = function(hello='*'){
    return function(adjective="||"){
        return `You are ${hello}${adjective}${hello}!`
    }
}
wrapAdjective();

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }