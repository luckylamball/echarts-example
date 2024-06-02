jQuery(function ($) {
  const chart1 = $("#chart1");
  const chart2 = $("#chart2");
  const chart3 = $("#chart3");
  const chart4 = $("#chart4");

  let myChart1 = echarts.init(chart1.get(0));
  let option = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
  option && myChart1.setOption(option);
  window.addEventListener("resize", function () {
    myChart1.resize({
      width: chart1.width(),
      heght: chart1.height(),
    });
  });

  let myChart2 = echarts.init(chart2.get(0));
  option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  option && myChart2.setOption(option);
  window.addEventListener("resize", function () {
    myChart2.resize({
      width: chart2.width(),
      heght: chart2.height(),
    });
  });

  let myChart3 = echarts.init(chart3.get(0));
  option = {
    title: {
      text: "World Population",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
    },
    series: [
      {
        name: "2011",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
      },
      {
        name: "2012",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807],
      },
    ],
  };
  option && myChart3.setOption(option);
  window.addEventListener("resize", function () {
    myChart3.resize({
      width: chart3.width(),
      heght: chart3.height(),
    });
  });

  let myChart4 = echarts.init(chart4.get(0));
  option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: "scatter",
      },
    ],
  };
  option && myChart4.setOption(option);
  window.addEventListener("resize", function () {
    myChart4.resize({
      width: chart4.width(),
      heght: chart4.height(),
    });
  });
  window.dispatchEvent(new Event("resize"));
});
