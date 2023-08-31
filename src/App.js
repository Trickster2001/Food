import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./components/RecipeDetail";
import Searched from "./pages/Searched";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/recipe/:id' element={<RecipeDetail/>} />
      <Route path='/searched/:searchTerm' element={<Searched/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
    </Routes>    
    </AuthContextProvider>
    </>
  );
}

export default App;
