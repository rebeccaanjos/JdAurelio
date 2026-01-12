import pastorImg from "../assets/pastor.png"; // Troque pelo caminho da sua imagem
import Header from "../components/Header"

export default function Pastor() {
  return (
    <div>
        <div>
            <Header />
        </div>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-10 ">
      
      {/* ESQUERDA - IMAGEM */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={pastorImg}
          alt="Pastor Benedito"
          className="max-w-sm w-full rounded-md shadow"
        />
      </div>

      {/* DIREITA - TEXTO */}
      <div className="w-full md:w-1/2 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Pastor Benedito</h2>

        <p className="text-md mb-4 max-w-md mx-auto">
          11 Como pastor ele cuida de seu rebanho, com o braço ajunta os cordeiros
          e os carrega no colo; conduz com cuidado as ovelhas que amamentam suas crias.
        </p>

        <p className="font-semibold">Isaías 40:11</p>
      </div>
    </div>
    </div>
  );
}
