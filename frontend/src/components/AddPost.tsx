import { useState } from "react";


interface Props {
    addPost: () => void; 
}


function AddPost({addPost}: Props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        setTitle('');
        setBody('');
    };

    return <form onSubmit={handleSubmit}>
        <h2>Add new post</h2>
        <div className="input-container">
            <label htmlFor="title">Title</label>
            <input>
                name=
            </input>
        </div>

    </form>

}
export default AddPost;