import { Personagem } from "./personagem";
import { Utils } from './utils';

export class Sacedorte extends Personagem {
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string){
        super(nome);
        this._espirito = Utils.randomizar(100, 1_000);
        this._versatilidade = Utils.randomizar(100, 1_000);
        this._vidaMaxima = Utils.randomizar(200, 1_000);
        this._vidaAtual = +Utils.randomizar(40, this._vidaMaxima);
    }

    public atacar(): string {
        return 'Ataque do Sacerdote';
    }
    
}