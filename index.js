const rawOrder = prompt(
  "Please enter the flavor that you would like once per order of froyo, seperated by commas. We've gotten you started with our house special: 3 vanillas, 1 strawberry, and 2 coffees.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const orderArray = rawOrder.split(",")
console.log(orderArray)
const order = {}
function orderParser(array) {
  for (let index = 0; index < array.length; index++) {
    if (!order[array[index]]) {
      order[array[index]] = 1;
    } else order[array[index]]++
    
  }
}
orderParser(orderArray);

console.log(order)

