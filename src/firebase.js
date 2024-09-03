// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import storageConfig from './config/storageConfig'; // Импортируйте файл конфигурации

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

// Используйте URL бакета из конфигурационного файла
const storage = getStorage(app, storageConfig.bucketUrl);

export { storage, ref, listAll, getDownloadURL }; // Убедитесь, что все функции экспортируются