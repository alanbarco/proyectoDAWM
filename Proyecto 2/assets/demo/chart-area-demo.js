// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//Cargar Datos
let arrEquipos = [];
const counts = {};
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
            arrEquipos.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            claves = Object.keys(counts);
            cantidad = Object.values(counts);
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

        }).catch(console.error);



