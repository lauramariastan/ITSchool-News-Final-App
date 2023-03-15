import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "./NewsCard";

export const NewsCardList = (props) => {
  const { newsList } = props;

  return (
    <Container>
      <Row>
        {newsList.map((newsItem, index) => (
          <Col key={newsItem.id} xs={12} md={6} lg={4} className="mb-4">
            <NewsCard newsItem={newsItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCardList;
