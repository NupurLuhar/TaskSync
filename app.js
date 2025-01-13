import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskList from './components/TaskList';

function App() {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('authToken', authToken);
        } else {
            localStorage.removeItem('authToken');
        }
    }, [authToken]);

    return ( <
            Router >
            <
            Routes >
            <
            Route path = "/login"
            element = { < LoginPage setAuthToken = { setAuthToken }
                />} / >
                <
                Route path = "/register"
                element = { < RegisterPage / > }
                /> <
                Route path = "/"
                element = { < TaskList authToken = { authToken }
                    />} / >
                    <
                    /Routes> <
                    /Router>
                );
            }

            export default App;