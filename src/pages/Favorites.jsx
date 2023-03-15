import { useContext } from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { FavoritesContext } from "../store/Favorites/context";

export const Favorites = () => {
  const { favoritesState } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="my-5">Your favorites news</h1>
        {favoritesState.news.length === 0 ? (
          <p>You do not have favorite news...</p>
        ) : (
          <NewsCardList newsList={favoritesState.news} />
        )}
      </Container>
    </Layout>
  );
};

export default Favorites;
