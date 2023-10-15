// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc, 
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDov4cuzedD7XlwtoAwZFmig3JfGuj6COQ",
  authDomain: "fir-9-geexpro.firebaseapp.com",
  projectId: "fir-9-geexpro",
  storageBucket: "fir-9-geexpro.appspot.com",
  messagingSenderId: "194567428232",
  appId: "1:194567428232:web:df62437660fa29ec92673d",
  measurementId: "G-B2C805E45M"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'Signup')

getDocs(colRef)
  .then((snapshot) => {
    let Signup = []
    snapshot.docs.forEach((doc) => {
        Signup.push({...doc.data(), id: doc.id })
    })
    console.log(Signup)
  })

  .catch(err => {
    console.log(err.message)
  })


  window.onload = function() {
    const addSignupForm = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const conpassword = document.getElementById('conpassword');
    addSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (password.value === '' || conpassword.value === '') {
        alert('Please fill in both password fields');
        return;
      }
  
      if (password.value !== conpassword.value) {
        alert('Passwords do not match');
        return;
      }
  
      addDoc(colRef, {
        username: addSignupForm.username.value,
        email: addSignupForm.email.value,
        password: addSignupForm.password.value,
        conpass: addSignupForm.conpass.value,
      })
        .then(() => {
         
          window.location.href =""; 
          
          // addSignupForm.reset();
          
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
          
        });
       
    });
  }
  
  
  


