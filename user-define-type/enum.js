// enum -> store constants, duplicate value is not allowed here
// enum typoes: numeric,string,hetergenous
// numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 0] = "readData";
    requestType[requestType["saveData"] = 1] = "saveData";
    requestType[requestType["deleteData"] = 2] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.readData);
// string enum
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "READ_DATA";
    requestType2["saveData"] = "UPDATE_DATA";
    requestType2["deleteData"] = "DELETE_DATA";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
console.log(requestType2.deleteData);
// hetergenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "READ_DATA";
    requestType3["saveData"] = "UPDATE_DATA";
    requestType3[requestType3["id"] = 102] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
