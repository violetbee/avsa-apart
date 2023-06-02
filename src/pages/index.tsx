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

        <meta
          name="description"
          content="Avşa Adası'nda bulunan Mahir Apart, denize 50 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name="keywords"
          content="avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mahir Apart" />
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
