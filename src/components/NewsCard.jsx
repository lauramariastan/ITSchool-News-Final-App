import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/Favorites/actions";
import { FavoritesContext } from "../store/Favorites/context";
import styles from "./NewsCard.module.css";

export const NewsCard = (props) => {
  const { newsItem } = props;
  const { id, image, title, description, hasDeleteButton } = newsItem;

  const { favoritesDispatch } = useContext(FavoritesContext);

  const handleRemoveFromFavorites = () => {
    const actionResult = removeFromFavorites(id);
    favoritesDispatch(actionResult);
  };

  console.log(styles);
  return (
    <Card className={"h-100 " + styles.newsCard}>
      <Link to={`/news/${id}`} className="text-dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasDeleteButton && (
        <Button variant="light" onClick={handleRemoveFromFavorites}>
          <span className="material-icons text dark">close</span>
        </Button>
      )}
    </Card>
  );
};

export default NewsCard;
