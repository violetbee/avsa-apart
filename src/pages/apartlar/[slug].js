import Layout from "../../components/Layout";
import { aparts } from "../../utils/data.js";
import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
import { AiFillStop } from "react-icons/ai";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { BsPlayCircle } from "react-icons/bs";
import Head from "next/head";

function Index({ apart }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 80 * currentImage;
    }

    if (apart.images[currentImage]?.includes("mp4")) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
  }, [currentImage]);

  return (
    <>
      <Head>
        <title>{apart.title + " - " + "Mahir Apart"}</title>
        <meta
          name="description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 40 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name="keywords"
          content="avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mahir Apart" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahir Apart - Avşa Adası" />
        <meta
          property="og:description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 40 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
      </Head>
      <Layout>
        <div className="container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1">
          <div className="flex flex-col justify-between gap-10 rounded-md border-[2px] border-dashed border-black/10 px-3 md:px-14 py-6 md:flex-row">
            <div className="flex flex-col items-center justify-center lg:w-1/2">
              <div className="relative flex w-full justify-center">
                {isVideo ? (
                  <video
                    src={apart.images[currentImage]}
                    loop
                    className="max-h-[400px] min-h-[440px] w-2/3 rounded-md object-cover"
                  />
                ) : (
                  <img
                    src={apart.images[currentImage]}
                    alt={apart.title}
                    className=" w-full rounded-md object-contain max-h-[450px] min-h-[450px]"
                  />
                )}

                {isVideo ? (
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="absolute inset-0 flex h-full w-full items-center justify-center "
                  >
                    <BsPlayCircle className="cursor-pointer text-7xl text-white duration-150 hover:scale-110" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="absolute inset-0"
                  />
                )}
              </div>

              <div className="relative mt-2">
                <button
                  className={`absolute z-10 left-8 p-4 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
                    currentImage === 0 ? "hidden" : ""
                  }`}
                  onClick={() => setCurrentImage(currentImage - 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 cursor-pointer text-gray-500 hover:text-gray-900 `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <div
                  ref={scrollRef}
                  className="relative flex w-full max-w-[600px] items-center justify-between gap-2 overflow-x-hidden scroll-smooth"
                >
                  {apart.images.map((image, index) => {
                    return !image.includes("mp4") ? (
                      <img
                        key={index}
                        className={`h-[100px] w-1/4 cursor-pointer rounded-md object-cover ${
                          currentImage === index
                            ? "border-[2px] border-green-500"
                            : ""
                        }`}
                        src={image}
                        alt={apart.title}
                        onClick={() => setCurrentImage(index)}
                      />
                    ) : (
                      <video
                        key={index}
                        className={`h-[100px] w-1/4 cursor-pointer rounded-md object-cover ${
                          currentImage === index
                            ? "border-[2px] border-green-500"
                            : ""
                        }`}
                        onClick={() => setCurrentImage(index)}
                      >
                        <source src={image} type="video/mp4" />
                      </video>
                    );
                  })}
                </div>
                <button
                  className={`absolute z-10 -right-8 p-4 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 transform ${
                    currentImage === apart.images.length - 1 ? "hidden" : ""
                  }`}
                  onClick={() => setCurrentImage(currentImage + 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-8 w-8 cursor-pointer text-gray-500 hover:text-gray-900 `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h2 className="text-3xl font-medium tracking-wide text-[#21A179]">
                {apart.title}
              </h2>
              {apart.description.split(".").map((item, idx) => (
                <p className=" text-gray-500" key={idx}>
                  {item}
                </p>
              ))}
              {apart.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <p className="text-[#21A179]">{feature}</p>
                  <TiTick className="text-[#21A179]" />
                </div>
              ))}
              <p className="flex items-center gap-1 text-[#21A179]">
                Teras Kat:
                {apart.terace ? (
                  <TiTick className="text-[#21A179]" />
                ) : (
                  <AiFillStop className="text-[#a12121]" />
                )}
              </p>
              <p className="text-[#21A179]">Kapasite: {apart.capacity}</p>
              <p className="text-[#21A179]">Boyut: {apart.size} m²</p>

              <p className="text-[#21A179]">
                Kahvaltı: {apart.breakfast ? "Evet" : "Hayır"}
              </p>
              {/* Find Location */}
              <div className="mt-4 flex flex-col items-center justify-center gap-2">
                <Link
                  href="/nasil-gidilir"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#031926] px-4 py-2 font-semibold text-white duration-150 hover:bg-[#072c41]"
                >
                  <FaMapMarkerAlt className="text-2xl" />
                  <p className="text-xl">Konumu Bul</p>
                </Link>
              </div>
              {/* Whatsapp Contact */}
              <div className="flex flex-col items-center justify-center gap-2">
                <Link
                  href="tel:05366983453"
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#21A179] px-4 py-2 font-semibold text-white duration-150 hover:bg-[#1d6f54]"
                >
                  <FaWhatsapp className="text-2xl" />
                  <p className="text-xl">Rezervasyon Yap</p>
                </Link>
              </div>
            </div>
          </div>
          {
            // Full Screen Image
            isFullScreen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                <div className="relative max-h-[600px] max-w-[600px] px-2 sm:max-h-[700px] sm:max-w-[700px] md:max-h-[800px] md:max-w-[800px] xl:max-h-[1100px] xl:max-w-[1100px]">
                  <button className="absolute -bottom-16 transform md:-left-10 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <svg
                      onClick={() => setCurrentImage(currentImage - 1)}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-14 w-14 cursor-pointer rounded-xl bg-[#222] text-white  duration-150 hover:bg-[#111] ${
                        currentImage === 0 ? "hidden" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  {isVideo ? (
                    <video
                      className="rounded-xl"
                      controls
                      autoPlay
                      loop
                      src={apart.images[currentImage]}
                    />
                  ) : (
                    <img
                      src={apart.images[currentImage]}
                      alt={apart.title}
                      className="max-h-[900px] w-full rounded-md object-cover"
                    />
                  )}
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="absolute right-3 top-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 cursor-pointer text-white duration-150 hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button className="absolute -bottom-16 right-2 transform md:-right-24 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <svg
                      onClick={() => setCurrentImage(currentImage + 1)}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-14 w-14 cursor-pointer rounded-xl bg-[#222] text-white  duration-150 hover:bg-[#111] ${
                        currentImage === apart.images.length - 1 ? "hidden" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </Layout>
    </>
  );
}
export default Index;

export const getStaticProps = (context) => {
  const slug = context.params?.slug;
  const apartsIsValid = aparts.find((apart) => apart.slug === slug);

  if (!apartsIsValid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      apart: apartsIsValid,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: "apart-1",
        },
      },
      {
        params: {
          slug: "apart-2",
        },
      },
      {
        params: {
          slug: "apart-3",
        },
      },
    ],
    fallback: "blocking",
  };
};
