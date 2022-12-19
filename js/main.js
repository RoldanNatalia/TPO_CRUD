//VALIDACIÓN DE FORMULARIO
function validarForm(){
          
  let isCorrect=true;
  
  if(document.getElementById("InputName").value.length < 2 ){
    isCorrect = false;
    
  }
   
  if(document.getElementById("InputAsunto").value.length < 2 ){
    
    isCorrect = false;
    
  }

  if(document.getElementById("InputEmail1").value.length < 5 ){
      isCorrect = false;
  }
      if (isCorrect){

          alert("Los datos fueron enviados.");
         
          return true;

          } else {
            alert("Por favor, revise los datos ingresados!!");
            return false

          }
        
      return isCorrect;
    
}

function limpiarInput(){

  document.getElementById("InputName").value = "";
  document.getElementById("InputPais").value = "";
  document.getElementById("InputEmail1").value = "";
  document.getElementById("InputAsunto").value = "";
  document.getElementById("InputComentario").value = "";
  
}

//TERMINA VALIDACIÓN DE FORMULARIO
//LECTURA DE JSON

  let url = "https://sabin.pythonanywhere.com/playlists";
  let datos = [];
  fetch(url)
      .then(response => response.json())
      .then(data => {  // data contiene el JSON
          datos = data;
  
          let cad = `<div class="container">`;
  
          for (producto of datos) {
            cad += `
            <div class="tarjeta">
              <div class="tarjeta--img">
                  <img class="tarjeta--portada" src="${producto.image}" alt="${producto.name}">
              </div>
              <div class="cuerpo">
                  <h4 class="cuerpo--encabezado">${producto.name}</h4>
                  <p>${producto.preview}</p>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.spotify}">spotify</a></button>
                  <button class="cuerpo--button"><a class="cuerpo--enlace" href="${producto.youtube}">youtube</a></button>
              </div>
            </div>   
        `
            }
    
    
            cad += `</div>
             `;
    
    
    
            document.getElementById("tarjetas").innerHTML = cad;
    
    
        }
        );

//TERMINA LECTURA DEL JSON
//PROGRAMAS EL ENCABEZA Y PIE PARA CADA PAGINA HTML
        
//HEADER
const navVar = ` <nav class="nav">
                    <a class="nav--logo--link" href="./index.html"><img id="nav--logo" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/logoTrabajoGrupal.png?raw=true" alt="Logo"></a>
                    <button class="nav--toggle"><img class="nav--toggle--img" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/lista.png?raw=true" alt=""></button>
                    <ul class="nav--ul nav--ul--visible">
                      <li class="nav--ul--item"><a href="./index.html" class="nav--ul--link nav--link">HOME</a></li>
                      <li class="nav--ul--item"><a href="./newletter.html" class="nav--ul--link nav--link">music history</a></li>
                      <li class="nav--ul--item"><a href="./contact.html" class="nav--ul--link nav--link">contact</a></li>
                      <li class="nav--ul--item"><a href="./us.html" class="nav--ul--link nav--link">us</a></li>
                      <li ><a target="_blank" href="../Backend/crudIndex.html" class="nav--logo--link"><img id="nav--admin" src="https://i.ibb.co/CzV1CMj/59170.png" alt=""></a></li>
                    </ul>
                  </nav> ` ;

  document.getElementById("navVar").innerHTML = navVar;


  //TOGLE
  const navToggle = document.querySelector(".nav--toggle");
  const navUl = document.querySelector(".nav--ul");
  navToggle.addEventListener("click", () => { 
    navUl.classList.toggle("nav--ul--visible");});

const foot = `<div class="footer--contenedor--cuerpo">
<div class="footer_integrantes footer--contenedor">
    <br>
    <a href="https://www.buenosaires.gob.ar/educacion/codo-codo" class="textfooter footer_integrantes_link">Codo a Codo 4.0</a>
    <p class="textfooter">Sabina Fabrega - Julieta Cabrera - Natalia Roldán</p>
</div>
<div class="footer_redes footer--contenedor">
    <p class="textfooter footer_redes_p">Síguenos en las redes sociales:</p>
    <a class="footer_redes_link" target="_blank" href="https://es-la.facebook.com/"> <img class="footer_redes_logos" width="20px" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/facebook.png?raw=true" alt="facebook"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.instagram.com/"> <img class="footer_redes_logos" width="20px" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/instagram.png?raw=true" alt="Instagram"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.linkedin.com/"><img class="footer_redes_logos" width="20px" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/linkedin.png?raw=true" alt="linkedin"></a>
    <a class="footer_redes_link" target="_blank" href="https://www.youtube.com/"><img class="footer_redes_logos" width="20px" src="https://github.com/RoldanNatalia/TPO/blob/main/imagenes/youtube.png?raw=true" alt="youtube"></a>
</div>
</div>
<div id="footer--copy footer--contenedor--copy">
    <p class="textfooter footer--copy--text">Playlist - @Copyright 2022</p>
</div>`;

document.getElementById("pie").innerHTML = foot;

//FIN DE PIE Y ENCABEZADO AUTO
