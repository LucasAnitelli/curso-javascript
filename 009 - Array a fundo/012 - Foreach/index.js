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
    nome: "Jose 0",
    sobreNome: "Anitelli",
  }
];

myArrayObj.forEach((element, index) => {
  if (element.nome === "Nay") {
    return console.log("Aqui e a nay");
  }
  console.log(element.nome, index);
})