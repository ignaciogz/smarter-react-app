import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";

const updateStockFirebase = async (collectionName, collectionItemsToUpdate) => {
	try {
		const db = getFirestore();

		const getItemInCollection = (id) => collectionItemsToUpdate.find(item => item.id === id);
		const itemsToUpdate = collectionItemsToUpdate.map((item) => item.storageID);

		const q = query(
			collection(db, collectionName),
			where(documentId(), "in", itemsToUpdate)
		);

		const querySnapshot = await getDocs(q);
		const batch = writeBatch(db);

		const outOfStock = [];
		querySnapshot.docs.forEach((docSnapshot) => {
				let data = docSnapshot.data();
				let itemInCollection = getItemInCollection(data.id);

				if (data.stock >= itemInCollection.quantity) {
						batch.update(docSnapshot.ref, {
								stock: docSnapshot.data().stock - itemInCollection.quantity
						});
				} else {
						outOfStock.push(itemInCollection);
				}
		});

		if(outOfStock.length === 0) await batch.commit();

		return outOfStock.length > 0 
			? {
					status: "error",
					error: { name: "outOfStock", value: outOfStock }
				}
			: { status: "success" }
	} catch (error) {
		console.log(error);
	}
}

export default updateStockFirebase;
