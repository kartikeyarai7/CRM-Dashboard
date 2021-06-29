Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 10;
var ctx = document.getElementById("myChart").getContext("2d");

var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Direct", "Affiliate", "Sponsorship", "Email"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["rgb(51, 102, 204)", "rgb(255, 153, 0)", " rgb(220, 57, 18)", "rgb(16, 150, 24)"],
        borderColor: "transparent",
        data: [300.56, 135.18, 48.96, 154.02]
      }
    ]
  }
});
