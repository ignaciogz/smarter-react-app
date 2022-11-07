import { collection, addDoc, getFirestore } from "firebase/firestore";

const setDocFirestore = async (collectionName, data) => {
    try {
			const db = getFirestore();
			
			const orderFirebase = collection(db, collectionName);
			const result = await addDoc(orderFirebase, data);

      return result.id;
  } catch (error) {
    console.log(error);
  }
}

export default setDocFirestore;
