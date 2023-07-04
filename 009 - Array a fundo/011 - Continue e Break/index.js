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
  },
  {
    nome: "Jose 1",
    sobreNome: "Anitelli",
  },
  {
    nome: "Jose 2",
    sobreNome: "Anitelli",
  },
  {
    nome: "Jose 3",
    sobreNome: "Anitelli",
  },
];

for (let item of myArrayObj) {
  if (item.nome === "Nay") {
    console.log("Aqui e a nay");
    continue;
  }

  if (item.nome === "Jose 1") {
    console.log("Lembrar de enviar um sms");
    break;
  }
  console.log(item);
}