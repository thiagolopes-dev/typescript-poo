import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacedorte } from "./sacerdote";

let mago: Personagem = new Mago('Gandolf Cinzento');
let sacerdote: Personagem = new Sacedorte('Bilbo Bolseiro');

const personagens: Personagem[] = [];
personagens.push(mago);
personagens.push(sacerdote);

personagens.forEach((p) => {
    console.log(p.atacar());
});

