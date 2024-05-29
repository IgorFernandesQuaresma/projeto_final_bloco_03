import { useEffect, useState } from "react";
import CardCategoria from "../../components/cards/CardCategorias"
import Categoria from "../../model/Produto";
import { buscar } from "../../service/Service";
import { ThreeDots } from "react-loader-spinner";

function PageCategorias () {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const buscarCategorias = async () => {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error) {
            alert("Erro ao buscar categorias:");

        }
    };

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    console.log(categorias)


    return (

        
            <div className="flex justify-center w-full my-4"> 
            <div className="flex flex-wrap justify-center">
            <>
            {categorias.length ===0 && (
                
                <ThreeDots 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="three-dots-loading"
                    wrapperClass="three-dots-wrapper mx-auto"
                    color="#3871C1"/>
                )} 

            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}

            </div>

            </>
            
            </div>
            </div>

    )
}

export default PageCategorias