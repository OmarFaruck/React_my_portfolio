// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmzUn4XW3ddaxRWMce8vzDKOdHYbHllDg",
  authDomain: "my-react-portfolio-71dcf.firebaseapp.com",
  projectId: "my-react-portfolio-71dcf",
  storageBucket: "my-react-portfolio-71dcf.appspot.com",
  messagingSenderId: "812929112451",
  appId: "1:812929112451:web:08f66332c424742815beb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;