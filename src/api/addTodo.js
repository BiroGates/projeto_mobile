import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../FireBaseConfig";

const addTodo = async (todoData) => {
  try {
    const novaRef = doc(collection(db, "Todos"));

    await setDoc(novaRef, todoData);
    "Novo todo adicionado com sucesso:", novaRef.id;
    return novaRef.id;
  } catch (error) {
    console.error("Erro ao adicionar todo:", error);
    return null;
  }
};

export default addTodo;
