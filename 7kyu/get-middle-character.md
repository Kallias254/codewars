
function getMiddle(s)
{
  let start = Math.floor(s.length / 2) - 1;
  
  if (s.length % 2 === 0){
    return s.slice(start, start + 2);
  } else if (s.length % 2 != 0){  
    return s.slice(start + 1, start + 2);
  }
}
