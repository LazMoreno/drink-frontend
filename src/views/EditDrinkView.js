import { useEffect, useState } from "react"
import axios from 'axios'
import '../App.css';
import { useNavigate, useParams } from "react-router";

const EditDrinkView = () => {
  const navigate = useNavigate();
  const apiURL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [drink, setDrink] = useState({
    user_id: '61b7a489c9b3373811cc396c',
    name:"",
    image:"",
    mixers:[],
    liquors:[],
    garnishes:[],
    steps:[]

  })

  useEffect(() => {
     getDrink();
  }, [])

  const getDrink = async () => {
    const response = await axios.get(`${apiURL}/drinks/drink/${id}`);
    const { name, image, mixers, liquors, garnishes, steps} = response.data;
    setDrink({
      name: name,
      image: image,
      mixers: mixers.toString(),
      liquors: liquors.toString(),
      garnishes: garnishes.toString(),
      steps: steps.toString(),
    });
  };

  const onHandleChange = (event) => {
      setDrink({
        ...drink,
        [event.target.name]: event.target.value,
      });
      console.log(drink)
  }

  const onUpdate = async (event) => {
    event.preventDefault();
    let data = {
      ...drink,
      garnishes: drink.garnishes.split(","),
      liquors: drink.liquors.split(","),
      steps: drink.steps.split(","),
      mixers: drink.steps.split(",")
    }
    await axios.put(`${apiURL}/drinks/drink/${id}`, data)
    alert("Drink created")
    navigate("/")
  }

  const onDelete = async (event) => {
    event.preventDefault();
    let data = {
      ...drink,
      garnishes: drink.garnishes.split(","),
      liquors: drink.liquors.split(","),
      steps: drink.steps.split(","),
      mixers: drink.steps.split(",")
    }
    await axios.delete(`${apiURL}/drinks/drink/${id}`, data)
    alert("Drink deleted")
    navigate("/")
  }
  

  return (
    <div className="container">
    <form className="form mt-5">
      <h2>Edit Drink</h2>
      <label>Name</label>
      <input 
        className="form-control" 
        placeholder="name"
        name="name"
        value={drink.name}
        onChange={onHandleChange}

      />
      <label>Image</label>
      <input 
        className="form-control" 
        placeholder="image"
        name="image"
        value={drink.image}
        onChange={onHandleChange}

      />
      <label>Mixers (Separate by commas)</label>
      <textarea 
        className="form-control" 
        placeholder="mixers"
        name="mixers"
        value={drink.mixers}
        onChange={onHandleChange}

      />
      <label>Liquors (Separate by commas)</label>
      <textarea
        className="form-control" 
        placeholder="liquors"
        name="liquors"
        value={drink.liquors}
        onChange={onHandleChange}

      />
      <label>Garnishes (Separate by commas)</label>
      <textarea 
        className="form-control" 
        placeholder="garnishes"
        name="garnishes"
        value={drink.garnishes}
        onChange={onHandleChange}

      />
      <label>Steps (Separate by commas)</label>
      <textarea
        className="form-control" 
        placeholder="steps"
        name="steps"
        value={drink.steps}
        onChange={onHandleChange}

      />
      <button
        style={{margin: '10px 0 40px 0'}}
        onClick={onUpdate} 
        className="form-control btn btn-success">
        Edit Drink
      </button>
      <button
        style={{margin: '10px 0 40px 0'}}
        onClick={onDelete} 
        className="form-control btn btn-success">
        Delete Drink
      </button>
    </form>
    </div>
  )

}

export default EditDrinkView