/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
   {
      carBrand: 'Lada', 
      price: 100,
      isAvailableForSale: true,
   },

   {
      carBrand: 'Nisan', 
      price: 200,
      isAvailableForSale: true,
   },

   {
      carBrand: 'Nersedes', 
      price: 300,
      isAvailableForSale: true,
   }
]

const newCar = {
   carBrand: 'Toyota', 
   price: 400,
   isAvailableForSale: false,
}

cars.push(newCar)
console.log(cars)
