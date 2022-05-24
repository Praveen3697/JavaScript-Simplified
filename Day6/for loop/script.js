{
  // for loop

  // for(let i=0;i<=10;i++){
  //     console.log(i)
  // }

  for (let i = 0; i <= 10; i++) {
    if (i === 5) break;

    console.log(i);
  }
}

// Recurrsion
  const person = {  
    name: "Praveen",
    friend: {
      name: "Vinay",
      friend: {
        name: "Rahul",
      },
    },
  };

  function printNames(currPerson){
      if(currPerson == null) return
      console.log(currPerson.name)
      printNames(currPerson.friend)
  }

    printNames(person)

    
