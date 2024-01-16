function solution(string) {
  let str = [];
  
  string.split("").forEach(e => {
    if(e === e.toUpperCase()){
      str.push(" " + e);
    } else {
      str.push(e);
    }
  })
  return str.join("");
}
