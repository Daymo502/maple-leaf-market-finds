import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      data-oid="2uad886"
    >
      <div className="text-center" data-oid="dt92aye">
        <h1 className="text-4xl font-bold mb-4" data-oid="cnom68:">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-oid="wgh77y:">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          data-oid="1zspasd"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
