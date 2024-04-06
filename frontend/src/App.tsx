import { HashRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Create } from "./pages/Create"
import { RecoilRoot } from "recoil";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToBlogs() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/blogs');
  }, [navigate]);

  return null;
}
function App() {
  return (
    <RecoilRoot>
    <HashRouter>
        <Routes>
            <Route path="/" element={<RedirectToBlogs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
            <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
            <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
        </Routes>
    </HashRouter>
</RecoilRoot>
  );
}

export default App
