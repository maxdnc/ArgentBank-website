import { Link } from "react-router-dom";
import logoArgentBank from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
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
          <Link
            to="/signin"
            className="mr-2 whitespace-nowrap font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Head;
