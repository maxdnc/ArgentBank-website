const Banner = ({ bannerImg, titleA, titleB, titleC, textA }) => {
  return (
    <div className="relative h-[300px] w-full md:h-[400px]">
      <img
        src={bannerImg}
        alt="banner"
        className="h-full w-full object-cover "
      />
      <section className="absolute left-[50%] top-8 box-content flex w-[200px] translate-x-[-50%] items-center justify-center bg-white p-8 md:left-auto md:right-[75px]  md:top-[75px] md:w-[300px] md:translate-x-0">
        <div className="">
          <h2 className="font-bold md:text-2xl">{titleA}</h2>
          <h2 className="font-bold md:text-2xl">{titleB}</h2>
          <h2 className="font-bold md:text-2xl">{titleC}</h2>
          <p className="mt-[1em] text-[0.9rem] font-light md:text-xl ">
            {textA}
          </p>
        </div>
      </section>
    </div>
  );
};
export default Banner;
