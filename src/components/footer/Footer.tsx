import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";




function Footer() {
    
    return (
<footer className='flex flex-col justify-center items-center gap-1 h-20 w-full bg-azul'>      
<div className='flex flex-col justify-center items-center gap-1'>
    <h1 className='text-branco font-poppins font-light text-xs'>Desenvolvido por Igor Fernandes </h1>
</div>

<div className='flex flex-row gap-4'>
<WhatsappLogo className='text-branco hover:opacity-50 transition-opacity duration-200' size={32}/>
<GithubLogo className='text-branco hover:opacity-50 transition-opacity duration-200' size={32} />
<LinkedinLogo className='text-branco hover:opacity-50 transition-opacity duration-200' size={32} />
</div>
</footer>

)}

export default Footer