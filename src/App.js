import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";

function App() {

  const[getBlogContent, setGetBlogContent] = useState([])
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage data={getData}/>} />
        <Route path="/blog/:id" element={<PostPage data={getData}/>} />
      </Routes>
    </div>
  );
}

export default App;
