import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlepage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [likeCount, setLikeCount] = useState(0);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);

    const handleLikeClick = () => setLikeCount(likeCount + 1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                    <p>{likeCount}</p>
                    <button onClick={handleLikeClick}>Like</button>
                </>
            )}
        </div>
    );
}

export { Singlepage };
