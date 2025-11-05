function Sobre() {
  const devs = [
    { id: 1, nome: "David Barbosa", cargo: "Desenvolvedor",
      github: "https://github.com/DavidBaarbosa",
      linkedin: "https://www.linkedin.com/in/dev-davidbarbosa/"},
    { id: 2, nome: "Dilvani Estrela ", cargo: "Desenvolvedora e Documentação",
      github: "https://github.com/Dilvaniestrela",
      linkedin: "https://www.linkedin.com/in/dilvaniestrela/"},
    { id: 3, nome: "Janaína Bezerra", cargo: "Desenvolvedora",
      github: "https://github.com/Janainabezerraas",
      linkedin: "https://www.linkedin.com/in/janainabezerraas/"},
    { id: 4, nome: "Karine Santos", cargo: "Desenvolvedora",
      github: "https://github.com/k4rin",
      linkedin: "https://www.linkedin.com/in/karine-cristine-lopes-dos-santos/"},
    { id: 5, nome: "Tauane Soares", cargo: "Desenvolvedora",
      github: "https://github.com/tauanesoares",
      linkedin: "https://www.linkedin.com/in/tauanews/"},
    { id: 6, nome: "William Almeida", cargo: "Scrum Master (líder) e Desenvolvedor",
      github: "https://github.com/willmartinsss",
      linkedin: "https://www.linkedin.com/in/william-m-almeida/"},
    { id: 7, nome: "Winnie Sant’Ana", cargo: "Desenvolvedora",
      github: "https://github.com/wssant",
      linkedin: "https://www.linkedin.com/in/winniesantana/"},
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

        {/* Grid de Devs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devs.map((dev) => (
            <div
              key={dev.id}
              className="bg-purple-800 rounded-lg p-6 text-center hover:bg-purple-700 transition-colors"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold">👨‍💻</span>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold mb-2">{dev.nome}</h3>
              <p className="text-purple-200 text-sm mb-4">{dev.cargo}</p>

              {/* Links Sociais (Opcional) */}
              <div className="flex justify-center gap-3">
                <a
                  href={dev.github}
                  target="_blank" // Abre o link em nova aba
                  className="text-purple-300 hover:text-white transition-colors"
                > GitHub
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank" // Abre o link em nova aba
                  className="text-purple-300 hover:text-white transition-colors"
                > LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;
