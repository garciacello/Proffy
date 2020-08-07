//Procurar o botao
document.querySelector("#add-time")
//Quando clicar
.addEventListener('click', cloneField) 

//Executar uma acao
function cloneField() {

    //Duplicar os campos. QUe campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campor
        const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar 
       fields.forEach(function(field){

           //pegar o field do momento e impa ele
           field.value=""
       })

    //colocar na pagina: onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)

}