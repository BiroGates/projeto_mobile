import { collection, getDocs } from "firebase/firestore";
import { db } from '../../FireBaseConfig';

export default async function getTodosById(email) {
    try {
        const querySnapshot = await getDocs(collection(db, "Todos"));
        const returnData = [];
        querySnapshot.forEach((doc) => {
            const treatedData = doc.data();
            if (treatedData.email === email) {
                returnData.push({id: doc.id, ...doc.data()});
            }
        });
        (returnData);
        return returnData;
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
    }
}