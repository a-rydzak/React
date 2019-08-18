import React from 'react';

class Users extends React.Component{

    constructor(props){
        super(props);
        this.state={time:"thjtlrhlj"};
    }

    userList = () =>this.props.users.map((user, index) => {
        if(user == this.props.loggedIn){

            return <li key={index} className="logged-in">User {index}: {user} is logged in.</li>
        } else {
            return <li key={index} className="not-logged-in">User {index}: {user} is not logged in.</li>
        }
    }) 

    render(){
        return(this.userList());
    }
}

export default Users;