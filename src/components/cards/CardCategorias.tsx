import { Link } from "react-router-dom"
import Categoria from "../../model/Produto"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria ({categoria}: CardCategoriaProps) {

    


    return (
        <div className="flex flex-col justify-center items-center m-1 gap-1 w-[60vh] h-[30vh] bg-branco bg-opacity-75 border border-verde box-border">
            <h1 className="m-0 p-4 bg-verde bg-opacity-55 w-full text-bege font-poppins font-light text-xl text-left border-b-2 border-branco box-border">
                Categoria: {categoria.nome}
            </h1>
            <p className="text-bege font-sans font-light text-xl mb-5 mt-5 p-4 box-border">
                {categoria.nome}
            </p>
            <div className="flex flex-row justify-center items-center gap-1 w-full h-[30vh] bg-branco bg-opacity-75 box-border">
            
                <Link to={`/formcategoria/${categoria.id}`}
                            className='w-1/2 h-full text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
                            hover:bg-verde hover:text-branco text-center flex items-center justify-center
                            transition duration-700 ease-ease'>
                            <button>Editar</button>
                </Link>
                
                <Link to={`/deletarcategoria/${categoria.id}`}
                            className='w-1/2 h-full text-bege font-sans font-light border border-bege rounded-md px-4 py-2 
                            hover:bg-verde hover:text-branco text-center flex items-center justify-center
                            transition duration-700 ease-ease'>
                            <button>Deletar</button>
                </Link>
            </div>
    </div>
    )
}

export default CardCategoria