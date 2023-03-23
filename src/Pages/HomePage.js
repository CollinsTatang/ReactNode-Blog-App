import { useState } from "react"
import BlogList from "../components/BlogList";
import EmptyList from "../components/EmptyList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HomePage = ({data}) => {
    const [blogs, setBlogs] = useState('');
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = () => {

    }

    const handleClearSearch = () => {
        BlogList().then((res) => {
            setBlogs(res);
        })
        setSearchKey("");
    }

    const BlogContent = () => {
        data(id);
    }
    return(
        <div>
            <Header />
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
             />
             {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content = {BlogContent}/>}
        </div>
    )
}
export default HomePage