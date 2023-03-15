import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adapters";
import { NewsCardList } from "../components/NewsCardList";

export const Home = () => {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 3);
  const gamesNewsEndpoint = getNewsCategoriesEndpoint("games", 1, 3);
  const travelNewsEndpoint = getNewsCategoriesEndpoint("travel", 1, 3);
  const booksNewsEndpoint = getNewsCategoriesEndpoint("books", 1, 3);
  const filmNewsEndpoint = getNewsCategoriesEndpoint("film", 1, 3);
  const scienceNewsEndpoint = getNewsCategoriesEndpoint("science", 1, 3);

  let technologyData = useFetch(technologyNewsEndpoint);
  let gamesData = useFetch(gamesNewsEndpoint);
  let travelData = useFetch(travelNewsEndpoint);
  let booksData = useFetch(booksNewsEndpoint);
  let filmData = useFetch(filmNewsEndpoint);
  let scienceData = useFetch(scienceNewsEndpoint);

  const homeTechnologyData = getNewsList(technologyData);
  const homeGamesData = getNewsList(gamesData);
  const homeTravelData = getNewsList(travelData);
  const homeBooksData = getNewsList(booksData);
  const homeFilmData = getNewsList(filmData);
  const homeScienceData = getNewsList(scienceData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={homeTechnologyData} />
          <p>
            See more news in the{" "}
            <Link to="/category/technology" className="text-success">
              Tech
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section className="games my-5">
        <Container>
          <h1 className="mb-5 pt-3">Games</h1>
          <NewsCardList newsList={homeGamesData} />
          <p>
            See more news in the{" "}
            <Link to="/category/games" className="text-success">
              Games
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Travel</h1>
          <NewsCardList newsList={homeTravelData} />
          <p>
            See more news in the{" "}
            <Link to="/category/travel" className="text-success">
              Travel
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>
      <section className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Books</h1>
          <NewsCardList newsList={homeBooksData} />
          <p>
            See more news in the{" "}
            <Link to="/category/books" className="text-success">
              Books
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Film</h1>
          <NewsCardList newsList={homeFilmData} />
          <p>
            See more news in the{" "}
            <Link to="/category/film" className="text-success">
              Film
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Science</h1>
          <NewsCardList newsList={homeScienceData} />
          <p>
            See more news in the{" "}
            <Link to="/category/science" className="text-success">
              Science
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorites</h1>
          <p>Do you want to save your favorite news to read them later?</p>
          <p>
            In each news you will find a button so you can add it to your
            favorites.
          </p>
          <p className="pb-3">
            Visit the{" "}
            <Link to="/favorites" className="text-success">
              Favorites
            </Link>{" "}
            section to see the added news.
          </p>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
