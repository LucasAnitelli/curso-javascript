/* 
Objeto: Tenis (Propriedade) "cadarco", "palmilha"
Objeto: Celular (Propriedade)
Objeto: Drone (Propriedade)

Propriedades / Atributos / Funcionalidades 
*/

console.log(
    { 
        tenis: {
            preco: 150,
            disponivel: false,
            estoque: 150,
            cadarco: {
                cor: "rosa",
                tamanho: "G"
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo"
            }
        }
    },
    {
        tenis: {
            preco: 30,
            disponivel: true,
            estoque: 5,
            cadarco: {
                cor: "rosa",
                tamanho: "G"
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo"
            }
        }
    }
)

console.log([
    { 
        tenis: {
            preco: 150,
            disponivel: false,
            estoque: 150,
            cadarco: {
                cor: "rosa",
                tamanho: "G"
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo"
            }
        }
    },
    {
        celular: {
            marca: "Motorola"
        }
    }
])