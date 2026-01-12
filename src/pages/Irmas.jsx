import irmasImg from "../assets/irmas.png";
import Header from "../components/Header";

export default function Irmas() {
  return (
    <div>
      <Header />

      <section className="relative flex items-center justify-center bg-white h-[811px] overflow-hidden">

        {/* Imagem de fundo */}
        <img
          src={irmasImg}
          alt="Irmãs"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Camada branca transparente */}

        {/* Texto centralizado */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-2xl font-bold mb-4">Mulheres de joelhos</h2>

          <p className="text-sm md:text-base mb-4">
            21 Não temas, ó terra: regozija-te e alegra-te,
            porque o Senhor fez grandes coisas.
          </p>

          <p className="font-semibold">Joel 2:21</p>
        </div>

      </section>
    </div>
  );
}
