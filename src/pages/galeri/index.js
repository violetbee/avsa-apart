import { useEffect, useRef, useState } from 'react';
import { gallery } from '../../utils/data';
import Layout from '../../components/Layout';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';
import Head from 'next/head';

function Index() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 90 * currentImage;
    }
  }, [currentImage]);
  return (
    <>
      <Head>
        <title>Galeri - Mahir Apart</title>
        <meta
          name='description'
          content="Avşa Adası'nda bulunan Mahir Apart, denize 50 metre mesafede, 1+1 daireleri ile sizlere hizmet vermektedir."
        />
        <meta
          name='keywords'
          content='avşa adası, avşa, avşa mahir apart, avşa apart, avşa pansiyon, avşa adası apart, avşa adası pansiyon, avşa adası mahir apart, avşa adası mahir pansiyon, avşa adası mahir, tatil, kiralık, apart, avşa kiralık apart, yazlık, sezonluk'
        />
      </Head>

      <Layout>
        <div className='container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1'>
          <div className='flex flex-col justify-between gap-10 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:flex-row'>
            <div className='flex flex-col items-center justify-center'>
              <div className='relative w-full'>
                <img
                  src={gallery[currentImage]}
                  alt='Gallery'
                  className='max-h-[550px] min-h-[440px] w-full  rounded-md object-cover'
                />
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className='absolute bottom-2 right-2'
                >
                  <HiMagnifyingGlassPlus className='cursor-pointer text-4xl text-white duration-150 hover:scale-110' />
                </button>
              </div>
              <div className='relative mt-2'>
                <button className='absolute -left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  <svg
                    onClick={() => setCurrentImage(currentImage - 1)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-8 w-8 cursor-pointer text-gray-500 hover:text-gray-900 ${
                      currentImage === 0 ? 'hidden' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                  </svg>
                </button>
                <div
                  ref={scrollRef}
                  className='relative flex w-full items-center justify-between gap-2 overflow-x-hidden scroll-smooth'
                >
                  {gallery.map((image, index) => {
                    return (
                      <img
                        key={index}
                        className={`h-[100px] w-1/4 cursor-pointer rounded-md object-cover ${
                          currentImage === index
                            ? 'border-[2px] border-green-500'
                            : ''
                        }`}
                        src={image}
                        alt='Gallery'
                        onClick={() => setCurrentImage(index)}
                      />
                    );
                  })}
                </div>
                <button className='absolute -right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  <svg
                    onClick={() => setCurrentImage(currentImage + 1)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-8 w-8 cursor-pointer text-gray-500 hover:text-gray-900 ${
                      currentImage === gallery.length - 1 ? 'hidden' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M14 5l7 7m0 0l-7 7m7-7H3' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          // Full Screen Image
          isFullScreen && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70'>
              <div className='relative max-h-[600px] max-w-[600px] px-2 sm:max-h-[700px] sm:max-w-[700px] md:max-h-[800px] md:max-w-[800px] xl:max-h-[1100px] xl:max-w-[1100px]'>
                <button className='absolute -bottom-16 transform md:-left-10 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                  <svg
                    onClick={() => setCurrentImage(currentImage - 1)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-14 w-14 cursor-pointer rounded-xl bg-[#222] text-white  duration-150 hover:bg-[#111] ${
                      currentImage === 0 ? 'hidden' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                  </svg>
                </button>
                <img
                  src={gallery[currentImage]}
                  alt='gallery'
                  className='h-full w-full rounded-md object-cover'
                />
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className='absolute right-3 top-3'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 cursor-pointer text-white duration-150 hover:scale-110'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2.5'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
                <button className='absolute -bottom-16 right-2 transform md:-right-24 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
                  <svg
                    onClick={() => setCurrentImage(currentImage + 1)}
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-14 w-14 cursor-pointer rounded-xl bg-[#222] text-white  duration-150 hover:bg-[#111] ${
                      currentImage === gallery.length - 1 ? 'hidden' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M14 5l7 7m0 0l-7 7m7-7H3' />
                  </svg>
                </button>
              </div>
            </div>
          )
        }
      </Layout>
    </>
  );
}
export default Index;
