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
      data-oid="5isymsi"
    >
      <div className="text-center" data-oid=".j_r4u7">
        <h1 className="text-4xl font-bold mb-4" data-oid="3-a6zpe">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-oid="vv0y_ng">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          data-oid="riy6mvf"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
