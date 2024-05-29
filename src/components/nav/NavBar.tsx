import { Link } from "react-router-dom"
import LogoFarm from '../../assets/LogoFarm.png'
import { ShoppingCart, User } from "@phosphor-icons/react"

function NavBar () {
    return (
    <div className="container_navBar">

    <nav className='bg-branco bg-opacity-75 flex flex-col justify-center items-center w-full mx-auto p-2 border-b-4 border-azul'>
        <ul className='flex flex-row justify-around items-center gap-3 w-full'>

        <Link to = './'>
            <img className="nav_logo h-[50px] w-[50px]" src={LogoFarm} alt="Logo Farm" />
        </Link>
            <div className ='container_navBar_container_text
            flex flex-row gap-3'>
        <Link to = './home'>
                <a className = "text-bege font-sans hover:text-verde" href="#home">Home</a>
        </Link>

        <Link to = '/categorias'>
                <a className = "text-bege font-sans hover:text-verde" href="#postagens" >Postagens</a>
        </Link>
        </div>

                <div className="container_navBar_container_icon flex flex-row gap-3">
                <ShoppingCart size={32} weight="light" className="text-azul hover:opacity-75 transition-opacity duration-200" />
                <User size={32} weight="light" className="text-azul hover:opacity-75 transition-opacity duration-200" />
                </div>
        </ul>
    </nav>
    </div>
    )
}

export default NavBar