import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCq1rswUACT_7n-STZAgMg860bq8doKPKA",
    authDomain: "magnate21.firebaseapp.com",
    projectId: "magnate21",
    storageBucket: "magnate21.appspot.com",
    messagingSenderId: "51613216620",
    appId: "1:51613216620:web:9e143231ff54759bd8cd49",
    measurementId: "G-H9WF1R70HC"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  // console.log(snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        
        ...additionalData

      });
      
     
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const createEventsCollection = async (title , CurrentUser) => {
  const userAuth =firebase.auth().currentUser;
 
  const {displayName , email , phone}=CurrentUser;
  const registeredAt = new Date();

  const eventRef = firestore.doc(`users/${firebase.auth().currentUser.uid}/events/${title}`)
  const eventWiseCollectionRef = firestore.doc(`events/${title}/users/${userAuth.uid}`)
 
  try{
        await eventRef.set({
          title
        });
        await eventWiseCollectionRef.set({
        displayName,
        email,
        phone,
        registeredAt
        });
        
    
  }
  catch(error){
      console.log(error.message)
  }
  
  return eventRef;
};

// export const setEventWiseData = async(user) =>{
//   const
// }





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;