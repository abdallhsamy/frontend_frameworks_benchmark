import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import LogRocket from 'logrocket';

LogRocket.init('dafa/vue_benchmark');

// This is an example script - don't forget to change it!
LogRocket.identify('11', {
    name: 'vue_benchmark',
    email: 'react_benchmark@abdallahsamy.me',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
});

createApp(App).mount('#app')
