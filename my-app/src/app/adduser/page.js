"use client"

import Image from 'next/image'
import styles from '../page.module.css'
import app from '../firebase';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import addUser from '../api/addUsers/route.js';


export default function Users() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [addedSuccessfully, setAddedSuccessfully] = useState(false);

    async function onSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        const response = await addUser(username, password);
        setAddedSuccessfully(response);
        setIsLoading(false);
    } 

    return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="text" name="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <button type="submit" disabled={isLoading}> {isLoading?'Loading...':'Submit'} </button>
            <p>{addedSuccessfully?'User Added!':''}</p>
        </form>
        
      </div>
    </main>
  )
}
