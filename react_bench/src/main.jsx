import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LogRocket from 'logrocket';

LogRocket.init('dafa/react_benchmark');

// This is an example script - don't forget to change it!
LogRocket.identify('22', {
    name: 'react_benchmark',
    email: 'react_benchmark@abdallahsamy.me',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
