import app from '../../firebase';
import { getFirestore, collection, addDoc, doc} from 'firebase/firestore';

const db = getFirestore(app);


export default async function addUser(username, password){
    const docRef = collection(db, 'users');
    
    try{
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            password: password
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    }catch(e){
        console.error("Error adding document: ", e);
        return false;
    }

};