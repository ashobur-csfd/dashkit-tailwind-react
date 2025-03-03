import { useEffect } from "react";
import ApexCharts from "apexcharts";

const useApexCharts = () => {
  // Define chart options and series
  const charts =  {
    /* Admin charts */
    revenueOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
      
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Revenue",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    enrollOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#FF4626"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Enroll",
          data: [33, 28, 15, 30, 11, 25, 10, 30, 5],
        },
      ],
    },
    courseOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
      
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Course",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    ratingOptions: {
      options: {
        chart: {
          type: "area",
          width: "100%",
          height: 70,
          sparkline: {
            enabled: true,
          },
      
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Rating",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    averageEnrollOptions: {
      options: {
        chart: {
          type: "area",
          height: 320,
          width: "100%",
          offsetX: -5,
          offsetY: 15,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        },
        yaxis: {
          min: 5,
          max: 90,
          tickAmount: 5,
          labels: {
            formatter: (val) => val + "k",
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "18%",
            endingShape: "rounded",
          },
        },
        grid: {
          borderColor: "#EEE",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          colors: ["#795DED", "#76D466"],
          width: 2.5,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.15,
            stops: [0, 60],
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: -30,
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#795DED", "#76D466"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 20,
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "k";
            },
          },
        },
      },
      series: [
        {
          name: "Regular paid course",
          data: [73, 49, 29, 56],
        },
        {
          name: "On sale course",
          data: [22, 39, 49, 73],
        },
      ],
    },
    catrgoryOneOptions: {
      options: {
        chart: {
          type: "area",
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#76D466"],
        stroke: {
          width: 1,
          curve: "straight",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "graphic",
          data: [5, 15, 10, 25, 28, 16, 18, 28, 30],
        },
      ],
    },
    learnActivity: {
      options: {
        chart: {
          type: "bar",
          height: 380,
          offsetX: -10,
          offsetY: 15,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "18%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#EEE",
        },
        stroke: {
          show: false,
        },
        xaxis: {
          categories: [
            "Design",
            "Marketing",
            "Business",
            "Web Dev",
            "Film & Video",
            "Productivity",
            "Crafts",
          ],
        },
        yaxis: {
          min: 0,
          max: 30,
          stepSize: 5,
          tickAmount: 6,
          labels: {
            formatter: (val) => val + "h",
          },
        },
        fill: {
          colors: ["#795DED", "#76D466"],
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: -30,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#795DED", "#76D466"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 20,
          },
        },
        tooltip: {
          y: {
            formatter: (val) => val + "h",
          },
        },
      },
      series: [
        {
          name: "Paid course",
          data: [25, 15, 25, 10, 8, 28, 30],
        },
        {
          name: "Free course",
          data: [13, 6, 25, 3, 2, 18, 8],
        },
      ],
    },

    /* Analytic page */
    conversionOneOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Revenue",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    conversionTwoOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#FF4626"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Enroll",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    conversionThreeOptions: {
      options: {
        chart: {
          type: "area",
          height: 70,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Course",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    analyticOverviewOptions: {
      options: {
        chart: {
          height: 400,
          width: "100%",
          stacked: true,
          toolbar: {
            show: false,
          },
          theme: {
            mode: "dark", // enables dark mode in ApexCharts
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Jan 2023").getTime(),
        },
        yaxis: {
          min: 5,
          max: 90,
          tickAmount: 5,
          decimalsInFloat: false,
          labels: {
            formatter: (val) => val + "k",
          },
        },
        grid: {
          borderColor: "#EEE",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          colors: ["none", "#795DED"],
          width: 2,
        },
        markers: {
          size: 5,
          colors: ["transparent", "#795DED"],
          strokeColors: "transparent",
          hover: {
            sizeOffset: 0,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#F2ECFE", "#795DED"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 10,
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "k";
            },
            title: {
              formatter: (sn) => "",
            },
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Total Visitor",
          type: "area",
          color: "#F2ECFE",
          data: [
            {
              x: "01-01-2023 GMT",
              y: 34,
            },
            {
              x: "01-05-2023 GMT",
              y: 70,
            },
            {
              x: "01-10-2023 GMT",
              y: 31,
            },
            {
              x: "01-15-2023 GMT",
              y: 60,
            },
            {
              x: "01-20-2023 GMT",
              y: 40,
            },
            {
              x: "01-25-2023 GMT",
              y: 80,
            },
            {
              x: "01-30-2023 GMT",
              y: 60,
            },
          ],
          zIndex: 300,
        },
        {
          name: "Impression",
          type: "line",
          data: [
            {
              x: "01-01-2023 GMT",
              y: 0,
            },
            {
              x: "01-05-2023 GMT",
              y: 60,
            },
            {
              x: "01-10-2023 GMT",
              y: 21,
            },
            {
              x: "01-15-2023 GMT",
              y: 50,
            },
            {
              x: "01-20-2023 GMT",
              y: 30,
            },
            {
              x: "01-25-2023 GMT",
              y: 70,
            },
            {
              x: "01-30-2023 GMT",
              y: 50,
            },
          ],
          zIndex: 100,
        },
      ],
    },
    activeUserOptions: {
      options: {
        chart: {
          height: "auto",
          // stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Jan 2024").getTime(),
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 4,
          decimalsInFloat: false,
          opposite: true,
          labels: {
            formatter: (val) => val + "%",
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
          curve: "straight",
        },
        legend: {
          show: true,
          formatter: function (seriesName, opts) {
            return [
              seriesName,
              opts.w.globals.series[opts.seriesIndex].slice(-1) + "%",
            ];
          },
          position: "top",
          horizontalAlign: "left",
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 5,
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "%";
            },
            title: {
              formatter: (sn) => "",
            },
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Desktop",
          type: "area",
          color: "#F2ECFE",
          data: [
            {
              x: "01-01-2024 GMT",
              y: 0,
            },
            {
              x: "01-05-2024 GMT",
              y: 25,
            },
            {
              x: "01-10-2024 GMT",
              y: 50,
            },
            {
              x: "01-15-2024 GMT",
              y: 70,
            },
            {
              x: "01-20-2024 GMT",
              y: 90,
            },
          ],
        },
        {
          name: "Mobile",
          type: "area",
          color: "#B39EF9",
          data: [
            {
              x: "01-01-2024 GMT",
              y: 0,
            },
            {
              x: "01-05-2024 GMT",
              y: 20,
            },
            {
              x: "01-10-2024 GMT",
              y: 30,
            },
            {
              x: "01-15-2024 GMT",
              y: 40,
            },
            {
              x: "01-20-2024 GMT",
              y: 50,
            },
          ],
        },
        {
          name: "Tablet",
          type: "area",
          color: "#795DED",
          data: [
            {
              x: "01-01-2024 GMT",
              y: 0,
            },
            {
              x: "01-05-2024 GMT",
              y: 10,
            },
            {
              x: "01-10-2024 GMT",
              y: 15,
            },
            {
              x: "01-15-2024 GMT",
              y: 20,
            },
            {
              x: "01-20-2024 GMT",
              y: 25,
            },
          ],
        },
      ],
    },
    browserSessionOptions: {
      options: {
        chart: {
          width: "100%",
          height: "auto",
          type: "pie",
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        labels: ["Chrome", "Mozilla", "Other"],
        colors: ["#795DED", "#B39EF9", "#F2ECFE"],
        legend: {
          position: "bottom",
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 10,
          },
        },
        theme: {
          monochrome: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            dataLabels: {
              offset: -10,
              minAngleToShowLabel: 10,
            },
          },
        },
        stroke: {
          show: false,
        },
      },
      series: [55, 40, 5],
    },
    viewPerminuteOptions: {
      options: {
        chart: {
          height: 150,
          type: "bar",
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        grid: {
          show: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: "80%",
            barHeight: "100%",
            dataLabels: {
              position: "top",
            },
            colors: {
              backgroundBarColors: ["#F2ECFE"],
              backgroundBarRadius: 10,
            },
          },
        },
        dataLabels: {
          enabled: false,
          offsetY: "100%",
          style: {
            fontSize: "12px",
            colors: ["#999999"],
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 5,
          decimalsInFloat: false,
          labels: {
            show: false,
            formatter: (val) => val + "k",
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "k";
            },
            title: {
              formatter: (sn) => "",
            },
          },
          marker: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "views per minute",
          data: [55, 30, 70, 45, 25, 30, 50, 82, 30],
          color: "#795DED",
        },
      ],
    },

    /* Online Course page */
    totalStudentOption: {
      options: {
        chart: {
          type: "area",
          height: 50,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#76D466"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
      },
      series: [
        {
          name: "Instructor",
          data: [5, 30, 10, 25, 11, 30, 15, 28, 33],
        },
      ],
    },
    averageCourseSellingOption: {
      options: {
        chart: {
          type: "bar",
          height: "360",
          offsetX: -10,
          offsetY: 20,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#EEE",
          strokeDashArray: 5,
        },
        stroke: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 5,
          max: 90,
          tickAmount: 5,
          labels: {
            formatter: (val) => val + "k",
          },
        },
        fill: {
          colors: ["#76D466", "#795DED"],
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: -30,
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#76D466", "#795DED"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 20,
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "k";
            },
          },
        },
      },
      series: [
        {
          name: "On sale course",
          data: [50, 20, 22, 50, 25, 20, 39, 45, 85, 75, 40, 60],
        },
        {
          name: "Regular paid course",
          data: [65, 50, 39, 75, 45, 58, 56, 55, 80, 30, 75, 45],
        },
      ],
    },
    learnActivityOption: {
      options: {
        chart: {
          type: "area",
          height: 340,
          offsetX: -10,
          offsetY: 20,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          categories: [
            "Design",
            "Marketing",
            "Business",
            "Web Dev.",
            "Film & Video",
            "Productivity",
            "Craft",
          ],
        },
        yaxis: {
          min: 0,
          max: 30,
          tickAmount: 6,
          labels: {
            formatter: (val) => val + "h",
          },
        },
        grid: {
          borderColor: "#EEE",
          strokeDashArray: 5,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#795DED", "#76D466"],
          width: 2,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.15,
            stops: [0, 60],
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: -30,
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#795DED", "#76D466"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 20,
          },
        },
        tooltip: {
          followCursor: true,
          y: {
            formatter: (val) => {
              return val + "h";
            },
          },
        },
      },
      series: [
        {
          name: "Paid Course",
          data: [5, 20, 10, 25, 10, 30, 10],
        },
        {
          name: "Free Course",
          data: [0, 25, 5, 20, 2, 25, 5],
        },
      ],
    },
    
    /* Ecommerce page */
    sellOverviewOption: {
      options: {
        chart: {
          type: "area",
          height: 340,
          offsetX: -10,
          offsetY: 20,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 0,
          max: 90,
          tickAmount: 5,
          labels: {
            formatter: (val) => val + "k",
          },
        },
        grid: {
          borderColor: "#EEE",
          strokeDashArray: 5,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#795DED", "#76D466"],
          width: 2,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.15,
            stops: [0, 60],
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: -30,
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            fillColors: ["#795DED", "#76D466"],
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 20,
          },
        },
        tooltip: {
          followCursor: true,
          y: {
            formatter: (val) => {
              return val + "h";
            },
          },
        },
      },
      series: [
        {
          name: "Revenue",
          data: [34, 70, 30, 60, 40, 80, 34, 70, 30, 60, 40, 80],
        },
        {
          name: "Orders",
          data: [0, 60, 21, 50, 30, 70, 5, 60, 21, 50, 30, 70],
        },
      ],
    },

    /* Project Manager Page */
    projectStatusOptions: {
      options: {
        chart: {
          type: "pie",
          height: 230,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {
              chart: {
                height: 180,
              },
            },
          },
          {
            breakpoint: 1536,
            options: {
              chart: {
                height: 230,
              },
            },
          },
        ],
        labels: ["Active Project", "Pending Project", "Review Project"],
        colors: ["#795DED", "#B39EF9", "#F2ECFE"],
        legend: {
          show: false,
          position: "bottom",
          offsetY: 0,
          markers: {
            width: 7,
            height: 7,
            radius: 99,
            offsetX: -3,
            offsetY: -1,
          },
          itemMargin: {
            horizontal: 10,
          },
        },
        theme: {
          monochrome: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            size: 1000,
          },
        },
        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
      },
      series: [70, 20, 10],
    },
    totalTaskOptions: {
      options: {
        chart: {
          type: "radialBar",
          width: "100%",
          height: 300,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {
              chart: {
                height: 200,
              },
            },
          },
          {
            breakpoint: 1536,
            options: {
              chart: {
                height: 300,
              },
            },
          },
        ],
        colors: ["#795DED", "#B39EF9", "#F2ECFE"],
        plotOptions: {
          radialBar: {
            inverseOrder: true,
            startAngle: -90,
            endAngle: 90,
            track: {
              startAngle: -90,
              endAngle: 90,
              background: "transparent",
              margin: -0.5,
            },
            dataLabels: {
              value: {
                fontFamily: "inherit",
                fontSize: "12px",
                color: "#555",
                offsetY: -30,
                formatter: function (val) {
                  return val + "%";
                },
              },
              name: {
                fontFamily: "inherit",
                fontSize: "12px",
                fontWeight: 400,
                color: "#555",
                offsetY: 5,
              },
              total: {
                show: true,
                label: "Average Task",
                fontFamily: "inherit",
                fontSize: "12px",
                color: "#555",
                fontWeight: 400,
                formatter: function (w) {
                  return (
                    w.globals.seriesTotals.reduce((a, b) => {
                      return a + b;
                    }, 0) /
                      w.globals.series.length +
                    "%"
                  );
                },
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Active task", "Pending task", "Reivew task"],
      },
      series: [80, 90, 100],
    },
    financeStatusOptions: {
      options: {
        chart: {
          type: "radialBar",
          height: 230,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        responsive: [
          {
            breakpoint: 1800,
            options: {
              chart: {
                height: 180,
              },
            },
          },
          {
            breakpoint: 1536,
            options: {
              chart: {
                height: 230,
              },
            },
          },
        ],
        colors: ["#795DED", "#66CC33", "#FFA305"],
        plotOptions: {
          radialBar: {
            track: {
              background: ["#795DED", "#66CC33", "#FFA305"],
              opacity: 0.1,
              margin: 6,
            },
            dataLabels: {
              showOn: "always",
              name: {
                fontSize: "14px",
                fontWeight: 500,
                offsetY: -2,
                show: true,
              },
              value: {
                show: true,
                fontSize: "12px",
                color: "#555",
                offsetY: 2,
                formatter: function (val) {
                  return val + "%";
                },
              },
            },
            barLabels: {
              enabled: false,
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Average", "Active", "Lowest"],
      },
      series: [90, 80, 70],
    },
    taskOverviewOptions: {
      options: {
        chart: {
          type: "bar",
          width: "100%",
          height: 400,
          toolbar: {
            show: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 15,
            columnWidth: 30,
            colors: {
              backgroundBarColors: ["#F9F6FF"],
              backgroundBarRadius: 10,
            },
          },
        },
        responsive: [
          {
            breakpoint: 640,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 5,
                  columnWidth: 10,
                },
              },
            },
          },
        ],
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#f3f3f3",
        },
        stroke: {
          show: false,
        },
        yaxis: {
          min: 0,
          max: 30,
          stepSize: 5,
          tickAmount: 6,
          labels: {
            formatter: (val) => val + "k",
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2024 GMT",
            "01/02/2024 GMT",
            "01/03/2024 GMT",
            "01/04/2024 GMT",
            "01/05/2024 GMT",
            "01/06/2024 GMT",
            "01/07/2024 GMT",
            "01/08/2024 GMT",
            "01/09/2024 GMT",
            "01/10/2024 GMT",
          ],
        },
        fill: {
          colors: ["#795DED"],
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "k";
            },
          },
        },
      },
      series: [
        {
          name: "Today",
          data: [25, 15, 25, 10, 8, 25, 10, 15, 5, 10],
        },
      ],
    },

    // UI Widgets Components
    widgetStackedColumn: {
      options:{
        chart: {
          type: "bar",
          height: 260,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FFA305", "#66CC33", "#795DED"],
        legend: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
            endingShape: "rounded",
          },
        },
        grid: {
          borderColor: "#EEE",
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 100,
          max: 1000,
          tickAmount: 5,
          labels: {
            formatter: (val) => val,
          },
        },
        fill: {
          opacity: 1,
        },
      },
      series: [
        {
          name: "PRODUCT A",
          data: [150, 180, 240, 270, 200, 180, 200, 220, 200, 230, 290, 200],
        },
        {
          name: "PRODUCT B",
          data: [200, 180, 240, 270, 200, 180, 200, 220, 200, 230, 290, 200],
        },
        {
          name: "PRODUCT C",
          data: [150, 180, 240, 270, 200, 180, 200, 220, 200, 230, 290, 200],
        },
      ],
    },
    pieDonutchart1: {
      options:{
        chart: {
          width: "100%",
          height: "100%",
          type: "donut",
        },
        legend: {
          show: false,
        },
        colors: ["#D9FF47", "#A57CFD", "#EAE1FF", "#FFEEE7"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "55%",
              background: "#fff",
              labels: {
                show: true,
                name: {
                  show: false,
                },
                value: {
                  show: true,
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#251F47",
                  offsetY: 7,
                  formatter: function (val) {
                    return val + "%";
                  },
                },
                total: {
                  show: true,
                  formatter: function (w) {
                    const seriesTotal = w.globals.seriesTotals.reduce(
                      (a, b) => a + b,
                      0
                    );
                    return seriesTotal + "%";
                  },
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 375,
            options: {
              chart: {
                width: "100%",
                height: "100%",
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },
      series: [20, 20, 20, 20],
    },
    doubleSplineArea: {
      options:{
        chart: {
          height: 300,
          type: "area",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 0,
          type: "solid",
        },
        grid: {
          borderColor: "#EEE",
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#9C84F4", "#F9D34D"],
          width: 2.5,
          dashArray: 0,
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 10,
          max: 100,
          tickAmount: 5,
          labels: {
            formatter: (val) => val + "%",
          },
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val + "%";
            },
          },
        },
      },
      series: [
        {
          name: "series1",
          data: [10, 25, 15, 30, 20, 40, 30, 60, 70, 50, 90, 100],
        },
        {
          name: "series2",
          data: [10, 20, 40, 20, 50, 40, 60, 40, 50, 80, 60, 90],
        },
      ],
    },
    widgetSplineArea: {
      options:{
        chart: {
          height: 300,
          type: "area",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.6,
          },
        },
        grid: {
          borderColor: "#EEE",
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#23C965"],
          width: 2.5,
          dashArray: 0,
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          min: 10,
          max: 100,
          tickAmount: 5,
          labels: {
            formatter: (val) => val + "%",
          },
        },
        tooltip: {
          x: {
            show: true,
          },
          y: {
            format: "dd MMM",
            formatter: (val) => {
              return val + "%";
            },
          },
        },
      },
      series: [
        {
          name: "series1",
          data: [10, 25, 20, 30, 20, 40, 30, 50, 40, 70, 60, 100],
        },
      ],
    },

    // payout history page
    totalBalanceOptions: {
      options:{
        chart: {
          type: "area",
          height: 80,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#FF4626"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 1440,
            options: {
              chart: {
                height: 45,
              },
            },
          },
        ],
      },
      series: [
        {
          name: "Balance",
          data: [33, 28, 15, 11, 25, 10, 30, 5],
        },
      ],
    },
    totalEarningOptions: {
      options:{
        chart: {
          type: "area",
          height: 80,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        colors: ["#76D466"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return "";
              },
            },
          },
          marker: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 1440,
            options: {
              chart: {
                height: 45,
              },
            },
          },
        ],
      },
      series: [
        {
          name: "Balance",
          data: [33, 28, 15, 11, 25, 10, 30, 5],
        },
      ],
    },

    // course Details
    courseEarningOptions: {
      options:{
        chart: {
          type: "area",
          height: 120,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Jan 2023").getTime(),
        },
        colors: ["#795DED"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
        tooltip: {
          marker: {
            show: false,
          },
          y: {
            formatter: (val) => {
              return val + "k";
            },
          },
        },
      },
      series: [
        {
          name: "",
          data: [
            {
              x: "01-01-2023 GMT",
              y: 5,
            },
            {
              x: "01-05-2023 GMT",
              y: 30,
            },
            {
              x: "01-10-2023 GMT",
              y: 10,
            },
            {
              x: "01-15-2023 GMT",
              y: 25,
            },
            {
              x: "01-20-2023 GMT",
              y: 11,
            },
            {
              x: "01-25-2023 GMT",
              y: 30,
            },
            {
              x: "01-30-2023 GMT",
              y: 15,
            },
            {
              x: "02-05-2023 GMT",
              y: 28,
            },
            {
              x: "02-10-2023 GMT",
              y: 10,
            },
          ],
        },
      ],
    },
    courseImpressionOptions: {
      options:{
        chart: {
          type: "area",
          height: 120,
          sparkline: {
            enabled: true,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Jan 2023").getTime(),
        },
        colors: ["#76D466"],
        stroke: {
          width: 1.2,
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          },
        },
        tooltip: {
          marker: {
            show: false,
          },
          y: {
            formatter: (val) => {
              return val + "k";
            },
          },
        },
      },
      series: [
        {
          name: "",
          data: [
            {
              x: "01-01-2023 GMT",
              y: 5,
            },
            {
              x: "01-05-2023 GMT",
              y: 30,
            },
            {
              x: "01-10-2023 GMT",
              y: 10,
            },
            {
              x: "01-15-2023 GMT",
              y: 25,
            },
            {
              x: "01-20-2023 GMT",
              y: 11,
            },
            {
              x: "01-25-2023 GMT",
              y: 30,
            },
            {
              x: "01-30-2023 GMT",
              y: 15,
            },
            {
              x: "02-05-2023 GMT",
              y: 28,
            },
            {
              x: "02-10-2023 GMT",
              y: 10,
            },
          ],
        },
      ],
    },

  };

  const renderChart = (chartId, chartConfig) => {
    const chartElement = document.querySelector(`#${chartId}`);
    if (chartElement) {
      const chart = new ApexCharts(chartElement, chartConfig.options);
      chart.render().catch(err => {
        console.error(`Error rendering chart ${chartId}:`, err);
      });
    }
  };

  useEffect(() => {
    if(renderChart){
    // admin page 
    renderChart("admin-total-revenue-chart", charts.revenueOptions);
    renderChart("total-enrollment-chart", charts.enrollOptions);
    renderChart("total-course-chart", charts.courseOptions);
    renderChart("average-rating-chart", charts.ratingOptions);
    renderChart("average-enrollment-chart", charts.averageEnrollOptions);
    renderChart("category-one", charts.catrgoryOneOptions);
    renderChart("learn-activity-chart", charts.learnActivity);
    
    // analytic page
    renderChart("conversionOne", charts.conversionOneOptions);
    renderChart("conversionTwo", charts.conversionTwoOptions);
    renderChart("conversionThree", charts.conversionThreeOptions);
    renderChart("analytic-overview-chart", charts.analyticOverviewOptions);
    renderChart("active-user-chart", charts.activeUserOptions);
    renderChart("browser-session-chart", charts.browserSessionOptions);
    renderChart("views-browser-perminute-chart", charts.viewPerminuteOptions);
    
    // Online Course page
    renderChart("total-student-chart", charts.totalStudentOption);
    renderChart("average-course-selling-chart", charts.averageCourseSellingOption);
    renderChart("learn-activity-chart", charts.learnActivityOption);

    // Ecommerce page
    renderChart("sells-overview-chart", charts.sellOverviewOption);

    // Project Manager page
    renderChart("projectStatus", charts.projectStatusOptions);
    renderChart("total-task-chart", charts.totalTaskOptions);
    renderChart("taskOverview", charts.taskOverviewOptions);

    // Ui Widgets Components
    renderChart("widgetStackedColumn", charts.widgetStackedColumn);
    renderChart("pieDonutchart1", charts.pieDonutchart1);
    renderChart("doubleSplineArea", charts.doubleSplineArea);
    renderChart("widgetSplineArea", charts.widgetSplineArea);
    
    // payout History page
    renderChart("totalBalance", charts.totalBalanceOptions);
    renderChart("totalEarning", charts.totalEarningOptions);
    
    // course detail page
    renderChart("courseEarning", charts.courseEarningOptions);
    renderChart("courseImpression", charts.courseImpressionOptions);
  }

  }, []);

  return charts;
};

export default useApexCharts;
