import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import PrivateRoute from "./Components/route/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentUser } from "./JS/actions/user";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import FindFood from "./Components/Find Food/FindFood";
import AboutUs from "./Components/About Us/AboutUs";
import Profile from "./Components/Profile/Profile";
import OrderList from "./Components/OrderList/OrderList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Main from "./Components/main/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/findfood"
          element={
            <PrivateRoute>
              <FindFood />
            </PrivateRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
