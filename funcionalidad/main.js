/* Capturamos los nodos del menú y creamos su evento click para saber que formulario mostrar
cuando ocurre el evento load sobre el objeto window */

window.addEventListener("load",(()=>{

let nav = document.getElementById("navegation");
    let nodes = nav.childNodes;
nodes[1].addEventListener("click",(()=>{loadPage("logica/loadData.php?sector=Familias");}));
nodes[3].addEventListener("click",(()=>{loadPage("logica/loadData.php?sector=Alumnos");}));
nodes[5].addEventListener("click",(()=>{loadPage("logica/loadData.php?sector=Profesores");}));
nodes[7].addEventListener("click",(()=>{resume();}));

}));


/*Genera el contenido, controlando a que sector va dirigido.
Aumenta el ancho de la cabecera y del contenedor principal. Luego, crea el contenedor del
formulario y su título. Crea tantas etiquetas <li> como preguntas tenga el 
formulario. Posteriormente, añade a cada una cinco inputs. Todo es añadido a su 
correspondiente padre y se llama a la función rates(). Al final, obtine el id y el servicio
de cada pregunta, para poder insertarlo más tarde.*/

function createQuest(json){

clearDOM();

let header = document.getElementsByTagName("header");
let main = document.getElementsByTagName("main");

header[0].setAttribute("class","sizeTwo");
main[0].setAttribute("class","sizeTwo");

    let containerAll = document.getElementById("container");

    let containerForm = document.createElement("div");
        containerForm.setAttribute("id","containerForm");

        let h3 = document.createElement('h3');
            h3.setAttribute("style","text-aling:center; margin-bottom:20px");
            h3.appendChild(document.createTextNode(`Preguntas destinadas a ${json['sector']}`));
        containerForm.appendChild(h3);

    let ol = document.createElement("ol");
        ol.setAttribute("id","questions");
    
    let seed = 0;

    let jsonSize = Object.keys(json).length;
    let size = parseInt(jsonSize - 1);

    for (i in json){
        if (i <= size){
            let li = document.createElement("li");
                li.appendChild(document.createTextNode( seed+1 + '. ' + json[i].pregunta));
                seed++;

            for (let j=0; j < 5; j++){
                    
                let checkbox = document.createElement("input");
                    checkbox.setAttribute("name","question"+seed+"[]");
                    checkbox.setAttribute("multiple","");
                if (j == 0){
                    checkbox.setAttribute("checked","");
                }
                            
                let label = document.createElement("label");
                        label.setAttribute("class","labelInput");
                        checkbox.setAttribute("class","rate");
                        checkbox.setAttribute("style","margin-left:10px");
                        checkbox.setAttribute("type","checkbox");
                    label.appendChild(checkbox);    
                    li.appendChild(label);
            }
            
            ol.appendChild(li);

        }        

    }

        let buttonSubmit = document.createElement("button");
            buttonSubmit.setAttribute("class","buttonSubmit");
            buttonSubmit.appendChild(document.createTextNode("Enviar"));

        let buttonCancel = document.createElement("button");
            buttonCancel.setAttribute("class","buttonSubmit");
            buttonCancel.setAttribute("id","buttonCancel");
            buttonCancel.appendChild(document.createTextNode("Cancelar"));

    containerForm.appendChild(ol);

    containerAll.appendChild(containerForm);
    
    containerAll.appendChild(buttonSubmit);

    containerAll.appendChild(buttonCancel);

    buttons(json['sector']);

    rates();
    
    let arrayIdQuestion = new Array();

    for (let y = 0; y < size; y++)
    {   

        arrayIdQuestion[y] = json[y].id;
           
    }

    //arrayIdService[arrayIdService.length]=json['sector'];

    document.getElementsByClassName("buttonSubmit")[0].addEventListener("click",(()=>{rateCount(arrayIdQuestion)}));
    document.getElementById("buttonCancel").addEventListener("click",(()=>{ sector="Cancelar"; buttons(sector)}));

}


/* Desactiva y activa los botones del menú. En el caso de ser el botón 'Cancelar',
devuelve la página a su estado inicial */

