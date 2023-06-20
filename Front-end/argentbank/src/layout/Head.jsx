// react-router-dom
import { Link } from "react-router-dom";
// asset
import logoArgentBank from "../assets/argentBankLogo.png";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//redux
import { useSelector } from "react-redux";
import { setLoggedIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

// cookies
import Cookies from "js-cookie";

const Head = () => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  const userProfile = useSelector((state) => state.userProfile);

  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setLoggedIn(false));
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
        <div className="mr-2 flex items-center gap-1.5">
          {loggedIn ? (
            <div>
              <Link
                to="/users"
                className="mr-4 whitespace-nowrap font-semibold hover:underline"
              >
                <FontAwesomeIcon icon={faCircleUser} className="mr-2" />{" "}
                {userProfile && userProfile.firstName}
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="mr-2 whitespace-nowrap font-semibold hover:underline"
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-2"
                />
                Sign Out
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              className="mr-2 whitespace-nowrap font-semibold hover:underline"
            >
              <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Head;
