import React from "react";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <p className="text-light text-center m-0 py-3">
          IT School Romania © 2023. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