function buttons(sector){
let nav = document.getElementById("navegation");
    let nodes = nav.childNodes;

  if (sector == "Familias"){
        nodes[1].removeAttribute("disabled");
        nodes[3].setAttribute("disabled","true");
        nodes[5].setAttribute("disabled","true");
        nodes[7].setAttribute("disabled","true");

  }else if (sector == "Alumnos"){
        nodes[1].setAttribute("disabled","true");
        nodes[3].removeAttribute("disabled");
        nodes[5].setAttribute("disabled","true");
        nodes[7].setAttribute("disabled","true");

  }else if (sector == "Profesores"){
        nodes[1].setAttribute("disabled","true");
        nodes[3].setAttribute("disabled","true");
        nodes[5].removeAttribute("disabled");
        nodes[7].setAttribute("disabled","true");

  }else if (sector == "Cancelar"){
        nodes[1].removeAttribute("disabled");
        nodes[3].removeAttribute("disabled");
        nodes[5].removeAttribute("disabled");
        nodes[7].removeAttribute("disabled");

        clearDOM();
        
        let header = document.getElementsByTagName("header");
        let main = document.getElementsByTagName("main");

            let section = document.getElementById("container");

                let parraf = document.createElement("p");
                parraf.appendChild(document.createTextNode("¡Gracias por querer compartir tu opinión! - Selecciona tu sector"));
            
            section.appendChild(parraf);

        header[0].setAttribute("class","sizeOne");
        main[0].setAttribute("class","sizeOne");
  
    }else if (sector == "Resume"){
        nodes[1].removeAttribute("disabled");
        nodes[3].removeAttribute("disabled");
        nodes[5].removeAttribute("disabled");
        nodes[7].removeAttribute("disabled");
    } 

}


/*Controla las estrellas que se han de marcar y las que no. Primero obtenemos todos
los inputs. Posteriormente, usando el limite de inputs por pregunta, com-
prueba cual ha sido marcado. Borrando los siguientes y marcando los
anteriores.*/ 

function rates(){

let rates = document.getElementsByClassName("rate");

    for(let n = 0; n < rates.length; n++){
        rates[n].addEventListener('click', ()=>{
            
            let limits = new Array(4,9,14,19,24,29);

            for(let l = 0; l < limits.length; l++){
                if(n == limits[l]){

                    rates[n - 1].checked = true;
                    rates[n - 2].checked = true;
                    rates[n - 3].checked = true;
                    rates[n - 4].checked = true;

                }else if(n == limits[l] - 1){

                    rates[n].checked = true;
                    rates[n - 1].checked = true;
                    rates[n - 2].checked = true;
                    rates[n - 3].checked = true;
                    rates[n + 1].checked = false;

                }else if(n == limits[l] - 2){

                    rates[n].checked = true;
                    rates[n - 1].checked = true;
                    rates[n - 2].checked = true;
                    rates[n + 1].checked = false;
                    rates[n + 2].checked = false;

                }else if(n == limits[l] - 3){

                    rates[n].checked = true;
                    rates[n - 1].checked = true;
                    rates[n + 1].checked = false;
                    rates[n + 2].checked = false;
                    rates[n + 3].checked = false;

                }else if(n == limits[l] - 4){

                    rates[n].checked = true;
                    rates[n + 1].checked = false;
                    rates[n + 2].checked = false;
                    rates[n + 3].checked = false;
                    rates[n + 4].checked = false;

                }
            }
        });
    }
}


/* Elimina todos los hijos de section, que es donde se dispone la mayoría
del contenido. Si existe el elemento con id 'containerResume'. Lo elimina junto
a su header */

function clearDOM(){

    if (document.getElementById("containerResume")){
            let main = document.getElementById("main");
            for (let j = 0; j < 2; j++){
            let nodesMain = main.lastChild;
            main.removeChild(nodesMain);
            }
    }
    
    let containerAll = document.getElementById("container");
    let nodesAll = containerAll.childNodes;

    for (let i = 0; i < nodesAll.length;i=0){
        nodesAll[i].parentNode.removeChild(nodesAll[i]);
    }
}


/*Carga la información del resumen. Llama a clearDOM que elimina todos los elementos
del contenedor principal. Crea un nuevo contenedor, con su cabecera y sus divs. Estos 
últimos, contienen la información de los resultados de las encuestas.*/ 

