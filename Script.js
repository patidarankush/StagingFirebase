// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH-o85_VMc-8rvKThdtuMTbGNJhfSo6S0",
    authDomain: "unityfirebase-4db68.firebaseapp.com",
    databaseURL: "https://unityfirebase-4db68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "unityfirebase-4db68",
    storageBucket: "unityfirebase-4db68.appspot.com",
    messagingSenderId: "549481442193",
    appId: "1:549481442193:web:b0e1428b63ad6b81dd4830",
    measurementId: "G-JRYK4Z6M9J"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const switchState = document.getElementById('switchState');
const passvalueButton = document.getElementById('passvalue');
const skychangeButton = document.getElementById('skychange');
const VRScene1 = document.getElementById('VRScene1');
const VRScene2 = document.getElementById('VRScene2');
const VRScene3 = document.getElementById('VRScene3');
const Scenestart = document.getElementById('Scenestart');

// Fetch the initial state from Firebase for switchState
database.ref('switchState').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(switchState, state);
});

// Fetch the initial state from Firebase for passvalue
database.ref('passvalue').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(passvalueButton, state);
});

// Fetch the initial state from Firebase for skychange
database.ref('skychange').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(skychangeButton, state);
});

// Fetch the initial state from Firebase for VRSCene1
database.ref('VRScene1').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(VRScene1, state);
});

// Fetch the initial state from Firebase for VRSCene2
database.ref('VRScene2').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(VRScene2, state);
});

// Fetch the initial state from Firebase for VRSCene3
database.ref('VRScene3').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(VRScene3, state);
});

// Fetch the initial state from Firebase for Scenestart
database.ref('Scenestart').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(Scenestart, state);
});


// Update button based on the state
function updateButton(buttonElement, state) {
    buttonElement.textContent = state ? "True" : "False";
    buttonElement.onclick = () => toggleState(buttonElement.id, !state);
    buttonElement.disabled = false;
}

// Toggle the state in Firebase
function toggleState(refName, newState) {
    const buttonElement = document.getElementById(refName);
    buttonElement.disabled = true;
    database.ref(refName).set(newState);
}