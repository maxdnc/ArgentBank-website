const FeatureItem = ({ iconFeature, titleFeature, descriptionFeature }) => {
  return (
    <article className="flex flex-1 flex-col items-center p-10">
      <img
        src={iconFeature}
        alt="Chat Icon"
        className="box-content w-[100px] rounded-full border-[10px] border-secondary p-4"
      />
      <h3 className="mb-2 mt-4 text-center text-xl font-bold">
        {titleFeature}
      </h3>
      <p className="mt my-[1em] text-center font-light">{descriptionFeature}</p>
    </article>
  );
};
export default FeatureItem;
