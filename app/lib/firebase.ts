
import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app'
import { sendEmailVerification, Auth, getAuth, createUserWithEmailAndPassword, User, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app';
import { getFirestore, getDocs, setDoc, addDoc, collection, query, where, doc, Firestore } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


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
const db = getFirestore(app);

let firebaseApp: FirebaseApp;
let auth: Auth;
let firestore: Firestore;
let user: User | null = null;

let username: String;

firestore = getFirestore();

export const signup = async(name: string, email: string, password: string) => {
    try {
        const auth = getAuth()
        let userCredntial = await createUserWithEmailAndPassword(auth, email, password);
        user = userCredntial.user;
        await addUser(name, email);
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

export { firebaseApp, auth, firestore, user };

export const addUser = async(name: string, email: string) => {
    const docData = {
        name: name,
        email: email,
        uid: user?.uid
    }
    username = name;
    const userRef = collection(db, "users");
    await addDoc(userRef, docData);
}

export const addPlants = async(name: string, species: string, location: string, days: string) => {
    const docData = {
        name: name,
        species: species,
        location: location,
        days: days,
        username: username
    }

    const plantsRef = collection(db, "plants");
    await addDoc(plantsRef, docData);
}

export const getPlants = async (path: string) => {
    const subjectsArray: any = [];
    const col = collection(db, "plants");
    await getDocs(query(col, where("username", "==", "Rain"))).then((snapshot) => {
        snapshot.docs.map((doc) => {
            subjectsArray.push({
                name: doc.data().name,
                species: doc.data().species,
                location: doc.data().location,
                days: doc.data().days,
                username: doc.data().username
            })
        })
    })
    return subjectsArray;
}
