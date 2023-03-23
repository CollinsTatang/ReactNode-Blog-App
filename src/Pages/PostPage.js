import {React} from 'react';
import '../index.css';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import { Link } from 'react-router-dom';

const PostPage = () => {
    return(
        <div>
             <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
        </div>
    )
}
export default PostPage