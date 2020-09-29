// contact
const conName = document.querySelector('.name-input');
const conSubject = document.querySelector('.subject-input');
const conEmail = document.querySelector('.email-input');
const conPhone = document.querySelector('.phone-input');
const conMessage = document.querySelector('.message-input');
const submitBtn = document.querySelector('#submit-button');

// footer 
const mainFooter = document.querySelector('#main-footer');

// footer cursor
mainFooter.style.cursor = 'default';

// Contact form /////////
function check(){
  if(conName.value == '' || conSubject.value == '' || conName.Email == '' || conPhone.value == '' || conMessage.value == ''){
    alert('Please fill out the form\r\n\r\n入力されていない項目があります');
    return false;
  }
}
