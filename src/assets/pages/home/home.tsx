import header from '../../heeader.png'

function Home () {
    return (
        <div className="container_home h-[100vh] flex flex-row p-[80px]">
            <div className="w-1/2 text-start flex flex-col justify-center">
                <h1 className="text-verde font-pop font-bold text-6xl">Farmacia Generation</h1>
                <p className="text-cinza font-sans font-bold text-xl mt-[-30px] mb-8">Os melhores produtos estão aqui</p>
                <a href='https://sitefake.com' className="text-branco font-sans font-light bg-azul
                    border border-azul rounded-md px-4 py-2 w-[150px]
                    hover:bg-verde hover:text-branco hover:border-verde
                    transition duration-700 ease-in-out">
                    Compre Agora!
                </a>     
            </div>
            <div className="w-1/2 flex flex-col justify-center align-center">
                <img className="h-[650px] w-[580px]" src={header} alt="" />
            </div>
        </div>
    )
}


export default Home