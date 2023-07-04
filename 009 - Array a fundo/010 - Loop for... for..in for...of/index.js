const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "Lucas",
    sobreNome: "Anitelli",
  },
  {
    nome: "Nay",
    sobreNome: "Anitelli",
  },
  {
    nome: "José",
    sobreNome: "Anitelli",
  },
];

// for ([inicialização]; [condição]; [expressão final])
for (let i = 0; i < myArrayObj.length; i++) {
  console.log(myArrayObj[i].nome);
}

// for Of
for(let item of myArrayObj) {
  console.log(item.nome, item.sobreNome);
}

// for in
const obj = { nome: "Lucas", sobreNome: "Anitelli" };

for (let item in obj) {
  console.log(item);
}