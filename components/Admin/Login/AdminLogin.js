import React from 'react';
import styles from './AdminLogin.module.scss'
import { useState } from 'react';
import AuthService from "../../../services/AuthService";
import Router from 'next/router';

const AdminLogin =  () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit (e){
        e.preventDefault();

        await AuthService.login(name, password).then(response => {
            if(response.status === 200){
                localStorage.setItem("authorization", response.headers.get("Authorization"))
                Router.push('/terms')
                console.log("successful authorization")
            }
        });
    };

    return (
        <div className={styles.wrapper}>
             <main>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="message">Message:</label>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    );
};

export default AdminLogin;