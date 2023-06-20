// react-router-dom
import { Link } from "react-router-dom";
// asset
import logoArgentBank from "../assets/argentBankLogo.png";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

//redux
import { useSelector } from "react-redux";
import { setLoggedIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
// cookies
import Cookies from "js-cookie";

const Head = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setLoggedIn(false));
    console.log("logout");
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-[20px] py-[5px]">
        <div className="flex items-center">
          <Link to="/" className="">
            <h1>
              <img
                src={logoArgentBank}
                alt="logo Argent Bank"
                className="w-[200px] max-w-full"
              />
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-1.5">
          <FontAwesomeIcon icon={faCircleUser} />
          {loggedIn ? (
            <Link to="/" onClick={handleLogout}>
              Log Out
            </Link>
          ) : (
            <Link
              to="/signin"
              className="mr-2 whitespace-nowrap font-semibold hover:underline"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Head;
