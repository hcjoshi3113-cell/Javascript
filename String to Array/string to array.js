let arr = [100, 99, 98, 97];
console.log(arr);

let str = "car,bike,bus";
let strArray = str.split(",");
console.log(strArray);

let nested = [5, 6, [7, 8], 9];
console.log(nested);
console.log(nested[2][1]);

arr.splice(1, 1);
console.log(arr);

arr.splice(1, 0, 25);
console.log(arr);

arr.splice(2, 1, 99);
console.log(arr);

nested[2].splice(1, 1, 100);
console.log(nested);