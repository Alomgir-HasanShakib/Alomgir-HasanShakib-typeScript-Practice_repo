// enum -> store constants, duplicate value is not allowed here
// enum typoes: numeric,string,hetergenous

// numeric enum

enum requestType {
  readData,
  saveData,
  deleteData,
}
console.log(requestType);
console.log(requestType.readData);

// string enum
enum requestType2 {
  readData = "READ_DATA",
  saveData = "UPDATE_DATA",
  deleteData = "DELETE_DATA",
}
console.log(requestType2);
console.log(requestType2.deleteData);

// hetergenous enum
enum requestType3 {
  readData = "READ_DATA",
  saveData = "UPDATE_DATA",
  id = 102,
}

console.log(requestType3);
