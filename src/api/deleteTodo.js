import { doc, deleteDoc } from "firebase/firestore";

// Método para deletar um documento de uma coleção
async function deletarDocumento(db, caminhoColecao, idDocumento) {
  try {
    const referenciaDoc = doc(db, caminhoColecao, idDocumento);
    await deleteDoc(referenciaDoc);
    console.log("Documento deletado com sucesso!");
  } catch (erro) {
    console.error("Erro ao deletar documento:", erro);
  }
}
export default deletarDocumento;
