// for writhing custom type, use type keyword and then write type Name
type User = { userName: string; userId: number; isActive: boolean };

// here you can write object[] or name it with your custom types showed below

let users: User[];
users = [];
let user1 = { userName: "shakib", userId: 1, isActive: true };
users.push(user1);

// for write constant value
type requestType = "GET" | "POST";

let gertRequest: requestType;
gertRequest = "GET";

// for write function

function requestHandler(requestType: requestType) {
  console.log(requestType);
}

requestHandler("GET");
