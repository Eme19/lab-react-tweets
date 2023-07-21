function User(props){

    return (
        <span className="user">
        <span className="name">{props.name}</span>
        <span className="handle">{props.handle}</span>
        <span className="timestamp">{props.timestamp}</span> 
        </span>
    )
}

export default User;