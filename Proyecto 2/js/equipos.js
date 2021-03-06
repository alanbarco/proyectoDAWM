window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    
    fetch("https://www.balldontlie.io/api/v1/teams")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let select = document.querySelector('div.selector > select');
            for(let elemento of datos){
                let id = elemento['id'];
                let nombre = elemento['full_name'];
                let plantilla = `<option value= "${id}">${nombre}</option>`;
                select.innerHTML += plantilla;
            }     
        }).catch(console.error);
    select.addEventListener("change",function(){
                fetch("https://www.balldontlie.io/api/v1/teams")
                .then(response => response.json())
                .then(data => {
                    let datos = data['data'];
                    datos.filter(dato => dato['id'] == select.value).forEach(dato => {
                        console.log(dato['id'])
                        document.getElementById("nombre").innerHTML = dato['full_name'];
                        document.getElementById("abrev").innerHTML = dato['abbreviation'];
                        document.getElementById('ciudad').innerHTML = dato['city'];
                        document.getElementById("conferencia").innerHTML = dato['conference'];
                        document.getElementById("division").innerHTML = dato['division'];
                         });
                }).catch(console.error);
                fetch("https://www.balldontlie.io/api/v1/games")
                .then(response => response.json())
                .then(data => {
                    document.getElementById('partidos').innerHTML = '';
                    let datos = data['data'];
                    datos.filter(dato => dato['home_team']['id'] == select.value || dato['visitor_team']['id'] == select.value ).forEach(dato => {
                       ;
                        let fecha = dato['date'];
                        let visitante = dato['visitor_team']['full_name'];
                        let local = dato['home_team']['full_name'];
                        let puntosVis = dato['visitor_team_score'];
                        let puntsLoc = dato['home_team_score'];
                        plantilla = ` <div class="card col" style="width: 8rem;">
                                        <div class="card-header">
                                        ${fecha}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><b>${visitante}</b>: ${puntosVis}</li>
                                        <li class="list-group-item"><b>${local}</b>: ${puntsLoc} </li>
                                        </ul>
                                    </div>`
                        document.getElementById('partidos').innerHTML +=plantilla;
                         });

                }).catch(console.error);
    });

    
        
});