import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePhone, AiTwotoneHome } from "react-icons/ai";
import { BsPatchQuestion } from "react-icons/bs";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { MdOutlinePhotoCameraBack, MdOutlineVilla } from "react-icons/md";

function Menu() {
  const slug = useRouter().route;

  return (
    <div className="hidden w-full md:flex">
      {/* box menu area, only react icons and hover box will color change */}
      <div className="w-full rounded-md bg-[#031926] p-[3px]">
        <div className="grid grid-cols-7 gap-7 rounded-md border-[2px] border-dashed border-white/10 p-2">
          <Link
            href="/"
            className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
          >
            <span className="text-2xl">
              <AiTwotoneHome />
            </span>
            <span className="text-lg tracking-wide">Ana Sayfa</span>
          </Link>
          {slug ? (
            <Link
              href="/#aparts_section"
              className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
            >
              <span className="text-2xl">
                <MdOutlineVilla />
              </span>
              <span className="text-lg tracking-wide">Apartlar</span>
            </Link>
          ) : (
            <a
              href="#aparts_section"
              className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
            >
              <span className="text-2xl">
                <MdOutlineVilla />
              </span>
              <span className="text-lg tracking-wide">Apartlar</span>
            </a>
          )}
          <Link
            href="/avsa-adasi"
            className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
          >
            <span className="text-2xl">
              <GiIsland />
            </span>
            <span className="text-lg tracking-wide">Avşa Adası</span>
          </Link>
          <button className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20">
            <span className="text-2xl">
              <FaUmbrellaBeach />
            </span>
            <span className="text-lg tracking-wide">Plajlar</span>
          </button>

          <Link
            href="/galeri"
            className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
          >
            <span className="text-2xl">
              <MdOutlinePhotoCameraBack />
            </span>
            <span className="text-lg tracking-wide">Galeri</span>
          </Link>
          <Link
            href="/nasil-gidilir"
            className="flex w-full flex-col items-center justify-center gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20"
          >
            <span className="text-2xl">
              <BsPatchQuestion />
            </span>
            <span className="text-lg tracking-wide">Nasıl Gidilir?</span>
          </Link>
          <button className="flex w-full flex-col items-center justify-between gap-1 rounded-md py-1 text-white duration-100 hover:bg-white/20">
            <span className="text-2xl">
              <AiOutlinePhone />
            </span>
            <span className="text-lg tracking-wide">İletişim</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;
