import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut as signOutFirebase } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db, firebaseAuth } from './firebase.config';
//import {v4 as uuidv4} from "uuid";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

export const signInWithEmail = async (email:string, password:string) => await signInWithEmailAndPassword(firebaseAuth, email, password);

export const signUpWithEmailAndPassword = async (email:string, password:string) => await createUserWithEmailAndPassword(firebaseAuth, email, password);

export async function getDocumentWithId(collectionName:string, id:string ) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  let foundDocument;
  if (docSnap.exists()) {
    foundDocument = {id: docSnap.id, ...docSnap.data()};
  }
  return foundDocument;
}

export async function setDocument <T extends { [x: string]: any; }>(collectionName:string, docRef:string, documentData:T) {
  return await setDoc(doc(db, collectionName, docRef), documentData);
}

export async function updateDocument<T extends { [x: string]: any }>(collectionName: string, docRef: string, documentData: T) {
	return await updateDoc(doc(db, collectionName, docRef), documentData);
}

export const signOut = async () => await signOutFirebase(firebaseAuth);