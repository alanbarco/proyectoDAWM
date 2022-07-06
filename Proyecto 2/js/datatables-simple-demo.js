window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let tableBody = document.getElementById('tableBody');
            let select = document.querySelector('div.selector > select');
            for(let elemento of datos){
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
                let plantillaEquipo = `<option value= "${equipo}">${equipo}</option>`
                select.innerHTML += plantillaEquipo;
            }            
            select.addEventListener("change",function(){
                tableBody.innerHTML = '';
                for(var elemento of datos){
                    if(select.value == "Seleccionar Equipo"){
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
