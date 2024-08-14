var erase = document.getElementById("borrar");
erase.addEventListener('click', function (e) {
  document.getElementById("outputText") = "";
  document.getElementById("inputText") = "";
});



/*<!--
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"       
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
-->*/

var textarea = document.getElementById("inputText");
var cryptar = document.getElementById("encriptar");
var desencryptar = document.getElementById("desencriptar");


cryptar.addEventListener('click', function (e) {
  // Seleccionando el texto
  // alert(textarea.value);
  var frase1 = textarea.value;
  var frase2 = "";

  for (const element of frase1) {
    if (element == "a") {
      frase2 = frase2 + "ai";
    } else if (element == "e") {
      frase2 = frase2 + "enter";
    } else if (element == "i") {
      frase2 = frase2 + "imes";
    } else if (element == "o") {
      frase2 = frase2 + "ober";
    } else if (element == "u") {
      frase2 = frase2 + "ufat";
    } else {
      frase2 = frase2 + element;
    }
    console.log(frase2)
  }
  document.getElementById("outputText").innerHTML = frase2;
  //alert(frase2)

  // Debo tomar la frase que sea, detectar cada palabra,luego cada letra, compararla con mis condiciones y luego cambiarlas  la condición dada, después ese resultado mostrarlo en la segunda caja de texto
});

desencryptar.addEventListener('click', function (e) {
  // Seleccionando el texto
  // alert(textarea.value);
  var frase3 = textarea.value;
  var frase4 = frase3;
  var cadena = ["ai", "enter", "imes", "ober", "ufat"];
  var prueba = true;

  while (prueba == true) {
    console.log(prueba);
    frase4 = frase4.replace("ai", "a");
    frase4 = frase4.replace("enter", "e");
    frase4 = frase4.replace("imes", "i");
    frase4 = frase4.replace("ober", "o");
    frase4 = frase4.replace("ufat", "u");
    console.log(prueba);
    if (frase4.includes("ai")) {
      continue;
    } else if (frase4.includes("enter")) {
      continue;
    } else if (frase4.includes("imes")) {
      continue;
    } else if (frase4.includes("ober")) {
      continue;
    } else if (frase4.includes("ufat")) {
      continue;
    } else {
      prueba = false;
    }

  }
  console.log(prueba)
  document.getElementById("outputText").innerHTML = frase4;
  //alert(frase2)

  // Debo tomar la frase que sea, detectar cada palabra,luego cada letra, compararla con mis condiciones y luego cambiarlas  la condición dada, después ese resultado mostrarlo en la segunda caja de texto
});
var textsalida = document.getElementById("outputText");

function myFunction() {
  var copyText = document.getElementById("outputText");
  var copyar = document.getElementById("copia");
  var respuesta = document.getElementById("copiarResp");



  try {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    var exito = navigator.clipboard.writeText(copyText.value);

    if (exito) respuesta.innerHTML = 'Copiado!';
    else respuesta.innerHTML = 'No se pudo copiar!';
  } catch (err) {
    respuesta.innerHTML = 'Navegador no soportado!';
  }
};

/*            copyar.addEventListener('click', function(e) {
    // Seleccionando el texto
    textsalida.select(); 
    try {
        // Copiando el texto seleccionado
        var exito = document.execCommand('copy');
  
        if(exito) respuesta.innerHTML = 'Copiado!';
        else respuesta.innerHTML = 'No se pudo copiar!';
    } catch (err) {
        respuesta.innerHTML = 'Navegador no soportado!';
    }
 });*/
