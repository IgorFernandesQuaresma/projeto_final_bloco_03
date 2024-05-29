import Categoria from "./Produto";

export default interface Produto {
    id: number; 
    nome: string;
    preco: number
    foto:string
    produto?: Categoria | null

}