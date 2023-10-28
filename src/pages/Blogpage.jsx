import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';

const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className='blog'>
            <h1>Our Posts</h1>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <div className='posts'>
                <Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>
                {
                    // <div className='posts'>
                        posts.filter(
                            post => post.title.includes(postQuery) && post.id >= startsFrom
                        ).map(post => (
                            <Link className='post' key={post.id} to={`/posts/${post.id}`}>
                                <li>{post.title}</li>
                            </Link>
                        ))
                    // </div>
            }
            </div>
            
        </div>
    )
}

export {Blogpage}
