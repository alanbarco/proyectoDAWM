window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    
    fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let select = document.querySelector('div.selector > select');
            for(let elemento of datos){
                let id = elemento['id'];
                let nombre = elemento['first_name'];
                let apellido = elemento['last_name'];
                let plantilla = `<option value= "${id}">${nombre} ${apellido}</option>`;
                select.innerHTML += plantilla;
            }          
        }).catch(console.error);
            select.addEventListener("change",function(){
                fetch("https://www.balldontlie.io/api/v1/players")
                .then(response => response.json())
                .then(data => {
                    let datos = data['data'];
                    //document.querySelector('div.datos').innerHTML='';
                    datos.filter(dato => dato['id'] == select.value).forEach(dato => {
                        console.log(dato['id'])
                        document.getElementById("nombre").innerHTML = dato['first_name'] +' '+ dato['last_name'];
                        document.getElementById("equipo").innerHTML = dato['team']['full_name'];
                        let ciudad = dato['team']['city'];
                        document.getElementById('ciudad').innerHTML = ciudad;
                        console.log(dato['position'])
                        document.getElementById("posicion").innerHTML = dato['position'];
                        if(dato['position'] == ''){
                            document.getElementById('posicion').innerHTML = '--';
                        }
                         });
                }).catch(console.error);
                
                
            });
            
        

        
});