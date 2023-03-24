import {React} from 'react';
import '../index.css';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import { Link } from 'react-router-dom';

const PostPage = ({content}) => {
    return(
        <div>
             <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {content ? (
                <div className='blog-wrap'>
                <header>
                    <p className='blog-date'>Published {content.created}</p>
                    <h1>{content.title}</h1>
                    <div className='blog-subCategory'>
                    
                        <div>
                        <Chip label={content.tags[0].name} />
                        </div>
                    
                    </div>
                </header>
                <img src={content.featured_image} alt='cover' />
                <div className='blog-content' dangerouslySetInnerHTML={{__html: content.body}}></div>
                </div>
            ) : (
                <EmptyList />
            )}
        </div>
    )
}
export default PostPage