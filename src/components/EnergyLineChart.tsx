"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const labels = [
  "9 AM (Start)",
  "10 AM (Obligatory Meeting)",
  "12 PM (Forced Lunch)",
  "2 PM (Extra Task Added)",
  "5 PM (After-Work Drinks)",
  "8 PM (Neighbor's Party)",
];

const data = {
  labels,
  datasets: [
    {
      label: "Social Battery %",
      data: [100, 80, 60, 42, 25, 10],
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      borderWidth: 2,
      pointBackgroundColor: "#10B981",
      pointRadius: 5,
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: { parsed: { y: number | null } }) => ` Battery: ${ctx.parsed.y ?? 0}%`,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        color: "#94A3B8",
        callback: (value: number | string) => `${value}%`,
      },
      grid: { color: "#374151" },
    },
    x: {
      ticks: { color: "#94A3B8", maxRotation: 30 },
      grid: { color: "#374151" },
    },
  },
};

export default function EnergyLineChart() {
  return <Line data={data} options={options} />;
}
