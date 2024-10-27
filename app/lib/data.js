
import { collRef } from "./firebase";
import { getDocs, query, where, orderBy, doc, getDoc } from "firebase/firestore";



export async function fetchProductsData () {
    
    const products = await getDocs(collRef, orderBy('id', 'desc')).then(snap => {
        return snap.docs.map(doc => doc.data());
    });
    return products
}

export async function fetchProductsByCategory (category) {

    const q = query(collRef, where('category', '==', category));

    const products = await getDocs(q).then(snap => {
        return snap.docs.map(doc => doc.data());
    });
    return products
}

export async function fetchProductDetailsData (id) {
    const docRef = doc(collRef, id);

    const product = await getDoc(docRef);
    return product
}
