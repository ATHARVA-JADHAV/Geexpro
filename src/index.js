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
      Signup.push({ ...doc.data(), id: doc.id })
    })
    console.log(Signup)
  })

  .catch(err => {
    console.log(err.message)
  })

console.log(localStorage.getItem('username'))

// const colRefHtmlScores = collection(db, 'html_quiz_scores');

// getDocs(colRefHtmlScores)
//   .then((snapshot) => {
//     let scores = [];
//     snapshot.docs.forEach((doc) => {
//       scores.push({ ...doc.data(), id: doc.id });
//     });

//     // Sort the scores array by the html_score field
//     scores.sort((a, b) => a.html_score - b.html_score);
//     scores.reverse();
//     console.log(scores);

//     const leaderboardTable = document.getElementById("leaderboardTable");

//     scores.forEach((entry, index) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `<td>${index + 1}</td><td>${entry.username}</td><td>${entry.html_score}</td>`;
//       leaderboardTable.appendChild(row);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// window.onload = function signup() {
//   const addSignupForm = document.getElementById('signup-form');
//   const password = document.getElementById('password');
//   const conpassword = document.getElementById('conpassword');


//   addSignupForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log("clicked")

//     if (password.value === '' || conpassword.value === '') {
//       alert('Please fill in both password fields');
//       return;
//     }

//     if (password.value !== conpassword.value) {
//       alert('Passwords do not match');
//       return;
//     }

//     addDoc(colRef, {
//       username: addSignupForm.username.value,
//       email: addSignupForm.email.value,
//       password: addSignupForm.password.value,
//       conpass: addSignupForm.conpass.value,
//     })
//       .then(() => {
//         console.log("Signup successful");
//         // Redirect to the home page after successful signup
//         window.location.href = "http://127.0.0.1:5501/src/HTML/home.html";
//       })
//       .catch((error) => {
//         console.error('Error adding document: ', error);
//       });

//   });
// }

document.addEventListener('DOMContentLoaded', function () {
  const addSignupForm = document.getElementById('signup-form');
  const password = document.getElementById('password');
  const conpassword = document.getElementById('conpassword');

  addSignupForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password.value === '' || conpassword.value === '') {
      alert('Please fill in both password fields');
      return;
    }

    if (password.value !== conpassword.value) {
      alert('Passwords do not match');
      return;
    }

    const colRef = collection(db, 'Signup');

    addDoc(colRef, {
      username: addSignupForm.elements.username.value,
      email: addSignupForm.elements.email.value,
      password: addSignupForm.elements.password.value,
      conpass: addSignupForm.elements.conpass.value,
    })
      .then(() => {
        console.log("Signup successful");
        // Redirect to the home page after successful signup
        window.location.href = "/src/HTML/home.html";
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
});



// const loginForm = document.getElementsByClassName('login-form');
// loginForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const username = loginForm.querySelector('input[name="username"]').value;
//   const password = loginForm.querySelector('input[name="password"]').value;

//   const querySnapshot = await getDocs(collection(db, 'Signup'));
//   const user = querySnapshot.docs.find((doc) => doc.data().username === username);

//   console.log(user);

//   // if (user && user.data().password === password) {
//     // window.location.href = '/src/HTML/home.html';
//   // } else {
//   //   alert('Invalid username or password. Please try again.');
//   // }
// });

// window.onload = function signup() {
//   const addSignupForm = document.getElementById('signup-form');
//   const signupButton = document.getElementById('signup-button');

//   const password = document.getElementById('password');
//   const conpassword = document.getElementById('conpassword');

//   signupButton.addEventListener('click', function() {
//     // Your code here
//     console.log("clicked")
//   });

//   signupButton.addEventListener('click', () => {
//     console.log("clicked")
//     if (password.value === '' || conpassword.value === '') {
//       alert('Please fill in both password fields');
//       return;
//     }

//     if (password.value !== conpassword.value) {
//       alert('Passwords do not match');
//       return;
//     }



//     addDoc(colRef, {
//       username: addSignupForm.username.value,
//       email: addSignupForm.email.value,
//       password: addSignupForm.password.value,
//       conpass: addSignupForm.conpass.value,
//     })
//       .then(() => {
//         console.log("Signup successful");
//         // Redirect to the home page after successful signup
//         window.location.href = "http://127.0.0.1:5501/src/HTML/home.html";
//       })
//       .catch((error) => {
//         console.error('Error adding document: ', error);
//       });
//   });
// };

window.onload = function login() {
  const loginForm = document.getElementById('login-form');

  loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;

    const querySnapshot = await getDocs(collection(db, 'Signup'));
    const user = querySnapshot.docs.find((doc) => doc.data().username === username);

    // user? console.log(user.data()) : alert('Incorrect Username')

    // console.log(user.data());

    if (user && user.data().password === password) {
      // window.location.href='Signup2.html';
      localStorage.setItem('username', username);
      window.location.href = '/src/HTML/home.html';
      // alert('SYSTUM')
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
}

// function HtmlTestScore() {
const html_score = document
  .getElementById("htmlquizform");

html_score.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting
  let score = 0;

  // Check answers for question 1
  if (document.getElementById("q1-option4").checked) {
    score += 4;
  }

  // Check answers for question 2
  if (document.getElementById("q2-option3").checked) {
    score += 4;
  }

  // Check answers for question 3
  if (document.getElementById("q3-option1").checked) {
    score += 4;
  }

  // Check answers for question 4
  if (document.getElementById("q4-option1").checked) {
    score += 4;
  }

  // Check answers for question 5
  if (document.getElementById("q5-option2").checked) {
    score += 4;
  }

  // Check answers for question 6
  if (document.getElementById("q6-option3").checked) {
    score += 4;
  }

  // Check answers for question 7
  if (document.getElementById("q7-option1").checked) {
    score += 4;
  }

  // Check answers for question 8
  if (document.getElementById("q8-option2").checked) {
    score += 4;
  }

  // Check answers for question 9
  if (document.getElementById("q9-option2").checked) {
    score += 4;
  }

  // Check answers for question 10
  if (document.getElementById("q10-option4").checked) {
    score += 4;
  }

  // Check answers for question 11
  if (document.getElementById("q11-option2").checked) {
    score += 4;
  }

  // Check answers for question 12
  if (document.getElementById("q12-option1").checked) {
    score += 4;
  }

  // Check answers for question 13
  if (document.getElementById("q13-option2").checked) {
    score += 4;
  }

  // Check answers for question 14
  if (document.getElementById("q14-option4").checked) {
    score += 4;
  }

  // Check answers for question 15
  if (document.getElementById("q15-option1").checked) {
    score += 4;
  }

  // Display the score
  // alert("Your score is: " + score);
  console.log(score);

  const colRef2 = collection(db, 'html_quiz_scores')

  getDocs(colRef2)
    .then((snapshot) => {
      let html_quiz_scores = []
      snapshot.docs.forEach((doc) => {
        html_quiz_scores.push({ ...doc.data(), id: doc.id })
      })
      console.log(html_quiz_scores)
    })

    .catch(err => {
      console.log(err.message)
    })

  addDoc(colRef2, {
    username: localStorage.getItem('username'),
    html_score: score,
  }).then(() => {
    alert('Your Score is ' + score);
    // window.location.href = '/src/HTML/home.html';
  }
  )
});
// }

