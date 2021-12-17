import { useState } from "react"
import axios from 'axios'
import '../App.css';

const AddDrinkView = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const [drink, setDrink] = useState({
    user_id: '61b7a489c9b3373811cc396c',
    name:"",
    image:"",
    mixers:[],
    liquors:[],
    garnishes:[],
    steps:[]

  })

  // useEffect( => getDringById )

  const onHandleChange = (event) => {
      setDrink({
        ...drink,
        [event.target.name]: event.target.value,
      });
      console.log(drink)
  }

  const onCreate = async (event) => {
    event.preventDefault();
    let data = {
      ...drink,
      garnishes: drink.garnishes.split(","),
      liquors: drink.liquors.split(","),
      steps: drink.steps.split(","),
      mixers: drink.steps.split(",")
    }
    await axios.post(`${apiURL}/drinks/drink`, data)
    alert("Drink created")
    setDrink({
      user_id: '61b7a489c9b3373811cc396c',
    name:"",
    image:"",
    mixers:[],
    liquors:[],
    garnishes:[],
    steps:[]
    })
  }
  

  return (
    <div className="container">
    <form className="form mt-5">
      <h2>Add Drink</h2>
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
        onClick={onCreate} 
        className="form-control btn btn-success">
        Create
      </button>
    </form>
    </div>
  )

}

export default AddDrinkView