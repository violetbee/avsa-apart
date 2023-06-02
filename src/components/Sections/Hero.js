import Link from 'next/link';

function Hero() {
  return (
    <section className='container mx-auto flex max-w-[1330px] md:-mt-5'>
      <div className='relative w-full'>
        <img
          src='/images/avsa.jpg'
          alt=''
          className='h-[300px] w-full object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-2' />

        <Link
          href='tel:05366983453'
          target='_blank'
          className='absolute bottom-2 right-2 bg-[#21A179] px-2 py-1 font-medium tracking-widest text-white'
        >
          Rezervasyon Oluşturmak İçin Hemen Ara
        </Link>
      </div>
    </section>
  );
}
export default Hero;
