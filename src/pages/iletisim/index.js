import Layout from '@/components/Layout';
import { useState } from 'react';

function Index() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [senderMail, setSenderMail] = useState('');
  return (
    <Layout>
      <div className='container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1'>
        <div className='flex flex-col justify-between gap-10 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:flex-row'>
          {/* Contact Page, Including map and address */}
          <div className='flex md:flex-row flex-col justify-center w-full gap-10 text-zinc-900'>
            <div className='flex flex-col gap-5 mt-5'>
              <h1 className='text-4xl font-bold'>Adres</h1>
              <p className='text-lg font-medium'>
                Balıkesir/Marmara Avşa Adası Deniz Mahallesi Okullar
                Caddesi No:50 Daire 8
              </p>

              {/* Phone */}
              <h1 className='text-4xl font-bold'>Telefon</h1>
              <p className='text-lg font-medium'>
                <a href='tel:+905323456789'>+90 (536) 698 34 53</a>
              </p>
            </div>
            {/* Form area */}
            <div className='flex flex-col max-w-md gap-5 w-full'>
              <h1 className='text-4xl font-bold'>İletişim Formu</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  window.open(
                    `mailto:
                    mahirapartavsa@gmail.com
                      ?subject=${title}
                      &body=${body}
                      &sender=${senderMail}
                    `
                  );
                  // clear inputs
                  setSenderMail('');
                  setTitle('');
                  setBody('');
                }}
                className='flex flex-col gap-5 w-full'
              >
                <input
                  type='text'
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#031926]'
                  placeholder='Adınız'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type='email'
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#031926]'
                  placeholder='Gönderici mail örnek: ornek@mail.com'
                  value={senderMail}
                  onChange={(e) => setSenderMail(e.target.value)}
                />
                <textarea
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#031926]'
                  placeholder='Mesajınız'
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button
                  type='submit'
                  className='bg-[#031926] text-white font-semibold py-2 rounded-md'
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Index;
