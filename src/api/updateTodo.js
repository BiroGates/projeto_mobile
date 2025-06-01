import {
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

async function listarDocumentos(db, caminhoColecao) {
  try {
    const colecaoRef = collection(db, caminhoColecao);
    const snapshot = await getDocs(colecaoRef);

    const lista = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Documentos:", lista);
    return lista;
  } catch (erro) {
    console.error("Erro ao listar documentos:", erro);
    return [];
  }
}

const updateTodo = async (db, todoId, updatedData) => {
  try {
    const test = await listarDocumentos(db, "Todos");

    const todoRef = doc(db, "Todos", todoId);
    await updateDoc(todoRef, updatedData, { merge: true });
    console.log("Todo updated successfully");
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};

export default updateTodo;
