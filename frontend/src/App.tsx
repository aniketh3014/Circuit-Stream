import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Create } from "./pages/Create"
import { RecoilRoot } from "recoil";
import { ProtectedRoute } from "./components/ProtectedRoutes";
function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
            <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
            <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
</RecoilRoot>
  );
}

export default App
