import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {

  const[getBlogContent, setGetBlogContent] = useState([])
  
  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage data={getData}/>} />
      </Routes>
    </div>
  );
}

export default App;
