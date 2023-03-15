import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "../index.css";

const ScrollToTop = () => {
  const [toTopBtn, setToTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setToTopBtn(true);
      } else {
        setToTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollButton">
      {toTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};
export default ScrollToTop;
