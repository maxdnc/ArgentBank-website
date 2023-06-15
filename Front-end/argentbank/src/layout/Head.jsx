import { Link } from "react-router-dom";

const Head = () => {
  return (
    <header className="bg-gray-800">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div className="flex items-center">
          {/* Insérez ici votre code pour le logo */}
          <Link to="/" className="text-xl font-bold text-white">
            Logo
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* Insérez ici vos liens de navigation */}
          <Link to="/signin" className="text-white hover:text-gray-300">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Head;
