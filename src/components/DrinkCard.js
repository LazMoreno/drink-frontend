import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DrinkCard.css";

const DrinkCard = ({ obj }) => {
  return (
    <Card className="drinkCard" style={{ width: "18rem" }}>
      <img src={obj.image} alt="Mixed Drink" />
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>

        <Link className="btn btn-outline-primary" to={`/drink/${obj._id}`}>
          Drink Details
        </Link>
      </Card.Body>
    </Card>
  );
};
export default DrinkCard;
