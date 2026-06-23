import React from 'react';
import UserClass from './UserClass';
import User from './User';
import UserContext from '../utils/UserContext';

class About extends React.Component {

    constructor(props) {
        super(props);
    }

   
    render() {
        return (
           
            <div>
                 <UserContext.Consumer>
                    <h1>About Us</h1>
                    <p> This is the about us page of our food delivery app. </p>
                    <UserClass />
                    {/* <User name="class" /> */}
                </UserContext.Consumer>
            </div>
        )
    }
}
export default About;