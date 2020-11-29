let names = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"];
let neighbours = ["Patrick", "AnnMarie", "Alisol", "Walton"];
const whoIsWashing = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return `${arr[randomNumber]} is going to wash the dishes today.`;
};
names.push("Max");
console.log(whoIsWashing(names));
console.log(whoIsWashing(neighbours));
