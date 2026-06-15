import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {}
        }

    }
    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/SuryaSanjana")
        const userData = await response.json()
        this.setState({ user: userData })
    }
    render() {
        const { login, avatar_url } = this.state.user;
    return (
        <div className="user-card">
            <h2> {login} </h2>
            <img style={{ width: '100px', height: '100px' }} src={avatar_url} alt={login} />
        </div>
    )
    }
}

export default UserClass;