import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, Firestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_JekFZUQ5xpp33viYesstWMWW1IWrjPs",
    authDomain: "wedding-d16cc.firebaseapp.com",
    projectId: "wedding-d16cc",
    storageBucket: "wedding-d16cc.firebasestorage.app",
    messagingSenderId: "398999128995",
    appId: "1:398999128995:web:8f76adc5172ba04dbe6816",
    measurementId: "G-7BZV4Q5649"
};

export interface RSVP {
    firstName: string;
    lastName: string;
    comment: string;
    coming: boolean;
    overnight: boolean;
}

export class Dao {
    private db: Firestore;

    public constructor() {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // Initialize Cloud Firestore and get a reference to the service
        this.db = getFirestore(app);
    }

    public async addRsvp(rsvp: RSVP) {
        const fkey = rsvp.firstName.toLowerCase();
        const lkey = rsvp.lastName.toLowerCase();
        const key = `${fkey}_${lkey}`.trim().replace(" ", "_");
        await setDoc(doc(this.db, "responses", key), rsvp);
    }
}