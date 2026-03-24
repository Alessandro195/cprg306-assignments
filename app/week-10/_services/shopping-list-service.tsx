import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId: string) {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);

    const items: any[] = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
}

export async function addItem(userId: string, item: any) {
    const itemsRef = collection(db, "users", userId, "items");
    await addDoc(itemsRef, item);
}