/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

console.log(myNumber1 % myNumber2)

//В таблице приорететности операторов он имеет приоретет 13 (от 1 до 19, где 1 самый низкий)
//Ассоциативность оператора % - left-to-right


console.log(((100 % 23) % 5) % 3)