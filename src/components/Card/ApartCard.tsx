import Link from "next/link";
import { AiFillStop } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

function ApartCard(item: Apart) {
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center overflow-hidden rounded-md bg-white shadow-md">
      <div className="w-full overflow-hidden">
        <img
          src={item.coverImage}
          alt=""
          className="h-[250px] w-full rounded-t-md object-cover duration-150 hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <h2 className="text-3xl font-medium tracking-wide text-[#21A179]">
          {item.title}
        </h2>
        <p className="max-w-[306px] break-all text-center text-gray-500">
          {item.description.split(" ").splice(0, 25).join(" ")}
        </p>
        {item.features.map((feature, idx) => (
          <div key={idx} className="flex items-center justify-center gap-1">
            <p className="text-[#21A179]">{feature}</p>
            <TiTick className="text-[#21A179]" />
            {feature === "Denize Yakın" && (
              <span className="text-sm text-gray-600">20 Metre</span>
            )}
            {feature === "İDO İskelesine Yakın" && (
              <span className="text-sm text-gray-600">50 Metre</span>
            )}
          </div>
        ))}
        <p className="flex items-center justify-center gap-1 text-[#21A179]">
          Teras Kat:
          {item.terace ? (
            <TiTick className="text-[#21A179]" />
          ) : (
            <AiFillStop className="text-[#a12121]" />
          )}
        </p>
        <p className="text-[#21A179]">Kapasite: {item.capacity}</p>
        <p className="text-[#21A179]">Boyut: {item.size} m²</p>

        <p className="text-[#21A179]">
          Kahvaltı: {item.breakfast ? "Evet" : "Hayır"}
        </p>
      </div>
      <Link
        href={item.slug}
        className="w-full rounded-b-md bg-[#21A179] py-2 text-center text-lg font-medium tracking-wide text-white"
      >
        İncele
      </Link>
    </div>
  );
}
export default ApartCard;
