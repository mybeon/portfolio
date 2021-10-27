import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import "../scss/main.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <Seo title="404 - Page not found" />
      <h1>404 !</h1>
      <p>
        The page you are looking for might have been removed, had it's name
        changed or temporarily unavailable
      </p>

      <Link to="/">go home</Link>
    </main>
  );
};

export default NotFoundPage;
