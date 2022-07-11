window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    
    fetch("https://www.balldontlie.io/api/v1/teams")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let select = document.querySelector('div.selector > select');
            let equipo, abreviacion, ciudad, posicion, conferencia,division;
            for(var elemento of datos){
                equipo = elemento['full_name'];
                let plantillaEquipo = `<option value= "${equipo}">${equipo}</option>`;
                select.innerHTML += plantillaEquipo;
            }            
            select.addEventListener("change",function(){
                fetch("https://www.balldontlie.io/api/v1/teams")
                .then(response => response.json())
                .then(data => {
                    let datos = data['data'];

                    datos.filter(dato => dato['full_name'] == select.value).forEach(dato => {
                        let abreviacion = dato['abbreviation'];
                        document.getElementById('abreviacion').innerHTML = abreviacion;
                        let ciudad = dato['city'];
                        document.getElementById('ciudad').innerHTML = ciudad;
                        let confe = dato['conference'];
                        document.getElementById('conferencia').innerHTML = confe;
                        let div = dato['division'];
                        document.getElementById('division').innerHTML = div;
                      });
                }).catch(console.error);
                
                let docNombre = document.getElementById("nombreEquipo");
                docNombre.innerHTML=select.value;
            })
            
        }).catch(console.error);

        
});