import { db } from '../../firebase/db';
import { addDoc, collection } from 'firebase/firestore';
import { MESSAGE_COLlECTION } from '../../firebase/const';
import { MessageType } from './type';

type NewMessage = {
  message: MessageType
  conversationId: string
  userId: string
}
export async function addNewMessage(newMessage: NewMessage) {
  try {
    const docRef = await addDoc(collection(db, MESSAGE_COLlECTION), {
      ...newMessage.message,
      conversationId: newMessage.conversationId,
      userId: newMessage.userId
    });
    return docRef
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

