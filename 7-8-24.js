function descendingOrder(n){
  return +(n.toString().split("").sort((a,b)=>b-a).join())
}

console.log(descendingOrder(42145));     // Output: 54421
console.log(descendingOrder(145263));    // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321
