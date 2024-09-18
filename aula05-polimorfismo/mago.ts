import { Personagem } from "./personagem";
import { Utils } from './utils';

export class Mago extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string){
        super(nome);
        this._intelecto = Utils.randomizar(100, 1_000);
        this._velocidade = Utils.randomizar(10, 2_000);
        this._vidaMaxima = Utils.randomizar(200, 1_000);
        this._vidaAtual = +Utils.randomizar(40, this._vidaMaxima);
    }

    public atacar(): string {
        return 'Ataque do Mago';
    }
    
}