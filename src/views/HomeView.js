import DrinkCard from "../components/DrinkCard";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeView = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getDrinks();
  }, []);

  async function getDrinks() {
    const response = await axios.get(`${apiURL}/drinks`);
    setDrinks(response.data);
  }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>
      <div className="container">
        <div className="row">
          {drinks.map((drink) => (
            <div className="my-4 col-lg-4 col-md-6 col-sm-12">
              <DrinkCard obj={drink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
