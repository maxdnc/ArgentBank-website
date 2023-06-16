const Banner = ({ bannerImg, titleA, titleB, titleC, textA }) => {
  return (
    <div className="relative h-[300px] w-full">
      <img
        src={bannerImg}
        alt="banner"
        className="object-[0 -50px] h-full w-full object-cover"
      />
      <section className="absolute left-[50%] top-8 box-content flex max-w-[200px] translate-x-[-50%] items-center justify-center bg-white p-8">
        <div className="">
          <h2 className="font-bold">{titleA}</h2>
          <h2 className="font-bold">{titleB}</h2>
          <h2 className="font-bold">{titleC}</h2>
          <p className="mt-[1em] text-[0.9rem] font-light ">{textA}</p>
        </div>
      </section>
    </div>
  );
};
export default Banner;
