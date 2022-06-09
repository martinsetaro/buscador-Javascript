//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//muestra los resultados en pantalla
const resultado = document.querySelector('#resultado');

//implementando años
const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda

let datosBusqueda = {
    marca : '',
    year :'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision :'',
    color:''
}






//Inciar documento y eventos agrupados

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);//muestra los automoviles
    limpiarHTML();


    //llena option años
    llenarSelect()
})

//eventos para los select

marca.addEventListener('change', (e)=>{
  datosBusqueda.marca = e.target.value;
  
  filtrarAuto();
  
})
year.addEventListener('change', (e)=>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
    
  })
  minimo.addEventListener('change', (e)=>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto()
    
  })
  maximo.addEventListener('change', (e)=>{
    datosBusqueda.maximo = e.target.value;
   
    filtrarAuto()
    
  })
  puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = e.target.value;
    filtrarAuto()
    
  })
  transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()
    
  })
  color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto()
   
  })







//Funciones
function mostrarAutos(autos){

    limpiarHTML();// elimina el html para que no haya duplicado

 autos.forEach( auto => {
     const autoHTML = document.createElement('div')
     autoHTML.classList.add('itemAutos')
     const {marca,modelo,year,puertas,transmision,precio,color} = auto;

   resultado.innerHTML += `
   <div class="itemAutos">
   <h2>${modelo}</h2>
   <h4>${marca}</h4>
   <img src="https://img.freepik.com/vector-gratis/auto-logo_73313-24.jpg?w=2000" alt="img" title="img"/>
   <h3>${year}</h3>
   <span>$ ${precio}</span>
   <p>${puertas} Puertas</p>
   <p>Tipo Transmision: ${transmision}</p>
   <p>Color : ${color}</p>

   </div>
   `
     
   

 });
}

//limpiar html

function limpiarHTML (){
while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
}
}


//input select año

function llenarSelect(){

for(let i = max;i > min ; i--){ // imprime desde el año mas nuevo al mas viejo.
 
    const opcion=document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion)


}



}

//funcion que filtra en base a la busqueda

function filtrarAuto(){
    
    const resultado = autos.filter( filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    

    if(resultado.length){
        mostrarAutos(resultado)
    }
    else 
    {
        noResultado()
    }

}
function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta')
    
    resultado.innerHTML = `
             <div class="alerta">
             <img src="../img/error.png" alt="imgg" title="imgg"/>
             </div>
    `
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca
    }
    return auto;

}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === Number(year);//verificar como llega como numero o string para guardarlo en el objeto
        
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === Number(puertas);
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}


