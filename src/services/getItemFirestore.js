import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";

const getItemFirestore = async (collectionName, filterKey, filterValue) => {
  try {
      const db = getFirestore();

      const q = query(
                  collection(db, collectionName),
                  where(filterKey, "==", filterValue),
                  limit(1)
                );
      let querySnapshot = await getDocs(q);

      const dataArray = querySnapshot.docs.map(doc => {
        let data = doc.data();
        data.storageID = doc.id;
        return data;
      });

      const data = dataArray.length > 0 
                    ? dataArray.pop()
                    : undefined;
      
      return data;
  } catch (error) {
    console.log(error);
  }
}

export default getItemFirestore;
