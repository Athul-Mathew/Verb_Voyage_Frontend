
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCAfjVnEe1L0PbsGhe_Y3CBurnx8w-MvVo",
  authDomain: "chat-cb925.firebaseapp.com",
  projectId: "chat-cb925",
  storageBucket: "chat-cb925.appspot.com",
  messagingSenderId: "158324296979",
  appId: "1:158324296979:web:a5986ad58bd89e6ccf1ee6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()