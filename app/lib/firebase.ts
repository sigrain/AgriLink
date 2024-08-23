
import { getApp, getApps, initializeApp } from 'firebase/app'
import { sendEmailVerification, getAuth, createUserWithEmailAndPassword, User, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app';


// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initializeFirebaseApp = () =>
    !getApps().length ? initializeApp(firebaseConfig) : getApp()


let user: User | null = null;

export const signup = async(email: string, password: string) => {
    try {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password);
    } catch(e) {
        return e;
    }
}

export const signin = async(email: string, password: string) => {
    try {
        const auth = getAuth()
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user
        return user;
    } catch(e) {
        return e;
    }
}
