import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import AboutMe from "./components/AboutMe/AboutMe";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import useServices from "./hooks/useServices";
import Thanks from "./components/ThanksForBooking/Thanks";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [services] = useServices();
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails services={services}></ServiceDetails>}
        ></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/thanks_for_booking"
          element={
            <RequireAuth>
              <Thanks></Thanks>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
