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
const podiumsremovedButton = document.getElementById('podiumsremoved');
const VRScene1 = document.getElementById('VRScene1');
const VRScene2 = document.getElementById('VRScene2');
const VRScene3 = document.getElementById('VRScene3');
const Scenestart = document.getElementById('Scenestart');
const tokenBalance = document.getElementById('Tokenbalanceinput');
const tokenBalancebutton = document.getElementById('Tokenbalance');

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

// Fetch the initial state from Firebase for podiumsremoved
database.ref('podiumsremoved').on('value', (snapshot) => {
    const state = snapshot.val();
    updateButton(podiumsremovedButton, state);
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

// Fetch the initial state from Firebase for Tokenbalance
// Reference to the "tokenbalance" child element under "playerprofile"
const playerProfileRef = database.ref('Playerprofile/Tokenbalance');

// Read the value of "tokenbalance"
playerProfileRef.on('value', (snapshot) => {
    const state = snapshot.val();
    updateButtontwo(tokenBalance, state, tokenBalancebutton);
});


// Update button based on the state
function updateButton(buttonElement, state) {
    buttonElement.textContent = state ? "True" : "False";
    buttonElement.onclick = () => toggleState(buttonElement.id, !state);
    buttonElement.disabled = false;
}

// Update textinput based on the value and handle the button click event
function updateButtontwo(textelement, value, buttonElement) {
    textelement.value = value; // Use .value to set the input field's value
    buttonElement.onclick = () => updateTokenBalance(textelement);
    textelement.disabled = false;
}

// Toggle the state in Firebase
function toggleState(refName, newState) {
    const buttonElement = document.getElementById(refName);
    buttonElement.disabled = true; 
    database.ref(refName).set(newState);
}

// Function to update the Token Balance in Firebase
function updateTokenBalance(inputElement) {
    const newTokenBalance = inputElement.value;
    const newTokenBalancetwo = parseInt(inputElement.value, 10);
    const refName = 'Playerprofile/Tokenbalance';

    // Update the value in Firebase
    database.ref("Playerprofile").child("Tokenbalance").set(newTokenBalancetwo);
}