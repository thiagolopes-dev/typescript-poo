import { Personagem } from "./personagem";
import { Utils } from './utils';

export class Sacedorte extends Personagem {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string){
        super(nome);
        this._espirito = Utils.randomizar(100, 1_000);
        this._versatilidade = Utils.randomizar(100, 1_000);
    }

    status(): string {
        return (
            "Sacedorte:  \n" +
            "\nNome: " +
            this.nome +
            ("\nArmadura: " + this._armadura.toFixed(2)) +
            ("\nVida Máxima: " + this._vidaMaxima.toFixed(2)) +
            ("\nVida Atual: " + this._vidaAtual.toFixed(2)) +
            ("\nEspirito: " + this._espirito.toFixed(2)) +
            ("\nVersatilidade: " + this._versatilidade.toFixed(2))
        );
    }
}