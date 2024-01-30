// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    let strr = str.split(" "); 

    let strrr = strr.map(e => {
    return e.split("").reverse().join("")
  })

  return strrr.join(" ");
}
