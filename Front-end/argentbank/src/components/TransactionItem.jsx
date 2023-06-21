const TransactionItem = ({ operation, argent, balance }) => {
  const formattedNumber = argent.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="flex w-[80%] flex-col gap-3 bg-white p-[1.5rem]">
        <div>
          <h3 className="text-base">{operation}</h3>
          <p className=" text-[2.5rem] font-bold leading-[3.2rem] ">
            {formattedNumber}
          </p>
          <p className="font-light">{balance}</p>
        </div>
        <div>
          <button className=" w-full border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[8px] text-[1.1rem] font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800">
            View Transactions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionItem;
