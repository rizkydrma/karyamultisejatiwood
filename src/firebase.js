import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDnMk1jqa4_McZ-b47jyChbnZpgSQSAP1s',
  authDomain: 'karyamultisejatiwood.firebaseapp.com',
  projectId: 'karyamultisejatiwood',
  storageBucket: 'karyamultisejatiwood.appspot.com',
  messagingSenderId: '5923140068',
  appId: '1:5923140068:web:72bbc292cdef5721a197f1',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });

      localStorage.setItem('user', user.email);
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  localStorage.removeItem('user');
};

export { auth, db, signInWithGoogle, logout };
