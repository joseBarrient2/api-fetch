const btnShow = document.getElementById('btn_mostrar');
const loader =  document.getElementById('loader');
const boxData = document.querySelector('.info');
const boxError = document.querySelector('.msj-error');

btnShow.addEventListener('click',obtenerUsruarios);

function obtenerUsruarios(e){
    //console.log('users');
    e.preventDefault();
    loader.classList.add('show');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data[0].id);
        imprimeDatos(data);
    })
    .catch((error)=>{
        //console.log(error);
        printError(error);
    })
}

function imprimeDatos(datos){
    
    for(info in datos){
        boxData.innerHTML += `
        <article class="item">${datos[info].id}</article>
        <article class="item">${datos[info].name}</article>
        <article class="item">${datos[info].username}</article>
        <article class="item">${datos[info].email}</article>
        <article class="item">${datos[info].address.street}</article>
        <article class="item">${datos[info].phone}</article>
        <article class="item">${datos[info].website}</article>
        <article class="item">${datos[info].company.name}</article>
        `;
    }
    btnShow.disabled = true; 
    loader.classList.remove('show');
}

function printError(err){
    //boxError.innerHTML = err;
    loader.classList.remove('show');
    console.log(err);
}