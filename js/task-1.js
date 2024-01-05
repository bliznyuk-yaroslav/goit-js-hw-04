// 'use strict';
// function slugify(title){
//   const titleLover = title.toLowerCase();
//   const titleSting = titleLover.split(" ");
// return titleSting.join("-");
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// // Зроблено для візуально відступу між task при перевіркі
// console.log(""); 
function getExtremeScores(scores) {
const result ={
  best: Math.max(...scores),
  worst: Math.min(...scores),
}
  return result;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));