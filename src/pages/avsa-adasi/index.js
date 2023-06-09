/* eslint-disable react/no-unescaped-entities */
import Layout from '../../components/Layout';
import Head from 'next/head';

function index() {
  return (
    <>
      <Head>
        <title>Avşa Adası hakkında - Mahir Apart</title>
        <meta
          name='description'
          content="Avşa Adası'nda bulunan Mahir Apart, denize 40 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name='keywords'
          content='avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <Layout>
        <div className='container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1'>
          {/* Avşa Adasının Tanıtım Sayfası */}
          <div className='flex flex-col gap-5 rounded-md border-[2px] border-dashed text-zinc-900 border-black/10 px-10 py-6 md:justify-between'>
            <h1 className='text-4xl font-bold'>Avşa Adası</h1>
            <div className='flex flex-col gap-5 md:flex-row'>
              <p className='text-lg font-medium'>
                Avşa, Marmara Denizi'nde ada. İstanbul'a deniz otobüsüyle 2,5
                Erdek'e ise gemiyle 1 saat 50 dakika uzaklıktadır. Balıkesir'in
                Marmara ilçesine bağlı bir yerleşim yeridir. İlçe merkezine 11
                km, il merkezine 155 km uzaklıktadır. Avşa adasının diğer adı
                "Türkeli" adasıdır. Fakat "Türkeli" ismi "Avşa" olarak
                değişmiştir.
              </p>
              <img
                src='/images/avsa-havadan.jpg'
                alt='Avşa Adası'
                className='h-[500px] w-[500px] rounded-md object-cover'
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default index;
