/*
  slice = pega os dados dentro de um range sem quebrar o Array
  splice = remove os dados do Array dentro de um range
*/
let arr = [
  { nome: "Lucas", tel: "(99) 99999 9999" },
  { nome: "Amanda", tel: "(99) 99999 9999" },
  { nome: "Amigo 1", tel: "(99) 99999 9999" },
  { nome: "Amigo 2", tel: "(99) 99999 9999" },
  { nome: "Amigo 3", tel: "(99) 99999 9999" },
];

console.table(arr);

console.log(arr.splice(3, 1));

// const newArray = arr.slice(2, 4);
// console.table(newArray);

console.table(arr);
