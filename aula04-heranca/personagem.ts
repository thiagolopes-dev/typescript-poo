import { Utils } from "./utils";

export class Personagem {
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
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }
   

    status(): string {
        return (
            "Personagem:  \n" +
            "\nNome: " +
            this.nome +
            ("\nArmadura: " + this._armadura.toFixed(2)) +
            ("\nVida Máxima: " + this._vidaMaxima.toFixed(2)) +
            ("\nVida Atual: " + this._vidaAtual.toFixed(2))
        );
    }
  


}



