import { initializeApp } from "firebase/app";
import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";


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
    email: string;
    phone: string;
    coming: boolean;
    overnight: boolean;
    rainbowLodgeNights?: string[];
    meals?: string[];
    dietaryRestrictions?: string[];
    dietaryNotes?: string;
}

export interface FamilyResponse {
    familyKey: string;
    familyName: string;
    people: RSVP[];
}

export interface FAQ {
    author: string;
    question: string;
    createdAt?: any; // Firestore timestamp
    answers?: FAQReply[];
}

export interface FAQReply {
    author: string;
    text: string;
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
        const fkey = (rsvp.firstName || "").trim().toLowerCase().replace(/\s+/g, "_");
        const lkey = (rsvp.lastName || "").trim().toLowerCase().replace(/\s+/g, "_");
        const key = (fkey && lkey) ? `${fkey}_${lkey}` : `anon_${crypto.randomUUID()}`;
        await setDoc(doc(this.db, "responses", key), rsvp);
    }

    public async saveFamilyResponse(family: FamilyResponse) {
        await setDoc(doc(this.db, "responses", family.familyKey), {
            familyName: family.familyName,
            people: family.people
        });
    }

    public async getFamilyResponse(familyKey: string): Promise<FamilyResponse | null> {
        const docRef = doc(this.db, "responses", familyKey);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        const data = docSnap.data();
        return {
            familyKey,
            familyName: data.familyName || "",
            people: data.people || []
        };
    }

    public async getAllFamilies(): Promise<Array<{key: string, name: string}>> {
        const q = query(collection(this.db, "responses"));
        const snap = await getDocs(q);
        return snap.docs.map(d => ({
            key: d.id,
            name: d.data().familyName || d.id
        }));
    }

    // --- FAQ methods ---

    public async addFaq(faq: FAQ) {
        await addDoc(collection(this.db, "faqs"), {
            ...faq,
            author: faq.author.toUpperCase(),
            createdAt: serverTimestamp(),
            answers: [] // 👈 initialize empty array
        });
    }

    /** Subscribe to ordered list of FAQs (newest first) */
    public onFaqs(cb: (items: Array<{ id: string; data: FAQ }>) => void) {
        const q = query(collection(this.db, "faqs"), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snap) => {
            const items = snap.docs.map(d => ({ id: d.id, data: d.data() as FAQ }));
            cb(items);
        });
    }

    /** Subscribe to replies under an FAQ (oldest first for reading order) */
    public onFaqReplies(
        faqId: string,
        cb: (items: Array<{ id: string; data: FAQReply }>) => void
    ) {
        const qy = query(
            collection(this.db, "faqs", faqId, "replies"),
            orderBy("createdAt", "asc")
        );
        return onSnapshot(qy, (snap) => {
            const items = snap.docs.map(d => ({ id: d.id, data: d.data() as FAQReply }));
            cb(items);
        });
    }


    public async addFaqAnswer(faqId: string, reply: FAQReply) {
        const ref = doc(this.db, "faqs", faqId);
        await updateDoc(ref, {
            answers: arrayUnion({
                author: reply.author.toUpperCase(),
                text: reply.text,
            }),
        });
    }
}