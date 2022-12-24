let encryptBtn = document.querySelector("#encrypt-btn");
let msgToCryptTextArea = document.querySelector("#msgtocrypt");



function welcomeChecker() {
    let msgSection = document.querySelector("#encrypted-msg");
    let welcomeMsg = document.querySelector('#welcome-msg')

    if(msgSection.childElementCount != 0) {
        welcomeMsg.style.display = "none";
        msgSection.style.display = "flex";
        msgSection.style.flexDirection = "column"
    } else {
        msgSection.style.display = "none";
        welcomeMsg.style.display = "flex";
    }
}

welcomeChecker();


function encrypt(msg) {
  const letters = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let encryptedMsg = "";

  for (let letter of msg) {
    if (letters[letter]) {
      encryptedMsg += letters[letter];
    } else {
      encryptedMsg += letter;
    }
  }

  return encryptedMsg;
}

function generarBotones() {
  let newMsgAction = document.createElement("div");
  newMsgAction.classList.add("new-msg-action");

  let newMsgDecryptBtn = document.createElement("button");
  let newMsgCopyBtn = document.createElement("button");
  let newMsgDeleteBtn = document.createElement("button");

  let copyIcon = document.createElement("img");
  let deleteIcon = document.createElement("img");
  let encryptIcon = document.createElement("img");
  let decryptIcon = document.createElement("img");
  encryptIcon.style.display = "none";

  copyIcon.src = "img/icons/copy-icon.svg";
  deleteIcon.src = "img/icons/delete-icon.svg";
  encryptIcon.src = "img/icons/unlock-icon.svg";
  decryptIcon.src = "img/icons/lock-icon.svg";

  newMsgDecryptBtn.classList.add("btn");
  newMsgCopyBtn.classList.add("btn");
  newMsgDeleteBtn.classList.add("btn");

  newMsgDecryptBtn.append(decryptIcon, encryptIcon);
  newMsgCopyBtn.appendChild(copyIcon);
  newMsgDeleteBtn.appendChild(deleteIcon);

  newMsgAction.append(newMsgDecryptBtn, newMsgCopyBtn, newMsgDeleteBtn);
  return newMsgAction;
}

function newEncryption() {

    //ESTA FUNCION ES LLAMADA POR EL BOTON ENCRYPT DEL FORMULARIO DEL INDEX
  // GENERA UN NUEVO CONTENEDOR CON UN MENSJAE Y BOTONES QUE ES AGREGADO AL DIV #encrypted-msg

  // VARIABLES NECESARIAS PARA LA FUNCION
  let encryptedMsgContainer = document.querySelector("#encrypted-msg"); // ES EL CONTENEDOR PADRE DE LOS MENSAJES

  // ACA CREAMOS EL DIV QUE VA A CONTENER LA FECHA ACTUAL, EL MENSAJE ENCRIPTADO, Y LOS RESPECTIVOS BOTONES;
  let newMsgContainer = document.createElement("div");

  let currentTime = new Date(Date.now()); //RECUPERAMOS LA FECHA ACTUAL
  let encryptedMsg = encrypt(msgToCryptTextArea.value); //RECUPERAMOS EL TEXTO ENCRIPTADO


  let msgTimeH1 = document.createElement("h1");
  msgTimeH1.innerText = currentTime
  .toUTCString()
  .slice(5, currentTime.toUTCString.length - 3);
  let encryptedMsgH1 = document.createElement("h1");
  encryptedMsgH1.innerText = encryptedMsg;

  newMsgContainer.append(msgTimeH1, encryptedMsgH1, generarBotones());
  newMsgContainer.classList.add("msg");

  encryptedMsgContainer.append(newMsgContainer);
  welcomeChecker();
}

encryptBtn.onclick =  () => newEncryption(msgToCryptTextArea.value);
