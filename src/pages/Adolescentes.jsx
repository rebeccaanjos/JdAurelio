import creioImg from "../assets/creio.jpg";
import Header from "../components/Header";

export default function Adolescentes() {
  return (
    <div>
      <Header />

      <section className="relative flex items-center justify-center bg-white">

        {/* Imagem responsiva */}
        <img
          src={creioImg}
          alt="CREIO"
          className="
            relative z-0 w-full object-cover
            h-[300px]          /* mobile */
            md:h-[500px]       /* tablet */
            lg:h-[704px]       /* desktop */
          "
        />

        {/* Instagram responsivo */}
        <p
          className="
            absolute bottom-2 right-2 z-10 text-xs text-black font-medium
            md:bottom-4 md:right-4 md:text-sm
          "
        >
          <a
            href="https://www.instagram.com/creio_jdaurelio71?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:underline cursor-pointer"
          >
            @creio_jdaurelio71
          </a>
        </p>

      </section>
    </div>
  );
}
