import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminLinks from "./components/userlinkscomponent/adminlinks/AdminLinks";
import UserLinks from "./components/userlinkscomponent/userslinks/UserLinks";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route exact path="*" element={<AdminLinks />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="user/*" element={<UserLinks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
