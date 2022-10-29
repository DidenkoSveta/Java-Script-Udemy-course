/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //выражение-инструкция


//инструкция
const myObject = { 
  x: 10,
  y: true,
}


 //выражение-инструкция
myObject.z = 'abc'



 //выражение-инструкция
delete myObject.x



 //инструкция
let newVariable


 //выражение-инструкция
newVariable = 30 + 5



 //выражение-инструкция
console.log(newVariable)



 //инструкция
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)  //выражение-инструкция
}
