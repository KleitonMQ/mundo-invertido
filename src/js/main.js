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
    if(txtName.value, txtCharacter.value, txtEmail.value, txtLevel.value != ""){
        const subscriptionId = subcribeToClub(subscription);
        alert(`${txtName.value} Inscrito com sucesso.`)
        txtCharacter.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtName.value = ''
    }else{
        alert(`Preencha todos os campos do formulário.`)
    }

})


