

let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clearBut");
let markButton = document.getElementById("markAllBut");
let deleteButton = document.getElementById("deleteBut");

submitButton.addEventListener("click", function (event){
	event.preventDefault();
	var newElemento = document.getElementById('newElement').value;
	var lista = document.getElementById('listComplete');

	//console.log(elementos);
	document.getElementById('newElement').value = "";

	let currentListHTML = lista.innerHTML;
    lista.innerHTML = currentListHTML + '<input type="checkbox" name="newElemento"/>&nbsp;' + newElemento + '<br>';
});



clearButton.addEventListener("click", function (event){

	event.preventDefault();
    
    var elementos = document.getElementsByName("newElemento");
    for(var i = 0; i < elementos.length; i++){
        elementos[i].checked = false;
    }

});



markButton.addEventListener("click", function (event){
	event.preventDefault();
	var elementos = document.getElementsByName("newElemento");
    for(var i = 0; i < elementos.length; i++){
        elementos[i].checked = true;
    }

});

deleteButton.addEventListener("click", function (event){

	event.preventDefault();

    var elementos = document.getElementById("listComplete");
    elementos.innerHTML = "";    
});


