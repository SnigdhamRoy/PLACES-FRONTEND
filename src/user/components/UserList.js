import React from 'react'
import UserItem from './UserItem';
import './UserList.css';
import Card from '../../shared/components/UIElements/Card';

const UserList = props => {
    if(props.items.length===0){ //items is array,we can use another name to it
        return (
            <div className='center'>
             <Card>
             <h2>Nothing FF</h2>
             </Card>
            </div>
        );
    }
    return( 
        <ul className='users-list'>
        {props.items.map(user => (
            <UserItem key={user.id}
             id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places.length}
            />
        ))}
    </ul>
    )
};

export default UserList
