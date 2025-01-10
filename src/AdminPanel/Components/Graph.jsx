// import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesGraph = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // x-axis labels
    datasets: [
      {
        label: "Sales", // Legend label
        data: [10, 15, 20, 13, 25, 30, 22, 26, 30, 35, 33, 37], // y-axis data
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Point fill color
        tension: 0.4, // Curve of the line
        pointRadius: 5, // Point size
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show/hide legend
        position: "top", // Legend position
      },
      tooltip: {
        enabled: true, // Show tooltips on hover
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // x-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales in K ($)", // y-axis title
        },
        ticks: {
          callback: function (value) {
            return `${value}K`; // Add "K" to y-axis labels
          },
        },
        beginAtZero: true, // Start y-axis at 0
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesGraph;
