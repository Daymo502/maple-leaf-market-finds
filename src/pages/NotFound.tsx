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
      data-oid="nuk_eg_"
    >
      <div className="text-center" data-oid="6ymaxk9">
        <h1 className="text-4xl font-bold mb-4" data-oid="7y98nsg">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-oid="onsaya-">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          data-oid="77ux2.7"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
