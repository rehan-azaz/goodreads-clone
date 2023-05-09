import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./components/Landing";
import BookDetails from "./components/BookDetails";
import { isLoggedIn } from "./helpers/auth";
import Logout from "./pages/Logout";
import PublicRoute from "./common/PublicRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            isLoggedIn() ? (
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            ) : (
              <PublicRoute>
                <Landing />
              </PublicRoute>
            )
          }
        />
        <Route
          exact
          path="/landing"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />

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
