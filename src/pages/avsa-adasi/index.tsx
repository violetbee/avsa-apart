/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";

function index() {
  return (
    <Layout>
      <div className="container mx-auto mt-3 max-w-[1300px] rounded-md bg-white p-1">
        {/* Avşa Adasının Tanıtım Sayfası */}
        <div className="flex flex-col gap-5 rounded-md border-[2px] border-dashed border-black/10 px-10 py-6 md:justify-between">
          <h1 className="text-4xl font-bold">Avşa Adası</h1>
          <div className="flex flex-col gap-5 md:flex-row">
            <p className="text-lg font-medium">
              Avşa Adası, Marmara Denizi'nin güneydoğusunda, Tekirdağ iline
              bağlı bir adadır. İstanbul'a 177, Tekirdağ'a ise 52 km uzaklıkta
              olan Avşa Adası, Marmara Denizi'nin en büyük 4. adasıdır.
              Yüzölçümü 14,6 km² olan Avşa Adası, 8 km uzunluğunda ve 3 km
              genişliğindedir. 1996 yılında belediyelik olan Avşa Adası, 2014
              yılında Tekirdağ Büyükşehir Belediyesi'ne bağlanmıştır. Tekirdağ'a
              bağlı Marmara Ereğlisi ilçesinin 9 km güneyinde yer alan Avşa
              Adası, Marmara Denizi'nin en büyük 4. adasıdır.
            </p>
            <img
              src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1494000/avsa-adasi-1494682.jpg"
              alt="Avşa Adası"
              className="h-[500px] w-[500px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default index;
