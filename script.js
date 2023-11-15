document.addEventListener("DOMContentLoaded", function () {
    // Datos de habilidades
    var habilidadesData = {
        labels: ["C", "Python", "HTML", "CSS", "Excel", "Word", "PowerPoint", "Ingles", "Portugues"],
        datasets: [{
            label: 'Nivel de habilidades',
            data: [4, 3, 2, 2, 5, 5, 3, 4, 3], // Niveles
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 128, 0, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(99, 255, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 128, 0, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 0, 0, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 128, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(99, 255, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 128, 0, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 0, 0, 1)'],
            borderWidth: 1
        }]
    };

    // Configuración del gráfico de habilidades
    var habilidadesConfig = {
        type: 'bar', // Cambiado a 'bar' para gráfico de barras verticales
        data: habilidadesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 6
                },
            }
        }
    };

    // Crear el gráfico de habilidades
    var habilidadesChart = new Chart(document.getElementById('habilidades'), habilidadesConfig);
});
