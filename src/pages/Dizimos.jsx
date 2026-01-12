import pixImg from "../assets/dizimo.png"; // troque pelo caminho da sua imagem
import Header from "../components/Header"

export default function Dizimos() {
  return (
    <div>
    <div>
        <Header />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-10">
      
      
      {/* ESQUERDA - IMAGEM */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={pixImg} 
          alt="QR Code Dízimo" 
          className="max-w-sm w-full rounded-md shadow"
        />
      </div>

      {/* DIREITA - TEXTO */}
      <div className="w-full md:w-1/2 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Dízimo e Oferta</h2>

        <p className="text-md mb-4 max-w-md mx-auto">
          Cada um dê conforme determinou em seu coração, não 
          com pesar ou por obrigação, pois Deus ama quem dá com alegria.
        </p>

        <p className="font-semibold">2 Coríntios 9:7</p>
      </div>
    </div>
    </div>
  );
}
