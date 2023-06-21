// component
import TransactionItem from "../components/TransactionItem";
// redux
import { useSelector } from "react-redux";

const Users = () => {
  const userProfile = useSelector((state) => state.userProfile);

  return (
    <div className=" bg-tertiary py-8">
      <section className="flex flex-col items-center justify-center ">
        <h2 className="text-center text-4xl text-[2em] font-semibold text-white">
          Welcome back
        </h2>
        <p className="text-center text-[2em] font-semibold text-white">
          {userProfile.firstName} {userProfile.lastName} !
        </p>
        <button className="mt-4 border-2 border-b-green-800 border-l-secondary border-r-green-800 border-t-secondary bg-secondary p-[10px] text-sm font-bold text-white duration-150 ease-in-out hover:border-b-secondary hover:border-l-green-800 hover:border-r-secondary hover:border-t-green-800">
          Edit Name
        </button>
      </section>
      <TransactionItem
        operation="Argent Bank Checking (x8349)"
        argent={2082.79}
        balance="Available Balance"
      />
      <TransactionItem
        operation="Argent Bank Savings (x6712)"
        argent={10928.42}
        balance="Available Balance"
      />
      <TransactionItem
        operation="Argent Bank Checking (x8349)"
        argent={184.3}
        balance="Current Balance
        "
      />
    </div>
  );
};
export default Users;
