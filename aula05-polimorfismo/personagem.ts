import { Utils } from "./utils";

export abstract class Personagem {
    protected _nome: string;
    protected _armadura: number;
    protected _vidaMaxima: number;
    protected _vidaAtual: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Utils.randomizar(100, 1_000);
        this._vidaMaxima = Utils.randomizar(100, 1_000);
        this._vidaAtual = Utils.randomizar(40, this._vidaMaxima);
    }


    public abstract atacar(): string;


}



