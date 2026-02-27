import React, { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/AuthPages/Signup.jsx";
import Login from "./pages/AuthPages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
import Mynotes from "./pages/Mynotes.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteModel from "./pages/NoteModel.jsx";
import Note from "./Components/savenote/note.jsx";
import Savenotes from "./pages/savenotes.jsx";
import Profile from "./pages/Profile.jsx";
import AuthRoute from "./routes/authroute.jsx";
import PrivateRoute from "./routes/privateroute.jsx";
// import { verify } from "./Service/Auth.api.js";
import { useNavigate } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  const navigate = useNavigate();
const [loading, setLoading] = useState(true); 
// useEffect(() => {
//   async function checkToken() {
//     try {
//       await verify(); // Access token valid check
//     } catch (err) {
//       localStorage.removeItem("Token"); // Invalid token → remove
//     } finally {
//       setLoading(false); // Stop loading spinner
//     }
//   }
//   checkToken();
// }, []);

  // if (loading) return <div>Loading...</div>; 
  return (
   <div>
  
<Routes>
  <Route path="/" element={<Home />} />

  {/* 🔐 Auth Routes (Login/Signup) */}
  <Route
    path="/login"
    element={
      <AuthRoute>
        <Login />
      </AuthRoute>
    }
  />
  <Route
    path="/signup"
    element={
      <AuthRoute>
        <Signup />
      </AuthRoute>
    }
  />

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  {/* 🔒 Protected Dashboard */}
  <Route
    path="/dashboard"
    element={
      // <PrivateRoute>
        <Dashboard />
      // </PrivateRoute>
    }
  >
    <Route index element={<DashboardHome />} />
    <Route path="mynotes" element={<PrivateRoute><Mynotes /></PrivateRoute>} />
    <Route path="savenote" element={<PrivateRoute><Savenotes /></PrivateRoute>} />
    <Route path="notemodel/:id" element={<PrivateRoute><NoteModel /></PrivateRoute>} />
    <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
  </Route>
</Routes>

            <ToastContainer />

    </div>
  );
}

export default App;
