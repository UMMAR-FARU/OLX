import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD_rcmGHXiKcCh2DquRHWq7f4NKvTPLQv0",
    authDomain: "olx-c-1f89d.firebaseapp.com",
    projectId: "olx-c-1f89d",
    storageBucket: "olx-c-1f89d.appspot.com",
    messagingSenderId: "751418374079",
    appId: "1:751418374079:web:749b1a02273058a113930a"
  };

export default firebase.initializeApp(firebaseConfig)