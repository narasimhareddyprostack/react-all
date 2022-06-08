import React, { useState } from 'react';
import './search.css';
// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
];
let Search = () => {
    // the value of the search field 
    const [name, setName] = useState('');
    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
                }
        setName(keyword);
    };
    return (
        <div className="container">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />
            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-id">{user.id}</span>
                            <span className="user-name">{user.name}</span>
                            <span className="user-age">{user.age} year old</span>
                        </li>
                    ))
                ) : (
                        <h1>No results found!</h1>
                    )}
            </div>
        </div>
    );
}
export default Search;