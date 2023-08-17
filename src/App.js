import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./components/RecipeDetail";


function App() {
  
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/recipe/:id' element={<RecipeDetail/>} />
    </Routes>
  </BrowserRouter>    
    </>
  );
}

export default App;
