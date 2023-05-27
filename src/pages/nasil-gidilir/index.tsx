import Layout from "@/components/Layout";

function index() {
  return (
    <Layout>
      <div className="container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1">
        {/* Nasil Gidilir Sayfası, İçerisinde iframe olarak apart'ın konumunu göstereceğim. */}
        <div className="flex flex-col gap-5 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:justify-between">
          <h1 className="text-4xl font-bold">Nasıl Gidilir?</h1>
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">
              Adanın merkezinde bulunan iskeledeki teknelerle ulaşım
              sağlanmaktadır. İstanbul’dan Avşa Adası’na ulaşım için Yenikapı –
              Avşa Adası seferlerini kullanabilirsiniz. İstanbul’dan Avşa
              Adası’na ulaşım için Yenikapı – Avşa Adası seferlerini
              kullanabilirsiniz.
            </p>
            <p>
              Tekirdağ iskelesi üzerinden de her gün Avşa Adası’na ulaşım
              sağlayabilirsiniz.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3033.351023618179!2d27.496068815398726!3d40.511731779354214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMwJzQyLjIiTiAyN8KwMjknNTMuNyJF!5e0!3m2!1str!2str!4v1685181746791!5m2!1str!2str"
              className="h-[500px] w-full rounded-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default index;
