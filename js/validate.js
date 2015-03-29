'use strict';


var usedEmails = [];
var sectorMail=document.querySelector(".mail");
var sectorPassword=document.querySelector(".Allpassword")
var sectorPhone=document.querySelector(".sectphone")
var email = document.getElementById("email");
var password = document.getElementById("password");
var city = document.getElementById("city");
var phone = document.getElementById("phone");
var btn = document.getElementById("btn");
var checkElem=document.getElementById("check");




email.onkeyup =  function() {
     setTimeout ( function () {
      if (/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}|^$/i.test(email.value)) {
                sectorMail.classList.remove("has-error");
                sectorMail.classList.add("required");
                 sectorMail.classList.remove("blockBnt");
                document.querySelector(".alert.one").style.display='none'; 
            } else{
                sectorMail.classList.remove("required");
                sectorMail.classList.add("has-error");
                sectorMail.classList.add("blockBnt");
                document.querySelector(".alert.one").style.display='block';
            }
            activButton();
    } , 2000);
}

password.onkeyup=function(){
  setTimeout( function() {
    if (/\W|^\-/.test(password.value)) {
              sectorPassword.classList.remove("required");
              sectorPassword.classList.add("has-error");
              document.querySelector(".alert.two").style.display='block'; 
              document.querySelector(".alert.four").style.display='none'; 
              document.querySelector(".alert.three").style.display='none';
               sectorPassword.classList.remove("blockBnt");
              sectorPassword.classList.add("blockBnt");
              console.log('вы ввели запрещенные символы. Убедитесь, что ваш пароль не содержит символы, кроме: латинских букв, цифр, подчеркивание и минунус');
    }else if(/^([a-zа-яё]+|\d+)$/i.test(password.value)){ 
              sectorPassword.classList.remove("required");
              sectorPassword.classList.add("has-error");
              document.querySelector(".alert.two").style.display='none'; 
              document.querySelector(".alert.four").style.display='none'; 
              document.querySelector(".alert.three").style.display='block'; 
              console.log('ваш пароль слишком прост, комбинируйте буквы с цифрами');
               sectorPassword.classList.remove("blockBnt");
              sectorPassword.classList.add("blockBnt");

    }else if(/^$/.test(password.value)) {
          sectorPassword.classList.add("required");
          sectorPassword.classList.remove("has-error");
          document.querySelector(".alert.three").style.display='none';
          document.querySelector(".alert.two").style.display='none'; 
          document.querySelector(".alert.four").style.display='none'; 
           sectorPassword.classList.remove("blockBnt");
          sectorPassword.classList.add("blockBnt");
    }else if (/^.{0,5}$/.test(password.value)) {
            sectorPassword.classList.remove("required");
            sectorPassword.classList.add("has-error");
            document.querySelector(".alert.three").style.display='none';
            document.querySelector(".alert.two").style.display='none'; 
            document.querySelector(".alert.four").style.display='block'; 
             sectorPassword.classList.remove("blockBnt");
             sectorPassword.classList.add("blockBnt");
    }else {
          document.querySelector(".alert.four").style.display='none'; 
          document.querySelector(".alert.two").style.display='none'; 
          document.querySelector(".alert.three").style.display='none';
          sectorPassword.classList.remove("has-error");
          sectorPassword.classList.add("required");
          sectorPassword.classList.remove("blockBnt"); 
    }
    activButton();
  }, 2000)
}
 
phone.onkeyup=function() {
  setTimeout(  function() {


    if(/^\+(380)\d{9}|^$/.test(phone.value)) {
       document.querySelector(".alert.five").style.display='none';
       sectorPhone.classList.remove("has-error");
        sectorPhone.classList.remove("blockBnt");
    } else {
       sectorPhone.classList.add("has-error");
       sectorPhone.classList.add("blockBnt");
       document.querySelector(".alert.five").style.display='block';
    }
    activButton();
  }, 1000)
}
  
    
checkElem.onchange=function() {
    if(checkElem.checked == false) {
    checkElem.classList.add("blockBnt");
    }else{
    checkElem.classList.remove("blockBnt");
    }
    activButton();
}



function activButton() {
    var canSentForm= document.getElementsByClassName('blockBnt');
    if(canSentForm.length) {
      btn.disabled = true;
      btn.classList.add("disabled");
    } else {
      btn.disabled = false;
       btn.classList.remove("disabled");
    }
}

onload=function() {
  var canSentForm= document.getElementsByClassName('blockBnt');
    if(canSentForm.length) {
      btn.disabled = true;
      btn.classList.add("disabled");
    }
}





