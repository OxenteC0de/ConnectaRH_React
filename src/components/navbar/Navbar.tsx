import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="w-full flex justify-center py-4
                        bg-[#530092] texte-white">

                            <div className="container flex justify-between texy-lg mx-8">
                             {/* Logo */}
                             <Link to='/home' className="flex  items-center gap-2">
                                <img 
                                src="/logo.png"
                                 alt="Logo ConectaRH"
                                 className="h-30 w-auto" />
                             </Link> 
                            {/* Links */}
                            <div className="flex gap-4">
                                <Link to= '/' className="hover:underline text-white">Sobre</Link>
                                <Link to= '/' className="hover:underline text-white">Produto</Link>   
                            </div>  
                    </div>
             </div>
        </>
    )
            
}

export default Navbar;