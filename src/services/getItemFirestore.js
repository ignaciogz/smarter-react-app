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

      const data = querySnapshot.size > 0 
                    ? querySnapshot.docs.pop().data() 
                    : undefined;
      return data;
  } catch (error) {
    console.log(error);
  }
}

export default getItemFirestore;
