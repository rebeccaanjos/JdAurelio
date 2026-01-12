import church from "../assets/church.png";
import igreja from "../assets/igreja.png";
import prn from "../assets/empresa1.png";
import din from "../assets/empresa2.png";
import liv from "../assets/empresa3.png";
import psic from "../assets/empresa4.png";
import Header from "../components/Header"

export default function Home() {
  return (
    <main className="w-full">
      <Header />

      {/* Banner Versículo */}
      <section
        className="relative w-full h-[420px] sm:h-[490px] bg-no-repeat bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${church})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 bg-blue-700/80 p-4 sm:p-6 rounded-md text-white max-w-xs sm:max-w-md text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Versículo do Dia</h2>
          <p className="text-xs sm:text-sm mb-4 leading-relaxed">
            O próprio Senhor da paz dê a vocês a paz em todo o tempo e de todas as formas.
            O Senhor seja com todos vocês.
          </p>
          <p className="font-semibold text-xs sm:text-sm">2 Tessalonicenses 3:16</p>
        </div>

        <p className="absolute bottom-2 right-2 z-10 text-[10px] sm:text-xs text-white">
          <a
            href="https://www.instagram.com/ieadjardimaurelio"
            target="_blank"
            className="hover:underline"
          >
            @ieadjardimaurelio
          </a>
        </p>
      </section>

      {/* Cultos ao vivo */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Cultos ao vivo</h2>

        <div className="flex justify-center">
          <div className="w-[300px] h-[180px] sm:w-[530px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/IEVxdlVDASA"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section id="empresas" className="bg-gray-200 py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Empresas Parceiras</h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[prn, din, liv, psic].map((img, i) => (
            <div
              key={i}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden shadow-md bg-white flex items-center justify-center"
            >
              <img src={img} alt="parceiro" className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Nossa Igreja */}
      <section className="py-10 px-4 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">Nossa Igreja</h2>

          <p>Rua Maria Clara da Silva Sant’Anna, 134</p>
          <p>Jardim Aurélio</p>
          <p>São Paulo - SP</p>
          <p>CEP: 05857-380</p>
        </div>

        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] overflow-hidden rounded-lg shadow-md">
          <img src={igreja} alt="igreja" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-4 text-center text-sm">
        <a
          href="https://www.instagram.com/ieadjardimaurelio"
          target="_blank"
          className="hover:underline"
        >
          @ieadjardimaurelio
        </a>
      </footer>
    </main>
  );
}
