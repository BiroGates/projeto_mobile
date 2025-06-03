import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../FireBaseConfig";

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

    if (!user) {
      auth.signOut();
    }

    return user;
  } catch (e) {
    console.error("Erro ao buscar documento: ", e);
  }
}
