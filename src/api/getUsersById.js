import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBaseConfig";

export async function getUsersById(email) {
  try {
    const querySnapshot = await getDocs(collection(db, "Usuarios"));
    let user;
    querySnapshot.forEach((doc) => {
      const treatedData = doc.data();
      if (treatedData.email === email) {
        user = treatedData;
      }
    });

    return user;
  } catch (e) {
    console.error("Erro ao buscar documento: ", e);
  }
}
