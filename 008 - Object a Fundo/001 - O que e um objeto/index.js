/*
  Objeto: Tenis (Propriedade) "cadarço", "palmilha"
  Objeto: Celular (Propriedade)
  Objeto: Drone (Propriedade)

  Propriedades / Atributos / Funcionalidades
*/


const tenis = {
    tipo: "Tenis de Corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObj: [
        { nome: "Nike" },
        { nome: "Adidas" },
        { nome: "etc" },
    ],
    getMarcaArrayValores: function (params) {
        return this.marcaArrayObj[params];
    },
    getMarcaArrayObj: function (params) {
        return this.marcaArrayObj[params].nome;
    }
}

console.log(tenis);
console.log(tenis.tipo);
console.log(tenis.tamanho);