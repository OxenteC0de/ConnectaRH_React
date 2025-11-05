import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    setEnviado(true);
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="bg-gradient-to-b from-purple-800 to-violet-950 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-lg text-purple-200">
            Tem dúvidas? Envie uma mensagem que responderemos em breve!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-purple-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-purple-200">contato@oxentecode.com</p>
            </div>

            <div className="bg-purple-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-purple-200">(70) 7070-7070</p>
            </div>

            <div className="bg-purple-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-purple-200">Brasil</p>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-purple-800 rounded-lg p-8 space-y-4"
          >
            {/* Mensagem Sucesso */}
            {enviado && (
              <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                ✓ Mensagem enviada com sucesso!
              </div>
            )}

            {/* Nome */}
            <div>
              <label className="block text-sm font-semibold mb-2">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="seu@email.com"
              />
            </div>

            {/* Assunto */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Assunto
              </label>
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Assunto da mensagem"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            {/* Botão */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="flex-1 bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;
