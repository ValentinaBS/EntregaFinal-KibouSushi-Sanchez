import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAqUWvrhM9v5FkvsoybWbxet4fbd-ETL7E',
    authDomain: 'kibou-sushi-ecommerce.firebaseapp.com',
    projectId: 'kibou-sushi-ecommerce',
    storageBucket: 'kibou-sushi-ecommerce.appspot.com',
    messagingSenderId: '40070431325',
    appId: '1:40070431325:web:3a72f7a08362032bb703b4'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);