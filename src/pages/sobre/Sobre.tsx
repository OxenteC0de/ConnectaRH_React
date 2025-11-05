function Sobre() {
  const devs = [
    { id: 1, nome: "David Barbosa", cargo: "Frontend", imagem: "./public/david.jpeg" },
    { id: 2, nome: "Dilvani Estrela", cargo: "Frontend", imagem: "./public/dilvani.jpeg" },
    { id: 3, nome: "Karine Santos", cargo: "Frontend", imagem: "./public/karine.jpeg" },
    { id: 4, nome: "Janaina Bezerra", cargo: "Frontend", imagem: "./public/janaina.jpeg" },
    { id: 5, nome: "Tauane Soares", cargo: "Full Stack", imagem: "./public/tauane.jpeg" },
    { id: 6, nome: "William Almeida", cargo: "DevOps", imagem: "" },
    { id: 7, nome: "Winnie Santana", cargo: "Frontend", imagem: "./public/winne.jpeg" },
  ];

  return (

    <section className="bg-gradient-to-b from-purple-800 to-violet-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Somos a Oxente Code, uma equipe de 7 desenvolvedores apaixonados por
            tecnologia, inovação e criação de soluções incríveis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {devs.map((dev) => (
            <div
              key={dev.id}
        
              className="bg-purple-800 rounded-lg p-6 text-center hover:bg-purple-700 transition-colors"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={dev.imagem}
                  alt={`Foto de ${dev.nome}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{dev.nome}</h3>
              <p className="text-purple-200 text-sm mb-4">{dev.cargo}</p>
              <div className="flex justify-center gap-3">
                <button className="text-purple-300 hover:text-white transition-colors">
                  GitHub
                </button>
                <button className="text-purple-300 hover:text-white transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
