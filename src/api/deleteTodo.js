import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../FireBaseConfig";

async function deleteTodo(id) {
  try {
    const referenciaDoc = doc(db, 'Todos', id);
    await deleteDoc(referenciaDoc);
    console.log("Documento deletado com sucesso!");
  } catch (erro) {
    console.error("Erro ao deletar documento:", erro);
  }
}
export default deleteTodo;
