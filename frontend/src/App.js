import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./common/Layout";
import PrivateRoutes from "./helpers/PrivateRoutes";
import Home from "./components/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { isLoggedIn } from "./utils/auth";
import Landing from "./components/Landing";
import BooksListing from "./components/BooksListing";
import BookDetails from "./components/BookDetails";
import Footer from "./common/Footer";
import Header from "./common/Header";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const userLoggedIn = isLoggedIn();
  return (
    <div className="App">
    <>
      <Header />
      <BookDetails />
      <Footer />
    </>
      {/* <Routes>
        {userLoggedIn ? (
          !isLoginPage &&
          !isRegisterPage && (
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
            </Route>
          )
        ) : (
          <>
            <Route path="/" element={<Landing />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </div>
  );
}

export default App;
