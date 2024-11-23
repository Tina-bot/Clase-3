document.addEventListener("DOMContentLoaded", () => {
    // Gráfico de Barras
    const barChart = new Chart(document.getElementById("barChart"), {
      type: "bar",
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            label: "Proveedores Activos",
            data: [10, 12, 8, 15, 14],
            backgroundColor: "#6AB9FF", // Celeste
            borderColor: "#4896E6",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    // Gráfico de Líneas
    const lineChart = new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            label: "Gastos Mensuales",
            data: [1200, 1900, 3000, 5000, 2400],
            backgroundColor: "rgba(255, 111, 145, 0.3)", // Rosa coral suave
            borderColor: "#FF6F91", // Rosa coral
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    // Gráfico de Pastel
    const pieChart = new Chart(document.getElementById("pieChart"), {
      type: "pie",
      data: {
        labels: ["Pagados", "Pendientes", "Atrasados"],
        datasets: [
          {
            data: [60, 25, 15],
            backgroundColor: ["#545EC2", "#FFC02F", "#FF8F91"], // Morado, amarillo, rosa coral
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  
    // Gráfico de Áreas Apiladas
    const stackedAreaChart = new Chart(document.getElementById("radarChart"), {
      type: "line",
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            label: "Ventas",
            data: [15, 20, 25, 30, 35],
            backgroundColor: "rgba(058, 193, 255, 0.5)", // Celeste suave
            borderColor: "#7AB7FF",
            fill: true,
          },
          {
            label: "Marketing",
            data: [10, 15, 20, 25, 30],
            backgroundColor: "rgba(255, 199, 95, 0.5)", // Amarillo cálido
            borderColor: "#FFC75F",
            fill: true,
          },
          {
            label: "Producción",
            data: [5, 10, 15, 20, 25],
            backgroundColor: "rgba(132, 94, 194, 0.5)", // Morado suave
            borderColor: "#845EC2",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Meses",
            },
          },
          y: {
            title: {
              display: true,
              text: "Monto Acumulado",
            },
            stacked: true,
            beginAtZero: true,
          },
        },
      },
    });
  });
  

  /*index*/
    document.addEventListener("DOMContentLoaded", () => {
            const ctx = document.getElementById("financialChart").getContext("2d");

            const data = {
                labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                datasets: [
                    {
                        label: "Ingresos ($)",
                        data: [120000, 150000, 170000, 130000, 200000, 200000],
                        backgroundColor: "rgba(74, 144, 226, 0.2)", // Azul claro
                        borderColor: "rgba(74, 144, 226, 1)", // Azul fuerte
                        borderWidth: 2,
                    },
                    {
                        label: "Gastos ($)",
                        data: [80000, 90000, 100000, 70000, 120000, 230000],
                        backgroundColor: "rgba(255, 99, 132, 0.2)", // Rojo claro
                        borderColor: "rgba(255, 99, 132, 1)", // Rojo fuerte
                        borderWidth: 2,
                    },
                ],
            };

            // Configuración del gráfico
            const config = {
                type: "line", // Tipo de gráfico
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true, // Muestra las leyendas
                            position: "top",
                        },
                        tooltip: {
                            enabled: true, // Activa el tooltip
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Meses",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Monto ($)",
                            },
                            beginAtZero: true,
                        },
                    },
                },
            };

            new Chart(ctx, config);
        });
