import app from "./app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subcribeToClub(subscription){
    const db = getFirestore(app)
    const clubColection = collection(db, 'projeto-teste')
    const docRef  = await addDoc(clubColection, subscription)
    // a função addDoc() é assincrona, por isso, usamos o await para esperar a primisse 
    return docRef.id;
}

