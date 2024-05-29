import { GithubLogo, LinkedinLogo} from "@phosphor-icons/react";




function Footer() {
    
    return (
<footer className='flex flex-col justify-center items-center gap-1 h-20 w-full bg-azul'>      
<div className='flex flex-col justify-center items-center gap-1'>
    <h1 className='text-branco font-poppins font-light text-xs'>Desenvolvido por Igor Fernandes </h1>
</div>

<div className='flex flex-row gap-4'>

<a href="https://github.com/IgorFernandesQuaresma" target="_blank" rel="noopener noreferrer">
    <GithubLogo className='text-branco hover:opacity-50 transition-opacity duration-200' size={32} />
</a>

<a href="https://www.linkedin.com/in/ifernandesq" target="_blank" rel="noopener noreferrer">
    <LinkedinLogo className='text-branco hover:opacity-50 transition-opacity duration-200' size={32} />
</a>
</div>
</footer>

)}

export default Footer