import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" flex min-h-[80vh] flex-col items-center justify-center gap-12 bg-tertiary p-12">
      <h2 className="text-9xl text-red-400">404</h2>
      <p className="text-2xl text-red-400">Error: Page not found</p>
      <Link to="/" className="text-2xl text-blue-500 hover:underline">
        Go back to home
      </Link>
    </div>
  );
};
export default Error;
