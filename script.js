function makeid(l) {
  // Define the characters to include in the random string
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  // Generate the random string of length l
  for (let i = 0; i < l; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Do not change the code below
const l = prompt("Enter a number.");
alert(makeid(parseInt(l, 10)));
