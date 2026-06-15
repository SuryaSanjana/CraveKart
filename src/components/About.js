import React from 'react';
import UserClass from './UserClass';
import User from './User';

class About extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p> This is the about us page of our food delivery app. </p>
                <UserClass />
                {/* <User name="class" /> */}
            </div>
        )
    }
}
export default About;