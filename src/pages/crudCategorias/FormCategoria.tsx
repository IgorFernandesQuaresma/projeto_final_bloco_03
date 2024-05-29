import Categoria from "../../model/Categoria";
import { ChangeEvent, useEffect, useState } from "react";
import { atualizar, buscar, cadastrar } from "../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria () {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/categorias')
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categorias, setCategorias);
                alert('Categoria atualizada com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar categoria')
                
                
            }

        } else {

            try {
                await cadastrar(`/categorias`, categorias, setCategorias);
                alert('Categoria cadastrada com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar categoria')

            }

        }

        setIsLoading(false)
        retornar()
    
    }


    console.log(JSON.stringify(categorias))
    




    return (
    <div className="flex flex-col justify-center items-center w-full min-h-96">
        <form className="flex flex-col justify-center w-1/2 border border-azul p-4 bg-branco"
        onSubmit={gerarNovaCategoria}>
            <h1 className='text-cinza font-poppins font-light text-lg'>Cadastrar Categoria</h1>
            <div className="mb-4">
                <label htmlFor="tema" className="block text-sm font-sans font-medium text-bege">Categoria:</label>
                <input
                    type="text"
                    id="descricao"
                    name='nome'
                    placeholder="Digite sua categoria"
                    required
                    className="mt-1 block w-10/12 h-10 p-2 
                    border border-azul rounded-md shadow-sm 
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    bg-transparent"
                    value = {categorias.nome}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    
            </div>

            <div className="flex justify-center">

            <button
                        className="w-1/2 h-full text-branco text-center font-sans font-light bg-azul border border-azul 
                        rounded-md px-4 py-2 hover:bg-verde hover:text-branco hover:border-verde
                        transition duration-700 ease-ease flex justify-center items-center"
                        type="submit">

                        {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                        

                    </button>
        
            </div>
        </form>
</div>
    )
}

export default FormCategoria