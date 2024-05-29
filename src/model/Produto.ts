import Produto from "./Categoria";

export default interface Categoria {
    id:number;
    nome: string;
    produto?: Produto | null;
}
