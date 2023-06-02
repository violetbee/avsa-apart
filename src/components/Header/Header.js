import Link from 'next/link';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=' flex items-center justify-between p-4 px-1 md:px-4 '>
      <Link href='/' className='flex items-center gap-1'>
        <h1 className='flex h-14 w-28 items-center justify-center bg-[#21A179] pb-1 text-4xl font-bold tracking-widest text-white'>
          Mahir
        </h1>
        <p className='text-4xl font-bold text-[#282828]'>Apart</p>
      </Link>
      {/* Desktop Menu */}
      <div className='hidden rounded-md bg-white p-[2px] md:block'>
        <div className='flex items-center gap-2 divide-x-[1px] divide-black/10 rounded-md border-[1px] border-dashed border-black/20 '>
          <div className='flex items-center gap-2 px-1 py-3 md:p-3'>
            <span className='text-sm md:text-2xl'>
              <BsFillTelephoneFill color='#282828' />
            </span>
            <Link
              href='tel:05366983453'
              target='_blank'
              className='text-sm font-bold tracking-wider text-[#282828] md:text-lg'
            >
              +90 (536) 698 34 53
            </Link>
          </div>
          {/* Çalışma Saatleri */}
          <div className='flex flex-col items-center gap-2 p-3'>
            <span className='flex items-center gap-2 text-lg font-bold tracking-wider'>
              <span className='text-2xl'>
                <AiFillClockCircle color='#282828' />
              </span>
              <span className='text-[#282828]'>Çalışma Saatleri:</span>
              <span className='text-green-600 underline underline-offset-2'>
                24 Saat Açık
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className='flex items-center md:hidden'>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='flex h-10 w-10 items-center justify-center rounded-md bg-[#21A179] text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 transform duration-150 hover:scale-110'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h7'
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? 'w-full' : 'w-0'
        } fixed left-0 top-0 h-screen overflow-hidden bg-white duration-300 md:hidden`}
      >
        <div className='relative flex h-full flex-col'>
          <button className='absolute right-1 top-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#21A179] text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 transform duration-150 hover:scale-110'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div className='flex flex-1 flex-col items-center justify-center gap-10'>
            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='/'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Ana Sayfa
            </Link>
            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='/#aparts_section'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Apartlar
            </Link>
            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='/avsa-adasi'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Avşa Adası
            </Link>
            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='/galeri'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Galeri
            </Link>
            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='/nasil-gidilir'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Nasıl Gidilir
            </Link>

            <Link
              className='text-4xl font-bold tracking-wider text-[#282828]'
              href='#'
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              İletişim
            </Link>
          </div>
          <div className='flex h-16 items-center justify-between gap-2 divide-x-[1px] divide-black/10 rounded-md border-[1px] border-dashed border-black/20 '>
            <div className='flex flex-shrink-0 items-center gap-2 px-1 py-3'>
              <span className='text-sm '>
                <BsFillTelephoneFill color='#282828' />
              </span>
              <span className='text-sm font-bold tracking-wider text-[#282828] '>
                +90 (536) 698 34 53
              </span>
            </div>
            {/* Çalışma Saatleri */}
            <div className='flex flex-col items-center gap-2 p-3'>
              <span className='flex items-center gap-2 text-lg font-bold tracking-wider'>
                <span className='text-2xl'>
                  <AiFillClockCircle color='#282828' />
                </span>
                <span className="text-[#282828] sm:after:content-['Çalışma_Saatleri:']"></span>
                <span className='text-sm text-green-600 underline underline-offset-2'>
                  24 Saat Açık
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
