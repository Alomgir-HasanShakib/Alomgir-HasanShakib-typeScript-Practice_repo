let userId: number;
userId = 1234;
// userId = "ahkh12"; // Here user id only can be number . There is no way to store userId as a string . so here give a error

// But this example store idNumber as number and string in a same type. And this is called `UNION Type`

let idNumber: number | string;
idNumber = 1234;
idNumber = "ahkh12";

// this is a example for function

function myfn(studentId: string | number) {
  console.log(studentId);
}

myfn("ahdk12");
myfn(1234);
