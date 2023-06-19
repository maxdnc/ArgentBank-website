// react-router-dom
import { Link } from "react-router-dom";
// asset
import logoArgentBank from "../assets/argentBankLogo.png";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// react
import { useEffect, useState } from "react";

// cookies
import Cookies from "js-cookie";

const Head = () => {
  const token = Cookies.get("token");

  const [isLogged, setIsLogged] = useState(token ? true : false);

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLogged(false);
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
          {isLogged ? (
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
