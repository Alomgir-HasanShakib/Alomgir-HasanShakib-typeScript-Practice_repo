// there is two type for declare  array type
// let users: string[];
// users = ["nahid", "alom", "shakib"];

// another way
let users: Array<string>;

users = ["nahid", "alom", "tamim"];

// But if developer want to store multiple data type in a single array so what'll be the process? The proccess will be

let peoples: (number | string)[];
peoples = [123, "nahid"];

console.log(users.sort());
