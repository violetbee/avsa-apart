function Hero() {
  return (
    <section className="container mx-auto flex max-w-[1330px] md:-mt-5">
      <div className="relative w-full">
        <img
          src="https://resimler.balnet.net/Konu/avsa/avsa2020/avsa-halk-plaji-1.JPG"
          alt=""
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-2">
          <h1 className="text-5xl font-bold tracking-wide text-white md:text-6xl">
            Avşa Adası Uygun Apartlar
          </h1>
        </div>
        <button className="absolute bottom-2 right-2 bg-[#21A179] px-2 py-1 font-medium tracking-widest text-white">
          Buraya Tıkla ve Hemen Rezervasyon Oluştur!
        </button>
      </div>
    </section>
  );
}
export default Hero;
