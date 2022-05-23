const arr = [1, 2, 3, 4, 5, 6];

if (arr.length === 0) {
  console.log("Array is Empty");
} else if (arr.length < 5) {
  console.log("Array size is small");
} else if (arr.length < 10) {
  console.log("Array size is medium");
} else {
  console.log("Array size is large");
}

{
  const userLogIn = false;

  // if(userLogIn){
  //     console.log("logged in")
  // }else{
  //     console.log("please log in")
  // }
  // instead of writing this if.else. statement we can use ternary operator

  userLogIn ? console.log("logged in") : console.log("please log in");
}
{
  const isUserLoggedIn = true;

  const welcomeMessage = isUserLoggedIn ? "welcome" : "Please Log in";

  console.log(welcomeMessage);
}

{
  const number = 5;

  switch (number) {
    case 0:
      console.log("It is Zero");
      break;
    case 1:
    case 2:
      console.log("It is small");
      break;
    case 3:
    case 4:
      console.log("It is medium");
      break;
    case 5:
      console.log("It is Large");
      break;
    default:
      console.log("try again");
  }
}
