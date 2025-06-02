import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../FireBaseConfig";
import { listarDocumentos } from "./updateTodo";

const addUser = async (todoData) => {
  try {
    const novaRef = doc(collection(db, "Usuarios"));

    await setDoc(novaRef, todoData);
    "Novo todo adicionado com sucesso:", novaRef.id;
    return novaRef.id;
  } catch (error) {
    console.error("Erro ao adicionar todo:", error);
    return null;
  }
};

export default addUser;
