import {
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../FireBaseConfig";

export const updateItemByEmailWithSetDoc = async (email, updatedData) => {
  try {
    console.log("Atualizando documento com email: ", email, updatedData);
    const collectionName = "Usuarios";
    const q = query(
      collection(db, collectionName),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(
        `Nenhum documento encontrado com o email: ${email} na coleção: ${collectionName}`
      );
      return false;
    }

    const documentToUpdate = querySnapshot.docs[0];
    const documentId = documentToUpdate.id;

    const docRef = doc(db, collectionName, documentId);
    await setDoc(docRef, updatedData, { merge: true });

    console.log(
      `Documento com ID ${documentId} (email: ${email}) atualizado com sucesso com setDoc!`
    );
    return true;
  } catch (error) {
    console.error("Erro ao atualizar documento por email com setDoc: ", error);
    throw error;
  }
};
