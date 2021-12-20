import './App.css';
import logo from "./logo.jpg"

import {SignInState}  from "./components/SignInState";
import { RoomBadgeList } from './components/RoomBadgeList';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
      <header>
        Headcount with Authentication
      </header>

      <section >
        {user ? <SignedIn /> : <SignedOut />}
        {/* if user != null, display the UI. if user == null, they haven't signed in*/}
      </section>

      </header>
    </div>
  );
}

function SignedOut(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <div>
    <img src = {logo} alt="this is the logo" />
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  
    </div>
    )
}


//When inside the signed-in state, retrieve all of the room data in the database. 
function SignedIn(){

  const roomsRef = firestore.collection('counts');
  const query = roomsRef.orderBy('people');
  const [rooms] = useCollectionData(query, {idField: 'id'});

  return(
    <div>
      
    <SignInState roomInfo={rooms} />
    

    <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}


export default App;
