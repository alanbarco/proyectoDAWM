// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
let clavesConf =[];
let conferencia = [];
let arrConferencias = [];
let cantidadConf=[];
const conf = {};
fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            for(let elemento of datos){
                let info_equipo = elemento['team'];
                conferencia = info_equipo['conference'];
                arrConferencias.push(conferencia);
            }            
            arrConferencias.forEach(function (x) { conf[x] = (conf[x] || 0) + 1; });
            clavesConf = Object.keys(conf);
            cantidadConf = Object.values(conf);
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: clavesConf,
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      backgroundColor: ['green','red'],
      data: cantidadConf,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 14,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
}).catch(console.error);
