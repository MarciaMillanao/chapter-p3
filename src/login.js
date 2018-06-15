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
    const password = txtPassword.vale;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });