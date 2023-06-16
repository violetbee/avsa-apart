import Head from 'next/head';
import Hero from '../components/Sections/Hero';
import ApartCard from '../components/Card/ApartCard';
import Layout from '../components/Layout';

import { aparts } from '../utils/data.js';

const Home = () => {
  return (
    <>
      <Head>
        <title>Mahir Apart - Avşa Adası</title>

        <meta
          name='description'
          content="Avşa Adası'nda bulunan Mahir Apart, denize 40 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name='keywords'
          content='avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk'
        />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Mahir Apart' />
      </Head>
      <Layout>
        <Hero />
        <div className='bg-white block md:hidden'>
          <p
            className='
            text-3xl
            font-bold
            tracking-wider
            text-center
            text-[#282828]
            py-4 px-3
        '
          >
            Daire Seçeneklerimiz İçin Aşağı Kaydırın
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline-block ml-1 
              animate-bounce
              transform duration-300 
              '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={5}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </p>
        </div>

        <section className='container mx-auto md:mt-3 max-w-[1300px] rounded-md bg-white p-1'>
          <div
            id='aparts_section'
            className='flex flex-col flex-wrap items-center justify-center gap-10 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:flex-row md:justify-between lg:gap-0'
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
