import umadebImg from "../assets/umadeb.png";
import Header from "../components/Header";

export default function Jovens() {
  return (
    <div>
      <Header />

      <section className="relative flex items-center justify-center bg-white">

        {/* Logo responsiva */}
        <img
          src={umadebImg}
          alt="Umadeb"
          className="
            relative z-0 w-full object-cover
            h-[300px]          /* mobile */
            md:h-[500px]       /* tablet */
            lg:h-[704px]       /* desktop */
          "
        />

        {/* Insta canto direito */}
        <p className="absolute bottom-2 right-2 text-xs text-black font-medium z-10
                      md:bottom-4 md:right-4 md:text-sm">
          <a
            href="https://www.instagram.com/umadeb71.aurelio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:underline cursor-pointer"
          >
            @umadeb71.aurelio
          </a>
        </p>

      </section>
    </div>
  );
}
