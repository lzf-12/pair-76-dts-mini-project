
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhBoGQKu9hZbHVv0RdX2cwlUDdZ7eCTSY",
  authDomain: "movies-app-2ac9a.firebaseapp.com",
  projectId: "movies-app-2ac9a",
  storageBucket: "movies-app-2ac9a.appspot.com",
  messagingSenderId: "601287784009",
  appId: "1:601287784009:web:f372dc52ba03cc673e7198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
    try{
        const userYangDiDapatkan = await createUserWithEmailAndPassword(auth, email, password)


        console.log("User yang teregister adalah: ", userYangDiDapatkan.user)
    }
    catch{
        console.log(err)
        console.log("Error code auth" , err.code)
        console.log("Error msg auth", err.message)
    }

} 


const loginDenganEmailDanPasssword = () => {}

const resetPasswordKarenaLupa = () => {}

const keluarDariAplikasi = () => {}