{
  const promise = new Promise((resolve, reject) => {
    const sum = 1 + 5;

    if (sum === 2) {
      resolve("Success");
    } else {
      reject("Error found");
    }
  });

  promise
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.error(message);
    });
}

{
  setTimeoutPromise(250).then(() => {
    console.log("1");
  });

  function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  }
}

{
  // converting callback hell with the help of promise
  //   setTimeout(() => {
  //     console.log("1");
  //     setTimeout(() => {
  //       console.log("2");
  //       setTimeout(() => {
  //         console.log("3");
  //       }, 250);
  //     }, 250);
  //   }, 250);
}

{
  // since the above asynchronous code is very difficult to understand we change change
  // it by using Promises to understand easily

  setTimeoutPromise(250)
    .then(() => {
      console.log("first");
      return setTimeoutPromise(250);
    })
    .then(() => {
      console.log("second");
      return setTimeoutPromise(250);
    })
    .then(() => {
      console.log("third");
    });

  function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  }
}

{
  const button = document.querySelector("button");

  addEventListenerPromise(button, "click").then((e) => {
    console.log("clicked");
    console.log(e);
  });

  function addEventListenerPromise(element, event) {
    return new Promise((resolve, reject) => {
      element.addEventListener(event, resolve);
    });
  }
}

{
  /*
    Methods on Promises

    1. promise.all : it will resolve only if all the promise inside it is resolved

    2. promise.any : it will show the first promise that is resolved

    3. promise.race : it will show the first one that is executed that is resolved or rejected any one

    4. promise.allSettled : it will return the object will all the details of rejected and resolved promises
   
    */

  Promise.allSettled([
    Promise.resolve("1"),
    Promise.reject("Rejected"),
    Promise.resolve("3"),
  ])
    .then((messages) => {
      console.log(messages);
    })
    .catch((error) => {
      console.log(error);
    }).finally(() => {
        console.log("finally will run irrespective of resolve or reject whatever is executed")
    })
}
