// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//Cargar Datos
let arrEquipos = [];
let counts = {};
let claves =[];
let cantidad = [];
fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            
            for(let elemento of datos){
                let info_equipo = elemento['team'];
                let equipo = info_equipo['full_name'];
                arrEquipos.push(equipo);
            }            
            let select = document.querySelector('div.selector > select');
            let arrConferencias=[];
            for(let elemento of datos){
                let info_equipo = elemento['team'];
                let conferencia = info_equipo['conference']
                if(arrConferencias.indexOf(conferencia) == -1){
                    arrConferencias.push(conferencia);
                }
            }     
            arrEquipos.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            claves = Object.keys(counts);
            cantidad = Object.values(counts);
            for(let conferencia of arrConferencias){
              let plantilla = `<option value= "${conferencia}">${conferencia}</option>`
              select.innerHTML += plantilla;
            }
          var ctx = document.getElementById("myAreaChart");
          var areaChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: claves,
            datasets: [{
              label: "Sessions",
              lineTension: 0.3,
              backgroundColor: "rgba(2,117,216,0.2)",
              borderColor: "rgba(2,117,216,1)",
              pointRadius: 5,
              pointBackgroundColor: "rgba(2,117,216,1)",
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(2,117,216,1)",
              pointHitRadius: 50,
              pointBorderWidth: 2,
              data: cantidad,
            }],
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 20
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 10,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)",
                }
              }],
            },
            legend: {
              display: false
            }
          }
        });
        select.addEventListener("change", function(){
          arrEquipos2=[];
          claves2 = [];
          cantidad2 = [];
          counts ={};
          console.log(arrEquipos2, claves2,cantidad2)
          for(let elemento of datos){
              if(select.value == elemento['team']['conference']){
                var info_equipo = elemento['team'];
                var equipo = info_equipo['full_name'];
                arrEquipos2.push(equipo);
              }
            } 
            
            arrEquipos2.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            
            claves2 = Object.keys(counts);
            cantidad2 = Object.values(counts);
            console.log(arrEquipos2, counts)
            areaChart.data.labels = [];
            areaChart['data']['labels'] = claves2;
            areaChart['data']['datasets']['data'] = cantidad2;
            console.log(areaChart.data.labels)
        }) 
        }).catch(console.error);



