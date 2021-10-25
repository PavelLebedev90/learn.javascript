const sum = ( ...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

sum(1,2,3,4,5);


/////////////////////////////////


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);