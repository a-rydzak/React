import React from 'react';
import Users from './users';

class UsersContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    users = ["eddy", "brendan", "goose", "eli", "marcos"];
    render(){
        return(
            <Users loggedIn="goose" users={this.users}/>
        );
    }
}

export default UsersContainer;