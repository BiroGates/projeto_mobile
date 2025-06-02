import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../FireBaseConfig";

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
