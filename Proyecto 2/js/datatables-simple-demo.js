window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    
    fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let tablebody = document.getElementById('tableBody');
            for(let elemento of datos){
                let id = elemento['id'];
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
        }).catch(console.error);
    if (datatablesSimple) {
        //new simpleDatatables.DataTable(datatablesSimple);
    }
});
