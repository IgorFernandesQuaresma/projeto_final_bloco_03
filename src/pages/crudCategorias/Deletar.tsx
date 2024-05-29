import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../model/Categoria";
import { buscar, deletar } from "../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria () {
    
    const navigate = useNavigate()
    const [categorias, setCategorias] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias);
        } catch (error) {
            alert("Categoria não encontrada");
        }
    }

    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/categorias')
    }

    async function DeletarCategoria() {

        setIsLoading(true)

        if (id !== undefined) {

            try {
                await deletar(`/categorias/${id}`);
                alert('Categoria deletada com sucesso!');
            } catch (error) {
                alert('Erro ao deletar categoria')
                
                
            }

        } 
        setIsLoading(false)
        retornar()
    
    }

    return (
        <div className="p-8">
    <div className='container w-1/3 mx-auto justify-center border-2 border-azul p-8'>
        <h1 className='text-cinza font-poppins font-light text-lg'>Deletar tema</h1>
        <p className='text-cinza font-sans font-light text-sm mb-4'>
            Você tem certeza de que deseja apagar o tema a seguir?</p>
        <div className=' bg-branco flex flex-col overflow-hidden'>
            <header 
                className='py-2 px-6 text-cinza font-poppins font-light text-lg'>
                Tema
            </header>
            <p className='text-cinza font-sans font-light text-sm mb-4 h-full'>{categorias.nome}</p>
            <div className="flex justify-center gap-3">
                <button 
                    className='text-bege font-sans font-light text-branco bg-azul border border-azul rounded-md
                    px-4 py-2 hover:bg-verde hover:text-branco hover:border-branco'
                    onClick={retornar}>
                    Não
                </button>

                <button 
                    className='text-bege font-sans font-light text-branco bg-azul border border-azul rounded-md
                    px-4 py-2 hover:bg-verde hover:text-branco hover:border-branco'
                    onClick={DeletarCategoria}>

                {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>Sim</span>
                    }
                
                </button>

            </div>
        </div>
    </div>
    </div>
    )
}

export default DeletarCategoria