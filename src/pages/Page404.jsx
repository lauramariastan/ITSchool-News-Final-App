import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styles from "./Page404.module.css";

export const Page404 = () => {
  return (
    <div
      className={`${styles.page404} bg-primary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">Page not found!</p>
        <strong className={`${styles.error404}`}>404 :(</strong>
        <Link to="/" className="h4 text-center">
          Go back to the site to see other news!
        </Link>
      </Container>
    </div>
  );
};

export default Page404;
