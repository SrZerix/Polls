//Comprobando si el navegador es Edge o no, crea el correspondiente objeto Ajax
function newAjax(){
if(window.XMLHttpRequest) {
  objetoAjax = new XMLHttpRequest();
} else{
  objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
}
  return objetoAjax;
}

//Obtiene las preguntas de la BD, dependiendo del sector (pagina).
function loadPage(pagina) {
let objetoAjax = newAjax();
    objetoAjax.open("GET", pagina, true);
    objetoAjax.send();

    objetoAjax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);
        createQuest(json);
      }
    };
}

//Obtiene la información introducida por el usuario para ser insertada en la BD
function reply(answers,arrayIdQuestion){
  let objetoAjax = newAjax();
      objetoAjax.open("POST", `logica/reply.php?answers=${answers}&arrayIdQuestion=${arrayIdQuestion}`, true);
      objetoAjax.send();
      
    objetoAjax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resume();
          sector = "Resume";
        buttons(sector); 
      }
    };   
}

//Devuelve los datos de resumen
function resume(){
  let objetoAjax = newAjax();
      objetoAjax.open("GET", "logica/resume.php", true);
      objetoAjax.send();
      
    objetoAjax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);
        init(json);
      }
    }; 
}