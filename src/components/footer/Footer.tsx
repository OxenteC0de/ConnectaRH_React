import {  GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
        <div className="flex justify-center bg-[#19002C] text-white">
            <div className="container flex  flex-col items-center py-4">
                <p className="text-xl font-bold">
                    ConectaRH | Copyright: {data}
                </p>
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex gap-2">

                    <a href="https://github.com/OxenteC0de" target="_blank">
                    <GithubLogoIcon size={40}  />
                    </a>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;