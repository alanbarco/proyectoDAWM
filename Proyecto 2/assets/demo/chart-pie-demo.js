// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let clavesPos =[];
let posicion = [];
let arrPosicion = [];
let cantidadPos=[];
const pos = {};
fetch("https://www.balldontlie.io/api/v1/players")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            for(let elemento of datos){
              if(elemento['position'] == ''){
                elemento['position'] = 'Sin registro';
              }
              arrPosicion.push(elemento['position']);
            }            
            arrPosicion.forEach(function (x) { pos[x] = (pos[x] || 0) + 1; });
            clavesPos = Object.keys(pos);
            cantidadPos = Object.values(pos);
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: clavesPos,
    datasets: [{
      data: cantidadPos,
      backgroundColor: ['#FC2319', '#D99516', '#AFF024', '#72DBBA','#899AFA','#899A90','#FC8319'],
    }],
  },
});
}).catch(console.error);
