// OPTIONAL LESSON ON EQUALITY FOR OBJECTS/ARRAYS
let obj1 = {
    a: 1,
    b: 2
  };
  let obj2 = {
    a: 1, 
    b: 2
  };
  console.log(obj1 === obj2);  // prints false because they are different objects!
  let obj2 = obj1;  // now they are the exact same object
  console.log(obj1 === obj2);  // prints true
  let arr1 = [0, 1, 2];
  let arr2 = arr1;  // same goes for arrays
  console.log(arr1 === arr2);  // prints true because they're the same array
  arr2.push(7);  // we can alter that array using either variable
  console.log(arr1);  // [0, 1, 2, 7]
  let str1 = 'cat';  // strings are compared by value, though
  let str2 = str1;  // this makes str2 a COPY of str1
  str2 = str2 + ' in the hat';  // this does not alter str1!
  console.log(str1);  // prints 'cat'
  function objFunction (obj) {  // a function can alter an object without returning a new object
    obj.sweet = true;
  }
  let obj = {};
  objFunction(obj);  // modifies object "in-place"
  console.log(obj);  // prints {sweet: true}
  function strFunction (str) {  // with strings, we have to return a new string to alter it
    str = str + ' with a bone to pick'
    return str
  }
  let str = 'a woman';
  str = strFunction(str);  // we set str equal to the return value of the function, a new string
  console.log(str);