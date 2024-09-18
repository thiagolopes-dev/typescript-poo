import { Personagem } from "./personagem";
import { Utils } from './utils';

export class Mago extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string){
        super(nome);
        this._intelecto = Utils.randomizar(100, 1_000);
        this._velocidade = Utils.randomizar(10, 2_000);
    }

    status(): string {
        return (
            "Mago:  \n" +
            "\nNome: " +
            this.nome +
            ("\nArmadura: " + this._armadura.toFixed(2)) +
            ("\nVida Máxima: " + this._vidaMaxima.toFixed(2)) +
            ("\nVida Atual: " + this._vidaAtual.toFixed(2)) +
            ("\nIntelecto: " + this._intelecto.toFixed(2)) +
            ("\nVelocidade: " + this._velocidade.toFixed(2))
        );
    }
}