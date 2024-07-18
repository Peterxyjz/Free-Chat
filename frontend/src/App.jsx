import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={ authUser ? <Navigate to='/'/> : <Login /> } />
        <Route path="/register" element={authUser ? <Navigate to='/'/> : <Register />} />
      </Routes>
      <Toaster reverseOrder={false} />
    </div>
  );
}

export default App;
