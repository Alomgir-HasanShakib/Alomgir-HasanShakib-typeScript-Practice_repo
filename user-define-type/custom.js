// here you can write object[] or name it with your custom types showed below
var users;
users = [];
var user1 = { userName: "shakib", userId: 1, isActive: true };
users.push(user1);
var gertRequest;
gertRequest = "GET";
// for write function
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
