import Layout from '@/components/Layout';

function Index() {
  return (
    <Layout>
      <div className='container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1'>
        <div className='flex flex-col justify-between gap-10 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:flex-row'>
          {/* Contact Page, Including map and address */}
          <div className='flex md:flex-row flex-col justify-center gap-10 text-zinc-900'>
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
            <div className='relative w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3033.351023618179!2d27.496068815398726!3d40.511731779354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMwJzQyLjIiTiAyN8KwMjknNTMuNyJF!5e0!3m2!1str!2str!4v1685181746791!5m2!1str!2str'
                className='h-[500px] w-full rounded-md'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>

            {/* Address */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Index;
