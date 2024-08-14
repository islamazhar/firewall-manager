interface Props {
    id: BigInt;
    title : string;
    body: string;
    onDeleteButtonSelect: ((BigInt)) => void;
}

function Post({id, title, body, onDeleteButtonSelect}: Props) {
    return (
        <div className="post-card">
            <h2 className="post-title">{title}</h2>
            <p className="post-body">{body}</p>
            <button className="btn-delete"
            onClick={() => onDeleteButtonSelect(id)}>Delete</button>
        </div>
    )
}

export default Post; 