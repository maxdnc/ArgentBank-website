const Users = () => {
  return (
    <div className=" bg-tertiary py-8">
      <section className="flex flex-col items-center justify-center ">
        <h2 className="text-center text-4xl text-[2em] font-semibold text-white">
          Welcome back
        </h2>
        <p className="text-center text-[2em] font-semibold text-white">
          Tony Jarvis!
        </p>
        <button className=" mt-4 border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[10px] text-sm font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800">
          Edit Name
        </button>
      </section>

      <section className="mt-8 flex flex-col items-center justify-center gap-8">
        <div className="flex w-[80%] flex-col gap-3 bg-white p-[1.5rem]">
          <div>
            <h3 className="text-base ">Argent Bank Checking (x8349)</h3>
            <p className=" text-[2.5rem] font-bold leading-[3.2rem] ">
              $2,082.79
            </p>
            <p className="font-light">Available Balance</p>
          </div>
          <div>
            <button className=" w-full border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[8px] text-[1.1rem] font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800">
              View Transactions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Users;
