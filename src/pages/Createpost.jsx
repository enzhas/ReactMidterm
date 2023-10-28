import { useNavigate } from 'react-router-dom'

const Createpost = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create a post</h1>
            <button onClick={() =>  navigate('/', {replace: true})}>Log Out</button>
        </div>
    )
}

export {Createpost}
