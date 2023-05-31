import { type NextPage } from "next";
import Head from "next/head";

import Hero from "@/components/Sections/Hero";
import ApartCard from "@/components/Card/ApartCard";
import Layout from "@/components/Layout";

import { aparts } from "@/utils/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mahir Apart - Avşa Adası</title>
        <meta name="title" content="Mahir Apart - Avşa Adası" />
        <meta
          name="description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 50 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name="keywords"
          content="avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="author" content="Mahir Apart" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahirapart.com/" />
        <meta property="og:title" content="Mahir Apart - Avşa Adası" />
        <meta
          property="og:description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 50 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          property="og:image"
          content="https://resimler.balnet.net/Konu/avsa/avsa2020/avsa-halk-plaji-1.JPG"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mahirapart.com/" />
        <meta property="twitter:title" content="Mahir Apart - Avşa Adası" />
        <meta
          property="twitter:description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 50 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          property="twitter:image"
          content="https://resimler.balnet.net/Konu/avsa/avsa2020/avsa-halk-plaji-1.JPG"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <section className="container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1">
          <div
            id="aparts_section"
            className="flex flex-col flex-wrap items-center justify-center gap-10 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:flex-row md:justify-between lg:gap-0"
          >
            {aparts.map((apart) => {
              return <ApartCard key={apart.id} {...apart} />;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
