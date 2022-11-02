/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const min = 1000
const max = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandom(min, max))

function getRandomNumber(arr, min, max) {
   let newGetRandom
   const updatedArr = [...arr]

   do {
      newGetRandom = getRandom(min, max)
      console.log(newGetRandom)
   } while (updatedArr.includes(newGetRandom))

   updatedArr.push(newGetRandom)

   return updatedArr
}

const updatedArr = getRandomNumber(myNumbers, min, max)

console.log(myNumbers)

console.log(updatedArr)