// Fecha, declaramos primero las constantes o variables y luego la seteamos
const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day:'numeric'}); //toLocaleString() permite setear la fecha y hora, especificamos el idioma con es
    dateMonth.textContent = date.toLocaleString('es', {month:'short'});
    dateYear.textContent = date.toLocaleString('es', {year:'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday:'long'});
}

setDate();

//login//

var form =document.getElementById('registrarme');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var username = form.elements.usuario.value; //aqui los llamo//
    //var password = form.elements.contraseña.value;// porque no es muy seguro que me recuerde la contraseña hahah
    var rememberMe = form.elements.Recuerdame.checked;
    localStorage.setItem('username', username); //para guardar la info //
    //localStorage.setItem('password', password);//
    localStorage.setItem('rememberMe', rememberMe);
});

window.addEventListener('load', function() {
    form.elements.usuario.value = localStorage.getItem('username') || '';
    //form.elements.contraseña.value = localStorage.getItem('password') || ''; //
    form.elements.Recuerdame.checked = localStorage.getItem('rememberMe') === 'true';
});

// actividades a realiza hoy//

//ojo falta ver lo de eliminar y que se marquen como okey//

// llamar codigo //

// llamar codigo //
const forme= document.querySelector('form');
const input = document.getElementById('todoList');
const list = document.getElementById('listado');

forme.addEventListener('submit', function(event){
    event.preventDefault();
    const todoText = input.value.trim();

    if (todoText !== ''){
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            listItem.style.textDecoration = this.checked ? 'line-through' : 'none';
        });

        listItem.appendChild(checkbox);
        const label = document.createElement('label');
        label.textContent = todoText;
        listItem.appendChild(label);

        list.appendChild(listItem);
        input.value = '';
    }
});




