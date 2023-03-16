import React, { useState, useEffect } from "react";

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
        <span
          class="material-symbols-outlined scrollButton-position scrollButton-style"
          onClick={goToTop}
        >
          arrow_drop_up
        </span>
      )}
    </div>
  );
};
export default ScrollToTop;
