let friends = ["Mike", "Jean", "Emma", "Sirius"];

for (let friend = 0; friend < friends.length; friend++) {
  console.log(friends[friend]);
}

for (let friend of friends) {
  console.log(friend);
}


// // 👇️ ['c', 'b', 'a']
// const reversedKeys = Object.keys(friends).reverse();

// reversedKeys.forEach(key => {
//   console.log(key, obj[key]); // 👉️ c three, b two, a one
// });
