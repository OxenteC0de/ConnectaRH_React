function Sobre() {
  const devs = [
    {
      id: 1,
      Imagem: "https://avatars.githubusercontent.com/u/225912032?v=4",
      nome: "David Barbosa",
      cargo: "Desenvolvedor",
      github: "https://github.com/DavidBaarbosa",
      linkedin: "https://www.linkedin.com/in/dev-davidbarbosa/",
    },
    {
      id: 2,
      Imagem:
        "https://media.licdn.com/dms/image/v2/C5603AQFtV3U91SUD1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1558430134472?e=1764201600&v=beta&t=r5OmHwxR07_RnTQaWEMhl60RBlXB4M-3A8B0AqNeiyM",
      nome: "Dilvani Estrela",
      cargo: "Desenvolvedora e Documentação",
      github: "https://github.com/Dilvaniestrela",
      linkedin: "https://www.linkedin.com/in/dilvaniestrela/",
    },
    {
      id: 3,
      Imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQHTbI6wIsZ70w/profile-displayphoto-scale_200_200/B4DZkdaZAWH0AY-/0/1757135084211?e=1764201600&v=beta&t=y33JXeXP7lT4A9s5Qv5vcmudcK2UZv2LmuC015teT9Q",
      nome: "Janaína Bezerra",
      cargo: "Desenvolvedora",
      github: "https://github.com/Janainabezerraas",
      linkedin: "https://www.linkedin.com/in/janainabezerraas/",
    },
    {
      id: 4,
      Imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQGggZwsYPiMXA/profile-displayphoto-scale_200_200/B4DZg_AvjIHsAc-/0/1753403816875?e=1764201600&v=beta&t=chbJxO_NM_mGy7L1PlQSzT5Z-tnFmFsg8Qi5fDVJb6M",
      nome: "Karine Santos",
      cargo: "Desenvolvedora",
      github: "https://github.com/k4rin",
      linkedin: "https://www.linkedin.com/in/karine-cristine-lopes-dos-santos/",
    },
    {
      id: 5,
      Imagem:
        "https://media.licdn.com/dms/image/v2/D4D03AQGZPzL_SGV5sA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693271331623?e=1764201600&v=beta&t=_iVe96NiwIc3n3OEihpsNt6Ro-w5wLEDpoQjclAn9v4",
      nome: "Tauane Soares",
      cargo: "Desenvolvedora",
      github: "https://github.com/tauanesoares",
      linkedin: "https://www.linkedin.com/in/tauanews/",
    },
    {
      id: 6,
      Imagem:
        "https://media.licdn.com/dms/image/v2/D4E03AQElydPuHdDSfg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682979178325?e=1764201600&v=beta&t=ec_d3CEzla-WTsC0I4wQh0EqvPAyERPYUNmW75tGJ4A",
      nome: "William Almeida",
      cargo: "Scrum Master (líder) e Desenvolvedor",
      github: "https://github.com/willmartinsss",
      linkedin: "https://www.linkedin.com/in/william-m-almeida/",
    },
    {
      id: 7,
      Imagem:
        "https://media.licdn.com/dms/image/v2/D4D35AQGspDdI26Y0kQ/profile-framedphoto-shrink_200_200/B4DZoRFerSGwAY-/0/1761223240652?e=1762977600&v=beta&t=i4XB4QkflTFtm-OqrPmqT9yiFGWrtRt-MUQD8ifudng",
      nome: "Winnie Sant'Ana",
      cargo: "Desenvolvedora",
      github: "https://github.com/wssant",
      linkedin: "https://www.linkedin.com/in/winniesantana/",
    },
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
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={dev.Imagem}
                  alt={`Foto de ${dev.nome}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold mb-2">{dev.nome}</h3>
              <p className="text-purple-200 text-sm mb-4">{dev.cargo}</p>

              {/* Links Sociais */}
              <div className="flex justify-center gap-3">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  LinkedIn
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
