// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    storageBucket: 'baptistchurch-61b70.appspot.com'  // Добавляем URL бакета сюда
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, ref, listAll, getDownloadURL };
