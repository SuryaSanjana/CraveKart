import  { useState } from 'react';
const User = (props) => {
    const [user, setUser] = useState("");
    return (
        <div className="user-card">
            <h1>User Functional Component</h1>
            <h2> {props.name} </h2>
        </div>
    )
}
export default User;