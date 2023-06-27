// component
import TransactionItem from "../components/TransactionItem";
import ChangeUserName from "../components/ChangeUserName";
// router
import { useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
// react
import { useEffect } from "react";

const Users = () => {
  const userProfile = useSelector((state) => state.userProfile);
  const token = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return (
    <div className=" bg-tertiary py-8">
      <section className="flex flex-col items-center justify-center ">
        <h2 className="text-center text-4xl text-[2em] font-semibold text-white">
          Welcome back
        </h2>
        <p className="text-center text-[2em] font-semibold text-white">
          {userProfile.firstName} {userProfile.lastName} !
        </p>
        <ChangeUserName />
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
