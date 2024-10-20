import { collection, addDoc, doc, getDocs, updateDoc } from "firebase/firestore"; 
import { database } from "./firebaseSetup";
import { deleteDoc } from "firebase/firestore";

export async function writeToDB(data, collectionName) {
	try {
	     const docRef = await addDoc(collection(database, collectionName), data);
         return docRef;
	  }
	catch (err) {
	    console.log("Write to DB", err)
	  }
}

export async function fetchDataFromDB(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(database, collectionName));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return data;
    } catch (err) {
      console.log("Fetch from DB", err);
      return [];
    }
  }