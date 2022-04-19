const add= require('./add')
const sub = require('./sub')
const multiply=require('./multiply')
const divide = require('./divide')

const app = ()=>{
    console.log("Additon: ",add(5,4))
    console.log("Substraction:",sub(7,3));
    console.log("Multiplication:", multiply(7, 3));
    console.log("Division:", divide(6,2));
}
app();