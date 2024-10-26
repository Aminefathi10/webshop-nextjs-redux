import { collRef } from "./firebase";
import { getDocs, query, queryEqual, where, orderBy } from "firebase/firestore";



export async function fetchProductsData () {
    
    const products = await getDocs(collRef).then(snap => {
        return snap.docs.map(doc => doc.data());
    });
    return products
}

export async function fetchProductsByCategory (product_category) {

    const q = query(collRef, where('id', '==', product_category), orderBy('id', 'desc'));

    const products = await getDocs(q).then(snap => {
        return snap.docs.map(doc => doc.data());
    });
    return products
}

export async function fetchProductDetailsData (id) {
    const q = query(collRef, where('id', '==', parseInt(id)));

    const product = await getDocs(q).then(snap => {
        return snap.docs.map(doc => doc.data());
    });
    console.log(product, id)
    return product
}
