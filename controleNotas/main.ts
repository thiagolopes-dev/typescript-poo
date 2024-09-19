import prompt from 'prompt-sync';
import { Controle } from "./controle";

let control: Controle = new Controle(0, 0, 0);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
    console.log('=========MENU=======');
    console.log('1. Lançar Nota');
    console.log('9. Sair');

    option = +teclado('Escolha uma opção:');

    switch (option) {
        case 1:
            let pnota: number = +teclado('Digite a sua nota do 1 bimestre: ');
            let snota: number = +teclado('Digite a sua nota do 2 bimestre: ');
            control.avaliacao(pnota, snota);
            break;
        default:
            break;
    }
}