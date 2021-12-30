import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC-DiUOSin5Minwt-crQ2ATVkHEkpqF54I",
    authDomain: "la-nota-react-coderhouse.firebaseapp.com",
    projectId: "la-nota-react-coderhouse",
    storageBucket: "la-nota-react-coderhouse.appspot.com",
    messagingSenderId: "1028362110109",
    appId: "1:1028362110109:web:8f9ca51bb8144fadd7c074"
};

initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root'));