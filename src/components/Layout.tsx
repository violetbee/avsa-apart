import { BsWhatsapp } from "react-icons/bs";
import Header from "./Header/Header";
import Menu from "./Header/Menu";
import { Asap_Condensed } from "next/font/google";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

const updatedFont = Asap_Condensed({
  weight: ["300", "400"],
  subsets: ["latin-ext"],
});

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <main
      className={`min-h-screen scroll-smooth bg-[#F0F7EE] pb-10 ${updatedFont.className}`}
    >
      <header className="container sticky top-0 z-50 mx-auto max-w-[1300px] bg-white shadow-md md:relative md:bg-transparent md:shadow-none">
        {/* Top Bar */}
        <Header />
        <Menu />
      </header>
      {children}
      <div className="fixed bottom-4 right-4 flex gap-2 md:block md:space-y-2">
        <Link
          href="tel:05366983453"
          target="_blank"
          className="flex h-12 w-36 flex-col items-start justify-end rounded-md bg-[#267D96] pb-2 pl-4 text-lg font-extralight text-white"
        >
          <div className="flex items-center justify-center  gap-1">
            <FaMobileAlt size={23} /> Şimdi Ara
          </div>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=905366983453&amp;text=Merhaba"
          target="_blank"
          className="flex h-12 w-36 flex-col items-start justify-end rounded-md bg-[#25D366] pb-2 pl-4 text-lg font-extralight text-white"
        >
          <div className="flex items-center justify-center gap-1">
            <BsWhatsapp size={23} /> Canlı Yardım
          </div>
        </Link>
      </div>
    </main>
  );
}
export default Layout;