function init(json){

clearDOM();

let header = document.getElementsByTagName("header");
let main = document.getElementsByTagName("main");

header[0].setAttribute("class","sizeTwo");
main[0].setAttribute("class","sizeTwo");

    let h2 = document.createElement('h2');
    h2.setAttribute("style","text-aling:center; margin-bottom:20px");
    h2.appendChild(document.createTextNode("Resumen sobre las encuestas"));

main[0].appendChild(h2);


    let containerForm = document.createElement("div");
    containerForm.setAttribute("id","containerResume");

        let articles = document.createElement('article');
        articles.setAttribute("id","articlesResume");

            let familyDiv = document.createElement('div');
            familyDiv.setAttribute("class","resumeDivs");

                let headerFamily = document.createElement("h3");
                headerFamily.appendChild(document.createTextNode("Familias"));

                let parraf = document.createElement("p");
                    parraf.appendChild(document.createTextNode(`Media de las notas en instalaciones: ${json[0]}`));
                    
                let parraf2 = document.createElement("p");
                parraf2.appendChild(document.createTextNode(`Media de las notas en recursos: ${json[1]}`));

                let parraf3 = document.createElement("p");
                parraf3.appendChild(document.createTextNode(`Media de las notas en oferta educativa: ${json[2]}`));
        
            familyDiv.appendChild(headerFamily);
            familyDiv.appendChild(parraf);
            familyDiv.appendChild(parraf2);
            familyDiv.appendChild(parraf3);
        
        articles.appendChild(familyDiv);


            let studentsDiv = document.createElement('div');
            studentsDiv.setAttribute("class","resumeDivs");

                let headerStudents = document.createElement("h3");
                headerStudents.appendChild(document.createTextNode("Alumnos"));

                let parraf4 = document.createElement("p");
                    parraf4.appendChild(document.createTextNode(`Media de las notas en instalaciones: ${json[3]}`));
                    
                let parraf5 = document.createElement("p");
                parraf5.appendChild(document.createTextNode(`Media de las notas en recursos: ${json[4]}`));

                let parraf6 = document.createElement("p");
                parraf6.appendChild(document.createTextNode(`Media de las notas en oferta educativa: ${json[5]}`));
        
            studentsDiv.appendChild(headerStudents);
            studentsDiv.appendChild(parraf4);
            studentsDiv.appendChild(parraf5);
            studentsDiv.appendChild(parraf6);
    
        articles.appendChild(studentsDiv);

               let teachersDiv = document.createElement('div');
               teachersDiv.setAttribute("class","resumeDivs");

                let headerTeachers = document.createElement("h3");
                headerTeachers.appendChild(document.createTextNode("Profesores"));

                let parraf7 = document.createElement("p");
                    parraf7.appendChild(document.createTextNode(`Media de las notas en instalaciones: ${json[6]}`));
                    
                let parraf8 = document.createElement("p");
                parraf8.appendChild(document.createTextNode(`Media de las notas en recursos: ${json[7]}`));

                let parraf9 = document.createElement("p");
                parraf9.appendChild(document.createTextNode(`Media de las notas en oferta educativa: ${json[8]}`));
        
            teachersDiv.appendChild(headerTeachers);
            teachersDiv.appendChild(parraf7);
            teachersDiv.appendChild(parraf8);
            teachersDiv.appendChild(parraf9);

        articles.appendChild(teachersDiv);

    containerForm.appendChild(articles);

main[0].appendChild(containerForm);

}


/* Cuenta las estrellas marcadas por cada pregunta para mandarlas a insertar, junto a
el id y el servicio de cada una de las preguntas.*/

function rateCount(arrayIdQuestion){
    let inputs = document.getElementsByTagName("input");

    let answers = [0,0,0,0,0,0];

    for (let i = 0; i < inputs.length; i++)
    {
        if(inputs[i].name == "question1[]" && inputs[i].checked){
            answers[0]++;
        }else if(inputs[i].name == "question2[]" && inputs[i].checked){
            answers[1]++;
        }else if(inputs[i].name == "question3[]" && inputs[i].checked){
            answers[2]++;
        }else if(inputs[i].name == "question4[]" && inputs[i].checked){
            answers[3]++;
        }else if(inputs[i].name == "question5[]" && inputs[i].checked){
            answers[4]++;
        }else if (inputs[i].name == "question6[]" && inputs[i].checked){
            answers[5]++;
        }
    }

    reply(answers,arrayIdQuestion);
}