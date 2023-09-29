import firebase from "firebase/compat/app" ;
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';



const firebaseConfig = {
    apiKey: "AIzaSyCBnoY2QTipawrykNr1P-37cPuJNPED5ZQ",
    authDomain: "four-form.firebaseapp.com",
    projectId: "four-form",
    storageBucket: "four-form.appspot.com",
    messagingSenderId: "1092297445694",
    appId: "1:1092297445694:web:6a4577ceb786b003f35c6f"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();