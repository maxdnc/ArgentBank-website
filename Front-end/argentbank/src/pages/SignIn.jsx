// import font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import react-router-dom
import { useNavigate } from "react-router-dom";
// import react
import { useState } from "react";
// import redux RTK Query
import { useGetTokenMutation } from "../features/api/apiSlice";
// cookies
import Cookies from "js-cookie";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shakingAnimation, setShakingAnimation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // call api
  const [getToken, { isLoading, isError }] = useGetTokenMutation();

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    getToken({ email, password })
      .unwrap() // Récupère le résultat du token de la promesse
      .then((data) => {
        const token = data.body.token;
        Cookies.set("token", token);
        navigate("/users");
        setErrorMessage("");
      })
      .catch((error) => {
        setShakingAnimation(true);
        setTimeout(() => {
          setShakingAnimation(false);
        }, 500);
        setErrorMessage(error.data.message);
      });
  };

  // handle input

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex min-h-[80vh] flex-1 flex-col items-center bg-tertiary ">
      <section
        className={`mt-12 box-border flex max-w-[300px]  flex-col items-center gap-4 bg-white p-8 ${
          shakingAnimation ? "animate-errorShaking" : ""
        } `}
      >
        <FontAwesomeIcon icon={faCircleUser} />
        <h2 className="text-[1.5em] font-bold">Sign In</h2>
        <p className="text-center text-[0.9rem] font-light text-red-500">
          {isError && errorMessage}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`font-bold ${isError ? "text-red-400" : ""}`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem] ${
                isError ? "border-red-400 " : ""
              }`}
              onChange={handleEmailInput}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`font-bold ${isError ? "text-red-400" : ""}`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem] ${
                isError ? "border-red-400 " : ""
              }`}
              onChange={handlePasswordInput}
              value={password}
              required
            />
          </div>
          <div>
            <input type="checkbox" id="remember-me" />
            <label className="ml-2" htmlFor="remember-me">
              Remember me
            </label>
          </div>

          <button className="mt-4 w-full border-secondary bg-secondary p-[8px] text-[1.1rem] font-semibold text-white underline hover:bg-secondary/80">
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
