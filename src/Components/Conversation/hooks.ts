import { db } from '../../firebase/db';
import { DocumentData, collection, orderBy, query, where, WithFieldValue, QueryDocumentSnapshot, SnapshotOptions, FirestoreDataConverter } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MESSAGE_COLlECTION } from '../../firebase/const';

const postConverter: FirestoreDataConverter<any> = {
  toFirestore(post: WithFieldValue<any>): DocumentData {
    return { author: post.author, title: post.title };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): any {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data
    };
  },
};

export const useMessages = (conversationId: string) => {
  const q = query(collection(db, MESSAGE_COLlECTION).withConverter(postConverter), where("conversationId", "==", conversationId), orderBy("date", 'asc'));
  return useCollectionData<DocumentData>(q, { snapshotListenOptions: { includeMetadataChanges: true } });
}