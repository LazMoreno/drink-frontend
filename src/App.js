import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddDrinkView from "./views/AddDrinkView";

import DrinkDetailsView from "./views/DrinkDetailsView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";
import UpdateDrinkView from "./views/UpdateDrinkView";
import EditDrinkView from "./views/EditDrinkView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/editDrink/:id" element={<EditDrinkView />} />
        <Route path="/updateDrink" element={<UpdateDrinkView />} />
        <Route path="/addDrink" element={<AddDrinkView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/" element={<HomeView />} />
        <Route path="/drink/:id" element={<DrinkDetailsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
