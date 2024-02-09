function highAndLow(numbers){

  let arr = numbers.split(" ");

  let min = Math.min(...arr);
  
  let min = Math.max(...arr);

  return `${max} ${min}`
}
