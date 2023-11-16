document.addEventListener("DOMContentLoaded", function () {
    // Datos de habilidades
    var datosLenguajes = {
        labels: ['C', 'Python', 'HTML', 'CSS'],
        datasets: [{
            data: [4, 3, 2, 2], // Puedes ajustar estos valores según sea necesario
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 128, 0, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor:['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 128, 0, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth:1
        }]
    };

    var datosMSOffice = {
        labels: ['Excel', 'Word', 'PowerPoint'],
        datasets: [{
            data: [4, 5, 3], // Puedes ajustar estos valores según sea necesario
            backgroundColor: ['rgba(99, 255, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 128, 0, 0.2)'],
            borderColor:['rgba(99, 255, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 128, 0, 1)'],
            borderWidth:1
        }]
    };

    var datosIdiomas = {
        labels: ['Inglés', 'Portugués'],
        datasets: [{
            data: [4, 3], // Puedes ajustar estos valores según sea necesario
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 0, 0, 0.2)'],
            borderColor:['rgba(54, 162, 235, 1)', 'rgba(255, 0, 0, 1)'],
            borderWidth:1
        }]
    };

    // Configuración común para todos los gráficos
    var config = {
        type: 'bar',
        options: {
            responsive: true,
            legend: {
                display: false,
            },
        },
    };

    // Dibujar gráficos
    var ctxLenguajes = document.getElementById('graficoLenguajes').getContext('2d');
    new Chart(ctxLenguajes, Object.assign({}, config, { data: datosLenguajes }));

    var ctxMSOffice = document.getElementById('graficoMSOffice').getContext('2d');
    new Chart(ctxMSOffice, Object.assign({}, config, { data: datosMSOffice }));

    var ctxIdiomas = document.getElementById('graficoIdiomas').getContext('2d');
    new Chart(ctxIdiomas, Object.assign({}, config, { data: datosIdiomas }));
});