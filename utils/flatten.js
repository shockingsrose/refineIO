// 数组展开
// let givenArr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let givenArr = [[1, 2], [9, [12, [13, [14]]]], 10];
let outputArr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 11, 12, 12, 13, 14, 10];
// let list = [];
// const flatten = (arr) => {
//     if(Array.isArray(arr)) {
//         console.log(123);
//         arr.forEach(element => {
//             return flatten(element);
//         });
//     }else {
//         console.log(arr);
//         list.push(arr);
//         return arr;
//     }
//     return list;
// }

const flatten = (arr) => {
  let list = [];
  if (Array.isArray(arr)) {
    arr.forEach((element) => {
      list.push(flatten(element));
    });
  } else {
    return list.push(arr);
  }
  return list;
};

outputArr = flatten(givenArr);
console.log(outputArr);
