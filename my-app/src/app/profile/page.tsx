"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Topnavbar';


export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);  

    useEffect(() => {
        fetch('/api/getUsers', {cache: 'no-cache'})
          .then((res) => res.json())
          .then((usersJSON) => {
            setUsers(usersJSON.data)
            setIsLoading(false)
          })
      }, [])
    
   
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (!users) {
        return <div>No users found</div>
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            {users.map(user => (
                <ul key={user.id}>
                        <li key={user.username}>{user.username}</li>
                        <li key={user.password}>{user.password}</li>
                </ul>
            ))    
            }
        
        </main>
    )
}

