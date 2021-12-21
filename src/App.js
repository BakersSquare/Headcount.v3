//CSS and Logo Imports
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.jpg"

//Firebase imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

//Getting Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//Project Components
import {SignInState}  from "./components/SignInState";
import Image from 'react-bootstrap/Image'
//Consider importing Toasts to create notifications in the top right whenever specific rooms are getting filled


firebase.initializeApp({
  apiKey: "AIzaSyBWNGgEWcXl8Hoy9gq2yh4iONBtVOQ5LVE",
    authDomain: "headcount-epics.firebaseapp.com",
    projectId: "headcount-epics",
    storageBucket: "headcount-epics.appspot.com",
    messagingSenderId: "1012274012291",
    appId: "1:1012274012291:web:0d7ffcd1c17a28b3b6bbb6",
    measurementId: "G-FBJD25855D"
  });
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      <section >
        {user ? <SignedIn /> : <SignedOut />}
      </section>

      </header>
    </div>
  );
}

//Modularize this to return a single signed out state component. Keep the googleAuth code, but return a developed component.
function SignedOut(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <div>
      <Image src = {logo} fluid />
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    )
}

//When inside the signed-in state, retrieve all of the room data in the database. 
function SignedIn(){

  const roomsRef = firestore.collection('counts');
  const query = roomsRef.orderBy('maximumOccupancy');
  const [rooms] = useCollectionData(query, {idField: 'id'});

  return(
    <div>
      
    <SignInState roomInfo={rooms} />
    

    <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}


export default App;
