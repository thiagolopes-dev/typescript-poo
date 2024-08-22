import prompt from 'prompt-sync';
class Personagem {
    nome: string = '';
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
}
let person = new Personagem();
person.nome = 'Goku';
person.ataque = 10;
person.energia = 20;
person.defesa = 30;
person.vida = 2;

let teclado = prompt();
let option: number = 0;

while (option != 9) {
    console.log("======Personagem=====");
    console.log("1. Treinar Ataque");
    console.log("2. Treinar Defesa");
    console.log("3. Imprimir Dados");
    console.log("9. Sair");
    option = +teclado("Escolha uma opção:")
    switch (option) {
        case 1:
            person.ataque += 20;
            break;
        case 2:
            person.defesa -= 10;
            break;
        case 3:
            console.log('Personagem Atualizado', person);
            break;
        default:
            break;
    }
}

// FORMA 2
// class Personagem {
//     nome: string = 'Vedetta';
//     energia: number = 10;
//     vida: number = 0;
//     ataque: number = 0;
//     defesa: number = 0;
//     constructor(nome: string, energia: number){
//         this.nome  = 'Goku';
//         this.energia = 90;
//         this.vida = 20;
//         this.ataque = 30;
//         this.defesa = 40;
//     }
// }
// let person = new Personagem('Curirin', 20);
// person.energia = 30;
// console.log('Personagem', person);

// FORMA 3
// class Personagem {
//     public nome: string;
//     public energia: number;
//     public ataque: number;
//     public vida: number;
//     public defesa: number;

//     constructor(nome: string, energia: number, ataque: number, vida: number, defesa: number) {
//         this.nome = nome;
//         this.energia = energia;
//         this.ataque = ataque;
//         this.vida = vida;
//         this.defesa = defesa;
//     }
// }

// const goku = new Personagem('Goku 2', 90, 80, 70, 2);
// console.log("Personagem >>>", goku);

// FORMA 4
// class Personagem {
//     public nome: string = '';
//     public energia: number = 0;
//     public ataque: number = 0;
//     public vida: number = 0;
//     public defesa: number = 0;
// }

// const goku = new Personagem();
// goku.nome = 'Goku 2';
// goku.energia = 90;
// goku.ataque = 80;
// goku.vida = 70;
// goku.defesa = 50;

// console.log("Personagem >>>", goku);
