import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    navigate("/users");
  };

  return (
    <div className="flex min-h-[80vh] flex-1 flex-col items-center bg-tertiary ">
      <section className=" mt-12 box-border flex max-w-[300px]  flex-col items-center gap-4 bg-white p-8">
        <FontAwesomeIcon icon={faCircleUser} />
        <h2 className="text-[1.5em] font-bold">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-bold" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem]"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem]"
            />
          </div>
          <div>
            <input type="checkbox" id="remember-me" />
            <label className="ml-2" htmlFor="remember-me">
              Remember me
            </label>
          </div>

          <button className="mt-4 w-full border-secondary bg-secondary p-[8px] text-[1.1rem] font-semibold text-white underline hover:bg-secondary/80">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};
export default SignIn;
