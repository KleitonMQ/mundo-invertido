import {subcribeToClub} from "./firebase/club.js"

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSuscribe = document.getElementById('btnSuscribe');


btnSuscribe.addEventListener('click', () =>{
    const subscription = {
        name: txtName.value, 
        email: txtEmail.value, 
        level: txtLevel.value, 
        character: txtCharacter.value
    }
    const subscriptionId = subcribeToClub(subscription);
    console.log(`inscrito com sucesso. ${subscriptionId}`)
})


