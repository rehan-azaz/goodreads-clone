import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./components/Landing";
import BookDetails from "./components/BookDetails";
import { isLoggedIn } from "./helpers/auth";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          exact
          path="/"
          element={
            isLoggedIn() ? (
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            ) : (
              <Landing />
            )
          }
        />
        <Route exact path="/landing" element={<Landing />} />

        <Route
          exact
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/book/:id"
          exact
          element={
            <PrivateRoute>
              <BookDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/logout"
          exact
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
