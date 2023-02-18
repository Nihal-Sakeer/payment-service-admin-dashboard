(function ($) {
  "use strict";

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });

  // APR Chart
  var ctx1 = $("#APR").get(0).getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Income",
          data: [15, 30, 55, 65, 60, 80, 95],
          backgroundColor: "rgba(74, 92, 199, 1)",
        },
        {
          label: "Savings",
          data: [8, 35, 40, 60, 70, 55, 75],
          backgroundColor: "rgba(74, 92, 199, 0.5)",
        },
        {
          label: "Expenditure",
          data: [12, 25, 45, 55, 65, 70, 60],
          backgroundColor: "rgba(74, 92, 199, 0.3)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    },
  });

  // income and expenditure Chart
  var ctx2 = $("#Inc-Exp").get(0).getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      datasets: [
        {
          label: "Expenditure",
          data: [15, 30, 55, 45, 70, 65, 85],
          backgroundColor: "rgba(74, 92, 199, 1)",
          fill: true,
        },
        {
          label: "Income",
          data: [99, 135, 170, 130, 190, 180, 270],
          backgroundColor: "rgba(74, 92, 199, 0.3)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    },
  });
})(jQuery);
