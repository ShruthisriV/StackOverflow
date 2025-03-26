import React from 'react'
import './Users.css'
import User from './User'

const Userslist = () => {
    const users=[{
        "_id": "u12345",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "securepassword123",
        "about": "Software developer with a passion for open-source projects and algorithms.",
        "tags": ["JavaScript", "Python", "Open-source"],
        "answered": 10,
        "joinedon": "2024-06-10T08:00:00z"
    },{
        "_id": "u54321",
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "mypassword456",
        "about": "Data scientist with expertise in machine learning and big data.",
        "tags": ["Machine Learning", "Python", "Data Science"],
        "answered": 25,
        "joinedon": "2024-06-10T09:00:00z"
    },{
        "_id": "u67890",
        "name": "Alice Johnson",
        "email": "alicejohnson@example.com",
        "password": "anotherpassword789",
        "about": "Frontend Developer",
        "tags": ["React", "Javascript", "css"],
        "answered": 15,
        "joinedon": "2024-06-10T10:00:00z"
    }]
  return (
    <div className="user-list-container">
        {users.map((user) => (
            <User user={user} key={user?._id}/>
        ))}
    </div>
  )
}

export default Userslist