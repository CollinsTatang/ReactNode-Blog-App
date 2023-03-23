import {React,  useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { blogList } from '../config/Api';

const HomePage = ({data}) => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  // Search for blog by category
  const handleSearchResults = () => {
   //handle search inputs
  };
  // Clear search and show all blogs
  const handleClearSearch = () => {
    blogList().then((res) => {
      setBlogs(res);
    })
    setSearchKey("");
  };

  // function to get selected blog content
 const BlogContent = (id) => {
  data(id);
}
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content = {BlogContent}/>}
    </div>
  );
};
export default HomePage;