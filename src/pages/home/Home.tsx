import { Link } from "react-router-dom";
import ilustracaoRH from "../../assets/Resume-amico.png";

function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        background: "linear-gradient(180deg, #530092 50%, #19002C 100%)",
      }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Pronto para modernizar seu RH?
          </h1>
          <p className="text-lg text-gray-300">
            Gestão simples, eficiente e segura.
          </p>
          <button className="bg-black/40 text-white px-6 py-3 w-fit rounded-md font-semibold backdrop-blur-sm hover:bg-black/60 transition">
            <Link to="/contato"> Fale conosco</Link>
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={ilustracaoRH}
            alt="Ilustração ConnectaRH"
            className="w-4/5 md:w-3/4 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
