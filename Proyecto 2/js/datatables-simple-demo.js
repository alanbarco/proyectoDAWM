window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    function cargarTodo(elemento){
        let nombre = elemento['first_name'];
                let apellido = elemento['last_name'];
                let info_equipo = elemento['team'];
                let equipo = info_equipo['full_name'];
                let posicion = elemento['position'];
                let conferencia = info_equipo['conference']
                let plantilla = `<tr>
                                            <td>${nombre} ${apellido}</td>
                                            <td>${equipo}</td>
                                            <td>${posicion}</td>
                                            <td>${conferencia}</td>
                                </tr>`;
                tableBody.innerHTML += plantilla;
    }
    
    fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let tableBody = document.getElementById('tableBody');
            let select = document.querySelector('div.selector > select');
            let arrEquipos = [];
            for(var elemento of datos){
                let nombre = elemento['first_name'];
                let apellido = elemento['last_name'];
                let info_equipo = elemento['team'];
                let equipo = info_equipo['full_name'];
                arrEquipos.push(equipo);
                let posicion = elemento['position'];
                let conferencia = info_equipo['conference']
                let plantilla = `<tr>
                                            <td>${nombre} ${apellido}</td>
                                            <td>${equipo}</td>
                                            <td>${posicion}</td>
                                            <td>${conferencia}</td>
                                </tr>`;
                tableBody.innerHTML += plantilla;
            }            
            let equipos = arrEquipos.filter((item,index)=>{
                return arrEquipos.indexOf(item) === index;
              })
            for(let equipo of equipos){
                let plantillaEquipo = `<option value= "${equipo}">${equipo}</option>`;
                select.innerHTML += plantillaEquipo;
            }
            select.addEventListener("change",function(){
                tableBody.innerHTML = '';
                for(var elemento of datos){
                    if(select.value == "Seleccionar Equipo"){
                        cargarTodo(elemento);
                    }
                    else if(elemento['team']['full_name'] == select.value){
                        let nombre = elemento['first_name'];
                        let apellido = elemento['last_name'];
                        let info_equipo = elemento['team'];
                        let equipo = info_equipo['full_name'];
                        let posicion = elemento['position'];
                        let conferencia = info_equipo['conference']
                        let plantilla = `<tr>
                                                    <td>${nombre} ${apellido}</td>
                                                    <td>${equipo}</td>
                                                    <td>${posicion}</td>
                                                    <td>${conferencia}</td>
                                        </tr>`;
                        tableBody.innerHTML += plantilla;
                    }
                }
            })
            
        }).catch(console.error);

        
});