// const leaderboardTable = document.getElementById("leaderboardTable");

// database.ref("leaderboard").orderByChild("score").on("value", function(snapshot) {
//     const leaderboardData = [];
//     snapshot.forEach(function(childSnapshot) {
//         const entry = childSnapshot.val();
//         leaderboardData.push(entry);
//     });
getDocs(colRef2)
  .then((snapshot) => {
    let leaderboardTable = []
    snapshot.docs.forEach((doc) => {
      leaderboardTable.push({ ...doc.data(), })
    })
    console.log(leaderboardTable)
  })

  .catch(err => {
    console.log(err.message)
  })

leaderboardData.reverse(); // Reverse the data array to display in descending order by score

leaderboardData.forEach((entry, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
  leaderboardTable.appendChild(row);
});
// });


const js_score = document
  .getElementById("jsquizform");

js_score.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting
  let score = 0;

  // Check answers for question 1
  if (document.getElementById("q1-option1").checked) {
    score += 4;
  }

  // Check answers for question 2
  if (document.getElementById("q2-option1").checked) {
    score += 4;
  }

  // Check answers for question 3
  if (document.getElementById("q3-option2").checked) {
    score += 4;
  }

  // Check answers for question 4
  if (document.getElementById("q4-option2").checked) {
    score += 4;
  }

  // Check answers for question 5
  if (document.getElementById("q5-option1").checked) {
    score += 4;
  }

  // Check answers for question 6
  if (document.getElementById("q6-option2").checked) {
    score += 4;
  }

  // Check answers for question 7
  if (document.getElementById("q7-option3").checked) {
    score += 4;
  }

  // Check answers for question 8
  if (document.getElementById("q8-option1").checked) {
    score += 4;
  }

  // Check answers for question 9
  if (document.getElementById("q9-option2").checked) {
    score += 4;
  }

  // Check answers for question 10
  if (document.getElementById("q10-option1").checked) {
    score += 4;
  }

  // Check answers for question 11
  if (document.getElementById("q11-option3").checked) {
    score += 4;
  }

  // Check answers for question 12
  if (document.getElementById("q12-option3").checked) {
    score += 4;
  }

  // Check answers for question 13
  if (document.getElementById("q13-option1").checked) {
    score += 4;
  }

  // Check answers for question 14
  if (document.getElementById("q14-option3").checked) {
    score += 4;
  }

  // Check answers for question 15
  if (document.getElementById("q15-option2").checked) {
    score += 4;
  }

  // Display the score
  console.log(score);

  const colRef3 = collection(db, 'js_quiz_scores')

  getDocs(colRef3)
    .then((snapshot) => {
      let js_quiz_scores = []
      snapshot.docs.forEach((doc) => {
        js_quiz_scores.push({ ...doc.data(), id: doc.id })
      })
      console.log(js_quiz_scores)
    })

    .catch(err => {
      console.log(err.message)
    })

  addDoc(colRef3, {
    username: localStorage.getItem('username'),
    js_score: score,
  }).then(() => {
    alert('Your Score is ' + score);
  }
  )
});