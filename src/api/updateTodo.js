import {
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../FireBaseConfig";

async function listarDocumentos(db, caminhoColecao) {
  try {
    const colecaoRef = collection(db, caminhoColecao);
    const snapshot = await getDocs(colecaoRef);

    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    ("Documentos:", lista);
    return lista;
  } catch (erro) {
    console.error("Erro ao listar documentos:", erro);
    return [];
  }
}

const updateTodo = async (todoId, updatedData) => {
  try {
    const todoRef = doc(db, "Todos", todoId);
    console.log(todoId, updatedData);
    await updateDoc(todoRef, updatedData, { merge: true });
    console.log("Todo updated successfully");
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};

export default updateTodo;
