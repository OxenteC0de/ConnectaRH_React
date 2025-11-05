function Produto() {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-800 to-violet-950 text-white font-inter py-20">
        <div className="container mx-auto grid md:grid-cols-2 items-center px-8">
          
          {/* Bloco 1 - Texto + imagem direita */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <h2 className="text-5xl font-bold">Nosso sistema</h2>
            <p className="text-xl leading-relaxed text-gray-200">
              O ConnectaRH é um sistema de gerenciamento de cadastros desenvolvido 
              para equipes de RH que buscam agilidade e organização no controle 
              de colaboradores e processos internos.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="src/assets/arquivos.png"
              alt="Ilustração de arquivos"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>

          {/* Bloco 2 - imagem esquerda + texto */}
          <div className="flex justify-center order-3 md:order-none">
            <img
              src="src/assets/Relatorio.png"
              alt="Ilustração de relatório"
              className="w-full h-auto max-w-md object-contain"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left space-y-6 pl8">
            <h2 className="text-5xl font-bold">Gerenciamento</h2>
            <p className="text-xl leading-relaxed text-gray-200">
              Gerencie com agilidade as informações dos colaboradores. 
              Mantenha as informações sobre nome, cargo, departamento e salário.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Produto;
