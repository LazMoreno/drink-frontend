import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DrinkDetailsView = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [drink, setDrink] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDrink();
  }, []);

  const getDrink = async () => {
    const response = await axios.get(`${apiURL}/drinks/drink/${id}`);
    setDrink(response.data);
  };

  return (
    <div className="container mt-4">
      <h2>{drink.name}</h2>
      <img style={{ height: 400 }} src={drink.image} alt="Mixed Drink" />
      <h3>Liquors</h3>
      <ul>
        {drink.liquors?.map((liq) => (
          <li>{liq}</li>
        ))}
      </ul>
      <br />
      <h3>Mixers</h3>
      <ul>
        {drink.mixers?.map((mix) => (
          <li>{mix}</li>
        ))}
      </ul>
      <br />
      <h3>Garnishes</h3>
      <ul>
        {drink.garnishes?.map((gar) => (
          <li>{gar}</li>
        ))}
      </ul>
      <br />
      <h3>Steps</h3>
      <ol>
        {drink.steps?.map((step) => (
          <li>{step}</li>
        ))}
      </ol>

      <Link to={`/editDrink/${drink._id}`}>View more</Link>
    </div>
  );
};

export default DrinkDetailsView;
