import { useState } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img
              src="https://itschool.ro/images/logo-itschool-dark.svg"
              alt="itschool logo"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/technology"
                  className="p-3 text-uppercase text-light"
                >
                  Tech
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/games"
                  className="p-3 text-uppercase text-light"
                >
                  Games
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/travel"
                  className="p-3 text-uppercase text-light"
                >
                  Travel
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/books"
                  className="p-3 text-uppercase text-light"
                >
                  Books
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/film"
                  className="p-3 text-uppercase text-light"
                >
                  Film
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/science"
                  className="p-3 text-uppercase text-light"
                >
                  Science
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link to="/favorites" className="p-3 text-uppercase text-light">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;