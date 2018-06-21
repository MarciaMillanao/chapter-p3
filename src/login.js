window.onload = () => {
  login();
}

function login() {
const config = {
  apiKey: "AIzaSyB0EP6V6GTJfr_s16c80Iysh3_pD-aVeAY",
  authDomain: "red-social-7b68d.firebaseapp.com",
  databaseURL: "https://red-social-7b68d.firebaseio.com",
  projectId: "red-social-7b68d",
  storageBucket: "red-social-7b68d.appspot.com",
  messagingSenderId: "151412064408"
};
firebase.initializeApp(config);

  const txtEmail = document.getElementById('inputEmail');
  const txtPassword = document.getElementById('inputPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSigUp = document.getElementById('btnSigUp');
  const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {

  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  
  btnSigUp.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  
  if (email.length == 0 || password.length == 0) {
    alert("Los campos de la password no pueden quedar vacios");
    return false;
  }
  
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
  });
  
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });
  
  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    }else{
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });
}