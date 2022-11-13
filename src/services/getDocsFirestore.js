import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const getDocsFirestore = async (collectionName, filterKey, filterValue) => {
  try {
      const db = getFirestore();
      const collectionRef = collection(db, collectionName);

      let querySnapshot = null;
      if(filterKey && filterValue) {
        const q = query(
                    collectionRef,
                    where(filterKey, "==", filterValue)
                  );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collectionRef);
      }
      
      const dataArray = querySnapshot.docs.map(doc => {
        let data = doc.data();
        data.storageID = doc.id;
        return data;
      });

      return dataArray;
  } catch (error) {
    console.log(error);
  }
}

export default getDocsFirestore;
