import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { RecoilRoot } from "recoil";
function App() {

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/blog/:id" element={<Blog />}/>
          <Route path="/blogs" element={<Blogs />}/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
