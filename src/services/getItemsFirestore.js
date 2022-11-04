import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const getItemsFirestore = async (collectionName, filterKey, filterValue) => {
  try {
      const db = getFirestore();

      let querySnapshot = null;
      if(filterValue) {
        const q = query(
                    collection(db, collectionName),
                    where(filterKey, "==", filterValue)
                  );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, collectionName));
      }
      
      const dataArray = querySnapshot.docs.map(doc => doc.data());
      return dataArray;
  } catch (error) {
    console.log(error);
  }
}

export default getItemsFirestore;
