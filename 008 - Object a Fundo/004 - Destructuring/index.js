const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike"},  { nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: { a: "a = a", b: { c: "C e igual a c" }}
}

// const { tamanho, estoque, marcas = "Nao possui Marca alguma!" } = Tenis;

// console.log(tamanho, estoque, marcas);

// const { secret: randowNumber, n: avaliacoes } = Tenis;

// console.log(randowNumber);

const { link: { b : { c }} } = Tenis;

console.log(Tenis.link.a, Tenis.link.b.c);

Tenis.link.a
Tenis.link.b.c